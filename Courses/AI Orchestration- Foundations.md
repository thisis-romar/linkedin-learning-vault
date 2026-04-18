---
type: course
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
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/ai-orchestration
status: not-started
created: 2026-04-17
---

# AI Orchestration: Foundations

> This course outlines how to design and build more complex LLM applications, showcasing the importance of orchestration as part of the process. Topics covered include the components of AI orchestrators, including input and output interfaces, prompt chaining, APIs, AI workflows and agents, and specialized LLMs. Along the way, instructor Denys Linkov shows you how to orchestrate AI to create and mana

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations) | 45m | Intermediate | 6K learners

## Instructor

- [[Denys Linkov]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- AI Orchestration

## Table of Contents

### Introduction

#### Learn the basics of AI orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=0)** - Building AI applications can be a complex process, so how do we put all the right pieces together?
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=5)** I'm Denys Linkov, Machine Learning Leader, and I'll be helping you learn all about AI orchestrators.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=11)** In this course, I'll walk you through a hands-on approach to use AI orchestrators, covering their architecture components and key considerations.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=20)** You'll learn how AI orchestrators can help you build great AI products by connecting user interfaces, business systems, LLMs, and more into one cohesive product.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=30)** Are you ready?
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-foundations/learn-the-basics-of-ai-orchestration?u=76281980&t=31)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - building (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=0)** - [Instructor] In this video, we'll set up our environment so you can get hands-on with AI orchestrators.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=5)** This course assumes basic knowledge of LMS and how to prompt them.
>
> **[0:09](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=9)** We'll be writing some prompts when building our AI projects.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=12)** If you're not familiar with prompting, you can check out some of my intro to prompting courses on LinkedIn Learning.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=17)** Next, we'll be using Voice Load as our main AI orchestrator.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=20)** If you haven't used voice load before, you can create a free account at creator.[voiceload.com](https://voiceload.com).
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=26)** After creating your account, you can log in and once you log in, you'll be able to see your workspace.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=32)** You'll likely be on a free plan, so it might look slightly different.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=36)** Once in the workspace, you can import voice load files and we have provided some in their exercise files so you can follow along.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=42)** We can go to the top rate, click import.VFfile, and we can click on a file and open it.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=50)** Then we can go inside of that file and get to the voice flow editor.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=54)** We'll be going through some more details on how to use Voice Load in the later videos, and we'll also be using Airtable to store some information for our AI Orchestrator.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=63)** Nut you can use any database that you want.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=65)** Airtable is also free to use, so we can create an account and sign in.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=70)** Once you're signed in, you'll be able to create a base which contains many tables of information.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=75)** Let's click on My Ideas base and see that I have two different tables here, projects and table one.
>
> **[1:21](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=81)** You'll then be able to add rows without the need to code, just like using a spreadsheet.
>
> **[1:26](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=86)** We'll be revisiting how to use Airtable in a later video and how to connect it to our AI orchestrator.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-foundations/setting-up-your-environment?u=76281980&t=91)** Now that we've covered the prerequisites, let's get started learning about AI orchestrators.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), import. (1)
> **UI Navigation:** click on (2), go to (1)
> **URLs:** [voiceload.com](https://voiceload.com) (1)
> **Env Vars:** lms (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Why Use AI Orchestration?

#### When using ChatGPT isn't enough
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=0)** - [Instructor] ChatGPT and other large language models have caused a large wave of transformation in the past few years.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=6)** You may have used them to write emails, organize your ideas, or build some dashboards.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=11)** In other cases, you might have noticed that using the model was not enough.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=15)** You might need to do a few tasks sequentially in a row, connect to custom data source, or build a more custom interface.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=22)** For example, if I'm using a model to automate customer support for my business, I need to provide context to the model about key information, add a user interface to my website, and connect to internal systems.
>
> **[0:34](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=34)** These are the use cases that often have the most value, and certainly one model isn't going to be enough.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=41)** Depending on the task, we may need to go beyond large language models.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-foundations/when-using-chatgpt-isn-t-enough?u=76281980&t=45)** To connect and control these operations, we'll need an AI orchestration layer, something we'll learn about coming up next.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### What is AI orchestration, and why is it useful?
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=0)** - [Instructor] To solve our more complex AI tasks, let's dive into AI Orchestrators.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=5)** To start, what exactly is an AI orchestrator?
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=8)** An AI orchestrator is a way to connect many AI tools together, including models, data sources, and APIs.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=16)** It allows you to build more complex applications for use cases that are impactful to your business.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=21)** For example, let's see how we can map our customer support use case with an AI orchestrator.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=27)** To start, we'd like to use GPT-4o mini as our main model; fast, cheap, and with a large context window.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=35)** Next, we'd like to use information from our website to answer FAQs, so that when user ask them, we'll use them as a response.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=43)** We also want to update our ticketing systems, such as Zendesk or Salesforce.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=47)** And finally, we want a chat widget with custom branding to appear on the website.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=52)** Now, we have a basic customer support AI application.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=56)** Rather than building all of these integrations and connections from scratch, we'll use an AI orchestrator to let us get to an AI application faster and deploy it to production.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=66)** There are a few AI orchestrators you might have heard of before, such as LangChain, CrewAI, LlamaIndex, and Voiceflow.
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-foundations/what-is-ai-orchestration-and-why-is-it-useful?u=76281980&t=74)** Coming up, we'll cover the specific components of an AI orchestrator in more detail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** gpt (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Architecture of AI orchestrators
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=0)** - [Instructor] Let's go into more details about the architecture of an AI orchestrator.
>
> **[0:04](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=4)** We have eight essential components.
>
> **[0:07](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=7)** Let's start with the first one, which is the input interface.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=10)** AI orchestrators should have a way to take input from a user, whether through voice, chat, or an API.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=18)** A standard input interface will allow us to use AI and Business Logic to accomplish our tasks.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=24)** Now, to decide which logic to use.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=25)** We need to have a router, which is our second component.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=28)** Routing helps us figure out what kind of response or workflow to activate when a user says a phrase.
>
> **[0:34](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=34)** For example, if someone says, "I need a refund," we want to recognize that and handle the response.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=41)** In this case, we're sending the user to the refund a customer workflow.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=45)** Other names for the router you might have heard of are Semantic Router or Intent Classifier.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=51)** Now our third component is the workflow manager.
>
> **[0:53](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=53)** Routing a user response becomes easier when you can select a workflow to follow.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=58)** In the previous example, we routed the user to the refund a customer workflow.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=63)** But in the simplest application, a workflow might be as simple as prompting an LLM with a user question and responding directly.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=70)** This leads us to our fourth component, which is the LLM.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=73)** This forms the backbone of our application.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=76)** We want to select a model that meets our requirements in terms of accuracy, cost, latency, among many other factors.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=83)** We can also choose a model based on each workflow or combine several models together.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=89)** Now, our fifth component is the state manager.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=91)** The state manager maintains a list of properties and variables used during a conversation or automation run.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=97)** For example, if two separate people are asking for refunds, we want to keep track of what step they're each on and keep their information isolated.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=105)** Now sixth component is a way to connect to other systems using APIs similar to a web or mobile application.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=112)** An AI application needs to be able to read and write different forms of data, such as looking up information of a user currently using that application, or in a previous example, refunding that user.
>
> **[2:05](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=125)** Now to get information to the user, we move on to our seventh component, which is responding to the user in some kind of way.
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=132)** Our orchestrator should manage responses, whether they're directly from an LLM or pre-written.
>
> **[2:18](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=138)** In our example, we might want to respond to the user saying, "Sure, let me help you with that."
>
> **[2:23](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=143)** These responses can be text or voice-based.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=146)** Finally, we have our eighth component, which is the need for guardrails.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=150)** To minimize LLM hallucinations and handle malicious user input, we need a way to add guardrails to our application, and a good orchestrator will help us do that.
>
> **[2:40](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=160)** In our example, if a user said, "Delete your database," we might want to trigger our guardrail workflow and say, "Sorry, I can only help with banking services."
>
> **[2:50](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=170)** Or another example might be ignore previous instructions.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=174)** So overall AI orchestrators are quite comprehensive.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-foundations/architecture-of-ai-orchestrator?u=76281980&t=177)** In the next few chapters, we'll go through the details of each component as we build an application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), case, (1), finally, (1), delete (1)
> **Env Vars:** llm (4), api (1)
> **Analogies:** for example (2), similar to (1), such as (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Components of an AI Orchestrator

#### Input interface for AI orchestrators
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=0)** - [Presenter] One of the magical moments when ChatGPT first came out was the ability to just type, ask a question, and get a plausible answer.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=8)** This method of seamlessly inputting questions into an AI system set a bar for AI applications.
>
> **[0:14](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=14)** Here I'll cover the different input interfaces an AI orchestrator should support to enable the strong user experience.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=21)** Inputting information into an AI system can take many forms.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=25)** It can be a voice conversation with a user expectation of millisecond latencies, or it can be a standard chat support with the expectation of seconds, or in an email support use cases, minutes might be an acceptable latency for users.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=41)** So depending on what kind of application and use case you're building, you'll need to select the right interface for your application.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=48)** AI orchestrators can then be helpful in a few ways when building input interfaces.
>
> **[0:53](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=53)** They can provide pre-built examples, let you build custom logic for handling interfaces, and provide extensibility to customize based on your branding and visual guidelines.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=64)** Now, going beyond one interface, an interesting recent development has been the emergence of multimodal models and interfaces, meaning that you can combine modalities like image and text to get a more complete AI experience.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=77)** To go through a more concrete example, let's say we have an AI chat bot for an airline.
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=82)** We might want to upload a picture of our passport to check in or do a visual seat selection.
>
> **[1:27](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=87)** Now, overall, AI orchestrators can make it much easier to handle user inputs, allowing users to use AI applications proficiently.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-foundations/input-interface-for-ai-orchestrators?u=76281980&t=96)** Now that we've talked about inputs, we'll cover output interfaces up next.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (2), type, (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [presenter] (1)

#### Output interfaces for AI orchestrators
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=0)** - [Instructor] Strong responses define an AI system with accuracy, legibility and ultimately helping our user solve their problem being the key measurements.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=10)** To help deliver these strong responses, AI orchestrators should provide a solid foundation for building good outputs.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=16)** Just like inputs, outputs depend on the goal of the application, with voice and text responses being common, but richer outputs create a better user experience with things like buttons, links, emojis, cards and carousels and even custom interfaces helping to create a great user experience.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=36)** Depending on the application, these responses would be different.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=39)** A support application may concisely articulate the instructions that need to be followed, while an e-commerce store might have the images of the products being listed.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=48)** Our AI orchestrator should make it easy for us to get the input from a system passed to the model and then get the output to our users.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=56)** These responses might also go to multiple locations, such as sending a user confirmation message, recording the response in a CRM and sending a follow-up text or email later on.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=68)** We might also save certain parts of the output into a variable that we can reuse later in the conversation, such as giving our AI application memory.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=76)** Last but not least, when we return responses to a user, we can choose to return it all at once or stream it back like ChatGPT.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-foundations/output-interfaces-for-ai-orchestrators?u=76281980&t=84)** Now that we've covered inputs and outputs, we'll learn more about building powerful AI applications with prompt chain.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), just like (1)
> **CLI Commands:** make (1)
> **Env Vars:** crm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Orchestrating LLMs with prompt chaining
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=0)** - [Instructor] Let's discuss how we can connect multiple LLMs together to build a more helpful AI application, using a technique called Prompt Chaining.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=8)** To start, the most basic AI application will have an input, a model, and an output.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=15)** For example, if we think about [chatgpt.com](https://chatgpt.com) as an AI application, we provide an input as text, we select a model we want to use, and we generate a response.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=26)** In this case, counting to 10.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=28)** If we would like to do something more complex, for example, generating a list of ideas for an event and then writing an email, we can use a technique called prompt chaining to accomplish both tasks.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=39)** First, we use our first prompt written here to generate a list of ideas, and then we save the results.
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=45)** Then we use a second prompt to generate the email using the previous output, and we can show that to the user.
>
> **[0:51](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=51)** I can manually do this in ChatGPT with two different windows.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=55)** I'm going to be using prompts from the Exercise Files located under 02_03.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=61)** So under Exercise Files, I'll head over to prompts.txt.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=65)** So let's go ahead and copy this first prompt and head back to ChatGPT.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=69)** Going to paste my prompt and hit Enter.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=73)** All right, here we go, we have three different ideas.
>
> **[1:16](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=76)** Let's go ahead and head back to our prompts and copy the second prompt.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=80)** Let's head back to ChatGPT and open up our second tab.
>
> **[1:24](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=84)** We're going to paste in our prompt, go back to our first tab and copy these ideas.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=90)** We'll go back to our second tab.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=92)** We're going to replace these ideas with the previous ChatGPT outputs.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=96)** Now let's hit Enter.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=97)** And there we go, we have an email.
>
> **[1:40](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=100)** Now this was fairly manual and took a lot of effort, so let's do this in Voiceflow where it's much easier to do so.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=107)** Let's head over to Voiceflow and open up O2_03 from the Exercise Files.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=112)** As you can see here, I'm in the home workflow and I have two different steps in my workflow.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=117)** First, I have the ideas generation, and next, I have the email generation.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=121)** So if we click on Generate Ideas, we'll see that we have our prompt here and we save it to an ideas variable on the right-hand side.
>
> **[2:09](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=129)** We then output our ideas to the user, and after that, move on to generating the email.
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=135)** You can see here that I can edit the prompt and see what it is.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=139)** It's very similar to what we did before.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=141)** I'm going to exit out of this Voiceflow window and click Run under the Ideas button.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=148)** All right, here we go, we can see the responses.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=150)** First, we generated the ideas up here, Charity Fun Run, Silent Auction and Gala, and Community Bake Sale and Food Drive.
>
> **[2:37](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=157)** The ideas that you got might be different.
>
> **[2:40](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=160)** And then afterwards we generated our email.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=163)** So this took one button click rather than a bunch of copy and pasting.
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=167)** Now, prompt chaining also allows us to use multiple large language models or even small language models to get better results.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=174)** As you can see here, under Generate Ideas, under the prompt setting, I'm using GPT-4o.
>
> **[3:00](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=180)** But on the email prompt, if we edit the prompt and click Settings, I'm using GPT-4o mini.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=187)** So different models for different tasks.
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=190)** Overall, prompt chaining is a powerful orchestration technique that allows you to build powerful AI applications.
>
> **[3:17](https://www.linkedin.com/learning/ai-orchestration-foundations/orchestrating-llms-with-prompt-chaining?u=76281980&t=197)** Up next, you'll learn how to connect your AI application to a variety of sources with API calls.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1)
> **Env Vars:** gpt (2), o2_03 (1), api (1)
> **Exercise Files:** exercise files (3)
> **Analogies:** for example (2), similar to (1)
> **Cross-References:** go back to (2)
> **File Paths:** prompts.txt (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **UI Navigation:** click on (1)

#### Calling APIs and connecting to databases
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=0)** - [Presenter] Making AI applications that are personalized unlocks a whole new level of user experiences.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=6)** To achieve personalization, we need to be able to connect with APIs and databases.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=12)** API and database access allows us to pull user-specific information and allows the user to make real time changes.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=19)** For example, if I'm checking into a flight, I'd want the AI application to know my itinerary, preferences, and when I make a seat selection, for me to receive an email with the new information, so our AI orchestrator needs to be able to support these database and API calls.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=35)** There are a few ways to do so.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=37)** The first one is by directly calling an API when your user reaches a certain milestone or part of the conversation, and the second method is to grant a large language model tool use.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=48)** Let's go through the first one.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=50)** Making direct API calls is a more traditional method, where we create business logic to check our conversation state.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=57)** We then make the API call once a user reaches a certain milestone.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=60)** For example, if the customer says, "I need a refund," and we go to the refund customer workflow, we would then have the business logic mapped out on how we would connect to the refund system.
>
> **[1:11](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=71)** This provides us with strong controls of reads and writes, and the LLM is only used as a conversational component.
>
> **[1:18](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=78)** With this approach, we would write the code for connecting our systems in a traditional fashion, utilizing security best practices like secrets management, lease privilege, and well-defined access patterns.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=89)** The second approach is called tool use.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=92)** With tool use, we define the different systems or tools an LLM can access with descriptions and directions, and based on user input, choose which tool to use.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=101)** For example, if the user says, "I need a refund," the LLM would first choose the tools it needs to use.
>
> **[1:47](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=107)** For example, out of check user info, get refund policy, and pay credit card, we would likely choose the first two options.
>
> **[1:55](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=115)** Next, the LLM would go into a planning phase, where we would take the two tools that we selected and go ahead and call these APIs.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=123)** This would hopefully result in us getting the same results as we did with a deterministic workflow.
>
> **[2:08](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=128)** Now, what you might notice here is that tool use sometimes combines routing when selecting the tools and the planning phase.
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=134)** Now, the reason I said that hopefully the LLM would do the same actions as we would do in the deterministic phase is because LLMs are non-deterministic by nature.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=144)** This is one of the risks of tool use.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=146)** Since we're using the LLM to choose tools and generate a plan, the outcomes might be quite different.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=152)** Now, if you're building for an enterprise use case, the first deterministic option is likely a better solution.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=158)** So to summarize the pros and cons, direct API calls make it easier to translate business logic into AI workflows.
>
> **[2:45](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=165)** They're more deterministic and well-defined.
>
> **[2:48](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=168)** However, they are less flexible and sometimes take longer to build these workflows.
>
> **[2:53](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=173)** Now with tool use, you get more flexibility and a lesser need to rebuild business logic, but the trade-off is that these systems are less deterministic and require having very good documentation and coding practices.
>
> **[3:04](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=184)** Otherwise, the LLM cannot select the correct tool.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=188)** You also incur a higher latency and cost based on the LLM token use.
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=192)** Now, beyond direct API calls and tool use, you might have more advanced use cases, where you're actually reading and writing from multiple systems.
>
> **[3:20](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=200)** Going back to our e-commerce example, we might take in inputs from various different sources, such as user inputs, browsing histories, past orders, and our CRM in order to determine what we do next.
>
> **[3:33](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=213)** Likewise, we save into multiple systems, as we discussed before.
>
> **[3:37](https://www.linkedin.com/learning/ai-orchestration-foundations/calling-apis-and-connecting-to-databases?u=76281980&t=217)** So overall, databases and API connections are an important part of AI systems that allow us to build powerful applications.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), llm (8), crm (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (4)
> **Code Keywords:** let (1), case, (1), require (1)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [presenter] (1)

#### AI workflows and agents
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=0)** - [Instructor] In the previous video, we briefly covered deterministic versus tool use for making API calls.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=6)** In this video, we'll go into more details on these two approaches.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=10)** We'll be talking about AI workflows and agents.
>
> **[0:13](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=13)** As a recap, when using our AI orchestrator, we want to detect the user's intent.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=18)** And based on the intent route to the correct action, that action could be as simple as a response or a series of API calls, verifications, and responses.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=27)** To group these series of events together, we typically create a workflow.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=31)** So to define an AI workflow more formally, we can say it's a series of events that help a user achieve a specific task.
>
> **[0:39](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=39)** For example, when I'm visiting a pizza store, there might be multiple workflows that I follow, such as ordering a pizza, reordering a previous order, updating a payments method, or checking the order status.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=50)** Now, let's say I select the order pizza workflow.
>
> **[0:53](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=53)** This workflow might do a few things.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=55)** For example, asking for the number of pizzas I'm ordering, selecting the toppings, and specifying if I want it for delivery or pickup.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=63)** This process is well-defined, so it can easily be implemented by somebody in the operations team and a technical member.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=70)** We can also combine workflows together.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=72)** For example, the delivery or pickup step might be a nested workflow that has its own set of steps and events.
>
> **[1:19](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=79)** Now, if we wanted to venture beyond the standardized process, we might allow our AI workflows to use tools and let the LMs create the logic on the fly.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=88)** This gets closer to our automation dream of AI agents.
>
> **[1:31](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=91)** AI agents are one of those terms that have a different definition depending on who you ask.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=96)** In this course, we'll define an AI agent as a system that can accomplish tasks to a similar fidelity as a person.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=103)** So because this is outcome driven, the actual underlying implementation doesn't matter as much, and each AI agent might be implemented differently under the hood.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=112)** So going back to our pizza example, if I was to call a pizza store, I should get a relatively similar experience whether I'm speaking to an AI agent or a person.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=121)** Now, typically AI agents are associated with tool use, and this is because tool use allows us to handle many more cases giving this perceived agentic behavior.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=131)** Now, the real question is should we allow our agents to handle edge cases?
>
> **[2:15](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=135)** For example, if I showed up to a pizza parlor and asked one of the employees to sing some karaoke, they would likely, politely refuse.
>
> **[2:23](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=143)** And these are based on the training principles that the employee has received.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=148)** Likewise, for an AI agent, we might not want it to output the latest music.
>
> **[2:32](https://www.linkedin.com/learning/ai-orchestration-foundations/ai-workflows-and-agents?u=76281980&t=152)** So depending on your risk profile and task, you might determine what kind of capabilities your AI agents have, and you should build for the best possible user experiences.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (1)
> **Code Keywords:** let (2)
> **Env Vars:** api (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Specialized large language models (LLMs)
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=0)** - [Instructor] It can be tough to keep up with the speed of LLM development.
>
> **[0:04](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=4)** Every week, new models, techniques, and benchmarks come out.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=8)** We can use this to our advantage by leveraging the right model for our tasks as we build the best AI application.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=15)** In this video, we'll cover what specialized large language models are and how we can benefit from using them in an AI orchestrator.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=22)** Specialized LLMs can vary in a few different ways.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=25)** The first one is size, where smaller models are faster and cheaper, and larger ones often achieve higher accuracy.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=32)** For example, there's GPT-4o and GPT-4o mini.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=36)** The larger model, GPT-4o, usually does better at more complex tasks and synthesizing users' information.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=43)** On the other hand, GPT-4o mini is faster and cheaper, so it can be used on simpler tasks.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=50)** The second specialization is modality.
>
> **[0:53](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=53)** You may have seen some demos before where LLMs can now handle images, videos, audio, and even multimodal capabilities.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=60)** Depending on the task, we can select a different model.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=64)** For example, we can use GPT-4o's Voice Mode when working with voice data, or Gemini Pro when working natively with PDFs.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=72)** Finally, there are fine-tuned models.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=75)** These models are trained on specific tasks or domains, such as being stronger in another language, like French, creating medical summaries or solving word problems.
>
> **[1:25](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=85)** These models might be commercially available or something that your company has developed in-house, using your proprietary information.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=92)** There are also many variations in the open-source community.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=95)** Now, using specific models allows us to build the best user experience, depending on their user workflow.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=101)** For example, if we go back to our pizza order example, we might use Gemini Flash as our general router, ask the user for the number of pizzas and toppings, using GPT-4o mini.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=112)** And finally, when we get to the payment step, we might use Claude Sonnet 3.5 to recognize a credit card and fill out the information based on that.
>
> **[2:01](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=121)** So with an AI orchestrator, you can define which workflows, conditions, or users you'd like to use with which model.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=127)** For example, when ordering pizza, we might use GPT-4o mini for the voice capability because it's faster, and use GPT-4o for the text modality.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=137)** So we can use our orchestrator to determine which responses are better for which modality.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=142)** Likewise, we can filter this on additional user information.
>
> **[2:25](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=145)** For example, if we want the most correct answers, we we can provide our VIP users GPT-4o and our regular users GPT-4o mini.
>
> **[2:34](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=154)** There are many ways to select which model you're going to use.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-foundations/specialized-large-language-models-llms?u=76281980&t=158)** Overall, a good AI orchestrator will let you connect to different and specialized models, making it easy for you to build and test the best application.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (10), llm (1), vip (1)
> **Analogies:** for example (5), such as (1)
> **Code Keywords:** finally, (2), let (1)
> **Versions:** 3.5 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. AI Orchestration for a Basic AI App

