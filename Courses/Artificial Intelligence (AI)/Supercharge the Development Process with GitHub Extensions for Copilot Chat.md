---
type: course
cssclasses:
  - lle-course
slug: supercharge-the-development-process-with-github-extensions-for-copilot-chat
url: "https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat"
duration_minutes: 14
duration: 14m
updated: 10/4/2024
learners: 62193
skills:
  - GitHub
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEtPfEC0eqXeQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727977143611?e=2147483647&amp;v=beta&amp;t=BbfOBvo5LM_G9RDIIGB_1D5_JB6OLGcCMV_jx0Sf1Ls"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Career Essentials in GitHub Copilot Professional Certificate]]'
  - '[[Master GitHub Copilot]]'
prev_courses:
  - '[[AI Pair Programming with GitHub Copilot]]'
  - '[[Exploring the Future of Development with GitHub Copilot Workspace]]'
next_courses:
  - '[[Refactoring with GitHub Copilot]]'
  - '[[Delivering and Analyzing a Software Pilot- GitHub Copilot]]'
path_nav: '[{"path":"Career Essentials in GitHub Copilot Professional Certificate","position":2,"total":4,"prev":"AI Pair Programming with GitHub Copilot","next":"Refactoring with GitHub Copilot"},{"path":"Master GitHub Copilot","position":3,"total":8,"prev":"Exploring the Future of Development with GitHub Copilot Workspace","next":"Delivering and Analyzing a Software Pilot- GitHub Copilot"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Supercharge%20the%20Development%20Process%20with%20GitHub%20Extensions%20for%20Copilot%20Chat.md)

