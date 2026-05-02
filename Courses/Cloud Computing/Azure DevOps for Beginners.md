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
created: 2026-05-02
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

#### Use Azure DevOps to enhance application development
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=0)** - [Walt] Creating software with a team requires a set of tools to help plan the project, collaborate on code, and run test cases, and then build and deploy the code efficiently.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=8)** It's natural for software vendors to bundle these services together.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=11)** Nowadays, we call these DevOps suites.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=14)** Over the years, Microsoft has adopted the use of DevOps practices and created tools that bring the DevOps workflow to everyone.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=22)** Hey there, I'm Walt Ritscher.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=24)** Join me and we'll explore how development teams can manage work efficiently using Azure Boards.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=29)** There's a section in this course on Azure Repos where you can see how to use Azure DevOps to host your source code.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=35)** Next, we'll see how Azure Pipelines can help you host build and deploy your code in the cloud.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=39)** Finally, we'll look at how Azure DevOps integrates with other tools and how to customize your processes with extensions.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-azure-devops-to-enhance-application-development?u=76281980&t=46)** Let's go explore Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (6), [[Microsoft Azure|Azure]] (6), [[Microsoft]] (1), teams (1), next (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [walt] (1)

#### Getting the most from this course
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=0)** - [Instructor] During this course, we'll explore the range of Azure DevOps services.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=4)** Most of the content in the course focuses on Azure Boards, Azure Repos, and Azure Pipelines, which are the most popular services.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=12)** We are exploring Azure DevOps with a broad scope to help newcomers get a realistic overview of the topic.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=18)** However, it's important to note that this course will not cover the general principles of DevOps.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=23)** Understanding DevOps principles is essential for modern development.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=27)** DevOps is a set of practices that combine software development, Dev, and IT operations, Ops.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=33)** It aims to shorten the system's development lifecycle and ensure the continuous delivery of high-quality software.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=40)** It involves collaboration, automation, continuous integration and delivery, monitoring and feedback.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=46)** The main goal of DevOps is to create a culture and environment where building, testing and releasing software can happen rapidly, frequently, and more reliably.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=56)** In this course, we are focusing specifically on Microsoft's Azure DevOps.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=60)** While we'll cover many topics, it's important to be realistic.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=64)** It's not possible to cover every aspect of Azure DevOps in just a few hours.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=69)** My goal is to identify the core elements of Azure DevOps and provide a broad overview of what Microsoft offers.
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=77)** We are going to look at the big picture.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=79)** Later, you can drill down into the parts that are most interesting to you or essential to your organization.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=85)** When it's time to dive deeper into DevOps, consider exploring additional courses available on LinkedIn Learning.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=91)** These courses cover various aspects of DevOps from advanced automation techniques to in-depth practices for continuous integration and deployment.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=99)** In addition to the general DevOps principles, there is a wealth of Azure DevOps specific content available.
>
> **[1:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=106)** After completing this course, you'll find even more to explore.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=109)** Each of these topics is fascinating and worthy of a deeper look.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=112)** Since this is an overview of Azure DevOps, each chapter reveals the key parts of one DevOps area.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=118)** Because we're exploring at high altitude, there are no practice files or follow along walkthroughs in the course.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=125)** There is no setup necessary to enjoy this course.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=127)** As for prerequisites, there are none, just your desire to learn more.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/getting-the-most-from-this-course?u=76281980&t=132)** Now that we've established the general idea of the course, it's time to explore Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (15), [[Microsoft Azure|Azure]] (10), [[Automation]] (2), [[Continuous Integration (CI)|Continuous integration]] (2), [[Microsoft]] (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Setup and Overview

[↑ Back to Table of Contents](#table-of-contents)

#### Overview of Azure DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=0)** - [Instructor] Building applications is usually a team effort.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=3)** Successful teams find effective ways to work on software at every stage of the development lifecycle.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=10)** In recent years, we've added DevOps to the development process to help standardize and automate more phases of the development workflow.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=18)** DevOps is a set of practices that combines software development, Dev, and IT operations, Ops.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=24)** It aims to shorten the development lifecycle and ensure the continuous delivery of high-quality software.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=31)** DevOps builds on several principles.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=33)** Think of it as a combination of shared planning tools, a shared code base, continuous integration, test-driven techniques, and automated delivery and deployment.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=44)** None of these principles are new.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=46)** We've used them in the past.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=48)** What is new is this idea of DevOps as a practice.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=51)** We've given it a concrete name, it emphasizes collaboration between all parts of the IT organization and the continuous delivery of software.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=60)** You can think of DevOps as a cycle, the steps that happen through the development process.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=64)** On the developer side, we plan the work, code the feature, build and compile the application, and run tests to ensure it works and doesn't break anything.
>
> **[1:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=74)** On the operation side, we deploy the app or update the app.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=78)** Then the application is used, and the Op team monitors and analyzes whether it's working as planned, then the cycle repeats.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=85)** One key aspect of DevOps is the attempt to automate everything in this application lifecycle, at least the parts that can be automated.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=93)** Code testing is very useful.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=95)** A system where every code commit triggers an automated test suite ensures that software problems are discovered early.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=101)** The sooner we find bugs and issues, the less impact they have on your application.
>
> **[1:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=106)** Automation helps reduce the number of bugs that reach the customer's computer or phone.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=111)** They free up developers' time, allowing them to focus on creating new features, rather than manually testing existing ones.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=118)** They give developers the confidence to make changes, knowing that the test will catch any potential issues.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=124)** Automated builds are a fundamental part of DevOps, serving as a key component of the continuous integration or CI process.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=132)** In fact, this is usually a precursor to running automated tests.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=136)** In compiled languages like C#, when updated code is committed to the source control repository, it automatically triggers a build, including compiling the code.
>
> **[2:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=145)** Automated builds are also useful for non-compiled languages like JavaScript.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=149)** During this process, the code is minified and transpiled, and multiple JavaScript libraries are bundled into a single file, which can improve website performance.
>
> **[2:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=158)** It's better to automate the code integration into a shared repository.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=162)** Teams and individuals can work on small segments of the bigger application.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=166)** Starting an automated build of the application when code is committed ensures that the build is functional.
>
> **[2:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=173)** Then the automated test tools can verify that there are no breaking changes.
>
> **[2:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=177)** With automated integration, there's no need to schedule testing or have test admins invoke the test suite.
>
> **[3:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=183)** Because the integration happens frequently, most code changes are small, which means it's easy to roll back.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=188)** Automated deployment is a key aspect of DevOps.
>
> **[3:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=192)** It ensures that the process of moving code from your development environment to production is streamlined, consistent, and reliable.
>
> **[3:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=198)** This not only reduces the risk of human error, but also allows for faster and more frequent deployments.
>
> **[3:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=204)** With continuous deployment, updates and new features can be delivered to customers more quickly and efficiently.
>
> **[3:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=210)** Bug fixes can be deployed as soon as the tests are complete.
>
> **[3:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=213)** And don't you think it's a good idea to automate environment provisioning?
>
> **[3:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=217)** It ensures that the development, testing, and production environments are consistent, which significantly reduces the it-works-on-my-machine problem.
>
> **[3:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=225)** Teams can create identical environments at every stage of the development pipeline.
>
> **[3:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=230)** This not only improves the reliability and predictability of deployments, but it also accelerates the development process, as developers can work in an environment that mirrors production.
>
> **[4:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=240)** Microsoft adopted the DevOps workflow for its own development processes.
>
> **[4:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=244)** They've been automating key parts of their application lifecycle for years.
>
> **[4:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=248)** Microsoft bundles these services into a suite of team tools.
>
> **[4:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=251)** When we use these tools, we are benefiting from the work and improvements done to ensure their tools can handle the massive enterprise-wide projects.
>
> **[4:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=258)** This set of tools is called Azure DevOps, a new name for services that have been around for many years.
>
> **[4:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=264)** If you've heard about Visual Studio Team Services, and the other names shown here, those are the predecessors.
>
> **[4:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=270)** The services provided are the same regardless of the new name.
>
> **[4:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=274)** One last point on the new name.
>
> **[4:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=275)** You can think of it as a rebranding of some developer services to align with this new vision.
>
> **[4:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=280)** To clarify, Azure contains all the cloud services from Microsoft.
>
> **[4:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=284)** This is where you find cloud databases and serverless functions, where you can configure virtual machines and other services.
>
> **[4:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=292)** Those are Azure.
>
> **[4:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=294)** You can use those services without needing the DevOps portion.
>
> **[4:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=297)** Azure DevOps is a separate, cloud-based toolset designed to enhance team workflows.
>
> **[5:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=303)** Currently, there are five categories of services available.
>
> **[5:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=307)** Azure Boards, Azure Pipelines, Azure Repos, Azure Test Plans, and Azure Artifacts.
>
> **[5:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=315)** Use Azure Boards to track work with Kanban boards, with backlogs, team dashboards, and custom reporting.
>
> **[5:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=322)** Work can be tracked across teams, we get drag-and-drop sprint planning and flexible work item tracking.
>
> **[5:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=329)** Here's a sample of a Kanban board from the Azure documentation site.
>
> **[5:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=332)** In this view, we can see the work progressing from new, to active, then to staging, and then to deployed.
>
> **[5:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=339)** Azure Pipelines provides services to automate your build, integration, and deployment process.
>
> **[5:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=345)** It provides a CI/CD system that can work with multiple languages, code can be pulled from popular source control systems like GitHub or other Git providers, it has hosted Windows, macOS, and Linux build agents, also, integration with Visual Studio App Center enables mobile deployments.
>
> **[6:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=362)** Use Azure Repos to host your source code repository.
>
> **[6:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=365)** It supports Git, of course.
>
> **[6:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=367)** Also, Microsoft has its own source control system called Team Foundation Version Control.
>
> **[6:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=373)** Yes, Microsoft bought GitHub, which is the biggest Git online repository, so you can always host your code repositories there instead.
>
> **[6:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=381)** If you do host with Azure Repos, you'll get unlimited public and private repositories.
>
> **[6:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=386)** Azure Test Plans provides a testing platform for your application.
>
> **[6:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=390)** Test your application by executing tests across the desktop or web apps, run tests and log defects from your browser, track and assess quality throughout your testing lifecycle.
>
> **[6:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=401)** It supports manual tests.
>
> **[6:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=403)** You can plan, execute, and track scripted tests with defect tracking and end-to-end traceability.
>
> **[6:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=409)** Plus it has exploratory tests, where you simultaneously learn about the app code and test execution of your application.
>
> **[6:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=416)** Here's a sample of a test plan report from the Azure documentation site.
>
> **[7:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=420)** The last piece of DevOps services is Azure Artifacts.
>
> **[7:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=423)** Think of this as a way to manage dependencies in your code base.
>
> **[7:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=428)** As a developer, you may already be familiar with the idea of package management platforms such as npm or NuGet.
>
> **[7:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=434)** Use artifacts to build a combined feed of all your dependencies in your organization, including your private proprietary packages.
>
> **[7:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=443)** Then you can work with your artifacts as the single source of those dependencies.
>
> **[7:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=447)** To summarize, Azure DevOps contains a set of useful tools that enable your development and operations teams to live in harmony.
>
> **[7:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=455)** Use it to plan your next set of application features and much more.
>
> **[7:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/overview-of-azure-devops?u=76281980&t=458)** Currently, Azure DevOps consists of distinct services that share the Azure name, but operate in their own dedicated portal alongside the main Azure portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (21), [[DevOps]] (15), application (11), teams (5), [[Microsoft]] (5)
> **CLI Commands:** find (3), git (3), make (1), cd (1), npm (1)
> **Tools:** visual studio (2), github (2), azure portal (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** think of it as (2), such as (1)
> **Code Identifiers:** macos (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** configure (1)

#### Where to access Azure DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=0)** - [Instructor] Azure DevOps services are in the cloud.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=2)** In this video, we'll look at various ways to interact with the services.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=6)** There are several different interface choices that provide access to these services.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=10)** We can use the Azure DevOps web portal, the Azure DevOps command line, plus, we can use developer tools, like Visual Studio and Visual Studio Code.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=19)** The Azure DevOps web portal is the primary way I'll access the services in this course.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=24)** Once logged into the site, you'll see all your projects.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=27)** Within a project, you can access its boards, its repos, pipelines, test plans, and artifacts.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=33)** The Azure Command Line Interface, the CLI, provides a set of commands used to create and manage Azure resources.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=40)** It's designed to help you interact with Azure with an emphasis on automation.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=45)** It's available across Azure services, including the DevOps services, and it's a popular tool for performing administrative actions with your Azure resources.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=54)** The Azure CLI is not pre-installed on your computer, so you'll need to install it.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=60)** You can find the installer at this URL.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=62)** I installed the Windows version, but it's also available for Mac OS and Linux environments.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=68)** You will need to install the Azure DevOps extension for the Azure CLI.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=72)** This extension allows you to interact with Azure DevOps services directly from the command line.
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=77)** The Azure CLI and the Azure DevOps extension are related, but serve different purposes.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=83)** The Azure CLI is a cross-platform, command line tool that provides a set of commands for creating and managing Azure resources.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=90)** It's designed to work with the entire range of Azure and is general purpose tool for managing Azure resources directly from the terminal.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=98)** The Azure DevOps extension adds additional commands to the CLI specifically tailored for Azure DevOps services.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=105)** Here's how to install and enable the DevOps extension from the Windows terminal.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=108)** This assumes the Azure CLI and the DevOps extensions are installed.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=113)** Use the az command shown in yellow text to work with Azure.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=118)** That's followed by arguments to add the extension named azure-devops.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=123)** After the extension is installed, I can log into my account and begin managing the services.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=128)** Here's an example.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=129)** I'm using the az command, then repos, that's one of the DevOps extensions, and then I'm using an argument called create.
>
> **[2:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=138)** So I'm going to create a new repository within a team project.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=141)** The repo is named Example, and it will be created in the Sentinel Project.
>
> **[2:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=146)** This command lists all the repositories in the Sentinel Project, so it starts with az, then repose, then the word list, I'm telling it to use the Project Sentinel to find the information and then output the information into a table.
>
> **[2:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=159)** Another logical place to access DevOps is through your development IDEs and editors, Visual Studio and Visual Studio Code offer integration with DevOps services.
>
> **[2:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=169)** For example, it's logical to want to work with Azure repos from your code editor.
>
> **[2:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=174)** It would be convenient to create new branches or commit code changes directly from the IDE.
>
> **[3:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=180)** You can do this and we will see a few examples of how this works in the Azure repose chapter.
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=186)** However, many actions can only be performed through the Azure DevOps web portal, which is why we rely on the portal for most of the examples in this course.
>
> **[3:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=195)** In summary, to effectively harness the power of Azure DevOps, you'll interact with the services through its four primary access tools, the web portal, the Azure CLI, Visual Studio, or Visual Studio Code.
>
> **[3:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/where-to-access-azure-devops?u=76281980&t=208)** They enable seamless integration with Azure DevOps services, ensuring that whether you're coding, tracking or deploying, you have the right tool at your fingertips.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (26), [[DevOps]] (15), [[CLI]] (8), [[Azure DevOps Services]] (4), web (4)
> **Tools:** visual studio (6), command line (4), terminal (1), windows terminal (1)
> **Env Vars:** cli (8), url (1), ide (1)
> **CLI Commands:** az (3), find (2)
> **Prerequisites:** install (3), you'll need (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Understand the DevOps price plans
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=0)** - [Instructor] To begin your journey with Azure DevOps, I recommend visiting the Azure DevOps website.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=5)** There you can access detailed documentation and find licensing costs for your organization or for this course.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=12)** Let's discuss pricing.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=13)** Please note that pricing can change over time, so the cost mentioned here might not be accurate in the future.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=19)** There are two licensing options, Azure DevOps Services and Azure DevOps Server.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=24)** For this course, I am using Azure DevOps Services, which is a hosted service, managed by Microsoft on their servers.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=32)** If you have reasons that prevent you from using Microsoft hosted services, such as legal restrictions on hosting your source code on external servers, you may want to consider licensing Azure DevOps server.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=43)** This option allows you to install and run the DevOps tools on your own hardware.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=48)** As I mentioned, I'm using Azure DevOps Services for this course.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=51)** I am using the basic plan shown here in this screenshot.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=55)** More details about this in a minute.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=57)** For some teams, it can make sense to choose individual services, which is useful if you have some of your DevOps needs met by other vendors.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=64)** With the basic plan, the first five users are free.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=68)** We can use four of the five services at no cost, pipelines, boards, repos, and artifacts.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=75)** If we need test plans, there will be an additional charge.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=79)** Like many Azure services, if we exceed certain thresholds, we incur extra costs.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=84)** For example, using too many minutes in pipelines or storing excessive data in Azure Artifacts will result in additional charges.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=92)** However, for the scope of this course, it shouldn't cost you anything.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=96)** To get started, simply click the start free button.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=100)** This will take you to a sign in page where you can use your personal or work account to sign in.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=105)** In summary, the Azure DevOps basic plan is free for small teams, no need to provide a credit card to get started.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/understand-the-devops-price-plans?u=76281980&t=111)** That's what I'm using for the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[DevOps]] (6), [[Azure DevOps Services]] (3), [[Microsoft]] (2), teams (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (1), for example (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Log in to Azure DevOps web portal
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=0)** - [Instructor] During this course, we will use the tools here on the Azure DevOps web portal.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=4)** Let's see how to log in and get started.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=6)** One way is to go directly to the site.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=9)** That's via dev.[azure.com](https://azure.com).
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=12)** Now, there are other places on the internet and Microsoft's websites that look like you can log in here, so let's look at some of those and why they won't work.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=19)** Here's an example.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=20)** I'm on the Azure website.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=22)** I'm reading about the Microsoft Azure portal.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=25)** There's this tempting big blue sign in button.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=28)** If click on that, that will sign me into the Azure portal, which is different from the Azure DevOps portal.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=35)** Now, to be clear, if you already have signed in to your Azure profile and you've already set up DevOps, then you'll have this option here to see your Azure DevOps organizations and if you click on this link down here, that will take you to the DevOps portal.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=52)** One other way you can get to the portal is if you're reading the information here on the DevOps site, here's a section about all the different features that are part of Azure DevOps, and at the top is the start free button.
>
> **[1:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=66)** If you click on that, that will take you to the portal.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/login-to-azure-devops-web-portal?u=76281980&t=70)** If this is the first time you're logging into this DevOps portal, you won't have a default organization, so you'll be prompted to create one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[DevOps]] (8), web (1), [[Microsoft]] (1), [[Microsoft Azure]] (1)
> **UI Navigation:** click on (3)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Tour the DevOps portal
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=0)** - [Instructor] I'm logged in with one of my teaching accounts as Terry Dactill.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=3)** Terry has created three organizations.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=5)** You can see them over here.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=7)** There's the three organizations, which is not necessary for a small team.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=10)** She probably only needs one.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=12)** In a big enterprise company, there might be good reasons for multiple orgs, however.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=16)** Perhaps one for sales and another for HR.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=19)** Creating an organization is easy.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=20)** Click on this New organization link and you'll provide a name here and a hosting location in this dropdown.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=30)** And then when you click on Continue, you'll get your organization.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=35)** Now, the name of the organization becomes part of your URL.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=39)** So, if I click on this one here, terrys-open-source, you can see that we're at dev.[azure.com/terrys-open-source](https://azure.com/terrys-open-source).
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=47)** She also has another one here.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=49)** And then this is one that I used for another Azure course I taught.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=52)** So, let's look at terrys-open-source, and then we'll go to Organizational settings.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=58)** It's here we can set defaults for the org that apply to all projects in the org unless overridden in the project.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=64)** So, you can see I've got settings like privacy URL, the time zone, and the region.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=70)** I've got a place where I can manage the projects.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=72)** I can manage the users.
>
> **[1:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=74)** If I'm in an enterprise, I'm probably paying for DevOps.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=78)** So, this is where I'd set up billing.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=80)** There's auditing.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=81)** There's also a lot of other settings, individual settings for boards and repos and pipelines and so on.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=87)** We need to create a project before we can continue.
>
> **[1:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=89)** So, let me go back.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=90)** I'll click here, go back to the top, and then open terrys-open-source.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-the-devops-portal?u=76281980&t=95)** Notice I don't have any projects yet, so it's asking me to create a project to get started, and I'll show you how to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** open-source (4), [[Microsoft Azure|Azure]] (2), hr (1), [[Privacy]] (1), [[DevOps]] (1)
> **UI Navigation:** click on (3), dropdown (1), go to (1)
> **Env Vars:** url (2)
> **Cross-References:** go back to (1), in the next (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create an Azure DevOps project
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=0)** - [Instructor] I've logged into the Azure DevOps portal with my main instructor account.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=4)** You can see my initials in the upper right, and if I hover over that, you can see I'm logged in as Walt Richer.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=9)** So I need to create a project for one of my organizations.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=12)** So let's look at my organizations.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=13)** Look on the left side.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=14)** There are four organizations over there.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=16)** Some of these are from prior courses I've created.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=18)** I just created a new one called learning-devops-211 for this course with 211 being the last three digits of the course number.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=27)** Now, when I choose this organization, I can see that there are no projects.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=31)** So I'm prompted in the portal to create a project.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=34)** So let's talk about the differences between organizations, projects, and teams.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=39)** This flexible system helps map the DevOps services to your business structure.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=43)** For small companies, one organization, one team, and a single project might be sufficient.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=48)** For a large corporations more thought is required.
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=50)** Your admins and architects will find the best approach.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=54)** So let's create our first project, add a description.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=59)** Next, I choose the visibility, whether I want it public or private.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=63)** I'll make mine private.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=64)** Now, if I click the create project button, it'll create it with some defaults that are defined within the organization and I can see those defaults by clicking on advanced.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=72)** There's two items to choose from here, version control and work item process.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=76)** I'll talk more about the work items and what the processes are in the Azure Boards chapter.
>
> **[1:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=82)** So I get to pick the version control.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=84)** I can choose Git or Team Foundation Version Control, and I can choose from one of these four work item.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=90)** I'm choosing the default, so I'll leave them as is and then click create project.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=96)** Now I see the welcome screen.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=98)** There's nothing in here because it's a brand new project.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=101)** So it's asking me where I would like to start working.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=103)** Don't want to work with boards, repos, pipelines, test plans, artifact.
>
> **[1:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=107)** Now most of these are empty.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=108)** The only thing that was created in this project was some templates for work items.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=112)** That's under boards.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=114)** You're not seeing here because I don't have any boards yet, and there is a skeleton structure for repos.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=119)** So if I click here, I can see that my first project is empty.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=123)** So I do have some endpoints on the internet for my cloud-based Git repository, but there's no files in the repository yet.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=130)** Now, for us to work with some samples during the course, it's helpful to have some boards, some repos, some pipelines, and so on.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-devops-project?u=76281980&t=137)** So rather than than having to create those all ourselves, we can use a demo generator to create those for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[Version Control]] (3), [[Microsoft Azure|Azure]] (2), [[Git]] (2), teams (1)
> **CLI Commands:** git (2), find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create a project with the Microsoft demo generator
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=0)** - [Instructor] It is useful to have sample data when working on a course so that you can check out how pipelines work, and how Azure boards work, and all the parts of Azure DevOps, and that's why Microsoft has created this Azure DevOps demo generator.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=14)** So the first thing we need to just talk about, signing in.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=16)** Now, I have two browsers open.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=17)** On the right side, I've got my teaching account, and on the left side I have one of my sample accounts from my teammate.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=24)** This is Terry's account.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=26)** Now, I've already logged in in the DevOps portal, so I'm logged in.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=30)** So if I click on sign in here, it takes me directly to the create new project page.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=36)** Terry hasn't signed in yet, so when she clicks on this, she sees this app request permissions page.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=43)** This demo generator is going to generate items in your DevOps account, and in your Azure account.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=48)** And so it's asking for those permissions, so she would need to approve that by clicking on accept.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=54)** I've already done that, so I don't see that screen.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=57)** So what I do now is, I choose my new project name.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=62)** I select my organization.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=64)** I use my new organization, learning DevOps 211, and then I pick one of the templates.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=70)** There's a lot of templates to choose from.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=73)** There's the general templates, and then many other sections.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=76)** So if I'm looking at the general templates, I can see ones that explain different kinds of concepts.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=80)** So this one works with Agile, and data and artificial intelligence and react.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=85)** This one uses the Scrum work item templates.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=88)** [ASP.NET](https://ASP.NET) Core and Azure App Service.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=91)** This one uses Scrum and [ASP.NET](https://ASP.NET) Core, and Azure App Service.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=94)** This is the one I'm going to use, but you see there's a lot more to choose from.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=97)** There's some from the Microsoft DevOps Labs.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=100)** From Microsoft Learn.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=101)** From the Azure community, and you can also create your own private templates.
>
> **[1:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=106)** This would be useful in an enterprise situation where you have your own templates you want to use across teams, across organizations.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=113)** From my case, I will choose general, and then I'll choose my health clinic.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=116)** You'll see a gray board appear, and then I click on select template.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=122)** And now the next step is dependencies.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=124)** There are two extensions that are needed by this project that aren't installed in my organization yet or in this project.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=132)** So it's ask me for those here.
>
> **[2:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=134)** So I'm going to check this, and then click on create project and then wait.
>
> **[2:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=143)** After waiting for about a minute on my machine, I see this success message at the bottom.
>
> **[2:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=148)** Your project has successfully provisioned, and then it tells me some steps down here what was created for me.
>
> **[2:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-project-with-the-microsoft-demo-generator?u=76281980&t=154)** But now we're ready to look at what was generated by the demo generator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[DevOps]] (6), [[Microsoft]] (3), data (2), [[Scrum]] (2)
> **Env Vars:** asp (2), net (2)
> **UI Navigation:** click on (3)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### View the generated project
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=0)** - [Instructor] I switch back to the DevOps portal and I'm looking at my organization, and you can see at the bottom of my list is Health Clinic.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=8)** And it's also a comment saying it was generated by the Demo Generator.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=12)** Now, when I open up this project, you can see in the project stats, there's a lot of information here.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=17)** 121 work items created, 13 work items completed, some pull requests, some commits.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=23)** So this is the advantage of having sample data.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=26)** If I go look at my boards, I can see there's work items here.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=31)** If I go look at my sprints, I can see there's one sprint available.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=37)** And here if I go take a look at the repos, I now see files inside the repository.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=42)** And if I look at pipelines, there is one pipeline here that hasn't been run yet.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=48)** So I could choose to edit this and read information about this pipeline.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-generated-project?u=76281980&t=53)** So we have some sample data, and in some of the videos in this course, we'll be using this sample data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[DevOps]] (1)
> **Speakers:** - [instructor] (1)

