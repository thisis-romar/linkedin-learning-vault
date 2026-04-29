---
type: course
cssclasses:
  - lle-course
slug: build-ai-agents-and-automate-workflows-with-n8n
url: "https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n"
updated: 6/18/2025
learners: 4600
skills:
  - AI Productivity
  - Generative AI
  - AI Agents
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/build-ai-agents-and-automate-workflows-with-n8n-5437042"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGmwk8Sfhr82g/learning-public-crop_675_1200/B4EZd_sUmBHcAY-/0/1750194015319?e=2147483647&amp;v=beta&amp;t=dlJ1bHTQ9Mb9RyN54JSyKOE9ROVrmFukVdcGcdCZUKM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Agents- Advanced Techniques for Developers]]'
next_courses:
  - '[[Build AI Agents and Chatbots with LangGraph]]'
path_nav: '[{"path":"Building AI Agents- Advanced Techniques for Developers","position":1,"total":4,"prev":null,"next":"Build AI Agents and Chatbots with LangGraph"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-productivity
  - skill/generative-ai
  - skill/ai-agents
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20Ai%20Agents%20And%20Automate%20Workflows%20With%20N8n.md)

![Build Ai Agents And Automate Workflows With N8n](https://media.licdn.com/dms/image/v2/D4E0DAQGmwk8Sfhr82g/learning-public-crop_675_1200/B4EZd_sUmBHcAY-/0/1750194015319?e=2147483647&amp;v=beta&amp;t=dlJ1bHTQ9Mb9RyN54JSyKOE9ROVrmFukVdcGcdCZUKM)

# Build Ai Agents And Automate Workflows With N8n

> Use n8n - the open source workflow automation tool - to build advanced custom AI-powered business-process automations connecting your existing tools together to create AI agents that simplify your work. Choose n8n as a cloud app, mount it on prem, or run it locally on your computer for full control. Learn how to build an advanced AI agent that connects with external sources like Google Sheets and 

> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n) | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. Building AI Agents with n8n]]** (13 videos)
- **[[#3. Conclusion]]** (1 videos)

### 1. Introduction

#### Making AI agents work for you
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=0)** - The other day, my coworker asked if it was possible to create an AI-powered Slack bot that can go into a Google Sheet and retrieve only the information they asked for, and then update information when necessary without them having to touch the spreadsheet.
>
> **[0:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=15)** And I said, "Yes, you can, if you use an automation tool like n8n."
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=20)** Automation tools have turned out to be the bridge that brings us to the place where we can actually get utility out of AI.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=27)** In part because automation tools are already set up to plug into everything we're using and in part because AI works so well as a translator between our natural language requests and the machine instructions these automation tools need to operate.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=42)** And that's what I'll show you how to do in this course.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=43)** Use n8n to build an agent that takes natural language instructions to perform advanced actions in different tools and then sends back natural language responses.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=54)** Let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** for, (1), let (1)
> **Tools:** slack (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 2. 1. Building AI Agents with n8n

#### Introducing n8n
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=0)** - [Instructor] N8N is an open source AI workflow automation tool or AI orchestration tool.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=6)** Using n8n, you set up workflows in a visual environment like the one you see here, where you start off with a trigger, then set up some sequence of actions that include AI tools, external tools, functions, whatever you desire to perform some specific output.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=23)** And in this environment, you can use tools provided by n8n.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=26)** You can create your own custom tools using code, and you can even bring in and integrate your own external tools.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=33)** The application falls in the same category as Make and Zapier with one significant difference.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=39)** That n8n is open source.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=41)** You can go to GitHub, download n8n onto your computer and install it locally on your system or in the cloud.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=49)** This means individuals, companies, and enterprises can set up n8n in whatever secure environment they have on-prem or in the cloud in secure storage and have complete control over what happens.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=62)** And because it's open source, you are free to do whatever you want with it, plug in your own AI models, hook it up to your own systems.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=69)** Whatever you want to do and whatever you want to build.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=72)** n8n allows you to do it.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=74)** Working with n8n, you have two main options.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=76)** You can use the cloud service by going to [n8n.io](https://n8n.io).
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=80)** Click get started and sign up for an account.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=83)** Or you can self-host n8n.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=85)** If you choose this option, the recommendation is to host it somewhere in the cloud, so you have a URL you can reference anytime you are using webhooks.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=92)** The easiest way to do this is through a Docker installation, and if you go over to the sidebar in documentation, under server setups, you'll see you have server setups for all the major services, including Digital Ocean, Azure, Google Cloud, and Amazon Web Services.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=107)** As I record this course, I'm using my own account on n8n Cloud, and if you want to follow along without doing any of the installation, you can sign up for your own free 14 day trial on [n8n.io](https://n8n.io).
>
> **[1:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=119)** The features you'll see in this course are the same whether you use this cloud version or the self-hosted version somewhere in the cloud.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3), install (1)
> **CLI Commands:** make (1), docker (1)
> **Code Keywords:** self (2)
> **URLs:** [n8n.io](https://n8n.io) (2)
> **Env Vars:** n8n (1), url (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### The Plan: An AI-powered Slackbot managing a Google Sheet
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=0)** - Okay, here's the plan.
>
> **[0:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=1)** Imagine an organization with hundreds of volunteers and managers who want to gain access to information about the volunteers as easy as possible.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=10)** All the volunteer information is in a spreadsheet, but there's a lot of it, and the organization uses Slack for internal communication.
>
> **[0:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=17)** I want to build a Slack bot that takes natural language queries from the users, goes to n8n, and uses an automation process to retrieve information from the spreadsheet and also update information in the spreadsheet when necessary.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=32)** That is not a straightforward process, because natural language queries can take many different forms, and this is one of the places where AI excels.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=40)** Because AI can work as an interface between us humans, our language, and our data to interpret the intent of our queries and turn it into something the data system can use, and that is one of the things n8n is really good for.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=56)** We start with a message from Slack, then we analyze the intent of the request and find out, is this an info request, is it an update request, or is it out of scope?
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=68)** Then based on that information, we either go to the Google Sheet and retrieve information, or go to Google Sheets and update the information, or create some sort of response saying, "Hey, I don't have this information," or, "Your question is out of scope," and send it back to Slack.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=86)** Now, this workflow is intimidating.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=89)** The good news is, that's not what we're building.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=91)** Here's the workflow we'll build.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=93)** It does the same things, but leans on the capabilities of the AI language model to perform all those complicated actions.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=100)** This agent workflow takes a Slack message, passes it into an agent that uses OpenAI's chat model to process information, then it calls in an MCP client that has two tools, one workflow tool to filter information from the Google Sheet and another tool to update the Google Sheet.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=120)** Based on the query coming in from Slack, the agent retrieves information, updates information, and does whatever else is requested, and then passes the response back the Slack again.
>
> **[2:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=131)** This workflow, looks simple, is a little more complex than what you see right here, which is why I'm using it as an example in this course, and showcases how much we can lean on AI to solve complex problems when we're working with natural language.
>
> **[2:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=147)** But enough talk, let's actually build this.

