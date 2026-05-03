---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: generative-ai-vs-traditional-ai
url: "https://www.linkedin.com/learning/generative-ai-vs-traditional-ai"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 5/16/2025
learners: 2608329
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Traditional AI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF-8-MuR5p61g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697645643991?e=2147483647&amp;v=beta&amp;t=OT8hT8JSKHThPglPz60eIQl_FmHi6HGdUN5hvVRoSrI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Understanding Generative AI for Tech Leaders]]'
  - '[[Building Generative AI Skills for Web Developers]]'
  - '[[Building Generative AI Skills for Developers]]'
prev_courses:
  - '[[What Is Generative AI-]]'
  - '[[What Is Generative AI-]]'
  - null
next_courses:
  - '[[Generative AI- Introduction to Large Language Models]]'
  - '[[Prompt Engineering- How to Talk to the AIs]]'
  - '[[Introduction to Large Language Models]]'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":2,"total":22,"prev":"What Is Generative AI-","next":"Generative AI- Introduction to Large Language Models"},{"path":"Building Generative AI Skills for Web Developers","position":2,"total":10,"prev":"What Is Generative AI-","next":"Prompt Engineering- How to Talk to the AIs"},{"path":"Building Generative AI Skills for Developers","position":1,"total":7,"prev":null,"next":"Introduction to Large Language Models"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - topic/software-development
  - topic/web-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/traditional-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Generative%20AI%20vs.%20Traditional%20AI.md)

![Generative AI vs. Traditional AI](https://media.licdn.com/dms/image/v2/D4E0DAQF-8-MuR5p61g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1697645643991?e=2147483647&amp;v=beta&amp;t=OT8hT8JSKHThPglPz60eIQl_FmHi6HGdUN5hvVRoSrI)

# Generative AI vs. Traditional AI

> Generative AI is a hot topic that's filled with a host of new legal, ethical, and technology issues. Generative AI's development may seem sudden, but it’s still built upon decades of concepts and practices from traditional predictive AI. In this course Doug Rose looks at the differences between traditional and generative AI. Traditional concepts like supervised and unsupervised deep learning netwo

> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai) | 1h 17m | Intermediate | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Explore generative AI vs. traditional AI](#explore-generative-ai-vs-traditional-ai)
- [**1. Predictive AI Architecture**](#1-predictive-ai-architecture) (4 videos)
  - [Machine learning](#machine-learning)
  - [Supervised and unsupervised learning](#supervised-and-unsupervised-learning)
  - [Artificial neural networks](#artificial-neural-networks)
  - [Data models](#data-models)
- [**2. Generative AI Models**](#2-generative-ai-models) (5 videos)
  - [Foundation models](#foundation-models)
  - [Large language models (LLMs)](#large-language-models-llms)
  - [Small language models (SLMs)](#small-language-models-slms)
  - [Image diffusion models](#image-diffusion-models)
  - [Generative pre-trained transformer (GPT)](#generative-pre-trained-transformer-gpt)
- [**3. Generative AI Architecture**](#3-generative-ai-architecture) (5 videos)
  - [Prompt engineering](#prompt-engineering)
  - [Generative adversarial networks (GANs)](#generative-adversarial-networks-gans)
  - [Self-supervised learning](#self-supervised-learning)
  - [Variational autoencoder (VAE)](#variational-autoencoder-vae)
  - [Building a generative AI system](#building-a-generative-ai-system)
- [**4. Improving Generative AI**](#4-improving-generative-ai) (4 videos)
  - [Inferencing](#inferencing)
  - [Filling gaps](#filling-gaps)
  - [Agents](#agents)
  - [Context windows](#context-windows)
- [**5. Generative AI Legal and Ethical Issues**](#5-generative-ai-legal-and-ethical-issues) (5 videos)
  - [Traceable decision-making](#traceable-decision-making)
  - [Hallucination liability](#hallucination-liability)
  - [Copyright training](#copyright-training)
  - [Mass data collection and privacy](#mass-data-collection-and-privacy)
  - [The expertise death spiral](#the-expertise-death-spiral)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps for AI](#next-steps-for-ai)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore generative AI vs. traditional AI](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=0)** - As humans, we tend to learn new things by comparing them with what we already know.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=4)** A lion's like a big cat or a smartphone is like a small computer.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=9)** [[Generative AI]] builds on practices from [[Predictive AI]] that's been around for decades, so this course will give you an overview of predictive AI and see how generative AI builds on these ideas and takes a big leap forward.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=23)** You'll see newer concepts such as self-[[Supervised Learning]], foundation models, [[Large Language Models (LLM)|large language models]], diffusion models, and auto-encoding.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=32)** Plus, you'll see how these newer generative systems create a whole host of new technology, ethical, and legal challenges.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/explore-generative-ai-vs-traditional-ai-25810008?u=76281980&t=39)** If you forget the AI past, it's difficult to understand the AI present, so let's look at both while we learn about generative [[Artificial Intelligence (AI)|artificial intelligence]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Predictive AI]] (2), [[Supervised Learning]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** cat (1)
> **Analogies:** such as (1)
> **Speakers:** - as (1)


### 1. Predictive AI Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Machine learning](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=0)** - It's tempting to think of [[Artificial Intelligence (AI)|artificial intelligence]] as one big thing.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=4)** It's AI, when a music service makes a recommendation.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=8)** It's AI, when your business software helps file your taxes.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=12)** It's AI, when a digital assistant answers your question.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=16)** It makes it seem like there's one big AI that solves all your problems.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=22)** But AI is just a set of tools.
>
> **[0:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=24)** That means that when there's a popular problem, a helpful tool will rise to solve that problem.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=29)** Think of it this way: when I'm working with large files, I like to carry around an external hard drive, but I also have a subscription to [[Microsoft]]'s [[Microsoft OneDrive|OneDrive]].
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=39)** OneDrive allows me to store my files in a shared cloud drive.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=43)** So it might seem strange to have two different tools to solve this challenge, but each tool rose to deal with the problem differently.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=52)** An external hard drive gives you local, high-speed access.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=56)** A cloud drive gives you global access, but at a slower speed.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=61)** AI tools work the same way.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=63)** Even though these tools might seem similar, each of them will rise to solve a specific problem.
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=70)** For the past few decades, businesses have struggled with getting value from massive amounts of customer data.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=76)** So [[Predictive AI]] tools rose to meet the challenge.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=81)** That's why you see rapid development in AI machine learning [[Algorithms]].
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=85)** These algorithms were optimized to help businesses analyze massive data sets.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=92)** Then you can make better predictions about your customer behavior.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=96)** Any AI initiative at your organization is likely a machine-learning artificial neural network that analyzes data.
>
> **[1:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=104)** But just like in high school, you shouldn't focus on popularity.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=108)** Instead, think about the problem that you're trying to solve.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=112)** Then look for the AI tool that's rising to solve that problem.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=116)** The most popular tools aren't necessarily the best.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=119)** They're just the ones that have risen to solve the most common challenges.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=123)** For most organizations, that'll still be about getting value from customer data.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/machine-learning-25805087?u=76281980&t=128)** But as new challenges rise up, you should expect new tools to rise to meet them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft OneDrive|Onedrive]] (2), [[Algorithms]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Microsoft]] (1), [[Predictive AI]] (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - it (1)

#### [Supervised and unsupervised learning](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=0)** - [Instructor] Imagine that your grandfather was a lifelong stamp collector.
>
> **[0:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=3)** He asked you to help him organize the stamps to donate them to a museum, so he handed over dozens of boxes filled with hundreds of thousands of post-it stamps.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=12)** Many of these stamps were in different languages and had different colors.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=16)** Some of them were used and others were still sealed in plastic.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=20)** The museum said that they needed to receive the stamps organized for their archive, so they sent you a small stamp bot to help you prepare them for the archive.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=29)** It arrived in a box with a post-it note that said, "Program Me."
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=34)** So you thought about it and you realized there were really two ways to program the bot.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=39)** You could tell it explicitly how to classify the stamps.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=43)** That meant that you'd have to come up with your own categories.
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=46)** Maybe you would categorize them by language, color, or date.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=50)** The other option was for you to just throw all the stamps on the floor and tell the bot to cluster them into whatever makes sense.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=58)** Then, you could just go down and watch TV and return in a few hours to see what the bot came up with.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=64)** Maybe it made little piles based on their color or the size of the stamps.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=69)** The first way to program the bot is called [[Supervised Learning]].
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=74)** This is when you have the AI system classify data based on how it's been trained.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=81)** The second way to program is called unsupervised learning.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=85)** This is when the AI system creates its own clusters based on what it sees in the data.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=92)** As you can imagine, each method has its own advantages.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=95)** Supervised learning is really the only option if you have classifications in mind.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=101)** So if you want to arrange the stamps based on the year, then you have to train the system on how to identify the date.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=108)** On the other hand, unsupervised learning can be a great option if you don't know very much about the data.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=113)** Then, the machine can cluster together patterns based on its own perceptions.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=118)** It also doesn't require any training, so you can just let the system run unsupervised as it goes through massive amounts of data.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=126)** It's important to know which of these methods make the most sense when using [[Predictive AI]].
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=132)** Each method will help you organize data differently.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/supervised-and-unsupervised-learning?u=76281980&t=135)** That will have a huge impact on how much value the data will have when making predictions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (2), [[Predictive AI]] (1)
> **Definitions:** is called (2)
> **Analogies:** imagine (2)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Artificial neural networks](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=0)** - [Instructor] In 2011 [[Google]] had a secretive project called the Google Brain.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=5)** It tied together 16,000 processors to look through 10 million digital images pulled from YouTube videos.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=12)** The Google Brain used something called an artificial neural network.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=16)** The network was inspired by the architecture of the human brain.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=20)** It passed information from one layer of artificial neurons to the next.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=25)** This design allowed it to look through patterns in massive data sets.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=30)** The data could be broken down into tiny components and were processed by tens of thousands, and then later millions of artificial neurons.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=40)** [[Artificial Neural Networks]] have been around for decades, but Google had access to tremendous amounts of data in computing, so they experimented with something called a [[Deep Learning]] artificial neural network.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=53)** These networks were much larger.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=55)** They were called deep because they created several more layers in the artificial neural network.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=61)** These networks created billions of connections between neurons.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=65)** These new deep learning networks could find patterns that were difficult for regular artificial neural networks.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=71)** Google used this deep learning network as a pattern recognition system.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=76)** They tested it to find patterns in these 10 million YouTube images.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=81)** The Google engineers used unsupervised learning.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=84)** Remember that that's a form of machine learning that allows the system to identify patterns that it sees in data sets.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=91)** The artificial neural network clustered together over 20,000 patterns that it identified in YouTube videos.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=99)** The engineers could easily recognize some of these patterns.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=103)** In the paper that they published in 2012, you could see the ghostly images of human faces.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=109)** They also posted the image of a cloud-like pattern that looked unmistakably like a cat.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=115)** Around the same time, [[Microsoft]] was using this technology to try and find patterns in human speech.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=121)** They were hoping to use artificial neural networks to develop [[Real-Time]] translation for meeting platforms such as [[Microsoft Teams]].
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=128)** In the years since, many organizations have found many uses for artificial neural networks.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=134)** Credit card companies use this deep learning to identify fraud in real time.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=138)** Retailers use deep learning to find patterns in how people purchase items at their store.
>
> **[2:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=144)** Each of these is based on the idea that if you can find patterns then you can do a better job predicting future behavior.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=151)** But deep learning also sparked the beginning of a completely new technology.
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=156)** These networks produced dream-like patterns of images that it found in videos.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=160)** These ghostly pictures of faces and cats were some of the earliest versions of generative [[Artificial Intelligence (AI)|artificial intelligence]].
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=168)** As a side effect of the process, the system produced or generated new images that it didn't find in the data.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/artificial-neural-networks?u=76281980&t=176)** Later you'll see how these early ghostly images became the lifelike images that you see from [[Generative AI]] systems that are used today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[Deep Learning]] (6), [[Artificial Neural Networks]] (4), [[Microsoft]] (1), [[Real-Time]] (1)
> **CLI Commands:** find (6), cat (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data models](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=0)** - When you're working with predictive [[Artificial Intelligence (AI)|artificial intelligence]], one term you might hear a lot is the machine learning model.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=7)** A model is an abstraction.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=9)** It's a way for the machine learning system to map known data to something new.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=14)** This might seem like a tricky concept but if you think about it, we use models all the time.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=20)** Sometimes when I travel, I'll rent a car.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=23)** Most of the time, I've never driven the car before but I don't have any difficulty driving the rental car.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=29)** That's because after years of experience I've created a model that helps me drive.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=34)** I have abstracted knowledge from my own car and applied it to unknown cars.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=40)** That doesn't mean that sometimes I don't run into trouble.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=43)** I might have difficulty turning on the lights or the windshield wipers but my prior knowledge of driving is useful.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=51)** That's why you'll often hear statisticians say, "All models are wrong, but some are useful."
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=57)** It means that whenever you create an abstraction there will always be some data loss but this loss is a small price to pay to have a generalized model about driving.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=69)** I might have some difficulty with an unknown car but I'm still better off than if I had never gotten behind the wheel.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=76)** Machine learning artificial intelligence systems use a similar approach when working with massive data sets.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=81)** These systems will create a model to work with similar data.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=85)** So think of it this way.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=87)** Imagine that you work for a credit card company and you're using machine learning to classify fraudulent transactions.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=94)** Let's just have it as a binary classification.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=97)** That means that each transaction has one of two options.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=100)** It's either safe or fraudulent.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=103)** Now, like my driving, you want the system to be able to recognize unknown transactions the same way that I could now drive an unknown car.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=113)** So you create a machine learning model by training the system on millions of previous transactions.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=119)** The system will then create a fraudulent transaction model.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=123)** Remember that all models are wrong.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=125)** That means that no matter how well the system runs there will always be the possibility that it makes a mistake but the model should get more accurate over time.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=134)** It's the same way that the more rental cars I drive the better I get at driving unknown cars.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=141)** One of the biggest challenges with most machine learning models is that they aren't very flexible.
>
> **[2:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=146)** I can't use my driving model to figure out how to fly a plane.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=150)** It's the same way with machine learning models.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=153)** Most models can't be used for entirely new tasks.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=157)** That means I won't be able to use my credit card fraud model to help the bank decide who gets a loan.
>
> **[2:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=163)** This limitation hasn't been a huge challenge for predictive artificial intelligence.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=168)** Organizations just build different [[Neural Networks]] for different tasks.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/data-models?u=76281980&t=172)** But as you'll see later, it became a significant challenge for any artificial intelligence system that needs to create or generate new data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Neural Networks]] (1)
> **Definitions:** means that (3), is an  (1), is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - when (1)


