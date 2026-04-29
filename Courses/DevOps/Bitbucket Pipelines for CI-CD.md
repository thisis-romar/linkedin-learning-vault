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
  - '[[Master Bitbucket]]'
prev_courses:
  - '[[Learning Bitbucket]]'
next_courses:
  - '[[Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations]]'
path_nav: '[{"path":"Master Bitbucket","position":2,"total":3,"prev":"Learning Bitbucket","next":"Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/bitbucket
  - skill/continuous-integration-and-continuous-delivery-ci-cd
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Bitbucket%20Pipelines%20for%20CI-CD.md)

![Bitbucket Pipelines for CI/CD](https://media.licdn.com/dms/image/v2/D560DAQEGSbU6WPTNPA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008984232?e=2147483647&amp;v=beta&amp;t=vjos-qKDnw-IDpu_CahtK0LMVrZuKNMpUWv0TK3IOiA)

# Bitbucket Pipelines for CI/CD

> To get the most out of this course, you should have an understanding of Git, Atlassian accounts, and Bitbucket basics. In this course, lead software engineer Michael Jenkins guides you through how to use Bitbucket Pipelines for your software projects. Gain a solid understanding of continuous integration, continuous delivery, and continuous deployment (CI/CD) to prepare for the role of Bitbucket Pi

> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd) | 1h 28m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Getting Started with Bitbucket Pipelines]]** (7 videos)
- **[[#2. Working with Variables and Artifacts]]** (6 videos)
- **[[#3. Configuring Build Environments]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### From commit to deployment with Bitbucket Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=0)** - [Michael] In the fast-paced world of software development, efficiency and automation are essential.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=6)** Bitbucket Pipelines is an automation tool that helps us integrate code, deliver artifacts, and deploy applications simply by pushing code to a GI repository.
>
> **[0:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=17)** Over the years, I've come to appreciate using Bitbucket Pipelines for projects that need simple, effective CI/CD.
>
> **[0:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=25)** Hi, I'm Michael Jenkins.
>
> **[0:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=27)** Are you ready to enhance your software development workflow?
>
> **[0:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/from-commit-to-deployment-with-bitbucket-pipelines?u=76281980&t=30)** Let's dive in and start learning how to use Bitbucket Pipelines for CI/CD.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (3)
> **CLI Commands:** cd (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [michael] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=0)** - [Presenter] To get the most out of this course, there are a few things you should be familiar with.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=6)** You should also know that this course has built-in features to help you out along the way.
>
> **[0:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=12)** You should already be familiar with using Bitbucket, a cloud-based service for hosting Git repositories.
>
> **[0:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=19)** You should already know how to create Bitbucket workspaces, projects, and repositories.
>
> **[0:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=25)** If you need to get up to speed, I highly recommend completing my course Learning Bitbucket.
>
> **[0:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=31)** Learning Bitbucket lays the foundation for the content in this course, and also includes steps for creating Atlassian and Bitbucket accounts.
>
> **[0:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=40)** Bitbucket pipelines uses container images extensively.
>
> **[0:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=44)** It will help if you have some exposure to a container management service like Docker.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=50)** Also, pipeline configurations are written using a data serialization format called YAML.
>
> **[0:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=56)** YAML is used by many popular tools, so you might already be familiar with it.
>
> **[1:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=61)** Don't worry if you aren't.
>
> **[1:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=63)** Much of the YAML code we'll be working with will be provided for you.
>
> **[1:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=67)** If you're planning to follow along with the examples and course challenges, you'll need to set up a two-factor authentication account.
>
> **[1:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=75)** Bitbucket requires that you have two-factor authentication in place before you start working with pipelines.
>
> **[1:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=81)** This is for the security of your account and any pipelines that can build artifacts or deploy applications.
>
> **[1:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=88)** If you need suggestions, take a look at tools from Authy, Google, Microsoft, or 1Password.
>
> **[1:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=96)** If you're planning to complete the deployment examples and challenges, you'll also need an account with Amazon Web Services.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=102)** Browse to aws.[amazon.com/free](https://amazon.com/free) and follow the steps there to create an account using the AWS free tier.
>
> **[1:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=112)** Exercise files are also available for your reference.
>
> **[1:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=116)** You can find a link to the files on the homepage of the course.
>
> **[2:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=120)** The files contain notes and additional information, examples for the material we'll be covering in the course, and maybe even some trivia and shenanigans.
>
> **[2:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=129)** If you're looking for a reference to something in the course, you'll most likely find it in the exercise files.
>
> **[2:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=135)** And honestly, if you don't use the exercise files, you'll be missing out on a large portion of this course's content.
>
> **[2:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=142)** If you get stuck on something and you need a bit more help than you can find in the exercise files, please use the course, Q&A section.
>
> **[2:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=150)** Ask your question there, and I'll do my best to help you out.
>
> **[2:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=154)** If other folks have gotten stuck in the same place, they might join in the discussion and share their solution.
>
> **[2:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=160)** Also, please check the Q&A section to provide answers.
>
> **[2:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/what-you-should-know?u=76281980&t=164)** As a community, we'll use the Q&A to collaborate on a positive learning experience for everyone.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), aws (2), git (1), docker (1)
> **Tools:** bitbucket (7)
> **Env Vars:** yaml (3), aws (1)
> **Exercise Files:** exercise files (4)
> **Prerequisites:** you'll need (1), set up (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [presenter] (1)

#### Overview of CI/CD
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=0)** - [Instructor] Let's take a moment to get familiar with the software development process most commonly known as CI/CD.
>
> **[0:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=7)** For the simplest definition, CI/CD is an acronym for three phases of software development, continuous integration, continuous delivery, and continuous deployment.
>
> **[0:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=20)** With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis.
>
> **[0:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=29)** Their code can then be combined, or in other words, integrated with code from other members of the team or any existing code.
>
> **[0:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=39)** During the integration step, new code is tested and checked for errors or any other requirements.
>
> **[0:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=45)** This can include linting the code for syntax errors and running unit tests on specific features.
>
> **[0:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=53)** The goal of CI is to allow teams to identify and resolve problems quickly and early in the development process.
>
> **[1:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=62)** CD or continuous delivery follows the integration step.
>
> **[1:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=66)** After code has been integrated, the continuous delivery step automates the build process.
>
> **[1:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=73)** This step can include additional testing at a higher level.
>
> **[1:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=77)** These tests might be more rigorous than unit tests and exercise multiple features at the same time.
>
> **[1:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=84)** By the end of this step, the software will be packaged and ready for release.
>
> **[1:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=89)** The goal of continuous delivery is to always have a version of the software that can be deployed into production as needed, which leads to the next CD, continuous deployment.
>
> **[1:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=101)** At its most fundamental level, continuous deployment places software in a production environment without human interaction.
>
> **[1:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=109)** In this case, the pipeline is fully automated with workflows using tests and validation to determine if the software is ready to be run in production.
>
> **[2:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=120)** Using a well-defined continuous deployment pipeline, development teams can release software quickly and reliably, giving them more time to focus on feature development and other engineering tasks.
>
> **[2:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/overview-of-ci-cd?u=76281980&t=133)** Now that we have a better understanding of CI/CD, we can discuss how Bitbucket Pipelines helps us automate each step of the CI/CD process.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (6)
> **Definitions:** known as (1), is an  (1), in other words (1)
> **Code Keywords:** let (1), case, (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)

#### Understanding pipeline limits
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=1)** - [Instructor] The Bitbucket Free Tier comes with some pretty genuine allowances, but there are a few limitations you need to know about.
>
> **[0:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=8)** Bitbucket provides unlimited public and private repositories for individuals and teams with less than five members.
>
> **[0:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=16)** All users in your account will share one gigabyte of large file storage, also known as LFS.
>
> **[0:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=22)** Large file storage is intended for binary files that are larger than the typical text files we use to store code.
>
> **[0:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=30)** And last but not least, Bitbucket Pipelines provides 50 build minutes per month, which are also shared across all team members.
>
> **[0:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=39)** These resources should be more than enough for exploring Bitbucket Pipelines.
>
> **[0:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=44)** But as you add more projects or need more build minutes, you'll likely need to move to a paid plan.
>
> **[0:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/understanding-pipeline-limits?u=76281980&t=51)** Take a look at the exercise files for more information.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (4)
> **Code Keywords:** public (1), private (1)
> **Env Vars:** lfs (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Bitbucket Pipelines

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=0)** - [Instructor] Let's create our first pipeline.
>
> **[0:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=3)** I'm logged into my Bitbucket account and I've already created a workspace, project and repository.
>
> **[0:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=9)** On the repository homepage, I'll select pipelines from the left side menu.
>
> **[0:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=16)** This is a new account, so I'm prompted to enable 2FActor authentication.
>
> **[0:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=21)** Having two-step verification, also known as 2FActor or 2FA, is required before we can start using pipelines.
>
> **[0:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=28)** Atlassian has this feature in place to help keep our code repositories secure, so I'll follow the link for two-step verification.
>
> **[0:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=37)** On this screen, I'll follow the instructions to set up my 2FA device.
>
> **[0:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=42)** I already have a 2FA application installed, so I'll be able to scan the QR code and then enter the verification code later.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=50)** If you need any additional information on this step, take a look at the exercise files.
>
> **[0:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=55)** The last step in this process is to wait for an email from Atlassian and then click a link in the email.
>
> **[1:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=65)** Clicking the link in the verification email takes me to my personal settings page where I can download recovery codes as a backup for my 2FA device.
>
> **[1:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=74)** For now, I'll go back to the tab where I was creating the pipeline.
>
> **[1:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=80)** And I'll refresh this page.
>
> **[1:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=85)** And now I'm good to go.
>
> **[1:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=87)** I'll select Create your First Pipeline.
>
> **[1:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=91)** On the pipeline creation page, we can choose templates for different types of software projects.
>
> **[1:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=97)** This is helpful if we already have code, but since I'm starting with an empty repo, I'll select Starter Pipeline.
>
> **[1:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=105)** This creates a configuration file with the starter pipeline template.
>
> **[1:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=109)** From here, I'll just scroll to the bottom of the page and select Commit File.
>
> **[1:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=115)** This commits the configuration to the repository and kicks off the pipeline.
>
> **[2:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=121)** Okay, the pipeline is complete.
>
> **[2:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=123)** Let's take a look at the results.
>
> **[2:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=127)** From this view, we get a better visualization of the pipeline.
>
> **[2:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=131)** Specifically, we can see the pipeline steps.
>
> **[2:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=134)** There are five steps altogether, including build and test, lint, security scan, and two deployment steps.
>
> **[2:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=142)** The production deployment step requires manual confirmation, so I'll select Deploy.
>
> **[2:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=151)** And then on this screen, I'll select Deploy again to confirm.
>
> **[2:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=160)** Okay, now the pipeline is really complete.
>
> **[2:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-a-pipeline?u=76281980&t=163)** Now that we have a pipeline in place, let's learn a little bit more about the configuration and the keywords we need to know to build or modify a pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** is a  (1), known as (1)
> **Cross-References:** go back to (1)
> **Tools:** bitbucket (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Bitbucket Pipelines configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=0)** - [Instructor] Bitbucket pipelines are configured in a file at the root of the repository named bitbucket-pipelines.yml.
>
> **[0:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=7)** For developers, having the configuration in the repo is a benefit.
>
> **[0:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=11)** We can treat the pipeline as code and track changes to it with the rest of the files in the repo.
>
> **[0:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=17)** The configuration uses a YAML format, which allows for easy interpretation by both humans and computers.
>
> **[0:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=24)** If you're not familiar with YAML, you can find references in the exercise files.
>
> **[0:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=30)** At the minimum, a pipeline configuration includes the required keyword pipelines, a start condition referred to as a trigger, and a collection of steps that the pipeline will complete.
>
> **[0:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=43)** The pipeline's keyword identifies the start of specific pipeline configurations.
>
> **[0:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=49)** We can configure multiple pipelines in a single file, and this keyword helps to service find each configuration.
>
> **[0:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=57)** We also have the option of specifying a docker image to use for the execution environment when pipelines are run.
>
> **[1:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=63)** If an image is not called out, a default image is used for us.
>
> **[1:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=68)** Triggers are used to start pipelines.
>
> **[1:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=71)** Triggers are highly customizable, and we can use branch names, pull request events, and even manual triggers to specify which pipelines should be run.
>
> **[1:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=82)** The default trigger will run the associated pipeline on every push to the repository.
>
> **[1:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=88)** This is particularly useful for software development.
>
> **[1:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=92)** For example, we can use the default trigger to run integration pipelines on every push to the repo while using a specific branch name or other trigger configurations to start deployments manually.
>
> **[1:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=104)** Steps are the actual units of execution within a pipeline.
>
> **[1:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=108)** This is where the commands, scripts, or other specific actions are carried out.
>
> **[1:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=113)** Each step is required to have a script section, which needs to have at least one discreet command.
>
> **[2:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=121)** Multiple steps can be grouped together in stages to collect related functions into one place.
>
> **[2:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=127)** To keep pipeline execution predictable, steps are run in the order that they're listed in the configuration.
>
> **[2:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=134)** However, we can override this behavior with a parallel directive, which allows multiple steps to be run at the same time.
>
> **[2:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=142)** One thing to keep in mind regarding steps, each pipeline configuration is limited to 100 steps.
>
> **[2:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/bitbucket-pipelines-configuration?u=76281980&t=149)** Let's continue exploring the pipeline configuration and the Bitbucket web interface.

