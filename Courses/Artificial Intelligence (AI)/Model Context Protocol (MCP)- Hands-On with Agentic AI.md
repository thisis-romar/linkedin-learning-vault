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
created: 2026-04-21
---

![Model Context Protocol (MCP): Hands-On with Agentic AI](https://media.licdn.com/dms/image/v2/D4D0DAQEo2bybtTuBiQ/learning-public-crop_675_1200/B4DZW1p2_tG4Ac-/0/1742509404424?e=2147483647&amp;v=beta&amp;t=dltG64iWzxT4jhuX8znCpFVFa-4vJ0PlH6acDiPV93s)

# Model Context Protocol (MCP): Hands-On with Agentic AI

> The Model Context Protocol (MCP) allows developers to add agent behavior to LLMs by providing a universal protocol providing context to language models so they can interface with data and applications in a consistent way. MCP servers expose resources (data), tools (actions), and prompts (instructions) for the LLM and the user to use in performing more complex operations. In this course you’ll expl

> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai) | 55m | 8K learners
> [Jump to Path Context ↓](#path-context)

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

## Table of Contents

### Introduction

#### MCP: Connecting AI agents to data, apps, and more
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=0)** - Okay, let's talk about MCP, Model Context Protocol.
>
> **[0:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=5)** This simple protocol brings the utility of a Natural Language Interface to any data source and software that has an MCP server built for it.
>
> **[0:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=14)** An MCP is open source and client diagnostic, meaning, anyone can build an MCP server, and any software that already leverages LLMs can also hook into MCPs.
>
> **[0:25](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=25)** But forget the technical part for a moment.
>
> **[0:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=27)** When you use ChatGPT or Claude or another AI chat app, I bet you've wondered if you could get it to retrieve data from a source and then do something with it or maybe run software.
>
> **[0:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=36)** That is what MCP allows you to do.
>
> **[0:39](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=39)** It's a protocol that provides context for language models to interact with resources, run tools, and do whatever else you can think of.
>
> **[0:48](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=48)** So come hang out with me for a bit and we'll explore how to use MCPs in Claude and Cursor, and then I'll show you how to build and run your own MCP servers using Python and TypeScript.
>
> **[0:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=57)** The Model Context Protocol bridges the gap between AI tools and the tools we use every day, and I'm here to show you how to use it right.
>
> **[1:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/mcp-connecting-ai-agents-to-data-apps-and-more?u=76281980&t=64)** Let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (6)
> **Code Keywords:** let (2), interface (1)
> **CLI Commands:** python (1)
> **Speakers:** - okay (1)


### 1. MCP Explained

