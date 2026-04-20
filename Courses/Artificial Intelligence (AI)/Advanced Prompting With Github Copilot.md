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
  - GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development
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
created: 2026-04-20
---

![Advanced Prompting With Github Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQFYqFXrKQ13pw/learning-public-crop_675_1200/B4EZq30MxJKYAY-/0/1764020506467?e=2147483647&amp;v=beta&amp;t=JoLTUbDk-I2rgJUEmOymE29Fq6P-C1FTVDhMNB-LKkQ)

# Advanced Prompting With Github Copilot

> Explore advanced techniques in prompting with GitHub Copilot. Begin with foundational knowledge, transitioning from basic interactions to mastering conversational AI and multiturn prompts. Discover how to iteratively refine your prompts, then learn to analyze your conversational approaches for better results. Gain expertise in providing comprehensive context from multiple files and leveraging open

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot) | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/advanced-prompting-with-github-copilot)

## Skills Covered

- Conversational AI
- AI Prompting
- Artificial Intelligence (AI)
- GitHub Copilot

## Table of Contents

### Introduction

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980&t=0)** - Welcome to this course for advanced prompting.
>
> **[0:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980&t=4)** We'll be using GitHub Copilot to learn some techniques, patterns, and workflows that will help you get a better answers from tooling like GitHub Copilot.
>
> **[0:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980&t=13)** These patterns, these ways of interacting with AI tooling like GitHub Copilot will allow you to get very, very good answers.
>
> **[0:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/course-introduction-27897018?u=76281980&t=24)** But not only that, whenever challenges are met, whenever the responses are not quite to what you need and solve the problem that you're looking for, you will learn how to apply these techniques to improve in the answers and get these building blocks that will help you go faster and implement solutions in a more robust way.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Code Keywords:** for, (1)
> **Speakers:** - welcome (1)


### 1. Foundations for Advanced Prompting

