---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: azure-ai-for-developers-llms-and-slms
url: "https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms"
duration_minutes: 78
duration: 1h 18m
level: Intermediate
updated: 4/11/2025
learners: 115527
skills:
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Microsoft Azure
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE1aU5utCa-eA/learning-public-crop_675_1200/B4DZYbggMsG8Ac-/0/1744218227808?e=2147483647&amp;v=beta&amp;t=yOdl__3R7xMW9UftObhUtMHgIOLBnJjMUfCSpsaz1J8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Build AI Products Using Azure AI Services in Your Development Lifecycle
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/microsoft-azure
status: not-started
created: 2026-04-19
---

![Azure AI for Developers: LLMs and SLMs](https://media.licdn.com/dms/image/v2/D4D0DAQE1aU5utCa-eA/learning-public-crop_675_1200/B4DZYbggMsG8Ac-/0/1744218227808?e=2147483647&amp;v=beta&amp;t=yOdl__3R7xMW9UftObhUtMHgIOLBnJjMUfCSpsaz1J8)

# Azure AI for Developers: LLMs and SLMs

> As an Azure developer, it’s important to stay up to date with the latest technological advancements in your field. In this course, instructor Sam Nasr covers the fundamental concepts of small language models (SLMs) and large language models (LLMs), equipping you with the core skills required to leverage the power of AI. Explore the key differences between each model, how they work, and when it's a

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms) | 1h 18m | Intermediate | 116K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sam Nasr]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Microsoft Azure

## Table of Contents

### Introduction

#### Choosing the right AI model: LLMs and SLMs explained
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=0)** - Are you choosing the right AI model for your project?
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=3)** With a focus mainly on large language models, many developers lose sight of small language models, don't know their strengths, or may not even know they exist at all.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=12)** This can lead to choosing the wrong model and building on the wrong foundation.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=15)** In this course, we'll look at the differences between small language models, SLMs, and large language models, LLMs.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=23)** We'll explore their architecture, their pros and cons, and how they can be used in Azure.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=28)** Hi, I'm Sam Nasr.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=30)** I'm a senior software engineer and trainer for NIS Technologies.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=33)** If you love AI as much as I do, you'll definitely enjoy this course.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=37)** Join me to unlock the potential of these powerful models and transform the way you work with AI.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/choosing-the-right-ai-model-llms-and-slms-explained?u=76281980&t=42)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** nis (1)
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-you-should-know?u=76281980&t=0)** - [Instructor] Some of the things you'll need to know before starting this course are fundamental knowledge or exposure to AI and a general idea of how AI models are trained and work.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-you-should-know?u=76281980&t=9)** You also need to know terminology such as neural networks, tokens, and vectors.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-you-should-know?u=76281980&t=13)** For the demos and exercises, you'll need working knowledge of the Azure portal, the Azure AI Foundry, and C#.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-you-should-know?u=76281980&t=20)** I will walk you through the demo step-by-step, but having a working knowledge of these items will help you absorb the concepts faster.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Small Language Models

#### What is a small language model (SLM)?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=0)** - [Narrator] SLMs or small language models are AI models similar to their large language model counterparts.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=6)** They're trained on smaller data sets, and a small language model typically has a parameter count in the range of millions to a few billion, whereas LLMs can have hundreds of billions or even trillions of parameters.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=17)** SLMs are designed to perform a variety of tasks like natural language understanding or sentiment analysis.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=23)** They also have low computational requirements for devices with limited processing power, such as tablets, embedded systems, or edge devices.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=31)** Some of the advantages are that it's a smaller size model that you're dealing with, so it makes them more portable and can run on almost any device using less CPU and memory storage.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=40)** Most SLMs are task focused for specific tasks such as translation, summarization, or sentiment analysis.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=47)** As opposed to large language models that can be multimodal, SLMs are also easier to fine tune for industry specific requirements.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=55)** For example, if you're utilizing a small language model in either the medical field or the engineering field, you may want to fine tune it to utilize terminology used in that field.
>
> **[1:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=65)** Also, because small language models are small, they are efficient and can typically run faster than LLMs.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=71)** Like everything else, it also has disadvantages.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=75)** So SLMs have limited understanding of complexity, and they may struggle to grasp complex or nuanced language constructs leading to less accurate or insightful responses.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=85)** Also, they have less capacity to learn from vast amounts of data, which can result in lower performance on tasks that require deep understanding or contextual awareness.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=96)** SLMs might also struggle to maintain context over longer conversations or documents because of this lower capacity leading to fragmented or inconsistent responses.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=105)** Another disadvantage is that SLMs have a lack of generalization, meaning the responses generated may be more straightforward and less sophisticated compared to those from larger language models.
>
> **[1:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=117)** They might like the ability to produce detailed creative or engaging text.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-small-language-model-slm?u=76281980&t=121)** Also, SLMs often have more limited capabilities in terms of understanding different languages, handling diverse inputs, and performing a wide range of tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1), require (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [narrator] (1)

#### How do SLMs work?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=0)** - [Narrator] To understand how SLMs work, let's take a look at some general concepts used.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=5)** SLMs are built on layers of neural networks, specifically designed to handle natural language processing and do it in a quick, efficient manner.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=13)** They can be trained using different data sets, for example, labeled for supervised learning, where the model learns the input and associates it with a labeled output.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=23)** Another one is unlabeled for unsupervised learning.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=26)** This involves learning patterns from the data without any explicit labels.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=30)** The model analyzes and learns the structure syntax and the semantics of the language based on the patterns it observes in the data.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=37)** Also, there's self supervised learning.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=40)** This is a subset of unsupervised learning that we just discussed previously where the model generates its own label from the data.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=47)** For example, if might mask a word in a sentence and then predict the missing word based on the surrounding context.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=53)** When text is utilized, text is tokenized, meaning that it's broken down into smaller words and sub-words.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=59)** This allows the model to process the input at a granular level and capture relationships between different elements.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=66)** Typically, a small language model will contain an embedding layer representing words or tokens as vectors capturing semantic relationships.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=75)** Depending on the architecture of the small language model, it may have a RNN or a corral neural network.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=81)** This process is the sequence of data capturing dependencies, and SLM may also have transformers to capture contextual relationships in parallel.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=92)** Another concept that an SLM may contain is an attention mechanism.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=96)** This is used in transformer based models and allows the model to focus on relevant parts of the input data.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=102)** This enhances the model's ability to understand context and relationship and text.
>
> **[1:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=107)** If a model can be fine tuned, it involves training the model on a narrower data set, usually more industry or application specific for targeted context such as the medical or engineering fields.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=119)** Another concept is inference, which allows the model to use learn patterns for processing new data.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=125)** Transfer learning is where the models are trained on a larger dataset and later adapted to specific tasks.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-slms-work?u=76281980&t=132)** Last but not least, regularization techniques such as dropout, where it randomly removes connections and forcing the model to learn more generalized features.

> [!info]- Semantic Content
>
> **Env Vars:** slm (2), rnn (1)
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (1), self (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Popular SLM architectures
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=0)** - [Instructor] The field of small language models is quite dynamic and expanding with new architectures and variations being constantly developed.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=8)** There are many specialized models tailored to specific applications and domains.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=12)** Each architecture has its unique features and optimizations to balance performance and efficiency.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=18)** The choice depends on application, task complexity, and resource availability.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=23)** Let's take a look at some of these popular architecture models.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=26)** BERT stands for Bidirectional Encoder Representations from Transformers.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=32)** This was introduced in 2018 by Google, and it's a transformer-based architecture designed for pre-training on large datasets.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=40)** It captures bidirectional context for both proceeding and following words or tokens, which makes for a better understanding of the context.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=47)** Several different variations of BERT have been developed over the years, such as DistilBERT, which is a smaller, faster, and lighter version of BERT, designed to retain most of its performance while being more resource efficient.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=60)** There's MobileBERT, which is optimized for mobile devices and is designed to provide high performance with low latency and power consumption.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=69)** Also, TinyBERT, another compact version of BERT that is designed for tasks requiring less computational power while maintaining good performance.
>
> **[1:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=77)** MiniLM or Mini Language Model is another popular architecture.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=82)** It's a technique used to compress large pre-trained language models like BERT without significantly sacrificing performance.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=89)** The idea is to distill the knowledge from a large model into a smaller model by mimicking the self-attention mechanism of the teacher.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=97)** The teacher being the larger language model, and the student being the smaller language model that's being distilled to.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=103)** This makes the smaller model more efficient for tasks like text classification, question answering, and other natural language processing tasks.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=111)** It's designed for tasks that require less computational resources.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=116)** As you see on the chart, there are many different versions of RoBERTa that have been established over the years, as well as BERT.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=123)** Another popular architecture type is Transformer, which was introduced in 2017.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=128)** This uses self-attention mechanisms to examine different parts of the input simultaneously and capture contextual relationships among the text entered.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=136)** Long short-term memory or LSTM is a type of RNN that maintains a memory for longer periods.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=142)** Purpose of this is to capture dependencies and sequential data.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=146)** Another architecture type is Gated Recurrent Unit or GRU, and these are similar to LSTMs due to the use of RNNs, but have a simplified architecture.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=156)** They regulate information using two gates for updates and reset.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=161)** Last but not least, Generative Pre-trained Transformer or GPT developed by OpenAI.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=168)** This has gained a lot of popularity.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=170)** These are transformer-based models used to predict the next word in a sequence.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=174)** This allows them to generate coherent text relevant to the context.
>
> **[2:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=179)** Some examples of small language models are the MiniLMs as we had discussed previously, Gemma 2 developed by Google.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=186)** This is designed for efficient performance on Edge devices and resource-constrained environments.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=191)** Qwen 2 or Q-wen 2 is a family of models ranging from 0.5 billion to 7 billion parameters, and it's scalable and can be tailored for specific needs.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=202)** Mistral NeMo is also another example of an SLM, although this is on the larger side where it contains 12 billion parameters, and it's great for complex natural language processing like language translation and real-time dialogue systems.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=216)** Last but not least, Llama 3.1 8B.
>
> **[3:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-slm-architectures?u=76281980&t=220)** This model provides a balance between power and efficiency, suitable for tasks like questions, answering, and sentiment analysis.