#### Using MCP servers in Claude Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=0)** - I think the best way to understand the model context protocol is to see it in action.
>
> **[0:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=4)** So I'll start this course by showing you some MCPs running in Claude Desktop on my computer.
>
> **[0:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=8)** Then when you've seen what's possible, jump to the next article, and you'll learn how to install and use MCPs in Claude Desktop on your computer.
>
> **[0:15](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=15)** And if you're watching this and you're not a coder, don't get deterred by the developer-centric language I'm using and the developer-centric approach that currently exists around this technology.
>
> **[0:25](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=25)** Using MCPs does not require you to be a coder.
>
> **[0:28](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=28)** It's just, as I'm recording this, this technology is less than six months old, and it's been developer-focused so far so there aren't good interfaces for them yet.
>
> **[0:38](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=38)** But I expect as MCPs get more traction, we'll also get better user interfaces, and they'll be more tightly integrated in tools like Claude Desktop.
>
> **[0:46](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=46)** So the code portion is probably a short-term blocker.
>
> **[0:49](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=49)** But enough talk, let me show you some MCPs running in Claude Desktop so you understand what this is all about.
>
> **[0:54](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=54)** And for that, I need to jump over to my recording booth 'cause I need my computer.
>
> **[0:58](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=58)** To use MCPs in Claude, you need to install Claude Desktop on your computer.
>
> **[1:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=61)** They're currently not supported in the Claude web app, and that makes sense because many of your MCP servers will exist on your computer and interact with files and applications on your computer.
>
> **[1:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=71)** I've already equipped my Claude Desktop with several MCPs.
>
> **[1:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=74)** To see a list of them, I can click on this button here, Attach from MCP.
>
> **[1:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=79)** That opens a model.
>
> **[1:20](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=80)** From here, I can click Installed MCP Servers and get a list of the available servers.
>
> **[1:25](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=85)** I can also click Choose an integration and choose a specific tool or resource I want to use.
>
> **[1:31](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=91)** And if I want more information about the available tools, I can click on the tools icon here.
>
> **[1:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=96)** This pops up, another model window with a full list of all the tools available and descriptions of what all those tools do.
>
> **[1:43](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=103)** Now, seeing this list, you're probably wondering, how am I supposed to remember all of these tools and what they do?
>
> **[1:48](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=108)** And that's part of the magic of using MCPs.
>
> **[1:52](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=112)** You don't need to remember what tools are available or even know which tools are available.
>
> **[1:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=117)** The language model will surface the appropriate tools when available.
>
> **[2:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=121)** Let me show you three quick examples.
>
> **[2:03](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=123)** First, I'll ask Claude to generate a haiku for me.
>
> **[2:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=128)** Now that I have this haiku, I want to know how many characters are in the haiku, both with and without spaces, and how many words.
>
> **[2:15](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=135)** Now, language models are famously bad at this type of counting task, so I've created an MCP that does that work for the language model.
>
> **[2:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=147)** When I ask, "count the characters, with and without spaces, and also give me the total word count," Claude recognizes there's an MCP server called Text Assist that has a tool called count_total_characters, and it asks me if I want to run it.
>
> **[2:40](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=160)** And then it also says, "Malicious MCP servers or conversation content could potentially trick Claude into attempting harmful actions through your installed tools.
>
> **[2:48](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=168)** Review each action carefully before approving."
>
> **[2:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=171)** So here, it's my job as the operator of Claude to look at what's going on.
>
> **[2:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=177)** And what I'm seeing is the tool input here is just the text, so I'm going to allow this for this chat.
>
> **[3:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=186)** Now Claude starts using the tool and immediately asks to use another tool, count_characters_without_spaces.
>
> **[3:12](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=192)** I'll allow it again.
>
> **[3:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=194)** And finally, it asks to use count_words.
>
> **[3:16](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=196)** So I'll allow a third time.
>
> **[3:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=199)** What happens behind the scenes now is Claude takes whatever tools are packaged in the MCP server, spins it up inside the Claude environment, runs the software, and then captures the response, and in return, I get total characters, including spaces, characters without spaces, and a total word count.
>
> **[3:37](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=217)** And I can open each of these tabs and see what Claude did with the tools.
>
> **[3:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=221)** This shows you MCP's tools operating within the context of Claude.
>
> **[3:45](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=225)** But that's not the only thing they can do.
>
> **[3:47](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=227)** Our family is going on a road trip tomorrow, and we need to know the weather forecast so we can pack the appropriate clothes.
>
> **[3:53](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=233)** Now, language models have no access to the current weather or weather forecasts, so I've created an MCP that pulls Open-Meteo for that data and later on in the course, you'll build that same MCP.
>
> **[4:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=244)** Let's see if I can trigger it.
>
> **[4:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=245)** "My family's going on a two-day roadtrip to Squamish tomorrow.
>
> **[4:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=248)** What clothes should we bring to fit with the weather?"
>
> **[4:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=253)** Claude identifies the weather MCP and the get_forecast tool.
>
> **[4:21](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=261)** Then recognizes the get_current_weather tool.
>
> **[4:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=264)** And when I allow these tools, the MCP server makes a call to the API, retrieves information from the API, sends that information back into Claude, and Claude can then process information in accordance with my prompt.
>
> **[4:37](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=277)** In response, I get a detailed breakdown of what the weather's going to be like and what type of clothes it recommends we bring.
>
> **[4:43](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=283)** And from the looks of it, we're going to hit a lot of rain in cold weather, so we're bringing all our winter rain gear.
>
> **[4:50](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=290)** The weather example is advanced, but let me show you something even more complex.
>
> **[4:54](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=294)** GitHub models provides many different models for experimenting.
>
> **[4:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=297)** Now let's say I want to compare several different models.
>
> **[5:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=300)** I could do that by building my own custom software, but that would be labor-intensive and tedious.
>
> **[5:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=306)** Instead, I've created an MCP and authenticated it with my GitHub personal token, and that MCP can give me a list of all the available models and then run completions on any of the models to my specifications.
>
> **[5:17](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=317)** When I ask what models are currently available from GitHub models, Claude recognizes GitHub Models Comparison as an MCP and the tool list_available_models.
>
> **[5:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=327)** When I allow that tool, it makes a call to GitHub models and gets a complete list of all available models.
>
> **[5:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=334)** And when I give it the prompt, "compare GPT-4o-mini, Phi-3-mini, and Mistral Small using the following prompt: how many n's in the word bananas?"
>
> **[5:45](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=345)** It surfaces compare_models.
>
> **[5:49](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=349)** The compare_models tool in the MCP now makes three separate calls to GitHub models to get the inference of the same prompt for those three different models.
>
> **[5:58](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=358)** And here are the results along with an analysis.
>
> **[6:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=360)** And as you can see, GPT-4o-mini and Phi-3-mini gave the right answer, two n's, while Mistral-small gave the wrong answer, three n's.
>
> **[6:09](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-claude-desktop?u=76281980&t=369)** Now that you've seen what's possible with MCPs in Claude desktop, jump to the next article, follow the instructions, and test these and other MCPs on your own computer.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (16), api (2), gpt (2)
> **Code Keywords:** let (5), require (1), this, (1), finally, (1), return, (1)
> **Code Identifiers:** compare_models (2), count_total_characters (1), count_characters_without_spaces (1), count_words (1), get_forecast (1)
> **Tools:** github (6)
> **UI Navigation:** click on (2)
> **Prerequisites:** install (2)
> **Speakers:** - i (1)

