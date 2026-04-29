---
type: course
cssclasses:
  - lle-course
slug: introduction-to-terraform-on-azure-2022
url: "https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022"
duration_minutes: 50
duration: 50m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFBj7Vq81j3Vg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652374461649?e=2147483647&amp;v=beta&amp;t=ml8GWl-wCVj6TjTNfNUFxR4lQhdQYRihUgDDRPJbTkk"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Microsoft Azure Synapse for Developers]]'
path_nav: '[{"path":"Advancing Your Azure Developer Skills- Exploring Complex Application Development","position":7,"total":7,"prev":"Microsoft Azure Synapse for Developers","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Introduction%20to%20Terraform%20on%20Azure%20(2022).md)

![Introduction to Terraform on Azure (2022)](https://media.licdn.com/dms/image/v2/C4E0DAQFBj7Vq81j3Vg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1652374461649?e=2147483647&amp;v=beta&amp;t=ml8GWl-wCVj6TjTNfNUFxR4lQhdQYRihUgDDRPJbTkk)

# Introduction to Terraform on Azure (2022)

> Are you wondering how to use Terraform for Azure? In this course, cloud engineer Alexandra Illarionov introduces you to everything you need to get started, including the base concepts, commands, and use-cases for Terraform in an Azure environment. Alexandra begins by defining Infrastructure as Code (IaC) and Terraform. She explains why Terraform is useful and how it compares to Bicep. Alexandra gu

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022) | 50m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Getting started
  - WYSK: What you should know
  - Using the exercise files on GitHub
- [**1. Introduction to Terraform in Azure**](#1-introduction-to-terraform-in-azure) (4 videos)
  - What is Infrastructure as Code?
  - What is Terraform?
  - Why is Terraform useful?
  - Terraform vs. Bicep
- [**2. Setting Up Your Environment**](#2-setting-up-your-environment) (3 videos)
  - Installing Terraform
  - Setting up Terraform for your Azure environment
  - Setting up your code repo for Azure DevOps
- [**3. Getting Started with Terraform**](#3-getting-started-with-terraform) (3 videos)
  - Terraform commands
  - Terraform workspaces
  - Terraform state
- [**4. Creating with Terraform**](#4-creating-with-terraform) (3 videos)
  - Resources
  - Calling Terraform provider
  - Creating a resource group in Terraform
- [**5. Terraform in Action**](#5-terraform-in-action) (5 videos)
  - Creating a virtual network
  - Creating a subnet
  - Creating an internal network interface
  - Creating a virtual machine
  - Deploying Terraform code
- [**Conclusion**](#conclusion) (1 videos)
  - Experiment and continue to learn

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Getting started
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=0)** - [Alex] With infrastructure as code becoming essential in today's world, Terraform has changed the way that we manage our cloud infrastructure.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=7)** Instead of manually configuring our changes, we can now automate and standardize our processes through Terraform.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=13)** Today we'll learn the benefits of infrastructure as code in Terraform, specifically for our Azure environments.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=20)** I'll walk you through getting your environment set up to start learning and building out our Terraform solutions.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=25)** My name is Alex Illarionov, a cloud solution engineer helping individuals take advantage of infrastructure as code in their Azure environments.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=33)** Now I'm excited today to invite you to take this LinkedIn Learning course with me.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [alex] (1)

#### WYSK: What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=0)** - [Instructor] What you should know.
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=1)** For this course, you should have a basic understanding of Azure administration and concepts.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=6)** But if you don't know any Terraform, don't worry.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=8)** This is the course for you.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=10)** For this course, we'll be using the PowerShell command line with administrative access, Visual Studio Code, An Azure subscription.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=17)** I'll be using a windows PC, but you can try to follow along with a Mac.

> [!info]- Semantic Content
>
> **Tools:** powershell (1), command line (1), visual studio (1)
> **CLI Commands:** terraform (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] The exercise files for this course are stored on GitHub.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=4)** There are branches for both the start and end states of each video on where we work with code.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=10)** You can view the list of all the branches here on GitHub from the branch dropdown.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=14)** For example, if you wanted to watch the start state for the video 0501, Creating Virtual Networks, you would go to 0501B, which is the beginning state.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=25)** And to see the end state, you would go to 0501E to see the end state of the code.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=32)** The files that are automatically generated by Terraform will not be part of the exercise files.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=37)** This is an intentional, and the gitignore file in the exercise folder will make sure those files aren't uploaded to your GitHub repository.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=44)** Some of the files that we'll learn about along the way, such as state files, are meant to be secure and should never be added to your repository.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=51)** So don't be alarmed if you don't see those automatically generated files within the branches.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=56)** This is completely intentional.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=58)** There are multiple ways to work with the code on Visual Studio Code.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=62)** One simple way is to copy the URL from the code dropdown.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=67)** So we can click here to copy the button, and then we can go to our Visual Studio Code and just click on Clone Git Repository, enter the link in here.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=77)** And it's going to ask which directory we're going to add this to.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=80)** So select a directory where you'd like to work with your code.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=85)** This is going to take a few minutes to load.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=88)** And once it's loaded, you can click Open here.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=94)** I'll be working from the main branch.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=96)** However, you can see the branches on the bottom left hand side of your Visual Studio Code window.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=104)** There are many other ways to work with your code as well.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=107)** You can download the ZIP file from the GitHub page as well.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=111)** And once that's extracted, you're all ready to go to start working with Terraform in your Visual Studio Code environment.