### 2. Generative AI Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundation models](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=0)** - You've seen that over a decade ago, [[Google]] Brain used unsupervised learning to search YouTube videos for recognizable patterns.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=8)** It found over 20,000 patterns, everything from faces to computers.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=13)** Then the engineers labeled that data so it could output the patterns as an image.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=18)** The results were dreamlike images of humans and cat faces.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=23)** Now, over a decade later, engineers can use a similar technology to generate new images.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=29)** This [[Artificial Intelligence (AI)|artificial intelligence]] isn't just engineer-defined patterns or predict behavior.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=35)** Instead, this new field of AI is about being creative.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=39)** This new field is called Generative Artificial Intelligence or [[Generative AI|Gen AI]].
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=45)** It's about training systems to take existing data and [[Remix]] it into something completely new.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=51)** Remember that one of the big challenges with predictive artificial intelligence is that you must train a specific model.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=59)** This model is usually designed for this one task.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=62)** So I might have a model to drive a car because I've trained myself on the car I own, but I won't be able to use my car driving model to fly a plane or pilot a boat.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=75)** And yet, if we're asking our AI systems to be creative, the generative artificial intelligence models must do just that.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=83)** These Gen AI systems need to be able to create massive models that can apply to many different scenarios.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=90)** In 2021, a computer science team at Stanford University predicted these new models would become the dominant machine learning model.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=100)** They called these Foundation Models.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=102)** Instead of creating predictive task-specific models, these new models would be trained on broad data and can be adapted to a wide range of downstream tasks.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=115)** These models are even more computer and data-intensive than what you've seen with prediction models.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=122)** So think about it this way.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=124)** Imagine instead of training myself how to drive a car, I decided to train myself with a foundation model on all modes of transportation.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=133)** This would be much more data-intensive.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=135)** I would consume huge amounts of data about acceleration, momentum, electricity, and gravity.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=143)** Then I would learn specifics about each mode of transportation.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=147)** I'd learn how to fly a plane, pilot a boat, and drive a train.
>
> **[2:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=152)** Once I created this transportation foundation model, I can then tweak it to quickly learn something new.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=160)** That means I could quickly learn how to fly a helicopter by relying on this model.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=166)** This technology is more powerful, but it still uses similar ideas as the Google Brain from over a decade ago.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=173)** These systems will look for patterns in massive datasets, and then cluster together what it finds to create a generalized foundation model.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=181)** These new foundation models can do things that those early engineers would've never attempted.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=187)** Now you can have a [[Generative AI]] system that can create an entirely new image from patterns it discovers.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=193)** So you could ask the system to generate an image of a human sitting on a chair with a cat in their lap.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/foundation-models-25807058?u=76281980&t=200)** These new foundation models are one of the reasons that generative AI systems have been so successful in creating new data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (4), [[Google]] (2), [[Generative AI]] (2), [[Remix]] (1)
> **CLI Commands:** cat (2)
> **Definitions:** is called (1)
> **Analogies:** imagine (1)
> **Speakers:** - you (1)

