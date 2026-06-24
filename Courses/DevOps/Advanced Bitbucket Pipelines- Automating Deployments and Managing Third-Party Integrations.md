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
  - '[Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)'
prev_courses:
  - '[Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md)'
path_nav: '[{"path":"Master Bitbucket","position":3,"total":3,"prev":"Bitbucket Pipelines for CI-CD","next":null}]'
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

#### [Optimize your CI/CD: Advanced techniques with Bitbucket Pipelines](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimize-your-ci-cd-advanced-techniques-with-bitbucket-pipelines?u=76281980&t=0)** - Hey, I got a question for you. Did you know that mastering advanced CI/CD techniques can drastically optimize your build times and improve your [Software Development](../../Topics/Software%20Development.md) workflows? Without these skills, you might find yourself struggling with inefficient workflows and delayed deployments. Hi, I'm Michael [Jenkins](../../Skills/DevOps/Jenkins.md), a computer engineer with years of experience solving complex CI/CD challenges using [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines. Join me in this course to learn how to reduce build times, harness the power of pipeline components, and deploy self-hosted runners for ultimate control over your build environments. Let's explore Advanced Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **CLI Commands:** cd (2), find (1)
> **Tools:** bitbucket (2)
> **Speakers:** - hey (1)

#### [Bitbucket Pipelines review](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=0)** - [Instructor] Before we get started, let's do a quick review of the main parts of a [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipeline's configuration. Let's start with a configuration file, bitbucket-pipelines.yaml. We place this file at the root of the repository and use it to define workflows for Bitbucket pipelines. The pipeline configuration file must have the pipelines keyword, a trigger to start the pipeline, and a collection of steps to execute tasks. Pipelines keyword marks the start of the configuration. It helps Bitbucket identify the different pipeline setups within your file, whether they're for branches, pull requests, or custom events. Triggers are customizable start conditions for pipelines. You can specify different triggers for specific branches, pull request events, or manual execution. Steps are the building blocks of a pipeline. This is where the workflow runs commands, executes scripts, or any other tasks that you define. Each step must include a script section with at least one command. Some optional but very useful parts of the pipeline configuration include Docker images, stages, and YAML anchors. We can specify a Docker image for the execution environment in the pipeline. Images can be specified globally for all steps, or locally within specific steps,
>
> **[1:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/bitbucket-pipelines-review?u=76281980&t=93)** depending on the needs of the pipeline. For better organization, multiple steps can be grouped into stages. Stages help logically separate tasks like building, testing, and deploying. And to keep pipeline configurations clean and easy to maintain, we can use YAML anchors to define reusable steps. Storing these configuration elements in the bitbucket-pipelines.yaml file allows us to treat pipelines as code. By leveraging triggers, steps, stages, and the other features available, we can craft CI/CD pipelines that fit just about any development workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (5)
> **Tools:** bitbucket (5)
> **CLI Commands:** docker (2), cd (1)
> **File Paths:** bitbucket-pipelines.yaml (2)
> **Env Vars:** yaml (2)
> **Speakers:** - [instructor] (1)


### 1. Pipeline Optimizations

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimizing pipeline performance and reducing build times](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/optimizing-pipeline-performance-and-reducing-build-times?u=76281980&t=0)** - I'll be the first to admit it. Waiting on a software build to finish is no fun. Long build times slow down productivity, and they also use up precious build minutes. Faster pipelines means less waiting, quick feedback cycles, and a more efficient development process. In other words, optimized pipelines can make a real difference in how quickly ideas make it to production. Let's explore four strategies we can use to optimize [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines, configuring maximum runtime, configuring runner sizes, using conditional steps in a pipeline, and caching dependencies. Each of these strategies can significantly improve pipeline performance and contribute to faster, more efficient deployments. Let's get started with the first topic. Configuring maximum runtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** make (2)
> **Tools:** bitbucket (1)
> **Definitions:** in other words (1)
> **Speakers:** - i (1)

#### [Configure maximum runtime](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=0)** - [Instructor] There are plenty of reasons a pipeline can get stuck in an undesirable state. Network timeouts, infinite loops in a deployment script or misconfigurations on the target system are all perfect candidates. Whatever the case, a pipeline that never ends can tie up deployments and waste build minutes. Thankfully, [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines provides a way to handle this proactively. We can use the Max-time option to set a maximum runtime for the entire pipeline, or we can use this same setting for specific steps. Max-time defines the maximum number of minutes a pipeline or step can run. If either runs longer than the max-time limit, the pipeline will be stopped automatically. Let's see how this is applied. I'm logged into my Bitbucket account and I'm viewing a pipeline configuration. At the top of the configuration, I've set max-time to be two minutes for the entire pipeline. There's just one step in this pipeline, a long-running step that we'll use to simulate a network timeout. The step will use the sleep command to stall the pipeline for 240 seconds or 4 minutes. As expected, after running the pipeline, we can see the pipeline fails because it exceeded the 2-minute time limit. Of course, setting max-time is not required for all deployments, but if you know that your workflows have the potential to get stuck, using a time limit can help
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-maximum-runtime?u=76281980&t=94)** keep long-running pipelines in check.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **Tools:** bitbucket (2)
> **Speakers:** - [instructor] (1)