> [!info]- Semantic Content
>
> **Tools:** github (4), visual studio (4)
> **UI Navigation:** go to (4), dropdown (2), click on (1)
> **CLI Commands:** terraform (2), make (1), git (1)
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **Env Vars:** url (1), zip (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Terraform in Azure

> [↑ Back to Table of Contents](#table-of-contents)

#### What is Infrastructure as Code?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=0)** - [Instructor] What is infrastructure as code?
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=3)** This video will focus on the importance of infrastructure as code in the world of cloud computing, specifically focusing on infrastructure and code in Azure.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=11)** Infrastructure as code is a fantastic way to simplify the creation and management of your infrastructure resources through automation and code.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=20)** This has revolutionized modern IT by allowing organizations to deploy environments rapidly with standardized and predictable results.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=28)** This helps save time since we no longer have to rely on the manual configurations anymore, and can just automate this all using code.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=36)** Azure has many infrastructures code tools that can help rapidly deploy and develop these resources, from ARM templates to BICEP and Terraform, there are many more as well.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=46)** And one of the biggest things to consider when choosing your ideal infrastructure as code tool is which benefits will bring you the most value to you and your organization?
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=55)** One fantastic tool that simplified managing infrastructure as code is Terraform.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=60)** And this will be the core focus for this course.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=62)** And within this course, we'll go over the importance of Terraform, and how to use Terraform to create resources within your Azure environment.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (4)
> **Env Vars:** arm (1), bicep (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### What is Terraform?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=0)** - What is Terraform?
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=2)** Terraform is an infrastructure as code tool developed by HashiCorp.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=7)** This provides infrastructure automation through code.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=10)** Terraform has simplified the provisioning of infrastructure through easy human readable syntax.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=17)** These configuration files are built up of blocks, arguments, and exceptions.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=22)** These declarative configuration files are created with blocks, arguments and exceptions within your Terraform code.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=29)** With this code, it then creates and manages infrastructure through a cloud services application programming interface, or API.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=37)** This enables Terraform to work with virtually any platform or service with an accessible API.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (5)
> **Env Vars:** api (2)
> **Code Keywords:** interface (1)
> **Definitions:** is an  (1)
> **Speakers:** - what (1)

#### Why is Terraform useful?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=0)** - [Instructor] Now that we've discussed the basics of Terraform, let's go over the benefits.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=5)** Terraform is a cloud agnostic and cross-platform infrastructure as a code tool.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=10)** This allows you to define both cloud and on-premises resources utilizing the configuration files.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=17)** This allows you to simplify the management of almost any infrastructure, giving you more leverage in your environments through standardized components.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=25)** These standardized components and configurations are called modules.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=29)** This allows you to break up your Terraform code into reusable parts.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=33)** With modules, you're given the ability to leverage thousands of publicly available modules within the Terraform registry or you can write your own to better fit the needs of your specific environment or organization.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (4)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Terraform vs. Bicep
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=0)** - [Instructor] One commonly asked question is, why Terraform over BICEP?
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=4)** In this module we'll discuss the similarities and differences between the two.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=9)** So what exactly is BICEP?
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=12)** BICEP is Microsoft's IaC tool that uses a declarative syntax to deploy Azure resources.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=18)** Like Terraform, they both use a human-readable syntax that's much easier to understand, and interpret compared to the previous arm, JSON Templates, to deploy Azure resources.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=30)** But on top of that, they both support modules, allowing you to breakdown your code, and deploy resources in a consistent matter.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=37)** But that's not all, both configuration languages also support the use of DevOps and GitOps workflows for the modern CI/CD processes.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=46)** While they have many similarities, they also have many differences.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=50)** As discussed earlier on the benefits of Terraform, it is cloud agnostic and cross platform, which BICEP is only limited to provisioning Azure resources.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=59)** However, with Terraform, you do have to manage the state file, which with BICEP it's automatically managed for you.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=66)** Another difference is that BICEP has immediate support from Microsoft for new Azure features.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=72)** While with Terraform, it may take some time to include new features in the API integrations.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=77)** But, ultimately, it's up to you and your organization to choose which infrastructure's code tool best fits your needs.

> [!info]- Semantic Content
>
> **Env Vars:** bicep (6), json (1), api (1)
> **CLI Commands:** terraform (5), cd (1)
> **Code Keywords:** module (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up Your Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Installing Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=0)** - [Instructor] For this module, we'll set up your environment so that you can get started with Terraform.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=5)** In this course, there's a document that you can follow along with to get your environment set up.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=9)** It will have the same commands that I'm running and we'll go through this tutorial step by step as well.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=15)** For this demo, I'll be using the following, a Windows PC, PowerShell run in an administrative session, an Azure account, and Visual Studio Code.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=26)** The first thing we'll need to do is install the Azure Command Line Interface, also known as the Azure CLI.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=32)** There are two ways to install the Azure CLI.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=35)** You can download the MSI file from Microsoft's website, or you can go to the Microsoft Installer with Command tab.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=42)** Since we'll be already doing everything in an administrative PowerShell session, what I'm going to do is copy this command and enter this in my current administrative PowerShell session.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=53)** So once we enter the command, this can take a few seconds to minutes to install.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=58)** So while this is installing, what I'm going to do is pull Chocolatey.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=63)** So Chocolatey is a awesome open source tool that helps you manage your Windows packages.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=70)** Again, since we're running everything from our administrative PowerShell session, what I'm going to do again is just copy this command and enter it into my current PowerShell session.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=84)** Since we're waiting for it to download, we'll give it a few seconds.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=87)** As you can see, it just finished downloading.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=89)** One thing we can do to test is just type in Get-InstalledModule and what this will do is show us all the current modules we have installed within our PowerShell library.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=103)** So as you can see, this is pulling the Azure RM library and what we're going to do now is install Chocolatey.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=111)** So we're going to hit Enter.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=112)** So one thing you want to make sure is you have your execution policy set for bypass.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=117)** This is going to take a second, again.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=123)** And after we install Chocolatey, this is the simplest step.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=126)** Since we'll be using this to download Terraform, all we do is input choco install terraform and what it will do is download Terraform into our current PowerShell session.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=140)** I'm going to hit yes to all.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=144)** So we're going to give this a second as it downloads Terraform.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=148)** Now that we have Terraform downloaded, one thing we can do to double check to see if it is downloaded is we can just enter Terraform help in our current PowerShell session and it will bring up all of the commands that we can use in Terraform.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=163)** And now that we have Terraform installed, it's time to get started in actually utilizing Terraform.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (10), rm (1), make (1)
> **Tools:** powershell (8), visual studio (1), command line (1)
> **Prerequisites:** install (6), set up (2)
> **Env Vars:** cli (2), msi (1)
> **Code Keywords:** module (1), interface (1)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)

