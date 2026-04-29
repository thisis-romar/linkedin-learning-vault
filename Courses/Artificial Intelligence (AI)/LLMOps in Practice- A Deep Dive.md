---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: llmops-in-practice-a-deep-dive
url: "https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive"
duration_minutes: 266
duration: 4h 26m
level: Intermediate
updated: 12/18/2024
learners: 13924
skills:
  - Large Language Model Operations (LLMOps)
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: true
github: "https://github.com/LinkedInLearning/llmops-in-practice-a-deep-dive-5936211"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHHBzGQ-tN7ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732665259063?e=2147483647&amp;v=beta&amp;t=MhKOSZhm6KtzlcGTrhA0dmjUZEjonxzyHM-znUL9PMk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Manage Your LLMs with LLMOps]]'
prev_courses:
  - '[[Generative Ai And Llmops Building Blocks And Applications]]'
next_courses:
  - '[[Advanced LLMOps- Deploying and Managing LLMs in Production]]'
path_nav: '[{"path":"Manage Your LLMs with LLMOps","position":2,"total":4,"prev":"Generative Ai And Llmops Building Blocks And Applications","next":"Advanced LLMOps- Deploying and Managing LLMs in Production"}]'
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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/LLMOps%20in%20Practice-%20A%20Deep%20Dive.md)

![LLMOps in Practice: A Deep Dive](https://media.licdn.com/dms/image/v2/D4D0DAQHHBzGQ-tN7ew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732665259063?e=2147483647&amp;v=beta&amp;t=MhKOSZhm6KtzlcGTrhA0dmjUZEjonxzyHM-znUL9PMk)

# LLMOps in Practice: A Deep Dive

> As LLM-based apps proliferate, many function as thin veneers around more robust models such as GPT. In this course, instructor Laurence Moroney demonstrates the basics of building your own LLM-powered app and controlling how it works from the back end. Get an introduction to some of the basic use cases of LLMs in application development. Basic knowledge of Python, Node.js, and LLMs is required. By

> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive) | 4h 26m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - A deep dive into LLM operations
  - What are LLMs?
  - What are transformers?
  - What is LLMOps?
- [**1. Build a Basic LLM App**](#1-build-a-basic-llm-app) (6 videos)
  - Prompting
  - Advanced prompting
  - Hosting an app
  - Create a chatbot
  - LLM exercise
  - Adding logging to your server
- [**2. First Steps in Ops**](#2-first-steps-in-ops) (7 videos)
  - Coding for logging
  - Exploring the logging system
  - RLHF and user feedback
  - Challenge: Implementing RLHF and user feedback
  - Demonstrating the ops project completed
  - Solution: Completing an ops project
  - Demonstrating the code for the ops
- [**3. BYOD with RAG**](#3-byod-with-rag) (11 videos)
  - Retrieval augmented generation (RAG)
  - Installing and setting up a VectorDB
  - Create a VectorDB
  - BYOD to a VectorDB
  - VectorDB: Hands-on use case
  - Querying the VectorDB
  - Demonstration: Querying the VectorDB
  - Extending your app with RAG
  - RAG: Showing it in action
  - Challenge: Complete RAG application
  - Solution: Complete RAG application
- [**4. RAG and Ops**](#4-rag-and-ops) (10 videos)
  - Extending RAG with ops
  - Logging
  - Hands-on logging
  - Metrics
  - Hands-on metrics
  - Version management
  - Hands-on version management
  - RAG Ops: Updating the data
  - Hands-on RAG ops
  - RAG in action: Exercise
- [**Conclusion**](#conclusion) (1 videos)
  - Continue your LLMOps learning journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### A deep dive into LLM operations
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=0)** Have you ever wondered how to keep your AI consistently smart and relevant?
>
> **[0:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=4)** Do you want to learn how to build and optimize RAG systems for continual improvement?
>
> **[0:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=9)** This course is designed to take you from a basic understanding of LLMs to digging into the operational techniques needed to maintain and improve LLM-based applications over time.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=21)** We'll explore this through building a custom chatbot whose purpose is to help you create public presentations.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=28)** We'll then extend that using RAG to become a specialist in different types of material.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=34)** Along the way, we'll explore techniques to help you understand how your users interact with your application and will help you find ways to improve and update it.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=43)** Hello, and welcome to our course on LLM and RAG operations.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=48)** I'm Laurence, your guide and instructor.
>
> **[0:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/a-deep-dive-into-llms-operations?u=76281980&t=50)** So let's roll up our sleeves and get started.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), llm (2)
> **Code Keywords:** public (1), let (1)
> **CLI Commands:** find (1)

#### What are LLMs?
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=0)** Let's get started by exploring what large language models are and how they came about.
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=5)** In this video, we'll explore the genesis of these transformative technologies, how they first came about, and how they evolved through groundbreaking innovations as well as through wide-ranging applications.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=18)** We'll also examine the challenges and limitations inherent in these models, providing you with a comprehensive understanding of both the potential and the pitfalls of LLMs.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=30)** The journey of LLMs began with a significant breakthrough in AI research.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=35)** The development of the transformer model introduced in the pivotal paper, Attention is All You Need by Vaswani et al in 2017.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=45)** This paper marked a massive leap forward from previous sequence learning models like recurrent neural networks or RNNs, and long short-term memory networks, or LSTMs, which process data sequentially, but they often struggled with long-range dependencies in text.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=62)** What does that mean?
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=64)** Well, to understand text, one often has to understand words that are far away from the desired one.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=70)** For example, consider this sentence, in Ireland, I attended high school, and I had to learn how to speak < blank >.
>
> **[1:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=78)** Now, as a human, you probably would have said Irish, which would be good, or Gaelic which would be better.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=84)** But how did you get that answer?
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=87)** The clues were in the words.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=88)** Speak indicates that it's language which is right beside the blank, and Ireland, which is the major clue, indicating which language.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=97)** But in reality, there could be many answers to the blank.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=101)** There's no reason why it couldn't be English, for example, or even a word like politely, which would also fit.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=109)** In your mind, you would stack rank these in order of priority, and because you paid attention to the word, Ireland, when deciding which one to use, you put Irish or Gaelic at the top of your stack rank.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=122)** That's exactly what a large language model does, but it's the attention in the transformer architecture that really broke this technology into the mainstream.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=132)** Without attention, you likely would have ignored the word Ireland in the sentence and you would have ended up with lower-quality results.
>
> **[2:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=140)** This attention mechanism allows the model to process all parts of the input data simultaneously, and to attend differently to different parts of the sequence.
>
> **[2:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=152)** This means that the model can weigh the relevance of all other words in the sequence when understanding each specific word, and thereby capturing context more effectively and efficiently.
>
> **[2:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=163)** Indeed, one of the original uses of transformers was in language translation, a domain that greatly benefited from their ability to understand and translate the context and meaning of full sentences, rather than just doing word by word.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=180)** Let's consider another example.
>
> **[3:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=182)** This is a sentence in Gaelic.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=184)** Do you know what it means?
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=186)** It literally translates into the raven loves its chicks.
>
> **[3:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=190)** And you might wonder, well, what does that mean?
>
> **[3:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=193)** Well, if you see a picture of a raven's chick, it has a face that, well, only its mother could love.
>
> **[3:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=199)** And this brings us to one of those English phrases, beauty is in the eye of the beholder.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=205)** Now that's a much better translation of the meaning of the words, as opposed to just a straight word-for-word mapping of one language to another.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=214)** So when a transformer was applied, a model could learn the correct mappings from one sentence to another and thereby become a much better translator.
>
> **[3:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=224)** This capability led to more fluent and accurate translations, setting new benchmarks in machine translation and significantly impacting global communication.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-llms?u=76281980&t=236)** So next, we're going to take a deeper look into what transformers are.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), picture (1)
> **Code Keywords:** let (2)
> **Definitions:** means that (1), is a  (1)

#### What are transformers?
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=0)** Capabilities of transformers were further expanded with the introduction of models like OpenAI's GPT series.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=8)** These models use the transformer architecture to create generative, pre-trained transformers trained on diverse and extensive internet text.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=18)** This gave them the ability to perform a wide array of text-based tasks.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=24)** GPT-3, with its 175 billion parameters, became a revolutionary example, showcasing an ability to generate text that is contextually relevant, coherent, and strikingly human-like.
>
> **[0:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=39)** In addition to generating texts, the GPT series of large language models also launched a whole new area of science, one that I like to call artificial understanding.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=51)** With their attention-based mechanisms, they could artificially understand sentiment in texts and use that to help you shape thoughts or ideas.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=61)** I personally find that aspect indispensable and far more valuable than just generating content.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=68)** Despite their potential, LLMs are not without significant challenges.
>
> **[1:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=72)** The risk of perpetuating biases present in their training data can be a critical concern.
>
> **[1:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=78)** These models can inadvertently produce biased or offensive content if not carefully monitored and managed.
>
> **[1:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=85)** Additionally, the environmental impact of training such large language models is considerable.
>
> **[1:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=91)** It involves substantial energy consumption and associated carbon emissions.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=97)** Indeed, a massive bias challenge comes when one carefully monitors and manages a model.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=102)** In this case, there are well-documented examples of where filters applied by the model owner to restrict the model from behaving in a way that biases against one culture only caused it to be biased against another.
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=115)** It can be a difficult problem to solve.
>
> **[1:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=118)** One other thing, and it's an easy habit to fall into.
>
> **[2:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=121)** LLMs and their associated apps like ChatGPT, are artificially intelligent applications trained using machine learning and other techniques.
>
> **[2:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=130)** But as a society, we have conflated AI with LLM and we've used the terms interchangeably.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=136)** They're not.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=138)** If you want to be a trusted guide to your community, it is really important to remember this.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=143)** Addressing these challenges involves a combination of technological innovations and ethical guidelines.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=150)** Techniques like differential privacy, federated learning, and bias audits are being explored to mitigate bias and enhance privacy.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=159)** Moreover, improving the energy efficiency of these models and using more sustainable energy sources are critical steps towards reducing the ecological footprint incurred by large AI models such as LLMs, generative image, generative video, and so on.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=176)** In this course, we're going to explore strategies for effectively using LLMs while responsibly addressing their limitations.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=184)** You're going to learn how to deploy applications that use these models, refine their outputs, and you'll explore integrating ethical considerations into your development processes.
>
> **[3:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=195)** Stay tuned as we move deeper into each aspect of LLMs, from their technical underpinnings to practical applications and strategic management.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=204)** This series will equip you with the knowledge and tools to harness the power of large language models in making informed, ethical, and impactful real-world applications.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-are-transformers?u=76281980&t=215)** So let's continue this journey of building and maintaining applications that run on an LLM infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (3), llm (2)
> **Code Keywords:** case, (1), this. (1), let (1), continue (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)

#### What is LLMOps?
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=0)** Okay.
>
> **[0:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=1)** So to this point, we've explored the ideas behind large language models, including a little bit of history of them.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=7)** Next, we're going to take a look at how to build and maintain applications on top of them.
>
> **[0:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=13)** There's lots of material out there around prompting and how to craft prompts to get the best out of models, but we won't be going deeply into that.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=21)** I do want to look at the full lifecycle of an application that you're going to build in this way, and this is called LLMOps, Large Language Model Operations, an essential discipline for managing and optimizing applications that use large language models, or LLMs, as their backbone.
>
> **[0:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=39)** Throughout this course, we're going to explore why continuous monitoring, updates, and strategic adjustments are imperative for maintaining the efficacy and reliability of applications built using them.
>
> **[0:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=52)** Our discussion will not only broaden your understanding of LLMOps, but also equip you with advanced strategies to manage LLMs as dynamic components within your applications.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=64)** I also want to emphasize the importance of integrating LLMs as seamless background components that enhance functionality, without overshadowing the core business logic and user experience.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=76)** A poorly architected application is one that has tight dependencies on a particular LLM, and which brings it close to your users with little constraints, whereas a well-architected application has the LLM fade into the background and is loosely coupled from the rest of your application.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=94)** This approach allows us to leverage their capabilities to understand, reason, and generate text, while keeping our primary business objectives and needs at the forefront.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=105)** It also reduces brittleness in your application as the underlying LLM changes and evolves over time.
>
> **[1:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=112)** And given that LLMs and other models are being released at a breakneck pace, it helps you to be more ready for a future where the LLM you're currently using could suddenly be less desirable, maybe for price, functionality, or a host of other reasons.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=128)** So more formally, let's understand the reasoning behind this architecture.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=133)** And I see four major reasons here.
>
> **[2:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=135)** Number one, streamlining the user experience.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=139)** The old Google adage was focus on the user and all else will follow.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=143)** And this is great advice.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=145)** Users will interact with your applications, seeking solutions and experiences and not the technology per se.
>
> **[2:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=152)** Integrating LLMs as underlying engines ensures that the technology remains invisible, providing a smooth, intuitive user experience that's focused on outcomes rather than processes.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=164)** Next, there's enhancing business agility.
>
> **[2:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=167)** If you decouple your core business logic from the complexities of LLM operations, you can more easily adapt to market changes and user needs without re-engineering the underlying AI models.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=180)** Indeed, with a well-engineered system, hot swapping of the back-end LLM should be relatively straightforward.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=187)** This flexibility is crucial for maintaining competitiveness and responsiveness as the market moves quickly.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=196)** Then there's mitigating risks.
>
> **[3:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=197)** Using LLMs as black boxes reduces the dependency on specific model behaviors, and they can change with updates or retraining from the model vendor.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=207)** I've worked with and I've advised many startups that took a close dependency on GPT, for example, but the prompts that work today may not work tomorrow, and they have to take on a lot of regression testing.
>
> **[3:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=220)** While a separated architecture like this won't prevent that from happening, it does make the application a bit less brittle, and it opens the possibility for a company like that to instead switch to an instance of an open-source model so that they can fully control it without large scale changes to their applications.
>
> **[3:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=239)** This approach protects the application from fluctuations in model performance, and it ensures consistent functionality.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=248)** You can focus on core competencies, and of course, with a well-architected system that lets you concentrate on developing and enhancing your unique offerings and value propositions, rather than diverting resources to manage AI complexities.
>
> **[4:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=264)** Okay.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=265)** Now that we understand the advantages of a well-defined, separated architecture, let's also explore how we can continually manage and monitor that over time to make more effective long-term application.
>
> **[4:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=278)** I generally consider this in five steps.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=281)** Number one, define clear interfaces.
>
> **[4:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=284)** If you establish these clear interfaces between the LLMs and your application layer, they should specify how the models will receive input and deliver output without exposing the internal workings of your models.
>
> **[4:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=298)** This encapsulation allows large language models to be updated or swapped without disrupting your application functionality.
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=305)** With LLMs, this will often mean you're going to call the back end with a prompt and a bunch of hyperparameters.
>
> **[5:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=312)** Secondly, you can automate model management.
>
> **[5:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=315)** And where you can do this, it's great to automate systems for monitoring, updating, and maintaining LLMs.
>
> **[5:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=322)** Of course, if you're using a third-party back-end LLM like GPT, this is going to be harder.
>
> **[5:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=327)** But if you do reach the point where you're using your own, it's good to have a level of automation in managing them.
>
> **[5:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=333)** Do you have enough resources to run them based on your traffic demands?
>
> **[5:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=337)** Or maybe you're thinking about using specialized chips like GPUs for inference, but is your fleet ready for spikes and traffic?
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=344)** Automation in LLMOps ensures that models are efficiently managed behind the scenes, reducing the need for manual intervention and allowing teams to focus on business-critical tasks.
>
> **[5:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=358)** With continuous performance monitoring, regardless of whether you host your own models or use third-party ones, continuous monitoring is essential to ensure they perform as expected without directly involving your end users in their complexities.
>
> **[6:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=374)** What happens if the infrastructure supporting the model goes down, or how do you mitigate issues there, for example?
>
> **[6:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=380)** Or is it maybe performing very slowly?
>
> **[6:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=382)** So what should you do?
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=383)** Indeed, even if there's no impact on your user today, there may be future impact that you want to avoid.
>
> **[6:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=390)** So good performance monitoring can help you avoid those future problems.
>
> **[6:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=395)** Indeed, involving your user lightly in this, by maybe having them rate the output of a model can help you choose the optimal application characteristics to continue to give them a great experience.
>
> **[6:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=408)** If you develop modular architectures, as we've discussed a lot, these modular architectures where LLMs can be plugged in as interchangeable components is essential.
>
> **[6:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=419)** This modularity allows for flexibility in using different models or versions as needed based on performance, cost, or other business criteria without redesigning the entire system.
>
> **[7:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=431)** Indeed, as the industry grows towards agentic-style applications, modular architectures like this, I believe, will become commonplace, as there's no reason why a workflow shouldn't span multiple different models, choosing per-task experts as needed.
>
> **[7:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=447)** Next up, data security and compliance.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=450)** You should ensure that data security and compliance are built into the interfaces and operations of LLMs.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=456)** As these models process potentially sensitive information, integrating robust security measures and compliance checks into their operations is critical, even if they're not at the forefront of the application.
>
> **[7:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=469)** And, to be honest, a well-designed architecture with separation of concerns is much easier to audit and much easier to demonstrate compliance on than one that's complete spaghetti code.
>
> **[8:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=481)** Okay.
>
> **[8:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=482)** So we've now gotten a bit of a grounding in effectively integrating LLMs into business applications as background components.
>
> **[8:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=489)** As we go forward, our focus will be on practical strategies to harness their capabilities while keeping your business logic and your user's needs front and center.
>
> **[8:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=499)** By treating LLMs as powerful but subordinate tools, you can enhance your application's functionality, agility, and user experience without getting bogged down by the complexities of AI technologies.
>
> **[8:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=513)** We're going to get hands-on, and we'll build a simple application that uses the power of an LLM to help you be a better public speaker.
>
> **[8:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/what-is-llmops?u=76281980&t=520)** It will be much lighter and much simpler than most real-world apps, but hopefully, it will help demonstrate many of the things that we believe you're going to need to consider when building real-world applications.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), gpt (2)
> **Code Keywords:** this, (3), let (2), switch (1), continue (1), public (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **UI Navigation:** switch to (1)
> **Definitions:** is called (1)


### 1. Build a Basic LLM App

> [↑ Back to Table of Contents](#table-of-contents)

#### Prompting
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=0)** Previously, you learned about large language models and began to understand how they are strong at completing text.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=7)** Naturally, the next thing to do is to give them text in order for them to complete it.
>
> **[0:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=12)** However, modern large language models can do much more than just a basic autocompletion of texts, and getting them to behave the way that you want becomes an art and a science.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=23)** We'll explore that in the next few videos, with the goal being, whether you're an absolute beginner or an experienced pro, will help you get the most out of your interactions with AI.
>
> **[0:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=33)** I'm going to cover the basics of prompting and how it works.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=36)** So let's dive in.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=38)** First things first.
>
> **[0:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=39)** What exactly is prompting?
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=41)** In the context of interacting with LLMs, prompting is the art of providing an input or a set of instructions to the model to generate a response.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=51)** Think of it as asking a question or giving a command to a very knowledgeable assistant.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=56)** For example, if you prompt with, tell me a joke, the model processes your request and generates a joke in response.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=64)** It's really that simple.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=65)** But as we'll see, prompting can be much more powerful and nuanced.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=70)** So why is prompting so important?
>
> **[1:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=72)** Well, the quality of the response depends heavily on the quality of your prompt.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=77)** A clear, well-structured prompt can yield a precise and useful answer, while a vague or poorly worded prompt might not get you the information that you need.
>
> **[1:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=86)** So let's break down the components of a good prompt.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=90)** You should be clear, and you should use straightforward language to avoid confusion.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=94)** You should be specific; provide as much detail as is necessary.
>
> **[1:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=99)** You should be contextual; give the model some context to understand your request better.
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=104)** You should be goal-oriented and be clear about what you want to achieve with the response.
>
> **[1:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=110)** So here's an example.
>
> **[1:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=112)** Consider this vague prompt, help me write an essay.
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=115)** The model might not know where to start or what aspect of history you're interested in writing about, and you'll get a response like this.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=123)** But how about a more specific prompt?
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=125)** Help me write a history essay about the important events in the Industrial Revolution.
>
> **[2:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=130)** This prompt gives the model clear instructions and context, making it more likely to provide a useful response.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=138)** And you can see when I tried this, I got a very detailed response, and it's much more than I can even fit on this slide.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=144)** So now let's take a look at some basic prompting techniques.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=148)** You can use simple queries, instructions, or questions to interact with a model.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=153)** A simple query is a direct request for information or actions.
>
> **[2:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=158)** An instruction is a command for the model to perform specific tasks.
>
> **[2:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=163)** A question is an inquiry that requires a detailed response.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=168)** Pause the video for a moment and then try a simple query, an instruction, and a question in your favorite chatbot.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=179)** So for a question, and this is a true story, one day I was out running with a friend in Tokyo, and this animal came out of the underbrush near a park.
>
> **[3:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=189)** We had no idea what it was, and to me, it actually looked like a red panda, which looks like this.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=196)** But it couldn't be a red panda unless it had escaped from a zoo.
>
> **[3:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=199)** But I could ask my favorite chatbot a question like, what is the animal that looks like a red panda but can be found in cities like Tokyo?
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=208)** And I got the answer of a creature called a tanuki.
>
> **[3:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=211)** And here's a picture of one.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=212)** Now, maybe that's what I saw, but I could swear the one that we encountered was a little bit more red in color.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=218)** ChatGPT's description said that Japanese folklore mentions that these creatures have shapeshifting abilities, so maybe.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=227)** Anyway, what did you try?
>
> **[3:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=229)** Please share your experiences with us.
>
> **[3:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=231)** Regardless of whether you're inquiring, instructing, or questioning, here's some good tips.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=237)** Be explicit.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=238)** Clearly state what you want the model to do.
>
> **[4:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=241)** Instead of saying something like, tell me something interesting, you could say, tell me an interesting fact about space exploration.
>
> **[4:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=249)** In my case, I was as explicit as I could be describing the animal reminding me of a red panda.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=257)** Also, you should use complete sentences when you can and this does really help reduce ambiguity.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=263)** Don't be afraid to iterate and refine.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=265)** If the model's response isn't quite what you wanted, refine your prompt and just try again.
>
> **[4:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=270)** Iteration is the key to improving the quality of responses.
>
> **[4:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=275)** You should set constraints.
>
> **[4:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=277)** Sometimes adding constraints can help you get more accurate answers.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=281)** For example, list three benefits of exercise for mental health is much more focused than just benefits of exercise.
>
> **[4:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=289)** Look at the case that I shared.
>
> **[4:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=291)** An important constraint was that the mysterious creature I saw was in Tokyo.
>
> **[4:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=296)** And of course, don't be afraid to ask follow-up questions.
>
> **[4:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=299)** If you need more information, just use follow-up prompts.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=302)** For instance, after getting a summary of an article, you might ask, can you explain the main argument in a bit more detail?
>
> **[5:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=310)** Let's walk through an example of iterating and refining a prompt.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=314)** Suppose I ask, explain climate change.
>
> **[5:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=317)** The response is very broad and it might not contain the details that I need.
>
> **[5:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=321)** So if I refine my prompt to explain the main causes of climate change in simple terms, this refined prompt guides the model to provide a more targeted and understandable answer.
>
> **[5:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=334)** Remember, the model is artificially intelligent.
>
> **[5:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=339)** It simulates intelligence by artificially understanding information and repeating things back to you.
>
> **[5:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=346)** You cannot assume that it understands what you're asking, and although it's artificially very strong at getting the sentiment from your prompts, it's still artificial.
>
> **[5:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=358)** It will make mistakes.
>
> **[5:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=359)** So being super clear can help avoid this.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=362)** And in that way, it's a bit like coding.
>
> **[6:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=365)** And just like coding, it's important to be aware of common mistakes in prompting to avoid them.
>
> **[6:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=370)** Don't be vague.
>
> **[6:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=372)** Avoid prompts that are too broad or unclear.
>
> **[6:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=375)** Don't overload by including too many requests in a single prompt.
>
> **[6:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=380)** Break it down into multiple prompts if necessary.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=383)** Challenge your assumptions and don't assume the model has the same context or knowledge as you do.
>
> **[6:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=389)** Provide necessary details in your prompt.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=392)** Don't neglect context.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=394)** Provide as much detail as you can.
>
> **[6:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=397)** For example, instead of a vague prompt like tell me about science, a more effective prompt would be, tell me about the scientific method and its importance in research.
>
> **[6:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=407)** This provides the AI with a clear topic and the context needed to generate a useful response.
>
> **[6:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=414)** Pause the video and try these out for yourself to see the difference in output.
>
> **[7:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=422)** To recap, prompting is a powerful tool for interacting with artificially intelligent models like Gemini or GPT.
>
> **[7:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=430)** By crafting clear, specific, contextual, and goal-oriented prompts, you can significantly improve the quality of your responses.
>
> **[7:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/prompting?u=76281980&t=439)** In our next video, we're going to explore how to use system prompts to specify a role for these purposes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (3), yield (1), this, (1), case, (1)
> **Analogies:** for example (3), think of it as (1), picture (1), for instance (1), just like (1)
> **Definitions:** is a  (4), is an  (1)
> **Cross-References:** in the next (1), next video (1)
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Warnings:** be aware (1)

#### Advanced prompting
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=0)** Let's now move beyond the basics to master some more advanced prompting techniques such as system prompts and memory.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=7)** These capabilities are incredibly useful for anyone looking to build smarter applications that use the reasoning power of large language models.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=15)** So buckle up as we explore these fascinating aspects of LLM technology.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=21)** In the previous video, we explored basic prompting techniques, how to ask direct questions or command simple tasks, and how to work on constructing them clearly.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=30)** In this video, we're going to expand on that foundation by introducing three advanced components: roles, system prompts, and memory.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=38)** Each plays a vital part in transforming how we interact with LLMs and helps us to really bring the most out of them.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=45)** Before we dive in, let's briefly recap why these advanced techniques are so important.
>
> **[0:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=49)** As LLMs become more sophisticated, our ability to guide and shape their outputs becomes increasingly crucial.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=57)** They're getting bigger, smarter, and more complex.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=60)** So in order to really hone any applications that may use them, we really need the full set of tools for working with them at our disposal.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=68)** And while simple prompting is very powerful, isn't it much better to get more out of the LLM if we can?
>
> **[1:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=74)** So let's start with the idea of giving the model a role to play.
>
> **[1:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=78)** Now these are basically very simple system prompts where we tell the model to behave in a particular way.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=84)** And this involves more than just asking it to perform a task.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=87)** It means setting a persona for the AI that aligns with specific expertise or behavior patterns.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=93)** This technique enhances the relevance and appropriateness of the model's responses.
>
> **[1:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=99)** For example, imagine you're developing a virtual assistant for tech support, by prompting the model with, as a tech support agent, guide a user through troubleshooting their internet connectivity issues.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=111)** The AI will adopt the persona of a support agent using technical yet accessible language to assist the user effectively.
>
> **[2:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=120)** And here you can see my interaction with ChatGPT, where I gave it that type of command.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=125)** I start with the prompt, you are a friendly and informative tech support agent. You're an expert in internet connectivity.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=131)** Your goal is to help me get reconnected.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=134)** Start by asking me how you can help.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=137)** This gets ChatGPT to act in that way and it will stay on character helping me through my issues.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=144)** So for example, I'll type.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=145)** I can't access the internet.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=147)** The agent will go into its first set of steps to help me.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=151)** It stays in the friendly and informative character, pleasantly asking me to check on various things.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=156)** So I respond no Ethernet, and vaguely it looks like I'm on Wi-Fi.
>
> **[2:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=161)** I try the steps that it gave me, but I give more specific information back.
>
> **[2:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=166)** For example, I can't see [google.com](https://google.com).
>
> **[2:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=169)** Unfazed, the friendly and helpful assistant doesn't berate me for not telling them that earlier and instead goes through some more steps.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=177)** One of them is to try the IP address instead of the domain name, and it did give me actually the right IP address for [google.com](https://google.com).
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=184)** So no hallucinations here.
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=186)** After informing it that the IP address worked, It now stayed helpful and it showed me how to change my DNS settings.
>
> **[3:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=193)** It also gave very specific instructions, such as how to set my DNS, flush my DNS cache, and stuff like that.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=201)** It did what I had asked it to do and it really helped me out.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=205)** Now, if there was one issue I had with its performance, it was that it didn't ask me about my operating system first, but that was just a very simple prompt I gave it.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=214)** I could have been more explicit.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=216)** Imagine other scenarios you could use with roles like this, such as for creative writing.
>
> **[3:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=222)** You could say, as a novelist, describe a serene landscape that could serve as the setting for fantasy story.
>
> **[3:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=229)** The LLM will then shift its style to be more descriptive and imaginative, crafting detailed and vivid imagery that could spark creative thought in the author's mind.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=240)** The AI might produce a response like picture a tranquil valley nestled between towering, mist-shrouded mountains.
>
> **[4:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=249)** Crystal-clear streams meander through lush meadows dotted with iridescent flowers that seem to glow in the soft twilight.
>
> **[4:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=256)** Ancient, gnarled trees with simmering silver leaves lined the edges of the valley, their branches reaching towards the sky painted with impossible colors.
>
> **[4:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=267)** Now that's much nicer than I could write alone.
>
> **[4:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=269)** One more example.
>
> **[4:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=271)** What if you prompted GPT with something like, as a financial advisor, provide guidance on creating a diverse investment portfolio for a risk-averse client.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=281)** It should adopt a more analytical and cautious tone.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=285)** So go ahead, pause the video now and try it out for yourself.
>
> **[4:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=288)** Explore the language that it uses as you interact with it, and then come back when you're done.
>
> **[4:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=296)** When I tried it, the response included explanations of different asset classes, the importance of diversification, and suggestions for low-risk investments like government bonds or blue chip stocks.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=309)** The language was professional and reassuring, aimed at building trust and educating me as its client.
>
> **[5:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=316)** These prompts had very simple descriptions, maybe only a sentence or two, but we got some really strong output from the LLM.
>
> **[5:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=324)** Because we spent a lot of time specifying a role that the LLM will follow, the terminology can get a little confusing.
>
> **[5:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=331)** Try to think about these as system prompts, which is a special prompt that starts the conversation and remains in context throughout.
>
> **[5:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=339)** Often that prompt, as in the examples we've shown here, gets the LLM to perform in a particular role.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=347)** But the confusion can come when you start using APIs instead of chatting directly with the LLM via something like ChatGPT.
>
> **[5:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=354)** For example, here's a simple call to the OpenAI API, and you can see that it uses the term role to denote either the LLM, which it calls the system, or the person accessing it, which it calls a user by role.
>
> **[6:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=367)** And the system prompt that gets the system to act in a particular way, such as a customer service AI assistant, which we often say is its role, is the contents of the system role.
>
> **[6:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=379)** The final idea here is memory, and incorporating memory into LLM interactions is perhaps one of the most significant advancements in making AI interactions more human-like.
>
> **[6:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=391)** Memory allows LLMs to recall previous parts of the conversation or even previous interactions, depending on the system's capabilities.
>
> **[6:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=401)** Think back to the example that I showed earlier where I was interacting with a customer support agent.
>
> **[6:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=407)** Notice how I was able to continue the conversation naturally without having to retell it my details each time.
>
> **[6:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=415)** That was powered by memory.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=417)** When creating your own apps, you could implement memory, but LLMs like ChatGPT have already implemented it for you.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=424)** However, do be careful that the longer the chat goes, the more diluted the memory can become.
>
> **[7:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/advanced-prompting?u=76281980&t=430)** So enough theory, let's get hands-on next, and we'll look at building our first application that will play a role, and that is of someone helping you to be a better public speaker.

