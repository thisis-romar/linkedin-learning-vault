---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents
url: "https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents"
duration_minutes: 172
duration: 2h 52m
level: Advanced
updated: 10/29/2024
learners: 66048
skills:
  - LLaMA
  - Threat & Vulnerability Management
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - AI for Cybersecurity
exercise_files: true
github: "https://github.com/LinkedInLearning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-3893128"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHVfuZo09vpTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729015930936?e=2147483647&amp;v=beta&amp;t=dWExLTYF_PhRlYGJG1Ep_Hmv-2ggQOSMNgr3IxnEW3Q"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Leverage AI as a Cybersecurity Analyst]]'
prev_courses:
  - '[[XAI and Interpretability in Cybersecurity]]'
next_courses:
  - '[[RAG for Cybersecurity- Use Cases and Implementation]]'
path_nav: '[{"path":"Leverage AI as a Cybersecurity Analyst","position":6,"total":7,"prev":"XAI and Interpretability in Cybersecurity","next":"RAG for Cybersecurity- Use Cases and Implementation"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/llama
  - skill/threat-vulnerability-management
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/ai-for-cybersecurity
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Fine-Tuning%20LLMs%20for%20Cybersecurity-%20Mistral%2C%20Llama%2C%20AutoTrain%2C%20AutoGen%2C%20and%20LLM%20Agents.md)

![Fine-Tuning LLMs for Cybersecurity: Mistral, Llama, AutoTrain, AutoGen, and LLM Agents](https://media.licdn.com/dms/image/v2/D560DAQHVfuZo09vpTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729015930936?e=2147483647&amp;v=beta&amp;t=dWExLTYF_PhRlYGJG1Ep_Hmv-2ggQOSMNgr3IxnEW3Q)

# Fine-Tuning LLMs for Cybersecurity: Mistral, Llama, AutoTrain, AutoGen, and LLM Agents

> Explore the emergent field of cybersecurity enhanced by large language models (LLMs) in this detailed and interactive course. Instructor Akhil Sharma starts with the basics, including the world of open-source LLMs, their architecture and importance, and how they differ from closed-source models. Learn how to run and fine-tune models to tackle cybersecurity challenges more effectively. Gather insig

> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents) | 2h 52m | Advanced | 66K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (5 videos)
- **[[#1. Open-Source LLMs and Why They're Important]]** (7 videos)
- **[[#2. LLMs and Cybersecurity]]** (7 videos)
- **[[#3. Code Vulnerability Scanning with LLMs]]** (6 videos)
- **[[#4. OSINT with LLM Agents]]** (6 videos)
- **[[#5. Web Vulnerability Scanning with LLM Agents]]** (6 videos)
- **[[#6. LLM-Powered Firewall]]** (7 videos)
- **[[#7. The Future of Cybersecurity with LLMs]]** (7 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to LLMs and LLM agents for cybersecurity
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980&t=0)** - [Akhil] Any new technology with a significant impact that enters the tech industry adds a completely new dimension to the security of existing systems, and LLMs and LLM agents are such technologies.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980&t=13)** More often than not, the wrong guys are the first ones to adapt to these technologies, and this leads to new types of threats.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980&t=19)** This course is an exploration in using a cutting-edge technology called LLMs for a really interesting use case, which is cybersecurity.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980&t=28)** We need to equip the good guys, like the teams responsible for security of complex systems, such as you, to be able to detect and respond to these threats, and that's what the course is going to be all about.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llms-and-llm-agents-for-cybersecurity?u=76281980&t=39)** Hello, everyone, I welcome you all to this LinkedIn course, LLMs and LLM Agents for Cybersecurity, so I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Code Keywords:** case, (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [akhil] (1)

#### Prerequisites of the course
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=0)** - [Akhil] Hey there, in this video, let's go over the prerequisites required to do well in this course.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=6)** To be successful in this course, you need an intermediate level understanding of security and its various aspects like OSINT, Recon, code and web vulnerabilities, threat detection, malware analysis, penetration testing, and a basic understanding of technologies like Linux and Kali Linux as well.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=25)** You also need an understanding of the popular tools used with Kali Linux.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=29)** While we won't be using any Linux or Kali Linux in this course, the only reason I've mentioned that you need to know the tools that come as part of a distribution like Kali Linux is because if you've used those tools, you'll have a good understanding of their use cases in pen testing, or finding vulnerabilities in code, applications, and systems, and that's going to be essential to this course.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=52)** Apart from this, you would also need an intermediate level understanding of AI and LLMs, and some experience building projects with LLM APIs like OpenAI or Anthropic, and building with open-source LLMs like Llama 3 or Mixtral would be highly useful here.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=66)** A good working knowledge of Python is compulsory because all the projects in this course are built with Python and Google Colab.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=73)** Having said this, even if you're not very confident with your Linux skills or your AI knowledge, or even Python, I would still highly recommend you to watch this course and complete it.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=84)** Because if you're curious about this, you will find a way to understand what's being taught in the course, and you'll definitely acquire some critical skills that will help you in your career.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=93)** A quick introduction about me, I'm Akhil Sharma, founder at Armur AI.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=97)** At Armur, we build LLM agents for developer security tooling.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=102)** And we have a platform where you can register and take the security of your software to the next level using all the tools available on the platform.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=108)** Armor AI is backed by Techstars and Outlier Ventures, and we have grants from companies like Aptos, and we are also part of the Google AI startup program, the NVIDIA Inception program, and the Mercury Raise program.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=121)** Because Armur AI works at the intersection of security and LLMs, I've been doing deep research in this field over the past two years, and I want to share all of my learnings with you.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=130)** I'm also an educator.
>
> **[2:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=132)** I've taught more than 200,000 engineers across platforms like YouTube, Udemy, and LinkedIn Learning.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=137)** This is in fact my third LinkedIn Learning course, so you're in really safe hands.
>
> **[2:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=141)** In my free time, I train in mixed martial arts and my current favorites are Muay Thai and jiu-jitsu.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=147)** I'm a black belt in Taekwondo and karate as well.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=150)** I like to surf, especially in South India, which is where I live, even though I'm from the mountains up in the North.
>
> **[2:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=156)** And I also like sailing, and I'm a jazz musician, where I play the guitar and piano.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=160)** I'm very excited to be your mentor during this course, and please know that this is one of the most cutting-edge things you can learn.
>
> **[2:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=166)** So even if this feels difficult, which it will, please hang in there, you will really like it when you make it to the other side.
>
> **[2:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=173)** In the next video, we'll go through the complete table of contents in this course, and a quick overview of what we will be learning in this course.
>
> **[3:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/pre-requisites-of-the-course?u=76281980&t=180)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), find (1), make (1)
> **Code Keywords:** this, (3), let (1), raise (1)
> **Env Vars:** llm (2), osint (1), nvidia (1)
> **Cross-References:** in the next (2)
> **Tools:** colab (1)
> **Speakers:** - [akhil] (1)

#### What can be learned in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=0)** - [Instructor] In this video, we're going to get a complete overview of all that we will be covering in this course.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=6)** There are a lot of details to cover, so let's get started.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=9)** We will start off with the first chapter that's titled Open-source LLMs and why they're important, and in this chapter, we will learn about LLMs, their underlying technologies, core concepts, and what makes them special.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=22)** Then we will quickly go over the current most popular LLMs in the market, and we'll compare the closed source ones to the open source ones and understand why using open source LLMs is important.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=34)** In this course, we are going to use open source LLMs as much as possible, and the main reason for that is they're easily available and very affordable, and that's why this chapter is going to be important to understand how to work with them.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=48)** Our second chapter is about LLMs and cybersecurity.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=51)** We'll learn about the latest threats introduced by this technology, understand how the security world is rapidly changing, and how we can equip ourselves.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=60)** This will lay the foundation for the rest of the course.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=62)** The second chapter won't be completely theory because you will have a small challenge and solution that will allow you to get your hands dirty with the technologies that we will be using.
>
> **[1:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=71)** In our third chapter, we will use an LLM to detect vulnerabilities in code.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=75)** This project will require us to generate synthetic data and then use that to fine-tune our model, and then we can use our fine-tune model to detect vulnerabilities.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=83)** If any of these words don't make sense to you, don't worry.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=86)** We will learn about these in the same chapter.
>
> **[1:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=89)** In our fourth chapter, we build an OSINT tool that uses LLMs.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=93)** OSINT involves research, mostly using the open web, and gathering information that can be used to our advantage.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=99)** We'll cover the basics of OSINT and then go ahead and build our project.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=103)** Our fifth chapter is all about using LLMs agents to build a web vulnerability scanner.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=108)** To scan web vulnerabilities, we will need to equip our agents with some special tools that will help our agents to read and analyze network data data from a website.
>
> **[1:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=117)** We've tried to keep the projects in an increasing level of difficulty because the third project is just LLM fine-tuning, and the fourth and fifth projects require LLM agents, and that's slightly more tricky than just using an LLM.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=129)** In our sixth chapter, we will take things to the next level by building an LLM-powered firewall.
>
> **[2:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=134)** This will be our capstone project as there's a lot that's happening in this project.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=138)** This course ends with the seventh chapter where we discuss the future of cybersecurity with LLMs and how to go beyond this course and resources that you can use to take your learning further.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=148)** All right, I hope you're as excited as I am to start learning.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/what-we-ll-learn-in-this-course?u=76281980&t=152)** In the next video, we'll go with the technology requirements and the setup required for the various technologies used in the course.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), osint (3)
> **Code Keywords:** require (2), let (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Google Colab and other important tools
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=1)** In this video, we will quickly go through all the different tech requirements that we'll be needing in this course.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=7)** The first thing we need is a GitHub account because then you'll be able to afford the accompanying repository that comes with this course.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=15)** So please sign up and you should idly set up two-factor authentication as well as that will allow you to clone any repository on GitHub using SSH or HTTPS.
>
> **[0:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=27)** I usually use SSH when I'm going to be making any changes to the repo or planning to contribute to it, and I use HTTPS when I'm just cloning a repo and have no plans to push to it.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=38)** All right, now that you have cloned the repo to your local machine, let's see how you can open it up.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=45)** One way to open up a repo that you've just cloned is with VS Code.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=49)** You can go to the official installation website and pick up the one for your operating system.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=56)** If you're on Linux, especially Odin 2, you have multiple options to set this up, for example, APT and Snap.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=63)** And depending on your Linux distribution, for example, if you're on Arch Linux, you'll have pacman and other options as well.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=69)** So once you have VS Code set up and you've set up the environment paths correctly, you'll be able to directly open up our project from the terminal.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=77)** Now, like I mentioned in the previous video, I'm expecting you already know Python quite well because you're going to see a lot of it in this course.
>
> **[1:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=85)** The next technology you need to know about is Google Colab and all the projects shown here are Jupyter Notebooks that can be easily opened up in VS Code as we just saw.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=94)** But we will prefer to run these in Google Colab at this course.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=98)** I usually try and keep all my projects inside Google Colab unless absolutely necessary.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=103)** This is because you get a notebook type of format to write code and in the background it runs the code on the server.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=108)** You can access the GPUs you want and just change them with just one click and super simple to use and keeps your project well organized since these are easy to share and manage in the Google Drive.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=119)** The way to use this is that you sign up for Google Colab using your existing Google account and you open up a new Colab notebook.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=130)** So you see the new Google Colab notebook on my screen, and by default you get the T4 GPU for free.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=137)** And usually this works out really well for most projects, but in some cases if you are running a larger model, you may need a bigger GPU.
>
> **[2:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=146)** And in that case you may have to purchase the PRO plan for about $11 a month.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=150)** And even though I'll try to keep the projects light enough to work with a T4 GPU, there might be instances where we require larger GPUs.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=157)** And if this happens, there are two options.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=161)** You can either just check out my Colab, see how it works and how the output looks, and run the same code in your local Jupyter Notebook that runs on your PC or even on the cloud like AWS SageMaker.
>
> **[2:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=173)** The second option is just to pay $11 for a month, use the larger GPUs to run the programs, test them out, and then if you don't need Colab after that, you can maybe discontinue.
>
> **[3:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=184)** You can also sign up on Hugging Face and get your API key.
>
> **[3:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=187)** Hugging Face is basically the place where we'll be downloading our LMS or AI models from.
>
> **[3:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=194)** An interesting website to check out is Replicate.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=196)** So if you don't want to run the LM by downloading from Hugging Face onto your Google Colab, because that's sometimes a bit slow, you can just use Replicate.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=204)** They basically have LMS deployed to be used, so you can just use any of the popular open source LMS available with just an API key, and you only have to pay for the API usage based on the amount of tokens generated.
>
> **[3:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=219)** You will also need an OpenAI API key, an Anthropic API key, and a Groq API Key later in this course.
>
> **[3:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=229)** Getting these API keys is really straightforward and there are plenty of resources on the internet to help you with this.
>
> **[3:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/google-colab-and-other-important-tools?u=76281980&t=234)** In the next video, we'll talk about what's required to be successful in this course.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), gpu (3), lms (3), ssh (2), https (2)
> **Tools:** colab (9), vs code (3), github (2), jupyter (2), terminal (1)
> **CLI Commands:** ssh (2), apt (1), snap (1), python (1), aws (1)
> **Code Keywords:** let (1), super (1), require (1), from. (1), this. (1)
> **Cross-References:** previous video (1), later in (1), in the next (1)
> **Prerequisites:** set up (3)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)

#### How to make the most of this course
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=1)** In this video, I want to talk to you about how you can make the most out of this course.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=5)** A great tip to be able to complete this course would be that if there's any topic or technology that you're having difficulty with, you can pause and find out more resources about that particular technology.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=16)** Read a bit, learn a little, and then come back to the course.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=18)** Don't completely abandon this course.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=21)** The other thing you can do is that if a particular lesson or chapter is difficult, you can jump to the next lesson or chapter.
>
> **[0:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=27)** The chapters in this course don't build up on each other.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=30)** Once you've done the second chapter, you can pick up any of the project chapters without going in order.
>
> **[0:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=35)** You don't have to abandon the whole course just because you didn't understand a small part or a particular technology used in a particular chapter in this course.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=44)** Now that you have my socials, if you're stuck anywhere in the course, feel free to reach out to me on LinkedIn or Twitter.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=49)** I'm highly active on those platforms, and I try and respond to almost all DMs.
>
> **[0:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=54)** The code from this course will be available to you in GitHub, and it might so happen that you might not understand some of the aspects in the code when I explain it in the course.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=63)** In such a scenario, there are multiple options.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=65)** The first option is to run the code on your own and understand what it actually does.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=69)** The way I've organized the code is that each logical section has its own cell in the accompanying Google collab file, and along with that is its output.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=78)** This has been done carefully so that you're able to quickly understand what the code in the cell does.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=82)** If you don't understand the code after running it on your own or even from the output, the second option is to check out the documentation for that particular Python code.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=91)** Maybe it's PyTorch code or LangChain or CrewAI code, and you can easily find explanations and documentation.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=98)** The third option is to use ChatGPT to help you explain that code.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=102)** In some cases, you might have to ask multiple questions to ChatGPT, because it won't get it right in the first attempt, because most of these libraries are quite cutting-edge and it's possible that ChatGPT had a training cutoff date in the past before these libraries were updated, and in this case, ChatGPT will hallucinate and give you the wrong information, and this is why it's option number three and not one or two.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-to-make-the-most-of-this-course?u=76281980&t=124)** From the next video onwards, we start off with Chapter 1, so let's gear up and I'll see you in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1), python (1)
> **Code Keywords:** case, (1), let (1)
> **Cross-References:** next video (1), in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. Open-Source LLMs and Why They're Important

> [[#Table of Contents|↑ Back to Table of Contents]]

#### GenAI and top LLMs: GPT4, Claude, and Gemini (closed source)
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=0)** - [Instructor] Welcome to the first chapter in our course, and this chapter is called "Open-Source LLMs and Why They're So Important."
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=7)** In this chapter, we'll understand the importance of open-source large language models.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=13)** As we've established, we are building cybersecurity tools that are powered with LLMs and LLM agents.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=19)** Now, LLM agents are actually themselves powered by LLMS, and they just enable LLMs to achieve some tasks.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=26)** Now, there are many types of LLMs on the market and some are closed-source, while some are open-source.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=31)** In our course, we'll be building projects with both of them.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=34)** Now, in most of the cases, you will be fine building projects with closed-source LLMs, such as the ones offered by OpenAI or Anthropic, but there are many use cases where you want to use open-source LLMs, and we will talk about this in this chapter.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=48)** But before we do that, let's first learn about generative AI, also called Gen AI and LLMS, or large language models.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=56)** Now, AI has been around for quite some time, but gen AI is the new wave of AI that's changing the way we work with AI, and it's also disrupting a lot of old technologies.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=66)** Large language models are what make gen AI possible.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=70)** And towards the end of this video, we'll also look at the differences between open-source and closed-source LLMs and the use cases for each of these.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=79)** So generative AI or gen AI refers to AI systems capable of creating new content that is remarkably similar to what human beings might produce.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=88)** These systems are not just about understanding and responding to inputs, but generating new and unique outputs tailored to specific needs, including cybersecurity, which is the subject of this course.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=101)** For example, gen AI can help in vulnerability assessment by generating custom exploits to test your system's resilience.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=109)** LLMs can generate detailed penetration testing reports and perform OSINT analysis.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=114)** Gen AI can automatically draft comprehensive reports after a security audit, saving analysts hours of work.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=122)** Moreover, gen AI can also help to simulate a variety of cyber attacks to test and improve your security measures.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=129)** It can create complex attack scenarios, allowing your team to practice their responses to advanced persistent threats.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=136)** It can do some really dangerous things as well, like it can generate realistic phishing emails, but cybersecurity professionals can use that for training purposes, helping to prepare your team for dealable threats.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=148)** Gen AI can even create malware and that can help security professionals for testing the defenses and to see how well the systems hold up under attack.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=158)** Let's first look at some of the leading closed-source LLMs.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=161)** First, we have GBD-4 by OpenAI.
>
> **[2:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=164)** GBD-4 is built using the transformer architecture, which is something we will talk about in the next video, and it has 175 billion parameters.
>
> **[2:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=172)** It excels at generating human-like text and understanding context across a wide range of topics.
>
> **[2:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=177)** GBT-4's large parameter size enables it to perform complex language tasks with high accuracy, making it one of the most powerful language models available.
>
> **[3:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=187)** Next we have Claude by Anthropic.
>
> **[3:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=190)** Claude is designed with the focus on AI safety and ethical use.
>
> **[3:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=194)** Claude incorporates advanced safety mechanisms and ethical guidelines, making it suitable for sensitive applications where trust and reliability are paramount.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=203)** It's optimized for applications where ethical considerations are crucial, ensuring responsible AI deployment.
>
> **[3:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=209)** Claude has three sizes, Haiku, Sonnet, and Opus, with increasing number of parameters respectively.
>
> **[3:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=216)** Lastly, Gemini by Google DeepMind.
>
> **[3:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=219)** Gemini utilizes a highly optimized version of the transformer architecture and is known for its advanced reasoning and decision-making capabilities.
>
> **[3:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=226)** One of its unique strengths is its seamless integration with various Google applications enhancing tools like Google Workspace with advanced AI capabilities.
>
> **[3:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=236)** This integration allows for improved productivity and efficiency in everyday tasks.
>
> **[4:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=241)** So you can see different models have different USPs, and you can use these based on your use case.
>
> **[4:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=247)** Closed-source LLMs are privately owned, meaning their code and models are not shared with the public.
>
> **[4:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=252)** This allows these companies to control their use and keep a competitive edge.
>
> **[4:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=256)** On the other hand, open-source LLMs like Llama, Mistral AI, GPT Neo and Bloom, et cetera, have their code and models available for anyone to use and modify.
>
> **[4:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=266)** This openness is great because it adds a new dimension to the extent to which we can push the limits because closed-source models have a lot of guardrails preventing them from going beyond a certain extent.
>
> **[4:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=277)** Open-source LLMs are great because they let everyone from researchers to hobby experiment and improve on them without restrictions.
>
> **[4:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=285)** Here are some awesome advantages.
>
> **[4:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=287)** Customization, anyone can fine-tune these LLMs on their own data for specific use cases.
>
> **[4:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=292)** Integration, they can be easily added to existing systems to boost productivity.
>
> **[4:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=297)** Security, since you're using your own setup, your data stays private, making it safer than some closed-source options.
>
> **[5:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=304)** And the third reason is the main reason why many companies choose to deploy open-source LLMs for their use cases.
>
> **[5:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=310)** And this is the reason some of the projects in our course will also use open-source models.
>
> **[5:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=315)** Now, in the next video, we look into the internal workings of LLMs, starting with the revolutionary Transformer architecture.
>
> **[5:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=322)** This foundation will help you understand how these models operate internally and how you can leverage them for your projects.
>
> **[5:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/gen-ai-and-top-llms-gpt4-claude-gemini-closed-source?u=76281980&t=329)** Stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), llms (2), gbd (2), osint (1), gbt (1)
> **Code Keywords:** let (3), case. (1), public (1), private (1)
> **Cross-References:** in the next (2)
> **Definitions:** is called (1), refers to (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Important LLM concepts: Transformer architecture, attention, quantization, parameter offloading, and fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=0)** - [Instructor] Welcome to the video on important LLM concepts.
>
> **[0:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=3)** And in this video, we will learn about some concepts that will enable us to get a fundamental understanding of large language models.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=10)** By the end of this video, you'll understand the transformer architecture, attention mechanism, quantization techniques, and parameter offloading and why these are game-changers in AI.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=21)** As we discussed in the previous video, many advanced LLMs, like GPT-4, are built on the transformer architecture.
>
> **[0:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=27)** It's crucial to understand this, because transformers are the backbone of these models.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=32)** So what exactly is the transformer architecture?
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=34)** It was introduced by Google in the 2017 research paper "Attention is All You Need."
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=39)** The transformer is a deep learning model that revolutionized AI and is also affecting cybersecurity with its use of the multi-head attention mechanism.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=47)** The transformer converts text into numerical representations called tokens which are transformed into vectors through word embeddings.
>
> **[0:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=54)** Unlike older models, like LSTMs, transformers process entire sequences simultaneously with multi-head attention.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=62)** This allows the model to focus on different parts of the input data at the same time, enhancing context understanding and making creating faster and more efficient.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=72)** The key innovation in transformers is the attention mechanism.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=75)** Attention in transformers allows the model to focus on relevant parts of the input data, enhancing its performance.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=81)** There are two main types: Self-attention: This mechanism weighs the importance of each word in a sentence relative to others, helping resolve ambiguities and improving context understanding.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=93)** For example, in the animal didn't cross the street because it was too tired, self-attention helps the model understand it refers to the animal.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=103)** Multi-head attention: This involves multiple attention mechanisms working in parallel, each processing the input sequence independently.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=111)** Multiple heads allow the model to focus on different aspects of the sentence simultaneously, leading to a richer representation and improved accuracy.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=119)** For example, different heads can focus on syntax and semantics at the same time.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=124)** To better understand transformers and attention, I highly recommend reading the original paper: "Attention is All You Need."
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=131)** Next is quantization.
>
> **[2:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=132)** Quantization is a technique used to reduce the size of large language models by converting high-precisions values to lower-precision ones.
>
> **[2:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=139)** For instance, LLMs typically use 32-bit floating-point numbers, but for quantization, these can be converted to 16-bit or even eight-bit values.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=147)** This significantly decreases the model's memory requirements and speeds up processing.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=151)** The need for quantization arises because LLMs are often developed to run on high-end GPUs.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=157)** Quantization makes it possible to run these models efficiently on lower-end GPUs and even CPUs, thereby enabling broader accessibility and reducing deployment costs.
>
> **[2:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=167)** There are two main types of quantization: post-training quantization, or PTQ, which is applied after the model is trained, and quantization-aware training, or QAT, incorporated during training, leading to better accuracy.
>
> **[3:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=181)** Let's quickly talk about parameter offloading.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=183)** Parameter offloading is a technique used to manage memory efficiently by offloading parameters to secondary storage when not in use.
>
> **[3:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=189)** This allows very large models to run on hardware with limited memory, which is especially useful in applications where resources might be constrained.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=196)** And even when the resources are not constrained, parameter offloading just makes for more efficient use of resources.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=203)** To summarize, we've covered the transformer architecture, attention mechanism, quantization, and parameter offloading.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=208)** These concepts form the foundation of modern LLMs.
>
> **[3:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=214)** In the next video, we'll dive into some of the top open source LLMs, like Llama, Mistral, and Code Llama.
>
> **[3:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/important-llm-concepts-transformer-architecture-attention-quantization-parameter-offloading-finetuning?u=76281980&t=218)** We'll explore their capabilities and how they rank on the Hugging Face leaderboard, so stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** self (2), this, (1), let (1)
> **Env Vars:** llm (1), gpt (1), ptq (1), qat (1)
> **Cross-References:** we discussed (1), previous video (1), in the next (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), for instance (1)
> **Speakers:** - [instructor] (1)