#### Setting up Terraform for your Azure environment
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=0)** - [Instructor] Now that we've installed Terraform onto our computers, now we should create a directory in which we'd like to add our configuration files to.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=12)** I'm going to create a folder called TerraformforAzure.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=16)** And in this, I'm going to add a new file called main.tf.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=21)** So within Terraform, your main configuration file will be called main.tf.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=29)** So this is where kind of you'll be hosting your modules, your commands on what you would like to deploy in your environment.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=35)** So now that we have that created, let's go into our Visual Studio Code environment and get connected to our Azure accounts.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=42)** So in order to do this, we'll open our terminal.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=45)** Let's create a new terminal section.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=48)** And since now we have the Azure CLI installed on our workstations as well, what we'll be using is using the Azure CLI commands to log into our Azure accounts.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=58)** So all we do is type in az-login.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=62)** If you are receiving an error when trying to run az-login to log into your Azure session, one thing you can do is try restarting your PowerShell terminal by clicking this little trashcan right here that says kill terminal.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=77)** And let's start a new one and enter the command az-login and it should now work.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=83)** And what this will do is pull up our default web browser and allow us to log in to our Azure accounts.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=91)** Once this pops up, you can close your current browser section, and as you can see, you are now logged into your Azure account.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=100)** Now that we're connected to our Azure accounts, we can get started working with Terraform.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (3), az (3)
> **Tools:** terminal (4), visual studio (1), powershell (1)
> **Code Keywords:** let (3), this, (2)
> **Env Vars:** cli (2)
> **Speakers:** - [instructor] (1)

#### Setting up your code repo for Azure DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=0)** - [Instructor] Now that we're logged into our Azure accounts in our current Visual Studio Code session, one of the biggest things to be aware of while coding is source control.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=9)** I'm sure everyone's gone through an experience of changing a portion of their code and breaking it and then having no clue what happened, and this is where source control is super important.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=19)** For this module, we'll be looking at using GitHub to manage our code and check it in as we go.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=25)** For this course, what I'll be doing is cloning the current Introduction-to-Terraform GitHub repo that will be linked to this course.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=33)** All we have to do is click on this link again.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=37)** So all we do is copy it here, and let's go back to our Visual Studio Code session.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=43)** And all we do have to enter is git clone and then right-click and enter the GitHub repository that we're looking to work in.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=52)** So what this will do is add the GitHub repository and the current directory that we're working with.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=58)** If the git commands aren't working, luckily, we're already using Chocolatey.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=63)** You do have to be an administrative session, but all you have to enter is choco install git, and it will install the git packages for you.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=73)** Again, Chocolatey makes everything super easy to manage.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=76)** So if one of the commands don't work, just enter choco install git, and it should then restart your session and it should allow you to add the git clone command to get started.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=88)** I'm going to cancel this and then clear out my session.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=94)** Now that we have this Introduction-to-Terraform directory in our environments, we can now get started with Terraform.