> [!info]- Semantic Content
>
> **Code Keywords:** override (1), let (1), continue (1), interface (1)
> **CLI Commands:** find (2), docker (1)
> **Tools:** bitbucket (3)
> **Env Vars:** yaml (2)
> **Prerequisites:** configure (1), required to (1)
> **File Paths:** bitbucket-pipelines.yml (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Configure pipeline stages
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=0)** - [Instructor] I'm logged into my Bitbucket account and I'm viewing a previous run of the starter pipeline configuration.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=6)** From this screen, I can see a visualization of the pipeline with the three integration steps running in parallel at the start of the pipeline, followed by two deployment steps.
>
> **[0:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=17)** Right now, we only have one step per deployment, but if our deployments include multiple steps, we can group them together using stages.
>
> **[0:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=28)** I've used the exercise files for this lesson to update the pipeline configuration.
>
> **[0:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=34)** With this updated pipeline, the deployment steps have been moved into stages.
>
> **[0:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=40)** Opening one of the stages shows all the steps that are grouped together here.
>
> **[0:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=44)** Let's take a look at this configuration.
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=54)** The new configuration uses the stage keyword to group all the steps together for the staging and production deployments.
>
> **[1:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=61)** In the production stage that we're currently viewing, the manual trigger has been moved from the step where it was previously located to the stage section.
>
> **[1:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/configure-pipeline-stages?u=76281980&t=70)** Now when this manual trigger is activated, all the steps in this section will be run sequentially.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Configure pipeline triggers
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=1)** - [Instructor] Let's look at some of the ways we can trigger Bitbucket pipelines.
>
> **[0:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=5)** The most common triggers are the default trigger, branches, and pull requests.
>
> **[0:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=12)** The default trigger is probably the most common pipeline start condition.
>
> **[0:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=16)** Often it's referred to as a commit trigger.
>
> **[0:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=19)** When this keyword is present, any pipeline configuration associated with it will be run on every commit to the repository.
>
> **[0:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=27)** The default trigger is useful for kicking off integration steps that need to be run frequently, like compiling software, linting code, or running security scans.
>
> **[0:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=38)** The branches trigger is used to run pipeline steps when a specific branch is updated.
>
> **[0:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=43)** The branch's keyword is followed by one or more branch names like main or develop.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=50)** We can also use patterns and wild cards to match multiple branches.
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=54)** If any matching branch is updated, the pipeline steps for that branch will be run.
>
> **[1:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=61)** If your workflow includes feature branches, for example, you can use the asterisk or star character to match the naming convention used for feature branches.
>
> **[1:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=70)** Of course, this can also be applied to other branches like bugs, hot fixes, or releases.
>
> **[1:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=78)** We can also trigger pipelines when a pull request is created.
>
> **[1:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=82)** Just like branch triggers, pull request triggers can use branch names and patterns.
>
> **[1:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=87)** Keep in mind though that for pull requests, the branch name pattern is applied to the branch representing the source of the pull request, not the target branch.
>
> **[1:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=97)** A special wild card pattern, two asterisks surrounded by single quotes, can be used to match all branches.
>
> **[1:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=105)** Just make sure those quotes are there, otherwise your YAML won't be formatted properly.
>
> **[1:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=112)** There are two other triggers that we can use to control our pipelines, after script and manual.
>
> **[1:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=118)** These triggers are used to manage automation in steps and stages, after a pipeline has already been started by another event.
>
> **[2:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=127)** An after script trigger is used in steps to run commands after all other script commands have completed.
>
> **[2:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=133)** After script commands are run if the script completes successfully or fails.
>
> **[2:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=138)** In this way, after scripts can be used to run commands that we always want to happen, like cleaning up build environments if a deployment fails or sending notifications every time a deployment completes.
>
> **[2:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=151)** Manual triggers are defined at the step or stage level using the trigger keyword followed by the keyword manual.
>
> **[2:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=160)** Any stage or step that uses a manual trigger will require a user to click a button in the Bitbucket web interface.
>
> **[2:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=168)** Manual triggers are useful for adding more control to a pipeline.
>
> **[2:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=173)** For example, we can use manual triggers to pause a pipeline, so an application update can be verified in a non-production environment.
>
> **[3:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=180)** Once the verification is complete, the pipeline can be allowed to continue with a deployment to a production environment.
>
> **[3:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=188)** Keep in mind that manual triggers can't be used in the very first stage or step in a pipeline.
>
> **[3:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=195)** Also, manual triggers can only be confirmed by someone with right access to the repository where the pipeline is running.
>
> **[3:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=204)** I've downloaded the exercise files for this lesson, and I'm using my local editor to view the Bitbucket pipelines configuration.
>
> **[3:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=212)** This configuration uses different pipelines based on new triggers.
>
> **[3:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=218)** The default trigger is on line three.
>
> **[3:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=221)** This pipeline will run for any commits that don't match a specific branch.
>
> **[3:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=226)** This pipeline will only run integration steps.
>
> **[3:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=231)** The branch triggers start on line 17 with a keyword branches.
>
> **[3:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=236)** Line 18 has a branch pattern for feature branches, and line 44 has a pattern for the main branch.
>
> **[4:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=245)** Commits from feature branches will run integration steps and also run a staging deployment.
>
> **[4:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=254)** Commits to the main branch will run the same steps followed by a production deployment using a manual trigger.
>
> **[4:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=263)** A pull request trigger starts on line 88.
>
> **[4:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=267)** This pipeline will run whenever a pull request is created using any branch as the source of the PR.
>
> **[4:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=273)** This pipeline includes integration steps, a stage for PR related tasks, and a staging deployment.
>
> **[4:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=280)** I've added this configuration to a repo and run pipelines using each of these triggers.
>
> **[4:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=286)** Let's check that out in the Bitbucket web interface.
>
> **[4:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=292)** I'm logged into my Bitbucket account and I've added the updated configuration.
>
> **[4:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=296)** If you're following along, pause the video here and take a look at the exercise files.
>
> **[5:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=301)** I've added all the steps you need to complete to update the configuration and run each pipeline.
>
> **[5:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=309)** This is the pipeline run after the feature branch has been updated.
>
> **[5:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=312)** We get the integration steps and the staging deployment.
>
> **[5:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=318)** I created a pull request using the feature branch.
>
> **[5:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=321)** In this pipeline, we get the integration steps and the staging deployment, but we also get a stage specifically for running pull request tasks.
>
> **[5:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=332)** Once the PR is merged, a pipeline is triggered from the update to the main branch.
>
> **[5:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=337)** This brings us back to the pipeline with integration tests, a staging deployment, and a production deployment.
>
> **[5:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=344)** The staging and production stages now have after script triggers.
>
> **[5:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=349)** In the event the deployment failed, we could put commands here to clean things up and send notifications.
>
> **[5:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=357)** And last but definitely not least, here's the default pipeline.
>
> **[6:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=362)** Now, if we commit to any branch that's not the main or a feature branch, we only get the integration steps.
>
> **[6:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/congiure-pipeline-triggers?u=76281980&t=369)** We can use this approach to make sure code is being kept to standard, while also saving a few billed minutes across across our account.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2), require (1), continue (1)
> **Tools:** bitbucket (5)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise files (2)
> **Warnings:** keep in mind (2)
> **Env Vars:** yaml (1)
> **Speakers:** - [instructor] (1)