#### Model Context Protocol (MCP) explained
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=0)** - Now that you've seen some MCP servers in action, it's time to talk about what exactly this Model Context Protocol is because while this name is a great technical description of what's going on, it is not easily understandable.
>
> **[0:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=13)** Fortunately, there's an analogy that we're all familiar with that works really well here, USB-C.
>
> **[0:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=19)** this universal connector makes it possible to connect a memory stick, other devices via USB, even memory cards directly to any device that supports USB-C because USB-C is a standardized protocol for communication.
>
> **[0:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=34)** And if you're old enough to remember what it was like before we had USB-C and even before we had USB, you know how much easier things are now that we have a universal protocol.
>
> **[0:44](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=44)** MCP serves much the same purpose for language models, a protocol that provides the necessary context for models to interact with other services, and those resources can be data and applications on your computer or on the internet.
>
> **[0:58](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=58)** To fully understand MCP, we need to establish some basic terminology.
>
> **[1:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=61)** An MCP host is any application that wants to access data through an MCP.
>
> **[1:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=66)** The hosts you'll see in this course are Claude Desktop and Cursor, but they're not the only ones.
>
> **[1:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=71)** An MCP client is the extension to your application that maintains the protocol connection between the application and the MCP server.
>
> **[1:20](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=80)** Finally, an MCP server, the thing people refer to as simply an MCP, is a package of programs that expose some resource either to retrieve data or to do something with that data that the MCP client can interact with.
>
> **[1:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=94)** Oh, and some important broader context.
>
> **[1:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=96)** Right now as I'm recording this, when I refer to models, I'm referring to Anthropic's Claude models because MCP is a standard introduced by Anthropic to work with their Claude models.
>
> **[1:45](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=105)** Now for the next and maybe more important question, what exactly can MCPs do?
>
> **[1:49](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=109)** In short, they have three main features, resources providing direct access to specific data, prompts providing the language model with customized prompt to interact with that data, and tools performing actions on or with the data.
>
> **[2:03](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=123)** Now, there are two more capabilities in the MCP specification that have yet to be implemented anywhere.
>
> **[2:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=128)** They are sampling, which allows the MCP server to request completions from the language model, and roots, which define the boundaries inside which the MCP server can operate.
>
> **[2:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=139)** These two last ones are key to the promise of AI agents that truly act independently, but as we'll see later in the course, this acting independently part also opens endless threat surfaces, which is why it's not implemented yet.
>
> **[2:34](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=154)** And that brings us to the final part.
>
> **[2:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=156)** What can you build, and what can you use?
>
> **[2:38](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=158)** The simple answer is you can build as many MCP servers as you want and customize them to fit whatever needs you have.
>
> **[2:44](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=164)** That means you can build your own custom MCP servers that run just on your computer.
>
> **[2:47](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=167)** You can publish MCP servers other people can use, and you can build custom MCP servers for specific services.
>
> **[2:54](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=174)** So for example, a company can build an MCP server that only exposes the parts of their service they want LLMs to be able to interact with, and then customers can use those MCP servers directly.
>
> **[3:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=184)** But here's the thing, this entire concept is so new that we still haven't figured out what is possible.
>
> **[3:10](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=190)** And every time someone tries to build an MCP, they discover new things that MCPs can do.
>
> **[3:16](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=196)** So for me to sit here and say, "These are the things it can do, and these are the things that can't," simply wouldn't make any sense because I don't know, and neither does anyone else.
>
> **[3:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=204)** This is truly unexplored possibility space, and you get to explore it along with everyone else.
>
> **[3:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/model-context-protocol-mcp-explained?u=76281980&t=209)** So let's start exploring.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (21), usb (6)
> **Code Keywords:** else. (2), finally, (1), this, (1), let (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### Exploring avaialble MCP servers and clients
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=0)** - [Instructor] Now that you know how to install and use MCP servers, you probably want to know where we can find more of them.
>
> **[0:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=5)** Now, this space is rapidly evolving and so are the features, so chances are what I'm going to show you here is only the tip of the iceberg, as they say.
>
> **[0:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=13)** I recommend you start by exploring the official example servers provided by Anthropic under [modelcontextprotocol.io](https://modelcontextprotocol.io).
>
> **[0:21](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=21)** You find them in the sidebar under Get Started, Example Servers, and here's a long list of servers you can install and run right away.
>
> **[0:28](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=28)** All of these servers are provided by Anthropic are safe to use and integrate with well-known services like GitHub, Sentry, Brave, Slack, Google Maps, and so on.
>
> **[0:39](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=39)** If you want to look under the hood of any of these servers, you can go to the model context protocol account on GitHub and go to the servers repository.
>
> **[0:47](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=47)** Here you find all of these servers and more, and they're marked up either in Python or in TypeScript, but that's not the only place you'll find MCP servers and clients.
>
> **[0:56](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=56)** There are several websites that are now serving up lists of available MCP servers and clients.
>
> **[1:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=61)** This is a popular one called mcp.so.
>
> **[1:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=64)** And this is another one, [pulsemcp.com](https://pulsemcp.com).
>
> **[1:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=68)** And on both these sites and other similar sites, you find MCP servers and MCP clients.
>
> **[1:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=74)** MCP clients are the applications that can take advantage of MCP servers, and this list is also rapidly growing.
>
> **[1:21](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=81)** Now, on the topic of clients, there's one important thing to keep in mind.
>
> **[1:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=84)** Not all clients are the same.
>
> **[1:26](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=86)** Specifically, not all clients support the same features.
>
> **[1:30](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=90)** If you go to the official documentation under Get Started and Example Clients, you get a table showing which clients are available and what features they support.
>
> **[1:38](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=98)** And what you see right away is while all the clients support tools, support for other features, like resources and prompts, are limited to only a few clients, and currently, no clients support sampling or roots.
>
> **[1:52](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=112)** This list is important because as you're building out your own MCPs, you may build an MCP that has both tools and resources, then run it in Claude and find it works fine, but then when you try to run the resources in Cursor, they're not working.
>
> **[2:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=126)** The simple reason for that is Cursor does not currently support resources.
>
> **[2:10](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=130)** It only supports tools.
>
> **[2:12](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/exploring-avaialble-mcp-servers-and-clients?u=76281980&t=132)** So as you start working with your own MCPs, think about which clients are going to be using them and build your tools and resources appropriately.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (8)
> **CLI Commands:** find (6), python (1)
> **UI Navigation:** go to (3), in the sidebar (1)
> **Tools:** github (2), slack (1)
> **URLs:** [modelcontextprotocol.io](https://modelcontextprotocol.io) (1), [pulsemcp.com](https://pulsemcp.com) (1)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### Limiting the blast radius of AI agents
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=0)** - Before we go any further, let's talk about the blast radius of AI agents and the risks involved in running and building MCPs.
>
> **[0:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=8)** When you give a language model capabilities to do something on your computer, it may do things you didn't intend and may even do things you would never do.
>
> **[0:16](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=16)** And because of how AI agents operate behind the scenes in AI chat apps, it's easy to forget that things are happening on the computer and data is being manipulated in some way that we don't necessarily understand.
>
> **[0:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=29)** You saw a direct example of that when I demonstrated how MCPs work inside Claude.
>
> **[0:33](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=33)** Code is running.
>
> **[0:35](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=35)** But even if you're looking at the code, you won't necessarily know what is actually happening on the server.
>
> **[0:40](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=40)** That means, first, if you're intending to use an MCP, you have to trust the people who built it and trust that they have your interest in mind and are upholding their duty of care to you.
>
> **[0:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=51)** Second, you need to know what the MCP might do on your computer.
>
> **[0:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=55)** Is it just retrieving information or is it manipulating data on your computer in some way?
>
> **[1:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=60)** Maybe creating files, changing files, updating files, moving things around, or is it running actual software on your computer without your awareness?
>
> **[1:09](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=69)** And yes, that means the onus of making sure the MCPS you use are actually doing what they say they are is currently on you, which is not great.
>
> **[1:17](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=77)** Which brings us to developing mcps.
>
> **[1:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=79)** The promise of MCPS is we can build responsible interfaces to our data that control who has access to what and what the AI can do with that access.
>
> **[1:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=89)** But that requires developers being keenly aware of what data they are giving users access to, what the language models are able to do with that data, and where the threat surfaces exist when you are interacting with that data.
>
> **[1:42](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=102)** There's a real risk when building MCP servers of giving the language models too much access or too many capabilities.
>
> **[1:50](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=110)** Because the language models will not only run the software that is on the server, but may also spin up their own software and leverage the server to do things you didn't intend.
>
> **[1:59](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=119)** So as you're building out your own MCP servers, always apply the principle of least privilege.
>
> **[2:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=124)** Build a server so it only accesses data it should be able to access and explicitly limits access to anything else.
>
> **[2:12](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=132)** Ensure the tools you build are limited to only doing what you intend and cannot be extended by the LLM itself.
>
> **[2:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=139)** And finally, follow proper procedure when handling any user keys or other private information.
>
> **[2:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=144)** As I've said before, MCPs are still relatively new, as is the idea of AI agents.
>
> **[2:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=149)** And what we're seeing is the threat surfaces and the blast radius for these things can be exponential and almost unlimited if we are not very careful on how we build these tools.
>
> **[2:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=161)** So apply responsible AI principles anytime you're building MCPs, test them extensively with adversarial prompts and prompt injections.
>
> **[2:49](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=169)** And remember the old adage, never trust the user.
>
> **[2:52](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/limiting-the-blast-radius-of-ai-agents?u=76281980&t=172)** Well, now that user can be an LLM.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (4), mcps (2), llm (2)
> **Code Keywords:** let (1), else. (1), finally, (1), private (1), new, (1)
> **Speakers:** - before (1)

#### Leveraging the power of MCP servers
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=0)** - [Instructor] To leverage the power of MCPs in your own work it's useful to think of them as natural language interfaces to automation.
>
> **[0:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=6)** Identify tasks you normally perform that can be automated, build MCPs that facilitate that automation and then plug them into an MCP client.
>
> **[0:15](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=15)** In the exercise files, you'll find an example of this in an MCP I built called Project Documenter.
>
> **[0:20](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=20)** This MCP takes the contents in any project folder and summarizes all of that content into a markdown file and then writes a README file for that project.
>
> **[0:30](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=30)** Let me show you how it works in Claud.
>
> **[0:32](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=32)** I have a project open, and as you can see it currently does not have a README file.
>
> **[0:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=36)** I'll say, "Document the project" at this path, hit return, now, Claud first identifies file system as a possible tool here but I don't want to use file system so I'll say no.
>
> **[0:50](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=50)** Then it correctly identifies Project Documenter so I'll allow that.
>
> **[0:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=55)** If you look over here, it's now created a project.md file which is a complete list of all the code in the project in a single file, and created a README.md file that currently has no content, Claud identifies update-readme, so I'll allow that, and finally it finds assess-readme-quality which reads through the README file to make sure it fits with the project.
>
> **[1:16](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=76)** And just like that, thanks to Claude and the MCP, I now have a fully built out README file for my project, including a breakdown of how the project works, what features exist, how to install it, and how to run it.
>
> **[1:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/leveraging-the-power-of-mcp-servers?u=76281980&t=87)** And now all I have to do is go in and make sure it's correct and make any edits I want, which saves me a ton of time as I'm building out my project.

> [!info]- Semantic Content
>
> **Env Vars:** readme (5), mcp (4)
> **CLI Commands:** make (3), find (1)
> **File Paths:** project.md (1), readme.md (1)
> **Code Keywords:** let (1), return, (1)
> **Documentation:** the readme (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### Using MCP servers in Cursor
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=0)** - [Instructor] In the previous video, I used an MCP server installed in Claude to generate a read me file in a project, and then I demonstrated that read me file in Cursor.
>
> **[0:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=8)** But Cursor is also an MCP client, so in this video, let me show you how to install MCPs in Cursor, both at a project level and at a global level.
>
> **[0:18](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=18)** You can find lots more information about how to use MCPs in Cursor at the official Cursor docs.
>
> **[0:22](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=22)** In particular, you'll find configuration locations for project level MCPs and global MCPs.
>
> **[0:28](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=28)** To start this demo, I'll delete these two files here so that we can generate them again.
>
> **[0:32](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=32)** Then I'll go up to Cursor settings and navigate down to MCP.
>
> **[0:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=36)** Right now, there are no MCPs installed either in my project or globally, and because this docs helper MCP will be applicable to all my projects, I'm going to add it at a global level.
>
> **[0:46](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=46)** So I'll click add new global MCP server.
>
> **[0:49](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=49)** This creates a new file under the .cursor folder under my profile called mcp.json.
>
> **[0:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=55)** And this is where I place the MCP server's objects, and all of the different MCP servers I want to call in.
>
> **[1:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=61)** Once I save the file and go back to settings, you'll see the MCP server appear immediately.
>
> **[1:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=65)** Here we have the name of the server, what tools are available, and if I hover over them, it'll tell me what those tools do.
>
> **[1:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=71)** There are currently no resources available, and at the bottom here, you see the command used to invoke this server.
>
> **[1:18](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=78)** And just a note for developers, as you're developing your own MCP servers, anytime you make a change to your MCP server, you need to go in here and click refresh to make sure that your changes take effect inside Cursor.
>
> **[1:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=89)** All right, let's take the server for a spin.
>
> **[1:31](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=91)** I'll open up the agent panel, add some context, in this case, the page TSX file, and then say, document this project.
>
> **[1:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=101)** And just like in Claude, Cursor recognizes there is an MCP here, and I can run the tool directly from inside the Cursor agent.
>
> **[1:50](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=110)** The project.md file is created.
>
> **[1:53](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=113)** The read me file is created and currently has no content.
>
> **[1:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=117)** The agent recognizes it needs to update the read me file, so it has to run a second tool.
>
> **[2:03](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=123)** The read me file is now updated.
>
> **[2:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=125)** And finally, it asks to run the assessment tool to make sure that the read me is properly formed.
>
> **[2:12](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=132)** Same MCP, different client, and as you can see, slightly different output because this read me content is generated by the Cursor agent, whereas the previous content was generated by Claude directly.
>
> **[2:22](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=142)** And one more note, this MTP is running inside the context of Cursor, and in Cursor, you can set up custom rules for how the Cursor agent would operate.
>
> **[2:30](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/using-mcp-servers-in-cursor?u=76281980&t=150)** That means you can build custom rules in Cursor at global level and at project level that tell Cursor how to interact with your MCPs, which gives you a lot of control over how the agent operates.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (12), tsx (1), mtp (1)
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** let (2), delete (1), case, (1), finally, (1)
> **File Paths:** mcp.json (1), project.md (1)
> **Cross-References:** previous video (1), go back to (1)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)