> [!info]- Semantic Content
>
> **CLI Commands:** git (6), terraform (3)
> **Tools:** github (4), visual studio (2)
> **Code Keywords:** super (2), module (1), let (1)
> **Prerequisites:** install (3)
> **UI Navigation:** click on (1), right-click (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** github repo (1)
> **Warnings:** be aware (1)


### 3. Getting Started with Terraform

> [↑ Back to Table of Contents](#table-of-contents)

#### Terraform commands
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=0)** - [Instructor] Now that we have our environments all set up and ready to go, let's take a look at the main commands we'll be using for this course.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=7)** One of the most common commands you'll be using is Terraform init.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=11)** This prepares your working directory for other commands throughout your configurations.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=16)** We then have Terraform validate.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=18)** This just checks whether your configuration is valid.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=20)** Whether it's variables or typos, Terraform validate is really helpful to catch those errors.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=26)** Next, we have Terraform plan.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=29)** This shows all the changes that will be taking place with your current configuration.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=33)** Even with our next command, Terraform apply, every time you run Terraform apply, it will also run Terraform plan at the same time to show you what you're going to create or update using your infrastructure as code.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=46)** Both are super helpful to see your changes on what's going to happen once you apply that Terraform.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=51)** So Terraform apply is absolutely essential since without this command, we can't deploy any of our resources or infrastructure that we'll be using for Terraform.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=61)** And next, we have the most destructive one of all, Terraform destroy.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=65)** So this will destroy all the previously created infrastructure with that Terraform configuration.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=71)** So you want to be very careful when you're running Terraform destroy just to make sure you're not destroying any important resources.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=78)** If you ever need reference for a command within your terminal, you can always run Terraform help, and this will pull a list of all the commands with an explanation of what they do in Terraform.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=90)** During this course, we'll be using these key commands to see our Terraform in action.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=95)** Knowing these simple commands will quickly get you started on your Terraform journey.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (17), make (1)
> **Code Keywords:** let (1), super (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Terraform workspaces
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=0)** - [Instructor] Next, let's take a look at common commands to manage workspaces within your Terraform terminal.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=6)** So what exactly are Terraform command line interface workspaces?
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=10)** Workspaces are a way to create separate instances of state data, which you'll learn a little bit more about state data in a later module within the same working directory.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=20)** So these are different from Terraform Cloud workspaces.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=24)** So Terraform Cloud workspaces create separate working directories, while with the Terraform command line interface workspaces, you're working within the same directory, but it's creating separate files.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=37)** For this demo, we'll be working in the Terraform CLI workspaces.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=41)** In Terraform, most commands only work within the current selected workspace.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=46)** And since most Terraform resources don't require unique names as part of the configuration, it's common to use the same Terraform configurations for multiple workspaces or environment.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=57)** Which workspace that we're working in, is we enter Terraform workspace show, and it'll show the current workspace that we are working in.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=64)** Another way to see all the workspaces we currently have is we can run Terraform workspace list, and this will list out all the current workspaces we have in this current configuration directory.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=79)** As you can see, I also have a test workspace, but let's create a new one for a development environment.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=85)** So all we enter here is Terraform workspace new, and let's call it dev, since it will be for our development environment.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=94)** Now, that we've created a new workspace called dev, and we switched to it, let's say we want to switch back, what we can do is Terraform workspace select, and the name of the workspace where we want to work in.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=107)** So let's go back to test since we'll be testing this infrastructure in a test environment.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=112)** Now that we've learned a little bit about workspaces, typically with Terraform, you aren't going to be working in workspaces.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=120)** You most likely will have separate directories for your configuration files, but it's good to know to separate your own environments since it is a command that you could potentially use to separate your environments within the same working directory.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (14)
> **Code Keywords:** let (5), interface (2), module (1), require (1), new, (1)
> **Tools:** command line (2), terminal (1)
> **Env Vars:** cli (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Terraform state
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=0)** - [Instructor] In this module, we'll be going over Terraform State.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=4)** So what exactly is Terraform State?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=6)** The state file maps real world resources to your configuration file, keeps track of your metadata and improves performance for large scale infrastructure.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=16)** Terraform State files are in JSON.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=19)** While it may be tempting to directly edit the file, it is highly discouraged since it won't match your configuration files and will cause potentially more issues in the future.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=30)** By default, state files are locally stored in a file called terraform.tfstate.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=37)** In our previous module, when we learned a little bit about Terraform workspaces, you could also see that the Terraform local files were separated by what we listed our workspaces as.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=48)** You can also store your state files remotely, in an as Azure storage account, Terraform cloud, an S3 bucket or whatever your organization or you prefer.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=59)** With state files, since this does store all your configurations and resources, your state file does refresh to update the state of your real infrastructure on Azure just to make sure things already match up.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=73)** For example, if you have resource blocks that are already associated to infrastructure in your state file and already exist in your Azure portal, if you update that resource in the Azure portal, since it no longer matches your state file, what it will do is ask to import that resource so that it is up-to-date with your real infrastructure.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=94)** So that's kind of why it's important to make sure your Terraform State file and your Azure portal resources do match since that will cause issues with your Terraform State file.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (9), make (2)
> **Code Keywords:** module (2), default, (1)
> **Tools:** azure portal (3)
> **Env Vars:** json (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Creating with Terraform

> [↑ Back to Table of Contents](#table-of-contents)

#### Resources
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=0)** - [Instructor] Now that we've learned a lot about Terraform, it's time to get into resources.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=6)** Terraform resource blocks are the most important part about Terraform, without resource blocks we can't implement any infrastructure, make any changes.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=16)** It's the key foundation of why we can use infrastructure as code.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=21)** Resource blocks describe one or more infrastructure objects such as virtual networks, virtual machines, and many more in a given setting.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=30)** When you're writing a new configuration for the first time, the resources you'll be creating only exist in the configuration file and won't actually represent any real infrastructure until you run Terraform apply.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=43)** When you do create new infrastructure, that object is then saved in your state file.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=48)** So this allows you to update and destroy your resource and future changes for the resource blocks that have already an associated object.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=57)** Kind of going back to that previous state module, it will compare the state file to make sure that it matches and it will make any updates to the object if necessary.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=68)** So let's quickly take a look at a resource block.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=73)** The resource block declares a resource of a given type.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=77)** So for example, this is where we would place, where we want to create that resource type with a given local name.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=85)** So for this resource block, it would be example which would be referenced throughout the module, but has no significance outside of this module or configuration files scope.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=96)** The resource block allows you to define the parameters of the resource, such as the name, location, or for example with a virtual machine, which type of skew you want to use or operating system.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=109)** So this is what would be declared in a resource block and it's absolutely essential for your Terraform configuration files.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (5), make (3)
> **Code Keywords:** module (3), let (1), type. (1)
> **Analogies:** such as (2), for example (2)
> **Speakers:** - [instructor] (1)