> [!info]- Semantic Content
>
> **Env Vars:** bert (6), lstm (1), rnn (1), gru (1), gpt (1)
> **Code Keywords:** self (2), let (1), require (1)
> **Definitions:** is a  (3), stands for (1)
> **Versions:** 0.5 (1), 3.1 (1)
> **Analogies:** such as (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### Capabilities and limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=0)** - [Instructor] Let's discuss some of the capabilities of Small Language Models.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=4)** SLMs, in general, are capable of performing one or more natural language processing tasks.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=10)** Some of these tasks include text generation, text classification, or named entity recognition, where it identifies and classifies proper nouns and other significant entities in text.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=21)** Some of the other features include question and answer, summarization, and translation.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=26)** In addition, this could also include dialogue systems for engaging in conversations with users, answering questions, or providing information and text completion or completing sentences or paragraphs based on initial input.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=40)** Another capability of SLMs is adaptability.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=43)** This could be done in a variety of ways.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=46)** SLMs can be fine-tuned for a specific task, like answering questions for customer support or optimized for analyzing emotions for sentiment analysis.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=54)** They can also be adapted to business domains and terminology.
>
> **[0:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=58)** For example, in the medical field, you might use terminology like CPAP, GI, or TB.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=63)** In the tech support field, you might utilize terms like USB-C, cache, or RAM.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=68)** Another way of utilizing adaptability of small language models is by using them in hybrid integration, where a small language model can pre-filter or pre-process the input before it is passed on to a large language model.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=81)** This would save on computational resources for the LLM.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=85)** Real-time inferencing with small language models is yet another capability.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=89)** This refers to the ability of these compact AI models to process and respond to input data almost instantaneously.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=96)** This capability is particularly valuable in scenarios where quick decision making and immediate feedback are crucial.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=103)** Here are some key aspects of SLM real-time inferencing.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=106)** First, low latency.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=108)** Due to their small size and fewer parameters, SLMs can perform computations much faster, resulting in lower latency.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=116)** Second is resource efficiency.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=118)** SLMs require less memory and computational power, making them ideal for deployment on edge devices, mobile phones, and other resource constrained environments.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=127)** Privacy and security.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=129)** Since SLMs can operate locally without needing constant cloud connectivity, they help keep sensitive data on-prem, enhancing privacy and security.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=137)** A fourth advantage to real-time inferencing is cost-effectiveness.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=142)** They reduce computational requirements, make real-time inferencing with SLMs more cost-effective, both in terms of training and deployment.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=150)** Last, flexibility.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=152)** SLMs can be fine-tuned for specific tasks, allowing them to deliver high accuracy and performance for particular use cases.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=160)** Transfer learning is yet another capability of small language models.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=164)** This is a machine learning technique where a model developed for a particular task is reused as the starting point for a model on a second task.
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=171)** In the context of SLMs, transfer learning is particularly valuable because it allows these models to leverage pre-trained knowledge and adapt to specific tasks with relatively small datasets.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=182)** In a nutshell, here's how it works.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=185)** First step is pre-training, where we start with a trained SLM that is initially trained on a large corpus of text to develop a broad understanding of language.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=194)** This training helps the model learn general language patterns, grammar, and context.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=199)** Next is fine-tuning, where after the initial training, the model is fine-tuned on a smaller task-specific dataset.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=206)** This step adjusts the model's weights to perform well on the specific task, such as sentiment analysis, text classification, or named entity recognition.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=216)** There are several advantages provided by transfer learning.
>
> **[3:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=219)** First is efficiency.
>
> **[3:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=221)** Transfer learning significantly reduces the amount of data and computational resources needed to train the model for new tasks.
>
> **[3:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=228)** This makes it an efficient approach, especially for SLMs, which are designed to operate with limited resources.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=235)** Second is performance.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=236)** By leveraging pre-trained knowledge, SLMs can achieve high performance on specific tasks, even with smaller datasets.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=244)** This is particularly beneficial for applications where labeled data is scarce.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=249)** Third is versatility.
>
> **[4:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=251)** Transfer learning enables SLMS to be adapted to a wide range of natural language processing tasks, making them versatile tools for various applications.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=260)** On the opposite side of the token are task limitations for SLMs.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=264)** SLMs are often tailored to specific language tasks.
>
> **[4:27](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=267)** However, their creative abilities and understanding of nuanced language might be less sophisticated than those of large language models.
>
> **[4:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=274)** SLMs might struggle with tasks requiring extensive generalization from limited data as they have fewer parameters and less training data compared to larger models.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=284)** Another limitation is the inability to handle complex tasks due to reduced parameters and their resource efficiency.
>
> **[4:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=291)** SLMs also have limited contextual understanding where they don't perform as well as LLMs in capturing contextual dependencies or understanding the context over longer spans of text.
>
> **[5:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=302)** Small language models also may have lower accuracy due to resource efficiency and not perform as well as LLMs in certain language tasks.
>
> **[5:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=312)** Due to their small size, SLMs have limited capacity to store and process extensive knowledge, which can affect their ability to generate highly accurate and detailed responses.
>
> **[5:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=322)** Another SLM limitation is data bias susceptibility.
>
> **[5:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations-25358374?u=76281980&t=326)** Because of transfer learning and lack of capacity, SLMS are more susceptible to biases and training data as model learning builds on top of previously trained models.

> [!info]- Semantic Content
>
> **Env Vars:** slm (3), slms (2), cpap (1), usb (1), ram (1)
> **Code Keywords:** let (1), require (1)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Large Language Models

