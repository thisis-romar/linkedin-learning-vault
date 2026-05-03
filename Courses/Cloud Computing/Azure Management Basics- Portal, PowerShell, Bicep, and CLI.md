---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-management-basics-portal-powershell-bicep-and-cli
url: "https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli"
duration_minutes: 113
duration: 1h 53m
level: Beginner
updated: 5/13/2024
learners: 10239
skills:
  - Cloud Administration
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHYI6-4PfLxGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715047190113?e=2147483647&amp;v=beta&amp;t=rMlsp5dUFPuByh84E9GwhtkDU7TRpo4WowP0UJomMcY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Azure Administration for Beginners- Management Tools, Services, and Security]]'
prev_courses:
  - '[[Azure Cloud Fundamentals- Explore Cloud Services]]'
next_courses:
  - '[[Microsoft Entra ID Fundamentals]]'
path_nav: '[{"path":"Azure Administration for Beginners- Management Tools, Services, and Security","position":3,"total":5,"prev":"Azure Cloud Fundamentals- Explore Cloud Services","next":"Microsoft Entra ID Fundamentals"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/cloud-administration
  - skill/microsoft-azure
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20Management%20Basics-%20Portal%2C%20PowerShell%2C%20Bicep%2C%20and%20CLI.md)

![Azure Management Basics: Portal, PowerShell, Bicep, and CLI](https://media.licdn.com/dms/image/v2/D560DAQHYI6-4PfLxGQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715047190113?e=2147483647&amp;v=beta&amp;t=rMlsp5dUFPuByh84E9GwhtkDU7TRpo4WowP0UJomMcY)

# Azure Management Basics: Portal, PowerShell, Bicep, and CLI

> If you are looking for hands-on guidance to explore Azure management tools or are beginning your preparations for the AZ-900 Azure Fundamentals certification exam, this course can help. Experienced IT trainer and elearning content creator Gary Grudzinskas presents an introduction to the Azure portal, the Azure CLI, PowerShell, Bicep, and JSON templates. Find out how each tool works and step throug

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli) | 1h 53m | Beginner | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Get started with Azure tools](#get-started-with-azure-tools)
- [**1. Getting Started with the Azure Portal**](#1-getting-started-with-the-azure-portal) (6 videos)
  - [Understand the Azure portal](#understand-the-azure-portal)
  - [The layout of Microsoft Azure portal](#the-layout-of-microsoft-azure-portal)
  - [Create and use a dashboard in Azure](#create-and-use-a-dashboard-in-azure)
  - [Create and deploy a resource in the Azure portal](#create-and-deploy-a-resource-in-the-azure-portal)
  - [Work with resources in the Azure portal](#work-with-resources-in-the-azure-portal)
  - [Use the Azure remote app](#use-the-azure-remote-app)
- [**2. Getting Started with the Azure CLI**](#2-getting-started-with-the-azure-cli) (4 videos)
  - [Understand the Azure CLI](#understand-the-azure-cli)
  - [Get help with the Azure CLI](#get-help-with-the-azure-cli)
  - [Deploy resources with the Azure CLI](#deploy-resources-with-the-azure-cli)
  - [Use Azure CLI interactive mode](#use-azure-cli-interactive-mode)
- [**3. Getting Started with Azure PowerShell**](#3-getting-started-with-azure-powershell) (5 videos)
  - [Understand Azure PowerShell](#understand-azure-powershell)
  - [Use Azure PowerShell](#use-azure-powershell)
  - [Get help in Azure PowerShell](#get-help-in-azure-powershell)
  - [Deploy a resource in Azure PowerShell](#deploy-a-resource-in-azure-powershell)
  - [Configure resources in Azure PowerShell](#configure-resources-in-azure-powershell)
- [**4. Getting Started with JSON Templates**](#4-getting-started-with-json-templates) (4 videos)
  - [Understand JSON templates](#understand-json-templates)
  - [Find the appropriate JSON template](#find-the-appropriate-json-template)
  - [Deploy a resource with a JSON template](#deploy-a-resource-with-a-json-template)
  - [Redeploy a resource with a JSON template](#redeploy-a-resource-with-a-json-template)
- [**5. Getting Started with Bicep**](#5-getting-started-with-bicep) (3 videos)
  - [Understand Azure Bicep](#understand-azure-bicep)
  - [Introduction to infrastructure as code](#introduction-to-infrastructure-as-code)
  - [Deploy a resource with Azure Bicep](#deploy-a-resource-with-azure-bicep)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started with Azure tools](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=0)** - Do you want to do more in [[Microsoft Azure]], this vast environment with thousands of wonderful technologies that you can implement?
>
> **[0:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=9)** Well, you got to know how to use the tools in order to do this, and that is why I created this course.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=16)** To get you up and running on each tool, the portal, [[Microsoft Azure|Azure]] [[CLI]], [[Powershell]], ARM templates, and the Bicep language.
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=26)** You won't need expertise in Microsoft Azure for this course.
>
> **[0:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=30)** If you have a desire to implement cloud technology, I'll show you how to do it and the tools you do it with.
>
> **[0:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=38)** I'm Gary Grudzinskas.
>
> **[0:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=39)** I've been working with Azure since it first appeared on the landscape and it just keeps getting more impressive.
>
> **[0:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-started-with-azure-tools?u=76281980&t=47)** So let me show you your Azure toolbox so you can implement this amazing cloud technology exactly how you want to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Microsoft Azure]] (2), [[CLI]] (1), [[Powershell]] (1)
> **Env Vars:** cli (1), arm (1)
> **Tools:** powershell (1)
> **Speakers:** - do (1)


### 1. Getting Started with the Azure Portal

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the Azure portal](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=0)** - [Instructor] We're going to introduce you to the [[Microsoft Azure|Azure]] Portal, and it's important to know when is the right time to use the portal as opposed to some of the other tools that we're going to go over.
>
> **[0:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=11)** The first reason is an overview.
>
> **[0:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=14)** The portal gives you a nice snapshot of what's going on in your environment; that's hard to do with the command line unless you know specifically what you're looking for.
>
> **[0:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=25)** But with administration, you know that sometimes you have something happen and you're not quite sure of where it happened and even if it happened.
>
> **[0:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=38)** With the portal, if you set it up right, you can find out all that information.
>
> **[0:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=43)** The second is you only have a few tasks to perform.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=48)** If you have multiple [[Virtual Machines]], web apps, et cetera, to install, it's not going to be easy through the portal, but when you only have a few things, it works great.
>
> **[1:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=60)** The next reason: you want to see the options that are available to you.
>
> **[1:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=65)** You will be learning new things if you're working with [[Microsoft Azure]], undoubtedly, and you're not always going to know just what to do with a particular resource.
>
> **[1:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=76)** Well, with the portal, you can bring it up, you can take a look at it, you can examine all the different options that you have for that particular resource, and just by inspection, just by looking at it, you can educate yourself on what options are available to you.
>
> **[1:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=95)** You're going to be having situations where you have a new feature and that new feature, you're not quite sure how it's implemented; you're not quite sure what input you want to give and parameters you want to give to that particular resource object.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=111)** Well, if you're working with something new, the portal is great because it gives you an explanation of what you're doing.
>
> **[1:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=119)** So that is when it's best to use the portal.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=122)** You want an overview. You only have a few things to do.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=125)** You want to see your options, and you're working with the new feature.
>
> **[2:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-portal?u=76281980&t=128)** Up next, we're going to take a look inside of the portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Virtual Machines]] (1), [[Microsoft Azure]] (1)
> **Tools:** azure portal (1), command line (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Best Practices:** it's best to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [The layout of Microsoft Azure portal](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to look at the portal.
>
> **[0:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=2)** We'll start off by locating the portal, where it is on the internet and how you get in there, and then we'll identify the homepage.
>
> **[0:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=11)** The homepage is where you land when you go into [[Microsoft Azure]].
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=16)** The homepage is divided into sections.
>
> **[0:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=18)** We'll take a look at each section so you're familiar with where to go to do what you want.
>
> **[0:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=24)** The whole idea here is to make you comfortable with the portal.
>
> **[0:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=28)** So let's go in there and take a look.
>
> **[0:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=31)** You can use any browser.
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=33)** We're going to use [[Google]] Chrome for this, but you can use whatever browser you would like.
>
> **[0:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=37)** Just make sure it's the latest version to assure that the functionality is all there.
>
> **[0:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=44)** I'm going to come up here and simply type in portal.[azure.com](https://azure.com).
>
> **[0:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=52)** I'm going to hit Enter and it comes in here automatically for me, and that is because I have logged in here before.
>
> **[1:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=60)** If you haven't logged in before, you'll need your credentials to do that.
>
> **[1:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=65)** Now, if you don't have an account, you can get a preview account just by signing up, and that should be good enough for the course that we have.
>
> **[1:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=73)** Keep in mind as we go through this, we're going to go into more detail as we go along about these different features that are inside of here.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=82)** I'm going to start at the top and work from left to right.
>
> **[1:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=86)** So right up here on the top, we have this little, what's called the hamburger menu, and this is a portal menu.
>
> **[1:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=94)** Going down here, we have the homepage, and this is going to be important, the homepage, because if you get lost in Microsoft Azure, you can come right back here to home.
>
> **[1:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=106)** The dashboard.
>
> **[1:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=108)** [[Dashboards]] are something where you can customize the look and feel and content of your Microsoft Azure.
>
> **[1:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=116)** And then we have all services.
>
> **[1:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=117)** Down from there, we have the favorites.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=120)** These are the favorites that pretty much everybody has.
>
> **[2:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=123)** It's the default favorites.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=125)** However, you might want to take some of these favorites out, add different favorites along there.
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=131)** So that's a look at what's called the portal menu, which is on the left-hand side.
>
> **[2:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=137)** We'll go ahead and go off of that.
>
> **[2:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=139)** This right here, Microsoft Azure, you can click on that anytime to come back to the home menu, which moves us to search.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=147)** Searching is one of the most important abilities that you have with the portal because there are a lot of services and a lot of different resources you can have in Microsoft Azure.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=161)** So this is key to finding stuff in Microsoft Azure.
>
> **[2:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=166)** Moving to the right, we have something that's called the Cloud Shell, and the Cloud Shell allows you with your credentials and your subscription and your proper [[Microsoft Entra ID|Entra ID]] focus right in onto your account.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=181)** So if you have command lines that you want to do with [[Powershell]] or [[Microsoft Azure|Azure]] [[CLI]], you can do this through the Cloud Shell.
>
> **[3:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=189)** And then we have notifications.
>
> **[3:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=190)** I'll go ahead and click on that.
>
> **[3:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=192)** As you're doing things in Microsoft Azure, what's going to happen is you'll get notifications about this process completed, this process had trouble, and any kind of new stuff for Microsoft Azure is going to be here in the notifications.
>
> **[3:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=209)** And then we go to settings, which has some different things to customize this with.
>
> **[3:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=214)** And then finally, the help.
>
> **[3:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=216)** I want to emphasize in this course how important help is.
>
> **[3:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=221)** As you're going through Microsoft Azure, as long as you can get access to help with the different tools that we're going to cover, it's going to help you not only learn Microsoft Azure, but be able to accomplish what you want to accomplish within this interface.
>
> **[3:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=237)** And then we have feedback.
>
> **[3:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=239)** We can give a smiley face, we can give a frowny face as feedback to [[Microsoft]] so they can adjust according to what the mass of people say.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=251)** So it's a good idea to give feedback.
>
> **[4:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=253)** And then we have us, that's the instructor account, and whatever account you have up here.
>
> **[4:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=259)** Let me say this about the account.
>
> **[4:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=262)** The account that you log in, according to whatever credentials and permissions that that account has, is going to dictate what this interface looks like.
>
> **[4:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=272)** So we'll go ahead and close this and take a look at the main pane, the work area.
>
> **[4:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=278)** You can see Azure services, the resources that we have, any navigation through the interface that's important to us, different tools, and then finally, useful links at the bottom here.
>
> **[4:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/the-layout-of-microsoft-azure-portal?u=76281980&t=292)** So that's a look at the portal, how you get into the portal, the major parts of the portal, and importantly, how to get help in the portal in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (11), [[Microsoft Azure|Azure]] (3), [[Google]] (1), [[Dashboards]] (1), [[Microsoft Entra ID|Entra id]] (1)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** make (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Env Vars:** cli (1)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Create and use a dashboard in Azure](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=0)** - In this demonstration, we're going to show you how to customize your [[Microsoft Azure]] to fit your needs, to make you comfortable within the portal.
>
> **[0:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=11)** So we'll begin by looking at the favorites.
>
> **[0:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=13)** We're going to build a dashboard.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=15)** We're going to change the look and fill of Microsoft Azure and the whole purpose of this is to make [[Microsoft Azure|Azure]] work for you.
>
> **[0:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=24)** So let's go into the portal.
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=26)** We're in the portal now and what we're going to do is come up here to the portal menu and I want to go down and show a few things, one is favorites.
>
> **[0:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=37)** Now there are a lot of Microsoft Azure features, there's a lot of services, there's a lot of resources.
>
> **[0:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=44)** So it's a little tough to find what you're looking for sometimes.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=48)** And if you have the main things that you use within favorites, that's going to help you out quite a bit and getting rid of things inside of here that you don't use, which should be the majority of [[Microsoft]] resources, then go ahead and eliminate those, let me show you how to do that.
>
> **[1:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=66)** Let's say [[SQL]] [[Databases]], you're just not interested in something like that.
>
> **[1:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=70)** You can come through here, see the little star, delete it, and what that's going to do is that's going to take it off.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=78)** And you probably saw that, take it off your favorites menu.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=82)** So that's one way you can customize this to what you need inside of Microsoft Azure.
>
> **[1:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=88)** Now, coming down here, we're going to go click on dashboard.
>
> **[1:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=91)** Let me explain dashboard and the easiest way to understand this is think about the dashboard in your car.
>
> **[1:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=98)** There's two major things that it does, it tells you information about your car, how fast you're going, how much gas you have and it gives you functionality as well.
>
> **[1:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=108)** Turning on the lights, turning on the radio, putting it in drive.
>
> **[1:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=112)** So that view of the dashboard helps you understand what we're trying to do here, you customize it just to the tasks and functionality that you need.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=124)** So we're going to create a new one and we do that by clicking here where it says create.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=129)** Under Create you can see as I scroll down, you have some built-in [[Dashboards]] that you can just release that you have here or you can customize it.
>
> **[2:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=143)** And what we're going to do is we're going to customize it and this is what it looks like.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=147)** It has no functionality right now, what you do is you add tiles in order to get that functionality.
>
> **[2:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=152)** So let's go over on this side, the right hand pane and a metrics chart.
>
> **[2:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=158)** A lot of what you're going to do with the dashboard is just come in spot check, just come in and check that everything is okay.
>
> **[2:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=166)** You can do that through the metrics, the resource groups, resource groups in Microsoft Azure.
>
> **[2:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=171)** I'm going to go ahead and click on that and click on add are the main storage place, the main containers that you have within Microsoft Azure, everything needs a resource group.
>
> **[3:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=185)** So we'll just put the resource group in here and you can see that I can arrange these tiles pretty much any way I want.
>
> **[3:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=194)** Now let's go over to all resources and all resources.
>
> **[3:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=199)** I'm going to click on add.
>
> **[3:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=200)** Those are all the resources that we have on this particular account.
>
> **[3:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=206)** We don't have very many of them, just one for the cloud shell.
>
> **[3:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=210)** So we don't have a lot of functionality with this right now.
>
> **[3:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=213)** The idea is this, that this can be customized to tasks and resources that you're dealing with.
>
> **[3:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=221)** And here's the thing, you can save this and you can export it and import it somewhere else.
>
> **[3:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=226)** So literally you give people the functionality to do their job or do their task through a customized dashboard.
>
> **[3:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=234)** Now what else can you put in here?
>
> **[3:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=237)** I'm going to scroll down so you can see that.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=238)** We can put in the clock so you can find out what time it is when you come in.
>
> **[4:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=242)** We have a markdown, which gives you examples.
>
> **[4:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=246)** You can show basic instructions, you can show how to do things right within the dashboard, the users and groups, user sign in to find out who's been in, who's been out, and several other things as you scroll down here to take your dashboard and make it exactly the way you want it, I'm going to come up here and say Save.
>
> **[4:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=269)** And we could call this dashboard anything we want, this is just My Dashboard two.
>
> **[4:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=274)** The name of it should reflect something of what the task is behind this dashboard and that's it.
>
> **[4:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=281)** See, you can export it and then import it somewhere else and that will provide the functionality of the dashboard.
>
> **[4:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=288)** Okay, last thing to show you.
>
> **[4:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=290)** We're going to come up here to settings and under settings we have the appearance and startup views.
>
> **[4:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=296)** Now I always like the contrast, I like the black background, the high contrast, this helps me out.
>
> **[5:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=305)** So what you prefer is what's important here.
>
> **[5:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=309)** If you prefer a dark background, high contrast, you like things white, you like things, the original, you should have this to what you're comfortable with.
>
> **[5:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=319)** Now what I'm going to do is I'm going to go back, I'm going to say, this is none for the high contrast theme and click on apply.
>
> **[5:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=330)** I want this to be the default settings so nobody comes into the class and thinks they might have done something wrong, because my screen is dark and their screen doesn't have that.
>
> **[5:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=342)** So that is a look at how to customize the Azure portal.
>
> **[5:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=346)** The important thing is how you want this, is the way you make it.
>
> **[5:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-use-a-dashboard-in-azure?u=76281980&t=353)** To customize the Azure portal will make you more functional when you're using Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (7), [[Microsoft Azure|Azure]] (3), [[Microsoft]] (1), [[SQL]] (1), [[Databases]] (1)
> **CLI Commands:** make (5), find (3)
> **UI Navigation:** click on (5), scroll down (3)
> **Tools:** azure portal (2)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Create and deploy a resource in the Azure portal](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=0)** - [Narrator] In this demonstration, now that we have everything set up, we're going to create a resource.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=5)** In this case, it's going to be a Virtual Machine, but the important thing is knowing the resource creation process, no matter what you are creating, it's going to pretty much be the same.
>
> **[0:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=17)** I'll show you a few examples, but we're going to go through the entire process for creating a Virtual Machine.
>
> **[0:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=23)** The reason we do this is so that you can now know how to use the portal in order to do what you would like to do in [[Microsoft Azure]].
>
> **[0:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=32)** Let's go to the portal.
>
> **[0:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=34)** From the portal, there's at least three ways to do the same thing.
>
> **[0:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=40)** The options that we have is you can come up here to create a resource and you could just go over here to [[Virtual Machines]] to create a Virtual Machine.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=48)** I'd like to take you through the process.
>
> **[0:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=50)** So here we are, create a resource, and this brings up the create a resource menu.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=55)** It's just what it sounds like.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=57)** This takes you into the menus where you create a resource.
>
> **[1:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=61)** Now, what's important here isn't necessarily creating a Virtual Machine and the process of that, it's the process of creating the resource.
>
> **[1:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=69)** No matter what resource we create, the interface is going to be the same.
>
> **[1:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=74)** So let's go ahead with Virtual Machine.
>
> **[1:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=76)** Create Virtual Machine by clicking Create, and this brings us to the Create a Virtual Machine page, just as it sounds.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=85)** Let's go down to resource group.
>
> **[1:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=86)** Under Resource group, we have to create a new one.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=89)** I'm going to call this something simple, portalrg, for Portal Resource Group.
>
> **[1:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=96)** Here's the thing about resource groups.
>
> **[1:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=98)** Every resource in Microsoft Azure has to be associated with a resource group.
>
> **[1:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=105)** So naturally for creating a Virtual Machine, it's going to hit us up for a resource group.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=111)** Now, if a resource group has resources and services within it, if you delete that resource group, it deletes all those services, and that is a convenient way for cleaning things up that we'll demonstrate as we go along.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=127)** The Virtual Machine name.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=129)** I'm going to just call this something simple, portalvm, for Portal Virtual Machine.
>
> **[2:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=136)** That's where we're creating it.
>
> **[2:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=138)** Click outside the box, make sure it takes it.
>
> **[2:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=141)** Now I want to show you this.
>
> **[2:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=142)** If you hoover over one of these information icons, it will guide you through the input process.
>
> **[2:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=150)** Undoubtedly, you're going to come in here for some kind of resource.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=153)** You're going to have a line you're not quite sure what they're looking for.
>
> **[2:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=156)** Well, you can find out by hoovering over one of these information icons.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=162)** I'm going to scroll down. We have a lot of input here.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=165)** However, we're going to take the defaults on nearly everything.
>
> **[2:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=169)** We have to have a username and password, that username and password for the account.
>
> **[2:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=175)** When you think about it, if you have a Virtual Machine, you have to have an account of there in order to give it functionality.
>
> **[3:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=182)** So I'm going to call this something simple. How about Gary G?
>
> **[3:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=185)** And then the password.
>
> **[3:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=187)** Make sure you remember the password that you typed in so you can confirm that password.
>
> **[3:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=192)** Let me put this in.
>
> **[3:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=195)** And after confirming the password, we're going to say Next, disks.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=201)** And notice up here, as we're going along through this process, it's going to iterate through all these different things that you need for a resource group.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=211)** We're going to take the defaults on all of these and simply say, next, networking.
>
> **[3:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=217)** If you had customizability for your Virtual Machine and the network, this is where you do it, but we're going to take the defaults here, click on next.
>
> **[3:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=225)** If you want to monitor it, this is where you do that.
>
> **[3:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=228)** And then advanced. And finally, tags before the review.
>
> **[3:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=233)** A tag is a way of keeping track of the resources that you have in Microsoft Azure.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=238)** As you go along, you're going to be impressed with how many resources that you've created and somewhat sub resources, if you will, of like a Virtual Machine.
>
> **[4:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=248)** Well, you have the resource of a disk, you have the resource of a network, et cetera.
>
> **[4:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=252)** Tags allow you to go through there and search and label different resources according to what you want.
>
> **[4:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=259)** It might be a department, it might be where that particular resource is build, et cetera, where you can put that in here.
>
> **[4:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=266)** Now I'm going to say review and create.
>
> **[4:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=269)** And here's the nice thing about this is it automatically goes through there and lets you know if there's going to be an error before that error happens.
>
> **[4:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=278)** And if you put in everything right, you're going to get this, validation passed.
>
> **[4:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=284)** Now all we have to do is create and as is this creating, it's going to create the disk, it's going to create the network, it's going to create the Virtual Machine with the defaults that we put inside of there, and then we have that Virtual Machine.
>
> **[5:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=302)** Now, compare this to say, building a physical machine yourself.
>
> **[5:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=308)** It takes a lot of time. This doesn't take much time.
>
> **[5:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=312)** We're going to fast forward to this being done, and it's done.
>
> **[5:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=318)** You can see up here, deployment succeeded.
>
> **[5:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=320)** We should have a notification, deployment succeeded, and you can go here right to the resource by clicking on here.
>
> **[5:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=329)** And there is our portalvm.
>
> **[5:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=332)** Before I let you go on this, I'm going to go back to home, create a resource, and what we're going to do is web app, just to say create.
>
> **[5:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=340)** I want to show you this.
>
> **[5:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=341)** Notice that this has all changed up here.
>
> **[5:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=344)** A few of 'em are the same, but the process of creating say a web app is the same as creating a Virtual Machine through this interface.
>
> **[5:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/create-and-deploy-a-resource-in-the-azure-portal?u=76281980&t=353)** So that's how you create a resource in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (4), [[Virtual Machines]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** compare this to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Work with resources in the Azure portal](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to find out how to use the Portal to do things to the Resources themselves.
>
> **[0:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=8)** So we'll review the Resource Page, we'll examine all the different options that you have in this particular case for a virtual machine.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=16)** We're going to do something, we're going to apply a tag to portalvm and then when we're all done, we're going to delete the Resource Group.
>
> **[0:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=25)** Now we do this so you don't get charged for that virtual machine and other resources that you have in [[Microsoft Azure]].
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=33)** You delete the Resource Group, it deletes everything within it.
>
> **[0:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=37)** Just part of housekeeping for this course.
>
> **[0:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=39)** The reason we do this, I want you to know how to work with resources inside of the Portal.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=45)** So let's go to the Portal.
>
> **[0:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=47)** You'll notice a few changes here.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=49)** Mostly, look at this, our resources are in here now.
>
> **[0:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=54)** So the nice thing is the most recent thing we worked on is right available on the Home Screen.
>
> **[1:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=61)** We're going to go to our Portal Virtual Machine.
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=64)** And here it is, this is how you work with resources inside of the portal.
>
> **[1:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=70)** Notice on the left hand pane, we start off with the Overview.
>
> **[1:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=74)** And this just gives you a snapshot of what's going on with that particular virtual machine.
>
> **[1:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=79)** And then we have the Activity Log.
>
> **[1:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=81)** The Activity Log, not a lot in it now, because we just created this, but the Activity Log is going to be a good place for you to go to find out what all has happened and who did what to this particular resource, in this case, a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=97)** Access Control, with Microsoft Azure, you have a user database formerly called, [[Microsoft Entra ID|Azure Active Directory]], now [[Microsoft Entra ID|Entra ID]].
>
> **[1:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=109)** But the idea is the same, that you can give access and rights to resources to certain individual accounts.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=120)** Going down, we have Tags.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=122)** And as promised, we're going to apply a Tag to this.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=125)** It's simply a way of keeping track of everything you have.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=129)** I'm going to start here and just say, Department, right, DEPT.
>
> **[2:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=133)** And our Department, keep in mind, the name, not case sensitive, the value, case sensitive.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=140)** So we'll call this simply Research.
>
> **[2:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=146)** Come down here, apply the Tag.
>
> **[2:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=149)** And that is how you do things to resources in Microsoft Azure.
>
> **[2:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=155)** You simply fill out the blanks.
>
> **[2:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=158)** Going down, we have Diagnose and Solve Problems.
>
> **[2:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=160)** We can connect to this server through this interface as well.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=165)** We have the [[Windows]] Admin Center for that particular virtual machine because it's Windows.
>
> **[2:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=172)** And then coming down here, we have the Network Settings, Load Balancing, Network Manager, Disks, and all the different things that go on this particular machine.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=181)** I'm going to click on one of these and show you something.
>
> **[3:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=184)** Let's go down to Disks, click on Disks.
>
> **[3:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=188)** And it gives us the information about the Disks on this machine.
>
> **[3:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=194)** So if we wanted to change that environment, we can do it through this interface.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=201)** And then scrolling down, we have Availability Sets.
>
> **[3:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=204)** If we want to change that, we have Security Settings.
>
> **[3:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=207)** Backup, let me just click on Backup here.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=211)** And as you know, backing up is one of the most important things you do, in particular for your servers.
>
> **[3:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=218)** Well, [[Microsoft Azure|Azure]] has this whole built-in mechanism for Backing Up, for Creating Restore Points for Disaster Recovery, all through this different interface here.
>
> **[3:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=230)** The Operations, we have a Run Command that we can run on this particular virtual machine.
>
> **[3:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=236)** We can tell it to Auto Shut Down, et cetera.
>
> **[3:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=239)** The important part of viewing this is that this interface happens to be for a virtual machine right now.
>
> **[4:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=248)** However, anything you do, any resource, any service in Microsoft Azure, is pretty much the same interface that you use in order to go change that.
>
> **[4:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=261)** So there is all the information you need about this particular resource.
>
> **[4:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=267)** And scrolling down a bit further, we can change the Password.
>
> **[4:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=271)** It didn't boot up.
>
> **[4:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=272)** We got Boot Diagnostics.
>
> **[4:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=274)** So a lot of information and a lot of things for this particular virtual machine is going to be the same for whatever resource that you have inside of here.
>
> **[4:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=285)** What I want to show you now, is how to remove everything that we did.
>
> **[4:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=289)** We're going to delete the Resource Group.
>
> **[4:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=292)** The reason we do this is you're going to be charged for that virtual machine.
>
> **[4:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=296)** $10 a month for this one.
>
> **[4:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=298)** Not much, but you should get in the habit if you're learning about Microsoft Azure, to clean up as you're going along.
>
> **[5:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=306)** Because believe me, you can get charged a lot of money if you're experimenting with the more expensive services offered from Microsoft Azure.
>
> **[5:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=315)** So we're going to come up here, we're going to just go right back to Home.
>
> **[5:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=319)** Go to Resource Groups.
>
> **[5:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=321)** Here it is, here's our Resource Group.
>
> **[5:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=323)** I'm going to click on it.
>
> **[5:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=326)** And then you see right up here?
>
> **[5:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=327)** Delete Resource Group.
>
> **[5:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=329)** We'll go ahead and do that.
>
> **[5:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=330)** And keep in mind, this is going to delete everything that's within that Resource Group.
>
> **[5:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=335)** You can see it here, it's just things to build a virtual machine, and that's all.
>
> **[5:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=341)** So we want to delete this Resource Group.
>
> **[5:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=343)** And what I'm going to do is just copy the name of it and then say, paste in here.
>
> **[5:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=351)** And then simply click Delete.
>
> **[5:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=353)** And the confirmation says this, "Hey, it's going to delete everything within this Resource Group and it's nonrecoverable."
>
> **[5:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=359)** Well, that's okay with us.
>
> **[6:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=360)** We're going to click on Delete.
>
> **[6:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=363)** And it goes through there, deletes the Resource Group, deletes everything within the Resource Group to clean up all the resources.
>
> **[6:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=369)** Let's go ahead and fast forward to our Resource Group being deleted.
>
> **[6:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=376)** And there we have it.
>
> **[6:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=376)** You can see up here, Deleted Resource Group.
>
> **[6:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/work-with-resources-in-the-azure-portal?u=76281980&t=379)** And that is how you come into the Portal with a resource that you have created and do what you need to do to that resource through this interface inside of the Portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (6), [[Windows]] (2), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft Entra ID|Entra id]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** click on (5), go to (4)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** dept (1)
> **Speakers:** - [instructor] (1)

