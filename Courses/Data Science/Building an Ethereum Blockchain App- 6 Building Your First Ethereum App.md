---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 8/11/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGu2M7qkDU4hg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525931705?e=2147483647&amp;v=beta&amp;t=TKRXkeIQVC4pLDmFpM-7tfolGqHsLR0LpFMe29wpiTU"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
  - '[[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":6,"total":11,"prev":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet","next":"Building an Ethereum Blockchain App- 7 Smart Contracts"},{"path":"Become a Blockchain Developer","position":6,"total":14,"prev":"Building an Ethereum Blockchain App- 5 Your Ethereum Wallet","next":"Building an Ethereum Blockchain App- 7 Smart Contracts"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%206%20Building%20Your%20First%20Ethereum%20App.md)

![Building an Ethereum Blockchain App: 6 Building Your First Ethereum App](https://media.licdn.com/dms/image/v2/C560DAQGu2M7qkDU4hg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525931705?e=2147483647&amp;v=beta&amp;t=TKRXkeIQVC4pLDmFpM-7tfolGqHsLR0LpFMe29wpiTU)

# Building an Ethereum Blockchain App: 6 Building Your First Ethereum App

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, sixth in a series of eleven, walks you through building your first Ethereum app in Truffle, using the Solidity programming language. Instructor Michael Solomon shows you how to create and initialize a new directory for y

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app) | 36m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Building Your First Ethereum App**](#1-building-your-first-ethereum-app) (4 videos)
  - [Preparing your first Truffle project](#preparing-your-first-truffle-project)
  - [Writing a simple smart contract](#writing-a-simple-smart-contract)
  - [Compiling your simple smart contract](#compiling-your-simple-smart-contract)
  - [Deploying code and invoking functions](#deploying-code-and-invoking-functions)

### 1. Building Your First Ethereum App

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing your first Truffle project](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=1)** - All right.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=2)** Now, here's the moment that you've been waiting for.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=4)** We're ready to start building our very first smart contract in [[Ethereum]].
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=9)** We're going to be using [[Solidity]] to do that.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=11)** So, we're going to pull all the pieces.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=13)** Don't worry, we're going to start slowly and you don't have to have any prior knowledge of programming or Solidity or [[JavaScript]].
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=21)** We're going to take you through step by step.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=24)** But how do we do it?
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=25)** Well, we start by doing.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=27)** Since we are going to be writing code, any experience with writing code in any of the language is helpful, but not absolutely necessary.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=36)** I'm going to try to give you all of the pieces of the puzzle that you're going to need to start from the very ground floor and then build up from there.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=43)** So, let's start with the basics.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=46)** The first thing we need to do is identify our project to Truffle.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=50)** Remember, Truffle is the framework, like the umbrella that we're operating under.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=54)** Truffle is going to help keep track of all of the artifacts and the things that we need to move around.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=59)** So, we need to put things in a place that Truffle can understand them.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=63)** Now, Truffle organizes its activities into projects, and it uses directories to organize the artifacts into projects.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=71)** So basically, if you want to create a new Truffle project, you just create a new directory and then ask Truffle to initialize it.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=78)** And he'll put a few files in there and then we're going to go look and then edit one of those files to change the configuration.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=85)** So, let's go do that right now.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=87)** You'll notice that I use [[Powershell]] a lot.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=90)** So, I went ahead and I pinned the PowerShell icon to my taskbar.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=95)** So, now I'm going to launch PowerShell and it takes me to my default directory.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=99)** You can create any directory you want, anywhere you want.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=103)** I like to create a directory called workspace.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=107)** So, I'm going to say, make directory workspace.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=111)** And that's where I create all of my sub-directories for my projects.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=115)** You could call them whatever you want to, but let's cd down to workspace and I'm going to create a new directory for my project, and I'll just call this make directory first project.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=130)** All right, so now I have a directory first project, and now I'm going to cd down into first project.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=137)** And now I'm going to tell Truffle to initialize my project.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=140)** So I'm just going to type truffle init.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=145)** And that tells Truffle that this project or this directory is now a project and it has some files in it.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=152)** So if I go look at these files, I see a directory called contracts, that's where my [[Smart Contracts]] are going.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=158)** Another directory called migrations and test.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=161)** And then finally I have a truffle-config.js that's a JavaScript file that contains my Truffle configuration.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=171)** My next step is to edit truffle-config.js.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=175)** My oh my, what editor should I use?
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=178)** Hey, why don't we just use Visual Studio Code?
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=182)** So the best way to launch Visual Studio Code from within a project is type the [[Microsoft Word|word]] code dot.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=189)** Now dot means the current directory and that launches Visual Studio Code for my current directory.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=196)** So I'm going to minimize my PowerShell window, and look at what we have now.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=204)** We now in the explore window, we have my first project, because that's where I started Visual Studio Code.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=211)** So it knows first project is the current directory, and there's my subdirectory contracts, migrations and test.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=218)** And of course we see the hover, it pops up and shows me exactly what directory I'm pointing to.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=223)** And here's truffle-config.js.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=225)** If I simply click on that guy, looky, looky, it brings it right into the editor.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=232)** So let's make this a little bit bigger, I'm going to go ahead and go full screen.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=238)** And now we need to edit the configuration, truffle-config.js so it matches what we really want.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=245)** So what is it that we really want to do?
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=248)** Well, we're about to write smart contract code, right?
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=251)** And we're going to deploy and test that using our test [[Blockchain]].
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=256)** Well, didn't we install Ganache for our test blockchain?
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=261)** Yeah, we sure did.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=262)** So why don't we tell Truffle where Ganache is located?
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=265)** So then when we deploy, Truffle knows where to put the code.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=269)** Okay, so here's our truffle-config.js.
>
> **[4:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=271)** Let's scroll down just a little bit, and notice there's a section here called networks, and one of them says development, but it's in green.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=279)** The green basically means this is commented out.
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=282)** One of the ways that we can specify comments and solidity is starting the line, or really just starting the comment with two slashes.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=291)** So if I delete these slashes, watch what's going to happen.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=297)** Notice that it changes from green to black.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=301)** And the reason for that is, it's no longer a comment.
>
> **[5:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=306)** And so now we have defined a network called development with the host 127.0.0.1, which is local host, and the port 8545.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=317)** And the network ID is any network.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=319)** We can specify a network ID.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=322)** You remember, we saw that in Ganache.
>
> **[5:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=323)** Or we can just say this matches any network ID.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=326)** We're going to leave it alone and make it easy.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=328)** Is that the right network though?
>
> **[5:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=329)** Or the right port?
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=331)** Hmm, maybe not.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=334)** Hold on, how do we know?
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=336)** Let's go back to Ganache.
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=339)** If I launched Ganache, this is going to bring up our test network.
>
> **[5:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=347)** I'm just going to click on quickstart to fire up our blockchain network, and let's see what we have.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=353)** Oh, wait a second.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=354)** Remember it's at 7540, so we had two choices.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=359)** I can go into settings and change it, or I can just simply tell Truffle, "hey, I'm using port 7545."
>
> **[6:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=366)** Let's do that.
>
> **[6:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=368)** Let's tell Truffle that our development network is not the default, but it is 7545.
>
> **[6:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=374)** I'm going to press control S to save it.
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=376)** And now we have defined our Truffle environment to point to and connect to our Ganache test blockchain network.
>
> **[6:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=388)** That's how we pull a project together.
>
> **[6:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=391)** We've defined a project, we've initialized it and we've configured it.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/preparing-your-first-truffle-project?u=76281980&t=395)** So we're ready to start writing some code and actually see how this fits together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (4), [[Blockchain]] (4), [[Solidity]] (3), [[JavaScript]] (2), [[Ethereum]] (1)
> **Tools:** powershell (4), visual studio (4)
> **CLI Commands:** make (4), cd (2)
> **File Paths:** truffle-config.js (5)
> **UI Navigation:** click on (2), scroll down (1)
> **Ports:** port 8545 (1), port 7545 (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** go back to (1)

#### [Writing a simple smart contract](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=1)** - Remember that the first step in the [[Ethereum]] [[Software Development]] Life Cycle is to design your software.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=8)** So, we want to design the [[Smart Contracts]] that are going to provide all the functionality.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=13)** So, design takes a little bit of time to learn, and you have to write some code to learn how to design well, but we always want to design before we write.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=22)** [[Blockchain]] application design is different from traditional applications, but there's some similarities as well.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=28)** We want to pay attention to as many differences as possible.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=33)** For example, remember you have to pay a fee every time you access blockchain data.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=39)** So, even when you're just testing your code, you have to pay a fee.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=43)** That's one of the reasons why we use local blockchains and we use public test blockchains to test our code.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=49)** We can pre-fund the accounts with free money or Monopoly money.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=54)** It's not real money, it doesn't really cost us anything in most cases.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=59)** So, we want to economize how much money we spend through the testing process.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=64)** So, you test it, you see how much money we spent, how much gas did it use, and you may have to go back and recode to use less gas before you do it for real.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=73)** So, sometimes when you're used to actually storing a data temporarily in the database for a traditional application, won't work as well here, because storing a data temporarily, of course, it always stays there on the blockchain and you have to pay to do that.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=87)** So, you may not want to do it that way.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=89)** Once you write data to the blockchain, remember, you can't change the data and that includes your smart contract code.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=95)** So, anything that you write bugs at all, if you deploy to the test network or to the live network, especially, it'll always be there.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=104)** That's the beauty of a local test network or test blockchain that you control.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=110)** Because if you can take control a local blockchain, you can blow it away anytime you want to and start from scratch.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=117)** That is one of the advantages.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=118)** And that means that your local version is not truly immutable because you can just vaporize it anytime you want to.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=125)** But always remember that once you put something on a public test or the main net blockchain, it's always going to be there.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=132)** Also remember that whatever data you put out there in testing or in real application runtime, is going to be there for everyone to see.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=141)** Sometimes during testing, you just throw out some data.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=144)** You don't really care what it is because it's all local to you, this is for traditional applications.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=150)** You may use live customer data just to test it.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=153)** Well, you can't do that anymore if you're going to a public testing blockchain.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=159)** For your local stuff, sure, you can use whatever data you want.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=162)** But remember when you go to a public testing blockchain, that data is persistent and it's available to everyone.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=170)** So, those are some of the things you want to pay attention to.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=173)** If you do have sensitive data, of course, you want to use encryption, but when you do that, then you have to worry about encryption keys on top of all the other keys.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=182)** The moral of the story, is that spending time thinking through these issues and designing your applications intelligently will always save you effort and time on the backend.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=195)** So, now we're ready to write our first program.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=199)** So, we're learning a new language, why not use the traditional first program?
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=203)** That is the Hello World program.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=206)** Most developers, when they write their first program in a new language, always write Hello World.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=211)** It does nothing more than simply echos Hello World to the terminal.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=215)** And we're going to do that now.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=216)** It doesn't do anything else other than show us the message, but it's a good starting point to show us the absolute basics of [[Solidity]].
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=224)** All right, so we're back in Visual Studio Code and we are back where we left it, where we were editing our truffle-config.js.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=232)** Now, you have to be a little careful about where you place your files to make sure that everything flows together well.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=238)** By default, truffle wants to see our smart contracts in the contracts folder.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=244)** So, let's open the contracts folder and we see something already there.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=248)** That is just the default migrations solidity program that was put there.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=253)** So, we're not going to worry about that.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=254)** We want to create a new one.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=256)** So, let's right mouse click on contracts and choose New File.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=261)** And let's type in HelloWorld, H-E-L-L-O W-O-R-L-D.sol, and I'm going to use a capital H and a capital W, and that does matter.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=273)** sol is the extension for solidity code.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=276)** So, if I press Enter, it opens our new blank file.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=280)** All right, so I'm going to type really fast and bam!
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=283)** There we go, well, clearly, I just copied and paste it.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=285)** And you can do the same thing too.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=286)** If you have the accompanying slides that go along with this material, you can simply copy and paste code without even having to copy and paste the text.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=295)** You can actually copy the HelloWorld.sol into place, or you can copy the text just like I did.
>
> **[5:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=302)** Okay, let's stop or at least slow down for a minute.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=307)** If you've never written code before, or if you've never written code in solidity, there's some things that may look weird.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=313)** So, let's take it one step at a time.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=316)** Let's start with the very first line.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=319)** The first line says progma solidity and some numbers.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=324)** progma or pragma is aligned that basically tells solidity what compiler version is valid.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=332)** The reason this is important for this language, solidity is a brand new language.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=336)** It hasn't been around all that long and it's undergoing a lot of changes.
>
> **[5:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=340)** And as it changes from one version to another, it may support new functionality and not support old functionality.
>
> **[5:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=348)** So, the pragma directive is important to tell solidity what version is valid.
>
> **[5:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=355)** So, this says greater than or above 0.5.0.
>
> **[6:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=361)** So, this means that I want a version five or higher, or basically a version five compiler will work.
>
> **[6:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=368)** So, the 5.0 means anything that's bigger than 5.0.
>
> **[6:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=371)** So, a 5.1, 5.3, something like that will work.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=375)** This is telling me that if I have a version 4.24 compiler, this program will not work and the compiler will refuse to compile this program.
>
> **[6:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=385)** This just makes sure that we don't accidentally compile with the wrong compiler and get the wrong functionality.
>
> **[6:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=391)** In most cases, you're going to stick really close to whatever version of solidity you're writing for.
>
> **[6:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=398)** Now, how do we know that?
>
> **[6:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=399)** Well, remember, one of the things that we did, I'm going to open my [[Powershell]] window back up.
>
> **[6:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=405)** Remember, when I typed in truffle version?
>
> **[6:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=412)** It showed me my solidity version, 0.5.8.
>
> **[6:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=417)** That's the compiler that we're using, the truffle's using.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=420)** So, we know it's 0.5.8.
>
> **[7:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=422)** Well, 0.5.0, the major version is five, and so that works.
>
> **[7:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=427)** All right, so that's pragma.
>
> **[7:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=429)** Next thing we do on line three, is we defined our smart contract name and we use the keyword contract with followed by the name.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=437)** So, we're basically saying, I'm creating a new smart contract called Hello World.
>
> **[7:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=442)** We use the curly braces to show where the element, in this case, the contract starts and notice when I click on the opening curly brace, the closing, the matching closing brace automatically highlights.
>
> **[7:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=458)** That is a feature of Visual Studio Code to help us keep track of whether we've closed all our parentheses and our braces properly.
>
> **[7:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=465)** So, it's really nice.
>
> **[7:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=466)** We can just scroll back or use the arrow keys to move back and forth and when were highlighting a brace it automatically highlights the matching brace.
>
> **[7:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=476)** All right, so contract just defines the contract name.
>
> **[8:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=480)** Then we move inside, and we basically have one state variable and one function.
>
> **[8:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=487)** The state variable is a variable called helloMessage.
>
> **[8:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=493)** It is a string data type, which means that we're going to put characters in it.
>
> **[8:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=498)** And the [[Microsoft Word|word]] after it, private just simply means that helloMessage is only available inside this contract.
>
> **[8:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=505)** No external functions or external programs can reference the contents of helloMessage.
>
> **[8:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=511)** Now, everything that I'm telling you now we're going to come back and we're going to dig into a little bit deeper.
>
> **[8:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=518)** I'm just giving you the absolute basics at this point.
>
> **[8:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=521)** So, what we've done is we've created a private string called helloMessage, and I'm giving it the value Hello world.
>
> **[8:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=528)** And we put that in quotes and that assigns the string value to this variable helloMessage.
>
> **[8:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=536)** Solidity very much like [[JavaScript]] uses a semi-colon to terminate all of its statements.
>
> **[9:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=541)** So, we see the pragma has a semi-colon, and the variable definition has a semi-colon.
>
> **[9:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=548)** The contract doesn't have a semi-colon because it's not a statement, it is a construct.
>
> **[9:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=553)** It's actually creating a contract as opposed to an individual statement.
>
> **[9:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=558)** All right, the next piece of the puzzle is we define our function.
>
> **[9:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=561)** Now, there's a lot going on here, but let me just boil it down for you.
>
> **[9:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=565)** With the function, we give the function a name, we tell a little bit about who can use it, who can call the function, and then what does it return?
>
> **[9:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=576)** So, this function has a name getHelloMessage.
>
> **[9:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=580)** The two parenthesis here say that I don't pass him any message.
>
> **[9:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=585)** Sorry, I just accidentally copied it inside.
>
> **[9:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=588)** I can pass input parameters to a function, but I'm not going to do that this time.
>
> **[9:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=592)** I don't need to pass in any information.
>
> **[9:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=595)** It's public, meaning that anybody outside this contract can call getHelloMessage.
>
> **[10:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=602)** view, basically means that it only deals with local values, it doesn't touch the blockchain.
>
> **[10:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=609)** And when I call it, I'm going to return a string that comes from my local memory.
>
> **[10:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=615)** And if we go inside the body, which is inside the little curly braces, it does one thing, it's simply returns the value of helloMessage.
>
> **[10:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=625)** So, we go back, helloMessage has the string Hello world.
>
> **[10:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=628)** So, all this function does, is just return Hello world.
>
> **[10:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=633)** That's a lot of talking to basically show how we can return one simple little string, but that's how it works.
>
> **[10:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=640)** If you followed along, you actually have written your very first simple smart contract.
>
> **[10:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=645)** Now, we haven't run it, we haven't seen what it can do yet, but that's the next step.
>
> **[10:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/writing-a-simple-smart-contract?u=76281980&t=650)** Remember, we designed it and then we wrote it, so now we're ready for the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (11), [[Blockchain]] (10), [[Smart Contracts]] (2), [[Ethereum]] (1), [[Software Development]] (1)
> **Code Identifiers:** hellomessage (7), gethellomessage (2)
> **Versions:** 0.5.0 (2), 5.0 (2), 0.5.8 (2), 5.1 (1), 5.3 (1)
> **Definitions:** is a  (5), means that (3), basically means (1)
> **Tools:** visual studio (2), terminal (1), powershell (1)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **Analogies:** for example (1), just like (1)
> **File Paths:** truffle-config.js (1)