#### Use YAML anchors
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=0)** - [Instructor] As you add more pipelines and triggers to a single file, you may start to see the same code being used in multiple places.
>
> **[0:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=8)** This is an excellent opportunity to use the DRY approach to software development.
>
> **[0:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=13)** In this case, DRY stands for Don't Repeat Yourself.
>
> **[0:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=19)** To keep our pipeline configurations DRY, we can use YAML anchors to create reusable steps.
>
> **[0:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=26)** YAML anchors are placed in the definitions block at the beginning of a pipeline configuration.
>
> **[0:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=32)** A step block identifies the reusable steps we want to create, and then each step is created with an anchor, which is identified by the ampersand character.
>
> **[0:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=42)** It also includes a name and a script.
>
> **[0:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=45)** Other step attributes can be included as well.
>
> **[0:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=49)** Using this approach, we can update code for a step in one place and immediately have the step updated across the pipeline configuration instead of making the same change in multiple places.
>
> **[1:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=62)** Once our anchors are in place, we can refer to them in multiple locations using a step block and then an asterisk character followed by the anchor's alias.
>
> **[1:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=73)** When the pipeline configuration is processed by Bitbucket, the reference to the alias will be replaced by the code and the anchor.
>
> **[1:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=81)** In some cases, we'll need to override top level values in a YAML anchor like the name.
>
> **[1:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=87)** There's a special YAML prefix we can use when we call the anchor's alias to start the override.
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=93)** The prefix is two less than signs followed by a colon.
>
> **[1:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=98)** Then we reference the anchor using its alias as usual.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=102)** Following that reference, we can provide keys and values that override the same value in the step.
>
> **[1:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=109)** Be sure to see the exercise files for more details on YAML anchors and overrides.
>
> **[1:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=117)** I'm viewing the exercise files for this lesson, particularly the YAML file with our pipeline configuration.
>
> **[2:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=124)** Line three starts the definitions block for our reusable pipeline steps.
>
> **[2:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=129)** Inside the definitions block are anchors for steps that are used in multiple places across the pipeline.
>
> **[2:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=135)** And if I scroll down a bit, we can see where these anchors are being referred to by their aliases.
>
> **[2:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-yaml-anchors?u=76281980&t=145)** As you continue developing pipelines, you'll see how YAML anchors make pipelines easier to understand and easier to maintain.

> [!info]- Semantic Content
>
> **Env Vars:** yaml (7), dry (3)
> **Code Keywords:** override (3), case, (1), continue (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** make (1)
> **Tools:** bitbucket (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=6)** - [Instructor] Did you like that theme music?
>
> **[0:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=8)** That means it's time for a challenge to apply what you've learned.
>
> **[0:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=12)** In this challenge, you're part of a software development team working on an open source application, the amazing mobile app.
>
> **[0:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=20)** The team is already using Bitbucket for code repositories, and now they're ready to start using Bitbucket pipelines to automate their CI CD workflows.
>
> **[0:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=30)** You've been assigned to create a pipeline configuration to help the team understand the capabilities of Bitbucket pipelines.
>
> **[0:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=37)** The configuration needs to include steps for continuous integration and continuous deployments to multiple environments.
>
> **[0:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=45)** The code also needs to be easy to maintain and visualize.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=50)** Here are the steps you need to take to complete this challenge.
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=54)** Log into Bitbucket and create a new public repository.
>
> **[0:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=59)** Create a pipeline configuration in the repo using the starter template.
>
> **[1:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=63)** Update the code to minimize code duplication wherever you can.
>
> **[1:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=69)** Then update the template using the following requirements.
>
> **[1:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=73)** Add pipeline start conditions for any commits to the main branch and all feature branches.
>
> **[1:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=79)** For the main branch, include build and integration steps that run at the same time.
>
> **[1:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=85)** Then, add pipeline sections that collect all steps for deployments to staging and production environments.
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=93)** Since the team wants their production deployments to be continuous, remove any settings that will require someone to take action for a deployment.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=102)** For any feature branch updates, run build and integration steps at the same time, followed by a deployment to the staging environment.
>
> **[1:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=110)** Remove deployments from any other pipeline triggers.
>
> **[1:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=114)** These events should only run build and integration steps.
>
> **[1:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=118)** You'll find all the details for this challenge in the exercise files.
>
> **[2:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=122)** This challenge should take about 15 minutes to complete.
>
> **[2:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline?u=76281980&t=126)** Give it a try and then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (4)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** cd (1), find (1)
> **Code Keywords:** public (1), require (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Create a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=6)** - [Instructor] Let's jump right in and solve this challenge.
>
> **[0:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=9)** I created a new repo and use the starter template to create a basic pipeline configuration.
>
> **[0:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=14)** I cloned the repo to my local system, so I'll go there now to edit the file.
>
> **[0:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=22)** I'm on my local system now and I'm editing the bitbucket-pipelines.yaml file.
>
> **[0:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=27)** The first thing I know I need to do is add triggers for branches.
>
> **[0:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=31)** I'll scroll down to the end of this file and then add the branches keyword.
>
> **[0:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=41)** The branches I want to target are any feature branches and the main branches, so I'll add the feature branch first and I need to add a wild card here to catch any feature branch that starts with this specific prefix, and then I'll add a placeholder for the main branches.
>
> **[1:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=63)** For these branches, we need to have build and integration steps that run at the same time which means they use the parallel directive.
>
> **[1:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=70)** I know that the default trigger in this particular pipeline already has a parallel setting in here, so I'm just going to copy this down to the branches that I just added.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=102)** And I'll clean this up a little bit so it's indented properly.
>
> **[1:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=119)** For the main branch, we need to group together all the stages that are associated with a deployment and the best way to do that is with stages.
>
> **[2:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=128)** So under main, I'll also add some stages and let's see where they need to go.
>
> **[2:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=133)** They need to be even with the parallel directive, so I will start here and add the stage keyword, and then we need to give our stage a name and we're also going to give it some steps.
>
> **[2:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=153)** And I'm just going to make a little template here because I know I'm going to be doing this for production and for staging, so I'm just going to copy that right up under here.
>
> **[2:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=163)** And then for this stage, I will call this one staging and for this one, I will call it production.
>
> **[3:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=183)** Now I'll start working on removing some of the code that would be duplicated in this pipeline.
>
> **[3:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=189)** If each of these branches is going to do build and integration, then those steps are the first targets for using YAML anchors.
>
> **[3:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=196)** And I think staging will also be used multiple times as well, so once for the feature branches and again, for the main branch.
>
> **[3:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=203)** So I'll make a YAML anchor for that one as well.
>
> **[3:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=207)** I'll start by going to the top of this file and adding my definitions placeholder, and we are defining steps in this particular case.
>
> **[3:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=218)** And now I'll copy all the steps that are currently under the parallel step in the default pipeline because these are the ones that we're going to reuse, so let me make sure I get these selected.
>
> **[3:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=232)** And I will copy these here and then I think they're going to be, I might need to indent them over one step, probably like that.
>
> **[4:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=248)** And now I need to create an anchor for these particular steps, okay?
>
> **[4:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=255)** And this anchor, I'm going to call it build_and_test and then for this one, I'll just call it, if I can get the right character, I will call it lint, and then for this one, I will call it security_scan.
>
> **[4:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=279)** Okay, now let's add the anchor for the staging step.
>
> **[4:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=284)** We've got this deployment to staging, so I will copy this one as well and go back up to the definition section, paste this in, and I will call this one Deploy to Staging or rather how about Deployment to Staging to match the name that's already there.
>
> **[5:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=310)** The production deployment only happens once, so I'm going to get a little lazy on that one, and I won't create a YAML anchor for that one.
>
> **[5:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=320)** But now that we have these YAML anchors, let's replace any code there already in our pipeline with the correct alias.
>
> **[5:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=330)** So here under the default step, I can get rid of all of this code.
>
> **[5:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=336)** Not all of that code, all of this code here and all of this code here, and I can replace this now with the alias for build_and_test.
>
> **[5:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=351)** And then the next one I think was lint and then the next one.
>
> **[5:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=358)** It is not build_and_test, it is lint, and then the next one or the very last one was security_scan I believe.
>
> **[6:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=368)** All right, and I know these steps are definitely used elsewhere as well in the feature branch section, in the main branch section, so what I will do is I will copy these and paste them down below.
>
> **[6:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=384)** Okay, so here's my parallel step and I'm just going to select all of this code here that I'm going to replace, and I will paste in the aliases.
>
> **[6:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=393)** I need to tab them in so they're in the correct spot.
>
> **[6:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=397)** I think that looks good, and actually I'll just copy this again because I want to put these same steps under main.
>
> **[6:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=407)** Okay, I think that looks pretty good.
>
> **[6:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=412)** Now let's get rid of some of these other deployments.
>
> **[6:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=415)** We had a requirement to only have the feature branch deploy to staging.
>
> **[7:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=420)** The main branch is going to deploy to staging, but any other branches don't need to do deployments.
>
> **[7:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=425)** So what I will do is I will get rid of this step here from the default pipeline and I will move this production deployment down to the main branch under the Production stage.
>
> **[7:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=440)** So let's make sure this guy gets pasted in here correctly.
>
> **[7:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=446)** Clean this up as needed.
>
> **[7:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=449)** Okay, I think that looks good, and for staging in this case, well, let's do production, or rather let's do the feature one first because what I'll do here, all this guy needs to do is have a step for deployment_to_staging.
>
> **[7:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=476)** And I think I'm getting pretty close here to being ready to check this file in and actually run this pipeline.
>
> **[8:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=482)** There was one more requirement though.
>
> **[8:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=484)** We needed to remove any manual triggers.
>
> **[8:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=487)** I know that there's this particular trigger here under Production, so I'm just going to delete that line and that satisfies that requirement to remove the manual triggers.
>
> **[8:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=498)** But I'll do one more check here to make sure everything looks good.
>
> **[8:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=501)** Default doesn't have any deployments.
>
> **[8:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=504)** The feature branch, actually yeah, I'm glad I caught that.
>
> **[8:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=507)** This one would've been under the parallel step.
>
> **[8:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=509)** That's not where we want that.
>
> **[8:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=510)** I want to pull that out here so that it runs after all of these steps that are running in parallel and let me make sure I did that for the main branch as well.
>
> **[8:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=521)** Well, the main branch has stages so I think we're going to be good there, but I didn't add any steps for staging, there I go.
>
> **[8:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=528)** Let's copy this line here and then add that as a step under the Staging stage.
>
> **[8:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=539)** Okay, and it's in the right spot.
>
> **[9:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=541)** So with that, I think we're good to go ahead and commit this file, push it back to the repo, and then take a look at how these pipelines are actually going to run.
>
> **[9:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=551)** I'm back in the bitbucket web interface now and I'm viewing the Branches page for this repo.
>
> **[9:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=556)** After I pushed the updated configuration to the repo, I created branches to test each pipeline trigger.
>
> **[9:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=562)** I created a feature branch and a bugfix branch.
>
> **[9:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=566)** Each branch creation trigger the pipeline and the results should match the specifications we added.
>
> **[9:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=572)** The bugfix branch should only run integration steps.
>
> **[9:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=575)** The feature branch should only run integration steps and a deployment to staging and the main branch should run integration, deployment to staging, and a deployment to production.
>
> **[9:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=586)** Let's take a look at each one of these pipeline runs.
>
> **[9:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=594)** I'm looking at the pipeline run now for the bugfix branch and sure enough, we only get these parallel steps that were run, Build and Test, Lint, and Security Scan, so this one is running correctly.
>
> **[10:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=605)** Let's take a look at the feature branch run.
>
> **[10:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=612)** In the feature branch pipeline run, we get those expected integration steps running at the start of the pipeline and then we get that expected deployment to staging.
>
> **[10:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=621)** Now let's take a look at the main branch run.
>
> **[10:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=626)** Okay, this is the final pipeline run we need to test.
>
> **[10:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=629)** This is the main branch and sure enough, we get integration, we get that deployment to staging, and we get the production deployment.
>
> **[10:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=635)** The other thing to note about this production deployment is that it does not have a manual step.
>
> **[10:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=641)** So this is, its true continuous deployment in this case.
>
> **[10:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=645)** It doesn't have any manual interaction with this particular pipeline.
>
> **[10:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline?u=76281980&t=648)** So after updating the pipeline configuration and then creating branches to test the start condition requirements, I will say that this challenge has been successfully solved.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case. (2), case, (1), delete (1), interface (1)
> **CLI Commands:** make (6)
> **Code Identifiers:** build_and_test (3), security_scan (2), deployment_to_staging (1)
> **Env Vars:** yaml (4)
> **Tools:** bitbucket (2)
> **Exercise Files:** template (2)
> **File Paths:** bitbucket-pipelines.yaml (1)
> **UI Navigation:** scroll down (1)


