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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20LLMOps-%20Deploying%20and%20Managing%20LLMs%20in%20Production.md)

![Advanced LLMOps: Deploying and Managing LLMs in Production](https://media.licdn.com/dms/image/v2/D560DAQE5kAgmoLJYYQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1720810307853?e=2147483647&amp;v=beta&amp;t=CvBJRoIg0xShnjuMcAJs_LferQ58-Uv1zMaY92DL7ok)

# Advanced LLMOps: Deploying and Managing LLMs in Production

> Cutting-edge artificial intelligence technologies are changing the world. But without proper deployment and management, your applications may never reach their full potential. Worse, they could simply fail or even cause critical errors in your systems. As more organizations are incorporating large language models into their workflows, there's an increasing need for professionals skilled in deployi

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production) | 1h 45m | Advanced | 170K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Deployment Options for LLMs]]** (4 videos)
- **[[#2. Handling API Limitations]]** (5 videos)
- **[[#3. Deployment Architecture]]** (5 videos)
- **[[#4. Monitoring LLM Performance]]** (2 videos)
- **[[#5. Advanced Deployment Techniques]]** (4 videos)
- **[[#6. Security and Cost Considerations]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Deploying LLMs for production
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=0)** - [Narrator] Let's address the elephant in the room.
>
> **[0:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=2)** Deploying LLMs isn't just a technical challenge, it's a strategic one.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=8)** Companies are pouring millions into AI, but without proper deployment and monitoring, they're essentially throwing money into a black hole.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=17)** This course is designed to pull back the curtain on what it really takes to bring these models to life in the real world.
>
> **[0:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=25)** We will explore LLM deployment options, handling API limitations and advanced deployment architectures including vector databases, agents and chains.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=37)** You will learn performance monitoring techniques, addressing hallucinations and prompt management.
>
> **[0:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-llms-for-production?u=76281980&t=44)** Practical challenges and solutions will solidify your understanding, and prepare you for the real world application.

> [!info]- Semantic Content
>
> **Env Vars:** llm (1), api (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Working in Google Colab
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=0)** - [Instructor] We hope we got you excited to start learning about building generative AI applications.
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=6)** In this course, you will have the opportunity to implement the concepts you are going to learn by doing exercises.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=15)** The exercises will be done in Google Colab.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=18)** Colab is a Jupyter Notebook-like development environment, where you can write, edit, and run code.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=27)** Colab notebooks run online, which means that you do not need to worry about installing Python or setting up a new development environment in your local machine.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=37)** Let's see how they work.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=40)** First, you will need to navigate to GitHub repository for this course.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=46)** You will see that the repository has folders for each chapter.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=50)** Inside each folder, you will find an iPython notebook.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=55)** You can see some code and documentation.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=58)** You will find some to-dos in each notebook.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=62)** These are the parts of the code that you will need to complete as part of the exercise.
>
> **[1:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=67)** To start a Colab notebook, click the Open in Colab button.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=72)** This will redirect you to Colab.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=75)** You can now run any cell to start the notebook.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=79)** This might take a few seconds, and you should see the disk and RAM usage once the notebook has started.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=87)** Don't worry if you get stuck, each exercise has an accompanying solution that you can find in the solution branch in the repo.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=98)** To get to the solution branch, click the branch dropdown button in the top-left, and choose the solution branch.
>
> **[1:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=109)** From here, you can either browse the solution in the GitHub repo, or you can open it in the notebook and run the code.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/working-in-google-colab?u=76281980&t=119)** Now that you know how Colab notebooks work, we hope you're excited to try some of the exercises and run some large language models.

> [!info]- Semantic Content
>
> **Tools:** colab (7), github (2), jupyter (1)
> **CLI Commands:** find (3), python (1)
> **UI Navigation:** navigate to (1), dropdown (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** ipython (1)
> **Env Vars:** ram (1)
> **Exercise Files:** github repo (1)


### 1. Deployment Options for LLMs

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of deployment options
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=0)** - [Instructor] Welcome to our course on LLM Deployment.
>
> **[0:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=3)** Today, we are diving into the exciting world of deploying LLM-powered applications.
>
> **[0:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=10)** As these models gain popularity across various industries, it's crucial to understand the different ways they can be integrated into business and technology processes.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=23)** We will explore three predominant deployment techniques that cater to various needs and skills.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=31)** Let's start with the first deployment technique: using LLM API providers.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=37)** This approach provides access to powerful large language models without the significant overhead of managing the infrastructure yourself.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=47)** It is particularly beneficial for startups and pilot projects due to its low initial cost.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=54)** Industry leaders like OpenAI, Cohere, and Anthropic offer these services with a pay-as-you-go pricing model, which is cost-effective based on your usage in terms of input and output tokens.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=70)** Continuing with LLM API providers, it is essential to understand when and why using these APIs is cost-effective.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=80)** They are most economical at low to moderate request volumes.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=87)** As your user growth increases, and so does the complexity, the cost follows.
>
> **[1:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=94)** We'll discuss how to perform a break-even analysis to compare the cost of API usage versus self-hosting.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=103)** Additionally, monitoring your usage and adjusting as needed can help optimize efficiency.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=111)** Now, let's talk about self-hosted LLMs.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=115)** This option gives you full control over the LLM environment and configurations, allowing enhanced performance for specific user demands.
>
> **[2:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=126)** We will also look at how to evaluate the need for moving from API to in-house deployment, and what strategic migration steps are necessary to minimize the disruption.
>
> **[2:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=140)** We'll conduct a cost-benefit analysis to see if self-hosting is a viable option for your organization.
>
> **[2:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=149)** Our third deployment technique involves crafting custom LLMs.
>
> **[2:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=154)** This method offers comprehensive control from data processing to model training, which is crucial for handling complex, specific user requests.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=166)** We will discuss the benefits of developing these models to overcome the limitation of pre-trained LLMs and how to manage the complexity and resources needed for end-to-end development.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=182)** Next, we will learn about the stages of building an LLM-powered application.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=188)** The initial stage of application development using LLM often involves creating simple applications with prompt-based wrappers.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=198)** These can quickly provide solutions by leveraging pre-built models and are easily deployed using API providers.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=207)** We'll also discuss integrating current personalized information to enhance user experiences, using vector databases and complex prompts for richer interactions.
>
> **[3:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=220)** As we advance the focus shifts to implementing more complex workflows, this involves using chains of LLM for diverse, automated tasks and interfacing with external APIs for tasks like publishing and social media management.
>
> **[4:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=240)** In the final stages, we will aim for an autonomous operation with careful oversight to maintain quality, assurance, and reliability.
>
> **[4:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=252)** As we wrap up this particular lesson, remember that the success of deploying these technologies hinges on thoughtful planning and execution across multiple stages.
>
> **[4:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=266)** Whether you choose API providers, self-hosting, or custom LLM development, each approach requires careful consideration of cost, scalability, and specific needs.
>
> **[4:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/overview-of-deployment-options?u=76281980&t=280)** Moving forward, keeping in mind the importance of continuous integration and maintenance to adapt and refine your LLM's solutions.