#### What is a large language model (LLM)?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=0)** - [Instructor] A large language model is an advanced type of artificial intelligence model designed to understand user requests and generate human-like responses.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=8)** These responses are based on a vast amount of training data.
>
> **[0:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=12)** These models are characterized by their large number of parameters, which allow them to perform complex language-related tasks.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=19)** LLMs can perform a variety of tasks, including answering questions, creating content, translating languages, summarizing information, and even engaging in conversations.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=30)** Both user requests and responses generated are all done using natural language, basically, the way you and I speak day-to-day.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=37)** The goal is to make the interaction with the AI as natural and helpful as possible.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=42)** LLMs are created using vast amounts of text data from books, articles, websites, and other sources.
>
> **[0:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=49)** This allows them to learn patterns, context, and meaning, and language.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=53)** Here are some of the key points about LLMs, first parameters, the size of an LLM is often measured by the number of parameters, essentially, adjustable weights in the model.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=64)** More parameters generally means a greater capacity to learn and generate sophisticated responses.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=70)** For example, GPT-3, one of the well-known LLMs, has 175 billion parameters.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=78)** Another key point about large language models is fine-tuning.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=82)** These models can be fine-tuned on specific data sets to perform particular tasks or adapt to certain domains.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=88)** This enhances their performance and relevance for specific applications.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=93)** Large language models are built on neural networks, which are inspired by the human brain.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=97)** These networks consist of layers of interconnected nodes that process information.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=102)** The model adjusts the weights of these connections during training to improve its predictions and understanding.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=108)** Another key point about LLMs are the applications.
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=112)** LLMs are used in numerous applications, including chatbots, virtual assistants, content creation, code generation, and language translation.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=120)** Their versatility and performance make them valuable tools in various industries.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=125)** As you might have guessed, large language models offer several advantages.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=129)** First is versatility.
>
> **[2:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=131)** They can handle a wide range of tasks from natural language understanding, to text generation, translation, image creation, and so forth.
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=139)** Another advantage is quality.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=141)** They are capable of producing more coherent and contextually accurate text due to their extensive training on vast amounts of data.
>
> **[2:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=149)** They also have the advantage of creativity where they can generate creative content, including stories, poems, code, artwork, all with impressive fluency.
>
> **[2:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=159)** Large language models also offer complex understanding.
>
> **[2:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=162)** They're better at understanding nuanced contexts, idiomatic expressions, and complex queries, providing more accurate and helpful responses.
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=171)** We also need to examine disadvantages of LLMs.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=174)** First, they are resource intensive.
>
> **[2:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=177)** LLMs require significantly more computational power and energy for training and deployment, this can be costly and environmentally unfriendly.
>
> **[3:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=186)** Deploying LLMs often require specialized hardware and infrastructure.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=190)** A second disadvantage is latency and interference speed.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=193)** Due to their complexity and size, LLMs may have slower response times compared to SLMs, making them less suitable for real-time applications.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=202)** A third disadvantage is maintenance and updates.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=205)** LLMs are more challenging to update and maintain due to their size and complexity, whereas SLMs can be more easily adjusted and fine tuned.
>
> **[3:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=213)** Overfitting is another disadvantage of LLMs.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=216)** Large language models are prone to overfitting on their training data, especially when trained on massive data sets with a high degree of complexity due to their large number of parameters, which allows them to potentially memorize training data rather than learning generalizable patterns.
>
> **[3:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=232)** However, careful data cleaning, regularization techniques, and diverse training sets can mitigate this risk.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=240)** More specifically, data cleaning and preprocessing includes removing noise, duplicates, and biases from the training data.
>
> **[4:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=247)** Regularization techniques uses methods like dropout or regularization to prevent the model from becoming too complex.
>
> **[4:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=255)** A third method of addressing overfitting is augmentation techniques, which is adding variations to the training data to improve generalization.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=264)** Interpretability is the understanding and interpreting the decision-making process of LLMs.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=269)** This is a disadvantage because it is more challenging due to their complexity compared to the relatively simpler SLMs.
>
> **[4:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=276)** While large language models can generate impressive outputs, they often lack clear explanations for how they reach those results.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=284)** This is because LLMs have a vast number of parameters leading to intricate interactions between neurons, making it challenging to pinpoint which parts of the model are responsible for specific decisions.
>
> **[4:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=295)** A key disadvantage to large language models is overfitting.
>
> **[4:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=299)** This is where the model could potentially memorize training data rather than learning generalizable patterns.
>
> **[5:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=305)** There are several things that can cause an LLM to be vulnerable to overfitting.
>
> **[5:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=309)** First, biased or limited diversity in the data, second is lack of regularization.
>
> **[5:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=315)** A third cause for overfitting is long training times.
>
> **[5:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=318)** This is where the model is trained for a prolonged period of time without a stopping criteria.
>
> **[5:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=323)** Also, the model's large number of parameters and its complex architecture are also additional causes for overfitting.
>
> **[5:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=332)** There are multiple solutions that can be utilized to prevent overfitting.
>
> **[5:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=335)** First is data cleaning and preprocessing, where we're removing noise, duplicates, and biases from the training data.
>
> **[5:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=342)** Second is regularization.
>
> **[5:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=344)** Using methods like dropout, L1, or L2 regularization to prevent the model from becoming too complex.
>
> **[5:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=351)** Third is augmentation, we're adding variations to the training data to improve generalization.
>
> **[5:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=357)** Another solution for overfitting is early stopping.
>
> **[6:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=360)** This is where monitoring the model's performance on a validation set and stopping training when performance starts to degrade on new data.
>
> **[6:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/what-is-a-large-language-model-llm?u=76281980&t=367)** A fifth solution for preventing overfitting is utilizing diverse training sets, ensuring that training data represents a wide range of examples and perspectives.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), gpt (1)
> **CLI Commands:** make (2)
> **Code Keywords:** require (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### How do LLMs work?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=0)** - [Person] Let's take a look at how LLMs work.
>
> **[0:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=3)** First thing, as with any model, we need to look at the training data.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=6)** Large language models are trained on massive data-sets that include text from various sources like books, articles, websites and more.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=14)** This text data helps the model learn the intricacies of human language, such as grammar, syntax, semantics and context.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=23)** Once the training data is collected and provided to the model, tokenization then takes place.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=29)** This is where the text data is broken down into smaller units called tokens.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=33)** Tokens can be words, sub-words or even characters, depending on the model's design.
>
> **[0:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=39)** This process helps the model manage and analyze the text more effectively.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=43)** Next, the training is done with neural networks.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=46)** LLMs use deep-learning techniques, specifically neural networks, to process and learn from the text data.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=52)** These neural networks are composed of layers of interconnected nodes, also known as neurons, that can adjust their connections or weights based on the data they process.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=62)** Another thing the LLM will perform is pattern recognition.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=66)** During the training, the model identifies patterns in the text data.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=70)** It learns to predict the next words in a sentence based on the context provided by the previous words.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=76)** This is done by adjusting the weights of the neural connections to minimize prediction errors.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=82)** Another method for how LLMs work are attention mechanisms.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=86)** Large language models often use attention mechanisms such as the transformer architecture to focus on relevant parts of the input text.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=94)** This allows the model to consider the importance of different words and the relationships within the context of the entire text.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=101)** Also, just like with small language models, large language models can be fine-tuned, so after the initial training on a large data-set, the model can be fine tuned for specific tasks or domains.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=113)** As we had mentioned before, some business domains have specific terminology, such as CPAP in the medical industry or the term "cache" as used in computer support.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=124)** After fine-tuning comes generating text.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=127)** When given a prompt or a query by the user, the large language model uses its learned knowledge to generate relevant and coherent text.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=135)** It does this by predicting the most likely next words or sentences based on the context provided by the input.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=141)** And lastly, there's iterative improvements.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=144)** LLMs are continually improved through additional training and updates.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=148)** As new data becomes available, the models can be retrained or fine-tuned to enhance their accuracy and their capabilities.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=155)** For a text workflow, a LLM follows several steps, first is the input, where the user provides a text prompt or a question, next comes the tokenization, where the input text is broken down into tokens, the third step is the processing, where the tokens are processed through the neural network layers, next is the use of attention mechanisms, this is where the model focuses on relevant parts of the input, afterwards, prediction is when the model generates the next word or sequence of words based on the learned patterns, and the final step is the output, where the generated text is provided as the response to the user.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=192)** Let's view this scenario as an example for text processing.
>
> **[3:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=196)** A user provides the input text asking, "What are the main causes of climate change?"
>
> **[3:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=201)** That text is then tokenized, where it's then broken out into several words, and in some cases, one word will equate to two or more tokens.
>
> **[3:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=212)** The next step is the neural network processing, where these tokens are then processed through their neural network layers, and during this step, the model uses the patterns and context it has learned during the training to understand the input text.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=224)** The next step is the use of attention mechanisms, and this helps the model focus on the most relevant parts of that input text, so it evaluates the importance of each word in the context of the entire sentence.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=235)** For example, it might give more weight to the words "causes," "climate" and "change" in that user-specified text.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=244)** The following step is then to generate the text, so based on the input and the learned patterns, the model generates a coherent and relevant response.
>
> **[4:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=252)** If we're utilizing fine-tuning for this model, it would be done with specific data related to climate science.
>
> **[4:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=258)** It might include even more detailed information or technical terms depending on the data that is provided.
>
> **[4:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=265)** Now, let's take a look at a slightly different workflow utilizing vision.
>
> **[4:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=269)** Large language models like those used in visual language tasks process images through a combination of vision and language techniques.
>
> **[4:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=276)** Here's how they typically work.
>
> **[4:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=278)** First is image encoding, where the image is passed through a convolutional neural network, also known as CNN, or a vision transformer to extract high-level features.
>
> **[4:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=289)** These features represent the important aspects of the image, such as shapes, colors, and objects.
>
> **[4:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=295)** Next is text encoding.
>
> **[4:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=297)** If the task involves text, for example, image captioning or visual question-answering, the text is encoded using a language model.
>
> **[5:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=305)** This step transforms the text into a numerical representation that the model can process.
>
> **[5:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=311)** In the case where we're combining modalities, meaning we're asking for various features or answers from the model, the visual features and text representations are combined using a fusion mechanism.
>
> **[5:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=322)** This falls under the multimodal fusion.
>
> **[5:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=324)** This could be done through attention mechanism, concatenation, or other techniques that allow the model to understand the relationship between the visual and textual data.
>
> **[5:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=335)** In addition, it may utilize cross-model attention.
>
> **[5:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=338)** The model uses attention mechanisms to focus on specific parts of the image and text that are most relevant to the task.
>
> **[5:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=345)** This allows the model to generate coherent and contextually-accurate responses or captions.
>
> **[5:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=351)** The last step is output generation.
>
> **[5:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=353)** For tasks like image captioning, the model generates text based on the combined features providing a description of the image.
>
> **[6:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=360)** For answering questions, specifically for visual question-answering, the model generates an answer to the question based on the image and the text.
>
> **[6:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=368)** Some of the models that are capable of doing this are CLIP, which stands for "Contrastive Language Image Pre-training," or DALL·E, or VisualBERT.
>
> **[6:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=380)** Here's a simplified workflow for an image captioning task.
>
> **[6:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=384)** First is the input, where an image is inputted into the model, followed by the second step of feature extraction, this is where the image is processed by a CNN to extract features.
>
> **[6:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=395)** The third step is text generation, where the model uses these features to generate a caption, and lastly is the output, where the generated caption describes the content of the image.
>
> **[6:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=405)** Another workflow available with large language models is image classification.
>
> **[6:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=411)** This is where the model can classify objects in an image by working together with vision models.
>
> **[6:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=416)** Here's a step-by-step breakdown of how this process typically works.
>
> **[7:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=420)** First is the image pre-processing.
>
> **[7:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=422)** This is where an input image is provided that needs to be classified.
>
> **[7:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=426)** The image is then resized, normalized, and sometimes augmented to ensure it's in a suitable format for the model.
>
> **[7:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=433)** Next step is feature extraction.
>
> **[7:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=435)** This is where we utilize CNN, or convolutional neural network, and this is where the pre-processed images pass through to extract high-level features, including edges, textures, shapes, patterns, et cetera.
>
> **[7:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=449)** These are all the various things that represent the important aspects of the image.
>
> **[7:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=453)** Third step is feature encoding.
>
> **[7:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=455)** This is where the high-level features extracted by the CNN are often flattened into a single feature vector.
>
> **[7:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=461)** In addition, this could utilize embedding, this is where the feature vector is then embedded into a representation that can be processed by the LLM.
>
> **[7:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=470)** Step four is the object classification.
>
> **[7:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=472)** This is where the embedded feature vector is passed through a classification layer, which consists of fully-connected neural network layers.
>
> **[8:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=480)** This layer assigns probabilities to different object classes.
>
> **[8:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=483)** The final classification layer usually uses a softmax function to generate a probability distribution over possible object classes.
>
> **[8:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=492)** The last step, step five, is the output.
>
> **[8:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=495)** This is where the top predicted classes are provided.
>
> **[8:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=498)** The model outputs the top predicted object classes based on the highest probabilities.
>
> **[8:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=503)** In addition, the model also provides a conference score for each predicted class indicating the likelihood that that object belongs to each class.
>
> **[8:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=511)** In the case where the task involves both image and text data, multimodal fusion will then be implemented.
>
> **[8:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=517)** This is where the visual features can be combined with text embeddings.
>
> **[8:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=521)** This fusion helps the model generate more accurate and contextually-relevant descriptions.
>
> **[8:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=527)** In addition, attention mechanisms can also be used in large language models, where it can be used to focus on specific parts of the image that are most relevant to the object classification task.
>
> **[8:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=537)** For example, let's consider a scenario where you have an image of a cat and you want to classify it.
>
> **[9:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=543)** First of the five steps is the image of the cat is input into the model.
>
> **[9:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=547)** Next is feature extraction, whereas CNN extracts features like fur, texture, ears and whiskers.
>
> **[9:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=554)** The third step is embedding, where these features are embedded into a vector representation.
>
> **[9:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=559)** Step four is a classification, where the embedded features are passed through a classification layer, which assigns high probabilities to the "cat" class.
>
> **[9:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=568)** Last and the fifth step is the output, where the model outputs "cat" as the top predicted class with a high confidence score.
>
> **[9:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/how-do-llms-work?u=76281980&t=576)** This approach allows LLMs to classify objects and images effectively by leveraging the strengths of both vision and language techniques.