#### Open source LLMs: Llama, Mistral, Mixtral, and Code Llama
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=0)** - [Instructor] Welcome to our video on some of the top open source LLMs out there.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=4)** Today, we'll learn about top LLMs like LlaMA, Mistral, and Code Llama, and explore what makes these models stand out.
>
> **[0:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=11)** By the end, you'll have a solid understanding of these powerful models.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=15)** Meta has taken a unique stance in the large language models space by openly sharing their powerful models.
>
> **[0:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=20)** The journey began with the release of the large language model, Meta AI, an open source model designed for research and commercial use.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=28)** LLaMA 1 laid the groundwork for advancements in natural language processing and AI applications.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=33)** Building on the success of LLaMA 1, Meta released LLaMA 2 in July, 2023.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=37)** This improved version features models ranging from seven to 70 billion parameters, fine tuned with reinforced learning from human feedback, which is RLHF.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=47)** LLaMA 2 supports various tasks including chatbot functionality and programming assistance through specialized versions like LLaMA Chat and Code Llama.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=56)** The latest in the series, LLaMA 3.1, introduced in July, 2024, represents a significantly leap forward.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=62)** With an expanded context length of 128K and support for eight languages, the four or 5 billion parameter model offers unmatched flexibility and state-of-the-art capabilities.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=73)** LLaMA 3.1 supports advanced applications such as synthetic data generation and model distillation, aiming to push the boundaries of what open source AI can achieve.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=83)** Next up is the Mistral family.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=84)** Mistral AI has developed a series of advanced language models, starting with Mistral 7B, a 7.3 billion parameter model known for its efficiency and performance.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=94)** Released under the Apache 2.0 license, Mistral 7B employs a grouped query attention mechanism, allowing it to outperform larger models like LLaMA 2 13B on various benchmarks.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=105)** This model is available both as a base model and a fine tuned instruct variant designed for chat-style prompts.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=111)** Expanding on their open source offerings, Mistral AI introduced Mixtral 8x7B and Mixtral 8x22B, utilizing a sparse mixture of experts architecture to achieve high performance with manageable computational costs.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=124)** These models feature group of experts to optimize their parameter usage, allowing them to compete with top tier models like GPT 3.5 and LLaMA 70B.
>
> **[2:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=134)** Additionally, Mistral released Codestral 22B, a code-focused model excelling in programming tasks and Mathstral 7B, tailored for STEM subjects, highlighting the diverse and innovative model portfolio.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=147)** Now, let's talk about Code Llama.
>
> **[2:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=149)** Meta's Code LlaMA is a cutting-edge large language model designed for coding tasks built on top of LlaMA 2.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=154)** It can generate code and explain code concepts from natural language prompts, making it a versatile tool for both developers and those learning to code.
>
> **[2:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=162)** Code LlaMA is available in three versions: the foundational model, a Python-specialized model, and an instruct variant fine tuned for understanding natural language instructions.
>
> **[2:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=171)** The Code LlaMA model comes in various sizes including 7B, 13B, 34B, and the newly released 70B with each trained on extensive data sets to ensure high performance.
>
> **[3:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=181)** These models support popular programming languages such as Python, C++, Java, and more.
>
> **[3:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=186)** By providing robust coding assistance and improving productivity, Code LlaMA stands out as a valuable resource for enhancing software development workflows and for cybersecurity purposes as well.
>
> **[3:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=197)** Hugging Face is the industry standard when it comes to hosting open source LLMs and other AI models that you can download.
>
> **[3:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=202)** You can directly interact with LLMs on Hugging Face.
>
> **[3:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=205)** Now, apart from hosting an inference, Hugging Face also has a leaderboard where the top models are ranked, and this helps AI engineers pick the best models that have been preevaluated for them.
>
> **[3:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=214)** All the models we have discussed in this video rank highly on the Hugging Face leaderboard, which evaluates models based on their performance across various tasks.
>
> **[3:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=222)** The leaderboard is a great resource to see how these models stack up against each other in real-world applications.
>
> **[3:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=228)** To summarize, we have looked at the most popular LLMs on Hugging Face.
>
> **[3:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=231)** The LlaMA family excels in general NLP tasks, Mistral models are optimized for efficiency, and Code LlaMA is tailored for code-related tasks.
>
> **[3:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=239)** Each model has its strengths, making them valuable tools.
>
> **[4:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=242)** For example, LlaMA models can help in threat detection, Mistral models can help in real-time monitoring, and Code LlaMA can be used for secure code generation and analysis.
>
> **[4:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=250)** In our next video, we'll explore how to find and run models using popular platforms like Hugging Face Replicate, and Google Colab.
>
> **[4:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/open-source-llms-llama-mistral-mixtral-codellama?u=76281980&t=256)** This will help you get hands-on experience with these powerful tools. So stay tuned.

> [!info]- Semantic Content
>
> **Versions:** 3.1 (2), 7.3 (1), 2.0 (1), 3.5 (1)
> **CLI Commands:** python (2), apache (1), find (1)
> **Env Vars:** rlhf (1), gpt (1), stem (1), nlp (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** next video (1)
> **Tools:** colab (1)

#### Assets to find and run models: Hugging Face, Replicate, Google Colab, and Ollama
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=0)** - [Instructor] Welcome to this video on running large language models with limited resources.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=5)** In this video, we'll explore how to use platforms like Google Colab and Hugging Face to enable us to easily work with LLMs.
>
> **[0:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=11)** By the end of this video, you'll know how to set up and run large language models efficiently on these platforms.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=18)** Many of us face challenges like limited RAM, storage, and low-end CPUs or GPUs.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=24)** These constraints can make it tough to work with large language models directly on our personal computers.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=30)** Google Colab is a fantastic solution for running LLMs without needing powerful hardware locally, because it runs the hardware on the cloud for us.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=40)** It also provides free access to GPUs like the Nvidia T4 GPU, which is excellent for learning and experimenting.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=50)** Then we have Hugging Face.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=51)** It is an open source platform that hosts a wide variety of large language models and data sets, and we talked about it in the previous video as well.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=59)** It's basically a treasure trove for anyone working with AI.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=63)** As you know, by now, on Hugging Face, you can find models like GPT-Neo, Llama, and many others, all available for free use and customization, and this is where we are going to get our models from.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=75)** Since we're going to be working with LMS all throughout the course, the basic building block of any of the projects is going to be to import an LLM into our project.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=83)** So now I want to show you how to import a model from Hugging Face and Google Colab.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=87)** First, you'll need some essential libraries.
>
> **[1:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=90)** So we first get transformers, which is a library by Hugging Face that provides pre-trained models and tools for natural language processing tasks, such as text classification, translation, and summarization.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=103)** Then we have Torch, which provides the foundational tools for building, training, and fine tuning models.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=108)** It supports efficient tensor computations, automatic differentiation, and GPU exploration, which are essential for handling the complex architectures of modern language models.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=120)** Next, we load our model, and it's called GPT-Neo.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=124)** And it's a tiny model, because it's just 1.3 billion parameters, and we're loading a small model so that we can get it done quickly.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=131)** From transformers, we import AutoModelForCausalLM, a class that automatically selects and loads a pre-trained causal language model for tasks like text generation, and AutoTokenizer, a class that automatically selects and loads the appropriate tokenizer for the model, which converts text to a format the model can understand and vice versa.
>
> **[2:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=155)** Once the model is loaded, you can run an inference, and here's an example to generate text based on a prompt.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=161)** The prompt is a string containing the text for which we want the model to generate a response, which is what are the latest trends in cybersecurity.
>
> **[2:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=169)** We also encode this input prompt using a tokenizer, and it's available to us in the inputs variable.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=178)** The model.generate function generates a sequence of text based on the encoded input.
>
> **[3:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=185)** The tokenizer.decode function converts the generated tensor back into human readable text, and then we print this generated text, and you can then see the output for our query.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=198)** And the LLM gives examples of cyber threats, but doesn't really give the answer to our query, which was about latest trends in cybersecurity.
>
> **[3:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=206)** This is expected, because the LLM we're using is too small to be highly effective, and also our model is not fine tuned.
>
> **[3:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=212)** We'll talk about that in the next video.
>
> **[3:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=216)** All right, a quick summary.
>
> **[3:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=218)** We just learned how to import LLMs and run inference with them, and this is a really important building block for all of our upcoming projects.
>
> **[3:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=226)** So in case you're not clear on this, do refer to the shared Colab file and also watch this video again.
>
> **[3:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=231)** In the next video, we'll explore how to fine tune these models for specific tasks.
>
> **[3:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=235)** This will be crucial for customizing LLMs to meet your cybersecurity needs.
>
> **[3:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/assets-to-find-and-run-models-hugging-face-replicate-google-colab-ollama?u=76281980&t=238)** Stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), gpu (2), gpt (2), ram (1), lms (1)
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** function (2), from. (1), this, (1)
> **Cross-References:** in the next (2), we talked about (1), previous video (1)
> **Tools:** colab (4)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Versions:** 1.3 (1)

#### Fine-tuning models: QLoRA, PEFT, and Unsloth
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=0)** - [Instructor] Welcome to this video on fine-tuning models as part of our course on LLMs and cybersecurity.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=6)** In the previous video, we noticed how our LLM gave a response, but it wasn't up to the mark.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=12)** And LLMs can be refined for specific use cases by simply fine-tuning them.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=16)** And in this video, I'll explain to you how this can be done.
>
> **[0:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=20)** By the end of this video, you'll understand how to fine-tune a model based on available dataset for a specific purpose to make the LLM more accurate.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=28)** Fine-tuning is basically adapting a pre-trained model to a specific task or domain using a smaller targeted dataset.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=37)** This process leverages the existing knowledge of the pre-trained model while tailoring it to new specific requirements.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=43)** And this is done by adjusting and updating the weights of the model.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=47)** Fine-tuning reduces the need for extensive computational resources compared to training a model from scratch.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=55)** There are various fine-tuning methods, such as full fine-tuning, where all model weights are updated and parameter efficient fine-tuning, PEFT methods, like LoRA and QLoRA.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=66)** Now LoRA focuses on fine-tuning smaller matrices within the model, significantly reducing memory requirements, while QLoRA takes it a step further by quantizing these matrices for even greater efficiency.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=78)** To help us with fine-tuning, we usually use tools, like Hugging Face AutoTrain and Unsloth, that can help simplify the fine-tuning process.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=86)** Hugging Face AutoTrain automates much of the setup and training, making it easier to fine-tune models.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=92)** Unsloth offers an intuitive interface for managing and fine-tuning models with minimal coding, making it accessible for users with different skill levels.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=101)** Unsloth specifically optimizes the fine-tuning process for large language models, like LLaMA 3 and Mistral, reducing memory usage by 70% without sacrificing accuracy.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=111)** To fine-tune an LLM, you will ideally follow these steps.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=114)** Select a pre-trained model that's already quite good.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=118)** Gather and pre-process a relevant dataset.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=120)** Configure the model for training using a technique like QLoRA.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=124)** Train the model on your dataset and evaluate its performance, both qualitatively and quantitatively, to ensure it meets the desire objectives.
>
> **[2:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=132)** This approach ensures high performance with optimized resource usage, making it ideal for specialized NLP tasks.
>
> **[2:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=139)** In conclusion, having a great model to begin with and a well-labeled dataset are crucial to fine-tuning a model.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=145)** In the next video, we'll tackle a practical challenge that'll inspire you to get your hands dirty.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-models-qlora-peft-unsloth?u=76281980&t=150)** So see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), peft (1), nlp (1)
> **Cross-References:** in the next (2), previous video (1)
> **Prerequisites:** setup (1), configure (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Import an LLM in Colab
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=6)** In this video, I have a small challenge for you that'll help you build on everything that you've learned up until now.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=12)** Also note, that this is going to be the easiest challenge in this entire course.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=16)** All other challenges are going to be significantly more difficult.
>
> **[0:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=20)** So let's take on our first hands-on challenge.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=23)** All right, let's see what this challenge is all about.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=25)** We need to import a very specific LLM called Zephyr-7B-beta from Hugging Face and get it running on Google Colab.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=33)** This is a great model for this challenge because it's 7-billion parameters in size and that's quite large model.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=39)** Try loading it without any compression techniques so that you get a feel of how long it usually takes.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=45)** Here are some steps that'll help you complete this challenge.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=48)** Set up Google Colab.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=49)** So, you open a new Google Colab notebook and change the runtime to GPU for better performance.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=55)** Install packages where you install Hugging Face Transformers, Accelerate, bitsandbytes, and other dependencies.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=63)** Load the model where you use the Hugging Face library to load a pre-trained model.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=67)** And generate text where you create a prompt, send it to the LLM, and see what the model generates.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=72)** That's it, that's all we have to do.
>
> **[1:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=74)** That's quite straightforward, so let's get started.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=77)** Now, take a few minutes and try to implement the solution, and in the very next video, we will look at the solution and try to understand it.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-import-an-llm-in-colab?u=76281980&t=83)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** llm (2), gpu (1)
> **Tools:** colab (3)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** next video (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Learn how to import an LLM from Hugging Face
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=6)** In this video, we are going to look at the solution for the challenge of importing an LM from Hugging Face into Google Colab.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=12)** The challenge was quite similar to what we had just done a few years back where we had imported an LM and ran inference with it.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=19)** So were you able to complete this challenge?
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=21)** If not, don't worry.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=23)** We will now look at the solution and break it down.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=26)** First things first, let's set up our Google Colab environment.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=29)** Open up a new notebook and change the runtime to the T4 GPU.
>
> **[0:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=35)** Next, we'll install some packages.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=38)** Here, we are upgrading pip because it's going to be used to install and manage other Python packages.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=44)** By upgrading it, we ensure that we have the latest features.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=49)** Next, we uninstall existing versions of some PyTorch-related libraries, and the next line, we reinstall the same libraries, but with GPU support.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=61)** Then, we install the Hugging Face transformers library and we get three more dependencies.
>
> **[1:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=68)** The first is accelerate, which makes it easier to train and use models on various hardware configurations like GPUs without modifying code.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=77)** Then, we have the bits and bytes library that provides efficient 8-it optimizers and quantization techniques, helping in reducing memory usage during training or inference.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=87)** And the xFormers library that's aimed at improving the efficiency of transformer models, particularly in terms of memory and speed.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=96)** Now that our environment is set up, it's time to load our LLM.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=102)** We'll use the Hugging Phase transformers library to load a model.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=105)** So we import the pipeline function from the transformers library because we need to create a text generation pipeline to be able to interface with our LLM.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=116)** And bfloat16 from Torch, and that's going to help us optimize memory usage and performance when loading our model.
>
> **[2:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=125)** Then we create a text generation pipeline using the zephyr-7b-beta model.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=130)** The torch_dtype argument specifies the data type, which is bfloat16, and the device_map is equal to auto allows automatic device allocation depending on availability.
>
> **[2:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=143)** Before we generate some text, let's create a chatbot prompt.
>
> **[2:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=146)** We can use the tokenizer's chat template to format our messages easily.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=150)** Here's how to set it up.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=152)** We define a list of messages to create a chatbot prompt.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=157)** The apply_chat_template method formats the message into a suitable prompt for the model.
>
> **[2:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=163)** The tokenize is equal to false argument ensures the prompt is not tokenized at this stage and add_generation_prompt is equal to true adds a generation prompt to the formatted messages.
>
> **[2:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=175)** Finally, let's generate some text.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=178)** With our prompt ready, we can pass it to the model and get the output.
>
> **[3:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=182)** We pass the formatted prompt to the text generation pipeline, which is available to us with pipe.
>
> **[3:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=188)** The max_new_tokens is equal to 256 argument specifies the maximum number of tokens to generate.
>
> **[3:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=194)** do_sample is equal true enable sampling.
>
> **[3:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=197)** Temperature 0.1 and top_p 0.95 control the randomness of the generated text.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=204)** Finally, we print the generated_text, which is now available in the output variable.
>
> **[3:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=211)** And in the output you see a joke about large language models that's been generated by our LLM.
>
> **[3:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=217)** So mission accomplished.
>
> **[3:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=219)** Congratulations on completing the first challenge!
>
> **[3:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=222)** Importing an LLM and performing inference is a crucial skill as we move forward in our course.
>
> **[3:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=227)** In the next chapter, we'll explore how to find you these models for specific tasks related to cybersecurity.
>
> **[3:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-learn-to-import-an-llm-from-huggingface?u=76281980&t=231)** So see you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), pass (2), function (1), interface (1)
> **Code Identifiers:** xformers (1), torch_dtype (1), device_map (1), apply_chat_template (1), add_generation_prompt (1)
> **Env Vars:** llm (4), gpu (2)
> **Prerequisites:** install (3), set up (2)
> **CLI Commands:** pip (1), python (1), find (1)
> **Versions:** 0.1 (1), 0.95 (1)
> **Tools:** colab (2)
> **Cross-References:** in the next (1)


### 2. LLMs and Cybersecurity

> [[#Table of Contents|↑ Back to Table of Contents]]

#### New evolving threats, powered by LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=0)** - [Instructor] Welcome to the second chapter of this course.
>
> **[0:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=3)** By now, we've understood quite a bit about LLMs and why they're important.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=7)** But now, we want to understand how these are important from a cybersecurity standpoint, and this is what this chapter is dedicated to.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=13)** In the first half of this chapter, we are going to understand how attackers have started using LLMs.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=18)** And in the later half, we will talk about how cybersecurity professionals can use these LLMs to keep their systems secure.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=25)** We end the chapter with a core example on synthetic data generation, which is something that will help us fine-tune models much better, and we'll talk about this in detail.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=34)** And we'll finally have a very interesting coding challenge to end the chapter with.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=38)** I hope you're as excited as I am for this chapter.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=42)** Now, this particular video is called, "New Evolving Threats that are Powered by LLMs."
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=47)** And to be honest, there are hundreds of such new threats, but let's just talk about four such cyber threats that have recently evolved due to use of LLMs, and that'll be enough to give us an idea.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=58)** LLM-enhanced phishing attacks.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=60)** Cyber criminals are using LLMs to craft highly sophisticated and personalized phishing emails.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=65)** These AI-generated messages can mimic the tone, style, and content of legitimate communications, making them more convincing and harder to detect.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=75)** The LLMs analyze vast amount of data to tailor messages to specific individuals, increasing the likelihood of successful attacks.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=84)** The precision and effectiveness of these attacks can lead to significant data breaches and financial losses.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=91)** Next up is AI-generated malware.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=94)** LLMs can generate malicious code that is novel and obfuscated, making it harder for traditional security systems to detect.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=102)** These AI-created malware variants can adapt to evade detection mechanisms leading to more successful infections.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=110)** The ability to produce unique and undetectable malware increases the risk of widespread infections and breaches.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=116)** Next is AI-powered vulnerability discovery.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=119)** Attackers are using LLMs to scan and analyze code for vulnerabilities at an unprecedented scale and speed.
>
> **[2:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=125)** These models can identify weak points in software, which can then be exploited for attacks.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=131)** Unlike traditional methods, LLMs can also generate exploits for newly discovered vulnerabilities autonomously.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=137)** The speed and efficiency of LMM-driven vulnerability discovery put pressure on organizations to patch systems more quickly, as a window between discovery and exploitation becomes narrower.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=148)** Next is LMM-based autonomous penetration testing.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=151)** Penetration testing is a common practice for assessing the security of a company's IT infra.
>
> **[2:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=155)** However, LLMs can be weaponized to automate and enhance this process, allowing attackers to run continuous autonomous penetration tests on a company's network.
>
> **[2:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=165)** Such LMM-driven autonomous penetration tests can continuously probe a company's defenses, finding and exploiting vulnerabilities faster than security teams can respond.
>
> **[2:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=174)** I hope this video gave you a bit of perspective, and now you appreciate how the tech world, and especially the cybersecurity world, is changing, just because LLMs accelerate everything.
>
> **[3:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/new-evolving-threats-powered-by-llms?u=76281980&t=184)** In the next video, let's look at some more advanced things that hackers can do, just so that you're aware of where these things are headed.

