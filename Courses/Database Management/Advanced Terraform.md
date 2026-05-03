---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-terraform-18720794
url: "https://www.linkedin.com/learning/advanced-terraform-18720794"
duration_minutes: 145
duration: 2h 25m
level: Advanced
updated: 1/18/2023
learners: 79197
skills:
  - Terraform
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-terraform-3099246"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGfrjsVMJJlFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1673639139822?e=2147483647&amp;v=beta&amp;t=sKBfCsU0ZMfvCz_7xb-GJukI1OCLngtnMWsBDsrDU58"
linkedin_topic: Database Management
learning_paths:
  - '[[Infrastructure as Code with Terraform]]'
prev_courses:
  - '[[Learning Terraform]]'
path_nav: '[{"path":"Infrastructure as Code with Terraform","position":3,"total":3,"prev":"Learning Terraform","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - skill/terraform
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Advanced%20Terraform.md)

![Advanced Terraform](https://media.licdn.com/dms/image/v2/C560DAQGfrjsVMJJlFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1673639139822?e=2147483647&amp;v=beta&amp;t=sKBfCsU0ZMfvCz_7xb-GJukI1OCLngtnMWsBDsrDU58)

# Advanced Terraform

> Terraform simplifies and accelerates the configuration and deployment of infrastructure, including cloud-based environments. In this project-based course, Dave Swersky highlights a series of advanced Terraform use cases. Dave goes over the steps to create a new Terraform configuration, then explores intermediate concepts like variables, looping, expression and functions, modules, and more. He expl

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-terraform-18720794) | 2h 25m | Advanced | 79K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Introduction to Advanced Terraform](#introduction-to-advanced-terraform)
  - [What you should know](#what-you-should-know)
  - [Terraform review and terminology](#terraform-review-and-terminology)
  - [Exercise files](#exercise-files)
- [**1. Creating a New Terraform Configuration**](#1-creating-a-new-terraform-configuration) (7 videos)
  - [Practical Terraform](#practical-terraform)
  - [Google Cloud and Terraform: Tools and setup](#google-cloud-and-terraform-tools-and-setup)
  - [Designing a cloud infrastructure in Terraform](#designing-a-cloud-infrastructure-in-terraform)
  - [Terraform configuration overview](#terraform-configuration-overview)
  - [Deploying the Terraform configuration](#deploying-the-terraform-configuration)
  - [Review deployed resources](#review-deployed-resources)
  - [Destroying resources](#destroying-resources)
- [**2. Intermediate Terraform Concepts**](#2-intermediate-terraform-concepts) (9 videos)
  - [Input variables](#input-variables)
  - [Using input variables](#using-input-variables)
  - [Output variables](#output-variables)
  - [Sensitive data](#sensitive-data)
  - [Looping with count](#looping-with-count)
  - [Looping with for_each](#looping-with-for_each)
  - [Expressions and functions](#expressions-and-functions)
  - [Introduction to modules](#introduction-to-modules)
  - [Using Terraform modules](#using-terraform-modules)
- [**3. Advanced Terraform Concepts**](#3-advanced-terraform-concepts) (5 videos)
  - [Analyzing a module](#analyzing-a-module)
  - [Custom modules](#custom-modules)
  - [Terraform remote state overview](#terraform-remote-state-overview)
  - [Deploying backend resources](#deploying-backend-resources)
  - [Deploying a remote state configuration](#deploying-a-remote-state-configuration)
- [**4. Terraform Automation**](#4-terraform-automation) (7 videos)
  - [Multiple environment configurations](#multiple-environment-configurations)
  - [Terraform CI/CD options](#terraform-cicd-options)
  - [Terraform Cloud setup](#terraform-cloud-setup)
  - [Deploying with Terraform Cloud](#deploying-with-terraform-cloud)
  - [GitOps CI/CD setup](#gitops-cicd-setup)
  - [GitOps CI/CD with Terraform Cloud](#gitops-cicd-with-terraform-cloud)
  - [Deprecating resources](#deprecating-resources)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Advanced Terraform](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=0)** - [Dave] Where are you in your journey learning [[Terraform]]?
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=3)** If you've covered the basics and you're looking to learn more advanced use cases, then this is the course for you.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=8)** Terraform configurations typically begin as simple representations of an existing application infrastructure.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=15)** The fun begins when a configuration is complete enough to take over the deployment of that infrastructure.
>
> **[0:21](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=21)** We'll start with a very simple configuration that represents an existing web application running in a private data center.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=27)** We'll take on the role of a [[DevOps]] engineer tasked with improving and evolving the application infrastructure.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=33)** When we're finished, our humble little application will have become a fully cloud-native [[SaaS|software as a service]] application, all managed with Terraform.
>
> **[0:42](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=42)** Hi, my name is Dave Swersky.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=43)** I've been working with Terraform for several years as an application developer and DevOps engineer.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=49)** I'm excited to show you how Terraform works on real production applications.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-advanced-terraform?u=76281980&t=53)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[DevOps]] (2), [[SaaS|Software as a service]] (1)
> **CLI Commands:** terraform (5)
> **Speakers:** - [dave] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=0)** - [Instructor] This is an advanced course so we'll be going beyond the basics of [[Terraform]].
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=4)** You should already be comfortable with simple Terraform configurations, the Terraform [[CLI]], and HashiCorp Configuration Language.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=12)** We'll cover some intermediate concepts in this course.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=14)** Then, quickly move on to more advanced techniques.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=17)** The sample configurations are on [[GitHub]], so if you'll be following along, it will help if you have some basic knowledge of [[Git]] and GitHub.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=25)** All you really need is a GitHub account and the Git Command Line Tool installed.
>
> **[0:29](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=29)** I'll demonstrate the necessary Git commands step-by-step.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=33)** Integrating Terraform with other tools is a major part of advanced Terraform usage.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=37)** We'll be combining Terraform with GitHub and Terraform Cloud.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=41)** You'll be able to apply any experience you may have with CICD tools, but don't worry if you're not familiar with them.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=47)** I'll explain as I demonstrate.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=49)** Finally, Terraform is [[Infrastructure as code (IaC)|infrastructure as code]], so you'll be able to apply any programming and [[Software Development]] experience you may have, to Terraform.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=58)** You certainly don't need software development experience, but a basic knowledge of programming, in any language, will give you a leg up.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/what-you-should-know?u=76281980&t=65)** I'll be calling out cases where software development practices and principles apply well to developing and managing Terraform configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (10), [[GitHub]] (4), [[Git]] (3), [[Software Development]] (3), [[CLI]] (1)
> **CLI Commands:** terraform (10), git (3)
> **Tools:** github (4), command line (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** cli (1), cicd (1)
> **Speakers:** - [instructor] (1)

#### [Terraform review and terminology](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=0)** - [Instructor] Let's review a few essential [[Terraform]] concepts and terminology.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=4)** A Terraform configuration defines resources, variables, and values.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=9)** A single configuration is usually a collection of several files.
>
> **[0:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=13)** Complex configurations with a lot of resources usually include a larger set of files.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=18)** Throughout this course, I'll use the term configuration to describe a set of files that is independently deployable, meaning I can open a shell in a folder, execute Terraform Plan or Apply, and Terraform will use the files in that folder to build a plan or execute the configuration.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=35)** Here's an example.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=37)** The source controlled exercises project in [[GitHub]] for this course is a collection of configurations.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=43)** It contains several configurations that we'll use to learn about Terraform.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=47)** Each branch contains a separate Terraform configuration.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=50)** HashiCorp Configuration Language, or HCL, is a domain-specific language developed by HashiCorp.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=57)** By contrast with general purpose languages like [[Java]] and C#, HCL is focused on defining Terraform configurations.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=65)** HashiCorp developed HCL because static data files such as YAML or [[JSON]] lacked the language features needed to make Terraform as versatile and adaptable as it needed to be.
>
> **[1:16](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=76)** HCL supports basic language conventions such as variables, loops, and conditional operators.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=83)** If you've ever written a line of code in any language, you've probably used a variable.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=87)** Variables are named, typed containers of data.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=91)** Variables are used to modify the behavior of a program based on their values.
>
> **[1:36](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=96)** Terraform is primarily used to create instances of some thing in a cloud provider or other system.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=102)** The general term for that thing is a resource.
>
> **[1:45](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=105)** This could be an IP address, a load balancer, or a firewall rule.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=109)** Anything you can create in a platform is a resource.
>
> **[1:53](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=113)** The resource reserved [[Microsoft Word|word]] is used to declare resources that will be created in the target system such as a cloud environment.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=120)** When an operator executes Terraform Apply, Terraform executes a set of actions defined by a graph of resources.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=128)** The set of resources created during this action is collectively referred to as a deployment.
>
> **[2:14](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=134)** Terraform is capable of deploying and managing resources in several public clouds and on-prem cloud managers such as OpenStack and VMware.
>
> **[2:22](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=142)** These are just a few examples of the systems that can work with Terraform.
>
> **[2:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=146)** Terraform adapts itself to cloud and other systems using a provider.
>
> **[2:31](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=151)** Providers are declared in a configuration.
>
> **[2:33](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=153)** When declared, they make a provider-specific set of resources available to that configuration, for example, including the [[Google Cloud Platform (GCP)|Google Cloud]] provider in a configuration allows you to declare GCP resources such as Compute instances, Cloud [[SQL]] [[Databases]], and [[Kubernetes]] Engine clusters.
>
> **[2:51](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=171)** A module is an isolated, reusable sub-configuration.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=175)** It cannot be deployed on its own, but it can be included in other configurations.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=180)** Modules are used to isolate common configurations.
>
> **[3:04](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=184)** Modules use input variables to define their behavior.
>
> **[3:07](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=187)** That should set us up to talk more about Terraform.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-review-and-terminology?u=76281980&t=190)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (15), [[GitHub]] (1), [[Java]] (1), [[JSON]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** terraform (15), make (2)
> **Env Vars:** hcl (4), yaml (1), json (1), gcp (1), sql (1)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (4), is an  (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Exercise files](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=0)** - [Instructor] The exercise files for this course are stored in a repository on [[GitHub]].
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=4)** If you don't have a GitHub account, you'll need to create one.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=7)** This will allow you to create a GitHub hosted copy called a fork, of the Exercise Files repository.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=12)** You'll need that fork for some of the course exercises.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=15)** First, I'll show you how to create a fork, then you'll clone the fork to your local system or to the [[Google Cloud Platform (GCP)|Google Cloud]] shell.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=22)** Create your GitHub account if you don't have one, then log in.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=26)** You can search for the exercise files by entering into the search bar here on the very top left [[LinkedIn]] Learning/Advanced-[[Terraform]].
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=38)** You should see only the one listed here.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=41)** LinkedIn Learning Advanced Terraform 3099246.
>
> **[0:44](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=44)** Click that and then click the fork button here at the top right.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=51)** Click Create Fork and your fork will be created.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=58)** The next thing we need to do is create a personal access token that the GI [[CLI]] will use to authenticate to GitHub.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=65)** Click your profile icon at the very top right here.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=68)** Go to Settings, and then scroll all the way down to developer settings.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=74)** Expand personal access [[Tokens]], and select fine-grained tokens, and then click Generate New Token.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=83)** Give it a name, I'll call it TF-Token.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=87)** You can leave the expiration at 30 days.
>
> **[1:29](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=89)** If it does expire during the course, you can always generate a new one.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=93)** And then I recommend selecting only select repositories.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=97)** If this is a new account for you on GitHub, you should only see the one repository listed here.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=102)** Select that.
>
> **[1:44](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=104)** And then under repository permissions, expand this section here and scroll down to contents.
>
> **[1:51](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=111)** You'll want to change that to read and write, and then scroll down a little further to web hooks, and read and write for that one as well.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=124)** Click Generate Token, and we have our token.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=131)** It's important that you copy it immediately and save it somewhere permanent and safe, like a text file on your local system or in a private cloud folder like [[Google Drive]].
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=140)** This token is like a password.
>
> **[2:21](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=141)** It grants all the permissions we selected to anyone who has it.
>
> **[2:25](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=145)** Make sure to keep the token somewhere only you can access it.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=148)** Also, be sure not to add it to your repository at any point.
>
> **[2:31](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=151)** Secrets such as tokens should never be published to a [[Git]] repository.
>
> **[2:36](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=156)** For security purposes, GitHub will never display this token again.
>
> **[2:40](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=160)** If you lose it, you'll need to revoke it and generate a new one with the same permissions.
>
> **[2:45](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=165)** Throughout the course, I'll be using the Git command line utility to switch between local branches.
>
> **[2:51](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=171)** You'll need the Git CLI to follow along and to push changes to your fork.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=175)** I'll be demonstrating with Visual Studio Code, executing commands from my local system.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=180)** If Visual Studio Code is your preferred method for working with the exercises, you'll need to make sure that the Git CLI is downloaded to your system and working.
>
> **[3:07](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=187)** You also have the option to use the Code Editor and Cloud Shell and GCP.
>
> **[3:11](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=191)** If that's your preference, then you're all set.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=193)** The Git CLI is pre-installed to Cloud Shell.
>
> **[3:16](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=196)** For those that want to work locally in Visual Studio, open a local terminal and execute Git--version.
>
> **[3:24](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=204)** You should see the version here.
>
> **[3:26](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=206)** If not, you'll need to download the Git CLI from this website.
>
> **[3:30](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=210)** Follow the installation instructions for your platform.
>
> **[3:33](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=213)** After the installation is complete, restart your terminal and open a new one.
>
> **[3:37](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=217)** You should then be able to run Git--version, and see the version.
>
> **[3:41](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=221)** Now return to your browser with your fork open in GitHub.
>
> **[3:45](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=225)** New forks are created as private repositories by default as we can see here.
>
> **[3:50](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=230)** This means that you'll need to authenticate to GitHub from the CLI.
>
> **[3:53](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=233)** This will allow you to clone your repo, which means to download it locally and push, which means to push your local changes back to your repo and GitHub.
>
> **[4:01](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=241)** Don't worry if you're not familiar with Git, I'll walk you through each command and explain what is happening as we go.
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=246)** Click the Code button here, make sure HTTPS is selected, and click the Copy button.
>
> **[4:11](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=251)** Then return to your terminal.
>
> **[4:14](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=254)** You should be in your home directory.
>
> **[4:15](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=255)** If not, execute CD space Tilda on a Mac or in Cloud Shell, or CDspace\ on a [[Windows]] machine.
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=262)** Now, type in Git Clone and paste in the URL for your fork.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=267)** Hit Enter and it'll prompt you for username and password.
>
> **[4:30](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=270)** Enter in your GitHub username, this one's mine, and then at Enter.
>
> **[4:37](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=277)** And now, paste in the personal access token that you created earlier.
>
> **[4:42](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=282)** Copy it, make sure you don't get any spaces.
>
> **[4:45](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=285)** Paste it in, you won't see it show here, that's fine.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=288)** Hit Enter, and it is cloned locally.
>
> **[4:52](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=292)** We can do a quick LS and see that we have Advanced Terraform 3099246.
>
> **[4:58](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=298)** I can change into that directory, and there we are.
>
> **[5:05](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=305)** Now we're on a command to cash your token so you don't have to enter it with each clone or push.
>
> **[5:11](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=311)** Enter in Gitconfig global credential.helper cache,
>
> **[5:24](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=324)** C-A-C-H-E.
>
> **[5:26](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=326)** Hit Enter, and that's it.
>
> **[5:29](https://www.linkedin.com/learning/advanced-terraform-18720794/exercise-files?u=76281980&t=329)** Great, we have our exercise files downloaded and we're ready to move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (11), [[Git]] (10), [[CLI]] (6), [[Terraform]] (3), [[Tokens]] (3)
> **CLI Commands:** git (10), make (4), terraform (3), cd (1), ls (1)
> **Tools:** github (11), visual studio (3), terminal (3), command line (1)
> **Env Vars:** cli (6), gcp (1), https (1), url (1)
> **Prerequisites:** you'll need (7)
> **Exercise Files:** exercise files (4), download the (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Definitions:** is a  (1), means that (1)


### 1. Creating a New Terraform Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [Practical Terraform](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=0)** - [Instructor] Real world [[Terraform]] configurations typically start as a simple representation of an existing resource deployment.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=6)** That's where we'll start.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=7)** Our very first configuration will consist of infrastructure that is as close to the on-prem deployment as possible.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=14)** This is referred to as a lift-and-shift configuration, just enough to make the application work in the cloud.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=19)** Once that's done, we'll make changes to the infrastructure by modifying the Terraform configuration and redeploying it.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=26)** We'll see how we can version the changes in source control, execute Terraform commands to create deployment plans and apply them, and automate the whole process with a [[Continuous Integration (CI)|continuous integration]] and [[Continuous Delivery (CD)|continuous delivery]] pipeline, just as we would with application code.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=40)** Our humble little web application is going to grow into a fully cloud-native [[SaaS|software as a service]] platform for our customers.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=47)** So there's plenty to do.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=49)** The first evolution will be from lift-and-shift to a more cloud-native infrastructure.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=54)** We'll use Terraform to update the configuration, then generate a plan, review, and deploy it.
>
> **[0:59](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=59)** With each evolution, we'll get to see more Terraform features as we make practical improvements to the configuration.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=66)** Our first task is to translate these into cloud-based resources.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/practical-terraform?u=76281980&t=70)** Let's move on and get our cloud account set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (5), [[Continuous Integration (CI)|Continuous integration]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[SaaS|Software as a service]] (1)
> **CLI Commands:** terraform (5), make (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Google Cloud and Terraform: Tools and setup](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=0)** - [Instructor] [[Terraform]] is [[Infrastructure as code (IaC)|infrastructure as code]] or IAC.
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=3)** IAC is all about configuring things so we need a thing to configure.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=7)** Our thing for this course will be [[Google Cloud Platform (GCP)|Google Cloud platform]], or GCP.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=12)** You don't need any prior experience with GCP to complete this course.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=15)** We'll keep the focus on Terraform as much as possible, but hey, if you happen to learn a few things about cloud-native infrastructure along the way, that's not a bad thing, right?
>
> **[0:24](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=24)** If you don't already have a [[Google Cloud Platform (GCP)|Google Cloud]] account, your first step is to create one.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=28)** Go to cloud.[google.com](https://google.com) and create a new account.
>
> **[0:31](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=31)** You will be asked to use a credit card to open the account.
>
> **[0:34](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=34)** We'll be using free tier resources for this course as much as possible.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=38)** You will be responsible for any charges you do incur.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=41)** I'll be instructing you how to remove the resources you deploy at the end of most videos so they won't be running for very long.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=47)** If you need to take a break between videos, make sure you follow those instructions.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=52)** After you've created your account, create a new project in Google Cloud.
>
> **[0:56](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=56)** Click the dropdown here, and select new project.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=61)** You can give the project any name you like such as Advanced Terraform.
>
> **[1:04](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=64)** After it's created, you can select the project from the dropdown right here.
>
> **[1:11](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=71)** Note that the project name is not always the same as the project I.D.
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=75)** The name is a display name.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=77)** The I.D. is a globally unique name that may have a number appended to the name you provide.
>
> **[1:22](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=82)** You'll use the project I.D. in the configuration as we progress.
>
> **[1:26](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=86)** You may want to paste this I.D. into a notepad file and leave it open as you'll be copying this value into many files and configurations as we progress through the course.
>
> **[1:36](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=96)** As we discussed in the Exercise Files video, you have two options for following along.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=100)** The first is to run Visual Studio Code Terraform and the Google Cloud [[CLI]] on your local workstation.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=106)** The other is to use the Google Cloud Shell and Cloud Editor from the GCP console.
>
> **[1:51](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=111)** The Cloud Editor and Cloud Shell run in a free VM in Google Cloud.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=115)** Either of these options will work equally well.
>
> **[1:57](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=117)** If you choose to work locally, you'll need to install some software.
>
> **[2:01](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=121)** If you work from the GCP Cloud Editor and Shell, most of what you'll need is pre-installed.
>
> **[2:06](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=126)** I'll be using Visual Studio Code for my demonstrations.
>
> **[2:10](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=130)** Here's how to work locally.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=131)** First, you'll need to download Terraform to your local system.
>
> **[2:14](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=134)** Go to [terraform.io](https://terraform.io) in your web browser, and click the download link.
>
> **[2:19](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=139)** Follow the instructions for your platform.
>
> **[2:22](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=142)** If you're on a Mac, the Homebrew installer will take care of installing and making the binary executable.
>
> **[2:27](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=147)** The [[Windows]] Zip download is just the CLI executable.
>
> **[2:30](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=150)** You'll need to download it, extract it, and put the executable somewhere on your path so you can execute it from any directory.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=157)** The next step is to download and install Visual Studio Code.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=162)** Once you've done that, go ahead and open it up.
>
> **[2:45](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=165)** Go to the Extensions pane, and type in Terraform in the search bar.
>
> **[2:49](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=169)** The second one here is the one provided by HashiCorp.
>
> **[2:52](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=172)** It provides some syntax highlighting and auto completion for Terraform configurations.
>
> **[2:57](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=177)** The next step is to install the Google Cloud CLI.
>
> **[3:01](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=181)** You can do it from this page here, or if you're on a Mac, I recommend this process here with Homebrew.
>
> **[3:08](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=188)** Once the Google Cloud CLI is installed, return to Visual Studio Code and open a new terminal.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=193)** Go to Terminal, New Terminal.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=195)** If you already had a terminal open, close it and open a new one.
>
> **[3:19](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=199)** Now, we can type in gcloud--version to make sure the SDK was installed properly.
>
> **[3:27](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=207)** The next step is to authenticate the Google Cloud CLI to Google Cloud.
>
> **[3:31](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=211)** Type in gcloud auth application-default space login.
>
> **[3:38](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=218)** Executing this command will switch to your web browser and prompt you to log in to Google Cloud.
>
> **[3:43](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=223)** Click authorize, and then you can return here, and your Google Cloud CLI will be authorized.
>
> **[3:52](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=232)** The next step is to set the project.
>
> **[3:55](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=235)** Type in gcloud config set project and paste in the project I.D., not the name but the I.D., from the Google Cloud console.
>
> **[4:07](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=247)** The final step is to open up your fork that you cloned locally.
>
> **[4:12](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=252)** Go to the File pane here, open folder, and it should be on your route here.
>
> **[4:17](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=257)** Find it and hit open.
>
> **[4:18](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=258)** I already have mine in a different location, so I'm going to open that here.
>
> **[4:24](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=264)** Now I have the configuration open, and we're almost ready to go.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=267)** I'm going to reopen my terminal.
>
> **[4:30](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=270)** We have one more step.
>
> **[4:32](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=272)** Find gcp_commands.md in the configuration, and copy these two commands into the terminal, and hit enter.
>
> **[4:44](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=284)** Okay, that's it for Visual Studio Code.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=288)** Here's how to follow the exercises in the GCP console with Cloud Shell and Cloud Editor.
>
> **[4:53](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=293)** Open a browser and log into the GCP console.
>
> **[4:56](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=296)** Then click Activate Cloud Shell from the top right here.
>
> **[5:00](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=300)** This will connect you to your Cloud Shell, then click Open Editor.
>
> **[5:05](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=305)** You can see this looks very much like Visual Studio.
>
> **[5:08](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=308)** If you're unable to open this, it's possible that some corporate proxies may block access to the Editor.
>
> **[5:13](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=313)** If that's the case, you may need to fall back on Visual Studio.
>
> **[5:18](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=318)** If you don't already have a terminal open, you can go to Terminal, New Terminal, and then we'll go over into [[GitHub]], and you'll need to find your fork, click Code, make sure HTTPS is selected, and click Copy.
>
> **[5:34](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=334)** Then return to Google Cloud.
>
> **[5:37](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=337)** At this point, you'll need to take a moment and find the personal access token that you generated during the Exercise Files video.
>
> **[5:44](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=344)** Now we can type in [[Git]] clone and paste in the URL.
>
> **[5:52](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=352)** It'll prompt you for your username and password.
>
> **[5:54](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=354)** Enter your GitHub username, hit enter, and then, go find the personal access token, copy it, and paste it in.
>
> **[6:07](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=367)** You won't see it here, that's fine.
>
> **[6:08](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=368)** Hit Enter, and we're cloned.
>
> **[6:12](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=372)** You should immediately see Advanced Terraform 3099246 pop up here.
>
> **[6:17](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=377)** You can expand that, and we have several files.
>
> **[6:22](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=382)** The last step is to click on gcpcommands.md, and you'll want to come over here to the text and we're going to copy these two commands into the terminal.
>
> **[6:37](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=397)** Hit Enter, and that's it for Google Cloud setup.
>
> **[6:42](https://www.linkedin.com/learning/advanced-terraform-18720794/google-cloud-and-terraform-tools-and-setup?u=76281980&t=402)** Let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (14), [[Terraform]] (9), [[CLI]] (6), [[GitHub]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **Tools:** terminal (10), visual studio (7), gcp console (3), github (2)
> **CLI Commands:** terraform (9), find (5), make (3), gcloud (3), git (1)
> **Env Vars:** gcp (6), cli (6), iac (2), sdk (1), https (1)
> **UI Navigation:** go to (6), dropdown (2), open the (1), select the (1), switch to (1)
> **Prerequisites:** you'll need (6), install (3), configure (1), setup (1)
> **File Paths:** gcp_commands.md (1), gcpcommands.md (1)
> **URLs:** [google.com](https://google.com) (1), [terraform.io](https://terraform.io) (1)

#### [Designing a cloud infrastructure in Terraform](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=0)** - [Instructor] Let's get started right away on our task.
>
> **[0:02](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=2)** We're going to migrate an on-premise web application to the cloud.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=6)** Our first step is to take a close look at the current state.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=9)** We have a fairly typical three-tier architecture here.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=12)** We'll need to map these resources as they exist today in our data center to cloud-based resources.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=18)** We'll use [[Google Cloud Platform (GCP)|Google Cloud]] as our example, though the same ideas would apply to any public cloud, with differing product names, of course.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=25)** Let's see, first, we need a network.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=28)** In GCP terms, that's a Virtual Private Cloud, or VPC.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=33)** A new default VPC is created for us when we create a new project in GCP, so we can refer to it in our configuration.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=40)** We could delete that default VPC and define our own if we wanted, but we'll keep it simple for now.
>
> **[0:46](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=46)** We'll also need to define a subnet for the [[Virtual Machines]] we're going to create.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=50)** That will be defined as a child of the VPC.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=53)** This is a public-facing site and the current configuration uses an NGINX-based load balancer and reverse proxy.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=60)** We'll need a firewall rule to allow public traffic to flow into the NGINX server.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=65)** Finally, we'll need to define four VMs, one NGINX load balancer and reverse proxy, three [[Web Servers]], and one [[MySQL]] database server.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=74)** Here's our mapping of on-prem resources to their equivalent cloud-based resources.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=79)** So we're ready to get started, right?
>
> **[1:22](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=82)** We can open the Google Cloud console, find the resources we need, click some buttons, and voila.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=87)** We could do that, but our job is more than just making this app run in the cloud.
>
> **[1:32](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=92)** We need to make it grow in the cloud.
>
> **[1:34](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=94)** We need to modify this configuration, change it until it meets the requirements of a fully cloud native application.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=100)** That would be very tedious and error prone to do manually, poking buttons and filling out [[Forms]] in the console.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=106)** Obviously, we're going to use [[Terraform]].
>
> **[1:48](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=108)** A cloud migration is all about application modernization.
>
> **[1:51](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=111)** This is a great opportunity to modernize not just the application and its infrastructure, but the way that infrastructure is defined and deployed.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=119)** I want to emphasize that we won't be deploying any application code or data to the compute or [[Databases]] we deploy so that we can focus on Terraform.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=127)** Of course, you're free to experiment.
>
> **[2:09](https://www.linkedin.com/learning/advanced-terraform-18720794/designing-a-cloud-infrastructure-in-terraform?u=76281980&t=129)** If you have an app to run and you're comfortable deploying code, by all means, give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Terraform]] (2), [[Virtual Machines]] (1), [[Web Servers]] (1), [[MySQL]] (1)
> **Env Vars:** vpc (4), nginx (3), gcp (2)
> **CLI Commands:** nginx (3), terraform (2), mysql (1), find (1), make (1)
> **Definitions:** is a  (2), defined as (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Terraform configuration overview](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=0)** - Okay, [[Terraform]] engineer.
>
> **[0:01](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=1)** We're ready to get our hands dirty and work with a real configuration.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=4)** I've taken the liberty of getting us started.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=6)** You'll find a bare-bones, just enough to work configuration in the exercise files on the main branch.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=12)** Open your editor of choice to view the files.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=14)** Before we dig into the configuration, I'd like to draw your attention to the dot [[Git]] ignore file.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=19)** The dot git ignore file is a special file used to instruct git to ignore a set of files.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=25)** You can list an explicit name, or use wild cards to exclude files with a particular extension, or other pattern.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=30)** This dot git ignore file is set up to exclude files used by Terraform to do its work.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=35)** Some of these files, like the dot tfrs file, may contain secrets we wouldn't want to check into a repository, especially if it were public.
>
> **[0:44](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=44)** Feel free to use this dot git ignore file as a starting point for any Terraform configs you create in the future.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=50)** Now, let's review the configuration.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=52)** Open the main dot tf file.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=54)** The first section here is the [[Google Cloud Platform (GCP)|Google Cloud]] provider.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=57)** This is what allows us to define GCP resources in this configuration.
>
> **[1:02](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=62)** You'll notice that all Terraform configurations are grouped together in this pattern.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=66)** These groups are referred to as stanzas.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=68)** Later, when we execute terraform net this stanza will tell the Terraform [[CLI]] to download the GCP provider.
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=75)** The next section is all about networking.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=77)** The first stanza here is a data resource.
>
> **[1:20](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=80)** Data resources tell Terraform to pull data from the target platform indicated by the provider.
>
> **[1:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=86)** This particular data source refers to a VPC.
>
> **[1:28](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=88)** A VPC with the name default is created automatically for you when you create a new project in GCP.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=95)** We want to use that existing VPC instead of creating a new one, so we use a data resource to refer to it in our configuration.
>
> **[1:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=103)** The next stanza is a subnet that we'll use to attach VMs to the default VPC.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=109)** Note that each stanza has a common structure, the resource keyword, then a string value that refers to each specific resource type, then a string that is the local name of the resource.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=120)** The local name is not the same thing as the name attribute here, inside the stanza.
>
> **[2:05](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=125)** It can be the same value, but they're used differently.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=128)** The local name is the value that is used to refer to a resource from other resources in the configuration.
>
> **[2:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=133)** The name attribute is the name assigned to a resource when it's created.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=137)** This is the value you would see in the Google Cloud console.
>
> **[2:21](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=141)** These names are separate, because Terraform needs a way to refer to a resource in the configuration before it's created in the target platform.
>
> **[2:29](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=149)** The next stanza defines a firewall rule.
>
> **[2:31](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=151)** This rule will be used to open the ports needed on the public IP address of the EngineX reverse proxy VM, so it can accept HTTP traffic from the public internet.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=162)** The next four stanzas are all [[Google]] Compute engine VMs, one for the Engine X proxy, three [[Web Servers]], and finally, one [[MySQL]] database VM.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=175)** That's it for this configuration.
>
> **[2:56](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=176)** This is our essential starting point for the cloud migration of our web application.
>
> **[3:01](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=181)** If you've worked with Terraform before, you might already have been able to spot a few refactoring opportunities.
>
> **[3:06](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=186)** If not, no problem.
>
> **[3:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=188)** We'll be making those improvements together, step by step, over the next several videos.
>
> **[3:12](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-configuration-overview?u=76281980&t=192)** But first, let's move on so we can deploy this configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[Git]] (5), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[CLI]] (1), [[Google]] (1)
> **CLI Commands:** terraform (9), git (5), find (1), mysql (1)
> **Env Vars:** vpc (4), gcp (3), cli (1), http (1)
> **Definitions:** is a  (3), refers to (1)
> **UI Navigation:** open the (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Deploying the Terraform configuration](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=0)** - [Instructor] Okay, we're ready for our first deployment.
>
> **[0:02](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=2)** Our first step with our configuration is to initialize it.
>
> **[0:05](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=5)** This command prepares a configuration for all other [[Terraform]] commands.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=9)** Initializing, we'll download the GCP provider which is listed in the main.tf file.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=14)** Configurations can have multiple providers, by the way.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=17)** The init command will download all defined providers anywhere in the main configuration, also known as the root module.
>
> **[0:23](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=23)** We'll get more into that later.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=25)** The command to initialize is terraform init.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=28)** Open the integrated terminal if you don't have one open, and type the command.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=35)** Note that the output says we're initialized and shows us the version of the provider.
>
> **[0:39](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=39)** The init command has made a change to the contents of our configuration.
>
> **[0:42](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=42)** The .terraform directory is created and contains the provider binary.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=49)** The binary is the provider itself.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=51)** You'll also notice that the .terraform directory is grayed out.
>
> **[0:55](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=55)** This is because the .terraform directory is in the gitignore file, so it will not be committed to the local repository.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=61)** At this point, you'll need to replace this value here in the main.tf file with your project id.
>
> **[1:07](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=67)** You can find it in the GCP console by clicking on this dropdown, and it will be here on the right.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=74)** The next step to deploy this configuration is to create a plan.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=77)** Cloud resources have dependency relationships between them.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=81)** Subnets relate to a VPC, VM instances relate to subnets and so on.
>
> **[1:26](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=86)** Terraform represents these relationships in a dependency graph.
>
> **[1:29](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=89)** Terraform needs the graph in order to create parent resources before they're dependent child resources.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=95)** We're going to output the plan to a file.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=98)** Type in terraform plan space out s1.tfplan and hit Enter.
>
> **[1:48](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=108)** If you're using the cloud editor and Cloud Shell, you may get a popup asking you to authorize the command.
>
> **[1:53](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=113)** Go ahead and click Authorize.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=115)** Terraform outputs the plan both to the console and to the s1.tfplan we specified with the -out parameter.
>
> **[2:02](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=122)** Operators and users of Terraform use plans to review the changes Terraform will make before they're executed with the Terraform apply command.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=131)** This is a brand new undeployed configuration, so all the actions Terraform will take will be creation actions.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=137)** This plan will be applied in reverse order.
>
> **[2:19](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=139)** The first resources created are at the bottom, so let's start there and work our way up.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=144)** We see first we have the subnet, and we scroll up a little bit further... And we have some more networking resources here created, and then we create our VM instances.
>
> **[2:39](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=159)** All the resources created in this configuration depend directly or indirectly on the VPC, so that's defined first with the data resource.
>
> **[2:46](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=166)** Then we see the subnet, the firewall rule and all the way up to the VM instances, which are created last.
>
> **[2:52](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=172)** We can see the dependency graph described by this plan by executing terraform graph.
>
> **[2:59](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=179)** This output is a digraph, which we can take to www.[webgraphviz.com](https://webgraphviz.com) and generate a visualization.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=193)** This is a fairly simple configuration, so the graph view is nicely readable.
>
> **[3:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=197)** Visualizations for more complex configurations get rather busy and harder to read.
>
> **[3:24](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=204)** Let's suppose that you're collaborating over a configuration and you want to view the contents of a plan generated by someone else.
>
> **[3:31](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=211)** The .tfplan file is a binary file, so we need the Terraform [[CLI]] to view it.
>
> **[3:36](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=216)** We can execute terraform show s1.tfplan and this will output to the console the same data that was displayed when the plan was generated.
>
> **[3:47](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=227)** This format is designed to be human readable.
>
> **[3:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=229)** We can also generate machine readable [[JSON]], terraform show -json s1.tfplan.
>
> **[4:01](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=241)** This is especially useful when integrating Terraform with other tools.
>
> **[4:04](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=244)** Terraform is often incorporated into a CI/CD pipeline.
>
> **[4:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=248)** JSON formatted plans can, for example, be imported to a visualization tool, read by a step in a pipeline to send alerts, the possibilities are endless.
>
> **[4:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=257)** Now we're ready to deploy.
>
> **[4:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=258)** The command is simple, terraform apply s1.tfplan.
>
> **[4:26](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=266)** This command will read the plan and execute it.
>
> **[4:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=268)** The provider reports each step as it completes.
>
> **[4:35](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=275)** Okay, our configuration is deployed.
>
> **[4:38](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=278)** Let's take a look at the state that Terraform is tracking for our configuration.
>
> **[4:42](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=282)** The resources defined in a configuration represent actual resources that are created when the configuration is deployed.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=288)** Terraform stores a record of the state of those deployed resources.
>
> **[4:52](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=292)** By default, the state file is stored locally here in terraform.tfstate.
>
> **[4:57](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=297)** We can execute terraform show without specifying the tfplan file and hit Enter.
>
> **[5:04](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=304)** By default, the show command displays the state.
>
> **[5:06](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=306)** Terraform maintains the deployed configuration state in this file.
>
> **[5:10](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=310)** Whereas the plan is a binary file, the state is a plain text JSON file we can inspect in an editor.
>
> **[5:16](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=316)** I can double click it here and we can see the same output as we saw on the console.
>
> **[5:22](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=322)** Terraform keeps the state separate from the actual deployed resources.
>
> **[5:26](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=326)** We can see in these resource definitions that they all have their attributes populated, whereas in the plan, these values are mostly listed as known after apply.
>
> **[5:39](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=339)** We can see here, most of these attributes are only known after the resources are created.
>
> **[5:45](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=345)** When changes are made to the configuration, Terraform uses the state to compare against the resource graph of the updated configuration.
>
> **[5:52](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=352)** Differences between the plan and the current state file become actions that Terraform take to converge the desired state represented by the plan and the actual state represented in the state data.
>
> **[6:03](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=363)** We should check our deployment in the [[Google Cloud Platform (GCP)|Google Cloud]] console just to make sure everything looks as it should.
>
> **[6:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=368)** Let's keep going and do that next.
>
> **[6:10](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=370)** Quick note, if you're going to take an extended break at this point, skip to the destroying resources video and follow it so you don't leave these instances deployed for too long.
>
> **[6:19](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-the-terraform-configuration?u=76281980&t=379)** You can come back and redeploy them by following the instructions here, and then move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (28), [[JSON]] (4), [[CLI]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** terraform (28), make (2), find (1), cd (1)
> **Env Vars:** json (3), gcp (2), vpc (2), cli (1)
> **Definitions:** is a  (6), known as (1)
> **UI Navigation:** open the (1), dropdown (1), scroll up (1)
> **Tools:** terminal (1), gcp console (1)
> **URLs:** [webgraphviz.com](https://webgraphviz.com) (1)
> **Cross-References:** as we saw (1)

#### [Review deployed resources](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=0)** - [Instructor] Let's take a quick look at the resources we just deployed in the GCP console.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=4)** Open the GCP console in your browser, click on the hamburger in the top left, hover over VPC network and go to VPC networks.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=14)** This is the VPC that was created when you created your project.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=17)** The configuration refers to this VPC using the data resource.
>
> **[0:21](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=21)** Select the default VPC and then go to the Firewall tab.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=28)** Expand the firewall rules.
>
> **[0:31](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=31)** And here we can see the test firewall rule that was created by the configuration.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=36)** Let's go back to the hamburger icon, and now we can go to Compute Engine and scroll to VM Instances.
>
> **[0:45](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=45)** Here we can see the four VMs that were deployed.
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=48)** Note that the nginx-proxy is the only VM with a public IP.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=52)** If you like, you can try connecting to one of them by clicking the SSH button here.
>
> **[0:59](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=59)** And that's it.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=60)** We can see that all the resources defined in our configuration have been successfully deployed.
>
> **[1:04](https://www.linkedin.com/learning/advanced-terraform-18720794/review-deployed-resources?u=76281980&t=64)** Let's move on so we can learn how to remove all these resources.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (5), gcp (2), ssh (1)
> **UI Navigation:** go to (2), open the (1), click on (1), select the (1)
> **CLI Commands:** nginx (1), ssh (1)
> **Tools:** gcp console (2)
> **Cross-References:** go back to (1)
> **Definitions:** refers to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Destroying resources](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=0)** - Before we continue, we should clean up after ourselves.
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=3)** In the terminal, execute the following command.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=6)** [[Terraform]] Destroy.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=8)** Hit enter.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=12)** This command does what you'd expect, destroy all the resources defined by the configuration.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=18)** The destroy command generates a special plan which is the opposite of the current state.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=22)** This plan contains a removal action for all resources listed in the state.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=26)** Terraform displays the changes it will make and asks us to confirm explicitly by typing in yes.
>
> **[0:32](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=32)** Go ahead and do that now, and enter.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=35)** This will remove all the resources created by this configuration.
>
> **[0:39](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=39)** Just as Terraform knows the order in which to create, it can use the reverse order to destroy our deployed resources.
>
> **[0:46](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=46)** This is by definition, a destructive process.
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=48)** So proceed carefully when working with Terraform.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=51)** Removal of resources from higher-level environments, especially production, should be handled with extreme care.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=57)** The destroy command should never be used in a production environment.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=60)** It's a much better practice to remove resources from the configuration and apply the change, selectively destroying only the resources that should be removed.
>
> **[1:09](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=69)** We'll see examples of how to selectively remove individual resources later in the course.
>
> **[1:16](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=76)** Alright, so the Destroy plan has been applied.
>
> **[1:18](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=78)** We can go over into the GCP console and confirm.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=83)** So if we go to the compute instances, in the VM instances, we can see that they've been removed.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=91)** Let's talk for a moment about GCP costs.
>
> **[1:34](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=94)** GCP offers a free E2 micro instance for a full month.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=98)** I'll remind you throughout the course to perform a Terraform Destroy after each step is complete, so the total runtime for all the instances deployed should be far less than that.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=107)** Just be careful not to leave any resources running for longer than you need, and you should remain well within the free tier.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=114)** In case you ever have a problem with the Terraform Destroy command, you have a few options to manually destroy the resources that are deployed.
>
> **[2:01](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=121)** In most cases, you can simply visit the compute engine page here, and manually delete the instances you've created.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=127)** Select them all and select delete.
>
> **[2:12](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=132)** Another option is to open IAM, Manage Resources, and delete the project.
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=140)** This will instantly shut down all the resources in the project and stop billing for them.
>
> **[2:25](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=145)** You can then create a new project and begin to use it in place of the old one.
>
> **[2:29](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=149)** That's it for destroying resources.
>
> **[2:31](https://www.linkedin.com/learning/advanced-terraform-18720794/destroying-resources?u=76281980&t=151)** Let's go on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (6)
> **CLI Commands:** terraform (6), make (1)
> **Env Vars:** gcp (3), iam (1)
> **Cross-References:** later in (1), next video (1)
> **Tools:** terminal (1), gcp console (1)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - before (1)


### 2. Intermediate Terraform Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Input variables](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=0)** - [Instructor] Input variables are used to generalize a configuration so that it can be used in a variety of scenarios.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=6)** [[Terraform]] supports variables of several types, including a string, numerical values, a bool or boolean, lists and maps.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=16)** We'll focus on strings and booleans for now.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=19)** Go ahead and switch back over to Visual Studio Code.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=22)** And before we switch branches, let's take a look at the main.tf file.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=26)** All the values in these stanzas are hard coded including the project name, the region, and the zone.
>
> **[0:31](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=31)** This configuration is good for exactly one scenario.
>
> **[0:34](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=34)** We can introduce variables to make it adaptable to a variety of scenarios.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=40)** Open your integrated terminal and execute [[Git]] checkout 02_01 .
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=48)** This will switch to the branch with the code for this chapter.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=51)** We have a new file in our configuration, variables.tf.
>
> **[0:55](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=55)** All of our variable declarations are in this file.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=58)** Open the file by double clicking it.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=60)** Separating the variable declarations from the main configuration items in main.tf makes it easier to find elements of the configuration.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=68)** Terraform will combine all files with a .tf extension into the root module of the configuration.
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=75)** We'll get more into modules later.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=77)** All you need to know for now is that we can split this configuration into multiple files with a .tf extension and Terraform will combine them for us.
>
> **[1:25](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=85)** With both main.tf and variables.tf open, right click the variables.tf tab and select Split Right, then select the main.tf file on the left.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=98)** Now we can see both files at the same time.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=101)** The first variable declaration in variables.tf here is for the project-id.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=106)** This is about as simple as it gets for a variable declaration, the variable reserved [[Microsoft Word|word]], the name of the variable, and its type.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=114)** The next declaration defines a region variable.
>
> **[1:57](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=117)** This declaration is just a little different from the first.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=120)** It has a default value.
>
> **[2:02](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=122)** When a variable has a default value, that default value will be used unless we override it at runtime.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=128)** The project-id, however, does not have a default value.
>
> **[2:12](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=132)** This effectively makes the project-id required.
>
> **[2:15](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=135)** If we don't supply a value for the project-id variable, Terraform will prompt for it at apply time.
>
> **[2:22](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=142)** Here we have several more variables.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=144)** We have a subnet-name, we have the subnet-cidr which is the IP address range for the subnet, and we have private_google_access which will determine how the subnet can access [[Google]] APIs.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=157)** Now let's take a look at the differences in main.tf.
>
> **[2:41](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=161)** In the main branch, they were all hard coded.
>
> **[2:43](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=163)** In this branch, the attributes of the stanzas are updated to refer to the variable values.
>
> **[2:48](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=168)** The var.varnum syntax is used to refer to a variable value in Terraform, so var.project-id matches the project-id name here.
>
> **[2:57](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=177)** And same for the region and the zone.
>
> **[3:01](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=181)** Our configuration can now be applied to any project and in any region and zone by setting the project-id region and zone variables.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=190)** When I created this branch, I added the variables.tf file, added the variables to that file, and updated the main.tf resource attributes.
>
> **[3:19](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=199)** When I finished with those changes, I used the terraform validate command to confirm that the configuration is still syntactically correct.
>
> **[3:26](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=206)** You can try that now.
>
> **[3:27](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=207)** Enter terraform validate.
>
> **[3:35](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=215)** The validate command will check the syntax of the entire configuration and report any errors.
>
> **[3:40](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=220)** Anytime you make a change to a configuration, it's a good practice to run the validate command to check for errors before you commit the change to your repository.
>
> **[3:49](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=229)** The last thing we need to talk about before we can generate a plan is how to set variable values.
>
> **[3:54](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=234)** There are three methods.
>
> **[3:55](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=235)** The first is the terraform.tfvars file.
>
> **[3:59](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=239)** The next are command line options.
>
> **[4:02](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=242)** And lastly, environment variables.
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=246)** Each of these methods is best for different scenarios.
>
> **[4:09](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=249)** We'll use a combination of a .tfvars file and the command line.
>
> **[4:13](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=253)** Create a new file in the same directory as main.tf by clicking the icon here, and we'll call it terraform.tfvars.
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=262)** You'll notice that it's grayed out because it's part of the .gitignore file.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=267)** Now enter subnet-cidr, we'll get a little IntelliSense here, and we'll enter 10.127.0.0/24.
>
> **[4:38](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=278)** This is the IP address range for our subnet.
>
> **[4:42](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=282)** Save the file, and now we're ready to create a plan.
>
> **[4:46](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=286)** We're going to add a new command line option this time.
>
> **[4:49](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=289)** Remember that the project-id variable is required because it has no default.
>
> **[4:53](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=293)** We'll use a command line option to set that value.
>
> **[4:56](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=296)** The command will be terraform plan out, -out s1.tfplan -var="project-id=,
>
> **[5:12](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=312)** and then your project id, in my case, it's advancedterraform".
>
> **[5:19](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=319)** If we emitted the project-id setting, we'd be prompted for the value.
>
> **[5:23](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=323)** This is not a problem when running interactively as we are now, but it won't work when we're automating Terraform.
>
> **[5:29](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=329)** Let's take a look at the plan.
>
> **[5:30](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=330)** You'll see that the value you entered into the terraform.tfvars file for the variables have been set for the subnet.
>
> **[5:37](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=337)** So if we scroll to the subnet here, it's right here, and we have the ip_cidr_range matches the value that we set in the tfvars file.
>
> **[5:46](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=346)** We'll hold off on applying this configuration for now as we've got more to learn about variables.
>
> **[5:51](https://www.linkedin.com/learning/advanced-terraform-18720794/input-variables?u=76281980&t=351)** So let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (12), [[Git]] (1), [[Microsoft Word|Word]] (1), [[Google]] (1)
> **CLI Commands:** terraform (12), make (2), git (1), find (1)
> **Tools:** command line (4), visual studio (1), terminal (1)
> **UI Navigation:** switch to (1), open the (1), select the (1)
> **Code Identifiers:** private_google_access (1), ip_cidr_range (1)
> **Versions:** 10.127.0 (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Using input variables](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=0)** - So far, we've added string and Bool variables.
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=3)** Now that we've seen some simple examples of variables, we're going to look at some more complex ones.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=8)** First, I want to show you what to do if you've made changes in a branch and you want to switch to another branch.
>
> **[0:13](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=13)** If you try to switch branches with uncommitted changes, you'll see this error here.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=18)** (keyboard gently clicking) The fix is to throw away the changes in the current branch before you switch.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=27)** Here are the commands to do that: "[[Git]] stash," and then "git stash drop."
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=35)** Now, you can go ahead and switch.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=38)** We'll go ahead and switch to, "02_02."
>
> **[0:42](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=42)** Now, we can take a look at some new variables in variables.tf.
>
> **[0:46](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=46)** We have target environment, which is just a simple string.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=50)** We have environment list, which is a list of strings.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=54)** We have environment map, which is a map of strings.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=57)** And we have environment machine type, another map of strings.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=61)** And then a complex map object, which we'll be using later in the course.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=68)** So, we have three new variable types represented here: list, map, and object.
>
> **[1:12](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=72)** What are these variables for?
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=75)** If you've ever worked with an application deployment, you're probably familiar with environments.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=79)** Operational environments consist of infrastructure, such as VMs, networks, and storage.
>
> **[1:24](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=84)** Each environment is on its own isolated network.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=87)** Environments typically contain similar resources, but not the same.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=91)** Dev and QA environments often need fewer, less costly resources, than typical staging and production environments.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=98)** We're going to use these new variables to define those differences.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=102)** When we're finished, a single common configuration will be flexible enough to deploy all the environments, despite the fact that their resources are not all exactly the same.
>
> **[1:52](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=112)** Dev and QA environments are used to test application code before it goes to the production environment.
>
> **[1:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=117)** We're modeling four environments here you can see in the first new variable: "environment_list."
>
> **[2:02](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=122)** So, suppose we want to add a label to our resources to indicate which environment they're assigned to.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=127)** We can add a label attribute to our compute instances to do that.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=131)** Labels are just user-defined key value pairs used for reporting and logging.
>
> **[2:15](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=135)** Let's use a variable instead, so that the value of the label can be set to the variable value.
>
> **[2:21](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=141)** I'm going to make some changes to the main.tf file to demonstrate.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=144)** Just watch, but don't make any changes to your file.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=148)** So to add a label, I can come over here and enter, "labels = open bracket," "environment = dev."
>
> **[2:39](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=159)** This is a simple label.
>
> **[2:41](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=161)** So now, we've hard coded the value of this label.
>
> **[2:44](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=164)** We could use the environment list variable instead, and that would look like this: "environment_list (0)."
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=175)** This would work, but it's not very readable.
>
> **[2:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=177)** We'd have to remember the list order every time.
>
> **[2:59](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=179)** Let's try again.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=180)** This time, we'll use the environment map.
>
> **[3:03](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=183)** (keyboard gently clicking) That's better, much more readable.
>
> **[3:12](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=192)** Maps are key value pairs.
>
> **[3:14](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=194)** The index in square brackets is the key, and the value is the associated value in the pair.
>
> **[3:19](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=199)** So the value for dev here, on environment map, is "_dev."
>
> **[3:27](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=207)** We can see that the declaration shows the type is a map, and in parenthesis, we define the type of the values in the map.
>
> **[3:34](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=214)** The default type for a map is string, so we don't strictly have to list that here, but I've listed it here for clarity.
>
> **[3:40](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=220)** There's another map we can also apply.
>
> **[3:43](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=223)** (keyboard gently clicking) There's one more step to make this configuration different for each environment.
>
> **[3:51](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=231)** The key value in these map variables is still hard coded, so let's change that.
>
> **[3:58](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=238)** (keyboard gently clicking)
>
> **[4:10](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=250)** The index of the maps is now also a variable.
>
> **[4:13](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=253)** We can apply these changes to every compute instance in the configuration, and change the behavior of the entire configuration just by setting a single variable: "target_environment."
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=262)** I've already done that in a new branch.
>
> **[4:24](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=264)** Execute, "git checkout 02_ 02A," to see the changes.
>
> **[4:30](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=270)** So, bear with me while I revert these changes.
>
> **[4:33](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=273)** (keyboard gently clicking) Don't execute this command, but do execute "02_02A."
>
> **[4:45](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=285)** Note that in this branch, I've updated the machine type with slightly larger VM sizes in the upper environments.
>
> **[4:51](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=291)** So we've got "f1-micro" for dev, and then "e2-micro" for QA and staging, and then an "e2-medium" for production.
>
> **[4:59](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=299)** (keyboard gently clicking) We can see the effect of these changes by experimenting with [[Terraform]] Plan.
>
> **[5:06](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=306)** In your terminal, execute "terraform plan -out s1.tfplan
>
> **[5:13](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=313)** - var='project-id=,'" and your project ID, and "var='target environment=dev.'"
>
> **[5:30](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=330)** Scroll up and find one of the compute instances.
>
> **[5:36](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=336)** Here we go.
>
> **[5:39](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=339)** And you'll see that the machine type is set to "f1-micro."
>
> **[5:42](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=342)** This is the value that's associated with the dev key in the environment machine type variable.
>
> **[5:47](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=347)** Let's try again with a different value for the target environment.
>
> **[5:50](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=350)** So we can scroll back down, and just this time, make the target environment "PROD."
>
> **[5:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=357)** (keyboard gently clicking) Look at the plan again... We'll go back to our VM here.
>
> **[6:04](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=364)** Here it is.
>
> **[6:05](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=365)** And voila, the type has changed to "e2-medium" because that's the value associated with the prod key in that variable.
>
> **[6:12](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=372)** You can also see that the label setting has changed as well.
>
> **[6:16](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=376)** This may seem like a big improvement, and it is, but there's much more variables can do to simplify this configuration.
>
> **[6:21](https://www.linkedin.com/learning/advanced-terraform-18720794/using-input-variables?u=76281980&t=381)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (3), [[Terraform]] (2)
> **CLI Commands:** make (4), git (3), terraform (2), find (1)
> **Non-Speech:** (keyboard gently clicking) (7)
> **Definitions:** is a  (4)
> **Code Identifiers:** environment_list (2), target_environment (1)
> **UI Navigation:** switch to (2), scroll up (1)
> **Cross-References:** later in (1), go back to (1)
> **Speakers:** - so (1), - var (1)

#### [Output variables](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=0)** - [Instructor] Computer programs typically have return values that report the status of an operation.
>
> **[0:05](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=5)** [[Terraform]] output variables are like the return values of a configuration.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=9)** Output values have a name and a value.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=12)** The name is a string unique to the configuration.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=14)** The value can be any attribute of any resource in the configuration, and it may be of any type supported by Terraform.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=22)** In the integrated terminal execute terraform show s1.tfplan.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=27)** This output shows the contents of the plan we created earlier.
>
> **[0:31](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=31)** Note that many of these entries say, "Known after apply."
>
> **[0:34](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=34)** Terraform won't know what these values are until the configuration is deployed, because those values are assigned by GCP when the resource is created.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=43)** There are many situations where we'll want to output some of those values to pass them on to later steps in an infrastructure deployment.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=51)** At this point, you can follow along with me, or just execute [[Git]] checkout 02 03 to go to the results.
>
> **[1:02](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=62)** We can output data by defining output variables in the configuration.
>
> **[1:07](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=67)** I'll create a new file called outputs.tf, and we'll split the view, so we can see the main.tf at the same time.
>
> **[1:20](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=80)** Remember that Terraform will combine all the .tf files together, so we can split the configuration up into multiple files to keep it well organized.
>
> **[1:28](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=88)** Let's start with a simple example.
>
> **[1:32](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=92)** This is the structure of an output variable, the output keyword, a name, and then value equals, and the path to the value we want to report after the configuration is applied.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=101)** So in this case, we're just going to report back the gateway address for the subnet that we created.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=107)** Now let's look at a more complex path.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=109)** One thing we'll want to know after this is deployed, is the public IP address of the NGINX proxy server.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=115)** We can add an output variable so that it will be reported when we deploy.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=119)** So I'm going to add output nginx public ip,
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=128)** and curly brackets, and we're going to say value equals, and now we need to find the path to the IP address.
>
> **[2:15](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=135)** So in the plan here, if I scroll up to the NGINX server, give me a moment to find it here, there's web two.
>
> **[2:23](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=143)** There is web one, and this should be our NGINX, here it is.
>
> **[2:30](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=150)** So the path will be [[Google]] compute instance.nginx instance, and then we'll come down to the network interface, .network interface, .access config, .nat ip, this is the public IP address.
>
> **[2:43](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=163)** So, we'll go ahead and enter that in.
>
> **[2:46](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=166)** We'll start with Google compute instance.nginx instance,
>
> **[3:02](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=182)** .network_interface, .access config, .nat ip,
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=193)** it's quite long.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=195)** All right, so we've made a change, let's use Terraform validate to make sure that our syntax is correct.
>
> **[3:21](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=201)** So in our integrated terminal, we will execute Terraform validate.
>
> **[3:28](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=208)** And make sure to save the file, and we'll check it.
>
> **[3:32](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=212)** Oh, it looks like we have an error.
>
> **[3:35](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=215)** Terraform error messages are very descriptive, so let's read this one carefully.
>
> **[3:39](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=219)** It looks like we need to change our variable, because the network interface and access config are lists.
>
> **[3:45](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=225)** This makes sense, because compute instances can have multiple network interfaces, and each network interface can have multiple access configs, which define the public IP, or nat_ip.
>
> **[3:56](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=236)** The error shows us how to express the output variable.
>
> **[3:59](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=239)** You may remember from earlier that we can address list items using their numerical index, so the output variable should look like this.
>
> **[4:07](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=247)** Network interface at zero.
>
> **[4:15](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=255)** Access config at zero.
>
> **[4:21](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=261)** And now we can run Terraform validate again, and we're good to go.
>
> **[4:26](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=266)** Our compute instances only have the one network interface, so we access it using the first index which is zero.
>
> **[4:32](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=272)** Every one of the attributes you see in a resource declaration, aligns to a Terraform type.
>
> **[4:37](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=277)** So it's important to know what those types are when working with output variables.
>
> **[4:41](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=281)** I'll scroll over to our NGINX definition here, and here's a trick, you can hover over an attribute in the editor.
>
> **[4:51](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=291)** The documentation for that attribute will display, along with its type.
>
> **[4:55](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=295)** Now let's generate a new plan.
>
> **[4:58](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=298)** Terraform plan, and we will use dev for our target environment.
>
> **[5:05](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=305)** And we can see we have our output variables listed here, and they'll be known after we apply, so let's go ahead and do that.
>
> **[5:13](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=313)** Terraform apply s1.tfplan.
>
> **[5:19](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=319)** All right, we're deployed, and we can see our output variables at the bottom.
>
> **[5:23](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=323)** We can add as many output variables as we need, to report back values created at deploy time.
>
> **[5:29](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=329)** That's it for output variables for now, let's destroy this configuration before we move on.
>
> **[5:34](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=334)** Terraform destroy, we'll need to enter the project ID, true yes, and this will remove our deployment.
>
> **[5:46](https://www.linkedin.com/learning/advanced-terraform-18720794/output-variables?u=76281980&t=346)** That's it for output variables, we've got more to cover, so let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (13), [[Google]] (2), [[Git]] (1)
> **CLI Commands:** terraform (13), nginx (7), find (2), make (2), git (1)
> **Env Vars:** nginx (4), gcp (1)
> **Code Identifiers:** network_interface (1), nat_ip (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1), scroll up (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Sensitive data](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=0)** - [Instructor] The default behavior of [[Terraform]] is to include all variable values in Terraform plan, apply, and show commands.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=6)** Variables often contain sensitive data like usernames and passwords.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=10)** Sensitive data should not be leaked into plans or console output.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=14)** Terraform provides a feature that will mark input and output variables as sensitive.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=18)** Suppose we want to use [[Google Cloud Platform (GCP)|Google Cloud]] [[SQL]] instead of our VM-based DB instance.
>
> **[0:23](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=23)** The native user account from [[MySQL]] and [[PostgreSQL|Postgres]] [[Databases]] require a username and password.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=28)** Let's look at the code for this chapter.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=30)** Execute [[Git]] checkout 02_04. (keyboard clicking) Now, execute gcloud space services space enable space sqladmin.[goodleapis.com](https://goodleapis.com).
>
> **[0:42](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=42)** In case you want to deploy this, we'll need this to be able to create the Cloud SQL instance.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=47)** (keyboard clicking) And then finally, (keyboard clicking) we're going to rerun terraform init.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=54)** This configuration has an additional resource that has a separate provider, so we'll need to rerun that command, and we'll scroll down in main.tf.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=65)** Here's our Cloud SQL instance, our Cloud SQL user, and this is a random resource that has its own provider.
>
> **[1:11](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=71)** That's why we had to re-run terraform init.
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=75)** If we run plan apply, we'll see the username in plain text and the password redacted.
>
> **[1:20](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=80)** So we'll run our terraform plan.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=83)** (keyboard clicking) (mouse clicking) Scroll up a little bit.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=90)** And here, we can see that the name is in clear text, but the password is marked sensitive.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=95)** Let's suppose we consider the username to be sensitive as well.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=98)** The solution would be to mark a variable as sensitive in the variable declaration.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=102)** Execute git checkout 02_04a.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=107)** (keyboard clicking) And now, in variables.tf, I have two new variables: one for the username, and one for the password.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=115)** We can see here that I've marked both of them as sensitive.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=119)** Now, we can set the values for the username and password in the terraform.tfvars file.
>
> **[2:03](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=123)** So I will click on terraform.tfvars, and dbusername equals, (keyboard clicking) we'll just call it dbuser. (keyboard clicking) And dbpassword will just be.
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=140)** (keyboard clicking) We'll just say dbpassword.
>
> **[2:25](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=145)** Obviously, that's not secure, (keyboard clicking) but it's just for fun.
>
> **[2:30](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=150)** Now, we can run our Terraform plan.
>
> **[2:32](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=152)** (mouse clicking) (keyboard clicking) Now, if we scroll up to our user, we can see that both the name and the password are now marked as sensitive.
>
> **[2:44](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=164)** This demonstrates how marking a variable as sensitive will prevent it from being exposed in a plan or output to the shell history.
>
> **[2:50](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=170)** Now, Cloud SQL deployments take a long time, so I'm not going to bother with deploying this.
>
> **[2:54](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=174)** You can deploy it if you like to with a Terraform apply.
>
> **[2:57](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=177)** I've left this DB instance out of the configuration for future videos so it doesn't bloat the deploy time.
>
> **[3:04](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=184)** Marking variables as sensitive is one step towards securing secrets used to deploy infrastructure, but it's not enough by itself.
>
> **[3:11](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=191)** The state file should also be considered sensitive.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=195)** (mouse clicking) Regardless of variable setting, Terraform must save passwords in clear text in the state file to determine if the value has changed between deployments.
>
> **[3:24](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=204)** If you were to deploy this, you would be able to see that password in the state file.
>
> **[3:28](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=208)** One of the techniques we can use to secure the state is remote state, which we'll cover later.
>
> **[3:34](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=214)** Some methods for setting variable values are more secure than others.
>
> **[3:37](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=217)** For example, the tfvars file might be okay in limited cases for test environments, but we don't want credentials on developer workstations.
>
> **[3:45](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=225)** Environment variables and command line parameters are good for ephemeral execution environments like CI/CD pipelines.
>
> **[3:52](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=232)** We'll see that when we learn about Terraform automation.
>
> **[3:55](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=235)** Terraform can also integrate the secrets management systems like HashiCorp Vault.
>
> **[3:59](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=239)** Secrets management systems are specifically designed to secure secrets, ensuring that they're secure in transit and at [[Representational State Transfer (REST)|rest]].
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/sensitive-data?u=76281980&t=246)** We'll see some of these techniques in use later in the course, so let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (13), [[SQL]] (5), [[Git]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[MySQL]] (1)
> **CLI Commands:** terraform (13), git (2), mysql (1), gcloud (1), cd (1)
> **Non-Speech:** (keyboard clicking) (10), (mouse clicking) (3)
> **Env Vars:** sql (5)
> **UI Navigation:** scroll up (2), scroll down (1), click on (1)
> **URLs:** [goodleapis.com](https://goodleapis.com) (1)
> **Cross-References:** later in (1)
> **Tools:** command line (1)

#### [Looping with count](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=0)** - [Instructor] If you're familiar with any programming language you may have worked with loops.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=4)** Loops repeat a set of instructions.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=6)** Loops simplify code by reducing repetition and reducing the number of lines necessary to perform an action.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=12)** Some loops use a simple numerical counter.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=14)** Other loops iterate over a collection of items.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=17)** [[Terraform]] and the HashiCorp Configuration Language support both these types of loops.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=22)** We have three nearly identical compute instances in this configuration, so let's use a loop to cut it down to size.
>
> **[0:29](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=29)** The only thing that differs between our three [[Web Servers]] are their names, which follow a web number convention, web1, web2, and web3.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=36)** We can easily shorten this using the count meta-argument.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=40)** First, let's run a quick check to make sure you don't have any instances deployed.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=43)** In your terminal execute gcloud compute instances list.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=50)** You should see listed zero items.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=52)** If you have instances from a previous Terraform apply you'll need to destroy them, execute Terraform destroy, and then enter your project ID if prompted.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=60)** If that doesn't work for any reason you'll need to return to the destroying resources video and follow the instructions to delete your resources manually.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=68)** Then execute [[Git]] checkout 02_05.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=77)** Open main.tf and outputs.tf, and side by side by clicking, right-clicking, and going to Split Right.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=87)** Main.tf on the left, and now we can see them both.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=90)** All I've added at this point is a few extra output variables.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=93)** Here we have all the private IPs for the web servers.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=97)** Returning to main.tf we've seen these three web servers for a while now.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=102)** You've probably noticed how the declarations are very repetitive.
>
> **[1:45](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=105)** I'm going to show you how to condense these three stanzas into one.
>
> **[1:48](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=108)** You can follow along in your editor or just watch, and I'll tell you when to execute a Git command to catch up.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=114)** First, I'm going to make a copy of the first web resource and paste it in up here.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=124)** And I'm going to call it web-instances.
>
> **[2:10](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=130)** Now I'm going to comment out all three of these.
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=140)** Scrolling back up, now I only have to make two changes.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=144)** First, count equals three as the first line in this stanza, and then I'm going to change the name.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=157)** The count meta-argument here will cause Terraform to create three separate resources using this stanza as a template.
>
> **[2:44](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=164)** Count.index is the value of the counter for each iteration of the loop.
>
> **[2:48](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=168)** We're using it in the name here.
>
> **[2:49](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=169)** This syntax with the dollar sign and the curly brackets is called a string interpolation.
>
> **[2:54](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=174)** It's a bit like an inline function.
>
> **[2:56](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=176)** The index value is converted from a number to a string and appended to web, which gives us our web1, web2, web3 instance names.
>
> **[3:03](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=183)** We've condensed our web instances into a single stanza, now let's check our configuration.
>
> **[3:08](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=188)** I'll execute Terraform validate, and it looks like we have some errors.
>
> **[3:16](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=196)** Why is that?
>
> **[3:17](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=197)** Well, our output variables are no longer valid because I commented out the individual web instances to make the single stanza using count.
>
> **[3:24](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=204)** We'll need to change the way we access the attribute data now that we're using the count meta-argument.
>
> **[3:29](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=209)** First, I'll comment out these output variables here for the web servers.
>
> **[3:36](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=216)** Then I'll create a new output variable.
>
> **[3:39](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=219)** Output webserver-ips, open bracket, and then value equals
>
> **[3:49](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=229)** Google_compute_instance.web-instances
>
> **[3:58](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=238)** to refer to our new stanza in main.tf.
>
> **[4:02](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=242)** Now what?
>
> **[4:03](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=243)** Remember, every attribute you see in a stanza has a type.
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=246)** The type of web1 in this commented stanza here represents an object that represents a [[Google]] compute instance.
>
> **[4:14](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=254)** The type of web-instances in this new stanza is a list of compute instances.
>
> **[4:19](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=259)** It has three numbers, one each for the integers one through three in the count value in the stanza in main.tf.
>
> **[4:26](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=266)** If we were to set the count to five this list would have five numbers.
>
> **[4:29](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=269)** We want to output the private IPs of our web servers.
>
> **[4:32](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=272)** We need a way to flatten the web-instances list so that we can get to the individual instance attributes.
>
> **[4:38](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=278)** We can do that with a special splat operator.
>
> **[4:41](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=281)** So, that'll be open square bracket, closed square bracket then star, then network_interface at zero and then network_ip.
>
> **[5:02](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=302)** The splat operator is equivalent to a for expression.
>
> **[5:05](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=305)** We'll see more about expressions later in the course.
>
> **[5:07](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=307)** You can read this whole value setting as shorthand for the statement for every Google compute instance in web instances output the network IP of the first network interface.
>
> **[5:18](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=318)** We'll do a quick validate here.
>
> **[5:22](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=322)** And our syntax is good.
>
> **[5:25](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=325)** If you've been following along, first, we need to stash and drop our changes at this point.
>
> **[5:29](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=329)** So, git stash and git stash drop.
>
> **[5:35](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=335)** Now we can switch branches, git checkout 02_05a.
>
> **[5:42](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=342)** Now we need to check the terraform.tfvars file.
>
> **[5:45](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=345)** If you have these database settings here just go ahead and comment them out, save the file.
>
> **[5:53](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=353)** And now we can visualize the effect of our configuration by generating a new plan, so we'll execute our usual plan command.
>
> **[6:04](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=364)** I'll scroll up so we can see how Terraform represents the resources in our stanza that uses count, so we'll find our VMs here.
>
> **[6:12](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=372)** There's web-instances[2], and one, and zero.
>
> **[6:20](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=380)** You'll notice that we still have three compute instances, but now they're referenced by their index in the list.
>
> **[6:26](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=386)** Scrolling back down to the bottom, here at the bottom of the plan are our outputs.
>
> **[6:31](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=391)** See the square brackets for the value of webserver-ips?
>
> **[6:34](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=394)** This indicates that the type of the output variable is a list.
>
> **[6:38](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=398)** Let's see our configuration in action.
>
> **[6:40](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=400)** Go ahead and execute Terraform apply.
>
> **[6:47](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=407)** All the same resources have been created with much less code.
>
> **[6:50](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=410)** You can take some time to look at these resources in the GCP console if you'd like, then let's come back and clean up and destroy this deployment before we move on, Terraform destroy.
>
> **[7:01](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=421)** And our project ID is a variable setting.
>
> **[7:07](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=427)** Enter yes.
>
> **[7:12](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=432)** Now let's see how much code we were able to eliminate.
>
> **[7:15](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=435)** I'll go ahead and pull this down, and we'll open up the file so we can take a look.
>
> **[7:21](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=441)** In your terminal execute git checkout 02_05b,
>
> **[7:30](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=450)** and here I've removed all the commented code.
>
> **[7:33](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=453)** So, our main.tf file is 101 lines of code, and outputs has gone to 12.
>
> **[7:40](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=460)** So, that's main.tf from 161 lines in the original branch down to 101 lines, and outputs.tf from 24 lines down to 12.
>
> **[7:49](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=469)** That's almost 40% less code to achieve a configuration that does the exact same thing as before.
>
> **[7:55](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=475)** Not bad, but would you believe we can do even better?
>
> **[7:57](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-count?u=76281980&t=477)** Let's move on and see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (9), [[Git]] (6), [[Web Servers]] (5), [[Google]] (2)
> **CLI Commands:** terraform (9), git (6), make (4), gcloud (1), find (1)
> **Definitions:** is a  (3), is called (1)
> **Tools:** terminal (2), gcp console (1)
> **Code Identifiers:** network_interface (1), network_ip (1)
> **Prerequisites:** you'll need (2)
> **Env Vars:** gcp (1)
> **Cross-References:** later in (1)