#### Add users to an organization
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=0)** - [Narrator] Teams are not very useful if you don't have people in the team.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=2)** So that's what we're looking at in this video.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=4)** There are several ways you can add people to a team.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=7)** If you're using Azure Active Directory, you can just look them up in the directory and add 'em that way.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=11)** The examples for this course, I'm using people's Microsoft account, so I will send them an invite to the team.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=19)** You find your teams by going to a project, then go to Project Settings and then look at Teams.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=25)** And as you can see, there's a single default team created, when I created the project.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=29)** It's called First Project Team, and there's only one member, the person that created the project.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=35)** There are some additional teams created in that demo, Generate a Project.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=39)** So I'll go back to the organization and then go to HealthClinic, go back to Project Settings, go to Teams.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=47)** I see my default team at the top, but there's two additional teams that were created by the generator and they're all empty, so it's time to add some members.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=54)** So I would click on the team.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=57)** Then I click on Add, and I want to add Terry.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=60)** Now when I paste Terry's address in here, it says that she's not available in any of the groups, so I need to add her to the organization.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=67)** So I'll go to the organization, go to Organization Settings, go to Users, add a user, paste in her email address here, send her an email invite.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=81)** I want to add her to all of the projects.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=84)** Before I click on the Add button, let's talk about the access level.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=87)** There are several choices in here, depending on whether you have test plans enabled or not.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=92)** So I have three at the moment.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=93)** Basic stakeholder and Visual Studio subscriber.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=96)** Let's talk about the first two.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=98)** Basic provides access to most features.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=101)** You assign this to users that have Visual Studio Professional subscriptions or people that have Azure DevOps Server Cals.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=108)** Stakeholder is for providing partial access to stakeholders.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=112)** So this could be the people that are creating your backlog and they don't need to have access to all the features, just the ability to add work items.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=121)** So you would choose Stakeholder.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=123)** And all stakeholder licenses are free, you can have unlimited stakeholders.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=127)** But for our example, we're working with basic.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=130)** So there's Terry, click on Add.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=135)** Say she appears on the list.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=136)** She hasn't logged in yet.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=137)** Now I'll add another user.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=141)** Add Tadd.
>
> **[2:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=142)** He's going to be basic, click Add to All Projects.
>
> **[2:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=145)** Send him an invite too.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=149)** Now you can see that we have two users.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=151)** They haven't logged in yet, so we'll wait for a minute for them to log in to their email client and accept our invitation.
>
> **[2:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=159)** Now I've logged in with Tadd's account.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=162)** He got his email and he accepted the invitation.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=166)** And you can see that he has access to our new organization.
>
> **[2:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-organization?u=76281980&t=170)** And there's our two projects that he was added to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (6), [[Microsoft Entra ID|Azure active directory]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** go to (6), click on (4)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Add users to an Azure DevOps team
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=0)** - [Instructor] It's time to check in on our new users.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=2)** So I'll go to the organization, then to Settings, Users.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=8)** I see that Tadd has accepted the invitation and is logged in, so he can participate.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=14)** Terry hasn't logged in yet, so I could add her to Teams, but she won't be able to do any work until she accepts the invitation.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=21)** Next step is to go to one of our projects.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=24)** Let's go to HealthClinic.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=27)** Go to Project Settings, go to Teams.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=31)** I'm going to rename this team, call this one Mobile,
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=43)** and then click on Save.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=47)** And then I will go here and choose to add Terry and Tadd.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=58)** And I'll do the same thing.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=59)** Go back to Teams, go to this other team, Team2, go into here and rename this one Desktop.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=67)** Or I should say, let's make this a Web Team.
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-users-to-an-azure-devops-team?u=76281980&t=77)** Then go back to Members and add Terry and Tadd.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (3), next (1), web (1)
> **UI Navigation:** go to (6), click on (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Azure Boards

[↑ Back to Table of Contents](#table-of-contents)

#### Manage your team workflow with Azure Boards
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=0)** - [Instructor] Azure Boards is the place in Azure DevOps for managing software projects.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=4)** It has tools for planning, work assignments, and reports.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=8)** Azure Boards offers essential tasks such as tracking work items, this allows teams to monitor and manage tasks, bugs, and user stories throughout the project lifecycle.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=18)** You can visualize work in Azure Boards using Kanban boards and dashboards to track the status and progress of work items.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=25)** Plan and organize work by structuring and prioritizing tasks such as backlogs and dashboards for efficient project management.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=33)** Azure boards streamline scrum with timeboxed sprints, allowing teams to manage and commit to work efficiently.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=39)** Teams can plan sprints by dragging and dropping work items while interactive task boards help track progress and support effective scrum practices.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=48)** There is a powerful query feature that creates custom work item lists, use queries for bulk updates, creating detailed reports and status or trend charts.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=58)** These charts can be added to dashboards to monitor project health and progress.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=62)** Delivery plans in Azure Boards offers a calendar view that helps teams visualize deliverables and track dependencies across different teams and projects.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=73)** This feature is useful for coordinating complex projects with multiple interdependent components, ensuring that all teams are aligned and aware of the timelines for delivery.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=83)** All work in Azure Boards is tracked through an artifact called a work item.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=87)** Work items are used by you and your team to describe the details of the tasks and activities that need to be completed in a software project.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=96)** A work item is a unit of work, which we use to represent any type of task or activity or piece of work.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=102)** They are used to record, describe, and manage the details of all the work being done.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=108)** When you create a work item, you specify details about that work to create a flexible system that accommodates diverse software teams.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=116)** Azure Boards must understand the specific tracking needs of your team.
>
> **[2:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=120)** What is tracked depends on what process methodology is used.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=124)** For example, an Agile team will use different terminology and workflows from other types of process systems.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=130)** To address this, Azure Board supports four process templates, Basic, Agile, Scrum, and CMMI.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=137)** Each one caters to a specific target audience and provides a variety of predefined work item types and workflows.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=144)** Each DevOps team can pick the process that fits their style.
>
> **[2:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=148)** The process is different mainly in the work item types they provide for planning and tracking work.
>
> **[2:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=153)** When you create a new Azure DevOps project, you select a work item process, which becomes the default for all people working on that project.
>
> **[2:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=161)** Templates are per project, so your team will pick the template that matches your desired workflow.
>
> **[2:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=167)** This flexibility means that within the same organization, different teams can use different templates.
>
> **[2:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=172)** For example, one team might adopt the Scrum template while another utilizes the Agile template.
>
> **[2:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=178)** The basic template is the simplest model, designed for teams that prefer a minimalistic approach.
>
> **[3:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=183)** This is essentially a DevOps version of a to-do list.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=187)** The focus is on work items and version control.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=190)** Work items can include a variety of things like tasks, bugs, and issues that need to be tracked and managed.
>
> **[3:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=196)** Version control is about maintaining the code base and managing changes to it.
>
> **[3:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=200)** The Agile process template is a popular one.
>
> **[3:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=203)** Agile teams approach software development by emphasizing incremental delivery, team collaboration, continual planning, and continual learning.
>
> **[3:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=212)** The Agile process template embodies the principles of the Agile manifesto, focusing on customer collaboration, adaptive planning, and early delivery.
>
> **[3:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=221)** It's equipped with features like user stories and backlogs that facilitate iterative development and encourage continuous feedback.
>
> **[3:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=229)** Scrum is a framework used by teams to manage their work.
>
> **[3:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=231)** Scrum implements the principles of Agile as a concrete set of artifacts, practices, and roles.
>
> **[3:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=237)** In essence, Agile is the mindset or philosophy with a focus on flexibility, continuous improvement, and customer satisfaction, while Scrum is one of the most popular ways to put that philosophy into practice through a set of rules, roles, and rituals designed to create a regular rhythm of work and feedback.
>
> **[4:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=254)** It includes defined roles like scrum master and product owner artifacts like product backlog and sprint backlog, and events like sprints and daily stand ups that guide the development process.
>
> **[4:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=265)** CMMI is a model created in the 1990s and is a collection of engineering, management, service, and improvement practices.
>
> **[4:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=273)** It is commonly used in government contracts and still has a following.
>
> **[4:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=277)** This template is best suited for organizations that prioritize process maturity and have stringent quality requirements.
>
> **[4:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=284)** Work items, as mentioned earlier, are the basic components of Azure Boards and are categorized into buckets.
>
> **[4:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=290)** There are two main buckets, issues and backlogs.
>
> **[4:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=293)** These categories are named differently depending on the process template you choose.
>
> **[4:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=297)** For example, in the issues category, scrum uses impediment.
>
> **[5:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=302)** Agile has issue and bug tracking, and CMMI uses issue, change requests, and risks.
>
> **[5:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=308)** The basic template simply calls them issues.
>
> **[5:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=310)** The key concept is that issues are work items impeding the project's progress, and the team must address them to move forward.
>
> **[5:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=317)** Backlogs by contrast are where you keep work items that haven't entered active development, they are essentially prioritized lists of work that provide visibility into the work items that a team plans to work on.
>
> **[5:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=328)** The names and types of work items in the backlog can vary between the different process templates.
>
> **[5:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=333)** In the Scrum process, they are called product backlog items.
>
> **[5:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=337)** In the Agile process, they are typically referred to as user stories.
>
> **[5:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=341)** The Basic process uses the term issues for its backlog items And for the CMMI process, the backlog items are known as requirements.
>
> **[5:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=349)** There are differences in the work items too.
>
> **[5:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=351)** You can see that in this example.
>
> **[5:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=353)** This is the bug work item, which is in the issues category.
>
> **[5:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=357)** The screenshots are Agile on the top and Scrum on the bottom.
>
> **[6:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=361)** As you look over the screenshots, you can see the differences.
>
> **[6:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=363)** In Agile, there's a section for planning and discussion.
>
> **[6:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=367)** In Scrum, it has sections for details and acceptance criteria.
>
> **[6:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=370)** Now, let's talk about another key aspect of Azure Boards, the Kanban board.
>
> **[6:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=375)** Kanban originally developed by Toyota as a scheduling system for lean and just-in-time manufacturing, helps a team focus on quality by ensuring that work meets an agreed upon level of quality before it can be considered done.
>
> **[6:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=388)** In software development, Kanban consists of stakeholders adding requests to a backlog, and the team then pulling work into their workflow as capacity allows.
>
> **[6:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=398)** The Kanban board is used to visualize this process.
>
> **[6:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=400)** By placing all the work items on cards on the board, the team can quickly see the overall status of the project and identify potential bottlenecks.
>
> **[6:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=408)** For instance, a team manager might notice that there are 20 hours of work on the Kanban board, but the team only has 14 hours of capacity available.
>
> **[6:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=417)** The board helps highlight this conflict, enabling better resource allocation and planning.
>
> **[7:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=422)** Here is a sample of a Kanban board.
>
> **[7:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=424)** In this view, we can see the work progressing from new, to develop, to build, and test.
>
> **[7:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=430)** Azure Board's delivery plans provide a highly interactive calendar view of multiple teams backlogs, allowing teams to visualize and track the progress of work items, milestones, and dependencies across different projects.
>
> **[7:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=444)** This feature helps in aligning team efforts, ensuring timely delivery of project goals, and improving overall project transparency.
>
> **[7:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=451)** Here's an example from the Microsoft's doc site.
>
> **[7:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=454)** This image shows the delivery plan interface focusing on the feature timeline and story section.
>
> **[7:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=460)** The first column lists the teams involved in the planning, such as the Microsoft Azure DevOps team and the Azure Pipelines team.
>
> **[7:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=468)** Other columns represent each month from October to February.
>
> **[7:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=472)** Each cell contains progress details marked by colored bars or tags, like feature and user story, along with a bug count for each month.
>
> **[8:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=481)** Here are the key features of delivery plans.
>
> **[8:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=484)** There's a unified view.
>
> **[8:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=485)** It provides a calendar view of multiple backlogs and teams allowing large teams to visualize their work schedules and dependencies in one place.
>
> **[8:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=493)** This helps in aligning efforts across different teams and projects.
>
> **[8:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=497)** Dependency tracking enables tracking of the dependencies between work items, which is crucial for large teams working on interconnected task.
>
> **[8:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=506)** This ensures that all dependencies are managed effectively, reducing the risk of delay.
>
> **[8:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=511)** Progress monitoring, this is where delivery plans offers roll-up views of progress showing the percentage completion of child and linked work items.
>
> **[8:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=520)** This helps in monitoring the overall progress of large projects and identifying any bottlenecks.
>
> **[8:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=525)** And then finally, we have cross-project coordination.
>
> **[8:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=528)** It supports viewing and managing work items across multiple projects, making it easier for large teams to coordinate efforts and ensure that all projects are on track.
>
> **[8:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=536)** Azure Board Queries are a powerful feature used to create custom lists of work items based on specific criteria.
>
> **[9:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=542)** This screenshot shows the Azure Board's interface for managing queries.
>
> **[9:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=546)** We are looking at a custom query called Tadd's Items.
>
> **[9:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=549)** At the top, there are filter options for fields like work item type, state, and assigned to.
>
> **[9:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=554)** There's operators available such as equals, not equals, and contains.
>
> **[9:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=558)** This is a simple query that looks for all the items assigned to Tadd, but it can do so much more.
>
> **[9:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=563)** For example, Tadd's manager can use it for bulk updates.
>
> **[9:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=567)** If Tadd goes on vacation, the manager can reassign his items to another team member.
>
> **[9:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=572)** In summary, Azure Boards is a visual and interactive issue tracking system, which can be used for your complete software development lifecycle.
>
> **[9:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=580)** It is highly customizable to suit your project needs and has built in tools for communication and collaboration.
>
> **[9:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manage-your-team-workflow-with-azure-boards?u=76281980&t=586)** It offers querying dashboards, Kanban boards, it has reports for real time project insights and it integrates well with other Azure DevOps services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (19), [[Microsoft Azure|Azure]] (17), [[Agile Development|Agile]] (13), [[Scrum]] (12), feature (6)
> **Definitions:** is a  (9), means that (1), known as (1)
> **Exercise Files:** template (9)
> **Analogies:** such as (4), for example (4), for instance (1)
> **Env Vars:** cmmi (4)
> **Speakers:** - [instructor] (1)