#### [Compiling your simple smart contract](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=1)** - All right, so now you've written your first smart contract.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=4)** Now what do we do with it?
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=5)** Let's take a look at the steps real quickly.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=7)** First off we write the source code.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=9)** You're done with that.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=11)** Next, we compile the source code that translates it into bytecode that the EVM can execute.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=17)** The EVM cannot execute source code, so we have to translate it.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=20)** That's what the compile process is.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=22)** Then once we compile it and we have bytecode, then we deploy it.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=26)** That means actually write it to the [[Blockchain]].
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=29)** And yeah, we have to pay a little bit of gas to do that.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=32)** Once we write it to the blockchain, then we can actually call or invoke the functions that we've written.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=39)** So we only had one function, that is get "Hello world."
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=42)** And so we're going to invoke that once we get everything compiled and put on the blockchain.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=47)** So let's take it one step at a time.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=49)** We're going to go back into Visual Studio Code and compile our smart contract.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=53)** All right, so here we are, back in Visual Studio Code to compile a smart contract.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=59)** Very simple, just simply press the F5 key.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=63)** And when we compile it, notice we get a message at the bottom saying, compilation completed successfully.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=69)** Now, if we don't see the output, we can click on output and notice it says problems.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=75)** Let's take a look at that.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=76)** And it says no trailing white space, line containing trailing white space.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=82)** That's 1, 3.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=83)** So if I click on that, this shows me that I have trailing white space, which is something we really don't want.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=89)** And that underlying squiggly yellow mess or the yellow underline, tells us there's a problem.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=95)** It tells us there's an error.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=97)** So let's backspace a little bit, whoops, wrong one.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=101)** Control Z to get back there.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=102)** Let's just backspace and get over that trailing white space.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=108)** Let's see.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=110)** Get back over to the very end.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=112)** And there we go.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=114)** All right, and notice when I got rid of the trailing white space, and trailing white space basically means extra spaces or tabs at the end of a line, once I got rid of that, the yellow squiggly line went away.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=126)** So I'm going to press Control S to save it again, and now I'm going to press F5 to compile it, and notice this time, there's no problems.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=136)** And in the output window, I see compiling using the default compilers [[Solidity]] version 0.5.11.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=143)** 0.5.11, that's interesting.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=145)** That's slightly a different version than what Truffle is using.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=149)** Remember Truffle is using 0.5.8, and the internal Visual Studio Code is using 0.5.11.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=157)** Now 0.5.8 and 0.5.11 is a very close difference, or very close.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=162)** It's not that big of a deal, but it's possible that as you move forward and you install new versions, if those numbers start to diverge, or if you want them to be exactly the same, you might need to overwrite your default compiler.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=178)** In fact, let me show you how to do that.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=180)** We will go find the right compiler and overwrite it.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=184)** So this step is not something that you have to do.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=188)** And I'm only showing you this because it's something that you might end up doing at some point, if you run Truffle version and then you see one version, and then you see the compiler version, as we just saw in Visual Studio Code, and they're more than just one or two subversions apart, you probably want to make sure they're harmonized to make sure that your development IDE is using the same compiler that you're going to use when you deploy to the actual blockchain.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=216)** So let's go back into Visual Studio Code and see how to do that.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=220)** All right, just to kind of recap.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=222)** Remember I typed in Truffle version in the [[Powershell]], and I kept bouncing back and forth.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=229)** But if I just click on this little terminal tab right here, it actually gives me a PowerShell right there, so I don't have to come out of my IDE.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=238)** That's one of the beauties of having an integrated development environment.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=242)** So I'm going to drag this up a little bit.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=244)** There we go.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=245)** And just for laughs, let's go back and type in Truffle version.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=251)** I've already done this, but let's just see it right here.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=254)** All right, that shows us that Solidity is 0.5.8.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=258)** Click on output and sure enough, 0.5.11.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=262)** All right, so how do we fix this?
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=264)** Let's go to our web browser and navigate to [https://github.com/ethereum/solc-bin/tree/gh-pages/bin](https://github.com/ethereum/solc-bin/tree/gh-pages/bin).
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=283)** Wow.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=284)** Clearly you're going to copy this and not just type it in.
>
> **[4:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=287)** All right, so basically this is the list of all the Solidity compiler versions.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=294)** Okay, so now we're on [[GitHub]], and you see this really long list of compilers.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=298)** What do we want?
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=300)** I'm going to take you back, show you what we're looking for.
>
> **[5:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=303)** We're basically going to scroll down to find the right version.
>
> **[5:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=306)** We're going to visit that page for one reason only.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=308)** We just want to copy a string.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=310)** We're going to take that string, and we're going to put it into a configuration file back in Visual Studio Code.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=317)** That will tell the extension that we're using for Solidity what version of the compiler to use.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=324)** So it's kind of complex, but just follow along with me and it'll make sense.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=328)** All right, so back in GitHub, let's scroll all the way down till we find, solJSON-v0.5.8, and we're looking for +commit after 0.5.8.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=345)** There we go, right there.
>
> **[5:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=346)** Don't click on the file name itself, click on the description next to it.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=352)** And from this point, I want you to copy the v0.5.8, all the way to the end of that string.
>
> **[6:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=362)** Copy it to your clipboard.
>
> **[6:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=364)** Cause now we're ready to go back into Visual Studio Code and enter it into a config file.
>
> **[6:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=371)** Now remember we're using an extension to support Solidity.
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=376)** So we want to enter that string we just copied as a parameter to a special feature in the setup file for our extension.
>
> **[6:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=386)** Phew, that's a lot.
>
> **[6:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=388)** Here, click on extensions.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=390)** We only have one right now.
>
> **[6:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=392)** Notice this is the [[Ethereum]] Solidity language plugin or extension by Juan Blanco.
>
> **[6:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=399)** And there's a little gear here for managing your settings.
>
> **[6:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=402)** Click on that.
>
> **[6:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=404)** And I want to come down to the very bottom and choose configure extension settings.
>
> **[6:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=410)** Believe it or not, this is the quickest way to get to the [[JSON]] file in which we can set settings for this extension.
>
> **[6:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=417)** So click on edit in settings.json.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=421)** It already has one setting in there.
>
> **[7:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=422)** Cause I changed my color theme to visual studio light.
>
> **[7:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=427)** Now we're going to add one more parameter and one more setting.
>
> **[7:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=432)** And that setting in parentheses is going to be, Solidity.compileUsing, and there we go, we see it already completed it for us.
>
> **[7:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=444)** We're going to say remote version.
>
> **[7:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=447)** And I'm going to say, in quotes, paste the version that I just copied, and there we go.
>
> **[7:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=459)** But we see there's a problem.
>
> **[7:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=461)** I even used completion, it actually typed it for me, but there's a problem.
>
> **[7:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=466)** So what is the problem here?
>
> **[7:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=468)** Let's see, if we just hover over it, it says expected comma.
>
> **[7:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=471)** Okay.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=473)** Remember we added a second setting, and settings based on JSON have to be separated by a comma.
>
> **[8:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=481)** So that means that when we added the second setting, I needed to put a comma after the first one.
>
> **[8:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=486)** So as soon as I type the comma, there we go.
>
> **[8:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=490)** So we have to be a little careful about that.
>
> **[8:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=491)** Kind of sneaky, isn't it?
>
> **[8:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=493)** All right, so now we have our settings.json set properly, and now I can close this guy.
>
> **[8:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=499)** I can close settings.
>
> **[8:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=500)** And at this point, let's try compiling again.
>
> **[8:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=510)** And there we go.
>
> **[8:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=511)** Compilation completed successfully, and look at the version now, it's 0.5.8.
>
> **[8:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=515)** So what we've done so far, it looks like we've done a lot, but really all we've done is we've compiled our code.
>
> **[8:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=521)** Remember we're going to write it.
>
> **[8:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=522)** We're going to compile it.
>
> **[8:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=523)** Then we're going to deploy and run it.
>
> **[8:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=524)** We haven't done that yet.
>
> **[8:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=526)** But what we have done is we've learned how to go into our extension settings and change the default compiler to a specific version.
>
> **[8:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=535)** So now we know that the compiler we're using inside Solidity and the one that we're using in Truffle have the same version.
>
> **[9:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=543)** It's 0.5.8.
>
> **[9:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/compiling-your-simple-smart-contract?u=76281980&t=545)** All right, so we're ready to move to the next step, which is to actually run the smart contract and see that magical phrase, "Hello world."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (8), [[Blockchain]] (4), [[JSON]] (4), [[GitHub]] (3), [[Powershell]] (2)
> **Versions:** 0.5.8 (6), 0.5.11 (4), v0.5.8 (2), version 0 (1), 5.11 (1)
> **Tools:** visual studio (8), github (3), powershell (2), terminal (1)
> **UI Navigation:** click on (9), go to (1), navigate to (1), scroll down (1)
> **CLI Commands:** find (3), make (3)
> **Env Vars:** evm (2), ide (2), json (2)
> **Exercise Files:** source code (3)
> **Definitions:** basically means (1), is a  (1), means that (1)

