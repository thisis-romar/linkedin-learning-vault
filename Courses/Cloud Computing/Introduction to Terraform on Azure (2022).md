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
created: 2026-05-03
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
  - [Getting started](#getting-started)
  - [WYSK: What you should know](#wysk-what-you-should-know)
  - [Using the exercise files on GitHub](#using-the-exercise-files-on-github)
- [**1. Introduction to Terraform in Azure**](#1-introduction-to-terraform-in-azure) (4 videos)
  - [What is Infrastructure as Code?](#what-is-infrastructure-as-code)
  - [What is Terraform?](#what-is-terraform)
  - [Why is Terraform useful?](#why-is-terraform-useful)
  - [Terraform vs. Bicep](#terraform-vs-bicep)
- [**2. Setting Up Your Environment**](#2-setting-up-your-environment) (3 videos)
  - [Installing Terraform](#installing-terraform)
  - [Setting up Terraform for your Azure environment](#setting-up-terraform-for-your-azure-environment)
  - [Setting up your code repo for Azure DevOps](#setting-up-your-code-repo-for-azure-devops)
- [**3. Getting Started with Terraform**](#3-getting-started-with-terraform) (3 videos)
  - [Terraform commands](#terraform-commands)
  - [Terraform workspaces](#terraform-workspaces)
  - [Terraform state](#terraform-state)
- [**4. Creating with Terraform**](#4-creating-with-terraform) (3 videos)
  - [Resources](#resources)
  - [Calling Terraform provider](#calling-terraform-provider)
  - [Creating a resource group in Terraform](#creating-a-resource-group-in-terraform)
- [**5. Terraform in Action**](#5-terraform-in-action) (5 videos)
  - [Creating a virtual network](#creating-a-virtual-network)
  - [Creating a subnet](#creating-a-subnet)
  - [Creating an internal network interface](#creating-an-internal-network-interface)
  - [Creating a virtual machine](#creating-a-virtual-machine)
  - [Deploying Terraform code](#deploying-terraform-code)
- [**Conclusion**](#conclusion) (1 videos)
  - [Experiment and continue to learn](#experiment-and-continue-to-learn)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/getting-started?u=76281980&t=0)** - [Alex] With [[Infrastructure as code (IaC)|infrastructure as code]] becoming essential in today's world, [[Terraform]] has changed the way that we manage our [[Cloud Infrastructure]]. Instead of manually configuring our changes, we can now automate and standardize our processes through Terraform. Today we'll learn the benefits of infrastructure as code in Terraform, specifically for our [[Microsoft Azure|Azure]] environments. I'll walk you through getting your environment set up to start learning and building out our Terraform solutions. My name is Alex Illarionov, a cloud solution engineer helping individuals take advantage of infrastructure as code in their Azure environments. Now I'm excited today to invite you to take this [[LinkedIn]] Learning course with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[Microsoft Azure|Azure]] (2), [[Cloud Infrastructure]] (1), [[LinkedIn]] (1)
> **CLI Commands:** terraform (4)
> **Prerequisites:** set up (1)
> **Speakers:** - [alex] (1)

#### [WYSK: What you should know](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/wysk-what-you-should-know?u=76281980&t=0)** - [Instructor] What you should know. For this course, you should have a basic understanding of [[Microsoft Azure|Azure]] administration and concepts. But if you don't know any [[Terraform]], don't worry. This is the course for you. For this course, we'll be using the [[Powershell]] command line with administrative access, Visual Studio Code, An Azure subscription. I'll be using a [[Windows]] PC, but you can try to follow along with a Mac.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Terraform]] (1), [[Powershell]] (1), [[Windows]] (1)
> **Tools:** powershell (1), command line (1), visual studio (1)
> **CLI Commands:** terraform (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files on GitHub](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] The exercise files for this course are stored on [[GitHub]]. There are branches for both the start and end states of each video on where we work with code. You can view the list of all the branches here on GitHub from the branch dropdown. For example, if you wanted to watch the start state for the video 0501, Creating Virtual Networks, you would go to 0501B, which is the beginning state. And to see the end state, you would go to 0501E to see the end state of the code. The files that are automatically generated by [[Terraform]] will not be part of the exercise files. This is an intentional, and the gitignore file in the exercise folder will make sure those files aren't uploaded to your GitHub repository. Some of the files that we'll learn about along the way, such as state files, are meant to be secure and should never be added to your repository. So don't be alarmed if you don't see those automatically generated files within the branches. This is completely intentional. There are multiple ways to work with the code on Visual Studio Code. One simple way is to copy the URL from the code dropdown. So we can click here to copy the button, and then we can go to our Visual Studio Code and just click on Clone [[Git]] Repository, enter the link in here. And it's going to ask which directory we're going to add this to. So select a directory where you'd like to work with your code. This is going to take a few minutes to load. And once it's loaded, you can click Open here. I'll be working from the main branch.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/using-the-exercise-files-on-github?u=76281980&t=96)** However, you can see the branches on the bottom left hand side of your Visual Studio Code window. There are many other ways to work with your code as well. You can download the ZIP file from the GitHub page as well. And once that's extracted, you're all ready to go to start working with Terraform in your Visual Studio Code environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Terraform]] (2), [[Git]] (1)
> **Tools:** github (4), visual studio (4)
> **UI Navigation:** go to (4), dropdown (2), click on (1)
> **CLI Commands:** terraform (2), make (1), git (1)
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **Env Vars:** url (1), zip (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is an  (1)


### 1. Introduction to Terraform in Azure

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Infrastructure as Code?](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-infrastructure-as-code?u=76281980&t=0)** - [Instructor] What is [[Infrastructure as code (IaC)|infrastructure as code]]? This video will focus on the importance of infrastructure as code in the world of [[Cloud Computing]], specifically focusing on infrastructure and code in [[Microsoft Azure|Azure]]. Infrastructure as code is a fantastic way to simplify the creation and management of your infrastructure resources through automation and code. This has revolutionized modern IT by allowing organizations to deploy environments rapidly with standardized and predictable results. This helps save time since we no longer have to rely on the manual configurations anymore, and can just automate this all using code. Azure has many infrastructures code tools that can help rapidly deploy and develop these resources, from ARM templates to BICEP and [[Terraform]], there are many more as well. And one of the biggest things to consider when choosing your ideal infrastructure as code tool is which benefits will bring you the most value to you and your organization? One fantastic tool that simplified managing infrastructure as code is Terraform. And this will be the core focus for this course. And within this course, we'll go over the importance of Terraform, and how to use Terraform to create resources within your Azure environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (5), [[Terraform]] (4), [[Microsoft Azure|Azure]] (3), [[Cloud Computing]] (1)
> **CLI Commands:** terraform (4)
> **Env Vars:** arm (1), bicep (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What is Terraform?](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/what-is-terraform?u=76281980&t=0)** - What is [[Terraform]]? Terraform is an [[Infrastructure as code (IaC)|infrastructure as code]] tool developed by HashiCorp. This provides infrastructure automation through code. Terraform has simplified the provisioning of infrastructure through easy human readable syntax. These configuration files are built up of blocks, arguments, and exceptions. These declarative configuration files are created with blocks, arguments and exceptions within your Terraform code. With this code, it then creates and manages infrastructure through a [[Cloud Services]] application programming interface, or API. This enables Terraform to work with virtually any platform or service with an accessible API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Cloud Services]] (1)
> **CLI Commands:** terraform (5)
> **Env Vars:** api (2)
> **Definitions:** is an  (1)
> **Speakers:** - what (1)

#### [Why is Terraform useful?](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/why-is-terraform-useful?u=76281980&t=0)** - [Instructor] Now that we've discussed the basics of [[Terraform]], let's go over the benefits. Terraform is a cloud agnostic and cross-platform infrastructure as a code tool. This allows you to define both cloud and on-premises resources utilizing the configuration files. This allows you to simplify the management of almost any infrastructure, giving you more leverage in your environments through standardized components. These standardized components and configurations are called modules. This allows you to break up your Terraform code into reusable parts. With modules, you're given the ability to leverage thousands of publicly available modules within the Terraform registry or you can write your own to better fit the needs of your specific environment or organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4)
> **CLI Commands:** terraform (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Terraform vs. Bicep](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-vs-bicep?u=76281980&t=0)** - [Instructor] One commonly asked question is, why [[Terraform]] over BICEP? In this module we'll discuss the similarities and differences between the two. So what exactly is BICEP? BICEP is [[Microsoft]]'s IaC tool that uses a declarative syntax to deploy [[Microsoft Azure|Azure]] resources. Like Terraform, they both use a human-readable syntax that's much easier to understand, and interpret compared to the previous arm, [[JSON]] Templates, to deploy Azure resources. But on top of that, they both support modules, allowing you to breakdown your code, and deploy resources in a consistent matter. But that's not all, both configuration languages also support the use of [[DevOps]] and GitOps workflows for the modern CI/CD processes. While they have many similarities, they also have many differences. As discussed earlier on the benefits of Terraform, it is cloud agnostic and cross platform, which BICEP is only limited to provisioning Azure resources. However, with Terraform, you do have to manage the state file, which with BICEP it's automatically managed for you. Another difference is that BICEP has immediate support from Microsoft for new Azure features. While with Terraform, it may take some time to include new features in the API integrations. But, ultimately, it's up to you and your organization to choose which infrastructure's code tool best fits your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Microsoft Azure|Azure]] (4), [[Microsoft]] (2), [[JSON]] (1), [[DevOps]] (1)
> **Env Vars:** bicep (6), json (1), api (1)
> **CLI Commands:** terraform (5), cd (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up Your Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing Terraform](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=0)** - [Instructor] For this module, we'll set up your environment so that you can get started with [[Terraform]]. In this course, there's a document that you can follow along with to get your environment set up. It will have the same commands that I'm running and we'll go through this tutorial step by step as well. For this demo, I'll be using the following, a [[Windows]] PC, [[Powershell]] run in an administrative session, an [[Microsoft Azure|Azure]] account, and Visual Studio Code. The first thing we'll need to do is install the Azure Command Line Interface, also known as the Azure [[CLI]]. There are two ways to install the Azure CLI. You can download the MSI file from [[Microsoft]]'s website, or you can go to the Microsoft Installer with Command tab. Since we'll be already doing everything in an administrative PowerShell session, what I'm going to do is copy this command and enter this in my current administrative PowerShell session. So once we enter the command, this can take a few seconds to minutes to install. So while this is installing, what I'm going to do is pull Chocolatey. So Chocolatey is a awesome open source tool that helps you manage your Windows packages. Again, since we're running everything from our administrative PowerShell session, what I'm going to do again is just copy this command and enter it into my current PowerShell session. Since we're waiting for it to download, we'll give it a few seconds. As you can see, it just finished downloading. One thing we can do to test is just type in Get-InstalledModule
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/installing-terraform?u=76281980&t=97)** and what this will do is show us all the current modules we have installed within our PowerShell library. So as you can see, this is pulling the Azure RM library and what we're going to do now is install Chocolatey. So we're going to hit Enter. So one thing you want to make sure is you have your execution policy set for bypass. This is going to take a second, again. And after we install Chocolatey, this is the simplest step. Since we'll be using this to download Terraform, all we do is input choco install terraform and what it will do is download Terraform into our current PowerShell session. I'm going to hit yes to all. So we're going to give this a second as it downloads Terraform. Now that we have Terraform downloaded, one thing we can do to double check to see if it is downloaded is we can just enter Terraform help in our current PowerShell session and it will bring up all of the commands that we can use in Terraform. And now that we have Terraform installed, it's time to get started in actually utilizing Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (10), [[Powershell]] (8), [[Microsoft Azure|Azure]] (5), [[Windows]] (2), [[CLI]] (2)
> **CLI Commands:** terraform (10), rm (1), make (1)
> **Tools:** powershell (8), visual studio (1), command line (1)
> **Prerequisites:** install (6), set up (2)
> **Env Vars:** cli (2), msi (1)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)

#### [Setting up Terraform for your Azure environment](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=0)** - [Instructor] Now that we've installed [[Terraform]] onto our computers, now we should create a directory in which we'd like to add our configuration files to. I'm going to create a folder called TerraformforAzure. And in this, I'm going to add a new file called main.tf. So within Terraform, your main configuration file will be called main.tf. So this is where kind of you'll be hosting your modules, your commands on what you would like to deploy in your environment. So now that we have that created, let's go into our Visual Studio Code environment and get connected to our [[Microsoft Azure|Azure]] accounts. So in order to do this, we'll open our terminal. Let's create a new terminal section. And since now we have the Azure [[CLI]] installed on our workstations as well, what we'll be using is using the Azure CLI commands to log into our Azure accounts. So all we do is type in az-login. If you are receiving an error when trying to run az-login to log into your Azure session, one thing you can do is try restarting your [[Powershell]] terminal by clicking this little trashcan right here that says kill terminal. And let's start a new one and enter the command az-login and it should now work. And what this will do is pull up our default web browser and allow us to log in to our Azure accounts. Once this pops up,
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-terraform-for-your-azure-environment?u=76281980&t=92)** you can close your current browser section, and as you can see, you are now logged into your Azure account. Now that we're connected to our Azure accounts, we can get started working with Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Terraform]] (3), [[CLI]] (2), [[Powershell]] (1)
> **CLI Commands:** terraform (3), az (3)
> **Tools:** terminal (4), visual studio (1), powershell (1)
> **Env Vars:** cli (2)
> **Speakers:** - [instructor] (1)

#### [Setting up your code repo for Azure DevOps](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=0)** - [Instructor] Now that we're logged into our [[Microsoft Azure|Azure]] accounts in our current Visual Studio Code session, one of the biggest things to be aware of while coding is source control. I'm sure everyone's gone through an experience of changing a portion of their code and breaking it and then having no clue what happened, and this is where source control is super important. For this module, we'll be looking at using [[GitHub]] to manage our code and check it in as we go. For this course, what I'll be doing is cloning the current Introduction-to-[[Terraform]] GitHub repo that will be linked to this course. All we have to do is click on this link again. So all we do is copy it here, and let's go back to our Visual Studio Code session. And all we do have to enter is [[Git]] clone and then right-click and enter the GitHub repository that we're looking to work in. So what this will do is add the GitHub repository and the current directory that we're working with. If the git commands aren't working, luckily, we're already using Chocolatey. You do have to be an administrative session, but all you have to enter is choco install git, and it will install the git packages for you. Again, Chocolatey makes everything super easy to manage. So if one of the commands don't work, just enter choco install git, and it should then restart your session and it should allow you to add the git clone command to get started. I'm going to cancel this and then clear out my session. Now that we have this Introduction-to-Terraform directory
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/setting-up-your-code-repo-for-azure-devops?u=76281980&t=98)** in our environments, we can now get started with Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[GitHub]] (4), [[Terraform]] (3), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** git (6), terraform (3)
> **Tools:** github (4), visual studio (2)
> **Prerequisites:** install (3)
> **UI Navigation:** click on (1), right-click (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** github repo (1)
> **Warnings:** be aware (1)


### 3. Getting Started with Terraform

[↑ Back to Table of Contents](#table-of-contents)

#### [Terraform commands](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=0)** - [Instructor] Now that we have our environments all set up and ready to go, let's take a look at the main commands we'll be using for this course. One of the most common commands you'll be using is [[Terraform]] init. This prepares your working directory for other commands throughout your configurations. We then have Terraform validate. This just checks whether your configuration is valid. Whether it's variables or typos, Terraform validate is really helpful to catch those errors. Next, we have Terraform plan. This shows all the changes that will be taking place with your current configuration. Even with our next command, Terraform apply, every time you run Terraform apply, it will also run Terraform plan at the same time to show you what you're going to create or update using your [[Infrastructure as code (IaC)|infrastructure as code]]. Both are super helpful to see your changes on what's going to happen once you apply that Terraform. So Terraform apply is absolutely essential since without this command, we can't deploy any of our resources or infrastructure that we'll be using for Terraform. And next, we have the most destructive one of all, Terraform destroy. So this will destroy all the previously created infrastructure with that Terraform configuration. So you want to be very careful when you're running Terraform destroy just to make sure you're not destroying any important resources. If you ever need reference for a command within your terminal, you can always run Terraform help, and this will pull a list of all the commands with an explanation of what they do in Terraform. During this course, we'll be using these key commands
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-commands?u=76281980&t=93)** to see our Terraform in action. Knowing these simple commands will quickly get you started on your Terraform journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (17), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **CLI Commands:** terraform (17), make (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Terraform workspaces](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=0)** - [Instructor] Next, let's take a look at common commands to manage workspaces within your [[Terraform]] terminal. So what exactly are Terraform command line interface workspaces? Workspaces are a way to create separate instances of state data, which you'll learn a little bit more about state data in a later module within the same working directory. So these are different from Terraform Cloud workspaces. So Terraform Cloud workspaces create separate working directories, while with the Terraform command line interface workspaces, you're working within the same directory, but it's creating separate files. For this demo, we'll be working in the Terraform [[CLI]] workspaces. In Terraform, most commands only work within the current selected workspace. And since most Terraform resources don't require unique names as part of the configuration, it's common to use the same Terraform configurations for multiple workspaces or environment. Which workspace that we're working in, is we enter Terraform workspace show, and it'll show the current workspace that we are working in. Another way to see all the workspaces we currently have is we can run Terraform workspace list, and this will list out all the current workspaces we have in this current configuration directory. As you can see, I also have a test workspace, but let's create a new one for a development environment. So all we enter here is Terraform workspace new, and let's call it dev, since it will be for our development environment.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-workspaces?u=76281980&t=94)** Now, that we've created a new workspace called dev, and we switched to it, let's say we want to switch back, what we can do is Terraform workspace select, and the name of the workspace where we want to work in. So let's go back to test since we'll be testing this infrastructure in a test environment. Now that we've learned a little bit about workspaces, typically with Terraform, you aren't going to be working in workspaces. You most likely will have separate directories for your configuration files, but it's good to know to separate your own environments since it is a command that you could potentially use to separate your environments within the same working directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (14), [[CLI]] (1)
> **CLI Commands:** terraform (14)
> **Tools:** command line (2), terminal (1)
> **Env Vars:** cli (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Terraform state](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=0)** - [Instructor] In this module, we'll be going over [[Terraform]] State. So what exactly is Terraform State? The state file maps real world resources to your configuration file, keeps track of your [[Metadata]] and improves performance for large scale infrastructure. Terraform State files are in [[JSON]]. While it may be tempting to directly edit the file, it is highly discouraged since it won't match your configuration files and will cause potentially more issues in the future. By default, state files are locally stored in a file called terraform.tfstate. In our previous module, when we learned a little bit about Terraform workspaces, you could also see that the Terraform local files were separated by what we listed our workspaces as. You can also store your state files remotely, in an as [[Microsoft Azure|Azure]] storage account, Terraform cloud, an S3 bucket or whatever your organization or you prefer. With state files, since this does store all your configurations and resources, your state file does refresh to update the state of your real infrastructure on Azure just to make sure things already match up. For example, if you have resource blocks that are already associated to infrastructure in your state file and already exist in your Azure portal, if you update that resource in the Azure portal, since it no longer matches your state file, what it will do is ask to import that resource so that it is up-to-date with your real infrastructure. So that's kind of why it's important
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/terraform-state?u=76281980&t=96)** to make sure your Terraform State file and your Azure portal resources do match since that will cause issues with your Terraform State file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[Microsoft Azure|Azure]] (5), [[Metadata]] (1), [[JSON]] (1)
> **CLI Commands:** terraform (9), make (2)
> **Tools:** azure portal (3)
> **Env Vars:** json (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Creating with Terraform

[↑ Back to Table of Contents](#table-of-contents)

#### [Resources](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=0)** - [Instructor] Now that we've learned a lot about [[Terraform]], it's time to get into resources. Terraform resource blocks are the most important part about Terraform, without resource blocks we can't implement any infrastructure, make any changes. It's the key foundation of why we can use [[Infrastructure as code (IaC)|infrastructure as code]]. Resource blocks describe one or more infrastructure objects such as virtual networks, [[Virtual Machines]], and many more in a given setting. When you're writing a new configuration for the first time, the resources you'll be creating only exist in the configuration file and won't actually represent any real infrastructure until you run Terraform apply. When you do create new infrastructure, that object is then saved in your state file. So this allows you to update and destroy your resource and future changes for the resource blocks that have already an associated object. Kind of going back to that previous state module, it will compare the state file to make sure that it matches and it will make any updates to the object if necessary. So let's quickly take a look at a resource block. The resource block declares a resource of a given type. So for example, this is where we would place, where we want to create that resource type with a given local name. So for this resource block, it would be example which would be referenced throughout the module, but has no significance outside of this module or configuration files scope.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/resources?u=76281980&t=96)** The resource block allows you to define the parameters of the resource, such as the name, location, or for example with a virtual machine, which type of skew you want to use or operating system. So this is what would be declared in a resource block and it's absolutely essential for your Terraform configuration files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Virtual Machines]] (1)
> **CLI Commands:** terraform (5), make (3)
> **Analogies:** such as (2), for example (2)
> **Speakers:** - [instructor] (1)

#### [Calling Terraform provider](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=0)** - [Instructor] Now that we learned a little bit about [[Terraform]] resources, let's learn about Terraform Providers. Terraform relies on providers to interact with cloud providers, [[SaaS]] providers, or other APIs. Without Terraform providers, we can't create any resources or configure any infrastructure. So you must declare a Terraform provider to even get started with Terraform. Most providers configure specific types of objects such as infrastructure, naming conventions, generating random numbers or strings, just to help you implement and simplify your infrastructure and configurations. For this module, we'll be using the Azurerm provider but you can also take a look at all the different types of Terraform providers on the Terraform registry. To get the Azurerm provider which will be using for this course, you can go to the [[GitHub]] repository that will be linked to the exercise files or you can go on the Terraform registry. You can click on [[Microsoft Azure|Azure]], use provider, and you can copy and paste this into your visual studio code configuration file. Let me quickly switch over. Now that we have the provider in our configuration code. The next step that we have to do is actually install the provider to make sure that we can utilize it in our environments. This is super easy to do. Going back to our commands. The only thing we have to run in our terminal to install the provider is Terraform init.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/calling-terraform-provider?u=76281980&t=95)** What this will do is look at the providers, make sure that it is installed and added to our state file. So as you can see here, we have successfully initialized our Terraform code, which means that we can get started with the Azurerm provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (11), [[SaaS]] (1), [[GitHub]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** terraform (11), make (2)
> **Prerequisites:** configure (2), install (2)
> **Tools:** github (1), visual studio (1), terminal (1)
> **UI Navigation:** go to (1), click on (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)

#### [Creating a resource group in Terraform](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=0)** - [Instructor] Now that we have our [[Terraform]] provider ready to go, it's time to create our first resource block. For this first resource block, we'll be creating a resource group, which we'll be putting all of our Terraform resources in. To begin, we want to start with resource and then call the azurerm_resource_group provider block. And now let's have the local name, which we can reference this block throughout our configuration code. I'll be naming it main since this will be the main resource group that we'll be putting all of our resources in. The name of this resource group, you can name it whatever you'd like but I'm going to name mine learn-tf-rg and the location of eastus, which is the location where I'll be putting all my resources in. Now that we have our first configuration block created, we can open our terminal up. Make sure you're logged into your [[Microsoft Azure|Azure]] account. So we can enter an az login. This will pull up our login information. Now that we're logged into our Azure account, we can run terraform plan to see which resources will be created. It should only be the resource group. So give it a second as it's running plan
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=92)** as it's going to try to match up with your resource block with your state file. And if you're running into an error saying that there are no configuration changes and your configuration is up to date, make sure you're saving the file as you go since that can be a common issue or double check the directory you're working in since you have to be in the directory that your configuration file is hosted in. Now that we've run terraform plan, you can see the changes that it'll apply as soon as we run terraform apply. So this will be creating a resource group named learn-tf-rg in the eastus region. So now let's run terraform apply and it's going to run terraform plan again just to make sure those are the changes we want to create. So let's give this a second. And once it'll prompt us whether we want a yes or no, we'll enter in yes and then let's give it a second to see how that resource is implemented in our Azure environment. So I'm going to run yes here. And as you can see, this is being added to my workspace of test in our previous module that we went over Terraform workspaces. The state file will then be hosted in my test state files. Don't worry if you don't see the dev workspace. But I do want to emphasize the importance of the state file. We'll learn more about state within the next module. However, it is something we want to keep secure and make sure we're not uploading
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-resource-group-in-terraform?u=76281980&t=186)** to our [[GitHub]] repository since it will contain sensitive information of our Terraform infrastructure. As this is running and creating resources in our Azure environment, let's take a look at how it changed the state file. So since we're working in the test workspace as you can see here, if we go to the test state file, you'll see that it created [[JSON]] to create that resource group. So now if we go to our Azure portal, and go to our resource groups, you'll see that this resource group was created right now. And let's get started with our next modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[Microsoft Azure|Azure]] (5), [[GitHub]] (1), [[JSON]] (1)
> **CLI Commands:** terraform (9), make (4), az (1)
> **Tools:** terminal (1), github (1), azure portal (1)
> **UI Navigation:** go to (3)
> **Code Identifiers:** azurerm_resource_group (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)


### 5. Terraform in Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a virtual network](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=0)** - [Instructor] Now that we have a resource group created, let's get started on creating our end goal of a virtual machine. The first thing we need to create is a virtual network. [[Microsoft Azure|Azure]] virtual networks allow your resources to talk to each other and is one of the bases that we need to create first in order to create our virtual machine since all the pieces will fit together at the end. To create a virtual network resource block, it's very similar to a resource group. However, we need different parameters to create a virtual network. So similarly on how we called the azurerm resource group, we'll be entering azurerm but virtual_network this time instead of resource_group since we're creating a virtual network. Again, I'm going to reference this as main since I like to kind of keep my configurations together based off where they're put. Since this will be put in our main resource group, I'm going to name the local location of main. The name is what we're going to name our resource group. So I'm going to keep the same naming convention. However, instead of rg, I'm going to change it to vnet since this is our resource group in the location of eastus. And going back to our previous module where we learned about resources and how resources are configured, we can actually reference previous resource blocks by entering azurerm_resource_group
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=99)** or the resource type we want to reference. The local name, which is main and then the type of resource parameter that we're referencing. Since this is a location, I'm going to enter location at the end. And for the VNet, we do need to place it within a resource group, so very similarly to how we referenced the location, we enter resource_group_name this time.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=131)** And then very similarly on how we referenced the location. Instead of writing location at the end, we're just going to change it to name. And this really simplifies it. Since we don't have to reference and rename everything all over again, we can keep that all within the azurerm_resource_group container. So if we ever change the resource group name, it will automatically update the [[Representational State Transfer (REST)|rest]] of the information and configurations within our [[Terraform]] configuration file. So this is a great way. So for example, if I changed my resource group location to East US, it will change the location for all my resources in this configuration to match the resource group. So now that we have our main components, what we want to do is now add our address space. That's one of the most essential parts of a virtual network since it allows our resources to talk to each other. So this goes to CIDR notation. I'm going to keep this simple with a 10.0.0.0/16.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-network?u=76281980&t=201)** And this does need to be in quotations for Terraform. Now that we have this created, what we can do, if you want to run this right away is run terraform plan or apply to create this resource. I'm going to run terraform apply so that we can see that it's added to a resource group. So let's give this a second. So what this is going to do is refresh your state file to make sure to matches [[Real-Time]] configuration and shows the changes that it's going to create. So now we want to enter yes and what it's going to do is create our virtual network in the resource group that we previously created in the previous module. So let's give this a second as it creates the resource. But when we check our resource group in the Azure portal, you'll see that this virtual network has been created in the same resource group and location as our resource group. If we go to our resource group, once it's refreshed, you can see that it created the virtual network that we created within our Terraform code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Microsoft Azure|Azure]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Real-Time]] (1)
> **CLI Commands:** terraform (5), make (1)
> **Code Identifiers:** azurerm_resource_group (2), virtual_network (1), resource_group (1), resource_group_name (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** cidr (1)
> **Versions:** 10.0.0 (1)
> **Tools:** azure portal (1)

#### [Creating a subnet](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=0)** - [Instructor] For this module, we'll be learning on how to create a subnet resource block in [[Terraform]]. Since we've just created our azurerm_virtual_network resource block, we're now going to create our subnet. So there are actually two different ways to create a subnet within our azurerm provider. We can create the subnet in the virtual network resource block or we can create its completely own resource block. For the purposes of this demo, I am going to be creating its own resource block and keeping with the naming convention, I am going to reference this as main locally since this will be the main subnet that we'll be using throughout this configuration file. Again, really similarly on how we've been referencing our previous modules, we're going to do the same within the azurerm_subnet resource block. So first, let's create a name. So I'm going to keep this naming convention that we've been doing throughout. We'll add subnet and then eastus. Each resource block needs a different type of configuration or argument. So arguments aren't necessarily standardized throughout. It's very resource dependent. So for the azurerm_subnet resource block, we don't need a location but we do need the virtual network name that we want to add the subnet to since a subnet is just a subset of IP address spaces within a virtual network.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-subnet?u=76281980&t=94)** So this can help increase your security but also organization of those address spaces. So we have to reference the virtual network name that we want to add the subnet to. So very similar on how we would reference a virtual group. What we want to do is reference this time the resource type of a virtual_network and the local name of this virtual_network is main and we want to grab the name argument from that resource block. and we'll do the exact same for the resource group, except we'll be referencing the resource_group block instead. So we have our azurerm_resource_group.main and .name since we're referencing the name argument. And since the subnet is within the virtual network, we do need to find the address prefixes that we would like to be within this subnet. So we need the address_prefixes argument. With the address_prefixes, it does need to fall within the virtual network, so I'm going to create this as a 10.0.0.0/24. Since that falls within my subnet, it won't conflict with any of my previous existing resources. Now that we have our subnet ready to go, we can now go into creating our [[NIC|network interface card]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (1), [[NIC|Network interface card]] (1)
> **Code Identifiers:** azurerm_subnet (2), virtual_network (2), address_prefixes (2), azurerm_virtual_network (1), resource_group (1)
> **CLI Commands:** terraform (1), find (1)
> **Versions:** 10.0.0 (1)
> **Speakers:** - [instructor] (1)

#### [Creating an internal network interface](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=0)** - [Instructor] Now that we've created the base for our networking, let's create the [[NIC|network interface card]] that we want to be attached to our virtual network. Network interface cards are super important since it allows your [[Virtual Machines]] to talk to each other or communicate with different resources within your [[Microsoft Azure|Azure]] environment. NICs are connected to subnets within a virtual network. They can communicate with different network interface cards within the virtual network or subnet without any extra configuration. So when you set up your virtual network, and you define that address space or subnet space, you want to make sure it doesn't overlap with other resources you want to talk to. Otherwise it won't work. For the purposes of this demo, we're going to be creating an internal network interface card so that your virtual machine won't be publicly accessed over the internet. So this will be within the virtual network and subnet that we've just created. Just to kind of give an extra layer of security since it won't be able to communicate over the internet. So one of the best parts about [[Terraform]] is that resource blocks are, at this point, I'm sure you're catching on, super uniform on the arguments that you need. And it just varies by resource type. So I'm actually going to call this one a little bit different. Instead of referencing it as main, I'm actually going to reference it as an internal one, so we have resource azurerm_network_interface. So this will create our network interface card
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=94)** that we want to attach to our virtual machine. Since this will be internal and it won't actually go over the internet, I like to make sure that I do mark it as internal and if I do create an external one, I'll create that local name as external just so I know what to reference it as. So keeping with my standardized naming convention, I'm going to name it learn-tf-[[NIC]]-internal and then eastus. This time, we do need to reference a location. So I want to keep this within the same resource group that I've been creating all my other resources in. So let's reference azurerm_resource_group.main.location. Now we have to reference the resource group name that we'll be putting it in. So exactly how we've been doing it in our previous modules. We're going to do azurerm_resource_group.main.name this time. One big key difference with an azurerm network interface is we do actually have to make the ip_configuration. So let's create the ip_configuration. So this is a resource block configuration within a resource block. So for this, we get to name our ip_configuration. I'm going to name it internal since this will be our internal network interface card that allows our virtual machine to talk
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-an-internal-network-interface?u=76281980&t=187)** to internal resources. And since a NIC is connected to a subnet, we need to get the subnet_id. Since we don't have the resource ID, what we can do is actually reference the subnet resource block with ID at the end. This really simplifies it. So instead of going to the Resource Explorer and getting that resource ID from the Azure portal, what we can actually do is reference that resource block of subnet.main and just get the ID. So what this will do is once this resource is created, it can actually grab that subnet_id and add it to your ip_configuration. And since this is a private_ip, we have to choose how the address is allocated. So it needs an argument of private_ip_address_allocation. And I'm going to do it as Dynamic. You can choose whatever you need. You can make it static with a subnet space. For the purposes of this demo, I am going to make it dynamic, so this will automatically assign the NIC to a IP address within the subnet that we've assigned it to. Now that we have our NIC created, it's time to actually create our virtual machine and kind of close everything off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC|Network interface card]] (4), [[NIC]] (4), [[Microsoft Azure|Azure]] (2), [[Virtual Machines]] (1), [[Terraform]] (1)
> **Code Identifiers:** ip_configuration (4), azurerm_resource_group (2), subnet_id (2), azurerm_network_interface (1), private_ip (1)
> **CLI Commands:** make (5), terraform (1)
> **Env Vars:** nic (3)
> **Definitions:** is a  (2)
> **Tools:** azure portal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating a virtual machine](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=0)** - Now that we have all of our pieces ready to go, it's time to create our virtual machine. There are a few different [[Microsoft Azure|Azure]] RM virtual machine resource blocks. For this demo, I'll be using the Azure RM [[Windows]], virtual machine. So it's Azure RM Windows virtual machine. They have a few different Azure RM virtual machine resource blocks. They have one specifically for a [[Linux]] virtual machine, a generic virtual machine resource block. For the purposes of this demo, we'll be using the Azure RM Windows virtual machine, since we'll be creating a Windows virtual machine with this demo. Since it is a virtual machine, we do need different arguments. Again, to start off with we do need to name all of our resources. So this will keep with our standard naming convention that I've been using throughout. So learn dash TF dash VM, since that's a resource type, and then east us, since that's the location I'll be placing it in. We do need to choose the resource group that we want to add our virtual machine into. So exactly how we've been referencing our previous modules, we'll be referencing Azure RM resource group.main.name. I've just realized now, I forgot to add the local reference within my Azure virtual machine resource block. I can quickly add that in. So now that's configured correctly.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=93)** We do need to add the location to the virtual machine. I'm going to place it within the same location as the resource group as well.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=107)** And this time we're referencing the location argument. With the virtual machine we do need to choose the size of the virtual machine. So this is a size argument. It is required to deploy it. I'm going to use a standard B1s series. This is mainly just for [[Cost Management]]. We will be destroying our resources at the end of this tutorial, but we want to make sure we are minimizing and optimizing our cloud costs. And with a virtual machine we do need an admin username and password. I'm going to create mine as user dot admin. You can create your username to whatever you'd like. And one important thing to know with [[Terraform]], your admin password to your virtual machine will be saved in plain text within your state file. So it's super important to keep this secure. For best practices with the admin password, we do want to pass that in as a variable. So for the purposes I'm just going to keep this as enter password. I will be changing it personally for myself, but make sure it's a secure password and you want to make sure your state file is secure, so that's not shared. So again, best practices, add that in as a variable and we want to make sure we're not passing our state files, since that will actually have our password saved in plain text as well. And we want to eliminate all the spaces that we'll potentially having our password in plain text. And now that we have our main components
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=200)** of our virtual machine we do need to attach a [[NIC|network interface card]] so that it can talk to other resources within our Azure environments. So we have the network interface, IDs, argument. So this is in square brackets. And one thing that Terraform makes really simple is now we don't actually have to look within the Azure portal to find our network interface card IDs. We could actually reference it within our Terraform code. So since we've created our network interface card within our Terraform code all we have to do is reference the internal network interface card that we've created and the ID argument. It's not within the resource block, but every single resource block that you create for the most part will have an ID argument that you can reference throughout your Terraform modules. Now that we have our network interface card attached to our virtual machine, we need to create an OS disk argument within. So we need to create our OS disk block. So this is just how you want your data to be cached. So I want this as a read write. And then we have to enter the storage account type. I do want to note, this is case sensitive, so I'll be using a standard locally redundant storage. If you do have this all lowercase, it will error out on you,
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=297)** so you want to make sure it is all uppercase for LRS and the S is also capitalized. So now that we have our OS disconfigured, we need to choose our source image that we want to use for our Windows virtual machine. So we have our source image reference block within our virtual machine resource block. So we have to enter the publisher of our resource image. So since this is a [[Microsoft]] [[Windows Server]], we'll enter that in the publisher. The offer is a window server, so that is also required within our source image reference. Next, we want to choose the SKU. That's basically just choosing which type of image you want to choose. So you can choose a 2019 data center, 2012. For this demo, I'll be using a SKU of a 2016 data center with the latest version.
>
> **[6:09](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/creating-a-virtual-machine?u=76281980&t=369)** Now that we have our virtual machine resource block configured and ready to go, it's now time to deploy our resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (9), [[Windows]] (5), [[Terraform]] (5), [[NIC|Network interface card]] (4), [[Linux]] (1)
> **CLI Commands:** rm (6), make (5), terraform (5), find (1)
> **Definitions:** is a  (4)
> **Env Vars:** sku (2), lrs (1)
> **Tools:** azure portal (1)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### [Deploying Terraform code](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=0)** - [Instructor] Now that we've created all our resources and have our pieces together, what we want to do is log in to our [[Microsoft Azure|Azure]] accounts. So using the Azure [[CLI]], we want to enter az login. And now that we've successfully logged into our Azure account, it's going to pull up all our subscription and tenant information. So after that, we can run [[Terraform]] plan, and this will show us all the configuration changes that are going to occur since we've last run terraform apply. Mine will potentially have less changes than you since we ran terraform apply earlier on. So let's give this a few seconds to minutes to load. Since it's double checking our state file with our previous configurations, as you can see, it just refreshed the state to see if any changes should occur. So now it's showing all the actions and configurations that will happen once we run terraform apply. I do want to know, I did shorten the name in the [[Windows]] Virtual Machine resource block. Since, in the previous module, the name was actually too long and it wouldn't let me create the Azure M Windows Virtual Machine. So now that we have terraform plan run successfully, we can run terraform apply. This will run plan again, and, as you can see, it's updating the state file each time I run it. So let's give this a second to load, and it'll give us an option of yes to make sure we confirm those changes and we want to apply them.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=93)** You could run terraform apply with a flag of auto approve if you want to bypass this, but I would always double-check to run plan to make sure you're not making any changes that would accidentally ruin your environment. So now that we're entering yes, it's going to apply these changes to our Azure infrastructure. So this will take a few seconds to a few minutes or a little bit beyond that, depending the size of your configuration file. This one shouldn't take too long since it is just [[Virtual Machines]] and a few networking components. So, as you can see, it's now creating my windows_virtual_machine. And, as this goes, let's quickly look at our test terraform state files since that's the workspace that we're working in. As you can see, we're applying these actions to our workspace of test. So if we go to our test1, you can see that it's actually all in [[JSON]] as these resources are being created. And that's being transferred over to your Azure provider through the [[Microsoft]] API. As you can see, our terraform apply was successful with the changes that we've created. Now it's time to check our Azure portal to make sure that the changes actually happened. So we can go to our Resource groups. You can see that our learn-tf-resourcegroup and our East US region was created. It will automatically create a NetworkerWatcherResourceGroup
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=188)** if you don't already have one. So don't be alarmed if you see that. And as we open our resource group, you can see that all our resources were created here. Now that we have all our resources created and we're done with this demo, I'm actually going to run terraform destroy. So this will destroy all the resources that are currently within the test terraform state file. You do want to be careful with this 'cause you can accidentally destroy resources that you don't want to. So I wouldn't use this very often unless you're destroying an entire environment like we are for this demo. So it's going to load very similarly to terraform plan, but it's going to show us all the resources we're going to destroy instead. So now that we've run terraform destroy, you can see that it's destroying all of our Terraform resources in our environment. And we can see that occur within our Azure portal as we refresh. So if I refresh here, you can see that these resources are slowly being deleted or destroyed. By the end of terraform destroy being completely run, this resource group will no longer exist. So, as you can see, it's still destroying. Once the destruction is complete, you'll have your terraform destroy complete with the amount of resources that you've destroyed. Now that you've learned a little bit of the basics of Terraform, you can now get started with creating your own resources to better help your environment
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/deploying-terraform-code?u=76281980&t=281)** and learn Terraform a little bit further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (18), [[Microsoft Azure|Azure]] (8), [[Windows]] (2), [[CLI]] (1), [[Virtual Machines]] (1)
> **CLI Commands:** terraform (18), make (3), az (1)
> **Env Vars:** cli (1), json (1), api (1)
> **Tools:** azure portal (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** windows_virtual_machine (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Experiment and continue to learn](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-terraform-on-azure-2022/experiment-and-continue-to-learn?u=76281980&t=0)** - [Alex] That brings us to the end of the course and we've only scratched the surface of what infrastructure is code and [[Terraform]] has to offer. This isn't the end and I encourage you to learn more by adding variables, modules and other resources to your Terraform code, and of course, by experimenting more and continuing to learn more about Terraform. Again, my name is Alex Illarionov and thank you for watching. Feel free to connect me with me on [[LinkedIn]] if you have any further questions, but otherwise, I wish you the best on your Terraform learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (4), [[LinkedIn]] (1)
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