> [!info]- Semantic Content
>
> **Env Vars:** lmm (3), llm (1)
> **Code Keywords:** let (2)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Advanced attacks by hackers using LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=1)** In the previous video, we saw some examples of how LLMs can be used to accelerate cyber threats.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=7)** In this video, let's take things up a notch and let's talk about some advanced things that hackers can do.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=12)** Now, please note that we will discuss this in way more detail in the last chapter of this course.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=16)** But now is a good time to talk about it briefly, because from next video onwards, we want to talk about what security professionals can do with LLMs.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=24)** LLM-Enhanced Botnets.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=26)** Large language bottles are now being used to enhance botnets by enabling them to operate more intelligently and autonomously.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=33)** These botnets can leverage LLMS to dynamically generate and adapt their attack strategies, making them more resilient against traditional cybersecurity defenses.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=42)** For example, LLMS can be used to analyze network traffic in real time and adjust the behavior of bots to avoid detection.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=51)** Additionally, LLMs can facilitate communication between bots, enabling them to coordinate complex attacks without needing centralized control, making them harder to take down.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=61)** LLM-Powered DDoS Attacks.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=64)** Distributed denial of service attacks, as you might know, traditionally involve overwhelming a target system, network, or service with a massive flood of traffic from multiple sources, often through a network of compromised devices known as a botnet.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=77)** With the advent of large language models, these attacks have evolved to become more sophisticated, adaptive, and harder to defend against.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=84)** LLMS can be used to identify the most critical services or infrastructure competence within a target's network, and focus the DDoS attack on these points.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=92)** By selectively overwhelming key resources such as authentication servers, APIs, or databases, the botnet can cause maximum disruption with minimal traffic, making that act more efficient and harder to mitigate.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=104)** Intelligent Data Poisoning Attacks.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=106)** In a data poisoning attack, malicious actors manipulate the training data of an AI model to introduce vulnerabilities or biases.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=114)** LLMS can be used to craft subtle undetectable alterations to larger assets that when fed into training processes, cause the resulting models to behave in unintended or insecure ways.
>
> **[2:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=125)** AI-Powered Code Obfuscation and Malware Evasion.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=129)** Hackers can use LLMS to create highly obfuscated code that is difficult to analyze or detect by traditional anti-malware systems.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=136)** The elements can generate code that mimics benign software or continually mutate the code to avoid signature-based detection.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=144)** Additionally, LLMs can produce polymorphic malware that changes its appearance with each infection, further rearing detection.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=151)** Advanced Credential Stuffing and Brute-Force Attacks.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=154)** Credential stuffing attacks involve using stolen credentials to gain unauthorized access to accounts.
>
> **[2:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=159)** LIMS can be leveraged to analyze patents and password databases, generating more effective guesses in brute force attacks, or creating realistic looking usernames and passwords for credential stuffing.
>
> **[2:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=168)** LLMS can also adapt to password policies and generate variance that comply with common requirements.
>
> **[2:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=175)** All right, so now we know where all the danger lies with LLMS in the wrong hands.
>
> **[2:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/advanced-attacks-by-hackers-using-llms?u=76281980&t=179)** So in the next video, let's talk about how cybersecurity professionals are using LLMS to secure their infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** llms (8), llm (2), lims (1)
> **Cross-References:** previous video (1), in the last (1), next video (1), in the next (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** for example (1), such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### How cybersecurity professionals use LLMs for good
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=1)** Up until now in the course, we've been only talking about how hackers use LLMs.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=6)** But in this video, we're discussing how security professionals use LLMs to defend their infrastructure against ever-evolving threats, such as the ones we learned about in the previous videos.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=16)** Anomaly detection and threat identification.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=18)** LLMs can be trained on vast amounts of network traffic data, learning the normal patterns and behaviors within a network.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=25)** Once trained, these models can detect anomalies that may indicate malicious activity, such as unusual spikes in traffic, unexpected data flows, or deviations from typical user behavior.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=36)** Natural language processing for log analysis.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=39)** Security logs and alerts often contain large amounts of unstructured text data.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=44)** LLMs excel at natural language processing, making them ideal for parsing and analyzing these logs.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=50)** They can identify key phrases, correlations, and contextual clues that suggest security incidents.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=57)** Automated incident response and playbook generation.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=61)** LLMs can assist in automating the response to security incidents by generating and executing response playbooks.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=67)** These models can recommend or even autonomously implement mitigation steps based on the nature of the detected threat.
>
> **[1:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=74)** Predictive analytics and forecasting.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=76)** By analyzing historical network data and correlating it with external threat intelligence, LLMs can predict potential future attacks or security incidents.
>
> **[1:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=85)** This predictive capability allows security teams to reinforce defenses where they're most likely to be needed.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=91)** Realtime intrusion response.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=93)** LLMs can be used to automate the decision-making process during a security incident.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=98)** When a threat is detected, the LLM can assess the situation, consider the potential impact, and recommend or even execute mitigation steps, such as isolating affected environments, blocking malicious IP addresses, or deploying patches.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=111)** All right, so now that we have a good idea about how security professionals use LLMs to defend their networks and infrastructure, in the next video, let's get a bit hands-on.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/how-cybersecurity-professionals-use-llms-for-good?u=76281980&t=118)** We will understand synthetic data generation and also create a small code sample that helps us do this.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** let (1), this. (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Synthetic data generation: Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=1)** As discussed, in this video, we're taking a small detour, and we will learn about synthetic data generation, which is something we're going to use in the next chapter, and I wanted to cover it now, because in the next chapter we will build a project, and so that we don't get overwhelmed with too much information then, let's look at synthetic data generation in this video.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=18)** As we know by now, to enhance the accuracy of an LLM, we need to fine tune it.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=23)** The reason for this is that even though LLMs that we use are pre-trained on massive data sets, they usually are trained on generic information, and hence don't do well in narrow tasks.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=32)** Fine tuning an LLM on specific data ensures that the LLM becomes great at processing that particular information way better, and thereby leading to higher accuracy.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=43)** The problem is that in specialized instances, it's difficult to find high quality or large enough data sets that would provide a reasonable amount of data for us to fine tune our LLM.
>
> **[0:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=53)** So if we don't have the data, does that mean we shouldn't find tune our LLM and make do with low quality outputs?
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=60)** Well luckily, there's a solution, and that's called Synthetic Data Generation.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=64)** A lot of research has been taking place in this field since the past few years, and using LLMs we are actually in a great place to be able to generate high quality data.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=72)** So let's see why LLMs are a great fit for synthetic data generation and how LLMs help here.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=79)** Textual content.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=80)** LLMs can generate realistic text data, including articles, conversations, or social media posts based on specific prompts or themes.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=88)** This is useful for training natural language processing models, testing chat bots, or creating content for various applications.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=95)** Data augmentation.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=96)** LLMs can help in creating variations of existing data by generating new examples with slight modifications.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=103)** This can be useful for augmenting training data sets and scenarios where labeled data is scarce.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=109)** Role playing and dialogue.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=111)** LLMs can simulate interactions between different characters or entities, generating dialogues or role-playing scenarios that are useful for training conversational agents or simulating customer service interactions.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=123)** Now that we know what synthetic data generation is, let's take things up a notch and in the next video, let's see a core example on how it actually works.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-introduction?u=76281980&t=129)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5)
> **Code Keywords:** let (4)
> **Cross-References:** in the next (4)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### Synthetic data generation: Code example
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=1)** In the previous video, we learned about synthetic data generation, and in this video, we will look at a core example on how we can do this.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=8)** Just a quick note, we will be using Anthropic's API to access their LMs and help us in generating data.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=14)** What I've realized from personal experience is that Anthropic's models are really good at synthetic data generation, and this is why I've chosen Anthropic.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=21)** We have all of our code for this example in a Google Colab notebook, and this is what we will be going through now.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=28)** The reason I prefer Google Colab for these types of projects is because I can keep the output in the notebook for you.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=33)** With each cell, you can see the output and that makes it easy to understand what the code is doing.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=40)** If I just shared the code with you and you have to run everything from scratch, that's really challenging for you.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=45)** Anyways, so let's get started.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=47)** In the first line of the code, you can see that we have installed anthropic.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=52)** Then, we import anthropic and then use userdata from google.colab to be able to access the user's Anthropic API key securely.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=64)** In the next line, you see us getting the API key, and then using the API key, we create our Anthropic client and that'll help us call the API easily.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=76)** In this next cell, we create three important things.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=80)** One is the list of examples on the kind of data that we need to help the LM get started, and we're essentially letting the LM that we expect data in this format, which is User and Assistant conversation.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=95)** Then, we have our System_Command where we're telling the LM how to behave.
>
> **[1:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=100)** So we are saying, "You're an expert software and IT support specialist."
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=105)** Finally, we have our User_Prompt, which is going to tell the LM exactly what to do.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=111)** So, we want it to generate 10 diverse examples of technical support interactions.
>
> **[1:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=117)** So, we have all the things we need to call our LM now.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=120)** In this next cell, we use our Anthropic client to call the create function, and inside the function we specify our model, which is claude-3-5-sonnet, which is the latest model at the time of recording this video, with max_tokens=4096.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=136)** In the messages field, we pass the User_Prompt along with the examples we created earlier since we want the output in that format.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=144)** Then, we pass the System_Command, as well.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=147)** We pass a temperature of 0.9, and this gives the model a bit of leeway to be a bit non-deterministic and creative with the text.
>
> **[2:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=155)** And then we finally print the response.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=160)** In the output, we noticed that our LM was able to understand the system prompt and the user prompt really well, and also, the format in which we needed the answers.
>
> **[2:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=169)** If you notice in the output, there's the user's statement and then the assistant, giving detailed steps for each query.
>
> **[2:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=177)** So, the LM actually beyond what we had mentioned and generated really effective steps, and if we go through the entire output, we see a great list of IT issues that a person can face, which is exactly what we needed.
>
> **[3:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=191)** We can actually use this data to fine tune another model, and this just shows how powerful LMs actually are.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=198)** Awesome.
>
> **[3:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=199)** So, in this video we learned about synthetic data generation and saw a core example in practice.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=204)** We are going to use this in the next chapter, and this is why it was important for us to get it out of the way.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/synthetic-data-generation-code-example?u=76281980&t=208)** In the next video, we'll take up an interesting challenge to keep things spicy, so I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), function (2), this. (1), let (1), finally, (1)
> **Env Vars:** api (5)
> **Cross-References:** in the next (4), previous video (1)
> **Tools:** colab (3)
> **Code Identifiers:** max_tokens (1)
> **Versions:** 0.9 (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Identify phishing emails using LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=6)** I have an interesting challenge for you in this video.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=9)** This challenge will help us reinforce all the things we have learned up until now.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=14)** There will, however, be a small twist, and even if you're not able to complete the challenge, that's completely all right.
>
> **[0:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=20)** We will look at the solution in the next video.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=23)** So here's the challenge.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=24)** You have to use an LLM and fine-tune it to be able to detect phishing emails.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=28)** Sounds interesting, right?
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=30)** This is a real use case.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=32)** And as you're already aware, phishing emails are one of the biggest reasons for the most gruesome hacks.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=37)** A lot of companies have products that help identify phishing emails, and most of these companies are currently updating the tech stacks by using LLMs.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=45)** And there's a reason for that.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=48)** LLMs are uniquely poised to process textual data, such as emails, extremely well.
>
> **[0:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=54)** So with the help of embeddings, they're able to store association between words, and that's how they're able to generate content.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=60)** Using the same feature, we are able to fine-tune the LLM so effectively for text related tasks.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=67)** In the beginning of the video, I talked about a small twist.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=69)** Here it is.
>
> **[1:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=71)** You have to use the Mistral 7B model.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=73)** This is a famous open-source model that's quite accurate, even with a small size of seven billion parameters.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=78)** That is a perfect fit for this project.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=81)** Here are the steps you can follow to complete this challenge.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=84)** Import the LLM.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=86)** Find a dataset that'll help train our model for phishing detection use case.
>
> **[1:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=90)** Load the dataset and preprocess it.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=93)** Fine-tune the LLM with the dataset.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=95)** Use the fine-tuned LM for inference to see accuracy.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=98)** You can go beyond and also save the model locally and run the saved model.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=103)** All right, so now that we are clear about the challenge, please take a few minutes and work out a solution.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=108)** Remember, there is no wrong answer and your approach can vary a lot.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=111)** And even if you don't get it right, no issues.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=113)** We are going to look at a solution to this challenge in the next video.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/challenge-identify-phishing-emails-using-llms?u=76281980&t=115)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4)
> **Cross-References:** in the next (3)
> **Definitions:** is a  (3)
> **Code Keywords:** case. (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Fine-tune LLMs with email phishing datasets in Colab
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=6)** In this video, we are going to go through the solution of our challenge, which is fine tuning an LM to detect phishing emails.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=13)** For better understanding, I have a colab file with the output ready for you.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=18)** So let's get started.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=21)** We start by importing torch, which is a popular deep learning framework.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=26)** The major version and minor version retrieves the QA capability of the GPU.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=31)** Then we install the onslaught library.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=33)** That'll help us fine tune our model.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=36)** Then in addition to that, we install a few more dependencies that help us to work more efficiently with transformer models, especially with older GPUs.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=49)** Then we are setting a few variables to load our model.
>
> **[0:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=53)** In the next cell, we select our model, which is Mistral 7B, since that's what our challenge is all about.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=58)** And we set the fields with the variables we created in the previous cells.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=65)** Then we have this code block, which looks a bit intimidating, but all that's happening here is that we are just initializing our model for fine tuning.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=73)** So we are essentially initializing our model using the fast language model class and then we specify a lot of optimizations for the fine tuning process.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=81)** You can dig deeper into them using the unslotted documentation.
>
> **[1:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=85)** We then load our dataset from huggingface, and this dataset is meant for email phishing.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=92)** When we print the dataset, we see the number of rows is 18650, which is a good size of data for fine tuning.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=99)** We then print the dataset using pandas data frames and see the format of the data.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=106)** It has email text with email type such as safe email or phishing email.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=116)** Then comes the interesting part, here we define our phishing prompt, asking the LM to detect if the email is a safe email or a phishing email.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=124)** Next, we use the formatting prompts function to be able to later format our dataset and we end up using this function in the next line itself to format the dataset.
>
> **[2:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=135)** The next cell is where we create our trainer.
>
> **[2:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=139)** We are using the SFT trainer, which just stands for supervised fine tuning trainer.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=144)** And in this we pass all the things we've defined up until now like our model, our training data set.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=151)** And in addition to that, we pass in quite a few training arguments and then we run it.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=158)** We have the output here in colab itself.
>
> **[2:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=162)** It took a while to run and resolve, and as you can see it says 119.43 examples per second web processed, and we had the total of 18650 examples.
>
> **[2:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=174)** After such an operation, you ideally want to check your memory stats and that's what we do.
>
> **[2:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=179)** So we have 4.637 GB of memory reserved.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=183)** In the very next cell, we finally execute the model training and we check the final memory and time stats.
>
> **[3:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=191)** We see it took 16.97 minutes to train.
>
> **[3:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=195)** We reserved memory for training was 2.336 gb.
>
> **[3:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=200)** And now that our model is trained, let's run it.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=203)** We create our phishing prompt, specify our model for inference, we create our inputs object, which is going to go to the LLM, and in the next line is our model.generate function.
>
> **[3:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=220)** This is where the model processes the inputs and generates the outputs, which is stored in the outputs object.
>
> **[3:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=228)** In the output, you see that the example we had given to our LLM, which had an email from the user's bank with his bank statement has been processed and the fine tuned LLM replies that it is a safe email.
>
> **[4:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=241)** All right, so that's working as expected.
>
> **[4:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=244)** Next, we can save our fine tuned model and we are calling it MRL V3 phishing.
>
> **[4:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=250)** Saving is important because this model is now not the same as the original Mistral 7B model because this has been fine tuned.
>
> **[4:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=256)** You can save your models to huggingface as well.
>
> **[4:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=259)** You can directly use your saved model to generate inference.
>
> **[4:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=262)** So you select the model using fast language model and you specify the name of the model which you saved recently, which is Mistral V3 phishing and passing the other parameters that we had already defined at the beginning of this file.
>
> **[4:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=278)** And then we can run inference on the model.
>
> **[4:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=281)** For inference, we repeat the process, which is creating our phishing prompt and the email text example along with the inputs and then calling the model.generate function, and finally printing the output.
>
> **[4:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=299)** In the output, you see that the example we had passed to the LLM had a phishing link to download the invoice, and our LLM was able to catch it and identify the email as a phishing email.
>
> **[5:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=313)** Now it does look obvious that if the link's name is phishing link, then the model is able to flag it as a phishing email.
>
> **[5:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=320)** But if you take the same approach that got you till here and scale it up, you will soon have a robust system that's able to catch a lot more phishing emails.
>
> **[5:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=329)** And think of it like this, if you had to build a solution for this without using an LLM, can you imagine how many rules you would have to program and account for?
>
> **[5:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=338)** How much regular expressions you would have to code in to match restricted words?
>
> **[5:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=342)** And even then, you would have only been able to build a hard word system and not an intelligent adaptive one.
>
> **[5:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=349)** Hope you enjoyed this challenge and solving it has ensured that we have been able to reinforce all that we have learned until now.
>
> **[5:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=355)** And not only that, we built something really useful as it's a real world project.
>
> **[6:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=360)** It's the perfect time now to move on to the next chapter where we are building something killer, a code vulnerability scanner.
>
> **[6:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/solution-finetune-llms-with-email-phishing-datasets-in-colab?u=76281980&t=367)** So without giving too much away, I'd like to close this chapter and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), pass (2), this, (1)
> **Env Vars:** llm (6), gpu (1), sft (1), mrl (1)
> **Cross-References:** in the next (4), next chapter (1)
> **Versions:** 119.43 (1), 4.637 (1), 16.97 (1), 2.336 (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (1), think of it like (1), imagine (1)
> **Tools:** colab (2)
> **UI Navigation:** go to (1), select the (1)


### 3. Code Vulnerability Scanning with LLMs

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to code vulnerability scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=0)** - [Instructor] Welcome to the third chapter of this course, and this chapter is called Code Vulnerability Scanning with LLMs.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=7)** Because in this chapter we will be learning about code vulnerabilities and how one can leverage open-source large language models to detect and prevent exploitable vulnerabilities in specific code.
>
> **[0:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=17)** Not only that, we'll actually build a project that detects vulnerabilities in code using LLMs, and we'll use all the things that we've learned up until now, like loading a model, synthetic data generation, and using the data to fine-tune the model.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=32)** Before we build out the project, let's get a good idea about code vulnerabilities and what exactly we will be building.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=38)** So, code vulnerabilities are weaknesses or flaws in a software program that can be exploited by attackers to gain unauthorized access, cause damage, or steal sensitive information.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=48)** These vulnerabilities can arise from various issues, such as programming errors, design flaws, or insecure coding practices, and these vulnerabilities can prove to be dangerous, especially when there's huge amounts of capital involved.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=60)** Usually, code vulnerabilities are detected using static code scanners that are hard-coded and are essentially rule engines with built-in detectors.
>
> **[1:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=68)** Now, an important thing to note here is that these scanners are not intelligent.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=72)** They're just programmed to catch issues based on hard-coded rules.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=75)** While they're effective in some cases, the problem is these tools don't have an inherent contextual understanding of how the code works or how the same vulnerability can manifest in multiple different ways.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=88)** So, a great solution is using LLM-powered tools to detect vulnerabilities.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=93)** LLMs, as we have learned, are quite intelligent and effective in understanding context and data, which they do by maintaining high-quality embeddings.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=102)** Using LLMs for vulnerability detection is a big area of research at the moment, and is being proven quite effective according to many research papers.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=111)** Fine-tuning an LLM with code samples and vulnerabilities is the approach that's being followed, and that's exactly what we're going to attempt in this chapter.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=118)** So, we have something quite challenging but also interesting on our hands.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=122)** In this chapter, we will not just scan any code for vulnerabilities, but we will scan Solana smart contracts for vulnerabilities.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-code-vulnerability-scanning?u=76281980&t=129)** Now, it's quite possible that you don't know what smart contracts are or what Solana is and why we're choosing this particular type of code to detect vulnerabilities in, and this is why in the next video, we will understand what all this really means, so see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), static (1)
> **Env Vars:** llm (2)
> **Cross-References:** in the next (2)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Blockchains and smart contract auditing
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=0)** - [Instructor] Welcome back, in the previous video, we learned about code vulnerability detection, and at the end of the video, I mentioned about blockchains and auditing smart contracts, which is the project we will be building in this chapter.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=12)** So basically, in this video we'll explore why audits are crucial in the blockchain ecosystem.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=18)** Blockchains help us store immutable transactions.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=21)** Let's say you want to transfer online assets to your friend, and these online assets could be cryptocurrency, which is a modern independent digital currency, or NFTs, which are digital art pieces.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=31)** and once these assets are transferred, a permanent and immutable record is created on the blockchain, and this makes blockchains much safer than traditional databases.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=40)** Now the immutable nature of blockchain technology means that once a transaction is recorded, it cannot be altered or deleted.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=47)** This characteristic, while providing transparency and trust, also means that any vulnerabilities in smart contracts can have severe and irreversible consequences.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=57)** To keep blockchains safe, we need to ensure the smart contracts don't have vulnerabilities, and these vulnerabilities are detected in a process called as a smart contract audit.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=67)** Now usually this audit is performed manually, and there are static analysis tools that help in this process as well, but as we discussed in the previous video that LLMs are a great fit for code vulnerability detection because they have context about the code, and this is why LLMs are also great for detecting vulnerabilities in smart contracts because, at the end of the day, smart contracts are just programs written with code that run on the blockchain.
>
> **[1:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=90)** So, what we'll be building is basically an LLM powered smart contract auditor.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=94)** Now there's not just one blockchain but many blockchains in the world, and the blockchain that we have selected is the Solana blockchain because it's doing really well currently in terms of the projects being deployed to the chain and also in popularity.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=107)** This is in fact one of the top four blockchains in terms of popularity, along with Bitcoin, Ethereum, and Polygon.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=115)** The smart contracts on the Solana blockchain are written in Rust, which is a popular programming language, and this means our LLM needs to be great at analyzing Rust.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=124)** and in addition to this, there are some special functions that Solana uses, so our LLM needs to be great at understanding those functions as well.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=133)** So by now you know that to train our LLM to be able to detect these vulnerabilities we need a data set, and the data set around Solana vulnerabilities is not very easily available, and this is where synthetic data generation, which we have seen in the previous chapter, comes in.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=145)** So, we will be generating synthetic data and then fine-tuning our LLM with this data and then use it to detect vulnerabilities, and that's the plan.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=152)** Now before we move forward with the plan, let's talk about what kind of vulnerabilities we will detect.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=157)** One common issue is re-entrancy attacks, where a malicious contract can repeatedly call back into the vulnerable contract before the first execution is completed.
>
> **[2:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=167)** This can lead to unexpected behavior and potential fund drains.
>
> **[2:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=171)** Another critical vulnerability is integer overflow slash underflow, which can occur when arithmetic operations exceed the maximum or minimum values that can be stored in a variable.
>
> **[3:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=180)** Access control issues are another area of concern.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=183)** Poorly implemented access controls can allow unauthorized users to execute privileged functions.
>
> **[3:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=188)** Auditors also look for timestamp dependence, where contracts rely on blocked timestamps, which can be manipulated by miners to a certain degree.
>
> **[3:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=197)** Understanding and identifying these vulnerabilities is crucial for ensuring the security and integrity of smart contracts.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=203)** I hope you've understood about code vulnerability scanning and how LLMs can help with this and also our plan to build a smart contract auditor for Solana smart contracts.
>
> **[3:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/blockchains-and-smart-contract-auditing?u=76281980&t=211)** Now in the next video we start executing and building a project.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5)
> **Cross-References:** previous video (2), we discussed (1), previous chapter (1), in the next (1)
> **Code Keywords:** let (2), static (1), this, (1)
> **Definitions:** is a  (2), means that (1)
> **Speakers:** - [instructor] (1)

