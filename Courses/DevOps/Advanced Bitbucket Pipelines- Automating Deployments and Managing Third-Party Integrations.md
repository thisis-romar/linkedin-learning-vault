---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations
url: "https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations"
duration_minutes: 87
duration: 1h 27m
level: Advanced
updated: 2/27/2025
learners: 2998
skills:
  - Bitbucket
  - Continuous Integration and Continuous Delivery (CI/CD)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-bitbucket-pipelines-3925184"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEtb5QOp2cq9w/learning-public-crop_675_1200/B4EZT7Ov5NGYAY-/0/1739381735658?e=2147483647&amp;v=beta&amp;t=k03SgGqwASFU3H6ljtjnue6-e7ogrCnApwhMcDZMvz8"
linkedin_topic: DevOps
learning_paths:
  - '[[Master Bitbucket]]'
prev_courses:
  - '[[Bitbucket Pipelines for CI-CD]]'
path_nav: '[{"path":"Master Bitbucket","position":3,"total":3,"prev":"Bitbucket Pipelines for CI-CD","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/bitbucket
  - skill/continuous-integration-and-continuous-delivery-ci-cd
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Advanced%20Bitbucket%20Pipelines-%20Automating%20Deployments%20and%20Managing%20Third-Party%20Integrations.md)