> [!info]- Semantic Content
>
> **Env Vars:** llm (10), api (6)
> **Code Keywords:** self (4), let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Deploying via APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=0)** - [Instructor] Welcome to this lesson on LLM API deployment.
>
> **[0:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=4)** Today we'll explore how API based LLM application development simplifies the setup process, allowing us to bypass traditional AI infrastructure.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=17)** We will also cover how automatic updates done by API providers get us access to the latest LLM models enhancing efficiency.
>
> **[0:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=29)** The biggest advantage of deploying LLMs via APIs is the ease of maintenance, which eliminates the need for a dedicated AI team while still getting access to cutting edge LLM technology.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=45)** Since you do not need a team of ML engineers and data scientists to maintain the model, it lowers the barrier to entry for utilizing cutting edge technology.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=57)** Since API pricing is based on token usage, the costs go down to zero when your application has no users.
>
> **[1:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=66)** For smaller developers and businesses, this is also a cheap way to build a prototype and test product market fit.
>
> **[1:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=77)** Moreover, APIs allow for easy scaling of services to handle increasing loads.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=84)** This means that the system can adapt seamlessly as the number of users grow.
>
> **[1:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=90)** And finally, APIs allow for real-time processing, which is critical for applications that require immediate feedback such as chatbots.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=103)** However, using APIs has some downsides, especially cost at scale and rate limitations.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=113)** While APIs may be cost effective for small applications with less loads, expenses can accumulate rapidly with high usage.
>
> **[2:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=124)** Very soon you will find yourself having to analyze and manage your API costs.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=130)** APIs also have rate limits, which can restrict the number of requests an app can make in a given time period.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=139)** If your app exceeds those limits, then your users will not receive any responses from the chatbot.
>
> **[2:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=147)** Later in this course, we will talk about budgeting, strategies, throughput issues, and how to handle peak loads.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=155)** Understanding these limitations helps in planning for effective API usage and contingency management.
>
> **[2:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=165)** Continuing with challenges, you will have to take into account your app's dependency on third party APIs, and the limitation that poses.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=174)** This can be a drawback for applications with domain specific knowledge, for which the LLM may not have been trained.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=183)** Moreover, since there is often limited visibility into the model's training data and its potential biases, it can be a concern for applications where responses with hallucinations or incorrect information can be harmful.
>
> **[3:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=202)** In a later chapter, we'll talk about the risk of biases and misinformation inherent in general LLMs, and we'll discuss methods to mitigate these issues.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=213)** Broadly, there are two kinds of LLM API providers, closed source LLM APIs and open source LLM APIs.
>
> **[3:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=223)** Open source APIs are freely available and modifiable, promoting transparency and community driven improvements.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=232)** Closed source APIs provided by companies like OpenAI offer propriety solutions with possibly better performance and security, but less transparency and flexibility.
>
> **[4:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=246)** This distinction is crucial as it influences the choice depending on the project's needs and goals.
>
> **[4:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=254)** As we start using API for rapid development and deployment, it is essential to understand their initial utility.
>
> **[4:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=263)** APIs allow for the quick setup of LLM functionalities without building the infrastructure from scratch, making them ideal for pilot projects and prototypes.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=275)** This approach provides immediate access to advanced LLM capabilities, enabling real-time processing and responsiveness that are vital for applications like chatbots or personalized customer interactions.
>
> **[4:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=291)** However, as the application scales, the limitations and costs associated with APIs become apparent prompting a reassessment of deployment strategies.
>
> **[5:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=303)** There is a shift towards, in-house LLM deployment to manage these challenges and achieve greater control over data and models.
>
> **[5:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=313)** This transition not only addresses the need for customization, but also reduces reliance on third party providers.
>
> **[5:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=322)** Enhancing data security and compliance.
>
> **[5:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=325)** Continuous innovation and adaption to new LLM technologies remain essential, ensuring that the solutions remain cutting edge and tailored to specific enterprise needs.
>
> **[5:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/deploying-via-apis?u=76281980&t=338)** We will learn about local LLM deployment in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** llm (13), api (8)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** finally, (1), require (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** setup (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using fine-tuned models for deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=0)** - [Instructor] Welcome to this lesson on deploying fine-tuned LLMs.
>
> **[0:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=5)** Today we will focus on the advantages of tailoring LLMs to your unique requirements.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=12)** Fine tuning models enhances the performance of the model for your specific domain.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=19)** Deploying the LLM in-house also ensures that all data remains within your control, addressing privacy and security concerns with sending data to an external API.
>
> **[0:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=33)** You are also not constrained by the rate limits typically imposed by API providers, allowing your application to scale up and down with usage.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=45)** And finally, although the initial setup might be expensive, in the long term, it could be cost effective, since you are not billed by tokens, you are only paying for hosting the LLM and not for how much you use it.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=63)** Transitioning our discussion to the challenges, let's examine the realities of in-house deployment.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=72)** The cost and complexity of setting up the necessary infrastructure can be daunting.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=80)** High performance computational resources, which will be necessary come with a hefty price tag, not to mention the specialized team you will need to employ for the LLM's upkeep and retraining.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=96)** Finally, getting an LLM running in-house can be time-consuming.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=102)** From setting up the infrastructure to training and fine tuning the model.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=108)** LLM infrastructure can be expensive to provision since there's a shortage of high-end GPUs.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=115)** In the later chapter, we will talk about the investment in time and resources needed to bring an LLM online within your organization and how to navigate these waters smoothly.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=128)** Next, we will compare two types of LLM deployment, deploying a base LLM versus a fine-tuned model.
>
> **[2:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=137)** Deploying a base LLM is easy since you are not making much changes to the model.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=142)** However, while it is simpler than fine tuning, the model's performance may not be optimal or domain specific for applications or data sets.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=155)** On the other hand, deploying a fine-tuned LLM involves adjusting the model on a specific data set to enhance its performance for particular tasks or domains.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=168)** This can significantly improve results, but requires additional resources, data, and expertise.
>
> **[2:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=177)** Let's delve a little deeper into what greater control and customization really mean when you decide to deploy an LLM in-house.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=189)** The biggest benefit of an in-house training deployment is data privacy and security.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=195)** You can also use customization to your model for specific requirements of your domains.
>
> **[3:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=204)** Fine tuning enables your businesses to steer the LLM's development precisely where it needs to go.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=212)** However, we need to acknowledge some of the hurdles of an in-house deployment.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=218)** There is substantial financial and human capital required to make self-hosting a reality.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=226)** As an AI engineer, you need to consider the balance of long-term benefits against the short-term challenges.
>
> **[3:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=234)** You also need to do strategic planning for allocating resources effectively and attracting the right talent.
>
> **[4:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=242)** We will discuss this in more detail in a later chapter.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=247)** Finally, as an AI engineer, you need to be prepared to learn and integrate emerging technologies that promise to simplify deployment while deepening the level of customization.
>
> **[4:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=260)** I want to wrap up this lesson by inspiring you to stay agile in a fast-paced technological landscape.
>
> **[4:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/using-fine-tuned-models-for-deployment?u=76281980&t=267)** Remember that personalization, ease of deployment and model customization will define the next generation of LLM applications.

> [!info]- Semantic Content
>
> **Env Vars:** llm (13), api (2)
> **Code Keywords:** finally, (3), let (2), self (1)
> **Prerequisites:** setup (1), required to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Custom models: Building and deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=0)** - In the last two videos, you learned about the advantages and disadvantages of LLM APIs and deploying an LLM on your own servers.
>
> **[0:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=11)** The final deployment option is to train your own LLM from scratch and deploy it.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=17)** This approach differs significantly from using pre-trained models or APIs and has its unique set of advantages and disadvantages.
>
> **[0:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=28)** The biggest advantage is that you will have an LLM that is customized to your specific needs.
>
> **[0:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=35)** Training from scratch allows you to tailor the model to specific domains or applications, potentially achieving better performance for niche or specialized tasks.
>
> **[0:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=47)** For instance, the Bloomberg GPT showed that a custom-trained LLM on financial data performs better than ChatGPT.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=57)** You can also have complete control over the data used for training, which can be crucial for applications where misinformation is harmful or there are privacy concerns.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=72)** And finally, developing a proprietary model can give your company a competitive advantage over others.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=81)** Despite the benefits, training your own LLM comes with significant challenges.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=88)** Training a custom LLM requires substantial, computational power and expert knowledge.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=95)** You also need skilled ML engineers and data scientists to train an LLM.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=101)** This can be expensive to hire.
>
> **[1:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=104)** Moreover, training a model from scratch can take considerable amount of time from data collection and preparation to actual training and optimization, it can take six months to a year to train an LLM.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=119)** The data itself can be a bottleneck.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=122)** A vast, diverse and curated dataset is necessary for training an effective LLM, acquiring such a dataset can be challenging.
>
> **[2:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=132)** Let's discuss when it makes sense to invest in training a custom LLM.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=138)** This decision often hinges on the need for a highly specialized model in domains where pre-trained models fall short or where unique data sets can't be effectively leveraged by general models.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=155)** If you have access to unique private data sets that cannot be effectively leveraged by pre-trained models, then it makes sense to train a custom model.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=167)** Training from scratch is also necessary for languages or dialects that are underrepresented or not included in the pre-trained models.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=178)** BloombergGPT is a finance-focused custom LLM that was trained using Bloomberg.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=185)** It's performance on financial data is better than GPT.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=189)** Another example of a custom LLM is Met-PalM2 from Google Research.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=196)** It was designed for the healthcare sector and demonstrates how custom LMS can be safer and perform better on domain specific tasks.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=207)** In summary, deploying an LLM trained from scratch will give your application a high level of customization.
>
> **[3:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=216)** But remember, it'll require significant expertise and time.
>
> **[3:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/custom-models-building-and-deployment?u=76281980&t=221)** In the next chapter, we will learn about the intricacies of deploying API-powered, LLM applications.

> [!info]- Semantic Content
>
> **Env Vars:** llm (15), gpt (2), lms (1), api (1)
> **Code Keywords:** finally, (1), let (1), private (1), require (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)


### 2. Handling API Limitations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding API limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=0)** - [Instructor] In the last chapter, you learned about the different deployment strategies for Generative AI Applications, starting from APIs to self-hosted LLMs.
>
> **[0:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=11)** Since APIs are the easiest and cheapest way to get started, you will often find yourself building Proof of Concept apps and simple products with them.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=23)** This is why it is important to be aware of LLM API Limitations and how you can navigate them.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=31)** In this lesson, we will learn about some of the common limitations with APIs.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=37)** In the next few lessons, we will delve deeper into some of the limitations and learn mitigation techniques.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=46)** One of the biggest challenges with LLM APIs is the Rate Limits and the Usage Quotas.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=53)** Deploying LLM is very compute intensive, and most LLMs require multiple GPUs to run.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=62)** This is why LLM APIs set rate limits and usage quotas to balance server loads and prevent misuse.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=72)** Not accounting for these, could disrupt your apps functionality.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=79)** Just like APIs, LLM APIs are prone to errors, drop requests, and timeouts.
>
> **[1:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=87)** Most LLM API providers provide no SLA guaranteeing performance.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=93)** Even if an API is available, you may see delays in performance degradation during peak hours.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=102)** Manning chain keys effectively is crucial for maintaining a good user experience and application stability.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=112)** Implementing error handling protocols and establishing fallback procedures are essential to mitigate these risks.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=122)** Latency and throughput is another risk with LLM APIs.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=128)** Latency is the time it takes for an LLM API to process a request and return a response.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=136)** An increase in latency can be critical of facing applications where immediate feedback is expected, such as chatbots or real-time content generation tools.
>
> **[2:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=149)** Throughput is the number of requests an API can handle simultaneously.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=155)** High demand on an LLM API can lead to drop in throughput, especially during peak usage times.
>
> **[2:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=164)** This can limit the scalability of your applications.
>
> **[2:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=169)** Unfortunately, you depend on the LLM API provider to maintain a reasonable latency and throughput.
>
> **[2:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=177)** However, you can implement strategies such as caching frequent requests, and distributing load across multiple APIs to reduce its impact.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=189)** Finally, LLM API providers are responsible for training and updating their models.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=196)** Data collection must stop at some point to allow for training.
>
> **[3:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=201)** For instance, GPT-3.5's data ends in September, 2021 and GPT-4's in January, 2022.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=212)** This means they might not provide the latest information.
>
> **[3:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=216)** More a provider does not retrain their model frequently with the latest techniques, then the performance of other API providers become better.
>
> **[3:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=227)** To prevent vendor lock-in and using an inferior product, your system should be able to switch API providers.
>
> **[3:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=237)** These are some of the LLM API challenges and limitations.
>
> **[4:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=242)** The biggest limitations are handling performance degradation in the API, like an increase in latency or the endpoint.
>
> **[4:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/understanding-api-limitations?u=76281980&t=251)** In the next two lessons, we will learn about why something like this might happen and how we can deal with it.