#### Out-of-the-box output (vulnerability scanning) from an LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=2)** We now know about blockchains, smart contracts, and smart contract auditing.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=7)** It is now time to start building our project, and we're essentially building a smart contract auditing tool that uses a fine-tuned LLM.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=14)** This project brings together all the things we have learned up until now, which is loading a model, generating data synthetically, and fine-tuning the model.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=22)** Now, before we find you in our LLM, with our synthetically generated dataset, let's first check what the output from a non fine-tuned model looks like.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=30)** And that's exactly what this video is all about.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=32)** I have a Google Colab file ready for you with the output, so let's go through it together.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=38)** In the first cell, we're importing unsloth, which we'll be using later for fine-tuning, and we are also installing some other dependencies that we've already seen before, which will help us work with the T4 GPU more efficiently.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=52)** Then, we import some more dependencies, like the SFTTrainer, FastLanguageModel, load_dataset, torch, that we have already seen before.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=62)** In the next cell, we set our max sequence length that will set our token limit.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=67)** We're keeping it as 2048, because we don't want to end up generating too many tokens, as that will considerably slow down our project.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=75)** And we also want to load our model in 4bit, so we make that parameter as True.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=82)** In the next line, I select my model, which is a llama-3-8-billion parameter model, load it in the 4bit version, and I pass in all the variables that I've defined above.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=95)** Now here, if I show you the hidden code, it basically has my entire smart contract that I want the LLM to scan for vulnerabilities.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=106)** So, for the inference, I create my prompt where I'm telling the LLM to behave like a Solana smart contract auditor, and for it to analyze the provided Solana smart contract.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=115)** I then craft my inputs object with the example smart contract code that I just showed you, and I'm going to pass it to my model.generate function, which performs the inference for me, and gives me the output in the outputs variable.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=130)** I extract the predictions and the vulnerabilities, and I print the generated result.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=137)** If you look at the output, it's completely gibberish and it doesn't make much sense at all.
>
> **[2:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=141)** This is not what the report from a smart contract audit looks like.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=145)** We need to now take some measures to enhance our LLM smart contract auditing abilities.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=150)** All right.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=151)** Now that we know how the output from a non fine-tuned LLM looks like, we know how important fine-tuning is, and this is why we will work on fine-tuning our model.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/out-of-the-box-output-vulnerability-scanning-from-an-llm?u=76281980&t=160)** So let's do that in the next video, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), gpu (1)
> **Code Keywords:** let (3), pass (2), function (1)
> **Cross-References:** in the next (4)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** load_dataset (1)
> **Tools:** colab (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Fine-tuning and mapping a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=1)** In this video, let's make all the preparations required for fine tuning our model.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=6)** Now, I have already generated my dataset synthetically using the exact same methodology that I've shown you before.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=12)** I have saved that dataset on Hugging Face, and I'll be directly referring to it while fine tuning the model.
>
> **[0:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=17)** Let me take you through the code on how this will work.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=21)** This is a method that takes an existing language model and applies some enhancements to it.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=26)** Think of it as upgrading the model with new abilities.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=30)** This tells the model which parts to focus on when making adjustments.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=34)** These modules are key components in the model's architecture responsible for various tasks like projecting or transforming data.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=42)** This is a scaling factor that influences how strong the changes will be in the model.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=48)** Dropout is a technique used to prevent overfitting.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=51)** Setting it to zero means the model is not dropping any information during training, keeping all data intact.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=58)** This indicates that no bias adjustments are being applied on the model.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=62)** This is an advanced technique to save memory during training.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=65)** It allows the model to work more efficiently by reusing some of its calculations.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=70)** This is setting a seed for random operations, ensuring that the model behaves consistently across different runs.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=79)** This is a template for how you want to format the prompt when analyzing a Solana smart contract.
>
> **[1:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=85)** These placeholders will be replaced with the actual smart contract code and the list of vulnerabilities found.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=93)** This is a link to where the dataset is stored.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=96)** In this case, it points to ArmurAI/SolanaSC, which is stored under my organization on Hugging Face, and anyone can use it for Solana smart contracts and associated vulnerabilities.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=108)** This is an end of sequence token used to signal the end of a text sequence.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=113)** It ensures that when generating text, the model knows when to stop, preventing it from generating endlessly.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=121)** This is a function designed to take examples of smart contract code and vulnerabilities, format them using the Alpaca prompt template and add the US token at the end.
>
> **[2:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=132)** The dataset containing smart contracts and vulnerabilities is loaded using this line.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=138)** This line applies the formatting_prompts function to each item in the dataset, formatting them according to the template.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=145)** All right, now that we have everything ready, it's time to actually train the model, and let's do that in the next video.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finetuning-and-mapping-dataset?u=76281980&t=150)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is an  (2)
> **Code Keywords:** let (3), function (2), case, (1)
> **Exercise Files:** template (3)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** formatting_prompts (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Training the model
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=1)** In this video, let's actually train the model.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=4)** So let's go through the code together.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=6)** To start training the model, we create our SFTTrainer with multiple fields.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=13)** So we have model, which has the model that we are training, and then the tokenizer, which helps the model understand text.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=22)** The train_dataset is the data the model will learn from.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=25)** Dataset_text_fields tells the trainer which part of the dataset contains the text.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=29)** Max_sequence_length limits the length of the input text to keep it manageable.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=33)** Dataset_num_proc controls how many processes to use when handling the data.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=39)** Packing, if set to true, this makes training faster for short sequences, but here it's set to false.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=46)** Then we have many arguments, which are the training settings.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=50)** Per_device_train_batch_size, this means that our model will train on two examples at a time.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=57)** This combines the gradients from four batches before updating the model, which effectively increases the batch size.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=64)** Warmup_steps is equal to five gradually increases the learning rate over five steps to avoid shocking the model with a high learning rate right away.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=72)** This ensures that the training will stop after 60 steps.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=76)** This controls how fast the model learns.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=80)** These handle precision settings, making training faster and more memory efficient if supported by the hardware.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=87)** This logs the training progress after each step.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=91)** This line uses an efficient optimizer that speeds up the training.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=96)** This line helps with preventing over fitting by slightly shrinking the weights.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=101)** This gradually decreases the learning rate during training.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=105)** Seed is equal to 3407 ensures reproducibility by setting a random seed.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=110)** This saves the trained model and results in the folder.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=115)** And this line actually kicks off the training process.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=120)** After training, we want to see how well the model learned.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=123)** And one way to do that is looking at the loss.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=127)** A number that tells us how far the model's predictions are from the actual answers.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=133)** This grabs the loss values recorded during training.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=138)** We go through the recorded loss values and store them in a list called loss.
>
> **[2:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=143)** We then create a graph to visualize the loss over time.
>
> **[2:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=146)** Lower loss means the model is getting better at its task.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=150)** The graph shows the loss value on the y axis and the training steps on the x axis.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=154)** Ideally, we want to see the loss decreasing, which means the model is improving as it learns.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=158)** And that's what we notice, which is perfect and that's what we want.
>
> **[2:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=162)** All right, now that our model is finally trained, it's time to run the inference on the fine tuned model, look at the output, and then compare it with the non fine tuned model's output.
>
> **[2:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/training-the-model?u=76281980&t=171)** This is exactly what we'll do in the next video, so I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (1)
> **Cross-References:** in the next (2)
> **Code Identifiers:** train_dataset (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Inference and benchmarking
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=1)** It's time to run inference and analyze our fine-tune models output.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=4)** So let's get started.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=6)** First, we start by creating a special message called alpaca_prompt.
>
> **[0:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=11)** This message is like an instruction manual for the AI.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=15)** We tell it, hey, you're a Solana expert.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=18)** Look at the smart contract and find any security problems.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=23)** Now, to make sure the AI understands what you want, we format this message using the smart contract we want to check, and that's ExampleCode.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=31)** And we leave the space for vulnerabilities empty so that AI can fit it in.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=36)** Next up, we take our formatted message and give it to the AI model, but before that, we convert it into a form that the model can understand using something called as a tokenizer.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=47)** Think of it like translating our instructions into the AI's language.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=52)** Then, we ask the model to generate a response.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=55)** We give it a little push telling it how much to write, which is max_new_tokens = 128, so it doesn't go on forever.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=62)** Finally, the AI processes this, and we decode its answers back into human language.
>
> **[1:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=68)** We extract the part where it lists the vulnerabilities, and boom, we have a detailed security analysis that we can check out.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=75)** Okay, so that was the code for inference from the model.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=77)** Now, let's take a look at the output.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=79)** We can see three different vulnerabilities detected, unrestricted creation of NFTs, lack of NFT ownership verification, and missing NFT metadata verification, and these were actual vulnerabilities in our data set that our model has learned from.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=95)** Now, if you compare this output with the output from the non-fine-tuned LLM, you can see a stark difference.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=102)** The previous output was complete gibberish, and this output has clear vulnerabilities.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=110)** Now, even though we fine-tuned it on such a small dataset, it's able to learn and detect, and give an exponentially better output, and that's how powerful fine-tuning is.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=119)** Now, if we had more resources like time, bigger GPUs, and even larger LLMs with better human-sourced data sets that were checked by security professionals, just imagine what we could have built.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=129)** All right, so in this chapter, we fine-tuned an LLM to be able to detect smart contract vulnerabilities in Solana Smart Contracts.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=136)** How cool is that?
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=137)** I hope you enjoyed building this project as much as I did.
>
> **[2:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=140)** This brings us to the end of this chapter.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=142)** In the next chapter, you're going to take things up a notch and we'll be using LLM agents to help us perform OS-integrated tasks.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-and-benchmarking?u=76281980&t=148)** I'll see you in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), this, (1), from. (1)
> **Env Vars:** llm (3), nft (2)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** alpaca_prompt (1), max_new_tokens (1)
> **Cross-References:** in the next (2)
> **Analogies:** think of it like (1), imagine (1)
> **Speakers:** - [instructor] (1)


### 4. OSINT with LLM Agents

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to OSINT and how LLMs can help
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=0)** - [Instructor] Welcome to the fourth chapter of the course.
>
> **[0:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=2)** In this chapter, we will be building a full fledged OSINT solution that uses LLM agents.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=7)** This is going to be an exciting project and it's something you can use in the real world as well.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=13)** In this particular video, let's talk about OSINT and how LLMs can help with this.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=18)** OSINT, or open source intelligence, refers to the collection and analysis of publicly available information to gather intelligence.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=24)** This information is sourced from a wide range of publicly accessible channels, such as websites, social media, news articles, public records, forums, and more.
>
> **[0:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=35)** OSINT is widely used in fields like cybersecurity, law enforcement, business intelligence, and national security.
>
> **[0:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=41)** In our project, we want to build a system that can find a great deal of information about a company from public sources, and this information can be used either for research or can be used against the company.
>
> **[0:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=53)** The information will contain company information, regulatory and legal information, business information, search and intelligence, social media, and contact information, domain, network, and website information.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=64)** The reason we are using LLM and LLM agents for our project is because LLMs are a great fit for OSINT, since they excel at data extraction; LLMs can process vast amounts of unstructured data from the internet, extracting relevant information such as names, locations, dates, and events from text.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=82)** This helps in identifying key details from large data sets quickly.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=87)** Text summarization.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=88)** LLMs can summarize Lindy documents, reports, or news articles providing concise overviews that highlight the most critical information.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=95)** This is valuable for analysts who need to quickly assess large volumes of data.
>
> **[1:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=100)** Entity recognition.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=101)** LLMs can identify and classify entities such as individuals, organizations, locations, and more within the text.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=107)** This helps in mapping out relationships and networks between various entities of interest.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=112)** Automated reporting.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=114)** LLMs can generate detailed reports by compiling and organizing information gathered during the OSINT process.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=119)** These reports can include narrative summaries and visualizations, making it easier to understand complex intelligence data.
>
> **[2:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=126)** Pattern recognition.
>
> **[2:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=128)** LLMs can analyze patterns within large data sets, identifying trends or anomalies that might indicate suspicious activities or emerging threats.
>
> **[2:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=135)** This is particularly useful in cybersecurity for detecting potential security breaches.
>
> **[2:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=140)** Automated monitoring.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=142)** LLMs can be used to set up automated monitoring systems that continuously scan for specific keywords, phrases, or topics across various online platforms.
>
> **[2:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=149)** This ensures realtime alerts for relevant intelligence.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=152)** Since we're going to use LLM agents for building our OSINT project, in the next video, let's learn about LLM agents and LLM agent workflows.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-osint-and-how-llms-can-help?u=76281980&t=160)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** osint (7), llm (6)
> **Code Keywords:** let (2), public (2), this. (1)
> **Analogies:** such as (3)
> **Cross-References:** in the next (2)
> **CLI Commands:** find (1)
> **Definitions:** refers to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Introduction to agents and agent workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=1)** In this video, we are going to discuss LLM agents, since that's what we're going to use for our project.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=6)** What I'm going to try to do is explain this in the simplest manner possible with as little jargon as possible.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=12)** Because of the concept of agents is not clear, the rest of the chapter will not make much sense to you.
>
> **[0:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=17)** By now, you know what LLMs are.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=19)** The issue is LLMs cannot perform tasks on your behalf.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=23)** LLMs cannot go to the internet and find information for you, scrape data for you, book tickets for you, read articles, and research information for you.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=31)** This is where agents come in.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=33)** Think of an agent as a process that runs independently, but uses an LLM for intelligence.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=39)** Let's take the example of an agent that can do some online research for us.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=42)** Now, this process is not very straightforward since the agent needs to take a few steps.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=46)** For example, we wanted to find information about how to build a community and write an article about the top community building tools in the market.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=52)** The agent then takes this problem statement and breaks it down into two steps.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=56)** The first step could be to research about community building.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=59)** The second step could be to visit multiple blogs to find the top community building tools.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=63)** The third step could be to write the article explaining community building.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=66)** The fourth step would be to place the ranking of the community building tools, explaining their features and pros and cons.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=73)** If we had to do all these steps with an LLM, that would take a lot of prompting the LLM and would take up a lot of our time.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=80)** But, an agent is able to do all of this on its own.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=83)** Not only will it break down the problem into those steps shared above, but it'll also execute them.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=88)** And not only will it execute those steps, but it'll refine those steps midway.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=92)** And if it gets stuck, it'll reason its way out of the problems as well.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=95)** So, I'm guessing you're now seeing how powerful agents are.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=98)** Agents enable us developers to have asymmetric leverage by freeing up our time and taking decisions on its own once a task has been assigned.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=107)** There is another special feature of agents that you need to be aware of, and that's the ability to use tools.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=112)** Now, agents can be powered by multiple tools, such as Google Search tool, or EXA tool for better search, or network analysis tool, or [booking.com](https://booking.com) tool to book tickets, or an emailing tool to send emails.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=123)** Each tool gives a specific set of powers and abilities to the agent, and the agent is able to perform that particular task.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=130)** An agent stays active, since it's an independent process, and hence it makes sense to attach tools to it that it can use to reach its goals.
>
> **[2:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=139)** Another great feature of agents is that they can communicate.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=142)** So you can have an agent that just writes the text for an ad campaign.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=145)** Another agent takes that text and generates images.
>
> **[2:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=149)** Another agent takes that image and thinks of the right target audience for that advertisement.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=154)** And these three agents can have a full conversation amongst them to create a complete ad campaign.
>
> **[2:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=159)** You can even add more agents into the mix.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=161)** For example, another agent can be added that thinks of the media to be used based on the advertisement, meaning you would use Twitter, or Instagram, or YouTube for that particular ad.
>
> **[2:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=170)** Then, a critique agent that looks at the ad and suggests changes and optimizations.
>
> **[2:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=174)** So you can create really large workflows, and these are called as collaborative agentic workflows, and are extremely powerful because they enable us to do things that were not possible before.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=183)** LLM agents are considered as a next big cornerstone technology in humanity's existence, and rightly so.
>
> **[3:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=188)** It's going to disrupt every industry we can think of.
>
> **[3:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=192)** Now that we are aware about how LLM agents work and about collaborative workflows, in the next video, we can talk about the framework that we'll be using to build these agent workflows, which is CrewAI, and all the concepts related to that framework.
>
> **[3:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-agents-and-agent-workflows?u=76281980&t=205)** So, I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), exa (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** in the next (2)
> **Code Keywords:** let (1)
> **URLs:** [booking.com](https://booking.com) (1)
> **UI Navigation:** go to (1)
> **Warnings:** be aware (1)

#### Agent frameworks and Crew AI: Tools and tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=1)** In the previous video, we discussed the project that we will be building in this chapter.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=5)** And up until now in this chapter, we have talked about OS end and how LLMs are a great fit for this.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=10)** In addition to this, we also learned about AI agents and why they're special.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=15)** If you remember, towards the end of the video, I mentioned that we will be using CrewAI as our framework to work with agents.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=22)** And this video is all about understanding CrewAI from a theoretical perspective because from the next video, we start planning our project and building it.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=29)** So let's get started.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=31)** Now, it's important to remember that CrewAI is a complete framework and it designed to manage and orchestrate multiple LLM agents to work together towards a common objective.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=40)** In this framework, agents are assigned specific tasks and equipped with various tools that enable them to execute those tasks efficiently.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=47)** The framework facilitates collaboration where each agent specializes in different aspects of a problem.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=52)** Much like members of a crew working together on a complex project.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=56)** There are two key concepts to be aware of: tasks and tools.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=59)** First, let's talk about tasks.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=62)** Tasks are the specific objectives or goals assigned to each LLM agent.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=66)** These tasks can range from simple data retrieval to complex decision making processes.
>
> **[1:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=71)** For example, an LLM agent might be tasked with summarizing a research paper while another agent is tasked with translating that summary into multiple languages.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=80)** Each task is tailored to the strengths of the individual agent.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=83)** Let's talk about tools, which is something we will be using a lot and this is why I need to discuss it in detail before we move on to the next video.
>
> **[1:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=90)** Tools and the CrewAI framework are the external resources, APIs, software, or utilities that LLM agents use to complete their assigned tasks.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=99)** These tools enhance the capabilities of the agents, allowing them to interact with the external world, process data, or perform specific functions that are beyond the LLMs native capabilities.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=110)** For example, an agent tasked with analyzing financial data might use a spreadsheet tool to organize and calculate data, while another agent might use a natural language processing API to extract key phrases from text.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=122)** Now, there are different types of tools that can be used with LLM agents and I'd like to give you a few examples so that you're able to plan out projects much better in the future.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=131)** Data processing tools, for example, Pandas, which is a [[Python Data Analysis]] library and can be used by an LLM agent to manipulate large data sets, perform statistical analysis, and generate insights.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=142)** And LLM agent might use Pandas to clean and filter data before feeding it into a machine learning model for prediction.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=148)** APIs and external services.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=150)** For example, Google Maps API, which allows an LLM agent to access geographical data.
>
> **[2:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=155)** If an agent's task is to provide travel recommendations, it could use the Google Maps API to calculate distances, identify points of interest, and suggest optimal travel routes.
>
> **[2:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=164)** Communication tools, for example, the Slack API could be utilized by an LLM agent to send notifications, updates, or summarize to a team in real time.
>
> **[2:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=173)** For instance, after completing a task like monitoring social media trends, the agent could automatically send a summary report to a Slack channel.
>
> **[3:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=180)** Web scraping tools, for example, Beautiful Soup, or Scrapy can be used by an LLM agent to collect data from websites.
>
> **[3:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=187)** If an agent's task is to gather the latest news articles on a particular topic, it could use these tools to scrape content from news websites and then summarize the findings.
>
> **[3:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=197)** Cloud services, for example, AWS Lambda, which allows LLM agents to run code in response to events without the need for managing service.
>
> **[3:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=205)** An agent might use AWS Lambda to process data as soon as it's uploaded to a cloud storage service, triggering real-time data analysis and reporting.
>
> **[3:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=213)** Machine learning tools such as TensorFlow or PyTorch could be employed by an LLM agent to build and train machine learning models.
>
> **[3:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=220)** For instance, an agent might use TensorFlow to predict stock prices based on historical data, combining the power of LLMs with traditional machine learning techniques.
>
> **[3:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=228)** Now that we have an introduction to CrewAI and how it works and its various features.
>
> **[3:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=232)** From the next video onwards, we are ready to start planning our project and also building it out.
>
> **[3:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/agent-frameworks-and-crew-ai-tools-and-tasks?u=76281980&t=236)** So I hope you're excited for what's to come and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (12), api (4), aws (2)
> **Analogies:** for example (7), for instance (2), such as (1)
> **Code Keywords:** let (3), lambda (2), this. (1), this, (1)
> **Cross-References:** next video (3), previous video (1), we discussed (1), in the next (1)
> **CLI Commands:** aws (2), python (1)
> **Tools:** slack (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1)