![Advanced Bitbucket Pipelines: Automating Deployments and Managing Third-Party Integrations](https://media.licdn.com/dms/image/v2/D4E0DAQEtb5QOp2cq9w/learning-public-crop_675_1200/B4EZT7Ov5NGYAY-/0/1739381735658?e=2147483647&amp;v=beta&amp;t=k03SgGqwASFU3H6ljtjnue6-e7ogrCnApwhMcDZMvz8)

# Advanced Bitbucket Pipelines: Automating Deployments and Managing Third-Party Integrations

> In this course, software engineer Michael Jenkins guides you through how to use advanced Bitbucket topics for your software projects. Gain a solid understanding of developing optimal Bitbucket Pipelines to automate deployments. Dive into integrating Bitbucket Pipelines with third party services within your environment. Check out this course to find out how you can solve complex CI/CD challenges us

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations) | 1h 27m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Optimize your CI/CD: Advanced techniques with Bitbucket Pipelines](#optimize-your-cicd-advanced-techniques-with-bitbucket-pipelines)
  - [Bitbucket Pipelines review](#bitbucket-pipelines-review)
- [**1. Pipeline Optimizations**](#1-pipeline-optimizations) (6 videos)
  - [Optimizing pipeline performance and reducing build times](#optimizing-pipeline-performance-and-reducing-build-times)
  - [Configure maximum runtime](#configure-maximum-runtime)
  - [Configure resource allocation](#configure-resource-allocation)
  - [Use conditional steps](#use-conditional-steps)
  - [Cache dependencies](#cache-dependencies)
  - [Solution: Optimize a pipeline](#solution-optimize-a-pipeline)
- [**2. Using Pipes in Pipelines**](#2-using-pipes-in-pipelines) (4 videos)
  - [Getting to know pipes](#getting-to-know-pipes)
  - [Use a pipe in a pipeline configuration](#use-a-pipe-in-a-pipeline-configuration)
  - [Use a pipe to deploy code to AWS Lambda](#use-a-pipe-to-deploy-code-to-aws-lambda)
  - [Solution: Use pipes in a pipeline](#solution-use-pipes-in-a-pipeline)
- [**3. Create Custom Pipes**](#3-create-custom-pipes) (6 videos)
  - [When to use custom pipes](#when-to-use-custom-pipes)
  - [Develop a custom pipe](#develop-a-custom-pipe)
  - [Test a custom pipe](#test-a-custom-pipe)
  - [Deploy a custom pipe to a container registry](#deploy-a-custom-pipe-to-a-container-registry)
  - [Use a custom pipe in a pipeline](#use-a-custom-pipe-in-a-pipeline)
  - [Solution: Develop a custom pipe](#solution-develop-a-custom-pipe)
- [**4. Self-Hosted Runners**](#4-self-hosted-runners) (6 videos)
  - [When to use self-hosted runners](#when-to-use-self-hosted-runners)
  - [Self-hosted runner configurations](#self-hosted-runner-configurations)
  - [Compare repository and workspace runners](#compare-repository-and-workspace-runners)
  - [Install runners in a workspace](#install-runners-in-a-workspace)
  - [Use self-hosted runners in a pipeline](#use-self-hosted-runners-in-a-pipeline)
  - [Solution: Deploy a self-hosted runner](#solution-deploy-a-self-hosted-runner)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Optimize your CI/CD: Advanced techniques with Bitbucket Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=0)** - Hey, I got a question for you.
>
> **[0:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=2)** Did you know that mastering advanced CI/CD techniques can drastically optimize your build times and improve your software development workflows?
>
> **[0:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=11)** Without these skills, you might find yourself struggling with inefficient workflows and delayed deployments.
>
> **[0:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=18)** Hi, I'm Michael Jenkins, a computer engineer with years of experience solving complex CI/CD challenges using Bitbucket Pipelines.
>
> **[0:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=27)** Join me in this course to learn how to reduce build times, harness the power of pipeline components, and deploy self-hosted runners for ultimate control over your build environments.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=37)** Let's explore Advanced Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (2), cd (2), [[Bitbucket]] (2), [[Software Development]] (1), [[Jenkins]] (1)
> **CLI Commands:** cd (2), find (1)
> **Tools:** bitbucket (2)
> **Speakers:** - hey (1)

#### Bitbucket Pipelines review
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=0)** - [Instructor] Before we get started, let's do a quick review of the main parts of a Bitbucket pipeline's configuration.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=8)** Let's start with a configuration file, bitbucket-pipelines.yaml.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=12)** We place this file at the root of the repository and use it to define workflows for Bitbucket pipelines.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=19)** The pipeline configuration file must have the pipelines keyword, a trigger to start the pipeline, and a collection of steps to execute tasks.
>
> **[0:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=31)** Pipelines keyword marks the start of the configuration.
>
> **[0:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=34)** It helps Bitbucket identify the different pipeline setups within your file, whether they're for branches, pull requests, or custom events.
>
> **[0:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=43)** Triggers are customizable start conditions for pipelines.
>
> **[0:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=47)** You can specify different triggers for specific branches, pull request events, or manual execution.
>
> **[0:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=56)** Steps are the building blocks of a pipeline.
>
> **[0:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=59)** This is where the workflow runs commands, executes scripts, or any other tasks that you define.
>
> **[1:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=66)** Each step must include a script section with at least one command.
>
> **[1:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=72)** Some optional but very useful parts of the pipeline configuration include Docker images, stages, and YAML anchors.
>
> **[1:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=82)** We can specify a Docker image for the execution environment in the pipeline.
>
> **[1:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=87)** Images can be specified globally for all steps, or locally within specific steps, depending on the needs of the pipeline.
>
> **[1:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=97)** For better organization, multiple steps can be grouped into stages.
>
> **[1:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=102)** Stages help logically separate tasks like building, testing, and deploying.
>
> **[1:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=109)** And to keep pipeline configurations clean and easy to maintain, we can use YAML anchors to define reusable steps.
>
> **[1:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=118)** Storing these configuration elements in the bitbucket-pipelines.yaml file allows us to treat pipelines as code.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=125)** By leveraging triggers, steps, stages, and the other features available, we can craft CI/CD pipelines that fit just about any development workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (5), ci (1), cd (1)
> **Tools:** bitbucket (5)
> **CLI Commands:** docker (2), cd (1)
> **File Paths:** bitbucket-pipelines.yaml (2)
> **Env Vars:** yaml (2)
> **Speakers:** - [instructor] (1)


### 1. Pipeline Optimizations

[↑ Back to Table of Contents](#table-of-contents)

#### Optimizing pipeline performance and reducing build times
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=0)** - I'll be the first to admit it.
>
> **[0:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=2)** Waiting on a software build to finish is no fun.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=5)** Long build times slow down productivity, and they also use up precious build minutes.
>
> **[0:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=11)** Faster pipelines means less waiting, quick feedback cycles, and a more efficient development process.
>
> **[0:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=17)** In other words, optimized pipelines can make a real difference in how quickly ideas make it to production.
>
> **[0:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=24)** Let's explore four strategies we can use to optimize Bitbucket Pipelines, configuring maximum runtime, configuring runner sizes, using conditional steps in a pipeline, and caching dependencies.
>
> **[0:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=38)** Each of these strategies can significantly improve pipeline performance and contribute to faster, more efficient deployments.
>
> **[0:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=46)** Let's get started with the first topic.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=48)** Configuring maximum runtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (1)
> **CLI Commands:** make (2)
> **Tools:** bitbucket (1)
> **Definitions:** in other words (1)
> **Speakers:** - i (1)

#### Configure maximum runtime
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=0)** - [Instructor] There are plenty of reasons a pipeline can get stuck in an undesirable state.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=5)** Network timeouts, infinite loops in a deployment script or misconfigurations on the target system are all perfect candidates.
>
> **[0:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=13)** Whatever the case, a pipeline that never ends can tie up deployments and waste build minutes.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=20)** Thankfully, Bitbucket Pipelines provides a way to handle this proactively.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=25)** We can use the Max-time option to set a maximum runtime for the entire pipeline, or we can use this same setting for specific steps.
>
> **[0:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=35)** Max-time defines the maximum number of minutes a pipeline or step can run.
>
> **[0:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=41)** If either runs longer than the max-time limit, the pipeline will be stopped automatically.
>
> **[0:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=47)** Let's see how this is applied.
>
> **[0:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=51)** I'm logged into my Bitbucket account and I'm viewing a pipeline configuration.
>
> **[0:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=55)** At the top of the configuration, I've set max-time to be two minutes for the entire pipeline.
>
> **[1:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=62)** There's just one step in this pipeline, a long-running step that we'll use to simulate a network timeout.
>
> **[1:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=69)** The step will use the sleep command to stall the pipeline for 240 seconds or 4 minutes.
>
> **[1:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=76)** As expected, after running the pipeline, we can see the pipeline fails because it exceeded the 2-minute time limit.
>
> **[1:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=84)** Of course, setting max-time is not required for all deployments, but if you know that your workflows have the potential to get stuck, using a time limit can help keep long-running pipelines in check.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (2)
> **Tools:** bitbucket (2)
> **Speakers:** - [instructor] (1)

#### Configure resource allocation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=0)** - [Instructor] One way we can keep our pipelines optimized is by providing the right amount of resources.
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=6)** Build steps that are memory intensive or require lots of CPU can take much longer to run if those resources aren't available in the build environment and build steps that are storage intensive can fail the entire pipeline if they run out of space.
>
> **[0:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=23)** We can use the size option to allocate additional CPU, memory and storage.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=30)** Size can be configured for an entire pipeline or for a specific step.
>
> **[0:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=35)** Now, before you start trying to increase the size of every pipeline or step in your workflow, there are a few things you need to keep in mind.
>
> **[0:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=44)** The default or 1x size provides two shared CPUs, four gigabytes of memory and 64 gigabyte volume for local storage.
>
> **[0:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=55)** The 2x size provides four shared CPUs and eight gigs of memory, but keeps storage at 64 gigabytes.
>
> **[1:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=64)** There are also 4x and 8x size options which provide even more CPU, RAM and storage.
>
> **[1:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=72)** However, the 4x and 8x options are only available for Bitbucket accounts using a paid plan.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=80)** So if you're on the free plan, the 4x and 8x sizes won't be available for you to use.
>
> **[1:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=86)** There's also one more very important thing you need to know before increasing pipeline sizes.
>
> **[1:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=93)** Any size option larger than 1x uses additional build minutes.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=98)** A 2x size uses twice the build minutes.
>
> **[1:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=102)** A 4x size uses four times the build minutes and so on.
>
> **[1:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=106)** So increasing size can help with optimizing pipelines when resources are constrained, but keep in mind that it comes at the expense of build minutes.
>
> **[1:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=117)** So use larger sizes only when it's absolutely necessary for your deployments or workflows.
>
> **[2:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=124)** Okay, let's see how we can use size in a pipeline.
>
> **[2:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=129)** I'm logged into my Bitbucket account and I'm viewing the pipeline configuration for this demonstration.
>
> **[2:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=135)** The configuration starts with a definition for a resource allocation report that we can use to compare CPU, RAM and storage for different sized allocations.
>
> **[2:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=146)** In the pipeline section, we have two steps.
>
> **[2:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=149)** The first step has the size configured to 1x, which isn't even really needed, because 1x is the default.
>
> **[2:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=156)** The second step is configured to use the 2x resource allocation.
>
> **[2:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=162)** I've run the pipeline and now I'm viewing the results for the default size.
>
> **[2:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=167)** The log shows two CPUs available, almost six gigabytes of RAM and just under 64 gigabytes of disc space.
>
> **[2:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=175)** Let's compare this to the step with 2x size.
>
> **[2:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=179)** In the 2x or double size report, we have four CPUs, almost 10 gigs of RAM and the same amount of disc space.
>
> **[3:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=188)** So the allocations are what we would expect, about two times more than the default with the exception of storage.
>
> **[3:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=196)** Let's compare the build minutes.
>
> **[3:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=199)** The 1x step ran for three seconds and used three seconds of build time, 2x step ran for four seconds, but used double the amount of time, eight seconds.
>
> **[3:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=210)** So just to restate, make sure you're allocating additional CPU, RAM and storage when your pipeline really needs it, otherwise, you might be using up build minutes unnecessarily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (2)
> **Env Vars:** cpu (5), ram (5)
> **Tools:** bitbucket (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### Use conditional steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=0)** - [Instructor] Some repositories you'll work with will contain the code for multiple applications or projects.
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=6)** This type of repo is referred to as a monorepo.
>
> **[0:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=10)** Monorepos have the advantage of keeping all the code together in one place, which can make it easier to manage shared dependencies and increased collaboration.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=19)** However, when it comes to continuous integration and deployment, monorepos present the challenge of developing efficient workflows that support multiple code bases.
>
> **[0:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=29)** For example, changing the code in one project in the repo may trigger pipeline runs on other projects where the code hasn't changed.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=37)** This can use up build minutes and cause unnecessarily long pipeline runs.
>
> **[0:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=42)** We can optimize monorepo pipelines by only running build steps when specific code has changed.
>
> **[0:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=50)** Bitbucket allows us to use a condition directive to run steps only if certain files have changed.
>
> **[0:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=57)** We can apply conditions and change sets at the stage and step levels.
>
> **[1:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=62)** Using glob patterns, we can target individual files or complete directories.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=68)** If the event that triggered the pipeline includes changes to the indicated files or files inside the indicated directory, then that stage or step will be run.
>
> **[1:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=78)** Otherwise, it gets skipped completely.
>
> **[1:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=82)** Let's consider this Monorepo.
>
> **[1:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=84)** It's a single repository with two projects, one with Python code and another with Ruby Code.
>
> **[1:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=92)** Both projects have their own test suites.
>
> **[1:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=96)** A typical approach to testing would run a pipeline for both projects on every push to the repo, but this can run into the problem of testing code that hasn't changed, causing long running pipelines.
>
> **[1:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=109)** This is the perfect case for a condition that specifies the files for each project.
>
> **[1:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=115)** That way, isolated changes only run tests in the project that was updated.
>
> **[2:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=120)** Let's see how this plays out in the Bitbucket interface.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=125)** I'm logged into my Bitbucket account and I've created a new repository for this demonstration.
>
> **[2:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=131)** I've added the exercise files for this lesson, which includes this pipeline without conditions and code for two sub-projects, one, using Python and the other, using Ruby.
>
> **[2:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=143)** The pipeline is configured to run tests for both the Python and Ruby projects.
>
> **[2:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=148)** This gives us a runtime of about one minute.
>
> **[2:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=152)** Now let's see how we can optimize this Python with conditions.
>
> **[2:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=157)** In this updated workflow, I've added conditions to both steps.
>
> **[2:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=161)** If code under either the Python or Ruby directories changes, then the test for that project will run.
>
> **[2:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=169)** I've also added a path for the shared directory.
>
> **[2:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=172)** We need to consider the case where some code affects both projects.
>
> **[2:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=176)** If the shared code changes, we'll run tests for Python and Ruby.
>
> **[3:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=182)** After adding this configuration with no code changes, the pipeline skips both steps.
>
> **[3:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=189)** This makes sense because neither project was changed and no shared code was added or modified.
>
> **[3:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=196)** In this pipeline run, I've made a change to the Python code.
>
> **[3:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=200)** This triggered the pipeline, but only the test for Python were run giving a total runtime of 16 seconds.
>
> **[3:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=207)** With these conditions in place, we'll save build time down the road depending on which project is being actively developed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Bitbucket]] (3), [[Continuous Integration (CI)|Continuous integration]] (1)
> **CLI Commands:** python (8), ruby (5), make (1)
> **Tools:** bitbucket (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Cache dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=0)** - [Instructor] Most software projects use dependencies to add functionality.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=5)** These dependencies are downloaded from remote locations.
>
> **[0:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=9)** For example, Python projects might use the Pandas library for data processing, and JavaScript projects might use React for building user interfaces.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=20)** On our local machines, we download these dependencies once and reuse them, but in pipelines, each run starts from scratch, meaning dependencies are downloaded every time.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=33)** This can make pipelines slower, especially for projects with many dependencies or dependencies that need to be compiled locally.
>
> **[0:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=41)** To speed things up, we can cache dependencies.
>
> **[0:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=45)** Bitbucket provides predefined caches for several popular programming languages and development tools.
>
> **[0:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=52)** Just adding the caches configuration to the steps that can use them can easily shorten pipeline runs.
>
> **[0:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=59)** We can also define custom caches.
>
> **[1:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=62)** With custom caches, we can specify the file system path where the dependencies are stored.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=68)** We can also specify files that can be used as keys to determine when the cache should be recreated.
>
> **[1:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=75)** If a key file changes, the cache is cleared and rebuilt.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=80)** We can also manually clear the cache from the Bitbucket web interface.
>
> **[1:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=84)** Let's take a look at some examples using caches.
>
> **[1:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=89)** I'm logged into my Bitbucket account and I've created a new repository for this lesson.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=94)** I've added the exercise files and I'm viewing the pipeline configuration.
>
> **[1:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=99)** This repo has Python and Ruby components, so I'm using two cache definitions.
>
> **[1:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=105)** On line three of the file, I've defined a custom cache for Ruby with a path to the location where dependencies will be installed.
>
> **[1:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=114)** The cache creation and refresh will be triggered off changes to the Gemfile.lock file.
>
> **[2:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=121)** If we add new or updated libraries, then the cache will be recreated.
>
> **[2:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=126)** Otherwise, we can reuse it for future pipeline runs.
>
> **[2:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=130)** Further down on line 20, I'm using the predefined cache for Python.
>
> **[2:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=135)** We don't have to specify a path or any key files for this cache since Bitbucket handles all of that for us.
>
> **[2:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=143)** This is the first time the pipeline has run, and we can see that the Ruby step takes 34 seconds to run.
>
> **[2:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=150)** If we look in the build setup step, it shows how the pipeline tried to download the cache, but it wasn't found.
>
> **[2:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=158)** This makes sense because this is the first pipeline run.
>
> **[2:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=162)** And if we scroll down and look at the build tear down, it shows how a new cache is being created.
>
> **[2:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=171)** I've made a small change to the code and rerun the pipeline.
>
> **[2:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=175)** Right away we can see some improvements in the Ruby step's runtime.
>
> **[3:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=180)** It only took seven seconds with the cache in place.
>
> **[3:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=184)** Taking a look at the build setup again, we can see that the cache was indeed downloaded this time.
>
> **[3:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=190)** And this is the real benefit of caching since the cache download took much less time than downloading all the dependencies needed by that step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (4), [[Python (Programming Language)|Python]] (3), [[Software Projects]] (1), [[Pandas (Software)|Pandas]] (1), data (1)
> **CLI Commands:** ruby (4), python (3), make (1)
> **Tools:** bitbucket (4)
> **Exercise Files:** exercise files (1), download the (1)
> **Prerequisites:** setup (2)
> **File Paths:** gemfile.lock (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)

#### Solution: Optimize a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=0)** - [Instructor] I love the sound of that music.
>
> **[0:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=7)** I hope you had a good time with this challenge.
>
> **[0:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=10)** Let's take a look at the solution.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=12)** Starting with the original pipeline configuration.
>
> **[0:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=15)** We're using a Python image, and this pipeline has one step.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=20)** The script has two commands.
>
> **[0:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=23)** It installs some requirements, and then it runs the cluster analysis script.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=30)** Let's take a look at a run of this pipeline.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=33)** Out of the gate, this pipeline run takes one minute and 37 seconds.
>
> **[0:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=38)** The longest command in this step was the PIP install step, which took over a minute and a half in this run.
>
> **[0:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=44)** So that's one of the things that we're going to try to optimize as we make changes to the pipeline.
>
> **[0:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=49)** We can also take a look at the cluster analysis script and see that the dataset was created.
>
> **[0:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=54)** In other words, the script had to create its own data instead of using data that was already there.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=61)** Depending on how much data the script needs to create, that could take some time.
>
> **[1:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=65)** So that's another point that we're trying to optimize.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=68)** Now, it doesn't look like this script ran more than 10 minutes, but we also have to keep in mind that something that we need to account for as well.
>
> **[1:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=78)** Let's take a look at the changes I made to meet the requirements of this challenge.
>
> **[1:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=83)** Starting off, I added a max time option for 10.
>
> **[1:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=89)** By setting the max time option for 10, if this script runs any longer than 10 minutes, then it's automatically going to be stopped.
>
> **[1:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=97)** This will account for the script running away unnecessarily and using up build minutes.
>
> **[1:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=103)** I also added a custom cache for the data directory.
>
> **[1:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=109)** This is where the script is reading its data from.
>
> **[1:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=112)** If the data file is present, then the script will use it.
>
> **[1:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=115)** Otherwise it will generate data, which could take some time.
>
> **[1:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=119)** So in this case, we're going to store any data that's present, so it can be reused.
>
> **[2:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=124)** I also added a cache for pip.
>
> **[2:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=127)** This is the default cache that Bitbucket pipelines makes available for us to use.
>
> **[2:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=132)** So I'm just taking advantage of that.
>
> **[2:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=135)** I'm also calling my custom cache so that when the script writes data there, any files that are written will be used and then stored away so that they can be reused on the next pipeline run.
>
> **[2:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=151)** I also added a condition for a change set.
>
> **[2:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=155)** In this case, if the cluster analysis script doesn't change, then this particular step won't be run at all.
>
> **[2:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=161)** This is like the ultimate optimization to prevent build minutes from being used unnecessarily, because if we haven't changed this particular file, then we don't need to run this pipeline.
>
> **[2:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=175)** Let's see how these changes affected a run of this pipeline.
>
> **[2:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=178)** This pipeline run is from the push where I modify the pipeline configuration.
>
> **[3:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=183)** This clearly shows that our change set worked because the data analysis step wasn't run.
>
> **[3:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=193)** So zero build minutes were used for this particular push to the repo, which is exactly what the data analysis team was hoping for.
>
> **[3:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=201)** I've run the pipeline a couple times after modifying the script.
>
> **[3:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=205)** So the caches are created and used, and the first thing that we can check to identify that the caches were actually used is the build setup portion of the pipeline.
>
> **[3:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=217)** In this part of the log, we can see that the caches were indeed downloaded.
>
> **[3:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=222)** Then in the installation script, we can see that PIP is using the cached versions instead of downloading everything.
>
> **[3:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=232)** And finally, if we go down here to the cluster analysis, we can see that the script has some logic to check for a data file.
>
> **[4:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=241)** This time, we see that the script says, Hey, the dataset is there.
>
> **[4:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=245)** I'm just going to use it and run with it, and it does its thing and generates the analysis report.
>
> **[4:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=250)** Okay, let's review.
>
> **[4:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=252)** In the pipeline configuration, I added an option that prevents the pipeline from running for more than 10 minutes.
>
> **[4:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=259)** I added a custom cache for the data directory and also used the default cache for PIP.
>
> **[4:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=267)** Then I added a change set, which only runs the analysis step if there are changes to the cluster analysis script.
>
> **[4:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=274)** So with these changes in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[Python (Programming Language)|Python]] (1), [[Bitbucket]] (1), next (1)
> **CLI Commands:** pip (4), python (1), make (1)
> **Env Vars:** pip (3)
> **Prerequisites:** install (1), setup (1)
> **Tools:** bitbucket (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Using Pipes in Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### Getting to know pipes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=0)** - In this chapter, we'll ramp up with one of Bitbucket Pipeline's most powerful features, pipes.
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=6)** Pipes are prepackaged commands that simplify complex tasks in your CI/CD pipelines.
>
> **[0:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=13)** We can use pipes to encapsulate complex task into portable configuration elements ready to be added to a pipeline script.
>
> **[0:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=22)** Pipes are built using docker containers.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=25)** Each pipe is essentially a lightweight, self-contained environment that comes pre-configured with all the code needed to perform a specific task.
>
> **[0:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=34)** With everything packaged inside the container, pipes allow you to easily reuse complex commands across different Bitbucket workspaces, projects, and repositories.
>
> **[0:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=45)** Pipes are parameterized, which means you can customize their behavior by passing in repository variables or predefined pipeline variables as input.
>
> **[0:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=55)** Using this approach, we can configure pipes to meet the specific needs of different pipelines.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=61)** Bitbucket offers dozens of pipes for popular tools and platforms, allowing pipelines to integrate with cloud platforms, collaboration tools, and many other solutions.
>
> **[1:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=72)** Some pipes that integrate with third party tools can provide feedback directly in the Bitbucket interface.
>
> **[1:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=78)** Based on the results of the pipeline runs, these pipes can write reports that can be viewed in the same webpage where the pipeline was run.
>
> **[1:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=87)** This helps developers stay in the context of their application and iterate quickly using the feedback from pipes.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=94)** In the next lesson, we'll use our first pipe to demonstrate just how easy it is to integrate these powerful tools into our pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (4), ci (1), cd (1), cloud (1), application (1)
> **Tools:** bitbucket (4)
> **CLI Commands:** cd (1), docker (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### Use a pipe in a pipeline configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=0)** - [Instructor] Let's use a pipe in a pipeline.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=8)** I've added the exercise files for this lesson to a new repo.
>
> **[0:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=11)** The main file in this repo is a cloud formation template.
>
> **[0:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=15)** We'll be using this template to deploy resources to AWS.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=20)** This repo also contains a pipeline configuration.
>
> **[0:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=24)** We'll use this configuration to run a pipe that lints files used to deploy infrastructure as code.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=30)** The scanner checks for misconfigurations, potential security vulnerabilities, best practices for the target platform, and much more.
>
> **[0:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=39)** When the scan completes, we'll be able to see a summary of all the findings as a report, right in the Bitbucket interface.
>
> **[0:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=46)** Let's see how that works.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=48)** I'm viewing a run of a pipeline that uses a pipe to scan the cloud formation template.
>
> **[0:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=54)** In the log output, we can see how the pipe starts with a docker container run command.
>
> **[1:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=60)** This is key since the pipe operates as a docker container.
>
> **[1:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=65)** Followed by the run command are parameters that mount the pipeline workspace into the container and pass pipeline variables into the pipe's execution environment.
>
> **[1:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=76)** This is also important since it allows the pipe to interact with the files and pipeline variables defined for the repository.
>
> **[1:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=84)** We could also review the logs from the pipe, but we can take advantage of a report that was written to the Bitbucket interface for this pipeline run.
>
> **[1:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=95)** Instead of parsing through logs to find the details we need, this pipe has created a report with all the details nicely summarized.
>
> **[1:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=108)** This way we can easily find the problem areas that we need to focus on in our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (2), [[Bitbucket]] (2), aws (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Security]] (1)
> **CLI Commands:** docker (2), find (2), aws (1)
> **Exercise Files:** template (3), exercise files (1)
> **Tools:** bitbucket (2)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Use a pipe to deploy code to AWS Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=0)** - [Instructor] Let's use a pipe to deploy code to AWS Lambda.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=5)** Our pipeline will consist of three stages.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=8)** The first stage integrates any new or updated code into the code base, using an integration step.
>
> **[0:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=15)** We'll run linters and run the application Test suite to make sure everything is valid.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=20)** The second stage builds the Lambda package by zipping up the required files into an archive that we can deploy.
>
> **[0:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=29)** And finally, the last stage does the deployment.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=33)** This is the stage where we'll be using a pipe.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=37)** We could use the AWS command line interface for the deployment, but we can basically replicate these steps using a pipe.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=48)** The pipe makes it easy to encapsulate the build steps into a package that's portable, tested, and has best practices in mind.
>
> **[0:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=57)** Let's take a closer look at getting this pipe in place.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=61)** To set the stage for our pipe, we'll create deployment variables for the staging and production environments.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=68)** This allows us to use the same variable names, but with values specific to the environment being deployed.
>
> **[1:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=76)** We'll also create repository variables for our AWS credentials.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=80)** Creating these at the repo level is the best approach, so they can be used across both environments.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=88)** To complete the parameters for the pipe, we pass in the function name, a function configuration, and the name of the zip file that contains the function code.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=98)** The command parameter tells the pipe what sort of deployment this is, and the wait parameter keeps the pipeline from going on to the next command until the deployment is complete.
>
> **[1:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=108)** Okay, let's put this pipe to work.
>
> **[1:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=112)** I've added the exercise files for this lesson to a new repository, configured the repository and deployment variables, and I've run the pipeline.
>
> **[2:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=120)** Let's take a closer look at the output from the pipe.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=125)** The output starts on line one with a call to docker.
>
> **[2:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=129)** This starts the pipes container.
>
> **[2:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=132)** The following lines show the volumes and environment variables that get passed to the pipe.
>
> **[2:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=137)** This connection is key because it allows the pipe's isolated environment to interact with our code and repository variables.
>
> **[2:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=146)** Specifically, lines 37 through 39 show our AWS credentials being passed in so, the pipe can authenticate with AWS and access the deployment target in AWS.
>
> **[2:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=159)** And the last lines of the output from the pipe give us some insight into the pipe's operation.
>
> **[2:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=166)** All of this info is great, but honestly, that last line is the most important line of all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (6), application (1), next (1)
> **CLI Commands:** aws (6), make (1), docker (1)
> **Env Vars:** aws (6)
> **Exercise Files:** zip file (1), exercise files (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Solution: Use pipes in a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=0)** - [Instructor] Yes, that groovy music means it's time to discuss the solution for this challenge, so let's jump right in.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=12)** I added the Exercise Files to a new repo, and then I created an access token named Statistics.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=19)** This token gives permission to read pipelines and write to the Repository Downloads page.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=25)** I stored this token in a secure repository variable because this is a sensitive value.
>
> **[0:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=31)** It's pretty much like a password that we can use to access the Bitbucket API from a pipeline, so we need to protect it.
>
> **[0:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=39)** Now let's check out the pipeline configuration.
>
> **[0:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=42)** To start, I'm exporting a variable that uses the file name specified in the challenge.
>
> **[0:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=52)** That gets passed to the build-statistics pipe along with the variable holding the STATISTICS_ACCESS_TOKEN.
>
> **[1:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=60)** These same variables are passed as parameters to the upload pipe.
>
> **[1:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=67)** Now let's look at a run of this pipeline configuration.
>
> **[1:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=72)** Let's start with the build-statistics pipe.
>
> **[1:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=75)** It starts with a docker run command and then generates the statistics report.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=88)** The pipe also generates a file, so once that file is saved, we can upload it using the upload pipe.
>
> **[1:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=100)** In the output for the upload pipe, we see the file that was successfully uploaded, and we get a link that takes us directly to the Downloads page.
>
> **[1:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=115)** Let's follow that link.
>
> **[2:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=121)** On the Downloads page.
>
> **[2:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=122)** there's the build-statistics file.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=125)** Okay, let's walk through the steps that I used to solve this challenge.
>
> **[2:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=132)** I created a repository token, which had the correct permissions to read pipelines and also write back to the Repository Downloads page.
>
> **[2:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=141)** Once that was in place, I stored that token in a secure repository variable so it was accessible from the pipeline.
>
> **[2:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=149)** With that in place, I updated the pipeline with a build-statistics pipe and the upload file pipe.
>
> **[2:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=160)** Both of these pipes were configured to use the required file name.
>
> **[2:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=166)** Once that was in place, the report was generated, and the file was placed on the Downloads page.
>
> **[2:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=170)** So I'm confident in saying that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (6), [[Bitbucket]] (1), api (1)
> **Env Vars:** api (1), statistics_access_token (1)
> **CLI Commands:** docker (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Create Custom Pipes

[↑ Back to Table of Contents](#table-of-contents)

#### When to use custom pipes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=0)** - Pipes are portable, reusable packages that we can use in our Bitbucket pipelines.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=5)** There are plenty of pipes available, but there are also plenty of situations where developing our own pipe might be a better solution.
>
> **[0:14](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=14)** If you're developing pipelines that perform the same complex task in several steps, or across multiple repositories, a custom pipe can make pipeline maintenance and updates much easier.
>
> **[0:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=26)** If you're a vendor providing a service to other developers, creating pipelines, you can create a pipe that makes it easier to access your software or integrate with your service.
>
> **[0:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=36)** Or you might need to provide an advanced pipeline solution that requires a complex environment or has specific dependencies.
>
> **[0:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=43)** In these cases, a custom pipe might be your pipeline superpower.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=48)** Before you create a pipe, you'll want to consider creating a simple pipe or a complete pipe.
>
> **[0:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=54)** A simple pipe is perfect for your own personal use, or perhaps within a team.
>
> **[0:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=59)** You can create a simple pipe with just a few things, a script to perform the task, a dockerfile to define the runtime environment, and a way to deploy the container image to Docker Hub, or another publicly available container registry.
>
> **[1:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=75)** Complete pipes are designed for public distribution across wide audiences.
>
> **[1:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=81)** In addition to the requirements of a simple pipe, a complete pipe is required to have a few more things.
>
> **[1:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=87)** You'll also need a metadata file to define inputs and outputs, a README file for documentation, and a test suite to make sure the pipe is working as intended.
>
> **[1:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=100)** I should add that only complete pipes can be published to the Atlassian marketplace.
>
> **[1:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=106)** To help us get started, Atlassian provides tools that can speed up our pipeline development.
>
> **[1:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=112)** This includes a command line tool that uses input to generate the project structure for a pipe, Python, and Bash libraries with classes and functions we can use to interact with the pipeline's environment, and plenty of example pipes that we can use for inspiration and as references while we develop pipes of our own.
>
> **[2:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=132)** Whether you need a quick solution for your team, or a polished tool for the entire community, creating a custom pipe can be an excellent addition to your automation toolbox.
>
> **[2:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=141)** So, without any more delay, let's make a custom pipe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (2), [[Bitbucket]] (1), [[Metadata]] (1), [[Python (Programming Language)|Python]] (1), [[Automation]] (1)
> **CLI Commands:** make (3), docker (1), python (1)
> **Tools:** bitbucket (1), command line (1), bash (1)
> **Env Vars:** readme (1)
> **Prerequisites:** required to (1)
> **Speakers:** - pipes (1)

#### Develop a custom pipe
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=0)** - [Instructor] As I start creating a new pipe, I've cloned a new repo to my local system and created a Python virtual environment.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=8)** First, I'll install the Yeoman Generator tool and the generator for Bitbucket Pipes.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=25)** Now I can use the yo command to start the pipe generator.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=37)** This starts a wizard with prompts for the type of pipe I'm creating and other details.
>
> **[0:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=42)** Even if this is your first pipe, I highly recommend using one of the advanced templates.
>
> **[0:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=47)** The simple templates are great to get started, but the advanced templates will keep you on a path with best practices for pipe development.
>
> **[0:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=56)** I'll be using the advanced Python template.
>
> **[1:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=63)** The wizard will prompt me for details so I can fill in the files created by the generator.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=68)** Of course, your responses will be specific to you, but there's one thing I want to point out.
>
> **[1:14](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=74)** When the wizard asks for your account, what it's really asking for is the workspace where the repository is created.
>
> **[1:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=81)** If you enter your account name, the links created by the generator won't work like you expect them to.
>
> **[1:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=87)** If you wanted to know the history on this, check out the shenanigans in the exercise files.
>
> **[1:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=92)** With all my details entered, the generator, creates all the files I need to get this pipe going, and this is really one of the main reasons to use one of the advanced templates.
>
> **[1:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=102)** Even if we're creating a simple pipe, it's a good practice to include a README file, a test suite, and, of course, a pipeline to run our tests and deployments.
>
> **[1:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=112)** Before we do all that, we have to add our secret ingredients to make this pipe our own.
>
> **[2:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=126)** I'm using Vim to edit this file in my terminal.
>
> **[2:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=128)** Feel free to use your own IDE as you like.
>
> **[2:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=132)** On the very first line of the script, there's an import for the Bitbucket Pipes Toolkit.
>
> **[2:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=144)** This is a library of functions we can use to tap into the pipe's environment.
>
> **[2:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=148)** Out of the box, we're set up to connect to the pipeline environment and write to the pipeline logs.
>
> **[2:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=154)** The schema for the pipe defines the parameters and environment variables that our script will use, and the class is where we can add our own functionality.
>
> **[2:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=165)** I'll change the name from DemoPipe to AwesomePipe,
>
> **[3:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=180)** and I'll change the output just a little bit to show that this pipe is awesome.
>
> **[3:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=207)** Okay, that's the start of my custom pipe.
>
> **[3:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=210)** I'll save these changes and go back to the command line.
>
> **[3:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=214)** Now I need to make just a couple more changes.
>
> **[3:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=221)** The pipeline configuration refers to a master branch.
>
> **[3:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=228)** I'm using main for my production branch, so I'll update the configuration to match that.
>
> **[4:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=241)** And now I'll save these changes.
>
> **[4:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=245)** And there's one more thing.
>
> **[4:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=247)** The pipeline uses a release pipe that requires we have semantic versioning in place.
>
> **[4:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=253)** I'll install the SemVersioner app using pip, and then use it to add an entry for the next release.
>
> **[4:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=287)** Now I'll push these changes to the repo.
>
> **[5:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=316)** Perfect.
>
> **[5:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=317)** Now let's take a look at the repo in the web interface.
>
> **[5:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=321)** Now that we pushed the files for our custom pipe, our repo is decked out with everything it needs for the Atlassian Marketplace.
>
> **[5:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=335)** Most importantly, we have a README file showing how to fit the pipe in a pipeline, the variables that are defined, and we even get a few examples showing how to call the pipe.
>
> **[5:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=352)** This is great, but I don't want to get ahead of myself.
>
> **[5:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=355)** This pipe still needs to be tested and deployed.
>
> **[5:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=359)** We'll go over tests in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Bitbucket]] (2), next (2), prompt (1), web (1)
> **CLI Commands:** python (2), make (2), pip (1)
> **Tools:** bitbucket (2), vim (1), terminal (1), command line (1)
> **Env Vars:** readme (2), ide (1)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** is a  (1), refers to (1)