#### From basic to conversational AI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=1)** - [Instructor] Within Visual Studio Code and GitHub Copilot, you have very basic interactions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=6)** And in here we have a session with Visual Studio Code and simple interactions will, well, get you so far.
>
> **[0:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=14)** One of the things that I tend to do is to explain that simple questions, simple prompts, will get you simple answers, or a different way to put it, and here I'm going to create a new file, and I'm going to call it example.
>
> **[0:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=31)** I'm going to do this with Python, but it really doesn't matter what it is.
>
> **[0:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=35)** You see that you can get a suggestion saying "Generate code" or "Select language", "Start typing to dismiss or don't show this again".
>
> **[0:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=43)** It really doesn't matter.
>
> **[0:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=45)** Now, the current way of interacting with AI Copilot is with this new chat window that will be open by default.
>
> **[0:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=54)** You don't necessarily need to be using this, as we'll see, there's other ways of interacting.
>
> **[1:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=61)** But let's add an extremely simple prompt.
>
> **[1:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=66)** Now notice that we already have a little bit of a context here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=69)** There's tons of different features, and these features tend to change as time goes by, as with every single piece of software.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=77)** But let's just try something simple.
>
> **[1:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=79)** And let's say I want to create an example, HTTP API.
>
> **[1:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=90)** And I'm going to add just a little bit of detail and I don't want any external dependencies.
>
> **[1:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=100)** So very generic, very simple.
>
> **[1:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=103)** And let's see what we get.
>
> **[1:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=104)** Like we don't have anything here.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=107)** You can create a simple HTTP API in Python using only the builtin.
>
> **[1:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=111)** That sounds correct.
>
> **[1:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=112)** No externals.
>
> **[1:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=113)** Would you like the example to be added to example.py?
>
> **[1:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=116)** So in this session, I'm getting questions back and you know, that may sound okay, but the problem is that I did a very simple prompt.
>
> **[2:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=131)** So now let's enhance this prompt and let's be more accurate and then let's be more descriptive as to what is it that we want.
>
> **[2:21](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=141)** So what I did there was like I hit the up arrow and I'm going to say, "I want to create an example HTTP API, I don't want any external dependencies."
>
> **[2:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=151)** It must use Python standard library.
>
> **[2:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=156)** It all has to fit in this example.py file.
>
> **[2:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=163)** And please go ahead and create the implementation.
>
> **[2:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=171)** And I'm going to run this and it's going to be a little more specific.
>
> **[2:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=174)** And let's see what we get back.
>
> **[2:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=176)** And look at this.
>
> **[2:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=177)** We already have something that is going on.
>
> **[3:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=180)** Now I could have gotten even more specific and actually implement headers and do the responses and kind of like do all kinds of different things.
>
> **[3:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=191)** Even here we have 200s, 200s and 404s.
>
> **[3:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=195)** So some HTTP responses, and that is fine.
>
> **[3:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=198)** Now notice the differences.
>
> **[3:21](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=201)** I went from a highly generic, very simple problem to something, well, a little bit more specific and more complete.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=210)** So that is the difference that you must be aware when you start, when you're not getting exactly what you need.
>
> **[3:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=218)** Well, you know, AI systems are not going to be able to read your mind.
>
> **[3:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=223)** They require context as we will see.
>
> **[3:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=225)** But in this case, it is useful that when that context is not present, when the system doesn't entirely understand what is it that you want, well, you have to step it up a notch and create a more context in the way of explaining what exactly is going on.
>
> **[4:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=242)** So this is good enough.
>
> **[4:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=245)** You could actually go and accept this and you could say keep or undo or actually start refining this as we'll see later on, where you can add more to this session, this chatting session and to try to get more.
>
> **[4:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/from-basic-to-conversational-ai-28117012?u=76281980&t=262)** For now, this is good enough and I think it's a good overview on what happens when you do something highly generic and very simple to a little bit more explicit with more details and more context.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), default. (1), this, (1), this. (1), require (1)
> **Env Vars:** http (4), api (3)
> **CLI Commands:** python (3)
> **Tools:** visual studio (2), github (1)
> **File Paths:** example.py (2)
> **Analogies:** kind of like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### The power of multiturn interactions
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=1)** - Multi-turn interactions with AI refer to the fact that I can use this conversation that I've had as a source of truth.
>
> **[0:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=11)** So, you can keep iterating, you can keep expanding on what you're doing.
>
> **[0:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=15)** But all in all, this is still based on, like all of these conversations is part of that context.
>
> **[0:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=22)** So this multi-turn it becomes like this, this whole conversation.
>
> **[0:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=26)** Now, in this case, you can see that the HTTP responses are added.
>
> **[0:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=33)** So you have 302, 303, 304, 305, all the way to 308.
>
> **[0:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=40)** And basically talking about some of the redirects and some of the proxy responses that we're getting.
>
> **[0:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=48)** Now this is fine, but what are some of the challenges with this approach?
>
> **[0:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=54)** And what are some of the things that you should be aware when you're dealing with a multi-turn response or a multi-turn interaction, or to put it simply a chat session?
>
> **[1:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=66)** This might be fine.
>
> **[1:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=66)** What if this source of truth deviates from exactly the thing that we want to do?
>
> **[1:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=73)** So in this case, we started with the premise that I want to create an example HTTP API, and I don't want any external dependencies.
>
> **[1:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=79)** What if I want to do something slightly different?
>
> **[1:23](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=83)** Well, if I go ahead, like, let's just do something slightly outrageous here.
>
> **[1:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=89)** I started with Python and now I say, well, you know what?
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=97)** Let's just do something a little bit different with Rust.
>
> **[1:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=101)** And so instead of adding here and saying, what I really wanted was Rust, then the problem with that approach is that you have to see this source of truth as contaminated.
>
> **[1:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=112)** It already has all of these things.
>
> **[1:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=114)** And this is not very good.
>
> **[1:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=118)** So instead there's a couple of options.
>
> **[2:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=120)** You can actually create a new chat with this plus button right here.
>
> **[2:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=128)** You have the option to show all of the chats.
>
> **[2:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=133)** Now I have edits here, so I would say keep and continue or cancel.
>
> **[2:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=138)** And the important thing is that you can actually control what is going on.
>
> **[2:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=144)** So let's just assume that this is fine.
>
> **[2:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=147)** So I'm going to say keep. Now this is present.
>
> **[2:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=149)** I'm going to make sure that my example.py is saved.
>
> **[2:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=152)** And I'm going to click on open a new chat.
>
> **[2:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=155)** Now the important thing with this is that now I can start essentially from scratch with a new source of truth.
>
> **[2:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=164)** Now, this new conversation will not have that previous context that you can see here was this one right there, right?
>
> **[2:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=173)** So you can toggle between one or the other.
>
> **[2:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=176)** The reason why I got that prompt before was because I had unsaved changes.
>
> **[2:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=178)** I had not applied those changes that were coming in.
>
> **[3:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=181)** And in this case, well, I've accepted and I can go to the new chat.
>
> **[3:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=187)** And in the new chat I can have something well slightly different.
>
> **[3:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=191)** I can say even things that contradict that original chat and start from scratch.
>
> **[3:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=196)** This is useful again to have to avoid that cross-contamination, that contamination of what was the initial chat and where I want to go.
>
> **[3:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=204)** So let's just assume that all of these responses are okay.
>
> **[3:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=208)** This file has too many 300 HTTP codes.
>
> **[3:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=216)** Reduce them to make them the most common.
>
> **[3:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=223)** Next re-implement everything in Rust instead of Python.
>
> **[3:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=230)** So I'm going to something that is slightly different, slightly outrageous, like I was saying in the beginning.
>
> **[3:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=238)** And you can see that now it's actually going ahead and creating that main.rs which is a Rust.
>
> **[4:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=246)** I'm going to say yeah, sure, keep, that sounds fine.
>
> **[4:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=249)** And now we're getting something like a simple API in Rust and it's actually going to re-implement everything in Rust which is, again, slightly outrageous, but it exemplifies what I'm trying to say where this multi-turn interaction might get polluted.
>
> **[4:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/the-power-of-multi-turn-interactions-27898008?u=76281980&t=270)** So you get this new session and this new ability to actually do something completely different and maintain the type of source of truth, the type of quality and features and constraints that you want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (3), this, (1), continue (1)
> **Env Vars:** http (3), api (2)
> **CLI Commands:** python (2), make (2)
> **UI Navigation:** click on (1), toggle (1), go to (1)
> **File Paths:** example.py (1), main.rs (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - multi (1)

#### Chat inputs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=0)** - [Instructor] There are different ways where we can convey exactly what we want to GitHub Copilot and large language models and assistive AI tools in general.
>
> **[0:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=12)** So in these cases, specifically with Visual Studio Code and GitHub Copilot, we have, well, several different ways.
>
> **[0:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=19)** The main one, the principal one, the one that opens by default when you open up a new session with Visual Studio Code is this one with a chat.
>
> **[0:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=29)** Back in the beginning when GitHub Copilot was introduced to VS Code as GitHub Copilot, we didn't have a chat.
>
> **[0:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=38)** So all we had was, well, something different that I'll show you in a second.
>
> **[0:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=41)** But so far what you have here is a chat session where you can add things here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=49)** So we could say things like, add a little bit of documentation to this main function, right?
>
> **[1:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=60)** So we could say, you know, this is a Rust project, it looks okay, it gives you a short explanation, that's fine.
>
> **[1:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=66)** So that is one, and you might be used to this one.
>
> **[1:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=69)** It's commonly now used because again, it's a default chat interaction that you get.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=77)** So I'm going to say, keep, that sounds fine.
>
> **[1:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=79)** But you might be like, "Well, I don't have what developers call real state."
>
> **[1:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=86)** There's a lot of things going on.
>
> **[1:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=88)** This is too distracting.
>
> **[1:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=89)** I don't want to have a chat session.
>
> **[1:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=92)** I want to keep going and I don't want to be distracted by this.
>
> **[1:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=96)** Okay, that sounds great.
>
> **[1:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=98)** So what are some of the other ways that you can interact?
>
> **[1:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=101)** Well, let's add a more complicated file.
>
> **[1:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=103)** This only has about five lines.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=107)** Let's add this one, which is the lib.rs.
>
> **[1:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=109)** So this one has, let's see, 222 lines, so that looks a little bit more complex.
>
> **[1:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=116)** So this is Rust.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=117)** It really doesn't matter what programming language it is, because what I'm trying to demonstrate here is some of the patterns.
>
> **[2:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=124)** So what are some of the other ways that you can input something here?
>
> **[2:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=131)** Well, you could actually just start typing.
>
> **[2:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=134)** So in this case you have, this is a run function, and in Rust, one of the ways that you can add documentation is by adding triple slashes.
>
> **[2:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=145)** So I'm going to do a triple slash here, and automatically we get that suggestion, which is called ghost text in Github Copilot.
>
> **[2:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=155)** That suggestion, in this case, that takes the parts options as input, is ghost text, the one that I just accepted is the one that I put there.
>
> **[2:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=164)** So I can keep doing tab and I'll keep accepting those as input.
>
> **[2:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=171)** So I think that looks pretty good.
>
> **[2:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=173)** Now that is one way of doing things, and that's fine.
>
> **[2:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=178)** Now in this case, this project does a search and replace.
>
> **[3:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=183)** I want to actually create a new function that, let's just say does a recursive pattern matching on paths.
>
> **[3:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=193)** So this will be kind of like a chat, kind of like a request that I'm doing.
>
> **[3:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=197)** So now I can do pub.
>
> **[3:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=200)** And just by typing pub, you will see this is a way of doing functions in Rust, there are publicly facing.
>
> **[3:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=207)** And then you'll see that this gets suggested.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=210)** So that's good.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=210)** Now you might get something like this where we found a reference to public coding, a recent suggestion, that sounds fine.
>
> **[3:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=217)** You know, this is okay.
>
> **[3:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=220)** That's just a warning.
>
> **[3:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=221)** You can be okay with that or you might not be okay depending on your organizational settings and maybe the place where you work, if this is open source, perhaps not a big problem, up to you to decide what you want to do.
>
> **[3:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=234)** Alright, so that's another one.
>
> **[3:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=235)** So what is something else that you can actually do here and what's this other way?
>
> **[4:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=242)** Well, this one is called inline chat.
>
> **[4:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=245)** So, in this case, I can say, "Hmm, you know what, I am not entirely sure what's going on here.
>
> **[4:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=250)** So I can do CTRL+I on Windows and Linux or Command+I in OS10, and this inline chat will pop up.
>
> **[4:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=259)** So I can say, "I am not entirely sure what is going on with this push call."
>
> **[4:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=269)** So in this case, I'm not opening up a new chat window.
>
> **[4:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=272)** This actually starts popping value over here.
>
> **[4:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=276)** And one of the things that I can do here is, and I'm going to put this over to the side, is I can click on view in chat, so it can push all that conversation, that might be too verbose and send it over to the chat.
>
> **[4:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=288)** So this is definitely a thing.
>
> **[4:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=290)** You can actually rerun this whole interaction, you can just close it.
>
> **[4:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=295)** But let's click open in chat.
>
> **[4:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=296)** And then you can have a chat session where you can refine and ask more questions and do some other things.
>
> **[5:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-inputs-28115021?u=76281980&t=302)** So in essence, those are the principle, the more core ways that you can interact with these different ways of inputting the things that you want to do when you want code generated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (4), function (3), pub (2), this. (1)
> **Tools:** github (5), visual studio (2), vs code (1)
> **Definitions:** is a  (4), is called (2)
> **Env Vars:** ctrl (1), os10 (1)
> **Analogies:** kind of like (2)
> **File Paths:** lib.rs (1)
> **UI Navigation:** click on (1)
> **Warnings:** warning (1)