### 2. Working with Variables and Artifacts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Variables and secrets
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=0)** - [Instructor] To keep our pipelines flexible, we can use variables.
>
> **[0:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=5)** We refer to variables in our pipeline configuration using a dollar sign character, followed by the variable name.
>
> **[0:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=11)** Using all capital letters for a variable name is a common practice.
>
> **[0:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=15)** Capital letters can make variables easier to find in a pipeline configuration.
>
> **[0:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=20)** You might also see variables wrapped in curly braces.
>
> **[0:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=24)** This also helps variable names stand out among other text.
>
> **[0:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=28)** In our pipelines, we'll reference predefined variables, user-defined variables and secrets.
>
> **[0:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=36)** Each pipeline comes with a set of predefined or default variables we can refer to as needed in steps and scripts.
>
> **[0:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=45)** Most of these variables hold values that relate to the current pipeline run or an active pipeline step.
>
> **[0:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=52)** This includes variables like the current build number and the hash of the commit that started the pipeline.
>
> **[0:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=59)** Check the exercise files for a reference listing all of the default variables.
>
> **[1:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=64)** We can also define our own variables to pass configuration details into our pipelines at runtime.
>
> **[1:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=71)** These might be values that represent an application setting or a username.
>
> **[1:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=78)** Secrets are special variables that help us protect sensitive details like API keys and passwords.
>
> **[1:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=85)** When secret variables are added, the values will be covered by dots, and a padlock icon will be next to the name.
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=93)** Secret values are also obscured in pipeline logs and output.
>
> **[1:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=99)** Pipeline variables can be defined for workspaces, repositories, and deployments.
>
> **[1:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=106)** Variables defined at the workspace level are available to all repositories in the workspace.
>
> **[1:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=112)** Workspace variables are useful for sharing values across multiple repos with pipelines that all need to reference the same values.
>
> **[2:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=122)** Repository variables can only be referenced in the repo where they're defined.
>
> **[2:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=126)** This is perfect for keeping configuration values close to the code for specific applications and their CI/CD pipelines.
>
> **[2:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=134)** Deployment variables are even more localized and can only be used in the deployment environment where they're defined.
>
> **[2:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=141)** This is most useful when the same code and pipelines are being used to build and deploy applications in different environments.
>
> **[2:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=149)** Each deployment can be tailored specifically for the target environment without having to make changes to the code or the pipeline configuration.
>
> **[2:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=158)** Variables can be overridden if the same name is defined in multiple locations.
>
> **[2:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=163)** For overrides, the highest order of precedence is given to deployment variables, followed by repository variables, then workspace variables.
>
> **[2:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=172)** And finally, predefined variables are given the least precedence.
>
> **[2:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=177)** I'm logged into my Bitbucket account and I'm on the Workspace Overview page.
>
> **[3:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=182)** To set variables from here, I'll select this cog in the upper right-hand corner, and then I'll select workspace settings.
>
> **[3:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=194)** I'll scroll down the page a bit, and on the left sidebar, under Pipelines, I'll select Workspace variables.
>
> **[3:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=204)** The Workspace Variables page lists the values that are available to all repos in this workspace.
>
> **[3:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=210)** Let's check out variables scope to a repository.
>
> **[3:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=217)** I'm viewing a repository now, and to see the repository variables, I'll select Repository settings from the left side menu.
>
> **[3:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=227)** I'll scroll down to almost the end of the page, and under Pipelines, I'll select Repository variables.
>
> **[3:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=235)** Of course, these variables are scoped to this repository, and to get to the deployment variables, I'll select Deployments on the left side menu, and I'll scroll down a bit to see the environments that are available here.
>
> **[4:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=251)** To see the variables here, we would select the environment we're interested in configuring.
>
> **[4:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=260)** To get a better idea of how all the variables we've seen are applied, let's look at a pipeline run.
>
> **[4:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=269)** I'm viewing the log for a completed pipeline, and I've selected a step in the production stage.
>
> **[4:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=275)** If I open up the build setup step in the log and scroll down just a little bit, I get a listing of all the variables that are available to this step in order of precedence from least to greatest.
>
> **[4:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=288)** That is, starting with a default or predefined variables, all the way down to the deployment variables.
>
> **[4:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/variables-and-secrets?u=76281980&t=295)** If you ever have problems with variables in a pipeline, start your debugging here to see what variables are exposed for each build step.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (4), select the (1)
> **CLI Commands:** make (2), find (1), cd (1)
> **Code Keywords:** let (2), pass (1), finally, (1)
> **Env Vars:** api (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### Use environment and deployment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=0)** - [Instructor] Deployment variables help us to develop pipelines that use the same steps for different environments.
>
> **[0:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=7)** By using override capabilities, we can use the same variable name with different values for the targeted environments.
>
> **[0:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=14)** For pipelines that deploy to multiple environments, we might be inclined to create pipeline steps specific to each environment.
>
> **[0:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=23)** But if those steps share the same code and commands, then our pipeline isn't dry, meaning we haven't followed the software development tenant, don't repeat yourself.
>
> **[0:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=33)** Instead, we can use deployment variables and YAML anchors to streamline the code in a way that allows us to use the same step for multiple environments.
>
> **[0:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=43)** By tagging steps or stages with the appropriate deployment label, the variables for that environment become available to that step or all the steps inside a stage.
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=54)** Let's see how to apply this in a demo.
>
> **[0:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=58)** I'm logged into my Bitbucket account and I've selected the deployments tab in the repository settings for this repo.
>
> **[1:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=65)** Environments are collected into three groups, test, staging, and production.
>
> **[1:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=70)** By default, Bitbucket creates environments with a name corresponding to each of these groups.
>
> **[1:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=76)** To add variables to an environment, we just select that environment and then scroll down to the variable section.
>
> **[1:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=87)** I've already added a variable named domain to each environment, but with different values.
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=93)** We can also add additional environments.
>
> **[1:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=96)** All we have to do is select add environment under the targeted group and enter a name.
>
> **[1:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=104)** Let's add a low testing environment in the staging group, and after we enter the name, all we have to do is select the check mark to complete the process, and then in this environment, we can also add variables.
>
> **[2:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=127)** Now I'm viewing the pipeline and configuration for this repository on my local system.
>
> **[2:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=135)** Line 5 starts the definition for a step that we can reuse in our pipeline.
>
> **[2:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=140)** This step references a default variable and a deployment variable.
>
> **[2:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=145)** The value of the deployment variable will be determined by the environment that uses this step.
>
> **[2:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=154)** Moving down to lines 13 and 17, this is where our deployment step is called.
>
> **[2:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=161)** Because each step includes the deployment keyword followed by the target environment, any variables defined in that environment will be available to the step.
>
> **[2:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=171)** Let's take a look at a run of this pipeline to see the results.
>
> **[2:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=179)** Now I'm back in the Bitbucket web interface, viewing the production step of a completed pipeline run.
>
> **[3:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=186)** With the output from the steps displayed, we can see how the values for the production environment were applied as expected.
>
> **[3:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-environments-and-deployment-variables?u=76281980&t=193)** We would see similar results for the staging deployment as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (1), default, (1), interface (1)
> **Tools:** bitbucket (3)
> **UI Navigation:** scroll down (1), select the (1)
> **Env Vars:** yaml (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Create and share artifacts
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=0)** - [Instructor] Whenever a pipeline step writes a file to disk, we refer to that file as an artifact.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=6)** An artifact can be a compiled executable, an archive like a JAR or ZIP file, or it might even be a text file with log messages.
>
> **[0:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=16)** By default, artifacts created in one step are available to other steps in the pipeline.
>
> **[0:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=23)** By creating an artifact once and sharing the artifact between steps, we can minimize our pipeline runtimes.
>
> **[0:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=31)** This saves build minutes and makes pipelines more manageable.
>
> **[0:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=36)** An artifacts block, followed by a list, identifies the files to be treated as artifacts.
>
> **[0:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=45)** Predefined variables can come in handy when we need to specify names for artifacts created by a build step.
>
> **[0:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=52)** Just note that variables can't be used in the artifacts list.
>
> **[0:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=57)** However, we can use wild cards to capture files by their extension.
>
> **[1:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=62)** Wildcard can also be used to identify multiple files inside a directory.
>
> **[1:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=67)** Keep in mind that any list item that starts with a wildcard needs to start and end with single quotes.
>
> **[1:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=75)** After an artifact is created, we can access it in any following steps.
>
> **[1:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=80)** In these cases, we can use variables in the script section to use the same file names used by previous steps.
>
> **[1:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=88)** Let's go to the Bitbucket web interface and review the output of a pipeline with artifacts.
>
> **[1:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=95)** In this short pipeline run, we have two steps, one creating artifacts and another using them.
>
> **[1:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=101)** One difference we can notice right away is this Artifacts tab.
>
> **[1:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=107)** This provides us with a list of the artifacts that were collected from this step, along with a way to download them directly.
>
> **[1:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=119)** We also get details on artifacts in any following step.
>
> **[2:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=130)** This build setup step shows us the artifacts being downloaded.
>
> **[2:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-share-artifacts?u=76281980&t=140)** And of course, the step output will show exactly how the artifacts were used in the pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1), let (1), interface (1)
> **Env Vars:** jar (1), zip (1)
> **Warnings:** note that (1), keep in mind (1)
> **Tools:** bitbucket (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Create and download packages
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=0)** - [Instructor] Using artifacts is a good practice for speeding up pipelines and making items available to use after a pipeline has completed.
>
> **[0:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=9)** But artifacts aren't the most practical option for long-term use.
>
> **[0:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=14)** Accessing an artifact after a pipeline has completed requires you to know the specific pipeline run and the specific step where an artifact was created.
>
> **[0:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=23)** Also, artifacts are only available for 14 days after they're created.
>
> **[0:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=29)** This helps minimize storage utilization, but isn't ideal if an artifact needs to be accessed more than two weeks after it's created.
>
> **[0:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=38)** In these cases, packages offer a much better solution.
>
> **[0:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=43)** Packages are artifacts that are exposed by the downloads feature in Bitbucket.
>
> **[0:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=49)** Using the Downloads page, we can access packages from a consistent location whenever we need to.
>
> **[0:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=56)** In public repos, packages on the Downloads page can be accessed by anyone that can reach the URL making packages especially useful for open source projects to share software releases, compiled binaries and archives.
>
> **[1:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=72)** Packages are also available indefinitely.
>
> **[1:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=75)** However, we do have to take into consideration any storage limits in place for our Bitbucket account.
>
> **[1:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=81)** By default, packages are automatically created for the entire repository as well as any active branches or tags.
>
> **[1:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=89)** We can also create new packages by uploading files from our local system or adding them directly from a pipeline.
>
> **[1:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=98)** Uploading files from a local system or from a pipeline requires write access to the repo.
>
> **[1:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=105)** For pipeline uploads, we also need to have an access token in place.
>
> **[1:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=109)** The access token is essentially an API key that gives a pipeline permission to use Bitbucket features.
>
> **[1:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=117)** With the access token saved as a deployment or repository variable, we can use the token in a special pipeline step, called a pipe.
>
> **[2:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=126)** Bitbucket pipes are docker images designed specifically for use as a step in a Bitbucket pipeline.
>
> **[2:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=133)** Just like normal Docker images, pipes are prebuilt reusable components that allow us to add specific functionalities to our pipelines with minimal configuration.
>
> **[2:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=144)** For pipeline uploads, we'll use the bitbucket-upload-file pipe.
>
> **[2:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=149)** The pipe contains all the code needed to use the uploads API.
>
> **[2:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=154)** Instead of having to write our own code every time, we can just pass variables and parameters to the pipe whenever we need to upload a file.
>
> **[2:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=162)** from a pipeline step.
>
> **[2:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=165)** Let's use a demonstration to see how access tokens, pipes, uploads, and downloads all come together.
>
> **[2:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=173)** Let's start by creating an access token.
>
> **[2:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=176)** I'm logged into my Bitbucket account and I'm on the homepage of the repository I'll be using for this demonstration.
>
> **[3:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=182)** From here, I'll select Repository settings.
>
> **[3:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=186)** And then, Access tokens.
>
> **[3:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=189)** On this page, I'll select Create Repository Access Token.
>
> **[3:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=195)** I'll give the token a label and then set the permissions.
>
> **[3:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=200)** To keep access as limited as possible, I'll only give this token write permission for repositories.
>
> **[3:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=208)** This is the minimum permission needed for a pipeline to upload a file to the repository.
>
> **[3:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=215)** Now, I'll scroll down a little bit and select Create.
>
> **[3:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=220)** After I select Create, the password is displayed.
>
> **[3:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=223)** This is the only time the password will be visible, so I need to capture it and save it in a secure location.
>
> **[3:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=230)** I'll select these stack squares here to copy the password to my clipboard.
>
> **[3:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=235)** And I'll immediately save it as a repository variable.
>
> **[3:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=239)** So, I'll select out of this page, scroll down a little bit, and select Repository variables.
>
> **[4:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=249)** I'm on the Repository variables page now, and from here, I'll create a variable with the name BITBUCKET_ACCESS_TOKEN, and paste in the value for the password.
>
> **[4:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=264)** The password is a sensitive value, so, I'll keep the secured option in place and select Add.
>
> **[4:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=273)** Now, let's use this token in a pipeline.
>
> **[4:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=278)** In this two-step pipeline, we'll create an artifact in the first step, naming it with default variables for the branch and the ID of each pipeline run.
>
> **[4:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=287)** We'll use a wild card for the artifact specification, since we can't use variables in that part of the configuration.
>
> **[4:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=294)** In the second step, we call the pipe for Bitbucket upload file.
>
> **[4:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=298)** The configuration for the pipe uses the repository variable we just created for the access token.
>
> **[5:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=304)** We also use a wild card to specify the name for the zip package.
>
> **[5:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=308)** Let's see the results of this pipeline.
>
> **[5:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=312)** I'm back in the Bitbucket web interface now viewing the pipeline run after updating the pipeline configuration.
>
> **[5:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=319)** Let's go straight to the output for the second step to see the output for the pipe.
>
> **[5:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=324)** And let's open up this display a little bit so we can see all of this output.
>
> **[5:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=329)** And I'll scroll down to the bottom to see the last few lines of the log.
>
> **[5:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=333)** In the last few lines of this log, we can see the indicators that the pipe has completed the upload successfully.
>
> **[5:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/create-and-download-packages?u=76281980&t=340)** We could use the link provided here, but if we open the sidebar, and select Downloads, we can get to the Downloads page and see all the packages available for downloading, including the package we just created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (1), default, (1), pass (1), interface (1)
> **Tools:** bitbucket (9)
> **Env Vars:** api (2), url (1), bitbucket_access_token (1)
> **UI Navigation:** scroll down (3), open the (1)
> **CLI Commands:** docker (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)