#### Calling Terraform provider
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=0)** - [Instructor] Now that we learned a little bit about Terraform resources, let's learn about Terraform Providers.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=6)** Terraform relies on providers to interact with cloud providers, SaaS providers, or other APIs.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=13)** Without Terraform providers, we can't create any resources or configure any infrastructure.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=19)** So you must declare a Terraform provider to even get started with Terraform.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=25)** Most providers configure specific types of objects such as infrastructure, naming conventions, generating random numbers or strings, just to help you implement and simplify your infrastructure and configurations.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=39)** For this module, we'll be using the Azurerm provider but you can also take a look at all the different types of Terraform providers on the Terraform registry.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=49)** To get the Azurerm provider which will be using for this course, you can go to the GitHub repository that will be linked to the exercise files or you can go on the Terraform registry.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=60)** You can click on Azure, use provider, and you can copy and paste this into your visual studio code configuration file.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=70)** Let me quickly switch over.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=74)** Now that we have the provider in our configuration code.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=79)** The next step that we have to do is actually install the provider to make sure that we can utilize it in our environments.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=86)** This is super easy to do.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=88)** Going back to our commands.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=90)** The only thing we have to run in our terminal to install the provider is Terraform init.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=95)** What this will do is look at the providers, make sure that it is installed and added to our state file.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=103)** So as you can see here, we have successfully initialized our Terraform code, which means that we can get started with the Azurerm provider.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (11), make (2)
> **Code Keywords:** let (2), module (1), switch (1), super (1)
> **Prerequisites:** configure (2), install (2)
> **Tools:** github (1), visual studio (1), terminal (1)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)

#### Creating a resource group in Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=0)** - [Instructor] Now that we have our Terraform provider ready to go, it's time to create our first resource block.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=7)** For this first resource block, we'll be creating a resource group, which we'll be putting all of our Terraform resources in.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=14)** To begin, we want to start with resource and then call the azurerm_resource_group provider block.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=25)** And now let's have the local name, which we can reference this block throughout our configuration code.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=31)** I'll be naming it main since this will be the main resource group that we'll be putting all of our resources in.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=39)** The name of this resource group, you can name it whatever you'd like but I'm going to name mine learn-tf-rg and the location of eastus, which is the location where I'll be putting all my resources in.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=58)** Now that we have our first configuration block created, we can open our terminal up.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=65)** Make sure you're logged into your Azure account.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=68)** So we can enter an az login.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=72)** This will pull up our login information.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=77)** Now that we're logged into our Azure account, we can run terraform plan to see which resources will be created.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=88)** It should only be the resource group.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=90)** So give it a second as it's running plan as it's going to try to match up with your resource block with your state file.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=97)** And if you're running into an error saying that there are no configuration changes and your configuration is up to date, make sure you're saving the file as you go since that can be a common issue or double check the directory you're working in since you have to be in the directory that your configuration file is hosted in.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=118)** Now that we've run terraform plan, you can see the changes that it'll apply as soon as we run terraform apply.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=124)** So this will be creating a resource group named learn-tf-rg in the eastus region.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=132)** So now let's run terraform apply and it's going to run terraform plan again just to make sure those are the changes we want to create.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=143)** So let's give this a second.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=144)** And once it'll prompt us whether we want a yes or no, we'll enter in yes and then let's give it a second to see how that resource is implemented in our Azure environment.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=157)** So I'm going to run yes here.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=159)** And as you can see, this is being added to my workspace of test in our previous module that we went over Terraform workspaces.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=167)** The state file will then be hosted in my test state files.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=172)** Don't worry if you don't see the dev workspace.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=174)** But I do want to emphasize the importance of the state file.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=178)** We'll learn more about state within the next module.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=181)** However, it is something we want to keep secure and make sure we're not uploading to our GitHub repository since it will contain sensitive information of our Terraform infrastructure.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=193)** As this is running and creating resources in our Azure environment, let's take a look at how it changed the state file.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=202)** So since we're working in the test workspace as you can see here, if we go to the test state file, you'll see that it created JSON to create that resource group.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=215)** So now if we go to our Azure portal, and go to our resource groups, you'll see that this resource group was created right now.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=225)** And let's get started with our next modules.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (9), make (4), az (1)
> **Code Keywords:** let (6), module (2)
> **Tools:** terminal (1), github (1), azure portal (1)
> **UI Navigation:** go to (3)
> **Code Identifiers:** azurerm_resource_group (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)


