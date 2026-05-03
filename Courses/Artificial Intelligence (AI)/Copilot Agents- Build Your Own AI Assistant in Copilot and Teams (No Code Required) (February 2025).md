---
type: course
cssclasses:
  - lle-course
slug: copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025
url: "https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025"
duration_minutes: 34
duration: 34m
updated: 2/14/2025
learners: 84180
skills:
  - Microsoft Copilot
  - AI Productivity
  - AI Agents
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE3KpoFnoJ4Pg/learning-public-crop_675_1200/B56ZosRzIMHAAY-/0/1761679455466?e=2147483647&amp;v=beta&amp;t=_tGj_1GeOK9eKNkEDNFIez1JQ273hCPiw6DOA9r_O1g"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with Custom GPTs, Copilots, and AI Agents]]'
prev_courses:
  - '[[ChatGPT- Crafting Exceptional GPTs for Enhanced Productivity and Innovation]]'
next_courses:
  - '[[Getting Started with Autonomous Agents in Copilot Studio (No Code Required)]]'
path_nav: '[{"path":"Getting Started with Custom GPTs, Copilots, and AI Agents","position":4,"total":5,"prev":"ChatGPT- Crafting Exceptional GPTs for Enhanced Productivity and Innovation","next":"Getting Started with Autonomous Agents in Copilot Studio (No Code Required)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/microsoft-copilot
  - skill/ai-productivity
  - skill/ai-agents
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Copilot%20Agents-%20Build%20Your%20Own%20AI%20Assistant%20in%20Copilot%20and%20Teams%20(No%20Code%20Required)%20(February%202025).md)

