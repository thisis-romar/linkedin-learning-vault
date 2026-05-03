---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: practical-github-copilot
url: "https://www.linkedin.com/learning/practical-github-copilot"
duration_minutes: 60
duration: 1h
level: Advanced
updated: 10/16/2023
learners: 19165
skills:
  - GitHub
  - Artificial Intelligence (AI)
  - GitHub Copilot
exercise_files: true
github: "https://github.com/LinkedInLearning/github-practical-copilot-4412871"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGacnii6uNPrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713479054756?e=2147483647&amp;v=beta&amp;t=2rrEIrPlCr3Ieoev3m863uLTWUHZfd34vOIaxVzMGu4"
linkedin_topic: Software Development
learning_paths:
  - '[[Prepare for the GitHub Foundations Certification]]'
  - '[[Career Essentials in GitHub Professional Certificate]]'
prev_courses:
  - '[[GitHub Issues and Projects for Teams]]'
  - '[[Practical GitHub Project Management and Collaboration]]'
next_courses:
  - '[[Learning GitHub Codespaces for Enterprise]]'
  - '[[Practical GitHub Code Search]]'
path_nav: '[{"path":"Prepare for the GitHub Foundations Certification","position":4,"total":7,"prev":"GitHub Issues and Projects for Teams","next":"Learning GitHub Codespaces for Enterprise"},{"path":"Career Essentials in GitHub Professional Certificate","position":3,"total":4,"prev":"Practical GitHub Project Management and Collaboration","next":"Practical GitHub Code Search"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
  - skill/artificial-intelligence-ai
  - skill/github-copilot
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Practical%20GitHub%20Copilot.md)