### 5. Terraform in Action

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating a virtual network
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=0)** - [Instructor] Now that we have a resource group created, let's get started on creating our end goal of a virtual machine.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=7)** The first thing we need to create is a virtual network.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=11)** Azure virtual networks allow your resources to talk to each other and is one of the bases that we need to create first in order to create our virtual machine since all the pieces will fit together at the end.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=24)** To create a virtual network resource block, it's very similar to a resource group.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=30)** However, we need different parameters to create a virtual network.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=38)** So similarly on how we called the azurerm resource group, we'll be entering azurerm but virtual_network this time instead of resource_group since we're creating a virtual network.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=50)** Again, I'm going to reference this as main since I like to kind of keep my configurations together based off where they're put.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=59)** Since this will be put in our main resource group, I'm going to name the local location of main.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=65)** The name is what we're going to name our resource group.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=68)** So I'm going to keep the same naming convention.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=72)** However, instead of rg, I'm going to change it to vnet since this is our resource group in the location of eastus.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=83)** And going back to our previous module where we learned about resources and how resources are configured, we can actually reference previous resource blocks by entering azurerm_resource_group or the resource type we want to reference.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=102)** The local name, which is main and then the type of resource parameter that we're referencing.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=109)** Since this is a location, I'm going to enter location at the end.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=114)** And for the VNet, we do need to place it within a resource group, so very similarly to how we referenced the location, we enter resource_group_name this time.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=131)** And then very similarly on how we referenced the location.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=136)** Instead of writing location at the end, we're just going to change it to name.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=141)** And this really simplifies it.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=143)** Since we don't have to reference and rename everything all over again, we can keep that all within the azurerm_resource_group container.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=152)** So if we ever change the resource group name, it will automatically update the rest of the information and configurations within our Terraform configuration file.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=162)** So this is a great way.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=163)** So for example, if I changed my resource group location to East US, it will change the location for all my resources in this configuration to match the resource group.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=174)** So now that we have our main components, what we want to do is now add our address space.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=180)** That's one of the most essential parts of a virtual network since it allows our resources to talk to each other.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=188)** So this goes to CIDR notation.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=190)** I'm going to keep this simple with a 10.0.0.0/16.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=201)** And this does need to be in quotations for Terraform.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=205)** Now that we have this created, what we can do, if you want to run this right away is run terraform plan or apply to create this resource.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=219)** I'm going to run terraform apply so that we can see that it's added to a resource group.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=225)** So let's give this a second.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=228)** So what this is going to do is refresh your state file to make sure to matches real-time configuration and shows the changes that it's going to create.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=237)** So now we want to enter yes and what it's going to do is create our virtual network in the resource group that we previously created in the previous module.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=246)** So let's give this a second as it creates the resource.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=249)** But when we check our resource group in the Azure portal, you'll see that this virtual network has been created in the same resource group and location as our resource group.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=261)** If we go to our resource group, once it's refreshed, you can see that it created the virtual network that we created within our Terraform code.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (5), make (1)
> **Code Keywords:** let (3), module (2)
> **Code Identifiers:** azurerm_resource_group (2), virtual_network (1), resource_group (1), resource_group_name (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** cidr (1)
> **Versions:** 10.0.0 (1)
> **Tools:** azure portal (1)

#### Creating a subnet
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=0)** - [Instructor] For this module, we'll be learning on how to create a subnet resource block in Terraform.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=6)** Since we've just created our azurerm_virtual_network resource block, we're now going to create our subnet.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=15)** So there are actually two different ways to create a subnet within our azurerm provider.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=20)** We can create the subnet in the virtual network resource block or we can create its completely own resource block.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=28)** For the purposes of this demo, I am going to be creating its own resource block and keeping with the naming convention, I am going to reference this as main locally since this will be the main subnet that we'll be using throughout this configuration file.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=43)** Again, really similarly on how we've been referencing our previous modules, we're going to do the same within the azurerm_subnet resource block.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=55)** So first, let's create a name.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=58)** So I'm going to keep this naming convention that we've been doing throughout.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=62)** We'll add subnet and then eastus.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=68)** Each resource block needs a different type of configuration or argument.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=73)** So arguments aren't necessarily standardized throughout.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=76)** It's very resource dependent.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=78)** So for the azurerm_subnet resource block, we don't need a location but we do need the virtual network name that we want to add the subnet to since a subnet is just a subset of IP address spaces within a virtual network.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=94)** So this can help increase your security but also organization of those address spaces.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=100)** So we have to reference the virtual network name that we want to add the subnet to.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=106)** So very similar on how we would reference a virtual group.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=109)** What we want to do is reference this time the resource type of a virtual_network and the local name of this virtual_network is main and we want to grab the name argument from that resource block.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=123)** and we'll do the exact same for the resource group, except we'll be referencing the resource_group block instead.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=132)** So we have our azurerm_resource_group.main and .name since we're referencing the name argument.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=145)** And since the subnet is within the virtual network, we do need to find the address prefixes that we would like to be within this subnet.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=154)** So we need the address_prefixes argument.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=157)** With the address_prefixes, it does need to fall within the virtual network, so I'm going to create this as a 10.0.0.0/24.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=167)** Since that falls within my subnet, it won't conflict with any of my previous existing resources.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=174)** Now that we have our subnet ready to go, we can now go into creating our network interface card.

> [!info]- Semantic Content
>
> **Code Identifiers:** azurerm_subnet (2), virtual_network (2), address_prefixes (2), azurerm_virtual_network (1), resource_group (1)
> **Code Keywords:** module (1), let (1), interface (1)
> **CLI Commands:** terraform (1), find (1)
> **Versions:** 10.0.0 (1)
> **Speakers:** - [instructor] (1)

