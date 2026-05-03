---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-powershell
url: "https://www.linkedin.com/learning/learning-powershell"
duration_minutes: 83
duration: 1h 23m
level: Beginner
updated: 2/14/2020
learners: 54132
skills:
  - Powershell
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFxHzcSpPEySg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580334496275?e=2147483647&amp;v=beta&amp;t=hn8Kw-OVTcWy6hLm4mrUpj-qpbrTuq2H5ch7LpG7grc"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Networking and Administration Fundamentals]]'
prev_courses:
  - '[[Learning Virtualization]]'
next_courses:
  - '[[PowerShell- Automating IT Administration]]'
path_nav: '[{"path":"Networking and Administration Fundamentals","position":8,"total":10,"prev":"Learning Virtualization","next":"PowerShell- Automating IT Administration"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/network-and-system-administration
  - skill/powershell
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Learning%20PowerShell.md)

![Learning PowerShell](https://media.licdn.com/dms/image/v2/C4E0DAQFxHzcSpPEySg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580334496275?e=2147483647&amp;v=beta&amp;t=hn8Kw-OVTcWy6hLm4mrUpj-qpbrTuq2H5ch7LpG7grc)

# Learning PowerShell

> What is PowerShell? PowerShell is a powerful language used for scripting and automation for your IT Infrastructure. In this short course, author Matt Hester provides an overview of the most current release, PowerShell 5.0, including how to read the PowerShell language and scripts, get help, and use cmdlets. Matt then dives into PowerShell's functions and What If statements, working with output, an

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-powershell) | 1h 23m | Beginner | 54K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. PowerShell Overview**](#1-powershell-overview) (5 videos)
  - [Why PowerShell?](#why-powershell)
  - [How to read the language](#how-to-read-the-language)
  - [Getting help](#getting-help)
  - [Discovering cmdlets and aliases](#discovering-cmdlets-and-aliases)
  - [Get-Service and Get-Member](#get-service-and-get-member)
- [**2. Using PowerShell**](#2-using-powershell) (6 videos)
  - [Functions](#functions)
  - [Relieving anxiety with -WhatIf and -Confirm](#relieving-anxiety-with--whatif-and--confirm)
  - [ISE and you](#ise-and-you)
  - [Working with output](#working-with-output)
  - [Grid view](#grid-view)
  - [Running PowerShell remotely](#running-powershell-remotely)
- [**3. Taking PowerShell On Premises and Online**](#3-taking-powershell-on-premises-and-online) (4 videos)
  - [Finding and installing modules](#finding-and-installing-modules)
  - [Server cmdlets](#server-cmdlets)
  - [Office 365 PowerShell](#office-365-powershell)
  - [Azure PowerShell](#azure-powershell)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=0)** - [Matt] Welcome to this course on understanding [[Powershell]].
>
> **[0:03](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=3)** Thank you so much for checking out this course and folks, I'm tellin' you what, the great thing about understanding the shell syntax and language, you can use it anywhere.
>
> **[0:11](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=11)** In this course, we're going to focus on the syntax, we're going to focus on learning this shell environment, and really I like to think of it as you're learning a language.
>
> **[0:20](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=20)** Even though PowerShell isn't technically a language, it is a interactive shell, we're going to treat it like we learn any language.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=26)** We're going to break down the basic constructs.
>
> **[0:28](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=28)** It's basically verbs and nouns, a common command, get-command.
>
> **[0:32](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=32)** Everything begins with that verb and we're going to take a look at all kinds of exciting commands.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=36)** The great thing about learning PowerShell for automation, you might have done things in the past with [[Python (Programming Language)|Python]] or VBScript and it might be 50 or 60 lines.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=45)** Well in PowerShell, it might just be one simple line to do exactly the same thing.
>
> **[0:50](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=50)** So we have a rich environment.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=51)** We have a natural language environment we can use and leverage and here's the cool thing about PowerShell, my friends.
>
> **[0:57](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=57)** It's in your cloud technologies as well.
>
> **[0:59](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=59)** So if you use [[Microsoft Office|Office]] 365 or [[Microsoft Azure|Azure]], guess what?
>
> **[1:02](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=62)** Powershell is alive and well for you and you can use that and transfer that knowledge.
>
> **[1:07](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=67)** Once you learn how to get help, once you learn to use the syntax, you're going to learn more about that, and guess what, that's what you're going to learn in this class.
>
> **[1:14](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=74)** Thank you so much for checking out this class.
>
> **[1:16](https://www.linkedin.com/learning/learning-powershell/welcome-2?u=76281980&t=76)** Hope you enjoy learning PowerShell and have a blessed day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (7), [[Python (Programming Language)|Python]] (1), [[Microsoft Office|Office]] (1), [[Microsoft Azure|Azure]] (1)
> **Tools:** powershell (7)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [matt] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=0)** - [Voiceover] Hopefully you're excited to start learning this wonderful language of [[Powershell]].
>
> **[0:04](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=4)** However, before you get started to talk about one of my favorite topics in PowerShell, there's a few things that you're gonna wanna know to really take advantage of this course, as well as learning PowerShell and putting it into production inside of your environments.
>
> **[0:16](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=16)** First off, you're gonna have to know how to access administrative privileges.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=19)** Now a lot of things that we do in the course, do not require administrative privileges, but in real life, you're gonna do a lot of things in PowerShell that you're gonna need to be an administrator to actually accomplish the task.
>
> **[0:30](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=30)** If you have worked with scripts, or batch files, or any type of that language in the past, that's a huge plus.
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=37)** Because you understand one of the core tenants of working with PowerShell for task automation, for making sure things are done consistently.
>
> **[0:44](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=44)** You really have a base understanding.
>
> **[0:46](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=46)** However, bear in mind Powershell's a language, it's not just a scripting language.
>
> **[0:50](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=50)** It's not just designed to make batch files.
>
> **[0:52](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=52)** It's a whole interactive shell that we can do just a tremendous amount of work inside of.
>
> **[0:57](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=57)** Also if you have some basic [[Windows Server]] fundamentals, how to install things, how to configure things, just general [[Windows]] knowledge is gonna be great, although PowerShell is located in many,many [[Microsoft Products|products]], even non-[[Microsoft Products]].
>
> **[1:09](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=69)** Having that basic fundamentals is gonna be great.
>
> **[1:11](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=71)** Then also how to actually access PowerShell or even a command prompt.
>
> **[1:15](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=75)** PowerShell is already built in and installed on many of your systems today.
>
> **[1:19](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=79)** So making sure you know how to access that is gonna be key to anything that we do inside of this course.
>
> **[1:24](https://www.linkedin.com/learning/learning-powershell/what-you-should-know?u=76281980&t=84)** So hopefully you're ready to get started, and you have some of those basic tenants in place, and through the [[Representational State Transfer (REST)|rest]] of the videos in the course we're gonna take a look at this wonderful language called PowerShell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (10), [[Windows Server]] (1), [[Windows]] (1), [[Microsoft Products|Products]] (1), [[Microsoft Products]] (1)
> **Tools:** powershell (10), command prompt (1)
> **Prerequisites:** install (1), configure (1)
> **CLI Commands:** make (1)
> **Speakers:** - [voiceover] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=0)** - [Voiceover] Now, one of the great things about this course is as I go through the [[Powershell]] examples, you should be able to follow along with me with no problem.
>
> **[0:07](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=7)** Almost all of the commandlets you'll see in this course are non-evasive, they're not really going to do anything, they're just going to output it, and you're going to make it more real for yourself by running some of them.
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=17)** Now I'll also provide for you, after this course, one master file that has all the commandlets that you'll see throughout this course, where you can go back and use some of those examples.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=26)** Just a couple of notes about that file you'll get.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=29)** First off, create a test lab.
>
> **[0:30](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=30)** You want to do this, even though a lot of the commandlets that you'll do are fairly basic, and they're not going to cause you a lot of problems.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=36)** I always recommend when you're first learning this language run it in a test lab.
>
> **[0:40](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=40)** I've heard too many horror stories where somebody used a wow card, where they weren't supposed to, and they wiped out 500 production servers, so use a test lab first, and also you're going to have modify it for your environments.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=51)** So my samples are very tailored to my demo environment that I'm going to show you as we go through this course, but the exercise file you're going to get is going to give you all those nice examples that you'll see throughout this course.
>
> **[1:01](https://www.linkedin.com/learning/learning-powershell/using-the-exercise-files?u=76281980&t=61)** I hope you're ready to get rolling and learning PowerShell 5.0.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2)
> **Tools:** powershell (2)
> **CLI Commands:** make (1)
> **Versions:** 5.0 (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [voiceover] (1)


### 1. PowerShell Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Why PowerShell?](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=0)** - Let's talk about why you need [[Powershell]] and why you need to learning this wonderful language that you have available to you.
>
> **[0:06](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=6)** Especially if you're an IT pro or even a developer, you're going to want to learn this language.
>
> **[0:11](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=11)** PowerShell provides just a wealth of ability inside of your entire IT infrastructure environment.
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=17)** First off, why?
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=18)** It's a rich scripting environment, but I don't want you to limit your thinking that PowerShell is just a scripting language.
>
> **[0:23](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=23)** It's actually a powerful shell an environment that we can do interactive commands, and all kinds of other great things inside of it.
>
> **[0:30](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=30)** PowerShell is a language not necessarily just a scripting environment but it's one of the abilities that it offers.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=36)** It does Bulk Operations so much like we do with scripting.
>
> **[0:39](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=39)** With PowerShell we can perform the perform the same tasks over multiple servers, thousands of servers even, if need be to really perform a lot of great work and keep our work consistent across all those servers.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=51)** Do a lot of the heavy lifting instead of having to go do all the manual steps through GUI.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=56)** It's an Interactive Shell, so all my [[Linux]] users out there, that if you're new to PowerShell, you've had a shell for forever in your environments and how you interact with that.
>
> **[1:04](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=64)** What PowerShell does is it provides the Interactive Shell for our [[Windows]]-based environments so we can really tell it all kinds of great things, what to do, find us information, configure settings, it does that in an interactive way and gives us feedback of what's happening and what we're actually going to be using.
>
> **[1:20](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=80)** It's also for Task Automation.
>
> **[1:22](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=82)** One of the great things about PowerShell, especially when we think about the configurations of servers, we can use this language to actually automate all kinds of great things inside of our environment.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=91)** And then when you take it to the next step with things like desired state configuration, we can then control with PowerShell how a server is configured, does it stay in configuration and if it does drift, we can have PowerShell actually bring it back to our desired state.
>
> **[1:45](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=105)** So, there's all kind of great things that we can do with PowerShell just from a simple Task Automation perspective.
>
> **[1:51](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=111)** It's also Object Oriented.
>
> **[1:52](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=112)** And what I mean here is that everything we do inside of PowerShell is treated just like an object, whether that object is a service or a process, or maybe just a server.
>
> **[2:02](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=122)** Everything is treated like an object that we use PowerShell to describe that object, but we also use PowerShell to configure and work with that object so when you think about this in a language, pretty much everything's a noun that we're going to work with inside of it.
>
> **[2:16](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=136)** And PowerShell just wraps around that.
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=138)** In another video, we'll talk about how that comes to be and how to actually read this wonderful language, but it's Object Oriented.
>
> **[2:24](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=144)** Now this also provides a wealth of information for our developers because it's based on the dot net framework.
>
> **[2:30](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=150)** So everything that we have is actually based in code.
>
> **[2:33](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=153)** When you look at some of the commandlets that we're going to see, you'll see that dot net functionality come in.
>
> **[2:38](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=158)** So a lot of developers have started using PowerShell even though you might think it's traditionally an IT pro tool, but because of what it does and how it interacts and works with objects, developers find this very native to some of the languages that they program in every day.
>
> **[2:52](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=172)** Now what are some of the basics of the PowerShell language and things that you need to know about as we start working with this and going down PowerShell and learning it for the first time.
>
> **[3:02](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=182)** First off, you're going to use PowerShell for consistent, repeatable tasks and the things that we want to do over and over and over again.
>
> **[3:09](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=189)** Now I know, sometimes just looking at a service it's easy to go to the GUI and just get that information.
>
> **[3:13](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=193)** But what if you have to do that a thousand times on a thousand different servers?
>
> **[3:16](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=196)** You want to visit each server every time?
>
> **[3:18](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=198)** Probably not.
>
> **[3:19](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=199)** There's also several built-in providers.
>
> **[3:21](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=201)** And simply, a provider are the things that we can ask questions for, that we can interact with.
>
> **[3:26](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=206)** Remember, PowerShell is an interactive shell, and those providers allow us to work with it.
>
> **[3:30](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=210)** So, some of the providers we have around [[Active Directory]], the registry, if you're into Windows Management Instrumentation, or WMI, we can do that and we can talk to it natively.
>
> **[3:40](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=220)** We actually use our natural language when we're working with PowerShell and I'll explain how the language works in another video.
>
> **[3:46](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=226)** You may actually already know a little bit about PowerShell without even ever playing with it.
>
> **[3:50](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=230)** Because aliases really give us an ability to help bridge the gap from previous languages.
>
> **[3:55](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=235)** So, let's say for example, you want to look at what's inside of a directory.
>
> **[3:58](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=238)** Well, you might run DIR if you're from the Linux world you might run LS, if all you've known is PowerShell, you run a thing called Get-ChildItem.
>
> **[4:06](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=246)** So, I'll show you how that works in just a second, and give you an idea of what's happening with our aliases and we'll dig into those even more in another video.
>
> **[4:15](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=255)** And the last thing that we want to know about PowerShell, it's built into many [[Microsoft Products|products]].
>
> **[4:18](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=258)** It's a shipping requirement for most of the products that come out of [[Microsoft]]'s production environments, so it's really designed inside of it.
>
> **[4:25](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=265)** It also is in a lot of third-party products.
>
> **[4:28](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=268)** VMware has PowerShell and abilities built into it.
>
> **[4:30](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=270)** We can do it with Citrix.
>
> **[4:32](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=272)** We can do it with many, many other IT pro tools.
>
> **[4:34](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=274)** So we see a lot of folks really adapting PowerShell.
>
> **[4:37](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=277)** And in fact, PowerShell's already on to its fifth version of this powerful language.
>
> **[4:42](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=282)** So let me just show you what an alias is really quick.
>
> **[4:44](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=284)** And then we'll close out this video.
>
> **[4:46](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=286)** So, let me show you what an alias looks like inside of PowerShell.
>
> **[4:50](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=290)** I'm just gonna type in LS, it does the directory listing.
>
> **[4:54](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=294)** DR, it does the directory listing.
>
> **[4:56](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=296)** Well, the actual PowerShell commandlet is one called Get-ChildItem and if I just run that commandlet, hey, that's the same thing.
>
> **[5:03](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=303)** So aliases help you bridge that gap, and oh, by the way, and we'll talk about this in another video, you can create your own aliases to make learning a language even easier for you.
>
> **[5:13](https://www.linkedin.com/learning/learning-powershell/why-powershell?u=76281980&t=313)** So as you can see, PowerShell provides a wealth of opportunity for you and your environments and you may actually already know a little bit of PowerShell without even knowing you already did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (31), [[Microsoft Products|Products]] (3), [[Linux]] (2), [[Windows]] (2), [[Active Directory]] (1)
> **Tools:** powershell (31)
> **CLI Commands:** find (2), ls (2), make (1)
> **Env Vars:** gui (2), wmi (1), dir (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** configure (2)
> **UI Navigation:** go to (1)

#### [How to read the language](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=0)** - [Voiceover] Now I know you're probably pretty excited to actually start writing your first [[Powershell]] command and actually get involved with the language, but before we go any further in this course, you're gonna want to know the basics on how to read the PowerShell language.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=12)** How to actually start by working with it.
>
> **[0:14](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=14)** So let's take a look at a quick example called get-service dash name net.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=19)** Now the great thing about PowerShell, it's a natural language.
>
> **[0:23](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=23)** So you can use natural language to talk and interact with it.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=26)** So as you probably figured out that this commandlet is gonna find out all the name of the services with net inside of it.
>
> **[0:32](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=32)** And you'd be right.
>
> **[0:33](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=33)** But when you start breaking this down to its core components, it's much like the English language.
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=37)** We have our verbs which are things like get, stop, start.
>
> **[0:41](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=41)** So if I were to put something in there stop dash service, you would tell that hey, that's gonna stop the services.
>
> **[0:47](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=47)** The verbs across PowerShell are fairly generic.
>
> **[0:50](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=50)** Almost all the commands that we have inside of it are gonna have those common verbs.
>
> **[0:55](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=55)** The noun is the object.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=56)** That's things that we're gonna do something to or ask questions about.
>
> **[1:00](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=60)** In this case, it's service.
>
> **[1:01](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=61)** We pair the verb and the noun with a dash, combine when you say get-service, this is officially known as a commandlet inside of PowerShell.
>
> **[1:09](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=69)** Now, with this, if we just type in get-service without any of the parameters to the right, it would just list out all of our services essentially one at a time in a nice list for us to work with.
>
> **[1:20](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=80)** And you'll see this example many, many times throughout this course.
>
> **[1:23](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=83)** Now on the right hand side of our command, we have our name parameters and our argument strings.
>
> **[1:28](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=88)** So we can ask questions about certain properties of that service, so name is just one of the properties.
>
> **[1:34](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=94)** We have status, we have display name, there's actually several names and I'll show you how to find out all those properties, but I think of those parameters as adjectives that describe that noun and different ways that we can ask questions and how to find information.
>
> **[1:47](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=107)** And then almost all of those adjectives have argument strings where we can get even more descriptive about that.
>
> **[1:53](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=113)** And we support wild cards and spelling.
>
> **[1:55](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=115)** So the great thing about this, it's really easy to interact with PowerShell.
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=119)** Secondly, as you run this command, it's gonna output some information for us.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=123)** And here's an example of what a sample output looks like where we'll see a table that has status, name, and display name.
>
> **[2:09](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=129)** And oh, by the way, that's not all the property names for get-service.
>
> **[2:13](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=133)** In another video in this course, I'm gonna show you how to get all the properties of this get-service commandlet and what's actually underneath the covers and how we can interact with it.
>
> **[2:22](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=142)** And that's where you'll really see the dot net framework come into play and the object orientated nature of [[Windows]] PowerShell.
>
> **[2:30](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=150)** Now one of my favorite things about PowerShell is that at the end of the day it's case insensitive.
>
> **[2:34](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=154)** I know many flavors of [[Linux]] are very case sensitive in how you interact with the shell.
>
> **[2:39](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=159)** For the most part, PowerShell is case insensitive.
>
> **[2:43](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=163)** So when you look at this language, you can type everything in all lowercase, as I have in example on my slide.
>
> **[2:48](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=168)** You can type it in mix case, you can put five upper case characters, then four lower case.
>
> **[2:52](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=172)** It doesn't really matter.
>
> **[2:54](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=174)** Or if you're really mad, you can type it all in upper case.
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=176)** PowerShell's not gonna get mad at you again.
>
> **[2:58](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=178)** So the nice thing about this language, it's case insensitive.
>
> **[3:01](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=181)** Now one special note on that.
>
> **[3:03](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=183)** You might work with parameters and objects that are case sensitive.
>
> **[3:07](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=187)** So as you work with PowerShell, you might run into things where case does matter.
>
> **[3:11](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=191)** But for the most part, with the core basics of PowerShell, you don't have to worry about case as you interact with the language.
>
> **[3:18](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=198)** Other nice little note about PowerShell is almost all the commandlets are singular.
>
> **[3:22](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=202)** So you'll notice it says get-service but not get-services.
>
> **[3:26](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=206)** I don't have to write get-services.
>
> **[3:28](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=208)** Get-service will get me a list of all of them.
>
> **[3:30](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=210)** With 99% certainty, I can guarantee you that all PowerShell commandlets are singular.
>
> **[3:35](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=215)** Now I do know some examples that end in S and are plural, but really at the end of the day, you don't have to worry about putting that S in at the end of it.
>
> **[3:43](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=223)** It's always singular, for most purposes.
>
> **[3:46](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=226)** And almost all the examples you'll see in this course are gonna be singular of nature.
>
> **[3:50](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=230)** Now, one other key tenant to learning this language is the pipe symbol.
>
> **[3:54](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=234)** The pipe symbol is how we start working with the object orientated nature of PowerShell.
>
> **[3:59](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=239)** And really it's instantiated by using the pipe operator which allows us to do a couple of things inside of the PowerShell world.
>
> **[4:06](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=246)** First off, it allows us to take the output from one command and pass it to the next command in the line.
>
> **[4:12](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=252)** So if I say something like get-service pipe start service, it's gonna take the services it finds on the left and pipe them to the next command to start them.
>
> **[4:20](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=260)** You'll see an example here in just a second.
>
> **[4:22](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=262)** It also strings multiple commands together.
>
> **[4:25](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=265)** There's really no limit to how many pipe symbols you can put inside of a PowerShell command.
>
> **[4:30](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=270)** Although there is some order involved, and we'll see some errors later in this course where I'll have to put things in certain orders to make it give you the output that you're asking for, but for the most part, you can string together as many commands as you want.
>
> **[4:42](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=282)** The nice thing about this is remember we talked about those operators and I had get-service and I defined it by parameters with name and net inside the name.
>
> **[4:49](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=289)** That all gets bounded to that object.
>
> **[4:51](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=291)** So when we pass it to the next command along the pipe, that pipe sees that as one object.
>
> **[4:57](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=297)** So it sees that service with net in its name as one full object.
>
> **[5:00](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=300)** It binds that parameter to the actual objects that we're trying to manipulate or work with.
>
> **[5:05](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=305)** And it routes that information with very, very little effort.
>
> **[5:08](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=308)** I know in VB script if you've ever done this type of work, you had to do a lot of lines of code to get this same effect.
>
> **[5:14](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=314)** For us, it's a simple pipe operator.
>
> **[5:16](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=316)** So I'm not kidding when I say I had VB scripts that were 50 lines that now are one or two lines in PowerShell.
>
> **[5:21](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=321)** That's how this language works.
>
> **[5:23](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=323)** It makes it very easy to work with the object orientated nature of the language itself.
>
> **[5:28](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=328)** Lastly, when you look at an example of this, I have get-service, I have my commandlet, and I am piping to an output file.
>
> **[5:35](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=335)** So the pipe symbol can not only use to do other commands, it can also be used to help pass things into output.
>
> **[5:41](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=341)** Now we're gonna see lots of examples of how we can output data in later videos in this course, but I wanted to give you an example of what pipe operator looks like and why we might use it.
>
> **[5:50](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=350)** This particular commandlet is gonna take all those services that we get with get-service and put them in a text file that I can look at and read after the fact.
>
> **[5:58](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=358)** So understand the basic tenants in how to read PowerShell is key to working with this language.
>
> **[6:03](https://www.linkedin.com/learning/learning-powershell/how-to-read-the-language?u=76281980&t=363)** And in the [[Representational State Transfer (REST)|rest]] of the videos in this course, we're gonna see PowerShell in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (20), [[Windows]] (1), [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** powershell (20)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** later in (1)
> **Definitions:** known as (1)
> **Speakers:** - [voiceover] (1)

#### [Getting help](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=0)** - [Voiceover] Now before you start going down the road and running your first [[Powershell]] commandlets, I want to spend just this video and show you how to use Help and have the built-in Help system that comes with PowerShell.
>
> **[0:10](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=10)** PowerShell has a rich and robust help system that's actually at your fingertips as you're working with your PowerShell commandlets.
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=17)** One of those great things my dad always used to tell me is, You give a man a fish, he eats for a day, but if you teach him to fish, he'll eat for a lifetime.
>
> **[0:24](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=24)** And that's how I look at Help inside of PowerShell.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=26)** So I'm gonna go ahead and bring up a PowerShell session and take a look at it.
>
> **[0:30](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=30)** Now I'm actually gonna bring it up as an administrator.
>
> **[0:32](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=32)** To do that, simply right click on your PowerShell icon and say Run As Administrator.
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=37)** You're gonna get your user account control coming up saying, yes, that's what I want to do, and now I'm in an administrative session of PowerShell.
>
> **[0:43](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=43)** Now I'm just gonna move to the root directory of my C drive and I'm just gonna clean the screen up a little bit so it's a little bit easier to see what's happening.
>
> **[0:50](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=50)** We actually have a built-in commandlet called Get Help that's built into PowerShell.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=56)** PowerShell also has a language designed to help you.
>
> **[0:59](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=59)** Notice I've typed in just get-h and if I start hitting my Tab key we actually have Tab autocomplete.
>
> **[1:06](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=66)** Now you'll also notice, in another video I mentioned PowerShell is case insensitive.
>
> **[1:10](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=70)** The quote unquote official syntax is what is called sentence case, so it's gonna capitalize every [[Microsoft Word|word]] inside of my commandlet.
>
> **[1:17](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=77)** And as you get longer commandlets with longer names, you'll see the capital letters pop up here and there as you're working with it.
>
> **[1:23](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=83)** Now what Get-Help does is it's gonna provide the ability for me to find out more information about the commandlet.
>
> **[1:29](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=89)** So I just ran the base commandlet.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=91)** It actually is help on itself.
>
> **[1:32](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=92)** So how do you use help?
>
> **[1:34](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=94)** Well, Get-Help gives you help on help, which is kind of funny when you think about it, but the nice thing about this, it gives you some nice ways and some examples.
>
> **[1:41](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=101)** You can update the help files.
>
> **[1:42](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=102)** These are actually updated via the web.
>
> **[1:44](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=104)** The first time you run Get-Help you might be asked to install the help files on your local system.
>
> **[1:49](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=109)** The nice thing about having them on the local system, no matter what you want to learn about PowerShell, they'll always be there at your fingertips.
>
> **[1:56](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=116)** So I'm gonna go ahead and clear this screen, and let's do Get-Help on my Get-Service commandlet.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=121)** So I'm gonna simply say, Get-Help and then I'll simply say Get-Service, and just gonna hit Enter.
>
> **[2:06](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=126)** And notice what it does here, and if I scroll up we'll kind of get an idea of what that looks like.
>
> **[2:11](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=131)** I get the name of it, it tells me what it does.
>
> **[2:13](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=133)** By the way, this works for all the commandlets inside of PowerShell, even third party ones.
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=138)** It's now up to those third party developers to how rich this syntax is and how helpful the help system is for them, but it gives me all the parameters, it gives me some of the common syntax that I might use, it'll give me a little more description.
>
> **[2:32](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=152)** Now here's where it gets fun, folks.
>
> **[2:34](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=154)** If you look down here at the bottom, it gives you an online version, it actually gives you a link.
>
> **[2:38](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=158)** Now obviously you're in a Shell here, and clicking on this link doesn't really do anything, but we can actually run the Get-Help with a couple of switches.
>
> **[2:46](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=166)** Now you'll also see some examples here of what we have.
>
> **[2:48](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=168)** So Get-Help has four parameters that we can use.
>
> **[2:51](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=171)** We can get just examples of this, we can get detailed, we can get full, or we can do online, so let's actually take a look at these each in order.
>
> **[3:00](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=180)** So I'm gonna bring up my last command.
>
> **[3:02](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=182)** Inside of PowerShell, much like our command prompts, if I just hit my up arrow it'll bring back my last command.
>
> **[3:07](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=187)** Now I'm just gonna simply give it the parameter Examples.
>
> **[3:10](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=190)** I'm gonna show you what this one does.
>
> **[3:12](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=192)** And it's gonna give me, in this case, 11 examples.
>
> **[3:15](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=195)** I will tell you folks, that's unusual.
>
> **[3:17](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=197)** You usually get about three or four for most PowerShell commands, but it actually gives me examples, that hey, if you run this, it's gonna give you this.
>
> **[3:24](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=204)** So if I say Get-Service with an s* and I pipe it in to sort-object, it's gonna give me those objects sorted in their status in their order, so I have that ability to work with this, and all these examples are rich.
>
> **[3:36](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=216)** If you're like me, you'll probably only have to need to look at the examples.
>
> **[3:40](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=220)** I like the reverse engineer things.
>
> **[3:42](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=222)** If you show me how it works, I can generally find out what's happening there.
>
> **[3:45](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=225)** So the other examples we have, if I go ahead and say detailed, it's gonna provide all of my examples at the bottom, let me scroll all the way back up to the top here, so I gotta go through all 11 examples, which is good, but it's gonna give you even more information about all the different properties and parameters that we can provide inside of PowerShell.
>
> **[4:04](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=244)** So we really get a good sense of what this commandlet can do.
>
> **[4:09](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=249)** Bear in mind, again, folks, this is for every commandlet, we have this information at your fingertips to learn more about what's here.
>
> **[4:16](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=256)** Once again, I really like the examples.
>
> **[4:18](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=258)** The last one, just to show you, let me go ahead and bring up my last command, or my second to last command is full, and full gives you pretty much the same thing as details.
>
> **[4:26](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=266)** The thing it adds in addition here is that bottom part of related links, and it actually tells you some related services.
>
> **[4:32](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=272)** So notice I said get-service, it gives me a list of a couple other commandlets that are related to that one.
>
> **[4:37](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=277)** Start-Service, Set-Service, like if you want to set a service to be manual or automatic start upon boot, you can do those types of things.
>
> **[4:45](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=285)** The last version of help I want to show you, it's relatively new to PowerShell, is online.
>
> **[4:49](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=289)** Now watch what happens when I run this commandlet.
>
> **[4:51](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=291)** I'm gonna simply say, Get-Help Get-Service and I'm gonna type in -online.
>
> **[4:56](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=296)** Now I get folks, if you don't like to read on screen, that's awesome, the nice thing about this, it's actually gonna take you to the Help page up on the [[Microsoft]] site, or whoever the vender is for the command that you're using, and everything that we just saw inside of that actual help screen is now up here.
>
> **[5:11](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=311)** If you like to read this screen versus the command prompt window, it's really up to you and your preference, but as I scroll down with it, I'll see those same 11 examples that we saw.
>
> **[5:20](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=320)** Now the nice thing about this page, you can just copy and paste these examples very easily in to learn more PowerShell for yourself.
>
> **[5:27](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=327)** So one of my favorite things about PowerShell really is the help system, folks.
>
> **[5:31](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=331)** Learn how to help yourself as you're working with PowerShell and you can really gain traction quickly.
>
> **[5:36](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=336)** Now one last note.
>
> **[5:38](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=338)** You can pretty much go to any search engine and type in Get-Service, that commandlet.
>
> **[5:42](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=342)** I know example for a Bing, it'll take you right to the TechNet article, it'll generally be the very first result in your search.
>
> **[5:48](https://www.linkedin.com/learning/learning-powershell/getting-help?u=76281980&t=348)** So don't forget about those wonderful search engines to learn more about your PowerShell commandlets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (21), [[Microsoft Word|Word]] (1), [[Microsoft]] (1)
> **Tools:** powershell (21)
> **UI Navigation:** click on (1), scroll up (1), scroll down (1), go to (1)
> **CLI Commands:** find (2)
> **Cross-References:** coming up (1)
> **Definitions:** is called (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** install (1)

#### [Discovering cmdlets and aliases](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=0)** - [Voiceover] So, now as you start looking at [[Powershell]], you're probably starting to, "hey, it's a pretty easy language to read, I can do all kinds of great things inside of it, but there has to be more than just get-service."
>
> **[0:09](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=9)** And, you're right, there actually is quite a bit more.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=12)** Well, how do ya find those commands inside of PowerShell?
>
> **[0:15](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=15)** Well, yep, there's another command that you'll have to learn: get-command.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=19)** So, if I just bring that up and hit enter, it's gonna show me all the cmdlets that are available to me on the system.
>
> **[0:25](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=25)** Now, a couple notes, first off: this isn't all the cmdlets that are available to you.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=29)** You might have ones that are a part of a service that you'll install onto a system that you don't have right now.
>
> **[0:34](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=34)** You might have ones that download, and they might install as part of a service, so, depending on where you're at and what system you're on PowerShell may be different, but they'll have all the base core commandments that are here.
>
> **[0:46](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=46)** As you scroll up this list, there's quite a few cmdlets that are available for you.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=51)** So, I might scroll up and I see a couple Set-VMMigrationNetwork, I'm not quite sure what that is, or Set-VM, hey that's an interesting, I don't know what Set-VM is.
>
> **[0:59](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=59)** Well, remember, one of the other cmdlets that we have is get-help.
>
> **[1:02](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=62)** So, I can just say get-help set-vm.
>
> **[1:05](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=65)** Let's learn more about that cmdlet.
>
> **[1:07](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=67)** This is the great thing about PowerShell, is I can run my cmdlets, find out what each of them do.
>
> **[1:12](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=72)** Oh, this configures a virtual machine.
>
> **[1:13](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=73)** So, if I'm using Hyper-V, this allows me to do that basic work.
>
> **[1:17](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=77)** I get a general sense, and remember, help is available for you for all the cmdlets, folks, it's a part of how PowerShell works: to help us learn this language for what you're gonna wanna do.
>
> **[1:27](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=87)** Now, I'd love to say I know all the cmdlets that are on a Window's system.
>
> **[1:30](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=90)** I know quite a few, but I don't know all of them.
>
> **[1:32](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=92)** There's just thousands of cmdlets that we can use and leverage, especially as you start installing roles and services on a Window's server.
>
> **[1:39](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=99)** They're gonna a lot more cmdlets.
>
> **[1:41](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=101)** It's pervasive throughout our environments that we can work with.
>
> **[1:44](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=104)** Now, another way we can work with commands inside of PowerShell is via aliases.
>
> **[1:48](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=108)** Aliases, as you may recall, is how you can bridge your knowledge from where you're coming from to where you wanna go inside of PowerShell.
>
> **[1:54](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=114)** So, you may actually know some PowerShell.
>
> **[1:56](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=116)** I'm gonna type in dir.
>
> **[1:58](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=118)** I wanna see the directory contents.
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=119)** Well, that's pretty common.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=121)** Well, in [[Linux]], you might use ls.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=123)** If all you know is PowerShell, you might use gci.
>
> **[2:05](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=125)** What in the heck's gci?
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=127)** Well, dir, ls, and gci are aliases for a cmdlet called get-childitem, and if I run this cmdlet, I get the same results.
>
> **[2:16](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=136)** The one thing about PowerShell commands, is you can create your own aliases if you wanna shorten down the name of a really long cmdlet, and trust me, there are some really long cmdlets that are out there, or you can leverage the ones that are built in to help leverage some of that knowledge you mighta had from past command prompt type of environments.
>
> **[2:32](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=152)** Now, how do ya find out what aliases are available for any given cmdlet?
>
> **[2:37](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=157)** Well, you already know the answer to that, folks, it's get-help!
>
> **[2:39](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=159)** So, I'm just gonna type in get-help get-childitem, and it's actually in the full-help, so I'm gonna go ahead and do a full switch on the end of this, and run it, So, notice I ran get-help-get-childitem and it gave me all the information, but I'm lookin' for the aliases, here.
>
> **[2:54](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=174)** So, if I scroll up, just above the examples that we'll see inside of it, you'll notice that I have, you can also refer to get-childitem, so the notes sections for all your PowerShell cmdlets will list out what aliases, if any, exist, for that particular cmdlet.
>
> **[3:09](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=189)** Also notice, says, hey, see about_Aliases.
>
> **[3:13](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=193)** I wonder what that is.
>
> **[3:14](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=194)** Well, that's another type of help file we can learn more about.
>
> **[3:16](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=196)** Now, watch what happens when I do this: get-help about_Aliases, it's gonna bring up another help file that talks about aliases.
>
> **[3:25](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=205)** How to create new ones, how to export them, import them, how to set those different alias files up inside of our environments.
>
> **[3:32](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=212)** The great thing about this, folks, is it's gonna give you a really good example.
>
> **[3:36](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=216)** So, sometimes, our help file has even more help which you can learn.
>
> **[3:40](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=220)** So, once you start learning what the basics of the commands, that you can find 'em with get-command, you can use get-help to learn more about those commands, and some of those commands may have alias which provides an easier way for you to actually run those commands.
>
> **[3:51](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=231)** You'll notice, here on my screen, guess what?
>
> **[3:54](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=234)** Get-help has an alias: gh.
>
> **[3:56](https://www.linkedin.com/learning/learning-powershell/discovering-cmdlets-and-aliases?u=76281980&t=236)** So, we really have a lot of great things that we can do inside of PowerShell once you start working with what commands are available to you, really, then it's just a matter of learning how to use that command inside of your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (12), [[Linux]] (1)
> **Tools:** powershell (12), command prompt (1)
> **CLI Commands:** find (4), ls (2)
> **UI Navigation:** scroll up (3)
> **Prerequisites:** install (2)
> **Speakers:** - [voiceover] (1)

#### [Get-Service and Get-Member](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=0)** - [Voiceover] So let's actually run our first cmdlet inside of [[Powershell]], and if you've never run PowerShell you're gonna run the first cmdlet I ever ran when I started working with PowerShell many years ago, and that is Get Service.
>
> **[0:11](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=11)** I'm just gonna type in Get-Service my good ol' friend and hit Enter, and it's gonna give me a list of results of all the services.
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=17)** Now you might be thinking, "Matt, I have a control panel to do that for me."
>
> **[0:21](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=21)** You're exactly right, but remember the power behind PowerShell is I can do this not only on the server that I'm sitting on, but all my other remote servers.
>
> **[0:28](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=28)** There's another parameter called Computer Name that I can send in to Get Service, that'll find out information for me across the services inside of my environment.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=36)** You'll also notice that I have three parameters, Status, Name and Display Name that came back up.
>
> **[0:42](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=42)** Well one of the great things that I can do here is I can actually query those services in and find out information; let's say that I wanna find out all the services that are currently stopped via PowerShell.
>
> **[0:52](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=52)** Actually pretty easy to do as well.
>
> **[0:54](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=54)** Let me go ahead and clear the screen.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=56)** I'm gonna go ahead and run Get Service, but this time I wanna find all the services that are currently stopped on my system.
>
> **[1:02](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=62)** So I'm just gonna type in Get-Service and I'm gonna pipe that into Where Object; now notice, when I put the pipe symbol in there I get the red bracket or the red arrow.
>
> **[1:10](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=70)** This is PowerShell's way of saying, "You're not done yet.
>
> **[1:13](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=73)** "You have to complete this command."
>
> **[1:15](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=75)** And you'll see this when you put in brackets or parentheses in your commands, we're looking for open and close.
>
> **[1:19](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=79)** So PowerShell here is helping you with the syntax, to make sure that you have all your I's dotted and all your T's crossed here.
>
> **[1:25](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=85)** So I'm just gonna start typing in the command; now, for all intents and purposes PowerShell thinks this is right.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=91)** Well, just from a basic syntax it's right, although this command would fail cause I still gotta to finish writing it.
>
> **[1:36](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=96)** So I'm gonna say where-object, and now I'm gonna open up a bracket, we'll see our red arrow come back, dollar sign, underscore, period, and now I can actually query all my different commands with just this parameter, so I'm just gonna put status.
>
> **[1:49](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=109)** You notice I have status there, and I'm gonna say "I wanna find all the statuses where they are equal."
>
> **[1:54](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=114)** So I'm just gonna simply say -eq for equals and then I'm gonna pipe in the [[Microsoft Word|word]] "stopped".
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=119)** Now believe it or not, this is actually one of the examples that you have inside of the actual PowerShell files themselves.
>
> **[2:05](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=125)** And let me close out, I gotta put another parenthesis right there.
>
> **[2:08](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=128)** I joke about PowerShell, it's case insensitive, but it definitely is spelling and syntax sensitive.
>
> **[2:14](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=134)** You'll see that all the time and I'll guarantee you as you write PowerShell, I have yet to meet anybody who's gotten all of their commands 100 percent of the time perfect.
>
> **[2:23](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=143)** I'm just gonna go ahead and run that command, and it's gonna show me all the ones that are stopped.
>
> **[2:27](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=147)** If I wanted to see the services that are running, I'd simply replace the word "stopped" with "running".
>
> **[2:31](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=151)** Now, one of things you're looking at then saying, "Hey, wait a second Matt, there has to be more properties "than just Status, Name and Display Name."
>
> **[2:38](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=158)** You're exactly right, there actually are several other properties for Get Service.
>
> **[2:42](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=162)** To find those out, we can run another cmdlet called Get Member.
>
> **[2:45](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=165)** I'm gonna show you this cmdlet for a couple of reasons.
>
> **[2:48](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=168)** One, it shows you really what you can find out about service; more importantly, if you have some of your developers in your organization that are picking on you about using PowerShell, remind them that it's based on the .Net Framework, that'll probably get them to not pick on you as much, and if they're still picking on you, show em this one cmdlet and I'll explain why it'll change their opinion of PowerShell forever.
>
> **[3:08](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=188)** I'm gonna go ahead and say Get-Service, and I'm gonna run another special part of the cmdlet called Get Member.
>
> **[3:14](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=194)** What this is going to do is actually show me all the parameters that are underneath the Get Service and what other things can I ask questions for?
>
> **[3:21](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=201)** In another video I'll show you how to get access to all these parameters so in part of your output you'll see all this.
>
> **[3:28](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=208)** And you notice that down here, I have Properties, you also have Alias Properties that are here.
>
> **[3:32](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=212)** If you scroll down you can see Site, Status, Display Name, Name, I have all those properties that are there, but you'll also notice you have these things called Methods, which are things that we can do to the actual cmdlet or the actual object itself.
>
> **[3:46](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=226)** So I can start, I can stop, I can pause, I can refresh.
>
> **[3:49](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=229)** When you show this, folks, to a developer, they understand Methods, they understand what this does and how they can access it.
>
> **[3:55](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=235)** More importantly, it just gave them an avenue that they can start taking advantage of PowerShell as well.
>
> **[4:00](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=240)** So when you run Get Member, it's gonna show you all those additional properties that are about a particular object, as well as how to access them and some of the methods under the covers.
>
> **[4:08](https://www.linkedin.com/learning/learning-powershell/get-service-and-get-member?u=76281980&t=248)** Now, in real life, from an IT perspective, you'll probably really not mess with those methods directly, but if you're working with this in code and you have a developer, they're going to be able to access these methods and running Get Member is gonna tell em, "How can I, via code, interact with those "particular services via PowerShell?"

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (15), [[Microsoft Word|Word]] (2)
> **Tools:** powershell (15)
> **CLI Commands:** find (7), make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [voiceover] (1)


### 2. Using PowerShell

[↑ Back to Table of Contents](#table-of-contents)

#### [Functions](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=0)** - [Voiceover] Let's start taking a look at some of the additional functionality that [[Powershell]] can give you.
>
> **[0:04](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=4)** Now one of the things you may have noticed when I ran Get Command, in an earlier video, I had these commands, I mean they're at the very top, and you can see them, they flash by really quick, called Functions.
>
> **[0:14](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=14)** Now, Functions actually provides some useful capabilities inside of PowerShell.
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=18)** Now we see them just as commandlets, and we actually access them just like we would any other commandlets, and we see, Set Network, Adapter, or Set Net Adapter, or Set File Share, you see all these different things.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=29)** And for us they are functions, and that's how we work with them, and how we call them.
>
> **[0:33](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=33)** In reality, underneath the cover, functions actually have a wide variety of commands that they actually do and run, for us.
>
> **[0:39](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=39)** So you don't really have to worry so much about the built in functions, 'cause you work with them just like any other commandlet.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=45)** However, you can also make your own functions that perform a variety of tasks.
>
> **[0:50](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=50)** So, what I'm gonna do here is just make a quick little function, to add up a number.
>
> **[0:54](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=54)** So you can create functions for mathematical equations, or for whatever parameters.
>
> **[0:58](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=58)** I'm going to step you through the process, of how to just make a simple function, that adds two and two together.
>
> **[1:02](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=62)** To give you a general idea of just one of the other areas you can really dig into, with PowerShell to add some additional functionality especially if you do mathematical equations, you're trying to date and time stamps, that kind of stuff, you're gonna create functions.
>
> **[1:15](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=75)** Now folks, just a clue, date and time in mathematical equations, there's a whole truckload of examples on how to do this, so you don't even have to reinvent the wheel, but I just want to show you a basic one here.
>
> **[1:25](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=85)** So I'm just simply go, function, we'll call this Add.
>
> **[1:28](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=88)** And notice that PowerShell here, is actually waiting for me, to type in more information here, it's actually waiting for me to fill in the parameters, for us to use.
>
> **[1:37](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=97)** So I'm just gonna actually type in Enter and it's gonna actually bring up, saying, "Hey."
>
> **[1:41](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=101)** Whenever PowerShell you see those three brackets, or those three arrows, PowerShell is saying you got more to do here.
>
> **[1:46](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=106)** There's more work that has to be done.
>
> **[1:48](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=108)** So I'm gonna simply say, bracket here, to start this process, I'm gonna assign a variable called add, I'm gonna make that equal two, an integer, just so it's a number, and then I'm just gonna have two plus two, and I'm gonna hit enter again, and I'm gonna do what is called write the output of this.
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=127)** And what's that gonna do for me is just display the result of whatever that variable is, so I'm just going to write the output, and generally speaking, when you write an output, I'm always kind of cautioned, although I can probably get away without the quotes, I always like to put the quotes in just to make sure it's there.
>
> **[2:22](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=142)** And I'm going to close that bracket, there, go ahead an enter, and notice that my red arrow went away, so for all intense purposes, PowerShell thinks I'm done with this function, and I should be.
>
> **[2:30](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=150)** As long as I didn't make any other typos, I'm just going to hit enter.
>
> **[2:33](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=153)** And I'm just going to call my function, I just made a brand new one, I'm going to call it Add, and it's gonna display the result of two plus two, which is four.
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=160)** So the great thing about functions here, is that you can create your own, to do whatever you needed.
>
> **[2:44](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=164)** Now, with that said, when you're starting to learn PowerShell, I don't know if you're really gonna dig into functions, but I like to point out there's a subtle different between what functions do, and what commandlets do.
>
> **[2:54](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=174)** But we call them exactly the same way, just know that it covers that function for like Set Net Adapter that we saw, might actually have several things it does inside of it.
>
> **[3:03](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=183)** So even though we only call it a very simple name with some parameters, in reality, it's probably doing a truckload of work underneath.
>
> **[3:09](https://www.linkedin.com/learning/learning-powershell/functions?u=76281980&t=189)** So here was just a quick peek at functions, and how they can work, and how to make just a basic one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (8)
> **Tools:** powershell (8)
> **CLI Commands:** make (7)
> **Analogies:** just like (2)
> **Definitions:** is called (1)
> **Speakers:** - [voiceover] (1)

#### [Relieving anxiety with -WhatIf and -Confirm](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=0)** - [Voiceover] So you're probably thinking right now "Matt, I've got the hang of this [[Powershell]] stuff and I'm ready to start writing my commandlets, I'm ready, I've been working on my test environment, they all worked great."
>
> **[0:09](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=9)** You're gonna get to a point where you run your first PowerShell script inside a reduction environment and I guarantee you, you're gonna have that first script all ready to go, it's all fired up, commandlets are all in order, you know it worked in tests and your hand is gonna hover over the [[Microsoft Word|word]] Enter.
>
> **[0:25](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=25)** You're not sure what's gonna happen, you're gonna have anxiety.
>
> **[0:27](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=27)** PowerShell can cause anxiety.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=29)** So, let me actually show you a commandlet here.
>
> **[0:31](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=31)** And I'll recommend, don't run what I'm about ready to show you, but let's talk about what this would do inside of our environment.
>
> **[0:39](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=39)** So, I'm gonna say Get-Service and bring up my handy-dandy pipe and type in Stop-Service.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=45)** I know what you're thinking.
>
> **[0:46](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=46)** You might be sitting on the edge of your chairs as you're watch this video, going, "Matt's not really going to push the button, is he?
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=51)** He's not really going to hit Enter, is he?"
>
> **[0:52](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=52)** A matter of fact, I'm not, but what that would do, it'll do exactly what it says.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=56)** It will stop every service.
>
> **[0:58](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=58)** And as an administrator in PowerShell, pretty much the best way to bring the system back we'd probably have to reboot it.
>
> **[1:05](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=65)** But one of the great things about PowerShell is we can ease that anxiety a little bit with what are called the Risk Mitigation Parameters, so I'm gonna simply say, PowerShell, you know what?
>
> **[1:15](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=75)** I'm not quite sure what this'll do to me, let me just find out.
>
> **[1:18](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=78)** And I can simply type in a parameter called -Whatif and I'm going to ask PowerShell -Whatif I ran this commandlet?
>
> **[1:24](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=84)** And I'm just going to hit Enter, and sure enough it would have stopped everyone of my services, by the way, in alphabetical order, for my environment.
>
> **[1:32](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=92)** So you can always run -Whatif and kind of get an idea of what's gonna happen without actually committing to this command it's there.
>
> **[1:39](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=99)** That is just one of the risk mitigation parameters that we have.
>
> **[1:42](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=102)** Now, there's two, so -Whatif is one, the other and I'm just gonna bring up my command, with just the up arrow, is called -Confirm.
>
> **[1:48](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=108)** Now, remember I talked about PowerShell is an object-based language and that each object gets passed into the other one?
>
> **[1:55](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=115)** It actually does it one at a time, so I'm just gonna do -Confirm here and I want you to look at the output as I go through this.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=121)** I'm actually gonna run this command.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=123)** Once again, if you do this in your own environment pay attention to the prompts on the screen.
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=127)** I wouldn't recommend it anywhere but a test.
>
> **[2:09](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=129)** It is kind of fun. I have done this on a test VM.
>
> **[2:11](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=131)** It really craters it when you do everything.
>
> **[2:13](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=133)** So I'm just gonna say -Confirm and what it's gonna do is ask, "Are you sure you wanna do this?"
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=138)** Now, notice it's my first one "Autodesk Application Manager Service".
>
> **[2:21](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=141)** No, I don't want to stop that, just hit [N] and Enter and the next service comes up.
>
> **[2:26](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=146)** So as we work with the pipe symbol, it takes each object one at a time and passes it over.
>
> **[2:31](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=151)** So it would do this for all the services, it would actually ask me to confirm, like no I don't want to do this and since I want to cancel out of this I'm just gonna say [L] which is no for all.
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=160)** So one of the great things that we can have with PowerShell, you're gonna have anxiety and that's okay.
>
> **[2:45](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=165)** Remember, if you've tested things out, you should really work with those tests and should be fine.
>
> **[2:49](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=169)** Now, word of advice, folks, if you get lazy in your tests and you use a bunch of wildcards for things, be very cautious when you roll those wildcards into production.
>
> **[2:57](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=177)** I had a true story where I had a friend of mine, was an IT admin, and, by the way, never did get fired, but he rolled a script out of production using a wildcard and he flattened 500 servers.
>
> **[3:07](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=187)** And it was just a mistake he had made, if he had removed the wildcard everything would've been fine and the script would have worked the way it was supposed to.
>
> **[3:13](https://www.linkedin.com/learning/learning-powershell/relieving-anxiety-with-whatif-and-confirm?u=76281980&t=193)** But, bear in mind, folks, when you take things from test to production using parameters like -Confirm and -Whatif can help ease your mind and mitigate your risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (9), [[Microsoft Word|Word]] (2)
> **Tools:** powershell (9)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [voiceover] (1)

#### [ISE and you](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=0)** - [Voiceover] Now folks, let's talk about [[Powershell]] for just a second.
>
> **[0:03](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=3)** I know what you might be thinking.
>
> **[0:04](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=4)** Matt, this is great.
>
> **[0:05](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=5)** We can do all these commands and it's wonderful but I have to do it in the command prompt?
>
> **[0:09](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=9)** I like GUIs and I like doing things inside of GUIs.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=12)** And especially if you watch the video on how to create functions, you're probably thinking wait a second, I have to do that inside of here?
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=17)** What if I make a typo?
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=18)** I have to retype all that information back in?
>
> **[0:20](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=20)** Well, yeah you would if you did it inside the command prompt.
>
> **[0:23](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=23)** But the developers and creators of PowerShell also thought you know what, command prompt's great and it's useful, but in reality, most likely people are gonna want to create scripts, they're gonna want to create functions, and they're gonna want to be able to repeat things and just keep things in files.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=36)** Well the nice thing about that, we actually have something for you.
>
> **[0:38](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=38)** It's called the integrated scripting environment, or the ISE for short.
>
> **[0:42](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=42)** And from inside of PowerShell, I simply type in ISE.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=45)** And it's gonna bring up my nice GUI console.
>
> **[0:47](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=47)** This is a GUI front end of PowerShell.
>
> **[0:49](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=49)** And oh, by the way, just to kinda let your mind wander for a bit, it was written in PowerShell.
>
> **[0:53](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=53)** So they actually used PowerShell to create this GUI, this environment that runs PowerShell commands.
>
> **[0:58](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=58)** As a matter of fact, a lot of the GUIs that you might find on your modern servers like [[Windows Server]] 2012 R2, for example, the server manager that you have is actually written in PowerShell and when you run commands, it actually does all the PowerShell under the cover.
>
> **[1:11](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=71)** So really PowerShell is everywhere.
>
> **[1:13](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=73)** The nice thing about the ISE is it has a lot of advantages into it.
>
> **[1:17](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=77)** Not only do we have the scripting pane up here at the top which allows me to write my rich, robust scripts, you have error check and debugging built into this so you can step through your script one line at a time if you so choose.
>
> **[1:28](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=88)** You also have your output panel.
>
> **[1:29](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=89)** So as you run those scripts in the top pane, the outputs gonna show on the bottom.
>
> **[1:33](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=93)** And this works just like any other PowerShell command window.
>
> **[1:36](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=96)** So down here in the bottom, if I want to just want to run a quick DIR to see what's there, it runs just like it would as if I were in the regular command prompt.
>
> **[1:43](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=103)** It is the command prompt for all intents and purposes inside of here.
>
> **[1:46](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=106)** Now, the ISE also does something else really great.
>
> **[1:49](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=109)** They brought something in when they developed the ISE called Intellisense.
>
> **[1:52](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=112)** Now let me show you what this one does.
>
> **[1:54](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=114)** I'm just gonna go up here and I would bring up our friend Get-Service again.
>
> **[1:57](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=117)** And notice what it does here.
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=119)** It brings up a list of all the services.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=121)** Yeah, remember I talked about we could find all those commands.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=123)** It's there.
>
> **[2:04](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=124)** But notice as I start typing, it automatically starts filtering on those different things.
>
> **[2:08](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=128)** And I'm gonna just hit enter.
>
> **[2:10](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=130)** It's gonna fill in the [[Representational State Transfer (REST)|rest]] of the commandlet for me as I go on.
>
> **[2:13](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=133)** But wait, there's more.
>
> **[2:15](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=135)** I'm gonna hit the dash.
>
> **[2:16](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=136)** I'm gonna bring, oh!
>
> **[2:17](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=137)** It does all the parameters.
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=138)** Remember I showed you Get-Member to show all the parameters?
>
> **[2:21](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=141)** Well I kind of fibbed.
>
> **[2:21](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=141)** You could've gone in the ISE and just typed in the dash after any commandlet, it's gonna show you a list of all the parameters.
>
> **[2:28](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=148)** And just like the intellisense for commandlet names, if I start typing, it's gonna start filtering that out as well.
>
> **[2:34](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=154)** And this is where it gets even better, folks.
>
> **[2:35](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=155)** I'm gonna hit enter, space over, wait a second.
>
> **[2:38](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=158)** Matt, those are names of local services.
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=160)** Absolutely right.
>
> **[2:42](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=162)** These are actual services that are running on my system.
>
> **[2:44](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=164)** So if I wanna find the audio service, I can just highlight it, scroll down, and hit enter and it's gonna bring it up and I have things that are spelled correctly.
>
> **[2:51](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=171)** The thing I love about intellisense, helps solve one of my frustrations with PowerShell.
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=176)** You know, I get in front of lots of audiences and I type in front of it.
>
> **[2:59](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=179)** Which there's nothing more nerve wracking.
>
> **[3:01](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=181)** But the great thing about this, I don't have to worry about spelling things incorrectly or syntax.
>
> **[3:05](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=185)** Intellisense really helps me in this aspect.
>
> **[3:08](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=188)** And when you're first working with PowerShell, I'll tell you what, there is nothing more frustrating than having oh I forgot a comma, and I have to go rewrite it all over again.
>
> **[3:16](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=196)** ISE really makes it easier.
>
> **[3:18](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=198)** Now you might be wondering how do I run this command because if you hit enter, it just creates another script line.
>
> **[3:23](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=203)** There's actually a couple ways to run your commands inside of PowerShell.
>
> **[3:27](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=207)** And you'll notice up here at the top, I have a play button for run script and I have another button right next to it that's run selection.
>
> **[3:34](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=214)** So as you want to test your scripts as you make them, you can actually just highlight the line or put your [[Cursor]] anywhere in that line and simply run selection.
>
> **[3:41](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=221)** It'll run just that line.
>
> **[3:43](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=223)** In other videos, you'll see where I have lots and lots of lines and lots and lots of script files, and I'll show you how this works when you have lots of commandlets in the script pane.
>
> **[3:51](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=231)** For you use a leverage inside of PowerShell.
>
> **[3:54](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=234)** Now, there's another tool that we have inside of the ISE that makes writing commandlets even easier.
>
> **[4:00](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=240)** Now I know what you're thinking.
>
> **[4:00](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=240)** Matt, intellisense is all I need.
>
> **[4:02](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=242)** Yeah, well, in truth, probably.
>
> **[4:04](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=244)** But we actually have a thing called the command add-on.
>
> **[4:06](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=246)** So I'm gonna go to the view menu, and I'm gonna select command add-on.
>
> **[4:10](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=250)** Now, I will tell you, folks, if you run into somebody who's old and wizened that's been using PowerShell since before PowerShell was there, and matter of fact, its code name way back when was called Monad, they might pick on you for using this one.
>
> **[4:21](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=261)** Don't let them.
>
> **[4:22](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=262)** Why? Because this tool is awesome.
>
> **[4:24](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=264)** You notice on the right when I opened up the command add-on, it actually gave me a list of all the commands that are on my system, all organized alphabetically.
>
> **[4:31](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=271)** We ran this by running get-command out in the window, but the good thing about this is let's say I want to run, I don't know, another thing.
>
> **[4:37](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=277)** Let's say, we'll just do get-service here just cause it's a common one that we keep using.
>
> **[4:41](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=281)** It filters it out automatically and as I highlight get-service, it gives me a little dialog box of things I want to use.
>
> **[4:47](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=287)** So let's say I want to find get-service on a server called Web Server.
>
> **[4:52](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=292)** And I want to show all the required services that are a part of that.
>
> **[4:55](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=295)** If I want to change display name, I can.
>
> **[4:57](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=297)** I actually have just a little dialog box that I can use.
>
> **[5:00](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=300)** And all I'm gonna do here is simply click on copy.
>
> **[5:03](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=303)** Come over here to my window and paste.
>
> **[5:05](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=305)** And notice what it does here.
>
> **[5:07](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=307)** It actually pastes in that command for me for me to use and leverage.
>
> **[5:11](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=311)** All the syntax is in proper order.
>
> **[5:13](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=313)** All my parameters are in the right ordering.
>
> **[5:15](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=315)** So the command add-on really helps you learn the language.
>
> **[5:18](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=318)** Now folks, you may not use this a lot, but I'll tell you when I run across a new commandlet that I need to use in scripting, this is one of the first places I go to as well as looking online, talking with the PowerShell community which is fantastic.
>
> **[5:29](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=329)** This is just a great way you can learn this language on your own cause you can see all those different parameters, all the different switches, and all the different ways you can ask questions inside of PowerShell.
>
> **[5:39](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=339)** So as you can see, the ISE did some really, really nice things for you to help learn the language with intellisense and the command add-on.
>
> **[5:45](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=345)** The last one I want to show you is something we'll get into in later videos.
>
> **[5:49](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=349)** But if I go to the file menu, there's an option here that says new remote PowerShell tab.
>
> **[5:54](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=354)** What does that do?
>
> **[5:55](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=355)** That actually opens up another tab inside the ISE where I can start writing scripts, but it actually establishes a remote session with whatever computer I specify.
>
> **[6:03](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=363)** So if I just click on that, it's gonna ask me for a computer name and a user name with administrative credentials for that system.
>
> **[6:10](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=370)** And it's gonna open up a brand new tab.
>
> **[6:11](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=371)** All the commands that I run in that tab and all the scripts that I run in that tab will run specifically on that computer.
>
> **[6:18](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=378)** I will tell you this is a great inclusion inside the ISE.
>
> **[6:21](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=381)** Initially when you had to have remote systems you wanted to manipulate this way, you had to with PowerShell write code and write your commandlets to actually establish the remote connection.
>
> **[6:30](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=390)** The ISE makes this super easy to do.
>
> **[6:33](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=393)** And especially when you're managing hundreds of servers.
>
> **[6:35](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=395)** And if you want to hop in with PowerShell and just ask some quick questions, you can do so by running the remote PowerShell tab.
>
> **[6:42](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=402)** So I really like the ISE.
>
> **[6:43](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=403)** It's a great way to work with PowerShell.
>
> **[6:45](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=405)** And a lot of the folks that do PowerShell demonstrations or work with it live and breathe inside the ISE.
>
> **[6:50](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=410)** It's a great utility and a great tool that you can start taking advantage of.
>
> **[6:54](https://www.linkedin.com/learning/learning-powershell/ise-and-you?u=76281980&t=414)** And as a matter of fact, a lot of the videos that'll be in this course will be inside of the ISE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (25), [[Windows Server]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** powershell (25), command prompt (5)
> **Env Vars:** ise (15), gui (3), dir (1)
> **CLI Commands:** find (4), make (2)
> **UI Navigation:** go to (3), click on (2), scroll down (1)
> **Analogies:** just like (3), for example (1)
> **Definitions:** is a  (2)
> **Speakers:** - [voiceover] (1)

#### [Working with output](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=0)** - [Voiceover] Now let's take a look at one of the more common things you'll do inside of [[Powershell]], and that's actually sending out output and controlling the formatting of the output as you work with it. It's also one of the common uses for the pipe operator that we have.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=12)** So we have our get-service commandlet, so I'm gonna run that down here in my command pane, just to remind us what it looks like.
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=18)** I run get-service, and just fire that in, and notice it gives me those three properties: status, name, and displayname, for us to actually work with inside of here, but remember, in other videos I talked about get-member, all the other properties are there.
>
> **[0:31](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=31)** Well how do you get those to show up in the table?
>
> **[0:34](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=34)** Well, we can actually do that with another commandlet, called format-list, we also have an alternative, format-table.
>
> **[0:40](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=40)** By the way, the default output for get-service is the table format, so if you want a list, and I'll show you what that looks like here in a second, you can use format-list.
>
> **[0:48](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=48)** Either way, whichever one you choose, list or table, how you ask for the different properties are exactly the same way.
>
> **[0:55](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=55)** So notice it says get-service format-list, and I can actually scroll all the way over here for displayname, status, and requiredservices, and it's gonna work for me, and it's gonna show me that additional property, but notice it's also not gonna show me name, because I didn't ask for it, so watch what happens here.
>
> **[1:11](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=71)** I'm gonna run that selection.
>
> **[1:12](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=72)** First off, notice the different list that's here.
>
> **[1:14](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=74)** So this is a list view, not a table view, and you might like this view, so depending on how you want to look at the output, list or table will work with it.
>
> **[1:22](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=82)** Now if I want to see that same exact output, I can simply change this one command, or this one [[Microsoft Word|word]], to table, and run that same command again, and process it, and it's gonna show me that same area, but just now in a table format, and if I scroll all the way up to the three columns, you'll see that now I just have displayname, status, and then requiredservices over on the right.
>
> **[1:44](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=104)** So one simple change to that command really controls how that output looks and might feel for you.
>
> **[1:50](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=110)** Now one of the fun things that we can do here, and I'm just gonna do this in list format, because I prefer this one for this particular commandlet, I'm just gonna go ahead and get rid of all this, and I'm just gonna put an asterisk there.
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=119)** And let's see what happens when we run this command.
>
> **[2:02](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=122)** It shows me all of the properties.
>
> **[2:04](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=124)** Remember we did get-member, and we looked at all the different properties?
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=127)** If you put an asterisk there, you just told PowerShell, "Show me everything."
>
> **[2:11](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=131)** So the wonder of that one wild card character can actually really help control the different output.
>
> **[2:17](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=137)** Now let's talk about how do we control sorting this output, maybe you want to sort by displayname, or status, or other aspects of this.
>
> **[2:24](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=144)** You can actually sort it.
>
> **[2:25](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=145)** So let me highlight this line, and let's talk about something here.
>
> **[2:28](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=148)** Where I'm gonna do that same format table, I'm just gonna bring out displayname, status, and requiredservices, but now I'm gonna try to sort the object by the status property.
>
> **[2:37](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=157)** Now watch what happens when I run this.
>
> **[2:38](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=158)** We're actually gonna get an error, and let's talk about why we get an error here.
>
> **[2:42](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=162)** Well think about what we're asking PowerShell to do, and how PowerShell works.
>
> **[2:47](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=167)** We're asking PowerShell to get our services, and then we're asking it to output the table that we see on the screen, giving us displayname, status, and requiredservices.
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=176)** And then we're asking it to sort it, but that's not how PowerShell works.
>
> **[2:59](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=179)** It's already outputted the data and moved along.
>
> **[3:01](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=181)** It doesn't actually go back and look at the data after it's already given it to us.
>
> **[3:05](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=185)** Remember, this is an interactive shell, we asked it to show us something, and it did, and it doesn't go back and look at it.
>
> **[3:12](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=192)** Now we're gonna run that same command, but we're just gonna simply change the ordering here.
>
> **[3:16](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=196)** So now I'm gonna say get-service, I'm first gonna sort the objects as they're coming in, and PowerShell will sort them line by line, and then I'm gonna port it out in a format list.
>
> **[3:25](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=205)** All right, so let's run this command.
>
> **[3:28](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=208)** And all I did was change one order, and now I get the proper output sorted by the status that I wanted inside of there.
>
> **[3:34](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=214)** So we have that ability to work with it.
>
> **[3:36](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=216)** Now another output method that you might work with is, we might want to output this to a file.
>
> **[3:42](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=222)** So now, what are the other common ways you might want to send that to a file, whether it's out-file, or export to a csv, or an [[HTML]] file?
>
> **[3:49](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=229)** Let me actually send this out to a file, I'm just going to say out-file, it's gonna create that file, let me browse to it so you can see it's there.
>
> **[3:55](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=235)** I just created this, and all it did was take that default output, and send it to a file.
>
> **[3:59](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=239)** If I wanted display-name, or any of that other rich output, I could do so very very easily, just by having that format table and then outputting to a file.
>
> **[4:07](https://www.linkedin.com/learning/learning-powershell/working-with-output?u=76281980&t=247)** So there is a little bit of an order, but one of the most common things you'll do inside of PowerShell is actually send the data out so you can look at it, keep it, maybe create a history of log files, those types of things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (8), [[Microsoft Word|Word]] (1), [[HTML]] (1)
> **Tools:** powershell (8)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [voiceover] (1)

#### [Grid view](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=0)** - [Voiceover] So one of the great things that we have inside of [[Powershell]] is actually a thing called Grid View, and what Grid View allows us to do is actually output our data to a GUI environment where we can work with it a little bit easier, especially when you're looking just to manipulate some data and get a quick peek at what's going on in a particular server, or what's happening within a particular commandlet, Grid View might offer you a great alternative than instead of trying to figure out how to output it out to a file or a different table and that kinda stuff.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=26)** So, let me go ahead and just run get-service, with the piping into the out-Grid View and let me show you what this looks like.
>
> **[0:32](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=32)** So, if you look inside of this get-service, I actually have the ability to see what's here and work with it.
>
> **[0:38](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=38)** So, if I [[Zoom]] in, you get a general idea, just an Explorer window, but I can work with any of these columns, so, if just wanna do a quick sort on status, or name or display name, just some quick clicks, I can organize that data the way I want to.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=51)** I also have the ability to filter it, so, if I just typing in the [[Microsoft Word|word]] "net", it's gonna filter as I type based on the different parameters that I've typed, and it does it across both name and display name and status.
>
> **[1:01](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=61)** I can also come in and add even more criteria, I can say, "you know what, let's do status" and I don't wanna see "contains", I wanna say "equals to" and let's find out all the services that are running.
>
> **[1:11](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=71)** So, I just simply type in running, and all of a sudden it filters it out automatically for me.
>
> **[1:15](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=75)** So, the Grid View can actually provide a lot of data.
>
> **[1:18](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=78)** The nice thing about this is, that was just the default list, and you might be thinking, "Well wait, I saw a previous video and you showed this "wonderful thing called Format Table."
>
> **[1:26](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=86)** Well, let me try to run that Format Table, cause I just wanna have maybe display name, status, required services, and I wanted to send it all out to the Grid View, and let me go ahead and run that.
>
> **[1:34](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=94)** It's gonna get an error.
>
> **[1:35](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=95)** The main reason why it's gonna get an error, we've just asked Powershell to give us output in two different formats.
>
> **[1:41](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=101)** One that's in the command window, and one's the Grid View, and Powershell doesn't know how to do that, and therefore, just throws an error for us.
>
> **[1:47](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=107)** If you wanna control what parameters go into Grid View, you have to use another Powershell commandlet called Select Object, which I've shown here in line four, and I say get-service, select-object, and then I pipe in that same thing, display name, status, required services and at the very end, I pipe in that out-Grid View.
>
> **[2:04](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=124)** Now let's take a look at this.
>
> **[2:06](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=126)** Oh, that's much better, gives me the services I wanna work with.
>
> **[2:09](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=129)** I can even wide out the column so I can see all the data that you may not always see in the actual command window, so I like Grid View, because it really provides a great way to work with data, especially if you're just looking to take a peek into a server and find out what's happening there.
>
> **[2:24](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=144)** Now, the last one I want to show you is kinda a fun one, and we saw it with the Format Table and Format List videos.
>
> **[2:29](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=149)** But, if I add the asterisk to select-object as well, now, I'm gonna get everything inside of Grid View.
>
> **[2:36](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=156)** All the different parameters and I can sort any of these by simply clicking on the columns, and the names, the service names, I can do any of that.
>
> **[2:43](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=163)** So, I get that same functionality and same power.
>
> **[2:45](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=165)** I can add criteria to any of those things as well, so, you really have a great ability here with Grid View as an alternative.
>
> **[2:52](https://www.linkedin.com/learning/learning-powershell/grid-view?u=76281980&t=172)** Once again, if you're just looking to get some quick details, Grid View's a great way to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (4), [[Zoom]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** powershell (4)
> **CLI Commands:** find (2)
> **Env Vars:** gui (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [voiceover] (1)

#### [Running PowerShell remotely](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=0)** - [Voiceover] One of the huge advantages of [[Powershell]] is be able to access remote servers and get information from an administrative console.
>
> **[0:07](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=7)** So a lot of IT administrators actually will run PowerShell on their clientside desktops and use it to access servers in their data center located elsewhere.
>
> **[0:15](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=15)** That could be on the same building, it could be across the country, it really doesn't matter.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=19)** PowerShell doesn't care either.
>
> **[0:21](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=21)** Now if we look back once again at our Get-Service command we have this just wonderful command that we use a lot we show all our local services.
>
> **[0:28](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=28)** Now I ran it on my local server so I'm getting that information for my dcdsc server that I have, but what if I wanna find out about a server named webserver?
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=37)** All I have to do is type in the computer name parameter, one of the most common parameters for most commandlets is ComputerName.
>
> **[0:43](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=43)** And what this is going to do is run across the web and actually find out the services for a ComputerName called webserver.
>
> **[0:49](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=49)** So I'm going to go ahead and run that and it's gonna show me all the services.
>
> **[0:52](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=52)** Now, because I'm not displaying the MachineName, it looks like just like the previous command, but I'm willing to bet it's a different set of services, but I can run that from here and I'd get that information.
>
> **[1:02](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=62)** Now what if I want to see that for both of my servers at the same time?
>
> **[1:06](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=66)** I can run that Get-Service with ComputerName and separate each computer with a comma, so if you had multiple computers you could even use a parameter and pipe in other files, but once again just doing some of the basics here of what you can do with PowerShell.
>
> **[1:19](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=79)** And I'm gonna just set it out on a table, I'm going to give machinename, name, and status.
>
> **[1:23](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=83)** So I just wanna know the name of the services, the statuses whether they're running or not.
>
> **[1:26](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=86)** So I'm gonna run that selection.
>
> **[1:28](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=88)** And you notice that it's there but here's where the power of sort comes from.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=91)** You'll notice that it just kinda threw em in and the subservers are combined, some are not, it's kind of a bit of a mess, but if you remember from the output video what we can do is control that output and actually sort that.
>
> **[1:42](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=102)** So I'm gonna do that same commandlet again, but this time I'm gonna add in one small parameter.
>
> **[1:46](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=106)** Hey let's sort it by machinename and then the [[Representational State Transfer (REST)|rest]] of it's gonna be the same.
>
> **[1:50](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=110)** Format the table, giving machinename, name, and status, and I'm gonna go ahead and run that.
>
> **[1:55](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=115)** And notice it gives me that data as well, fairly easily, all with inside of the magic of PowerShell.
>
> **[2:02](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=122)** Now if you wanna have some fun, I can actually say get server ComputerName and I can say pipe select-object, we'll put in a wild card with an asterisk, and you know what we saw this in another video but it's one of my favorite things to do is Out-GridView and let me run this one and show you what this looks like.
>
> **[2:20](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=140)** And now if you look at it I have my MachineName as just webserver.
>
> **[2:23](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=143)** What if I wanted to see it all with my other server?
>
> **[2:27](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=147)** Once again, one simple modification to this script is now gonna start really giving me a lot of information about my infrastructure and now I get that general idea of what servers are running what services and I can do quick sorts and filters.
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=160)** If I just wanna see the ones on my dcdsc or the ones on my web server, look how easy it is to work with the data.
>
> **[2:47](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=167)** Now all I had to do was ask PowerShell for that.
>
> **[2:49](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=169)** So that's one way we can remote and get into PowerShell.
>
> **[2:53](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=173)** The other way is one of the great advantages of the ISE, that I mention in another video, is the Remote PowerShell tabs.
>
> **[3:00](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=180)** So let me just show you what this looks like.
>
> **[3:01](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=181)** So I'm going to bring it up.
>
> **[3:03](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=183)** You can put in the computer name and your administrative credentials for what you wanna do.
>
> **[3:07](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=187)** You connect, it's gonna ask you for a password, so I'm just gonna put in my administrative password, and then hopefully it should come up with "hey, you're there!"
>
> **[3:14](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=194)** Notice the PowerShell command is changed a little bit.
>
> **[3:17](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=197)** Now in the front of my PowerShell prompt I have the [[Microsoft Word|word]] webserver.
>
> **[3:21](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=201)** So that tells me that anything I run at this command is actually gonna be coming from that webserver, so if I just type in our friendly get-service and hit Enter, you'll see that I'm getting those services.
>
> **[3:31](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=211)** More importantly, any scripts that I run in the upper scripting pane will run on webserver.
>
> **[3:37](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=217)** So one of the nice things that I can do is I can start running these scripts all over the place.
>
> **[3:41](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=221)** So when you're working with PowerShell scripts you'll see a lot of local hosts in the commands and reference of the computer name, why?
>
> **[3:48](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=228)** Because if I have a script that I've created and it has local host all I have to simply do is open up a remote tab, open up that script, and it'll work for webserver.
>
> **[3:56](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=236)** Well what if I have another web server called webserver2?
>
> **[3:58](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=238)** I open up a remote tab, open up webserver2, paste that script in and go about my business, or you could simply just put those computer names inside the script.
>
> **[4:07](https://www.linkedin.com/learning/learning-powershell/running-powershell-remotely?u=76281980&t=247)** So there's lots of ways that we can remote with PowerShell and access servers that you're not physically at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (12), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** powershell (12)
> **CLI Commands:** find (2)
> **Env Vars:** ise (1)
> **Analogies:** just like (1)
> **Speakers:** - [voiceover] (1)


### 3. Taking PowerShell On Premises and Online

[↑ Back to Table of Contents](#table-of-contents)

#### [Finding and installing modules](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=0)** - [Voiceover] Now one of the great things about [[Powershell]] is just the number of commands and commandlets that we can run on a server.
>
> **[0:06](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=6)** But in previous videos, I really talked about that's not all that's there, there's a lot more that's available to you.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=12)** Now commands come down in a thing called a module, and all a module is is a collection of commandlets for a particular function.
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=18)** VMware has modules for its tools, Citrix has its tools, [[Microsoft Azure|Azure]], [[Microsoft Office|Office]] 365, they all have their own modules, and you even have additional modules on your systems that may not be available to you, because they haven't been installed yet.
>
> **[0:31](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=31)** So the question becomes how do I find those modules, how do I install them, and how can I start taking advantage of them?
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=37)** So I'm going to go ahead and just run a quick command, to just remind us what get command looks like.
>
> **[0:42](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=42)** Remember all the different commands that we have available on a system.
>
> **[0:46](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=46)** Now how do I know that's all of them?
>
> **[0:47](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=47)** Well, I don't, but what I can also run is what do I have available to me?
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=51)** What else is out there that hasn't been currently installed?
>
> **[0:54](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=54)** So what I'm going to do is just run get module, and I'm going to say list available, and what this is going to do is show me all the modules that are on my system that are available for me to actually use in leverage.
>
> **[1:06](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=66)** Now these modules haven't been loaded.
>
> **[1:07](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=67)** Now the nice thing about this, unlike previous versions of PowerShell where you had to remember, and you had to import all the modules into your system, you no longer have to do that.
>
> **[1:17](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=77)** Inside of PowerShell 3.0 and greater, we actually have what is called module autoloading, so if you happen to call a command out of a module that hasn't been loaded yet, it will actually do it automatically for you.
>
> **[1:27](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=87)** But let me show you the process of how you can actually manually load your modules, and this is common inside of scripts, you'll see a lot of these statements at the beginning of a lot of scripts inside of the PowerShell world.
>
> **[1:38](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=98)** Import module, and I'm just going to say name, and I'm going to say I want to import applocker, which is just one of the modules built into most [[Windows]] systems, and it's going to bring up, it runs that command, everything's working fine.
>
> **[1:49](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=109)** Now if I want to see what commands are there, I simply say get command, followed by the module parameter, and then I tell it applocker, and what it's going to do is show me all the specific commandlets that are there, so as you can work with PowerShell, there's lots and lots, and we're talking thousands of commandlets.
>
> **[2:06](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=126)** Generally speaking, you're going to have very focused ability on what you want to do, and actually install on the systems for you.
>
> **[2:13](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=133)** Now one of the things that you might leverage as you're working with PowerShell, is once again the community has done a lot of great work, so you may not always have to remember which modules or which commandlets, and you want to reverse engineer some things.
>
> **[2:25](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=145)** Well, the modules and commandlets that we have based on the system help us generate and create scripts.
>
> **[2:30](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=150)** Well, one of the nice things that's out on the World Wide Web in the tech environment is the PowerShell gallery, the repository, where we actually have scripts that are out there.
>
> **[2:39](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=159)** And you'll notice that I have actually have a script resources, and they have scripts for pretty much every language imaginable across many, many, many functions that are there inside of it, and you can filter on PowerShell or VB Script, or C Sharp.
>
> **[2:52](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=172)** It really depends on what you write your scripting language in.
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=176)** The thing I'll point out though is that there's over 6,000 scripts, that's 2,000 clear of its closest competitor, which is VB Scripts, so people write PowerShell, and actually support this community.
>
> **[3:06](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=186)** So when you start working with your modules, and you start creating those scripts that are inside the world, you're not going to have to reinvent the wheel, you can do a lot of reverse engineering, there's been a lot of great work done by the PowerShell community.
>
> **[3:17](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=197)** So as you start working with the modules, start trying to identify work loads, my advice to you is go take a look at the PowerShell gallery first and say hey, what's out there, what's in that repository that I can actually use, what's in that gallery that I can already use that I can take and leverage for my existing environment?
>
> **[3:32](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=212)** Now, as you start to work with the scripts and the galleries that are out there, you're probably going to run in to some security issues with PowerShell, specifically around a policy called execution policy.
>
> **[3:43](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=223)** Let me hop back into my PowerShell command prompt and show you what I mean.
>
> **[3:47](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=227)** So I'm going to hop back inside of here, and I'm going to get what is called my execution policy, and let me talk about what this is going to come up with.
>
> **[3:54](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=234)** What this does is when you work with scripts and download scripts, PowerShell doesn't trust them, matter of fact, doesn't trust them by default.
>
> **[4:01](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=241)** It only trusts scripts and things that are created on the local machine.
>
> **[4:06](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=246)** Even if I took a script I created here, and tried to run it remotely on another server, I'd most likely get an executionary and access denied message.
>
> **[4:14](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=254)** So when you work with PowerShell, by default, our policy is set to remote sign, and what that simply means is local scripts will run fine, but for any other remote script it has to be digitally signed to be able to verify that it'll work properly.
>
> **[4:27](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=267)** Now there's actually four levels of security that you can set this execution policy for.
>
> **[4:32](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=272)** You can set it to restricted, and restricted means nothing runs on the system, it'll prevent all scripts that you've downloaded, and even ones that you've created from running.
>
> **[4:41](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=281)** We have one that is all signed.
>
> **[4:43](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=283)** It basically means all the scripts, whether they're locally created or remotely downloaded, we have to have them digitally signed and encrypted.
>
> **[4:51](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=291)** We have remote sign, which is the policy you're seeing here, and then you have one called unrestricted.
>
> **[4:55](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=295)** Now folks, if you ever run unrestricted as your execution policy in a production environment, I'm going to come and take your PowerShell card away.
>
> **[5:03](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=303)** This is not something you want to do in a production environment, but unrestricted is great for testing, especially if you're creating scripts that you're going to be distributing out to the world, you might want to just remove unrestricted as you test and develop your script, but if you turn on unrestricted in a production environment just for a test, that's OK, you better turn it back on, otherwise you could open yourself up to some just really bad things inside of your environment.
>
> **[5:25](https://www.linkedin.com/learning/learning-powershell/finding-and-installing-modules?u=76281980&t=325)** So once again, working with your execution policy, if you run into those errors that you're going to see, and say hey, this script won't run, or something won't run properly, the error message will actually tell you that it's execution policy, and to set it, it's just simply set execution policy, and you simply give it one of the parameter names, whether it's restricted, all signed, remote sign, or unrestricted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (16), [[Microsoft Azure|Azure]] (1), [[Microsoft Office|Office]] (1), [[Windows]] (1)
> **Tools:** powershell (16)
> **Definitions:** is called (2), is a  (1), basically means (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Versions:** 3.0 (1)
> **Speakers:** - [voiceover] (1)

#### [Server cmdlets](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=0)** - [Voiceover] Now that you understand some of the basics of [[Powershell]], let's actually start getting to do some real work on a server.
>
> **[0:06](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=6)** Now one of the great things about PowerShell, when you use this on a [[Windows Server]], it's pretty much everything that you see in the GUI environment of the server, everything you can do in the server manager, you can most likely do with Powershell.
>
> **[0:18](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=18)** It's really just a matter of finding the commandlets.
>
> **[0:20](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=20)** So I'm gonna show you two of most common things that you might do on a server and that's install roles and features and set up a backup.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=26)** So let's actually hop in and do some work.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=29)** Now, one of the first things that we're gonna do let's actually install some features, but before we even install it, let's see what already on the server.
>
> **[0:35](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=35)** So I'm just gonna highlight this first line.
>
> **[0:37](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=37)** We run one little commandlet called Get-WindowsFeature.
>
> **[0:40](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=40)** And what this is gonna do is process and show me what's been installed on my server.
>
> **[0:44](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=44)** Very simple output here.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=45)** And x means it's installed.
>
> **[0:47](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=47)** A clear box means it's not.
>
> **[0:48](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=48)** The nice thing about this, you'll see the services on the left.
>
> **[0:51](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=51)** These are what I call the friendly names.
>
> **[0:53](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=53)** But under the covers, we need to know the actual name of the role of their feature.
>
> **[0:57](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=57)** Well, if we scroll over here to the right, this'll give us that output.
>
> **[1:00](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=60)** So, when you wanna refer to any of these roles or features inside of PowerShell you have to know this name on the right.
>
> **[1:06](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=66)** So, what we're gonna do on these actual servers here is we're gonna install Web-Server Role, which is the IIS role on Server.
>
> **[1:11](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=71)** So, I'm just gonna highlight this.
>
> **[1:12](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=72)** Let's make sure it's not installed.
>
> **[1:14](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=74)** So, I have a little before picture here.
>
> **[1:16](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=76)** It's not installed.
>
> **[1:17](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=77)** Now, I'm gonna install this.
>
> **[1:19](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=79)** Now, how do I install it?
>
> **[1:20](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=80)** Well, you can just use the Install [[Windows]] Feature commandlet or you can have fun with the pipe symbol.
>
> **[1:26](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=86)** Notice what I'm gonna do here.
>
> **[1:27](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=87)** I'm gonna take Get-WindowsFeature -Name Web-Server.
>
> **[1:29](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=89)** I'm gonna take that name, I'm gonna take that feature and I'm gonna pipe it and pass it into the Install-WindowsFeature environment that we have.
>
> **[1:36](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=96)** And that's gonna install the role.
>
> **[1:38](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=98)** So, let me go ahead and process that.
>
> **[1:39](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=99)** And it's gonna run.
>
> **[1:40](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=100)** It's only gonna take a second or two here to finish this installation, but now I'm gonna install IIS on the server.
>
> **[1:45](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=105)** Now, I don't know if you noticed, as we're actually doing the installation I'm on a remote server.
>
> **[1:50](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=110)** I'm doing this from my administrative console.
>
> **[1:52](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=112)** I'm not actually on WebServer, but I'm installing this role remotely.
>
> **[1:56](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=116)** So, I could take this script and install it pretty much on any server inside of my environment.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=121)** Now, look.
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=121)** It's come back.
>
> **[2:02](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=122)** It's been installed.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=123)** Now, just because I wanna verify and that I'm not pulling any tricks on you, I'm gonna highlight that Get-WindowsFeature commandlet again.
>
> **[2:10](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=130)** Now, notice I have the pretty x inside the box.
>
> **[2:12](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=132)** So, I've just installed the Web-Server role on my systems.
>
> **[2:15](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=135)** And that works, pretty much, for every Windows feature inside of it.
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=138)** You also have a Remove-WindowsFeature commandlet to uninstall roles as well.
>
> **[2:23](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=143)** Now, let's talk about backup.
>
> **[2:25](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=145)** Now, inside of here, I've actually commented out the line for backup.
>
> **[2:29](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=149)** Windows-Server-Backup, it's already been installed on my server.
>
> **[2:32](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=152)** But let's talk about how we actually use backup.
>
> **[2:34](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=154)** Now, to go through this, we have to understand one of the great things that we can do in Powersshell scripts is set variables.
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=160)** So, you'll notice that I have a dollarsign-policy, and this is my way of telling PowerShell, "Hey, I want you to keep that value.
>
> **[2:46](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=166)** "Whatever I put to the right of the equals sign here, "I want you to keep that value."
>
> **[2:50](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=170)** Because I'm gonna call on that in other parts of my script.
>
> **[2:54](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=174)** And you'll see that as I'm actually setting the backup policy.
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=176)** So, when you do backup with PowerShell, just like we do with the GUI, you have to create a policy, tell it what to backup, when to back it up, and then actually perform a backup.
>
> **[3:05](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=185)** And we're gonna do this all with our language.
>
> **[3:06](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=186)** I'm gonna step you through this script as we actually set this policy.
>
> **[3:10](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=190)** So, I'm just gonna set the policy.
>
> **[3:11](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=191)** I'm gonna start creating a new one.
>
> **[3:13](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=193)** I'm gonna tell it what to back up.
>
> **[3:14](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=194)** I'm just gonna back up a simple directory for purposes of demonstration.
>
> **[3:17](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=197)** Notice I'm piping that into the FileSpec variable.
>
> **[3:21](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=201)** And then I'm gonna, simply, add that to my policy that I'm creating up here.
>
> **[3:24](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=204)** Notice the policy variables are tied and the FileSpec variables are there as well.
>
> **[3:28](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=208)** Now, here's where a great thing of variables come in is what if you wanna change that location or add those locations?
>
> **[3:34](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=214)** All I'd have to do is come up and change this FileSpec line, change location, then I don't have to worry about changing it anywhere else in the script.
>
> **[3:41](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=221)** I just have to change it inside the variable.
>
> **[3:44](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=224)** Now, let's go ahead and keep going on.
>
> **[3:45](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=225)** So, let's go ahead and change the backup location.
>
> **[3:47](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=227)** I'm gonna target just a local drive.
>
> **[3:49](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=229)** Now, normally in real life, folks, you backup to another location.
>
> **[3:52](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=232)** Just, once again, for purposes of demonstration, that's what I'm gonna do here.
>
> **[3:56](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=236)** And then I'm gonna add a backup target and actually configure that whole process.
>
> **[4:00](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=240)** And this is gonna give me a little bit of output.
>
> **[4:01](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=241)** So, let me run this command and you'll see that, hey, I'm backing up that volume to that e-drive.
>
> **[4:06](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=246)** That's fine.
>
> **[4:07](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=247)** I'm gonna set my schedule for nine Now, I don't wanna wait until nine for this schedule to occur.
>
> **[4:13](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=253)** It will be a daily schedule.
>
> **[4:15](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=255)** Now I'm gonna go ahead and configure and set that policy.
>
> **[4:18](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=258)** So, I'm just gonna set the policy here.
>
> **[4:21](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=261)** It's gonna run that command, and then I'm actually gonna control that backup policy here.
>
> **[4:26](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=266)** And lemme actually go ahead and perform the backup.
>
> **[4:28](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=268)** And you'll see the backup will take just a second.
>
> **[4:30](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=270)** Now, normally, you don't wanna see this process in PowerShell.
>
> **[4:32](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=272)** You wanna run it and then just go on and do whatever else you're gonna do.
>
> **[4:36](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=276)** You can actually add a switch to this commandlet asynch on the end of it.
>
> **[4:39](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=279)** That's A-S-Y-N-C-H.
>
> **[4:42](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=282)** And what that'll do is just start the job for you, and let you go about your PowerShell business.
>
> **[4:46](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=286)** Because if you're backing up a lot of data you don't wanna wait for PowerShell to show you when it's done.
>
> **[4:51](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=291)** In my case here I did, I just wanna show you this backup policy completed.
>
> **[4:54](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=294)** So, in this video we just took a look at two simple things that we'd do on a server.
>
> **[4:58](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=298)** Installing roles and features and configuring a backup.
>
> **[5:01](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=301)** Now the great thing about this when your working with backup, we got to see the power of variables inside of PowerShell.
>
> **[5:06](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=306)** And these are just two of the things that you can do with PowerShell on you Windows server.
>
> **[5:10](https://www.linkedin.com/learning/learning-powershell/server-cmdlets?u=76281980&t=310)** There are many many more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (11), [[Windows]] (3), [[Windows Server]] (2)
> **Prerequisites:** install (11), configure (2), set up (1)
> **Tools:** powershell (11)
> **Env Vars:** gui (2), iis (2)
> **Analogies:** picture (1), just like (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [voiceover] (1)

#### [Office 365 PowerShell](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=0)** - [Instructor] As more and more organizations move their workloads to cloud technologies, the question becomes, can we actually manage those technologies with [[Powershell]]?
>
> **[0:08](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=8)** The answer?
>
> **[0:08](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=8)** A resounding absolutely, yes.
>
> **[0:11](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=11)** So we're going to take a look at how to connect [[Microsoft Office|Office]] 365 and PowerShell and what we can actually do to manage this environment.
>
> **[0:16](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=16)** First off, they're actually two ways we can do this.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=19)** There's a relatively newer module, which is called the [[Microsoft Entra ID|Azure Active Directory]] PowerShell for Graph module.
>
> **[0:24](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=24)** I know that's kind of a bit of a mouth-full, but it's actually real easy to install.
>
> **[0:29](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=29)** Install-module-name AzureAD from an administrative PowerShell session, and you get these commands.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=36)** The other way that we connect is a way that's been around for a few years now.
>
> **[0:39](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=39)** And it's using the Azure Active Directory Module for [[Windows]] PowerShell.
>
> **[0:43](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=43)** And this has a couple requirements.
>
> **[0:45](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=45)** First off, you have to install the 64-bit version of the online services Sign-In Assistant.
>
> **[0:49](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=49)** This provides basic authentication for our Office 365 environment.
>
> **[0:53](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=53)** And secondly, we have to install the module with install-module MSOnline to actually take advantage of these rich tools.
>
> **[0:59](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=59)** So let's take a look and actually show you how this works and install these tools.
>
> **[1:04](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=64)** And I'm going to step you through both of these and how to find out more about these commands.
>
> **[1:08](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=68)** 'Cause really once you learn these commands and download these modules, it's just PowerShell.
>
> **[1:13](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=73)** So knowing how to find information about them and what commands you can do, all the rules apply that we've talked about throughout this course.
>
> **[1:19](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=79)** So let me go ahead and switch over into my virtual machine.
>
> **[1:23](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=83)** So first off, there's a really good article that talks about connecting.
>
> **[1:27](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=87)** It takes you through all those step by step guidance on what do we want to do.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=91)** So the first thing I'm going to do, I'm actually going to install the [[Microsoft Entra ID|Azure AD]] module for Graph, and there's even nice information here.
>
> **[1:38](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=98)** You can even copy that command if you want here and save yourself a little bit of typing.
>
> **[1:42](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=102)** I'm going to allow access.
>
> **[1:43](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=103)** I'm just going to go into PowerShell here.
>
> **[1:45](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=105)** But this time I'm going to go into administrative session, so I'm going to right click and say run as administrator.
>
> **[1:50](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=110)** And I'm simply going to paste that command in, and I'm going to hit Enter.
>
> **[1:53](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=113)** And it's going to run out and try to find the module.
>
> **[1:55](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=115)** And if it's not local, it's then going to ask me, hey do you want me to run up and go get this from a different provider?
>
> **[2:01](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=121)** I'm going to simply going to go ahead and say yes to this.
>
> **[2:03](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=123)** Specifically it's running the new [[Git]] environment.
>
> **[2:06](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=126)** And I'm going to go and say yes.
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=127)** And hit Enter.
>
> **[2:08](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=128)** And hopefully here in just a minute it's going to download and install that module for me to start using and leveraging [[Microsoft Azure|Azure]] PowerShell for Office 365.
>
> **[2:17](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=137)** That's an untrusted repository, so it's new.
>
> **[2:18](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=138)** So I'm just going to say yes, and I'm going to say all.
>
> **[2:22](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=142)** And give it a second.
>
> **[2:25](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=145)** And it comes back.
>
> **[2:26](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=146)** Now how do I find the commands for this one.?
>
> **[2:27](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=147)** Simply get-command.
>
> **[2:29](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=149)** And let me go ahead and clear this out first so we can see it all completely.
>
> **[2:32](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=152)** Now to find out what modules we can do here, it's simply get-command-module and the name of the module is Azuread.
>
> **[2:41](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=161)** And that should bring up those commands.
>
> **[2:42](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=162)** Now these are all the things that we can do with those commands.
>
> **[2:45](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=165)** And the same rules of getting help and working with those commands apply to this as well.
>
> **[2:50](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=170)** So that's how we install the Azure AD for Graph module.
>
> **[2:53](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=173)** Now how to we install the other components?
>
> **[2:56](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=176)** Well, the first thing we have to install is the download.
>
> **[2:58](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=178)** Once again, this article does a really good job of giving you this information.
>
> **[3:01](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=181)** The first thing we want to do is actually run the Sign-in Assistant for this.
>
> **[3:05](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=185)** And we actually have a 64-bit package.
>
> **[3:06](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=186)** That's what I'm going to run here.
>
> **[3:09](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=189)** Simply, next it's going to, I'm going to allow always here.
>
> **[3:15](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=195)** And I'm just going to go ahead and run this little file.
>
> **[3:17](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=197)** Real simple install, but it's required for these particular modules to work.
>
> **[3:21](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=201)** So I'm going to go ahead and accept that.
>
> **[3:22](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=202)** I can install that information in.
>
> **[3:24](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=204)** And guess what, now it installs this environment so we can actually do a sign-in.
>
> **[3:28](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=208)** So real simple, straightforward install.
>
> **[3:30](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=210)** And then it's a matter of just going back into PowerShell and getting those commandlets to actually use and leverage.
>
> **[3:36](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=216)** So let me go ahead and clear this screen again to clear it out.
>
> **[3:38](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=218)** And, by the way, both sets of modules can run side-by-side on the same machine.
>
> **[3:42](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=222)** There should be no issues with conflicts there.
>
> **[3:44](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=224)** So let me just go ahead and install the module.
>
> **[3:48](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=228)** And I'm just going to go ahead and give it the msonline indicator.
>
> **[3:52](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=232)** And that should take along and just install that.
>
> **[3:54](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=234)** It says untrustworthly repository simple because it's downloading from the internet.
>
> **[3:57](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=237)** But they are trusted repositories, like the Azure AD as well as this one.
>
> **[4:02](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=242)** Cool thing about this, this installs, and we're going to take a look at the commands inside of there in just a second.
>
> **[4:07](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=247)** How do I find all the modules?
>
> **[4:08](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=248)** Real simple, get-command-module and then msonline, which is my name of my module.
>
> **[4:16](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=256)** And guess what?
>
> **[4:17](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=257)** It's going to show me all the commands that are there.
>
> **[4:19](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=259)** And so all these commands begin with the four letters M-S-O-L for MSOnline.
>
> **[4:23](https://www.linkedin.com/learning/learning-powershell/office-365-powershell?u=76281980&t=263)** And combined with the other commandlets, the ones with Azure AD, it provides you a full and rich experience to actually manage Office 365 from PowerShell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (10), [[Microsoft Office|Office]] (4), [[Microsoft Entra ID|Azure ad]] (4), [[Microsoft Entra ID|Azure active directory]] (2), [[Windows]] (1)
> **Prerequisites:** install (16)
> **Tools:** powershell (10)
> **CLI Commands:** find (6), git (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Azure PowerShell](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=0)** - [Instructor] So what about [[Microsoft Azure|Azure]]?
>
> **[0:01](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=1)** Can we manage Azure with [[Powershell]]?
>
> **[0:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=3)** Absolutely, we can manage Azure with PowerShell, and in fact, there's lots of ways to manage Azure.
>
> **[0:09](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=9)** PowerShell is just one of them, and by the way, folks, we actually have a couple of ways to manage Azure with PowerShell inside of our universe that we have of Azure.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=19)** First off, whenever you think about managing Azure, you have to understand that everything we do is done with the Azure Resource Manager.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=26)** It's kind of the get stuff done person.
>
> **[0:28](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=28)** Whenever you do something inside of Azure whether you use the portal or PowerShell or something new called the [[CLI]] which we'll talk about the command line interface is in just a moment, it all gets done through the Azure Resource Manager.
>
> **[0:39](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=39)** The beautiful thing about this, you get to pick the tool that you want to use to manage the Azure environment.
>
> **[0:44](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=44)** Now since this is a PowerShell course, we're obviously going to talk about the PowerShell ways to do that, but understand every command that we run ends up through the Azure Resource Manager after we properly authenticate against that.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=56)** So what are the PowerShell ways to manage Azure?
>
> **[0:58](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=58)** Well first off, we have Azure PowerShell.
>
> **[1:01](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=61)** This is a client-based PowerShell.
>
> **[1:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=63)** It runs on [[Windows]] systems, [[Linux]] systems, or macOS.
>
> **[1:07](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=67)** So pretty much any laptop that you have or any system you want to manage Azure from locally, we can actually leverage the tools for that, and I'll show you how to install that as well.
>
> **[1:16](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=76)** Really cool stuff, but that's running locally on the system which means we have to have those cmdlets there for us available to use and leverage, but we also have what is called the Azure Cloud Shell.
>
> **[1:27](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=87)** This is something relatively new to the Azure environment, but we actually have the ability to bring up the PowerShell window inside of the Azure portal.
>
> **[1:35](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=95)** So if you go to portal.[azure.com](https://azure.com) and bring up the Cloud Shell, you can bring up PowerShell to run all these commands, and by the way, the Cloud Shell also includes Bash, or the Bourne-Again Shell.
>
> **[1:46](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=106)** For all the Linux scripters that are out there, you can leverage both of those shells inside of Azure directly.
>
> **[1:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=113)** But we also have something new, and it's called the Azure command-line interface, so the CLI, and I'll tell you what, folks.
>
> **[1:59](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=119)** As much as I love PowerShell, and you know if you've gone through this course, I am a PowerShell advocate.
>
> **[2:04](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=124)** CLI is really making this world exciting.
>
> **[2:07](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=127)** The beautiful thing about the command-line interface, it needs to run on top of a shell environment whether that's Bash or whether that's Azure PowerShell.
>
> **[2:15](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=135)** We have to have that environment inside of it.
>
> **[2:17](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=137)** So I'm going to take a look at those things as well.
>
> **[2:19](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=139)** The great thing about CLI is it's cross-platform portable.
>
> **[2:22](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=142)** You learn a language once, and the beautiful thing about this is that it applies to whether you're using PowerShell or Bash.
>
> **[2:27](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=147)** So I'm going to show you a little bit of both of those as we go in to manage our Azure environment with PowerShell.
>
> **[2:34](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=154)** Now let's take a look at how do we install PowerShell on our local systems and actually start managing Azure from a local administrator system.
>
> **[2:41](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=161)** So here I am just on a [[Windows Server]] environment.
>
> **[2:44](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=164)** So I'm going to go ahead and bring up PowerShell and I'm going to bring it up as Administrative PowerShell session so I can actually install some things inside of here.
>
> **[2:51](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=171)** How do you get PowerShell?
>
> **[2:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=173)** Actually it's pretty easy to do.
>
> **[2:54](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=174)** So it's simply install module, as all good commands begin, az, I'm willing to bet you all know what that means, for allow Azure commands, and I'm going to put in a command called allowclobber.
>
> **[3:06](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=186)** What clobber allows us to do is actually replace existing commands.
>
> **[3:09](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=189)** So when you run this, that we sometimes might update, or there might be older commands, clobber's going to come in and allow the replacement of some of those older cmdlets that we have and I can add a scope command to this.
>
> **[3:20](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=200)** If I want to have it apply just for my current user, I simply just type in currentuser.
>
> **[3:26](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=206)** It allows me to actually work with that particular scope.
>
> **[3:29](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=209)** I'm going to hit Enter.
>
> **[3:31](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=211)** And it's going to run, it's going to come up, "Are you sure you want to do this?"
>
> **[3:34](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=214)** Once again, it says an untrusted repository.
>
> **[3:36](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=216)** Remember our security, it's coming from the Internet and that's fine.
>
> **[3:39](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=219)** I'm just going to say A for all.
>
> **[3:42](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=222)** Give it a second to run.
>
> **[3:43](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=223)** It's going to actually run out and install all the Azure cmdlets right directly on the system and now I can actually manage that environment.
>
> **[3:50](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=230)** Now remember, we're inside the context of Windows PowerShell.
>
> **[3:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=233)** So what we just did to this local Administrative console, not only did it come with the Windows cmdlets that were already there, we're now adding the Azure cmdlets inside the system.
>
> **[4:02](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=242)** It looks like it's starting to come down though and download.
>
> **[4:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=243)** There's actually quite a few packages because every service inside of Azure has PowerShell equivalents.
>
> **[4:09](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=249)** What does that mean?
>
> **[4:10](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=250)** Pretty much anything that you do in the portal you can automate with PowerShell, depending what you're wanting to do.
>
> **[4:16](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=256)** Now the great thing about this is that once you start learning to write these commands you can even save them inside of your Azure subscriptions, inside of the script repository you have built in.
>
> **[4:24](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=264)** So this will take a second to install, but you can get a general idea that all these commands begin with the letters az, and it's bringing them all down so I can actually have the full PowerShell Azure experience on this local system, so let that run.
>
> **[4:40](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=280)** Okay, it looks like it all ran.
>
> **[4:42](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=282)** Now how do we find all the Azure modules that we just installed?
>
> **[4:45](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=285)** Well, understand we didn't just install one module, we installed several.
>
> **[4:48](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=288)** So let's find out what those modules are.
>
> **[4:51](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=291)** So I'm just going to go simple getmodule to see what's been installed on my system, and you'll see all those modules begin with az and they have the period at the end of them.
>
> **[4:58](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=298)** So how do we learn more about those individual commands or how do we find out what's inside of there?
>
> **[5:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=303)** There's a couple ways we can do this.
>
> **[5:05](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=305)** First off, if I want to see everything that I can run, I can simply write in getcommand and type in module and use a handy dandy little wild card here.
>
> **[5:15](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=315)** So I'm just going to type in az.* so I can get everything that begins with az and hit Enter.
>
> **[5:22](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=322)** This is going to show me everything that I just installed.
>
> **[5:25](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=325)** All the different modules that are there, available for me, so I can see everything that's there.
>
> **[5:29](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=329)** You can see, there's a lot of things we can do with Azure PowerShell running locally.
>
> **[5:34](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=334)** The alternative of this is I can actually come up and inside of az I can say let's find out specifically about websites, which I believe is one of my providers.
>
> **[5:42](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=342)** So I'm just going to type in websites.
>
> **[5:44](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=344)** One of the rare times, by the way, you'll see a plural inside of PowerShell so I'm going to go ahead and run that, hit Enter, and now I see just those commands for the Azure websites.
>
> **[5:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=353)** So if I want to manipulate websites with the Azure from this local console I can.
>
> **[5:57](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=357)** This is just one way that we can leverage and use Azure and PowerShell together for that automated experience.
>
> **[6:02](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=362)** The other way, and this way I'm really excited about, is the Cloud Shell.
>
> **[6:06](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=366)** So inside your portal, you actually have this great little icon up here.
>
> **[6:10](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=370)** It's called the Cloud Shell options.
>
> **[6:11](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=371)** So I'm going to go ahead and bring that up and I'm going to go ahead and reconnect it because it does time out after 20 minutes.
>
> **[6:16](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=376)** Notice where it takes me.
>
> **[6:17](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=377)** It actually takes me into a Bash shell to begin with.
>
> **[6:20](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=380)** By the way, Bash was the first shell inside of the portal.
>
> **[6:24](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=384)** But we don't want to use Bash because we're talking about PowerShell inside of here, so I can go ahead and click on PowerShell and now I have all my PowerShell environment.
>
> **[6:32](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=392)** There's no need to install those commands.
>
> **[6:34](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=394)** There's no need to actually go ahead and leverage those environments.
>
> **[6:37](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=397)** All I have to do is just start working with PowerShell.
>
> **[6:40](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=400)** I'm authenticating against the environment.
>
> **[6:42](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=402)** I can actually start working with this environment and I'm ready to go.
>
> **[6:45](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=405)** All my commands, if I just do a simple get command, are going to come in and this is Azure PowerShell.
>
> **[6:50](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=410)** It has all those different az.
>
> **[6:52](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=412)** You'll see Azure rm commands 'cause we still leverage that environment that we have.
>
> **[6:56](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=416)** But we see all that same types of modules, all those sources that we have locally, are here in the shell.
>
> **[7:02](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=422)** Why is this great?
>
> **[7:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=423)** I don't have to load anything locally.
>
> **[7:05](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=425)** I just have to open up the Cloud shell so I can get to it.
>
> **[7:08](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=428)** Now kind of a side note on this, folks, inside the app stores for whatever mobile device you have, there's an Azure app that will bring up a little GUI but that's not why I tell you about it.
>
> **[7:17](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=437)** That Azure app has this cloud shell, so you can run scripts from your mobile device as long as they're stored.
>
> **[7:24](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=444)** If you want to copy and paste them from your notepad or email yourself the script, you can do that as well.
>
> **[7:29](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=449)** Let me go ahead and clear out this screen that we have.
>
> **[7:31](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=451)** Couple things about the Cloud shell that's really cool and really just point this out real quick, and it's one thing.
>
> **[7:36](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=456)** We actually have a little built in editor inside the Cloud shell so we can actually create and save our scripts and they're going to be stored inside the subscription.
>
> **[7:44](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=464)** And by the way, you can call these scripts from inside the Cloud shell, or better yet, you can install these scripts from local PowerShell as well.
>
> **[7:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=473)** So we have the ability to kind of have a center repository inside your Azure subscription for automation and for scripting.
>
> **[8:01](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=481)** So let me go ahead and close that down and close that editor.
>
> **[8:04](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=484)** The last thing I want to show you, and I want to spend just a brief second on this one.
>
> **[8:09](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=489)** It's called the command line interface.
>
> **[8:10](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=490)** It's going to be a new way that we can leverage automation inside of Azure.
>
> **[8:15](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=495)** It needs PowerShell to run on top of it.
>
> **[8:17](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=497)** It's a special type of interface, but all the commands begin with the letters az.
>
> **[8:21](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=501)** So I'm just going to type in az to bring up the Cloud shell.
>
> **[8:24](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=504)** First off, and it went by really really quick and I giggle every time I see it, the long lost bit art with dash marks.
>
> **[8:30](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=510)** And you can actually make some things and it says the [[Microsoft Word|word]] Azure.
>
> **[8:33](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=513)** Now the cool thing about this is that we can see all the different commands that we can do.
>
> **[8:37](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=517)** And CLI is really really really really powerful.
>
> **[8:40](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=520)** It's just a matter of learning those commands and how we can actually work with them.
>
> **[8:44](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=524)** So if I want to learn more about a command, I can just type in az and let's say you want to learn more about resource groups, which is az group.
>
> **[8:51](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=531)** And this is a little different than PowerShell.
>
> **[8:53](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=533)** I just go tick, tick, help, or dash dash.
>
> **[8:56](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=536)** I'll tell you what, folks, if you've been in PowerShell for as long as I have those double dashes will drive you bonkers from a syntax perspective.
>
> **[9:03](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=543)** But I simply type that in, it's going to give me help information about that environment.
>
> **[9:08](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=548)** If I want to learn more about the create command I can simply just come up and say create and now I'll learn about that and I get my examples.
>
> **[9:15](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=555)** So the same ways that we can find out information, just another way to ask and fish for this.
>
> **[9:20](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=560)** Now CLI's just another way we can automate it, we need PowerShell.
>
> **[9:23](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=563)** But folks, why do I like CLI?
>
> **[9:25](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=565)** I'm here to tell you I do not know a single thing about Bash.
>
> **[9:29](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=569)** I don't know a single command.
>
> **[9:31](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=571)** I think clear is the only command I know to clear screen where I use CLS in PowerShell command prompts, but guess what I do know how to do?
>
> **[9:38](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=578)** I know how to bring up CLI.
>
> **[9:39](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=579)** The CLI is cross-shell compatible, which means as long as I have Bash or PowerShell and this CLI tool's there, I can run 'em.
>
> **[9:48](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=588)** And here's the cool thing.
>
> **[9:49](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=589)** I already know how to run a command inside of this, and notice I don't know how to run, it's not CLS, it is clear.
>
> **[9:54](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=594)** I have this command, so I'm going to say Azure group, az group, create, and then tick tick help and guess what folks, same exact results.
>
> **[10:06](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=606)** So one of the things I encourage you to look at is not only PowerShell, 'cause PowerShell does offer a lot of robustness and if you're familiar with PowerShell you definitely want to leverage that technology, but when we think about what we can do and what the future is and we start automating things inside of Azure, CLI is something I would encourage you spend your time with.
>
> **[10:22](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=622)** So as you can see there are lots of ways to manage Azure with PowerShell.
>
> **[10:26](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=626)** It's really up to what's your preference.
>
> **[10:28](https://www.linkedin.com/learning/learning-powershell/azure-powershell?u=76281980&t=628)** If you want to use a GUI great, if you want to use PowerShell, even better, if you want to try something new and exciting I would definitely encourage you to look at the CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (45), [[Powershell]] (45), [[CLI]] (12), [[Windows]] (3), [[Linux]] (2)
> **Tools:** powershell (45), bash (8), command line (2), azure portal (1)
> **CLI Commands:** az (12), find (5), rm (1), make (1)
> **Env Vars:** cli (12), gui (2), cls (2)
> **Prerequisites:** install (9)
> **Definitions:** is a  (3), is called (1)
> **UI Navigation:** go to (1), click on (1)
> **Code Identifiers:** macos (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=0)** - [Matt] Thank you so much for watching this course on understanding [[Powershell]].
>
> **[0:03](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=3)** Let's talk about some next steps, and I hope you're excited to get started with PowerShell.
>
> **[0:07](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=7)** I hope this course got you jazzed to actually start creating scripts and automating your environments.
>
> **[0:12](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=12)** What are some advice that I have for you as you start going out and PowerShelling the world and automating everything?
>
> **[0:17](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=17)** First off, create a test environment.
>
> **[0:19](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=19)** One of the the things you don't want to experiment with PowerShell is in your production environments.
>
> **[0:23](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=23)** Things can go bad in a hurry.
>
> **[0:24](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=24)** So create a test.
>
> **[0:26](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=26)** Prove out these things work, and make sure they work they work the way they're supposed to for you, 'cause remember PowerShell's supposed to work for you, and it's powerful, and a misplaced wildcard, well it can do some powerfully devastating things.
>
> **[0:36](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=36)** But remember our WhatIf commands?
>
> **[0:38](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=38)** We can see hey, let's test and see what'll happen before we run this command.
>
> **[0:43](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=43)** You also want to start simple.
>
> **[0:44](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=44)** Start with easy scripts.
>
> **[0:46](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=46)** Start getting your feet wet.
>
> **[0:47](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=47)** Nobody becomes a PowerShell expert overnight, and I would even argue that I'm not a PowerShell expert 'cause I don't use it every day.
>
> **[0:54](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=54)** But I do know how to read the shell.
>
> **[0:56](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=56)** I know how to understand the syntax.
>
> **[0:57](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=57)** And if you start there, you can start simple.
>
> **[1:00](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=60)** And you want to really leverage that power of understanding this incredibly powerful shell.
>
> **[1:06](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=66)** Learn our commands Get-Help and Get-Command.
>
> **[1:09](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=69)** If you're not sure, you can learn these commands, and you'll be able to find out anything.
>
> **[1:14](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=74)** And with a lot of your common search engines, I know for example, if you go to [[Microsoft]]'s Bing, and you type in a PowerShell command, generally speaking the very first result will be the command interface for the website for that particular command.
>
> **[1:28](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=88)** But you can do this directly from your local shell environment.
>
> **[1:31](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=91)** So Get-Help and Get-Command are two probably the most important commands you've learned throughout this course.
>
> **[1:37](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=97)** Don't forget that they're there.
>
> **[1:38](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=98)** There's always help.
>
> **[1:39](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=99)** You'll learn how to use this.
>
> **[1:41](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=101)** Better yet, learn how to use what is called the Script Center.
>
> **[1:45](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=105)** The Script Center is an online repository of PowerShell scripts, among other things.
>
> **[1:50](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=110)** There's a lot there.
>
> **[1:51](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=111)** Let's take a look at that real quick.
>
> **[1:53](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=113)** So let me hop over into my script environment, and you'll notice that I'm on the Script Center.
>
> **[1:58](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=118)** And if I scroll down I see a bunch of scripts, and you'll see just a lot of categories and the different things that are here, different operating systems, also different scripting languages that we can use.
>
> **[2:08](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=128)** So if I want to select PowerShell, there's over 9,000 PowerShell scripts that are out here.
>
> **[2:14](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=134)** So folks, if you're thinking to do something with PowerShell, there may already be an example for you.
>
> **[2:19](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=139)** And these examples are tailored to whoever created them.
>
> **[2:22](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=142)** And whoever's leveraging them.
>
> **[2:24](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=144)** But you know what, if you understand the syntax as you went through this course, you can leverage these and you'd become a reverse engineer guru, and you can leverage these scripts for your own environments once you understand the syntax.
>
> **[2:35](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=155)** So we spent a lot of time and this whole course is about understanding that syntax, why?
>
> **[2:40](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=160)** So you can go to places like the Script Center and understand what it's showing you and telling you.
>
> **[2:44](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=164)** So I hope folks, I cannot wait for you to get started PowerShelling in the world.
>
> **[2:48](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=168)** I hope you're excited about this course.
>
> **[2:51](https://www.linkedin.com/learning/learning-powershell/next-steps-2?u=76281980&t=171)** Once again thank you so much for joining this course on understanding PowerShell and have a blessed day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (12), [[Microsoft]] (1)
> **Tools:** powershell (12)
> **UI Navigation:** go to (2), scroll down (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [matt] (1)


## Instructor

- [[Matt Hester]]

## Resources

- Exercise files available

## Skills Covered

- Powershell

## Path Context

### In [[Networking and Administration Fundamentals]]
← [[Learning Virtualization]] | **8 of 10** | [[PowerShell- Automating IT Administration]] →

## Appears In

- [[Networking and Administration Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[PowerShell for Microsoft 365 Administration]] — Powershell
- [[PowerShell- Automating IT Administration]] — Powershell
- [[Powershell 7 Essential Training]] — Powershell

---

[↑ Back to top](#)