#### Tour of Azure Boards
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=0)** - [Instructor] Let's start by taking a quick look at what's available in the Azure Boards section of a project.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=6)** So I'm using the HealthClinic project.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=8)** I'll click on Boards and that shows the sub pages.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=11)** There are five sub pages.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=13)** The default one is work items, and this shows a grid view of all your work items.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=17)** So here's where you can review an individual work item, and this is also where you can add new work items.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=23)** Next, is a section or subpage called boards and this can be a bit confusing because the boards up here it refers to Azure Boards, whereas the boards on the subpage refers to Kanban boards.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=34)** So here I can see a Kanban card view of our work items.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=39)** So I see have one column for new, one for develop, one for built-in test and then over here we've got done.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=47)** I can view the items that are in our backlogs by clicking here.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=52)** If you're the type of team that uses sprints, you can see your sprints here.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=56)** Again, there's columns for to-do, in progress, and done.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/tour-of-azure-boards?u=76281980&t=59)** And this last view, or last page, I should say, is for queries, so this allows me to create custom queries to view my work items in any custom fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), next (1)
> **Definitions:** refers to (2), is a  (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Create a work item
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=0)** - [Instructor] Creating a work item is straightforward.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=2)** Go to the Boards page, then go to Work items.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=4)** It shows you a list of all of your Work items, and then click on this add New Work Item button here, and you'll see a list of potential Work item types.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=15)** Now, this list is based on which process template you chose.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=18)** I picked the Scrum template for this example, so these are Scrum-specific work items.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=23)** Let's start by talking about Epic.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=25)** Epics are large pieces of work that have one common objective.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=28)** I think of Epics as groups of Tasks that have a longer timeline.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=32)** For example, a customer request might take multiple weeks to plan and program.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=37)** Epics are typically divided into smaller items based on input from the customer, and from the developers.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=44)** So, you can see the symbol, this orange crown symbol, that's an Epic.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=47)** So, I can look at my list and see different Epics, or I can go up here and choose Types, filter by Epic.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=53)** So, for the Demo application, I can see HIPAA Compliance, Patient Mobile App, Finance Management.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=59)** Those are Epics.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=60)** And then the one I created for this course is Demo Epic 1.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=65)** I'll unfilter and we'll talk about Features.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=67)** If you want to create a new item for Features, this tracks a feature that will be released in the product.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=73)** I think of it as one way to split Epics into smaller items, then the features can be placed into sprints where the developers can do the actual work.
>
> **[1:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=82)** Feature timelines tend to be estimated in days or weeks.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=86)** This is the symbol for Feature.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=87)** Let's filter by Features.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=91)** Here, we've got things like Security, Alerts and Reminders, Patient Register, and the ones I created, Feature 1 and Feature 2.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=102)** Next, we have Tasks.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=105)** Tasks track the actual work that needs to get done.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=108)** I think of it as a small section or a job to be accomplished by a developer.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=112)** The Tasks live in the sprint backlog and contain information about the user story, the requirements.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=117)** Task timelines tend to be estimated into hours.
>
> **[2:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=120)** So, you create Epics that have Features, and then within the Features, you'll have Tasks, and you can also see there's some other Work items here.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=129)** There's Test Cases, there's Impediments, things that are blocking your forward progress on the project.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=135)** Bugs are specific issues you're having in your application, and then of course, there's this Product Backlog Item.
>
> **[2:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=142)** These are things that you're thinking about working on or your stakeholders are adding, and they haven't been assigned an Epic or a Feature.
>
> **[2:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=148)** They're just, a lot of times, they're just ideas.
>
> **[2:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=152)** So, those are your basic Work items.
>
> **[2:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=154)** Let's see how you create one.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=155)** Click here, and then I'll choose, I haven't created a Task yet, so I'll click here.
>
> **[2:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=160)** Then you give your Task a name, you give it a Description.
>
> **[2:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=167)** You can set its Priority level here, you can set its percentage of Remaining Work, what kind of Activity on this, whether you're Blocked or not, Yes or No, and you can add a link.
>
> **[3:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=181)** I want to add this to one of the Features, so I click here.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=187)** This is going to be a parent link.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=188)** I'm linking to the parent.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=190)** Then next, go to this dropdown.
>
> **[3:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=192)** I will choose Feature Number 1, and click on OK.
>
> **[3:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=197)** And that gives me a link, so now I can click here to go to Feature 2.
>
> **[3:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-work-item?u=76281980&t=201)** And when I'm in Feature 2, I've got a link going back up to the Epic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (9), [[Scrum]] (2), application (2), product (2), next (2)
> **UI Navigation:** go to (4), click on (2), dropdown (1)
> **Analogies:** think of it as (2), for example (1)
> **Exercise Files:** template (2)
> **Env Vars:** hipaa (1)
> **Speakers:** - [instructor] (1)

#### Boards and backlogs
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=0)** - [Instructor] This is the chapter about Azure Boards, and I've been mentioning a lot of Agile topics in the other videos in this chapter.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=7)** Things like Kanban and Kanban boards, and Scrum, and topics like that.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=12)** They're all deep topics and you can learn more about those on the other courses in our catalog.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=17)** What we're looking at in this course is how those concepts are surfaced within Azure Boards.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=22)** And what we're looking at in this video is the concept of backlogs.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=26)** This is the way you plan your project.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=29)** Typically, this is done using either requirements or user stories, and you add these tools, something called the Product Backlog, and then you pull items out of your product backlog and move them into the development lifecycle.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=41)** You can use different Agile tools to do that.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=43)** The two most common are Scrum and Kanban.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=47)** Scrum tools support defining and managing work within sprints, setting capacity, and tracking tasks.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=55)** Kanban tools allow you to manage a continuous flow of work via an interactive signboard.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=60)** And you get to pick which parts of these tools you want to use in Azure DevOp.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=64)** And they're per team.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=65)** Right now I'm looking at backlogs for the HealthClinic Team.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=69)** You remember, we have two other teams, the Mobile Team and I have the Web Team.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=75)** Each of these teams can decide how they want to utilize the tools that are in Azure Boards.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=81)** We'll go back to the HealthClinic Team.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=83)** And I'm looking at the backlog.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=86)** You can see three different types of items in here.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=88)** Currently, we're looking at backlog.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=90)** That's because I'm filtered in this dropdown to backlog items.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=93)** But I can also look at Features and I can look at Epics.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=97)** If you don't see Epics in this dropdown, that's because you have to add it in the Settings.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=102)** I believe it's in Team Configuration.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=105)** So, you want to turn on this check mark.
>
> **[1:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=106)** Then you can go to HealthClinic, go to Boards.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=111)** Not the Boards, you should go to Backlogs.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=114)** And then, take a look at these items.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=116)** These are all for planning.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=118)** Epics are long-term parts of your project.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=121)** Features are features you're going to ship.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=123)** And Backlogs are items you're thinking about working on, but you haven't moved them into development cycle yet.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=128)** One nice feature of this tool is the ability to look at parent relationships, so I can click on Parents, turn on this feature.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=136)** This is really useful in this dataset, in the Feature section.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=140)** So, I can see that in the Patient Information Epic, I have two features, Visit Management and Patient Register.
>
> **[2:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=147)** For the HIPAA compliance, I have one feature called Security.
>
> **[2:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=150)** And of course, these are work items, which means I can click on them and make changes in here or see the details about this work item.
>
> **[2:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=159)** Let's go take a look at the product backlog.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=162)** So, I'll do a filter here, the backlog items.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=166)** Then from this place, I can view the list of backlog items and I can also create new work items.
>
> **[2:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=173)** Now, notice there's a smaller subset.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=175)** I can only create a backlog or a bug when I'm looking at it with this filter on.
>
> **[3:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=180)** And if I'm in Features and I go Add a New Work Item, then I'm adding a feature.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=185)** Let's go back to backlogs and then I'll click on this Print Patient Invoice.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=190)** I see the details.
>
> **[3:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=191)** And I am going to assign this to one of my team members.
>
> **[3:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=194)** So I'll go up to Unassigned, click on this dropdown and I'll look for Tadd.
>
> **[3:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=201)** Here he is, click on Tadd and then Save & Close.
>
> **[3:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=206)** Come in here and see that it has been assigned to Tadd.
>
> **[3:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-backlogs?u=76281980&t=209)** Now, Tadd is going to have to pull it from our backlog and put it in a sprint, or if we're using Kanban, to move it around the Kanban board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (5), [[Microsoft Azure|Azure]] (4), [[Scrum]] (3), product (3), [[Agile Development|Agile]] (2)
> **UI Navigation:** click on (4), dropdown (3), go to (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Env Vars:** hipaa (1)
> **Speakers:** - [instructor] (1)

#### Set sprint cadence
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=0)** - [Instructor] A Scrum Team plans and tracks work at regular time intervals, referred to as a sprint cadence.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=5)** A typical cadence is two weeks, but it's up to the individual team to decide what makes sense for them.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=11)** I've seen teams with one week sprints and three week sprints.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=14)** You define those sprint lengths here in the Settings in Boards.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=18)** So, go to Boards, Project configuration, create your sprints here, and then for each sprint, you specify the start and end date.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=26)** So, let's go here, set dates for Sprint Number 5.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=30)** Start the first week of February, and it defaults to two weeks, so it says the End date to February 12th.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=36)** Now, click on Save and close.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=39)** Also, you might want to come into Team configuration and check the working days.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=43)** This is how capacity and burn down are planned, so you need to select the days that your team works.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-sprint-cadence?u=76281980&t=49)** Now that we're configured, let's go see how to add items to a sprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scrum]] (1), teams (1)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Boards and sprints
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=0)** - [Instructor] Navigate to the sprints page in boards, and you can see all your sprints.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=4)** I'll choose my team.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=6)** You see an individual sprint here, and then you can switch to future sprints by going to this dropdown.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=13)** Notice that it says sprint 1 is the current sprint, these are all my future sprints, and as I move to these items, I have different views of the data that's in the sprint.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=21)** I can use what's called the backlog view, the task board view, the capacity view, and the analytics view.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=29)** Click through these, I'm not sure why I'm seeing these, but we'll go ahead and step through those.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=33)** Let's take a look at backlog view.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=36)** Let's go back to sprint number one.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=40)** In the middle, it shows all the backlog items that are in the sprint, it shows me all the sprints on the right side, so I can see sprint one is the current sprint, the timeframe for the sprint, how many working days there are, and what we've got planned for that sprint.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=57)** There are three backlog items and six tasks.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=63)** In sprint number two, I have eight tasks.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=65)** Now, I'd like to add some more items to sprint two and sprint three, or maybe to sprint four, so I can do that by going to backlogs where I see all of the items, all of my backlog items, and then I can just drag them into the planning section.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=80)** I have a couple of bugs on the bottom here.
>
> **[1:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=82)** I'm going to put one of these bugs in sprint four, one in sprint three, and one in sprint two.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=90)** Also I'd like to add some print items to sprint number four, so I'll go find the print prescription, drag that down there, and then how about reminders?
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=100)** Appointment reminders and medical appointments.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=104)** Don't I have another reminder?
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=105)** Yeah, payment reminders, here we go.
>
> **[1:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=107)** Now, I can see there's three backlog items and one bug in there.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=111)** Now, we can take a look at this in another view.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=114)** Go back to sprints.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=117)** It looks similar here, right?
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=118)** If I go to sprint number four, I see the backlog items here in a table view.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=127)** Some developers prefer to see it in a board look, so that's called the task board, not to be confused with the kanban boards we'll be looking at later, it's the same idea though.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=137)** Here I'm in my sprint and I want to move this print prescription into to do.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=144)** Well, we're not in the actual current sprint, so nothing happens here.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=149)** If I go to sprint number one and try moving items around, I can do that.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/boards-and-sprints?u=76281980&t=155)** I can move it to the in progress or into to do, and I can even move items back to my backlog by clicking here and choosing move to iteration and then putting it back in the backlog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[Analytics]] (1)
> **UI Navigation:** go to (2), navigate to (1), switch to (1), dropdown (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Kanban board basics
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=0)** - [Instructor] Kanban boards have a long history.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=2)** They started as paper notes, and there are many teams that still use paper to plan the work on a physical board.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=7)** The simple note represents the task.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=9)** It can be easily moved to a column.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=12)** Some teams use color as an additional signal, for example, orange notes might indicate bugs.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=17)** Most Kanban applications mimic the look of the physical board and cards, and it's no different for Azure Boards.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=24)** Here, you can see each of the work items represented as a card.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=28)** One of the benefits of a card is it's only a subset of information that's in the task, so it's only the information you think is important.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=35)** So if I want to, I can just show a few items on here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=38)** And you can set what's shown in the card by going to Settings, Cards, Fields.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=45)** And then for the product backlog, I can specify which fields are shown.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=49)** So if I don't want to show the tags and the effort, I can turn those off and then those are taken off the card.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=55)** But you can make 'em as simple or complicated as you'd like.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=58)** Let's go back and put those back in.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=60)** Go ahead and show effort, show tags.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=62)** And I'll also add an additional field here, so I'll add a new field called State.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=75)** Now, the State value is shown here on the card.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=78)** The second thing that you see that mimics the physical board is the columns.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=84)** You'll notice that some of these have headers on 'em.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=86)** So like the Develop header has two columns.
>
> **[1:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=89)** So we're doing something in the development section.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=92)** And then to notify my testers that it's ready to test, I can take this card and drag it over to the Done.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=99)** That means it's done with the development phase.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=102)** And then when the tester is ready, the tester will take it and drag it over to the Doing, where they start testing.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=108)** And when they're done testing, then it moves to the Done column.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=112)** And then this is essentially our backlog here.
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=115)** And of course, we can view this as backlog by clicking on this link.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=119)** And that takes us to the traditional Azure Boards' Backlog view.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=125)** I'll expand this so you can see that we're in the Backlogs.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=129)** And let's go back to Boards.
>
> **[2:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=131)** Other details on the card itself that are useful when you're planning is how much effort it's going to take, so that's what this number is here.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=140)** If I go to open this task and look at the effort, if this is considered hours, and we assume this is going to take one hour, you can quickly change that here by clicking on this dropdown and changing it to two hours or back to one, like this.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=156)** It's easy to add new items.
>
> **[2:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=157)** You notice at the top here, in the New section, there is a new item.
>
> **[2:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=161)** I pick what I'm adding, a bug or a product backlog, and then I just give it a title.
>
> **[2:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=169)** I'll call this "New Item 22," and hit Enter.
>
> **[2:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=172)** Now, as soon as I Enter, you'll see that it fills out some more details.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=175)** It's unassigned, it's a priority two which is the default, it's picked a default area path, and it's picked a state of new.
>
> **[3:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=183)** So let's say we approve this, now it goes into Doing.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=188)** Set this back to new, it automatically goes to the New column.
>
> **[3:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=192)** Put it in Done, you notice it moves over to the Done column.
>
> **[3:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=195)** Let's take a look at one of our other teams.
>
> **[3:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=198)** Go to the Mobile Team, and the Mobile Team hasn't set up any work items yet.
>
> **[3:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=204)** So this is one way to quickly add work items.
>
> **[3:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=215)** Quickly add them, and then I can go in and start filling out more details.
>
> **[3:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=222)** So that's the basics of the Kanban board.
>
> **[3:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-basics?u=76281980&t=225)** There's more to learn, we can customize the way the board itself looks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (3), [[Microsoft Azure|Azure]] (2), product (2), hit (1)
> **UI Navigation:** go to (2), dropdown (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add columns and swimlanes to a Kanban board
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=0)** - [Instructor] The purpose of the Kanban board is to visualize the flow of work, so your job as a team is to visualize what kind of work you do and where you hand off regularly as the team progresses from the backlog into a shippable state.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=13)** So you'll have these stages as you go through your work.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=16)** Microsoft has made some assumptions about what those stages are.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=19)** So you've got the new stage, develop, which is subdivided into two sub-columns, build and test, and done, and you can add your own columns or you can rename the ones that are shown here.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=30)** To rename them, you go to settings and go to board, columns, click on this, and then change the name here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=38)** This is also whether you specify if the column is split into the two sub-columns, doing and done.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=44)** Because our team uses some extra steps between develop and build, we're going to add our own column.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=49)** That's our code review step.
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=50)** So I'll click on new column, type in code review, split the column into doing and done.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=59)** Also specify the state this column maps to.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=62)** There's our choices, and then I'll click save and close.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=70)** The column's in the wrong position.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=73)** Now, I can't drag it here, but I can go back to the settings, drag it here between develop and build, and close, and now the workflow would be a developer is working on a item.
>
> **[1:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=89)** They drag it into done.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=93)** The code review person comes along, moves it into code review.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=97)** After they're done reviewing the code, they move it into done, so then it can be pulled into the build and test column.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=105)** There's also the possibility of adding rows.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=109)** In Kanban, these are called swimlines, and they typically represent different kinds of work or different teams performing work.
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=115)** Now, in Azure DevOps, we can create our own teams, so it doesn't make sense to have swimlane for a team, but if that's the way you prefer to work, you can do it.
>
> **[2:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=126)** Let me show you how to add one anyway.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=128)** You click here, go to swimlanes.
>
> **[2:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=131)** You always have a default one.
>
> **[2:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=133)** Add a new swimlane.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=135)** We'll call this one Mobile, and I'll move this one up.
>
> **[2:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=143)** So we got the default lane at the top.
>
> **[2:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-columns-and-swim-lanes-to-kanban-board?u=76281980&t=145)** I can also rename the default lane, which is called this one default so it's easy to see, and save and close, and now we've got the default lane here and I can collapse that lane, and then I've got the Mobile lane down here, and everything else works the same, so you move an item into the develop column, but this is in the mobile swimlane, and then everything else we've seen works the same as before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (4), teams (2), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Set work in progress (WIP) limits
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=0)** - [Narrator] There's another essential Kanban practice, known as Work in Progress Limits, also referred to as WIP Limits, W-I-P.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=8)** The idea is to constrain the amount of work that your team accepts at each work stage.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=13)** So it's designed to focus your team on completing items before starting new work.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=18)** You can see it here in the Developed column.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=20)** The WIP limit is set to seven.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=23)** Now, I think on our team, we only have two items in code review at any one time.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=28)** We don't want people putting a bunch of cards in that column because it takes a while for our code reviewers to get to the work.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=33)** So we want to limit to two.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=35)** So I'll specify the value of two here.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=36)** Looks like I've already done that.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=38)** I'd close this.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=39)** And then you can see the EIP limit here as the second number, four of seven, for develop, zero of two for the code review.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=48)** So as I move these items in, numbers increase.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=52)** Now you might expect that would warn you when you move it into the code review column when you go over the limit, but it doesn't.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/set-work-in-progress-wip-limits?u=76281980&t=59)** It's just a way of checking at the top to see if you've gone over the limit and now the person that added it to the code review column should say, oh, we got too many, let's move it back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (3)
> **Env Vars:** wip (2), eip (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)

