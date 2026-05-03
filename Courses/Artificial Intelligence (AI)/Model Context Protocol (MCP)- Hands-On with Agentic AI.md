---
type: course
cssclasses:
  - lle-course
slug: model-context-protocol-mcp-hands-on-with-agentic-ai
url: "https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai"
duration_minutes: 55
duration: 55m
updated: 3/24/2025
learners: 8237
skills:
  - AI Agents
  - Artificial Intelligence (AI)
  - Anthropic Claude
  - Application Programming Interfaces (API)
exercise_files: true
github: "https://github.com/LinkedInLearning/model-context-protocol-mcp-hands-on-with-agentic-ai-2034200"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEo2bybtTuBiQ/learning-public-crop_675_1200/B4DZW1p2_tG4Ac-/0/1742509404424?e=2147483647&amp;v=beta&amp;t=dltG64iWzxT4jhuX8znCpFVFa-4vJ0PlH6acDiPV93s"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building AI Agents- Advanced Techniques for Developers]]'
prev_courses:
  - '[[Build AI Agents and Chatbots with LangGraph]]'
next_courses:
  - '[[Hands-On AI- Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)]]'
path_nav: '[{"path":"Building AI Agents- Advanced Techniques for Developers","position":3,"total":4,"prev":"Build AI Agents and Chatbots with LangGraph","next":"Hands-On AI- Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/ai-agents
  - skill/artificial-intelligence-ai
  - skill/anthropic-claude
  - skill/application-programming-interfaces-api
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Model%20Context%20Protocol%20(MCP)-%20Hands-On%20with%20Agentic%20AI.md)