#### Planning the agents, their tasks, and their responsibilities
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=0)** - [Presenter] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=1)** In this video, we are going through a complete planning exercise and we're going to think about what we'll be building.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=6)** The clearer our plan and the more detail our plan, the easier it'll be to build the project.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=10)** So let's get started.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=13)** The first video of this chapter, when I was briefing you about what we'll be building in this chapter, I mentioned that we will be doing OSINT of a company and we'll be finding out information about the company, which will have the company information, regulatory and legal information, business information, search engine intelligence, social media and contact information, domain, network, and website information.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=33)** Now that we know that with CrewAI, you can create multiple agents and orchestrate them and they can collaborate to produce a great output, I plan on creating separate agents for each of these details that we want to find.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=44)** So I'll have a company info agent, which will be equipped with search tools to be able to find information regarding the company, such as its website, founding date, founders, headquarter, location, industry, and subsidiaries.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=55)** The next agent is the website analysis agent that focuses on the company's website structure like its sections, pages, and metadata.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=62)** The next is the network analysis agent that will find info about DNS and domain registration.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=66)** Then we have the social media and contact information agent that will gather information about the company's social media presence.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=72)** Then we have the search engine intelligence tool that will use Google dorking techniques to uncover hidden info like PDFs or other files.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=80)** We will also have a business info agent that finds key personnel, financial information, partnerships, et cetera.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=86)** Then we will have a regulatory agent to find company's regulatory filings, legal issues, security posture.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=92)** We will also have an intellectual property agent to gather information about the company's patents, trademarks, and copyrights.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=98)** We will also have a hiring information agent that finds current job listings and employee reviews of the company.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=104)** A committee and PR agent that gathers information on forums.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=107)** And finally an OSINT report generator, an agent that can consolidate information from various agents and create a detailed report.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=114)** This detailed report will be the final output of our project.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=118)** Now that we have complete clarity about our agents, we have to think about tasks.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=122)** So tasks will be each agent's mission essentially, and I plan on having separate tasks for all of these agents.
>
> **[2:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=128)** This will keep our project clear and less confusing, and we can have the exact name of the tasks as the agents, so that there's a one-to-one relationship between the agents and the tasks.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=138)** To equip these agents, I'll have three distinct tools.
>
> **[2:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=141)** Now, note that the agents are not restricted to just the tools I'm creating, and they can access other tools as well based on the requirements.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=147)** But I'm explicitly defining just three different tools: the Search tool that uses Exa search to search a webpage based on a query; a Find_Similar tool that searches for webpages similar to a given URL.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=158)** This can be done with the help of Exa search as well.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=160)** Finally, the Get contents tool that helps us get the contents of a webpage.
>
> **[2:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=164)** Combined, these tools can help our agents accomplish their tasks easily since they're mostly around search and information lookup.
>
> **[2:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=172)** So we have defined our agents and the task for all of our agents and the tools that the agents will be using to perform all these respective tasks.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=178)** This is what we needed.
>
> **[2:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=179)** Since now we have a good plan that's ready, it'll be very easy for us to build our project.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=183)** Okay, so now we have a very good idea of what we are building and how exactly we're going to go about it.
>
> **[3:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-agents-their-tasks-and-responsibilities?u=76281980&t=188)** In the next video, let's start building.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Env Vars:** osint (2), dns (1), url (1)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** such as (1), similar to (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)

#### Setting up the project: LLMs, Agents, and defining tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=1)** In the previous video, we made a detailed plan of what we are going to build.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=6)** In this video, we are going to go ahead and start building.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=9)** Now, since collaborative agent projects can take hours to run and produce output because of the large number of steps involved, I have built the entire project for us and executed all the code cells in my CoLab file so that the output is already available to us.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=24)** All we have to do now is go through it together.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=26)** If you want to reinforce your learning, you can make a copy of this file, and then make changes in any of the cells, and run it again for learning purposes.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=34)** It's important to note that we created a plan in the previous video.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=37)** And now in the code, we have to stick to the plan exactly so that everything is consistent.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=42)** We start off by installing a few dependencies like Crew AI, Crew AI tools and Exa, which will help our agents to search for information on the web.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=55)** We then set our open AI API key and our Exa API key.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=59)** We then import Exa specifically for Python and tool from langchain.agents.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=65)** This will help us build tools that our agents can use!
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=69)** Now, this is where we start defining our tools, and as per plan, I have three tools lined up.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=73)** The search tool, which takes in a query as a parameter and finds a webpage.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=78)** Then, the find similar tool which takes in a URL and find similar webpages.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=84)** And finally, the get contents function, which takes the IDs and gets the contents on the webpages, and also processes the information a bit by splitting it and joining it.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=97)** In the next line, I've defined a function that returns all the tools that I've defined above.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=101)** And this is important because we can simply pass all tools together to an agent.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=105)** And then, a helper function for Exa to return an Exa client.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=110)** Next, we have to define our agents according to our plan.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=112)** So, we first import agent from Crew AI.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=115)** That's going to help us define our agents.
>
> **[1:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=117)** I've defined the class OsintAgents, which consists of all of my agents.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=122)** Each agent is defined as a function which returns an agent.
>
> **[2:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=125)** And each agent has a role, a goal, and the tool that uses, and a backstory, which has multiple lines.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=133)** So, we use the dedent package to format it.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=138)** It's important to note that I've passed all the tools to all the agents, so that all the agents have a lot of capabilities.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=144)** And this is quite all right if you have three or four tools in a project.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=147)** But if you plan to have a lot of tools, it's advised to only pass the tools that the agent would most definitely need.
>
> **[2:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=155)** Let's go over one agent properly because all the other agents follow the same system.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=160)** And since we are following our plan that we created in the previous video, we can extrapolate this information and change it based on each agent.
>
> **[2:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=168)** So, for the company info agent, I give it the role of Company Information Specialist.
>
> **[2:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=174)** And similarly, if you notice, all the other agents have similar roles related to their names.
>
> **[2:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=179)** For example, the website analysis agent has the role website analyst.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=183)** And the network analysis agent has the role domain and network analyst.
>
> **[3:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=190)** And the goal for the company info agent is to conduct thorough research on the company, its website, founders, headquarters, location, industry, and subsidiary, right.
>
> **[3:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=199)** So, exactly what we want the agent to do is its goal!
>
> **[3:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=202)** Let's take the example of the website analyst agent as well.
>
> **[3:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=205)** Here, the goal is to analyze the official website of the company and its key information.
>
> **[3:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=213)** Then, you have the backstory.
>
> **[3:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=215)** Think of it as a system prompt that you would idly give to an LLM to help guide this behavior.
>
> **[3:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=220)** In the case of an agent, you create a behavior separation of sorts, meaning, all the agents are using the same LLM, but with different backstories or system prompts.
>
> **[3:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=228)** And this means the agent will always behave in a particular way, and take decisions based on the guidelines given in the backstory.
>
> **[3:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=234)** All the other agents you see are similar, and I recommend going through them at least once since you have access to this file.
>
> **[4:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=242)** If you remember, we had discussed each of our agents will have their own separate tasks!
>
> **[4:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=248)** And this is what we defined in this cell.
>
> **[4:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=249)** So, we import tasks from Crew AI, and this is going to help us define our tasks.
>
> **[4:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=254)** We create a class OsintAnalysisTask, and this will have the list for all of our tasks.
>
> **[4:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=260)** Each task has a description where we define what the task is all about, and then the expected output.
>
> **[4:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=267)** Now, this field is important because it tells the agent what kind of output is required, and this means that we won't get random and unpredictable output each time.
>
> **[4:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=275)** If you've built LLM projects before, a common issue is unpredictable outputs, and especially when you have a complete application around it where the output is going to be processed further for other users, you need the output in a predictable manner.
>
> **[4:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=287)** And this is where this field helps!
>
> **[4:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=290)** Since we don't these tasks to be executed sequentially, we make async_execution as true, and then finally pass the agent that we've received as parameter.
>
> **[4:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=299)** Essentially, we are going to receive the particular agent with which the task is associated in each task function.
>
> **[5:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=304)** So, just as an example, let's go over one particular task, and just as we did for the agents, we can extrapolate the information to other tasks by changing based on the context of that task.
>
> **[5:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=314)** So, in the WebsiteAnalysis_task, we have the description which describes the task as uncover information about the website of company named company, which is in brackets.
>
> **[5:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=324)** And this basically passes the company name dynamically.
>
> **[5:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=329)** The expected output is a comprehensive report on the company's website structure, content review, metadata analysis, and so on.
>
> **[5:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=337)** Now, all the other tasks are going to be similar!
>
> **[5:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=339)** Alright, so we've gone through quite a bit of code in this video where we implemented our agents tools and tasks.
>
> **[5:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-our-project-llms-agents-defining-tasks?u=76281980&t=344)** Now, in the next video, let's put our finishing touches and go through the output of our project.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), pass (3), finally, (1)
> **CLI Commands:** make (3), find (2), python (1)
> **Env Vars:** llm (3), api (2), url (1)
> **Cross-References:** previous video (3), in the next (2)
> **Definitions:** defined as (1), means that (1), is a  (1)
> **Analogies:** for example (1), think of it as (1)
> **Warnings:** note that (2)
> **Code Identifiers:** async_execution (1)

#### Finishing touches and analyzing the output
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=1)** Let's quickly finish up our project and analyze the output.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=4)** In the previous video, we have built our tools, agents, and tasks.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=8)** Now it's time to build the crew and run the entire project.
>
> **[0:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=11)** So in the next cell, I import Crew from crewai.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=14)** And I already have the functions with all my tasks and agents, and I'll assign them to tasks and agent variables respectively.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=23)** Next, we are just printing out some prompts so the user can enter the name of the company that we will give to our crew to find information for.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=31)** As you can see, I entered OpenAI.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=33)** What an irony.
>
> **[0:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=35)** Next, I define all my agents individually, like the information_agent, the WebsiteAnalyst agent, the NetworkAnalyst agent, and so on, by equating them to the respective agent functions from the agent collections or functions we created above.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=50)** Similarly, I defined all the tasks again by invoking the functions we created above for each type of tasks where we passing the agent as well as the company name.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=60)** And if you remember, these are the two parameters that each of the task functions were accepting.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=65)** Then we create our summary and briefing context by passing information, website_analysis, network_analysis, and so on.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=73)** Now comes the most important part where we finally create our crew.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=78)** So the Crew function needs a list of agents as well as the list of tasks, and this is where we use the agents and tasks we created just above.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=87)** And then the most important function in this project, which is the crew.kickoff function, which basically runs the crew with all the agents, tools, and tasks for us.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=97)** If you check the output of the crew.kickoff function, it's quite raw, where each agent's activity and thought process and the entire process of handing over to the next reporting agent is covered.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=107)** And it's a long, long output.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=109)** There's one thing that you will notice.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=110)** The number of tokens that get used up in a collaborative multi-agent workflow is just humongous.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=115)** And that's why we need to be careful about going overboard with the number of agents, tools, and tasks that we create, or else you're going to run up a huge bill on OpenAI.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=124)** To make things much more readable for us, since we only care about the final output from our reporting agent, because that's the last agent in the workflow that consolidates each agent's output and gives us the report, we take the output and convert it into markdown and then print it out.
>
> **[2:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=140)** And this is what we're interested in.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=144)** You'd need to look at the output from the crew.kickoff function above only if you wanted to look at the logs and identify where things went wrong, if at all.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=153)** So in our markdown output, we see a very detailed report, which is highly readable.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=157)** We see each agent's output titled properly.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=160)** So the first title is Company Information, which has come from the company information agent, and we get all the details like the website, the founding date, the founders, the headquarter location, the industry, subsidiaries, key personnel, and so on.
>
> **[2:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=177)** Then we have the output from the website analyst agent, and we get the details about each page and the metadata of the website, like the official website URL, website and structure and content review.
>
> **[3:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=188)** And for each of the pages, we get all the information along with the metadata analysis.
>
> **[3:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=195)** Then we have the domain and network analysis, then we have the social media and contact information about the company.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=203)** And then we have the search engine intelligence, the business information from the business information agent.
>
> **[3:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=211)** The regulatory and legal information as well.
>
> **[3:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=214)** So one more benefit of this sort of a workflow is that if you find any agent not performing well, you can fire that particular agent, meaning you can either remove it or change its role and system prompt or help it with better tools.
>
> **[3:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=226)** Amazing, right?
>
> **[3:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=228)** Just take a few minutes to think about how much engineering effort and the number of engineers it would've taken if you wanted to build this exact project without using any LLM agents.
>
> **[3:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=236)** Since I also run a tech services company where I give estimates to enterprises on how long each project would take, I would estimate this to be a two weeks' effort with three engineers at least.
>
> **[4:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=246)** Here, I built something in just a few hours, team of just one engineer, which is myself, and I can now do OSINT of any company I want.
>
> **[4:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=252)** This is the power of LLM agents.
>
> **[4:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=255)** Hope you enjoyed this project as much as I did.
>
> **[4:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=257)** We built an entire collaborative LLM agent workflow for finding information about a company.
>
> **[4:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=262)** OSINT is the first task you do as a pen tester or a hacker, and LLMs just make it so much easier and automated.
>
> **[4:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=269)** In the next chapter, things get even more interesting.
>
> **[4:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=272)** We will build a system that can detect vulnerabilities on any website.
>
> **[4:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/finishing-touches-and-analyzing-the-output?u=76281980&t=275)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), for. (1)
> **Env Vars:** llm (3), osint (2), url (1)
> **CLI Commands:** find (2), make (2)
> **Cross-References:** in the next (3), previous video (1)
> **Code Identifiers:** information_agent (1), website_analysis (1), network_analysis (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 5. Web Vulnerability Scanning with LLM Agents

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to web vulnerability scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=0)** - [Instructor] Welcome to the chapter on web vulnerability scanning with LLM agents.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=4)** In this chapter, we'll essentially be building a project that uses multiple LLM agents that are equipped with tools to carry out web vulnerability scanning of any website that's shared.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=13)** In this particular video, we will first talk about web vulnerability.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=16)** Then, we'll discuss how LLM agents can help, and in the next videos, we will build our project.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=21)** So, let's get started.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=23)** Website vulnerability scanning is the process of systematically examining a website for potential security weaknesses or vulnerabilities that could be exploited by attackers.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=32)** These vulnerabilities can include issues like outdated software, misconfigured servers, insecure code, or open ports that could allow unauthorized access or data breaches.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=43)** Here are some steps that can be executed to detect vulnerabilities in websites.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=48)** Reconnaissance.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=49)** The first step in vulnerability scanning is reconnaissance, where the scanner gathers as much information as possible about the target website.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=56)** This includes identifying the IP addresses, domain names, subdomains, and any network-related data that can provide insights into the website's infrastructure.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=64)** Network scanning.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=65)** The scanner examines the network layer to identify open ports, active services, and server configurations.
>
> **[1:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=71)** This helps in understanding the potential entry points for an attack.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=75)** Network-related data, such as firewall configurations, SSL/TLS certificates, and data settings are also analyzed to identify any weaknesses.
>
> **[1:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=85)** Service fingerprinting.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=86)** The scanner identifies the software and versions running on the web servers, databases, and other network components.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=92)** This is crucial for determining whether any of these components have known vulnerabilities.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=97)** Configuration errors.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=98)** The scanner looks for common configuration errors, such as improper file permissions or default passwords, which can be exploited by attackers.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=106)** Injection testing.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=107)** The scanner might test for common injection vulnerabilities, such as SQL injection, by sending malicious input to the website's forms or URLs and observing the responses.
>
> **[1:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=117)** Operating system fingerprinting.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=119)** The scanning tool also identifies the underlying operating system, which can help in tailoring the vulnerability checks to specific OS-related issues.
>
> **[2:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=128)** Detailed reporting.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=129)** After the scan is complete, the tool generates a report detailing all identified vulnerabilities, their severity levels, and recommendations for remediation LLMS are a great fit for this use case because of contextual understanding.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=144)** LLM agents can analyze the results of vulnerability scans with the deeper understanding of context.
>
> **[2:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=149)** They can differentiate between high-risk and low-risk vulnerabilities based on the specific environment and provide more tailored remediation advice.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=157)** Pattern recognition.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=158)** LLM agents can identify patterns in network-related data that might indicate complex vulnerabilities, such as detecting coordinated attack attempts by recognizing unusual patterns in network traffic.
>
> **[2:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=171)** Automated triage.
>
> **[2:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=172)** LLM agents can automatically prioritize vulnerabilities based on factors such as exploitability, the value of the targeted assets, and potential impact, helping security teams focus on the most critical issues first.
>
> **[3:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=185)** User queries.
>
> **[3:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=186)** LLM agents can interact with security teams in natural language, allowing them to ask questions like, "What are the most critical vulnerabilities in our network," and receive detailed, understandable responses.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=196)** Report generation.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=198)** LLM agents can generate comprehensive, easy-to-understand reports that translate technical findings into actionable insights for both technical and non-technical stakeholders.
>
> **[3:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=207)** Orchestration.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=208)** LLM agents can coordinate with other security tools, such as firewalls, intrusion detection systems, and endpoint security solutions, to automate responses to detected vulnerabilities.
>
> **[3:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=219)** For instance, they could automatically block suspicious IP addresses identified during a scan.
>
> **[3:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=224)** All right, so now that we know quite a bit about web vulnerability scanning and how LLM agents can help with this, in the next video, let's talk about what we will build and the tools that'll help us and lay out the exact plan for the entire project.
>
> **[3:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-web-vulnerability-scanning?u=76281980&t=235)** So, I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (10), ssl (1), tls (1), sql (1), llms (1)
> **Analogies:** such as (6), for instance (1)
> **Code Keywords:** let (2), this, (1)
> **Cross-References:** in the next (3)
> **Speakers:** - [instructor] (1)