> [!info]- Semantic Content
>
> **Tools:** slack (7)
> **Code Keywords:** interface (1), for. (1), let (1), this. (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Env Vars:** mcp (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - okay (1)

#### Creating a new n8n workflow with a trigger
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=0)** - [Instructor] Let's build a new workflow from scratch.
>
> **[0:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=2)** In N8N, you can either work in your personal environment or in a project environment.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=7)** In each of these environments, you can set up workflows, credentials, and see the executions of any of your workflows.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=13)** And these are kept separate so that you don't have accidental sharing of credentials.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=18)** Since I'm starting up a brand new project, I'll open my project and then click on Create Workflow.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=24)** The first thing I'll do is change the name of the workflow.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=27)** I'll call it Volunteer Lookup.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=29)** And then I'll start with a trigger.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=31)** So I'll click Add First Step.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=33)** This opens up a side panel, and from here I can choose what trigger I want to start with.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=37)** Options include manual triggers, event triggers, schedule triggers, webhook calls, form submissions, et cetera, et cetera.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=45)** If we click into On App Event, you see a long list of events from different services that can trigger actions.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=52)** Under here, you'll find Slack, Google Workplace, Microsoft 365, and pretty much any other external service you already use.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=59)** And anytime you do something in those services, those actions can trigger events inside N8N.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=65)** My workflow will eventually use Slack, but I want to be able to test it without having to go through Slack.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=70)** So to start with, I'll choose this option On Chat Message, select it.
>
> **[1:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=75)** The editing window opens.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=76)** I'm just going to click outside it to go back to my canvas.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=79)** And this chat message creates a chat app in my interface.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=83)** And here I can now chat directly with the app.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=86)** Now of course, when I do that, I'm not actually triggering any events, but you can already see things happening.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=91)** I sent a message into the workflow.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=93)** Down here, I get a log that says when chat message was received, and here I get the information.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=98)** So the chat input was, hello.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=100)** What you'll also notice is the chat app down here automatically receives whatever comes out of the last node.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=106)** So even though I haven't hooked anything in yet, I can still see the output in the chat.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=112)** This becomes important as we start testing things out.