#### Chat modes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=0)** - [Instructor] One of the things that might be slightly overwhelming is these different chat modes.
>
> **[0:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=7)** Now, I understand that this looks pretty crowded in here, and we've had, like, a session where we've asked a few questions.
>
> **[0:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=15)** None of this is important right now.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=16)** Let's just focus on these chat session, specifically right here below when we can change the mode.
>
> **[0:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=26)** Now, this is changing.
>
> **[0:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=28)** Perhaps by the time that you see actually this video, maybe this won't be called a mode or a chat mode, but more of like an agent mode.
>
> **[0:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=40)** That's because GitHub Copilot, and GitHub in general, is moving more towards agents.
>
> **[0:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=45)** So if I click here, you will see that there's a different mode.
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=49)** So we have Agent, Ask, and Edit.
>
> **[0:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=53)** Now, again, probably by the time that you see this video, this will be slightly different because things are shifting more to agents.
>
> **[1:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=63)** And this will be called the Edit Agent, the Ask Agent, and you can actually add your own agents, custom agents, and this will stop being called modes.
>
> **[1:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=74)** But behind the scenes, they're the same thing.
>
> **[1:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=78)** So let's talk about the main differences for the ones that you get by default, in this case, the Agent, let's start with that one, because that was the one that was selected by default.
>
> **[1:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=88)** In the Agent, and one of the main things about an agent is that when you're interacting with these, it has the ability to do more than just create some code.
>
> **[1:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=101)** So, sure, you can say, "Generate a function that does, you know, something interesting," and then it will generate the function and that won't be a problem.
>
> **[1:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=111)** But perhaps you want something that does many different things.
>
> **[1:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=115)** And, in that case, you could say, you know, if we go back in time to where GitHub Copilot was just starting out, you would get the single-task interactions, not multi-file.
>
> **[2:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=131)** In this case, if I say, for example, "I want to add a test to parse_glob_pattern, and then run some tests and validate the project actually builds correctly without warnings."
>
> **[2:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=149)** So, in Rust, we can compile, we can check warnings.
>
> **[2:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=153)** So I'm adding several different things.
>
> **[2:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=155)** I want to add a test, so I'm going to generate some code.
>
> **[2:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=158)** I'm going to run some tests, so I'm going to execute a command, I'm going to validate the project actually builds correctly without warning.
>
> **[2:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=164)** So there's a lot of different things here.
>
> **[2:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=166)** In the past, you weren't able to do that.
>
> **[2:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=168)** That's what the agent mode allows you to do, to do many different tasks, many different things within the same prompt.
>
> **[2:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=175)** So if actually if I run this, you will get probably a thing that will do several different things.
>
> **[3:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=181)** So in this case, it's creating some to-dos, which is kind of like a process, adding the test, it's going to retest, it's going to do everything in lib.rs, it's creating the code.
>
> **[3:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=192)** That's one thing that I asked.
>
> **[3:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=193)** And then, it tells me, "Hey, do you want to run a command?"
>
> **[3:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=196)** It's like, "Sure, like, why not?"
>
> **[3:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=198)** I can allow it.
>
> **[3:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=199)** I can say, "No, I don't want to run a command."
>
> **[3:21](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=201)** In this case, it is running.
>
> **[3:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=204)** "Do you want to build"?
>
> **[3:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=205)** Like, sure, "I want to allow."
>
> **[3:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=206)** I want to allow that build, I want to see what's going on, and it's executing those commands for me.
>
> **[3:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=211)** So that is fine.
>
> **[3:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=213)** We can actually keep going.
>
> **[3:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=215)** You can see there's a few things that it's complaining about.
>
> **[3:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=222)** It is fine, we can go back and forth, and then we can decide what is it that we want.
>
> **[3:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=228)** All right, so that's why I'm going to say keep, and skip, and just stop with this interaction, and say, you know, this is fine.
>
> **[3:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=238)** So what are some of the error modes?
>
> **[4:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=240)** Well, the error modes, I'm going to close this terminal.
>
> **[4:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=243)** The error modes or they are agent modes, or they are agents, if you're seeing this later on, will ask, will never execute anything.
>
> **[4:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=253)** It's just mainly, I'm going to create a new session here for the ask, and it's never going to do anything about it, any changes to the file.
>
> **[4:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=264)** So I can say, I can do, you know, this selection and I can say, you can see automatically the context is lib.rs, lines 1 to 14, and I can say, "Not sure what is going on here.
>
> **[4:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=280)** Can you add a new test?"
>
> **[4:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=282)** So ideally, and usually, the ask will not generate, will not insert that code.
>
> **[4:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=289)** In this case, it's generating because I'm asking it.
>
> **[4:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=291)** So it's more of like doing a back and forth.
>
> **[4:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=295)** Imagine this is more of like a meeting with someone else where you're asking questions and receiving questions.
>
> **[5:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=301)** Now, this is different, because if you don't want to have, like, that back-and-forth interaction and you want to actually do something like editing, well, you would change here, in this case, you can get something like a popup that will say, "Hey, if you change this mode, you will have to start a new chat session."
>
> **[5:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=319)** So you'll lose this context.
>
> **[5:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=322)** Well, quote, unquote, "lose," not really lose anything, because you can come back.
>
> **[5:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=326)** So I'm going to say Yes, and everything gets empty, right?
>
> **[5:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=329)** So I can say, "Extend the test to get more coverage," right?
>
> **[5:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=337)** So now, instead of going back and forth and saying, "Hey, do you want this?
>
> **[5:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=341)** Do you want the other thing?
>
> **[5:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=342)** What do you think about this process or that process?"
>
> **[5:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=345)** Then the changes will happen right here as they'll suggest.
>
> **[5:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=349)** So that's an overview of the different modes and the different things.
>
> **[5:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=353)** And you can see how all of this is changing and it's applying the edits, and it's doing natural changes on the lib.rs file.
>
> **[6:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/overview-of-chat-modes-27900011?u=76281980&t=364)** So that's an overview of what are the differences, and when you might want one versus the other one.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (7), let (3), function (2), default, (1), default. (1)
> **Tools:** github (3), terminal (1)
> **Analogies:** for example (1), kind of like (1), it's like (1), imagine (1)
> **File Paths:** lib.rs (3)
> **Code Identifiers:** parse_glob_pattern (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 2. Mastering Conversational AI

#### Crafting multiturn prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=0)** - [Instructor] When crafting multi-turn prompts, you have to make sure that, well, you define them correctly.
>
> **[0:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=7)** In this case, I want to make sure that I have proper test coverage.
>
> **[0:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=13)** Again, the programming language and the tooling, it's irrelevant.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=16)** We're going to be relying on GitHub Copilot to help us out here.
>
> **[0:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=20)** In this case, I want to make sure that I have the right test coverage.
>
> **[0:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=24)** So in this case, I want you to introduce a test coverage workflow that will allow me to see what the coverage is.
>
> **[0:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=30)** Like right now, I have no idea what that may be.
>
> **[0:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=33)** Run the test and ensure the coverage is above 50%.
>
> **[0:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=36)** So this would be certainly a system command, like a terminal command.
>
> **[0:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=39)** Finally, update the README.
>
> **[0:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=41)** So that's editing some files.
>
> **[0:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=43)** So there's a mix of different things.
>
> **[0:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=44)** It doesn't need to be a mix of different things.
>
> **[0:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=47)** In this case, it just happens that it is.
>
> **[0:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=50)** I'm using agent mode.
>
> **[0:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=52)** Now, if you were only making changes to a file or set of files, perhaps edit will be a little bit better, but agent sounds like a good way to do this.
>
> **[1:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=63)** So I'm going to hit send and I'm going to see what are some of the things.
>
> **[1:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=68)** And you can see that there's some to-dos.
>
> **[1:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=70)** It's crafting the to-dos.
>
> **[1:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=71)** Introduce test coverage workflow.
>
> **[1:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=74)** That looks like a sensible suggestion.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=77)** I'm just going to allow it.
>
> **[1:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=78)** You have control into allowing that or not.
>
> **[1:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=82)** It seems that there's a way to run some of these commands with HTML.
>
> **[1:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=90)** That sounds okay to me.
>
> **[1:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=92)** I'm happy to just accept anything here that might help me out.
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=97)** So what it seems that is happening here is that it's producing a an HTML report on the output.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=105)** And we can see here tested total lines, source.
>
> **[1:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=109)** We have 39 out of 117 and main.rs is zero.
>
> **[1:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=114)** So 32% coverage, that's not very good.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=117)** Now we went ahead and updated the README and I'm going to say that looks, cargo test and checking test coverage.
>
> **[2:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=126)** It uses this project.
>
> **[2:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=127)** That looks correct to me, so I'm going to say keep.
>
> **[2:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=130)** And it told me that the coverage is now 32.
>
> **[2:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=134)** Now that is multi-step or multi-turn prompting, right.
>
> **[2:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=140)** But what we have here is something that got us to a point, but not exactly with what I was looking for.
>
> **[2:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=151)** So some of the things that I was looking for, let's just actually go ahead and check.
>
> **[2:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=155)** So I wanted to say, run the tests and ensure that coverage is above 50%.
>
> **[2:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=160)** So it definitely ran the tests and executed them and that looks correct, but are they above 50%?
>
> **[2:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=168)** Let's take a look here.
>
> **[2:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=170)** The coverage is currently 32%, which is below the 50% target.
>
> **[2:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=174)** Developer instructions for running, yeah, but that is not what I asked, right.
>
> **[2:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=179)** I asked something slightly different.
>
> **[3:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=182)** So in this case, the next step, other than just asking for something, is to actually iterate and go back and forth to what you originally crafted.
>
> **[3:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=195)** The whole history here is still useful because this will be used as context, as you make progress and as you try to refine or iterate over responses that, although it gets you, in this case, I would say perhaps even like 80, 85%, maybe even 90% close to what I wanted originally, but not quite there.
>
> **[3:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/crafting-multi-turn-prompts-27900012?u=76281980&t=214)** So we'll see next how can we make sure that this back and forth is still useful to us.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (6), let (2), finally, (1), this. (1), for. (1)
> **CLI Commands:** make (5), cargo (1)
> **Env Vars:** readme (2), html (2)
> **Documentation:** the readme (2)
> **Tools:** github (1), terminal (1)
> **File Paths:** main.rs (1)
> **Speakers:** - [instructor] (1)