#### [Large language models (LLMs)](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=0)** - [Instructor] One of the foundation models that's gotten a lot of attention is [[Large Language Models (LLM)|Large Language Models]], or LLMs.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=7)** These are the models that are used by services like [[ChatGPT]] and OpenAI.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=12)** You can use LLMs to ask interesting questions and even [[Jetpack Compose|compose]] new books and articles.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=18)** You could also see the power of foundation models.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=21)** That's because you can ask a service like ChatGPT to create something completely new and creative.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=28)** You can ask it to write a sonnet about a peanut butter and jelly sandwich or compose an article about an obscure topic.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=35)** There's no predictive machine learning model that could train a system to come up with all these different possibilities.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=42)** These systems have become so impressive that it really seems that human-level artificial general intelligence is just a few years away.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=51)** But it's important to keep in mind that there's a big difference between actual intelligence and what seems intelligent.
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=60)** Large language model expert Professor Emily Bender has used a bunch of different examples to explain LLMs.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=67)** One of the most popular is called the stochastic parrot.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=71)** So think of it this way.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=72)** Imagine that everyone in the world is forced to have a parrot on their shoulder.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=76)** It would almost look like the world is filled with Disney pirates.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=80)** But these weren't any kind of parrot.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=82)** These parrots had psychic connections to every other parrot on the planet.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=88)** That means that this parrot network could simultaneously listen to every conversation in the world.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=94)** So even though these parrots are impressive, they're still just parrots.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=98)** They don't understand English, Spanish, Swahili, Hindu, or any other language.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=103)** They just sit on everyone's shoulder and listen.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=107)** After doing this for a few years, the parrot network would amass a huge amount of data on conversations.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=114)** In fact, it would have so much data that it would be able to predict what people would say.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=119)** So you could ask the parrot on your shoulder about how it feels that day.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=122)** And after listening into billions of conversations in hundreds of different languages, the parrot would come up with the most popular response.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=131)** It would say some version of, "I feel fine. How do you feel today?"
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=136)** Now, it's important to remember that the parrot isn't really telling you that it feels fine.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=141)** The parrot itself might be hot or thirsty or hungry, but it knows that statistically that's the most common response.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=150)** You're not really having a conversation with the parrot.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=153)** It's just parroting back a sequence of words that has the highest [[Probability]].
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=159)** Since LLMs are still foundation models, this parrot network would still have a tremendous amount of flexibility.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=166)** It could write sonnets because it had eavesdropped on thousands of sonnet readings.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=172)** Then it could blend its output with some of the most popular characteristics of peanut butter and jelly sandwiches.
>
> **[2:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=178)** The end result would be something entirely new.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/large-language-models-llms?u=76281980&t=181)** The output might seem extraordinary, yet just like a peanut butter and jelly sandwich, the true magic comes from just two ingredients, data and probability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Jetpack Compose|Compose]] (2), [[Probability]] (2), [[Large Language Models (LLM)|Large language models]] (1)
> **Definitions:** is called (1), means that (1)
> **Analogies:** imagine (1), just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Small language models (SLMs)](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=0)** - At the beginning of the 20th century, there were ads for a whole home electronic engines.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=5)** It was a giant electronic device that would plug into an outlet in the center of your house.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=10)** [[Electronics]] companies boasted you could plug in any appliance.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=14)** It could be your blender, meat grinder, laundry machine, sewing machine, or hand mixer.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=19)** Over 100 years ago, everyone assumed that this was the way people would electrify their homes.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=26)** There would be one big electric engine, and you'd use that for all your appliances.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=31)** If you go into kitchens today, you'll see that this isn't how things turned out.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=35)** Houses have many smaller appliances like blenders, mixers, and coffee grinders.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=41)** Then upstairs, you'll have washing machines and dryers.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=45)** Instead of one big engine, you'd have dozens of smaller appliances with their own smaller electric engines.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=53)** Fast forward today and many people assume the same thing.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=57)** You've just seen that some of the biggest companies are developing [[Large Language Models (LLM)|large language models]].
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=62)** These models need to run on powerful servers.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=65)** Many of these companies assume that there's going to be one large language model that you'll use for everything.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=71)** You'll use the same LLM engine for your medical questions or to request the latest recipes, but that may not be how things turn out.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=81)** Instead, you might have small language models designed for smaller tasks.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=87)** Small language models are a shrunken down version of a large language model that's specialized for a specific task.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=96)** Imagine that you wanted to create a cooking appliance that could create meals from food it finds in your kitchen.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=102)** You might be able to connect this appliance to a large language model.
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=106)** That large language model would know everything about cooking, but also everything about history, memo writing, and poetry.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=114)** In many ways, it would be way more powerful than what you need for this simple task.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=119)** You may not need that one big engine.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=123)** Instead, a cooking appliance could use its own small language model.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=128)** It would be a distilled version of a large language model.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=132)** This model would prune out all the things that it didn't need to know.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=136)** It doesn't need to know Greek history to make moussaka.
>
> **[2:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=140)** This small language model can't answer emails or write poems, but has the same cooking knowledge as a larger model.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=148)** So why would you want to use a small language model when you could always use a large language model?
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=154)** Well, the reasoning behind it is very similar to why you don't have a 20th-century-style electric engine.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=160)** A purpose-built blender will always be better equipped to make your smoothie.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=166)** It's simpler and easier to maintain than a large engine in the center of your house.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=172)** It's the same with small language models.
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=174)** A cooking-focused small language model will be faster and more efficient than a large general knowledge model.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=181)** That means you could embed this small language model into an oven or a cooking device.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=187)** You wouldn't have to have a powerful server to benefit from the model's intelligence.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=191)** Perhaps in the future, large language models will be as much of a historical oddity as a whole home electronic engine.
>
> **[3:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=199)** You can embed small language models into smartphones, appliances, or any other device that you use every day.
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/small-language-models-slms?u=76281980&t=206)** Instead of having one central [[Artificial Intelligence (AI)|artificial intelligence]] device, you'll have many smaller intelligent devices that you use for specific tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[Electronics]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** llm (1)
> **Analogies:** imagine (1)
> **Speakers:** - at (1)