> [!info]- Semantic Content
>
> **Tools:** slack (3)
> **CLI Commands:** find (1), node (1)
> **Code Keywords:** let (1), interface (1)
> **Env Vars:** n8n (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Adding an AI agent and a chat model
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=0)** - [Instructor] With the trigger in place, let's set up an agent so we have something to talk to.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=4)** First off, I'll clear out my chat session here so that we're starting from scratch, then I'll click the plus symbol to connect something to this first node.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=12)** This opens the What happens next panel on the side where I can choose from AI, Actions in an app, that is any external app, Data transformations like filters and data conversions, Flow transformations, Core features, and even Human in the loop.
>
> **[0:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=27)** We'll look at some of these later, so for now, I'll click AI.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=30)** From here, you can choose different AI models.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=33)** You can also choose sentiment analysis, which gives you different outputs depending on the Sentiment, Summarization Chains, the Text Classifier and so on, but the one that we're going to focus on here is AI Agent.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=45)** When I select the AI Agent, it opens up in the node configuration view, and this is what you'll see across all our nodes.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=52)** The input is on the left, then we have the main node we're working on in the center, and then the output on the right.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=58)** And what you can see right away is we don't have any input, and therefore, the system doesn't know what to do.
>
> **[1:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=64)** So, I'm going to click on execute previous nodes here.
>
> **[1:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=69)** That brings me to the chat, and I'll just say hello to send a message through.
>
> **[1:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=75)** Then you see the AI agent gets a warning because something is wrong, and when I open it up, what is wrong is the AI agent doesn't yet have a model to work with, so let's fix that.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=84)** I'll go down to the bottom where it says Chat Model and click the plus symbol to add a chat model.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=90)** Then I can choose from a number of different AI models.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=93)** So, here, I'm going to scroll to the bottom and choose OpenAI Chat Model.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=98)** This is the OpenAI API, so now I need to add in my credentials.
>
> **[1:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=101)** I can do that by clicking Select Credential, Create new credential.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=106)** From here, I need my OpenAI API key, so I'll go to platform.[openai.com](https://openai.com).
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=112)** I've already created a new project for this called Automation, so I'll go to Dashboard, navigate over to API Keys, and create a new key.
>
> **[2:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=122)** I'll call it n8n-volunteer.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=128)** Copy that key, paste it in, Save.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=135)** The credential is successfully created, and the connection is tested successfully.
>
> **[2:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=140)** That means everything is good to go.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=142)** I can close out this window, and now we have a model connected.
>
> **[2:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=146)** To get back to the agent, I'll click on the symbol up here, and now I can set up the interaction with the AI.
>
> **[2:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=152)** Up here at the top it says Source for Prompt Connected Chat Trigger Node, and that's what you see down here, json.chatInput.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=159)** That's this node over here that says Hello, that's the message I sent in, and this is a breakdown of all the inputs that are available currently.
>
> **[2:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=168)** You'll see as we add more nodes, this input breakdown will expand greatly because we get more data to work with.
>
> **[2:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=175)** The system so far has figured out that because we are connecting an AI agent to a chat node, this is probably the input we want.
>
> **[3:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=183)** But if it's not, you can change it by clicking here, going to Define below, and then you can type in anything you want.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=189)** For example, you can grab chat input and dump it in.
>
> **[3:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=193)** That automatically switches it to Expression, and you can also put text around it.
>
> **[3:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=197)** So, you can say things like requests, and then the chat input.
>
> **[3:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=203)** This is an expression, so you can call anything.
>
> **[3:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=206)** You can even put in JavaScript expressions if you want to.
>
> **[3:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=209)** Now, this is the user message.
>
> **[3:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=211)** You can also control the system message for the AI by going into Add Options and open up System Message.
>
> **[3:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=217)** The default system message is, as always, you are a helpful assistant, but this is where you can put in any system message you want to apply to the AI model.
>
> **[3:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=225)** So, let's see how this works now.
>
> **[3:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=228)** I'll click out of this, then I'll move it over so it's easier to see what's going on, and I'll go down to my chat.
>
> **[3:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=234)** So, pay attention up here when I put in my message.
>
> **[4:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=242)** I'll send my message, and up here at the top, you saw the message went into the AI agent, the AI agent sent the message to OpenAI, then the message came back, and then we got the result down here in the chat.
>
> **[4:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=256)** What you're seeing here is a visualization of your workflow, and that becomes important as you start building out your workflow, 'cause you can see where the information is traveling through your workflow, and also where things go wrong when things go wrong.
>
> **[4:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=269)** Now that the workflow is complete, we can go down and look at the logs.
>
> **[4:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=273)** So, here we first have the original message, write a haiku about a duck.
>
> **[4:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=277)** Then we have the AI agent that received the input, write a haiku about a duck and sent the output, which is the actual haiku, and then when we go into the sub-item, the OpenAI chat model, you can see here's the system message, you're a helpful assistant, and the human message, which is REQUEST, and then write a haiku about a duck.
>
> **[4:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=295)** So, this here is what we put in here, REQUEST and then the chat input.
>
> **[5:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=303)** Now, you notice the AI agent has two more inputs.
>
> **[5:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=306)** We have Memory for when you want to create an actual chat.
>
> **[5:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=310)** You can plug in a standard simple memory, that's the n8n database, or you can use MongoDB or Motorhead or Postgres or whatever you want.
>
> **[5:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=318)** But for our app, we don't actually need memory, this is a one-and-done transaction, so I'm not going to plug that in, and you can also plug in Tools.
>
> **[5:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=326)** We'll look at that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6)
> **Env Vars:** api (3), request (2)
> **UI Navigation:** click on (2), go to (2), select the (1)
> **Code Keywords:** let (3), this, (1)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** chatinput (1)
> **URLs:** [openai.com](https://openai.com) (1)

#### Adding a tool to the AI agent
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=0)** - [Narrator] The tool feature in AI agents allow us to plug external services, custom functions, even other workflows into the AI agent for the AI model to use.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=10)** And this is what makes n8n and these AI agents so powerful.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=13)** The easiest way to understand what's going on here is through a basic example.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=16)** So up here I have a Google sheet that has two sheets in it, a short sheet with nine volunteers, and a full sheet with over a hundred volunteers.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=26)** We're going to work with a short one for now.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=28)** These are not real people, this is just example data.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=31)** But you can extrapolate and see how this could be a database, a larger Google sheet, whatever you can think of.
>
> **[0:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=37)** I want my AI agent to be able to access that data and answer questions about it.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=41)** And that's what we use tools for.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=42)** Now, just like with OpenAI to plug in Google Sheets, I need to first authenticate, and I can do that by adding in the tool, but I can also do it by going back to my project, going to credentials here I already have the OpenAI credentials set up.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=57)** That's what we did in the previous video.
>
> **[0:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=59)** I can go in here and choose create credential, then choose Google.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=65)** And here you see we have a ton of options.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=68)** There are separate credentials for each individual feature within Google and all these other services.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=73)** I'm looking specifically for Google Sheets off to API.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=77)** So I'll click on that one.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=79)** Click continue.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=81)** From here, I can now click sign in with Google.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=84)** This takes me through the standard off loop where I select the account I want to use.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=89)** Then give n8n permission to access that account.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=93)** Click continue, get a connection successful message that I can close out the window.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=99)** And here it says account connected.
>
> **[1:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=102)** Now, because I haven't set up any features yet, it says needs first set up here.
>
> **[1:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=107)** So I can go back into my project, go to volunteer lookup and click on tool.
>
> **[1:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=113)** Here I can search for Google.
>
> **[1:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=115)** I specifically want Google Sheets tool.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=118)** I'll select that one.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=120)** Then in the dropdown I can select the account I want to use.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=124)** If you didn't have an account already, you can also click create new credential to log in, going through the exact same loop as what I just showed you.
>
> **[2:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=132)** And once that connection has been made, I can set everything else.
>
> **[2:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=136)** Up at the top we have a tool description that tells the AI agent what this tool can do.
>
> **[2:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=140)** So set automatically makes sense.
>
> **[2:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=142)** Next we have the resource.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=145)** The default is sheet within the document, but you can also choose to document itself then operation.
>
> **[2:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=150)** And we can choose get row, delete rows, delete, create, clear, append rows, and append or update row.
>
> **[2:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=158)** For now I'm choosing get rows 'cause we just want the data.
>
> **[2:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=161)** And then we can choose the actual document from the Google accounts.
>
> **[2:44](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=164)** I want volunteer index.
>
> **[2:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=166)** And within it, the short sheet, I'm not going to touch any of the other features.
>
> **[2:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=171)** I'll just click out.
>
> **[2:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=173)** So now we have chat, AI agent, AI model, and Google Sheets.
>
> **[3:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=180)** Let's see what happens if I ask about some information from the sheet.
>
> **[3:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=185)** How many volunteers are in the sheet?
>
> **[3:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=195)** The AI agent now fires off the message.
>
> **[3:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=197)** True OpenAI.
>
> **[3:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=198)** OpenAI calls the sheet, all the information from the sheet is passed back into the model for a second run.
>
> **[3:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=205)** And then the model answers the question.
>
> **[3:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=206)** We can see it down here on the logs.
>
> **[3:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=209)** Here we have the OpenAI chat model that gets the request.
>
> **[3:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=213)** How many volunteers are in the sheet?
>
> **[3:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=214)** The model realizes it can use the tool then calls in Google sheets.
>
> **[3:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=220)** Google sheets returns all the data from the entire sheet as JSON, so we can see it here.
>
> **[3:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=227)** All that data gets passed into the model.
>
> **[3:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=229)** So now we have the system message, the human message, how many volunteers and all the data from the Google sheet.
>
> **[3:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=236)** And then the model creates the response we see over here.
>
> **[4:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=240)** So with this setup, we can now use the AI to parse through the sheets and get any information we want without doing things like filtering.
>
> **[4:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=248)** So for example, I can say list all the currently active volunteers.
>
> **[4:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=257)** You'll see in the volunteer index that some are active and some are not active.
>
> **[4:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=263)** I'm not doing any filtering here.
>
> **[4:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=264)** I'm just getting the language model to brute force the answer by going in and getting all the data and then parsing it.
>
> **[4:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=271)** And in response we get here are the current active volunteers.
>
> **[4:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=274)** This is information directly from the spreadsheet, so it's all correct and grounded in reality.
>
> **[4:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=280)** It's just parsed for my convenience.
>
> **[4:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=283)** And this is exactly what I set out to build this agent for.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (2), continue (2), delete (2), else. (1), let (1)
> **UI Navigation:** click on (2), select the (2), go to (1), dropdown (1)
> **Prerequisites:** set up (3), setup (1)
> **Env Vars:** api (1), json (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [narrator] (1)

#### Using a sub-workflow as a tool
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=0)** - [Instructor] Okay, this setup works, but you may have spotted that there's a problem here.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=4)** You can see it right down here.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=6)** The number of tokens being passed into the model is really high.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=12)** And that's because when we call the model, after the Google Sheets lookup, all the information from the sheet is passed back to the AI model.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=21)** That's okay when we only have 10 entries, but if I switch over to the main sheet with over 100 lines, it becomes an awful lot of data.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=31)** And this is just an example of a small database.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=34)** If you imagine a much larger database or much bigger data, passing all that data into the model would not only cause the model to not work properly because there's too much data to parse through, but would also be really wasteful because you're paying per token when you're using any of the APIs for these AI models.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=55)** And passing in tons of wasted tokens is wasted money and wasted energy.
>
> **[1:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=60)** To fix this, we somehow have to get the agent to tell Google Sheets to only return the relevant roles and nothing else.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=68)** But that's tricky because this is a natural language interface.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=72)** The user could put in any question, and the AI agent has to figure out the intent of that question before requesting information from Google Sheets.
>
> **[1:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=81)** For example, "What is Sofia's phone number?"
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=84)** In this circumstance, the filter should be for the first name column, look for Sofia, and then return any row that has Sofia's information in it.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=94)** Now, you may remember the Google Sheets tool has a filter down here, but if I add a filter, I have to point to a column within the spreadsheet.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=103)** Now, I could put in an expression here, but I would still need to get the AI to output the correct column name.
>
> **[1:50](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=110)** And no matter how much prompt engineering you do, that will never be a reliable option.
>
> **[1:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=115)** So this is already a non-starter.
>
> **[1:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=117)** Does that mean we can't get this to work?
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=120)** No.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=121)** As I explained in the beginning of the chapter, with n8n, you can do pretty much anything you want.
>
> **[2:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=125)** And I also said that you can append another workflow as a tool.
>
> **[2:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=130)** So I'm going to delete Google Sheets, save my workflow, then go back to My Project, and create a new workflow.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=139)** This is also called a sub-workflow.
>
> **[2:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=141)** I'll call this one Row Lookup.
>
> **[2:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=143)** And as the trigger for this workflow, I'll go search for workflow here.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=148)** This gives us Execute Sub-workflow, and the trigger is when executed by another workflow.
>
> **[2:35](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=155)** This trigger allows us to communicate to the AI agent what information the workflow needs.
>
> **[2:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=161)** So here, I can now set up the fields I need, which would be the query_column, which is a string, and the query_value.
>
> **[2:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=174)** Before we do anything else, let's save that, and wire it up inside Volunteer Lookup.
>
> **[3:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=180)** Under the AI Agent, I'll add a new tool.
>
> **[3:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=184)** I'll type in workflow, Call n8n Workflow Tool.
>
> **[3:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=189)** And here, From List, I will find My Project, Row Lookup.
>
> **[3:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=196)** It automatically spells out it wants query-column and query-value.
>
> **[3:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=200)** And instead of pointing at a data source here, I'll click this button, let the model define this parameter.
>
> **[3:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=207)** And do the same for query_value.
>
> **[3:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=209)** So now we're telling the model we need these values, figure out what they are.
>
> **[3:35](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=215)** Just for safety, I'll also put in a description telling the model what this tool is for.
>
> **[3:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=221)** And then, I'll fire off a chat message to make sure that all the information is passing through.
>
> **[3:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=226)** So I'll ask the same thing as before, "What is Sofia's phone number?"
>
> **[3:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=237)** Now, when we go in here to Call n8n Workflow Tool, you'll see a query is passed in with a query_column, name, and the query_value, Sofia.
>
> **[4:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=247)** That's almost right, but not quite.
>
> **[4:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=251)** To get this right, we need to tell the AI agent what the column headings might be.
>
> **[4:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=256)** So I'll go back here, open AI Agent, go into the System Message, copy these column headings.
>
> **[4:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=266)** Column Headings.
>
> **[4:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=271)** Paste them in.
>
> **[4:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=276)** Then, go back and try again.
>
> **[4:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=280)** And this time, it's passing in the correct query_column name and the correct query_value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1), this, (1), else. (1), interface (1)
> **Code Identifiers:** query_value (4), query_column (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Using the filter node to modify data
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=0)** - [Instructor] The agent is now passing the right information to the n8n Workflow Tool down here.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=6)** But as you can see in the chat, there's no information coming from the tool.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=10)** Let's fix that.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=11)** I'll go into Row lookup, and right now there's nothing except the trigger, which explains why no information is coming back.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=18)** So let's add in the Google Sheets.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=22)** And this time we're not using Google Sheets as a tool, so that means when I select Google Sheets here, I get to pick what type of action I want.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=31)** In this case, I want Get rows in sheet.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=36)** Same Google account as before.
>
> **[0:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=38)** Sheet Within Document, we're looking for Get Rows, I'll pick the right sheet, Volunteer-index, and the Short sheet.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=47)** I'm still not going to touch the filter because the old problems still remain here.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=52)** Instead, I'll add a custom filter.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=54)** I'll start by clicking this node button.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=57)** Under what happens next, I'll go down to Data transformation.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=61)** Here, we have a bunch of different options, including Add or remove items.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=66)** And what we're looking for is Filter, remove items matching a condition.
>
> **[1:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=70)** So I'll select Filter.
>
> **[1:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=71)** Then inside Filter, I need to set up the condition and the value.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=77)** Now to get those values, I'll say execute previous nodes.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=82)** This fires off the previous node, which is Google Sheets, and we get all the information and it also lists out when executed by another workflow, which is the trigger.
>
> **[1:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=91)** And when I open that trigger, we have the values we want.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=94)** So the value we're looking for is the query value.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=98)** That's easy enough.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=100)** And to make this look up fuzzy, meaning it doesn't have to be exact, instead of setting is equal to, I'll set it to contains.
>
> **[1:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=109)** That way we will get a broader match.
>
> **[1:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=111)** Next we have to add in the column.
>
> **[1:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=113)** So here we have the column name, but that's not the column we're looking for.
>
> **[2:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=120)** The column is one of the entries over here, but if I take any one of these and pull them over, I am now only checking for that column.
>
> **[2:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=127)** I don't want that, I want to check for this dynamic column that is defined by the AI.
>
> **[2:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=132)** Well, we can change this expression, so I'll take out full name and instead place the query.column inside.
>
> **[2:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=141)** So now we're saying go find the column that is the value that's passed in from the previous workflow.
>
> **[2:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=150)** And yes, right now it's red, that's because we haven't fired off the action yet, so I'm just going to save this as is.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=159)** Then go back to my project, go back to Volunteer Lookup, do the search again and see what happens.
>
> **[2:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=171)** We get the correct answer here.
>
> **[2:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=174)** Let's look, 388 tokens.
>
> **[2:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=177)** That's a good sign.
>
> **[2:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=178)** Let's see what information is here.
>
> **[3:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=180)** And look, we only have Sofia's entry and nothing else.
>
> **[3:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=184)** If I go over here, you'll see there's only one item being passed in, it is the row for Sofia.
>
> **[3:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=190)** And if I go back to my project, go back to Row lookup and go look at the Executions.
>
> **[3:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=198)** You'll see in this execution, Google Sheets returned nine items, but Filter discarded eight items and kept just one.
>
> **[3:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=207)** So now with this custom workflow, we can use the full Google Sheet and still only pass in the information we need and not all the information.
>
> **[3:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=216)** So I can go to the Editor here, go into Google Sheets, and change From list from Short to Full, Save.
>
> **[3:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=225)** Go back to my project and Volunteer Lookup.
>
> **[3:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=229)** Let's try a different name, so I'll say, "What's Chen's phone number?"
>
> **[3:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=236)** Now, I think there's more than one Chen in the dataset.
>
> **[3:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=239)** Yes, there is.
>
> **[4:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=240)** And here you see we get three different people, all of them listed, but the token number is still really low because this tool is only returning the rows we need.
>
> **[4:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=251)** Let's do one final check.
>
> **[4:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=253)** "Who is managed by Nitin?"
>
> **[4:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=258)** That's a completely different query for a completely different column.
>
> **[4:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=265)** Now there's an error that showed up here.
>
> **[4:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=267)** It says that the workflow did not return a response, but the system then goes and tries again, and on the second try it actually got a return.
>
> **[4:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=278)** Here we got 33 items, so still not the full 100, and over here we get a list of all those 33 items.
>
> **[4:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=287)** That means the sub workflow works, but I still think we can do better.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), match. (1), for. (1), else. (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** node (2), make (1), find (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating an MCP server in n8n
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=0)** - [Instructor] AI agents can use multiple different tools at the same time.
>
> **[0:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=4)** It's not immediately obvious the way things are laid out right now, but if I move this tool to the side, you can see here I can click on plus and add additional tools.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=13)** Now, if you remember back to the beginning, I said this agent will do two different things.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=18)** It'll retrieve information.
>
> **[0:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=19)** That's what we already have, and it'll also update information.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=22)** So that means we need to add an update tool to the agent.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=26)** I could do that right here.
>
> **[0:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=28)** Click plus, go search for Google Sheets update, and just add the tool in.
>
> **[0:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=33)** But there's a good chance, later on, I'll want to build another workflow that is also integrating with Google Sheets, and I want to use the same setup again.
>
> **[0:44](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=44)** It would make more sense to create a package that has all the available Google Sheets tools I normally use, and then just call that package and have the agent pick the tools at once.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=56)** and I can, thanks to the Model Context Protocol, also known as MCP.
>
> **[1:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=61)** MCP is an open protocol that standardizes how applications provide context to LLMs.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=68)** In other words, I can create an MCP server inside n8n, attach all the tools I may want to use to that server, and then call in the server from the AI agent, And the AI agent will be able to pick any tools it needs.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=84)** I'll start by removing this node.
>
> **[1:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=86)** That doesn't delete the sub-workflow.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=88)** It just removes the reference to it from my current workflow.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=92)** Then I'll save Volunteer Lookup, and open up the My projects folder in a new tab.
>
> **[1:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=97)** From here, I'll create a new workflow.
>
> **[1:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=100)** Call it Google Sheets MCP.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=106)** The first step of this workflow will be MCP and MCP Server Trigger.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=114)** I'm not going to touch anything here just yet.
>
> **[1:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=116)** We'll go back to the view, click on plus for tools, and then call in the old Call n8n Workflow Tool.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=124)** Here, I'll set it up just like before.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=128)** Pick the workflow from the list, the Row lookup, query_column, set to model decides.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=135)** Query_value, set to model decides.
>
> **[2:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=138)** And now I want to wire the MCP Server back into my original workflow.
>
> **[2:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=143)** To do that, I'll first save this new workflow.
>
> **[2:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=146)** Then go back into the MCP Server Trigger.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=148)** Here, I need to copy a URL that I can then paste into the Volunteer Lookup workflow to tell it where to find the MCP Server because this MCP Server will be called over the web.
>
> **[2:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=160)** Here, I can choose between a Test URL and a production URL.
>
> **[2:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=163)** To understand the difference, go down here to the bottom where it says, "When will this node trigger my flow?"
>
> **[2:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=168)** Open it up and it says, "This trigger has two modes, test and production.
>
> **[2:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=173)** Use test mode while you build your workflow.
>
> **[2:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=175)** Click the execute step button, then make an MCP request to the Test URL.
>
> **[3:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=181)** The execution will show up in the editor.
>
> **[3:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=184)** Use production mode to run your workflow automatically.
>
> **[3:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=187)** Activate the workflow, then make requests to the production URL.
>
> **[3:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=190)** These executions will show up in the executions list, but not in the editor."
>
> **[3:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=195)** So that means for now, when I want to do testing, I should have it at the Test URL.
>
> **[3:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=200)** So I'll copy the Test URL by clicking on it.
>
> **[3:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=203)** Going back to Volunteer Lookup, go to tool, and add in MCP.
>
> **[3:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=210)** It's the MCP Client Tool.
>
> **[3:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=212)** That's the one that consumes the MCP Server.
>
> **[3:35](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=215)** I'll paste in the URL I just copied here, and then open up my chat and send a standard request.
>
> **[3:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=226)** Let's see what happens.
>
> **[3:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=227)** "Error in sub-mode MCP Client.
>
> **[3:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=229)** Could not connect to your MCP server."
>
> **[3:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=232)** I need to click Execute step.
>
> **[3:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=234)** So now the MCP server's listening for the test event.
>
> **[3:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=237)** We'll try this again.
>
> **[3:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=238)** I'll go hover over here and click on the Repost Message button.
>
> **[4:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=245)** Now the MCP Server is queried.
>
> **[4:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=248)** We get an answer over here.
>
> **[4:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=249)** Looking at the tokens, it looks like we got only the information we needed.
>
> **[4:14](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=254)** And going in here, scrolling down, you see we only got that one entry.
>
> **[4:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=258)** So that means the MCP Server is working correctly, and we have the exact same flow, except we are now calling the information from the MCP Server, and the MCP Server, in turn, is calling in information from our sub-workflow.
>
> **[4:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=270)** So there's three workflows working together now.
>
> **[4:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=273)** And yes, for this small agent, that seems like overbuilding things, but it actually just makes it way more modular and easy to work with.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (21), url (8)
> **CLI Commands:** make (3), node (2), find (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** known as (1), is an  (1), in other words (1)
> **Code Keywords:** delete (1), let (1)
> **Code Identifiers:** query_column (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### Adding tools to the MCP server
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=0)** - [Instructor] But wait a moment.
>
> **[0:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=1)** The purpose of building that MCP server was to add in more tools.
>
> **[0:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=5)** And right now we just have the same tools.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=7)** So let's add in a new tool.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=9)** I'll click Plus here, then say Google Sheets.
>
> **[0:14](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=14)** I wanted to Google Sheets tool.
>
> **[0:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=16)** The setup at the beginning is the same as before, except now instead of Get Rows, I want Update Row.
>
> **[0:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=23)** We're still looking at the same document, Volunteer Index.
>
> **[0:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=26)** We're still looking at the same sheet, the full sheet now.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=31)** And because I'm doing Update Row, we now need to fill in more information.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=36)** Specifically, we need to map the columns for the sheet.
>
> **[0:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=39)** Because when we're doing an update, we're passing in information to a specific row and a specific column within that row.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=45)** Now this can be done either automatically.
>
> **[0:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=47)** By letting the system find the rows, you'll notice that is not the default.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=52)** That is because it doesn't always work that well.
>
> **[0:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=54)** So instead, we'll choose Map Each Column Manually.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=58)** The system goes in and grabs the columns.
>
> **[1:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=60)** Then we have to pick a column to match on.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=62)** That is how we match which row to choose.
>
> **[1:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=65)** And here you can pick any of the values.
>
> **[1:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=67)** So I recommend either picking the row number, which is the default number coming out of Google Sheets.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=73)** Or if you have an ID, then you can use the ID.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=76)** So I'll just choose ID.
>
> **[1:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=77)** For the values to update, we're going to do what we did before.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=80)** Just have the model, define the parameter, 'cause that way the model is notified "hey, you need to send us information," and then it'll do that.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=88)** So I'll just fill in all of those all the way down.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=90)** And that's it. I'll click out.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=92)** Now we have both Call the Value and the Update Sheet option.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=98)** Let's save that. Go back into Volunteer Lookup.
>
> **[1:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=101)** And nothing has changed because the MCP client is still the MCP client.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=106)** So let's see now if the agent is able to figure this out on our behalf.
>
> **[1:50](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=110)** So let's see if we can get the system to change Sophia from active true to active false.
>
> **[1:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=116)** "Set Sophia's active status to FALSE."
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=121)** Send that off.
>
> **[2:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=124)** Can't connect. All right, I need to go back here.
>
> **[2:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=127)** Open up the MCP server, Execute Step, then do it again.
>
> **[2:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=138)** Now we get an error, but if you look closely, you'll see the first call to the MCP client worked and we got the correct response.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=145)** The error only appears on the second call.
>
> **[2:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=146)** And if we look over here, it explains why.
>
> **[2:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=149)** It says "In test mode, the webhook only works for one call.
>
> **[2:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=154)** after you click this button."
>
> **[2:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=156)** That means we need to go back into the MCP server, switch over to Production URL, copy that URL, and also go switch this to an active workflow.
>
> **[2:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=165)** You have thousands of workflow runs, so there's no risk here of running over.
>
> **[2:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=171)** But it's important to note you're now actively using your runs with this MCP server.
>
> **[2:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=175)** Let's go back. Go into the MCP client.
>
> **[2:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=178)** Paste in the new URL, that's to the production URL, and then rerun the query.
>
> **[3:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=187)** First, we call the model to interpret the request.
>
> **[3:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=190)** Then we call the MCP client to get the data.
>
> **[3:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=193)** Then we send the data back to the model.
>
> **[3:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=195)** The model then generates the second request to the MCP client.
>
> **[3:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=199)** The model, this time passing in all the new data, including active false.
>
> **[3:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=203)** And let's see if the data got updated. It did.
>
> **[3:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=207)** It's now false.
>
> **[3:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=209)** Thanks to the MCP server, our agent is doing both the operations we wanted it to do with a minimum amount of effort.
>
> **[3:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=217)** You'll notice I hardly did any custom prompting here, apart from listing the column headings.
>
> **[3:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=222)** And the system is able to figure out the intent of the user even with no extra instructions.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (11), url (4), false (1)
> **Code Keywords:** let (6), switch (2), default. (1)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Creating a Slackbot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=0)** - [Instructor] My very first step in creating this workflow was adding this chat message received trigger.
>
> **[0:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=6)** That allowed me to use the chat down here and test out the AI agent as I was building it.
>
> **[0:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=12)** And now that it's functioning the way I want to, it's time to move on to the actual integration because this AI agent isn't supposed to just work inside N8N, it's supposed to work with Slack.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=24)** I need to add a Slack trigger at the front and then send Slack messages out at the back and this chat message received trigger will become just a backup for testing.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=36)** To hook the N8N workflow to Slack, I first need a Slack workspace where I have admin rights, so I've created one here.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=43)** I'm the only member and there is no content anywhere.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=46)** Integrating Slack is a multi-step process.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=49)** We'll do it over a couple of videos and this first one, we will start by creating a new app, and that's done by going to api.[slack.com/apps](https://slack.com/apps).
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=58)** Make sure you're logged in with your account so that you have access to the workspace.
>
> **[1:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=62)** I'll create a new app, I'll choose from scratch.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=66)** Then I'll give the app a name, Lookup.
>
> **[1:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=68)** Pick a workspace, Undestroyers, and click create app.
>
> **[1:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=73)** Next, I need to give this app permissions to do the things I needed to do in Slack.
>
> **[1:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=79)** For that, I'll scroll down under features to OAuth and permissions.
>
> **[1:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=84)** Then scroll down to scopes and bot token scopes.
>
> **[1:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=89)** Here I can add different OAuth scopes.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=92)** Each of these scopes is a capability the bot will have inside Slack, things like view messages that directly mention the lookup in conversation and allow Lookup to act as an app agent, et cetera, et cetera.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=105)** At minimum, I need to add an app mentions read that allows it to read messages that are sent to it.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=112)** Channels read, allows it to view basic information about public channels in a workspace.
>
> **[1:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=119)** Chat write, allows it to send messages as Lookup.
>
> **[2:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=123)** Groups read, allows it to see the different groups and private channels.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=129)** I am read, allows it to see private messages and I am right, allows it to write private messages.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=139)** You can add additional OAuth scopes too if you want to, but these are the ones you need to get anything to work properly.
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=145)** Once that's done, scroll back up to the top and click install to Undestroyers, click allow.
>
> **[2:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=154)** And now when I go back to Undestroyers, you'll see Lookup is sitting here.
>
> **[2:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=158)** So now there's an app that we can talk to and I can go up to general and I can ask, say at Lookup here, send the message.
>
> **[2:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=168)** And it says, you mentioned Lookup, but they're not on this channel.
>
> **[2:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=171)** I'll add them in and that means the app is working.
>
> **[2:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=174)** That was step one.