> [!info]- Semantic Content
>
> **Env Vars:** llm (12), api (12), gpt (2), sla (1)
> **Code Keywords:** self (1), require (1), finally, (1), switch (1)
> **Analogies:** such as (2), just like (1), for instance (1)
> **Cross-References:** in the next (2), in the last (1)
> **CLI Commands:** find (1)
> **Versions:** 3.5 (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Strategies to handle endpoint uptime limitations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed LLM API Challenges.
>
> **[0:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=5)** While building apps with LLM APIs may be easy, you will have to still account for API disruption.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=14)** In this lesson, we will learn how to deal with one of those challenges, the API uptime while making sure your app still functions.
>
> **[0:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=25)** Uptime is the amount of time an API is available for processing requests.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=31)** Uptime is particularly important for realtime application like chat bots where a delay can affect customer experience.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=40)** LLM API providers have an incentive to maintain high uptime to keep their services reliable for their users.
>
> **[0:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=49)** However, the compute intensive nature of deploying LLMs make it difficult to have consistent uptime.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=57)** In this lesson, we will learn about some of the techniques that you can use to ensure that your product doesn't stop working, even if the LLM endpoint you are using is down.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=70)** Continuously monitoring the health and performance of LLM API endpoints is critical when building real-time application.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=81)** Set up alerts to notify your team of any issues or performance degradations, allowing for swift action to resolve problems before they affect users.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=93)** The next step is to implement backup API endpoints in case the primary endpoint goes down.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=101)** This could be a different model from the same API provider, for instance, shifting from GPT-4 to GPT-3.5, or a different API provider as well.
>
> **[1:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=114)** The switch to the backup endpoint needs to happen automatically to minimize service disruption.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=122)** We can use caching mechanisms to store responses from the LLM API for frequently asked queries.
>
> **[2:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=132)** Caching can also reduce the dependency on the API for every request, thereby elevating pressure on the API during peak times and providing a fallback when the API is temporarily unavailable.
>
> **[2:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=150)** Graceful degradation is when you design your application to handle API down times gracefully instead of falling.
>
> **[2:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=159)** In cases where the LLM API is unavailable, the application should continue to operate in a degraded mode, perhaps offering limited functionalities.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=172)** In a later chapter, we'll talk about local LLM deployments as well.
>
> **[2:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=177)** You can combine the use of LLM APIs with a simpler local model to handle basic requests, reserving the LLM API for more complex queries.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=188)** This hybrid approach can ensure that your application remains functioning, even if the LLM API is down and also reduce costs.
>
> **[3:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=201)** Finally, LLM API providers may quietly update their endpoint or the model.
>
> **[3:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=209)** Performing regular API integrations tests to ensure compatibility with the API updates and to identify any potential issues that might lead to downtime can prevent sudden downtimes.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=226)** In this lesson, we talked about some techniques to deal with LLM API downtime.
>
> **[3:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-to-handle-endpoint-uptime-limitations?u=76281980&t=233)** In the next lesson, we will learn how to deal with another issue, API latency.

> [!info]- Semantic Content
>
> **Env Vars:** api (22), llm (13), gpt (2)
> **Cross-References:** in the last (1), we discussed (1), we talked about (1), in the next (1)
> **Code Keywords:** switch (1), continue (1), finally, (1)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)

#### Mitigating latency issues in LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=0)** - [Instructor] In the last lesson, we learned how to deal with endpoint uptime issues.
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=6)** In this lesson, we will learn how to deal with latency in your LLM API calls.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=13)** Latency is the delay between sending a request to the LLM API and receiving the result.
>
> **[0:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=20)** Both latency and uptime issues affect the user experience and the perceived reliability of your LLM generative AI product.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=30)** A slow response time or high latency can make it seem as if your app is not working, similar to actual downtime.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=40)** This makes latency a critical metric for realtime applications like chatbots.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=48)** It is essential to differentiate between latency and uptime.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=53)** While latency focuses on the speed of your app, uptime is about ensuring continuous availability.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=62)** Understanding this distinction is key as solving latency does not necessarily solve uptime issues and vice versa.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=72)** For instance, an API might respond quickly when available, but suffer frequent outages.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=83)** This will affect users to rely on your product's service to be continuously available.
>
> **[1:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=89)** High uptime is also crucial for business clients, so that their operations don't get affected.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=97)** On the other hand, your API might have a very high uptime, but be slow to respond.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=106)** We will look at strategies to deal with this now.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=111)** LLMs are auto regressive models.
>
> **[1:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=114)** For every token the model generates, we need to rerun the whole model.
>
> **[2:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=120)** This means even though some text has been generated, it might take tens of seconds to generate the whole response.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=128)** If you wait for the whole response to be generated before showing it to your end users, they may have to wait for a while.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=136)** Thus, increasing the perceived latency.
>
> **[2:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=140)** Streaming the AI's response as it's being generated is an easy way to overcome this.
>
> **[2:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=148)** Doing this means that your users can see parts of the response quickly, and will not have to wait for the whole response to be generated.
>
> **[2:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=159)** Secondly, you can consider using API providers that have lower latencies.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=166)** For instance, Groq is an LLM API provider that has developed custom hardware to reduce latency and increased throughput.
>
> **[2:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=176)** For some models, you can expect responses to be generated with a throughput of 400 tokens per second.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=185)** Caching is another technique for reducing latency.
>
> **[3:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=189)** It involves storing common queries and their responses.
>
> **[3:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=195)** If a user asks a question with a cached answer, you can return the cached answer instead of calling the API.
>
> **[3:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=205)** This can significantly reduce the number of requests that we need to send to the LLM API, thereby, decreasing latency.
>
> **[3:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=215)** Finally, you can consider breaking up long tasks into smaller and more specific prompts.
>
> **[3:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=222)** You can also send each of these prompts to different API providers or different model endpoints.
>
> **[3:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=229)** In this chapter, you learned about LLM APIs and how to deal with API limitations like latency and uptime.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=239)** To summarize, the main techniques to handle LLM latency in your application is to cache common queries, break down large prompts into smaller tasks, and choose APIs that have faster response time and allow streaming responses.
>
> **[4:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/mitigating-latency-issues-in-llm-deployment?u=76281980&t=258)** In the next chapter, we will learn about LLM deployment architectures.