#### [Configure resource allocation](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=0)** - [Instructor] One way we can keep our pipelines optimized is by providing the right amount of resources. Build steps that are memory intensive or require lots of CPU can take much longer to run if those resources aren't available in the build environment and build steps that are storage intensive can fail the entire pipeline if they run out of space. We can use the size option to allocate additional CPU, memory and storage. Size can be configured for an entire pipeline or for a specific step. Now, before you start trying to increase the size of every pipeline or step in your workflow, there are a few things you need to keep in mind. The default or 1x size provides two shared CPUs, four gigabytes of memory and 64 gigabyte volume for local storage. The 2x size provides four shared CPUs and eight gigs of memory, but keeps storage at 64 gigabytes. There are also 4x and 8x size options which provide even more CPU, RAM and storage. However, the 4x and 8x options are only available for [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) accounts using a paid plan. So if you're on the free plan, the 4x and 8x sizes won't be available for you to use. There's also one more very important thing you need to know before increasing pipeline sizes. Any size option larger than 1x
>
> **[1:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=96)** uses additional build minutes. A 2x size uses twice the build minutes. A 4x size uses four times the build minutes and so on. So increasing size can help with optimizing pipelines when resources are constrained, but keep in mind that it comes at the expense of build minutes. So use larger sizes only when it's absolutely necessary for your deployments or workflows. Okay, let's see how we can use size in a pipeline. I'm logged into my Bitbucket account and I'm viewing the pipeline configuration for this demonstration. The configuration starts with a definition for a resource allocation report that we can use to compare CPU, RAM and storage for different sized allocations. In the pipeline section, we have two steps. The first step has the size configured to 1x, which isn't even really needed, because 1x is the default. The second step is configured to use the 2x resource allocation. I've run the pipeline and now I'm viewing the results for the default size. The log shows two CPUs available, almost six gigabytes of RAM and just under 64 gigabytes of disc space. Let's compare this to the step with 2x size. In the 2x or double size report, we have four CPUs, almost 10 gigs of RAM and the same amount of disc space. So the allocations are what we would expect,
>
> **[3:11](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/configure-resource-allocation?u=76281980&t=191)** about two times more than the default with the exception of storage. Let's compare the build minutes. The 1x step ran for three seconds and used three seconds of build time, 2x step ran for four seconds, but used double the amount of time, eight seconds. So just to restate, make sure you're allocating additional CPU, RAM and storage when your pipeline really needs it, otherwise, you might be using up build minutes unnecessarily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **Env Vars:** cpu (5), ram (5)
> **Tools:** bitbucket (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Analogies:** compare this to (1)
> **Speakers:** - [instructor] (1)

#### [Use conditional steps](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=0)** - [Instructor] Some repositories you'll work with will contain the code for multiple applications or projects. This type of repo is referred to as a monorepo. Monorepos have the advantage of keeping all the code together in one place, which can make it easier to manage shared dependencies and increased collaboration. However, when it comes to [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and deployment, monorepos present the challenge of developing efficient workflows that support multiple code bases. For example, changing the code in one project in the repo may trigger pipeline runs on other projects where the code hasn't changed. This can use up build minutes and cause unnecessarily long pipeline runs. We can optimize monorepo pipelines by only running build steps when specific code has changed. [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) allows us to use a condition directive to run steps only if certain files have changed. We can apply conditions and change sets at the stage and step levels. Using glob patterns, we can target individual files or complete directories. If the event that triggered the pipeline includes changes to the indicated files or files inside the indicated directory, then that stage or step will be run. Otherwise, it gets skipped completely. Let's consider this Monorepo. It's a single repository with two projects, one with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code and another with Ruby Code. Both projects have their own test suites.
>
> **[1:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=96)** A typical approach to testing would run a pipeline for both projects on every push to the repo, but this can run into the problem of testing code that hasn't changed, causing long running pipelines. This is the perfect case for a condition that specifies the files for each project. That way, isolated changes only run tests in the project that was updated. Let's see how this plays out in the Bitbucket interface. I'm logged into my Bitbucket account and I've created a new repository for this demonstration. I've added the exercise files for this lesson, which includes this pipeline without conditions and code for two sub-projects, one, using Python and the other, using Ruby. The pipeline is configured to run tests for both the Python and Ruby projects. This gives us a runtime of about one minute. Now let's see how we can optimize this Python with conditions. In this updated workflow, I've added conditions to both steps. If code under either the Python or Ruby directories changes, then the test for that project will run. I've also added a path for the shared directory. We need to consider the case where some code affects both projects. If the shared code changes, we'll run tests for Python and Ruby. After adding this configuration with no code changes, the pipeline skips both steps. This makes sense because neither project was changed
>
> **[3:12](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-conditional-steps?u=76281980&t=192)** and no shared code was added or modified. In this pipeline run, I've made a change to the Python code. This triggered the pipeline, but only the test for Python were run giving a total runtime of 16 seconds. With these conditions in place, we'll save build time down the road depending on which project is being actively developed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (8), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **CLI Commands:** python (8), ruby (5), make (1)
> **Tools:** bitbucket (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cache dependencies](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=0)** - [Instructor] Most [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) use dependencies to add functionality. These dependencies are downloaded from remote locations. For example, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) projects might use the [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) library for [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), and [JavaScript](../../Skills/Software%20Development/JavaScript.md) projects might use [React](../../Skills/Web%20Development/React.js.md) for building user interfaces. On our local machines, we download these dependencies once and reuse them, but in pipelines, each run starts from scratch, meaning dependencies are downloaded every time. This can make pipelines slower, especially for projects with many dependencies or dependencies that need to be compiled locally. To speed things up, we can cache dependencies. [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) provides predefined caches for several popular programming languages and development tools. Just adding the caches configuration to the steps that can use them can easily shorten pipeline runs. We can also define custom caches. With custom caches, we can specify the file system path where the dependencies are stored. We can also specify files that can be used as keys to determine when the cache should be recreated. If a key file changes, the cache is cleared and rebuilt. We can also manually clear the cache from the Bitbucket web interface. Let's take a look at some examples using caches. I'm logged into my Bitbucket account and I've created a new repository for this lesson.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=94)** I've added the exercise files and I'm viewing the pipeline configuration. This repo has Python and Ruby components, so I'm using two cache definitions. On line three of the file, I've defined a custom cache for Ruby with a path to the location where dependencies will be installed. The cache creation and refresh will be triggered off changes to the Gemfile.lock file. If we add new or updated libraries, then the cache will be recreated. Otherwise, we can reuse it for future pipeline runs. Further down on line 20, I'm using the predefined cache for Python. We don't have to specify a path or any key files for this cache since Bitbucket handles all of that for us. This is the first time the pipeline has run, and we can see that the Ruby step takes 34 seconds to run. If we look in the build setup step, it shows how the pipeline tried to download the cache, but it wasn't found. This makes sense because this is the first pipeline run. And if we scroll down and look at the build tear down, it shows how a new cache is being created. I've made a small change to the code and rerun the pipeline. Right away we can see some improvements in the Ruby step's runtime. It only took seven seconds with the cache in place. Taking a look at the build setup again, we can see that the cache was indeed downloaded this time.
>
> **[3:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/cache-dependencies?u=76281980&t=190)** And this is the real benefit of caching since the cache download took much less time than downloading all the dependencies needed by that step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Software Projects](../../Skills/Software%20Development/Software%20Projects.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **CLI Commands:** ruby (4), python (3), make (1)
> **Tools:** bitbucket (4)
> **Exercise Files:** exercise files (1), download the (1)
> **Prerequisites:** setup (2)
> **File Paths:** gemfile.lock (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)

#### [Solution: Optimize a pipeline](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=0)** - [Instructor] I love the sound of that music. I hope you had a good time with this challenge. Let's take a look at the solution. Starting with the original pipeline configuration. We're using a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) image, and this pipeline has one step. The script has two commands. It installs some requirements, and then it runs the cluster analysis script. Let's take a look at a run of this pipeline. Out of the gate, this pipeline run takes one minute and 37 seconds. The longest command in this step was the PIP install step, which took over a minute and a half in this run. So that's one of the things that we're going to try to optimize as we make changes to the pipeline. We can also take a look at the cluster analysis script and see that the dataset was created. In other words, the script had to create its own data instead of using data that was already there. Depending on how much data the script needs to create, that could take some time. So that's another point that we're trying to optimize. Now, it doesn't look like this script ran more than 10 minutes, but we also have to keep in mind that something that we need to account for as well. Let's take a look at the changes I made to meet the requirements of this challenge. Starting off, I added a max time option for 10. By setting the max time option for 10, if this script runs any longer than 10 minutes,
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=94)** then it's automatically going to be stopped. This will account for the script running away unnecessarily and using up build minutes. I also added a custom cache for the data directory. This is where the script is reading its data from. If the data file is present, then the script will use it. Otherwise it will generate data, which could take some time. So in this case, we're going to store any data that's present, so it can be reused. I also added a cache for pip. This is the default cache that [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines makes available for us to use. So I'm just taking advantage of that. I'm also calling my custom cache so that when the script writes data there, any files that are written will be used and then stored away so that they can be reused on the next pipeline run. I also added a condition for a change set. In this case, if the cluster analysis script doesn't change, then this particular step won't be run at all. This is like the ultimate optimization to prevent build minutes from being used unnecessarily, because if we haven't changed this particular file, then we don't need to run this pipeline. Let's see how these changes affected a run of this pipeline. This pipeline run is from the push where I modify the pipeline configuration. This clearly shows that our change set worked because the data analysis step wasn't run.
>
> **[3:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-optimize-a-pipeline?u=76281980&t=193)** So zero build minutes were used for this particular push to the repo, which is exactly what the data analysis team was hoping for. I've run the pipeline a couple times after modifying the script. So the caches are created and used, and the first thing that we can check to identify that the caches were actually used is the build setup portion of the pipeline. In this part of the log, we can see that the caches were indeed downloaded. Then in the installation script, we can see that PIP is using the cached versions instead of downloading everything. And finally, if we go down here to the cluster analysis, we can see that the script has some logic to check for a data file. This time, we see that the script says, Hey, the dataset is there. I'm just going to use it and run with it, and it does its thing and generates the analysis report. Okay, let's review. In the pipeline configuration, I added an option that prevents the pipeline from running for more than 10 minutes. I added a custom cache for the data directory and also used the default cache for PIP. Then I added a change set, which only runs the analysis step if there are changes to the cluster analysis script. So with these changes in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** pip (4), python (1), make (1)
> **Env Vars:** pip (3)
> **Prerequisites:** install (1), setup (1)
> **Tools:** bitbucket (1)
> **Definitions:** in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Using Pipes in Pipelines

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting to know pipes](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=0)** - In this chapter, we'll ramp up with one of [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipeline's most powerful features, pipes. Pipes are prepackaged commands that simplify complex tasks in your CI/CD pipelines. We can use pipes to encapsulate complex task into portable configuration elements ready to be added to a pipeline script. Pipes are built using docker containers. Each pipe is essentially a lightweight, self-contained environment that comes pre-configured with all the code needed to perform a specific task. With everything packaged inside the container, pipes allow you to easily reuse complex commands across different Bitbucket workspaces, projects, and repositories. Pipes are parameterized, which means you can customize their behavior by passing in repository variables or predefined pipeline variables as input. Using this approach, we can configure pipes to meet the specific needs of different pipelines. Bitbucket offers dozens of pipes for popular tools and platforms, allowing pipelines to integrate with cloud platforms, collaboration tools, and many other solutions. Some pipes that integrate with third party tools can provide feedback directly in the Bitbucket interface. Based on the results of the pipeline runs, these pipes can write reports that can be viewed in the same webpage where the pipeline was run. This helps developers stay in the context of their application and iterate quickly using the feedback from pipes.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/getting-to-know-pipes?u=76281980&t=94)** In the next lesson, we'll use our first pipe to demonstrate just how easy it is to integrate these powerful tools into our pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (4)
> **Tools:** bitbucket (4)
> **CLI Commands:** cd (1), docker (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### [Use a pipe in a pipeline configuration](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=0)** - [Instructor] Let's use a pipe in a pipeline. I've added the exercise files for this lesson to a new repo. The main file in this repo is a cloud formation template. We'll be using this template to deploy resources to AWS. This repo also contains a pipeline configuration. We'll use this configuration to run a pipe that lints files used to deploy [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). The scanner checks for misconfigurations, potential security vulnerabilities, best practices for the target platform, and much more. When the scan completes, we'll be able to see a summary of all the findings as a report, right in the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) interface. Let's see how that works. I'm viewing a run of a pipeline that uses a pipe to scan the cloud formation template. In the log output, we can see how the pipe starts with a docker container run command. This is key since the pipe operates as a docker container. Followed by the run command are parameters that mount the pipeline workspace into the container and pass pipeline variables into the pipe's execution environment. This is also important since it allows the pipe to interact with the files and pipeline variables defined for the repository. We could also review the logs from the pipe, but we can take advantage of a report that was written to the Bitbucket interface for this pipeline run.
>
> **[1:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-in-a-pipeline-configuration?u=76281980&t=95)** Instead of parsing through logs to find the details we need, this pipe has created a report with all the details nicely summarized. This way we can easily find the problem areas that we need to focus on in our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **CLI Commands:** docker (2), find (2), aws (1)
> **Exercise Files:** template (3), exercise files (1)
> **Tools:** bitbucket (2)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Use a pipe to deploy code to AWS Lambda](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=0)** - [Instructor] Let's use a pipe to deploy code to AWS Lambda. Our pipeline will consist of three stages. The first stage integrates any new or updated code into the code base, using an integration step. We'll run linters and run the application Test suite to make sure everything is valid. The second stage builds the Lambda package by zipping up the required files into an archive that we can deploy. And finally, the last stage does the deployment. This is the stage where we'll be using a pipe. We could use the AWS command line interface for the deployment, but we can basically replicate these steps using a pipe. The pipe makes it easy to encapsulate the build steps into a package that's portable, tested, and has best practices in mind. Let's take a closer look at getting this pipe in place. To set the stage for our pipe, we'll create deployment variables for the staging and production environments. This allows us to use the same variable names, but with values specific to the environment being deployed. We'll also create repository variables for our AWS credentials. Creating these at the repo level is the best approach, so they can be used across both environments. To complete the parameters for the pipe, we pass in the function name, a function configuration, and the name of the zip file
>
> **[1:36](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-pipe-to-deploy-code-to-aws-lambda?u=76281980&t=96)** that contains the function code. The command parameter tells the pipe what sort of deployment this is, and the wait parameter keeps the pipeline from going on to the next command until the deployment is complete. Okay, let's put this pipe to work. I've added the exercise files for this lesson to a new repository, configured the repository and deployment variables, and I've run the pipeline. Let's take a closer look at the output from the pipe. The output starts on line one with a call to docker. This starts the pipes container. The following lines show the volumes and environment variables that get passed to the pipe. This connection is key because it allows the pipe's isolated environment to interact with our code and repository variables. Specifically, lines 37 through 39 show our AWS credentials being passed in so, the pipe can authenticate with AWS and access the deployment target in AWS. And the last lines of the output from the pipe give us some insight into the pipe's operation. All of this info is great, but honestly, that last line is the most important line of all.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (6), make (1), docker (1)
> **Env Vars:** aws (6)
> **Exercise Files:** zip file (1), exercise files (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Use pipes in a pipeline](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=0)** - [Instructor] Yes, that groovy music means it's time to discuss the solution for this challenge, so let's jump right in. I added the Exercise Files to a new repo, and then I created an access token named [Statistics](../../Skills/Data%20Science/Statistics.md). This token gives permission to read pipelines and write to the Repository Downloads page. I stored this token in a secure repository variable because this is a sensitive value. It's pretty much like a password that we can use to access the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) API from a pipeline, so we need to protect it. Now let's check out the pipeline configuration. To start, I'm exporting a variable that uses the file name specified in the challenge.
>
> **[0:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=52)** That gets passed to the build-statistics pipe along with the variable holding the STATISTICS_ACCESS_TOKEN. These same variables are passed as parameters to the upload pipe. Now let's look at a run of this pipeline configuration. Let's start with the build-statistics pipe. It starts with a docker run command and then generates the statistics report.
>
> **[1:28](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=88)** The pipe also generates a file, so once that file is saved, we can upload it using the upload pipe.
>
> **[1:40](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=100)** In the output for the upload pipe, we see the file that was successfully uploaded, and we get a link that takes us directly to the Downloads page.
>
> **[1:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-use-pipes-in-a-pipeline?u=76281980&t=115)** Let's follow that link. On the Downloads page. there's the build-statistics file. Okay, let's walk through the steps that I used to solve this challenge. I created a repository token, which had the correct permissions to read pipelines and also write back to the Repository Downloads page. Once that was in place, I stored that token in a secure repository variable so it was accessible from the pipeline. With that in place, I updated the pipeline with a build-statistics pipe and the upload file pipe. Both of these pipes were configured to use the required file name. Once that was in place, the report was generated, and the file was placed on the Downloads page. So I'm confident in saying that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (6), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Env Vars:** api (1), statistics_access_token (1)
> **CLI Commands:** docker (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Create Custom Pipes

[↑ Back to Table of Contents](#table-of-contents)

#### [When to use custom pipes](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=0)** - Pipes are portable, reusable packages that we can use in our [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines. There are plenty of pipes available, but there are also plenty of situations where developing our own pipe might be a better solution. If you're developing pipelines that perform the same complex task in several steps, or across multiple repositories, a custom pipe can make pipeline maintenance and updates much easier. If you're a vendor providing a service to other developers, creating pipelines, you can create a pipe that makes it easier to access your software or integrate with your service. Or you might need to provide an advanced pipeline solution that requires a complex environment or has specific dependencies. In these cases, a custom pipe might be your pipeline superpower. Before you create a pipe, you'll want to consider creating a simple pipe or a complete pipe. A simple pipe is perfect for your own personal use, or perhaps within a team. You can create a simple pipe with just a few things, a script to perform the task, a dockerfile to define the runtime environment, and a way to deploy the container image to Docker Hub, or another publicly available container registry. Complete pipes are designed for public distribution across wide audiences. In addition to the requirements of a simple pipe, a complete pipe is required to have a few more things. You'll also need a [Metadata](../../Skills/Web%20Development/Metadata.md) file to define inputs and outputs, a README file for documentation,
>
> **[1:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-custom-pipes?u=76281980&t=95)** and a test suite to make sure the pipe is working as intended. I should add that only complete pipes can be published to the [Atlassian](../../Glossary/Service/Atlassian.md) marketplace. To help us get started, Atlassian provides tools that can speed up our pipeline development. This includes a command line tool that uses input to generate the project structure for a pipe, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and Bash libraries with classes and functions we can use to interact with the pipeline's environment, and plenty of example pipes that we can use for inspiration and as references while we develop pipes of our own. Whether you need a quick solution for your team, or a polished tool for the entire community, creating a custom pipe can be an excellent addition to your automation toolbox. So, without any more delay, let's make a custom pipe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Atlassian](../../Glossary/Service/Atlassian.md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (3), docker (1), python (1)
> **Tools:** bitbucket (1), command line (1), bash (1)
> **Env Vars:** readme (1)
> **Prerequisites:** required to (1)
> **Speakers:** - pipes (1)

#### [Develop a custom pipe](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=0)** - [Instructor] As I start creating a new pipe, I've cloned a new repo to my local system and created a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) virtual environment. First, I'll install the Yeoman Generator tool and the generator for [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipes.
>
> **[0:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=25)** Now I can use the yo command to start the pipe generator.
>
> **[0:37](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=37)** This starts a wizard with prompts for the type of pipe I'm creating and other details. Even if this is your first pipe, I highly recommend using one of the advanced templates. The simple templates are great to get started, but the advanced templates will keep you on a path with best practices for pipe development. I'll be using the advanced Python template. The wizard will prompt me for details so I can fill in the files created by the generator. Of course, your responses will be specific to you, but there's one thing I want to point out. When the wizard asks for your account, what it's really asking for is the workspace where the repository is created. If you enter your account name, the links created by the generator won't work like you expect them to. If you wanted to know the history on this, check out the shenanigans in the exercise files. With all my details entered, the generator, creates all the files I need to get this pipe going, and this is really one of the main reasons to use one of the advanced templates. Even if we're creating a simple pipe, it's a good practice to include a README file, a test suite, and, of course, a pipeline to run our tests and deployments. Before we do all that, we have to add our secret ingredients to make this pipe our own.
>
> **[2:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=126)** I'm using Vim to edit this file in my terminal. Feel free to use your own IDE as you like. On the very first line of the script, there's an import for the Bitbucket Pipes Toolkit.
>
> **[2:24](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=144)** This is a library of functions we can use to tap into the pipe's environment. Out of the box, we're set up to connect to the pipeline environment and write to the pipeline logs. The schema for the pipe defines the parameters and environment variables that our script will use, and the class is where we can add our own functionality. I'll change the name from DemoPipe to AwesomePipe,
>
> **[3:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=180)** and I'll change the output just a little bit to show that this pipe is awesome.
>
> **[3:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=207)** Okay, that's the start of my custom pipe. I'll save these changes and go back to the command line. Now I need to make just a couple more changes. The pipeline configuration refers to a master branch. I'm using main for my production branch, so I'll update the configuration to match that.
>
> **[4:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=241)** And now I'll save these changes. And there's one more thing. The pipeline uses a release pipe that requires we have semantic versioning in place. I'll install the SemVersioner app using pip, and then use it to add an entry for the next release.
>
> **[4:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=287)** Now I'll push these changes to the repo.
>
> **[5:16](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=316)** Perfect. Now let's take a look at the repo in the web interface. Now that we pushed the files for our custom pipe, our repo is decked out with everything it needs for the [Atlassian](../../Glossary/Service/Atlassian.md) Marketplace.
>
> **[5:35](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/develop-a-custom-pipe?u=76281980&t=335)** Most importantly, we have a README file showing how to fit the pipe in a pipeline, the variables that are defined, and we even get a few examples showing how to call the pipe. This is great, but I don't want to get ahead of myself. This pipe still needs to be tested and deployed. We'll go over tests in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Atlassian](../../Glossary/Service/Atlassian.md) (1)
> **CLI Commands:** python (2), make (2), pip (1)
> **Tools:** bitbucket (2), vim (1), terminal (1), command line (1)
> **Env Vars:** readme (2), ide (1)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** is a  (1), refers to (1)

#### [Test a custom pipe](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=0)** - [Instructor] I've used the [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipe Generator to create a custom pipe, and now I'm viewing the test suite that was generated. Lines four through 22 show how the test suite uses Docker to build the pipe locally and run tests. The test suite creates a Docker file, so I don't have to worry about making that. The tests are defined on lines 24 and 35.
>
> **[0:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=33)** These tests are set up to work with a generated code out of the box. Of course, if I add additional functions to the code, I would need to make changes here to test those features. These tests should work for me though, so let's go to the command line. Before I test, I need to confirm I have Pytest and Docker installed. With those in place, I can run the test suite.
>
> **[1:02](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/test-a-custom-pipe?u=76281980&t=62)** I'll use the verbose flag with Pytest so we get a bit more output. Hey, the test passed, that means I'm one step closer to getting my custom pipe working in a pipeline. In the next lesson, we'll cover the steps needed to get the custom pipe deployed to Docker Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** docker (4), make (1)
> **Tools:** bitbucket (1), command line (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Deploy a custom pipe to a container registry](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=0)** - [Instructor] At this point, all the code is in place for my custom pipe. I have the main script for the pipe and a test suite to make sure the pipe works as expected. Now I'm ready to deploy the pipe to Docker Hub so I can use it in a pipeline. Before I do that though, I need to configure a couple things. First, I need to go to the repository settings page and toggle the switch that enables pipelines.
>
> **[0:32](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=32)** I'll be merging in the pipeline configuration a little later on, so I don't need to configure pipelines right now. Now that pipelines are enabled, I can start adding the variables that the pipeline will need to push the pipe image into the Docker Hub container registry. Let's start in the Docker Hub interface. I'm logged into my Docker Hub account and I've created a new public repo. I'll be using this repo to store the image for the pipe. I need to create a token that the pipeline can use to push the image. I'll select my account icon, and then I'll select account settings.
>
> **[1:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=85)** Under security, I'll select Personal access [Tokens](../../Skills/Web%20Development/Tokens.md). On this page, I can create a token that [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) can use to access my Docker Hub account. The token is like a password, but it's a little easier to manage. I'm prompted to set the token description, expiration date, and set the access permissions. I'll enter a memorable description and set the token to expire in 30 days.
>
> **[2:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=121)** The pipeline will need right permission to push the image, so I'll set that access level.
>
> **[2:13](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=133)** Now I can generate the token. After the token is created, we have to capture the details right away. I'll select the copy button next to the token.
>
> **[2:33](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=153)** Now, I'll save this token as a repository variable. Right away I'll paste in the token value and then enter the variable name. The pipeline will be looking for the variable named registry_password, so I'll enter that and select add.
>
> **[3:03](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=183)** The other variable that the pipeline needs is registry_username, so I'll add that variable as well.
>
> **[3:15](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=195)** Now that these variables are in place, I can merge the pipe code into the main branch and run the pipeline to test, build and deploy the pipeline image. Everything is already set to merge the feature branch into the main branch so I'll select create pull request, and right away I'll approve and merge this PR.
>
> **[3:50](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/deploy-a-custom-pipe-to-a-container-registry?u=76281980&t=230)** Now let's go to the pipelines tab, and I'll refresh this screen to see the pipeline that's already in progress. Let's click into that and take a look at the logs. Excellent, the pipeline completed successfully, which means the pipe's container image was pushed to Docker Hub. Let's go over there and confirm. Back on the Docker Hub page, I'll refresh the page and select tags. Excellent. Here's the image as expected. Now that we have a pipe in place, it only seems fitting to add it to a pipeline. We'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** docker (7), make (1)
> **UI Navigation:** go to (2), toggle (1), select the (1)
> **Code Identifiers:** registry_password (1), registry_username (1)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Speakers:** - [instructor] (1)

#### [Use a custom pipe in a pipeline](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-a-custom-pipe-in-a-pipeline?u=76281980&t=0)** - [Instructor] I'm all set to try out my custom pipe. I've generated and tested the code and deployed it to Docker hub. Now, comes the easy part, using it in a pipeline. I've created a new repository and added a pipeline configuration with just one step to call our pipe. The name variable is required, so I've added it here and I'm passing in the variable holding the username of the repo owner. Okay, let's see a run of this pipeline. First of all, I'm totally happy that the pipeline completed without error. That's a good sign that the pipe was packaged and retrieved properly. Let's check out the log. The log shows all the details passed to the pipe with the Docker run command. And if I scroll all the way down to the end, I can see the output I'm looking for. This pipe is working exactly like I planned for it to and yes, that makes me feel awesome.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2)
> **Speakers:** - [instructor] (1)

#### [Solution: Develop a custom pipe](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=0)** - [Instructor] I tell you that music is like a prelude to us discussing another solution. It just gets better and better. This time, we're helping a team develop a custom pipe. We can start with the output from the test suite. Everything is passing, so we know we're starting from a good state. Taking a look at the code that's provided, it looks like the team started out with a [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipe generator. The script is passed in a name variable and the value for that variable gets printed. Then the script prints a message saying that the function ran successfully. The test suite runs two tests, one without parameters, and another that confirms that the value passed in gets reported properly. This is all with the name parameter, so we need to explore the code and make changes that replace name with customer ID. In this view, I'm showing the changes that I made to the pipe script. I changed every instance of name to customer_id.
>
> **[1:20](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=80)** I also changed the success message to echo that the customer ID was processed successfully. Now, what I like to do after I make a change like this is to run the test suite again, which should cause the test to fail. If I go to the pipeline for this change, I do get a failure, but this is a failure that I would expect. So this is a good thing. Both these tests failed because the tests are still looking for name and I've updated the pipe to use customer_id. So the next step is to update the tests to match the updated code. I've changed name to customer_id for both tests, and I've passed a more sensible value for customer_id instead of hello world. Now let's check out the test suite. Hey, this pipeline shows the tests are passing, so now our code is correct and the tests validate the correctness of our code. Let's review this solution. The Alpha team provided code for a custom pipe along with a test suite. I updated the code to implement the functionality that the Alpha team was looking for, specifically replacing name with customer_id and updating the success message. And then I updated the test suite to make sure the changes were valid. Running those tests, I got the correct output. So with all these changes in place, I would say
>
> **[2:55](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-develop-a-custom-pipe?u=76281980&t=175)** that this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **Code Identifiers:** customer_id (5)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Tools:** bitbucket (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Self-Hosted Runners

[↑ Back to Table of Contents](#table-of-contents)

#### [When to use self-hosted runners](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=0)** - When we use [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Pipelines, we can rely on [Atlassian](../../Glossary/Service/Atlassian.md)'s cloud-hosted runners for convenience and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). But there are times when using our own runners might be a better fit. Self-hosting runners can provide significant benefits, but self-hosting also comes with some challenges. Let's take a look at both sides of hosting our own runners for Bitbucket Pipelines. Self-hosted runners offer ultimate control over the resources behind your CI/CD pipelines. For CPU or memory intensive builds, you can configure servers that provide all the resources needed. You can also add more storage for builds that create large artifacts. And if your pipeline needs specialized tools, you can tailor build environments that can be reused with minimal setup. Self-hosted runners can also help with security and compliance. Runners can be configured to interact with resources inside company networks, which might be difficult to do over the public internet. Also, sensitive data or proprietary artifacts can be kept on private infrastructure to help meet regulatory requirements like GDPR or HIPAA. From a cost perspective, self-hosting can be a smart move. When pipelines run on your infrastructure, build minutes are not charged. This is great if you have long running or frequent jobs. Self-hosted runners can also minimize data transfer costs by keeping logs, artifacts,
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=94)** and dependencies within your network. But self-hosting isn't all butterflies and rainbows. We also have to consider the challenges of managing our own pipeline resources. Managing our own runners will require some maintenance. You'll need to deploy the servers, manage the operating system and software, and rarely apply security patches. Scalability can also be a concern if your workload becomes more than your runners can handle. And while self-hosting optimizes cost, in some cases, it's important to weigh the total cost of ownership, including any additional operating expenses. And last but not least, we have to consider the security concerns that come with self-hosting. So due to the persistent nature of self-hosted runners, they're perfect targets for bad actors that want to create persistent threats along with all the security measures you'd apply to other resources in your data center. Self-hosted runners should never be used with public repositories. Now to limit access to known and trusted parties, self-hosted runners should only be used with private repos. So with all this in mind, when is self-hosting a good choice? Here are a few reasons that you might be a good candidate for self-hosting. You frequently run pipelines that are limited by the resources available on the Atlassian cloud. You have access to resources that you can allocate to use for runners. You need to integrate with sensitive resources like protected data, internal networks,
>
> **[3:08](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/when-to-use-self-hosted-runners?u=76281980&t=188)** or proprietary systems that can't be exposed to the public internet. You understand the security concerns with self-hosted runners, and you're ready to keep your resources safe. Now that we have some background on when to host our own runners, let's discuss how we can deploy them and what it takes to use them in our pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Atlassian](../../Glossary/Service/Atlassian.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2)
> **Env Vars:** cpu (1), gdpr (1), hipaa (1)
> **Prerequisites:** configure (1), setup (1), you'll need (1)
> **Tools:** bitbucket (2)
> **CLI Commands:** cd (1)
> **Speakers:** - when (1)

#### [Self-hosted runner configurations](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=0)** - [Instructor] We have a few options for the types of runners we can consider for self-hosting. We can choose from [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Docker, Linux Shell, [Windows](../../Glossary/Service/Windows.md), and macOS runners. Even though we can use different operating systems, there are a few common requirements. The system needs to be running a 64-bit version of the operating system, and have at least eight gigs of RAM available. We'll need a recent version of the Open [Java](../../Skills/Software%20Development/Java.md) Development Kit. And last but not least, [Git](../../Skills/Software%20Development/Git.md) needs to be installed as well. When we create a runner, we can add labels. Labels help schedule the right runner for pipelines just before they start. If a runner has a specific operating system or pre-installed tools, we can assign a label to identify those features and target that runner from pipelines as needed. We'll be focusing on Linux Docker, and Linux Shell runners. These runner types provide a range of capabilities that can benefit many types of pipelines and CI/CD scenarios. Linux Docker runners run steps in isolated environments based on container images, much like the runners we use on [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) Cloud. This is perfect for builds that need a clean workspace for each run of the pipeline. However, steps that use Docker runners can't access file systems on the host runner. Linux Shell runners use persistent environments that don't change between steps.
>
> **[1:34](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/self-hosted-runner-configurations?u=76281980&t=94)** They can also access files and tools available on the host system. This can help optimize build by having tools and dependencies already installed, so pipelines don't waste time setting up things on each run. In the next lesson, we'll deploy a server that we can use to explore runners with both of these options. But before we move on, I highly suggest you check out the exercise files for this lesson for more details on these and the other types of runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (6), [Windows](../../Glossary/Service/Windows.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (1)
> **CLI Commands:** docker (4), git (1), cd (1)
> **Code Identifiers:** macos (1)
> **Env Vars:** ram (1)
> **Cross-References:** in the next (1)
> **Tools:** bitbucket (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Compare repository and workspace runners](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/compare-repository-and-workspace-runners?u=76281980&t=0)** - [Instructor] Self-hosted runners can be installed for repositories or workspaces. Let's compare these two approaches. If a runner is added to a repository, it's only available for pipelines in that repo. This can be great for a busy, active project that needs dedicated resources. If we install runners at the workspace level, all repositories in that workspace can use the runners for their pipelines. This provides a better opportunity to increase resource utilization across multiple projects. [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Shell, [Windows](../../Glossary/Service/Windows.md), and MacOS runners can be well-suited for repositories that need custom build environments. Since only one repo is using the runner, tools, dependencies, and [Hardware](../../Topics/Hardware.md) can be dialed in and kept consistent. Workspace runners provide the best opportunity for Linux Docker runners. Docker runners use a new environment for each pipeline run, so there's no concern about tools and dependencies from one project conflicting with the requirements of another project. Okay, with all that covered, let's deploy a server that we can use for our runners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** docker (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Install runners in a workspace](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=1)** - [Instructor] I've deployed an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, and I'm connected to it from the AWS web interface. I've elevated my session to the root user account, and I've run version checks for [Java](../../Skills/Software%20Development/Java.md), [Git](../../Skills/Software%20Development/Git.md), and Docker just to make sure everything is ready.
>
> **[0:27](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=27)** Now I'm on the Settings page for my [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) workspace, viewing the Workspace Runners tab. Since there are no runners installed yet, I'm invited to add one. So I'll select the Add Runner button. This starts the installation wizard, and I'm prompted to configure the runner. Under System and Architecture, I can select the type of runner I'm installing, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Docker, [Windows](../../Glossary/Service/Windows.md), MacOS, and so on. I'll select Linux Docker. I'll also enter Linux Docker for the name.
>
> **[1:10](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=70)** I also have the option to add labels. The default labels, self-hosted and Linux, are applied, but I'll add Docker as well.
>
> **[1:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=85)** Now I'll go to the next page in the wizard. This page provides a Docker command to start the runner. The command includes credentials that the runner will use to communicate with Bitbucket, so, please, treat this command with the same level of security you would use for a username and password. Selecting the stack squares icon copies the command to my clipboard. Now I'll switch back to the terminal. And I'll paste the command here. Before running the command, I'll modify it slightly.
>
> **[2:19](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=139)** The -it flag makes the container run interactively, but I'll replace it with --detach to run the container in the background. This way, I can start the runner and not have to open another terminal to run additional commands. Now I can use docker ps to get the container ID.
>
> **[2:47](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=167)** I'll select and copy the container ID to the clipboard and then use it to see the container's logs using the docker logs command.
>
> **[3:01](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=181)** Great, the logs confirm that the runner is online. Back in Bitbucket, I'll select Next. The last screen in the wizard gives us an example showing us how to use the runner in a pipeline step and the labels for the runner we just deployed. Now let's install a Linux Shell runner. I'll select Add Runner again and choose Linux Shell for the system type.
>
> **[3:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=218)** This runner will be labeled Amazon Linux 2023 to indicate the operating system.
>
> **[3:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=232)** And if you guessed the name for this runner, you're right, I'll call it Linux Shell. And now I'll select Next. And just like we saw before, the wizard provides commands we can use to install and start the runner. I'll be using these commands to create two scripts, one for installation and another for starting the runner. This approach keeps the process reusable and clean in case we need to repeat these steps. And I'll say it again. The start command contains credentials, so please keep these values private and safely secured, just like a username and password. Instead of using the copy icon this time, I'll select and copy both of the install commands to the clipboard.
>
> **[4:51](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=291)** Back in the terminal, I'll create a file named install.sh. And I'll paste the commands here and then save the file.
>
> **[5:09](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=309)** Now I'll do the same for the start command. Back in Bitbucket, I'll copy the two start commands, and go back to the terminal. And I'll create a file named run.sh and paste in the run commands.
>
> **[5:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=338)** Now I need to change the mode for these files to make them executable.
>
> **[5:52](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=352)** Now let's run the install. To start the runner, I'll use the command nohup, followed by run.sh, and then commands to send the script to the background while directing the logs to an output file.
>
> **[6:18](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=378)** I'll confirm the script is running with the jobs command. And then I'll check the logs with the tail command. Great, the logs are looking good. Let's wrap things up in Bitbucket. Back in Bitbucket, I'll select Next and then Finish.
>
> **[6:44](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/install-runners-in-a-workspace?u=76281980&t=404)** Now that both runners are online, we can use them in pipelines. Let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (8), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (6), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** docker (8), make (2), aws (1), git (1)
> **Tools:** bitbucket (6), terminal (4)
> **Prerequisites:** install (5), configure (1)
> **File Paths:** run.sh (2), install.sh (1)
> **UI Navigation:** select the (2), go to (1)
> **Env Vars:** ec2 (1), aws (1)
> **Cross-References:** go back to (1), in the next (1)

#### [Use self-hosted runners in a pipeline](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=6)** - [Instructor] Let's use self-hosted runners in a pipeline. I've got two runners ready to go, a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) shell runner and a Linux docker runner. I've also created a new repo and added the exercise files for this lesson. The pipeline configuration sets up a script definition that we can use to explore the two different runners. The script runs a series of commands to inspect the environment, providing system details, installed tools, and network information. Let's see a run of this pipeline. The first thing that stands out is the runner output at the beginning of the log. This provides details on the runner that was scheduled for this step of the pipeline. Since I only have one Linux shell runner, it's no surprise that the labels up. The same will be true for the docker runner. But if we had dozens or even hundreds of runners, this output would be helpful to track down a specific runner to debug an issue, analyze performance, or investigate resource usage. I encourage you to review the output of the commands in both steps and compare the runner environments. Take a look at the architecture, the CPU types and so on.
>
> **[1:45](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/use-self-hosted-runners-in-a-pipeline?u=76281980&t=105)** While you review the differences, think about why these differences exist and how they might impact things like pipeline execution, resource allocation, or troubleshooting, when either type of runner is used in a pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3)
> **CLI Commands:** docker (2)
> **Env Vars:** cpu (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft upbeat music) (1)

#### [Solution: Deploy a self-hosted runner](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=0)** - [Instructor] You know what that music means. It's time to sit back, relax, and discuss the solution to another challenge. First things first, I've deployed the CloudFormation template. The resources include the data file parameter and parameter store, the profile and role that the server can assume, and of course the server itself. Now with that in place, I can go to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) and get the commands needed to install the self-hosted runner. I created these runners at the workspace level. You could also create them at the repository level. The key to solving this challenge is selecting the correct type of runner. Specifically, we had to select a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Shell runner so that we can access resources on the runner itself.
>
> **[1:07](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=67)** This goes back to previous lessons where we learned that Docker runners, which are totally self-contained and do everything they need to do within the context of that runner, cannot access resources on the host where that container is running, so that would not have been the correct choice to solve this challenge. Over on the server, I created an install script and a run script.
>
> **[1:38](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=98)** I use these to install the runner software and then start the runner as a background process. Back in the repository, I created a variable for the AWS region. My resources are deployed in the us-west-2 region, so I added that for this variable. This isn't a secret value, so it's okay if this variable isn't protected. This is the script that the pipeline runs to read the parameter from parameter store. Then, it reads the file on the server. Once it reads the file, it prints the contents.
>
> **[2:25](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=145)** We're also provided with a pipeline. The first step installs the dependencies and sets up the environment. The second step collects some details about the runner itself. And then the last step runs the script that connects to the parameter store and reads the data file. Let's see a run of this pipeline. I'll jump straight to the step that reads the data file. This script does its thing, and sure enough, we get a message showing the on-premises data. Before we totally declare success, let's do a quick review. We used CloudFormation to create our on-premises resources, specifically the parameter store, permission for the server to access parameter store, and the server itself. In Bitbucket, we added a workspace runner using the Linux Shell type so that we can access files stored locally on the server. This was a key point because a Linux Docker runner wouldn't have given us the access we needed. We also had to configure a repository variable for the AWS region. And we were provided with a script that gets the file path from parameter store, reads the local file, and then prints the output of that file. The pipeline does the heavy lifting of running that script for us on the self-hosted runner itself. And then in our output, we see that the workflow ran as expected,
>
> **[3:59](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/solution-deploy-a-self-hosted-runner?u=76281980&t=239)** collecting the on-premises data. With all of this in place, I believe we have completed this challenge successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2)
> **CLI Commands:** docker (2), aws (2)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** aws (2)
> **Tools:** bitbucket (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-bitbucket-pipelines-automating-deployments-and-managing-third-party-integrations/next-steps?u=76281980&t=0)** - Hey, we made it to the end of the course. Thanks for joining me to learn about some of the advanced features in [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) pipelines. As you take your workflows to the next level, remember that this course is here for your reference. You can revisit the exercise files, retry the challenges, or take the course all over again and please ask questions and share your experience in the Q&A section. It's a great place to build community with other Bitbucket fans. I had an absolute blast as your instructor, and I'm excited to see the advanced projects you'll create with Bitbucket Pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (3)
> **Tools:** bitbucket (3)
> **Exercise Files:** exercise files (1)
> **Speakers:** - hey (1)


## Instructor

- [Michael Jenkins](../../Instructors/DevOps/Michael%20Jenkins.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-bitbucket-pipelines-3925184)

## Skills Covered

- Bitbucket
- Continuous Integration and Continuous Delivery (CI/CD)

## Path Context

### In [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)
← [Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md) | **3 of 3**

## Appears In

- [Master Bitbucket](../../Paths/DevOps/Learning%20Paths/Master%20Bitbucket.md)

## Related Courses

_Courses sharing skills:_

- [Bitbucket Pipelines for CI-CD](Bitbucket%20Pipelines%20for%20CI-CD.md) — Bitbucket, Continuous Integration and Continuous Delivery (CI/CD)
- [Learning Bitbucket](Learning%20Bitbucket.md) — Bitbucket

---

[↑ Back to top](#)