#### Test a custom pipe
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=0)** - [Instructor] I've used the Bitbucket Pipe Generator to create a custom pipe, and now I'm viewing the test suite that was generated.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=8)** Lines four through 22 show how the test suite uses Docker to build the pipe locally and run tests.
>
> **[0:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=16)** The test suite creates a Docker file, so I don't have to worry about making that.
>
> **[0:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=23)** The tests are defined on lines 24 and 35.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=33)** These tests are set up to work with a generated code out of the box.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=37)** Of course, if I add additional functions to the code, I would need to make changes here to test those features.
>
> **[0:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=43)** These tests should work for me though, so let's go to the command line.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=48)** Before I test, I need to confirm I have Pytest and Docker installed.
>
> **[0:53](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=53)** With those in place, I can run the test suite.
>
> **[1:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=62)** I'll use the verbose flag with Pytest so we get a bit more output.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=68)** Hey, the test passed, that means I'm one step closer to getting my custom pipe working in a pipeline.
>
> **[1:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=75)** In the next lesson, we'll cover the steps needed to get the custom pipe deployed to Docker Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (1), next (1)
> **CLI Commands:** docker (4), make (1)
> **Tools:** bitbucket (1), command line (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Deploy a custom pipe to a container registry
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=0)** - [Instructor] At this point, all the code is in place for my custom pipe.
>
> **[0:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=4)** I have the main script for the pipe and a test suite to make sure the pipe works as expected.
>
> **[0:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=10)** Now I'm ready to deploy the pipe to Docker Hub so I can use it in a pipeline.
>
> **[0:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=15)** Before I do that though, I need to configure a couple things.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=20)** First, I need to go to the repository settings page and toggle the switch that enables pipelines.
>
> **[0:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=32)** I'll be merging in the pipeline configuration a little later on, so I don't need to configure pipelines right now.
>
> **[0:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=40)** Now that pipelines are enabled, I can start adding the variables that the pipeline will need to push the pipe image into the Docker Hub container registry.
>
> **[0:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=49)** Let's start in the Docker Hub interface.
>
> **[0:53](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=53)** I'm logged into my Docker Hub account and I've created a new public repo.
>
> **[0:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=58)** I'll be using this repo to store the image for the pipe.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=61)** I need to create a token that the pipeline can use to push the image.
>
> **[1:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=66)** I'll select my account icon, and then I'll select account settings.
>
> **[1:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=85)** Under security, I'll select Personal access tokens.
>
> **[1:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=93)** On this page, I can create a token that Bitbucket can use to access my Docker Hub account.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=98)** The token is like a password, but it's a little easier to manage.
>
> **[1:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=102)** I'm prompted to set the token description, expiration date, and set the access permissions.
>
> **[1:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=108)** I'll enter a memorable description and set the token to expire in 30 days.
>
> **[2:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=121)** The pipeline will need right permission to push the image, so I'll set that access level.
>
> **[2:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=133)** Now I can generate the token.
>
> **[2:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=140)** After the token is created, we have to capture the details right away.
>
> **[2:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=144)** I'll select the copy button next to the token.
>
> **[2:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=153)** Now, I'll save this token as a repository variable.
>
> **[2:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=158)** Right away I'll paste in the token value and then enter the variable name.
>
> **[2:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=165)** The pipeline will be looking for the variable named registry_password, so I'll enter that and select add.
>
> **[3:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=183)** The other variable that the pipeline needs is registry_username, so I'll add that variable as well.
>
> **[3:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=195)** Now that these variables are in place, I can merge the pipe code into the main branch and run the pipeline to test, build and deploy the pipeline image.
>
> **[3:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=205)** Everything is already set to merge the feature branch into the main branch so I'll select create pull request, and right away I'll approve and merge this PR.
>
> **[3:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=230)** Now let's go to the pipelines tab, and I'll refresh this screen to see the pipeline that's already in progress.
>
> **[4:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=240)** Let's click into that and take a look at the logs.
>
> **[4:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=244)** Excellent, the pipeline completed successfully, which means the pipe's container image was pushed to Docker Hub.
>
> **[4:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=251)** Let's go over there and confirm.
>
> **[4:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=253)** Back on the Docker Hub page, I'll refresh the page and select tags.
>
> **[4:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=258)** Excellent. Here's the image as expected.
>
> **[4:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=262)** Now that we have a pipe in place, it only seems fitting to add it to a pipeline.
>
> **[4:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=266)** We'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), [[Security]] (1), [[Tokens]] (1), [[Bitbucket]] (1), feature (1)
> **CLI Commands:** docker (7), make (1)
> **UI Navigation:** go to (2), toggle (1), select the (1)
> **Code Identifiers:** registry_password (1), registry_username (1)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)