### 2. Building MCP Servers

#### Building your own MCP servers
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=0)** - All right, we've talked about MCP servers, we've looked at what they can do.
>
> **[0:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=4)** Now it's time to build some.
>
> **[0:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=6)** In this chapter, I'm providing you with text articles, providing step-by-step instructions on how to build MCP servers using Python and TypeScript using the exercise files I provided in the GitHub repository for this course.
>
> **[0:18](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=18)** I've added videos showing how to test the servers using the MCP Inspector and how to run them in Claude and Cursor.
>
> **[0:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=24)** And I even have a video showing you what happens when something goes wrong with an MCP server.
>
> **[0:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=27)** As you get started, remember everything I'm providing here in the course and in the exercise files comes in addition to the existing documentation provided by Anthropic for MCPs.
>
> **[0:37](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=37)** So as you go through the next tutorials, reference the official documentation to get more information, and also look at the many examples of MCPs that have been provided by Anthropic and by the wider community.
>
> **[0:48](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=48)** This is where you get to explore the true power of MCPs.
>
> **[0:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=51)** So I encourage you to dive in even if you're not a seasoned coder.
>
> **[0:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-your-own-mcp-servers?u=76281980&t=55)** Because as Anthropic points out, language models are great at writing MCP servers.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (5)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** python (1)
> **Tools:** github (1)
> **Speakers:** - all (1)