#### [Image diffusion models](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=0)** - [Instructor] Imagine that you've just baked a dozen chocolate chip cookies.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=4)** You took them out of the oven, and the smell of chocolate and toasted flour fills the air.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=10)** You baked these cookies and decided to use them as a foundation to make other cookies in the future.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=16)** So how would you do it?
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=18)** One way you could do it is by creating an artificial neural network that could process millions of different chocolate chip cookies.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=25)** But if you did that, you'd run into a problem.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=28)** By the time you're working with the data, the chocolate chip cookies are already baked.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=33)** So you would need a way to unbake each of these cookies back into their ingredients.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=39)** That means that the neural network would have to destroy every cookie and then recreate it.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=44)** A dozen cookies would be unbaked back into the exact measurements of flour, sugar, water, butter and chocolate chips.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=53)** Then rebaked into the original cookie.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=57)** Now, this might sound strange, but it's very similar to how [[Generative AI]] systems create images.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=64)** These systems use something called a diffusion model.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=68)** This is a foundation model that takes millions of images and then destroys them until their a pixelated blur.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=75)** Then the diffusion model takes that blur and unblurs them until it gets back to the original image.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=82)** But why would you want these [[Artificial Neural Networks]] to go through this terrible process of blurring and unblurring images that it finds on the internet?
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=91)** Well, because you run into the same problem that you run into with your baked cookies.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=96)** The images that these systems find online are already complete.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=100)** So if you want to generate a new image, the system needs to fully understand all the ingredients that went into the existing images.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=109)** If you want to create a cookie foundation model, that means that you have to train the system by unbaking millions of different chocolate chip cookies.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=118)** Once the system unbaked all the ingredients that went into a chocolate chip cookie, it could then retask itself to create a new cookie, maybe something like an oatmeal cookie.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=129)** That's because this foundation model knows that an oatmeal cookie starts with flour, sugar, water, and butter, just like a chocolate chip cookie.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=138)** So it's not as difficult to make variations.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=141)** It's the same way with images.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=143)** A generative AI system could look at millions of images of people sitting in a chair.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=148)** It could also look at millions of images of cats.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=151)** Then it would use its diffusion model to create a foundation model of each of these images.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=157)** It would blur them and recreate them to understand the patterns.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=161)** Then it could generate a new image of someone sitting in a chair with a cat on their lap.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=167)** Unbaking and rebaking these images through diffusion gives these [[Neural Networks]] a very robust understanding of what it takes to generate new images.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=177)** In fact, this act of destruction and recreation is now the most popular way for companies to generate new images.
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/image-diffusion-models?u=76281980&t=184)** You'll see it used by the top services, like OpenAI's DALL·E 2, [[Midjourney]], and even open-source packages like [[Stable Diffusion]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Artificial Neural Networks]] (1), [[Neural Networks]] (1), [[Midjourney]] (1), [[Stable Diffusion]] (1)
> **CLI Commands:** make (2), find (1), cat (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** imagine (1), similar to (1), just like (1)
> **Env Vars:** dall (1)
> **Speakers:** - [instructor] (1)

#### [Generative pre-trained transformer (GPT)](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=0)** - [Instructor] Why don't scientists trust atoms?
>
> **[0:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=3)** Because they make up everything.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=6)** Now, that's a bad joke written by [[ChatGPT]].
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=9)** The GPT stands for Generative Pre-trained Transformer.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=13)** GPT is a large language model.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=16)** Remember that a large language model is like a network of parrots that sits on everyone's shoulder.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=21)** They listen when everyone's talking and then parrot back what they hear.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=25)** These are foundation models.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=28)** They have an enormous amount of flexibility and can be applied to many different tasks.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=34)** In fact, you can use GPT to summarize books, write articles, develop software, and even write bad jokes.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=42)** But how did this generative [[Artificial Intelligence (AI)|artificial intelligence]] system come up with this joke?
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=47)** The key is in the name.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=49)** Generative makes sense because it's generating new content.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=53)** Then the model is pre-trained.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=55)** Remember that [[Artificial Neural Networks]] can do both supervised and unsupervised learning.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=61)** Typically, you train your model with [[Supervised Learning]].
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=65)** Remember that here, computer scientists will train the system to classify data into categories.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=72)** So a credit card company can divide charges into fraud or not fraud.
>
> **[1:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=78)** The pre-training in GPT means that the parents listen in on enormous amounts of conversations.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=85)** Then the system reads books, articles, and webpages.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=88)** It uses unsupervised learning to cluster together words that are commonly grouped together.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=94)** Then it uses supervised learning to come up with a [[Probability]] score on how the words are related.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=100)** So that means when the system sees the words why did the chicken cross, it will use supervised learning to predict the next [[Microsoft Word|word]] as the, and the one after it as road.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=113)** GPT predicts these words one at a time.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=116)** The final part of GPT is transformer.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=120)** Transformers transform one group of words into something different.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=125)** It does this with an encoder and decoder that alters the words based on what the system thinks should get the greatest attention.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=135)** So think about this sentence.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=136)** Why do the chicken cross the road?
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=139)** The words that should get the most attention in this sentence are chicken, cross, and road.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=145)** This transformer allows the system to prioritize high-attention words while predicting the next word in the sentence.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=153)** It might seem strange that words and probabilities can make a system that can come up with jokes.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=159)** But you must remember that these systems are looking at terabytes of text and then creating hundreds of billions of relationships between words.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=168)** These parrots have pretty much heard any joke that's ever been told, so it knows the common themes are scientists, bartenders, and chickens.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=175)** By paying closer attention to these details, the model can forecast the likelihood of every word until it finds a structure that aligns with other jokes.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=186)** The more data and feedback these systems get, the better GPT will be at creating new text.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=192)** That's why each version of GPT sounds more impressive.
>
> **[3:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-pre-trained-transformer-gpt?u=76281980&t=195)** Each person who interacts with the system is just more information to improve the next joke.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (3), [[Microsoft Word|Word]] (3), [[ChatGPT]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Artificial Neural Networks]] (1)
> **Env Vars:** gpt (8)
> **Definitions:** stands for (1), is a  (1), means that (1)
> **CLI Commands:** make (2)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### 3. Generative AI Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Prompt engineering](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=0)** - [Instructor] One of the challenges with new [[Predictive AI]] systems is there actually can be some overlap between [[Generative AI]] systems and predictive AI.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=10)** So think of it this way.
>
> **[0:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=11)** Imagine that you're a product manager for a large credit card company.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=15)** This credit card company has already created a predictive AI system to identify fraudulent transactions.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=22)** That means that the credit card company uses an artificial neural network that's been trained using labeled data.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=29)** Remember that this is when the system uses [[Supervised Learning]].
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=33)** So the computer scientists train the system on labeled fraudulent data.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=38)** Then the artificial neural network classifies each transaction as either fraudulent or safe.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=45)** Now, the credit card company wants to use generative AI to do the same thing.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=50)** To do this, you'll want to create a foundation model.
>
> **[0:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=54)** This model will use unsupervised learning to look through terabytes of [[Unstructured Data]].
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=60)** This new model will analyze various data such as credit scores, financial history, salary information, housing price stability in your area and other relevant information, in addition to billions of credit card transactions.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=75)** So in a sense, you'll be pre-training this model to already look through patterns in this [[Financial Data]].
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=82)** Remember, that's how [[ChatGPT]] was pre-trained on terabytes of text.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=86)** That way it's already found billions of different patterns.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=90)** This foundation model will be far more flexible than the predictive artificial neural network.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=96)** But this new flexibility comes with an enormous appetite for data.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=101)** Plus, it also takes a lot more computing power to create a usable foundation model from all this data.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=110)** Once you have a usable foundation model, you might be able to do a few things.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=114)** You could do something called [[Prompt Engineering]].
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=117)** This is when someone writes specialized prompts that gets the results you want from the model.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=122)** In this case, the prompt might be as simple as is this a fraudulent transaction?
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=127)** The computer scientists might also re-task this foundation model to classify transactions the same way as the predictive model.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=136)** You could use a small amount of the same labeled data that you use for the predictive model to re-task this foundation model to look for fraud.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=145)** In fact, that's one of the big benefits of creating a foundation model.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=149)** The model can be customized to deduct fraud, suggest loans and promote credit card offers, among other things that credit card companies might find helpful.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=158)** You don't have to create a new predictive artificial neural network system trained on labeled data for each of these tasks.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=166)** As a product manager, you want to gather as much data as possible and find ways to increase the availability of computing resources.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=175)** If you can create a usable foundation model, then this new system could be the core of your AI systems.
>
> **[3:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/prompt-engineering?u=76281980&t=182)** It should be able to do many new tasks, and even accomplish traditional tasks such as classifications that were often just left to the earlier predictive systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive AI]] (3), [[Generative AI]] (2), [[Supervised Learning]] (1), [[Unstructured Data]] (1), [[Financial Data]] (1)
> **Analogies:** such as (2), imagine (1)
> **CLI Commands:** find (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Generative adversarial networks (GANs)](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=0)** - [Narrator] One term you might hear around generative [[Artificial Intelligence (AI)|artificial intelligence]] is the term [[Generative Adversarial Networks (GANs)|generative adversarial networks]], or GAN.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=7)** When you first hear this, you might assume that all [[Generative AI|gen AI]] is created on GANs, but that isn't true.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=14)** Generative adversarial networks appeared around 2014.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=18)** At that time, they were used for creating photorealistic images of fake people.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=23)** In a way, it was a progression from the cats and other items that were discovered by the [[Google]] Brain project.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=30)** These gen AI systems were unusual in a bunch of different ways.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=34)** First, instead of creating one big model, the network was divided into two submodels.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=40)** These two submodels were adversarial.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=43)** That means that they competed against each other to improve the quality of the output.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=47)** Second, the network divided these submodels into two areas of responsibility.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=52)** One of them was called the generator.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=55)** This used unsupervised learning to generate an image.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=58)** The other submodel was called the discriminator.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=61)** This also used unsupervised learning with a little bit of supervision to evaluate the generated content.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=69)** These adversarial networks were based a little bit on the relationships that computer scientists saw in biology.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=76)** So think of it this way.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=77)** If you live in North America, before sunset, you might see bats come out to feast on insects.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=83)** One of their favorite insect prey is moths.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=87)** Bats use a form of echolocation to grab moths out of the air.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=92)** So a few of the moths started making a clicking sound to make it difficult for them to be located.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=99)** Then the bats started to evolve larger ears so they could find these clicking moths.
>
> **[1:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=104)** Then the moths started to develop new hearing within the range of the bats' echolocation frequencies.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=110)** So then the bats started to change the frequency that they used for their echolocation.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=116)** The moths and the bats had an adversarial evolutionary relationship.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=121)** The bats needed to eat and the moths didn't want to be eaten so they changed their anatomy and behavior to win this zero sum game.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=132)** A generative adversarial network works the same way.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=135)** The generator will create an image.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=138)** It could be fake or it could be real.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=141)** Then the discriminator makes a guess about whether the image is real.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=145)** If the generator fools the discriminator, then the discriminator must change its model so that it's not fooled again.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=153)** This is the same way that bats and moths try to fool each other to eat or not be eaten.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=159)** If the discriminator guesses correctly, then the generator must update its model so it can generate better fake images.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=167)** This battle will go on and on until the generator is generating content that the discriminator can't identify as real or fake.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=176)** That's how you get those photorealistic images of fake people.
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=179)** The discriminator couldn't tell the difference and chances are you can't either.
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=184)** But even with all this talent for creating photorealistic images, most of the AI image generating services aren't using GANs.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=193)** That's because most people don't ask for a photorealistic image of a human face.
>
> **[3:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=199)** Instead, they'll ask for something like a mouse wearing a cowboy hat.
>
> **[3:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/generative-adversarial-networks-gans?u=76281980&t=203)** As you've seen earlier, these types of images are usually best created by something like a diffusion model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Google]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** gan (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Self-supervised learning](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=0)** - Earlier you saw that you could use machine learning to do a form of supervised or unsupervised learning.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=6)** Remember that you were using machine learning to try and classify your stamps or cluster them based on similar traits.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=14)** Then you saw with [[Generative Adversarial Networks (GANs)|generative adversarial networks]], or GANs, you could mix and match these two techniques.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=20)** Remember that you could use a little bit of [[Supervised Learning]] to train the discriminator on how to make an educated guess.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=27)** Now, newer [[Generative AI]] systems take this a step further.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=32)** The main challenge is that there's a lot more unlabeled data in the world, so even though there might be millions of of images of cats online, only a small percentage of them are labeled with the [[Microsoft Word|word]] cat.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=47)** And remember that supervised machine learning systems need to be trained with labeled data.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=53)** Imagine if you could use unsupervised learning to label all that unlabeled data.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=59)** This is what you call self-supervised learning.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=63)** So think about if you wanted to use unsupervised learning to label something like a Wikipedia page.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=69)** You could use unsupervised learning to pull out a lot of the data and create labels.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=75)** That means the system could create a label for the founder, the CEO, the revenue, or the year it started.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=81)** It could then do that for millions of other pages.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=85)** That means that when you ask a generative AI system a question, it will pull from this data.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=91)** So if you ask [[ChatGPT]] about [[Microsoft]], it would start out by saying the company was founded in 1975 by Bill Gates and Paul Allen.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=102)** It's important to keep in mind that no human created labels for this data.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=107)** It used unsupervised learning to create labels that would then be used in a supervised learning system.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=114)** Now, self-supervised systems are used for more than just text.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=118)** That's how image generators can extrapolate and build new generative AI artwork.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=123)** The famous Mona Lisa painting has been transformed using a generative AI system to speculate how Leonardo da Vinci could have continued it if he had had more canvas.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=135)** These self-supervised systems need to understand how a river will flow or what kind of jars would be put on kitchen shelves.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=143)** These labels help these systems understand how objects would exist in the real world.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=149)** It's also how these generative AI systems can put purple hats on yellow dogs.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=154)** The system needs to have labels to understand what a purple hat looks like.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=159)** Then it needs to have a label for a yellow dog.
>
> **[2:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/self-supervised-learning-25809028?u=76281980&t=162)** No human could go through all the objects in the world and label all that data, so self-supervised learning can step in and make all these connections possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (5), [[Supervised Learning]] (4), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Microsoft Word|Word]] (1), [[ChatGPT]] (1)
> **CLI Commands:** make (2), cat (1)
> **Env Vars:** ceo (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - earlier (1)

#### [Variational autoencoder (VAE)](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=0)** - [Instructor] Generative [[Artificial Intelligence (AI)|artificial intelligence]] is about generating new content.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=5)** This means that you can take a picture, like this image of a cat, and then use it to generate new versions of a similar but not the same image of other cats.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=16)** So think about what it takes for the system to do this.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=19)** You and I might look at a picture of a cat and instantly recognize it.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=23)** That'll be true even if it's a breed or a color that we've never seen before.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=28)** Even if I show you one of those cats without hair that looks a little like Yoda, you'd still recognize it as a cat.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=36)** How does your brain do this?
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=38)** It's because, on some level, you understand the essence of what a cat is.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=44)** That means for [[Generative AI]] systems, they must have a similar understanding of this cat's essence.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=51)** One of the best ways generative AI systems do this is by something called autoencoding.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=57)** This is an unsupervised learning technique, which breaks down data by using an encoder and a decoder.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=65)** So you could take this image of a cat and encode it into a cat code.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=71)** In a sense, this will be your cat's essence.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=74)** You can almost imagine it like a one-line pencil sketch of a cat.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=79)** This is called feature extraction.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=82)** This essence or sketch would be the code.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=86)** Then your decoder would look at this code and extrapolate out the original cat.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=92)** Ideally, it should look very similar to your original.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=96)** Now, one of the biggest challenges with autoencoding is extracting the features and putting it into a latent space.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=105)** That means that you want to extract the cat's essence from the image and put it in a space where it could be decoded or changed.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=114)** If you look at a picture of a cat, it's really just a cat sitting in front of a white background with no other objects.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=120)** So the autoencoder needs to be able to discard the anomalies.
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=125)** This could be a red ball, a grassy field, or even an owner's lap.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=130)** All that needs to be discarded so that you can extract the features and encode the cat's essence.
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=137)** This separation from the cat and everything else is called anomaly detection.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=143)** If you think about it, this makes a lot of sense.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=145)** If you want to generate new images with a cat, then you're not going to want to have random noise in the background, like a few blades of grass or a red ball.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=153)** To generate a cat sitting on a chair, you only need the pure cat identified by the autoencoder.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=160)** One of the most popular generative AI autoencoders is called the variational autoencoder, or VAE.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=169)** This autoencoder uses [[Probability]] to try and determine where the cat is in latent space.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=176)** Now, this isn't space like where the cat is located in the image.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=180)** It's more about compressing the cat's essence based on probability.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=185)** So you could remove information that you don't need, like the color of the fur or the cat's size.
>
> **[3:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/variational-autoencoder-vae?u=76281980&t=190)** It's about finding the most important cat features to extract and encode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Probability]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** cat (23)
> **Definitions:** is called (3), means that (2), is an  (1)
> **Analogies:** picture (3), imagine (1), similar to (1)
> **Env Vars:** vae (1)
> **Speakers:** - [instructor] (1)