![Copilot Agents: Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)](https://media.licdn.com/dms/image/v2/D560DAQE3KpoFnoJ4Pg/learning-public-crop_675_1200/B56ZosRzIMHAAY-/0/1761679455466?e=2147483647&amp;v=beta&amp;t=_tGj_1GeOK9eKNkEDNFIez1JQ273hCPiw6DOA9r_O1g)

# Copilot Agents: Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)

> Copilot agents are modified versions of Microsoft's AI assistant that can help with specialized tasks using specific roles or parameters. In this brief workshop, LinkedIn Staff Instructor Nick Brazzi shows how to set up and use custom agents that specialize in specific jobs or connect to 3rd party services. Nick also introduces easy-to-use tools for creating your own customized agents so you can i

> [LinkedIn Learning](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025) | 34m | 84K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Use agents for specialized AI tasks](#use-agents-for-specialized-ai-tasks)
  - [Accounts and subscriptions required](#accounts-and-subscriptions-required)
- [**1. Use Agents in Microsoft 365 Copilot**](#1-use-agents-in-microsoft-365-copilot) (3 videos)
  - [Understand how Copilot agents work](#understand-how-copilot-agents-work)
  - [Use agents and install new agents](#use-agents-and-install-new-agents)
  - [Use an agent with a 3rd party account](#use-an-agent-with-a-3rd-party-account)
- [**2. Create Your Own Agents**](#2-create-your-own-agents) (5 videos)
  - [Create a basic Copilot agent](#create-a-basic-copilot-agent)
  - [Modify and refine a custom agent](#modify-and-refine-a-custom-agent)
  - [Create an agent using knowledge sources](#create-an-agent-using-knowledge-sources)
  - [Share an agent with teammates](#share-an-agent-with-teammates)
  - [Explore next steps with Copilot Studio](#explore-next-steps-with-copilot-studio)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use agents for specialized AI tasks](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-for-specialized-ai-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-for-specialized-ai-tasks?u=76281980&t=0)** - It's time to get ready for the next level of AI chat assistance. [[AI Agents]] in [[Microsoft Copilot]] can focus on specific topic areas or specialize in specific tasks. Just like you might hire a travel agent to plan a trip, an AI agent can narrow its focus and bring specialized skills to your tasks. I'm Nick Brazzi, and in my short workshop, I'll get you started with [[Microsoft Copilot|Copilot]] agents quickly, including agents that connect to third party services. And we're even going to see how you can build your own agents that can work from your instructions or specific sources of information. No special applications or programming knowledge required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1), [[Microsoft Copilot]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Analogies:** just like (1)
> **Speakers:** - it (1)

#### [Accounts and subscriptions required](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/accounts-and-subscriptions-required?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/accounts-and-subscriptions-required?u=76281980&t=0)** - Not all users will have access to the [[Microsoft Copilot|Copilot]] agent features that you'll see in this workshop. The first important detail is that agents are not available in Copilot for individual users. You must have the [[Microsoft 365]] Copilot subscription in an organization like your company, school, or government agency. The second big detail is that Copilot agents are a preview feature, at least at the time of this recording. You may not have these features unless your organization enables the preview for you. More on that in a moment. To start, we'll go to [office.com](https://office.com). You must sign in with a Microsoft 365 account that was assigned to you by your company, school, or a similar organization. Once you're signed in on the left, you'll see the Copilot button. I'll click that. And now we're in the Copilot chat and there's a button near the top right to open or close this panel on the right. And here in this panel I see some options for agents. And if you see that, then you're ready to jump into the [[Representational State Transfer (REST)|rest]] of this workshop. But it is possible that you still won't see the agent options there. There's a small set of baseline Copilot features that are included in all Microsoft 365 accounts, but those baseline features do not include agents. Your organization can pay for the additional subscription called Microsoft 365 Copilot. This requires an additional monthly subscription for each user, and it enables several additional Copilot tools. For example, this will enable Copilot inside of other applications like [[Microsoft Word]], [[Microsoft Excel|Excel]], [[Microsoft Outlook|Outlook]], and Teams, and it enables Copilot agent features
>
> **[1:36](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/accounts-and-subscriptions-required?u=76281980&t=96)** that we will use in this workshop. Now, there is a second scenario. If you do see the switch at the top for work and web, but you do not see the agent tools, it might be because agents are a preview feature at the time of this recording. You may have the right account, but you do not have access to preview features. And in that case, you can ask your organization's [[Microsoft]] administrator if they can enable these preview features for you and your teammates. And to help your administrator, here's a quick look at how they can enable those preview features. Only people with an administrator account can go to the site admin.[microsoft365.com](https://microsoft365.com) and sign in with that administrator account. On the left, choose Copilot. And on this page, go to the Settings tab, then scroll down and click the line for extensions. And from here, the administrator can enable extensions for all users in the organization or for specific people. This will enable copilot agents for those people. And in the future, when these features are no longer in preview, it is likely that this step will just not be necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (13), [[Microsoft 365]] (4), [[Microsoft Office|Office]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word]] (1)
> **UI Navigation:** go to (2), scroll down (1)
> **URLs:** [office.com](https://office.com) (1), [microsoft365.com](https://microsoft365.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - not (1)


### 1. Use Agents in Microsoft 365 Copilot

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand how Copilot agents work](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/understand-how-copilot-agents-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/understand-how-copilot-agents-work?u=76281980&t=0)** - If you need to plan a work trip, you might talk to a travel agent. Actors who need help navigating performance contracts will work with a talent agent. People who have experience with specific types of work can help you in your professional life. Agents in [[Microsoft Copilot|Copilot]] are similar to this. They have specific roles and parameters already defined, so you can go straight to asking your questions and get the best answers. So in Copilot, I might ask it to give me ideas to help my small local business expand nationally within the United States. And of course, it gives me some tips about developing my online presence and some marketing concepts I can research. But AI chat tools like Copilot are capable of much more complex requests. There are several courses on [[LinkedIn]] learning that teach how to write detailed, robust prompts to get very specific, insightful information. You may want to take a look at Garrett Chow's course, "[[Microsoft 365]] Copilot the Art of Prompt Writing", or one of the many other courses about [[Prompt Engineering]]. Part of prompt engineering often involves setting specific parameters and even telling Copilot the role or identity you want it to have when researching and answering your questions. Let's try a slightly more robust version of that prompt. I'll start the prompt by writing, you are an international business lawyer specializing in renewable energy and clean energy startups. As my business grows, I need to be aware of potential regulatory requirements and tax obligations. And now that I've defined that role and parameters,
>
> **[1:35](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/understand-how-copilot-agents-work?u=76281980&t=95)** I'll continue with exactly the same text that I had in my previous prompt. So I'll type, give me ideas to help my small local business expand nationally within the United States. And this gives me a much more detailed, much more effective response. So you could learn some prompt engineering techniques, or even if you just take a little extra time to write longer, more thoughtful prompts that will usually get you better results. But you might find yourself writing out those roles and parameters over and over every time you have a new question for Copilot. What if you could establish those roles and parameters and save them? What if you could save several of these roles and choose which one you want to engage with whenever you want? Well, you can, and this is where you would use an AI agent. You might use a Copilot agent that specializes in helping you write more effectively, or you might use an agent that can engage with third party online services, or you might use an agent that takes on the role of a marketing director to help you grow and expand your business, or an agent that is knowledgeable about your company's employee manual and HR policies. These are just a few scenarios, and in fact, they are the scenarios that we will explore as we go through this workshop. But you'll also see that this is just the beginning and there's so much more potential in using AI assistance with specialized knowledge and parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[Prompt Engineering]] (3), [[LinkedIn]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Warnings:** be aware (1)
> **Speakers:** - if (1)

#### [Use agents and install new agents](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-and-install-new-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-and-install-new-agents?u=76281980&t=0)** - In this video, we will start with some basic agents offered by [[Microsoft]], but as we start, it's good to remember that you can access [[Microsoft Copilot|Copilot]] in a few different ways. If you're working from the [[Microsoft Office|Office]] website, make sure to select Copilot on the left, and that takes you to the Copilot chat. If you're working in [[Windows]], you can go to the start menu to the list of all applications and open the app called [[Microsoft 365]] Copilot. You may be prompted to sign into your account. Then just like the website, you can select Copilot on the left. And if you're working in [[Microsoft Teams]], make sure to click the chat button on the left to go to the chat section. Then choose Copilot at the top of the chat list, and that takes you to Copilot inside of the Teams interface. For many of these, you can click the button near the top right to open or close this panel, and in that panel you'll see your options for agents. At the very top of the list, we see the normal Copilot option, and this is where you would start for most normal Copilot interactions. Copilot can do lots of things, but I want to ask it to make a picture of a house with solar panels, and it can do that. After a moment, we see some pictures that Copilot generated here, but in the panel on the right below the main Copilot line, there's one agent listed by default called Visual Creator. Now, I've seen the options in this list change over time, so I suspect that there may be different agents listed here in the future. But if I select the Visual Creator agent, this is an agent that specializes in creating pictures, so there are some suggested prompts
>
> **[1:35](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-and-install-new-agents?u=76281980&t=95)** that focus on making a picture or in the chat field, I can just type a house with solar panels. I didn't have to tell it to make a picture. This agent knows its role. I just told it what I wanted a picture of, and here are the options that it generated. You can ask follow-up questions and make changes, but all of your queries will be interpreted with a focus on making pictures. Back to the list of agents on the left, you can get more agents by clicking the Get Agents button, and here is a list of pre-made agents that you can install. Now, I expect this list will grow in the near future, so I recommend you scroll through the list on your own computer and see what's available. I want to start with the agent called Writing Coach. This is another agent made by Microsoft. It's one of the easiest to set up and use, but it's also one of the most basic. You can click on an agent to read more information about it, and when you find an agent that you want to use, you can click add and it takes me back to the Copilot interface and that agent has been added. I can see it on the list on the right side. I'll make sure to select that, and here in the writing coach agent, Copilot will respond to my queries with an established role of helping me write drafts or revise text. The suggested prompts are all based on those goals, or I could just tell it what I need, so I'll type a product description detailing the benefits of rooftop solar panels, and it gives me a draft because that's the agent's specialization. You could also ask the writing coach for advice on how
>
> **[3:09](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-agents-and-install-new-agents?u=76281980&t=189)** to revise some text, and if you ever want to clean up and remove an agent that you've installed, you can point at that agent. A button with three dots will appear to the right. You can click that and choose uninstall. Now, I hope you're saying to yourself all of those things, creating pictures, asking for drafts of text, those are all things that Copilot can do anyway. You don't need an agent to help with those things. That is true, but these agents have specializations, so you can get what you need with simpler requests, saving you some time. But here's the more important point. What we've seen so far are very basic agents, just so we can see how they work. As we continue through the workshop, we're going to see how different types of agents can be much more useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (15), [[Microsoft]] (2), [[Microsoft Office|Office]] (1), [[Windows]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** make (6), find (1)
> **Analogies:** picture (4), just like (1)
> **UI Navigation:** go to (1), open the (1), select the (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - in (1)

#### [Use an agent with a 3rd party account](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-an-agent-with-a-3rd-party-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-an-agent-with-a-3rd-party-account?u=76281980&t=0)** - In this video, we will start looking at more specialized agents that can actually do things that [[Microsoft Copilot|Copilot]] cannot do on its own. In the Copilot chat, in the panel on the right, I'll click Get agents and we see the list of agents that you can install. Now, some of these, including the Career Coach, the Prompt Coach, and the Writing Coach, which we saw in another video, are basic agents offered by [[Microsoft]]. But many of these other agents will connect to third party apps and services. Each of these is able to answer questions and help with tasks that specifically relate to those services. So each one will work differently. And many of these will require you to sign into an account with those services. So scroll through the list, and if you have an account with [[Trello]], or [monday.com](https://monday.com), or [[Confluence]] or any of these other services, you can install and set them up. I'll just choose one as an example. Dropbox is a popular [[Cloud Storage]] service. You can use it to store and share files online. I do have a Dropbox account, so let's try the Dropbox agent. I'll click on it to see information about it, then I'll click the add button to install it. When it takes me back to the Copilot interface, I can see the Dropbox agent listed on the right. I can select it and ask questions specifically about the files I have stored on Dropbox. Now, to get started, I'll use one of the suggested prompts here. Here's a prompt to ask the agent to find PDF files. I'll select that and I'll click send.
>
> **[1:36](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-an-agent-with-a-3rd-party-account?u=76281980&t=96)** But the first time you use an agent like this, there is a little setup. First, you'll need to give it permission to connect Copilot to that service. I will allow that. And next, any agent that connects to a third party service will prompt you to sign into that service. So I'll sign in with my Dropbox account. Now it's connected and it will answer the question from the prompt, and here are the PDF files that it found in my Dropbox account, along with links to open each of those files. And now that it's set up, I'll reset by clicking the New chat button at the top and I can ask it to help me find files that I have stored on Dropbox. So I'll ask it whether I have any files with information about Kinetico [[Microsoft Products|products]]. Kinetico is one of my clients, and it did find files related to them on my Dropbox. Here they are. I'll click new chat again to reset, and then I'll ask it to show me any catalog files that I have, and it shows me catalogs, but it also found some brochures. It looks like the AI is trying to help me find related files. I'll use the chat field for a follow-up request. I'll just ask it to exclude brochures. That refines the results, and now it's showing me different files. I can continue to refine the results, or since I do see the file that I want, I can click on the link to open it right here. Now, clearly each online service is different, so the other agents will be able to answer different types of questions depending on those accounts. But now we have a whole category of agents
>
> **[3:09](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/use-an-agent-with-a-3rd-party-account?u=76281980&t=189)** that use the Copilot interface, but can do things that Copilot would never be able to do on its own, and we're starting to see that agents in Copilot have the potential to be very powerful and very helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[Microsoft]] (1), [[Trello]] (1), [[Confluence]] (1), [[Cloud Storage]] (1)
> **Prerequisites:** install (3), setup (1), you'll need (1), set up (1)
> **CLI Commands:** find (4)
> **Env Vars:** pdf (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **URLs:** [monday.com](https://monday.com) (1)
> **Tools:** confluence (1)


### 2. Create Your Own Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a basic Copilot agent](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-a-basic-copilot-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-a-basic-copilot-agent?u=76281980&t=0)** - In this video, we will see how to actually make a [[Microsoft Copilot|Copilot]] agent without even leaving the Copilot interface. We'll start by making an agent that has all of the same capabilities of Copilot, but has certain parameters, and will respond with a specific role in mind. With the panel open on the right, there's an option to create an agent. This takes us to a tool called the agent builder. Now, the first thing you'll see is a chat field, which can make the process very easy, but how this works might not be clear at first. So let's use the buttons up at the top to switch over to the Configure mode. We'll come back to the Describe mode in just a moment. And from here, you can give your agent a name and a description. Then, in the Instructions field, you can describe how you want the agent to work. So think about all of the detail that you might put into individual prompts. You might describe a specific role that you want Copilot to assume or give it some context and constraints. But instead of typing that into each individual prompt, you can define those parameters here for the agent. And you could do that manually in the Instructions field here. Or, let's keep this in mind, and instead go back to that Describe mode. And you can just use this chat field to describe the agent that you want. So I'll do that. I'll tell it that, "I need an agent that can act as an experienced marketing director specializing in growing businesses internationally. Make sure all answers are consistent with plans to expand beyond the United States into international markets,
>
> **[1:33](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-a-basic-copilot-agent?u=76281980&t=93)** starting in Western Europe." Now, that's a good start, but I also want the agent to respect our company's mission statement. Here in a [[Microsoft Word|Word]] document, I have our mission statement, so I'll select that and I'll copy it. And back in Copilot, I'll continue with this description. I'll tell it to, "Make sure responses are consistent and compliant with our company's mission statement." Then, I'll paste in that mission statement and put quotation marks around it. And that's my starting description. I'll click the send button. And now that I've given it that description, it'll just ask a few follow up questions. It asks if I like this name for the new agent. I could tell it to change the name, but I'll just say yes. And next, it's asking me what should be emphasized or avoided in the agent's responses. I'll tell it that I want it to always include information about specific international markets in the responses, clarify how each piece of advice is relevant to those specific markets, and when possible, organized responses in a table or bulleted list. And with all that, I'll click the send button. And then it asks me what type of tone I want the agent to use. I'll answer with, "Give me detailed responses," and I'll click send. And now, we're actually most of the way there. If I switch back to that Configure tab, I see that it is filled in the name and the description, and it is filled in the instructions for this chat agent. And this is all based on the questions and answers that we just went through. Of course, you can change or refine any of these instructions.
>
> **[3:06](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-a-basic-copilot-agent?u=76281980&t=186)** And based on the instructions that we define on the left, this preview on the right is what the chat agent will look like. Of course, we see these suggested prompts, and these were also set up by the AI based on those questions that I answered. And in the configuration, I can scroll to the bottom and see those starter prompts here. So you could use this preview and try your agent to see how it works. However, I have seen some situations where the preview gives inconsistent responses during this initial creation phase, so I prefer to fully save my new agent first, then test it. We can always come back and make revisions later. So for now, I'll click the Create button. Then I'll click Dismiss, and close this panel. And now, in the Copilot interface, I can see that new agent listed in the panel on the right. So when I want to use the agent, I can select it there, and I see the starter prompts that I can try, or of course, I can ask my own questions and the agent will answer using all of the context and constraints that I set in the instructions. So I'll ask it to, "Help me brainstorm marketing strategies." I get a response. It's asking me for some clarification. So I'll answer this question. And I'm starting to get some good responses here. I can continue the conversation with the AI chat from here. We'll see how to go back and adjust the agent later in this workshop. For now, I can select the main Copilot line at the top when I want to use the normal Copilot, and I can select my agent when I want Copilot to work within those parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (9), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (5)
> **Prerequisites:** configure (2), set up (1)
> **Cross-References:** go back to (1), later in (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Modify and refine a custom agent](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/modify-and-refine-a-custom-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/modify-and-refine-a-custom-agent?u=76281980&t=0)** - After you make an agent, you're probably not finished. I think it's normal to start using and testing your agent and then discover some details that you want to change. So first I'm going to select the agent that I created, this global marketing director agent, and I'll ask a question. I'll ask, how can we ensure our marketing practices are ethical and transparent? And it gives me an answer full of useful information. But I really wanted examples in the responses of how this information applies in different countries in Europe. I thought I asked for that in the instructions when I made the agent, but I don't feel like I'm getting the responses that I wanted. So let's modify the agent. Looking at your agent in the panel on the right, there are no options to edit it. Even if you click the button with three dots, there's no option here to edit your agent. Instead, you'll need to click where it says create an agent. And at the top of the agent creation panel, there's a menu. From this menu, you can choose view all agents. And this shows a list of all of the agents that you've created. I only have one on my list so far. If you ever need to delete an agent, you can point at it, then click the button with three dots, and there's an option to delete it. But it's best to uninstall it first, which we saw earlier in the workshop, then come here and delete it. Or to make changes to an agent, you can click on the name here. And looking at the instructions, I thought these would have given me the responses that I wanted, but it's not really working for me. I have encountered this before, and here's my advice. Don't be afraid
>
> **[1:32](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/modify-and-refine-a-custom-agent?u=76281980&t=92)** to repeat the same instructions multiple times. If it's important, and the agent is not doing it, you can add those instructions again with a little rephrasing. So even though it already says always include information about specific international markets in the responses, I'll also add a line that says when the response contains a table or a list of items, include extra detail in each item describing a relevant use case in a major European country. And don't be afraid to add what you think is the same set of instructions multiple times. I'll add this same basic instruction, but I'll just type it another way. So I'll type in every response add details about how each piece of information can be applied in major European countries. Give examples from one or two countries in each bullet point. And feel free to add any other clarifying instructions that you need. Now, we can actually test this right here in the preview panel to see if that added instruction makes any difference. So I'll click the chat field in the preview version and ask my question. I'll ask, how can we ensure our marketing practices are ethical and transparent? And now I'm getting the type of response that I wanted. This may take a little extra work back and forth as you add new instructions, then test how the agent works. But once this is set up, it will be worth it. Next, let's scroll back up to the top where we can see the option for the agent icon. You can keep this default icon, or if you have your own graphic, you can click the pencil button, then click change icon.
>
> **[3:06](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/modify-and-refine-a-custom-agent?u=76281980&t=186)** I do have a graphic with my company's logo, so I'll select that. And you could also change the background color if you want. Then click save. Next, let's scroll down to the bottom and take a look at the starter prompts. These were created by the Ai when I described the agent that I wanted. We see them listed here, and if I click the new chat button in the preview to reset, we see how they look in the preview. If you plan to share this agent with your teammates, they may not know the types of questions that they can ask. Good starter prompts can help new users understand the questions that the agent can handle. And you can change the title and the message on any of these starter prompts, or you can delete any of them. And you do have a maximum of six here. So if I wanted to add another one, I would need to delete one first. Then I would be able to click where it says add a starter prompt. For the title I'll type marketing evolution. Then in the message field, you basically need to type the prompt as if you were asking this question directly in the agent. So I'll type show examples of some marketing strategies that may have been effective 20 years ago, but may not be as effective today. And now I see that updated starter prompt in the preview. You might need to click the new chat button before you see that. But I can click on that new starter prompt to try it. Then I'll click the send button, and that starter prompt returns some excellent information. As you make your changes, they are automatically saved. But to be safe,
>
> **[4:37](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/modify-and-refine-a-custom-agent?u=76281980&t=277)** I like to click the update button in the top right. Then I'll dismiss this and close this panel. And I'll just reload the page to make sure everything is updated. And when I select my agent on the right, I can see it has updated with the new icon and the new starter prompt. I recommend you test and revise multiple times until your agent is working and giving you the types of responses you need.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2), select the (1), scroll down (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Cross-References:** earlier in (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - after (1)

#### [Create an agent using knowledge sources](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-an-agent-using-knowledge-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-an-agent-using-knowledge-sources?u=76281980&t=0)** - When you make agents, you may want to provide specific sources of knowledge that the agents can use to find answers. I'm going to make a new agent, and this one will be a resource for employees at my company to get answers about company policies and HR issues. So on the right you can click Create an Agent. And in the Describe tab, I'll say that "I need an agent to help employees of Globe Bank by answering questions about company policies, employment policies, and HR issues." Then click Send. It suggests a name, but I'll tell it to use a different name. I'll type, "I prefer Globe Employee Assistant," and click Send. Now from here you could continue answering the follow-up questions to help shape your agent, but I'm just going to click the Configure button to set some options manually. In the Instructions field, you can see the instructions that the AI created based on my description. And of course, you can change or add to these instructions, but I want to scroll to the Knowledge section, and here I can provide the knowledge sources that the agent can use to find the official policies. You can set up your agent to use specific documents, and you can tell it whether you want it to use information from the public internet. I do not want this agent to use content from the web, so I'll leave that disabled. And for knowledge sources, you can provide a link to a [[SharePoint]] site in your organization, or you can choose files that are stored on a SharePoint site. Now, you cannot upload files directly from your computer and you cannot use files stored in another location.
>
> **[1:36](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-an-agent-using-knowledge-sources?u=76281980&t=96)** This may be a bit limiting, but remember, the Agent Builder is designed to be light and easy to use. And at the end of this workshop, we'll take a quick look at [[Microsoft Copilot|Copilot]] Studio, which lets you create agents with more options. Now, my company does have a SharePoint site and the HR documents I want to use are available on that site. So I'll click Browse and the name of my company's main SharePoint site is The Landing. So I'll choose that site and I can see the files in the document library from that site. I'll choose the employee manual and the company story document, and then click Select. After a moment, I see those files listed here. But I'll click Browse again and I'll go to that same SharePoint site, then to a different folder and just select a few more files. Now you may see the [[Microsoft Word|word]] "Pending" next to a file. If so, you'll need to just give it a little extra time before your agent can provide information from that document. But now I've provided knowledge sources. Next, you might want to use the preview on the right to test your new agent, but I actually recommend you don't do that at this point. In my experience, the agent may not work 100% if you preview it before you actually finalize the agent. So instead, I'll click Create up at the top. And after a moment, it finishes creating the agent. I could click this button to go straight to the agent, but to see how this is all set up, I'll just dismiss this first. Then close this panel. And now in the Copilot interface, I see my new agent on the right. So I'll select that. And remember, this agent includes some good starter prompts.
>
> **[3:10](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-an-agent-using-knowledge-sources?u=76281980&t=190)** So let's try the starter prompt that asks about my company's harassment policies. I'll click that, then click the Send button, and it provides an answer, which includes a citation. Small numbers like this are links to where it found this information, so I can click that citation to see that it got this information from my company's employee manual, and I can click that to actually open that document. For now, I'll close this. And back in my Copilot agent, I'll try another question. But this, this is very important. I'm going to click the New Chat button first to reset to a new conversation. If I ask about an unrelated topic without resetting the conversation first, I found that it can get confused and return inaccurate information. But with a fresh new chat, I can ask, "Can I bring my pets to work?" And it tells me that there is no specific policy about bringing pets to work. And this is great. It is only searching through the documents that I referenced as knowledge sources. It did not find that information, and it tells me. Let's ask a question that it should be able to answer from my knowledge sources. And of course, I'll reset by clicking the New Chat button up at the top. Then ask, is there a retirement plan? And it can answer this question along with citations referring to the employee manual, which was provided as a knowledge source. If you build an agent like this, you can always go back and provide additional instructions, change parameters,
>
> **[4:43](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/create-an-agent-using-knowledge-sources?u=76281980&t=283)** or even change the knowledge source documents at any time. This way, you can configure an agent to answer questions only using specific information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SharePoint]] (5), [[Microsoft Copilot|Copilot]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (3), make (2)
> **Prerequisites:** configure (2), set up (2), you'll need (1)
> **UI Navigation:** go to (1)
> **Speakers:** - when (1)

#### [Share an agent with teammates](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/share-an-agent-with-teammates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/share-an-agent-with-teammates?u=76281980&t=0)** - If you've made some [[Microsoft Copilot|Copilot]] agents that help you work more efficiently, you may want to share them with your teammates. You can share your own custom Copilot agents with anybody else in your [[Microsoft 365]] organization, as long as they also have the Microsoft 365 Copilot license. To share an agent, you'll need to click where it says, create an agent in the panel on the right. And from here, you can click the menu at the top and choose view all agents. This shows a list of all of the agents you've created. If you point at one, a share button appears, so I'll click that. And this gives you a link that somebody else can use to access this agent. But first, you'll need to set who the link will work for. The option that says only you doesn't really help us here. That would mean that the link would not work for anybody but you. The middle option will only work if your company's [[Microsoft]] administrator has created security groups. These are defined groups of people who have been given access to specific services. You can talk to your administrator to see if they have any security groups set up, or maybe they can help you set up some security groups. But generally, I think the best option is anyone in your organization. So anybody in your Microsoft 365 organization who has the link will be able to use it. But there's another important detail here. If you are sharing an agent that uses specific knowledge source files from [[SharePoint]], you could have an issue with permissions. SharePoint sites and SharePoint documents have their own sharing permissions.
>
> **[1:32](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/share-an-agent-with-teammates?u=76281980&t=92)** For somebody to use a shared agent, they must have the link for the agent, and they must also have permission to access any SharePoint files that the agent uses. So if I share this agent with one of my teammates and they do not have permission to access the SharePoint files, then the agent will not work for them. We have several courses on [[LinkedIn]] Learning that cover SharePoint sites, SharePoint files, and how to modify their sharing permissions, including SharePoint Online Essential Training: The Basics by Gini von Courter. For now, I'll just choose the option anyone in your organization. And I'll only send this link to people who can access that SharePoint site. If you change the sharing mode, you will need to click the Save button. Then I'll click the copy button next to the link to copy it, and from there you can go to an email message or a chat message or something like that. I'll go to [[Microsoft Outlook|Outlook]] and send an email to my coworker Stewart. I'll right click in the email message and choose to paste that link here. And then I'll send the email. And now let's switch over to Stewart's computer. And here on Stewart's computer, we see that he has received that email. He can click that link and it shows the information page for that agent and he can choose to add it. And now that Stewart has added that agent, when he goes to Copilot, he will see the agent in the sidebar on the right. He can select it and use it. So all the work you put into building your Copilot agents can save you time in the future. And if you share them with your teammates,
>
> **[3:05](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/share-an-agent-with-teammates?u=76281980&t=185)** your agents can save them time as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SharePoint]] (9), [[Microsoft Copilot|Copilot]] (5), [[Microsoft 365]] (3), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Prerequisites:** you'll need (2), set up (2)
> **UI Navigation:** go to (2), in the sidebar (1)
> **Speakers:** - if (1)

#### [Explore next steps with Copilot Studio](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/explore-next-steps-with-copilot-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/explore-next-steps-with-copilot-studio?u=76281980&t=0)** - You may have noticed that there are some limitations to the agents that you can make using the agent builder. If you reach the limit of what you can do here, [[Microsoft]] does offer a separate tool called [[Microsoft Copilot|Copilot]] Studio, which has a much more robust set of features. Now, this workshop does not teach how to use the full version of Copilot Studio, but I did want to give a brief introduction. Copilot Studio requires another separate purchase. Your organization's Microsoft Administrator can purchase and enable it for your team. Instead of paying a subscription price per user, Copilot Studio will be enabled for the entire organization and your administrator will have to pay for the number of messages processed by your agents. There's some information for administrators looking to activate Copilot Studio here, but let's go back to Copilot where we've been working, and when I click the option to create an agent, you may have noticed that this page is labeled as Copilot Studio, and this might be a little misleading. We have not been using Copilot Studio here. What we've been using is technically called Copilot Studio Agent Builder, and it's just a light version of the tool set that's based on Copilot Studio. If your organization does have access to it, you can go to copilotstudio.[microsoft.com](https://microsoft.com). In Copilot, you can create an agent, and there's also a library of pre-made templates you can use as a starting point, or you can make a new basic agent starting with tools that are similar to what we've used in this workshop.
>
> **[1:34](https://www.linkedin.com/learning/copilot-agents-build-your-own-ai-assistant-in-copilot-and-teams-no-code-required-february-2025/explore-next-steps-with-copilot-studio?u=76281980&t=94)** You can describe the parameters in the chat interface or switch to the manual configure mode, but the tool set really expands when you open an agent that you've already created. You can adjust the agent's instructions and knowledge sources, but you can also include actions, which give the agent the ability to complete tasks in other applications or online services. You can include triggers, allowing the agent to automatically take action when certain events occur, and topics let you create established conversation paths, so the agent will have specific responses to specific user inputs, or you can enable [[Generative AI]] orchestration, which gives the agent the ability to choose some of its own actions, knowledge sources, and topics. And when you're finished, Copilot Studio can publish your agents so they can be used by your teammates in Copilot and Teams, but it also has the ability to publish agents for external customers and partners, or it can format the agent as a chat bot that you can place on a website or publish on third-party communication platforms. So Copilot Studio offers a much more comprehensive and complex set of tools for creating autonomous agents. For some people, it offers valuable next steps to look into when you reach the limit of the agent builder that we've learned in this workshop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (14), [[Microsoft]] (3), [[Generative AI]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), switch to (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - you (1)


## Instructor

- [[Nick Brazzi]]

## Skills Covered

- Microsoft Copilot
- AI Productivity
- AI Agents
- Artificial Intelligence (AI)

## Path Context

### In [[Getting Started with Custom GPTs, Copilots, and AI Agents]]
← [[ChatGPT- Crafting Exceptional GPTs for Enhanced Productivity and Innovation]] | **4 of 5** | [[Getting Started with Autonomous Agents in Copilot Studio (No Code Required)]] →

## Appears In

- [[Getting Started with Custom GPTs, Copilots, and AI Agents]]

## Related Courses

_Courses sharing skills:_

- [[Copilot in Word- Create and Refine Documents with AI]] — Artificial Intelligence (AI), AI Productivity, Microsoft Copilot
- [[Build Ai Agents And Automate Workflows With N8n]] — AI Agents, Artificial Intelligence (AI), AI Productivity
- [[Learning Microsoft 365 Copilot for Work]] — Artificial Intelligence (AI), AI Productivity, Microsoft Copilot
- [[Getting Started with Autonomous Agents in Copilot Studio (No Code Required)]] — Artificial Intelligence (AI), AI Productivity, Microsoft Copilot
- [[Agentic AI- Building Data-First AI Agents]] — AI Agents, Artificial Intelligence (AI), AI Productivity

---

[↑ Back to top](#)