> [!info]- Semantic Content
>
> **Env Vars:** cnn (5), llm (3), cpap (1), clip (1), dall (1)
> **Code Keywords:** let (4), class. (2), pass (1), function (1)
> **Analogies:** such as (4), for example (3), just like (1)
> **CLI Commands:** cat (4)
> **Definitions:** known as (2), stands for (1), is a  (1)
> **Speakers:** - [person] (1)

#### Popular LLM architectures
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=0)** - [Instructor] Much like SLMs, the number of large language model architectures continues to grow as research advances.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=6)** Some of these architecture patterns are used for both SLMs and LLMs with a key difference being the number of parameters.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=13)** Here are the most significant and popular architectures.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=16)** First, the transformer-based architecture.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=19)** These are GPT or Generative Pre-trained Transformer developed by OpenAI.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=24)** GPT Models like GPT-3 and GPT-4 are known for their impressive text generation capabilities.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=31)** Another architecture is the autoencoder-based architecture.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=35)** These models are used for generating new text by learning to encode and decode text data.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=40)** A third pattern's called sequence-to-sequence architecture.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=43)** These models are used for tasks like machine translation where the input sequence or the source language is transformed into an output sequence in the target language.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=52)** Recursive neural network, or RNN, are a class of artificial neural networks designed for processing sequences of data.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=60)** These models use tree structures with hidden layers between input and output layers to process sequential data, but can be adapted for hierarchal data.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=68)** A fifth pattern is the T5 or text-to-text transfer transformer.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=74)** This architecture was developed by Google and it treats every NLP or natural language processing problem as a text-to-text problem, simplifying the approach to various tasks.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=84)** A sixth architecture that we'll look at is XLNet.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=88)** This was also developed by Google, and XLNet combines the best of both auto-regressive and autoencoding models.
>
> **[1:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=95)** It outperforms BERT on a variety of language tasks by learning bi-directional context.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=100)** The seventh architecture we'll look at is BERT and its variants.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=103)** BERT, if you recall, is the bi-directional encoder representation from transformers.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=108)** It's designed for understanding the context of words in search queries, and is widely used for tasks like text classification and question answering.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=116)** As mentioned in a previous video, BERT is an architecture pattern that can be used for SLMs, but can also be used for LLMs.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=123)** A variant of BERT is ALBERT, which is A Light BERT.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=127)** This particular model reduces model size while maintaining performance.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=132)** It achieves this through factorized embedding parameterization and cross-layer parameter sharing.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=138)** An eighth architecture we'll look at is ELECTRA.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=141)** This is short for Efficiently Learning an Encoder that Classifies Token Replacements Accurately.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=147)** Instead of masking tokens like BERT, ELECTRA corrupts the input by replacing tokens and trains the model to identify which tokens were replaced.
>
> **[2:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=156)** Another pattern is Longformer.
>
> **[2:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=158)** This is designed to handle long documents efficiently.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=161)** Longformer scales linearly with input length using a combination of local and global attention mechanisms.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=168)** In addition, there's also Reformer.
>
> **[2:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=170)** This focuses on optimizing memory and computational efficiency for very long sequences.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=176)** It uses techniques like locality sensitive hashing for faster attention calculations.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=182)** The 11th pattern we'll look at is GPT-Neo.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=185)** This is an open source model developed by Luther AI that aim to replicate the capabilities of GPT-3.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=193)** These models as well as GPT-J and GPT-NeoX are designed to be accessible for research and experimentation.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=202)** Lastly is the BigBird pattern.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=204)** This is also developed by Google and it extends the transformer model to handle longer sequences by using sparse attention, which reduces the quadratic dependency on sequence length.
>
> **[3:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=215)** Keep in mind, this list is not exhaustive as new architectures and variations are frequently being developed in the field of natural language processing and artificial intelligence.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/popular-llm-architectures?u=76281980&t=224)** In addition, researchers and engineers continuously innovate to improve performance, efficiency, and adaptability of these models, creating new variations.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (8), bert (7), electra (2), rnn (1), nlp (1)
> **Definitions:** is an  (2), is a  (1), short for (1)
> **Code Keywords:** extends (1)
> **Cross-References:** previous video (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Capabilities and limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=0)** - [Presenter] Large language models, as a whole, have a wide range of capabilities that can be divided into four categories.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=6)** Those categories are text, image, language, and creative.
>
> **[0:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=11)** The category of text capabilities contains a wide range of tasks and those can also be divided into four subcategories.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=18)** The first one we'll look at is text processing.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=21)** Within text processing, there is text generation.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=24)** This is where LLMs can generate coherent and contextually relevant text based on a given prompt.
>
> **[0:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=30)** Another is text summarization, where LLMs can provide concise summaries of longer texts, making it easier to grasp the main points quickly.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=38)** Another is text completion.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=41)** This is where the large language model can predict and complete sentences or paragraphs based on the context.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=46)** And this is useful for drafting emails, writing code, or creating documents.
>
> **[0:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=51)** The fourth one under text processing is content moderation.
>
> **[0:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=54)** This is where LLMs can help identify and filter out inappropriate or harmful content, ensuring safer online environments.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=62)** Another subcategory under text capabilities is data analysis.
>
> **[1:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=67)** This is where the LLM can analyze either structured or unstructured data.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=71)** With structured data, it refers to tables and databases, and this helps to provide insights and summaries and visualizations of that data.
>
> **[1:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=79)** It can also process unstructured data where it can process and make sense of unstructured data, such as social media posts, emails, or other freeform text.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=88)** The third subcategory of text capabilities is simulation and prediction.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=93)** For predictive text, it can predict and suggest the next word or phrase in a text, improving typing efficiency.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=99)** Another scenario simulation where it can generate and simulate different scenarios based on input parameters.
>
> **[1:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=105)** For example, asking the model to build a business strategy model.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=109)** Another task within text capabilities is personalization.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=113)** This is where the model can generate personalized recommendations, responses, or content based on user preferences and behavior.
>
> **[2:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=120)** For example, when you visit an e-commerce site and you purchase an item, there's also items that are recommended that go along with that item.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=128)** For example, you purchase a laptop.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=130)** It might also recommend a mouse or a mouse pad, and other things that go along with it.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=136)** The last subcategory of text capabilities is code generation and understanding.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=141)** This is where it can provide examples of code writing, code completion, and code debugging.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=146)** Now, let's turn our attention to image capabilities of LLMs.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=150)** First is image generation.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=152)** This is where a large language model can generate images based on text prompts.
>
> **[2:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=157)** This can be useful for creating illustrations, artwork, or visual content.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=161)** Another is image description where the LLM can generate detailed descriptions of the images that it was provided.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=168)** This is useful in helping users understand the content and the context of an image.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=173)** A third task is image captioning.
>
> **[2:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=176)** This is where the model can provide captions for images, which is useful for accessibility and enhancing searchability.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=183)** A fourth and more useful one is visual question answering.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=187)** This is where the model can answer questions about the content of an image that it was provided, and this helps to provide insights based on visual information.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=195)** Lastly is image tagging.
>
> **[3:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=198)** This is where the LLM can suggest relevant tags or keywords for images, making it easier to organize and search for visual content.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=205)** The third category we'll look at for LLMs are language capabilities, and this can also be divided into four subcategories, with the first one being audio processing.
>
> **[3:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=216)** Another is text to speech where it can generate human-like speech from text input, and this enables applications like virtual assistants and audiobook creation.
>
> **[3:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=225)** A third is the opposite, which is speech to text, and this converts spoken language into text.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=231)** So this is useful for transcribing audio files or realtime speech.
>
> **[3:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=235)** The next subcategory of language capabilities is natural language understanding.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=240)** So this is useful for sentiment analysis where it can determine the sentiment of a comment or a text, either a positive, negative, or neutral.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=249)** There's also named entity recognition where it can identify and classify entities, such as names of people, organizations, and locations within the text.
>
> **[4:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=258)** And last is topic modeling, where it can identify and categorize topics within a large corpus of text.
>
> **[4:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=265)** Moving on to the third subcategory of language capabilities is conversational AI.
>
> **[4:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=271)** This is where chatbots can engage in human-like conversations for Q&A, customer support, or even entertainment.
>
> **[4:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=278)** Another one is virtual assistant, where it performs tasks like scheduling, setting reminders, and answering questions.
>
> **[4:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=284)** And the last subcategory of language capabilities is translation and multilingual capabilities.
>
> **[4:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=291)** So for language translation, it will translate text from one language into another, enabling cross-lingual communication.
>
> **[4:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=298)** And lastly, multilingual understanding where it can process and generate text in multiple languages, making them versatile for global applications.
>
> **[5:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=307)** The fourth and probably most powerful category of large language models is creative capabilities.
>
> **[5:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=312)** This is the ability to generate creative content in a variety of ways.
>
> **[5:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=316)** For example, there are storytelling that utilizes text generation where it can generate creative stories, poems, and other forms of written content.
>
> **[5:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=324)** There's also music composition where it can actually create music by generating sequences of notes and chords.
>
> **[5:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=330)** Another one is art and design, which utilizes image generation.
>
> **[5:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=333)** This is useful in creating visual designs, layouts, and artistic compositions.
>
> **[5:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=339)** Now let's turn our attention to some of the limitations of LLMs.
>
> **[5:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=343)** First, they're resource intensive, meaning they require high CPU and memory usage.
>
> **[5:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=348)** And because of this, they can only run on limited hardware, meaning higher performing processors that are not widely available on every machine.
>
> **[5:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=357)** Another limitation is the complex training.
>
> **[5:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=359)** Large language models require vast datasets and long training periods.
>
> **[6:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=364)** This also makes them difficult to update with more recent information whenever the model needs to be retrained.
>
> **[6:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=370)** And fourth and most controversial is ethical misuse.
>
> **[6:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=373)** Because of the great capabilities of large language models, they can be used to spread misinformation.
>
> **[6:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/capabilities-and-limitations?u=76281980&t=379)** For example, generating improper images of actions that never really occurred or generating false documents.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), such as (2)
> **Code Keywords:** let (2), require (2), this, (1)
> **Env Vars:** llm (3), cpu (1)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [presenter] (1)