> [!info]- Semantic Content
>
> **Env Vars:** llm (9), dns (3), gpt (1), api (1)
> **Analogies:** such as (4), for example (4), imagine (2), picture (1)
> **Code Keywords:** let (4), type. (1), this, (1), continue (1), public (1)
> **URLs:** [google.com](https://google.com) (2)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Hosting an app
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=0)** So we've seen what LLMs are all about, and we went a little deeper into prompting, seeing how roles and system prompts are used in particular.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=7)** We also discussed memory a bit, and we saw how models like GPT work well, because they have memory of the conversation and they can act on it.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=16)** Next, we're going to build our own ChatGPT-style application that's a specialist in helping people with public speaking and putting together talks.
>
> **[0:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=25)** The application will look like this.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=28)** It introduces itself as being available to help you create an engaging and powerful talk, and it asks you about what your topic or idea will be.
>
> **[0:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=37)** I started with something silly, the migration patterns of wombats.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=41)** After thinking about it for a moment, the LLM comes back with clarifying questions.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=45)** Who's the audience?
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=46)** What's the purpose of the talk and what are the key points I want to cover?
>
> **[0:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=50)** Stuff like that.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=51)** I'll answer this question and note that it's now using memory.
>
> **[0:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=55)** I'm not mentioning wombats at all anymore.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=58)** I'll tell it that it's for a general audience and the purpose is to inform and inspire.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=62)** But I do need help with the key points.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=65)** Now it comes back with a very detailed answer.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=68)** Now this app is a little bit primitive, so there's no output formatting.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=71)** And it might be nice to render this markdown.
>
> **[1:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=74)** Anyway, it does break my talk down into a number of bits.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=77)** And bit number one is an interesting introduction to these creatures, so I'll ask for it to elaborate on this.
>
> **[1:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=85)** And given that LLMs are experts, even my misspelled please is recognized and understood when I ask for a 200-word script.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=94)** After thinking about it for a bit, I start to get a really interesting script to help me introduce an audience to wombats.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=102)** I never realized that wombats have pouches like kangaroos, but they face backwards.
>
> **[1:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=106)** Note also that because of its role as an aid in preparing talks, the bot will continue the conversation using memory for everything that's happened so far.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=116)** It will ask if this text captures my desired tone and information depth, and I think that's pretty cool.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=122)** So then the next question is, well, how will I build that?
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=125)** And I'm glad you asked.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=127)** And that's what we're going to cover.
>
> **[2:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=129)** First, be sure to have Node.js installed on your machine.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=133)** If you don't have it, you can find details at [nodejs.org](https://nodejs.org).
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=137)** Make sure it's installed before continuing.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=139)** If you have Node installed, make a directory on your machine, change to it, and then install npm like this.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=147)** After that, you're going to need to install some dependencies, so please use the following.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=153)** In the repo, I've provided three files: server.js, index.html, and app.js.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=159)** Now please make sure they're put in the directory properly, as you can see here.
>
> **[2:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=162)** Then add a .env file to your project root and add your OpenAI API key there as an environment variable.
>
> **[2:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=171)** You can get an API key from OpenAI.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=173)** Just visit platform.[api.com/api-keys](https://api.com/api-keys).
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=177)** It should look like this, and you can create a new secret key from there.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=181)** Once you've done this, you can run node server.js from the root directory and your chatbot should be working.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=188)** Just simply visit localhost:3000 to play with it.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hosting-an-app?u=76281980&t=192)** Next, we'll take a look at how to create this application from scratch.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (3), find (1), npm (1)
> **Code Keywords:** this. (3), this, (2), public (1), continue (1)
> **File Paths:** server.js (2), node.js (1), index.html (1), app.js (1)
> **Env Vars:** api (2), gpt (1), llm (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1), [api.com](https://api.com) (1), [localhost:3000](https://localhost:3000) (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** install (2)
> **Ports:** :3000 (1)

#### Create a chatbot
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-chatbot?u=76281980)

#### LLM exercise
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=0)** At this point, you should have a version of the app running on your machine.
>
> **[0:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=3)** You can chat with it about doing talks, and you can see what will happen as you have a conversation with it.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=8)** But ultimately, we're trying to build something with proper MLOps, and the first step in that journey is logging.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=15)** This is a website which by definition can have multiple users, so you'll need to update the site with logging on a per-user basis, and the logs should be stored in JSON format.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=26)** Now here's a hint.
>
> **[0:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=27)** You can use an LLM like ChatGPT or Claude and pass it your working code if you want to see if it can update it.
>
> **[0:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=33)** But for a real challenge, try to do it yourself.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=36)** Here's a look at the working solution, including the logs.
>
> **[0:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=40)** When the server isn't running, Chrome can't reach the site as shown here, but you can start the server from the command line.
>
> **[0:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=47)** When it is running, you can refresh the browser, and then you can see that the chatbot will run, and in the console, the session is going to be assigned a user ID.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=58)** So for the next few minutes, you'll see me trying to get the bots to help me talk about something very abstract.
>
> **[1:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=63)** And it's that strange animal I saw in Tokyo that I thought was a red panda.
>
> **[1:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=67)** But of course, this is an LLM which is prone to hallucination, particularly with a very abstract prompt.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=73)** And it first started to give me details on red pandas and not an animal that I didn't specify that confused me into thinking that it was a red panda.
>
> **[1:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=82)** So I tried again and I told it it's not a red panda, and I asked it to try again.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=87)** By the way, capitalizing not like that is a good emphasis for human reader, but it won't work with an LLM.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=93)** But old habits die hard.
>
> **[1:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=95)** Now the LLM came up with an interesting animal, the Hokkaido squirrel.
>
> **[1:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=100)** But it told me that it's much smaller.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=101)** So yes, it's still wrong.
>
> **[1:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=103)** By the way, it's a super cute animal, but not what I wanted my talk to be about.
>
> **[1:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=107)** Anyway, trying one more time, I mentioned it's much larger and the stripes on its tail made me think of a red panda.
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=114)** And then when I mentioned it, it was a little bit raccoon-like.
>
> **[1:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=117)** So finally, my conversation helped it come up with the idea of a tanuki.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=122)** And now it could help me write a full script for talking about the tanuki.
>
> **[2:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=126)** And when I enter some of my own desires, like starting with an anecdote about literally running into one, it was able to come up with the bones of a talk that I could build on.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=137)** Now, what's interesting is the logging.
>
> **[2:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=140)** You'll see that when we ran the app from the console, after I refreshed the browser, a user ID was assigned.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=146)** I stopped the server and changed into the logs directory, and in there, there will be a number of JSON files.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=153)** Now you'll see this one that begins with these numbers matches the ID for my session when I signed in, and this was the bot around me chatting about spotting the tanuki.
>
> **[2:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=163)** And there's another one with different IDs.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=165)** And if I take a quick look at that one, we'll see it's another session where I was talking about something else.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=170)** If we now look at the session that I just had, we can see the entire conversation.
>
> **[2:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=174)** Notice the roles in particular.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=176)** The first role was system with the system prompt about public speaking.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=181)** After that, the interaction is logged between the user, what I said, and the assistant, what the chatbot said.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=187)** And from this, you can start gleaning some useful information.
>
> **[3:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=191)** Maybe for future projects, you could see if there were several user messages that said no or that's wrong or similar sentiment, and you could use that to fine-tune the responses from the chatbot.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=203)** There's a lot you can do with these types of logs to make your system better, and that's what you'll continue to explore in this course.
>
> **[3:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/llm-exercise?u=76281980&t=209)** Now let's take a look at this chatbot in action.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), pass (1), super (1), finally, (1), else. (1)
> **Env Vars:** llm (4), json (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Prerequisites:** you'll need (1)

#### Adding logging to your server
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=0)** So we now have a working chat app.
>
> **[0:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=2)** But what we wanted to do in this exercise is start thinking about logging user activity in the chat app, so that we can start understanding how our users are interacting with our app, and then help us on our first steps towards doing LLMOps and build a better app.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=17)** So what we're going to look at now is that exercise that you were given.
>
> **[0:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=20)** And I'll show you how to implement the logging that we were talking about.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=24)** Okay. First of all, we want to include the ability to create a unique identity for our users.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=31)** And for that, we're going to use a couple of libraries called fs and crypto.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=36)** So I'm going to start with const fs = require('fs'), like so.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=43)** And then const crypto = require('crypto').
>
> **[0:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=49)** Don't worry we're not doing blockchain or anything like that, we're just using those libraries to give us some unique identifiers.
>
> **[0:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=55)** So we now have the inputs that we need in order to be able to continue.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=59)** Now all of the other code that we've been doing, OpenAI stuff, Express, all that kind of thing, is going to stay the same.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=65)** Our system prompt stays the same.
>
> **[1:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=67)** Where we're going to start getting a little bit more interesting is, first of all, we want to be able to generate a unique user ID whenever a user connects to our system.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=77)** Now, I'm not going to be having them log on and give us like their username or anything like that.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=83)** We're just going to use crypto to create a random string that tracks a particular user and a user session.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=90)** So if they log off and they come back, they'll be getting a different one.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=93)** So we're not tracking any personal information or anything like that.
>
> **[1:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=96)** I'll just put a comment in here.
>
> **[1:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=98)** This is a function to generate a unique user ID.
>
> **[1:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=103)** And this function is going to be called generate user ID, surprisingly enough.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=109)** And in there, the crypto library that we just did, I'm going to return crypto.randomBytes(16).toString('hex').
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=122)** So it's going to take 16 random bytes, give us the hex values of them, and that's going to be the idea of this user for this session.
>
> **[2:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=130)** And then we can use that to actually track them.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=133)** Now that we're tracking them for this particular session, we also want to write out what their conversation is.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=138)** So I'm going to do a function for that, function to log conversation.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=143)** And in here, I'm going to type function logConversation, the user ID for the particular user, and the actual conversation itself.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=156)** All right. So what do we want to do in this.
>
> **[2:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=157)** Well, first of all, we want to create a logs directory to store all of this.
>
> **[2:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=161)** So I'm going to say const logDir = path.join.
>
> **[2:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=166)** Our current directory name which is in this __dirname.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=170)** And I'll call it logs to be original.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=173)** All right. So now we want to make sure that that directory exists.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=176)** So let's make sure it exists.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=178)** And if it doesn't, we'll create it.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=179)** If the log directory doesn't exist on the file system, I'm just going to do this.
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=186)** Then say you know what?
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=188)** Let's make it on the file system.
>
> **[3:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=190)** Make dir sync, logDir.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=192)** I'm just doing all of this synchronously just to make it easier.
>
> **[3:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=195)** And that should be logDir and logDir.
>
> **[3:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=197)** Okay. So now we're saying here's our log directory.
>
> **[3:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=200)** If it doesn't exist, we'll create it.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=201)** If it does exist, we can just use it.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=203)** So now we have a log file that we want to write.
>
> **[3:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=206)** So const logFile = path.join.
>
> **[3:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=211)** So we're going to put it in that log directory.
>
> **[3:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=213)** And we're going to call the file the user ID that we've just created, this 16 hex bytes.
>
> **[3:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=220)** And we're going to use JSON.
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=221)** So it's going to look like that, ${userId}.json.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=225)** And then that should be a const.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=227)** And now all I have to do is write out the file.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=230)** So fs.writeFileSync.logFile.
>
> **[3:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=235)** And then the, it's JSON, so I'm just going to say JSON.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=240)** stringify, our conversation.
>
> **[4:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=244)** And then just a couple of default parameters after that to give us some spacing on the conversation.
>
> **[4:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=250)** And that's our function now to actually log out that conversation.
>
> **[4:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=255)** Okay. So what happens now when the user connects?
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=257)** Remember we are saying we have a new client connected.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=260)** But what we want to do is, of course, generate a user ID for that client with that helper function that we just wrote.
>
> **[4:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=266)** So I'm going to say generate a unique user ID for this session.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=273)** And that will be const userId =generateUserId(), the one that we wrote a moment ago.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=281)** And then I'll just write out a log file.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=283)** I'll save a little bit of time by not typing it.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=285)** And we'll just say console.log.
>
> **[4:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=287)** We've assigned that user ID which is user ID that we've just generated.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=292)** So now we're going to send our initial message.
>
> **[4:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=294)** We're going to create our conversation history as before.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=297)** But now that we have a conversation history, it has been updated with the system one.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=302)** So we should really log it.
>
> **[5:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=303)** We should log it every time the conversation history changes.
>
> **[5:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=306)** So all we're going to do is call that log conversation function that we wrote a moment ago like this.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=314)** So it's just log conversation.
>
> **[5:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=317)** We have the user ID and we have the conversation history that we can log them out. Pretty simple, right?
>
> **[5:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=322)** So now we have our socket chat message that we saw in the previous video.
>
> **[5:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=327)** We're going to complete that.
>
> **[5:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=328)** We're going to push it to the conversation history.
>
> **[5:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=332)** And, oh, we're going to push it to the conversation history.
>
> **[5:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=335)** So remember as I said earlier, once we do that, we should always log it.
>
> **[5:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=340)** So let's log the conversation history again now that it has changed.
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=344)** So I'm just going to add the same line for doing the logging that we had a moment ago.
>
> **[5:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=350)** Log conversation after the message has changed.
>
> **[5:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=353)** It is after the user message.
>
> **[5:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=355)** So we're going to log the user ID again with that conversation history before we go into doing the chat completion.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=362)** So now we're going to do the chat completion.
>
> **[6:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=364)** We're going to get the response.
>
> **[6:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=366)** After we get the response, we're going to push it to the conversation history.
>
> **[6:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=370)** But yes, again, we've changed the conversation history.
>
> **[6:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=373)** So let's log that again.
>
> **[6:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=376)** So we just make sure every time we update the conversation history, we're adding it to the log so that we keep track of everything.
>
> **[6:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=382)** So we've now logged that conversation, and now we'll go back to all of the rest of our code, emitting the thinking, is false, emitting the chat response back to the server.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=392)** And I think we've pretty much done everything that we need, except we forgot a couple of things.
>
> **[6:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=398)** One of them here is that when we disconnect, we should also say, hey, look, the conversation is over.
>
> **[6:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=404)** So let's log that conversation when the user disconnects.
>
> **[6:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=408)** So just to make sure that we're nice and clean, I'll do that final log here.
>
> **[6:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=412)** And again, it's just the same thing, log conversation, user ID of the conversation history.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=417)** So now we've completely updated our server.
>
> **[7:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=420)** I've just saved that.
>
> **[7:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=421)** So now let's see what it looks like for running this server.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=424)** So again, we're going to look at the adding logging to site directory.
>
> **[7:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=430)** And we're going to go into the start there which is the code that we've just been editing.
>
> **[7:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=435)** And now I'm going to say node server.js.
>
> **[7:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=438)** And if node had previously been run on here and things like express were missing, you will see like it's going to ask you for express, but you can just npm install them.
>
> **[7:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=448)** But you see, now look what has happened.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=450)** When I run it, it says the server is running on Port 3000 and new client is connected, which is me, and it's been given this user ID.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=456)** So if I come in and I start chatting, let me refresh that and let me maybe talk about something else.
>
> **[7:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=463)** Help me with talk about a mysterious animal I once saw while running in Tokyo.
>
> **[7:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=474)** It looked like a cross between a red panda and a raccoon. It's thinking.
>
> **[8:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=483)** It's going to take a little while because that's a complex prompt that I've given it.
>
> **[8:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=487)** And now it's like, hey, here's like a great outline for a talk.
>
> **[8:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=490)** Mysterious encounter. What was it?
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=493)** Where was I? What did I see?
>
> **[8:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=494)** Why did it remind me of a red panda?
>
> **[8:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=496)** All of that kind of stuff.
>
> **[8:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=497)** And I'm like, yes, you know what?
>
> **[8:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=498)** I don't want to talk about a red panda, can you figure out what animal that was.
>
> **[8:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=509)** Notice I have a typo in there.
>
> **[8:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=511)** I said about to instead of about.
>
> **[8:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=513)** But that's okay because ChatGPT can figure it out.
>
> **[8:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=516)** And guess what?
>
> **[8:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=516)** It actually figured out this thing called a tanuki, which is a Japanese raccoon dog.
>
> **[8:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=520)** I'm pretty sure it was one of those that I saw.
>
> **[8:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=522)** So now you can see I've had this chat.
>
> **[8:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=525)** Let's go and take a look at the directory itself.
>
> **[8:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=528)** And I'm going to open that up in finder.
>
> **[8:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=531)** Okay. So if I open up finder, we can now see that we have this logs directory.
>
> **[8:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=535)** And if I go into logs, we can see these JSON files.
>
> **[8:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=539)** Now let me take a look at this JSON file here.
>
> **[9:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=541)** Now we can see here's the conversation that I just had and how it has been logged.
>
> **[9:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=547)** We can see the role of system; you're an expert in public speaking.
>
> **[9:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=550)** You can see me asking about this mysterious animal.
>
> **[9:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=553)** You can see the response from the assistant.
>
> **[9:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=556)** You can be saying, I don't want to talk about to a red panda.
>
> **[9:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=559)** Can you figure it out?
>
> **[9:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=560)** And we can see the response back from the assistant.
>
> **[9:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/adding-logging-to-your-server?u=76281980&t=562)** So we can see now that our logging has actually worked, and we've taken our first steps towards building a chat application with LLMOps in it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (8), const (6), this. (4), require (2)
> **Code Identifiers:** logdir (4), logfile (2), userid (2), randombytes (1), tostring (1)
> **CLI Commands:** make (7), node (2), npm (1)
> **Env Vars:** json (5)
> **Cross-References:** previous video (1), go back to (1)
> **Definitions:** is a  (2)
> **File Paths:** server.js (1)
> **Ports:** port 3000 (1)


### 2. First Steps in Ops

> [↑ Back to Table of Contents](#table-of-contents)

#### Coding for logging
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=0)** To this point, you've looked at what LLMs are and you've briefly looked at how they worked.
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=5)** We explored some of the ideas of LLMOps, namely, how you can have a process of continually improving your app from user feedback.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=15)** In your last exercise, you took a simple chat app written in Node.js and you added some code to log all the conversations between the user and the chatbot.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=24)** I'd like to drill down into that so we can see what it looks like to create a logging system.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=30)** We'll look in detail at the server.js file, so make sure you have a copy of it on hand.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=35)** It is available in the GitHub repo for this course.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=38)** Now this is the back end for the chat application.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=41)** The front end is the HTML code that contains JavaScript code that manages the user interface, rendering and styling the chat messages and capturing the user's input.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=51)** And you can find that in the download, too.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=54)** But I'm just going to focus on the back end in this video.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=57)** At the top of your file is the set of require commands that specify what external libraries your app will need to include.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=65)** Next, I'd like to focus on these, where you create a server and you run a socket on it.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=70)** It then runs the server on Port 3000.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=73)** If you want to run it on a different port, you can change the number here.
>
> **[1:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=78)** This port number is what you see when you type the address in the browser window where you say [http://localhost:3000](http://localhost:3000) to access the chatbot.
>
> **[1:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=89)** Remember, the default port for websites is Port 80, and this line is where you'll specify that you're going to use the OpenAI APIs to use the GPT backend for this chatbot.
>
> **[1:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=100)** Later, we can explore using other backends as we've discussed earlier on.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=105)** Maybe based on your user's feedback, they might prefer a different LLM.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=109)** Next up, in order to log your users, you're going to need some way of identifying your individual users.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=116)** I'm going to do it anonymously in this application where when the user connects, they get a unique identifier that can then be used to track each individual user's logs without any PII from that user, like their name or their email address.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=132)** And this is achieved with this code.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=134)** First, a helper function to generate a user ID, which simply uses the crypto library to generate a set of 16 random bytes that it's going to turn into a string of hex values.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=146)** Now do note that this will be just that user for this session.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=150)** If they go away and they come back, they'll get a new user ID.
>
> **[2:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=154)** But for the purposes of our logging, this works well enough.
>
> **[2:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=158)** The second part of this logging will be this helper function, and it writes out the logs.
>
> **[2:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=163)** And as you can see here, how it works is that it creates a JSON file with the user ID and it writes to that.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=170)** So after using this chatbot for a while, there are going to be a number of users and they'll have a lot of data about their chats.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=177)** And we can look at those in a moment.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=179)** But before we get there, I want you to see how the chat application works and where the logging will come from.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=185)** Let's start with how a conversation between a user and a chatbot like ChatGPT will work.
>
> **[3:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=191)** Your app actually does exactly the same.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=194)** The process begins with the LLM emitting a message like a greeting to get the conversation started, and it generally refers to itself as the assistant.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=203)** Then the user will usually reply with a message like we've been using, please help me write a speech about wombats.
>
> **[3:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=209)** And the assistant will reply with a message something like, sure, I can help.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=214)** Here's the speech outline.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=216)** The assistant understands the thread of the conversation because it sees the entire history of the conversation, and it can then reason across that.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=225)** Remember, as an LLM, it has already learned lots of information about the contents of the discussion, in this case, wombats, and we can use that when sending info back to the user.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=237)** And earlier, we spoke about system prompts where you can prime the model to behave in a particular way, with particular experience or a desired output as a role.
>
> **[4:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=247)** All they are from this perspective is text that's injected into the conversation before it begins.
>
> **[4:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=253)** So the chatbot has that, along with the rest of the conversation as the data that it can reason across.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=260)** So let's take a look at the code for all of this.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=263)** It will start with this code. The io.on connection, which executes whenever a new client connects.
>
> **[4:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=271)** It will first create the user ID for logging, and then it will emit the initial message that welcomes the user.
>
> **[4:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=278)** We'll then begin the conversation history by injecting the system prompt, and you'll see three roles being used in the code.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=285)** This system one is a special one to denote the system prompt.
>
> **[4:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=290)** Later, you'll see user for the user's text and assistant for the responses from the LLM.
>
> **[4:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=296)** The meat of this application is in this code, and it executes after the user sends their message, which will be stored in the message variable.
>
> **[5:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=306)** Next, the app will emit text indicating that it's thinking.
>
> **[5:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=311)** The message hasn't been sent to the back end yet, and we'll see that in a moment.
>
> **[5:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=315)** The process is asynchronous, meaning you don't know exactly when you'll get an answer.
>
> **[5:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=320)** So putting a message like thinking on screen will give the user confidence that something's happening.
>
> **[5:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=326)** Next, as we saw when we looked at the architecture of the system, the user's message is pushed to the conversation history.
>
> **[5:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=334)** Keep that in mind.
>
> **[5:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=335)** The conversation is the ongoing process of updating the conversation history and passing that between the user and the assistant LLM.
>
> **[5:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=345)** We'll then use the logging function that we showed earlier to log the message.
>
> **[5:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=349)** The core of the interaction with the LLM is in this code.
>
> **[5:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=353)** There's a lot going on here.
>
> **[5:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=355)** So I'm going to break it down little by little.
>
> **[5:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=357)** First of all, when chatting with an LLM, remember that LLMs predict the likely next tokens for a conversation.
>
> **[6:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=364)** Thus, it uses the term completion.
>
> **[6:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=368)** You're going to call OpenAI's chat capability and ask it to create a completion for you.
>
> **[6:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=374)** Note that you await the response.
>
> **[6:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=377)** It is an asynchronous call that might take a little while to complete.
>
> **[6:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=381)** You can then specify the model from what's available, and importantly, you'll pass it the entire conversation history.
>
> **[6:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=389)** Note that the user message was pushed to the conversation history a little earlier.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=394)** When the OpenAI API returns a chat completion, you can then get a response like this and push that to the conversation history so that everything, the system prompt, every user message, and every assistant message is stored in the history.
>
> **[6:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=410)** And do keep note that the role here is set to assistant.
>
> **[6:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=414)** As we update the conversation history, we want to make sure that stuff coming back from the LLM is updated in the history properly.
>
> **[7:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=423)** And then finally, we want to ensure that the logs that we've created to save locally on a user ID basis are also updated with the conversation history values.
>
> **[7:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=433)** After all that is done, now it's simply a matter of turning off the thinking message, outputting the chat response, and continuing.
>
> **[7:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=442)** In case of an error, you can flag this to the user.
>
> **[7:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=445)** Okay.
>
> **[7:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=446)** Now that you've seen how the application works, let's see it in action.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/coding-for-logging?u=76281980&t=450)** I'll run it, I'll have a few conversations with it, and then we can inspect the logs.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (3), interface (1), require (1), include. (1)
> **Env Vars:** llm (8), html (1), gpt (1), pii (1), json (1)
> **CLI Commands:** make (2), node (1), find (1)
> **Warnings:** note that (4)
> **Ports:** port 3000 (1), :3000 (1), port 80 (1)
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **File Paths:** node.js (1), server.js (1)
> **URLs:** [http://localhost:3000](http://localhost:3000) (1)

#### Exploring the logging system
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=0)** So let's explore the logs that we've just been talking about, and I'm going to do that by having multiple chat sessions with our chatbot.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=6)** So let's say our first chat session is going to be, help me give a presentation on giving presentations.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=16)** That's really meta, and see what it comes up with.
>
> **[0:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=20)** So it's going to take a moment.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=21)** It's again we're going through the whole thing.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=23)** It's thinking.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=24)** And while that thinking message is displayed, we're in that asynchronous loop where it's the Node.js server is calling the OpenAI back end to get the completion.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=32)** It sends it back to us.
>
> **[0:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=33)** And now we get something like this.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=35)** And that's pretty cool.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=36)** Even things like, hey, voice modulation, managing nerves, that's getting pretty advanced, pretty cool.
>
> **[0:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=42)** And I'll say, okay, can you turn this into a 200-word script that I can use as a starting point?
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=51)** Something like that.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=54)** So again, really, really nice.
>
> **[0:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=55)** Or maybe I could do longer than 200 words, but let's just keep it simple for that one.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=59)** And it's having that, again, going through that loop of thinking.
>
> **[1:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=63)** So it's saying absolutely, it's turned this into a succinct script forming in 200 words.
>
> **[1:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=67)** That's really cool.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=69)** So I'm going to pretend to be another user now to do another conversation.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=73)** Help me give a presentation on, there's a book called Space Cadets that I wrote, and we're going to be using that for RAG in the next chapter.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=84)** But let's see what happens if we try to do something now with it.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=88)** Okay. Help me give a presentation on this book by me.
>
> **[1:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=92)** Again, it's going into the whole thinking loop, and it comes back and it's giving me this really interesting high level, right?
>
> **[1:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=100)** It's like before we start crafting the talk, can you share your grasp and interpretation of space cadets?
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=105)** It's very, it's helping me to craft a speech based on a book that I know, but it doesn't know anything about the book, or at least it doesn't show that it does.
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=114)** So it's like, can you tell me more about the book and see what happens?
>
> **[2:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=121)** And again, we're going to fix this with RAG in the next chapter, but I thought it'd be a little bit fun to take a look at it now.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=127)** And there we go.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=128)** It's oh, unfortunately, this one has hallucinated because there is no character called Connor.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=134)** We'll be exploring reinforcement learning with human feedback in Chapter 2.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=139)** And here would be a great example where we can say this is bad because we, unfortunately, have a hallucination going on here.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=145)** But we've logged that, which is nice.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=147)** And let's say I'm going to have a third client going on and let's say it's like, okay, can you help give me a presentation or help me give a presentation on RAG.
>
> **[2:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=162)** Let's see if it understands the acronym RAG.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=164)** No, it doesn't.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=165)** Red, amber, green status, or something else.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=168)** So if I say retrieval augmented generation, like that.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=176)** I'm just having too much fun playing with this chatbot.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=178)** I hope you do, too.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=180)** And let's see what it comes back with.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=181)** But the important thing here is I just want to show the multi-environment logging that we've implemented.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=187)** And now it gets it.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=188)** And now we can start talking about giving a presentation and particularly some of the current challenges in working with chatbots and how RAG can help overcome them.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=196)** But before we do a presentation on that, let's go over and take a look at our logs.
>
> **[3:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=202)** So now these are the logs that were generated for these three chats.
>
> **[3:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=206)** So we can see these were just generated in the last few minutes by me.
>
> **[3:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=210)** If I go in and I start looking at them, and we'll see, for example, here's one of the logs that I did.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=215)** And I can see from the context that it was the third one where I've logged, can you help me give a presentation on RAG?
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=221)** If I go back to the folder here and take a look at another one, we can see that this was the conversation on the book, Space Cadets.
>
> **[3:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=229)** And so now what we have done is implemented the ability to have multiple logs per user logs with anonymized users.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=238)** And so we have all of this data and we can explore what each user has done and what their conversations were and how they worked.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=245)** You could take this and turn it into a relational database if you wanted.
>
> **[4:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=249)** And later on in this course, we're actually going to take a look at reinforcement learning with human feedback so that you could actually say, hey, this response wasn't very good, give me a different one.
>
> **[4:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=258)** So with that, thank you.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/exploring-the-logging-system?u=76281980&t=260)** Have fun, and let's move on with the rest of the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (1), else. (1)
> **Env Vars:** rag (6)
> **Cross-References:** in the next (2), in the last (1), go back to (1)
> **Analogies:** it's like (3), for example (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Prerequisites:** before we start (1)