#### [Building a generative AI system](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=0)** - [Instructor] Up until now, you've seen a lot of differences between [[Generative AI]] systems and more traditional [[Predictive AI]] systems.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=8)** Then you saw how you could use unsupervised machine learning to develop a newer self-supervised foundation model for generative AI systems.
>
> **[0:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=17)** These foundation models could be used for many different things.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=20)** There are [[Large Language Models (LLM)|large language models]] for text, and diffusion models, [[Generative Adversarial Networks (GANs)|generative adversarial networks]] and autoencoders that you could use for images.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=29)** But up until this point, you've mostly seen how other companies develop these systems.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=34)** You've seen how OpenAI uses large language models and a form of pre-training to create [[ChatGPT]].
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=41)** Then you've also seen how they use diffusion models to create [[DALL-E]] 2 for image generation.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=48)** Companies like [[Microsoft]] also use large language models and pre-training to help [[GitHub]] developers write software.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=56)** But what about your company?
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=58)** Chances are your organization is still in the middle of developing [[Traditional AI]] [[Microsoft Products|products]].
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=63)** You've likely used [[Supervised Learning]] to analyze customer data to better predict their behavior.
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=70)** Yet one thing that these companies have shown is that this technology can move fast.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=75)** So what can your organization do to start preparing for its own generative AI system?
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=81)** To start your generative AI system, you should think about the different components that you'll need to create a useful foundation model.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=89)** In general, there are three major components.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=92)** There's the data, the architecture, and the training.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=97)** In fact, you've already seen that architecture and training are closely related.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=103)** You're going to train a large language model different from a diffusion model.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=108)** The data component is going to be the ground floor of your foundation model.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=112)** This model is going to use a form of unsupervised learning.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=116)** It's going to pull data from many different resources so it'll be important for your organization to ensure the quality of this data.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=123)** If you just pull data from all the dark corners of the internet, then your model will suffer for it.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=130)** Plus, even though foundation models are designed to be flexible, you can still carefully manage its diet of data.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=138)** So if you're a medical company, you may want to make sure that at least half of the data that your model consumes comes from trusted medical sources.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=147)** The second big component is the architecture.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=150)** Here, you're most likely going to want to pick the foundation model that you'd like to use for your system.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=157)** If it's going to be a chat system, then you might want to use a large language model.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=161)** If it's going to manipulate images, then you'll likely want to use a diffusion model.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=167)** The last big component is the training.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=170)** You've already seen that these unsupervised systems often need a little bit of supervised learning to keep them aligned with your organization's needs.
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=179)** If you're a medical company, then you're going to want to put a lot of effort in making sure that your system is giving accurate data.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=186)** If you're an image company, then you're going to want to decide if your model should prioritize compositions or just single images.
>
> **[3:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/building-a-generative-ai-system?u=76281980&t=194)** As you build your generative AI system, you'll see that even though these systems are more flexible, there's still a lot that goes into building them correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (5), [[Large Language Models (LLM)|Large language models]] (3), [[Supervised Learning]] (2), [[Predictive AI]] (1), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** dall (1)
> **Tools:** github (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Improving Generative AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Inferencing](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=0)** - My grandmother used to say that words should be weighed and not counted.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=4)** It must be why that part of the family was so quiet.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=8)** But even in the age of AI, sometimes [[Large Language Models (LLM)|large language models]] should think before they speak.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=14)** Once the foundation model is trained, there's still a lot that goes into getting that training into action.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=20)** When you work with a large language model, the system is basically going through two steps.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=25)** You've already seen that you need to train these systems using self-[[Supervised Learning]].
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=30)** At the end, you should have a massive foundation model.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=33)** This foundation model contains everything the system has learned.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=37)** Once that model exists, you need to put that knowledge into practice.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=42)** When you ask the system a question, it needs to infer the answer from the data.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=48)** In [[Generative AI]], large language models, this is called inferencing.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=53)** As humans, we make inferences all the time.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=56)** If you know how to make scrambled eggs, then it's easier to make an omelet.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=61)** If you know how to say cat in French and Spanish, then it's easier to learn how to say it in Italian.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=67)** The generative AI system learns while building its model and uses that knowledge to answer questions.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=74)** Now, sometimes that inferencing can be wrong.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=77)** It might give you a terrible recipe for an omelet, or the system might give you really bad advice.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=83)** This isn't necessarily a bad thing.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=85)** The system's just trying to quickly apply what it's learned to something new.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=90)** A system will always not know something, so there will always be a possibility of being wrong.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=97)** One key thing to keep in mind is that inferencing is one of the most computationally intensive aspects of generative AI.
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=106)** It might cost hundreds of millions of dollars to build a foundation model, but once the model's trained, it doesn't really cost anything to store it on your servers.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=116)** It's like an expensive aircraft carrier that has high construction costs, but low docking expenses.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=123)** But once you put that aircraft carrier into service, then it takes even more money, then fuel and people to maintain.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=132)** The large language model uses knowledge from its foundation model, which is much more expensive to apply than it was to create the model.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=142)** This high cost is balanced against the user's need to get more accurate information.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=148)** That's why many systems are starting to do something called inference-time compute, just like my grandmother said, it's trying to weigh its words more closely by taking more time.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=160)** Then by giving that extra time, the system is giving much more accurate results.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=166)** Unfortunately, the cost of carefully weighing your words has significantly increased the need for computing power.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=173)** If these systems just say the first thing that comes to their mind, then it's cheaper to compute, but unfortunately, more likely to be wrong.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=181)** It's now estimated that over 90% of the cost of running these systems will be spent on inferencing.
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=188)** The system spends most of its time thinking about how to take what it's learned and then put it into action.
>
> **[3:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=195)** So when these systems are more deliberative, they're in danger of having the cost of their computing go way up.
>
> **[3:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/inferencing?u=76281980&t=201)** Even my grandmother might have weighed her words if she saw the high electric bill from all that processing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Large Language Models (LLM)|Large language models]] (2), [[Supervised Learning]] (1)
> **CLI Commands:** make (3), cat (1)
> **Analogies:** it's like (1), just like (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - my (1)

