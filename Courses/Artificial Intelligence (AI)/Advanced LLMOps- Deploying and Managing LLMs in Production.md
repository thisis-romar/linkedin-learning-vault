---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-llmops-deploying-and-managing-llms-in-production
url: "https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production"
duration_minutes: 105
duration: 1h 45m
level: Advanced
updated: 7/19/2024
learners: 169684
skills:
  - Large Language Model Operations (LLMOps)
  - Generative AI
  - System Deployment
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/generative-ai-and-llmops-deploying-and-managing-llms-in-production-4465782"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE5kAgmoLJYYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720810307853?e=2147483647&amp;v=beta&amp;t=CvBJRoIg0xShnjuMcAJs_LferQ58-Uv1zMaY92DL7ok"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Manage Your LLMs with LLMOps]]'
prev_courses:
  - '[[LLMOps in Practice- A Deep Dive]]'
next_courses:
  - '[[LLM Foundations- Building Effective Applications for Enterprises]]'
path_nav: '[{"path":"Manage Your LLMs with LLMOps","position":3,"total":4,"prev":"LLMOps in Practice- A Deep Dive","next":"LLM Foundations- Building Effective Applications for Enterprises"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/software-development
  - skill/large-language-model-operations-llmops
  - skill/generative-ai
  - skill/system-deployment
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20LLMOps-%20Deploying%20and%20Managing%20LLMs%20in%20Production.md)