#### Kanban board tag settings
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=0)** - [Instructor] Tagging work items helps you quickly filter the product backlog by the categories that you define.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=4)** So when you're creating a work item at the top, you can add, click here to add a new tag.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=11)** Type in a new value or pick from one that's already been defined.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=13)** As you can see for this example, there's an admin and a doctor tag already defined.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=18)** And when I close this and look at the Kanban card, I see those listed here.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=22)** And then on this work item down here, I can see there's admin, compliance, and finance.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=26)** So you define those on the work item themselves.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=29)** But there's another thing I want to look at, and that's changing the color of the tags to help them stand out on the card.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=35)** To do that, you go to settings, go to tag colors, click on plus tag color, choose your tag, and then pick from the dropdown, and save and close.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=48)** And everywhere the doctor tag is on the page, now you see that colored tag.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-tag-settings?u=76281980&t=52)** So this will help you identify the tags when you're looking at them in the Kanban view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (1)
> **UI Navigation:** go to (2), click on (1), dropdown (1)
> **Speakers:** - [instructor] (1)

#### Kanban board custom styles
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=0)** - [Instructor] If you like color coding items, you might be interested in looking at what are called "style rules."
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=4)** This allows you to change the background of the card, based on a set of criteria.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=10)** This can be more complex than just changing the tag color.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=13)** So here's how this works.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=14)** You go to Settings, and then you go to Styles.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=20)** You add a styling rule.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=22)** I'll call this one "High Priority."
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=25)** I pick my card color.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=27)** We'll go with this darker color of orange.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=31)** Let me make this a little bit taller so you can see it.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=34)** And then you can also specify the title style here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=38)** Maybe make it bold.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=40)** And then here's the rule criteria.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=41)** So you pick your field, priority.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=46)** And then your operator, and then your value.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=51)** And then you can add another clause.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=54)** So you can do complicated criteria here, or complex criteria.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/kanban-board-custom-styles?u=76281980&t=59)** I'll scroll over here, and I can see that the background color of this card changed based on that criteria.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### View work progress with dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=0)** - [Instructor] I'm going to take a side trip and look at the Overview section in the Azure DevOps portal, and there's three areas here.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=7)** There's the Summary, which gives you a summary information about this project.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=12)** There's a Wiki area for creating wiki entries, and what I'm looking at in this video is Dashboards.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=18)** Use these to gain visibility into your team's progress.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=21)** You configure it using widgets or charts; you add those to your dashboard, and these are customizable, highly configurable; and they help you provide you and your team shared information, help you monitor progress, look at trends, and improve your workflow processes.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=36)** There's currently one dashboard, you can see that listed here, and you can add new dashboards and you can create a dashboard that is based on teams.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=44)** So this is per a single team.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=45)** So if I choose this item, I would then pick the team, or I can do a project-wide dashboard.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=51)** I won't do that in this video.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=53)** We will customize the existing dashboard.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=57)** Like most modern web portals that have dashboards, they're based on a concept of widgets.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=62)** These are little customized bits of UI that you can put in the dashboard.
>
> **[1:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=66)** So let's examine some of the widget.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=67)** Here is this first one.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=69)** If I click on these three dots and choose about this widget, it'll take me to a page on the Microsoft documentation that tells me this is the markdown widget to display items from a markdown file.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=81)** So where is this information coming from?
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=83)** It's coming from my repository.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=88)** So you go look at the repository, go to the master branch.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=93)** We're pulling the information out of this readme.md file.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=98)** That's what's shown here.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=100)** Next to that is the work assigned to Walt Ritscher.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=104)** I see that I have three product backlogs, one bug, and one task, and I see details here.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=110)** This is the Assigned to Me widget, and this is configured here.
>
> **[2:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=120)** Basically, all you do here is set the width and heights.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=124)** Speaking of that, you can move items around.
>
> **[2:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=126)** Let's say that I don't like this unfinished work and active bugs.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=129)** I want to make the active bugs higher in the order.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=132)** So I'll go to Edit, and then I will click on this item and just drag it to a new location.
>
> **[2:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=139)** This is also where I can add widgets to empty spots.
>
> **[2:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=142)** I'll do that in a minute.
>
> **[2:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=143)** So let me close this.
>
> **[2:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=146)** Done editing.
>
> **[2:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=147)** As I move those items around, we also have Sprint Burndown.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=151)** We have information about user stories and who they're assigned to.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=156)** We've got a section over here, there's a chart over here, User Stories by State, and I can add other widgets to this dashboard by going to Edit.
>
> **[2:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=165)** And then I'll see all the widgets listed over here, and I'll look down this list.
>
> **[2:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=174)** If I find one, here is a query tile.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=175)** I'm going to show you queries in another video in this chapter.
>
> **[2:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=178)** So after we create the query, this is how we could add the results of that query to the dashboard.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=185)** This is what I'm looking for, the Team Members widget.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=187)** So I'm going to add that down here, one of these blank gray squares.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=190)** So drag that over, drop it there.
>
> **[3:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=195)** Stop editing.
>
> **[3:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=196)** Now, I can see the three members or our team, and I can use this to manage our team members.
>
> **[3:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=201)** That's your basics of working with the dashboard.
>
> **[3:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-work-progress-with-dashboards?u=76281980&t=205)** What we'll look at next is how to query data and then put that information on this dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (3), next (2), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1), teams (1)
> **UI Navigation:** click on (2), go to (2)
> **CLI Commands:** make (1), find (1)
> **File Paths:** readme.md (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Create custom work item queries
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=0)** - [Instructor] To find the query section or this query subpage under board.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=3)** So you click here and it shows the queries you've worked with recently.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=7)** If you want to see all the queries, click on this all tab here.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=12)** And there's a couple of items at the top assigned to me, and followed work items.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=16)** I believe these are created by the default template.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=18)** The other queries are ones I've created, like this one here, Demo Bugs by Team Member.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=22)** That's one I created.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=24)** And the rest of them come from the demo generator.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=26)** When you click on one of these items as to unfinished work, it runs the query and shows the results here.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=33)** So let's go take a look at the custom query that I created.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=36)** So I'll go to queries, shared queries, demo.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=41)** So what you do is, you say you're going to create a new query.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=46)** Like that.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=47)** And then once you get the query, you're going to see this editor, and you're going to specify the criteria here.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=54)** So I specified work item type, equal bug, and state equal any.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=59)** Now, this is a very simple query.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=61)** Obviously, you can do a much more complex criteria here.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=64)** You can have different and or clauses, add multiple clauses to it.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=68)** And then you get to see the results down here in the bottom.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=72)** So you run the query to refresh it and you see the results.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=75)** And when you have the query the way you want, then you choose save as.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=78)** Now it's important when you save this, to save it to the shared queries.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=83)** And this makes it available on the dashboard.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=86)** Now before I show you adding it to the dashboard, you can also create charts for these queries.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=91)** So I can go in here, and right now I have a bar chart that shows Terry's got three bugs.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=99)** I've got one bug and Tadd's got one bug.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=102)** And I can create new charts.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=105)** Let's do a line chart.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=109)** Select a field to group by, assign to.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=112)** And then I don't like the colors for Tadd, so I'll go down here, and pick a color purple for him, and then click on okay.
>
> **[2:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=120)** And then I see this new chart here.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=123)** So let's review this.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=124)** You go to boards, you edit queries.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=127)** You can see all the queries here in the all section.
>
> **[2:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=131)** And then when you choose the query, it runs the query.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-custom-work-item-queries?u=76281980&t=135)** You can edit the query, and you can see any custom charts that you've created for that query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (3), go to (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add a custom query to the dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=0)** - [Instructor] I'll customize this dashboard with some widgets that are using information from my custom query.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=6)** So the first step is to click on edit.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=8)** The second step is to decide what kind of widget to add.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=12)** So let's look what we can find for the word query.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=14)** I see one called query results.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=16)** That looks promising so let's add that.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=18)** So I select it, then I find a location for it.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=21)** So we'll slide this over a couple and drag this down here.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=26)** That looks like it'll fit.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=29)** Then I'll click on the settings to configure it, and here I have to select the query that's in my shared queries location.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=39)** Then I choose to select columns.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=41)** I don't need to see the ID, so unselect that.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=44)** I don't need to see the state.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=47)** That looks good, I'll choose save, and then I'll see about adding a chart.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=54)** Chart for work items using shared work item queries.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=58)** That looks promising.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=62)** Do that again, bring that down here.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=65)** It looks like I added it twice.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=68)** So let's scroll over and remove this one.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=72)** Then I will configure this one and I'll do the same thing, I'll select my query, select a field to group by, so it's going to pull information from that query.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=86)** I want to group by who it's assigned to, and I'll go ahead and leave it at pie chart, then click on save, and then choose done editing.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=93)** And now let's see what we have.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=95)** So we got our health team here.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=97)** We can see a table of information here, demo bugs by team member.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=101)** And then here's a chart that shows that same information.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-custom-query-to-the-dashboard?u=76281980&t=104)** So this shows you that not only is your dashboard completely customizable with all the built-in widgets, but you can also create your own custom queries and then use special widgets to show those query values in the dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (3), select the (1)
> **CLI Commands:** find (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)


### 3. Azure Repos

[↑ Back to Table of Contents](#table-of-contents)

#### What are Azure repos?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=0)** - [Narrator] In the world of software development, managing and maintaining code is as crucial as writing it.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=5)** Version control is essential for software development as it allows multiple developers to collaborate efficiently tracking and managing changes to the code base over time.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=16)** It ensures that every modification is documented, enabling easier identification and resolution of issues, and providing a history of changes for future reference and audits.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=26)** All modern version control systems facilitate collaboration through a common repository location hosted either on a server or in the cloud.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=34)** This provides a centralized code based accessible to all team members.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=38)** However, there are different approaches to what the centralized source represents.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=43)** Centralized version control systems maintain a single central repository to manage all changes.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=49)** This repository acts as the authoritative source for the code base where all modifications are stored and tracked.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=57)** Developers check out files from the central repository, make changes, and then commit those changes back to the central location.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=64)** Distributed version control systems like Git allow each contributor to have a full copy of the entire repository on their local computer with a cloud serving as a synchronization and collaboration point.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=76)** Azure repos are a set of version control tools provided by Microsoft as part of the Azure DevOps services.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=83)** Simply put, they offer a location to store your repositories on Microsoft Cloud servers that are integrated with the other DevOps services, Azure repos are closely tied to an Azure DevOps project.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=94)** When you create a project, you choose an Azure repo implementation.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=98)** The infrastructure for hosting a repository is automatically included, providing a centralized platform for code management and collaboration.
>
> **[1:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=106)** This integration allows for easy access to repositories and ensures they are well organized within the comprehensive project management and development workflows.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=114)** Each project in a DevOps organization can have multiple repositories.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=119)** DevOps creates a default repo when you create the project, but you can add more if you like.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=123)** Azure DevOps repo supports two types of version control systems.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=127)** Git is the default provider, or you can choose the team foundation version control system.
>
> **[2:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=133)** Both systems handle all the common repository actions.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=137)** You can commit and check in code changes, manages files and folders in the project.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=141)** You can create new code branches and handle code merges too.
>
> **[2:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=145)** Yet they are fundamentally different in their workflow and best practices.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=149)** Git has become the industry standard for version control.
>
> **[2:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=152)** It is a distributed system, which means each developer has a complete copy of the entire source repository on their developer machine.
>
> **[2:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=159)** This enables developers to commit changes, view history, perform code diffs, and execute other version control operations locally without needing a network connection.
>
> **[2:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=169)** A single developer can work with Git repositories on their local computer.
>
> **[2:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=173)** When it's time to collaborate with others or work on a software team, then it is sensible to put a copy of the repository in a shared location.
>
> **[3:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=182)** This is known as a Git remote.
>
> **[3:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=184)** Team members can work locally and sync with their team by pushing changes to the remote or issuing pull requests for the teammates to review before integrating the changes into the repository.
>
> **[3:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=195)** Azure repos is a hosting service for Git remotes facilitating this collaborative workflow.
>
> **[3:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=200)** A natural question to consider is the role of GitHub.
>
> **[3:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=203)** As part of the Microsoft ecosystem, GitHub also offers a set of DevOps services, including serving as a Git repository host.
>
> **[3:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=211)** It's a valid question.
>
> **[3:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=213)** I'll address this topic later.
>
> **[3:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=214)** I have included a video in the last chapter comparing the two services.
>
> **[3:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=218)** When talking strictly about Git remotes, there is little difference between Azure repos and GitHub.
>
> **[3:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=224)** Both are suitable for hosting services for Git remotes, you can host your remotes on GitHub, and use Azure DevOps for all the other services, or you can keep everything within Azure DevOps.
>
> **[3:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=235)** Now let's look at TFVC, which stands for Team Foundation Version Control.
>
> **[3:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=239)** It is a centralized client server system that has been a staple of Microsoft tools for a long time.
>
> **[4:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=245)** In a centralized system, the server is in control.
>
> **[4:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=248)** It is the source of truth for code in the repository.
>
> **[4:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=251)** Typically, team members check out the files needed for work and check in changes back to the server.
>
> **[4:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=257)** Historical data is maintained on the server only.
>
> **[4:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=260)** Should you use TFVC?
>
> **[4:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=262)** While most new projects choose Git, many enterprises continue to use established technologies long after their initial adoption.
>
> **[4:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=269)** If your company has code bases in Team foundation version control, you can start using Azure DevOps services while keeping the original repo intact.
>
> **[4:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=277)** It's important to note that while TFVC is still supported by Azure DevOps, Microsoft recommends using Git for new projects and is focusing future investment on Git.
>
> **[4:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=286)** For this course, I'm using Git.
>
> **[4:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=289)** The example shown in this chapter are simple.
>
> **[4:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=291)** If you are new to Git or a version controller, you can find more comprehensive courses on the LinkedIn learning site.
>
> **[4:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=297)** If you are an experienced Git user, there isn't much to learn.
>
> **[5:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=301)** Azure DevOps is simply another place to work with Git remotes.
>
> **[5:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=305)** The primary differences show up when you look at the additional tools on the DevOps portal.
>
> **[5:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=309)** The way you'll use Git on the developer computer will not change.
>
> **[5:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=314)** This is a rundown on how we'll use Git in the rest of this chapter.
>
> **[5:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=317)** Someone on our team creates a repository on the web portal.
>
> **[5:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=321)** Individual team members clone the repository to their local computers.
>
> **[5:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=325)** A team member creates a branch for new work.
>
> **[5:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=328)** One or more people can work on the branch.
>
> **[5:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=330)** Team members commit changes to a branch.
>
> **[5:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=333)** When the code is ready, a team member submits a pull request.
>
> **[5:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=336)** The designated team members review the request and approve and merge the changes back into the repository.
>
> **[5:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=343)** A team needs to use version control to manage code changes during development and code repositories are more useful when available in a centrally accessible location.
>
> **[5:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=352)** We've learned that distributive systems like Git offer many advantages for team development.
>
> **[5:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=357)** Yet distributed systems still benefit from having a central host.
>
> **[6:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=361)** There are numerous hosting options available for Git repositories.
>
> **[6:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=364)** If you prefer Microsoft hosting, consider using Azure repos or GitHub.
>
> **[6:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-repos?u=76281980&t=369)** Additionally, if you favor a traditional centralized client server approach, Azure repos supports that option as well.

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

#### View the parts of Azure repos
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=0)** - [Instructor] The entry point for repositories in a project is here.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=4)** You click on the project, and then on the sidebar there's a section called Repos.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=9)** I click on that and then I can see the subsections.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=11)** So when you click on Repos, it opens the file subpage, and on the file subpage, you can see all the files that are in this repository.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=19)** You can see the history of these files, who committed them and when.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=23)** And if I click on one of these, I can drill down and see details about that commit.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=27)** There was 143 changed files, and this file had 48 lines of text added.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=33)** I can also go back to the files and edit the files.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=37)** So let's say I want to edit this SQL file here, and click on that.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=41)** That opens the SQL file and it has a online editor.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=45)** I can see the contents, I see the history, compare with other versions, and I can also edit the file.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=53)** And if I make edits here, then I can commit those files directly from the web portal.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=57)** I don't need to do this from the command line on my developer computer or from any of my IDEs or editors.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=63)** I'll cancel out of this.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=65)** There's also the ability to see commits on a separate page.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=69)** So here's the commits.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=70)** This graph shows when you split and branch code.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=73)** That's currently on, I can turn that off here.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=76)** I can also filter by different criteria or look up commit IDs.
>
> **[1:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=83)** There's also the ability to look at pushes and pull requests.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=87)** Now I'm the person that created this demo through the demo generator.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=91)** So I'm listed as the person that did some of these pull requests, because that's how the generator works.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=95)** But let's go back, take a look at pushes.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=97)** Here are pushes to one of the branches.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=99)** So, once again, I can look at the entire push here today.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=105)** Here's another push and it takes me to the Details page.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=109)** Same with pull requests.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=110)** I can click here to see the pull requests that are pending.
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=115)** So here's the active pull requests, here's the completed pull requests, abandoned pull requests, and the ones that I specifically have added.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=124)** I'll talk more about pull requests when I get to the end of this chapter.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=128)** There's also the ability to add tags, there are no tags in this repository.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=132)** And there's the ability to look at branches.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=135)** Now here I can see that there has been several branches.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=141)** There's the master branch, there's the copyright-update branch, there's the adding contact us branch, and I can see who's working on this.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=151)** I can see the date that it was authored.
>
> **[2:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=153)** I can see the ahead/behind statistics about this branch, current status.
>
> **[2:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=160)** And I can also click on this to go see the files that are in that branch.
>
> **[2:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=165)** So that gives you an idea of what you can do in the web portal.
>
> **[2:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=168)** So what I want you to see is, like, most modern Git-hosting sites, there are a lot of tools available on this site for working with the files and the repositories.
>
> **[2:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=176)** And this is great because there are many members of your teams that aren't actively developing.
>
> **[3:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=181)** I'm thinking of some of your dev leads or your managers or PMs.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=185)** They might want to look at the status of the repo, but they're not actively working with the code.
>
> **[3:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/view-the-parts-of-azure-repos?u=76281980&t=189)** So this gives 'em a way to examine everything about that repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), web (2), [[Statistics]] (1), [[Git]] (1), teams (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** make (1), git (1)
> **Env Vars:** sql (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Create an Azure repo in the portal
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=0)** - [Narrator] Every project can have one or more repositories.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=3)** Currently in the HealthClinic project, I only have a single repository.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=7)** I would like to add an additional repository so that I can have simple examples for the rest of the videos in this chapter.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=14)** There are several ways to do this.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=15)** I'm going to click on Repos here in the sidebar and then go to this dropdown and choose Manage Repositories.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=24)** This shows all the repositories for this project.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=27)** I only have the one, and when I click on that, I can see the settings for this repository, like whether I allow forks and many other settings in here.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=36)** And then there's policies for this and permissions for this repository.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=42)** If I go back to all repositories, I can go to Settings.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=44)** Now I'm setting policies and permissions for any repository that's created in this project.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=49)** Let's start by looking at Settings.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=51)** There's this relatively new setting in here called Default Branch Name for Repositories.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=56)** So if you don't use master as the name for your default branch, you can choose the name you like here.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=61)** They're suggesting main, so let's turn this on.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=64)** That means all new repositories will have this as the starting branch.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=68)** That looks good, and then I can click here and Create.
>
> **[1:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=71)** Here, I specify the repository type and two other items.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=73)** But before I get there, let's talk about some other ways we can get here.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=79)** Let's go back to HealthClinic Repos.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=85)** Go to this dropdown.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=86)** There's two other ways to create, I can import an existing repository or I can click on the Plus sign for a new repository.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=93)** So now that we're in the Create dialogue, let's talk about these other two options.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=97)** Of course, I need to create a repository name.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=103)** Call this one SimpleRepo.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=104)** Now, if you're an experienced Git developer, what I'm talking about for the next minute will be familiar.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=109)** So please be patient.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=111)** Adding a README and adding a gitignore.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=113)** So a README ust adds a text file with the RD extension on it.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=117)** And this will be useful for my demo because it'll have a single file that I can use for editing purposes.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=122)** And then most projects, you want to have the ability to ignore certain files and not have them placed in the repository.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=128)** And you put the list of these files in a gitignore file.
>
> **[2:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=131)** Currently I don't have one, but if I want to add one, there's a set of templates available here.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=135)** The one I typically use for my projects is this one here, because I use Visual Studio.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=140)** Visual Studio, then it says my repository will be initialize on the main branch with this repository type, this simple name and it's going to add a README file.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=151)** That looks good, so let's go.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=155)** And I get the success message here.
>
> **[2:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=158)** I can see that there are two files, one called .gitignore, that's got all the settings for Visual Studio ignores.
>
> **[2:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-an-azure-repo-in-the-portal?u=76281980&t=165)** And of course, the README file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Git]] (1), next (1)
> **UI Navigation:** click on (3), go to (3), dropdown (2), in the sidebar (1)
> **Env Vars:** readme (4)
> **Tools:** visual studio (3)
> **Cross-References:** go back to (2)
> **CLI Commands:** git (1)
> **Documentation:** the readme (1)
> **Speakers:** - [narrator] (1)