#### [Filling gaps](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=0)** - The singer Johnny Cash used to say that everyone needs to know their limitations.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=5)** As powerful as [[Generative AI]] [[Large Language Models (LLM)|large language models]] have become, they still have their own limitations.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=12)** If you ask an LLM something that's very current, then it's likely that the foundation model will not have trained on the data.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=20)** So it's limited on what it knows, and it needs to do a lot of guessing or inferencing.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=26)** It makes guesses about some things based on the data that it already has.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=33)** Organizations using their own large language models need access to internal data.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=38)** Medical LLMs will need to know about your area of specialization.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=43)** Sales LLMs will need to know more about your product.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=48)** When I was a teenager delivering pizzas, there was someone there who had delivered for years.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=53)** One of the tricks he told me is that occasionally, he would take one slice from the pizza and then push the [[Representational State Transfer (REST)|rest]] of the slices together.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=61)** That way, it looked like it had a whole pie.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=64)** In many ways, this is what the large language model is doing when it ends up with a gap in its foundation model.
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=70)** It gathers up new data and it tries to better understand your request, so it can push together the data into a whole pie.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=79)** There are many new ways to deal with these missing data slices.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=83)** Two of the most popular are augmented generation techniques and LLM [[Fine Tuning]].
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=90)** The two most common augmentation techniques are retrieval augmentation, and cache augmentation.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=98)** Retrieval augmentation or Rag, is really a three-part process.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=103)** The model retrieves new data, augments the prompt for accuracy, and then generates a response.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=110)** Cache augmentation, or CAG creates a smaller data set within the LLM that acts as its knowledge cache.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=120)** It won't retrieve the data, instead, it'll just be a smaller database embedded into the larger large language model.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=129)** Retrieval augmentation generation retrieves the data from your own company dataset.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=136)** This might be more up-to-date news or proprietary information.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=141)** Cache augmentation essentially is a compressed database of everything that your organization knows.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=147)** Then, it's embedded into the large language model, so they can use that for knowledge cache in real time.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=155)** Fine tuning a large language model is ideal for retraining it with new data.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=160)** This might make sense when your knowledge cache is just too big to embed into a large language model.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=166)** It makes sense to integrate your organizational knowledge into the language model.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=172)** So if you're working for something like a news organization, then retrieval augmentation might make the most sense.
>
> **[2:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=178)** Here you have a smaller data set that's constantly being updated, so you might want your LLM to be able to retrieve the latest information.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=187)** If you're something like an automotive manufacturer, then cache augmented generation might make the most sense.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=193)** Here, you're only coming up with new models once every year, so you could create a smaller knowledge cache and then plug that directly into your organization's LLM.
>
> **[3:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=203)** Large Language model fine tuning is best for massive data sets with unique ideas and language.
>
> **[3:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=210)** If you're a state government with unique language and regulations, it makes sense for you to customize your LLM with this data.
>
> **[3:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=218)** That way, the ideas are integrated into the very core of the model.
>
> **[3:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/filling-gaps?u=76281980&t=222)** If you know your model's limitations, then you can use many different techniques to fill in the gap of information so that the people never notice that missing slice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (3), [[Large Language Models (LLM)|Large language models]] (2), [[Generative AI]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** llm (6), cag (1)
> **CLI Commands:** make (3)
> **Cross-References:** coming up (1)
> **Definitions:** essentially is (1)
> **Speakers:** - the (1)

#### [Agents](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=0)** - If you've ever watched the HBO Television series "Entourage," you might remember the agent Ari Gold.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=6)** His job is to always be looking for opportunities to help his superstar client.
>
> **[0:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=11)** He investigates the best opportunities and goes back to his client and then says what he found.
>
> **[0:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=17)** Then he gets feedback and goes back out again, fighting on his behalf.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=22)** It makes you think about what everyone could get done if they all had their own Ari Gold.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=28)** That's essentially the idea behind [[AI Agents]] or what's often called Agentic AI.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=35)** Here, instead of the system waiting for their prompts, it will work off of a much shorter goal.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=41)** Then the agent will go off on its own and try to accomplish that goal.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=45)** AI agents might not make you a movie star, but they can assist you with questions, job searches, and business research.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=53)** A typical chat with an LLM might be about you coming up with a prompt and then reading through the system's response.
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=60)** Then you'd come up with another prompt based on what the system says.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=64)** It's a real time two-way conversation.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=67)** An AI agent will get an overall goal or task and then go out and try to accomplish that task.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=74)** It'll come back to you once it's reasonably certain that it's achieved its goal.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=79)** It's not a two-way conversation.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=81)** It's more like a mission directive.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=84)** This also fits neatly into the retrieval augmented and cache augmented generative systems that you saw earlier.
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=93)** These new technologies along with LLM [[Fine Tuning]] will allow different systems to have consistently updated data.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=101)** If you think about it, that makes a lot of sense.
>
> **[1:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=104)** If you had one AI system that knew everything, then you wouldn't need an agent to do research.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=110)** It would all just be there in this one powerful system.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=114)** As of today, that's not where things are, and it's not where things are going.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=119)** Instead, there will be several small and large LLMs that know different things and have access to different organizational data.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=128)** Plus, LLMs will be able to do their own direct research.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=132)** They could search the web or even analyze PDFs or research papers.
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=137)** Let's say that you wanted to use an AI agent to help you decide whether to move to a new city.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=142)** There are many different things that you need to consider.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=145)** What would your salary requirements be in your new city?
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=148)** What organizations provide moving assistance?
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=150)** How much vacation time do you have left in your job?
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=153)** How likely is it that the city will grow?
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=156)** How do you balance a bigger place for family visits with a smaller, more convenient location?
>
> **[2:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=162)** You want your AI system to be as deliberative as you are rather than making quick decisions.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=168)** It's also a challenge when you're not going to have access to all that data at once.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=172)** It's possible that you could answer some of these questions with one of the [[Large Language Models (LLM)|large language models]], but some of it is locked in your organizational data, like your salary requirements, vacation time, and organizational benefits.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=186)** Plus, only some state owned LLMs will have access to city demographic change.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=192)** You're not going to get access to all of that data instantaneously, and some of the questions might lead to more questions.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/agents?u=76281980&t=200)** The agent needs to be smart enough to review the answers until it gathers enough information to fulfill its goal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (2), [[Fine Tuning]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** llm (2), hbo (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Speakers:** - if (1)

#### [Context windows](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=0)** - When I was younger, I lived down the street from someone who was great at everything you wanted to be great at in high school.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=6)** She was a great student, had many friends, and was the lead actress in the school theater.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=12)** While at the same time, I led the Computer Enthusiast Social Club, while also trying to start a Science Fiction Fan Club.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=18)** Despite our different interests, we were at the same schools for over a decade.
>
> **[0:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=24)** Yet the times I would bump into her would always start the same way.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=27)** I would reintroduce myself and remind her that we lived down the street.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=31)** Then I'd update her on the latest events at the Computer Enthusiast Social Club.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=37)** I felt like every time our conversation ended, everything we discussed faded from her memory.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=43)** Then I'd bump into her a week or a month or a year later.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=47)** I'd have to start by reintroducing myself.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=50)** In a sense, the context window for our conversation was very small.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=56)** We could never have a lengthy conversation because all of our previous conversations were instantly deleted from her memory.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=65)** In many ways, [[Large Language Models (LLM)|large language models]] suffer from a similar challenge.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=69)** These systems are not yet powerful enough to maintain the context for all your conversations.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=76)** So instead, they create a small window to hold your most recent exchanges.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=82)** That means that if you ask an LLM about the new Star Trek series, the longer you have the conversation, the less it remembers.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=91)** You can think of it like a window that moves through your conversation.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=95)** The more you talk, the less it remembers.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=98)** LLMs have gotten over this limitation by making guesses about those facts drop from their memory.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=105)** It's almost like having a conversation, then the LLM stops listening and starts nodding.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=111)** Then it tries to make up for this rudeness by making a guess about what you already talked about.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=117)** As you can imagine, this can lead to some awkward hallucinations.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=121)** When you start the session by asking a question, the system will provide an answer, but if you change the topic, it may forget your previous question.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=131)** But these limitations aren't just about being rude.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=134)** If you're trying to use an LLM to develop a software product, then you need it to remember each of the steps that you took to make improvements.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=141)** If the system starts to forget where you started, then it's increasingly difficult to develop a product.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=148)** Also, the more the system knows about you, the more helpful it'll be.
>
> **[2:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=152)** Think about any time that you've tried to work with anybody to solve a problem.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=157)** It would be frustrating to have to repeat everything that you discussed every time you saw that person again.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=164)** Now, the way that LLMs work is that every time you have a conversation, it creates a bunch of [[Tokens]] to hold onto that information.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=173)** These tokens can hold a [[Microsoft Word|word]], a letter, or even numbers.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=177)** They're what the system thinks is the bare minimum that it needs to recreate the conversation.
>
> **[3:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=183)** Current systems might be able to hold hundreds of thousands of tokens, but in the future, they're hoping to create systems that will record every token from every conversation you ever had.
>
> **[3:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/context-windows?u=76281980&t=195)** These systems will never forget any of your early conversations, so it'll be much more helpful with your latest requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** llm (3)
> **CLI Commands:** make (2)
> **Analogies:** think of it like (1), imagine (1)
> **Cross-References:** we discussed (1)
> **Definitions:** means that (1)
> **Speakers:** - when (1)