#### [Looping with for_each](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=0)** - [Instructor] So far, we've seen one example of looping that uses a number as the incrementer.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=4)** Count uses a number as a counter to create multiple resources.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=8)** Now let's look at a data-driven looping technique, for-each.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=12)** Execute [[Git]] checkout 02_06, and we'll take a look at a change to main.tf.
>
> **[0:20](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=20)** So we'll scroll down here and we have some buckets.
>
> **[0:24](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=24)** A [[Google]] storage bucket is an object store for files.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=27)** For this example, let's suppose we want to create a bucket for each environment.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=30)** We already have a list of environments here, in the environment_list variable.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=35)** So what this will do here, is create one bucket for every member of this list.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=41)** Here we have for each equals, and then we're using the two set built-in function to convert the list to a set.
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=48)** for-each can only work with sets and maps, so we have to convert the list to a set.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=54)** When using for-each, the set becomes the indexer, whereas count uses count.index to access the numerical value of the index for-each loop, for-each uses each.key, which we can see here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=66)** Bucket names have to be globally unique, so I'm appending the project ID here to the names of the buckets, to ensure that they're unique.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=74)** So let's execute a plan.
>
> **[1:18](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=78)** And we'll scroll up here and we'll see our buckets listed in the plan here, and you can see that instead of numbers, we have the key values of our list.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=90)** So now let's look at a slightly more complex example.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=93)** Over here in variables.tf, we have environment instance settings.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=98)** So this is a map of objects.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=100)** We have our keys here, as we have in several other variables here, but the values are objects, which can contain multiple different values.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=109)** I'm using this mechanism here to bundle several environment specific settings into a single key.
>
> **[1:56](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=116)** Now let's execute git checkout 02_06a.
>
> **[2:01](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=121)** And we can see I've added a new stanza, to use this technique to create some VMs.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=128)** Here we have web map instances, and I'm using the for-each technique here, based on this value here in this variable.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=137)** When iterating over a map, for-each uses each.key and each.value to access the map keys and values respectively.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=144)** So we've done that here for the machine type, and for the labels.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=148)** So for-each in this case will create one web server per environment using these settings.
>
> **[2:34](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=154)** Now we'll run our plan again.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=157)** And this time we'll have the VMs created from the web map instances, and from the count technique that we used before.
>
> **[2:45](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=165)** And now we'll do [[Terraform]] apply.
>
> **[2:50](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=170)** And our deployment is finished, now we can go over to our web browser, and take a look at the resources that were deployed.
>
> **[2:56](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=176)** From the dashboard, go to the hamburger, select compute engine and go to VM instances.
>
> **[3:03](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=183)** And here we can see the count mechanism here being used, and we can see the for-each being used here.
>
> **[3:12](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=192)** Stage, QA, and dev and prod.
>
> **[3:16](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=196)** All right, let's clean up.
>
> **[3:22](https://www.linkedin.com/learning/advanced-terraform-18720794/looping-with-for-each?u=76281980&t=202)** All right, we're all cleaned up, and that's about it for looping, let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Google]] (1), [[Terraform]] (1)
> **UI Navigation:** go to (2), scroll down (1), scroll up (1)
> **CLI Commands:** git (2), terraform (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** environment_list (1)
> **Speakers:** - [instructor] (1)

#### [Expressions and functions](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=0)** - [Instructor] Developing configurations in [[Terraform]] is similar to developing software.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=4)** HashiCorp Configuration Language, or HCL, is a domain-specific language, or DSL.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=10)** DSLs are limited languages that share some but not all of the features of a fully featured language, like [[Java]] or C#.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=16)** Fully featured languages support expressions and user-defined functions.
>
> **[0:21](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=21)** HCL supports expressions and a library of predefined functions.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=25)** An expression is a statement that can be evaluated by the Terraform [[CLI]].
>
> **[0:29](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=29)** This can be a simple literal value, a mathematical or a conditional statement, and calling a Terraform function.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=36)** HCL does not support user-defined functions.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=38)** Instead, Terraform includes a set of built-in functions.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=41)** Terraform functions allow for things like string manipulation, working with [[Data Structures]], IP subnets, and more.
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=48)** We won't be deploying this configuration just yet, so you don't need to worry about setting up the .tfrs file.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=54)** Let's use a new CLI command to experiment with expressions and functions.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=58)** Terraform console.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=60)** Go ahead and execute that.
>
> **[1:04](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=64)** This command starts a REPL, R E P L, which stands for read-evaluate-print loop.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=70)** A REPL is an interactive program that accepts input, evaluates it, and prints a result.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=74)** The loop is the prompt for the next input.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=77)** Our [[Linux]] command prompt is an example of a REPL, as is any interactive or shell program that accepts input in this way.
>
> **[1:24](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=84)** We can use Terraform Console to experiment with expressions and functions.
>
> **[1:29](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=89)** The commands we execute here will work exactly the same as if they were part of a configuration.
>
> **[1:34](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=94)** So let's start simple.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=95)** I'll just type some things in here.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=97)** Five. Hello.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=101)** These are literal values, just a number in a string.
>
> **[1:43](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=103)** The Terraform console REPL just echoes their values back to us.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=107)** Now let's try some math.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=114)** We can see here that the REPL evaluates these as mathematical expressions and returns the result.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=119)** Let's try some basic logical operations.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=124)** And now for our last trick, we have some basic support for conditional logic.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=128)** We're going to do five not equal to five, question mark, foo colon bar, and we get a result.
>
> **[2:21](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=141)** This is called a ternary operator.
>
> **[2:23](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=143)** It's like an if statement, but it can only evaluate to a single result value.
>
> **[2:27](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=147)** If the conditional part here is true, then the first element after the question mark is the result of the expression.
>
> **[2:33](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=153)** If false, the second element after the colon becomes the result.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=157)** You can read this like, if five is not equal to five, then foo, else, bar.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=162)** We can see that if I use the opposite here... Then I get the other result.
>
> **[2:51](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=171)** So Terraform and HCL support some of the essential features of a programming language, including basic expressions.
>
> **[2:58](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=178)** Now let's take a look at a few function examples.
>
> **[3:02](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=182)** Length Terraform.
>
> **[3:05](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=185)** This returns nine, because length returns the length of the string.
>
> **[3:09](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=189)** Now we'll try upper.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=193)** You'll probably guess what this will do.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=195)** It turns the string uppercase.
>
> **[3:18](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=198)** We also have split.
>
> **[3:20](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=200)** You may have seen this before in other languages, and we're going to give it one, two, three.
>
> **[3:27](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=207)** This will return a list using the comma to split the string.
>
> **[3:32](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=212)** We can do the opposite, join.
>
> **[3:42](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=222)** Oh, we forgot our close parenthesis.
>
> **[3:45](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=225)** There we go.
>
> **[3:46](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=226)** This gives us back a string from a list.
>
> **[3:49](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=229)** So one more thing I'd like to show you is that the console can also read from the state.
>
> **[3:53](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=233)** So let's exit here, and get checkout 02_07.
>
> **[4:01](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=241)** Then we'll run a plan and apply.
>
> **[4:05](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=245)** Now, you've seen the plan several times now.
>
> **[4:07](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=247)** Go ahead and see if you can try to do it on your own and come back and I'll demonstrate once more.
>
> **[4:13](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=253)** Alright, so Terraform plan out equals p1.pfplan and our variables.
>
> **[4:21](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=261)** Okay, and now we'll apply.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=267)** All right, we're deployed, and now let's restart the Terraform console, and we can take a look at some of our resources.
>
> **[4:34](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=274)** So I'm going to take a look first at the subnet.
>
> **[4:37](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=277)** All I have to do is type in the resource name path here, and I get back all Terraform knows about the state.
>
> **[4:46](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=286)** We can try it again.
>
> **[4:47](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=287)** This time we'll do [[Google]] compute_firewall.default.
>
> **[4:56](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=296)** Once again, everything the state contains for the firewall.
>
> **[4:59](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=299)** Notice again how the output of the state is formatted as a valid [[JSON]].
>
> **[5:03](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=303)** This makes it easy to reason about the structure of the state and to write scripts or programs that can parse the state and use it for all sorts of purposes, like crafting complex configurations.
>
> **[5:13](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=313)** Remember how we had to change the output variable syntax when we introduced the count meta argument?
>
> **[5:18](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=318)** The syntax for the value was quite different than for a single resource.
>
> **[5:22](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=322)** If we go open the variables here in the... Actually, in the outputs, we'll see here, we introduced our splat operator there.
>
> **[5:30](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=330)** The console is great for inspecting the state to understand exactly how to access deeply nested attributes.
>
> **[5:36](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=336)** So we can start here with just the web instances list that we created when we introduced count.
>
> **[5:43](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=343)** If we scroll, this gets quite long, but if we scroll, you can see that it's represented as a very long list, because this is all of the instances in that list.
>
> **[5:55](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=355)** We can drill down one and include the splat operator, and we can drill down again and keep drilling down until we get to just the network interface.
>
> **[6:06](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=366)** Here, we have just the network interface of each instance in the list, and we can drill down one more time all the way down to just the IPs.
>
> **[6:18](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=378)** So this is a great technique for drilling into a resource to understand how to express the path to that attribute.
>
> **[6:25](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=385)** So, Terraform Console is a great resource for experimenting and testing expressions and functions.
>
> **[6:30](https://www.linkedin.com/learning/advanced-terraform-18720794/expressions-and-functions?u=76281980&t=390)** Let's go on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (14), [[CLI]] (2), [[Java]] (1), [[Data Structures]] (1), [[Linux]] (1)
> **CLI Commands:** terraform (14)
> **Env Vars:** repl (5), hcl (4), cli (2), dsl (1), json (1)
> **Definitions:** is a  (4), is an  (2), stands for (1), is called (1)
> **Analogies:** similar to (1), it's like (1)
> **Code Identifiers:** compute_firewall (1)
> **Cross-References:** next video (1)
> **Tools:** command prompt (1)

#### [Introduction to modules](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=0)** - [Instructor] A [[Terraform]] module is a self-contained, encapsulated set of resources.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=4)** It's useful to think of a module as a sub configuration.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=7)** It has input and output variables and modules are written in HCL.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=12)** HashiCorp and open source contributors maintain a large library of modules for Terraform users.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=18)** Modules can vastly simplify a configuration by reducing the number of lines needed to execute complex configurations.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=25)** GCP modules are available for service accounts, compute engine VMs, GKE, and many more.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=33)** Terraform modules cannot be deployed by themselves.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=36)** They have to be declared in a root module.
>
> **[0:39](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=39)** All configurations have a root module.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=41)** The root module contains the resources declared in the .tf files of a configuration.
>
> **[0:47](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=47)** External modules that are declared in the root module are called child modules.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=52)** Child modules are imported into the root module using the module HCL declaration.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=57)** A module declaration in the root module sets values for any input variables the child module may have.
>
> **[1:04](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=64)** By default, child modules inherit the settings of the provider or providers in the root module.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=70)** This can be overwritten in cases where a module has particular requirements like a specific provider version.
>
> **[1:16](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=76)** There are several options for defining the location of modules where Terraform can find them.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=81)** The local file system, [[GitHub]], a generic [[Git]] repository, HTTP URLs, and the Terraform Registry.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=90)** The Terraform Registry is a free public registry of modules maintained by HashiCorp.
>
> **[1:36](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=96)** Let's take a quick look at the registry.
>
> **[1:39](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=99)** Open your browser and navigate to registry.[terraform.io](https://terraform.io).
>
> **[1:43](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=103)** As a Terraform user, you can use the Terraform Registry as a central repository of public modules.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=109)** You can also upload your own public modules to the registry by creating a GitHub repository, then linking to it from the registry.
>
> **[1:56](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=116)** If you want to share private modules with a team, you can use Terraform Cloud.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=120)** We'll talk more about Terraform Cloud later in the course.
>
> **[2:03](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=123)** Let's take a look at the module we'll be using in our exercise.
>
> **[2:06](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=126)** We can find the [[Google]] Supported Service account module by searching for it in the search bar.
>
> **[2:13](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=133)** From here, we can select the GitHub repository where the module is hosted.
>
> **[2:18](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=138)** The README of this repository is an overview of the module including input and output variables.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=144)** GCP modules usually include a few examples that demonstrate how to use them.
>
> **[2:31](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=151)** We'll use this simple example as the basis for our demonstration.
>
> **[2:34](https://www.linkedin.com/learning/advanced-terraform-18720794/introduction-to-modules?u=76281980&t=154)** Let's move on and take a look at this module in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (11), [[GitHub]] (3), [[Git]] (1), [[Google]] (1)
> **CLI Commands:** terraform (11), find (2), git (1)
> **Env Vars:** hcl (2), gcp (2), gke (1), http (1), readme (1)
> **Tools:** github (3)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** navigate to (1), select the (1)
> **URLs:** [terraform.io](https://terraform.io) (1)
> **Cross-References:** later in (1)

#### [Using Terraform modules](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=0)** - [Instructor] In this video, we're going to use the GCP service accounts module to demonstrate how to set up and use a module.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=6)** Execute [[Git]] checkout 02_09 to switch to the branch.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=14)** Service accounts are non-user accounts used to authenticate system to system communications.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=19)** They're used to secure resources like APIs, [[Databases]], file objects, and other resources accessed by internal system processes.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=27)** We'll use the module to create one service account for each environment.
>
> **[0:31](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=31)** First, let's take a look at the files here.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=33)** main.tf was getting a bit long, so I split it up.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=36)** We have main.tf.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=37)** I put the networking data resource in the subnet in here.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=41)** We have our storage buckets in storage.tf.
>
> **[0:44](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=44)** And in serviceaccounts.tf, we have our service accounts module.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=49)** So go ahead and open up the serviceaccounts.tf file.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=53)** And let's execute [[Terraform]] init.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=57)** This will tell the Terraform [[CLI]] to download this module.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=61)** The service accounts module does a lot of work in a very few lines.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=65)** The first line here tells Terraform where to find this module.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=68)** In this case, it's the Terraform Registry, which in turn points to a [[GitHub]] repository.
>
> **[1:13](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=73)** The [[Representational State Transfer (REST)|rest]] of these are attributes of the service accounts module.
>
> **[1:16](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=76)** These and all the other available attributes are input variables of the module.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=81)** We'll go into detail about how modules are designed in the next few videos.
>
> **[1:25](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=85)** The next line sets the project_id attribute.
>
> **[1:28](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=88)** These service accounts will be created in the project designated by this attribute.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=93)** The prefix is a string that will be pre-printed to all of the account names created by this module.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=98)** The names attribute is a list of service account names.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=102)** The service account module will create one service account for each member in this list.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=106)** I've used the environment_list variable, so there'll be four service accounts, dev, qa, stage, and prod.
>
> **[1:53](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=113)** Service account names can't have uppercase letters in them, so I've used a new technique here, the for expression.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=119)** for will iterate over a list or a map and can apply a function to each member.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=124)** The output of the expression is a new list or map, depending on what you feed into it, with the modified values.
>
> **[2:10](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=130)** I'm using the lower function to lowercase the members of environment_list so I can use that variable here.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=137)** The project_roles attribute will allow us to define a list of roles to be assigned to all of the accounts listed in the names list.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=144)** Roles are predefined groups of primitive permissions.
>
> **[2:27](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=147)** For example, the viewer role, at the project level, gives read access to all of the resources in the project.
>
> **[2:33](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=153)** The storage.objectViewer role allows an account to read files from a storage bucket.
>
> **[2:38](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=158)** This is very handy for creating a large number of service accounts that each need the same set of roles.
>
> **[2:44](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=164)** This is only 11 lines of code, but it does a lot.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=167)** There's a lot of code inside this module that allows us to define several resources and a complex set of relationships between service accounts and roles.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=175)** Let's deploy this.
>
> **[2:57](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=177)** Execute our terraform plan.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=180)** And then terraform apply.
>
> **[3:05](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=185)** Now that it's deployed, we can go look at our service accounts in the GCP console.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=190)** From the [[Google Cloud Platform (GCP)|Google Cloud]] console, click the hamburger.
>
> **[3:14](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=194)** Select IAM & Admin.
>
> **[3:16](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=196)** Then go to IAM.
>
> **[3:18](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=198)** And we can see that we have the service accounts that we created.
>
> **[3:22](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=202)** And they have the two roles that we defined.
>
> **[3:25](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=205)** Let's return to Visual Studio and cleanup before we move on.
>
> **[3:29](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=209)** terraform destroy.
>
> **[3:31](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=211)** var equals project-id, equals, and then your project ID.
>
> **[3:36](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=216)** Type yes.
>
> **[3:40](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=220)** And we're all cleaned up.
>
> **[3:41](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=221)** So, we've now seen how modules can make configurations much more readable and less complex by creating a reusable sub-configuration that can be incorporated into any root module.
>
> **[3:52](https://www.linkedin.com/learning/advanced-terraform-18720794/using-terraform-modules?u=76281980&t=232)** There's much more to see, so let's keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (7), [[Git]] (1), [[Databases]] (1), [[CLI]] (1), [[GitHub]] (1)
> **CLI Commands:** terraform (7), git (1), find (1), make (1)
> **Code Identifiers:** environment_list (2), project_id (1), project_roles (1), objectviewer (1)
> **Env Vars:** gcp (2), iam (2), cli (1)
> **Tools:** github (1), gcp console (1), visual studio (1)
> **Definitions:** is a  (3)
> **UI Navigation:** switch to (1), go to (1)
> **Cross-References:** in the next (1)


### 3. Advanced Terraform Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Analyzing a module](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=0)** - [Instructor] So far, we've learned quite a few things about [[Terraform]].
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=3)** We've covered expressions, functions, looping and variables.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=7)** These have been simple examples of what each of these features do and how they work.
>
> **[0:11](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=11)** Real world configurations can get quite a bit more sophisticated and that's where modules really shine.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=17)** They abstract away that complexity.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=19)** We can create highly complex configurations with just a few lines in the root module and delegate that complexity to a child module.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=27)** There's lots of advanced techniques to be found inside modules, so studying modules is a great way to learn how to apply Terraform to advanced use cases.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=36)** In this video, we're going to peak under the hood of the Service Accounts Module.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=40)** If you haven't watched the video on using modules yet, you'll want to go back and watch that one first.
>
> **[0:46](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=46)** Public Terraform modules are listed in the Terraform Registry here but the code for them is listed on [[GitHub]].
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=53)** So we can clone a module's repository and look at the code locally or just review it in the browser on GitHub.
>
> **[0:59](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=59)** I'm going to open it locally.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=61)** There's no branch for this video, so you can just follow along and I'll explain the code.
>
> **[1:07](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=67)** We used the Service Accounts Module in a previous video.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=70)** I'm going to keep that configuration open on the right over here in service_accounts.tf.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=77)** On the left, I have the main.tf and variables.tf of the Service Accounts Module.
>
> **[1:22](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=82)** I'll use the module declaration on the right to explain how these attribute settings will affect the behavior of the module as defined by the module code on the left.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=91)** The first thing we encounter in the module's main.TF file is the local section.
>
> **[1:36](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=96)** Locals are variables.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=98)** However, they're scoped only to this file.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=100)** Locals cannot be set from outside the configuration using .tfr's files, [[CLI]] commands or environment variables.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=107)** These local values are used to perform conditional processing on the module's input variables.
>
> **[1:53](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=113)** Keep in mind that module variables become attributes that can be set in the module declaration defined in the root module.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=119)** If we look at the Service Account Module variables.tf file, we can see that these variables here line up with the attributes in the declaration.
>
> **[2:12](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=132)** These first two local values are used internally to define how billing roles are applied.
>
> **[2:16](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=136)** If the service-accounts to be created are granted billing rights, they must use either account-level or organizational-level billing.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=144)** They're mutually exclusive, so either the billing account ID attribute or the org ID attribute should be set on the module.
>
> **[2:33](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=153)** The first line is using the AND logical operator to determine the value of the account billing local.
>
> **[2:40](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=160)** Logical AND and OR operators evaluate to a bullion true or false value.
>
> **[2:45](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=165)** It can be read like an IF statement.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=167)** I've prepared some pseudo code over here to demonstrate what that looks like.
>
> **[2:51](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=171)** So for this first line, this one here on line 18 can be read IF grant_billing_role is TRUE AND billing_account_id is NOT BLANK, THEN account_billing is TRUE.
>
> **[3:02](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=182)** The expression on line 19 is the inverse of the previous one on 18.
>
> **[3:06](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=186)** IF grant_billing_role is TRUE AND billing_account_id IS NOT SET AND org_id IS NOT BLANK, THEN org_billing is TRUE.
>
> **[3:16](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=196)** The turnery expression on line 20 is equivalent to this IF statement here, if prefix is not blank, then prefix equals prefix plus a dash else leave the prefix blank.
>
> **[3:28](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=208)** The effect of this statement is to append a dash to the prefix if the prefix is set, otherwise it's left blank.
>
> **[3:35](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=215)** The XPN value on line 21 deals with VPC sharing in GCP.
>
> **[3:40](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=220)** The next three lines use FOR expressions to iterate over lists and return a new list.
>
> **[3:45](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=225)** These lists are used internally by the module and are referred to by the module's output variables.
>
> **[3:51](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=231)** The names local here is a set converted from the names attribute using the toset function.
>
> **[3:57](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=237)** The next two locals use functions to do some complex work in just a few lines.
>
> **[4:02](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=242)** Let's look back at the configuration in our example and I'll explain what's happening here.
>
> **[4:09](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=249)** The Service Accounts Module makes it easy to create multiple service-accounts, each with all the roles defined in the project_roles input variable.
>
> **[4:18](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=258)** This means that we have two lists: one for account names and one for roles.
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=262)** For each account in the names list, we want all of the roles added to that account.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=267)** Each role binding between an account and a role is defined by a resource in Terraform, so we need to create a distinct resource for each combination of service-account and role.
>
> **[4:37](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=277)** We need a way to combine these lists so that for every name in the names list, there is a resource added for every role in the project roles list.
>
> **[4:45](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=285)** Here's a visualization of what that looks like.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=288)** This data structure has a row for every combination of the items in the names list and the project roles list.
>
> **[4:54](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=294)** This combination of two lists is called a Cartesian product.
>
> **[4:58](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=298)** Terraform provides the setproduct function for just this purpose.
>
> **[5:04](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=304)** Setproduct has two parameters, both sets.
>
> **[5:07](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=307)** It takes the two sets and combines them into a resulting Cartesian product.
>
> **[5:11](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=311)** The output of this function on line 26 looks like this table over here; one entry for every combination of names and roles.
>
> **[5:19](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=319)** So name role pairs is set to the resulting Cartesian product.
>
> **[5:23](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=323)** We can use the console to visualize how this is represented in Terraform.
>
> **[5:28](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=328)** I'll copy an expression here with the setproduct.
>
> **[5:34](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=334)** This is a list of lists.
>
> **[5:35](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=335)** Each inner list has two items representing all the possible combinations of the members of the names and roles lists.
>
> **[5:42](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=342)** So the setproduct function gives us a list of lists.
>
> **[5:45](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=345)** We're one step away from the data structure we need which is a map.
>
> **[5:51](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=351)** Here's an example of what we want.
>
> **[5:54](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=354)** This is a map where the keys are formatted as a name-role and the values of each key is an object type.
>
> **[6:00](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=360)** The object have a name and role value.
>
> **[6:03](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=363)** The zipmap function is used to convert two lists into a map.
>
> **[6:07](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=367)** Zipmap takes two list arguments.
>
> **[6:09](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=369)** The first becomes keys and the second list becomes values.
>
> **[6:13](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=373)** They have to match up between lists so both lists must have the same number of items.
>
> **[6:18](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=378)** A FOR expression is used in the first parameter to perform text processing to produce the name-role key values.
>
> **[6:26](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=386)** The next FOR expression builds the object value with the name and role attributes from name-role pairs.
>
> **[6:32](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=392)** Here's the zipmap function in the Terraform console.
>
> **[6:35](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=395)** As we can see, the output of zipmap here matches what we have over here.
>
> **[6:41](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=401)** Now we have a map with keys and values that we can use to create these resources.
>
> **[6:45](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=405)** Each combination of service-account and role will have its own resource as we'll see in a minute.
>
> **[6:51](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=411)** Phew! That was a lot of advanced expressions and functions.
>
> **[6:54](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=414)** Don't worry if this doesn't make a 100% sense right now.
>
> **[6:57](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=417)** The goal here is to show you how Terraform can work with [[Data Structures]] and conditional logic.
>
> **[7:02](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=422)** You can use the console to model the behavior you see in a configuration to cement your understanding of how it works.
>
> **[7:08](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=428)** As you progress in your Terraform journey, you can refer back to this video and study other modules for guidance on these advanced features.
>
> **[7:15](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=435)** The [[Representational State Transfer (REST)|rest]] of the Service Accounts Module is relatively straightforward.
>
> **[7:19](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=439)** The [[Google]] service-account resource uses the for_each argument to iterate over the names list creating one account per name.
>
> **[7:26](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=446)** The Google Project IM Member resource is the account role mapping.
>
> **[7:30](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=450)** It uses for_each to iterate over the map of account names and roles.
>
> **[7:35](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=455)** The remaining resources in main.tf deal with billing roles.
>
> **[7:40](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=460)** Congratulations on making it through this video.
>
> **[7:42](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=462)** There was a lot to chew on in this one, so don't be shy about coming back to review it as often as you need.
>
> **[7:47](https://www.linkedin.com/learning/advanced-terraform-18720794/analyzing-a-module?u=76281980&t=467)** Take a break, stand up, stretch and I'll be waiting for you in the next one when you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (10), [[GitHub]] (2), [[Google]] (2), [[CLI]] (1), [[Data Structures]] (1)
> **CLI Commands:** terraform (10), make (1)
> **Code Identifiers:** grant_billing_role (2), billing_account_id (2), for_each (2), service_accounts (1), account_billing (1)
> **Env Vars:** true (4), blank (2), cli (1), set (1), xpn (1)
> **Definitions:** is a  (6), means that (1), is called (1), is an  (1)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** github (2)
> **Warnings:** keep in mind (1)

#### [Custom modules](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=0)** - [Instructor] We've got one more thing to do with modules.
>
> **[0:02](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=2)** Let's create one of our own.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=4)** Execute [[Git]] checkout 03_02 to see the code for this video.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=12)** In main.tf, scroll down to line 33.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=15)** And here we have a custom module declaration.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=18)** This custom webservers module has replaced the compute instance resource declaration I've used up until now.
>
> **[0:24](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=24)** We've seen a module declaration before.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=27)** If we take a peek into the service_accounts declaration, we can see that they look similar, but there's one key difference.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=33)** The service_account module uses a URL-like source.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=37)** Our module uses a local source.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=40)** The webservers module is defined here in modules/webservers.
>
> **[0:45](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=45)** I'll open main.tf of our root module side by side with the variables.tf of the child module.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=53)** You can see that for every attribute in our module declaration there's an input variable in the module.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=58)** The server_settings variable is an object that matches the environment instance settings in the root module.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=65)** We used this map of objects earlier to demonstrate, using a map in combination with for_each.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=70)** Now, let's take a look at the main.tf of the custom module.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=77)** We're using for_each again here as we did earlier.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=79)** The only difference is that instead of using it directly in the root module, we're passing in the environment instance setting variable from the root module into this child module.
>
> **[1:28](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=88)** This module takes care of the for_each looping from there.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=91)** This is a similar concept to the service_account module I demonstrated earlier.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=95)** All we have to supply in that case is a list of account names.
>
> **[1:38](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=98)** The module abstracts the looping logic.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=101)** The main.tf of the webservers module is quite simple.
>
> **[1:44](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=104)** It has a provider, a local variable, and the [[Google]] Compute instance resource declaration.
>
> **[1:51](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=111)** The prefix local here may look familiar.
>
> **[1:53](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=113)** I borrowed this prefix logic from the service_accounts module because it's a good pattern for applying prefix names.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=120)** The compute instance block here should look familiar if you watch the video on for_each.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=124)** It's almost identical to the resource that was in the root module.
>
> **[2:08](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=128)** We're using the key as part of the name.
>
> **[2:10](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=130)** Remember that the keys in the environment instance settings are the names of the environments; Dev, QA, stage, and prod.
>
> **[2:19](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=139)** We're then using the object type value of the environment instance settings to grab the environment specific configurations for instance types and labels.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=148)** If we look at the outputs.tf of the module, we can see that the webserver-IPs output variable is here.
>
> **[2:36](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=156)** Outputs of a child module are populated after apply and are available as values to the root module.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=162)** Instead of using the splat operator I used before, I'm using a for expression here.
>
> **[2:46](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=166)** The splat operator is a bit more condensed.
>
> **[2:48](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=168)** And some might find the for expression more readable.
>
> **[2:51](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=171)** The effect is the same.
>
> **[2:52](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=172)** The value of this output variable will be a list of strings containing the IP addresses of all of the instances created by module.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=180)** Before we run our plan, we need to run [[Terraform]] in it again.
>
> **[3:04](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=184)** Pause the video, go ahead and try to run the plan apply cycle on your own.
>
> **[3:08](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=188)** Come back and I'll demonstrate again if you need a refresher.
>
> **[3:11](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=191)** And we'll run our plan apply.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=193)** Terraform plan and we have our plan.
>
> **[3:17](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=197)** And then Terraform apply.
>
> **[3:25](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=205)** And now that we're finished, you should have the same outputs as we've seen in the past.
>
> **[3:30](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=210)** And voila, our module now creates all of our [[Web Servers]] in just 10 lines of code defined in the root module.
>
> **[3:36](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=216)** Pretty cool!
>
> **[3:37](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=217)** Let's clean up.
>
> **[3:41](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=221)** And we're all cleaned up.
>
> **[3:42](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=222)** Before we wrap up on custom modules, I'd like to share some guidance on custom module development.
>
> **[3:48](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=228)** I recommend against starting custom module development early in the development of a new configuration.
>
> **[3:53](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=233)** Modules are terrific for refactoring configurations that are getting big and complex.
>
> **[3:58](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=238)** It's difficult to know ahead of time how to design a module with the right trade-offs for a specific configuration.
>
> **[4:04](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=244)** Modules should never be very big.
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=246)** They should do one thing and do it well.
>
> **[4:08](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=248)** Module design should evolve from the needs of your configuration as it grows.
>
> **[4:12](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=252)** Try to strike a good balance with your custom modules between being fully featured while also being small and focused in what they do.
>
> **[4:20](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=260)** That's it on modules.
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/custom-modules?u=76281980&t=262)** Let's go on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (3), [[Git]] (1), [[Google]] (1), [[Web Servers]] (1)
> **Code Identifiers:** for_each (4), service_accounts (2), service_account (2), server_settings (1)
> **CLI Commands:** terraform (3), git (1), find (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** url (1)
> **Cross-References:** next video (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)

#### [Terraform remote state overview](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=0)** - [Instructor] Using [[Terraform]] in a real world situation is very much like developing software.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=4)** It's a team effort.
>
> **[0:05](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=5)** Typically, operations teams have multiple Terraform users.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=9)** Those users contribute to and deploy Terraform configurations.
>
> **[0:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=13)** Multiple users work on the same configuration at the same time.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=16)** Terraform supports a collaborative workflow through its remote state feature.
>
> **[0:21](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=21)** When a Terraform operator runs Terraform Apply, it creates two files, one for lock and one for state.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=28)** The lock file is used by Terraform to prevent two instances of the Terraform [[CLI]] from executing an apply operation simultaneously.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=36)** The two apply operations would overlap, creating an unknown state in the target provider.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=41)** The state file provides Terraform with a mapping between the representation of the resources in the configuration and the actual resources that are deployed.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=49)** By default, these files are stored locally in the root folder of the configuration.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=54)** This works well for a simple configuration that is maintained and applied by a single operator, but it can't scale to multiple operators.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=61)** Multiple operators can work on a shared configuration by storing the state and lock files in a centralized location.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=68)** That central location is remote in the sense that it is separate from a local configuration.
>
> **[1:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=73)** Any Terraform configuration can be set up to read and write its state to and from a remote store.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=79)** A remote state store used by Terraform is called a backend.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=83)** Terraform supports several backends, including etcd, HashiCorp Consul, open source [[Databases]], and many others.
>
> **[1:31](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=91)** We are using [[Google Cloud Platform (GCP)|Google Cloud platform]] to demonstrate Terraform, so we'll use the [[Google Cloud Platform (GCP)|Google Cloud]] Storage backend.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=97)** The GCS backend uses a GCS bucket to store the state and lock file.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=102)** Buckets are object stores for storing data.
>
> **[1:45](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=105)** Terraform will store the state and lock files in the GCS bucket designated by the configuration.
>
> **[1:51](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=111)** In the demo, we'll take a look at two configurations, the backend configuration and the infrastructure configuration.
>
> **[1:57](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-remote-state-overview?u=76281980&t=117)** I'll demonstrate how to use Terraform to deploy the backend GCS bucket, then I'll show how a remote state configuration deployment differs from one that uses local state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (15), [[CLI]] (1), [[Databases]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **CLI Commands:** terraform (15)
> **Env Vars:** gcs (4), cli (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Deploying backend resources](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=0)** - In this exercise, I'll demonstrate how to deploy the resources required by the [[Terraform]] GCS backend.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=6)** When the plan and apply Terraform commands are executed.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=9)** the Terraform [[CLI]] evaluates the backend configuration before it generates a plan, or deploys resources.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=16)** This means that the backend resource, the GCS bucket, cannot be deployed with a configuration that uses remote state.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=22)** The bucket must be set up before a remote state configuration can be deployed.
>
> **[0:27](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=27)** You could create the bucket manually through the GCP console, or the GCloud CLI, but why not use Terraform?
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=33)** We absolutely can and should use Terraform to create the bucket required by the GCS backend.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=38)** Execute get checkout zero three underscore zero four to switch to the branch, and then execute CD space remote state.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=50)** Then, open the remote state folder here and double click on main dot tf.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=57)** Here we have a separate configuration just for setting up the GCS backend.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=61)** This configuration will only have to be deployed once to create the bucket for the lock file and the state.
>
> **[1:07](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=67)** We'll deploy this configuration, then we can get back to the infrastructure configuration we've been working on.
>
> **[1:12](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=72)** First we have to initialize this with Terraform in it.
>
> **[1:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=77)** And then we'll execute Terraform Plan.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=81)** This is a simple configuration with one resource, so the plan is short and sweet.
>
> **[1:25](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=85)** Execute Terraform apply remote state dot tf plan and the backend bucket will be deployed.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=95)** Let's take a look at the resources we created in the GCP console.
>
> **[1:39](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=99)** In the GCP console.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=101)** Click on the hamburger, go to [[Cloud Storage]], and click on buckets.
>
> **[1:47](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=107)** And here we have our GCS backend.
>
> **[1:50](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-backend-resources?u=76281980&t=110)** So, let's move on so we can see how a configuration is set up and deployed to use remote state.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (8), [[CLI]] (2), [[Cloud Storage]] (1)
> **CLI Commands:** terraform (8), gcloud (1), cd (1)
> **Env Vars:** gcs (5), gcp (3), cli (2)
> **UI Navigation:** click on (3), switch to (1), open the (1), go to (1)
> **Tools:** gcp console (3)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - in (1)