#### Use a custom pipe in a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=0)** - [Instructor] I'm all set to try out my custom pipe.
>
> **[0:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=3)** I've generated and tested the code and deployed it to Docker hub.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=8)** Now, comes the easy part, using it in a pipeline.
>
> **[0:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=11)** I've created a new repository and added a pipeline configuration with just one step to call our pipe.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=19)** The name variable is required, so I've added it here and I'm passing in the variable holding the username of the repo owner.
>
> **[0:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=27)** Okay, let's see a run of this pipeline.
>
> **[0:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=31)** First of all, I'm totally happy that the pipeline completed without error.
>
> **[0:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=35)** That's a good sign that the pipe was packaged and retrieved properly.
>
> **[0:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=39)** Let's check out the log.
>
> **[0:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=44)** The log shows all the details passed to the pipe with the Docker run command.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=48)** And if I scroll all the way down to the end, I can see the output I'm looking for.
>
> **[0:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=54)** This pipe is working exactly like I planned for it to and yes, that makes me feel awesome.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Speakers:** - [instructor] (1)

#### Solution: Develop a custom pipe
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=0)** - [Instructor] I tell you that music is like a prelude to us discussing another solution.
>
> **[0:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=10)** It just gets better and better.
>
> **[0:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=13)** This time, we're helping a team develop a custom pipe.
>
> **[0:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=16)** We can start with the output from the test suite.
>
> **[0:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=20)** Everything is passing, so we know we're starting from a good state.
>
> **[0:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=24)** Taking a look at the code that's provided, it looks like the team started out with a Bitbucket pipe generator.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=30)** The script is passed in a name variable and the value for that variable gets printed.
>
> **[0:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=39)** Then the script prints a message saying that the function ran successfully.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=48)** The test suite runs two tests, one without parameters, and another that confirms that the value passed in gets reported properly.
>
> **[0:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=58)** This is all with the name parameter, so we need to explore the code and make changes that replace name with customer ID.
>
> **[1:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=67)** In this view, I'm showing the changes that I made to the pipe script.
>
> **[1:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=71)** I changed every instance of name to customer_id.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=80)** I also changed the success message to echo that the customer ID was processed successfully.
>
> **[1:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=87)** Now, what I like to do after I make a change like this is to run the test suite again, which should cause the test to fail.
>
> **[1:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=96)** If I go to the pipeline for this change, I do get a failure, but this is a failure that I would expect.
>
> **[1:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=102)** So this is a good thing.
>
> **[1:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=108)** Both these tests failed because the tests are still looking for name and I've updated the pipe to use customer_id.
>
> **[1:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=116)** So the next step is to update the tests to match the updated code.
>
> **[2:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=122)** I've changed name to customer_id for both tests, and I've passed a more sensible value for customer_id instead of hello world.
>
> **[2:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=135)** Now let's check out the test suite.
>
> **[2:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=138)** Hey, this pipeline shows the tests are passing, so now our code is correct and the tests validate the correctness of our code.
>
> **[2:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=146)** Let's review this solution.
>
> **[2:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=149)** The Alpha team provided code for a custom pipe along with a test suite.
>
> **[2:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=153)** I updated the code to implement the functionality that the Alpha team was looking for, specifically replacing name with customer_id and updating the success message.
>
> **[2:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=165)** And then I updated the test suite to make sure the changes were valid.
>
> **[2:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=170)** Running those tests, I got the correct output.
>
> **[2:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=172)** So with all these changes in place, I would say that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (1), next (1)
> **Code Identifiers:** customer_id (5)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Tools:** bitbucket (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Self-Hosted Runners

[↑ Back to Table of Contents](#table-of-contents)

#### When to use self-hosted runners
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=0)** - When we use Bitbucket Pipelines, we can rely on Atlassian's cloud-hosted runners for convenience and scalability.
>
> **[0:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=7)** But there are times when using our own runners might be a better fit.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=12)** Self-hosting runners can provide significant benefits, but self-hosting also comes with some challenges.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=19)** Let's take a look at both sides of hosting our own runners for Bitbucket Pipelines.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=25)** Self-hosted runners offer ultimate control over the resources behind your CI/CD pipelines.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=30)** For CPU or memory intensive builds, you can configure servers that provide all the resources needed.
>
> **[0:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=38)** You can also add more storage for builds that create large artifacts.
>
> **[0:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=43)** And if your pipeline needs specialized tools, you can tailor build environments that can be reused with minimal setup.
>
> **[0:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=51)** Self-hosted runners can also help with security and compliance.
>
> **[0:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=57)** Runners can be configured to interact with resources inside company networks, which might be difficult to do over the public internet.
>
> **[1:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=65)** Also, sensitive data or proprietary artifacts can be kept on private infrastructure to help meet regulatory requirements like GDPR or HIPAA.
>
> **[1:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=76)** From a cost perspective, self-hosting can be a smart move.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=80)** When pipelines run on your infrastructure, build minutes are not charged.
>
> **[1:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=85)** This is great if you have long running or frequent jobs.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=88)** Self-hosted runners can also minimize data transfer costs by keeping logs, artifacts, and dependencies within your network.
>
> **[1:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=97)** But self-hosting isn't all butterflies and rainbows.
>
> **[1:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=101)** We also have to consider the challenges of managing our own pipeline resources.
>
> **[1:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=106)** Managing our own runners will require some maintenance.
>
> **[1:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=110)** You'll need to deploy the servers, manage the operating system and software, and rarely apply security patches.
>
> **[1:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=118)** Scalability can also be a concern if your workload becomes more than your runners can handle.
>
> **[2:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=124)** And while self-hosting optimizes cost, in some cases, it's important to weigh the total cost of ownership, including any additional operating expenses.
>
> **[2:14](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=134)** And last but not least, we have to consider the security concerns that come with self-hosting.
>
> **[2:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=139)** So due to the persistent nature of self-hosted runners, they're perfect targets for bad actors that want to create persistent threats along with all the security measures you'd apply to other resources in your data center.
>
> **[2:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=152)** Self-hosted runners should never be used with public repositories.
>
> **[2:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=156)** Now to limit access to known and trusted parties, self-hosted runners should only be used with private repos.
>
> **[2:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=164)** So with all this in mind, when is self-hosting a good choice?
>
> **[2:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=168)** Here are a few reasons that you might be a good candidate for self-hosting.
>
> **[2:53](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=173)** You frequently run pipelines that are limited by the resources available on the Atlassian cloud.
>
> **[2:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=179)** You have access to resources that you can allocate to use for runners.
>
> **[3:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=183)** You need to integrate with sensitive resources like protected data, internal networks, or proprietary systems that can't be exposed to the public internet.
>
> **[3:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=193)** You understand the security concerns with self-hosted runners, and you're ready to keep your resources safe.
>
> **[3:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=199)** Now that we have some background on when to host our own runners, let's discuss how we can deploy them and what it takes to use them in our pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (5), data (4), [[Bitbucket]] (2), [[Atlassian]] (2), cloud (2)
> **Env Vars:** cpu (1), gdpr (1), hipaa (1)
> **Prerequisites:** configure (1), setup (1), you'll need (1)
> **Tools:** bitbucket (2)
> **CLI Commands:** cd (1)
> **Speakers:** - when (1)