#### RLHF and user feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=0)** So we've now seen how to create a chat application that uses an LLM and how to log the conversations.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=6)** But there is an important feature missing, and that is to get human feedback.
>
> **[0:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=11)** Ultimately, the success of your model depends on whether people like using it.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=15)** And this process is typically called reinforcement learning through human feedback or RLHF for short.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=23)** It typically works a little like this.
>
> **[0:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=25)** The chatbot or assistant adds a message to the chat history using the completion API.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=31)** The user then responds and the assistant responds again.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=35)** But what if the user doesn't like the response?
>
> **[0:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=37)** Wouldn't it be good if they could provide feedback here and that could trigger a different response, as well as sending a signal to the creators of the underlying LLM that that response wasn't so good, so when they retrain the model, they can improve it.
>
> **[0:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=53)** In this course, you're not training large language models, so doing that full RLHF is a bit beyond the scope of what we're doing.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=60)** But what if you use different LLMs on the back end, and if signals from your users denoted that they didn't like one of them, then you could switch to the other.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=69)** And that's a nice op scenario, and it would look like this.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=73)** So this is how our chat app currently works.
>
> **[1:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=75)** It's a server app running on Node.js that can serve a number of clients.
>
> **[1:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=80)** The assistant on the back end is done by a remote call to the OpenAI GPT API.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=87)** It keeps logs for each user, too.
>
> **[1:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=89)** Now what if over time, we noticed that users were giving negative feedback about the returns from the chat?
>
> **[1:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=98)** Then we could, in those circumstances, perhaps try a different back end instead of the OpenAI GPT one.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rlhf-and-user-feedback?u=76281980&t=105)** But before you get there, you'll need to provide your end users the ability to give feedback, and we'll look at that in the next step.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), rlhf (2), api (2), gpt (2)
> **Code Keywords:** this. (2), switch (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Prerequisites:** you'll need (1)

#### Challenge: Implementing RLHF and user feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=5)** For this challenge, you're going to implement what we just discussed, capturing human feedback on the quality of the chatbots and using that to make a decision.
>
> **[0:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=14)** When you're done, your chatbot should look a little bit like this, with the core difference being that when you receive a message back from the chatbot, it also has these three buttons: good, neutral, or bad.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=26)** If the user presses bad, then a new completion will be triggered from the assistant.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=31)** Note that it says trying again and then gives you a new message.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=35)** The system should also log that negative feedback.
>
> **[0:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=39)** At some future point when you fire up the server, you might see excessive negative feedback and use that to trigger a server change.
>
> **[0:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=47)** The challenge to implement this comes in three parts.
>
> **[0:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=50)** The first part of the challenge is to implement these buttons on the front end.
>
> **[0:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=55)** I'll give you a hint, and here's some code that will go into your front end.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=58)** It will create an element in your HTML to contain your feedback buttons and render them on the page.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=65)** Notably, when the button is clicked, the send feedback function will be called, and this should be a JavaScript function in your front end that uses socket communication to communicate with your back end.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=77)** If you're not familiar with that, explore the index.
>
> **[1:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=80)** html page and you'll see, for example, this code that's used to send the user's message to the back end with socket.emit.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=90)** The second part of the challenge will involve you going to the back-end code.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=94)** Remember that when the user said the message was bad, you needed to get a new message from the completion API to replace it.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=102)** Incoming chat messages emitted from your front end are caught in the socket.
>
> **[1:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=108)** on chat message as we saw earlier.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=111)** In the first part of the challenge, you were asked to emit a new type of message for feedback, so you would have to write a socket.
>
> **[1:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=118)** on to capture that and take the appropriate behavior, such as getting a new message from the ChatGPT API.
>
> **[2:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=126)** The third and final part of the challenge is also on the back end.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=131)** You've seen how to capture and log the messages that came from the user and the back-end assistant, but now you should also log the user's feedback so that you have a log for when they press good, neutral, or bad.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=144)** I put the starter code in the GitHub repo for you, so take some time to try it all out and see how far you can go.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-implementing-rlhf-and-user-feedback?u=76281980&t=150)** If you want to know what the finished app will look like, I'll show you that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this, (1)
> **Env Vars:** api (2), html (1)
> **Cross-References:** as we saw (1), in the next (1)
> **Exercise Files:** starter code (1), github repo (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Warnings:** note that (1)

#### Demonstrating the ops project completed
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=0)** Okay.
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=0)** So here's the chatbot that we've been working on and we've seen logging already.
>
> **[0:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=4)** But there's a couple of extra features I'd like you to see.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=6)** So if I said, for example, if I'm interested in the topic of the migration patterns of wombats, we'll see the usual, the chatbot does its thing.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=15)** It's thinking it's sending that to the back end OpenAI.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=19)** And it should give me back a response.
>
> **[0:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=20)** But we'll see something new this time.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=23)** So now we can see these boxes: good, neutral, or bad at the bottom of the screen.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=28)** With the idea being that if it's good, I'll continue.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=31)** If it's neutral, I'll still continue, but I'll just log that the user, hey, wasn't very overwhelmed by the topic, but if it's bad, what will happen is I don't like that response, so it will trigger another one.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=43)** So it goes into the thinking cycle and it will give me back a different answer because I didn't really like this one.
>
> **[0:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=49)** So again, we're beginning to get the details here for feedback from a human so that we can have that reinforcement learning from human feedback.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=57)** And we'll say, you know what?
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=58)** Hey, that's a pretty good one.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=60)** So now I'll continue the conversation.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=62)** Give me a five-point layout with a lot of humor, something like that.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=69)** And again, it's thinking.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=71)** It's going to take a moment to give me the new chat message coming back.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=76)** And here it is.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=77)** So we've now got like lots and lots of detail.
>
> **[1:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=79)** But you know, I'd say I'm just being very difficult and I'll say that's bad.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=83)** It'll actually calculate a new one for me.
>
> **[1:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=86)** So again, gathering data for reinforcement learning for human feedback.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=90)** And I'm going to show the code for how this is achieved in just a second.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=93)** And it's what we saw on the slides a moment ago.
>
> **[1:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=95)** And there's also an admin interface on here that if I refresh this, we can actually see the timestamp of the messages that were given feedback.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=105)** So for example, here was one feedback that was considered bad that we did earlier on.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=109)** This was the one that we considered good.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=111)** And we can look through and we can see all of the JSON that we have, bad, good, bad feedback, those type of things, so that we're keeping that log and we've built this admin front end for you to see it.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=123)** And if I go back to the explorer for a second, then within our directory as well as our logs, we now have these feedback logs.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=132)** And here's the JSON files with those feedback logs that we could take a look at if we wanted to.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=137)** And we could see the message ID, the feedback, et cetera, and the timestamp.
>
> **[2:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=142)** So again, this is the kind of thing that you could use for reinforcement learning with human feedback.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-ops-project-completed?u=76281980&t=146)** Now that we've seen the application in action and the user giving the ability to do good, bad, or neutral feedback, as well as an admin interface to allow you to browse that feedback, let's take a look at the code that would take to implement all of this.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (3), interface (2), this, (1), let (1), this. (1)
> **Env Vars:** json (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### Solution: Completing an ops project
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=5)** So how did you get on with that challenge?
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=7)** To recap, you had three tasks.
>
> **[0:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=10)** First, you had to update the chat interface to give good, bad, or neutral buttons that the user would use to give feedback.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=16)** If the user pressed bad, it would then trigger a new chat completion.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=21)** And whatever the user pressed, good, bad, or neutral, it should log the feedback.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=26)** So let's start with the first part of the challenge, updating your front end for the code to render the feedback buttons.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=32)** I had given you a hint with this code and all it needed was a bit of styling.
>
> **[0:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=37)** See, the classes for good, neutral, and bad are specified here.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=41)** And specifying them is quite easy.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=43)** You could experiment with different colors if you like.
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=46)** Then importantly, when the user selects a button to give good, neutral, or bad feedback, then that's handled by this sendFeedback() method that you needed to implement.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=56)** Here's mine.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=58)** It starts by doing a socket.emit, passing a message that it calls feedback.
>
> **[1:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=63)** It will send the message ID and the actual feedback: good, bad, or neutral.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=68)** This code will then find the user interface details for the good, bad, and neutral buttons and remove them once the feedback has been given.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=76)** It fades them out over half a second.
>
> **[1:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=79)** And this will remove the last message variable handle so we can render the three buttons when the next message comes in.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=87)** One more piece of code that you'll need on the front end, and you'll see the other side of this later is that when the back end creates a new message after the bad feedback, it needs to inform the front end, and it will do that by emitting a regenerate message, which the front end will catch here, and it will remove the old message and then draw the new one.
>
> **[1:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=108)** Okay, that was the first task, to update the UI with the three buttons and handle posting feedback for them.
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=115)** The second part of the challenge was to implement the server back end to receive these messages and to act accordingly.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=122)** We'll start with the first part of the functionality, receiving the feedback and triggering a new chat message when the feedback is bad.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=131)** There's a lot of code for this, so I'll take a look at it little by little.
>
> **[2:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=135)** The server receives a message with socket.on.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=138)** Remember earlier when we did the emit for the new message, we called it a feedback message.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=143)** So we need to have a socket.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=145)** on receiving a feedback like this.
>
> **[2:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=149)** And the data payload it receives contained message ID and that feedback.
>
> **[2:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=154)** Check back to earlier and you'll see that this corresponds to what you emitted from the front end.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=160)** And then you find the message in the conversation history based off of its ID.
>
> **[2:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=166)** This code will log the feedback so we can count the number of good, neutral or bad.
>
> **[2:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=172)** And that's part three of the challenge, which we'll come back to in a moment.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=176)** So the next part of this code is what we had to do to handle getting a new message from the OpenAI back end.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=183)** It will only run if the feedback received was bad.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=187)** It will emit the thinking message which the front end will catch and render into the thinking animation.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=194)** It will then pop the last message off the conversation history, which effectively removes it, and then it will generate a new response.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=203)** And once it gets it, it will turn off the thinking animation.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=208)** Once it gets the new message, it will emit the response regeneration with the old and new message ID and the new response context prefixed with the words trying again.
>
> **[3:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=220)** Okay. So that was the second part of this challenge.
>
> **[3:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=223)** The third is to log the feedback from the user.
>
> **[3:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=226)** We've already seen the function that would do that, where we log the feedback when we get it.
>
> **[3:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=231)** But let's take a look at how that would work.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=233)** Here's the full function.
>
> **[3:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=235)** It receives the user ID, the message ID, the string containing the feedback, and the text of the message.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=243)** It then checks to see if the feedback logs directory exists and creates it if it doesn't.
>
> **[4:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=250)** Next, it will create the log file and this will be the user ID followed by feedback.json because we track feedback by user.
>
> **[4:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=259)** It then creates a structure with all of that data plus a timestamp.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=263)** It will initiate the feedback log as an empty list, and if there's already an existing file for this user, it will then read that into this list before pushing the new message.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=274)** And then it will push the new feedback entry.
>
> **[4:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=277)** If this is the first time, that will be the only entry.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=280)** Otherwise, it will be the most recent one.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=283)** And then finally, it will write out the file.
>
> **[4:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=286)** So that's it.
>
> **[4:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=287)** The code is available for you in the repo if you want to try it all out for yourself.
>
> **[4:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=291)** You can now capture feedback logs from your users into the feedback logs directory.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-completing-an-ops-project?u=76281980&t=297)** And next up I'm going to show you, step by step, using this code and how it all works.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (2), function (2), this, (1), this. (1)
> **CLI Commands:** find (2)
> **File Paths:** feedback.json (1)
> **Code Identifiers:** sendfeedback (1)
> **Prerequisites:** you'll need (1)

#### Demonstrating the code for the ops
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=0)** So how was this implemented?
>
> **[0:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=2)** All righty, so let's start by looking at our web page, the index.html page.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=8)** And if you remember, on that index.
>
> **[0:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=10)** html page we saw things such as the feedback button and that type of thing with the good, bad message, et cetera.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=17)** So this is our HTML page as we have it at the moment, but we need to update the styles on that one.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=23)** So I have a bunch of new styles.
>
> **[0:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=25)** There's too much to type, so I'm just going to paste them in.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=28)** So I'm going to take that.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=30)** And again, you can find all of this code in the repo for you to download.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=34)** But the first thing I'm doing is just changing the styles.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=36)** So we have the user message, we have the feedback buttons, even things like good, neutral, and bad with their colors on there, right?
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=43)** The background color is this.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=45)** And then the text color white, black, white, that type of thing.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=48)** So now that we've done that, let's take a look at how we would then change our code to be able to handle that type of feedback.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=57)** So it's going to take a few changes to the front-end code.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=60)** So let's just scroll up and see our front-end code.
>
> **[1:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=63)** And this is all the code that we saw earlier on.
>
> **[1:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=66)** But one of the things that we do need to keep track of is our last message ID.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=70)** So that's the last message.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=73)** If we're happy with it, that's great.
>
> **[1:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=75)** If we're not happy with it and we want to log it, we just have to have a handle on that last message.
>
> **[1:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=82)** So I'm just going to create a new variable that's just going to be null for the last message.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=87)** And now I'm going to change things like our function for adding the message that if you remember earlier we were doing the message element and we were writing the new message into that, but now we don't want to write the message if we don't like what the user has said, right?
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=104)** So if it's bad or if it's neutral, we don't want to have that.
>
> **[1:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=108)** So I'm going to change this whole addMessage function, and I'll explain that little by little to be able to help you to understand what's going on.
>
> **[1:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=117)** Okay. So let me first of all, get rid of all of that and replace it with this.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=122)** And then also there I'm going to override this so that we need to keep track of the message ID, I'm going to default that to null.
>
> **[2:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=129)** And is this the initial message?
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=131)** And I'm going to say it is false. Okay.
>
> **[2:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=135)** So now the first thing that we want to do is send feedback.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=138)** We're going to default our feedback to be neutral.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=141)** So if the user does nothing and they just keep typing in something, we're just going to consider that to be a neutral message, not a good or a bad one.
>
> **[2:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=149)** And that's what this piece of code does.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=151)** Now we're going to do what we had done earlier on, but I've just moved all of the styling into a class.
>
> **[2:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=157)** And we're going to again create a handle to our message container.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=160)** And we're going to specify that the message ID that's currently in the message container is this one.
>
> **[2:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=167)** So the next thing that we want to do, of course, is write our message into the message container.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=176)** Now that message may be coming from the user or it may be coming from the AI.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=180)** So I'm just going to pick the class name based on that, and we had defined those class names above.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=185)** You can see the AI message style looks like this, the user message style looks like this.
>
> **[3:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=189)** So I'm just streamlining the code instead of having all of the styles in here.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=194)** We're just saying AI message looked like this, user message look like this.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=198)** And now we're going to do what we were doing before to append that message to the container.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=204)** If it's not the initial message and if it's not a user message, what we want to do is get the feedback buttons, append the feedback buttons to that one, and keep track of the current message ID.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=215)** And then those feedback buttons give us the ability to say good, bad, or neutral.
>
> **[3:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=219)** And now this new message container with the message plus the feedback buttons, if it is a user message, will get added to our chat messages and we'll scroll it as before.
>
> **[3:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=229)** Okay.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=230)** So the next thing that we want to do, of course, is create those feedback buttons that we saw the user being able to press with good, bad, or neutral on them.
>
> **[3:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=239)** So let's take a look at the code for creating them.
>
> **[4:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=241)** And there's quite a bit of code in here.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=243)** So I'm just going to paste it in as before.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=245)** So we're keeping track of the message ID because we want to give feedback for that particular message.
>
> **[4:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=252)** So we're going to create the feedback button function.
>
> **[4:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=254)** And it's going to take that message ID as a parameter.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=257)** The container for the buttons.
>
> **[4:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=259)** We're just going to create that as a div.
>
> **[4:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=261)** And the class name for that will be feedback buttons so that we get the nice colors.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=265)** And then we're going to have three options good, neutral, and bad.
>
> **[4:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=268)** And we're going to give them the classes good, neutral, and bad so that they will be styled in the appropriate way.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=274)** So now we have a loop that we're going to go through on feedback options.
>
> **[4:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=278)** So for each option, we're going to create an element which is a button.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=283)** We're going to specify the button's label.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=285)** So it's going to be good, neutral, or bad.
>
> **[4:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=288)** We're going to specify its class name which is going to be good, neutral, or bad which will give us the colors.
>
> **[4:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=293)** And then we're going to specify what happens when the user clicks that button.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=297)** And that's going to be we're going to send feedback with the message ID.
>
> **[5:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=301)** And then whatever the type of feedback was.
>
> **[5:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=304)** So good, neutral, or bad is the option.label.toLowerCase.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=309)** And then once we've done all of that, we've specified what our buttons are going to look like.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=314)** The feedback container, we're going to append child's button container.
>
> **[5:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=318)** So we'll see the buttons all added on there.
>
> **[5:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=321)** And then we'll return that feedback container.
>
> **[5:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=323)** So this is creating that user interface with the three buttons on it that we saw.
>
> **[5:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=328)** So we've now created that.
>
> **[5:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=331)** But we also want to be able to send that feedback.
>
> **[5:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=334)** And how do we send that feedback when we press the button?
>
> **[5:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=337)** Well, we're just going to use the same socket.
>
> **[5:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=339)** emit that we've been using for chat messages.
>
> **[5:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=343)** So that will be in here.
>
> **[5:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=345)** Let me paste that in.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=347)** So we've been keeping track of our message ID and we've been keeping track now of the feedback because it's going to be one of these three things from the buttons: good, neutral, or bad.
>
> **[5:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=356)** So we have a feedback message that we're going to send up to our back end.
>
> **[5:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=359)** And I'll show the back end in a moment that captures that.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=362)** And we're going to give that the message ID and we're going to give that the feedback.
>
> **[6:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=366)** So the server will understand which message and what feedback for it.
>
> **[6:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=370)** So how are we going to handle this?
>
> **[6:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=372)** Well, first of all, we are going to grab our feedback container and tell it the message ID and the feedback buttons.
>
> **[6:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=379)** And then once we've done that and we know what that is, we're just going to fade it out.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=383)** And as you saw when I was demoing, once I pressed the button, we saw that it faded out really nicely.
>
> **[6:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=388)** And then we're going to take about 500 milliseconds to do that.
>
> **[6:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=391)** So it just removes it over time.
>
> **[6:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=393)** And now if our current message ID is the last message ID, we've done our job, let's just reset the last message ID to null so that it will be reset when we get a new message back from the server for us to provide feedback to.
>
> **[6:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=409)** Okay.
>
> **[6:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=409)** So that was sending the message back to the back-end server with our feedback of whether it's good, bad, or neutral.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=417)** Okay.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=417)** So now the next thing is, if you recall, when we sent bad feedback, the server was going to generate a new message for us, and we want to make sure that we capture the new message.
>
> **[7:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=429)** So we have a new way of doing that, which we call regenerate response.
>
> **[7:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=433)** So on the server back end, you'll see where it regenerates a response.
>
> **[7:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=438)** So I'm going to add that code into my front end.
>
> **[7:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=441)** So when it receives a regenerated response from the server, what do we do?
>
> **[7:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=446)** We have to remove the old message and replace it with a new message.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=450)** So here when we receive the regenerated response, it will have the data with the new message.
>
> **[7:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=455)** And we're just going to find the old message container.
>
> **[7:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=459)** We're going to remove that.
>
> **[7:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=460)** And then we're going to call addMessage to add the new message.
>
> **[7:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=464)** So you saw that functionality earlier when I said something was bad, it would regenerate a new message, it would remove the old message, and replace it with the new message.
>
> **[7:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=472)** So we're good to go with that.
>
> **[7:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=475)** So that's everything.
>
> **[7:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=476)** We have our new clients and our client is going to be rendering the good, bad, or neutral buttons.
>
> **[8:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=481)** And when we press one of those buttons, the feedback is going to be sent to our back end Node.js server.
>
> **[8:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=486)** If it was bad, that would trigger a new chat completion.
>
> **[8:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=491)** That new chat completion when it's sent back to our client would be this regenerate response that would remove the previous response and replace it with a new one.
>
> **[8:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=502)** And we're good to go.
>
> **[8:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=504)** So that's our new front end that we've created to give us that functionality that we just saw.
>
> **[8:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=510)** So now let me take a look at the back end at the server.js itself, and we can see the changes that we made to be able to handle all of this functionality.
>
> **[8:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=520)** So now let's take a look at our Node.js back end and see some of the changes that we made to be able to handle that.
>
> **[8:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=526)** So the changes will be to accept the good, bad, or neutral feedback, as well as giving us that little administrative interface so we could actually explore the logs.
>
> **[8:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=535)** So in order to do this, one of the first things I need to do is that those logs were using JSON.
>
> **[9:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=540)** So I'm just going to tell my server to use JSON by saying app.use(express.json()) here, just to make sure that we have JSON running.
>
> **[9:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=548)** We also saw that we had an admin back end which required an admin route.
>
> **[9:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=553)** And doing routes in Express, you do app.get.
>
> **[9:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=557)** As we saw above, we just have the app.
>
> **[9:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=559)** get for slash but we can say the app.get for admin.
>
> **[9:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=563)** What that's going to do is like we say, okay, for request and response, just like above, we want to then specify what directory and where we're going to get the files from when the user calls admin, and it's going to use the same res.sendFile(path.join), our current directory name, the public folder, and then we'll create a new file called feedback_admin.html.
>
> **[9:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=594)** And that file is going to give us that browser through the logs that we saw earlier on.
>
> **[9:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=599)** And it's going to be a little bit of a stretch goal for you to implement that.
>
> **[10:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=604)** Okay. So I have a syntax error in here.
>
> **[10:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=606)** Let's see what that error is.
>
> **[10:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=607)** That's one of the nice things about Sublime is that it gives that to us.
>
> **[10:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=611)** So let's have a look.
>
> **[10:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=612)** We have a bracket here.
>
> **[10:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=615)** We should not have that bracket there.
>
> **[10:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=619)** Okay. So now that's going to give us that feedback_admin file.
>
> **[10:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=622)** And now we're going to get on with the server as before.
>
> **[10:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=625)** So we have our system prompts.
>
> **[10:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=627)** We're going to be generating our user ID.
>
> **[10:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=630)** We're going to be logging our conversations.
>
> **[10:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=633)** Before we get to our io.on connection, we've already had logs in here for logging the conversation, but we also want to log the feedback from the user.
>
> **[10:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=642)** So when the user has set good, bad, or neutral, we want to be able to log that.
>
> **[10:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=646)** So let's create a new function for that.
>
> **[10:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=649)** And I'm going to call that async function logFeedback().
>
> **[10:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=655)** We're going to have a user ID attached to that.
>
> **[10:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=658)** We're going to have a message ID attached to that.
>
> **[11:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=660)** We're going to have the feedback itself: good, bad, or neutral, and we're going to have the message for which we receive that feedback.
>
> **[11:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=667)** So we now have that function.
>
> **[11:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=669)** I'm just going to paste in a few lines of code that set up the variables that we're going to be using in here.
>
> **[11:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=674)** We're going to create a feedback logs directory.
>
> **[11:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=676)** If we don't have it, we'll create it.
>
> **[11:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=679)** We're going to name the log files to be the feedback from a particular userId.json.
>
> **[11:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=685)** And then the feedback entry is just a const which is the message, the message ID, the feedback, the message itself, and a timestamp which will be just the new timestamp that we generate.
>
> **[11:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=695)** So let's see how we would actually write them out.
>
> **[11:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=697)** So I'm going to say let feedbacklog equals an empty list.
>
> **[11:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=703)** And then try, I put it in a try/catch just in case there's any errors, const existingLog = awaits the file system.
>
> **[11:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=714)** Read a file, log file.
>
> **[11:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=717)** They're usually encoded.
>
> **[11:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=718)** I'm just going to use the standard UTF-8 encoding.
>
> **[12:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=721)** And now that it's read the file, we can say our feedbackLog = JSON.
>
> **[12:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=727)** parse, this existing log.
>
> **[12:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=730)** And if we had any errors in there because it's in a try/catch, I'll just say catch error.
>
> **[12:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=740)** And our error that we catch, I have too many closing braces now, our error that we catch I'll just say file doesn't exist yet, which is fine.
>
> **[12:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=751)** Now that we have our feedback log, let's just push it.
>
> **[12:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=755)** So feedbackLog.
>
> **[12:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=757)** push, this new entry, feedbackEntry.
>
> **[12:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=762)** And then we're going to await writing that because we're doing all this asynchronously.
>
> **[12:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=766)** So I'm going to await file system, write file, the logFile, JSON.stringify(feedbacklog, null, 2)
>
> **[12:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=779)** as before.
>
> **[13:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=780)** And then just put a semicolon on there. Okay.
>
> **[13:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=784)** So we've now created our code that will allow us to log our feedback.
>
> **[13:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=790)** Let's see what's next.
>
> **[13:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=792)** So one of the things that I've done is to log conversation that we created in the earlier video.
>
> **[13:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=797)** I just wanted to streamline that, to make it a little bit more similar to what we've been using here.
>
> **[13:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=802)** So I'm just going to paste that code in.
>
> **[13:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=803)** It's going to be doing the same thing, just creating a log directory if it doesn't exist, creating the log file, and then writing it out for when we need it.
>
> **[13:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=811)** So that is here.
>
> **[13:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=813)** The log feedback that we've just created is here.
>
> **[13:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=816)** So now that we've created this log feedback function, what we need to be able to do, of course, is capture the feedback when it gets sent to us by the user.
>
> **[13:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=824)** As we saw earlier on when we were looking in the user interface directory, that we were doing that in a socket.on.
>
> **[13:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=831)** So again, we're passing it over socket, we're passing a message that we call feedback.
>
> **[13:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=836)** And that feedback message will contain the data.
>
> **[13:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=839)** So I'm going to add a socket.
>
> **[14:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=842)** on feedback into our file.
>
> **[14:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=845)** And it's pretty long.
>
> **[14:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=847)** So let me just, I'm going to paste it in and then I'll go through it step by step.
>
> **[14:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=851)** I'm going to put it down towards the bottom of our file here in front of our socket.on disconnect.
>
> **[14:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=857)** So socket.on feedback is going to do a lot of work.
>
> **[14:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=861)** So what do we want to do?
>
> **[14:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=862)** Well, first of all, socket.on feedback is going to receive data from the front end.
>
> **[14:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=867)** And that data is going to be received here in this data variable.
>
> **[14:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=870)** So what we first want to do is realize that that data contains both the message ID and the feedback.
>
> **[14:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=877)** So we're going to extract both of them out.
>
> **[14:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=879)** It's a struct containing both of these.
>
> **[14:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=881)** So now our message is going to be what we have to do once we've received the feedback is find that message within our conversation history.
>
> **[14:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=890)** And once done, what this code is going to do is conversationHistory.
>
> **[14:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=893)** find, the entry that has the same message ID as the one that we've just passed up.
>
> **[14:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=898)** And if we do that, then we're going to log the feedback on that message, whether it was good, neutral, or bad.
>
> **[15:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=904)** And you can see here console.log.
>
> **[15:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=906)** The feedback received for that message is this.
>
> **[15:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=908)** And this is the actual feedback.
>
> **[15:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=910)** Now we want to take an action if the feedback is bad and that's going to be this piece of code here.
>
> **[15:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=918)** A different action will happen if the feedback is good, but all that we really ultimately want to do is say, look, if the feedback is bad, let's do this work here.
>
> **[15:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=926)** What's that work going to be?
>
> **[15:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=927)** But regenerating a new message, and to regenerate a new message, well, first of all, we emit the thinking, then our conversation history, we don't want the old message, so we can pop it off.
>
> **[15:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=939)** And now we're going to await a new response, and we're just going to use our generate response that we had from earlier on.
>
> **[15:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=946)** So now that this new response is going to come back, we'll get that.
>
> **[15:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=950)** Once we've received that, we're going to say we're no longer thinking and then we're going to send back to our client the regenerated response.
>
> **[15:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=958)** So if you remember when we were looking at the client, we wanted to take an action when the response was regenerated, and that was to remove the old message from the user interface and replace it with the new one.
>
> **[16:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=969)** So we're sending back, the old message ID was this, and our new response has a new message ID.
>
> **[16:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=975)** The content will say trying again, and then it will show the new content for us.
>
> **[16:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=980)** And if there's an error, we just want to send back that we had an error.
>
> **[16:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=984)** And here's the details of the error.
>
> **[16:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=987)** So that's all of the code to be able to handle that user feedback.
>
> **[16:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=991)** Now if you look at the code that I've put on the GitHub for you, there's some more code in here that will actually handle the administrative interface.
>
> **[16:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=999)** I've put that in there as a stretch goal for you to see if you can implement that admin interface that reads the files from the feedback.
>
> **[16:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=1007)** So we have the log conversation files and we have the feedback files that are both JSON.
>
> **[16:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=1011)** They're both in directories under your server, and on your admin interface, if you want to implement that to do what I demoed earlier on.
>
> **[16:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=1019)** Give that a try as a stretch goal.
>
> **[17:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=1020)** If not, all of the code is in the GitHub for you to be able to try it out for yourself.
>
> **[17:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstrating-the-code-for-the-ops?u=76281980&t=1025)** And now you've just taken the first steps on the path to having reinforcement learning with human feedback. Thank you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (7), interface (7), this. (5), this, (4)
> **Code Identifiers:** addmessage (2), feedback_admin (2), feedbacklog (2), tolowercase (1), sendfile (1)
> **CLI Commands:** find (4), make (3), node (2)
> **Env Vars:** json (6), html (1), utf (1)
> **File Paths:** node.js (2), index.html (1), server.js (1), express.json (1), feedback_admin.html (1)
> **Cross-References:** as we saw (2), as you saw (1)
> **Tools:** github (2), sublime (1)
> **Definitions:** is a  (2)


### 3. BYOD with RAG

> [↑ Back to Table of Contents](#table-of-contents)

#### Retrieval augmented generation (RAG)
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=0)** Welcome back to our LLMOps course.
>
> **[0:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=2)** In chapters one and two, we built a chatbot using Node.js and OpenAI APIs, whose job it was to help you be a better public speaker.
>
> **[0:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=11)** We explored logging and the basics of how to capture data for reinforcement learning through human feedback, or RLHF.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=19)** And while you're not going to retrain the underlying models the way the folks at OpenAI or Google may, by capturing that data, you are in a position to make informed choices about how to better serve your customers.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=32)** In a simple chatbot like that one, it might be to change the underlying model or the model version that you're using and testing further feedback, or it could be that you would want to rewrite your system prompt and test different ones against the feedback that your users give.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=48)** In this video, we're going to switch gears and to help you build a better application that's an expert on a specific topic.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=56)** To do that, we'll dive into an exciting technique called retrieval augmented generation, or RAG for short.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=64)** We'll also look at how you can implement RAG using Node.js, LangChain, and Chroma.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=69)** We'll cover the fundamentals of RAG, its benefits, and the high-level steps to build a RAG system.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=76)** We're going to keep things conceptual for now, but don't worry, in future videos, we're going to get our hands dirty with code and practical implementation details.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=84)** But before we start, let's just explain what RAG actually is.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=88)** It's a powerful technique that combines the strengths of large language models with external knowledge retrieval.
>
> **[1:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=95)** So let's break down how it works.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=97)** First, we'll create a knowledge base of information that we want our system to access.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=102)** And this could be anything from documentation and articles to entire books or databases.
>
> **[1:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=108)** When the user asks a question, the system processes it to vectorize the contents of the user's query.
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=114)** The system will then search the knowledge base for relevant information that's related to that query, and it finds this using something called vector similarity.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=125)** If the vectors are close to the original, then the underlying information is going to be syntactically similar.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=132)** The retrieved information is then used to augment the prompt that's sent to the language model, and this provides additional context for the model to work with.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=141)** The language model generates a response based on both its training data and the retrieved context, and then the system returns that generated response to the user.
>
> **[2:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=152)** For the purposes of this course, in this video, we're going to take a look at the text of a novel that I wrote over ten years ago.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=160)** Shortly after publication, the publisher folded, and as a result, the novel wasn't widely distributed, and that means it wasn't used in the training set for GPT, Gemini, Claude, or any other large language models.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=173)** So if I were to ask these models about characters or circumstances in the book, they'd have no idea.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=180)** And in fact, they might even hallucinate a lot.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=183)** And this makes it ideal for RAG.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=185)** We'll create a local database of the book, and then we'll use that to augment queries to the LLM.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=192)** And the power of the LLM can then provide reasoning ability across that text to help us understand and parse it.
>
> **[3:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=200)** I hope this helps you understand the power of RAG a little better.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=203)** And some of the benefits of RAG are improved accuracy.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=208)** By providing relevant context, RAG helps the model generate more accurate and informed responses.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=214)** Up-to-date information.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=216)** The knowledge base can be updated regularly, allowing the system to access current information beyond the model's training data.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=225)** Domain-specific knowledge.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=227)** RAG can incorporate specialized knowledge that might not be well represented in the model's general training.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=233)** Reduced hallucinations.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=236)** By grounding responses in retrieved information, RAG can help minimize the model's tendency to generate false or misleading information.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=245)** Transparency.
>
> **[4:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=247)** RAG systems can often provide sources for the information used in those responses, increasing trust and traceability.
>
> **[4:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=255)** The next question, of course, is how does one get started in building something like that?
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=260)** Well, we're going to go through that step by step from a high level, and in later videos, we'll implement this.
>
> **[4:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=266)** The first step is data ingestion.
>
> **[4:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=269)** And that's taking your data and getting it ready to store.
>
> **[4:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=272)** In this course, we're going to use the example of taking a full book in PDF format.
>
> **[4:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=277)** We'll need to extract the text from the PDF and break it down into smaller, manageable chunks.
>
> **[4:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=282)** Each chunk will be processed to create a meaningful representation that can then be searched efficiently.
>
> **[4:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=289)** To make our text searchable, we'll convert each chunk into a numerical representation called an embedding.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=297)** Embeddings are high-dimensional vectors that capture the semantic meaning of the text.
>
> **[5:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=303)** We'll use pre-trained models to generate these embeddings, which will allow us to perform the semantic similarity searches later on.
>
> **[5:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=311)** We'll need to store these embeddings in a way that's efficient, and it's easy to search for similar ones.
>
> **[5:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=318)** For this, I'm going to use Chroma as the vector store to efficiently index and search our embeddings.
>
> **[5:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=325)** Chroma is designed for fast similarity search in high-dimensional spaces, and it makes it ideal for our RAG system.
>
> **[5:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=333)** We'll show you how to set up Chroma and add our processed book chunks to it.
>
> **[5:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=338)** Chroma will allow us to quickly find the most relevant text chunks for any given query.
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=344)** So next comes our query processing.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=347)** When the user asks a question, we'll need to process it in the same way as our knowledge base text.
>
> **[5:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=352)** So this involves generating an embedding for the user's query, which we can then use to search our vector store for ones that are similar.
>
> **[6:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=361)** So for example, if I were to ask about a particular character and get details on them, their name would be in the query and the vector similarity search would extract stuff from the book that also contains their name, and then we'll retrieve the embeddings that are similar to our query.
>
> **[6:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=377)** We'll perform a similarity search in Chroma to find the most relevant chunks from our knowledge base.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=383)** We'll explore different retrieval methods such as K-Nearest Neighbors or KNN, and we'll discuss how to fine-tune them for better results.
>
> **[6:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=391)** We'll also look at techniques like reranking to improve the quality of retrieved information.
>
> **[6:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=397)** But now it's time to prompt the LLM.
>
> **[6:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=399)** Once we have our retrieved context, we'll need to construct an augmented prompt.
>
> **[6:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=404)** This involves combining the user's original question with the most relevant retrieved information, and we'll discuss strategies for effectively integrating this context without overwhelming the language model.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=417)** We'll then use LangChain to seamlessly integrate with language models like GPT-3.5 or GPT-4.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=424)** LangChain provides a very convenient abstraction layer that simplifies working with different language models.
>
> **[7:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=431)** We'll show how to send the augmented prompt to the model and then process the response, and we'll get that response directly from the model.
>
> **[7:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=438)** In the upcoming videos, we'll dive deeper into all of these steps and provide hands-on demonstrations and code examples.
>
> **[7:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=446)** You'll learn how to build a robust RAG system that can enhance your chatbot's capabilities and provide more accurate, context-aware responses.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=456)** We'll start by ingesting and processing our example book into Chroma, showing you how to handle PDF extraction, text chunking, and embedding generation.
>
> **[7:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=465)** From there, we're going to build out each component of the RAG system, integrating it with our existing chatbot application.
>
> **[7:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=473)** By the end of this chapter, you'll have a powerful knowledge-augmented chatbot that combines the flexibility of large language models with the precision of information retrieval.
>
> **[8:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=483)** So get ready to take your skills to the next level with retrieval augmented generation.
>
> **[8:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=488)** Stay tuned for our next video where we're going to begin our hands-on journey into the world of RAG.
>
> **[8:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/retrieval-augmented-generation?u=76281980&t=492)** I'll see you there.