#### Building low-code vs. code
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=0)** - [Narrator] In this chapter, we'll synthesize what we've learned about AI orchestrators to build an AI application.
>
> **[0:06](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=6)** We'll be building a coach that will help us onboard a new employee.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=10)** And before we start building, we'll need to choose a platform to do so and how to resource our project.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=15)** One of the big differentiators is focusing on low code versus code focus platforms.
>
> **[0:20](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=20)** Low-code or no-code platforms allow business teams to quickly stand up prototypes and translate business requirements into technical ones.
>
> **[0:28](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=28)** They also make it easier for non-technical domain experts to build and collaborate.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=33)** Some platforms that exist in the space are Make, Zapier and Chatbase.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=38)** When using traditional low-code platforms, teams often run into challenges when launching their applications into production.
>
> **[0:44](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=44)** Launching to production requires integrations, testing, and evaluating the AI platform you've built.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=50)** You may also need to plug into custom interfaces, models, or connectors.
>
> **[0:54](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=54)** Something we've covered in earlier videos.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=57)** This makes customization challenging.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=59)** Switching our focus to code-based platforms, we can mitigate many of those challenges by applying years of software best practices into the AI space.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=67)** This allows our applications to be more customizable, but come with a higher learning curve.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=72)** Coding based AI orchestrators will also continue to benefit from the rising prominence of LM coding assistance where templating, editing and generating code will become even easier.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=83)** You've likely heard of some coding AI orchestrators like LangChain, LlamaIndex, CrewAI and AutoGen.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=90)** Now, what's interesting is that many AI orchestrators are moving towards a hybrid approach, providing a UI on top of core code experiences.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=98)** This approach is helpful for building initial versions, cross-functional team communication and onboarding.
>
> **[1:44](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=104)** Now, a few hybrid approaches are LangGraph, AI Studio, and Voiceflow.
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=109)** For this course, we'll be using Voiceflow to leverage the strong UI layer along with the extensibility to allow us to build a powerful application.
>
> **[1:56](https://www.linkedin.com/learning/ai-orchestration-foundations/building-low-code-vs-code?u=76281980&t=116)** So let's start building.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** continue (1), let (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### Visualizing an AI orchestration framework
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=0)** - [Instructor] We've talked about some of the different components of AI orchestrators.
>
> **[0:03](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=3)** And in this video, we'll go into some more details of the capabilities of VoiceFlow and how it'll help us build our project, which is an onboarding agent.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=12)** I've imported 03_02.vf from the exercise files, and I have it here open in the VoiceFlow editor.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=19)** Let's start off at the workflow level.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=21)** As mentioned earlier, a workflow is a way to group a sequence of actions you want a user to perform.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=26)** For example, our AI coach has the capability to answer questions, book a meeting, help a user see current projects, recommend ideas, and more.
>
> **[0:36](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=36)** I'm going to click onto the table and hit edit workflow.
>
> **[0:40](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=40)** Now, here we can see a few steps.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=42)** We're loading the user profile, then searching the knowledge base, and then creating an answer based on a prompt.
>
> **[0:48](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=48)** After we create the answer, we then listen to user next steps.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=52)** So let's go ahead and click on the create answer prompt, and we'll hit edit prompt.
>
> **[0:57](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=57)** Here we can see we have a pretty comprehensive prompt that'll help us generate an answer.
>
> **[1:02](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=62)** If we click on settings in the top right, we'll be able to see that we're using GPT-4o mini.
>
> **[1:07](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=67)** We can also change the model here.
>
> **[1:09](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=69)** Now, let's exit and close the prompt window.
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=73)** Let's head back to our main screen by hitting the back button in the top left.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=77)** Now, in our left hand menu, let's click prompts.
>
> **[1:20](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=80)** Now, within this prompts table view or prompt CMS, we'll be able to see all the prompts that we have and where they're being used.
>
> **[1:27](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=87)** If we click on a specific prompt, it'll take us to the same screen that we saw earlier.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=92)** Let's exit out of this prompt in the top right.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=94)** Now, we've also covered the concept of routers or intents.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=98)** If we go to the left-hand side of our table and click on intents, we'll be able to see all the intents that are available to us.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=106)** These intents are the ways that we enter into workflows.
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=109)** If you click preview in the top right-hand side, you'll be able to test how an intent works.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=114)** For example, if I say I want to book a meeting and hit send, we can see that we've classified this utterance as book a meeting, which is correct.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=126)** Let's exit out of the screen and head back to our left-hand side.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=131)** Let's head up to the functions menu and click inside of it.
>
> **[2:14](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=134)** Within here, we can see all the different functions that we can call.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=137)** In this case, we have one, which is Save an Idea to Airtable.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=141)** We can go ahead and click on Save Idea to Airtable, and we can see the function is opening up.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=146)** This function is some JavaScript code that calls our Airtable database.
>
> **[2:31](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=151)** If you're not as familiar with coding, no problem, you'll just be able to use this function out of the box.
>
> **[2:36](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=156)** Now, that's an overview of our project and VoiceFlow.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-foundations/visualizing-an-ai-orchestration-framework?u=76281980&t=159)** In the next few videos, we'll implement a few more workflows and API calls.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), case, (1)
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** gpt (1), cms (1), api (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Building a simple AI app
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=0)** - [Instructor] In the last video, we got an overview of what a fairly advanced AI app looks like.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=5)** In this video, we'll go through one workflow and learn how to publish it to a mock website.
>
> **[0:10](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=10)** Our goal is to build an AI Team Coach.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=12)** Whenever we have a question about internal team processes, we can ask it questions.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=17)** Let's see how it works.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=19)** I'm in Voiceflow right now with the project 03_03.vf from the Exercise Files.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=25)** We'll also be asked to upload some knowledge to our project.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=27)** So let's head over to the Exercise Files to see what else we have available.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=31)** So under 03_03, we see that we have this team_knowledge.txt, which I have open right here.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=38)** This has some information about our team.
>
> **[0:41](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=41)** How large our team is, what is our team goal, and when is our standup?
>
> **[0:45](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=45)** You can imagine that this file will be even bigger if we're using it for a real life use case.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=50)** If we head back to the Exercise Files, we also have team_onboarding_page.html.
>
> **[0:56](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=56)** If we head back to our browser, we can click on the Welcome Page in the top right.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=61)** That's that file from the Exercise Files.
>
> **[1:04](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=64)** So let's head back to Voiceflow and then click on the Knowledge tab.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=68)** We're now going to upload our team knowledge into Voiceflow and it's going to make this information searchable by uploading it into a vector database.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=75)** Let's click on Add Data Sources on the top right.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=77)** Go to upload a file, and click Browse, and click on Team Knowledge, and hit Import.
>
> **[1:27](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=87)** And there we go. The information has been indexed.
>
> **[1:30](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=90)** We can click on the file to make sure that the information is as we expect.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=93)** There we go. Now, let's click back on the table.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=96)** Let's go ahead and test our application end to end.
>
> **[1:39](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=99)** We're going to go ahead and go the bottom right hand side here and click the Play button.
>
> **[1:43](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=103)** And I'm going to type, "When is our team standup?"
>
> **[1:48](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=108)** Hit Enter. Great.
>
> **[1:49](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=109)** And there we go. We have an answer here.
>
> **[1:52](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=112)** So, this looks like it's working.
>
> **[1:53](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=113)** Let's go ahead and add it to our HTML page that we saw earlier.
>
> **[1:57](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=117)** So, I'm going to go ahead on the left hand side and click on this sliding button, which says Publish.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=123)** I'm going to go ahead and click Publish here and it's going to create a V1 of our agent.
>
> **[2:08](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=128)** We'll give it a few seconds as it's compiling.
>
> **[2:11](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=131)** Let's close this pop-up on the right hand side, and go ahead and go to the Integration page on the left hand side.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=137)** Here we'll see some JavaScript that will allow us to add our agent to our website.
>
> **[2:22](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=142)** Let's go ahead and copy everything between the script tags.
>
> **[2:26](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=146)** Copy that in.
>
> **[2:28](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=148)** And head over to our Welcome Page.
>
> **[2:30](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=150)** And do a right-click to do an Inspect.
>
> **[2:33](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=153)** We are now in Developer Mode in Chrome.
>
> **[2:36](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=156)** Let's head over to the console on the right hand tab.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=159)** Let's go ahead and paste the code we saw from Voiceflow.
>
> **[2:42](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=162)** I'm going to hit Enter.
>
> **[2:44](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=164)** Now, if this didn't work for you, you might need to type "allow pasting."
>
> **[2:47](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=167)** But otherwise, let's keep going.
>
> **[2:49](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=169)** You can see now, we got this little bubble on the bottom right hand side.
>
> **[2:53](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=173)** This is our AI application.
>
> **[2:55](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=175)** Let's open it up.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=177)** Let's go ahead and type our question.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=178)** "When is our team standup?"
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=183)** And there we are.
>
> **[3:04](https://www.linkedin.com/learning/ai-orchestration-foundations/building-a-simple-ai-app?u=76281980&t=184)** We have used our AI Orchestrator Voiceflow to deploy an application end to end.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case. (1), import. (1), type, (1)
> **UI Navigation:** click on (6), go to (2), right-click (1)
> **Exercise Files:** exercise files (4)
> **File Paths:** team_knowledge.txt (1), team_onboarding_page.html (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** team_knowledge (1), team_onboarding_page (1)
> **Env Vars:** html (1)
> **Cross-References:** in the last (1)

#### Implementing multiple AI workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=0)** - [Instructor] So far, we've built basic question and answer capabilities into our AI onboarder.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=5)** So let's add some more workflows to make it more powerful.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=8)** I have O3_04b open from the exercise files, and I'm going to head over to the workflow CMS.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=15)** We're going to be adding three new workflows to our AI coach, Current Projects, Project Complete, and New Project Added.
>
> **[0:23](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=23)** As you can see here, I've already created Project Added and Project Complete.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=27)** These are a little bit more complex, so I've given you a head start.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=30)** Let's create the Get Projects workflow.
>
> **[0:33](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=33)** So I'm going to head over to the top right-hand corner and click New workflow.
>
> **[0:37](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=37)** Let's type in Get Projects, and let's type in description, "Letting the user see their current projects," and let's hit Create workflow.
>
> **[0:50](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=50)** Now, let's click on Add trigger and click on Triggers in the top right.
>
> **[0:55](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=55)** We're going to hit Intent, and we're going to scroll down.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=59)** We're going to click on Current Projects.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=61)** I've already created an intent, but let's add a few more phrases to it.
>
> **[1:05](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=65)** I'm going to click on the current project's intent and click the Edit button.
>
> **[1:10](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=70)** So you can see here, we have a description and some utterances.
>
> **[1:14](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=74)** Let's add one more utterance and say, "What is my current project?"
>
> **[1:21](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=81)** And hit Close.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=83)** All right, now, let's output the current projects that the user has.
>
> **[1:28](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=88)** I'm going to head over to Talk on the left-hand bar here and drag out a message step.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=93)** I'm going to call it Current Tasks, and I'm going to have the message say, "Your current projects are two," and then I'm going to add a variable here, which is Projects.
>
> **[1:50](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=110)** Now, let's click on the canvas, and you can see that it shows up.
>
> **[1:53](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=113)** Now, let's add another message, "Anything else I can help you with?"
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=123)** And, finally, let's add a Listen step.
>
> **[2:06](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=126)** So going over to my menu, go in to Choice, and say Listening for a trigger.
>
> **[2:13](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=133)** So this will allow the user to continue the conversation, and, finally, let's connect it to our current intent by going to the Current Projects and connecting it to Current Tasks, great.
>
> **[2:24](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=144)** So where are these projects actually coming from?
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=147)** I'm going to head to the top left-hand corner and hit this back arrow, then I'm going to scroll down on the left-hand side and go to Variables.
>
> **[2:35](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=155)** I'm going to scroll down until I get to the projects variable.
>
> **[2:38](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=158)** I'm going to click on the table entry and see we have a default value.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=163)** So in here, we have a few different projects, one-on-one with the manager, find a first issue bug, and complete the HR onboarding.
>
> **[2:52](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=172)** So if we never set this variable when we run the project, this is what the default value will be.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=177)** Let's go ahead to the bottom left and return to our workflow.
>
> **[3:01](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=181)** Let's go ahead to the top right-hand corner and hit Run and hit Train Agent.
>
> **[3:07](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=187)** So this is going to update based on the intent updates we made a little bit earlier.
>
> **[3:13](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=193)** We're going to click on Run Test.
>
> **[3:16](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=196)** We can see some debug variables here.
>
> **[3:18](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=198)** Let's actually turn these off.
>
> **[3:20](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=200)** You can head up to the top right hand corner, click on the gear icon, and turn off debug mode.
>
> **[3:26](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=206)** Let's go back to our widget, and let's type in, "I want to see my current projects," and hit Enter.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=216)** Now, we jump to that workflow.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=219)** Now, if we wanted to clean up our current projects, we could either format it more nicely with Markdown or we could use an LLM to clean it up.
>
> **[3:47](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=227)** So now, we have a basic Get Projects workflow working.
>
> **[3:49](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=229)** Let's see how Projects Added and Projects Complete actually look like.
>
> **[3:53](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=233)** I'm going to go ahead on the left-hand side on Workflows, scroll down to Project Added.
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=239)** I'm going to click on it.
>
> **[4:00](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=240)** Okay, so here, we can see we have our intent at a project, and then we do a few different steps.
>
> **[4:07](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=247)** First, we're going to set the project variable class utterance, and then we're going to use a prompt to process the project.
>
> **[4:14](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=254)** Let's go ahead and click on this prompt.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=256)** I'm going to hit Edit prompt.
>
> **[4:18](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=258)** In this prompt, we're going to clean up what the user has said and output those results to make it a little bit cleaner.
>
> **[4:24](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=264)** Let's close this prompt, and we can go ahead and click on the Add project, and you can see here, this is a set AI step.
>
> **[4:34](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=274)** What this is doing is using a prompt to demonstrate the behavior on how to add a new project to our list.
>
> **[4:40](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=280)** So in this case, we're using a one-shot learning approach, and if we scroll down, we can see we're reapplying it to the project's variable.
>
> **[4:48](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=288)** All right, so let's go ahead and run our assistant.
>
> **[4:50](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=290)** On the bottom right-hand corner, I'm going to hit Play.
>
> **[4:53](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=293)** I'm going to type, "I want to add a project.
>
> **[4:58](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=298)** Have a 1 on 1 with my skip manager."
>
> **[5:05](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=305)** All right, there we go.
>
> **[5:07](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=307)** As you can see here, we added the project, and we outputted this.
>
> **[5:11](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=311)** We then updated the list of projects and outputted the results.
>
> **[5:15](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=315)** All right, great, that's the second workflow.
>
> **[5:17](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=317)** Now, let's head over to Project Complete on the left-hand side.
>
> **[5:22](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=322)** So let's close our prototype view.
>
> **[5:26](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=326)** Okay.
>
> **[5:27](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=327)** So scrolling over, we can see we have our Project Completed intent, and then what we're going to do is check if the value of that completed project matches with our list.
>
> **[5:37](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=337)** So let's click on this if condition and see that we're using a prompt to classify it.
>
> **[5:42](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=342)** So let's click on this prompt.
>
> **[5:44](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=344)** So once again, we're using a few shot learning technique where we compare the list of projects against the project that the user has proposed, and then we output one or zero, zero being that the project is not on the list and one, the project is on the list.
>
> **[5:58](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=358)** So let's go ahead and close this project's view.
>
> **[6:01](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=361)** Let's go ahead and run this workflow.
>
> **[6:03](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=363)** Going back to our bottom right-hand side, let's say, "I have completed my 1 on 1 with my manager."
>
> **[6:14](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=374)** Right, there we go.
>
> **[6:15](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=375)** So we have removed the one-on-one from our list, and we've outputted it.
>
> **[6:18](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=378)** In this case, the output was a little bit funky.
>
> **[6:21](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=381)** Looks like the LLM didn't get it perfect on the first try.
>
> **[6:24](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=384)** This happens.
>
> **[6:25](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=385)** So there we have it.
>
> **[6:26](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=386)** We've successfully added three new workflows to our AI coach.
>
> **[6:30](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=390)** We're able to update different variables and make sure that the user could get the responses they're expecting.
>
> **[6:36](https://www.linkedin.com/learning/ai-orchestration-foundations/implementing-multiple-ai-workflows?u=76281980&t=396)** Now, in the next video, we'll incorporate APIs into our application to be able to read projects from an external database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (29), finally, (2), case, (2), continue (1), type, (1)
> **UI Navigation:** click on (13), scroll down (5), go to (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** llm (2), cms (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding API calls to your AI app
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=0)** - [Instructor] In this video, we're going to make our project list dynamic by connecting to a database.
>
> **[0:05](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=5)** In this case we'll use Airtable, but you can use any database of your choice.
>
> **[0:09](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=9)** Let's open up 03_05 from our exercise files, and see the workflows we have.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=15)** We'll head over into the current project section.
>
> **[0:18](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=18)** So you can see here we have a pretty basic workflow.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=21)** We load some projects from Airtable.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=24)** We then clean up the results and display it to the user.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=27)** So let's go ahead and open up Airtable.
>
> **[0:30](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=30)** I'm clicking into a new tab.
>
> **[0:32](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=32)** In Airtable, there are a few concepts to set up your project.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=35)** First you create your base, in this case called ideas for me, and then you create a table.
>
> **[0:40](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=40)** For me, it's called projects.
>
> **[0:42](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=42)** I then have included three rows in my projects table with the name Dennis, and the different project names.
>
> **[0:49](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=49)** So how do I actually access this database?
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=52)** Let's head back to Voiceflow then hit the back button in the top left, and go to the settings.
>
> **[0:59](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=59)** I'm going to click on Secrets on the left hand side.
>
> **[1:01](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=61)** So in this case, I've added three secret values that let me connect to the database, the Airtable API token, the Airtable BaseId, and the Airtable TableId.
>
> **[1:12](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=72)** So the BaseId and TableId are pretty easy to find.
>
> **[1:15](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=75)** Let's head back to Airtable.
>
> **[1:17](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=77)** The BaseId is what I have highlighted here, this little Id that starts with app.
>
> **[1:23](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=83)** Next, we have TableId, which I've highlighted on the screen now.
>
> **[1:27](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=87)** It starts off with TBL.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=89)** So we can copy these in and add them to our secrets.
>
> **[1:32](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=92)** We can head back to Voiceflow and click on the three dots on the right hand side, and click edit.
>
> **[1:38](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=98)** In this case, Airtable BaseId is a masked value, so I can see it, and edit it if I click on the eye.
>
> **[1:46](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=106)** Let's click cancel.
>
> **[1:48](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=108)** Likewise with the Air TableId.
>
> **[1:51](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=111)** So you can go ahead and copy that into our secrets.
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=114)** Heading to Airtable, click on table, seeing the value, and pasting it in.
>
> **[2:04](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=124)** And clicking save.
>
> **[2:07](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=127)** Now going up to Airtable API token.
>
> **[2:10](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=130)** Let's go ahead and hit edit.
>
> **[2:12](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=132)** In this case, it has a restricted visibility, so we won't be able to see this value.
>
> **[2:17](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=137)** We'll have to copy in a new value of the token.
>
> **[2:19](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=139)** So let's head back to Airtable.
>
> **[2:21](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=141)** We're going to go to the right hand side, and we're going to click on builder hub.
>
> **[2:27](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=147)** In this case, on the left hand side, I'm going to click on personal access tokens, and then create a new token.
>
> **[2:34](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=154)** I'm going to call it 03_05, but you can name it anything.
>
> **[2:39](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=159)** Let's add a scope, which means the ability to access the database.
>
> **[2:43](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=163)** So we're going to add permissions for data records read, and data records write, and we're going to have access to our ideas base.
>
> **[2:54](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=174)** Let's go ahead and create this token.
>
> **[2:57](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=177)** There we go.
>
> **[2:58](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=178)** So we see the token here.
>
> **[2:59](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=179)** Let's copy it.
>
> **[3:00](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=180)** And hit done.
>
> **[3:03](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=183)** Now let's head back to 03_05 in Voiceflow, and paste in this token.
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=189)** And let's hit save.
>
> **[3:11](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=191)** Alright, so you should now be able to connect to your Airtable database.
>
> **[3:15](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=195)** Let's head back to our workflows, and click on current projects.
>
> **[3:21](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=201)** So if we open up this function on our current projects, we'll see that we pass in the Airtable API token, the Table Id, the Base Id, and our name.
>
> **[3:31](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=211)** And in return, we get the projects.
>
> **[3:34](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=214)** So let's go ahead and run our AI agent.
>
> **[3:36](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=216)** Going to go to the top right hand side and click run.
>
> **[3:39](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=219)** I'm going to make sure that we've trained it successfully.
>
> **[3:42](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=222)** Looks like it is.
>
> **[3:43](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=223)** That's great.
>
> **[3:44](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=224)** Let's go ahead and run our test.
>
> **[3:46](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=226)** So let's ask the question, what are my current projects?
>
> **[3:53](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=233)** Alright, there we go.
>
> **[3:54](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=234)** We get our response.
>
> **[3:55](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=235)** Let's head over to Airtable, and let's update this list of tasks.
>
> **[3:59](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=239)** I'm going to add this for myself, and I'm going to add, create an AI agent.
>
> **[4:08](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=248)** So this should auto save.
>
> **[4:11](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=251)** Let's go back to Voiceflow.
>
> **[4:13](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=253)** And let's ask the same question again.
>
> **[4:16](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=256)** What are my current projects?
>
> **[4:20](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=260)** Hit enter.
>
> **[4:23](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=263)** And you can see here we have our updated list.
>
> **[4:26](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=266)** Now because this is an AI prompt cleaning it up, sometimes the order changes.
>
> **[4:30](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=270)** So there we have it.
>
> **[4:32](https://www.linkedin.com/learning/ai-orchestration-foundations/adding-api-calls-to-our-ai-app?u=76281980&t=272)** We now have connected our AI agent to a database to be able to fetch the most recent results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), case, (4), function (1), pass (1), return, (1)
> **UI Navigation:** click on (7), go to (3)
> **Env Vars:** api (3), tbl (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### Challenge: Building an AI coach
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=0)** - [Instructor] Now it's your turn to complete a challenge.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=8)** Your challenge is to add a brainstorming ideas workflow to your AI coach.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=12)** The goal of this challenge is to allow employees to brainstorm ideas and ask for feedback.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=17)** This task should take under an hour to complete, but it's quite open-ended if you're feeling creative.
>
> **[0:22](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=22)** You can find a starter project in the exercise files under 03_06.
>
> **[0:27](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=27)** Don't forget about intense workflows and prompting.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-foundations/challenge-building-an-ai-coach?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **Exercise Files:** starter project (1), exercise files (1)
> **CLI Commands:** find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Building an AI coach
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=0)** - [Instructor] Let's go through a sample solution to this challenge.
>
> **[0:08](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=8)** I'm here in Voiceflow in project 03_07.
>
> **[0:12](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=12)** Now, I've added a new workflow called Recommend Ideas.
>
> **[0:15](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=15)** Let's go ahead and click on it.
>
> **[0:17](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=17)** And edit the workflow.
>
> **[0:19](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=19)** So this workflow is quite simple.
>
> **[0:21](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=21)** We have a Recommend Ideas intent.
>
> **[0:24](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=24)** We have a prompt called Brainstorm ideas.
>
> **[0:26](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=26)** And finally, we have a capture step that listens for the last thing that the user said.
>
> **[0:31](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=31)** Let's go ahead and click on the Brainstorm ideas prompt and edit it.
>
> **[0:35](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=35)** So this prompt has two main components.
>
> **[0:38](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=38)** The first thing that you'll notice is that we're using the conversation history with the vf_memory variable.
>
> **[0:43](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=43)** Then in our prompt, we ask the LLM to help the user brainstorm ideas.
>
> **[0:47](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=47)** We want to guide the model so that it's supportive and understanding, so we include that into our prompt.
>
> **[0:52](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=52)** And finally, we pass in the last utterance to make sure that the brainstorming idea or question of the user gets answered.
>
> **[0:58](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=58)** So, let's exit.
>
> **[1:00](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=60)** Go to the top right-hand Run.
>
> **[1:03](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=63)** Make sure that the model is trained.
>
> **[1:06](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=66)** And hit Run Test.
>
> **[1:08](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=68)** Now, let's ask a question that many of us feel, how do I approach a one-on-one with my manager?
>
> **[1:13](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=73)** "How would I approach a one-on-one with my manager?
>
> **[1:22](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=82)** I don't know how to ask good questions.
>
> **[1:29](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=89)** Any ideas?"
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=93)** So you can see here that the model is quite supportive, reaffirming that this is a good question, and we have some recommendations that go on here.
>
> **[1:41](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=101)** All right, let's see if we can ask a follow-up question.
>
> **[1:45](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=105)** "Do you have any ideas on how to ask for more interesting work?"
>
> **[1:54](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=114)** All right, there we go.
>
> **[1:55](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=115)** So we are able to answer another question and brainstorm more ideas on how to approach this problem.
>
> **[2:00](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=120)** So that's a sample solution to this challenge.
>
> **[2:03](https://www.linkedin.com/learning/ai-orchestration-foundations/solution-building-an-ai-coach?u=76281980&t=123)** There are many ways to expand this, so if you have any interesting ideas, feel free to build them out and share them on LinkedIn.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (2), pass (1), this, (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** vf_memory (1)
> **Env Vars:** llm (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=1)** - Congratulations on completing this course.
>
> **[0:03](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=3)** By now, you've learned some AI orchestration key concepts, but keep in mind that the open source AI community is always rapidly evolving.
>
> **[0:11](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=11)** You can follow me on LinkedIn where I share new models and case study techniques as they come out.
>
> **[0:16](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=16)** You can also watch my other courses, like Building Apps with AI Tools or AI Pricing: A Technical Breakdown of Cost and Revenue Opportunities to learn more.
>
> **[0:25](https://www.linkedin.com/learning/ai-orchestration-foundations/conclusion?u=76281980&t=25)** So be sure to keep learning about GenAI and add this skill set to your tool belt.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Speakers:** - congratulations (1)


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
