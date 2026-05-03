---
type: course
cssclasses:
  - lle-course
slug: structured-vibe-coding-with-ai-coding-agents
url: "https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents"
duration_minutes: 79
duration: 1h 19m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGblmIjX3hAGA/learning-public-crop_675_1200/B4EZjJo7P6HoAY-/0/1755729606438?e=2147483647&amp;v=beta&amp;t=cWx-QrFtzJi65mzeYlbBQh79RGQ19F8i2608pEvmJMo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Learn Vibe Coding- Build Apps with AI-Powered Coding]]'
prev_courses:
  - '[[Build with AI- Beyond Pair Programming with AI]]'
path_nav: '[{"path":"Learn Vibe Coding- Build Apps with AI-Powered Coding","position":5,"total":5,"prev":"Build with AI- Beyond Pair Programming with AI","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Structured%20Vibe%20Coding%20with%20AI%20Coding%20Agents.md)

![Structured Vibe Coding with AI Coding Agents](https://media.licdn.com/dms/image/v2/D4E0DAQGblmIjX3hAGA/learning-public-crop_675_1200/B4EZjJo7P6HoAY-/0/1755729606438?e=2147483647&amp;v=beta&amp;t=cWx-QrFtzJi65mzeYlbBQh79RGQ19F8i2608pEvmJMo)

# Structured Vibe Coding with AI Coding Agents

> Dive into the world of AI-assisted software development and learn how to harness the power of vibe coding with leading tools like Claude Code. This course provides a practical guide for software engineers to move beyond rapid prototyping and responsibly integrate AI into complex projects. Learn to set up your AI coding environment, implement an effective pair-programming workflow where the AI driv

> [LinkedIn Learning](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents) | 1h 19m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Moving beyond simple vibe coding](#moving-beyond-simple-vibe-coding)
- [**1. Foundations of Vibe Coding**](#1-foundations-of-vibe-coding) (1 videos)
  - [What is vibe coding?](#what-is-vibe-coding)
- [**2. Setting Up Your Vibe Coding Environment**](#2-setting-up-your-vibe-coding-environment) (4 videos)
  - [Choosing your coding agent host: VS Code and Claude Code](#choosing-your-coding-agent-host-vs-code-and-claude-code)
  - [Equipping agents: Essential tools and MCPs](#equipping-agents-essential-tools-and-mcps)
  - [Model selection for optimal vibe coding](#model-selection-for-optimal-vibe-coding)
  - [Project context: Understanding rules files](#project-context-understanding-rules-files)
- [**3. The Vibe Coding Workflow**](#3-the-vibe-coding-workflow) (4 videos)
  - [AI pair programming: Human as navigator, AI as driver](#ai-pair-programming-human-as-navigator-ai-as-driver)
  - [Warm up: A landing page for your AI consulting business](#warm-up-a-landing-page-for-your-ai-consulting-business)
  - [Execute: Test-driven development with your AI agent](#execute-test-driven-development-with-your-ai-agent)
  - [Trust but verify: Testing, PRs, and debugging](#trust-but-verify-testing-prs-and-debugging)
- [**4. Beyond Code Generation: AI for Code Understanding**](#4-beyond-code-generation-ai-for-code-understanding) (2 videos)
  - [Rapid codebase onboarding with AI agents](#rapid-codebase-onboarding-with-ai-agents)
  - [Generating diagrams for system comprehension](#generating-diagrams-for-system-comprehension)
- [**5. Best Practices and Avoiding Pitfalls**](#5-best-practices-and-avoiding-pitfalls) (4 videos)
  - [Software stack selection for AI agent success](#software-stack-selection-for-ai-agent-success)
  - [Monorepos: The AI coding agent's best friend](#monorepos-the-ai-coding-agents-best-friend)
  - [Managing proliferating rules files effectively](#managing-proliferating-rules-files-effectively)
  - [Common vibe coding pitfalls and their antidotes](#common-vibe-coding-pitfalls-and-their-antidotes)
- [**Conclusion**](#conclusion) (1 videos)
  - [The future of AI-assisted development](#the-future-of-ai-assisted-development)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Moving beyond simple vibe coding](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/moving-beyond-simple-vibe-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/moving-beyond-simple-vibe-coding?u=76281980&t=0)** - Have you heard of [[Vibe Coding]] or coding agents? These are revolutionary way to build software by giving command in plain English to AI, which then writes code for you. While this can massively speed up development, just vibing can lead to messy, insecure, and expensive code if you are not careful. But what if you could harness all that power without the chaos? Hi, I am Han Lee and I am here to show you how. I will guide you through using powerful AI tools like Cloud Code directly within your VS. Code editor. You will learn how to effectively manage your projects using test driven development to ensure your code works and confidently bring new ideas to life faster than ever before. If you are ready to build better software with AI, then join me and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vibe Coding]] (1)
> **Speakers:** - have (1)


### 1. Foundations of Vibe Coding

[↑ Back to Table of Contents](#table-of-contents)

#### [What is vibe coding?](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/what-is-vibe-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/what-is-vibe-coding?u=76281980&t=0)** - [Instructor] Imagine if you could simply tell an AI what you want your code to do in English. It is defined as the practice of rapidly building software by issuing comments to AI coding agents and accepting the changes that they propose. That is the essence of [[Vibe Coding]]. It is about moving quickly, then let AI do the heavy lifting of generating code. The term vibe coding was coined by the ex co-founder of OpenAI and ex CTO of Tesla, Andrej Karpathy, in a tweet. Here, he described that you fully give into the vibes, embrace the exponentials, and forget the code even exist. All he did was just talked to Cursor Composer, barely touch the keyboard, accept all always, and pasting air back until it is resolved. This captured a new, powerful, and unconventional idea about how we could work with AI. Vibe coding didn't appear overnight. It is the result of gradual evolution of AI-assisted coding tools. We started with simple tap completions where IDE could suggest the next [[Microsoft Word|word]] in the 1990s called IntelliJ. Then in 2021, [[GitHub Copilot]], powered by OpenAI's codex, took things further with advanced code completion,
>
> **[1:36](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/what-is-vibe-coding?u=76281980&t=96)** and fill in the middle capabilities so we can then complete a full module instead of just the next word. And now with models like Claude 3.5 Sonnet, and those who can after it, we are entering the era of agentic coding where the AI can take more significant actions on our behalf, utilizing the wide variety of tools that it has access to. However, vibe coding is a double-edged sword. On one hand, it has immense potential. The pros are clear. It eliminates all of the tedious work and dramatically accelerates our iteration speed. We can move from idea to implementation much, much, much faster. But there is also significant cons. Using vibe coding without care can lead to confusion, messy spaghetti code, security vulnerabilities, and unexpected high LLM bills. Coding agents have their own personalities where they sometimes don't follow directions and sometimes are too eager to write too much code. So the key takeaway is this, vibe coding is a new, powerful way to interact with coding agents. It offers significant upsides, but also come with the risk that it must be managed. And in this course, we will try to do it in a structured and a disciplined way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vibe Coding]] (6), [[Microsoft Word|Word]] (2), cursor (1), [[GitHub Copilot]] (1)
> **Env Vars:** cto (1), ide (1), llm (1)
> **Definitions:** is a  (2), defined as (1)
> **Tools:** intellij (1), github (1)
> **CLI Commands:** composer (1)
> **Versions:** 3.5 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up Your Vibe Coding Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Choosing your coding agent host: VS Code and Claude Code](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980&t=0)** - [Narrator] Before we start [[Vibe Coding]], we need to set up a few key components. From our previous video, we define vibe coding as programming using a coding agent, powered by one or more [[Large Language Models (LLM)|large language models]] inside an interactive environment. This environment could be an IDE, like VS Code, a terminal or a web-based application. Inside the interface lies the coding agent. Different coding agents are built with different harnesses and structures. A harness is what the agent will see and observe from the environment. And underlying the coding agent are the large language models available to the agent. Some coding agents use a single model while other coding agents might use multiple different large language models. Now imagine our coding agents are just like developers and they need access to external tools to complete their tasks. Those tools can be either built in or provided via MCP. To make the discussion simple, that's assume MCP is the plugin system for us to provide tools to the coding agents. Here are some coding agents that's currently on the market right now. There are Avanti, Cursor,
>
> **[1:34](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980&t=94)** [[GitHub Copilot]], Windsurf, et cetera, that lives inside Neovim and VS Code or other VS Code forks. Then there are also command line-based agents like Claude Code, from Anthropic and Codex [[CLI]] from OpenAI. Each offers slightly different features, harnesses and level of integration with large language models and developer tools. For this course, we will use Claude Code, which is a CLI based tool inside Visual Studio Code or VS Code. This gives us the best of both worlds, the command line interface and the power of a graphical code editor. That's start by downloading VS Code. Go to the official site and select the version for your OS. I am on a Mac and I have already downloaded the Mac OS version. Next, we will install the CLI tool. Let's go to Claude Code Overview and we can install it via MPN install. So let's try to do that in our terminal. So we will do this and let it run for a bit. Now everything is downloaded. I'm going to create a new folder for our project
>
> **[3:12](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980&t=192)** and we will open this in VS Code. Test. And let's click I Trust the Authors here. And now we have set up, I'll show you how to launch the CLI tool. So let's open up a terminal. My preference is move this, oh allow, my preference is to move this to the right so it's a little bit easier for me to see. And now we can type in Claude to open up the code. So initially, it will try to set up some of this preferences. So I will choose Dark Mode for colorblind friendly and I will authenticate using my own Claude account. Continue with [[Google]],
>
> **[4:16](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980&t=256)** refresh and then you click Authorize. Okay, copy code and log in successful. So press Enter to continue and press Enter to continue after you read the security notes. Use recommended setting. Proceed. Now we're all set up, I will try to explain why we want to use CLI inside VS Code. Using Claude Code inside VS Code offers a couple advantages. First is you can use VS Code to easily view the directory structure on the left hand side with the explorer and you get access to get history and all of the [[Version Control]] tools and all of the reach ecosystem that is supplied by VS Code. And you maintain the flexibility of using a command line interface with VS Code. Most of these coding agents share a common use case. This includes a planning mode, where the agent figure out what actions to take and plan for it, and then an agent mode, where it execute those actions. In addition to agent mode and planning mode, IDE-based agents, like GitHub Copilot, Cursor,
>
> **[5:52](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/choosing-your-coding-agent-host-vscode-and-claude-code?u=76281980&t=352)** and Windsurf. often offers excellent auto complete support using the Tab key and that makes them very productive, friendly. In the next video, we'll go over the external tools you will want to integrate into your coding agent and how they support workflows, like test generation, refactoring, or documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (5), [[Large Language Models (LLM)|Large language models]] (3), [[Vibe Coding]] (2), cursor (2), [[GitHub Copilot]] (2)
> **Tools:** vs code (11), terminal (3), command line (3), github (2), neovim (1)
> **Env Vars:** cli (5), ide (2), mcp (2), mpn (1)
> **Prerequisites:** set up (4), install (3), before we start (1)
> **UI Navigation:** go to (2), select the (1)
> **Cross-References:** previous video (1), in the next (1)
> **Analogies:** imagine (1), just like (1)
> **CLI Commands:** make (1)

#### [Equipping agents: Essential tools and MCPs](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/equipping-agents-essential-tools-and-mcps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/equipping-agents-essential-tools-and-mcps?u=76281980&t=0)** - [Instructor] In the previous video, we talk about tooling for coding agents. In this section that's focused on [[Large Language Models (LLM)|large language models]]. It is a critical component of any coding agents. Ever since the release of [[ChatGPT]], there has been an explosion of language models available for coding task. New models appear on a weekly basis, which makes it very hard to decide what to use. To help cut through the noise, we will refer to a commonly used benchmark as the artificial analysis coding index. This benchmark evaluates coding performances across popular language models like Claude4 Sonnet, open AI's [[GPT-4|GPT4]] mini, Gemini2.5, DeepSeek R1, and many, many others. However, while benchmarking can help, they don't always reflect the full picture as some models could cost more or be less available versus the others. In reality, [[Vibe Coding]] where agents operate interactively in coding environments only became truly feasible after Anthropic's Claude3.5 Sonnet model. For the purpose of this course, we will standardize on Claude4 Sonnet from Anthropic, using Claude Code for the following reasons. First, it has very strong performance in coding task. Second, it has built in planning and reasoning capabilities.
>
> **[1:36](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/equipping-agents-essential-tools-and-mcps?u=76281980&t=96)** Third, it offers very good integration with command line interface and all of the IDE tools. Other models like [[Gemini]] 2.5 and [[GPT-4]] series are also viable. But for simplicity and cost effectiveness, Claude Sonnet is our default. Keep in mind that this space evolves very rapidly. For now, Claude Sonnet offers the best balance of performance and integration for our use case. To confirm which model your agent is using, let's go back to VS Code terminal and look at Claude code. Claude code offers a wide variety of building slash command. We can do a slash status to see what model we are using. At the bottom of the screen, you see default use Opus4 or Sonnet4 based on max usage limits. This confirms our setup is complete and we are ready to start using our coding agents with the right tools and models. In the next video, we will walk through how to provide tools to large language models, including [[GitHub]] and [[Git]], so we can connect our agent to do a full development cycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[ChatGPT]] (1), [[GPT-4|Gpt4]] (1), [[Vibe Coding]] (1), [[Gemini]] (1)
> **Tools:** command line (1), vs code (1), terminal (1), github (1)
> **Env Vars:** gpt4 (1), ide (1), gpt (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **CLI Commands:** git (1)
> **Versions:** 2.5 (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)

#### [Model selection for optimal vibe coding](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/model-selection-for-optimal-vibe-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/model-selection-for-optimal-vibe-coding?u=76281980&t=0)** - [Narrator] Just like human developers, coding agents need the right tools to work. Let's think about our own workflow. First, we need some sort of a IDE or a [[CLI]] environment. We need access to a code repository like [[GitHub]], and some internet connection for docs and internet searches, and a terminal to run some comments. And most likely, we should be using [[Git]] for [[Version Control]], and some planning tools like [[Jira]]. So if we need the coding agent to mimic our developer lifecycle, and in a typical developer lifecycle, we go through some of the workflow like the following, we will plan the work, we have to do some research online, we have to write and test code, we need to commit changes to Git, and then push it to GitHub, Trigger CI/CD, and to deploy to production. We want our coding agents to follow a similar cycle. This means we need to give it access to these tools an environment. The interface that connects coding agents to tools is called Model Context Protocol, or MCP. So, MCP is to agents, it's what Language Server Protocols is to IDEs. That's how most of the VSCode plugins are built.
>
> **[1:37](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/model-selection-for-optimal-vibe-coding?u=76281980&t=97)** Language Server Protocols, or LSPs, they provide IDEs features like autocomplete or Git blame to human developers. And the equivalent is Model Context Protocol. MCPs provide coding tools to [[AI Agents]], such as planning, context awareness, and execution capabilities. And one huge benefit of Claude Code is that it includes a lot of this capabilities out of the box. It has built-in planning mode with its own to-do list. It has its own built-in sequential thinking for thinking mode for reasoning through the task. And it has native CLI support for seamless terminal interaction with Filesystem with GitHub. And just like we take time to think before coding, agents needs that capability too. Claude Code includes a built-in thinking engine for reasoning through task code dependencies and problem-solving strategies. When you ask it to think, it will think. So there are a few keywords that we can use to prompt Claude to think. This includes keywords like think harder, think longer, think very hard, or even ultrathink. Interesting, right?
>
> **[3:11](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/model-selection-for-optimal-vibe-coding?u=76281980&t=191)** For the intended purpose of this course, we will assume that you already set up GitHub CLI. So, if we go back to VS Code and Claude, we can then explore the file system with a bin ls into bash mode to look into the directory structures. To expand to Project View we can press Control + R to toggle a larger size views. To activate planning mode, we can press Shift + Tab to cycle two planning mode. So, as an example, here, when I press Shift + Tab, right now I am in the auto-accept mode for all of the edits that Claude Code will do. And then if I press again, Shift + Tab, I go into Plan Mode, where clock is only going to plan for its actions. And then, to turn all this off, I will do another Shift + Tab to cycle to regular mode. And once off, the agent can execute command directly again. In the next video, we will walk through how to set up GitHub access, integrate Git and version control, and begin connecting your agent into a full development workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Git]] (4), [[CLI]] (3), [[Version Control]] (2), [[Jira]] (1)
> **Tools:** github (5), terminal (2), jira (1), vs code (1), bash (1)
> **CLI Commands:** git (4), cd (1), ls (1)
> **Env Vars:** cli (3), mcp (2), ide (1)
> **Analogies:** just like (2), such as (1)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **UI Navigation:** toggle (1)

#### [Project context: Understanding rules files](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/project-context-understanding-rules-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/project-context-understanding-rules-files?u=76281980&t=0)** - [Instructor] Now, we've set up Claude Code with VS Code, selected the model, and look at the tools that's available. Let's talk about rule files, this is what is also known as context engineering. Every large language model operate within a context window. This is a limited amount of information it can pay attention to at once. It is similar to a human's attention span. By default, there are some overhead with coding agent harnesses or system prompt that is used to orchestrate the coding agents. Then to help the model understand what it's working on, we provide contextual information in a special file called a rules file. This file includes relevant background information, preloaded code snippets, or sometimes code structures, and architectures. This is basically the documentation we can provide to the coding agent, the equivalent of README.md for coding agents. In Claude Code, this file is typically named claude.md. And for other coding agents, it could be named many different things, but we'll focus on Claud Code for this course, so that's walkthrough setting one up in VS Code. Let's go back to VS Code into our VS Code terminal, Claud Code, and we can write a following slash command, /init.
>
> **[1:38](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/project-context-understanding-rules-files?u=76281980&t=98)** This will initialize a new claud.md file with codebase documentation. So right now, you can see that Claud Code says, "Hey, I'll analyze your codebase, and create a claude.md file, blah, blah, blah, and then we will try to proceed, and let's do this.
>
> **[2:03](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/project-context-understanding-rules-files?u=76281980&t=123)** So now, Claude has thought through and explore our system a little bit. It determines that, "Hey, this is a empty directory with just Claude settings." And we can now see the power of using Claude inside VS Code where we have very deep integration, and we can view the file directly here in our editing panel. And we now see the claude.md file being created. It says, I have created claude.md file for your current MD directory, et cetera, et cetera, so let's take a look at this. And it says, "Hey, this file provide guidance to Claude Code," so this is really a templated claude.md file for us to edit in the future. And for this rule files, like claude.md, they can live in many different places. Sometimes it can live in the project route, and/or in the nested directory, or even in your home directory for global context. This flexibility allows you to tailor behavior for different projects or areas within the repository. In addition, we can also inside Claude Code using at command to refer and add a specific file to the context. As an example here,
>
> **[3:37](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/project-context-understanding-rules-files?u=76281980&t=217)** we can do an @claude.md to add this specific file to our context. Wrapping up, at this point, we have set up VS Code and Claude Code. We have also selected and verify the language model to use with Claude Code. And we looked into the list of tools available. And we have created and configured a rules file. Now, we have prepared our environments for productive, structured [[Vibe Coding]]. In the next video, we will build our first app and see the agent in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vibe Coding]] (1)
> **File Paths:** claude.md (7), readme.md (1), claud.md (1)
> **Tools:** vs code (6), terminal (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** set up (2)
> **Env Vars:** readme (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)


### 3. The Vibe Coding Workflow

[↑ Back to Table of Contents](#table-of-contents)

#### [AI pair programming: Human as navigator, AI as driver](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/ai-pair-programming-human-as-navigator-ai-as-driver?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/ai-pair-programming-human-as-navigator-ai-as-driver?u=76281980&t=0)** - [Instructor] In this section, we are going to explore the basic behavior patterns for working with coding agents. We will also walk through a concrete example. We will vibe code a landing page for our fictional AI engineering consulting service. So imagine we are starting an AI consulting business and we want to create a landing page with a clear call to action. We will build that together with the help of a coding agent. But before we dive into the demo, let's talk about the core idea behind agent coding in a structured way. Agentic coding takes inspiration from a very familiar technique in software engineering, pair programming. In pair programming, you have two people working together on the same piece of code. One person is the driver, the one at the keyboard writing code. The other person is the navigator, the one who is observing, thinking ahead, and giving guidance to the driver. Sounds familiar? That is what exactly we are going to be doing with agenetic coding. We, the human, are the navigators. The agent, in this case, Claude ode is the driver. The agent will be responsible for typing out the code, and our job is to watch what it is doing, giving it clear instructions and step in when it's needed.
>
> **[1:37](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/ai-pair-programming-human-as-navigator-ai-as-driver?u=76281980&t=97)** This means stopping it when it goes off the track, rewinding it if it messes up, and guiding it back towards its goal. There is another variation of pair programming called ping-pong programming. Here is how it works. One person writes the test, that's the ping, and the other person writes the implementation to pass the test, that's the pong. The idea is two programmers will ping-pong back the test and the implementation together. And we can do this with coding agents as well. We can have one agent write a suite of tests and then use the same or another agent to write code that make all those tests pass. All right, now that's connect this to the typical software engineering workflow. In a real-life project, we usually start with product requirements. Product managers hand us some specifications and we break that down into technical plans and tasks. This means writing an RFC, or a request for comment, creating tickets in [[Jira]], and then we go by ticket, by ticket, writing code, reviewing and repeating until the project is done. In structured [[Vibe Coding]], we follow the exact same path. We start with requirements, we break those down into bite-sized tickets, we pick a task, give clear instructions to the agent,
>
> **[3:13](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/ai-pair-programming-human-as-navigator-ai-as-driver?u=76281980&t=193)** and review the output, and iterate. That's it. Agentic coding isn't some magical black box. It is just pair programming except with an AI agent partner. In the next video, we are going to get hands-on. We will generate our list of tasks and get Claude code to start building our AI engineering consultant landing page, and you will see the full navigator-driver loop in action. Let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), [[Vibe Coding]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** rfc (1)
> **Cross-References:** in the next (1)
> **Documentation:** rfc (1)
> **Tools:** jira (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Warm up: A landing page for your AI consulting business](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=0)** - [Instructor] In this video, we are going to do a live demo on how to use Claude Code to build a landing page for our AI consulting service without writing everything from scratch. Before we start, as best practice, let's init our [[Git]] repository, and let's go to Claude. First, let's go to planning mode. And now we have entered planning mode, let's describe what we want, and let the agent take it from here. So, "Please help us create a landing page for our AI engineering consulting practice. Please make sure there is clear call to action with an email sign-up. Make the UX simple and easy to understand our value proposition. Our value proposition is that we have many years of expertise in building AI applications."
>
> **[1:27](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=87)** Let's let it plan. All right, it says, "I see this is currently an empty directory. Let me create a comprehensive plan for building." Well, okay, so very comprehensive. Now let's keep on planning. "Let's implement this using Next and Vite so we can easily hot reload and change the design." And let's also review some of the key features. First, it says, hero section, clear headline, expert, blah, blah, blah. Value proposition section, service overview. Okay, social proof. That looks good. And let's go. Okay, so now it has all these implementation steps. It looks much more comprehensive now. And we should probably also change our default CLAUDE.md, so keep planning. "Please ensure we make the appropriate changes to our CLAUDE.md first before we proceed to implement the application." Okay, so now, we have a much better planning process. So the implementation plan says CLAUDE.md update
>
> **[3:01](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=181)** and [[Next.js]] landing page. So we update CLAUDE.md file with the appropriate project overview, dependencies, key dependencies, all the strategies, and we will initialize Next.js project. Now we have the plan, we can proceed to implement the application. I will click on Yes. And let's just let it rip. So now, we can observe what Claude Code is doing. It shows up the plan with a checklist, starting from update CLAUDE.md and all the way to create footer component. And Claude will walk through each and every single part of this plan to implement. And if we need to expand the view, as previously mentioned, we can do a Control+R to expand to the full view, and then do another Control+R to revert back. So as the first step, we can see in the middle editing panel that we have already edited CLAUDE.md. So I'm going to expand all this. And now, it needs to create the Next app. So, we will proceed. And in general, Claude is going to ask for permission whenever it is doing a bash command in the terminal. And this is the key time
>
> **[4:36](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=276)** where we need to pay special attention to determine if Claude is going to do something out of bound. Let's say, if it's trying to remove the whole directory, etcetera. We should not enable Claude to do some of the more dangerous commands using our best judgment. But for here, it's only trying to create the Next app, which should be fine. And now, it's asking for permission to do copy or create directory. So, those are generally fine commands to execute, so let's approved that. As Claude does its work, we can observe that Claude has created all these different files in the repository directly on VS Code, which is another very big benefit of using VS Code with Claude. And at the same time, we can also utilize the VS Code integration with source control to see what files has been added and updated using the native VS Code integrations. And now, it is asking us to move Next.js files to root. We will approve this. Okay, so now it is asking for permission to do an rm -rf. Let's double-check.
>
> **[6:09](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=369)** This is trying to move. Let's double-check the directory structure. Okay, it looks harmless, so let's approved that. All right, it says the Next.js project has been initialized, and let's verified CLAUDE.md for context. All right, it's asking for permission. Everything looks fine, let's go. Here we see Claude Opus 4 limit reached, now using Sonnet 4. A lot of times what is happening is, there are some models that's more expensive and has less token limits, versus some models that are more widely available with higher token limits. So when the [[Tokens]] run out, typically it switches to a more common model. Right now, it is trying to lint, so let's lint our code base so it looks pretty. Okay, so now, both lint and type check pass successfully, and Claude is asking us to start the dev server to make sure everything works. So let's proceed. And note that right here, it says [[npm]] run dev and &, which means it is going to run it in the background, which is perfect. So let's try to see if we can have it open in local. Okay. Now the dev server has been started.
>
> **[7:42](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=462)** It is running on localhost 3000. And this is the landing page that Claude has created. Transform your business with expert AI engineering. Get started. Learn more. Why choose ours? Enterprise-grade AI engineering. It looks pretty good and comprehensive. One thing that I think we could do better is have a clearer call to action up top. But first, click on Get Started. Okay. So it's actually a pop-up. I think we could probably benefit from directly entering email on the site to reduce the number of actions in our call to actions. So let's go back to VS Code. "Looking good. Right now, it takes two actions before user can input email. Let's try to put the email collection directly on the landing page to improve our CTA." Now Claude Code has finished its task, and it reduced the friction from two clicks to a direct input on the landing page, and it's actually doing pretty well. Let's scroll through very, very slowly to see the product that it has generated.
>
> **[9:19](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/warm-up-a-landing-page-for-your-ai-consulting-business?u=76281980&t=559)** Proven track record. 10 years of experience, etcetera, etcetera. And stay updated with AI insights. This is actually a fairly solid draft site, and this came from a few lines of instruction. In this demo, we have modified our rule file. We have vibe-coded a landing page. And the landing page is now up and running in localhost 3000. We also made a change to improve our call to action from two clicks to directly on the page. So this is looking very good. In the next video, we will ensure our email capture form is getting the right type of emails that we actually want to receive and do some more final polish for this landing page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Next.js]] (4), [[Git]] (1), [[Tokens]] (1), [[npm]] (1)
> **File Paths:** claude.md (7), next.js (4)
> **Env Vars:** claude (7), cta (1)
> **CLI Commands:** make (4), git (1), rm (1), npm (1)
> **Tools:** vs code (5), bash (1), terminal (1)
> **UI Navigation:** go to (2), click on (2)
> **Cross-References:** go back to (1), in the next (1)
> **Best Practices:** best practice (1)

#### [Execute: Test-driven development with your AI agent](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980&t=0)** - [Instructor] In the last video, we created a simple landing page for our AI engineering consulting service. In this session, we are going to improve the page by tightening the email validation logic. More importantly, we will walk through the ping pong method of working with AI coding agents. This is the current state of our landing page. We have a name and email input box. But right now it accepts pretty much any string that looks vaguely like an email, which is not ideal. Right, so let's give it a try. And this is not ideal, so let's fix that. We are going to demonstrate the ping pong development method. In this workflow, we will use AI agent to write the test and then have the AI agent update the code until all tests passes. This is also known as a [[Test-Driven Development]]. So we will go to VS Code and start asking the agent to write unit test for the email validation function. So here we are. Please write unit test to verify the email validation component. We should only allow valid email addresses with proper domain extensions
>
> **[1:39](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980&t=99)** like .com, .org, .gov, .edu, .net, and .io. And let's go onto plan mode to ensure we have the coding agent plan out its actions before it acts. So we will click enter. And this is the pin of the process. We are writing the test cases before we write out the actual implementation. And again, right here we can always do a CTRL R to view what the agent is doing and to expand all those collapsed actions here. So now Claude code has generated the plan. Let's review it quickly. The current validation use a basic regex pattern, which allow any domains with two plus character, but does not restrict to specific implementations and it shows some implementation plan. Very specifically, it followed our instruction to support only .com, .org, .gov, .edu, .net, .io. So we will try to proceed and let's run this. So again, Claude code here generated a list of its todo,
>
> **[3:16](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980&t=196)** and it will proceed down to every individual part of its plan sequentially. Okay, it is making some changes to the Hero component. So let's do a CTRL R to see what it's doing. Which means it's editing some of the files. Now it's done, so let's try to run the test.
>
> **[3:49](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980&t=229)** Right here we can see that Claude code is trying to do the pump part. Now to ensure the code works against the test, it says, "I noticed the Hero test expecting to find content from Hero components by testing against the Footer." So it's making the changes to the Hero component to make sure it works. So now it's done everything, scroll up and see what's been implemented. First, it created enhanced email validation to allow the domains that we specified. It updated the components as the pong, and it also created a comprehensive test suite and testing infrastructure. So without going through the code, let's verify from the end state, verify from the results only. So let's go to our landing page and click refresh to make sure we are on the latest version. And let's type in some random name. Okay, now it reject our random email address. So at the very least, it's doing what it's supposed to do. And now if we change this to .edu, we are now able to submit. So now it blocks invalid emails correctly
>
> **[5:23](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/execute-test-driven-development-with-your-ai-agent?u=76281980&t=323)** and accept only valid emails. Awesome. We just implemented our email validation component using test driven development using the ping pong method. First we define the test, which is the ping, and we have the agent implement and iterate the code on the pong side, which is the ping pong, and the agents looped until all of the test passes. This is a very powerful way to collaborate with AI coding agents when building production grade features. In the next video, we will demonstrate using playwright to automate [[End-to-end Testing]] of our web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (1), [[End-to-end Testing]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), scroll up (1)
> **Env Vars:** ctrl (2)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** known as (1), is a  (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Trust but verify: Testing, PRs, and debugging](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=0)** - [Instructor] In the last video we wrote some basic unit tests for our email validation system using Claude Code. In this session, we are going to go one step further. We will set up an end-to-end test for our landing page and the tool that we'll be using is called Playwright. It is a powerful browser automation library created and maintained by [[Microsoft]]. It is a great tool for testing the full [[User Experience (UX)|user experience]] of a web app including usability, performance and accessibility. So that's get started. First, that's look at the Playwright MCP server. As a quick refresh, MCP stands for model contacts protocol and this MCP server provides tools for our coding agent and the tool it provides is called Playwright. So to install this to Claude Code that's scrolled down and find Claude Code. Install in Claude Code, it says use the Claude Code [[CLI]] to add the Playwright MCP server. So that's copy this command and that's go back to VS Code. Right here, we can then first exit Claude Code by doing control C twice, that's paste the command here and press enter to install the MCP server. So you can see we have added STDIO MCP server Playwright with command and to resume our last Claude Code session,
>
> **[1:40](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=100)** we can use a command here called Claude dash dash continue. So that's continue from our most recent conversation. So let's copy this command and then let's go back to Claude code and paste this to continue from our last session. This way all of our chat history will be in the context. So let's press enter. And now you see the previous session history has been restored here. And also very importantly because we are at some steady state with our application that's commit all this changes into [[Git]] so we can easily refresh back when it's necessary. So let's ask Claude to commit all this to GIT. Please commit all of this changes to GIT
>
> **[2:46](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=166)** and we do see that Claude is able to recognize that there's no GIT ignore file without any commit. So it's going to ask to create some GIT related scaffolds. So that's add a GIT ignore file to ensure we only commit the file that is important to GIT. Saving all our changes into GIT is extraordinarily important, similar to how we should be committing our changes into our current branch in GIT when we write our own software manually. So let's just go through all these comments and right here we can see the benefit of Claude. Again here Claude is writing a very detailed comment message, which is very awesome. Here in the commit message we can also see it's co-authored by Claude. So that's commit everything with the message. So now the repository is initialized with a clean commit history and all of our current web app has been committed into GIT. Now let's start with writing [[End-to-end Testing]] with Playwright. Please help me run test on this website that we have just created. Make sure to test for usability, performance and accessibility.
>
> **[4:27](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=267)** Also verify that it looks good on both mobile and desktop. Summarize the results in a test results dot MD file so we can review it for later. Use Playwright for this think ultra hard on what to test. So that's issue this command and let Claude using Playwright MCP to do everything here. So now Claude come up with the command installing Playwright, create Playwright configuration file, write the usability test, performance test, accessibility test and responsive design test. And it will run off the test and capture the result. So let's continue and install Playwright here. So as you can see it creates some Playwright configuration files. We can manually visit the files here. It's Playwright dot config dot ts so we can look at what it's testing. Hmm, do we want to install the VS Code extension? Sure, why not? Let's go, install and let's go back here.
>
> **[6:01](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=361)** So this is the Playwright configurations that Claude has created and we can also see that Claude has created an end-to-end folder for right here, usability spec. And we expect it to create various different spec for Playwright test. After the usability test, it also created accessibility and performance testing specs for Playwright. Now all of the tests specs has been created for Playwright. It is now running all of the tests and capturing the results. And as you can see here, it's using chromium so it spins up its own chromium browser for all this automation. So one thing that's very impressive about this setup is now we enable Claude to do browser automation with Playwright. So if we visit the test results folder and look at the files, there is a bunch of web M files that we can view.
>
> **[7:19](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=439)** As usual, end-to-end test might take a while to run if you decide to run this on your own. All right, let's run this. And the new one is in 3001. All right, so here is part of the report that Claude code has run. So some of the test passed, some of test failed. So let's dive into one of this and see what's going on. Run test app. And there are also videos recorded for this. So let's see some of the screenshots it has taken. Okay, now it's done. If we scroll up to comprehensive testing, we see that Claude has created a test suite of 380 total test and five test files across different aspects. And if we scroll down, the details are in test result dot MD. So that's go to test result dot MD file and look at what it has outputted. So right now it says overall grade B plus 85 out of a 100. Some usability tests are failing and it also found some issues with links,
>
> **[8:54](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/trust-but-verify-testing-prs-and-debugging?u=76281980&t=534)** messages and functionality and scrolling. And it also made some recommendations. We can skip through the [[Representational State Transfer (REST)|rest]] but it produce a fairly comprehensive report and this demonstrates the power of enabling Claude Code to use the browser via the Playwright MCP for automated end-to-end testing. And that's it. We just built and ran a complete end-to-end test suite for our web app, all with the help of Claude Code and providing it Playwright MCP so it can use the browser to automate a lot of this testing. And in the next sections we will discuss more applications of how to use Claude Code to speed up our software engineering processes. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (10), [[End-to-end Testing]] (2), [[Microsoft]] (1), [[User Experience (UX)|User experience]] (1), [[CLI]] (1)
> **Env Vars:** git (10), mcp (9), cli (1), stdio (1)
> **CLI Commands:** git (10), find (1), make (1)
> **Prerequisites:** install (6), set up (1), setup (1)
> **Definitions:** is a  (3), is called (2), stands for (1)
> **Cross-References:** go back to (2), in the last (1), in the next (1)
> **UI Navigation:** scroll up (1), scroll down (1), go to (1)
> **Documentation:** spec (2)


### 4. Beyond Code Generation: AI for Code Understanding

[↑ Back to Table of Contents](#table-of-contents)

#### [Rapid codebase onboarding with AI agents](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=0)** - [Instructor] In the previous videos, we have demonstrated how to utilize Claude code and the pair coding patterns, including driver-navigator and ping-pong to build our web application. And we all know software engineering is not just about writing code, there's a whole lot about understanding other people's code and about writing documentations as well. In this video, we will explore how to use coding agent to onboard quickly to a large codebase. This is a very common use case in modern software engineering, whether you are joining a new team or maintaining a legacy system. We will focus on using Claude code to help us understanding the architecture of a monorepo by automatically generate useful diagrams and doing some Q&As. The example repository we have chosen is called Apache Superset. It is a data visualization and data exploration platform. Here is the website, if we quickly scan through the website, there are resources, Docker, there is a [[Helm]] chart, there is an SDK, A front end, some web socket, and this is likely a [[Python (Programming Language)|Python]] library and a bunch of tests. So this is a decent sized library, so that's try to clone this repository first to our local. Yes, this is definitely a decent sized library.
>
> **[1:35](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=95)** I mean, this codebase is around 340 megabytes. Now we have cloned this that's tried to open this repository on via code. So let's go File, open Folder, Superset. Let's open this up and that's again, create a terminal. My preference is put it on the right so we can have better interactions. And before we start, we will be utilizing a markdown language called Mermaid. Mermaid is a very popular [[Diagramming]] language that use a markdown-like syntax to create flow charts, sequence diagrams and more. It is a great way to visualize and summarize a [[System Architecture]]. So that's first ensure that we have the Mermaid extension installed. We will use markdown preview for Mermaid and trust publisher and install. Okay, now we are here. We can launch Claude here in this repository. And yes, proceed, we trust file in this folder. So now let's discuss another concept call subagent. From time to time, some of the task that agent can do is and can be spread out and run in parallel. And in those cases we can utilize
>
> **[3:08](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=188)** something called a subagent to handle individual task simultaneously or parallel at the same time to speed up all workflow. So in this demonstration, we will try to use subagents to generate Mermaid diagrams. So now let's do this command. Let's see, please look into this repository and help me understand its architecture and its core [[Control Flow]]. Write a swimlane diagram using Mermaid markdown syntax.
>
> **[3:50](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=230)** Please utilize subagents as much as possible.
>
> **[4:02](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=242)** So right now we see Claude code has set up a to-do list and it is executing the explore repository structure and identifying main directories. And first off, we can see that it created several tasks. One is explore repository structure. Another one is called analyzing tech stack, analyzing backend and analyzing front end architecture. And each one of them, we can see that it is executing at the same time using subagents. In this way, we can parallelize all of the exploratory and codebase understanding work and spread that work out across multiple different agents and they can execute simultaneously to greatly speed up our process and we can go Control + R to see some of the things that they are executing. So the first two subagents are done. The first one has done the explore repository structure task and the second subagent has completed the analyzing text task. And we are waiting for the last two subagents that's analyzing the backend and the front end architecture. It's almost done. Okay, so I think we need to ask it to export or write down the findings into a markdown file. So let's do that. Report the findings and diagrams in a markdown file.
>
> **[5:42](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=342)** Okay, so it generated the information in architecture analysis .md So let's open this up and do a command Shift + V to render the markdown file. As can read here, it documented the repository structure quite in detail and it documented the technology stack back end, front end and infra. And that CD command pattern. If we circle all the way down here, it does show the system control diagram. It is a little bit small, so let's try to make it bigger. So we have a client browser that goes into the real time layer and control and talk to the web server layer and input the data and talk to the application and some backend processing. So this is quite sophisticated. It store data in S3 buckets in a target database and in some meta database. And it also uses a [[Redis]] cache and salary workers in queue to do the backend processing. So we can also read through the [[Representational State Transfer (REST)|rest]] of the report to get a better understanding of the codebase and potentially ask very specific questions as to how we can optimize the codebase. So using coding agent this way, accelerate onboarding speed dramatically. Instead of spending days digging through the code manually, we can really quickly generate visual maps
>
> **[7:18](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/rapid-codebase-onboarding-with-ai-agents?u=76281980&t=438)** and understanding the architectures in minutes. This approach is especially powerful when working with legacy systems or with larger teams or very unfamiliar codebases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Helm]] (1), [[Python (Programming Language)|Python]] (1), [[Diagramming]] (1), [[System Architecture]] (1), [[Control Flow]] (1)
> **Definitions:** is a  (7), is called (2), is an  (1)
> **CLI Commands:** apache (1), docker (1), python (1), cd (1), make (1)
> **Prerequisites:** before we start (1), install (1), set up (1)
> **Env Vars:** sdk (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Generating diagrams for system comprehension](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/generating-diagrams-for-system-comprehension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/generating-diagrams-for-system-comprehension?u=76281980&t=0)** - [Instructor] In this video, we will dive even deeper into the code base to generate another commonly used diagram called entity relationship diagram to understand how the data model is being built up. So let's go back to clock code and let's say, please help us generate the entity relationship diagram and put it in a markdown file. Please ensure we know all of the primary keys and secondary keys. This is a common challenge in understanding the data model of the application, where very typically, we'll have to look into a whole lot of data models in the code and manually construct the data models of the application, either on paper or in our head. And with clock code, we can simplify this process by a whole lot. So as we can see here, it is again utilizing sub-agents to complete multiple different tasks at the same time. First is analyzing the data model, and the second subagent is working on extracting the relationship mappings. Okay, the ERD diagram is now generated. It's in Database_ERD.md.
>
> **[1:34](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/generating-diagrams-for-system-comprehension?u=76281980&t=94)** So let's go in here and view the file. And again, Command + Shift + V or Control + Shift + V if you are on [[Windows]] to preview the file and render them properly. Okay, so obviously this is a enterprise grade application with a huge entity relationship diagram, and all of this has been constructed out. These complex mermaid diagrams can be visualized sometimes on web application of your choice, but here, we get the gist of it. We have the primary key and all of the linkage between different tables. So with this, we can better understand the [[Data Modeling]] behind the whole application stack. And some of the other things we could use to better understanding the system includes a swim lane diagram, flow chart, and even draw out the diagram and flow chart for some of the workflows, including CICD or [[Data Processing]] or even cloud architecture diagrams if there are significant set of [[Terraform]] files in there. So now we have demonstrated how to utilize coding agents for rapid code base understanding and system understanding using diagrams. There are endless possibilities of how to use coding agents to make improvements through the application,
>
> **[3:11](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/generating-diagrams-for-system-comprehension?u=76281980&t=191)** including asking the coding agent to review the code and identifying optimization opportunities or refactoring opportunities. All of the typical software engineering workflow we can ask and collaborate with the agent to achieve. So yes, coding agents is not just about, hey, let's vibe code and generate some application. It is also here to help us and work with us every single step of the way in the software engineering processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Data Modeling]] (1), [[Data Processing]] (1), [[Terraform]] (1)
> **CLI Commands:** terraform (1), make (1)
> **Env Vars:** erd (1), cicd (1)
> **Definitions:** is a  (2)
> **File Paths:** database_erd.md (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 5. Best Practices and Avoiding Pitfalls

[↑ Back to Table of Contents](#table-of-contents)

#### [Software stack selection for AI agent success](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/software-stack-selection-for-ai-agent-success?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/software-stack-selection-for-ai-agent-success?u=76281980&t=0)** - [Instructor] Now we have demonstrated structure [[Vibe Coding]], a landing page with driver, navigator, and ping pong style pair programming, and explored deeper capabilities like code-based understanding and onboarding with AI. It's time to turn our attention to how we should think about our tech stack and architecture choices to improve it for coding agents. First, let's talk about selecting a software stack that works well with [[AI Agents]]. Now, as anyone in engineering knows, picking a stack can stir up a lot of opinions, but when it comes to working with [[Large Language Models (LLM)|large language models]], there is a practical guideline, stick with what's popular and well supported. If we take a look at the top programming languages on [[GitHub]], we can find [[Python (Programming Language)|Python]], [[JavaScript]], TypeScript dominating the charts, and you can understand our suggestion of sticking with what's popular is not a coincidence. Large language models have been trained extensively on public code in these languages, and they simply are more capable when working within these ecosystems. So if you are using Python with Fast API or building front end with [[React.js|React]] or back end with Node, you are in great shape. You will get far better performances from coding agents in this environment compared to something more exotic like Julia or Mojo,
>
> **[1:37](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/software-stack-selection-for-ai-agent-success?u=76281980&t=97)** which have far less data in the public training dataset. Also, keep in mind that coding agents do not handle proprietary in-house tools very well. They simply do not exist in training data. So unless your internal framework is open sourced or share a lot of the common patterns with public code bases, the agents will struggle, and fine-tuning a large language model to fully understand your internal systems is complex, expensive, and often unnecessary for many use cases. The key takeaway here is if you want your coding agent to be productive, meet them where they are strongest. This means use widely used languages, common framework, and open source architectures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[Python (Programming Language)|Python]] (2), [[Vibe Coding]] (1), [[AI Agents]] (1), [[GitHub]] (1)
> **CLI Commands:** python (2), find (1), node (1)
> **Env Vars:** api (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Monorepos: The AI coding agent's best friend](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/monorepos-the-ai-coding-agent-s-best-friend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/monorepos-the-ai-coding-agent-s-best-friend?u=76281980&t=0)** - [Instructor] Now we are going to dive into co-organization choice. That is a game changer, especially in the world of AI and [[Large Language Models (LLM)|large language models]]. It's all about using a monorepo. Monorepo makes it super easy for coding agents to find, edit, and understand our code. So what exactly is a monorepo? Think of it as one joint repository that holds a bunch of different sub repositories, applications, and packages all in one place. So instead of having your front end, your backend, and share libraries in separate [[GitHub]] repositories, they all live in a single unified home. A perfect example is the Apache Superset repository that we have explored previously. It is a complex repository, but everything is stored in one place. As we can see here, we have the Superset backend [[Python (Programming Language)|Python]] application, we have the Superset frontend application, and the embedded SDK, the test, and the build and deployment code all in one single repository. And this makes navigating the code base much, much easier for our coding agents. Now, why is this so important for AI coding agents? It all comes down to context and navigation.
>
> **[1:34](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/monorepos-the-ai-coding-agent-s-best-friend?u=76281980&t=94)** Monorepo plays directly into the strength of AI agent. Every service, every library, all the share schemas lives in one location. This means the coding agent can traverse the entire code base in a single goal. Imagine we are the agent. We rather have a single map to explore or do we want to find and stitch together clues from 20 different repositories scattered all over the place. That just creates so much overhead for us, and also for the coating agents. Another huge benefit is atomic commits. An agent can make a single commit that touches multiple layers of the stack from the data model to the API to the infrastructure. There is no need to synchronize commits across different repositories or coordinating pull request. And this keeps the agent's iteration loop incredibly tight and fast. And everything is unified. Our CI pipelines, our code search, our task orchestration, it's all in one place. This drastically simplifies the prompt that we need to feed the agents and reduces the number of hops in it to get information. Now, I know some of you might be thinking that, "Hey, doesn't using name monorepo come with its own overhead?" And that's correct. There is some overhead,
>
> **[3:06](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/monorepos-the-ai-coding-agent-s-best-friend?u=76281980&t=186)** but today we have a very healthy ecosystem of tools designed to manage monorepo effectively. Tools like NX and Learner are built to help us and our coding agents to navigate this large code base with ease. So to bring it all together, a monorepo will transform our entire system into one coherent playground for large language models. So if you are building an AI-powered application, start thinking in monorepos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[GitHub]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), apache (1), python (1), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** sdk (1), api (1)
> **Analogies:** think of it as (1), imagine (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Managing proliferating rules files effectively](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/managing-proliferating-rules-files-effectively?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/managing-proliferating-rules-files-effectively?u=76281980&t=0)** - [Instructor] In this video, we are going to dive into one of the key aspect of structured [[Vibe Coding]]. First, let's look into how we can structure our CLAUDE.md file for context engineering. The CLAUDE.md file serve as a central place where we store the important information we need for the coding agent. Typically, we keep the CLAUDE.md file in the root directory for easy access. Now, one single file can sometimes be too large and just like what we do with code, we can break down our documentation into multiple different markdown files, like having separate files for README, contributing guidelines, and a license. As an example, right here we have CLAUDE.md in the root directory, We could potentially also create a CLAUDE.md file in the library folder, so we can provide library-specific information. And sometimes, we can even be more granular and break down further into smaller MD files, and we can then refer to those files by using the @ command on Claude Code to put that file into context.
>
> **[1:33](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/managing-proliferating-rules-files-effectively?u=76281980&t=93)** And this way, we can better and more effectively managing our context. And of course, if we need to update a memory file, we can add to them directly inside our editor here. Next, let's talk about terminal commands. Claude Code, the coding agent, have direct access to our terminal, so it is very important for us to set up permissions to allow certain command to be executed and deny some of the more dangerous commands that we would use. And the way we do that is settings.local.[[JSON]] for local development or settings.json if we want to commit a file to the repository, so the same setting could be shared with all developers that's working in the same code base. We do also want to pay special attention to some commands that fetches data from the internet such as curl or wget. Next, let's discuss about MCP servers. MCP servers, they are plugins to our coding agents and as a best practice, we should be sharing the commonly used MCP servers across the whole code base into .mcp.json file in the .claude folder. This way, similar to how we can share settings
>
> **[3:07](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/managing-proliferating-rules-files-effectively?u=76281980&t=187)** for all developers working on the same code base, we can share the same list of MCP servers for everyone. As a summary, remember we need to set up CLAUDE.md files to better manage and share context, and we want to set up allowlist and denylist for terminal commands, and we should set up .mcp.json to sync MCPs that's used in the code base for better collaboration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Vibe Coding]] (1)
> **Env Vars:** claude (6), mcp (4), readme (1)
> **File Paths:** claude.md (6), mcp.json (2), settings.local.json (1), settings.json (1)
> **Prerequisites:** set up (4)
> **Tools:** terminal (3)
> **Analogies:** just like (1), such as (1), similar to (1)
> **CLI Commands:** curl (1), wget (1)
> **Best Practices:** best practice (1)

#### [Common vibe coding pitfalls and their antidotes](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/common-vibe-coding-pitfalls-and-their-antidotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/common-vibe-coding-pitfalls-and-their-antidotes?u=76281980&t=0)** - [Narrator] In this video, we will go over some common pitfalls when working with our coding agents and share a few practical anecdotes to help you avoid them. First and most important tip, use it. One of the most common mistakes is jumping into [[Vibe Coding]] without creating a new dev branch. So before we begin, either ask the agent to start a new branch or do it manually. This ensures your man code base stays intact and you can easily track or revert changes. So as an example, in our demo application, we should be creating a dev branch to track all these changes. So let's do that now.
>
> **[0:57](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/common-vibe-coding-pitfalls-and-their-antidotes?u=76281980&t=57)** And the second pitfall is that agents can get stuck. Sometimes the agent might stall or fail to complete a task, whether it's generating a feature, resolving an error, or trying to scaffold in a module. So instead of trying to fix its mistakes by prompting it more to revert some of the changes, it is often better to go back to a clean state and restart the task completely. This will give it a blank state within its context. Remember we talk about context window and context engineering. It is super important to provide a clean context so the agent doesn't have to circle back and traverse through all its mistakes. Then we can provide it a more clear and more descriptive prompt to see if it can complete the task. You, as the navigator, we'll gain better insight to where the failure happens and possibly spot the errors so we can add the appropriate changes to the prompt and/or the guardrails. Now we have committed the code that's pushed this to our [[GitHub]], and once we pushed it to GitHub, it is empirical we have to run our standard DevOp checks to ensure no secrets has been committed into our code base,
>
> **[2:36](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/common-vibe-coding-pitfalls-and-their-antidotes?u=76281980&t=156)** ensure our dependencies are secure and everything complies with our engineering teams' security posture. This might feel like standard engineering practices, but it is very easy to overlook in a faster pace and agent-driven development cycles. And finally, hallucinations do happen. Sometimes large language model can generate test cases or logic that look synthetically correct, but makes no sense functionally. So always remember to review, pull request, line by line to ensure the code is sound. Do not assume correctness just because the code compiles or the test passes. So to recap, start every vibe coding session with a fresh [[Git]] branch and don't hesitate to restart task when agents get stuck. Do not try to get the agent to code itself out of a paper bag, just restart a task. It will make its life easier with better context, and always run your standard DevOp and security checks, and always review agent-generated code with a critical eye. Delegate, don't abdicate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vibe Coding]] (2), [[GitHub]] (2), [[Git]] (1)
> **CLI Commands:** git (1), make (1)
> **Tools:** github (2)
> **Cross-References:** go back to (1)
> **Best Practices:** remember to (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The future of AI-assisted development](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/the-future-of-ai-assisted-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/the-future-of-ai-assisted-development?u=76281980&t=1)** - Congratulations on completing the structured [[Vibe Coding]] course. You have taken a significant step into the future of [[Software Development]]. Throughout this course, we have demystified vibe coding, moving from hype to practical application. You've learned how to effectively partner with AI coding agents, like Claude Code in VSCode, using a structured approach that maximizes their potential while minimizing risk. We have covered everything from setting up their environment and selecting the right tools to employing advanced techniques, like [[Test-Driven Development]], and using AI for rapid onboarding to existing codebases. Remember, the principles you have learned aren't just limited to one tool. They are applicable across the entire landscape of AI coding assistants. The key here is to think of the AI as a powerful pair programmer. You are the navigator, providing the direction and the critical oversight. So what's next? I encourage you to take these skills and apply them to your own projects. Start with something small, perhaps a personal website or a simple utility, and practice your interaction with AI. Don't be afraid to experiment, and as you grow,
>
> **[1:36](https://www.linkedin.com/learning/structured-vibe-coding-with-ai-coding-agents/the-future-of-ai-assisted-development?u=76281980&t=96)** remember the importance of verification. Always review the code and use automated testing to ensure quality and security. If you would like to continue the conversation or share your projects, please connect with me on [[LinkedIn]]. Thank you for joining me here in this journey. I am incredibly excited to see what you will build. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vibe Coding]] (2), [[Software Development]] (1), [[Test-Driven Development]] (1), [[LinkedIn]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Han-chung Lee]]

## Path Context

### In [[Learn Vibe Coding- Build Apps with AI-Powered Coding]]
← [[Build with AI- Beyond Pair Programming with AI]] | **5 of 5**

## Appears In

- [[Learn Vibe Coding- Build Apps with AI-Powered Coding]]

---

[↑ Back to top](#)