> [!info]- Semantic Content
>
> **Tools:** slack (9)
> **Code Keywords:** private (3), public (1)
> **Env Vars:** n8n (2)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [slack.com](https://slack.com) (1)
> **Cross-References:** go back to (1)

#### Authenticating Slack
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=0)** - [Instructor] Now we need to authenticate Slack with n8n.
>
> **[0:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=3)** Here, under OAuth & Permissions, we have an OAuth token.
>
> **[0:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=7)** I'll copy it.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=9)** Then I'll go over into n8n.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=11)** I'll add an additional trigger.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=13)** So I'll start up here by saying Slack.
>
> **[0:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=18)** Then I'll choose On bot app mention.
>
> **[0:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=21)** In the settings, I'll go to Credential to connect with, use the dropdown, click Create new credential, and this is where I need to paste in that access token.
>
> **[0:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=30)** Click Save.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=32)** Connection tested successfully.
>
> **[0:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=34)** That means everything is working.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=36)** Then down here, I can choose which channel to watch, and this bot has access to general.
>
> **[0:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=42)** And now I need to tell Slack where to send messages whenever this bot is mentioned and that's done using what's called a webhook.
>
> **[0:50](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=50)** So up here it says Webhook URLs.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=52)** Here we again have a test URL and a production URL.
>
> **[0:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=56)** And if you go down here, you'll see it's exactly as before.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=58)** So I'll copy the test URL, then I'll click Execute step.
>
> **[1:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=63)** So now we are listening for an event.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=66)** Then I'll go to Slack API, go to Event Subscriptions, click it to On, and paste in this URL.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=76)** I got verified right away here, and that's because I was listening for an event.
>
> **[1:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=80)** If I hadn't clicked that listen to event, it would've said here that the request URL did not pass.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=87)** If that happens to you, just go in and click the button and then things should work fine.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=92)** Now that it's verified, I'll go down to Subscribe to bot events, click Add Bot User Event, and here select the first option, app mention.
>
> **[1:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=103)** Click Save Changes.
>
> **[1:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=105)** Go back to n8n.
>
> **[1:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=106)** Click Execute step again.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=108)** So now we are listening.
>
> **[1:50](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=110)** Then I'll open up Slack, @Lookup, Hello.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=118)** And look at that.
>
> **[1:59](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=119)** Here's the message, "Hello," and that means Slack messages to the bot are now triggering the n8n workflow, which in turn means I can now wire it into my workflow.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=129)** So I'll move it up here, grab the end, and pull it down into AI Agent.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=135)** Then I'll go into the AI Agent settings and I'll have this new Slack trigger, which has different information than the JSON chat input.
>
> **[2:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=144)** Here, I want the message, which sit all the way down here.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=148)** I also want to have JSON chat input as an option, so I'll pull it up here.
>
> **[2:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=154)** And then I'll take these away and replace them with two bars like that.
>
> **[2:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=159)** And that means either get JSON chat input or get the chat input from Slack.
>
> **[2:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=166)** Let's see if that works.
>
> **[2:47](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=167)** I'll go back to my Slack trigger, click Execute step to make sure we're listening for the event.
>
> **[2:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=173)** We'll go to Slack, @Lookup, what is Sofia's phone number?
>
> **[3:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=181)** The event is triggered over here.
>
> **[3:03](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=183)** You can see it here.
>
> **[3:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=184)** One item, Slack trigger.
>
> **[3:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=186)** What is Sofia's number?
>
> **[3:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=188)** So let's see if it works.
>
> **[3:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=190)** I'll click Execute workflow, then go back to Slack and say, "Lookup, what is Sofia's number?"
>
> **[3:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=198)** Agent does its job and out comes the answer.
>
> **[3:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=201)** Sofia's phone number is, and then this fake number.
>
> **[3:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=204)** But nothing happens in Slack.
>
> **[3:26](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=206)** That's because we haven't sent the information anywhere.
>
> **[3:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=209)** That's next.