#### [Deploying code and invoking functions](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=1)** - All right, so now we're ready to reach out and touch the [[Blockchain]] for the very first time.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=6)** Now of course, we're only going to be reaching out and touching our local Ganache test blockchain, but still, this is the first time we've actually kind of gone through the whole process.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=15)** So, let's see how that works.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=17)** We're going to jump back into Visual Studio Code to drive the process.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=21)** So I'm going to clean things up just a little bit.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=23)** I'm going to click back on the Explorer, and there we go, we can see our contract code.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=28)** Now, the next thing we want to do is we want to go to a terminal and ask Truffle to deploy our code.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=35)** So we're going to type, truffle deploy -- reset.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=44)** And the reset just basically makes sure that everything is starting over again.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=48)** All right, now, a lot of things just happened.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=51)** Notice there were two deployments and it gave us a final cost of Ether, so we actually reached out and we touched the blockchain.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=61)** Well, did we really?
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=62)** Let's take a look at Ganache.
>
> **[1:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=65)** Oh, well look at that, the very first address no longer has 100 Ether, it has 99.99 Ether.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=72)** So apparently we used the first address to place our code on the blockchain.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=78)** Well let's look at that, let's look at blocks.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=80)** Whoops, look at this now.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=82)** We have five blocks, the Genesis block and four additional blocks, each one has one transaction.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=90)** So let's look at this last block.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=92)** And we see here that we have transaction, we have single transaction from one address to the contract address.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=101)** That basically means we've deployed a smart contract, and that's how much gas was used.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=106)** It looks like a lot of gas, but remember that's in Gwei, which is a really, really, really tiny unit.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=112)** So we can see that we're interacting with our blockchain here.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=115)** All right, so let's go back and now let's see if we can run our code.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=120)** In the blockchain environment, it's not really easy to simply type in a command and run code.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=125)** What you have to do, since it's a decentralized, kind of detached asynchronous type of environment, is you deploy your code to the blockchain, which we already did.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=136)** Then what you have to do is we're going to start up a Truffle console, and then we're going to actually issue line commands one at a time to invoke our functions.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=146)** It's kind of tedious, and we'll learn a better way later on, but for right now, we're going to have to be typing some commands.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=153)** So let's jump back in, let's launch our console, and let's see if we can get that "Hello world" to come back to us.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=159)** So the first thing we want to do is launch the console.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=168)** All right, now we're in Truffle, connected to the development network.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=172)** Do you remember back in our truffle-config.js file?
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=175)** In fact, let's look at it really quickly here.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=178)** Notice the networks.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=180)** We define networks and we give them a name.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=182)** And so we have a network called Development.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=184)** And so that's what Truffle is telling us that we're connected to.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=187)** So it's nice.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=187)** It kind of reminds us where we are.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=193)** If you start typing any of these commands, and they give you weird messages back, chances are you forgot to start the Truffle console.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=201)** In other words if you type it just at the regular like first project console, you'll get weird stuff back.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=205)** Make sure you always go into the console and you get this Truffle development prompt first before you continue.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=213)** But once you're there, let's invoke our function.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=225)** So what I'm going to do is I'm going to invoke a function on the object, helloworld.deployed, which basically is a pointer to where we deployed our actual "Hello world" smart contract.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=241)** If I successfully connect to it or find it, then I'm going to invoke, or I'm going to create an instance of my function.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=267)** So what I'm doing here is, I'm actually reaching out and I'm asking, where is my "Hello world" contract deployed to.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=274)** If I can find it, then I want to return a pointer to the instance of that contract.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=280)** All right, so we get a lot of things back.
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=282)** And basically you can get an error message or you get a bunch of [[JSON]] back, so I'm going to scroll up a little bit and we can see that we have some [[Metadata]].
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=294)** We have, there's our metadata, here's our bytecode.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=296)** This is the actual compiled code for "Hello world."
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=300)** It doesn't make much sense to us, but this is gold to the EVM.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=305)** All right, so now we have this pointer to our actual code.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=310)** Next, what I want to do is invoke the actual function.
>
> **[5:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=314)** So remember our object, or our smart contract, is called "Hello world," and our function is called get helloMessage.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=325)** So the way that I invoke my function,
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=334)** is I type this.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=336)** Helloworld.deployed.
>
> **[5:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=338)** If I find that, then I want to get an instance and return an instance, not of the actual method, but, or rather, the object, but an instance of get helloMessage.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=350)** And when I type that in, I get that message, "Hello world."
>
> **[5:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=356)** I'll bet you right now you're sitting there going, what in the world did it take so much work to get a stupid little message displayed on the screen?
>
> **[6:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=365)** And I agree with you.
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=367)** Once you get the hang of reaching out and grabbing an instance of a smart contract and then grabbing an instance of, or rather invoking each function, it's a little bit more palatable, but just a little bit.
>
> **[6:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=382)** We're going to move beyond that.
>
> **[6:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=385)** Not at first, but I am going to show you better ways that are much more, much easier for the user or for you yourself to interact with.
>
> **[6:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=394)** Clearly we would never want a user to have to go through anything like this, but remember, you've got to crawl before you can walk.
>
> **[6:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=401)** And boy, we're crawling right now, but what you've done, think about it.
>
> **[6:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=405)** You've built an entire development toolbox, and now we've put it together.
>
> **[6:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=410)** We've configured it.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=411)** We've written an actual smart contract.
>
> **[6:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=414)** We've deployed it to the blockchain.
>
> **[6:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=417)** We've instantiated it, and we've actually run blockchain code.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=421)** It's pretty cool, actually.
>
> **[7:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=424)** One last thing that I want to take a look at before we close out is to go back and let's look at Ganache and let's see what's happened.
>
> **[7:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=432)** Cause we know we had five blocks before we did anything, and then we actually invoked some codes.
>
> **[7:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=438)** So let's see what's changed.
>
> **[7:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=440)** So now that we've actually run some code, let's go back and look at Ganache.
>
> **[7:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=448)** All right, so we're back to 99.99 Ether, and our blocks, hm, isn't that interesting?
>
> **[7:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=456)** There's still only five blocks.
>
> **[7:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=458)** I wonder why that is.
>
> **[7:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=460)** Think about what we did.
>
> **[7:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=463)** We only touched the blockchain when we deployed our code.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=467)** You remember that the actual smart contract code doesn't really touch anything except memory?
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=475)** And that's the beauty of it.
>
> **[7:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=476)** If you're only working in memory, it's all free.
>
> **[8:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=480)** So just displaying the "Hello world," didn't touch the blockchain.
>
> **[8:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=484)** In fact, the only time we went to the blockchain was to [[Fetch]] the code to run, and that's free.
>
> **[8:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=489)** Running the code is free as long as you don't touch the blockchain for data.
>
> **[8:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=494)** So in this case, we didn't add any new blocks, because we didn't add any new data.
>
> **[8:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=499)** So you've been through the whole cycle at least once.
>
> **[8:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=501)** Now you're ready to get your hands dirtier and write some code that does more than just simply throws a message up on the screen.
>
> **[8:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=508)** We're moving ahead and you're learning a lot.
>
> **[8:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-6-building-your-first-ethereum-app/deploying-code-and-invoking-functions?u=76281980&t=510)** So stick with it, and have some more fun with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (13), [[Metadata]] (2), [[JSON]] (1), [[Fetch]] (1)
> **Definitions:** is a  (2), is called (2), basically means (1), in other words (1)
> **CLI Commands:** find (3), make (2)
> **Code Identifiers:** hellomessage (2)
> **Env Vars:** json (1), evm (1)
> **Versions:** 99.99 (2)
> **Tools:** visual studio (1), terminal (1)
> **UI Navigation:** go to (1), scroll up (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] | **6 of 11** | [[Building an Ethereum Blockchain App- 7 Smart Contracts]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 5 Your Ethereum Wallet]] | **6 of 14** | [[Building an Ethereum Blockchain App- 7 Smart Contracts]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum

---

[↑ Back to top](#)