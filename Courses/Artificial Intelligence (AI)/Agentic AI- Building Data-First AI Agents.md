---
type: course
cssclasses:
  - lle-course
slug: agentic-ai-building-data-first-ai-agents
url: "https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents"
duration_minutes: 43
duration: 43m
updated: 7/25/2024
learners: 27831
skills:
  - AI Productivity
  - AI Agents
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFL4bRud3pXew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721841126256?e=2147483647&amp;v=beta&amp;t=D6WrF-aLEBaJ-TJaFNTNW3TdmYNjbt2msafQjvqvJks"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Understanding Generative AI for Tech Leaders](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Understanding%20Generative%20AI%20for%20Tech%20Leaders.md)'
prev_courses:
  - '[Introduction to Multimodal Prompting for Generative AI](Introduction%20to%20Multimodal%20Prompting%20for%20Generative%20AI.md)'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":22,"total":22,"prev":"Introduction to Multimodal Prompting for Generative AI","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - skill/ai-productivity
  - skill/ai-agents
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Agentic%20AI-%20Building%20Data-First%20AI%20Agents.md)

![Agentic AI: Building Data-First AI Agents](https://media.licdn.com/dms/image/v2/D560DAQFL4bRud3pXew/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721841126256?e=2147483647&amp;v=beta&amp;t=D6WrF-aLEBaJ-TJaFNTNW3TdmYNjbt2msafQjvqvJks)

# Agentic AI: Building Data-First AI Agents

> In this course, Senior Staff Instructor Morten Rand-Hendriksen and Microsoft Director of Data & AI Strategy Viroopax Mirji analyze the data challenges enterprises face when building AI agents. The course examines data quality, privacy, integration, and bias, with real-world examples from industries like healthcare and autonomous vehicles. The conversation covers best practices for data management,

> [LinkedIn Learning](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents) | 43m | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Data-first AI agents](#data-first-ai-agents)
- [**1. Data-First AI Agents**](#1-data-first-ai-agents) (10 videos)
  - [The importance of data in AI agents](#the-importance-of-data-in-ai-agents)
  - [Dealing with data puddles](#dealing-with-data-puddles)
  - [Bringing structure to agentive AI data](#bringing-structure-to-agentive-ai-data)
  - [Mitigating risks when building agentive AI](#mitigating-risks-when-building-agentive-ai)
  - [Agentive AI and data governance](#agentive-ai-and-data-governance)
  - [Responsible AI and data](#responsible-ai-and-data)
  - [When to build agentive AI systems](#when-to-build-agentive-ai-systems)
  - [How to build trust in AI agents](#how-to-build-trust-in-ai-agents)
  - [The data lifecycle of agentive AI](#the-data-lifecycle-of-agentive-ai)
  - [Using AI as a data opportunity](#using-ai-as-a-data-opportunity)
- [**2. Conclusion**](#2-conclusion) (1 videos)
  - [Agentive AI as an opportunity space](#agentive-ai-as-an-opportunity-space)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Data-first AI agents](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/data-first-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/data-first-ai-agents?u=76281980&t=0)** - How do we build functional and reliable [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) for the enterprise and its users? Part of that answer is robust, high-quality data and [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). To take a deep-dive into the subject, I've reached out to [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Director of Data and AI, (indistinct). Here's our conversation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Speakers:** - how (1)


### 1. Data-First AI Agents

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of data in AI agents](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-importance-of-data-in-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-importance-of-data-in-ai-agents?u=76281980&t=0)** - Whenever we talk about AI, one of the big things is data, because AI can do things, but it can only really do things once we provide it with data. What are the biggest data challenges organizations face when it comes to implementing AI today?
>
> **[0:18](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-importance-of-data-in-ai-agents?u=76281980&t=18)** - In our experience, when we look at sources of data, the challenges are coming from people, from the data itself, and the way you process the data or leverage the data in agent tech AI models. There are different functions. There's obviously business and IT, but then there's engineering, building new [products](../../Skills/Software%20Development/Microsoft%20Products.md). There's operations, there's sales, there's marketing, there's so many other units. All of them have their own data sources. And so the first challenge is really the siloed approach, we tend to take being humans, people who are using the data with our localized processes, doing our day-to-day job, and forgetting about the criticality of this data, which will be used by AI eventually. So it is garbage in, garbage out. If you do not connect all the data sources together or bring them in a usable form or shape, you end up having duplication. You have frustration moving data around. Sometimes you hear customers saying, "Oh, they're all over the map. How do I unify all of this? How do I have a single source of truth?" It's really frustrating for the citizen users and some of the data analysts also say like, "I don't understand the domain, I don't understand the model, I want to just make a decision. Can't you gimme what I need?" And so some people focus more on the challenge, which is associated with democratization of data and access to data, insights into the data. Others focus more on faster decision making. They're saying like, "I don't care
>
> **[1:50](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-importance-of-data-in-ai-agents?u=76281980&t=110)** about all the stuff you're doing behind the scene with [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), plumbing, all this stuff. I'm not a plumber, I'm a user, I want to make decisions." The most common question we have heard people saying is, "Look, help me simplify this. I am a chief data officer, or I'm a chief information officer. I don't want to be the chief integration officer. Help me unleash AI in my data state. Make it usable, make it monetizable." And so to that extent, [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) comes as the highest need of the hour. The challenge that we are faced with because we are operating in silos, we have different personas, we have different processes, and each process doesn't want to communicate with the other process. So you end up with data quality issues, poor data quality. At the end of the day, we have data in, one customer called it a puddle, not a swamp, but a puddle. I have data in puddles all over the map. Just imagine there are puddles. I step into this and I make the wrong decision. I step into that, another wrong decision. So [Data Integration](../../Skills/Data%20Science/Data%20Integration.md) is a big issue. Data quality obviously gets impacted by that too. And then the lack of labeled data, if you're doing more like [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) models, if you don't have those labeled out, then you're going to end up a lot of time and money and it's expensive, not doing that data labeling activity. Finally, I would say that one of the most underestimated challenges is bias. Bias in data Because if you train the model with the data
>
> **[3:24](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-importance-of-data-in-ai-agents?u=76281980&t=204)** and you have the wrong policies or the wrong moderation in place, you end up with the wrong result or wrong [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) output as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (1), [Data Integration](../../Skills/Data%20Science/Data%20Integration.md) (1), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1)
> **CLI Commands:** make (5)
> **Speakers:** - whenever (1), - in (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Dealing with data puddles](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/dealing-with-data-puddles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/dealing-with-data-puddles?u=76281980&t=0)** - We have a bad tendency of building data puddles even dynamically. We have this database that exists that we use for all our data. But then when I need the data, I export it into an [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) spreadsheet, and then I use that, and then that Excel spreadsheet gets shared with other people. And then all of a sudden, you have a little puddle over here, and then you have a little puddle over here. So how do you design a process for the company in such a way that that doesn't happen? That we don't split up our data because it's easier?
>
> **[0:34](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/dealing-with-data-puddles?u=76281980&t=34)** - I've seen so many companies starting with their AI journey, and sometimes they end up taking years doing this because they cannot agree on the basic aspects of [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md), ownership, who's controlling what, where. And that is a dangerous thing, right? Like when you're, there are certain types of industries and companies, and it's no fault of theirs. They work on a project basis. Every initiative is a project. So within that project, you have certain people. They want to store the data here and not there. They don't want to unify or share it with someone else. So these are cultural problems that we face and business problems too because they don't really need to share with other projects. But what if they did? What if they had existing legacy systems, database is all connected together and unified, or still separated but available to each other to learn from, to improve the Agentic AI system, right? So we do need Excel of the world. We do need people to do their individual work because that's the way they're comfortable. It's low cost. It's right there on their laptop. They want to continue to use [Office](../../Skills/Web%20Development/Microsoft%20Office.md) tools, they will continue to use that and put some data in there. But then you need a way to siphon all of that data into a one lake. That's what we call it. One lake is the one drive for all of your data, everywhere in every surface. And if you keep it all unified and together with the right security levels and access layers,
>
> **[2:09](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/dealing-with-data-puddles?u=76281980&t=129)** all of that in place, then you have a playground through which you can set up workspaces. You can have folders, you can do everything that you need to do within your spectrum and focus to build out your app. Now, I'll take a great example here, and I'm working with the company right now, which is more in the retail space. Their sales team wants to move much faster than their other teams, right? Operations, IT, everybody else. So they'll build AI on their data. But what about that data and its connectivity to the other data assets, the CRM data, the finance data, all the other pools or puddle of data, if you want to call it, right? And why the term puddles? Because each project that they're doing for their end customer could be handled separately and kept separately in another silo. And so we had to think about integrating, you know, the data in such a way, or bringing the data together in such a way that it maintains the independence to be good at their business, what they do every day, but also, allow them to move at the pace that they want to within the different organizations and functions. We have ended up building a new platform, a modern data platform called Fabric. And the mission behind that Fabric was do not move your data, keep it where it is, but make sure there are shortcuts and mirrored location so that the data is available for data scientists. It is available for AI engineers, it's available for those super users or business users, the data citizens of the world
>
> **[3:44](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/dealing-with-data-puddles?u=76281980&t=224)** who want to make the right decisions at the right time. So if you are able to achieve that framework, you take your existing stores. Let's say you have 100,000 [SQL](../../Skills/Data%20Science/SQL.md) servers, each one of them have valuable data. If you're able to connect it all together and without moving much data, use it for AI applications. That becomes your modern data platform, right? The one that helps AI have a holistic view, good quality view. You can do all your transformation in there. You can do your governance on top of it. You can make sure the quality of the data is there, and then you can take subsets of it and share it with the right people so that they can use it. Imagine your Excel data, which you were just talking about earlier, is transformed into delta park and available, accessible by all the other users who want to build AI applications on it. This is something was never done before. This is amazing stuff, right? Because now, truly, you can take the power of your day-to-day business user, take their data, take your IT data, ops data, sales, finance data, and make truly intelligent and smart systems, [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) on top of it, which have the full 360 view of the customer, the full view of your business, and be able to make kind of a much better, complete, comprehensive system per se.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (4), [Data Stewardship](../../Skills/Data%20Science/Data%20Stewardship.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1)
> **CLI Commands:** make (5)
> **Env Vars:** crm (1), sql (1)
> **Definitions:** is a  (2)
> **Speakers:** - we (1), - i (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### [Bringing structure to agentive AI data](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/bringing-structure-to-agentive-ai-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/bringing-structure-to-agentive-ai-data?u=76281980&t=0)** - How do we structure our data in such a way that when there is some sort of conflict within the data, the data systems, these [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md), are able to identify these conflicts and then resolve them?
>
> **[0:15](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/bringing-structure-to-agentive-ai-data?u=76281980&t=15)** - If you think of this, this is the scope of your project, 60 to 80% of the project was just getting the right data, preparing the training datasets, and doing all of that. We live in a new world here today of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), small language models, and narrow AI models, where it's coming pre-trained. It needs fine-tuning. Sometimes it needs fine-tuning, sometimes it needs embedding, sometimes it needs vector indexes to tune it to the the relevance factor that you want to keep in mind. But at the base level, if I step back and look at the bigger picture, it comes back to the basics of ensuring that you have a process to clean the data, bring it all in, transform it, put it in a shape that is usable, and then use that for building out your model or building out the application, which is relying on a pre-trained model. But at the same time, you need to think about feature selection. What are the right parameters? Sometimes there's too many parameters. You need to focus on certain selection techniques for selecting the right features, to focus on the right patterns, and then get the right results out of it. And then as part of this, you have to also think about the regular rhythm of the business, per se, for a data engineer or data analyst. You need to do data audits regularly, you need to have the [Data Governance](../../Skills/Data%20Science/Data%20Governance.md). AI is only as good as the data that is fed into it, so we'll end up with a lot of good quality data sometimes, but still not usable, and that's where we need to think about it more from a process angle,
>
> **[1:49](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/bringing-structure-to-agentive-ai-data?u=76281980&t=109)** the process that is important in that stage. So it could be around the [Data Validation](../../Skills/Software%20Development/Data%20Validation.md), it could be around access controls, the CFO saying, "I have [Financial Data](../../Skills/Software%20Development/Financial%20Data.md), I want to run an AI app on top of it, but don't share this with someone else." So you have to think about audit trails, you have to think about data encryptions. There are so many tools out there, if I show you the picture today for the data and AI landscape, so many vendors, so many solutions, it just fills up the whole, it's really an eye chart if you look at it. So we have to think about this more from a process-centric approach in that perspective. You have certain human capabilities, you have to keep human in the loop all the while as you're working through this AI build out, but you have to think about how the data gets there. Is the data in motion? Is the data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md)? Is it secure? Is it available? All of those aspects come into play here, and also training people on that, because employees in the organization need to know how to use the data for AI, and sometimes, when you make it too generic, people are dissatisfied, because it doesn't cater to their needs. You need the people, process, and tooling to ensure [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and ensure that the data is usable by the AI agents that you're building out. And there are many, many tools out there that you can go through and think about. You have to think about also the ecosystem of tool vendors who are available to you
>
> **[3:24](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/bringing-structure-to-agentive-ai-data?u=76281980&t=204)** and which you can apply in your specific industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1), [Financial Data](../../Skills/Software%20Development/Financial%20Data.md) (1)
> **Analogies:** picture (2)
> **Speakers:** - how (1), - if (1)
> **CLI Commands:** make (1)
> **Env Vars:** cfo (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you need to have (1)

#### [Mitigating risks when building agentive AI](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/mitigating-risks-when-building-agentive-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/mitigating-risks-when-building-agentive-ai?u=76281980&t=0)** - When you build software, you often talk about the principle of least privilege, right? When you have a bunch of users, you try to ensure that any person who comes into the system has only the bare minimum of privileges that they need to do their task so that they can't go and do something they're not supposed to do, or in some way influence the data that's there. You know, a classic example would be someone is able to input data into a database, but they can't change existing data there, and they definitely can't remove data that's there. But when we build [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) that are supposed to act on our behalf, those agents need to have a broad range of capabilities, but then we need to think about under what circumstances are these capabilities available to the agent to use so that the agent doesn't, I guess, go rogue and do strange things to the data that it wasn't supposed to. The way we think about [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) is centered around we're governing people and their interactions with data, but when we have AI, we need to rethink data governance to consider what the AI can do with the data.
>
> **[1:12](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/mitigating-risks-when-building-agentive-ai?u=76281980&t=72)** - When we talk about governance with AI, [AI Governance](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Governance.md), it includes data governance, obviously, and we have to think of all the mitigation layers of where you can control, what can you control in the realm of things. So you have data, but you have models, and now you have applications sitting on top of these, and you have your environment too from where the data is flowing in on a regular basis. So think about the model itself having some amount of control and governance. And beyond that, you build a safety system and layer, that requires governance too, because if you're keeping it, you know, abuse proof or making it, you know, safe, you need to have some kind of rules in place, some guardrails. Then you have the meta prompt itself and the prompt. Now, this is the interesting part, right? What has changed now is you are speaking into this interface, you're typing into the interface, and that prompt itself is data that's going in and out of this agentic AI. So now for building applications, we need to also think about the safety, security, the governance of the prompt itself. And there's a whole new category now called jailbreaking of AI, agentic AI. Jailbreaking agentic AI would mean that people are using prompts, just English or any language prompts, to go insert instructions into the AI application to completely screw it up or hack into it, right? So think about it that way. So we need to make it governable from that perspective too. And then obviously the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). So user experience at large
>
> **[2:46](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/mitigating-risks-when-building-agentive-ai?u=76281980&t=166)** is what we are dealing with day to day for any AI app. The more conversational it is, the more we need to think about the user experience and the governance around that to make sure that it's a safe environment, a usable environment, a reliable environment. So both the application layer, the platform layer, and, of course, the user layers have to be all considered for mitigation, risk mitigation, and it can happen anywhere. And so the governance main principle is to reduce the risk, risk of using AI applications to do the wrong things or to end up in abuse of the systems that you have in place today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (3), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (3), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (1), [AI Governance](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Governance.md) (1)
> **CLI Commands:** make (2)
> **Speakers:** - when (2)
> **Prerequisites:** you need to have (1)

#### [Agentive AI and data governance](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-and-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-and-data-governance?u=76281980&t=0)** - The way that we have been doing [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) up until this point has not had AI in mind because AI wasn't the thing that we were doing at this scale. So while we usually have some level of data governance, as in who can gain access to the data, who has the right to delete or add to the data and things like that, how does data governance change when we start thinking about AI, and how do we define data governance in the context of AI?
>
> **[0:31](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-and-data-governance?u=76281980&t=31)** - I'll tell you from a real-life example. When I go to the CFO, right, of the company, they will say, "Talk to the chief data officer." The chief data officer's job includes data governance, right? And for them, AI is kind of a threat to their data governance, their day-to-day data governance. So we have to think about those actors there. And then there's the chief security officer, the information security officer, the CISO role, right? So we had to talk to three people now to understand what's true governance when it comes to AI. Before, it used to be just the CIO or the IT person, and you would talk to them about governance, and it would focus more on the lineage. But now I believe the focus has shifted a bit to hone in into security as a primary topic of governance. Access control, who is accessing what, where, when? Is it your data? Is it somebody else's data? Are you creating new data from the AI tools? Or are you, you know, leveraging existing data? Is this data structured, unstructured? So when you think about AI, the framework is still largely the same, you know, in terms of the activities that you do. In terms of tracking the [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md), identifying the different policies and procedures to control the use of data, those haven't changed as much. But what has changed is the way it impacts the world, the way it impacts users.
>
> **[2:05](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-and-data-governance?u=76281980&t=125)** Now, if you want to build an agent AI, shouldn't you put some controls and governance in place so that your AI application is sitting on top of your tenant with your data in full control and completely governed? So we have to think of those aspects. And security is at the core of it. Governance is basically an enabler of trust. Think about it that way, right? If you don't have the governance in place, you do not have accurate data available. It's not reliable. There's integrity issues. Somebody comes in and hacks into the data. Where is the trust? There is no trust left anymore. And that to recover from a trust situation, it's a longer process, longer journey for us. So it's always better to have the right frameworks and processes in place to ensure the safety and the security and the responsible use of, you know, data for AI applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (7), [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) (1)
> **Env Vars:** cfo (1), ciso (1), cio (1)
> **Speakers:** - the (1), - i (1)
> **UI Navigation:** go to (1)

#### [Responsible AI and data](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/responsible-ai-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/responsible-ai-and-data?u=76281980&t=0)** - A company is starting up from scratch and they are going to build AI into their processes. How in your mind would you build out their [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and their [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), so that they are ready for both what we have for AI now and where we're going next with it?
>
> **[0:20](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/responsible-ai-and-data?u=76281980&t=20)** - The building blocks for applying any sort of governance here starts with the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) principles. And those are all surrounded around transparency, [Accountability](../../Skills/Data%20Science/Accountability.md), inclusiveness, [Privacy](../../Skills/Data%20Science/Privacy.md) and security, reliability and safety, and fairness. Fairness is the most important thing that when you build an application, even without AI, you would still have to consider fair use of that application. And that applies here today too. But with [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), we are to be extra careful. So the governance, the policy, procedures, we are to keep in mind that we're training a machine to respond and predict the outcome. And it could be fed the wrong information in the sense creating an unfair or biased output out of this. I would say we start with the basics of transparency and make sure all the components are there, so that you can explain the AI model that's being used. You can explain the results, you can demystify the mechanisms behind it, and that's one way of using this governance framework and [Building Trust](../../Skills/Data%20Science/Building%20Trust.md). Second is user education. A lot of people still do not understand the intricacies of how these mathematical models are working. How is the [Probability](../../Skills/Data%20Science/Probability.md) here of getting the right result? How relevant is the outcome? So the right metrics, right? So you have to educate them about how AI works and also what are the key metrics that they should be looking out for.
>
> **[1:51](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/responsible-ai-and-data?u=76281980&t=111)** Feedback mechanism is another. When we build this governance platform or framework, you have to think about the feedback mechanism you can put in place, so that you get the likes and dislikes. You get the, uh-oh, this doesn't sound right or doesn't feel right. It needs to be tuned or changed. So those feedback mechanisms had to be put in place. Some of them are using some great techniques with reinforced learning and using AI itself on AI to improve. But you know, nothing beats the human in the loop, right? Human input, which can really tune it and make it more relevant and better for us. And then the measures is control measures that you need to put in place to ensure safety, reliability, ethical alignment of your specific application, all of that. And then obviously some way to keep this into a feedback loop or control loop of continuous improvement, 'cause this is not a one time, one job activity. It's once you build an app, you have to be responsible for that app, be accountable for that (indistinct) AI and continue to feed it the right data, continue to monitor it, and make sure it's in the right shape. So we have gone a little bit beyond that at [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) here. Personally, I want to mention content moderation is a big activity for us. We started long ago with the principles. Content moderation, content safety are critical to keep in mind, and therefore, in our particular scenario, we released content safety monitoring tools
>
> **[3:26](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/responsible-ai-and-data?u=76281980&t=206)** and policy tools. So the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI content safety tool allows you to look at harmful content, identify all the categories of hate and sexual activity, self-harm, violence, all of that, categorize it and make sure the data you're using, the training that you're giving and the output from it, the input, output, all of the data is being safely delivered without any harm to the user. If I stuck to the regular data governance framework, it would not focus on content safety, it wouldn't focus on the actual data inside the bucket there, right? But with AI, we have to be extra careful and make sure it's delivering information with the right kind of metrics in place. That's the best way to build trust. That's the best way to build an application that people rely on and use on a day-to-day basis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** make (5)
> **Warnings:** keep in mind (2)
> **Speakers:** - a (1), - the (1)
> **Definitions:** is a  (1)

#### [When to build agentive AI systems](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/when-to-build-agentive-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/when-to-build-agentive-ai-systems?u=76281980&t=0)** - Organizations want to build [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md). And from this comes two questions. First, how do you identify where it makes sense to build an AI agent? And second, how do you evaluate the quality and efficiency and return on investment on existing agents, whether they actually are useful?
>
> **[0:20](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/when-to-build-agentive-ai-systems?u=76281980&t=20)** - A simple way of thinking about it is outcome-driven, what's the business outcome? How is it aligning to your strategic pillars of your organization, where you want to drive growth, where you want to drive efficiency, where do you want to save on money or effort that's being put in, which is overly due? So AI is very useful in all of these scenarios that you're generating new revenue. And you know, that's where the ROI is expected in most of the cases. Or you're improving the current process by putting some smarts and increasing the efficiency, which is what the CIO and COO want almost all the time. And then you're thinking about the aspects of how you can do it in a smart way, logical way, so that the cost is not too high, but the benefit outweighs, right, the cost of building this out. So all of these things are considerations we are to keep in mind when you're generating or you're creating AI agents, what is the worth of that AI agent and how do you articulate that? So of course, you can use some of the standard consulting practices and build a two by two matrix business impact versus effort and put it all on a map and say, "Oh, this makes sense, this brings higher value to us." But it's also a question of, you know, in [Design Thinking](../../Skills/Software%20Development/Design%20Thinking.md), we use the three circles, Desirability, Feasibility, and Viability. So yes, you desire this, you want your sales to grow, you want more marketing initiatives to succeed. You want more, you know, customers
>
> **[1:55](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/when-to-build-agentive-ai-systems?u=76281980&t=115)** to be happy and successful. So when you put that desirability, the technical feasibility comes into play, and you can put it in this framework to say, "Yes, is it technically feasible, yes, but how much will it cost for me to deploy that?" And that's the viability angle that comes into play. the third circle in the Venn Diagram. You need to assess the business impact and value. You need to look at the cost of doing this, creating this, and the ROI that you get in return, the value that is generating for you. Is it strategically aligned? Is it making your company more efficient? Is it making your company more customer experience driven, more famous for building new, innovative experiences? All of that is possible with AI and the way we look at it. So we can look at it from a magnifying lens with a broader binocular, you know, just look at it and say, "Holistically, how does this look from a, you know, will it generate the ROI?" And then you look at it narrowly with a small little magnifying glass, look at it narrowly, and you'll see that you're looking at the relevance, you're looking at the, you know, the profit it's going to generate in your business. You're probably looking at the quality of the experience and whether it's kind of inspiring the whole company to come together and achieve something greater. As a framework, think about experience, think about cost, think about ROI, think about the strategic alignment and how it helps us move forward. Now, if you think beyond that,
>
> **[3:28](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/when-to-build-agentive-ai-systems?u=76281980&t=208)** "How does it bring value to customer service," right? As a group, as an agent, does it improve customer satisfaction score? So you can have metrics at a lower level, capture those metrics and evaluate how it helps you. Now, if it is [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) and it's in Teams or [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md), any product like that, it's your day-to-Day business. Every day you're using these tools and is it saving you time? Is it saving you effort or money? And the top use cases are generally customer-facing. You know why? Because they align very easily with the top line growth that you're expecting in the company. The bottom line use cases are more about efficiency, about saving time and money. And what it does is helps the company be more efficient and lean in their approach, [agile](../../Skills/DevOps/Agile%20Development.md) in their approach. So automating processes, you can use AI over there, you can use it for increasing productivity by generating new proposals. All of those are very popular applications today. And I think if you have the data, clean and good quality data, and you use it in the right way with AI, it really accelerates the value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (2), [Design Thinking](../../Skills/Software%20Development/Design%20Thinking.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1), [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Env Vars:** roi (4), cio (1), coo (1)
> **Speakers:** - organizations (1), - a (1)
> **Warnings:** keep in mind (1)

#### [How to build trust in AI agents](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/how-to-build-trust-in-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/how-to-build-trust-in-ai-agents?u=76281980&t=0)** - So here we get to the crux of the matter for pretty much everyone, right, from enterprise, for anyone who's looking at this right now. You have a ton of legacy data. You have a plane in the air moving forward at full speed. You have customers and you have staff, and you have all these things happening. How do you put this together? How do you get the [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) and restructure your data and prepare for not only agents today, but in the future? Where do you even start?
>
> **[0:34](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/how-to-build-trust-in-ai-agents?u=76281980&t=34)** - I would say always start with the data. You know, I'll tell you why also. In a few situations, experiences that I've had in the past, I've seen companies who are very innovative. They're the best at what they do, right? They're innovative, they're cutting edge, but they've all built apps which are innovative. The data still languishes; the quality of data is not there. So they might build the most amazing [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md), the greatest navigational flow, the most beautiful experiences focusing on your pain points, but what about the data itself? If you don't start with data, you don't have a data-first approach to it, you don't have a data landing zone, you end up with bundles of AI applications. Or think about them as, you know, like small little prototypes which are all working independently but cannot achieve true success for the business at large, right? So you end up doing amazing work, and then having to sit back and rewrite all of that after you have created the right data foundation, the right data layers, the right, you know, one lake or lake house approach, right, that you want to take, to make sure all of your analysts are working on the right data to make the right predictions. At the same time, all the transactional systems are feeding it with the right data. At the same time, it's allowing you to write all this Agentic AI or applications on top of it. Think of this as really an airport. Imagine an airport in front of you. and all these Agentic AIs are planes.
>
> **[2:09](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/how-to-build-trust-in-ai-agents?u=76281980&t=129)** Those planes have to take off, but you need a runway to take off. You need the data platform as a foundation, as a data landing zone on which you can land these applications. Now, think about air traffic control. You think it's some sort of an AI control tower, because all these planes are taking off; sales wants to do their own thing, HR wants to do their thing, marketing wants to do their amazing stuff, and everybody wants to build AI applications. It's really crazy right now. You know, like, people are saying, "I have 200 use cases. Earlier we were struggling to get two use cases. Now we have 200 or more use cases to do." And they all want to do it at the same time. So, you know, to answer your question in a more complete fashion, I would say think about your cloud maturity, think of your data maturity, and start with the basic layer of a data foundation or a data landing zone in which you make sure all your data which you need to be successful is landing it. Maybe you don't need all of it at the same time, but you need governance at the right time, right from the beginning, on that data. And then on top of that, you're building this AI landing zone on which all of your AI planes will land. As an IT leader, if I'm the chief operating officer, I want obviously better control on my operations and efficiency in activity. But as a chief information officer, I need to control the use of data in a safe, secure manner. As a chief data officer, I need to enable the use of that data.
>
> **[3:42](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/how-to-build-trust-in-ai-agents?u=76281980&t=222)** And as a chief financial officer, I need to budget the things in the right way. And so think about it, right, the end business user is expecting something yesterday, not today. They wanted it yesterday. They want these Agentic AIs to run. But you need to lay the groundwork, do all of this, make sure it's controllable, make sure you have the guardrails, make sure you have the safety tools, make sure you have the governance portal for [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) and [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) and tracking of the various assets you have within your data estate. So all of those are important things to keep in mind and use and move along. If you are an existing company with existing applications and data, then you have to take a slightly different route of carving out and transforming parts of your business and going along. But if you are a new company, a greenfield opportunity per se, then you can start with the scratch. You can start at the bottom layer and build it out as you go, and then start moving in your data in the right order of the priority that's needed. And all of that requires some amount of blueprinting, roadmapping, and planning. But essentially it's critical because it's going to impact those AI applications you're building out. They won't be unstructured, you know, you may have to deal with [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md), and that's growing like crazy. So you have to think about the whole aspect and embracing the change as it comes along. It's not a simple exercise. And I can guarantee you that, you know, humans are resistant to change, but change is the most constant thing in our lives. It's going to change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) (1), [Data Lineage](../../Skills/Data%20Science/Data%20Lineage.md) (1), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1)
> **CLI Commands:** make (7)
> **Prerequisites:** make sure you have (3)
> **Speakers:** - so (1), - i (1)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)

#### [The data lifecycle of agentive AI](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980&t=0)** - So let's talk about the lifecycle here, the data lifecycle. Because if you're going to do this, we need to figure out how to make it flow. - Yeah.
>
> **[0:10](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980&t=10)** - Get the data through the entire machine and manage it all. What does that look like at a practical level?
>
> **[0:17](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980&t=17)** - Yes, practically speaking, every company today is a data company. Think about it, data is the fuel, which empowers everybody to work it. It's the fuel for AI too. And so the data engineers who exist in your organization today already know where the data is. Maybe it's not all cataloged, maybe it's not governed data. The first step would be to do a catalog or inventory of all these assets, wherever they are. They could be on Amazon, S3, they could be in [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), it could be in [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Dataverse, or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Wherever it is, that catalog of assets need to be pulled together so that you can do a [Data Assessment](../../Skills/Data%20Science/Data%20Assessment.md) and create that data landing zone that I was talking about. So think about unifying those, having a strategy for bringing them together, building the shortcuts or mirrored connections or make it, you know, into one lake that you can use effectively for all of your activity. Now, there are two types of activities, typically, three actually, if you think about it. You have the citizen user, you know, the super user who just says, I don't care about all of the backend processes. All I need is to make a decision. Give me the right chart and the right metrics at the right point, and I'll make the decision. So this super user is more like a [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md), or you know, a visual user who's looking at a chart and making a decision. So they are one class of users. But then the second class are people
>
> **[1:50](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980&t=110)** who are using data warehouses because they're doing analytics on past data, historical data. So the one lake also includes a piece which is related to a warehouse. That's the lake house aspect of it, right? The warehouse that you're going to use for all of your analytics. So you're to build that portion out because you have loads and loads of structured and [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) available today. Maybe start with structured first because it's the easier piece. But with fabric for per se, you can have a hybrid data [Mesh](../../Skills/Software%20Development/Mesh.md) architecture and bring unstructured data also in there. When I say unstructured, it means PDF documents and all the other kind of, you know, unstructured pictures, images, videos, audio. Everything can be pulled in into this one approach that you have. So now you have the data, you have a warehouse also. The next thing to keep in mind is you can have a bunch of processes to maintain the pipeline of data flowing in, make sure it's fresh, it's available. But the next thing to consider is what is the [Real-Time](../../Skills/Database%20Management/Real-Time.md) component of this? What do you need in real-time to make the right decisions? Maybe you have an area to focus on, which you need to improve upon. So you've already, you have the warehouse, you've transformed it, you have enriched it. It's available to people in your organization. Even the data scientists can use it. But then there's this real-time aspect of data coming in every second, every minute into the organization. Depends on the type of business, obviously, but then you have to make that data available. That data has to be observable, it has to be governed too.
>
> **[3:26](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/the-data-lifecycle-of-agentive-ai?u=76281980&t=206)** It has to be safe and secure, and all of it comes together. And now truly, you have a holistic and comprehensive view on which you can put semantic layers and build a [business intelligence](../../Skills/Data%20Science/Business%20Intelligence%20(BI).md) layer that you need to make the decisions. Now, some portions of this data scientists and AI engineers will use as raw data, but high quality data, good quality data to train their models. Some of it'll be used for pre-trained models where you are grounding it in data and saying, I need the most recent sales numbers from this X, Y, Z customer to project the growth of my company and organization. So that needs to be grounded in current data, real data that's available. And some of it'll be real-time data where you're to, you're sitting in the store or you're on the point of sale terminal or a mobile application and you're doing a transaction and you need to make a recommendation or a prediction on the offer that needs to be made to the customer or consumer so that they can make the right decision. So all these types of users are there, and that's how everything comes together in the form of a data foundation on which you put your [AI Orchestration](../../Skills/Software%20Development/AI%20Orchestration.md), on which you put your [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) or applications, on which you have the user experiences all crafted in a beautiful way so that the end user or the super user or the data scientists or AI engineer can make the right decisions and have a good construct in place to get to the eventual result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (4), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **CLI Commands:** make (11)
> **Speakers:** - so (1), - get (1), - yes (1)
> **Env Vars:** pdf (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Using AI as a data opportunity](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/using-ai-as-a-data-opportunity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/using-ai-as-a-data-opportunity?u=76281980&t=0)** - Whenever I talk to people about AI, I encounter people who feel like AI is a threat for a myriad of reasons. But one of the reasons is the task of starting work on an AI project like this is daunting because of the data problem. And I tend to look at it from the other direction, that this is our opportunity to rethink how we handle data to say, "You have all this great data in your company, but it's a mess because it's always been designed to work for the people who are working with it. This is your opportunity to consolidate the data, get it all into one place, structure in a way that it makes it more accessible to the people who need it and more manageable for the people who need to manage it." And then as a bonus, you can start building AI on top of it. But even if you didn't build AI on top of it, you would still have the benefit of having properly structured data and properly governed data now.
>
> **[1:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/using-ai-as-a-data-opportunity?u=76281980&t=60)** - I see the world heading towards narrow AI, actually not general purpose AI and what we call as AGI. Artificial general intelligence is way, way far away right now, like I'm thinking more about I need to survive. I need to succeed, my company needs to succeed, my community needs to succeed. My city or government needs to succeed. So I need to think about doing what is possible in my realm, but with [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) in mind. And to that extent, my advice to people in this area would be to start with a smaller scope, a manageable scope with a good vision, a good target architecture in mind, a blueprint. You start with a small area, connect an AI application and ground it to your own enterprise data. It could be a simple [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), it could be Cosmos DB, it could be OneLake, whatever it is, right? Wherever you're storing your data. [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md), for example, right? A lot of people want to use SharePoint and Teams. So the data could be in all of those places, but we build it in a simple and easy way. Start small, build an application within the controllable realm. Verify, validate that it works for you, train more people in it. Check the efficacy of the model itself and the outcome, the output. Build the right governance. Now you have a good play model, per se, right? Like a MVP to get started with. Now you can expand the scope, but keep in mind
>
> **[2:33](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/using-ai-as-a-data-opportunity?u=76281980&t=153)** that security, safety, responsible AI never goes away. All the time, for every scope of item, you need to keep thinking about the [Data Security](../../Skills/Data%20Science/Data%20Security.md), as well as the user security when they're using that AI application on top of your data. So maybe start with internal applications first because it's more controllable and usable. Then external applications, which are customer facing, and then to the whole world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1)
> **Env Vars:** agi (1), sql (1), mvp (1)
> **Speakers:** - whenever (1), - i (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)


### 2. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Agentive AI as an opportunity space](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-as-an-opportunity-space?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-as-an-opportunity-space?u=76281980&t=0)** - What makes you excited about the future with AI? AI is changing the way we do things. For ages and ages, if you look at the Darwin's theory and you look at the human evolution, humans have been the strongest species, surviving species because of one reason, we've always invented or created new tools. These tools help us survive, from the caveman days of using the hammer and the chisel, to modern days of using data tools for wrangling data and empowering your business users with the right [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) tools. We have been on a path of using data to become even smarter and better. AI is just accelerating everything for us. All the Agentic AI that we are talking about, the reason [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and any other application is much more popular than any other AI created before is because it's more conversational and usable by humans. And so what excites me about the future is the fact that we don't have to wait years and years to get to the next level of research in AI or data. We don't need to wait for that data. We can use it today, we can use it right now. We can prototype much faster, we can build new applications. We can actually use data which is relevant to the context of our users. We are actually converting all of the people who use these tools, humans, into miracle workers. This is what we are looking for all this time as humans.
>
> **[1:37](https://www.linkedin.com/learning/agentic-ai-building-data-first-ai-agents/agentive-ai-as-an-opportunity-space?u=76281980&t=97)** We have been looking to be the best in the species, surviving and doing the best. We can do it now with all of the AI tools that we have available. There's a really inspiring moment right now because every time we do a small change, it has a ripple effect in AI for good, as you've heard, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) is big on AI for good. We are using it for [Sustainability](../../Skills/Software%20Development/Sustainability.md), we are using it for Earth, we are using it for [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md), using it for every research activity we can, which is helping us improve everybody's lives and experiences. And that fulfilled feeling is amazing. You know, when you can build an Agentic AI on the right data set and serve an audience, and they get the result they're expecting, and this is what drives everybody's happiness (indistinct) or factor. So I feel really excited about this topic and I feel that this is what we have been waiting for. Now we just need to keep building and applying and validating what we are building out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Sustainability](../../Skills/Software%20Development/Sustainability.md) (1), [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md) (1)
> **Speakers:** - what (1)


## Instructor

- [Morten Rand-Hendriksen](../../Instructors/Web%20Development/Morten%20Rand-Hendriksen.md)

## Skills Covered

- AI Productivity
- AI Agents
- Artificial Intelligence (AI)

## Path Context

### In [Understanding Generative AI for Tech Leaders](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Understanding%20Generative%20AI%20for%20Tech%20Leaders.md)
← [Introduction to Multimodal Prompting for Generative AI](Introduction%20to%20Multimodal%20Prompting%20for%20Generative%20AI.md) | **22 of 22**

## Appears In

- [Understanding Generative AI for Tech Leaders](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Understanding%20Generative%20AI%20for%20Tech%20Leaders.md)

## Related Courses

_Courses sharing skills:_

- [Build Ai Agents And Automate Workflows With N8n](Build%20Ai%20Agents%20And%20Automate%20Workflows%20With%20N8n.md) — AI Agents, Artificial Intelligence (AI), AI Productivity
- [Copilot Agents- Build Your Own AI Assistant in Copilot and Teams (No Code Required) (February 2025)](Copilot%20Agents-%20Build%20Your%20Own%20AI%20Assistant%20in%20Copilot%20and%20Teams%20(No%20Code%20Required)%20(February%202025).md) — AI Agents, Artificial Intelligence (AI), AI Productivity
- [AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation](AI%20Agents%20Made%20Simple-%20Your%20Zero-to-Hero%20Guide%20to%20Prompting%20for%20Work%20Automation.md) — AI Agents, Artificial Intelligence (AI)
- [Top Ten AI Prompts](Top%20Ten%20AI%20Prompts.md) — Artificial Intelligence (AI), AI Productivity
- [Governing Agentic Ai Systems By All Tech Is Human](Governing%20Agentic%20Ai%20Systems%20By%20All%20Tech%20Is%20Human.md) — AI Agents, Artificial Intelligence (AI)

---

[↑ Back to top](#)