#### [Deploying a remote state configuration](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=0)** - [Instructor] Previously we set up the resources we need to restore our state remotely instead of locally.
>
> **[0:05](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=5)** Now it's time to see a remote state deployment in action.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=8)** The process is very much the same as we've seen before.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=10)** We'll initialize with [[Terraform]] init then plan and apply as usual.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=14)** There are a couple differences.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=15)** There's a small addition to the configuration and we'll run Terraform init a little differently.
>
> **[0:20](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=20)** Execute, [[Git]] checkout 03_05 to see the code and then open backend.tf.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=28)** This one stanza here is all we need to tell Terraform to use the GCS backend.
>
> **[0:33](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=33)** We could also set the bucket name here but we don't want to hard code that.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=37)** Terraform evaluates the backend before it evaluates the [[Representational State Transfer (REST)|rest]] of the configuration.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=41)** So we can't use a variable for the bucket name.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=43)** We can use a feature called partial configuration to provide the values for the backend when we run Terraform init.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=50)** And here's that command now.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=53)** Terraform init -backend -config = bucket = and then our bucket name remote state_advanced terraform.
>
> **[1:02](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=62)** You'll need to replace the value after the underscore with your project ID.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=66)** Hit enter and it says, "Successfully configured the backend GCS."
>
> **[1:12](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=72)** Terraform Init uses the -backend -config parameter to allow us to set an attribute of the backend provider.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=79)** Let's take a quick look at the GCS backend in the documentation here.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=83)** Each backend has attributes that are specific to the way they store state.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=87)** The only required attribute of the GCS backend is the bucket name.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=90)** The rest are optional.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=93)** The rest of the process for deployment is no different than we've seen before.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=97)** We'll run our plan and our apply.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=101)** (keyboard clicks) If I quickly switch over to our browser, and go into the bucket, we'll be able to see the state file and the lock file.
>
> **[1:58](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=118)** And there's the TF lock.
>
> **[2:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=120)** The lock file is a semifour used to ensure that no one else tries to run the Terraform apply command on this configuration at the same time.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=127)** Terraform always checks for a lock file before it begins an apply operation.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=131)** If it finds one, it will abort the apply and return an error indicating that another apply is already in process.
>
> **[2:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=138)** This lock file will be deleted when the configuration is completed.
>
> **[2:22](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=142)** If we wait, we'll see it disappear, and there it is gone.
>
> **[2:26](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=146)** Our configuration is deployed.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=148)** The state file looks just as it did when we stored it locally.
>
> **[2:30](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=150)** I can click on it here and we can view it in the browser and there it is.
>
> **[2:38](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=158)** Feel free to take a moment to look around in the console at the resources that were deployed.
>
> **[2:43](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=163)** Then return to your editor and we'll clean up.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=167)** (keyboard clicks) Okay. So remote state is an important part of a production grade configuration.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=175)** It ensures stability and deployment by preventing multiple concurrent apply operations.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=180)** That's especially important when automating Terraform so that your CI/CD pipeline can't accidentally run two applies at the same time.
>
> **[3:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=188)** Remote state also provides security benefits.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=190)** Sensitive data can be protected to some degree by marking variables as sensitive.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=195)** State files, however, must store all data unencrypted to detect differences between the state and the configuration.
>
> **[3:21](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=201)** You can restrict access to the remote state backend and the bucket so that only authorized users and service accounts can read the state.
>
> **[3:29](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=209)** That's it for remote state.
>
> **[3:30](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-a-remote-state-configuration?u=76281980&t=210)** Let's keep going so we can learn how to automate Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (12), [[Representational State Transfer (REST)|Rest]] (3), [[Git]] (1)
> **CLI Commands:** terraform (12), git (1), cd (1)
> **Env Vars:** gcs (4)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Code Identifiers:** state_advanced (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)


