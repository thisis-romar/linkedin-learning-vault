---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: generative-ai-and-llmops-building-blocks-and-applications
url: "https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications"
level: Advanced
updated: 2/26/2024
learners: 104232
skills:
  - Large Language Model Operations (LLMOps)
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFXjydWD3OcVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708641310292?e=2147483647&amp;v=beta&amp;t=3eI1N8YL_ZOR6b0PmPIi9rcnB2ax0CmxgzfgcstY9AI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Manage Your LLMs with LLMOps]]'
next_courses:
  - '[[LLMOps in Practice- A Deep Dive]]'
path_nav: '[{"path":"Manage Your LLMs with LLMOps","position":1,"total":4,"prev":null,"next":"LLMOps in Practice- A Deep Dive"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/software-development
  - skill/large-language-model-operations-llmops
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md)

![Generative Ai And Llmops Building Blocks And Applications](https://media.licdn.com/dms/image/v2/D4E0DAQFXjydWD3OcVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708641310292?e=2147483647&amp;v=beta&amp;t=3eI1N8YL_ZOR6b0PmPIi9rcnB2ax0CmxgzfgcstY9AI)

# Generative Ai And Llmops Building Blocks And Applications

> As large language models are becoming increasingly prevalent in various industries, professionals need to understand how to build, fine-tune, and deploy these models effectively and responsibly. In this course, learn the foundations of building, fine-tuning, and deploying LLMs in real-world applications. Instructors Soham Chatterjee and Archana Vaidheeswaran start with an introduction to LLMs and 

> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications) | Advanced | 104K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [LLMs for industry](#llms-for-industry)
  - [Industry-specific LLMs](#industry-specific-llms)
- [**1. Introduction to LLMs and Their Applications**](#1-introduction-to-llms-and-their-applications) (2 videos)
  - [Understanding LLMs and their evolution](#understanding-llms-and-their-evolution)
  - [Real-world applications of LLMs](#real-world-applications-of-llms)
- [**2. Diving Into LLM Architectures**](#2-diving-into-llm-architectures) (6 videos)
  - [Overview of LLM architectures](#overview-of-llm-architectures)
  - [How LLMs process and generate text](#how-llms-process-and-generate-text)
  - [The building blocks of LLMs](#the-building-blocks-of-llms)
  - [Using a simple LLM](#using-a-simple-llm)
  - [Challenge: LLM for sentiment analysis](#challenge-llm-for-sentiment-analysis)
  - [Solution: LLM for sentiment analysis](#solution-llm-for-sentiment-analysis)
- [**3. Fine-Tuning Strategies for Custom Tasks**](#3-fine-tuning-strategies-for-custom-tasks) (5 videos)
  - [Introduction to fine-tuning for LLMs](#introduction-to-fine-tuning-for-llms)
  - [Step-by-step guide to fine-tuning LLMs](#step-by-step-guide-to-fine-tuning-llms)
  - [Best practices for fine-tuning LLMs](#best-practices-for-fine-tuning-llms)
  - [Challenge: Fine-tune a pre-trained LLM](#challenge-fine-tune-a-pre-trained-llm)
  - [Solution: Fine-tune a pre-trained LLM](#solution-fine-tune-a-pre-trained-llm)
- [**4. Compression Techniques for LLMs**](#4-compression-techniques-for-llms) (5 videos)
  - [Why compress LLMs?](#why-compress-llms)
  - [Introduction to quantization and pruning](#introduction-to-quantization-and-pruning)
  - [Hands-on: Implementing compression in LLMs](#hands-on-implementing-compression-in-llms)
  - [Challenge: Quantize a LLM](#challenge-quantize-a-llm)
  - [Solution: Quantize a LLM](#solution-quantize-a-llm)
- [**5. Prompt Engineering for Effective LLM Communication**](#5-prompt-engineering-for-effective-llm-communication) (5 videos)
  - [What is prompt engineering?](#what-is-prompt-engineering)
  - [Best practices for effective prompt engineering](#best-practices-for-effective-prompt-engineering)
  - [Types of prompt engineering](#types-of-prompt-engineering)
  - [Challenge: Prompting LLMs to generate text](#challenge-prompting-llms-to-generate-text)
  - [Solution: Prompting LLMs to generate text](#solution-prompting-llms-to-generate-text)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [LLMs for industry](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/llms-for-industry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/llms-for-industry?u=76281980&t=0)** - [Instructor] LLMs are swiftly transforming how industries operate, from enhancing customer service to streamlining operation and driving innovation. Mastering LLM is no longer optional, it is essential. This course will provide the tools and knowledge to put you ahead of the curve. Learn the nuances of compressing these vast models without losing their capabilities, and master the art of [[Prompt Engineering]] a technique that molds LLM into specific application. By the end of LLM Ops part one, you will walk away with not just theoretical knowledge, but practical skills to build, fine tune, and deploy industry specific LLMs. Ready to shape the future, dive in and be a part of the LLM revolution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1)
> **Env Vars:** llm (4)
> **Speakers:** - [instructor] (1)

#### [Industry-specific LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/industry-specific-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/industry-specific-llms?u=76281980&t=0)** - [Instructor] Hello, everyone. Today, we'll be exploring an exciting trend in the rise of industry-specific [[Large Language Models (LLM)|large language models]], or LLMs. These models aren't just theoretical. They're becoming a reality, actively pursued by AI researchers and industry professionals. We are actively moving towards a world where each industry would have its own LLM. Why? Because they offer tailored solutions that can address unique challenges within specific industries. Imagine a healthcare-focused LLM expediting drug discovery, while a finance-oriented model unraveling complex investment strategies in the blink of an eye. Fascinating, isn't it? But it's not just about practical applications. These LLMs have another advantage. They can reduce bias and trust issues. When trained on curated, clean data, an industry-specific LLM can avoid misinformation, which is especially crucial in areas like healthcare. However, creating these models isn't a walk in the park. It requires access to large, specialized datasets and focused research efforts. Case in point, BloombergGPT, a 50-billion parameter LLM trained on [[Financial Data]], outperforms far larger general LLMs on financial tasks.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/industry-specific-llms?u=76281980&t=97)** With LLMs that can understand industry-specific jargons, dynamics, and nuances, businesses can benefit from far more accurate and relevant insights. That's the promise of industry-specific LLMs. With every leap in technology, there are hurdles to cross, in this case, ethical implications, [[Privacy]] concerns, and potential monopolies. The question is whether this will democratize AI or widen the gap between tech giants and small players. The advent of industry-specific LLMs marks a promising yet challenging frontier in AI. Its potential to revolutionize industry is immense. However, harnessing this potential requires technological innovation and careful consideration of ethical and societal impacts. Whether you are an AI researcher or an industry professional or a tech enthusiast, this is a space to watch. The answers to the questions we raise today will shape the future of AI and its influence across all industry. Let's get started with our amazing course, which will make us understand how to bring such systems to a reality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Financial Data]] (1), [[Privacy]] (1)
> **Env Vars:** llm (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to LLMs and Their Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding LLMs and their evolution](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/understanding-llms-and-their-evolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/understanding-llms-and-their-evolution?u=76281980&t=0)** - [Instructor] Hello, everyone. Welcome to our exploration into the world of [[Large Language Models (LLM)|large language models]] and their incredible evolution that has reshaped the [[Natural Language Processing (NLP)|natural language processing]] landscape. Before we dive deep into the technicalities, let's kick things off on a lighter note. Here's a comic strip to give you a glimpse of the exciting journey ahead. Meet our friendly guides who will accompany us throughout the world of LLMs making this learning experience both educational and entertaining. Before 2017, recurrent [[Neural Networks]] or RNNs and convolution neural networks or CNNs were the front runners for handling sequence data. RRNs useful for context-based tasks. On the other hand, CNNs [[Microsoft Excel|excel]] in parallel input [[Data Processing]]. RNNs often struggle with maintaining long sequence context due to vanishing gradient problem. On the other hand, CNNs excelled in parallel input data processing, but needed to catch up in capturing temporal dependencies. Enter tokenization. RNNs and CNNs required considerable data pre-processing and tokenization was essential step. Think of it as chopping a sentence into bite-sized pieces or [[Tokens]] for the model to analyze sequentially. Understanding tokenization is a key
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/understanding-llms-and-their-evolution?u=76281980&t=97)** to grasping how large language models process language. In 2017, the game changer arrived, the transformer model. Like CNNs, it processes all tokens in parallel and maintains sequences like RNNs. The spotlight feature is the attention mechanism that weighs each token's relevance in the context, giving the model a new level of nuance in understanding language context. In 2018, OpenAI introduced the first generative pre-trained transformer or GPT. Trained unsupervised on a large corpus of text, GPT's primary goal was to predict the next [[Microsoft Word|word]] in a sentence. The new ability allowed GPT to generate coherent and contextually relevant sentences. The progression of GPT was rapid and transformative. In 2019, GPT-2 was introduced, an enhanced model, bigger and equipped with more parameters. It was initially not released due to fears of misuse, but eventually found its place in real-world application like [[Content Creation]] and gaming. 2020 saw the advent of GPT-3, a state-of-the-art model significantly larger and more powerful.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/understanding-llms-and-their-evolution?u=76281980&t=193)** The introduction of API allowed developers to create a diverse array of application. With features like few-shot learning and stronger contextual awareness, GPT-3 not only expanded the horizon of text generation, but also raised essential discussions on [[Ethics]] and biases in LLMs. As we conclude, it is evident that LLMs have revolutionized the NLP field in a short span. With each model iteration, new doors open for innovation, but it also brought forth challenges, addressing bias, ensuring ethical use, and improving real-world relevance. The road ahead is promising with the potential for even more personalized and context aware systems. We are not just looking at advancements in text, but potential integration with other domains of large language model. Thank you for embarking on this enlightening odyssey with me. Together, a collective curiosity and insights will fuel the next chapter in the exciting saga of LLMs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[Neural Networks]] (2), [[Data Processing]] (2), [[Tokens]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Env Vars:** gpt (7), api (1), nlp (1)
> **Cross-References:** next chapter (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Real-world applications of LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/real-world-applications-of-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/real-world-applications-of-llms?u=76281980&t=0)** - [Instructor] Welcome back, dear large language model enthusiast. Buckle up because we are about to embark on an adventurous journey to explore the magical world of [[Large Language Models (LLM)|large language models]] or LLMs. No magic wands or wizard hats are needed. Just a pinch of curiosity. As a friendly guides hinted, LLMs are everywhere. Bridging the gap between art and science. Imagine you are an artist staring at a blank canvas, or a writer with a dreaded writer's block. With LLMs, inspiration is just a prompter way. They can help you craft beautiful poems, draft exciting stories, or even generate artwork ideas. It's like having a virtual Picasso or Shakespeare at your fingertips. But LLMs are not just artsy. They mean serious business too. Companies use them to answer customer queries, analyze trends, write product descriptions, or even create catchy slogans. For students and researchers, LLMs can summarize complex scientific papers, assist with homework, or help you explore the depths of history. It's like having a super smart tutor available 24/7. LLMs are helping scientists decode the mysteries of the universe. They are analyzing data from distant galaxies and helping design spacecraft.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/real-world-applications-of-llms?u=76281980&t=94)** One small prompt for you, one giant leap for mankind. LLMs are behind some of your favorite gaming experiences, creating dynamic dialogues and immersive worlds. They are the unseen game masters making sure you have an epic time. From diagnosing diseases to personalized health tips, LLMs are on the path to be the unsung heroes in the medical world. It's like having a virtual doctor in your pocket, always ready, but minus the stethoscope. From daily task to future innovations, LLMs are reshaping our world. Coming up in lesson two, we delve deeper into the LLMs intricate architecture, unravel its workings from foundational building blocks to processing parts. Engage in the hands-on challenge, exploring sentiment analysis using LLMs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1)
> **Analogies:** it's like (3), imagine (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)


### 2. Diving Into LLM Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of LLM architectures](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/overview-of-llm-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/overview-of-llm-architectures?u=76281980&t=0)** - [Instructor] Welcome to a thrilling exploration of building applications with [[Large Language Models (LLM)|large language models]] or LLMs. Unlike traditional [[Software Development]] where we turn code into binary to execute commands, working with LLM involves navigating data sets, embeddings, and parameter reads. The outputs are probabilistic, adding a layer of complexity and excitement to our task. This is our first look into chapter two, Introduction to LLMs and Their Applications. Our journey begins with a critical step, pinpointing a single problem to solve. It's like finding a needle in a haystack, but the right one can sew the fabric of innovation. We start small to iterate rapidly, yet the problem must be substantial enough to make users' jaw drop. Imagine zeroing in on a coding hiccup with the vast development lifecycle, much like the [[GitHub Copilot]] team once did. Next up, selecting the right LLM is picking a trustee sidekick. Costs are cut by using a pre-trained model, but the decision is nuanced. We consider factors such as licensing for commercial use and the model size. While the larger model boasts extensive parameters, which might make them smarter, smaller models challenge this notion by being even quicker and more cost effective.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/overview-of-llm-architectures?u=76281980&t=95)** Now we tailor the LLM for our specific needs. Customization is key. In-context learning is akin to giving your LLM a last-minute briefing, ensuring it generates output that's relevant to the situation at hand. [[Reinforcement Learning]] from human feedback is like training a pet with treats. It helps the model learn from the user interactions. Fine-tuning is a meticulous process where we compare the LLM's output to our expected results and make the precise adjustments. With our model picked and primed, we architect the application. This setup includes user input tools like a UI for interactions and the LLM's hosting environment. We incorporate input, enrichment, and prompt construction tools to refine the data before it reaches the LLM, ensuring responses are accurate and efficient. And we don't forget about the tooling. An LLM cache for speedy replies, a content classifier for appropriateness, and a telemetry service to monitor it all. Finally, we put our LLM to the test in the real world. Online evaluations help us measure the LLM's live performance. We monitor how users interact with the app using acceptance and retention rates to gauge success. This feedback informs iterative improvements,
>
> **[3:09](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/overview-of-llm-architectures?u=76281980&t=189)** enhancing [[User Experience (UX)|user experience]], and refining the LLM's predictive powers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Software Development]] (1), [[GitHub Copilot]] (1), [[Reinforcement Learning]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** llm (11)
> **CLI Commands:** make (3)
> **Analogies:** it's like (1), imagine (1), such as (1)
> **Tools:** github (1), notion (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** setup (1)

#### [How LLMs process and generate text](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/how-llms-process-and-generate-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/how-llms-process-and-generate-text?u=76281980&t=0)** - [Instructor] Welcome. Today we are going to delve deep into the intricate workings of [[Large Language Models (LLM)|large language models]], or LLMs, and explore how they process and generate text. As you can see, our friendly guides are back and they're just as curious as we are. They are pondering the differences between the human brain and LLMs. While they both process and generate text, the mechanism behind their processes are distinct and fascinating. Language models and human brains, though similar, operate quite differently. LLMs like GPT, predict the next [[Microsoft Word|word]] in a sentence based solely on patterns they have been trained on. Unlike humans, they don't understand text in the way we do, nor do they have emotion or consciousness. Now, consider this question, the population of India is ___ times the US? How would a human solve it? We would [[Google]] the population, do the math, and then do a sanity check to see if it sounds right. A LLM on the other hand, uses [[Tokens]] and a knowledge base to estimate the answer. Unlike humans, LLMs lack an internal monologue and won't do a sanity check or reflect the question. Let's break it down. Step one, tokenization. LLMs start by breaking down into text
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/how-llms-process-and-generate-text?u=76281980&t=93)** into chunks called tokens. Tokens can be as short as one character or as long as a word. Step two is input processing. These tokens are then fed into the LLM. They are translated into vectors, a kind of mathematical representation the model can understand. Step three is contextual understanding. LLMs consider the context of each token, referencing patterns learned during training to make sense of how each token relates to others. It's like solving a puzzle but with mathematical finesse. Step four is text generation. LLMs predict the next word in a sequence based on the given context. The model considers multiple possibility and picks the most likely next word. And that's a step-by-step breakdown of how LLMs process and generate text. Our comic buddies are just as intrigued as we are and they are ready to dive deeper, are you? Thank you for joining us and stay tuned as we unravel more mysteries of LLMs together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Tokens]] (4), [[Large Language Models (LLM)|Large language models]] (1), [[Google]] (1)
> **Env Vars:** llm (2), gpt (1)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [The building blocks of LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/the-building-blocks-of-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/the-building-blocks-of-llms?u=76281980&t=0)** - [Instructor] In our digital age, language models have become the backbone of many systems we use daily, whether we realize it or not. From chat bots to recommendation systems, LLMs are everywhere, but how do these models function? What are the underlying components that make them so effective and versatile? Every interaction with an LLM starts at the very beginning, the input. Think of it as an initial spark or command, a question you might ask, a statement you put forward, or even a piece of text from a document. The input is not isolated, it often sits with a broader context, such as previous chat messages or related documents, allowing the system to understand the nuances of the request. Once the LLM receives this input, it doesn't process it blindly. Instead, the input undergoes a sophisticated journey through various services within the LLM. Imagine a relay race where the baton is passed from one runner to another, each with its unique role. These runners or services include embedding converters, embedding [[Databases]], context detectors, and model prompters. Let's dive a little deeper, shall we? First up is the embedding converter, these are akin to translators. They take raw text from the input
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/the-building-blocks-of-llms?u=76281980&t=94)** and transform it to a format known as embeddings, which the LLM can understand. These embeddings are mathematical representation of words or sentences, encapsulating their meaning in a format that's efficient for the model to process. Then we have embedding databases. Think of this as a vast library of embeddings. Once the text is converted into embeddings, they're stored here. The storage isn't just static, the databases are active, retrieving specific embeddings when needed, and even locating embeddings that are closely related or have similar meanings, akin to finding a book in a library that's similar to your favorite novel. Next in line are the context detectors. Now context is king in any conversation, these detectors ensure that any output from the LLM aligns with the broader conversation or the document's history. For example, if you are discussing space exploration, the context detectors will ensure the LLMs continue the discussion in that vein rather than randomly discuss underwater basket weaving. Lastly, we have model prompters, these are the final gatekeepers. They take the processed text and prompt the LMS to generate a response. Once the model crafts its reply,
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/the-building-blocks-of-llms?u=76281980&t=187)** the prompters dispatch that result either back to the user or to another service, be it an API or database or any other endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3)
> **Env Vars:** llm (5), lms (1), api (1)
> **Analogies:** think of it as (1), such as (1), imagine (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Using a simple LLM](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/using-a-simple-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/using-a-simple-llm?u=76281980&t=0)** - [Instructor] In this lesson, you will be downloading and running your own GPT2 model to generate text. Let's get started. First, let's see an overview of the steps you need to take to run an LLM model. The first step is to always install and import packages we will use. For this course, we will be mostly using data and models from [[Hugging Face]]. The next step is to download the model and its corresponding token from Hugging Face. The token helps to convert the text into a format that the model can understand, so the next step will be to tokenize the input question. Next, we will pass the tokenized text to the model, which should generate our output. But remember, the output from the model is also going to be tokenized, so we need to use a tokenizer to decode the output text from the model. That's it. Now, let's see what it looks like in code. The first step is to use PIP install transformers package from Hugging Face. Next, we will import auto model for causal LLM and auto tokenizer classes from Hugging Face. These are helper classes that make it easy to use the tokenizer and model without us needing to go deep into the weeds of how model works.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/using-a-simple-llm?u=76281980&t=95)** We can also use Torch to check whether we have a GPU in our environment or not. If A GPU is present, then we can use it to run the model since it will be faster. However, since GPT2 is a small LLM, it should also run reasonably fast on a CPU. The next step is to [[Fetch]] the model and tokenizer from Hugging Face. All we need to do is initialize and object the tokenizer and model and specify which model we want to use. Hugging Face will take care of downloading the model and the tokenizer. Since we will be using GPT2 model, that is what I have specified here, but you can replace this with any other LLM that Hugging Face provides. When you run this code, it might take a while to download everything. Next, we tokenize our input text and we use the output from that to generate the text from the model. You can see that I have specified a few parameters here. Max New token specifies the number of [[Tokens]] to generate from the model. The other parameters make the output less generic and more vibrant. Feel free to play around with them and see which results in the best generated text. The final step is to decode the model's output using our tokenizer to see the generated text.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/using-a-simple-llm?u=76281980&t=193)** Congratulations, you now know how to run your own LLM and use it to generate text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (7), [[Fetch]] (1), [[Tokens]] (1)
> **Env Vars:** llm (5), gpt2 (3), gpu (2), pip (1), cpu (1)
> **CLI Commands:** make (2), pip (1)
> **Prerequisites:** install (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: LLM for sentiment analysis](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-llm-for-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-llm-for-sentiment-analysis?u=76281980&t=0)** - [Narrator] Now that you've gained a thorough understanding of the different ways to utilize an LLM, it's time to take your knowledge to the next level and put it into action. In this challenge, you will classify the sentiment of some text. Sentiment analysis is a subfield of NLP that is used to determine the sentiment or mood of a piece of text. The three primary sentiments are positive, neutral, and negative. A common application for sentimental analysis is used to gauge the sentiment of a customer when they're chatting with [[Customer Support]]. For this challenge, you will be using pre-trained LLM that already does sentiment analysis. In this case, it is a roberta-based LLM. The first step will be to find an LLM from [[Hugging Face]]. Then you will need to download the model and it's corresponding tokenizer. Following that, you will need to tokenize the input text, query the model using the tokenized text, and get the result. To take this challenge into the next level, you can also use OpenAI's API to get the sentiment of the same text and compare the results. If the results are similar, you might want to think about the implications of using a really large and paid LLM API like OpenAI when smaller LLM gives the same result.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-llm-for-sentiment-analysis?u=76281980&t=95)** We will discuss this in greater detail in the next chapters. Hope you enjoy this challenge and learn something new.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (1), [[Hugging Face]] (1)
> **Env Vars:** llm (6), api (2), nlp (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: LLM for sentiment analysis](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-llm-for-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-llm-for-sentiment-analysis?u=76281980&t=0)** - [Instructor] As part of this challenge, you are required to utilize a pre-trained language model to perform sentiment analysis task. Now let's see what it looks like in code. First, we install the packages we need. In this case, we need to install transformers, which is a package by [[Hugging Face]]. Then we need to import the tokenizer and auto model classes from the transformer. We can use these classes to download the model and its corresponding tokenizer. The model I have selected has been fine tuned to perform sentiment analysis on financial news data. However, you can choose a different model. Now we can tokenize our input text. Finally, we can query our model. Since sentiment analysis is a classification task, we need to find the max of the output, logits, to get the sentiment. Now you know how to download and use an LLM model. In the next lesson, we will see how you can fine tune your own LLM to perform sentiment analysis or any other task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Prerequisites:** install (2), required to (1)
> **Env Vars:** llm (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 3. Fine-Tuning Strategies for Custom Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to fine-tuning for LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-fine-tuning-for-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-fine-tuning-for-llms?u=76281980&t=0)** - [Instructor] As we delve deeper into the world of LLM, it is crucial to understand the concept of [[Fine Tuning]]. Imagine having a vast library of books in your mind. It's impressive, right? But what if you were challenged on a topic of that's very specific. French history during the Renaissance. Having general knowledge might not cut it. Fine Tuning is akin to giving your model a deep dive course on that specific topic. It is the process where we take a pre-trained model and train it further on specialized data. This not only refines the model's performance, but equips it with domain specific knowledge, allowing it to handle niche tasks with enhanced precision. Why is fine tuning necessary? You might wonder if LLMs are ready to be so knowledgeable, why fine tune them? Great question. While LLMs like GPT have broad understanding of language, mastering specifics is a different ball game. It's like a difference between a jack of all trades and a master of one. To truly [[Microsoft Excel|excel]] in a specific domain or tasks, they require additional targeted training. By fine tuning, we are giving our LMS that extra layer of expertise, arming them with nuanced understanding for specialized application. Let's illustrate this with an analogy. Consider a person who has read many books on investing. They have a good grasp of the basics.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-fine-tuning-for-llms?u=76281980&t=96)** Now, if you want insights on the general principles of investing, they are your go-to, but if you want a deep dive into the intricacies of, say, [[Cryptocurrency]] investments in the last year, you'd rather turn to someone who has specialized in that niche. General knowledge is a foundation, but for intricate tasks, we need that expert perspective. It's the difference between a general finance book and the one written by a stock market maestro. So when exactly should we consider fine tuning your model? If you are dealing with tasks that demand specific expertise or heavy [[Data Processing]], that's your cue. While our pre-trained models are exceptional for generic tasks, they can sometimes miss the mark in specialized scenario. It's like having a general purpose computer for everyday task, but needing a high end gaming one for the latest AA titles. To ensure our LMS deliver top-notch quality in these specific domains, fine tuning becomes indispensable. Lastly, let's circle back and look at the tangible benefits of this process. Fine tuning elevates the model's accuracy and efficiency in specialized task. It's like customizing a suit. It just fits better. By tailoring our LLMs, we are ensuring they're not just industry ready, but industry specific. The results, outputs of higher caliber, more relevant insights, and a level of accuracy
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-fine-tuning-for-llms?u=76281980&t=191)** that generic models might not achieve. Remember, in the world of LLM, customization is the key to excellence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (7), [[Microsoft Excel|Excel]] (1), [[Cryptocurrency]] (1), [[Data Processing]] (1)
> **Env Vars:** llm (2), lms (2), gpt (1)
> **Analogies:** it's like (3), imagine (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Step-by-step guide to fine-tuning LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/step-by-step-guide-to-fine-tuning-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/step-by-step-guide-to-fine-tuning-llms?u=76281980&t=0)** - [Instructor] [[Fine Tuning]] is both an art and a science. While an LLM can be leveraged in numerous ways based on the task and resources at hand, there are primarily three methods, using a fixed feature extractor, modifying output layers, and full model fine tuning. Each approach has its unique benefits and challenges, which we will delve into shortly. At times, the base model of an LLM serves as a fixed feature extractor. Here the model processes new input data to create rich high dimensional vector representations. These vectors packed with information are then employed to train a fresh task-specific model. Think of this as using the LLM to extract the essence of the data, which is then used to tailor make another model for a particular function. The comic illustrates the concept succinctly. With a fixed feature extractor, the LLM acts as a librarian reading vast volumes of data, summarizing it into high dimensional vectors. These summaries then form the foundation for building a new specialized model. Modifying the output layers offers a different approach. Instead of changing the inner workings of the model, we adjust the final layers. The ones responsible for the models output.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/step-by-step-guide-to-fine-tuning-llms?u=76281980&t=96)** By modifying the output layers, the base model processes input and produces a hidden layer representations as usual. However, the final translations of these representation input into outputs, undergo changes. This is akin to repurposing an engine. The core mechanics remain the same, but the output is directed differently. Sometimes more intensive modifications are necessary. Undertaking a full model fine tuning can be resource intensive. It requires adjusting the entire model from input to output. Though it demands a considerable amount of resources, the results often justify the effort, especially when the new tasks diverges significantly from the original task of the LLM. Imagine you are in a room inside a large house, and you want to make some modification to this room without affecting the entire house. Instead of changing the entire house or the complete LLM, you can only modify that particular room or a specific part of the model. In essence, adapter tuning is about introducing adapters or intermediary layers within the existing model, optimizing them for specific tasks without the need to adjust the whole architecture. Adapter tuning introduces a specialized set of layers
>
> **[3:10](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/step-by-step-guide-to-fine-tuning-llms?u=76281980&t=190)** known as adapter layers into each transformer block of a large language model. The primary function of these layers is to compress the input data into lower dimensional representation, then expand it back to the input dimension. What makes this approach revolutionary is that during the tuning process, only the parameters of these adapter layers are adjusted. The [[Representational State Transfer (REST)|rest]] of the model remains unchanged. Adapted layers seamlessly integrate with the LLM architecture, optimizing performance without heavy computational costs. This makes adapter tuning a more efficient and resource friendly method compared to traditional fine tuning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** llm (7)
> **CLI Commands:** make (2)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for fine-tuning LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-fine-tuning-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-fine-tuning-llms?u=76281980&t=0)** - [Instructor] Language model fine-tuning has become an essential procedure in today's rapidly evolving LLM landscape. Let's dive deep into the best practices and methodologies. Do you need to fine-tune? Before diving into the specifics of fine-tuning, it is essential to assess whether the process is necessary for your given task. Fine-tuning is not one-size-fits-all solution. Several factors influence the decision, including the specificity of your use case, associated costs, and the desired domain specificity level. While pre-trained models are robust for general tasks, certain specialized applications may demand the precision that only fine-tuning can offer. Imagine utilizing a general bicycle for a leisurely ride in the park. A pre-trained model might suffice for such tasks. However, if you are planning to scale a mountain, you would need specialized gear. Similarly, fine-tuning an LLM is like equipping it with specific gears for challenging terrains. It's about understanding when a general approach is enough, and when a specialized touch is needed. When you decide to fine-tune, the next pivotal step is the right methodology. Think of it as choosing the best wrench from a toolbox. The choice depends on the task at hand.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-fine-tuning-llms?u=76281980&t=94)** You might employ the base model as a feature extractor, modify its output layers, or even retrain the entire model. It's crucial to understand the task demanding more resources often necessitates comprehensive fine-tuning. A revolutionary approach to fine-tuning is the utilization of parameter-efficient methods such as adapter tuning. These techniques not only conserve time and resources, but also present a forward-looking solution for future LLM application. By introducing parameters, they enhance the model's adaptability for new tasks without significantly taxing computational resources.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3)
> **Analogies:** imagine (1), think of it as (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fine-tune a pre-trained LLM](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-fine-tune-a-pre-trained-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-fine-tune-a-pre-trained-llm?u=76281980&t=0)** - [Instructor] We have seen how fine-tuning a generic LLM can help you improve its performance on your application. Remember that while a generic LLM may be good at a wide range of tasks, you may not need it to perform all those tasks in your application. Moreover, some LLMs may not be consistent with their outputs for the same input. This is especially true for API-based LLMs like OpenAI. In such scenarios, you would want to fine-tune your LLM so that its output are more in line with the behavior that you expect. Finally, in many cases, you can fine-tune a smaller LLM to perform better at your task. As we will learn later, the smaller LLM will be cheaper and easier to deploy, thus reducing your cost. For instance, in the previous challenge, you used an LLM for sentiment analysis. Now, if your application only needs the LLM to do sentiment analysis, then you may want to fine-tune it so that it can do that task really well. In this challenge, you will fine-tune a generic LLM on sentiment analysis data. We'll be fine-tuning OpenAI's GPT-2 model for this challenge.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-fine-tune-a-pre-trained-llm?u=76281980&t=91)** So the first step you need to do is to [[Fetch]] the model and its tokenizer from [[Hugging Face]]. After that, you pre-process the provided sentiment analysis data and fine-tune the model using that data. Once that is complete, query the fine-tune model and check if the results are better. To take this project to the next level, try out different fine-tuning methods or try fine-tuning different LLM models and compare their performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Hugging Face]] (1)
> **Env Vars:** llm (9), api (1), gpt (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Fine-tune a pre-trained LLM](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-fine-tune-a-pre-trained-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-fine-tune-a-pre-trained-llm?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-fine-tune-a-pre-trained-llm?u=76281980&t=5)** - [Instructor] For this challenge, you had to fine-tune a GPT-2 model to perform sentiment analysis. Now, let us see what this looks like in code. The first step is to install the packages. For this challenge, along with the transformers, we need the datasets library to [[Fetch]] the datasets. Both of these libraries are from [[Hugging Face]]. The next step is to fetch a sentiment analysis dataset. For this challenge, I will use the SST Dataset. You can download and iterate through the dataset using the code. However, to use it to train our LLM, we need it to be formatted to the text and tokenize it. My formatted text consists of a beginning of a sentence token followed by the input sentence. This is followed by the sentiment and the end of the sentence token. The first and the last text and the pad text in the middle are the special text used by GPT to understand the structure of the input text, and it is necessary to provide it during training. Next, we fetch the model and tokenizer. When fetching the tokenizer, we also pass the special text we are using for training.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-fine-tune-a-pre-trained-llm?u=76281980&t=100)** Now, we are ready to start fine-tuning GPT-2. Hugging Face makes it really easy to train and fine-tune LLMs. First, we create a training configuration. Here, we can pass training parameters, like the number of epochs, warmup_steps, and weight_decay. We then call the trainer function to start training. Once our model has finished training, we can set it to evolve mode and query it. The querying process is the same as any other LLM, that is, we first tokenize our input, then pass the tokenized text to our model and then decode the model's output. And that's it, you have successfully fine-tuned a GPT-2 model to perform your specific task. In the next chapter, you will learn how to compress your LLM to make them run faster and on less powerful [[Hardware]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[Hugging Face]] (2), [[Hardware]] (1)
> **Env Vars:** gpt (4), llm (3), sst (1)
> **Code Identifiers:** warmup_steps (1), weight_decay (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Compression Techniques for LLMs

[↑ Back to Table of Contents](#table-of-contents)

#### [Why compress LLMs?](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/why-compress-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/why-compress-llms?u=76281980&t=0)** - [Instructor] Let's dive into compressing these [[Large Language Models (LLM)|large language models]]. Let's explore why compressing LLM is a topic of interest. Firstly, LLMs are computationally intensive. This means they require a lot of computational power to run smoothly. Consequently, they can also have long execution times, which is problematic for [[Real-Time]] application. And for efficient operation, multiple GPUs are often needed, which can be costly and resource-intensive. The sheer size of LLMs with their billions of parameters can lead to execution times that aren't always optimal. These large language models require powerful [[Hardware]]. Compressing these models addresses this issue, allowing us to deploy LLMs even on devices with lesser computational capabilities. Think of it as having a supercomputer's power right in your mobile phone. But compression doesn't just benefit us in terms of size. Let's talk money. Deploying LLM on less powerful machines can lead to significant cost reductions. With compressed models, memory requirements decrease, meaning reduced expense on hardware upgrades. These models are also energy efficient, consuming less power, and leading to savings on electricity bill. Maintenance costs, too, are minimized due to simplicity of this compressed model. This makes it feasible
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/why-compress-llms?u=76281980&t=94)** for even small to medium enterprises and startups to benefit from LLMs. Timeliness is key to today's fast-paced world. When an LLM takes too long to respond, it can disrupt the user's experience, especially in real-time application. Every millisecond counts when it comes to generating results. Latency can translate to lost opportunity, and in some cases, financial losses. This is where compression shines again. It offers a solution to reduce execution time and improve [[User Experience (UX)|user experience]]. One major challenge with LLM is the communication bottleneck when serving the model across multiple GPUs. Large models can easily overwhelm a system's memory capacity, leading to slower processing speeds. Compression, however, reduces the memory footprint, ensuring smoother operation. It elevates the need for extensive data transfer between GPU and facilitates the deployment of LLMs, even in environments where memory is at its premium. To conclude, compressing LLMs is not just about size reduction. It's about optimizing the entire ecosystem around LLMs and without compromising on their capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[Real-Time]] (2), [[Hardware]] (2), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** llm (4), gpu (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to quantization and pruning](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980&t=0)** - [Instructor] Good day everyone. Today we'll be delving deep into the fascinating world of model optimization. Specifically, we'll be focusing on two vital techniques, quantization and pruning. These techniques are instrumental in striking a balance between the model's performance and efficiency. So let's embark on this journey together and discover the essence behind these powerful tools. As we start, imagine a scenario. You are a tech enthusiast and every piece of information is like fitting an elephant into a Mini Cooper. Just like in our illustration here, that's essentially what we are doing with [[Large Language Models (LLM)|large language models]]. We are packing tons of knowledge into a small space. Our goal today is to make this process smoother and more efficient. Let's kick things off with quantization. At its core, quantization is all about reducing the precision of the parameters in our models. Think of it in this way, by default, large language models use 32-bit floating point numbers for the parameters. However, in many scenarios, such high precision isn't always necessary. By embracing quantization, we can represent these parameters using fewer bits, sometimes as low as eight, four, or even three bits without compromising much in performance.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980&t=95)** Our illustrations here capture the essence of quantization beautifully. On one side, we have a large language model with its hefty 32-bit parameters. It's like having a scale weighed down with gold bars, precious but heavy. But with the magic of quantization, we can transform those gold bars into lightweight foam bricks without losing their value. Now quantization isn't one-size-fits-all approach. We have different types. On one hand, there's weight quantization where only the weights of the parameters are reduced in precision. On the other hand, we have weights and activation quantization. Here, both the weights and the activations, which are the output of each neuron, are quantized. Let's delve a bit deeper. Weight quantization mainly focuses on parameter precision reduction. There's also a combined approach, which quantizes both the weights and the neuron outputs. And excellent real-world application of this is MobileNets, which achieve remarkable efficiency on mobile devices because of quantization. The key is to address computational overhead and strategize our quantization methods. As we look forward, the future promises adaptive quantization techniques. Shifting gears, let's now explore pruning.
>
> **[3:10](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980&t=190)** Pruning is all about eliminating less crucial model connections. The idea is simple. Why retain connections that don't contribute significantly to the model's performance? Through strategies ranging from magnitude-based structured pruning, we can achieve impressive results. Take for instance, LeNet-5. With pruning, 80% of its connections that were removed resulted in a minimal accuracy loss. The benefits? A whopping 50% reduction in memory usage and twice the speed up in inference. But the challenge remains: How do we ensure we retain the model's performance? To paint a clearer picture of pruning, think of a tree with many branches. Some branches might be redundant or not contribute to the tree's overall health. By snipping away the unimportant bits, we allow the tree, or in our case, the model, to thrive. Choosing what to prune is an art and science combined, and that's where optimization journey truly begins. One of the most intricate aspects of pruning is deciding which parameters to trim. The challenge lies in discerning the least important parameters without compromising the integrity of our model. Now there are several strategies at our disposal. The simplest method targets the parameters with the smallest value, but as you may guess, things get more nuanced.
>
> **[4:44](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980&t=284)** More sophisticated methods go to the overall impact of each parameter on the model's performance. The journey is about striking a balance and ensuring the model remains robust. Let's break down the type of pruning. First, we have magnitude-based pruning, targeting the parameters with the smallest value. It's much like shedding the least heavy weights from a balloon to make it rise faster. Then there is structured pruning, a more intricate approach that eliminates the entire neurons or layers based on this output contribution. Imagine not just removing branches, but sometimes entire limbs of tree, ensuring the tree remains healthy and vital. A shining example in the real world is AlexNet. With effective pruning, it achieves impressive 90% sparsity with minimal performance loss. However, all techniques, pruning isn't without its challenges, especially when it comes to computational aspects and efficient parameter identification. But innovation doesn't sleep. We are continually exploring automated pruning [[Algorithms]] to make the process even more efficient. As we approach the end of our journey, it is essential to understand the balancing act between quantization and pruning. These are not isolated techniques, but complementary tool that we can use in tandem can actually help
>
> **[6:18](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/introduction-to-quantization-and-pruning?u=76281980&t=378)** optimize model performance. The goal is to navigate trade-offs between performance, size, and computational demands. Let's consider the transformer model as a case study. By harnessing both techniques, these models have achieved a remarkable 50% size reduction. Looking forward, the horizon is promising. We can anticipate LLM [[Hardware]], specifically tailored for compressed models, making optimizations even more potent. But theory is one thing, practice is another, and that is why understanding practical implementation is crucial, ensuring we apply compression techniques effectively in real-world scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[Algorithms]] (1), [[Hardware]] (1)
> **Analogies:** imagine (2), just like (1), it's like (1), for instance (1), picture (1)
> **CLI Commands:** make (3)
> **Env Vars:** llm (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Hands-on: Implementing compression in LLMs](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/hands-on-implementing-compression-in-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/hands-on-implementing-compression-in-llms?u=76281980&t=0)** - [Instructor] Welcome to our tutorial on how to compress a large language model. Today, we will explore the process of reducing the size of an LLM, making it more efficient without sacrificing performance. First, let's begin by preparing our environment. We need to install and import necessary packages, specifically auto-gptq and transformers. This can be done using the command, pip install auto-gptq transformers. These packages are crucial, as they provide the tools and functionalities needed for module containerization and manipulation. Before we start, it's crucial to import necessary libraries. We will use the AutoGPTQForCausalLM and BaseQuantizeConfig classes, which provide the backbone for our compression process. Now, we create a quantization configuration using BaseQuantizeConfig with specific parameters like bits and group_size. Setting bits to four and group_size to 128, we instruct the system on how to compress the model. This step is crucial as it defines how the model's weights are reduced in precision, balancing efficiency with performance. Next, we download the model and tokenizer. These components are essential for understanding and processing the language data. The tokenizer converts the text input
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/hands-on-implementing-compression-in-llms?u=76281980&t=95)** into a format that the model can understand, while the model is the core engine that will be compressed. With our configuration set, we compress the model using these settings. This involves applying the quantization parameters to the LLM effectively reducing its size. This process is critical for making the model more manageable and faster to use, especially in environments with limited computational resources. Finally, we load the quantized model and test its performance. We input a sample text and observe how the model responds. This step is vital to ensure that even after compression, the model still performs effectively, maintaining its ability to understand and generate language accurately. Congratulations, you have successfully compressed a LLM. This skill is invaluable in deploying efficient LLM models, particularly in resource constrained environments.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4)
> **Prerequisites:** install (2), before we start (1)
> **Code Identifiers:** group_size (2)
> **CLI Commands:** pip (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Quantize a LLM](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-quantize-a-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-quantize-a-llm?u=76281980&t=0)** - [Instructor] In this chapter, you have learned about LLM quantization. It is important to keep in mind that compressing LLMS can be beneficial to optimize your LLM application. We can deploy these quantize models on less powerful [[Hardware]] and hardware with less memory. As a result, deployment becomes cheaper and easier and it eliminates the need to manage deployments across multiple GPUs. And the best thing is that we get these improvements with minimal drop in the performance of the model. In this challenge, you will have the opportunity to quantize your own model. For this challenge, we will quantize the OPT model with 125 million parameters. We will use the auto GPTQ library to perform quantization. The first step is to install this library. After that, we will [[Fetch]] the model from [[Hugging Face]]. Once that is done, we will create the quantization config and then quantize the model. After the quantization is done, try querying the model and see if you can find any loss in the model's output performance. To take this challenge to the next level, try quantizing a different model or try quantizing the model
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-quantize-a-llm?u=76281980&t=94)** with different quantization library like GGML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Fetch]] (1), [[Hugging Face]] (1)
> **Env Vars:** llm (2), llms (1), opt (1), gptq (1), ggml (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Quantize a LLM](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-quantize-a-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-quantize-a-llm?u=76281980&t=0)** - [Instructor] For this challenge, you had to quantize an OPT model with 125 million parameters using the AutoGPTQ library. Let us see what this looks like in code. Here we install auto-gptq and transformers. We then import the libraries. Following that, we create the quantization config. Here I have specified to quantize the model to four bits, but you can use some other values, like eight, or something even more compressed, like two or three. Now we are ready to download and quantize our model. Here you can see that I have specified the opt-125m model. I then tokenize a few example text. This will be used by AutoGPTQ to check for performance degradation during the quantization step. We then initialize our model object while also specifying a quantization config. Finally, we can call the quantize method to start quantizing our model. After our model is quantized, we can save it so that we can reuse it later on. We can also load our quantized model and generate some text by passing a query.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-quantize-a-llm?u=76281980&t=95)** And that's it. Congratulations, you have quantized your own model. In the next chapter, you will learn how to improve the generated text from your model using prompt tuning.

> [!info]- Semantic Content
>
> **Env Vars:** opt (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Prompt Engineering for Effective LLM Communication

[↑ Back to Table of Contents](#table-of-contents)

#### [What is prompt engineering?](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/what-is-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/what-is-prompt-engineering?u=76281980&t=0)** - [Instructor] Today we are diving deep into the fascinating world of [[Prompt Engineering]]. If you have ever wondered how we instruct powerful models like LLMS to respond precisely to our queries, this session is for you. Imagine sending a message to an advanced LLM. You are merely not chatting, you are guiding it. This guiding mechanism is what we term prompt engineering. Every question you pose, every instruction you offer becomes a pathway guiding the LLM to your desired response. Let's simplify this. Think about training a dog. You merely don't say do something. You provide specific commands like sit or [[Fetch]]. The dog learns from consistency, repetition and most importantly, clear commands. In the LLM universe, the way you instruct or prompt a language model determines the kind of response you receive. A vague command might lead to a vague response, much like telling a dog to do something and being unsure of what it might do next. The same principle applies here, clarity in command equals precision and performance. The LLM, like the dog, thrives on clear, concise commands and consistent feedback. Now, crafting these response or prompts isn't always a walk in the park. Language with its nuances and complexities
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/what-is-prompt-engineering?u=76281980&t=95)** can sometimes be a double-edged sword. A simple change in phrasing might lead to an entirely different response. The goal, avoid bad prompts. Think of these as instructions the model might misconstrue, or overgeneralize. It's like asking someone to grab a bite and then bring you a live fish, the clearer our prompt, the more aligned the response. Diving deeper, let's use another analogy. Consider teaching a parrot to sing a song. You wouldn't be generic. You'll require precise instruction, ensuring every note, every lyric is perfect. This mirrors the meticulousness required in prompt engineering. The way we frame our question, the structure, the phrasing, all combined to determine the output. For example, asking a model, tell me about apples, versus what's the nutritional content of an apple, will generate different depths of answers. In one you are exploring, in the other, you are seeking specifics. But here's the test, Not all scenarios mind the precision for teaching a parrot. Sometimes general conversations, or straightforward questions don't need intricate prompt engineering. However, when you are introducing an LLM to a new concept, dealing with complex queries, or requiring exact answer,
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/what-is-prompt-engineering?u=76281980&t=191)** the art of crafting perfect prompt becomes essential. So as we venture deeper into the age of LLM, understanding and mastering prompt engineering becomes crucial. It's not just about asking, it's about asking the right questions. In our subsequent sessions, we will delve into the strategies to optimize this process, ensuring our interactions with these LMS are efficient, effective and enlightening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (5), [[Fetch]] (1)
> **Env Vars:** llm (6), llms (1), lms (1)
> **Analogies:** imagine (1), it's like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for effective prompt engineering](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-effective-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-effective-prompt-engineering?u=76281980&t=0)** - [Instructor] Welcome, everyone. Today, we'll delve into the exciting realm of [[Prompt Engineering]]. In our rapidly evolving LLM landscape, it's crucial to know how to guide language models, like the one we are discussing today. Let's navigate through the best practices and understand how to maximize our outcome with these models. Prompt engineering is more than just feeding a question to an LLM. It's an art, a technique. Today, we'll explore the role in modern LLM from optimizing our interactions to enhancing response quality. But why should we care? As these models grow advanced, mastering this art is pivotal to unlock their potential. Let's embark on this journey and uncover the six best practices. Imagine you are an archer. You wouldn't shoot without spotting the target, right? Similarly, with prompt engineering, you have to set your goals before you proceed. Different projects might have diverse targets. While one might aim for pure [[Information Retrieval]], another could lean into creative writing. Consider [[E-Commerce]]. The language use needs to be precise, unique, and must resonate with the audience. Also, let's not forget the significance of SEO. By setting clear and actionable goals, we are not just aiming in the right direction,
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-effective-prompt-engineering?u=76281980&t=93)** but also making it easier to measure our progress and success. Imagine setting out on a journey without a destination. That is how it feels when working without clear goals in prompt engineering. Our objective guides us, whether we aim for precise information or creative insights. And why is that so crucial? Because without clarity, we cannot measure our success or adjust our strategies. Think about e-commerce. The way we present a product can be the difference between a sale and a missed opportunity. The essence of mastering prompt engineering lies in experimentation. Think of yourself as a scientist in a lab, testing various combinations to find the perfect formula. While language models like mine are advanced tools, they need that human touch of trial and error to shine. Slight tweaks can result in vastly different outputs. Remember, it's an iterative process. Craft, test, refine, and then learn. Stay updated and embrace the journey of discovery. Perfection isn't achieved overnight. With language models, it's all about trial and error. These tools, advanced as they might be, crave fine-tuning. Subtle tweaks in our prompts can yield vastly different results. So the process, craft, test, refine and repeat, and remember, in the world of LLMs, learning never stops.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-effective-prompt-engineering?u=76281980&t=191)** Being updated with model changes and community findings is the key. Setting the stage is pivotal. In [[Storytelling]], the environment dictates the narrative, and it's no different here. Our prompts aren't mere questions. They are beacons in guiding the LLM. A detailed backdrop can make the difference between a generate response and a precise answer. For instance, asking an LLM to describe a revolutionary product versus a revolutionary smartphone with 108MP camera can yield diverse insights. Details, details, details. Guiding an AI with precision is akin to giving clear instructions to a chef. Vague prompts can lead to unexpected outcomes. If you want a shiny red apple and got a yellow one, you would be disappointed, right? It's the same with our models. Being specific ensures that the output aligns closely with our expectation. Guiding an LLM is an intricate dance. It's about the perfect balance of specificity and freedom. Precision plays a pivotal role, especially when the tasks get complex. Think about it. The tone, the length, even the key [[Microsoft Word|word]] presence can drastically change an output. It's not always about getting an elaborate answer. Sometimes you might want to keep the LLM concise or maybe formal.
>
> **[4:43](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/best-practices-for-effective-prompt-engineering?u=76281980&t=283)** Setting boundaries help channel the LLM's vast knowledge to give us what we need. An apt example, product descriptions. The clearer we are about our needs, the more aligned the output. Remember, precision is power. This comic underscores the importance of comprehending how the model works. A person next to a large machine representing the LLM, filled with gears, levers, and screens displaying various data. The machine is intricate, symbolizing the complexity of the model's inner working. The person remarks, and finally, understand your model, what makes it tick, or produce off-mark results. This highlights a necessity to grasp not just the output, but the underlying factors driving the model's behavior, including its strengths, weaknesses, and quirks. Knowing your tool is half the battle won, and with [[Large Language Models (LLM)|large language models]], it's no different. These models are vast, intricate, and packed with potential. But like all things, they have quirks, strengths, and biases. The power lies in understanding them. Keeping abreast of model versions, training data, and nuances is pivotal. Consider this, a model unaware of recent, global event might not provide current insights. A pro tip, always stay updated with model documentation and engage with the community. Knowledge is your best ally.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (5), [[E-Commerce]] (2), [[Information Retrieval]] (1), [[Storytelling]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** llm (9), seo (1)
> **CLI Commands:** find (1), make (1), apt (1)
> **Analogies:** imagine (2), for instance (1)
> **Definitions:** is an  (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)

#### [Types of prompt engineering](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980&t=0)** - [Instructor] Welcome to our discussion on [[Prompt Engineering]]. Prompt engineering is a fascinating aspect of working with [[Large Language Models (LLM)|large language models]] or LLMs. Today we will delve into the significance of how we phrase our prompts, understand the role of effective prompts in getting accurate responses, and explore various techniques to craft these prompts. As we begin, it's essential to understand three key points. Firstly, phrasing plays a significant role in how LLMs interpret and respond to our prompts. A slight change in wording can yield vastly different results. Second, crafting effective prompts is crucial. They play a pivotal role in guiding the LLM to provide the desired response. Lastly, our objective today is to navigate the myriad techniques available for crafting these prompts, ensuring that our interaction with LLMs is as fruitful as possible. Imagine a jar filled with assorted candies. Each candy symbolizes a distinct type of prompt one can use with an LLM. An individual considering their option realizes the importance of selection. The visualization underscores the concept that every interaction with an LLM requires strategic selection akin to choosing the perfect candy for a specific craving. Starting with the basics,
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980&t=92)** what exactly is basic prompting? Think of it as a direct form of communication where you clearly state your query or instruction to the LLM. Whether it's language translation, answering factual queries, or generating a simple narrative, basic prompting serves the purpose. However, the success of this method depends on task complexity and specificity. And remember, in the world of LLMs, we have two main branches, zero-shot and few-shot learning. Each caters to a distinct needs, which we will explore shortly. Zero-shot learning. Zero-shot learning might sound technical, but let's simplify it. Imagine instructing the LLM without giving any prior task-specific example. It's like expecting a well-informed friend to provide an answer instantly. The LLM leverages its extensive training and innate understanding of language structures. This approach relies heavily on the model's ability to use its generalized knowledge and recognize patterns, even when faced with novel tasks. Next, we have few-shot learning. Here we present tasks to the LLM after showing some high quality demonstrations. It's akin to giving a friend a context by sharing sample questions and answers.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980&t=186)** The model then tries to map new tasks to these provided example, refining its output. The beauty of few-shot learning is its ability to bridge the semantic gap. This ensures the model's response aligns closely with our expectations. Imagine if you could get more refined and specific results from an LLM by giving it a detailed blueprint of your task. That's instruction prompting. By embedding explicit instructions within the prompt, we can lead the LLM to produce content that meets the specific criteria. Diving deeper into instruction prompting, it allows for a high degree of customization. You can specify the format, length, style, and much more. This comes in handy in various applications like tailored content generation or targeting specific audience segments. The strategic advantage, you can gain immense control over output granularity. The LLMs response can be fine-tuned to meet the exact criteria, ensuring satisfaction and utility. Journeying further into the intricate world of prompt engineering, we introduce chain-of-thought prompting. Instead of asking a standalone question, we guide the LLM through a series of thought sequences, much like our comics. It's about giving the model progressive guidance.
>
> **[4:41](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980&t=281)** Why is it so vital? For the task that demand in-depth, multi-layered reasoning, COT is a game changer. It allows for nuanced understanding, ensuring the LLMs output isn't just accurate, but rich in context. At a candy store, an individual tastes a variety before settling on their favorite. Similarly, LLMs can generate multiple outputs, allowing users to pick the most fitting response. Much like sampling candies before having a final choice, LLMs can present a variety, ensuring the final selection meets your need. Let's dive into the power of self consistency sampling. At its heart, this method revolves around iterative generation and critical evaluation. Visualize it as an author drafting multiple versions of thesis, refining with each hydration until the perfect one is achieved. LLMs with this technique undergo rigorous internal evaluation, ensuring the responses are not just fluent, but also contextually coherent. The cartoon characters playfully suggest the challenging, yet rewarding nature of this method, offering a unique value proposition, highly refined and contextually apt responses. As we approach, let us ask ourselves a critical question. How do we decide on the right prompt type? This decision tree,
>
> **[6:15](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/types-of-prompt-engineering?u=76281980&t=375)** beautifully illustrated is your guiding star. It takes into account the nature of tasks, its complexity, available resources, and desired precision. Whether you are leaning towards zero-shot prompting for straightforward tasks, or few-shot prompting for complex nuances, the roadmap directs you to the most appropriate method. It's all about understanding the unique strengths of each prompting technique and matching them to the task at hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (3), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** llm (10), cot (1)
> **Analogies:** imagine (3), think of it as (1), it's like (1)
> **Definitions:** is a  (2)
> **CLI Commands:** apt (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Prompting LLMs to generate text](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-prompting-llms-to-generate-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-prompting-llms-to-generate-text?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/challenge-prompting-llms-to-generate-text?u=76281980&t=5)** - [Instructor] In the past videos, you have seen how LLMs can be prompted in different ways to make their outputs reliable and consistent. You also saw that adding more context to our prompts helps reduce hallucinations. Now you will have the opportunity to try some of these [[Prompt Engineering]] techniques. For this challenge, you are responsible for building a product that helps conference speakers craft proposals for their talk. We will use different prompt engineering techniques and see how the proposal changes and improves as we use more complex and better techniques. First, we will do zero-shot prompting to get the baseline of the kind of proposal the LLM can produce. After that, we will do few-shot prompting where we would provide some past talk proposal as context to help the generated talk sound better. Finally, we will do instruction prompting and chain-of-thought prompting. At each of the steps, the generated output should be better than the previous step. If you want to take the project to the next level, try doing some exercise, but with smaller context LLM, and see if the results are better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (2)
> **Env Vars:** llm (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)

#### [Solution: Prompting LLMs to generate text](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-prompting-llms-to-generate-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-prompting-llms-to-generate-text?u=76281980&t=0)** - [Instructor] In this challenge, you were required to utilize [[Prompt Engineering]] techniques to develop an application that assist users in creating talk proposals. The four prompting techniques that you had to investigate are zero-shot prompting, few-shot prompting, instruction prompting, and chain of thought prompting. To use OpenAI's API, we need to follow a few steps. Firstly, we need to install the OpenAI package. After that, we need to obtain an API key and set it as an environment variable that OpenAI can access. Then we need to specify which model we want to use. In this case, the GPT-3.5 Turbo model will be used. Finally, to generate the text, we will use the chat completion's API, where we will specify the prompt, model and the role, in this case, user. The output will contain the text generated by OpenAI's GPT-3.5 model. Now let's explore the concept of zero-shot prompting. Currently, I have a simple prompt that only ask to generate a talk without providing any additional details. Although the outcome of this prompt may be satisfactory,
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-prompting-llms-to-generate-text?u=76281980&t=95)** it could potentially include Uranus or made up information. Moreover, the resulting talk proposal would be too generic, lacking the specificity needed for a particular conference. As a result, there's a lower [[Probability]] of the talk being selected for that conference. To enhance the quality of output, we can use few-shot prompting. Unlike zero-shot prompting where there is no context, in few-shot prompting, we provide some examples to GPT that it can use to improve its output. This method helps in generating more consistent and factual results. The more relevant examples you provide, the better the output would be. To understand it better, you can refer it to an example of a prompt here. Even after adding some context, the output may not be formatted the way you want it to be. Moreover, you may require conference specific details in the talk proposal that a language model like LLM may not provide with just a few-shot prompting. This is where instruction prompting can be useful. This helps to reduce hallucination and ensure high quality output that is consistent across various outputs. In my example prompt, I have
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-prompting-llms-to-generate-text?u=76281980&t=191)** provided instructions for the structure of the resulting text, including how to structure the talk proposal and the key sections the proposal should have. The final prompting technique we had to use is called chain-of-thought prompting. This involved breaking down a task into smaller steps, prompting the LLM to think step by step and to generate the intermediate results of its reasoning process. By doing so, we are able to guide the LLM towards the final output more effectively. Here is the final prompt where we combine all the prompt techniques we have learned before. In summary, this chapter highlights the importance of prompt engineering and proper prompting for achieving the best results. To obtain accurate and meaningful output, it is essential to provide relevant context to the language model. By doing so, the language model can comprehend the subject matter and generate more precise results. You can also combine multiple techniques to get better outputs. For example, you can use few-shot prompting in combination with instruction prompting to generate high quality outputs that are specific to your needs. However, it is important to remember that increasing prompt length will increase costs.
>
> **[4:47](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/solution-prompting-llms-to-generate-text?u=76281980&t=287)** This is because the language model needs to process more information, which requires more computational resources. Additionally, using chain-of-thought promptings can further increase output size, which in turn increases cost. It is important to balance the quality of the output with the cost of generating it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (2), [[Probability]] (1)
> **Env Vars:** api (3), gpt (3), llm (3)
> **Versions:** 3.5 (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-and-llmops-building-blocks-and-applications/next-steps?u=76281980&t=0)** - [Narrator] Welcome to the closing chapter of our current journey into the world of [[Large Language Models (LLM)|large language models]]. We have covered a lot of ground together, starting with an in-depth exploration of LLM evolution architecture, and the real world applications. We have developed a foundational understanding of these powerful tools. We then lifted the curtains on the more technical side, fine-tuning, compression techniques, and [[Prompt Engineering]], honing our skills to solve practical challenges that help solidify fine-tuning and prompt skills. We hope you've enjoyed the course and the engaging comics that accompanied our learning process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** llm (1)
> **Speakers:** - [narrator] (1)


## Skills Covered

- Large Language Model Operations (LLMOps)
- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [[Manage Your LLMs with LLMOps]]
**1 of 4** | [[LLMOps in Practice- A Deep Dive]] →

## Appears In

- [[Manage Your LLMs with LLMOps]]

## Related Courses

_Courses sharing skills:_

- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI), Large Language Model Operations (LLMOps)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Azure Ai For Developers Ai Design Foundations]] — Artificial Intelligence (AI), Large Language Models (LLM), Large Language Model Operations (LLMOps)
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)