### 3. Choosing a Model

#### Difference between SLM and LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=0)** - [Instructor] In this video, we'll look at the differences between SLMs and LLMs, and how they differ in six different aspects, such as model size, number of layers, attention heads, context window, training data, and computational requirements.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=15)** Before discussing these differences, let's review a few definitions.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=19)** First, let's look at parameters.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=21)** A parameter refers to one of the many internal variables that the model learns during training.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=26)** These parameters are essentially numerical values that get adjusted to minimize the difference between the model's predictions and the actual data.
>
> **[0:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=35)** Parameters include weights and biases that get fine-tuned to optimize the model's performance.
>
> **[0:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=41)** Weights determine the strength of the connections between neurons and neural networks, while biases help adjust the output.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=47)** Layers are a critical component of the neural network architecture and used in all model types.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=53)** Each layer is composed of multiple neurons or units, and these layers are stacked on top of each other to form a deep neural network, each layer processing the input from the previous layer, and passing its output to the next layer.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=66)** This deep architecture enables the model to handle sophisticated language tasks with high accuracy.
>
> **[1:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=72)** Each layer in the network learns different levels of abstraction.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=75)** Lower layers might capture basic features like word embeddings, while higher layers capture more complex relationships and patterns.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=83)** The number of layers or depth in a model determines its capacity to learn and represent more information.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=89)** More layers generally allows the model to capture more intricate details, but they also require more computational resources.
>
> **[1:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=96)** Continuing on with our definitions, let's look at some of these layers in more detail.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=101)** First, there's the input layer.
>
> **[1:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=103)** This is the initial layer of the model that receives raw data.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=106)** Next is what's referred to as a hidden layer.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=109)** This is not a layer type, per se, but it's a general term that describes the layers between the input layer and the output layer.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=116)** Some of these layers include the embedding layer, which converts input tokens into dense vector representations called embeddings.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=123)** These embeddings capture semantic and syntactic information about the tokens.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=128)** Another is positional encoding layer.
>
> **[2:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=130)** This adds information about the position of tokens in a sequence, enabling the model to understand the word order.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=137)** Another is the normalization layer.
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=139)** This helps to stabilize training and improves model performance by normalizing inputs to subsequent layers.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=146)** The dropout layer prevents overfitting for LLMs by randomly ignoring some connections during training.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=152)** And last is the recurrent layer.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=155)** This is a type of layer used in recurrent neural networks, also known as RNNs, which are designed to process sequential or time series data such as text, speech, or video.
>
> **[2:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=165)** Some common types of recurrent layers are LSTM, or long short-term memory.
>
> **[2:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=171)** Another is GRU or gated recurrent unit.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=175)** This is a simpler version of LSTM that still manages long-term dependencies effectively.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=180)** And last but not least is the output layer.
>
> **[3:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=183)** This produces predictions such as the next word in a sentence, or classification labels.
>
> **[3:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=188)** Depending on the architecture pattern of the model, various combinations of layers would be used.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=194)** Please keep in mind the layers mentioned here is not an extensive or exhaustive list, but rather a short list of the common layers that are used.
>
> **[3:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=202)** Next, let's turn our attention to attention heads.
>
> **[3:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=205)** These are a smaller independent mechanism within a layer.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=208)** This allows a model to focus on different parts of the input sequence simultaneously, but enhancing the model's ability to understand context and relationships within the text.
>
> **[3:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=218)** Specifically, there are crucial components of the transformer architecture, more specifically, multi-head attention mechanisms.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=226)** In a transform model, the attention mechanism is split into multiple attention heads.
>
> **[3:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=231)** Each head processes the input independently, and captures different aspects of the relationships between tokens or words or sub-words in the sequence.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=240)** Attention heads also offer the ability for parallel processing.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=244)** They work in parallel, allowing the model to attend to multiple parts of the input sequence at the same time.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=249)** This parallelism improves the model's efficiency and its ability to capture diverse contextual information.
>
> **[4:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=256)** Another is weighted representations.
>
> **[4:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=258)** Each attention head produces a set of weights that represent the importance of each token in the context of others.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=264)** By combining the outputs of all attention heads, the model can create a rich, nuanced representation of the input sequence.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=272)** Attention heads provide two benefits, first, enhanced context understanding.
>
> **[4:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=277)** With multiple attention heads, the model can simultaneously focus on different parts of the sentence or document, capturing various relationships and dependencies.
>
> **[4:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=286)** Another benefit is improved performance.
>
> **[4:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=289)** This multi-head approach allows the model to handle complex language tasks more effectively, leading to better performance and tasks like translation, summarization, and question answering.
>
> **[5:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=300)** For example, let's consider a sentence.
>
> **[5:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=303)** The cat sat on the mat.
>
> **[5:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=305)** An attention head might focus on their relationship between cat and sat, while another might focus on sat and mat.
>
> **[5:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=312)** By having multiple heads, the model can understand the complete context more accurately.
>
> **[5:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=317)** In summary, attention heads are like multifaceted lenses that help LLMs process and understand language in a more sophisticated and context-aware manner.
>
> **[5:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=328)** Another definition we want to look at is that for the context window.
>
> **[5:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=331)** This refers to the maximum length of text that the model can process at one time.
>
> **[5:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=336)** This can include previous prompts, such as conversation history, as long as the total length is not exceeded.
>
> **[5:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=342)** The context window is often measured in tokens.
>
> **[5:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=345)** A larger context window allows the model to consider more of the surrounding text, leading to a more accurate and coherent response.
>
> **[5:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=353)** However, if the input text exceeds the context window, the model may truncate the text or divide it into chunks, which could affect its ability to maintain context and coherence.
>
> **[6:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=364)** Now, let's revisit the six aspects previously discussed, and see what they look like for small language models.
>
> **[6:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=370)** So the model size for a small language model would be on the order of a few million to a few billion parameters.
>
> **[6:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=377)** The number of layers would be between single to double digits to help reduce computational overhead.
>
> **[6:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=384)** And of course, because attention heads are part of layers, there's going to be fewer attention heads simplifying the model's architecture.
>
> **[6:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=390)** The context window is expected to be shorter, limiting the text length that can be processed at once, and the training data is going to be a smaller set of data, often more specialized data sets.
>
> **[6:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=402)** And of course, for computational requirements, SLMs require lower computational power and memory needs, making them suitable for environments with limited resources.
>
> **[6:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=412)** On the other end of the spectrum is the large language model.
>
> **[6:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=415)** The model size for that is on the order of hundreds of billions to trillions of parameters.
>
> **[7:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=420)** The number of layers grows to double digits, and possibly even more, to capture intricate hierarchal features.
>
> **[7:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=427)** And of course, attention heads are part of layers, and therefore, the number of those will increase as well.
>
> **[7:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=433)** And this helps to focus on different parts of the input simultaneously.
>
> **[7:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=437)** The context window for LLMs is typically longer, with long context window able to process extensive text sequences, and the training data used is extensive and diverse datasets to ensure broad language understanding.
>
> **[7:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=450)** For example, a large language model like GPT-3 might be trained on hundreds of gigabytes or even terabytes of text data.
>
> **[7:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=459)** And of course, because of all this, the computational requirements are higher in both CPU power as well as memory.
>
> **[7:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=465)** In addition, the training time would also increase, because LLMs can take weeks or even months to train.
>
> **[7:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=471)** After looking at the various aspects of AI models and how they differ for SLMs versus LLMs, now let's look and see how they impact the outcome of eight key attributes for each model type.
>
> **[8:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=482)** We'll look at things like performance and use cases, the training data, architecture and capabilities, resource requirements, applications, and adaptability.
>
> **[8:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=493)** For SLMs, because of their architecture, they're much more efficient and much more cost-effective.
>
> **[8:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=498)** However, the use cases are constrained because of the resources available within an SLM and the capabilities thereof.
>
> **[8:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=505)** The training data is typically smaller size, and the architecture has fewer parameters and fewer layers.
>
> **[8:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=512)** Its capabilities are better with single tasks.
>
> **[8:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=515)** With regards to resource requirements, they can operate locally or on edge devices, not requiring much computational resources.
>
> **[8:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=522)** With regards to applications, they are task-specific, and they are much more adaptable than LLMs.
>
> **[8:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=529)** The other end of the coin is a large language model, where it has complex language tasks, is available for a wide range of applications.
>
> **[8:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=537)** It is trained on a vast amounts of data in comparison to an SLM, and it has higher parameters and layers.
>
> **[9:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=544)** It's also capable of complex tasks, greater fluency, and better coherence.
>
> **[9:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=549)** Its resource requirements are much more significant, and it offers a wide range of tasks for its application.
>
> **[9:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/difference-between-slm-and-llm?u=76281980&t=556)** The disadvantage is they are less adaptable than SLMs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), require (2), type, (1), this, (1), type. (1)
> **Env Vars:** lstm (2), slm (2), gru (1), gpt (1), cpu (1)
> **Definitions:** is a  (3), refers to (2), known as (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** cat (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### When to use SLM or LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=0)** - [Instructor] Now we come to the big question, when to use SLM or LLM?
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=4)** To answer that, you need to identify three criteria.
>
> **[0:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=7)** First, what are the task requirements?
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=10)** Identify the specific task needed, whether it's text, natural language processing, language, or image analysis.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=17)** Some tasks can be accomplished by other model type while other like image processing can only be done by LLM.
>
> **[0:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=24)** Next, what are the computational resources available?
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=27)** Generally speaking, for edge devices and modest machines, a small language model is ideal.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=32)** If a robust machine or access to cloud computing like Azure is available, then both SLMs and LLMs are an option.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=40)** Also, consider the availability of internet connectivity.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=44)** Typically, SLMs can run locally on various machines, so internet access may not be an issue.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=50)** However, if a large language model is running in the cloud, internet connectivity could be an issue.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=55)** The third criteria to identify is latency and inference speeds.
>
> **[0:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=59)** If a low latency inference is required, then SLMs would be a better option.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=63)** On the other hand, LLMs may have slower response time, making them less suitable for real-time applications.
>
> **[1:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=70)** One or more of these criteria will help determine which model type to use.
>
> **[1:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=74)** Another factor in determining the model type to use is accuracy.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=78)** Each model type has a certain accuracy based on a specific training dataset.
>
> **[1:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=82)** This is dependent on several variables, such as dataset quality.
>
> **[1:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=86)** If you have high-quality, well-annotated datasets, this would lead to better model performance.
>
> **[1:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=92)** If dataset contains noise or inaccuracies, the model may struggle to learn effectively.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=97)** In addition, dataset size is also important.
>
> **[1:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=100)** Larger data sets generally provide more diverse examples, helping the model generalize better to a new unseen data.
>
> **[1:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=108)** Another variable is relevance.
>
> **[1:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=110)** The closer the training dataset is to the target task or domain, the better the model is likely to perform.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=116)** For example, a model trained on medical text will perform better on medical natural language processing tasks than one trained on general text.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=125)** A fourth variable is diversity.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=127)** Diverse data sets expose the model to a wide range of examples, improving its ability to handle various inputs and scenarios.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=135)** And last, another variable to consider is bias.
>
> **[2:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=138)** The present of bias in the training dataset can affect model accuracy and fairness.
>
> **[2:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=142)** Models trained on biased data may exhibit biased behavior.
>
> **[2:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=146)** To help you maneuver the course of finding the best SLM or LLM, there are several tools that are available.
>
> **[2:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=152)** First is Azure AI Foundry, next is Lighteval, which is a downloadable and installable tool from GitHub.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=160)** [llm-stats.com](https://llm-stats.com) is another website, as well as [huggingface.co/models](https://huggingface.co/models).
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=167)** These are websites that allow you to view benchmarks and be able to compare different models together.
>
> **[2:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=172)** Let's take a look at the Azure AI Foundry.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=175)** Within it, I'm able to browse through the model catalog and be able to view various models.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=180)** I can select on various filters such as deployment options or inference tasks.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=185)** And in this case I'm selecting chat completion, so it narrows my selection down to 71 models, as we see here.
>
> **[3:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=192)** The models are listed and I can select a specific model where more information can then be displayed.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=199)** In addition, I can view benchmarks and see how well it performs in comparison to other models on various data sets looking at AI quality, estimated cost, latency, and throughput.
>
> **[3:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=212)** In addition, I can expand the metrics to view the accuracy and how it compares to other models.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=217)** I can view cost, latency, and throughput as well in comparison to other models.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=224)** After going through the selection process, you have narrowed your options to a few specific models.
>
> **[3:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=229)** At this point, it's best to experiment with those different models to find the best fit for your application.
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=234)** You may also need to reevaluate and revisit your criteria.
>
> **[3:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/when-to-use-slm-or-llm?u=76281980&t=238)** Depending on the trade off, another model might be better suited for the application.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), slm (2)
> **Analogies:** such as (2), for example (1)
> **URLs:** [llm-stats.com](https://llm-stats.com) (1), [huggingface.co](https://huggingface.co) (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)

#### Deployment types
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=0)** - [Narrator] Deploying either large language models or small language models can be done in a variety of ways.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=6)** First, there's on-premises deployment utilizing either local servers or edge devices like smartphones or IOT devices.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=14)** In addition, cloud deployment's also a very viable option.
>
> **[0:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=18)** You can use the cloud platform where models can be deployed on virtual machines and platforms like Azure AWS or Google Cloud.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=26)** This provides scalability and access to powerful hardware, but may involve some data privacy considerations.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=32)** You can also utilize serverless architecture in the cloud where you can use serverless functions to deploy models, which allow for automatic scaling and cost efficiency, especially for variable workloads.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=43)** A third option is hybrid deployment or edge-cloud integration, where you're combining edge devices and cloud deployment.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=50)** This is where a small language model would be on an edge device, and it would handle local inference and LLMs than are used for more complex tasks in the cloud.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=60)** This balances latency and computational load.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=63)** Another option is containerization, like Dockers or Kubernetes.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=66)** Deploying models and containers allows for easy scaling, portability, and management across different environments.
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=73)** It's suitable for both LLMs and SLMs.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=76)** Lastly, specialized hardware.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=78)** Like tensor processing units or TPUs, or graphics processing units also known as GPUs.
>
> **[1:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deployment-types?u=76281980&t=85)** These can be used for deployment to accelerate inference, particularly important for LLMs due to their computational demands.

