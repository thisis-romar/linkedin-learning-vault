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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20Ai%20Agents%20And%20Automate%20Workflows%20With%20N8n.md)

![Build Ai Agents And Automate Workflows With N8n](https://media.licdn.com/dms/image/v2/D4E0DAQGmwk8Sfhr82g/learning-public-crop_675_1200/B4EZd_sUmBHcAY-/0/1750194015319?e=2147483647&amp;v=beta&amp;t=dlJ1bHTQ9Mb9RyN54JSyKOE9ROVrmFukVdcGcdCZUKM)

# Build Ai Agents And Automate Workflows With N8n

> Use n8n - the open source workflow automation tool - to build advanced custom AI-powered business-process automations connecting your existing tools together to create AI agents that simplify your work. Choose n8n as a cloud app, mount it on prem, or run it locally on your computer for full control. Learn how to build an advanced AI agent that connects with external sources like Google Sheets and 

> [LinkedIn Learning](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n) | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Making AI agents work for you](#making-ai-agents-work-for-you)
- [**1. Building AI Agents with n8n**](#1-building-ai-agents-with-n8n) (13 videos)
  - [Introducing n8n](#introducing-n8n)
  - [The Plan: An AI-powered Slackbot managing a Google Sheet](#the-plan-an-ai-powered-slackbot-managing-a-google-sheet)
  - [Creating a new n8n workflow with a trigger](#creating-a-new-n8n-workflow-with-a-trigger)
  - [Adding an AI agent and a chat model](#adding-an-ai-agent-and-a-chat-model)
  - [Adding a tool to the AI agent](#adding-a-tool-to-the-ai-agent)
  - [Using a sub-workflow as a tool](#using-a-sub-workflow-as-a-tool)
  - [Using the filter node to modify data](#using-the-filter-node-to-modify-data)
  - [Creating an MCP server in n8n](#creating-an-mcp-server-in-n8n)
  - [Adding tools to the MCP server](#adding-tools-to-the-mcp-server)
  - [Creating a Slackbot](#creating-a-slackbot)
  - [Authenticating Slack](#authenticating-slack)
  - [Adding a Slack trigger](#adding-a-slack-trigger)
  - [Sending messages to Slack](#sending-messages-to-slack)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Making AI agents work for you](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/making-ai-agents-work-for-you?u=76281980&t=0)** - The other day, my coworker asked if it was possible to create an AI-powered [[Slack]] bot that can go into a [[Google]] Sheet and retrieve only the information they asked for, and then update information when necessary without them having to touch the spreadsheet. And I said, "Yes, you can, if you use an automation tool like n8n." Automation tools have turned out to be the bridge that brings us to the place where we can actually get utility out of AI. In part because automation tools are already set up to plug into everything we're using and in part because AI works so well as a translator between our natural language requests and the machine instructions these automation tools need to operate. And that's what I'll show you how to do in this course. Use n8n to build an agent that takes natural language instructions to perform advanced actions in different tools and then sends back natural language responses. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (1), [[Google]] (1)
> **Tools:** slack (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 1. Building AI Agents with n8n

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing n8n](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=0)** - [Instructor] N8N is an open source AI workflow automation tool or [[AI Orchestration]] tool. Using n8n, you set up workflows in a visual environment like the one you see here, where you start off with a trigger, then set up some sequence of actions that include AI tools, external tools, functions, whatever you desire to perform some specific output. And in this environment, you can use tools provided by n8n. You can create your own custom tools using code, and you can even bring in and integrate your own external tools. The application falls in the same category as Make and Zapier with one significant difference. That n8n is open source. You can go to [[GitHub]], download n8n onto your computer and install it locally on your system or in the cloud. This means individuals, companies, and enterprises can set up n8n in whatever secure environment they have on-prem or in the cloud in secure storage and have complete control over what happens. And because it's open source, you are free to do whatever you want with it, plug in your own AI models, hook it up to your own systems. Whatever you want to do and whatever you want to build. n8n allows you to do it. Working with n8n, you have two main options. You can use the cloud service by going to [n8n.io](https://n8n.io). Click get started and sign up for an account. Or you can self-host n8n. If you choose this option, the recommendation is to host it somewhere in the cloud, so you have a URL you can reference anytime you are using webhooks.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/introducing-n8n?u=76281980&t=92)** The easiest way to do this is through a Docker installation, and if you go over to the sidebar in documentation, under server setups, you'll see you have server setups for all the major services, including Digital Ocean, [[Microsoft Azure|Azure]], [[Google Cloud Platform (GCP)|Google Cloud]], and [[Amazon Web Services (AWS)|Amazon Web Services]]. As I record this course, I'm using my own account on n8n Cloud, and if you want to follow along without doing any of the installation, you can sign up for your own free 14 day trial on [n8n.io](https://n8n.io). The features you'll see in this course are the same whether you use this cloud version or the self-hosted version somewhere in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Orchestration]] (1), [[GitHub]] (1), [[Microsoft Azure|Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Prerequisites:** set up (3), install (1)
> **CLI Commands:** make (1), docker (1)
> **URLs:** [n8n.io](https://n8n.io) (2)
> **Env Vars:** n8n (1), url (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### [The Plan: An AI-powered Slackbot managing a Google Sheet](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=0)** - Okay, here's the plan. Imagine an organization with hundreds of volunteers and managers who want to gain access to information about the volunteers as easy as possible. All the volunteer information is in a spreadsheet, but there's a lot of it, and the organization uses [[Slack]] for internal communication. I want to build a Slack bot that takes natural language queries from the users, goes to n8n, and uses an automation process to retrieve information from the spreadsheet and also update information in the spreadsheet when necessary. That is not a straightforward process, because natural language queries can take many different [[Forms]], and this is one of the places where AI excels. Because AI can work as an interface between us humans, our language, and our data to interpret the intent of our queries and turn it into something the data system can use, and that is one of the things n8n is really good for. We start with a message from Slack, then we analyze the intent of the request and find out, is this an info request, is it an update request, or is it out of scope? Then based on that information, we either go to the [[Google]] Sheet and retrieve information, or go to Google Sheets and update the information, or create some sort of response saying, "Hey, I don't have this information," or, "Your question is out of scope," and send it back to Slack. Now, this workflow is intimidating. The good news is, that's not what we're building. Here's the workflow we'll build.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/the-plan-an-ai-powered-slackbot-managing-a-google-sheet?u=76281980&t=93)** It does the same things, but leans on the capabilities of the AI language model to perform all those complicated actions. This agent workflow takes a Slack message, passes it into an agent that uses OpenAI's chat model to process information, then it calls in an MCP client that has two tools, one workflow tool to filter information from the Google Sheet and another tool to update the Google Sheet. Based on the query coming in from Slack, the agent retrieves information, updates information, and does whatever else is requested, and then passes the response back the Slack again. This workflow, looks simple, is a little more complex than what you see right here, which is why I'm using it as an example in this course, and showcases how much we can lean on AI to solve complex problems when we're working with natural language. But enough talk, let's actually build this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (7), [[Google]] (4), [[Forms]] (1)
> **Tools:** slack (7)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Env Vars:** mcp (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - okay (1)

#### [Creating a new n8n workflow with a trigger](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=0)** - [Instructor] Let's build a new workflow from scratch. In N8N, you can either work in your personal environment or in a project environment. In each of these environments, you can set up workflows, credentials, and see the executions of any of your workflows. And these are kept separate so that you don't have accidental sharing of credentials. Since I'm starting up a brand new project, I'll open my project and then click on Create Workflow. The first thing I'll do is change the name of the workflow. I'll call it Volunteer Lookup. And then I'll start with a trigger. So I'll click Add First Step. This opens up a side panel, and from here I can choose what trigger I want to start with. Options include manual triggers, event triggers, schedule triggers, webhook calls, form submissions, et cetera, et cetera. If we click into On App Event, you see a long list of events from different services that can trigger actions. Under here, you'll find [[Slack]], [[Google]] Workplace, [[Microsoft 365]], and pretty much any other external service you already use. And anytime you do something in those services, those actions can trigger events inside N8N. My workflow will eventually use Slack, but I want to be able to test it without having to go through Slack. So to start with, I'll choose this option On Chat Message, select it. The editing window opens. I'm just going to click outside it to go back to my canvas. And this chat message creates a chat app in my interface. And here I can now chat directly with the app. Now of course, when I do that, I'm not actually triggering any events, but you can already see things happening. I sent a message into the workflow.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-new-n8n-workflow-with-a-trigger?u=76281980&t=93)** Down here, I get a log that says when chat message was received, and here I get the information. So the chat input was, hello. What you'll also notice is the chat app down here automatically receives whatever comes out of the last node. So even though I haven't hooked anything in yet, I can still see the output in the chat. This becomes important as we start testing things out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (3), [[Google]] (1), [[Microsoft 365]] (1)
> **Tools:** slack (3)
> **CLI Commands:** find (1), node (1)
> **Env Vars:** n8n (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Adding an AI agent and a chat model](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=0)** - [Instructor] With the trigger in place, let's set up an agent so we have something to talk to. First off, I'll clear out my chat session here so that we're starting from scratch, then I'll click the plus symbol to connect something to this first node. This opens the What happens next panel on the side where I can choose from AI, Actions in an app, that is any external app, Data transformations like filters and data conversions, Flow transformations, Core features, and even Human in the loop. We'll look at some of these later, so for now, I'll click AI. From here, you can choose different AI models. You can also choose sentiment analysis, which gives you different outputs depending on the Sentiment, Summarization Chains, the Text Classifier and so on, but the one that we're going to focus on here is AI Agent. When I select the AI Agent, it opens up in the node configuration view, and this is what you'll see across all our nodes. The input is on the left, then we have the main node we're working on in the center, and then the output on the right. And what you can see right away is we don't have any input, and therefore, the system doesn't know what to do. So, I'm going to click on execute previous nodes here. That brings me to the chat, and I'll just say hello to send a message through. Then you see the AI agent gets a warning because something is wrong, and when I open it up, what is wrong is the AI agent doesn't yet have a model to work with, so let's fix that. I'll go down to the bottom where it says Chat Model and click the plus symbol to add a chat model. Then I can choose from a number of different AI models.
>
> **[1:33](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=93)** So, here, I'm going to scroll to the bottom and choose OpenAI Chat Model. This is the [[OpenAI API]], so now I need to add in my credentials. I can do that by clicking Select Credential, Create new credential. From here, I need my OpenAI API key, so I'll go to platform.[openai.com](https://openai.com). I've already created a new project for this called Automation, so I'll go to Dashboard, navigate over to API Keys, and create a new key. I'll call it n8n-volunteer. Copy that key, paste it in, Save. The credential is successfully created, and the connection is tested successfully. That means everything is good to go. I can close out this window, and now we have a model connected. To get back to the agent, I'll click on the symbol up here, and now I can set up the interaction with the AI. Up here at the top it says Source for Prompt Connected Chat Trigger Node, and that's what you see down here, [[JSON]].chatInput. That's this node over here that says Hello, that's the message I sent in, and this is a breakdown of all the inputs that are available currently. You'll see as we add more nodes, this input breakdown will expand greatly because we get more data to work with. The system so far has figured out that because we are connecting an AI agent to a chat node, this is probably the input we want. But if it's not, you can change it by clicking here, going to Define below,
>
> **[3:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=187)** and then you can type in anything you want. For example, you can grab chat input and dump it in. That automatically switches it to Expression, and you can also put text around it. So, you can say things like requests, and then the chat input. This is an expression, so you can call anything. You can even put in [[JavaScript]] expressions if you want to. Now, this is the user message. You can also control the system message for the AI by going into Add Options and open up System Message. The default system message is, as always, you are a helpful assistant, but this is where you can put in any system message you want to apply to the AI model. So, let's see how this works now. I'll click out of this, then I'll move it over so it's easier to see what's going on, and I'll go down to my chat. So, pay attention up here when I put in my message.
>
> **[4:02](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-an-ai-agent-and-a-chat-model?u=76281980&t=242)** I'll send my message, and up here at the top, you saw the message went into the AI agent, the AI agent sent the message to OpenAI, then the message came back, and then we got the result down here in the chat. What you're seeing here is a visualization of your workflow, and that becomes important as you start building out your workflow, 'cause you can see where the information is traveling through your workflow, and also where things go wrong when things go wrong. Now that the workflow is complete, we can go down and look at the logs. So, here we first have the original message, write a haiku about a duck. Then we have the AI agent that received the input, write a haiku about a duck and sent the output, which is the actual haiku, and then when we go into the sub-item, the OpenAI chat model, you can see here's the system message, you're a helpful assistant, and the human message, which is REQUEST, and then write a haiku about a duck. So, this here is what we put in here, REQUEST and then the chat input. Now, you notice the AI agent has two more inputs. We have Memory for when you want to create an actual chat. You can plug in a standard simple memory, that's the n8n database, or you can use [[MongoDB]] or Motorhead or [[PostgreSQL|Postgres]] or whatever you want. But for our app, we don't actually need memory, this is a one-and-done transaction, so I'm not going to plug that in, and you can also plug in Tools. We'll look at that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2), [[JSON]] (1), [[JavaScript]] (1), [[MongoDB]] (1), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** node (6)
> **Env Vars:** api (3), request (2)
> **UI Navigation:** click on (2), go to (2), select the (1)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** chatinput (1)
> **URLs:** [openai.com](https://openai.com) (1)

#### [Adding a tool to the AI agent](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=0)** - [Narrator] The tool feature in [[AI Agents]] allow us to plug external services, custom functions, even other workflows into the AI agent for the AI model to use. And this is what makes n8n and these AI agents so powerful. The easiest way to understand what's going on here is through a basic example. So up here I have a [[Google]] sheet that has two sheets in it, a short sheet with nine volunteers, and a full sheet with over a hundred volunteers. We're going to work with a short one for now. These are not real people, this is just example data. But you can extrapolate and see how this could be a database, a larger Google sheet, whatever you can think of. I want my AI agent to be able to access that data and answer questions about it. And that's what we use tools for. Now, just like with OpenAI to plug in Google Sheets, I need to first authenticate, and I can do that by adding in the tool, but I can also do it by going back to my project, going to credentials here I already have the OpenAI credentials set up. That's what we did in the previous video. I can go in here and choose create credential, then choose Google. And here you see we have a ton of options. There are separate credentials for each individual feature within Google and all these other services. I'm looking specifically for Google Sheets off to API. So I'll click on that one. Click continue. From here, I can now click sign in with Google. This takes me through the standard off loop where I select the account I want to use. Then give n8n permission to access that account. Click continue, get a connection successful message
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=96)** that I can close out the window. And here it says account connected. Now, because I haven't set up any features yet, it says needs first set up here. So I can go back into my project, go to volunteer lookup and click on tool. Here I can search for Google. I specifically want Google Sheets tool. I'll select that one. Then in the dropdown I can select the account I want to use. If you didn't have an account already, you can also click create new credential to log in, going through the exact same loop as what I just showed you. And once that connection has been made, I can set everything else. Up at the top we have a tool description that tells the AI agent what this tool can do. So set automatically makes sense. Next we have the resource. The default is sheet within the document, but you can also choose to document itself then operation. And we can choose get row, delete rows, delete, create, clear, append rows, and append or update row. For now I'm choosing get rows 'cause we just want the data. And then we can choose the actual document from the Google accounts. I want volunteer index. And within it, the short sheet, I'm not going to touch any of the other features. I'll just click out. So now we have chat, AI agent, AI model, and Google Sheets. Let's see what happens if I ask about some information from the sheet. How many volunteers are in the sheet?
>
> **[3:15](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-tool-to-the-ai-agent?u=76281980&t=195)** The AI agent now fires off the message. True OpenAI. OpenAI calls the sheet, all the information from the sheet is passed back into the model for a second run. And then the model answers the question. We can see it down here on the logs. Here we have the OpenAI chat model that gets the request. How many volunteers are in the sheet? The model realizes it can use the tool then calls in Google sheets. Google sheets returns all the data from the entire sheet as [[JSON]], so we can see it here. All that data gets passed into the model. So now we have the system message, the human message, how many volunteers and all the data from the Google sheet. And then the model creates the response we see over here. So with this setup, we can now use the AI to parse through the sheets and get any information we want without doing things like filtering. So for example, I can say list all the currently active volunteers. You'll see in the volunteer index that some are active and some are not active. I'm not doing any filtering here. I'm just getting the language model to brute force the answer by going in and getting all the data and then parsing it. And in response we get here are the current active volunteers. This is information directly from the spreadsheet, so it's all correct and grounded in reality. It's just parsed for my convenience. And this is exactly what I set out to build this agent for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (14), [[AI Agents]] (2), [[JSON]] (1)
> **UI Navigation:** click on (2), select the (2), go to (1), dropdown (1)
> **Prerequisites:** set up (3), setup (1)
> **Env Vars:** api (1), json (1)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [narrator] (1)

#### [Using a sub-workflow as a tool](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=0)** - [Instructor] Okay, this setup works, but you may have spotted that there's a problem here. You can see it right down here. The number of [[Tokens]] being passed into the model is really high. And that's because when we call the model, after the [[Google]] Sheets lookup, all the information from the sheet is passed back to the AI model. That's okay when we only have 10 entries, but if I switch over to the main sheet with over 100 lines, it becomes an awful lot of data. And this is just an example of a small database. If you imagine a much larger database or much bigger data, passing all that data into the model would not only cause the model to not work properly because there's too much data to parse through, but would also be really wasteful because you're paying per token when you're using any of the APIs for these AI models. And passing in tons of wasted tokens is wasted money and wasted energy. To fix this, we somehow have to get the agent to tell Google Sheets to only return the relevant roles and nothing else. But that's tricky because this is a natural language interface. The user could put in any question, and the AI agent has to figure out the intent of that question before requesting information from Google Sheets. For example, "What is Sofia's phone number?" In this circumstance, the filter should be for the first name column, look for Sofia, and then return any row that has Sofia's information in it.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=94)** Now, you may remember the Google Sheets tool has a filter down here, but if I add a filter, I have to point to a column within the spreadsheet. Now, I could put in an expression here, but I would still need to get the AI to output the correct column name. And no matter how much [[Prompt Engineering]] you do, that will never be a reliable option. So this is already a non-starter. Does that mean we can't get this to work? No. As I explained in the beginning of the chapter, with n8n, you can do pretty much anything you want. And I also said that you can append another workflow as a tool. So I'm going to delete Google Sheets, save my workflow, then go back to My Project, and create a new workflow. This is also called a sub-workflow. I'll call this one Row Lookup. And as the trigger for this workflow, I'll go search for workflow here. This gives us Execute Sub-workflow, and the trigger is when executed by another workflow. This trigger allows us to communicate to the AI agent what information the workflow needs. So here, I can now set up the fields I need, which would be the query_column, which is a string, and the query_value. Before we do anything else, let's save that, and wire it up inside Volunteer Lookup. Under the AI Agent, I'll add a new tool. I'll type in workflow, Call n8n Workflow Tool. And here, From List, I will find My Project, Row Lookup.
>
> **[3:16](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=196)** It automatically spells out it wants query-column and query-value. And instead of pointing at a data source here, I'll click this button, let the model define this parameter. And do the same for query_value. So now we're telling the model we need these values, figure out what they are. Just for safety, I'll also put in a description telling the model what this tool is for. And then, I'll fire off a chat message to make sure that all the information is passing through. So I'll ask the same thing as before, "What is Sofia's phone number?"
>
> **[3:57](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-a-sub-workflow-as-a-tool?u=76281980&t=237)** Now, when we go in here to Call n8n Workflow Tool, you'll see a query is passed in with a query_column, name, and the query_value, Sofia. That's almost right, but not quite. To get this right, we need to tell the AI agent what the column headings might be. So I'll go back here, open AI Agent, go into the System Message, copy these column headings. Column Headings. Paste them in. Then, go back and try again. And this time, it's passing in the correct query_column name and the correct query_value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Tokens]] (2), [[Prompt Engineering]] (1)
> **Code Identifiers:** query_value (4), query_column (3)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Using the filter node to modify data](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=0)** - [Instructor] The agent is now passing the right information to the n8n Workflow Tool down here. But as you can see in the chat, there's no information coming from the tool. Let's fix that. I'll go into Row lookup, and right now there's nothing except the trigger, which explains why no information is coming back. So let's add in the [[Google]] Sheets. And this time we're not using Google Sheets as a tool, so that means when I select Google Sheets here, I get to pick what type of action I want. In this case, I want Get rows in sheet. Same Google account as before. Sheet Within Document, we're looking for Get Rows, I'll pick the right sheet, Volunteer-index, and the Short sheet. I'm still not going to touch the filter because the old problems still remain here. Instead, I'll add a custom filter. I'll start by clicking this node button. Under what happens next, I'll go down to [[Data Transformation]]. Here, we have a bunch of different options, including Add or remove items. And what we're looking for is Filter, remove items matching a condition. So I'll select Filter. Then inside Filter, I need to set up the condition and the value. Now to get those values, I'll say execute previous nodes. This fires off the previous node, which is Google Sheets, and we get all the information and it also lists out when executed by another workflow, which is the trigger. And when I open that trigger, we have the values we want.
>
> **[1:34](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=94)** So the value we're looking for is the query value. That's easy enough. And to make this look up fuzzy, meaning it doesn't have to be exact, instead of setting is equal to, I'll set it to contains. That way we will get a broader match. Next we have to add in the column. So here we have the column name, but that's not the column we're looking for. The column is one of the entries over here, but if I take any one of these and pull them over, I am now only checking for that column. I don't want that, I want to check for this dynamic column that is defined by the AI. Well, we can change this expression, so I'll take out full name and instead place the query.column inside. So now we're saying go find the column that is the value that's passed in from the previous workflow. And yes, right now it's red, that's because we haven't fired off the action yet, so I'm just going to save this as is. Then go back to my project, go back to Volunteer Lookup, do the search again and see what happens. We get the correct answer here. Let's look, 388 [[Tokens]]. That's a good sign. Let's see what information is here. And look, we only have Sofia's entry and nothing else. If I go over here,
>
> **[3:05](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=185)** you'll see there's only one item being passed in, it is the row for Sofia. And if I go back to my project, go back to Row lookup and go look at the Executions. You'll see in this execution, Google Sheets returned nine items, but Filter discarded eight items and kept just one. So now with this custom workflow, we can use the full Google Sheet and still only pass in the information we need and not all the information. So I can go to the Editor here, go into Google Sheets, and change From list from Short to Full, Save. Go back to my project and Volunteer Lookup. Let's try a different name, so I'll say, "What's Chen's phone number?" Now, I think there's more than one Chen in the dataset. Yes, there is. And here you see we get three different people, all of them listed, but the token number is still really low because this tool is only returning the rows we need. Let's do one final check. "Who is managed by Nitin?" That's a completely different query for a completely different column. Now there's an error that showed up here. It says that the workflow did not return a response, but the system then goes and tries again, and on the second try it actually got a return. Here we got 33 items,
>
> **[4:40](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/using-the-filter-node-to-modify-data?u=76281980&t=280)** so still not the full 100, and over here we get a list of all those 33 items. That means the sub workflow works, but I still think we can do better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[Data Transformation]] (1), [[Tokens]] (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** node (2), make (1), find (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating an MCP server in n8n](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=0)** - [Instructor] [[AI Agents]] can use multiple different tools at the same time. It's not immediately obvious the way things are laid out right now, but if I move this tool to the side, you can see here I can click on plus and add additional tools. Now, if you remember back to the beginning, I said this agent will do two different things. It'll retrieve information. That's what we already have, and it'll also update information. So that means we need to add an update tool to the agent. I could do that right here. Click plus, go search for [[Google]] Sheets update, and just add the tool in. But there's a good chance, later on, I'll want to build another workflow that is also integrating with Google Sheets, and I want to use the same setup again. It would make more sense to create a package that has all the available Google Sheets tools I normally use, and then just call that package and have the agent pick the tools at once. and I can, thanks to the Model Context Protocol, also known as MCP. MCP is an open protocol that standardizes how applications provide context to LLMs. In other words, I can create an MCP server inside n8n, attach all the tools I may want to use to that server, and then call in the server from the AI agent, And the AI agent will be able to pick any tools it needs. I'll start by removing this node. That doesn't delete the sub-workflow. It just removes the reference to it from my current workflow.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=92)** Then I'll save Volunteer Lookup, and open up the My projects folder in a new tab. From here, I'll create a new workflow. Call it Google Sheets MCP. The first step of this workflow will be MCP and MCP Server Trigger. I'm not going to touch anything here just yet. We'll go back to the view, click on plus for tools, and then call in the old Call n8n Workflow Tool. Here, I'll set it up just like before. Pick the workflow from the list, the Row lookup, query_column, set to model decides. Query_value, set to model decides. And now I want to wire the MCP Server back into my original workflow. To do that, I'll first save this new workflow. Then go back into the MCP Server Trigger. Here, I need to copy a URL that I can then paste into the Volunteer Lookup workflow to tell it where to find the MCP Server because this MCP Server will be called over the web. Here, I can choose between a Test URL and a production URL. To understand the difference, go down here to the bottom where it says, "When will this node trigger my flow?" Open it up and it says, "This trigger has two modes, test and production. Use test mode while you build your workflow. Click the execute step button, then make an MCP request to the Test URL. The execution will show up in the editor. Use production mode to run your workflow automatically.
>
> **[3:07](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-an-mcp-server-in-n8n?u=76281980&t=187)** Activate the workflow, then make requests to the production URL. These executions will show up in the executions list, but not in the editor." So that means for now, when I want to do testing, I should have it at the Test URL. So I'll copy the Test URL by clicking on it. Going back to Volunteer Lookup, go to tool, and add in MCP. It's the MCP Client Tool. That's the one that consumes the MCP Server. I'll paste in the URL I just copied here, and then open up my chat and send a standard request. Let's see what happens. "Error in sub-mode MCP Client. Could not connect to your MCP server." I need to click Execute step. So now the MCP server's listening for the test event. We'll try this again. I'll go hover over here and click on the Repost Message button. Now the MCP Server is queried. We get an answer over here. Looking at the [[Tokens]], it looks like we got only the information we needed. And going in here, scrolling down, you see we only got that one entry. So that means the MCP Server is working correctly, and we have the exact same flow, except we are now calling the information from the MCP Server, and the MCP Server, in turn, is calling in information from our sub-workflow. So there's three workflows working together now. And yes, for this small agent, that seems like overbuilding things, but it actually just makes it way more modular and easy to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[AI Agents]] (1), [[Tokens]] (1)
> **Env Vars:** mcp (21), url (8)
> **CLI Commands:** make (3), node (2), find (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** known as (1), is an  (1), in other words (1)
> **Code Identifiers:** query_column (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### [Adding tools to the MCP server](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=0)** - [Instructor] But wait a moment. The purpose of building that MCP server was to add in more tools. And right now we just have the same tools. So let's add in a new tool. I'll click Plus here, then say [[Google]] Sheets. I wanted to Google Sheets tool. The setup at the beginning is the same as before, except now instead of Get Rows, I want Update Row. We're still looking at the same document, Volunteer Index. We're still looking at the same sheet, the full sheet now. And because I'm doing Update Row, we now need to fill in more information. Specifically, we need to map the columns for the sheet. Because when we're doing an update, we're passing in information to a specific row and a specific column within that row. Now this can be done either automatically. By letting the system find the rows, you'll notice that is not the default. That is because it doesn't always work that well. So instead, we'll choose Map Each Column Manually. The system goes in and grabs the columns. Then we have to pick a column to match on. That is how we match which row to choose. And here you can pick any of the values. So I recommend either picking the row number, which is the default number coming out of Google Sheets. Or if you have an ID, then you can use the ID. So I'll just choose ID. For the values to update, we're going to do what we did before. Just have the model, define the parameter, 'cause that way the model is notified "hey, you need to send us information," and then it'll do that. So I'll just fill in all of those all the way down. And that's it. I'll click out.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=92)** Now we have both Call the Value and the Update Sheet option. Let's save that. Go back into Volunteer Lookup. And nothing has changed because the MCP client is still the MCP client. So let's see now if the agent is able to figure this out on our behalf. So let's see if we can get the system to change Sophia from active true to active false. "Set Sophia's active status to FALSE." Send that off. Can't connect. All right, I need to go back here. Open up the MCP server, Execute Step, then do it again. Now we get an error, but if you look closely, you'll see the first call to the MCP client worked and we got the correct response. The error only appears on the second call. And if we look over here, it explains why. It says "In test mode, the webhook only works for one call. after you click this button." That means we need to go back into the MCP server, switch over to Production URL, copy that URL, and also go switch this to an active workflow. You have thousands of workflow runs, so there's no risk here of running over. But it's important to note you're now actively using your runs with this MCP server. Let's go back. Go into the MCP client. Paste in the new URL, that's to the production URL, and then rerun the query. First, we call the model to interpret the request.
>
> **[3:10](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-tools-to-the-mcp-server?u=76281980&t=190)** Then we call the MCP client to get the data. Then we send the data back to the model. The model then generates the second request to the MCP client. The model, this time passing in all the new data, including active false. And let's see if the data got updated. It did. It's now false. Thanks to the MCP server, our agent is doing both the operations we wanted it to do with a minimum amount of effort. You'll notice I hardly did any custom prompting here, apart from listing the column headings. And the system is able to figure out the intent of the user even with no extra instructions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3)
> **Env Vars:** mcp (11), url (4), false (1)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Creating a Slackbot](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=0)** - [Instructor] My very first step in creating this workflow was adding this chat message received trigger. That allowed me to use the chat down here and test out the AI agent as I was building it. And now that it's functioning the way I want to, it's time to move on to the actual integration because this AI agent isn't supposed to just work inside N8N, it's supposed to work with [[Slack]]. I need to add a Slack trigger at the front and then send Slack messages out at the back and this chat message received trigger will become just a backup for testing. To hook the N8N workflow to Slack, I first need a Slack workspace where I have admin rights, so I've created one here. I'm the only member and there is no content anywhere. Integrating Slack is a multi-step process. We'll do it over a couple of videos and this first one, we will start by creating a new app, and that's done by going to api.[slack.com/apps](https://slack.com/apps). Make sure you're logged in with your account so that you have access to the workspace. I'll create a new app, I'll choose from scratch. Then I'll give the app a name, Lookup. Pick a workspace, Undestroyers, and click create app. Next, I need to give this app permissions to do the things I needed to do in Slack. For that, I'll scroll down under features to OAuth and permissions. Then scroll down to scopes and bot token scopes. Here I can add different OAuth scopes. Each of these scopes is a capability the bot
>
> **[1:35](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/creating-a-slackbot?u=76281980&t=95)** will have inside Slack, things like view messages that directly mention the lookup in conversation and allow Lookup to act as an app agent, et cetera, et cetera. At minimum, I need to add an app mentions read that allows it to read messages that are sent to it. Channels read, allows it to view basic information about public channels in a workspace. Chat write, allows it to send messages as Lookup. Groups read, allows it to see the different groups and private channels. I am read, allows it to see private messages and I am right, allows it to write private messages. You can add additional OAuth scopes too if you want to, but these are the ones you need to get anything to work properly. Once that's done, scroll back up to the top and click install to Undestroyers, click allow. And now when I go back to Undestroyers, you'll see Lookup is sitting here. So now there's an app that we can talk to and I can go up to general and I can ask, say at Lookup here, send the message. And it says, you mentioned Lookup, but they're not on this channel. I'll add them in and that means the app is working. That was step one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (9)
> **Tools:** slack (9)
> **Env Vars:** n8n (2)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [slack.com](https://slack.com) (1)
> **Cross-References:** go back to (1)

#### [Authenticating Slack](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=0)** - [Instructor] Now we need to authenticate [[Slack]] with n8n. Here, under OAuth & Permissions, we have an OAuth token. I'll copy it. Then I'll go over into n8n. I'll add an additional trigger. So I'll start up here by saying Slack. Then I'll choose On bot app mention. In the settings, I'll go to Credential to connect with, use the dropdown, click Create new credential, and this is where I need to paste in that access token. Click Save. Connection tested successfully. That means everything is working. Then down here, I can choose which channel to watch, and this bot has access to general. And now I need to tell Slack where to send messages whenever this bot is mentioned and that's done using what's called a webhook. So up here it says Webhook URLs. Here we again have a test URL and a production URL. And if you go down here, you'll see it's exactly as before. So I'll copy the test URL, then I'll click Execute step. So now we are listening for an event. Then I'll go to Slack API, go to Event Subscriptions, click it to On, and paste in this URL. I got verified right away here, and that's because I was listening for an event. If I hadn't clicked that listen to event, it would've said here that the request URL did not pass. If that happens to you, just go in and click the button and then things should work fine.
>
> **[1:32](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=92)** Now that it's verified, I'll go down to Subscribe to bot events, click Add Bot User Event, and here select the first option, app mention. Click Save Changes. Go back to n8n. Click Execute step again. So now we are listening. Then I'll open up Slack, @Lookup, Hello. And look at that. Here's the message, "Hello," and that means Slack messages to the bot are now triggering the n8n workflow, which in turn means I can now wire it into my workflow. So I'll move it up here, grab the end, and pull it down into AI Agent. Then I'll go into the AI Agent settings and I'll have this new Slack trigger, which has different information than the [[JSON]] chat input. Here, I want the message, which sit all the way down here. I also want to have JSON chat input as an option, so I'll pull it up here. And then I'll take these away and replace them with two bars like that. And that means either get JSON chat input or get the chat input from Slack. Let's see if that works. I'll go back to my Slack trigger, click Execute step to make sure we're listening for the event. We'll go to Slack, @Lookup, what is Sofia's phone number? The event is triggered over here. You can see it here.
>
> **[3:04](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/authenticating-slack?u=76281980&t=184)** One item, Slack trigger. What is Sofia's number? So let's see if it works. I'll click Execute workflow, then go back to Slack and say, "Lookup, what is Sofia's number?" Agent does its job and out comes the answer. Sofia's phone number is, and then this fake number. But nothing happens in Slack. That's because we haven't sent the information anywhere. That's next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (13), [[JSON]] (3)
> **Tools:** slack (13)
> **Env Vars:** url (5), json (3), api (1)
> **UI Navigation:** go to (4), dropdown (1), select the (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Adding a Slack trigger](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=0)** - [Speaker] To send messages to [[Slack]]. I'll start by adding an item to the end of the AI agent here and say Slack, send a message. The message I want to send is going to the channel. The channel can be picked from a list by using the dropdown here, but if this is going to be dynamic, there's a good chance this bot will have access to multiple different channels. In that case, I can change it to buy ID and then go over here to Slack trigger and pull out the channel expression and put that in here. That way, every time a message comes in, it tells the system what channel it came from, and then the message that comes back sends the message to the same channel. Then we set up the message type. In this case, a simple text message and the message text will be whatever comes out of the AI agent. So that's the output up here. With these settings in place, let's see if this works. Execute the workflow. We're now waiting for the trigger event, and in response, we get Sofia's number is and then the number. But you'll notice something weird here. This response is coming from me. That's because I have the credential set to my login instead of the app. So here, Slack account two is my login. Slack account three with just the Slack API is the one I created when I pasted in the token. So let's swap it over to Slack account three, then go execute the workflow one more time.
>
> **[1:39](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/adding-a-slack-trigger?u=76281980&t=99)** Process fires off, goes and grabs a bunch of information, and in response, we get all the correct information. And this time, it's coming from the app, not from me. Let's see if we can change Sofia's active status to false again, only this time through Slack. So I'll scroll a it over here, go back and execute the workflow. And there we go, it's been changed here and it says, Sofia's active status has been successfully set to false.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (8)
> **Tools:** slack (8)
> **Non-Speech:** (typing loudly) (2)
> **Env Vars:** api (1)
> **UI Navigation:** dropdown (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [speaker] (1)

#### [Sending messages to Slack](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=0)** - [Instructor] Now that everything is working, it's time to take the workflow from inactive in testing mode to active, so I don't have to click execute workflow every time I want to send a message from [[Slack]]. To do that, I first need to go into the Slack Trigger and change the webhook URL from Test URL to Production URL, copy it, then go up into Slack API find the Event Subscriptions, and here I want to change the Request URL so that we are using the Production URL. You'll notice this one here says webhook-tests. This one says webhook. When I do that, I immediately get: "Your URL didn't respond with the value challenge parameter." That's because I need to take my workflow live. So I'll go here and toggle on Active. Click Got it, click Retry. Now it's verified. Click Save Changes. And now from Slack, I should be able to say, @Lookup Give me a list of everyone managed by Nitin. Now we wait for the process to execute. And when it's done, here's a list of everyone managed by Nitin, and it's a list of a lot of people. Back in n8n, I can now see this execution by going to Executions up here. It's sitting at the very top. Here I get a breakdown of what happened. So I can see one item went in, then two executions were done here. Then one item went out and I can open the logs
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/sending-messages-to-slack?u=76281980&t=96)** and see the actual transactions that happened. So it's the same as what we had before. The difference being, I'm no longer seeing it in the editor, I'm seeing it under Executions. That also means I can go to overview here and go to Executions. And here you can go in and inspect each of the executions. So for example, here we can look at the Row lookup and see Manager, Nitin, [[Google]] Sheets. We got the entire thing, all the entries, and then for the filter, it discarded 77 items and kept 33 items. So that's it. Our project now has the main workflow, the MCP workflow and the Row lookup workflow. And in case you're wondering about this one here, being inactive, I hover over it. It says: "'Execute Workflow Trigger' doesn't require activation as it's triggered by another workflow." So that's why it's not active.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (4), [[Google]] (1)
> **Env Vars:** url (6), api (1), mcp (1)
> **Tools:** slack (4)
> **UI Navigation:** go to (2), toggle (1), open the (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=0)** - And that's it. If you're still with me, you have everything you need to go build your own AI powered automation workflows using N8N. So go try it for yourself. And because I know you want to play around with what I've built, I've placed all of these workflows and the data that I used in the [[GitHub]] repository for this course. And that's one of the cool things about N8N I didn't show you earlier. Once you set up a workflow, you can export it and other people can use it. To import one of my workflows, simply open up a new workflow in your project. Click the three dots in the top corner, click import from file, and then import the entire workflow in. Oh, and there are thousands of workflows you can check out available directly from N8N. Just go to [n8n.io/workflows](https://n8n.io/workflows). Do a search and you'll find pretty much anything you can think of either as inspiration or to use yourself. And one more thing, remember that complex workflow I showed you at the very beginning of the course, the one that had several different agents working together. You may be wondering why I built that one in addition to the simple one. The answer is when you start integrating services in automation like this, you also give people, and sometimes even an AI control over things that previously only you could control. The [[Google]] sheet that I set up is my Google sheet, and only I have access to it. But now that I've set it up to be integrated with [[Slack]], anyone with access to that Slack channel can message lookup
>
> **[1:36](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=96)** and make changes to my Google sheet. This more complex workflow is probably closer to what I would build if I was actually shipping this into production, because within this workflow, I can put in stops and checks and balances to make sure the person using the workflow actually has permission to do it. For example, I would likely put in a filter that said, only these accounts have the ability of updating posts, whereas everyone else only has the ability to see the posts. And I would use IDs from Slack to do that. That would be really hard to do in the simple workflow because there are no filters inside ai. So if I was to do it there, I would have to make another filter somewhere. So instead, by breaking out each operation, I can put in more filters and I can also make it more granular. So now that you've seen what's possible, go check out the different versions of this that I built. See how they wired together, try them out for yourself and keep building on them. And as you do so, go find me on [[LinkedIn]] and tell me about your experiences, because I love to hear what you built, what worked, what didn't, and what you learned in your own building process. And finally, as always, whenever you run into issues, start by looking at the docs. The N8N docs are expansive. There's a ton of information there, and most of the questions you have will probably be answered here or in the expansive user forums. Now, all that's left for me to say is look it in.
>
> **[3:08](https://www.linkedin.com/learning/build-ai-agents-and-automate-workflows-with-n8n/next-steps?u=76281980&t=188)** Go build some amazing AI powered automation workflows for yourself and for others, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Slack]] (3), [[GitHub]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (4), go build (2), find (2)
> **Env Vars:** n8n (4)
> **Tools:** slack (3), github (1)
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