![Advanced LLMOps: Deploying and Managing LLMs in Production](https://media.licdn.com/dms/image/v2/D560DAQE5kAgmoLJYYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720810307853?e=2147483647&amp;v=beta&amp;t=CvBJRoIg0xShnjuMcAJs_LferQ58-Uv1zMaY92DL7ok)

# Advanced LLMOps: Deploying and Managing LLMs in Production

> Cutting-edge artificial intelligence technologies are changing the world. But without proper deployment and management, your applications may never reach their full potential. Worse, they could simply fail or even cause critical errors in your systems. As more organizations are incorporating large language models into their workflows, there's an increasing need for professionals skilled in deployi

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production) | 1h 45m | Advanced | 170K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Deploying LLMs for production](#deploying-llms-for-production)
  - [Working in Google Colab](#working-in-google-colab)
- [**1. Deployment Options for LLMs**](#1-deployment-options-for-llms) (4 videos)
  - [Overview of deployment options](#overview-of-deployment-options)
  - [Deploying via APIs](#deploying-via-apis)
  - [Using fine-tuned models for deployment](#using-fine-tuned-models-for-deployment)
  - [Custom models: Building and deployment](#custom-models-building-and-deployment)
- [**2. Handling API Limitations**](#2-handling-api-limitations) (5 videos)
  - [Understanding API limitations](#understanding-api-limitations)
  - [Strategies to handle endpoint uptime limitations](#strategies-to-handle-endpoint-uptime-limitations)
  - [Mitigating latency issues in LLM deployment](#mitigating-latency-issues-in-llm-deployment)
  - [Challenge: API limitations for LLM deployment](#challenge-api-limitations-for-llm-deployment)
  - [Solution: API limitations for LLM deployment](#solution-api-limitations-for-llm-deployment)
- [**3. Deployment Architecture**](#3-deployment-architecture) (5 videos)
  - [Vector databases for LLM deployment](#vector-databases-for-llm-deployment)
  - [Agents in LLM deployment](#agents-in-llm-deployment)
  - [Chains in LLM deployment](#chains-in-llm-deployment)
  - [Challenge: Deploy a simple RAG application using an API](#challenge-deploy-a-simple-rag-application-using-an-api)
  - [Solution: Deploying a simple RAG application using an API](#solution-deploying-a-simple-rag-application-using-an-api)
- [**4. Monitoring LLM Performance**](#4-monitoring-llm-performance) (2 videos)
  - [Introduction to LLM performance monitoring](#introduction-to-llm-performance-monitoring)
  - [Addressing hallucinations in LLMs](#addressing-hallucinations-in-llms)
- [**5. Advanced Deployment Techniques**](#5-advanced-deployment-techniques) (4 videos)
  - [Prompt management for LLM deployment](#prompt-management-for-llm-deployment)
  - [Evaluating LLMs in production](#evaluating-llms-in-production)
  - [Challenge: Evaluating LLM systems](#challenge-evaluating-llm-systems)
  - [Solution: Evaluating LLM systems](#solution-evaluating-llm-systems)
- [**6. Security and Cost Considerations**](#6-security-and-cost-considerations) (5 videos)
  - [Security considerations for LLMs in production](#security-considerations-for-llms-in-production)
  - [Balancing costs and performance in LLM deployment](#balancing-costs-and-performance-in-llm-deployment)
  - [Strategies for cost-effective LLM deployment](#strategies-for-cost-effective-llm-deployment)
  - [Challenge: Estimating costs of an LLM API](#challenge-estimating-costs-of-an-llm-api)
  - [Solution: Estimating costs of an LLM API](#solution-estimating-costs-of-an-llm-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Deploying LLMs for production](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=0)** - [Narrator] Let's address the elephant in the room. Deploying LLMs isn't just a technical challenge, it's a strategic one. Companies are pouring millions into AI, but without proper deployment and monitoring, they're essentially throwing money into a black hole. This course is designed to pull back the curtain on what it really takes to bring these models to life in the real world. We will explore LLM deployment options, handling API limitations and advanced deployment architectures including [[Vector Databases]], agents and chains. You will learn performance monitoring techniques, addressing hallucinations and prompt management. Practical challenges and solutions will solidify your understanding, and prepare you for the real world application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (1)
> **Env Vars:** llm (1), api (1)
> **Speakers:** - [narrator] (1)

#### [Working in Google Colab](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=0)** - [Instructor] We hope we got you excited to start learning about building [[Generative AI]] applications. In this course, you will have the opportunity to implement the concepts you are going to learn by doing exercises. The exercises will be done in [[Google]] Colab. Colab is a Jupyter Notebook-like development environment, where you can write, edit, and run code. Colab notebooks run online, which means that you do not need to worry about installing [[Python (Programming Language)|Python]] or setting up a new development environment in your local machine. Let's see how they work. First, you will need to navigate to [[GitHub]] repository for this course. You will see that the repository has folders for each chapter. Inside each folder, you will find an iPython notebook. You can see some code and documentation. You will find some to-dos in each notebook. These are the parts of the code that you will need to complete as part of the exercise. To start a Colab notebook, click the Open in Colab button. This will redirect you to Colab. You can now run any cell to start the notebook. This might take a few seconds, and you should see the disk and RAM usage once the notebook has started. Don't worry if you get stuck, each exercise has an accompanying solution that you can find in the solution branch in the repo.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=98)** To get to the solution branch, click the branch dropdown button in the top-left, and choose the solution branch. From here, you can either browse the solution in the GitHub repo, or you can open it in the notebook and run the code. Now that you know how Colab notebooks work, we hope you're excited to try some of the exercises and run some [[Large Language Models (LLM)|large language models]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Generative AI]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Tools:** colab (7), github (2), jupyter (1)
> **CLI Commands:** find (3), python (1)
> **UI Navigation:** navigate to (1), dropdown (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** ipython (1)
> **Env Vars:** ram (1)
> **Exercise Files:** github repo (1)


### 1. Deployment Options for LLMs

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of deployment options](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=0)** - [Instructor] Welcome to our course on LLM Deployment. Today, we are diving into the exciting world of deploying LLM-powered applications. As these models gain popularity across various industries, it's crucial to understand the different ways they can be integrated into business and technology processes. We will explore three predominant deployment techniques that cater to various needs and skills. Let's start with the first deployment technique: using LLM API providers. This approach provides access to powerful [[Large Language Models (LLM)|large language models]] without the significant overhead of managing the infrastructure yourself. It is particularly beneficial for startups and pilot projects due to its low initial cost. Industry leaders like OpenAI, Cohere, and Anthropic offer these services with a pay-as-you-go pricing model, which is cost-effective based on your usage in terms of input and output [[Tokens]]. Continuing with LLM API providers, it is essential to understand when and why using these APIs is cost-effective. They are most economical at low to moderate request volumes. As your user growth increases, and so does the complexity, the cost follows. We'll discuss how to perform a [[Break-even Analysis]]
>
> **[1:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=99)** to compare the cost of API usage versus self-hosting. Additionally, monitoring your usage and adjusting as needed can help optimize efficiency. Now, let's talk about self-hosted LLMs. This option gives you full control over the LLM environment and configurations, allowing enhanced performance for specific user demands. We will also look at how to evaluate the need for moving from API to in-house deployment, and what strategic migration steps are necessary to minimize the disruption. We'll conduct a cost-benefit analysis to see if self-hosting is a viable option for your organization. Our third deployment technique involves crafting custom LLMs. This method offers comprehensive control from [[Data Processing]] to model training, which is crucial for handling complex, specific user requests. We will discuss the benefits of developing these models to overcome the limitation of pre-trained LLMs and how to manage the complexity and resources needed for end-to-end development. Next, we will learn about the stages of building an LLM-powered application. The initial stage of [[Application Development]] using LLM often involves creating simple applications
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=196)** with prompt-based wrappers. These can quickly provide solutions by leveraging pre-built models and are easily deployed using API providers. We'll also discuss integrating current personalized information to enhance user experiences, using [[Vector Databases]] and complex prompts for richer interactions. As we advance the focus shifts to implementing more complex workflows, this involves using chains of LLM for diverse, automated tasks and interfacing with external APIs for tasks like publishing and social media management. In the final stages, we will aim for an autonomous operation with careful oversight to maintain quality, assurance, and reliability. As we wrap up this particular lesson, remember that the success of deploying these technologies hinges on thoughtful planning and execution across multiple stages. Whether you choose API providers, self-hosting, or custom LLM development, each approach requires careful consideration of cost, [[Scalability]], and specific needs. Moving forward, keeping in mind the importance of [[Continuous Integration (CI)|continuous integration]] and maintenance to adapt and refine your LLM's solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Tokens]] (1), [[Break-even Analysis]] (1), [[Data Processing]] (1), [[Application Development]] (1)
> **Env Vars:** llm (10), api (6)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Deploying via APIs](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=0)** - [Instructor] Welcome to this lesson on LLM API deployment. Today we'll explore how API based LLM [[Application Development]] simplifies the setup process, allowing us to bypass [[Traditional AI]] infrastructure. We will also cover how automatic updates done by API providers get us access to the latest LLM models enhancing efficiency. The biggest advantage of deploying LLMs via APIs is the ease of maintenance, which eliminates the need for a dedicated AI team while still getting access to cutting edge LLM technology. Since you do not need a team of ML engineers and data scientists to maintain the model, it lowers the barrier to entry for utilizing cutting edge technology. Since API pricing is based on token usage, the costs go down to zero when your application has no users. For smaller developers and businesses, this is also a cheap way to build a prototype and test product market fit. Moreover, APIs allow for easy scaling of services to handle increasing loads. This means that the system can adapt seamlessly as the number of users grow. And finally, APIs allow for [[Real-Time]] processing,
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=95)** which is critical for applications that require immediate feedback such as chatbots. However, using APIs has some downsides, especially cost at scale and rate limitations. While APIs may be cost effective for small applications with less loads, expenses can accumulate rapidly with high usage. Very soon you will find yourself having to analyze and manage your API costs. APIs also have rate limits, which can restrict the number of requests an app can make in a given time period. If your app exceeds those limits, then your users will not receive any responses from the chatbot. Later in this course, we will talk about budgeting, strategies, throughput issues, and how to handle peak loads. Understanding these limitations helps in planning for effective API usage and contingency management. Continuing with challenges, you will have to take into account your app's dependency on third party APIs, and the limitation that poses. This can be a drawback for applications with domain specific knowledge, for which the LLM may not have been trained. Moreover, since there is often limited visibility into the model's training data
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=188)** and its potential biases, it can be a concern for applications where responses with hallucinations or incorrect information can be harmful. In a later chapter, we'll talk about the risk of biases and misinformation inherent in general LLMs, and we'll discuss methods to mitigate these issues. Broadly, there are two kinds of LLM API providers, closed source LLM APIs and open source LLM APIs. Open source APIs are freely available and modifiable, promoting transparency and community driven improvements. Closed source APIs provided by companies like OpenAI offer propriety solutions with possibly better performance and security, but less transparency and flexibility. This distinction is crucial as it influences the choice depending on the project's needs and goals. As we start using API for rapid development and deployment, it is essential to understand their initial utility. APIs allow for the quick setup of LLM functionalities without building the infrastructure from scratch, making them ideal for pilot projects and prototypes. This approach provides immediate access to advanced LLM capabilities, enabling real-time processing
>
> **[4:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=283)** and responsiveness that are vital for applications like chatbots or personalized customer interactions. However, as the application scales, the limitations and costs associated with APIs become apparent prompting a reassessment of deployment strategies. There is a shift towards, in-house LLM deployment to manage these challenges and achieve greater control over data and models. This transition not only addresses the need for customization, but also reduces reliance on third party providers. Enhancing [[Data Security]] and compliance. Continuous innovation and adaption to new LLM technologies remain essential, ensuring that the solutions remain cutting edge and tailored to specific enterprise needs. We will learn about local LLM deployment in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Application Development]] (1), [[Traditional AI]] (1), [[Data Security]] (1)
> **Env Vars:** llm (13), api (8)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** setup (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using fine-tuned models for deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=0)** - [Instructor] Welcome to this lesson on deploying fine-tuned LLMs. Today we will focus on the advantages of tailoring LLMs to your unique requirements. [[Fine Tuning]] models enhances the performance of the model for your specific domain. Deploying the LLM in-house also ensures that all data remains within your control, addressing [[Privacy]] and security concerns with sending data to an external API. You are also not constrained by the rate limits typically imposed by API providers, allowing your application to scale up and down with usage. And finally, although the initial setup might be expensive, in the long term, it could be cost effective, since you are not billed by [[Tokens]], you are only paying for hosting the LLM and not for how much you use it. Transitioning our discussion to the challenges, let's examine the realities of in-house deployment. The cost and complexity of setting up the necessary infrastructure can be daunting. High performance computational resources, which will be necessary come with a hefty price tag, not to mention the specialized team you will need to employ for the LLM's upkeep and retraining.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=96)** Finally, getting an LLM running in-house can be time-consuming. From setting up the infrastructure to training and fine tuning the model. LLM infrastructure can be expensive to provision since there's a shortage of high-end GPUs. In the later chapter, we will talk about the investment in time and resources needed to bring an LLM online within your organization and how to navigate these waters smoothly. Next, we will compare two types of LLM deployment, deploying a base LLM versus a fine-tuned model. Deploying a base LLM is easy since you are not making much changes to the model. However, while it is simpler than fine tuning, the model's performance may not be optimal or domain specific for applications or data sets. On the other hand, deploying a fine-tuned LLM involves adjusting the model on a specific data set to enhance its performance for particular tasks or domains. This can significantly improve results, but requires additional resources, data, and expertise. Let's delve a little deeper into what greater control and customization really mean when you decide to deploy an LLM in-house. The biggest benefit
>
> **[3:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=190)** of an in-house training deployment is [[Data Privacy]] and security. You can also use customization to your model for specific requirements of your domains. Fine tuning enables your businesses to steer the LLM's development precisely where it needs to go. However, we need to acknowledge some of the hurdles of an in-house deployment. There is substantial financial and human capital required to make self-hosting a reality. As an AI engineer, you need to consider the balance of long-term benefits against the short-term challenges. You also need to do strategic planning for allocating resources effectively and attracting the right talent. We will discuss this in more detail in a later chapter. Finally, as an AI engineer, you need to be prepared to learn and integrate emerging technologies that promise to simplify deployment while deepening the level of customization. I want to wrap up this lesson by inspiring you to stay [[Agile Development|agile]] in a fast-paced technological landscape. Remember that personalization, ease of deployment and model customization will define the next generation of LLM applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (4), [[Privacy]] (1), [[Tokens]] (1), [[Data Privacy]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** llm (13), api (2)
> **Prerequisites:** setup (1), required to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Custom models: Building and deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=0)** - In the last two videos, you learned about the advantages and disadvantages of LLM APIs and deploying an LLM on your own servers. The final deployment option is to train your own LLM from scratch and deploy it. This approach differs significantly from using pre-trained models or APIs and has its unique set of advantages and disadvantages. The biggest advantage is that you will have an LLM that is customized to your specific needs. Training from scratch allows you to tailor the model to specific domains or applications, potentially achieving better performance for niche or specialized tasks. For instance, the Bloomberg GPT showed that a custom-trained LLM on [[Financial Data]] performs better than [[ChatGPT]]. You can also have complete control over the data used for training, which can be crucial for applications where misinformation is harmful or there are [[Privacy]] concerns. And finally, developing a proprietary model can give your company a competitive advantage over others. Despite the benefits, training your own LLM comes with significant challenges. Training a custom LLM requires substantial, computational power and expert knowledge.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=95)** You also need skilled ML engineers and data scientists to train an LLM. This can be expensive to hire. Moreover, training a model from scratch can take considerable amount of time from [[Data Collection]] and preparation to actual training and optimization, it can take six months to a year to train an LLM. The data itself can be a bottleneck. A vast, diverse and curated dataset is necessary for training an effective LLM, acquiring such a dataset can be challenging. Let's discuss when it makes sense to invest in training a custom LLM. This decision often hinges on the need for a highly specialized model in domains where pre-trained models fall short or where unique data sets can't be effectively leveraged by general models. If you have access to unique private data sets that cannot be effectively leveraged by pre-trained models, then it makes sense to train a custom model. Training from scratch is also necessary for languages or dialects that are underrepresented or not included in the pre-trained models. BloombergGPT is a finance-focused custom LLM that was trained using Bloomberg. It's performance on financial data is better than GPT. Another example of a custom LLM
>
> **[3:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=192)** is Met-PalM2 from [[Google]] Research. It was designed for the healthcare sector and demonstrates how custom LMS can be safer and perform better on domain specific tasks. In summary, deploying an LLM trained from scratch will give your application a high level of customization. But remember, it'll require significant expertise and time. In the next chapter, we will learn about the intricacies of deploying API-powered, LLM applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (2), [[ChatGPT]] (1), [[Privacy]] (1), [[Data Collection]] (1), [[Google]] (1)
> **Env Vars:** llm (15), gpt (2), lms (1), api (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)


### 2. Handling API Limitations

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding API limitations](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=0)** - [Instructor] In the last chapter, you learned about the different deployment strategies for [[Generative AI]] Applications, starting from APIs to self-hosted LLMs. Since APIs are the easiest and cheapest way to get started, you will often find yourself building Proof of Concept apps and simple [[Microsoft Products|products]] with them. This is why it is important to be aware of LLM API Limitations and how you can navigate them. In this lesson, we will learn about some of the common limitations with APIs. In the next few lessons, we will delve deeper into some of the limitations and learn mitigation techniques. One of the biggest challenges with LLM APIs is the Rate Limits and the Usage Quotas. Deploying LLM is very compute intensive, and most LLMs require multiple GPUs to run. This is why LLM APIs set rate limits and usage quotas to balance server loads and prevent misuse. Not accounting for these, could disrupt your apps functionality. Just like APIs, LLM APIs are prone to errors, drop requests, and timeouts. Most LLM API providers provide no SLA guaranteeing performance.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=93)** Even if an API is available, you may see delays in performance degradation during peak hours. Manning chain keys effectively is crucial for maintaining a good [[User Experience (UX)|user experience]] and application stability. Implementing error handling protocols and establishing fallback procedures are essential to mitigate these risks. Latency and throughput is another risk with LLM APIs. Latency is the time it takes for an LLM API to process a request and return a response. An increase in latency can be critical of facing applications where immediate feedback is expected, such as chatbots or [[Real-Time]] content generation tools. Throughput is the number of requests an API can handle simultaneously. High demand on an LLM API can lead to drop in throughput, especially during peak usage times. This can limit the [[Scalability]] of your applications. Unfortunately, you depend on the LLM API provider to maintain a reasonable latency and throughput. However, you can implement strategies such as caching frequent requests, and distributing load across multiple APIs to reduce its impact.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=189)** Finally, LLM API providers are responsible for training and updating their models. [[Data Collection]] must stop at some point to allow for training. For instance, GPT-3.5's data ends in September, 2021 and [[GPT-4]]'s in January, 2022. This means they might not provide the latest information. More a provider does not retrain their model frequently with the latest techniques, then the performance of other API providers become better. To prevent vendor lock-in and using an inferior product, your system should be able to switch API providers. These are some of the LLM API challenges and limitations. The biggest limitations are handling performance degradation in the API, like an increase in latency or the endpoint. In the next two lessons, we will learn about why something like this might happen and how we can deal with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1), [[Microsoft Products|Products]] (1), [[User Experience (UX)|User experience]] (1), [[Real-Time]] (1), [[Scalability]] (1)
> **Env Vars:** llm (12), api (12), gpt (2), sla (1)
> **Analogies:** such as (2), just like (1), for instance (1)
> **Cross-References:** in the next (2), in the last (1)
> **CLI Commands:** find (1)
> **Versions:** 3.5 (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Strategies to handle endpoint uptime limitations](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed LLM API Challenges. While building apps with LLM APIs may be easy, you will have to still account for API disruption. In this lesson, we will learn how to deal with one of those challenges, the API uptime while making sure your app still functions. Uptime is the amount of time an API is available for processing requests. Uptime is particularly important for realtime application like chat bots where a delay can affect customer experience. LLM API providers have an incentive to maintain high uptime to keep their services reliable for their users. However, the compute intensive nature of deploying LLMs make it difficult to have consistent uptime. In this lesson, we will learn about some of the techniques that you can use to ensure that your product doesn't stop working, even if the LLM endpoint you are using is down. Continuously monitoring the health and performance of LLM API endpoints is critical when building [[Real-Time]] application. Set up alerts to notify your team of any issues or performance degradations, allowing for [[Swift (Programming Language)|swift]] action to resolve problems before they affect users.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=93)** The next step is to implement backup API endpoints in case the primary endpoint goes down. This could be a different model from the same API provider, for instance, shifting from [[GPT-4]] to GPT-3.5, or a different API provider as well. The switch to the backup endpoint needs to happen automatically to minimize service disruption. We can use caching mechanisms to store responses from the LLM API for frequently asked queries. Caching can also reduce the dependency on the API for every request, thereby elevating pressure on the API during peak times and providing a fallback when the API is temporarily unavailable. Graceful degradation is when you design your application to handle API down times gracefully instead of falling. In cases where the LLM API is unavailable, the application should continue to operate in a degraded mode, perhaps offering limited functionalities. In a later chapter, we'll talk about local LLM deployments as well. You can combine the use of LLM APIs with a simpler local model to handle basic requests, reserving the LLM API for more complex queries.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=188)** This hybrid approach can ensure that your application remains functioning, even if the LLM API is down and also reduce costs. Finally, LLM API providers may quietly update their endpoint or the model. Performing regular API integrations tests to ensure compatibility with the API updates and to identify any potential issues that might lead to downtime can prevent sudden downtimes. In this lesson, we talked about some techniques to deal with LLM API downtime. In the next lesson, we will learn how to deal with another issue, API latency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Swift (Programming Language)|Swift]] (1), [[GPT-4]] (1)
> **Env Vars:** api (22), llm (13), gpt (2)
> **Cross-References:** in the last (1), we discussed (1), we talked about (1), in the next (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)

#### [Mitigating latency issues in LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=0)** - [Instructor] In the last lesson, we learned how to deal with endpoint uptime issues. In this lesson, we will learn how to deal with latency in your LLM API calls. Latency is the delay between sending a request to the LLM API and receiving the result. Both latency and uptime issues affect the [[User Experience (UX)|user experience]] and the perceived reliability of your LLM [[Generative AI]] product. A slow response time or high latency can make it seem as if your app is not working, similar to actual downtime. This makes latency a critical metric for realtime applications like chatbots. It is essential to differentiate between latency and uptime. While latency focuses on the speed of your app, uptime is about ensuring continuous availability. Understanding this distinction is key as solving latency does not necessarily solve uptime issues and vice versa. For instance, an API might respond quickly when available, but suffer frequent outages. This will affect users to rely on your product's service to be continuously available. High uptime is also crucial for business clients, so that their operations don't get affected.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=97)** On the other hand, your API might have a very high uptime, but be slow to respond. We will look at strategies to deal with this now. LLMs are auto regressive models. For every token the model generates, we need to rerun the whole model. This means even though some text has been generated, it might take tens of seconds to generate the whole response. If you wait for the whole response to be generated before showing it to your end users, they may have to wait for a while. Thus, increasing the perceived latency. Streaming the AI's response as it's being generated is an easy way to overcome this. Doing this means that your users can see parts of the response quickly, and will not have to wait for the whole response to be generated. Secondly, you can consider using API providers that have lower latencies. For instance, Groq is an LLM API provider that has developed custom [[Hardware]] to reduce latency and increased throughput. For some models, you can expect responses to be generated with a throughput of 400 [[Tokens]] per second. Caching is another technique for reducing latency. It involves storing common queries and their responses.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=195)** If a user asks a question with a cached answer, you can return the cached answer instead of calling the API. This can significantly reduce the number of requests that we need to send to the LLM API, thereby, decreasing latency. Finally, you can consider breaking up long tasks into smaller and more specific prompts. You can also send each of these prompts to different API providers or different model endpoints. In this chapter, you learned about LLM APIs and how to deal with API limitations like latency and uptime. To summarize, the main techniques to handle LLM latency in your application is to cache common queries, break down large prompts into smaller tasks, and choose APIs that have faster response time and allow streaming responses. In the next chapter, we will learn about LLM deployment architectures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Generative AI]] (1), [[Hardware]] (1), [[Tokens]] (1)
> **Env Vars:** api (10), llm (8)
> **Definitions:** is an  (2), means that (1)
> **Analogies:** for instance (2), similar to (1)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: API limitations for LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=0)** (catchy music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=6)** - [Instructor] In this chapter, you learned about some of the limitations of deploying LLMs using APIs. We also learned about how to overcome some of these limitations. One of the challenges we talked about was API latency and throughput. A high latency can make your application seem slow. A low throughput will stop you from scaling your application to a larger user base. One of the solutions to this problem is to use a backup LLM API, and APIs that are faster and have a higher throughput. Groq is one such API. In this challenge, we'll compare Groq's API throughput with OpenAI's API. Here are the steps that you need to do. First, you need to create an account on Groq and create an API token. Next, you will write a [[Python (Programming Language)|Python]] code to query their API. After that, we will measure the number of [[Tokens]] that Groq processed and the time it took to send us the response. We can calculate Groq's throughput by dividing these total tokens with the processing time. Finally, we will query OpenAI's API and measure its throughput. You should find OpenAI's throughput to be significantly lower than Groq's throughput. This makes Groq's API perfect
>
> **[1:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=99)** for realtime application like chatbots, or content generation where users expect quick responses. As a bonus, Groq's platform supports many models, so you can query all of them and see each of their throughputs. You can view the solution to this challenge in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (9), llm (1)
> **CLI Commands:** make (1), python (1), find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (catchy music) (1)

#### [Solution: API limitations for LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=0)** - [Instructor] In this video, we will write a script to compare the throughput of Groq's API with OpenAI's API. Let's break it down step by step. First, ensure that the required libraries, Groq and OpenAI are installed. These libraries are used to interact with different language model APIs. Let's start by measuring Groq's throughput. To do that, we import Groq from Groq, and set up groq.client using our Groq API key. You can get the API key from console.[groq.com](https://groq.com). Now, let's write a function to generate text that takes the model name and prompt as parameters and calls the Groq API.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=73)** The way to generate a chat completion using Groq is very similar to OpenAI. We need to call the create function from chart completion. To this function, we pass the messages and the model. Next, let's define a list of models and a prompt. We can loop through each model, generating text using the generate text function. For each model, we calculate the throughput, which is the number of [[Tokens]] processed per unit of time. You can see Groq's throughput can get as high as 900 tokens per second. Now, let's switch to calculating openAI's throughput for the [[GPT-4]] turbo model. You can see that the throughput for the GPT-4 is about 22 tokens per second, which is far lower than Groq's throughput. This information is valuable for understanding the limitations and capabilities of various LLM model APIs and can help you choose which API to use for your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[GPT-4]] (2)
> **Env Vars:** api (6), gpt (2), llm (1)
> **Code Identifiers:** openai (1)
> **URLs:** [groq.com](https://groq.com) (1)
> **UI Navigation:** switch to (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Deployment Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Vector databases for LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=0)** - [Instructor] Welcome to our chapter on [[Vector Databases]] for LLM deployment. Today, we will dive into how vector databases are transforming the deployment of [[Large Language Models (LLM)|large language models]]. In the last chapters, you learned about the different ways to deploy LLMs and some challenges in deploying LLM-powered applications. In this chapter, we will learn about some of the common architectures to deploy LLMs to production. We will also see how we can use vector databases to build a retrieval augmented generation architecture to retrieve relevant information and pass this as context to the LLM venture rating text. Imagine you are building a chatbot. We begin with a basic structure. Deploying the LLM on servers like Triton or FastAPI, setting up a user-friendly frontend, and ensuring our backend handles all essential functions like logging and [[Prompt Engineering]]. But as we lay this foundation, think about its limitation. How does using outdated data affect our chatbots performance? Let's discuss. With this simple architecture, our user can ask our chatbot to generate articles on some topics. This request is sent to the LLM and the response from the LLM is shown to the user. However, there are some limitations. Firstly, our LLM may be trained on outdated data,
>
> **[1:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=97)** which means that it' will not be able to write content on current trends. This can be fixed by [[Fine Tuning]] the model with the latest data. However, fine tuning takes time and the model will always lag behind. Secondly, we are limiting our architecture to only generating text when it could potentially do other tasks like publishing the content once the user approves it. Finally, with this architecture, we rely on human evaluators to approve the generated content. Instead, we could automate the process of evaluating the generated content for factual errors using another LLM. In this chapter, we will look at the different architectures to solve some of these issues, and in this video, we will see how we can use vector databases to build a retrieval augmented generation architecture to retrieve relevant content and pass that as context to the LLM while it is generating text. Unlike traditional [[Databases]], vector databases store vectors instead of files or tabular data. Each vector in the database corresponds to some data, usually in the form of text. The vector is created by an embedding model and is compressed representation of the data. Similarly, data will have similar embeddings,
>
> **[3:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=192)** and we can use a vector database to perform similarity searches. So how can we leverage vector databases to ensure our chatbot has recent data? Think of a vector database as a dynamic library. Continuously updating with the latest books. Every new piece of data is transformed into a vector using an embedding model and then stored. When a query comes in, it's also converted into a vector. The database then finds the most similar vectors in the vector database, just like how we search for relevant books in our library. We can then pass this data as context to our LLM to generator response. This is known as the RAG architecture. Let's apply what we have learned to a real world scenario. Summarizing the latest Golden Globes event. Our vector database continuously ingest news articles and other relevant information. When someone asks our chatbot about the Golden Globes, it doesn't just guess the answer. Instead, it retrieves the latest articles from the database, ensuring the summaries accurate and up-to-date. For each query, our backend server first fetches those relevant articles from our vector database. These are then appended to a prompt test context and sent to the LLM. The vector database now acts as our knowledge library,
>
> **[4:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=288)** which our LLM can leverage to generate domain specific and recent content. In the next lesson, we will see how we can use LLMs to generate text and perform tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (6), [[Fine Tuning]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Prompt Engineering]] (1), [[Databases]] (1)
> **Env Vars:** llm (12), rag (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1), known as (1)
> **Analogies:** imagine (1), just like (1)
> **Speakers:** - [instructor] (1)

#### [Agents in LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=0)** - In the last video, you saw how we can use [[Vector Databases]] to build a rag architecture. In this lesson, we will see how we can extend our LLM apps functionalities by making it do tasks for us autonomously. LLM applications that can use tools to do tasks are called autonomous agents or agents for short. Agents have four main components. First, there is the planning module that plans and coordinates the tasks that the LLM needs to do and the order in which to do them. Next, we need a module to store the task related data that the model needs. This can be a vector database. For short-term memory, the data may be stored in the prompt itself. Tools are how LLMs perform these tasks. Tools could be third party APIs that the LLM can call or workflows that the LLM can execute. Finally, we need an LLM core that is the brain of the agent. You can use an LLMAPI or have a locally deployed LLM model. Remember that we are building a content generation chatbot. To improve our bot, we could have the LLM publish the generated article and create a few summaries to share on social media sites. So what would the architecture
>
> **[1:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=92)** for something like this look like? Well, first, we need to store the generated content. In this case, we can store it in a traditional [[SQL]] database. To generate the summaries, we can then pass the whole generated article as context to the LLM in the prompt. Our LLM app will need access to tools to publish the generated content to different social media sites. These tools will be APIs where we send a request to a post our article. Finally, we need a planning module. Our planning module can be embedded into our original backend server. Its job will be to call the LLM model to create summaries to share on each social media channel. It orchestrates the writing process, plans the distribution of the generated content, and calls the APIs to publish the post to different social media sites. While this is a simple example, LLM agents can perform various tasks. Multiple LLM agents can also work together to run complex workflows and have even been shown to build complete projects and run companies. The agent architecture we showed in this video allows LLMs to perform tasks that save time and resources for our chatbot users.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=188)** However, our app still needs improvement. For instance, our app currently does not have a validation flow to check whether the generated content is factual. In the next video, we'll see how we can leverage multiple LLMS interconnected as chains and build coordinated workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vector Databases]] (1), [[SQL]] (1)
> **Env Vars:** llm (13), llmapi (1), sql (1), llms (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)

#### [Chains in LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=0)** - [Instructor] We have evolved from basic chatbot tasks to a sophisticated semi-autonomous chatbot capable of generating content. You saw how we can use an autonomous LLM agent to interact with tools and perform tasks. However, one final piece must be included in our content generation chatbot app to make it completely autonomous. We have encountered challenges such as reliance on human intervention for topic discovery and quality control and errors in content generation. What if, instead of having a human do this prompting, we have another LLM scour the internet for new topics to write on and pass those results onto our content generation LLM and have another LLM evaluate the generated content and suggest changes. This kind of architecture is where the output of an LLM is fed into another LLM as input and is called an LLM chain. By the end of this lesson, you'll fully understand the structure of LLM chains, how they can create fully autonomous systems and the common pitfalls in their deployment. Let us look at four main components of building LLM chains. The first step to building LLM chains is to break down a complex task into simpler manageable subtasks.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=93)** Each subtask is handled by a specific model optimized for that operation. Secondly, once you have broken down your tasks into smaller tasks, you can have a specialized LLM for those subtasks. In our content generation application, we have three main tasks, finding topics, generating content and reviewing the generated content. Breaking down complex tasks that require multiple processing steps enhances the performance since each task is handled by a specialized model. Thirdly, models in a chain are usually arranged in a sequence. The output from the first model is passed on to the second model as an input and this process continues down the chain. Each model processes the incoming data, adding value or transforming it as we go on to the next stage. Chains can often go wrong, so it's essential to have a feedback to adjust or reprocess each stage. In our case, we have a final LLM that reviews the generated content and can trigger the content generation LLM with suggestions. This will enhance the accuracy of the final output. Let us look at some of the advantages of LLM chains. Specialization allows LLMs to [[Microsoft Excel|excel]]
>
> **[3:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=187)** in their respective tasks, thereby increasing the overall effectiveness of our applications. The modular nature of LLM chains allow for easy introduction of new models, or modifications of existing ones to tackle additional requirements or optimize outcome. Finally, each node in the chain can be scaled independently based on demand. This helps us optimize resource utilization and reduce operational cost. This [[Scalability]] is essential for managing varying load and is particularly advantageous in systems where different tasks have different resource requirements. However, LLM chains have many engineering challenges. One of the biggest challenges is ensuring smooth data transition between the models while maintaining [[Data Integrity]]. Proper [[Data Management]] is crucial to prevent the data loss and ensure that each model receives the correct information needed for processing. Errors can cascade through the chain with each model potentially amplifying an initial mistake. Robust testing and evaluations are essential to catch and correct errors early. Finally, latency is a big concern in LLM chains. Each additional model in the chain can add to the total processing time impacting performance.
>
> **[4:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=283)** This is why LLM chains should be kept short in [[Real-Time]] application. However, latency is not a concern for offline or [[Batch Processing]] applications like our content generation app. Now you know about how to build LLM systems. In the next chapter, we will learn how to evaluate LLM applications to address hallucination and to monitor performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Scalability]] (1), [[Data Integrity]] (1), [[Data Management]] (1), [[Real-Time]] (1)
> **Env Vars:** llm (20)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Deploy a simple RAG application using an API](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=0)** (bright uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=6)** - [Instructor] In this lesson, we discussed RAG applications. In a typical RAG application, you store contextual data in a vector database and use that as a knowledge piece for the LLM to answer user queries. For this challenge, we will build an RAG application to ask questions on a webpage. We will use Graphlit to build this applications since they provide a hosted solution to ingest data and build chatbots on top of it. To complete this challenge, you will have to do the following steps. First, you will need to create a Graphlit account and [[Fetch]] your API [[Tokens]]. Next, you need to ingest a webpage. Graphlit will chunk the ingested webpage text and store it onto a vector database. After that, you will need to create an LLM specification. This tells Graphlit the configurations you want to use when calling the LLM API. Since a RAG application is useful for having a conversation, we need to find a way to keep track of these messages that our end-user sent. This is handled by Graphlit by creating a conversation object. Finally, we can prompt the conversation with the user input. When we do this, Graphlit searches the vector database
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=102)** for relevant context. It appends all the relevant context to the user's prompt before querying the LLM. Now your LLM has information it needs to answer the user's question. You can view the solution to this challenge in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[Tokens]] (1)
> **Env Vars:** llm (5), rag (4), api (2)
> **Cross-References:** we discussed (1), in the next (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright uptempo music) (1)

#### [Solution: Deploying a simple RAG application using an API](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=6)** - [Instructor] In this video, we will see how to use the Graphlit API for creating a RAG system. We will walk through the code step by step and explore how to interact with the Graphlit API to ingest data into a vector database, and then use an AI to have a conversation with the data. Let's start by looking at the code. First, we will install the Graphlit package and import the necessary modules, including Graphlit from Graphlit package. Next, we will initialize a graphlit instance by providing the required credentials such as organization_id, environment_id, and jwt_secret. You can get this data from your Graphlit portal. Now we can start writing functions for each task. The create_feed function creates a [[Data Ingestion]] feed in Graphlit, it takes the graphlit instance and a URI as parameters. It creates a FeedInput object with the provided URI and other properties, and then uses the Graphlit client create_feed method to create the feed. If successful, it returns the feed_id, otherwise it returns the error message. Now we have to create specification function, which creates an LLM specification in Graphlit.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=102)** A specification is a set of LLM configurations that define the behavior of the LLM in our RAG application. We define a specification input object with various properties such as name, type, service type, search type, and model properties like temperature, [[Probability]], and completion token limit. (keyboard tapping)
>
> **[2:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=143)** (keyboard continues) The function returns the specification ID if successful. A RAG application also needs to keep track of user conversations. We can use the conversation input object with the name and the specification reference to create a conversation. This function returns the conversation ID if a conversation is created successfully or the error message if an exception occurs. The last function we need to write is the prompt conversion conversation function that is used to start the conversation with a prompt. It takes the graphlit instance, the conversation ID, and the prompt as parameters. (keyboard tapping)
>
> **[3:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=211)** Then we use the prompt conversation method to send the prompt to the conversation and retrieve the response. If successful, it returns the response message and citations. Otherwise, it returns none and a error message. Finally, let's see how to combine all of this together. First, we define a URI that we want to add to the vector database and create a feed using create_feed function. Next, we create a specification using create_specification and a conversation using create_conversation. Make sure to keep track of the different IDs at each step. Finally, we can prompt the conversation with a question using prompt_conversation. The response message is then displayed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Ingestion]] (1), [[Probability]] (1)
> **Env Vars:** rag (3), uri (3), llm (3), api (2)
> **Code Identifiers:** create_feed (3), organization_id (1), environment_id (1), jwt_secret (1), feed_id (1)
> **Documentation:** specification (7)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)


### 4. Monitoring LLM Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to LLM performance monitoring](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=0)** - [Instructor] In the last chapter, we learned about [[Generative AI]] deployment architectures and the complexities of integrating LLMs into production applications. However, deploying these models is only the first step. Ensuring that they operate effectively and safely in production is an ongoing challenge. This is where LLM monitoring comes into play. Monitoring these systems is not just about tracking their performance, it's about ensuring that they behave as expected, and mitigate any potential risk they might introduce. Even though LLMs are very capable models, deploying them to production comes with inherent risks and imperfections. They are susceptible to several issues like hallucination, prompt injection, and other security challenges that can affect their functionality and [[User Experience (UX)|user experience]]. In this lesson, we will learn about monitoring LLM apps in production and how to address challenges like hallucination. Let's talk about the key components that we should monitor. Performance metric indicators like latency, response time, and throughput, give insights into operational health of our generative AI application. Since LLMs are very compute-intensive,
>
> **[1:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=94)** any changes in these metrics might indicate underlying issues that need immediate attention. As your LLM application grows and serves more users, you will find changes in the input data being fed to the model. Since the input data changes, so does the output from the model. This phenomena is called model drift, resulting in models' predictions, deviating from the expected outcomes. Regular monitoring for model drift is essential to maintain accuracy and relevancy of generative AI application. Next, you should monitor how users interact with the LLM. This can reveal potential attacks or misusing, such as attempting to trick the model into producing undesirable outputs. Moreover, it can also help identify new user patents, inputs, and behaviors that could indicate a need for further fine-tuning of your LLM. Finally, since LLMs require substantial computational resources, monitoring resource utilization such as memory and CPU loads is necessary to prevent the system overloads that could lead to decreased performance or downtime. Remember that monitoring is not just about
>
> **[3:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=190)** maintaining operational efficiency. It is an integral part of your generative AI application. It helps you track user behaviors so you can improve your application and ensure your application is secure, reliable, and beneficial to all users. In the next lesson, we will learn about how specific monitoring challenges such as hallucinations and [[AI Security]]. We will also learn the tools needed to evaluate LLM performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (4), [[User Experience (UX)|User experience]] (1), [[AI Security]] (1)
> **Env Vars:** llm (6), cpu (1)
> **Definitions:** is an  (2), is called (1)
> **Analogies:** such as (3)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Addressing hallucinations in LLMs](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=0)** - [Instructor] When LLMs are not given enough context or are asked to provide responses outside the training data, they tend to generate false, irrelevant, or inaccurate outputs. This is known as LLM hallucinations and it is one of the biggest challenges of deploying [[Generative AI]] applications. Broadly, there are two types of hallucinations, factual hallucination, and faithfulness hallucinations. Factual hallucinations occur when the LLM fabricates facts or is inconsistent with its knowledge. On the other hand, faithfulness hallucinations occur when the LLM does not follow instructions or the contextual information it is provided. Hallucinations in LLM responses can be serious issues, particularly if your application has compliance, regulatory, or legal implications. It can also lead to the spread of misinformation when LLMs are used for content generation or as informational bots. This can mislead your users, causing reputational damage. Frequent inaccuracies can also reduce your users' trust in your tool, which can reduce the adoption of your generative AI applications. And finally, when LLMs are used
>
> **[1:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=94)** in sectors like healthcare, law, [[Financial Forecasting]], where reliability and accuracy is important, hallucinations can pose operational and financial risks. So how do we mitigate hallucinations in our applications? The easiest way to reduce hallucinations is to change how we call our LLM. By reducing parameters like temperature and top_p to the range of 0.1 to 0.2, we can significantly reduce hallucinations and make our model outputs more deterministic. However, it'll also reduce the creativity of our LLM outputs. Implementing a RAG Architecture where you retrieve context from a database of relevant information also reduces hallucinations. Most hallucinations occur when an LLM tries to fill in its own knowledge gaps with information it has created. So by providing LLM with a lot of contextual data, we reduce the LLM's need to guess information. In the next chapter, we will learn about how we can evaluate RAG applications. Similarly, having a cache of human-verified answers that the LLM can leverage can also help reduce hallucinations. You can also use [[Prompt Engineering]] techniques
>
> **[3:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=190)** that we have covered in our previous courses, like few-short prompting, chain of thought prompting, prompting the LLM to think step by step and to respond with, I don't know, when it does not have information, can help reduce hallucinations. And finally, [[Fine Tuning]] the LLM on your own data and edge cases can help identify and mitigate hallucinations. In conclusion, while LLM hallucinations are a huge challenge for LLM deployments, they can be easily mitigated. In the next chapter, we will learn about evaluation techniques for LLMs in production that we can use to reduce hallucinations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Financial Forecasting]] (1), [[Prompt Engineering]] (1), [[Fine Tuning]] (1)
> **Env Vars:** llm (14), rag (2)
> **Versions:** 0.1 (1), 0.2 (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced Deployment Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Prompt management for LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=0)** - [Instructor] In the previous course, we learned about [[Prompt Engineering]] and how a prompt structure, wording, and comprehensiveness can influence the quality and relevance of the model's output. Since prompts are the primary interface with the LLMs, it is vital that we manage and version our prompts and evaluate their efficacy. In this lesson, we will discuss a typical prompt engineering workflow when building a [[Generative AI]] product and how you should manage and evaluate your prompts. Remember that prompts are vital as they control how the model responds to a query. A prompt typically consists of three parts. The first part is the system prompt. This part informs the LLM about how it should respond and behave. It sets the tone, style, and the role of the LLM in the conversation. For example, a system prompt might instruct the LLM to respond in a formal tone, adopt a persona like a customer service representative, or apply a certain level of technical depth suitable for the expected audience. The next part of the prompt is the context. This gives the LLM more information to use to respond. It can contain previous user interactions, user [[Metadata]], and details about the topic of discussion. The context will change
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=93)** based on how the user is interacting with your app. The last part of the prompt is a user query. This is what triggers the model to generate a specific response based on the system, prompt settings, and the provided context. A well-crafted prompt can lead to accurate and contextually relevant and useful responses, while a poorly designed prompt might result in an irrelevant or incorrect information. However, you cannot expect the user to craft the best prompts. As a prompt engineer, you will have to figure out the best system prompt and the context to answer user queries. Effective prompting not only improves the [[User Experience (UX)|user experience]], but it also reduces the need for extensive post-processing and enhances the efficiency of interactions with the LLM. A typical prompt engineering workflow involves several steps. The first step is to understand the specific needs and objectives of the prompt. If the requirements are too broad or very complex, you may want to break it down into smaller subtasks. Once the requirement is finalized, the next step is to craft an initial prompt to perform the tasks. This first prompt may not work so well,
>
> **[3:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=187)** so testing the prompt and analyzing the output for relevance and quality is essential. The next step is to refine the prompt to fix any issues iteratively. You may have to provide more instructions in the system prompt or add more context. Modifying prompts based on feedback and testing results will improve output quality. When a prompt works well, you can deploy it in your production environment. This workflow is cyclical, so you will have to perform multiple prompt refinement iterations before you can achieve the desired outcomes. Throughout this prompt engineering workflow, you will write and test multiple prompts. With each prompt, you will learn something new and better understand what works and doesn't work. This is why keeping a structured record of prompt versions and their [[Performance Metrics]] is essential. Versioning prompts similar to software versioning is crucial because it helps prompt engineers to understand what changes have been made, why they were made, and who made them. You can also track how these changes affect the results. You can quickly revert to a better performing version if a new prompt version performs poorly.
>
> **[4:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=282)** This helps you experiment confidently and test new prompt variations, knowing that earlier versions are safely archived. Finally, effective management and versioning of prompts ensure that improvements are methodical and documented, making the development process reproducible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (4), [[Generative AI]] (1), [[Metadata]] (1), [[User Experience (UX)|User experience]] (1), [[Performance Metrics]] (1)
> **Env Vars:** llm (5)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating LLMs in production](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed how changing prompts can affect the LLM's response. This is why LLM evaluations are essential as they ensure that our [[Generative AI]] apps are accurate, reliable, and context aware before they are deployed. In this lesson, we will explore evaluation for LLMs and evaluation metrics for RAG applications. There are two types of LLM evaluations, model evaluation and task evaluations. Model evaluations are done to see how the model performs compared to other LLM models. We do these evaluations using standard test cases and data sets like MMLU, TruthfulQA and GLUE. These benchmarks help us understand a model's strength and weaknesses. For instance, MMLU tests how good a LMS knowledge is across wide range of subjects like mathematics and history to more specialized areas like law and [[Ethics]]. However, model evals do not tell us how well a model might perform at this specialized task we are doing. This is why we need to do task evaluation. Task evaluation typically involves standardized test case that compares the model's output against predefined correct responses. This ensures the model outputs do not deviate
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=96)** far from the desired outputs. Next, prompts are evaluated as well. This is especially important when changing the prompt or using a different LLM. It ensures that we correctly prompt the model to lead to the desired responses. Since each LLM is trained differently, the same prompt may not work when changing the model or after [[Fine Tuning]] your existing model. Therefore, you should evaluate your prompts after changing the model as well. Finally, we must evaluate our application continuously throughout its lifecycle from development to production. This ensures that our AI apps response are of high quality and stay relevant to our users' needs. Since most LLM applications are some form of RAG application where you retrieve some context, feed it to the LLM and then ask it to generate responses using the context, we will focus on evaluating RAG applications. In particular, we'll learn about RAGAs framework. RAGAa has four main metrics, which are combined together to form the RAGAs score. These metrics address both the degeneration and retrieval aspects
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=188)** of RAG applications resulting in a thorough and balanced evaluation of the RAG application's overall performance. These metrics include faithfulness, which assesses how factually correct the generated responses are in relation to the retrieved context. It ensures the integrity of the information provided by the LLM. Next, answer relevancy measures how relevant the generated answers are to the person's query, crucial for user satisfaction and effectiveness of the model. Context precision evaluates the quality of the retrieved context. High precision means the information retrieved is mostly relevant, reducing the likelihood of generating incorrect or irrelevant responses. And finally, context recall checks whether the system can retrieve all relevant information needed to answer the query effectively, high recall ensures comprehensive and complete responses. In conclusion, remember that LLM task evaluations are vital to maintain trust and reliability in generative AI applications. Moreover, evaluation helps us itrate upon our generative AI applications leading to continual improvements. In the next chapter, we will see how we can use RAGAs
>
> **[4:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=282)** to evaluate an LLM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[Ethics]] (1), [[Fine Tuning]] (1)
> **Env Vars:** llm (11), rag (5), mmlu (2), glue (1), lms (1)
> **Cross-References:** in the last (1), we discussed (1), in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Evaluating LLM systems](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=6)** - [Instructor] In this lesson, you have learned the importance of evaluating the response from RAG applications. We talked about the RAGAs framework, which uses open AI's GPT model to evaluate both the generation and the retrieval aspects of RAG applications. In this challenge, you will use RAGAs framework To evaluate a RAG application. Here's what you will need to do. First, you need to install the RAGAs package. Next, we will download dataset that contains prompts, context, generated answer, and ground truth answers for a RAG application. You can use your own RAG data from one of the previous challenges. Next, we will use RAGAs framework to calculate four main metrics, context precision, faithfulness, answer relevancy, and context recall. As a bonus, you can also try to change the prompt or the contextual data, then generate new answers and measure the metrics again. This will help you guide your [[Prompt Engineering]] process. By the end of this challenge, you will be well-equipped to evaluate RAG applications, allowing you to confidently return LLM-generated answers to your end users. You can view the solution to this challenge
>
> **[1:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=100)** in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1)
> **Env Vars:** rag (6), gpt (1), llm (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Evaluating LLM systems](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=0)** (smooth uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=6)** - [Instructor] Let's see how to use Ragas to evaluate a RAG application. We start by first installing the Ragas library. Then we import the necessary functions and classes that we will use.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=36)** First, we'll import the datasets package. Next, from Ragas, we will import the four metrics, as well as the evaluate class. Next, we set up an [[OpenAI API]] key using the getpass model. Now we are ready to load our dataset. We will use the fiqa_eval dataset from the exploding gradients. This dataset contains questions, context, and answers from a RAG application. It also contains the ground truth we can compare with.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=100)** Since this is a large data set, we will select a subset for evaluation. In this case, I am selecting the first three entries. Now we can pass the data to evaluate function along with four metrics.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=128)** You can then print the results and see values of the four metrics. As a bonus, try to generate an answer using a different model, and see how the evaluation results change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1)
> **Env Vars:** rag (2), api (1)
> **Code Identifiers:** fiqa_eval (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (smooth uptempo music) (1)


### 6. Security and Cost Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Security considerations for LLMs in production](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=0)** - [Instructor] In the last chapter, we talked about the importance of evaluating LLM outputs, especially for [[Real-Time]] rag applications. While evaluations test the quality of the output of LLMs, they do not test whether LLM outputs are safe and are not leaking sensitive or private data. Moreover, elements can be prone to malicious actors trying to attack them to get them to generate harmful or incorrect outputs. This could result in the spread of misinformation, damaging content, craft, [[Phishing]] emails, and so on. In this chapter, we will learn about some of the safety concerns of LLMS in production and what you can do to protect your [[Generative AI]] application. First, let's take a look at some of the safety concerns and attack vectors of LLMs in production. Prompt injection is one of the most popular attack vectors for LLMs. It involves manipulating and LLM by providing inputs that cause it to perform unintended actions. People have used prompt injection attacks to get discounts for [[Microsoft Products|products]] through support chatbots. Have LLMs output hurtful comments, and even reveal internal company data. Since this is one of the most common
>
> **[1:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=94)** and easiest to implement attack vectors, it is crucial that your LLM systems have guardrails in place to stop them. LLM systems, especially those that are agent-based and have access to tools, may reveal sensitive data in their output. This can lead to unauthorized data access, [[Privacy]] violations, and security breaches. It is crucial to implement data sanitization and to enforce strict access policies for the tools that LLMs use. If your LLM system is not running in an isolated and containerized environment, it may be able to execute malicious code or respond with system data that it should not have access permissions and functionality such as the ability to run code. Finally, a fine-tuned LLM can unintentionally expose sensitive information it was trained on. This would create [[Data Privacy]] issues and may leak PII information. This is known model inversion attack. These are some of the most common attack vectors. There are also safety concerns with deploying LLM applications. For instance, an LLM can generate biased
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=188)** or discriminatory outputs, and LLM can also respond aggressively or rudely. This is a huge concern in [[Customer Support]] chatbots, where a harmful response can cause reputational damage and customer dissatisfaction. Now, let us look at some of the mitigation strategies to make your AI systems safe and secure. Firstly, it is important to have guard rails that can scan the outputs of LLMs for anomalous behaviors and can ensure that outputs are sanitized. You should also include robust mechanisms to validate and sanitize inputs to the LLM. This helps prevent adversarial inputs and prompt injection attacks from manipulating the model's output. You should use containerization technologies to isolate the LLM and prevent it from accessing the other parts of data or infrastructure. This will also prevent the LLM from potentially running code that can leak internal details. Next, you should be monitoring tools to detect unusual behavior or outputs from the LLM, which may indicate an attack or a malfunction. Finally, a rapid response team
>
> **[4:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=281)** and protocol should be established to address potential security incidents. This includes the ability to roll back or update models without significant downtime. Monitoring your LLM inputs and outputs in production is important to detect anomalies. When anomalous behaviors are detected, or if the LLMs output deviate from the expected behavior Safety systems should kick in to prevent those outputs from being sent out to users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Phishing]] (1), [[Generative AI]] (1), [[Microsoft Products|Products]] (1), [[Privacy]] (1)
> **Env Vars:** llm (15), llms (1), pii (1)
> **CLI Commands:** make (1), rails (1)
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** such as (1), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Balancing costs and performance in LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=0)** - [Instructor] So far, we have been mostly discussing [[Real-Time]] deployment architectures. In a real-time system. The LLM is constantly available and waiting for requests. This is great for systems where you need to serve the response from your LLM to your customers quickly, like a chat bot. However, it is also costly, since you need to have a dedicated server running 24/7 to serve the model. In this video, you will learn about alternate deployment techniques to reduce cost. We will also learn some metrics to measure an LLM system's performance, and how to balance the cost and performance to get the most of your LLM apps. First, let's take a look at the cost associated with different types of AI deployments. The first step companies usually take when building an AI product is to use LLM API by providers, like Anthropic or OpenAI. With APIs, the primary cost factor is related to consumption of [[Tokens]]. Tokens are essentially units of texts, or pieces of words, processed by the model. Some API providers charge differently for input and output tokens. Since the number of tokens can vary widely depending on the application complexity and user-interaction intensity,
>
> **[1:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=94)** budgeting and cost estimation can be tricky. Moreover, the cost can escalate quickly with increased usage, or as application complexity keeps increasing, requiring longer prompts or chain of API calls. Once costs start increasing, companies usually pivot to self-hosting an LLM. This approach shifts the cost from tokens to the computational resources required to run the model. The costs now become constant and predictable, since it's determined by the size and the number of servers, rather than fluctuating with token usage. This can be a cost-effective solution for applications with high or unpredictable demand, as it eliminates per-token charges. However, the initial setup and ongoing maintenance of such a system can be resource-intensive. Moreover, if your app's usage is low or intermittent, then the cost of having a dedicated server may be greater than using an API. LLM APIs and dedicated servers are essential for applications that require real-time responses, like chat bots. For applications that do not require real-time processing, [[Batch Processing]] can be a cost-effective solution.
>
> **[3:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=190)** A batch processing system runs at a scheduled time on a backlog of requests. This reduces the need for a dedicated server to run all the time. This approach saves on server costs, and has predictable costs similar to real-time self-hosting. While some API providers, like OpenAI, are beginning to offer batch processing capabilities at reduced costs, they are still typically tied to token usage, introducing some level of cost variability. When self-hosting LLMs, you can also have the ability to further reduce costs by choosing smaller LLM, or quantizing larger models. Quantization is a technique used to reduce the precision of the numbers used in LLM computations. This process reduces the model's memory footprint, and speeds up its computation, albeit at the potential cost of a slight decrease in LLM's quality, metrics accuracy, F1 score, or perplexity. However, quantized models can run faster and on less powerful [[Hardware]], which can be cheaper, enabling more efficient use of resources and lower costs. The choice of GPU can also affect the performance of LLMs.
>
> **[4:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=286)** Modern, high-performance GPUs, like A100 or H100, are designed to handle LLM computations faster. Using the latest commercial GPUs can drastically reduce response time, and can run sophisticated and larger models, however, they come with higher costs. As an AI developer, you need to evaluate whether the performance gain aligns with the operational budgets and the specific demands of your applications. In some scenarios, a more expensive GPU can be cost-effective over the long term, if it means significantly faster processing times, and the ability to handle more users, or more complex queries, without degradation in the model's quality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (5), [[Tokens]] (5), [[Batch Processing]] (3), [[Hardware]] (1)
> **Env Vars:** llm (11), api (5), gpu (2), a100 (1), h100 (1)
> **Prerequisites:** you need to have (1), required to (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Strategies for cost-effective LLM deployment](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=1)** - [Instructor] In this video, I want to wrap up everything you have learned. So by giving your framework for how to choose the LLM deployment methodology for your application. Applications using [[Large Language Models (LLM)|large language models]] transition from an experimental phase to a more mature product, serving a large user piece. During this process, its underlying LLM architecture typically evolves through several stages. This evolution is driven by changing needs, such as requirement for customization, [[Scalability]], and control over the data and model. At first, the deployment uses a third party API like Open AI's GPT. This requires minimal setup and maintenance, and it is ideal for [[Prototyping]] or for small-scale applications. However, as the user base grows, the reliance on external APIs may become limiting due to cost, latency, and rate limits. Moreover, as the application becomes more complex, a need for customizability also emerges. While this can be handled at first by [[Prompt Engineering]] and [[Vector Databases]], eventually you want to use a model fine-tuned for your domain. At this stage, you will want to use your own LLM-deployed base models
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=95)** like [[LLaMA]] or Mistral. By deploying on your own servers, you have more control over the deployment environment and the [[Data Security]]. You can also get better performance that is not limited by your API provider. However, a base model is going to be generic and will not perform well on domain-specific tasks. So you'll want to eventually fine-tune a model on a company-specific data to improve accuracy and reduce hallucinations. Getting to this stage will take significant time, technical expertise and compute resources, so it is best to anticipate this stage and plan ahead. The final stage where very few applications will reach is the large-scale specialization phase where you will need to develop a propriety LLM model from scratch to the unique needs of your application. This stage requires significant investment in computational resources and technical expertise. You will also have to spend time and effort to collect, curate, training data. However, you will have full control over your model's capability and can mitigate any biases, hallucinations, and misinformation that a pre-trained or fine-tuned LLM will have. Remember that at each stage has different benefits
>
> **[3:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=192)** and challenges from a cost effective, low maintenance, start, to a high investment, high return, custom-trained LLM. As the LLM developer, you need to take into consideration the growing complexity of the application, the increasing user base, and the strategic vision of the company to decide the best way to deploy a LLM-powered application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Scalability]] (1), [[Prototyping]] (1), [[Prompt Engineering]] (1), [[Vector Databases]] (1)
> **Env Vars:** llm (8), api (2), gpt (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Estimating costs of an LLM API](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=0)** - [Instructor] We have talked about the costs associated with deploying LLM applications. When you use an LLM API, you typically pay based on [[Tokens]]. OpenAI charges differently for input and output tokens. Input tokens are usually half as much as expensive as output tokens. Measuring the cost of API usage can be a challenge, but it's a task that'll help us understand and manage our costs better. Unlike deploying an LLM on a dedicated server where the cost is fixed, LLM API token costs can vary depending on the complexity of your prompts and how your users interact with your application. This variability can lead to unpredictable cost. In this challenge, you'll have to measure the cost of our API usage. Here are the steps you need to do. First, you will have to write a script that can call the [[OpenAI API]] and get the response. Next, we'll measure how many tokens were used in the input and output prompts. Finally, we can use OpenAI's token pricing to calculate the total cost of that prompt. As a bonus, you can see
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=96)** how using complex prompting techniques from few-shot prompting to chain-of-thought prompting increases the cost. As an AI developer, you must learn to monitor costs and balance longer, better performing prompts with higher costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[OpenAI API]] (1)
> **Env Vars:** api (5), llm (4)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Estimating costs of an LLM API](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=0)** - [Instructor] In this video, we will write a script to calculate the cost of using OpenAI's API. First, ensure that you have installed the OpenAI package. Next, you need to determine how much OpenAI charges for every input and output token. Here you can see the current costs. Remember that OpenAI charges differently for input and output [[Tokens]], so you need to specify their costs separately. Now, let's write a function to calculate the cost. It's a straightforward process. Our function takes the number of input tokens and output tokens as parameters. To calculate the total cost, we simply multiply the input tokens with the input token cost and sum that with the product of the output tokens and the output token cost. But how do we know how many tokens we used up? Well, thankfully, OpenAI sends us our token usage with each response. To get the number of input tokens, we can use the prompt tokens property from the usage property of the response.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=97)** To get the output tokens, we can use the completions token property. We can then call our calculate cost function to get the final cost. My total cost for this prompt and response pair was slightly more than 2 cents. This is an excellent method to calculate and keep track of cost for production application. What if you want to calculate cost without calling OpenAI? Perhaps to have a data set of question answer pairs, you want to know how much it would cost to generate it using OpenAI. To do that, you can use tiktoken package. First, you need to download the tiktoken package. To use tiktoken, we first [[Fetch]] the encoding for the model. Next, we can use the encode method to encode any text.
>
> **[2:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=170)** This will return a list of the total tokens, the length of which is the total number of tokens. We can then calculate the cost as before. Now, all you need to do is specify the module you are using and call the function. You can see that the cost is the same as the previous step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (11), [[Fetch]] (1)
> **Env Vars:** api (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=0)** - [Instructor] Welcome to the conclusion of LLMOps part two. Let's recap the key takeaways and practical tips from each chapter to ensure you are fully prepared for deploying and monitoring LLMs in production. In chapter one, we explored various deployment options of LLMs. Remember, choosing the right deployment strategy is crucial. Whether you're deploying via APIs or custom models, it is essential to ensure [[Scalability]] and flexibility. Fine tune models can be particularly beneficial for specific tasks, enhancing overall performance. Keeping these factors in mind when planning your deployment approach. Chapter two, focused on handling API limitations. Monitoring endpoint uptime is critical, always be prepared for potential down times. Implement strategies to mitigate latency issues to ensure a smooth [[User Experience (UX)|user experience]]. Understand the limitations of your choosing API and plan accordingly to avoid unexpected challenges. In chapter three, we went into advanced deployment architectures, leveraging [[Vector Databases]]. Leveraging vector databases can significantly improve retrieval and storage efficiency. Using agents and chains
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=95)** allow you to manage complex workflows within LLM deployments effectively. Design your architecture to support scalability and robustness. Ensuring your system can handle increased demands and complexities. Chapter four emphasized the importance of monitoring LLM performance. Setting up comprehensive performance monitoring systems from the start is vital. Regularly check for and address hallucinations to maintain model accuracy. Effective prompt management is also crucial for optimizing model outputs. These practices will help you maintain high performance and reliability in your deployed models. In chapter five, we went into advanced deployment techniques where we discussed strategies for effective prompt management and evaluating LLMs in production. Implement tools and techniques for your comprehensive performance monitoring. Continuously evaluate and refine your LLM systems for optimal performance. This ongoing process ensures your model remain efficient and effective in dynamic environments. Finally, we covered security and cost considerations. Balancing security measures with cost efficiency is vital. Implement robust security protocols
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=189)** to protect sensitive data and use cost effective strategies to manage resources without compromising performance. These measures will help you maintain a secure and economically viable deployment. As we conclude, remember that innovation and continuous learning are key to staying ahead in the rapidly evolving field of LLMs. Regularly read technical material and engage with the community to stay informed about the latest developments. For more insights and updates, subscribe to our newsletter@tinyml.[substack.com](https://substack.com). Keep learning, keep innovating, and best of luck with your LLM [[Microsoft Products|products]]. Thank you for participating in LLMOps part two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scalability]] (2), [[Vector Databases]] (2), [[User Experience (UX)|User experience]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** llm (4), api (2)
> **Cross-References:** we discussed (1), we covered (1)
> **URLs:** [substack.com](https://substack.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Archana Vaidheeswaran]]
- [[Soham Chatterjee]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/generative-ai-and-llmops-deploying-and-managing-llms-in-production-4465782)

## Skills Covered

- Large Language Model Operations (LLMOps)
- Generative AI
- System Deployment
- Artificial Intelligence (AI)

## Path Context

### In [[Manage Your LLMs with LLMOps]]
← [[LLMOps in Practice- A Deep Dive]] | **3 of 4** | [[LLM Foundations- Building Effective Applications for Enterprises]] →

## Appears In

- [[Manage Your LLMs with LLMOps]]

## Related Courses

_Courses sharing skills:_

- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI), Large Language Model Operations (LLMOps)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI), Large Language Model Operations (LLMOps)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)
- [[Getting Started with the Google Gemini API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)