> [!info]- Semantic Content
>
> **Env Vars:** rag (16), gpt (3), llm (3), pdf (3), rlhf (1)
> **CLI Commands:** node (2), make (2), find (2)
> **Code Keywords:** let (2), public (1), switch (1), this. (1), this, (1)
> **Analogies:** for example (1), similar to (1), such as (1)
> **File Paths:** node.js (2)
> **Prerequisites:** before we start (1), set up (1)
> **Versions:** 3.5 (1)
> **Cross-References:** next video (1)

#### Installing and setting up a VectorDB
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=0)** In the previous video, you saw how retrieval augmented generation, or RAG, works.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=6)** That relied heavily on a vector database to help you find things that were similar to your query.
>
> **[0:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=12)** In this video, I'm going to show you how to set up and use a vector DB called Chroma DB.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=17)** Before we start, let's briefly discuss what Chroma DB is.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=21)** Chroma DB is an open-source embedding database that allows you to store and query vector embeddings efficiently.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=30)** It's particularly useful for semantic search, recommendation systems, and other AI applications that rely on finding similarities between data points in high-dimensional spaces.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=43)** We'll begin by installing Chroma DB, and I assume that you have a Python environment with pip.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=48)** If not, please visit [python.org](https://python.org) for details.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=51)** Once you've installed Chroma DB, you can run it with this command, and the path to your data directory is where you're going to put your data, and you can put it in the current directory like this.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=61)** After a few moments, you should see this in your terminal.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=65)** Or you can open your browser and call this URL and you'll get a heartbeat back as shown. And that's great.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=71)** It now shows that your Chroma DB server is up and running.
>
> **[1:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=75)** So next, let's go back to Node, and we'll create a new Node project to try it all out.
>
> **[1:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=80)** We'll start by creating a new directory for our Node project and changing it to that will initialize Node in that directory.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=88)** And then we'll install the dependencies for our project.
>
> **[1:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=92)** Axios gives you the framework for communicating over HTTP with the server, and UUID gives you the ability to create and use GUIDs, which Chroma DB uses as an identifier.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=105)** All right, now it's time to move over into writing JavaScript code in Node.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=109)** We're going to store some string data in the database.
>
> **[1:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=112)** And then we'll search for similar text with associated vectors.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=116)** I'll take you through, step by step, what should be in this app.js.
>
> **[2:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=120)** Or, of course, you can clone the finished one from GitHub if you like.
>
> **[2:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=124)** We'll start by importing our dependencies and point the API URL to the Chroma DB server that you've just installed.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=132)** Then we'll need some functions to interact with our Chroma DB.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=136)** These will be to create a collection, add documents to the collection, query the collection for something similar to our desired value, or list all of the collections in the database.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=147)** I'll go through the createCollection function.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=150)** It will receive a metadata parameter and then post that using axios to the endpoints.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=156)** And this will return the response data if it gets one, or an error if it doesn't.
>
> **[2:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=161)** You can get the other three functions from the code in the GitHub repository.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=165)** I'll next take a look at the main function and how it initializes the collection, and does a simple query.
>
> **[2:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=172)** And here's the full code for the main function.
>
> **[2:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=174)** It starts by simply initializing everything.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=177)** Where it gets interesting is here.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=179)** We'll create three documents and we'll hardcode the embeddings for them.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=183)** Now you wouldn't do that in a real database.
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=186)** This is just for example.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=187)** Later, we'll see how we can use AI models and their associated embeddings to do this encoding of sentences for us.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=194)** We now have this document which is just a simple sentence and that's associated with the embedding.
>
> **[3:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=200)** Then if we want to query for something similar, we'll start with an embedding.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=205)** And note that this one is very similar to documents one and three.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=208)** We'll query the collection asking for two matches.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=212)** And then we'll output the results which will look a little bit like this.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=216)** As you can see, id1 and id3 were output because their embedding vector was mathematically close to our input embedding.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=225)** And this is the base core functionality of how vector databases will work for you.
>
> **[3:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=231)** Indeed the distance as shown here, and you can see that it's around 0.04 distance in two dimensions, means that it's very, very close.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=240)** Do note that in this case we hardcoded the embeddings, which isn't really feasible for a real-world application where you're going to use an embedding model to encode your data, and then you'll store that data with its embeddings.
>
> **[4:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=252)** Then you're going to use the same embedding model to generate embeddings for your query.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=257)** And the similarity search will find documents that are syntactically close to it.
>
> **[4:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=262)** So to recap, we created a new collection in Chroma DB, we added three documents with hardcoded embeddings to that, we performed a similarity search against another embedding, and Chroma DB returned the two most similar documents to that embedding.
>
> **[4:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/installing-and-setting-up-a-vectordb?u=76281980&t=278)** In the next video, I'm going to show a screencast of all of this in action, and then we're going to take it to the next level; we'll ingest the PDF, we'll turn that into embeddings, and we'll store them in Chroma DB.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), find (2), python (2), pip (1)
> **Code Keywords:** function (3), let (2), this. (2)
> **Env Vars:** url (2), rag (1), http (1), uuid (1), api (1)
> **Analogies:** similar to (3), for example (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Tools:** github (2), terminal (1)
> **Prerequisites:** set up (1), before we start (1), install (1)
> **Definitions:** is an  (1), means that (1)

#### Create a VectorDB
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=0)** Okay.
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=0)** So before we begin, today, we're going to be working in the Chapter 3 directory.
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=5)** And then within the Chapter 3 directory, you'll be using the first Chroma.
>
> **[0:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=10)** And within there, you'll see an end and a start.
>
> **[0:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=12)** I'm going to be working in the start, but the completed work is going to be in the end directory should you need to be able to refer to that.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=18)** But let me go into start to begin with.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=21)** So the first thing that we want to do is to install the Chroma DB itself.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=24)** And we install the Chroma DB in our Python environment.
>
> **[0:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=27)** And something that I always recommend when working in a Python environment like this is to create a virtual environment, because you're going to be installing some dependencies, and sometimes you can have dependency conflicts.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=38)** But if you work within a virtual environment, you can do whatever you like with the dependencies in that environment and, you know, work within that for this particular project, and you're not going to worry about impacting anything else.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=48)** And I'm going to use the one called venv, V-E-N-V; just stands for virtual environment.
>
> **[0:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=53)** And I'm going to start creating that with python3 -m venv.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=58)** And then I'm going to give it a name.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=59)** I'm just going to call it llmenv like this.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=62)** So Python will do its thing.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=64)** I'm working on a Mac at the moment, so Python 3 is the default Python.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=68)** Like if I type Python 3, we'll see I have my Python environment.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=71)** So I'll just exit out of that.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=73)** So now the virtual environment itself needs to be activated.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=77)** And take a look at the virtual environment documentation for your environment.
>
> **[1:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=82)** I'm using a Mac at the moment.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=83)** So I activate it on Mac or on Linux or Unix-like environments using this command.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=88)** Source, the name of the environment, I called it llmenv/bin/activate.
>
> **[1:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=96)** And you'll know that it's working when you see my command prompt has now changed that I have the name of the environment followed by whatever my prompt was.
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=104)** In this case, it's the dollar sign.
>
> **[1:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=106)** So I'm now working in that environment.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=109)** And I can start installing things and using whatever I want without damaging or impacting the rest of the environment on this computer.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=116)** So now for Chroma DB, all I have to do is type pip install chromadb.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=122)** And that will take a moment to install.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=125)** So we can see it's downloading.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=127)** It's installing all the dependencies and hopefully, everything is going to work nicely.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=133)** Okay. And you might see a little warning like this one that you're seeing.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=136)** It's just I'm using a slightly older version of pip, and I could upgrade pip if I wanted to, to get rid of that warning.
>
> **[2:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=142)** But it's not affecting this database install.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=145)** Okay.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=146)** So now if I go and I take a look in my directory, the only important thing to see here is the llmenv, and that is the virtual environment and the stuff for the virtual environment.
>
> **[2:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=154)** And all of these dependencies have actually been installed in there rather than on my system.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=159)** So now if I want to run Chroma, all I have to do is type chroma run and then give it a path, and the path to the directory where I want to put the data.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=168)** So I'm just going to say data.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=170)** So now when I run that, that's going to take a moment and we'll see Chroma launches with this logo.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=177)** And at the bottom, we can see it's running on localhost 8000.
>
> **[3:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=182)** So now Chroma is installed.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=183)** And if I want to take a look at it, I can launch my browser.
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=186)** And in my browser, I can type localhost 8000.
>
> **[3:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=189)** And we can see that something is happening.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=192)** Detail is not found.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=194)** The server is actually running, the Chroma server is running, but there's no data in the Chroma server yet.
>
> **[3:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=200)** So in the next step, we're going to be adding data.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=204)** And I'm going to create a Node application to add some dummy data to our Chroma database so that we can execute the Chroma database and see what it looks like.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=212)** So let's move on to that step.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=214)** So here we can see I have this terminal where Chroma was running.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=218)** One important tip is whatever you do, if you want to do further work in a terminal, don't stop the server running within this one to get your command line back, because that will stop the server running and can cause bugs.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=230)** So what I'm going to do is I'm actually going to minimize this and just use a different terminal for the rest of the work.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=236)** So I have a fresh terminal here.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=238)** And within this fresh terminal, if I'm just going to change back into the directory that we've been working with.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=245)** So remember, we're working in Chapter 3, and we're working in first Chroma.
>
> **[4:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=250)** And then within there, we're working in start.
>
> **[4:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=253)** Now the first thing that you're going to need to do and you'll notice it wasn't cloned, but you're going to need to create a file called index.js.
>
> **[4:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=259)** And you see that file has been created here.
>
> **[4:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=261)** So just with your favorite text editor, create a file called index.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=265)** js, and we'll be working from that.
>
> **[4:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=267)** So I'm now going to edit that index.
>
> **[4:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=269)** js file using Sublime.
>
> **[4:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=271)** And it's an empty file that I had just created.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=274)** And we're going to be working within this empty file.
>
> **[4:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=276)** So if you remember from the video presentation, there were a few things that we needed to do.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=280)** So we were going to use a library called Axios.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=283)** And axios is what we would use to be able to access our back-end endpoints.
>
> **[4:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=287)** So I'm just going to paste these in to begin with where we're saying we're going to require axios.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=292)** And then our API is localhost 8000.
>
> **[4:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=295)** And if you recall, Chroma DB is running on localhost 8000.
>
> **[5:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=300)** So the first things that we're going to want to do is we're just going to create some fake documents inside our Chroma DB and see how they look.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=309)** And we're going to do that first of all by creating a collection.
>
> **[5:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=312)** And then within that collection, we'll add the documents.
>
> **[5:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=315)** So I have an async function on my Node.js here called createCollection.
>
> **[5:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=320)** So what this createCollection is going to do is first of all, it's going to give the collection a name.
>
> **[5:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=325)** I'm just using a uuid here.
>
> **[5:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=327)** So it's going to be like a bunch of hex.
>
> **[5:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=329)** And I'm going to post to the URL of the Chroma DB /api/v1/collections.
>
> **[5:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=338)** Some stuff is going to be posted to that; my name and my metadata.
>
> **[5:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=342)** And I'm going to get a response back from that.
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=344)** So here is how I'm going to be writing to this.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=347)** And writing and creating the collection.
>
> **[5:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=350)** I'm just going to log that it works and get the data back.
>
> **[5:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=353)** And if there's an error, I'm just going to say there's an error coming back here.
>
> **[5:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=357)** So createCollection is really as simple as that.
>
> **[6:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=360)** Here's my name, I have some metadata, and I'm just going to, the metadata is passed into this function.
>
> **[6:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=365)** And I'm just going to create a collection with those details.
>
> **[6:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=368)** So the next thing is, once I have a collection, we want to add documents to the collection.
>
> **[6:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=373)** And if you recall from earlier, we were saying how Chroma DB works is it has a collection.
>
> **[6:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=378)** And then each of your individual chunks of texts are documents within that collection.
>
> **[6:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=384)** And then those documents have an embedding associated with them.
>
> **[6:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=387)** So we want to look at next is how do we add documents to this collection.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=392)** Well, I'll show the code.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=394)** So this is the same code as we had earlier on in the slides.
>
> **[6:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=398)** But the idea is if I have a collection ID and I have a set of documents, then if I want to add the documents to my collection, I'm going to turn them into a payload.
>
> **[6:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=407)** And that payload is going to have the IDs of the documents, the embeddings that we've generated for the documents, any metadata associated with those documents, and the documents themselves.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=417)** And so that's going to be turned into a request payload that we then post to the back end for the server itself.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=424)** And the server in this case is the Chroma DB server that you saw me running a moment ago.
>
> **[7:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=429)** And again, with axios, I'm just going to post that chunk of data to the api/v1/collections.
>
> **[7:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=436)** This collection ID add with that payload and they'll get written to the database.
>
> **[7:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=441)** And if that works correctly, we'll see the documents were added successfully, otherwise, we get an error.
>
> **[7:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=447)** Within our Chroma DB database, there's going to be one or more collections.
>
> **[7:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=451)** So what we can do is we can list those collections to see the collection that we're interested in.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=456)** And then for a specific collection, we can query that collection to get results.
>
> **[7:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=461)** So the first thing I'm going to implement now is querying the collection.
>
> **[7:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=466)** So if I paste the code in here so we can see what that looks like, when we query a collection, we're going to pass in the collection ID, we're going to pass in the embeddings for our query.
>
> **[7:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=477)** And we're going to pass in the results of those embeddings.
>
> **[8:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=481)** So now we're going to post to the back end for a particular collection we're going to query and we're going to pass it the embeddings and the results.
>
> **[8:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=490)** And we're going to get data back from that.
>
> **[8:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=492)** That will be our response.
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=493)** So here's where we're querying the collection to actually see the results that are close to our actual embeddings.
>
> **[8:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=500)** And a helper function that you're going to need, of course, then is you don't know how many collections are actually available in the database itself.
>
> **[8:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=509)** So it's useful for you to actually just list all of the collections first so that you can pick one from them.
>
> **[8:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=514)** And here's how you would do that in Chroma DB.
>
> **[8:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=516)** And again, it's very simple.
>
> **[8:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=518)** We're just posting to the back end of that server, localhost 8000/api/v1/collections, and getting the list of collections back.
>
> **[8:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=527)** All right. So we now have all of our helper functions.
>
> **[8:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=531)** Now we want to write some code that's going to help us to use some dummy documents that we're going to pass in with their embeddings, and do a query and find the documents that are close to those embeddings.
>
> **[9:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=544)** This will be the main function within our index.js, and I'm going to put it in now so we can take a look.
>
> **[9:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=552)** All right. So what it's going to do is, all of those functions that we've just created, the first thing is, we're going to list our collections.
>
> **[9:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=559)** And then we're going to create like a collection metadata.
>
> **[9:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=563)** We're just going to say it's my first collection.
>
> **[9:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=565)** We're going to create that collection called my first collection by just saying await createCollection.
>
> **[9:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=572)** That was a function we created a moment ago.
>
> **[9:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=574)** And then we're going to get the ID of that collection back from the database.
>
> **[9:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=579)** So then we'll just log out.
>
> **[9:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=580)** Hey, we've created a collection with that ID, collectionId.
>
> **[9:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=584)** Later on, when we're slicing up the book into chunks and creating embeddings for those chunks, we'll see that those embeddings are higher-dimensional vectors that are a representation of the text in that chunk.
>
> **[9:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=596)** But I'm just going to simulate that here.
>
> **[9:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=598)** And I'm going to simulate that by creating some documents.
>
> **[10:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=601)** I'm calling them 1, 2, and 3 or ID 1, 2, and 3.
>
> **[10:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=603)** I'm giving them hand-rolled embeddings that are three-dimensional.
>
> **[10:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=607)** And then the document itself is like this is a document, this is another document, this is a third document.
>
> **[10:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=613)** The important thing here will be these embeddings.
>
> **[10:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=616)** These were completely made up by me.
>
> **[10:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=618)** These aren't embeddings that are done from any kind of embedding training.
>
> **[10:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=623)** We'll see that in a moment.
>
> **[10:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=624)** These are just things that I put in hand-coded just to show what it would look like when you're searching against them.
>
> **[10:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=630)** So with those documents, I'm now going to add them to our collection so they get stored in our database.
>
> **[10:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=636)** So now if I had a document that I'm querying against and I had generated embeddings for that document, it might look a little bit like this.
>
> **[10:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=645)** And again, these are hardcoded that I've done now.
>
> **[10:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=647)** But imagine a document that has the embeddings 1.1, 2.1, 3.2. Which of these documents do you think would be closest to that in a search space?
>
> **[10:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=657)** Well, the first and the third look very similar to it.
>
> **[11:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=660)** The one in the middle, the numbers are way off.
>
> **[11:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=662)** So we would expect when we query it that it's going to find based on the similarity of the vectors, that one and three are similar to this one.
>
> **[11:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=671)** And I'm going to ask for two results.
>
> **[11:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=673)** And then the query collection helper function that we created a moment ago, we're going to call that, passing in the collection ID, passing in the query embeddings, and passing in the number of results that we expect back.
>
> **[11:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=684)** In this case, it's two.
>
> **[11:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=685)** And if there's an error, there'll be error, we'll just catch that.
>
> **[11:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=689)** And then finally, this main function, we want to execute that when we run our code.
>
> **[11:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=693)** So I'm just going to say main like this and save this.
>
> **[11:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=697)** So we now have our first piece of code that's using a vector database.
>
> **[11:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=702)** We've created the helper functions to create the collection, add the documents to the collection, query that collection for a number of results, and list all collections.
>
> **[11:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=711)** And then we've written some code that will add dummy data to that.
>
> **[11:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=714)** So let's now execute that and see what that would look like when we run it.
>
> **[11:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=718)** So I'm going to execute that using Node.js just by running index.js.
>
> **[12:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=723)** And I'll run node index.js.
>
> **[12:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=725)** And we may get some errors because some of the dependencies aren't installed such as axios. And that's okay.
>
> **[12:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=731)** So now it says error, can't find module 'axios'.
>
> **[12:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=733)** And you're going to do this a lot as you're using Node.js.
>
> **[12:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=736)** But I can just say npm install axios.
>
> **[12:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=740)** And give that a moment.
>
> **[12:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=742)** And we can then try running it again, see if it works.
>
> **[12:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=745)** Node index.js.
>
> **[12:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=748)** And now it said it can't find the module 'uuid'.
>
> **[12:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=751)** Npm install uuid.
>
> **[12:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=755)** Clear my screen and I'll say node index.js again.
>
> **[12:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=759)** And now something has happened.
>
> **[12:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=760)** Now we see that it actually ran.
>
> **[12:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=762)** So let's take a look at all of the stuff that we got back from Chroma.
>
> **[12:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=767)** So first of all, remember we had all of those debug things in there.
>
> **[12:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=770)** So sending a request to create a collection.
>
> **[12:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=772)** So we created a collection.
>
> **[12:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=774)** It was given this uuid.
>
> **[12:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=775)** The metadata for that is my first collection that we had set up.
>
> **[13:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=780)** We see that the collection created successfully.
>
> **[13:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=782)** Has an ID, has a name.
>
> **[13:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=784)** There's a whole bunch of configuration JSON here that's not important.
>
> **[13:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=787)** I'm going to just skip over.
>
> **[13:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=788)** But what I find really interesting now is like we wanted to, first of all, to add documents to that collection.
>
> **[13:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=795)** So our payload was we had the documents that we called ID 1, 2, and 3.
>
> **[13:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=799)** We had the embeddings for these documents, and then we had the metadata for these documents, and the documents themselves.
>
> **[13:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=805)** This is a document, that's another document, this is a third document.
>
> **[13:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=808)** And we can see that those were added successfully.
>
> **[13:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=810)** So everything is working great.
>
> **[13:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=811)** So now we did our query.
>
> **[13:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=813)** And if you remember, we had a document that we passed in that looked like the first and third.
>
> **[13:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=817)** The embeddings for the document we passed in were close to the ones on the first and third.
>
> **[13:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=822)** The one in the middle, ID 2, was way off.
>
> **[13:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=824)** And I'll go back and look at the code in a moment just to refamiliarize with that, but we can see the query results that came back, our ID 1 and ID 3.
>
> **[13:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=831)** The documents associated with that where this is a document and this is a third document.
>
> **[13:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=835)** And the actual distances were calculated for us.
>
> **[13:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=838)** So it's like 0.04, showing that those were actually pretty close.
>
> **[14:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=842)** And if we want to look at the code again, just to see why we got one and three back, we can see that document number 1, its embeddings were 1.1, 2.3, 3.2.
>
> **[14:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=853)** Document number 3 were 1.1, 2.3, 3.2. And our passed-in document that we were querying was 1.1, 2.1, 3.2. So it was very close.
>
> **[14:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=863)** It was just off in the second axis, whereas this middle document was way off in all of them.
>
> **[14:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=869)** So when we queried looking for two results, of course, it would find these two as being the closest and then return them to us.
>
> **[14:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=876)** So that's the beginning of how to install Chroma DB, how to set it up with data, and how to write code to be able to add to the database and query the database.
>
> **[14:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=886)** Next up, we're going to look at how then we're going to take this to the next level by slicing up our PDF and storing that.
>
> **[14:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=893)** And we're going to be doing that in Python instead of in Node.js.
>
> **[14:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/create-a-vectordb?u=76281980&t=895)** So you're going to get the skills of writing and reading from a Chroma DB in that language as well. Thank you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), pass (5), let (4), this. (4), case, (2)
> **CLI Commands:** python (8), node (8), find (6), pip (3), npm (2)
> **Versions:** 1.1 (4), 3.2 (4), python 3 (2), 2.1 (2), 2.3 (2)
> **File Paths:** index.js (6), node.js (4)
> **Prerequisites:** install (8), set up (1)
> **Tools:** terminal (5), command prompt (1), command line (1), sublime (1)
> **Definitions:** is a  (6)
> **Code Identifiers:** createcollection (4), collectionid (1)