#### Planning the project and discovering the right tools
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=1)** In this video, we'll be planning our project and also discovering the right tools that'll help us build out our project.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=7)** All right, so since we want to find vulnerabilities on a website, the first thing we have to think about is scraping the website's network logs.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=12)** And so, we have to find a way to do this.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=14)** The next step would be to process these logs carefully and build a generic enough system that can process network logs from any website.
>
> **[0:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=20)** In the network logs, we can discover the vulnerabilities.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=23)** And now, we can pass on these vulnerabilities to LLM agents since they'll be able to further process this information way better and create detailed reports just like we saw in the previous project.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=32)** This means we need a framework for creating agents.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=34)** We need an LLM to power these agents with.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=37)** We then need to define our agents and our tasks.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=39)** So, these are the steps that we will be following for building our project.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=43)** When it comes to agents, we can have four agents.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=46)** An industry analysis agent, this will guide our agentic workflow on the current industry measures when it comes to security protocol standards.
>
> **[0:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=53)** A front-end security agent, which will check for security breaches in the front-end of the website and describe them in great detail.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=59)** Describing is what LLMs are great at.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=62)** A network security agent, which will check for security breaches on the network communications of a website and describe those in great details.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=69)** A summary and briefing agent, which will compile all gathered information into a concise, informative briefing document.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=75)** And just like the previous project, after we've defined our agents, we will have the tasks.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=80)** So, similar to the previous project, we will have separate tasks for separate agents.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=83)** And then, we'll have a regular process of initializing the agents and the tasks, then creating our crew and starting it off and printing the result in Markdown.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=92)** What sets this project apart from the previous project is the fact that we won't be using a close-source LLM in this project, meaning we won't be using OpenAI or Anthropic.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=101)** Instead, we'll use an open-source LLM called LLaMA 3 and we'll use the eight billion parameter model of this LLM.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=109)** This is a really good model built by Meta and it's quite accurate.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=112)** Now, a way to use this model would be to first download it from Hugging Face and then use it.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=116)** But in this project, we will use Groq, which is a service that provides us fast and cheap access to open-source LLMs.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=123)** So, they essentially host these LLMs for use and ensure low latency, so that we don't have to worry about downloading these models and running them.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=131)** Now of course, this is a paid service and this is why you might want to download the model and run it for free on a T4 GPU in Colab, but this approach is quick and especially when you're using LLM agents where things are going to get slow due to multiple interactions between the agents, it's good to use a service like Groq.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=147)** What makes this particular project much more challenging than the previous project, even though they both use queue AI and multiple LLM agents, is the fact that in this project, we have to scrape the network data and process it.
>
> **[2:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=157)** This is going to take a bit of engineering and this is what we will plan for now.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=161)** After a lot of trials with different tools, I have come to the conclusion that for our use case, we should use Selenium and Beautiful Soup for scraping the network data and making sense of it, as both of these tools are very effective when it comes to scraping.
>
> **[2:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=174)** I'm going to have to organize the code that scrapes and analyzes the network data into multiple functions such as an analyze_logs function that helps me make sense of logs, and extract_meaning_from_logs function that helps me extract relevant information useful to us from the logs, and analyze_http_requests function specifically for analyzing all the HTTP requests being made, analyze_resources function to analyze the resources being used, and most importantly, the analyze_network_data function that analyzes all the network data.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=204)** Once I have this data, I'll create some generic tools that'll help my agents do some tasks.
>
> **[3:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=209)** And then, as we have already discussed, I'll define some agents and their tasks and then we'll be good to go.
>
> **[3:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=214)** All right, so now that we have a plan, we can start building a project from the next video.
>
> **[3:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-the-project-and-discovering-the-right-tools?u=76281980&t=218)** So, I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (7), gpu (1), http (1)
> **Code Keywords:** function (5), this. (1), pass (1), case, (1)
> **Code Identifiers:** analyze_logs (1), extract_meaning_from_logs (1), analyze_http_requests (1), analyze_resources (1), analyze_network_data (1)
> **Analogies:** just like (2), similar to (1), such as (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Cross-References:** next video (1), in the next (1)
> **Tools:** colab (1)

#### Getting network and DOM data and processing it
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=1)** In this video, let's go over the code that is going to help us extract the network data from any website and analyze it for security issues and vulnerabilities.
>
> **[0:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=11)** So the plan is that we will be using Selenium and Google Colab to interact with the webpage and capture its network activity.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=21)** We start by installing all the libraries we need, like Google-Colab-Selenium, Crew AI, DuckDuckGo Search, Beautiful Soup, and so on.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=29)** I then run this command to show the crew AI version, and I've left links in the Colab on how you can get your Groq API key and your Exa API key.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=40)** Then I use the OS package to set the Groq API key and Exa API key by fetching them from user data.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=49)** Then I accept the URL of the website we need to find vulnerabilities on, and that will be [ilovepdf.com](https://ilovepdf.com).
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=57)** Then in this next cell, we import the necessary libraries.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=62)** We have google_colab_selenium as gs, which makes it easy to run Selenium and Google Colab along with some key tools from Selenium itself, like options and desired capabilities.
>
> **[1:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=74)** Next, we set up some configurations.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=76)** We create an instance of options, which lets us customize how Chrome behaves.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=83)** We then set up desired capabilities, which is like a wishlist for what we want from the browser.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=88)** We are asking Chrome to record everything that happens in the browser and the performance logs as well, so we can capture things like network activity.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=99)** Then we try and grab the initial performance logs.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=101)** If something goes wrong, we handle it gracefully with a simple try block.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=107)** After that, we close the browser to reset and then some extra options for the next session.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=112)** We resize the window to 1920 by 1080.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=116)** We disable some browser features, like infobars and popup blocking.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=122)** We then tell Chrome to ignore certificate errors and run in incognitive mode.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=129)** We then fired up a new browser with these settings.
>
> **[2:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=132)** This time, we capture the entire HTML source of the page.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=137)** Finally, we collect the network logs, which include details about all the requests made by the page.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=142)** Think of it as a behind the scenes look at what the page is doing.
>
> **[2:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=147)** We then put these logs into a list so we can easily process or inspect them later.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=153)** And that's it.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=153)** We finish by closing the browser.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=158)** This function processes a log entry, extracting useful information related to HTTP requests, responses, resource types, and web view actions.
>
> **[2:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=168)** The function starts by trying to convert the log string, which is in JSON format, into a Python dictionary using json.loads.
>
> **[2:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=176)** It extracts the message from the log entry, which contains the details of the network activity.
>
> **[3:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=182)** If the message indicates a new HTTP request, which is request will be sent, it pulls out the requests URL method headers and initiator and stores this data.
>
> **[3:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=197)** Else if, it indicates an HTTP response, which is response received.
>
> **[3:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=203)** It captures the URL, status code and headers response and stores it in response data.
>
> **[3:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=211)** It checks if the type of resources mentioned, EG script and image, and records the URL and resource type, It records specific actions that occur on the webpage, like when the DOM content is loading, domContentEventFired, or when the page is fully loaded, loadEventFired.
>
> **[3:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=235)** The function handles any potential errors gracefully by using try, except blocks and returns zero when done.
>
> **[4:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=242)** This function analyzes the list of HTTP requests to identify any unusual patterns or security concerns.
>
> **[4:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=249)** It counts how many times each URL was requested.
>
> **[4:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=252)** If any URL was requested more than five times, it flags this as a potential issue.
>
> **[4:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=260)** It inspects the request headers, specifically looking for unusual user agent strings like HeadlessChrome, which might indicate automated browsing.
>
> **[4:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=272)** It flags any requests that returned an error status code 400 or above, as this could indicate failed or problematic requests.
>
> **[4:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=281)** This function categorizes and counts different types of resources like scripts, stylesheets, images, fonts loaded by the webpage.
>
> **[4:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=290)** It iterates through the list of resources incrementing counters based on the type of resource encountered.
>
> **[4:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=295)** This gives a clear overview of how many scripts, stylesheets, images, and fonts were loaded.
>
> **[5:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=303)** This is the main function that pulls together all data extracted from logs and provides a comprehensive analysis.
>
> **[5:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=310)** This counts different resource types using a default date and tracks the domains from which these resources were loaded.
>
> **[5:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=319)** This extracts the domain from each URL and checks if the resources came from third party domains, flagging potential security risks.
>
> **[5:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=329)** This examines the HTTP headers for security related fields like content security policy and X-Frame-Options highlighting any insecure configurations.
>
> **[5:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=339)** So essentially this function returns a summary of the network activity, including the number of different resources, the domains involved, observations on HTTP requests, the total number of domains, the most frequent domain, and a list of third party domains.
>
> **[6:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=361)** The final step runs analyze network data on the collected data, which is extracted data, producing a summary that can be further analyzed or reported.
>
> **[6:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=373)** Great.
>
> **[6:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=374)** So we have extracted the network data successfully by scraping it and also analyzed it.
>
> **[6:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=378)** Now it's time to set up our agents tools and tasks.
>
> **[6:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=381)** Let's get that done in the next video.
>
> **[6:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/getting-network-and-dom-data-and-processing-it?u=76281980&t=383)** I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** url (7), http (6), api (4), html (1), json (1)
> **Code Keywords:** function (7), let (2), finally, (1), if, (1), type, (1)
> **Tools:** colab (4)
> **Code Identifiers:** google_colab_selenium (1), domcontenteventfired (1), loadeventfired (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (2)
> **URLs:** [ilovepdf.com](https://ilovepdf.com) (1)

#### Analyzing logs and setting up tools
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=1)** In this video, let's take our project a bit further.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=5)** The first thing we will do is work on our analyze_logs function, and then we will create the agents and tools required in our project.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=12)** So let's get started.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=14)** With the analyze_logs function, we are diving deep into the security of a webpage by analyzing its network logs.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=22)** We import json to handle JSON data and datetime to work with dates and times.
>
> **[0:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=27)** The main function here, analyze_logs, takes in a list of logs and checks for potential security issues or flaws.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=37)** We look at every log entry.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=40)** If a request is made using an insecure HTTP URL instead of a secure HTTPS, it's flagged as a potential problem.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=51)** The code checks if the Referrer-Policy header is present in the requests.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=56)** This header controls what information is sent when someone clicks on a link, and missing it could be a security threat.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=65)** If the content-security-policy allows unsafe practices like inline scripts or eval functions, which can be exploited, the code adds a warning.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=77)** If a secure HTTPS page is requesting something over HTTP, it's called mixed content and can weaken the security of the page.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=88)** This gets flagged too.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=92)** The code checks if cookies have important security flags like HTTP only and secure.
>
> **[1:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=100)** Missing these flags could expose the site to attacks.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=104)** It checks if the website's security certificate is expired.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=108)** An expired certificate means the site might not be trusted.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=112)** The code ensures that important security headers like X-Frame-Options and Strict-Transport-Security are present.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=122)** Finally, the code collects all the identified issues and outputs a summary of potential security flaws.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=133)** This code uses the beautiful Soup library to pass an HTML document.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=138)** It then extracts the page title, all hyperlinks, input fields, forms, and script tags from the HTML.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=153)** These elements are stored in separate variables for further analysis or processing.
>
> **[2:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=159)** This code creates a string, Network_context, that combines network log data with potential flaws.
>
> **[2:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=166)** It also creates a string, Code_context, that includes a summary of the script tags found in the HTML source code.
>
> **[2:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=173)** Both strings are formatted to present the information clearly with headers for network logs and source code details.
>
> **[3:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=181)** Now let's build our tools for our agents.
>
> **[3:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=184)** We start by importing some tools, like Exa, which is a powerful search engine and tool from LangChain, which helps us turn functions into smart tools.
>
> **[3:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=193)** We then create a class called ExaSearchTool.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=196)** Inside this class, we define a few different tools that the assistant can use.
>
> **[3:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=202)** The first tool is called search.
>
> **[3:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=205)** Imagine you want to find a webpage about a specific topic.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=208)** You give the assistant a search query it goes online, finds the top three most relevant results, and brings them back to you.
>
> **[3:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=215)** It even uses something called Auto Prompt to make sure the search is super accurate.
>
> **[3:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=222)** The second tool is search_and_contents.
>
> **[3:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=226)** This one is a bit more advanced.
>
> **[3:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=227)** Not only does it find the webpages for you, it also grabs some content from those pages.
>
> **[3:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=232)** It's like saying, hey, find this topic and give me a sneak peek of what's inside.
>
> **[3:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=238)** The third tool, get_contents, is all about getting detailed information.
>
> **[4:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=242)** If you have a list of webpage IDs, like unique addresses, the assistant can fetch up to 1000 characters of content from each page.
>
> **[4:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=250)** This is super useful if you want a quick summary or need specific details from the multiple pages.
>
> **[4:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=256)** The tools function puts all these tools together so you can easily access them whenever you need to search or gather content online.
>
> **[4:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=265)** The exa function is like the engine of the assistant.
>
> **[4:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=268)** It connects everything to the Exa search engine using an API key, making sure the assistant works smoothly.
>
> **[4:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=277)** In the next cell, I'm setting up Groq, which as you know by now, is a service that helps me interact with any open source LLM.
>
> **[4:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=284)** And they take the headache of running the LLM while we just have to call their API.
>
> **[4:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=290)** So I get access to my GROQ_API_KEY from the OS environment, and I set the model name as llama3-8b, which is the LLM I want to use.
>
> **[5:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=300)** And now we are ready to create the agents and the tasks.
>
> **[5:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=304)** Great, now in the next video, we have to create our agents and tasks.
>
> **[5:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=308)** We've already seen this in the previous chapter, and this part will not be very different from what we did in the previous project.
>
> **[5:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/analyzing-logs-and-setting-up-tools?u=76281980&t=315)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), html (3), llm (3), https (2), api (2)
> **Code Keywords:** function (5), let (3), super (2), finally, (1), pass (1)
> **Code Identifiers:** analyze_logs (3), search_and_contents (1), get_contents (1)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** in the next (3), previous chapter (1)
> **Definitions:** is a  (3), is called (1)
> **Exercise Files:** source code (2)
> **Analogies:** imagine (1), it's like (1)

#### Setting up agents and their tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=1)** In the previous video, we've already created our agents and tools, and now it's time to set up our agents and their tasks.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=8)** So let's define our agents.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=10)** We start by importing some tools.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=13)** Dedent from textwrap, health format text neatly.
>
> **[0:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=17)** And agent is the blueprint for creating our smart agents.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=21)** Think of these as our special ingredients.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=24)** Next, we define a class called SecurityAnalysisAgents.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=28)** This is the headquarters where all our agents are created and managed.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=32)** Now we define all the agents individually.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=34)** We have discussed about these agents when we were building our plan.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=37)** The first agent is the industry_analysis_agent.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=40)** This agent's job is to analyze the security standards and protocols used in a specific industry.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=44)** It uses ExaSearchTool and llama3 to do its jobs.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=49)** The backstory explains that this agent will look for security protocols and trends in the industry.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=55)** The second agent is the frontend_security_agent.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=57)** This agent focuses on the front end of the website, basically everything that users interact with.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=62)** Its mission is to find and describe any security issues, especially things like SQL injection, cross type scripting, which are common attacks.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=72)** The backstory gives the agent detailed instructions on what to look for.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=77)** The third agent is the network_security_agent.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=79)** This agent dives deep into the network communication of a website, checking if data transmission is secure and if the overall network is protected.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=88)** It also uses the same tools and smart language model to make sure no security flaw goes unnoticed.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=96)** The fourth agent is a summary_and_briefing_agent.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=99)** After all the other agents have done their analysis, this agent's role is to compile all the findings into a clear and concise briefing document.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=107)** This document will help us understand what security weaknesses need to be fixed and how to address them.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=112)** Let's define the tasks for each agent now.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=115)** SecurityAnalysisTasks is where we define the different security tasks.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=119)** The first task is the research_task.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=121)** Here, an agent is asked to research a specific website given by the URL and provide a detailed report.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=129)** This report should highlight key security measures and security protocols that the company must follow.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=136)** The task is set to run in the background, meaning the agent can work on it while doing other things.
>
> **[2:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=143)** The second task is the frontend_analysis_task.
>
> **[2:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=146)** This is the very detailed checklist that focuses on the front end of the website.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=150)** Everything that users see and interact with.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=152)** The task includes checking input validation, protecting against attacks like XSS and CSRF, ensuring proper security headers and more.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=161)** The agent needs to analyze the website and provide a comprehensive review of its front end security, making sure all security practices are up to the standards.
>
> **[2:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=169)** The third task is the network_analysis_task.
>
> **[2:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=172)** This task is all about securing the communication channels of the website.
>
> **[2:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=177)** The agent checks if the website uses secure authentication methods, encrypts data, mandates sessions properly and more.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=183)** It's like a deep dive into the technical side of how data is handled and protected as it moves through the website's network.
>
> **[3:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=190)** The final task is the summary_and_briefing_task.
>
> **[3:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=193)** After all the research analysis are done, this task compiles everything into a clear and concise briefing document.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=198)** The agent's job here is to list all the vulnerabilities found during the analysis and provide steps to fix them.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=204)** The goal is to create a report that's easy to understand and help the website's team take action to improve security.
>
> **[3:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=213)** In the next cell, we set the tasks and agents.
>
> **[3:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=217)** Since we want to pass all our agents and tasks to CrewAI later on, we have to initialize each of our agents by assigning them the respective functions that were defined above.
>
> **[3:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=226)** For the tasks, we do the same, and you can notice we are passing in the parameters like URLs and code context, et cetera, which will help the agents analyze the network data.
>
> **[4:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=240)** Awesome.
>
> **[4:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=241)** So as you can see, CrewAI projects revolve around creating agents, tools, and tasks, and then assembling the crew and running it.
>
> **[4:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=247)** And this is the second time we are seeing this process followed.
>
> **[4:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=250)** You can simply use the same process for your next projects.
>
> **[4:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/setting-up-agents-and-their-tasks?u=76281980&t=252)** In the next video, all that's left to do is kick off the crew and analyze the output from our crew.

> [!info]- Semantic Content
>
> **Code Identifiers:** industry_analysis_agent (1), frontend_security_agent (1), network_security_agent (1), summary_and_briefing_agent (1), research_task (1)
> **Code Keywords:** let (2), protected (2), for. (1), pass (1)
> **Env Vars:** sql (1), url (1), xss (1), csrf (1)
> **Cross-References:** in the next (2), previous video (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)