#### Iterative refinement techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=1)** - [Presenter] Okay, so, what we have here is multi-steps asking for adding coverage and making sure things are okay, but we didn't get exactly where I wanted, and we have coverage of 32% and I asked 50%.
>
> **[0:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=18)** So, whenever this happens, it, well, we have to say, well, I asked specifically for you to help me out get at least 50% coverage.
>
> **[0:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=35)** Please add relevant tests to get to at least 50% coverage.
>
> **[0:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=42)** Now, additionally, I don't know why it thought it was a good idea to open up HTML.
>
> **[0:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=48)** I don't need HTML. I am fine with just text report.
>
> **[0:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=53)** So I'm going to say, please do not report on HTML when running tests, keep it with text.
>
> **[1:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=64)** So I'm still in agent mode.
>
> **[1:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=65)** I'm refining. I'm iterating over what happened here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=69)** Like the session provided me some output.
>
> **[1:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=73)** Now, I'm iterating over this, and this is now what I want is just to make sure that this report is fine, and it will help me get to the next stop.
>
> **[1:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=85)** So, now, it's making the edits to live that array.
>
> **[1:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=88)** Well, it's actually reading that, and it made 71 additions, so I don't know what the additions are, but let's just run the tests again.
>
> **[1:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=100)** It made one change to live that array, it seems.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=105)** So, let's actually do keep, perhaps, we needed to see.
>
> **[1:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=109)** Yeah, so see, I think, one of the problems was that I didn't accept the changes.
>
> **[1:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=113)** So, let's just allow that and let's just try it again.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=117)** So, you're then again, you're going into this kind of like a loop, right?
>
> **[2:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=122)** We're going back and forth and in this case, I didn't need to even accept this.
>
> **[2:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=126)** It actually just saves the file as it is for me.
>
> **[2:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=130)** So, this is an important feature actually because it allows me to see exactly the, not only what change in the files, if I go here to leave that array, you can see test parse args with a glob.
>
> **[2:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=145)** It actually try to remove that, and that's what made these correct.
>
> **[2:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=149)** So, this looks correct, but did you see how there was a back and forth where things were not exactly quite to my liking or quite to exactly what I was asking?
>
> **[2:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=161)** Well, this is a pretty important step and iterative process, like large language models in general, this is not specific to GitHub Copilot.
>
> **[2:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=172)** Sometimes, not get you exactly to where you want them.
>
> **[2:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=175)** And I keep this removal of an actual test.
>
> **[3:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=180)** And the way to handle this is just going back and forth, iterative, and getting to a point where you want to be.
>
> **[3:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=188)** So, some of the things here that are useful in this iterative process is also, perhaps, given extra context.
>
> **[3:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=198)** So, one final part of what I want to show you is when things are exact, not exactly what you want, and you want that extra context.
>
> **[3:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=207)** What I did was I went to the tarpaulin page, the GitHub page, and grabbed the documentation.
>
> **[3:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=214)** So, what I'm going to do is I'm going to ask, are there any other recommendations for testing and coverage based on the documentation from the tarpaulin project?
>
> **[3:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=233)** And then I'm going to paste that, look at that.
>
> **[3:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=237)** So, I'm going to paste that extra context and see if that will give me anything back.
>
> **[4:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=243)** So, in this case, oh, ignore unwanted code in coverage.
>
> **[4:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=247)** That sounds like an interesting step, like I had not considered that.
>
> **[4:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=250)** Like you might not want to include.
>
> **[4:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=253)** So, for example, main sounds like a good one.
>
> **[4:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=257)** So, if I go here, well, sometimes it's tricky to do that one.
>
> **[4:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=262)** We can say insert at cursor and look at that.
>
> **[4:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=267)** I am pretty sure that we could, well, that is not exactly what I wanted, right?
>
> **[4:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=273)** So, what I wanted was like this.
>
> **[4:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=275)** So, if I say safe, and I'm pretty sure if I run this again, it should increase the coverage above 58% because now, main shouldn't be catching up.
>
> **[4:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=288)** So, let's take a look. Look at that, 60%.
>
> **[4:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=291)** So, I think, it's good.
>
> **[4:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=292)** So, you have that extra thing that you can do, or you can interact with the agent mode, but passing that extra context, that might give you extra information.
>
> **[5:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/iterative-refinement-techniques-28113006?u=76281980&t=304)** Again, this is iterative, and you can go back and forth and getting exactly to where you want to be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), this. (2), this, (1), include. (1)
> **Env Vars:** html (3)
> **Documentation:** the documentation (2)
> **Tools:** github (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Challenge: Refactor with conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=0)** - [Instructor] What we have here is a function that I find very problematic.
>
> **[0:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=6)** What are some of the things and what are some of the problems that I see with this?
>
> **[0:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=10)** Well, let's start with the problem that the function says that it's going to read a file.
>
> **[0:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=17)** But if you start going through the function, you will see that it actually is doing some writing.
>
> **[0:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=26)** It actually creates a writer, it produces a temporary file.
>
> **[0:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=33)** You can see here that the temporary file is produced there in the, or defined there in line 183.
>
> **[0:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=39)** And then it actually writes something back to it.
>
> **[0:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=46)** So the problem with this function, not necessarily that it's quite complex.
>
> **[0:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=53)** And what we're going to be doing right now is we're going to do a little bit of refactoring.
>
> **[1:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=60)** Now, one of the patterns, one of the things in software engineering that is useful is to have separation of concerns.
>
> **[1:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=69)** Basically, the responsibility of the function, of the piece of code, my preference is to have a single responsibility.
>
> **[1:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=80)** When you have a function that says, well, this is a liar function to start with because it says it's going to read a file, but it's doing a little bit more than that.
>
> **[1:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=90)** So how do we tackle this?
>
> **[1:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=92)** Like, so, and again, it doesn't matter what programming language this is.
>
> **[1:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=96)** It might be slightly different for you.
>
> **[1:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=98)** So in this case, we have something here.
>
> **[1:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=100)** We want to make sure that, you know, we want to refactor this.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=105)** What are some of the steps?
>
> **[1:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=106)** So what we're going to be doing is we're going to put our cursor right there in the read file function.
>
> **[1:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=114)** And then we are going to create a new chat session.
>
> **[1:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=119)** So in here we're going to do, we're going to use a slash command.
>
> **[2:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=126)** The slash commands are kind of like really useful features of GitHub Copilot that allows us to make use of certain features that will prevent me from having to actually type everything.
>
> **[2:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=140)** So in this case, I'm going to say, explain.
>
> **[2:23](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=143)** I don't want to use workspace, which that's a different feature there.
>
> **[2:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=148)** Explain.
>
> **[2:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=149)** And now, because like I don't want to rely specifically on GitHub Copilot figuring out exactly what I need to do, by selecting the function, now that's part of the context.
>
> **[2:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=162)** So explain, try to tell me what are the potential challenges with this function.
>
> **[2:55](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=175)** So I selected the function, I know what the context is, and I'm going to use GitHub Copilot to try to craft a prompt that will allow me to do some actual refactoring.
>
> **[3:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=188)** All right, so this completed, there's several different things here.
>
> **[3:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=193)** Let's see if it actually mentions the thing that I'm worried about.
>
> **[3:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=198)** But potential challenges and issues with the read file function.
>
> **[3:21](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=201)** Line matching logic, maybe replacement logic, maybe a thing, user interaction, perhaps preceding.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=210)** Temporary file handling, function writes to a temporary file and then persists it, but it does not replace the original file.
>
> **[3:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=216)** Maybe, I mean, see, it doesn't really go into the actual thing that is a problem for me.
>
> **[3:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=224)** So I want to refactor this function.
>
> **[3:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=231)** My main problem is that the function says it reads a file, but it is also writing to it.
>
> **[4:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=247)** Create me a plan as a prompt so that I can refine it and use it to actually get what I need from the separation of concerns.
>
> **[4:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=265)** So with this, I'm going to instruct Copilot to try to separate exactly what are some of the things that I need and what are some of the problems that I have.
>
> **[4:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=275)** So let's take a look.
>
> **[4:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=277)** Refactoring plan, separation of concerns for file reading and writing.
>
> **[4:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=281)** Rename and split functionality.
>
> **[4:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=282)** Rename the current file.
>
> **[4:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=284)** Create two distinct functions, that sounds correct.
>
> **[4:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=286)** Introduce a processing function.
>
> **[4:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=289)** Main workflow.
>
> **[4:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=291)** Your main logic, use the following workflow.
>
> **[4:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=292)** User interaction, apply the change, error handling, and testing, and benefits.
>
> **[4:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=297)** So once you have these response from Copilot, then you can actually go ahead and analyze exactly what you need.
>
> **[5:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=304)** I think this looks okay enough, and we can actually send this and we could actually refine it, make some changes, or send it over to the agent here and go ahead and start a work.
>
> **[5:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=318)** So I can say, this plan looks great, please split up the function and split up the function and do the work.
>
> **[5:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=331)** So this is going to take a while and we'll wait until the agent produces all of the work, complies with everything that I'm asking and come back to check the result.
>
> **[5:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=340)** Great, so this completed.
>
> **[5:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=342)** The function has been split into three clear responsibilities.
>
> **[5:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=345)** Read the lines, process the lines, and write the lines.
>
> **[5:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=347)** That sounds okay.
>
> **[5:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=349)** If I wanted to have a little bit more refinement, I could just go over the results and say, yeah, this is not quite what I wanted.
>
> **[5:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=356)** You can now compose these functions in the workflow.
>
> **[5:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=359)** But do you see that it is missing the tests?
>
> **[6:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=362)** I'm okay with this, but the prompt had testing, right.
>
> **[6:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=367)** Write unit test for each function.
>
> **[6:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=369)** It doesn't have the test.
>
> **[6:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=370)** How do I know if this generation looks okay?
>
> **[6:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=373)** I mean, it looks okay.
>
> **[6:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=374)** How do I know if it actually works?
>
> **[6:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=376)** Well, tests are missing.
>
> **[6:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-refactor-with-conversation-28108009?u=76281980&t=378)** So that's an opportunity for improvement and refinement of the results that we got.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), let (3), case, (2), this, (2), this. (1)
> **CLI Commands:** make (3), find (1)
> **Tools:** github (3)
> **Definitions:** is a  (3)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Refactor with conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=0)** - [Presenter] So we have a result here from our interaction with GitHub Copilot.
>
> **[0:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=5)** We have three new functions that are, that separated the concerns that I was looking for, but this is not exactly what I had in mind.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=16)** Whenever you are getting a result from an agent, a specific model that you've picked, and you're getting some code back, there are certain things that you might want to be interested in analyzing and making sure that these are actually okay and good.
>
> **[0:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=36)** So you have to add a pattern.
>
> **[0:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=38)** I mean, you have to think and work as an engineer, like as an actual process, engineering process, where you'll have to apply certain things to verify things are actually correct.
>
> **[0:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=51)** So, in this case, we want to make sure that this is okay.
>
> **[0:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=56)** So, let's just actually make sure that, well, this is okay.
>
> **[1:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=60)** So, I'm going to ask the agent to produce a plan, produce a plan to ensure the correctness of this code you have generated.
>
> **[1:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=73)** It looks okay, but I want to ensure LinkedIn testing and that this code actually compiles.
>
> **[1:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=84)** Now, in this case, this is rust.
>
> **[1:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=86)** So I have to compile, not that I have to, but like, ideally, if I'm going to submit this as a production code, I'm going to have to compile, like the process might be slightly different for you.
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=97)** If you're doing something like a programming language that doesn't require compiling, like say, for example, Python, but LinkedIn testing and verifying that actually things are working as expected is actually a very good plan.
>
> **[1:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=110)** So, in this case, let's look at what we have here.
>
> **[1:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=114)** So, cargo clippy to catch common mistakes. Sure.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=117)** Compilation, cargo bill, testing, manual verification.
>
> **[2:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=122)** So, there is actually a pollution in this chat session.
>
> **[2:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=129)** So, in this case, what I'm going to do, I'm going to copy my prompt, right?
>
> **[2:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=136)** You can see here that I have a click to edit.
>
> **[2:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=138)** Now, what I'm going to do is going to open up a new session.
>
> **[2:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=142)** The problem here is that the agent thinks that it needs to have a conversation with me.
>
> **[2:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=147)** I don't want to have a conversation with me, with the model.
>
> **[2:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=151)** What I want to do is to go ahead and tell the agent to just go ahead and produce that.
>
> **[2:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=159)** It might get confused because before, I asked, hey, just produce me a plan, produce some information.
>
> **[2:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=166)** So, what I'm going to do is I need to ensure the correctness of these goals you have generated.
>
> **[2:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=177)** Go ahead and implement these steps and run the necessary commands.
>
> **[3:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=185)** There we go. So now, my hope is that the agent will comply.
>
> **[3:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=189)** There we go. We have a command.
>
> **[3:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=191)** Yes, I want to allow cargo clippy, which will actually make sure that things are correct.
>
> **[3:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=197)** So, we're seeing some output here.
>
> **[3:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=200)** That is, of course, the build is failing, cargo test is not going to work because we have some problems.
>
> **[3:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=206)** Cargo build is not going to work either, so there are some issues.
>
> **[3:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=213)** Yes, implement the missing read file function.
>
> **[3:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=216)** So, right off the bat, we can see that certain things are missing.
>
> **[3:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=220)** And go ahead and fix the missing function, remove the unused imports, and make sure the linter and build works.
>
> **[3:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=237)** Actually, as I was typing this, look at this, it was actually already doing the work, so this is great.
>
> **[4:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=244)** Now, I can actually go ahead and start doing these things and executing all this code and the agent is behind the scenes doing that work.
>
> **[4:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=255)** Do you see that working?
>
> **[4:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=257)** That is actually happening behind the scenes and making all of these changes for me.
>
> **[4:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=262)** Now, ideally, I would take these a little bit slower and make sure that these things are actually correct, but I'm not revising them in detail.
>
> **[4:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=271)** I'm giving permissions to do the building, the testing, and the linting, and making sure that these things are right based on the results of the output right here.
>
> **[4:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=283)** So, you can see that the, it is still actually catching a lot of different things.
>
> **[4:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=288)** So, this is critical because now you have to, we're now ensuring that things are actually working and actually correct.
>
> **[4:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=296)** So we're not going to need this extra prompt here and now, we have something that actually compiles and runs and things are correctly working.
>
> **[5:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=308)** So, that is a way that you can have to go back and forth and ensure things are, well, more robust.
>
> **[5:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=316)** Do not trust generated code as is.
>
> **[5:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=320)** Now, I went very fast because we only have a few minutes to demonstrate.
>
> **[5:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-refactor-with-conversation-28102013?u=76281980&t=324)** What are some of the patterns in the workflows that you may want to apply when you're generating code and refactoring, and what is it that you need in order to apply these best practices, these engineering best practices to generate a code?

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (2), function (2), this, (2), for, (1)
> **CLI Commands:** make (5), cargo (5), python (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Analyzing your conversational approach
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=0)** - [Instructor] With GitHub Copilot, you have the ability of analyzing your conversational approach and figuring out what are some of the recurring things that you might encounter.
>
> **[0:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=13)** So we've been doing a little bit of refactoring here.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=16)** We've been asking to run certain commands, and there's definitely things that you can actually, you know, actually can interact with the chat beyond these back and forth.
>
> **[0:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=29)** So, see for example, if I am right here and said, "Well, you know, this went a little bit too fast, and this last interaction was not very good."
>
> **[0:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=40)** So what is actually going on?
>
> **[0:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=42)** And what are some of the things that you can capture with your conversational interaction with GitHub Copilot?
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=49)** There's all kinds of different things here.
>
> **[0:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=51)** You can actually click here and say, not like these, but if you click here, you can say, well, I want to copy these, I want to copy all, I want to do a new chat.
>
> **[1:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=61)** You can scroll all the way down and actually redo or undo the last checkpoint.
>
> **[1:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=67)** So every time that there's an interaction, you'll have a checkpoint and you can actually go and do these things.
>
> **[1:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=75)** You can restore to the last checkpoint.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=77)** You can retry when things are not going exactly the way you want them to be.
>
> **[1:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=82)** You can see here that we have information about the model, but you can also do all kinds of different things with the actual chat.
>
> **[1:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=90)** So you can undo the last request, redo it, like we've seen how to open that in Editor.
>
> **[1:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=98)** You have like a debug view, but all of these things give you, well, more capabilities and interactions.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=105)** One thing that might be in particular kind of useful is to actually create a new set of instructions.
>
> **[1:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=113)** So I have here a new chat window, and I'm going to generate agent instructions.
>
> **[1:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=119)** These are a special set of instructions and I'm going to click on this.
>
> **[2:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=122)** And you can see here there is a pre-made prompt for me.
>
> **[2:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=127)** I did not have to type any of these, and this will allow me to have like a starting point.
>
> **[2:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=134)** This is specific for GitHub Copilot.
>
> **[2:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=136)** Other coding agents have certain instructions, similar instructions and similar files as guidelines.
>
> **[2:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=142)** And it will go ahead and read all of the files and all of the things related to my project and will produce the information necessary for the GitHub instructions.
>
> **[2:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=151)** So this is ready.
>
> **[2:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=153)** And let's take a quick look here.
>
> **[2:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=156)** It will actually populate these, developer workflows.
>
> **[2:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=160)** This actually looks very good.
>
> **[2:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=162)** Key patterns and conventions.
>
> **[2:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=163)** So it starts creating conventions and this looks correct, add it to the file.
>
> **[2:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=174)** So what happens here is that the Copilot instructions markdown file will be populated with everything that was generated.
>
> **[3:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=183)** And now, as you can see here, I'm going to say yes, I want to keep it.
>
> **[3:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=187)** What happens here is that whenever I am requesting new things, I won't have to, well, tell it to like, hey, just do cargo build to compile the project, do cargo test to execute all of the tests.
>
> **[3:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=200)** So this is a good pattern.
>
> **[3:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=202)** Once you identify certain things that you keep doing and keep asking, if you remember, if I go back here to show all the chats and I say the testing process I was asking to the code still fails to compile.
>
> **[3:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=219)** Well, that was not my ask, if I'm going to scroll here.
>
> **[3:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=221)** There we go.
>
> **[3:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=222)** Go ahead and implement these steps.
>
> **[3:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=224)** I want to ensure LinkedIn testing and this actually that this code actually compiles.
>
> **[3:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=228)** So I'm finding myself repeating these things and I want to avoid repeating them.
>
> **[3:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=232)** This special instructions file is a very good starting point.
>
> **[3:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/analyzing-your-conversational-approach-28115022?u=76281980&t=236)** I didn't have to type it from scratch and I was able to tell the agent, the large language model behind GitHub Copilot to generate this for me based on my previous interactions.