> [!info]- Semantic Content
>
> **Env Vars:** api (10), llm (8)
> **Code Keywords:** while. (1), this. (1), finally, (1)
> **Definitions:** is an  (2), means that (1)
> **Analogies:** for instance (2), similar to (1)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Challenge: API limitations for LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=0)** (catchy music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=6)** - [Instructor] In this chapter, you learned about some of the limitations of deploying LLMs using APIs.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=13)** We also learned about how to overcome some of these limitations.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=17)** One of the challenges we talked about was API latency and throughput.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=23)** A high latency can make your application seem slow.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=27)** A low throughput will stop you from scaling your application to a larger user base.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=34)** One of the solutions to this problem is to use a backup LLM API, and APIs that are faster and have a higher throughput.
>
> **[0:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=44)** Groq is one such API.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=46)** In this challenge, we'll compare Groq's API throughput with OpenAI's API.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=53)** Here are the steps that you need to do.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=56)** First, you need to create an account on Groq and create an API token.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=62)** Next, you will write a Python code to query their API.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=68)** After that, we will measure the number of tokens that Groq processed and the time it took to send us the response.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=76)** We can calculate Groq's throughput by dividing these total tokens with the processing time.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=83)** Finally, we will query OpenAI's API and measure its throughput.
>
> **[1:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=89)** You should find OpenAI's throughput to be significantly lower than Groq's throughput.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=96)** This makes Groq's API perfect for realtime application like chatbots, or content generation where users expect quick responses.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=108)** As a bonus, Groq's platform supports many models, so you can query all of them and see each of their throughputs.
>
> **[1:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-api-limitations-for-llm-deployment?u=76281980&t=118)** You can view the solution to this challenge in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), llm (1)
> **CLI Commands:** make (1), python (1), find (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (catchy music) (1)

#### Solution: API limitations for LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=0)** - [Instructor] In this video, we will write a script to compare the throughput of Groq's API with OpenAI's API.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=15)** Let's break it down step by step.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=19)** First, ensure that the required libraries, Groq and OpenAI are installed.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=27)** These libraries are used to interact with different language model APIs.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=34)** Let's start by measuring Groq's throughput.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=38)** To do that, we import Groq from Groq, and set up groq.client using our Groq API key.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=48)** You can get the API key from console.[groq.com](https://groq.com).
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=53)** Now, let's write a function to generate text that takes the model name and prompt as parameters and calls the Groq API.
>
> **[1:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=73)** The way to generate a chat completion using Groq is very similar to OpenAI.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=79)** We need to call the create function from chart completion.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=84)** To this function, we pass the messages and the model.
>
> **[1:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=90)** Next, let's define a list of models and a prompt.
>
> **[1:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=95)** We can loop through each model, generating text using the generate text function.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=103)** For each model, we calculate the throughput, which is the number of tokens processed per unit of time.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=112)** You can see Groq's throughput can get as high as 900 tokens per second.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=119)** Now, let's switch to calculating openAI's throughput for the GPT-4 turbo model.
>
> **[2:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=126)** You can see that the throughput for the GPT-4 is about 22 tokens per second, which is far lower than Groq's throughput.
>
> **[2:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-api-limitations-for-llm-deployment?u=76281980&t=137)** This information is valuable for understanding the limitations and capabilities of various LLM model APIs and can help you choose which API to use for your application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), pass (1), switch (1)
> **Env Vars:** api (6), gpt (2), llm (1)
> **Code Identifiers:** openai (1)
> **URLs:** [groq.com](https://groq.com) (1)
> **UI Navigation:** switch to (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Deployment Architecture

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Vector databases for LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=0)** - [Instructor] Welcome to our chapter on vector databases for LLM deployment.
>
> **[0:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=5)** Today, we will dive into how vector databases are transforming the deployment of large language models.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=13)** In the last chapters, you learned about the different ways to deploy LLMs and some challenges in deploying LLM-powered applications.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=22)** In this chapter, we will learn about some of the common architectures to deploy LLMs to production.
>
> **[0:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=29)** We will also see how we can use vector databases to build a retrieval augmented generation architecture to retrieve relevant information and pass this as context to the LLM venture rating text.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=45)** Imagine you are building a chatbot.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=48)** We begin with a basic structure.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=50)** Deploying the LLM on servers like Triton or FastAPI, setting up a user-friendly frontend, and ensuring our backend handles all essential functions like logging and prompt engineering.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=64)** But as we lay this foundation, think about its limitation.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=69)** How does using outdated data affect our chatbots performance?
>
> **[1:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=73)** Let's discuss.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=76)** With this simple architecture, our user can ask our chatbot to generate articles on some topics.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=83)** This request is sent to the LLM and the response from the LLM is shown to the user.
>
> **[1:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=89)** However, there are some limitations.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=93)** Firstly, our LLM may be trained on outdated data, which means that it' will not be able to write content on current trends.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=103)** This can be fixed by fine tuning the model with the latest data.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=108)** However, fine tuning takes time and the model will always lag behind.
>
> **[1:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=114)** Secondly, we are limiting our architecture to only generating text when it could potentially do other tasks like publishing the content once the user approves it.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=127)** Finally, with this architecture, we rely on human evaluators to approve the generated content.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=136)** Instead, we could automate the process of evaluating the generated content for factual errors using another LLM.
>
> **[2:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=145)** In this chapter, we will look at the different architectures to solve some of these issues, and in this video, we will see how we can use vector databases to build a retrieval augmented generation architecture to retrieve relevant content and pass that as context to the LLM while it is generating text.
>
> **[2:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=168)** Unlike traditional databases, vector databases store vectors instead of files or tabular data.
>
> **[2:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=176)** Each vector in the database corresponds to some data, usually in the form of text.
>
> **[3:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=181)** The vector is created by an embedding model and is compressed representation of the data.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=188)** Similarly, data will have similar embeddings, and we can use a vector database to perform similarity searches.
>
> **[3:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=197)** So how can we leverage vector databases to ensure our chatbot has recent data?
>
> **[3:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=204)** Think of a vector database as a dynamic library.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=207)** Continuously updating with the latest books.
>
> **[3:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=211)** Every new piece of data is transformed into a vector using an embedding model and then stored.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=218)** When a query comes in, it's also converted into a vector.
>
> **[3:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=223)** The database then finds the most similar vectors in the vector database, just like how we search for relevant books in our library.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=232)** We can then pass this data as context to our LLM to generator response.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=238)** This is known as the RAG architecture.
>
> **[4:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=241)** Let's apply what we have learned to a real world scenario.
>
> **[4:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=246)** Summarizing the latest Golden Globes event.
>
> **[4:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=250)** Our vector database continuously ingest news articles and other relevant information.
>
> **[4:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=256)** When someone asks our chatbot about the Golden Globes, it doesn't just guess the answer.
>
> **[4:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=263)** Instead, it retrieves the latest articles from the database, ensuring the summaries accurate and up-to-date.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=271)** For each query, our backend server first fetches those relevant articles from our vector database.
>
> **[4:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=277)** These are then appended to a prompt test context and sent to the LLM.
>
> **[4:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=283)** The vector database now acts as our knowledge library, which our LLM can leverage to generate domain specific and recent content.
>
> **[4:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/vector-databases-for-llm-deployment?u=76281980&t=294)** In the next lesson, we will see how we can use LLMs to generate text and perform tasks.

> [!info]- Semantic Content
>
> **Env Vars:** llm (12), rag (1)
> **Code Keywords:** pass (3), let (2), finally, (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** means that (1), known as (1)
> **Analogies:** imagine (1), just like (1)
> **Speakers:** - [instructor] (1)

#### Agents in LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=0)** - In the last video, you saw how we can use vector databases to build a rag architecture.
>
> **[0:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=7)** In this lesson, we will see how we can extend our LLM apps functionalities by making it do tasks for us autonomously.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=18)** LLM applications that can use tools to do tasks are called autonomous agents or agents for short.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=27)** Agents have four main components.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=30)** First, there is the planning module that plans and coordinates the tasks that the LLM needs to do and the order in which to do them.
>
> **[0:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=39)** Next, we need a module to store the task related data that the model needs.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=45)** This can be a vector database.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=48)** For short-term memory, the data may be stored in the prompt itself.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=53)** Tools are how LLMs perform these tasks.
>
> **[0:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=57)** Tools could be third party APIs that the LLM can call or workflows that the LLM can execute.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=64)** Finally, we need an LLM core that is the brain of the agent.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=69)** You can use an LLMAPI or have a locally deployed LLM model.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=76)** Remember that we are building a content generation chatbot.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=81)** To improve our bot, we could have the LLM publish the generated article and create a few summaries to share on social media sites.
>
> **[1:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=91)** So what would the architecture for something like this look like?
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=96)** Well, first, we need to store the generated content.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=100)** In this case, we can store it in a traditional SQL database.
>
> **[1:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=105)** To generate the summaries, we can then pass the whole generated article as context to the LLM in the prompt.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=113)** Our LLM app will need access to tools to publish the generated content to different social media sites.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=122)** These tools will be APIs where we send a request to a post our article.
>
> **[2:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=129)** Finally, we need a planning module.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=131)** Our planning module can be embedded into our original backend server.
>
> **[2:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=136)** Its job will be to call the LLM model to create summaries to share on each social media channel.
>
> **[2:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=144)** It orchestrates the writing process, plans the distribution of the generated content, and calls the APIs to publish the post to different social media sites.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=157)** While this is a simple example, LLM agents can perform various tasks.
>
> **[2:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=163)** Multiple LLM agents can also work together to run complex workflows and have even been shown to build complete projects and run companies.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=175)** The agent architecture we showed in this video allows LLMs to perform tasks that save time and resources for our chatbot users.
>
> **[3:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=188)** However, our app still needs improvement.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=191)** For instance, our app currently does not have a validation flow to check whether the generated content is factual.
>
> **[3:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/agents-in-llm-deployment?u=76281980&t=199)** In the next video, we'll see how we can leverage multiple LLMS interconnected as chains and build coordinated workflows.

> [!info]- Semantic Content
>
> **Env Vars:** llm (13), llmapi (1), sql (1), llms (1)
> **Code Keywords:** module (4), finally, (2), case, (1), pass (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)

#### Chains in LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=0)** - [Instructor] We have evolved from basic chatbot tasks to a sophisticated semi-autonomous chatbot capable of generating content.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=9)** You saw how we can use an autonomous LLM agent to interact with tools and perform tasks.
>
> **[0:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=17)** However, one final piece must be included in our content generation chatbot app to make it completely autonomous.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=26)** We have encountered challenges such as reliance on human intervention for topic discovery and quality control and errors in content generation.
>
> **[0:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=37)** What if, instead of having a human do this prompting, we have another LLM scour the internet for new topics to write on and pass those results onto our content generation LLM and have another LLM evaluate the generated content and suggest changes.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=58)** This kind of architecture is where the output of an LLM is fed into another LLM as input and is called an LLM chain.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=68)** By the end of this lesson, you'll fully understand the structure of LLM chains, how they can create fully autonomous systems and the common pitfalls in their deployment.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=80)** Let us look at four main components of building LLM chains.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=85)** The first step to building LLM chains is to break down a complex task into simpler manageable subtasks.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=93)** Each subtask is handled by a specific model optimized for that operation.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=100)** Secondly, once you have broken down your tasks into smaller tasks, you can have a specialized LLM for those subtasks.
>
> **[1:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=110)** In our content generation application, we have three main tasks, finding topics, generating content and reviewing the generated content.
>
> **[2:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=121)** Breaking down complex tasks that require multiple processing steps enhances the performance since each task is handled by a specialized model.
>
> **[2:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=133)** Thirdly, models in a chain are usually arranged in a sequence.
>
> **[2:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=138)** The output from the first model is passed on to the second model as an input and this process continues down the chain.
>
> **[2:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=146)** Each model processes the incoming data, adding value or transforming it as we go on to the next stage.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=155)** Chains can often go wrong, so it's essential to have a feedback to adjust or reprocess each stage.
>
> **[2:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=165)** In our case, we have a final LLM that reviews the generated content and can trigger the content generation LLM with suggestions.
>
> **[2:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=174)** This will enhance the accuracy of the final output.
>
> **[2:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=179)** Let us look at some of the advantages of LLM chains.
>
> **[3:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=184)** Specialization allows LLMs to excel in their respective tasks, thereby increasing the overall effectiveness of our applications.
>
> **[3:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=194)** The modular nature of LLM chains allow for easy introduction of new models, or modifications of existing ones to tackle additional requirements or optimize outcome.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=208)** Finally, each node in the chain can be scaled independently based on demand.
>
> **[3:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=213)** This helps us optimize resource utilization and reduce operational cost.
>
> **[3:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=220)** This scalability is essential for managing varying load and is particularly advantageous in systems where different tasks have different resource requirements.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=232)** However, LLM chains have many engineering challenges.
>
> **[3:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=237)** One of the biggest challenges is ensuring smooth data transition between the models while maintaining data integrity.
>
> **[4:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=246)** Proper data management is crucial to prevent the data loss and ensure that each model receives the correct information needed for processing.
>
> **[4:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=257)** Errors can cascade through the chain with each model potentially amplifying an initial mistake.
>
> **[4:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=265)** Robust testing and evaluations are essential to catch and correct errors early.
>
> **[4:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=271)** Finally, latency is a big concern in LLM chains.
>
> **[4:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=275)** Each additional model in the chain can add to the total processing time impacting performance.
>
> **[4:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=283)** This is why LLM chains should be kept short in real-time application.
>
> **[4:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=289)** However, latency is not a concern for offline or batch processing applications like our content generation app.
>
> **[4:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=298)** Now you know about how to build LLM systems.
>
> **[5:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/chains-in-llm-deployment?u=76281980&t=302)** In the next chapter, we will learn how to evaluate LLM applications to address hallucination and to monitor performance.

