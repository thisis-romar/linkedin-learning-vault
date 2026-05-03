---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-prompting-with-github-copilot
url: "https://www.linkedin.com/learning/advanced-prompting-with-github-copilot"
level: Advanced
updated: 11/25/2025
learners: 2356
skills:
  - Conversational AI
  - AI Prompting
  - Artificial Intelligence (AI)
  - GitHub Copilot
exercise_files: true
github: "https://github.com/paiml/advanced-prompting-with-github-copilot"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFYqFXrKQ13pw/learning-public-crop_675_1200/B4EZq30MxJKYAY-/0/1764020506467?e=2147483647&amp;v=beta&amp;t=JoLTUbDk-I2rgJUEmOymE29Fq6P-C1FTVDhMNB-LKkQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]'
next_courses:
  - '[[GitHub Copilot for System-Level Development]]'
path_nav: '[{"path":"GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development","position":1,"total":4,"prev":null,"next":"GitHub Copilot for System-Level Development"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/conversational-ai
  - skill/ai-prompting
  - skill/artificial-intelligence-ai
  - skill/github-copilot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20Prompting%20With%20Github%20Copilot.md)

![Advanced Prompting With Github Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQFYqFXrKQ13pw/learning-public-crop_675_1200/B4EZq30MxJKYAY-/0/1764020506467?e=2147483647&amp;v=beta&amp;t=JoLTUbDk-I2rgJUEmOymE29Fq6P-C1FTVDhMNB-LKkQ)

# Advanced Prompting With Github Copilot