> [!info]- Semantic Content
>
> **Tools:** github (5)
> **Definitions:** is a  (3)
> **CLI Commands:** cargo (2)
> **Code Keywords:** this. (1), let (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Context Scaffolding

#### Providing context from multiple files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=0)** - [Instructor] There are multiple different ways to create context.
>
> **[0:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=4)** And in this case, I've opened a project, an open-source project called Self, which is a distributed file system, and it's very, very big.
>
> **[0:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=14)** It actually took me quite the effort to clone this repository locally.
>
> **[0:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=18)** And I've opened it, the project with Vision Studio Code and GitHub Copilot.
>
> **[0:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=24)** And you can see here all the directories and all the files.
>
> **[0:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=27)** I mean, this is a very large project.
>
> **[0:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=30)** So the problem is that whenever you have a large project like this and there's no context, GitHub Copilot will try to guess what are some of the things that might be interesting.
>
> **[0:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=40)** So, I have a question here on how are filters converted.
>
> **[0:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=44)** And this is a very bad problem, very bad question, but I might not know better, right?
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=49)** So I'm going to ask, and Copilot is going to try to figure out, okay, you clarify.
>
> **[0:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=56)** So it's asking me clarification.
>
> **[0:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=59)** You know, there are tags with filters with LVM.
>
> **[1:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=68)** So I think there's things with LVM, I know because I implemented that.
>
> **[1:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=76)** So kind of like the things here.
>
> **[1:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=79)** It's like, yeah, this is not quite right.
>
> **[1:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=84)** I'm asking about LVM, logical Volume Manager is correct.
>
> **[1:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=88)** Now I'm providing you this example because I know the implementation and where exactly this is.
>
> **[1:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=97)** But this is not exactly what I'm asking and I'm still not getting what I need.
>
> **[1:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=100)** So I'm going to push this a little bit further.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=105)** This happens with labeling and adding filters to LVM, not in LVMconf.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=117)** So it's outside of lvm.conf.
>
> **[2:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=121)** And you can see here that certain things are happening here.
>
> **[2:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=126)** But once again, I'm going to push a little bit further here, and I'm going to say this is in relation to self itself as it works with LVM.
>
> **[2:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=138)** So let's try these, specifically for OSDs labeling and filtering are handled programmatically.
>
> **[2:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=145)** Often BSA volume or selfadmin.
>
> **[2:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=147)** So now we're getting to something closer.
>
> **[2:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=154)** So, in essence, these back and forth, these questions that are not getting me what I need.
>
> **[2:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=159)** Well, how do I make these thing understand better?
>
> **[2:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=163)** Well, I need to provide context.
>
> **[2:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=165)** And context can be provided specifically right here in the chat window, or I can open the files.
>
> **[2:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=172)** Now, I know that for this specific project, if I go to SRC and then I go to the Self volume directory and then to the self_volume subdirectory, and then I go to the API directory and then I open LVM.pi, then this automatically becomes specific context for what I want to do.
>
> **[3:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=200)** So opening a file will allow me to have that better context.
>
> **[3:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=204)** And you can see here now that this file appears in the chat input section.
>
> **[3:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=211)** So if I say, can you now explain how filters work?
>
> **[3:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=217)** Certainly in the context of self, now it's more about self volume specifically, and it says, as seen in LVM.pi.
>
> **[3:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=228)** Great, because that is exactly what I'm asking.
>
> **[3:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=232)** That is also exactly my intention, but I'm providing that context by opening the exact file that I want.
>
> **[4:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=243)** Now, if I wanted to do something additional with LVM and perhaps do something else with devices, look at this, we have more things here.
>
> **[4:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=254)** We have like create and what happens when we create a new volume and the tags.
>
> **[4:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=265)** So there's a lot of different things that are going to happen.
>
> **[4:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=269)** And now it's going to use this as reference in coordination with the files that I have open.
>
> **[4:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/providing-context-from-multiple-files?u=76281980&t=273)** So this is necessary when you require very specific, highly specific things, open the files that you need, that you're going to be working with, so that the questions, the answers are going to be more relevant to the things that you're interested in.