#### Challenge: Deploy an artifact
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=6)** - [Presenter] I got to admit, that theme song is music to my ears because I know that a perfectly timed challenge is right around the corner.
>
> **[0:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=15)** In this challenge, you'll continue your role as the CICD subject matter expert for the amazing mobile app development team.
>
> **[0:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=23)** The dev team is making great progress with the pipeline configuration you created in the previous challenge, and the rest of the company is buzzing with interest.
>
> **[0:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=33)** Now the plugin team needs help updating their continuous delivery workflow.
>
> **[0:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=38)** Their goal is to share plugins as packages that anyone in the community can download.
>
> **[0:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=43)** With your knowledge of Bitbucket Pipelines, the team is confident you can help.
>
> **[0:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=49)** Take these steps to complete the challenge.
>
> **[0:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=52)** Log into Bitbucket and locate the repository you created in the previous challenge.
>
> **[0:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=57)** Start by creating an access token for the repository that your pipeline can use to create a download.
>
> **[1:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=64)** Make sure the access token has the correct permissions and is stored securely.
>
> **[1:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=69)** Update the pipeline configuration to create an artifact in the build and test step.
>
> **[1:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=74)** The artifact should be a zip file of the working directory, starting with the name plugin, followed by the build number and the .zip extension.
>
> **[1:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=84)** Then update the production stage to create a package using the zip file.
>
> **[1:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=90)** Run the pipeline and confirm that the package was created and can be downloaded by anyone that has access to the URL.
>
> **[1:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=99)** You'll find all the details for this challenge in the Exercise Files.
>
> **[1:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=103)** This challenge should take about 20 minutes to complete.
>
> **[1:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=106)** I've got a feeling, though, that you'll sail through this challenge with time to spare.
>
> **[1:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-deploy-an-artifact?u=76281980&t=111)** Do your best, then join me in the next video for the solution.