> [!info]- Semantic Content
>
> **Env Vars:** iot (1), aws (1)
> **CLI Commands:** aws (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 4. Sample Projects

#### Deploying and accessing SLM locally
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=0)** - [Instructor] For the first demo, I will use a small language model and interact with it using C# code.
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=5)** To do this, I will need two things, a server process for running the SLM and Visual Studio to execute my C# code.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=14)** For the server process, I will use LM Studio as you see here.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=17)** I already downloaded it and installed it.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=20)** After opening it, you'll see four tabs on the left.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=23)** The first one is Chat, where you can actually chat directly with a model loaded.
>
> **[0:27](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=27)** Currently, I don't have a model loaded, but we'll walk through it in just a second.
>
> **[0:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=31)** Next is the Developer tab for various settings regarding the model.
>
> **[0:36](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=36)** Third is the tab for my models that chose all the models that have been downloaded.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=40)** And lastly is the Discover tab where I can search for new models, be able to look at their specs, a description, the size, and so forth.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=50)** For my demo, I'm interested in the Phi models and more specifically the Phi 3.1 Mini 128k.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=57)** This is a small language model and as you see here, it has already been downloaded.
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=66)** I'll go ahead and move to my Chat tab, and from there I will load the model.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=71)** It will take just a few seconds, but once it's loaded, then I'd be able to get started.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=76)** Now that the model's loaded, I will go over to my Developer tab and I'll make sure that the model is running.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=81)** And as we see here, status is set to running, and more importantly, I will need to copy this URI in order to be able to interact with my model.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=90)** In addition, I also need the model's API identifier found in the lower right-hand corner.
>
> **[1:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=99)** Now let's turn our attention to Visual Studio.
>
> **[1:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=102)** I already downloaded Visual Studio 2022 and installed it, and in this scenario I'm using a console application.
>
> **[1:49](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=109)** In addition, I downloaded the Newtonsoft.Json NuGet package.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=115)** Stepping into my code, what I'm doing is I'm instantiating an HTTP client.
>
> **[2:01](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=121)** For the base URL and the model ID, I copied these parameters from the Developer tab.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=128)** In addition, I set my request body where I specify the prompt and the maximum number of tokens.
>
> **[2:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=135)** And in this case, I'm simply asking, what's the capital of Spain?
>
> **[2:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=140)** Then I will serialize the request body and then make a call asynchronously to post.
>
> **[2:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=148)** And you'll notice that I'm using the URI as specified here for the completions, and this was also obtained from the LM Studio.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=155)** More specifically, if I go over into LM Studio, I see that I have the supported endpoints as listed here, so I'm able to utilize one of these endpoints.
>
> **[2:45](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=165)** Going back to my code.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=168)** As I specified here, /v1/completions.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=174)** Once the response is received, I utilize the ReadAsStringAsync.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=181)** And I display the response to the user.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=185)** When I go ahead and execute it, it will open up a console window.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=191)** And we see the complete JSON results that returned.
>
> **[3:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=195)** More specifically, looking at the text that was generated in response, where the model responds back the capital city of Spain is Madrid, and then it goes on to give me additional text.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-slm-locally?u=76281980&t=204)** Notice it is not exceeding the 50 token limit.

> [!info]- Semantic Content
>
> **Env Vars:** uri (2), slm (1), api (1), http (1), url (1)
> **Code Keywords:** this, (1), let (1), case, (1)
> **Tools:** visual studio (3)
> **CLI Commands:** make (2)
> **File Paths:** newtonsoft.json (1)
> **API Endpoints:** /v1/completions (1)
> **Versions:** 3.1 (1)
> **Definitions:** is a  (1)