#### Clone the repo to a developer computer
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=0)** - [Instructor] To clone the repository, I need to know the Azure repo URL for the repository so in the Health Clinic, I've got two repositories.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=9)** I'll click here and then choose the repository I want from this dropdown.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=12)** I'll choose my simple repo.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=14)** Then I'll click and clone to get the URL, copy that.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=17)** Then I'll switch over to my command line interface, which in my case is a customized shell running inside Windows terminal.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=27)** When I mean customized, this is PowerShell, but I've customized the way it looks and the way the prompt looks in PowerShell.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=33)** So now I'll change directory to my source folder repos, and then to this learning Azure DevOps folder.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=44)** Then I'll type in Git clone, paste in the URL, and before I run this, be clear, you have to have Git installed on your computer.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=53)** I've got Git for Windows installed, so this should work.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=57)** There you go, and now I will do a DIR.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=61)** There's my folder, and if I change into that folder, I see my two files.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=68)** I'll delete the folder.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=72)** I'll go out to File Explorer and delete that because I'm going to clone it again this time using another technique.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=79)** Back in the browser, I'll go to the clone repository and this time I'll ask the DevOps web portal to use one of the apps I have installed.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=87)** Now there's a lot of choices of IDs to clone into, see a list here.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=91)** The two that I use are Visual Studio and VS Code or Visual Studio Code, so let's start with VS Code, I'll click here.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=99)** It's asking me to open Visual Studio Code.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=104)** It's now asking me to allow the extension to open this URI.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=109)** I pick my folder location and I get a clone.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=116)** Now you might also see a login prompt.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=122)** Once that's done, that folder's been created and there's the two files.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=129)** Switching back to the DevOps portal, another way I can clone it, this time I'll clone it into Visual Studio itself.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=136)** To do that, I'll work with a Visual Studio-specific project, so I'll go to the Health Clinic, go to repos, switch to my other repository.
>
> **[2:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=146)** And if you look at the files, I see these SLN files, so that tells me these are Visual Studio-specific projects, so I'll choose to clone from here.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=155)** Choose to clone into Visual Studio.
>
> **[2:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=160)** Again, accept this prompt here.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=162)** You might get asked to log in.
>
> **[2:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=164)** At this point, I get this dialogue that says, "What are you cloning?"
>
> **[2:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=167)** In this case, I'm cloning the Health Clinic, and here's the remote path, here's the local path.
>
> **[2:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=173)** I've already cloned this in a previous run through, so I'll just click on connect.
>
> **[2:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=179)** After a short wait, I see my Solution Explorer is showing folder view.
>
> **[3:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=183)** I can also see my Git changes here.
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=186)** So the takeaway from this is that you might want to clone to your local developer computer.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/clone-the-repo-to-a-developer-computer?u=76281980&t=190)** I've shown you three methods for doing that, but if you're already comfortable using any tool for cloning the repository, those will all work with Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (4), [[Git]] (4), [[Microsoft Azure|Azure]] (3), prompt (3), [[Windows]] (2)
> **Tools:** visual studio (7), powershell (2), vs code (2), command line (1), windows terminal (1)
> **Env Vars:** url (3), dir (1), uri (1), sln (1)
> **UI Navigation:** go to (3), dropdown (1), switch to (1), click on (1)
> **CLI Commands:** git (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create a repo branch
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=0)** - [Instructor] I'll look at a few other GET actions.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=2)** In this video, I'll look at how to create a branch and use it for your code.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=5)** I'll be working in Visual Studio Code.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=7)** I'll be using the simple repo demo, which has this file, and I'll be making some simple changes through this README file.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=14)** It's a good idea in a software team to create a branch whenever you want to work on new features.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=20)** That way you are impacting only that branch and not the main branch of the application.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=25)** Now the way you name these branches varies depending on your team conventions.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=30)** Some teams like to use the name of the feature.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=32)** Some teams like to use the name of the person creating the branch.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=34)** I'll use a feature name for this example.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=37)** Now, to get to the GET tools, I will go here to the source control tab, and then you can see there's a number of settings here, or features, commits, file history, branches.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=49)** See there's only a single branch at the moment.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=51)** And I can also perform actions by going up to these three dots for more actions and things like push or clone or checkout and so on.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=61)** And what I want to do is go to the branch sub menu and choose to create a branch.
>
> **[1:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=66)** I'll call this one add header.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=70)** Press enter.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=72)** So now I have a branch in my local clone copy.
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=77)** You can see the branch here.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=80)** There's the add header.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=81)** It's got a check mark by it that it hasn't been published.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=84)** It says here, it has not been published to Azure DevOps.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=87)** So if any of my teammates were to go look for this new branch, they wouldn't see it.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=91)** So let's go ahead and publish that.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=93)** I'll go back to the branch menu and choose publish branch.
>
> **[1:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=99)** Now, when I hover over this, it says it's up to date with origin add header.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=105)** No, I don't want to do get fetch, not at the moment.
>
> **[1:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=107)** Now let's go verify that that branch is available in the web portal.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=113)** Over in the portal, I open SimpleRepo and then go to this drop down, which shows me the branches.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=119)** And I see there's the main branch which has the tag of default.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=123)** And then I see my branch, this is the branch I created called add header.
>
> **[2:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-repo-branch?u=76281980&t=126)** And of course, if I had rather I can create a new branch here, I could do it on the web, create the branch here, and then I would've to sync my local copy so I get the branch on my dev box.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (2), feature (2), web (2), application (1), [[Microsoft Azure|Azure]] (1)
> **API Endpoints:** get  (2)
> **UI Navigation:** go to (2)
> **Env Vars:** readme (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Edit and commit to repo
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=0)** - [Instructor] Next step is to make some changes to this file.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=2)** So, I'll edit it in Visual Studio Code.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=10)** I'll add this header like that, and then I'll save my changes, Ctrl + S.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=15)** And you'll notice that over here in Visual Studio Code, this number 1 appears.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=20)** There's one pending change. So, I click on that.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=24)** That takes me to this part of the screen, this page, and I can see that there's one change here.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=31)** So, I can right click on this and choose to stage the changes.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=35)** I can choose to stash the changes.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=37)** I can do all the actions here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=38)** What I want to do is commit the changes.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=41)** So, the easiest way to do that in Visual Studio Code is just to go up here and add a commit message like that.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=47)** Then, I'll click on this check mark to commit it.
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=50)** That saves it to my local repository.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=54)** And then, the next step is to synchronize with the DevOps server.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=58)** I have the choice of pushing the data directly to the server or issuing a pull request.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/edit-and-commit-to-repo?u=76281980&t=62)** And that's what we'll look at in the next couple of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[DevOps]] (1), data (1)
> **Tools:** visual studio (3)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Push the branch to DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=0)** - [Instructor] At this point, I have my changes on my local repository, but that's the only place where they're located, so I need to push them to the DevOps server, and that gives us the opportunity to talk about the difference.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=12)** So, git push is a Git operation, and that allows me to send the contents to any other remotes that I might have from my repository, and then the idea of a pull request is something that was coined by GitHub, and it's also part of DevOps, and this is where I ask other people to pull my pending change into the repository.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=33)** Here's the workflow.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=34)** You push to the branch, on the remote, and then you take the branch and you do a pull request on the branch into the main branch.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=43)** So, let's do the push first.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=45)** So, I can do that by going to, but before I do that, let's switch over to the browser, move over here, and I'm in the AddHeader branch.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=55)** I can see that here, and if I refresh this page, press F5, see the changes aren't here yet in the DevOps server.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=64)** Now, I'll go to Visual Studio Code.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=67)** I'll go to the Source Control page, and then I'll click here in the three dots, I'll do a push.
>
> **[1:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=74)** You can see the status in the lower left.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=78)** Now, I'll switch back to the server, refresh the page, and there is my change.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/push-the-branch-to-devops?u=76281980&t=86)** So, at this point, I'm ready to make the pull request, from this branch into the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3), [[Git]] (2), [[GitHub]] (1)
> **CLI Commands:** git (2), make (1)
> **Tools:** github (1), visual studio (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create a pull request
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=0)** - [Instructor] I'm on the portal, and I can see that in this branch I updated it about 15 minutes ago.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=7)** And at the top, there's this create pull request.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=9)** So I can click here to create the pull request.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=12)** I could also create the pull request in tools like Visual Studio or any of the other IDEs.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=16)** But I'll do it here on the web portal.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=18)** So I click here.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=19)** I choose a title, and I choose a description.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=22)** At the top, I can see a summary.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=24)** There's one file that was changed.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=25)** There's one commit.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=26)** In this pull request, I can use markdown to add more markup to the description down here.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=35)** I can also specify work items.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=37)** If there's a work item that I am closing, I can choose that from this list.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=42)** And I can add tags if necessary.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=43)** But the main thing that I want to add is required reviewers.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=47)** So I will add Tadd as a reviewer.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=51)** And so he's the one that's going to be responsible for looking at this pull request and deciding whether he wants to pull it.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=57)** Where's he going to pull it into?
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=58)** Well, you can see that up here, the main branch.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=60)** Now, I can choose other branches.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=61)** In this case, there's only two branches available.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=63)** But I could say I want to pull this into any of the other branches that are in this repository.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=69)** So I'm going to pull it into main, or I'm asking Tadd to pull it into main.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=72)** I'm ready.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=73)** I'll then create.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=79)** It's marked as an active pull request.
>
> **[1:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/create-a-pull-request?u=76281980&t=82)** And if I go, let's see, if I go over here and look at pull requests, I can see there's one pull request created by me, and it has to be reviewed by Tadd.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Team review of pull request
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=0)** - [Walt] Now, we are logged in with Tadd's account and he's working in the Azure DevOps portal.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=5)** And right now, if you look at pull requests, there's no pull request.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=8)** That's because he's in a different repository.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=10)** He's in this MyHealthClinic repository.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=13)** He switches over to the SimpleRepo repository.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=16)** Now, he sees there's one pull request that's been assigned to him.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=20)** So you can see active, completed, abandoned, and the ones that are assigned to me.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=26)** So I click here, and then you see a screen similar to the one where I created the pull request.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=32)** So you read the title, the description, you can see information about which files were changed, including the changes that are in that file.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=39)** He can read that here and also do diffs on the values.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=43)** He can see the updates and commits that are involved.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=47)** He can go to overview.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=49)** And one of the most important things about this is, remember, I'm asking other people to review this, and then if it's satisfactory, to pull it into the main branch, Tadd can have a conversation with me here.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=60)** And that's one of the benefits of using tools like DevOps is that you can have this history affiliated with your work items and this history affiliated with your pull requests and commits.
>
> **[1:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=69)** We can have a conversation here.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=72)** And then when he is satisfied, he can go up here and do one of these actions.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=76)** He can approve it, he can approve it with suggestions, he can wait for me, he can reject it.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=81)** Now, in this case, there's only a single reviewer.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=84)** If there were more than one reviewers, then they would all have to approve it before it gets merged into main.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=90)** And speaking of merges, one of the issues we occasionally run into when you're writing software and doing pull requests is that there are merge conflicts where there are lines of code that aren't compatible.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=103)** And so Tadd can check this out here on this top where it says no merge conflict.
>
> **[1:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=107)** So he knows if he approves this, it's not going to be a problem.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=110)** So in this case, he'll go up here and choose approve.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=114)** It says, Tadd approved the pull request.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=117)** And now, we can go back to pull requests and it says no pull request for current view.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=123)** Now, let's take a look at it from my perspective.
>
> **[2:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=126)** So over on my login, I can see that there's some updated just now.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=130)** I can click on this. I see that it's been approved.
>
> **[2:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=134)** So now, I can go and hit and complete this.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=137)** Or what else are my choices?
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=137)** I can complete, abandon, or mark as draft.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=140)** So I'm going to choose to complete.
>
> **[2:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=142)** And it's asking me here, what do I want to do?
>
> **[2:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=145)** What kind of merge do I want to do?
>
> **[2:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=148)** So I can do a merge, no fast forward, squash commit, rebase and fast forward, and semi-linear merge.
>
> **[2:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=154)** We have lots of choices.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=156)** The one I need is merge, no fast forward.
>
> **[2:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=158)** I also have some other things like what should we do after merging?
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=162)** Should we delete the add header branch after merging?
>
> **[2:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=165)** Yes, we should.
>
> **[2:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=167)** So I'll go ahead and complete the merge.
>
> **[2:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=171)** So it shows that Walt Ritscher completed this pull request.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=175)** And then, let's go take a look at branches.
>
> **[3:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=180)** There's only a single branch now.
>
> **[3:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/team-review-of-pull-request?u=76281980&t=182)** So that's your complete workflow for working with a pull request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Microsoft Azure|Azure]] (1), hit (1)
> **UI Navigation:** go to (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [walt] (1)


### 4. Azure Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### What are Azure pipelines?
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=0)** - [Lecturer] Azure Pipelines is a set of services that automate your application build and deployment phases.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=6)** This is Microsoft's continuous integration and continuous deployment system.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=10)** There is some overlap between continuous integration, CI, and continuous delivery, CD.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=15)** Let's clarify the relationship between those two.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=18)** First, it's important to note that there are various interpretations of what continuous delivery entails.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=24)** When I first started doing automation, I found this somewhat confusing, especially around the concepts of continuous delivery and continuous deployment.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=32)** Here's my take on these ideas.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=34)** The primary goal of continuous delivery is to ensure that software can be reliably and rapidly released to production at any time.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=42)** It focuses on keeping production up to date quickly and efficiently by deploying high quality, thoroughly tested code or components as fast as possible.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=52)** Automation helps speed up deployments and quickly fixes any issues that arise, streamlining the process of delivering software to stakeholders.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=60)** Continuous delivery involves automating the build, test, configuration, and deployment stages from development to production.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=68)** To achieve the goal of delivering high value software to our users, the process is divided into two main categories, continuous integration and continuous deployment.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=79)** Continuous integration is the practice of frequently merging code changes into a shared repository where automated builds and tests are run to detect issues early.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=88)** Continuous deployment is the process of deploying every code change that passes the automated test through the production environment, ensuring that software is always in a releasable state.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=98)** Continuous integration is the industry word that describes the process of automating the building and testing of code.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=104)** This practice involves developers frequently merging their code changes into a central repository or automated builds and tests run.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=111)** The main goal of continuous integration is to provide rapid feedback so that if there are any defects in the code base, it can be identified and resolved as soon as possible.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=121)** In Azure DevOps, continuous integration is part of the build pipeline.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=125)** Continuous deployment is the industry word that describes the process of automating the deployment of the application which ensures the final product is made available to the customers.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=135)** Continuous deployment complements continuous integration by deploying all code changes to a testing and/or production environment after the build stage.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=144)** This means that on top of the automated testing, you have an automated release process and you can deploy your application at any time.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=151)** Deployment can be manual, partially automatic, or fully automatic.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=156)** In the latter case, every change that passes all stages of the production pipeline is released directly to customers without human intervention.
>
> **[2:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=165)** And as your DevOps, continuous deployment is part of the release pipeline.
>
> **[2:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=169)** Here's our first look at the process.
>
> **[2:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=171)** The continuous integration process starts with a trigger, typically, a code commit to your version control system, as your pipelines automatically fetches the latest code and executes a build process defined in a YAML file or through the classic editor.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=185)** Automated tests are run to ensure code quality.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=187)** This can include unit tests, integration tests, regression tests, and more.
>
> **[3:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=192)** Successful builds produce artifacts, which are deployable components of your application.
>
> **[3:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=197)** The term artifacts in the context of Azure pipelines generally refers to the output of a build process, which can include compiled code, binaries, or any files produced during the build.
>
> **[3:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=210)** These are often referred to as build artifacts or pipeline artifacts.
>
> **[3:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=215)** This is not to be confused with Azure Artifacts, which is a service for hosting and managing packages that can be consumed by various projects and services.
>
> **[3:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=224)** That's the end of the build pipeline.
>
> **[3:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=226)** Now we move on to the release pipeline.
>
> **[3:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=228)** It starts with the pipeline artifacts created by the build pipeline.
>
> **[3:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=232)** Release pipelines can have multiple stages, such as staging and production.
>
> **[3:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=236)** Each stage can have its own set of deployment tasks.
>
> **[3:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=239)** Before deploying to sensitive environments like production, manual approvals can be required.
>
> **[4:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=245)** Artifacts are created and prepared for deployment to the target environment.
>
> **[4:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=249)** At this point, we can release to production, which can be done manually.
>
> **[4:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=252)** If automatic deployment is set up, the final deployment step happens without requiring manual intervention.
>
> **[4:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=259)** Microsoft is not the only organization building CI/CD tools.
>
> **[4:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=263)** There are several popular tools available that cater to different needs and preferences.
>
> **[4:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=268)** Here's a list of some widely used CI/CD tools.
>
> **[4:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=271)** They offer similar tools to Azure Pipelines and cater to teams working on other DevOps platforms.
>
> **[4:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=278)** Let's talk about the benefits of Azure Pipelines for DevOps teams.
>
> **[4:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=282)** They are part of the larger Azure ecosystem, which includes a wide range of services and tools for building, testing, deploying, and managing applications.
>
> **[4:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=290)** It is highly scalable, allowing you to run multiple jobs in parallel.
>
> **[4:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=294)** This can reduce the time it takes to build, test, and deploy complex applications.
>
> **[4:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=298)** Furthermore, Azure Pipelines is designed to automatically scale up the underlying infrastructure to meet your needs.
>
> **[5:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=305)** With Azure Pipelines, you can define your pipelines using YAML.
>
> **[5:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=308)** This allows you to version your pipelines along with your application code.
>
> **[5:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=313)** Azure Pipelines provide comprehensive environment and security controls, ensuring that your CI/CD processes are secure and compliant.
>
> **[5:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=321)** These controls include features like secure secrets management, role-based access control, and audit trails.
>
> **[5:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=327)** There is a lot to learn about the services available in Azure Pipelines.
>
> **[5:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-are-azure-pipelines?u=76281980&t=331)** We'll look at build and release pipelines in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[Continuous Integration (CI)|Continuous integration]] (9), application (5), [[Continuous Delivery (CD)|Continuous delivery]] (5), ci (4)
> **Definitions:** is a  (3), means that (1), refers to (1)
> **CLI Commands:** cd (4)
> **Env Vars:** yaml (2)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)

