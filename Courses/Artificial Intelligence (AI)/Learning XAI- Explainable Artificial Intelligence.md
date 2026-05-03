---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-xai-explainable-artificial-intelligence-25369961
url: "https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961"
duration_minutes: 159
duration: 2h 39m
level: Intermediate
updated: 4/11/2025
learners: 4066
skills:
  - Artificial Intelligence (AI)
  - AI Literacy
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-xai-explainable-artificial-intelligence-3918466"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGXHk4z7Dg7nQ/learning-public-crop_675_1200/B4EZWwX5fbHcAc-/0/1742420810047?e=2147483647&amp;v=beta&amp;t=jnrnnNV_gLf6_6XAJllJE252HBiholMiH0zmqaPwLz4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[Implementing a Data Strategy for Responsible AI]]'
next_courses:
  - '[[Responsible AI and Application Development]]'
path_nav: '[{"path":"Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning","position":3,"total":7,"prev":"Implementing a Data Strategy for Responsible AI","next":"Responsible AI and Application Development"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/ai-literacy
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Learning%20XAI-%20Explainable%20Artificial%20Intelligence.md)

![Learning XAI: Explainable Artificial Intelligence](https://media.licdn.com/dms/image/v2/D4E0DAQGXHk4z7Dg7nQ/learning-public-crop_675_1200/B4EZWwX5fbHcAc-/0/1742420810047?e=2147483647&amp;v=beta&amp;t=jnrnnNV_gLf6_6XAJllJE252HBiholMiH0zmqaPwLz4)

# Learning XAI: Explainable Artificial Intelligence

> This course focuses on the data-based and mathematical factors contributing to bias in generative AI. Join instructor Jazmia Henry as she explores how data curation, analytical techniques, and post-training constraints can mitigate harmful biases embedded in these models. Through real-world examples and case studies, the course aims to help you understand and apply strategies for creating fairer, 

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961) | 2h 39m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [XAI: the key to fair and transparent AI for all](#xai-the-key-to-fair-and-transparent-ai-for-all)
- [**1. Understanding the AI Landscape**](#1-understanding-the-ai-landscape) (3 videos)
  - [Bias in AI and its impact](#bias-in-ai-and-its-impact)
  - [How does generative AI work](#how-does-generative-ai-work)
  - [Challenges of bias mitigation](#challenges-of-bias-mitigation)
- [**2. Bias in GenAI**](#2-bias-in-genai) (3 videos)
  - [Bias in data: "Bad data in, bad data out"](#bias-in-data-bad-data-in-bad-data-out)
  - [Prompt engineering crash course](#prompt-engineering-crash-course)
  - [Bias in mathetmical assumptions](#bias-in-mathetmical-assumptions)
- [**3. Bias in Model Training**](#3-bias-in-model-training) (7 videos)
  - [Introduction to GenAI model training](#introduction-to-genai-model-training)
  - [Demographic parity and its applications](#demographic-parity-and-its-applications)
  - [Equal opportunity parity for evaluating fairness](#equal-opportunity-parity-for-evaluating-fairness)
  - [Equalized odds parity to compare subgroup performance](#equalized-odds-parity-to-compare-subgroup-performance)
  - [HELM](#helm)
  - [Red-teaming](#red-teaming)
  - [Exercise: Building an evaluation pipeline](#exercise-building-an-evaluation-pipeline)
- [**4. Counterfactuals in Bias Analysis**](#4-counterfactuals-in-bias-analysis) (5 videos)
  - [What is a counterfactual?](#what-is-a-counterfactual)
  - [Concept of counterfactuals and what-if scenarios](#concept-of-counterfactuals-and-what-if-scenarios)
  - [Applications of counterfactuals for transparency](#applications-of-counterfactuals-for-transparency)
  - [Counterfactual modeling for improved fairness](#counterfactual-modeling-for-improved-fairness)
  - [Exercise: TensorFlow counterfactual](#exercise-tensorflow-counterfactual)
- [**5. Data Sampling for Bias Reduction**](#5-data-sampling-for-bias-reduction) (7 videos)
  - [The power of sampling data](#the-power-of-sampling-data)
  - [Data validation and evaluation](#data-validation-and-evaluation)
  - [Overview of stratified sampling](#overview-of-stratified-sampling)
  - [Sampling based on demographics](#sampling-based-on-demographics)
  - [Random sampling within stratified groups](#random-sampling-within-stratified-groups)
  - [Testing model performance across diverse samples](#testing-model-performance-across-diverse-samples)
  - [Exercise: Design sampling criteria with RAI principles](#exercise-design-sampling-criteria-with-rai-principles)
- [**6. Post-Training Model Constraints**](#6-post-training-model-constraints) (4 videos)
  - [Introduction to model constraints to control bias](#introduction-to-model-constraints-to-control-bias)
  - [Power of flagging, pruning, and nudging](#power-of-flagging-pruning-and-nudging)
  - [Using human-in-the-loop tools](#using-human-in-the-loop-tools)
  - [Exercise: Model constraint pipeline](#exercise-model-constraint-pipeline)
- [**7. Case Study: Breakdown of a GenAI Story**](#7-case-study-breakdown-of-a-genai-story) (1 videos)
  - [Explore an example of GenAI output](#explore-an-example-of-genai-output)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your XAI learning journey](#continuing-your-xai-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [XAI: the key to fair and transparent AI for all](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/xai-the-key-to-fair-and-transparent-ai-for-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/xai-the-key-to-fair-and-transparent-ai-for-all?u=76281980&t=0)** - AI engineers who master explainability aren't just better technically. They're creating models that will survive scrutiny and dominate the market. In this course, you'll build skills that will expose hidden biases and create AI systems that stand up to scrutiny. We'll be exploring tools to identify where your models fail and implement targeted solutions. Hi, I'm Jazmia Henry, an AI engineer who has built and deployed systems from [[Microsoft]] and the world's largest financial institutions. Let's get to work so you'll leave this course with the ability to develop AI that delivers exceptional performance, keeps the public's trust, and works fairly for all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Speakers:** - ai (1)


### 1. Understanding the AI Landscape

[↑ Back to Table of Contents](#table-of-contents)

#### [Bias in AI and its impact](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-ai-and-its-impact?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-ai-and-its-impact?u=76281980&t=1)** - Bias in AI. Many AI practitioners hear the [[Microsoft Word|word]] bias and they immediately take pause. The idea of bias in AI is an arguing point for many leaders across the industry. If you're taking this course, you're likely the type of leader who's aware that bias in AI happens, and who wants to learn the tools to mitigate it. Well, I'm glad you're here. Let's lay foundation for this course by understanding what we mean exactly when we talk about this topic. Bias in AI is when an AI model returns a skewed, unfavorable, unfair, or unrepresentative output, likely due to underlying human-created data with these biases. While many of these biases are reflection of the society that the data comes from, the nature of how these probabilistic AI models behave, that is models that make predictions based on [[Probability]], makes bias matching more amplified. The impacts that bias in AI can have on the public are over-reaching. [[Generative AI]], which is the focus for this course, is particularly rife with biased outputs that can have long-term effects on users, businesses, and their customers. Examples can be as extreme as parroting racist slurs or creating harmful deep fakes
>
> **[1:37](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-ai-and-its-impact?u=76281980&t=97)** targeting marginalized individuals or even seemingly innocuous as not saying the name David Mayer. Do you all remember that? This happened due to an internal flag making it impossible for anyone with that name to get service on a particular AI platform, or even text generators that perpetuate gendered stereotypes in [[Business Communications]] and image generators that reinforce limited cultural representations. These biases can deeply impact how users express themselves and how their work is perceived. So how does that impact you? When building generative AI systems, it's important to keep your end user in mind. Understand how bias may harm your customers, even if that bias is unintended. Thankfully, many [[Responsible AI]] leaders have worked really hard to determine and refine ways to mitigate these biases so that it can be less likely to show up in a deployed model. Researchers like Dr. Timnit Gebru, Dr. Alex Hanna, and Dr. Joy Buolamwini, just to name a few, dedicate their careers to uncovering bias in generative AI and coming up with mitigation techniques. Together we'll incorporate these techniques
>
> **[3:12](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-ai-and-its-impact?u=76281980&t=192)** from some of the greats and ensure that our generative AI applications work fairly for all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (4), [[Microsoft Word|Word]] (1), [[Probability]] (1), [[Business Communications]] (1), [[Responsible AI]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Definitions:** is an  (1)
> **Speakers:** - bias (1)

#### [How does generative AI work](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/how-does-generative-ai-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/how-does-generative-ai-work?u=76281980&t=1)** - AI is a black box. Whether that box is filled with magical treasures or is actually a Pandora's box is up to the training data that's inside. So what's inside the black box of [[Generative AI]]? How does it work? Well, it's a bunch of multiplied vectors all working to predict the most probable [[Microsoft Word|word]] in a sentence. This works by analyzing massive datasets to identify and learn underlying patterns and relationships between encountered words. These datasets serve as a training data that allows the model to understand the probabilistic connections between different elements. This can be text, images, code, auditory, or other data types. The idea of AI as a black box of mathematical processes might seem scary to some, but when we think about it, it's actually a quite comforting idea. AI isn't magic, it's math, and any kind of math can be better understood if we break things down into digestible parts. In generative AI, training data is passed through [[Neural Networks]], typically a transformer model that mathematically represents patterns in the data. This is represented by this equation.
>
> **[1:38](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/how-does-generative-ai-work?u=76281980&t=98)** For now, all we have to understand is that when given a prompt or input, generative AI models use these learned patterns to generate the most probable next set of words as new output. By recombining elements from its training, generative models can create content that feels natural and coherent. In short, generative AI at its core is just really advanced pattern matching. This is both the power and limitation of generative AI. While it can produce human-like outputs, generative AI focuses on understanding the form and limited context of speech without actually grasping its full meaning. Because of this outputs are at risk of repeating bias, hallucinated and problematic patterns in its training data. This pattern matching can amplify bias, which can get out of control. In Dr. Safiya Noble's book "[[Algorithms]] of Oppression," her studies found that models that rely on text-based probabilistic pattern matching have been shown to associate Black women with negative attributes like mean and angry, while having more favorable attributes for the words white man. This is just one example of many. The key is to understand
>
> **[3:13](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/how-does-generative-ai-work?u=76281980&t=193)** that generative AI isn't truly creating, at least not in a human sense. Instead, it's generating statistically likely outputs based on its training patterns. Doctors Emily Bender and Timnit Gebru simply refer to this as parroting, specifically that generative AI is a stochastic parrot. What we have covered so far has important implications for how we use and rely on these systems and how we can combat these biases. For future videos, we'll dig deeper into the state of the art bias mitigation techniques that you can learn to improve these biases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (8), [[Microsoft Word|Word]] (1), [[Neural Networks]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1)
> **Speakers:** - ai (1)

#### [Challenges of bias mitigation](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/challenges-of-bias-mitigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/challenges-of-bias-mitigation?u=76281980&t=1)** - When researchers started documenting what was inside Common Crawl, which is a massive database used to train the world's most popular language models, they found something concerning. A vast majority of the data in Common Crawl was not representative of the entire world. This massive skew is just the tip of the iceberg when it comes to the challenges we face in making AI systems more fair and inclusive. But the challenge goes much deeper than just data. When we use mathematical processes like vectorization and matrix multiplication to represent words, we create unintended consequences. Think about this [[Microsoft Word|word]], queen. Well, when we're talking about a mathematical process of how it's represented, it's represented as queen equals king, minus man plus woman. Sounds clever, right? But it bakes in the assumptions about gender and power that can reinforce societal biases. These mathematical assumptions get amplified through what we call probabilities of co-occurrence. When certain words appear together in our training data, like a negative stereotype about a certain group, the model learns and reinforces these associations. That means it's not just learning language, it's learning bias. You might think the solution is pretty simple.
>
> **[1:37](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/challenges-of-bias-mitigation?u=76281980&t=97)** "Okay, just add better data to the model." Well, unfortunately, researchers have found that it's not enough to simply supplement bad data with slightly better data on top of a pre-trained model. The underlying mathematical assumptions and training approach needs to be reconsidered from the ground up. Mitigating bias in AI systems is a complex challenge that requires work on multiple fronts, from how we collect and document our data, to the mathematical foundation of our models, to the constraints we put in place after training. In the upcoming videos, we'll explore each of these areas, and learn practical approaches for addressing bias at every stage of the AI development process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - when (1)


### 2. Bias in GenAI

[↑ Back to Table of Contents](#table-of-contents)

#### [Bias in data: "Bad data in, bad data out"](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-data-bad-data-in-bad-data-out?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-data-bad-data-in-bad-data-out?u=76281980&t=1)** - On the cover of a groundbreaking book, "[[Algorithms]] of Oppression" Dr. Safiya Umoja Noble notice something disturbing. Imagine you're on [[Google]] and you type in "Why are black women so..." and then the auto complete suggestions begin to pop up. Well, what Dr. Safiya Noble noticed was something bleak. Words like angry, mean, and loud dominated the top results, while more positive words like confident and attractive appeared later. But as you can imagine, they never made it to the top three. This isn't just a search engine problem, though. It's a window into how AI systems learn and perpetuate bias through their training data. If you've ever heard the term bad data in and bad data out, this is exactly what's meant by that. Just as Google search algorithm is designed to show the most commonly searched results, larges language models trained on internet data are built to respond with the most common associations they find. When negative stereotypes are prevalent online, our AI systems learn and reproduce these harmful patterns. So let's look at where this data comes from. Most popular language models like BERT, RoBERTa, and OpenAI GPT are trained using data from websites like Wikipedia and Reddit. While these sources may contain valuable information, they also contain all of the biases
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-data-bad-data-in-bad-data-out?u=76281980&t=96)** of their primary contributors. Researchers have shown that internet data often overrepresent certain viewpoints while marginalizing so many others. So just as the term mentioned, bad data in and bad data out, having bias sources often means having bias output. When these biases enter the training data, they don't just stay the same. They can get amplified. So think about it like this. If a [[Microsoft Word|word]] like black gets associated with negative terms in a training data, the model learns this pattern and might strengthen the harmful associations in its outputs. Remember, AI models aren't magical oracles of truth. They're mirrors reflecting back the data we feed them. When the data contains societal biases, these biases don't just persist. They become more pronounced. This is why we can't just focus on making our models bigger and more sophisticated. We need to carefully consider what we're teaching them in the first place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Algorithms]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** bert (1), gpt (1)
> **Analogies:** imagine (2)
> **CLI Commands:** find (1)
> **Speakers:** - on (1)

#### [Prompt engineering crash course](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980&t=0)** - [Instructor] Hello learners. I'm so excited to be chatting with you all today. We're going to be talking about how we can use [[Prompt Engineering]] in order to improve the biases that might be happening with a large language model. So there is a quick point that I want to make at the top. For all of the examples that I'm going to be running with you all, so this being the first, we're going to have a few more throughout our course. I'm going to be using the natural language toolkit. That is a package that's very important when it comes to [[Natural Language Processing (NLP)|natural language processing]]. It's kind of like the OG of language models. It has a bunch of really good packages when it comes to [[Microsoft Word|word]] embeddings. That being said, it is not the most advanced of packages out there. So we're going to be running through this because it's free, it's great, it's really quick, we can run through things, but there are other alternatives. OpenAI has a great API, as well as Claude and some others. I will be having some examples for you all if you want to switch things out and use those. But for the sake of time, we're going to use NLTK. NLTK is free. NHT is much faster when it comes to getting everything set up. And yeah, we're going to be moving forward with that. For those of you who are [[Hugging Face]] fans, I'll also have some examples using Hugging Face as well. Hugging Face is really great, but we're using the larger models in Hugging Face, it takes a longer time. Sometimes the free comes out expensive
>
> **[1:33](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980&t=93)** when it comes to time. So we're going to use NLTK, but of course there's other options, and I'll make sure that I share those with you guys. All right? So excited. Let's go ahead and dig into some things. So, most important thing, want to make sure that your [[Python (Programming Language)|Python]] version is a good Python version. There are a few ways that you can make sure that your Python version is the correct version. One of the ways, and I'll actually go ahead and add this here, since we're using [[Google]] Colab, we don't necessarily have to do this, but for those of you who are not using Google Colab, you want to do Python 3 version, and then the answer of what Python version you're using is going to pop right out. That's going to be within your Bash. You're going to want to put that there. So, for those of you who are not sure, you're going to want to go ahead and do that check, all right? So let's actually put a note for you all, and we're going to say, you know what? Let's go ahead and check our Python version in Bash or terminal. All right, so another thing you're going to want to do is set up your Python environment. There's a bunch of different ways to set it up. If you want to do things within Bash or terminal, here is how you do that. And then we're going to go ahead and get into our code after that, all right? So, since we are using Google Colab, there's a few pip installs that I had to do just to make sure that everything ran smoothly. Another thing you can do is do pip install requirements.txt.
>
> **[3:09](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980&t=189)** You want to make sure that you have all of that all up before you get into your code. So let's start getting into our code implementation today. Starting with the instantiation of our NLTK-based prompt engineering module. There are a few things you want to do. You want to make sure that you've downloaded these resources. These are just different type of data packages that you can use with your natural language toolkit. We want to make sure we have some sentiment intensity analyzers called up. We want to remove those stop words within English. Stop words are like your articles and things like that, the, at, and, stuff like that, you want to go ahead and be removed. If you are using OpenAI or you're using Claude or something like that, you don't have to go through that process. And of course, I'll have that within those examples. And then this is something very important, when you want to look at those bias indicators, I use regex in order to figure out those bias indicators. You want to have a list of, okay, what are those identifiers that show that there is bias when it comes to gender, here might be some words when it comes to racial bias, here might be some trigger words when it comes to age bias. As you're filling these things out, it can change depending on your use case. So make sure when you're doing these compilations, you identify whether or not those might be trigger words within your use case, all right?
>
> **[4:44](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980&t=284)** And then, once we've got that all set up, as you all can already see, we've already downloaded all those things, then we want to go ahead and test our bias detection. So here, I'm just going to have a bunch of just text. Let's just look at, all right, what if somebody has these different sentences? He is likely to [[Microsoft Excel|excel]] in engineering roles due to his analytical thinking. That might be one example that might flag as gender bias. Another one, Latino workers are ideal for physical labor positions, do share a strong work ethic. Oh, well, you know, that might flag there. Let's look here, age bias. We need young, fresh talent, instead of outdated perspectives from baby boomers, right? Those can be some problems here. And what we're looking for is we want our evaluator to be able to identify, oh, those might be some problems. So we want to make sure that when we look at things here, that it looks consistent. So let's look at this, number one, he's likely to excel in engineering roles due to his analytical thinking, and we're identifying, uh-oh, that might have some bias in there, and some gender bias in there, that's good. Then let's look at some examples a little bit later on. We want to check through here. As you kind of run through these, it's going to do a full evaluation. You'll be able to see different places in which there might be gender bias.
>
> **[6:17](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/prompt-engineering-crash-course?u=76281980&t=377)** You can also see different places of clarity, whether or not sentiment is positive or negative, most of these sentences are neutral, and so these are the type of pipelines that you will want to run when you're doing your evaluation. Also, you want to see some situations where you know what, things might not be looking so good. Then you can do some changes here. So we're noticing like, oh, okay, it's clear there's no socioeconomic bias. That might be a place we want to go in, and we want to make sure that we're correctly identifying where those socioeconomic biases might come up. Thank you so much, everybody, for being able to work through this with me today. I had a lot of fun. You all have an awesome day. Bye, folks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Hugging Face]] (4), [[Google]] (3), [[Prompt Engineering]] (2), [[Microsoft Excel|Excel]] (2)
> **CLI Commands:** make (11), python (7), pip (2)
> **Tools:** colab (3), bash (3), terminal (2)
> **Env Vars:** nltk (4), api (1), nht (1)
> **Prerequisites:** set up (3), install (1)
> **Definitions:** is a  (3)
> **File Paths:** requirements.txt (1)
> **Versions:** python 3 (1)

#### [Bias in mathetmical assumptions](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-mathetmical-assumptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-mathetmical-assumptions?u=76281980&t=1)** - Queen equals king, minus man plus woman. This is the underlying equation behind all of [[Generative AI]]. At first glance, this equation seems harmless enough, but when we dig deeper, we can uncover a crucial relationship about how AI processes relationships between words, creating linear analogies that can lead to bias. Today, we'll peek inside the mathematical black box and we'll see exactly how these calculations can inadvertently amplify harmful stereotypes. In AI, words become numbers through a process called vectorization. Instead of understanding what queen actually means, the AI looks at how close this [[Microsoft Word|word]] appears to other words in massive amounts of text. The distance between words in this mathematical space tells the AI how related they are. It's like creating a map where similar words cluster together. Here's where things get tricky. When we turn words into equations and multiply them through, words get associated on how often they appear together in a data set, let's reconsider the original equation. King is associated with strong and leader, whereas queen is associated with beauty and woman. When we consider that the term queen is mathematically positioned as king's opposite, we can already begin to see
>
> **[1:38](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/bias-in-mathetmical-assumptions?u=76281980&t=98)** how these mathematical assumptions can multiply existing biases. The problem goes deeper when we use these vector representations and larger models. When we multiply the probabilities of words appearing together with weights in something called an attention layer, like those used in models like BERT, we can end up amplifying these bias associations even further. It's not just preserving bias, it's potentially strengthening it. Understanding these mathematical processes aren't just for academics. It's crucial for understanding how biases work in AI systems. When we know that our models are making these linear exceptions about language, we can better understand their limitations and work to address them. Coming up next, we will explore specific techniques for mitigating these mathematical biases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** bert (1)
> **Cross-References:** coming up (1)
> **Analogies:** it's like (1)
> **Speakers:** - queen (1)


### 3. Bias in Model Training

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to GenAI model training](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-genai-model-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-genai-model-training?u=76281980&t=1)** - Common Crawl. Let's get back into that one. We briefly discussed it before, but now let's get into the stats and what they mean in practice. Bert, Roberta, GPT. Common Crawl is the core foundation of every major language model you've ever heard of. This database represents over 40 languages and contains trillions of words from billions of web pages. It sounds impressive, right? But when we look closer, we find that 47% of the data is in English, and that English is heavily skewed toward US and UK sources. The second most common language is Russian, but that only makes up 5.5%, followed by German at 5.2%. This imbalance isn't just a data problem, it's a representation problem. As these [[Databases]] get larger, they run into something that we call documentation debt. It becomes harder and harder to track what's actually in the data, let alone ensures quality or representativeness. Think about it like a library where books keep coming in, but nobody's actually keeping track of what these books contain and where they even come from. Let's think back on the term bad data in and bad data out. This solution isn't just to add more data
>
> **[1:34](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-genai-model-training?u=76281980&t=94)** and hope for the best. No, researchers actually found that if you simply supplement bad data with slightly better data, that actually doesn't lead to better outcomes long term. Instead, we need to fundamentally rethink how we curate and document our training data. The quest for better data isn't just about building bigger models, it's about building better foundations through careful data curation, documentation, and transparency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Versions:** 5.5 (1), 5.2 (1)
> **CLI Commands:** find (1)
> **Env Vars:** gpt (1)
> **Speakers:** - common (1)

#### [Demographic parity and its applications](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/demographic-parity-and-its-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/demographic-parity-and-its-applications?u=76281980&t=1)** - Let's imagine two groups applying for a loan. One group has a 45% acceptance rate, while the other group, despite having similar qualifications, only has a 30% acceptance rate. This disparity is exactly what demographic parity aims to address. Let's talk about how this mathematical concept can help us identify and correct unfair treatment in AI systems. Demographic parity has one simple but powerful requirement, the positive rates of the underrepresented group should equal the percentages of positive rates of the overrepresented group. In mathematical terms, this looks like, so why does all of this matter? Well, this means that outcomes should be distributed equally across all groups. If 45% of one group gets approved for something, 45% of other groups should too. We can measure this using a confusion metrics, which helps us visualize and calculate the positive rate of each subgroup. This gives us a clear, quantifiable way to see if our model is treating different groups fairly. This isn't just to notice differences. The goal is to ensure that our AI systems aren't perpetuating or amplifying existing societal biases.
>
> **[1:38](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/demographic-parity-and-its-applications?u=76281980&t=98)** Let's look at how this works with [[Large Language Models (LLM)|large language models]]. If a model is more likely to complete sentences about certain groups with positive attributes while using negative attributes for other groups, we have a demographic parity problem. This is more than just numbers. It's about ensuring fair and equitable treatment across all groups. Demographic parity isn't just a metric. It's a tool for [[Accountability]]. By measuring and enforcing this kind of fairness, we can build AI systems that work equally well for everyone, not just majority groups. In our next video, we'll explore how this relates to other fairness metrics and how to implement it in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Accountability]] (1)
> **Cross-References:** next video (1)
> **Analogies:** imagine (1)
> **Speakers:** - let (1)

#### [Equal opportunity parity for evaluating fairness](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equal-opportunity-parity-for-evaluating-fairness?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equal-opportunity-parity-for-evaluating-fairness?u=76281980&t=1)** - Let's say two people have identical credit scores and financial histories, but one person gets approved and the other gets denied. Upon a closer look, it's found that one person had a family member with a relationship to the bank going back two generations, and the denied applicant, due to lack of opportunities based on their demographic, did not. The bank did not require legacy status as a requirement for loan approval, and yet this is the exact thing that got one person approved and the other denied. This is where equal opportunity parity comes in. It takes fairness a step further by asking not just about outcomes, but about equal treatment under equal conditions. Equal opportunity parity says that assuming all things are equal, the underrepresented subgroup should receive predictions at the same rate as the overrepresented group. The mathematical representation looks like this. So let's break this down. Equal opportunity is when the true positive rates of both groups happen at the same rate. So going back to your earlier example, if I get a loan because I'm qualified, then you should also get the loan if you have the same qualifications. We measure this using the true positive rate within the confusion matrix of each subgroup. This tells us how often our model correctly identifies cases across different groups.
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equal-opportunity-parity-for-evaluating-fairness?u=76281980&t=95)** It's about ensuring equal opportunity, not just surface level balance. Equal opportunity parity helps us move beyond simple numerical equality to ensure our AI systems are truly fair in how they treat cases across different groups. As we'll see in our next video, this is one piece of a larger fairness puzzle that includes other important metrics like equalize aughts.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - let (1)

#### [Equalized odds parity to compare subgroup performance](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equalized-odds-parity-to-compare-subgroup-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equalized-odds-parity-to-compare-subgroup-performance?u=76281980&t=1)** - Remember our loan approval example where two groups had similar qualifications but received different acceptance rates? Well, let's add another layer to that. What if people with good credit from one group got approved at the same rate as the other group, but people with poor credit from that group got rejected more often? This is exactly what equalized odds parity helps us identify. It looks at both sides of the fairness equation. Equalized odds parity takes us a step further than previous metrics by saying two things must be equal. One, the true positive rate across both groups must match. And two, the false positive rate across both groups must also match. The formula looks like this. So how does this work? To calculate this, we divide the true positive rate of each subgroup by its false positive rate. The closer this number gets to zero, the better our model at performing in terms of fairness. This comprehensive view helps us catch subtle [[Forms]] of bias that might slip through other metrics. Think of it like a balanced scale. We want equal treatment, not just for successful cases, but also for unsuccessful ones.
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/equalized-odds-parity-to-compare-subgroup-performance?u=76281980&t=95)** This can prevent scenarios where a model might appear fair on its surface, but still discriminate in more subtle ways. Equalize odds parity represents one of our most thorough tools in measuring AI fairness. In our next video, we'll see how these concepts we've covered apply in real world evaluation frameworks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Cross-References:** next video (1)
> **Analogies:** think of it like (1)
> **Speakers:** - remember (1)

#### [HELM](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/helm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/helm?u=76281980&t=1)** - Imagine evaluating 30 different AI models, each tested on different scenarios using different metrics under different conditions. How could you possibly compare them fairly? This was the challenge that Stanford University tackled when they created [[Helm]], the holistic evaluation of language models. Let's explore how this groundbreaking framework is transforming how we evaluate AI systems for bias and fairness. HELM measures seven critical metrics for every model it evaluates. One, accuracy. How often is the model correct? Two, calibration. How well does it know what it knows? Three, robustness. How stable are its outputs? Four, fairness. Does it treat all groups equally? Five, bias. Does it show systematic prejudices? Six, toxicity. Does it generate harmful content? And lastly, efficiency. How resource intensive is it? Before HELM, models were typically only evaluated on a fraction of these metrics, making it more difficult to understand their full impact. What makes HELM revolutionary is a standardized testing approach. It evaluates models across 16 core scenarios
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/helm?u=76281980&t=95)** from question answering to text generation and 26 targeted scenarios that look at specific concerns like reasoning and disinformation. This comprehensive approach ensures we're not just catching obvious problems, but also subtle biases that might otherwise go unnoticed. Perhaps most importantly, HELM is transparent. All raw model prompts and completions are publicly available for analysis. This means researchers and developers can dig deep into the data, understand where models might be failing, and work on improvements. It's not just about finding problems, it's about providing the tools to fix them. HELM represents a responsible standard in AI evaluation, moving us from scattered, inconsistent testing to rigorous, comprehensive assessment. As you develop and deploy AI systems, remember, you can't fix what you can't measure, and HELM gives you the tools to measure what matters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Helm]] (7)
> **Env Vars:** helm (7)
> **Analogies:** imagine (1)
> **Speakers:** - imagine (1)

#### [Red-teaming](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/red-teaming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/red-teaming?u=76281980&t=1)** - When we build an AI system, how do we know if it's truly fair? It's not enough to just check a few examples or run one type of test. We need comprehensive evaluation frameworks, and that's where [[Red Teaming]] comes in. Red teaming is a method where we actively try to find ways our model might fail or show bias. Think of it like having a team of ethical hackers, but instead of looking for security flaws, they're looking for bias and fairness issues. Companies like Philanthropic have dedicated a lot of time and research to ensure their red teaming practices are amongst the premier in the industry. This approach involves systematically testing our model across different scenarios and demographics. We use our parody metrics, demographic, equal opportunity, and equalize odds as quantitative measures, while also performing qualitative analysis of model outputs. The key is consistency and thoroughness. Every potential bias we uncover helps us build better, more equitable systems. This isn't about finding perfect solutions, it's about continuous improvement and vigilance. Evaluation is a one-time event. It's an ongoing process of testing, learning, and improving.
>
> **[1:39](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/red-teaming?u=76281980&t=99)** As we move forward, these frameworks will help us develop AI systems that work fairly for everyone, not just the majority.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Red Teaming]] (3)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** think of it like (1)
> **Best Practices:** the key is (1)
> **Speakers:** - when (1)

#### [Exercise: Building an evaluation pipeline](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=0)** - [Instructor] Hello, learners. Today we're going to be talking about how you can improve the [[Generative AI]] output by using evaluation pipeline. This is going to be really fun and exciting, so let's go ahead and dig into things. So first, you're going to want to make sure that you have [[Python (Programming Language)|Python]] 3.8 installed. That should still be installed from the last time, but just in case you don't, go ahead into your terminal and make sure. Looking at a terminal here, if you need to make sure, you should be able to do this by doing this. In our case, we have Python 3, so you can use Python 3 version, and it should tell you. We're using Python 3.13.2. For the sake of our terminal, though, we have Python 3.9.6. Why this might be different? If you have a Jupyter Notebook that you're opening up on VS Code, you have the ability to create those new virtual environments that we talked about last time. And so whether you have your virtual environment set up and open or you run with your native Python, you should be at higher than 3.8. Then there's going to be a couple of other things that you're going to want to go ahead and download. Once you get that all up and running, then we can go ahead and get into things. So let's start off with the most important part of today, which is making sure
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=95)** that we use our Natural Language Toolkit package, which should all come together if you went ahead and downloaded things with the requirements.txt file. So when you have this notebook, sometimes you might find a problem with the Natural Language Toolkit, at which case we have some troubleshooting information here. This problem happens, especially if you see something that says numpy.dtype size error, but suggesting you don't see any of those problems, we can go ahead and start digging into Natural Language Toolkit. So what does that do? This package has a bunch of different [[Microsoft Word|word]] embedding packages that you can use. It's a pretty popular package in machine learning and [[Natural Language Processing (NLP)|natural language processing]]. So let's go ahead and download the ones that are important for us today. It should be pretty quick. Sometimes when it's your first time, it takes a little bit longer than this, but the ones that we're using today is punkt, averaged_perceptron_tagger, stopwords, and wordnet. So let's dig into our implementation. There's a few things that I want for us to pay attention to today that's going to be so very important. We talked about demographic parity, and this is going to measure whether or not predictions are independent of demographic group. If you all remember, we want to make sure that the subgroup gets the same outcomes as the majority group. So we go ahead and hard code that here. Then we have our equalized odds prediction.
>
> **[3:10](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=190)** So when we are doing our parity with this one, if you all remember, it's going to make sure you have equal true and false positive rates across your groups. Lastly, if you all remember, our equal opportunity parity. We want to make sure that we have true positive rates across our groups. And so since we have this hard coded here, all we have to do is go ahead and click on this button to run. Should be very quick, should be less than one second. If you go ahead and run that, then we'll be able to see whether or not when running through the vector embedding packages that NOTK has, we'll be able to see if we see these types of problems popping up within our pipeline. So that pipeline is already created. We were able to very quickly create it together. We're going to go ahead and instantiate our evaluator, which was above with our demographic parity, equalized odds parity, and our equal opportunity parity metrics. We're going to instantiate what happens if there's different groups, group A and group B, then we're going to do some evaluation. So, just by looking at the packages that we have here, we're able to see that there are some equal selection rates between group A and group B. So in this case, there is no difference between our groups. So that's great.
>
> **[4:42](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=282)** This is very exciting. That's exactly what you would want to see. And we can do the same thing for equalized odds. We're seeing here that there is the true positive rate at 50%, but then when you see the group A, the true positive rate is at one, right? So we're seeing here that there is a difference between the true positive rate, between the two groups, but there's no difference between the false positive rate. And so in this case, when we're talking about equalized odds, we can conclude that things aren't truly fair here. Then we're going to go look at equal opportunity parity. We're going to run that. And then similar as we saw before, right? Those true positive rates are different. And so as we can see, you'll have situations where your demographic parity is the same, and that's pretty exciting. But before you move forward with the assumption that your model is equal, you want to run these two as well to see different ways in which there might be a difference between groups. And in this case, we're seeing that there is a difference between a true positive rate of both groups. So one way you can do it that's much faster
>
> **[6:20](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=380)** than running it separately is by running this here, which allows us to evaluate all of our metrics at the same time. It's simply another way to do what we were doing before, and this will be all right in front of you, makes it pretty great, and will be able to give you a sense of the overall difference. And so as we talked about, you want to make sure that you simply don't depend on one of these parities and not the other. You want to make sure that when you're evaluating whether or not there's true fairness in your model, that you're checking across all of these different evaluation metrics. So remember folks, your demographic parity is measuring whether or not your predictions are independent of your demographic group. Your equalized odds is seeing whether or not your true positive rate and your false positive rate are equal across groups. And then your equal opportunity parity. You want to make sure that your true positive rate is equal across groups. There might be times when there's a trade off against each other, and while it would be great to make sure that all of them are at perfect parity, there are some times where one is going to be higher than the other. So equalized odds might have a high false positive rate, a low true positive rate. So equal opportunity is all happy, but equalized odds isn't happy.
>
> **[7:53](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-building-an-evaluation-pipeline?u=76281980&t=473)** You want to make sure for your specific cases and your specific fairness goals that the parity metric that's important to you actually makes sense. So before we go, let's talk about a couple of steps to consider when moving forward. Of course, we have our evaluation metrics, which are really great for us to be able to identify where that bias might be showing up, but it's also great to make sure that you have some really good data. In this case, we had the benefit of using the Natural Language Toolkit data, which is already pretty clean dataset, but that might not always be the case. And so you want to make sure that you properly clean and normalize your input data. Then you want to make sure that you have a proper evaluation strategy. Figure out which parity metric is the most important for your use case. And then lastly, make sure that you are accurately interpreting your results. You want to look for different patterns across different outputs to make sure that things are consistent. There might be certain domain specific considerations that you might need to take into account. So make sure that you properly provide weights in that case. So, that's all I got. Thank you, folks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Generative AI]] (1), [[Microsoft Word|Word]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **CLI Commands:** make (17), python (6), find (1)
> **Versions:** python 3 (5), 13.2 (1), 9.6 (1), 3.8 (1)
> **Tools:** terminal (3), jupyter (1), vs code (1)
> **Cross-References:** we talked about (3), as we saw (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), make sure you have (1)
> **File Paths:** requirements.txt (1)


### 4. Counterfactuals in Bias Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a counterfactual?](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/what-is-a-counterfactual?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/what-is-a-counterfactual?u=76281980&t=1)** - We've explored how biased data creates biased AI outputs, and how mathematical processes can amplify these biases. Now let's examine a powerful concept for detecting and addressing these issues, counterfactuals. At its core, a counterfactual is a what if question. In [[Generative AI]], it means asking, "What would the model output be if we change this one sensitive attribute in the input?" Think about it like a controlled experiment. If I ask an AI to generate a story about a doctor at work and then I ask it to generate one about a female doctor at work, the differences between these outputs can reveal potential biases in how the model represents gender in professional context. Remember our discussion about how words become vectors through mathematical processes? Well, when we use counterfactuals, we're essentially isolating these vectors representing protected attributes like gender, race, and age, and observing how changing just one variable affects the output. This is crucial because counterfactuals helps us move beyond anecdotal evidence of bias. So instead of saying, "I think this model might be biased," we can quantitatively demonstrate when we change only the gender in this prompt,
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/what-is-a-counterfactual?u=76281980&t=95)** the model's description of leadership qualities drops by 30%. So how do you use counterfactuals in practice? Here are a few strategies. One, create paired inputs that differ only in the protected attributes. Two, measure differences in outputs systematically. And three, analyze patterns across many examples, not just certain cases. In the paper titled "Man is to Computer Programmer as Woman is to Homemaker? Debiasing [[Microsoft Word|Word]] Embeddings," researchers from Boston University and [[Microsoft]] Research applied this counterfactual approach to word embeddings. They discovered that when they altered only gender terms in their inputs, the model outputs revealed troubling associations. It did things like linking programmer with male terms and homemaker with female terms, exposing underlying assumptions about gender roles encoded in the data. Counterfactuals aren't just about finding problems though. They also help us evaluate solutions. After implementing mitigations like data curation or model adjustments, we can run the same counterfactual test to measure improvement. This creates an iterative cycle. Detect bias through counterfactuals, implement corrections,
>
> **[3:10](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/what-is-a-counterfactual?u=76281980&t=190)** then verify progress with the same counterfactual test. Just as we learned that bad data in means bad data out, counterfactuals gives us a systematic way to identify exactly where and how these biases manifest in model outputs. They transform bias detection from subjective impression to measurable evidence, and provide a framework for ongoing evaluation and improvement. By incorporating counterfactual testing into [[Responsible AI]] development, we push past just acknowledging bias exists to precisely mapping and addressing it, a crucial step toward more equitable AI systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Generative AI]] (1), [[Microsoft]] (1), [[Responsible AI]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Concept of counterfactuals and what-if scenarios](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/concept-of-counterfactuals-and-what-if-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/concept-of-counterfactuals-and-what-if-scenarios?u=76281980&t=1)** - What if this doctor were Black instead of white? What if a woman is as described as old instead of young? These questions form the foundation of counterfactual testing, one of our most powerful tools for revealing bias in AI. But how effective are these what-if scenarios really? Let's evaluate when they work brilliantly and when they fall short. Counterfactual testing cuts through the complexity of AI models by isolating variables. When we change this one protected attribute like gender, race, or age while keeping everything else identical, we create a controlled experiment. This approach has revealed stunning disparities. And in earlier video, we discussed how researchers show that by exchanging only gender terms and their inputs, they could quantify exactly how strongly the model encoded harmful stereotypes. This precision is what makes counterfactuals so valuable. They transform vague concerns about bias into measurable evidence. Despite their power, counterfactuals face significant challenges in practice. First, creating truly equivalent prompts can be surprisingly difficult. Changing he to she seems simple,
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/concept-of-counterfactuals-and-what-if-scenarios?u=76281980&t=96)** but language is contextual. In some cultures and languages, simply swapping pronouns might not create equivalent scenarios. Second, evaluating outputs requires careful consideration. Are we measuring sentiment, stereotypical association, safety filtering rates? Each tells us something different about the model's behavior. And third, counterfactuals work best for clear binary attributions, but many attributes exist on spectrums and intersect in complex ways. Testing how a model responds to a Black woman requires more than separately testing for race and gender biases. So when you're interpreting counterfactual results, context matters enormously. Consider a model that shows different outcomes when describing doctors of different ethnicities. Is it reflecting harmful stereotypes or potentially acknowledging actual disparities in how society treats doctors from different backgrounds? The difference between reinforcing bias and accurately representing reality isn't always clear cut. This ambiguity means counterfactual testing is most powerful when combined with human judgment to interpret results in social context.
>
> **[3:11](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/concept-of-counterfactuals-and-what-if-scenarios?u=76281980&t=191)** It's also important to recognize what counterfactuals cannot do. They don't fix the underlying problems they reveal, account for historical context, identifying biases we don't think to test for, or replace the need for diverse perspectives in AI development. This is why effective bias mitigation requires a broader toolbox. Counterfactual testing works best as a part of comprehensive approach that includes diverse training data, ongoing monitoring, and inclusive development teams. Counterfactuals or what-if testing offers a powerful lens for examining AI bias, making the invisible visible through controlled experimentation. While implementation challenges and interpretation complexities exist, few approaches offer such direct insight into how AI encodes societal biases. By understanding both the strengths and limitations of counterfactual testing, we can use this tool more effectively as part of a broader commitment to creating AI that works fairly for all of us.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1)
> **Speakers:** - what (1)

#### [Applications of counterfactuals for transparency](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/applications-of-counterfactuals-for-transparency?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/applications-of-counterfactuals-for-transparency?u=76281980&t=1)** - We've explored how counterfactuals help detect bias and evaluate model performance. Now let's examine their unique power for explaining the behavior of [[Large Language Models (LLM)|large language models]], or LLMs, systems that present distinct transparency challenges. Unlike [[Traditional AI]] systems that might classify an image or predict a numerical value, LLMs generate human-like text across virtually unlimited context. This makes their decisions particularly difficult to interpret. So why does an LLM generate one response instead of another? Counterfactuals offer a systematic approach to answering that question. Counterfactual prompting is a powerful application that systematically alters key elements of input prompts to reveal how LLMs process information. So for example, when asked, "Can a fish drive a car?" An LLM might respond with, "No," followed by specific reasons as why it cannot. By comparing this to counterfactual variants, like, "Can a person drive a car?" we can identify which concepts the model associates with driving ability, physical capability versus cognitive understanding. These targeted variations help us understand, not just what the model says, but how it reaches its conclusions,
>
> **[1:33](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/applications-of-counterfactuals-for-transparency?u=76281980&t=93)** making this reasoning process more transparent. Counterfactuals also [[Microsoft Excel|excel]] at revealing the boundaries of LLM knowledge and reasoning capabilities. By systematically varying factual elements and prompts, we can determine when an LLM's knowledge begins and ends. If asking about the capital of France, if that yields Paris, but changing the country to Burundi yield hallucinations, we've identified a knowledge boundary. Similarly, counterfactual reasoning testings like, "What if gravity suddenly reversed?" And that shows how a model can handle hypotheticals and extrapolate from their training data. These exercises map the contours of model capabilities in ways that direct questioning simply cannot, and perhaps the most advanced application of counterfactuals is counterfactual [[Fine Tuning]] for transparency. This is about deliberately training models on counterfactual examples to make their reasoning more explicit. Anthropic's work on constitutional AI demonstrates this approach. By fine tuning models on counterfactual cases where harmful outputs are reversed to harmless ones, researchers can create systems that not only behave more safely, but also can explain their reasoning about potential harms. This transforms counterfactuals from an external analysis
>
> **[3:11](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/applications-of-counterfactuals-for-transparency?u=76281980&t=191)** tool to a core element of model design, building transparency into the foundation of the system. We can now see how counterfactuals address the unique challenges of understanding large language models. While other methods might work for simpler systems, LLMs require the nuanced approach that counterfactuals provide. As these models increasingly influence our information ecosystem, understanding not just what they generate, but why is crucial. Counterfactuals give us a window into these complex systems helping researchers, developers, and users distinguish between genuine reasoning and superficial pattern matching. By applying counterfactual methods to LLMs, we are not just using technical systems to make them more transparent, we're ensuring that as large language models become more powerful, they will remain understandable and accountable to the humans that use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (3), [[Fine Tuning]] (2), [[Traditional AI]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** llm (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)

#### [Counterfactual modeling for improved fairness](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/counterfactual-modeling-for-improved-fairness?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/counterfactual-modeling-for-improved-fairness?u=76281980&t=1)** - An effective counterfactual strategy starts with careful design. Remember how we discussed that counterfactuals work by changing just one protected attributes while keeping everything else identical? This approach becomes more challenging, but even more crucial when dealing with intersectional attributes. Instead of testing only for gender or racial bias, consider counterfactuals that examine intersections. What outputs change when we describe a city in Sudan versus a city in the United States. This reveals how biases compound in ways that single attribute testing might miss. Practically speaking, this can evolve developing a comprehensive testing matrix that covers multiple attributes and their intersections. For example, don't just swap pronouns. Consider variations to names, cultural references, and professional context to create equivalent scenarios. Counterfactuals aren't just diagnostic tools. They can drive interventions. Once you've identified bias associations through counterfactual testing, use this same structure to develop corrective measures. Let's cover a few. First, implement adversarial biasing where a secondary model tries to predict
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/counterfactual-modeling-for-improved-fairness?u=76281980&t=96)** protected attributes from your main models as outputs. When your model successfully prevents this prediction while maintaining accuracy, you reduce unwanted associations. Second, use counterfactual augmentation to balance your training data. For every bias pattern discovered, add balanced counterfactual examples to your training set. This effectively teaches the model that these associations should be independent. Third, develop output filters calibrated with counterfactual examples. If your model consistently produces more positive attributes for certain groups, use this insight to adjust output scoring accordingly. Effective counterfactual implementation requires rigorous evaluation. Don't just measure improvements on the specific counterfactuals you've tested. Check whether improvements generalize across all context. Also, create evaluation sets that test both the direct counterfactuals you've addressed and novel scenarios that might reveal remaining biases. Monitor these metrics over time as model drift can reintroduce biases even after successful interventions. Remember what we learned about interpretation challenges?
>
> **[3:10](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/counterfactual-modeling-for-improved-fairness?u=76281980&t=190)** Context matters enormously, involve diverse reviewers to distinguish between harmful stereotypes, and accurate reflections of societal realities. Counterfactual modeling transform our approach to AI fairness from reactive to proactive. By systematically asking what if questions throughout the development pipeline, we create models that don't just avoid amplifying bias, but actively work towards more equitable outputs. Moving forward, let's explore case studies showing these counterfactual techniques in action across different domains and applications.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1)
> **Analogies:** for example (1)
> **Speakers:** - an (1)

#### [Exercise: TensorFlow counterfactual](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980&t=0)** - [Instructor] Hello everybody, and welcome to our counterfactuals demo. I am so excited to be working on this with you all today. So, we're going to be talking about how we can do counterfactual analysis for our [[Generative AI]] outputs. If you all remember, by swapping out words that might be problematic with words that are not problematic and vice versa, changing that one variable, we'll be able to see the ways in which there might be bias popping up in our models. Let's go ahead and dig into things. So, you all are already used to the importance of installing your prerequisites, so I'm not going to belabor that point. We can go ahead and jump right into things. We're going to go ahead and do a quick run. And things should run very quickly here, but I'm still going to walk everybody through everything. There's a few things that we decide to do. So, one of the things is I wanted to make sure that we were going to have a few counterfactuals, we're going to have five different counterfactuals. We're going to have a random seed of 42, it is to make sure that it's not writing the same things over and over again. We're going to make sure that the similarity threshold is set up in such way so that we can make sure whatever swap out we have in our counterfactual analysis is going to be very different than the originating [[Microsoft Word|word]]. And we build here a pipeline that makes it very easy for us to identify, make sure that the similarities are not there for it between the counterfactual and the original text.
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980&t=95)** Why is this important? Well, you don't want to say, "Well, when I use the word man, it comes out in this way, but if I use the word male, it comes out in that way." That's too close, you all. So we want to make sure that the different words that we're using are ones that are different enough. We're going to do a simplified example, but one of the things that we can do here is we can add attributes, right? We can make sure that our model is able to identify as different attributes we want to look out for. In this case, we're going to use some gendered attributes, some age-related attributes, as well as some ethnicity-based attributes. And then of course, we're going to build out a fairness analyzer. This fairness analyzer is going to be calculating against different fairness metrics, the difference between our original and our counterfactual outputs. We'll be calculating bias scores, calculating the impact of our attributes, and then of course, output similarity, just to make sure that those swapped out things are appropriate, that it's not giving us too much of the same. Another thing we're going to be doing is having a visualizer. It makes it really easy if you have a really great plot that can be able to give you a sense of how things are going, makes it easy for you to be able to explain it for explainability purposes. So let's dig into things. Let's look at these protected attributes that we want to examine. We're going to swap them out. Here's some original input. So the gender, female, age, young, ethnicity, Asian,
>
> **[3:11](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980&t=191)** occupation, engineer, education, graduate, a talented young female engineer with graduate education. And then we're going to do some counterfactual analysis. We're going to swap things out between female to male, swap things out with different genders, swap things out with different education levels. So talented engineer's going to become talented young male engineer. A skilled professional is going to become a skilled female professional, and so on and so forth. And then once we finish running this, we're able to see that well, yeah, the output similarity is not too high. So a female skilled professional is not too different than a skilled professional, but yet gender had a big impact on how the scoring happened. When it said skilled female professional, there was a change in how the model responded. Age also had an impact. When we said middle age, and let's scroll back up here to this example, middle age engineer changed when we had a different age engineer. Ethnicity, it didn't change things as much, but it's still above zero. So we're still seeing a change happening with ethnicity. And then there is this bias score. We're still seeing that there is a bias
>
> **[4:45](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980&t=285)** against these groups. So we have some information here that can give us information about how things were affected, with some great suggestions here. Consider adjusting your model to maintain more consistent outputs. So what does it mean in this case? That means next time, well, don't change it from the male to female, and then things are going to be better. Well, we know that, right? We want to identify when these problems are going to happen. This one says review the handling of your gender and your model logic. So we're seeing that there's a problem here. And then lastly, consider retraining our model with a more balanced dataset. So, as you all can see, it is very important for us to make sure that when we're doing our counterfactual analysis, we're identifying places in the model where there might be issues. And then when we look at our warnings, it's able to give us some information about how we can move forward. We're seeing here that for this particular model, there is significant potential bias detected, and it's around gender. So in the future, we're going to want to make sure that when we're having a gendered conversation with this particular type of model, that we are having a more balanced segment there so that we won't continue to see these problems. All right, great. Had a lot of fun doing this with you all. Hope you had fun too. Play around with this. Get used to it.
>
> **[6:19](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-tensorflow-counterfactual?u=76281980&t=379)** This is a really great way to be able to identify when there might be problems in the model. Really glad to share it. Hope you all have a great afternoon, bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Generative AI]] (1)
> **CLI Commands:** make (10)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Data Sampling for Bias Reduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of sampling data](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/the-power-of-sampling-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/the-power-of-sampling-data?u=76281980&t=1)** - Now, let's take a moment here to address a fundamental question. How do we prevent biases from entering our AI systems in the first place? Think back to bad data in, bad data out. We notice how platforms like Common Crawl form the basis of nearly every major language model with 47% of data in English skewed heavily toward U.S. and U.K. sources. This isn't just a data problem, it's a sampling problem. Today, we'll categorize essential practices for representative sampling that can address this core challenge. So let's start with quantitative approaches to sampling, which focus on statistical representativeness. First, stratified sampling techniques ensure proportional representation across protected attributes. Unlike random sampling, which might miss minority groups, stratified approaches deliberately include adequate representation of different demographic categories. This means not just having diverse data, but having it in proportions that prevents the model from treating certain groups as outliers. Second, implement variance optimization, which selects samples to maximize diversity
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/the-power-of-sampling-data?u=76281980&t=96)** while minimizing redundancy. Instead of collecting millions of similar examples, variance optimization identifies unique data points that expands the model's understanding of different demographics, context, and scenarios. Third, use power analysis to determine minimum sample sizes for each demographic group. Too often models include token representation of minorities, which is just enough to claim diversity, but not enough for the model to learn balanced representations. Power analysis ensures sufficient examples for statistically vetted learning across all groups. Quantitative approaches alone, however, are not enough. Let's now explore qualitative sampling practices that address deeper fairness concerns. First, contextual enrichment ensures that different groups aren't just represented numerically, but across diverse contexts. For example, if a professional context mostly feature one demographic while domestic contexts feature another, this is reinforcing stereotypes despite balanced numbers. In this case, audit your samples to ensure all groups appear across all relevant contexts. Next, bring in participatory sampling
>
> **[3:12](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/the-power-of-sampling-data?u=76281980&t=192)** by involving representatives from affected communities and [[Data Collection]] decisions. This addresses the documentation debt problem we looked at in chapter three. As data scales, we lose track of what's in it and whose perspectives it represents. Participatory approaches ensure that samples reflect how communities want to be represented. Lastly, practice temporal diversity by including data from different time periods. Language and cultural norms evolve. Relying heavily on contemporary sources can bias against older users or reinforce current stereotypes, rather than fostering inclusive communication across generations. All of these sampling strategies must be integrated throughout the AI development lifecycle, not just at the initial data collection stage. So what can you do about that? Well, begin with pre-training audits to assess representation in your base datasets. This baseline measurement is essential for tracking improvement and identifying specific sampling needs before training begins. During training, implement dynamic sampling where underrepresented groups are upsampled to ensure the model does not optimize
>
> **[4:44](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/the-power-of-sampling-data?u=76281980&t=284)** for majority patterns only. This prevents the mathematical amplification of biases we discussed in earlier videos. After deployment, conduct regular sampling updates by using user data and feedback to identify representation gaps that weren't evident in your initial sampling. This creates a continuous improvement cycle where your sampling strategy evolves as you learn more about how your model performs across different groups. Representative sampling isn't just a technical step, it's a fundamental step to addressing the bad data in, bad data out problem at its source. By categorizing these approaches into quantitative methods, qualitative considerations, and lifecycle implementation, we can systematically improve representation in AI. Remember, counterfactual techniques are powerful for identifying biases, but representative sampling helps prevent those biases from forming in the first place. Together, these approaches move us towards AI systems that serve diverse populations fairly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (2)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Data validation and evaluation](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/data-validation-and-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/data-validation-and-evaluation?u=76281980&t=1)** - We've talked about counterfactual modeling and representative sampling as powerful strategies for improving AI fairness. But to apply these tools effectively, we need a systematic approach to classify the underlying data issues we are trying to solve. Think about it like a doctor diagnosing an illness. Before prescribing treatment, they must correctly identify the specific condition. Similarly, before we can fix AI data problems, we need to have a classification framework that pinpoints exactly what's going wrong. So let's develop that diagnostic framework and match specific interventions to each category of a data issue. Begin by classifying representational bias issues, which are perhaps the most commonly discussed data problems in AI. First, we have demographic underrepresentation, where specific groups appear less frequently in our training data, which makes the model less capable of handling these cases. Remember Common Crawl's 47% English content? This creates fundamental representational gaps for non-English languages. Second, there's stereotypical association bias, where certain attributes are disproportionately linked
>
> **[1:38](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/data-validation-and-evaluation?u=76281980&t=98)** to specific groups. Third, we face erasure bias, where some groups are systematically missing from certain contexts entirely. This is distinct from simple underrepresentation. It's not just about having fewer examples, but having zero examples in particular settings, making the model unable to generate or recognize certain combinations at all. The appropriate mitigation strategy varies by bias type. Demographic underrepresentation requires stratified sampling techniques that we've already talked about. Stereotypical associations need counterfactual data augmentation. And erasure bias often requires synthetic data generation to fill gaps. Next, let's classify contextual integrity problems, issues where the data lacks necessary context. First, there's decontextualized content, where training data contains statements without the surrounding information needed for proper interpretation. So, for example, a quote taken out of context might appear in training data without clarification that it was criticized rather than endorsed. Then we face temporal context issues,
>
> **[3:14](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/data-validation-and-evaluation?u=76281980&t=194)** where data from different time periods is mixed without clear markers. This leads to models that confuse historical perspectives with contemporary standards. Also, there's cultural context loss, where culturally specific references might lose their meaning when processed by models trained predominantly on data from dominant cultures. Finally, let's examine [[Data Quality]] problems related to distribution and volume. To start, there's a long tail representation problem, where rare but important phenomena appear too infrequently for models to learn properly. Unlike demographic underrepresentation, this affects even majority groups when dealing with uncommon situations. Next, we face redundancy saturation, where certain patterns appear so infrequently that they seem to overwhelm even more diverse examples. This was illustrated by our mathematical amplification discussion. Models don't just preserve biases in the data, they can amplify them through repeated reinforcement. Finally, there's a completeness problem, where entire categories of information
>
> **[4:48](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/data-validation-and-evaluation?u=76281980&t=288)** are systematically missing from the dataset. This classification framework transforms our approach to data issues from ad hoc fixes to systematic diagnosis and treatment. By correctly categorizing the specific type of data problem, we can apply targeted interventions that address the root cause. This classification approach helps you move beyond generic calls for more diverse data to precise interventions based on the exact nature of your data quality problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (2)
> **Analogies:** for example (1)
> **Speakers:** - we (1)

#### [Overview of stratified sampling](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/overview-of-stratified-sampling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/overview-of-stratified-sampling?u=76281980&t=1)** - Let's chat more about stratified sampling, a powerful technique that ensures representation across relevant subgroups in your training data. At its core, stratified sampling is about dividing your population into distinct subgroups, or strata, and sampling from each stratum separately. When applied to AI training data, this seemingly simple technique can dramatically reduce the biases we've discussed so far. Stratified sampling offers several compelling advantages for reducing bias in [[Generative AI]]. More importantly, it guarantees representation of all identified subgroups in your training data. This prevents erasure bias, the complete absence of certain demographics that we covered earlier. It also enables controlled representation ratios. Rather than accepting whatever imbalances exist in your source data, like Common Crawl's 47% English skew, stratified sampling lets you deliberately address representation levels, whether for a proportional representation or to implement the equity-based sampling. Beyond representation, stratified sampling produces more consistent model performance across different demographics
>
> **[1:34](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/overview-of-stratified-sampling?u=76281980&t=94)** by ensuring sufficient data for each subgroup. This addresses a common problem of models performing well for majority groups but failing for underrepresented populations. Another critical benefit is the ability to implement nuanced sampling strategies. You can apply different sampling techniques within different strata, allowing for specialized approaches when needed while maintaining overall data coherence. While powerful, stratified sampling faces implementation challenges that require thoughtful solutions. A significant challenge is defining appropriate strata. Oversimplified categories risk missing important differences between groups, while too many strata create sparse data problems. The solution lies in evidence-based stratification, using research and community input to identify meaningful categories rather than arbitrary divisions. Another difficulty is interdependence between strata and features. If your strata correlate strongly with features the model should learn independently, you risk creating artificial associations. Address this through careful feature analysis and potentially using techniques
>
> **[3:09](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/overview-of-stratified-sampling?u=76281980&t=189)** like adversarial debiasing during training. The dynamic nature of appropriate stratification presents ongoing challenges. Categories that seem relevant today may change as societies evolve. Implement regular review processes for your stratification approach, consulting with different stakeholders to ensure your categories remain relevant and respectful. Many practitioners also struggle with incomplete demographic information while implementing stratified sampling. In such cases, consider multiple imputation techniques or semi-supervised approaches to make the best use of partially labeled data. Stratified sampling transforms our approach to fairness from hopeful to systematic. By ensuring balanced representation across carefully selected groups, we address the root causes of model bias rather than just treating the symptoms. As you've seen throughout this course, truly fair AI isn't created through one single technique. Stratified sampling works best as a part of a comprehensive approach, combined with counterfactual testing, representative deployment evaluation, and ongoing monitoring.
>
> **[4:44](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/overview-of-stratified-sampling?u=76281980&t=284)** By implementing these practices together, we move closer to generative AI that serves all users equitably, producing content that authentically reflects the diversity of human experience rather than amplifying historical biases in our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2)
> **CLI Commands:** make (1)
> **Cross-References:** we covered (1)
> **Speakers:** - let (1)

#### [Sampling based on demographics](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/sampling-based-on-demographics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/sampling-based-on-demographics?u=76281980&t=1)** - Consider Safiya Noble's example from "[[Algorithms]] of Oppression," that we discussed earlier where search results for black women revealed harmful stereotypes. This wasn't just a technical failure, it represented a fundamental and ability of the system to authentically reflect diverse human experiences. Today we'll analyze why demographic-based sampling is essential for creating AI that can generate content relevant to all users, not just majority populations. So let's examine structured approaches to demographic sampling that push past tokenism to meaningful representation. First, proportional demographic sampling ensures that training data will flex actual population distributions. However, this approach alone can be problematic if certain groups face historical marginalization proportional sampling merely preserves these inequalities. Instead, consider equity based sampling, which deliberately over samples, historically underrepresented groups to correct for historical imbalances. This isn't about artificial imbalance, but recognizing that certain perspectives have been systematically excluded
>
> **[1:33](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/sampling-based-on-demographics?u=76281980&t=93)** from our data sets. Next, implement cultural competence sampling, which focuses not just on demographic markers, but on capturing authentic cultural context. This means collecting data that represents how different communities actually communicate rather than how they're talked about by others. One of the greatest challenges in demographic sampling is addressing intersectionality the way multiple demographic factors combine to create unique experiences. Traditional approaches often sample for individual demographic variables like gender, age, race, all independently. But this misses how these factors might interact. A black woman's is experience isn't simply a combination of a black man and a black woman's experience. They're unique and that requires specific representation and training data. To address this, implement matrix-based intersectional sampling that deliberately captures combinations of demographic factors. This means not just ensuring you have data from different racial groups and different gender identities, but specific combinations of these identities. This approach directly counters what we previously identified as erasure bias,
>
> **[3:07](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/sampling-based-on-demographics?u=76281980&t=187)** where certain intersectional groups completely disappear from particular context in the training data. By deliberately sampling for these intersections, we ensure the model can generate authentic content for all identity combinations. Lastly, measuring the effectiveness of demographic sampling requires analyzing the model's outputs across different scenarios. Develop demographic probe sets, standardized prompts designed to test how your model performs when asked to generate content related to different demographic groups. This should include both explicit requests, such as write a story about a Filipino scientist, and implicit scenarios where demographics aren't specified, but the model must make choices. Implement comparative output analysis to examine how your models is tone, complexity, and content vary when describing different demographics. This directly builds on a counterfactual approach. If your model consistently generates more professional descriptions for certain groups and more casual descriptions for other groups, your demographic sampling has gaps. Finally, conduct regular demographic auditing with diverse reviewers who can identify subtle authenticity issues
>
> **[4:42](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/sampling-based-on-demographics?u=76281980&t=282)** that automated metrics might miss. The goal isn't just statistical representation, but authentic representation, capturing the lived experiences of diverse populations. Demographic based sampling isn't just about avoiding harmful biases. It's about creating AI that can authentically reflect the full spectrum of human experience. When it thoughtfully, it ensures that [[Generative AI]] doesn't simply reproduce the dominant perspectives found in Common Crawl in similar data sets, but genuinely represents diverse voices and contributes to more inclusive technological futures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Analogies:** such as (1)
> **Speakers:** - consider (1)

#### [Random sampling within stratified groups](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/random-sampling-within-stratified-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/random-sampling-within-stratified-groups?u=76281980&t=1)** - When we talked about stratified sampling, we explored how dividing data into different subgroups ensures representation across key demographic dimensions, but for [[Large Language Models (LLM)|large language models]], also known for LLMs, stratified sampling alone isn't the complete story, so let's uncover how introducing randomness within these carefully structured groups creates a powerful hybrid approach that addresses the unique challenges of training modern LLMs. Random sampling within stratified groups is particularly valuable for LLMs because these models must process vast text corpora while maintaining both representative coverage and linguistic diversity. This ensures demographic and topical balance while capturing the natural variation in language used within each group. It creates training data that helps LLMs generate text that is both representative and stylistically diverse. For LLMs specifically, this hybrid sampling approach significantly impacts generalization capabilities in ways that address persistent challenges in language model development. In LLM training, maintaining structure at the group level ensures the model learns consistent language patterns across domains, like technical writing,
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/random-sampling-within-stratified-groups?u=76281980&t=96)** creative fiction, and conversational text. This prevents the common problem where LLMs perform excellently on mainstream content, but produce awkward or inaccurate text for specialized domains or cultural context. Random sampling within stratified groups also has profound effects on the originality and quality of generated text, addressing several critical limitations that plague current systems. When LLMs train on strictly stratified data without randomness, they develop overly formulated writing patterns for different content categories. This leads to generated text that follows predictable templates, business emails that all sound identical, or creative writing that follows the same narrative arcs. This is an example of LLM homogenization. Random sampling within these categories exposes the model to stylistic diversity that translates into more original outputs. This directly addresses the verbatim memorization problem in LLMs, where models reproduce exact passages from their training data. Implementing this for LLMs requires strategies that address the scale and complexity of language model training, content domain, such as scientific, journalistic, creative, instructional, language and dialect, publication era,
>
> **[3:11](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/random-sampling-within-stratified-groups?u=76281980&t=191)** to ensure temporal diversity and text complexity and reading level. Within these stratified groups, you can implement intelligent random sampling techniques that optimize for language learning. For massive LLM training runs, you can conduct dynamic adjustment of sampling rates throughout training. Early epochs might use more balance sampling across strata to establish foundational knowledge, while later epochs could increase the randomness to improve creativity and reduce overfitting. After each significant training phase, test the models outputs across diverse prompts, specifically measuring factual consistency within domains, stylistic variation within content categories, novel combination generation, which is evaluating if the model creates new ideas rather than remixing existing content, and performance on targeted counterfactual challenges. For large language models, random sampling within stratified groups represents a sophisticated balance between ensuring comprehensive language coverage and fostering linguistic creativity. This addresses the dual challenges that have plagued LLM development, representational gaps that lead to performance disparities across content areas, and the tendency toward formulaic predictable outputs. By carefully structuring
>
> **[4:46](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/random-sampling-within-stratified-groups?u=76281980&t=286)** the major categories of their training data while introducing controlled randomness within those categories, developers create systems that can generate text that feels both appropriate for its context and refreshingly original.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2)
> **Env Vars:** llm (4)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - when (1)

#### [Testing model performance across diverse samples](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/testing-model-performance-across-diverse-samples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/testing-model-performance-across-diverse-samples?u=76281980&t=0)** - We've covered sampling strategies for training fair and creative language models, but now, we face a crucial question. How do we know if our efforts actually worked? Well, let's examine how to systematically test model performance across diverse samples, revealing hidden biases that might otherwise go unnoticed. Effective testing requires more than just casual observation. It demands structured protocols that methodically compare outputs across different demographic and contextual dimensions. This systematic approach transforms vague concerns about fairness into actionable insights for model improvement. When analyzing generated content across sample groups, focus on these key indicators that often reveal underlying biases. First, examine attribute associations, which is how consistently the model connects certain qualities with particular groups. Does your model associate leadership terms more frequently with specific genders or backgrounds? These patterns often indicate embedded biases that sampling strategies haven't fully addressed. Pay close attention to completion differences, variations in how the model finishes.
>
> **[1:33](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/testing-model-performance-across-diverse-samples?u=76281980&t=93)** Similar prompts when only demographic elements change. A counterfactual testing approaches are particularly valuable here, creating controlled experiments that isolate the effect of changing just one demographic variable. Monitor linguistic sophistication across groups, including vocabulary range, syntactic complexity, and reasoning-depth. Models often display higher sophistication when discussing majority groups, a subtle form of bias that can significantly impact [[User Experience (UX)|user experience]]. Effective testing leads directly to targeted fine-tuning interventions. Rather than general retraining. Use your test results to implement specific adjustments. For attribute association biases, implement targeted counterfactual fine-tuning that deliberately emphasizes examples contradicting the problematic associations. This creates a correction signal focused precisely on the identified issue. Address completion and consistencies through specialized [[Prompt Engineering]] training that teaches the model to maintain consistent reasoning patterns regardless of demographic context. Essentially, training it to recognize when it's deviating from fair treatment.
>
> **[3:05](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/testing-model-performance-across-diverse-samples?u=76281980&t=185)** For sophisticated disparities, augment training data for underserved groups in context for testing revealed deficiencies. This targeted strategy is far more efficient than general oversampling. Systematic testing across diverse samples isn't just a final quality check. It's an integral part of [[Responsible AI]] development that should inform each iteration of your model. By identifying specific patterns of bias or inconsistency, you create the feedback loop necessary for continuous improvement. Remember that no one single sampling strategy, no matter how sophisticated guarantees perfect fairness, only through rigorous ongoing testing can we identify where our models fall short and apply the precise interventions needed to create AI systems that truly serve all users equitably.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Prompt Engineering]] (1), [[Responsible AI]] (1)
> **Speakers:** - we (1)

#### [Exercise: Design sampling criteria with RAI principles](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-design-sampling-criteria-with-rai-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-design-sampling-criteria-with-rai-principles?u=76281980&t=0)** - [Instructor] Hello learners. Today, we're going to be going over how you can do data sampling in order to make sure that your models don't have bias within them. So there's going to be a couple of things that I want to call to attention to you. We are running this one in [[Google]] Colab. So for those of you who don't know what Google Colab is, it is a way for you to be able to connect to Google's platform and be able to take advantage of all of its GPUs. It's really great because it means that this is going to be able to run much faster than if we were running things in VS Code. If you do not want to use Google Colab, you do not have to. You can go ahead and run things in VS Code, but this allows us to run things much faster. It's much, much faster. Pretty cool. So, there's going to be a couple of things I want to call to y'all's attention. Within the folder for this chapter, you're going to have a requirements.txt file. If you are running things through VS Code, you don't have to worry about this, you can go ahead and skip ahead. But if you are running things in Google Colab, make sure that you attach your requirement.txt file from this chapter into this section here. You're going to be doing that by clicking on this button. You have the ability to go into your folder. So let's go ahead and walk through that very quickly. You're going to want to get this open, you're going to want to go down to our chapter, and then you're going to click on this,
>
> **[1:35](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-design-sampling-criteria-with-rai-principles?u=76281980&t=95)** and you're going to attach it. We already have it attached, so we should be good, but make sure you do that, all right? Let's get into things. So of course you got to make sure that you have your [[Python (Programming Language)|Python]] 3.8 installed. Then you're going to want to call on your requirements.txt file. It's going to do all your wonderful collecting of things. This might take a little bit because we're going to be, as you all can see, working with some cuda. So you're going to want to give your time to do that on Google Colab. We should be pretty quick. Then we can go ahead and start digging into things. There's a couple of things that we're pulling in here. If you all see transformers here, those of you who are big fans of [[Hugging Face]] will get pretty excited. Transformers is part of the Hugging Face packages and allows for you to pull on all of the open source AI models that they have on Hugging Face. Underneath here, we have a class that is our responsible data sampler. There's a couple of things that I want to call out to you all in this sampler. So you have the ability here, we're going to be pulling in some different demographics. We're weighing them to pull in certain things for when we create a synthetic dataset. We're making sure that there is an equal amount of representations from female, male, and non-binary. Same thing for age groups. These weights are a little bit more consistent with what we see in the world versus what we would see in these models. So you're able to pull those things in. Then you want to pull in some different type
>
> **[3:08](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-design-sampling-criteria-with-rai-principles?u=76281980&t=188)** of sentiment things here. Those labels are going to be very important. So this creates a synthetic dataset for us so that we can begin to see how we can analyze what might be happening with our metrics when it comes to bias. So, after we've done that, we can get into the code implementation. You all should have seen this before. This is our natural language toolkit. This is a great package. It has all the [[Microsoft Word|word]] embeddings that you need. You'll be pulling in that responsible data sampler with our synthetic data. We're creating a synthetic dataset here. You have the ability to also analyze datasets that might be online, but for this case, we're like, you know what, let's look at some samples based off of what we already have within our NLTK data set. And then we want to begin to see how things kind of shake up when we're talking about bias. If we go ahead and look through this, we'll see a couple of things. So, because we created this synthetic dataset, there is a level at which we're able to kind of even things out some. But you're still able to get that output that will be very important on whatever dataset you're looking at. So this plot is able to show us, when we look at our demographics, how many women are part of the dataset, how many men, from what regions are they from, what language, what's the language distribution?
>
> **[4:42](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-design-sampling-criteria-with-rai-principles?u=76281980&t=282)** When you run something like this against your large language model dataset, you will be able to get all the information that you need on what distribution is for your group. It's very important. It allows you to have a sense of your representative sampling in your dataset, so that way when you're moving forward and you want to make sure you have accurately mitigated bias, you can feel confident at your starting space. This will provide for you a baseline, and that's so important to make sure that our models are more fair. All right, thank you everybody, have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[Hugging Face]] (3), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** colab (5), vs code (3)
> **CLI Commands:** make (6), python (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **File Paths:** requirements.txt (2), requirement.txt (1)
> **Env Vars:** nltk (1)
> **Versions:** python 3 (1)
> **UI Navigation:** click on (1)


### 6. Post-Training Model Constraints

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to model constraints to control bias](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-model-constraints-to-control-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-model-constraints-to-control-bias?u=76281980&t=1)** - Even with the best training approaches, models can still produce harmful or biased outputs in unexpected scenarios. This brings us to a crucial component of [[Responsible AI]], post-training constraints. Model constraints serve as guardrails that shape AI behaviors after training is complete. They represent a critical acknowledgement that we cannot anticipate every scenario during training, and that responsible AI requires ongoing governance throughout a system's operational life. So let's look at how these constraints connect to our broader ethical obligations in AI development. Post-training constraints generally fall into several categories, each addressing different aspects of ethical AI. To start us off are output filters. These analyze generated content before it reaches users, blocking or flagging potentially harmful material. These range from simple keyword block lists to sophisticated classifiers that detect subtle [[Forms]] of bias or harmful content. While seemingly straightforward, these embody ethical judgements about what content should or shouldn't be permitted. Next are prompt-based guidance systems, which use specialized instructions that direct model behavior towards certain ethical outcomes. Constitutional AI approaches, for instance,
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-model-constraints-to-control-bias?u=76281980&t=96)** embed ethical principles directly into system prompts, guiding models to reject harmful requests, while explaining their reasoning. Then there are parameter-level interventions. These modify specific model weights to constrain undesirable behaviors while preserving general capabilities. These surgical approaches target particular biases without compromising overall performance, reflecting our ethical commitment to addressing specific harms. Implementing constraints also requires careful balance between multiple ethical considerations. First, constraints must balance safety against utility. Overly restrictive constraints can render AI systems unusable for legitimate purposes, while insufficient boundaries may allow harmful outputs. This tension needs ongoing adjustment based on actual world impact assessments. Second, constraints and body value judgments about what constitutes harmful or biased content. When we design these systems, we are making explicit decisions about whose values are prioritized and protected. Responsible AI development acknowledges these judgments and seeks diverse input to ensure constraints reflect broad ethical perspectives rather than narrow interest.
>
> **[3:12](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-model-constraints-to-control-bias?u=76281980&t=192)** Finally, constraints must consider transparency and user agency. Users should understand when and how AI outputs are constrained with appropriate mechanisms for feedback when constraints produce unintended consequences. Evaluating constraint effectiveness requires looking beyond technical metrics to broader ethical outcomes. Rather than measuring solely how many potential harmful outputs are blocked, assess whether constraints reduce actual world harm while preserving system benefits. This requires ongoing monitoring of both blocked and permitted content to identify patterns of failure or success. Consider whether constraints address specific symptoms or underlying problems. Blocking specific words without addressing conceptual biases may simply lead models to find alternative expressions for problematic ideas. Effective constraints target root causes rather than surface manifestations. Finally, evaluate constraints through the lens of procedural fairness. Do they apply consistently across different user groups and use cases? Do they reflect diverse perspectives on what constitutes harmful content? These questions connect technical implementation directly
>
> **[4:49](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/introduction-to-model-constraints-to-control-bias?u=76281980&t=289)** to ethical principles of justice and inclusivity. Model constraints represent more than technical safeguards. They embody our commitment to ongoing ethical governance throughout an AI system's lifecycle. By acknowledging that our training data and processes will never perfectly encode all ethical considerations, constraints provide an essential layer of protection against unforeseen harms. As AI capabilities continue to advance, the thoughtful application of constraints becomes increasingly important. Rather than viewing them as limitations on model potential, we can recognize constraints as expressions of our values, ensuring that a powerful AI system remains aligned with human wellbeing, dignity, and fairness, even as they operate in novel and unexpected context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (3), [[Forms]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - even (1)

#### [Power of flagging, pruning, and nudging](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/power-of-flagging-pruning-and-nudging?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/power-of-flagging-pruning-and-nudging?u=76281980&t=1)** - So we've just established that post-training guardrails are essential for ethical AI systems. Now, we can dive into three specific constraint techniques that work in complimentary ways to reduce bias. Flagging, pruning and nudging. These represent different approaches to the same problem and together, they form a comprehensive toolkit that addresses bias at multiple levels of model operation. First, flagging systems identify potential bias content without necessarily blocking it. They're an awareness mechanism for both the human reviewers and users, while highlighting outputs that may contain problematic elements. Modern flagging implores specialized classifiers that recognize subtle patterns of bias across different dimensions, going far beyond simple keyword matching. The most effective systems include confidence levels and explanations, providing context about why content raise concerns and with what certainty. While flagging identifies bias, pruning actively removes problematic elements from the model. This surgically modifies specific ways to eliminate undesired associations while preserving general capabilities. Pruning begins by identifying neurons
>
> **[1:37](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/power-of-flagging-pruning-and-nudging?u=76281980&t=97)** or attention patterns that strongly activate when generating bias content. Once isolated, these can be dampened or removed. Unlike complete retraining, pruning makes targeted adjustments to existing models with minimal computational resources. Now, nudging takes a different approach. It subtly steers model outputs towards a more balanced alternative rather than blocking elements. This creates a preference for fairer outputs while maintaining natural language flow. Effective nudging approaches include control generation, which address output probabilities to favor certain types of completions and guided decoding. This intervenes during generation to redirect potentially biased paths. Unlike obvious interventions that users might perceive as censorship, nudging produces subtle improvements while preserving fluency and helpfulness. These three techniques work best in combination. For example, a comprehensive bias management system might implore flagging as an early warning system, pruning for persistent structural biases and nudging to handle edge cases and provide default guidance. This layered approach creates defense in depth.
>
> **[3:14](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/power-of-flagging-pruning-and-nudging?u=76281980&t=194)** Flagging catches what pruning misses, pruning addresses what nudging can't correct and nudging smooths out edges that more aggressive interventions might create. Regular evaluation across diverse test case remain essential as no single mechanism works perfectly across all scenarios. Flagging, pruning and nudging represent increasingly sophisticated approaches to managing bias and help us create AI systems that actively work towards fairer representations while maintaining creativity and utility.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - so (1)

#### [Using human-in-the-loop tools](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980&t=1)** - Throughout our exploration of model constraints, we've examined various approaches to improving AI outputs. But perhaps the most powerful constraint remains the human mind itself. Human-in-the-loop technologies directly incorporate human judgment into the AI generation process while creating hybrid systems that combine machine efficiency with human discernment. Let's assess how our human intervention transforms AI-generated content, examining quality improvements across multiple dimensions. By understanding these patterns, we can design more effective collaboration between humans and AI systems, optimizing when and how human input must be incorporated. When we compare AI-generated content before and after human intervention, several consistent patterns emerge across different content types. For factual accuracy, AI often generates plausible sounding but incorrect information or what we call hallucinations. Human reviewers provide the greatest value by verifying factual claims against reliable sources, correcting subtle inaccuracies that might otherwise go undetected. Experience shows us that even brief human fact-checking can significantly reduce factual errors
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980&t=96)** in complex domains like medical or legal content. For coherence and logical flow, AI systems may produce content that makes sense in isolated segments, but contains contradictions or non-sequiturs when viewed as a whole. Human reviewers [[Microsoft Excel|excel]] at identifying these higher-level structural issues, improving overall coherence with relatively minimal edits that focus on transitions and logical connections rather than wholesale rewrites. For contextual relevance, humans significantly enhance AI content by aligning it with specific audience needs and cultural context. This is particularly evident in content targeting specialized professional communities or diverse cultural backgrounds where human reviewers can substantially increase relevance through relatively modest adjustments. When examining AI-generated content about different demographic groups, human reviewers consistently identify subtle biases that automated fairness metrics might miss. These include imbalanced depth of coverage, differing levels of agency attributed to characters or subjects, and varying emotional tones that automated sentiment analysis often fail to capture accurately.
>
> **[3:13](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980&t=193)** The most effective fairness interventions use diverse reviewer panels representing multiple perspectives. Observations from industry practices suggest that panels with very demographic and professional backgrounds identify substantially more potential fairness issues than homogenous reviewer groups, even when all reviewers are specifically instructed to look for bias. Interestingly, human AI collaboration creates unique improvement patterns. While AI might excel at consistency and can flag potential issues based on learned patterns, humans excel at contextual judgment determining when difference is appropriate versus when it represents harmful bias. This complimentary relationship produces more nuanced content rather than just using one or the other alone. The most effective feedback loops categorize human edits by type like factual correction, coherence improvement, fairness enhancement, and can add a level of severity that allows teams to identify recurring patterns. This prioritizes model improvements and refines constraint systems to address the most critical issues. Regular comparative evaluation is essential
>
> **[4:47](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980&t=287)** measuring both the frequency and impact of human interventions over time. As models improve, the nature of human contributions should approve from basic error correction toward more nuanced enhancement of style, context sensitivity, and cultural appropriateness. Finally, organizations should implement protocols for feeding human improvements back into model training. This involves careful consideration of which human edits inform model updates versus which represents one-off contextual adjustments that might not generalize well to other scenarios. Human-in-the-loop approaches represent more than just a pragmatic compromise while we wait for better AI, they reflect a fundamentally different philosophy about how AI should function in society. Rather than pursuing fully autonomous systems that might replicate human judgment, these hybrid approaches leverage the complimentary strengths of human and machine intelligence. More importantly, human-in-the-loop systems embody a model of technological progress that keeps human values and judgment at the center, ensuring that as AI capabilities advance, they remain aligned with human needs, context,
>
> **[6:22](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/using-human-in-the-loop-tools?u=76281980&t=382)** and ethical considerations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Speakers:** - throughout (1)

#### [Exercise: Model constraint pipeline](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-model-constraint-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-model-constraint-pipeline?u=76281980&t=0)** - [Instructor] Hello hello. Hi everybody. We are about to get into something pretty fun, and that is model constraints. So as you talked about, it's very important to use model constraints for post-training situations. These model constraints, there's multiple different types. You can use flagging, you can use pruning, you can use nudging. What we're going to do today is we're going to examine what it looks like if you have model constraints that show whether or not there might be information that is safe, so that's good. Sensitive, okay, we should probably look at this some more, or potentially harmful. Today is going to be slightly different than our last runs because in a post-production environment, it can be very important to use scripts as opposed to notebooks. Now, I know some people hearing this might say, "But I love putting notebooks into production." Well, notebooks can be very heavy, they're not as lightweight, and so it can be very important, especially when you're working with an engineering team to make sure that you're running these post-model training scripts in script form. In order to do that today, we're going to have to go into the proper folder in order to get into our script. So, what we are going to do is we are going to go into our post_training_model_constraints folder.
>
> **[1:37](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-model-constraint-pipeline?u=76281980&t=97)** So once you cd into there, then we can go ahead and run things. So let me explain what just happened here, because everything already ran, it was pretty fast, right? This is how fast you want your latency to be when you're working in a production environment. So let's walk very quickly into what just happened. So you're going to use [[Python (Programming Language)|Python]] 3. If you have 3.8 plus version of Python, you're going to call on the file, which is called constraint_pipeline. And it ran through a bunch of test cases. For those of you who have a [[Quality Assurance]] background, a background running unit test, this should look very similar to what you're used to here. We had a very important call here, which was looking at our AI output constraint pipeline. And that is what ran. So the first test case that we did, it ran through looking at the different content. It was able to quickly identify, hey, this is AI-generated content. And so once it identified that it was AI-generated content, very quickly popped out for us and validated that that is in fact correct. The second test case, we were able to identify that there might be some content in here that doesn't include the required disclaimer. So, then we see, you know what? That's a constraint violation. The required disclaimers are missing.
>
> **[3:10](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/exercise-model-constraint-pipeline?u=76281980&t=190)** This is very important. This next one, able to correctly identify, okay, hey, this has some AI-generated content. So we've been able to correctly, go ahead and validate this one here. You know what? There's some harmful and hateful speech up in here. You know, this is AI-generated, but oof, this doesn't look too good. Then we're able to get, you know what, this content, it exceeds your toxicity threshold. As you all can see here, we have this toxicity threshold. It runs with a float, which means you can run it by percentages. And then lastly, we have test case five where we say, you know what? We want to have the minimum length of our AI information to reach a certain amount. And this content, it was a little bit too short, and also it doesn't have the acquired disclaimers. So as you all can see, this is very powerful when we're talking about running things in a post-production context. It's very fast, which is exactly what you would want low latency in a post-production context. It runs like unit test, which is also something that you want, and it gives the engineers exactly the information that they need to know why it is that the AI-generated content is failing. Awesome, I hope that you all enjoy running this, and we'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Quality Assurance]] (1)
> **CLI Commands:** python (2), make (1), cd (1)
> **Code Identifiers:** post_training_model_constraints (1), constraint_pipeline (1)
> **Versions:** python 3 (1), 3.8 (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 7. Case Study: Breakdown of a GenAI Story

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore an example of GenAI output](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/we-explore-an-example-of-genai-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/we-explore-an-example-of-genai-output?u=76281980&t=1)** - When you hear New York, you might likely picture skyscrapers and business districts. But what about Lagos or Mumbai? A University of Michigan study revealed that CLIP, a widely used multimodal AI model shows consistent bias and how it represents different regions. Western cities appear modern and developed, while non-Western locations are disproportionately associated with underdevelopment. This matters because CLIP powers numerous image generation systems using journalism, education, and media. So why am I sharing all of this with you? Well, these biases directly impact how people in places from different regions are represented in AI generated content. Let's continue with our case study. by evaluating CLIP's performance Michigan researchers found the following biases. AI models disproportionately associate wealth and technological advancement with Western countries, while depicting developing regions with poverty and underdevelopment. Occupational biases also prevalent with Western based jobs and professional roles given more prominence in AI generated imagery. AI models overrepresented specific cultural norms and aesthetics while sidelining diverse global perspectives and data use to train these models originated largely from
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/we-explore-an-example-of-genai-output?u=76281980&t=96)** wealthier English speaking countries, leading to an imbalance and representation. To combat these biases, the researchers advocated for more diverse training data, which expands our data sets to include underrepresented perspectives and regions. Bias audits and evaluation, this allows us to regularly test AI models for bias in implementing corrective measures. Transparent documentation, which allow us for detailed insights into how AI models are trained and what data sources to use. And lastly, ethical AI development. This encourages AI developers to prioritize fairness and global representation in their models. Now it's your turn. Take what we've explored and apply it to a [[Generative AI]] model of your choice, whether it's CLIP, Dolly, GPT, or another generative AI system. To mitigate bias, you can explore either one or a combination of our explorer techniques. We have counterfactual testing, which systematically alters inputs to see how the model responds in different context. We have stratified sampling techniques, which ensures training data includes diverse, well-represented perspectives across regions, cultures, and socioeconomic backgrounds. And lastly, model constraints. This allows for us to implement fairness aware constraints during model training
>
> **[3:10](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/we-explore-an-example-of-genai-output?u=76281980&t=190)** and inference to reduce bias outputs. As AI becomes an increasingly influential force in shaping narratives representation and decision making, [[Responsible AI]] development is not just an option, it's a necessity. By identifying and mitigating biases through structured evaluation and thoughtful interventions, we take a step towards building AI systems that are more equitable, inclusive, and representative of the diverse world that we live in. In this case study and beyond, think to yourself how will you challenge AI to see the world differently?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Responsible AI]] (1)
> **Env Vars:** clip (4), gpt (1)
> **Analogies:** picture (1)
> **Speakers:** - when (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your XAI learning journey](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/continuing-your-xai-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/continuing-your-xai-learning-journey?u=76281980&t=1)** - Bad data in, bad data out. It's not just a saying, it's the foundation of why AI models go wrong. Imagine seeing biases reinforced because the internet itself is a neutral data source. AI models are not magic. They're just mirrors reflecting the biases we feed them. There are a few things I want you to remember as you continue on your learning journey. First, bias starts at the source. Many AI models are trained on massive internet data sets, Wikipedia, Reddit, Common Crawl, but these aren't evenly distributed. English dominates. Certain perspectives get amplified, and the training data often lacks diversity. Second, mathematical assumptions can make things worse. AI doesn't understand words. It maps them into a space where some words get linked together in ways that reflect real-world stereotypes. This is how we end up with things like queen equals king minus man plus woman, reinforcing outdated gender roles. Third, transparency is key. Bigger models aren't better if they're trained on flawed data. We need responsible curation, better documentation and tools like counterfactual testing to ensure AI works for everyone, not just the loudest voices on the internet.
>
> **[1:36](https://www.linkedin.com/learning/learning-xai-explainable-artificial-intelligence-25369961/continuing-your-xai-learning-journey?u=76281980&t=96)** Finally, we have the tools to build better AI. Bias is not inevitable. With counterfactual testing, better data curation and intentional model design, we can create AI that's more robust, representative, culturally aware, and align with the diverse realities of the world. The challenge isn't just about identifying bias. It's about using the right tools to fix it. To learn more about how to mitigate bias in [[Generative AI]], follow me on my website at [jazmiahenry.com](https://jazmiahenry.com) or on my [[LinkedIn]] page jazmiahenry. AI isn't just about bigger models. It's about creating a better foundation. If we want [[Responsible AI]], we need to rethink how we build it from the ground up. That starts by acknowledging bias testing for it and designing systems that can adapt and improve because the future of AI isn't just about being more powerful, it should be about being more fair.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[LinkedIn]] (1), [[Responsible AI]] (1)
> **CLI Commands:** make (1)
> **URLs:** [jazmiahenry.com](https://jazmiahenry.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - bad (1)


## Instructor

- [[Jazmia Henry]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-xai-explainable-artificial-intelligence-3918466)

## Skills Covered

- Artificial Intelligence (AI)
- AI Literacy

## Path Context

### In [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]
← [[Implementing a Data Strategy for Responsible AI]] | **3 of 7** | [[Responsible AI and Application Development]] →

## Part of

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Implementing Responsible AI Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Artificial Intelligence (AI), AI Literacy
- [[Linkedin Ai Academy Ai 100 1 Demystifying Ai]] — Artificial Intelligence (AI), AI Literacy
- [[Introduction To Artificial Intelligence]] — Artificial Intelligence (AI), AI Literacy
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)