#### BYOD to a VectorDB
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=0)** Now that you've installed and set up a Chroma DB, let's explore what you're going to need to do to get your data into it.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=7)** The core scenario for retrieval augmented generation is when an LLM may not have all of the facts about a particular scenario.
>
> **[0:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=14)** For example, you might have data that's private to you that wasn't used in a training set for a model like GPT or Gemini.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=21)** So if you want to have a chatbot that's an expert on that content, you would either have to train an entirely new model with it or use the reasoning powers of an LLM across that content.
>
> **[0:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=33)** And that's where RAG comes in.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=35)** The idea here is that when a user sends a prompt to an LLM, you can also send its snippets of relevant information from your content, and it will use what it knows from its training data to help parse that.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=48)** In this video, we're going to use an interesting example of this, where you'll take a science fiction novel that was not used in any of the training data for any LLMs, and you're going to chat with an LLM about it.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=61)** The novel is called Space Cadets, and it's a near-future story of the first Space Academy and the generation of young people who occupy it.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=69)** Here's an image that I painted of one of the characters from this novel.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=73)** Her name is Soo-Kyung Kim, and she's the first from her country to attend this academy.
>
> **[1:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=79)** She's from the Democratic People's Republic of Korea, or, as it's often known, North Korea.
>
> **[1:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=85)** I chose her as an example here because if you were to ask a chatbot about her, it would have no idea, as in this case with Gemini, or worse, it could hallucinate about her, as in this case with GPT-4o.
>
> **[1:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=98)** But if you were to ask one using RAG, then it could take text from the book about her, such as her hometown, her likes and dislikes, her history, stuff like that.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=109)** And it will then give you a much better profile about her.
>
> **[1:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=113)** So how would we do this?
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=115)** Well, the first step is to get the contents of the book into a database where we can start doing similarity searches against it, and we'll explore that next.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=125)** As the book is a PDF, the first step in this process will be to read a PDF.
>
> **[2:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=130)** In Python, the pypdf library has the support for this.
>
> **[2:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=135)** PDFs are usually stored as pages.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=138)** It was a format that was designed for print after all.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=141)** So when we want to get all of the text from one, we have to iterate through each page, and then we'll append the contents of that page to our overall text, so that when this loop completes, the text variable will contain the entire text of the book.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=159)** Next, in order to store the text as embeddings in the database, we have to split it into smaller chunks.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=165)** Each of these chunks will have an embedding associated with it, and that's simply a numeric vector that represents the text in a way that's similar pieces of text have similar vectors.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=177)** So when you have a prompt going to an LLM, you can search the database for similar text to that prompt, and then you can use what you found to augment the prompt.
>
> **[3:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=189)** For example, if your prompt was something about Soo-Kyung, then of course, snippets from the book mentioning her would be retrieved, and these could include data about her hometown or other things that the LLM does understand, and which could then be used to inform the answer.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=207)** To split into chunks, you can use the recursive character text splitter library from LangChain.
>
> **[3:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=213)** This simply splits the text into chunks like this, but it is important to understand the chunk size and chunk overlap properties.
>
> **[3:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=222)** Their goal is to help you determine the best chunks to use, and that's going to take a bit of experimentation.
>
> **[3:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=228)** They're measured in characters.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=230)** The overlaps help you not lose semantics in your text by chopping things in the middle of a sentence.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=237)** So once you have the chunks, you need to calculate the embeddings for them.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=240)** Remember, for similarity search, it will use these numeric values to make finding stuff in your database that's close to the prompt much easier.
>
> **[4:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=249)** And the LangChain OpenAI library includes an embedding function that you can use.
>
> **[4:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=254)** For this, you'll need an OpenAI API key, and this code will iterate through each of your chunks and calculate the embeddings for them, returning it as a list.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=265)** Now, simply all you need to do is store these embeddings in the database.
>
> **[4:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=269)** With Chroma DB, you do this with what's called a collection.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=273)** Let's take a look at the code.
>
> **[4:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=275)** It's pretty straightforward, but I'm going to break it down piece by piece.
>
> **[4:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=279)** Earlier, you calculated the embeddings for your text chunks using an embedding function from OpenAI with a library from LangChain.
>
> **[4:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=286)** When using Chroma DB, you have to use its embedding functions to specify what embedding that your data uses.
>
> **[4:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=293)** So you have to import the library.
>
> **[4:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=296)** You'll then specify which embedding function from the Chroma DB library you want to use. Be careful here.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=302)** This must match what you use to calculate the embeddings from your text, or the results will be meaningless.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=309)** If you have errors in retrieval, I've always found this is the first thing you should check.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=314)** Once you have that, you can then create the collection by giving it a name and specifying what embedding function it uses.
>
> **[5:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=322)** Here, we're creating a collection called PDF embeddings, and we're specifying the embedding function from above, which of course, is the OpenAI text embedding function.
>
> **[5:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=333)** Now storing the chunks becomes as easy as just adding them to this collection.
>
> **[5:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=338)** Note that the collection stores embeddings and the original raw data, which it calls a document.
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=344)** So when you retrieve, you don't need to decode the embedding, you simply read the document. Great.
>
> **[5:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=351)** Now you can see how you can slice up a PDF document to store it in a database.
>
> **[5:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=356)** Next, I'm going to show you this code in operation so you can see how it all works.
>
> **[6:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=360)** After that, we're going to look at how you can use Node to talk to this database and retrieve documents that are close to another string.
>
> **[6:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/byod-to-a-vectordb?u=76281980&t=368)** And you'll have the beginnings of a RAG chatbot that's an expert on this book.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), pdf (4), rag (3), gpt (2), api (1)
> **Code Keywords:** function (6), this, (3), let (2), private (1), this. (1)
> **CLI Commands:** python (1), make (1), node (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is called (1), is a  (1)
> **Warnings:** be careful (1), note that (1)
> **Prerequisites:** set up (1), you'll need (1)

#### VectorDB: Hands-on use case
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=0)** Okay.
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=0)** To get started with this section where we're going to be creating our first RAG by slicing up the PDF and putting it in the Chroma DB.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=6)** Make sure you have your Chroma DB running, and we saw the steps for installing and running that in the previous video.
>
> **[0:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=12)** And when you run it in a terminal, you'll see something like this.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=15)** Once you have that going, leave that terminal alone.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=18)** We won't touch that.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=19)** We'll minimize that and we'll work in a different environment.
>
> **[0:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=22)** So the environment that we're working in is going to be the first rag/start directory.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=28)** And it's going to look a little bit like this.
>
> **[0:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=29)** There's some files in here that I've already made for you.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=32)** The most important one, and the one that you're going to be working on is the create_db.py.
>
> **[0:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=37)** And we're going to edit that one so that we slice up the PDF.
>
> **[0:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=40)** And we'll see there's that PDF space-cadets-2020-master.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=43)** pdf is the actual book.
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=46)** So here's the create_db.py file that's available in the repo.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=51)** And there's some of these functions.
>
> **[0:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=52)** The code hasn't been written for you.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=54)** You can see the extract text from PDF, the split texts, the generate embeddings, and the store, and Chroma.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=59)** And we're going to work on those now.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=61)** But one of the things to take note of is earlier on in this course, I showed you how to get your OpenAI API key, and to make that an environment variable, you're going to need that running, and you're going to need that working in order for this code to work, because it's going to read it from the environment like this.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=77)** Okay. So, first of all, let's take a look at what is it going to take to extract text from a PDF.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=84)** So this function is going to be passed in the path to that PDF.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=88)** And what we want it to do is to open the PDF and then read that PDF and read it piece by piece and turn that into text.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=97)** Okay. What does that mean?
>
> **[1:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=99)** So one of the things that we spoke about when we were doing the slides was to recall that PDFs are broken into pages, because pages are how it was designed for print.
>
> **[1:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=108)** And remember, PDF was originally designed for print purposes.
>
> **[1:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=112)** So you'll notice that the book is split into a number of pages.
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=115)** So what we need to do is read all of those pages or the text page by page, and then add that to an ongoing variable that we're calling text, and then we'll return that text.
>
> **[2:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=126)** So this function is going to open the PDF at that path.
>
> **[2:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=129)** It's going to create a PDF reader and that PDF reader we've imported here from PyPDF2.
>
> **[2:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=135)** And we'll install that dependency if we need it in a moment.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=139)** And then for each page, it's going to read the text.
>
> **[2:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=142)** It's going to extract the text from the page and add that to an ongoing variable.
>
> **[2:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=145)** So this extract text from PDF is going to take in the entire PDF, extract the text from each page, turn that into one big text blob, and return that.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=156)** So now the next thing we need to do is split that text up into chunks.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=160)** Now, earlier when we were talking about this one, we wanted to think about the chunk sizes.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=165)** So every chunk of text is going to be a number of characters, and there's going to be overlaps between them in order for us to do this.
>
> **[2:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=171)** So for example, I'm suggesting a chunk size of 1,500 characters, which is about one-third of a page, and then the overlap is 300 characters.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=179)** So if you can imagine, the very first chunk is going to be the first 1,500 characters in the book.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=185)** The second chunk isn't going to start at character 1,501 and go to character 3,000, it's actually going to start at character 1,201 and go for 1,500 characters there.
>
> **[3:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=197)** So you have that 300-character overlap between chunks 1 and 2.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=201)** And that's one way to make sure that we don't split in the middle of a sentence.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=205)** So we don't lose context by cutting up the document too much.
>
> **[3:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=209)** Having these overlaps is really useful.
>
> **[3:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=211)** So the code here will do it with these chunk sizes.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=214)** But for whatever your work is that you're going to be using, whatever book, or whatever text that you want to use in here, just keep that in mind that doing that text chunk size and that overlap will lead to vastly different results when you're doing your querying.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=230)** So it takes a little bit of trial and error to get it right.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=233)** So I'm going to use a recursive character text splitter in order to do that chunking.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=238)** And I'm just going to tell it I want my chunk size to be 1500.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=243)** I want my chunk overlap to be 300.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=248)** And I'm going to do a length function, which just is how it's going to measure the length.
>
> **[4:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=254)** And I'm just going to pass in just a basic len as the length function that I'm using.
>
> **[4:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=259)** And then close this out just to make sure my code is nice and neat.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=263)** Okay. So now I've defined what my text splitter is going to be.
>
> **[4:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=266)** And now I need to get my collection of chunks.
>
> **[4:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=268)** So my chunks is just going to be I'm going to call text splitter.
>
> **[4:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=272)** And I'm going to ask it to split the text.
>
> **[4:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=275)** And I'm going to pass in the text that I have to get it to give me those chunks.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=280)** And we can do some kind of a status here where we can say the text is split into and we'll say the length of the chunks array is the number of chunks, it's not the size of each chunk.
>
> **[4:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=293)** And I'll just say plus chunks.
>
> **[4:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=295)** So this is going to give me like when I run it, that the text has been split into whatever number of chunks and then return the chunks.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=302)** So I've now written the codes, first of all, to extract all the texts from the PDF.
>
> **[5:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=307)** And then once I have that text to split it into chunks with those overlaps.
>
> **[5:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=311)** So the cool part is now when we want to turn this into embeddings.
>
> **[5:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=315)** Now in the previous video, I had hand-rolled those embeddings for those sample documents.
>
> **[5:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=320)** But we can't do that here.
>
> **[5:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=321)** We have to actually use real embeddings.
>
> **[5:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=323)** Now we could create our own embeddings and we could train our own embeddings, but that would take a lot of time, or we can just use some off-the-shelf embeddings.
>
> **[5:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=332)** And I'm going to use the OpenAI embeddings.
>
> **[5:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=335)** And so what has happened is as OpenAI were training their models, they also trained embeddings for their models.
>
> **[5:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=341)** And they made them available to us.
>
> **[5:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=343)** And we can just do that with an API call like this, where I'm going to define my embeddings function as the OpenAI embeddings, and I'm going to give it my API key.
>
> **[5:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=351)** And then what do I do with that is, well, I just for each of my chunks, I'm going to calculate the embedding for that chunk and then return that set.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=362)** So you can see here as embeddings embed query chunk for chunk in chunks.
>
> **[6:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=367)** Sounds funny, I know, but the idea is that for every chunk in my set of chunks, I'm going to use this embeddings that I've just defined to calculate the embedding for that, and I'm going to return that set.
>
> **[6:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=378)** And that is my set of embeddings.
>
> **[6:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=381)** And so now the last part, as you can see, is here.
>
> **[6:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=384)** We're going to store that in the Chroma DB.
>
> **[6:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=386)** I've written this code for you already.
>
> **[6:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=387)** It's very similar to what we just showed earlier when we were doing it in JavaScript.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=392)** But I've left a couple of pieces here that you need to fill in yourself.
>
> **[6:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=395)** So first of all is remember it's a little complicated, but the idea is that you're going to have to use embeddings twice.
>
> **[6:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=403)** First of all, you're going to use embeddings when you are converting your chunks of text into vectors to store in the database.
>
> **[6:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=411)** And then you're also going to use embeddings when you are retrieving, when the user gives a query, and you want to calculate the embeddings of that query to be able to compare them.
>
> **[7:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=421)** And those embeddings always have to be the same.
>
> **[7:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=423)** So one of the things that we do need to do here is that as we are storing in the database, we need to tell the database what embeddings that we're using because earlier we used the OpenAI embedding function.
>
> **[7:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=435)** So here we just want to make sure that we're telling the database that we're using the same one as we're storing it.
>
> **[7:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=440)** So I'm just going to use this piece of code that I put in here is to define the openai_ef for embedding function is this one.
>
> **[7:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=447)** And it's text-embedding-ada-002.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=450)** I knew that it was using this specific model, ada-002, up here.
>
> **[7:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=455)** Okay.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=456)** So now the next part is if you recall earlier, we were creating a collection and we want to add our new documents to that collection.
>
> **[7:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=466)** So I've started off the code here by saying collection equals something.
>
> **[7:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=469)** I want you to call it PDF embeddings, and the code to be able to do that I will just type in.
>
> **[7:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=476)** So collection = clients where client is our Chroma DB clients, get or create collection called PDF embeddings and specify the function, the embedding function that our collection uses, which is the one that we've just defined.
>
> **[8:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=490)** Get or create collection is just a handy one that will allow us to, if the collection doesn't exist, it will create it.
>
> **[8:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=497)** If it does exist, it will get it for us so we can use it.
>
> **[8:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=501)** So this piece of code I've already created for you is just going to go through all of our chunks, and it's going to store those chunks.
>
> **[8:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=507)** The embedding is going to be the embedding for that chunk.
>
> **[8:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=510)** The document is going to be the chunk itself.
>
> **[8:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=513)** And the ID is just, you know, we're generating an ID on the fly as we're creating it.
>
> **[8:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=519)** So that's everything that we need to be able to process this PDF.
>
> **[8:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=522)** And right at the bottom, I just have the usage.
>
> **[8:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=525)** The PDF path equals this book, space-cadets-2020-master.
>
> **[8:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=527)** pdf that I showed you earlier.
>
> **[8:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=530)** And then I'm going to call the process_pdf function.
>
> **[8:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=532)** Process_pdf function is this main function, and it's going to go through those steps that we just described.
>
> **[8:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=538)** First, extract the text from the PDF, then get the chunks from the text, then generate the embeddings for those chunks, and then store them in the database.
>
> **[9:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=548)** So let's see if this code runs, and let's see what happens when we try to run it.
>
> **[9:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=552)** So I will save this out.
>
> **[9:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=554)** Now in order to be able to run it, all I have to do is say python create_db.py.
>
> **[9:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=559)** Okay, we first get an error.
>
> **[9:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=561)** Now this error, of course, is again it's dependencies that need to be installed.
>
> **[9:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=565)** And we see the PDF reader was PyPDF2.
>
> **[9:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=568)** Do note that I still have the same virtual environment active that we created earlier on, so I'll just install PyPDF2 to that virtual environment.
>
> **[9:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=578)** Let it do its thing, and then we'll try to run it again.
>
> **[9:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=581)** Python create_db.py.
>
> **[9:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=583)** Now we get another error because we don't have the module LangChain installed.
>
> **[9:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=587)** Again, that's a dependency.
>
> **[9:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=588)** If you want to speed this up, I've listed all of the dependencies for you in requirements.
>
> **[9:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=592)** txt, but I'd like to go through it at least the first time, step by step, so that you can see this is what it looks like as you're building to know which dependencies you want to use.
>
> **[10:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=602)** So installing LangChain.
>
> **[10:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=605)** And LangChain was the library that wrapped the OpenAI embeddings for us to make it a little bit easier for us to use.
>
> **[10:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=612)** So let's see now, can we create our database?
>
> **[10:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=618)** And there's another dependency that we need to install.
>
> **[10:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=621)** So I'll pip install langchain_openai.
>
> **[10:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=625)** This is the life of a Python developer.
>
> **[10:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=627)** But I find this is really useful.
>
> **[10:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=628)** It might seem a little tedious, but it's really useful for you to have to understand the dependencies that you're using.
>
> **[10:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=634)** Often you'll have like a file like a requirements.
>
> **[10:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=636)** txt that you can just pip install once and get all of them.
>
> **[10:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=639)** But I actually like to do them one by one so that I can be clear on what dependencies I'm using and what I need to install.
>
> **[10:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=645)** So let me try it one more time. Create_db.py.
>
> **[10:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=649)** And now something's happening.
>
> **[10:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=652)** This warning don't worry about because I'm just running locally.
>
> **[10:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=654)** Oh, we got an error.
>
> **[10:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=656)** Chunk size is not defined.
>
> **[10:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=657)** So I must have missed a piece of code.
>
> **[10:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=659)** So let's go back and take a look at our code.
>
> **[11:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=662)** So it was chunk_size is not defined.
>
> **[11:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=666)** I was probably using a different variable name.
>
> **[11:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=668)** Let me take a look.
>
> **[11:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=670)** Yes, the error is here.
>
> **[11:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=671)** I don't want to be returning the chunk size.
>
> **[11:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=673)** I actually want to return the chunks, the set of chunks.
>
> **[11:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=677)** I must have had an autocomplete problem there.
>
> **[11:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=679)** So that's sometimes the problem with autocomplete.
>
> **[11:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=682)** It can be helpful and it can be not helpful.
>
> **[11:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=685)** So really what this function was supposed to do was go through, use the recursive character tag splitter to calculate all my chunks and return them.
>
> **[11:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=692)** But I was returning chunk size instead of returning chunks, and that's where it got a little confused.
>
> **[11:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=696)** So let me save that.
>
> **[11:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=699)** Let me clear the screen.
>
> **[11:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=701)** If I run python create_db.py.
>
> **[11:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=705)** Now we see, okay, it got the chunks.
>
> **[11:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=707)** So this book was 257 chunks.
>
> **[11:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=710)** And it's now generating the embeddings for those chunks.
>
> **[11:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=712)** Now those embeddings, 257 times, it's getting those 1,500 characters.
>
> **[11:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=717)** It's making a back-end call to the OpenAI's embeddings function, that ada-002, getting that embedding and returning it back.
>
> **[12:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=725)** So this is going to take a little while while it's doing that 257 times.
>
> **[12:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=730)** So once it's finished, as you can see, there are the 257 items in the collection and it has stored them in the database.
>
> **[12:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=736)** Let's take a look at that database.
>
> **[12:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=739)** So now it will have written this because we started our Chroma DB within the data directory.
>
> **[12:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=744)** It will have written a folder like this one.
>
> **[12:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=746)** And what you're interested in is this file, chroma.
>
> **[12:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=748)** sqlite3, that it's just created.
>
> **[12:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=750)** You can open that and you can browse that.
>
> **[12:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=752)** I'm using a tool called DB Browser for SQLite, which is a freely available tool.
>
> **[12:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=757)** And if I open that up, we can go in here, and the tab that will be loaded is the database structure.
>
> **[12:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=763)** But what you're interested in is browse data.
>
> **[12:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=765)** So if you select browse data and then drop down the table here, you can see the different databases that have been created.
>
> **[12:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=771)** But the interesting part is in the full-text search.
>
> **[12:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=774)** So if I select the full-text search, we can see these are the values within it.
>
> **[12:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=779)** And this is the text from the book itself.
>
> **[13:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=782)** We can see it's 257 rows because of our 257 chunks.
>
> **[13:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=787)** And then we can see these are the actual words within the book itself, the novel of it. This is the very end of the book.
>
> **[13:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=794)** You know, in the very beginning of the book, we can see it starts, for example, with this chapter talking about training.
>
> **[13:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=800)** And I just finally, just want to demonstrate the chunks and the overlaps of the chunks right where we can see we're at the end of this part of the chapter where it's action, they're being attacked and weapons hot, et cetera.
>
> **[13:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=811)** And if I go to the beginning of the next chunk, we will see that overlap there.
>
> **[13:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=815)** So like where I'll go back to this one and it says, you know, the characters, she says there's a lot of ships, she said, all sneaking into her voice.
>
> **[13:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=824)** And this one begins with, there's a lot of ships, she said, all sneaking into her voice.
>
> **[13:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=828)** So that's the overlap that I was talking about.
>
> **[13:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=830)** So we can make sure that we're not losing any context by splitting sentences in the middle.
>
> **[13:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=835)** But now we have all of the chunks of this book stored in the database.
>
> **[13:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/vectordb-hands-on-use-case?u=76281980&t=839)** So next up, we're going to look at building something that will query this database for things that are similar to the query or syntactically similar from these chunks. Thank you.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (11), this. (4), pass (2), this, (1)
> **Env Vars:** pdf (21), api (3), rag (1)
> **CLI Commands:** make (7), python (4), pip (2), find (1), sqlite3 (1)
> **Code Identifiers:** create_db (5), openai_ef (1), process_pdf (1), langchain_openai (1), chunk_size (1)
> **Prerequisites:** install (6), make sure you have (1)
> **File Paths:** create_db.py (6)
> **UI Navigation:** open the (2), go to (2), select the (1)
> **Analogies:** for example (2), similar to (2), imagine (1)

#### Querying the VectorDB
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=0)** Previously, we saw how we took a PDF, sliced it up, and stored it in a vector database along with the associated embeddings.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=7)** Before we can use this database in our chatbot, we'll need the code that will take the prompt, create the embedding from it, and then search the database for similar embeddings.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=16)** And we'll look at how to do that in this video.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=19)** And while the code we wrote to create the database was in Python, the code to read from it will be in JavaScript.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=26)** So we can use it in our Node.js-based chatbots that we built earlier.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=30)** First, let's think about the dependencies that our JavaScript code will need.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=35)** Given that we're using Chroma DB and the OpenAI embeddings, you'll use their dependencies like this.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=41)** Next, you'll specify the embedding function.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=44)** This will have to be the same one that was used to calculate the embeddings when storing the content, and Chroma DB offers a nice wrapper to the OpenAI one.
>
> **[0:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=53)** And here's how you can initialize that in JavaScript.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=56)** Remember, be sure to get an API key from OpenAI and use that here.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=62)** And if you use the different embedding function when creating the database, make sure that you specify that here.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=68)** You'll need to have your Chroma DB running to read from it.
>
> **[1:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=72)** And the sample code we've been using has it running on your local machine at Port 8000.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=77)** So make sure you set up the Chroma client to point to that path.
>
> **[1:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=81)** If you're using a different path, be sure to change this code.
>
> **[1:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=85)** Chroma DB stores documents in collections and there may be many of them in the database.
>
> **[1:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=91)** So this code will list out all of the collections by name, and then take the name of the first one and specify that that will be the collection that we want to use.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=102)** Now this might seem a little bit odd, but remember, in production, you might have many, many collections in your Chroma DB and you want to know what they are before you pick one, so it's good to list them out, see the one that you want, and then pick that if it exists.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=116)** This shows the example DB that you saw earlier with a single collection called PDF Embeddings.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=123)** Once you have that collection, it's now easy to query the database for similar text.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=128)** In this case, I've hardcoded the query, but in your chat app, this would be the prompt that's coming from the user.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=133)** I asked the system to tell me about Soo-Kyung, her likes, and her hobbies.
>
> **[2:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=138)** And then an embedding is generated from this.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=141)** The embedding is a set of vectors, numbers which the database can then use to find similar vectors.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=147)** And all we have to do is query the collection, passing it our embedding of the query, and then the number of results that we want to return.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=156)** And we'll get back a collection of documents in the results object.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=160)** If there are any documents returned, then this will loop through each of them and print out the document as well as its index.
>
> **[2:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=167)** The result object will also contain a distances array, which will contain the distance between the query vector and the vector for the retrieved document.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=177)** And here's a snippet from the number one search result for the prompt that I showed earlier.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=181)** There's lots of interesting stuff in there about Soo-Kyung, such as the country and the village that she comes from.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=187)** Thus, when passing the content to an LLM along with the prompt, the LLM will have more context to talk about her and be more likely to give a better answer.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=198)** And when measuring the distances of the documents from the prompts, this was the output, with the lower numbers being better.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=205)** The closest document was 0.35 similar, which is okay but not great.
>
> **[3:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=210)** And here's where ops can come into the picture.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=212)** This is the type of information that you should be tracking and using to inform your decisions.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=218)** Okay. Now we've seen how the code works for retrieving data from the database.
>
> **[3:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/querying-the-vectordb?u=76281980&t=223)** In the next video, I'm going to show this to you all in action.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), function (2), let (1), case, (1), return. (1)
> **CLI Commands:** make (2), python (1), node (1), find (1)
> **Env Vars:** pdf (2), llm (2), api (1)
> **Analogies:** such as (1), picture (1)
> **Prerequisites:** you'll need (1), set up (1)
> **File Paths:** node.js (1)
> **Ports:** port 8000 (1)
> **Versions:** 0.35 (1)

#### Demonstration: Querying the VectorDB
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=0)** So to this point, you've installed Chroma DB.
>
> **[0:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=2)** You've created your first Chroma DB set of data with hand-rolled embeddings that we created to test to see if we could search against those embeddings, and it worked.
>
> **[0:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=12)** And then you switched over to Python to create the create_db.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=15)** py file in the previous video.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=18)** And what that did was it took the book Space Cadets and it sliced it up into chunks, and then stored those chunks and their associated vectors in the Chroma DB database.
>
> **[0:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=27)** For this video, now we're going to search that database using a Node.js back end where we're going to create a prompt which is maybe some details about one of the characters.
>
> **[0:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=37)** And we're going to search the database for things that are syntactically similar to that prompt.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=41)** And this will give us the beginnings and the foundations for our RAG.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=45)** So a couple of things just to note.
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=46)** Number one, make sure that the Chroma database that you created in the previous video with the chunks of text from the book is now running.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=54)** And then secondly, if you have any trouble with any of installing any of the dependencies, you'll see this requirements.txt file has all of those dependencies that I installed previously for Python so that you can just do that with a single install if you want to do so.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=68)** And then the dependencies for Node.js I've put into this file, npm_install_instructions.txt.
>
> **[1:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=74)** But for this video, we're going to edit this search_db.js, and we'll be working within that.
>
> **[1:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=79)** Okay. So now we're in the search_db.js file.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=83)** And in this one, what we want to do just to repeat is like we're going to, for example, do a query like tell me about Aisha Parks.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=90)** Or we're going to do another query about tell me about Soo-Kyung Kim, where she lives, what she likes, her background, and her hobbies, stuff like that.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=97)** So these if you can imagine in a future version of this application, when we're doing full RAGing, what's going to happen is when we type in a prompt like that to our chatbot, we'll want to be able to search for the things that are syntactically similar to that.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=111)** And we'll do that by using the embedding function to generate the embedding for our query, and then search the database for things that are similar based on their embeddings to that.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=122)** And we'll use that to do the RAG.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=123)** But for now, I just want to do this simple thing so that we can start digging into the database and see how it works.
>
> **[2:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=129)** So for the first part of this, you want to do your embedding function.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=132)** If you recall, when we were creating the database, we use the OpenAI embedding function called text-embedding-ada-2.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=139)** So I can show you quickly what that is going to look like.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=143)** So I'm going to just paste the code in to make it a little bit quicker.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=148)** So here my embedder is going to be this one.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=151)** It's the OpenAI embedding function.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=153)** I have to use my OpenAI API key.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=156)** Recall earlier that we stored that as an environment variable, and we created an openai.js file that would read that.
>
> **[2:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=163)** And we're just using that file in here.
>
> **[2:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=165)** And then we're specifying the same model name as previously for the embeddings.
>
> **[2:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=169)** And again, it's very important, and I find this is the number one source of bugs.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=173)** When doing RAG is that often you don't use the same embedding function between the query text and the text that you've stored in the database, so be sure to do that carefully.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=183)** Now secondly is we have a Chroma DB and we want to have the client to that one.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=188)** Now our Chroma DB is operating.
>
> **[3:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=190)** If we recall on the URL, [http://127.0.0.1](http://127.0.0.1), which is our local host.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=198)** So I'm just going to type that in, 127.0.0.1. And it's operating on Port 8000.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=207)** So we now know our client is there.
>
> **[3:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=210)** We're able to access our client.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=212)** So now we've defined our embedder and we've defined our clients.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=215)** And now this code that I've already created for you that's going to list the collections in that database.
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=221)** It's going to, for this purpose, I've hardcoded collection zero.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=225)** If you're using the same database for multiple things, make sure you're picking out the right collection here instead of just taking the first one.
>
> **[3:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=232)** So that could be a bug that you just watch out for.
>
> **[3:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=235)** That you just want to, if you're having issues and you've used the same Chroma database and like maybe running through the lesson multiple times and you've got conflicting collections, that could be an issue there.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=245)** So just make sure that, and I did that with console.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=248)** log that we're just going to use the right collection.
>
> **[4:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=251)** So now once we've listed the collections, I want to actually get that collection from the database to use that.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=257)** And I'm going to use that, again, the clients, this Chroma client that we set up earlier to read that.
>
> **[4:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=262)** So I'm just going to say await clients.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=265)** getCollection.
>
> **[4:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=267)** And the name is our collection name that we just created a moment ago.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=273)** And the embedding function for this one is the embedder that we created above.
>
> **[4:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=282)** Okay. So remember this embedder here.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=285)** So now we have our collection. We've read it.
>
> **[4:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=288)** We're ready to go to do our query and to generate the embedding for that.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=292)** So we now have a query, tell me about Aisha Parks.
>
> **[4:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=295)** And we want to create our embedding of that query.
>
> **[5:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=300)** So how do we do that?
>
> **[5:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=301)** Well, earlier we defined the embedding function and we called it embedder.
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=305)** So all we have to do is say await embedder.generate.
>
> **[5:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=312)** And we're going to generate from this text query like so.
>
> **[5:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=316)** So we're passing our text query, which is that text to the embedder and asking it to generate an embedding for us.
>
> **[5:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=323)** And now we can log out that what it looks like.
>
> **[5:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=325)** I'm just slicing the first few dimensions because how the OpenAI embedding works is the embedding is in many dimensions.
>
> **[5:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=332)** So you're going to see lots of numbers being squirted onto the screen if we do this.
>
> **[5:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=336)** So I'm just going to take like the first slice of that and the first few so we can see what the embedding looks like.
>
> **[5:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=341)** So now the next thing is we want to query the collection.
>
> **[5:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=344)** So our results is going to be get the query results for this collection.
>
> **[5:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=348)** But what is that? What's that going to look like?
>
> **[5:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=351)** Well, let's take a look.
>
> **[5:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=353)** So we can query the collection by just saying, I'm going to remove this, say await collection.query.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=362)** And what are we going to query it for?
>
> **[6:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=364)** Well, we're going to pass in the embeddings that we've just generated.
>
> **[6:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=368)** And we call that. Where was that?
>
> **[6:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=370)** That was here, this query embedding.
>
> **[6:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=372)** I'm just going to paste it so I get the right syntax.
>
> **[6:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=375)** So the query embeddings that we're passing in is this one that we've just generated called query embedding.
>
> **[6:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=380)** And then we want to say, well, how many results do we want to get back.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=383)** Let's say, for example, we want to get a lot.
>
> **[6:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=385)** We want to get 15 results back for that.
>
> **[6:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=387)** So now in my console.log, I can print out those results.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=392)** So I'm just going to take the top five and print those out.
>
> **[6:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=395)** And then I'll also print out the distances for them.
>
> **[6:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=399)** So that was one query.
>
> **[6:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=400)** Now we say let's try another query.
>
> **[6:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=402)** In this case, tell me about Soo-Kyung Kim.
>
> **[6:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=404)** It's going to be the same thing, right?
>
> **[6:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=406)** I'm just going to call this the different query embedding.
>
> **[6:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=409)** I'm going to use the embedder to generate the embedding from this new text query.
>
> **[6:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=414)** I'm going to say I'm querying with a different topic.
>
> **[6:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=417)** I'm going to get the different results by just passing in my embeddings.
>
> **[7:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=421)** And now this new one that I've just generated.
>
> **[7:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=423)** And then I'll print out the results for that and their distances.
>
> **[7:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=427)** And that's pretty much it.
>
> **[7:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=428)** That's everything that we need to do for two examples that we've hardcoded of text.
>
> **[7:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=434)** So let's run this.
>
> **[7:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=435)** So I'm going to first of all save it out.
>
> **[7:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=438)** So recall that I edited that.
>
> **[7:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=440)** I will search_db.js.
>
> **[7:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=442)** So now all I have to do is run it like so, and it's going to run and we're going to see all of this stuff printed out.
>
> **[7:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=450)** So let's go take a look at what we got.
>
> **[7:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=453)** So I'm going to scroll up to the top of our console and see what we got.
>
> **[7:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=459)** Okay. So when I ran it, this was my document collection in the database.
>
> **[7:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=464)** If you recall, we called it pdf_embeddings.
>
> **[7:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=466)** This is just some of the details about that.
>
> **[7:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=468)** But what we're interested in here is now we said we're using the collection.
>
> **[7:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=472)** And if you remember, I said tell me about Aisha Parks.
>
> **[7:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=475)** The embedding that was generated for that, these are some of the vectors in that embedding.
>
> **[8:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=480)** We just said we're going to slice out the top five.
>
> **[8:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=482)** There's many dimensions in the ada one, but we just want to say like, okay, the first five dimensions look like this.
>
> **[8:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=488)** So we see that we're getting it.
>
> **[8:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=489)** And now my query, tell me about Aisha Parks.
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=493)** The things that it found in the book that were similar to that.
>
> **[8:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=496)** And recall that we have 1,500 character chunks.
>
> **[8:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=500)** But our prompt here is very short.
>
> **[8:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=502)** It's going to be pulling out things like Aisha.
>
> **[8:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=504)** And we can see here the first thing that it said was, hey, I hear the hotel is very nice, Aisha said.
>
> **[8:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=510)** Her name is Aisha Parks and we can see somebody referring to here as Miss Parks and we can see Aisha again.
>
> **[8:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=517)** So this was syntactically very similar.
>
> **[8:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=519)** We can go through and we can just take a look at some of the similarities that it had taking texts from the book.
>
> **[8:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=525)** Again, because this query was very small, very short, it was only a few words instead of a long one, it's actually one of the things that it will bias towards is finding stuff from early on in the book.
>
> **[8:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=535)** And as I've written the book, I can recognize some of this text.
>
> **[8:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=538)** And these are all from the first two or three chapters.
>
> **[9:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=540)** Let's also look then at the next query that we put in.
>
> **[9:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=544)** Remember we searched for 15 and we asked for the top 15.
>
> **[9:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=547)** So we can see that's number 14, that's number 15.
>
> **[9:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=551)** And the next thing that it printed out were the actual distances.
>
> **[9:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=556)** So for the 15 chunks of the book, it calculated the cosine difference, the similarity between that chunk and my prompts, found the top 15, and it printed them out here.
>
> **[9:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=567)** So we're finding things here that if you think about the number zero being identical and the number one being as different as you can get, we're finding things here that were 0.35, 0.37, 0.39. So they're quite similar to my prompt, but they're not very, very close to my prompt.
>
> **[9:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=585)** And that was again because my prompt was only five or six words.
>
> **[9:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=588)** But in this case, we're getting 1,500-character chunks.
>
> **[9:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=592)** So, of course, they're not going to be very similar.
>
> **[9:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=594)** But we're seeing things here that they've been stack ranked as the top 15 closest to that.
>
> **[9:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=599)** So then when we queried with a different topic and I said, tell me about Soo-Kyung, where she lives, what she likes, all of that kind of thing, we began to see like an early part of the book where the main character, Aisha, meets Soo-Kyung, right?
>
> **[10:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=612)** You know, how she smiles, her face lit up when she smiles.
>
> **[10:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=616)** Again, it's mentioning Soo-Kyung here.
>
> **[10:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=618)** Again, it's mentioning Soo-Kyung here.
>
> **[10:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=621)** So it's finding that kind of strong, similar signal because we mentioned her name.
>
> **[10:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=626)** And again, it's going to go through and it's going to pick out 15 things that are quite similar to the prompt in the same way that we did.
>
> **[10:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=633)** And I'll just scroll down to the bottom.
>
> **[10:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=635)** And we got slightly better results at the beginning, because I guess our prompt was a little bit longer.
>
> **[10:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=640)** But that's the whole idea of what's happening here.
>
> **[10:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=642)** We can now see that we've taken those prompts, and in our Node.js file, we've encoded those prompts, and we've done some search against the database for things that are similar to that, which we can then use to pass to our GPT back end when we do true RAGing to be able to get more information about the character herself.
>
> **[11:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=661)** And again, if you read through this text, you'll begin to see some things about Soo-Kyung.
>
> **[11:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=666)** You know, where she believes she was a victim in some things.
>
> **[11:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=669)** And for example, here's her favorite food.
>
> **[11:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=671)** They're called black bean noodles, so that when we do RAGing against Soo-Kyung, even though GPT has no idea about her passing this information in with the RAG query, it'll be able to parse across that and tell us more things about her.
>
> **[11:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=685)** For example, this is one of her favorite foods.
>
> **[11:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/demonstration-querying-the-vectordb?u=76281980&t=687)** So with that, we're going to move on to the next video where we're actually going to start building out the full RAG system.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), await (3), this. (3), this, (2)
> **CLI Commands:** make (4), node (3), python (2), find (1)
> **Analogies:** similar to (5), for example (4), imagine (1)
> **File Paths:** node.js (3), search_db.js (3), requirements.txt (1), npm_install_instructions.txt (1), openai.js (1)
> **Env Vars:** rag (5), gpt (2), api (1), url (1)
> **Code Identifiers:** search_db (3), create_db (1), npm_install_instructions (1), getcollection (1), pdf_embeddings (1)
> **Versions:** 127.0.0 (2), 0.35 (1), 0.37 (1), 0.39 (1)
> **Cross-References:** previous video (1), we mentioned (1), next video (1)