> [!info]- Semantic Content
>
> **Exercise Files:** zip file (2), exercise files (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** cicd (1), url (1)
> **Tools:** bitbucket (2)
> **Code Keywords:** continue (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Deploy an artifact
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=0)** - [Instructor] In this challenge, we need to create a downloadable package.
>
> **[0:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=9)** I'm working in the same repository that I used for the previous challenge.
>
> **[0:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=15)** I've got the exercise files downloaded to my local system.
>
> **[0:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=22)** And I've also cloned the challenge repo to my local system so I can push changes from here.
>
> **[0:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=27)** Let's get started in the web interface.
>
> **[0:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=34)** I'm in the web interface for the repo, and I'll start by creating the access token.
>
> **[0:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=39)** From the sidebar menu, I'll select repository settings, and then access tokens, and then create repository access token.
>
> **[0:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=48)** I need to give this token a name, so I'll call it "upload."
>
> **[0:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=54)** And a best practice is to give this token the least privileges that it needs.
>
> **[0:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=58)** And for a pipeline to push a file to the download section, we need to give it at least write access.
>
> **[1:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=65)** So I'll select "write" under the repository section.
>
> **[1:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=69)** And then I just need to scroll down here and select "create."
>
> **[1:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=76)** So I have my access token visible now, and this is the only time that I can see it.
>
> **[1:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=81)** So I need to copy it from here and store it securely in a place where my pipeline can access it.
>
> **[1:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=88)** So I'm going to select these stack squares here to copy it to my clipboard.
>
> **[1:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=92)** And then I need to create a repository variable.
>
> **[1:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=95)** So I'll click away from this screen and I'll scroll down, or perhaps up to find repository variables.
>
> **[1:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=103)** I know it's over here somewhere.
>
> **[1:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=104)** There it is.
>
> **[1:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=105)** Repository variables.
>
> **[1:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=106)** And now I can create a variable where I can store this particular token.
>
> **[1:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=113)** I'm going to use the name "Bitbucket Access Token," and then I will paste in the value for the token.
>
> **[2:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=122)** I want to make sure that this check mark that says "secured" is definitely active, because I want this value to be treated as a secret and hidden in any log output or anything like that.
>
> **[2:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=133)** I don't want it to be visible.
>
> **[2:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=135)** So we definitely want to have that secured.
>
> **[2:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=137)** But with everything in place from this screen, I will select "add."
>
> **[2:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=142)** Now that we have the token in place, let's update the pipeline configuration so we can create this download.
>
> **[2:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=153)** So I'm in my local editor now, and I'm looking at the exercise files for this particular challenge.
>
> **[2:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=160)** And I know that I'm going to need to use this particular snippet here, this code snippet, where we're updating the build and test step to actually zip up the directory, the working directory of this particular pipeline run, and create this zip file.
>
> **[2:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=176)** It has the specified name in here, plugin with a dash, followed by a default variable, which this variable holds the build number for this particular pipeline run.
>
> **[3:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=187)** So we'll get a new number.
>
> **[3:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=189)** Every time the pipeline runs, this number will be replaced.
>
> **[3:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=193)** So that's good.
>
> **[3:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=195)** And then we're also creating an artifact with this step.
>
> **[3:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=197)** We're creating the artifact with the name "plugin."
>
> **[3:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=200)** We're using a wild card here, because this Bitbucket build number is going to be different for every particular run.
>
> **[3:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=206)** And we can't put variables in this section, so we got to put that wild card there, followed by .zip as well.
>
> **[3:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=211)** So I'm just going to copy this to my clipboard and then I'm going to go over to the pipeline configuration for this particular repo.
>
> **[3:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=219)** And let's see where we need to add it.
>
> **[3:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=221)** This is a YAML anchor step.
>
> **[3:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=224)** So I'm going to go to the top where I have this build and test step defined, and I'm going to paste that new step in here.
>
> **[3:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=231)** It fits perfectly, but I do have to fix my YAML a little bit.
>
> **[3:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=236)** I think I'm going to try to do that a little bit differently here.
>
> **[3:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=239)** Let me add a new line there.
>
> **[4:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=240)** Select this again and paste.
>
> **[4:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=243)** That looks much better.
>
> **[4:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=244)** No errors now.
>
> **[4:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=245)** And I think that is a valid YAML.
>
> **[4:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=249)** So after cleaning up my file here just a little bit, and putting some spaces in, and pasting stuff in, I think this is indeed a valid YAML.
>
> **[4:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=258)** Now that we have a step that creates the artifact, we also need to use this artifact to create the package.
>
> **[4:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=266)** And if I go back to the exercise file, there was another snippet that they gave us here.
>
> **[4:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=271)** I can select this one.
>
> **[4:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=273)** This is the pipe where we're actually calling this Bitbucket upload file pipe, and we're passing in the variable that we just created that has the access token in it.
>
> **[4:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=284)** And it also is going to look for any zip file that's located in the working directory for this particular pipeline.
>
> **[4:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=289)** And it will use that, the access token, the file, and all the code that's sort of bundled up in this pipe to create the upload for us.
>
> **[4:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=298)** So let's copy this and then go back to the pipeline configuration.
>
> **[5:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=303)** Now I need to scroll down.
>
> **[5:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=305)** I think in this file there was only one place that production was used in the pipeline.
>
> **[5:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=309)** Here it is.
>
> **[5:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=310)** So this is where we're going to drop this step.
>
> **[5:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=313)** Let me paste it in here.
>
> **[5:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=315)** I'm going to, well actually, we can make it part of this particular script.
>
> **[5:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=319)** And I guess this is where it's kind of the artistry of creating a pipeline.
>
> **[5:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=324)** We can either create a new step for this particular pipe, or we can add this as a script to the step that's already in place.
>
> **[5:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=332)** I'm going to take the lazy route and just put this as another script step in this one step that we already have in place.
>
> **[5:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=339)** So I believe that should give us the result that we need though by running this pipe and creating the upload.
>
> **[5:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=345)** So let me save this file now, and then I will go to my terminal.
>
> **[5:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=353)** Okay, I'm in my terminal now.
>
> **[5:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=355)** I'm going to run git status real quick, and I do have the modified pipeline file.
>
> **[6:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=360)** If I ran git diff on that I would probably see the changes there I added.
>
> **[6:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=366)** I updated the build and test step, and I updated the production deployment script.
>
> **[6:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=373)** So this all looks good to me.
>
> **[6:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=375)** I'm going to quit out of here.
>
> **[6:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=376)** Let's clear the screen and then I'm going to git add all of these changes.
>
> **[6:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=382)** Let's git commit with a message that says "create package," how about that?
>
> **[6:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=389)** And now let's push this up to the repo.
>
> **[6:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=396)** Okay, the push looks good.
>
> **[6:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=397)** Let's go back to the Bitbucket web interface.
>
> **[6:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=402)** Check out this pipeline run and make sure our download gets created the way that we expect.
>
> **[6:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=417)** I'm back in the Bitbucket web interface now and my pipeline is running.
>
> **[7:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=421)** That's always a good sign.
>
> **[7:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=422)** I didn't have any YAML errors or anything like that.
>
> **[7:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=424)** Let's wait for this pipeline to complete.
>
> **[7:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=433)** Okay, the pipeline has completed and we see that green check mark there letting us know that all steps were successful.
>
> **[7:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=440)** Let's start by selecting the build and test step.
>
> **[7:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=443)** And sure enough, we do see an artifacts tab here.
>
> **[7:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=446)** That's what we would expect to see on this tab, plugin*.zip, meaning that this artifact was indeed created.
>
> **[7:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=454)** So let's go now to the production step.
>
> **[7:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=457)** The deployment to production where we actually use that artifact.
>
> **[7:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=461)** We can check a couple things here under the build set up.
>
> **[7:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=464)** We can go, in this particular log, we should see some output.
>
> **[7:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=469)** Yes, the artifact plugin*.zip was downloaded, and we can see the size for that download there.
>
> **[7:56](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=476)** And now let's close this step and go to the pipe step.
>
> **[8:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=483)** Because this is like key to our whole operation, right?
>
> **[8:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=485)** We need to make sure that this pipe runs successfully and uses that access token to upload the file.
>
> **[8:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=492)** Sure enough, the pipe starts to execute.
>
> **[8:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=495)** It uploads the file and the upload is successful.
>
> **[8:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=498)** Now, we do have this link here that we can select to actually download the file, but the better way to probably look at this is to go to the downloads page, because this is where we would normally go to to see this type of of package.
>
> **[8:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=514)** And there is the plugin file.
>
> **[8:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=516)** It's got the seven there as the indicator, the number for that last pipeline run.
>
> **[8:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=521)** This challenge also asked us to confirm that anyone can download this file.
>
> **[8:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=526)** Since this is a public repo, if we place a file in the download section, then anybody should be able to access that file.
>
> **[8:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=534)** So what I'll do is I will right click the link here and I'll copy the link address.
>
> **[9:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=540)** Now, I'll go to an incognito window or a guest window in my browser and see if I can access the download from there.
>
> **[9:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=550)** Okay, I've got my guest window open now.
>
> **[9:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=553)** Let's paste in the URL for that zip.
>
> **[9:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=557)** And sure enough, we get the download that's starting.
>
> **[9:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=560)** I'm going to save that to my downloads folder.
>
> **[9:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=563)** And sure enough, we can get that.
>
> **[9:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=566)** There's the download right there, and I could access it if I needed to.
>
> **[9:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=569)** So let's go back to the repo and just kind of review things a little bit.
>
> **[9:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=575)** Okay, back in the repo, to review, we started this challenge by creating an access token.
>
> **[9:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=581)** I just named it upload.
>
> **[9:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=582)** I made sure that this particular token had all of the permissions that it needed to write to the download section of this repository.
>
> **[9:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=590)** And then with that access token in place, I actually saved it as a repository variable with the name "Bitbucket Access Token" so then we can refer to it from our pipelines.
>
> **[10:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=601)** And very specifically, we added a step to our production stage in the pipeline configuration that called the Bitbucket Upload file pipe.
>
> **[10:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=612)** And the variables that we passed to this pipe were indeed the Bitbucket Access token and the name of the file that we wanted to upload to the downloads section of our repository.
>
> **[10:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-deploy-an-artifact?u=76281980&t=625)** So with all of these steps in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), interface (4), public (1)
> **Tools:** bitbucket (8), terminal (2)
> **CLI Commands:** make (4), git (4), find (1)
> **UI Navigation:** go to (5), scroll down (3)
> **Env Vars:** yaml (5), url (1)
> **Exercise Files:** exercise files (2), zip file (2), exercise file (1), download the (1)
> **Cross-References:** go back to (4)
> **Definitions:** is a  (3)