#### [Use the Azure remote app](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to do something a little bit different.
>
> **[0:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=3)** I'm going to show you my phone screen and the [[Microsoft Azure|Azure]] app that is available to you that can make your life easier as you're dealing with and working with [[Microsoft Azure]].
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=15)** I'm going to show you how to get the app and once we're inside of the app, how to navigate around and what is available to you in the Azure app.
>
> **[0:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=23)** And the whole purpose of this is so you have the ability to use the MS Azure app.
>
> **[0:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=30)** Let's go to the app now.
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=33)** This is the Azure mobile app.
>
> **[0:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=35)** And you get here simply by going to the [[Google]] Store, or going to the Apple Store, searching for Azure and it'll pop up right there, the Azure Mobile app.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=45)** Once you download it, you initiate it or start it.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=49)** And what's going to happen is you simply log in with your password and credentials and according to your account and what services you have access to, they'll appear here.
>
> **[1:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=60)** And most of the functionality that you have with the portal, you can have through this Azure mobile app.
>
> **[1:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=67)** The benefit is pretty obvious.
>
> **[1:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=69)** Wherever you go, as long as you have your phone and access of course, to the internet, you can get to your Microsoft Azure environment and do pretty much anything that you can do through the portal through your phone in your hand.
>
> **[1:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=87)** So let's go ahead and take a look at this.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=89)** I'm going to start off.
>
> **[1:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=90)** You see [[Virtual Machines]], We deleted our virtual machine, but if we had it, it would be in here and we could do pretty much anything to that virtual machine that we could with the [[Microsoft]] portal.
>
> **[1:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=104)** Very convenient.
>
> **[1:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=105)** I'm going to tap on the back button now and show a few things.
>
> **[1:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=109)** I want to scroll down so you can see what is all available.
>
> **[1:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=114)** The alerts.
>
> **[1:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=115)** An alert will happen that you set to tell you, "Hey, I need to know if this or that happens to this or that resource."
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=124)** Well, it's going to be right there conveniently located for you with your mobile app.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=129)** So you can simply pick it up, take a look at your alerts, find out what's going on, and you don't have to necessarily log into your workstation in order to receive that alert or set up an email or text message or something like that.
>
> **[2:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=144)** Scrolling down further, here's our recent resources.
>
> **[2:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=148)** Same as you would see inside of the portal.
>
> **[2:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=151)** These are the resources that we've been working with lately.
>
> **[2:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=155)** So it's very convenient to go down there and the last thing you're working at will be the top thing on the list.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=162)** And then we have Service Health.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=165)** The [[Microsoft Products|products]] in Microsoft Azure are going to have issues.
>
> **[2:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=171)** They're going to work better sometimes than others.
>
> **[2:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=175)** And the Service Help tells you what's going on with the resources that you have in Microsoft Azure.
>
> **[3:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=184)** Scrolling down further.
>
> **[3:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=185)** See Cloud Shell?
>
> **[3:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=186)** Let's go ahead and tap on Cloud Shell.
>
> **[3:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=189)** Cloud Shell is a way for you to get into your Microsoft account and subscription and perform command lines on those resources.
>
> **[3:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=200)** You can see as it built in here, it's automatically connected to my subscription, automatically connected to my [[Microsoft Entra ID|Entra ID]] and everything that I have inside of the portal available through the command line interface you can do through this.
>
> **[3:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=215)** Now obviously if you're typing in with a phone keypad, a very long script is not going to be very reasonable.
>
> **[3:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=225)** You probably want to wait till you get on the portal.
>
> **[3:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=228)** We're going to close the [[Powershell]] and we're going to scroll down a little bit more to see the favorites.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=238)** So if we had our favorites that we put in here, the things that we commonly use, we can go right here and use those.
>
> **[4:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=247)** I'm going to tap on the home screen and scroll up.
>
> **[4:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=252)** And this takes us right back to where we were before.
>
> **[4:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=255)** With this interface, we can create objects, we can manipulate those objects, we can delete resource groups.
>
> **[4:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=264)** We can pretty much do everything through this mobile app and the convenience that a mobile app offers us that we could do with the portal.
>
> **[4:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-the-azure-remote-app?u=76281980&t=274)** So that is a look at the Azure mobile app for Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Microsoft Azure]] (5), [[Microsoft]] (2), [[Google]] (1), [[Virtual Machines]] (1)
> **UI Navigation:** scroll down (2), go to (1), scroll up (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** command line (1), powershell (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Getting Started with the Azure CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the Azure CLI](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=0)** - [Instructor] Welcome to [[Microsoft Azure|Azure]] [[CLI]].
>
> **[0:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=2)** Let's define what it is.
>
> **[0:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=4)** It's a cross-platform command line tool to connect to Azure and execute administrative commands to the resources you have in [[Microsoft Azure]].
>
> **[0:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=14)** Here are the benefits.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=16)** This is very easy to learn, I hope you find, and easy to use.
>
> **[0:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=21)** You have a very brief and concise syntax for this that makes sense.
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=26)** You can tell just by looking at a command pretty much what it does.
>
> **[0:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=32)** And importantly, it's cross-platform, you can use this on pretty much anything.
>
> **[0:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=38)** Let's take a look at that syntax.
>
> **[0:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=40)** We start off everything in the Azure CLI with az.
>
> **[0:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=44)** Now, az just says, oh, this is going to be in Azure.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=48)** I don't know of any other focus on here, so you're pretty much going to always start off with an az.
>
> **[0:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=54)** The second is the group.
>
> **[0:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=56)** Now this is not the resource group, this is the group of resources that you're talking about.
>
> **[1:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=61)** And then you have a subgroup.
>
> **[1:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=63)** Let me explain that.
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=64)** If you have a subgroup, that is part of the group.
>
> **[1:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=68)** So let's take a virtual machine.
>
> **[1:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=70)** A virtual machine, you can have a subgroup of the disk, and then how about this?
>
> **[1:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=75)** A subgroup of that, which would be what disk in particular that you're talking about.
>
> **[1:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=81)** Now, once you have the focus of what object you want to perform tasks on, then you have the base command.
>
> **[1:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=90)** On base command think, create, delete, attach, all those different commands that you want it to do on the focus.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=97)** And then what arguments are required, which ones are optional and which ones are global.
>
> **[1:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=104)** Let me show you an example of some of the syntax here.
>
> **[1:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=107)** We start off, this is basically what we had before, right?
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=111)** You have az and then the group, the subgroup, so here's an example.
>
> **[1:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=115)** az, we're talking about [[Virtual Machines]], no subgroup, just a virtual machine.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=120)** What the command is, is it's create, and then you're required for a resource group, we're going to put it in this resource group, the name of the virtual machine, the image that we're using, and then finally the admin username, and in this case it's AzureToolsAdmin.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=140)** So just by looking at this, you can pretty much tell what it does.
>
> **[2:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=144)** Let's look at a few more examples.
>
> **[2:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=148)** Az, we're talking about a webapp, we're going to create the webapp.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=153)** This is the resource group, these are the required parameters, et cetera.
>
> **[2:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=157)** Now, a virtual machine, just show me the virtual machine.
>
> **[2:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=160)** Where is it?
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=162)** It's in this resource group.
>
> **[2:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=163)** What's it called? It's called this.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=165)** And here is a global argument, output table.
>
> **[2:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=169)** Meaning that output table is a global argument, you can put it pretty much anywhere.
>
> **[2:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=174)** That is just the output that is going to show once I run this command.
>
> **[2:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=178)** And this one, Azure group, delete, the name of the resource group to delete.
>
> **[3:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=185)** So a big part of this course is what tool to use in what circumstance.
>
> **[3:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=189)** So the Azure CLI is best used when you're using a [[Linux]] or Apple operating system.
>
> **[3:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=196)** Again, it's cross-platform.
>
> **[3:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=198)** You want to repeat commands.
>
> **[3:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=200)** Now contrast this with the Portal.
>
> **[3:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=203)** With the Portal, if you have a lot of commands to do, it's not very efficient, 'cause you go, I have to go in there and click here and click there.
>
> **[3:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=212)** If you have a command that works for you, you can just repeat that command and repeat it and repeat it.
>
> **[3:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=220)** You want to perform tasks to numerous resources.
>
> **[3:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=223)** There is really no way through the Portal to iterate.
>
> **[3:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=227)** Say, you want to attach a drive to 15 servers, well, with a Portal, you going to have to go through there and do each one specifically.
>
> **[3:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=236)** With the Azure CLI, you can iterate through the different VMs that you want to perform that task with.
>
> **[4:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=243)** And then finally, and this is perfectly legitimate, you just prefer a command line interface to do your work.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=251)** So that's a look at the Azure CLI, what it is, how it works, and some of the syntax about it.
>
> **[4:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-the-azure-cli?u=76281980&t=256)** Next, we're going to go in and check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[CLI]] (5), [[Microsoft Azure]] (1), [[Virtual Machines]] (1), [[Linux]] (1)
> **CLI Commands:** az (6), find (1)
> **Env Vars:** cli (5)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Get help with the Azure CLI](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=0)** - [Instructor] In this demonstration, I'm going to show you how to launch the Cloud Shell from the portal.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=5)** Now, there's different ways of using the [[Microsoft Azure|Azure]] [[CLI]], there's a client you can install and there are also modules that you can install with a [[Powershell]] command to use Azure CLI.
>
> **[0:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=19)** I'm going to show you how to find help.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=20)** I think it's important to emphasize how to use help when you're dealing with something like this, then you can't really get lost too much, because you can get help through all the iterations of a command.
>
> **[0:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=35)** And the reason we're doing this is so you can be able to start using the Azure CLI as soon as you're done with this module.
>
> **[0:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=44)** So let's go to the Azure CLI.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=48)** We start here in the portal.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=49)** And in the portal, we have the Cloud Shell, this little button right here.
>
> **[0:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=54)** I'm going to click on it, and a few things are going to happen.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=57)** At first, it's going to say, "Hey, you know, I need a storage account to track all this information."
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=64)** So you simply come down here and say Create storage.
>
> **[1:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=68)** Then, your Azure CLI is going to be able to function, because it has that mounted storage now.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=78)** And there we have it.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=78)** Now, it's going to go through, it's going to set up.
>
> **[1:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=81)** What I'm going to do to help with seeing this is maximize it.
>
> **[1:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=84)** And it connects to the terminal, it connects to our subscription that we're logged in with.
>
> **[1:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=90)** And what we have for our account inside of [[Microsoft Azure]] will have the ability to do inside of the Azure CLI.
>
> **[1:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=100)** So it just takes a moment, and there we are, we have our prompt.
>
> **[1:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=103)** I'm going to do this periodically, I'm going to say cls for clear screen, so you can see it a bit better.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=111)** Now, let's take a look at help.
>
> **[1:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=113)** As we know, every command in Azure CLI begins with this, az.
>
> **[2:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=121)** Now, after az, we have the focus, whatever we're trying to deal with.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=125)** In this case, I'm going to say group.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=127)** And what that accounts for is a resource group.
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=131)** And then after this, I simply say --help for help.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=140)** Hit Return, and now watch what's going to happen.
>
> **[2:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=143)** It's going to give us information about the group and all that we can do with the group.
>
> **[2:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=149)** You see it here, we can create the group, we can delete it, we can see if it exists, we can export it, list it, show it, update it, and wait on that particular group.
>
> **[2:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=160)** If we want to go further on this, let's say az group, we're telling it it's in Microsoft Azure, and what we're trying to do here is get information about the group, and then if I say create and put a --help on there, then it gives us information about how to create a group.
>
> **[3:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=187)** I'm going to scroll up here a little bit, so you can see this, az --help create, and it'll walk you through the entire process of creating that particular group.
>
> **[3:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=200)** Let me clear the screen, so you can see this.
>
> **[3:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=204)** Now, what I'm going to do is I'm going to just say az --help.
>
> **[3:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=210)** All the way to the top, everything under az.
>
> **[3:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=213)** What you're going to see here is a comprehensive list of all the different resources and services that are available to you through this command.
>
> **[3:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=223)** I'm going to scroll up.
>
> **[3:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=226)** And as we're going through, notice like [[MySQL]], it tells you what that particular thing is for.
>
> **[3:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=235)** And as you have learned, we can just say az, say mysql --help, and it's going to give us information about using that particular resource with the Azure CLI.
>
> **[4:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=252)** And as you go along, it gives you information about the proper use and example of using that particular command.
>
> **[4:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=265)** So by learning this help menu, you're setting yourself up to not get lost in here.
>
> **[4:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=273)** Whenever you have a long command, you can just start typing it in and get help along every single step of the way.
>
> **[4:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=283)** I'm going to clear this screen again, and we're going to give an example of another group that we might use here, so let's say vm.
>
> **[4:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=295)** And we can just do a -h, that's shortcut for the --help.
>
> **[5:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=300)** I'm going to use the --full name as much as I can throughout this course, because that better explains what we're doing.
>
> **[5:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=309)** So all the stuff on the vm.
>
> **[5:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=312)** I can -h, and it says all the different commands that are available here, all the different subgroups, you can see it has a host, it has extension, it has a disk, monitor, a [[NIC|network interface card]], et cetera.
>
> **[5:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=329)** And now, we know basically what we can do with the vm.
>
> **[5:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=333)** So what I'm going to do is going to go a bit further, again, showing you this trail of help that you can get as you're iterating through your command.
>
> **[5:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=342)** So simply to do that, I'll clear the screen there, and I'll type in az vm disk, and it's not disks, and then hit the -h.
>
> **[5:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=359)** And there's all our information about disks, how we attach a disk, detach a disk.
>
> **[6:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=363)** You can see there's very few commands on this, and a lot more information available to you about the disk itself.
>
> **[6:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=370)** Look at all this verbiage that you have.
>
> **[6:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=373)** Here's the point of using help with the Azure CLI.
>
> **[6:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=376)** And there's a reason that I wanted to introduce this to you first, it's because as you're learning, you can get help and guidance all along the way, so you're not going to necessarily be alone when you're learning the Azure CLI.
>
> **[6:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=395)** So that is how you find the Azure CLI, in this case it's through Cloud Shell.
>
> **[6:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-with-the-azure-cli?u=76281980&t=401)** That's how you find help, that's how you iterate through different commands and find out what you can do, simply by using the help menu with the Azure CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (12), [[CLI]] (12), [[Microsoft Azure]] (2), [[MySQL]] (2), [[Powershell]] (1)
> **CLI Commands:** az (8), find (4), mysql (2)
> **Env Vars:** cli (12)
> **UI Navigation:** scroll up (2), go to (1), click on (1)
> **Prerequisites:** install (2), set up (1)
> **Tools:** powershell (1), terminal (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Deploy resources with the Azure CLI](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to create a resource group and then create a virtual machine inside of that resource group, all through the [[Microsoft Azure|Azure]] [[CLI]].
>
> **[0:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=12)** We'll then take a look at the properties through the Azure CLI of the virtual machine and the resource group.
>
> **[0:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=17)** And then finally, we're going to delete the resource group and all the resources we created to clean shop, to clean everything up after we're done.
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=26)** The reason we're doing this, I want you to know how to work with the Azure CLI, and I think you're going to be comfortable after this.
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=33)** So let's go to the interface.
>
> **[0:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=36)** As you know, everything starts with az, so what we're going to do is we're going to focus it on the group and we're going to create the group.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=45)** I'm going to just type in here what I typed in before.
>
> **[0:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=50)** The name of the group is azclirg.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=57)** The location is the eastus.
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=64)** So with this command, we're telling it, it's Azure, a resource group.
>
> **[1:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=70)** You're going to create the resource group.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=72)** You're going to call the resource group this, and you're going to fit it into this location.
>
> **[1:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=77)** A resource group doesn't take long to create, and you can see it's already created.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=82)** So now within this resource group, we can create a virtual machine and here's the command to do that.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=89)** Keeping in mind that what I'm doing is taking the default on pretty much everything for this virtual machine.
>
> **[1:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=100)** Now, your command could be very much longer than this because within this command you can input all the parameters, all the settings, the image, the disks, the network, everything within this command.
>
> **[1:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=115)** But we want to keep it simple here.
>
> **[1:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=117)** So I'm going to just give it the minimum.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=120)** The minimum it needs is a resource group and a name.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=124)** So we'll go ahead and give it that.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=125)** I'm going to say create, and I'm going to do -n and the azclivm, pretty simple name there.
>
> **[2:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=136)** And -g for the resource group.
>
> **[2:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=138)** We could also do -- resource-group, but I'm going to save you some typing here.
>
> **[2:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=144)** And azcli, resource group, where it resides.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=153)** Again, it's going to take the default, I'm going to hit Enter here.
>
> **[2:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=157)** And it hits us up for an admin password.
>
> **[2:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=160)** It's going to just call this administrator inside of there, but we need an administrator and we need the administrative password, so I'll go ahead and type that in.
>
> **[2:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=171)** Then we confirm it.
>
> **[2:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=173)** Hit Enter.
>
> **[2:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=174)** Hopefully we got those things right, looks like we did.
>
> **[2:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=177)** And then it's running.
>
> **[2:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=178)** And as it's running, it's doing the exact same thing that we had when we examined this or did this through the portal.
>
> **[3:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=186)** It's creating the virtual machine, it's creating the disks, it's creating the storage account, it's creating everything that we need for that virtual machine.
>
> **[3:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=195)** It's going to take the default on what type of image that we have, et cetera.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=201)** But you can see it's really as simple as this, az vm create, the name of the virtual machine, and the resource group that you're fitting this under.
>
> **[3:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=212)** Let's go ahead and fast forward to the virtual machine being created.
>
> **[3:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=216)** And we have it, it's created.
>
> **[3:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=220)** You can see down here it has information about the VM itself, its location, its MAC address, et cetera.
>
> **[3:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=228)** What I want to do now is minimize the Cloud Shell so we can actually see this inside of our portal.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=238)** Here is our resource group, click on the resource group.
>
> **[4:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=241)** You can see all the different resources inside of here that it created.
>
> **[4:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=246)** So let's go back to the Power Shell.
>
> **[4:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=249)** Now with the Power Shell, I'm going to clear this, and we can take a look around.
>
> **[4:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=253)** Let's say az vm list, to list all the VMs that we have.
>
> **[4:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=260)** We have a total of one, but it gives you some good information about that virtual machine when you do this.
>
> **[4:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=267)** We can see the security profile, it doesn't have any tags, that's the one thing we're going to fix on this, strings, storage profile.
>
> **[4:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=276)** As I'm scrolling up, look at the different information that we have just by saying list on this particular virtual machine.
>
> **[4:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=284)** Most of what you see here is just the default.
>
> **[4:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=288)** It doesn't take any eviction policy, it doesn't do a [[Hardware]] profile necessarily, and a lot of these settings are null.
>
> **[4:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=297)** All of these settings that you see right now, you can change or you can create those parameters when you're creating your virtual machine.
>
> **[5:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=307)** So now what I'm going to do is clear the screen again, and we're going to add a tag to that virtual machine.
>
> **[5:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=317)** It's a little more complicated than what we had before, and let me show you what that looks like.
>
> **[5:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=325)** And here's the command.
>
> **[5:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=326)** Everything starts with az.
>
> **[5:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=328)** What do we want it to focus on?
>
> **[5:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=331)** A resource.
>
> **[5:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=331)** What are we going to do to that resource?
>
> **[5:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=332)** We're going to tag it with what?
>
> **[5:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=335)** These tags, Dept=Test.
>
> **[5:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=338)** The name of the resource that you want to put a tag on, in this case, it's our virtual machine.
>
> **[5:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=345)** What group is that virtual machine in?
>
> **[5:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=348)** And then this, what resource type are we talking about?
>
> **[5:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=352)** And in this case, it's [[Microsoft]].compute/virtualMachines.
>
> **[5:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=357)** You hit Enter and it is as simple as that.
>
> **[6:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=361)** You just go through and apply those tags.
>
> **[6:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=364)** I'm going to scroll up so you can, oh, we don't even have to scroll up, it's right here.
>
> **[6:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=369)** Tags, Depart=Test.
>
> **[6:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=373)** So it is a little more involved applying the same thing, tags, with the portal, we just had to go in there and put it in.
>
> **[6:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=381)** However, you can iterate through all the different [[Virtual Machines]] that you have or want to tag and apply this to each one so you don't have to go in there and click and apply and type in for each tag.
>
> **[6:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=398)** It makes things a lot more simple.
>
> **[6:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=399)** Let me clear the screen, and the last thing we are going to do is we're going to delete our resource group so we can save the money here.
>
> **[6:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=410)** And this is pretty simple, az, we want it to focus on the group.
>
> **[6:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=415)** What do we want to do with the group?
>
> **[6:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=417)** Delete it.
>
> **[7:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=420)** And then the name of that group is azclirg.
>
> **[7:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=426)** Hit Return.
>
> **[7:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=428)** And are you sure you want to do this?
>
> **[7:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=429)** Because I'm going to delete everything inside of there.
>
> **[7:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=432)** We're okay with that.
>
> **[7:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=433)** We're going to hit Y, hit Return,.
>
> **[7:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=438)** and it's going to go through and delete our resource group and everything inside that resource group.
>
> **[7:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=444)** Let's fast forward to this being deleted.
>
> **[7:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=448)** And there we have it.
>
> **[7:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=450)** We created a virtual machine, we created a resource group, we added a tag to that virtual machine, and then we deleted the resource group.
>
> **[7:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=458)** Last thing to show you is this, I'll minimize this, and this is the resource group.
>
> **[7:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=463)** See it, says it has all this stuff in it.
>
> **[7:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=466)** However, I hit refresh and poof, it is gone.
>
> **[7:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-resources-with-the-azure-cli?u=76281980&t=471)** So that is how you build a virtual machine and pretty much any resource within the Azure CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[CLI]] (4), [[Hardware]] (1), [[Microsoft]] (1), [[Virtual Machines]] (1)
> **CLI Commands:** az (5)
> **Env Vars:** cli (4), mac (1)
> **UI Navigation:** scroll up (2), go to (1), click on (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** virtualmachines (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Use Azure CLI interactive mode](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=0)** - [Instructor] In this demonstration for interactive mode with the [[Microsoft Azure|Azure]] [[CLI]], we're going to launch interactive mode, discover how this all works, and then create a resource group, a virtual machine.
>
> **[0:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=12)** And the reason we're doing this is this is an easier way to use the Azure CLI and you should be familiar with it.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=20)** Let's go to the portal.
>
> **[0:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=23)** We have our cloud shell set up.
>
> **[0:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=25)** It is set up for home Azure with a [[Powershell]] prompt.
>
> **[0:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=30)** And how we get into interactive mode is we simply come in here, AZ, and then interactive, hit return, and this takes a while to install.
>
> **[0:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=42)** And what it has to do, I'm going to click yes here for the telemetry.
>
> **[0:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=47)** I'm going to click yes, not Y for the telemetry.
>
> **[0:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=51)** And it takes a while to load, takes about 60 seconds to load.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=55)** And what it's doing when it's loading is it's going through all the commands for AZ this or that, and gives you a set of options, a set of examples, a set of how to use that particular command.
>
> **[1:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=73)** So we're going to fast forward to this being installed.
>
> **[1:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=77)** Once it is done, you can see we have a prompt, we have an AZ prompt so we don't have to type in AZ anymore and watch this.
>
> **[1:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=87)** I'm going to type in group here.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=89)** And once we have group, we hit the space bar, and notice what happens when we hit the space bar.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=97)** We have the options, all the different things that we can do here.
>
> **[1:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=101)** I'm going to hit the down arrow and watch what happens.
>
> **[1:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=104)** It not only tells you the commands that are available to you, it tells you a little bit something about what the command does.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=111)** Now some of these are obvious.
>
> **[1:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=112)** Create a new resource group with the create command.
>
> **[1:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=116)** We have delete, deployment, all the way down to the end for all the things that we can do with this.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=122)** Now if I want create, I simply hit space bar, and then it comes up with the options that we have for creating a resource group.
>
> **[2:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=132)** Notice it has the three required and the resource group and the dash name are pretty much the same here, but we need the location, we need the name of the resource group.
>
> **[2:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=142)** So I simply hit the down arrow twice, the space bar, and there it has it for the name.
>
> **[2:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=149)** We're going to call this resource group, AZCLI, and then a large I for the interactive so we know where it came from.
>
> **[2:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=160)** I hit space again.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=161)** Now if I hit these two, it gives us the options again, what I'm going to do is I'm going to do the location, hit the space, we're going to put this in the East U.S. and that's it.
>
> **[2:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=177)** It not only tells us, oh, here are the different options for East U.S., but it takes the input in there as well.
>
> **[3:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=185)** Now this is going to become very handy when you're dealing with, okay, show me the resource groups and then it'll give you an iteration of the resource groups you have.
>
> **[3:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=194)** I'm going to hit return.
>
> **[3:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=195)** It doesn't take very long to create a resource group and we have our resource group.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=201)** What I'm going to do now is I'm going to say group, and list, just hit the down arrow, hit return.
>
> **[3:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=209)** I'm going to scroll up so you can see that.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=211)** And these are our different resource groups.
>
> **[3:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=217)** Now I'm going to show you a few other things.
>
> **[3:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=219)** It's a control C in order to clear the screen.
>
> **[3:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=222)** And I just hit that.
>
> **[3:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=223)** What I'm going to do now is we're going to do virtual machine.
>
> **[3:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=229)** So I just type in VM space bar.
>
> **[3:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=232)** Then that's all the things that we can do with a VM.
>
> **[3:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=235)** Now let's say we're just working with [[Virtual Machines]].
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=238)** I want to show you something about the scope here.
>
> **[4:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=241)** I'm going to hit the backspace and then I can simply come in here and do two percentage signs.
>
> **[4:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=247)** And I say just make this focus on VM.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=251)** That's what I want to do and see what happens, AZVM.
>
> **[4:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=257)** So now what we have are all the different options and it's just around the virtual machine itself.
>
> **[4:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=264)** So I don't have to put AZVM, it assumes that is the front part of whatever command I'm putting in.
>
> **[4:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=272)** So what I'm going to do is I'm going to say create and everything's right there.
>
> **[4:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=276)** Notice the name, I can just go down here, and then hit the space.
>
> **[4:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=279)** If you hit return, it's going to not function right so you have to make sure you hit the space bar.
>
> **[4:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=285)** And the name of this is going to be VMAZCLI, and then large I so we can kind of identify it.
>
> **[4:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=293)** We hit the space bar and then it's going to hit us up for the other things that we need.
>
> **[4:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=298)** We need the resource group, so watch this, just dash G, I hit the space and look what happens.
>
> **[5:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=303)** It has our resource group available in a list, so we don't have to go through there and type it in and anything like that.
>
> **[5:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=312)** I'm going to hit the down arrow, Azure CLI for interactive, hit the space and then we can take the defaults, we can take other parameters and if I hit the two dashes, you can see the location to create the VM, the availability zone, more information, et cetera.
>
> **[5:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=334)** So we're going to just take the defaults here, hit return and type in the admin password, confirm the password, and we built our virtual machine.
>
> **[5:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=345)** It goes through there, finds out what the password, what we typed in, applies the default for a virtual machine.
>
> **[5:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=354)** And that is how we use this interactive mode for Azure CLI in order to create a virtual machine in this behalf.
>
> **[6:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=364)** But most importantly, how you iterate through different commands in order to get it right.
>
> **[6:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=371)** We'll go ahead and fast forward to this virtual machine being built.
>
> **[6:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=376)** Okay, we have built the virtual machine and notice what we have here, AZVM, and what that means is that is still our focus.
>
> **[6:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=384)** So we can come in here and just say list.
>
> **[6:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=388)** I'll go ahead and make that official, hit the space bar.
>
> **[6:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=391)** We want the ones in a particular resource group.
>
> **[6:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=394)** So I will go ahead and add that and then it comes up with our resource groups.
>
> **[6:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=399)** It is the one on the bottom here, hit the space bar, I hit return and it looks like it didn't do anything, but you just scroll up and there is all the information for the virtual machine that we just created.
>
> **[6:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=414)** Let me clear the screen.
>
> **[6:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=417)** Next, we're going to go back, and we don't want to work with VMs anymore.
>
> **[7:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=421)** So we want to step back that scope.
>
> **[7:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=424)** All we have to do is type in percent sign, percent sign, hit return and it unscoped our VM and we're all ready to go for the other things.
>
> **[7:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=437)** Now there are a few adjustments you can make.
>
> **[7:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=441)** If I hit F1, it asks, do we want command description?
>
> **[7:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=447)** We'll go ahead and say yes.
>
> **[7:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=449)** Do you want parameter descriptions, yes.
>
> **[7:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=453)** Do you want examples?
>
> **[7:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=454)** We will go ahead and click yes.
>
> **[7:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=456)** So that is a way you can customize this.
>
> **[7:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=459)** I'll go ahead and hit yes on this one as well to where maybe you don't need as much help going through this and you just wanted to come up with the commands, maybe not explanations or samples.
>
> **[7:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=471)** And you have that.
>
> **[7:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=472)** What we're going to do now is clean everything up.
>
> **[7:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=475)** We've been through interactive mode and we're going to delete our resource group.
>
> **[8:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=482)** So you just say group, hit the space bar, delete, hit the space bar, the name, space bar, and it is this one right here.
>
> **[8:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=494)** Hit the space.
>
> **[8:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=495)** Now all I have to do is hit return.
>
> **[8:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=498)** It says, are you sure you want to do this?
>
> **[8:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=500)** I'm going to say yes.
>
> **[8:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=502)** And it goes through there and deletes this resource group and everything in it.
>
> **[8:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=507)** Let's go ahead and fast forward to this resource group being deleted.
>
> **[8:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=513)** And there we have it.
>
> **[8:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=514)** It went through and deleted our resource group.
>
> **[8:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=517)** So we started interactive mode, we made some adjustments to interactive mode, changed the scope, et cetera.
>
> **[8:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-cli-interactive-mode?u=76281980&t=524)** And this is a tool that can make a lot easier for you if you using the Azure CLI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[CLI]] (5), [[Powershell]] (1), [[Virtual Machines]] (1)
> **Env Vars:** cli (5), azvm (3), azcli (1), vmazcli (1)
> **CLI Commands:** make (5), az (4)
> **UI Navigation:** scroll up (2), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (2), install (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)