#### Extending your app with RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=0)** Now that you've seen how to create a vector database in Chroma and you've sliced up the book, created embeddings, stored them, and written code to retrieve context-appropriate snippets, the next step is to update the chatbot that we've been working on to use these snippets.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=16)** For the first step, let's revisit the architecture of the chatbot so we can see how we would update it with RAG.
>
> **[0:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=22)** Typically, the chatbot, usually called an assistant in the API, is primed with a system prompt like you are an expert in public speaking who can..., et cetera.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=32)** It then emits a welcome message.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=34)** The user then enters a prompt like, please help me write a speech about whatever, and the assistant will reply with some kind of speech outline.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=44)** So all this stuff in the middle is the conversation history, which is maintained in the context window for your LLM.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=51)** And this is why LLMs with larger context windows are very valuable for complex tasks.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=57)** They can remember the very long conversations and refer back to pieces of them.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=61)** But here's where that could be a problem.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=64)** What happens if I ask about something where the topic is something the assistant has no knowledge about?
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=70)** Like Soo-Kyung Kim from the book Space Cadets that we've been working on.
>
> **[1:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=74)** So we fix this with the idea of RAG, where before the prompt is sent to the assistant, it is used to search the database for similar content, and a number of documents that are closest to the prompt in similarity scores are returned.
>
> **[1:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=89)** These are then added to the message sent to the assistant as a context, and the prompt is sent as the message.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=97)** Now the assistant has a lot more to work with, and it can reason across the content in the provided docs and give a much better answer.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=105)** As an example, here's the output of the chatbot without RAG.
>
> **[1:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=110)** And here it is with RAG. Much better.
>
> **[1:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=113)** It gives us a very rich background on her and even her story arc.
>
> **[1:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=117)** I personally find this fascinating.
>
> **[2:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=120)** To implement the RAG, we need to look at this part of the architecture, and here's where we use the prompt to search the database, get the docs, and update our message to the assistant.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=131)** And we'll look at the code for this next.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=134)** If you remember from earlier on when your server received the message that the user typed, it used this code where it captured the message as message.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=144)** It then pushed that directly to the conversation history.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=148)** It then logged that and then used generate response to call the LLM to get the response back from the LLM.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=156)** And this gives us a really nice framework to work with.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=159)** Instead of just passing the message through to the API call, we can process it first by doing the search against the Chroma DB for similar content, getting the underlying documents from the DB that contain that content.
>
> **[2:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=172)** And here's the entire code for that.
>
> **[2:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=174)** There's a lot going on here, so I'm going to split it into two chunks to explain it.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=178)** First, let's take a look at how we initialize everything.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=181)** Note that it accepts a value message.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=184)** Now this will be what your user types.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=187)** We'll start by specifying the text embedding that we want to use.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=192)** You must use the same one that was used to create the initial embeddings that were stored in the DB.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=198)** In this case, it's OpenAI's text embedding called ada-002.
>
> **[3:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=202)** So I will specify that as well as the API key that allows me to use it.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=207)** Next, we'll tell it the location of our Chrome DB, and if it's on your dev box, it'll have a local host address like this.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=214)** Then we need to specify the collection that we're loading from.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=218)** For this example, there's just a single collection called PDF embeddings that was used to store the contents of the book in the database.
>
> **[3:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=226)** This gets loaded into the variable collection which you'll see next.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=230)** Okay. So here's the second half of the code.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=233)** Remember that message is the content that the user typed.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=237)** And we're going to pass that into this function.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=240)** This line will then use the embedder that you created to calculate the embeddings for the user's message.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=248)** We'll then initialize the string that we want to return with all of our documents as an empty string.
>
> **[4:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=254)** We'll then get a list of results, the documents within the collection that closely match our query embedding.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=260)** I've hardcoded it to retrieve the top five of these.
>
> **[4:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=264)** If anything is returned, we'll iterate through the results and update the result string with the underlying documents.
>
> **[4:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=270)** Otherwise, we'll just let result string be empty.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=273)** Note the doc here.
>
> **[4:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=276)** And then we'll return the result string to the calling function.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=280)** Now we can update the chat message code like this.
>
> **[4:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=284)** We get the message and send it to the query Chroma DB call.
>
> **[4:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=288)** In turn, that will retrieve the documents for us, and we'll use them to construct our new message by making them the context.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=297)** And then whatever the user typed becomes the message.
>
> **[5:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=300)** And all of this we're going to call ragString.
>
> **[5:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=303)** So we push the ragString to the conversation history instead of the message.
>
> **[5:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=308)** And that's it.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=309)** In the next video, I'll step through all of this code and show it running.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-your-app-with-rag?u=76281980&t=314)** And because it's built on top of the chatbot from earlier, it's going to have the logs and the user feedback that you can use to explore how your bot is being used.

> [!info]- Semantic Content
>
> **Env Vars:** rag (5), api (3), llm (3), pdf (1)
> **Code Keywords:** let (3), this. (2), function (2), public (1), case, (1)
> **Code Identifiers:** ragstring (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)
> **Warnings:** note that (1)

#### RAG: Showing it in action
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=0)** Okay. So to this point, you've installed Chroma DB, you've created your first collection in Chroma DB with synthetic data and some synthetic embeddings.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=8)** We then took it away from the synthetic data and started doing it with some real data by slicing up the book and storing that in Chroma DB.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=15)** And then previously, you saw where we hardcoded some queries and I did a text similarity search against them.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=21)** We're now going to take it full circle, and we're going to build out the chat application, change that to become a RAG application so that when the user types in something, we're going to get those similarity documents and we're going to pass them to GPT and have it reason across them and give us much better opinions about the characters or situations within the book.
>
> **[0:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=40)** So you're going to be working within the directory that's called serve-rag.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=44)** And within the start, you'll see all of these files.
>
> **[0:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=47)** Now you see there's more files in here than we'd had previously, but the important ones we're going to be working on in this video is really the server.js.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=54)** And if you recall from earlier, that was our Node.js back end for our chatbot.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=59)** And we're going to update that instead of just being a pass-through of the user's query to actually do the RAGing.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=65)** So Server.js is going to look like this.
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=68)** You'll remember it's the chat application that we've been working on since the beginning, but there's a few new things in here that we want to take a look at in order to do the RAGing.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=76)** For example, here, we're going to query the Chroma DB with our prompt.
>
> **[1:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=80)** And I've just put your code in here.
>
> **[1:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=82)** And you'll see there's a few things like that that you're going to want to work through.
>
> **[1:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=86)** So I'm going to start with this one to query the Chroma DB.
>
> **[1:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=89)** Well, what do we want to do when we're querying the Chroma DB?
>
> **[1:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=92)** There's a lot of work that we're going to need to do here.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=94)** The first part, of course, is to get our embeddings and recall what we're going to do is we have the message from the user.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=102)** We're going to generate an embedding for that.
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=104)** We're going to go to the Chroma database with that embedding, we're going to get the collection from the Chroma database, and we're then going to query that collection for documents that are similar to the one in our embedding.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=116)** So let's start by specifying what our embedding function is going to be.
>
> **[2:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=121)** And I'm going to just paste that in here.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=123)** And this should look familiar by now.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=125)** We're using the OpenAI embedding function.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=127)** We have our OpenAI API key.
>
> **[2:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=129)** Remember that should be an environment variable.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=131)** If you've been following along, that will have been set up.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=134)** And we're going to specify that we're using this model name.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=137)** Recall that when we created the embeddings for the stuff in the book, we used this model to be able to do that.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=143)** And we need to use the same embedding to be able to retrieve them.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=147)** So now that we've defined our embedding, we want to specify our Chroma DB.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=151)** By the way, just as a note, you should at this point have your Chroma DB up and running before you're doing this, using the instructions that we saw earlier on and making sure that you're using the Chroma DB with the data that's from the book.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=164)** So when you slice it up and you created that collection in a Chroma DB, make sure that that's the one that's running now.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=170)** And that's typically running on 127.0.0.1:8000. All right.
>
> **[2:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=175)** Next up, we want to get the collection.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=178)** We didn't use a great name when we made the collection for this book, and that's maybe something that you could do if you're making tidier code a little bit later, but I just called it pdf_embeddings when I was creating those initial embeddings.
>
> **[3:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=189)** So we're going to get that collection called pdf_embeddings.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=192)** This line will crash if you are not using the version of the Chroma client that is currently running that has had that collection called pdf_embeddings, with the content from the books stored in it.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=204)** So if you're having problems, this is one thing just to make sure that you're not crashing here.
>
> **[3:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=209)** And if you are, just make sure you're running the right version of your database.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=212)** Next, we know what the message is from the user.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=215)** It's in this message variable.
>
> **[3:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=217)** So what we want to do is generate an embedding from that, right?
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=221)** And again, we have our embedder that we've specified.
>
> **[3:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=224)** And we just want to use that to generate an embedding for our message.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=227)** So now we have the embedding for our message.
>
> **[3:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=230)** We know the collection which is the pdf_embeddings collection within the database.
>
> **[3:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=235)** That's the collection of chunks, each one a document for our book.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=238)** So now all we have to say is collection query, passing in the embeddings that we've just generated.
>
> **[4:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=244)** And in this case, we're just going to ask for five results back.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=248)** Okay. So what do we want to do once we've gotten those results?
>
> **[4:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=251)** Well, we want to return them to the caller of this function query Chroma DB.
>
> **[4:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=255)** And we're going to do that with this chunk of code where we just want to make sure that we got some results back and that we have something in them that it's not empty.
>
> **[4:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=264)** So if we did get something back and we didn't get an error, then we're just going to go through these documents.
>
> **[4:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=270)** And for each one, we're going to have this string where we're just adding that document to the string.
>
> **[4:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=275)** So what we're going to return is instead of a collection of objects, we're just going to return a big string with all of those results in it.
>
> **[4:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=282)** And this is just going to iterate through each of the documents that we retrieved and give us that string.
>
> **[4:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=287)** So now we have this function that's going to take the message from the user, and it's going to figure out the text from the database that's closely related to that message from the user.
>
> **[4:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=298)** So we're getting closer to being able to RAG.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=302)** Okay. So what do we do next?
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=305)** Well, if we scroll down and we look a little bit further, I've left this comment for you here in the chat message and recall from earlier that when the user sends from the client the HTML client for the chat, when it sends the message, the node server will receive that in this socket.on, and here's where we want to be able to say, well, we're retrieving our RAG in order to add that to our message that we're going to send to the back end.
>
> **[5:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=331)** So what's that going to look like?
>
> **[5:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=333)** Well, if you recall, when we were looking at it in the slides, when you send a message to the back end, it's going to be in the conversation history, and the RAG stuff you can actually set as the context within the conversation history.
>
> **[5:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=345)** So when you're sending a message, for example, tell me about Soo-Kyung Kim, that's the message, but there's a context associated with that message.
>
> **[5:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=353)** And that's where we can put the RAG string.
>
> **[5:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=355)** So all we have to do, I'm going to replace this with this piece of code.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=362)** The RAG string is going to be this big string where the context, colon, a new line.
>
> **[6:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=367)** And after that is the results of that function that we just wrote.
>
> **[6:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=372)** And the function that we wrote was taking the message, sending it to Chroma DB, getting the documents that are similar back, and lumping them into a big string, followed by a new line, followed by the message.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=383)** This is the message that the user typed in, followed by a new line.
>
> **[6:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=386)** So we now have our RAG string and it was as simple as that.
>
> **[6:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=389)** Now, in the past, when we were pushing content to the conversation history, we were just pushing the message here.
>
> **[6:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=395)** But now, of course, we want to push more than just the message; we want to push the entire RAG string.
>
> **[6:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=399)** So this should say ragString.
>
> **[6:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=401)** And that way what the user typed, plus the stuff that came back from the database, is what's going to be sent to the ChatGPT completion API.
>
> **[6:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=411)** The rest of our server now is pretty much unchanged.
>
> **[6:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=415)** Everything that we had written earlier to be able to create our server for the actual chatbot stays intact.
>
> **[7:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=421)** The back-end stuff that we did for logging stays intact.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=424)** I'm not changing anything else.
>
> **[7:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=426)** So let me save this out and then I'll switch back to terminal.
>
> **[7:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=430)** So now we've updated server.js.
>
> **[7:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=432)** We haven't changed anything else.
>
> **[7:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=434)** The front end that we've done, which is in the public directory which has our HTML for our chatbot, should still be intact.
>
> **[7:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=440)** So now if we just node server.js, we're going to run our server and we can see it's running on Port 3000.
>
> **[7:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=446)** Now let's see what that looks like.
>
> **[7:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=449)** So I've opened the browser and I've refreshed it.
>
> **[7:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=452)** And you'll notice here I had one previously connected which disconnected when I refreshed it.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=456)** It's assigned a new user ID for this session.
>
> **[7:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=459)** So I'm going to make this full-screen.
>
> **[7:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=461)** And if you recall earlier, if we asked the chatbot about Soo-Kyung Kim, it had no idea or it hallucinated, but now it's actually going to be RAGing.
>
> **[7:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=469)** So I can say something like, tell me about Soo-Kyung Kim, what she likes, and help me create a presentation about her.
>
> **[8:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=482)** It's thinking.
>
> **[8:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=483)** Recall what's happening here was this is the message that I've sent up, this tell me about Soo-Kyung Kim.
>
> **[8:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=489)** Now as part of the thinking is it's going to Chroma DB, it's finding things that are similar to this phrase, it's bringing them back, and it's turning them into a big string.
>
> **[8:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=498)** That big string becomes the context that gets added to this message, and then that gets passed to GPT on the back end.
>
> **[8:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=505)** GPT on the back end is then able to give me this answer, and we can see it is so much more interesting than previous answers, where it was either hallucinating or saying it didn't know.
>
> **[8:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=515)** For example, it understands that she's from this village named Sijungho.
>
> **[8:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=519)** It tells us how she's portrayed.
>
> **[8:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=521)** It tells us some really interesting things about her, where she's from.
>
> **[8:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=524)** But we can see now that thanks to RAG, GPT, which had no clue about my book, is actually able to help me in this case, do a presentation about the book itself.
>
> **[8:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=534)** And maybe I can do another question, like saying, how about her favorite food?
>
> **[9:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=542)** And this is all completely unscripted.
>
> **[9:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=544)** I have no idea what it's going to say, but let's see what happens.
>
> **[9:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=547)** And again, think of the flow here.
>
> **[9:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=548)** My message is how about her favorite food?
>
> **[9:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=551)** The context, it's retrieving from the database.
>
> **[9:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=554)** It's going to add that to the conversation history.
>
> **[9:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=556)** So everything that we'd had previously is also in the conversation history.
>
> **[9:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=560)** And GPT is going to reason across the new information and it's going to send it back to us.
>
> **[9:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=565)** And if you actually recall, when we were looking at in the previous video, when we were doing that hardcoded search, it was talking about black bean noodles, which is also one of my favorite dishes.
>
> **[9:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=573)** And here we can see, it's her favorite food.
>
> **[9:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=576)** She clings to it even while she's living in space.
>
> **[9:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=578)** So it's really intelligent reasoning across my book, even though GPT has not been trained on my book.
>
> **[9:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-showing-it-in-action?u=76281980&t=585)** And that's the power of RAG.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (4), pass (2), case, (2), else. (2)
> **Env Vars:** rag (10), gpt (6), api (2), html (2)
> **CLI Commands:** make (5), node (3)
> **File Paths:** server.js (4), node.js (1)
> **Code Identifiers:** pdf_embeddings (4), ragstring (1)
> **Analogies:** for example (3), similar to (2)
> **Ports:** :8000 (1), port 3000 (1)
> **UI Navigation:** go to (1), scroll down (1)

#### Challenge: Complete RAG application
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=5)** So you've now gone step by step through taking the chatbot that we created earlier in this course and amending it to use RAG with my novel, Space Cadets.
>
> **[0:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=14)** Your challenge for this part of the course is to do the same steps, but for a different book.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=19)** And if you're looking for books, Project Gutenberg is a great source for ones with permissive licenses, and you can find many wonderful ones in there that are in the public domain.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=28)** Try to find an interesting one and see if you can slice it into chunks, vectorize those chunks, and build a RAG system around them.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=35)** The books are not usually in PDF format, so if you want to use the code that we've created already, you'll have to convert them.
>
> **[0:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=41)** But that's actually pretty easy.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=43)** You can usually just print the text and choose PDF as an output type, but for an additional challenge, see if you can learn how to do it with plain text instead of a PDF.
>
> **[0:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=52)** And if you're looking for a good book, one of my favorites is in there.
>
> **[0:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=55)** It's called Flatland, and it's a wonderful allegory for string theory told as a fairy tale.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=61)** So have fun.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/challenge-complete-rag-application?u=76281980&t=62)** Find a good book that you like, slice it up, build a RAG, and enjoy the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), pdf (3)
> **CLI Commands:** find (3)
> **Code Keywords:** public (1), type, (1)
> **Definitions:** is a  (1)

#### Solution: Complete RAG application
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=5)** So the exercise that I challenged you to do was to take a different book.
>
> **[0:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=9)** And instead of my book, Space Cadets, offered, there were some books that are out there that were public domain and Project Gutenberg.
>
> **[0:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=15)** And one of my favorite is this beautiful book called Flatland, and it was written in the late 1880s, and it tells the story of a character who lives in a two-dimensional world.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=28)** And it describes what the two-dimensional world that he lives in looks like, and how that character then travels to other worlds.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=36)** For example, the three-dimensional world that we live in, and then goes back to his world and tries to explain what he has seen.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=44)** It was written by a mathematician to try and explain higher-dimensional math to other people, and in some ways, it's become the foundation for a lot of theories in string theory.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=54)** And it's written as a fairy tale.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=56)** It's a beautiful, beautiful book.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=57)** So this was the example that I gave.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=59)** But of course, you could have done any book.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=61)** I converted it to a PDF, which is what I'm showing here.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=64)** So in order to succeed with building this, some of the things that you needed to do were very, very simple and very, very straightforward.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=71)** First of all, the create_db script that you were using should not have changed at all.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=76)** The only thing that I would say that you should have changed was when you were creating the collection within the database.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=83)** Earlier when we had Space Cadets, we just called it PDF collection.
>
> **[1:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=86)** That wasn't a great name, because what if you were doing different books as different collections?
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=90)** So in this case, a good thing to do would be to use a different name in the collection.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=94)** And in this case, I used the name Flatland in the collection, so that when I'm querying back to the database, I would be looking at Flatland.
>
> **[1:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=102)** And if we look at the database that was created after we had done that, I'm using the SQL Browser here.
>
> **[1:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=107)** And again, when we look at the embedding full-text search, we can now see the text within Flatland.
>
> **[1:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=113)** Okay. And one other thing that might be interesting and something that you should consider is remembering those chunk sizes that we were doing.
>
> **[2:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=120)** You could experiment with different chunk sizes to see if you would get different results.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=125)** And in this case, because Flatland is a shorter book, I just use a chunk size of 500 with an overlap of 100.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=131)** So when I go back into the database here, we will see those smaller things, these smaller chunks of text.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=137)** It's up to you to experiment and see how you would want to do this, to get the best possible results.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=143)** Nothing else should be changed.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=144)** So when you're creating the database, all you have to do is read from Flatland instead of Space Cadets.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=150)** You would specify the collection name to be Flatland instead of PDF collection, and you could experiment with the chunk size.
>
> **[2:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=157)** So then once you've done that, everything else that you've created for the Space Cadets chatbot is going to work with the Flatland chatbot.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=164)** And let's take a look at this in action.
>
> **[2:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=167)** So here's the chatbot.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=168)** This one is now running to use the Flatland RAGing instead of the Space Cadets RAGing.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=173)** So I can come in, and for example, I could ask it to say tell me about the main character's journey to Spaceland.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=184)** Remember the main character was from Flatland.
>
> **[3:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=186)** They journeyed to Spaceland.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=187)** They try to explain what three dimensions are to people who live in two dimensions, and all kinds of chaos happens.
>
> **[3:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=193)** It's a wonderful book, if I haven't said that already.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=196)** But let's see what's happening.
>
> **[3:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=197)** Again, here's my message, tell me about the main character's journey to Spaceland.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=201)** What's happening now is it's querying that database to find things that are similar.
>
> **[3:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=205)** It's adding them as the context, and then it's sending that back to the ChatGPT back end.
>
> **[3:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=209)** And I deliberately chose this, not to say Flatland, because I wanted to see if the RAG would understand that the book is Flatland, and we can see that it is.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=218)** This talk could be the amazing tale of a two-dimensional figure who will redress as the protagonist.
>
> **[3:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=223)** He's actually Mr. Square, and the protagonist lives a comfortable life in Flatland.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=227)** Life was simple and flat as the worlds, but then he had this epiphany by traveling with a mysterious stranger to Spaceland.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=233)** So it's actually getting the full plot of the book.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=236)** And maybe I can say, is there any humor I could use in my presentation?
>
> **[4:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=241)** Remember, we've made the bot to be one that will help you to create good presentations.
>
> **[4:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=246)** And again, I'm just doing this off the cuff, completely unscripted, and let's see what actually happens.
>
> **[4:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=251)** Absolutely, humor can make it happen.
>
> **[4:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=254)** When our protagonist first hears about the third dimension, he compares it with something hilariously absurd from his two-dimensional, right?
>
> **[4:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=261)** He thought he might be able to see behind his neighbor's house when he has the idea of a third dimension. Stuff like that.
>
> **[4:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=267)** So again, it's really, really understanding the content of the book.
>
> **[4:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=271)** It's actually understanding text that was in the book and giving me that as an example of humor.
>
> **[4:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=276)** And if you think about asking that, what I've done is something really abstract, right?
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=280)** I've asked it to find text in the book and try to understand artificially the text in that book that is actually humorous.
>
> **[4:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=289)** And it was able to do that.
>
> **[4:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=290)** And this is what I'm talking about when I talk about the reasoning power and the artificial understanding power of the LLM on the back end, that is artificially understanding the book with help of RAG, to be able to really help me interact with the book, and in this case, to be able to do it to create a presentation around that book.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=309)** So that was the exercise.
>
> **[5:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=310)** I gave you the Flatland PDF.
>
> **[5:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=312)** You have all of the code from Space Cadets.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/solution-complete-rag-application?u=76281980&t=314)** See if you can do it yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), this, (3), let (3), public (1), abstract (1)
> **Env Vars:** pdf (4), rag (2), sql (1), llm (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (2)
> **Code Identifiers:** create_db (1)
> **Definitions:** is a  (1)


### 4. RAG and Ops

> [↑ Back to Table of Contents](#table-of-contents)

#### Extending RAG with ops
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=0)** Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=1)** To this point, you've built a pretty sophisticated application.
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=5)** You started by creating a chatbot using the OpenAI APIs, which you then extended with RAG to make it a specialist on a book.
>
> **[0:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=13)** In the course, you've been using the novel Space Cadets, and for your last exercise, you explored taking a public-domain book to see if you could build your own.
>
> **[0:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=21)** But now let's revisit ops and the type of things that you need to consider with LLMOps.
>
> **[0:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=28)** The chatbot already has logging and some human feedback, which is a great start, but I'd like to explore more and go a bit deeper with you.
>
> **[0:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=35)** There's so much that you can do with ops that it will take many courses, but we're going to go into a few of the more important ways that you can amend and update your application to get it into a position where you can continually monitor, maintain, and update it.
>
> **[0:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=49)** We'll start by revisiting logging, and we'll implement a much more robust logging mechanism than the simple files that we were writing out earlier.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=57)** This will include logging to the console for development and debugging, as well as maintaining long-term logs to better understand the behavior of our application. With Node.js, there's an excellent library called Morgan that you can use.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=70)** I'll take you through setting it up and updating our server to do logging with it.
>
> **[1:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=76)** Then there's metrics.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=77)** We need to measure how our site is performing at some tasks.
>
> **[1:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=81)** And this will help us find bottlenecks or places where we might want to have better performance, particularly, if we're getting negative feedback from our users around some scenarios and increased performance might impact that positively.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=93)** And we'll use a technology called Prometheus and a Prometheus client for that.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=97)** Third, we'll look at versioning and version control, and we'll implement code that makes your application version-aware and allow you to maintain and update the version as you use the application.
>
> **[1:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=110)** And we're going to achieve this using an API called SemVer.
>
> **[1:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=113)** In later videos, we'll explore some much more sophisticated ops, such as handling new data and retraining or rebuilding your model and/or your RAG system.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=123)** But for now, let's get hands-on with logging, metrics, and version control.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/extending-rag-with-ops?u=76281980&t=127)** And we'll go through that next.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), node (1), find (1)
> **Code Keywords:** let (2), public (1)
> **Env Vars:** rag (2), api (1)
> **File Paths:** node.js (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Logging
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=0)** We're now going to roll up our sleeves and get hands-on in implementing three facets of good ops with our chatbot, and they are logging, metrics, and version control.
>
> **[0:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=9)** I'll start with logging.
>
> **[0:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=11)** This will require you to have two dependencies.
>
> **[0:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=13)** The first is the Morgan libraries and you can just npm install that.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=17)** The second is to have a JavaScript file that configures how you aim to log.
>
> **[0:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=22)** If this file is called logger.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=24)** js, you would just use it on your server like this simply by saying require('.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=30)** /logger').
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=31)** So let's take a look at that file next.
>
> **[0:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=33)** You can get the full file from the GitHub repo for this course.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=36)** But here's the first half of the file.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=38)** It has requirements on the Winston and Path libraries, so be sure that they are installed.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=44)** It then defines the log formats that you want to write your output to.
>
> **[0:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=48)** Here you specify that you want to output the timestamp and if there are errors, output the entire error stack.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=54)** The spectacularly named splat() method is useful for printing different types of objects.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=60)** Consider it to be a Swiss Army knife approach.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=62)** Instead of you needing to define lots of different handlers for different objects, Winston can just infer them and use that with splat.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=70)** Note that we also tell it to output in JSON format.
>
> **[1:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=75)** We can then create the logger object.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=77)** The important thing to note here is the transport section.
>
> **[1:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=81)** It's smart enough to filter logs the way that we want.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=84)** So in this case, we put all of our errors into error.
>
> **[1:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=87)** log, and then everything, including the errors, into combined.
>
> **[1:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=91)** log. And here's the second half of the file.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=94)** And it's continuing to define how we write the logs.
>
> **[1:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=98)** Now if we're not in production, for example, if we're running on our developer box, then we'll also log directly to the console for our convenience.
>
> **[1:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=107)** Finally, we want to create the stream object with a write function on it.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=111)** And this will then be used by Morgan in our server.
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=114)** js to write the logs.
>
> **[1:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=116)** All of the logic for determining what and where to write is kept separate in this file to avoid our server getting spaghetti code.
>
> **[2:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=124)** At the bottom, we'll export the logger.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=127)** So now let's go back to the server to see how it will work.
>
> **[2:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=130)** Recall these lines are in the server.
>
> **[2:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=132)** They're including Morgan and the logger that we've just defined.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=136)** Now within our server, we can initialize Morgan to use the stream that logger.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=141)** js set up with this line.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=143)** Now it's as simple as adding debug messages whenever we want to use logger.
>
> **[2:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=147)** debug.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=148)** So for example, in the queryChromaDB function where we do our RAG, we could log it like this, and we could log the message that we received from the user at the top of the function, and the response from the query at the bottom of the function.
>
> **[2:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=162)** Feel free to log debug functions wherever you like, or explore where I put them in the code, which you can find in the repo.
>
> **[2:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=169)** But in addition to debug messages, we can also log error messages.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=173)** And one thing missing from our server was handling server-level errors.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=178)** So here's how to add that.
>
> **[2:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=179)** And note that we're using logger.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=181)** error instead of logger. debug.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=184)** So we can separate those out into an error log also should we want to.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=188)** And here's an example of the logs running when you start the server.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=192)** You can see things like clients being connected and disconnected.
>
> **[3:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=195)** It's all flagged with lots of different info.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=198)** Should I hit any errors, they'll show up here, too.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=201)** But fortunately, my code is working fine.
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=203)** I'd encourage you to implement the logging code and then sprinkle logs in the appropriate places to help you debug and understand the flow of your code.
>
> **[3:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=211)** You can also remove them later if the console is getting too verbose.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/logging?u=76281980&t=215)** So next up, we'll take a look at metrics.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), require (2), let (2), case, (1), finally, (1)
> **CLI Commands:** npm (1), find (1)
> **Env Vars:** json (1), rag (1)
> **Analogies:** for example (2)
> **Warnings:** note that (2)
> **Prerequisites:** install (1), set up (1)
> **Code Identifiers:** querychromadb (1)
> **Cross-References:** go back to (1)