![Practical GitHub Copilot](https://media.licdn.com/dms/image/v2/D4D0DAQGacnii6uNPrw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713479054756?e=2147483647&amp;v=beta&amp;t=2rrEIrPlCr3Ieoev3m863uLTWUHZfd34vOIaxVzMGu4)

# Practical GitHub Copilot

> Copilot—a paid service from GitHub—is revolutionizing the way code is written. According to reports from developers who use it, a vast majority feel more productive and can perform repetitive tasks almost twice as fast. If you're interested in learning how to solve problems with Copilot and become a more efficient developer, join instructor Ray Villalobos in this hands-on course as he shows you no

> [LinkedIn Learning](https://www.linkedin.com/learning/practical-github-copilot) | 1h | Advanced | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Using Copilot on Projects](#using-copilot-on-projects)
  - [Using the slides](#using-the-slides)
- [**1. Working with GitHub Copilot**](#1-working-with-github-copilot) (6 videos)
  - [What is GitHub Copilot?](#what-is-github-copilot)
  - [Copilot for Individuals vs. Copilot for Business](#copilot-for-individuals-vs-copilot-for-business)
  - [Installing Copilot](#installing-copilot)
  - [Getting the repo](#getting-the-repo)
  - [Basic autocomplete](#basic-autocomplete)
  - [Autocompletions panel](#autocompletions-panel)
- [**2. Using Copilot Chat**](#2-using-copilot-chat) (7 videos)
  - [The chat panel](#the-chat-panel)
  - [Generating data](#generating-data)
  - [Chatting with Copilot](#chatting-with-copilot)
  - [Output to YAML](#output-to-yaml)
  - [History and file names](#history-and-file-names)
  - [Troubleshooting fixes](#troubleshooting-fixes)
  - [Writing comments](#writing-comments)
- [**Next Steps**](#next-steps) (1 videos)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Copilot on Projects](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980&t=0)** - [[Microsoft Copilot|Copilot]] is a paid service from [[GitHub]] that is changing the way code is written.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980&t=5)** Developers who use it report feeling 88% more productive and are 96% faster at repetitive tasks.
>
> **[0:12](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980&t=12)** So I want to take you through the process of solving a problem with Copilot so that you can get an idea of how it works and how it can make you a more effective developer.
>
> **[0:21](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980&t=21)** Now this is a hands-on advanced course for those who want to understand the technology and how it can help 'em in a practical way.
>
> **[0:28](https://www.linkedin.com/learning/practical-github-copilot/using-copilot-on-projects?u=76281980&t=28)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[GitHub]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Speakers:** - copilot (1)

#### [Using the slides](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980&t=0)** - [Instructor] You can find all the slides for this course at raybo dot organization slash slides underscore [[GitHub Copilot]], which is the page you're looking at.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980&t=9)** At the bottom of the screen, there is a toolbar which you can show or hide by hitting the T key.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980&t=15)** There are some links to my courses, my blog, and some other contact information.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980&t=20)** And you can hit the M key to see the Menu and pick one of the videos for the course.
>
> **[0:28](https://www.linkedin.com/learning/practical-github-copilot/using-the-slides?u=76281980&t=28)** From here, you can hit the arrow keys to navigate through the different slides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Working with GitHub Copilot

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GitHub Copilot?](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=0)** - [Instructor] Let's talk about what [[GitHub Copilot]] is and what makes it special.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=5)** At its core, GitHub Copilot is a code assistant to help you write code faster.
>
> **[0:10](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=10)** It's based on GPT, the model from OpenAI that powers [[ChatGPT]], one of the most popular web applications in history.
>
> **[0:18](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=18)** This is a special customized version of GPT which is a large language model.
>
> **[0:24](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=24)** It has been trained on gigabytes of code.
>
> **[0:27](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=27)** Because it's trained on public code, the more popular the language, the more code available and the better recommendations.
>
> **[0:34](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=34)** So it's best for popular languages like [[Python (Programming Language)|Python]], [[JavaScript]] and Ruby.
>
> **[0:40](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=40)** Models are formulas used to predict events.
>
> **[0:43](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=43)** One example you might be familiar with are hurricane models that attempt to chart the paths of some storms every year.
>
> **[0:50](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=50)** LLMs try to predict what should come next in a sequence of words, technically [[Tokens]] or numbers.
>
> **[0:56](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=56)** It's like the auto complete that happens when you use a search engine.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=60)** It will give you a suggestion that may or may not be what you're looking for.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=65)** A programming language is a pretty simple language.
>
> **[1:08](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=68)** There's grammar and rules and unlike a lot of human languages, it doesn't have things like slang and words with changing meanings.
>
> **[1:15](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=75)** Let's dig a bit more specifically as to how LLMs work.
>
> **[1:20](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=80)** LLMs in their training phase absorb all the available data and convert words, characters and other symbols to numbers known as tokens because they're easier for computers to work with.
>
> **[1:32](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=92)** The tokens become the vocabulary of the language, so more complex languages have more complex vocabularies.
>
> **[1:39](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=99)** When you make requests from the LLM, the size of the language, as well as the amount of information you're providing, can affect the cost of using the model, both in terms of compute power, as well as processing usage.
>
> **[1:53](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=113)** After the tokenization, the models go through training phases where, given different inputs, they try to determine the [[Probability]] of what the next piece of code or token should be.
>
> **[2:04](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=124)** They do this continuously until they finish the message that they write back to you.
>
> **[2:09](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=129)** This mimics the way people communicate, in that we often put together sentences by typing what the next [[Microsoft Word|word]] should be.
>
> **[2:17](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=137)** You probably notice more when you can't find the right word and perhaps someone else suggests it.
>
> **[2:24](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=144)** Most of the training is a [[Statistical Analysis]] of the tokens that determines a most likely next token, but that's followed by human led reinforcement.
>
> **[2:33](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=153)** The models predictions get better over time as it is trained on what humans prefer.
>
> **[2:39](https://www.linkedin.com/learning/practical-github-copilot/what-is-github-copilot-19801623?u=76281980&t=159)** By looking at gigabytes of code, it's able to determine the answer to a problem that is most likely to be the correct answer for the question you've asked.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[GitHub Copilot]] (2), [[Microsoft Word|Word]] (2), [[ChatGPT]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (5), known as (1)
> **CLI Commands:** python (1), ruby (1), make (1), find (1)
> **Env Vars:** gpt (2), llm (1)
> **Tools:** github (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Copilot for Individuals vs. Copilot for Business](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=0)** - [Instructor] Let's talk a bit more about the differences in the [[Microsoft Copilot|Copilot]] for Business version.
>
> **[0:05](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=5)** Apps like Copilot work by sending information from a user's computer to the AI, which retains that information to help train the large language model.
>
> **[0:14](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=14)** With regular Copilot, prompts that are generated when you pause while typing code, or prompts that are sent to the completions panel, or prompts that you create in the chat are retained.
>
> **[0:25](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=25)** However, with Copilot for Business, the prompts are only transmitted in real time and are not retained.
>
> **[0:31](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=31)** In the same way, suggestions that the model returns to [[GitHub]] are not retained.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=35)** They're only transmitted in real time.
>
> **[0:39](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=39)** It's important to note that some data is used by GitHub and [[Microsoft]] to improve and provide usage data to the service.
>
> **[0:46](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=46)** This data is normally used to measure the impact of Copilot on users, sorting [[Algorithms]], and prompt crafting.
>
> **[0:54](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=54)** It's also used to conduct research and experiments to improve how developers use the tools.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=60)** This version also allows for more control over policies.
>
> **[1:03](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=63)** So for example, you can control whether your organization allows matches of public code.
>
> **[1:09](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=69)** You can purchase and assign seats to however many users you want and reassign seats as needed.
>
> **[1:15](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=75)** You can also allow individual organization administrators to manage their own teams.
>
> **[1:21](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=81)** GitHub for Business is also capable of working with proxies, which generally manage employees' access to websites and other security measures.
>
> **[1:29](https://www.linkedin.com/learning/practical-github-copilot/copilot-individual-vs-copilot-business?u=76281980&t=89)** Since once your administrator procures Copilot for you, the experience is pretty similar, for the [[Representational State Transfer (REST)|rest]] of this course we'll be focusing on the individual version of Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[GitHub]] (3), [[Microsoft]] (1), [[Algorithms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** github (3)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Installing Copilot](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=0)** - [Instructor] [[Microsoft Copilot|Copilot]] is a paid extension that is sold as a service through [[GitHub]].
>
> **[0:06](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=6)** Let's talk about how you can get ahold of it.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=9)** Before you get Copilot you need to make sure that you have a GitHub account.
>
> **[0:13](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=13)** And once you're logged on into it, you can go to your Settings, and take a look at Billings and plans right here.
>
> **[0:22](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=22)** And then go to Plans and usage.
>
> **[0:25](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=25)** And you can see all of the different plans that you have available here.
>
> **[0:29](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=29)** Now this will be under Add-ons, and you can sign up for a yearly or a monthly plan.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=35)** You can also get a Copilot for Business account.
>
> **[0:38](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=38)** And you can go to this URL, [http://github.com/features/copilot](http://github.com/features/copilot), and click on Compare plans.
>
> **[0:45](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=45)** You can get it for individuals, and this will be either a monthly fee or an annual fee, or you can get it for business, which has some additional features like license management, [[Privacy]], proxy support, and also organization-wide policy management.
>
> **[1:01](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=61)** Once you've purchased your subscription, you're going to need a copy of a popular editor.
>
> **[1:06](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=66)** You can use Visual Studio, Neovim, Visual Studio Code, or JetBrains.
>
> **[1:11](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=71)** In this course, I'm going to use Visual Studio Code.
>
> **[1:15](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=75)** And as of this video, it's only available by installing something called the Insiders Nightly Build, which you can get to by going to [http://code.visualstudio.com](http://code.visualstudio.com).
>
> **[1:25](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=85)** And if you scroll all the way down, you can see that there is an Insiders build link right here.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=93)** Now you'll need to download it for your operating system.
>
> **[1:41](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=101)** And then, run through the installer.
>
> **[1:43](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=103)** And I'm going to unzip it to install it, and you'll get an application that looks like this.
>
> **[1:48](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=108)** Notice that it's a green color application.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=112)** Normally, Visual Studio Code is blue.
>
> **[1:55](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=115)** If you're on a Mac, you'll need to put this inside your applications folder.
>
> **[2:02](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=122)** And I'm going to go ahead and add it to my Dock next to my copy of Visual Studio Code.
>
> **[2:14](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=134)** This is going to look exactly like Visual Studio, but it may have some additional features that you're not aware of because it is updated nightly.
>
> **[2:22](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=142)** Now from here, you're going to need to download a few extensions.
>
> **[2:26](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=146)** You can normally get extensions by going to the Visual Studio Code Marketplace, but you can also install them by clicking on this right here.
>
> **[2:35](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=155)** And then, looking for the Copilot extension.
>
> **[2:47](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=167)** Again, as of this video, you can install version 1.0 or 2.0.
>
> **[2:52](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=172)** If you want to install the newer version, which we're covering in this video, you're going to need to download the [[GitHub Copilot]] Nightly extension.
>
> **[3:00](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=180)** So I'm going to go ahead and click on Install.
>
> **[3:06](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=186)** You're going to need to sign in to GitHub.
>
> **[3:11](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=191)** You may see this come up as a dialogue box in your browser, and we'll just say Open Visual Studio Code.
>
> **[3:18](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=198)** And I'll say Allow this extension to open this URI.
>
> **[3:21](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=201)** We'll say yes.
>
> **[3:25](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=205)** And now you'll see a little icon here at the bottom right hand side of Visual Studio Code.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=210)** That's how you know that it's installed.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=212)** Now, once the 2.0 version has been released, you're just going to be installing the GitHub Copilot regular extension right here.
>
> **[3:41](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=221)** There's an additional installation that you want to do, and that's to install GitHub Copilot Chat.
>
> **[3:47](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=227)** Now, that might be folded into the current installation.
>
> **[3:51](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=231)** So it looks like here that I've already installed it, but if you didn't get it, make sure that you have this installed and that it is activated once you have signed in to GitHub Copilot.
>
> **[4:06](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=246)** There's another optional extension that you may want to look into.
>
> **[4:10](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=250)** It's this GitHub Copilot Labs.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=252)** It has even more additional cutting-edge features, and I'm not going to install this one.
>
> **[4:18](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=258)** It's not really something that you have to have to use GitHub Copilot.
>
> **[4:22](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=262)** So we're going to focus on the main installation here.
>
> **[4:27](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=267)** The way you can tell you have GitHub Copilot installed, in addition to this little icon, is by going to the command palette, which is Command + Shift + P, and typing in Copilot.
>
> **[4:39](https://www.linkedin.com/learning/practical-github-copilot/installing-copilot?u=76281980&t=279)** You should see a number of Copilot features available right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[GitHub Copilot]] (7), [[GitHub]] (4), [[Privacy]] (1)
> **Tools:** github (11), visual studio (9), neovim (1)
> **Prerequisites:** install (7), you'll need (2)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (2), unzip (1)
> **Versions:** 2.0 (2), version 1 (1)
> **URLs:** [http://github.com/features/copilot](http://github.com/features/copilot) (1), [http://code.visualstudio.com](http://code.visualstudio.com) (1)
> **Env Vars:** url (1), uri (1)

#### [Getting the repo](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=0)** - [Instructor] Before we get started we'll need some files that we can work with.
>
> **[0:03](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=3)** Now I've prepared a repository with some files that you can use to follow along.
>
> **[0:07](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=7)** Now, normally I like to use [[Codespaces]] to work on my projects, but the problem is that I need to use the nightly version of Visual Studio Code and some other cutting edge extensions that are experimental.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=20)** So I'm going to need to clone this repository to my hard drive.
>
> **[0:24](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=24)** So I'm going to go here to the Code section and I'm going to click on this link.
>
> **[0:30](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=30)** Then I'm going to use a terminal.
>
> **[0:32](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=32)** I like to use the hyper application and I'll make sure that I'm in the desktop.
>
> **[0:39](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=39)** And then I'll issue a [[Git]] clone with the URL of the repository.
>
> **[0:45](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=45)** Now this is going to download the finished version of the project.
>
> **[0:50](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=50)** Now this is an advanced course so I'm assuming you understand how to work with [[GitHub]], the Terminal, and repos.
>
> **[0:56](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=56)** If not, please take a look at one of my other courses, [[Learning Git and GitHub]].
>
> **[1:01](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=61)** We're also going to be using [[Python (Programming Language)|Python]] in this course so I'm assuming that you have that installed.
>
> **[1:07](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=67)** If not, you can take a look at one of our courses on Python.
>
> **[1:11](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=71)** Let's go ahead and clear this out and I'll get out of Hyper, and I should see this GitHub practical [[Microsoft Copilot|copilot]] repository in my desktop.
>
> **[1:20](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=80)** Now I'm going to open this up and I want to make sure that I use the Visual Studio Code Insiders version to open this up.
>
> **[1:27](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=87)** When you open this up it should have the finished version of the project.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=91)** I need to switch to the proper branch.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=93)** So I'm going to go to the 0103 branch, which is the current video that you're watching right now.
>
> **[1:40](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=100)** Now, in here you'll notice that you have an audio folder with some audio files, an images folder with some artwork, as well as this YAML file with some information.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=112)** Now, this may seem familiar to you if you took my other course Practical GitHub Actions.
>
> **[1:59](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=119)** Now, in that course I showed you how you can take this YAML file and convert it into an XML as an RSS feed using GitHub actions.
>
> **[2:09](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=129)** Now, I use this file to create a weekly podcast that I do call the Future in Tech.
>
> **[2:14](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=134)** The problem that I always have is that I always end up typing this information for every one of the files and I have to find the length of the files in the operating system, plus the duration of each audio file, the location of the documents.
>
> **[2:32](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=152)** It's really in this audio folder.
>
> **[2:34](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=154)** And then I have to look up the description as well as the title, and I want to simplify that process and I'm going to use Python to take care of that.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=163)** But I want to get all this information from the files themselves.
>
> **[2:48](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=168)** So if I right click on this and I say Reveal in Finder I'm using a Mac here, I should be able to get to the list of files.
>
> **[2:55](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=175)** So you can also just go to the folder and open it up like that.
>
> **[3:01](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=181)** So from here, if I do a get info on a Mac I'll be able to see something called the ID 3 tags.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=189)** These are tags that you can embed in any MP3 file that have a lot of information that you might use for some things.
>
> **[3:16](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=196)** You can see that everything that I need is right here.
>
> **[3:18](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=198)** It has the file size as well as the title of the show.
>
> **[3:24](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=204)** It has the title of the episode plus a really good description for each episode.
>
> **[3:31](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=211)** So I have to type all these in when I create the MP3 files.
>
> **[3:35](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=215)** And so this will save me a few steps if I can create something that will do that automatically for me.
>
> **[3:41](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=221)** So when you want to show that you understand a technology like [[GitHub Copilot]] you want to show it through a project that you've built and any project that's going to be better if it's something that is solving a problem for you.
>
> **[3:55](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=235)** Now for me, this is a fantastic problem to solve because it's going to save me a lot of time.
>
> **[4:00](https://www.linkedin.com/learning/practical-github-copilot/getting-the-repo?u=76281980&t=240)** But you need to find your own project that is going to showcase how you were thinking and how you solved your own personal problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Python (Programming Language)|Python]] (3), [[Git]] (2), [[Codespaces]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Tools:** github (6), visual studio (2), terminal (2)
> **CLI Commands:** python (3), make (2), git (2), find (2)
> **Env Vars:** yaml (2), mp3 (2), url (1), xml (1), rss (1)
> **UI Navigation:** click on (2), go to (2), switch to (1)
> **Definitions:** is an  (1), is a  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Basic autocomplete](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=0)** - [Narrator] One of the features that [[Microsoft Copilot|Copilot]] gives you is the ability to auto complete your thoughts as you type them.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=6)** Now, in order to do that, it needs a lot of context.
>
> **[0:09](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=9)** So it needs to know what you want to do.
>
> **[0:12](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=12)** I'm going to go ahead and create a new file here and I'll call it convert.pi.
>
> **[0:19](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=19)** Now one of the first ways that you give Copilot context is by both the name of the file and also the extension.
>
> **[0:28](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=28)** So it's going to make inferences about what you're doing just because you typed in the name of the file here.
>
> **[0:33](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=33)** Which means that that is a way that you can convey meaning, and let it know what this application is going to be doing.
>
> **[0:39](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=39)** So, it already knows that this is going to be a conversion of something.
>
> **[0:44](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=44)** Another way that you can give it additional context is by having open tabs.
>
> **[0:48](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=48)** So if you open up a file, let's open up this feed.yaml file.
>
> **[0:53](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=53)** And what it has is a good example of how I want the file to look whenever it's done converting.
>
> **[1:00](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=60)** So this is good to have open because it's going to give the application context in order for Copilot to do its thing.
>
> **[1:07](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=67)** Another way that you can create context is by defining a good function name.
>
> **[1:14](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=74)** So you can create a function name called read audio list from files.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=84)** And what this is going to do is start asking Copilot to try to understand what you mean, and it's going to give you some suggestions here.
>
> **[1:33](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=93)** So you can see that it's basically writing the code that you need to go to a list of files and then read them.
>
> **[1:43](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=103)** So this is just regular [[Python (Programming Language)|Python]].
>
> **[1:45](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=105)** And, let's see, sometimes if you click, it'll go away.
>
> **[1:49](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=109)** So just delete something and let it auto finish.
>
> **[1:53](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=113)** Again, you could see that there's a little bit of a popup here that gives you some hints.
>
> **[1:57](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=117)** So you can accept the [[Microsoft Word|word]].
>
> **[1:59](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=119)** You can go ahead and see additional options.
>
> **[2:03](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=123)** Sometimes it'll give you more than one option right here.
>
> **[2:05](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=125)** And there's even a little triangle in the edge.
>
> **[2:08](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=128)** It's a little bit hard to get to, just stay right here in context.
>
> **[2:12](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=132)** Then you can click on these little triangles and see some other options here.
>
> **[2:16](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=136)** Now most of the time what it does here is going to be correct.
>
> **[2:20](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=140)** But you'll also note that it's going to give you different versions of this depending on what you type.
>
> **[2:25](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=145)** And also sometimes it'll give you different versions every time you do this.
>
> **[2:29](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=149)** So I'm just going to create another function and I'll call it something similar.
>
> **[2:36](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=156)** Audio list.
>
> **[2:37](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=157)** Okay, so here's one called audio list from dir.
>
> **[2:41](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=161)** And you can see that it's doing something different.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=163)** The way that LLMs work is by giving you an answer word by word based on what it knows about the language.
>
> **[2:52](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=172)** So every time you ask it to give you an answer, it's technically able to create different versions of those answers.
>
> **[3:01](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=181)** Now another way that you can create context is by creating a comment.
>
> **[3:06](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=186)** And that comment will give the application context in order to create the recommendations.
>
> **[3:12](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=192)** So I'm just going to write a comment that is similar to what I was doing with the name.
>
> **[3:16](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=196)** So I'll say read files.
>
> **[3:19](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=199)** And this time I'll say from the audio directory and list them.
>
> **[3:31](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=211)** Maybe what I want to do here is specifically say that I want to read MP3 files from the audio directory, just in case there's any other files that somebody has dropped in here.
>
> **[3:42](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=222)** So that's a little more precise.
>
> **[3:44](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=224)** After you do this, if you hit return.
>
> **[3:47](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=227)** Now a lot of times it's going to try to give you additional comments.
>
> **[3:50](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=230)** You can just go ahead and ignore by hitting return.
>
> **[3:53](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=233)** And then it's going to note that you're probably going to need to import the OS module because that's necessary to be able to read the file system.
>
> **[4:02](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=242)** And you don't really need to import system.
>
> **[4:04](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=244)** You really wouldn't know this unless you know Python.
>
> **[4:09](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=249)** You don't need all these things.
>
> **[4:10](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=250)** And see, it's going to keep on giving you suggestions that it thinks you want.
>
> **[4:14](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=254)** So if you want to accept them, just hit the tab key and just keep going.
>
> **[4:18](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=258)** And then it's going to start sort of doing whatever it thinks is right and give you auto completions line by line.
>
> **[4:26](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=266)** This isn't where I want it to go though.
>
> **[4:28](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=268)** So what I'm going to do is going to take my comment and put it down here.
>
> **[4:33](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=273)** And instead of just letting it do its thing, and, note, it is now trying to give me another suggestion here.
>
> **[4:40](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=280)** It's a little bit better if you define your own function and you name it very specifically.
>
> **[4:46](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=286)** So I'll say read audio folder and list, or something like that just to get it to sort of try to figure out what to do here.
>
> **[4:58](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=298)** So, this may or may not be what you want.
>
> **[5:01](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=301)** So what you want to do is continue to refine the name of the function to give it a little bit better context.
>
> **[5:08](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=308)** And you can even sort of go character by character.
>
> **[5:11](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=311)** And as you try different things, it's going to give you the right way of reading the files.
>
> **[5:17](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=317)** So it's going to this one, let's see, it creates an array, then it looks through all of the files and audio.
>
> **[5:24](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=324)** If the file ends with MP3, then it's going to append the file and return the audio files.
>
> **[5:29](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=329)** Let's go ahead and accept that and see if it works.
>
> **[5:32](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=332)** So now let's just go ahead and call this on a print statement.
>
> **[5:40](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=340)** And I'm going to save it and try to run it.
>
> **[5:44](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=344)** I can run things right here in this debugger, so I'll hit run a debug.
>
> **[5:51](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=351)** And it told me that there was an error, missing parentheses in call to print.
>
> **[5:56](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=356)** Yes.
>
> **[5:57](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=357)** So I guess I'm too used to other languages, or not familiar enough right now.
>
> **[6:03](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=363)** Sometimes when you switch between languages you forget things.
>
> **[6:05](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=365)** So let's go ahead and add that, that's very handy.
>
> **[6:09](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=369)** And we'll try running this function again.
>
> **[6:12](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=372)** So let's run a debug, and now it's giving you pretty much what you wanted.
>
> **[6:17](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=377)** So you can see that Copilot is going to give you a lot of different options.
>
> **[6:22](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=382)** The more you type and the better context it has, the better it can help you do what you want.
>
> **[6:28](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=388)** What I suggest is that as you're typing, you're verifying that what it's giving you is correct.
>
> **[6:34](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=394)** You are testing it out and that you try different versions of comments and the names of functions.
>
> **[6:43](https://www.linkedin.com/learning/practical-github-copilot/basic-autocomplete?u=76281980&t=403)** Plus, make sure that you have anything that you wanted to know about opened as a tab so that it understands the context of what you're trying to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[Microsoft Word|Word]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (2), python (2)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** mp3 (2)
> **UI Navigation:** go to (1), click on (1)
> **File Paths:** feed.yaml (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Autocompletions panel](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=0)** - [Instructor] [[Microsoft Copilot|Copilot]] shows you solutions on a line by line or solution by solution basis.
>
> **[0:07](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=7)** And most of the time that's okay, but sometimes you want to see different options for the solutions.
>
> **[0:13](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=13)** So, you could do that by pulling up a special panel.
>
> **[0:17](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=17)** And so what I'm going to do here is just delete this particular solution and I'm going to hit command, shift P.
>
> **[0:25](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=25)** That's control shift P on a PC and there's a special completions panel that allows you to see a number of different completions and then lets you choose from the one that you want to use.
>
> **[0:38](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=38)** Now, because my original comment just said to read MP3 files from the directory and list them, it's not putting them into a function.
>
> **[0:48](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=48)** So, if you're not getting what you want, it means that the AI doesn't have enough context.
>
> **[0:54](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=54)** And so what I'll do here is just rewrite my comments a little bit better.
>
> **[0:59](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=59)** So, I'll say create a function that reads MP3 files and let's say, we'll call it audio files in the MP3 format from, and we should probably this on a separate line, the audio directory and returns a list of them.
>
> **[1:25](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=85)** So, the better you can write this, the better it's going to go.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=88)** Let's try selecting this and I'll hit control enter, which is the shortcut and sometimes, I wanted to show you this, 'cause sometimes it kind of gets stuck.
>
> **[1:37](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=97)** It's supposed to give you 10 solutions and it says it's giving you four but it's really just showing you two.
>
> **[1:45](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=105)** So, I think it's actually going to work better if I don't select the comments.
>
> **[1:49](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=109)** If I just put my [[Cursor]] after these two comments and then I call that extra panel.
>
> **[1:56](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=116)** So, I'll do control enter again.
>
> **[1:59](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=119)** And now it's synthesizing more solutions for me.
>
> **[2:03](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=123)** Now it only did eight out of 10, which I'm not sure why I didn't do any more.
>
> **[2:07](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=127)** Maybe it just couldn't think of any more.
>
> **[2:09](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=129)** Let's see.
>
> **[2:10](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=130)** So this looks like pretty much the solution that I had before and if you like that solution, all you have to do is hit the accept solution link and it'll replace the code.
>
> **[2:20](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=140)** So, you can actually select some code and replace it if you want to.
>
> **[2:23](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=143)** I think this is pretty much what I want here so let's go ahead and accept that solution.
>
> **[2:29](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=149)** And now I have a few solutions, but what I really love about that panel is that it gives me more than a single option.
>
> **[2:38](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=158)** Some people prefer to use the sort of line by line method.
>
> **[2:42](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=162)** I almost always jump for the list of 10 possible solutions because I think it just gives me a breath of what copilot can get for me from the code.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=176)** So let's go ahead and finish this up by calling the print method and calling this get audio files method that we created here.
>
> **[3:06](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=186)** And then we will try to run this thing again.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=189)** You want to make sure that you check things after you program them.
>
> **[3:13](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=193)** Copilot is perfectly capable of doing what's called a hallucination, basically giving you code that looks okay but doesn't actually work.
>
> **[3:22](https://www.linkedin.com/learning/practical-github-copilot/autocompletions-panel?u=76281980&t=202)** There's only one way to take care of that and that is by making sure you're testing things out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3)
> **Env Vars:** mp3 (3)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 2. Using Copilot Chat

[↑ Back to Table of Contents](#table-of-contents)

#### [The chat panel](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=0)** - [Narrator] What's probably my favorite way of interacting with [[Microsoft Copilot|Copilot]] is through the Copilot chat panel, which is sitting right here at the bottom of this toolbar, and allows you to do a number of different things.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=15)** Let's go over what it can do and how it can help us with some code.
>
> **[0:19](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=19)** Now this panel will allow you to ask a bunch of different things, and it has some commands known as slash commands, so if you type the slash you'll get a list of them, and basically it can explain selected code.
>
> **[0:34](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=34)** There's a couple of things here that I think are sort of extra.
>
> **[0:37](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=37)** So here it lets you ask about Visual Studio Code extension development.
>
> **[0:42](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=42)** I'm not really sure that's relevant.
>
> **[0:44](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=44)** But you can also select some code that you think has a problem, and it'll tell you how to fix that, or at least it'll try to figure out what's wrong with the code.
>
> **[0:53](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=53)** This is pretty useful, and it's usually the first thing that I do when I run into a problem.
>
> **[0:59](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=59)** It can find a lot of the problems with the code.
>
> **[1:03](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=63)** Then there's some general help about [[GitHub Copilot]].
>
> **[1:06](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=66)** You can also have it generate unit tests, and also you can ask questions about Visual Studio Code and clear the session.
>
> **[1:14](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=74)** Now, clearing is something that you want to do every once in a while when you no longer need to remember the previous things that you've typed in here.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=84)** And so you can ask it questions about code.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=88)** So, for example, you can ask something like, "What would be a good module to read YAML files?"
>
> **[1:38](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=98)** And it understands that I'm working with [[Python (Programming Language)|Python]], and it gives me a suggestion.
>
> **[1:42](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=102)** So this is pretty cool.
>
> **[1:46](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=106)** You can ask questions about code, and it can even understand the environment that you're working with right now.
>
> **[1:52](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=112)** Now you can also select some codes.
>
> **[1:54](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=114)** Let's go ahead and select the code and hit the slash command and select explain.
>
> **[2:02](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=122)** So this is going to tell you what this piece of code is doing.
>
> **[2:04](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=124)** This is great for when you are maybe looking at a repo, some old code that you've done.
>
> **[2:10](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=130)** It does a great job of explaining it.
>
> **[2:13](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=133)** So here we go.
>
> **[2:14](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=134)** This code defines a function called get_audio_files, and it's pretty much telling you what the code is doing.
>
> **[2:20](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=140)** I mean, it wrote the code itself, so that's not too surprising, but it really does a good job of explaining code.
>
> **[2:26](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=146)** Now let's try to fix this code.
>
> **[2:28](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=148)** Now I know there's nothing wrong with the code, but it'll do something interesting, so I'm going to show you what it will do.
>
> **[2:34](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=154)** So when I say fix, it tells you that the code is missing an import statement for the OS module.
>
> **[2:41](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=161)** Now you may notice that we already have that up here.
>
> **[2:44](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=164)** It's just that it wasn't selected.
>
> **[2:46](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=166)** So technically this is correct, but I'm not sure that it needed to tell me that it's missing an import statement when it was right up here.
>
> **[2:54](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=174)** So maybe we can also rate these things here.
>
> **[2:57](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=177)** So we can say, "Vote down this sort of suggestion," and then we'll give it sort of Copilot.
>
> **[3:04](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=184)** Let's see.
>
> **[3:05](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=185)** That's maybe a good suggestion here.
>
> **[3:07](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=187)** So you can also give them additional feedback if you want to.
>
> **[3:12](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=192)** Now this also allows you to make a selection and then take the code that it selected so you could see that there are some additional buttons right here, and it lets you copy the code to the clipboard, it lets you insert the code at the [[Cursor]], and there's also three dots here so you can put it in a new file or say this is a small program.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=216)** You can actually run this in the terminal as well.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-copilot/the-chat-panel?u=76281980&t=218)** So you could say, "Copy this to the clipboard," and then just paste it and here it's just going to replace everything, but these buttons can be pretty useful when you're working with stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[GitHub Copilot]] (1), [[Python (Programming Language)|Python]] (1)
> **Tools:** visual studio (2), github (1), terminal (1)
> **CLI Commands:** find (1), python (1), make (1)
> **Definitions:** known as (1), is a  (1)
> **Code Identifiers:** get_audio_files (1)
> **Env Vars:** yaml (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)

#### [Generating data](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=0)** - [Narrator] One of the things that the chat panel can really help you with is in working with data.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=6)** So it can understand and generate random data for you if you're working on a project.
>
> **[0:13](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=13)** Or maybe, in this case, I want to maybe have additional data for some other episodes.
>
> **[0:19](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=19)** A lot of times you need maybe a lot more data than when you have already.
>
> **[0:23](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=23)** So we can try to make it understand that we would like additional sort of information here.
>
> **[0:30](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=30)** And you have to be pretty specific when you're asking something like this.
>
> **[0:35](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=35)** So I'm going to say let's try just saying I want to add an additional episode to the feed.yaml file.
>
> **[0:50](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=50)** Let's see what it does.
>
> **[0:54](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=54)** So see, it's actually giving you instructions on how to do it, but it went ahead and actually generated pretty decent suggestion for a new episode.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=65)** It even understood the context of what's in these different files and it made a suggestion of a potential new episode with some potential different text, and, you know, all the other stuff that is right here.
>
> **[1:21](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=81)** Now that's pretty powerful if you think about it.
>
> **[1:23](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=83)** You can just maybe copy this code and then insert it right here.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=88)** And you'll notice that it actually followed all the formats.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=91)** It even, you know, incremented this number five.
>
> **[1:35](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=95)** If you take a look at the date, it knew that it needed to sort of make it a week after the previous date.
>
> **[1:44](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=104)** And that is, overall, extremely impressive.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=110)** Now let's see if it can help with sort of obfuscate some of this text.
>
> **[1:54](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=114)** Like perhaps you've got some text that is names that you don't want people to know about.
>
> **[2:00](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=120)** This is names from episodes that I have done in the past, so maybe I don't want to use anybody's name.
>
> **[2:06](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=126)** So maybe you can say here, can you change the names of the people in the data I have selected?
>
> **[2:19](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=139)** Let's see what it does with this.
>
> **[2:34](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=154)** All right, so here, it didn't seem to do as good a job although it looks like it did for some reason change [[John the Ripper|John]] Smith.
>
> **[2:43](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=163)** So let's try being a little more specific.
>
> **[2:59](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=179)** So let's try something like that.
>
> **[3:14](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=194)** All right, so it looks like it still didn't like it.
>
> **[3:16](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=196)** It did some of the names, like it did John Smith here and Jane Doe, but it didn't get the names in the middle.
>
> **[3:24](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=204)** So I still don't know that it's understanding the question right here.
>
> **[3:29](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=209)** Let's try selecting this and just ask it to make up just AI generated data.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=218)** So, let's see.
>
> **[3:39](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=219)** Can you rewrite this data with AI generated data?
>
> **[3:53](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=233)** All right, it didn't like that at all.
>
> **[3:56](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=236)** Let's try a different prompt here.
>
> **[4:12](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=252)** All right, so you could see it did a little bit better with a different prompt.
>
> **[4:16](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=256)** So sometimes you really have to work with it on, I feel like it did a pretty decent job here maintaining things.
>
> **[4:24](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=264)** It appeared to keep the names of the files, which is great.
>
> **[4:30](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=270)** And it left everything pretty much as it was, it just changed all the names.
>
> **[4:36](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=276)** And I could continue to rewrite the prompts.
>
> **[4:41](https://www.linkedin.com/learning/practical-github-copilot/generating-data?u=76281980&t=281)** One thing that you may want to do is, once you create a prompt that works for a specific task, try to keep that in a notepad so that you can use it whenever you are doing something similar.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2)
> **CLI Commands:** make (3)
> **File Paths:** feed.yaml (1)
> **Speakers:** - [narrator] (1)

#### [Chatting with Copilot](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=0)** - [Instructor] Let's take a look at how we can refine chatting with [[Microsoft Copilot|copilot]] in this chat window.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=6)** So I've got a bit of code here, but I know that I want to be able to read the id3 information from my MP3 files.
>
> **[0:17](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=17)** So I'm going to ask Copilot if there's a module I can use, so I'll say, "Is there a module I can use to read id3 data from audio files?"
>
> **[0:35](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=35)** Cool, it tells me there's a module called eyed3 that you can use, and it also shows me some sample code.
>
> **[0:42](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=42)** Now, I could try to implement this myself, but I'd rather it just sort of generate the code for me.
>
> **[0:47](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=47)** So let's try that.
>
> **[0:49](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=49)** Can you modify the code so that it reads?
>
> **[0:55](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=55)** It reads the id3 data from the audio file.
>
> **[1:07](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=67)** All right, so it actually recognized that I have the current tab open and it gave me some code that would work to take care of this.
>
> **[1:16](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=76)** Now, this is a pretty good code, but I only really want the information with the comments as well as the title.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=86)** I don't need the artist, the file name, the album, all that other stuff right now.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=91)** So let's try asking it.
>
> **[1:36](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=96)** I'll say I only want the title and comments fields.
>
> **[1:43](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=103)** Let's see what it does.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=110)** So it corrected things pretty well for me.
>
> **[1:53](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=113)** Let's go ahead and add this.
>
> **[1:56](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=116)** So we'll go ahead and either copy it, or select everything and just ask it to print it out.
>
> **[2:05](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=125)** So let's go ahead now and run it.
>
> **[2:14](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=134)** All right, so it did say that I don't have any module called eyed3, and that means that I do need to install it, so, let's see if we can get [[ChatGPT]] to help.
>
> **[2:32](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=152)** And I'm just going to try to copy this error, and see what it does with it.
>
> **[2:40](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=160)** I'll paste this and I'll just say, what do I need to do?
>
> **[2:50](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=170)** So it's telling me that I need to install this with pip, and let's go ahead and do that.
>
> **[2:58](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=178)** So pip install eyed3, all right, so it didn't find pip, and that's because I'm on a Mac, and I actually need to say pip3, install eyed3.
>
> **[3:15](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=195)** It's going to install that module.
>
> **[3:20](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=200)** Let's clear this out for right now, and let's try running this again.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=212)** Cool, and it looks like we got all the information in an array, which is great.
>
> **[3:38](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=218)** You can see it all right here.
>
> **[3:47](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=227)** Now, let's go back to the chat, and let's go ahead and clear this out.
>
> **[3:53](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=233)** Now at any time in the process of writing things you can go ahead and delete any of the prompts if you don't want copilot to maintain that particular element in context.
>
> **[4:08](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=248)** So I don't really need it to know about this error.
>
> **[4:10](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=250)** I've already fixed it so I can get rid of it, but if you ever do something and you recognize that you didn't type a prompt incorrectly, or maybe, you thought I could really give this a little bit more context by typing some additional instructions, say, for example, I could go ahead and instead of saying that I only won the title and comments fields here, I could delete this and then add it to this original prompt.
>
> **[4:41](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=281)** Or maybe just rewrite the prompt into a single line so that I can use it in other projects as I mentioned in the previous video.
>
> **[4:49](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=289)** You want to keep a list of the prompts that work.
>
> **[4:52](https://www.linkedin.com/learning/practical-github-copilot/chatting-with-copilot?u=76281980&t=292)** And sometimes to do that, you need to be able to delete some of sort of your extra prompts that you do as you have a conversation with Chat Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), [[ChatGPT]] (1)
> **CLI Commands:** pip (3), find (1), pip3 (1)
> **Prerequisites:** install (5)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** mp3 (1)
> **Exercise Files:** sample code (1)
> **Analogies:** for example (1)

#### [Output to YAML](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=0)** - [Instructor] Right now, it's a little bit difficult to read the data in the format that it's being output in, so I'm going to ask it to print the result in YAML format, and I'll get some code for that.
>
> **[0:10](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=10)** So I'll say, "can you get this code to print the results in a YAML format so it's easier to read?"
>
> **[0:23](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=23)** Just check this out.
>
> **[0:25](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=25)** All right, so you can use the PyYAML library to convert the results.
>
> **[0:29](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=29)** That's great. It's given me some good code.
>
> **[0:33](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=33)** Let's go ahead and select all this and just replace this with the new code.
>
> **[0:39](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=39)** I think that if I try to run this, I'm going to get the same problem, which means that I need to install this YAML file.
>
> **[0:47](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=47)** You can see by this yellow squiggles.
>
> **[0:50](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=50)** Now I know that I need to install a library called PyYAML, but you may just forget and try just running pip3 install yaml, and you'll get an error like this, says, "Could not find a version that satisfies the requirement."
>
> **[1:07](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=67)** So let's just see what [[ChatGPT]] says about this error.
>
> **[1:11](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=71)** See if it notices errors from the terminal and tells me what I need to do.
>
> **[1:18](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=78)** "I'm getting an error in the terminal like this,"
>
> **[1:27](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=87)** and then I'll paste the error.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=88)** Let's see what it says.
>
> **[1:30](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=90)** "The error message suggests that the PyYAML library is not installed in your [[Python (Programming Language)|Python]] environment," and it accurately tells me that I need to install YAML with pip install pyyaml.
>
> **[1:41](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=101)** Now, I'm on a Mac, so I know that I need to say pip3 install pyyaml, and it's going to do that correctly.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=110)** I'm going to clear this out.
>
> **[1:53](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=113)** Let's go ahead and try to run this and see what happens.
>
> **[1:58](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=118)** Looking at the output, looks like I'm getting some of the text here, but whenever it gets to the comments, it looks like it's outputting a bunch of sort of additional things.
>
> **[2:13](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=133)** So I think the comments are in a sequence of objects that it's having a problem parsing.
>
> **[2:22](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=142)** So what I want to do is see if I can just convert the comments to a simple string.
>
> **[2:29](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=149)** So let's go ahead and see if ChatGPT can help me with that.
>
> **[2:33](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=153)** Say, "can you convert the comments from the ID3 tags to a string for cleaner output?"
>
> **[2:45](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=165)** Let's try that.
>
> **[2:49](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=169)** All right, so it says that you can... Let's see if we can make this bigger.
>
> **[2:54](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=174)** Yeah, convert this into a string like this.
>
> **[3:00](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=180)** So this'll work pretty well.
>
> **[3:03](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=183)** Let's select all this and just replace this, and we'll try running this again.
>
> **[3:16](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=196)** And it looks like that's fixing it, mostly.
>
> **[3:21](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=201)** It's probably not the best way to look at YAML.
>
> **[3:25](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=205)** There you go.
>
> **[3:25](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=205)** That made the window a little bit bigger and it ended up looking a little bit better.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=210)** So now it looks like if it's got comments and then the title, so that at least doesn't have all of the other information that was making it look really weird, and so that's definitely an improvement.
>
> **[3:49](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=229)** I really like that it's able to take a look at errors and give me some information, like when I have to import additional items and I can copy and paste things from the terminal and other parts of the environment.
>
> **[4:02](https://www.linkedin.com/learning/practical-github-copilot/output-to-yaml?u=76281980&t=242)** So it's really a pretty useful tool, when you think about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** pip3 (2), find (1), python (1), pip (1), make (1)
> **Env Vars:** yaml (5), id3 (1)
> **Prerequisites:** install (6)
> **Tools:** terminal (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [History and file names](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=0)** - [Instructor] I'm the kind of person that likes to keep things clean so I'm constantly getting rid of some of the chats that I've had with [[Microsoft Copilot|Copilot]] but it does keep everything.
>
> **[0:11](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=11)** So if you want to get to an early chat even if you've deleted it, you can go right here to this history panel and take a look at all the chats that you've had with the application.
>
> **[0:20](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=20)** So you can see some of the earlier chats that we used right here.
>
> **[0:24](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=24)** You can click on any one of those and take a look at how you have interacted with the application before.
>
> **[0:30](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=30)** That can be super useful because again, I've mentioned that you do want to keep your chat around just in case you are in a new project and you want to remember how to do something.
>
> **[0:41](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=41)** Now, this is a little bit too messy it has too much information, but this is a nice way of getting to additional data that perhaps you've lost.
>
> **[0:51](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=51)** So let's take a look at how we can improve on this.
>
> **[0:53](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=53)** Next up, if I take a look at my sample YAML I do have a file name that has the name of the MP3 and I use that so that the audio player in the podcast stream knows where the files are in relationship to my XML document in my application that I built with actions.
>
> **[1:19](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=79)** So I'm going to do that.
>
> **[1:20](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=80)** Let's go back into chat.
>
> **[1:23](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=83)** And I've cleared this out.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=84)** You can see I'm keeping things clean.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=86)** So let's say in the get audio files function, I'm being specific here.
>
> **[1:34](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=94)** I'd like to also include the file name.
>
> **[1:44](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=104)** All right, so it's just really part of the ID 3 data.
>
> **[1:50](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=110)** So let's try selecting this and just copying in this code and we'll give it a test.
>
> **[1:57](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=117)** Run a debug here.
>
> **[1:59](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=119)** And, now sometimes it does do this, notice that it just rewrote part of it and it didn't give me the whole context.
>
> **[2:11](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=131)** So let's undo this because it didn't do this YAML dump right here and make sure that we have everything selected.
>
> **[2:20](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=140)** Let's go back to the chat and we'll just go ahead and delete this prompt and do it again.
>
> **[2:28](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=148)** (types)
>
> **[2:39](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=159)** All right, let's see if it gives me everything this time.
>
> **[2:44](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=164)** Yeah, it looks like I just maybe didn't have that last line selected.
>
> **[2:47](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=167)** So just be careful about that and we'll hit this button here.
>
> **[2:51](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=171)** Let's try running it again.
>
> **[2:56](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=176)** And it is giving me all the information.
>
> **[2:58](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=178)** And now file name needs to have the audio prefix in it, just like in the YAML file, right?
>
> **[3:06](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=186)** So here you can see that it does have this prefix.
>
> **[3:09](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=189)** So I'll just ask it to add that.
>
> **[3:12](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=192)** Let's go back into chat and let's say prefix the file name with audio like this.
>
> **[3:25](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=205)** It's going to give me the updated code again make sure everything's selected and hit that over.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=216)** It looks like it's adding the audio file right there.
>
> **[3:39](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=219)** Now it is bothering me that for some reason it's sort of putting the comments first on each element and then the file name and then the title.
>
> **[3:49](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=229)** So something is kind of sorting the data.
>
> **[3:52](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=232)** Let's ask Chat Copilot about this.
>
> **[3:56](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=236)** My YAML is resorting the data, can I prevent it from doing that?
>
> **[4:05](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=245)** And let's check it out.
>
> **[4:08](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=248)** Yeah, so you can say sort keys parameter, set the false right here.
>
> **[4:14](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=254)** So let's go ahead and again, make sure everything's selected, copy that over, and just a little addition here.
>
> **[4:22](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=262)** So let's try that again.
>
> **[4:24](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=264)** We'll run a debug and now that's looking better.
>
> **[4:31](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=271)** So it's got the title and then the comments.
>
> **[4:34](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=274)** And the comments is just a bunch of text, so that's fine.
>
> **[4:37](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=277)** And then the file name at the end.
>
> **[4:40](https://www.linkedin.com/learning/practical-github-copilot/history-and-file-names?u=76281980&t=280)** So between the history and continuing to prompt Chat Copilot I'm really getting close to what I need to match the information that I need to enter in this feed file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3)
> **Env Vars:** yaml (4), mp3 (1), xml (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Warnings:** be careful (1)

#### [Troubleshooting fixes](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=0)** - [Instructor] Sometimes you have to correct [[ChatGPT]].
>
> **[0:02](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=2)** It's a little bit faster than deleting, and then rewriting a prompt, so let's try that.
>
> **[0:08](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=8)** I'm going to go ahead and add the duration field right here.
>
> **[0:13](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=13)** So I'll ask it to do that.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=15)** Let's add the duration from the id3 information to the get audio files function.
>
> **[0:28](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=28)** I feel like I'm being pretty specific here, but let's see what happens.
>
> **[0:38](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=38)** Now, I think it did a pretty good job.
>
> **[0:41](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=41)** Let's take a look at what happened here.
>
> **[0:45](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=45)** It doesn't output this print yaml part.
>
> **[0:49](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=49)** That's again, cuz I didn't select everything, but I'm just going to grab all this.
>
> **[0:55](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=55)** And it looks like it's also not, because it doesn't know about the YAML file, it didn't import yaml, so let's see.
>
> **[1:06](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=66)** Let's just go ahead and copy all this and replace our code.
>
> **[1:14](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=74)** It's a little manual, but it's okay for this little piece right here.
>
> **[1:18](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=78)** And let's see what it's doing right now.
>
> **[1:24](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=84)** All right, so now it's adding the duration, but it's not in a format that I want.
>
> **[1:30](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=90)** So I could delete things and try rewriting the functions but sometimes it's just easier to ask ChatGPT to correct things for you.
>
> **[1:41](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=101)** So let me say I need the duration in a format that looks like this, and I'll say 00:00, and let's just put in a time 36 like that.
>
> **[1:58](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=118)** All right, so it's giving me a way to use the daytime module.
>
> **[2:06](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=126)** Let's see, daytime module.
>
> **[2:10](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=130)** Let's see if I can get it to write it as a function.
>
> **[2:23](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=143)** Let's go ahead and select everything as well, so that it has all the information that I want to modify.
>
> **[2:39](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=159)** And let's see if this works.
>
> **[2:41](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=161)** So we'll just replace this and we'll try running it.
>
> **[2:48](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=168)** So this doesn't look quite right.
>
> **[2:50](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=170)** I think it's adding the date.
>
> **[2:54](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=174)** So let's see if it's going to correct it if I just copy.
>
> **[2:57](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=177)** I think it should just be using the time function because this doesn't really need a date.
>
> **[3:03](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=183)** Let's go back into chat, I'll just even ask it.
>
> **[3:26](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=206)** All right, so now I try doing it with the time function.
>
> **[3:30](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=210)** It sort of apologized.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=212)** Wasn't sure what error I was getting.
>
> **[3:34](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=214)** Let's see if it's getting it right.
>
> **[3:36](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=216)** So I'll just pace this right here and give it a suggestion.
>
> **[3:39](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=219)** I mean, this format looks pretty good here.
>
> **[3:43](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=223)** Let's go ahead and try running in, see what happens.
>
> **[3:48](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=228)** All right, it looks like it's now outputting in the correct format, so that's great.
>
> **[3:54](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=234)** So sometimes you do have to coax it a little bit, sort of move it along.
>
> **[3:59](https://www.linkedin.com/learning/practical-github-copilot/troubleshooting-fixes?u=76281980&t=239)** It's actually good if you know the language a little bit so that you can find not necessarily errors, but more like problems when it's not giving you just the right thing and cost Chat [[Microsoft Copilot|Copilot]] into giving you the help that you need to get the job done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Microsoft Copilot|Copilot]] (1)
> **CLI Commands:** find (1)
> **Ports:** :00 (1)
> **Env Vars:** yaml (1)
> **Speakers:** - [instructor] (1)

#### [Writing comments](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=0)** - [Instructor] Let's finish up our function by working with the file sizes, which is the last thing I need to add to my YAML, and then I'll show you how you can use Chat [[Microsoft Copilot|Copilot]] to add comments to your applications.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=15)** So let's go ahead and start by saying in the get_audio_files function, can you add the size of each MP3 file as a field in audio files, which would be this array right here.
>
> **[0:41](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=41)** Let's go ahead and see what it does.
>
> **[0:49](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=49)** All right, once again, it didn't grab everything, so let's just go ahead and copy this, delete this, and make sure we have the whole context and we'll ask the question again.
>
> **[1:05](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=65)** And now we will replace it.
>
> **[1:09](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=69)** So it looks like it's using get the file size from the OS module, which is fine.
>
> **[1:18](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=78)** Let's try to run this and see what we get.
>
> **[1:21](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=81)** So we do get a size, but it isn't formatted how I want it to be formatted.
>
> **[1:26](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=86)** I want it to have commas.
>
> **[1:28](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=88)** So let's go ahead and ask for that.
>
> **[1:31](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=91)** Again, make sure this is selected, and I'm going to come in here and say, can you reformat the size field so that it's written as a string with commas?
>
> **[1:54](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=114)** All right, so it's going to create a string and format it appropriately.
>
> **[2:01](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=121)** Let's go ahead and move this over and we will once again just run it, and it looks like it's giving me my beautiful comments right here, super.
>
> **[2:13](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=133)** So let's go ahead and ask it to go ahead and write this out to a file.
>
> **[2:17](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=137)** Since what I'll probably do is just go ahead and run this document and then go into my file and also copy from that file into my other YAML document.
>
> **[2:32](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=152)** So let's do, let's write the YAML out to a file called episodes.yaml.
>
> **[2:51](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=171)** All right, looks like it's sending everything
>
> **[2:59](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=179)** with a right command as a file and outputting that YAML.
>
> **[3:04](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=184)** So let's go ahead and move this over and let's go ahead and run it.
>
> **[3:11](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=191)** Now this time, it's going to generate a file.
>
> **[3:14](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=194)** So let's take a look at our documents.
>
> **[3:16](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=196)** And sure enough, this episodes.yaml is now right here, looks pretty good.
>
> **[3:23](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=203)** However, I did notice that it's actually creating some sort of carriage return at the end of every one of these strings.
>
> **[3:32](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=212)** And also, these names aren't quite matching the names that I have in my feed.yaml, so I'll need to modify those.
>
> **[3:44](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=224)** Let's go ahead and do title, comments.
>
> **[3:49](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=229)** Let's see, so we'll put this side by side here.
>
> **[3:51](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=231)** So title and instead of comments, it's going to be descriptions or description.
>
> **[3:59](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=239)** Then instead of file name, it'll just be file.
>
> **[4:02](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=242)** Duration's fine, and instead of size here, we'll say length.
>
> **[4:07](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=247)** That way, it'll match everything a little bit better, and I think I can get rid of this carriage return right here and I should be able to get some better output.
>
> **[4:23](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=263)** So let's try this out.
>
> **[4:29](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=269)** All right, I will need to find that episodes.yaml again.
>
> **[4:34](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=274)** And so now it's got title, description, and then file, duration, length.
>
> **[4:41](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=281)** I'm going to leave the published alone and actually enter those myself manually, because it's basically every other week, but there's going to be some weeks that I'm missing.
>
> **[4:53](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=293)** So it's not going to be a good thing to do programmatically, because occasionally, it's just going to get things wrong if I miss a week, or maybe one week, I won't publish on Thursdays for some reason, so that's really not something that I can program, but it's getting almost all the data that I need in the right format.
>
> **[5:12](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=312)** So as I publish a new mp3, I'll just be able to go basically to the bottom of this file and pick up all these fields and then just add it to this feed.yaml that my Actions application can use and build what I need.
>
> **[5:29](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=329)** One last thing I want to do though is go ahead and write some comments, because you know, when I come back to all this code, I'm probably not going to remember everything that I was trying to do, or at least everything that Copilot helped me do.
>
> **[5:44](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=344)** So one of the things that it does super well is write comments.
>
> **[5:48](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=348)** A lot of times, when I write comments, I feel like I don't know what to say, I don't know the right words, it's like I'm giving a speech or something.
>
> **[5:58](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=358)** So you're going to love the way that Chat Copilot does comments.
>
> **[6:03](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=363)** Let's go ahead and just go ahead and clear everything.
>
> **[6:06](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=366)** I don't need it to sort of look at all the context, and I'll just say, can you add some comments so I don't forget what things do?
>
> **[6:26](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=386)** I think it somehow lost it.
>
> **[6:29](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=389)** Let's try it again. Let's try to unstick it.
>
> **[6:34](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=394)** We'll select the code and then we'll try asking the question again.
>
> **[6:39](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=399)** Can you add some comments to the code selected so I don't forget what things do in the future?
>
> **[6:53](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=413)** Let's see if it takes it well this time.
>
> **[6:57](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=417)** All right, so it looks like it's doing a much better job now.
>
> **[7:02](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=422)** I couldn't have written better comments myself, so let's go ahead and replace everything.
>
> **[7:10](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=430)** Yeah, it's way better at writing comments than I think I will ever be, so let's try running it.
>
> **[7:17](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=437)** Again, you know, don't forget to run it, you never know.
>
> **[7:20](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=440)** I mean, it actually does a fantastic job of writing comments.
>
> **[7:24](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=444)** I've done it plenty of times before, and let's go back into the Explorer and look at the episodes.yaml file and you can see that it writes everything pretty well.
>
> **[7:37](https://www.linkedin.com/learning/practical-github-copilot/writing-comments?u=76281980&t=457)** And now I have this beautiful application that is going to save me so much time in the future and I can always go back into this code and look at what I've did or what Chat Copilot helped me do with the addition of all these fantastic comments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4)
> **File Paths:** episodes.yaml (4), feed.yaml (2)
> **Env Vars:** yaml (4), mp3 (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** don't forget (3)
> **Code Identifiers:** get_audio_files (1)
> **UI Navigation:** select the (1)
> **Analogies:** it's like (1)


### Next Steps

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next](https://www.linkedin.com/learning/practical-github-copilot/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practical-github-copilot/what-s-next?u=76281980&t=0)** - Hey, it's Ray again.
>
> **[0:01](https://www.linkedin.com/learning/practical-github-copilot/what-s-next?u=76281980&t=1)** I hope you enjoyed the course and realize what a game-changer this is for developers.
>
> **[0:06](https://www.linkedin.com/learning/practical-github-copilot/what-s-next?u=76281980&t=6)** AI-assisted coding will be helping to create the next great app Trust me, having experience with the tools is going to put you ahead of the game.
>
> **[0:15](https://www.linkedin.com/learning/practical-github-copilot/what-s-next?u=76281980&t=15)** Now, if you work on a project using [[Microsoft Copilot|Copilot]], I'd love to know about it, so post about it on [[LinkedIn]] and use the #PoweredbyLIL, and let us know what you think.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1), [[LinkedIn]] (1)
> **Speakers:** - hey (1)


## Instructor

- [[Ray Villalobos]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/github-practical-copilot-4412871)

## Skills Covered

- GitHub
- Artificial Intelligence (AI)
- GitHub Copilot

## Path Context

### In [[Prepare for the GitHub Foundations Certification]]
← [[GitHub Issues and Projects for Teams]] | **4 of 7** | [[Learning GitHub Codespaces for Enterprise]] →

### In [[Career Essentials in GitHub Professional Certificate]]
← [[Practical GitHub Project Management and Collaboration]] | **3 of 4** | [[Practical GitHub Code Search]] →

## Part of

- [[Career Essentials in GitHub Professional Certificate]]

## Appears In

- [[Prepare for the GitHub Foundations Certification]]
- [[Career Essentials in GitHub Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub, GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Capstone- Building Production Features with Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Responsible AI Development with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)