#### Self-hosted runner configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=0)** - [Instructor] We have a few options for the types of runners we can consider for self-hosting.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=5)** We can choose from Linux Docker, Linux Shell, Windows, and macOS runners.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=12)** Even though we can use different operating systems, there are a few common requirements.
>
> **[0:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=18)** The system needs to be running a 64-bit version of the operating system, and have at least eight gigs of RAM available.
>
> **[0:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=26)** We'll need a recent version of the Open Java Development Kit.
>
> **[0:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=30)** And last but not least, Git needs to be installed as well.
>
> **[0:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=36)** When we create a runner, we can add labels.
>
> **[0:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=39)** Labels help schedule the right runner for pipelines just before they start.
>
> **[0:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=44)** If a runner has a specific operating system or pre-installed tools, we can assign a label to identify those features and target that runner from pipelines as needed.
>
> **[0:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=55)** We'll be focusing on Linux Docker, and Linux Shell runners.
>
> **[1:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=60)** These runner types provide a range of capabilities that can benefit many types of pipelines and CI/CD scenarios.
>
> **[1:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=67)** Linux Docker runners run steps in isolated environments based on container images, much like the runners we use on Bitbucket Cloud.
>
> **[1:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=77)** This is perfect for builds that need a clean workspace for each run of the pipeline.
>
> **[1:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=81)** However, steps that use Docker runners can't access file systems on the host runner.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=88)** Linux Shell runners use persistent environments that don't change between steps.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=94)** They can also access files and tools available on the host system.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=98)** This can help optimize build by having tools and dependencies already installed, so pipelines don't waste time setting up things on each run.
>
> **[1:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=107)** In the next lesson, we'll deploy a server that we can use to explore runners with both of these options.
>
> **[1:53](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=113)** But before we move on, I highly suggest you check out the exercise files for this lesson for more details on these and the other types of runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Windows]] (1), [[Java]] (1), [[Git]] (1), ci (1)
> **CLI Commands:** docker (4), git (1), cd (1)
> **Code Identifiers:** macos (1)
> **Env Vars:** ram (1)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Compare repository and workspace runners
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=0)** - [Instructor] Self-hosted runners can be installed for repositories or workspaces.
>
> **[0:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=5)** Let's compare these two approaches.
>
> **[0:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=7)** If a runner is added to a repository, it's only available for pipelines in that repo.
>
> **[0:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=13)** This can be great for a busy, active project that needs dedicated resources.
>
> **[0:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=19)** If we install runners at the workspace level, all repositories in that workspace can use the runners for their pipelines.
>
> **[0:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=26)** This provides a better opportunity to increase resource utilization across multiple projects.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=33)** Linux Shell, Windows, and MacOS runners can be well-suited for repositories that need custom build environments.
>
> **[0:41](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=41)** Since only one repo is using the runner, tools, dependencies, and hardware can be dialed in and kept consistent.
>
> **[0:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=51)** Workspace runners provide the best opportunity for Linux Docker runners.
>
> **[0:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=56)** Docker runners use a new environment for each pipeline run, so there's no concern about tools and dependencies from one project conflicting with the requirements of another project.
>
> **[1:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=68)** Okay, with all that covered, let's deploy a server that we can use for our runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1), [[Hardware]] (1)
> **CLI Commands:** docker (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Install runners in a workspace
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=1)** - [Instructor] I've deployed an EC2 instance, and I'm connected to it from the AWS web interface.
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=6)** I've elevated my session to the root user account, and I've run version checks for Java, Git, and Docker just to make sure everything is ready.
>
> **[0:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=27)** Now I'm on the Settings page for my Bitbucket workspace, viewing the Workspace Runners tab.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=33)** Since there are no runners installed yet, I'm invited to add one.
>
> **[0:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=36)** So I'll select the Add Runner button.
>
> **[0:42](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=42)** This starts the installation wizard, and I'm prompted to configure the runner.
>
> **[0:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=48)** Under System and Architecture, I can select the type of runner I'm installing, Linux Docker, Windows, MacOS, and so on.
>
> **[0:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=57)** I'll select Linux Docker.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=61)** I'll also enter Linux Docker for the name.
>
> **[1:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=70)** I also have the option to add labels.
>
> **[1:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=72)** The default labels, self-hosted and Linux, are applied, but I'll add Docker as well.
>
> **[1:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=85)** Now I'll go to the next page in the wizard.
>
> **[1:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=91)** This page provides a Docker command to start the runner.
>
> **[1:39](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=99)** The command includes credentials that the runner will use to communicate with Bitbucket, so, please, treat this command with the same level of security you would use for a username and password.
>
> **[1:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=110)** Selecting the stack squares icon copies the command to my clipboard.
>
> **[1:57](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=117)** Now I'll switch back to the terminal.
>
> **[2:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=121)** And I'll paste the command here.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=125)** Before running the command, I'll modify it slightly.
>
> **[2:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=139)** The -it flag makes the container run interactively, but I'll replace it with --detach to run the container in the background.
>
> **[2:31](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=151)** This way, I can start the runner and not have to open another terminal to run additional commands.
>
> **[2:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=158)** Now I can use docker ps to get the container ID.
>
> **[2:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=167)** I'll select and copy the container ID to the clipboard and then use it to see the container's logs using the docker logs command.
>
> **[3:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=181)** Great, the logs confirm that the runner is online.
>
> **[3:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=188)** Back in Bitbucket, I'll select Next.
>
> **[3:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=193)** The last screen in the wizard gives us an example showing us how to use the runner in a pipeline step and the labels for the runner we just deployed.
>
> **[3:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=202)** Now let's install a Linux Shell runner.
>
> **[3:26](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=206)** I'll select Add Runner again and choose Linux Shell for the system type.
>
> **[3:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=218)** This runner will be labeled Amazon Linux 2023 to indicate the operating system.
>
> **[3:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=232)** And if you guessed the name for this runner, you're right, I'll call it Linux Shell.
>
> **[3:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=239)** And now I'll select Next.
>
> **[4:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=243)** And just like we saw before, the wizard provides commands we can use to install and start the runner.
>
> **[4:14](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=254)** I'll be using these commands to create two scripts, one for installation and another for starting the runner.
>
> **[4:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=262)** This approach keeps the process reusable and clean in case we need to repeat these steps.
>
> **[4:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=267)** And I'll say it again.
>
> **[4:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=269)** The start command contains credentials, so please keep these values private and safely secured, just like a username and password.
>
> **[4:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=278)** Instead of using the copy icon this time, I'll select and copy both of the install commands to the clipboard.
>
> **[4:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=291)** Back in the terminal, I'll create a file named install.sh.
>
> **[5:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=300)** And I'll paste the commands here and then save the file.
>
> **[5:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=309)** Now I'll do the same for the start command.
>
> **[5:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=313)** Back in Bitbucket, I'll copy the two start commands, and go back to the terminal.
>
> **[5:22](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=322)** And I'll create a file named run.sh and paste in the run commands.
>
> **[5:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=338)** Now I need to change the mode for these files to make them executable.
>
> **[5:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=352)** Now let's run the install.
>
> **[6:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=360)** To start the runner, I'll use the command nohup, followed by run.sh, and then commands to send the script to the background while directing the logs to an output file.
>
> **[6:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=378)** I'll confirm the script is running with the jobs command.
>
> **[6:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=383)** And then I'll check the logs with the tail command.
>
> **[6:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=390)** Great, the logs are looking good.
>
> **[6:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=392)** Let's wrap things up in Bitbucket.
>
> **[6:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=396)** Back in Bitbucket, I'll select Next and then Finish.
>
> **[6:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=404)** Now that both runners are online, we can use them in pipelines.
>
> **[6:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=408)** Let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (8), [[Bitbucket]] (6), next (5), [[Amazon EC2|Ec2]] (1), aws (1)
> **CLI Commands:** docker (8), make (2), aws (1), git (1)
> **Tools:** bitbucket (6), terminal (4)
> **Prerequisites:** install (5), configure (1)
> **File Paths:** run.sh (2), install.sh (1)
> **UI Navigation:** select the (2), go to (1)
> **Env Vars:** ec2 (1), aws (1)
> **Cross-References:** go back to (1), in the next (1)