### 3. Getting Started with Azure PowerShell

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Azure PowerShell](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=0)** - [Instructor] Welcome to learning about [[Powershell]].
>
> **[0:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=2)** In particular, PowerShell with a [[Microsoft Azure]] module added.
>
> **[0:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=7)** PowerShell is a comprehensive command line interface and scripting language for [[Microsoft]] [[Windows]].
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=15)** Now, here are the benefits.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=16)** You have massive built-in functionality.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=20)** PowerShell is comprehensive.
>
> **[0:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=22)** It's not just about Microsoft Azure.
>
> **[0:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=24)** So it's very well established.
>
> **[0:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=27)** You can work with [[Linux]] with this and the functionality of the PowerShell, you add modules to it, and one of those modules includes the module for Microsoft Azure, and then you have all the different commands available through the PowerShell.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=45)** Now syntax, you have a verb and a noun.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=49)** You have a get this.
>
> **[0:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=51)** You have a set that.
>
> **[0:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=53)** You have a create this.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=55)** In other words, it just sounds a little bit like English here.
>
> **[0:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=58)** You have the verb, you have the noun, and then that includes the commandlet.
>
> **[1:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=63)** And then, of course, there's required parameters, optional parameters, and finally global parameters that you're going to input.
>
> **[1:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=71)** Let's take a look at a few commands.
>
> **[1:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=74)** The first one here, Get-AzResourceGroup.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=78)** That's going to return all the different resource groups that you have.
>
> **[1:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=81)** The second one, we've added a parameter, the location.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=85)** Give me all the AZ resource groups in the West US location, and then that's going to output that information.
>
> **[1:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=96)** And then finally, a little bit longer one, New-azvm.
>
> **[1:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=100)** You can guess what that is, right?
>
> **[1:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=101)** You can create a new [[Microsoft Azure|Azure]] virtual machine, the name of it, what resource group that you're going to put this in, the location, and what this does is credential, Get-Credential, is it's going to ask you, prompt you for that particular credential.
>
> **[1:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=119)** You can also put this credential in.
>
> **[2:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=121)** It's a little bit complicated because you have to encode it before you do.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=127)** Now, when do you use the PowerShell?
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=131)** Well, it's best used when you have complex operations because this is a full scripting language that if you have something that has to happen before something else happens, which branches off to something else, you're not going to be able to do that with other platforms besides the PowerShell.
>
> **[2:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=152)** And if you have a long script, detailed operations, the scripting of the PowerShell is going to come to your aid with that.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=162)** It's not going to be easy to use other platforms.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=165)** If you want to iterate operations over numerous resources, this is the tool that you want to use.
>
> **[2:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=172)** If you're just adding something, changing a name, something standardized that you are doing for several [[Virtual Machines]] or several web apps or any kind of resource, then the PowerShell is best used for that because again, a full-on scripting language that you can use.
>
> **[3:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=194)** So that is the basics of PowerShell, what it is, some of the syntax about it, when you would use it, what the benefits are.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-powershell?u=76281980&t=201)** So let's go in and take a look at how to use the PowerShell in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (12), [[Microsoft Azure]] (4), [[Microsoft]] (1), [[Windows]] (1), [[Linux]] (1)
> **Tools:** powershell (12), command line (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** az (1)
> **Speakers:** - [instructor] (1)

#### [Use Azure PowerShell](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to launch [[Powershell]] with the cloud shell.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=5)** We're going to examine the commands that are available to you, create a resource group, take a look at that resource group, and the idea here, what I want for you, is for you to be comfortable using the PowerShell in [[Microsoft Azure]].
>
> **[0:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=19)** We start off here with the cloud shell, and we're going to just find out, okay, well, what all commands can I have?
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=26)** And that is get, get azcommand, and as this is scrolling up, this is a comprehensive list of all the commands that you can use.
>
> **[0:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=40)** I'll scroll up a little bit so you can see this, but it cuts off about at the Rs.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=45)** So there's literally thousands of different commands that you can perform with the [[Microsoft]] PowerShell for [[Microsoft Azure|Azure]].
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=55)** You can see just a whole bunch of them.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=57)** I'm going to clear the screen, and if you wanted to go through that and see the different commands, you can iterate through that as well.
>
> **[1:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=66)** Now, if I want to create a new resource group, I can just come in here and say, New-, AZ, New, AZ, and then group.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=82)** I can just hit Tab, New AzResourceGroup, and it kind of fills in the information that you're going to need.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=89)** This is a very nice feature that we have.
>
> **[1:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=92)** So you can just kind of examine this and say, okay, well, the required arguments are it needs location, and it needs a name.
>
> **[1:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=101)** Now, what happens if I hit Return here?
>
> **[1:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=103)** It goes to something that's called interactive mode.
>
> **[1:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=107)** Those parameters that you just saw appear and just kind of asks you for input.
>
> **[1:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=113)** So this is one way to simplify the process of working with the PowerShell in Microsoft Azure.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=120)** We're going to call this resource group a name, and we'll call this rgps, for PowerShell, and we'll go ahead and leave it at that.
>
> **[2:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=130)** Hit Return.
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=131)** Now, it's going to need a location.
>
> **[2:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=132)** We'll just do the East, US.
>
> **[2:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=135)** Hit Return, and it created our resource group.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=140)** Now, with that resource group, what are all the things that we can do?
>
> **[2:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=144)** We can say get.
>
> **[2:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=146)** I'm going to type in, get, AZ, resource, and then if I put the G here.
>
> **[2:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=155)** I hit Tab, and then everything fills in.
>
> **[2:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=158)** That's an important lesson to learn here.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=161)** The Tab, if you hit Tab, you can pretty much guarantee everything to the left of your [[Cursor]] is going to be correct because that is not misspelled.
>
> **[2:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=172)** That is something that the PowerShell itself gave us.
>
> **[2:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=177)** So we have Get AzureResourceGroup, and then the name of it.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=181)** If we don't put the name in, then what's going to happen is it will just give us all of the different resource groups that are available to us.
>
> **[3:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=188)** Let me clear the screen here, and if we're going to say set, then we have the options for set.
>
> **[3:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=198)** I'm going to hit -az, and we can see here, VirtualNetwork, then it's going to focus on that particular virtual network.
>
> **[3:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=208)** So that is how you get going with the PowerShell.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=211)** That's how you can go into interactive mode and create a resource group.
>
> **[3:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/use-azure-powershell?u=76281980&t=217)** Up next, we're going to take a look at how to get help once you are in the PowerShell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (8), [[Microsoft Azure]] (2), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Tools:** powershell (8)
> **CLI Commands:** az (4), find (1)
> **Definitions:** is a  (2)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Get help in Azure PowerShell](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=0)** - [Instructor] I want to show you how to get help in [[Microsoft Azure]].
>
> **[0:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=4)** We're going to cover the basic help commands and that includes get help and get command.
>
> **[0:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=8)** And the idea here is make it easier for you to use [[Powershell]] in Microsoft Azure.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=15)** Let's go to the cloud Shell.
>
> **[0:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=19)** We're going to start off with get help and with get help, you basically just put the command in after this.
>
> **[0:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=27)** You're wondering how to use a command, any one of those commands, it's going to give you information about that command.
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=33)** So I want to get help on new A Z resource group.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=45)** Hit return and there is the information that we have to help us use this particular command.
>
> **[0:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=52)** You can see the related links.
>
> **[0:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=54)** You can see the remarks.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=55)** You can see a description up there.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=57)** Now, that's not all here because there's a couple parameters we can add to this to have more detail on it.
>
> **[1:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=65)** Let's go ahead and hit the up arrow twice, get help, new resource group.
>
> **[1:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=69)** So I can say a dash here and say full.
>
> **[1:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=73)** I want everything to be full.
>
> **[1:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=77)** And that is going to give you information.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=78)** That's going to give you examples of how to use this.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=82)** You can see right here, they have three different examples.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=85)** It gives you more information about the inputs, the outputs, the parameters.
>
> **[1:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=89)** So if you're looking for just a little bit of information, go ahead and just say get help and whatever the command is.
>
> **[1:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=96)** However, if you need more detailed information, you can use the dash full, the dash detailed, and that global parameter to give you more information about what you're seeking help about.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=111)** So it kind of customizes to your needs.
>
> **[1:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=114)** You need a little bit, just do the command.
>
> **[1:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=116)** You need a lot of information about this you really don't know, then it is dash full.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=122)** I'm going to clear the screen and we're going to examine another help feature.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=127)** And that's get command.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=129)** So get... so with the get command, we can say what it's all about.
>
> **[2:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=135)** We can say get command this and it's going to return basically the same information about the command that we have here.
>
> **[2:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=142)** But watch this.
>
> **[2:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=143)** Remember, PowerShell is a noun and a verb.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=147)** So say we want all the commands that we can get or new.
>
> **[2:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=152)** So we go over here and we say verb, V E R B, and the verb, let's just do new.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=162)** All the things we can create new.
>
> **[2:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=164)** I'm going to hit return.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=165)** And see that?
>
> **[2:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=167)** Those are all the things you can create new.
>
> **[2:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=168)** I know that went by very fast, but that's a comprehensive list of all the new things that you can create in Microsoft Azure.
>
> **[2:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=177)** Let's say we have information and we want to know what we can set.
>
> **[3:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=183)** Hit that, and that's all the stuff that we can set with this.
>
> **[3:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=186)** Now instead of a verb, let's do a noun.
>
> **[3:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=188)** I'm going to clear the screen again.
>
> **[3:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=192)** Get command.
>
> **[3:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=193)** I'm going to backspace and this is going to be a noun and all the things we want to do with an A Z V M.
>
> **[3:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=202)** What are all the commands that we can do to an [[Microsoft Azure|Azure]] virtual machine?
>
> **[3:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=207)** We say get command dash noun A Z V M and there it is.
>
> **[3:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=213)** We can get it, we can make a new one, we can remove it, we can restart it, set it, start it, stop it, and update it.
>
> **[3:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=220)** And that's comprehensive.
>
> **[3:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=222)** Those are all the different things that we can do to an Azure V M.
>
> **[3:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/get-help-in-azure-powershell?u=76281980&t=230)** So those two things, get command and get help are going to help you be more efficient in the PowerShell in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (4), [[Powershell]] (3), [[Microsoft Azure|Azure]] (2)
> **Tools:** powershell (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Deploy a resource in Azure PowerShell](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=0)** - [Instructor] In this demonstration, I'm going to show you how to use the [[Powershell]] to create a resource.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=5)** We're going to start in, create a virtual machine in interactive mode, which makes it a lot easier for you, but restricts what you can do to this virtual machine.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=15)** It just takes the default or required parameters and then will give you all the defaults that it assumes that you're going to want.
>
> **[0:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=25)** In order to have more customization, we have to create a complicated virtual machine.
>
> **[0:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=31)** I'm going to show you that.
>
> **[0:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=31)** Once we're done, we'll examine the properties, and the reason we do this, I want you to be able to create any resource in [[Microsoft Azure]] with the PowerShell.
>
> **[0:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=42)** So we begin here at the cloud shell.
>
> **[0:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=45)** What we're going to do is just type in new A-Z-V-M, simple as that.
>
> **[0:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=51)** Hit return and notice it's going to prompt us for the names that it needs in order to create this virtual machine.
>
> **[1:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=60)** And naturally, it's going to need a name.
>
> **[1:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=62)** So we're going to call this somethin' simple: P-S, for PowerShell, V-M and we're creating two [[Virtual Machines]], so we're going to call this one.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=72)** I hit return and what is the name of the administrator for this account.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=78)** I'll just put in my name.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=82)** And then a password.
>
> **[1:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=84)** I hit return, and notice what we didn't do.
>
> **[1:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=88)** We did not put in the name of a resource group.
>
> **[1:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=91)** By default, it's going to create a resource group by the same name as our virtual machine.
>
> **[1:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=99)** So this resource group will be P-S-V-M one, and it's at 17 percent.
>
> **[1:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=109)** What we have is a kind of clock down, but a percentage up, and it doesn't go to 100 percent.
>
> **[1:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=117)** Right when it hits about, I guessed 30, we're going to have our virtual machine inside of here.
>
> **[2:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=123)** There we go, 25 to 100.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=125)** Couple things to point out here.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=127)** One is, look at the resource group name.
>
> **[2:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=129)** It created a resource group name by the same name as the virtual machine.
>
> **[2:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=136)** Now you can see the name of the virtual machine right down here.
>
> **[2:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=139)** The V-M-I-D is what uniquely identifies this object inside of Microsoft Azure.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=147)** And there's several commands where you actually need this virtual machine ID.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=153)** We can see it's in the East U.S.
>
> **[2:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=155)** It took that by default.
>
> **[2:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=156)** The size and everything else pretty much by default, or whatever [[Microsoft]] assumes you're going to want for this.
>
> **[2:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=163)** I'm going to clear this screen.
>
> **[2:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=167)** And what we're going to do now is we're going to create a more detailed virtual machine.
>
> **[2:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=172)** So I type in, same as before, new A-Z-V-M by its base.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=181)** It's going to require a name here.
>
> **[3:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=184)** So I hit a dash, name, and we're going to call this P-S-V-M two.
>
> **[3:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=193)** Now we can get into some more details here.
>
> **[3:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=196)** We're going to put this inside of the resource group P-S-M-V one, the one that we just created.
>
> **[3:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=206)** And here's where we get into some details.
>
> **[3:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=209)** We're going to change the location of this.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=211)** We're going to put this in the West U.S., and this has to be in parentheses.
>
> **[3:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=224)** And some more details here.
>
> **[3:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=225)** The virtual network name, so I'll start typin' that in, virtual network name.
>
> **[3:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=230)** We want to call this somethin' different, so I'll take what I had before here, P-S-V net.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=238)** How 'about the subnet name?
>
> **[3:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=239)** We'll change the subnet name as well.
>
> **[4:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=242)** The point is here that you can have more detail and more control over your virtual machine if you specify what these different parameters are involved.
>
> **[4:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=254)** So the subnet name.
>
> **[4:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=257)** I'll put this in parentheses again because it's a string.
>
> **[4:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=260)** This is going to be my subnet, and we want to change the public address name.
>
> **[4:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=271)** So we'll call this public I-P address name.
>
> **[4:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=278)** So this is what's going to appear within the virtual machine itself for the name of its public IP address.
>
> **[4:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=287)** This has to be in parentheses again, so we're going to call this somethin' simple.
>
> **[4:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=291)** We'll just call it my IP, somethin' simple like that.
>
> **[4:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=296)** Now we could go on and add different parameters here.
>
> **[5:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=301)** We can pretty much control anything, but the point is, this command can take a lot of different parameters and design that virtual machine, or whatever you're creating in Microsoft Azure, according to your specifications.
>
> **[5:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=320)** And the important thing to remember is you can repeat this command.
>
> **[5:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=323)** You can just save it and repeat it.
>
> **[5:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=325)** So we need a user.
>
> **[5:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=330)** We need the password.
>
> **[5:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=333)** Says "no size."
>
> **[5:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=334)** We could've specified the size.
>
> **[5:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=336)** And it goes through it again.
>
> **[5:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=337)** And what you're going to notice when the parameters come up, or the information of this virtual machine comes up, that it took our customization and customized that virtual machine to what we need, what we specified it to be.
>
> **[5:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=353)** So again, this'll get around 25 percent or so.
>
> **[5:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=356)** We'll have a virtual machine and we'll examine the properties of that virtual machine.
>
> **[6:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=361)** We'll go ahead and fast forward to this virtual machine being created.
>
> **[6:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=366)** And there we have it.
>
> **[6:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=368)** Couple things to point out here is this is now in the West U.S.
>
> **[6:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=373)** You have the name of it.
>
> **[6:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=374)** It put it into this resource group, and all the different parameters that we specified through our more complicated command line are invoked with this virtual machine.
>
> **[6:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=386)** So that's how you create a resource.
>
> **[6:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-in-azure-powershell?u=76281980&t=388)** We created a simple virtual machine, a little more complicated virtual machine inside of PowerShell for Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (4), [[Microsoft Azure]] (4), [[Virtual Machines]] (1), [[Microsoft]] (1)
> **Tools:** powershell (4), command line (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure resources in Azure PowerShell](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to dig a bit deeper inside of what we can do with the [[Powershell]] for resources.
>
> **[0:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=8)** So we'll discover resource options.
>
> **[0:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=10)** We're going to stop the VM, start the VM, so you can see that process.
>
> **[0:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=14)** And then I'm going to assign a variable.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=16)** As I do, I'll explain why that's important to know.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=20)** And then we remove the resource group.
>
> **[0:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=22)** And the whole reason we do this is so you're more familiar with working with PowerShell.
>
> **[0:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=28)** Let's go to the cloud shell.
>
> **[0:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=31)** We're going to start off with the basic command, and that's going to be simply get-azvm.
>
> **[0:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=36)** And that should return all the [[Virtual Machines]] we have.
>
> **[0:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=39)** And you can see the two that we have listed here.
>
> **[0:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=43)** Now, if we want to get more information about one of those virtual machines, we can do this.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=48)** We just simply say, get-azvm.
>
> **[0:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=54)** And then we have the resource group name.
>
> **[1:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=61)** And we will take the psvm1 and then what the name of the actual VM is.
>
> **[1:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=70)** So we'll go ahead and take what it has here.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=72)** The name, psvm1.
>
> **[1:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=79)** Hit return, and it gives us a list of what's available as far as the properties of this virtual machine.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=85)** Now we can do something a little bit different here.
>
> **[1:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=87)** What we can do is we can hit the up arrow, and we can format the output here.
>
> **[1:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=94)** You simply do that by hitting a pipe, and then say in format.
>
> **[1:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=99)** And in this case, we're going to do a list.
>
> **[1:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=103)** This gives us more information, not just the information that it has entries for, but also you can see here this really isn't in a zone.
>
> **[1:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=112)** It doesn't have a host group, doesn't have user data.
>
> **[1:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=115)** So the format from the list gives us a lot more information about that particular virtual machine.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=122)** Let me clear the screen again.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=124)** Now, if we wanted to stop, start, et cetera, this virtual machine, it's pretty much what we had before.
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=131)** I'm going to show you a little shortcut.
>
> **[2:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=133)** I'm going to hit the up arrow and get azvm.
>
> **[2:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=138)** I'm going to say stop instead of get.
>
> **[2:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=144)** So all the [[Representational State Transfer (REST)|rest]] is going to be pretty much the same here.
>
> **[2:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=146)** I do have to get rid of this format.
>
> **[2:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=148)** It's not going to make sense to stop that under that format.
>
> **[2:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=152)** So I'll delete that.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=153)** I'm going to hit return, and it gives us an error message or a warning saying, are you sure you want to continue?
>
> **[2:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=159)** You're going to stop this virtual machine.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=161)** We're perfectly okay with that.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=162)** We're going to hit Y for yes, and it's going to stop this virtual machine.
>
> **[2:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=168)** This is a functionality of the PowerShell that we have for, in this case, virtual machines.
>
> **[2:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=176)** Now, if you had different resources, an app, you had some AI component inside of there, then the commands through PowerShell for that resource are going to be a little bit different.
>
> **[3:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=189)** It doesn't make sense to stop a resource group and things like that.
>
> **[3:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=194)** So let's go ahead and fast forward to this being stopped.
>
> **[3:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=199)** That took only a few minutes.
>
> **[3:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=201)** The status succeeded, start time, end time, et cetera.
>
> **[3:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=205)** That's mostly information about just the process that it went through.
>
> **[3:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=209)** Now what I'm going to do is just start this again.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=211)** I can come back here.
>
> **[3:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=213)** Instead of stop I say start.
>
> **[3:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=218)** Simple as that.
>
> **[3:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=220)** So I've stopped, and now restarting this virtual machine.
>
> **[3:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=225)** This by far is not the only command we can do in here, but it gives you a good reference point of how you use the PowerShell in order to provide functionality to the interface.
>
> **[3:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=238)** And here we see it stopped.
>
> **[3:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=239)** I'm going to clear the screen now.
>
> **[4:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=240)** What I'm going to show you is this.
>
> **[4:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=243)** We have this command up here, the get-azvm.
>
> **[4:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=248)** I'm going to delete this last part of it.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=251)** I'm going to come back over here.
>
> **[4:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=254)** And this is a variable.
>
> **[4:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=256)** And I want to emphasize why this is important.
>
> **[4:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=259)** I'm going to assign a variable with a dollar sign.
>
> **[4:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=263)** And I say, $vm space = get-azvm, and then the credentials for that particular VM.
>
> **[4:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=273)** I'm going to hit return, and watch what happens now.
>
> **[4:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=276)** That virtual machine is assigned to this variable.
>
> **[4:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=281)** You might be wondering, well, what's the benefit of that?
>
> **[4:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=283)** If you're just working with the same virtual machine, and also if you're iterating through different virtual machines to have the same task performed on them, this is very handy to have.
>
> **[4:54](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=294)** Now watch what happens when I hit $vm.
>
> **[4:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=299)** Just that.
>
> **[5:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=300)** There it is, the information for this virtual machine.
>
> **[5:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=303)** Any one of those things you see on the left hand side is a component of that virtual machine.
>
> **[5:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=309)** So now what I can do is I can say, okay, for this virtual machine, I want the vmid.
>
> **[5:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=317)** Boom.
>
> **[5:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=318)** You can reference like that forever.
>
> **[5:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=320)** Here's another one.
>
> **[5:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=321)** I can say, okay, I need to know the location of this virtual machine east to west.
>
> **[5:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=330)** If I want to assign different things to this virtual machine, I can do it through this variable.
>
> **[5:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=337)** Okay, let's clear the screen.
>
> **[5:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=340)** And what we're going to do now is we're going to remove that resource group.
>
> **[5:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=345)** So the command is simple as this.
>
> **[5:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=347)** Remove.
>
> **[5:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=349)** Remove.
>
> **[5:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=352)** AZ resource group.
>
> **[5:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=356)** And then the name of the resource group.
>
> **[5:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=358)** In this case it's psvm1.
>
> **[6:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=368)** Hit return.
>
> **[6:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=370)** It says, are you sure?
>
> **[6:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=371)** Hit yes.
>
> **[6:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=372)** And it removes the resource group.
>
> **[6:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=376)** So we just went through there.
>
> **[6:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=377)** We found out how to change some parameters within a virtual machine or whatever object or resource that you're dealing with.
>
> **[6:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=385)** In this case, we stopped it and started it.
>
> **[6:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=388)** We took a look at the different properties of it.
>
> **[6:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=390)** We assigned a variable to it.
>
> **[6:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=393)** And then finally, we deleted the resource group.
>
> **[6:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=396)** So everything is all cleaned up.
>
> **[6:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/configure-resources-in-azure-powershell?u=76281980&t=398)** So that is a little more advanced PowerShell for you in [[Microsoft Azure]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (6), [[Virtual Machines]] (4), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Azure]] (1)
> **Tools:** powershell (6)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), az (1)
> **UI Navigation:** go to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 4. Getting Started with JSON Templates

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand JSON templates](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=0)** - [Instructor] I'm so happy to introduce you to ARM Templates.
>
> **[0:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=4)** These are standardized templates that are used to deploy a resource and all of its dependent assets in [[Microsoft Azure]].
>
> **[0:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=13)** The benefits are far and wide.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=15)** First off, a very fast, very easy way to deploy resources.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=20)** You can customize these templates to meet exactly what you need.
>
> **[0:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=25)** And I'm going to show you this, you have an absolutely massive library of predefined templates, what that means for you is you want to do something in Microsoft Azure, and you're going about, oh, where do I begin?
>
> **[0:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=41)** Well, how about you begin at the end, meaning that somebody already came up with all the answers for just what you're looking for.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=49)** You just get their [[JSON]] template and deploy it.
>
> **[0:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=52)** And it's as simple as that.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=55)** You don't have to reinvent the wheel.
>
> **[0:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=57)** If you have current resources, let's say you have an [[SQL]] database, you really like it, love the way it's set up.
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=64)** You can redeploy that SQL database through the JSON templates.
>
> **[1:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=69)** You simply take the template out of the resource and click Redeploy.
>
> **[1:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=74)** You'll have to change a few things in there, of course.
>
> **[1:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=76)** Now, let's look at the syntax.
>
> **[1:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=80)** I don't want you to be intimidated by the syntax.
>
> **[1:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=84)** However, it is important to know that everything that you do in Microsoft Azure is from a template.
>
> **[1:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=94)** You have [[Microsoft Azure|Azure]] [[CLI]], you put in those commands for whatever you're trying to build.
>
> **[1:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=99)** It converts it to a JSON template.
>
> **[1:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=102)** The portal, you click here, you click there, you set it up, and then say Create, it [[Forms]] a template.
>
> **[1:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=109)** So this is the raw instruction set for Microsoft Azure, ARM, Azure Resource Manager.
>
> **[1:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=118)** These are otherwise known as ARM templates or JSON templates, JSON is simply the code.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=124)** So let's go through this.
>
> **[2:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=126)** Every one of these is going to have a schema, and the schema basically just says what version of this it is.
>
> **[2:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=133)** And here we have the parameters, the variables, functions, resources, and then finally, outputs.
>
> **[2:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=143)** I'll show you one of these for a simple VM, and that should give you context to understand some of the syntax.
>
> **[2:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=151)** The good news is you're not going to have to write any of this.
>
> **[2:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=155)** You're going to pretty much start with a predefined template and then edit that template, you don't have to type all this in.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=162)** Now, when do you want to use the templates?
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=165)** They're best used when you deploy interdependent resources.
>
> **[2:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=168)** Let's say you have a web app, that web app needs a database, the database has to be there before the web app.
>
> **[2:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=175)** Well, the orchestration of JSON templates allows you to do that.
>
> **[3:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=182)** You want to standardize resources, and this is fairly common use of ARM or JSON templates.
>
> **[3:09](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=189)** And that is a situation where, let's say you have an array of servers and all those servers have to pretty much be the same.
>
> **[3:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=198)** Well, you can have one template that deploys that server in a specific way, and you run it over, and over, and over again, simply changing the name of the server itself, and then an exact duplicate of that server comes out.
>
> **[3:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=216)** So standardization is an important part of templates.
>
> **[3:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=220)** And then finally, you want to redeploy a resource, you have something in there you really like, you can redeploy that resource.
>
> **[3:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=227)** So that's a look at the basics of JSON templates.
>
> **[3:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-json-templates?u=76281980&t=231)** Up next, we're going to discover the vast amount of templates that are available for you in order to do what you want to do in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[Microsoft Azure]] (5), [[SQL]] (2), [[Microsoft Azure|Azure]] (2), [[CLI]] (1)
> **Env Vars:** json (8), arm (4), sql (2), cli (1)
> **Exercise Files:** template (8)
> **Definitions:** known as (1), is a  (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Find the appropriate JSON template](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to go to [[GitHub]] and find [[Microsoft Azure|Azure]] templates.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=5)** We're going to explore the available templates and open up a template so you can have a look inside.
>
> **[0:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=11)** And the reason we're doing this is just to get you started with GitHub.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=16)** I'll do a [[Google]] search on it, code with GitHub.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=20)** You can also just say [github.com](https://github.com) if you'd like.
>
> **[0:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=24)** See up here on the search, I'm going to jump to Azure.
>
> **[0:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=32)** And here are the quick start templates.
>
> **[0:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=34)** A quick start template, you're talking about kind of basic deployments that are available to you, but there's a lot of them, and some of them might just be what you are looking for.
>
> **[0:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=46)** Let me go ahead and click on this.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=49)** Keep in mind, I have also included the direct link to where we're going.
>
> **[0:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=53)** I just wanted to show you it through GitHub.
>
> **[0:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=56)** Now, the repo contains all currently available Azure Resource Manager templates right here.
>
> **[1:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=62)** And I'm going to click on it and here are our quick start templates.
>
> **[1:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=68)** I'm going to search just to show you how you might do this.
>
> **[1:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=71)** Let's say you're searching for a web app. Click search.
>
> **[1:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=75)** Six results for web app.
>
> **[1:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=77)** Let's say you want to create a app service, manage certificate.
>
> **[1:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=83)** You can do that through right here.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=85)** If you are looking for [[SQL]], type in SQL, 128.
>
> **[1:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=91)** Provision and SQL database with TDE, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=96)** The idea is this.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=97)** With these quick start templates, you're not reinventing the wheel.
>
> **[1:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=101)** If somebody already discovered how to do what you want to do at [[Microsoft Azure]], this is where you go, with the quick start templates.
>
> **[1:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=110)** I'm going to scroll up a bit more to go to the search again, and I'm going to put a simple VM.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=120)** Click on search, and this is the one we're eventually going to use.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=124)** I want to examine this and what it looks like from this point of view.
>
> **[2:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=130)** You could scroll down, you can take a look at all the different aspects of a simple VM you'd like, but this is the one we're going to focus on.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=140)** It starts off just explaining what the template does and how it works and what you might do with it.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=147)** I'm going to go here to browse code.
>
> **[2:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=150)** Click on it and then this is the template.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=153)** See this, azuredeploy.[[JSON]]?
>
> **[2:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=156)** Click on it and this is that syntax that we discussed before.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=161)** Notice down here we have the parameters, we have the admin password, public IP name.
>
> **[2:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=167)** These should be pretty self-explanatory of what you would do.
>
> **[2:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=171)** Now, you're not going to have to type this all in, you just simply deploy it from here.
>
> **[2:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=177)** So that's a look at GitHub and what the Azure resources available to you from GitHub.
>
> **[3:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/find-the-appropriate-json-template?u=76281980&t=184)** We're going to implement this simple VM in Microsoft Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Microsoft Azure|Azure]] (4), [[SQL]] (3), [[Microsoft Azure]] (2), [[Google]] (1)
> **UI Navigation:** click on (5), scroll up (1), go to (1), scroll down (1)
> **Tools:** github (7)
> **Env Vars:** sql (3), tde (1)
> **Exercise Files:** template (4)
> **File Paths:** azuredeploy.json (1)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Deploy a resource with a JSON template](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to deploy a template to create a basic virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=6)** We'll take a look at the template inputs and find out what customization options that you have, and then we'll examine the created VM and the reason we're doing this, so you know how to deploy a template, so let's go to our template.
>
> **[0:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=20)** It's right here, deploy a simple [[Windows]] virtual machine, and all I really have to do is come down here, see where it says Deploy to [[Microsoft Azure|Azure]]?
>
> **[0:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=29)** I click on it.
>
> **[0:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=31)** I'm already logged in to [[Microsoft Azure]].
>
> **[0:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=34)** Otherwise, you might be hit with a prompt for this.
>
> **[0:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=37)** This should look familiar.
>
> **[0:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=38)** This should look just like the interface that you have to create a virtual machine anyway, but what we're doing is we're editing the template.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=48)** I want to come back here to where it says Edit Template.
>
> **[0:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=52)** And under Edit Template, I want to just break this all down.
>
> **[0:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=56)** Notice the parameters we have, the principle IP name, the location, the virtual machine size, the OS version, et cetera.
>
> **[1:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=64)** That can all be changed.
>
> **[1:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=65)** We can just click on here and then it's going to take us right here, see public name, and we can change this input in order to customize this particular virtual machine.
>
> **[1:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=77)** And we'll go ahead and do this.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=78)** We'll just call it mypip, mypip, and that's just an example of how we change that.
>
> **[1:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=91)** As I scroll down, notice that we can change any one of these things inside of here.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=97)** Now, from parameters, we'll go to variables.
>
> **[1:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=99)** And the variables, the network card name, subnet prefix, extension publisher, extension name, and all these different things in here that you can go and change.
>
> **[1:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=111)** And then after you make your changes, just click Save right here.
>
> **[1:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=116)** Now, this is going to require a resource group.
>
> **[1:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=119)** We don't really have an appropriate resource group in here, so we're going to create a new one.
>
> **[2:04](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=124)** And we'll simply call this RG for Resource Group and template.
>
> **[2:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=132)** Click on OK.
>
> **[2:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=134)** The region, the admin username, and we'll go ahead and input that.
>
> **[2:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=141)** Keep in mind that we could input this and make it permanent within the template itself.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=147)** The admin password, I'll go ahead and type that in.
>
> **[2:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=150)** And then public IP address, see how it changed this, see that?
>
> **[2:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=154)** Then this will come up by default for this public IP name dependent upon how you edit that template.
>
> **[2:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=163)** Down here it says Review and Create.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=165)** And the important part here is that all that input that I had before, if I change that template and save that template, all those changes I made to this virtual machine, they're going to take place.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=181)** Click down here where it says Create, and now we've created a virtual machine.
>
> **[3:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=187)** It goes through the process of creating all the different things that you're going to need for this virtual machine.
>
> **[3:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=193)** The key takeaway here is look how easy that was.
>
> **[3:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=198)** And if I wanted to redeploy this, I have saved that template and I can go to that template as many times as I want.
>
> **[3:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=205)** So if you got this virtual machine just how you like it, all you have to do is redeploy it, and that includes any resource in Microsoft Azure.
>
> **[3:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=216)** That's the beauty, and that is the power of ARM templates.
>
> **[3:43](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=223)** Let's go ahead and fast forward to this virtual machine being deployed.
>
> **[3:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=229)** And here we have it, the deployment is complete.
>
> **[3:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=232)** I'm going to go here to go to resource group.
>
> **[3:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=235)** From the resource group, you can see all the different things that were created for this simple virtual machine.
>
> **[4:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=242)** Now I'm going to go down here where it says simple-vm.
>
> **[4:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=245)** And from this simple-vm, we can see that all the information is in here.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=251)** This virtual machine is created, we can do anything we want to this virtual machine, and we deployed it with an ARM template.
>
> **[4:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=261)** Up next, we're going to redeploy resources and reuse this template.
>
> **[4:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-a-json-template?u=76281980&t=266)** I'm going to show you how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (2), [[Windows]] (1), [[Microsoft Azure|Azure]] (1)
> **Exercise Files:** template (16)
> **UI Navigation:** go to (4), click on (3), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** arm (2)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Redeploy a resource with a JSON template](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=0)** - [Instructor] In this demonstration, we're going to copy a template that we see and then paste it into the new template so we can create a brand new template that we can deploy all day.
>
> **[0:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=12)** And then, we're going to deploy the custom template.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=15)** The whole reason, I want you to be able to reuse templates, set it up to where you have your templates, and if you have to deploy something over and over again, you're going to know how.
>
> **[0:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=28)** We start here with the virtual machine [[Windows]] quick create template.
>
> **[0:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=32)** I've given you the URL, and all you have to do is come in here and say Copy.
>
> **[0:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=39)** That copies this entire template so you can save that template in [[Microsoft Azure]].
>
> **[0:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=46)** And let me show you how to do that right now.
>
> **[0:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=48)** I'm going to close this.
>
> **[0:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=49)** I'm going to go to Templates.
>
> **[0:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=50)** Now, you might have to search for templates to get this.
>
> **[0:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=53)** I've been working with them, so I have this available right here.
>
> **[0:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=56)** But to do that, all you have to do is come up here and say templates, and it's going to be right here.
>
> **[1:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=65)** Keep in mind, template specs are going to replace templates, and it's just a more advanced use of templates.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=72)** And this is going to create the template spec for us.
>
> **[1:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=75)** So, we're going to say Create, we give this a name, and I'm going to call this simple vm.
>
> **[1:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=85)** And that is for us.
>
> **[1:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=87)** That is for us to take a look at this template and find out what it does just by examining it.
>
> **[1:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=92)** We can't have a space, simplevm.
>
> **[1:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=95)** We offer a description, this is a simple vm.
>
> **[1:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=104)** Now, we go to Next: ARM Template.
>
> **[1:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=107)** And in here, this is where we copy all that we had before.
>
> **[1:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=110)** Make sure we grab that last bracket there.
>
> **[1:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=115)** Come down here, say Add.
>
> **[1:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=118)** And now we have that template.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=120)** Let's go back to Templates.
>
> **[2:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=123)** And here is our template.
>
> **[2:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=126)** The nice thing about this is that we have this permanently in there.
>
> **[2:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=131)** If we want to deploy this virtual machine, all we have to do is come down here, click on here and say Deploy.
>
> **[2:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=141)** You might have a lot of these things in your library, and the convenience is all you have to do is go to your library, your template library, and add them there.
>
> **[2:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=152)** So, the resource group, we're going to create a new resource group, we'll call this deplyvm.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=161)** Click on OK.
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=162)** And then, we have the usual inputs that we need.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=165)** We have to have a admin username and admin password.
>
> **[2:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=169)** Let me type that in.
>
> **[2:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=171)** We can make some changes inside of here, but most of the changes that we're going to make are going to be to the template itself.
>
> **[3:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=181)** So, I'm going to just change this to simple-vm2 and then say Purchase.
>
> **[3:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=186)** Notice it's different.
>
> **[3:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=188)** It doesn't say Create, it says Purchase, but this is basically a purchase anyway.
>
> **[3:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=193)** I'm going to click Purchase.
>
> **[3:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=195)** And I forgot one thing, and that is down here, I have to agree to the terms and conditions.
>
> **[3:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=202)** There we go, scroll down a little bit.
>
> **[3:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=205)** And now we say Purchase, and this is going to work.
>
> **[3:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=207)** I forgot to check that box there for the terms and conditions.
>
> **[3:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=211)** And it deploys just like you would a normal virtual machine, inside this case of a new resource group.
>
> **[3:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=222)** We could have added this to our current virtual network, we could have customized it any way we want.
>
> **[3:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=229)** This is deploying.
>
> **[3:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=231)** Let me show you that deployment here.
>
> **[3:56](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=236)** And we can see it all being built as we speak.
>
> **[3:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=239)** Let's go ahead and fast forward to this being done.
>
> **[4:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=243)** And there we have it.
>
> **[4:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=245)** Let's go to the resource.
>
> **[4:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=248)** Here is our virtual machine.
>
> **[4:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=251)** Here are all the things this virtual machine needs.
>
> **[4:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=254)** And the beauty of this is you can redeploy this as many times as you would like and customize it to what you need and then redeploy that.
>
> **[4:25](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/redeploy-a-resource-with-a-json-template?u=76281980&t=265)** In this demonstration, we're going to copy a template that we see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Microsoft Azure]] (1)
> **Exercise Files:** template (16)
> **UI Navigation:** go to (4), click on (2), scroll down (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** url (1), arm (1)
> **Cross-References:** go back to (1)
> **Documentation:** spec (1)
> **Definitions:** is a  (1)


### 5. Getting Started with Bicep

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Azure Bicep](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=0)** - [Narrator] I'm happy to introduce you to the Bicep language.
>
> **[0:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=3)** It's a domain-specific language otherwise known as a DSL, and it uses declarative syntax to deploy [[Microsoft]] resources.
>
> **[0:13](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=13)** Here's the idea.
>
> **[0:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=15)** In a Bicep file, you define the infrastructure that you want to deploy to [[Microsoft Azure|Azure]], and then [[Microsoft Azure]] will take care of doing that for you.
>
> **[0:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=27)** You use this file all throughout the deployment lifecycle of your infrastructure.
>
> **[0:34](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=34)** Now, let me talk about the benefits of something like this.
>
> **[0:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=38)** It is native to Microsoft Azure, meaning that if you are trusting the underlying technology to build whatever you're declaring you want built, well, if it's native to Microsoft Azure, that means that it is always current and always up to date.
>
> **[0:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=55)** If you use some other languages and some other tools to do this that are not native to Microsoft Azure, you might run into some trouble because the underlying technology has changed since you have written your script.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=72)** No state management.
>
> **[1:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=74)** This is important because if you don't manage the state, that means that if you run the same file on the same virtual machine, it's not going to create a duplicate virtual machine, it's just going to ignore what doesn't change on that virtual machine and just make the changes that you have declared.
>
> **[1:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=96)** So, upkeep of your infrastructure benefits from no state management.
>
> **[1:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=102)** You have modules in Bicep.
>
> **[1:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=105)** That allows you for very complicated infrastructure files to have modules that you can just change the module and you don't have to change the entire script.
>
> **[1:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=117)** Think of some of the more complicated scripts that we've seen.
>
> **[2:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=121)** If you had to go change that entire script, every time you change something in it, it is not going to be very efficient.
>
> **[2:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=128)** And then lastly, you can be the judge of this, it's easy to understand and straightforward to learn.
>
> **[2:15](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=135)** Now, when are you going to use this?
>
> **[2:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=137)** It's best used when you deploy interdependent resources.
>
> **[2:21](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=141)** This is used for more complicated deployments.
>
> **[2:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=147)** You have strict standards for resources, meaning that remember, no state management.
>
> **[2:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=153)** So if you have a virtual machine, let's say 20 [[Virtual Machines]].
>
> **[2:38](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=158)** "Oh, I want to make a change to those 20 virtual machines."
>
> **[2:42](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=162)** Well, you can just run the script.
>
> **[2:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=164)** The script will not make changes where you did not make a change and only change what you told it to change.
>
> **[2:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=172)** So if you have these standards, you can restandardize everything as you're going along.
>
> **[2:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=178)** Lastly, when you reconfigure previously-deployed resources, Bicep is the best tool because it can go through there and just make the changes that you want to make.
>
> **[3:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/understand-azure-bicep?u=76281980&t=192)** Up next, I want to show you [[Infrastructure as code (IaC)|infrastructure as code]] and why that is important for you to at least consider moving to that framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (4), [[Virtual Machines]] (2), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **CLI Commands:** make (6)
> **Definitions:** means that (2), known as (1)
> **Env Vars:** dsl (1)
> **Speakers:** - [narrator] (1)

