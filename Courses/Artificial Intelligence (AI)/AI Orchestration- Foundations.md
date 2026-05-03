---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-orchestration-foundations
url: "https://www.linkedin.com/learning/ai-orchestration-foundations"
duration_minutes: 45
duration: 45m
level: Intermediate
updated: 1/27/2025
learners: 6395
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - AI Orchestration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFEb2PuIGhkuQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736987597460?e=2147483647&amp;v=beta&amp;t=947y6yQrZK358fein0RMmDk6kDwMeK7HZqq5DoDoJy4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]'
prev_courses:
  - '[[AI Foundations- Ideating and Prototyping]]'
next_courses:
  - '[[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]]'
path_nav: '[{"path":"Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning","position":3,"total":6,"prev":"AI Foundations- Ideating and Prototyping","next":"Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/ai-orchestration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Orchestration-%20Foundations.md)

![AI Orchestration: Foundations](https://media.licdn.com/dms/image/v2/D4D0DAQFEb2PuIGhkuQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736987597460?e=2147483647&amp;v=beta&amp;t=947y6yQrZK358fein0RMmDk6kDwMeK7HZqq5DoDoJy4)

# AI Orchestration: Foundations

> This course outlines how to design and build more complex LLM applications, showcasing the importance of orchestration as part of the process. Topics covered include the components of AI orchestrators, including input and output interfaces, prompt chaining, APIs, AI workflows and agents, and specialized LLMs. Along the way, instructor Denys Linkov shows you how to orchestrate AI to create and mana

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations) | 45m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn the basics of AI orchestration](#learn-the-basics-of-ai-orchestration)
  - [Setting up your environment](#setting-up-your-environment)
- [**1. Why Use AI Orchestration?**](#1-why-use-ai-orchestration) (3 videos)
  - [When using ChatGPT isn't enough](#when-using-chatgpt-isnt-enough)
  - [What is AI orchestration, and why is it useful?](#what-is-ai-orchestration-and-why-is-it-useful)
  - [Architecture of AI orchestrators](#architecture-of-ai-orchestrators)
- [**2. Components of an AI Orchestrator**](#2-components-of-an-ai-orchestrator) (6 videos)
  - [Input interface for AI orchestrators](#input-interface-for-ai-orchestrators)
  - [Output interfaces for AI orchestrators](#output-interfaces-for-ai-orchestrators)
  - [Orchestrating LLMs with prompt chaining](#orchestrating-llms-with-prompt-chaining)
  - [Calling APIs and connecting to databases](#calling-apis-and-connecting-to-databases)
  - [AI workflows and agents](#ai-workflows-and-agents)
  - [Specialized large language models (LLMs)](#specialized-large-language-models-llms)
- [**3. AI Orchestration for a Basic AI App**](#3-ai-orchestration-for-a-basic-ai-app) (7 videos)
  - [Building low-code vs. code](#building-low-code-vs-code)
  - [Visualizing an AI orchestration framework](#visualizing-an-ai-orchestration-framework)
  - [Building a simple AI app](#building-a-simple-ai-app)
  - [Implementing multiple AI workflows](#implementing-multiple-ai-workflows)
  - [Adding API calls to your AI app](#adding-api-calls-to-your-ai-app)
  - [Challenge: Building an AI coach](#challenge-building-an-ai-coach)
  - [Solution: Building an AI coach](#solution-building-an-ai-coach)
- [**Conclusion**](#conclusion) (1 videos)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn the basics of AI orchestration](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=0)** - Building AI applications can be a complex process, so how do we put all the right pieces together? I'm Denys Linkov, Machine Learning Leader, and I'll be helping you learn all about AI orchestrators. In this course, I'll walk you through a hands-on approach to use AI orchestrators, covering their architecture components and key considerations. You'll learn how AI orchestrators can help you build great AI [[Microsoft Products|products]] by connecting user interfaces, business systems, LLMs, and more into one cohesive product. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Speakers:** - building (1)

#### [Setting up your environment](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=0)** - [Instructor] In this video, we'll set up our environment so you can get hands-on with AI orchestrators. This course assumes basic knowledge of LMS and how to prompt them. We'll be writing some prompts when building our AI projects. If you're not familiar with prompting, you can check out some of my intro to prompting courses on [[LinkedIn]] Learning. Next, we'll be using Voice Load as our main AI orchestrator. If you haven't used voice load before, you can create a free account at creator.[voiceload.com](https://voiceload.com). After creating your account, you can log in and once you log in, you'll be able to see your workspace. You'll likely be on a free plan, so it might look slightly different. Once in the workspace, you can import voice load files and we have provided some in their exercise files so you can follow along. We can go to the top rate, click import.VFfile, and we can click on a file and open it. Then we can go inside of that file and get to the voice flow editor. We'll be going through some more details on how to use Voice Load in the later videos, and we'll also be using Airtable to store some information for our AI Orchestrator. Nut you can use any database that you want. Airtable is also free to use, so we can create an account and sign in. Once you're signed in, you'll be able to create a base which contains many tables of information. Let's click on My Ideas base and see that I have two different tables here, projects and table one. You'll then be able to add rows without the need to code, just like using a spreadsheet. We'll be revisiting how to use Airtable in a later video and how to connect it to our AI orchestrator. Now that we've covered the prerequisites,
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=93)** let's get started learning about AI orchestrators.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (2), go to (1)
> **URLs:** [voiceload.com](https://voiceload.com) (1)
> **Env Vars:** lms (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Why Use AI Orchestration?

[↑ Back to Table of Contents](#table-of-contents)

#### [When using ChatGPT isn't enough](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=0)** - [Instructor] [[ChatGPT]] and other [[Large Language Models (LLM)|large language models]] have caused a large wave of transformation in the past few years. You may have used them to write emails, organize your ideas, or build some [[Dashboards]]. In other cases, you might have noticed that using the model was not enough. You might need to do a few tasks sequentially in a row, connect to custom data source, or build a more custom interface. For example, if I'm using a model to automate [[Customer Support]] for my business, I need to provide context to the model about key information, add a user interface to my website, and connect to internal systems. These are the use cases that often have the most value, and certainly one model isn't going to be enough. Depending on the task, we may need to go beyond large language models. To connect and control these operations, we'll need an [[AI Orchestration]] layer, something we'll learn about coming up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[ChatGPT]] (1), [[Dashboards]] (1), [[Customer Support]] (1), [[AI Orchestration]] (1)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What is AI orchestration, and why is it useful?](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=0)** - [Instructor] To solve our more complex AI tasks, let's dive into AI Orchestrators. To start, what exactly is an AI orchestrator? An AI orchestrator is a way to connect many AI tools together, including models, data sources, and APIs. It allows you to build more complex applications for use cases that are impactful to your business. For example, let's see how we can map our [[Customer Support]] use case with an AI orchestrator. To start, we'd like to use [[GPT-4|GPT-4o]] mini as our main model; fast, cheap, and with a large context window. Next, we'd like to use information from our website to answer FAQs, so that when user ask them, we'll use them as a response. We also want to update our ticketing systems, such as Zendesk or Salesforce. And finally, we want a chat widget with custom branding to appear on the website. Now, we have a basic customer support AI application. Rather than building all of these integrations and connections from scratch, we'll use an AI orchestrator to let us get to an AI application faster and deploy it to production. There are a few AI orchestrators you might have heard of before, such as [[LangChain]], CrewAI, [[LlamaIndex]], and Voiceflow. Coming up, we'll cover the specific components of an AI orchestrator in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Customer Support]] (2), [[GPT-4|Gpt-4o]] (1), [[LangChain]] (1), [[LlamaIndex]] (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** gpt (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Architecture of AI orchestrators](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=0)** - [Instructor] Let's go into more details about the architecture of an AI orchestrator. We have eight essential components. Let's start with the first one, which is the input interface. AI orchestrators should have a way to take input from a user, whether through voice, chat, or an API. A standard input interface will allow us to use AI and Business Logic to accomplish our tasks. Now, to decide which logic to use. We need to have a router, which is our second component. [[Routing]] helps us figure out what kind of response or workflow to activate when a user says a phrase. For example, if someone says, "I need a refund," we want to recognize that and handle the response. In this case, we're sending the user to the refund a customer workflow. Other names for the router you might have heard of are Semantic Router or Intent Classifier. Now our third component is the workflow manager. Routing a user response becomes easier when you can select a workflow to follow. In the previous example, we routed the user to the refund a customer workflow. But in the simplest application, a workflow might be as simple as prompting an LLM with a user question and responding directly. This leads us to our fourth component, which is the LLM. This [[Forms]] the backbone of our application. We want to select a model that meets our requirements in terms of accuracy, cost, latency, among many other factors. We can also choose a model based on each workflow or combine several models together. Now, our fifth component is the state manager. The state manager maintains a list of properties
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=93)** and variables used during a conversation or automation run. For example, if two separate people are asking for refunds, we want to keep track of what step they're each on and keep their information isolated. Now sixth component is a way to connect to other systems using APIs similar to a web or mobile application. An AI application needs to be able to read and write different forms of data, such as looking up information of a user currently using that application, or in a previous example, refunding that user. Now to get information to the user, we move on to our seventh component, which is responding to the user in some kind of way. Our orchestrator should manage responses, whether they're directly from an LLM or pre-written. In our example, we might want to respond to the user saying, "Sure, let me help you with that." These responses can be text or voice-based. Finally, we have our eighth component, which is the need for guardrails. To minimize LLM hallucinations and handle malicious user input, we need a way to add guardrails to our application, and a good orchestrator will help us do that. In our example, if a user said, "Delete your database," we might want to trigger our guardrail workflow and say, "Sorry, I can only help with [[Banking]] services." Or another example might be ignore previous instructions. So overall AI orchestrators are quite comprehensive. In the next few chapters, we'll go through the details of each component as we build an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[Forms]] (2), [[Banking]] (1)
> **Env Vars:** llm (4), api (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Components of an AI Orchestrator

[↑ Back to Table of Contents](#table-of-contents)

#### [Input interface for AI orchestrators](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=0)** - [Presenter] One of the magical moments when [[ChatGPT]] first came out was the ability to just type, ask a question, and get a plausible answer. This method of seamlessly inputting questions into an AI system set a bar for AI applications. Here I'll cover the different input interfaces an AI orchestrator should support to enable the strong [[User Experience (UX)|user experience]]. Inputting information into an AI system can take many [[Forms]]. It can be a voice conversation with a user expectation of millisecond latencies, or it can be a standard chat support with the expectation of seconds, or in an email support use cases, minutes might be an acceptable latency for users. So depending on what kind of application and use case you're building, you'll need to select the right interface for your application. AI orchestrators can then be helpful in a few ways when building input interfaces. They can provide pre-built examples, let you build custom logic for handling interfaces, and provide extensibility to customize based on your branding and visual guidelines. Now, going beyond one interface, an interesting recent development has been the emergence of multimodal models and interfaces, meaning that you can combine modalities like image and text to get a more complete AI experience. To go through a more concrete example, let's say we have an AI chat bot for an airline. We might want to upload a picture of our passport to check in or do a visual seat selection. Now, overall, AI orchestrators can make it much easier to handle user inputs, allowing users
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=93)** to use AI applications proficiently. Now that we've talked about inputs, we'll cover output interfaces up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[User Experience (UX)|User experience]] (1), [[Forms]] (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [presenter] (1)

#### [Output interfaces for AI orchestrators](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=0)** - [Instructor] Strong responses define an AI system with accuracy, legibility and ultimately helping our user solve their problem being the key measurements. To help deliver these strong responses, AI orchestrators should provide a solid foundation for building good outputs. Just like inputs, outputs depend on the goal of the application, with voice and text responses being common, but richer outputs create a better [[User Experience (UX)|user experience]] with things like buttons, links, emojis, cards and carousels and even custom interfaces helping to create a great user experience. Depending on the application, these responses would be different. A support application may concisely articulate the instructions that need to be followed, while an [[E-Commerce]] store might have the images of the [[Microsoft Products|products]] being listed. Our AI orchestrator should make it easy for us to get the input from a system passed to the model and then get the output to our users. These responses might also go to multiple locations, such as sending a user confirmation message, recording the response in a CRM and sending a follow-up text or email later on. We might also save certain parts of the output into a variable that we can reuse later in the conversation, such as giving our AI application memory. Last but not least, when we return responses to a user, we can choose to return it all at once or stream it back like [[ChatGPT]]. Now that we've covered inputs and outputs, we'll learn more about building powerful AI applications with prompt chain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2), [[E-Commerce]] (1), [[Microsoft Products|Products]] (1), [[ChatGPT]] (1)
> **Analogies:** such as (2), just like (1)
> **CLI Commands:** make (1)
> **Env Vars:** crm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Orchestrating LLMs with prompt chaining](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=0)** - [Instructor] Let's discuss how we can connect multiple LLMs together to build a more helpful AI application, using a technique called Prompt Chaining. To start, the most basic AI application will have an input, a model, and an output. For example, if we think about [chatgpt.com](https://chatgpt.com) as an AI application, we provide an input as text, we select a model we want to use, and we generate a response. In this case, counting to 10. If we would like to do something more complex, for example, generating a list of ideas for an event and then writing an email, we can use a technique called prompt chaining to accomplish both tasks. First, we use our first prompt written here to generate a list of ideas, and then we save the results. Then we use a second prompt to generate the email using the previous output, and we can show that to the user. I can manually do this in [[ChatGPT]] with two different [[Windows]]. I'm going to be using prompts from the Exercise Files located under 02_03. So under Exercise Files, I'll head over to prompts.txt. So let's go ahead and copy this first prompt and head back to ChatGPT. Going to paste my prompt and hit Enter. All right, here we go, we have three different ideas. Let's go ahead and head back to our prompts and copy the second prompt. Let's head back to ChatGPT and open up our second tab. We're going to paste in our prompt, go back to our first tab and copy these ideas. We'll go back to our second tab. We're going to replace these ideas
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=93)** with the previous ChatGPT outputs. Now let's hit Enter. And there we go, we have an email. Now this was fairly manual and took a lot of effort, so let's do this in Voiceflow where it's much easier to do so. Let's head over to Voiceflow and open up O2_03 from the Exercise Files. As you can see here, I'm in the home workflow and I have two different steps in my workflow. First, I have the ideas generation, and next, I have the email generation. So if we click on Generate Ideas, we'll see that we have our prompt here and we save it to an ideas variable on the right-hand side. We then output our ideas to the user, and after that, move on to generating the email. You can see here that I can edit the prompt and see what it is. It's very similar to what we did before. I'm going to exit out of this Voiceflow window and click Run under the Ideas button. All right, here we go, we can see the responses. First, we generated the ideas up here, Charity Fun Run, Silent Auction and Gala, and Community Bake Sale and Food Drive. The ideas that you got might be different. And then afterwards we generated our email. So this took one button click rather than a bunch of copy and pasting. Now, prompt chaining also allows us to use multiple [[Large Language Models (LLM)|large language models]] or even small language models to get better results. As you can see here, under Generate Ideas, under the prompt setting, I'm using [[GPT-4|GPT-4o]]. But on the email prompt, if we edit the prompt and click Settings, I'm using GPT-4o mini. So different models for different tasks.
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=190)** Overall, prompt chaining is a powerful orchestration technique that allows you to build powerful AI applications. Up next, you'll learn how to connect your AI application to a variety of sources with API calls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[GPT-4|Gpt-4o]] (2), [[Windows]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** gpt (2), o2_03 (1), api (1)
> **Exercise Files:** exercise files (3)
> **Analogies:** for example (2), similar to (1)
> **Cross-References:** go back to (2)
> **File Paths:** prompts.txt (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **UI Navigation:** click on (1)

#### [Calling APIs and connecting to databases](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=0)** - [Presenter] Making AI applications that are personalized unlocks a whole new level of user experiences. To achieve personalization, we need to be able to connect with APIs and [[Databases]]. API and database access allows us to pull user-specific information and allows the user to make real time changes. For example, if I'm checking into a flight, I'd want the AI application to know my itinerary, preferences, and when I make a seat selection, for me to receive an email with the new information, so our AI orchestrator needs to be able to support these database and API calls. There are a few ways to do so. The first one is by directly calling an API when your user reaches a certain milestone or part of the conversation, and the second method is to grant a large language model tool use. Let's go through the first one. Making direct API calls is a more traditional method, where we create business logic to check our conversation state. We then make the API call once a user reaches a certain milestone. For example, if the customer says, "I need a refund," and we go to the refund customer workflow, we would then have the business logic mapped out on how we would connect to the refund system. This provides us with strong controls of reads and writes, and the LLM is only used as a conversational component. With this approach, we would write the code for connecting our systems in a traditional fashion, utilizing security best practices like secrets management, lease privilege, and well-defined access patterns. The second approach is called tool use. With tool use, we define the different systems or tools
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=95)** an LLM can access with descriptions and directions, and based on user input, choose which tool to use. For example, if the user says, "I need a refund," the LLM would first choose the tools it needs to use. For example, out of check user info, get refund policy, and pay credit card, we would likely choose the first two options. Next, the LLM would go into a planning phase, where we would take the two tools that we selected and go ahead and call these APIs. This would hopefully result in us getting the same results as we did with a deterministic workflow. Now, what you might notice here is that tool use sometimes combines [[Routing]] when selecting the tools and the planning phase. Now, the reason I said that hopefully the LLM would do the same actions as we would do in the deterministic phase is because LLMs are non-deterministic by nature. This is one of the risks of tool use. Since we're using the LLM to choose tools and generate a plan, the outcomes might be quite different. Now, if you're building for an enterprise use case, the first deterministic option is likely a better solution. So to summarize the pros and cons, direct API calls make it easier to translate business logic into AI workflows. They're more deterministic and well-defined. However, they are less flexible and sometimes take longer to build these workflows. Now with tool use, you get more flexibility and a lesser need to rebuild business logic, but the trade-off is that these systems are less deterministic and require having very good documentation and [[Coding Practices]]. Otherwise, the LLM cannot select the correct tool. You also incur a higher latency
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=189)** and cost based on the LLM token use. Now, beyond direct API calls and tool use, you might have more advanced use cases, where you're actually reading and writing from multiple systems. Going back to our [[E-Commerce]] example, we might take in inputs from various different sources, such as user inputs, browsing histories, past orders, and our CRM in order to determine what we do next. Likewise, we save into multiple systems, as we discussed before. So overall, databases and API connections are an important part of AI systems that allow us to build powerful applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Routing]] (1), [[Coding Practices]] (1), [[E-Commerce]] (1)
> **Env Vars:** api (8), llm (8), crm (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [presenter] (1)

#### [AI workflows and agents](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=0)** - [Instructor] In the previous video, we briefly covered deterministic versus tool use for making API calls. In this video, we'll go into more details on these two approaches. We'll be talking about AI workflows and agents. As a recap, when using our AI orchestrator, we want to detect the user's intent. And based on the intent route to the correct action, that action could be as simple as a response or a series of API calls, verifications, and responses. To group these series of events together, we typically create a workflow. So to define an AI workflow more formally, we can say it's a series of events that help a user achieve a specific task. For example, when I'm visiting a pizza store, there might be multiple workflows that I follow, such as ordering a pizza, reordering a previous order, updating a payments method, or checking the order status. Now, let's say I select the order pizza workflow. This workflow might do a few things. For example, asking for the number of pizzas I'm ordering, selecting the toppings, and specifying if I want it for delivery or pickup. This process is well-defined, so it can easily be implemented by somebody in the operations team and a technical member. We can also combine workflows together. For example, the delivery or pickup step might be a nested workflow that has its own set of steps and events. Now, if we wanted to venture beyond the standardized process, we might allow our AI workflows to use tools and let the LMs create the logic on the fly. This gets closer to our automation dream of [[AI Agents]]. AI agents are one of those terms
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=93)** that have a different definition depending on who you ask. In this course, we'll define an AI agent as a system that can accomplish tasks to a similar fidelity as a person. So because this is outcome driven, the actual underlying implementation doesn't matter as much, and each AI agent might be implemented differently under the hood. So going back to our pizza example, if I was to call a pizza store, I should get a relatively similar experience whether I'm speaking to an AI agent or a person. Now, typically AI agents are associated with tool use, and this is because tool use allows us to handle many more cases giving this perceived agentic behavior. Now, the real question is should we allow our agents to handle edge cases? For example, if I showed up to a pizza parlor and asked one of the employees to sing some karaoke, they would likely, politely refuse. And these are based on the training principles that the employee has received. Likewise, for an AI agent, we might not want it to output the latest music. So depending on your risk profile and task, you might determine what kind of capabilities your AI agents have, and you should build for the best possible user experiences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (4)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** api (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Specialized large language models (LLMs)](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=0)** - [Instructor] It can be tough to keep up with the speed of LLM development. Every week, new models, techniques, and benchmarks come out. We can use this to our advantage by leveraging the right model for our tasks as we build the best AI application. In this video, we'll cover what specialized [[Large Language Models (LLM)|large language models]] are and how we can benefit from using them in an AI orchestrator. Specialized LLMs can vary in a few different ways. The first one is size, where smaller models are faster and cheaper, and larger ones often achieve higher accuracy. For example, there's [[GPT-4|GPT-4o]] and GPT-4o mini. The larger model, GPT-4o, usually does better at more complex tasks and synthesizing users' information. On the other hand, GPT-4o mini is faster and cheaper, so it can be used on simpler tasks. The second specialization is modality. You may have seen some demos before where LLMs can now handle images, videos, audio, and even multimodal capabilities. Depending on the task, we can select a different model. For example, we can use GPT-4o's Voice Mode when working with voice data, or [[Gemini]] Pro when working natively with PDFs. Finally, there are fine-tuned models. These models are trained on specific tasks or domains, such as being stronger in another language, like French, creating medical summaries or solving [[Microsoft Word|word]] problems. These models might be commercially available or something that your company has developed in-house, using your proprietary information. There are also many variations in the open-source community.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=95)** Now, using specific models allows us to build the best [[User Experience (UX)|user experience]], depending on their user workflow. For example, if we go back to our pizza order example, we might use Gemini Flash as our general router, ask the user for the number of pizzas and toppings, using GPT-4o mini. And finally, when we get to the payment step, we might use Claude Sonnet 3.5 to recognize a credit card and fill out the information based on that. So with an AI orchestrator, you can define which workflows, conditions, or users you'd like to use with which model. For example, when ordering pizza, we might use GPT-4o mini for the voice capability because it's faster, and use GPT-4o for the text modality. So we can use our orchestrator to determine which responses are better for which modality. Likewise, we can filter this on additional user information. For example, if we want the most correct answers, we we can provide our VIP users GPT-4o and our regular users GPT-4o mini. There are many ways to select which model you're going to use. Overall, a good AI orchestrator will let you connect to different and specialized models, making it easy for you to build and test the best application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4|Gpt-4o]] (10), [[Gemini]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Microsoft Word|Word]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** gpt (10), llm (1), vip (1)
> **Analogies:** for example (5), such as (1)
> **Versions:** 3.5 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. AI Orchestration for a Basic AI App

[↑ Back to Table of Contents](#table-of-contents)

#### [Building low-code vs. code](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=0)** - [Narrator] In this chapter, we'll synthesize what we've learned about AI orchestrators to build an AI application. We'll be building a coach that will help us onboard a new employee. And before we start building, we'll need to choose a platform to do so and how to resource our project. One of the big differentiators is focusing on low code versus code focus platforms. Low-code or no-code platforms allow business teams to quickly stand up prototypes and translate business requirements into technical ones. They also make it easier for non-technical domain experts to build and collaborate. Some platforms that exist in the space are Make, Zapier and Chatbase. When using traditional low-code platforms, teams often run into challenges when launching their applications into production. Launching to production requires integrations, testing, and evaluating the AI platform you've built. You may also need to plug into custom interfaces, models, or connectors. Something we've covered in earlier videos. This makes customization challenging. Switching our focus to code-based platforms, we can mitigate many of those challenges by applying years of software best practices into the AI space. This allows our applications to be more customizable, but come with a higher learning curve. Coding based AI orchestrators will also continue to benefit from the rising prominence of LM coding assistance where templating, editing and generating code will become even easier. You've likely heard of some coding AI orchestrators like [[LangChain]], [[LlamaIndex]], CrewAI and AutoGen. Now, what's interesting is that many AI orchestrators are moving towards a hybrid approach,
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=94)** providing a UI on top of core code experiences. This approach is helpful for building initial versions, cross-functional team communication and onboarding. Now, a few hybrid approaches are LangGraph, AI Studio, and Voiceflow. For this course, we'll be using Voiceflow to leverage the strong UI layer along with the extensibility to allow us to build a powerful application. So let's start building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (1), [[LlamaIndex]] (1)
> **CLI Commands:** make (2)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### [Visualizing an AI orchestration framework](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=0)** - [Instructor] We've talked about some of the different components of AI orchestrators. And in this video, we'll go into some more details of the capabilities of VoiceFlow and how it'll help us build our project, which is an onboarding agent. I've imported 03_02.vf from the exercise files, and I have it here open in the VoiceFlow editor. Let's start off at the workflow level. As mentioned earlier, a workflow is a way to group a sequence of actions you want a user to perform. For example, our AI coach has the capability to answer questions, book a meeting, help a user see current projects, recommend ideas, and more. I'm going to click onto the table and hit edit workflow. Now, here we can see a few steps. We're loading the user profile, then searching the knowledge base, and then creating an answer based on a prompt. After we create the answer, we then listen to user next steps. So let's go ahead and click on the create answer prompt, and we'll hit edit prompt. Here we can see we have a pretty comprehensive prompt that'll help us generate an answer. If we click on settings in the top right, we'll be able to see that we're using [[GPT-4|GPT-4o]] mini. We can also change the model here. Now, let's exit and close the prompt window. Let's head back to our main screen by hitting the back button in the top left. Now, in our left hand menu, let's click prompts. Now, within this prompts table view or prompt CMS, we'll be able to see all the prompts that we have and where they're being used. If we click on a specific prompt, it'll take us to the same screen that we saw earlier. Let's exit out of this prompt in the top right.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=94)** Now, we've also covered the concept of routers or intents. If we go to the left-hand side of our table and click on intents, we'll be able to see all the intents that are available to us. These intents are the ways that we enter into workflows. If you click preview in the top right-hand side, you'll be able to test how an intent works. For example, if I say I want to book a meeting and hit send, we can see that we've classified this utterance as book a meeting, which is correct. Let's exit out of the screen and head back to our left-hand side. Let's head up to the functions menu and click inside of it. Within here, we can see all the different functions that we can call. In this case, we have one, which is Save an Idea to Airtable. We can go ahead and click on Save Idea to Airtable, and we can see the function is opening up. This function is some [[JavaScript]] code that calls our Airtable database. If you're not as familiar with coding, no problem, you'll just be able to use this function out of the box. Now, that's an overview of our project and VoiceFlow. In the next few videos, we'll implement a few more workflows and API calls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4|Gpt-4o]] (1), [[JavaScript]] (1)
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** gpt (1), cms (1), api (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Building a simple AI app](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=0)** - [Instructor] In the last video, we got an overview of what a fairly advanced AI app looks like. In this video, we'll go through one workflow and learn how to publish it to a mock website. Our goal is to build an AI Team Coach. Whenever we have a question about internal team processes, we can ask it questions. Let's see how it works. I'm in Voiceflow right now with the project 03_03.vf from the Exercise Files. We'll also be asked to upload some knowledge to our project. So let's head over to the Exercise Files to see what else we have available. So under 03_03, we see that we have this team_knowledge.txt, which I have open right here. This has some information about our team. How large our team is, what is our team goal, and when is our standup? You can imagine that this file will be even bigger if we're using it for a real life use case. If we head back to the Exercise Files, we also have team_onboarding_page.[[HTML]]. If we head back to our browser, we can click on the Welcome Page in the top right. That's that file from the Exercise Files. So let's head back to Voiceflow and then click on the Knowledge tab. We're now going to upload our team knowledge into Voiceflow and it's going to make this information searchable by uploading it into a vector database. Let's click on Add Data Sources on the top right. Go to upload a file, and click Browse, and click on Team Knowledge, and hit Import. And there we go. The information has been indexed. We can click on the file to make sure that the information is as we expect.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=93)** There we go. Now, let's click back on the table. Let's go ahead and test our application end to end. We're going to go ahead and go the bottom right hand side here and click the Play button. And I'm going to type, "When is our team standup?" Hit Enter. Great. And there we go. We have an answer here. So, this looks like it's working. Let's go ahead and add it to our HTML page that we saw earlier. So, I'm going to go ahead on the left hand side and click on this sliding button, which says Publish. I'm going to go ahead and click Publish here and it's going to create a V1 of our agent. We'll give it a few seconds as it's compiling. Let's close this pop-up on the right hand side, and go ahead and go to the Integration page on the left hand side. Here we'll see some [[JavaScript]] that will allow us to add our agent to our website. Let's go ahead and copy everything between the script tags. Copy that in. And head over to our Welcome Page. And do a right-click to do an Inspect. We are now in Developer Mode in Chrome. Let's head over to the console on the right hand tab. Let's go ahead and paste the code we saw from Voiceflow. I'm going to hit Enter. Now, if this didn't work for you, you might need to type "allow pasting." But otherwise, let's keep going. You can see now, we got this little bubble on the bottom right hand side. This is our AI application. Let's open it up. Let's go ahead and type our question. "When is our team standup?" And there we are. We have used our AI Orchestrator Voiceflow
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=186)** to deploy an application end to end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (1)
> **UI Navigation:** click on (6), go to (2), right-click (1)
> **Exercise Files:** exercise files (4)
> **File Paths:** team_knowledge.txt (1), team_onboarding_page.html (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** team_knowledge (1), team_onboarding_page (1)
> **Env Vars:** html (1)
> **Cross-References:** in the last (1)

#### [Implementing multiple AI workflows](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=0)** - [Instructor] So far, we've built basic question and answer capabilities into our AI onboarder. So let's add some more workflows to make it more powerful. I have O3_04b open from the exercise files, and I'm going to head over to the workflow CMS. We're going to be adding three new workflows to our AI coach, Current Projects, Project Complete, and New Project Added. As you can see here, I've already created Project Added and Project Complete. These are a little bit more complex, so I've given you a head start. Let's create the Get Projects workflow. So I'm going to head over to the top right-hand corner and click New workflow. Let's type in Get Projects, and let's type in description, "Letting the user see their current projects," and let's hit Create workflow. Now, let's click on Add trigger and click on Triggers in the top right. We're going to hit Intent, and we're going to scroll down. We're going to click on Current Projects. I've already created an intent, but let's add a few more phrases to it. I'm going to click on the current project's intent and click the Edit button. So you can see here, we have a description and some utterances. Let's add one more utterance and say, "What is my current project?" And hit Close. All right, now, let's output the current projects that the user has. I'm going to head over to Talk on the left-hand bar here and drag out a message step.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=93)** I'm going to call it Current Tasks, and I'm going to have the message say, "Your current projects are two," and then I'm going to add a variable here, which is Projects. Now, let's click on the canvas, and you can see that it shows up. Now, let's add another message, "Anything else I can help you with?" And, finally, let's add a Listen step. So going over to my menu, go in to Choice, and say Listening for a trigger. So this will allow the user to continue the conversation, and, finally, let's connect it to our current intent by going to the Current Projects and connecting it to Current Tasks, great. So where are these projects actually coming from? I'm going to head to the top left-hand corner and hit this back arrow, then I'm going to scroll down on the left-hand side and go to Variables. I'm going to scroll down until I get to the projects variable. I'm going to click on the table entry and see we have a default value. So in here, we have a few different projects, one-on-one with the manager, find a first issue bug, and complete the HR onboarding. So if we never set this variable when we run the project, this is what the default value will be. Let's go ahead to the bottom left and return to our workflow. Let's go ahead to the top right-hand corner and hit Run and hit Train Agent. So this is going to update based on the intent updates
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=189)** we made a little bit earlier. We're going to click on Run Test. We can see some debug variables here. Let's actually turn these off. You can head up to the top right hand corner, click on the gear icon, and turn off debug mode. Let's go back to our widget, and let's type in, "I want to see my current projects," and hit Enter. Now, we jump to that workflow. Now, if we wanted to clean up our current projects, we could either format it more nicely with Markdown or we could use an LLM to clean it up. So now, we have a basic Get Projects workflow working. Let's see how Projects Added and Projects Complete actually look like. I'm going to go ahead on the left-hand side on Workflows, scroll down to Project Added. I'm going to click on it. Okay, so here, we can see we have our intent at a project, and then we do a few different steps. First, we're going to set the project variable class utterance, and then we're going to use a prompt to process the project. Let's go ahead and click on this prompt. I'm going to hit Edit prompt. In this prompt, we're going to clean up what the user has said and output those results to make it a little bit cleaner. Let's close this prompt, and we can go ahead and click on the Add project, and you can see here, this is a set AI step. What this is doing is using a prompt to demonstrate the behavior on how to add a new project to our list. So in this case, we're using a one-shot learning approach,
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=283)** and if we scroll down, we can see we're reapplying it to the project's variable. All right, so let's go ahead and run our assistant. On the bottom right-hand corner, I'm going to hit Play. I'm going to type, "I want to add a project. Have a 1 on 1 with my skip manager." All right, there we go. As you can see here, we added the project, and we outputted this. We then updated the list of projects and outputted the results. All right, great, that's the second workflow. Now, let's head over to Project Complete on the left-hand side. So let's close our prototype view. Okay. So scrolling over, we can see we have our Project Completed intent, and then what we're going to do is check if the value of that completed project matches with our list. So let's click on this if condition and see that we're using a prompt to classify it. So let's click on this prompt. So once again, we're using a few shot learning technique where we compare the list of projects against the project that the user has proposed, and then we output one or zero, zero being that the project is not on the list and one, the project is on the list. So let's go ahead and close this project's view. Let's go ahead and run this workflow. Going back to our bottom right-hand side, let's say, "I have completed my 1 on 1 with my manager."
>
> **[6:14](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=374)** Right, there we go. So we have removed the one-on-one from our list, and we've outputted it. In this case, the output was a little bit funky. Looks like the LLM didn't get it perfect on the first try. This happens. So there we have it. We've successfully added three new workflows to our AI coach. We're able to update different variables and make sure that the user could get the responses they're expecting. Now, in the next video, we'll incorporate APIs into our application to be able to read projects from an external database.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (13), scroll down (5), go to (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** llm (2), cms (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding API calls to your AI app](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=0)** - [Instructor] In this video, we're going to make our project list dynamic by connecting to a database. In this case we'll use Airtable, but you can use any database of your choice. Let's open up 03_05 from our exercise files, and see the workflows we have. We'll head over into the current project section. So you can see here we have a pretty basic workflow. We load some projects from Airtable. We then clean up the results and display it to the user. So let's go ahead and open up Airtable. I'm clicking into a new tab. In Airtable, there are a few concepts to set up your project. First you create your base, in this case called ideas for me, and then you create a table. For me, it's called projects. I then have included three rows in my projects table with the name Dennis, and the different project names. So how do I actually access this database? Let's head back to Voiceflow then hit the back button in the top left, and go to the settings. I'm going to click on Secrets on the left hand side. So in this case, I've added three secret values that let me connect to the database, the Airtable API token, the Airtable BaseId, and the Airtable TableId. So the BaseId and TableId are pretty easy to find. Let's head back to Airtable. The BaseId is what I have highlighted here, this little Id that starts with app. Next, we have TableId, which I've highlighted on the screen now. It starts off with TBL. So we can copy these in and add them to our secrets. We can head back to Voiceflow
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=94)** and click on the three dots on the right hand side, and click edit. In this case, Airtable BaseId is a masked value, so I can see it, and edit it if I click on the eye. Let's click cancel. Likewise with the Air TableId. So you can go ahead and copy that into our secrets. Heading to Airtable, click on table, seeing the value, and pasting it in. And clicking save. Now going up to Airtable API token. Let's go ahead and hit edit. In this case, it has a restricted visibility, so we won't be able to see this value. We'll have to copy in a new value of the token. So let's head back to Airtable. We're going to go to the right hand side, and we're going to click on builder hub. In this case, on the left hand side, I'm going to click on personal access [[Tokens]], and then create a new token. I'm going to call it 03_05, but you can name it anything. Let's add a scope, which means the ability to access the database. So we're going to add permissions for data records read, and data records write, and we're going to have access to our ideas base. Let's go ahead and create this token. There we go. So we see the token here. Let's copy it. And hit done. Now let's head back to 03_05 in Voiceflow, and paste in this token.
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=189)** And let's hit save. Alright, so you should now be able to connect to your Airtable database. Let's head back to our workflows, and click on current projects. So if we open up this function on our current projects, we'll see that we pass in the Airtable API token, the Table Id, the Base Id, and our name. And in return, we get the projects. So let's go ahead and run our AI agent. Going to go to the top right hand side and click run. I'm going to make sure that we've trained it successfully. Looks like it is. That's great. Let's go ahead and run our test. So let's ask the question, what are my current projects? Alright, there we go. We get our response. Let's head over to Airtable, and let's update this list of tasks. I'm going to add this for myself, and I'm going to add, create an AI agent. So this should auto save. Let's go back to Voiceflow. And let's ask the same question again. What are my current projects? Hit enter. And you can see here we have our updated list. Now because this is an AI prompt cleaning it up, sometimes the order changes. So there we have it. We now have connected our AI agent to a database to be able to [[Fetch]] the most recent results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Fetch]] (1)
> **UI Navigation:** click on (7), go to (3)
> **Env Vars:** api (3), tbl (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### [Challenge: Building an AI coach](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=0)** - [Instructor] Now it's your turn to complete a challenge. Your challenge is to add a brainstorming ideas workflow to your AI coach. The goal of this challenge is to allow employees to brainstorm ideas and ask for feedback. This task should take under an hour to complete, but it's quite open-ended if you're feeling creative. You can find a starter project in the exercise files under 03_06. Don't forget about intense workflows and prompting. Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** starter project (1), exercise files (1)
> **CLI Commands:** find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Building an AI coach](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=0)** - [Instructor] Let's go through a sample solution to this challenge. I'm here in Voiceflow in project 03_07. Now, I've added a new workflow called Recommend Ideas. Let's go ahead and click on it. And edit the workflow. So this workflow is quite simple. We have a Recommend Ideas intent. We have a prompt called Brainstorm ideas. And finally, we have a capture step that listens for the last thing that the user said. Let's go ahead and click on the Brainstorm ideas prompt and edit it. So this prompt has two main components. The first thing that you'll notice is that we're using the conversation history with the vf_memory variable. Then in our prompt, we ask the LLM to help the user brainstorm ideas. We want to guide the model so that it's supportive and understanding, so we include that into our prompt. And finally, we pass in the last utterance to make sure that the brainstorming idea or question of the user gets answered. So, let's exit. Go to the top right-hand Run. Make sure that the model is trained. And hit Run Test. Now, let's ask a question that many of us feel, how do I approach a one-on-one with my manager? "How would I approach a one-on-one with my manager? I don't know how to ask good questions. Any ideas?" So you can see here that the model is quite supportive,
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=95)** reaffirming that this is a good question, and we have some recommendations that go on here. All right, let's see if we can ask a follow-up question. "Do you have any ideas on how to ask for more interesting work?" All right, there we go. So we are able to answer another question and brainstorm more ideas on how to approach this problem. So that's a sample solution to this challenge. There are many ways to expand this, so if you have any interesting ideas, feel free to build them out and share them on [[LinkedIn]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** vf_memory (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Conclusion](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=1)** - Congratulations on completing this course. By now, you've learned some [[AI Orchestration]] key concepts, but keep in mind that the open source AI community is always rapidly evolving. You can follow me on [[LinkedIn]] where I share new models and case study techniques as they come out. You can also watch my other courses, like Building Apps with AI Tools or AI Pricing: A Technical Breakdown of Cost and Revenue Opportunities to learn more. So be sure to keep learning about [[Generative AI|GenAI]] and add this skill set to your tool belt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Orchestration]] (1), [[LinkedIn]] (1), [[Generative AI|Genai]] (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Denys Linkov]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- AI Orchestration

## Path Context

### In [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]
← [[AI Foundations- Ideating and Prototyping]] | **3 of 6** | [[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]] →

## Part of

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Appears In

- [[Building AI Products- Understanding the Workflow Professional Certificate by LinkedIn Learning]]

## Related Courses

_Courses sharing skills:_

- [[The AI Ecosystem for Developers- Models, Datasets, and APIs]] — Artificial Intelligence (AI), AI Software Development, Large Language Models (LLM)
- [[AI Orchestration- Developing and Testing Your AI Prototype]] — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [[AI Orchestration- Planning and Orchestrating for Observability]] — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)