#### Deploying and accessing LLM in Azure AI Foundry
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=0)** - [Narrator] In this video, I will demonstrate how to deploy a large language model in the cloud and interact with it using C# code.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=8)** I will use the Azure AI Foundry to deploy the model, then access it from a console application.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=13)** To get to this stage, you'll need to set up an Azure subscription in the Azure portal.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=17)** Then you'll need to set up a hub and project in the Azure AI Foundry linked to that subscription.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=23)** As you see in my overview for my project, I have my subscription already set up.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=29)** In addition, when I click on the project name, the subscription that it's associated with, the project, as well as the hub.
>
> **[0:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=38)** If needed, screenshots are available with the exercise files that walk you through step-by-step for setting up a hub and a project in the AI Foundry.
>
> **[0:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=47)** One of my favorite features in the Azure AI Foundry is the ability to review and filter all the models available.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=53)** When I click on the model catalog, it shows me all the models as well as the ability to filter on a variety of things such as GPT-4o,
>
> **[1:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=66)** and it gives me a detailed description as well as benchmarks of how it performs with various datasets and in comparison with other models.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=75)** In addition, I can scroll down, expand the metrics tab and see how accurate it is with regards to other models.
>
> **[1:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=83)** Once I'm satisfied with that model and want to use it for my selection, I'll click on models and endpoints.
>
> **[1:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=94)** I'll start the deployment, select deploy model, and specifically deploy base model.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=101)** From there, I'll find the model that I want to deploy, select confirm, verify all the various settings, and then select connect and deploy.
>
> **[1:51](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=111)** Since I already have a model with the same name already deployed, I won't be going any further.
>
> **[1:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=116)** However, I'll utilize the model that was previously deployed.
>
> **[2:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=123)** When I click on models and endpoints, I have a listing of all the models that have been previously deployed.
>
> **[2:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=128)** When I select the GPT-4o, I have access to some information that I will need in my code, for example, the deployment name as well as the target URI and the key that's used for authentication.
>
> **[2:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=143)** These three pieces of information will be utilized in my code.
>
> **[2:27](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=147)** I can click on the consume tab and it gives me code snippets in three different languages for accessing my model, in Python, C#, as well as JSON.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=160)** I'll utilize the C# code here and use it in Visual Studio 2022.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=167)** In addition, I'll need to import the NuGet package [Azure.AI](https://Azure.AI).OpenAI.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=175)** I'll utilize these specific namespaces and in my main method, I will make a call to RunAsync, which is an async method that starts on line 17.
>
> **[3:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=190)** Keep in mind the three variables that I mentioned from the overview screen.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=194)** This involves the OPENAI_ENDPOINT, the OPENAI_KEY, as well as the deployment name.
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=203)** Those are plugged in directly into my code.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=206)** Going back to the top of method RunAsync, first I retrieve the variable for the OPENAI_ENDPOINT.
>
> **[3:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=215)** Then I do the same thing for the OPENAI_KEY.
>
> **[3:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=219)** Next, I initialize the ChatClient using the specified deployment name.
>
> **[3:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=227)** I'll then set up a list of messages where I'm specifying what my prompt is going to be, as well as what my system message is going to be.
>
> **[3:56](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=236)** In addition, I also have the ability to specify various parameters such as temperature, MaxOutputTokenCount, et cetera.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=249)** Once everything is set up, I'll make a call to CompleteChatAsync, pass in the messages as well as the options, and then once the response returns, I'll simply display the entire JSON to the user.
>
> **[4:22](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=262)** If no response is received, I will display that accordingly in the console window.
>
> **[4:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=268)** So let's go ahead and run it.
>
> **[4:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=272)** And if you recall, the prompt that was sent in was what is the capital of France, and the response received is the capital of France is Paris, in text.
>
> **[4:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=282)** In addition, gives me some additional information regarding the specific model deployment and the input and output token count.
>
> **[4:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/deploying-and-accessing-llm-in-azure-ai-foundry?u=76281980&t=292)** And that concludes the demo for utilizing a large language model.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (2), json (2), openai_endpoint (2), openai_key (2), uri (1)
> **UI Navigation:** click on (5), scroll down (1), select the (1)
> **Prerequisites:** set up (5), you'll need (2)
> **CLI Commands:** make (2), find (1), python (1)
> **Code Keywords:** async (1), pass (1), let (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** azure portal (1), visual studio (1)
> **URLs:** [azure.ai](https://azure.ai) (1)

#### Challenge: Build an SLM solution
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/challenge-build-an-slm-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/challenge-build-an-slm-solution?u=76281980&t=0)** - [Instructor] Now it's time to put your skills to the test with this challenge.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/challenge-build-an-slm-solution?u=76281980&t=9)** You are required to choose a model with the following criteria; a text translation model from the AI Foundry, it must have an Apache 2.0 license, has to be relatively small in size, AKA, a small language model, capable of fine tuning, deployed from the Azure AI Foundry in a managed compute environment, and supports the languages of English, French, Romanian, and German.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/challenge-build-an-slm-solution?u=76281980&t=33)** In addition, build an application to access that deployed model.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/challenge-build-an-slm-solution?u=76281980&t=37)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **Env Vars:** aka (1)
> **Versions:** 2.0 (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Build an SLM solution
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=5)** - [Instructor] Now, let's take a look at the solution for our challenge.
>
> **[0:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=8)** In Azure AI Foundry, I set the filters according to the criteria that was specified in the challenge.
>
> **[0:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=15)** I'm looking for a managed compute, text translation model, license of apache, and a fine-tuneable translation model.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=26)** The models were filtered down to three separate models, although any of them would work, I opted for the t5-small.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=34)** Clicking on that model, I can see the various details, as well as the option to deploy it.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=42)** When I click deploy, for the virtual machine, I'm going to select a low cost option.
>
> **[0:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=53)** For the endpoint name, I want to utilize demoproject1-t5small.
>
> **[1:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=60)** And as you see, that's reflected in the URL below.
>
> **[1:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=64)** When I'm satisfied with all the different parameters, I'll go ahead and select Deploy.
>
> **[1:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=69)** And you notice the message on the bottom, "Your deployment is being created."
>
> **[1:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=73)** This should take a few minutes.
>
> **[1:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=76)** One thing I'd like to point out, although it says the endpoint has been created and you see the green check mark, the deployment is still in progress and you see the rotating circle.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=88)** So, this will take a few minutes longer until the deployment is fully completed.
>
> **[1:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=93)** After approximately 14 minutes from when the deployment has begun, everything is now completed.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=104)** Turning our attention to the details page of the deployment, we'll note the deployment name, the target URI, as well as the primary key for authentication.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=115)** These need to be noted so they can be utilized in the C# code.
>
> **[1:59](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=119)** Looking at our deployment for t5-small, we see that we also have a Consume tab.
>
> **[2:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=126)** Clicking on that gives us a good starting point in C# of the code to use for accessing our application.
>
> **[2:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=133)** Moving over to Visual Studio, we implemented the solution in a console application.
>
> **[2:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=139)** Taking a look at the Solution Explorer, it's got fairly simple with one project and one file, program.cs.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=150)** This code requires .NET Framework of 4.7.1 or later.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=155)** However, for this specific solution, we're utilizing .NET 9.0.
>
> **[2:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=160)** We're utilizing our namespace for the Http.Headers, as well as the Environment variables.
>
> **[2:47](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=167)** Our main method simply invokes the Request Response Service, which is an asynchronous method.
>
> **[2:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=175)** Moving forward and looking at our method, we instantiate an HttpClientHandler.
>
> **[3:01](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=181)** From there, we set our request body and we're utilizing the input.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=187)** I love working with Azure and AI in English.
>
> **[3:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=191)** We then utilize the GetEnvironment variable for the API key.
>
> **[3:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=200)** In addition, we do the same thing for the TARGET_URI.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=204)** Once those two are retrieved, we then continue to build our request body.
>
> **[3:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=210)** As we see, we instantiate the targetURI with a URI method.
>
> **[3:39](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=219)** We specify that the MediaTypeHeaderValue is going to be JSON.
>
> **[3:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=224)** We then go ahead and make a PostAsync call.
>
> **[3:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=233)** Once the response is received, we check to see that the status code is successful, and then we just simply read the string and display it to the user as the result.
>
> **[4:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=244)** If an error is encountered, we simply display it accordingly to the user.
>
> **[4:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=249)** When we run our code, it opens up a console window and you see the result is the translation of our phrase in German, stating that we love working with Azure and AI.
>
> **[4:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/solution-build-an-slm-solution?u=76281980&t=264)** And that concludes the solution for our challenge.

> [!info]- Semantic Content
>
> **Env Vars:** uri (2), net (2), url (1), api (1), target_uri (1)
> **CLI Commands:** apache (1), make (1)
> **Code Keywords:** let (1), continue (1)
> **Versions:** 4.7.1 (1), 9.0 (1)
> **Code Identifiers:** targeturi (1)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5.  Implementing Best Practices