### 3. Configuring Build Environments

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Use default images and tools
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=0)** - [Instructor] Every step in a Bitbucket pipeline is run in a docker container.
>
> **[0:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=4)** Using containers and pipelines allows us to have consistent reproducible build environments isolated from previous pipeline runs.
>
> **[0:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=13)** This isolation ensures that each pipeline step starts from a known good state.
>
> **[0:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=20)** We can specify a container image globally, at the beginning of a pipeline, or we can specify an image to use in an individual step.
>
> **[0:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=29)** Because the image keyword is optional, we aren't required to specify an image every time we add a step to a pipeline.
>
> **[0:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=37)** If no image is defined, then Bitbucket will use a default image for us.
>
> **[0:44](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=44)** The default images used by Bitbucket pipelines are maintained by Atlassian and hosted on Docker hub.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=50)** The default image is based on the Ubuntu Linux operating system.
>
> **[0:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=55)** This means we can access standard Linux commands in our pipeline along with additional commands that get installed, so we can use them out of the box.
>
> **[1:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=64)** The tools installed include build tools we can use for developing and compiling applications, web tools that we can use for gathering or transferring data, and general utilities that our scripts might need to process text or create artifacts.
>
> **[1:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-default-images-and-tools?u=76281980&t=80)** Check out the exercise files for more details on the tools included with the default images and a pipeline configuration you can use to inspect build environments.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (3)
> **CLI Commands:** docker (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Use public and custom images
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=0)** - [Instructor] Atlassian provides a default image for pipelines with some tools already installed.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=6)** More than likely, though, your projects will need additional tools to build, compile or deploy your software.
>
> **[0:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=12)** In these cases, you'll either install your tools at runtime or select another image for your pipeline steps.
>
> **[0:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=20)** Since the default image is based on Ubuntu, we can use Ubuntu's advanced packaging tool, better known as APT, to install just about any Linux-based tool or application needed by a pipeline.
>
> **[0:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=32)** In this example, the pipeline is installing the Rust compiler.
>
> **[0:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=37)** The Pipeline runs apt-get update, followed by apt-get install -y in the name of the package.
>
> **[0:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=46)** After the update and the installation, we can use the tool in our pipeline steps as needed.
>
> **[0:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=52)** Installation for other tools would follow a similar format.
>
> **[0:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=57)** However, keep in mind that each step of a pipeline is run using a new Docker container.
>
> **[1:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=64)** Even if the image is the same, the execution environment is different.
>
> **[1:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=68)** So any uninstalled tools that need to be accessed multiple times would need to be run in the same step, or they'd need to be installed all over again in a new step.
>
> **[1:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=79)** Unfortunately, this approach leads to pipelines that use up precious build time in our Bitbucket accounts.
>
> **[1:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=86)** For those of us on the free tier, we only have 50 minutes each month.
>
> **[1:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=90)** So we need to make every minute count.
>
> **[1:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=93)** A more efficient approach is to use a container image that's already configured with the tools we need.
>
> **[1:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=100)** We can specify images for the entire pipeline or at the step level.
>
> **[1:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=105)** In this example, an image with the Rust compiler already installed is being configured globally, so all steps will have access to it.
>
> **[1:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=113)** We would need to do an install in every step where Rust is required.
>
> **[1:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=119)** Bitbucket pipelines can use any container image that's publicly available via the internet.
>
> **[2:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=125)** For developers, this is great since we can select from dozens of public images hosted in Docker Hub, the Amazon ECR Public Gallery and other popular image hosting sites.
>
> **[2:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=136)** In cases where we need something more custom, we can build our own container images and use those in pipelines as well.
>
> **[2:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=144)** Any custom image must also be accessible via the internet.
>
> **[2:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=147)** It can be hosted on your company's internal network.
>
> **[2:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=151)** Also, if the container registry requires authentication, the pipeline will need to be configured with a username, password and any other type of authorization tokens needed to access the image.
>
> **[2:43](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=163)** Let's continue exploring pipelines and public images in the Bitbucket web interface.
>
> **[2:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=168)** The code for the examples we're about to see can be found in the exercise files.
>
> **[2:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=174)** I'm logged into Bitbucket account now, and I'm viewing a pipeline run with two steps.
>
> **[2:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=179)** The pipeline is using the default image, and each step installs the Rust compiler using the Ubuntu apt-get command.
>
> **[3:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=188)** While total execution time might vary from one pipeline run to the next, this run took a total of 34 seconds with each step taking about half of that time.
>
> **[3:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=198)** Let's compare this to a pipeline run where we used an image with Rust already installed.
>
> **[3:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=205)** In this pipeline run, the Rust image is being used for all steps in the pipeline.
>
> **[3:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=210)** Again, run times will vary, but altogether, this pipeline run was about half the time of a pipeline where Rust was installed in each step.
>
> **[3:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=220)** More specifically, take a look at the second step.
>
> **[3:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=225)** The first step pulled the image.
>
> **[3:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=227)** So it took about the same amount of time as one of the steps where Rust was installed, but the second step was able to benefit from the image already being available and ran in just three seconds.
>
> **[3:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=239)** This demonstrates how a pre-configured image can save time in the long run.
>
> **[4:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=244)** Let's look at one more example.
>
> **[4:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=249)** In this last example, the pipeline is configured to use the default image globally.
>
> **[4:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=255)** In the first step, the versions for Node.js and Python are echoed to the output.
>
> **[4:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=260)** The following steps override the global image by calling specific images for Node.js and Python.
>
> **[4:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-public-and-custom-images?u=76281980&t=270)** This demonstrates how we can override image settings in each step for projects that need different tools for different steps in the pipeline or different versions of tools that might already be available in the default image.