> [!info]- Semantic Content
>
> **Env Vars:** llm (20)
> **Code Keywords:** let (2), finally, (2), if, (1), pass (1), require (1)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Deploy a simple RAG application using an API
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=0)** (bright uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=6)** - [Instructor] In this lesson, we discussed RAG applications.
>
> **[0:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=10)** In a typical RAG application, you store contextual data in a vector database and use that as a knowledge piece for the LLM to answer user queries.
>
> **[0:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=21)** For this challenge, we will build an RAG application to ask questions on a webpage.
>
> **[0:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=28)** We will use Graphlit to build this applications since they provide a hosted solution to ingest data and build chatbots on top of it.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=40)** To complete this challenge, you will have to do the following steps.
>
> **[0:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=44)** First, you will need to create a Graphlit account and fetch your API tokens.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=50)** Next, you need to ingest a webpage.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=54)** Graphlit will chunk the ingested webpage text and store it onto a vector database.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=63)** After that, you will need to create an LLM specification.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=68)** This tells Graphlit the configurations you want to use when calling the LLM API.
>
> **[1:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=75)** Since a RAG application is useful for having a conversation, we need to find a way to keep track of these messages that our end-user sent.
>
> **[1:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=88)** This is handled by Graphlit by creating a conversation object.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=93)** Finally, we can prompt the conversation with the user input.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=98)** When we do this, Graphlit searches the vector database for relevant context.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=103)** It appends all the relevant context to the user's prompt before querying the LLM.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=111)** Now your LLM has information it needs to answer the user's question.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-deploy-a-simple-rag-application-using-an-api?u=76281980&t=117)** You can view the solution to this challenge in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5), rag (4), api (2)
> **Code Keywords:** finally, (1), this, (1)
> **Cross-References:** we discussed (1), in the next (1)
> **CLI Commands:** find (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright uptempo music) (1)

#### Solution: Deploying a simple RAG application using an API
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=6)** - [Instructor] In this video, we will see how to use the Graphlit API for creating a RAG system.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=12)** We will walk through the code step by step and explore how to interact with the Graphlit API to ingest data into a vector database, and then use an AI to have a conversation with the data.
>
> **[0:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=25)** Let's start by looking at the code.
>
> **[0:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=28)** First, we will install the Graphlit package and import the necessary modules, including Graphlit from Graphlit package.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=38)** Next, we will initialize a graphlit instance by providing the required credentials such as organization_id, environment_id, and jwt_secret.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=50)** You can get this data from your Graphlit portal.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=56)** Now we can start writing functions for each task.
>
> **[1:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=60)** The create_feed function creates a data ingestion feed in Graphlit, it takes the graphlit instance and a URI as parameters.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=70)** It creates a FeedInput object with the provided URI and other properties, and then uses the Graphlit client create_feed method to create the feed.
>
> **[1:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=86)** If successful, it returns the feed_id, otherwise it returns the error message.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=93)** Now we have to create specification function, which creates an LLM specification in Graphlit.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=102)** A specification is a set of LLM configurations that define the behavior of the LLM in our RAG application.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=112)** We define a specification input object with various properties such as name, type, service type, search type, and model properties like temperature, probability, and completion token limit.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=131)** (keyboard tapping)
>
> **[2:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=143)** (keyboard continues) The function returns the specification ID if successful.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=155)** A RAG application also needs to keep track of user conversations.
>
> **[2:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=160)** We can use the conversation input object with the name and the specification reference to create a conversation.
>
> **[2:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=169)** This function returns the conversation ID if a conversation is created successfully or the error message if an exception occurs.
>
> **[3:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=180)** The last function we need to write is the prompt conversion conversation function that is used to start the conversation with a prompt.
>
> **[3:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=191)** It takes the graphlit instance, the conversation ID, and the prompt as parameters.
>
> **[3:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=199)** (keyboard tapping)
>
> **[3:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=211)** Then we use the prompt conversation method to send the prompt to the conversation and retrieve the response.
>
> **[3:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=220)** If successful, it returns the response message and citations.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=226)** Otherwise, it returns none and a error message.
>
> **[3:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=231)** Finally, let's see how to combine all of this together.
>
> **[3:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=235)** First, we define a URI that we want to add to the vector database and create a feed using create_feed function.
>
> **[4:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=245)** Next, we create a specification using create_specification and a conversation using create_conversation.
>
> **[4:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=253)** Make sure to keep track of the different IDs at each step.
>
> **[4:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=258)** Finally, we can prompt the conversation with a question using prompt_conversation.
>
> **[4:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-deploying-a-simple-rag-application-using-an-api?u=76281980&t=264)** The response message is then displayed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), type, (3), let (2), finally, (2)
> **Env Vars:** rag (3), uri (3), llm (3), api (2)
> **Code Identifiers:** create_feed (3), organization_id (1), environment_id (1), jwt_secret (1), feed_id (1)
> **Documentation:** specification (7)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)


### 4. Monitoring LLM Performance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to LLM performance monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=0)** - [Instructor] In the last chapter, we learned about generative AI deployment architectures and the complexities of integrating LLMs into production applications.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=12)** However, deploying these models is only the first step.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=16)** Ensuring that they operate effectively and safely in production is an ongoing challenge.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=24)** This is where LLM monitoring comes into play.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=27)** Monitoring these systems is not just about tracking their performance, it's about ensuring that they behave as expected, and mitigate any potential risk they might introduce.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=41)** Even though LLMs are very capable models, deploying them to production comes with inherent risks and imperfections.
>
> **[0:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=51)** They are susceptible to several issues like hallucination, prompt injection, and other security challenges that can affect their functionality and user experience.
>
> **[1:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=64)** In this lesson, we will learn about monitoring LLM apps in production and how to address challenges like hallucination.
>
> **[1:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=74)** Let's talk about the key components that we should monitor.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=79)** Performance metric indicators like latency, response time, and throughput, give insights into operational health of our generative AI application.
>
> **[1:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=91)** Since LLMs are very compute-intensive, any changes in these metrics might indicate underlying issues that need immediate attention.
>
> **[1:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=103)** As your LLM application grows and serves more users, you will find changes in the input data being fed to the model.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=113)** Since the input data changes, so does the output from the model.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=119)** This phenomena is called model drift, resulting in models' predictions, deviating from the expected outcomes.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=128)** Regular monitoring for model drift is essential to maintain accuracy and relevancy of generative AI application.
>
> **[2:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=137)** Next, you should monitor how users interact with the LLM.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=142)** This can reveal potential attacks or misusing, such as attempting to trick the model into producing undesirable outputs.
>
> **[2:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=154)** Moreover, it can also help identify new user patents, inputs, and behaviors that could indicate a need for further fine-tuning of your LLM.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=166)** Finally, since LLMs require substantial computational resources, monitoring resource utilization such as memory and CPU loads is necessary to prevent the system overloads that could lead to decreased performance or downtime.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=185)** Remember that monitoring is not just about maintaining operational efficiency.
>
> **[3:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=193)** It is an integral part of your generative AI application.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=198)** It helps you track user behaviors so you can improve your application and ensure your application is secure, reliable, and beneficial to all users.
>
> **[3:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=210)** In the next lesson, we will learn about how specific monitoring challenges such as hallucinations and AI security.
>
> **[3:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/introduction-to-llm-performance-monitoring?u=76281980&t=219)** We will also learn the tools needed to evaluate LLM performance.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), cpu (1)
> **Code Keywords:** let (1), finally, (1), require (1)
> **Definitions:** is an  (2), is called (1)
> **Analogies:** such as (3)
> **Cross-References:** in the last (1), in the next (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Addressing hallucinations in LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=0)** - [Instructor] When LLMs are not given enough context or are asked to provide responses outside the training data, they tend to generate false, irrelevant, or inaccurate outputs.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=16)** This is known as LLM hallucinations and it is one of the biggest challenges of deploying generative AI applications.
>
> **[0:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=25)** Broadly, there are two types of hallucinations, factual hallucination, and faithfulness hallucinations.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=34)** Factual hallucinations occur when the LLM fabricates facts or is inconsistent with its knowledge.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=43)** On the other hand, faithfulness hallucinations occur when the LLM does not follow instructions or the contextual information it is provided.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=54)** Hallucinations in LLM responses can be serious issues, particularly if your application has compliance, regulatory, or legal implications.
>
> **[1:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=67)** It can also lead to the spread of misinformation when LLMs are used for content generation or as informational bots.
>
> **[1:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=77)** This can mislead your users, causing reputational damage.
>
> **[1:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=81)** Frequent inaccuracies can also reduce your users' trust in your tool, which can reduce the adoption of your generative AI applications.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=92)** And finally, when LLMs are used in sectors like healthcare, law, financial forecasting, where reliability and accuracy is important, hallucinations can pose operational and financial risks.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=108)** So how do we mitigate hallucinations in our applications?
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=112)** The easiest way to reduce hallucinations is to change how we call our LLM.
>
> **[1:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=119)** By reducing parameters like temperature and top_p to the range of 0.1 to 0.2, we can significantly reduce hallucinations and make our model outputs more deterministic.
>
> **[2:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=135)** However, it'll also reduce the creativity of our LLM outputs.
>
> **[2:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=141)** Implementing a RAG Architecture where you retrieve context from a database of relevant information also reduces hallucinations.
>
> **[2:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=152)** Most hallucinations occur when an LLM tries to fill in its own knowledge gaps with information it has created.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=161)** So by providing LLM with a lot of contextual data, we reduce the LLM's need to guess information.
>
> **[2:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=171)** In the next chapter, we will learn about how we can evaluate RAG applications.
>
> **[2:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=177)** Similarly, having a cache of human-verified answers that the LLM can leverage can also help reduce hallucinations.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=187)** You can also use prompt engineering techniques that we have covered in our previous courses, like few-short prompting, chain of thought prompting, prompting the LLM to think step by step and to respond with, I don't know, when it does not have information, can help reduce hallucinations.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=208)** And finally, fine tuning the LLM on your own data and edge cases can help identify and mitigate hallucinations.
>
> **[3:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=218)** In conclusion, while LLM hallucinations are a huge challenge for LLM deployments, they can be easily mitigated.
>
> **[3:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/addressing-hallucinations-in-llms?u=76281980&t=229)** In the next chapter, we will learn about evaluation techniques for LLMs in production that we can use to reduce hallucinations.