![Supercharge the Development Process with GitHub Extensions for Copilot Chat](https://media.licdn.com/dms/image/v2/D4D0DAQEtPfEC0eqXeQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727977143611?e=2147483647&amp;v=beta&amp;t=BbfOBvo5LM_G9RDIIGB_1D5_JB6OLGcCMV_jx0Sf1Ls)

# Supercharge the Development Process with GitHub Extensions for Copilot Chat

> In this course, we’ll explore how GitHub Extensions for Copilot Chat can transform your development environment through new external tools and integrations. You’ll learn how to navigate the prerequisites for using GitHub Extensions, how to install and manage them, and how Copilot Chat utilizes extensions to streamline your development process. You’ll also be guided through the GitHub Marketplace s

> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat) | 14m | 62K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Extending GitHub Copilot Chat](#extending-github-copilot-chat)
- [**1. Using Copilot Extensions**](#1-using-copilot-extensions) (4 videos)
  - [Prerequisites for using GitHub Extensions](#prerequisites-for-using-github-extensions)
  - [Installing extensions from the GitHub Marketplace](#installing-extensions-from-the-github-marketplace)
  - [Using GitHub Extensions in code editors](#using-github-extensions-in-code-editors)
  - [Using GitHub Copilot on GitHub.com](#using-github-copilot-on-githubcom)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Extending GitHub Copilot Chat](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=0)** - One of the standout [[Microsoft Products|products]] for developers in [[Artificial Intelligence (AI)|artificial intelligence]] has been [[GitHub Copilot]]. In a recent survey, 76% of programmers reported using or planning to use AI tools in development. However, so far, [[Microsoft Copilot|copilot]] has been limited to functionality [[GitHub]] has programmed internally, but now Copilot allows third parties to expand its capabilities through an extension system. With Copilot extensions, you can build apps that take advantage of connections to other tools, models and data. It gives extensions access to your chat history, a large language model that lets you ask more [[Generic Programming]] questions, and also the ability to execute third party functions for added capabilities. Although it's a new product, you can already find tools from companies like Docker, LaunchDarkly, and of course you can also build your own. So if you're enjoying the productivity behind GitHub Copilot, it's time to take it to the next level with extensions. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[GitHub Copilot]] (2), [[Microsoft Products|Products]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[GitHub]] (1)
> **Tools:** github (3)
> **CLI Commands:** find (1), docker (1)
> **Speakers:** - one (1)


### 1. Using Copilot Extensions

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisites for using GitHub Extensions](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=0)** - Extensions are a part of [[GitHub]]'s [[Microsoft Copilot|Copilot]] experience, but it's not something that is freely available to all GitHub accounts, so it's important that you understand the requirements you need in order to use them. Copilot Chat, which is required to run Copilot Extensions, is available as an addition to your GitHub subscription with the Individual versions starting at $10 in the US, $19 a month for Copilot Business, and $39 a month for GitHub Enterprise clients. There are discounts for annual subscriptions and there are free options for verified students, teachers, and open source maintainers. You can start a [[GitHub Copilot]] subscription with a free trial as well. Now this goes on top of your [github.com](https://github.com) subscription, which is free for individuals and organizations. The Team subscription is at $4 per user per month, while the Team version is $4 per user per month, and the Enterprise version at $21 per user per month. Copilot and Copilot Extensions are part of the features that GitHub offers as add-ons, which includes Copilot [[Codespaces]], large file storage, and advanced security. The Enterprise version does offer some additional options like the ability for Copilot to understand organizational context and the option of adding models fine tuned to a company's code. The Business and Enterprise versions also offer some extra [[User Management]] and security features. Once you have the proper accounts and tools, you can use Copilot in a few different ways. You can use them with different coding editors,
>
> **[1:33](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=93)** including Visual Studio, Visual Studio Code, Neovim, and JetBrains IDEs. And now you can even use Copilot and Copilot Extensions directly in your browser. You can see that as an additional icon when you're logged in and on a GitHub page. Right now that's available as a limited beta, so if you don't see it in your account, then it should be available soon. If you meet those requirements, you have the option of adding GitHub extensions to your platforms, which is done by visiting the GitHub marketplace, and then clicking on the Copilot section. You can read more about GitHub extensions on the product feature page, which has links back to the marketplace, as well as instructions to build an extension right here. By the way, don't forget to scroll down to the bottom of the page, which has links to quick start examples, tutorial videos, and much more. Copilot Chat is already a powerful tool that helps developers speed up the workflow by extending chats with extensions. GitHub is changing how useful AI coding can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (13), [[GitHub]] (11), [[GitHub Copilot]] (1), [[Codespaces]] (1), [[User Management]] (1)
> **Tools:** github (12), visual studio (2), neovim (1)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** required to (1)
> **Speakers:** - extensions (1)

#### [Installing extensions from the GitHub Marketplace](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=0)** - Before we get into how extensions work, we need to make sure they're installed in our editors properly. We'll take a look at the Visual Studio Code Editor, as well as [[Codespaces]], which is a clone of Visual Studio Code in the cloud. You can start a Codespace in any project. Just go to one of your repositories and go to the code menu right here. Make sure you're in the Codespaces tab, and then we'll create a Codespace for this project. This is going to take a while to load, but once the Codespace is booted up, you'll want to make sure that you turn on the proper extensions. You can go to the Extensions icon on the activity bar, and then we can do a search for [[Microsoft Copilot|Copilot]]. You'll see a couple of different extensions that show up, including [[GitHub Copilot]], as well as GitHub Copilot Chat. If you hit install on the first one, it'll actually install both of them. Once it's installed, you'll see an additional icon right here where you can access Copilot Chat. Now you can start asking some questions. I want to ask a question about this project, so I'm going to click right here, and you'll see that this is a simple [[HTML]], CSS, and [[JavaScript]] project. I'm going to select some code from the JavaScript file and then I'll open Copilot Chat and I'll ask what this code does. What you get back here is pretty reasonable from Copilot Chat. It understands that this code talks about the event listener as well as the type of code that I've written here. Copilot is smart enough to understand the context of any open tabs and any selected text in your editor, but it can't understand the context
>
> **[1:34](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=94)** of your entire repository by default. So I can ask it, what's the code for this repo about? It's trying to guess what's happening based on the code snippet and not the entire context of my repository, but there's a way around that by using one of Copilot's built-in extensions, it's the @workspace command. Now I can ask the same question, and this time, the workspace extension is able to look at my entire repository and answer questions about it. You can also call upon additional Copilot features by hitting Command + Shift + I on a Mac or Control + Shift + I on a PC, and then immediately start asking about your code. You can type a slash to look at the additional commands that are available, and you can see the workspace command is right here. You can also hit the at sign and see some of the additional built-in extensions that [[GitHub]] offers. Let's take a look at how this would work in a normal Visual Studio Code application. In the same way, I would need to go to the Extensions section and look for Copilot. Make sure that I install the first Copilot extension, that should install both of them. The difference between using Codespaces and something like Visual Studio Code is that once you install an extension and a desktop IDE, like Visual Studio Code, you won't have to do it again. Whereas when you work with Codespaces, you'll have to do that every time you open up a new Codespace.
>
> **[3:05](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=185)** This desktop copilot also realizes when I hit the at sign right here that other extensions have been added to this project. So you can see, for example, the Readme API Copilot extension that I have added here, and I'll just ask it to tell me about this extension.
>
> **[3:29](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=209)** So although there's a bit of setup, GitHub Copilot is pretty easy to install and use in either your own IDE or in the cloud through Codespaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (11), [[Codespaces]] (5), [[GitHub Copilot]] (3), [[JavaScript]] (2), [[HTML]] (1)
> **Tools:** visual studio (5), github (4)
> **Prerequisites:** install (6), setup (1)
> **Env Vars:** ide (2), html (1), css (1), api (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)

#### [Using GitHub Extensions in code editors](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=0)** - The best place to expand what [[GitHub]] can do is the GitHub Marketplace. It lets you amplify what's possible when you interact with the platform. So for example, you can use different models to query popular LLMs. You can also find [[GitHub Copilot]] Extensions here, as well as other applications that you can interact with within GitHub. Now to get to the [[Microsoft Copilot|Copilot]] Extensions, there's a few of them right here at the top, but you can also click on this Copilot icon right here. Since Extensions are a pretty new product, the list right now is quite short, but I do expect that it's going to grow rapidly over time. So when you click on something like Docker, you'll see more information about the particular Extensions. To add this to Copilot, you simply hit the Add button at the top of the screen. Right now, Extensions are in limited public beta, so not all Extensions are available to every organization or group. Although a lot of Extensions right now are free, they may also carry some additional costs when you add them. So make sure you check down here at the bottom of the description of each Extension. You can also choose the location where you want to install this Extension. So if you have more than one account, you want to make sure that you choose the one that you want to add the Extension to. Let's go ahead and install this for free, and you'll be taken to this second page where you can review your order. This is where, if the Extension had a cost associated to it, you would see how much that costs per year right here, as well as where your billing information is.
>
> **[1:33](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=93)** I'm going to hit Complete order and begin installation, and in this particular case, I'll need to install and authorize docker to be able to do certain things in my repositories. I can choose All repositories right here, or Only certain repositories to give this application permission to do things in. Now, this is going to tell you the permissions that you're going to give this application. This one includes Read access to [[Metadata]], as well as Read and write access to checks, code, code spaces, issues, pull requests, and workflows. This also gives it Read access to Copilot Chat, which is definitely something that we need, so I'll hit Install & Authorize right here, and if you have two-factor authentication, you may need to authenticate this application as well. Now, some of these Extensions will require separate external accounts in order for them to work, so you'll have to go through the process of getting those third party accounts as well. GitHub does offer a simple verification batch, which you can see here as a blue check mark, and that means that they have verified that the publisher controls the domain and meets other requirements for this Extension. Just make sure you check with your system administrator to make sure you have the proper permissions to install GitHub Copilot Extensions, as well as any other accounts you need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Microsoft Copilot|Copilot]] (4), [[GitHub Copilot]] (2), [[Metadata]] (1)
> **CLI Commands:** make (4), docker (2), find (1)
> **Tools:** github (6)
> **Prerequisites:** install (5), make sure you have (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Using GitHub Copilot on GitHub.com](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=0)** - [[GitHub]] now allows you to use [[Microsoft Copilot|Copilot]] inside the regular [github.com](https://github.com) website, giving you access to full chatbot capabilities that can be used to ask questions about coding, but also about specific repos and even run Copilot extensions directly from the platform. To use it, you can find the [[GitHub Copilot]] icon on the website right here. And once you click on that, you can start asking questions. Now remember that Copilot is an add-on to your main GitHub subscription, so of course, you won't be able to see these features unless you have that activated. You can see that you can choose a specific repository to start asking questions about, but you can still ask questions that are more generic in nature. So I'm going to say, can you show me popular [[JavaScript]] frameworks? And it's going to answer generic questions like that, no problem. Let's try something else. Do you know what my most used node modules are? And as you can see, it doesn't necessarily answer everything. Certain types of questions are going to be more challenging for the chatbot. That's also where Copilot extensions are going to help in the future, extending what Copilot can do. You can give a little bit of feedback to the chat, so I'm going to say I don't really like that. And you can copy this information to the clipboard. That's going to copy only the current chat. You can also take a look at other conversations by going to this menu and choosing View all conversations.
>
> **[1:34](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=94)** That's going to show you conversations that you have done in the past, and it'll let you delete any conversations you don't need. You can also temporarily collapse a tool by hitting this collapse icon right here, and you'll notice that in addition to having the icon up here, you'll also have this down here. If I go to another page, like a list of my repositories, you can see that the Copilot chat remains right there. Now if I go to a specific project repo, you can see that I get the addition of this file menu right here, and I can click on that to ask questions about a specific file. So if I want to ask something about the README file, I can then type that in here. I'll ask it to tell me how to improve this README document. Notice that it's coming up with a plan and also responding after it figures out what it needs to do. Whenever it gives you code suggestions, it gives you a little code icon that you can use to copy that into your clipboard. This way of looking at files in a pop-up sidebar can be a bit constraining, but you can switch to something called immersive mode. If you come right here, you can see that we can take this conversation to immersive and it's going to take you to something that looks more akin to a normal chatbot. It has a sidebar with all your previous conversations right here. And from this three-dot menu, you can right now just delete items. There's some additional options or settings right here, and that takes you to your profile settings page where you can see some other options. I'm going to go back to Chat with Copilot
>
> **[3:07](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=187)** and I'll go back to immersive mode again, so I can see that full list. Now you can see an additional icon down here that lets you attach a specific repository to this question as well. Immersive mode allows you to switch to a different model. By default, you'll see that I'm using [[GPT-4|GPT-4o]], but I can use one of the brand-new [[ChatGPT]] models, like o1-preview or o1-mini. Those are considered the absolute best right now, especially when it comes to questions about coding. Now if you try to choose one of those, you'll see that it tells you that you have to start a new conversation to chat with this model. If you want to use o1-preview, you'll also want to take a look at this information window that tells you that this model is a lot better at reasoning, but a lot slower because of its inference, and it doesn't support certain features inside GitHub. To get out of immersive mode, you can just go to any other page and you'll get the dockable version of Copilot right here. If you click on All repositories, you can ask Copilot to focus on a specific repository and index it so that it understands that repository a little bit better. This would be great for something like documentation where a deeper understanding of that repository's context will be great for querying with the chatbot. And you can start the process by hitting this Index button. This will take a little bit of time to get going. This ability to have Copilot right on the browser is really powerful. So you can see that Copilot is a really good tool for getting your work done, whether you're working on your repos on [github.com](https://github.com)
>
> **[4:41](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=281)** or on one of the many IDEs of choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (11), [[GitHub]] (5), [[GitHub Copilot]] (1), [[JavaScript]] (1), [[GPT-4|Gpt-4o]] (1)
> **UI Navigation:** click on (3), go to (3), switch to (2)
> **Tools:** github (6)
> **Env Vars:** readme (2), gpt (1)
> **Cross-References:** go back to (2), coming up (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), node (1)
> **URLs:** [github.com](https://github.com) (2)


## Instructor

- [[Ray Villalobos]]

## Skills Covered

- GitHub

## Path Context

### In [[Career Essentials in GitHub Copilot Professional Certificate]]
← [[AI Pair Programming with GitHub Copilot]] | **2 of 4** | [[Refactoring with GitHub Copilot]] →

### In [[Master GitHub Copilot]]
← [[Exploring the Future of Development with GitHub Copilot Workspace]] | **3 of 8** | [[Delivering and Analyzing a Software Pilot- GitHub Copilot]] →

## Part of

- [[Career Essentials in GitHub Copilot Professional Certificate]]

## Appears In

- [[Career Essentials in GitHub Copilot Professional Certificate]]
- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)