#### Testing with the MCP inspector
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=0)** - [Instructor] As you develop your own MCP servers, you use the MCP Inspector to make sure everything is working properly before you implement the server in an MCP Client.
>
> **[0:08](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=8)** Now, there are a couple of different ways of doing this, depending on your current context.
>
> **[0:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=11)** The official documentation recommends invoking the inspector dynamically through npx, like this, npx @modelcontextprotocol/inspector \ and then spinning up the virtual environment.
>
> **[0:23](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=23)** This mimics how your client will spin up the environment to make everything run.
>
> **[0:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=27)** But if you go to the documentation for the individual language as the case, you find a different strategy using mcp dev to spin up the server locally, and this is done inside the virtual environment as you're working.
>
> **[0:39](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=39)** Now, while these two invocations are different, the results are the same.
>
> **[0:42](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=42)** So let me show you both.
>
> **[0:44](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=44)** Let's start with a local version first.
>
> **[0:46](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=46)** I'm in VS Code.
>
> **[0:47](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=47)** I'm inside the virtual environment for the weather MCP.
>
> **[0:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=51)** In terminal, I'll type in mcp dev server.py.
>
> **[0:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=55)** This spins up the inspector at localhost:5173.
>
> **[1:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=60)** From here, I can connect with the server, go to Tools, click List Tools, select one of the tools to test, and then plug in a latitude and longitude.
>
> **[1:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=73)** When I click Run Tool, you'll see down in history here, you'll see in history we now have the request, which calls get_forecast and passes in these arguments.
>
> **[1:23](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=83)** And the response with all the data from Open Media's API.
>
> **[1:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=87)** This means the tool is working as expected.
>
> **[1:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=89)** Now, this version of the inspector is the Python SDK running inside the virtual environment on my computer.
>
> **[1:35](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=95)** But look what happens if I turn the environment off.
>
> **[1:37](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=97)** I'll crash out and go clear.
>
> **[1:40](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=100)** Then I'll deactivate the environment.
>
> **[1:43](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=103)** So now I'm just inside the folder and then I'll try the same thing again.
>
> **[1:47](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=107)** mcp dev server.py.
>
> **[1:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=111)** What I get in response is command not found:mcp.
>
> **[1:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=115)** That's because the MCP SDK is sitting inside the virtual environment and I don't have access to the virtual environment right now.
>
> **[2:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=121)** This is one of the many reasons why you have the option of calling in the inspector dynamically through npx.
>
> **[2:07](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=127)** So let's do that.
>
> **[2:09](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=129)** I'll grab this line here again, copy, paste it in.
>
> **[2:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=134)** Then I'll go back and look at the documentation and it says uv \.
>
> **[2:17](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=137)** This is the tool we use to spin up the virtual environment.
>
> **[2:19](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=139)** Then you can put in an optional --directory path to point at the folder, then run \, then the package-name \, and then whatever arguments you want to pass in.
>
> **[2:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=149)** Now, I'm already inside the correct folder, so that means I should be able to just go uv run server.py.
>
> **[2:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=161)** This bins up the inspector at the same location as before, meaning I can go back to my browser and reload the page, click Connect, go back to List Tools.
>
> **[2:51](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=171)** I get the same tools and I can interact with them in the same way.
>
> **[2:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=175)** Here's the key difference between these two approaches.
>
> **[2:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=177)** Using the cloud version @modelcontextprotocol/inspector \ allows you to run the full environment and test it to make sure everything is working.
>
> **[3:06](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=186)** Using MCP directly gives you direct access inside your virtual environment as you're working.
>
> **[3:12](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/testing-with-the-mcp-inspector?u=76281980&t=192)** So chances are as you're developing, you'll be using this approach, mcp dev server, and once you think you're done and you want to test to make sure the server is running properly inside a client, you used a cloud option.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), npx (3), find (1), python (1)
> **Env Vars:** mcp (6), sdk (2), api (1)
> **Code Keywords:** let (3), this, (2), case, (1), pass (1)
> **File Paths:** server.py (3)
> **Cross-References:** go back to (2)
> **Documentation:** the documentation (2)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** go to (2)