> [!info]- Semantic Content
>
> **Tools:** slack (13)
> **Env Vars:** url (5), json (3), api (1)
> **UI Navigation:** go to (4), dropdown (1), select the (1)
> **Code Keywords:** let (2), pass (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Adding a Slack trigger
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=0)** - [Speaker] To send messages to Slack.
>
> **[0:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=2)** I'll start by adding an item to the end of the AI agent here and say Slack, send a message.
>
> **[0:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=9)** The message I want to send is going to the channel.
>
> **[0:13](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=13)** The channel can be picked from a list by using the dropdown here, but if this is going to be dynamic, there's a good chance this bot will have access to multiple different channels.
>
> **[0:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=22)** In that case, I can change it to buy ID and then go over here to Slack trigger and pull out the channel expression and put that in here.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=31)** That way, every time a message comes in, it tells the system what channel it came from, and then the message that comes back sends the message to the same channel.
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=41)** Then we set up the message type.
>
> **[0:43](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=43)** In this case, a simple text message and the message text will be whatever comes out of the AI agent.
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=49)** So that's the output up here.
>
> **[0:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=52)** With these settings in place, let's see if this works. Execute the workflow.
>
> **[0:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=58)** We're now waiting for the trigger event, and in response, we get Sofia's number is and then the number.
>
> **[1:12](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=72)** But you'll notice something weird here.
>
> **[1:14](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=74)** This response is coming from me.
>
> **[1:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=76)** That's because I have the credential set to my login instead of the app.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=82)** So here, Slack account two is my login.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=85)** Slack account three with just the Slack API is the one I created when I pasted in the token.
>
> **[1:30](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=90)** So let's swap it over to Slack account three, then go execute the workflow one more time.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=99)** Process fires off, goes and grabs a bunch of information, and in response, we get all the correct information.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=108)** And this time, it's coming from the app, not from me.
>
> **[1:52](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=112)** Let's see if we can change Sofia's active status to false again, only this time through Slack.
>
> **[1:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=118)** So I'll scroll a it over here, go back and execute the workflow.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=128)** And there we go, it's been changed here and it says, Sofia's active status has been successfully set to false.