> Explore advanced techniques in prompting with GitHub Copilot. Begin with foundational knowledge, transitioning from basic interactions to mastering conversational AI and multiturn prompts. Discover how to iteratively refine your prompts, then learn to analyze your conversational approaches for better results. Gain expertise in providing comprehensive context from multiple files and leveraging open

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot) | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course overview](#course-overview)
- [**1. Foundations for Advanced Prompting**](#1-foundations-for-advanced-prompting) (4 videos)
  - [From basic to conversational AI](#from-basic-to-conversational-ai)
  - [The power of multiturn interactions](#the-power-of-multiturn-interactions)
  - [Chat inputs](#chat-inputs)
  - [Chat modes](#chat-modes)
- [**2. Mastering Conversational AI**](#2-mastering-conversational-ai) (5 videos)
  - [Crafting multiturn prompts](#crafting-multiturn-prompts)
  - [Iterative refinement techniques](#iterative-refinement-techniques)
  - [Challenge: Refactor with conversation](#challenge-refactor-with-conversation)
  - [Solution: Refactor with conversation](#solution-refactor-with-conversation)
  - [Analyzing your conversational approach](#analyzing-your-conversational-approach)
- [**3. Advanced Context Scaffolding**](#3-advanced-context-scaffolding) (5 videos)
  - [Providing context from multiple files](#providing-context-from-multiple-files)
  - [Leveraging open files for accuracy](#leveraging-open-files-for-accuracy)
  - [Challenge: Generate code from API docs](#challenge-generate-code-from-api-docs)
  - [Solution: Generate code from API docs](#solution-generate-code-from-api-docs)
  - [Working with unknown codebases](#working-with-unknown-codebases)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course overview](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980&t=0)** - Welcome to this course for advanced prompting. We'll be using [[GitHub Copilot]] to learn some techniques, patterns, and workflows that will help you get a better answers from tooling like GitHub Copilot. These patterns, these ways of interacting with AI tooling like GitHub Copilot will allow you to get very, very good answers. But not only that, whenever challenges are met, whenever the responses are not quite to what you need and solve the problem that you're looking for, you will learn how to apply these techniques to improve in the answers and get these building blocks that will help you go faster and implement solutions in a more robust way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (3)
> **Tools:** github (3)
> **Speakers:** - welcome (1)


### 1. Foundations for Advanced Prompting

[↑ Back to Table of Contents](#table-of-contents)

#### [From basic to conversational AI](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=1)** - [Instructor] Within Visual Studio Code and [[GitHub Copilot]], you have very basic interactions. And in here we have a session with Visual Studio Code and simple interactions will, well, get you so far. One of the things that I tend to do is to explain that simple questions, simple prompts, will get you simple answers, or a different way to put it, and here I'm going to create a new file, and I'm going to call it example. I'm going to do this with [[Python (Programming Language)|Python]], but it really doesn't matter what it is. You see that you can get a suggestion saying "Generate code" or "Select language", "Start typing to dismiss or don't show this again". It really doesn't matter. Now, the current way of interacting with AI [[Microsoft Copilot|Copilot]] is with this new chat window that will be open by default. You don't necessarily need to be using this, as we'll see, there's other ways of interacting. But let's add an extremely simple prompt. Now notice that we already have a little bit of a context here. There's tons of different features, and these features tend to change as time goes by, as with every single piece of software. But let's just try something simple. And let's say I want to create an example, HTTP API. And I'm going to add just a little bit of detail and I don't want any external dependencies.
>
> **[1:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=100)** So very generic, very simple. And let's see what we get. Like we don't have anything here. You can create a simple HTTP API in Python using only the builtin. That sounds correct. No externals. Would you like the example to be added to example.py? So in this session, I'm getting questions back and you know, that may sound okay, but the problem is that I did a very simple prompt. So now let's enhance this prompt and let's be more accurate and then let's be more descriptive as to what is it that we want. So what I did there was like I hit the up arrow and I'm going to say, "I want to create an example HTTP API, I don't want any external dependencies." It must use Python standard library. It all has to fit in this example.py file. And please go ahead and create the implementation. And I'm going to run this and it's going to be a little more specific. And let's see what we get back. And look at this. We already have something that is going on. Now I could have gotten even more specific and actually implement headers and do the responses and kind of like do all kinds of different things. Even here we have 200s,
>
> **[3:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=192)** 200s and 404s. So some HTTP responses, and that is fine. Now notice the differences. I went from a highly generic, very simple problem to something, well, a little bit more specific and more complete. So that is the difference that you must be aware when you start, when you're not getting exactly what you need. Well, you know, AI systems are not going to be able to read your mind. They require context as we will see. But in this case, it is useful that when that context is not present, when the system doesn't entirely understand what is it that you want, well, you have to step it up a notch and create a more context in the way of explaining what exactly is going on. So this is good enough. You could actually go and accept this and you could say keep or undo or actually start refining this as we'll see later on, where you can add more to this session, this chatting session and to try to get more. For now, this is good enough and I think it's a good overview on what happens when you do something highly generic and very simple to a little bit more explicit with more details and more context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[GitHub Copilot]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Env Vars:** http (4), api (3)
> **CLI Commands:** python (3)
> **Tools:** visual studio (2), github (1)
> **File Paths:** example.py (2)
> **Analogies:** kind of like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [The power of multiturn interactions](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=1)** - Multi-turn interactions with AI refer to the fact that I can use this conversation that I've had as a source of truth. So, you can keep iterating, you can keep expanding on what you're doing. But all in all, this is still based on, like all of these conversations is part of that context. So this multi-turn it becomes like this, this whole conversation. Now, in this case, you can see that the HTTP responses are added. So you have 302, 303, 304, 305, all the way to 308. And basically talking about some of the redirects and some of the proxy responses that we're getting. Now this is fine, but what are some of the challenges with this approach? And what are some of the things that you should be aware when you're dealing with a multi-turn response or a multi-turn interaction, or to put it simply a chat session? This might be fine. What if this source of truth deviates from exactly the thing that we want to do? So in this case, we started with the premise that I want to create an example HTTP API, and I don't want any external dependencies. What if I want to do something slightly different? Well, if I go ahead, like, let's just do something slightly outrageous here. I started with [[Python (Programming Language)|Python]] and now I say, well, you know what?
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=97)** Let's just do something a little bit different with [[Rust (Programming Language)|Rust]]. And so instead of adding here and saying, what I really wanted was Rust, then the problem with that approach is that you have to see this source of truth as contaminated. It already has all of these things. And this is not very good. So instead there's a couple of options. You can actually create a new chat with this plus button right here. You have the option to show all of the chats. Now I have edits here, so I would say keep and continue or cancel. And the important thing is that you can actually control what is going on. So let's just assume that this is fine. So I'm going to say keep. Now this is present. I'm going to make sure that my example.py is saved. And I'm going to click on open a new chat. Now the important thing with this is that now I can start essentially from scratch with a new source of truth. Now, this new conversation will not have that previous context that you can see here was this one right there, right? So you can toggle between one or the other. The reason why I got that prompt before was because I had unsaved changes. I had not applied those changes that were coming in. And in this case, well, I've accepted and I can go to the new chat. And in the new chat I can have something
>
> **[3:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=189)** well slightly different. I can say even things that contradict that original chat and start from scratch. This is useful again to have to avoid that cross-contamination, that contamination of what was the initial chat and where I want to go. So let's just assume that all of these responses are okay. This file has too many 300 HTTP codes. Reduce them to make them the most common. Next re-implement everything in Rust instead of Python. So I'm going to something that is slightly different, slightly outrageous, like I was saying in the beginning. And you can see that now it's actually going ahead and creating that main.rs which is a Rust. I'm going to say yeah, sure, keep, that sounds fine. And now we're getting something like a simple API in Rust and it's actually going to re-implement everything in Rust which is, again, slightly outrageous, but it exemplifies what I'm trying to say where this multi-turn interaction might get polluted. So you get this new session and this new ability to actually do something completely different and maintain the type of source of truth, the type of quality and features and constraints that you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (6), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** http (3), api (2)
> **CLI Commands:** python (2), make (2)
> **UI Navigation:** click on (1), toggle (1), go to (1)
> **File Paths:** example.py (1), main.rs (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - multi (1)

#### [Chat inputs](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=0)** - [Instructor] There are different ways where we can convey exactly what we want to [[GitHub Copilot]] and [[Large Language Models (LLM)|large language models]] and assistive AI tools in general. So in these cases, specifically with Visual Studio Code and GitHub Copilot, we have, well, several different ways. The main one, the principal one, the one that opens by default when you open up a new session with Visual Studio Code is this one with a chat. Back in the beginning when GitHub Copilot was introduced to VS Code as GitHub Copilot, we didn't have a chat. So all we had was, well, something different that I'll show you in a second. But so far what you have here is a chat session where you can add things here. So we could say things like, add a little bit of documentation to this main function, right? So we could say, you know, this is a [[Rust (Programming Language)|Rust]] project, it looks okay, it gives you a short explanation, that's fine. So that is one, and you might be used to this one. It's commonly now used because again, it's a default chat interaction that you get. So I'm going to say, keep, that sounds fine. But you might be like, "Well, I don't have what developers call real state." There's a lot of things going on. This is too distracting. I don't want to have a chat session. I want to keep going
>
> **[1:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=93)** and I don't want to be distracted by this. Okay, that sounds great. So what are some of the other ways that you can interact? Well, let's add a more complicated file. This only has about five lines. Let's add this one, which is the lib.rs. So this one has, let's see, 222 lines, so that looks a little bit more complex. So this is Rust. It really doesn't matter what programming language it is, because what I'm trying to demonstrate here is some of the patterns. So what are some of the other ways that you can input something here? Well, you could actually just start typing. So in this case you have, this is a run function, and in Rust, one of the ways that you can add documentation is by adding triple slashes. So I'm going to do a triple slash here, and automatically we get that suggestion, which is called ghost text in Github Copilot. That suggestion, in this case, that takes the parts options as input, is ghost text, the one that I just accepted is the one that I put there. So I can keep doing tab and I'll keep accepting those as input. So I think that looks pretty good. Now that is one way of doing things, and that's fine. Now in this case, this project does a search and replace. I want to actually create a new function that, let's just say does a recursive pattern matching on paths.
>
> **[3:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=193)** So this will be kind of like a chat, kind of like a request that I'm doing. So now I can do pub. And just by typing pub, you will see this is a way of doing functions in Rust, there are publicly facing. And then you'll see that this gets suggested. So that's good. Now you might get something like this where we found a reference to public coding, a recent suggestion, that sounds fine. You know, this is okay. That's just a warning. You can be okay with that or you might not be okay depending on your organizational settings and maybe the place where you work, if this is open source, perhaps not a big problem, up to you to decide what you want to do. Alright, so that's another one. So what is something else that you can actually do here and what's this other way? Well, this one is called inline chat. So, in this case, I can say, "Hmm, you know what, I am not entirely sure what's going on here. So I can do CTRL+I on [[Windows]] and [[Linux]] or Command+I in OS10, and this inline chat will pop up. So I can say, "I am not entirely sure what is going on with this push call." So in this case, I'm not opening up a new chat window. This actually starts popping value over here. And one of the things that I can do here is, and I'm going to put this over to the side, is I can click on view in chat, so it can push all that conversation, that might be too verbose
>
> **[4:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=287)** and send it over to the chat. So this is definitely a thing. You can actually rerun this whole interaction, you can just close it. But let's click open in chat. And then you can have a chat session where you can refine and ask more questions and do some other things. So in essence, those are the principle, the more core ways that you can interact with these different ways of inputting the things that you want to do when you want code generated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (5), [[Rust (Programming Language)|Rust]] (4), [[Large Language Models (LLM)|Large language models]] (1), [[Windows]] (1), [[Linux]] (1)
> **Tools:** github (5), visual studio (2), vs code (1)
> **Definitions:** is a  (4), is called (2)
> **Env Vars:** ctrl (1), os10 (1)
> **Analogies:** kind of like (2)
> **File Paths:** lib.rs (1)
> **UI Navigation:** click on (1)
> **Warnings:** warning (1)

#### [Chat modes](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=0)** - [Instructor] One of the things that might be slightly overwhelming is these different chat modes. Now, I understand that this looks pretty crowded in here, and we've had, like, a session where we've asked a few questions. None of this is important right now. Let's just focus on these chat session, specifically right here below when we can change the mode. Now, this is changing. Perhaps by the time that you see actually this video, maybe this won't be called a mode or a chat mode, but more of like an agent mode. That's because [[GitHub Copilot]], and [[GitHub]] in general, is moving more towards agents. So if I click here, you will see that there's a different mode. So we have Agent, Ask, and Edit. Now, again, probably by the time that you see this video, this will be slightly different because things are shifting more to agents. And this will be called the Edit Agent, the Ask Agent, and you can actually add your own agents, custom agents, and this will stop being called modes. But behind the scenes, they're the same thing. So let's talk about the main differences for the ones that you get by default, in this case, the Agent, let's start with that one, because that was the one that was selected by default. In the Agent, and one of the main things about an agent is that when you're interacting with these,
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=97)** it has the ability to do more than just create some code. So, sure, you can say, "Generate a function that does, you know, something interesting," and then it will generate the function and that won't be a problem. But perhaps you want something that does many different things. And, in that case, you could say, you know, if we go back in time to where GitHub Copilot was just starting out, you would get the single-task interactions, not multi-file. In this case, if I say, for example, "I want to add a test to parse_glob_pattern, and then run some tests and validate the project actually builds correctly without warnings." So, in [[Rust (Programming Language)|Rust]], we can compile, we can check warnings. So I'm adding several different things. I want to add a test, so I'm going to generate some code. I'm going to run some tests, so I'm going to execute a command, I'm going to validate the project actually builds correctly without warning. So there's a lot of different things here. In the past, you weren't able to do that. That's what the agent mode allows you to do, to do many different tasks, many different things within the same prompt. So if actually if I run this, you will get probably a thing that will do several different things. So in this case, it's creating some to-dos, which is kind of like a process, adding the test, it's going to retest, it's going to do everything in lib.rs,
>
> **[3:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=190)** it's creating the code. That's one thing that I asked. And then, it tells me, "Hey, do you want to run a command?" It's like, "Sure, like, why not?" I can allow it. I can say, "No, I don't want to run a command." In this case, it is running. "Do you want to build"? Like, sure, "I want to allow." I want to allow that build, I want to see what's going on, and it's executing those commands for me. So that is fine. We can actually keep going. You can see there's a few things that it's complaining about. It is fine, we can go back and forth, and then we can decide what is it that we want. All right, so that's why I'm going to say keep, and skip, and just stop with this interaction, and say, you know, this is fine. So what are some of the error modes? Well, the error modes, I'm going to close this terminal. The error modes or they are agent modes, or they are agents, if you're seeing this later on, will ask, will never execute anything. It's just mainly, I'm going to create a new session here for the ask, and it's never going to do anything about it, any changes to the file. So I can say, I can do, you know, this selection and I can say, you can see automatically the context is lib.rs, lines 1 to 14, and I can say, "Not sure what is going on here. Can you add a new test?" So ideally, and usually, the ask will not generate,
>
> **[4:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=287)** will not insert that code. In this case, it's generating because I'm asking it. So it's more of like doing a back and forth. Imagine this is more of like a meeting with someone else where you're asking questions and receiving questions. Now, this is different, because if you don't want to have, like, that back-and-forth interaction and you want to actually do something like editing, well, you would change here, in this case, you can get something like a popup that will say, "Hey, if you change this mode, you will have to start a new chat session." So you'll lose this context. Well, quote, unquote, "lose," not really lose anything, because you can come back. So I'm going to say Yes, and everything gets empty, right? So I can say, "Extend the test to get more coverage," right? So now, instead of going back and forth and saying, "Hey, do you want this? Do you want the other thing? What do you think about this process or that process?" Then the changes will happen right here as they'll suggest. So that's an overview of the different modes and the different things. And you can see how all of this is changing and it's applying the edits, and it's doing natural changes on the lib.rs file. So that's an overview of what are the differences, and when you might want one versus the other one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (2), [[GitHub]] (1), [[Rust (Programming Language)|Rust]] (1)
> **Tools:** github (3), terminal (1)
> **Analogies:** for example (1), kind of like (1), it's like (1), imagine (1)
> **File Paths:** lib.rs (3)
> **Code Identifiers:** parse_glob_pattern (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 2. Mastering Conversational AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Crafting multiturn prompts](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=0)** - [Instructor] When crafting multi-turn prompts, you have to make sure that, well, you define them correctly. In this case, I want to make sure that I have proper test coverage. Again, the programming language and the tooling, it's irrelevant. We're going to be relying on [[GitHub Copilot]] to help us out here. In this case, I want to make sure that I have the right test coverage. So in this case, I want you to introduce a test coverage workflow that will allow me to see what the coverage is. Like right now, I have no idea what that may be. Run the test and ensure the coverage is above 50%. So this would be certainly a system command, like a terminal command. Finally, update the README. So that's editing some files. So there's a mix of different things. It doesn't need to be a mix of different things. In this case, it just happens that it is. I'm using agent mode. Now, if you were only making changes to a file or set of files, perhaps edit will be a little bit better, but agent sounds like a good way to do this. So I'm going to hit send and I'm going to see what are some of the things. And you can see that there's some to-dos. It's crafting the to-dos. Introduce test coverage workflow. That looks like a sensible suggestion. I'm just going to allow it. You have control into allowing that or not. It seems that there's a way to run some of these commands with [[HTML]]. That sounds okay to me.
>
> **[1:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=92)** I'm happy to just accept anything here that might help me out. So what it seems that is happening here is that it's producing a an HTML report on the output. And we can see here tested total lines, source. We have 39 out of 117 and main.rs is zero. So 32% coverage, that's not very good. Now we went ahead and updated the README and I'm going to say that looks, cargo test and checking test coverage. It uses this project. That looks correct to me, so I'm going to say keep. And it told me that the coverage is now 32. Now that is multi-step or multi-turn prompting, right. But what we have here is something that got us to a point, but not exactly with what I was looking for. So some of the things that I was looking for, let's just actually go ahead and check. So I wanted to say, run the tests and ensure that coverage is above 50%. So it definitely ran the tests and executed them and that looks correct, but are they above 50%? Let's take a look here. The coverage is currently 32%, which is below the 50% target. Developer instructions for running, yeah, but that is not what I asked, right. I asked something slightly different. So in this case, the next step, other than just asking for something,
>
> **[3:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=188)** is to actually iterate and go back and forth to what you originally crafted. The whole history here is still useful because this will be used as context, as you make progress and as you try to refine or iterate over responses that, although it gets you, in this case, I would say perhaps even like 80, 85%, maybe even 90% close to what I wanted originally, but not quite there. So we'll see next how can we make sure that this back and forth is still useful to us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[GitHub Copilot]] (1)
> **CLI Commands:** make (5), cargo (1)
> **Env Vars:** readme (2), html (2)
> **Documentation:** the readme (2)
> **Tools:** github (1), terminal (1)
> **File Paths:** main.rs (1)
> **Speakers:** - [instructor] (1)

#### [Iterative refinement techniques](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=1)** - [Presenter] Okay, so, what we have here is multi-steps asking for adding coverage and making sure things are okay, but we didn't get exactly where I wanted, and we have coverage of 32% and I asked 50%. So, whenever this happens, it, well, we have to say, well, I asked specifically for you to help me out get at least 50% coverage. Please add relevant tests to get to at least 50% coverage. Now, additionally, I don't know why it thought it was a good idea to open up [[HTML]]. I don't need HTML. I am fine with just text report. So I'm going to say, please do not report on HTML when running tests, keep it with text. So I'm still in agent mode. I'm refining. I'm iterating over what happened here. Like the session provided me some output. Now, I'm iterating over this, and this is now what I want is just to make sure that this report is fine, and it will help me get to the next stop. So, now, it's making the edits to live that array. Well, it's actually reading that, and it made 71 additions, so I don't know what the additions are,
>
> **[1:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=96)** but let's just run the tests again. It made one change to live that array, it seems. So, let's actually do keep, perhaps, we needed to see. Yeah, so see, I think, one of the problems was that I didn't accept the changes. So, let's just allow that and let's just try it again. So, you're then again, you're going into this kind of like a loop, right? We're going back and forth and in this case, I didn't need to even accept this. It actually just saves the file as it is for me. So, this is an important feature actually because it allows me to see exactly the, not only what change in the files, if I go here to leave that array, you can see test parse args with a glob. It actually try to remove that, and that's what made these correct. So, this looks correct, but did you see how there was a back and forth where things were not exactly quite to my liking or quite to exactly what I was asking? Well, this is a pretty important step and iterative process, like [[Large Language Models (LLM)|large language models]] in general, this is not specific to [[GitHub Copilot]]. Sometimes, not get you exactly to where you want them. And I keep this removal of an actual test. And the way to handle this is just going back and forth, iterative, and getting to a point where you want to be. So, some of the things here
>
> **[3:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=192)** that are useful in this iterative process is also, perhaps, given extra context. So, one final part of what I want to show you is when things are exact, not exactly what you want, and you want that extra context. What I did was I went to the tarpaulin page, the [[GitHub]] page, and grabbed the documentation. So, what I'm going to do is I'm going to ask, are there any other recommendations for testing and coverage based on the documentation from the tarpaulin project? And then I'm going to paste that, look at that. So, I'm going to paste that extra context and see if that will give me anything back. So, in this case, oh, ignore unwanted code in coverage. That sounds like an interesting step, like I had not considered that. Like you might not want to include. So, for example, main sounds like a good one. So, if I go here, well, sometimes it's tricky to do that one. We can say insert at [[Cursor]] and look at that. I am pretty sure that we could, well, that is not exactly what I wanted, right? So, what I wanted was like this. So, if I say safe, and I'm pretty sure if I run this again, it should increase the coverage above 58% because now, main shouldn't be catching up.
>
> **[4:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=288)** So, let's take a look. Look at that, 60%. So, I think, it's good. So, you have that extra thing that you can do, or you can interact with the agent mode, but passing that extra context, that might give you extra information. Again, this is iterative, and you can go back and forth and getting exactly to where you want to be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[GitHub Copilot]] (1), [[GitHub]] (1)
> **Env Vars:** html (3)
> **Documentation:** the documentation (2)
> **Tools:** github (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Challenge: Refactor with conversation](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=0)** - [Instructor] What we have here is a function that I find very problematic. What are some of the things and what are some of the problems that I see with this? Well, let's start with the problem that the function says that it's going to read a file. But if you start going through the function, you will see that it actually is doing some writing. It actually creates a writer, it produces a temporary file. You can see here that the temporary file is produced there in the, or defined there in line 183. And then it actually writes something back to it. So the problem with this function, not necessarily that it's quite complex. And what we're going to be doing right now is we're going to do a little bit of refactoring. Now, one of the patterns, one of the things in software engineering that is useful is to have separation of concerns. Basically, the responsibility of the function, of the piece of code, my preference is to have a single responsibility. When you have a function that says, well, this is a liar function to start with because it says it's going to read a file, but it's doing a little bit more than that. So how do we tackle this? Like, so, and again,
>
> **[1:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=94)** it doesn't matter what programming language this is. It might be slightly different for you. So in this case, we have something here. We want to make sure that, you know, we want to refactor this. What are some of the steps? So what we're going to be doing is we're going to put our [[Cursor]] right there in the read file function. And then we are going to create a new chat session. So in here we're going to do, we're going to use a slash command. The slash commands are kind of like really useful features of [[GitHub Copilot]] that allows us to make use of certain features that will prevent me from having to actually type everything. So in this case, I'm going to say, explain. I don't want to use workspace, which that's a different feature there. Explain. And now, because like I don't want to rely specifically on GitHub Copilot figuring out exactly what I need to do, by selecting the function, now that's part of the context. So explain, try to tell me what are the potential challenges with this function. So I selected the function, I know what the context is, and I'm going to use GitHub Copilot to try to craft a prompt that will allow me to do some actual refactoring.
>
> **[3:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=188)** All right, so this completed, there's several different things here. Let's see if it actually mentions the thing that I'm worried about. But potential challenges and issues with the read file function. Line matching logic, maybe replacement logic, maybe a thing, user interaction, perhaps preceding. Temporary file handling, function writes to a temporary file and then persists it, but it does not replace the original file. Maybe, I mean, see, it doesn't really go into the actual thing that is a problem for me. So I want to refactor this function. My main problem is that the function says it reads a file, but it is also writing to it. Create me a plan as a prompt so that I can refine it and use it to actually get what I need from the separation of concerns. So with this, I'm going to instruct [[Microsoft Copilot|Copilot]] to try to separate exactly what are some of the things that I need and what are some of the problems that I have. So let's take a look. Refactoring plan, separation of concerns for file reading and writing.
>
> **[4:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=281)** Rename and split functionality. Rename the current file. Create two distinct functions, that sounds correct. Introduce a processing function. Main workflow. Your main logic, use the following workflow. User interaction, apply the change, error handling, and testing, and benefits. So once you have these response from Copilot, then you can actually go ahead and analyze exactly what you need. I think this looks okay enough, and we can actually send this and we could actually refine it, make some changes, or send it over to the agent here and go ahead and start a work. So I can say, this plan looks great, please split up the function and split up the function and do the work. So this is going to take a while and we'll wait until the agent produces all of the work, complies with everything that I'm asking and come back to check the result. Great, so this completed. The function has been split into three clear responsibilities. Read the lines, process the lines, and write the lines. That sounds okay. If I wanted to have a little bit more refinement, I could just go over the results and say, yeah, this is not quite what I wanted. You can now [[Jetpack Compose|compose]] these functions in the workflow. But do you see that it is missing the tests? I'm okay with this, but the prompt had testing, right. Write unit test for each function. It doesn't have the test. How do I know if this generation looks okay? I mean, it looks okay.
>
> **[6:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=374)** How do I know if it actually works? Well, tests are missing. So that's an opportunity for improvement and refinement of the results that we got.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (3), [[Microsoft Copilot|Copilot]] (2), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** make (3), find (1)
> **Tools:** github (3)
> **Definitions:** is a  (3)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Refactor with conversation](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=0)** - [Presenter] So we have a result here from our interaction with [[GitHub Copilot]]. We have three new functions that are, that separated the concerns that I was looking for, but this is not exactly what I had in mind. Whenever you are getting a result from an agent, a specific model that you've picked, and you're getting some code back, there are certain things that you might want to be interested in analyzing and making sure that these are actually okay and good. So you have to add a pattern. I mean, you have to think and work as an engineer, like as an actual process, engineering process, where you'll have to apply certain things to verify things are actually correct. So, in this case, we want to make sure that this is okay. So, let's just actually make sure that, well, this is okay. So, I'm going to ask the agent to produce a plan, produce a plan to ensure the correctness of this code you have generated. It looks okay, but I want to ensure [[LinkedIn]] testing and that this code actually compiles. Now, in this case, this is [[Rust (Programming Language)|rust]]. So I have to compile, not that I have to, but like, ideally, if I'm going to submit this as a production code, I'm going to have to compile,
>
> **[1:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=94)** like the process might be slightly different for you. If you're doing something like a programming language that doesn't require compiling, like say, for example, [[Python (Programming Language)|Python]], but LinkedIn testing and verifying that actually things are working as expected is actually a very good plan. So, in this case, let's look at what we have here. So, cargo clippy to catch common mistakes. Sure. Compilation, cargo bill, testing, manual verification. So, there is actually a pollution in this chat session. So, in this case, what I'm going to do, I'm going to copy my prompt, right? You can see here that I have a click to edit. Now, what I'm going to do is going to open up a new session. The problem here is that the agent thinks that it needs to have a conversation with me. I don't want to have a conversation with me, with the model. What I want to do is to go ahead and tell the agent to just go ahead and produce that. It might get confused because before, I asked, hey, just produce me a plan, produce some information. So, what I'm going to do is I need to ensure the correctness of these goals you have generated. Go ahead and implement these steps and run the necessary commands. There we go. So now, my hope is that the agent will comply.
>
> **[3:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=189)** There we go. We have a command. Yes, I want to allow cargo clippy, which will actually make sure that things are correct. So, we're seeing some output here. That is, of course, the build is failing, cargo test is not going to work because we have some problems. Cargo build is not going to work either, so there are some issues. Yes, implement the missing read file function. So, right off the bat, we can see that certain things are missing. And go ahead and fix the missing function, remove the unused imports, and make sure the linter and build works. Actually, as I was typing this, look at this, it was actually already doing the work, so this is great. Now, I can actually go ahead and start doing these things and executing all this code and the agent is behind the scenes doing that work. Do you see that working? That is actually happening behind the scenes and making all of these changes for me. Now, ideally, I would take these a little bit slower and make sure that these things are actually correct, but I'm not revising them in detail. I'm giving permissions to do the building, the testing, and the linting, and making sure that these things are right based on the results of the output right here.
>
> **[4:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=283)** So, you can see that the, it is still actually catching a lot of different things. So, this is critical because now you have to, we're now ensuring that things are actually working and actually correct. So we're not going to need this extra prompt here and now, we have something that actually compiles and runs and things are correctly working. So, that is a way that you can have to go back and forth and ensure things are, well, more robust. Do not trust generated code as is. Now, I went very fast because we only have a few minutes to demonstrate. What are some of the patterns in the workflows that you may want to apply when you're generating code and refactoring, and what is it that you need in order to apply these best practices, these engineering best practices to generate a code?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[GitHub Copilot]] (1), [[Rust (Programming Language)|Rust]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (5), cargo (5), python (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Analyzing your conversational approach](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=0)** - [Instructor] With [[GitHub Copilot]], you have the ability of analyzing your conversational approach and figuring out what are some of the recurring things that you might encounter. So we've been doing a little bit of refactoring here. We've been asking to run certain commands, and there's definitely things that you can actually, you know, actually can interact with the chat beyond these back and forth. So, see for example, if I am right here and said, "Well, you know, this went a little bit too fast, and this last interaction was not very good." So what is actually going on? And what are some of the things that you can capture with your conversational interaction with GitHub Copilot? There's all kinds of different things here. You can actually click here and say, not like these, but if you click here, you can say, well, I want to copy these, I want to copy all, I want to do a new chat. You can scroll all the way down and actually redo or undo the last checkpoint. So every time that there's an interaction, you'll have a checkpoint and you can actually go and do these things. You can restore to the last checkpoint. You can retry when things are not going exactly the way you want them to be. You can see here that we have information about the model, but you can also do all kinds of different things with the actual chat. So you can undo the last request, redo it, like we've seen how to open that in Editor.
>
> **[1:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=98)** You have like a debug view, but all of these things give you, well, more capabilities and interactions. One thing that might be in particular kind of useful is to actually create a new set of instructions. So I have here a new chat window, and I'm going to generate agent instructions. These are a special set of instructions and I'm going to click on this. And you can see here there is a pre-made prompt for me. I did not have to type any of these, and this will allow me to have like a starting point. This is specific for GitHub Copilot. Other coding agents have certain instructions, similar instructions and similar files as guidelines. And it will go ahead and read all of the files and all of the things related to my project and will produce the information necessary for the [[GitHub]] instructions. So this is ready. And let's take a quick look here. It will actually populate these, developer workflows. This actually looks very good. Key patterns and conventions. So it starts creating conventions and this looks correct, add it to the file. So what happens here is that the [[Microsoft Copilot|Copilot]] instructions markdown file will be populated with everything that was generated. And now, as you can see here, I'm going to say yes, I want to keep it. What happens here is that whenever I am requesting new things, I won't have to,
>
> **[3:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=194)** well, tell it to like, hey, just do cargo build to compile the project, do cargo test to execute all of the tests. So this is a good pattern. Once you identify certain things that you keep doing and keep asking, if you remember, if I go back here to show all the chats and I say the testing process I was asking to the code still fails to compile. Well, that was not my ask, if I'm going to scroll here. There we go. Go ahead and implement these steps. I want to ensure [[LinkedIn]] testing and this actually that this code actually compiles. So I'm finding myself repeating these things and I want to avoid repeating them. This special instructions file is a very good starting point. I didn't have to type it from scratch and I was able to tell the agent, the large language model behind GitHub Copilot to generate this for me based on my previous interactions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (4), [[GitHub]] (1), [[Microsoft Copilot|Copilot]] (1), [[LinkedIn]] (1)
> **Tools:** github (5)
> **Definitions:** is a  (3)
> **CLI Commands:** cargo (2)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Context Scaffolding

[↑ Back to Table of Contents](#table-of-contents)

#### [Providing context from multiple files](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=0)** - [Instructor] There are multiple different ways to create context. And in this case, I've opened a project, an open-source project called Self, which is a distributed file system, and it's very, very big. It actually took me quite the effort to clone this repository locally. And I've opened it, the project with Vision Studio Code and [[GitHub Copilot]]. And you can see here all the directories and all the files. I mean, this is a very large project. So the problem is that whenever you have a large project like this and there's no context, GitHub Copilot will try to guess what are some of the things that might be interesting. So, I have a question here on how are filters converted. And this is a very bad problem, very bad question, but I might not know better, right? So I'm going to ask, and [[Microsoft Copilot|Copilot]] is going to try to figure out, okay, you clarify. So it's asking me clarification. You know, there are tags with filters with LVM. So I think there's things with LVM, I know because I implemented that. So kind of like the things here. It's like, yeah, this is not quite right. I'm asking about LVM, logical Volume Manager is correct. Now I'm providing you this example because I know the implementation and where exactly this is.
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=97)** But this is not exactly what I'm asking and I'm still not getting what I need. So I'm going to push this a little bit further. This happens with labeling and adding filters to LVM, not in LVMconf. So it's outside of lvm.conf. And you can see here that certain things are happening here. But once again, I'm going to push a little bit further here, and I'm going to say this is in relation to self itself as it works with LVM. So let's try these, specifically for OSDs labeling and filtering are handled programmatically. Often BSA volume or selfadmin. So now we're getting to something closer. So, in essence, these back and forth, these questions that are not getting me what I need. Well, how do I make these thing understand better? Well, I need to provide context. And context can be provided specifically right here in the chat window, or I can open the files. Now, I know that for this specific project, if I go to SRC and then I go to the Self volume directory and then to the self_volume subdirectory, and then I go to the API directory and then I open LVM.pi,
>
> **[3:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=192)** then this automatically becomes specific context for what I want to do. So opening a file will allow me to have that better context. And you can see here now that this file appears in the chat input section. So if I say, can you now explain how filters work? Certainly in the context of self, now it's more about self volume specifically, and it says, as seen in LVM.pi. Great, because that is exactly what I'm asking. That is also exactly my intention, but I'm providing that context by opening the exact file that I want. Now, if I wanted to do something additional with LVM and perhaps do something else with devices, look at this, we have more things here. We have like create and what happens when we create a new volume and the tags. So there's a lot of different things that are going to happen. And now it's going to use this as reference in coordination with the files that I have open. So this is necessary when you require very specific, highly specific things, open the files that you need, that you're going to be working with,
>
> **[4:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=283)** so that the questions, the answers are going to be more relevant to the things that you're interested in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (2), [[Microsoft Copilot|Copilot]] (1)
> **Env Vars:** lvm (8), bsa (1), src (1), api (1)
> **UI Navigation:** go to (3), open the (2)
> **Definitions:** is a  (3)
> **Tools:** github (2)
> **Analogies:** kind of like (1), it's like (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** self_volume (1)

#### [Leveraging open files for accuracy](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=0)** - [Instructor] There are a few other things that you can do to increase the context and increase the accuracy of the responses from either agents or simple interactions with the Ask or Edit modes. Now, when you want to be specific, even if you have these files that are open, so say for example, we're working with how about listing, as well. I'm going to open up a few ones. Prepare, as well, and then I'm going to close the explorer so that we can have a little bit more room. And we have like these four files here. I mean this is, you know, seems like it's slightly okay, not a very big file. This one is much, much bigger. So what are some of the things that we might want to look here? So there's context that happens with the tabs that are open, with the files that I'm open because behind the scenes, [[GitHub Copilot]] is trying to figure out what this developer might be interested in. And by default, it will look at the tabs that you have open because it assumes that the tabs that you have open are the ones that are going to be interesting to you and you're probably going to be working on them. So make sure you open the files that are interesting to you. Now, you can explicitly say, "Hey, I want to include prepare.py," so I'm going to click on Plus, and now that's part of it. And I can say create is also interesting to me. Now you can do it that way with clicking buttons, or you can add the context with the #.
>
> **[1:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=95)** So if I do #, I can say yes, I include, let me see, lvm.py, and I can do it that way, as well. And you can see it will appear here. It will detect that this is a [[Python (Programming Language)|Python]] file. So because this is such a large project, you will have to go to the explorer, find that README file, and then just go in and add it that way. Now in this case, we've added all of these files, and we can ask questions. And whenever I click on that, you can click on this here. So this is very good and I can ask better questions and make sure that this will produce something useful to me. Additionally, I can provide other specific context and add these sub menu, so I can open our Editors, Files & Folders, Related Files, Instructions. You know, if you have a special set of instructions, you can add those, too, especially if you have those set of instructions outside of this current project. Now, the screenshot window, it's, in my opinion, not extremely useful because it will actually take a screenshot of the current environment, but there's all kinds of different things that you can add here. Now, the important thing is that having all of these things by default is very useful and it will allow you to get exactly what you want. Now, one thing that is interesting is that you can ask and you can say,
>
> **[3:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=187)** "I want to understand how exactly ceph-volume is using LVM labels as an API for device discovery."
>
> **[3:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=206)** Now this is a very technical, deep question about the implementation. I know what it is because I implemented it a few years ago. But what I'm going to do here is something slightly different that you might want to try out, especially when you're trying to add context with certain files. Before providing me the details, I want you to tell me what are potential context gaps
>
> **[3:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=238)** that you are missing so that I can provide them. So I'm asking, can you please provide me that context, so that I can give you a better answer. So, let's see. Assignment details, tag naming conventions, discovery logic. So in this case, we have a lot of information. It seems that this is good enough and I can provide other things. So, one trick here is that I can do workspace and workspace will actually just use as much context as possible. So we're going beyond just open fast. So you have a lot of options here, but the main thing to remember is that you have to open these files. You have to make sure that these are part of your context, that you're adding them, and make sure that whenever you're asking the questions, as long as you're getting the correct answers, make sure that that context is added when you're interacting with the [[Large Language Models (LLM)|large language models]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (1), [[Python (Programming Language)|Python]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** make (5), python (1), find (1)
> **UI Navigation:** click on (3), open the (1), go to (1)
> **Env Vars:** readme (1), lvm (1), api (1)
> **File Paths:** prepare.py (1), lvm.py (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Analogies:** for example (1)

#### [Challenge: Generate code from API docs](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=0)** - I'm going to use the agent mode here with this project that, again, is very large and I'm going to generate these API docs in a way that will allow me to get started with a deep API documentation. So I have these prompt here. I want to generate detailed API documentation for set volumes interaction with LVM. Again, this is highly technical, but there's no API documentation. We have several files here. Focus on LVM.py, which is this one right here. And specifically how it labels volumes, filters them and discovers them as a system, as a system boots. Use all the LVM related files within and I give it a path. So this is useful information. Let's see. Well, one last thing. Produce a markdown style file and call it ceph volume. L-V-M-A-P-I, dot md. There we go. So very detailed. This is going to take a second and you can see searching for the files that are matching the ceph volume project. It's going to search for files matching, matching certain different patterns. It finds the matches, it finds all of the files and can you see how it's reading process lines one to 60? It's not reading all of the lines, but it, it chunks how it reads the files and processes them. For example, system dot py reads from one to 60 and then from 61 to 180
>
> **[1:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=93)** and then it produces like the context necessary. So let's remove the explorer here and let's actually go and take a look at the markdown document- documentation file has been created in your workspace. It provides a detailed overview of the ceph volume interaction with LVM focusing on labeling, filtering. Let's take a look. I'm going to click on keep so that because we're keeping these, it's going to be a little bit easier to, to try to read. All right, so that is the overview using ceph specific conventions and what is the labeling. Very good. All ceph related to LVM tags are prefixed with ceph dot. Alright, so that's interesting. Tags are assigned using the format key value. So this is a key factor for this API. Excellent. So there's a lot of tag management. It sets the tags, it re-clears the tags parsis and, and this is very, very, very good. So I am very happy with how this was able to provide this. Now, the key thing here is that with the prompting, I was able to provide initial context and I didn't have to list every single file. I did give it a path though, and the, the agent was able to very, in a very smart way, try to figure out, okay, so if, if it's that path, perhaps I should look for [[Python (Programming Language)|Python]] files, which is looking right here and I should look for that within, within the context of large volume LVM and volumes
>
> **[3:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=190)** and management and filtering and tagging and labeling. So all of those things are happening here and it's able to generate these, very good, very thorough. And it's actually giving, giving the ability, providing the ability to interact with, to interact with, with a little bit of Python code. And you can see here it's correctly doing the syntax for, for what it needs to generate right there. So references document was generated based on the ceph volume codebase as of October, 2025. This is probably a stretch, but you are in control. You, you don't have to accept these as is. In, in this case, I accepted it as is because I feel like it's okay and I wanted to demonstrate how it looks. But you can definitely iterate over these perhaps provide more like if this is a public facing API, you want all the developers to actually interact with this. You could actually add more examples and be more thorough and more granular into what you're interacting with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** api (6), lvm (6)
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **File Paths:** lvm.py (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - i (1)

#### [Solution: Generate code from API docs](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=0)** - [Instructor] Let's generate some code from API documentation. And in this specific case, my example was to look for the documentation, the specification actually, for the [[HTML]] or HTTP spec actually, for the one, the version one, I think, I believe it's the version 1.1 of the spec. So what I did was I wrote this comment. Capture all the sections of the [W3.org](https://W3.org) page that has the RFC 2616 and all of the sections from one all the way to 14. And I think it didn't do 13, it did all the way to 13, as we can see here. So why do we need these? Well, because I wanted to [[Fetch]] everything and have it in a single page. So let's review my prompt. Complete the shell script to fetch all the HTML sections as instructed in the comment. I want them all in a single file. The reason why is because I want to provide a single point for context so the [[GitHub Copilot]] can understand exactly what I need without having to open several different files. There are pros and cons on doing this. In this case, I decided to just have everything in a single file. So it generated the shell script, it will go and fetch everything. It will use curl. it will base that output and put it into the file. And in this case, it created this ginormous
>
> **[1:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=99)** HTML file that has, let's take a look at these. Almost 5,000 lines, yeah, five, a little bit over 5,000 lines. So that is a lot of context. So what I did next, once I have that API documentation, this might not be your case, I required to have, like, this process is going to require me to have this. So in this case, I decided to create a [[Rust (Programming Language)|Rust]] project that would implement the full specification of the HTTP protocol as it was defined for version 1.1. All right, so next what I did was, I'm going to show you, I did the Rust API implementation. So new chat, I'm going to close this one. I'm going to close that one, and I'm going to open main.rs and close the file explorer. So what I did here was ask, create a complete API implementation in Rust that maps to the RFC 2616 spec. Focus on correctly mapping the code to the specification. Now, I didn't manage to get this going on the first time around. The response was to create a complete Rust API implementation that maps to RFC 2616. You'll need to define types and functions for the main protocol. Yes, of course, I get that. And today, I want to go fast. Today, I want to do this implementation based on documentation I'm providing. So I completely understand that. Now, here's a high level plan. Define the enums, create the structs,
>
> **[3:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=192)** implement header parsing, sure, and provide parsing and building functions. Would you like a minimal working example or a more exhaustive mapping? And what do you think my response was? Exhaustive, exhaustive mapping, I want all of it. Just go ahead and create the whole thing for me. And it actually went ahead and did it. So created the six to-dos, starting with the defined HTTP method and static code enums. It did that, added 57 lines there. Then the request and response structs, 27 lines. And it went ahead and started doing the work for me. Now, I think most of the bulk of the work happened here in the comments referencing all of the 2616 sections. And it created the whole thing. So the Rust API implementation now exhaustively maps to RFC 2616 with enums, structs, parsing/serialization. So like a full generation. So this is actually pretty impressive because it was able to compartmentalize the request and produce a very thorough generation of code that, if I can show you here, look at this. In about 300 lines, we were able to cover all of the HTTP responses, properly enumerated right here. These actually look very, very good. So in this case, we've used a tremendous amount of context that are actually an API definition, API documentation,
>
> **[4:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=293)** to actually go ahead and create something that, on the face of it, it looks very good. Now, one of the things here is that you'll have to verify, you'll have to attest, you'll have to lint and make sure that things are correct, right. Not only rely on this. But this technique of providing this bulk amount of context is how I would suggest you try to tackle the challenge of generating code based on API documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (5), [[HTML]] (3), [[Fetch]] (3), [[GitHub Copilot]] (1)
> **Env Vars:** api (9), http (4), rfc (4), html (3)
> **Documentation:** rfc (4), specification (3), spec (3), the documentation (1)
> **CLI Commands:** curl (1), make (1)
> **Versions:** version 1 (2)
> **Prerequisites:** required to (1), you'll need (1)
> **File Paths:** main.rs (1)
> **URLs:** [w3.org](https://w3.org) (1)

#### [Working with unknown codebases](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=0)** - [Instructor] When working with extremely large code basis, it is very tricky to not have any context or anything open and not provide the known context and then ask questions because that will not work. So if I go here, this is by the way, the CPython repository. This is the repository that contains the [[Python (Programming Language)|Python]] programming language. It is extensive, it is large, it has lots of different files, and trying to ask questions if I don't know, will get me into trouble. Now, [[GitHub Copilot]] has a few features that might help us out. One of them is the Workspace tool. So if I say Workspace, it will allow me to, or it will allow GitHub Copilot to just go in and try to find as much context and relevant information to what I'm trying to say. So one option is to say, to use Workspace. Sometimes the Workspace is used implicitly behind the scenes. Remember, I don't have any files open. All it knows is that this is a large repository and there's several different directories with potentially a lot of different things in here. So when things are failing and you are not really understanding, try to use Workspace and try to use it to your advantage to go deeper, especially when you don't know about certain things. So in this case, I'm really interested in understanding how exceptions work in Python,
>
> **[1:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=96)** in the Python programming language. Not actually how it works for the API as a programmer, but the implementation within the programming language of Python itself. So I want to say I want to understand the exception implementation, and I want examples based in this repository. Now, I'm being obtuse on purpose. And the reason why is because I want to rely on the tooling to actually go ahead and tell me exactly what they think is correct. So in this case, it's using Workspace, and it's actually trying to collect a lot of information. Now, this is an extremely large repository with many different directories, sub directories and files, so this might take a second. So let's just wait and then come back when it's done. Alright, so this completed, and let's actually take a look at the response. Raising and catching exceptions. That's fine. But you can see here that implementation is this repository is primarily in exceptions at C. So one of the cool things is that I can actually click here. And look at that, it opens up the file for exceptions at C, defines the built-in exception types and their hierarchy. The main base classes here are BaseException and Exception. Most built-in exceptions derive from these. So this is the whole implementation. That looks correct.
>
> **[3:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=189)** And then, I can make more questions about these based on that. So using Workspaces, what I would recommend. But let's just assume that you don't use Workspace. What are some other things that you can try? Well, you can actually do something slightly different. Let me close the Explorer. And I can say, I want to know what file has logging definitions and examples. So again, very generic, but searching the code base is actually something that I would do as a developer without any tooling. I would use scrap or similar tool and try to find exactly what is going on. So there's some rst files, which are documentation files. That's fine. And I want to know where it is... where the code for logging is actually defined, not the documentation. So then, you can actually go ahead and do refinement on the search queries. And this will try to do, you know, its best to try to figure out. Now, this is very good and it's definitely a way of actually, you know, trying to get as close as you want. But in this case, I think it would work best if I slap in Workspace.
>
> **[4:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=286)** Now, this will take a second. Let's wait until it completes to come back. Great, so this completed and now we have a little bit more information. It says that actually there's logging the handler, there's a little bit there in the Python. Now, this is somewhat similar to what we had before. So there you go. You have a couple of options to work with. Large code base with many different files and directories. These a couple of techniques will get you a little bit closer to where you want to be. But in essence, you have to have some sort of an idea of where is the thing that you want to do. In this case, you can see objects, modules, and find your way around a little bit better. But using at Workspace is definitely one of the recommended things when working with large code bases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[GitHub Copilot]] (2)
> **CLI Commands:** python (5), find (3), make (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=0)** - So, that's it. We were able to go through different patterns and techniques that you were able to apply in order to get better answers from [[GitHub Copilot]]. But not only that, we were also able to see how we can increase the context, how we can make better context. Remember, it is not only about what we're asking or what we're describing, but behind the scenes, what are some of the things that GitHub Copilot will need in order to provide better and more accurate answers? And that is context that we saw. Open files, selecting certain pieces of code, and being able to provide that, especially when there's large code basis or unknown code basis to you. Well, those patterns of workflows will help you tackle some of these issues whenever you are in a, well, not a small project, but more complex, or perhaps a project that is new to you or is rather complicated, and you need the ability to have that [[Natural Language Processing (NLP)|natural language processing]] provided by GitHub Copilot, by AI tooling in general, to help you get better results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Tools:** github (3)
> **CLI Commands:** make (1)
> **Speakers:** - so (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/advanced-prompting-with-github-copilot)

## Skills Covered

- Conversational AI
- AI Prompting
- Artificial Intelligence (AI)
- GitHub Copilot

## Path Context

### In [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]
**1 of 4** | [[GitHub Copilot for System-Level Development]] →

## Appears In

- [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Top Ten AI Prompts]] — Artificial Intelligence (AI), AI Prompting
- [[AI Chat Prompts for Business Analysis]] — Artificial Intelligence (AI), AI Prompting

---

[↑ Back to top](#)