> [!info]- Semantic Content
>
> **Env Vars:** llm (14), rag (2)
> **Code Keywords:** finally, (2)
> **Versions:** 0.1 (1), 0.2 (1)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced Deployment Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Prompt management for LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=0)** - [Instructor] In the previous course, we learned about prompt engineering and how a prompt structure, wording, and comprehensiveness can influence the quality and relevance of the model's output.
>
> **[0:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=14)** Since prompts are the primary interface with the LLMs, it is vital that we manage and version our prompts and evaluate their efficacy.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=24)** In this lesson, we will discuss a typical prompt engineering workflow when building a generative AI product and how you should manage and evaluate your prompts.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=36)** Remember that prompts are vital as they control how the model responds to a query.
>
> **[0:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=42)** A prompt typically consists of three parts.
>
> **[0:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=45)** The first part is the system prompt.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=48)** This part informs the LLM about how it should respond and behave.
>
> **[0:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=53)** It sets the tone, style, and the role of the LLM in the conversation.
>
> **[0:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=59)** For example, a system prompt might instruct the LLM to respond in a formal tone, adopt a persona like a customer service representative, or apply a certain level of technical depth suitable for the expected audience.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=76)** The next part of the prompt is the context.
>
> **[1:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=79)** This gives the LLM more information to use to respond.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=84)** It can contain previous user interactions, user metadata, and details about the topic of discussion.
>
> **[1:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=91)** The context will change based on how the user is interacting with your app.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=98)** The last part of the prompt is a user query.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=102)** This is what triggers the model to generate a specific response based on the system, prompt settings, and the provided context.
>
> **[1:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=113)** A well-crafted prompt can lead to accurate and contextually relevant and useful responses, while a poorly designed prompt might result in an irrelevant or incorrect information.
>
> **[2:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=129)** However, you cannot expect the user to craft the best prompts.
>
> **[2:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=134)** As a prompt engineer, you will have to figure out the best system prompt and the context to answer user queries.
>
> **[2:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=143)** Effective prompting not only improves the user experience, but it also reduces the need for extensive post-processing and enhances the efficiency of interactions with the LLM.
>
> **[2:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=157)** A typical prompt engineering workflow involves several steps.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=161)** The first step is to understand the specific needs and objectives of the prompt.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=167)** If the requirements are too broad or very complex, you may want to break it down into smaller subtasks.
>
> **[2:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=176)** Once the requirement is finalized, the next step is to craft an initial prompt to perform the tasks.
>
> **[3:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=184)** This first prompt may not work so well, so testing the prompt and analyzing the output for relevance and quality is essential.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=196)** The next step is to refine the prompt to fix any issues iteratively.
>
> **[3:21](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=201)** You may have to provide more instructions in the system prompt or add more context.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=207)** Modifying prompts based on feedback and testing results will improve output quality.
>
> **[3:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=214)** When a prompt works well, you can deploy it in your production environment.
>
> **[3:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=219)** This workflow is cyclical, so you will have to perform multiple prompt refinement iterations before you can achieve the desired outcomes.
>
> **[3:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=232)** Throughout this prompt engineering workflow, you will write and test multiple prompts.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=239)** With each prompt, you will learn something new and better understand what works and doesn't work.
>
> **[4:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=246)** This is why keeping a structured record of prompt versions and their performance metrics is essential.
>
> **[4:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=254)** Versioning prompts similar to software versioning is crucial because it helps prompt engineers to understand what changes have been made, why they were made, and who made them.
>
> **[4:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=268)** You can also track how these changes affect the results.
>
> **[4:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=274)** You can quickly revert to a better performing version if a new prompt version performs poorly.
>
> **[4:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=282)** This helps you experiment confidently and test new prompt variations, knowing that earlier versions are safely archived.
>
> **[4:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/prompt-management-for-llm-deployment?u=76281980&t=294)** Finally, effective management and versioning of prompts ensure that improvements are methodical and documented, making the development process reproducible.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5)
> **Code Keywords:** interface (1), finally, (1)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Evaluating LLMs in production
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=0)** - [Instructor] In the last lesson, we discussed how changing prompts can affect the LLM's response.
>
> **[0:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=7)** This is why LLM evaluations are essential as they ensure that our generative AI apps are accurate, reliable, and context aware before they are deployed.
>
> **[0:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=19)** In this lesson, we will explore evaluation for LLMs and evaluation metrics for RAG applications.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=26)** There are two types of LLM evaluations, model evaluation and task evaluations.
>
> **[0:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=32)** Model evaluations are done to see how the model performs compared to other LLM models.
>
> **[0:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=39)** We do these evaluations using standard test cases and data sets like MMLU, TruthfulQA and GLUE.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=48)** These benchmarks help us understand a model's strength and weaknesses.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=54)** For instance, MMLU tests how good a LMS knowledge is across wide range of subjects like mathematics and history to more specialized areas like law and ethics.
>
> **[1:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=67)** However, model evals do not tell us how well a model might perform at this specialized task we are doing.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=76)** This is why we need to do task evaluation.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=80)** Task evaluation typically involves standardized test case that compares the model's output against predefined correct responses.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=92)** This ensures the model outputs do not deviate far from the desired outputs.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=98)** Next, prompts are evaluated as well.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=102)** This is especially important when changing the prompt or using a different LLM.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=108)** It ensures that we correctly prompt the model to lead to the desired responses.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=115)** Since each LLM is trained differently, the same prompt may not work when changing the model or after fine tuning your existing model.
>
> **[2:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=125)** Therefore, you should evaluate your prompts after changing the model as well.
>
> **[2:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=131)** Finally, we must evaluate our application continuously throughout its lifecycle from development to production.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=142)** This ensures that our AI apps response are of high quality and stay relevant to our users' needs.
>
> **[2:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=152)** Since most LLM applications are some form of RAG application where you retrieve some context, feed it to the LLM and then ask it to generate responses using the context, we will focus on evaluating RAG applications.
>
> **[2:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=170)** In particular, we'll learn about RAGAs framework.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=175)** RAGAa has four main metrics, which are combined together to form the RAGAs score.
>
> **[3:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=183)** These metrics address both the degeneration and retrieval aspects of RAG applications resulting in a thorough and balanced evaluation of the RAG application's overall performance.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=196)** These metrics include faithfulness, which assesses how factually correct the generated responses are in relation to the retrieved context.
>
> **[3:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=207)** It ensures the integrity of the information provided by the LLM.
>
> **[3:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=212)** Next, answer relevancy measures how relevant the generated answers are to the person's query, crucial for user satisfaction and effectiveness of the model.
>
> **[3:45](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=225)** Context precision evaluates the quality of the retrieved context.
>
> **[3:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=231)** High precision means the information retrieved is mostly relevant, reducing the likelihood of generating incorrect or irrelevant responses.
>
> **[4:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=240)** And finally, context recall checks whether the system can retrieve all relevant information needed to answer the query effectively, high recall ensures comprehensive and complete responses.
>
> **[4:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=256)** In conclusion, remember that LLM task evaluations are vital to maintain trust and reliability in generative AI applications.
>
> **[4:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=268)** Moreover, evaluation helps us itrate upon our generative AI applications leading to continual improvements.
>
> **[4:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/evaluating-llms-in-production?u=76281980&t=278)** In the next chapter, we will see how we can use RAGAs to evaluate an LLM.

