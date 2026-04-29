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
created: 2026-04-29
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
  - Extending GitHub Copilot Chat
- [**1. Using Copilot Extensions**](#1-using-copilot-extensions) (4 videos)
  - Prerequisites for using GitHub Extensions
  - Installing extensions from the GitHub Marketplace
  - Using GitHub Extensions in code editors
  - Using GitHub Copilot on GitHub.com

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Extending GitHub Copilot Chat
> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=0)** - One of the standout products for developers in artificial intelligence has been GitHub Copilot.
>
> **[0:06](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=6)** In a recent survey, 76% of programmers reported using or planning to use AI tools in development.
>
> **[0:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=13)** However, so far, copilot has been limited to functionality GitHub has programmed internally, but now Copilot allows third parties to expand its capabilities through an extension system.
>
> **[0:25](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=25)** With Copilot extensions, you can build apps that take advantage of connections to other tools, models and data.
>
> **[0:32](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=32)** It gives extensions access to your chat history, a large language model that lets you ask more generic programming questions, and also the ability to execute third party functions for added capabilities.
>
> **[0:44](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=44)** Although it's a new product, you can already find tools from companies like Docker, LaunchDarkly, and of course you can also build your own.
>
> **[0:52](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=52)** So if you're enjoying the productivity behind GitHub Copilot, it's time to take it to the next level with extensions.
>
> **[0:59](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/extending-github-copilot-chat?u=76281980&t=59)** Let's do this.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **CLI Commands:** find (1), docker (1)
> **Code Keywords:** let (1), this. (1)
> **Speakers:** - one (1)


### 1. Using Copilot Extensions