#### Troubleshooting MCP servers
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=0)** - [Instructor] Debugging is a crucial part of any software development.
>
> **[0:03](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=3)** And when you develop MCP servers that may run in different clients and interface with different external services, knowing what debugging tools are available becomes essential for success.
>
> **[0:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=14)** An error with an MCP server may appear in the interconnection with a client, inside the code of the MCP server itself, or in the interconnection with an external service or resource, or a combination of all three.
>
> **[0:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=27)** For this reason, the official documentation for model context protocol has comprehensive information about what debugging tools are available, including the MCP inspector, using Chrome dev tools to inspect the interactions inside Claude desktop, server side logging, client side logging, and a breakdown of debugging workflows and best practices.
>
> **[0:48](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=48)** In this video, I want to focus on one error that pretty much everyone runs into when they build their first MCP server.
>
> **[0:54](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=54)** To see that error. I'm going to boot up Claude, and when I do so, I immediately get this warning at the top.
>
> **[1:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=60)** Could not connect to MCP server weather, MCP server weather, spawn uv ENOENT, and then it says MCP weather server disconnected.
>
> **[1:10](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=70)** For troubleshooting guidance, please visit our debugging documentation.
>
> **[1:13](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=73)** That's the page I just showed you.
>
> **[1:15](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=75)** And you can also open MCP settings.
>
> **[1:18](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=78)** MCP settings are found in the settings for Claude under the developer tab.
>
> **[1:22](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=82)** And here, you have a list of all the MCPs that are currently plugged in and we can see weather has an error, it says failed up here, server disconnected.
>
> **[1:30](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=90)** And to get more information, I can open the logs folder.
>
> **[1:33](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=93)** Here, I find a log for each of the MCPs, and the one I'm looking for now is MCP server-weather.
>
> **[1:39](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=99)** I'll open this file in VSCode.
>
> **[1:42](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=102)** And scanning through, I can see the error is here.
>
> **[1:45](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=105)** UV returns error no entity, meaning the system is unable to find UV, but I know UV is on my computer and working because I've been using it to build this server.
>
> **[1:56](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=116)** So what's going on?
>
> **[1:57](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=117)** The error here isn't in the MCP server.
>
> **[2:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=120)** It isn't how the server was called, specifically the command used to call the server because while we can call UV if UV is globally installed and in the path file for the operating system, if it's not, the system has no way of accessing UV directly.
>
> **[2:18](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=138)** Now to fix this problem on a Mac or Linux, you go into a terminal and type in which UV.
>
> **[2:24](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=144)** This gives you the full path to UV.
>
> **[2:26](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=146)** Just copy it and paste it in.
>
> **[2:29](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=149)** And on Windows, you do the exact same thing except you type in where UV, and you get the direct path.
>
> **[2:36](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=156)** I'll save claude_desktop_config, close Claude and reopen it.
>
> **[2:41](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=161)** And the error has disappeared, meaning the weather system is now working properly.
>
> **[2:55](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=175)** Now while this error may seem trivial, I'm showing it to you because if you go look on the internet, you'll find a lot of people are asking this particular question, and for good reason.
>
> **[3:04](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=184)** The documentation for MCP doesn't specify this, or it does it in like a side note.
>
> **[3:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=191)** Instead, the general example is to just say UV.
>
> **[3:14](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=194)** And this is further complicated by the fact that many MCPS are called in using NPX or UVX, and that the configuration of the current computer impacts how these commands are called.
>
> **[3:27](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/troubleshooting-mcp-servers?u=76281980&t=207)** So bottom line is, if you get a warning saying that the MCP isn't working, the first place you should look is inside claude_desktop_config, and make sure the command you're using to run the entire environment is actually working.