> [!info]- Semantic Content
>
> **Env Vars:** lvm (8), bsa (1), src (1), api (1)
> **Code Keywords:** self (5), case, (1), let (1), this, (1), require (1)
> **UI Navigation:** go to (3), open the (2)
> **Definitions:** is a  (3)
> **Tools:** github (2)
> **Analogies:** kind of like (1), it's like (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** self_volume (1)

#### Leveraging open files for accuracy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=0)** - [Instructor] There are a few other things that you can do to increase the context and increase the accuracy of the responses from either agents or simple interactions with the Ask or Edit modes.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=16)** Now, when you want to be specific, even if you have these files that are open, so say for example, we're working with how about listing, as well.
>
> **[0:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=28)** I'm going to open up a few ones.
>
> **[0:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=29)** Prepare, as well, and then I'm going to close the explorer so that we can have a little bit more room.
>
> **[0:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=35)** And we have like these four files here.
>
> **[0:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=38)** I mean this is, you know, seems like it's slightly okay, not a very big file.
>
> **[0:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=46)** This one is much, much bigger.
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=49)** So what are some of the things that we might want to look here?
>
> **[0:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=51)** So there's context that happens with the tabs that are open, with the files that I'm open because behind the scenes, GitHub Copilot is trying to figure out what this developer might be interested in.
>
> **[1:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=63)** And by default, it will look at the tabs that you have open because it assumes that the tabs that you have open are the ones that are going to be interesting to you and you're probably going to be working on them.
>
> **[1:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=74)** So make sure you open the files that are interesting to you.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=77)** Now, you can explicitly say, "Hey, I want to include prepare.py," so I'm going to click on Plus, and now that's part of it.
>
> **[1:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=86)** And I can say create is also interesting to me.
>
> **[1:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=89)** Now you can do it that way with clicking buttons, or you can add the context with the #.
>
> **[1:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=95)** So if I do #, I can say yes, I include, let me see, lvm.py, and I can do it that way, as well.
>
> **[1:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=103)** And you can see it will appear here.
>
> **[1:45](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=105)** It will detect that this is a Python file.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=107)** So because this is such a large project, you will have to go to the explorer, find that README file, and then just go in and add it that way.
>
> **[1:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=117)** Now in this case, we've added all of these files, and we can ask questions.
>
> **[2:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=123)** And whenever I click on that, you can click on this here.
>
> **[2:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=127)** So this is very good and I can ask better questions and make sure that this will produce something useful to me.
>
> **[2:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=136)** Additionally, I can provide other specific context and add these sub menu, so I can open our Editors, Files & Folders, Related Files, Instructions.
>
> **[2:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=147)** You know, if you have a special set of instructions, you can add those, too, especially if you have those set of instructions outside of this current project.
>
> **[2:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=157)** Now, the screenshot window, it's, in my opinion, not extremely useful because it will actually take a screenshot of the current environment, but there's all kinds of different things that you can add here.
>
> **[2:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=172)** Now, the important thing is that having all of these things by default is very useful and it will allow you to get exactly what you want.
>
> **[3:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=184)** Now, one thing that is interesting is that you can ask and you can say, "I want to understand how exactly ceph-volume is using LVM labels as an API for device discovery."
>
> **[3:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=206)** Now this is a very technical, deep question about the implementation.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=210)** I know what it is because I implemented it a few years ago.
>
> **[3:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=213)** But what I'm going to do here is something slightly different that you might want to try out, especially when you're trying to add context with certain files.
>
> **[3:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=224)** Before providing me the details, I want you to tell me what are potential context gaps
>
> **[3:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=238)** that you are missing so that I can provide them.
>
> **[4:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=244)** So I'm asking, can you please provide me that context, so that I can give you a better answer.
>
> **[4:12](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=252)** So, let's see.
>
> **[4:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=253)** Assignment details, tag naming conventions, discovery logic.
>
> **[4:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=258)** So in this case, we have a lot of information.
>
> **[4:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=262)** It seems that this is good enough and I can provide other things.
>
> **[4:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=267)** So, one trick here is that I can do workspace and workspace will actually just use as much context as possible.
>
> **[4:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=275)** So we're going beyond just open fast.
>
> **[4:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=278)** So you have a lot of options here, but the main thing to remember is that you have to open these files.
>
> **[4:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/leveraging-open-files-for-accuracy-28105011?u=76281980&t=287)** You have to make sure that these are part of your context, that you're adding them, and make sure that whenever you're asking the questions, as long as you're getting the correct answers, make sure that that context is added when you're interacting with the large language models.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), python (1), find (1)
> **Code Keywords:** let (2), case, (2), default, (1), include, (1)
> **UI Navigation:** click on (3), open the (1), go to (1)
> **Env Vars:** readme (1), lvm (1), api (1)
> **File Paths:** prepare.py (1), lvm.py (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Analogies:** for example (1)

#### Challenge: Generate code from API docs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=0)** - I'm going to use the agent mode here with this project that, again, is very large and I'm going to generate these API docs in a way that will allow me to get started with a deep API documentation.
>
> **[0:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=17)** So I have these prompt here.
>
> **[0:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=20)** I want to generate detailed API documentation for set volumes interaction with LVM.
>
> **[0:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=24)** Again, this is highly technical, but there's no API documentation.
>
> **[0:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=28)** We have several files here.
>
> **[0:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=30)** Focus on LVM.py, which is this one right here.
>
> **[0:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=34)** And specifically how it labels volumes, filters them and discovers them as a system, as a system boots.
>
> **[0:40](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=40)** Use all the LVM related files within and I give it a path.
>
> **[0:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=44)** So this is useful information. Let's see.
>
> **[0:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=47)** Well, one last thing.
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=49)** Produce a markdown style file and call it ceph volume.
>
> **[1:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=60)** L-V-M-A-P-I, dot md. There we go. So very detailed.
>
> **[1:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=64)** This is going to take a second and you can see searching for the files that are matching the ceph volume project.
>
> **[1:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=70)** It's going to search for files matching, matching certain different patterns.
>
> **[1:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=75)** It finds the matches, it finds all of the files and can you see how it's reading process lines one to 60?
>
> **[1:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=82)** It's not reading all of the lines, but it, it chunks how it reads the files and processes them.
>
> **[1:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=88)** For example, system dot py reads from one to 60 and then from 61 to 180 and then it produces like the context necessary.
>
> **[1:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=96)** So let's remove the explorer here and let's actually go and take a look at the markdown document- documentation file has been created in your workspace.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=107)** It provides a detailed overview of the ceph volume interaction with LVM focusing on labeling, filtering.
>
> **[1:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=112)** Let's take a look. I'm going to click on keep so that because we're keeping these, it's going to be a little bit easier to, to try to read.
>
> **[2:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=123)** All right, so that is the overview using ceph specific conventions and what is the labeling.
>
> **[2:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=131)** Very good. All ceph related to LVM tags are prefixed with ceph dot.
>
> **[2:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=135)** Alright, so that's interesting.
>
> **[2:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=137)** Tags are assigned using the format key value.
>
> **[2:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=139)** So this is a key factor for this API. Excellent.
>
> **[2:23](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=143)** So there's a lot of tag management.
>
> **[2:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=146)** It sets the tags, it re-clears the tags parsis and, and this is very, very, very good.
>
> **[2:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=152)** So I am very happy with how this was able to provide this.
>
> **[2:36](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=156)** Now, the key thing here is that with the prompting, I was able to provide initial context and I didn't have to list every single file.
>
> **[2:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=166)** I did give it a path though, and the, the agent was able to very, in a very smart way, try to figure out, okay, so if, if it's that path, perhaps I should look for Python files, which is looking right here and I should look for that within, within the context of large volume LVM and volumes and management and filtering and tagging and labeling.
>
> **[3:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=194)** So all of those things are happening here and it's able to generate these, very good, very thorough.
>
> **[3:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=200)** And it's actually giving, giving the ability, providing the ability to interact with, to interact with, with a little bit of Python code.
>
> **[3:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=211)** And you can see here it's correctly doing the syntax for, for what it needs to generate right there.
>
> **[3:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=218)** So references document was generated based on the ceph volume codebase as of October, 2025.
>
> **[3:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=223)** This is probably a stretch, but you are in control.
>
> **[3:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=226)** You, you don't have to accept these as is.
>
> **[3:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=229)** In, in this case, I accepted it as is because I feel like it's okay and I wanted to demonstrate how it looks.
>
> **[3:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=237)** But you can definitely iterate over these perhaps provide more like if this is a public facing API, you want all the developers to actually interact with this.
>
> **[4:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/challenge-generate-code-from-api-docs-27900013?u=76281980&t=247)** You could actually add more examples and be more thorough and more granular into what you're interacting with.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), lvm (6)
> **Code Keywords:** let (4), this. (2), if, (1), for, (1), case, (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **File Paths:** lvm.py (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - i (1)

#### Solution: Generate code from API docs
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=0)** - [Instructor] Let's generate some code from API documentation.
>
> **[0:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=4)** And in this specific case, my example was to look for the documentation, the specification actually, for the HTML or HTTP spec actually, for the one, the version one, I think, I believe it's the version 1.1 of the spec.
>
> **[0:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=25)** So what I did was I wrote this comment.
>
> **[0:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=28)** Capture all the sections of the [W3.org](https://W3.org) page that has the RFC 2616 and all of the sections from one all the way to 14.
>
> **[0:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=41)** And I think it didn't do 13, it did all the way to 13, as we can see here.
>
> **[0:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=47)** So why do we need these?
>
> **[0:49](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=49)** Well, because I wanted to fetch everything and have it in a single page.
>
> **[0:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=54)** So let's review my prompt.
>
> **[0:57](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=57)** Complete the shell script to fetch all the HTML sections as instructed in the comment.
>
> **[1:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=61)** I want them all in a single file.
>
> **[1:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=63)** The reason why is because I want to provide a single point for context so the GitHub Copilot can understand exactly what I need without having to open several different files.
>
> **[1:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=75)** There are pros and cons on doing this.
>
> **[1:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=78)** In this case, I decided to just have everything in a single file.
>
> **[1:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=82)** So it generated the shell script, it will go and fetch everything.
>
> **[1:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=86)** It will use curl.
>
> **[1:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=87)** it will base that output and put it into the file.
>
> **[1:33](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=93)** And in this case, it created this ginormous HTML file that has, let's take a look at these.
>
> **[1:43](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=103)** Almost 5,000 lines, yeah, five, a little bit over 5,000 lines.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=107)** So that is a lot of context.
>
> **[1:50](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=110)** So what I did next, once I have that API documentation, this might not be your case, I required to have, like, this process is going to require me to have this.
>
> **[2:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=120)** So in this case, I decided to create a Rust project that would implement the full specification of the HTTP protocol as it was defined for version 1.1.
>
> **[2:13](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=133)** All right, so next what I did was, I'm going to show you, I did the Rust API implementation.
>
> **[2:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=140)** So new chat, I'm going to close this one.
>
> **[2:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=142)** I'm going to close that one, and I'm going to open main.rs and close the file explorer.
>
> **[2:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=148)** So what I did here was ask, create a complete API implementation in Rust that maps to the RFC 2616 spec.
>
> **[2:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=157)** Focus on correctly mapping the code to the specification.
>
> **[2:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=161)** Now, I didn't manage to get this going on the first time around.
>
> **[2:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=167)** The response was to create a complete Rust API implementation that maps to RFC 2616.
>
> **[2:53](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=173)** You'll need to define types and functions for the main protocol.
>
> **[2:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=176)** Yes, of course, I get that.
>
> **[2:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=179)** And today, I want to go fast.
>
> **[3:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=180)** Today, I want to do this implementation based on documentation I'm providing.
>
> **[3:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=184)** So I completely understand that.
>
> **[3:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=188)** Now, here's a high level plan.
>
> **[3:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=190)** Define the enums, create the structs, implement header parsing, sure, and provide parsing and building functions.
>
> **[3:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=195)** Would you like a minimal working example or a more exhaustive mapping?
>
> **[3:19](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=199)** And what do you think my response was?
>
> **[3:23](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=203)** Exhaustive, exhaustive mapping, I want all of it.
>
> **[3:26](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=206)** Just go ahead and create the whole thing for me.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=210)** And it actually went ahead and did it.
>
> **[3:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=212)** So created the six to-dos, starting with the defined HTTP method and static code enums.
>
> **[3:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=219)** It did that, added 57 lines there.
>
> **[3:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=222)** Then the request and response structs, 27 lines.
>
> **[3:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=227)** And it went ahead and started doing the work for me.
>
> **[3:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=231)** Now, I think most of the bulk of the work happened here in the comments referencing all of the 2616 sections.
>
> **[3:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=239)** And it created the whole thing.
>
> **[4:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=241)** So the Rust API implementation now exhaustively maps to RFC 2616 with enums, structs, parsing/serialization.
>
> **[4:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=247)** So like a full generation.
>
> **[4:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=249)** So this is actually pretty impressive because it was able to compartmentalize the request and produce a very thorough generation of code that, if I can show you here, look at this.
>
> **[4:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=268)** In about 300 lines, we were able to cover all of the HTTP responses, properly enumerated right here.
>
> **[4:38](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=278)** These actually look very, very good.
>
> **[4:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=281)** So in this case, we've used a tremendous amount of context that are actually an API definition, API documentation, to actually go ahead and create something that, on the face of it, it looks very good.
>
> **[5:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=300)** Now, one of the things here is that you'll have to verify, you'll have to attest, you'll have to lint and make sure that things are correct, right.
>
> **[5:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=309)** Not only rely on this.
>
> **[5:11](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/solution-generate-code-from-api-docs-28116011?u=76281980&t=311)** But this technique of providing this bulk amount of context is how I would suggest you try to tackle the challenge of generating code based on API documentation.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), http (4), rfc (4), html (3)
> **Code Keywords:** case, (6), this. (4), let (3), require (1), static (1)
> **Documentation:** rfc (4), specification (3), spec (3), the documentation (1)
> **CLI Commands:** curl (1), make (1)
> **Versions:** version 1 (2)
> **Prerequisites:** required to (1), you'll need (1)
> **File Paths:** main.rs (1)
> **URLs:** [w3.org](https://w3.org) (1)

#### Working with unknown codebases
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=0)** - [Instructor] When working with extremely large code basis, it is very tricky to not have any context or anything open and not provide the known context and then ask questions because that will not work.
>
> **[0:16](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=16)** So if I go here, this is by the way, the CPython repository.
>
> **[0:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=20)** This is the repository that contains the Python programming language.
>
> **[0:25](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=25)** It is extensive, it is large, it has lots of different files, and trying to ask questions if I don't know, will get me into trouble.
>
> **[0:35](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=35)** Now, GitHub Copilot has a few features that might help us out.
>
> **[0:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=39)** One of them is the Workspace tool.
>
> **[0:44](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=44)** So if I say Workspace, it will allow me to, or it will allow GitHub Copilot to just go in and try to find as much context and relevant information to what I'm trying to say.
>
> **[0:58](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=58)** So one option is to say, to use Workspace.
>
> **[1:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=62)** Sometimes the Workspace is used implicitly behind the scenes.
>
> **[1:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=65)** Remember, I don't have any files open.
>
> **[1:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=68)** All it knows is that this is a large repository and there's several different directories with potentially a lot of different things in here.
>
> **[1:17](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=77)** So when things are failing and you are not really understanding, try to use Workspace and try to use it to your advantage to go deeper, especially when you don't know about certain things.
>
> **[1:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=89)** So in this case, I'm really interested in understanding how exceptions work in Python, in the Python programming language.
>
> **[1:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=99)** Not actually how it works for the API as a programmer, but the implementation within the programming language of Python itself.
>
> **[1:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=107)** So I want to say I want to understand the exception implementation, and I want examples based in this repository.
>
> **[2:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=123)** Now, I'm being obtuse on purpose.
>
> **[2:08](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=128)** And the reason why is because I want to rely on the tooling to actually go ahead and tell me exactly what they think is correct.
>
> **[2:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=138)** So in this case, it's using Workspace, and it's actually trying to collect a lot of information.
>
> **[2:23](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=143)** Now, this is an extremely large repository with many different directories, sub directories and files, so this might take a second.
>
> **[2:31](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=151)** So let's just wait and then come back when it's done.
>
> **[2:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=154)** Alright, so this completed, and let's actually take a look at the response.
>
> **[2:39](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=159)** Raising and catching exceptions.
>
> **[2:41](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=161)** That's fine.
>
> **[2:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=162)** But you can see here that implementation is this repository is primarily in exceptions at C.
>
> **[2:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=168)** So one of the cool things is that I can actually click here.
>
> **[2:52](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=172)** And look at that, it opens up the file for exceptions at C, defines the built-in exception types and their hierarchy.
>
> **[2:59](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=179)** The main base classes here are BaseException and Exception.
>
> **[3:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=182)** Most built-in exceptions derive from these.
>
> **[3:05](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=185)** So this is the whole implementation.
>
> **[3:07](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=187)** That looks correct.
>
> **[3:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=189)** And then, I can make more questions about these based on that.
>
> **[3:14](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=194)** So using Workspaces, what I would recommend.
>
> **[3:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=198)** But let's just assume that you don't use Workspace.
>
> **[3:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=202)** What are some other things that you can try?
>
> **[3:24](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=204)** Well, you can actually do something slightly different.
>
> **[3:29](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=209)** Let me close the Explorer.
>
> **[3:30](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=210)** And I can say, I want to know what file has logging definitions and examples.
>
> **[3:42](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=222)** So again, very generic, but searching the code base is actually something that I would do as a developer without any tooling.
>
> **[3:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=231)** I would use scrap or similar tool and try to find exactly what is going on.
>
> **[3:56](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=236)** So there's some rst files, which are documentation files.
>
> **[4:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=240)** That's fine.
>
> **[4:02](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=242)** And I want to know where it is... where the code for logging is actually defined, not the documentation.
>
> **[4:18](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=258)** So then, you can actually go ahead and do refinement on the search queries.
>
> **[4:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=262)** And this will try to do, you know, its best to try to figure out.
>
> **[4:28](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=268)** Now, this is very good and it's definitely a way of actually, you know, trying to get as close as you want.
>
> **[4:37](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=277)** But in this case, I think it would work best if I slap in Workspace.
>
> **[4:46](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=286)** Now, this will take a second.
>
> **[4:48](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=288)** Let's wait until it completes to come back.
>
> **[4:51](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=291)** Great, so this completed and now we have a little bit more information.
>
> **[4:54](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=294)** It says that actually there's logging the handler, there's a little bit there in the Python.
>
> **[5:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=300)** Now, this is somewhat similar to what we had before.
>
> **[5:03](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=303)** So there you go.
>
> **[5:04](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=304)** You have a couple of options to work with.
>
> **[5:06](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=306)** Large code base with many different files and directories.
>
> **[5:09](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=309)** These a couple of techniques will get you a little bit closer to where you want to be.
>
> **[5:15](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=315)** But in essence, you have to have some sort of an idea of where is the thing that you want to do.
>
> **[5:22](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=322)** In this case, you can see objects, modules, and find your way around a little bit better.
>
> **[5:27](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/working-with-unknown-codebases-27897019?u=76281980&t=327)** But using at Workspace is definitely one of the recommended things when working with large code bases.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), find (3), make (1)
> **Code Keywords:** let (5), case, (4)
> **Tools:** github (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=0)** - So, that's it.
>
> **[0:01](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=1)** We were able to go through different patterns and techniques that you were able to apply in order to get better answers from GitHub Copilot.
>
> **[0:10](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=10)** But not only that, we were also able to see how we can increase the context, how we can make better context.
>
> **[0:20](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=20)** Remember, it is not only about what we're asking or what we're describing, but behind the scenes, what are some of the things that GitHub Copilot will need in order to provide better and more accurate answers?
>
> **[0:32](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=32)** And that is context that we saw.
>
> **[0:34](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=34)** Open files, selecting certain pieces of code, and being able to provide that, especially when there's large code basis or unknown code basis to you.
>
> **[0:47](https://www.linkedin.com/learning/advanced-prompting-with-github-copilot/conclusion-28117013?u=76281980&t=47)** Well, those patterns of workflows will help you tackle some of these issues whenever you are in a, well, not a small project, but more complex, or perhaps a project that is new to you or is rather complicated, and you need the ability to have that natural language processing provided by GitHub Copilot, by AI tooling in general, to help you get better results.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **CLI Commands:** make (1)
> **Speakers:** - so (1)


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