> [↑ Back to Table of Contents](#table-of-contents)

#### Prerequisites for using GitHub Extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=0)** - Extensions are a part of GitHub's Copilot experience, but it's not something that is freely available to all GitHub accounts, so it's important that you understand the requirements you need in order to use them.
>
> **[0:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=13)** Copilot Chat, which is required to run Copilot Extensions, is available as an addition to your GitHub subscription with the Individual versions starting at $10 in the US, $19 a month for Copilot Business, and $39 a month for GitHub Enterprise clients.
>
> **[0:31](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=31)** There are discounts for annual subscriptions and there are free options for verified students, teachers, and open source maintainers.
>
> **[0:38](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=38)** You can start a GitHub Copilot subscription with a free trial as well.
>
> **[0:42](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=42)** Now this goes on top of your [github.com](https://github.com) subscription, which is free for individuals and organizations.
>
> **[0:49](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=49)** The Team subscription is at $4 per user per month, while the Team version is $4 per user per month, and the Enterprise version at $21 per user per month.
>
> **[0:59](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=59)** Copilot and Copilot Extensions are part of the features that GitHub offers as add-ons, which includes Copilot codespaces, large file storage, and advanced security.
>
> **[1:09](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=69)** The Enterprise version does offer some additional options like the ability for Copilot to understand organizational context and the option of adding models fine tuned to a company's code.
>
> **[1:20](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=80)** The Business and Enterprise versions also offer some extra user management and security features.
>
> **[1:27](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=87)** Once you have the proper accounts and tools, you can use Copilot in a few different ways.
>
> **[1:31](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=91)** You can use them with different coding editors, including Visual Studio, Visual Studio Code, Neovim, and JetBrains IDEs.
>
> **[1:38](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=98)** And now you can even use Copilot and Copilot Extensions directly in your browser.
>
> **[1:43](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=103)** You can see that as an additional icon when you're logged in and on a GitHub page.
>
> **[1:48](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=108)** Right now that's available as a limited beta, so if you don't see it in your account, then it should be available soon.
>
> **[1:54](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=114)** If you meet those requirements, you have the option of adding GitHub extensions to your platforms, which is done by visiting the GitHub marketplace, and then clicking on the Copilot section.
>
> **[2:06](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=126)** You can read more about GitHub extensions on the product feature page, which has links back to the marketplace, as well as instructions to build an extension right here.
>
> **[2:16](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=136)** By the way, don't forget to scroll down to the bottom of the page, which has links to quick start examples, tutorial videos, and much more.
>
> **[2:23](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=143)** Copilot Chat is already a powerful tool that helps developers speed up the workflow by extending chats with extensions.
>
> **[2:31](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/prerequisites-for-using-github-extensions?u=76281980&t=151)** GitHub is changing how useful AI coding can be.

> [!info]- Semantic Content
>
> **Tools:** github (12), visual studio (2), neovim (1)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** required to (1)
> **Speakers:** - extensions (1)

#### Installing extensions from the GitHub Marketplace
> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=0)** - Before we get into how extensions work, we need to make sure they're installed in our editors properly.
>
> **[0:05](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=5)** We'll take a look at the Visual Studio Code Editor, as well as Codespaces, which is a clone of Visual Studio Code in the cloud.
>
> **[0:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=13)** You can start a Codespace in any project.
>
> **[0:15](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=15)** Just go to one of your repositories and go to the code menu right here.
>
> **[0:21](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=21)** Make sure you're in the Codespaces tab, and then we'll create a Codespace for this project.
>
> **[0:25](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=25)** This is going to take a while to load, but once the Codespace is booted up, you'll want to make sure that you turn on the proper extensions.
>
> **[0:32](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=32)** You can go to the Extensions icon on the activity bar, and then we can do a search for Copilot.
>
> **[0:38](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=38)** You'll see a couple of different extensions that show up, including GitHub Copilot, as well as GitHub Copilot Chat.
>
> **[0:46](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=46)** If you hit install on the first one, it'll actually install both of them.
>
> **[0:50](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=50)** Once it's installed, you'll see an additional icon right here where you can access Copilot Chat.
>
> **[0:56](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=56)** Now you can start asking some questions.
>
> **[0:58](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=58)** I want to ask a question about this project, so I'm going to click right here, and you'll see that this is a simple HTML, CSS, and JavaScript project.
>
> **[1:07](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=67)** I'm going to select some code from the JavaScript file and then I'll open Copilot Chat and I'll ask what this code does.
>
> **[1:16](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=76)** What you get back here is pretty reasonable from Copilot Chat.
>
> **[1:19](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=79)** It understands that this code talks about the event listener as well as the type of code that I've written here.
>
> **[1:25](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=85)** Copilot is smart enough to understand the context of any open tabs and any selected text in your editor, but it can't understand the context of your entire repository by default.
>
> **[1:36](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=96)** So I can ask it, what's the code for this repo about?
>
> **[1:44](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=104)** It's trying to guess what's happening based on the code snippet and not the entire context of my repository, but there's a way around that by using one of Copilot's built-in extensions, it's the @workspace command.
>
> **[1:58](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=118)** Now I can ask the same question, and this time, the workspace extension is able to look at my entire repository and answer questions about it.
>
> **[2:08](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=128)** You can also call upon additional Copilot features by hitting Command + Shift + I on a Mac or Control + Shift + I on a PC, and then immediately start asking about your code.
>
> **[2:19](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=139)** You can type a slash to look at the additional commands that are available, and you can see the workspace command is right here.
>
> **[2:27](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=147)** You can also hit the at sign and see some of the additional built-in extensions that GitHub offers.
>
> **[2:33](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=153)** Let's take a look at how this would work in a normal Visual Studio Code application.
>
> **[2:37](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=157)** In the same way, I would need to go to the Extensions section and look for Copilot.
>
> **[2:43](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=163)** Make sure that I install the first Copilot extension, that should install both of them.
>
> **[2:48](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=168)** The difference between using Codespaces and something like Visual Studio Code is that once you install an extension and a desktop IDE, like Visual Studio Code, you won't have to do it again.
>
> **[2:59](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=179)** Whereas when you work with Codespaces, you'll have to do that every time you open up a new Codespace.
>
> **[3:05](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=185)** This desktop copilot also realizes when I hit the at sign right here that other extensions have been added to this project.
>
> **[3:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=193)** So you can see, for example, the Readme API Copilot extension that I have added here, and I'll just ask it to tell me about this extension.
>
> **[3:29](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/installing-extensions-from-the-github-marketplace?u=76281980&t=209)** So although there's a bit of setup, GitHub Copilot is pretty easy to install and use in either your own IDE or in the cloud through Codespaces.

> [!info]- Semantic Content
>
> **Tools:** visual studio (5), github (4)
> **Prerequisites:** install (6), setup (1)
> **Env Vars:** ide (2), html (1), css (1), api (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (4)
> **Code Keywords:** default. (1), let (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)

#### Using GitHub Extensions in code editors
> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=0)** - The best place to expand what GitHub can do is the GitHub Marketplace.
>
> **[0:04](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=4)** It lets you amplify what's possible when you interact with the platform.
>
> **[0:09](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=9)** So for example, you can use different models to query popular LLMs.
>
> **[0:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=13)** You can also find GitHub Copilot Extensions here, as well as other applications that you can interact with within GitHub.
>
> **[0:20](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=20)** Now to get to the Copilot Extensions, there's a few of them right here at the top, but you can also click on this Copilot icon right here.
>
> **[0:29](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=29)** Since Extensions are a pretty new product, the list right now is quite short, but I do expect that it's going to grow rapidly over time.
>
> **[0:37](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=37)** So when you click on something like Docker, you'll see more information about the particular Extensions.
>
> **[0:43](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=43)** To add this to Copilot, you simply hit the Add button at the top of the screen.
>
> **[0:48](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=48)** Right now, Extensions are in limited public beta, so not all Extensions are available to every organization or group.
>
> **[0:56](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=56)** Although a lot of Extensions right now are free, they may also carry some additional costs when you add them.
>
> **[1:03](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=63)** So make sure you check down here at the bottom of the description of each Extension.
>
> **[1:07](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=67)** You can also choose the location where you want to install this Extension.
>
> **[1:11](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=71)** So if you have more than one account, you want to make sure that you choose the one that you want to add the Extension to.
>
> **[1:17](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=77)** Let's go ahead and install this for free, and you'll be taken to this second page where you can review your order.
>
> **[1:24](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=84)** This is where, if the Extension had a cost associated to it, you would see how much that costs per year right here, as well as where your billing information is.
>
> **[1:33](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=93)** I'm going to hit Complete order and begin installation, and in this particular case, I'll need to install and authorize docker to be able to do certain things in my repositories.
>
> **[1:44](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=104)** I can choose All repositories right here, or Only certain repositories to give this application permission to do things in.
>
> **[1:51](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=111)** Now, this is going to tell you the permissions that you're going to give this application.
>
> **[1:56](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=116)** This one includes Read access to metadata, as well as Read and write access to checks, code, code spaces, issues, pull requests, and workflows.
>
> **[2:04](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=124)** This also gives it Read access to Copilot Chat, which is definitely something that we need, so I'll hit Install & Authorize right here, and if you have two-factor authentication, you may need to authenticate this application as well.
>
> **[2:16](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=136)** Now, some of these Extensions will require separate external accounts in order for them to work, so you'll have to go through the process of getting those third party accounts as well.
>
> **[2:26](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=146)** GitHub does offer a simple verification batch, which you can see here as a blue check mark, and that means that they have verified that the publisher controls the domain and meets other requirements for this Extension.
>
> **[2:39](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-extensions-in-code-editors?u=76281980&t=159)** Just make sure you check with your system administrator to make sure you have the proper permissions to install GitHub Copilot Extensions, as well as any other accounts you need.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), docker (2), find (1)
> **Tools:** github (6)
> **Prerequisites:** install (5), make sure you have (1)
> **Code Keywords:** public (1), let (1), case, (1), require (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### Using GitHub Copilot on GitHub.com
> [LinkedIn Learning](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=0)** - GitHub now allows you to use Copilot inside the regular [github.com](https://github.com) website, giving you access to full chatbot capabilities that can be used to ask questions about coding, but also about specific repos and even run Copilot extensions directly from the platform.
>
> **[0:17](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=17)** To use it, you can find the GitHub Copilot icon on the website right here.
>
> **[0:23](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=23)** And once you click on that, you can start asking questions.
>
> **[0:27](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=27)** Now remember that Copilot is an add-on to your main GitHub subscription, so of course, you won't be able to see these features unless you have that activated.
>
> **[0:35](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=35)** You can see that you can choose a specific repository to start asking questions about, but you can still ask questions that are more generic in nature.
>
> **[0:44](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=44)** So I'm going to say, can you show me popular JavaScript frameworks?
>
> **[0:51](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=51)** And it's going to answer generic questions like that, no problem.
>
> **[0:55](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=55)** Let's try something else.
>
> **[0:57](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=57)** Do you know what my most used node modules are?
>
> **[1:02](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=62)** And as you can see, it doesn't necessarily answer everything.
>
> **[1:06](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=66)** Certain types of questions are going to be more challenging for the chatbot.
>
> **[1:10](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=70)** That's also where Copilot extensions are going to help in the future, extending what Copilot can do.
>
> **[1:17](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=77)** You can give a little bit of feedback to the chat, so I'm going to say I don't really like that.
>
> **[1:22](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=82)** And you can copy this information to the clipboard.
>
> **[1:25](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=85)** That's going to copy only the current chat.
>
> **[1:27](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=87)** You can also take a look at other conversations by going to this menu and choosing View all conversations.
>
> **[1:34](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=94)** That's going to show you conversations that you have done in the past, and it'll let you delete any conversations you don't need.
>
> **[1:41](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=101)** You can also temporarily collapse a tool by hitting this collapse icon right here, and you'll notice that in addition to having the icon up here, you'll also have this down here.
>
> **[1:51](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=111)** If I go to another page, like a list of my repositories, you can see that the Copilot chat remains right there.
>
> **[1:57](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=117)** Now if I go to a specific project repo, you can see that I get the addition of this file menu right here, and I can click on that to ask questions about a specific file.
>
> **[2:08](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=128)** So if I want to ask something about the README file, I can then type that in here.
>
> **[2:13](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=133)** I'll ask it to tell me how to improve this README document.
>
> **[2:16](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=136)** Notice that it's coming up with a plan and also responding after it figures out what it needs to do.
>
> **[2:23](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=143)** Whenever it gives you code suggestions, it gives you a little code icon that you can use to copy that into your clipboard.
>
> **[2:30](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=150)** This way of looking at files in a pop-up sidebar can be a bit constraining, but you can switch to something called immersive mode.
>
> **[2:37](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=157)** If you come right here, you can see that we can take this conversation to immersive and it's going to take you to something that looks more akin to a normal chatbot.
>
> **[2:47](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=167)** It has a sidebar with all your previous conversations right here.
>
> **[2:51](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=171)** And from this three-dot menu, you can right now just delete items.
>
> **[2:55](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=175)** There's some additional options or settings right here, and that takes you to your profile settings page where you can see some other options.
>
> **[3:04](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=184)** I'm going to go back to Chat with Copilot and I'll go back to immersive mode again, so I can see that full list.
>
> **[3:11](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=191)** Now you can see an additional icon down here that lets you attach a specific repository to this question as well.
>
> **[3:18](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=198)** Immersive mode allows you to switch to a different model.
>
> **[3:21](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=201)** By default, you'll see that I'm using GPT-4o, but I can use one of the brand-new ChatGPT models, like o1-preview or o1-mini.
>
> **[3:31](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=211)** Those are considered the absolute best right now, especially when it comes to questions about coding.
>
> **[3:37](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=217)** Now if you try to choose one of those, you'll see that it tells you that you have to start a new conversation to chat with this model.
>
> **[3:44](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=224)** If you want to use o1-preview, you'll also want to take a look at this information window that tells you that this model is a lot better at reasoning, but a lot slower because of its inference, and it doesn't support certain features inside GitHub.
>
> **[3:59](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=239)** To get out of immersive mode, you can just go to any other page and you'll get the dockable version of Copilot right here.
>
> **[4:06](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=246)** If you click on All repositories, you can ask Copilot to focus on a specific repository and index it so that it understands that repository a little bit better.
>
> **[4:16](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=256)** This would be great for something like documentation where a deeper understanding of that repository's context will be great for querying with the chatbot.
>
> **[4:23](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=263)** And you can start the process by hitting this Index button.
>
> **[4:27](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=267)** This will take a little bit of time to get going.
>
> **[4:29](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=269)** This ability to have Copilot right on the browser is really powerful.
>
> **[4:33](https://www.linkedin.com/learning/supercharge-the-development-process-with-github-extensions-for-copilot-chat/using-github-copilot-on-github-com?u=76281980&t=273)** So you can see that Copilot is a really good tool for getting your work done, whether you're working on your repos on [github.com](https://github.com) or on one of the many IDEs of choice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (2), switch (2), else. (1), default, (1)
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