#### Hands-on logging
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=0)** So to this point, we've now created the fully RAGable version of our application, our chatbot.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=6)** We were able to take a Chroma DB, take a book, slice it up, store it in the Chroma DB, and then change our chatbot to be able to search that for context that would add to our chat message so that we were getting great information back.
>
> **[0:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=19)** So now, as we move on in the app's journey, we've been looking at logging metrics and version management.
>
> **[0:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=25)** Previously, we looked at logging and I want to now start getting hands-on and showing you the code for logging.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=31)** This is going to be using Winston, and we're going to start by taking a look at the logger.js file that we spoke about in the slides and how to implement that in Winston.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=43)** So if you're working from the start directory which we provided in the GitHub, your logger.js is going to look like this.
>
> **[0:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=50)** So I've done some of the environment for you, for example, showing what to do if it's in production, creating the stream object, and outputting it.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=57)** But there's a couple of things that you need to update in here.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=60)** And this is what we covered in the slides.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=62)** So first of all, it's like, how do we create the log format?
>
> **[1:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=66)** What are the things that we want to log?
>
> **[1:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=68)** So if I go in and we start working on those, it'll be winston.format.Timestamp() will be the first thing in our log.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=77)** And then let's do winston.format.errors().
>
> **[1:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=82)** And when we have an error, let's put out the entire call stack, the entire error stack so we can see everything.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=88)** And then my personal favorite part of Winston is when you do a splat.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=94)** And again, what that's going to do is like our data may not always be in the same format, the collections may be structured differently.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=101)** The name-value pairs may be structured differently, but splat just takes that regardless and throws it all into an object that we can output.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=109)** And then we want to output that and JSON.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=111)** So I'm just going to say winston.format.json().
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=114)** And we are now good to go.
>
> **[1:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=117)** We've defined our log format that we're going to use within our server.
>
> **[2:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=121)** But of course, we still need to create the logger itself in Winston.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=125)** And by the way, don't forget we have to require Winston up here.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=128)** So in your Node package, you would have Winston installed.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=131)** If you're running this and you get an error, it may be that you haven't installed Winston yet. Okay.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=136)** So what is our logger going to look like.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=139)** So I'm going to start by saying winston.createLogger.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=143)** And the first thing I want to do is like just define the level of logs that I want to output.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=148)** And that's going to be an environment variable called log level.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=153)** And so all of those kind of things or ones that are defined as info.
>
> **[2:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=158)** So that's the type of logs that I want.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=160)** The format for these logs, and all of this will be documented in Winston.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=164)** If you want to look into the details about what they are and why I chose them, but this is generally the most common way of doing it, is that you get stuff from the environment that's generally seen as log level.
>
> **[2:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=173)** And I just in my case, I also want to add any info to that.
>
> **[2:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=176)** The format that I want is what I defined earlier as my log format.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=181)** So this was this code up here that we created.
>
> **[3:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=184)** The default meta is because it's my RAG chatbot.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=188)** So I'm just going to say watch out for things on my RAG chatbots.
>
> **[3:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=191)** So I'm going to say the service that I'm using is the rag-chatbot.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=196)** And then finally, is the transports.
>
> **[3:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=198)** And that really is like, where are we going to write all of this stuff?
>
> **[3:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=203)** So instead of watching me type all that out, I'm just going to paste it in.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=207)** So here is a case of, if you recall, we were talking about what's really nice about this is instead of throwing everything into one file and trying to fish it out, we can do that.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=216)** But as well as that, we can then also, for example, filter out the things that are errors.
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=221)** So what I'm saying now is in my transports, I'm going to do two things.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=225)** Number one, I'm going to have a transport for things that are of level error and put that in my error log.
>
> **[3:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=232)** And then everything else, including the errors, will be in my combined log.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=236)** So I've now specified Winston to be able to use this log format.
>
> **[4:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=242)** So timestamp error splat, put it out as JSON.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=245)** All my errors will go into the error log and everything else will go into the combined log.
>
> **[4:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=249)** So this is now giving me my logger.js that I'm now going to export.
>
> **[4:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=255)** So let's take a look at our server next and see how the server is going to use this, and use this for logging as we're doing various things within our application.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=265)** Okay. So here's our server.js which is our Node.js back end for our chat server.
>
> **[4:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=271)** It's the same one that we've been using throughout the course.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=274)** This is the one that we updated to have all of the RAG stuff going on.
>
> **[4:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=279)** And what we want to do now is extend that to be able to use the logger.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=283)** Okay.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=283)** So first of all, we created that logger file and we want to make sure that we're using that logger file as well as using Morgan.
>
> **[4:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=291)** So I'm just going to paste in the code. So we'll see.
>
> **[4:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=294)** But remember that file was called logger.js.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=297)** So in order to use that, we can just say require('./logger').
>
> **[5:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=301)** And it will use that.
>
> **[5:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=302)** And then that has a dependency on the Morgan library.
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=305)** So we're going to use that.
>
> **[5:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=306)** Later, we'll look at the metrics and versioning.
>
> **[5:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=308)** So I'm going to skip over them for now and just focus on the logger.
>
> **[5:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=312)** So the next thing that we're going to have to do is, of course, we need to initialize our logger to be able to use it.
>
> **[5:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=319)** So how do we do that?
>
> **[5:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=320)** Well, let's take a look.
>
> **[5:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=323)** I'm going to type out the code here.
>
> **[5:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=325)** Remember, it was using Morgan.
>
> **[5:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=326)** So I'm just going to say in my app, I'm going to use Morgan.
>
> **[5:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=331)** I'm going to do a combined log.
>
> **[5:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=334)** And I'm going to stream that out to my logger.stream.
>
> **[5:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=340)** And remember that logger.
>
> **[5:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=341)** stream was defined in that logger.js file that we looked at just a moment ago.
>
> **[5:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=346)** Okay.
>
> **[5:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=346)** Now that we've specified that we're going to use Morgan and we've specified what our logging stream is, let's look at some places where there's opportunities to do that logging for us.
>
> **[5:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=356)** Now there's one here that we'll do a little bit later on in a later video, we're going to do metrics and we've got to gather the metrics and then log them.
>
> **[6:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=363)** But I'm going to skip over that one for now.
>
> **[6:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=365)** And you'll see that I've put these other places in here where you can actually have places where you're going to update the code and do things such as logging.
>
> **[6:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=373)** So if we scroll down a bit further, I have this one here that we're querying the Chroma DB.
>
> **[6:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=380)** What we're going to do when we query the Chroma DB is let's just put it like a little log message in there to say that we are doing this at this moment in time.
>
> **[6:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=388)** This one we're going to consider to be a debug message.
>
> **[6:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=393)** So I've given an example here, logger.debug(# PUT MESSAGE HERE).
>
> **[6:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=397)** And what would that look like?
>
> **[6:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=399)** Well, we say maybe we want to say we're querying the Chroma DB and we're specifying what the user message is.
>
> **[6:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=405)** So that would look like this, logger.debug.
>
> **[6:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=407)** And then I just have a string query and Chroma DB with the message, and I just add that message to the string.
>
> **[6:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=413)** It's really as simple as that.
>
> **[6:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=415)** I've put this in as a debug message for the logger.
>
> **[6:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=419)** If you scroll down, you'll see there's a few other places where I've asked to do logging messages.
>
> **[7:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=424)** There's one here.
>
> **[7:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=425)** So for example, if we did not define the ragQueryDuration, we could put a logger message in here for that.
>
> **[7:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=433)** So let me scroll down and I'll show you what that looks like.
>
> **[7:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=436)** And again, it's just going to be putting in an error.
>
> **[7:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=439)** And do note that it was going to be a logger error message, not a logger debug message.
>
> **[7:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=443)** So it will get filtered out.
>
> **[7:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=445)** We report on errors and we report on combined.
>
> **[7:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=447)** So this one would appear in the filtered-out errors one.
>
> **[7:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=451)** So I'm just going to say, hey, there's an error here.
>
> **[7:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=453)** Like if I didn't define something, we'll put out an error there.
>
> **[7:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=457)** And then finally, there's a logger debug message.
>
> **[7:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=460)** Maybe we should put one there.
>
> **[7:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=461)** And at this point, we know the results of the query from Chroma DB.
>
> **[7:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=465)** So I'm just going to write out what those results are to the debug log so that we can see.
>
> **[7:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=471)** And if there's any issues, we can actually debug them using that.
>
> **[7:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=475)** resultString, if you recall from earlier, was we do our RAG query against the database, we get a bunch of documents back, we lump them together into a string that we use to set the context.
>
> **[8:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=485)** So now I'm just going to write those out to my logger.
>
> **[8:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=488)** So if we're getting, for example, poor results when we're ragging, we can take a look at what our result string was.
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=493)** And maybe we're not getting good stuff back from the database, and that will help us in our ops to be able to think about how we design the database or how we design our RAG queries.
>
> **[8:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=503)** Okay. So we want to do a little bit more here.
>
> **[8:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=505)** So some other logging that we want to think about for different exceptions, different things that are going on within the application.
>
> **[8:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=512)** Again, to help us in our overall ops and to help us to be able to fix any problems that we have.
>
> **[8:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=519)** So in this case, there is unhandled rejections as we're communicating with the back-end server.
>
> **[8:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=524)** There's uncaught exceptions and we want to be able to log them.
>
> **[8:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=527)** So I've made it a little bit simpler for you by just commenting out the code here.
>
> **[8:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=531)** But it would be good still to understand what is going on in these.
>
> **[8:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=536)** So I'm going to just delete this comment and uncomment this.
>
> **[9:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=541)** So here is a case of something went on in my system, something was rejected with all of my asynchronous communication.
>
> **[9:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=549)** And if you think about this communication between the web front end and this back end, this communication between this back end and the Chroma DB, this communication between this back end and the back end API from OpenAI.
>
> **[9:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=562)** In any of these places, there could be errors happening.
>
> **[9:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=565)** We don't know where that actually happens.
>
> **[9:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=567)** So here's a case of if we capture something like that, let's log that and specify what the reason was, and that will help us find it.
>
> **[9:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=574)** And then similarly, if there is an uncaught exception, something went wrong, instead of crashing everything or maybe having corruption in our data, again, let's log that as an error, let's specify what the details are, and then move on.
>
> **[9:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=588)** And this will just help us as we're maintaining and keeping our application running smoothly by understanding where issues happen and logging them out so that we can work on them.
>
> **[9:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=599)** Again, it's just good ops practice.
>
> **[10:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=602)** So this is the logger.js file that specifies Morgan for logging.
>
> **[10:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=606)** And here's where I've added some endpoints into the server to do the logging.
>
> **[10:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=611)** You'll notice that we're going to be doing logging, metrics, and versioning.
>
> **[10:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=614)** So in the next video, you're going to be looking at how to do metrics and how to set them up.
>
> **[10:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-logging?u=76281980&t=619)** And then after that, we'll come back and we'll do hands-on for the metrics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (2), require (2), case, (2), finally, (2)
> **Env Vars:** rag (5), json (2), put (1), message (1), api (1)
> **File Paths:** logger.js (6), winston.format.json (1), server.js (1), node.js (1)
> **Analogies:** for example (4), it's like (1), such as (1)
> **CLI Commands:** node (2), make (1), find (1)
> **Definitions:** is a  (2), defined as (1), is an  (1)
> **Code Identifiers:** createlogger (1), ragqueryduration (1), resultstring (1)
> **UI Navigation:** scroll down (3)

#### Metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=0)** Okay.
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=0)** Next, we're going to take a look at adding metrics to our site to measure its usage and its performance.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=6)** And we're going to consider metrics as a way to gather new information from our application, which will help us understand things like the volume of usage of certain functions as well as their performance.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=17)** And we'll achieve this using a tool called Prometheus.
>
> **[0:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=20)** Prometheus has both server and client flavors, and we're going to use the client to gather and store the metrics.
>
> **[0:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=27)** And then the server has tools that will allow you to view and report them.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=31)** We're just going to use the client in this course, and you can install it in Node.js as prom-client.
>
> **[0:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=38)** You'll then use it like this in a metrics.js file, which will be included in your chat server a little later.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=45)** Then once you have a client, you can create a registry on it which will be used to collect the metrics.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=51)** So next up, we'll define the metrics that you're going to collect.
>
> **[0:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=54)** Well there's lots of ways that you can collect them.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=57)** And we're going to look at two of those.
>
> **[0:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=58)** First is the histogram, which as its name suggests, collects metrics into buckets so you don't have to process them later.
>
> **[1:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=66)** So, for example, if you want to catch the HTTP request metrics, this histogram will collect all of the calls and categorize them for you into buckets where the call was, for example, less than 0.1 of a second between 0.1 and 0.3, between 0.3 and 0.5, and so on.
>
> **[1:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=84)** The Prometheus client will actually handle all of that automatically for you.
>
> **[1:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=89)** And another metric type is the Counter, which, as its name suggests, is used to count things that have happened within your application.
>
> **[1:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=96)** And you can define whatever you want, of course, here.
>
> **[1:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=99)** But in this case, I've put counters for calls to the OpenAI API and feedback submitted by my end users.
>
> **[1:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=106)** Then, once you've created all of the different types of metric that you want to use, the next and final step is to register your metric function with the register that you created earlier, and then export the register along with all of those metric collection functions.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=123)** Your chat server can then use this as we'll see next.
>
> **[2:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=127)** Okay. So now let's go back to server.js and include those metrics that we've just defined.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=133)** The first thing we have to do is include the file that we just created that instantiated the Prometheus client, created a register, defined the metrics gathering functions, and then exported them.
>
> **[2:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=144)** In that case, that file was called metrics.js.
>
> **[2:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=148)** So I include it simply like this.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=151)** And now it's time to gather the metrics.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=153)** Recall that one of our metrics was a histogram to collect the time that it takes to do an HTTP request.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=160)** And in this case, we're going to use that metric to gather how long it takes to go from the user request to the response coming back to them.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=168)** So that's the entire lifecycle of getting a request, performing the RAG search on the database, which involves encoding the request text, searching for similar vectors, decoding them, and each step of that requires a round trip to the OpenAI API to decode the embeddings, before finally calling the OpenAI API again to get a chat completion, get that response, and then send that back to the client. That's a lot.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=194)** So we start capturing right away.
>
> **[3:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=196)** And when the entire request is finished, we can measure the time difference and we can use the metric HTTP request duration microseconds histogram that we created earlier to capture that.
>
> **[3:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=207)** Now we expect that to take a little while, even though we're capturing in microseconds, the histogram to show the end user is probably better in seconds.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=215)** So we'll divide the duration by 1,000 and store that.
>
> **[3:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=219)** Note we can also store labels such as the request method, the path, and the status code if we want to subdivide our metrics even further, and we would expect the transaction time for failed queries to probably be quicker than for successful ones, because they wouldn't be doing all that round tripping, for example.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=237)** Another useful piece of code is this.
>
> **[3:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=239)** And this creates an endpoint that publishes the metrics.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=243)** So if you're using a Prometheus server, it can scrape this to give you a pretty print of all your metrics, but you don't really need one.
>
> **[4:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=250)** And you can just take a look at this endpoint manually, which I'll demonstrate a little later.
>
> **[4:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=255)** You can then add your metric functions where appropriate in your code.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=260)** So, for example, the ragQueryDuration metric can easily be added into the queryChromaDB function where all your RAG occurs.
>
> **[4:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=268)** We'll capture a timestamp at the top of the function, and then we'll run all the RAG code, and then we'll run the ragQueryDuration metric and observe the difference in time between the start time you captured and the current time.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=281)** And it's really as simple as that.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=283)** In the repo, you'll see the server code, and you can explore that server code to see other places where I put in metrics.
>
> **[4:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=289)** And maybe you can even come up with some of your own.
>
> **[4:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=291)** And here, you can see an example of the metrics that are collected.
>
> **[4:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=295)** And this is the endpoint HTTP localhost:3000/metrics, where many metrics and not just the ones you've explicitly defined are captured.
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=305)** And if I zoom in on the histogram for the RAG, you can see the data captured in a short session.
>
> **[5:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=310)** My average query duration was 3.6 seconds, for example.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=314)** As you experiment with metrics, you can learn a lot more about your application's behavior, particularly in production, and from there, you can learn how to improve it.
>
> **[5:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/metrics?u=76281980&t=324)** Next up, we're going to take a look at version management.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), rag (4), api (3)
> **Code Keywords:** case, (3), function (3), this. (2), let (1), while, (1)
> **Versions:** 0.1 (2), 0.3 (2), 0.5 (1), 3.6 (1)
> **Analogies:** for example (5), such as (1)
> **File Paths:** metrics.js (2), node.js (1), server.js (1)
> **Code Identifiers:** ragqueryduration (2), querychromadb (1)
> **CLI Commands:** node (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)

#### Hands-on metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=0)** So previously, we've been looking at our application, our chat application.
>
> **[0:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=3)** We've added RAG to it and we've been looking at extending that RAG with ops.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=7)** We saw logging and then we saw how to use logging and to do hands-on logging.
>
> **[0:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=11)** And now just recently, we looked at metrics and in particular, the Prometheus client for metrics.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=16)** So in this video, we're going to get hands-on and show how to configure that client.
>
> **[0:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=20)** And in your directory, you'll have this metrics.js file and we're going to be working in that one as well as working in our server.
>
> **[0:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=27)** So here's our metrics.js file.
>
> **[0:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=29)** And you can see it requires the Prometheus client.
>
> **[0:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=31)** And that Prometheus client is something that we'll be installing a little bit later as we run the server.
>
> **[0:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=36)** But what I've done is within the Prometheus client, we wanted to capture some different metrics for different things that are going on.
>
> **[0:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=43)** For example, the HTTP request duration, the RAG query duration, how long it took to do calls to OpenAI, and then feedback.
>
> **[0:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=52)** So as our users are giving us feedback with their RLHF that we were looking at in an earlier video, we also want to capture metrics around that.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=60)** We can see we looked at within the video different ways that Prometheus can capture data such as histograms and counters.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=65)** And we're going to be using those here.
>
> **[1:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=67)** So let's first look at the httpRequestDurationMicroseconds.
>
> **[1:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=71)** Now what are we going to do with this.
>
> **[1:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=73)** Well, we're going to make a Prometheus client histogram out of that.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=77)** So we need to specify what that's going to look like.
>
> **[1:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=79)** So I'm going to give it a name.
>
> **[1:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=81)** And that name is going to be http_requests_duration_seconds.
>
> **[1:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=90)** And I'm going to give it a little help which is just a hint that's a little bit more human readable duration of HTTP requests in seconds.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=101)** And then because it's a histogram, the histogram is going to have buckets that it stores things in.
>
> **[1:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=106)** And I want to give those labels.
>
> **[1:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=107)** So I'm going to say label names for this.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=109)** The things we're interested in are the methods that we're calling, the routes that we're taking, and whatever code that we're actually executing.
>
> **[1:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=119)** And then finally, the actual buckets themselves in seconds.
>
> **[2:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=123)** And I'm going to say like what I'm interested in are the buckets, for example, where it took less than 0.1 of a second, where it took between 0.1 and 0.3, where it took between 0.3 and 0.5, and maybe then between 0.5 and 0.7, another bucket for up to one second.
>
> **[2:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=141)** And then after that, we'll do ever-increasing bucket sizes, because this would be a case of where we're drastically failing as if it's taking 10 seconds.
>
> **[2:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=149)** And it'd be good to see the queries in that.
>
> **[2:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=152)** But again, it's up to you how you define those buckets and those bucket sizes.
>
> **[2:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=155)** And for Prometheus client, does the rest, which is really nice.
>
> **[2:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=159)** So that's it for us to to define the histogram for the Prometheus client for HTTP request.
>
> **[2:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=164)** In our server code, we'll switch to in a moment, we'll see then how we can actually measure this and store it in these buckets.
>
> **[2:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=172)** So the RAG query duration is going to be very similar.
>
> **[2:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=175)** And we're just going to define like the name, the help.
>
> **[2:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=178)** And in this case, I'm just going to define the buckets because we're not doing any HTTP verbs or anything like that.
>
> **[3:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=183)** We're just going to say here's how long it took for the RAG query, and again, the duration in second.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=188)** Up to 0.1, between 0.1 and 0.5, up to one, up to two, up to five, up to 10.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=192)** That type of thing.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=194)** The OpenAI API charges us money to use it, so sometimes we want to be able to see what it is that we're actually doing and how many times we're using it.
>
> **[3:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=202)** And maybe we want to consolidate how many times this application has called it against the bill that we actually get.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=208)** So we've created a counter here for the number of calls that we've done.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=212)** And this counter doesn't require any specification other than the name and the help.
>
> **[3:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=216)** So I'll just paste them in.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=218)** We're going to gather what we're going to call openai_api_calls_total.
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=221)** And again something human-readable.
>
> **[3:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=223)** That's the total number of calls made to the OpenAI API.
>
> **[3:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=228)** And then finally, our feedback counter with the RLHF stuff that we implemented in an earlier chapter.
>
> **[3:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=233)** We were gathering feedback from our users about text being good, bad, or neutral.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=238)** So let's count that.
>
> **[3:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=239)** We're going to call that user_feedback_total.
>
> **[4:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=241)** It's a counter.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=243)** The help for that is going to be the total number of feedback submissions and then the label names for that, we're just going to sort that out by type.
>
> **[4:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=256)** It was good, bad, neutral, that type of thing.
>
> **[4:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=259)** So we now have a counter for them.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=260)** We have a counter for our OpenAI API calls, we have a counter for the RAG query duration, and we have a counter for the histogram.
>
> **[4:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=269)** So now we've finished and we've defined what our Prometheus is going to gather.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=273)** And when we export, we're just going to export all of these things, right?
>
> **[4:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=277)** We're going to export the registry we're going to call register.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=280)** And then each of these metrics, these custom metrics, we're going to output them as module. exports.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=285)** And we'll see on the server.
>
> **[4:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=287)** Then we're going to import that so that we can start doing all of these histograms and counters.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=292)** So let me save that.
>
> **[4:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=294)** And then I will switch to our server.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=297)** Okay. So now we're on the server.
>
> **[4:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=298)** And what we've done within the server is we've already done the logging as you saw in the previous video that have been added here.
>
> **[5:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=305)** So the next thing that we want to do is the metrics themselves.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=309)** So that file that we were editing a moment ago that had all the Prometheus client definitions, we called that metrics.
>
> **[5:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=316)** So I'm going to say const metrics = require('./metrics').
>
> **[5:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=323)** So now that's going to be imported to my server so I can start using it.
>
> **[5:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=328)** So where do we want to start gathering some metrics?
>
> **[5:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=331)** Well, first of all is this HTTP requests duration metric that we were speaking about earlier on, and the code to actually log that duration.
>
> **[5:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=340)** It's pretty long.
>
> **[5:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=341)** So I'm going to just paste it in and we can take a look at it piece by piece.
>
> **[5:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=345)** Okay.
>
> **[5:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=346)** So what's going to happen here is whenever we're using our app, we're going to take a look at the request, we're going to take a look at the response, and we're going to see the time between them.
>
> **[5:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=355)** And we do that where upon the request we measure date.
>
> **[5:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=358)** now for the time.
>
> **[5:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=359)** And then when things have finished, we'll measure the date.
>
> **[6:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=362)** now at the time it completed, subtract the start, and that will give us the duration.
>
> **[6:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=369)** If you recall, then we had that histogram that we called httpRequestDurationMicroseconds.
>
> **[6:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=374)** So in this one now, we can just say metrics.
>
> **[6:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=379)** httpRequestDurationMicroseconds, add a label, and that label will be the request method that came in, the path to that, and then its status code, whether it worked or not, and stuff like that.
>
> **[6:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=391)** And then give us the duration.
>
> **[6:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=392)** The duration is in microseconds.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=394)** So to convert it to seconds, we divide by 1,000.
>
> **[6:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=397)** Otherwise, we're going to put out an error and then we'll move on when we're done.
>
> **[6:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=401)** So this now is like within Node.js that we've plugged into its infrastructure for managing the HTTP request and response, measure the time between the two of them, and log that.
>
> **[6:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=413)** And because that's been logged in a histogram, it'll be put into those different buckets so we can measure like how the app is being used across them.
>
> **[7:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=420)** That's one of the really nice things about Prometheus and how it does this for us.
>
> **[7:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=425)** Okay.
>
> **[7:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=426)** So next when we're collecting the metrics, you can use the Prometheus server or you can just expose the metrics endpoint on your server for a little bit more of a primitive look, but it's good enough for us to see how we're going to be able to look at the metrics and how we're going to be able to establish what type of metrics we've gathered and just generally see if it's working.
>
> **[7:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=447)** So I've specified this path on our Node server, which is /metrics.
>
> **[7:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=451)** So if we call that, we'll display the metrics endpoint.
>
> **[7:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=455)** So to do that, I'm going to delete this, and I'm just going to say to the response, I'm going to set the content type so that the browser can read it.
>
> **[7:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=466)** And that content type will be our metrics, register that we defined earlier, and the content type of that.
>
> **[7:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=474)** So this was stuff that we had defined in the metrics.js file a moment ago.
>
> **[7:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=479)** And then in the response, I'm just going to end the response by saying await metrics.register.metrics.
>
> **[8:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=489)** And that's just going to output all of the metrics that it collected for us.
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=493)** So we're going to get that dump.
>
> **[8:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=494)** And we saw it in the slides earlier on, it's going to get that dump of all those metrics so that we can see them and inspect them.
>
> **[8:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=500)** It's not the most beautiful of front ends, but it's something that will allow us at least to get a rough look at our metrics.
>
> **[8:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=505)** And if you want to learn more about Prometheus, to be able to use the Prometheus server, to get more beautiful reporting, you can find that on the web.
>
> **[8:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=511)** But I'm just going to work with this one for now.
>
> **[8:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=514)** So now that you've done that, all of the rest of the metrics I've actually implemented for you, and you can take a look through the server.js file and see them for yourself.
>
> **[8:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=522)** If you want to do a search on metrics, you'll find things like, for example, this one where for the RAG query duration, what I did was observe the difference between now and the start of the doing the RAGing.
>
> **[8:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=534)** I collected the date time at the start of the RAG, as you can see here.
>
> **[8:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=538)** And then in metrics, I was just able to say, well, if we've done this, then we're going to observe the current time and date minus the start divided by 1000.
>
> **[9:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=548)** So the RAG query duration metric will be stored in something like this, for example.
>
> **[9:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=553)** And if I keep like just searching different finds, again, there's a RAG query duration here and the socket.
>
> **[9:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=559)** on chat message, and all of those different metrics that we spoke about, for example, the open API calls, they're being logged here.
>
> **[9:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=566)** In this case, we're making a call to OpenAI's API.
>
> **[9:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=569)** So we're just incrementing that counter so we can count how many times we're doing it.
>
> **[9:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=573)** And as you look through the server code, you'll see all these different types of metrics that we've gathered.
>
> **[9:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=578)** Again, for the reinforcement learning with human feedback, that came in on the socket.on feedback.
>
> **[9:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=584)** So we can see here that I'm just counting, increasing the count of feedback that we had here.
>
> **[9:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=589)** So we have another feedback counter metric.
>
> **[9:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=592)** And if something happens, if there was an error, for example, while we were gathering that or while we were initializing that, we're just logging that out.
>
> **[9:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=599)** So all of those metrics have been added into the server.
>
> **[10:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=602)** I wanted to show how to do a couple of them by ourselves.
>
> **[10:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=604)** And now your server is capable of gathering metrics using the Prometheus client.
>
> **[10:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=610)** So once we have those metrics, the last of the three of these ops that we want to look at now is version management.
>
> **[10:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=616)** So in the next video, we'll take a look at that.
>
> **[10:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-metrics?u=76281980&t=618)** Thank you.

> [!info]- Semantic Content
>
> **Env Vars:** rag (10), http (6), api (5), rlhf (2)
> **Code Keywords:** let (3), this, (3), this. (2), finally, (2), switch (2)
> **Versions:** 0.1 (4), 0.5 (3), 0.3 (2), 0.7 (1)
> **Analogies:** for example (6), such as (1)
> **Code Identifiers:** httprequestdurationmicroseconds (3), http_requests_duration_seconds (1), openai_api_calls_total (1), user_feedback_total (1)
> **File Paths:** metrics.js (3), node.js (1), server.js (1)
> **CLI Commands:** node (2), find (2), make (1)
> **Cross-References:** as you saw (1), previous video (1), in the next (1)

#### Version management
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=0)** So now let's switch gears to the third part of the ops implementation for our server.
>
> **[0:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=5)** And that's versioning.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=6)** Versioning is, of course, very easy to do.
>
> **[0:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=9)** Whenever you change or update something, you can change the version number, but it's also very easy to become inconsistent.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=16)** If you're currently at version 1.0.1 and you change something, does it become 1.0.2 or maybe 1.1.1 or maybe 2.0?
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=24)** Well, who knows?
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=26)** So to take some of the subjectivity out of this, a technique using semantic versioning can be adopted.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=32)** And when that's backed up by a library, which helps you have some discipline about your versioning and which allows you to set that versioning in a way that the app can be version-aware, you can now begin to have a clear versioning strategy.
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=46)** And to use this, you're going to create a new file and give it a meaningful name like version.js.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=51)** This file will use a configuration file, maybe version.json to store the version number and metadata about any changes.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=59)** Version.js will export two functions, getCurrentVersion() and updateVersion(), which will read and write the version numbers as their name suggests, and your server.js will have endpoints to allow you to read that version or to set the version.
>
> **[1:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=75)** These endpoints will use the getCurrentVersion() and updateVersion() functions within version.js as their back end.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=83)** So now let's take a look at version.js and how you'll implement these functions.
>
> **[1:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=88)** At the top of the file, we're going to include the libraries that we need including SemVer.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=93)** We'll also specify the file that we'll write with version info, and we'll just call that VERSION_FILE.
>
> **[1:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=100)** To get the current version, we use code like this which reads the version file.
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=104)** And then after parsing the version data from the file, it'll return that.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=109)** And if no version file is found, it will create one initializing it to version 0.1.0 by calling updateVersion() and passing that value in.
>
> **[1:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=118)** The update version is equally simple as you can see here, but one thing to note is the discipline that SemVer encourages you to follow, and that's the change types that trigger a version change.
>
> **[2:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=131)** For the three numbers denoting a version like 0.1.0, you should always change the first for a major change, the second for a minor change, and the third for a patch.
>
> **[2:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=142)** And when you formally update the new version with a call to the server's endpoints, you'll include the appropriate term.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=150)** So upon calling updateVersion(), the first thing that you'll see is that the version is read from the version file.
>
> **[2:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=157)** If there's no current file or any other error, it will consider the version to be 0.1.0. It will then take the type and the version number and create a SemVer object out of them.
>
> **[2:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=169)** If that's invalid, it'll throw an error.
>
> **[2:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=171)** Otherwise, it will write the version to the version file and log that that version was updated.
>
> **[2:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=177)** So now if we return to our server.js file, we'll create endpoints that will allow us to read and write the version.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=185)** Getting the version with a /version endpoint is pretty straightforward.
>
> **[3:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=190)** We just call getCurrentVersion() when we hit the /version endpoint and return whatever it returns to the user in the response, so they can then inspect it in their browser.
>
> **[3:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=202)** To make an endpoint that allows the version to be updated via the browser, you then use code like this.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=208)** Note that this should be secured in a real-world application.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=212)** You don't want users just to be able to update your version numbers.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=215)** Because the call will carry a payload, you'll post to this endpoint.
>
> **[3:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=220)** So the data containing the desired type, patch, minor, and major will be in the request body.
>
> **[3:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=226)** This will be passed to updateVersion() and if successful, a new version will be created and written to version.js with all of its details returned here.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=236)** They can then be sent to the end user in the response and if the version update fails, then this can be returned to the user, too, indicating we're still on the old version.
>
> **[4:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=248)** Now, within your application, it can initialize itself by calling the current version and rendering that to your end users with code like this.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=257)** So the expected behavior is.
>
> **[4:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=260)** As you run your app, you'll see it display the version number like this.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=263)** Then, if you want to update the version, you post the JSON payload containing the type, in this case, patch, and that will update the third number.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=273)** So after a successful update, you'll now see that the app is running on version 0.1.2. Okay.
>
> **[4:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=280)** So that was a lot.
>
> **[4:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=281)** You've gone through logging metrics and versioning.
>
> **[4:43](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/version-management?u=76281980&t=283)** So now let me show you the code and you'll see how straightforward it is to implement all of this advanced functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (3), this, (2), type, (2), switch (1)
> **Versions:** version 0 (2), 0.1.0 (2), version 1 (1), 0.1 (1), 1.0.2 (1)
> **File Paths:** version.js (5), server.js (2), version.json (1)
> **Code Identifiers:** updateversion (5), getcurrentversion (3)
> **Env Vars:** version_file (1), json (1)
> **CLI Commands:** make (1)
> **Best Practices:** you should always (1)
> **Warnings:** note that (1)