#### Kicking off the crew and analyzing the output
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=1)** In the previous video, we've already created our agents, tools, and tasks.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=5)** Now it's time to set up our crew and then kick off the crew.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=8)** So let's get started.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=10)** In this cell, we create our crew finally, by passing in all the agents and the tasks we have built up until now.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=19)** And in the next cell, we then kick off our crew and print the output.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=25)** The website we want to analyze for security vulnerabilities is a very popular website that you probably might have used at some point of time.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=33)** We are using [ilovepdf.com](https://ilovepdf.com), and I usually use it to compress my PDFs or edit them.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=40)** If you go through the output, you see how each agent is outputting its thought.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=44)** And if you notice in the middle, we hit an error.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=50)** And this restarts the entire process.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=56)** And we start from scratch.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=57)** And finally, we get the final answer, which has the list of vulnerabilities on the website.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=65)** In the next cell, we write some code to print the result in markdown format, and the report that we get is very easily readable and well organized.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=76)** So let's go through the report once.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=79)** In the output, you see that we start with security measures and security protocols, which are coming from the industry analysis agent.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=88)** And we're comparing against that and checking if our website is in fact following these protocols.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=95)** Now, keep in mind, this is a website that's been around for at least a decade, and they receive traffic of millions of users per day.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=101)** And to be honest, I'm not expecting to find much on a website like this, but if you were doing a scan on a much smaller website, you'd find so many more issues.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=110)** In the next line, we see some potential flaws like the missing Referrer-Policy header, the missing X-Frame-Options header and the missing Strict-Transport-Security header.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=120)** And then we have some recommendations for the website.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=124)** For example, for the users that use this website, they can be multifactor authentication and maintain up-to-date TLS certificates.
>
> **[2:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=134)** But you do see a bit of repetition, like it says enforce HTTPS, but it's already there.
>
> **[2:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=141)** And this is a hallucination or a false positive.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=144)** And since this is just a proof of concept, we are not worried about hallucinations at this point of time, but there are a thousand ways to work on it and reduce the hallucinations and false positives.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=153)** We end the report with compliance and third party integrations, which can lead to some security considerations.
>
> **[2:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=160)** And then finally, there's a conclusion which you can think of as the TLDR version.
>
> **[2:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=165)** Awesome, this brings us to the end of our project.
>
> **[2:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=168)** Up until now, we've built some serious projects that can be used in the real world, and especially projects like this one where we can run this vulnerability scan on any website.
>
> **[2:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=177)** That's such an awesome thing.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=178)** If you didn't know, the company that I founded, Armur AI does exactly this.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=183)** We build LLM agents for security purposes and have products for code scanning, web vulnerability scanning, and even LLM-powered pen testing.
>
> **[3:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=191)** And all those products are just much more refined versions of the projects that we have built in this course.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=196)** So I'm not showing you random projects.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=198)** I'm showing you projects that are live and in action.
>
> **[3:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=200)** Now it's time to move on to the next chapter and build something even more awesome, which is an LLM-powered firewall.
>
> **[3:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=206)** Hope you're having a great time.
>
> **[3:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/kicking-off-the-crew-and-analyzing-the-output?u=76281980&t=207)** I'm excited to see you in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (2), this, (1), this. (1)
> **Env Vars:** llm (3), tls (1), https (1), tldr (1)
> **Cross-References:** in the next (4), previous video (1), next chapter (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2)
> **URLs:** [ilovepdf.com](https://ilovepdf.com) (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)


### 6. LLM-Powered Firewall

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to LLM-powered firewall projects
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=0)** - [Instructor] Welcome to the chapter on LLM-powered firewalls.
>
> **[0:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=3)** In this chapter, our objective is to build a firewall that's powered by an LLM.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=8)** Now, please keep in mind that we'll be building an extremely scaled-down version of how an actual LLM-powered firewall will run.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=15)** But by just building this proof of concept project, you'll learn a lot.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=18)** Most importantly, the process of building a production scale project is exactly the same as building a proof of concept.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=24)** Only the amount of resources change, and this means you can use this learning to build bigger and better versions of the same project once you have more resources, like time, bandwidth to create better datasets, bigger GPUs, and bigger models.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=38)** In this particular video, let's get started by getting a quick intro on firewalls and how LLMs can help.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=44)** A firewall acts as a barrier between your internal network and external resources, filtering incoming and outgoing traffic based on predefined security rules.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=52)** Firewalls monitor all traffic, deciding what to allow or block based on criteria, like IP addresses, protocols, and ports.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=60)** So let's dive a bit deeper into how this actually works.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=62)** Firewalls continuously monitor data packets that try to enter or exit the network.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=66)** They apply security rules to these packets, checking for things like known malicious IP addresses, suspicious protocols, or unusual data transfer volumes.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=75)** Advanced firewalls can identify anomalies by comparing traffic patterns against known safe behavior.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=81)** Based on their analyses, firewalls make real-time decisions to either allow safe traffic through or block potential threats.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=88)** There are, however, a few challenges with traditional firewalls.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=91)** Firewalls often rely on static rules that need regular updating to keep up with evolving threats.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=96)** As network grows and threats become more sophisticated, managing firewall rules and configurations becomes increasingly complex.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=104)** Firewalls primarily focus on external threats, but they might struggle with detecting malicious activity originating from within the network.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=112)** And this is where LLMs can enhance firewalls.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=114)** LLMs can analyze vast amounts of data, learning from it to dynamically identify and adapt to new threats without the need for constant rule updates.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=123)** LLMs can understand the context of network traffic more deeply, improving the accuracy of detecting sophisticated attacks, like phishing or advanced persistent threats.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=131)** By learning what normal network behavior looks like, LLMs can spot even subtle deviations that might indicate an emerging threat.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=138)** LLMs can help automate the response to detected threats, reducing the time it takes to neutralize potential attacks.
>
> **[2:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/introduction-to-llm-powered-firewalls-project?u=76281980&t=143)** All right, now that we have a quick primer on firewalls and how they work, and we also know how LMS can help with this, in the next video, let's plan our approach on how we can build this out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (1), this, (1)
> **Env Vars:** llm (3), lms (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Planning the approach
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=1)** In the previous video, we talked about how firewalls work and how LLMs can help.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=6)** In this video, let's talk about the project we want to build in this chapter, and our plan on how we're going to approach this problem.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=14)** At a 10,000-feet perspective, all we will be doing is fine-tuning an LLM with network data dataset and train it to detect malicious packets.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=22)** And that's it.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=23)** There are no agents involved, and yet this is the last project of this course.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=28)** And the reason for that is we will have to get the network data and pre-process it quite a bit before we can feed it to our LLM for fine tuning purposes.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=36)** So keeping this in mind, let's go over our plan quickly.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=39)** We will begin by capturing network packets in real time using Scrapy, a powerful Python library for packet manipulation.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=46)** Packets are intercepted from a specified network interface, and various types of packets like HTTP, IP, TCP, UDP, ICMP are processed.
>
> **[0:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=53)** For each captured packet, relevant data such as protocol types, source and destination bytes, and packet count are extracted and stored in a dictionary.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=61)** Extracted packet data is structured according to predefined keys, ensuring consistency across different types of packets.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=67)** This structured data is then appended to a list, which acts as a temporary storage for all captured packets.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=73)** After capturing a set number of packets, the data is written to a CSV file.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=76)** This file acts as a data set that can be used for further analysis and machine learning tasks.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=81)** The CSV files containing the captured packet data are imported into a Pandas data frame for pre-processing.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=86)** The data from training and testing CSV files is combined to streamline the pre-processing steps, avoiding redundant work.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=93)** Then, we will identify categorical and numeric columns within the dataset, which is essential for applying appropriate pre-processing techniques.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=101)** We'll remove some irrelevant columns, simplifying the dataset and focusing on useful features.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=105)** Categorical variables are converted into a numerical format using one-hot encoding, making them suitable for machine learning algorithms.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=113)** Numerical columns are normalized to ensure all features are on a similar scale.
>
> **[1:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=117)** This step is critical for improving the performance and accuracy of machine learning models.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=121)** The normalization process involves subtracting the minimum value of each numeric column and dividing by the standard deviation.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=127)** The process and and coded data is now ready for training and testing, various machine learning models, such as logistic regression, decision trees, and neural networks.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=136)** The final data set is optimized for building models that can analyze network traffic, detect anomalies, or classify different types of network activities.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=145)** And once we have our data set ready, after all of this processing, we just have to load our LLM, fine tune our LLM with the dataset, and finally run inference on it.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=153)** And as you can note, I've gone into the details about the data pre-processing because that's something new that we haven't done before, and I haven't discussed much about the LLM fine tuning part because we've seen it in earlier projects.
>
> **[2:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=165)** Now if you notice, we are essentially bringing together quite a lot of things that we've already learned in previous projects.
>
> **[2:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/planning-our-approach?u=76281980&t=171)** All right, so now that we have a clear approach on how we are going to build our project, let's get started with building it from the next video onwards.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), csv (3), http (1), tcp (1), udp (1)
> **Code Keywords:** let (3), interface (1)
> **Cross-References:** previous video (1), we talked about (1), next video (1)
> **Analogies:** such as (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Network data gathering and storing
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=1)** We are now getting started with building our project.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=4)** Let's go through our Colab file where we have the project built along with the output, and let's go through the code together.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=9)** We start off like we usually do by installing some packages that'll help us in our project, and we mount our Google Drive because we would need to extract our network data and store it for operations.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=22)** And then, in this cell is where our project starts.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=26)** From a 10,000 feet perspective, the code in this cell essentially listens to network traffic, processes the package to extract relevant information, and then saves that information to a CSV for further analysis.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=38)** The process is automated, so it can be used in different scenarios like network monitoring or cybersecurity tasks, but let's go over it line by line so we know exactly what's happening.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=48)** We begin by setting up a dictionary called default_values.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=52)** This dictionary contains various keys like id, dur, proto, et cetera, each of which is set to an initial value of zero.
>
> **[1:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=62)** These keys represent different pieces of information or attributes related to network packets.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=67)** Packets are small chunks of data sent over a network.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=70)** The key, attack_cat, is set to normal to indicate that by default, the packet isn't considered part of an attack.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=78)** We create an empty list called data.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=81)** This list will later store information about each packet that is captured and processed.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=87)** The extract_data function is designed to analyze a network packet and fill out the data dictionary with relevant information.
>
> **[1:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=95)** First, the function creates a copy of default_values to avoid changing the original defaults.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=101)** A helper function, update_data, is defined within extract_data.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=106)** This helper function checks if a given key exists in the data dictionary, and if it does, it updates that key with a new value.
>
> **[1:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=114)** The code then checks the type of packet received.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=118)** If it's an HTTP packet, it updates the product key to HTTP.
>
> **[2:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=125)** If it's an IP packet, it updates sbytes with the size of the IP layer and proto with the protocol used by the IP layer.
>
> **[2:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=134)** For TCP, UDP and ICMP packets, it updates the number of sent packets, spkts, to one, and the number of received packets, dpkts, to zero.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=148)** The update_csv function is responsible for saving the captured data to a CSV file, which is a common format for storing data in a table X structure.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=158)** It starts by reading the existing CSV file to find the highest ID in the file.
>
> **[2:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=163)** This ensures that new packets are assigned a unique ID.
>
> **[2:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=168)** The data list, which holds all packet data, is then updated with new IDs, and then the list is appended to the existing data in the CSV file.
>
> **[2:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=176)** The file is then saved with the new information.
>
> **[3:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=180)** The get_interface function uses argparse to handle command line arguments.
>
> **[3:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=185)** This function allows the user to specify which network interface, like wifi or ethernet, the program should monitor for packets.
>
> **[3:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=194)** The sniff function is where the actual packet capturing is happening.
>
> **[3:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=198)** It uses a tool called scapy to listen for packets on the specified network interface.
>
> **[3:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=204)** Each time a packet is captured, the process_packet function is called.
>
> **[3:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=209)** This function extracts data from the packet using the extract_data function, and then adds the extracted data to the data list.
>
> **[3:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=218)** The function also prints a message showing that a packet has been captured and stops capturing after 10 packets.
>
> **[3:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=225)** Finally, the script calls get_interface to get the user specified network interface, and then it calls sniff(iface) to start capturing packets.
>
> **[3:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=234)** After capturing the packets, the script saves the collected data to the CSV file by calling update_csv.
>
> **[4:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=241)** We can then see the raw data from the captured packets and the output.
>
> **[4:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/network-data-gathering-and-storing?u=76281980&t=244)** All right, now we have to think about pre-processing this data further, so let's do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (4), interface (3), default, (1), finally, (1)
> **Code Identifiers:** extract_data (3), default_values (2), update_csv (2), get_interface (2), attack_cat (1)
> **Env Vars:** csv (5), http (2), tcp (1), udp (1), icmp (1)
> **Tools:** colab (1), command line (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** getting started (1)

#### Data preprocessing
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=1)** Now that we have gathered our network data and stored it, it's time to pre-process it further before we can use it to fine tune our LLM.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=8)** The code we are about to see essentially takes raw data, cleans it up by handling special values, drops unnecessary columns, converts categorical data into an numerical format, and normalizes the numeric data.
>
> **[0:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=21)** These steps are crucial in preparing the data for machine learning tasks, ensuring that the data is consistent, clean and ready for model training.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=29)** So let's look at it in detail.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=30)** The code begins by reading two CSV files into Ana's data frames: train_data, and test_data.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=38)** These files contain training and testing data sets, which are typically used in machine learning to train models and then evaluate their performance.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=47)** Both data sets are combined into one data frame called combined_data.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=52)** This step is done to apply pre-processing steps to both data sets at the same time, which ensures consistency and it saves time.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=59)** The code then identifies which columns in the combined data are categorical or non-numeric, and which are numeric.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=67)** Categorical calls holds the name of all columns that contain text or categorical data, while numeric calls contains the names of columns with numerical values.
>
> **[1:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=77)** Identifying these columns is essential for applying different pre-processing techniques to them.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=82)** The service column in the data might contain a special value, dash, which could represent missing or undefined data.
>
> **[1:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=89)** To handle this, the code replaces all instances of dash with none in any column.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=96)** The function goes through each column and makes the necessary replacements.
>
> **[1:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=101)** This function is then applied to all columns in combined data to ensure that no dash values remain.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=106)** This code removes certain columns that are not needed for further analysis.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=110)** The ID column, which usually just contains unique identifiers for each row, is dropped because it doesn't provide useful information for the analysis.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=119)** The attack_cat column, which categorizes types of attacks, is also removed.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=123)** This might be because the label or outcome is already captured in another column, or it's not needed for the specific analysis being done here.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=131)** Categorical columns, which contain text or categories, can't be directly used in most machine learning models, so they're converted into numerical format using a technique called one-hot encoding.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=142)** One-hot encoding creates new columns for each unique value in a categorical column with a one in the column where the value exists and zero elsewhere.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=152)** This step converts the processed data into processed_data_encoded where all categorical data is now in a numerical format suitable for machine learning models.
>
> **[2:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=163)** The numeric columns, excluding the label and ID, are then converted to the flow data type to prepare them for further processing.
>
> **[2:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=172)** The values in these columns are normalized, which means they're adjusted to have a standard range.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=178)** Specifically, the code subtracts the minimum value of each numeric column, and then divides by the standard deviation.
>
> **[3:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=186)** This standardization helps ensure the model doesn't get biased by the scale of the data.
>
> **[3:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=193)** Finally, the code uses the head function to display the first few rows of the processed and encoded data.
>
> **[3:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=199)** This is a good way to check that the data has been correctly processed and is ready for further analysis or model training, and we can see the results in the output.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/data-preprocessing?u=76281980&t=208)** All right, in the next video, we can start working with our LLM, so I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1), this, (1), finally, (1)
> **Code Identifiers:** train_data (1), test_data (1), combined_data (1), attack_cat (1), processed_data_encoded (1)
> **Env Vars:** llm (2), csv (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### LLM setup
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=1)** We are going strong.
>
> **[0:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=3)** We've already built our function to access network data and store it, and then to process the data to be in a format that can be easily used for LLM fine tuning.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=10)** Now we have to set up our LLM so that we can fine tune it, so let's get started.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=14)** The code starts by importing Torch, a powerful library for machine learning, particularly in handling tasks on GPUs.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=23)** The major and minor version of the cuda are checked to determine if the GPU is powerful enough for specific tasks.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=30)** Depending on the cuda version, certain packages are installed using pip.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=33)** These packages include tools for efficient competition and handling large language models.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=38)** If the GPU is strong enough, which means the major version is greater than equal to eight, then additional packages like Packaging, Ninja, Einops, Flash Attention Xformers, TRL, Peft Accelerate, and Bits and Bytes are installed.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=52)** These tools optimize various aspects of working with LLMs, such as memory usage, competition speed, and model performance.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=59)** If the GPU is less powerful, a lighter set of packages installed to ensure compatibility and efficiency.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=66)** This code uses the package onslaught to load a pre-trained language model, and we've already seen this package in use in earlier projects.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=73)** The max sequence length is set to 2048, which defines the maximum length of the text the model can handle at once.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=80)** This number can be adjusted depending on the task with some models like Llama three, supporting up to 8,000 tokens.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=86)** The model is loaded in four bit precision, a technique that reduces memory usage while maintaining performance.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=93)** This is especially useful for working with large language models on limited hardware.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=98)** A list of available models is provided, all of which are optimized for four bit precision.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=104)** These models include different variations of popular LLMS like Llama and Gemma, each fine tuned for specific tasks.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=112)** This line loads the unsloth/llama 3 8B BNB 4bit model, which is a specific version of the Llama model optimized for efficiency.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=121)** The loaded model will be fine tuned using PEFT techniques, which is parameter efficient fine tuning.
>
> **[2:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=128)** This will allow the model to be adjusted for the specific task of analyzing network packet data without the need for retraining the entire model.
>
> **[2:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=136)** Parameters like R, lora alpha, lora dropout are set to control how the model is fine tuned.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=145)** The fine tuning process helps the model learn specific patterns or tasks more effectively.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=151)** A new data frame is created to hold data for fine tuning the model.
>
> **[2:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=156)** This data will help the model learn how to classify network packets as safe or not safe.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=161)** An instruction text is set which acts as a prompt for each data entry.
>
> **[2:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=166)** The instruction is this is the input of a single packet in the network, classify it as safe or not, where zero is safe and one is not.
>
> **[2:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=175)** The input column is generated by concatenating the column names and their respective values from the process data, creating a detailed description of each packet.
>
> **[3:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=183)** The output column stores the corresponding label, which is zero for safe and one for not safe.
>
> **[3:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=189)** The dataset fine tuned data frame is now ready, containing the instructions, inputs, and outputs needed for fine tuning the model.
>
> **[3:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=196)** The code prints the first few rows of the data frame to ensure everything is in order.
>
> **[3:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=201)** Finally, the data frame is saved as a CSV file, which can be used for training the model.
>
> **[3:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=206)** All right, all the LLM setup is done.
>
> **[3:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=208)** In the next video, let's actually find tune the model.
>
> **[3:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-setup?u=76281980&t=211)** I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), gpu (3), trl (1), llms (1), bnb (1)
> **Code Keywords:** let (2), function (1), finally, (1)
> **CLI Commands:** pip (1), find (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** set up (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### LLM fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=1)** We are finally ready to fine tune our LLM.
>
> **[0:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=4)** Let's go through the code together.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=7)** The alpaca prompt variable is a template that helps format how instructions, inputs, and responses should be presented.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=15)** It ensures that the structure of these three elements is consistent.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=19)** When we fill in this template, we get a complete prompt ready to be processed by the model.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=24)** EOS Token is a special token that tells the model when to stop generating text.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=28)** Without this token, the model might keep generating text indefinitely, which isn't what we want.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=34)** This token is crucial for controlling the output length.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=36)** The formatting prompts func function is responsible for taking the instructions, inputs, and outputs from our dataset and plugging them into the alpaca prompt template.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=49)** It loops through each example in our dataset and formats it properly appending the EOS token at the end.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=56)** The result is a list of neatly formatted texts ready for training.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=61)** Instead of using an existing dataset, we loading our custom dataset using the load dataset function.
>
> **[1:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=68)** This dataset contains instructions, inputs, and outputs that we have prepared for fine tuning the model.
>
> **[1:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=74)** After loading the dataset, we split it into training and testing set.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=80)** In this case, 80% of the data is set aside for training, which is where the model learns while the remaining 20% could be used for testing.
>
> **[1:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=89)** The training set is then processed using the formatting prompts func function to ensure all examples follow the correct format.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=97)** This is done in batches to make the process more efficient.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=102)** The SFT trainer is set up to handle the fine tuning process.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=105)** It uses the model and tokenizer we've already defined and it's configured with the formatted training data.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=111)** Several important parameters are defined here.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=115)** The per device train batch size is set to two, meaning the two examples are processed at a time on each device.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=122)** Gradient accumulation steps is set to four.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=124)** This helps in accumulating gradients across several steps before updating a model, allowing us to effectively simulate a larger batch size without running out of memory.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=133)** Learning rate is set to two E minus four and optimization is set to Adam W eight bit, which is a memory efficient version of the Adam Optimizer.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=144)** Depending on the GPS capabilities, the training might use mixed precision FP16 or BF16 to speed up competitions while using less memory.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=153)** The training is configured to run for a maximum of 16 steps with some warmup steps to gradually ramp up the learning rate.
>
> **[2:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=163)** Finally, the trainer or train function kicks off the training process.
>
> **[2:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=167)** The model will go through the data learning to predict the correct responses based on the instructions and inputs provided.
>
> **[2:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=173)** The training statistics are captured in trainer stats, which you can use to monitor the performance.
>
> **[3:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=180)** Alright, the fine tuning is done.
>
> **[3:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-finetuning?u=76281980&t=182)** In the next video, let's run inference on our fine tune model and see how it performs.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), case, (1), finally, (1)
> **Env Vars:** eos (2), llm (1), sft (1), gps (1), fp16 (1)
> **Definitions:** is a  (4)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Inference output and closing notes
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=1)** We have fine tuned our LLM in the previous video, and now it's time to run inference on our fine tuned LLM.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=8)** So let's see how it performs.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=10)** This step ensures the model is optimized for generating outputs based on input data.
>
> **[0:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=15)** The choice function selects a random row from the dataset, which has been fine tuned and converts it into a dictionary format.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=22)** This row includes instruction and corresponding input that the model will use to generate a response.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=28)** The selected instruction and input are formatted into a prompt using the alpaca_prompt.format method.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=34)** The prompt structure is crucial for guiding the model on how to generate the output.
>
> **[0:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=38)** The formatted prompt is then tokenized or converted into a format the model can process using the tokenizer function.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=46)** This tokenized input is sent to the model on a GPU to cuda.
>
> **[0:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=50)** The text_streamer object is initialized to stream the generated text as the model produces it.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=55)** The model then generates a response based on the input with a limit of 128 new tokens to prevent overly long outputs.
>
> **[1:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=63)** Now, let's look at the generated output.
>
> **[1:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=66)** We can see that in the instructions we have mentioned, this is the input of a single packet in the network classified it as safe or not, where zero is safe and one is not.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=76)** And then we give the input, and in the output we can see zero, which means the LLM is saying that the packet is safe, and the explanation is the packet is safe.
>
> **[1:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=89)** Now, of course, we saw just one packet of data processed here, but LLMs can process thousands of packets in one go, and this approach scales really well.
>
> **[1:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=98)** All right, our fine tuned LLM works successfully and we have successfully built a proof of concept firewall that uses LLMs to detect malicious packets.
>
> **[1:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=106)** And this is the end of this chapter.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=109)** We've built quite a lot of awesome projects as part of this course, and I'm excited to see how you take this beyond and the things that you'll build using the knowledge you have gained here.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=118)** It is important to note that you're extremely early in this field, and most of the people haven't realized how important LLMs and LLM agents are going to be.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=127)** In the next chapter, let's explore what the future holds for this technology.
>
> **[2:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/inference-output-and-closing-notes?u=76281980&t=131)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), gpu (1)
> **Code Keywords:** let (3), function (2)
> **Cross-References:** in the next (2), previous video (1)
> **Code Identifiers:** alpaca_prompt (1), text_streamer (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 7. The Future of Cybersecurity with LLMs

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Threats of the future
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=1)** Up until now, we've learned quite a bit about using LLLMs for cybersecurity, and also built quite a few projects, and this means our knowledge is not just theoretical and more, it's practical and hands-on.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=12)** This chapter is about the future.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=14)** Since we've already discussed what's happening in the LLM plus security space currently, we will now discuss how things will evolve and change in the future.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=22)** Knowing this will help you upgrade your knowledge in the future and will help you to go beyond this course.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=26)** There are some cyber threats that are going to be prevalent in the future.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=30)** LLM-powered agents capable of hacking.
>
> **[0:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=32)** These are collaborative agents, just like the ones we've seen in the OSINT and web scanner projects, but the only twist is that they're equipped with tools that enable them to hack.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=42)** Decentralized botnets for decentralized denial-of-service attacks.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=45)** Botnets that are difficult to take down as they use the blockchain technology that enables them to stay persistent since they're decentralized, meaning no bot is the leader of the botnet, so you cannot take down one leader expecting the botnet to go down.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=58)** Real-time swarm learning botnets.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=60)** These botnets attack a server or a system and learn in real time about the system's defenses, and are able to adapt in real time as well.
>
> **[1:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=67)** They don't rely a lot on pre-programming, but on active learning and relearning, and hence are quite dangerous.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=72)** In the next few videos, we will talk about these three in a lot more detail, but now let's take a look at a few more threats that will be highly dangerous in the future.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=80)** Deepfake propagation.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=82)** LLLMs combined with advanced AI can be used to create and distribute deep fake videos, images, or audio.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=87)** These could be used in misinformation campaigns, blackmail, or to manipulate public opinion, causing large-scale social disruption.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=94)** Intelligent ransomware.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=96)** Future ransomware powered by LLLMs could negotiate ransoms autonomously, analyze a victim's financial situation, and adjust its demands accordingly.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=104)** It could also identify critical systems or data to encrypt, maximizing its impact.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=108)** Autonomous zero-day exploits.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=111)** LLMs could be used to discover and exploit zero-day vulnerabilities at an unprecedented scale.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=116)** These AI-driven exploits could adapt to different environments and defenses, making them more effective and harder to counter.
>
> **[2:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=122)** Adversarial AI attacks.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=123)** LLMs could be used to craft adversarial examples that trick AI systems into misclassifying data or making incorrect decisions.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=130)** This could be used to bypass security systems, such as facial recognition or intrusion detection systems.
>
> **[2:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=135)** LLM-driven autonomous reconnaissance.
>
> **[2:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=138)** Attackers could deploy LLM-powered agents to autonomously perform reconnaissance on target networks, gathering information, identifying vulnerabilities, and even mapping out entire attack strategies without human intervention.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=148)** Now that we are aware about how threats will evolve in the future and how hackers will use cutting-edge technology, let's dive a bit deeper.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/threats-of-the-future?u=76281980&t=154)** In the next video, let's talk a bit about how LLM-powered agents can be used for hacking purposes.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), osint (1)
> **Code Keywords:** let (3), public (1)
> **Cross-References:** in the next (2)
> **Analogies:** just like (1), such as (1)
> **Speakers:** - [instructor] (1)

#### LLM powered agents for hacking
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=1)** In this video, we're discussing how LLM powered agents can be weaponized by hackers to do dangerous things.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=7)** As a security professional, you need to be aware about this so that you can build systems to stop this in the future.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=12)** We've already seen collaborative LLM workflows, and we already know how powerful they are, especially when the agents are combined with tools that can give them different abilities on the internet.
>
> **[0:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=23)** Now, agents can be powered by the same LLM, or they can be powered by multiple different LLMs, which just make the agent workflows much more effective.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=30)** The thing is, all of these technologies are open source, so we cannot control who uses them, and this makes it very easy for hackers to weaponize all of this new technology.
>
> **[0:40](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=40)** So let's see how this can happen.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=42)** Adaptive malware development.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=43)** LLM-powered agents can create and modify malware on the fly, adapting on the target environment to evade detection.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=51)** They can continuously learn from failed attempts, improving the tactics with each iteration.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=55)** Exploitation of vulnerabilities.
>
> **[0:57](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=57)** LLMs can be trained to recognize patterns in code that indicate security weaknesses.
>
> **[1:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=61)** Once a vulnerability is identified, the agent can automatically generate and deploy exploit scripts to compromise the system.
>
> **[1:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=68)** Autonomous decision-making.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=70)** These agents can make real-time decisions during an attack, choosing the most effective strategies based on the environment and defenses encountered.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=78)** They can adjust their behavior dynamically, switching tactics if they detect changes in the target's defense mechanisms.
>
> **[1:23](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=83)** Data exfiltration and manipulation.
>
> **[1:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=86)** After compromising a system, LLM-powered agents can autonomously search for and extract sensitive data.
>
> **[1:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=90)** They can also manipulate data to achieve specific outcomes, such as altering financial records or tampering with critical infrastructure.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=97)** Coordination with other agents.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=99)** LLM-powered agents can work in concert with other AI-driven systems, coordinating attacks and sharing information to optimize the overall hacking effort.
>
> **[1:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=107)** This could include orchestrating a decent layers attack involving multiple vectors.
>
> **[1:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=110)** This is one of the most dangerous manifestations of LLM agents, and this is what we're going to discuss in the next video.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=115)** Awesome.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=116)** I'm sure you enjoyed this video because it had a lot of sci-fi stuff, even though it's really not sci-fi.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=121)** All of this is very possible and doable with existing technology.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/llm-powered-agents-for-hacking?u=76281980&t=124)** In the next video, let's talk about how decentralized botnets work.

