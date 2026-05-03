---
type: course
cssclasses:
  - lle-course
slug: getting-started-with-autonomous-agents-in-copilot-studio-no-code-required
url: "https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required"
duration_minutes: 34
duration: 34m
updated: 12/13/2024
learners: 84180
skills:
  - Microsoft Copilot
  - AI Productivity
  - AI for Business
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH7dWmsv4dI0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734134504304?e=2147483647&amp;v=beta&amp;t=pybSTKPq_JtL1JL9s2Wol5V3vq_8B6E4YkQVmMO7Bec"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with Custom GPTs, Copilots, and AI Agents]]'
prev_courses:
  - '[[Copilot Agents- Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)]]'
path_nav: '[{"path":"Getting Started with Custom GPTs, Copilots, and AI Agents","position":5,"total":5,"prev":"Copilot Agents- Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/microsoft-copilot
  - skill/ai-productivity
  - skill/ai-for-business
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Getting%20Started%20with%20Autonomous%20Agents%20in%20Copilot%20Studio%20(No%20Code%20Required).md)

![Getting Started with Autonomous Agents in Copilot Studio (No Code Required)](https://media.licdn.com/dms/image/v2/D4D0DAQH7dWmsv4dI0A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1734134504304?e=2147483647&amp;v=beta&amp;t=pybSTKPq_JtL1JL9s2Wol5V3vq_8B6E4YkQVmMO7Bec)

# Getting Started with Autonomous Agents in Copilot Studio (No Code Required)

> See how to use Copilot Studio to create Copilot Agents. These AI-powered assistants can help simplify workflows, enhance productivity, and automate repetitive tasks throughout your organization.

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required) | 34m | 84K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Build agents in Copilot Studio](#build-agents-in-copilot-studio)
  - [What are agents?](#what-are-agents)
- [**1. Creating a Copilot Agent**](#1-creating-a-copilot-agent) (5 videos)
  - [Create agents from templates, conversationally, or manually](#create-agents-from-templates-conversationally-or-manually)
  - [Apply knowledge](#apply-knowledge)
  - [Add actions](#add-actions)
  - [Edit instructions](#edit-instructions)
  - [Introduce a trigger](#introduce-a-trigger)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build agents in Copilot Studio](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/build-agents-in-copilot-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/build-agents-in-copilot-studio?u=76281980&t=0)** - [[Microsoft Copilot|Copilot]] Studio is a powerful [[Microsoft]] platform designed to help you create and customize AI-powered Copilot agents that can answer questions, automate tasks, and provide assistance. Copilot Studio is referred to as a low code platform because building many types of agents requires little to no coding skill. In most cases, you can create your agents using natural, conversational language. The agents you build can be internal facing for other people in your organization to use, or they can be external facing for customers to use. Hi, I'm Garrick Chow, and in this brief course we'll get an introduction to creating basic agents that can answer questions based on the knowledge sources you provide, as well as a look at how to create an agent that automatically goes into action when the conditions you've set up have been met.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Microsoft]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - copilot (1)

#### [What are agents?](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/what-are-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/what-are-agents?u=76281980&t=0)** - [Instructor] [[Microsoft Copilot|Copilot]] agents can have varying levels of complexity, but most of them fall into these categories. The most basic or simple agent is the one that can retrieve information from data it's provided with, and it can reason, summarize content and answer questions. For example, you could have a Copilot agent that's trained on your employee handbook and can answer questions about company policies and rules. Then we have task-based agents, which go a little bit further and are connected to a specific workflow or process, and can help with repetitive tasks that might normally require human interaction. For example, your company might have a process for when employees request new laptop computers. You could build a Copilot agent that can review the request to see if the employee making the request qualifies for a new laptop, and if so, then send approval emails to your company's IT service tool. Then there's the third type of agent, the autonomous agent, which operates independently, can dynamically plan and learn from the processes, as well as coordinate with other agents. For example, you could have something like a supply chain capacity agent that's connected to various data sources within the supply chain, and automate tasks like inventory management and order processing. Agents can be deployed across various platforms like [[Microsoft Teams]] and [[Microsoft Outlook|Outlook]], or across websites and mobile apps, making them accessible wherever they're needed. Now, as we move from left to right here, agents get increasingly complex and advance. So while it's important to understand what Copilot agents are capable of, in this course, we're just going to dip our toes in and look at the basics of how to create agents in Copilot Studio, how to add knowledge to them, and how to get them to perform certain types of tasks, and we'll look at a very basic example
>
> **[1:34](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/what-are-agents?u=76281980&t=94)** of creating an autonomous agent at the end. Now, before we get started, this course does assume that you have at least some experience using Copilot or [[Generative AI Tools]] in general, so we're not going to spend time talking about what [[Generative AI|gen AI]] is or how to write prompts and so on. If you haven't spent much time with AI tools, I suggest you first check out courses like, "What is Copilot: Get Started with [[Microsoft]]'s Everyday AI Companion" and "Streamlining Your Work with [[Microsoft Copilot]]" both by my colleague, Nick Brazzi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[Microsoft Teams]] (1), [[Microsoft Outlook|Outlook]] (1), [[Generative AI Tools]] (1), [[Generative AI|Gen ai]] (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)


### 1. Creating a Copilot Agent

[↑ Back to Table of Contents](#table-of-contents)

#### [Create agents from templates, conversationally, or manually](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/create-agents-from-templates-conversationally-or-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/create-agents-from-templates-conversationally-or-manually?u=76281980&t=0)** - [Instructor] Okay, so to create a [[Microsoft Copilot|Copilot]] agent, we go to copilotstudio.[microsoft.com](https://microsoft.com) and sign in. Now, if you just want to try this out, you can sign in with your work account for a free trial that will allow you to build and test agents. You only need to purchase a subscription if you want to publish it and start using it, but if you just want to play around and follow along with me, you can use a trial account. So once you're signed in here on the home screen, you can start creating an agent right away here at the top by describing the type of agent you want to create, or you can click one of these suggestions like help desk, expense tracking, or HR and benefits to fill in this prompt area to help you get started. But basically, you can just use natural conversational language to describe and build your agent. But let's take a look at how to do this a little more manually so we have a little more control over the agent's properties from the start. I'll come over to the navigation area on the left and click create. Now, on this page, you can use any of these templates to get you started. So we can create agents for things like website Q&A, [[IT Help Desk]], inclusivity, financial insights, and so on. If any of these interest you, just click one, like safe travels, which brings you to a page where the agent's info is already started for you with the name, description, instructions, and knowledge sections already filled out. You're free to customize these, of course, so for example, if you wanted this agent to reference documents or websites other than the US Travel website that you see here, you could click the add knowledge button to add the knowledge source here. Or if you wanted to change how the agent behaves,
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/create-agents-from-templates-conversationally-or-manually?u=76281980&t=95)** you can edit or add to the instructions here. When working from a template like this, you can also click the template instructions here at the top, which opens up a tab where you can read about this particular agent and how to build and customize it to suit your needs. So for example, this one is an agent designed to provide employees of a company with travel assistance. I'll just close that for now, and I'll just click back to go back to the create page. So if any of these template suits your needs, just start with them and build from there. In this case though, let's click new agent here at the top to start from scratch. So on this screen, you can use conversational language to build your agent. For example, to respond to the question of what would you like to make, I might type something like, "An agent to answer employee questions using information found in the employee handbook." I'll click to send that. And now, Copilot Studio is going to walk me through the process of building this agent by asking me questions. So now, it's asked me what to name this agent and it's offered the suggestion of Handbook Helper. I can either agree to that name or I can choose my own name. In this case, I'll just say yes, that's fine. Next, it's asking me to refine the agent's instructions and what should be emphasized or avoided in its responses. So this is your chance to adjust things like the tone and personality of the agent. So I might say something like, "Keep the tone professional, avoid jargon."
>
> **[3:17](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/create-agents-from-templates-conversationally-or-manually?u=76281980&t=197)** It's now updated the instructions, and you can see what it's writing over here on the right-hand side. Now it's asking me how do I want the agent to talk? For example, should it be formal, friendly, or something else? I'll just say friendly. And it'll just continue walking through this process for me. And this is how you conversationally start building your agent. Next is asking me where it's going to get the data sources from or the knowledge for this agent, but let's just skip this for now and I'm going to click the skip to configure button up here. So this is where you have more manual control over your agent. This is what we saw when we clicked on a template earlier. So instead of answering questions, we have these fields to fill out. Now, we could have jumped to this configure area at any time in the process, including right after we click to create a new agent. But starting conversationally, we can make it easier to complete these fields. Notice that it's used the name for the agent that we agreed to, Handbook helper. It's generated a description of the agent based on what we said the agent should do, and it's filled out the instructions, including making sure to use responses from the employee handbook. Now, I do want to take a moment and emphasize the importance of the description field. This field isn't for you or others to understand what this agent does as much as it is for the agent itself to refine itself and understand what it's supposed to do,
>
> **[4:50](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/create-agents-from-templates-conversationally-or-manually?u=76281980&t=290)** essentially to understand its purpose, so be sure to spend time editing this description to be as descriptive and specific as possible. So right now, it says "An agent designed to answer employee questions using information from the employee handbook, ensuring responses are accurate, clear, and professional." So for example, I might want to add the line, "It asks questions to gain context in order to provide the most accurate responses." So this just gives it further instructions on how it should behave. All right, but essentially, this configure area is where you manually set up your agent when you create it. Now, this field at the bottom here is the knowledge field, where you can add the sources of information and data that the agent will learn from and reference. We're going to talk about adding knowledge in a separate video though, so for now, let's go with what we have so far and click create. We see the Copilot Studio is setting up our agent, and there it is. We see the message here at the top that your agent is ready. I give it another moment to load all the details, and there they are. So this area here is where you can handle and adjust all the details of your agent at any time. The settings take up the left side of the window, and over here on the right, we have the testing area, where we can see how our agent behaves. But first, we have to provide instructions on where this agent is getting its information, and we'll do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Microsoft]] (1), [[IT Help Desk]] (1)
> **Analogies:** for example (5)
> **Exercise Files:** template (4)
> **Prerequisites:** configure (3), set up (1)
> **CLI Commands:** make (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Apply knowledge](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=0)** - [Instructor] Even though we've created our [[Microsoft Copilot|Copilot]] agent, it doesn't actually have the ability to do what we want it to do yet because in this case, we're building an agent that will help answer employee questions about company policies based on the employee handbook. However, let's come over to the testing area on the right and I'll ask a question of how many paid days off are employees granted for jury duty?
>
> **[0:29](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=29)** So our agent takes a moment to think, and now we have this response which says, "Employees are granted paid time off for the duration of their jury duty service. This means you'll continue to receive your regular pay while you fulfill your civic duty. For more detailed information, please refer to the leave of absence section in the employee handbook. And if you have further questions, feel free to ask." Now, it's important to note here that it's generated this response based on its own general knowledge, not the employee handbook 'cause I haven't given it access to the handbook yet, and it's kind of just made up the information here. That might not be accurate to my particular company. And in some cases, it might even provide a completely incorrect answer depending on the question you ask. For example, I'll try can employees bring pets to the [[Microsoft Office|office]]? And we get this response, which again, it's just pulling from its own knowledge saying employees are generally not allowed to bring pets to the office. And again, this is fine for some kinds of generative AIs, but in this case, we're building something very specific. So what we want to do is come over to the knowledge section here and turn off the switch labeled Allow the AI to Use its Own General Knowledge. It's telling me, "When disabled, the agent will not use the default AI knowledge and only reference the sources listed under knowledge", which is what we want in this case, so I'll click continue. It'll take a moment to disable that. So now if I ask again, can employees bring pets to the office? All we see now is, "I'm sorry,
>
> **[2:06](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=126)** I'm not sure how to help with that. Can you try rephrasing?" So it didn't try to make up its own information. It even tells me here in this section that's only visible to me as the agent's creator, no information was found that could help answer this. So now let's provide the knowledge source for this AI. I'll come over here to knowledge and click add knowledge. And this gives us a couple of different ways we can provide the knowledge source. We have the option to link to a public website, so the AI will always have the most up-to-date answers. Or we can link documents stored on [[SharePoint]], which you might use for an internal facing AI like the employee manual agent we're building. Similarly, you could add documents from [[Microsoft]] Dataverse. For this example, I have the employee manual saved as a [[Microsoft Word|Word]] document on my desktop and just so you can see what that looks like, I have it open here. And as you can see, this is a multi-page document containing all sorts of information that employees might need to know. So I'll click to browse, go to my desktop, and select that file. Now note that if you're uploading a document and you later update the document with new or different information, you'll need to upload the new version to your agent's knowledge if you wanted to have the most current information. So on this screen we see the name of the document and we also have a description field. And again, anytime you see a description field when building an agent, be sure to take the time to be detailed because that helps the agent better understand its purpose
>
> **[3:39](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=219)** or in this case, the purpose of this document we're uploading. So right now, this just reads, "This knowledge source searches information contained in the Globe Bank Employee Handbook." So let's change that. And they really only give you one line that you can see at a time here. So it's a little difficult here, but I'll say this knowledge source, this knowledge source outlines the current company policies of Globe Bank and is the definitive resource for employee information. So that's a more informative statement about what this document is and what it's used for. I'll come down and click add. Depending on the size of your document, it might take several seconds to several minutes for the document to be uploaded and then indexed by the agent. But we can see now that the file is listed under knowledge. If I click it, we can see the information here. But notice under status, it currently says in progress. So we need to wait for this to finish in order for the agent to be able to use it.
>
> **[4:48](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=288)** I'll click back and forth a couple times so I can see if that status changes. Okay, so a little time has gone by now and we now see that the status has been changed to ready, meaning that the agent has indexed the employee handbook and should be able to answer questions from it. Let's go back to the overview tab. So we can see the file is listed here under knowledge. And with the general knowledge switch disabled, the agent will only refer to this document for its answers. So now we can ask it again how many paid days off are employees granted for jury duty? And now we have a specific answer from the handbook of, "Employees will be granted time off to serve on a jury with pay up to 15 work days." It even offers a citation. And if we click on that, it will take us directly to the employee handbook so we can check the information for ourselves. Now, I also know that there are no specific policies about employees bringing pets to work. So let's ask it again. Can employees bring pets to the office? So here under the section that says only visible to you, it tells me no information was found that could help answer this. And again, you'll only see this if you're the one programming this agent. But what the user will see is, "I'm sorry, I'm not sure how to help with that. Can you try rephrasing?" So this just shows us that the agent is not pulling information from anywhere else or generating its own answers.
>
> **[6:21](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/apply-knowledge?u=76281980&t=381)** It only knows what it's provided in the knowledge we gave it, which in this case is the employee handbook. Okay, so that's how to add knowledge to our Copilot agent in Copilot Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (4), [[Microsoft Copilot|Copilot]] (3), [[SharePoint]] (1), [[Microsoft]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)

#### [Add actions](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980&t=0)** - [Instructor] Okay, so we've now created a [[Microsoft Copilot|Copilot]] agent with its Knowledge built on the Globe Bank employee handbook. We can ask it questions about company policy, and it can provide answers found in the handbook, so here in the Overview screen, we've completed the Name of the agent, the Description. We can see the Instructions, and by the way, you can edit any of these items by clicking the Edit button up here, and we can also see the handbook added here under Knowledge. Next section is Actions, and you can see this is where you can empower the AI to complete specific tasks. I'll click Add action. Here we can see some of the actions we can add, like Delete a row in an [[Microsoft Excel|Excel]] spreadsheet. If your agent has something to do with working with data in an Excel file. We can run a script or get a weather forecast, but there are many more actions available than what we initially see here. For this example, let's say we want the agent to be able to send an email. Here in the Search field, I'll look for send an email, and that gives us several results. Let's say that I use [[Microsoft Outlook|Outlook]], so I'm going to select Send an email version 2 [[Microsoft Office|Office]] 365 Outlook, and that brings us to this Configure action screen, and it's going to take a few seconds, but then we'll see this Connector section appear, and this what allows you to connect or move data from a system or service to Copilot Studio. If you haven't already logged into your account, you'll be prompted to do so to give your permissions,
>
> **[1:37](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980&t=97)** and you can see what permissions I'm allowing it to have here. Now, I already do have a green check mark here, so it means I'm already logged in, although it may ask me to log in again before we're done here. We're going to scroll down to Configure, and first we have the Action name area. The default name is the name of the action we chose, but this is kind of verbose, so let's just shorten this to Send an email. Actually, let's call it Send an Outlook email, and we'll also just change the Display name to Send an email. Next we have the Description section, and again, when you're dealing with description fields in Copilot Studio, you want to be more descriptive so the agent can best understand the purpose of, in this case, the action that we're adding, so for this example, maybe we want the agent to send an email to the user with a summary of their interactions, so currently says This operation sends an email message. Let's add to this. This operation sends an email message to the employee containing a summary of their inquiry. Below that, you can have the agent confirm with the user before running this action and sending the email. This is probably more important when creating an outward or customer-facing agent, as you might want a human to confirm everything in the email before it's sent out to the customer, but since this agent is internal-facing, I'll leave this unchecked for now and click Next. On this next screen, we can see what the agent is going to do, and in the case of sending an email,
>
> **[3:10](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980&t=190)** it's going to dynamically fill out the two Subject and Body fields with the best options. Now, you can edit this information, so I'll click Edit inputs to take a look, so for each of these, you can choose how the agent is going to fill them out. The default option is Dynamically fill with best option, so this is one of the great advantages of an AI agent. We don't have to specify ourselves things like the email address, subject, or body of the email. The AI, in most cases, can come up with the best content for those fields based on what it knows about the user and the interaction they've had, but instead of Dynamically fill, you can choose Set as a value, for example, if you always want the subject of the email to be the same. I'll confirm I want to do that, and I'll enter the value of Conversation summary or whatever you want in that field. In this case, anytime an email is sent, that will be the subject of the email. I'll click Save, and I'll click Next, and now we can review everything this action will do. Now, down here we have the option to allow the agent to use [[Generative AI]] to respond when necessary, and we should leave that option checked so it can make the proper decisions around this action. I'll click Finish, and that brings us back here to the Overview screen, so let's test this out. I'm going to click the Refresh button up here to make sure we're working
>
> **[4:42](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980&t=282)** with the most updated version of this agent, and now let's type How is vacation time accrued? Please send the response in an email, so that opens up the Activity map so we can see exactly what it's doing. First, it's checking the Knowledge source. You can see here that it referenced the employee handbook, and then it activated the Send an email action. You can see for the body, we can see some of the text that it added. The subject is Conversation summary, just like we specified, and here's the email address that it's sending it to. Now, notice over here, in this case, it wasn't actually able to send the email, so I have to come over here and click this Connect button and allow it to connect to this action, so on this Manage your connection screen, I'll click Connect. We'll click Submit, and now we see it's connected, so let's go back, and we'll try this again. I'll just copy that, click the Refresh button, and paste the question in again. We can again see it's going through the Knowledge source, and it's going to send the email, and we also get a response here in the test panel.
>
> **[6:15](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/add-actions?u=76281980&t=375)** (email chimes) I have sent the details about how vacation time is accrued to your email. If you have any other questions, feel free to ask, and you probably heard that email chime. I do have the Inbox selected here in another tab, and here's the email the agent automatically sent me. Tells me vacation time is accrued based on the number of years of employment, and it breaks it all down, and at the very end here, it added a citation, but that doesn't really take us anywhere, but we'll talk about how to address that a little bit later, but for now, that's how to add an action to your Copilot agent. Now, it isn't really ideal to require the user to specify that they want an email sent to them, so next, we're going to take a look at how to customize our agent with some more instructions to further automate this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), [[Microsoft Outlook|Outlook]] (3), [[Microsoft Excel|Excel]] (2), [[Microsoft Office|Office]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** configure (2)
> **Versions:** version 2 (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (email chimes) (1)

#### [Edit instructions](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/edit-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/edit-instructions?u=76281980&t=0)** - [Instructor] Okay, so previously we created an action that would send a summary email to a user if they requested a summary of their interaction with the [[Microsoft Copilot|Copilot]] agent. But it's not ideal for the user themselves to have to request an email. So let's take a look at a way we can automate this process. I'm back here on the Overview page and let's click Edit to go into the Instructions area. Now if you recall, Copilot Studio automatically generated these instructions based on our initial conversational setup of the agent, but we can always come in and edit or add our own instructions to further refine how this agent behaves. Now the important thing is to be clear, concise, and specific about what you want. Notice everything here is in bullet points. You don't have to write your instructions this way, but I think it helps to keep it visually organized and you can create separate bullet points for each instruction. So I'll come down here to the bottom. I'll add a line and I'll paste in some instructions I already wrote. So it says, "When replying to an inquiry with information from the employee handbook, ask if the user would like to receive the information in an email. If the reply is affirmative, use the action Send An Email to [[Jetpack Compose|compose]] and send an email response that includes the relevant passage from the employee handbook." So just as a reminder, we named the action Send An Email previously, so I made sure to use the same name here. "The email should include a friendly greeting at the beginning and a friendly sign off at the end. Do not include citations in the email." So if you recall, we noticed in the previous video that the citations in the email we were testing didn't actually go anywhere, so I'm including this line telling the agent to omit them.
>
> **[1:35](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/edit-instructions?u=76281980&t=95)** Right, so let's go back up here and click Save.
>
> **[1:45](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/edit-instructions?u=76281980&t=105)** It tells me my request completed successfully and we can test it now. I'm going to refresh to make sure we're using the most current version of the agent. And let's ask, "What is the policy on using company internet service for personal use?"
>
> **[2:08](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/edit-instructions?u=76281980&t=128)** And like before, the agent refers to its knowledge and we get this answer from the handbook, but notice here at the bottom, it's now also asking if we want to receive the information in an email. I'll say, "Yes." We can see what it's doing. It's activated the Send An Email action and I heard that little ding. And now we get the email with the conversation summary. Notice it included the friendly greeting, "I hope this email finds you well," and it also ends with "If you have further questions, please feel free to reach out. Best regards, Handbook Helper." And notice there's no citation included unlike this other conversation we had where it just had this sort of gibberish citation. But because we told it not to include the citation, we don't have one in this version of the email. So that worked the way we wanted it to. Now again, this is just a basic example, but I think it's a good illustration of how powerful and easy it can be to program your agents by using simple conversational language in the Instructions panel. With just a couple sentences, we got the agent to ask if we wanted to receive an email and to send it if it gets an affirmative response. And we can actually take this a step further and automate the whole process by setting up a task, which we'll look at next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Definitions:** refers to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Introduce a trigger](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=0)** - [Person] All right, so far, we've created a [[Microsoft Copilot|Copilot]] agent that will answer questions based on the company employee handbook, and it asks the user if they'd like to receive an email with that information, and if the user says that they do, it will send a custom email. But this still requires the user to have sort of a chat-bot experience by talking with the agent. As we mentioned earlier, agents you create in Copilot Studio can be autonomous, meaning they'll go into action when certain conditions you've set up have been met and trigger it to perform its tasks. So for this last example, let's set up our agent so that it will keep an eye out for emails with a specific subject line, and when it receives those emails, it will go into action. So here on the "Overview" screen, I'll first edit the instructions... And I'll edit the instructions to remove the section where it's going to ask the user if they want to receive an email, since we want this to automatically reply with an email. I'll come back and click "Save." Let's scroll down to this "Triggers" area, and you can see this is where we set up our agent to activate when certain events happen. I'll click "Add Trigger." So here, we see some featured triggers, but we can click "All" to see all the currently available triggers. Now, as I'm recording this video, we're still in the very early days of creating autonomous agents in Copilot Studio. You can see here at the top, this is still a preview feature. So as time goes on, we'll most likely start seeing
>
> **[1:33](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=93)** more and more triggers we can use here. (no audio) But for this example, I want to use this one called "When a new email arrives," and that's for [[Microsoft Office|Office]] 365 [[Microsoft Outlook|Outlook]].
>
> **[1:54](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=114)** And we see here, a description that literally triggers the agent when a new email arrives. Now, under the "Sign in" area, I can see that it's going to be using my account in Copilot Studio and in Outlook, and I'm already signed into both, as we can see by the green check-marks, so I'll click "Next." Here, we can decide what part or parts of the incoming email will trigger the action, so this could be the email getting placed into a specific folder, or if it's from a specific address, or it has attachments, and so on. In this case, I want to trigger the agent when the email comes to my email address, which I'll add here, and incoming emails should also have the subject line of "Handbook Inquiry." So once this agent is set up, I would let employees know that if they have questions about company policy, they can send an email to this email address with the subject line of "Handbook Inquiry." Notice here at the bottom under "Additional instructions to the agent when it's invoked by this trigger," it says it's going to use content from "Body," meaning the body of the incoming email, because that's where the question will be. All right, so I'll click "Create trigger," and this could take several seconds or a few minutes to add the trigger. (no audio)
>
> **[3:23](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=203)** And now, we get this message saying it's time to test the trigger, so let's do that by clicking "Close," and back here in the "Triggers" section, we have a "Test trigger" button, which I'll click, and this tells us to test the trigger by performing the triggering event at least once, and if it works, we'll see the trigger run here. So I'm going to switch over to another browser where I'm logged into a different email account, and I have a message that I've composed. You can see that it's addressed to my email address that I set up in the Copilot account, and the subject line is "Handbook Inquiry," and in the body of the email, I'm saying, "Could I please have a summary of the performance review schedule and procedure?" So this should probably trigger our agent to go into action because the email address and the subject line are what we specified, and it will then use the body of the email as the prompt. So I'll click "Send" to send it, and I'll switch back to my Copilot Studio tab. I can hear that that email came into my email address here, but let's come back here, and this could take a few seconds to a few minutes. You can try clicking the refresh button, but what it's going to do is eventually notice that email message and hopefully let us know. (no audio) Okay, and there's the update showing that it successively received the trigger December 8th, 12:28 PM, so it has now received that trigger, meaning that email, but it didn't run the action yet, so let's click "Start testing" to do that.
>
> **[4:57](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=297)** (no audio)
>
> **[5:06](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=306)** And now, we can see what it's doing. Now, it's first going to reference its knowledge sources... But actually, now that I think about it, it's stalled out here... Or not really stalled out, it's stopped because I realize... Let's go back to the "Overview" screen here and look at the instructions, I actually deleted everything from here in the instructions, so I actually took out the part where I wanted it to respond with an email, so let's come back in here, add that back, and I've re-pasted in my original instructions, but I took out the part where I told it to ask if the user wants to receive an email. All the other instructions here are the same, saying that it should use the send-an-email action to [[Jetpack Compose|compose]] and send an email. That's why it did not send an email, so let's save that again, and we'll go back to "Triggers" so we can test that again. And we can use the same trigger that came in, we don't have to send it again from the other account, so I can click "Start testing." There we go. So now, after checking the knowledge sources, we see the send-an-email operation... (computer jingle playing) I heard that ping, so if I switch back to my other email inbox, there it is. So it was crucial that I went back and added the instructions that it should email the information to the user. But now, at this point, the trigger has worked successfully, but this still has just been a test so far. To release this agent to let it do its work, we have to publish it, but that's actually very easy to do, and you don't have to worry about knowing
>
> **[6:40](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=400)** where to publish it, or logging into a separate website, or anything like that. We just come back here to the "Overview" screen and click "Publish." In this case, it tells me there are risks that need to be reviewed and basically telling me that it's using my credentials to log into this account, which in this case is what I want, so I'll click "Publish," and this will, again, take several seconds. And while it's doing that, I'm going to switch back to my other email account and create a new email, I'll send this to the same email address and make sure I have the correct subject line, and I'll ask the question of, "What is our company jury-duty policy?" All right, so that's ready to go, let's switch back and see if we're done publishing here. Looks like it is, been published, so now, I can go back to my other email and send it,
>
> **[7:42](https://www.linkedin.com/learning/getting-started-with-autonomous-agents-in-copilot-studio-no-code-required/introduce-a-trigger?u=76281980&t=462)** and now, we just wait a few minutes. I heard the email come into my other account. Now, while we're waiting, we can come back in here and go to the "Activity" tab, and here's where we can keep track of what the agent is currently doing. So right now, nothing has happened yet, but you can see all the entries from my previous activities... (computer jingle playing) And even though that hasn't shown up here yet, I just heard that sound, so if I go to my sent items, yep, I can see the email that was sent, and if I switch back to my other email account, there's the reply about jury duty, so we've now successfully sent an email and received an automated reply from the Copilot agent. Okay, so that's a look at how to create everything from a basic agent that can answer questions from a knowledge source all the way up to an autonomous agent that can perform tasks without any assistance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[Microsoft Outlook|Outlook]] (2), [[Microsoft Office|Office]] (1), [[Jetpack Compose|Compose]] (1)
> **Prerequisites:** set up (5)
> **Cross-References:** go back to (3), we mentioned (1)
> **UI Navigation:** go to (2), scroll down (1)
> **CLI Commands:** make (1)
> **Ports:** :28 (1)
> **Speakers:** - [person] (1)


## Instructor

- [[Garrick Chow]]

## Skills Covered

- Microsoft Copilot
- AI Productivity
- AI for Business
- Artificial Intelligence (AI)

## Path Context

### In [[Getting Started with Custom GPTs, Copilots, and AI Agents]]
← [[Copilot Agents- Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)]] | **5 of 5**

## Appears In

- [[Getting Started with Custom GPTs, Copilots, and AI Agents]]

## Related Courses

_Courses sharing skills:_

- [[Copilot in Word- Create and Refine Documents with AI]] — Artificial Intelligence (AI), AI for Business, AI Productivity
- [[Learning Microsoft 365 Copilot for Work]] — Artificial Intelligence (AI), AI for Business, AI Productivity
- [[Copilot in PowerPoint- From Prompt to Presentation (2024)]] — Artificial Intelligence (AI), AI for Business, Microsoft Copilot
- [[Copilot in Outlook- Maximize Your Workday Efficiency (2025)]] — Artificial Intelligence (AI), AI for Business, AI Productivity
- [[Copilot in Teams- AI-Powered Collaboration]] — Artificial Intelligence (AI), AI for Business, Microsoft Copilot

---

[↑ Back to top](#)