> [!info]- Semantic Content
>
> **Tools:** slack (8)
> **Code Keywords:** let (3), case, (2), from, (1), type. (1)
> **Non-Speech:** (typing loudly) (2)
> **Env Vars:** api (1)
> **UI Navigation:** dropdown (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [speaker] (1)

#### Sending messages to Slack
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=0)** - [Instructor] Now that everything is working, it's time to take the workflow from inactive in testing mode to active, so I don't have to click execute workflow every time I want to send a message from Slack.
>
> **[0:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=11)** To do that, I first need to go into the Slack Trigger and change the webhook URL from Test URL to Production URL, copy it, then go up into Slack API find the Event Subscriptions, and here I want to change the Request URL so that we are using the Production URL.
>
> **[0:31](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=31)** You'll notice this one here says webhook-tests.
>
> **[0:35](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=35)** This one says webhook.
>
> **[0:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=36)** When I do that, I immediately get: "Your URL didn't respond with the value challenge parameter."
>
> **[0:41](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=41)** That's because I need to take my workflow live.
>
> **[0:45](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=45)** So I'll go here and toggle on Active.
>
> **[0:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=48)** Click Got it, click Retry. Now it's verified.
>
> **[0:53](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=53)** Click Save Changes.
>
> **[0:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=55)** And now from Slack, I should be able to say, @Lookup Give me a list of everyone managed by Nitin.
>
> **[1:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=66)** Now we wait for the process to execute.
>
> **[1:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=71)** And when it's done, here's a list of everyone managed by Nitin, and it's a list of a lot of people.
>
> **[1:18](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=78)** Back in n8n, I can now see this execution by going to Executions up here.
>
> **[1:23](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=83)** It's sitting at the very top.
>
> **[1:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=85)** Here I get a breakdown of what happened.
>
> **[1:27](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=87)** So I can see one item went in, then two executions were done here.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=92)** Then one item went out and I can open the logs and see the actual transactions that happened.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=99)** So it's the same as what we had before.
>
> **[1:42](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=102)** The difference being, I'm no longer seeing it in the editor, I'm seeing it under Executions.
>
> **[1:48](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=108)** That also means I can go to overview here and go to Executions.
>
> **[1:51](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=111)** And here you can go in and inspect each of the executions.
>
> **[1:54](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=114)** So for example, here we can look at the Row lookup and see Manager, Nitin, Google Sheets.
>
> **[2:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=121)** We got the entire thing, all the entries, and then for the filter, it discarded 77 items and kept 33 items.
>
> **[2:09](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=129)** So that's it.
>
> **[2:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=130)** Our project now has the main workflow, the MCP workflow and the Row lookup workflow.
>
> **[2:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=135)** And in case you're wondering about this one here, being inactive, I hover over it.
>
> **[2:19](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=139)** It says: "'Execute Workflow Trigger' doesn't require activation as it's triggered by another workflow."
>
> **[2:25](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=145)** So that's why it's not active.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), api (1), mcp (1)
> **Tools:** slack (4)
> **UI Navigation:** go to (2), toggle (1), open the (1)
> **CLI Commands:** find (1)
> **Code Keywords:** require (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=0)** - And that's it.
>
> **[0:01](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=1)** If you're still with me, you have everything you need to go build your own AI powered automation workflows using N8N.
>
> **[0:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=8)** So go try it for yourself.
>
> **[0:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=10)** And because I know you want to play around with what I've built, I've placed all of these workflows and the data that I used in the GitHub repository for this course.
>
> **[0:20](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=20)** And that's one of the cool things about N8N I didn't show you earlier.
>
> **[0:24](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=24)** Once you set up a workflow, you can export it and other people can use it.
>
> **[0:29](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=29)** To import one of my workflows, simply open up a new workflow in your project.
>
> **[0:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=32)** Click the three dots in the top corner, click import from file, and then import the entire workflow in.
>
> **[0:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=40)** Oh, and there are thousands of workflows you can check out available directly from N8N.
>
> **[0:46](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=46)** Just go to [n8n.io/workflows](https://n8n.io/workflows).
>
> **[0:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=49)** Do a search and you'll find pretty much anything you can think of either as inspiration or to use yourself.
>
> **[0:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=57)** And one more thing, remember that complex workflow I showed you at the very beginning of the course, the one that had several different agents working together.
>
> **[1:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=67)** You may be wondering why I built that one in addition to the simple one.
>
> **[1:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=71)** The answer is when you start integrating services in automation like this, you also give people, and sometimes even an AI control over things that previously only you could control.
>
> **[1:22](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=82)** The Google sheet that I set up is my Google sheet, and only I have access to it.
>
> **[1:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=88)** But now that I've set it up to be integrated with Slack, anyone with access to that Slack channel can message lookup and make changes to my Google sheet.
>
> **[1:38](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=98)** This more complex workflow is probably closer to what I would build if I was actually shipping this into production, because within this workflow, I can put in stops and checks and balances to make sure the person using the workflow actually has permission to do it.
>
> **[1:56](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=116)** For example, I would likely put in a filter that said, only these accounts have the ability of updating posts, whereas everyone else only has the ability to see the posts.
>
> **[2:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=128)** And I would use IDs from Slack to do that.
>
> **[2:11](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=131)** That would be really hard to do in the simple workflow because there are no filters inside ai.
>
> **[2:17](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=137)** So if I was to do it there, I would have to make another filter somewhere.
>
> **[2:21](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=141)** So instead, by breaking out each operation, I can put in more filters and I can also make it more granular.
>
> **[2:28](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=148)** So now that you've seen what's possible, go check out the different versions of this that I built.
>
> **[2:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=153)** See how they wired together, try them out for yourself and keep building on them.
>
> **[2:37](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=157)** And as you do so, go find me on LinkedIn and tell me about your experiences, because I love to hear what you built, what worked, what didn't, and what you learned in your own building process.
>
> **[2:49](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=169)** And finally, as always, whenever you run into issues, start by looking at the docs.
>
> **[2:55](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=175)** The N8N docs are expansive.
>
> **[2:58](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=178)** There's a ton of information there, and most of the questions you have will probably be answered here or in the expansive user forums.
>
> **[3:06](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=186)** Now, all that's left for me to say is look it in.
>
> **[3:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=188)** Go build some amazing AI powered automation workflows for yourself and for others, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), go build (2), find (2)
> **Env Vars:** n8n (4)
> **Tools:** slack (3), github (1)
> **Code Keywords:** this, (1), finally, (1)
> **Prerequisites:** set up (2)
> **URLs:** [n8n.io](https://n8n.io) (1)
> **Cross-References:** in the next (1)
> **Documentation:** the docs (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/build-ai-agents-and-automate-workflows-with-n8n-5437042)

## Skills Covered

- AI Productivity
- Generative AI
- AI Agents
- Artificial Intelligence (AI)

## Path Context

### In [[Building AI Agents- Advanced Techniques for Developers]]
**1 of 4** | [[Build AI Agents and Chatbots with LangGraph]] →

## Appears In

- [[Building AI Agents- Advanced Techniques for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On AI- Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)]] — Generative AI, AI Agents, Artificial Intelligence (AI)
- [[Copilot Agents- Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)]] — AI Agents, Artificial Intelligence (AI), AI Productivity
- [[Agentic AI- Building Data-First AI Agents]] — AI Agents, Artificial Intelligence (AI), AI Productivity
- [[Agentic AI for Developers- Concepts and Application for Enterprises]] — Generative AI, AI Agents, Artificial Intelligence (AI)
- [[Understanding Generative AI in Cloud Computing- Services and Use Cases]] — Generative AI, AI Agents, Artificial Intelligence (AI)

---

[↑ Back to top](#)