> [!info]- Semantic Content
>
> **Env Vars:** llm (11), rag (5), mmlu (2), glue (1), lms (1)
> **Cross-References:** in the last (1), we discussed (1), in the next (1)
> **Code Keywords:** finally, (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Evaluating LLM systems
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=6)** - [Instructor] In this lesson, you have learned the importance of evaluating the response from RAG applications.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=13)** We talked about the RAGAs framework, which uses open AI's GPT model to evaluate both the generation and the retrieval aspects of RAG applications.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=26)** In this challenge, you will use RAGAs framework To evaluate a RAG application.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=31)** Here's what you will need to do.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=34)** First, you need to install the RAGAs package.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=38)** Next, we will download dataset that contains prompts, context, generated answer, and ground truth answers for a RAG application.
>
> **[0:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=51)** You can use your own RAG data from one of the previous challenges.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=56)** Next, we will use RAGAs framework to calculate four main metrics, context precision, faithfulness, answer relevancy, and context recall.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=69)** As a bonus, you can also try to change the prompt or the contextual data, then generate new answers and measure the metrics again.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=80)** This will help you guide your prompt engineering process.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=83)** By the end of this challenge, you will be well-equipped to evaluate RAG applications, allowing you to confidently return LLM-generated answers to your end users.
>
> **[1:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-evaluating-llm-systems?u=76281980&t=96)** You can view the solution to this challenge in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** rag (6), gpt (1), llm (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Evaluating LLM systems
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=0)** (smooth uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=6)** - [Instructor] Let's see how to use Ragas to evaluate a RAG application.
>
> **[0:11](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=11)** We start by first installing the Ragas library.
>
> **[0:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=16)** Then we import the necessary functions and classes that we will use.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=36)** First, we'll import the datasets package.
>
> **[0:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=41)** Next, from Ragas, we will import the four metrics, as well as the evaluate class.
>
> **[0:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=52)** Next, we set up an OpenAI API key using the getpass model.
>
> **[1:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=60)** Now we are ready to load our dataset.
>
> **[1:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=66)** We will use the fiqa_eval dataset from the exploding gradients.
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=76)** This dataset contains questions, context, and answers from a RAG application.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=84)** It also contains the ground truth we can compare with.
>
> **[1:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=100)** Since this is a large data set, we will select a subset for evaluation.
>
> **[1:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=107)** In this case, I am selecting the first three entries.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=112)** Now we can pass the data to evaluate function along with four metrics.
>
> **[2:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=128)** You can then print the results and see values of the four metrics.
>
> **[2:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-evaluating-llm-systems?u=76281980&t=139)** As a bonus, try to generate an answer using a different model, and see how the evaluation results change.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class. (1), case, (1), pass (1), function (1)
> **Env Vars:** rag (2), api (1)
> **Code Identifiers:** fiqa_eval (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (smooth uptempo music) (1)


### 6. Security and Cost Considerations

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Security considerations for LLMs in production
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=0)** - [Instructor] In the last chapter, we talked about the importance of evaluating LLM outputs, especially for real-time rag applications.
>
> **[0:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=9)** While evaluations test the quality of the output of LLMs, they do not test whether LLM outputs are safe and are not leaking sensitive or private data.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=22)** Moreover, elements can be prone to malicious actors trying to attack them to get them to generate harmful or incorrect outputs.
>
> **[0:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=34)** This could result in the spread of misinformation, damaging content, craft, phishing emails, and so on.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=43)** In this chapter, we will learn about some of the safety concerns of LLMS in production and what you can do to protect your generative AI application.
>
> **[0:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=56)** First, let's take a look at some of the safety concerns and attack vectors of LLMs in production.
>
> **[1:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=63)** Prompt injection is one of the most popular attack vectors for LLMs.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=69)** It involves manipulating and LLM by providing inputs that cause it to perform unintended actions.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=78)** People have used prompt injection attacks to get discounts for products through support chatbots.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=85)** Have LLMs output hurtful comments, and even reveal internal company data.
>
> **[1:32](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=92)** Since this is one of the most common and easiest to implement attack vectors, it is crucial that your LLM systems have guardrails in place to stop them.
>
> **[1:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=104)** LLM systems, especially those that are agent-based and have access to tools, may reveal sensitive data in their output.
>
> **[1:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=115)** This can lead to unauthorized data access, privacy violations, and security breaches.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=122)** It is crucial to implement data sanitization and to enforce strict access policies for the tools that LLMs use.
>
> **[2:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=133)** If your LLM system is not running in an isolated and containerized environment, it may be able to execute malicious code or respond with system data that it should not have access permissions and functionality such as the ability to run code.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=155)** Finally, a fine-tuned LLM can unintentionally expose sensitive information it was trained on.
>
> **[2:44](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=164)** This would create data privacy issues and may leak PII information.
>
> **[2:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=171)** This is known model inversion attack.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=175)** These are some of the most common attack vectors.
>
> **[2:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=179)** There are also safety concerns with deploying LLM applications.
>
> **[3:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=184)** For instance, an LLM can generate biased or discriminatory outputs, and LLM can also respond aggressively or rudely.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=196)** This is a huge concern in customer support chatbots, where a harmful response can cause reputational damage and customer dissatisfaction.
>
> **[3:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=208)** Now, let us look at some of the mitigation strategies to make your AI systems safe and secure.
>
> **[3:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=217)** Firstly, it is important to have guard rails that can scan the outputs of LLMs for anomalous behaviors and can ensure that outputs are sanitized.
>
> **[3:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=230)** You should also include robust mechanisms to validate and sanitize inputs to the LLM.
>
> **[3:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=238)** This helps prevent adversarial inputs and prompt injection attacks from manipulating the model's output.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=247)** You should use containerization technologies to isolate the LLM and prevent it from accessing the other parts of data or infrastructure.
>
> **[4:19](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=259)** This will also prevent the LLM from potentially running code that can leak internal details.
>
> **[4:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=265)** Next, you should be monitoring tools to detect unusual behavior or outputs from the LLM, which may indicate an attack or a malfunction.
>
> **[4:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=278)** Finally, a rapid response team and protocol should be established to address potential security incidents.
>
> **[4:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=287)** This includes the ability to roll back or update models without significant downtime.
>
> **[4:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=294)** Monitoring your LLM inputs and outputs in production is important to detect anomalies.
>
> **[5:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/security-considerations-for-llms-in-production?u=76281980&t=302)** When anomalous behaviors are detected, or if the LLMs output deviate from the expected behavior Safety systems should kick in to prevent those outputs from being sent out to users.

> [!info]- Semantic Content
>
> **Env Vars:** llm (15), llms (1), pii (1)
> **Code Keywords:** let (2), finally, (2), private (1)
> **CLI Commands:** make (1), rails (1)
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** such as (1), for instance (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Balancing costs and performance in LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=0)** - [Instructor] So far, we have been mostly discussing real-time deployment architectures.
>
> **[0:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=6)** In a real-time system.
>
> **[0:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=8)** The LLM is constantly available and waiting for requests.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=13)** This is great for systems where you need to serve the response from your LLM to your customers quickly, like a chat bot.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=22)** However, it is also costly, since you need to have a dedicated server running 24/7 to serve the model.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=30)** In this video, you will learn about alternate deployment techniques to reduce cost.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=36)** We will also learn some metrics to measure an LLM system's performance, and how to balance the cost and performance to get the most of your LLM apps.
>
> **[0:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=48)** First, let's take a look at the cost associated with different types of AI deployments.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=55)** The first step companies usually take when building an AI product is to use LLM API by providers, like Anthropic or OpenAI.
>
> **[1:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=68)** With APIs, the primary cost factor is related to consumption of tokens.
>
> **[1:14](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=74)** Tokens are essentially units of texts, or pieces of words, processed by the model.
>
> **[1:20](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=80)** Some API providers charge differently for input and output tokens.
>
> **[1:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=85)** Since the number of tokens can vary widely depending on the application complexity and user-interaction intensity, budgeting and cost estimation can be tricky.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=98)** Moreover, the cost can escalate quickly with increased usage, or as application complexity keeps increasing, requiring longer prompts or chain of API calls.
>
> **[1:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=114)** Once costs start increasing, companies usually pivot to self-hosting an LLM.
>
> **[2:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=122)** This approach shifts the cost from tokens to the computational resources required to run the model.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=130)** The costs now become constant and predictable, since it's determined by the size and the number of servers, rather than fluctuating with token usage.
>
> **[2:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=142)** This can be a cost-effective solution for applications with high or unpredictable demand, as it eliminates per-token charges.
>
> **[2:34](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=154)** However, the initial setup and ongoing maintenance of such a system can be resource-intensive.
>
> **[2:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=162)** Moreover, if your app's usage is low or intermittent, then the cost of having a dedicated server may be greater than using an API.
>
> **[2:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=173)** LLM APIs and dedicated servers are essential for applications that require real-time responses, like chat bots.
>
> **[3:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=182)** For applications that do not require real-time processing, batch processing can be a cost-effective solution.
>
> **[3:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=190)** A batch processing system runs at a scheduled time on a backlog of requests.
>
> **[3:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=196)** This reduces the need for a dedicated server to run all the time.
>
> **[3:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=202)** This approach saves on server costs, and has predictable costs similar to real-time self-hosting.
>
> **[3:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=211)** While some API providers, like OpenAI, are beginning to offer batch processing capabilities at reduced costs, they are still typically tied to token usage, introducing some level of cost variability.
>
> **[3:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=228)** When self-hosting LLMs, you can also have the ability to further reduce costs by choosing smaller LLM, or quantizing larger models.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=239)** Quantization is a technique used to reduce the precision of the numbers used in LLM computations.
>
> **[4:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=247)** This process reduces the model's memory footprint, and speeds up its computation, albeit at the potential cost of a slight decrease in LLM's quality, metrics accuracy, F1 score, or perplexity.
>
> **[4:28](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=268)** However, quantized models can run faster and on less powerful hardware, which can be cheaper, enabling more efficient use of resources and lower costs.
>
> **[4:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=280)** The choice of GPU can also affect the performance of LLMs.
>
> **[4:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=286)** Modern, high-performance GPUs, like A100 or H100, are designed to handle LLM computations faster.
>
> **[4:56](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=296)** Using the latest commercial GPUs can drastically reduce response time, and can run sophisticated and larger models, however, they come with higher costs.
>
> **[5:08](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=308)** As an AI developer, you need to evaluate whether the performance gain aligns with the operational budgets and the specific demands of your applications.
>
> **[5:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/balancing-costs-and-performance-in-llm-deployment?u=76281980&t=318)** In some scenarios, a more expensive GPU can be cost-effective over the long term, if it means significantly faster processing times, and the ability to handle more users, or more complex queries, without degradation in the model's quality.