#### Creating an internal network interface
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=0)** - [Instructor] Now that we've created the base for our networking, let's create the network interface card that we want to be attached to our virtual network.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=9)** Network interface cards are super important since it allows your virtual machines to talk to each other or communicate with different resources within your Azure environment.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=19)** NICs are connected to subnets within a virtual network.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=23)** They can communicate with different network interface cards within the virtual network or subnet without any extra configuration.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=32)** So when you set up your virtual network, and you define that address space or subnet space, you want to make sure it doesn't overlap with other resources you want to talk to.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=42)** Otherwise it won't work.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=44)** For the purposes of this demo, we're going to be creating an internal network interface card so that your virtual machine won't be publicly accessed over the internet.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=52)** So this will be within the virtual network and subnet that we've just created.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=57)** Just to kind of give an extra layer of security since it won't be able to communicate over the internet.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=64)** So one of the best parts about Terraform is that resource blocks are, at this point, I'm sure you're catching on, super uniform on the arguments that you need.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=73)** And it just varies by resource type.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=76)** So I'm actually going to call this one a little bit different.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=79)** Instead of referencing it as main, I'm actually going to reference it as an internal one, so we have resource azurerm_network_interface.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=92)** So this will create our network interface card that we want to attach to our virtual machine.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=96)** Since this will be internal and it won't actually go over the internet, I like to make sure that I do mark it as internal and if I do create an external one, I'll create that local name as external just so I know what to reference it as.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=111)** So keeping with my standardized naming convention, I'm going to name it learn-tf-nic-internal and then eastus.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=128)** This time, we do need to reference a location.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=130)** So I want to keep this within the same resource group that I've been creating all my other resources in.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=137)** So let's reference azurerm_resource_group.main.location.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=145)** Now we have to reference the resource group name that we'll be putting it in.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=150)** So exactly how we've been doing it in our previous modules.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=154)** We're going to do azurerm_resource_group.main.name this time.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=160)** One big key difference with an azurerm network interface is we do actually have to make the ip_configuration.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=168)** So let's create the ip_configuration.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=171)** So this is a resource block configuration within a resource block.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=177)** So for this, we get to name our ip_configuration.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=181)** I'm going to name it internal since this will be our internal network interface card that allows our virtual machine to talk to internal resources.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=190)** And since a NIC is connected to a subnet, we need to get the subnet_id.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=195)** Since we don't have the resource ID, what we can do is actually reference the subnet resource block with ID at the end.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=204)** This really simplifies it.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=206)** So instead of going to the Resource Explorer and getting that resource ID from the Azure portal, what we can actually do is reference that resource block of subnet.main and just get the ID.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=219)** So what this will do is once this resource is created, it can actually grab that subnet_id and add it to your ip_configuration.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=228)** And since this is a private_ip, we have to choose how the address is allocated.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=234)** So it needs an argument of private_ip_address_allocation.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=238)** And I'm going to do it as Dynamic.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=241)** You can choose whatever you need.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=243)** You can make it static with a subnet space.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=247)** For the purposes of this demo, I am going to make it dynamic, so this will automatically assign the NIC to a IP address within the subnet that we've assigned it to.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=259)** Now that we have our NIC created, it's time to actually create our virtual machine and kind of close everything off.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (7), let (3), super (2), type. (1), this, (1)
> **Code Identifiers:** ip_configuration (4), azurerm_resource_group (2), subnet_id (2), azurerm_network_interface (1), private_ip (1)
> **CLI Commands:** make (5), terraform (1)
> **Env Vars:** nic (3)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating a virtual machine
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=0)** - Now that we have all of our pieces ready to go, it's time to create our virtual machine.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=6)** There are a few different Azure RM virtual machine resource blocks.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=11)** For this demo, I'll be using the Azure RM windows, virtual machine.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=16)** So it's Azure RM Windows virtual machine.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=23)** They have a few different Azure RM virtual machine resource blocks.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=28)** They have one specifically for a Linux virtual machine, a generic virtual machine resource block.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=33)** For the purposes of this demo, we'll be using the Azure RM Windows virtual machine, since we'll be creating a Windows virtual machine with this demo.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=42)** Since it is a virtual machine, we do need different arguments.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=46)** Again, to start off with we do need to name all of our resources.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=49)** So this will keep with our standard naming convention that I've been using throughout.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=55)** So learn dash TF dash VM, since that's a resource type, and then east us, since that's the location I'll be placing it in.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=64)** We do need to choose the resource group that we want to add our virtual machine into.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=70)** So exactly how we've been referencing our previous modules, we'll be referencing Azure RM resource group.main.name.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=82)** I've just realized now, I forgot to add the local reference within my Azure virtual machine resource block.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=88)** I can quickly add that in.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=90)** So now that's configured correctly.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=93)** We do need to add the location to the virtual machine.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=96)** I'm going to place it within the same location as the resource group as well.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=107)** And this time we're referencing the location argument.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=111)** With the virtual machine we do need to choose the size of the virtual machine.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=116)** So this is a size argument.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=118)** It is required to deploy it.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=121)** I'm going to use a standard B1s series.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=127)** This is mainly just for cost management.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=129)** We will be destroying our resources at the end of this tutorial, but we want to make sure we are minimizing and optimizing our cloud costs.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=139)** And with a virtual machine we do need an admin username and password.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=144)** I'm going to create mine as user dot admin.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=146)** You can create your username to whatever you'd like.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=149)** And one important thing to know with Terraform, your admin password to your virtual machine will be saved in plain text within your state file.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=160)** So it's super important to keep this secure.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=162)** For best practices with the admin password, we do want to pass that in as a variable.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=168)** So for the purposes I'm just going to keep this as enter password.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=173)** I will be changing it personally for myself, but make sure it's a secure password and you want to make sure your state file is secure, so that's not shared.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=179)** So again, best practices, add that in as a variable and we want to make sure we're not passing our state files, since that will actually have our password saved in plain text as well.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=191)** And we want to eliminate all the spaces that we'll potentially having our password in plain text.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=197)** And now that we have our main components of our virtual machine we do need to attach a network interface card so that it can talk to other resources within our Azure environments.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=210)** So we have the network interface, IDs, argument.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=216)** So this is in square brackets.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=218)** And one thing that Terraform makes really simple is now we don't actually have to look within the Azure portal to find our network interface card IDs.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=228)** We could actually reference it within our Terraform code.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=232)** So since we've created our network interface card within our Terraform code all we have to do is reference the internal network interface card that we've created and the ID argument.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=247)** It's not within the resource block, but every single resource block that you create for the most part will have an ID argument that you can reference throughout your Terraform modules.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=257)** Now that we have our network interface card attached to our virtual machine, we need to create an OS disk argument within.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=265)** So we need to create our OS disk block.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=270)** So this is just how you want your data to be cached.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=272)** So I want this as a read write.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=278)** And then we have to enter the storage account type.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=285)** I do want to note, this is case sensitive, so I'll be using a standard locally redundant storage.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=293)** If you do have this all lowercase, it will error out on you, so you want to make sure it is all uppercase for LRS and the S is also capitalized.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=303)** So now that we have our OS disconfigured, we need to choose our source image that we want to use for our Windows virtual machine.
>
> **[5:15](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=315)** So we have our source image reference block within our virtual machine resource block.
>
> **[5:22](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=322)** So we have to enter the publisher of our resource image.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=327)** So since this is a Microsoft Windows server, we'll enter that in the publisher.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=335)** The offer is a window server, so that is also required within our source image reference.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=345)** Next, we want to choose the SKU.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=347)** That's basically just choosing which type of image you want to choose.
>
> **[5:51](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=351)** So you can choose a 2019 data center, 2012.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=355)** For this demo, I'll be using a SKU of a 2016 data center with the latest version.
>
> **[6:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=369)** Now that we have our virtual machine resource block configured and ready to go, it's now time to deploy our resources.