#### [Introduction to infrastructure as code](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=0)** - [Presenter] [[Infrastructure as code (IaC)|Infrastructure as code]].
>
> **[0:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=2)** Now, what is that?
>
> **[0:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=3)** You're going to be hearing this a lot.
>
> **[0:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=5)** The idea is that you have your entire infrastructure on hard drive.
>
> **[0:11](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=11)** You have it within files.
>
> **[0:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=14)** Now, think about this: If something should happen with your infrastructure, you have a document that defines what your infrastructure is contained within these files.
>
> **[0:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=27)** That is a tremendous benefit of maintaining cloud technology.
>
> **[0:33](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=33)** So infrastructure as a code, it's just a declaration of resulting infrastructure, not how you do it, not why you do it, not where you do it, but just do it and get me what I declared I want.
>
> **[0:47](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=47)** It automates the provisioning and orchestrates your deployments.
>
> **[0:52](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=52)** Meaning that you just declare what you want and then it'll take care of everything in the background.
>
> **[0:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=59)** You get the same result every time the code is run.
>
> **[1:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=63)** So if you have some configuration creep, meaning that, oh, they made changes to this server, but not that server, and this one, they made changes and that one, they didn't, well, with this infrastructure as a code, you just rerun those files and everything is back to whatever standard that you set for it.
>
> **[1:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=82)** Infrastructure as code can be used to one, provision new environments.
>
> **[1:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=88)** If you have your entire infrastructure or segments of your infrastructure and it's contained within a file, well, you can just run that file, in this case, a Bicep file, and provision that entire environment.
>
> **[1:44](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=104)** Think of your non-production environment compared to your production environment.
>
> **[1:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=109)** A lot of times, in non-production, they're trying new things out, and this feature happened and that feature happened, hoping that when you move that to production, everything's going to work right.
>
> **[2:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=121)** But if you've worked with this before, you know that's not only the case.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=125)** So if you have a file that declares exactly the way you want your web app or whatever resource that you want, you just rerun that file and that'll standardize your non-production and your production environment.
>
> **[2:20](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=140)** Lastly, disaster recovery.
>
> **[2:23](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=143)** Think about this: An entire branch goes out, an entire region goes out.
>
> **[2:30](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=150)** Well, what do you do now?
>
> **[2:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=151)** You have your infrastructure there, and if it's all contained within files, you just run those files and implement your infrastructure in another location.
>
> **[2:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=161)** Everything is recorded in those files for your entire infrastructure.
>
> **[2:45](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=165)** That is a huge benefit, and that should get you thinking about implementing infrastructure as a code in the environment.
>
> **[2:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=173)** Lastly, I want to go over this.
>
> **[2:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=175)** An imperative versus declarative code.
>
> **[2:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=179)** Imperative, think of [[Microsoft Azure|Azure]] [[CLI]], think of [[Powershell]].
>
> **[3:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=183)** You tell it what to do and how to do it.
>
> **[3:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=186)** Declarative: You just say what the end result is and let it figure it out.
>
> **[3:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=192)** Imperative: You code, step by step, do this, then this, then this, then this.
>
> **[3:17](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=197)** Declarative: You just declare what you want and then let the underlying technology of [[Microsoft Azure]] be the one that does the step by step.
>
> **[3:29](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/introduction-to-infrastructure-as-code?u=76281980&t=209)** So infrastructure as a code is something that you should seriously consider implementing in the entire environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[Microsoft Azure|Azure]] (1), [[CLI]] (1), [[Powershell]] (1), [[Microsoft Azure]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** cli (1)
> **Tools:** powershell (1)
> **Speakers:** - [presenter] (1)

#### [Deploy a resource with Azure Bicep](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=0)** - [Gary] This is a Bicep file, and it looks complicated, but it really isn't.
>
> **[0:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=6)** After you break it down into its parts, you're going to see that, hey, this is nice.
>
> **[0:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=12)** Keep in mind that this file isn't going to change a whole lot.
>
> **[0:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=16)** What you change are the parameters.
>
> **[0:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=19)** See where it says peram publicIP AllocatedMethod string = 'Dynamic'?
>
> **[0:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=26)** Well, you can go through there when you're launching this and you can change that by adding that parameter to the script that you're launching this file with, meaning that, what do you see in here?
>
> **[0:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=37)** All this is probably not going to change.
>
> **[0:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=41)** You make any kind of changes within this deployment of a virtual machine with the actual command line that you run this file with.
>
> **[0:51](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=51)** Let's just go down and take a look at a few of these things, and then implement this very script in [[Microsoft Azure]].
>
> **[0:59](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=59)** We start off, you can see username for virtual machine, parameter, adminUsername, and we're going to change this adminUsername within the script that we launch this file with.
>
> **[1:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=72)** Keep in mind, we can change any one of these parameters we want to, and that is the power of Bicep.
>
> **[1:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=78)** You just have to make a few changes to the script you run it with, but not change the underlying file that you're running.
>
> **[1:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=87)** Okay, password for virtual machine, that seems pretty obvious.
>
> **[1:31](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=91)** Unique DNS Name, and down here, publicIPAllocationMethod.
>
> **[1:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=97)** You can choose what type of server that you're installing.
>
> **[1:41](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=101)** We have an OS version right here, in this case, it defaults to this, but I could say in the script that launches this, "Hey, change the OS version to something else."
>
> **[1:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=113)** I can change any one of these parameters that you see in here.
>
> **[1:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=117)** In this case, VM name is simple VM.
>
> **[2:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=120)** We've dealt with that quite a bit.
>
> **[2:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=122)** But if I wanted to change that, I could change that in the script to launch this.
>
> **[2:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=125)** I'll show you how to do that.
>
> **[2:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=127)** Scrolling down, we have more variables, more parameters that can all be set when launching this script.
>
> **[2:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=136)** And this script isn't a mystery.
>
> **[2:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=138)** I've included it in the course files, and you can go ahead and take a look and you can implement it any way that you would like to.
>
> **[2:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=146)** Just keep on scrolling down here, all these different modules, all these different things that you see right here can be pulled out and changed without changing anything else.
>
> **[2:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=159)** You can see the name, ipconfig1, for the name of the IP configurations, et cetera.
>
> **[2:46](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=166)** So once you kind of understand what all this means here, then it's easy to use.
>
> **[2:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=173)** Then you have this forever, and then you're standardized.
>
> **[2:58](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=178)** And if you want to make changes to one of the parameters in here, you just do that from the command line, which I will show you right now.
>
> **[3:07](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=187)** I have the code typed in here for this deployment, deployment group create, and that's going to create the virtual machine.
>
> **[3:16](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=196)** We're going to assign it to this example resource-group, and then you'll refer to the template file, which is main.bicep.
>
> **[3:24](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=204)** Now if you do this, you're going to get an error.
>
> **[3:27](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=207)** You have to upload the main.bicep file first, and you do that by clicking on this button that you see right here.
>
> **[3:35](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=215)** That means upload and download.
>
> **[3:39](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=219)** So I have included main.bicep in the course files, so you can grab that, put it on your hard drive, and you're going to have to come in here and you're going to have to upload that file.
>
> **[3:50](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=230)** And it's the file that we just took a look at.
>
> **[3:53](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=233)** So we have it on our machine.
>
> **[3:57](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=237)** We refer to it by template-file main.bicep, and here are the parameters.
>
> **[4:03](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=243)** We have just, one adminUsername.
>
> **[4:05](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=245)** I've included my name in that.
>
> **[4:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=248)** But if we wanted to change any one of those other parameters, this is where we do it.
>
> **[4:12](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=252)** The password for this, what kind of OS you want, what type of drives you want, all that can be done right here using that same main.bicep file.
>
> **[4:28](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=268)** So what I'm going to do is I'm going to hit Enter, and when I hit Enter, it's going to first say, "Hey, I need a admin password for this."
>
> **[4:37](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=277)** So go ahead and type in the password, hit Enter, and that's all you need to deploy this particular virtual machine.
>
> **[4:48](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=288)** If I want to, after the virtual machine is deployed, I think, "Oh, you know, I should have done this to this.
>
> **[4:55](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=295)** I want to do something different to that very virtual machine," you just have to run this again.
>
> **[5:01](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=301)** It's going to have the same name for the virtual machine, so it's going to go out there and if there are changes, it's going to make those changes.
>
> **[5:10](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=310)** If you have directions to say, "I want this disc and that disc," and that hasn't changed, you want that to remain on your virtual machine, it's not going to change that.
>
> **[5:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=319)** So updating a virtual machine is very easy with the Bicep language.
>
> **[5:26](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=326)** Let's fast forward to this virtual machine being deployed.
>
> **[5:32](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=332)** Once it's completed, you get a readout of everything it did.
>
> **[5:36](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=336)** All these properties are implemented with this virtual machine.
>
> **[5:40](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=340)** And this list looks a lot like the actual script that was run, security type and all this information in here and the value of that.
>
> **[5:49](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=349)** So in summary, [[Infrastructure as code (IaC)|infrastructure as code]] using the Bicep language, though it can be a little bit daunting to know how to use this.
>
> **[6:02](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=362)** Once you learn how to use it, it seems quite natural.
>
> **[6:06](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/deploy-a-resource-with-azure-bicep?u=76281980&t=366)** And if you really want to implement a safe and reliable and consistent infrastructure through Microsoft Azure, you should implement something like Bicep as infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2)
> **Code Identifiers:** adminusername (3), publicip (1), publicipallocationmethod (1)
> **CLI Commands:** make (4)
> **Tools:** command line (2)
> **Exercise Files:** template (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** dns (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=0)** - With that in mind, I have a course which goes into a lot of detail on ARM templates and Bicep.
>
> **[0:08](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=8)** It's called [[Microsoft Azure]] Design and Deploy ARM Templates.
>
> **[0:14](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=14)** Thank you for spending your time watching my course.
>
> **[0:18](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=18)** Please keep in touch with me.
>
> **[0:19](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=19)** You can connect with me on [[LinkedIn]].
>
> **[0:22](https://www.linkedin.com/learning/azure-management-basics-portal-powershell-bicep-and-cli/next-steps?u=76281980&t=22)** I wish you all the best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure]] (1), [[LinkedIn]] (1)
> **Env Vars:** arm (2)
> **Speakers:** - with (1)


## Instructor

- [[Gary Grudzinskas]]

## Skills Covered

- Cloud Administration
- Microsoft Azure

## Path Context

### In [[Azure Administration for Beginners- Management Tools, Services, and Security]]
← [[Azure Cloud Fundamentals- Explore Cloud Services]] | **3 of 5** | [[Microsoft Entra ID Fundamentals]] →

## Appears In

- [[Azure Administration for Beginners- Management Tools, Services, and Security]]

## Related Courses

_Courses sharing skills:_

- [[Azure Administration Essential Training]] — Microsoft Azure, Cloud Administration
- [[Azure Networking and Security for Beginners- Tools and Services]] — Microsoft Azure, Cloud Administration
- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure

---

[↑ Back to top](#)