#### Continuous integration with build pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=0)** - [Instructor] Before talking about continuous integration, let's examine the idea of code integration.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=5)** This is a broad topic with various historical definitions, but for our purposes, it refers to the process of merging new code with existing code to create a unified version of an application.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=18)** Code integration can range from modifying a single line of code, to merging a fully developed feature branch into the main code base.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=26)** In large teams, this process often involves a continuous stream of updates from multiple contributors.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=33)** Once the merge is complete, we need to test the integrated code to ensure that it works correctly and that it meets the project quality bar.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=40)** There might be regression tests to ensure that the new code submissions do not adversely affect the existing functionality of the code.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=47)** Obviously, testing the software by hand takes a lot of time, is repetitious and is susceptible to human error.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=55)** We address human error by utilizing a reliable testing suite that consistently runs all tests in a repeatable manner.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=62)** These testing systems are an integral part of the continuous integration process.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=67)** Essentially, the workflow for updating the app code follows this diagram, whether you are using a manual or automated process.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=75)** First you commit your code changes, and then you merge the new code into the main code base.
>
> **[1:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=81)** Next, you build the app, which generates executables and other essential files for desktop applications, for web apps to build process generates minified files, and other site artifacts.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=93)** Finally, you test everything to ensure it works correctly.
>
> **[1:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=97)** While it's possible to do this manually, automation is preferable, which is where the Azure DevOps Build Pipeline comes in.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=104)** The build process or the Build Pipeline is customarily triggered when code is committed into the version control system.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=111)** There are many nuances to this process.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=114)** Some teams like the immediacy of instant builds, meaning you trigger the build process with every code merge.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=121)** Other teams prefer to consolidate the builds until the end of day.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=125)** The so-called nightly build as your pipeline supports both of these scenarios.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=130)** As pipelines can build applications on Windows, Linux, and Mac OS making it versatile for different development environments.
>
> **[2:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=139)** Azure pipelines integrates seamlessly with various version control systems like Azure repos, GIT GitHub, and Team Foundation Version Control.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=149)** This allows for automatic builds and validations whenever changes are pushed to the repository.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=155)** You can set up build pipelines that run multiple jobs in parallel and define multi-phased builds to streamline the build process.
>
> **[2:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=163)** As your pipelines supports continuous testing, allowing you to run automated tests with each build, you can customize your pipelines using YAML or the classic editor, and extend these pipelines with custom tasks, scripts, and third party integrations.
>
> **[2:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=179)** The Build Pipeline generates build artifacts, which are the outputs of the build, such as binaries, libraries, or packages.
>
> **[3:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=187)** Azure Build Pipeline is a key part of Azure DevOps that automates fetching dependencies, compiling code, running tests, and creating build artifacts.
>
> **[3:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=196)** It supports many programming languages and platforms.
>
> **[3:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/continuous-integration-with-build-pipelines?u=76281980&t=199)** This automation maintains code quality and keeps the code base deployable, enhancing efficiency, and reducing human error in software development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), teams (3), [[Version Control]] (3), [[Continuous Integration (CI)|Continuous integration]] (2), [[Automation]] (2)
> **Definitions:** is a  (2), refers to (1)
> **Env Vars:** git (1), yaml (1)
> **CLI Commands:** git (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The pipeline components
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=0)** - [Instructor] Azure Pipeline consists of several key components that work together to automate your build, delivery, and deployment process.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=6)** We'll look at some of the components on this list.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=9)** Typically, you define your pipeline in a YAML file, which outlines the steps to be taken during the build, test, and deployment phases.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=17)** The YAML file can be stored alongside your code, making that easier to maintain and version the file with the rest of your application code.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=25)** Azure Pipelines reads this file to execute tasks in the order and the environment you specify.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=31)** Agents are the backbone of Azure pipelines.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=33)** An agent is a computing environment where tasks are executed.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=37)** It's responsible for doing the work like checking out your code, running tests, and reporting the results.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=44)** Azure Pipelines provides two types of agents.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=47)** Microsoft hosted agents are ready-made environments maintained by Microsoft.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=51)** They are pre-configured with popular software and tools, saving you the trouble of setting up and managing your own machines.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=59)** Self-hosted agents are environments that you manage yourself.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=62)** They give you more control over the configuration and can run on your hardware or in the cloud.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=68)** In Azure Pipelines, a job is a single phase of your pipeline, like building code or running tests.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=75)** Each job runs on an agent and includes a series of steps.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=79)** You can speed up your pipeline by running multiple jobs in parallel, or run them one after the other if they depend on each other.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=86)** Each job has its own context and workspace, so variables and files created in one job are kept separate from the others.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=94)** This helps keep your pipeline clean and makes troubleshooting simpler.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=98)** Stages in Azure Pipelines help you organize jobs in a logical way.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=103)** They are the major divisions in a pipeline and help group related jobs together.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=108)** They can represent different environments like development, testing, and production.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=113)** They can represent related jobs like build, test, and deploy.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=117)** This structure allows you to control the flow of your development process more effectively.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=122)** Steps are the smallest unit of work in Azure Pipelines.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=125)** They include tasks like running a script, publishing artifacts, or deploying to an environment.
>
> **[2:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=131)** Each step runs within a job on an agent.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=135)** You can define steps using built-in tasks from Azure Pipelines, or write your own scripts in PowerShell, Bash, Python or other languages.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=144)** You can also enhance your pipeline with third-party tasks from the Azure DevOps marketplace.
>
> **[2:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=150)** Tasks are pre-created scripts or extensions that you can add to your steps.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=155)** They are designed to simplify common operations such as restoring new good packages or publishing artifacts.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=162)** Tasks can be found in the Azure DevOps marketplace or can be custom made.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=166)** They provide a convenient way to incorporate complex actions into your pipeline without having to write the scripts from scratch.
>
> **[2:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=173)** Steps and tasks are both fundamental components, but they serve different purposes within a pipeline.
>
> **[2:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=179)** A task is a packaged script that can be used as a step within a job, and a step is the action that is actually executed which can either be a script or a task.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=188)** A trigger tells the pipeline to run.
>
> **[3:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=191)** Triggers can be based on events such as a commit to a repository or a pull request, or they can be scheduled to run at specific times.
>
> **[3:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=199)** A pipeline approval is a type of check that acts as a gatekeeper before the deployment of a stage can proceed.
>
> **[3:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=206)** They can be manual which requires a designated individual or group to review and approve the changes being deployed.
>
> **[3:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=212)** This is helpful when moving to sensitive environments like production.
>
> **[3:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=216)** The approval process ensures that deployments are intentional and verified, reducing the risk of unintended changes affecting critical systems.
>
> **[3:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=225)** When an approval is required, as your pipelines will pause the execution of the pipeline before the stage that requires approval and it will only continue once the approval has been granted.
>
> **[3:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=235)** Automated checks can also serve as approvals.
>
> **[3:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=237)** These checks can be configured to meet specific conditions before a pipeline stage starts.
>
> **[4:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=242)** For example, a pipeline might deploy only during business hours or after passing certain automated tests.
>
> **[4:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=249)** Let's look at a visual to help understand the component relationships.
>
> **[4:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=252)** Once we've configured a pipeline, it can be run in several ways.
>
> **[4:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=256)** It's possible to run the pipeline manually.
>
> **[4:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=258)** Someone on your team can start it at any time.
>
> **[4:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=261)** Alternatively, we can set up a trigger like a code commit to start the build pipeline automatically.
>
> **[4:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=267)** Pipelines are made up of one or more stages.
>
> **[4:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=270)** A stage is a logical boundary in the pipeline and can be used to group actions like building the app, running tests, or deploying two pre-production.
>
> **[4:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=279)** Each stage contains one or more jobs.
>
> **[4:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=282)** A job is run by an agent.
>
> **[4:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=284)** An agent is designed to run only one job at a time.
>
> **[4:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=288)** Within the job itself are one or more steps.
>
> **[4:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=291)** As we've seen, a task is a package script that can be used as a step within a job, and a step is the action that is actually executed which can be either a script or a task.
>
> **[5:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/the-pipeline-components?u=76281980&t=301)** Now that we've seen the components, the rest of this chapter looks at how to use Azure Pipelines on the DevOps portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (11), [[DevOps]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft]] (2), application (1)
> **Definitions:** is a  (6)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** yaml (2)
> **Tools:** powershell (1), bash (1)
> **CLI Commands:** python (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Explore the pipeline section of the DevOps portal
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=0)** - [Instructor] We'll take a quick look at the parts of the Azure Pipeline.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=4)** So, click on Pipelines.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=5)** There are many sub-pages in here.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=7)** The ones we're looking at in this video, Pipelines, Environments and Releases.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=12)** So, it's a bit confusing here.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=13)** It says Pipelines as the Azure DevOps section, and then, immediately below that is the Pipelines sub-page.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=20)** This is where you find your build pipelines.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=23)** Your Release pipelines are here.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=25)** So, you can create a build pipeline, and when it's complete, it will trigger a Release pipeline to run.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=31)** What about environments?
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=33)** An environment is a collection of resources that can be targeted by deployments from the pipeline.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=38)** For example, a cluster of virtual machines.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=41)** Typical examples of environment names are dev, test and qa, or staging and production.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=48)** You find your build pipelines in here.
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=50)** I'm in the demo project and there's only one build pipeline in here.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=55)** It hasn't run yet.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=57)** So I can click on the blue button to manually run the pipeline.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=61)** This also has triggers. Let's go see.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=63)** Click on Edit.
>
> **[1:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=66)** And then here I see the Tasks, Variables, Triggers, Options, and many other settings.
>
> **[1:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=74)** And if you look at Triggers, and you can see that there's a continuous integration trigger set up.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=80)** And it's a branch filter.
>
> **[1:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=82)** So, if anything is integrated into master, it will trigger the build.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=87)** If you go over here, it shows the list of tasks.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=90)** So, there's get sources.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=93)** This is the build pipeline, and it's using the Azure Repo as the source.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=98)** You notice there's lots of other choices.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=100)** We can work with GitHub, GitHub Enterprises, Subversion, Bitbucket Cloud, and other Git providers.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=108)** This is using the repository, this part of this project.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=111)** And then, I can see we get the sources.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=114)** And then Phase 1, and we're running on an agent here.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=117)** So, the agent is going to do all of this work.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=121)** It's going to restore, it's going to npm install bower.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=125)** It's going to run another npm installer.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=128)** It's going to install bower.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=130)** It's going to build and then test, and then publish the files to an output folder.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=136)** And then some other items including copying files.
>
> **[2:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=139)** This shows you some of the things we talked about in the last video.
>
> **[2:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-pipeline-section-of-the-devops-portal?u=76281980&t=142)** The agent and the tasks.

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

#### Explore the example web project
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=0)** - [Instructor] I created this [ASP.NET](https://ASP.NET) Core website in Visual Studio using the [ASP.NET](https://ASP.NET) Core template, it's using all the default settings.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=9)** I've made one slight change to the code here in Layout.cshtml, it's right here on line 40.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=17)** What I did is I'm reading the assembly's version number and printing that to the bottom of the page.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=23)** And this will be useful when I create a build pipeline, I will be generating some version numbers, and we'll be able to see those version numbers on the bottom of the page.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=33)** This is what the webpage looks like running on localhost, see, I'm running on localhost here.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=39)** This is the standard template you get from Visual Studio.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=42)** It has a menu bar across the top, some simple text, and there is the footer that has the version number.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=49)** I put this in source control, and so, it is committed to source control.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=53)** And if you go take a look at DevOps, let's go to Repos.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=60)** I'll open SimpleRepo.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=64)** Open SimpleRepo, and then you can see that I added a source folder, I have a SLN file, this is from Visual Studio.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=72)** And then within that, this is the code we just saw in Visual Studio.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=75)** So that's already been committed to the repository.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=80)** I've also created an app service in Azure.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=84)** This is the deployment location.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=86)** I'll deploy the website here.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=88)** And if you browse from this, it shows the URL that's used for that website.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=92)** And since I haven't pushed any or deployed any files to the app service yet, I get the default page, which is saying, yes, your app service is running, but there's nothing to show here.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=102)** If you're interested in setting up continuous deployment, you can click here to learn more about that, that will use the Azure continuous deployment.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=108)** What we're going to be using is the one here in Azure DevOps, so I'll review it.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=112)** This is the page running in localhost.
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=115)** This is the place where the page will be running when it's deployed to Azure.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=118)** This is the app service.
>
> **[2:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-example-web-project?u=76281980&t=120)** And this is where I'm going to create my pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[ASP.NET Core]] (2), [[DevOps]] (2)
> **Env Vars:** asp (2), net (2), sln (1), url (1)
> **Tools:** visual studio (4)
> **URLs:** [asp.net](https://asp.net) (2)
> **Exercise Files:** template (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Add a service connection to Azure Resource Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=0)** - [Narrator] In order to connect to my Azure subscription, I need to create what's called the service connection.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=5)** You can find that in Project Settings, click here.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=8)** I will be connecting to Azure using the resource manager.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=11)** So I'll select this radio button.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=14)** And I'll use this service principle automatic.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=19)** Now, the first time I ran this, I had to sign in with my credentials.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=23)** Now it shows me my subscriptions available, and my resources group.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=27)** I'm using this one for the course, and then I'll give it a service connection name here.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=38)** Like that.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=39)** And then I'll grant access permission to all pipelines.
>
> **[0:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-service-connection-to-azure-resource-manager?u=76281980&t=47)** Now I have my connection and when I go to work with my pipelines, I can tell it to use this when it needs to connect to Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Explore the pipeline templates
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=0)** - [Instructor] One benefit from working with Azure pipelines is the included templates.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=4)** When you're creating a build pipeline, you can use a template to get started.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=7)** We'll take a look at some of the templates that are available for [ASP.NET](https://ASP.NET).
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=11)** The first step is to open pipelines, and then go to the build pipeline section, that's this one here, click on a new pipeline.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=19)** I've got two choices, I can use this editor for creating the new pipeline, which will generate a YAML file, or I can use the classic editor, which will create the pipeline without the YAML file.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=28)** The benefit of using YAML is that it's a text file and then I can include that YAML file in my repo.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=35)** For this example, I'll choose the classic editor.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=40)** Then I'll choose my source.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=42)** I'll use Azure repos git, I'll choose the team project, the repository that contains my code, that's a simple repo, choose the main branch, and click on continue.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=54)** You can see there's a lot of templates here.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=57)** There's .NET desktop, there's Docker containers, and many, many more, and the two that I want to look at are these two here for [ASP.NET](https://ASP.NET).
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=68)** So this one, build and test an [ASP.NET](https://ASP.NET) web application.
>
> **[1:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=71)** This template, you set up the source, then it's going to run these steps on the agent.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=79)** It's going to use NuGet, it's going to restore packages, it's going to compile or build the solution using the settings here, it'll test if we've got any tests set up, it'll publish symbols, and then it'll publish artifacts, that's a zip file in our case.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=96)** This is only the build portion of the pipeline.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=100)** Now, if we go back and choose the other template, you see what it says here?
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=105)** Build, package, test, and deploy an [ASP.NET](https://ASP.NET) Azure web application.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=110)** This will include the build and the deploy part.
>
> **[1:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=113)** I'll choose this one.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=116)** Now, you see that I have to connect to my Azure subscription, that's why here and here have these red texts that says some settings need attention.
>
> **[2:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=125)** Let's take a look at what's different in this template.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=128)** It has this Azure web app deploy, so it's still got the artifact and the symbols and the test, it's also doing something called archiving, which wasn't available in the other template.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=140)** My point is each one of these templates has different steps that you can use, and then you see how you configure them, you click on the item, and you change the settings over here in the right side of the screen.
>
> **[2:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/explore-the-pipeline-templates?u=76281980&t=151)** In the next video, we'll look at how to use this template to create our build and deploy pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[ASP.NET]] (4), web application (2), [[Git]] (1), web (1)
> **Env Vars:** net (5), asp (4), yaml (4)
> **Exercise Files:** template (6), zip file (1)
> **URLs:** [asp.net](https://asp.net) (4)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** git (1), docker (1)
> **Cross-References:** in the next (1)

#### Add a build pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=0)** - [Narrator] It's time to start setting some of the settings for this pipeline.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=4)** I've got two areas I need to fix, they have the red text.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=6)** So what's wrong here is I need to provide my Azure subscription.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=9)** Before we get there, let's take a look at the name.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=12)** I don't like this name, so I'll go and put in simple web app.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=16)** Go down here and the display name for this is going to be Azure Web App Deploy.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=22)** I'll just go ahead and leave that as is.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=24)** Then I'll go up here, I'll choose my agent pool.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=27)** I'll use Azure Pipelines.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=29)** I'll specify which agent to run.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=31)** I have choices for MacOS, Ubuntu, and for Windows.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=36)** I'll choose the Visual Studio 2017 build agent.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=39)** Here, I need to specify some value for the solution.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=42)** Now if you want to know what to enter for these properties, there's two places to look.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=48)** This I looks promising, but when you click on it, it doesn't give you much information.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=52)** It just says this is an important settings.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=54)** It can be shared between your pipelines, tasks and changed in one place.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=57)** It's less intuitive, but the place to find out more details about what you're supposed to provide here is in this link.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=63)** Click here and it tells me that this is a relative path from the repository route of the solutions or MSBuild project to run, for example and it tells me SLN.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=72)** So this is the SLN file for my solution that also contains my project.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=78)** So that looks good.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=79)** Next, I need to specify my Azure subscription, and I already set up my service connection, so I should be able to choose that from here.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=88)** And then go pick my app service name on Azure where I want to deploy it.
>
> **[1:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=92)** That's this app service.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=94)** Now I'll go down to the Azure Deploy and notice this changed the name here.
>
> **[1:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=100)** Now it says simplewebaapp-211, and I need to specify what type this is.
>
> **[1:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=105)** So this is a web app running on Windows.
>
> **[1:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=108)** At this point, all the red text has disappeared.
>
> **[1:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=112)** Now what else are we going to fix?
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=115)** For our Get Sources, we already specified our repository.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=118)** I'm going to leave the NuGet part.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=121)** I'll keep using this version of NuGet.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=122)** I want it to restore the packages.
>
> **[2:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=124)** I want it to build the solution.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=127)** Now, I'll come back here later and we'll set up some version numbers.
>
> **[2:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=130)** At least that's my plan.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=132)** I want it to archive files and it's going to archive on DevOps somewhere.
>
> **[2:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=138)** It's going to archive it as a zip file.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=141)** Replace the existing archive, that looks good.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=144)** Well, I want to go back and look at Build.
>
> **[2:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=146)** And one of the choices here is whether or not to clean the solution.
>
> **[2:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=150)** And there's a bunch of other advanced settings like do you want to record the project details as part of the build?
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=155)** I'm not testing anything.
>
> **[2:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=159)** Finally, publish an artifact.
>
> **[2:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=161)** This is where it's going to publish the, I believe this is where the zip file goes.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=166)** So that looks good, I'll go ahead and save.
>
> **[2:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=170)** I can save in queue, which would save this pipeline and then also run the pipeline, queue it up for running.
>
> **[2:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=176)** I'll just choose to save it.
>
> **[2:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=178)** Click on Save.
>
> **[3:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-build-pipeline?u=76281980&t=185)** Now we're ready for the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), web (3), [[Windows]] (2), next (2), [[Ubuntu]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** sln (2)
> **UI Navigation:** click on (2)
> **Exercise Files:** zip file (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)