#### Use self-hosted runners in a pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=6)** - [Instructor] Let's use self-hosted runners in a pipeline.
>
> **[0:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=9)** I've got two runners ready to go, a Linux shell runner and a Linux docker runner.
>
> **[0:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=16)** I've also created a new repo and added the exercise files for this lesson.
>
> **[0:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=21)** The pipeline configuration sets up a script definition that we can use to explore the two different runners.
>
> **[0:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=29)** The script runs a series of commands to inspect the environment, providing system details, installed tools, and network information.
>
> **[0:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=47)** Let's see a run of this pipeline.
>
> **[0:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=50)** The first thing that stands out is the runner output at the beginning of the log.
>
> **[0:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=56)** This provides details on the runner that was scheduled for this step of the pipeline.
>
> **[1:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=61)** Since I only have one Linux shell runner, it's no surprise that the labels up.
>
> **[1:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=71)** The same will be true for the docker runner.
>
> **[1:14](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=74)** But if we had dozens or even hundreds of runners, this output would be helpful to track down a specific runner to debug an issue, analyze performance, or investigate resource usage.
>
> **[1:30](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=90)** I encourage you to review the output of the commands in both steps and compare the runner environments.
>
> **[1:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=97)** Take a look at the architecture, the CPU types and so on.
>
> **[1:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=105)** While you review the differences, think about why these differences exist and how they might impact things like pipeline execution, resource allocation, or troubleshooting, when either type of runner is used in a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Troubleshooting]] (1)
> **CLI Commands:** docker (2)
> **Env Vars:** cpu (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### Solution: Deploy a self-hosted runner
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=0)** - [Instructor] You know what that music means.
>
> **[0:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=8)** It's time to sit back, relax, and discuss the solution to another challenge.
>
> **[0:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=13)** First things first, I've deployed the CloudFormation template.
>
> **[0:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=17)** The resources include the data file parameter and parameter store, the profile and role that the server can assume, and of course the server itself.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=33)** Now with that in place, I can go to Bitbucket and get the commands needed to install the self-hosted runner.
>
> **[0:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=40)** I created these runners at the workspace level.
>
> **[0:43](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=43)** You could also create them at the repository level.
>
> **[0:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=46)** The key to solving this challenge is selecting the correct type of runner.
>
> **[0:54](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=54)** Specifically, we had to select a Linux Shell runner so that we can access resources on the runner itself.
>
> **[1:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=67)** This goes back to previous lessons where we learned that Docker runners, which are totally self-contained and do everything they need to do within the context of that runner, cannot access resources on the host where that container is running, so that would not have been the correct choice to solve this challenge.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=88)** Over on the server, I created an install script and a run script.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=98)** I use these to install the runner software and then start the runner as a background process.
>
> **[1:46](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=106)** Back in the repository, I created a variable for the AWS region.
>
> **[1:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=110)** My resources are deployed in the us-west-2 region, so I added that for this variable.
>
> **[1:56](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=116)** This isn't a secret value, so it's okay if this variable isn't protected.
>
> **[2:05](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=125)** This is the script that the pipeline runs to read the parameter from parameter store.
>
> **[2:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=133)** Then, it reads the file on the server.
>
> **[2:17](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=137)** Once it reads the file, it prints the contents.
>
> **[2:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=145)** We're also provided with a pipeline.
>
> **[2:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=148)** The first step installs the dependencies and sets up the environment.
>
> **[2:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=154)** The second step collects some details about the runner itself.
>
> **[2:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=160)** And then the last step runs the script that connects to the parameter store and reads the data file.
>
> **[2:48](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=168)** Let's see a run of this pipeline.
>
> **[2:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=172)** I'll jump straight to the step that reads the data file.
>
> **[2:58](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=178)** This script does its thing, and sure enough, we get a message showing the on-premises data.
>
> **[3:04](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=184)** Before we totally declare success, let's do a quick review.
>
> **[3:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=189)** We used CloudFormation to create our on-premises resources, specifically the parameter store, permission for the server to access parameter store, and the server itself.
>
> **[3:21](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=201)** In Bitbucket, we added a workspace runner using the Linux Shell type so that we can access files stored locally on the server.
>
> **[3:29](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=209)** This was a key point because a Linux Docker runner wouldn't have given us the access we needed.
>
> **[3:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=215)** We also had to configure a repository variable for the AWS region.
>
> **[3:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=220)** And we were provided with a script that gets the file path from parameter store, reads the local file, and then prints the output of that file.
>
> **[3:49](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=229)** The pipeline does the heavy lifting of running that script for us on the self-hosted runner itself.
>
> **[3:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=235)** And then in our output, we see that the workflow ran as expected, collecting the on-premises data.
>
> **[4:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=241)** With all of this in place, I believe we have completed this challenge successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Linux]] (3), [[Bitbucket]] (2), aws (2)
> **CLI Commands:** docker (2), aws (2)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** aws (2)
> **Tools:** bitbucket (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=0)** - Hey, we made it to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=2)** Thanks for joining me to learn about some of the advanced features in Bitbucket pipelines.
>
> **[0:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=7)** As you take your workflows to the next level, remember that this course is here for your reference.
>
> **[0:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=12)** You can revisit the exercise files, retry the challenges, or take the course all over again and please ask questions and share your experience in the Q&A section.
>
> **[0:23](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=23)** It's a great place to build community with other Bitbucket fans.
>
> **[0:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=27)** I had an absolute blast as your instructor, and I'm excited to see the advanced projects you'll create with Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (3), next (1)
> **Tools:** bitbucket (3)
> **Exercise Files:** exercise files (1)
> **Speakers:** - hey (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-bitbucket-pipelines-3925184)

## Skills Covered

- Bitbucket
- Continuous Integration and Continuous Delivery (CI/CD)

## Path Context

### In [[Master Bitbucket]]
← [[Bitbucket Pipelines for CI-CD]] | **3 of 3**

## Appears In

- [[Master Bitbucket]]

## Related Courses

_Courses sharing skills:_

- [[Bitbucket Pipelines for CI-CD]] — Bitbucket, Continuous Integration and Continuous Delivery (CI/CD)
- [[Learning Bitbucket]] — Bitbucket

---

[↑ Back to top](#)