> [!info]- Semantic Content
>
> **Env Vars:** llm (11), api (5), gpu (2), a100 (1), h100 (1)
> **Code Keywords:** self (3), require (2), let (1)
> **Prerequisites:** you need to have (1), required to (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Strategies for cost-effective LLM deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=1)** - [Instructor] In this video, I want to wrap up everything you have learned.
>
> **[0:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=5)** So by giving your framework for how to choose the LLM deployment methodology for your application.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=13)** Applications using large language models transition from an experimental phase to a more mature product, serving a large user piece.
>
> **[0:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=23)** During this process, its underlying LLM architecture typically evolves through several stages.
>
> **[0:31](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=31)** This evolution is driven by changing needs, such as requirement for customization, scalability, and control over the data and model.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=43)** At first, the deployment uses a third party API like Open AI's GPT.
>
> **[0:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=50)** This requires minimal setup and maintenance, and it is ideal for prototyping or for small-scale applications.
>
> **[0:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=58)** However, as the user base grows, the reliance on external APIs may become limiting due to cost, latency, and rate limits.
>
> **[1:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=70)** Moreover, as the application becomes more complex, a need for customizability also emerges.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=78)** While this can be handled at first by prompt engineering and vector databases, eventually you want to use a model fine-tuned for your domain.
>
> **[1:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=90)** At this stage, you will want to use your own LLM-deployed base models like Llama or Mistral.
>
> **[1:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=98)** By deploying on your own servers, you have more control over the deployment environment and the data security.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=106)** You can also get better performance that is not limited by your API provider.
>
> **[1:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=112)** However, a base model is going to be generic and will not perform well on domain-specific tasks.
>
> **[2:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=120)** So you'll want to eventually fine-tune a model on a company-specific data to improve accuracy and reduce hallucinations.
>
> **[2:10](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=130)** Getting to this stage will take significant time, technical expertise and compute resources, so it is best to anticipate this stage and plan ahead.
>
> **[2:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=143)** The final stage where very few applications will reach is the large-scale specialization phase where you will need to develop a propriety LLM model from scratch to the unique needs of your application.
>
> **[2:39](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=159)** This stage requires significant investment in computational resources and technical expertise.
>
> **[2:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=166)** You will also have to spend time and effort to collect, curate, training data.
>
> **[2:52](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=172)** However, you will have full control over your model's capability and can mitigate any biases, hallucinations, and misinformation that a pre-trained or fine-tuned LLM will have.
>
> **[3:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=187)** Remember that at each stage has different benefits and challenges from a cost effective, low maintenance, start, to a high investment, high return, custom-trained LLM.
>
> **[3:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/strategies-for-cost-effective-llm-deployment?u=76281980&t=202)** As the LLM developer, you need to take into consideration the growing complexity of the application, the increasing user base, and the strategic vision of the company to decide the best way to deploy a LLM-powered application.

> [!info]- Semantic Content
>
> **Env Vars:** llm (8), api (2), gpt (1)
> **Code Keywords:** return, (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Estimating costs of an LLM API
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=0)** - [Instructor] We have talked about the costs associated with deploying LLM applications.
>
> **[0:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=12)** When you use an LLM API, you typically pay based on tokens.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=18)** OpenAI charges differently for input and output tokens.
>
> **[0:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=24)** Input tokens are usually half as much as expensive as output tokens.
>
> **[0:30](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=30)** Measuring the cost of API usage can be a challenge, but it's a task that'll help us understand and manage our costs better.
>
> **[0:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=40)** Unlike deploying an LLM on a dedicated server where the cost is fixed, LLM API token costs can vary depending on the complexity of your prompts and how your users interact with your application.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=55)** This variability can lead to unpredictable cost.
>
> **[1:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=60)** In this challenge, you'll have to measure the cost of our API usage.
>
> **[1:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=67)** Here are the steps you need to do.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=69)** First, you will have to write a script that can call the OpenAI API and get the response.
>
> **[1:17](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=77)** Next, we'll measure how many tokens were used in the input and output prompts.
>
> **[1:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=84)** Finally, we can use OpenAI's token pricing to calculate the total cost of that prompt.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=93)** As a bonus, you can see how using complex prompting techniques from few-shot prompting to chain-of-thought prompting increases the cost.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/challenge-estimating-costs-of-an-llm-api?u=76281980&t=106)** As an AI developer, you must learn to monitor costs and balance longer, better performing prompts with higher costs.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), llm (4)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Estimating costs of an LLM API
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=0)** - [Instructor] In this video, we will write a script to calculate the cost of using OpenAI's API.
>
> **[0:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=13)** First, ensure that you have installed the OpenAI package.
>
> **[0:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=18)** Next, you need to determine how much OpenAI charges for every input and output token.
>
> **[0:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=26)** Here you can see the current costs.
>
> **[0:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=29)** Remember that OpenAI charges differently for input and output tokens, so you need to specify their costs separately.
>
> **[0:38](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=38)** Now, let's write a function to calculate the cost.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=43)** It's a straightforward process.
>
> **[0:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=46)** Our function takes the number of input tokens and output tokens as parameters.
>
> **[0:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=55)** To calculate the total cost, we simply multiply the input tokens with the input token cost and sum that with the product of the output tokens and the output token cost.
>
> **[1:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=72)** But how do we know how many tokens we used up?
>
> **[1:16](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=76)** Well, thankfully, OpenAI sends us our token usage with each response.
>
> **[1:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=83)** To get the number of input tokens, we can use the prompt tokens property from the usage property of the response.
>
> **[1:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=97)** To get the output tokens, we can use the completions token property.
>
> **[1:42](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=102)** We can then call our calculate cost function to get the final cost.
>
> **[1:48](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=108)** My total cost for this prompt and response pair was slightly more than 2 cents.
>
> **[1:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=118)** This is an excellent method to calculate and keep track of cost for production application.
>
> **[2:07](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=127)** What if you want to calculate cost without calling OpenAI?
>
> **[2:13](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=133)** Perhaps to have a data set of question answer pairs, you want to know how much it would cost to generate it using OpenAI.
>
> **[2:24](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=144)** To do that, you can use tiktoken package.
>
> **[2:29](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=149)** First, you need to download the tiktoken package.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=155)** To use tiktoken, we first fetch the encoding for the model.
>
> **[2:40](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=160)** Next, we can use the encode method to encode any text.
>
> **[2:50](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=170)** This will return a list of the total tokens, the length of which is the total number of tokens.
>
> **[2:58](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=178)** We can then calculate the cost as before.
>
> **[3:05](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=185)** Now, all you need to do is specify the module you are using and call the function.
>
> **[3:12](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/solution-estimating-costs-of-an-llm-api?u=76281980&t=192)** You can see that the cost is the same as the previous step.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (1), module (1)
> **Env Vars:** api (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=0)** - [Instructor] Welcome to the conclusion of LLMOps part two.
>
> **[0:04](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=4)** Let's recap the key takeaways and practical tips from each chapter to ensure you are fully prepared for deploying and monitoring LLMs in production.
>
> **[0:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=15)** In chapter one, we explored various deployment options of LLMs.
>
> **[0:22](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=22)** Remember, choosing the right deployment strategy is crucial.
>
> **[0:27](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=27)** Whether you're deploying via APIs or custom models, it is essential to ensure scalability and flexibility.
>
> **[0:36](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=36)** Fine tune models can be particularly beneficial for specific tasks, enhancing overall performance.
>
> **[0:43](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=43)** Keeping these factors in mind when planning your deployment approach.
>
> **[0:49](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=49)** Chapter two, focused on handling API limitations.
>
> **[0:54](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=54)** Monitoring endpoint uptime is critical, always be prepared for potential down times.
>
> **[1:02](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=62)** Implement strategies to mitigate latency issues to ensure a smooth user experience.
>
> **[1:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=69)** Understand the limitations of your choosing API and plan accordingly to avoid unexpected challenges.
>
> **[1:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=78)** In chapter three, we went into advanced deployment architectures, leveraging vector databases.
>
> **[1:26](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=86)** Leveraging vector databases can significantly improve retrieval and storage efficiency.
>
> **[1:33](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=93)** Using agents and chains allow you to manage complex workflows within LLM deployments effectively.
>
> **[1:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=101)** Design your architecture to support scalability and robustness.
>
> **[1:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=106)** Ensuring your system can handle increased demands and complexities.
>
> **[1:51](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=111)** Chapter four emphasized the importance of monitoring LLM performance.
>
> **[1:57](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=117)** Setting up comprehensive performance monitoring systems from the start is vital.
>
> **[2:03](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=123)** Regularly check for and address hallucinations to maintain model accuracy.
>
> **[2:09](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=129)** Effective prompt management is also crucial for optimizing model outputs.
>
> **[2:15](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=135)** These practices will help you maintain high performance and reliability in your deployed models.
>
> **[2:23](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=143)** In chapter five, we went into advanced deployment techniques where we discussed strategies for effective prompt management and evaluating LLMs in production.
>
> **[2:35](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=155)** Implement tools and techniques for your comprehensive performance monitoring.
>
> **[2:41](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=161)** Continuously evaluate and refine your LLM systems for optimal performance.
>
> **[2:47](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=167)** This ongoing process ensures your model remain efficient and effective in dynamic environments.
>
> **[2:55](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=175)** Finally, we covered security and cost considerations.
>
> **[3:01](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=181)** Balancing security measures with cost efficiency is vital.
>
> **[3:06](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=186)** Implement robust security protocols to protect sensitive data and use cost effective strategies to manage resources without compromising performance.
>
> **[3:18](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=198)** These measures will help you maintain a secure and economically viable deployment.
>
> **[3:25](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=205)** As we conclude, remember that innovation and continuous learning are key to staying ahead in the rapidly evolving field of LLMs.
>
> **[3:37](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=217)** Regularly read technical material and engage with the community to stay informed about the latest developments.
>
> **[3:46](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=226)** For more insights and updates, subscribe to our newsletter@tinyml.[substack.com](https://substack.com).
>
> **[3:53](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=233)** Keep learning, keep innovating, and best of luck with your LLM products.
>
> **[3:59](https://www.linkedin.com/learning/advanced-llmops-deploying-and-managing-llms-in-production/next-steps?u=76281980&t=239)** Thank you for participating in LLMOps part two.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4), api (2)
> **Code Keywords:** let (1), finally, (1)
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