### 4. Terraform Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Multiple environment configurations](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=0)** - [Instructor] Modern practices for software delivery are referred to as the software delivery lifecycle.
>
> **[0:05](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=5)** Software is developed locally on developer workstations, then checked into a common source repository.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=10)** From there, the software is deployed to a shared environment.
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=14)** That first shared environment is usually referred to as dev, or sometimes sandbox.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=19)** This is where contributions from multiple developers are first integrated and tested together.
>
> **[0:24](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=24)** When the integration and functional tests pass, the changes are promoted from dev to higher level environments.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=30)** These higher environments have stricter controls for quality and performance.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=35)** Eventually, a group of changes is certified ready and promoted to a production environment where they serve users and other production systems.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=43)** [[Infrastructure as code (IaC)|Infrastructure as code]] defines resources as code, compute, network, storage, all the resources needed to operate an IT system.
>
> **[0:52](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=52)** Thus, these resources can benefit from the same delivery practices, source code management, and a managed deployment lifecycle.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=60)** Multi-environment configurations must be separated from each other so that changes can be made to one environment at a time.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=66)** Ideally, most of the code between them should be shared.
>
> **[1:09](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=69)** Variables are used to define differences between environments.
>
> **[1:13](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=73)** There must also be a way to merge changes made in lower environments to higher environments until those changes pass all tests and eventually make their way to production.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=83)** There are several approaches to organizing [[Terraform]] configurations for deployment to multiple environments.
>
> **[1:29](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=89)** Each method comes with a set of trade-offs that should be considered.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=93)** Workspaces are a feature of the [[CLI]] that provides some separation between configurations with a common remote state backend.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=100)** It can contribute to a CI/CD workflow, but it's not designed for environment separation, so we won't be covering it in this course.
>
> **[1:48](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=108)** Terragrunt is an open source utility that works with Terraform to create separate environments with separate remote state backends.
>
> **[1:56](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=116)** It's a great tool for very sophisticated configurations.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=119)** We don't have time to cover it here, but I encourage you to study it when you're finished with this course.
>
> **[2:04](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=124)** I'll include links to Terragrunt in the Next Steps Resources at the end of the course.
>
> **[2:09](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=129)** Branching is one of the most common techniques to maintain multiple environments with separate backends.
>
> **[2:14](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=134)** It's a reasonable compromise between learning curve, accessibility, and code reuse.
>
> **[2:19](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=139)** All you need is [[Git]], which we're already using, and an essential understanding of how to use branching.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/multiple-environment-configurations?u=76281980&t=144)** This is the strategy we'll be using to demonstrate how to manage a Terraform CI/CD pipeline, so let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[CLI]] (1), [[Git]] (1)
> **CLI Commands:** terraform (3), cd (2), make (1), git (1)
> **Env Vars:** cli (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Terraform CI/CD options](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=0)** - [Instructor] [[Continuous Integration (CI)|Continuous integration]] and [[Continuous Delivery (CD)|continuous delivery]] or CICD is a practice that evolved over the last decade or so.
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=7)** CICD is used to combine code from multiple contributors and automate the processes that prepare the code for deployment to an environment.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=15)** Continuous integration is a practice where code contributions from multiple developers are continuously integrated into a shared code repository.
>
> **[0:24](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=24)** The new additions are tested with the [[Representational State Transfer (REST)|rest]] of the code base before they emerged with a release branch.
>
> **[0:29](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=29)** [[Git]] has emerged as the defacto industry standard for source control.
>
> **[0:34](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=34)** Continuous delivery is the automation part of CICD.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=38)** A shared compute environment is used in combination with an orchestrator to perform a set of steps.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=43)** These steps typically include compilation and tests such as unit tests and functional tests.
>
> **[0:50](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=50)** CICD orchestration platforms such as [[Jenkins]] in GitLab are used to define and run a series of these steps collectively referred to as a pipeline.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=60)** The end of a CICD pipeline usually results in the deployment of code or in the case of [[Terraform]] infrastructure to a target environment.
>
> **[1:09](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=69)** A full pipeline run typically starts with code committed to a GIT repository.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=74)** The CICD orchestrator is set up to listen for changes to a branch in the repository.
>
> **[1:20](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=80)** When a changes made to the branch by a push or a merge that triggers the pipeline to run.
>
> **[1:25](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=85)** This style of CICD is sometimes referred to as GitOps where commits to a GIT repository are used as the initial trigger for all deployments.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=95)** There are many different strategies for building a Terraform CICD pipeline.
>
> **[1:39](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=99)** Each one has trade-offs in terms of code reuse and the effort required to build and maintain them.
>
> **[1:45](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=105)** Terraform plugins and templates are available for CICD systems, including Jenkins, GitLab [[Google Cloud Platform (GCP)|Google Cloud]] Build, and [[GitHub]] Actions.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=114)** HashiCorp also provides a complete CICD platform specifically designed to automate Terraform, Terraform Cloud.
>
> **[2:03](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=123)** I'm going to demonstrate a Terraform CICD pipeline using a branching strategy for multiple environments and Terraform Cloud as the continuous delivery execution environment.
>
> **[2:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=133)** Terraform Cloud was built from the ground up to support CICD pipelines for Terraform.
>
> **[2:18](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=138)** It's a [[SaaS|software as a service]]-based platform that supports a series of enterprise features, including role-based access control, multiple organizations and workspaces.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=148)** It manages state and it supports a Terraform specific orchestrated workflow that remotely executes plan and apply Terraform commands.
>
> **[2:38](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=158)** Here's what we'll be building in Terraform Cloud.
>
> **[2:40](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=160)** First, we'll create a new free Terraform Cloud account.
>
> **[2:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=163)** Then we'll create an organization and a workspace.
>
> **[2:46](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=166)** An organization is the root node for a collection of workspaces all sharing the same role-based access management.
>
> **[2:53](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=173)** A workspace in Terraform Cloud is like a local directory with a Terraform configuration stored in the cloud.
>
> **[2:59](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=179)** By the way, a Terraform Cloud workspace is not the same thing as a workspace in the Terraform [[CLI]].
>
> **[3:05](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=185)** Then we'll connect Terraform Cloud to GitHub so that Terraform Cloud can authenticate to GitHub to clone the repository containing the configuration to be deployed.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=195)** Then we'll set up your workspace to trigger runs from your fork in GitHub, when you push a change to your fork in GitHub, GitHub will send a message to Terraform Cloud to trigger or run.
>
> **[3:25](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=205)** Then we'll create a service account in your GCP project and generate a key for it so that Terraform Cloud can authenticate to Google Cloud.
>
> **[3:33](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=213)** And finally, we'll start a run to test the Terraform Cloud can authenticate to GCP and run a plan.
>
> **[3:40](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-ci-cd-options?u=76281980&t=220)** Let's move on so that we can get started with Terraform Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (23), [[GitHub]] (6), [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Git]] (3), [[Continuous Integration (CI)|Continuous integration]] (2)
> **CLI Commands:** terraform (23), git (3), node (1)
> **Env Vars:** cicd (12), git (3), gcp (2), cli (1)
> **Tools:** github (6), gitlab (2)
> **Prerequisites:** set up (2), required to (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Terraform Cloud setup](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=0)** - [Presenter] We're ready to take everything we've learned so far, and start building a complete CICD pipeline using [[Terraform]] Cloud and [[GitHub]].
>
> **[0:07](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=7)** We'll start by creating your Terraform Cloud account.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=10)** Open a new browser and go to app.[terraform.io](https://terraform.io).
>
> **[0:14](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=14)** Click here to sign up for a new account.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=16)** Enter in your information and when that's done you should be prompted to create a new organization.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=22)** The organization name can be anything you like but it must be globally unique.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=26)** You may have to append the name you choose with some numbers.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=30)** I've already got mine created here, so we'll switch to that.
>
> **[0:34](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=34)** At this point you should be prompted to create a new workspace.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=37)** Go ahead and click Create Workspace and we have some options here.
>
> **[0:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=43)** The [[Version Control]] Workflow integrates GitHub or other enterprise [[Git]] repositories to trigger runs.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=49)** The [[CLI]]-driven Workflow triggers runs in Terraform Cloud from the Terraform CLI.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=54)** The API-driven workflow is used to integrate Terraform Cloud with a CICD orchestration system like [[Jenkins]] or GitLab or task runners like GitHub actions and [[Google Cloud Platform (GCP)|Google Cloud]] Build.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=65)** We're going to select the version control workflow.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=68)** This is the GitHubs based workflow I talked about earlier.
>
> **[1:11](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=71)** In this case, you'll click GitHub.
>
> **[1:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=73)** I'm going to click connect to a different VCS cause I'm already authenticated.
>
> **[1:18](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=78)** And then we should both land here.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=79)** Then you'll select GitHub, [github.com](https://github.com).
>
> **[1:24](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=84)** These instructions guide you in the method used to connect your GitHub account to Terraform Cloud.
>
> **[1:29](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=89)** Click the link to register a new OAuth application.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=93)** This will open up GitHub in a new tab.
>
> **[1:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=95)** If you're not logged in, go ahead and log in and you should be navigated to this page here.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=100)** Now we're going to copy some data back and forth between Terraform Cloud and GitHub.
>
> **[1:44](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=104)** Return to the Terraform cloud tab and then under application name, click the copy link then return to GitHub and paste that in here.
>
> **[1:56](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=116)** Once again, we'll go back to Terraform Cloud and now we'll click the homepage URL, copy that and back to GitHub and paste that in here.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=127)** We'll skip the description.
>
> **[2:10](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=130)** Once more back to Terraform Cloud.
>
> **[2:12](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=132)** Click the callback URL, back to GitHub and once again.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=137)** Then click register application.
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=140)** Now we're going to copy data from GitHub back into Terraform Cloud.
>
> **[2:25](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=145)** Double click the client ID right here, copy that, back to Terraform Cloud and paste in the client ID there.
>
> **[2:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=155)** We can just call this [github.com](https://github.com) under the name.
>
> **[2:39](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=159)** Once more back to GitHub.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=162)** And now we're going to click on generate a new client secret.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=167)** Here's our secret.
>
> **[2:48](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=168)** This is a little bit like the token we created earlier.
>
> **[2:50](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=170)** Click that copy icon once more, back to Terraform Cloud and copy the secret.
>
> **[2:58](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=178)** Now click connect and continue.
>
> **[3:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=180)** This will navigate you back to GitHub once again.
>
> **[3:03](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=183)** Click authorize and you should see your username here for GitHub and it will redirect you back once again to Terraform Cloud.
>
> **[3:11](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=191)** We can skip the SSH key pair at this point, click skip and finish and our provider is now created.
>
> **[3:18](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=198)** Now click the Terraform icon on the top left and you should be prompted to create our workspace.
>
> **[3:24](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=204)** Click create workspace.
>
> **[3:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=206)** Once again, click version control workflow.
>
> **[3:29](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=209)** This time you can click GitHub.
>
> **[3:31](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=211)** At this point you should see your fork in GitHub listed here.
>
> **[3:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=215)** Go ahead and click that.
>
> **[3:37](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=217)** The workspace name can be anything you like.
>
> **[3:38](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=218)** I like to create it with something simple like myapp and click create workspace.
>
> **[3:47](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=227)** Now that our workspace is created, we need to make a change to the version control settings.
>
> **[3:51](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=231)** Select the workspace, then select settings, version control.
>
> **[3:57](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=237)** Here's a quick tour of these settings.
>
> **[3:59](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=239)** The Terraform working directory is the directory that Terraform will change to before it initiates Terraform commands.
>
> **[4:06](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=246)** Our configuration is at the root of all the branches so we'll leave this blank.
>
> **[4:10](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=250)** Apply method will determine if a user must confirm and apply manually after a plan is generated or if the apply is automatically triggered after the plan without user intervention.
>
> **[4:21](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=261)** Run triggers determines how changes to the branch triggers new plan apply runs.
>
> **[4:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=266)** These options provide fine-grained control over how new runs are triggered.
>
> **[4:30](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=270)** We'll use always.
>
> **[4:32](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=272)** This will trigger a run anytime any file changes in the branch we specify.
>
> **[4:36](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=276)** This option here will trigger a run only if a specified file changes.
>
> **[4:41](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=281)** The git tag option will only trigger a run if a push to GitHub includes a specific tag you define in the commit.
>
> **[4:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=289)** Poll requests are requests from a repository contributor to merge changes into a branch.
>
> **[4:54](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=294)** This option checked here means the Terraform Cloud will automatically start a plan only run when a new poll request is submitted.
>
> **[5:02](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=302)** This functions like a pre-merge test.
>
> **[5:04](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=304)** If the plan fails for any reason, then the PR submitter is notified to fix it and then resubmit.
>
> **[5:10](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=310)** We'll talk more about plan only runs in a few minutes.
>
> **[5:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=313)** Under version control, under VCS branch, type in 04_03 and then select update VCS settings.
>
> **[5:23](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=323)** This is the branch that contains the configuration that we're going to automate.
>
> **[5:27](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=327)** Now we'll return to our editor and in the terminal execute git checkout main and then open gcp_commands.md.
>
> **[5:39](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=339)** Now go to edit, replace and with this "Aa" selected here
>
> **[5:48](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=348)** enter bracket capitalproject_id close bracket and then replace it with your project id
>
> **[6:02](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=362)** and then select the second button here, replace all.
>
> **[6:06](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=366)** Now copy these commands into the terminal and run them.
>
> **[6:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=373)** Paste and enter.
>
> **[6:16](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=376)** We've just created a key that we're going to use to authenticate between Terraform Cloud and Google Cloud.
>
> **[6:22](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=382)** We need to grab it and make some changes.
>
> **[6:24](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=384)** So at this point in your terminal on a Mac, type in cat tf_sa_key.
>
> **[6:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=395)** On a [[Windows]] machine, enter type tf_sa_key.
>
> **[6:40](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=400)** Then hit enter and you'll get this text here.
>
> **[6:44](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=404)** You'll need to copy it from the terminal starting with the open curly bracket into a temporary file in your editor.
>
> **[6:52](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=412)** You can double click in this empty space here and that will create a new file.
>
> **[6:58](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=418)** Now paste it in.
>
> **[6:59](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=419)** Once again, we're going to go to edit, replace.
>
> **[7:03](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=423)** This time we're going to deselect all of these and select the star, the dot star right here and enter \n.
>
> **[7:13](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=433)** Leave the replace field here blank and then replace all.
>
> **[7:17](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=437)** This will remove all the new lines.
>
> **[7:19](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=439)** Leave this file open and we'll come back to this key in a moment.
>
> **[7:23](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=443)** Switch back to Terraform Cloud and now select your workspace on the left and go to configure variables.
>
> **[7:32](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=452)** We've been using variables with our configuration so far and they work the same in Terraform Cloud.
>
> **[7:37](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=457)** Instead of using a .tfr file or setting the values at the command line we're going to define these variables in our workspace.
>
> **[7:44](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=464)** So we'll have to add a few settings here.
>
> **[7:46](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=466)** Click add variable.
>
> **[7:48](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=468)** We're going to set target_environment and the value will be capital DEV.
>
> **[7:56](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=476)** Click save variable.
>
> **[7:58](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=478)** And now we have our first variable.
>
> **[8:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=480)** Once again, we're going to set project-id.
>
> **[8:09](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=489)** This will be your project id and one more, we're going to click add variable.
>
> **[8:17](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=497)** At this time we're going to select environment variable.
>
> **[8:20](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=500)** The key is all caps, GOOGLE_CREDENTIALS.
>
> **[8:28](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=508)** And now we'll switch back over to our editor and grab the key that we created when we created the service account.
>
> **[8:35](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=515)** Select Control A, control C, return back to Terraform Cloud.
>
> **[8:40](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=520)** Click Sensitive.
>
> **[8:42](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=522)** This is a key, so it's a secret.
>
> **[8:43](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=523)** And then paste in the whole value.
>
> **[8:45](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=525)** You can see it's quite large.
>
> **[8:46](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=526)** And then click save variable.
>
> **[8:49](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=529)** Alright, our workspace is all set up.
>
> **[8:51](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=531)** All that's left to do is to test it.
>
> **[8:53](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=533)** So at this point you can go to overview and select actions, start new run.
>
> **[9:00](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=540)** From the Run type, we'll select plan only and you can enter something here for the reason for starting or you can leave that blank and click Start Run.
>
> **[9:12](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=552)** This is called a speculative plan.
>
> **[9:14](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=554)** It's intended only to generate a plan but that plan can't be applied.
>
> **[9:18](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=558)** Applies must come immediately after a plan in Terraform Cloud to ensure that the configuration hasn't changed between the plan and apply.
>
> **[9:26](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=566)** Here we see a friendly UI version of a plan being generated.
>
> **[9:30](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=570)** Here we have the plan displayed in the UI.
>
> **[9:34](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=574)** We can drill in and see all the details.
>
> **[9:36](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=576)** You can download the raw log if you like.
>
> **[9:39](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=579)** It'll look very much as it does when we run it locally using the CLI and we're good to go.
>
> **[9:45](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=585)** Alright, Terraform Cloud is set up.
>
> **[9:46](https://www.linkedin.com/learning/advanced-terraform-18720794/terraform-cloud-setup?u=76281980&t=586)** We're ready to move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (26), [[GitHub]] (20), [[Version Control]] (6), [[Git]] (3), [[CLI]] (3)
> **CLI Commands:** terraform (26), git (3), make (2), ssh (1), cat (1)
> **Tools:** github (20), terminal (4), gitlab (1), command line (1)
> **Env Vars:** cli (3), vcs (3), cicd (2), url (2), api (1)
> **UI Navigation:** go to (5), select the (4), switch to (1), click on (1)
> **Code Identifiers:** tf_sa_key (2), gcp_commands (1), capitalproject_id (1), target_environment (1)
> **Prerequisites:** set up (2), you'll need (1), configure (1)
> **URLs:** [github.com](https://github.com) (2), [terraform.io](https://terraform.io) (1)

#### [Deploying with Terraform Cloud](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=0)** - [Instructor] [[Terraform]] Cloud executes plans and applies in pairs.
>
> **[0:03](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=3)** These are called runs and are executed in the cloud rather than locally on a developer workstation.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=8)** If you completed the Terraform Cloud setup video, you should have a workspace all ready to go and test it with a speculative plan.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=15)** Return to that workspace and now select actions.
>
> **[0:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=18)** Start new run and leave it at plan and apply.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=22)** Then click start run.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=25)** This time the plan and apply will run together.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=28)** We set up this workspace to require confirmation before apply, so we'll wait for the plan to run here.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=36)** Our plan is finished.
>
> **[0:38](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=38)** This workspace is now locked so that no other plans can be generated in this workspace until the current plan is deployed.
>
> **[0:44](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=44)** Scroll down and click confirm and apply and confirm plan.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=51)** The plan will queue and then the apply will run.
>
> **[0:54](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=54)** Once finished, we can view the state here in Terraform Cloud and download it if we need to.
>
> **[0:59](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=59)** I'll return to the GCP console.
>
> **[1:02](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=62)** I'll click the hamburger and we'll go to Compute Engine and we can see that the resources were deployed.
>
> **[1:11](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=71)** As usual, we need to clean up.
>
> **[1:12](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=72)** So we'll return to Terraform Cloud and the Destroy command is available under Settings, destruction and Deletion.
>
> **[1:20](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=80)** Click Queue destroy Plan, and we need to enter the name of the workspace and then click queue destroy Plan.
>
> **[1:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=88)** This is the same thing as running Terraform Destroy in the [[CLI]] and once the plan is generated, we'll scroll down here and click confirm and apply.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=100)** And now the Destroy plan has been applied, we can return to the console here and refresh and we can see that the resources have been removed.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=109)** That's it.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=109)** Terraform Cloud is a powerful way to automate Terraform without having to build your own infrastructure to support it.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/deploying-with-terraform-cloud?u=76281980&t=115)** Let's move on so we can see a complete CI/CD pipeline in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (7), [[CLI]] (1)
> **CLI Commands:** terraform (7), cd (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Env Vars:** gcp (1), cli (1)
> **Prerequisites:** setup (1), set up (1)
> **Tools:** gcp console (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [GitOps CI/CD setup](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=0)** - [Instructor] In this video, we're going to deploy the resources to model a [[GitHub]] style, CI/CD pipeline using [[Terraform]] Cloud, [[Google Cloud Platform (GCP)|Google Cloud]], and GitHub.
>
> **[0:09](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=9)** Here's what we're building.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=10)** In Google Cloud, we'll have two projects, one for our dev environment and one for qa.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=16)** Most IT shops have four environments including staging and production.
>
> **[0:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=20)** We're just going to use these two to demonstrate a change promotion going from a lower environment to a higher environment.
>
> **[0:26](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=26)** The process to promote from qa into even higher environments is essentially the same as from dev to qa.
>
> **[0:32](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=32)** In Terraform Cloud, we'll create two workspaces.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=35)** One workspace will run plan and applies for the dev project and the other will run plan and applies for the qa project.
>
> **[0:42](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=42)** We'll set up these resources in GCP and Terraform Cloud then use them to simulate a change starting on a dev workstation, being pushed to dev, then being promoted to qa.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=53)** This is a lot of resources to create.
>
> **[0:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=55)** I've demonstrated how to use the Terraform Cloud web interface.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=58)** We could create the workspaces manually.
>
> **[1:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=60)** But once again, why do all that work pointing and clicking, when we can use Terraform.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=65)** It is possible to Bootstrap this entire configuration with Terraform, including both the GCP projects and the Terraform Cloud workspaces.
>
> **[1:13](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=73)** However, you probably created your own personal GCP account, which means that you won't have an organization in GCP like I have here.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=81)** Unfortunately, without an organization, you can't automate the creation of new projects with Terraform.
>
> **[1:27](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=87)** Creating an organization for your account is absolutely possible but it requires a domain name and takes time to set up.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=93)** I don't want to make you go through all that, so we'll just create the projects manually.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=97)** We can still automate the creation of the workspaces in Terraform Cloud.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=101)** I also have a surprise for you in the next steps video at the end of the course, so stay tuned.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=106)** The Google Cloud Terraform provider is just one of many.
>
> **[1:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=110)** There's a Terraform provider for Terraform Cloud as well.
>
> **[1:52](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=112)** We'll deploy a configuration that uses the Terraform Cloud provider to create our dev and qa workspaces for us.
>
> **[1:59](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=119)** We'll be gathering data from Terraform Cloud, GitHub, and the GCP console to set some variable values in the Bootstrap configuration.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=127)** In your editor, execute [[Git]] checkout 04_05, and then cd space cicd_bootstrap.
>
> **[2:17](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=137)** This is the location of our Bootstrap configuration.
>
> **[2:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=140)** Now in the cicd_bootstrap directory here, we need to copy this file, terraform.tfvars.backup.
>
> **[2:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=148)** Right click and go to Copy.
>
> **[2:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=150)** And then right click the directory cicd_bootstrap, and click Paste.
>
> **[2:36](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=156)** Now we'll rename this new file to simply terraform.tfvars, and remove the .backup extension.
>
> **[2:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=166)** And here are the values we'll be populating.
>
> **[2:48](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=168)** At this point, switch to your browser and we'll need the organization from your Terraform Cloud account.
>
> **[2:54](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=174)** It should be right up here.
>
> **[2:56](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=176)** Minus AdvancedTerraform, yours will be different.
>
> **[2:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=178)** So you can copy it or you can just return to the editor and type it in.
>
> **[3:05](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=185)** Save the file.
>
> **[3:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=187)** And now we'll return to Terraform Cloud once again.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=190)** Now we need a token from Terraform Cloud.
>
> **[3:12](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=192)** Click your user profile icon here and go to User Settings.
>
> **[3:17](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=197)** Down to [[Tokens]] and click create API token.
>
> **[3:21](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=201)** Give it a name.
>
> **[3:22](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=202)** I'll just call my tf_cloud_token, and Create API Token.
>
> **[3:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=208)** Click the copy button here and leave this open and return to your editor, and we'll paste that in here.
>
> **[3:36](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=216)** Now we need a new token from GitHub.
>
> **[3:38](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=218)** This is a personal access token but it's a little different from the one we created earlier.
>
> **[3:43](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=223)** Back to your browser and login to GitHub.
>
> **[3:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=226)** Click your profile icon at the top right and click Settings.
>
> **[3:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=230)** Scroll down on the left to Developer settings, Personal access tokens.
>
> **[3:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=235)** And this time, we're going to create a classic token.
>
> **[3:59](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=239)** Click Generate new token, Generate new token classic.
>
> **[4:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=243)** Give it a name.
>
> **[4:04](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=244)** I'll call mine tf_token1.
>
> **[4:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=247)** I already have one here.
>
> **[4:08](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=248)** And then scroll down, and we're going to click the main check mark here for repo and the main one down here for admin:repo_hook.
>
> **[4:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=260)** So it should look like this when you've got them selected.
>
> **[4:24](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=264)** Scroll down, click Generate token, and copy the token from here.
>
> **[4:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=270)** Click that icon there.
>
> **[4:32](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=272)** And once again, back to the editor and paste that in here, save.
>
> **[4:38](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=278)** Now we'll take care of creating your GCP projects that you'll need.
>
> **[4:42](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=282)** Once again, back to the browser.
>
> **[4:44](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=284)** Login to the GCP console and click this dropdown here.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=288)** I already have mine created, so you'll click create New Project.
>
> **[4:52](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=292)** And type in myapp-dev for the first one, and you'll click Create.
>
> **[5:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=300)** While that's creating, you'll be able to do this again.
>
> **[5:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=303)** Click the dropdown, New Project, myapp-qa, and click Create.
>
> **[5:11](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=311)** When you're finished with that, you should have two new projects listed in this dialogue here, myapp-dev and myapp-qa.
>
> **[5:18](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=318)** We're going to need the IDs from the right here.
>
> **[5:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=320)** So I'll go ahead and copy mine for dev, returning to the editor, we'll paste that in there.
>
> **[5:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=328)** Once again, back to the browser, select the ID for qa, back to the editor, and paste that in.
>
> **[5:37](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=337)** One more thing, return to the browser one last time.
>
> **[5:40](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=340)** This time, we're going to go into GitHub, click your profile icon, go to your repositories, and we're looking for your exercise files fork.
>
> **[5:49](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=349)** What we need is your GitHub username, forward slash, and then the repository name.
>
> **[5:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=355)** You could try copying this but I find the formatting gets a little strange, so it's easier to just either copy it from somewhere else or just type it in manually.
>
> **[6:02](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=362)** You can also go to the Code button here and you'll need everything from this forward slash here to just before the period.
>
> **[6:12](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=372)** So terraform-instructor is my GitHub username, and then forward slash and the name of my fork.
>
> **[6:18](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=378)** Return to the editor and paste that in.
>
> **[6:22](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=382)** Now our variables are set up.
>
> **[6:24](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=384)** Let's take a quick look at the Bootstrap configuration.
>
> **[6:27](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=387)** We have several files here.
>
> **[6:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=388)** We have providers.
>
> **[6:29](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=389)** You can see I'm using a slightly different syntax here for the provider listing.
>
> **[6:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=393)** This just allows me to set specific version numbers for each provider that I want.
>
> **[6:38](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=398)** We have a service accounts module file here that I'm using to create some service accounts in our projects.
>
> **[6:47](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=407)** GCP service enables some services that we need.
>
> **[6:51](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=411)** And then here in tf_cloud_workspaces, we have the actual workspaces that will be created in Terraform Cloud.
>
> **[6:57](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=417)** There's the one for dev and the one for qa.
>
> **[7:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=420)** And here are the variables that will be set up in those workspaces, project-id, target_environment, and credentials.
>
> **[7:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=426)** These should look familiar from the workspaces that we created before.
>
> **[7:10](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=430)** Okay, now we're ready to deploy our workspaces, so we'll execute terraform init and that will initialize our Bootstrap configuration.
>
> **[7:19](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=439)** And then terraform plan --out=tfcloud.tfplan.
>
> **[7:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=448)** And this will generate our plan.
>
> **[7:29](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=449)** And then terraform apply tfcloud.tfplan.
>
> **[7:36](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=456)** This will create our service accounts in GCP and deploy our workspaces.
>
> **[7:39](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=459)** We'll let that run, and we're done.
>
> **[7:42](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=462)** We'll swap over to our browser and go to Terraform Cloud, and Refresh and we have app-dev and app-qa workspaces.
>
> **[7:52](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=472)** These are set up to run automatically when they're created, so give it some time.
>
> **[7:56](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=476)** The free tier of Terraform Cloud has one runner, so these will run sequentially.
>
> **[8:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=480)** The paid versions have multiple runners, so they can run in parallel.
>
> **[8:04](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=484)** While these are running, I'll show you something.
>
> **[8:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=486)** If we click in app-dev, we can see that we have a set of variables set up.
>
> **[8:11](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=491)** Sometimes when you attempt to deploy to Google Cloud, a particular region may run out of compute temporarily.
>
> **[8:17](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=497)** If that happens, you can change the region and zone values here and that will switch to a different zone and region.
>
> **[8:24](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=504)** If you do run into that situation, what you'll want to do is go to the workspaces, select the dev workspace, go to Settings, Destruction and Deletion, and queue a destroy plan.
>
> **[8:37](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=517)** And then you'll want to do it again for qa, so that the resources are destroyed.
>
> **[8:41](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=521)** Then you would go into both dev and qa, and change the variable values for region and zone.
>
> **[8:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=530)** You can find a list of regions and zones available here at this URL.
>
> **[8:57](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=537)** Now the dev environment has been deployed and it's switching over to qa.
>
> **[9:01](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=541)** And our deploys are complete.
>
> **[9:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=543)** I can switch over to the GCP console.
>
> **[9:05](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=545)** I'm in my dev environment.
>
> **[9:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=547)** I can go to compute, VM instances.
>
> **[9:11](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=551)** Here, we have our VMs in dev and I can switch over to the qa environment, and they're deployed there as well.
>
> **[9:18](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=558)** That's it.
>
> **[9:19](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=559)** With one configuration and a few variables, we've bootstrapped a two environment CI/CD pipeline.
>
> **[9:24](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-setup?u=76281980&t=564)** Let's keep going so we can see it in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (26), [[GitHub]] (8), [[Google Cloud Platform (GCP)|Google cloud]] (4), [[Tokens]] (2), [[Git]] (1)
> **CLI Commands:** terraform (26), cd (3), find (2), make (1), git (1)
> **UI Navigation:** go to (8), scroll down (3), switch to (2), dropdown (2), select the (2)
> **Env Vars:** gcp (10), api (2), url (1)
> **Tools:** github (8), gcp console (3)
> **Prerequisites:** set up (6), you'll need (2)
> **Code Identifiers:** cicd_bootstrap (3), tf_cloud_token (1), repo_hook (1), tf_cloud_workspaces (1), target_environment (1)
> **Definitions:** is a  (2), means that (1)