> [!info]- Semantic Content
>
> **Env Vars:** mcp (14), enoent (1), mcps (1), npx (1), uvx (1)
> **CLI Commands:** find (3), npx (1), make (1)
> **Code Keywords:** interface (1), this, (1)
> **Code Identifiers:** claude_desktop_config (2)
> **Warnings:** warning (2)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)


### 3. Conclusion

#### Building AI agents with MCP
> [LinkedIn Learning](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=0)** - All right, that's it.
>
> **[0:01](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=1)** This is the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=2)** And if you're still with me, you now have the power to do the thing that we've all been thinking about since we first started chatting with AI, getting these AI systems to interact with real data and do real things on our computers.
>
> **[0:15](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=15)** And like I've said several times now, this is all new unexplored possibility space, which means whatever idea you have now is probably not going far enough.
>
> **[0:26](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=26)** In building MCPS for this course, I kept thinking, is it possible to do this other thing?
>
> **[0:31](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=31)** And then I experimented with it and discovered entirely new ways of using language models to do things that have real utility for myself and for other people.
>
> **[0:40](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=40)** And I also realized the way I'm thinking about this is still very limited by how I'm thinking about computers and computer interactions, which means as you start building MCP servers for yourself, when you run into a situation where you go, "No, that's not possible," push through that thought, because there's a good chance beyond what you are currently thinking is a new opportunity that may never have been explored before.
>
> **[1:03](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=63)** And as you do so, keep this in mind.
>
> **[1:05](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=65)** The blast radius of AI agents and MCPs is unlimited until we limit it.
>
> **[1:11](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=71)** And it's your job to make sure these tools do what they're supposed to, do not do what they're not supposed to, and do not put your users at risk.
>
> **[1:21](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=81)** When you build MCPs, you are quite literally building the future for other people.
>
> **[1:25](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=85)** That comes with enormous power and enormous responsibility.
>
> **[1:28](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=88)** And I trust you to do it right.
>
> **[1:30](https://www.linkedin.com/learning/model-context-protocol-mcp-hands-on-with-agentic-ai/building-ai-agents-with-mcp?u=76281980&t=90)** Now all that's left for me to say is look at it, go build the future with the model context protocol, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), go build (1)
> **Env Vars:** mcps (1), mcp (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)


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