![Model Context Protocol (MCP): Hands-On with Agentic AI](https://media.licdn.com/dms/image/v2/D4D0DAQEo2bybtTuBiQ/learning-public-crop_675_1200/B4DZW1p2_tG4Ac-/0/1742509404424?e=2147483647&amp;v=beta&amp;t=dltG64iWzxT4jhuX8znCpFVFa-4vJ0PlH6acDiPV93s)

# Model Context Protocol (MCP): Hands-On with Agentic AI

> The Model Context Protocol (MCP) allows developers to add agent behavior to LLMs by providing a universal protocol providing context to language models so they can interface with data and applications in a consistent way. MCP servers expose resources (data), tools (actions), and prompts (instructions) for the LLM and the user to use in performing more complex operations. In this course you’ll expl

> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai) | 55m | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [MCP: Connecting AI agents to data, apps, and more](#mcp-connecting-ai-agents-to-data-apps-and-more)
- [**1. MCP Explained**](#1-mcp-explained) (6 videos)
  - [Using MCP servers in Claude Desktop](#using-mcp-servers-in-claude-desktop)
  - [Model Context Protocol (MCP) explained](#model-context-protocol-mcp-explained)
  - [Exploring avaialble MCP servers and clients](#exploring-avaialble-mcp-servers-and-clients)
  - [Limiting the blast radius of AI agents](#limiting-the-blast-radius-of-ai-agents)
  - [Leveraging the power of MCP servers](#leveraging-the-power-of-mcp-servers)
  - [Using MCP servers in Cursor](#using-mcp-servers-in-cursor)
- [**2. Building MCP Servers**](#2-building-mcp-servers) (3 videos)
  - [Building your own MCP servers](#building-your-own-mcp-servers)
  - [Testing with the MCP inspector](#testing-with-the-mcp-inspector)
  - [Troubleshooting MCP servers](#troubleshooting-mcp-servers)
- [**3. Conclusion**](#3-conclusion) (1 videos)
  - [Building AI agents with MCP](#building-ai-agents-with-mcp)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [MCP: Connecting AI agents to data, apps, and more](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=0)** - Okay, let's talk about MCP, Model Context Protocol. This simple protocol brings the utility of a Natural Language Interface to any data source and software that has an MCP server built for it. An MCP is open source and client diagnostic, meaning, anyone can build an MCP server, and any software that already leverages LLMs can also hook into MCPs. But forget the technical part for a moment. When you use [[ChatGPT]] or Claude or another AI chat app, I bet you've wondered if you could get it to retrieve data from a source and then do something with it or maybe run software. That is what MCP allows you to do. It's a protocol that provides context for language models to interact with resources, run tools, and do whatever else you can think of. So come hang out with me for a bit and we'll explore how to use MCPs in Claude and [[Cursor]], and then I'll show you how to build and run your own MCP servers using [[Python (Programming Language)|Python]] and TypeScript. The Model Context Protocol bridges the gap between AI tools and the tools we use every day, and I'm here to show you how to use it right. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** mcp (6)
> **CLI Commands:** python (1)
> **Speakers:** - okay (1)


### 1. MCP Explained

[↑ Back to Table of Contents](#table-of-contents)

#### [Using MCP servers in Claude Desktop](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=0)** - I think the best way to understand the model context protocol is to see it in action. So I'll start this course by showing you some MCPs running in Claude Desktop on my computer. Then when you've seen what's possible, jump to the next article, and you'll learn how to install and use MCPs in Claude Desktop on your computer. And if you're watching this and you're not a coder, don't get deterred by the developer-centric language I'm using and the developer-centric approach that currently exists around this technology. Using MCPs does not require you to be a coder. It's just, as I'm recording this, this technology is less than six months old, and it's been developer-focused so far so there aren't good interfaces for them yet. But I expect as MCPs get more traction, we'll also get better user interfaces, and they'll be more tightly integrated in tools like Claude Desktop. So the code portion is probably a short-term blocker. But enough talk, let me show you some MCPs running in Claude Desktop so you understand what this is all about. And for that, I need to jump over to my recording booth 'cause I need my computer. To use MCPs in Claude, you need to install Claude Desktop on your computer. They're currently not supported in the Claude web app, and that makes sense because many of your MCP servers will exist on your computer and interact with files and applications on your computer. I've already equipped my Claude Desktop with several MCPs. To see a list of them, I can click on this button here, Attach from MCP. That opens a model. From here, I can click Installed MCP Servers and get a list of the available servers. I can also click Choose an integration and choose a specific tool or resource I want to use. And if I want more information about the available tools,
>
> **[1:33](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=93)** I can click on the tools icon here. This pops up, another model window with a full list of all the tools available and descriptions of what all those tools do. Now, seeing this list, you're probably wondering, how am I supposed to remember all of these tools and what they do? And that's part of the magic of using MCPs. You don't need to remember what tools are available or even know which tools are available. The language model will surface the appropriate tools when available. Let me show you three quick examples. First, I'll ask Claude to generate a haiku for me. Now that I have this haiku, I want to know how many characters are in the haiku, both with and without spaces, and how many words. Now, language models are famously bad at this type of counting task, so I've created an MCP that does that work for the language model. When I ask, "count the characters, with and without spaces, and also give me the total [[Microsoft Word|word]] count," Claude recognizes there's an MCP server called Text Assist that has a tool called count_total_characters, and it asks me if I want to run it. And then it also says, "Malicious MCP servers or conversation content could potentially trick Claude into attempting harmful actions through your installed tools. Review each action carefully before approving." So here, it's my job as the operator of Claude to look at what's going on. And what I'm seeing is the tool input here is just the text, so I'm going to allow this for this chat. Now Claude starts using the tool
>
> **[3:07](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=187)** and immediately asks to use another tool, count_characters_without_spaces. I'll allow it again. And finally, it asks to use count_words. So I'll allow a third time. What happens behind the scenes now is Claude takes whatever tools are packaged in the MCP server, spins it up inside the Claude environment, runs the software, and then captures the response, and in return, I get total characters, including spaces, characters without spaces, and a total word count. And I can open each of these tabs and see what Claude did with the tools. This shows you MCP's tools operating within the context of Claude. But that's not the only thing they can do. Our family is going on a road trip tomorrow, and we need to know the weather forecast so we can pack the appropriate clothes. Now, language models have no access to the current weather or weather forecasts, so I've created an MCP that pulls Open-Meteo for that data and later on in the course, you'll build that same MCP. Let's see if I can trigger it. "My family's going on a two-day roadtrip to Squamish tomorrow. What clothes should we bring to fit with the weather?" Claude identifies the weather MCP and the get_forecast tool. Then recognizes the get_current_weather tool. And when I allow these tools, the MCP server makes a call to the API, retrieves information from the API, sends that information back into Claude, and Claude can then process information in accordance with my prompt. In response, I get a detailed breakdown of what the weather's going to be like
>
> **[4:40](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=280)** and what type of clothes it recommends we bring. And from the looks of it, we're going to hit a lot of rain in cold weather, so we're bringing all our winter rain gear. The weather example is advanced, but let me show you something even more complex. [[GitHub]] models provides many different models for experimenting. Now let's say I want to compare several different models. I could do that by building my own custom software, but that would be labor-intensive and tedious. Instead, I've created an MCP and authenticated it with my GitHub personal token, and that MCP can give me a list of all the available models and then run completions on any of the models to my specifications. When I ask what models are currently available from GitHub models, Claude recognizes GitHub Models Comparison as an MCP and the tool list_available_models. When I allow that tool, it makes a call to GitHub models and gets a complete list of all available models. And when I give it the prompt, "compare [[GPT-4|GPT-4o]]-mini, Phi-3-mini, and Mistral Small using the following prompt: how many n's in the word bananas?" It surfaces compare_models. The compare_models tool in the MCP now makes three separate calls to GitHub models to get the inference of the same prompt for those three different models. And here are the results along with an analysis. And as you can see, GPT-4o-mini and Phi-3-mini gave the right answer, two n's, while Mistral-small gave the wrong answer, three n's. Now that you've seen what's possible with MCPs in Claude desktop, jump to the next article,
>
> **[6:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=373)** follow the instructions, and test these and other MCPs on your own computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Microsoft Word|Word]] (3)
> **Env Vars:** mcp (16), api (2), gpt (2)
> **Code Identifiers:** compare_models (2), count_total_characters (1), count_characters_without_spaces (1), count_words (1), get_forecast (1)
> **Tools:** github (6)
> **UI Navigation:** click on (2)
> **Prerequisites:** install (2)
> **Speakers:** - i (1)

#### [Model Context Protocol (MCP) explained](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=0)** - Now that you've seen some MCP servers in action, it's time to talk about what exactly this Model Context Protocol is because while this name is a great technical description of what's going on, it is not easily understandable. Fortunately, there's an analogy that we're all familiar with that works really well here, USB-C. this universal connector makes it possible to connect a memory stick, other devices via USB, even memory cards directly to any device that supports USB-C because USB-C is a standardized protocol for communication. And if you're old enough to remember what it was like before we had USB-C and even before we had USB, you know how much easier things are now that we have a universal protocol. MCP serves much the same purpose for language models, a protocol that provides the necessary context for models to interact with other services, and those resources can be data and applications on your computer or on the internet. To fully understand MCP, we need to establish some basic terminology. An MCP host is any application that wants to access data through an MCP. The hosts you'll see in this course are Claude Desktop and [[Cursor]], but they're not the only ones. An MCP client is the extension to your application that maintains the protocol connection between the application and the MCP server. Finally, an MCP server, the thing people refer to as simply an MCP, is a package of programs that expose some resource either to retrieve data or to do something with that data that the MCP client can interact with.
>
> **[1:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=94)** Oh, and some important broader context. Right now as I'm recording this, when I refer to models, I'm referring to Anthropic's Claude models because MCP is a standard introduced by Anthropic to work with their Claude models. Now for the next and maybe more important question, what exactly can MCPs do? In short, they have three main features, resources providing direct access to specific data, prompts providing the language model with customized prompt to interact with that data, and tools performing actions on or with the data. Now, there are two more capabilities in the MCP specification that have yet to be implemented anywhere. They are sampling, which allows the MCP server to request completions from the language model, and roots, which define the boundaries inside which the MCP server can operate. These two last ones are key to the promise of [[AI Agents]] that truly act independently, but as we'll see later in the course, this acting independently part also opens endless threat surfaces, which is why it's not implemented yet. And that brings us to the final part. What can you build, and what can you use? The simple answer is you can build as many MCP servers as you want and customize them to fit whatever needs you have. That means you can build your own custom MCP servers that run just on your computer. You can publish MCP servers other people can use, and you can build custom MCP servers for specific services. So for example, a company can build an MCP server that only exposes the parts of their service they want LLMs to be able to interact with, and then customers can use those MCP servers directly. But here's the thing,
>
> **[3:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=185)** this entire concept is so new that we still haven't figured out what is possible. And every time someone tries to build an MCP, they discover new things that MCPs can do. So for me to sit here and say, "These are the things it can do, and these are the things that can't," simply wouldn't make any sense because I don't know, and neither does anyone else. This is truly unexplored possibility space, and you get to explore it along with everyone else. So let's start exploring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **Env Vars:** mcp (21), usb (6)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Exploring avaialble MCP servers and clients](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=0)** - [Instructor] Now that you know how to install and use MCP servers, you probably want to know where we can find more of them. Now, this space is rapidly evolving and so are the features, so chances are what I'm going to show you here is only the tip of the iceberg, as they say. I recommend you start by exploring the official example servers provided by Anthropic under [modelcontextprotocol.io](https://modelcontextprotocol.io). You find them in the sidebar under Get Started, Example Servers, and here's a long list of servers you can install and run right away. All of these servers are provided by Anthropic are safe to use and integrate with well-known services like [[GitHub]], Sentry, Brave, [[Slack]], [[Google]] Maps, and so on. If you want to look under the hood of any of these servers, you can go to the model context protocol account on GitHub and go to the servers repository. Here you find all of these servers and more, and they're marked up either in [[Python (Programming Language)|Python]] or in TypeScript, but that's not the only place you'll find MCP servers and clients. There are several websites that are now serving up lists of available MCP servers and clients. This is a popular one called mcp.so. And this is another one, [pulsemcp.com](https://pulsemcp.com). And on both these sites and other similar sites, you find MCP servers and MCP clients. MCP clients are the applications that can take advantage of MCP servers, and this list is also rapidly growing. Now, on the topic of clients, there's one important thing to keep in mind. Not all clients are the same. Specifically, not all clients support the same features. If you go to the official documentation under Get Started and Example Clients,
>
> **[1:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=94)** you get a table showing which clients are available and what features they support. And what you see right away is while all the clients support tools, support for other features, like resources and prompts, are limited to only a few clients, and currently, no clients support sampling or roots. This list is important because as you're building out your own MCPs, you may build an MCP that has both tools and resources, then run it in Claude and find it works fine, but then when you try to run the resources in [[Cursor]], they're not working. The simple reason for that is Cursor does not currently support resources. It only supports tools. So as you start working with your own MCPs, think about which clients are going to be using them and build your tools and resources appropriately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Slack]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** mcp (8)
> **CLI Commands:** find (6), python (1)
> **UI Navigation:** go to (3), in the sidebar (1)
> **Tools:** github (2), slack (1)
> **URLs:** [modelcontextprotocol.io](https://modelcontextprotocol.io) (1), [pulsemcp.com](https://pulsemcp.com) (1)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)

#### [Limiting the blast radius of AI agents](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=0)** - Before we go any further, let's talk about the blast radius of [[AI Agents]] and the risks involved in running and building MCPs. When you give a language model capabilities to do something on your computer, it may do things you didn't intend and may even do things you would never do. And because of how AI agents operate behind the scenes in AI chat apps, it's easy to forget that things are happening on the computer and data is being manipulated in some way that we don't necessarily understand. You saw a direct example of that when I demonstrated how MCPs work inside Claude. Code is running. But even if you're looking at the code, you won't necessarily know what is actually happening on the server. That means, first, if you're intending to use an MCP, you have to trust the people who built it and trust that they have your interest in mind and are upholding their duty of care to you. Second, you need to know what the MCP might do on your computer. Is it just retrieving information or is it manipulating data on your computer in some way? Maybe creating files, changing files, updating files, moving things around, or is it running actual software on your computer without your awareness? And yes, that means the onus of making sure the MCPS you use are actually doing what they say they are is currently on you, which is not great. Which brings us to developing mcps. The promise of MCPS is we can build responsible interfaces to our data that control who has access to what and what the AI can do with that access. But that requires developers being keenly aware of what data they are giving users access to,
>
> **[1:35](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=95)** what the language models are able to do with that data, and where the threat surfaces exist when you are interacting with that data. There's a real risk when building MCP servers of giving the language models too much access or too many capabilities. Because the language models will not only run the software that is on the server, but may also spin up their own software and leverage the server to do things you didn't intend. So as you're building out your own MCP servers, always apply the principle of least privilege. Build a server so it only accesses data it should be able to access and explicitly limits access to anything else. Ensure the tools you build are limited to only doing what you intend and cannot be extended by the LLM itself. And finally, follow proper procedure when handling any user keys or other private information. As I've said before, MCPs are still relatively new, as is the idea of AI agents. And what we're seeing is the threat surfaces and the blast radius for these things can be exponential and almost unlimited if we are not very careful on how we build these tools. So apply [[Responsible AI]] principles anytime you're building MCPs, test them extensively with adversarial prompts and prompt injections. And remember the old adage, never trust the user. Well, now that user can be an LLM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (3), [[Responsible AI]] (1)
> **Env Vars:** mcp (4), mcps (2), llm (2)
> **Speakers:** - before (1)

#### [Leveraging the power of MCP servers](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=0)** - [Instructor] To leverage the power of MCPs in your own work it's useful to think of them as natural language interfaces to automation. Identify tasks you normally perform that can be automated, build MCPs that facilitate that automation and then plug them into an MCP client. In the exercise files, you'll find an example of this in an MCP I built called Project Documenter. This MCP takes the contents in any project folder and summarizes all of that content into a markdown file and then writes a README file for that project. Let me show you how it works in Claud. I have a project open, and as you can see it currently does not have a README file. I'll say, "Document the project" at this path, hit return, now, Claud first identifies file system as a possible tool here but I don't want to use file system so I'll say no. Then it correctly identifies Project Documenter so I'll allow that. If you look over here, it's now created a project.md file which is a complete list of all the code in the project in a single file, and created a README.md file that currently has no content, Claud identifies update-readme, so I'll allow that, and finally it finds assess-readme-quality which reads through the README file to make sure it fits with the project. And just like that, thanks to Claude and the MCP, I now have a fully built out README file for my project, including a breakdown of how the project works, what features exist, how to install it, and how to run it. And now all I have to do is go in and make sure it's correct and make any edits I want, which saves me a ton of time as I'm building out my project.

> [!info]- Semantic Content
>
> **Env Vars:** readme (5), mcp (4)
> **CLI Commands:** make (3), find (1)
> **File Paths:** project.md (1), readme.md (1)
> **Documentation:** the readme (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** install (1)

#### [Using MCP servers in Cursor](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=0)** - [Instructor] In the previous video, I used an MCP server installed in Claude to generate a read me file in a project, and then I demonstrated that read me file in [[Cursor]]. But Cursor is also an MCP client, so in this video, let me show you how to install MCPs in Cursor, both at a project level and at a global level. You can find lots more information about how to use MCPs in Cursor at the official Cursor docs. In particular, you'll find configuration locations for project level MCPs and global MCPs. To start this demo, I'll delete these two files here so that we can generate them again. Then I'll go up to Cursor settings and navigate down to MCP. Right now, there are no MCPs installed either in my project or globally, and because this docs helper MCP will be applicable to all my projects, I'm going to add it at a global level. So I'll click add new global MCP server. This creates a new file under the .cursor folder under my profile called mcp.[[JSON]]. And this is where I place the MCP server's objects, and all of the different MCP servers I want to call in. Once I save the file and go back to settings, you'll see the MCP server appear immediately. Here we have the name of the server, what tools are available, and if I hover over them, it'll tell me what those tools do. There are currently no resources available, and at the bottom here, you see the command used to invoke this server. And just a note for developers, as you're developing your own MCP servers, anytime you make a change to your MCP server, you need to go in here and click refresh to make sure that your changes take effect inside Cursor. All right, let's take the server for a spin. I'll open up the agent panel, add some context,
>
> **[1:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=94)** in this case, the page TSX file, and then say, document this project. And just like in Claude, Cursor recognizes there is an MCP here, and I can run the tool directly from inside the Cursor agent. The project.md file is created. The read me file is created and currently has no content. The agent recognizes it needs to update the read me file, so it has to run a second tool. The read me file is now updated. And finally, it asks to run the assessment tool to make sure that the read me is properly formed. Same MCP, different client, and as you can see, slightly different output because this read me content is generated by the Cursor agent, whereas the previous content was generated by Claude directly. And one more note, this MTP is running inside the context of Cursor, and in Cursor, you can set up custom rules for how the Cursor agent would operate. That means you can build custom rules in Cursor at global level and at project level that tell Cursor how to interact with your MCPs, which gives you a lot of control over how the agent operates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** mcp (12), tsx (1), mtp (1)
> **CLI Commands:** make (3), find (2)
> **File Paths:** mcp.json (1), project.md (1)
> **Cross-References:** previous video (1), go back to (1)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)


### 2. Building MCP Servers

[↑ Back to Table of Contents](#table-of-contents)

#### [Building your own MCP servers](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=0)** - All right, we've talked about MCP servers, we've looked at what they can do. Now it's time to build some. In this chapter, I'm providing you with text articles, providing step-by-step instructions on how to build MCP servers using [[Python (Programming Language)|Python]] and TypeScript using the exercise files I provided in the [[GitHub]] repository for this course. I've added videos showing how to test the servers using the MCP Inspector and how to run them in Claude and [[Cursor]]. And I even have a video showing you what happens when something goes wrong with an MCP server. As you get started, remember everything I'm providing here in the course and in the exercise files comes in addition to the existing documentation provided by Anthropic for MCPs. So as you go through the next tutorials, reference the official documentation to get more information, and also look at the many examples of MCPs that have been provided by Anthropic and by the wider community. This is where you get to explore the true power of MCPs. So I encourage you to dive in even if you're not a seasoned coder. Because as Anthropic points out, language models are great at writing MCP servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[GitHub]] (1)
> **Env Vars:** mcp (5)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - all (1)

#### [Testing with the MCP inspector](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=0)** - [Instructor] As you develop your own MCP servers, you use the MCP Inspector to make sure everything is working properly before you implement the server in an MCP Client. Now, there are a couple of different ways of doing this, depending on your current context. The official documentation recommends invoking the inspector dynamically through npx, like this, npx @modelcontextprotocol/inspector \ and then spinning up the virtual environment. This mimics how your client will spin up the environment to make everything run. But if you go to the documentation for the individual language as the case, you find a different strategy using mcp dev to spin up the server locally, and this is done inside the virtual environment as you're working. Now, while these two invocations are different, the results are the same. So let me show you both. Let's start with a local version first. I'm in VS Code. I'm inside the virtual environment for the weather MCP. In terminal, I'll type in mcp dev server.py. This spins up the inspector at localhost:5173. From here, I can connect with the server, go to Tools, click List Tools, select one of the tools to test, and then plug in a latitude and longitude. When I click Run Tool, you'll see down in history here, you'll see in history we now have the request, which calls get_forecast and passes in these arguments. And the response with all the data from Open Media's API. This means the tool is working as expected. Now, this version of the inspector is the [[Python (Programming Language)|Python]] SDK running inside the virtual environment on my computer.
>
> **[1:35](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=95)** But look what happens if I turn the environment off. I'll crash out and go clear. Then I'll deactivate the environment. So now I'm just inside the folder and then I'll try the same thing again. mcp dev server.py. What I get in response is command not found:mcp. That's because the MCP SDK is sitting inside the virtual environment and I don't have access to the virtual environment right now. This is one of the many reasons why you have the option of calling in the inspector dynamically through npx. So let's do that. I'll grab this line here again, copy, paste it in. Then I'll go back and look at the documentation and it says uv \. This is the tool we use to spin up the virtual environment. Then you can put in an optional --directory path to point at the folder, then run \, then the package-name \, and then whatever arguments you want to pass in. Now, I'm already inside the correct folder, so that means I should be able to just go uv run server.py.
>
> **[2:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=161)** This bins up the inspector at the same location as before, meaning I can go back to my browser and reload the page, click Connect, go back to List Tools. I get the same tools and I can interact with them in the same way. Here's the key difference between these two approaches. Using the cloud version @modelcontextprotocol/inspector \ allows you to run the full environment and test it to make sure everything is working. Using MCP directly gives you direct access inside your virtual environment as you're working. So chances are as you're developing, you'll be using this approach, mcp dev server, and once you think you're done and you want to test to make sure the server is running properly inside a client, you used a cloud option.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), npx (3), find (1), python (1)
> **Env Vars:** mcp (6), sdk (2), api (1)
> **File Paths:** server.py (3)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** go to (2)

#### [Troubleshooting MCP servers](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=0)** - [Instructor] Debugging is a crucial part of any [[Software Development]]. And when you develop MCP servers that may run in different clients and interface with different external services, knowing what debugging tools are available becomes essential for success. An error with an MCP server may appear in the interconnection with a client, inside the code of the MCP server itself, or in the interconnection with an external service or resource, or a combination of all three. For this reason, the official documentation for model context protocol has comprehensive information about what debugging tools are available, including the MCP inspector, using Chrome dev tools to inspect the interactions inside Claude desktop, server side logging, client side logging, and a breakdown of debugging workflows and best practices. In this video, I want to focus on one error that pretty much everyone runs into when they build their first MCP server. To see that error. I'm going to boot up Claude, and when I do so, I immediately get this warning at the top. Could not connect to MCP server weather, MCP server weather, spawn uv ENOENT, and then it says MCP weather server disconnected. For troubleshooting guidance, please visit our debugging documentation. That's the page I just showed you. And you can also open MCP settings. MCP settings are found in the settings for Claude under the developer tab. And here, you have a list of all the MCPs that are currently plugged in and we can see weather has an error, it says failed up here, server disconnected. And to get more information, I can open the logs folder.
>
> **[1:33](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=93)** Here, I find a log for each of the MCPs, and the one I'm looking for now is MCP server-weather. I'll open this file in VSCode. And scanning through, I can see the error is here. UV returns error no entity, meaning the system is unable to find UV, but I know UV is on my computer and working because I've been using it to build this server. So what's going on? The error here isn't in the MCP server. It isn't how the server was called, specifically the command used to call the server because while we can call UV if UV is globally installed and in the path file for the operating system, if it's not, the system has no way of accessing UV directly. Now to fix this problem on a Mac or [[Linux]], you go into a terminal and type in which UV. This gives you the full path to UV. Just copy it and paste it in. And on [[Windows]], you do the exact same thing except you type in where UV, and you get the direct path. I'll save claude_desktop_config, close Claude and reopen it. And the error has disappeared, meaning the weather system is now working properly.
>
> **[2:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=175)** Now while this error may seem trivial, I'm showing it to you because if you go look on the internet, you'll find a lot of people are asking this particular question, and for good reason. The documentation for MCP doesn't specify this, or it does it in like a side note. Instead, the general example is to just say UV. And this is further complicated by the fact that many MCPS are called in using NPX or UVX, and that the configuration of the current computer impacts how these commands are called. So bottom line is, if you get a warning saying that the MCP isn't working, the first place you should look is inside claude_desktop_config, and make sure the command you're using to run the entire environment is actually working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** mcp (14), enoent (1), mcps (1), npx (1), uvx (1)
> **CLI Commands:** find (3), npx (1), make (1)
> **Code Identifiers:** claude_desktop_config (2)
> **Warnings:** warning (2)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)


### 3. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Building AI agents with MCP](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=0)** - All right, that's it. This is the end of the course. And if you're still with me, you now have the power to do the thing that we've all been thinking about since we first started chatting with AI, getting these AI systems to interact with real data and do real things on our computers. And like I've said several times now, this is all new unexplored possibility space, which means whatever idea you have now is probably not going far enough. In building MCPS for this course, I kept thinking, is it possible to do this other thing? And then I experimented with it and discovered entirely new ways of using language models to do things that have real utility for myself and for other people. And I also realized the way I'm thinking about this is still very limited by how I'm thinking about computers and computer interactions, which means as you start building MCP servers for yourself, when you run into a situation where you go, "No, that's not possible," push through that thought, because there's a good chance beyond what you are currently thinking is a new opportunity that may never have been explored before. And as you do so, keep this in mind. The blast radius of [[AI Agents]] and MCPs is unlimited until we limit it. And it's your job to make sure these tools do what they're supposed to, do not do what they're not supposed to, and do not put your users at risk. When you build MCPs, you are quite literally building the future for other people. That comes with enormous power and enormous responsibility. And I trust you to do it right. Now all that's left for me to say is look at it,
>
> **[1:32](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=92)** go build the future with the model context protocol, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Agents]] (1)
> **CLI Commands:** make (1), go build (1)
> **Env Vars:** mcps (1), mcp (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/model-context-protocol-mcp-hands-on-with-agentic-ai-2034200)

## Skills Covered

- AI Agents
- Artificial Intelligence (AI)
- Anthropic Claude
- Application Programming Interfaces (API)

## Path Context

### In [[Building AI Agents- Advanced Techniques for Developers]]
← [[Build AI Agents and Chatbots with LangGraph]] | **3 of 4** | [[Hands-On AI- Building AI Agents with Model Context Protocol (MCP) and Agent2Agent (A2A)]] →

## Appears In

- [[Building AI Agents- Advanced Techniques for Developers]]

## Related Courses

_Courses sharing skills:_

- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — AI Agents, Artificial Intelligence (AI)
- [[Governing Agentic Ai Systems By All Tech Is Human]] — AI Agents, Artificial Intelligence (AI)
- [[Azure AI for Developers- Building AI Agents]] — AI Agents, Artificial Intelligence (AI)
- [[Fundamentals of Agentic AI- Business Implications and Ethical Insights]] — AI Agents, Artificial Intelligence (AI)
- [[Data Integration And Api Development For Ai Applications]] — Artificial Intelligence (AI), Application Programming Interfaces (API)

---

[↑ Back to top](#)