#### [GitOps CI/CD with Terraform Cloud](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=0)** - [Instructor] Okay, now it's getting exciting.
>
> **[0:02](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=2)** We're ready to make a change to our configuration as we have throughout the course.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=6)** This time, we're going to do it in a controlled way using the CICD pipeline we've built.
>
> **[0:10](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=10)** You'll need the resources from the GitOps setup video to proceed with this one.
>
> **[0:15](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=15)** If you haven't followed along with that video you'll want to do that first then come back to this one.
>
> **[0:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=20)** I've added branches with the code that you'll use to go through the promotion process so you won't actually have to edit the code yourself and push changes to your fork.
>
> **[0:28](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=28)** Let's take a quick look at those branches.
>
> **[0:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=30)** 04_06_ dev is the main branch for the dev environment.
>
> **[0:36](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=36)** 04_06_dev_redis is the branch that contains the changes we want to deploy and promote.
>
> **[0:41](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=41)** 04_06_qa is the main branch of the QA environment.
>
> **[0:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=46)** The change we're going to make is very simple.
>
> **[0:48](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=48)** We're going to add a memory store instance to our configuration.
>
> **[0:51](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=51)** Memory store is a GCP product based on [[Redis]].
>
> **[0:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=55)** Redis is an in-memory key value store.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=58)** Key value stores are very commonly used for data caching.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=61)** They're great for fast retrieval of data that doesn't change very often.
>
> **[1:05](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=65)** Let's imagine that our application needs a cache of customer data.
>
> **[1:08](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=68)** We're going to add a new memory store instance to dev where our developers can use it to develop and test the new cache.
>
> **[1:15](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=75)** When they're done with that we can promote the infrastructure change to QA.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=79)** We'll start in the dev branch.
>
> **[1:21](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=81)** In your editor, in the terminal, execute [[Git]] checkout 04_06_dev.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=90)** Think of this branch as the main branch for the dev environment.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=93)** Any change to this branch will trigger a run in the dev workspace.
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=97)** If we look at main.tf, there's no Redis resource listed.
>
> **[1:41](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=101)** I've prepared another branch with the change we're going to make.
>
> **[1:44](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=104)** This is typically referred to as a feature branch.
>
> **[1:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=106)** Execute, get checkout, 04_06_dev_redis.
>
> **[1:54](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=114)** This is a branch of the 0406 dev branch.
>
> **[1:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=118)** In a real world scenario, this would be the branch created and modified by you, the [[Terraform]] developer.
>
> **[2:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=123)** We can see that main.tf now does have a Redis resource.
>
> **[2:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=127)** All of the attribute values for this resource come from variables in the configuration.
>
> **[2:12](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=132)** You'll also notice in variables.tf, I've removed the default value for environment instant settings and I've moved the values for that to terraform.auto.tfvars.
>
> **[2:25](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=145)** Terraform Cloud will use any file that ends in .auto.tfvars in the same way that the [[CLI]] uses Terraform .tfvars.
>
> **[2:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=153)** The variable settings in terraform.auto.tfvars will be used by Terraform Cloud when it executes runs on this configuration.
>
> **[2:40](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=160)** This means that we do need to check this file into our repository.
>
> **[2:44](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=164)** There are no secrets in this file, so that's okay.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=167)** If there were secrets to set, it would be better to use a variable defined and set in the Terraform Cloud workspace to avoid storing secrets in your repository.
>
> **[2:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=175)** So we have our feature branch ready.
>
> **[2:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=178)** You've added the memory store resource to the configuration and tested it for correctness with Terraform validate.
>
> **[3:04](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=184)** Then you push the feature branch to [[GitHub]].
>
> **[3:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=186)** You're ready for the change to be merged into the main dev branch and deployed to the dev GCP project.
>
> **[3:12](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=192)** Switch to your browser.
>
> **[3:13](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=193)** Log into your GitHub account and navigate to your fork of the exercise files.
>
> **[3:17](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=197)** We're going to submit a pull request, or PR, to merge the code in 0406 dev redis, to 0406 dev.
>
> **[3:26](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=206)** Pull requests are features of enterprise class Git repositories.
>
> **[3:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=210)** When a developer is ready for their work to be merged into a main branch, they submit a PR.
>
> **[3:35](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=215)** Reviewers can then examine the proposed changes before the merge is executed.
>
> **[3:39](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=219)** In GitHub, from your exercise files fork go to pull requests and select new pull request.
>
> **[3:48](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=228)** In the dropdown, select your fork.
>
> **[3:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=230)** It'll start with your GitHub ID.
>
> **[3:53](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=233)** In the right dropdown, select 0406 dev redis and in the left dropdown, select 0406 dev.
>
> **[4:04](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=244)** Your dropdown should look like this.
>
> **[4:08](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=248)** Click create pull request, and then again click create pull request.
>
> **[4:13](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=253)** Now we see something cool happening.
>
> **[4:15](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=255)** Your GitHub repositories are integrated with Terraform Cloud, so creating the PR kicks off a speculative plan in Terraform Cloud.
>
> **[4:22](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=262)** We haven't merged anything yet so the apply won't be run until the PR is accepted.
>
> **[4:27](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=267)** The speculative plan is being run by the PR as a pre-commit check.
>
> **[4:31](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=271)** If the plan succeeds, we'll at least know that the configuration is syntactically valid and that Terraform Cloud was able to authenticate to [[Google Cloud Platform (GCP)|Google Cloud]] to run the plan.
>
> **[4:40](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=280)** If there's an error for any reason the PR submitter will be notified.
>
> **[4:44](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=284)** They can fix the problem on their local machine, push the fix to the feature branch and GitHub will run the check again.
>
> **[4:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=290)** We can see that the check has succeeded and if we click the link here, show all checks and then I'll open this in a new tab and we can see the plan that was run.
>
> **[5:01](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=301)** At this point in a real world pipeline execution a peer on your team would review the change being made.
>
> **[5:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=306)** The reviewer can look both at the new code that was submitted, visible here in the dev between the branches and the speculative plan listed in Terraform Cloud.
>
> **[5:14](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=314)** If everything looks good, the PR reviewer can accept the PR which kicks off the merge.
>
> **[5:19](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=319)** Let's do that now.
>
> **[5:20](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=320)** Click merge pull request, and then confirm merge.
>
> **[5:25](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=325)** If I switch over to Terraform Cloud in a moment here we'll see a plan queued.
>
> **[5:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=330)** This workspace is set up to run the plan and apply automatically with no need for confirmation.
>
> **[5:34](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=334)** So if we wait a moment, we'll see the plan go to apply and then the new configuration will be applied.
>
> **[5:39](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=339)** This may take a few minutes so we'll kick back and wait for the apply to finish.
>
> **[5:45](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=345)** Okay, now that the run is complete I'll switch over to the GCP console.
>
> **[5:50](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=350)** I'm in the dev environment, I'll go to memory store and we can see that the new resource has been deployed and is ready for use.
>
> **[5:58](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=358)** The memory store instance is deployed to the dev environment and is ready for application developers to start using it.
>
> **[6:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=363)** In a real world workflow the developers would update their application code to use the new memory store resource and run their tests.
>
> **[6:10](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=370)** At that point, both the infrastructure and the application code is ready for promotion to the QA environment.
>
> **[6:16](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=376)** The infrastructure must be promoted first so the next step is to promote this new configuration from dev to QA.
>
> **[6:22](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=382)** The process is very simple.
>
> **[6:24](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=384)** The change we want is now in the main dev branch which in our case is 0406 dev.
>
> **[6:29](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=389)** To get those changes into QA, we need another pull request.
>
> **[6:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=393)** Return to GitHub.
>
> **[6:37](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=397)** This time, the contents of 0406 dev will be merged to 0406 QA which is the main branch of the QA environment.
>
> **[6:45](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=405)** Click pull new request again.
>
> **[6:49](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=409)** This time we'll select 0406 dev on the right, select your fork on the left and in the left here we'll select 0406 QA.
>
> **[7:05](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=425)** Create the pull request, click create pull request, and we'll see it run the pre-commit check once again.
>
> **[7:14](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=434)** Alright, go ahead and click merge pull request, confirm merge and then if we return to Terraform Cloud, we'll see our plan and apply queued up for the QA environment.
>
> **[7:26](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=446)** We'll wait for that to finish and then go from there.
>
> **[7:30](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=450)** Okay, our QA environment has been deployed.
>
> **[7:32](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=452)** I can switch back over to Google Cloud here, switch to the QA instance or project I should say and we can see it's been deployed here as well.
>
> **[7:41](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=461)** Note that the instance capacity here is set to three gigabytes.
>
> **[7:45](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=465)** If I switch back to the dev project you'll notice it's set to one.
>
> **[7:49](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=469)** Let's review how we did that.
>
> **[7:51](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=471)** Switch back to your editor.
>
> **[7:53](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=473)** Remember the change I made to put the environment instant settings, values, in terraform.auto.tfvars?
>
> **[8:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=480)** That's open here.
>
> **[8:01](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=481)** This is the technique we've been using to define configuration differences between environments.
>
> **[8:06](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=486)** All the values are keyed by the target environment variable which is set differently in the two different workspaces.
>
> **[8:11](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=491)** This map of all the settings allows us to set different values for each environment.
>
> **[8:16](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=496)** Congratulations. You've just promoted your first change to a Terraform configuration from one environment to another.
>
> **[8:22](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=502)** We've now seen GitHub's in action using pull requests in GitHub and automatic run triggers in Terraform Cloud, we can drive deployment and promotion just by making changes to branches in a GitHub repository.
>
> **[8:33](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=513)** Pretty cool.
>
> **[8:34](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=514)** Before we move on you can leave these resources deployed for a day or so if you plan to continue with the course soon.
>
> **[8:40](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=520)** If you may be taking an extended break you'll want to clean up.
>
> **[8:43](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=523)** Queue destroy plans in both workspaces.
>
> **[8:46](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=526)** So select workspace, settings, destruction and deletion, queue destroy plan.
>
> **[8:53](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=533)** Do that both in dev and QA.
>
> **[8:55](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=535)** When you return, just run a new manual plan apply in both workspaces.
>
> **[9:00](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=540)** So that would be here under actions.
>
> **[9:03](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=543)** If you do that your dev and QA environments will be redeployed.
>
> **[9:07](https://www.linkedin.com/learning/advanced-terraform-18720794/gitops-ci-cd-with-terraform-cloud?u=76281980&t=547)** See you when the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (17), [[GitHub]] (10), [[Redis]] (6), [[Git]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2)
> **CLI Commands:** terraform (17), make (3), git (2)
> **Tools:** github (10), terminal (1), gcp console (1)
> **UI Navigation:** dropdown (4), go to (3), switch to (2), navigate to (1)
> **Env Vars:** gcp (3), cicd (1), cli (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Prerequisites:** you'll need (1), setup (1), set up (1)
> **Exercise Files:** exercise files (2)

#### [Deprecating resources](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=0)** - [Instructor] In this video, we're going to learn about deprecating resources.
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=4)** Remember, that early in the course, in the destroying resources video, I mentioned that the [[Terraform]] destroy [[CLI]] command should never be used in a shared environment, especially higher environments like pre-prod and production.
>
> **[0:16](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=16)** That doesn't mean we can't remove resources from those environments.
>
> **[0:19](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=19)** We just need to do it by removing resources from the configuration and redeploying them with plan apply.
>
> **[0:25](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=25)** The Terraform plan CLI command compares the current state to the configuration.
>
> **[0:29](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=29)** When resources in the state are removed from the configuration, the next plan command will include steps to remove those resources.
>
> **[0:37](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=37)** You'll need the resources from the [[GitHub]]'s CICD video, deployed to your dev and QA environments to follow along.
>
> **[0:44](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=44)** If you destroyed those resources, you can redeploy them in Terraform cloud, just by starting a run in both your dev and QA workspaces.
>
> **[0:53](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=53)** To make this a practical exercise, I've introduced another change to our configuration.
>
> **[0:57](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=57)** So far, the infrastructure has included [[Web Servers]], an NGINX proxy, and a database VM.
>
> **[1:03](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=63)** This is the lift and shift configuration we've been using, where the infrastructure in [[Google Cloud Platform (GCP)|Google Cloud]] is a close match for the resources deployed in the on-prem data center.
>
> **[1:11](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=71)** It works, but it's not optimized for the cloud.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=74)** We're going to replace those web servers with a managed instance group, or MIG.
>
> **[1:19](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=79)** MIGs are templated VMs that are managed as a group by GCP.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=83)** They provide features like health checks and auto-scaling.
>
> **[1:26](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=86)** They can also be configured with a GCP hosted load balancer.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=90)** So, we're going to replace our web servers with a MIG.
>
> **[1:33](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=93)** For the sake of simplicity and time, we won't worry about the load balancer, or other extended features for now, so the new configuration will just include a simple MIG.
>
> **[1:42](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=102)** I'll include a link to a complete load balancer MIG sample configuration in the next steps resources, if you're looking for a challenge.
>
> **[1:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=109)** In your editor, execute [[Git]] checkout 04_07.
>
> **[1:55](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=115)** Think of this branch as a new feature branch, as we discussed in the GitHub's video, the changes we're going to make, replacing our individual VMs with a managed instance group, are in this branch.
>
> **[2:05](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=125)** We're going cloud native, so it's managed services from here on out.
>
> **[2:09](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=129)** Open main.tf.
>
> **[2:11](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=131)** You can see I've commented out the NGINX proxy, the custom web servers module that created our VMs, and the database VM.
>
> **[2:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=138)** We could replace the database VM with a cloud [[SQL]] instance, but they take a while to deploy, so we'll skip that.
>
> **[2:24](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=144)** Feel free to add one yourself later if you'd like to experiment.
>
> **[2:27](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=147)** Open mig.tf, and you can see the modules I'm using to create our MIG.
>
> **[2:32](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=152)** The VM instance template module resource defines the template used to create the VMs.
>
> **[2:37](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=157)** Most of the settings available on a single VM can be defined on an instance template.
>
> **[2:42](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=162)** The settings of the template are applied to the VMs managed by the MIG when they're created.
>
> **[2:47](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=167)** The vm_mig resource is the MIG itself, and we can see here the reference to the template above.
>
> **[2:54](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=174)** There's a setting in the instance template module we'll need to grab from GCP.
>
> **[2:59](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=179)** Switch back to your browser, and in GCP, in your dev project, click the hamburger and go to IAM admin, service accounts.
>
> **[3:10](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=190)** And we're looking for this service account here, the compute engine default service account.
>
> **[3:15](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=195)** We need the email address for this account.
>
> **[3:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=198)** Highlight it, and copy it, and then open Terraform cloud and go to your dev workspace.
>
> **[3:25](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=205)** We need to add a variable here.
>
> **[3:27](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=207)** Go to variables, click add variable, and here, type in instance_service_account.
>
> **[3:37](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=217)** And for the value paste in the address.
>
> **[3:41](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=221)** Save the variable.
>
> **[3:43](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=223)** If you want to deploy this all the way to QA, you'll need to repeat that process for the QA project.
>
> **[3:51](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=231)** QA, compute engine default service account, copy, back to Terraform cloud, in the workspaces, select the QA environment workspace.
>
> **[4:04](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=244)** Go to variables, add variable, instance_service_account, and paste the value.
>
> **[4:15](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=255)** And click save.
>
> **[4:17](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=257)** Now we're ready to get this change into our dev environment.
>
> **[4:20](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=260)** Do you remember the GitHub's way to do that from the previous video?
>
> **[4:23](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=263)** Our feature branch is complete, test it, and push to GitHub, what do we need to do next?
>
> **[4:28](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=268)** We need a pull request.
>
> **[4:29](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=269)** We're going to merge our feature branch 04 07, to the dev main branch, which is 04 and 06 dev.
>
> **[4:36](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=276)** In GitHub, switch to your tab with GitHub open, find your fork, and click pull requests, new pull request.
>
> **[4:48](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=288)** On the far right here, select 04 07.
>
> **[4:53](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=293)** Then on the far left, select your fork.
>
> **[4:57](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=297)** And in the left dropdown, 04 06 dev.
>
> **[5:03](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=303)** The dropdown should look like this, click create pull request, scroll down, and create pull request.
>
> **[5:12](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=312)** The PR will kick off a speculative plan, when it's finished, we'll open it up.
>
> **[5:18](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=318)** Our plan is created, click show all checks, and then right click the details link, and select open in new tab, and then switch to the tab.
>
> **[5:27](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=327)** So far all the plans we've created have contained only create steps.
>
> **[5:31](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=331)** We can see that this plan contains both create and destroy steps.
>
> **[5:35](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=335)** The instance template and MIG will be created, and the web servers, NGINX, and the database server will be destroyed.
>
> **[5:41](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=341)** Return to GitHub and confirm the merge.
>
> **[5:46](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=346)** This will start a run in the dev workspace.
>
> **[5:49](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=349)** We can switch over to Terraform cloud, go to workspaces, and we can see our run has started.
>
> **[5:54](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=354)** We'll wait for that to complete.
>
> **[5:57](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=357)** Okay, the run is finished, now let's go take a look at our dev project.
>
> **[6:01](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=361)** Over in GCP, we can see in compute engine here that our web servers, proxy, and database server are now gone.
>
> **[6:08](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=368)** If I go to instance groups, compute engine, instance groups, we can see the one we created.
>
> **[6:16](https://www.linkedin.com/learning/advanced-terraform-18720794/deprecating-resources?u=76281980&t=376)** And there we have it, we can remove any resources managed by Terraform, by simply removing them from the configuration and running plan apply, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (7), [[GitHub]] (7), [[Web Servers]] (6), [[CLI]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** mig (8), gcp (5), nginx (3), cli (2), cicd (1)
> **CLI Commands:** terraform (7), nginx (3), make (2), git (1), find (1)
> **UI Navigation:** go to (6), switch to (2), dropdown (2), select the (1), scroll down (1)
> **Tools:** github (7)
> **Exercise Files:** template (7)
> **Code Identifiers:** instance_service_account (2), vm_mig (1)
> **Cross-References:** in the next (1), we discussed (1), previous video (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=0)** - [David] Congratulations, you've just completed the next chapter in your journey with [[Terraform]].
>
> **[0:04](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=4)** We've covered a lot of ground in this course.
>
> **[0:06](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=6)** Let's review.
>
> **[0:08](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=8)** Terraform is capable of managing complex infrastructure deployments.
>
> **[0:12](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=12)** Configurations are not static.
>
> **[0:13](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=13)** They grow and evolve over time, just like the applications they support.
>
> **[0:17](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=17)** [[Infrastructure as code (IaC)|Infrastructure as code]] is a proven technique for managing infrastructure evolution.
>
> **[0:22](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=22)** We've covered the internals of Terraform including the Terraform [[CLI]], variables, functions, expressions, modules, and remote state.
>
> **[0:32](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=32)** We've demonstrated how to automate Terraform.
>
> **[0:35](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=35)** Infrastructure can and should be developed and deployed using CI/CD pipelines.
>
> **[0:40](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=40)** There are many options for building CI/CD pipelines to work with Terraform, such as [[Jenkins]], GitLab, Cloud Build, and [[GitHub]] Actions.
>
> **[0:49](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=49)** Terraform Cloud is a great way to get started applying CI/CD to Terraform configurations.
>
> **[0:55](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=55)** This is the end of the course, but it's not the end of your journey.
>
> **[0:58](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=58)** I promised you some surprises throughout the course, so here they are.
>
> **[1:01](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=61)** I've included some bonus content in the exercise files repository.
>
> **[1:06](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=66)** When we discussed multiple environment configurations, I mentioned Terragrunt.
>
> **[1:10](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=70)** There are links here and in the exercise files to Terragrunt resources.
>
> **[1:14](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=74)** I've also included a full Terraform Cloud CI/CD bootstrap configuration, including instructions to provision [[Google Cloud Platform (GCP)|Google Cloud]] projects with Terraform.
>
> **[1:23](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=83)** I've also included some alternative CI/CD configurations based on GitHub Actions and Google Cloud Build.
>
> **[1:30](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=90)** There's more information, documentation, and resources waiting for you at the Terraform website, [terraform.io](https://terraform.io).
>
> **[1:37](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=97)** If you have any questions, please leave them in the Q&A section.
>
> **[1:40](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=100)** I've enjoyed sharing Terraform with you and I hope you found this course educational.
>
> **[1:44](https://www.linkedin.com/learning/advanced-terraform-18720794/next-steps?u=76281980&t=104)** Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (13), [[GitHub]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[CLI]] (1)
> **CLI Commands:** terraform (13), cd (5)
> **Tools:** github (2), gitlab (1)
> **Cross-References:** next chapter (1), we discussed (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), such as (1)
> **URLs:** [terraform.io](https://terraform.io) (1)


## Instructor

- [[Dave Swersky]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-terraform-3099246)

## Skills Covered

- Terraform

## Path Context

### In [[Infrastructure as Code with Terraform]]
← [[Learning Terraform]] | **3 of 3**

## Appears In

- [[Infrastructure as Code with Terraform]]

## Related Courses

_Courses sharing skills:_

- [[Learning Terraform]] — Terraform
- [[Terraform- Managing Network Infrastructure]] — Terraform

---

[↑ Back to top](#)