> [!info]- Semantic Content
>
> **Env Vars:** llm (7)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Cross-References:** in the next (2)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Decentralized botnets for decentralized DOS attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=1)** In this video, we are discussing some really advanced topics, but it's something that I deeply specialize in, and that's why I thought I'm the right person to take you through this.
>
> **[0:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=8)** We are going to talk about decentralized botnets and why they're so dangerous.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=12)** Having a good understanding of this ensures that you as a security professional, are ready for the gnarliest of attacks.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=18)** A botnet is essentially a network of computers or devices infected with malware and controlled remotely by an attacker, often without the owner's knowledge.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=26)** These devices often called zombies can be used for various malicious activities.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=30)** In the previous video, we also learned that botnet nodes can be LLM powered agents.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=34)** This makes botnets way more dangerous.
>
> **[0:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=36)** Botnets can scale to hundreds of thousands, or even millions of devices giving attackers immense power to perform cyber attacks.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=43)** One of the most common use a botnet is to perform a denial of service attack, where the botnet sends a massive amount of traffic to a target system, like a website or server, overvaluing its resources.
>
> **[0:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=52)** One step above in terms of complexity are distributed botnets.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=56)** Unlike traditional botnets, distributed botnets are spread across multiple locations and are composed of devices from various networks around the world.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=64)** This distribution makes them harder to detect and shut down, and these distributed botnets are able to perform distributed denial of service attacks.
>
> **[1:11](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=71)** And let's see how that happens.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=73)** In a DDoS attack, a distributed botnet sends a flood of traffic to the target from multiple devices in different locations, overwhelming the target's resources.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=81)** The distributed nature of the attack means that the traffic comes from many sources, making it much more difficult to block or mitigate.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=87)** The sheer volume of traffic from so many sources can bring down even well-protected systems.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=92)** Now, one step above distributed botnets are decentralized botnets.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=96)** A decentralized botnet is a more advanced type of botnet that operates without a central command and control server.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=103)** Instead of relying on a single point of control, these botnets use peer-to-peer networks or blockchain technology to coordinate their activities.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=111)** Each device in the botnet can act independently or in coordination with others, making the botnet more resilient to take down efforts.
>
> **[2:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=120)** Because decentralized botnets lack a central control point, they're extremely difficult to disrupt.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=124)** Even if some nodes are taken down, the rest of the botnet can continue to operate.
>
> **[2:08](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=128)** This decentralized nature makes them more robust and harder to eliminate.
>
> **[2:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=133)** Now, let's learn a bit more about how decentralized DoS attacks are performed.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=137)** In a decentralized DoS attack, the botnet devices coordinate without a central server.
>
> **[2:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=141)** Each device autonomously generates and sends traffic to the target, but the overall attack is coordinated through decentralized communication protocols.
>
> **[2:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=148)** The decentralized structure makes these attacks particularly resilient, because there's no single point of failure.
>
> **[2:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=154)** The botnet can rapidly scale with each device in the network contributing to the flood of traffic.
>
> **[2:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=159)** This results in highly effective and difficult to mitigate attack, it can take down even the most robust infrastructure.
>
> **[2:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=164)** Decentralized botnets can adapt in real time, changing tactics and methods based on the target defenses.
>
> **[2:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=170)** For example, they can switch communication methods or adjust the tax intensity, making it nearly impossible for defenders to mount an effective response.
>
> **[2:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=178)** And this usually happens with the help of swarm learning, which is what we're going to talk about in the next video.
>
> **[3:02](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=182)** All right, in the next video, we'll talk about botnets more and see how the same decentralized botnets we talked about just now work by using swarm learning and AI.
>
> **[3:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/decentralized-botnets-for-decentralized-dos-attacks?u=76281980&t=190)** I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), protected (1), continue (1), switch (1)
> **Cross-References:** in the next (3), previous video (1), we talked about (1)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Swarm learning with decentralized AI botnets
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=0)** - [Presenter] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=1)** I hope you're enjoying this chapter and how we've been building up on future cyber threats.
>
> **[0:06](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=6)** In this video, let's take things up a notch and talk about how swarm learning is used in decentralized botnets that are powered by AI or LLMs for attacks.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=16)** So we already know what decentralized botnets are and what they can do, but now let's specifically talk about botnets where each bot or node is an LLM-powered agent and they use something called a swarm learning to coordinate with each other.
>
> **[0:29](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=29)** This is the final evolution of this technology and the most dangerous form.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=33)** Swarm learning is a decentralized machine learning approach where AI agents within the botnet share insights and learn collectively in real time, much like a swarm of insects adapting to their environment.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=44)** So we have briefly touched upon real-time adaptation, and these specific botnets are especially good at this due to swarm learning.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=51)** Basically, each node in the botnet continuously learns from its interactions with the target and other nodes, adapting its tactics to optimize the attack.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=59)** This could include changing attack vectors, evading detection, or finding new vulnerabilities.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=65)** The other thing I want to cover is something called as collective or hive intelligence.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=69)** Swarm learning allows the botnet to operate as a collective intelligence where each nodes learning benefits the entire network.
>
> **[1:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=76)** This makes the botnet highly efficient and capable of executing complex, coordinated tasks.
>
> **[1:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=82)** Now, the most dangerous thing about these botnets is that these botnets can simultaneously launch different types of attacks from various nodes, overwhelming the target with a multi-pronged assault.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=92)** By continuously analyzing the target's behavior and defenses, the botnet can identify the most vulnerable points and focus its efforts there, increasing the likelihood of a successful breach.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=103)** Moreover, if a node is compromised or removed, the botnet can automatically recruit new devices, expanding its network and maintaining its strength, making them extremely resilient.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=113)** These advanced botnets could target critical infrastructure, financial systems, or large enterprises, causing widespread disruption and financial loss.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=121)** Decentralized AI botnets can easily be weaponized by state actors or cyber criminal organizations to conduct large scale, coordinated cyber attacks with devastating effects.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=130)** The adaptive nature of decentralized AI botnets makes them hard to detect.
>
> **[2:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=135)** Traditional security measures that rely on known attack signatures or behaviors are often ineffective.
>
> **[2:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=140)** To counter these threats, cybersecurity professionals must explore new defensive strategies including AI-driven countermeasures, decentralized security frameworks, and collaborative defense initiatives.
>
> **[2:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=151)** All right, enough of cyber threats.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=153)** In the next video, let's discuss how this cutting-edge technology can be used to defend against these threats.
>
> **[2:38](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=158)** Essentially, defenders need to implement real-time AI-driven security solutions to keep up with botnets learning and adaptation speed.
>
> **[2:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=165)** Static defenses are unlikely to be sufficient.
>
> **[2:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=167)** I hope you're as excited as I am to learn how this works.
>
> **[2:50](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/swarm-learning-with-decentralized-ai-botnets?u=76281980&t=170)** I'll see you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (1)
> **CLI Commands:** node (3)
> **Cross-References:** in the next (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** llm (1)
> **Speakers:** - [presenter] (1)

#### Predictive security with LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=1)** In this video, let's talk about how LLMs can be used by security professionals to stay one step ahead of hackers using the same technology.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=9)** Proactive threat detection and prediction.
>
> **[0:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=12)** The best thing here is that LLMs can consume and process huge amounts of data of different formats, and this means LLMs can analyze vast amounts of data from networks, systems, and user behavior to predict potential threats before they can materialize.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=25)** By identifying patterns and anomalies, LLMs can forecast potential attack vectors and prepare defenses in advance.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=31)** Automated threat assessment.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=33)** LLMs can assess the risk level of detected anomalies or potential threats by analyzing historical data, current system states, and known attack patterns.
>
> **[0:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=42)** This helps prioritize responses based on the severity and likelihood of an attack.
>
> **[0:46](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=46)** LLMs can provide contextual insights into detected threats by correlating data from various sources.
>
> **[0:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=51)** This includes understanding the nature of the threat, the systems it might impact, and the potential consequences.
>
> **[0:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=56)** Enhanced incident response.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=58)** LLM powered agents can execute predefined response playbooks automatically when a threat is detected.
>
> **[1:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=64)** This includes isolating compromised systems, blocking malicious traffic, or triggering backups to prevent data loss.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=70)** Using AI and swarm learning principles, defensive agents can adapt their response strategies in real time based on the evolving nature of the attack, similar to how decentralized botnets adapt during an attack.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=80)** LLMs can rapidly triage security incidents by analyzing logs, correlating events, and identifying the root cause of the breach.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=87)** This speeds up the incident response process and reduces the impact of the attack.
>
> **[1:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=91)** Defense against AI driven attacks.
>
> **[1:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=93)** Security professionals can use LLMs to train AI models against potential adversarial attacks.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=99)** This involves simulating various attack scenarios using LLM powered agents to harden defenses.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=104)** Just as attackers use swarm learning for adaptive attacks, defenders can use similar techniques to create a network of AI agents that work together to detect, block, and mitigate attacks across different systems and networks.
>
> **[1:56](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=116)** Continuous learning and adaptation.
>
> **[1:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=118)** LLMs can continuously learn from new threats, adapting security measures and policies in real time.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=123)** This helps maintain up-to-date defenses against the latest attack techniques.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=127)** Enhanced monitoring and anomaly detection.
>
> **[2:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=129)** LLMs can analyze user and system behavior to detect anomalies that might indicate a breach, or an insider threat.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=137)** By understanding what constitutes normal behavior, LLMs can flag deviations that warrant further investigation.
>
> **[2:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=142)** Collaborative defense networks.
>
> **[2:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=144)** By connecting with other AI powered defense systems, LLMs can coordinate defense strategies across different organizations or regions, making it harder for attackers to succeed.
>
> **[2:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=153)** All right, so by now we have a good idea about the type of attacks in the future and also possible defenses for those attacks.
>
> **[2:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/predictive-security-with-llms?u=76281980&t=161)** We are nearing the end of our course, and in the next video, I want to share some important resources with you that will help you stay up to date with the latest developments in this field and help you go above and beyond this course now that you have a good foundation.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Resources to take your learning further
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=0)** - [Narrator] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=1)** Let's talk about some great resources that will help you in the future to help you stay updated with LLMs.
>
> **[0:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=7)** To start with, I highly recommend navigating around Hugging Face, trying out the different LLMs, checking the leaderboard often for any new developments, and just by doing this, you'll know of the data developments in terms of models released, data sets, et cetera.
>
> **[0:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=19)** You can also look at the accompanying GitHub projects and also search for GitHub projects that use LLMs.
>
> **[0:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=25)** There are curated deposit depositories like Awesome LLM, which have a list of important projects and papers divided into categories.
>
> **[0:31](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=31)** The other important thing is to read research papers.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=34)** I highly recommend going through [arXiv.org](https://arXiv.org), it's spelled as [A-R-X-I-V.org](https://A-R-X-I-V.org), at least once a day, and reading a paper that you really like.
>
> **[0:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=43)** The category you want to open is either the artificial intelligence one or the cybersecurity one.
>
> **[0:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=49)** A hack that I usually share with senior engineers that I mentor is to subscribe to newsletters.
>
> **[0:54](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=54)** Just find a list of great newsletters for cybersecurity and AI and just subscribe to them.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=58)** The writers of those newsletters spend a lot of time in collecting information and updates, and you just get them directly into your inbox.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=65)** This is a great productivity hack, and if you're too busy to read research papers or search GitHub and Hugging Face, subscribing to newsletters is something you can still pull off quite easily.
>
> **[1:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=74)** I would recommend checking out Medium, Hashnode, and Dev.to, as you will find detailed articles published by experts.
>
> **[1:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=80)** I use Feedly to curate updates from the top list of blogs in the industries I care about, like LLMs, cybersecurity, cloud, and blockchain.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=87)** And I get a nice reading list pulled from the top blogs and websites directly into my Feedly app.
>
> **[1:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=92)** Twitter, Reddit, and Quora is the holy trinity for all engineers, and I encourage all engineers to spend a considerable amount of time there.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/resources-to-take-your-learning-further?u=76281980&t=99)** Okay, so now that we know some good resources to take our learning further, in the next video, let's discuss some other methods to stay up-to-date in this fast evolving industry.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Tools:** github (3)
> **CLI Commands:** find (2)
> **URLs:** [arxiv.org](https://arxiv.org) (1), [a-r-x-i-v.org](https://a-r-x-i-v.org) (1)
> **Code Identifiers:** arxiv (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Keep up with the ever-changing dynamic tech landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=1)** We now know about some good resources to keep learning about cyber security, but there are some more activities that you can do to stay on top of your game, and that's what I want to list here.
>
> **[0:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=10)** Firstly, it's important to remember to keep building things.
>
> **[0:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=13)** Doesn't matter if it's a company project, a freelance project, a side hustle, a college project or something you're building just to learn new things, the idea is to keep building.
>
> **[0:22](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=22)** Take up a challenge about the thing that you want to build, and then work your way backwards.
>
> **[0:26](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=26)** Plan it on a board, break down the project into really small tasks and action items, and feel free to collaborate with other engineers on the project.
>
> **[0:33](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=33)** If you're unable to think of ideas, then contribute to existing projects on GitHub.
>
> **[0:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=37)** We'll get to learn a lot on how others organize their projects and tasks.
>
> **[0:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=41)** To stay connected with the right people I usually spend a lot of time on Discord.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=45)** Join the communities that you care about and then participate in those communities.
>
> **[0:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=48)** There are other great platforms like Telegram and Slack for communities as well, but I've noticed that Discord communities are really the best when it comes to building large collaborative efforts where people can congregate, learn, and network.
>
> **[1:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=60)** I'm partial towards Discord, and this is why I highly recommend joining a few communities, participating, making friends by DMing them and joining community calls and even volunteering to help manage the community.
>
> **[1:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=70)** Conferences and meetups are something else that I'll highly recommend you to try out.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=75)** This helps you connect with the right people in person, and that just builds long-term relationships.
>
> **[1:19](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=79)** And not only that, all the events that you attend in person, you're able to recall that information shared in those conferences much more easily, and it stays with you.
>
> **[1:27](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=87)** I personally attend as many meetups as humanly possible, as that exposes me to different opinions and new technologies, and you end up discovering things that you wouldn't have discovered on your own.
>
> **[1:36](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=96)** Finally, I recommend you to always continue learning.
>
> **[1:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=99)** It could be with books or other courses, or just YouTube, it doesn't matter.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=103)** Just never stop.
>
> **[1:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=105)** This is a compounding activity that gives exponential results. So you just have to learn one percent more each day consistently, and you'll see great outcomes.
>
> **[1:52](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=112)** So if there's just one thing you take away from this video, it is to keep learning.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=115)** And you can even go beyond by sharing all that you learn on a blog.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=119)** Alright, so this is the end of the last chapter of our course, but it's not the end of the course.
>
> **[2:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=123)** In the last two videos, we will summarize the course and also list our key learnings.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/keep-up-with-the-ever-changing-dynamic-tech-landscape?u=76281980&t=127)** So see you in the next one.

> [!info]- Semantic Content
>
> **Tools:** discord (3), github (1), slack (1)
> **Code Keywords:** finally, (1), continue (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Summarizing the course
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=1)** We have been on a long journey together, and finally, we are at the end of the course.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=5)** Now, before we say goodbye, let's quickly summarize all that we've covered in the course.
>
> **[0:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=9)** Just like we commit code to our repository, similarly, the summarization process will help us commit all that we have learned to our memory.
>
> **[0:16](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=16)** So we started off by learning about LLMs and all the important concepts that make LLMs so effective, such as the transformer architecture and attention.
>
> **[0:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=24)** Then we learned how to work with LLMs more efficiently by learning about quantization and parameter offloading.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=30)** Then we learned about how to make our LLMs more accurate, and that's where we learned about fine-tuning.
>
> **[0:35](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=35)** Since finding great datasets for fine-tuning can be a challenge sometimes, we learned about how we can generate data synthetically.
>
> **[0:41](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=41)** Then we learned about closed-source LLMs and open-source LLMs.
>
> **[0:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=44)** We first learned about Google Colab and the benefits of working inside Colab.
>
> **[0:47](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=47)** Then we saw some hands-on examples, like we learned how we can import LLMs into Colab, how we can generate synthetic data, and how we can fine-tune a model.
>
> **[0:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=55)** This laid the foundation for the projects we built in the next videos.
>
> **[0:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=59)** We first built our smart contract auditing project, where we trained an LLM to detect vulnerabilities in Solana smart contracts.
>
> **[1:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=65)** Then we learned about LLM agents and how they can help in taking the capabilities of LLMs to the next level by equipping them with special tools.
>
> **[1:12](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=72)** Then we built an OSINT system using LLM agents.
>
> **[1:15](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=75)** Then we built a web vulnerability scanning solution using LLM agents.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=78)** And then we finally built our LLM-powered firewall.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=81)** All of these are real-world projects that have great applications.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=84)** Then we learned about all the future threats that will evolve in the future and that we will have to be ready for, such as AI-powered agents capable of hacking decentralized botnets that can coordinate large-scale, decentralized denial-of-service attacks and botnets that are adaptive in real-time as they use swarm learning to learn about the network inefficiencies.
>
> **[1:43](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=103)** We finished that by learning how security professionals can use LLM technology to help defend against such attacks.
>
> **[1:48](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=108)** Finally, we learned about some resources we can use to stay updated with the industry and continue our learning.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=113)** So it was a long journey.
>
> **[1:55](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=115)** Now that we have gone over the complete summary of the course, we have committed all that we have learned to our memory.
>
> **[1:59](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=119)** The next video is the last video of this course, and we'll just go over a few key learnings and takeaways.
>
> **[2:04](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/summarizing-the-course?u=76281980&t=124)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), osint (1)
> **Code Keywords:** finally, (2), let (1), for, (1), continue (1)
> **Cross-References:** in the next (2), next video (1)
> **Tools:** colab (3)
> **Analogies:** such as (2), just like (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Key learnings, best practices, and parting statements
> [LinkedIn Learning](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=0)** - [Instruction] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=1)** This is the last video in this course.
>
> **[0:03](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=3)** I'm so proud of you for finishing this course.
>
> **[0:05](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=5)** Even though things got really difficult in the middle of the course, you stayed with this and finished, and this requires serious discipline, and you're one of the very rare people that see things through to the end.
>
> **[0:14](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=14)** To reward this behavior, I'll also go the extra mile for you.
>
> **[0:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=18)** All you have to do is send me a connection request on LinkedIn with a message that you finished my LLM Cybersecurity course till the end, and I'll personally send you more resources, materials, and ways to stay way ahead of your peers in this field.
>
> **[0:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=28)** That's my promise to you.
>
> **[0:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=30)** Now, I want to share a few key learnings and takeaways that I want you to remember from this course.
>
> **[0:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=34)** Using LMS with any existing cybersecurity tooling or solution can make it better and more effective.
>
> **[0:39](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=39)** LLMs on their own can't do much, so we need agents that have special tools to enable LLMs to do the tasks for us.
>
> **[0:45](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=45)** LLM solutions are going to be the future of cybersecurity, just like they're going to be the future of every industry henceforth, and the reason for that is the unprecedented ability of LMS to consume tons of information and process it just like a human being would.
>
> **[0:58](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=58)** Collaborative agent workflows remove the need for building your own hardcoded backend systems and logic engines, because they can take real time decisions and enable you to build an adaptive system rather than a hardcoded system.
>
> **[1:09](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=69)** Some takeaways for learning better are consistency is key.
>
> **[1:13](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=73)** Keep reading research papers, blogs, and all the other resources that I mentioned in the previous videos.
>
> **[1:18](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=78)** What is important is to do little but to do it every day.
>
> **[1:21](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=81)** Great things happen at the intersection of different technologies.
>
> **[1:24](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=84)** For example, today's course was at the intersection of AI and cybersecurity.
>
> **[1:28](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=88)** We built a project in this course that was at the intersection of blockchain cybersecurity and AI, and this was the Sorana Smart Contract auditing project.
>
> **[1:34](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=94)** This means if you're interested in multiple fields in technology, that's great.
>
> **[1:37](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=97)** You just need to try and find such intersections, and that's where a lot of innovation happens.
>
> **[1:42](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=102)** I have some parting statements for you.
>
> **[1:44](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=104)** I would like to encourage you to enroll in more courses like this one and also watch YouTube videos.
>
> **[1:49](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=109)** The reason is that this is a great hack.
>
> **[1:51](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=111)** Now, I spent months researching these topics.
>
> **[1:53](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=113)** I spent weeks building the projects that we just covered and days writing the scripts for this course to explain to you all the concepts in the best possible way.
>
> **[2:01](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=121)** Now, you were able to consume all of that in just a few hours, and that's the beauty of courses like these.
>
> **[2:07](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=127)** They're the biggest learning hacks because you're getting a lot of leverage.
>
> **[2:10](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=130)** You're benefiting from the decade of tech experience that I have, and you're benefiting from months of work that's gone into the course, all in just a few hours.
>
> **[2:17](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=137)** You can apply the same concept and learn anything.
>
> **[2:20](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=140)** All right, now with the end of this video, we have officially reached the end of the course.
>
> **[2:25](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=145)** I'd like to thank you again for making it this far and completing the course, and I look forward to your message on LinkedIn.
>
> **[2:30](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=150)** Do share your certificate on LinkedIn and tag me.
>
> **[2:32](https://www.linkedin.com/learning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-and-llm-agents/key-learnings-best-practices-and-parting-statements?u=76281980&t=152)** Thank you so much and I'll see you in another course in the future.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), lms (2)
> **Analogies:** just like (2), for example (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instruction] (1)


## Instructor

- [[Akhil Sharma]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/fine-tuning-llms-for-cybersecurity-mistral-llama-autotrain-autogen-3893128)

## Skills Covered

- LLaMA
- Threat & Vulnerability Management
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- AI for Cybersecurity

## Path Context

### In [[Leverage AI as a Cybersecurity Analyst]]
← [[XAI and Interpretability in Cybersecurity]] | **6 of 7** | [[RAG for Cybersecurity- Use Cases and Implementation]] →

## Appears In

- [[Leverage AI as a Cybersecurity Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), LLaMA
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[LLMOps in Practice- A Deep Dive]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)