### 5. Generative AI Legal and Ethical Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Traceable decision-making](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=0)** - [Narrator] In 2023, OpenAI, IBM and academic representatives asked the US Congress to regulate [[Generative AI]].
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=9)** The ranking senator said it was the first time he could remember that businesses asked the government to regulate their industry.
>
> **[0:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=17)** For decades, the technology industry has followed a form of technological determinism.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=22)** That means that most of these technology companies decided that if something could be done, then it should be done.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=29)** But something about generative AI has changed this assumption.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=33)** In 2022, a survey of machine learning experts said about half of those surveyed thought that there was a 10% chance that their work would destroy humanity.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=45)** Business executives were much more pessimistic.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=48)** They thought that there was a 42% chance that these systems could destroy humanity in 5 to 10 years.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=56)** Now, your generative AI product can still be destructive without wiping out humanity.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=61)** In fact, one of the biggest challenges with your [[Generative AI|gen AI]] system might come from an executive decision to shut the system down.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=69)** In this case, it won't be about whether your gen AI system can be done.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=73)** It'll be about whether it should be done.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=76)** In many ways, ignoring the legal and ethical issues around your gen AI system will be just as dangerous as ignoring technical challenges.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=85)** You might put all of your effort into building the perfect system only to later have it unplugged.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=92)** [[Traditional AI]] has many legal and ethical issues.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=96)** But generative AI builds on these issues and adds a few more.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=101)** One of the top issues that you'll see in both types of AI is how transparent you are in letting your users know that you're using their systems.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=110)** Think of it this way.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=111)** Imagine that you're using a new generative AI system to help your admission administrators decide who you let into your university.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=119)** Using foundation models can help you analyze large amounts of data from thousands of students.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=126)** The first thing you want to do is make sure that your data doesn't have a very strong bias.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=131)** Remember that even foundation models are trained on huge amounts of data.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=135)** This data might reflect human bias.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=138)** There could be bias against certain racial minorities.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=141)** It could be bias against women or in the LGBTQ+ community.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=147)** If you use that data for college admission, you should thoroughly test the system to ensure it complies with your university's admission policies.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=154)** But that's only half of the [[Decision-Making]] equation.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=158)** You'll also want to let the students know that you're using a system to help evaluate their application.
>
> **[2:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=163)** That way, if the students feel like they're being harmed by the system, they have some way to appeal to a human admissions officer.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=170)** Try to be open with this technology.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=173)** Also, be open about how you use this technology.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/traceable-decision-making?u=76281980&t=176)** That way if there's a flaw in the system, you can work to improve it instead of having parents or administrators demand that it be unplugged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (5), [[Traditional AI]] (1), [[Decision-Making]] (1)
> **Env Vars:** ibm (1), lgbtq (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Hallucination liability](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=0)** - [Instructor] When [[Google]] introduced Bard, its large language model, it asked Bard about the James Webb telescope.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=7)** One of the answers said that the telescope took the very first pictures of an exoplanet outside our solar system.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=15)** It was a great answer, but unfortunately it wasn't true.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=18)** The very first image of an exoplanet outside our solar system was taken by the Very Large Telescope or VLT, about 20 years earlier.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=29)** After people realized the mistake, the company lost about a hundred billion dollars in value over the next few days.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=36)** But Google's LLM isn't the only one that makes mistakes.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=41)** When I asked [[ChatGPT]] about my wife, it said that she taught at a different university.
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=46)** If you ask it about female US presidents, it will confidently list out four that have served over the last 200 years.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=53)** It starts with Abigail Adams, who is the wife of [[John the Ripper|John]] Adams and the mother of John Quincy Adams.
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=60)** Computer scientists use the term hallucination to describe when [[Large Language Models (LLM)|large language models]] respond confidently with nonsense.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=69)** If you think about it, these hallucinations make a lot of sense.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=72)** Remember that large language models are foundation models that use unsupervised learning to look for patterns in massive amounts of text.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=81)** Then it uses a form of self [[Supervised Learning]], so it can attach labels to all this data.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=87)** That means that somewhere in the terabytes of text, there must have been a mention of the James Webb telescope and how it compares to the Very Large Telescope.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=97)** Then it labeled this exoplanet data so it was connected to the wrong telescope.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=103)** Plus, there'll be times when the large language model won't have a specific answer to the question.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=109)** Then it will just have to generalize an answer based on patterns it sees in the data.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=115)** It might not have very specific information of where my wife worked, but it had some information about where she went to graduate school.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=123)** Then it made an incorrect guess that it would be the same place.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=128)** Now, the wrong answer about telescopes or former US presidents isn't going to have a dramatic effect.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=134)** But if you want to use these systems at your organization, then you might have to think about some of your legal and ethical issues.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=141)** They'll have to think carefully about what are the consequences of giving out false data.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=147)** People might expect to see false information on a website like Reddit or Twitter, but newer LL chat bots can put fake facts in between real facts.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=157)** You really need to know the material well to see the error.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=161)** People don't generally ask questions of chat bots where there are already experts and have the answer.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=167)** So you have misinformation delivered to the people who are most likely to accept it as a fact.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=173)** So if you're working for an organization that wants to implement these systems, then you should make sure that the unsupervised data that the system uses is filled with factual data in your domain.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=185)** But even if your data is completely verified, there are going to be times when the LLM just makes the wrong guess.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=192)** That's why you should be very careful using these systems where your organization might be liable for the correct answer.
>
> **[3:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/hallucination-liability?u=76281980&t=199)** You certainly wouldn't want to use it in its current form for medical recommendations or even expert advice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[John the Ripper|John]] (2), [[Large Language Models (LLM)|Large language models]] (2), [[ChatGPT]] (1), [[Supervised Learning]] (1)
> **Env Vars:** llm (2), vlt (1)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Copyright training](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=0)** - [Instructor] Imagine that you're an illustrator that sells a lot of your work through a royalty free website.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=5)** You've worked this way for a decade, and now you have a catalog of thousands of illustrations.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=10)** Every time someone buys one of your illustrations, you get a percentage of that payment.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=16)** Now, the website that hosts your work has started using a [[Generative AI]] system.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=21)** They've used a diffusion model to train their generative AI system on millions of your and other illustrator's images.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=30)** So you decided to test the new generative AI system that the company was offering.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=34)** You wrote out the prompt, a futuristic illustration of an antique oven in the art deco style.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=42)** It instantly produced six images that looked very similar to the ones that you've illustrated.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=47)** It wasn't exact, but the colors were similar and it mimicked your style.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=53)** The website is offering the service for $20 a month with unlimited downloads.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=58)** Even though it was trained on your image, you don't get any percentage of the sales.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=64)** Now, this might sound strange, but it's happening to many professionals who produce content.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=68)** This includes writers, artists, and even software developers.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=73)** So this brings up a few legal and ethical questions.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=77)** The first legal question is whether this is considered fair use.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=81)** Fair use is an exception to [[Copyright Law]] in the United States.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=86)** It allows organizations to use and distribute work that would normally be protected by copyright.
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=93)** But typically, you can't use the fair use doctrine if it impacts the value of the copyrighted work.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=100)** That's why you can check out a book from the local library, you're not in violation of the book's copyright.
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=106)** The few copies that they loan out shouldn't have a significant impact on book sales.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=111)** Yet, these generative AI systems are different.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=114)** Why would a business spend 10 times more on a royalty free license when they can simply use a system to create a new work without any copyright protection?
>
> **[2:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=125)** Plus, these systems could be trained on data that makes it nearly impossible for the original artist to make a living creating work.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=134)** This isn't only a challenge for the artist, but it's also a challenge for the model that needs to update itself with fresh data.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=143)** OpenAI stated that they used copyrighted material for training their systems, but they claim their system qualifies as fair use.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=151)** But that statement hasn't been tested by the courts.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=155)** But even if the courts support the idea, then it still leaves an open question about whether it's ethical.
>
> **[2:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=162)** If you work for a website that promotes an artist's work, then is it ethical to use their work in a way that would make it nearly impossible for them to earn a living?
>
> **[2:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=171)** Do you have any ethical obligations to the artists that use your website to sell their work?
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=177)** Would you have any obligation to the writers who work for your newspaper or the software developers that help build your [[Microsoft Products|products]]?
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/copyright-training?u=76281980&t=184)** These are the types of ethical questions that you'll get when building these new generative AI systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (5), [[Copyright Law]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Mass data collection and privacy](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=0)** - [Instructor] The Law Professor Lawrence Lessig famously warned that computer code is law.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=5)** He said our liberty could be redefined by software and technology, that challenge becomes even more pronounced when code starts writing itself.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=16)** [[Generative AI]] systems should reflect our shared values.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=21)** You shouldn't think of these new systems like gravity, which pulls against our will, or laws that are etched in marble.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=28)** Instead, remember that each time we interact with these systems, we train it on our values.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=34)** That's why these systems can reflect and amplify everything good and bad about us.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=41)** This is very important with [[Privacy]] and generative AI systems.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=45)** Remember that these systems train themselves on massive amounts of [[Unstructured Data]], they can feast on the data that you and billions of others create.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=56)** Many of us carry around smartphones that can collect and share our movements, we use credit cards for almost all of our purchases.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=64)** Now we can use apps for interacting with most businesses and governments.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=68)** All this data can be collected and analyzed to create a very accurate avatar of who you are.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=76)** In most countries, you don't own that data.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=79)** It's frequently concentrated into a few large companies where it can be bought and sold or used to develop new [[Microsoft Products|products]].
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=86)** These generative AI systems represent enormous opportunities for companies to create customized products that can enrich their customers by better understanding their needs.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=97)** The challenge for organizations will be balancing the allure of knowing everything about your customer against knowing so much that it offends them.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=107)** There's a very good chance that the regulations will lag behind what's possible, so it'll be up to your organization to decide what to build.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=116)** There will be pressure to match your competitor's systems, but be careful of shortcuts that may invade your customer's privacy.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=124)** Your organization will face a lot of difficult decisions, so try to keep three things in mind.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=130)** The first thing to remember with these systems is that it's easier to build something into the system than to try and unbuild it later.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=139)** If you add new unstructured data to the system, removing that data will be extremely challenging if your customer feels that it violates their privacy.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=148)** Remember that foundation models look for patterns and massive amounts of unstructured data.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=154)** Once it finds these patterns, it's very difficult to pull apart the threads that it's created.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=161)** The second thing to remember is that there's a lot of what these systems do that is, in some sense, unknowable.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=168)** These systems work with data that is incomprehensible to humans, so there's no human that could go through as much data as these systems routinely use to come up with their models.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=180)** There's some efforts to make these models explainable, but it will probably just be a shadow of what the machine knows.
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=188)** The third is that these systems are reaching the point where they can evolve on their own, that means simple decisions made today could snowball into much larger rules for the system tomorrow.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=200)** Decisions that you make about data or the type of training that you use will have lasting implications for the system, so it's better to be conservative in how you increase the system's capability.
>
> **[3:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/mass-data-collection-and-privacy?u=76281980&t=211)** If it grows too quickly, then there's an increased chance it could grow in the wrong direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Privacy]] (3), [[Unstructured Data]] (3), [[Microsoft Products|Products]] (2)
> **CLI Commands:** make (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [The expertise death spiral](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=0)** - In 2016, the famous AI pioneer, Geoffrey Hinton said that schools should stop training radiologists.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=8)** He said that in just five years AI [[Algorithms]] would replace radiology as a profession.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=15)** But what really happened is much more complicated.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=18)** It's true that there are now over 200 AI algorithms that can read X-rays as well as a radiologist.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=26)** Yet there was a shortage of radiologists in 2022.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=31)** AI increased radiology jobs but many med schools stopped radiologists training.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=37)** Many radiologists started their careers before these AI tools existed.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=43)** So each year more radiologists are retiring than entering the field and taking with them decades of experience.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=51)** With [[Generative AI]] systems, this could lead to the homogenization of data in your foundation model.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=59)** In a sense, that model will just represent a point in time and then that knowledge will freeze.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=66)** So think of it this way.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=67)** Imagine that Geoffrey Hinton was right and that machines took over reading everybody's X-rays.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=73)** The system trained itself on the experience of decades of data from earlier radiologists.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=79)** So it contained the learning experience of all those radiologists up to that point.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=84)** But since medical schools stopped training new radiologists then who will continue to add knowledge to these systems.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=92)** Although computer systems continue to enhance the resolution of X-ray images, the radiology data on which that system relies may be decades old.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=102)** These systems can create a death spiral of expertise.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=105)** The system can train itself on data created by human experts, but then it goes on to replace future experts.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=112)** So there are no new experts to update the system.
>
> **[1:56](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=116)** Similar to the [[Generative AI|Gen AI]] artwork data challenge for illustrators, those systems learn from existing artists, but then those same systems go on to replace those artists.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=126)** So no future artists can continue to update the system.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=131)** What could happen is very similar to what happened with radiologists.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=135)** These new systems will boost productivity leading to higher demand.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=139)** Yet, there might be a shortage of experts to meet this increased demand.
>
> **[2:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=144)** That's why if you're using generative AI systems at your organization, you should be careful on how you put these systems into production.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=151)** Many organizations strive to increase productivity.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=154)** So if you have a system that can do the job of a dozen people, most companies will make the switch.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=160)** But if your organization just looks at short-term productivity, then you're sowing the seeds for reduced expertise of your own employees.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=169)** If you don't have any experts in your organization then your generative AI system will never improve.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=175)** They'll be stuck with the knowledge from earlier experts.
>
> **[2:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=178)** It's almost like you freeze the knowledge from your employees and time, and then just use that to make all your present and future decisions.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=186)** That means if new technology rises or new techniques emerge your organization will be unable to learn and grow.
>
> **[3:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=194)** For many organizations in the technology field that is almost certainly a recipe for trouble.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=200)** So instead, you should think about your experts as a treasured resource.
>
> **[3:24](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=204)** They should continue to work on their field even at a higher cost.
>
> **[3:28](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/the-expertise-death-spiral?u=76281980&t=208)** In the end, their knowledge will be the fuel that allows your generative AI systems to continue to grow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (4), [[Algorithms]] (2)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), similar to (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for AI](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=0)** - I hope you enjoyed comparing [[Traditional AI]] to newer [[Generative AI]] systems.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=5)** These new [[Generative AI|gen AI]] systems are impressive, but they're based on traditional AI concepts and technology that have existed for decades.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=14)** Now, even with that said, it's still an extraordinary step forward in [[Artificial Intelligence (AI)|artificial intelligence]] systems.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=20)** This big step means that there'll be significant new legal and ethical challenges.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=26)** Even in the last few years, we've seen systems that can fundamentally change the way people work.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=31)** The key thing to remember is that these systems rely on human expertise.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=37)** All great artists understand that reproducing artwork is one thing.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=41)** While generating fresh and captivating new ideas is a whole new realm.
>
> **[0:46](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=46)** These systems are still reflecting our own data back to us.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=51)** If you're still interested in this topic, [[Microsoft]] has a career essential certificate in generative AI.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=58)** Plus, there are many new courses that are being added to the library.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-vs-traditional-ai/next-steps-for-ai-25806074?u=76281980&t=62)** I hope you enjoyed this course and developed a greater appreciation for generative AI systems, as well as the rich history of human art and innovation that made these systems possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Traditional AI]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Microsoft]] (1)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** in the last (1)
> **Speakers:** - i (1)


## Instructor

- [[Doug Rose]]

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Traditional AI

## Path Context

### In [[Understanding Generative AI for Tech Leaders]]
← [[What Is Generative AI-]] | **2 of 22** | [[Generative AI- Introduction to Large Language Models]] →

### In [[Building Generative AI Skills for Web Developers]]
← [[What Is Generative AI-]] | **2 of 10** | [[Prompt Engineering- How to Talk to the AIs]] →

### In [[Building Generative AI Skills for Developers]]
**1 of 7** | [[Introduction to Large Language Models]] →

## Appears In

- [[Understanding Generative AI for Tech Leaders]]
- [[Building Generative AI Skills for Web Developers]]
- [[Building Generative AI Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)