#### Common pitfalls
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=0)** - [Instructor] Let's look at some common pitfalls that can impact your AI project.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=4)** First, data quality.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=6)** Like the old adage, garbage in, garbage out.
>
> **[0:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=9)** Low quality or poorly labeled data can significantly hinder the performance of an AI model.
>
> **[0:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=14)** Second, bias and fairness.
>
> **[0:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=17)** AI models are only as good as the data they're trained on.
>
> **[0:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=19)** If the data is biased, AI might produce biased results leading to unfair or unethical outcomes.
>
> **[0:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=26)** Third, overfitting or underfitting.
>
> **[0:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=29)** If a model is too specifically tailored to its training data, it might struggle with new or unseen data.
>
> **[0:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=34)** This is called overfitting.
>
> **[0:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=37)** Underfitting on the other hand, as if it's too generalized, it may not perform well even on the training data.
>
> **[0:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=43)** Another common pitfall is misalignment with the business goals.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=46)** Sometimes teams focus so much on creating a sophisticated model.
>
> **[0:50](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=50)** Rather they're ensuring that it aligns with the actual business objectives or the user needs.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=55)** In other words, avoid creating a one size fits all, but rather focus on the task at hand.
>
> **[1:01](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=61)** Next is interpretability.
>
> **[1:03](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=63)** This is where complex models like deep neural networks can be hard to interpret, which might make it challenging to understand why they make certain decisions.
>
> **[1:11](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=71)** This can be problematic, and high stake industries.
>
> **[1:15](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=75)** Another common pitfall is over-reliance on the model.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=78)** Blind trust in AI can lead to problems, especially when critical thinking or human oversight is ignored.
>
> **[1:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=84)** For tasks that require high stakes, it's always best to have a human checkpoint.
>
> **[1:29](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=89)** Scalability.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=90)** Some models perform well in controlled environments, but struggle when scaled up or applied to real world scenarios.
>
> **[1:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=97)** This can be resolved by proper testing, and by using the right infrastructure for deployment and scaling.
>
> **[1:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=104)** Another common pitfall is maintenance.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=106)** AI models require regular monitoring or retraining to stay accurate as the data, and the conditions change.
>
> **[1:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=112)** Last but not least, ethical and legal concerns.
>
> **[1:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=115)** Privacy issues, compliance with data regulations, and the ethical implications of deploying AI are often overlooked, leading to potential legal problems.
>
> **[2:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=125)** Some additional pitfalls.
>
> **[2:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=127)** Unexpected cost where the bill from the cloud provider is higher than anticipated.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=132)** One easy way to prevent this is by using alerts, and we'll discuss that in the best practices video.
>
> **[2:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=137)** Another pitfall is unexpected results post-deployment.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=141)** This usually occurs due to improper testing.
>
> **[2:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=144)** Not enough test cases or the model has been retrained, and has been been deployed without testing.
>
> **[2:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=150)** Another common pitfall is the sample code provided by the Azure AI Foundry.
>
> **[2:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=154)** Although this code is useful, and provides a good starting point, sometimes it's not always up to date, and requires some modifications, whether it's the NuGet packages or updated classes for accessing the model.
>
> **[2:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=166)** Again, these are great starting points.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=168)** However, they may not always work from the first try and may require some slight modifications.
>
> **[2:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=174)** Another thing to keep in mind is when deploying a model and choosing a VM, please note the virtual machine type.
>
> **[3:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=180)** Choose either CPU or GPU, but choose carefully.
>
> **[3:05](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=185)** The type can't be changed after creation in the Azure AI Foundry.
>
> **[3:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=189)** In addition, pay special attention to the virtual machine size.
>
> **[3:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=193)** This might be restricted in your region, so always check that availability list provided by Azure.
>
> **[3:19](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=199)** Another thing to note with regards to the deployment is that it occurs in three separate steps.
>
> **[3:24](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=204)** First, the endpoint is created, followed by the deployment.
>
> **[3:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=208)** Lastly, the endpoint is updated.
>
> **[3:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=211)** Note the endpoint creation completed first, but model deployment took several more minutes afterwards.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/common-pitfalls?u=76281980&t=217)** In summary, all three steps took about 15 minutes to complete.

> [!info]- Semantic Content
>
> **Warnings:** pitfall (5), keep in mind (1)
> **Code Keywords:** require (3), let (1), type. (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (1), gpu (1)
> **Definitions:** is called (1), in other words (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=0)** - [Presenter] Let's look at some best practices to implement in your AI project.
>
> **[0:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=4)** First and foremost is data quality.
>
> **[0:06](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=6)** Be sure that data represents real-world diversity, free from biases where it's skewed towards a specific grouping.
>
> **[0:13](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=13)** Also, be sure that data is cleansed from erroneous records, outliers, and all data has the proper context.
>
> **[0:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=20)** Next are ethical considerations.
>
> **[0:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=23)** Ensure your use of SLMs and LLMs aligns with ethical guidelines.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=28)** Avoid generating harmful, biased, or misleading content.
>
> **[0:32](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=32)** Also, if used in high stakes applications, that it require a human checkpoint, where an industry professional can either approve or reject the response from the model.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=42)** Third is security and privacy.
>
> **[0:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=44)** Handle the data responsibly.
>
> **[0:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=46)** Implement robust security measures to protect user data and comply with data privacy regulations.
>
> **[0:52](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=52)** Another best practice is for interpretability.
>
> **[0:55](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=55)** Strive to make model decisions explainable.
>
> **[0:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=57)** Transparency helps build trust and allows users to understand the model's behavior.
>
> **[1:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=62)** Also, keep in mind that AI development is an iterative development process.
>
> **[1:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=68)** Treat model development as an iterative process in the sense that you're continuously testing, validating, and improving your model based on user feedback and performance metrics.
>
> **[1:18](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=78)** Another key point to remember is documentation.
>
> **[1:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=81)** Maintain thorough documentation of your models, including training data, methodologies, and version histories.
>
> **[1:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=88)** The key word here is thorough.
>
> **[1:30](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=90)** Not only do you want your colleagues and new team members to fully understand the documentation, but you also want your future you to be able to understand it.
>
> **[1:38](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=98)** Overall, this helps in troubleshooting and improving the model over time.
>
> **[1:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=101)** One of the biggest concerns is runaway costs from the cloud providers.
>
> **[1:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=106)** My personal recommendation is to set cost alerts at 25 and 75% of the anticipated monthly cost.
>
> **[1:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=113)** These alerts should be received after the first week and after the third week of the month.
>
> **[1:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=118)** If either is received earlier, it's an indication of a runaway cost and it will help you mitigate it earlier.
>
> **[2:04](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=124)** Another best practice is to use configuration files or environment variables for keys and endpoints.
>
> **[2:09](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=129)** These should not be hard coded in the application.
>
> **[2:12](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=132)** In addition, this will make key and endpoint changes easier.
>
> **[2:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=136)** Lastly, regenerate the keys if breach is suspected.
>
> **[2:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=141)** Don't wait to confirm, but simply change the keys if breach is suspected.
>
> **[2:25](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=145)** If the infrastructure is set up right, should be a fairly easy change and it will help protect your application.
>
> **[2:31](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=151)** As mentioned earlier, the model should be updated as part of an iterative process.
>
> **[2:35](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=155)** This can be done in a variety of ways for either type, whether a small language model or a large language model.
>
> **[2:41](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=161)** First, you can simply retrain the model on new data.
>
> **[2:44](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=164)** One common method is to periodically retrain the model on more recent data.
>
> **[2:48](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=168)** This can include news articles, social media posts, and other sources of current information.
>
> **[2:53](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=173)** The model can either be trained incrementally for the new data or completely from scratch.
>
> **[2:58](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=178)** Another method for updating the model is utilizing fine-tuning.
>
> **[3:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=182)** Models can be fine-tuned with specific datasets that include recent information.
>
> **[3:07](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=187)** This process involves training the model on smaller, more focused set of data that includes up-to-date events and facts.
>
> **[3:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=194)** A third technique for updating the model is transfer learning.
>
> **[3:17](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=197)** This is where a model trained on one task is reused as a starting point for a related task.
>
> **[3:23](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=203)** Yet another option is data augmentation.
>
> **[3:26](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=206)** As new data arrives, apply augmentation techniques such as synonym replacement or paraphrasing, and this will help keep the model up-to-date.
>
> **[3:34](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=214)** Another method is real time information retrieval.
>
> **[3:37](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=217)** This is where the output is augmented by external data using retrieval augmented generation or RAG.
>
> **[3:43](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=223)** Depending on your specific scenario, this may be difficult to achieve.
>
> **[3:46](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=226)** Since some models may be running on hardware not connected to a network, real-time data retrieval from another system would not be possible.
>
> **[3:54](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=234)** This is especially true for small language models.
>
> **[3:57](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=237)** And lastly is the ensemble method for updating the model.
>
> **[4:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=240)** This is where you combine multiple models trained on different time windows to create an ensemble model that reflects the most recent data.
>
> **[4:08](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=248)** This approach can improve the model's robustness and accuracy by incorporating diverse perspectives.
>
> **[4:14](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=254)** However, this is dependent on the hardware resources and is more of an issue for SLMs.
>
> **[4:20](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/best-practices?u=76281980&t=260)** Hope this helps and wish you the best with your AI project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), type, (1)
> **CLI Commands:** make (2)
> **Best Practices:** best practice (2)
> **Env Vars:** rag (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=0)** - Congratulations on completing this course with me.
>
> **[0:02](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=2)** We covered several important topics about SLMs and LLMs, their capabilities, limitations, and the best fit for each model type.
>
> **[0:10](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=10)** We also looked at popular architectures, common pitfalls, and best practices for implementations.
>
> **[0:16](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=16)** One of the things I enjoy most is helping other developers on their learning journey.
>
> **[0:21](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=21)** LinkedIn has been instrumental in connecting me with other developers to answer their questions and provide guidance when needed.
>
> **[0:28](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=28)** I'd be happy to answer any questions for you, help you with a course, or assist you in your AI project.
>
> **[0:33](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=33)** I invite you to connect with me on LinkedIn where I post technical content, or you can subscribe to my YouTube channel.
>
> **[0:40](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=40)** You can find all my contact info below.
>
> **[0:42](https://www.linkedin.com/learning/azure-ai-for-developers-llms-and-slms/next-steps?u=76281980&t=42)** Thanks for joining me in this course, and I hope to hear from you soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** type. (1)
> **Cross-References:** we covered (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]
← [[Azure Ai For Developers Ai Design Foundations]] | **2 of 8** | [[Azure AI for Developers- Using the Azure AI Model Catalog]] →

## Appears In

- [[Build AI Products Using Azure AI Services in Your Development Lifecycle]]

## Related Courses

_Courses sharing skills:_

- [[Azure AI for Developers- Content Safety and Responsible AI]] — Artificial Intelligence (AI), Large Language Models (LLM), Microsoft Azure
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[LLMOps in Practice- A Deep Dive]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)