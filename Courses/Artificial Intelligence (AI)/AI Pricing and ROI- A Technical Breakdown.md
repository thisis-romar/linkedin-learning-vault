---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-pricing-and-roi-a-technical-breakdown
url: "https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown"
duration_minutes: 191
duration: 3h 11m
level: Intermediate
updated: 1/24/2025
learners: 109164
skills:
  - AI Solutions
  - Cost Management
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHSc-vsuiJYPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713559196213?e=2147483647&amp;v=beta&amp;t=jrQ_pSoJFLYwKslcPPX7LN4VshrKsRPwXLVnk5X9TbE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[AI Product Security- Foundations and Proactive Security for AI]]'
path_nav: '[{"path":"Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning","position":6,"total":6,"prev":"AI Product Security- Foundations and Proactive Security for AI","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-solutions
  - skill/cost-management
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Pricing%20and%20ROI-%20A%20Technical%20Breakdown.md)

![AI Pricing and ROI: A Technical Breakdown](https://media.licdn.com/dms/image/v2/D560DAQHSc-vsuiJYPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713559196213?e=2147483647&amp;v=beta&amp;t=jrQ_pSoJFLYwKslcPPX7LN4VshrKsRPwXLVnk5X9TbE)

# AI Pricing and ROI: A Technical Breakdown

> There has been an immense interest in generative AI recently, but many organizations struggle to understand and forecast cost and revenue opportunities. If you’re creating or approving AI budgets, you’ll want to know the details. In this course, Denys Linkov breaks down the cost factors of operating AI models in a business environment. He addresses key questions like how to weigh a build versus bu

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown) | 3h 11m | Intermediate | 109K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Considering the cost of AI](#considering-the-cost-of-ai)
- [**1. Build vs. Buy**](#1-build-vs-buy) (4 videos)
  - [Framing build vs. buy in an AI context](#framing-build-vs-buy-in-an-ai-context)
  - [Setup vs. ongoing costs](#setup-vs-ongoing-costs)
  - [Selecting the right models for the tasks](#selecting-the-right-models-for-the-tasks)
  - [SaaS, PaaS, and IaaS in the context of AI](#saas-paas-and-iaas-in-the-context-of-ai)
- [**2. Costs of Using an AI API**](#2-costs-of-using-an-ai-api) (10 videos)
  - [Introduction to AI as an API](#introduction-to-ai-as-an-api)
  - [Introduction to AI as a platform](#introduction-to-ai-as-a-platform)
  - [Setup costs for AI APIs](#setup-costs-for-ai-apis)
  - [Ongoing costs for AI APIs](#ongoing-costs-for-ai-apis)
  - [Estimating cost for a translation feature](#estimating-cost-for-a-translation-feature)
  - [Estimating cost for a RAG solution: What is RAG?](#estimating-cost-for-a-rag-solution-what-is-rag)
  - [Estimating cost for a RAG solution: Costs of RAG](#estimating-cost-for-a-rag-solution-costs-of-rag)
  - [Estimating costs for an image generation feature](#estimating-costs-for-an-image-generation-feature)
  - [Challenge: Estimating the cost of a book summarization](#challenge-estimating-the-cost-of-a-book-summarization)
  - [Solution: Estimating the cost of a book summarization](#solution-estimating-the-cost-of-a-book-summarization)
- [**3. Examining Major Vendor Pricing**](#3-examining-major-vendor-pricing) (6 videos)
  - [Diving into ChatGPT pricing (OpenAI)](#diving-into-chatgpt-pricing-openai)
  - [Diving into Anthropic-based pricing](#diving-into-anthropic-based-pricing)
  - [Diving into Google AI pricing](#diving-into-google-ai-pricing)
  - [Diving into AWS Bedrock pricing](#diving-into-aws-bedrock-pricing)
  - [Diving into Azure AI-based pricing](#diving-into-azure-ai-based-pricing)
  - [Diving into Hugging Face-based pricing](#diving-into-hugging-face-based-pricing)
- [**4. Costs of Training AI**](#4-costs-of-training-ai) (13 videos)
  - [Overview of technical components and tooling](#overview-of-technical-components-and-tooling)
  - [Setting up an AI training cluster](#setting-up-an-ai-training-cluster)
  - [Cost of compute for training AI models](#cost-of-compute-for-training-ai-models)
  - [Data cleanliness and sourcing](#data-cleanliness-and-sourcing)
  - [Data movement and storage](#data-movement-and-storage)
  - [AI model training iteration and evaluation](#ai-model-training-iteration-and-evaluation)
  - [Tracking AI experiments](#tracking-ai-experiments)
  - [Fine-tuning models](#fine-tuning-models)
  - [Hiring the team that trains the models](#hiring-the-team-that-trains-the-models)
  - [Challenge: Training AI for your enterprise](#challenge-training-ai-for-your-enterprise)
  - [Solution: Training AI for your enterprise](#solution-training-ai-for-your-enterprise)
  - [Challenge: Training AI for your start-up](#challenge-training-ai-for-your-start-up)
  - [Solution: Training AI for your start-up](#solution-training-ai-for-your-start-up)
- [**5. Costs of Hosting AI**](#5-costs-of-hosting-ai) (9 videos)
  - [Hosting and running your AI models](#hosting-and-running-your-ai-models)
  - [Running your own models or outsourcing](#running-your-own-models-or-outsourcing)
  - [Choosing the right hardware for AI models](#choosing-the-right-hardware-for-ai-models)
  - [Logging and monitoring AI inference](#logging-and-monitoring-ai-inference)
  - [Hiring the team for AI inference](#hiring-the-team-for-ai-inference)
  - [Challenge: Running AI for your start-up](#challenge-running-ai-for-your-start-up)
  - [Solution: Running AI for your start-up](#solution-running-ai-for-your-start-up)
  - [Challenge: Running AI for your enterprise](#challenge-running-ai-for-your-enterprise)
  - [Solution: Running AI for your enterprise](#solution-running-ai-for-your-enterprise)
- [**6. Other Costs**](#6-other-costs) (5 videos)
  - [AI copyright and legal risks](#ai-copyright-and-legal-risks)
  - [AI reputational risks](#ai-reputational-risks)
  - [AI security risks](#ai-security-risks)
  - [AI impact on service level agreements](#ai-impact-on-service-level-agreements)
  - [AI's environmental impacts](#ais-environmental-impacts)
- [**7. Revenue-Generating Models**](#7-revenue-generating-models) (11 videos)
  - [Unit and margin pricing for AI](#unit-and-margin-pricing-for-ai)
  - [Time consumption pricing for AI](#time-consumption-pricing-for-ai)
  - [Value-based pricing for AI](#value-based-pricing-for-ai)
  - [Subscription pricing for AI](#subscription-pricing-for-ai)
  - [Start-up funding and grant programs for AI](#start-up-funding-and-grant-programs-for-ai)
  - [Challenge: Pricing your logo generator](#challenge-pricing-your-logo-generator)
  - [Solution: Pricing your logo generator](#solution-pricing-your-logo-generator)
  - [Building a business case for AI projects](#building-a-business-case-for-ai-projects)
  - [Building a financial projection for AI projects](#building-a-financial-projection-for-ai-projects)
  - [Challenge: Building an AI business case](#challenge-building-an-ai-business-case)
  - [Solution: Building an AI business case](#solution-building-an-ai-business-case)
- [**8. ROI on AI Use Cases**](#8-roi-on-ai-use-cases) (4 videos)
  - [ROI on AI customer support automation](#roi-on-ai-customer-support-automation)
  - [ROI on AI lead generation](#roi-on-ai-lead-generation)
  - [ROI on AI Developer tooling](#roi-on-ai-developer-tooling)
  - [ROI on AI Copilots](#roi-on-ai-copilots)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Considering the cost of AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/considering-the-cost-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/considering-the-cost-of-ai?u=76281980&t=0)** - Everyone wants AI in their [[Microsoft Products|products]], but how much will it cost? If you're creating or approving AI budgets, you'll want to know the details. In this detailed course, we'll cover key questions like build versus buy, the cost of training your own [[Generative AI|GenAI]] model, risk trade-offs, and how to build a team to support an AI initiative. We do this from both an enterprise and startup perspective based on key requirements. There are detailed examples going through vendor pricing, case studies, and comprehensive exercises for both GenAI and traditional models. Oh, and who can forget the revenue opportunities of AI? We have those too. I'm Denys Linkov, Head of Machine Learning at Voiceflow, and I'm here to bridge the technical complexities of AI with its business value. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Speakers:** - everyone (1)


### 1. Build vs. Buy

[↑ Back to Table of Contents](#table-of-contents)

#### [Framing build vs. buy in an AI context](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/framing-build-vs-buy-in-an-ai-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/framing-build-vs-buy-in-an-ai-context?u=76281980&t=0)** - [Instructor] AI is a powerful technology to incorporate into your business. But how should you get started? In this video, we'll cover how to start exploring the build versus buy journey of AI. Now, if we were having this discussion five years ago, build versus buy would generally mean run in-house versus outsource. But now, with the advances of [[Generative AI|gen AI]] and offered solutions, many more solutions work out of the box and off the shelf. AI can solve a number of problems and will depend on the industry. A hospital may benefit from better patient summaries and transcriptions. An [[E-Commerce]] store can grow faster with better photo editing. Or a car manufacturer could do better predictive maintenance. It's important to understand the scope of your initial AI projects and the capabilities of your existing organization. Building in-house is most efficient when you have the talent and software infrastructure to support such a project. Thankfully, over the past five years, cloud providers and open source libraries have made it significantly easier to train, deploy, and manage models. Similar gains have been recognized by many vendors, with managed services now simpler than ever to use, some just being an API call away. Industry-specific solutions often come with vendor expertise, allowing you to leverage these teams to implement your specific solutions. If you're in a regulated industry, such as financial services or healthcare, more attention should be placed on [[Privacy]], user disclosure, and [[Regulatory Compliance]].
>
> **[1:36](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/framing-build-vs-buy-in-an-ai-context?u=76281980&t=96)** You may also have proprietary and sensitive data that must be kept in-house. So deciding build versus buy isn't so different from any other decision. So let's take a look into the landscape in our next set of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[Privacy]] (1), [[Regulatory Compliance]] (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Setup vs. ongoing costs](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setup-vs-ongoing-costs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setup-vs-ongoing-costs?u=76281980&t=0)** - [Instructor] AI systems don't just take time to develop. They need to be actively maintained and monitored. Let's break down what the setup and ongoing costs of an AI solution looks like. In the AI world. We typically divide model development into two phases, model training and deployment. Model training involves researching the problem, gathering the appropriate data, selecting the right model type, and training it. This journey is typically challenging as it exposes some organizational weaknesses, like which concrete business problems AI can solve, or messy data. These problems can be solved, but are usually ignored in the initial assessment. Model training usually requires a significant amount of R&D from a business standpoint, and also a technological one. From a finance perspective, we can classify this as a capital expense. Rather than training your own model, you can also purchase or license models. After a model is trained, it needs to be deployed, and integrated with existing systems. This might also require significant innovation depending on your business problem. [[Privacy]], latency, throughput, and network connectivity would all affect the deployment pattern that you choose in the product configurations you would have. Once the models and their infrastructure are up and running, they're typically classified as an operating expense or OpEx. In most modern applications, you'll need to continuously monitor and update your models, which is typically referred to as [[MLOps]].
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setup-vs-ongoing-costs?u=76281980&t=94)** Like software, models aren't static, and need to be updated and retrained. So these are the key considerations for model setup and ongoing expenses. In the next video, we'll discuss selecting the right model for the task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[MLOps]] (1)
> **Prerequisites:** setup (2), you'll need (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Selecting the right models for the tasks](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/selecting-the-right-models-for-the-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/selecting-the-right-models-for-the-tasks?u=76281980&t=0)** - [Instructor] These days, everyone wants to use [[Generative AI|GenAI]], but is it the right tool for the job? GenAI typically uses large and compute-intensive models, so the best way to save money is not to run them, so it's important to choose the right model for the right use case. Let's go through some examples. Tabular data, which usually involves predicting numeric properties, like the size of a loan, is typically best done with boosting or tree-based methods. [[Forecasting]] models such as predicting time series results like the sales of the next month, typically use moving average models and [[Deep Learning]]. Recommender systems serve up the recommendations that we see on social media or [[E-Commerce]] sites. Typically, there's been a lot of success there with deep learning. Well-defined language tasks like sentiment analysis or translation are also done very well without GenAI. Now, GenAI models can be great at tasks like summarization, data extraction, image generation, and many more. Their best use case, however, is to adapt and prototype to new tasks, allowing you to experiment and understand the intended goal without spending time gathering the data and infrastructure to deploy to specialized model. The next video, we'll cover the best ways to deploy your models using the choice of [[SaaS]], [[PaaS]], and [[IaaS]] solutions in the AI context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Forecasting]] (1), [[E-Commerce]] (1), [[SaaS]] (1), [[PaaS]] (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [SaaS, PaaS, and IaaS in the context of AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/saas-paas-and-iaas-in-the-context-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/saas-paas-and-iaas-in-the-context-of-ai?u=76281980&t=0)** - [Instructor] Most IT organizations categorize their infrastructure spend. So how can we do the same thing with AI infrastructure? When we talk about [[Cloud Infrastructure]], we typically divide them into categories to understand their capabilities in how to make buying decisions. These are often referred to as [[SaaS]], [[PaaS]], and [[IaaS]]. As a quick refresher, IaaS stands for [[IaaS|infrastructure as a service]], PaaS stands for [[PaaS|platform as a service]], SaaS stands for [[SaaS|software as a service]], and in the AI world, MaaS stands for model as a service. Let's go through some examples with a situation where we want to train a model. IaaS typically refers to as a basic set of compute, and in the AI context, this might be VMs with GPU support. These would be useful if your company is building something very bespoke and needs more control. PaaS in the AI context would be a platform custom tailored for training models and providing an opinionated way to do so. This might be a framework like Kubeflow. SaaS in an AI context usually involves an opinionated offering where you can do the task end-to-end with minimal configuration. This might be like the OpenAI fine-tuning API. Now MaaS, model as a service, is as simple as calling an API and getting a response. This might be like calling Claude, a model from Anthropic, where you give it some input and receive an output. And between the cloud space and the AI space, things do get a little bit different. Definitions can typically blend, especially in the PaaS and SaaS spectrum.
>
> **[1:36](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/saas-paas-and-iaas-in-the-context-of-ai?u=76281980&t=96)** Let's take for example, [[Hugging Face]]. Is Hugging Face a PaaS or a SaaS? On one hand, it's a PaaS because it uses its open-source libraries to provide an opinionated way to build and serve AI models. On the other hand, there's a simple managed solution that Hugging Face provides for serving these models. Now, another example is a different set of PaaS complexities between different platforms. Some platforms like Hugging Face have few features, and are simple to use. On the other hand, there are more comprehensive offerings like SageMaker, which has many features that you can configure. And it's very easy to get caught up in the minutiae of what is a PaaS or what is a SaaS in the AI context. The important thing here is to focus on the key decision points when deciding what kind of solution you'll implement. Here are six important decision points to use. These are the time to market, integration points, available data, team structure, domain area, and compliance requirements. These will be important and something that we'll reference when making a decision on implementing an AI platform. In the next video, we'll talk about the costs of using an AI API, the simplest way to integrate with AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PaaS]] (8), [[SaaS]] (6), [[Hugging Face]] (4), [[IaaS]] (3), [[Cloud Infrastructure]] (1)
> **Definitions:** stands for (4), is a  (3), refers to (1)
> **Env Vars:** api (3), gpu (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 2. Costs of Using an AI API

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AI as an API](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-an-api?u=76281980&t=0)** - [Instructor] The magical experience of [[Generative AI|Gen AI]] via an API is that if you can dream an idea, you can usually prototype it. This is a [[Stark (Accessibility Software)|stark]] comparison with many more traditional ML tools, which require exploration, tuning, and adjustment. Let's go through some questions to ask when assessing an AI as an API. These factors include our existing ones, time to market, integration points, available data, team structure, domain areas, and compliance requirements. Now we're going to focus on the factors that are important for an AI API so we can merge these requirements together. This video will focus on time to market, reliability, cost, latency, multi-tenancy, and customizability. The biggest advantage for AI as an API is time to market. The faster you can launch your product to market, the bigger your advantage. An early example is language translation as a way to easily integrate AI into your application. Since then, we have applications like traffic prediction, image classification, and many more. This allows us to validate our ideas quickly and figure out which type of AI we actually need. Moving on to our second factor, which is reliability. In the early days of OpenAI, the [[ChatGPT]] API often failed. This made depending on the API a challenge. Since then, the OpenAI APIs have gotten a lot more reliable, and you can check the reliability on their website at status.[openai.com](https://openai.com). Now what makes reliability complex is that the model
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-an-api?u=76281980&t=95)** not only has to offer uptime, but also has to offer the correct answer and have the usual latencies that we expect. If the AI API is very core to your business, it might be important to consider a multi [[AI Strategy]] where you might use multiple AI providers to make sure that your service is at least working. In the ChatGPT case, OpenAI has a program called the Foundry program where you can pay extra to have additional capacity that's pre reserved. Now API costs can quickly add up, especially in the AI context. Gen AI is particularly expensive given the nature of the models. However, what's interesting is that the cost of Gen AI has been down, falling over 600 times from 2021 to March 2024 when this video was recorded. These data points are for GPT-3 or ChatGPT equivalents. These costs have been decreasing for a number of reasons. The cost of [[Hardware]] has fallen, programs have gotten more optimized, and there's also a lot more investment money allowing companies to subsidize the cost of their APIs. Now our next factor is latency. When you have your use case figured out, it's always possible to run smaller and cheaper models, which might be cheaper than using an AI API. Now smaller and custom models also benefit from lower latency. Some applications require low millisecond latency like trading or recommendation systems. And these latencies are infeasible with general APIs. But for most use cases, especially in the Gen AI world, models like ChatGPT-3.5 are fast enough
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-an-api?u=76281980&t=188)** for most applications. And in a globalized and multi-user world, we also need to consider multi-tenancy. This is typically most important for B2B and international companies. APIs might be geo-limited or have limits in organizational structure either for visibility or compliance. So it's very important to understand how your application functions and how you'd integrate with these APIs. As an example, some AI APIs have tenancy limits, meaning the number of dedicated applications that you provide to your users might be limited. As a personal example, the company I work for, VoiceFlow, we had to manage a number of [[Conversational AI]] applications for our customers. At the beginning, we used a vendor API, but as we started to scale, the vendor API could no longer maintain our pace of growth. So eventually we deployed an in-house model and system to deal with this. So we used the vendor API to start and validate the problem and scaled with our own systems when we ran into issues, in our case, the vendor API took us through the tens of thousands of applications level, and we scaled ourselves through the hundreds of thousands. Now this customizability might be really important to you, so it really depends on knowing your requirements. Sometimes you might need to configure the API in a specific way that just is impossible. Now overall, we've gone over these six factors. Time to market, liability, cost, latency, multi-tenancy, and customizability. All these are crucial for selecting the right AI API for your use case. Now AI APIs are a great first option
>
> **[4:43](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-an-api?u=76281980&t=283)** for accelerating your first AI implementation. In the next video, we'll introduce you to AI as a platform, how it can be used for broader use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Stark (Accessibility Software)|Stark]] (1), [[AI Strategy]] (1), [[Hardware]] (1), [[Conversational AI]] (1)
> **Env Vars:** api (15), gpt (1), b2b (1)
> **CLI Commands:** make (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Versions:** 3.5 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### [Introduction to AI as a platform](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-a-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-a-platform?u=76281980&t=0)** - [Instructor] For many use cases, there isn't always an API for a task, so sometimes we need to build the models ourselves. In this case, it's smart to focus on the model and let a platform provide the structure that we need. In this video, we'll focus on the same parameters we used in the previous video for AI APIs, including time to market, reliability, cost, latency, multi-tenancy, and customizability. Platforms provide us with standardized methods to deploy and train models, allowing us to get to market faster for each subsequent model. Some of these frameworks include Databricks, SageMaker, [[Microsoft Azure|Azure]] ML, [[Vertex]] AI, and many more. Since these platforms specialize in these [[Microsoft Products|products]], they're typically more reliable with hundreds of engineers working on them. Cost-wise these platforms may be expensive, but many charge in the same elastic way as regular [[Cloud Services]]. As an example here, many of these platforms have pricing calculators as seen here for this Databricks one. Latency wise, different platforms have different capabilities such as more powerful [[Hardware]] for faster inference, the ability to deploy on edge or enable streaming modes. As an example here, we have a screenshot from SageMaker. From multi-tenancy perspective, these platforms provide multiple deployment options, including different clouds, regions, or clusters, so you can segment your user tenancy on your needs. Now, many of these AI platforms are highly customizable, allowing you to choose the configurations that you need.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/introduction-to-ai-as-a-platform?u=76281980&t=94)** Sometimes, however, that's not enough. As a personal example, when I was building the [[Conversational AI]] platform for Voiceflow, we needed to serve tens of thousands of models in parallel with low latency, AB testing enabled and continuous training. So just like in the previous video, we use a vendor API to get us started, but eventually transition to an in-house platform. Now, in this video, I've mentioned many vendor products, but there are also a number of open source platforms available like Kubeflow, that you can run it within your own infrastructure and configure as needed. Overall, we've covered our different requirements here for choosing a platform. In the next video, we're going to talk about the costs of making this decision for both platforms and APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Microsoft Azure|Azure]] (1), [[Vertex]] (1), [[Cloud Services]] (1), [[Hardware]] (1)
> **Cross-References:** previous video (2), in the next (1)
> **Env Vars:** api (2)
> **Analogies:** such as (1), just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Setup costs for AI APIs](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setup-costs-for-ai-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setup-costs-for-ai-apis?u=76281980&t=0)** - [Instructor] Let's discuss the setup costs when using AI APIs. The powerful value of using AI APIs is avoiding traditional investments into large software purchases or [[Hardware]]. This allows companies to be more [[Agile Development|agile]], makes technology more accessible for smaller teams or firms. When working with APIs as a service, there may be discounts for upfront purchasing or certain billing commitments. Now, not all AI APIs are elastic. For certain larger contracts, you might be billed annually, which might impact your cash flow, and many enterprises choose to sign long-term contracts. For example, a large European telecom signed a $1.5 billion contract over 10 years for AI services with a large cloud provider. Because of the shift from set up costs to ongoing costs, we'll need to spend more time on the latter in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Agile Development|Agile]] (1)
> **Prerequisites:** setup (1), set up (1)
> **Versions:** 1.5 (1)
> **Cross-References:** next video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Ongoing costs for AI APIs](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ongoing-costs-for-ai-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ongoing-costs-for-ai-apis?u=76281980&t=0)** - [Instructor] Let's talk about the ongoing costs of using an AI API. There are three main ways to consume an AI API. The first one is managed hosting. The second is per API consumption. And the third one is a defined plan. Managed hosting is more traditional from a cloud perspective, where you pay a vendor to host a model and pay by the hour. Even though it's managed hosting, you can still connect easily via API. These hosting models are good if you have consistent workloads. Now as an example, between two vendors on the left here, we have AWS Bedrock serving pre-trained [[LLaMA]] with both one month and six-month commitments. And with [Together.AI](https://Together.AI), you pay by model size per hour. Our second option is per API consumption pricing or serverless pricing. Here we pay by API call with some additional parameters like [[Tokens]] that are used. We connected these models via an API, so it's still easy to use. And these are great for elastic workloads where you're not sure how much of a model you're going to use at a given time. Two examples of this pricing structure include the [[Google]] Translate pricing, where it costs $20 per million characters; or the [[ChatGPT]] pricing where it costs per input and output tokens. Now, diving more into the ChatGPT pricing, tokens are worth approximately a 1,000 tokens to 750 words. And we can see here that output tokens are around three times as expensive as input tokens, meaning that the context you pass into an LLM is cheaper than the output that you generate.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ongoing-costs-for-ai-apis?u=76281980&t=94)** Now, if we were to send a million input tokens and a million output tokens were generated, it cost us roughly 50 cents for the input and a $1.05 for the output. Note that these prices are for March, 2024, but the key concepts will remain the same. Now the third option is plan-based pricing. In this case, for a dedicated plan, you pay per month. Now looking at the [stability.ai](https://stability.ai) platform, you can see that their pricing is based on membership. You pay per month, and you gain different capabilities based on non-commercial, professional or enterprise needs. On top of this, you purchase credits to actually use on the models. What's interesting is when I was planning this video, the pricing was actually a little bit different, matching credits to plan types. This is just another indicator that pricing can change at any point in time, so it's important to understand the key concepts and not the pricing itself. Now, for those of you who have worked at enterprise companies, you might know that the enterprise tier usually has custom pricing, meaning it's very hard to figure out at first how much something costs. This might include minimum spend, hourly consumption, API pricing or more. Now, even though we've talked about three different pricing plans, all of these are for APIs that are easy to use. All you have to do is create an API key and you can start consuming the model. And with that, we've covered the three different types of pricing models that exist for AI APIs. In the next video, we'll go into an example on estimating the cost of a translation feature, working in [[Microsoft Excel|Excel]]
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ongoing-costs-for-ai-apis?u=76281980&t=188)** to put the numbers together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (8), [[ChatGPT]] (2), [[LLaMA]] (1), [[Google]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** api (9), aws (1), llm (1)
> **URLs:** [together.ai](https://together.ai) (1), [stability.ai](https://stability.ai) (1)
> **CLI Commands:** aws (1)
> **Versions:** 1.05 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Estimating cost for a translation feature](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-translation-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-translation-feature?u=76281980&t=0)** - [Instructor] We want to build a little translation tool for a recipes website, but how much will it cost? Let's do some estimation. If we look on how much [[Google]] translates costs, we can see that it costs $20 per million characters. Let's take a look in our spreadsheet to see how much this application would cost under different scenarios. I'm going to go into the exercise files and click on 02_05 under chapter two. So let's go through this spreadsheet. At the top here, I have some starting variables with our cost per million characters, a unit shortcut of a million, the number of characters per recipe, and the free tier provided by Google for translation. Now, let's go through our scenario. We're going to assume that we have 10,000 recipes to start off with. Each recipe has 2000 characters, so we're going to end up with 20,000 initial characters. Now, to calculate this cost, we can multiply the 20 million characters by $20 per million characters and divide by a million as we can see in the formula here. Now, let's go through our monthly translation costs. Let's assume for our website, we have 1,000 new recipes uploaded by users every month. That's going to result in two million characters per month and a cost of $30. Now, the reason that is $30 and not $40 is because we're using this free tier per month discount. Now, if we run the service for two months, we can assume that it costs $460, which is 400 plus 30 times two.
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-translation-feature?u=76281980&t=95)** Now we can expand this to another scenario. Let's go ahead and unhide column B. We assume that our recipes are longer, so the initial costs and monthly costs are going to be more. I've gone ahead and created a little graph up here, which shows these different scenarios. We start off with our initial costs and go up by months. So that's how we can figure out the cost of a recipe translator. In the next video, we'll dive into a more advanced app, which uses retrieval augmented generation, which has more moving parts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Estimating cost for a RAG solution: What is RAG?](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-what-is-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-what-is-rag?u=76281980&t=0)** - [Instructor] Now that we know the basics of [[Generative AI|GenAI]], let's implement a more complex app. Today we will talk about Retrieval Augmented Generation, or RAG. This techniques provides a large-language model context to generate an answer. Breaking it down, retrieval means get the context, augment means add the context to the LLM prompt, and generated means respond to the prompt. Let's take a look at an example. I'm here in [[ChatGPT]], and I can ask, "Why is the sky blue?" So let's type that out, and hit Enter. You can see here we got a response. Generally it looks pretty good. Now, in a more complex case, we might want some domain-specific information. Let's say we trust information on Wikipedia. And right here I have some information on why the sky is blue. So I'm going to go ahead and copy it. Let's open up a new ChatGPT tab. Now what I'm going to do is I'm going to write out a prompt that uses this information. So let's go ahead and type out, Use the context to answer a question. And I'm going to hit Shift + Enter to drop down, and I'm going to type in Context with a colon, paste my information, Shift + Enter twice, put Question. And finally, my question, "Why is the sky blue?" Alright, here we go.
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-what-is-rag?u=76281980&t=92)** We got a slightly different answer where ChatGPT is now summarizing the context we have in addition to the information it already knows. Our goal here is to produce hallucinations, or the things that models make up. So if you have custom data, RAG is great for reducing these hallucinations. Some common use-cases include searching for internal documentation and providing an answer, or a [[Customer Support]] bot. Now let's go through the components of RAG so we know how to price it. The first portion is information upload. The second part is search. And the third one is using a large-language model to summarize it. So for the first two components, we can use embeddings in a vector database. So going into what embeddings are, embedding models help turn text into numbers that we can use to search against. This makes it really easy for [[Vector Databases]] to compare what is similar to what. So in our uploading stage, what we'll do is we'll have some kind of documentation, for example, a document about the sky. We'll then divide that information into smaller components called chunks. We'll then generate embeddings for them and upload them into our vector database. Once that information is in the vector database, whenever a question comes in, we'll also put that into an embedding model. We'll then search the vector database and retrieve the most similar chunks from our documentation. And finally, we'll use that to be our context that we pass into our large-language model. So our context in a large-language model will look like this. Similar to what we showed earlier,
>
> **[3:04](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-what-is-rag?u=76281980&t=184)** we'll have context, the information that we found, and then our question. Now that we know how RAG works, we're going to figure out the price and costs of this type of solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Customer Support]] (1), [[Vector Databases]] (1)
> **Env Vars:** rag (4), llm (1)
> **Analogies:** similar to (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Estimating cost for a RAG solution: Costs of RAG](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-costs-of-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-costs-of-rag?u=76281980&t=0)** - [Instructor] In this video, we're going to learn how to price a RAG solution. In the last video, we learned about the different components of RAG, including the embedding model, the vector database, and the large language model. In today's video, we're going to price out the cost of a [[Customer Support]] bot that uses RAG. So let's head over to our exercise files and click on 02_07 under chapter two. So let's look through the spreadsheet. At the top, we have some miscellaneous variables, as we saw earlier, and then we get into the two parts, uploading data and running our bot. Let's start off with uploading data. We're going to assume we have a thousand documents, and each document has around 500 [[Tokens]]. We're going to split these documents on average into chunks of 300. So in total we're going to have around 1,667 vectors, which are one-to-one to chunks. We can see that here in our formula. Now, we need to embed all these different chunks into their vectors. We can calculate that by taking our documents and multiplying them by the tokens per document. This will give us 500,000. This is typically how embedding models are priced. Next up, we add the vector DB initial costs. So depending on which vector database that you're using, sometimes it costs to upload data. In this case, the pricing model that we're using doesn't have an initial cost, so we've written it down as zero. In the next portion we have the vector size. I just have this information here because depending on the solution that you use,
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-costs-of-rag?u=76281980&t=94)** you might be charged by the vector size for your vector DB. Now finally, let's go through the embedding cost. Embedding costs are actually pretty low. So per million tokens, as of this recording of March, 2024, it costs about 2 cents to embed a million tokens using OpenAI's version three small embedding model. So our total embedding cost comes up to 1 cent. Now this is pretty cheap, and through my experience working at Voiceflow where we use a lot of RAG applications, this is pretty accurate in practice as well. Now, let's scroll down to part two of running the bot. This is where most of the prices come in. So let's start off with the first section up here. We're going to assume that we get a thousand questions per month, and each question is going to be 50 tokens long. So embedding these questions is actually going to be very cheap, in this case, showing close to zero. And we got this by multiplying the number of questions by the length of the question and then figuring out the pricing per million tokens. Now we're going to assume that to actually serve our chatbot, we fall into a free tier of application. So we put a cost of zero. Now, for a vector DB, we're going to assume that we're going to be running this in a high availability mode, and each of these pods, which we're running our vector DB in, we're going to cost $25 per month. In this last section, let's talk about the LLM portion. So we're going to assume that our average response length is a hundred tokens. As we know it's important to separate response
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-costs-of-rag?u=76281980&t=187)** and input lengths because they cost different amounts. We're going to assume we retrieve five chunks per vector search. So in total, our average context length is going to be 1500, which is 300 total vectors multiplied by five. And we can calculate our total input tokens by taking the number of questions that we have by the average context length, and we get 1.5 million. And we can do the same thing with our output tokens. We take the number of questions per month and multiply it by the average response length, so we get 100,000. Now for our LLM costs, I'm using the March, 2024 pricing for [[ChatGPT]]. So that's 50 cents per million input tokens and 1.5 dollars per output token. I'm going to multiply our usage by the cost and get 75 cents per month for our LLM input costs and 15 cents per month for LLM output costs. Now in total we have 90 cents for our LLMs and $75 for the [[Representational State Transfer (REST)|rest]], which includes our vector DB and embedding model, and our total costs are $75.91. So as you can see here, our vector DB is consuming the most amount of money for running this application, and we can go ahead and expand to other scenarios. Click the right and hit unhide. So let's scroll up to the top. So for these different scenarios, we changed the numbers. We adjusted the number of documents that we upload
>
> **[4:42](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-cost-for-a-rag-solution-costs-of-rag?u=76281980&t=282)** for both scenario two and three, and we changed the number of questions being run for scenario two. For scenario three, we use [[GPT-4]] Turbo to summarize our information. So the LLM portion will be more expensive. Let's scroll down and see what the total costs are. You can see here the LLM costs have gone up, and we can see a pricing graph here of what they look like. So for your RAG application, you can continue to expand these scenarios and use the fields provided. So in this video, we learned how to price a RAG application for our customer support bot. In our next video, we're going to learn how to estimate the costs of another [[Generative AI|GenAI]] feature, which is image generation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (10), [[Customer Support]] (2), [[ChatGPT]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[GPT-4]] (1)
> **Env Vars:** rag (6), llm (6), gpt (1)
> **Cross-References:** in the last (1), as we saw (1), in the next (1), next video (1)
> **UI Navigation:** scroll down (2), click on (1), scroll up (1)
> **Versions:** 1.5 (2), 75.91 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Estimating costs for an image generation feature](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-costs-for-an-image-generation-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-costs-for-an-image-generation-feature?u=76281980&t=0)** - [Instructor] Let's calculate the costs for an image gen feature for an [[E-Commerce]] store. We want to generate realistic placements for our product in realistic environments. As an example, imagine we had a flamingo toy and we wanted to place it into a pool. In this case, we wanted to generate the image on the right. Let's go ahead and look at some pricing. I'm on the OpenAI website, and for image models, I can see the pricing here per image. Let's look at the [[DALL-E]] 2 pricing because this is the model that can do this background filling. We can confirm this on the image generation page on OpenAI's website. Only for DALL-E 2 can we make this edit, also called inpainting. So per image, it's going to cost us around 2 cents. Now let's assume for a store, we want to have five variations of four different scenes for our image. If we have 20 items in total, we're going to have 400 image generations. Let's go ahead and check out an alternative provider, Stability AI. Let's say in our case, we fit under their professional membership, so this would be a base cost of $20 per month. On the pricing page, we can see the inpaint cost, which is 3 cents per image. This would result in a cost of $12. So looking at our combined cost, DALL-E 2 would cost us $0 per month, and for 400 images, $8, leading to a total of $8. For [[Stable Diffusion]], it would cost $20 per month and $12 for 400 images, bringing the cost up to $32.
>
> **[1:37](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/estimating-costs-for-an-image-generation-feature?u=76281980&t=97)** Now you might prefer Stable Diffusion's generation quality to DALL-E 2. So it's up to you as a business owner to figure out what the return on investment is for this type of feature. In the next video, you'll receive your first pricing challenge, incorporating what you've learned in this chapter so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[Stable Diffusion]] (2), [[E-Commerce]] (1)
> **Env Vars:** dall (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Estimating the cost of a book summarization](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-estimating-the-cost-of-a-book-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-estimating-the-cost-of-a-book-summarization?u=76281980&t=0)** - [Instructor] Your challenge is to estimate the cost of a book summarization feature. You're working at a library and every time you add a new book, you'd like to publish a summary in a few different languages. You also want to make sure that the summaries include plot, characters and themes. To get you started, I included a sample spreadsheet under chapter 02 and 02_09. From this starting point, you'll need to make some assumptions: how many books you want to add, how many languages to translate to, and what kind of summaries your readers want. Good luck and let's summarize some books.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Estimating the cost of a book summarization](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-estimating-the-cost-of-a-book-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-estimating-the-cost-of-a-book-summarization?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-estimating-the-cost-of-a-book-summarization?u=76281980&t=5)** - [Instructor] So let's go through a solution to this problem. I've divided our spreadsheet into three main sections: Miscellaneous values, Initial Costs, and Monthly Costs. Let's start off with Initial Costs, since we have our main assumptions there. We're assuming that we have 500,000 books in our library with 100,000 words on average per book. We're aiming to translate to five different languages and have three different types of summaries, for plot, themes, and character. Each of our summaries are going to be around 100 words. So to calculate our initial input [[Tokens]], we're going to take our initial number of books, multiply it by the number of words per book. We're then going to multiply it by tokens per [[Microsoft Word|word]]. That's how we end up with 62.5 billion tokens. Now, for output tokens, we're going to do something similar. We're going to take the initial number of books, multiply it by the number of languages, multiply it by the type of summaries we want to do, and by our length. We're then going to multiply it by the tokens per word. Now, let's get to this cost number. We chose Claude 2 as our model for scenario one. Claude 2 has a context length of 200,000, meaning that it can fit our books into its whole context length. Claude 2 costs $8 per million input tokens and $24 per million output tokens. So calculating our total initial cost, we take the cost per input token and multiply it by the number of input tokens. And then we add the number of output tokens
>
> **[1:40](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-estimating-the-cost-of-a-book-summarization?u=76281980&t=100)** and multiply it by the cost per output tokens. We then divide it by a million. As a result, we get half a million dollars as our initial costs. That's pretty pricey. Now, scrolling down into our monthly costs, we're going to assume that we're going to add 1,000 new books per month. Using the same formula, we calculate our input tokens and our output tokens. So we get a cost of around $1,000 a month. If we do this for two months, our costs will be $524,590. Now let's unhide scenario number two. So for scenario number two, we used [[ChatGPT]] 3.5. It has a context length of 128,000 tokens, which should be fine for this application. ChatGPT 3.5 is much cheaper, costing 50 cents per million input tokens and $1.5 for a million output tokens. As a result, the initial total cost is around $32,656. And the cost per month is around $42. Now below, I've graphed out these two figures. You can see here that ChatGPT is significantly cheaper than Claude 2. That's a sample solution to our library question. In this challenge, we took our knowledge from the chapter and learned how to estimate the cost of a complex problem. In the next chapter, we're going to dive into the pricing of the major AI vendors so we can figure out how to do better estimates for more models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (15), [[ChatGPT]] (3), [[Microsoft Word|Word]] (2)
> **Versions:** 3.5 (2), 62.5 (1), 1.5 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 3. Examining Major Vendor Pricing

[↑ Back to Table of Contents](#table-of-contents)

#### [Diving into ChatGPT pricing (OpenAI)](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-chatgpt-pricing-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-chatgpt-pricing-openai?u=76281980&t=0)** - [Instructor] Let's go through OpenAI's pricing in more detail. We'll start off with their public website. So OpenAI offers a few types of models. We've gone through [[ChatGPT]] 3.5 and [[DALL-E]] 2 already. But let's do a refresher. We're on the pricing page here, and we can see the number of different models available. At the top, we see language. If we scroll down, we can see image, and if we keep going, we see audio. Let's scroll up to the language models. Language models focus on the cost per token for various models. We have a number of different GPT models here with different costs and availabilities. We can scroll down and see [[GPT-4]] Turbo. If we go back to our initial brag application, which takes about 1500 input [[Tokens]], we can see that the input would cost around 1.50 cents. And if we were to summarize a book, it costs around a dollar. If we scroll down, there's GPT-4, which is the original version of GPT-4 Turbo. You can see here it's around two to three times more expensive. If we keep scrolling down, we can see here that GPT-3.5 is the most common model that we use. It's much cheaper than GPT-4. So for most tasks, GPT-3.5 works out quite well. If we keep scrolling down, we can see the Assistance API. The Assistance API lets it do context management and [[Data Management]], and provides a managed Breg solution with function calling capabilities. We can also scroll down to [[Fine Tuning]] models. These are around three to five times more expensive than the regular models.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-chatgpt-pricing-openai?u=76281980&t=94)** And finally, we have them embedding models. As we can see here, there are three available embedding models as of March, 2024. These are the cheapest, as we found with our earlier calculations. Now, if we keep scrolling down, we can see our other models. We can see here that our DALL-E models charge per image, and if we scroll up to GPT-4 Vision, it charges per pixel input. Now finally, if you go into audio models, models like Whisper and Text-to-Speech cost per minute or thousand characters. Now let's go ahead and head into my OpenAI dashboard. So on the OpenAI pricing page, when we're actually logged in, we can see a breakdown of monthly spend as a total value and also per model. So that's a summary of OpenAI's pricing for both assessing potential costs and seeing costs in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (5), [[DALL-E]] (2), [[ChatGPT]] (1), [[Tokens]] (1), [[Data Management]] (1)
> **Env Vars:** gpt (8), dall (2), api (2)
> **UI Navigation:** scroll down (4), scroll up (2)
> **Versions:** 3.5 (3), 1.50 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Diving into Anthropic-based pricing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-anthropic-based-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-anthropic-based-pricing?u=76281980&t=0)** - [Instructor] Let's dive deeper into Anthropic's pricing for Claude and Claude Instant. Anthropic only has three models as of March, 2024, so the pricing is pretty simple. We can see here that there are two main model types, Claude Instant and Claude 2.0 and 2.1. Now, if you look at the pricing, Claude Instant is the cheaper model, costing about 80 cents per million input [[Tokens]], which they call prompt tokens, and $2.40 per million output tokens, which they call completion tokens. Now, generally, Claude Instant maintains the same price as OpenAI [[ChatGPT]]-3.5. In the current moment of filming, it's a little bit more expensive. Going back to our write use case, with a context length of 1,500 tokens, it would still be really cheap to implement Claude, costing around 0.1 of a cent. And for our translation use case, it would cost around 80 cents to implement, since we'd be using the full context window. And for summarizing our book of 100,000 tokens, it would cost around 8 cents. Now, if you look at Claude 2 or 2.1, we can see here that it's roughly 10 times as expensive, meaning a write response would be around 1 cent, and summarizing the book would be closer to 80 cents. Now, similar to OpenAI, let's head over to the Usage page. Now, on the Usage page, you can see the number of tokens that you're using per model. We can see our input tokens and our output tokens along a graph that displays the different dates. These graphs let us track our usage over time, which is a handy feature.
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-anthropic-based-pricing?u=76281980&t=93)** So that's a deeper dive into the Anthropic pricing model. Is pretty simple, which makes it easy to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (9), [[ChatGPT]] (1)
> **Versions:** 2.1 (2), 2.0 (1), 2.40 (1), 3.5 (1), 0.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Diving into Google AI pricing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-google-ai-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-google-ai-pricing?u=76281980&t=0)** - [Instructor] [[Google]] has a variety of AI models to use, and as a large cloud service vendor, many are integrated in the GCP offering. Our goal is to understand the structure of the pricing, as the prices themselves might change after this movie is done recording. Let's head over to the Google AI page. Google's AI service is called [[Vertex]] AI. We'll start with the general pricing guide and then move to the model garden where we can see many of the models available to us. Let's scroll down and find the [[Gemini]] models. Gemini is Google's multimodal foundational model, so it can input text, images and videos. In this case, you'll notice that text is charged by every thousand characters, which is different than the other models we've seen that charge by token. And looking at the pricing, we can see here that the text input is quite cheap. If we multiply this by 1000, we'll see that Gemini Pro is priced at 12 cents per million characters, which is roughly 40 to 50 cents per token, depending on the language. And this is roughly the same price as [[ChatGPT]]. Now for output, we can see that it's three times as expensive, meaning that it costs around 37 cents per million characters, or $1 to 1.5 per million [[Tokens]], also comparable to ChatGPT. Now, if we go to an example we talked about before, which is a standard RAG response, Gemini Pro would cost around 0.1 of a cent, depending on the length. If we go back to the context of summarizing a book, it'd cost around 10 cents. And in a multilingual context,
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-google-ai-pricing?u=76281980&t=94)** Gemini Pro would likely be cheaper than ChatGPT 3.5, given the way that the character pricing interacts with different languages. Now, the nice thing about Gemini Pro is that it's similar to [[GPT-4]] in the sense that it can accept multimodal inputs. As you can see here, the image input is priced per image and the video input is priced by second. Images with Gemini are cheaper to use if they're high resolution and more expensive than GPT-4 Vision if they are low resolution. Let's scroll down and go to the next section, which is image-based models. As you can see here by pricing, most of the prices are based per image, similar to what we've seen with [[Stable Diffusion]] and [[DALL-E]]. We also have the opportunity to fine tune a model, and here we're charged per hour. We can dive deeper into this pricing, but that's beyond the scope of this video. Now let's keep scrolling down. We can see here we have multimodal embeddings. These are similar to the embeddings offered by OpenAI, but they also have multimodal capabilities, meaning you can embed text, image, video altogether in one set of embeddings. This capability would allow you to create a RAG application that retrieves video, image, text, and generates the response all at once. Now, if we keep scrolling down, we'll see that there are many, many more models. Now most of this information is beyond the scope of this video, but note that there are many pricing options within the Google page. Now let's jump to the Model Garden. The Model Garden contains a one click shop
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-google-ai-pricing?u=76281980&t=186)** for deploying different types of models. These might be Google's models like Gemini Pro and Gemini Pro Vision, or they could be third party models like Claude and Claude Instant. They could also be open source models like [[LLaMA]] 2 and the recently released Gemma. Now, the benefit of this Model Garden is it gives us the flexibility to deploy and manage both Google and third party models. This is becoming more common among large cloud providers, which we'll see in subsequent videos. Now, to look at a dashboard of our costs, we can head over to the cost tracker in GCP, which is under the billing page. In my case, I'm going to open up the cloud billing reports tutorial, which will show us an overview of the different types of pricing. Compared to OpenAIs and Anthropics pricing, Google's AI pricing is more complex. This is because it's integrated with GCP. Now if we scroll down, we can see that there are many services that'll show up on this pricing. So if you're doing this within your own console, you can go ahead and search for the different AI API ones. Now this is both a benefit and a con. Everything's integrated in one platform, but it is more complex. In our next two videos, we'll be covering the AWS and [[Microsoft Azure|Azure]] based pricing. This pricing navigation will be similar to Google's and GCPs because Azure and AWS are large [[Cloud Services]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (9), [[Gemini]] (9), [[ChatGPT]] (3), [[GPT-4]] (2), [[Microsoft Azure|Azure]] (2)
> **Env Vars:** gcp (3), rag (2), gpt (2), aws (2), dall (1)
> **UI Navigation:** scroll down (3), go to (2)
> **CLI Commands:** aws (2), find (1)
> **Versions:** 1.5 (1), 0.1 (1), 3.5 (1)
> **Analogies:** similar to (3)
> **Cross-References:** we talked about (1), go back to (1)
> **Definitions:** is called (1), is a  (1)

#### [Diving into AWS Bedrock pricing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-aws-bedrock-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-aws-bedrock-pricing?u=76281980&t=0)** - [Instructor] AWS, as the largest cloud vendor, has developed a specialty AI marketplace called Bedrock. Let's dive into its pricing. Let's start out with the first party models that AWS offers called Titan. The types of models are similar to [[Google]]'s, text generation, image generation, and embeddings. The prices noted here are similar to other vendors, in that they have 1k token increments. These [[Tokens]] might be different than the [[ChatGPT]] ones, since each model uses slightly different tokenizers. As of this recording in March 2024, Titan Lite is roughly half as expensive as ChatGPT, costing around 30 cents per million input tokens, and around 40 cents per million output tokens. Titan Text Express is a little bit more expensive, around 60% more expensive for input tokens, and roughly the same price for output tokens. Now going into our use cases, we can see that a RAG response will cost less than 0.1 of a cent still, and for summarizing a book, it'll only be a few cents. Now, if we look at the embeddings model, this costs roughly the same as the Ada v2 for OpenAI, or a little bit cheaper than the v3 option. Now, let's go through some of the image-based models. If we look at the pricing here, Titan's image generator is around half the price of OpenAI's, or Google's image generation, but generally, these models aren't as strong. The more unique aspect about Bedrock, if we scroll down, we'll see the ability to host LLMs at an hourly rate,
>
> **[1:37](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-aws-bedrock-pricing?u=76281980&t=97)** both for AWS first-party models, like Titan models here, or third-party models, like A21, Cohere, [[Stable Diffusion]], [[LLaMA]], and Cloud models. There are also opportunities to fine tune Llama and Cohere models, as well as some Titan models as well. Now, for billing and cost tracking, we would use the AWS services for this. Similar to Google, it's a centralized way to see all your billing across your AI and non-AI services. Now, AWS billing and cost explorer are quite complex, so we won't be diving into it. But if you used AWS before, that's where you can find your bedrock in AI prices. In our next video, we'll dive into [[Microsoft Azure|Azure]]'s AI pricing to found out our big three cloud vendors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[Google]] (3), [[ChatGPT]] (2), [[LLaMA]] (2), [[Stable Diffusion]] (1)
> **Env Vars:** aws (6), rag (1), a21 (1)
> **CLI Commands:** aws (6), find (1)
> **Analogies:** similar to (3)
> **Versions:** 0.1 (1)
> **Cross-References:** next video (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### [Diving into Azure AI-based pricing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-azure-ai-based-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-azure-ai-based-pricing?u=76281980&t=0)** - [Instructor] [[Microsoft]] is well known in their partnership with OpenAI and being able to host those models. In this video, we'll review these prices along with some of the other offerings that [[Microsoft Azure|Azure]] has. I'm here on the Azure AI Services pricing page. If I scroll down, I can see that there are a number of different services available. Let's go ahead and open up the Azure OpenAI service, which I have in another tab. And looking at these prices, they mimic the ones that we have on the OpenAI page. One thing that you'll notice is some models are not available in all regions. In this case, on US West we can only have the [[GPT-4]] turbo models. Now let's head to a region with more options. Let's go to East US. In this case, we can see Chad GPT-3.5 turbo, along with the base GPT-4 models. Some regions have all the models, for example, Sweden Central. Now, with the exact same pricing as OpenAI, many enterprises have opted to use Azure due to Microsoft's enterprise grade reputation and existing integration options. Now's lets go back to our AI pricing page. As we can see here, there are many different categories like image recognition, translation, search, and so forth. Many of these capabilities have their own pricing tables, but let's take a look at how much it would cost to deploy a [[LLaMA]] model. Something that we looked at in the previous videos. So I have this page open already. It's part of the [[Azure AI Studio]] preview option. As we can see here, there's a model catalog with some announcements and model capabilities.
>
> **[1:36](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-azure-ai-based-pricing?u=76281980&t=96)** There are many models that you can deploy. Let's go ahead and scroll up and select the Llama two APIs. We'll click view models and then scroll down to see the available ones. I'm going to click on Llama 2 70 billion parameters chat. If we scroll up a little bit, we can see our different options. We can see pay-as-you-go inference APIs. We can also access this as part of the deploy tab. If we click it, we can see pay-as-you-go, which we pay by token, or a real time endpoint where we'll pay for the underlying resources. We also have the capabilities to fine tune Llama 2. These are also part of the Azure AI capabilities. If we want to see the prices, we can click on deploy model and click marketplace offering, and see the prices here. For input [[Tokens]] and output tokens. Similar to other cloud vendors, AI spend can be found in the billing section under your Azure tenant. So that wraps up our Azure AI summary and our summary of the big three cloud vendors. In the next video, we'll dive into [[Hugging Face]]'s [[Pricing Strategy]] as a large open source player.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[LLaMA]] (4), [[Microsoft]] (2), [[GPT-4]] (2), [[Tokens]] (2)
> **UI Navigation:** scroll down (2), scroll up (2), click on (2), go to (1), select the (1)
> **Env Vars:** gpt (3)
> **Cross-References:** go back to (1), in the next (1)
> **Analogies:** for example (1), similar to (1)
> **Versions:** 3.5 (1)
> **Speakers:** - [instructor] (1)

#### [Diving into Hugging Face-based pricing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-hugging-face-based-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-hugging-face-based-pricing?u=76281980&t=0)** - [Instructor] Let's dive deeper into [[Hugging Face]]'s pricing. Hugging Face is an open source ecosystem company and creates some of the most common open-sourced ML and AI libraries. Let's head to their website. There are two main pricing strategies we'll cover: enterprise collaboration and model hosting. If we take a look here on the right, we'll see this Enterprise Hub. This is a plan that allows enterprise collaboration, allowing teams to share their models and experiments while maintaining audit logs and enterprise standards. This pricing starts at $20 a month per user, like many [[SaaS]] [[Microsoft Products|products]]. Now, you can also host models on Hugging Face. Pricing is dependent on the [[Hardware]] you deploy to host your model. Let's go ahead and click on Inference Endpoints. As you can see here, inference endpoints are billed by the hour. Depending what kind of hardware you use, it cost a different rate. You have CPU instances on the left and GPU instances on the right. For example, if you wanted to deploy a 7 billion [[LLaMA]] model, you could use an A10G, which would cost $1.30 an hour. If you wanted to deploy a Llama 70 billion, you'd probably need two A100s, which would cost $13 an hour. Now, Hugging Face allows you to host many different models, so you can go ahead and search the Hugging Face Hub to figure out what kind of models you can deploy and what resources they need. If we scroll back up, we can also click on the Enterprise Hub. Now, if we scroll down, we can see that part of the enterprise offering.
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/diving-into-hugging-face-based-pricing?u=76281980&t=92)** It can host your models in the Hugging Face ecosystem and connect to your private instances. There's more details on the Hugging Face page on how to do this. This enables you to connect your existing infrastructure with your Hugging Face infrastructure. Since this is the last video of the chapter going through each of the vendors, I've also attached a spreadsheet in the Exercise Files under Chapter 03, 03_06. In this spreadsheet, you'll find the cost for all the different models that we've covered and the different use cases, like a write chatbot or a book summary. Now, in the next chapter, we'll switch our focus from the cost of APIs and platforms to the cost of training our own models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[Hardware]] (2), [[LLaMA]] (2), [[SaaS]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** cpu (1), gpu (1), a10g (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Versions:** 1.30 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)


### 4. Costs of Training AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of technical components and tooling](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/overview-of-technical-components-and-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/overview-of-technical-components-and-tooling?u=76281980&t=0)** - [Instructor] Training AI models is a complex effort, so teams need the correct tooling to effectively do their job. In this chapter we'll cover the landscape of training tools. Let's start off with the most common items, GPUs. GPUs are currently the most efficient chips for training models, and depending on your model size, you can train models with cheaper GPUs like T4s, all the way up to clusters of H100 or A100s, which are highly in demand and usually require pre-reservation. These GPUs usually need to be coupled with standard CPU, RAM, and disk resources to be able to get the data to the GPUs for training. Clean data and [[Data Management]] are key for training models. There are several papers commenting on the importance of clean data. And without a set of data tools training models is extremely challenging. We need to store the data somewhere in a data lake or data warehouse, which can be fed in during training. We also need to pre-process it from raw sources, needing a transformation pipeline. We should also monitor our training and sort the models and revisions somewhere. And finally, we need a team to manage all these different components. Training AI models can be complex, so throughout this chapter we're going to dive into the tools we need to set this up and the costs associated with them. In the next video we'll cover the cost of setting up the training cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Management]] (1)
> **Env Vars:** h100 (1), cpu (1), ram (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up an AI training cluster](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setting-up-an-ai-training-cluster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setting-up-an-ai-training-cluster?u=76281980&t=0)** - [Instructor] Setting up a training cluster is essential to training your AI models. In this video, we'll go through what the training options are, how to use them, and how much they cost. Let's get started and cover the different types of chips available for AI training. We train models by feeding in a lot of data, and to leverage these parallel processes, we usually need chips different from general CPUs. Many techniques have been tried and chip development is an active area of research. Currently, GPUs and TPUs are the leading options. GPUs for AI training are most commonly known, with vendors like Nvidia and AMD providing them. Next, we have [[Google]]'s TPU, or Tensor Processing Unit. These are custom-built by Google and can be found on their [[Google Cloud Platform (GCP)|Google Cloud]]. Now, other vendors have also created their own chips, such as AWS's Trainium chip. Now, the reason that GPUs are typically talked about is because there's a large software suite available for them. Nvidia has taken the lead with their Cuda libraries. These plug into common open source platforms like [[PyTorch]] and [[TensorFlow]]. So let's go through the different options. Most large cloud providers for training models are integrated with tool suites. It could be something like SageMaker, AI Studio, [[Vertex]] AI, or Databricks, and there are many more platforms. Many companies have these platforms already. For new initiatives, we need to make sure that we choose the right type of chip for training our model. So if you're training a small model, a cheap and simple GPU is Nvidia T4. It's great for fine-tuning small models
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setting-up-an-ai-training-cluster?u=76281980&t=94)** like MiniLM or BERT, which are great for tasks like sentiment analysis. T4s are pretty regularly available for most cloud vendors, along with other small GPUs, like A10gs, A600s, or L4s. They're also available for free on Colab because they're an older, cheaper chip. Typically, T4s cost around 180 to $350 a month. Now, if you have more data or want to fine-tune a larger model, you might need a larger GPU or multiple GPUs. A cluster of A10Gs, A100s, or H100s are typically needed to train models from scratch or fine-tune models. A100s typically cost 800 to $2,000 a month per GPU and are usually available in nodes of 8x. These are used to fine-tune models or even train models from scratch. These clusters are currently highly in demand and require pre-reservation. And for these clusters, the cost would be around $1000 a day. Now let's look through two use cases. The first one is training BERT from Scratch. This was a paper published by Mosaic, which is now part of Databricks. They talked about how training BERT from scratch would cost around 22 to $100. So this is pretty affordable for most companies. Now, for a larger model like [[LLaMA]], training the model from scratch should be quite expensive. For Llama 7 Billion, it costs around $80,000 using cloud rates and all the way up to over $1 million if you're training the 65 billion parameter option.
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/setting-up-an-ai-training-cluster?u=76281980&t=188)** And the other complexity is if you're using large GPU clusters, you'll need to change your training process since it'll require training parallelization for your model and data. We've gone through a number of options. It's important to choose the right GPU for the right task. Alternatively, you can look into other architectures like TPU or Trainium. In the next video, we'll cover the other costs of compute that are needed to supplement our GPUs for training models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[LLaMA]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[PyTorch]] (1), [[TensorFlow]] (1)
> **Env Vars:** gpu (5), bert (3), tpu (2), amd (1), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Cross-References:** in the next (1)
> **Tools:** colab (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### [Cost of compute for training AI models](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/cost-of-compute-for-training-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/cost-of-compute-for-training-ai-models?u=76281980&t=0)** - [Instructor] In the last video, we learned that GPUs and other accelerators are essential to our model training. But is that all that we need? Just like we need RAM, CPU, and disk for day-to-day operations, model training requires us to have sufficient resources to transfer the task to the GPUs. Here's an example of the cycle of training a model. We can see here, first, you have to open your files, then read them into memory, send the request to train to the GPU, and repeat the cycle. Now, this process can be changed, optimized, and arranged differently, but we still need these key compute components. Now, you might be wondering, just how much CPU, memory, and disk do we need? Well, the minimum is typically to run some kind of training program, which includes the [[Python (Programming Language)|Python]] and the data. But generally, we don't have to worry about this. Cloud providers bundle CPU, RAM, disk, and GPUs together usually. For example, if we want to run an AWS A100 cluster, we'd already be given 96 CPUs, over a terabyte of RAM, and eight terabytes of disk. So in this case, these resources are already pre-assigned to us. Now, in a more customizable model, for example, on GCP, you might want to deploy a T4 GPU. This would require an N1 VM type, which needs to have at least one CPU and two gigabytes of RAM. Now, typically, you'd want to deploy a little bit more, so getting an N1-standard-2 would cost around $60 a month. Now that we know the training requirements
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/cost-of-compute-for-training-ai-models?u=76281980&t=95)** that we need for both GPUs and other compute resources, we'll talk about the [[Data Processing]] side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Data Processing]] (1)
> **Env Vars:** ram (4), cpu (4), gpu (2), aws (1), a100 (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** python (1), aws (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Data cleanliness and sourcing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-cleanliness-and-sourcing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-cleanliness-and-sourcing?u=76281980&t=0)** - [Instructor] In previous videos, we covered how much training compute costs. But for training models, we need to look at another important ingredient, which is data. Now, data costs come in three flavors, direct costs about storing and processing the actual data and indirect costs, both before the training process and after. In this video, we're going to talk about the indirect costs and actually dive deeper into the data strategy. So what does it mean to have messy data? What happens to our model training? Let's go through the two types of messy data. The first one is missing data, and the second one is mislabeled data. Missing data can be frustrating 'cause you don't have all the variables you need to make a prediction. For example, here, if we have an [[E-Commerce]] use case, we might have a lot of nulls, meaning for certain fields we're missing information. In this table, we can see that for every customer, we don't actually have a full profile. We're missing some combination of the review, rating, and how many up votes they received. Now, this reviews table isn't particularly useful. So either we have to discard this data or find other ways to work around it. Now, what often happens in large companies is actual data sets go missing. We lose track of where this data is, there's a migration that loses some data, or we simply cannot find it, since at an enterprise, we might have thousands or even millions of data sets. Now the second case, which is mislabeled data, can be much worse. In this table, we see that customer ID 652
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-cleanliness-and-sourcing?u=76281980&t=94)** has a review that says, "I liked this product," but they only gave it a rating of one out of five. So now we have two conflicting pieces of information. Which one is true? Did the user like the product, or did they misclick the rating button? It's hard to tell. Now, this type of mislabeled data will really harm our downstream model. Now, there are many companies out there that do data labeling for you. I, for one, receive dozens of emails over the course of a month. But what's important to understand is that you need domain expertise to label the data. You can't just outsource all of these services and expect clean data. So what's important is to either have trusted domain experts who review this data or to manually inspect it yourself. It's even more beneficial if you can catch the data issues early before they're used downstream for other models. And what happens if you skip this data process, whether from a strategic level or tactical level? Well, you might train the model and you might get poor results. Going back to a previous example about how much it costs to train LLM, imagine you spend $1 million on compute and $5 million on headcount, and your model doesn't do that well. What's the ROI? How do you measure that? In this case, this was a training failure. So then you're forced to restart the process. The other risk is that if you have bad data or force your AI team to clean this data, you might lose talent. Data scientists and ML engineers understand that cleaning data is really important, but if they come into a situation that is truly horrible,
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-cleanliness-and-sourcing?u=76281980&t=187)** many of them will leave, since other companies promise better data clarity. So the key thing to understand here is that your data strategy must be part of your [[AI Strategy]]. Otherwise, your bottles won't turn up with the same results that you expect. In the next video, we're going to talk about the data services costs or the direct costs that we mentioned earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[AI Strategy]] (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** we covered (1), in the next (1), we mentioned (1)
> **Env Vars:** llm (1), roi (1)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Data movement and storage](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-movement-and-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-movement-and-storage?u=76281980&t=0)** - [Instructor] Let's talk about the direct data costs when training AI models. There are different types of data costs. First, we need to make sure that we're collecting the right type of data. Typically, we've already built transactional systems to handle our application layer, but there are also additional types of data that we might have, for example, logging data, customer profile data in a CDP, et cetera. Now, those core systems might be outside the purview of an AI organization, but we still need to make sure that we're collecting this data and storing it appropriately. The next type of cost is a transformation process. This includes something like ETL or ELT, which stands for [[Extract, Transform, Load (ETL)|Extract, Transform, Load]], or Extract, Load, Transform. The reason that we need these processes is we need to make sure that our data sets get converted from our transactional or application layers into the format that we need that is ML or AI ready. Which leads to the final type of cost, which is making sure that our data sets are in the format that we need and are stored appropriately. And what many people might have experienced is that data infrastructure is complex and expensive, and this is the case. But the trap that we might run into is that data for analytics and existing systems might be different than the one that we need for AI or ML. Let's go through an [[E-Commerce]] use case. Let's say that we're collecting data for an e-commerce website. For an analytics use case, we might be collecting reviews,
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-movement-and-storage?u=76281980&t=94)** user ratings, and sentiment analysis, and this might be useful for an AI and ML use case, reviews and user data for predicting churn, and sentiment analysis for [[Forecasting]] [[Microsoft Word|word]]-of-mouth growth. Now, for an analytics use case, you might not need product documentation or product information. But for a [[Generative AI|gen AI]] use case, let's say that you're building a support bot, this information becomes very important. In this case, you may need to rebuild your existing data infrastructure for your AI use cases. Now, let's assume that we have all the data that we need. How much does it cost? If we're building a gen AI use case, like with a large language model, we'll need massive amounts of data. One of these data sets that a lot of large language model providers use is called Common Crawl. Common Crawl crawls the internet and exposes this as downloadable website artifacts. As you can see here, every crawl is incredibly large. This information is taken from Wikipedia, but you can find more information from the Common Crawl website. Now, this information is in the hundreds of terabytes per crawl and might add up to petabytes depending what kind of information you're looking for. Now, this information can be stored in static storage, like S3. The pricing for S3 is around $23 per month per terabyte. So to store a petabyte of information, that's $23,000 per month. Now, what's also important to consider is that you might hold hundreds of versions of the same data,
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-movement-and-storage?u=76281980&t=187)** because you might have different cleaning procedures or require different subsets. Now, the other thing to consider is how are you going to use this data? Most cloud providers have a cross-region network cost, meaning if you move data from one region to another, you're going to incur a fee. For example, if you want to transfer a terabyte of data, it would cost around $13 to go from one region to another, let's say to go from US East to US Central. Now, the cost for transferring data out into the internet, let's say, to another cloud provider or service, is even more expensive. That might cost you around $90 per terabyte. This constant transfer might add up as you're training the model and constantly pulling and pushing data apart. Now, if your data strategy involves storing data in a data warehouse, accessing this quantity of data might cost hundreds of dollars per query, so make sure you understand how this data is going to be used. Now, thankfully, training jobs are batch based, meaning that the data that you're using is typically versioned and fixed. So this means this is typically cheaper than streaming jobs or other types of use cases. Now, actually, transferring your data can be quite easy. On AWS, it's a very short command. You ask S3 to sync between one source to another. Now the real cost comes with transformation. Now, let's say you're processing a data set, like Common Crawl, you might need to clean it since it comes from the raw internet. This might include removing duplicates, filtering with some heuristics,
>
> **[4:39](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/data-movement-and-storage?u=76281980&t=279)** or removing content that is inappropriate. You might also do transformations, like joining different data sets, or validating that data has certain consistency, like the review ratings matching the review text. You might also want to run through some smaller models to help label and categorize the data. With all these transformations, you start getting into the [[Big Data]] space and it becomes expensive to pay for all these compute or services that accomplish this. Now, since we're doing batch transformations, we don't have to worry about streaming, unless you're going to do something like continuous retraining, which is a pretty advanced technique. So these are the costs of storing and transforming data in an AI context. In the next video, we're going to talk about AI model iterations and evaluations, since you likely won't just train one version of a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Extract, Transform, Load (ETL)|Extract, transform, load]] (1), [[Forecasting]] (1), [[Microsoft Word|Word]] (1), [[Big Data]] (1)
> **CLI Commands:** make (4), find (1), aws (1)
> **Env Vars:** cdp (1), etl (1), elt (1), aws (1)
> **Definitions:** is a  (2), stands for (1), is called (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [AI model training iteration and evaluation](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-model-training-iteration-and-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-model-training-iteration-and-evaluation?u=76281980&t=0)** - [Presenter] Will training your AI model work on the first time? Probably not. According to Gartner, around 54% of AI projects make it from pilot to production. That means only around half. Now, if we go further back before the pilot into concept, that number is usually much lower. The reason for that is that when you're given a problem, you need to research many models and you need to go through many iterations and evaluations to make sure that the model is good at the task. I like to think about this as a model training pipeline. We start on the left with the business requirements, and once we know what problem we want to solve, we continue on with the literature review. We check what methods have been used for our problem and eventually narrow them down to do some ideation. We do ideation because our data or our domain might be a little bit different. We then combine that with experimentation to find models that eventually work. And eventually, we need to evaluate our model during the evaluation stage to make sure that it meets our standards. At this point, we're going to assume that you have your business requirements. If you don't, make sure these are very concrete and very well-defined. Now, starting off with the literature review. Traditionally, literature has been academic papers, but more recently, we've seen more interesting ideas developed from blog posts or open-source ecosystems. Now the challenge is replicating papers and other sources can be challenging, so you need to budget time for that. In many papers that I've reviewed along with my team, we found some challenges with replicating their results. So you need to make sure that you spend time
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-model-training-iteration-and-evaluation?u=76281980&t=94)** to read the paper well and double check that the code works. The next step is ideation. Similar to literature review, this is mainly a time cost. Researchers need to go ahead and think about the problem and eventually run experiments. In this space, experimentation and ideation often blur. It's hard to figure out if a model works or not without actually experimenting, so this is typically a cycle. For experimentation, you typically want to run 10 to 1,000 experiments depending on the model complexity. The more complex the model, the more iterations you need to run. Or in other words, there's a higher risk of failure because you might not get to the correct idea in time. Now, let's assume that you've chosen the right model architecture, you have clean data, are you done? Probably not. For a lot of models, we do something called hyper parameter tuning. Hyper parameters are things outside the actual model, and they help guide the model to learn a better behavior. Here's an example of what this might look like. We might choose hyper parameters like batch size, dropout, the number of epochs, and the learning rate, and we might iterate over them to get the model to have the lowest loss. In this visualization from weights and biases, you can see here that there are several iterations, and in practice, there might be thousands depending on the number of hyper parameters. Now, finally, you might get to a model that seems to be doing quite well. You now need to go through the evaluation stage. Evaluation is running models on test sets, data that's never been seen before. Some of these test sets are well-known.
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-model-training-iteration-and-evaluation?u=76281980&t=186)** If you've been keeping up with the large language model papers, you'll see many of these benchmarks are reported on frequently, such as MMLU. Now, the challenge with many models, especially [[Generative AI|GenAI]] models, is that there might be data contamination. Test sets might end up in your training sets, leading to misleading results. As an example, in the [[GPT-4]] technical report, they dedicate a section to explain how contaminated GPT-4 might be. In this case, they measure contamination by checking for exact matches or very close matches in the model outputs. Now, these techniques aren't perfect, but they're a great way to figure out if your model's just memorizing training data or can it actually provide interesting results. And many companies have their own proprietary evaluation sets, especially if their domains are quite secretive, or they have sensitive information like healthcare or finance. Now going back to our model training pipeline, we can see here that to make a model successful, we have to go through all these different steps. And what we need to realize is managing an AI project is different than software. There are many opportunities for things to go wrong or for us to reevaluate. As a general recommendation, budget 10 to 100 times the amount of time and money you think a successful model run will take. There's a lot of uncertainty in AI model training, so you need to make sure that the team has adequate time to do so. So in the next video, we'll talk about tracking these experiments with logging, monitoring, and storage since we know that this process can be quite complex.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (2)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** gpt (2), mmlu (1)
> **Analogies:** similar to (1), such as (1)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Speakers:** - [presenter] (1)

#### [Tracking AI experiments](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/tracking-ai-experiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/tracking-ai-experiments?u=76281980&t=0)** - [Instructor] In this video, we'll talk about Tracking AI Experiments. Now, as we mentioned previously, there might be 10 to thousands of experiments that you run when training your AI models. So why is tracking important? First, we want to know what techniques worked and which ones didn't. We also want to identify key data and understand how well our models perform. And finally, we want to deconstruct why we had unsuccessful runs. What can we learn from these types of mistakes or explorations? And what does tracking involve? The first thing is understanding how you run an experiment or logging the results. The second portion is to understand how an experiment is going. So monitoring the training run. And the third is saving those results, making sure that you save them in a reliable storage location. Now, model tracking becomes even more important as part of a team. This is because you're doing distributed work and running multiple experiments side by side. So you need to find a way to maintain good training history, otherwise you might repeat yourself or not learn from your mistakes. And there are a couple of examples of open source frameworks for doing model tracking. One is [[MLflow]] and another one is TensorBoard. Let's quickly take a look at MLflow. So MLflow is an open source project developed by Databricks. It allows you to better understand your models and keep track of them. As you can see here, we can understand some training runs through different parameters. As we keep scrolling, we can understand that there are multiple components to MLflow, the actual experiment tracking
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/tracking-ai-experiments?u=76281980&t=92)** and a whole bunch of other features. Now, if we click on Experiment Tracking, we can see here that the interface is pretty simple. You can understand how your experiments are working and keep track over time. So that's a basic overview of some open source technology we can use. On the managed side, there are vendors like Weights & Biases and Neptune. Taking a look at Weights & Biases, we can see that the interface is quite similar, but the benefit is we can run these experiments in a managed platform. So let's take a look at the pricing. We can see here there are multiple types of plans, for personal and academic use, teams, and enterprise. The items that are tracked for billing are the number of people who join, the number of tracked hours for your experiments, and the actual data that's being stored. Now, let's go through an exercise for pricing this for a team of eight. If we look at the pricing, we can see we fit under the Teams plan. So the cost would be eight times $50 per month, so $400. We can also say that we need one terabyte of storage for all our models, and that would cost around $27 a month. So in total, $427 a month. So in this video, we learned why tracking AI experiments is important with working individually and as part of a team. In the next video, we'll talk about [[Fine Tuning]] models and how this is an essential skill for reducing our costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (4), [[Fine Tuning]] (1)
> **Cross-References:** we mentioned (1), in the next (1)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Fine-tuning models](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/fine-tuning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/fine-tuning-models?u=76281980&t=0)** - [Instructor] As we've talked about in this chapter, training AI models from scratch can be expensive. So what if I told you there's a technique to save time and money and keep the same accuracy for these types of models? We'd also need less data to accomplish this task. So I'd like to introduce you to the concept of [[Fine Tuning]]. We can fine tune existing models to save up to 99% of the costs to accomplish a task. So how do we do this? First, we should find an open source model for our task. Afterwards, we can take our model and our new data, train them together and get a fine tuned model. As a specific example, let's say we've been using [[LLaMA]] for some of our experiments. It's doing quite well, but we want to improve the performance for [[Banking]] specific tasks. So what we can do is we can fine tune LLaMa with banking data and get a variation like banking LLaMa. So let's go through some costs to fine tune. Here I have two different models for two different types of tasks. The first one is I'm taking Bert, which is an open source model, and I'm going to fine tune it for sentiment analysis. I'm going to use the IMDB sentiment dataset, and I'm going to do full fine tuning. I'm going to use a T4 graphics card, and this task takes around 60 minutes and around 68 cents. I got this information from a lightning AI tutorial. Now the second model is we want to fine tune LLaMa2 to be more conversational. We can use a dataset like Databricks Dolly and use a technique called QLoRa and fine tune on an A10G, which on AWS is called MLG5 for xlarge.
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/fine-tuning-models?u=76281980&t=95)** Now this will take around 8.8 hours and cost around $18. I got this information from a technical lead who wrote a blog post on [[Hugging Face]]. So you can see here that there are different techniques that you can actually use. So let's dive into them. The first technique is a full fine tuning where we take the data and we train the whole model that we've actually used, so the whole model becomes adapted to this task. The second technique we can use is we can only use partial layers, meaning we freeze the layers of earlier models and only apply the data to later ones. This technique actually works quite well. The final technique that's become more common recently is called Parameter Efficient Tuning. One of these techniques has become incredibly popular in the industry called LoRa, where you train an adapter on the side and only adjust the parameters in that adapter, and afterwards, you either have the choice of keeping the adapter on the side and running the two models together or merging it back into the original model. So fine tuning is a great way to save time and money. Now, we've talked about the different techniques and tools that we can use for training models, but you need someone to do that. In the next video, we'll talk about hiring the team to train our AI models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (4), [[LLaMA]] (3), [[Banking]] (3), [[Hugging Face]] (1)
> **Definitions:** is called (2), is a  (2), is an  (1)
> **Env Vars:** imdb (1), a10g (1), aws (1), mlg5 (1)
> **CLI Commands:** find (1), aws (1)
> **Versions:** 8.8 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Hiring the team that trains the models](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-that-trains-the-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-that-trains-the-models?u=76281980&t=0)** - [Instructor] Let's talk about hiring the AI training team. Now, this video is meant to provide a framework on how you can approach the different skill sets that are needed. Every organization is a little bit different, so this isn't meant to be prescriptive, but rather a high-level overview. So let's go into the different skill sets that are required. Typically for AI training, I'd say that there are five key skill sets, understanding the business problem and prioritizing, processing the data, training the model itself, deploying the model, and integrating the model with your existing systems. Now, let's go through some different team sizes to understand how we might structure a team. In the small team, you might have a product manager and a couple ML generalists. These people can accomplish all these different tasks, do some [[Data Processing]], train the model, deploy the model, and integrate it together. A common title that we've been seeing recently is member of technical staff. This sounds a little bit cooler than ML generalist, but it's generally the same thing. Now, if we have a medium-sized team, we can start dividing it into a modeling side and a deployment side. So in the modeling side, we might have a few generalists, and somebody who specializes who can really solve those hard problems. On the deployment side, once again, we can have a few generalists, have an ML infra engineer for doing some of those optimizations and understanding the cloud side of things. And we can have a back-end engineer to integrate things together, and this can be managed by a product manager who takes care of the business requirements.
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-that-trains-the-models?u=76281980&t=93)** Now, as we move into a larger team, we can start specializing more. On the training side, we can have people working on the data, researching new techniques, applying those research techniques and those building internal tooling to improve the training process. On the deployment side, we can have folks that optimize the models, build the deployment infrastructure, have back-end engineers integrated with our product, and have all this managed by a product manager. So there are different ways to structure these teams, but the most important thing is making sure that you have the skill sets you need. And this is a very important question to ask, which skill sets do you need? For example, if you're working with large models, you need to understand how to do multi-node training on complex infrastructure. You need to understand how to conduct evaluations and make sure that your model performs well. You need to keep track of modern research techniques, and you have to spend a lot of time doing data processing. Now, we've covered this before, but I reiterate these skills because they're highly in demand. Top LLM researchers working in the [[Generative AI|Gen AI]] space make over a million dollars per year, so this can get very competitive. If we look at some online compensation reports, like from Levels.fwy, we can see that many OpenAI researchers make close to that $1-million mark, and the more senior ones can make even more. Similarly, for [[Google]] software engineers, and especially the ones working on [[Large Language Models (LLM)|large language models]], more senior engineers can make $1 million or even more. So if you're hiring for the same skill sets as these large companies,
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-that-trains-the-models?u=76281980&t=186)** you might be out-competed on compensation. Now, going back to this question, what are the key skills your team needs? What are the business problems you're solving? These might be different than what these large companies like Google or OpenAI are actually working on. My recommendation is to go back to the basics. You need to understand your users, understand your data and domains, be able to build and consume APIs, be able to fine-tune models, and be able to deploy on [[Cloud Infrastructure]]. These requirements are more general, and you can find people who are more generalists to work on these problems. Now, to talk about quickly on how I've hired for my AI team, I've generally focused on generalists. I work in the AI space that relates to [[Natural Language Processing (NLP)|natural language processing]], so that's been a skill that I've been looking for. I also look for experience in cloud infrastructure 'cause we need to deploy our models and manage them. And the third thing that I really looked for is communication, the ability to keep track and communicate what you're working on. This is really important because our team interfaces with many business users and many customers. So wrapping this chapter up, we focused on how to hire an AI team. We really want to understand what kind of key skill sets we're looking for and how we can structure it. In our next video, we're going to have a challenge focusing on the cost of developing an AI model for an enterprise-size company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (2), [[Google]] (2), [[Cloud Infrastructure]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **CLI Commands:** make (5), node (1), find (1)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is a  (2)
> **Env Vars:** llm (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Training AI for your enterprise](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-training-ai-for-your-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-training-ai-for-your-enterprise?u=76281980&t=0)** - [Instructor] Your challenge is to estimate the costs of AI model development for an enterprise. The model that you'll be building is a reviews classifier, and your goal is to create a budget ask for your manager. I've created a starter template under the exercise files under Chapter 04 04 10. Let's check it out. What you'll notice in the starter template is most of the model training parameters are filled out. I've assumed that you'll be training a BERT model, your dataset size, and then some additional information for the costs. On the right-hand side it's more of a question of putting together the team and [[Forecasting]] the cost of additional tooling. Once you put all these different costs together, your goal is to make a budget ask. Good luck and I'll see you in the next solution video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (1)
> **Env Vars:** bert (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Training AI for your enterprise](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-enterprise?u=76281980&t=5)** - [Instructor] So let's go through a sample solution. I'm going to start off with the left hand side of the spreadsheet to go through some of our assumptions for model training. So we'll start off with columns A and B. So my assumption is that we're going be using a bird based model fine tuned from [[Hugging Face]]. On B4, I assume that our data set is going to be 250,000 entries. B5 is a calculated metric. Looking on the amount of data we can process, per second per layer on a T4 graphics card. Now on B6, this is a hyper parameter, figuring out how many layers we're going to fine tune. In this case, I'm assuming we're going to fine tune the whole model. And finally on B7 is the number of epochs we're going to train for. An epoch is a single pass of all the data, meaning five epochs is passing through all the data five times. Now in B9, we have an all-inclusive cost for GPU, CPU, RAM and disc. We're assuming we're using a T4 graphics card, and these are the average cloud costs. Now, based on the number of layers we have, the graphics card we're using, and the number of epochs, I've calculated our time to [[Fine Tuning]], which is around 500 minutes. I've also added five minutes for boot up time to get all this infrastructure started. In multiplying our cost per hour on B9 by our total time on B12, we're going to get our total cost per model run, which is around $5.89. Now in practice, this might vary. We're using this as a reasonable assumption. Now let's head over to the right side of the spreadsheet.
>
> **[1:38](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-enterprise?u=76281980&t=98)** I'm going to start off in column G and H. In these two columns, we make assumptions on our team structure. I've estimated my team is going to be four people. Each engineer is going to cost us around 250,000 per year, and the project is going to last two months. Let's go ahead to DNE so we can put together our final budget ask. At the top, we have our tooling. I've assumed that our experiment tracking is going to cost around $150 per person per month. This is higher than the $50 we saw earlier, but we're an enterprise, so likely it's going to cost more for the additional features. Now, in E3, I've included an internal chargeback. Internal chargeback is when one team in a company charges another team for its services. So we might not manage the data tools that we need, but we should be paying for our share based on another team's expenses. So I've estimated that to be around $10,000 per month. Next, on E4, I estimate that we'll run around 100 experiments to validate that our data is working well and to choose the correct model, the number of Brit-based models, as well as other data validations that we can run. We're estimating that'll be around 100 times. After we validated our model and our data set, we're going to go ahead and run our hyper parameter tuning. We estimate we're going to do this 50 times. Now to add up all these costs, we're going to have $10,000 per month, taking into account the chargeback and the experiment tracking. Our training costs will be around $883
>
> **[3:12](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-enterprise?u=76281980&t=192)** based on the number of experiments that we're doing and our final hyper parameter runs. And finally, we have our total labor costs, multiplying our team size by the yearly rate, and then multiplying by the number of months our project will take. So this total cost will be around $188,000. So I'm going to ask my manager for $200,000 to complete this project. Now, the difference between the total cost and the budget ask are quite small. The reason for this is that in our project length, I've actually doubled the capacity that I think that it would take to run this project. So we have some buffer estimated in, just in case anything goes wrong on the modeling side, data side, or final business objectives. So through the sample solution, we've learned how to estimate model costs, labor costs, and additional tooling, and make a concrete ask for delivering this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1), [[Fine Tuning]] (1)
> **Env Vars:** gpu (1), cpu (1), ram (1), b12 (1), dne (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Versions:** 5.89 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Training AI for your start-up](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-training-ai-for-your-start-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-training-ai-for-your-start-up?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-training-ai-for-your-start-up?u=76281980&t=5)** - [Instructor] Your challenge is to estimate the costs of an AI model for a startup, and we're going to be building the same system we built in our last challenge video, which is a reviews classifier. But the difference is that startups have less money and time. So your goal is to create an estimate on how to deliver this project in one week. We'll be using the exercise file under chapter four, 04, 12. It's very similar to what we've seen before. Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Training AI for your start-up](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-start-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-start-up?u=76281980&t=0)** - [Narrator] Let's go through a sample solution for training our AI model for a startup. So because this template is very similar to our previous one, let's go through the differences. So on the left-hand side, I've changed a few numbers. The first one is that we're going to fine-tune a fewer number of layers. This will reduce the amount of training that we need to do both in time and money. We've reduced our training time and training cost by 75%. Now going over to the right-hand side, let's start off with our team structure. So we're going to assume this is a team of one. We're just having one person involved. We're going to assume that we avoid a lot of communication risk, and we can focus on delivering on the project. This yearly cost will be around $200,000, since startups might pay a little bit less. Now let's go into our additional costs. For experiment tracking, we're going to mark this as $50 'cause we don't need the enterprise features. Now you might wonder, why are we still using experiment tracking tooling? A person who costs around $200,000 a year costs around $100 per hour. Now if this software saves us half an hour each month, we break even. So let's stick with the tooling 'cause developer productivity is really important. Now column E3, you can see that I changed it from a monthly chargeback to just data tooling. I'm assuming that it'll cost us $100 to process the data and store the data. Now the number of experiments I've reduced to just 10,
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-training-ai-for-your-start-up?u=76281980&t=93)** but I've increased the number of hyper parameter runs, and I've done so because we'll spend more time optimizing the model on compute time rather than engineering time. So our tooling costs will be $150 for the one month since we have to pay for the whole month for most vendors. Then our training costs will be around $242. Our labor costs for the month will be around 16,000. We're only assuming it's for a week. So if we look at our total costs, it'll be around $4,559. Now what's interesting from a startup perspective is that we don't budget in the same way. Typically, you budget on your spend, so how much money is going outside the startup and the time it takes. So I'm going to ask for $400 for the tooling that I need, for training the model, keeping track, and processing the data in one week time for this project. Startup estimates are a little bit different than enterprise, but it's a great exercise to go through and figure out where they're different. It might just help you on your next job.

> [!info]- Semantic Content
>
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Costs of Hosting AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Hosting and running your AI models](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hosting-and-running-your-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hosting-and-running-your-ai-models?u=76281980&t=0)** - [Instructor] You have an AI model. Now what? In this video and chapter, we'll be talking about the key components of hosting and deploying AI models. We'll talk about three main things in this chapter, the challenges of deploying models, choosing the right [[Hardware]] and predicting costs. So why is deploying an AI model challenging? There are six main reasons. Many of these are similar to the ones we talked about in the training chapter. Starting off, we have the differences between the research and production environment. Sometimes this is a hardware difference. You might have differences between how you simulate the model and how it's actually being used. The third one is integrations. Depending where your model's being deployed and what systems it needs to connect to, these integrations might be very challenging. The fourth reason is that training data and real world data might be quite different. This could impact the performance of your model. Fifth reason could be latency and throughput challenges. Your model might not perform up to user expectations. And finally, your source data and your model might have sovereignty challenges for compliance or regulatory reasons. And many of the challenges that you'll experience are similar to [[Software Development]] challenges. If you're working in a siloed way, your development will suffer. So it's important to think about deployment before training. Let's go through an example. If you have a low latency requirement, you might need to take into consideration some things when training. For example, you should consider using a smaller model, spend more time on optimization techniques for latency
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hosting-and-running-your-ai-models?u=76281980&t=94)** and research the hardware you're deploying on before going through the training process. So in essence, this [[Forms]] the circular loop. Model development and model deployment should be an iterative process with teams communicating and working together. So even though I separated these into separate chapters, they're part of a unified process. Another example is deploying a GDPR compliant model. For GDPR compliant models, we need to make sure that we have explicit consent on the training data. This will affect how we gather data in our user feedback system. Oftentimes, we also need to host our data and our model in the EU. If we're working in specific sectors like healthcare or finance, there're even stricter requirements. Now, hosting a model is similar to running software. It's usually considered to be OpEx, and it'll depend which kind of hardware you use for these operations. It really depends on the use case. So in the next video, we'll go through some case studies to look at AI hardware hosting options and dive deeper into the cost analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5), [[Software Development]] (1), [[Forms]] (1)
> **Analogies:** similar to (2), for example (1)
> **Env Vars:** gdpr (2)
> **Cross-References:** we talked about (1), in the next (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Running your own models or outsourcing](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/running-your-own-models-or-outsourcing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/running-your-own-models-or-outsourcing?u=76281980&t=0)** - [Instructor] Hosting an AI model can be tricky. So do you host your own or outsource? This is an important decision to be made, so let's go through some different parameters to consider. Our considerations are quite similar to the AI API usage we covered in chapter two. The important things are time to market, integration points, team structure, compliance requirements, and one more of infrastructure availability and outputs. Now there are a spectrum of options. You could either host yourself or have a fully managed solution. Closer to the host yourself option, you can run everything in your own data center, buying your own [[Hardware]], and going through this procurement and hosting journey. If we move further right, we could implement a cloud [[IaaS]], so we'll have managed hardware. We could keep going further and have this platform be deployed in another cloud environment, but be peered back to IAAS and connected via something like a private link. We also have the option of hosting on a third-party platform, which is even closer to a fully managed solution. For a first-party platform. we could deploy Databricks within our AWS or [[Microsoft Azure|Azure]] environment. We could also have a peered platform, like having a [[Hugging Face]] deployment peered back to our VPC. We can have a third party platform like DataRobot that we connect to over the internet, or we can use a fully managed solution, like hosting models in a platform like Gradient. Now, which option should you choose? In most cases, simple is best, and because of that, it's important to consider the time to market.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/running-your-own-models-or-outsourcing?u=76281980&t=94)** So usually using something more managed is beneficial. Now, there are many reasons to build your own. You might have an experienced team, several integration points you need to connect to, or compliance requirements. Now, a key question to consider that really helps me frame this discussion is, is hosting an AI model a key competency for you? Or is it just another expense to deliver on your business value? Another consideration might be to optimize for CapEx, purchasing on-prem hardware, and using that throughout the lifecycle of these models. Another key consideration is making sure to integrate with your data strategy. It becomes very chaotic if your data lives on prem and your compute is in the cloud, and vice versa. It's best to make sure that your data strategy once again aligns with your [[AI Strategy]]. So in this video, we learned about the different types of solutions we can use. Now, in the next video, we'll go through the hardware costs of actually deploying our AI models for different types of use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[IaaS]] (2), [[Microsoft Azure|Azure]] (1), [[Hugging Face]] (1), [[AI Strategy]] (1)
> **Env Vars:** iaas (2), api (1), aws (1), vpc (1)
> **CLI Commands:** aws (1), make (1)
> **Cross-References:** we covered (1), in the next (1)
> **Definitions:** is an  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Choosing the right hardware for AI models](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/choosing-the-right-hardware-for-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/choosing-the-right-hardware-for-ai-models?u=76281980&t=0)** - [Instructor] Let's talk about [[Hardware]] costs for AI hosting use cases. In this case, I typically think through three important considerations: Latency, throughput, and model location. Let's start off with latency. Latency requirements depend on your user expectations ranging from milliseconds to days. If you're on social media, and you're trying to find the next post, it should show up very quickly, otherwise you'll turn off the app. And if you're working on more of a business process, like batch document processing, this might take hours or maybe days to do so. It really depends on the use case. What's important to understand here is that different use cases have different latency requirements. The next consideration is throughput, which is the number of requests per second that you need to handle. And finally, we have model location. Model location can mean a number of different things. For example, there might be significant cost variance. In US Central versus Hong Kong, there's actually a 40% difference in the price of T4 GPUs, that's pretty material. Next up, there might be local compliance rules, whether GDPR, or other regulations. And finally, some use cases might have spotty internet access, so you might need to deploy on Edge. So let's go into our first case study: Document Processing. My case study is that I need to extract some entities from a hundred thousand documents overnight. Entity extraction is a key thing that we need to do in the AI space, whether it's redacting people's names, labeling locations, or extracting key pieces of information. Let's compare this on a number
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/choosing-the-right-hardware-for-ai-models?u=76281980&t=93)** of different hardware options. So to process a hundred thousand documents, we're going to look at CPU hardware, T4 GPUs, and A100 GPUs. We'll assume we have a hundred thousand documents and each of them are broken down into a hundred million chunks. These chunks are the pieces of information we'll feed into the model to extract entities on. Now, for each of these pieces of hardware, I've put down some estimated throughputs. On A CPU, we can process around 200 chunks per second on a T4, 6,000 and on A100, 60,000. These will vary with the model and some other parameters. But let's start with these assumptions. Now, the runtime to process all this information would be around 139 hours for the CPU. 277 minutes for the T4. And 27 minutes for the A100. So do all these hardware options meet our latency requirements? Well, the CPU doesn't, 139 hours is closer to a week than overnight, so that won't do. But a T4 and A100 meet this requirement. Now looking at our total cost, the A100 actually ends up being cheaper, because it has the best throughput to cost ratio. Now if we think about where we're going to deploy this extraction model, we might need to deploy per region if we're dealing with some sensitive information. But since this is a batch process, we'll be using our hardware elastically so the cost shouldn't add up too much. Now the thing I've oversimplified here, is that other services are required, and these take time and cost, for example, loading and preparing this data. Now, caveat to my calculation,
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/choosing-the-right-hardware-for-ai-models?u=76281980&t=188)** is that we can actually run multiple VMs at once with CPUs. This will help us meet the latency requirement, but it's still not the most cost effective manner to do so. Now, what's also interesting is that if we set up our architecture correctly, we can take advantage of something called spot instances. Spot instances are when a cloud vendor offers a certain piece of hardware, but can reclaim it at any time. And because of that, if we're running short batch jobs, it might be a perfect use case to take advantage for cost savings. Now let's look at a second use case, a chatbot. I'm pretty familiar with the system, so I designed the main AI architecture for the company that I work at. Now, looking at our table, our calculations are a little bit different. Let's say that we're processing around five requests per second for our chatbot. Our throughput is roughly the same since we're using a BERT Base bottle. But our latency is actually quite low. Each request only takes around 20 milliseconds on a CPU, two milliseconds on a T4, and around one millisecond on an A100. Now, all of these meet our latency requirements, 'cause the average person's reaction time is 200 milliseconds. Now, chatbots need to be run continuously, so these costs per hour actually add up. So with the 20 millisecond latency, A CPU works well, and it's the cheapest option. And from a deployment perspective, we're going to have three different deployments of the same model, 'cause we want to have high availability. People rely on our chatbot for continuous access, and we need to make sure that we can deliver. And from a location perspective, we're going to deploy per region to reduce the latency
>
> **[4:41](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/choosing-the-right-hardware-for-ai-models?u=76281980&t=281)** and comply with any data sovereignty or model sovereignty rules. Now, in this video, we've talked about two key case studies, and we've gone through our three important considerations, latency, throughput, and model location. In the next chapter, we're going to learn about logging and monitoring for AI inference. If our models have any issues, we want to make sure we know when they happen. AI downtime is no joke.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (7)
> **Env Vars:** cpu (6), a100 (6), gdpr (1), bert (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Warnings:** caveat (1)
> **Prerequisites:** set up (1)

#### [Logging and monitoring AI inference](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980&t=0)** - [Instructor] What happens if your AI service goes down? There's a potential for immense business impact. In this video, we'll talk about the importance of observability of AI systems. Observability is typically broken down into two main components: logging and monitoring. So why do we need each of those? To start off, if you're selling an enterprise product, you've probably heard of SLAs before or service-level agreements. This is an agreement between you and your customer and what they can expect. Part of that is uptime. SLA uptime is a contractual obligation to the availability of your product. You might have different SLAs for different parts of your product. And there might be penalties if you don't meet these SLAs. Some common SLAs include 99.99, or four nines, 99.9, or three nines, 99.5, and 99% uptime. In this chart, I've included some allowable downtime metrics based on year, month, week and day. Now, if you miss an SLA, in your contract, there's typically a term for refunding your customer a portion of their bill. This is an example from [[Google]] Translate. If their monthly uptime percentage dips below a certain amount, they'll provide a credit to you for future billing cycles. Another common item of SLAs is an alerts policy. So if you have a major issue, you might incorporate that procedure into your SLA. Now, to support these SLAs, both on the uptime and the alerting side, you need to monitor to know when something goes wrong
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980&t=93)** and you need logging to know what went wrong. So let's talk about the metrics used for alerting. These are typically metrics that affect the [[User Experience (UX)|user experience]]. These might be things like latency, throughput, user feedback, or error rates. You want to know when something goes wrong in your app, and this depends on what you're actually building. From an AI perspective, all these factors play an important role in the user experience. Now, there are some challenges in monitoring AI applications. The first one is data drift. So the data that comes through your application might change. There's model drift. You might update your model and have to update your metrics as a result. There's concept drift, which is the way that your application might be being used, and there's general software and integration challenges that affect all types of software applications. So diving into data drift, there are different types of data drift that exist. Some might be sudden drifts where the data completely changes. In an [[E-Commerce]] use case, this might be interest for a whole nother product. Something might be in fashion, or there might be a viral video going on about it. There might be a gradual shift. People slowly changing their buying habits. For example, going from landline phones to mobile phones. There might also be an incremental drift. For example, the buying demographics might be getting older for a certain type of product. Or there might be some reoccurring concepts like seasonality, buying different types of [[Microsoft Products|products]]. For example, holiday gifts. And just because you have data that changes
>
> **[3:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980&t=185)** doesn't mean that the model will suffer. Really good models actually adapt to all these data changes. Now, getting into the differences between concept drift and data drift. So in data drifts, the distribution of the data might change. For example, people are buying different types of phones, whether it's Pixels, iPhones, Samsungs, et cetera. That distribution might change if you're providing a recommendation on an e-commerce store. And sometimes environment around the user changes. For example, if you've built a recommendation model for holiday merchandise, you probably shouldn't have it running in the same way in July as you do in December. Users' goals in those different times will be very different, so you have to adapt for them. And looking at model drift. So this is important both when you're deploying your own models or using third party ones. Let's say for your system, you upgrade from GPT-3.5 to [[GPT-4]]. These models behave in very different ways. Some things that change are things like latency. The latency between GPT-4 might be doubled that of 3.5, so your alerting metrics for latency need to change. Likewise, you might be upgrading from the November version of GPT-3.5 to the January version of GPT-3.5. And the actual results might be different. I actually experienced this when we were upgrading models. The model performance was actually 10% different for a certain use case that we had, which made quite an impact. Now from a software perspective, all these AI models still need to be integrated with your system. There's a recent postmortem posted by OpenAI,
>
> **[4:40](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980&t=280)** which talked about how they had unexpected responses from [[ChatGPT]]. What the postmortem details is that the LLMs are generating responses, and something was lost in translation in the sense that the generated responses did not match to the standard [[Tokens]] that were typically used. In this case, the integration between the [[Hardware]], the software, and the results being served by ChatGPT were not consistent. So something was lost in translation and it resulted in a poor user experience. Now, these types of bugs happen all the time, so it's not unique to OpenAI. I've personally dealt with this dozens of times, and many companies will continue to do so. Now we've recapped the importance of monitoring. Let's talk about logging. Logging is important because it tells us when a certain issue occurred. It tells us which service broke and which line of code broke it. And in a more advanced version of logging, sometimes called tracing, we can actually piece together how things broke and how it propagated through the system. Now, logging is a little bit more complex than that, but from a high level perspective, logging is very important to help your team triage what went wrong and provide solutions. Now, there's significant impacts on the business. If your service goes down, there's a reputational risk of people trusting your product. People might not be able to sign up or use the product at the time, so you lose that opportunity. Customers might leave the product due to this impact, and you might have to do a contract payout based on the SLAs.
>
> **[6:13](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/logging-and-monitoring-ai-inference?u=76281980&t=373)** We'll be going through in more details about the impact on the business in the future video. But the core idea to know is that downtime has high business impacts. Now, the challenge here is for each additional nine of uptime you achieve, it becomes exponentially more expensive to maintain. So it's all about trade-offs. The more uptime you guarantee to a customer, the more expensive it becomes. So how do you do logging and monitoring for AI systems? The best way to start is with the standard software tooling. Let's look at two Datadog services that are about monitoring through service tracking and log management. On the monitoring side, you're generally charged per service. On the logging side, you're charged by the amount of data you generate through your logs. And the observability space for logging and monitoring can be very complex. There are many vendor tools available, and especially when you start getting into the AI space, there are many more. But the key point of this video is the importance of the observability of AI systems. You need to know when your systems go down and how to fix them. And in the next video, we'll talk about hiring the team for running these AI models and making sure that they deliver impact to your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (3), [[E-Commerce]] (2), [[GPT-4]] (2), [[ChatGPT]] (2), [[Google]] (1)
> **Env Vars:** gpt (5), sla (3)
> **Versions:** 3.5 (4), 99.99 (1), 99.9 (1), 99.5 (1)
> **Definitions:** is an  (3), is a  (2)
> **Analogies:** for example (5)
> **Code Identifiers:** iphones (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Hiring the team for AI inference](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-for-ai-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-for-ai-inference?u=76281980&t=0)** - [Instructor] In this video, we'll talk about hiring the AI deployment team that we need to succeed. A key distinction here is that the skills for running models are different than for training them. Now, if you're running in a small team, you might just have a number of ML generalists. This model is still very valid, but let's go through the skill sets that this team needs to be successful for deploying models. So there are three key skill sets that we need. The first one is managing infrastructure. The second one is model optimization, and the third one is model observability. Now getting into the business knowledge, it's also important to understand the usage patterns of these apps and digging into how the users will consume them. Model optimization is about understanding the business requirements and making the model perform to those standards. This might include technical things like post-training optimizations with techniques like compiling or quantizing the model. In certain cases, to get the model to perform at the level that you need, you might need specialty [[Hardware]] knowledge. For example, there's a great blog post that [[Hugging Face]] put out, to how to optimize the BERT model to get under a one millisecond latency. This blog post is a technical read, but it is very interesting to understand the thinking and process of optimizing your models. Now on top of optimizing your models, you need to be able to manage the infrastructure that you run these services on. This includes choosing the right hardware, being able to scale with demand, and optimize the costs for your budget. And you also need to integrate these models
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/hiring-the-team-for-ai-inference?u=76281980&t=92)** with other services so the integration layer becomes very important. Now going back to the previous video, we talked about how important model observability is, and in this case, we want our team that is managing the deployments to implement logging and monitoring solutions. They need to be able to set up alerting and when something goes wrong, work with the training team to understand the issues and address them. Now, as the team scales and becomes larger, people might need to become more specialized to work more efficiently. And as you're working with larger models, they'll become harder to deploy compared to more traditional ones. This is why when running a large language model or other [[Generative AI]], people who can deploy these models and put them into production efficiently are paid very well. In the next video, you'll receive a challenge for running AI for your start-up. This will be a cost estimation exercise in understanding the moving parts we need to succeed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Hugging Face]] (1), [[Generative AI]] (1)
> **Cross-References:** previous video (1), we talked about (1), in the next (1)
> **Env Vars:** bert (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Running AI for your start-up](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-start-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-start-up?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-start-up?u=76281980&t=5)** - [Instructor] Your challenge for today is to figure out the cost of running AI models for a startup. The feature that you're building is to classify user review sentiment. We have some requirements for this exercise. The first one is that reviews should be classified in at most every 15 minutes. There's an average of a hundred reviews per second that are posted, and they spike up to a thousand per second during the max time. The model that you've been given is a Bert-based model, and the average inference time is a hundred milliseconds on CPU, and this model can handle about 30 requests per second. The engineering estimate is one month to deploy and estimate the model. And you need to budget for one year. So your challenge is to propose a budget. I've included a starter template for you. On the left hand side, you'll find some values for the different [[Hardware]] you can use to host this model. Within this section, you'll have to calculate which hardware works best and its average cost. On the right hand side, you'll be calculating the cost of additional tooling. You'll need to take in account the team structure, engineering grade, project length, and the amount of maintenance you need to do on this project. At the end, you'll need to come up with a budget ask for one year to run this model. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** find (1)
> **Env Vars:** cpu (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)

#### [Solution: Running AI for your start-up](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-start-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-start-up?u=76281980&t=5)** - [Instructor] Let's go through a sample solution for running through our use case. Our solution is under 05_07 in the exercise files. Now let's get started on the left hand side, which includes our model costs. We know that on average, we'll get 100 requests per second with 1000 max requests. Combining the request number with the throughput, we can calculate the average amount of [[Hardware]] we need and the max amount. We get this by dividing the average request per second by the throughput and then taking the ceiling 'cause we can't have fractions. We can do the same thing for the max number. So if you deploy this model on the CPU, we'll need on average four CPU VMs spiking up to 34. For the T4, we need one and two, and for the A100, one on average and one max. Now on line eight, we have the same cost we used for the training side for the cost per hour. We can then multiply this value by the number of units we need to get our average cost per hour. Now in line 15, we have our scaling strategy. So since we're a startup and we want to keep costs low and we have that 15 minute latency requirement, we can keep just one instance of the CPU running. And if we get more throughput, we'll just autoscale. We'll do the same thing for a T4 and for an A100, we won't need more than one instance. So then we get the raw cost per month. This cost does not include any discounts. So in 918, we'll apply the ongoing usage discount to get our final total cost per month.
>
> **[1:38](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-start-up?u=76281980&t=98)** So in line 20, we get our final costs, around $115 for the CPU, $300 for the T4 and around $2,070 for the A100. Now going over to the right side of our spreadsheet, let's start off with a team structure. So since we're a startup, we'll assume we have a team size of one. Our engineering rate is 200,000. Same thing that we had for our training. Our project length is one month and we'll need 25% of the engineer's time to maintain the model and debug any issues. Now going over to the G column, we can see we have our costs for the tools. I've added some reasonable values so you don't have to worry about them. Now on G11, we have our initial development costs. This is how much our engineer will cost for one month of work, the amount of time we need to deploy our model. Next, on G14, we have our ongoing labor costs per month. We get this by multiplying the monthly rate of the engineer by the fractional time, which is 25%. Now on G16, we take our cheapest option from the left-hand side, which was deploying on CPU. And together with the ongoing labor cost and the tooling cost, we calculate our total monthly cost. Now in G20, we have our total cost for one year, which is $73,449.7. Now the budget ask I've put together is $100,000. Because this project is over the course of one year, I've added in some extra buffer room.
>
> **[3:12](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-start-up?u=76281980&t=192)** So overall, this is how we can calculate the cost for deploying our model. We're going to make this pitch to our manager and see what they say. In the next video, we're going to apply these techniques and try to forecast the same use case, but for an enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** cpu (5), a100 (3), g11 (1), g14 (1), g16 (1)
> **CLI Commands:** make (1)
> **Versions:** 449.7 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Running AI for your enterprise](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-enterprise?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-running-ai-for-your-enterprise?u=76281980&t=5)** - [Instructor] Your challenge for today is to come up with a budget for running AI for an enterprise. The feature that you'll be building is the same as for a startup, classifying user review sentiment. Now, our requirements are a little bit different than from before. The first requirement is that reviews should be classified via a streaming method every minute. On average, we're going to have 5,000 reviews per second, with a spike up to 100,000. We're going to be using the same Bert-based model with an average inference time of 100 milliseconds on CPU. It'll have a throughput of around 30 requests per second. The estimate to deploy and integrate this model is three months. We need to come up with a budget for one year. Oh, and one more thing, your SLA for this project is 99.9% uptime. To achieve this, you'll need to have at least three replicas of the model running. This will give you a high availability configuration. So your challenge is to propose a budget for one year. You'll be presenting this to the VP in the coming week. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1), sla (1)
> **Versions:** 99.9 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Running AI for your enterprise](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-enterprise?u=76281980&t=0)** - [Instructor] Let's go through our sample solution. Now, since this template is pretty similar to the startup one, I'll only be going through the differences. So starting off, we've updated our Average Requests and our Max Requests on lines 3 and 4. Based on these updates for lines 10 and 11, we can see the amount of [[Hardware]] units we need are much higher for the maximum number of CPUs that we'll need. We get into the 3000s, which is pretty high. On lines 12 and 13, I've added an extra row for the high-availability configuration. This is only necessary for the A100, since to achieve the throughput we need, we'll automatically go above three units. Now, scrolling down to lines 14 and 15, we can see that our costs are much higher. This makes sense since we're handling a higher throughput. Now for a scaling strategy, we're going to maintain the average number of units needed as the minimum. We have a strict latency requirement of one minute, so we want to minimize the amount of scaling that we need to do. Now, if we go to line 19, we'll see our Gross cost per month. And using our ongoing usage discount, we're going to get our model cost per month. In this case, we end up seeing that the T4 is the cheapest option at around $1,800. Now, heading over to the right side of the spreadsheet, for a Team structure on line J2, we've chosen a team of size 4, the same as our training team in a previous exercise.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-enterprise?u=76281980&t=94)** Our hourly rate is 250,000, and our project length is 3 months. We've assigned the same fractional maintenance of 25% of the team size to maintain and debug the model. Now, heading over to columns F and G, we can see here that our additional tooling is more expensive. This is because we're an enterprise, but are also handling a much larger scale. So we've estimated that our Logging chargeback is going to be $2,000 a month. Our Monitoring chargeback is going to be 5,000. And our Data tools for streaming the data is going to be a 100,000. And notice here that this isn't a cost, but a chargeback. We'll assume that another team will be paying for this and they'll be charging us back for our average costs. As scrolling down, we can see our Tooling Costs for a month, it's going to be 107,000. Our initial development costs will be 250,000 by having four engineers work for three months. On line G16, our Ongoing Labor cost is our fractional maintenance times our team size times our monthly rate. Now heading over to G18, we can see that this is our T4 cost, our cheapest model option. Now in G20, our Total Monthly Cost comes up to $129,647.73, and for the year. Adding our initial development cost and our total cost is going to be around $1.8 million. For our budget ask, we're going to ask for $2 million to deploy and maintain this project. And there we go.
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-running-ai-for-your-enterprise?u=76281980&t=187)** We've estimated a sample solution for deploying a model in an enterprise environment. In the next chapter, we're going to talk about the costs of running these models beyond just financial costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** a100 (1), g16 (1), g18 (1), g20 (1)
> **Versions:** 647.73 (1), 1.8 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Other Costs

[↑ Back to Table of Contents](#table-of-contents)

#### [AI copyright and legal risks](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-copyright-and-legal-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-copyright-and-legal-risks?u=76281980&t=0)** - [Instructor] In this chapter, we'll talk about the other costs of AI that are beyond financial. In this video, we'll talk about some of the copyright and legal risks of AI. So an important question to ask is, where does the data used for training AI models come from? In the case of [[Generative AI|GenAI]], it's lots of internet data. But much of this data is still covered by copyright. In December 2023, "The New York Times" filed a lawsuit against OpenAI and [[Microsoft]] about allegations of copyright infringement. The main argument is that [[ChatGPT]] could produce "New York Times" content verbatim, content that was behind a paywall. For the training of these models, OpenAI argues fair use. This lawsuit is very important since it'll likely set the precedent for many AI lawsuits in the future. Another example is that, in November 2022, four plaintiffs argued that [[Microsoft Copilot]] was generating AI suggestions that infringed on code copyright. Now, lawsuits can be scary for companies, and because of this, many potential customers of GenAI could be scared off. For this reason, [[Google]] and Microsoft have pledged to cover legal costs for GenAI copyright. This was announced in September 2023 for Microsoft, and October 2023 for Google. There's also a legal risk for model bias. In September 2023, there's a ruling on model bias where tutoring company iTutorGroup was told to pay $365,000 to settle a discrimination case. The model was deemed to be biased,
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-copyright-and-legal-risks?u=76281980&t=95)** discriminating on people over the age of 55. Now, the third risk is the legal risk for model output. In February of 2024, it was ruled that Air Canada needed to refund a customer based on a policy that a chatbot had given. Court ruling indicated that the airline was responsible for its chatbot output. So if a chatbot miscommunicates some information, the companies might be liable to what information was said. In this case, it was a free ticket. The three legal risks highlighted the legal risk for copyright, model bias and model output should all be reviewed by our lawyers. And in the next video, we'll talk about the nebulous concept of AI reputational risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Google]] (2), [[ChatGPT]] (1), [[Microsoft Copilot]] (1)
> **Code Identifiers:** itutorgroup (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [AI reputational risks](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-reputational-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-reputational-risks?u=76281980&t=0)** - [Narrator] In this video, we'll discuss the potential reputational risks of AI. Many large companies are conservative risk-wise in order to see how customers first perceive a solution and to mitigate the risk to their reputation. Now, in the current AI wave, risk appetite about AI has increased significantly with almost 10x the amount of AI mentions in earning calls in 2023 on S&P 500 transcripts. And many companies who don't have expertise in AI may launch [[Microsoft Products|products]] prematurely and mishandled this opportunity. For example, recently a car dealership when viral after their bot was a simple wrapper on [[ChatGPT]] and customers we're able to say to give them a car for just $1. Now, on top of these mishaps, reputational risk can also occur when there's an underwhelming launch. When a company says, "This feature is powered by AI," sometimes it's just an outsourced manual labor job or a quick demo thrown together. Conversely, a well implemented use case with a smooth customer experience may enhance the reputation of a company as being innovative and customer friendly. So as a company, it's important to know your customer profile and expectations and balance the time to market testing and feature implementation of your AI products. In the next video, we'll talk about [[AI Security]] risks and how they might impact your company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[ChatGPT]] (1), [[AI Security]] (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [AI security risks](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-security-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-security-risks?u=76281980&t=0)** - [Instructor] As we deploy more AI models, [[AI Security]] risks become more important. In this video, we'll cover some of the types of AI security vulnerabilities, ways to mitigate, and the impacts that these might have on your business. Now there are a few ways to compromise your AI system. First is finding exploits in the data input that goes into the model. The second one is poisoning the training data. The third one is prompt injection, and the fourth one is data extraction. And for many AI systems, it's possible to find certain input patterns that lead to unexpected results. In this example, we see that a panda with some random image noise might be classified as a gibbon, even though the image itself doesn't change, and there's been lots of research in this area. There are potential business impacts. One might be, if your system uses something like automated receipt scanning, is it possible for this automated system to be compromised? The second example of a potential impact is with self-driving cars. What happens if you show a self-driving car a green light rather than a red light, or the angle of the sun confuses the vehicle? There are pretty large societal impacts. Now thankfully, there's been lots of research to make models more robust to these types of attacks. However, if you have access to the training data, it's possible to compromise these models more easily. One example is the nightshade attack. With a combination of different training data and prompts, it is possible for generative models
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-security-risks?u=76281980&t=93)** to generate the wrong type of image, for example, generating a handbag into a toaster. So before launching your models, it's important to do something called [[Red Teaming]], which is doing internal adversarial testing to figure out what might go wrong. On the other side of the spectrum, there's something called blue teaming, which is the exercise of doing internal defense, and the AI security space is pretty new. So there are a few initiatives launching that might be helpful. For example, for LLMs, Meta launched the Purple [[LLaMA]] Initiative providing some tools for teams to both red team and blue team these types of [[Large Language Models (LLM)|large language models]]. And moving on to the large language model side, for large language model apps, there are two main dangers. They might, one, leak info that they're not supposed to, and two, they might do the wrong type of task. Now many of these large language model apps, such as RAG-based ones, provide automated access to documentation. Now the tricky part might be is providing access to the right documentation. For example, when Amazon launched their Q chatbot, there are issues within the first couple of days of being able to use prompts to surface information that was classified as confidential. This resulted in a pretty fast response from Amazon, but even a large company can make mistakes in these types of product launches. Now this type of compromise was able to be surfaced by fairly intermediate developers. Now there are even more advanced techniques that can get through even the most stringent security teams. For example, in 2023, there's a more complex technique
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-security-risks?u=76281980&t=187)** used on [[Google]] Bard. The idea of the compromise was, by using markdown images, you're able to expose some of the information in people's Google Docs. Now the good thing is that these large LLM providers and companies usually do a great job of patching up these vulnerabilities quickly. But as a team building this technology yourself, you need to be extra careful. It's important to have the correct guardrails in place to mitigate these kinds of harms. So there are a few ways of doing this. The first one is verifying the data, both the training data and the data coming in as input. You want to make sure that you understand where your data's coming from and how it's being used. The second technique is using a security technique called least privilege. Least privilege means only grant a person or an application the minimum amount of permissions that you need to be successful. So what this means is don't grant an application access to all your data if you don't need to. This reduces the attack surface that potential adversaries can use to gain access to your information. The next item is just do lots of testing. Whether it's formal red teaming or just understanding your data and your scenarios, testing these applications is extremely important. And finally, it's important to adopt standard software best practices. While we've only covered the techniques that can be used against AI models, standard security vulnerabilities through software or social engineering can also be very effective. Now finally, let's talk about some of the business impacts involved. Many of these attackers are after private data access, meaning personal information or confidential information.
>
> **[4:42](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-security-risks?u=76281980&t=282)** So your business might be impacted if this information is accessed. The other risk is potential automated fraud. As I mentioned earlier, if you have automated systems that do some kind of financial processing, you want to make sure that the numbers that are being passed through are verified, not just through AI. Also, there might be a legal risk. If shareholders or other stakeholders feel that you're not providing an adequate amount of defense for adversarial attacks on your systems, you may be sued, or other litigatory action may be taken. Now AI security is a complex issue. I recommend diving deeper into this with security experts when reviewing your applications. In the next video, we'll talk more about service-level agreements and the risks and costs when using AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Security]] (4), [[Red Teaming]] (2), [[Google]] (2), [[LLaMA]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** rag (1), llm (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AI impact on service level agreements](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-impact-on-service-level-agreements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-impact-on-service-level-agreements?u=76281980&t=0)** - [Narrator] What happens when your app loses AI capabilities? In this video, we're going to talk about the impact of AI SLAs. We talked a little bit about SLAs, or service level agreements, in chapter five, but let's go deeper in this video. So for most AI providers, there's a webpage available with the status. For example, status.[openai.com](https://openai.com). This will tell us if there are any issues with the running services. We can see here a status page for OpenAI and Cohere. Now, sometimes issues are under reported or reported later. It's important for companies, especially enterprises, to understand what's in their service level agreements. And beyond that, it's important to understand how important is AI to your business. For certain applications, AI might be a nice to have or optional. For example, in a [[Microsoft Word|word]] processor, text rephrasing might be an optional but nice to have feature. Now, if we move down into the critical path, something like an AI powered search bar might be very important. Or for an application like a translation app, AI is key to the app functioning. So it's important to understand what is the impact of downtime to your application. Now, for certain applications, you might be able to find alternatives. For example, a translations app might have the top list of translations saved rather than using AI. So for that, even if the AI service goes down, the application can keep functioning. The other alternative is to have a multi-[[AI Strategy]]. You could either use multiple models from one provider,
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-impact-on-service-level-agreements?u=76281980&t=93)** you can use multiple providers, for example, OpenAI and Cohere, or you can self-host some models just in case a provider goes down. So let's go through a couple financial scenarios and talk about the financial impact of downtime. I'm in the Exercise Files under chapter 6, 06_04. Now this spreadsheet builds on some of the content from chapter five. Now in this spreadsheet, we have two parts. On the left hand side, we have a calculation of costs, and on the right hand side, we have some variables about our business. So on the left hand side, we'll start off with our uptime SLAs, ranging from four 9s down to three 9s. We have the corresponding amount of downtime that we're allowed per month. Now starting on line 4, we have our actual downtime for these apps. Now, in line 5, we have the calculation of the number of users we lose for each amount of downtime we have. Now, in G2, we say that we have 10 users signing up per hour. So if we have a downtime of 60 minutes, we're going to lose 10 signups. Now, in G3, we know that we have $50 of revenue per month for a user, so our revenue lost is going to be around $2,000. Now, every time we have some downtime, existing users may quit the platform. Now, in G4, we assume that we have 200 users who quit per hour of downtime. So that gives us our churned revenue lost on V7. Now, we talked about SLA policies in chapter five. So we're going to assume that we're going to refund our customers 20% of their cost for every minute of outage beyond our SLA,
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-impact-on-service-level-agreements?u=76281980&t=186)** so in this case, around $644. In line 9, we have the number of outages per month, so roughly estimating how much of this downtime corresponds to different incidents. On line 10, we try to estimate how much future earnings we're going to lose based on our reputational risk. So each outage creates a reputational risk, and that's very hard to predict, but we're going to assume that this costs us $20,000 per outage. Now on line 12, we sum up these different costs and get our total cost of downtime per month. Now, in line 15, we talk about the cost to maintain this uptime. As we build systems that reduce downtime, they become more and more expensive. This is even more true in an AI context. So in line 18, we calculate the net cost of having downtime, considering the maintenance cost per month and our total cost of downtime. So in building out our AI applications, it's important to align expectations between customers and our internal stakeholders to understand what the actual costs are. Managing SLAs with both your customers and your vendors is a complex task, but it's important to spend time to understand the impact on your business. Now our next video is the final video in our chapter, where we're going to talk about AI's environmental impacts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[AI Strategy]] (1)
> **Analogies:** for example (4)
> **Env Vars:** sla (2)
> **Cross-References:** we talked about (1), next video (1)
> **CLI Commands:** find (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [AI's environmental impacts](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-s-environmental-impacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-s-environmental-impacts?u=76281980&t=0)** - [Presenter] In this video, we'll talk about the environmental costs of AI. So AI uses many resources along the many steps along the way. This includes [[Data Collection]] and processing, training, and inference. Let's talk about the resources that we use. There are three main resources: Water, electricity, and materials. These can be found across the data centers, grid, and chips that are actually used for AI training and inference. Starting off with water, researchers from UC Riverside and UT Arlington estimate that global AI demand may result in 4.2 to 6.6 billion cubic meters of water usage by 2027. That's roughly half the water consumption of the UK. And this water consumption largely goes to data center cooling where these models are being trained and run. And for training an individual model like GPT 3, the researchers estimate that it used around 5.4 million liters of water. And for running something like [[ChatGPT]], 5 or 10 prompts might use around two cups of water. Now, most cloud vendors have pledged to be water positive by 2030. This is especially important in the next few years as we face more extreme weather and drought. And from the electricity side, according to researchers from University of Washington, it's estimated to have used around 10 gigawatt hours of power to train one instance of ChatGPT. That's around as much power as a thousand houses used per year. Now for running ChatGPT once it's trained, it's estimated that it uses around one gigawatt hour a day, or the equivalent of 33,000 houses.
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-s-environmental-impacts?u=76281980&t=93)** Now, beyond just the amount of electricity that's used, it's important to consider the electricity carbon intensity. This means how much carbon is emitted per electricity used. So looking at four different regions, ranging from Montreal, Toronto, Paris, and Los Angeles, we can see that the carbon intensity is quite different. One of the columns shows us how much renewable power is actually being used, with Montreal using renewable power almost a hundred percent of the time. The right column shows us how intensive the local carbon grid is. The higher this value, the more carbon emissions we produce per amount of power. So the recommendation here is to try to choose a region with lower carbon intensity. Now, in training models, it's becoming more common to disclose the carbon impact. One recent example is from [[LLaMA]] 2 where they disclose how much GPU hours they used, the power consumption of each, and the total carbon emitted. And one thing that this misses is the electricity power from the other chips that are being used that we talked about, the compute, RAM, disk, and cooling systems, along with the power and materials needed to build the data centers that power all these chips. So often, when we estimate the environmental impact of AI models, we forget the manufacturing impact. Since we have to build the chips, data centers, and all the surrounding infrastructure around them. Now, speaking about the chips, AI chip demand has been increasing exponentially in the last few years. With this skyrocketing demand, all these chips require materials like rare earths to be built.
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/ai-s-environmental-impacts?u=76281980&t=187)** This requires significant mining intensity to find, extract, and develop these materials. So overall, AI has significant environmental impacts. So what can you do about it? Well, the first step is to educate the team and make sure that they understand what the impacts are. The next step is to disclose your impact and run the estimates to understand what your impact is. You can reduce this impact by choosing cloud regions that have low carbon and water intensity. And finally, you can run smaller models when possible in order to reduce the environmental impact of your work. So this wraps up this chapter on AI risks and other costs. In the next chapter, we'll be talking about generating revenue with AI models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Data Collection]] (1), [[LLaMA]] (1)
> **Cross-References:** in the next (2), we talked about (1), in the last (1)
> **Env Vars:** gpt (1), gpu (1), ram (1)
> **Versions:** 4.2 (1), 6.6 (1), 5.4 (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [presenter] (1)


### 7. Revenue-Generating Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Unit and margin pricing for AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/unit-and-margin-pricing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/unit-and-margin-pricing-for-ai?u=76281980&t=0)** - [Instructor] In this chapter, we're going to cover how to generate revenue from AI models. So far, our chapters have been about the cost of AI. Let's flip to the other side and talk about the revenue from AI models. This chapter will cover four approaches, and in this video we're going to start off with unit-based pricing. A simple way to price an AI product is to price per model unit. As we've seen in previous videos, this might be a token, a generated image, or some kind of translated response. This provides an easy way for users to understand what they're paying for. So let's talk about setting a unit price. Let's go through an example where we're building a sentiment classifier on top of an LLM vendor model. So let's go through some key information. We'll assume for our classifier our prompt length is a thousand [[Tokens]]. The cost of the business for a million tokens is half a dollar. So the cost of the business for a thousand requests is also half a dollar. Now we're going to price this for $2 per a thousand requests, giving us a markup of 300% or a margin of 75%. Let's assume our customers are using this product over time. Every day, different users use the product in different volumes. As you can see here, our costs, requests, and revenue are all moving together. With this technique, our margin is fixed at 50%. If our requests double, so will our costs and our revenue. Now, the risk here is that if vendor prices change,
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/unit-and-margin-pricing-for-ai?u=76281980&t=94)** we'll have to make the decision on impacting either our margin or our price. Now, some of our models might be run in a different way. They might be run continuously. So let's take a look how running our own models will impact our margins. So for this case, we're assuming we're running the same type of sentiment classifier model, but they're long running internal models. We'll assume our average cost for running these models is $50 per month with a max cost of a hundred dollars. This represents the elastic nature of [[Cloud Computing]]. Now, for our customers, we're still going to price it at $2 per a thousand requests. And we're going to assume we have an average number of requests of a hundred thousand. So this will give us an average margin of 75%. Now, if we go back and look at our same usage graphs, you can see here that our costs and margins alternate in a different way. Our revenue is still consistent with the number of requests, but our costs are a little bit more unpredictable. We have a higher fixed cost at $50 per month, but we scale better as the number of requests increases. Our margin will get better the more and more requests that we handle. But in the lower request range, we'll have a lower margin and potentially a negative margin. So the drawback of this approach is its often hard to predict margins 'cause we need to know how many requests we're going to have, and in this case, it's hard to predict margins because it's often really difficult to time model [[Scalability]] for a continuous use case. So using the same prices will have different costs, whether we're using a third party model with unit pricing
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/unit-and-margin-pricing-for-ai?u=76281980&t=188)** or running our own. But for our end customer, they don't care. We are presenting the same kind of pricing so they get the same experience. So what are the benefits of unit pricing? The first benefit is that it's simple for a customer to understand. They send you some information, you bill them for that amount. The second benefit is that it's consumption based revenue. So the more that your users use, the more you earn. The third benefit is it's easy to predict margin or cost depending on what kind of model you're using. The fourth benefit is that this is a great type of pricing when integrating with third party APIs. You just attach a fixed margin and away you go. Now the fifth benefit or drawback is you can compete or lose on market price. In some cases, like right now, some AI [[Microsoft Products|products]] are actually being priced under cost, so it might be very difficult to generate the revenue that you need at unit pricing. In the next video, we'll talk about a variant of unit pricing, which is based on time. We'll talk about consumption time-based pricing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Cloud Computing]] (1), [[Scalability]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Time consumption pricing for AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/time-consumption-pricing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/time-consumption-pricing-for-ai?u=76281980&t=0)** - [Instructor] Many people get paid by the hour. So can we price AI in the same way? The answer is yes, with time-based pricing. We've seen this already in the course. It's quite common in the cloud world and we've seen it for GPU based pricing. As an example, here's a screenshot for the pricing of GCP GPUs per hour. Now we can apply the same technique for pricing for our own customer. So let's go through a case study. Our use case is that we're doing document entity extraction, where users submit jobs and get their information back. So this is going to be asynchronous. So going into our key information, we'll assume that it takes around one minute to process a page per document. Cost to our business is $0.50 per hour and we're going to price it for $5 an hour for our customer. So this gives us a gross margin of around 90%. And because this is an asynchronous workload, we can have elastically scaled resources, meaning that our graph looks very similar to the unit based pricing that we saw with a third party vendor. Now, similar to our previous base pricing, we can always adjust our margin based on the market price. Now, at this use case, we assume that we have zero time to actually spin up and spin down any [[Hardware]], and in practice this isn't true. So we might want to add in a minimum time consumption charge. So looking at a similar table, if we look at the bottom, we can see that the startup time per document is one minute to spin up the GPUs, CPUs, and process the data. So in that case,
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/time-consumption-pricing-for-ai?u=76281980&t=93)** we might charge a minimum increment of one minute. If the customer is submitting tiny little documents, maybe just a sentence long, we won't be reducing our margin. What are the benefits of time consumption pricing? They're easy for customers to understand. They're similar to cloud-based costs, where you're charged by the amount of time it takes for a task to complete. Now, this might be harder for a customer to forecast, but this is common for the whole cloud industry. And the next benefit is that we're mimicking the pricing of cloud resources. So as a result, it's easier to calculate our margin. The third benefit is that if we optimize our throughput, we can actually improve our margins. On the other side, if we optimize the speed of our processing, we might actually decrease margins. So there's a little bit of complexity here on how this billing actually works. In the next video, we're going to talk about value-based pricing and how we can frame the pricing discussion outside of our costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** gpu (1), gcp (1)
> **Analogies:** similar to (2)
> **Versions:** 0.50 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Value-based pricing for AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/value-based-pricing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/value-based-pricing-for-ai?u=76281980&t=0)** - [Instructor] If someone offered to trade $1 for $10, would it be too good to be true? Well, that's the goal of value-based pricing, to sell a solution that's cheaper than what someone is currently paying. In the context of AI, many companies are selling automation for existing processes, such as writing documents, extracting information, and automating call centers. Many companies allocate costs for these tasks, like pricing a support ticket at $10 across a support system. In other words, that company might value a sold support ticket at $10. So as a support automation company, you might charge $1 per ticket. Now, for the company buying the solution, that's a clear win. They're getting $10 worth of value for just $1, but how do you measure this value? There can be some challenges. First challenge is it's hard to measure when value is attained. For example, with the support ticket, does this value come from a ticket being closed, or does the customer need to be satisfied? And going even deeper, is it possible to be satisfied in a situation where a customer is asking for support? So understanding the business process is very important to understanding the value that you're delivering. Another challenge is that value may be long term. For example, in the [[Search Engine Optimization (SEO)|search engine optimization]] space, you could use AI generated content, but search engine optimization takes time, so even though you might generate hundreds or thousands of articles, there might be downstream effects on brand, engagement and overall marketing impact.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/value-based-pricing-for-ai?u=76281980&t=94)** So you might be in a situation where you've sold immediate savings, but caused long-term harm to a customer. So as a vendor, it's very important to understand the value to the customer. So let's go through an example. Earlier on, we were pricing our sentiment classifier, and the cost to our business is 50 cents per thousand reviews. Now, the customer might value this at $500 per thousand reviews. That might be the current benefit to the business, or the current cost they pay for manual labeling. So as a company, your value proposition might be, we'll label a thousand reviews for you for $50, so you save 90% of the cost and from our perspective, we're only paying 50 cents per thousand reviews, so we get a markup of over 9900%, or a margin of 99%. That's pretty good. So in positioning value-based pricing, take the perspective of your customer. I can help you reduce your cost by 90%. That's a very compelling sales pitch. Now in practice, you'll need to make sure that you can validate that number with case studies or other metrics and to summarize value-based pricing, it's an easy sell. You can clearly communicate the value you're providing to your customer versus an alternative. This makes it very easy for your customer to say yes. They no longer have to build an internal business case. You've done it for them. Now, the challenges are it's hard to measure. You need strong data to back up these claims, whether through metrics or through case studies. In the next video, we'll cover our fourth type of pricing,
>
> **[3:08](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/value-based-pricing-for-ai?u=76281980&t=188)** which is subscription-based pricing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search Engine Optimization (SEO)|Search engine optimization]] (2)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** in other words (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Subscription pricing for AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/subscription-pricing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/subscription-pricing-for-ai?u=76281980&t=0)** - [Instructor] In this video, we'll cover subscription-based pricing. This is a common technique in the software world, giving rise to the industry of [[SaaS]]. Now, the benefits of subscription-based pricing is that it offers predictable revenue. An example of subscription-based pricing is that [[ChatGPT]] costs $20 us per month for the premium subscription and to the average user ChatGPT's pricing is pretty simple, but there also exists a teams and enterprise plan. This is similar to the other SaaS services that we've seen, for example, weights and biases from our training chapter. Now, for many existing businesses like [[Microsoft]], Salesforce and [[Google]] AI is a common add-on. For example, Microsoft offers Microsoft Co-pilot for [[Microsoft Office|Office]] 365 for 30 extra dollars a month, assuming you already have a license. This is a great upsell opportunity. If we assume from Microsoft's large install base that 10 million business users accept this add-on at $30 per month, this gives us $3.6 billion a year in revenue, that's pretty big. Now, the challenge with SaaS based pricing is that it can be challenging to estimate cost. For example, with ChatGPT, what if a user asks a thousand questions? Won't this cost us a bunch of money to run these models? Well, this might be the case, one of the smart things that OpenAI has done is limit usage for [[GPT-4]]. So you have unlimited usage for the cheaper 3.5 model, and you're limited as if this video's making to 40 messages for three hours for GPT-4.
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/subscription-pricing-for-ai?u=76281980&t=95)** The other item that's interesting is that most users follow a power law relationship. With your top 10% of customers using the most amount of resources. This number varies, it might be 80%, it might be 50, it might be 95. But with smart pricing, it's possible to mitigate these expensive users. Now, there are a few techniques you can use for mitigating costs and increasing revenue. The first one might be to price for a healthy average margin, meaning that even though you have power users at the top end of your spectrum, you'll still be making a good margin for the average user. The second technique is to limit consumption at the upper end, just how like OpenAI limits GPT-4 usage. The third option is to have multiple subscription options. This allows power users to self-select and upgrade to more powerful offerings. And the fourth option is to include some kind of consumption-based pricing where users can top up and buy additional credits of some form to utilize the services they need. A good example of this is Zapier's based pricing. Let's take a look on their website. As we can see here, we have the standard pricing for various types of plans. As a power user, if I need to automate more tasks, I can see my pricing. At a certain number of tasks, I can no longer subscribe to the starter plan. You can also see that my pricing has gone up based on this consumption. Now, with the different techniques that we've learned, we can combine them to form our [[Pricing Strategy]]. At the company I work at, which is Voiceflow, we combine SaaS-based pricing for every user that utilizes the product, consumption-based pricing
>
> **[3:11](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/subscription-pricing-for-ai?u=76281980&t=191)** for the number of interactions that you have with your assistant and unit based pricing for AI generative [[Tokens]]. So through this model, we try to mitigate costs and capture upside. Now, an important consideration for subscription-based pricing, are utilization metrics. For example, if we have five users, we can see how they're each using our product. For our margin, our goal is to have a target utilization rate. Now, users two and three are hovering around our utilization metric goal, that's great. Now, customers four and five, they have low usage. This means that they're potentially a churn risk and we might not renew them in the next contract period. To summarize subscription based pricing for AI, the benefits are that we can get predictable revenue. It's also easy to cross sell AI for existing [[Microsoft Products|products]]. We can also combine subscription-based pricing with other pricing to mitigate downside and get potential upside. And with subscription-based pricing, we need to measure utilization to avoid surprises with users leaving. In the next video, we'll discuss de-risking AI projects, using startup based funding and grant programs, specifically targeted for AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (4), [[Microsoft]] (4), [[ChatGPT]] (3), [[GPT-4]] (3), [[Google]] (1)
> **Analogies:** for example (4), similar to (1)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** gpt (3)
> **Versions:** 3.6 (1), 3.5 (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Start-up funding and grant programs for AI](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/start-up-funding-and-grant-programs-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/start-up-funding-and-grant-programs-for-ai?u=76281980&t=0)** - [Instructor] AI projects can be risky. So in this video, we'll cover how we can de-risk AI projects through grants and funding. In this video, I'm going to focus on Canadian Programs, but many similar programs exist globally. The first type of program is an innovation-based grant. In Canada, we have a body called the NRC, or the National Research Council, which provides grants to companies and research foundations to develop innovative new technology. As we can see here, there are a number of different programs. One of these programs is called the IRAP program. If we click on Financial Support for Technology Innovation, we'll be able to see a description here. This program exists for small and medium businesses who are trying to innovate in a technological way. In general, the way this program works is a company provides a proposal which is reviewed by the government. After a proposal is approved, the company receives funding but must provide monthly receipts and project updates to make sure that they're delivering. Now, this is a great program for cash flow reasons, since you get the money ahead of time. However, in a rapidly evolving world, it can be challenging to predict which projects you're going to work on, especially as a small, innovative company. Now, the next program type is for research. Many research-based programs focus on hiring researchers to help companies with their innovative projects. One such funding program in Canada is called Mitacs. In this program, companies provide a project and provide funding to hire a research intern. The Mitacs organization, along with the government, contribute to this to create a research award.
>
> **[1:35](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/start-up-funding-and-grant-programs-for-ai?u=76281980&t=95)** This funding is awarded to a partner university which will help complete the project. Another large program is a retroactive tax incentive. In Canada, this program is called SR&ED. SR&ED stands for Scientific Research & Experimental Development. Once a company fills out a project, they can submit a claim to the government and receive tax credits for these innovative projects. The government will then determine and provide a grant based on the submission. The benefit of this program is you don't have to determine ahead of time which projects you'll work on. Since the AI industry moves so quickly, it's easier to compile a report after the fact and submit it for government funding. Now, the third type of funding is more bespoke. If you're a large organization, the government and partner universities might work with you in both the funding and research capacity. One of the examples in Canada is the Vector Institute, where a consortium of companies, the provincial government, and the federal government, came together to form an AI institute. Now, with these different types of support programs, it's possible to de-risk your AI projects. Many of these projects are designed to help companies compete against their larger peers, especially in the AI innovation space. You should visit your government's website to see what kind of programs are available to you. This types of funding is becoming increasingly more important as AI becomes a globalized phenomenon. Now, in our next video, you're going to receive a challenge, taking all the skills you've gained about pricing and being challenged to price a logo generator.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is a  (3), is an  (1), stands for (1)
> **Env Vars:** nrc (1), irap (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Pricing your logo generator](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-pricing-your-logo-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-pricing-your-logo-generator?u=76281980&t=0)** - [Instructor] Your challenge is to price a logo generator. You're launching a logo generation company, and you need to figure out what's the best strategy to price it. So for this challenge, you need to propose a pricing model. For this pricing model, state your assumptions, and make sure to communicate why you chose this approach. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Pricing your logo generator](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-pricing-your-logo-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-pricing-your-logo-generator?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-pricing-your-logo-generator?u=76281980&t=5)** - [Instructor] I've made some business assumptions. My assumption is this logo generator will target small and medium businesses. I've also assumed that the cost for a freelancer logo is around $5 to $100. Now, apart from our AI logo generation, businesses may be interested in additional image services. And my final assumption is that using [[DALL-E]] 3 is sufficient enough for our quality. So let's go into our pricing model. So I've chosen to do a value-based [[SaaS]] solution. My goal is to compete against human costs and show that we can deliver a better solution faster. I've also assumed, as part of this business model, I can also offer other software services that are value adds. And from a pricing perspective, I've created two tiers, a basic one and a premium one. The basic plan costs 3.99 a month and gives you one logo with up to 10 variations. The other feature that you have is you can resize this image. Now, for the premium plan, it costs 13.99. You can make as many logos as you want, with up to 50 HD variations. The other features are also image resizing, and some more coming soon. You can imagine these are other software add-ons. Now, going into the margin calculations. So our cost per logo is about 4 cents for a standard-definition DALL-E 3 image. If someone uses our full basic plan, it'll cost us 40 cents for 10 different images slash variations. So our max AI margin is 99% with just a 4-cent cost, and the minimum one is 90% with the full 40-cent cost.
>
> **[1:40](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-pricing-your-logo-generator?u=76281980&t=100)** And for the premium plan, an HD DALL-E image costs 8 cents. If we let users generate 50 images, that's $4 in costs. So our max AI margin with just one image is 99.7%, and our min AI margin is 71.4%. And there we go. We've priced our logo generator to be a SaaS solution that delivers value over hiring a freelancer. We've also started to think about how we can retain this customer beyond their initial logo generation. In the next video, we're going to discuss building your AI business case so we can combine our ideas, our revenue generating opportunities, and our cost analysis to propose new features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (3), [[SaaS]] (2)
> **Versions:** 3.99 (1), 13.99 (1), 99.7 (1), 71.4 (1)
> **Env Vars:** dall (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Building a business case for AI projects](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-business-case-for-ai-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-business-case-for-ai-projects?u=76281980&t=0)** - [Instructor] In this video we're going to cover creating an AI business case. Now, this is the structure we're going to follow. We're going to present a problem or opportunity, a solution, key metrics, a [[Financial Analysis]], a resource ask, and the risks for this proposal. Now, for the purpose of this video, we're going to focus on an [[E-Commerce]] B2B software company. So to start off, we need to have a clear problem to solve. An initial idea is that our digital support experience is not very good. Now, this is a good starting point, but let's add more details. Instead, let's go with as a premium digital brand our support experience does not reflect our customer expectations. Okay, that's a little bit clearer. Let's go into some sub problems. So for this business case, I've assumed that we have significant data that we can bring to our managers to propose this idea. So let's go through them. The first one is that 80% of our customers want a digital support experience, but now only 10% of our customers resolve their questions through a bot. And overall, our customer satisfaction for all of support is pretty middling, and our customer base is growing fairly quickly, around 40% year over year. But for the next year, we have a flat budget for support. Now, from the smaller side of the market, we have a digitally native competitor, XYZ, which is growing at a 100% year over year. And from the upper end of the market, larger competitors are starting to invest in more support automation.
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-business-case-for-ai-projects?u=76281980&t=92)** Now I've looked into some of the data, and I know that the top 20% of questions drive 80% of our support traffic. 15 of these questions are for surfacing information, typically from our website, like a case study or pricing information. Now, the other five require integrations with our product or relate to documentation about it. For example, asking for a refund, using our order tracking software, understanding our reward point system, integrating with our return scheduler or our exchange based software. So to address our main problem of non meeting our customer expectations through support, I'm going to propose rebuilding our current digital assistant. For the first phase, we're going to deploy a better assistant to automate answering those information based questions. In the second phase, we're going to focus on those five integration based questions. Now the third phase, we're going to monitor and measure key metrics. Now the key metrics we're looking for are our digital support volume, our overall support volume, our customer satisfaction, our time to response, our time to resolution, and social media sentiment of our digital assistance. Now, for each of these metrics, these are the numbers I'm assuming. I'm assuming our bot support volume will go from 10% to 50%. Our overall support volume will decrease. Our customer satisfaction will increase from around 70% to 80%, that our churn rate will decrease due to better support. Our time to response will be 50% lower.
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-business-case-for-ai-projects?u=76281980&t=186)** Our time to resolution will be 30% lower, and our social media sentiment for digital assistance will be 10% higher on net promoter score. And from a financial perspective, my projected ROI is to break even by nine months. I'm projecting that our top line growth will be an extra 1% year over year due to our customer satisfaction improvements and our social media net promoter score. This project will cost $250,000 for three months as a CapEx investment. And from an OpEx perspective, we're going to spend $25,000 per month for bot improvements and maintenance. We're also going to decrease our support OpEx due to fewer future support hires and our support center lowering our outsource volume. So my ask is for $250,000, $100,000 for a new [[SaaS]] support platform, and 150,000 for two developers and one product manager for three months. And these developers and product manager will continue to support this platform and replace that support OpEx we discussed earlier. And from a risk perspective, we need to make sure that the platform provides correct answers. We need to make sure that our hiring or upskilling efforts will be successful. We also have a platform risk. We need to make sure that the bot system that we're using is better than our previous one. In the past, we found that the previous system was not extensible enough. So we need to make sure that when building our integrations our bot building platform is very extensible.
>
> **[4:41](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-business-case-for-ai-projects?u=76281980&t=281)** Now that wraps up our business case. We've covered our problem solution, key metrics, financial analysis, resourcing ask, and risks. In the next video we'll dive deeper into that financial projection and understand how we came up with these figures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Analysis]] (2), [[E-Commerce]] (1), [[SaaS]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** b2b (1), xyz (1), roi (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Building a financial projection for AI projects](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980&t=0)** - [Instructor] So let's go through the financials of our business case. I'm here in the Exercise Files in Chapter 7, 07_09. Now this is a pretty large spreadsheet. It contains four different sheets, but I'm going to focus on the key ideas. I recommend that you go through it on your own time afterwards. As of this filming, we just wrapped up our January and February of 2024. So we have our revenue for these two months, $5 million and $5.1 million. For the purpose of this exercise, we assume some other costs, and mainly going to be focusing on our support costs, which is what our business case is all about. So on our first sheet, we have a profit and loss center. Let's go into our current revenue to understand it a little bit more. So in our current revenue sheet, we have the revenue for our past two months. On B2, it's for January, 2024. And in C2, it's for February, 2024. On line three, we have our recurring user revenue, and on line four, we have our new user revenue. On line six, we have a total number of customers, again, broken down into our number of new customers on line seven and our number of recurring customers on line eight and on line nine, we see our churned customers. So these are the customers that we've lost from one month to the next. Below down line 10, we have our churned revenue. Below that, on lines 11, 12, and 13, we have the average monthly revenue per customer, recurring customer and new customer. Now going down to line 16 through 19, we have our new customer month over month growth. Our customer churn rate,
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980&t=93)** our net customer month over month growth, and our net revenue retention. Now scrolling down on lines 21 to 25, we have our [[Probability]] to churn with customer and no [[Customer Support]] tickets. To understand these metrics, let's go into our Support Metrics sheet, which is number four. So in this sheet, we describe the number of tickets that we have, starting on line two. We have our number of tickets, as well as our number of support tickets on line three. On line four, we have the rate of ticket growth. Now on line six, seven, and eight, we have the number of tickets that are resolved through live agent support, our bot support, and our call center. As you can see here, our bot support isn't performing that great 'cause our automation rate is pretty low. On lines 10 through 13, we have the number of reviews our support tickets receive. On line 12, we have the number of satisfied reviews. On line 13, we have the unsatisfied ones. And on line 11, we have the number of total ticket reviews. Going down to line 15, we have our CSAT score, which is customer satisfaction, which is the satisfied reviews divided by the total ticket reviews. And on line 16, we have a calculated automation rate, the number of tickets that are resolved through our bot. And on lines 18 to 21, we have some churn information. This information is taken from the support ticket information that we have and our churn information. So out of the 90 satisfied reviews we got in the last month, five of those customers have churned. Out of the 33 unsatisfied reviews, 31% have churned and on line 20, we have the total number of customers
>
> **[3:09](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980&t=189)** who churned, who opened up a support ticket, but provided no review. And for completeness, on line 21, we have the number of churned customers who didn't open up support tickets. And going down to line 24 to 42, in this case, we have a journey map for each of our support tickets, starting off with a request to our bot and how many were escalated to a live agent. This continues to show the relationship we have, with how effective our bot is, our live agents are, and our final line of support, which is the call center. So going back to our Current Revenue, we can see here that these probabilities, on lines 21 to 25, we can see the probability to churn, given the status of a customer support ticket. Whether the customer has opened any ticket, has had a positive experience, a negative experience, has provided no rating or has not opened up a support ticket. So one of the key components of our business plan is increasing our customer satisfaction. So the total number of negative experiences goes down. 'cause as you can see here, if somebody has a negative experience with customer support, they're almost guaranteed to churn. Now let's head over to tab number three. Now, looking at this sheet, we have a couple components. We have our business as usual support costs, which involve our calls and our cost per call, our bot [[SaaS]] cost and maintenance costs, and our cost per support employee. And from a cost perspective, our promise is that we're going to reduce the amount of support that we have. Looking on column G when our project goes live,
>
> **[4:43](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980&t=283)** we're going to reduce our call center costs by reducing the number of tickets that get there. We're going to do the same thing on lines 28 by reducing the total number of agent tickets that make it through, reducing our in-house agent support cost. Now, heading back to our first sheet and the final portion of our proposal is to increase our revenue by having a higher net promoter score. We can see this in column G, where we're going to have an extra 1% of growth of the previous revenue. So starting off with 55,000 and gradually increasing. Likewise, we're going to decrease our churn revenue by decreasing our churn rate from around 6% to around 5%. On line 16 to 18, we can see our different costs. We have our other costs, which we've included for completeness, our support costs, which drop down when the project goes live, as well as our CapEx costs. The initial investments starting on March 1st and our additional improvement costs, starting in June for $10,000 a month. Now going to line 21, we can see our proposal profit, and 25 and 27, we can see our profit difference. If we scroll to the right, we can see that in column N, we break even, which is nine months into the project. So overall, we've gone through a pretty complex spreadsheet, breaking down the costs for a support based use case. We've talked about the profit, revenue opportunities, cost reduction opportunities, and key support metrics. In the next video, you'll be challenged to create a presentation for a new business case,
>
> **[6:17](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/building-a-financial-projection-for-ai-projects?u=76281980&t=377)** putting together your financial and [[Business Acumen]] to propose a new AI feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (3), [[Probability]] (2), [[SaaS]] (1), [[Business Acumen]] (1)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Env Vars:** csat (1)
> **Versions:** 5.1 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Building an AI business case](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-building-an-ai-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-building-an-ai-business-case?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/challenge-building-an-ai-business-case?u=76281980&t=5)** - [Instructor] Your challenge is to build an AI business case. For this challenge, you need to design a translation feature for an [[E-Commerce]] [[SaaS]] platform. Based on this feature, you need to put together a basic business case. As we've talked about before, stating the problem, solution, key metrics, [[Financial Analysis]], resourcing ask, and risks. Make sure to make assumptions, but justify them. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[SaaS]] (1), [[Financial Analysis]] (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Building an AI business case](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980&t=5)** - [Instructor] Let's go into a sample solution for creating an AI business case. I'm going to go ahead and pitch you on my solution. Our customers struggle in launching to new markets. After talking to 50% of our high intention users, they said that translating their site takes too long. 25% of our total users want to expand into new language locales in the next three months. Those who have have spent 20 hours and a thousand dollars on average to translate their website, but only 20% of those who expressed interest actually did due to an unclear path forward. So, I'm proposing an auto translate solution. This will be a subscription add-on using AI to translate a customer's website. On top of the AI feature, we'll include a locale entering plan to help our customers feel more comfortable. We'll also be launching a premium version for larger catalogs that includes expert translation. Getting into the financials, we expect a payback of three months and projecting a $75,000 profit per month afterwards. We're assuming that with this launch we'll get 5% extra revenue from our existing customers with a thousand users subscribing to this plan. We're estimating around 100,000 of additional revenue. From a CapEx perspective, we're estimating $250,000 for three months, and then from OpEx, 25,000, 10,000 a month for AI translation, 5,000 per month for human translation,
>
> **[1:39](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980&t=99)** and $10,000 allocated for bug fixes and small improvements. We'll be implementing a value-based pricing with a basic and premium plan. Our monthly fee for this add-on will be $99 for the basic plan and $599 for the premium plan. We'll be using [[Google]] Translate; paying around $20 per 1 million characters. An average [[E-Commerce]] website for our smaller users will have around 500,000 characters leading to an initial cost of $10. This gives us an initial margin of 90%. Now, the premium side, the websites will be larger leading to an average initial AI cost of $40. Since we're including human translation, we estimate this will cost around $200 leading to an initial average margin of 60%. Now, we anticipate that the customers signing onto this plan are prime for launching into a new market. Now, in every subsequent month, we assume that usage will be lower because customers won't be launching to new locales every month. Continuing our [[Financial Analysis]], we expect our lifetime customer value for this add-on to be around $198 for two months worth of subscription. For a premium user, we're expecting $6,000 for 12 months worth of subscription. We're expecting around a 30% churn per month on this add-on since customers may not be launching new [[Microsoft Products|products]] or expanding every month. While the 30% churn is quite high, we still think that this will be a sticky plan and we hope to reduce that churn risk later on. This is because customers will continue to add new products
>
> **[3:13](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980&t=193)** that require translation and growing stores will continue to expand. And from a key metrics perspective, we'll be tracking a few. The first one is the number of basic and premium add-ons. The second is the number of translations done. The third is the use of human expert translators. The fourth is the percentage of translation that's done with expert humans and the amount that is changed. The fifth is the churn number for these add-ons. And the sixth is the number of customers expanding regionally. With all these key metrics, we should be able to see if we're solving the customer problem. Now, the ask for this feature is $250,000 over three months, we'll be hiring two developers, one front end and one backend, along with a product manager. Now, the risks. The main risk for this project is incorrect translations. Another risk is post one month churn. Having users who remove this add-on after doing their initial translation. The third risk is having a lower margin, especially if we have high human translator needs. The fourth risk is lower expansion than we anticipated. And the fifth risk is higher usage of the AI feature due to a continuously changing product catalog that needs constant translation. So overall, we think that we can help our customers launch to new markets by introducing a translation feature. And there we go. That's my pitch. So hopefully you had an interesting experience developing a business plan for this E-commerce use case. Now, in the next video, we're going to wrap up this course
>
> **[4:47](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/solution-building-an-ai-business-case?u=76281980&t=287)** and crystallize everything that we've learned in the past number of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Microsoft Products|Products]] (2), [[Google]] (1), [[Financial Analysis]] (1)
> **Cross-References:** in the next (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 8. ROI on AI Use Cases

[↑ Back to Table of Contents](#table-of-contents)

#### [ROI on AI customer support automation](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-customer-support-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-customer-support-automation?u=76281980&t=0)** - [Narrator] Two years after the release of [[ChatGPT]], we're all still wondering what has been the business ROI of [[Generative AI|gen AI]]? In this chapter, we'll go through a few use cases and see what's emerged in the industry. To start us off, we'll cover the ROI on AI [[Customer Support]]. Now, customer support isn't homogenous. There are actually different levels. Depending on the complexity of a ticket, you classify them into different levels. An example classification system I have here classifies tickets between L1 to L3. With L1, being simple requests, L2, being a little bit more complex, and L3, requiring more technical knowledge. Now, the reason I bring this up is that AI will handle different types of requests differently. So, let's go into some case studies. We'll start off with a major announcement that was made in early 2024, when Klarna, the payment company, unveiled that they're using an AI assistant to handle two-thirds of their customer service chats. This was a pretty major announcement by a major company and showed the potential of AI in ROI. We can scroll down through this article to find more specifics, including how many conversations were being done and the equivalent work of full-time agents. Now, beyond just Klarna, even OpenAI shared some different companies that are doing customer support work on their website. For example, MavenAGI has a case study on the OpenAI website, discussing their ability to automate customer support. As we scroll down, we can see an overview of the product and some metrics on average customer support costs and rates.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-customer-support-automation?u=76281980&t=94)** In this case, MavenAGI fine-tuned [[GPT-4]] as part of their release. Another case study is by Trilogy, a private equity firm that automated over 60% of their tickets using Voiceflow. You can see here we have a quick visualization indicating the rate of AI resolution week-over-week. So we can see here there are a variety of published case studies on the effectiveness of AI customer support. Now, while there are a number of different case studies, measuring ROI can actually be pretty complex. There are different metrics used by customer support teams to figure out the ROI of these kinds of investments. The first one is deflection, which measures how many requests did not go to a person, either in a contact center or asynchronously. Meaning, how much did the AI deflect user questions. Beyond deflection, there's also resolution, which is harder to measure. This is how many tickets or tasks were completed with AI. And finally, there's net promoter score. Net promoter score measures the customer satisfaction on support tickets. So figuring out how happy customers are with AI support and comparing that to humans. Now, even with these three different metrics, every company and every support team measures them slightly differently, so there's no consensus of what the exact definition is of deflection or resolution. Different agents on a team might also mark this with different levels of scrutiny. Now, what's interesting is that with AI automation for customer support, pricing models are all a little bit different. There are three typical models that we've seen and that we've talked about earlier in this course.
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-customer-support-automation?u=76281980&t=187)** There's a [[SaaS]] pricing model, where you charge by seat, or a general subscription. Consumption, which typically charges by the number of requests going to a customer system. And by ticket, so measuring how many tickets get resolved by an AI system. The per-ticket pricing is pretty interesting. A number of companies are moving towards that, with the largest being Salesforce, which is charging $2 per conversation for its Agentforce model. Again, this raises the question of what is an actual resolution? Is a closed case when a customer is happy, or when they stop responding? It gets a little bit philosophical and hard to measure. Now, some recommendations for going into your AI projects for customer support. So a few recommendations would be to audit your existing gaps and figure out where the limitations are in your existing system. They could be an onboarding, documentation, complex systems. There's really a variety of challenges in the customer support space. Next, you need to figure out what kind of customer relationships you want to have. Do you want AI automation for all your customers, or do you want to route them to human for more enterprise focused ones? There's no right way to do this, and each business is different. You should also examine the complexity of your tickets and your product. AI resolution can work differently across different levels of complexity, as we saw with L1, L2 and L3 support. You also need to make sure that you have good documentation, because AI systems rely on that to provide answers based on using different techniques, such as RAG. You should also examine which support domains are actually taking the most amount of time,
>
> **[4:40](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-customer-support-automation?u=76281980&t=280)** whether it's account related questions, pricing, product support, or more. AI systems will be able to help differently with each of these different areas. And finally, you should audit about your onboarding speed. So beyond just existing gaps, onboarding speed for new employees of using these AI systems versus traditionally onboarding becomes quite important. So overall, we've seen a huge potential in the ROI of AI customer support. There are actually hundreds of companies working on this problem, so as it continues to grow, we'll see even more case studies come out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (11), [[ChatGPT]] (1), [[GPT-4]] (1), [[SaaS]] (1)
> **Env Vars:** roi (6), gpt (1), rag (1)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** earlier in (1), as we saw (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [narrator] (1)

#### [ROI on AI lead generation](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-lead-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-lead-generation?u=76281980&t=0)** - [Instructor] Now the highest ROI for your company is for AI to help you generate more revenue. In this case, we'll examine the ROI on AI [[Lead Generation]]. Within the domain of lead generation, there are typically three main approaches to using AI. The first one is to engage customers who are interested in your product, often called inbound sales. The second approach is to reach out to potential leads or to find leads by using AI to do outbound sales. And the third technique is to use AI to do data sourcing or data cleanup to enrich your sales data through third-party data or activity. So let's go through a few case studies. Now, the number of AI sales startups is quite high. Looking at the Y Combinator, which is a startup incubator, we can see that, as of today, there are 98 sales startups that Y Combinator has featured on their website. Many of them do similar tasks in regard to inbound, outbound, or data enrichment in the sales domain. Now, going into more specifics, one customer that I worked with, Sanlam Studios, built an AI financial coach in order to help users understand their lending [[Microsoft Products|products]] more. It had a number of different features, including education, tough conversations about money, and understanding lending products. And in this case, Sanlam found that there is a much higher conversion rate with customers feeling more comfortable talking to the AI agent and then asking for lending products afterwards. So the lending coach became a new acquisition channel for customers to engage and buy new products. I'm here on the Sapphire Landscape website, which has created a sales landscape view of AI sales companies.
>
> **[1:32](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-lead-generation?u=76281980&t=92)** As you can see here, prospecting and sales operation are the largest categories within the landscape. There are number of different companies in this space that help you enrich your data and make sure that your sales team can be more effective. Now finally, the AI sales space is quite interesting for outbound. An article from "TechCrunch" highlights this discrepancy between investment and usage of outbound AI sales. So why is this the case? AI outbound sales is likely less documented because this automated messaging is often perceived from consumers as spam. When companies are reaching out to prospective clients, having an AI automation can lessen the relationship with the humans on the other side, unless, however, we get to a world where we have [[AI Agents]] talking to each other, both on the selling and buying side. So in building outbound automation, it's important to keep in mind the relationship that you're having with your customer. Now, building on this list of considerations, we should also start off with a marketing and sales audit to figure out what our current processes are. Similar to any kind of AI use case, we need to make sure that we're applying AI to the right place and not just broadly. We should then examine our customer relationships. We wouldn't want to invest heavily into voice AI automation if our customers prefer to use a texting channel. We also need to understand how our customers will [[React.js|react]] to AI automation. Now, based on this information, we'll be able to identify the highest ROI channels, whether we're using AI to do inbound qualification or make outbound calls to a long tail of customers that otherwise are harder to reach. And finally, for [[Sales Automation]], we might not always need to use AI. There are many different tools that are available.
>
> **[3:06](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-lead-generation?u=76281980&t=186)** So overall, we've gotten a quick overview of the AI lead generation space and the case studies that are now available to us. We'll likely continue to see the space evolves as AI continues to improve in its text and audio capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Lead Generation]] (3), [[AI Agents]] (1), [[React.js|React]] (1), [[Sales Automation]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** roi (3)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [ROI on AI Developer tooling](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-developer-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-developer-tooling?u=76281980&t=0)** - [Instructor] We get into an interesting situation with AI developers. We're using AI to help the developers who are building AI. It turns into an interesting situation. However, there have been quite a few studies regarding the ROI ON using AI developer tooling. When we look at the [[Software Development]] process, there are typically three different categories we can group the process into. The first one is writing code, the second one is testing, and the third one are ancillary tasks, such as writing documentation and providing updates. Now, the whole process of software development has been heavily studied, and adding AI to the mix is a very interesting research area. Let's take a look at a few case studies. Now, a company that does significant research into the software development space is [[Google]], which employs tens of thousands of software engineers. Now, looking through this research, we can see that there are a number of different factors that affect software development. In this paper, there are 39 productivity factors that are mentioned, but what's interesting is that it was released pre this [[Generative AI|GenAI]] boom. So we can move to a second piece of research that Google has released, which is AI and software engineering. If we scroll through the summary, the report highlights the changes that software engineers have faced in these past five years, from 2019 to 2024. Now, this research takes a holistic approach to measuring developer productivity, going beyond just the code written. For example, within Google software engineers have accepted 37% of AI recommendations. Now, this doesn't directly translate to 37% productivity gain, given the complexity of software development.
>
> **[1:34](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-developer-tooling?u=76281980&t=94)** The report continues to talk about the complexities of this development and how AI can continue to benefit. Now beyond the software development-focused research, in a recent earnings report, Google CEO shared that 25% of the code written by Google is now AI-generated. This has translated beyond just the software space into the investment updates. Now, moving beyond Google, there's a recent report by Amazon, discussing very large migration using Amazon Q, their internal coding product. The case study given is an upgrade from [[Java]] 8 to Java 17 using Amazon Q. Amazon claims that they saved 4,500 years of software development time and saved $260 million in this process. Now, this task is quite specific to an internal Amazon process, but many other companies are upgrading their software stack, so it's quite interesting to reference this as a case study. And one more company that has done interesting research into this space is [[Microsoft]] and [[GitHub]], measuring the productivity gains of [[Microsoft Copilot|Copilot]]. In this report, GitHub provides an overview on how leadership teams can measure the productivity gains of code copilots. In this case, there are specific measurements that GitHub has found through their research, but also questions to ask as you implement AI into your coding process. It's an interesting article, so I recommend you check it out. On the development space, you might have heard about the emergence of AI coding agents. And in 2024, we saw a few [[AI Agents]] emerge in the coding space. Two of the major ones were Devin from Cognition Labs, which claim to be the first AI software engineer.
>
> **[3:07](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-developer-tooling?u=76281980&t=187)** Now, there aren't too many publicly available case studies in terms of Devin's work, but it's an interesting company to keep track of. Likewise, Replit, the coding platform, announced their Replit Agent, which, based on text commands, can help users complete different coding tasks. So with both coding assistants and coding AI agents, this raises the question of what the future is of software development. Now, we shouldn't rush in and replace all our software developers with AI automation, but it does raise some considerations for teams to have. The first consideration is to audit the development processes. Where are engineers spending the most amount of time? The second one is to figure out the trade-offs of the quantity of code needed versus the quality. AI used for software development can drastically increase the first one, but the quality can still be questionable. Similarly, you should take into consideration the use of templated versus creative tasks in software development. Refactoring something might be pretty templated versus building out a whole new feature requires a lot more creativity. And finally, it's important to figure out how much domain knowledge is needed within a team. In the scenario where AI can automate a large portion of your software development, it raises the question of how much domain knowledge people actually have to be able to solve and continue to make improvements. Overall, the ROI on AI developer tooling has been quite positive, but raises further questions on how we build software development teams and build the best [[Microsoft Products|products]] out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (12), [[Google]] (6), [[GitHub]] (3), [[Java]] (2), [[AI Agents]] (2)
> **Env Vars:** roi (2), ceo (1)
> **Tools:** github (3)
> **Versions:** java 8 (1), java 17 (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [ROI on AI Copilots](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-copilots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-copilots?u=76281980&t=0)** - [Instructor] In this video, we'll cover the general concept of AI copilots and their ROI. Copilots come in three different flavors, general copilots that can help you with day-to-day tasks and aren't particularly specialized. Then there are domain-specific copilots that might help in areas that have specific nuances, for example, sales or [[Customer Support]]. There are also custom copilots that could be built for company-specific processes that need even more customization. Now, depending on the task that you're trying to achieve, the results may vary. So let's go into some case studies. So we'll start off with a quick article from Bain & Company from August of 2023. This article estimates the percentage of labor time that would be automated using [[Generative AI]]. Now, the research methodology is proprietary to Bain & Company, but it does provide a framework to start thinking about how AI automation and copilots will affect human work. For general copilots, it can be quite challenging to estimate what the ROI is for their efforts. For example, we can look into broader reports, like this report by [[Google Cloud Platform (GCP)|Google Cloud]]. That goes into [[Generative AI|GenAI]] ROI overviews. And this provides a broader context, but we can also look at general copilots. For example, [[Microsoft]]'s 365 [[Microsoft Copilot|Copilot]]. In this report, Microsoft shares the productivity gains and ROI on using Copilot. Now, the 365 Copilot focuses on that general use case, helping people write emails, analyze transcripts in Teams, and various other ones.
>
> **[1:33](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-copilots?u=76281980&t=93)** Now, these numbers will largely vary and becomes challenging to actually assess which tasks have a high ROI and which ones have a low ROI. Now, to examine this, let's look at a research paper. "Navigating the Jagged Technological Frontier" is a great overview paper that covers where AI automation presents a high ROI versus where the quality decreases with the use of GenAI. If we go down to page 31, we can see the concept that's provided in the paper. It's called the jagged frontier of AI capabilities. Jagged frontier demonstrates that on certain tasks, GenAI outperforms people versus on others it underperforms. For example, in this chart, we can see that GPT outperforms a control group of people working on a specific task that's inside the frontier. And we can see a further breakdown on page 35 where we can see that people who are very skilled at a task or less skilled at a task benefit from GenAI in different ways. Now, in other tasks, like on page 37, we can see that GenAI can actually worsen the performance of somebody performing a task. This is something that's outside the jagged frontier, meaning that GenAI and GenAI copilots still don't help people achieve a task better. Now, scrolling up to page 33, we can see that there are a number of tasks that were studied. I recommend you read this whole paper to get a better understanding on how AI automation can help people perform different kinds of tasks. Now, we've been talking about productivity in a vague sense, but what does it actually mean to be productive? Is being able to send emails more productive, or are we just creating more busy work for people? This is a fundamental question that we'll learn
>
> **[3:05](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/roi-on-ai-copilots?u=76281980&t=185)** as GenAI continues to evolve. Now, when choosing to use AI copilots, we should take some considerations into account. We should audit the work that's being done to make sure that we're delivering the highest value work at the right time. We should also understand the current barriers to perform certain tasks. For some barriers, GenAI can help. For others, it might be a detractor. We also need systems to verify the correctness of GenAI 'cause we don't want hallucinations to make it through the [[Quality Assurance]] process. We should also think about how decisions are being made, whether AI automation is the one that's making the decision, or it's informing people with additional information and insights to make better decisions. And finally, based on the concept of jagged frontiers, we should choose appropriate tasks for AI automation and copilots. We want to make sure that we're choosing the right task to get the highest ROI. So overall, the ROI on AI copilots is quite immense, ranging from general ones to domain-specific ones, to company proprietary ones. And as AI copilots continue to evolve, I recommend that you test and experiment with them to figure out where the ROI is yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Microsoft]] (2), [[Customer Support]] (1), [[Generative AI]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** roi (10), gpt (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (4)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-pricing-and-roi-a-technical-breakdown/next-steps?u=76281980&t=0)** - Congratulations on completing the course. It was a long one. At this point, you should be better prepared to understand AI's impact on your business and finances. When you complete an AI financial proposal or presentation, I'd love to hear how it went. You can also follow me on [[LinkedIn]] where I post about both the technology and business side of AI. Let's keep learning about AI and incorporating it into our business in a financially savvy way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Denys Linkov]]

## Resources

- Exercise files available

## Skills Covered

- AI Solutions
- Cost Management
- Artificial Intelligence (AI)

## Path Context

### In [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]
← [[AI Product Security- Foundations and Proactive Security for AI]] | **6 of 6**

## Part of

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]] — Artificial Intelligence (AI), AI Solutions
- [[Integrating AI into the Product Architecture]] — Artificial Intelligence (AI), AI Solutions
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)