> [!info]- Semantic Content
>
> **CLI Commands:** apt (4), docker (2), node (2), python (2), make (1)
> **Code Keywords:** public (3), let (3), override (2), continue (1), interface (1)
> **Tools:** bitbucket (4)
> **Prerequisites:** install (4)
> **File Paths:** node.js (2)
> **Env Vars:** apt (1), ecr (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** known as (1)

#### Use services
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=1)** - Bitbucket pipelines includes a very useful feature known as, services.
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=6)** Services are additional containers that run along with the container images running our pipeline steps.
>
> **[0:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=13)** Often, when we're testing software, the application being tested needs to connect to other applications like a database, a caching service, or some type of request queue.
>
> **[0:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=24)** Having these auxiliary applications available in our pipelines allows us to create realistic testing environments with minimal configuration.
>
> **[0:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=33)** We set up services in the definition section of our pipeline configuration using the services keyword.
>
> **[0:41](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=41)** Then we provide a name that we'll use later on in the pipeline to reference this service.
>
> **[0:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=47)** And finally, we provide the container image that the service will use, along with any environment variables or configuration details the service needs to initialize.
>
> **[0:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=57)** Once the service is defined, we can reference the service in any steps where it's needed.
>
> **[1:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=63)** In the step configuration, we use the services keyword, followed by a yaml list of all the services we want to instantiate.
>
> **[1:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=71)** Our pipeline will handle starting the service for us and any commands in the script, will be able to access the service directly.
>
> **[1:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=79)** Before we use services, though, there are a few limitations we need to keep in mind.
>
> **[1:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=85)** Any step can reference a maximum of five services.
>
> **[1:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=90)** Also, each step has a limited amount of memory allocated to it.
>
> **[1:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=94)** When a step instantiates a service, the memory is split between the steps and the service.
>
> **[1:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=100)** Keep this in mind for any steps that might be memory intensive, but also need a service to operate.
>
> **[1:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=107)** Depending on the service you're using, the way you reference it may change.
>
> **[1:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=111)** For example, some services will listen on local host while others will use the IP address 127.0.0.1.
>
> **[2:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=120)** Check the exercise files for references to a few common services and how to access them from any code that needs to connect.
>
> **[2:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=128)** And last but not least, pipelines will do an excellent job of starting services and making them available to our steps.
>
> **[2:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=136)** However, there's no built in process that lets a step wait until a service is ready.
>
> **[2:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=141)** If you find that your tests are failing because they try to access a service before it started, you may need to add wait time to your steps to allow the service to start before you start testing.
>
> **[2:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=153)** Let's go to the Bitbucket web interface to see an example pipeline using a service.
>
> **[2:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=160)** I'm logged into my Bitbucket account where I've created a new repo for this lesson.
>
> **[2:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=165)** I've added the exercise files as well.
>
> **[2:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=171)** The code for this demo is a Python application that connects to a postgres database.
>
> **[2:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=179)** The test suite exercises the application by calling each function from the application, confirming the database connection is in place, and then creating a table and inserting data.
>
> **[3:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=193)** The pipeline configuration uses a global image for Python 3.
>
> **[3:17](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=197)** The pipeline also includes a service named database using a postgres container image.
>
> **[3:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=203)** Default values are passed in for the name of the database, the username, and the password used to connect.
>
> **[3:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=213)** The service is then instantiated in a pipeline step before calling the pytest command to kick off the test suite.
>
> **[3:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=220)** Let's take a look at a run of this pipeline.
>
> **[3:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=227)** Like any other pipeline run, we get output from the build step and a tab where we can find artifacts.
>
> **[3:54](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=234)** But since this step used a service, we also get a tab for the alias we used to instantiate the postgres database.
>
> **[4:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=244)** This tab shows all the output from the service.
>
> **[4:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=247)** This is the perfect place to look.
>
> **[4:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/use-services?u=76281980&t=248)** If you need more information on how your services are initializing, or if you need any other details for debugging.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), interface (1), function (1)
> **CLI Commands:** find (2), python (2)
> **Tools:** bitbucket (3)
> **Versions:** 127.0.0 (1), python 3 (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Challenge: Create a pipeline with images and services
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=6)** - [Instructor] You already know what that music means.
>
> **[0:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=8)** A piping hot challenge is ready for us to enjoy.
>
> **[0:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=12)** In this challenge, you're continuing your role as the Bitbucket Pipelines expert supporting the amazing mobile app.
>
> **[0:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=19)** A recently deployed feature allows users to create backups with cloud storage.
>
> **[0:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=24)** The data is managed by two microservices.
>
> **[0:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=27)** One microservice is written in Python, and the other is written in Ruby.
>
> **[0:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=33)** Both services connect to a cluster of Postgres databases to manage the stored data.
>
> **[0:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=38)** Before making any updates to the feature, the development team would like to test both microservices in the same pipeline.
>
> **[0:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=46)** Follow these steps to complete this challenge.
>
> **[0:49](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=49)** Create a new repository and add the exercise files.
>
> **[0:53](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=53)** Update the provided pipeline configuration to include a definition for a Postgres database service.
>
> **[1:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=60)** Once the definition is in place, update the steps in the pipeline to make the database available to any script commands.
>
> **[1:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=68)** Then update the steps to run the provided test commands for Python and Ruby.
>
> **[1:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=73)** Make sure the steps use the correct execution environment for each programming language.
>
> **[1:18](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=78)** You'll find all the details for this challenge in the exercise files.
>
> **[1:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=82)** This challenge should take about 20 minutes to complete.
>
> **[1:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=85)** I know you'll have no problem with this one.
>
> **[1:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/challenge-create-a-pipeline-with-images-and-services?u=76281980&t=88)** Join me in the next video to compare solutions.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), ruby (2), make (2), find (1)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create a pipeline with images and services
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=0)** - [Instructor] This sounds like it's going to be a fun challenge, so let's jump right in.
>
> **[0:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=10)** I'm logged into my Bitbucket account and I've already created a new repo.
>
> **[0:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=14)** I cloned the repo and added the exercise files for my local system.
>
> **[0:21](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=21)** I've already run the provided pipeline once, just to make sure I've got a good point to start from.
>
> **[0:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=30)** On my local system, I have the exercise files open and I'm editing the Bitbucket pipeline's configuration, and I have my terminal open to push my changes back to Bitbucket.
>
> **[0:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=46)** This challenge is all about working with services and images.
>
> **[0:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=50)** So the first thing that we need to do to set up this pipeline is to add the definition for the Postgres database service.
>
> **[0:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=58)** In the read me file, we do have a snippet that's provided, so I'm just going to go to the read me and copy that snippet.
>
> **[1:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=66)** Go back to my pipeline definition, or rather my pipeline configuration because we need to add here the word definitions, and then that's exactly where I'm going to paste that snippet in.
>
> **[1:19](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=79)** And I might need to clean up my formatting just a little bit.
>
> **[1:24](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=84)** Let's see if I can get that into the right spot.
>
> **[1:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=87)** That looks pretty good.
>
> **[1:29](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=89)** Save that.
>
> **[1:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=90)** Okay, so with the database in place, the next thing we need to do is make this available to any steps that want to use this particular service.
>
> **[1:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=102)** So we need to update the steps down here in the pipeline section.
>
> **[1:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=106)** Okay, under each step, I'm just going to go under the name here.
>
> **[1:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=110)** We'll start with Python and I know we need to add services and then the name of the service, which is database.
>
> **[2:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=122)** And actually, no, it's not a block like that.
>
> **[2:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=124)** It's actually a YAML list, so that's the one that we want.
>
> **[2:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=129)** It needs to look like that.
>
> **[2:12](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=132)** Okay, this looks right.
>
> **[2:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=134)** So what I want to do is I'm just going to copy this and paste it here under the Ruby section as well, so that step will also have access to this database service.
>
> **[2:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=147)** So this part of the challenge I feel like is complete.
>
> **[2:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=151)** Each of these steps will be able to access this database, but because we're running two different steps with two different programming languages, we need to make sure that these particular steps have the correct, I think the challenge said execution environment.
>
> **[2:47](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=167)** So what that leads me to believe is that we need to update the image for each of these steps, and if I go to the top of this particular configuration, this pipeline, or rather this configuration is using the default image, and I'm assuming, or actually I know of, you know, from the discussions that we've had so far that this particular image, it does have Python installed, it does not have Ruby installed, but if we go back to the read me, I think we were provided some additional information, and there it is for the execution environment.
>
> **[3:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=202)** For Python, we have this particular environment, python:3, and then for Ruby we have ruby:3.
>
> **[3:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=208)** So I think what I'll do is I'm not going to copy that.
>
> **[3:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=211)** I'll just type it in.
>
> **[3:33](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=213)** If I go back down to these steps here, and I'm going to add another block.
>
> **[3:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=218)** Let's see where we want to put this guy.
>
> **[3:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=220)** Right above the script, I'll put image and then python.
>
> **[3:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=225)** No, just one python:3 and then under Ruby, also just above the script, I'll put image and then ruby:3.
>
> **[3:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=237)** Okay, so now these steps have the correct execution environment and there's a good prompt here for us for the next part of the challenge that says our Python tests go here, our Ruby tests go here.
>
> **[4:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=249)** So let's go back to the read me, and sure enough, we have the test commands that we need to run.
>
> **[4:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=254)** So I will copy these, just copy those here and go back to the pipeline configuration.
>
> **[4:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=263)** Make some space for me to add these.
>
> **[4:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=266)** These are script commands, so these need to be in a list for our YAML to be valid.
>
> **[4:34](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=274)** That looks good for Python.
>
> **[4:36](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=276)** Let's go back and grab these Ruby commands.
>
> **[4:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=279)** Again, I'll copy these to the clipboard, go here to the Ruby section right at the end of the file, and then just like the Python commands, these also need to be in a YAML list format.
>
> **[4:55](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=295)** I'll save that, and I think, just looking at what we've done here, let's just review one quick second before I push any code.
>
> **[5:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=304)** We added a definition section, and under the definition section, we added a database.
>
> **[5:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=310)** This was all provided to us through the Postgres image, the database name, the user, and password.
>
> **[5:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=316)** That's all part of the code that's been provided.
>
> **[5:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=320)** For the Python step, we added the database service and then we added an image and then we added the commands specific for running the Python test, and then we did the same thing under Ruby.
>
> **[5:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=332)** We added the database service, we gave it the correct image to use for these commands, and then we added the commands themselves.
>
> **[5:39](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=339)** So let's save this file.
>
> **[5:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=342)** I will go to my terminal now and push these changes up to Bitbucket.
>
> **[5:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=351)** So I'm in my terminal now.
>
> **[5:52](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=352)** I'm going to run git status just to make sure I haven't done anything crazy with any other file.
>
> **[5:59](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=359)** Yes, the pipeline's configuration, that's the only file that I wanted to modify.
>
> **[6:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=364)** I will, actually, let's do a diff on it real quick, just to see what we changed.
>
> **[6:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=368)** There's our definition that we added, service and the image, the commands for Python and Ruby.
>
> **[6:14](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=374)** So this all looks good to me.
>
> **[6:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=376)** Let's add, actually, I'll do a git commit -am, so I'll add just the one change file there, and I will, for this particular commit message, let's say update pipeline for python ruby and database.
>
> **[6:38](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=398)** Alright, and now let's push that.
>
> **[6:45](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=405)** Okay, the code has been successfully pushed up to Bitbucket.
>
> **[6:48](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=408)** Let's go to the pipelines tab in our repo to see how this pipeline actually runs.
>
> **[6:58](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=418)** And it looks like I do have an error somewhere.
>
> **[7:01](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=421)** Maybe I had some, let's see.
>
> **[7:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=425)** The services section in my Bitbucket pipeline's YAML file contains a service which does not exist in the services definition.
>
> **[7:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=433)** One feature that is pretty useful in these particular scenarios is this option here that says to validate your Bitbucket pipelines YAML.
>
> **[7:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=442)** We, if we follow that link, it opens another little service that Bitbucket pipelines provides where we can validate the YAML.
>
> **[7:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=450)** Unfortunately, it doesn't bring the YAML over.
>
> **[7:32](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=452)** I really wish it did that, but let's go back here, and I'm going to select all and then copy and then go back to the validator, paste in here, and of course, I got some, I got a lot of errors here, and I see where the problem is.
>
> **[7:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=471)** So this particular block of code was not indented properly, so I have a YAML formatting error.
>
> **[7:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=477)** So what I need to do is just highlight these lines, tab 'em over, and I think that will get it for me.
>
> **[8:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=484)** Oh, definition.
>
> **[8:05](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=485)** Oh, you know what?
>
> **[8:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=486)** I'm also missing the services keyword.
>
> **[8:09](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=489)** Let's put services here, colon, and then we need to do another.
>
> **[8:15](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=495)** So after adding the services keyword, I need to line this code up properly to get my YAML formatting correct.
>
> **[8:23](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=503)** Okay, so that was really the only thing that was wrong.
>
> **[8:26](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=506)** I forgot my services keyword.
>
> **[8:28](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=508)** The database snippet wasn't tabbed over correctly even before I had the services keyword in place.
>
> **[8:35](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=515)** So with those in place, now these steps can definitely see the service that's already been made available to them.
>
> **[8:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=522)** So what I will do now is select all of this code and go back to my editor.
>
> **[8:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=530)** Actually, I didn't copy it.
>
> **[8:51](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=531)** Let's select all this code, copy, go back to my editor, and I'm going to select all again, and I'm going to paste.
>
> **[8:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=537)** Let's save that file.
>
> **[9:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=540)** Now let's go to the terminal.
>
> **[9:02](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=542)** I'll clear the screen, and let's do a git diff to see what we changed.
>
> **[9:07](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=547)** Okay, and that's exactly the change that we needed to make here.
>
> **[9:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=551)** I was missing the services keyword and my database little snippet.
>
> **[9:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=556)** I did not copy that over and format that correctly.
>
> **[9:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=560)** So now with that in place, let's do another git commit -am and I'll say fix yaml errors, and then I will, let's push this up.
>
> **[9:40](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=580)** Okay, the code has been pushed.
>
> **[9:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=582)** Let's go back to the pipelines page to see how this particular pipeline ran.
>
> **[9:50](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=590)** Okay, I'm back on the pipelines tab, and sure enough, after fixing these YAML errors, my pipeline is in progress.
>
> **[9:57](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=597)** Let's tap into here and see how this pipeline is looking.
>
> **[10:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=600)** The test Python step already completed.
>
> **[10:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=603)** That's awesome.
>
> **[10:04](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=604)** Glad to see that.
>
> **[10:06](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=606)** Ran three tests and everything passed okay.
>
> **[10:08](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=608)** Let's wait for the Ruby tests now to finish.
>
> **[10:13](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=613)** Okay, it looks like the Ruby tests have finished now.
>
> **[10:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=616)** I'll scroll down, and yes, there are three runs, four assertions, zero failures, zero errors, and zero skips, so all of the Ruby tests ran successfully as well.
>
> **[10:25](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=625)** So I think with that, the challenge has been solved, but let's review real quick to see what we did.
>
> **[10:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=631)** If I go back to my editor, I'm going to close this out of the way.
>
> **[10:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=637)** We are using the default image in this pipeline, which is totally fine.
>
> **[10:42](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=642)** We added a database service using the Postgres image.
>
> **[10:46](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=646)** We updated our steps to call this particular service so that any commands here can access the database, and then because these steps are using different programming languages, they're running test suites for two different programming languages, we had to override the default image, and we were provided the information we needed here, python:3 for the Python test suite, ruby:3 for the Ruby test suite.
>
> **[11:11](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=671)** And then of course, we added the commands that were needed to run the actual tests.
>
> **[11:16](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=676)** So, and of course, in my case, I mean, your condition might have been a little bit better.
>
> **[11:20](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=680)** Maybe you saw the errors before, or rather you didn't encounter the same errors that I ran into in your solution.
>
> **[11:27](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=687)** But, you know, using the validator, I was able to work through those.
>
> **[11:30](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/solution-create-a-pipeline-with-images-and-services?u=76281980&t=690)** So with the changes in place, validating my YAML and getting the pipeline to run successfully, I believe this challenge has been solved.

> [!info]- Semantic Content
>
> **CLI Commands:** ruby (17), python (16), make (6), git (4)
> **Code Keywords:** let (25), from. (1), override (1), case, (1)
> **Tools:** bitbucket (8), terminal (4)
> **Env Vars:** yaml (11)
> **Cross-References:** go back to (9)
> **UI Navigation:** go to (5), scroll down (1)
> **Exercise Files:** exercise files (2)
> **Analogies:** just like (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=0)** - [Michael] Thanks for sticking with me to the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=3)** I hope you enjoyed learning about the different ways we can use Bitbucket Pipelines to automate the CI/CD process.
>
> **[0:10](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=10)** As you continue working with Bitbucket, tap into the Q&A section to ask a question, provide an answer, or just to participate in conversations with other folks using Bitbucket Pipelines.
>
> **[0:22](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=22)** If you're ready to take your pipelines to the next level, join me in my course, Advanced Bitbucket Pipelines, right here in the LinkedIn Learning Library.
>
> **[0:31](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=31)** We'll take an even deeper dive into advanced features, like developing custom pipes and more.
>
> **[0:37](https://www.linkedin.com/learning/bitbucket-pipelines-for-ci-cd/next-steps?u=76281980&t=37)** I had a great time being your instructor for this course, and I can't wait to see what you build, test and deploy with Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (5)
> **CLI Commands:** cd (1)
> **Code Keywords:** continue (1)
> **Speakers:** - [michael] (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/bitbucket-for-ci-cd-3806095)

## Skills Covered

- Bitbucket
- Continuous Integration and Continuous Delivery (CI/CD)

## Path Context

### In [[Master Bitbucket]]
← [[Learning Bitbucket]] | **2 of 3** | [[Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations]] →

## Appears In

- [[Master Bitbucket]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Bitbucket Pipelines- Automating Deployments and Managing Third-Party Integrations]] — Bitbucket, Continuous Integration and Continuous Delivery (CI/CD)
- [[Learning Bitbucket]] — Bitbucket

---

[↑ Back to top](#)