#### Manually run and troubleshoot a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=0)** - [Instructor] Now that we have our pipeline, it's time to test it, see if it works correctly.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=4)** You click on it and then you can run it manually from the DevOps portal by clicking on this blue button, "Run pipeline."
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=13)** Once you bring up this dialogue, you specify which agent pool, you specify which agent, which branch in the repository and other advanced settings, and then you click on run.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=21)** Now, we've already set these when we were setting up the pipeline, but we can alter them and use alternatives while we're running the pipeline manually.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=29)** On this build, it takes about two minutes to run the builds.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=32)** I will cancel out and instead we'll look at some of my past runs.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=36)** After I created this pipeline, I started testing it, and you can see that I have some successful runs.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=41)** I have two successful runs and I have five failed runs.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=46)** Now let's prove it's successful. Click here.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=51)** We see that it has the green check mark, and I can also verify this by going to the URL for the app service and see that my website is now running in Azure.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=60)** That's our end goal, is to build our product and push it out to Azure.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=65)** That's working.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=67)** Now let's talk about the troubleshooting steps.
>
> **[1:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=71)** When you have a failed build, you can click on any of these items and read details.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=76)** For example, here it says that I had trouble with .NET Core SDK, requires at least version 16.7.0 of MSBuild.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=85)** The reason I got this error is because I was using the wrong agent.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=90)** Let's take a look at what I fixed.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=91)** I'm going to go back to the pipelines, click here, choose to edit, and I had to make two fixes in order to get the successful build.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=101)** First of all, I had to use this agent, Windows 2019, that's the one that has the correct MSBuild version, so I had to switch that.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=110)** And the other thing is, I started out by using .NET 5 for its website.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=114)** We rolled it back to .NET 3.1, .NET Core 3.1 I should say.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=119)** And the problem was, is we didn't have the SDK available for the build engines, so I had to add an additional step to the agent, that's the step right here.
>
> **[2:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=128)** The way you add a step, by clicking on the plus sign for this agent, choosing the task, clicking on the add button when you find the task that you want, and then you come over here and you make some configuration changes, where, in my case, I said I was installing the SDK and that this is the version that I want, "3.1."
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=149)** and then this is a wild card.
>
> **[2:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=152)** I want it to install it into this folder.
>
> **[2:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/manually-run-and-troubleshoot-a-pipeline?u=76281980&t=155)** So now when I run the build, it's successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[DevOps]] (1), product (1), [[Troubleshooting]] (1), [[Windows]] (1)
> **Env Vars:** net (4), sdk (3), url (1)
> **Versions:** 3.1 (3), version 16 (1), 7.0 (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Update the repo to trigger the build
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=0)** - [Instructor] We've set up this pipeline so that it is triggered when there's a change to the repository.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=6)** So that could be a commit, it could be a pull request, it doesn't matter.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=10)** As soon as there's a change to the repository, it will trigger the build.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=15)** So to demonstrate that, I'm logged in with Terri's account here.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=18)** She's opened up this main page, the site, this index.cshtml.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=23)** She's going to make a change here, so I should choose edit
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=31)** which makes the change there.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=34)** Now over here on the left side of the screen, I've got my account and I'm looking at the runs for the pipeline.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=42)** We'll see what happens when I click and commit.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=49)** After about 30 seconds, I see this new link.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=53)** It says load new run.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=55)** I click here, and I can see this spinning wheel, and that is running, so that has kicked off the pipeline.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=62)** And after about two minutes, I will have the update here, and then we'll refresh this homepage here to see if there's any new changes.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=73)** It's been two minutes, and now I will refresh the page.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=79)** And it verifies that we've deployed to the Azure app service.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=84)** And then I'll click over here.
>
> **[1:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=86)** Actually, I don't need that tab open anymore.
>
> **[1:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/update-the-repo-to-trigger-the-build?u=76281980&t=88)** Click over here, and I can see there's my successful run, and there's some details here that this was triggered by Terri adding something to the main branch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add a release pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=0)** - [Instructor] We've successfully created this pipeline and tested it.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=3)** It is combination of building the items for our application and also deploying to the Azure app services.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=10)** In many instances, you want to separate these.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=12)** You want to have a build pipeline and a release pipeline.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=14)** So let's see how you would do that.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=17)** Go to Pipelines.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=18)** We're going to add another pipeline.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=20)** The way you do that would be click here.
>
> **[0:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=27)** Then instead of choosing this item, this template, which builds package tests and deploys, I choose this one, build and test only.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=35)** So I've done that already.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=38)** It's identical, except it's missing the deploy piece.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=40)** That's called Simple Web App Build Only, and I've tested it and that is working.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=46)** Now I'll go over to Releases.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=48)** And here you would create a new release pipeline, and you need to set up two things, a stage and an artifact.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=55)** So for the stage, I want to do an Azure App Service Deployment.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=60)** So I click here and choose Apply.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=62)** I'll call this Production.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=67)** Then you have to set up an artifact.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=70)** So what we want to do is listen for the build to complete.
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=73)** So I choose Build, and then I will choose the name of the build from this list, like that.
>
> **[1:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=79)** And then I pick what I want to pull out of the build, I want the latest version or any of these other items.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=85)** Then I'd click on Add.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=87)** So when a build is released and successfully published, then I would go ahead and do this task.
>
> **[1:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=94)** Now I've already created one, so I will cancel out of this.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=102)** And you can see I've already done a Release and Release 2 going to production, and I can create a release at any time by doing this, manually creating it.
>
> **[1:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=114)** So now that's queued up.
>
> **[1:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=115)** It's going to pull the information out of the build.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=117)** Then when it's done, it will push that to Azure App Services.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-a-release-pipeline?u=76281980&t=122)** Of course, this will also work if we add new items to the source control, it'll trigger the build, which then in turn will trigger the release.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), application (1), web (1), [[Service Deployment]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Use custom variables in the pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=0)** - [Instructor] We've seen that there's a lot of options available for build and deploy pipelines.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=3)** The last thing I want to look at is how to customize it with your own custom data and how you can move that data between parts of the pipeline.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=10)** If you look at the footer on the bottom of this page, you see there's a version number.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=14)** So I have some version number code in the [ASP.NET](https://ASP.NET) site that picks this up.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=20)** This is not the standard number format that is used by a .NET core.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=24)** So what I've done is I modified the way the build number is created, and I did that by going over here to my pipelines.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=33)** Click my pipeline, click on edit, and I've defined two variables.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=39)** Now it comes with a set of predefined variables, like the BuildConfiguration is set to release.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=46)** System.debug is set to faults.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=49)** I added a major version and minor version.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=51)** You do that by clicking on the add button.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=53)** So a major version is set to two, minor version is set to one.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=57)** And then I use these variables over here in options under the build number format.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=64)** So I took the default numbering format for .NET and I made it my own.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=70)** So I added the major version and then the minor version, and then the rest of the data.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=75)** So now when it builds, it will generate this in the assembly.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=78)** This is the number that's inside the assembly.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-custom-variables-in-the-pipeline?u=76281980&t=80)** And then my code is just picking that up and printing it out to the bottom of this [ASP.NET](https://ASP.NET) page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[ASP.NET]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** net (4), asp (2)
> **URLs:** [asp.net](https://asp.net) (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 5. Extending DevOps

[↑ Back to Table of Contents](#table-of-contents)

#### Extensibility and integration overview
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=0)** - [Instructor] No matter how comprehensive a framework, there will always be some features that haven't made it into the shipped product.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=6)** Systems that provide extension points are valuable because third parties can enhance the ecosystem with their offerings.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=14)** Microsoft systems are known for their extensibility support.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=17)** Each of the systems shown here can be enhanced with additional features.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=21)** This open approach allows other companies and programmers to create tools that add extra functionality to the system.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=29)** All these Microsoft systems have a marketplace where you can find and install extensions.
>
> **[0:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=33)** The same applies to Azure DevOps.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=35)** Use a marketplace to find and install Microsoft and third-party extensions.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=39)** The marketplace offers thousands of extensions that can be installed to improve your DevOps workflow.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=45)** This is a convenient way to add new tool sets to your organization and projects.
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=50)** Development teams can purchase third-party tools, use the free extensions or create their own.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=56)** On the marketplace at [visualstudio.com](https://visualstudio.com), click on the Azure DevOps section and then see some of the more popular and featured extensions here.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=65)** Scroll down to the bottom of this page and you can see them categorized by type.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=70)** Azure Boards, Azure Pipelines, Azure Repos, Azure Test Plans and more.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=75)** And then of course, you can drill down and see all the extensions by clicking on See more.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=80)** Looks like the day I'm looking at this, there's 318 Azure Board extensions.
>
> **[1:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=85)** Another way to extend Azure DevOps is by integrating with your team chat and collaboration software.
>
> **[1:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=91)** Microsoft provides DevOps extensions for Slack and Microsoft Teams.
>
> **[1:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=96)** Additionally, there are extensions available for Discord, Google Chat, and other platforms.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=101)** They enable real-time notifications about build statuses, pull requests, and work item updates, facilitating seamless communication within your development team.
>
> **[1:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=110)** But Microsoft's Teams integration allows you to receive notifications and create work items directly from your chat.
>
> **[1:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=116)** For example, let's look at this demo team I have in Slack.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=121)** Check out the lower left sidebar.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=123)** You can see we've installed the Azure Boards, Azure Pipelines, and Azure Repos extensions.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=129)** More details about this will be covered in the next video.
>
> **[2:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=132)** Azure DevOps extensions can be categorized into several other types based on their functionality and use cases.
>
> **[2:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=138)** Here are some of the key categories.
>
> **[2:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=140)** Project management.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=141)** These tools enhance project management capabilities by providing advanced task tracking, sprint planning, and backlog management.
>
> **[2:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=149)** They can integrate with other project management software, allowing for a unified view of project progress and team workload.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=156)** Extensions in this category provide static code analysis, code quality checks, and linting tools.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=162)** They help maintain high-quality code by identifying potential issues early in the development process.
>
> **[2:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=169)** Examples include SonarQube for comprehensive code analysis and ESLint for JavaScript linting.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=175)** Custom widgets for dashboards provide visualizations and metrics and reports that help teams monitor the health and progress of their projects.
>
> **[3:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=182)** These widgets can display information like build statuses, work item trends and code coverage metrics.
>
> **[3:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=189)** Extensions offering insights and analytics help teams understand various aspects of the development process, such as build performance, test results, and code coverage.
>
> **[3:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=199)** Azure DevOps analytics provides powerful reporting capabilities and customizable dashboard to track key performance indicators.
>
> **[3:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=208)** Tools in the API and connectors category provide connectivity to other platforms and services, such as cloud providers or third-party applications.
>
> **[3:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=216)** For example, the Azure DevOps REST API allows you to programmatically interact with Azure DevOps services, enabling custom integrations and automations.
>
> **[3:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=226)** Extensions that can scan for security vulnerabilities in code and dependencies help ensure that applications are secure.
>
> **[3:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=232)** Tools like a WhiteSource Bolt and Snyk can identify vulnerabilities in open source libraries and dependencies.
>
> **[3:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=239)** The compliance extensions help ensure compliance with industry standards and regulations by providing features like audit trails, policy enforcement, and reporting.
>
> **[4:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=248)** The tools in this category help you integrate with popular integrated development environments like Visual Studio and code editors like Visual Studio Code.
>
> **[4:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=256)** They provide features like source control integration, work item tracking, and build management directly within the editor.
>
> **[4:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=263)** This is the code review and pull request category.
>
> **[4:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=265)** These extensions enhance the code review process and manage pull request more effectively.
>
> **[4:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=270)** They provide features like inline commenting, automatic code review checks, and merge conflict detection.
>
> **[4:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=277)** The Azure Repos extension, for example, offers a rich set of tools for managing pull requests and conducting code reviews.
>
> **[4:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=282)** Now, let's look at service hooks.
>
> **[4:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=284)** They help view integrate with external services, enabling automated workflows and notifications.
>
> **[4:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=290)** Service hooks can trigger actions in other services, such as sending a message to a Slack channel when a build completes or creating a new issue in GitHub when a work item is updated.
>
> **[5:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=300)** You could, for example, automatically create a card in Trello when a work item is created, or send a push notification to your team's mobile devices if a build fails.
>
> **[5:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=308)** Service are based on the publisher/subscriber design pattern.
>
> **[5:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=312)** In this classic pattern, publishers define a set of events such as Build Started or Build Complete.
>
> **[5:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=318)** You can create subscriptions for those events in the subscriber applications.
>
> **[5:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=322)** In this example, we have Microsoft Office UserVoice and Azure Storage acting as subscribers.
>
> **[5:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=327)** Each subscriber defines the action to take when the event is triggered.
>
> **[5:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=331)** For instance, you could add a row to an Excel table or update a feature request on UserVoice.
>
> **[5:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=336)** If none of the published extensions in the marketplace meet your needs, you can create your own.
>
> **[5:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=341)** However, this is beyond the scope of this course.
>
> **[5:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/extensibility-and-integration-overview?u=76281980&t=344)** For the rest of this chapter, we'll explore how to integrate with Slack and how to install some marketplace extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (16), [[DevOps]] (8), [[Microsoft]] (5), management (5), teams (4)
> **Analogies:** for example (4), such as (4), for instance (1)
> **Tools:** slack (4), visual studio (2), discord (1), github (1)
> **Env Vars:** api (2), rest (1)
> **Prerequisites:** install (3)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), scroll down (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)

#### Add Azure DevOps apps to Slack
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=0)** - [Instructor] To add an app to a workspace, open your workspace in Slack, then go to the bottom of the left sidebar and choose Add Apps, and then search for your app here.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=11)** I'll look for Azure.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=13)** You'll see a list of apps that start with Azure.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=15)** It's a similar experience in Microsoft Teams.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=18)** Now, in this case, I've already installed three of these apps, so these top three items are from DevOps, and you can see, I can tell they're installed because I can see 'em over here in the left sidebar, but also they don't have the Add button.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=29)** For the apps that I haven't added yet, I would click on the Add button.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=32)** That will take me to a screen that asks me to approve the process.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=35)** In some cases, it'll ask me which channel to synchronize with.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=38)** When I added Azure Boards app, I said to synchronize with the Board messages channel.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=44)** And then for the Azure pipelines, I synchronized to pipeline messages, and you guessed it, Azure repos goes to repo messages.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=54)** That's the basics of adding the application.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/add-azure-devops-apps-to-slack?u=76281980&t=56)** The next step is to configure it to work with your Azure DevOps projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[DevOps]] (2), [[Slack]] (1), [[Search]] (1), [[Microsoft Teams]] (1)
> **UI Navigation:** go to (1), click on (1)
> **Tools:** slack (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configure Slack channel to work with DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=0)** - [Instructor] Now I have the application installed, I want to start configuring it to work with my DevOps project.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=5)** You can see that there's some items listed here.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=8)** Use /azrepos signin to sign in my account.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=12)** So let's do that.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=13)** Press that, press enter.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=17)** And it tells me I'm already signed into Azure Repos with my instructor account.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=21)** So that looks good.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=22)** So now what can I do?
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=23)** I'll open help by pressing the slash key, then type azrepos.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=29)** I can click on this to get an idea of what I can do.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=31)** This says I need to subscribe to a repository URL.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=37)** So I switch over to the DevOps portal, open my repo, grab this URL, and click here.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=48)** Slack enters the beginning part of the command azrepos.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=52)** And then I'll say subscribe.
>
> **[0:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=55)** Paste in my URL.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=61)** Now I see in Slack this message that I've been added to a subscription for a pull request and for a notification.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=68)** And that'll be for my repository simple repo.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/configure-slack-channel-to-work-with-devops?u=76281980&t=72)** That means if a pull request is created, I should see a notification pop in this channel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (2), [[Slack]] (2), application (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** url (3)
> **Tools:** slack (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Examine configuration messages
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=0)** - [Instructor] Let's take a look at some of the messages we can get from DevOps.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=3)** I'll go to board-messages.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=5)** Scroll up this list.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=7)** And you can see some of the commands I've issued.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=8)** So I started with Azure Boards.
>
> **[0:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=10)** I signed in.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=13)** I linked to one of my projects.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=15)** So I have linked to the HealthClinic project.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=18)** And then I started adding some subscriptions, what I want to listen for.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=21)** So I added a subscription for Work item created.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=26)** "Work item created of type: Any."
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=28)** And I added a second subscription for Work item updated for any type.
>
> **[0:32](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=32)** Add a new subscription, click on the add subscription button, and then fill out the subscription information.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=37)** Here's my area path.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=38)** Here's the event.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=39)** Let's say work item deleted.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=43)** Then, I can choose my filter.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=45)** Let's say I'm only interested in bugs being deleted.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=49)** Click on Save.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=52)** It gets updated.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=54)** Then, you can see that I'm starting to get some information.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=57)** There was a "Walt Ritscher updated a Product Backlog Item."
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=61)** Are details here showing that I assigned it to Tadd.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/examine-configuration-messages?u=76281980&t=65)** So let's take a look at how that works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (1), [[Microsoft Azure|Azure]] (1), product (1)
> **UI Navigation:** click on (2), go to (1), scroll up (1)
> **Speakers:** - [instructor] (1)

#### Watch integration message flow into Slack
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=0)** - [Instructor] This video, I'll make some changes in the Azure DevOps Boards, and we'll see the results showing up, the notifications showing up in Slack.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=6)** I have Azure DevOps portal open and I've opened the Azure Boards view.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=12)** I'll make some changes to this card.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=14)** On the left side of the screen is my Slack channel.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=16)** I'm in the board messages channel.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=19)** I should see some information pop up on the bottom of this channel when I make the changes.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=23)** So, I'll click here to open.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=26)** I'll assign this from Terry to Tadd, and I'll change the priority level to 2, and also change the amount of effort to 5, and then Save & Close.
>
> **[0:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=41)** After a few seconds, I see it pop up on the bottom of the channel.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=44)** Priorities 2 has been assigned to Tadd.
>
> **[0:48](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/watch-integration-message-flow-into-slack?u=76281980&t=48)** And also, you notice there's a hyperlink here, so I can click on this, and that'll take me over to Azure DevOps, to the web portal, to that work item.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[DevOps]] (3), [[Slack]] (2), web (1)
> **CLI Commands:** make (3)
> **Tools:** slack (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### What extensions can contribute
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=0)** - [Instructor] In this video, I will showcase some of the places where extensions from the marketplace can contribute new functionality.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=7)** Later in this chapter, we'll explore two free extensions from the marketplace.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=11)** One interesting aspect of extensions is that they can alter the user interface here in the DevOps portal.
>
> **[0:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=17)** They can add tabs, pages, sections, and context menus.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=20)** These are called contribution points in the DevOps documentation.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=24)** Let's talk about where it can extend.
>
> **[0:25](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=25)** These are called top-level pages, boards, repos, pipelines.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=29)** So, it can add its own top-level page.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=31)** And then within a page, these are the subpages, so it can add items to the subpages.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=40)** This is called a context menu, these three dots.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=43)** So, I click on that.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=44)** It shows the context for this item.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=46)** It can add items to the context menu.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=52)** It can also add pages here like this details page or this graph page, or any of the items, just so I can add items here.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=60)** And then these are called groups, these vertical sections here.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=63)** So, it can add its own groups.
>
> **[1:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=64)** And then within a group, it can add its own fields.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/what-extensions-can-contribute?u=76281980&t=67)** So, it can totally customize the way it fits into the DevOps portal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (3)
> **Cross-References:** later in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Use the marketplace to install free extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=0)** - Let's see how to install an extension.
>
> **[0:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=2)** First step is to go to this section on the DevOps portal.
>
> **[0:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=6)** Click here and choose Browse Marketplace.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=9)** We'll install two free extensions.
>
> **[0:11](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=11)** The first one we're looking for is called Code Search.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=15)** This is a free extension from Microsoft.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=21)** This is the one we're looking for.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=23)** I'll select this extension.
>
> **[0:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=24)** It's useful as it allows us to search through our repository code with the Azure search engine.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=31)** Click here to get it free.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=35)** Then I choose my organization from this dropdown, and then choose install.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=43)** Go back to the Marketplace.
>
> **[0:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=46)** Next, I'm looking for another free extension called Personas.
>
> **[0:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=52)** This is the one.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=54)** Go through the same steps.
>
> **[1:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=61)** Now that they're installed, I can go look back to my organization.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-marketplace-to-install-free-extensions?u=76281980&t=65)** In the next demo, we'll look at how to use the Code Search extension.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), next (2), [[DevOps]] (1), [[Microsoft]] (1), [[Microsoft Azure|Azure]] (1)
> **Prerequisites:** install (3)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - let (1)