> [!info]- Semantic Content
>
> **CLI Commands:** rm (6), make (5), terraform (5), find (1)
> **Code Keywords:** interface (6), type, (1), super (1), pass (1), type. (1)
> **Definitions:** is a  (4)
> **Env Vars:** sku (2), lrs (1)
> **Tools:** azure portal (1)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### Deploying Terraform code
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=0)** - [Instructor] Now that we've created all our resources and have our pieces together, what we want to do is log in to our Azure accounts.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=7)** So using the Azure CLI, we want to enter az login.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=13)** And now that we've successfully logged into our Azure account, it's going to pull up all our subscription and tenant information.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=20)** So after that, we can run terraform plan, and this will show us all the configuration changes that are going to occur since we've last run terraform apply.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=30)** Mine will potentially have less changes than you since we ran terraform apply earlier on.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=36)** So let's give this a few seconds to minutes to load.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=39)** Since it's double checking our state file with our previous configurations, as you can see, it just refreshed the state to see if any changes should occur.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=48)** So now it's showing all the actions and configurations that will happen once we run terraform apply.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=55)** I do want to know, I did shorten the name in the Windows Virtual Machine resource block.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=61)** Since, in the previous module, the name was actually too long and it wouldn't let me create the Azure M Windows Virtual Machine.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=69)** So now that we have terraform plan run successfully, we can run terraform apply.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=75)** This will run plan again, and, as you can see, it's updating the state file each time I run it.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=83)** So let's give this a second to load, and it'll give us an option of yes to make sure we confirm those changes and we want to apply them.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=93)** You could run terraform apply with a flag of auto approve if you want to bypass this, but I would always double-check to run plan to make sure you're not making any changes that would accidentally ruin your environment.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=106)** So now that we're entering yes, it's going to apply these changes to our Azure infrastructure.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=113)** So this will take a few seconds to a few minutes or a little bit beyond that, depending the size of your configuration file.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=122)** This one shouldn't take too long since it is just virtual machines and a few networking components.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=128)** So, as you can see, it's now creating my windows_virtual_machine.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=133)** And, as this goes, let's quickly look at our test terraform state files since that's the workspace that we're working in.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=140)** As you can see, we're applying these actions to our workspace of test.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=145)** So if we go to our test1, you can see that it's actually all in JSON as these resources are being created.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=156)** And that's being transferred over to your Azure provider through the Microsoft API.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=162)** As you can see, our terraform apply was successful with the changes that we've created.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=168)** Now it's time to check our Azure portal to make sure that the changes actually happened.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=175)** So we can go to our Resource groups.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=178)** You can see that our learn-tf-resourcegroup and our East US region was created.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=185)** It will automatically create a NetworkerWatcherResourceGroup if you don't already have one.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=190)** So don't be alarmed if you see that.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=192)** And as we open our resource group, you can see that all our resources were created here.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=200)** Now that we have all our resources created and we're done with this demo, I'm actually going to run terraform destroy.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=209)** So this will destroy all the resources that are currently within the test terraform state file.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=217)** You do want to be careful with this 'cause you can accidentally destroy resources that you don't want to.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=221)** So I wouldn't use this very often unless you're destroying an entire environment like we are for this demo.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=228)** So it's going to load very similarly to terraform plan, but it's going to show us all the resources we're going to destroy instead.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=237)** So now that we've run terraform destroy, you can see that it's destroying all of our Terraform resources in our environment.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=244)** And we can see that occur within our Azure portal as we refresh.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=249)** So if I refresh here, you can see that these resources are slowly being deleted or destroyed.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=256)** By the end of terraform destroy being completely run, this resource group will no longer exist.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=263)** So, as you can see, it's still destroying.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=265)** Once the destruction is complete, you'll have your terraform destroy complete with the amount of resources that you've destroyed.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=274)** Now that you've learned a little bit of the basics of Terraform, you can now get started with creating your own resources to better help your environment and learn Terraform a little bit further.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (18), make (3), az (1)
> **Code Keywords:** let (4), module (1), this, (1)
> **Env Vars:** cli (1), json (1), api (1)
> **Tools:** azure portal (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** windows_virtual_machine (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Experiment and continue to learn
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980&t=0)** - [Alex] That brings us to the end of the course and we've only scratched the surface of what infrastructure is code and Terraform has to offer.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980&t=7)** This isn't the end and I encourage you to learn more by adding variables, modules and other resources to your Terraform code, and of course, by experimenting more and continuing to learn more about Terraform.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980&t=17)** Again, my name is Alex Illarionov and thank you for watching.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980&t=20)** Feel free to connect me with me on LinkedIn if you have any further questions, but otherwise, I wish you the best on your Terraform learning journey.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (4)
> **Speakers:** - [alex] (1)


## Instructor

- [[Alexandra Illarionov]]

## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
← [[Microsoft Azure Synapse for Developers]] | **7 of 7**

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]

---

[↑ Back to top](#)