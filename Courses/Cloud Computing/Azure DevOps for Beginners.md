---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: azure-devops-for-beginners-23145679
url: "https://www.linkedin.com/learning/azure-devops-for-beginners-23145679"
duration_minutes: 157
duration: 2h 37m
level: Beginner
updated: 9/3/2024
learners: 6038
skills:
  - Azure DevOps Services
  - DevOps
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH12e1KVuTKRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725380577627?e=2147483647&amp;v=beta&amp;t=NE0fA7tD47YT56mwrZNsse39SGP-SBRw_Pk0RKSpIB4"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an Azure Developer]]'
prev_courses:
  - '[[Azure Storage Essential Training (2021)]]'
next_courses:
  - '[[Developing Ci Cd Solutions With Azure Devops]]'
path_nav: '[{"path":"Getting Started as an Azure Developer","position":6,"total":7,"prev":"Azure Storage Essential Training (2021)","next":"Developing Ci Cd Solutions With Azure Devops"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/azure-devops-services
  - skill/devops
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Azure%20DevOps%20for%20Beginners.md)

![Azure DevOps for Beginners](https://media.licdn.com/dms/image/v2/D560DAQH12e1KVuTKRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1725380577627?e=2147483647&amp;v=beta&amp;t=NE0fA7tD47YT56mwrZNsse39SGP-SBRw_Pk0RKSpIB4)

# Azure DevOps for Beginners

> Azure DevOps is a bundle of services to help developers ship high-quality products faster. In this course from Learn-it Labs, instructor Walt Ritscher teaches you everything you need to get up and running using this DevOps solution. Walt gives you an overview of the Azure DevOps services, then explains how to create projects and add users to organizations or teams. He presents a quick tour of Azur

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679) | 2h 37m | Beginner | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Use Azure DevOps to enhance application development](#use-azure-devops-to-enhance-application-development)
  - [Getting the most from this course](#getting-the-most-from-this-course)
- [**1. Setup and Overview**](#1-setup-and-overview) (10 videos)
  - [Overview of Azure DevOps](#overview-of-azure-devops)
  - [Where to access Azure DevOps](#where-to-access-azure-devops)
  - [Understand the DevOps price plans](#understand-the-devops-price-plans)
  - [Log in to Azure DevOps web portal](#log-in-to-azure-devops-web-portal)
  - [Tour the DevOps portal](#tour-the-devops-portal)
  - [Create an Azure DevOps project](#create-an-azure-devops-project)
  - [Create a project with the Microsoft demo generator](#create-a-project-with-the-microsoft-demo-generator)
  - [View the generated project](#view-the-generated-project)
  - [Add users to an organization](#add-users-to-an-organization)
  - [Add users to an Azure DevOps team](#add-users-to-an-azure-devops-team)
- [**2. Azure Boards**](#2-azure-boards) (14 videos)
  - [Manage your team workflow with Azure Boards](#manage-your-team-workflow-with-azure-boards)
  - [Tour of Azure Boards](#tour-of-azure-boards)
  - [Create a work item](#create-a-work-item)
  - [Boards and backlogs](#boards-and-backlogs)
  - [Set sprint cadence](#set-sprint-cadence)
  - [Boards and sprints](#boards-and-sprints)
  - [Kanban board basics](#kanban-board-basics)
  - [Add columns and swimlanes to a Kanban board](#add-columns-and-swimlanes-to-a-kanban-board)
  - [Set work in progress (WIP) limits](#set-work-in-progress-wip-limits)
  - [Kanban board tag settings](#kanban-board-tag-settings)
  - [Kanban board custom styles](#kanban-board-custom-styles)
  - [View work progress with dashboards](#view-work-progress-with-dashboards)
  - [Create custom work item queries](#create-custom-work-item-queries)
  - [Add a custom query to the dashboard](#add-a-custom-query-to-the-dashboard)
- [**3. Azure Repos**](#3-azure-repos) (9 videos)
  - [What are Azure repos?](#what-are-azure-repos)
  - [View the parts of Azure repos](#view-the-parts-of-azure-repos)
  - [Create an Azure repo in the portal](#create-an-azure-repo-in-the-portal)
  - [Clone the repo to a developer computer](#clone-the-repo-to-a-developer-computer)
  - [Create a repo branch](#create-a-repo-branch)
  - [Edit and commit to repo](#edit-and-commit-to-repo)
  - [Push the branch to DevOps](#push-the-branch-to-devops)
  - [Create a pull request](#create-a-pull-request)
  - [Team review of pull request](#team-review-of-pull-request)
- [**4. Azure Pipelines**](#4-azure-pipelines) (12 videos)
  - [What are Azure pipelines?](#what-are-azure-pipelines)
  - [Continuous integration with build pipelines](#continuous-integration-with-build-pipelines)
  - [The pipeline components](#the-pipeline-components)
  - [Explore the pipeline section of the DevOps portal](#explore-the-pipeline-section-of-the-devops-portal)
  - [Explore the example web project](#explore-the-example-web-project)
  - [Add a service connection to Azure Resource Manager](#add-a-service-connection-to-azure-resource-manager)
  - [Explore the pipeline templates](#explore-the-pipeline-templates)
  - [Add a build pipeline](#add-a-build-pipeline)
  - [Manually run and troubleshoot a pipeline](#manually-run-and-troubleshoot-a-pipeline)
  - [Update the repo to trigger the build](#update-the-repo-to-trigger-the-build)
  - [Add a release pipeline](#add-a-release-pipeline)
  - [Use custom variables in the pipeline](#use-custom-variables-in-the-pipeline)
- [**5. Extending DevOps**](#5-extending-devops) (9 videos)
  - [Extensibility and integration overview](#extensibility-and-integration-overview)
  - [Add Azure DevOps apps to Slack](#add-azure-devops-apps-to-slack)
  - [Configure Slack channel to work with DevOps](#configure-slack-channel-to-work-with-devops)
  - [Examine configuration messages](#examine-configuration-messages)
  - [Watch integration message flow into Slack](#watch-integration-message-flow-into-slack)
  - [What extensions can contribute](#what-extensions-can-contribute)
  - [Use the marketplace to install free extensions](#use-the-marketplace-to-install-free-extensions)
  - [Use the code search extension](#use-the-code-search-extension)
  - [Use the persona extension](#use-the-persona-extension)
- [**6. Additional Topics**](#6-additional-topics) (3 videos)
  - [Streamline dependencies with Azure Artifacts](#streamline-dependencies-with-azure-artifacts)
  - [Enhance testing efficiency with Azure Test Plans](#enhance-testing-efficiency-with-azure-test-plans)
  - [GitHub actions versus Azure Devops](#github-actions-versus-azure-devops)
- [**7. Continue Your Journey**](#7-continue-your-journey) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use Azure DevOps to enhance application development](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=0)** - [Walt] Creating software with a team requires a set of tools to help plan the project, collaborate on code, and run test cases, and then build and deploy the code efficiently. It's natural for software vendors to bundle these services together. Nowadays, we call these [[DevOps]] suites. Over the years, [[Microsoft]] has adopted the use of DevOps practices and created tools that bring the DevOps workflow to everyone. Hey there, I'm Walt Ritscher. Join me and we'll explore how development teams can manage work efficiently using [[Microsoft Azure|Azure]] Boards. There's a section in this course on Azure Repos where you can see how to use Azure DevOps to host your source code. Next, we'll see how Azure Pipelines can help you host build and deploy your code in the cloud. Finally, we'll look at how Azure DevOps integrates with other tools and how to customize your processes with extensions. Let's go explore Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (6), [[Microsoft Azure|Azure]] (6), [[Microsoft]] (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [walt] (1)

#### [Getting the most from this course](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=0)** - [Instructor] During this course, we'll explore the range of [[Azure DevOps Services]]. Most of the content in the course focuses on [[Microsoft Azure|Azure]] Boards, Azure Repos, and Azure Pipelines, which are the most popular services. We are exploring Azure [[DevOps]] with a broad scope to help newcomers get a realistic overview of the topic. However, it's important to note that this course will not cover the general principles of DevOps. Understanding DevOps principles is essential for modern development. DevOps is a set of practices that combine [[Software Development]], Dev, and IT operations, Ops. It aims to shorten the system's development lifecycle and ensure the [[Continuous Delivery (CD)|continuous delivery]] of high-quality software. It involves collaboration, automation, [[Continuous Integration (CI)|continuous integration]] and delivery, monitoring and feedback. The main goal of DevOps is to create a culture and environment where building, testing and releasing software can happen rapidly, frequently, and more reliably. In this course, we are focusing specifically on [[Microsoft]]'s Azure DevOps. While we'll cover many topics, it's important to be realistic. It's not possible to cover every aspect of Azure DevOps in just a few hours. My goal is to identify the core elements of Azure DevOps and provide a broad overview of what Microsoft offers. We are going to look at the big picture. Later, you can drill down into the parts that are most interesting to you or essential to your organization. When it's time to dive deeper into DevOps, consider exploring additional courses available on [[LinkedIn]] Learning. These courses cover various aspects of DevOps
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=93)** from advanced automation techniques to in-depth practices for continuous integration and deployment. In addition to the general DevOps principles, there is a wealth of Azure DevOps specific content available. After completing this course, you'll find even more to explore. Each of these topics is fascinating and worthy of a deeper look. Since this is an overview of Azure DevOps, each chapter reveals the key parts of one DevOps area. Because we're exploring at high altitude, there are no practice files or follow along walkthroughs in the course. There is no setup necessary to enjoy this course. As for prerequisites, there are none, just your desire to learn more. Now that we've established the general idea of the course, it's time to explore Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (15), [[Microsoft Azure|Azure]] (10), [[Continuous Integration (CI)|Continuous integration]] (2), [[Microsoft]] (2), [[Azure DevOps Services]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Setup and Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of Azure DevOps](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=0)** - [Instructor] Building applications is usually a team effort. Successful teams find effective ways to work on software at every stage of the development lifecycle. In recent years, we've added [[DevOps]] to the development process to help standardize and automate more phases of the development workflow. DevOps is a set of practices that combines [[Software Development]], Dev, and IT operations, Ops. It aims to shorten the development lifecycle and ensure the [[Continuous Delivery (CD)|continuous delivery]] of high-quality software. DevOps builds on several principles. Think of it as a combination of shared planning tools, a shared code base, [[Continuous Integration (CI)|continuous integration]], test-driven techniques, and automated delivery and deployment. None of these principles are new. We've used them in the past. What is new is this idea of DevOps as a practice. We've given it a concrete name, it emphasizes collaboration between all parts of the IT organization and the continuous delivery of software. You can think of DevOps as a cycle, the steps that happen through the development process. On the developer side, we plan the work, code the feature, build and compile the application, and run tests to ensure it works and doesn't break anything. On the operation side, we deploy the app or update the app. Then the application is used, and the Op team monitors and analyzes whether it's working as planned, then the cycle repeats. One key aspect of DevOps is the attempt to automate everything in this application lifecycle, at least the parts that can be automated.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=93)** Code testing is very useful. A system where every code commit triggers an automated test suite ensures that software problems are discovered early. The sooner we find bugs and issues, the less impact they have on your application. Automation helps reduce the number of bugs that reach the customer's computer or phone. They free up developers' time, allowing them to focus on creating new features, rather than manually testing existing ones. They give developers the confidence to make changes, knowing that the test will catch any potential issues. Automated builds are a fundamental part of DevOps, serving as a key component of the continuous integration or CI process. In fact, this is usually a precursor to running automated tests. In compiled languages like C#, when updated code is committed to the source control repository, it automatically triggers a build, including compiling the code. Automated builds are also useful for non-compiled languages like [[JavaScript]]. During this process, the code is minified and transpiled, and multiple JavaScript libraries are bundled into a single file, which can improve website performance. It's better to automate the code integration into a shared repository. Teams and individuals can work on small segments of the bigger application. Starting an automated build of the application when code is committed ensures that the build is functional. Then the automated test tools can verify that there are no breaking changes. With automated integration, there's no need to schedule testing or have test admins invoke the test suite. Because the integration happens frequently, most code changes are small,
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=186)** which means it's easy to roll back. Automated deployment is a key aspect of DevOps. It ensures that the process of moving code from your development environment to production is streamlined, consistent, and reliable. This not only reduces the risk of human error, but also allows for faster and more frequent deployments. With continuous deployment, updates and new features can be delivered to customers more quickly and efficiently. Bug fixes can be deployed as soon as the tests are complete. And don't you think it's a good idea to automate environment provisioning? It ensures that the development, testing, and production environments are consistent, which significantly reduces the it-works-on-my-machine problem. Teams can create identical environments at every stage of the development pipeline. This not only improves the reliability and predictability of deployments, but it also accelerates the development process, as developers can work in an environment that mirrors production. [[Microsoft]] adopted the DevOps workflow for its own development processes. They've been automating key parts of their application lifecycle for years. Microsoft bundles these services into a suite of team tools. When we use these tools, we are benefiting from the work and improvements done to ensure their tools can handle the massive enterprise-wide projects. This set of tools is called [[Microsoft Azure|Azure]] DevOps, a new name for services that have been around for many years. If you've heard about Visual Studio Team Services, and the other names shown here, those are the predecessors. The services provided are the same regardless of the new name. One last point on the new name. You can think of it as a rebranding of some developer services to align with this new vision.
>
> **[4:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=280)** To clarify, Azure contains all the [[Cloud Services]] from Microsoft. This is where you find cloud [[Databases]] and serverless functions, where you can configure [[Virtual Machines]] and other services. Those are Azure. You can use those services without needing the DevOps portion. Azure DevOps is a separate, cloud-based toolset designed to enhance team workflows. Currently, there are five categories of services available. Azure Boards, Azure Pipelines, Azure Repos, Azure Test Plans, and Azure Artifacts. Use Azure Boards to track work with Kanban boards, with backlogs, team [[Dashboards]], and custom reporting. Work can be tracked across teams, we get drag-and-drop sprint planning and flexible work item tracking. Here's a sample of a Kanban board from the Azure documentation site. In this view, we can see the work progressing from new, to active, then to staging, and then to deployed. Azure Pipelines provides services to automate your build, integration, and deployment process. It provides a CI/CD system that can work with multiple languages, code can be pulled from popular source control systems like [[GitHub]] or other [[Git]] providers, it has hosted [[Windows]], macOS, and [[Linux]] build agents, also, integration with Visual Studio App Center enables mobile deployments. Use Azure Repos to host your source code repository. It supports Git, of course. Also, Microsoft has its own source control system called Team Foundation [[Version Control]]. Yes, Microsoft bought GitHub,
>
> **[6:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=374)** which is the biggest Git online repository, so you can always host your code repositories there instead. If you do host with Azure Repos, you'll get unlimited public and private repositories. Azure Test Plans provides a testing platform for your application. Test your application by executing tests across the desktop or web apps, run tests and log defects from your browser, track and assess quality throughout your testing lifecycle. It supports manual tests. You can plan, execute, and track scripted tests with defect tracking and end-to-end traceability. Plus it has exploratory tests, where you simultaneously learn about the app code and test execution of your application. Here's a sample of a test plan report from the Azure documentation site. The last piece of DevOps services is Azure Artifacts. Think of this as a way to manage dependencies in your code base. As a developer, you may already be familiar with the idea of [[Package Management]] platforms such as [[npm]] or NuGet. Use artifacts to build a combined feed of all your dependencies in your organization, including your private proprietary packages. Then you can work with your artifacts as the single source of those dependencies. To summarize, Azure DevOps contains a set of useful tools that enable your development and operations teams to live in harmony. Use it to plan your next set of application features and much more. Currently, Azure DevOps consists of distinct services that share the Azure name, but operate in their own dedicated portal alongside the main Azure portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (21), [[DevOps]] (15), [[Microsoft]] (5), [[Git]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (2)
> **CLI Commands:** find (3), git (3), make (1), cd (1), npm (1)
> **Tools:** visual studio (2), github (2), azure portal (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** think of it as (2), such as (1)
> **Code Identifiers:** macos (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** configure (1)

#### [Where to access Azure DevOps](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=0)** - [Instructor] [[Azure DevOps Services]] are in the cloud. In this video, we'll look at various ways to interact with the services. There are several different interface choices that provide access to these services. We can use the [[Microsoft Azure|Azure]] [[DevOps]] web portal, the Azure DevOps command line, plus, we can use developer tools, like Visual Studio and Visual Studio Code. The Azure DevOps web portal is the primary way I'll access the services in this course. Once logged into the site, you'll see all your projects. Within a project, you can access its boards, its repos, pipelines, test plans, and artifacts. The Azure Command Line Interface, the [[CLI]], provides a set of commands used to create and manage Azure resources. It's designed to help you interact with Azure with an emphasis on automation. It's available across Azure services, including the DevOps services, and it's a popular tool for performing administrative actions with your Azure resources. The Azure CLI is not pre-installed on your computer, so you'll need to install it. You can find the installer at this URL. I installed the [[Windows]] version, but it's also available for Mac OS and [[Linux]] environments. You will need to install the Azure DevOps extension for the Azure CLI. This extension allows you to interact with Azure DevOps services directly from the command line. The Azure CLI and the Azure DevOps extension are related, but serve different purposes. The Azure CLI is a cross-platform, command line tool that provides a set of commands for creating and managing Azure resources. It's designed to work with the entire range of Azure and is general purpose tool for managing Azure resources
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=96)** directly from the terminal. The Azure DevOps extension adds additional commands to the CLI specifically tailored for Azure DevOps services. Here's how to install and enable the DevOps extension from the Windows terminal. This assumes the Azure CLI and the DevOps extensions are installed. Use the az command shown in yellow text to work with Azure. That's followed by arguments to add the extension named azure-devops. After the extension is installed, I can log into my account and begin managing the services. Here's an example. I'm using the az command, then repos, that's one of the DevOps extensions, and then I'm using an argument called create. So I'm going to create a new repository within a team project. The repo is named Example, and it will be created in the Sentinel Project. This command lists all the repositories in the Sentinel Project, so it starts with az, then repose, then the [[Microsoft Word|word]] list, I'm telling it to use the Project Sentinel to find the information and then output the information into a table. Another logical place to access DevOps is through your development IDEs and editors, Visual Studio and Visual Studio Code offer integration with DevOps services. For example, it's logical to want to work with Azure repos from your code editor. It would be convenient to create new branches or commit code changes directly from the IDE. You can do this and we will see a few examples of how this works in the Azure repose chapter. However, many actions can only be performed through the Azure DevOps web portal,
>
> **[3:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=191)** which is why we rely on the portal for most of the examples in this course. In summary, to effectively harness the power of Azure DevOps, you'll interact with the services through its four primary access tools, the web portal, the Azure CLI, Visual Studio, or Visual Studio Code. They enable seamless integration with Azure DevOps services, ensuring that whether you're coding, tracking or deploying, you have the right tool at your fingertips.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (26), [[DevOps]] (15), [[CLI]] (8), [[Azure DevOps Services]] (4), [[Windows]] (2)
> **Tools:** visual studio (6), command line (4), terminal (1), windows terminal (1)
> **Env Vars:** cli (8), url (1), ide (1)
> **CLI Commands:** az (3), find (2)
> **Prerequisites:** install (3), you'll need (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understand the DevOps price plans](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=0)** - [Instructor] To begin your journey with [[Microsoft Azure|Azure]] [[DevOps]], I recommend visiting the Azure DevOps website. There you can access detailed documentation and find licensing costs for your organization or for this course. Let's discuss pricing. Please note that pricing can change over time, so the cost mentioned here might not be accurate in the future. There are two licensing options, [[Azure DevOps Services]] and Azure DevOps Server. For this course, I am using Azure DevOps Services, which is a hosted service, managed by [[Microsoft]] on their servers. If you have reasons that prevent you from using Microsoft hosted services, such as legal restrictions on hosting your source code on external servers, you may want to consider licensing Azure DevOps server. This option allows you to install and run the [[DevOps Tools]] on your own [[Hardware]]. As I mentioned, I'm using Azure DevOps Services for this course. I am using the basic plan shown here in this screenshot. More details about this in a minute. For some teams, it can make sense to choose individual services, which is useful if you have some of your DevOps needs met by other vendors. With the basic plan, the first five users are free. We can use four of the five services at no cost, pipelines, boards, repos, and artifacts. If we need test plans, there will be an additional charge. Like many Azure services, if we exceed certain thresholds, we incur extra costs. For example, using too many minutes in pipelines or storing excessive data in Azure Artifacts will result in additional charges.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=92)** However, for the scope of this course, it shouldn't cost you anything. To get started, simply click the start free button. This will take you to a sign in page where you can use your personal or work account to sign in. In summary, the Azure DevOps basic plan is free for small teams, no need to provide a credit card to get started. That's what I'm using for the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[DevOps]] (6), [[Azure DevOps Services]] (3), [[Microsoft]] (2), [[DevOps Tools]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Log in to Azure DevOps web portal](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=0)** - [Instructor] During this course, we will use the tools here on the [[Microsoft Azure|Azure]] [[DevOps]] web portal. Let's see how to log in and get started. One way is to go directly to the site. That's via dev.[azure.com](https://azure.com). Now, there are other places on the internet and [[Microsoft]]'s websites that look like you can log in here, so let's look at some of those and why they won't work. Here's an example. I'm on the Azure website. I'm reading about the [[Microsoft Azure]] portal. There's this tempting big blue sign in button. If click on that, that will sign me into the Azure portal, which is different from the Azure DevOps portal. Now, to be clear, if you already have signed in to your Azure profile and you've already set up DevOps, then you'll have this option here to see your Azure DevOps organizations and if you click on this link down here, that will take you to the DevOps portal. One other way you can get to the portal is if you're reading the information here on the DevOps site, here's a section about all the different features that are part of Azure DevOps, and at the top is the start free button. If you click on that, that will take you to the portal. If this is the first time you're logging into this DevOps portal, you won't have a default organization, so you'll be prompted to create one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[DevOps]] (8), [[Microsoft]] (1), [[Microsoft Azure]] (1)
> **UI Navigation:** click on (3)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tour the DevOps portal](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=0)** - [Instructor] I'm logged in with one of my teaching accounts as Terry Dactill. Terry has created three organizations. You can see them over here. There's the three organizations, which is not necessary for a small team. She probably only needs one. In a big enterprise company, there might be good reasons for multiple orgs, however. Perhaps one for sales and another for HR. Creating an organization is easy. Click on this New organization link and you'll provide a name here and a hosting location in this dropdown. And then when you click on Continue, you'll get your organization. Now, the name of the organization becomes part of your URL. So, if I click on this one here, terrys-open-source, you can see that we're at dev.[azure.com/terrys-open-source](https://azure.com/terrys-open-source). She also has another one here. And then this is one that I used for another [[Microsoft Azure|Azure]] course I taught. So, let's look at terrys-open-source, and then we'll go to Organizational settings. It's here we can set defaults for the org that apply to all projects in the org unless overridden in the project. So, you can see I've got settings like [[Privacy]] URL, the time zone, and the region. I've got a place where I can manage the projects. I can manage the users. If I'm in an enterprise, I'm probably paying for [[DevOps]]. So, this is where I'd set up billing. There's auditing. There's also a lot of other settings, individual settings for boards and repos and pipelines and so on. We need to create a project before we can continue. So, let me go back. I'll click here, go back to the top,
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=93)** and then open terrys-open-source. Notice I don't have any projects yet, so it's asking me to create a project to get started, and I'll show you how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Privacy]] (1), [[DevOps]] (1)
> **UI Navigation:** click on (3), dropdown (1), go to (1)
> **Env Vars:** url (2)
> **Cross-References:** go back to (1), in the next (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create an Azure DevOps project](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=0)** - [Instructor] I've logged into the [[Microsoft Azure|Azure]] [[DevOps]] portal with my main instructor account. You can see my initials in the upper right, and if I hover over that, you can see I'm logged in as Walt Richer. So I need to create a project for one of my organizations. So let's look at my organizations. Look on the left side. There are four organizations over there. Some of these are from prior courses I've created. I just created a new one called learning-devops-211 for this course with 211 being the last three digits of the course number. Now, when I choose this organization, I can see that there are no projects. So I'm prompted in the portal to create a project. So let's talk about the differences between organizations, projects, and teams. This flexible system helps map the DevOps services to your business structure. For small companies, one organization, one team, and a single project might be sufficient. For a large corporations more thought is required. Your admins and architects will find the best approach. So let's create our first project, add a description. Next, I choose the visibility, whether I want it public or private. I'll make mine private. Now, if I click the create project button, it'll create it with some defaults that are defined within the organization and I can see those defaults by clicking on advanced. There's two items to choose from here, [[Version Control]] and work item process. I'll talk more about the work items and what the processes are in the Azure Boards chapter. So I get to pick the version control. I can choose [[Git]] or Team Foundation Version Control, and I can choose from one of these four work item. I'm choosing the default,
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=91)** so I'll leave them as is and then click create project. Now I see the welcome screen. There's nothing in here because it's a brand new project. So it's asking me where I would like to start working. Don't want to work with boards, repos, pipelines, test plans, artifact. Now most of these are empty. The only thing that was created in this project was some templates for work items. That's under boards. You're not seeing here because I don't have any boards yet, and there is a skeleton structure for repos. So if I click here, I can see that my first project is empty. So I do have some endpoints on the internet for my cloud-based Git repository, but there's no files in the repository yet. Now, for us to work with some samples during the course, it's helpful to have some boards, some repos, some pipelines, and so on. So rather than than having to create those all ourselves, we can use a demo generator to create those for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[Version Control]] (3), [[Microsoft Azure|Azure]] (2), [[Git]] (2)
> **CLI Commands:** git (2), find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a project with the Microsoft demo generator](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=0)** - [Instructor] It is useful to have sample data when working on a course so that you can check out how pipelines work, and how [[Microsoft Azure|Azure]] boards work, and all the parts of Azure [[DevOps]], and that's why [[Microsoft]] has created this Azure DevOps demo generator. So the first thing we need to just talk about, signing in. Now, I have two browsers open. On the right side, I've got my teaching account, and on the left side I have one of my sample accounts from my teammate. This is Terry's account. Now, I've already logged in in the DevOps portal, so I'm logged in. So if I click on sign in here, it takes me directly to the create new project page. Terry hasn't signed in yet, so when she clicks on this, she sees this app request permissions page. This demo generator is going to generate items in your DevOps account, and in your Azure account. And so it's asking for those permissions, so she would need to approve that by clicking on accept. I've already done that, so I don't see that screen. So what I do now is, I choose my new project name. I select my organization. I use my new organization, learning DevOps 211, and then I pick one of the templates. There's a lot of templates to choose from. There's the general templates, and then many other sections. So if I'm looking at the general templates, I can see ones that explain different kinds of concepts. So this one works with [[Agile Development|Agile]], and data and [[Artificial Intelligence (AI)|artificial intelligence]] and [[React.js|react]]. This one uses the [[Scrum]] work item templates. [ASP.NET](https://ASP.NET) Core and Azure App Service. This one uses Scrum and [ASP.NET](https://ASP.NET) Core,
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=93)** and Azure App Service. This is the one I'm going to use, but you see there's a lot more to choose from. There's some from the Microsoft DevOps Labs. From Microsoft Learn. From the Azure community, and you can also create your own private templates. This would be useful in an enterprise situation where you have your own templates you want to use across teams, across organizations. From my case, I will choose general, and then I'll choose my health clinic. You'll see a gray board appear, and then I click on select template. And now the next step is dependencies. There are two extensions that are needed by this project that aren't installed in my organization yet or in this project. So it's ask me for those here. So I'm going to check this, and then click on create project and then wait. After waiting for about a minute on my machine, I see this success message at the bottom. Your project has successfully provisioned, and then it tells me some steps down here what was created for me. But now we're ready to look at what was generated by the demo generator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[DevOps]] (6), [[Microsoft]] (3), [[Scrum]] (2), [[ASP.NET Core]] (2)
> **Env Vars:** asp (2), net (2)
> **UI Navigation:** click on (3)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [View the generated project](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=0)** - [Instructor] I switch back to the [[DevOps]] portal and I'm looking at my organization, and you can see at the bottom of my list is Health Clinic. And it's also a comment saying it was generated by the Demo Generator. Now, when I open up this project, you can see in the project stats, there's a lot of information here. 121 work items created, 13 work items completed, some pull requests, some commits. So this is the advantage of having sample data. If I go look at my boards, I can see there's work items here. If I go look at my sprints, I can see there's one sprint available. And here if I go take a look at the repos, I now see files inside the repository. And if I look at pipelines, there is one pipeline here that hasn't been run yet. So I could choose to edit this and read information about this pipeline. So we have some sample data, and in some of the videos in this course, we'll be using this sample data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1)
> **Speakers:** - [instructor] (1)

#### [Add users to an organization](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=0)** - [Narrator] Teams are not very useful if you don't have people in the team. So that's what we're looking at in this video. There are several ways you can add people to a team. If you're using [[Microsoft Entra ID|Azure Active Directory]], you can just look them up in the directory and add 'em that way. The examples for this course, I'm using people's [[Microsoft]] account, so I will send them an invite to the team. You find your teams by going to a project, then go to Project Settings and then look at Teams. And as you can see, there's a single default team created, when I created the project. It's called First Project Team, and there's only one member, the person that created the project. There are some additional teams created in that demo, Generate a Project. So I'll go back to the organization and then go to HealthClinic, go back to Project Settings, go to Teams. I see my default team at the top, but there's two additional teams that were created by the generator and they're all empty, so it's time to add some members. So I would click on the team. Then I click on Add, and I want to add Terry. Now when I paste Terry's address in here, it says that she's not available in any of the groups, so I need to add her to the organization. So I'll go to the organization, go to Organization Settings, go to Users, add a user, paste in her email address here, send her an email invite. I want to add her to all of the projects. Before I click on the Add button, let's talk about the access level. There are several choices in here, depending on whether you have test plans enabled or not. So I have three at the moment.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=93)** Basic stakeholder and Visual Studio subscriber. Let's talk about the first two. Basic provides access to most features. You assign this to users that have Visual Studio Professional subscriptions or people that have [[Microsoft Azure|Azure]] [[DevOps]] Server Cals. Stakeholder is for providing partial access to stakeholders. So this could be the people that are creating your backlog and they don't need to have access to all the features, just the ability to add work items. So you would choose Stakeholder. And all stakeholder licenses are free, you can have unlimited stakeholders. But for our example, we're working with basic. So there's Terry, click on Add. Say she appears on the list. She hasn't logged in yet. Now I'll add another user. Add Tadd. He's going to be basic, click Add to All Projects. Send him an invite too. Now you can see that we have two users. They haven't logged in yet, so we'll wait for a minute for them to log in to their email client and accept our invitation. Now I've logged in with Tadd's account. He got his email and he accepted the invitation. And you can see that he has access to our new organization. And there's our two projects that he was added to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** go to (6), click on (4)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Add users to an Azure DevOps team](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=0)** - [Instructor] It's time to check in on our new users. So I'll go to the organization, then to Settings, Users. I see that Tadd has accepted the invitation and is logged in, so he can participate. Terry hasn't logged in yet, so I could add her to Teams, but she won't be able to do any work until she accepts the invitation. Next step is to go to one of our projects. Let's go to HealthClinic. Go to Project Settings, go to Teams. I'm going to rename this team, call this one Mobile,
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=43)** and then click on Save. And then I will go here and choose to add Terry and Tadd.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=58)** And I'll do the same thing. Go back to Teams, go to this other team, Team2, go into here and rename this one Desktop. Or I should say, let's make this a Web Team.
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=77)** Then go back to Members and add Terry and Tadd.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), click on (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Azure Boards

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage your team workflow with Azure Boards](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Boards is the place in Azure [[DevOps]] for managing [[Software Projects]]. It has tools for planning, work assignments, and reports. Azure Boards offers essential tasks such as tracking work items, this allows teams to monitor and manage tasks, bugs, and user stories throughout the project lifecycle. You can visualize work in Azure Boards using Kanban boards and [[Dashboards]] to track the status and progress of work items. Plan and organize work by structuring and prioritizing tasks such as backlogs and dashboards for efficient project management. Azure boards streamline [[Scrum]] with timeboxed sprints, allowing teams to manage and commit to work efficiently. Teams can plan sprints by dragging and dropping work items while interactive task boards help track progress and support effective scrum practices. There is a powerful query feature that creates custom work item lists, use queries for bulk updates, creating detailed reports and status or trend charts. These charts can be added to dashboards to monitor project health and progress. Delivery plans in Azure Boards offers a calendar view that helps teams visualize deliverables and track dependencies across different teams and projects. This feature is useful for coordinating complex projects with multiple interdependent components, ensuring that all teams are aligned and aware of the timelines for delivery. All work in Azure Boards is tracked through an artifact called a work item. Work items are used by you and your team to describe the details of the tasks
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=92)** and activities that need to be completed in a software project. A work item is a unit of work, which we use to represent any type of task or activity or piece of work. They are used to record, describe, and manage the details of all the work being done. When you create a work item, you specify details about that work to create a flexible system that accommodates diverse software teams. Azure Boards must understand the specific tracking needs of your team. What is tracked depends on what process methodology is used. For example, an [[Agile Development|Agile]] team will use different terminology and workflows from other types of process systems. To address this, Azure Board supports four process templates, Basic, Agile, Scrum, and CMMI. Each one caters to a specific target audience and provides a variety of predefined work item types and workflows. Each DevOps team can pick the process that fits their style. The process is different mainly in the work item types they provide for planning and tracking work. When you create a new Azure DevOps project, you select a work item process, which becomes the default for all people working on that project. Templates are per project, so your team will pick the template that matches your desired workflow. This flexibility means that within the same organization, different teams can use different templates. For example, one team might adopt the Scrum template while another utilizes the Agile template. The basic template is the simplest model, designed for teams that prefer a minimalistic approach. This is essentially a DevOps version of a to-do list.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=187)** The focus is on work items and [[Version Control]]. Work items can include a variety of things like tasks, bugs, and issues that need to be tracked and managed. Version control is about maintaining the code base and managing changes to it. The Agile process template is a popular one. Agile teams approach [[Software Development]] by emphasizing incremental delivery, [[Team Collaboration]], continual planning, and continual learning. The Agile process template embodies the principles of the Agile manifesto, focusing on customer collaboration, adaptive planning, and early delivery. It's equipped with features like user stories and backlogs that facilitate iterative development and encourage continuous feedback. Scrum is a framework used by teams to manage their work. Scrum implements the principles of Agile as a concrete set of artifacts, practices, and roles. In essence, Agile is the mindset or philosophy with a focus on flexibility, continuous improvement, and customer satisfaction, while Scrum is one of the most popular ways to put that philosophy into practice through a set of rules, roles, and rituals designed to create a regular rhythm of work and feedback. It includes defined roles like scrum master and product owner artifacts like product backlog and sprint backlog, and events like sprints and daily stand ups that guide the development process. CMMI is a model created in the 1990s and is a collection of engineering, management, service, and improvement practices. It is commonly used in government contracts and still has a following. This template is best suited for organizations
>
> **[4:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=280)** that prioritize process maturity and have stringent quality requirements. Work items, as mentioned earlier, are the basic components of Azure Boards and are categorized into buckets. There are two main buckets, issues and backlogs. These categories are named differently depending on the process template you choose. For example, in the issues category, scrum uses impediment. Agile has issue and bug tracking, and CMMI uses issue, change requests, and risks. The basic template simply calls them issues. The key concept is that issues are work items impeding the project's progress, and the team must address them to move forward. Backlogs by contrast are where you keep work items that haven't entered active development, they are essentially prioritized lists of work that provide visibility into the work items that a team plans to work on. The names and types of work items in the backlog can vary between the different process templates. In the Scrum process, they are called product backlog items. In the Agile process, they are typically referred to as user stories. The Basic process uses the term issues for its backlog items And for the CMMI process, the backlog items are known as requirements. There are differences in the work items too. You can see that in this example. This is the bug work item, which is in the issues category. The screenshots are Agile on the top and Scrum on the bottom. As you look over the screenshots, you can see the differences. In Agile, there's a section for planning and discussion. In Scrum, it has sections for details and acceptance criteria. Now, let's talk about another key aspect of Azure Boards,
>
> **[6:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=373)** the Kanban board. Kanban originally developed by Toyota as a scheduling system for lean and just-in-time manufacturing, helps a team focus on quality by ensuring that work meets an agreed upon level of quality before it can be considered done. In software development, Kanban consists of stakeholders adding requests to a backlog, and the team then pulling work into their workflow as capacity allows. The Kanban board is used to visualize this process. By placing all the work items on cards on the board, the team can quickly see the overall status of the project and identify potential bottlenecks. For instance, a team manager might notice that there are 20 hours of work on the Kanban board, but the team only has 14 hours of capacity available. The board helps highlight this conflict, enabling better resource allocation and planning. Here is a sample of a Kanban board. In this view, we can see the work progressing from new, to develop, to build, and test. Azure Board's delivery plans provide a highly interactive calendar view of multiple teams backlogs, allowing teams to visualize and track the progress of work items, milestones, and dependencies across different projects. This feature helps in aligning team efforts, ensuring timely delivery of project goals, and improving overall project transparency. Here's an example from the [[Microsoft]]'s doc site. This image shows the delivery plan interface focusing on the feature timeline and story section. The first column lists the teams involved in the planning, such as the [[Microsoft Azure]] DevOps team
>
> **[7:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=466)** and the Azure Pipelines team. Other columns represent each month from October to February. Each cell contains progress details marked by colored bars or tags, like feature and user story, along with a bug count for each month. Here are the key features of delivery plans. There's a unified view. It provides a calendar view of multiple backlogs and teams allowing large teams to visualize their work schedules and dependencies in one place. This helps in aligning efforts across different teams and projects. Dependency tracking enables tracking of the dependencies between work items, which is crucial for large teams working on interconnected task. This ensures that all dependencies are managed effectively, reducing the risk of delay. Progress monitoring, this is where delivery plans offers roll-up views of progress showing the percentage completion of child and linked work items. This helps in monitoring the overall progress of large projects and identifying any bottlenecks. And then finally, we have cross-project coordination. It supports viewing and managing work items across multiple projects, making it easier for large teams to coordinate efforts and ensure that all projects are on track. Azure Board Queries are a powerful feature used to create custom lists of work items based on specific criteria. This screenshot shows the Azure Board's interface for managing queries. We are looking at a custom query called Tadd's Items. At the top, there are filter options for fields like work item type, state, and assigned to. There's operators available such as equals, not equals, and contains.
>
> **[9:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=558)** This is a simple query that looks for all the items assigned to Tadd, but it can do so much more. For example, Tadd's manager can use it for bulk updates. If Tadd goes on vacation, the manager can reassign his items to another team member. In summary, Azure Boards is a visual and interactive issue tracking system, which can be used for your complete software development lifecycle. It is highly customizable to suit your project needs and has built in tools for communication and collaboration. It offers querying dashboards, Kanban boards, it has reports for real time project insights and it integrates well with other [[Azure DevOps Services]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (17), [[Agile Development|Agile]] (13), [[Scrum]] (12), [[DevOps]] (5), [[Dashboards]] (4)
> **Definitions:** is a  (9), means that (1), known as (1)
> **Exercise Files:** template (9)
> **Analogies:** such as (4), for example (4), for instance (1)
> **Env Vars:** cmmi (4)
> **Speakers:** - [instructor] (1)

#### [Tour of Azure Boards](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=0)** - [Instructor] Let's start by taking a quick look at what's available in the [[Microsoft Azure|Azure]] Boards section of a project. So I'm using the HealthClinic project. I'll click on Boards and that shows the sub pages. There are five sub pages. The default one is work items, and this shows a grid view of all your work items. So here's where you can review an individual work item, and this is also where you can add new work items. Next, is a section or subpage called boards and this can be a bit confusing because the boards up here it refers to Azure Boards, whereas the boards on the subpage refers to Kanban boards. So here I can see a Kanban card view of our work items. So I see have one column for new, one for develop, one for built-in test and then over here we've got done. I can view the items that are in our backlogs by clicking here. If you're the type of team that uses sprints, you can see your sprints here. Again, there's columns for to-do, in progress, and done. And this last view, or last page, I should say, is for queries, so this allows me to create custom queries to view my work items in any custom fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **Definitions:** refers to (2), is a  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Create a work item](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=0)** - [Instructor] Creating a work item is straightforward. Go to the Boards page, then go to Work items. It shows you a list of all of your Work items, and then click on this add New Work Item button here, and you'll see a list of potential Work item types. Now, this list is based on which process template you chose. I picked the [[Scrum]] template for this example, so these are Scrum-specific work items. Let's start by talking about Epic. Epics are large pieces of work that have one common objective. I think of Epics as groups of Tasks that have a longer timeline. For example, a customer request might take multiple weeks to plan and program. Epics are typically divided into smaller items based on input from the customer, and from the developers. So, you can see the symbol, this orange crown symbol, that's an Epic. So, I can look at my list and see different Epics, or I can go up here and choose Types, filter by Epic. So, for the Demo application, I can see HIPAA Compliance, Patient Mobile App, Finance Management. Those are Epics. And then the one I created for this course is Demo Epic 1. I'll unfilter and we'll talk about Features. If you want to create a new item for Features, this tracks a feature that will be released in the product. I think of it as one way to split Epics into smaller items, then the features can be placed into sprints where the developers can do the actual work. Feature timelines tend to be estimated in days or weeks. This is the symbol for Feature. Let's filter by Features. Here, we've got things like Security,
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=93)** Alerts and Reminders, Patient Register, and the ones I created, Feature 1 and Feature 2. Next, we have Tasks. Tasks track the actual work that needs to get done. I think of it as a small section or a job to be accomplished by a developer. The Tasks live in the sprint backlog and contain information about the user story, the requirements. Task timelines tend to be estimated into hours. So, you create Epics that have Features, and then within the Features, you'll have Tasks, and you can also see there's some other Work items here. There's Test Cases, there's Impediments, things that are blocking your forward progress on the project. Bugs are specific issues you're having in your application, and then of course, there's this Product Backlog Item. These are things that you're thinking about working on or your stakeholders are adding, and they haven't been assigned an Epic or a Feature. They're just, a lot of times, they're just ideas. So, those are your basic Work items. Let's see how you create one. Click here, and then I'll choose, I haven't created a Task yet, so I'll click here. Then you give your Task a name, you give it a Description. You can set its Priority level here, you can set its percentage of Remaining Work, what kind of Activity on this, whether you're Blocked or not, Yes or No, and you can add a link. I want to add this to one of the Features, so I click here. This is going to be a parent link.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=188)** I'm linking to the parent. Then next, go to this dropdown. I will choose Feature Number 1, and click on OK. And that gives me a link, so now I can click here to go to Feature 2. And when I'm in Feature 2, I've got a link going back up to the Epic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (2)
> **UI Navigation:** go to (4), click on (2), dropdown (1)
> **Analogies:** think of it as (2), for example (1)
> **Exercise Files:** template (2)
> **Env Vars:** hipaa (1)
> **Speakers:** - [instructor] (1)

#### [Boards and backlogs](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=0)** - [Instructor] This is the chapter about [[Microsoft Azure|Azure]] Boards, and I've been mentioning a lot of [[Agile Development|Agile]] topics in the other videos in this chapter. Things like Kanban and Kanban boards, and [[Scrum]], and topics like that. They're all deep topics and you can learn more about those on the other courses in our catalog. What we're looking at in this course is how those concepts are surfaced within Azure Boards. And what we're looking at in this video is the concept of backlogs. This is the way you plan your project. Typically, this is done using either requirements or user stories, and you add these tools, something called the Product Backlog, and then you pull items out of your product backlog and move them into the development lifecycle. You can use different Agile tools to do that. The two most common are Scrum and Kanban. Scrum tools support defining and managing work within sprints, setting capacity, and tracking tasks. Kanban tools allow you to manage a continuous flow of work via an interactive signboard. And you get to pick which parts of these tools you want to use in Azure DevOp. And they're per team. Right now I'm looking at backlogs for the HealthClinic Team. You remember, we have two other teams, the Mobile Team and I have the Web Team. Each of these teams can decide how they want to utilize the tools that are in Azure Boards. We'll go back to the HealthClinic Team. And I'm looking at the backlog. You can see three different types of items in here. Currently, we're looking at backlog. That's because I'm filtered
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=91)** in this dropdown to backlog items. But I can also look at Features and I can look at Epics. If you don't see Epics in this dropdown, that's because you have to add it in the Settings. I believe it's in Team Configuration. So, you want to turn on this check mark. Then you can go to HealthClinic, go to Boards. Not the Boards, you should go to Backlogs. And then, take a look at these items. These are all for planning. Epics are long-term parts of your project. Features are features you're going to ship. And Backlogs are items you're thinking about working on, but you haven't moved them into development cycle yet. One nice feature of this tool is the ability to look at parent relationships, so I can click on Parents, turn on this feature. This is really useful in this dataset, in the Feature section. So, I can see that in the Patient Information Epic, I have two features, Visit Management and Patient Register. For the HIPAA compliance, I have one feature called Security. And of course, these are work items, which means I can click on them and make changes in here or see the details about this work item. Let's go take a look at the product backlog. So, I'll do a filter here, the backlog items. Then from this place, I can view the list of backlog items and I can also create new work items. Now, notice there's a smaller subset. I can only create a backlog or a bug when I'm looking at it with this filter on. And if I'm in Features and I go Add a New Work Item, then I'm adding a feature.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=185)** Let's go back to backlogs and then I'll click on this Print Patient Invoice. I see the details. And I am going to assign this to one of my team members. So I'll go up to Unassigned, click on this dropdown and I'll look for Tadd. Here he is, click on Tadd and then Save & Close. Come in here and see that it has been assigned to Tadd. Now, Tadd is going to have to pull it from our backlog and put it in a sprint, or if we're using Kanban, to move it around the Kanban board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Scrum]] (3), [[Agile Development|Agile]] (2)
> **UI Navigation:** click on (4), dropdown (3), go to (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** hipaa (1)
> **Speakers:** - [instructor] (1)

#### [Set sprint cadence](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=0)** - [Instructor] A [[Scrum]] Team plans and tracks work at regular time intervals, referred to as a sprint cadence. A typical cadence is two weeks, but it's up to the individual team to decide what makes sense for them. I've seen teams with one week sprints and three week sprints. You define those sprint lengths here in the Settings in Boards. So, go to Boards, Project configuration, create your sprints here, and then for each sprint, you specify the start and end date. So, let's go here, set dates for Sprint Number 5. Start the first week of February, and it defaults to two weeks, so it says the End date to February 12th. Now, click on Save and close. Also, you might want to come into Team configuration and check the working days. This is how capacity and burn down are planned, so you need to select the days that your team works. Now that we're configured, let's go see how to add items to a sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (1)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **Speakers:** - [instructor] (1)

#### [Boards and sprints](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=0)** - [Instructor] Navigate to the sprints page in boards, and you can see all your sprints. I'll choose my team. You see an individual sprint here, and then you can switch to future sprints by going to this dropdown. Notice that it says sprint 1 is the current sprint, these are all my future sprints, and as I move to these items, I have different views of the data that's in the sprint. I can use what's called the backlog view, the task board view, the capacity view, and the analytics view. Click through these, I'm not sure why I'm seeing these, but we'll go ahead and step through those. Let's take a look at backlog view. Let's go back to sprint number one. In the middle, it shows all the backlog items that are in the sprint, it shows me all the sprints on the right side, so I can see sprint one is the current sprint, the timeframe for the sprint, how many working days there are, and what we've got planned for that sprint. There are three backlog items and six tasks. In sprint number two, I have eight tasks. Now, I'd like to add some more items to sprint two and sprint three, or maybe to sprint four, so I can do that by going to backlogs where I see all of the items, all of my backlog items, and then I can just drag them into the planning section. I have a couple of bugs on the bottom here. I'm going to put one of these bugs in sprint four, one in sprint three, and one in sprint two. Also I'd like to add some print items to sprint number four,
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=94)** so I'll go find the print prescription, drag that down there, and then how about reminders? Appointment reminders and medical appointments. Don't I have another reminder? Yeah, payment reminders, here we go. Now, I can see there's three backlog items and one bug in there. Now, we can take a look at this in another view. Go back to sprints. It looks similar here, right? If I go to sprint number four, I see the backlog items here in a table view. Some developers prefer to see it in a board look, so that's called the task board, not to be confused with the kanban boards we'll be looking at later, it's the same idea though. Here I'm in my sprint and I want to move this print prescription into to do. Well, we're not in the actual current sprint, so nothing happens here. If I go to sprint number one and try moving items around, I can do that. I can move it to the in progress or into to do, and I can even move items back to my backlog by clicking here and choosing move to iteration and then putting it back in the backlog.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), navigate to (1), switch to (1), dropdown (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Kanban board basics](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=0)** - [Instructor] Kanban boards have a long history. They started as paper notes, and there are many teams that still use paper to plan the work on a physical board. The simple note represents the task. It can be easily moved to a column. Some teams use color as an additional signal, for example, orange notes might indicate bugs. Most Kanban applications mimic the look of the physical board and cards, and it's no different for [[Microsoft Azure|Azure]] Boards. Here, you can see each of the work items represented as a card. One of the benefits of a card is it's only a subset of information that's in the task, so it's only the information you think is important. So if I want to, I can just show a few items on here. And you can set what's shown in the card by going to Settings, Cards, Fields. And then for the product backlog, I can specify which fields are shown. So if I don't want to show the tags and the effort, I can turn those off and then those are taken off the card. But you can make 'em as simple or complicated as you'd like. Let's go back and put those back in. Go ahead and show effort, show tags. And I'll also add an additional field here, so I'll add a new field called State. Now, the State value is shown here on the card. The second thing that you see that mimics the physical board is the columns. You'll notice that some of these have headers on 'em. So like the Develop header has two columns. So we're doing something in the development section. And then to notify my testers that it's ready to test,
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=96)** I can take this card and drag it over to the Done. That means it's done with the development phase. And then when the tester is ready, the tester will take it and drag it over to the Doing, where they start testing. And when they're done testing, then it moves to the Done column. And then this is essentially our backlog here. And of course, we can view this as backlog by clicking on this link. And that takes us to the traditional Azure Boards' Backlog view. I'll expand this so you can see that we're in the Backlogs. And let's go back to Boards. Other details on the card itself that are useful when you're planning is how much effort it's going to take, so that's what this number is here. If I go to open this task and look at the effort, if this is considered hours, and we assume this is going to take one hour, you can quickly change that here by clicking on this dropdown and changing it to two hours or back to one, like this. It's easy to add new items. You notice at the top here, in the New section, there is a new item. I pick what I'm adding, a bug or a product backlog, and then I just give it a title. I'll call this "New Item 22," and hit Enter. Now, as soon as I Enter, you'll see that it fills out some more details. It's unassigned, it's a priority two which is the default, it's picked a default area path, and it's picked a state of new. So let's say we approve this, now it goes into Doing. Set this back to new,
>
> **[3:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=189)** it automatically goes to the New column. Put it in Done, you notice it moves over to the Done column. Let's take a look at one of our other teams. Go to the Mobile Team, and the Mobile Team hasn't set up any work items yet. So this is one way to quickly add work items.
>
> **[3:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=215)** Quickly add them, and then I can go in and start filling out more details. So that's the basics of the Kanban board. There's more to learn, we can customize the way the board itself looks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2)
> **UI Navigation:** go to (2), dropdown (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Add columns and swimlanes to a Kanban board](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=0)** - [Instructor] The purpose of the Kanban board is to visualize the flow of work, so your job as a team is to visualize what kind of work you do and where you hand off regularly as the team progresses from the backlog into a shippable state. So you'll have these stages as you go through your work. [[Microsoft]] has made some assumptions about what those stages are. So you've got the new stage, develop, which is subdivided into two sub-columns, build and test, and done, and you can add your own columns or you can rename the ones that are shown here. To rename them, you go to settings and go to board, columns, click on this, and then change the name here. This is also whether you specify if the column is split into the two sub-columns, doing and done. Because our team uses some extra steps between develop and build, we're going to add our own column. That's our [[Code Review]] step. So I'll click on new column, type in code review, split the column into doing and done. Also specify the state this column maps to. There's our choices, and then I'll click save and close.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=70)** The column's in the wrong position. Now, I can't drag it here, but I can go back to the settings, drag it here between develop and build, and close, and now the workflow would be a developer is working on a item. They drag it into done. The code review person comes along, moves it into code review. After they're done reviewing the code, they move it into done, so then it can be pulled into the build and test column. There's also the possibility of adding rows. In Kanban, these are called swimlines, and they typically represent different kinds of work or different teams performing work. Now, in [[Microsoft Azure|Azure]] [[DevOps]], we can create our own teams, so it doesn't make sense to have swimlane for a team, but if that's the way you prefer to work, you can do it. Let me show you how to add one anyway. You click here, go to swimlanes. You always have a default one. Add a new swimlane. We'll call this one Mobile, and I'll move this one up. So we got the default lane at the top. I can also rename the default lane, which is called this one default so it's easy to see, and save and close, and now we've got the default lane here and I can collapse that lane, and then I've got the Mobile lane down here, and everything else works the same,
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=162)** so you move an item into the develop column, but this is in the mobile swimlane, and then everything else we've seen works the same as before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (4), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Set work in progress (WIP) limits](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=0)** - [Narrator] There's another essential Kanban practice, known as Work in Progress Limits, also referred to as WIP Limits, W-I-P. The idea is to constrain the amount of work that your team accepts at each work stage. So it's designed to focus your team on completing items before starting new work. You can see it here in the Developed column. The WIP limit is set to seven. Now, I think on our team, we only have two items in [[Code Review]] at any one time. We don't want people putting a bunch of cards in that column because it takes a while for our code reviewers to get to the work. So we want to limit to two. So I'll specify the value of two here. Looks like I've already done that. I'd close this. And then you can see the EIP limit here as the second number, four of seven, for develop, zero of two for the code review. So as I move these items in, numbers increase. Now you might expect that would warn you when you move it into the code review column when you go over the limit, but it doesn't. It's just a way of checking at the top to see if you've gone over the limit and now the person that added it to the code review column should say, oh, we got too many, let's move it back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (3)
> **Env Vars:** wip (2), eip (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)

#### [Kanban board tag settings](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=0)** - [Instructor] Tagging work items helps you quickly filter the product backlog by the categories that you define. So when you're creating a work item at the top, you can add, click here to add a new tag. Type in a new value or pick from one that's already been defined. As you can see for this example, there's an admin and a doctor tag already defined. And when I close this and look at the Kanban card, I see those listed here. And then on this work item down here, I can see there's admin, compliance, and finance. So you define those on the work item themselves. But there's another thing I want to look at, and that's changing the color of the tags to help them stand out on the card. To do that, you go to settings, go to tag colors, click on plus tag color, choose your tag, and then pick from the dropdown, and save and close. And everywhere the doctor tag is on the page, now you see that colored tag. So this will help you identify the tags when you're looking at them in the Kanban view.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1), dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Kanban board custom styles](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=0)** - [Instructor] If you like color coding items, you might be interested in looking at what are called "style rules." This allows you to change the background of the card, based on a set of criteria. This can be more complex than just changing the tag color. So here's how this works. You go to Settings, and then you go to Styles. You add a styling rule. I'll call this one "High Priority." I pick my card color. We'll go with this darker color of orange. Let me make this a little bit taller so you can see it. And then you can also specify the title style here. Maybe make it bold. And then here's the rule criteria. So you pick your field, priority. And then your operator, and then your value. And then you can add another clause. So you can do complicated criteria here, or complex criteria. I'll scroll over here, and I can see that the background color of this card changed based on that criteria.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [View work progress with dashboards](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=0)** - [Instructor] I'm going to take a side trip and look at the Overview section in the [[Microsoft Azure|Azure]] [[DevOps]] portal, and there's three areas here. There's the Summary, which gives you a summary information about this project. There's a Wiki area for creating wiki entries, and what I'm looking at in this video is [[Dashboards]]. Use these to gain visibility into your team's progress. You configure it using widgets or charts; you add those to your dashboard, and these are customizable, highly configurable; and they help you provide you and your team shared information, help you monitor progress, look at trends, and improve your workflow processes. There's currently one dashboard, you can see that listed here, and you can add new dashboards and you can create a dashboard that is based on teams. So this is per a single team. So if I choose this item, I would then pick the team, or I can do a project-wide dashboard. I won't do that in this video. We will customize the existing dashboard. Like most modern web portals that have dashboards, they're based on a concept of widgets. These are little customized bits of UI that you can put in the dashboard. So let's examine some of the widget. Here is this first one. If I click on these three dots and choose about this widget, it'll take me to a page on the [[Microsoft]] documentation that tells me this is the markdown widget to display items from a markdown file. So where is this information coming from? It's coming from my repository. So you go look at the repository, go to the master branch. We're pulling the information out of this readme.md file.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=98)** That's what's shown here. Next to that is the work assigned to Walt Ritscher. I see that I have three product backlogs, one bug, and one task, and I see details here. This is the Assigned to Me widget, and this is configured here. Basically, all you do here is set the width and heights. Speaking of that, you can move items around. Let's say that I don't like this unfinished work and active bugs. I want to make the active bugs higher in the order. So I'll go to Edit, and then I will click on this item and just drag it to a new location. This is also where I can add widgets to empty spots. I'll do that in a minute. So let me close this. Done editing. As I move those items around, we also have Sprint Burndown. We have information about user stories and who they're assigned to. We've got a section over here, there's a chart over here, User Stories by State, and I can add other widgets to this dashboard by going to Edit. And then I'll see all the widgets listed over here, and I'll look down this list. If I find one, here is a query tile. I'm going to show you queries in another video in this chapter. So after we create the query, this is how we could add the results of that query to the dashboard. This is what I'm looking for, the Team Members widget. So I'm going to add that down here, one of these blank gray squares.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=190)** So drag that over, drop it there. Stop editing. Now, I can see the three members or our team, and I can use this to manage our team members. That's your basics of working with the dashboard. What we'll look at next is how to query data and then put that information on this dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (3), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1), [[Microsoft]] (1)
> **UI Navigation:** click on (2), go to (2)
> **CLI Commands:** make (1), find (1)
> **File Paths:** readme.md (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Create custom work item queries](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=0)** - [Instructor] To find the query section or this query subpage under board. So you click here and it shows the queries you've worked with recently. If you want to see all the queries, click on this all tab here. And there's a couple of items at the top assigned to me, and followed work items. I believe these are created by the default template. The other queries are ones I've created, like this one here, Demo Bugs by Team Member. That's one I created. And the [[Representational State Transfer (REST)|rest]] of them come from the demo generator. When you click on one of these items as to unfinished work, it runs the query and shows the results here. So let's go take a look at the custom query that I created. So I'll go to queries, shared queries, demo. So what you do is, you say you're going to create a new query. Like that. And then once you get the query, you're going to see this editor, and you're going to specify the criteria here. So I specified work item type, equal bug, and state equal any. Now, this is a very simple query. Obviously, you can do a much more complex criteria here. You can have different and or clauses, add multiple clauses to it. And then you get to see the results down here in the bottom. So you run the query to refresh it and you see the results. And when you have the query the way you want, then you choose save as. Now it's important when you save this, to save it to the shared queries. And this makes it available on the dashboard. Now before I show you adding it to the dashboard, you can also create charts for these queries. So I can go in here,
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=94)** and right now I have a bar chart that shows Terry's got three bugs. I've got one bug and Tadd's got one bug. And I can create new charts. Let's do a line chart. Select a field to group by, assign to. And then I don't like the colors for Tadd, so I'll go down here, and pick a color purple for him, and then click on okay. And then I see this new chart here. So let's review this. You go to boards, you edit queries. You can see all the queries here in the all section. And then when you choose the query, it runs the query. You can edit the query, and you can see any custom charts that you've created for that query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (3), go to (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add a custom query to the dashboard](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=0)** - [Instructor] I'll customize this dashboard with some widgets that are using information from my custom query. So the first step is to click on edit. The second step is to decide what kind of widget to add. So let's look what we can find for the [[Microsoft Word|word]] query. I see one called query results. That looks promising so let's add that. So I select it, then I find a location for it. So we'll slide this over a couple and drag this down here. That looks like it'll fit. Then I'll click on the settings to configure it, and here I have to select the query that's in my shared queries location. Then I choose to select columns. I don't need to see the ID, so unselect that. I don't need to see the state. That looks good, I'll choose save, and then I'll see about adding a chart. Chart for work items using shared work item queries. That looks promising. Do that again, bring that down here. It looks like I added it twice. So let's scroll over and remove this one. Then I will configure this one and I'll do the same thing, I'll select my query, select a field to group by, so it's going to pull information from that query. I want to group by who it's assigned to, and I'll go ahead and leave it at pie chart, then click on save, and then choose done editing. And now let's see what we have.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=95)** So we got our health team here. We can see a table of information here, demo bugs by team member. And then here's a chart that shows that same information. So this shows you that not only is your dashboard completely customizable with all the built-in widgets, but you can also create your own custom queries and then use special widgets to show those query values in the dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (3), select the (1)
> **CLI Commands:** find (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)


### 3. Azure Repos

[↑ Back to Table of Contents](#table-of-contents)

#### [What are Azure repos?](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=0)** - [Narrator] In the world of [[Software Development]], managing and maintaining code is as crucial as writing it. [[Version Control]] is essential for software development as it allows multiple developers to collaborate efficiently tracking and managing changes to the code base over time. It ensures that every modification is documented, enabling easier identification and resolution of issues, and providing a history of changes for future reference and audits. All modern version control systems facilitate collaboration through a common repository location hosted either on a server or in the cloud. This provides a centralized code based accessible to all team members. However, there are different approaches to what the centralized source represents. Centralized version control systems maintain a single central repository to manage all changes. This repository acts as the authoritative source for the code base where all modifications are stored and tracked. Developers check out files from the central repository, make changes, and then commit those changes back to the central location. Distributed version control systems like [[Git]] allow each contributor to have a full copy of the entire repository on their local computer with a cloud serving as a synchronization and collaboration point. [[Microsoft Azure|Azure]] repos are a set of version control tools provided by [[Microsoft]] as part of the [[Azure DevOps Services]]. Simply put, they offer a location to store your repositories on Microsoft Cloud servers that are integrated with the other [[DevOps]] services, Azure repos are closely tied to an Azure DevOps project.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=94)** When you create a project, you choose an Azure repo implementation. The infrastructure for hosting a repository is automatically included, providing a centralized platform for code management and collaboration. This integration allows for easy access to repositories and ensures they are well organized within the comprehensive project management and development workflows. Each project in a DevOps organization can have multiple repositories. DevOps creates a default repo when you create the project, but you can add more if you like. Azure DevOps repo supports two types of version control systems. Git is the default provider, or you can choose the team foundation version control system. Both systems handle all the common repository actions. You can commit and check in code changes, manages files and folders in the project. You can create new code branches and handle code merges too. Yet they are fundamentally different in their workflow and best practices. Git has become the industry standard for version control. It is a distributed system, which means each developer has a complete copy of the entire source repository on their developer machine. This enables developers to commit changes, view history, perform code diffs, and execute other version control operations locally without needing a network connection. A single developer can work with Git repositories on their local computer. When it's time to collaborate with others or work on a software team, then it is sensible to put a copy of the repository in a shared location. This is known as a Git remote. Team members can work locally and sync with their team
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=188)** by pushing changes to the remote or issuing pull requests for the teammates to review before integrating the changes into the repository. Azure repos is a hosting service for Git remotes facilitating this collaborative workflow. A natural question to consider is the role of [[GitHub]]. As part of the Microsoft ecosystem, GitHub also offers a set of DevOps services, including serving as a Git repository host. It's a valid question. I'll address this topic later. I have included a video in the last chapter comparing the two services. When talking strictly about Git remotes, there is little difference between Azure repos and GitHub. Both are suitable for hosting services for Git remotes, you can host your remotes on GitHub, and use Azure DevOps for all the other services, or you can keep everything within Azure DevOps. Now let's look at TFVC, which stands for Team Foundation Version Control. It is a centralized client server system that has been a staple of Microsoft tools for a long time. In a centralized system, the server is in control. It is the source of truth for code in the repository. Typically, team members check out the files needed for work and check in changes back to the server. Historical data is maintained on the server only. Should you use TFVC? While most new projects choose Git, many enterprises continue to use established technologies long after their initial adoption. If your company has code bases in Team foundation version control, you can start using Azure DevOps services while keeping the original repo intact. It's important to note that while TFVC is still supported by Azure DevOps, Microsoft recommends using Git
>
> **[4:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=283)** for new projects and is focusing future investment on Git. For this course, I'm using Git. The example shown in this chapter are simple. If you are new to Git or a version controller, you can find more comprehensive courses on the [[LinkedIn]] learning site. If you are an experienced Git user, there isn't much to learn. Azure DevOps is simply another place to work with Git remotes. The primary differences show up when you look at the additional tools on the DevOps portal. The way you'll use Git on the developer computer will not change. This is a rundown on how we'll use Git in the [[Representational State Transfer (REST)|rest]] of this chapter. Someone on our team creates a repository on the web portal. Individual team members clone the repository to their local computers. A team member creates a branch for new work. One or more people can work on the branch. Team members commit changes to a branch. When the code is ready, a team member submits a pull request. The designated team members review the request and approve and merge the changes back into the repository. A team needs to use version control to manage code changes during development and code repositories are more useful when available in a centrally accessible location. We've learned that distributive systems like Git offer many advantages for team development. Yet distributed systems still benefit from having a central host. There are numerous hosting options available for Git repositories. If you prefer Microsoft hosting, consider using Azure repos or GitHub. Additionally, if you favor a traditional centralized client server approach, Azure repos supports that option as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (20), [[Microsoft Azure|Azure]] (13), [[Version Control]] (12), [[DevOps]] (11), [[Microsoft]] (6)
> **CLI Commands:** git (20), make (1), find (1)
> **Definitions:** is a  (4), known as (1), stands for (1)
> **Tools:** github (5)
> **Env Vars:** tfvc (3)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [View the parts of Azure repos](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=0)** - [Instructor] The entry point for repositories in a project is here. You click on the project, and then on the sidebar there's a section called Repos. I click on that and then I can see the subsections. So when you click on Repos, it opens the file subpage, and on the file subpage, you can see all the files that are in this repository. You can see the history of these files, who committed them and when. And if I click on one of these, I can drill down and see details about that commit. There was 143 changed files, and this file had 48 lines of text added. I can also go back to the files and edit the files. So let's say I want to edit this [[SQL]] file here, and click on that. That opens the SQL file and it has a online editor. I can see the contents, I see the history, compare with other versions, and I can also edit the file. And if I make edits here, then I can commit those files directly from the web portal. I don't need to do this from the command line on my developer computer or from any of my IDEs or editors. I'll cancel out of this. There's also the ability to see commits on a separate page. So here's the commits. This graph shows when you split and branch code. That's currently on, I can turn that off here. I can also filter by different criteria or look up commit IDs. There's also the ability to look at pushes and pull requests. Now I'm the person that created this demo through the demo generator.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=91)** So I'm listed as the person that did some of these pull requests, because that's how the generator works. But let's go back, take a look at pushes. Here are pushes to one of the branches. So, once again, I can look at the entire push here today. Here's another push and it takes me to the Details page. Same with pull requests. I can click here to see the pull requests that are pending. So here's the active pull requests, here's the completed pull requests, abandoned pull requests, and the ones that I specifically have added. I'll talk more about pull requests when I get to the end of this chapter. There's also the ability to add tags, there are no tags in this repository. And there's the ability to look at branches. Now here I can see that there has been several branches. There's the master branch, there's the copyright-update branch, there's the adding contact us branch, and I can see who's working on this. I can see the date that it was authored. I can see the ahead/behind [[Statistics]] about this branch, current status. And I can also click on this to go see the files that are in that branch. So that gives you an idea of what you can do in the web portal. So what I want you to see is, like, most modern [[Git]]-hosting sites, there are a lot of tools available on this site for working with the files and the repositories. And this is great because there are many members of your teams that aren't actively developing. I'm thinking of some of your dev leads
>
> **[3:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=183)** or your managers or PMs. They might want to look at the status of the repo, but they're not actively working with the code. So this gives 'em a way to examine everything about that repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Statistics]] (1), [[Git]] (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** make (1), git (1)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Create an Azure repo in the portal](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=0)** - [Narrator] Every project can have one or more repositories. Currently in the HealthClinic project, I only have a single repository. I would like to add an additional repository so that I can have simple examples for the [[Representational State Transfer (REST)|rest]] of the videos in this chapter. There are several ways to do this. I'm going to click on Repos here in the sidebar and then go to this dropdown and choose Manage Repositories. This shows all the repositories for this project. I only have the one, and when I click on that, I can see the settings for this repository, like whether I allow forks and many other settings in here. And then there's policies for this and permissions for this repository. If I go back to all repositories, I can go to Settings. Now I'm setting policies and permissions for any repository that's created in this project. Let's start by looking at Settings. There's this relatively new setting in here called Default Branch Name for Repositories. So if you don't use master as the name for your default branch, you can choose the name you like here. They're suggesting main, so let's turn this on. That means all new repositories will have this as the starting branch. That looks good, and then I can click here and Create. Here, I specify the repository type and two other items. But before I get there, let's talk about some other ways we can get here. Let's go back to HealthClinic Repos. Go to this dropdown. There's two other ways to create, I can import an existing repository or I can click on the Plus sign for a new repository.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=93)** So now that we're in the Create dialogue, let's talk about these other two options. Of course, I need to create a repository name. Call this one SimpleRepo. Now, if you're an experienced [[Git]] developer, what I'm talking about for the next minute will be familiar. So please be patient. Adding a README and adding a gitignore. So a README ust adds a text file with the RD extension on it. And this will be useful for my demo because it'll have a single file that I can use for editing purposes. And then most projects, you want to have the ability to ignore certain files and not have them placed in the repository. And you put the list of these files in a gitignore file. Currently I don't have one, but if I want to add one, there's a set of templates available here. The one I typically use for my projects is this one here, because I use Visual Studio. Visual Studio, then it says my repository will be initialize on the main branch with this repository type, this simple name and it's going to add a README file. That looks good, so let's go. And I get the success message here. I can see that there are two files, one called .gitignore, that's got all the settings for Visual Studio ignores. And of course, the README file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Git]] (1)
> **UI Navigation:** click on (3), go to (3), dropdown (2), in the sidebar (1)
> **Env Vars:** readme (4)
> **Tools:** visual studio (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** git (1)
> **Documentation:** the readme (1)
> **Speakers:** - [narrator] (1)

#### [Clone the repo to a developer computer](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=0)** - [Instructor] To clone the repository, I need to know the [[Microsoft Azure|Azure]] repo URL for the repository so in the Health Clinic, I've got two repositories. I'll click here and then choose the repository I want from this dropdown. I'll choose my simple repo. Then I'll click and clone to get the URL, copy that. Then I'll switch over to my command line interface, which in my case is a customized shell running inside [[Windows]] terminal. When I mean customized, this is [[Powershell]], but I've customized the way it looks and the way the prompt looks in PowerShell. So now I'll change directory to my source folder repos, and then to this learning Azure [[DevOps]] folder. Then I'll type in [[Git]] clone, paste in the URL, and before I run this, be clear, you have to have Git installed on your computer. I've got Git for Windows installed, so this should work. There you go, and now I will do a DIR. There's my folder, and if I change into that folder, I see my two files. I'll delete the folder. I'll go out to File Explorer and delete that because I'm going to clone it again this time using another technique. Back in the browser, I'll go to the clone repository and this time I'll ask the DevOps web portal to use one of the apps I have installed. Now there's a lot of choices of IDs to clone into, see a list here. The two that I use are Visual Studio
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=94)** and VS Code or Visual Studio Code, so let's start with VS Code, I'll click here. It's asking me to open Visual Studio Code. It's now asking me to allow the extension to open this URI. I pick my folder location and I get a clone. Now you might also see a login prompt. Once that's done, that folder's been created and there's the two files. Switching back to the DevOps portal, another way I can clone it, this time I'll clone it into Visual Studio itself. To do that, I'll work with a Visual Studio-specific project, so I'll go to the Health Clinic, go to repos, switch to my other repository. And if you look at the files, I see these SLN files, so that tells me these are Visual Studio-specific projects, so I'll choose to clone from here. Choose to clone into Visual Studio. Again, accept this prompt here. You might get asked to log in. At this point, I get this dialogue that says, "What are you cloning?" In this case, I'm cloning the Health Clinic, and here's the remote path, here's the local path. I've already cloned this in a previous run through, so I'll just click on connect. After a short wait, I see my Solution Explorer is showing folder view. I can also see my Git changes here. So the takeaway from this is that you might want to clone
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=188)** to your local developer computer. I've shown you three methods for doing that, but if you're already comfortable using any tool for cloning the repository, those will all work with Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (4), [[Git]] (4), [[Microsoft Azure|Azure]] (3), [[Windows]] (2), [[Powershell]] (2)
> **Tools:** visual studio (7), powershell (2), vs code (2), command line (1), windows terminal (1)
> **Env Vars:** url (3), dir (1), uri (1), sln (1)
> **UI Navigation:** go to (3), dropdown (1), switch to (1), click on (1)
> **CLI Commands:** git (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a repo branch](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=0)** - [Instructor] I'll look at a few other GET actions. In this video, I'll look at how to create a branch and use it for your code. I'll be working in Visual Studio Code. I'll be using the simple repo demo, which has this file, and I'll be making some simple changes through this README file. It's a good idea in a software team to create a branch whenever you want to work on new features. That way you are impacting only that branch and not the main branch of the application. Now the way you name these branches varies depending on your team conventions. Some teams like to use the name of the feature. Some teams like to use the name of the person creating the branch. I'll use a feature name for this example. Now, to get to the GET tools, I will go here to the source control tab, and then you can see there's a number of settings here, or features, commits, file history, branches. See there's only a single branch at the moment. And I can also perform actions by going up to these three dots for more actions and things like push or clone or checkout and so on. And what I want to do is go to the branch sub menu and choose to create a branch. I'll call this one add header. Press enter. So now I have a branch in my local clone copy. You can see the branch here. There's the add header. It's got a check mark by it that it hasn't been published. It says here, it has not been published to [[Microsoft Azure|Azure]] [[DevOps]]. So if any of my teammates were to go look for this new branch, they wouldn't see it. So let's go ahead and publish that.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=93)** I'll go back to the branch menu and choose publish branch. Now, when I hover over this, it says it's up to date with origin add header. No, I don't want to do get [[Fetch]], not at the moment. Now let's go verify that that branch is available in the web portal. Over in the portal, I open SimpleRepo and then go to this drop down, which shows me the branches. And I see there's the main branch which has the tag of default. And then I see my branch, this is the branch I created called add header. And of course, if I had rather I can create a new branch here, I could do it on the web, create the branch here, and then I would've to sync my local copy so I get the branch on my dev box.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[DevOps]] (1), [[Fetch]] (1)
> **API Endpoints:** get  (2)
> **UI Navigation:** go to (2)
> **Env Vars:** readme (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Edit and commit to repo](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=0)** - [Instructor] Next step is to make some changes to this file. So, I'll edit it in Visual Studio Code. I'll add this header like that, and then I'll save my changes, Ctrl + S. And you'll notice that over here in Visual Studio Code, this number 1 appears. There's one pending change. So, I click on that. That takes me to this part of the screen, this page, and I can see that there's one change here. So, I can right click on this and choose to stage the changes. I can choose to stash the changes. I can do all the actions here. What I want to do is commit the changes. So, the easiest way to do that in Visual Studio Code is just to go up here and add a commit message like that. Then, I'll click on this check mark to commit it. That saves it to my local repository. And then, the next step is to synchronize with the [[DevOps]] server. I have the choice of pushing the data directly to the server or issuing a pull request. And that's what we'll look at in the next couple of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1)
> **Tools:** visual studio (3)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Push the branch to DevOps](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=0)** - [Instructor] At this point, I have my changes on my local repository, but that's the only place where they're located, so I need to push them to the [[DevOps]] server, and that gives us the opportunity to talk about the difference. So, [[Git]] push is a Git operation, and that allows me to send the contents to any other remotes that I might have from my repository, and then the idea of a pull request is something that was coined by [[GitHub]], and it's also part of DevOps, and this is where I ask other people to pull my pending change into the repository. Here's the workflow. You push to the branch, on the remote, and then you take the branch and you do a pull request on the branch into the main branch. So, let's do the push first. So, I can do that by going to, but before I do that, let's switch over to the browser, move over here, and I'm in the AddHeader branch. I can see that here, and if I refresh this page, press F5, see the changes aren't here yet in the DevOps server. Now, I'll go to Visual Studio Code. I'll go to the Source Control page, and then I'll click here in the three dots, I'll do a push. You can see the status in the lower left. Now, I'll switch back to the server, refresh the page, and there is my change. So, at this point, I'm ready to make the pull request, from this branch into the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[Git]] (2), [[GitHub]] (1)
> **CLI Commands:** git (2), make (1)
> **Tools:** github (1), visual studio (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Create a pull request](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=0)** - [Instructor] I'm on the portal, and I can see that in this branch I updated it about 15 minutes ago. And at the top, there's this create pull request. So I can click here to create the pull request. I could also create the pull request in tools like Visual Studio or any of the other IDEs. But I'll do it here on the web portal. So I click here. I choose a title, and I choose a description. At the top, I can see a summary. There's one file that was changed. There's one commit. In this pull request, I can use markdown to add more markup to the description down here. I can also specify work items. If there's a work item that I am closing, I can choose that from this list. And I can add tags if necessary. But the main thing that I want to add is required reviewers. So I will add Tadd as a reviewer. And so he's the one that's going to be responsible for looking at this pull request and deciding whether he wants to pull it. Where's he going to pull it into? Well, you can see that up here, the main branch. Now, I can choose other branches. In this case, there's only two branches available. But I could say I want to pull this into any of the other branches that are in this repository. So I'm going to pull it into main, or I'm asking Tadd to pull it into main. I'm ready. I'll then create. It's marked as an active pull request. And if I go, let's see, if I go over here and look at pull requests, I can see there's one pull request created by me, and it has to be reviewed by Tadd.

> [!info]- Semantic Content
>
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Team review of pull request](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=0)** - [Walt] Now, we are logged in with Tadd's account and he's working in the [[Microsoft Azure|Azure]] [[DevOps]] portal. And right now, if you look at pull requests, there's no pull request. That's because he's in a different repository. He's in this MyHealthClinic repository. He switches over to the SimpleRepo repository. Now, he sees there's one pull request that's been assigned to him. So you can see active, completed, abandoned, and the ones that are assigned to me. So I click here, and then you see a screen similar to the one where I created the pull request. So you read the title, the description, you can see information about which files were changed, including the changes that are in that file. He can read that here and also do diffs on the values. He can see the updates and commits that are involved. He can go to overview. And one of the most important things about this is, remember, I'm asking other people to review this, and then if it's satisfactory, to pull it into the main branch, Tadd can have a conversation with me here. And that's one of the benefits of using tools like DevOps is that you can have this history affiliated with your work items and this history affiliated with your pull requests and commits. We can have a conversation here. And then when he is satisfied, he can go up here and do one of these actions. He can approve it, he can approve it with suggestions, he can wait for me, he can reject it. Now, in this case, there's only a single reviewer. If there were more than one reviewers, then they would all have to approve it before it gets merged into main. And speaking of merges, one of the issues we occasionally run into
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=94)** when you're writing software and doing pull requests is that there are merge conflicts where there are lines of code that aren't compatible. And so Tadd can check this out here on this top where it says no merge conflict. So he knows if he approves this, it's not going to be a problem. So in this case, he'll go up here and choose approve. It says, Tadd approved the pull request. And now, we can go back to pull requests and it says no pull request for current view. Now, let's take a look at it from my perspective. So over on my login, I can see that there's some updated just now. I can click on this. I see that it's been approved. So now, I can go and hit and complete this. Or what else are my choices? I can complete, abandon, or mark as draft. So I'm going to choose to complete. And it's asking me here, what do I want to do? What kind of merge do I want to do? So I can do a merge, no fast forward, squash commit, rebase and fast forward, and semi-linear merge. We have lots of choices. The one I need is merge, no fast forward. I also have some other things like what should we do after merging? Should we delete the add header branch after merging? Yes, we should. So I'll go ahead and complete the merge. So it shows that Walt Ritscher completed this pull request. And then, let's go take a look at branches. There's only a single branch now. So that's your complete workflow for working with a pull request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [walt] (1)


### 4. Azure Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [What are Azure pipelines?](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=0)** - [Lecturer] [[Microsoft Azure|Azure]] Pipelines is a set of services that automate your application build and deployment phases. This is [[Microsoft]]'s [[Continuous Integration (CI)|continuous integration]] and continuous deployment system. There is some overlap between continuous integration, CI, and [[Continuous Delivery (CD)|continuous delivery]], CD. Let's clarify the relationship between those two. First, it's important to note that there are various interpretations of what continuous delivery entails. When I first started doing automation, I found this somewhat confusing, especially around the concepts of continuous delivery and continuous deployment. Here's my take on these ideas. The primary goal of continuous delivery is to ensure that software can be reliably and rapidly released to production at any time. It focuses on keeping production up to date quickly and efficiently by deploying high quality, thoroughly tested code or components as fast as possible. Automation helps speed up deployments and quickly fixes any issues that arise, streamlining the process of delivering software to stakeholders. Continuous delivery involves automating the build, test, configuration, and deployment stages from development to production. To achieve the goal of delivering high value software to our users, the process is divided into two main categories, continuous integration and continuous deployment. Continuous integration is the practice of frequently merging code changes into a shared repository where automated builds and tests are run to detect issues early. Continuous deployment is the process of deploying every code change that passes the automated test
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=94)** through the production environment, ensuring that software is always in a releasable state. Continuous integration is the industry [[Microsoft Word|word]] that describes the process of automating the building and testing of code. This practice involves developers frequently merging their code changes into a central repository or automated builds and tests run. The main goal of continuous integration is to provide rapid feedback so that if there are any defects in the code base, it can be identified and resolved as soon as possible. In Azure [[DevOps]], continuous integration is part of the build pipeline. Continuous deployment is the industry word that describes the process of automating the deployment of the application which ensures the final product is made available to the customers. Continuous deployment complements continuous integration by deploying all code changes to a testing and/or production environment after the build stage. This means that on top of the automated testing, you have an automated release process and you can deploy your application at any time. Deployment can be manual, partially automatic, or fully automatic. In the latter case, every change that passes all stages of the production pipeline is released directly to customers without human intervention. And as your DevOps, continuous deployment is part of the release pipeline. Here's our first look at the process. The continuous integration process starts with a trigger, typically, a code commit to your [[Version Control]] system, as your pipelines automatically fetches the latest code and executes a build process defined in a YAML file or through the classic editor. Automated tests are run to ensure code quality.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=187)** This can include unit tests, integration tests, regression tests, and more. Successful builds produce artifacts, which are deployable components of your application. The term artifacts in the context of Azure pipelines generally refers to the output of a build process, which can include compiled code, binaries, or any files produced during the build. These are often referred to as build artifacts or pipeline artifacts. This is not to be confused with Azure Artifacts, which is a service for hosting and managing packages that can be consumed by various projects and services. That's the end of the build pipeline. Now we move on to the release pipeline. It starts with the pipeline artifacts created by the build pipeline. Release pipelines can have multiple stages, such as staging and production. Each stage can have its own set of deployment tasks. Before deploying to sensitive environments like production, manual approvals can be required. Artifacts are created and prepared for deployment to the target environment. At this point, we can release to production, which can be done manually. If automatic deployment is set up, the final deployment step happens without requiring manual intervention. Microsoft is not the only organization building CI/CD tools. There are several popular tools available that cater to different needs and preferences. Here's a list of some widely used CI/CD tools. They offer similar tools to Azure Pipelines and cater to teams working on other DevOps platforms. Let's talk about the benefits of Azure Pipelines
>
> **[4:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=280)** for DevOps teams. They are part of the larger Azure ecosystem, which includes a wide range of services and tools for building, testing, deploying, and managing applications. It is highly scalable, allowing you to run multiple jobs in parallel. This can reduce the time it takes to build, test, and deploy complex applications. Furthermore, Azure Pipelines is designed to automatically scale up the underlying infrastructure to meet your needs. With Azure Pipelines, you can define your pipelines using YAML. This allows you to version your pipelines along with your application code. Azure Pipelines provide comprehensive environment and security controls, ensuring that your CI/CD processes are secure and compliant. These controls include features like secure secrets management, role-based access control, and audit trails. There is a lot to learn about the services available in Azure Pipelines. We'll look at build and release pipelines in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Continuous Integration (CI)|Continuous integration]] (9), [[Continuous Delivery (CD)|Continuous delivery]] (5), [[DevOps]] (4), [[Microsoft]] (2)
> **Definitions:** is a  (3), means that (1), refers to (1)
> **CLI Commands:** cd (4)
> **Env Vars:** yaml (2)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)

#### [Continuous integration with build pipelines](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=0)** - [Instructor] Before talking about [[Continuous Integration (CI)|continuous integration]], let's examine the idea of code integration. This is a broad topic with various historical definitions, but for our purposes, it refers to the process of merging new code with existing code to create a unified version of an application. Code integration can range from modifying a single line of code, to merging a fully developed feature branch into the main code base. In large teams, this process often involves a continuous stream of updates from multiple contributors. Once the merge is complete, we need to test the integrated code to ensure that it works correctly and that it meets the project quality bar. There might be regression tests to ensure that the new code submissions do not adversely affect the existing functionality of the code. Obviously, testing the software by hand takes a lot of time, is repetitious and is susceptible to human error. We address human error by utilizing a reliable testing suite that consistently runs all tests in a repeatable manner. These testing systems are an integral part of the continuous integration process. Essentially, the workflow for updating the app code follows this diagram, whether you are using a manual or automated process. First you commit your code changes, and then you merge the new code into the main code base. Next, you build the app, which generates executables and other essential files for desktop applications, for web apps to build process generates minified files, and other site artifacts.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=93)** Finally, you test everything to ensure it works correctly. While it's possible to do this manually, automation is preferable, which is where the [[Microsoft Azure|Azure]] [[DevOps]] Build Pipeline comes in. The build process or the Build Pipeline is customarily triggered when code is committed into the [[Version Control]] system. There are many nuances to this process. Some teams like the immediacy of instant builds, meaning you trigger the build process with every code merge. Other teams prefer to consolidate the builds until the end of day. The so-called nightly build as your pipeline supports both of these scenarios. As pipelines can build applications on [[Windows]], [[Linux]], and Mac OS making it versatile for different development environments. Azure pipelines integrates seamlessly with various version control systems like Azure repos, [[Git]] [[GitHub]], and Team Foundation Version Control. This allows for automatic builds and validations whenever changes are pushed to the repository. You can set up build pipelines that run multiple jobs in parallel and define multi-phased builds to streamline the build process. As your pipelines supports continuous testing, allowing you to run automated tests with each build, you can customize your pipelines using YAML or the classic editor, and extend these pipelines with custom tasks, scripts, and third party integrations. The Build Pipeline generates build artifacts, which are the outputs of the build, such as binaries, libraries, or packages.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=187)** Azure Build Pipeline is a key part of Azure DevOps that automates fetching dependencies, compiling code, running tests, and creating build artifacts. It supports many programming languages and platforms. This automation maintains code quality and keeps the code base deployable, enhancing efficiency, and reducing human error in [[Software Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Version Control]] (3), [[Continuous Integration (CI)|Continuous integration]] (2), [[DevOps]] (2), [[Windows]] (1)
> **Definitions:** is a  (2), refers to (1)
> **Env Vars:** git (1), yaml (1)
> **CLI Commands:** git (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The pipeline components](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=0)** - [Instructor] [[Microsoft Azure|Azure]] Pipeline consists of several key components that work together to automate your build, delivery, and deployment process. We'll look at some of the components on this list. Typically, you define your pipeline in a YAML file, which outlines the steps to be taken during the build, test, and deployment phases. The YAML file can be stored alongside your code, making that easier to maintain and version the file with the [[Representational State Transfer (REST)|rest]] of your application code. Azure Pipelines reads this file to execute tasks in the order and the environment you specify. Agents are the backbone of Azure pipelines. An agent is a computing environment where tasks are executed. It's responsible for doing the work like checking out your code, running tests, and reporting the results. Azure Pipelines provides two types of agents. [[Microsoft]] hosted agents are ready-made environments maintained by Microsoft. They are pre-configured with popular software and tools, saving you the trouble of setting up and managing your own machines. Self-hosted agents are environments that you manage yourself. They give you more control over the configuration and can run on your [[Hardware]] or in the cloud. In Azure Pipelines, a job is a single phase of your pipeline, like building code or running tests. Each job runs on an agent and includes a series of steps. You can speed up your pipeline by running multiple jobs in parallel, or run them one after the other if they depend on each other. Each job has its own context and workspace, so variables and files created in one job are kept separate from the others.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=94)** This helps keep your pipeline clean and makes troubleshooting simpler. Stages in Azure Pipelines help you organize jobs in a logical way. They are the major divisions in a pipeline and help group related jobs together. They can represent different environments like development, testing, and production. They can represent related jobs like build, test, and deploy. This structure allows you to control the flow of your development process more effectively. Steps are the smallest unit of work in Azure Pipelines. They include tasks like running a script, publishing artifacts, or deploying to an environment. Each step runs within a job on an agent. You can define steps using built-in tasks from Azure Pipelines, or write your own scripts in [[Powershell]], Bash, [[Python (Programming Language)|Python]] or other languages. You can also enhance your pipeline with third-party tasks from the Azure [[DevOps]] marketplace. Tasks are pre-created scripts or extensions that you can add to your steps. They are designed to simplify common operations such as restoring new good packages or publishing artifacts. Tasks can be found in the Azure DevOps marketplace or can be custom made. They provide a convenient way to incorporate complex actions into your pipeline without having to write the scripts from scratch. Steps and tasks are both fundamental components, but they serve different purposes within a pipeline. A task is a packaged script that can be used as a step within a job, and a step is the action that is actually executed which can either be a script or a task.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=188)** A trigger tells the pipeline to run. Triggers can be based on events such as a commit to a repository or a pull request, or they can be scheduled to run at specific times. A pipeline approval is a type of check that acts as a gatekeeper before the deployment of a stage can proceed. They can be manual which requires a designated individual or group to review and approve the changes being deployed. This is helpful when moving to sensitive environments like production. The approval process ensures that deployments are intentional and verified, reducing the risk of unintended changes affecting critical systems. When an approval is required, as your pipelines will pause the execution of the pipeline before the stage that requires approval and it will only continue once the approval has been granted. Automated checks can also serve as approvals. These checks can be configured to meet specific conditions before a pipeline stage starts. For example, a pipeline might deploy only during business hours or after passing certain automated tests. Let's look at a visual to help understand the component relationships. Once we've configured a pipeline, it can be run in several ways. It's possible to run the pipeline manually. Someone on your team can start it at any time. Alternatively, we can set up a trigger like a code commit to start the build pipeline automatically. Pipelines are made up of one or more stages. A stage is a logical boundary in the pipeline and can be used to group actions like building the app, running tests, or deploying two pre-production. Each stage contains one or more jobs.
>
> **[4:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=282)** A job is run by an agent. An agent is designed to run only one job at a time. Within the job itself are one or more steps. As we've seen, a task is a package script that can be used as a step within a job, and a step is the action that is actually executed which can be either a script or a task. Now that we've seen the components, the rest of this chapter looks at how to use Azure Pipelines on the DevOps portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[DevOps]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft]] (2), [[Hardware]] (1)
> **Definitions:** is a  (6)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** yaml (2)
> **Tools:** powershell (1), bash (1)
> **CLI Commands:** python (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Explore the pipeline section of the DevOps portal](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=0)** - [Instructor] We'll take a quick look at the parts of the [[Microsoft Azure|Azure]] Pipeline. So, click on Pipelines. There are many sub-pages in here. The ones we're looking at in this video, Pipelines, Environments and Releases. So, it's a bit confusing here. It says Pipelines as the Azure [[DevOps]] section, and then, immediately below that is the Pipelines sub-page. This is where you find your build pipelines. Your Release pipelines are here. So, you can create a build pipeline, and when it's complete, it will trigger a Release pipeline to run. What about environments? An environment is a collection of resources that can be targeted by deployments from the pipeline. For example, a cluster of [[Virtual Machines]]. Typical examples of environment names are dev, test and qa, or staging and production. You find your build pipelines in here. I'm in the demo project and there's only one build pipeline in here. It hasn't run yet. So I can click on the blue button to manually run the pipeline. This also has triggers. Let's go see. Click on Edit. And then here I see the Tasks, Variables, Triggers, Options, and many other settings. And if you look at Triggers, and you can see that there's a [[Continuous Integration (CI)|continuous integration]] trigger set up. And it's a branch filter. So, if anything is integrated into master, it will trigger the build. If you go over here, it shows the list of tasks. So, there's get sources.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=93)** This is the build pipeline, and it's using the Azure Repo as the source. You notice there's lots of other choices. We can work with [[GitHub]], GitHub Enterprises, Subversion, [[Bitbucket]] Cloud, and other [[Git]] providers. This is using the repository, this part of this project. And then, I can see we get the sources. And then Phase 1, and we're running on an agent here. So, the agent is going to do all of this work. It's going to restore, it's going to [[npm]] install bower. It's going to run another npm installer. It's going to install bower. It's going to build and then test, and then publish the files to an output folder. And then some other items including copying files. This shows you some of the things we talked about in the last video. The agent and the tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[GitHub]] (2), [[npm]] (2), [[DevOps]] (1), [[Virtual Machines]] (1)
> **CLI Commands:** find (2), npm (2), git (1)
> **Tools:** github (2), bitbucket (1)
> **UI Navigation:** click on (3)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** we talked about (1), in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Explore the example web project](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=0)** - [Instructor] I created this [ASP.NET](https://ASP.NET) Core website in Visual Studio using the [ASP.NET](https://ASP.NET) Core template, it's using all the default settings. I've made one slight change to the code here in Layout.cshtml, it's right here on line 40. What I did is I'm reading the assembly's version number and printing that to the bottom of the page. And this will be useful when I create a build pipeline, I will be generating some version numbers, and we'll be able to see those version numbers on the bottom of the page. This is what the webpage looks like running on localhost, see, I'm running on localhost here. This is the standard template you get from Visual Studio. It has a menu bar across the top, some simple text, and there is the footer that has the version number. I put this in source control, and so, it is committed to source control. And if you go take a look at [[DevOps]], let's go to Repos. I'll open SimpleRepo. Open SimpleRepo, and then you can see that I added a source folder, I have a SLN file, this is from Visual Studio. And then within that, this is the code we just saw in Visual Studio. So that's already been committed to the repository. I've also created an app service in [[Microsoft Azure|Azure]]. This is the deployment location. I'll deploy the website here. And if you browse from this, it shows the URL that's used for that website. And since I haven't pushed any
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=94)** or deployed any files to the app service yet, I get the default page, which is saying, yes, your app service is running, but there's nothing to show here. If you're interested in setting up continuous deployment, you can click here to learn more about that, that will use the Azure continuous deployment. What we're going to be using is the one here in Azure DevOps, so I'll review it. This is the page running in localhost. This is the place where the page will be running when it's deployed to Azure. This is the app service. And this is where I'm going to create my pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[ASP.NET Core]] (2), [[DevOps]] (2)
> **Env Vars:** asp (2), net (2), sln (1), url (1)
> **Tools:** visual studio (4)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Add a service connection to Azure Resource Manager](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=0)** - [Narrator] In order to connect to my [[Microsoft Azure|Azure]] subscription, I need to create what's called the service connection. You can find that in Project Settings, click here. I will be connecting to Azure using the resource manager. So I'll select this radio button. And I'll use this service principle automatic. Now, the first time I ran this, I had to sign in with my credentials. Now it shows me my subscriptions available, and my resources group. I'm using this one for the course, and then I'll give it a service connection name here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=38)** Like that. And then I'll grant access permission to all pipelines. Now I have my connection and when I go to work with my pipelines, I can tell it to use this when it needs to connect to Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Explore the pipeline templates](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=0)** - [Instructor] One benefit from working with [[Microsoft Azure|Azure]] pipelines is the included templates. When you're creating a build pipeline, you can use a template to get started. We'll take a look at some of the templates that are available for [ASP.NET](https://ASP.NET). The first step is to open pipelines, and then go to the build pipeline section, that's this one here, click on a new pipeline. I've got two choices, I can use this editor for creating the new pipeline, which will generate a YAML file, or I can use the classic editor, which will create the pipeline without the YAML file. The benefit of using YAML is that it's a text file and then I can include that YAML file in my repo. For this example, I'll choose the classic editor. Then I'll choose my source. I'll use Azure repos [[Git]], I'll choose the team project, the repository that contains my code, that's a simple repo, choose the main branch, and click on continue. You can see there's a lot of templates here. There's .NET desktop, there's Docker containers, and many, many more, and the two that I want to look at are these two here for [ASP.NET](https://ASP.NET). So this one, build and test an [ASP.NET](https://ASP.NET) web application. This template, you set up the source, then it's going to run these steps on the agent. It's going to use NuGet, it's going to restore packages, it's going to compile or build the solution using the settings here, it'll test if we've got any tests set up, it'll publish symbols, and then it'll publish artifacts,
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=93)** that's a zip file in our case. This is only the build portion of the pipeline. Now, if we go back and choose the other template, you see what it says here? Build, package, test, and deploy an [ASP.NET](https://ASP.NET) Azure web application. This will include the build and the deploy part. I'll choose this one. Now, you see that I have to connect to my Azure subscription, that's why here and here have these red texts that says some settings need attention. Let's take a look at what's different in this template. It has this Azure web app deploy, so it's still got the artifact and the symbols and the test, it's also doing something called archiving, which wasn't available in the other template. My point is each one of these templates has different steps that you can use, and then you see how you configure them, you click on the item, and you change the settings over here in the right side of the screen. In the next video, we'll look at how to use this template to create our build and deploy pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[ASP.NET]] (4), [[Git]] (1)
> **Env Vars:** net (5), asp (4), yaml (4)
> **Exercise Files:** template (6), zip file (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** git (1), docker (1)
> **Cross-References:** in the next (1)

#### [Add a build pipeline](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=0)** - [Narrator] It's time to start setting some of the settings for this pipeline. I've got two areas I need to fix, they have the red text. So what's wrong here is I need to provide my [[Microsoft Azure|Azure]] subscription. Before we get there, let's take a look at the name. I don't like this name, so I'll go and put in simple web app. Go down here and the display name for this is going to be Azure Web App Deploy. I'll just go ahead and leave that as is. Then I'll go up here, I'll choose my agent pool. I'll use Azure Pipelines. I'll specify which agent to run. I have choices for MacOS, [[Ubuntu]], and for [[Windows]]. I'll choose the Visual Studio 2017 build agent. Here, I need to specify some value for the solution. Now if you want to know what to enter for these properties, there's two places to look. This I looks promising, but when you click on it, it doesn't give you much information. It just says this is an important settings. It can be shared between your pipelines, tasks and changed in one place. It's less intuitive, but the place to find out more details about what you're supposed to provide here is in this link. Click here and it tells me that this is a relative path from the repository route of the solutions or MSBuild project to run, for example and it tells me SLN. So this is the SLN file for my solution that also contains my project. So that looks good. Next, I need to specify my Azure subscription, and I already set up my service connection, so I should be able to choose that from here. And then go pick my app service name on Azure where I want to deploy it.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=92)** That's this app service. Now I'll go down to the Azure Deploy and notice this changed the name here. Now it says simplewebaapp-211, and I need to specify what type this is. So this is a web app running on Windows. At this point, all the red text has disappeared. Now what else are we going to fix? For our Get Sources, we already specified our repository. I'm going to leave the NuGet part. I'll keep using this version of NuGet. I want it to restore the packages. I want it to build the solution. Now, I'll come back here later and we'll set up some version numbers. At least that's my plan. I want it to archive files and it's going to archive on [[DevOps]] somewhere. It's going to archive it as a zip file. Replace the existing archive, that looks good. Well, I want to go back and look at Build. And one of the choices here is whether or not to clean the solution. And there's a bunch of other advanced settings like do you want to record the project details as part of the build? I'm not testing anything. Finally, publish an artifact. This is where it's going to publish the, I believe this is where the zip file goes. So that looks good, I'll go ahead and save. I can save in queue, which would save this pipeline and then also run the pipeline, queue it up for running. I'll just choose to save it. Click on Save. Now we're ready for the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Windows]] (2), [[Ubuntu]] (1), [[DevOps]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** sln (2)
> **UI Navigation:** click on (2)
> **Exercise Files:** zip file (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)

#### [Manually run and troubleshoot a pipeline](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=0)** - [Instructor] Now that we have our pipeline, it's time to test it, see if it works correctly. You click on it and then you can run it manually from the [[DevOps]] portal by clicking on this blue button, "Run pipeline." Once you bring up this dialogue, you specify which agent pool, you specify which agent, which branch in the repository and other advanced settings, and then you click on run. Now, we've already set these when we were setting up the pipeline, but we can alter them and use alternatives while we're running the pipeline manually. On this build, it takes about two minutes to run the builds. I will cancel out and instead we'll look at some of my past runs. After I created this pipeline, I started testing it, and you can see that I have some successful runs. I have two successful runs and I have five failed runs. Now let's prove it's successful. Click here. We see that it has the green check mark, and I can also verify this by going to the URL for the app service and see that my website is now running in [[Microsoft Azure|Azure]]. That's our end goal, is to build our product and push it out to Azure. That's working. Now let's talk about the troubleshooting steps. When you have a failed build, you can click on any of these items and read details. For example, here it says that I had trouble with .NET Core SDK, requires at least version 16.7.0 of MSBuild. The reason I got this error is because I was using the wrong agent. Let's take a look at what I fixed. I'm going to go back to the pipelines,
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=95)** click here, choose to edit, and I had to make two fixes in order to get the successful build. First of all, I had to use this agent, [[Windows]] 2019, that's the one that has the correct MSBuild version, so I had to switch that. And the other thing is, I started out by using .NET 5 for its website. We rolled it back to .NET 3.1, .NET Core 3.1 I should say. And the problem was, is we didn't have the SDK available for the build engines, so I had to add an additional step to the agent, that's the step right here. The way you add a step, by clicking on the plus sign for this agent, choosing the task, clicking on the add button when you find the task that you want, and then you come over here and you make some configuration changes, where, in my case, I said I was installing the SDK and that this is the version that I want, "3.1." and then this is a wild card. I want it to install it into this folder. So now when I run the build, it's successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[DevOps]] (1), [[Windows]] (1)
> **Env Vars:** net (4), sdk (3), url (1)
> **Versions:** 3.1 (3), version 16 (1), 7.0 (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Update the repo to trigger the build](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=0)** - [Instructor] We've set up this pipeline so that it is triggered when there's a change to the repository. So that could be a commit, it could be a pull request, it doesn't matter. As soon as there's a change to the repository, it will trigger the build. So to demonstrate that, I'm logged in with Terri's account here. She's opened up this main page, the site, this index.cshtml. She's going to make a change here, so I should choose edit
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=31)** which makes the change there. Now over here on the left side of the screen, I've got my account and I'm looking at the runs for the pipeline. We'll see what happens when I click and commit. After about 30 seconds, I see this new link. It says load new run. I click here, and I can see this spinning wheel, and that is running, so that has kicked off the pipeline. And after about two minutes, I will have the update here, and then we'll refresh this homepage here to see if there's any new changes. It's been two minutes, and now I will refresh the page. And it verifies that we've deployed to the [[Microsoft Azure|Azure]] app service. And then I'll click over here. Actually, I don't need that tab open anymore. Click over here, and I can see there's my successful run, and there's some details here that this was triggered by Terri adding something to the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Add a release pipeline](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=0)** - [Instructor] We've successfully created this pipeline and tested it. It is combination of building the items for our application and also deploying to the [[Microsoft Azure|Azure]] app services. In many instances, you want to separate these. You want to have a build pipeline and a release pipeline. So let's see how you would do that. Go to Pipelines. We're going to add another pipeline. The way you do that would be click here. Then instead of choosing this item, this template, which builds package tests and deploys, I choose this one, build and test only. So I've done that already. It's identical, except it's missing the deploy piece. That's called Simple Web App Build Only, and I've tested it and that is working. Now I'll go over to Releases. And here you would create a new release pipeline, and you need to set up two things, a stage and an artifact. So for the stage, I want to do an Azure App [[Service Deployment]]. So I click here and choose Apply. I'll call this Production. Then you have to set up an artifact. So what we want to do is listen for the build to complete. So I choose Build, and then I will choose the name of the build from this list, like that. And then I pick what I want to pull out of the build, I want the latest version or any of these other items. Then I'd click on Add. So when a build is released and successfully published, then I would go ahead and do this task.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=94)** Now I've already created one, so I will cancel out of this. And you can see I've already done a Release and Release 2 going to production, and I can create a release at any time by doing this, manually creating it. So now that's queued up. It's going to pull the information out of the build. Then when it's done, it will push that to Azure App Services. Of course, this will also work if we add new items to the source control, it'll trigger the build, which then in turn will trigger the release.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Service Deployment]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Use custom variables in the pipeline](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=0)** - [Instructor] We've seen that there's a lot of options available for build and deploy pipelines. The last thing I want to look at is how to customize it with your own custom data and how you can move that data between parts of the pipeline. If you look at the footer on the bottom of this page, you see there's a version number. So I have some version number code in the [ASP.NET](https://ASP.NET) site that picks this up. This is not the standard number format that is used by a .NET core. So what I've done is I modified the way the build number is created, and I did that by going over here to my pipelines. Click my pipeline, click on edit, and I've defined two variables. Now it comes with a set of predefined variables, like the BuildConfiguration is set to release. System.debug is set to faults. I added a major version and minor version. You do that by clicking on the add button. So a major version is set to two, minor version is set to one. And then I use these variables over here in options under the build number format. So I took the default numbering format for .NET and I made it my own. So I added the major version and then the minor version, and then the [[Representational State Transfer (REST)|rest]] of the data. So now when it builds, it will generate this in the assembly. This is the number that's inside the assembly. And then my code is just picking that up and printing it out to the bottom of this [ASP.NET](https://ASP.NET) page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ASP.NET]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** net (4), asp (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 5. Extending DevOps

[↑ Back to Table of Contents](#table-of-contents)

#### [Extensibility and integration overview](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=0)** - [Instructor] No matter how comprehensive a framework, there will always be some features that haven't made it into the shipped product. Systems that provide extension points are valuable because third parties can enhance the ecosystem with their offerings. [[Microsoft]] systems are known for their extensibility support. Each of the systems shown here can be enhanced with additional features. This open approach allows other companies and programmers to create tools that add extra functionality to the system. All these Microsoft systems have a marketplace where you can find and install extensions. The same applies to [[Microsoft Azure|Azure]] [[DevOps]]. Use a marketplace to find and install Microsoft and third-party extensions. The marketplace offers thousands of extensions that can be installed to improve your DevOps workflow. This is a convenient way to add new tool sets to your organization and projects. Development teams can purchase third-party tools, use the free extensions or create their own. On the marketplace at [visualstudio.com](https://visualstudio.com), click on the Azure DevOps section and then see some of the more popular and featured extensions here. Scroll down to the bottom of this page and you can see them categorized by type. Azure Boards, Azure Pipelines, Azure Repos, Azure Test Plans and more. And then of course, you can drill down and see all the extensions by clicking on See more. Looks like the day I'm looking at this, there's 318 Azure Board extensions. Another way to extend Azure DevOps is by integrating with your team chat and collaboration software. Microsoft provides DevOps extensions
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=94)** for [[Slack]] and [[Microsoft Teams]]. Additionally, there are extensions available for Discord, [[Google]] Chat, and other platforms. They enable [[Real-Time]] notifications about build statuses, pull requests, and work item updates, facilitating seamless communication within your development team. But Microsoft's Teams integration allows you to receive notifications and create work items directly from your chat. For example, let's look at this demo team I have in Slack. Check out the lower left sidebar. You can see we've installed the Azure Boards, Azure Pipelines, and Azure Repos extensions. More details about this will be covered in the next video. Azure DevOps extensions can be categorized into several other types based on their functionality and use cases. Here are some of the key categories. Project management. These tools enhance project management capabilities by providing advanced task tracking, sprint planning, and backlog management. They can integrate with other project management software, allowing for a unified view of project progress and team workload. Extensions in this category provide static code analysis, code quality checks, and linting tools. They help maintain high-quality code by identifying potential issues early in the development process. Examples include SonarQube for comprehensive code analysis and [[ESLint]] for [[JavaScript]] linting. Custom widgets for [[Dashboards]] provide visualizations and metrics and reports that help teams monitor the health and progress of their projects. These widgets can display information like build statuses, work item trends
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=187)** and code coverage metrics. Extensions offering insights and analytics help teams understand various aspects of the development process, such as build performance, test results, and code coverage. Azure DevOps analytics provides powerful reporting capabilities and customizable dashboard to track key performance indicators. Tools in the API and connectors category provide connectivity to other platforms and services, such as cloud providers or third-party applications. For example, the Azure DevOps [[Representational State Transfer (REST)|REST]] API allows you to programmatically interact with [[Azure DevOps Services]], enabling custom integrations and automations. Extensions that can scan for security vulnerabilities in code and dependencies help ensure that applications are secure. Tools like a WhiteSource Bolt and Snyk can identify vulnerabilities in open source libraries and dependencies. The compliance extensions help ensure compliance with industry standards and regulations by providing features like audit trails, policy enforcement, and reporting. The tools in this category help you integrate with popular integrated development environments like Visual Studio and code editors like Visual Studio Code. They provide features like source control integration, work item tracking, and build management directly within the editor. This is the [[Code Review]] and pull request category. These extensions enhance the code review process and manage pull request more effectively. They provide features like inline commenting, automatic code review checks, and merge conflict detection. The Azure Repos extension, for example, offers a rich set of tools for managing pull requests
>
> **[4:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=281)** and conducting code reviews. Now, let's look at service hooks. They help view integrate with external services, enabling automated workflows and notifications. Service hooks can trigger actions in other services, such as sending a message to a Slack channel when a build completes or creating a new issue in [[GitHub]] when a work item is updated. You could, for example, automatically create a card in [[Trello]] when a work item is created, or send a push notification to your team's mobile devices if a build fails. Service are based on the publisher/subscriber design pattern. In this classic pattern, publishers define a set of events such as Build Started or Build Complete. You can create subscriptions for those events in the subscriber applications. In this example, we have [[Microsoft Office]] UserVoice and Azure Storage acting as subscribers. Each subscriber defines the action to take when the event is triggered. For instance, you could add a row to an [[Microsoft Excel|Excel]] table or update a feature request on UserVoice. If none of the published extensions in the marketplace meet your needs, you can create your own. However, this is beyond the scope of this course. For the rest of this chapter, we'll explore how to integrate with Slack and how to install some marketplace extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[DevOps]] (8), [[Microsoft]] (5), [[Slack]] (4), [[Code Review]] (3)
> **Analogies:** for example (4), such as (4), for instance (1)
> **Tools:** slack (4), visual studio (2), discord (1), github (1)
> **Env Vars:** api (2), rest (1)
> **Prerequisites:** install (3)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), scroll down (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)

#### [Add Azure DevOps apps to Slack](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=0)** - [Instructor] To add an app to a workspace, open your workspace in [[Slack]], then go to the bottom of the left sidebar and choose Add Apps, and then search for your app here. I'll look for [[Microsoft Azure|Azure]]. You'll see a list of apps that start with Azure. It's a similar experience in [[Microsoft Teams]]. Now, in this case, I've already installed three of these apps, so these top three items are from [[DevOps]], and you can see, I can tell they're installed because I can see 'em over here in the left sidebar, but also they don't have the Add button. For the apps that I haven't added yet, I would click on the Add button. That will take me to a screen that asks me to approve the process. In some cases, it'll ask me which channel to synchronize with. When I added Azure Boards app, I said to synchronize with the Board messages channel. And then for the Azure pipelines, I synchronized to pipeline messages, and you guessed it, Azure repos goes to repo messages. That's the basics of adding the application. The next step is to configure it to work with your Azure DevOps projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[DevOps]] (2), [[Slack]] (1), [[Microsoft Teams]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** slack (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Configure Slack channel to work with DevOps](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=0)** - [Instructor] Now I have the application installed, I want to start configuring it to work with my [[DevOps]] project. You can see that there's some items listed here. Use /azrepos signin to sign in my account. So let's do that. Press that, press enter. And it tells me I'm already signed into [[Microsoft Azure|Azure]] Repos with my instructor account. So that looks good. So now what can I do? I'll open help by pressing the slash key, then type azrepos. I can click on this to get an idea of what I can do. This says I need to subscribe to a repository URL. So I switch over to the DevOps portal, open my repo, grab this URL, and click here. [[Slack]] enters the beginning part of the command azrepos. And then I'll say subscribe. Paste in my URL. Now I see in Slack this message that I've been added to a subscription for a pull request and for a notification. And that'll be for my repository simple repo. That means if a pull request is created, I should see a notification pop in this channel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Slack]] (2), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** url (3)
> **Tools:** slack (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Examine configuration messages](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=0)** - [Instructor] Let's take a look at some of the messages we can get from [[DevOps]]. I'll go to board-messages. Scroll up this list. And you can see some of the commands I've issued. So I started with [[Microsoft Azure|Azure]] Boards. I signed in. I linked to one of my projects. So I have linked to the HealthClinic project. And then I started adding some subscriptions, what I want to listen for. So I added a subscription for Work item created. "Work item created of type: Any." And I added a second subscription for Work item updated for any type. Add a new subscription, click on the add subscription button, and then fill out the subscription information. Here's my area path. Here's the event. Let's say work item deleted. Then, I can choose my filter. Let's say I'm only interested in bugs being deleted. Click on Save. It gets updated. Then, you can see that I'm starting to get some information. There was a "Walt Ritscher updated a Product Backlog Item." Are details here showing that I assigned it to Tadd. So let's take a look at how that works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** click on (2), go to (1), scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Watch integration message flow into Slack](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=0)** - [Instructor] This video, I'll make some changes in the [[Microsoft Azure|Azure]] [[DevOps]] Boards, and we'll see the results showing up, the notifications showing up in [[Slack]]. I have Azure DevOps portal open and I've opened the Azure Boards view. I'll make some changes to this card. On the left side of the screen is my Slack channel. I'm in the board messages channel. I should see some information pop up on the bottom of this channel when I make the changes. So, I'll click here to open. I'll assign this from Terry to Tadd, and I'll change the priority level to 2, and also change the amount of effort to 5, and then Save & Close. After a few seconds, I see it pop up on the bottom of the channel. Priorities 2 has been assigned to Tadd. And also, you notice there's a hyperlink here, so I can click on this, and that'll take me over to Azure DevOps, to the web portal, to that work item.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[DevOps]] (3), [[Slack]] (2)
> **CLI Commands:** make (3)
> **Tools:** slack (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [What extensions can contribute](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=0)** - [Instructor] In this video, I will showcase some of the places where extensions from the marketplace can contribute new functionality. Later in this chapter, we'll explore two free extensions from the marketplace. One interesting aspect of extensions is that they can alter the user interface here in the [[DevOps]] portal. They can add tabs, pages, sections, and context menus. These are called contribution points in the DevOps documentation. Let's talk about where it can extend. These are called top-level pages, boards, repos, pipelines. So, it can add its own top-level page. And then within a page, these are the subpages, so it can add items to the subpages. This is called a context menu, these three dots. So, I click on that. It shows the context for this item. It can add items to the context menu. It can also add pages here like this details page or this graph page, or any of the items, just so I can add items here. And then these are called groups, these vertical sections here. So, it can add its own groups. And then within a group, it can add its own fields. So, it can totally customize the way it fits into the DevOps portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Use the marketplace to install free extensions](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=0)** - Let's see how to install an extension. First step is to go to this section on the [[DevOps]] portal. Click here and choose Browse Marketplace. We'll install two free extensions. The first one we're looking for is called Code Search. This is a free extension from [[Microsoft]]. This is the one we're looking for. I'll select this extension. It's useful as it allows us to search through our repository code with the [[Microsoft Azure|Azure]] search engine. Click here to get it free. Then I choose my organization from this dropdown, and then choose install. Go back to the Marketplace. Next, I'm looking for another free extension called Personas. This is the one. Go through the same steps. Now that they're installed, I can go look back to my organization. In the next demo, we'll look at how to use the Code Search extension.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - let (1)

#### [Use the code search extension](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=0)** - [Instructor] We've installed the code search extension in a project, and remember, it's project specific. So if I go to this other project, this Dev Course 471 course, and I look in the search box, I see that I'm searching through filters for work items. If I look at the 211 project and go to that same place, I see a different set of information. So this is showing that not only can I search through my work items, but I can also search through my code. So if I look for a [[Microsoft Word|word]] like print, in my results, I get 37 code results, and I can see there's 37 code results and there's five work item results. Without the code search extension, I would only see the work items. I can also filter by extension or by file name or path or projects, I'll filter by two, I'll choose an extension, we'll look for the word welcome. I know for sure it's in this index.cshtml file because we worked on that in this course. Now I want to look for files with the [[JavaScript]] extension, so I'll say ext: JavaScript or js, do a search. Now it's returning matches for just our JavaScript files. I can also search, let's just look for one repo.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=87)** This search shows a single file, the index.cshtml file that is in the simple repo. In the previous results, those JavaScript files were in another repository. The takeaway for us, the code search extension gives us more options for searching. Remember, this is installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Microsoft Word|Word]] (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [Use the persona extension](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=0)** - [Instructor] A persona is a fictional character that represents a subset of our users. A persona typically has a name, a picture, and a list of relevant characteristics. They encourage us to embrace a user-centered approach, so they're typically added in user stories or features or requirements. So for my example, I will go and add them to Feature, so I've open Work Items. I've filtered the features, I'll choose this Patient Register. And at the bottom of this list, here's something that was added by the extension, this Personas affected. I currently don't have any personas, so I'll create one. That takes me to a new page that was added by the extension. Click on Create Persona. This is one of our nurses, her name is Shanice. I'll write out some details about what she needs here in the description, and then I'm going to add this to All teams in this project, that looks good. Oh, and I need to add a picture, so Select avatar. This looks good. Click OK. I've got her picture, her name, her description. I'll click on Create. So now, let's go back over here to the Patient Register. I'll refresh the page. What persona is affected by this? I'll choose the persona, click on OK. And now, save this work item. We'll go back to Work Items and reopen this Patient Register. And now, we can see that personas affected is Shanice.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=93)** So this is one of the examples of how you can extend the feature set of [[Microsoft Azure|Azure]] [[DevOps]] with extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** click on (3)
> **Analogies:** picture (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Additional Topics

[↑ Back to Table of Contents](#table-of-contents)

#### [Streamline dependencies with Azure Artifacts](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=0)** - [Instructor] In modern [[Software Development]], efficient management of dependencies and package sharing is crucial for maintaining smooth and effective workflows. The complexity increases significantly as [[Software Projects]] grow in size and age. Imagine this scenario. A company is developing a large-scale application using a [[Microservices]] architecture. Each microservice is developed, tested, and deployed independently by different teams using various programming languages and package managers. Those package managers could be [[npm]] for [[JavaScript]], NuGet for dotnet, and pip for [[Python (Programming Language)|Python]]. This distributed development approach, while powerful, introduces several challenges. One is [[Dependency Management]]. We need to ensure that all microservices consistently use the correct versions of shared libraries and dependencies. What about [[Version Control]]? We need to track different package versions and maintain backwards compatibility. We need to maintain security and ensure that only authorized personnel can publish or consume packages. Then there's coordination across package managers. Different teams often use various programming languages, and package managers have different versions from other teams in the same company. Plus, what about private packages? The ones written for the company and not intended for outside consumption? That brings us to [[Microsoft Azure|Azure]] Artifacts. It is a universal [[Package Management]] tool designed to address these challenges. It provides a centralized repository for storing all packages. This ensures consistent access to dependencies across all teams.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=93)** By setting up your packages once in Azure Artifacts, all teams can use it as the central source for managing and utilizing packages. Let's talk about some key features of Azure Artifacts. First, it's a Universal Package Repository supporting a wide range of package types. This flexibility allows teams to manage all their dependencies in one place regardless of the programming languages or technologies they use. One of the standout features is its seamless integration with Azure [[DevOps]], you can easily integrate package management into your [[Continuous Integration (CI)|continuous integration]] and continuous deployment pipelines, ensuring that your applications always have access to the latest and correct dependencies. Security is a top priority when it comes to managing those packages. Azure Artifacts provides robust access control mechanisms, which allows you to define who can publish, who can consume, and who manages the packages. You can also enforce policies to ensure that only approved packages are used in your projects, thereby enhancing the security and reliability of your applications. Managing dependencies and versions can be a complex task, especially in large projects with multiple teams. Azure Artifacts simplifies this process by providing built-in versioning support. You can easily manage different versions of your packages. Additionally, Azure Artifacts helps you track and resolve dependency conflicts, making it easier to maintain a stable and consistent build environment. To get started with Azure, you create a feed. You can create multiple feeds to organize your packages based on different projects or teams.
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=186)** Creating a feed is simple. It can be done through the Azure DevOps portal. Once you have a feed, you can start publishing packages. As I mentioned, Azure Artifact supports various package types, and you can use familiar tools like NuGet, NPM, or Maven to publish your packages. The process is straightforward and well documented, making it easy for developers to get up and running quickly. Consuming packages from Azure Artifacts is just as easy as publishing them. You can configure your projects to use packages from your feeds, and Azure Artifacts provides detailed instructions for different package types. With the integration into your CI/CD pipelines, you can automate the process of restoring and updating packages ensuring that your builds always have access to the latest dependencies. Azure Artifacts is powerful. It helps simplify the process of managing dependencies ensuring packages. Whether you're working on a small project or a large enterprise application, Azure Artifacts provides the tools you need to streamline your dependency management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), [[Microservices]] (2), [[npm]] (2), [[Dependency Management]] (2), [[Package Management]] (2)
> **CLI Commands:** npm (2), dotnet (1), pip (1), python (1), cd (1)
> **Env Vars:** npm (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Enhance testing efficiency with Azure Test Plans](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=0)** - [Presenter] In the rapidly evolving landscape of [[Software Development]], maintaining high standards of quality is paramount. [[Microsoft Azure|Azure]] Test Plans, a comprehensive testing solution integrated within Azure [[DevOps]], offers a robust framework to ensure that applications are reliable, functional, and user-friendly. Let's talk about the two separate testing segments in Azure DevOps. We talked about Azure Pipelines testing earlier in the course. This is a crucial part of the build and release process. It supports a range of tests including unit, integration, regression, and UI tests. Azure Test Plans, on the other hand, provide a comprehensive suite of testing tools within the Azure DevOps ecosystem designed to support all types of testing needs, including [[Manual Testing]], exploratory testing, and automated testing. Azure Test Plans is tailored for managing and executing tests to ensure software quality, while Azure Pipelines provides a framework for automating the entire software release process from code commit to production deployment. Both are integral to Azure DevOps contributing to a streamlined and efficient software development lifecycle. Azure Test Plans is a browser-based test management solution. It allows you to plan, execute, and track scripted tests. You can organize test into test plans and test suites, assign them to testers, and monitor the test and the tester's progress. This structured approach ensures that all aspects of your application are thoroughly tested. Exploratory testing helps uncover defects and improve application quality.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=95)** Exploratory testing is an approach to [[Software Testing]] where the testers actively explore the application without predefined test cases. Instead of following a strict script, testers use their creativity, intuition, and knowledge of the application to identify defects. Using the Azure Test Plans test and feedback extension, you can conduct efficient testing sessions, document findings in real time, and resolve issues within Azure DevOps. Gathering feedback from stakeholders is crucial for delivering a product that meets user expectations. Azure Test Plans includes tools for collecting feedback from users outside the development team, such as marketing or sales. As I mentioned earlier, the test and feedback extension allows stakeholders to provide feedback directly on the application. This extension is designed to be user-friendly, enabling non-technical users to contribute valuable insights. Traceability in Azure Test Plans is a powerful feature that ensures all aspects of your development process are linked and tracked. It allows you to connect various artifacts within your development lifecycle, such as requirements, test cases, code changes, builds and releases. This linkage enables you to track the progress and quality of your project from start to finish, ensuring that all requirements are tested and all defects are addressed. Azure Test Plans is not included in the free tier of Azure DevOps. To access its full features, you need to upgrade to the basic plus Test Plans access level. Azure Test Plans is a powerful tool for managing
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=188)** and executing tests in your software development lifecycle. Whether you are conducting manual, exploratory, or automated testing, it has the tools you need to ensure quality in your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (17), [[DevOps]] (6), [[Software Development]] (3), [[Manual Testing]] (1), [[Software Testing]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### [GitHub actions versus Azure Devops](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=0)** - [Instructor] We've spent the entire course exploring the features of [[Microsoft Azure|Azure]] [[DevOps]]. Given that [[Microsoft]] also owns [[GitHub]], you might be curious about what GitHub has to offer in the realm of DevOps. Both are powerful platforms designed to support the [[Software Development]] lifecycle, but they cater to slightly different needs and audiences. GitHub actions enables CI CD automation, allowing you to build, test, and deploy your code directly from GitHub. This is comparable to Azure pipelines. GitHub projects offers project management features to organize and track your work with Kanban Boards and task list. And Azure DevOps, this would be the Azure boards feature. GitHub packages allows for easy hosting and managing of project dependencies. In Azure, this would be Azure Artifacts. GitHub issues facilitates tracking bugs, tracking enhancements, and tracking tasks with a robust issue tracking system. Azure Boards offers an equivalent feature for project management and issue tracking. GitHub [[Codespaces]] provides a cloud-based development environment, ensuring consistency and flexibility in your workflow. Microsoft previously offered Visual Studio Codespaces a similar service, which has since been integrated into GitHub Codespaces. GitHub's security tools help you identify and fix vulnerabilities in your code, Azure DevOps offers GitHub advanced security for Azure DevOps, which provides a suite of security features similar to those found in GitHub Security. GitHub discussions fosters community engagement and collaboration through threaded conversations.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=93)** Azure Boards includes discussion capabilities similar to GitHub discussions. Lastly, GitHub repo serves as the core of your project in GitHub. This has become the go-to for [[Version Control]] and collaboration due to its seamless integration with other development tools, extensive community support, and powerful features like pull requests, branch management, and [[Code Review]] capabilities. This is akin to Azure Repos. Let's look at some of the GitHub services in more detail. I'll start with GitHub actions. It has features like workflows for automating tasks like building, testing, and deploying code. It has actions, of course, which are the reusable units of code that performs specific tasks within the workflow. There's the secrets part. GitHub Actions has ability to manage your secrets for storing sensitive information like API keys and passwords. There's a marketplace, which is a repository of prebuilt actions created by the community and GitHub, and then there's something called Matrix Builds in GitHub Actions, which lets us run jobs in parallel with different configurations. In GitHub projects, there's project management through Kanban style boards, there's integration with issues. You can link a GitHub issue to the project board for seamless task tracking, and of course, there's automation. You can automate issue movements across columns in the boards based on triggers. GitHub packages, this is for [[Package Management]], you can host and manage packages for various languages, including MPM, maven, NuGet, and Docker. It of course, integrates with GitHub repositories
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=187)** for easy publishing and consumption of packages. Then, there is security and access control, manage permissions, and use GitHub's security features to control access. One of my favorite features in GitHub, there's so many, but I like this one a lot, is GitHub Codespaces. It is a cloud-based development environment that can be set up instantly. It can be customized with pre-configured environments, either from the community or from your company or your team. These can be tailored specifically to your project needs, but that means when you start up the code base, it's set up the way you want, and it supports collaboration, shared development environments with team for collaborative coding. GitHub issues, supports issue tracking that can be tracking bugs, tracking enhancements, or tracking tasks to be managed or completed. It supports labels and milestones, these are ways of organizing and prioritizing issues. Also has templates, use issued templates to standardize reporting. GitHub offers a comprehensive suite of tools that cater to various aspects of the software development lifecycle, including [[Continuous Integration (CI)|continuous integration]] and continuous deployment, project management, package management, development environments, issue tracking, community engagement, security and analytics. These tools are designed to integrate seamlessly with GitHub repositories, providing a cohesive and efficient workflow or developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (31), [[Microsoft Azure|Azure]] (11), [[DevOps]] (5), [[Codespaces]] (4), [[Microsoft]] (2)
> **Tools:** github (31), visual studio (1)
> **CLI Commands:** cd (1), docker (1)
> **Env Vars:** api (1), mpm (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)
> **Prerequisites:** set up (2)
> **Exercise Files:** github repo (1)


### 7. Continue Your Journey

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=0)** - [Walt] Congratulations, you've reached the end of the course. It's been a journey. We explored a range of [[Azure DevOps Services]]. Perhaps you are wondering what to do next. In this course, we focused specifically on [[Microsoft]]'s [[Microsoft Azure|Azure]] [[DevOps]]. While we covered many topics, it's important to be realistic. It's not possible for us to look at every aspect of Azure DevOps in just a few hours. My goal was to identify the core elements of Azure DevOps and provide a broad overview of what Microsoft offers. When it's time to dive deeper into DevOps, consider exploring additional courses available on [[LinkedIn]] Learning. These courses cover various aspects of DevOps, from advanced automation techniques, to in-depth practices for [[Continuous Integration (CI)|continuous integration]] and deployment. In addition to the general DevOps principles, there is a wealth of Azure DevOps-specific content available. After completing this course, you'll find even more to explore. Each of these topics is fascinating, and worthy of a deeper look. I'm Walt Ritscher. Thanks for watching this course. I have many other courses available that you might like. I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (7), [[Microsoft Azure|Azure]] (4), [[Microsoft]] (2), [[Azure DevOps Services]] (1), [[LinkedIn]] (1)
> **Cross-References:** we covered (1), in the next (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [walt] (1)


## Instructor

- [[Learn-it Labs]]
- [[Walt Ritscher]]

## Skills Covered

- Azure DevOps Services
- DevOps
- Microsoft Azure

## Path Context

### In [[Getting Started as an Azure Developer]]
← [[Azure Storage Essential Training (2021)]] | **6 of 7** | [[Developing Ci Cd Solutions With Azure Devops]] →

## Appears In

- [[Getting Started as an Azure Developer]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Leveraging Google Cloud Developer and DevOps Tools]] — DevOps
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[DevOps Foundations- Your First Project]] — DevOps
- [[DevOps Foundations- Monitoring and Observability]] — DevOps

---

[↑ Back to top](#)