#### Use the code search extension
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=0)** - [Instructor] We've installed the code search extension in a project, and remember, it's project specific.
>
> **[0:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=5)** So if I go to this other project, this Dev Course 471 course, and I look in the search box, I see that I'm searching through filters for work items.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=14)** If I look at the 211 project and go to that same place, I see a different set of information.
>
> **[0:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=20)** So this is showing that not only can I search through my work items, but I can also search through my code.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=26)** So if I look for a word like print, in my results, I get 37 code results, and I can see there's 37 code results and there's five work item results.
>
> **[0:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=38)** Without the code search extension, I would only see the work items.
>
> **[0:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=44)** I can also filter by extension or by file name or path or projects, I'll filter by two, I'll choose an extension, we'll look for the word welcome.
>
> **[0:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=57)** I know for sure it's in this index.cshtml file because we worked on that in this course.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=63)** Now I want to look for files with the JavaScript extension, so I'll say ext: JavaScript or js, do a search.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=75)** Now it's returning matches for just our JavaScript files.
>
> **[1:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=78)** I can also search, let's just look for one repo.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=87)** This search shows a single file, the index.cshtml file that is in the simple repo.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=93)** In the previous results, those JavaScript files were in another repository.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=98)** The takeaway for us, the code search extension gives us more options for searching.
>
> **[1:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-code-search-extension?u=76281980&t=102)** Remember, this is installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (9), [[JavaScript]] (4), [[Microsoft Word|Word]] (2)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Use the persona extension
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=0)** - [Instructor] A persona is a fictional character that represents a subset of our users.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=4)** A persona typically has a name, a picture, and a list of relevant characteristics.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=8)** They encourage us to embrace a user-centered approach, so they're typically added in user stories or features or requirements.
>
> **[0:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=16)** So for my example, I will go and add them to Feature, so I've open Work Items.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=21)** I've filtered the features, I'll choose this Patient Register.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=26)** And at the bottom of this list, here's something that was added by the extension, this Personas affected.
>
> **[0:31](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=31)** I currently don't have any personas, so I'll create one.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=34)** That takes me to a new page that was added by the extension.
>
> **[0:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=37)** Click on Create Persona.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=39)** This is one of our nurses, her name is Shanice.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=42)** I'll write out some details about what she needs here in the description, and then I'm going to add this to All teams in this project, that looks good.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=51)** Oh, and I need to add a picture, so Select avatar.
>
> **[0:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=56)** This looks good.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=59)** Click OK.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=60)** I've got her picture, her name, her description.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=63)** I'll click on Create.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=65)** So now, let's go back over here to the Patient Register.
>
> **[1:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=67)** I'll refresh the page.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=70)** What persona is affected by this?
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=72)** I'll choose the persona, click on OK.
>
> **[1:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=76)** And now, save this work item.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=80)** We'll go back to Work Items and reopen this Patient Register.
>
> **[1:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=90)** And now, we can see that personas affected is Shanice.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/use-the-persona-extension?u=76281980&t=93)** So this is one of the examples of how you can extend the feature set of Azure DevOps with extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (2), teams (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **UI Navigation:** click on (3)
> **Analogies:** picture (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Additional Topics

[↑ Back to Table of Contents](#table-of-contents)

#### Streamline dependencies with Azure Artifacts
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=0)** - [Instructor] In modern software development, efficient management of dependencies and package sharing is crucial for maintaining smooth and effective workflows.
>
> **[0:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=8)** The complexity increases significantly as software projects grow in size and age.
>
> **[0:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=13)** Imagine this scenario.
>
> **[0:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=15)** A company is developing a large-scale application using a microservices architecture.
>
> **[0:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=21)** Each microservice is developed, tested, and deployed independently by different teams using various programming languages and package managers.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=29)** Those package managers could be NPM for JavaScript, NuGet for dotnet, and pip for Python.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=35)** This distributed development approach, while powerful, introduces several challenges.
>
> **[0:40](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=40)** One is dependency management.
>
> **[0:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=42)** We need to ensure that all microservices consistently use the correct versions of shared libraries and dependencies.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=49)** What about version control?
>
> **[0:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=50)** We need to track different package versions and maintain backwards compatibility.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=54)** We need to maintain security and ensure that only authorized personnel can publish or consume packages.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=60)** Then there's coordination across package managers.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=63)** Different teams often use various programming languages, and package managers have different versions from other teams in the same company.
>
> **[1:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=70)** Plus, what about private packages?
>
> **[1:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=73)** The ones written for the company and not intended for outside consumption?
>
> **[1:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=77)** That brings us to Azure Artifacts.
>
> **[1:20](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=80)** It is a universal package management tool designed to address these challenges.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=84)** It provides a centralized repository for storing all packages.
>
> **[1:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=89)** This ensures consistent access to dependencies across all teams.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=93)** By setting up your packages once in Azure Artifacts, all teams can use it as the central source for managing and utilizing packages.
>
> **[1:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=101)** Let's talk about some key features of Azure Artifacts.
>
> **[1:44](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=104)** First, it's a Universal Package Repository supporting a wide range of package types.
>
> **[1:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=109)** This flexibility allows teams to manage all their dependencies in one place regardless of the programming languages or technologies they use.
>
> **[1:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=118)** One of the standout features is its seamless integration with Azure DevOps, you can easily integrate package management into your continuous integration and continuous deployment pipelines, ensuring that your applications always have access to the latest and correct dependencies.
>
> **[2:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=133)** Security is a top priority when it comes to managing those packages.
>
> **[2:17](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=137)** Azure Artifacts provides robust access control mechanisms, which allows you to define who can publish, who can consume, and who manages the packages.
>
> **[2:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=147)** You can also enforce policies to ensure that only approved packages are used in your projects, thereby enhancing the security and reliability of your applications.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=156)** Managing dependencies and versions can be a complex task, especially in large projects with multiple teams.
>
> **[2:42](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=162)** Azure Artifacts simplifies this process by providing built-in versioning support.
>
> **[2:47](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=167)** You can easily manage different versions of your packages.
>
> **[2:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=170)** Additionally, Azure Artifacts helps you track and resolve dependency conflicts, making it easier to maintain a stable and consistent build environment.
>
> **[2:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=178)** To get started with Azure, you create a feed.
>
> **[3:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=181)** You can create multiple feeds to organize your packages based on different projects or teams.
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=186)** Creating a feed is simple.
>
> **[3:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=188)** It can be done through the Azure DevOps portal.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=190)** Once you have a feed, you can start publishing packages.
>
> **[3:13](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=193)** As I mentioned, Azure Artifact supports various package types, and you can use familiar tools like NuGet, NPM, or Maven to publish your packages.
>
> **[3:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=202)** The process is straightforward and well documented, making it easy for developers to get up and running quickly.
>
> **[3:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=209)** Consuming packages from Azure Artifacts is just as easy as publishing them.
>
> **[3:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=213)** You can configure your projects to use packages from your feeds, and Azure Artifacts provides detailed instructions for different package types.
>
> **[3:41](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=221)** With the integration into your CI/CD pipelines, you can automate the process of restoring and updating packages ensuring that your builds always have access to the latest dependencies.
>
> **[3:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=230)** Azure Artifacts is powerful.
>
> **[3:52](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=232)** It helps simplify the process of managing dependencies ensuring packages.
>
> **[3:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/streamline-dependencies-with-azure-artifacts?u=76281980&t=236)** Whether you're working on a small project or a large enterprise application, Azure Artifacts provides the tools you need to streamline your dependency management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (14), teams (8), [[Programming]] (3), [[Security]] (3), application (2)
> **CLI Commands:** npm (2), dotnet (1), pip (1), python (1), cd (1)
> **Env Vars:** npm (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Enhance testing efficiency with Azure Test Plans
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=0)** - [Presenter] In the rapidly evolving landscape of software development, maintaining high standards of quality is paramount.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=7)** Azure Test Plans, a comprehensive testing solution integrated within Azure DevOps, offers a robust framework to ensure that applications are reliable, functional, and user-friendly.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=18)** Let's talk about the two separate testing segments in Azure DevOps.
>
> **[0:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=22)** We talked about Azure Pipelines testing earlier in the course.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=26)** This is a crucial part of the build and release process.
>
> **[0:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=29)** It supports a range of tests including unit, integration, regression, and UI tests.
>
> **[0:34](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=34)** Azure Test Plans, on the other hand, provide a comprehensive suite of testing tools within the Azure DevOps ecosystem designed to support all types of testing needs, including manual testing, exploratory testing, and automated testing.
>
> **[0:49](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=49)** Azure Test Plans is tailored for managing and executing tests to ensure software quality, while Azure Pipelines provides a framework for automating the entire software release process from code commit to production deployment.
>
> **[1:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=63)** Both are integral to Azure DevOps contributing to a streamlined and efficient software development lifecycle.
>
> **[1:08](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=68)** Azure Test Plans is a browser-based test management solution.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=72)** It allows you to plan, execute, and track scripted tests.
>
> **[1:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=75)** You can organize test into test plans and test suites, assign them to testers, and monitor the test and the tester's progress.
>
> **[1:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=84)** This structured approach ensures that all aspects of your application are thoroughly tested.
>
> **[1:29](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=89)** Exploratory testing helps uncover defects and improve application quality.
>
> **[1:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=95)** Exploratory testing is an approach to software testing where the testers actively explore the application without predefined test cases.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=103)** Instead of following a strict script, testers use their creativity, intuition, and knowledge of the application to identify defects.
>
> **[1:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=111)** Using the Azure Test Plans test and feedback extension, you can conduct efficient testing sessions, document findings in real time, and resolve issues within Azure DevOps.
>
> **[2:01](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=121)** Gathering feedback from stakeholders is crucial for delivering a product that meets user expectations.
>
> **[2:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=127)** Azure Test Plans includes tools for collecting feedback from users outside the development team, such as marketing or sales.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=135)** As I mentioned earlier, the test and feedback extension allows stakeholders to provide feedback directly on the application.
>
> **[2:21](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=141)** This extension is designed to be user-friendly, enabling non-technical users to contribute valuable insights.
>
> **[2:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=148)** Traceability in Azure Test Plans is a powerful feature that ensures all aspects of your development process are linked and tracked.
>
> **[2:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=156)** It allows you to connect various artifacts within your development lifecycle, such as requirements, test cases, code changes, builds and releases.
>
> **[2:46](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=166)** This linkage enables you to track the progress and quality of your project from start to finish, ensuring that all requirements are tested and all defects are addressed.
>
> **[2:56](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=176)** Azure Test Plans is not included in the free tier of Azure DevOps.
>
> **[3:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=180)** To access its full features, you need to upgrade to the basic plus Test Plans access level.
>
> **[3:06](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=186)** Azure Test Plans is a powerful tool for managing and executing tests in your software development lifecycle.
>
> **[3:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/enhance-testing-efficiency-with-azure-test-plans?u=76281980&t=192)** Whether you are conducting manual, exploratory, or automated testing, it has the tools you need to ensure quality in your applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (17), [[DevOps]] (6), application (5), [[Software Development]] (3), functional (1)
> **Definitions:** is a  (4), is an  (1)
> **Cross-References:** we talked about (1), earlier in (1)
> **Analogies:** such as (2)
> **Speakers:** - [presenter] (1)

#### GitHub actions versus Azure Devops
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=0)** - [Instructor] We've spent the entire course exploring the features of Azure DevOps.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=4)** Given that Microsoft also owns GitHub, you might be curious about what GitHub has to offer in the realm of DevOps.
>
> **[0:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=12)** Both are powerful platforms designed to support the software development lifecycle, but they cater to slightly different needs and audiences.
>
> **[0:19](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=19)** GitHub actions enables CI CD automation, allowing you to build, test, and deploy your code directly from GitHub.
>
> **[0:26](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=26)** This is comparable to Azure pipelines.
>
> **[0:28](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=28)** GitHub projects offers project management features to organize and track your work with Kanban Boards and task list.
>
> **[0:35](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=35)** And Azure DevOps, this would be the Azure boards feature.
>
> **[0:39](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=39)** GitHub packages allows for easy hosting and managing of project dependencies.
>
> **[0:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=43)** In Azure, this would be Azure Artifacts.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=45)** GitHub issues facilitates tracking bugs, tracking enhancements, and tracking tasks with a robust issue tracking system.
>
> **[0:53](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=53)** Azure Boards offers an equivalent feature for project management and issue tracking.
>
> **[0:58](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=58)** GitHub Codespaces provides a cloud-based development environment, ensuring consistency and flexibility in your workflow.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=65)** Microsoft previously offered Visual Studio Codespaces a similar service, which has since been integrated into GitHub Codespaces.
>
> **[1:12](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=72)** GitHub's security tools help you identify and fix vulnerabilities in your code, Azure DevOps offers GitHub advanced security for Azure DevOps, which provides a suite of security features similar to those found in GitHub Security.
>
> **[1:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=87)** GitHub discussions fosters community engagement and collaboration through threaded conversations.
>
> **[1:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=93)** Azure Boards includes discussion capabilities similar to GitHub discussions.
>
> **[1:38](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=98)** Lastly, GitHub repo serves as the core of your project in GitHub.
>
> **[1:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=103)** This has become the go-to for version control and collaboration due to its seamless integration with other development tools, extensive community support, and powerful features like pull requests, branch management, and code review capabilities.
>
> **[1:57](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=117)** This is akin to Azure Repos.
>
> **[1:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=119)** Let's look at some of the GitHub services in more detail.
>
> **[2:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=122)** I'll start with GitHub actions.
>
> **[2:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=123)** It has features like workflows for automating tasks like building, testing, and deploying code.
>
> **[2:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=129)** It has actions, of course, which are the reusable units of code that performs specific tasks within the workflow.
>
> **[2:15](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=135)** There's the secrets part.
>
> **[2:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=136)** GitHub Actions has ability to manage your secrets for storing sensitive information like API keys and passwords.
>
> **[2:24](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=144)** There's a marketplace, which is a repository of prebuilt actions created by the community and GitHub, and then there's something called Matrix Builds in GitHub Actions, which lets us run jobs in parallel with different configurations.
>
> **[2:37](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=157)** In GitHub projects, there's project management through Kanban style boards, there's integration with issues.
>
> **[2:43](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=163)** You can link a GitHub issue to the project board for seamless task tracking, and of course, there's automation.
>
> **[2:50](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=170)** You can automate issue movements across columns in the boards based on triggers.
>
> **[2:55](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=175)** GitHub packages, this is for package management, you can host and manage packages for various languages, including MPM, maven, NuGet, and Docker.
>
> **[3:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=184)** It of course, integrates with GitHub repositories for easy publishing and consumption of packages.
>
> **[3:10](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=190)** Then, there is security and access control, manage permissions, and use GitHub's security features to control access.
>
> **[3:16](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=196)** One of my favorite features in GitHub, there's so many, but I like this one a lot, is GitHub Codespaces.
>
> **[3:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=202)** It is a cloud-based development environment that can be set up instantly.
>
> **[3:27](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=207)** It can be customized with pre-configured environments, either from the community or from your company or your team.
>
> **[3:33](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=213)** These can be tailored specifically to your project needs, but that means when you start up the code base, it's set up the way you want, and it supports collaboration, shared development environments with team for collaborative coding.
>
> **[3:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=225)** GitHub issues, supports issue tracking that can be tracking bugs, tracking enhancements, or tracking tasks to be managed or completed.
>
> **[3:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=234)** It supports labels and milestones, these are ways of organizing and prioritizing issues.
>
> **[4:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=240)** Also has templates, use issued templates to standardize reporting.
>
> **[4:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=245)** GitHub offers a comprehensive suite of tools that cater to various aspects of the software development lifecycle, including continuous integration and continuous deployment, project management, package management, development environments, issue tracking, community engagement, security and analytics.
>
> **[4:22](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/github-actions-versus-azure-devops?u=76281980&t=262)** These tools are designed to integrate seamlessly with GitHub repositories, providing a cohesive and efficient workflow or developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (31), [[Microsoft Azure|Azure]] (11), [[Security]] (7), [[DevOps]] (5), management (5)
> **Tools:** github (31), visual studio (1)
> **CLI Commands:** cd (1), docker (1)
> **Env Vars:** api (1), mpm (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)
> **Prerequisites:** set up (2)
> **Exercise Files:** github repo (1)


### 7. Continue Your Journey

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=0)** - [Walt] Congratulations, you've reached the end of the course.
>
> **[0:03](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=3)** It's been a journey.
>
> **[0:04](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=4)** We explored a range of Azure DevOps services.
>
> **[0:07](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=7)** Perhaps you are wondering what to do next.
>
> **[0:09](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=9)** In this course, we focused specifically on Microsoft's Azure DevOps.
>
> **[0:14](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=14)** While we covered many topics, it's important to be realistic.
>
> **[0:18](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=18)** It's not possible for us to look at every aspect of Azure DevOps in just a few hours.
>
> **[0:23](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=23)** My goal was to identify the core elements of Azure DevOps and provide a broad overview of what Microsoft offers.
>
> **[0:30](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=30)** When it's time to dive deeper into DevOps, consider exploring additional courses available on LinkedIn Learning.
>
> **[0:36](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=36)** These courses cover various aspects of DevOps, from advanced automation techniques, to in-depth practices for continuous integration and deployment.
>
> **[0:45](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=45)** In addition to the general DevOps principles, there is a wealth of Azure DevOps-specific content available.
>
> **[0:51](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=51)** After completing this course, you'll find even more to explore.
>
> **[0:54](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=54)** Each of these topics is fascinating, and worthy of a deeper look.
>
> **[0:59](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=59)** I'm Walt Ritscher.
>
> **[1:00](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=60)** Thanks for watching this course.
>
> **[1:02](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=62)** I have many other courses available that you might like.
>
> **[1:05](https://www.linkedin.com/learning/azure-devops-for-beginners-23145679/next-steps?u=76281980&t=65)** I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (7), [[Microsoft Azure|Azure]] (4), next (2), [[Microsoft]] (2), [[Azure DevOps Services]] (1)
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