#### Hands-on version management
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=0)** So previously, we've built our server RAG application to do RAGing on the book, Space Cadets, and we saw how well that worked.
>
> **[0:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=7)** Then we extended that with some detailed logging and then extended that further with metrics gathering with Prometheus.
>
> **[0:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=14)** The third part of extending this RAG application with ops is actually going to do versioning and to use SemVer to do version management.
>
> **[0:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=22)** As we saw on the slides with SemVer, the idea is that we have a JSON file that contains our version information, and it looks as simple as this.
>
> **[0:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=30)** I'm starting my application at version 3 because if we think about it, our first chat application that didn't have RAG, and then we had a second chat application that did have RAG, and now we have a chat application that will have RAG plus logging plus metrics and version management.
>
> **[0:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=44)** So that one will be version 3.
>
> **[0:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=46)** So I'm just going to specify a JSON file that looks like this one.
>
> **[0:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=50)** The interesting part then happens in version.js.
>
> **[0:53](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=53)** And this is what we were looking at in the slides.
>
> **[0:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=56)** What we want to be able to use here is this SemVer.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=59)** So make sure that we have const semver = require('semver').
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=62)** This will be a dependency in Node.js that you'll need to install.
>
> **[1:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=66)** What we're going to do now with this one is provide these APIs to getCurrentVersion() and updateVersion().
>
> **[1:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=72)** Now remember, the whole idea is to make our application version-aware.
>
> **[1:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=77)** At any point, you could write your code and you could change your code to have any kind of versioning that you want, but to be able to connect that with a runtime version of your server so that your server understands what version it's built on, this is where SemVer is really, really useful.
>
> **[1:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=93)** So I'd say as you create code and push it, you would then also call your server with the details major, minor, patch as we had discussed.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=101)** And then that will update that .js file that we just looked at, and then the server will read from that .js file so it's aware of its own versioning.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=109)** But to be able to do that, we need to implement two functions.
>
> **[1:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=112)** And it's pretty simple where getCurrentVersion() is just going to read that file, the version file, version.
>
> **[1:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=118)** json that we just created, and parse the data from that.
>
> **[2:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=122)** And if there is no file there, then it's going to create a new file, and it's going to just say the version is 0.1.0. And then the next part, of course, then is updating the version.
>
> **[2:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=133)** And for updating the version, when we look at the server, we're going to create an endpoint.
>
> **[2:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=137)** And that endpoint will allow us to post to the server what we have done.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=143)** Have we done a major change, a minor change, or a patch change?
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=146)** And when we do that, the server will call this function.
>
> **[2:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=149)** It'll default to patch.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=150)** If we didn't actually define anything, it'll default to 0.1.0 if we don't actually have a version, but otherwise, if we do, then it will take a look at what type of update that we've done.
>
> **[2:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=162)** SemVer will then figure out the version from that, and if it's valid, it will create a new version for us.
>
> **[2:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=169)** So, for example, if we were on 0.1.0 and we pushed a major version, SemVer would be smart enough to say 1.0.0, not 1.1.0.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=180)** Stuff like that.
>
> **[3:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=181)** So a lot of that kind of logic that we'd have to figure out for ourselves is being done for us under the hood by SemVer.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=187)** And then once it's done with that, it'll write out the file to our JSON file.
>
> **[3:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=191)** So the version has been updated.
>
> **[3:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=193)** So we're going to export from this. This is version.js file.
>
> **[3:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=197)** We're going to export getCurrentVersion() and updateVersion().
>
> **[3:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=200)** So these functions are now available to our server.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=204)** Now if we look at our server file that we've been working along in these videos, first of all, if you recall, we did the logging, then we did the metrics.
>
> **[3:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=212)** Next up is we want to do the versioning.
>
> **[3:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=214)** So we've just created that file for the versioning and what we exported to functions in that one.
>
> **[3:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=221)** And so we're just going to make sure that this server is able to access those functions.
>
> **[3:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=226)** And we say that we'd getCurrentVersion, updateVersion.
>
> **[3:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=231)** And they came from that file which was called version.js.
>
> **[3:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=235)** So we'll just say require.
>
> **[3:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=237)** It's in the same directory,so ./version.
>
> **[4:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=240)** So now we have those functions available to our server to be able to use them.
>
> **[4:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=247)** So if we scroll down to this endpoint that we've defined, app.
>
> **[4:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=251)** get/version, we want to be able to read the current version of the application and send that back to the user.
>
> **[4:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=258)** So let's take a look at how we would code that.
>
> **[4:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=261)** So recall we created that function.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=263)** All we have to do is say const version = await getCurrentVersion().
>
> **[4:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=270)** And then in our response, we'll just put it back as JSON.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=274)** We'll send back that version.
>
> **[4:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=277)** As simple as that.
>
> **[4:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=278)** So now we have an endpoint.
>
> **[4:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=279)** So when somebody calls our server with /version, it'll just return the version number that we have.
>
> **[4:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=285)** Next up, we want to be able to update our version.
>
> **[4:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=289)** Now you would want to secure this in a real application.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=292)** You don't want anybody to be able to go in and post /version/update.
>
> **[4:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=296)** You would only want an administrator or one of the coders to be able to do that.
>
> **[4:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=299)** But just for the sakes of this demonstration and for learning how to do it, I'm leaving it insecure.
>
> **[5:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=304)** But just do be careful of that if you're actually building an application.
>
> **[5:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=307)** So what's that going to look like?
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=309)** Well, we're going to be having something posted to us in the request body.
>
> **[5:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=314)** So we'll just say const {type} = req.body.
>
> **[5:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=316)** And then let's try to say const newVersion = await updateVersion() for that type.
>
> **[5:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=326)** That type is going to be a major, minor, patch, that type of thing.
>
> **[5:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=329)** And the update function is going to figure out how to manage a new version for us.
>
> **[5:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=334)** From that, we don't have to do all that spaghetti code within our server, it was all done within that versioning file for us.
>
> **[5:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=341)** And I can say then res.json, output the version which is the new version.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=347)** And we did put this in a try block.
>
> **[5:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=349)** So let's catch any errors.
>
> **[5:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=352)** Error, and we'll just say res.status, we'll give a 400 error to say
>
> **[6:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=361)** whatever the error message that we got back was we can report back to the user. Error.message, like so.
>
> **[6:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=368)** So now we've seen that we can read the version, we can update the version.
>
> **[6:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=373)** And now let's just update our code to actually show the current version so that when we launch our chatbot, it can say, hey, I'm version 3 or version 3.0 or whatever it was.
>
> **[6:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=383)** And if you recall, when we launch our application, we're going to be going to the slash route.
>
> **[6:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=389)** So like [http://localhost:3000](http://localhost:3000)/ is the root directory.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=394)** So when it does that we can just update the code to show the current version.
>
> **[6:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=398)** And what's that going to look like?
>
> **[6:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=400)** Well, that's going to be const version = await getCurrentVersion(), and then send that back in the response.
>
> **[6:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=408)** Send, maybe we'll say, welcome to the RAG application version.
>
> **[6:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=415)** And we'll say that's in string version like this and send that back.
>
> **[7:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=423)** I'm going to just get the right syntax coloring by putting in the correct backticks.
>
> **[7:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=427)** So I'll just paste it like so.
>
> **[7:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=429)** So now this is going to get the version using getCurrentVersion().
>
> **[7:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=433)** It's going to embed that in the string and we'll see, welcome to the RAG application.
>
> **[7:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=437)** So now we've done versioning, we've done metrics, and we've done logging.
>
> **[7:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=441)** Let's take a look at our chatbot as it's running with all of these.
>
> **[7:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=445)** So the first thing that we see is, hello, I'm the Space Cadets expert version 3.0.0.
>
> **[7:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=451)** Recall, we made that, our version was version 3.0.0.
>
> **[7:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=454)** And let's start having some conversations with it.
>
> **[7:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=456)** So tell me about Soo-Kyung Kim.
>
> **[7:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=461)** Is she friends with Patrice, who's another character?
>
> **[7:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=465)** Something like that.
>
> **[7:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=466)** Remember, I've actually tuned this bot to be one for helping with the public presentation, so it's going to angle the response in that direction.
>
> **[7:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=474)** So you could remove that system prompt if you wanted to just chat more in general about the book.
>
> **[7:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=479)** But we're getting some details back here.
>
> **[8:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=481)** I'm just going to say that was good because I want to log that.
>
> **[8:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=485)** How about favorite food?
>
> **[8:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=489)** Just want to log some of the behavior so we can look at it in the metrics.
>
> **[8:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=493)** So we've done a couple of things in here.
>
> **[8:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=495)** And just I'll say this was neutral.
>
> **[8:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=497)** So we've done some chats.
>
> **[8:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=499)** We've done some feedback.
>
> **[8:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=501)** Let's start by looking at the versions.
>
> **[8:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=503)** So if you remember earlier I said the version endpoints.
>
> **[8:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=506)** So it was HTTP 3000/version.
>
> **[8:29](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=509)** If I do that, we can see we're in version 3.0.0 is reported back.
>
> **[8:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=514)** And if I go back here, of course, we were seeing version 3.0.0. If we want to update that, we're going to do that with a curl.
>
> **[8:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=521)** So to update the version, as we saw on the slides, I'm going to curl.
>
> **[8:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=524)** But it was an HTTP POST, not an HTTP GET.
>
> **[8:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=528)** So I have to POST to the endpoint like this.
>
> **[8:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=531)** I'm going to say [http://localhost:3000/version/update](http://localhost:3000/version/update).
>
> **[8:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=538)** And then I need to put a payload in there, which was just going to be a JSON payload that I'm sending up.
>
> **[9:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=545)** So I'm going to say the content type of this payload is JSON which would be application/json.
>
> **[9:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=552)** And then the payload itself is going to be, remember, called that.
>
> **[9:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=557)** I could do major, minor, or patch.
>
> **[9:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=560)** I'm just going to say, in this case, it's a patch.
>
> **[9:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=562)** I hope I have the syntax correct.: "patch". Like so.
>
> **[9:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=567)** Okay. So now we can see that my post to the application worked.
>
> **[9:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=572)** My version has been updated to version 3.0.1. If I were to call it again, for example, it would now be updated to version 3.0.2. Or if I were to change this to say minor, it would now be 3.1.0. Again, this is the logic that SemVer has given me.
>
> **[9:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=589)** It's more than just changing the digits, but instead of, you might expect it to go to 3.1.2, but it realized the next version is a minor update.
>
> **[9:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=597)** So the patch update should reset to zero and we get 3.1.0. And if I just set the next version as a major, we'd expect this to become 4.0.0. And if I go back now to the application and I refresh it, we can see we're now version 4.0.0. So we can see that the versioning is actually working.
>
> **[10:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=616)** But now let's take a look at the metrics that we collected with Prometheus.
>
> **[10:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=620)** Now if you recall, we created an endpoint that we just called metrics.
>
> **[10:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=624)** So if we're looking at localhost 3000, all we have to do is say localhost 3000/metrics.
>
> **[10:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=630)** And now we can see the metrics that we'd actually collected.
>
> **[10:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=633)** And Prometheus is actually collecting a bunch of metrics by default for us.
>
> **[10:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=637)** So we can see that's a lot of the stuff that's in here.
>
> **[10:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=640)** But the ones that we specified that we wanted to collect, for example, remember my user feedback when I was having the chat?
>
> **[10:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=646)** I said there was one good message and one neutral message, and we see they're collected here.
>
> **[10:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=650)** I had a very short chat that just had two open API calls, and you can see they're collected here.
>
> **[10:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=655)** And if we wanted to take a look then, here's the RAG queries that we had made and the buckets that they were in.
>
> **[11:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=661)** And it looked like we did four RAG queries.
>
> **[11:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=664)** The histogram is a little bit unusual to see.
>
> **[11:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=666)** So the idea is like it's not going to sort each of them out for us.
>
> **[11:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=669)** It's actually going to say that where that fit in the total histogram.
>
> **[11:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=674)** So for example, nothing took up to 0.1 of a second.
>
> **[11:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=677)** We did four in total.
>
> **[11:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=679)** Two of them took up to 0.5 of a second, the four in total, then everything took up to one second.
>
> **[11:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=687)** So by definition, if it took up to one second, it also took up to two seconds, up to five seconds, up to 10 seconds.
>
> **[11:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=693)** That's why it kind of stacks it this way, rather than like sorting them out into the buckets for us.
>
> **[11:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=697)** That's just how Prometheus does it.
>
> **[11:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=700)** Our HTTP requests duration in seconds, we have pretty much the same thing.
>
> **[11:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=704)** So like I could see all of our HTTP requests we did, three of them took up to 0.1 second.
>
> **[11:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=709)** And as a result, it's in each of those buckets as a result.
>
> **[11:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=712)** And here you can see just everything else that's been going on within the application, all of the metrics that were collected for us.
>
> **[12:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=720)** So then finally, let's take a look at the logs that we collected.
>
> **[12:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=724)** So this was the window in which I ran the server just by typing node server.js as we've been doing all along.
>
> **[12:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=730)** And we can see all of our logs being connected in here as we're using the application.
>
> **[12:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=735)** So here you can see I ran node server.js.
>
> **[12:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=738)** It was originally server version 3.
>
> **[12:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=740)** I started doing some posts for example to make it version four.
>
> **[12:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=743)** And we can see that that actually happened.
>
> **[12:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=745)** And then some of the other logs that we were able to collect, the timestamps for them are all being collected in here.
>
> **[12:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=751)** I didn't get any errors when I was running it, so there's going to be no errors showing.
>
> **[12:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=755)** But if you did something to cause an error, for example, in your application, then you would see those errors showing here.
>
> **[12:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=761)** But this is the complete set of logs that I was able to connect.
>
> **[12:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=765)** Things like the new client connecting with its timestamp, the user ID with its timestamp, and just pretty much everything else that I did.
>
> **[12:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=772)** The 404 that I got when I tried to do GET /version/update, but you don't GET, you POST.
>
> **[12:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=777)** That actually got logged for me.
>
> **[12:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=779)** This got logged as an info.
>
> **[13:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=781)** And then when I did it correctly with a POST, we were able to update the version to 3.0.2, for example.
>
> **[13:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=788)** So this is my complete log file for the server that was collected doing that logging.
>
> **[13:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=793)** And again, you can log really on anything that you want to do.
>
> **[13:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=796)** So you can really just inspect how your application is running and how your server is working.
>
> **[13:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=801)** So that's pretty much it.
>
> **[13:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=802)** We've seen logs, we've seen metrics, and we've seen version control.
>
> **[13:27](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-version-management?u=76281980&t=807)** And they're all working within the application with endpoints where we can browse each of these.

> [!info]- Semantic Content
>
> **Versions:** version 3 (11), 0.0 (5), 0.1.0 (3), 0.1 (3), 3.1.0 (2)
> **Code Keywords:** let (9), const (5), this. (3), function (3), await (3)
> **Env Vars:** rag (9), json (6), http (5), post (4), api (1)
> **Code Identifiers:** getcurrentversion (7), updateversion (4), newversion (1)
> **CLI Commands:** make (4), node (3), curl (2)
> **File Paths:** version.js (3), server.js (2), node.js (1), res.json (1)
> **Analogies:** for example (7)
> **URLs:** [http://localhost:3000](http://localhost:3000) (1), [http://localhost:3000/version/update](http://localhost:3000/version/update) (1)

#### RAG Ops: Updating the data
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=0)** We've now explored some ops tools to help you continually improve your chatbot over time with logging metrics and version control.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=8)** Now there's a lot more that you can do, and I hope that this has helped you to explore and ideate ways that you can manage, maintain, and update your application.
>
> **[0:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=17)** But there is one important area that I would like to get hands-on with and work on a little bit before we wrap up.
>
> **[0:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=23)** Now it's all very well being able to figure out bottlenecks and areas for improvement in the application, but if we don't use that knowledge to build a better app, then what's the point of it all?
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=34)** For a chat app like this one, there's a number of things that you could do to continually improve.
>
> **[0:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=39)** You could update and experiment with the system prompts that you use to push the LLM in a particular direction.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=45)** You could try different back-end LLMs, and this is always a good idea as the models are continually growing and improving.
>
> **[0:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=51)** We've been using GPT in this course, and of course, you could use Gemini or Claude or even self-host one of the more open models like Llama.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=60)** But the scenario I think is most useful is to update our RAG database with new information as it becomes available, and this is easier than retraining backend LLMs.
>
> **[1:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=69)** So we're going to explore that in this video.
>
> **[1:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=72)** Our scenario is of the book, Space Cadets, and the chatbot that we wrote that RAGs on this book has proven to be exceptionally smart.
>
> **[1:20](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=80)** But the book is a static object.
>
> **[1:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=83)** We are limited to just its contents.
>
> **[1:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=86)** Over time, we might notice that some of the conversations we're having with the bot about the book might be a bit shallow, or they might hallucinate.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=94)** One primary reason for that, which I noticed, was that any analysis of the characters is done by the LLM based on what they say and what they do in the book.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=105)** It will infer their background and their beliefs from all of that.
>
> **[1:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=109)** There's no document saying Aisha is this or Soo-Kyung is that.
>
> **[1:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=114)** So you can foresee that users might be hitting the negative feedback button or rerolling on prompts in order to get around that and that using your data around the ops would then give you a signal to improve that database.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=128)** So to that end, I've provided some bios of the primary characters in the book as text files.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=134)** In this video, we'll take a look at taking one of the characters, whose name is Aisha, her bio, and we'll update our RAG database with that.
>
> **[2:22](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=142)** So this should lead to improved queries when we're asking about her.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=146)** The process of updating the database with embeddings for new content is almost identical to the previous process that we used when we created the initial database.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=156)** The only difference in this case is that the new content is in text files.
>
> **[2:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=161)** I've created files for each of the characters, and you'll find them in the repo so you can update the database quite simply by calling the Python script and passing in the text file for that character.
>
> **[2:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=171)** So, for example, in this case, it would be aisha.txt for Aisha.
>
> **[2:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=175)** This python file will accept the argument, a text file with code like this.
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=180)** And if it's valid, it will call process_text_file with the file_path.
>
> **[3:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=185)** And here's the code to process the text file.
>
> **[3:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=188)** It will read the contents of the file into a variable called text.
>
> **[3:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=192)** This will then be split into chunks.
>
> **[3:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=194)** And do note here that the chunk size and overlap should be the same as the initial database creation, so be careful to make sure you do that part properly.
>
> **[3:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=204)** The split text function is here.
>
> **[3:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=206)** Note the chunk size and the overlap.
>
> **[3:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=208)** For the initial database creation from the PDF of the book, I used 1,500 and 300 respectively.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=215)** So I ensured that I did the same here.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=218)** Now better coding practice would be to share some kind of utility function between the create_db.py and the update_db.py files, but I'll leave that to you.
>
> **[3:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=227)** Back to processing the text file.
>
> **[3:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=229)** The next step, as before, is to generate the embeddings from the chunks of text and then to update the database with them.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=236)** And it's really as simple as that.
>
> **[3:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=238)** When you run the script, you should see an update to the database like this.
>
> **[4:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=242)** Note the number of items in the collection before and after you run it.
>
> **[4:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=246)** The bios I provided, when split into chunks of 1,500 characters with 300 overlap, gave about three chunks, so my total went from 257 chunks to 260.
>
> **[4:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=257)** You should see similar numbers, but note, if you run this multiple times, you'll add the same chunks to the database, so those numbers may grow.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=265)** Then it's simply a matter of running the script for each character, and when you're done, you should update the server version with the techniques that we saw earlier on.
>
> **[4:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-ops-updating-the-data?u=76281980&t=274)** So now let's get hands-on and see this in action.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), function (2), self (1), static (1), case, (1)
> **Env Vars:** llm (2), rag (2), gpt (1), pdf (1)
> **CLI Commands:** python (2), find (1), make (1)
> **Code Identifiers:** process_text_file (1), file_path (1), create_db (1), update_db (1)
> **File Paths:** aisha.txt (1), create_db.py (1), update_db.py (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)

#### Hands-on RAG ops
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=0)** So in the previous video, we looked at exploring what it would take to now update our RAG data.
>
> **[0:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=6)** So in the beginning, we were using OpenAI's GPT models on the back end and they had no idea about our book.
>
> **[0:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=13)** So we created a vector database that we were then able to search to be able to get RAG-based queries against that GPT back end, to make it much more intelligent about our book.
>
> **[0:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=24)** But now, if we start thinking in terms of ops and continual update and continual improvements, one of the things is that that book is very static.
>
> **[0:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=32)** You only have what's in the book.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=34)** But of course, over time, if you want to have more data and more knowledge as people are using your application and giving you feedback, for example, about bad prompts, you would want to be able to create new data to add to that database so that you can continually improve and update.
>
> **[0:49](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=49)** We're going to be looking at how to do that in this video.
>
> **[0:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=52)** So first, you're going to be in Chapter 4 and you're going to look at the update-db folder.
>
> **[0:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=57)** And we'll go into the start of that one.
>
> **[0:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=59)** And there's a lot of stuff in that folder.
>
> **[1:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=61)** But the one that I would like you to take a look at are the text files.
>
> **[1:04](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=64)** So these text files such as seamus.txt or aisha.txt or sookyung.txt.
>
> **[1:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=70)** So if I look at them, these are effectively new data that we can put into the database where I've just created some more metadata about the character.
>
> **[1:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=81)** Because when we think about it and as we discussed in the slides, when we're RAGing off of a novel, in some ways, the information is second hand and novel rarely tells you this person is this, this person likes that.
>
> **[1:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=94)** They may say it or you may infer it.
>
> **[1:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=97)** But if we want that type of information to be able to do, for example, a presentation about her, it would be good to have more encyclopedic-style content.
>
> **[1:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=105)** So that's what I've done here is I've created some text files with some details of the characters and to maybe help improve our RAG to make it a little bit better at what it's doing.
>
> **[1:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=115)** So how would we then update the database with that?
>
> **[1:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=119)** Well, let's take a look at the code for that.
>
> **[2:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=121)** And that's in the update_db.py file that you can find in the folder.
>
> **[2:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=125)** And we'll take a look at that next. So here's the update_db.py file.
>
> **[2:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=128)** And this is what we're going to use to be able to update the database with the information that's in those text files.
>
> **[2:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=134)** Now, of course, this is a little bit different.
>
> **[2:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=136)** We're going to follow the same procedure that we did for creating the database.
>
> **[2:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=139)** But it's a little bit different to begin with, and the fact that we're using a text file and not a PDF.
>
> **[2:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=143)** So we're going to write a function to read the text file.
>
> **[2:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=146)** Then we're going to do another one to split that file into chunks.
>
> **[2:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=150)** Then we're going to generate the embeddings.
>
> **[2:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=151)** And then we're going to update the database.
>
> **[2:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=153)** So let's start with opening and reading the text file.
>
> **[2:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=156)** Oh, by the way, I'm also going to just make this a parameterized application.
>
> **[2:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=160)** So I'm going to... Let me start with that first.
>
> **[2:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=162)** I'm going to say like the usage we want here to be Python, update database, and then the path to the file.
>
> **[2:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=168)** So how would we do that.
>
> **[2:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=170)** How would we implement that.
>
> **[2:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=171)** Well, it should be as simple as I'm going to say in here.
>
> **[2:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=175)** The file_path = sys.argv[1].
>
> **[3:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=180)** So the first argument that comes in and then I'm going to process text file, the file path.
>
> **[3:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=187)** So now instead of us having something where we have to have a different one for each file, I'm just going to make it a parameter to this Python file to say update database with Seamus or update with Soo-Kyung or that type of thing.
>
> **[3:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=201)** So that's going to call process_text_file, and process_text_file is going to do all of those steps that we showed a moment ago: reading the text file, splitting it into chunks, generating embeddings of those chunks, and then updating the database with those.
>
> **[3:35](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=215)** So let's implement those functions next. Okay.
>
> **[3:38](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=218)** First of all, reading the text file.
>
> **[3:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=220)** Well, how are we going to read the text file?
>
> **[3:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=222)** Python gives us some really nice code to be able to do this.
>
> **[3:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=225)** So I can just say with open, we know the file path, that was the parameter.
>
> **[3:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=231)** We're going to read it.
>
> **[3:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=232)** We're going to need an encoding.
>
> **[3:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=234)** I'm just going to use UTF-8.
>
> **[3:56](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=236)** And we're going to call that file.
>
> **[3:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=239)** Then we just return what happens when we read the file.
>
> **[4:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=243)** It just going to be all of the text that comes out of it.
>
> **[4:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=245)** So that's going to open the text file and read it.
>
> **[4:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=247)** A lot simpler than when we were dealing with the PDF earlier on because it's just flat text in the file.
>
> **[4:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=253)** So next, we're going to have to split our text.
>
> **[4:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=256)** And this is going to be pretty much the same code that we use when we were generating the initial database.
>
> **[4:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=261)** So we're going to split it.
>
> **[4:23](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=263)** We have our chunk size and we have our chunk overlap.
>
> **[4:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=265)** And there's one thing to be careful of here is that as you're tweaking your database, you might have changed your chunk sizes and chunk overlap over time.
>
> **[4:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=273)** So make sure that when you're adding new data to the database, as we're doing here, that you're using the same chunk size and chunk overlap.
>
> **[4:39](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=279)** And realistically, the split_text() function should probably be separated out into a separate file that would be used by both the create database and the update database, so that we don't have that kind of drift.
>
> **[4:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=290)** In this case, we're repeating ourselves.
>
> **[4:52](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=292)** And the good old-fashioned rule is don't repeat yourself.
>
> **[4:55](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=295)** But that's something just to watch out for.
>
> **[4:57](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=297)** I'm just going to keep it simple here and keep it within this file.
>
> **[5:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=300)** But as you're building production systems, think about that and make sure you don't get lulled into making that mistake.
>
> **[5:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=306)** So next up, we want to generate our embeddings.
>
> **[5:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=309)** And, of course, our embeddings are we're going to be using the OpenAI embeddings, the same ones that we did when we were creating the database to begin with.
>
> **[5:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=316)** So I'm going to say embeddings = OpenAIEmbeddings.
>
> **[5:19](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=319)** We have our OpenAI API key that we can see here that we've just read from the environment, as we've been storing since the beginning of the course.
>
> **[5:30](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=330)** And then we just want to return the embeddings to the caller.
>
> **[5:33](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=333)** So that's embeddings.embed_query(chunk)
>
> **[5:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=342)** for every chunk in our chunks.
>
> **[5:47](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=347)** I'm getting an error there.
>
> **[5:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=348)** Let's take a look.
>
> **[5:50](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=350)** Embeddings.
>
> **[5:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=351)** embed_query(chunk) for chunk in chunks.
>
> **[5:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=354)** Oh, I said ret run instead of return.
>
> **[5:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=359)** Okay. So now that's all we have to do to generate our embeddings, similar to what we were doing when we were creating the database to begin with.
>
> **[6:06](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=366)** So now the next thing to do, of course, is to update our database.
>
> **[6:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=371)** And there's a lot of work that we need to do in here.
>
> **[6:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=373)** So I'm just going to paste it in.
>
> **[6:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=376)** Okay.
>
> **[6:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=377)** When we created our database, we created it in a particular path.
>
> **[6:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=381)** And in this case, when you see the chroma run --path, whatever.
>
> **[6:25](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=385)** So the subdirectory was data that the database is in.
>
> **[6:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=388)** I'm just going to specify that we're using that directory for it.
>
> **[6:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=391)** We're going to create a client to that.
>
> **[6:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=394)** We're going to get our embedding functions again to let the database know that these are the embedding functions that we're going to be using.
>
> **[6:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=401)** We're going to get our collection, poorly named PDF embeddings.
>
> **[6:46](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=406)** We'll count the number of items in our collection, we'll add the new items to that, and then we'll report back on how many items are in the collection after we're done.
>
> **[6:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=418)** That's pretty much it.
>
> **[6:59](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=419)** That's all that we need to do to update our database.
>
> **[7:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=421)** So now I'm going to go and run this code and see what happens.
>
> **[7:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=425)** So to run it, I'm just going to call Python.
>
> **[7:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=427)** I'm going to call that script update.py.
>
> **[7:09](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=429)** I'm going to specify the file name that I'm using.
>
> **[7:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=432)** For example, this will be soo-kyung.txt, and let's see what happens.
>
> **[7:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=435)** So if we looked carefully there, there was a lot going on.
>
> **[7:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=438)** But let me scroll back up to the top.
>
> **[7:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=441)** And we'll see that that file was split into three chunks.
>
> **[7:24](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=444)** It's a much smaller file.
>
> **[7:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=446)** So I'm generating my embeddings.
>
> **[7:28](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=448)** I'm updating Chroma DB with those embeddings.
>
> **[7:31](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=451)** It looks like there's a, with the Chroma DB, we should be able to tidy it up as we change versions of it, which is this minor warning, but we started with 281 items in our collection.
>
> **[7:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=462)** And then if I go down to the bottom, we ended with 284 items in our collection, so we can see that we've now added this data about Soo-Kyung to our database.
>
> **[7:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=474)** And say, I want to do it again, this time, for example, for Aisha.
>
> **[8:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=481)** We're going to get the same thing.
>
> **[8:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=482)** There's also three chunks from Aisha, and we had 284 chunks in the database, now we have 287 chunks in the database.
>
> **[8:10](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=490)** So we can see that the database is getting bigger.
>
> **[8:12](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=492)** So if I start running my application and RAGing, I have more information to RAG against.
>
> **[8:17](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=497)** And this is ultimately one of the ways that you can make your application better.
>
> **[8:21](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=501)** By having intelligence, through logging, through user feedback, and through using the application, you might be able to do that type of gap analysis to see what type of information was missing.
>
> **[8:32](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=512)** And when you understand what information is missing, then you can get that information from somewhere.
>
> **[8:37](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=517)** With a fictional work like this, if you know the characters, you can write up a profile of them, get a new document, and use that to add to your RAG database so you can have a better database.
>
> **[8:48](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=528)** And for a quick look, if we want to actually look at the data, we can see we can remember this was the data of the book itself.
>
> **[8:54](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=534)** But if I scroll down to the bottom, we should be able to see all my new records.
>
> **[8:58](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=538)** Yes, so there were 273 to begin with.
>
> **[9:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=540)** But now we're beginning to see all of these new records.
>
> **[9:03](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=543)** We've put in some details for Soo-Kyung, we've put in some details for Aisha, et cetera.
>
> **[9:07](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=547)** And we can see here is some of the stuff that we've added to the RAG.
>
> **[9:11](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=551)** Soo-Kyung is a North Korean student who becomes Aisha's roommate, et cetera.
>
> **[9:15](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/hands-on-rag-ops?u=76281980&t=555)** So here's a really nice way for us to be able to update our data and improve our application over time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), function (2), case, (2), static (1)
> **Env Vars:** rag (6), pdf (3), gpt (2), utf (1), api (1)
> **CLI Commands:** make (7), python (4), find (1)
> **Code Identifiers:** update_db (2), process_text_file (2), embed_query (2), file_path (1), split_text (1)
> **File Paths:** update_db.py (2), seamus.txt (1), aisha.txt (1), sookyung.txt (1), update.py (1)
> **Analogies:** for example (4), such as (1), similar to (1)
> **Warnings:** be careful (1), watch out (1), warning (1)
> **Cross-References:** previous video (1), we discussed (1)

#### RAG in action: Exercise
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=0)** Now that you've seen how to create a database for RAGing, as well as how to update it for the character of Aisha, your next challenge is straightforward.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=8)** I've provided some text files for the other characters: David, Patrice, Soo-Kyung, and Seamus.
>
> **[0:13](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=13)** Update the RAG database for them and then update the app version as you deem appropriate.
>
> **[0:18](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=18)** You should have an improved RAG interaction for these characters, and when you're done with that, I would encourage you to experiment with the system prompt.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=26)** This app was designed to help you with public speeches about a topic, and you'll see that it generally guides the conversation in that direction.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=34)** But if you want it to be just a general chatbot about the book, you can do that by editing the system prompt.
>
> **[0:40](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=40)** The final part of this exercise, and a stretch goal, would be to create some more content about the book.
>
> **[0:45](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=45)** Maybe your opinion on the characters, or maybe descriptions of scenes and settings such as the space station or the fight-on fighters that the heroes fly, or maybe even some background information such as Fermi's paradox, which is at the heart of the story.
>
> **[1:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=60)** The possibilities are endless.
>
> **[1:02](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/rag-in-action-exercise?u=76281980&t=62)** It's entirely up to you.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2)
> **Analogies:** such as (2)
> **Code Keywords:** public (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Continue your LLMOps learning journey
> [LinkedIn Learning](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=0)** Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=1)** You've come a long way, and you've learned a lot by getting hands-on and creating an amazing application backed up by an LLM.
>
> **[0:08](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=8)** But more importantly, you've seen that building a truly great application involves much more than just writing code and running it.
>
> **[0:16](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=16)** It required monitoring and maintenance so that you could continually improve your users experience, and you could ensure that your app was working in the best possible way.
>
> **[0:26](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=26)** This app's lifecycle involves many different steps and technologies, and we've only really touched on some of the bigger ones in this course.
>
> **[0:34](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=34)** We saw how to capture human feedback so that we could learn from their interactions and their desires about how the application should work.
>
> **[0:42](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=42)** We logged all of the conversations so we could get a feel for what people were interacting with our bot about, and we then took our application to the next level and made it an expert on a specific topic by creating a database of embeddings and then using RAG to combine this knowledge with the back-end LLM's reasoning abilities to deeply understand a book.
>
> **[1:05](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=65)** And then we went deeper into ops, creating a logging mechanism for info and errors within the app, not to be confused with our logging on the conversation text, of course.
>
> **[1:14](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=74)** We added metrics to the app so that we could glean intelligence about where any bottlenecks might be, and we gave the ability to version the app so we could manage user expectations about any updates before finally exploring a scenario where user feedback determined that our data wasn't sufficient and that the results coming back from the bot were unsatisfactory.
>
> **[1:36](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=96)** So we updated our RAG system with new data to hopefully fill that hole.
>
> **[1:41](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=101)** I hope you've enjoyed working through this course as much as I did.
>
> **[1:44](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=104)** I'm really excited to see what you build with what you've learned here, and I look forward to hearing from you all about your cool apps.
>
> **[1:51](https://www.linkedin.com/learning/llmops-in-practice-a-deep-dive/continue-your-llmops-learning-journey?u=76281980&t=111)** And I'm Laurence, and I just wanted to thank you so much for taking this journey with me.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), rag (2)


## Instructor

- [[Laurence Moroney]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/llmops-in-practice-a-deep-dive-5936211)

## Skills Covered

- Large Language Model Operations (LLMOps)
- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Path Context

### In [[Manage Your LLMs with LLMOps]]
← [[Generative Ai And Llmops Building Blocks And Applications]] | **2 of 4** | [[Advanced LLMOps- Deploying and Managing LLMs in Production]] →

## Appears In

- [[Manage Your LLMs with LLMOps]]

## Related Courses

_Courses sharing skills:_

- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI), Large Language Model Operations (LLMOps)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Azure Ai For Developers Ai Design Foundations]] — Artificial Intelligence (AI), Large Language Models (LLM), Large Language Model Operations (LLMOps)
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)