---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: bitbucket-pipelines-for-ci-cd
url: "https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd"
duration_minutes: 88
duration: 1h 28m
level: Intermediate
updated: 6/14/2024
learners: 6574
skills:
  - Bitbucket
  - Continuous Integration and Continuous Delivery (CI/CD)
exercise_files: true
github: "https://github.com/LinkedInLearning/bitbucket-for-ci-cd-3806095"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEGSbU6WPTNPA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008984232?e=2147483647&amp;v=beta&amp;t=vjos-qKDnw-IDpu_CahtK0LMVrZuKNMpUWv0TK3IOiA"
linkedin_topic: DevOps
learning_paths:
  - '[Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)'
prev_courses:
  - '[Learning Bitbucket](Learning%20Bitbucket.md)'
next_courses:
  - '[Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations](Advanced%20Bitbucket%20Pipelines-%20Automating%20Deployments%20and%20Managing%20Third-Party%20Integrations.md)'
path_nav: '[{"path":"Master Bitbucket","position":2,"total":3,"prev":"Learning Bitbucket","next":"Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/bitbucket
  - skill/continuous-integration-and-continuous-delivery-ci-cd
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Bitbucket%20Pipelines%20for%20CI-CD.md)

![Bitbucket Pipelines for CI/CD](https://media.licdn.com/dms/image/v2/D560DAQEGSbU6WPTNPA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008984232?e=2147483647&amp;v=beta&amp;t=vjos-qKDnw-IDpu_CahtK0LMVrZuKNMpUWv0TK3IOiA)

# Bitbucket Pipelines for CI/CD

> To get the most out of this course, you should have an understanding of Git, Atlassian accounts, and Bitbucket basics. In this course, lead software engineer Michael Jenkins guides you through how to use Bitbucket Pipelines for your software projects. Gain a solid understanding of continuous integration, continuous delivery, and continuous deployment (CI/CD) to prepare for the role of Bitbucket Pi

> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd) | 1h 28m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [From commit to deployment with Bitbucket Pipelines](#from-commit-to-deployment-with-bitbucket-pipelines)
  - [What you should know](#what-you-should-know)
  - [Overview of CI/CD](#overview-of-cicd)
  - [Understanding pipeline limits](#understanding-pipeline-limits)
- [**1. Getting Started with Bitbucket Pipelines**](#1-getting-started-with-bitbucket-pipelines) (7 videos)
  - [Create a pipeline](#create-a-pipeline)
  - [Bitbucket Pipelines configuration](#bitbucket-pipelines-configuration)
  - [Configure pipeline stages](#configure-pipeline-stages)
  - [Configure pipeline triggers](#configure-pipeline-triggers)
  - [Use YAML anchors](#use-yaml-anchors)
  - [Challenge: Create a pipeline](#challenge-create-a-pipeline)
  - [Solution: Create a pipeline](#solution-create-a-pipeline)
- [**2. Working with Variables and Artifacts**](#2-working-with-variables-and-artifacts) (6 videos)
  - [Variables and secrets](#variables-and-secrets)
  - [Use environment and deployment variables](#use-environment-and-deployment-variables)
  - [Create and share artifacts](#create-and-share-artifacts)
  - [Create and download packages](#create-and-download-packages)
  - [Challenge: Deploy an artifact](#challenge-deploy-an-artifact)
  - [Solution: Deploy an artifact](#solution-deploy-an-artifact)
- [**3. Configuring Build Environments**](#3-configuring-build-environments) (5 videos)
  - [Use default images and tools](#use-default-images-and-tools)
  - [Use public and custom images](#use-public-and-custom-images)
  - [Use services](#use-services)
  - [Challenge: Create a pipeline with images and services](#challenge-create-a-pipeline-with-images-and-services)
  - [Solution: Create a pipeline with images and services](#solution-create-a-pipeline-with-images-and-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [From commit to deployment with Bitbucket Pipelines](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=0)** - [Michael] In the fast-paced world of [Software Development](../../Topics/Software%20Development.md), efficiency and automation are essential. [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines is an automation tool that helps us integrate code, deliver artifacts, and deploy applications simply by pushing code to a GI repository. Over the years, I've come to appreciate using Bitbucket Pipelines for projects that need simple, effective CI/CD. Hi, I'm Michael [Jenkins](../../Skills/DevOps/Jenkins.md). Are you ready to enhance your software development workflow? Let's dive in and start learning how to use Bitbucket Pipelines for CI/CD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Software Development](../../Topics/Software%20Development.md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Tools:** bitbucket (3)
> **CLI Commands:** cd (2)
> **Definitions:** is an  (1)
> **Speakers:** - [michael] (1)

#### [What you should know](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=0)** - [Presenter] To get the most out of this course, there are a few things you should be familiar with. You should also know that this course has built-in features to help you out along the way. You should already be familiar with using [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), a cloud-based service for hosting [Git](../../Skills/Software%20Development/Git.md) repositories. You should already know how to create Bitbucket workspaces, projects, and repositories. If you need to get up to speed, I highly recommend completing my course Learning Bitbucket. Learning Bitbucket lays the foundation for the content in this course, and also includes steps for creating [Atlassian](../../Glossary/Service/Atlassian.md) and Bitbucket accounts. Bitbucket pipelines uses container images extensively. It will help if you have some exposure to a container management service like Docker. Also, pipeline configurations are written using a data serialization format called YAML. YAML is used by many popular tools, so you might already be familiar with it. Don't worry if you aren't. Much of the YAML code we'll be working with will be provided for you. If you're planning to follow along with the examples and course challenges, you'll need to set up a two-factor authentication account. Bitbucket requires that you have two-factor authentication in place before you start working with pipelines. This is for the security of your account and any pipelines that can build artifacts or deploy applications. If you need suggestions, take a look at tools from Authy, [Google](../../Glossary/Service/Google.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), or 1Password.
>
> **[1:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=96)** If you're planning to complete the deployment examples and challenges, you'll also need an account with [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). Browse to aws.[amazon.com/free](https://amazon.com/free) and follow the steps there to create an account using the AWS free tier. Exercise files are also available for your reference. You can find a link to the files on the homepage of the course. The files contain notes and additional information, examples for the material we'll be covering in the course, and maybe even some trivia and shenanigans. If you're looking for a reference to something in the course, you'll most likely find it in the exercise files. And honestly, if you don't use the exercise files, you'll be missing out on a large portion of this course's content. If you get stuck on something and you need a bit more help than you can find in the exercise files, please use the course, Q&A section. Ask your question there, and I'll do my best to help you out. If other folks have gotten stuck in the same place, they might join in the discussion and share their solution. Also, please check the Q&A section to provide answers. As a community, we'll use the Q&A to collaborate on a positive learning experience for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (7), [Git](../../Skills/Software%20Development/Git.md) (1), [Atlassian](../../Glossary/Service/Atlassian.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** find (3), aws (2), git (1), docker (1)
> **Tools:** bitbucket (7)
> **Env Vars:** yaml (3), aws (1)
> **Exercise Files:** exercise files (4)
> **Prerequisites:** you'll need (1), set up (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [presenter] (1)

#### [Overview of CI/CD](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=0)** - [Instructor] Let's take a moment to get familiar with the [Software Development](../../Topics/Software%20Development.md) process most commonly known as CI/CD. For the simplest definition, CI/CD is an acronym for three phases of software development, [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), and continuous deployment. With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis. Their code can then be combined, or in other words, integrated with code from other members of the team or any existing code. During the integration step, new code is tested and checked for errors or any other requirements. This can include linting the code for syntax errors and running unit tests on specific features. The goal of CI is to allow teams to identify and resolve problems quickly and early in the development process. CD or continuous delivery follows the integration step. After code has been integrated, the continuous delivery step automates the build process. This step can include additional testing at a higher level. These tests might be more rigorous than unit tests and exercise multiple features at the same time. By the end of this step, the software will be packaged and ready for release. The goal of continuous delivery is to always have a version of the software
>
> **[1:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=94)** that can be deployed into production as needed, which leads to the next CD, continuous deployment. At its most fundamental level, continuous deployment places software in a production environment without human interaction. In this case, the pipeline is fully automated with workflows using tests and validation to determine if the software is ready to be run in production. Using a well-defined continuous deployment pipeline, development teams can release software quickly and reliably, giving them more time to focus on feature development and other engineering tasks. Now that we have a better understanding of CI/CD, we can discuss how [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines helps us automate each step of the CI/CD process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (4), [Software Development](../../Topics/Software%20Development.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** cd (6)
> **Definitions:** known as (1), is an  (1), in other words (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)

#### [Understanding pipeline limits](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=1)** - [Instructor] The [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Free Tier comes with some pretty genuine allowances, but there are a few limitations you need to know about. Bitbucket provides unlimited public and private repositories for individuals and teams with less than five members. All users in your account will share one gigabyte of large file storage, also known as LFS. Large file storage is intended for binary files that are larger than the typical text files we use to store code. And last but not least, Bitbucket Pipelines provides 50 build minutes per month, which are also shared across all team members. These resources should be more than enough for exploring Bitbucket Pipelines. But as you add more projects or need more build minutes, you'll likely need to move to a paid plan. Take a look at the exercise files for more information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4)
> **Tools:** bitbucket (4)
> **Env Vars:** lfs (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Bitbucket Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a pipeline](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=0)** - [Instructor] Let's create our first pipeline. I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I've already created a workspace, project and repository. On the repository homepage, I'll select pipelines from the left side menu. This is a new account, so I'm prompted to enable 2FActor authentication. Having two-step verification, also known as 2FActor or 2FA, is required before we can start using pipelines. [Atlassian](../../Glossary/Service/Atlassian.md) has this feature in place to help keep our code repositories secure, so I'll follow the link for two-step verification. On this screen, I'll follow the instructions to set up my 2FA device. I already have a 2FA application installed, so I'll be able to scan the QR code and then enter the verification code later. If you need any additional information on this step, take a look at the exercise files. The last step in this process is to wait for an email from Atlassian and then click a link in the email. Clicking the link in the verification email takes me to my personal settings page where I can download recovery codes as a backup for my 2FA device. For now, I'll go back to the tab where I was creating the pipeline. And I'll refresh this page. And now I'm good to go. I'll select Create your First Pipeline. On the pipeline creation page,
>
> **[1:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=92)** we can choose templates for different types of [Software Projects](../../Skills/Software%20Development/Software%20Projects.md). This is helpful if we already have code, but since I'm starting with an empty repo, I'll select Starter Pipeline. This creates a configuration file with the starter pipeline template. From here, I'll just scroll to the bottom of the page and select Commit File. This commits the configuration to the repository and kicks off the pipeline. Okay, the pipeline is complete. Let's take a look at the results. From this view, we get a better visualization of the pipeline. Specifically, we can see the pipeline steps. There are five steps altogether, including build and test, lint, security scan, and two deployment steps. The production deployment step requires manual confirmation, so I'll select Deploy. And then on this screen, I'll select Deploy again to confirm. Okay, now the pipeline is really complete. Now that we have a pipeline in place, let's learn a little bit more about the configuration and the keywords we need to know to build or modify a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Atlassian](../../Glossary/Service/Atlassian.md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** is a  (1), known as (1)
> **Cross-References:** go back to (1)
> **Tools:** bitbucket (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Bitbucket Pipelines configuration](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=0)** - [Instructor] [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines are configured in a file at the root of the repository named bitbucket-pipelines.yml. For developers, having the configuration in the repo is a benefit. We can treat the pipeline as code and track changes to it with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the files in the repo. The configuration uses a YAML format, which allows for easy interpretation by both humans and computers. If you're not familiar with YAML, you can find references in the exercise files. At the minimum, a pipeline configuration includes the required keyword pipelines, a start condition referred to as a trigger, and a collection of steps that the pipeline will complete. The pipeline's keyword identifies the start of specific pipeline configurations. We can configure multiple pipelines in a single file, and this keyword helps to service find each configuration. We also have the option of specifying a docker image to use for the execution environment when pipelines are run. If an image is not called out, a default image is used for us. Triggers are used to start pipelines. Triggers are highly customizable, and we can use branch names, pull request events, and even manual triggers to specify which pipelines should be run. The default trigger will run the associated pipeline on every push to the repository. This is particularly useful for [Software Development](../../Topics/Software%20Development.md). For example, we can use the default trigger
>
> **[1:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=94)** to run integration pipelines on every push to the repo while using a specific branch name or other trigger configurations to start deployments manually. Steps are the actual units of execution within a pipeline. This is where the commands, scripts, or other specific actions are carried out. Each step is required to have a script section, which needs to have at least one discreet command. Multiple steps can be grouped together in stages to collect related functions into one place. To keep pipeline execution predictable, steps are run in the order that they're listed in the configuration. However, we can override this behavior with a parallel directive, which allows multiple steps to be run at the same time. One thing to keep in mind regarding steps, each pipeline configuration is limited to 100 steps. Let's continue exploring the pipeline configuration and the Bitbucket web interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **CLI Commands:** find (2), docker (1)
> **Tools:** bitbucket (3)
> **Env Vars:** yaml (2)
> **Prerequisites:** configure (1), required to (1)
> **File Paths:** bitbucket-pipelines.yml (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Configure pipeline stages](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=0)** - [Instructor] I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I'm viewing a previous run of the starter pipeline configuration. From this screen, I can see a visualization of the pipeline with the three integration steps running in parallel at the start of the pipeline, followed by two deployment steps. Right now, we only have one step per deployment, but if our deployments include multiple steps, we can group them together using stages. I've used the exercise files for this lesson to update the pipeline configuration. With this updated pipeline, the deployment steps have been moved into stages. Opening one of the stages shows all the steps that are grouped together here. Let's take a look at this configuration.
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=54)** The new configuration uses the stage keyword to group all the steps together for the staging and production deployments. In the production stage that we're currently viewing, the manual trigger has been moved from the step where it was previously located to the stage section. Now when this manual trigger is activated, all the steps in this section will be run sequentially.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Configure pipeline triggers](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=1)** - [Instructor] Let's look at some of the ways we can trigger [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines. The most common triggers are the default trigger, branches, and pull requests. The default trigger is probably the most common pipeline start condition. Often it's referred to as a commit trigger. When this keyword is present, any pipeline configuration associated with it will be run on every commit to the repository. The default trigger is useful for kicking off integration steps that need to be run frequently, like compiling software, linting code, or running security scans. The branches trigger is used to run pipeline steps when a specific branch is updated. The branch's keyword is followed by one or more branch names like main or develop. We can also use patterns and wild cards to match multiple branches. If any matching branch is updated, the pipeline steps for that branch will be run. If your workflow includes feature branches, for example, you can use the asterisk or star character to match the naming convention used for feature branches. Of course, this can also be applied to other branches like bugs, hot fixes, or releases. We can also trigger pipelines when a pull request is created. Just like branch triggers, pull request triggers can use branch names and patterns. Keep in mind though that for pull requests, the branch name pattern is applied to the branch representing the source of the pull request,
>
> **[1:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=94)** not the target branch. A special wild card pattern, two asterisks surrounded by single quotes, can be used to match all branches. Just make sure those quotes are there, otherwise your YAML won't be formatted properly. There are two other triggers that we can use to control our pipelines, after script and manual. These triggers are used to manage automation in steps and stages, after a pipeline has already been started by another event. An after script trigger is used in steps to run commands after all other script commands have completed. After script commands are run if the script completes successfully or fails. In this way, after scripts can be used to run commands that we always want to happen, like cleaning up build environments if a deployment fails or sending notifications every time a deployment completes. Manual triggers are defined at the step or stage level using the trigger keyword followed by the keyword manual. Any stage or step that uses a manual trigger will require a user to click a button in the Bitbucket web interface. Manual triggers are useful for adding more control to a pipeline. For example, we can use manual triggers to pause a pipeline, so an application update can be verified in a non-production environment. Once the verification is complete, the pipeline can be allowed to continue with a deployment to a production environment.
>
> **[3:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=188)** Keep in mind that manual triggers can't be used in the very first stage or step in a pipeline. Also, manual triggers can only be confirmed by someone with right access to the repository where the pipeline is running. I've downloaded the exercise files for this lesson, and I'm using my local editor to view the Bitbucket pipelines configuration. This configuration uses different pipelines based on new triggers. The default trigger is on line three. This pipeline will run for any commits that don't match a specific branch. This pipeline will only run integration steps. The branch triggers start on line 17 with a keyword branches. Line 18 has a branch pattern for feature branches, and line 44 has a pattern for the main branch. Commits from feature branches will run integration steps and also run a staging deployment. Commits to the main branch will run the same steps followed by a production deployment using a manual trigger. A pull request trigger starts on line 88. This pipeline will run whenever a pull request is created using any branch as the source of the PR. This pipeline includes integration steps, a stage for PR related tasks, and a staging deployment. I've added this configuration to a repo
>
> **[4:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=282)** and run pipelines using each of these triggers. Let's check that out in the Bitbucket web interface. I'm logged into my Bitbucket account and I've added the updated configuration. If you're following along, pause the video here and take a look at the exercise files. I've added all the steps you need to complete to update the configuration and run each pipeline. This is the pipeline run after the feature branch has been updated. We get the integration steps and the staging deployment. I created a pull request using the feature branch. In this pipeline, we get the integration steps and the staging deployment, but we also get a stage specifically for running pull request tasks. Once the PR is merged, a pipeline is triggered from the update to the main branch. This brings us back to the pipeline with integration tests, a staging deployment, and a production deployment. The staging and production stages now have after script triggers. In the event the deployment failed, we could put commands here to clean things up and send notifications. And last but definitely not least, here's the default pipeline. Now, if we commit to any branch that's not the main or a feature branch, we only get the integration steps. We can use this approach to make sure code is being kept to standard, while also saving a few billed minutes across across our account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5)
> **Tools:** bitbucket (5)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** yaml (1)
> **Speakers:** - [instructor] (1)

#### [Use YAML anchors](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=0)** - [Instructor] As you add more pipelines and triggers to a single file, you may start to see the same code being used in multiple places. This is an excellent opportunity to use the DRY approach to [Software Development](../../Topics/Software%20Development.md). In this case, DRY stands for Don't Repeat Yourself. To keep our pipeline configurations DRY, we can use YAML anchors to create reusable steps. YAML anchors are placed in the definitions block at the beginning of a pipeline configuration. A step block identifies the reusable steps we want to create, and then each step is created with an anchor, which is identified by the ampersand character. It also includes a name and a script. Other step attributes can be included as well. Using this approach, we can update code for a step in one place and immediately have the step updated across the pipeline configuration instead of making the same change in multiple places. Once our anchors are in place, we can refer to them in multiple locations using a step block and then an asterisk character followed by the anchor's alias. When the pipeline configuration is processed by [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), the reference to the alias will be replaced by the code and the anchor. In some cases, we'll need to override top level values in a YAML anchor like the name. There's a special YAML prefix we can use when we call the anchor's alias to start the override. The prefix is two less than signs followed by a colon.
>
> **[1:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=98)** Then we reference the anchor using its alias as usual. Following that reference, we can provide keys and values that override the same value in the step. Be sure to see the exercise files for more details on YAML anchors and overrides. I'm viewing the exercise files for this lesson, particularly the YAML file with our pipeline configuration. Line three starts the definitions block for our reusable pipeline steps. Inside the definitions block are anchors for steps that are used in multiple places across the pipeline. And if I scroll down a bit, we can see where these anchors are being referred to by their aliases. As you continue developing pipelines, you'll see how YAML anchors make pipelines easier to understand and easier to maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Env Vars:** yaml (7), dry (3)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** make (1)
> **Tools:** bitbucket (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create a pipeline](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=6)** - [Instructor] Did you like that theme music? That means it's time for a challenge to apply what you've learned. In this challenge, you're part of a [Software Development](../../Topics/Software%20Development.md) team working on an open source application, the amazing mobile app. The team is already using [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) for code repositories, and now they're ready to start using Bitbucket pipelines to automate their CI CD workflows. You've been assigned to create a pipeline configuration to help the team understand the capabilities of Bitbucket pipelines. The configuration needs to include steps for [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and continuous deployments to multiple environments. The code also needs to be easy to maintain and visualize. Here are the steps you need to take to complete this challenge. Log into Bitbucket and create a new public repository. Create a pipeline configuration in the repo using the starter template. Update the code to minimize code duplication wherever you can. Then update the template using the following requirements. Add pipeline start conditions for any commits to the main branch and all feature branches. For the main branch, include build and integration steps that run at the same time. Then, add pipeline sections that collect all steps for deployments to staging and production environments. Since the team wants their production deployments to be continuous, remove any settings that will require someone to take action for a deployment.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=102)** For any feature branch updates, run build and integration steps at the same time, followed by a deployment to the staging environment. Remove deployments from any other pipeline triggers. These events should only run build and integration steps. You'll find all the details for this challenge in the exercise files. This challenge should take about 15 minutes to complete. Give it a try and then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Software Development](../../Topics/Software%20Development.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **Tools:** bitbucket (4)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** cd (1), find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Create a pipeline](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=6)** - [Instructor] Let's jump right in and solve this challenge. I created a new repo and use the starter template to create a basic pipeline configuration. I cloned the repo to my local system, so I'll go there now to edit the file. I'm on my local system now and I'm editing the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md)-pipelines.yaml file. The first thing I know I need to do is add triggers for branches. I'll scroll down to the end of this file and then add the branches keyword. The branches I want to target are any feature branches and the main branches, so I'll add the feature branch first and I need to add a wild card here to catch any feature branch that starts with this specific prefix, and then I'll add a placeholder for the main branches. For these branches, we need to have build and integration steps that run at the same time which means they use the parallel directive. I know that the default trigger in this particular pipeline already has a parallel setting in here, so I'm just going to copy this down to the branches that I just added.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=102)** And I'll clean this up a little bit so it's indented properly.
>
> **[1:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=119)** For the main branch, we need to group together all the stages that are associated with a deployment and the best way to do that is with stages. So under main, I'll also add some stages and let's see where they need to go. They need to be even with the parallel directive, so I will start here and add the stage keyword, and then we need to give our stage a name and we're also going to give it some steps. And I'm just going to make a little template here because I know I'm going to be doing this for production and for staging, so I'm just going to copy that right up under here. And then for this stage, I will call this one staging and for this one, I will call it production.
>
> **[3:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=183)** Now I'll start working on removing some of the code that would be duplicated in this pipeline. If each of these branches is going to do build and integration, then those steps are the first targets for using YAML anchors. And I think staging will also be used multiple times as well, so once for the feature branches and again, for the main branch. So I'll make a YAML anchor for that one as well. I'll start by going to the top of this file and adding my definitions placeholder, and we are defining steps in this particular case. And now I'll copy all the steps that are currently under the parallel step in the default pipeline because these are the ones that we're going to reuse, so let me make sure I get these selected. And I will copy these here and then I think they're going to be, I might need to indent them over one step, probably like that. And now I need to create an anchor for these particular steps, okay? And this anchor, I'm going to call it build_and_test and then for this one, I'll just call it, if I can get the right character, I will call it lint, and then for this one, I will call it security_scan.
>
> **[4:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=279)** Okay, now let's add the anchor for the staging step. We've got this deployment to staging, so I will copy this one as well and go back up to the definition section, paste this in, and I will call this one Deploy to Staging or rather how about Deployment to Staging to match the name that's already there. The production deployment only happens once, so I'm going to get a little lazy on that one, and I won't create a YAML anchor for that one. But now that we have these YAML anchors, let's replace any code there already in our pipeline with the correct alias. So here under the default step, I can get rid of all of this code. Not all of that code, all of this code here and all of this code here, and I can replace this now with the alias for build_and_test. And then the next one I think was lint and then the next one. It is not build_and_test, it is lint, and then the next one or the very last one was security_scan I believe. All right, and I know these steps are definitely used elsewhere
>
> **[6:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=372)** as well in the feature branch section, in the main branch section, so what I will do is I will copy these and paste them down below. Okay, so here's my parallel step and I'm just going to select all of this code here that I'm going to replace, and I will paste in the aliases. I need to tab them in so they're in the correct spot. I think that looks good, and actually I'll just copy this again because I want to put these same steps under main. Okay, I think that looks pretty good. Now let's get rid of some of these other deployments. We had a requirement to only have the feature branch deploy to staging. The main branch is going to deploy to staging, but any other branches don't need to do deployments. So what I will do is I will get rid of this step here from the default pipeline and I will move this production deployment down to the main branch under the Production stage. So let's make sure this guy gets pasted in here correctly. Clean this up as needed. Okay, I think that looks good, and for staging in this case, well, let's do production, or rather let's do the feature one first because what I'll do here, all this guy needs to do is have a step for deployment_to_staging.
>
> **[7:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=476)** And I think I'm getting pretty close here to being ready to check this file in and actually run this pipeline. There was one more requirement though. We needed to remove any manual triggers. I know that there's this particular trigger here under Production, so I'm just going to delete that line and that satisfies that requirement to remove the manual triggers. But I'll do one more check here to make sure everything looks good. Default doesn't have any deployments. The feature branch, actually yeah, I'm glad I caught that. This one would've been under the parallel step. That's not where we want that. I want to pull that out here so that it runs after all of these steps that are running in parallel and let me make sure I did that for the main branch as well. Well, the main branch has stages so I think we're going to be good there, but I didn't add any steps for staging, there I go. Let's copy this line here and then add that as a step under the Staging stage. Okay, and it's in the right spot. So with that, I think we're good to go ahead and commit this file, push it back to the repo, and then take a look at how these pipelines are actually going to run. I'm back in the bitbucket web interface now and I'm viewing the Branches page for this repo. After I pushed the updated configuration to the repo, I created branches to test each pipeline trigger. I created a feature branch and a bugfix branch. Each branch creation trigger the pipeline
>
> **[9:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=568)** and the results should match the specifications we added. The bugfix branch should only run integration steps. The feature branch should only run integration steps and a deployment to staging and the main branch should run integration, deployment to staging, and a deployment to production. Let's take a look at each one of these pipeline runs. I'm looking at the pipeline run now for the bugfix branch and sure enough, we only get these parallel steps that were run, Build and Test, Lint, and Security Scan, so this one is running correctly. Let's take a look at the feature branch run. In the feature branch pipeline run, we get those expected integration steps running at the start of the pipeline and then we get that expected deployment to staging. Now let's take a look at the main branch run. Okay, this is the final pipeline run we need to test. This is the main branch and sure enough, we get integration, we get that deployment to staging, and we get the production deployment. The other thing to note about this production deployment is that it does not have a manual step. So this is, its true continuous deployment in this case. It doesn't have any manual interaction with this particular pipeline. So after updating the pipeline configuration and then creating branches to test the start condition requirements, I will say that this challenge has been successfully solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **CLI Commands:** make (6)
> **Code Identifiers:** build_and_test (3), security_scan (2), deployment_to_staging (1)
> **Env Vars:** yaml (4)
> **Tools:** bitbucket (2)
> **Exercise Files:** template (2)
> **File Paths:** bitbucket-pipelines.yaml (1)
> **UI Navigation:** scroll down (1)


### 2. Working with Variables and Artifacts

[↑ Back to Table of Contents](#table-of-contents)

#### [Variables and secrets](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=0)** - [Instructor] To keep our pipelines flexible, we can use variables. We refer to variables in our pipeline configuration using a dollar sign character, followed by the variable name. Using all capital letters for a variable name is a common practice. Capital letters can make variables easier to find in a pipeline configuration. You might also see variables wrapped in curly braces. This also helps variable names stand out among other text. In our pipelines, we'll reference predefined variables, user-defined variables and secrets. Each pipeline comes with a set of predefined or default variables we can refer to as needed in steps and scripts. Most of these variables hold values that relate to the current pipeline run or an active pipeline step. This includes variables like the current build number and the hash of the commit that started the pipeline. Check the exercise files for a reference listing all of the default variables. We can also define our own variables to pass configuration details into our pipelines at runtime. These might be values that represent an application setting or a username. Secrets are special variables that help us protect sensitive details like API keys and passwords. When secret variables are added, the values will be covered by dots, and a padlock icon will be next to the name. Secret values are also obscured in pipeline logs and output.
>
> **[1:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=99)** Pipeline variables can be defined for workspaces, repositories, and deployments. Variables defined at the workspace level are available to all repositories in the workspace. Workspace variables are useful for sharing values across multiple repos with pipelines that all need to reference the same values. Repository variables can only be referenced in the repo where they're defined. This is perfect for keeping configuration values close to the code for specific applications and their CI/CD pipelines. Deployment variables are even more localized and can only be used in the deployment environment where they're defined. This is most useful when the same code and pipelines are being used to build and deploy applications in different environments. Each deployment can be tailored specifically for the target environment without having to make changes to the code or the pipeline configuration. Variables can be overridden if the same name is defined in multiple locations. For overrides, the highest order of precedence is given to deployment variables, followed by repository variables, then workspace variables. And finally, predefined variables are given the least precedence. I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I'm on the Workspace Overview page. To set variables from here, I'll select this cog in the upper right-hand corner, and then I'll select workspace settings. I'll scroll down the page a bit,
>
> **[3:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=196)** and on the left sidebar, under Pipelines, I'll select Workspace variables. The Workspace Variables page lists the values that are available to all repos in this workspace. Let's check out variables scope to a repository. I'm viewing a repository now, and to see the repository variables, I'll select Repository settings from the left side menu. I'll scroll down to almost the end of the page, and under Pipelines, I'll select Repository variables. Of course, these variables are scoped to this repository, and to get to the deployment variables, I'll select Deployments on the left side menu, and I'll scroll down a bit to see the environments that are available here. To see the variables here, we would select the environment we're interested in configuring. To get a better idea of how all the variables we've seen are applied, let's look at a pipeline run. I'm viewing the log for a completed pipeline, and I've selected a step in the production stage. If I open up the build setup step in the log and scroll down just a little bit, I get a listing of all the variables that are available to this step in order of precedence from least to greatest. That is, starting with a default
>
> **[4:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=290)** or predefined variables, all the way down to the deployment variables. If you ever have problems with variables in a pipeline, start your debugging here to see what variables are exposed for each build step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **UI Navigation:** scroll down (4), select the (1)
> **CLI Commands:** make (2), find (1), cd (1)
> **Env Vars:** api (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### [Use environment and deployment variables](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=0)** - [Instructor] Deployment variables help us to develop pipelines that use the same steps for different environments. By using override capabilities, we can use the same variable name with different values for the targeted environments. For pipelines that deploy to multiple environments, we might be inclined to create pipeline steps specific to each environment. But if those steps share the same code and commands, then our pipeline isn't dry, meaning we haven't followed the [Software Development](../../Topics/Software%20Development.md) tenant, don't repeat yourself. Instead, we can use deployment variables and YAML anchors to streamline the code in a way that allows us to use the same step for multiple environments. By tagging steps or stages with the appropriate deployment label, the variables for that environment become available to that step or all the steps inside a stage. Let's see how to apply this in a demo. I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I've selected the deployments tab in the repository settings for this repo. Environments are collected into three groups, test, staging, and production. By default, Bitbucket creates environments with a name corresponding to each of these groups. To add variables to an environment, we just select that environment and then scroll down to the variable section. I've already added a variable named domain to each environment, but with different values. We can also add additional environments.
>
> **[1:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=96)** All we have to do is select add environment under the targeted group and enter a name. Let's add a low testing environment in the staging group, and after we enter the name, all we have to do is select the check mark to complete the process, and then in this environment, we can also add variables. Now I'm viewing the pipeline and configuration for this repository on my local system. Line 5 starts the definition for a step that we can reuse in our pipeline. This step references a default variable and a deployment variable. The value of the deployment variable will be determined by the environment that uses this step. Moving down to lines 13 and 17, this is where our deployment step is called. Because each step includes the deployment keyword followed by the target environment, any variables defined in that environment will be available to the step. Let's take a look at a run of this pipeline to see the results. Now I'm back in the Bitbucket web interface, viewing the production step of a completed pipeline run. With the output from the steps displayed, we can see how the values
>
> **[3:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=189)** for the production environment were applied as expected. We would see similar results for the staging deployment as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Software Development](../../Topics/Software%20Development.md) (1)
> **Tools:** bitbucket (3)
> **UI Navigation:** scroll down (1), select the (1)
> **Env Vars:** yaml (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Create and share artifacts](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=0)** - [Instructor] Whenever a pipeline step writes a file to disk, we refer to that file as an artifact. An artifact can be a compiled executable, an archive like a JAR or ZIP file, or it might even be a text file with log messages. By default, artifacts created in one step are available to other steps in the pipeline. By creating an artifact once and sharing the artifact between steps, we can minimize our pipeline runtimes. This saves build minutes and makes pipelines more manageable. An artifacts block, followed by a list, identifies the files to be treated as artifacts. Predefined variables can come in handy when we need to specify names for artifacts created by a build step. Just note that variables can't be used in the artifacts list. However, we can use wild cards to capture files by their extension. Wildcard can also be used to identify multiple files inside a directory. Keep in mind that any list item that starts with a wildcard needs to start and end with single quotes. After an artifact is created, we can access it in any following steps. In these cases, we can use variables in the script section to use the same file names used by previous steps. Let's go to the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) web interface and review the output of a pipeline with artifacts.
>
> **[1:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=95)** In this short pipeline run, we have two steps, one creating artifacts and another using them. One difference we can notice right away is this Artifacts tab. This provides us with a list of the artifacts that were collected from this step, along with a way to download them directly. We also get details on artifacts in any following step.
>
> **[2:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=130)** This build setup step shows us the artifacts being downloaded. And of course, the step output will show exactly how the artifacts were used in the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Env Vars:** jar (1), zip (1)
> **Warnings:** note that (1), keep in mind (1)
> **Tools:** bitbucket (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Create and download packages](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=0)** - [Instructor] Using artifacts is a good practice for speeding up pipelines and making items available to use after a pipeline has completed. But artifacts aren't the most practical option for long-term use. Accessing an artifact after a pipeline has completed requires you to know the specific pipeline run and the specific step where an artifact was created. Also, artifacts are only available for 14 days after they're created. This helps minimize storage utilization, but isn't ideal if an artifact needs to be accessed more than two weeks after it's created. In these cases, packages offer a much better solution. Packages are artifacts that are exposed by the downloads feature in [Bitbucket](../../Skills/Software%20Development/Bitbucket.md). Using the Downloads page, we can access packages from a consistent location whenever we need to. In public repos, packages on the Downloads page can be accessed by anyone that can reach the URL making packages especially useful for open source projects to share software releases, compiled binaries and archives. Packages are also available indefinitely. However, we do have to take into consideration any storage limits in place for our Bitbucket account. By default, packages are automatically created for the entire repository as well as any active branches or tags. We can also create new packages by uploading files from our local system
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=93)** or adding them directly from a pipeline. Uploading files from a local system or from a pipeline requires write access to the repo. For pipeline uploads, we also need to have an access token in place. The access token is essentially an API key that gives a pipeline permission to use Bitbucket features. With the access token saved as a deployment or repository variable, we can use the token in a special pipeline step, called a pipe. Bitbucket pipes are docker images designed specifically for use as a step in a Bitbucket pipeline. Just like normal Docker images, pipes are prebuilt reusable components that allow us to add specific functionalities to our pipelines with minimal configuration. For pipeline uploads, we'll use the bitbucket-upload-file pipe. The pipe contains all the code needed to use the uploads API. Instead of having to write our own code every time, we can just pass variables and parameters to the pipe whenever we need to upload a file. from a pipeline step. Let's use a demonstration to see how access [Tokens](../../Skills/Web%20Development/Tokens.md), pipes, uploads, and downloads all come together. Let's start by creating an access token. I'm logged into my Bitbucket account and I'm on the homepage of the repository I'll be using for this demonstration. From here, I'll select Repository settings. And then, Access tokens.
>
> **[3:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=189)** On this page, I'll select Create Repository Access Token. I'll give the token a label and then set the permissions. To keep access as limited as possible, I'll only give this token write permission for repositories. This is the minimum permission needed for a pipeline to upload a file to the repository. Now, I'll scroll down a little bit and select Create. After I select Create, the password is displayed. This is the only time the password will be visible, so I need to capture it and save it in a secure location. I'll select these stack squares here to copy the password to my clipboard. And I'll immediately save it as a repository variable. So, I'll select out of this page, scroll down a little bit, and select Repository variables. I'm on the Repository variables page now, and from here, I'll create a variable with the name BITBUCKET_ACCESS_TOKEN, and paste in the value for the password. The password is a sensitive value, so, I'll keep the secured option in place and select Add. Now, let's use this token in a pipeline. In this two-step pipeline, we'll create an artifact in the first step,
>
> **[4:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=282)** naming it with default variables for the branch and the ID of each pipeline run. We'll use a wild card for the artifact specification, since we can't use variables in that part of the configuration. In the second step, we call the pipe for Bitbucket upload file. The configuration for the pipe uses the repository variable we just created for the access token. We also use a wild card to specify the name for the zip package. Let's see the results of this pipeline. I'm back in the Bitbucket web interface now viewing the pipeline run after updating the pipeline configuration. Let's go straight to the output for the second step to see the output for the pipe. And let's open up this display a little bit so we can see all of this output. And I'll scroll down to the bottom to see the last few lines of the log. In the last few lines of this log, we can see the indicators that the pipe has completed the upload successfully. We could use the link provided here, but if we open the sidebar, and select Downloads, we can get to the Downloads page and see all the packages available for downloading, including the package we just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (9), [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **Tools:** bitbucket (9)
> **Env Vars:** api (2), url (1), bitbucket_access_token (1)
> **UI Navigation:** scroll down (3), open the (1)
> **CLI Commands:** docker (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)

#### [Challenge: Deploy an artifact](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=6)** - [Presenter] I got to admit, that theme song is music to my ears because I know that a perfectly timed challenge is right around the corner. In this challenge, you'll continue your role as the CICD subject matter expert for the amazing mobile app development team. The dev team is making great progress with the pipeline configuration you created in the previous challenge, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the company is buzzing with interest. Now the plugin team needs help updating their [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) workflow. Their goal is to share plugins as packages that anyone in the community can download. With your knowledge of [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines, the team is confident you can help. Take these steps to complete the challenge. Log into Bitbucket and locate the repository you created in the previous challenge. Start by creating an access token for the repository that your pipeline can use to create a download. Make sure the access token has the correct permissions and is stored securely. Update the pipeline configuration to create an artifact in the build and test step. The artifact should be a zip file of the working directory, starting with the name plugin, followed by the build number and the .zip extension. Then update the production stage to create a package using the zip file. Run the pipeline and confirm that the package was created and can be downloaded by anyone that has access to the URL. You'll find all the details for this challenge
>
> **[1:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=101)** in the Exercise Files. This challenge should take about 20 minutes to complete. I've got a feeling, though, that you'll sail through this challenge with time to spare. Do your best, then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **Exercise Files:** zip file (2), exercise files (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** cicd (1), url (1)
> **Tools:** bitbucket (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Deploy an artifact](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=0)** - [Instructor] In this challenge, we need to create a downloadable package. I'm working in the same repository that I used for the previous challenge. I've got the exercise files downloaded to my local system. And I've also cloned the challenge repo to my local system so I can push changes from here. Let's get started in the web interface. I'm in the web interface for the repo, and I'll start by creating the access token. From the sidebar menu, I'll select repository settings, and then access [Tokens](../../Skills/Web%20Development/Tokens.md), and then create repository access token. I need to give this token a name, so I'll call it "upload." And a best practice is to give this token the least privileges that it needs. And for a pipeline to push a file to the download section, we need to give it at least write access. So I'll select "write" under the repository section. And then I just need to scroll down here and select "create." So I have my access token visible now, and this is the only time that I can see it. So I need to copy it from here and store it securely in a place where my pipeline can access it. So I'm going to select these stack squares here to copy it to my clipboard.
>
> **[1:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=92)** And then I need to create a repository variable. So I'll click away from this screen and I'll scroll down, or perhaps up to find repository variables. I know it's over here somewhere. There it is. Repository variables. And now I can create a variable where I can store this particular token. I'm going to use the name "[Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Access Token," and then I will paste in the value for the token. I want to make sure that this check mark that says "secured" is definitely active, because I want this value to be treated as a secret and hidden in any log output or anything like that. I don't want it to be visible. So we definitely want to have that secured. But with everything in place from this screen, I will select "add." Now that we have the token in place, let's update the pipeline configuration so we can create this download. So I'm in my local editor now, and I'm looking at the exercise files for this particular challenge. And I know that I'm going to need to use this particular snippet here, this code snippet, where we're updating the build and test step to actually zip up the directory, the working directory of this particular pipeline run, and create this zip file. It has the specified name in here, plugin with a dash, followed by a default variable, which this variable holds the build number for this particular pipeline run.
>
> **[3:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=187)** So we'll get a new number. Every time the pipeline runs, this number will be replaced. So that's good. And then we're also creating an artifact with this step. We're creating the artifact with the name "plugin." We're using a wild card here, because this Bitbucket build number is going to be different for every particular run. And we can't put variables in this section, so we got to put that wild card there, followed by .zip as well. So I'm just going to copy this to my clipboard and then I'm going to go over to the pipeline configuration for this particular repo. And let's see where we need to add it. This is a YAML anchor step. So I'm going to go to the top where I have this build and test step defined, and I'm going to paste that new step in here. It fits perfectly, but I do have to fix my YAML a little bit. I think I'm going to try to do that a little bit differently here. Let me add a new line there. Select this again and paste. That looks much better. No errors now. And I think that is a valid YAML. So after cleaning up my file here just a little bit, and putting some spaces in, and pasting stuff in, I think this is indeed a valid YAML. Now that we have a step that creates the artifact, we also need to use this artifact to create the package. And if I go back to the exercise file, there was another snippet that they gave us here. I can select this one. This is the pipe where we're actually calling this Bitbucket upload file pipe, and we're passing in the variable that we just created that has the access token in it.
>
> **[4:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=284)** And it also is going to look for any zip file that's located in the working directory for this particular pipeline. And it will use that, the access token, the file, and all the code that's sort of bundled up in this pipe to create the upload for us. So let's copy this and then go back to the pipeline configuration. Now I need to scroll down. I think in this file there was only one place that production was used in the pipeline. Here it is. So this is where we're going to drop this step. Let me paste it in here. I'm going to, well actually, we can make it part of this particular script. And I guess this is where it's kind of the artistry of creating a pipeline. We can either create a new step for this particular pipe, or we can add this as a script to the step that's already in place. I'm going to take the lazy route and just put this as another script step in this one step that we already have in place. So I believe that should give us the result that we need though by running this pipe and creating the upload. So let me save this file now, and then I will go to my terminal. Okay, I'm in my terminal now. I'm going to run [Git](../../Skills/Software%20Development/Git.md) status real quick, and I do have the modified pipeline file. If I ran git diff on that I would probably see the changes there I added. I updated the build and test step, and I updated the production deployment script. So this all looks good to me. I'm going to quit out of here.
>
> **[6:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=376)** Let's clear the screen and then I'm going to git add all of these changes. Let's git commit with a message that says "create package," how about that? And now let's push this up to the repo. Okay, the push looks good. Let's go back to the Bitbucket web interface. Check out this pipeline run and make sure our download gets created the way that we expect.
>
> **[6:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=417)** I'm back in the Bitbucket web interface now and my pipeline is running. That's always a good sign. I didn't have any YAML errors or anything like that. Let's wait for this pipeline to complete.
>
> **[7:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=433)** Okay, the pipeline has completed and we see that green check mark there letting us know that all steps were successful. Let's start by selecting the build and test step. And sure enough, we do see an artifacts tab here. That's what we would expect to see on this tab, plugin*.zip, meaning that this artifact was indeed created. So let's go now to the production step. The deployment to production where we actually use that artifact. We can check a couple things here under the build set up. We can go, in this particular log, we should see some output. Yes, the artifact plugin*.zip was downloaded, and we can see the size for that download there. And now let's close this step and go to the pipe step. Because this is like key to our whole operation, right? We need to make sure that this pipe runs successfully and uses that access token to upload the file. Sure enough, the pipe starts to execute. It uploads the file and the upload is successful. Now, we do have this link here that we can select to actually download the file, but the better way to probably look at this is to go to the downloads page, because this is where we would normally go to to see this type of of package. And there is the plugin file. It's got the seven there as the indicator, the number for that last pipeline run. This challenge also asked us to confirm that anyone can download this file.
>
> **[8:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=526)** Since this is a public repo, if we place a file in the download section, then anybody should be able to access that file. So what I'll do is I will right click the link here and I'll copy the link address. Now, I'll go to an incognito window or a guest window in my browser and see if I can access the download from there. Okay, I've got my guest window open now. Let's paste in the URL for that zip. And sure enough, we get the download that's starting. I'm going to save that to my downloads folder. And sure enough, we can get that. There's the download right there, and I could access it if I needed to. So let's go back to the repo and just kind of review things a little bit. Okay, back in the repo, to review, we started this challenge by creating an access token. I just named it upload. I made sure that this particular token had all of the permissions that it needed to write to the download section of this repository. And then with that access token in place, I actually saved it as a repository variable with the name "Bitbucket Access Token" so then we can refer to it from our pipelines. And very specifically, we added a step to our production stage in the pipeline configuration that called the Bitbucket Upload file pipe. And the variables that we passed to this pipe were indeed the Bitbucket Access token and the name of the file that we wanted to upload
>
> **[10:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=622)** to the downloads section of our repository. So with all of these steps in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (8), [Git](../../Skills/Software%20Development/Git.md) (4), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Tools:** bitbucket (8), terminal (2)
> **CLI Commands:** make (4), git (4), find (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Env Vars:** yaml (5), url (1)
> **Exercise Files:** exercise files (2), zip file (2), exercise file (1), download the (1)
> **Cross-References:** go back to (4)
> **Definitions:** is a  (3)


### 3. Configuring Build Environments

[↑ Back to Table of Contents](#table-of-contents)

#### [Use default images and tools](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=0)** - [Instructor] Every step in a [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipeline is run in a docker container. Using containers and pipelines allows us to have consistent reproducible build environments isolated from previous pipeline runs. This isolation ensures that each pipeline step starts from a known good state. We can specify a container image globally, at the beginning of a pipeline, or we can specify an image to use in an individual step. Because the image keyword is optional, we aren't required to specify an image every time we add a step to a pipeline. If no image is defined, then Bitbucket will use a default image for us. The default images used by Bitbucket pipelines are maintained by [Atlassian](../../Glossary/Service/Atlassian.md) and hosted on Docker hub. The default image is based on the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system. This means we can access standard Linux commands in our pipeline along with additional commands that get installed, so we can use them out of the box. The tools installed include build tools we can use for developing and compiling applications, web tools that we can use for gathering or transferring data, and general utilities that our scripts might need to process text or create artifacts. Check out the exercise files for more details on the tools included with the default images and a pipeline configuration you can use to inspect build environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Atlassian](../../Glossary/Service/Atlassian.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Tools:** bitbucket (3)
> **CLI Commands:** docker (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Use public and custom images](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=0)** - [Instructor] [Atlassian](../../Glossary/Service/Atlassian.md) provides a default image for pipelines with some tools already installed. More than likely, though, your projects will need additional tools to build, compile or deploy your software. In these cases, you'll either install your tools at runtime or select another image for your pipeline steps. Since the default image is based on [Ubuntu](../../Skills/Web%20Development/Ubuntu.md), we can use Ubuntu's advanced packaging tool, better known as APT, to install just about any [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md)-based tool or application needed by a pipeline. In this example, the pipeline is installing the [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) compiler. The Pipeline runs apt-get update, followed by apt-get install -y in the name of the package. After the update and the installation, we can use the tool in our pipeline steps as needed. Installation for other tools would follow a similar format. However, keep in mind that each step of a pipeline is run using a new Docker container. Even if the image is the same, the execution environment is different. So any uninstalled tools that need to be accessed multiple times would need to be run in the same step, or they'd need to be installed all over again in a new step. Unfortunately, this approach leads to pipelines that use up precious build time in our [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) accounts. For those of us on the free tier, we only have 50 minutes each month. So we need to make every minute count. A more efficient approach is to use a container image
>
> **[1:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=95)** that's already configured with the tools we need. We can specify images for the entire pipeline or at the step level. In this example, an image with the Rust compiler already installed is being configured globally, so all steps will have access to it. We would need to do an install in every step where Rust is required. Bitbucket pipelines can use any container image that's publicly available via the internet. For developers, this is great since we can select from dozens of public images hosted in Docker Hub, the Amazon ECR Public Gallery and other popular image hosting sites. In cases where we need something more custom, we can build our own container images and use those in pipelines as well. Any custom image must also be accessible via the internet. It can be hosted on your company's internal network. Also, if the container registry requires authentication, the pipeline will need to be configured with a username, password and any other type of authorization [Tokens](../../Skills/Web%20Development/Tokens.md) needed to access the image. Let's continue exploring pipelines and public images in the Bitbucket web interface. The code for the examples we're about to see can be found in the exercise files. I'm logged into Bitbucket account now, and I'm viewing a pipeline run with two steps. The pipeline is using the default image, and each step installs the Rust compiler using the Ubuntu apt-get command. While total execution time might vary from one pipeline run
>
> **[3:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=192)** to the next, this run took a total of 34 seconds with each step taking about half of that time. Let's compare this to a pipeline run where we used an image with Rust already installed. In this pipeline run, the Rust image is being used for all steps in the pipeline. Again, run times will vary, but altogether, this pipeline run was about half the time of a pipeline where Rust was installed in each step. More specifically, take a look at the second step. The first step pulled the image. So it took about the same amount of time as one of the steps where Rust was installed, but the second step was able to benefit from the image already being available and ran in just three seconds. This demonstrates how a pre-configured image can save time in the long run. Let's look at one more example. In this last example, the pipeline is configured to use the default image globally. In the first step, the versions for [Node.js](../../Skills/Web%20Development/Node.js.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) are echoed to the output. The following steps override the global image by calling specific images for Node.js and Python. This demonstrates how we can override image settings in each step for projects that need different tools for different steps in the pipeline or different versions of tools that might already be available in the default image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (8), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** apt (4), docker (2), node (2), python (2), make (1)
> **Tools:** bitbucket (4)
> **Prerequisites:** install (4)
> **File Paths:** node.js (2)
> **Env Vars:** apt (1), ecr (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** known as (1)

#### [Use services](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=1)** - [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines includes a very useful feature known as, services. Services are additional containers that run along with the container images running our pipeline steps. Often, when we're testing software, the application being tested needs to connect to other applications like a database, a caching service, or some type of request queue. Having these auxiliary applications available in our pipelines allows us to create realistic testing environments with minimal configuration. We set up services in the definition section of our pipeline configuration using the services keyword. Then we provide a name that we'll use later on in the pipeline to reference this service. And finally, we provide the container image that the service will use, along with any environment variables or configuration details the service needs to initialize. Once the service is defined, we can reference the service in any steps where it's needed. In the step configuration, we use the services keyword, followed by a yaml list of all the services we want to instantiate. Our pipeline will handle starting the service for us and any commands in the script, will be able to access the service directly. Before we use services, though, there are a few limitations we need to keep in mind. Any step can reference a maximum of five services. Also, each step has a limited amount of memory allocated to it.
>
> **[1:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=94)** When a step instantiates a service, the memory is split between the steps and the service. Keep this in mind for any steps that might be memory intensive, but also need a service to operate. Depending on the service you're using, the way you reference it may change. For example, some services will listen on local host while others will use the IP address 127.0.0.1. Check the exercise files for references to a few common services and how to access them from any code that needs to connect. And last but not least, pipelines will do an excellent job of starting services and making them available to our steps. However, there's no built in process that lets a step wait until a service is ready. If you find that your tests are failing because they try to access a service before it started, you may need to add wait time to your steps to allow the service to start before you start testing. Let's go to the Bitbucket web interface to see an example pipeline using a service. I'm logged into my Bitbucket account where I've created a new repo for this lesson. I've added the exercise files as well. The code for this demo is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) application that connects to a [postgres](../../Skills/Software%20Development/PostgreSQL.md) database. The test suite exercises the application by calling each function from the application, confirming the database connection is in place,
>
> **[3:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=187)** and then creating a table and inserting data. The pipeline configuration uses a global image for Python 3. The pipeline also includes a service named database using a postgres container image. Default values are passed in for the name of the database, the username, and the password used to connect. The service is then instantiated in a pipeline step before calling the pytest command to kick off the test suite. Let's take a look at a run of this pipeline. Like any other pipeline run, we get output from the build step and a tab where we can find artifacts. But since this step used a service, we also get a tab for the alias we used to instantiate the postgres database. This tab shows all the output from the service. This is the perfect place to look. If you need more information on how your services are initializing, or if you need any other details for debugging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** find (2), python (2)
> **Tools:** bitbucket (3)
> **Versions:** 127.0.0 (1), python 3 (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Challenge: Create a pipeline with images and services](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=6)** - [Instructor] You already know what that music means. A piping hot challenge is ready for us to enjoy. In this challenge, you're continuing your role as the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines expert supporting the amazing mobile app. A recently deployed feature allows users to create backups with [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). The data is managed by two [Microservices](../../Skills/Software%20Development/Microservices.md). One microservice is written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and the other is written in Ruby. Both services connect to a cluster of [Postgres](../../Skills/Software%20Development/PostgreSQL.md) [Databases](../../Skills/Software%20Development/Databases.md) to manage the stored data. Before making any updates to the feature, the development team would like to test both microservices in the same pipeline. Follow these steps to complete this challenge. Create a new repository and add the exercise files. Update the provided pipeline configuration to include a definition for a Postgres database service. Once the definition is in place, update the steps in the pipeline to make the database available to any script commands. Then update the steps to run the provided test commands for Python and Ruby. Make sure the steps use the correct execution environment for each programming language. You'll find all the details for this challenge in the exercise files. This challenge should take about 20 minutes to complete. I know you'll have no problem with this one. Join me in the next video to compare solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **CLI Commands:** python (2), ruby (2), make (2), find (1)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a pipeline with images and services](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=0)** - [Instructor] This sounds like it's going to be a fun challenge, so let's jump right in. I'm logged into my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) account and I've already created a new repo. I cloned the repo and added the exercise files for my local system. I've already run the provided pipeline once, just to make sure I've got a good point to start from. On my local system, I have the exercise files open and I'm editing the Bitbucket pipeline's configuration, and I have my terminal open to push my changes back to Bitbucket. This challenge is all about working with services and images. So the first thing that we need to do to set up this pipeline is to add the definition for the [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database service. In the read me file, we do have a snippet that's provided, so I'm just going to go to the read me and copy that snippet. Go back to my pipeline definition, or rather my pipeline configuration because we need to add here the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) definitions, and then that's exactly where I'm going to paste that snippet in. And I might need to clean up my formatting just a little bit. Let's see if I can get that into the right spot. That looks pretty good. Save that. Okay, so with the database in place,
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=93)** the next thing we need to do is make this available to any steps that want to use this particular service. So we need to update the steps down here in the pipeline section. Okay, under each step, I'm just going to go under the name here. We'll start with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and I know we need to add services and then the name of the service, which is database. And actually, no, it's not a block like that. It's actually a YAML list, so that's the one that we want. It needs to look like that. Okay, this looks right. So what I want to do is I'm just going to copy this and paste it here under the Ruby section as well, so that step will also have access to this database service. So this part of the challenge I feel like is complete. Each of these steps will be able to access this database, but because we're running two different steps with two different programming languages, we need to make sure that these particular steps have the correct, I think the challenge said execution environment. So what that leads me to believe is that we need to update the image for each of these steps, and if I go to the top of this particular configuration, this pipeline, or rather this configuration is using the default image, and I'm assuming, or actually I know of, you know, from the discussions that we've had so far
>
> **[3:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=187)** that this particular image, it does have Python installed, it does not have Ruby installed, but if we go back to the read me, I think we were provided some additional information, and there it is for the execution environment. For Python, we have this particular environment, python:3, and then for Ruby we have ruby:3. So I think what I'll do is I'm not going to copy that. I'll just type it in. If I go back down to these steps here, and I'm going to add another block. Let's see where we want to put this guy. Right above the script, I'll put image and then python. No, just one python:3 and then under Ruby, also just above the script, I'll put image and then ruby:3. Okay, so now these steps have the correct execution environment and there's a good prompt here for us for the next part of the challenge that says our Python tests go here, our Ruby tests go here. So let's go back to the read me, and sure enough, we have the test commands that we need to run. So I will copy these, just copy those here and go back to the pipeline configuration. Make some space for me to add these. These are script commands, so these need to be in a list for our YAML to be valid. That looks good for Python. Let's go back and grab these Ruby commands. Again, I'll copy these to the clipboard,
>
> **[4:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=284)** go here to the Ruby section right at the end of the file, and then just like the Python commands, these also need to be in a YAML list format. I'll save that, and I think, just looking at what we've done here, let's just review one quick second before I push any code. We added a definition section, and under the definition section, we added a database. This was all provided to us through the Postgres image, the database name, the user, and password. That's all part of the code that's been provided. For the Python step, we added the database service and then we added an image and then we added the commands specific for running the Python test, and then we did the same thing under Ruby. We added the database service, we gave it the correct image to use for these commands, and then we added the commands themselves. So let's save this file. I will go to my terminal now and push these changes up to Bitbucket. So I'm in my terminal now. I'm going to run [Git](../../Skills/Software%20Development/Git.md) status just to make sure I haven't done anything crazy with any other file. Yes, the pipeline's configuration, that's the only file that I wanted to modify. I will, actually, let's do a diff on it real quick, just to see what we changed. There's our definition that we added, service and the image, the commands for Python and Ruby. So this all looks good to me.
>
> **[6:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=376)** Let's add, actually, I'll do a git commit -am, so I'll add just the one change file there, and I will, for this particular commit message, let's say update pipeline for python ruby and database.
>
> **[6:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=398)** Alright, and now let's push that. Okay, the code has been successfully pushed up to Bitbucket. Let's go to the pipelines tab in our repo to see how this pipeline actually runs. And it looks like I do have an error somewhere. Maybe I had some, let's see. The services section in my Bitbucket pipeline's YAML file contains a service which does not exist in the services definition. One feature that is pretty useful in these particular scenarios is this option here that says to validate your Bitbucket pipelines YAML. We, if we follow that link, it opens another little service that Bitbucket pipelines provides where we can validate the YAML. Unfortunately, it doesn't bring the YAML over. I really wish it did that, but let's go back here, and I'm going to select all and then copy and then go back to the validator, paste in here, and of course, I got some, I got a lot of errors here, and I see where the problem is. So this particular block of code was not indented properly, so I have a YAML formatting error. So what I need to do is just highlight these lines, tab 'em over, and I think that will get it for me. Oh, definition. Oh, you know what? I'm also missing the services keyword. Let's put services here, colon,
>
> **[8:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=492)** and then we need to do another. So after adding the services keyword, I need to line this code up properly to get my YAML formatting correct. Okay, so that was really the only thing that was wrong. I forgot my services keyword. The database snippet wasn't tabbed over correctly even before I had the services keyword in place. So with those in place, now these steps can definitely see the service that's already been made available to them. So what I will do now is select all of this code and go back to my editor. Actually, I didn't copy it. Let's select all this code, copy, go back to my editor, and I'm going to select all again, and I'm going to paste. Let's save that file. Now let's go to the terminal. I'll clear the screen, and let's do a git diff to see what we changed. Okay, and that's exactly the change that we needed to make here. I was missing the services keyword and my database little snippet. I did not copy that over and format that correctly. So now with that in place, let's do another git commit -am and I'll say fix yaml errors, and then I will, let's push this up. Okay, the code has been pushed. Let's go back to the pipelines page to see how this particular pipeline ran.
>
> **[9:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=590)** Okay, I'm back on the pipelines tab, and sure enough, after fixing these YAML errors, my pipeline is in progress. Let's tap into here and see how this pipeline is looking. The test Python step already completed. That's awesome. Glad to see that. Ran three tests and everything passed okay. Let's wait for the Ruby tests now to finish. Okay, it looks like the Ruby tests have finished now. I'll scroll down, and yes, there are three runs, four assertions, zero failures, zero errors, and zero skips, so all of the Ruby tests ran successfully as well. So I think with that, the challenge has been solved, but let's review real quick to see what we did. If I go back to my editor, I'm going to close this out of the way. We are using the default image in this pipeline, which is totally fine. We added a database service using the Postgres image. We updated our steps to call this particular service so that any commands here can access the database, and then because these steps are using different programming languages, they're running test suites for two different programming languages, we had to override the default image, and we were provided the information we needed here, python:3 for the Python test suite, ruby:3 for the Ruby test suite. And then of course, we added the commands that were needed to run the actual tests. So, and of course, in my case, I mean, your condition might have been a little bit better. Maybe you saw the errors before,
>
> **[11:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=683)** or rather you didn't encounter the same errors that I ran into in your solution. But, you know, using the validator, I was able to work through those. So with the changes in place, validating my YAML and getting the pipeline to run successfully, I believe this challenge has been solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (16), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (8), [Git](../../Skills/Software%20Development/Git.md) (4), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** ruby (17), python (16), make (6), git (4)
> **Tools:** bitbucket (8), terminal (4)
> **Env Vars:** yaml (11)
> **Cross-References:** go back to (9)
> **UI Navigation:** go to (5), scroll down (1)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=0)** - [Michael] Thanks for sticking with me to the end of this course. I hope you enjoyed learning about the different ways we can use [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines to automate the CI/CD process. As you continue working with Bitbucket, tap into the Q&A section to ask a question, provide an answer, or just to participate in conversations with other folks using Bitbucket Pipelines. If you're ready to take your pipelines to the next level, join me in my course, Advanced Bitbucket Pipelines, right here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. We'll take an even deeper dive into advanced features, like developing custom pipes and more. I had a great time being your instructor for this course, and I can't wait to see what you build, test and deploy with Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** bitbucket (5)
> **CLI Commands:** cd (1)
> **Speakers:** - [michael] (1)


## Instructor

- [Michael Jenkins](../../Instructors/DevOps/Michael%20Jenkins.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/bitbucket-for-ci-cd-3806095)

## Skills Covered

- Bitbucket
- Continuous Integration and Continuous Delivery (CI/CD)

## Path Context

### In [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)
← [Learning Bitbucket](Learning%20Bitbucket.md) | **2 of 3** | [Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations](Advanced%20Bitbucket%20Pipelines-%20Automating%20Deployments%20and%20Managing%20Third-Party%20Integrations.md) →

## Appears In

- [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations](Advanced%20Bitbucket%20Pipelines-%20Automating%20Deployments%20and%20Managing%20Third-Party%20Integrations.md) — Bitbucket, Continuous Integration and Continuous Delivery (CI/CD)
- [Learning Bitbucket](Learning%20Bitbucket.md) — Bitbucket

---

[↑ Back to top](#)