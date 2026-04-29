---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: continuous-integration-tools-20202338
url: "https://www.linkedin.com/learning/continuous-integration-tools-20202338"
duration_minutes: 63
duration: 1h 3m
level: Beginner
updated: 12/12/2023
learners: 29136
skills:
  - Continuous Integration (CI)
exercise_files: true
github: "https://github.com/LinkedInLearning/continuous-integration-tools-4490242"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQF_XV39CwrXiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702073152131?e=2147483647&amp;v=beta&amp;t=PArj2EExCoyrMjjDLxpN6FpMfIxXkw62Yc0W0KhhHBQ"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]'
prev_courses:
  - '[[DevOps Foundations- Continuous Delivery-Continuous Integration]]'
path_nav: '[{"path":"Getting Started with Continuous Integration - Continuous Delivery (CI-CD)","position":3,"total":3,"prev":"DevOps Foundations- Continuous Delivery-Continuous Integration","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/continuous-integration-ci
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Continuous%20Integration-%20Tools.md)

![Continuous Integration: Tools](https://media.licdn.com/dms/image/v2/D4D0DAQF_XV39CwrXiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702073152131?e=2147483647&amp;v=beta&amp;t=PArj2EExCoyrMjjDLxpN6FpMfIxXkw62Yc0W0KhhHBQ)

# Continuous Integration: Tools

> Continuous integration and continuous delivery (CI/CD) practices enable developers to reliably and quickly produce applications at scale—enhancing overall team collaboration in the process. As CI/CD has grown to become one of the most prominent subfields of DevOps, new CI/CD tools have emerged and proliferated across the entire industry. Curious about which tools are right for your team? This cour

> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338) | 1h 3m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (6 videos)
- **[[#1. Self-Hosted]]** (4 videos)
- **[[#2. Software as a Service (SaaS)]]** (3 videos)
- **[[#3. Cloud Service Providers]]** (4 videos)
- **[[#4. Code Repositories]]** (4 videos)
- **[[#5. Selecting a CI Tool]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Building your CI/CD pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=0)** Continuous integration, continuous delivery, and continuous deployment are fundamental concepts in modern software development.
>
> **[0:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=8)** More commonly known as CI/CD. Technologies of all kinds use these automated approaches to produce applications efficiently and reliably.
>
> **[0:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=17)** By the end of this course, you will know how to categorize CI/CD tools and the pros and cons of each category.
>
> **[0:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=24)** You'll also see how an experimental pipeline gets implemented in different CI/CD applications.
>
> **[0:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=31)** Hi, I'm Michael Jenkins, a computer engineer with experience building CI/CD pipelines and supporting the tools behind them.
>
> **[0:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=38)** We've got a lot of ground to cover, so let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (4)
> **Code Keywords:** let (1)
> **Definitions:** known as (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=0)** Before we get into any technical details, let's discuss the meaning of continuous integration, continuous delivery, and continuous deployment.
>
> **[0:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=9)** With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis.
>
> **[0:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=18)** Their code can then be combined, or in other words, integrated with code already stored in the repository.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=25)** The new code is tested and checked for any errors.
>
> **[0:29](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=29)** Using this method, developers can find and resolve problems more quickly compared to waiting until all the code for an application is complete and integrating everything at once.
>
> **[0:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=40)** Continuous delivery is a partner to the continuous integration process.
>
> **[0:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=45)** Continuous delivery enables developers to build, test, and release their software with every new change.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=52)** By including tests in the delivery process, engineers can be confident that the final product meets requirements and doesn't have any unexpected features, also known as bugs. Once the application is delivered, it can be deployed as needed.
>
> **[1:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=67)** When a deployment completes without human interaction, is referred to as continuous deployment.
>
> **[1:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=74)** In this case, the application is automatically built, tested, and deployed into a production environment.
>
> **[1:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=81)** To give another dimension to this course, exercise files are available.
>
> **[1:26](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=86)** The files are packed with information to help you get the most out of this course, especially if you want a more hands-on experience with any of the tools we discuss.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=96)** If you're working through the hands-on exercises, it'll be helpful if you're familiar with application development and the software development process.
>
> **[1:44](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=104)** If you already have some experience building, testing, and deploying applications, you'll be fine.
>
> **[1:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=110)** Many CI/CD tools are configured with scripts and command line tools, so if you're comfortable scripting and using a command line interface, you'll be all set.
>
> **[2:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=120)** It'll also be helpful if you're familiar with source code management tools like GitHub, Bitbucket, or GitLab.
>
> **[2:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=128)** Most tools start their processes when changes are applied to a code base, so you'll want to know how to push code to a repository, either from your local system or a web interface.
>
> **[2:20](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=140)** I'll share more information on the exercise files in an upcoming video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (1), case, (1)
> **Tools:** github (1), bitbucket (1), gitlab (1)
> **Exercise Files:** exercise files (2), source code (1)
> **Definitions:** in other words (1), is a  (1), known as (1)
> **CLI Commands:** find (1), cd (1)

#### CI/CD tool categories
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=0)** With dozens of CI/CD tools to choose from, we won't be able to explore all of them, but we can narrow our focus by sorting tools into four categories.
>
> **[0:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=10)** With plenty of CI/CD tools to choose from, we won't be able to explore all of them, but we can start narrowing our focus a bit by sorting tools into four categories.
>
> **[0:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=22)** Self-hosted tools run on your hardware.
>
> **[0:26](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=26)** This could mean the tool runs on a server in your company's data center, a VM running in the cloud, or it could be your local workstation.
>
> **[0:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=34)** Whatever the platform, you are responsible for installing and maintaining the tool.
>
> **[0:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=40)** Tools that fit into the Software as a Service or a SaaS category offer an alternative to self-hosting.
>
> **[0:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=47)** In this case, a vendor provides and maintains the tool and allows you to access it.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=52)** All you have to do is log in and get started.
>
> **[0:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=57)** The next category is an extension of the Software as a Service category.
>
> **[1:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=62)** Cloud service providers offer SaaS-based CI/CD tools, but they also offer other cloud-based features like virtual machines, managed services, and storage.
>
> **[1:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=75)** If you think of a code repository, your first thought is probably of a place where you can store your code.
>
> **[1:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=82)** But along with giving you a place to track and manage your code, many modern repositories also provide CI/CD tools for turning your code into software.
>
> **[1:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=92)** Now let's take a look at some of the pros and cons of tools in each of these categories.

> [!info]- Semantic Content
>
> **Code Keywords:** from, (2), self (2), case, (1), let (1)
> **CLI Commands:** cd (4)
> **Definitions:** is an  (1)

#### Pros and cons
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=0)** - [Presenter] Let's discuss a few of the benefits and drawbacks of using tools from each of the CI/CD categories.
>
> **[0:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=7)** Hosting your own CI/CD tools gives you the most flexibility in comparison to any other option.
>
> **[0:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=13)** You can specify the entire technology stack, including the software, the hardware, and the network.
>
> **[0:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=19)** You also have more control over any data that flows into or out of the tool.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=25)** You won't have to worry as much about unexpected data leaks or potentially harmful exposures.
>
> **[0:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=30)** That flexibility and peace of mind comes at a price though.
>
> **[0:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=35)** Since you own the entire technology stack, you also have to maintain it.
>
> **[0:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=39)** This can be difficult if you don't have the time or the inclination to install and administer a full-blown CI/CD system along with your normal duties.
>
> **[0:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=49)** You'll also be limited by the scale of the infrastructure you have on hand.
>
> **[0:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=54)** If all of a sudden you need to increase the throughput of your pipelines, you'll be limited to the capacity of your existing system.
>
> **[1:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=62)** Also, getting started with self-hosted tools can be intimidating for the uninitiated, causing difficulties with bringing resources online.
>
> **[1:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=72)** Software as a Service options, on the other hand, do their best to make it super easy to get started.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=79)** All of the heavy lifting of maintaining the tool is abstracted away, and all you need to do is worry about coding your application.
>
> **[1:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=87)** There are also plenty of free or reasonably priced SaaS CI/CD services available.
>
> **[1:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=93)** And maybe it's just me, but I love the fact that SaaS CI/CD tools create triggers from your repo automatically.
>
> **[1:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=101)** For me, that's just one less thing to think about.
>
> **[1:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=107)** SaaS tools might be free or have low fees to start, but they can become expensive over time.
>
> **[1:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=114)** As your team or rate of development increases, you could see large bills from the CI/CD service provider.
>
> **[2:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=121)** And lastly, there may be security concerns with running your data on a system that you don't have access to or control of.
>
> **[2:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=129)** Honestly, security vulnerabilities have the potential to pop up in all of these systems, so just assume that's the case for the other categories as well.
>
> **[2:20](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=140)** If you're using a cloud service provider's CI tool, you'll be more likely to use their other services as well.
>
> **[2:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=147)** With easy integration, it just makes sense to keep everything under the same roof.
>
> **[2:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=152)** And along with the additional services, cloud service providers may offer better control over who has access to your projects.
>
> **[2:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=160)** Using identity and access management, you'll be able to control who can push code to your repos and start deployments.
>
> **[2:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=167)** Cloud service providers also have unlimited resources.
>
> **[2:51](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=171)** Well, maybe not totally unlimited, but certainly more than you might have available in your server closet or local data center.
>
> **[3:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=180)** On the flip side, setting up CI/CD pipelines with cloud service providers can be more complex than other options.
>
> **[3:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=188)** You may need to set up special permissions or configure additional tools along with getting your build instructions in place.
>
> **[3:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=195)** Also, some may argue that hosting builds on cloud service providers leads to vendor lock-in.
>
> **[3:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=201)** That could be the case, but considering how every CI/CD system has a different configuration format, choosing any one provider will lead to different levels of vendor lock-in no matter what platform you choose.
>
> **[3:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=214)** When it comes to CI/CD, code repositories have the unique position of having your code and the CI/CD tool all in one place.
>
> **[3:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=223)** And there are plenty of free or low-fee options to get started.
>
> **[3:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=228)** One downside though, using code repository-based CI/CD services can get expensive when used at larger scales.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (11), make (1)
> **Code Keywords:** let (1), self (1), super (1), case, (1)
> **Prerequisites:** install (1), getting started (1), set up (1), configure (1)
> **Speakers:** - [presenter] (1)

#### The experimental pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=0)** As we explore CI/CD tools, it's helpful to have a sample pipeline to work with.
>
> **[0:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=6)** We'll be configuring a pipeline that builds, tests, and deploys a web application.
>
> **[0:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=12)** Our application is a Python script that serves JSON data over a simple API.
>
> **[0:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=18)** The application will be packaged as a zip file and then deployed to an AWS Lambda function environment.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=25)** For now, we won't worry too much about the application.
>
> **[0:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=28)** Instead, we'll be focusing on the steps needed to build it, test it, and deploy it to the target environment.
>
> **[0:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=35)** Our pipeline will have seven stages.
>
> **[0:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=38)** We'll trigger the pipeline by using an update to the Git repository where the application code is stored, or we may trigger it manually if needed.
>
> **[0:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=48)** In the first two stages, we'll install any dependencies and do a sanity check.
>
> **[0:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=54)** We'll scan our code using Python linters and run some unit tests to make sure the specification has been followed correctly.
>
> **[1:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=62)** It makes sense to do these quick checks early in the pipeline to keep from building and deploying bad code.
>
> **[1:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=68)** This is the integration part of our CI/CD pipeline.
>
> **[1:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=73)** At this stage, we could also include additional tests that improve the quality of our application.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=79)** We could scan for vulnerabilities or check to make sure sensitive information hasn't been committed to the repository.
>
> **[1:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=87)** In the third stage, we'll build the application.
>
> **[1:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=90)** To keep our experimental build as simple as possible, we'll bundle the application files into a zip archive.
>
> **[1:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=97)** This step is the delivery portion of our CI/CD pipeline, since we're making a new version available to be deployed.
>
> **[1:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=105)** And you might have guessed what comes next, deployment.
>
> **[1:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=109)** We'll use stages 4 and 5 to deploy our application to a staging environment.
>
> **[1:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=114)** In this environment, we'll be able to run tests on the application before it goes live in production.
>
> **[2:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=121)** If those tests pass, then our application will be ready for the big time.
>
> **[2:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=126)** In the last stages of the pipeline, we can confidently deploy our application to a production environment.
>
> **[2:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=132)** By this time, the code has been integrated, linted, tested at the unit level, built into a deliverable artifact, and deployed and tested in a staging environment.
>
> **[2:23](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=143)** But to make sure nothing went wrong, we'll run one more test on the live application.
>
> **[2:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=151)** As you're viewing this course, you might already have a pipeline in mind that you're looking to implement.
>
> **[2:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=156)** Just know that all the stages I've mentioned here might not apply to your project, but at the least, they should give you an idea of the stages in a typical CI/CD pipeline.
>
> **[2:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=167)** Are you ready to explore?
>
> **[2:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=168)** Let's begin.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (4), make (3), python (2), aws (1), git (1)
> **Code Keywords:** lambda (1), function (1), pass (1), let (1)
> **Env Vars:** json (1), api (1), aws (1)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### About the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=0)** The goal of this course is to provide an overview of popular CI/CD tools in four categories.
>
> **[0:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=6)** In addition, exercise files are available to help you get hands-on experience with each tool that we discuss.
>
> **[0:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=14)** Exercise files are available as a GitHub repository.
>
> **[0:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=18)** You'll want to download the exercise files as a zip archive, so you can access them on your local system.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=25)** From the repo home page, select code, local, download zip.
>
> **[0:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=31)** The directories follow the course structure, with directories for each chapter and section.
>
> **[0:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=39)** Inside the directory for each section, you'll find all the files you need to configure the pipeline using that specific tool.
>
> **[0:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=48)** You'll also find a README file with recommended resources, everything that you need to have in place before starting, and steps to set up the experimental pipeline to deploy a sample application we'll be using with all the tool demonstrations.
>
> **[1:04](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=64)** To deploy the sample application, you'll need an AWS account.
>
> **[1:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=69)** You can sign up for an AWS account by browsing to aws.[amazon.com/free](https://amazon.com/free).
>
> **[1:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=75)** I suggest creating your own account so you have admin privileges.
>
> **[1:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=81)** We'll also be creating and destroying resources, so using a sandbox account will prevent any accidental disruption to any production services.
>
> **[1:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=90)** Once you have your account in place, open the interface for AWS CloudFormation.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=96)** On the CloudFormation homepage, select "Create stack".
>
> **[1:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=100)** Confirm that "Template is ready" is selected and under specified template, select "Upload a template file".
>
> **[1:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=109)** Then select "Choose file".
>
> **[1:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=112)** Browse to the location where you open the zip archive for the exercise files.
>
> **[1:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=117)** Select "sample-application.yml" and then choose "Open".
>
> **[2:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=122)** Then click "Next".
>
> **[2:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=126)** We need to enter a name for the stack under stack name and I'll use sample-application.
>
> **[2:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=132)** And then I'll click "Next".
>
> **[2:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=135)** On this screen, configure stack options, we can keep all options as the default.
>
> **[2:20](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=140)** We just need to scroll to the bottom of the page and select "Next".
>
> **[2:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=145)** On the review screen, scroll to the bottom of the page and select the checkbox next to "I acknowledge that AWS CloudFormation might create IAM resources with custom names" and then select "Submit".
>
> **[2:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=161)** Review the events tab on the stack home page until create complete is reported under the status column for the logical ID that matches your stack name.
>
> **[2:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=176)** Once the stack creation is complete, select the outputs column.
>
> **[3:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=185)** This is where you'll be able to find all the details you'll need to configure the experimental pipeline for each tool.
>
> **[3:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=192)** You can make a note of these values or come back to this page when you need them.
>
> **[3:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=197)** Most importantly, please keep values for the access keys secure.
>
> **[3:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=201)** Basically, treat them as passwords and don't share them or commit them to a repository.
>
> **[3:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=207)** To view the sample application, use the links to the production and staging environments.
>
> **[3:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=214)** Now we can use the sample application to explore a variety of CI/CD tools.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), find (3), cd (2), make (1)
> **Exercise Files:** exercise files (4), template (3), download the (1)
> **Prerequisites:** configure (3), you'll need (2), you need to have (1), set up (1)
> **Env Vars:** aws (4), readme (1), iam (1)
> **UI Navigation:** open the (2), select the (2), checkbox (1)
> **Code Keywords:** interface (1), default. (1)
> **File Paths:** sample-application.yml (1)
> **URLs:** [amazon.com](https://amazon.com) (1)


### 1. Self-Hosted

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=0)** The CI tools in the self-hosted category are some of the most capable tools we'll consider.
>
> **[0:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=5)** They also give us the most flexibility because we control almost all aspects of the installation, administration, and maintenance.
>
> **[0:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=13)** We'll discuss a few tools from this category, starting with Jenkins.
>
> **[0:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=18)** When developers think of tools for continuous integration, Jenkins is likely the first to come to mind.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=25)** It's easily one of the most well-known and widely used automation tools available.
>
> **[0:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=32)** More than one million users around the world turn to Jenkins for their automation needs, including continuous integration and delivery.
>
> **[0:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=41)** Price is one of the reasons that keep application developers and software engineers turning to Jenkins, its free and open-source.
>
> **[0:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=49)** Enterprise support for Jenkins is available through CloudBees, the company founded by the original creator of Jenkins.
>
> **[0:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=56)** CloudBees is also one of the largest contributors to the Jenkins open-source project.
>
> **[1:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=62)** Jenkins is essentially an automation framework that can be extended through plugins.
>
> **[1:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=68)** If the base functionality doesn't cover what you need, there's probably a plugin that can do the job for you.
>
> **[1:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=74)** There are nearly 1,500 plugins available in the plugin index.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=79)** One plugin we'll be using to enhance our pipeline experience is the Blue Ocean plugin.
>
> **[1:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=85)** Blue Ocean is actually a collection of plugins that enhances the Jenkins user interface specifically for visualizing pipelines.
>
> **[1:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=94)** Jenkins includes a pipeline viewer out of the box, but the Blue Ocean plugin provides a more modern and up-to-date interface.
>
> **[1:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=103)** We can model our pipeline in the Jenkins web interface, or with a Jenkins file stored with our code.
>
> **[1:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=110)** The Jenkins file format is based on the Groovy programming language, and uses a declarative approach to describe the stages of a pipeline and the actions needed to complete the stage.
>
> **[2:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=121)** Let's get started by taking a look at our experimental pipeline as implemented in a Jenkins file.
>
> **[2:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=130)** The Jenkins file format is easy to follow, with each configuration element broken out into bracketed sections.
>
> **[2:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=138)** At the top, we have an environment block that injects our configuration parameters and AWS credentials into the process running our pipeline.
>
> **[2:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=147)** The actual values for the credentials are stored securely in Jenkins to prevent exposure in the repository or log files.
>
> **[2:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=155)** Beneath that, we have our stages.
>
> **[2:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=159)** I've modeled our experimental pipeline to follow the seven stages used to get the application code and run some quick tests, build a new version of the application, and then deploy and test in the staging and production environments.
>
> **[2:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=172)** Each stage contains the steps that run the commands or scripts needed to fulfill the actions for that stage.
>
> **[2:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=179)** In the check stage, I've used the parallel directive to tell Jenkins to run the linting and unit tests at the same time.
>
> **[3:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=187)** Using parallelization will help speed up the build.
>
> **[3:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=190)** Now let's run our pipeline.
>
> **[3:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=193)** In the default pipeline view, Jenkins provides a nice visualization of the pipeline, showing each of the stages we've defined in our Jenkins file.
>
> **[3:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=202)** However, we can use the Blue Ocean plugin for what I'll call a more aesthetic pipeline visualization.
>
> **[3:29](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=209)** To get to that view, I'll select "Open Blue Ocean".
>
> **[3:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=213)** In the Blue Ocean view, our pipeline homepage shows past runs along with results, commit messages, and other details.
>
> **[3:42](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=222)** We also have this handy Run button to start the pipeline process.
>
> **[3:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=226)** We could also set up a Webhook with our Git repo so the pipeline runs automatically.
>
> **[3:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=232)** But for this demo, I'll just use the Run button.
>
> **[3:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=236)** We can also see the stages of our pipeline by clicking into the running job.
>
> **[4:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=242)** In this view, we can see each stage of our pipeline along with its status.
>
> **[4:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=248)** The green and white checkmarks let us know the stages have passed and the blinking blue icon lets us know which stage is active.
>
> **[4:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=257)** The log for each stage is displayed below, and we can expand the form to follow the log in real-time.
>
> **[4:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=264)** Now let's wait for the build to finish.
>
> **[4:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=268)** The green color in the banner at the top lets us know all stages of the pipeline have completed successfully.
>
> **[4:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=275)** With a clear pipeline as code format and extensive plugin library and pipeline visualizations with the Blue Ocean plugin, Jenkins remains a viable tool for continuous integration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), self (1)
> **CLI Commands:** aws (1), git (1)
> **Env Vars:** aws (1)
> **Prerequisites:** set up (1)

#### Bamboo
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=0)** Bamboo is a self-hosted CI/CD solution developed by Atlassian, the company behind applications like Confluence, Jira, and Bitbucket.
>
> **[0:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=11)** For teams that are using other Atlassian products, Bamboo is a nice fit for adding a CI/CD server to project management and issue tracking workflows.
>
> **[0:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=21)** Work assigned in Jira, for example, can be directly associated with a pipeline in Bamboo.
>
> **[0:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=27)** Bamboo also provides integration with Bitbucket, Atlassian's source code repository product.
>
> **[0:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=33)** Bamboo is a paid product.
>
> **[0:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=35)** The price for an annual license is based on the number of remote agents connected to the main Bamboo server.
>
> **[0:42](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=42)** The number of agents needed by a team will depend on the size of the team, and the number of CI jobs being run.
>
> **[0:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=49)** Agents can number from one into the thousands, with a license cost increasing accordingly.
>
> **[0:55](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=55)** Check the Bamboo website for the most current pricing.
>
> **[0:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=59)** To extend functionality, Atlassian provides a marketplace for Bamboo plugins.
>
> **[1:04](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=64)** Some plugins are free, while others have a cost associated with them.
>
> **[1:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=69)** Out of the box, Bamboo pipelines are configured from the web interface.
>
> **[1:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=74)** However, Bamboo also supports spec files that can be stored along with the application code.
>
> **[1:20](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=80)** Spec files can be written in YAML or Java, with both of these formats having their benefits.
>
> **[1:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=87)** YAML is easy to read and understand, even for someone that might not be familiar with programming.
>
> **[1:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=93)** Java might be a bit more complicated to read, but it's a popular language and many developers are familiar with it.
>
> **[1:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=100)** Let's see how we can implement our experimental pipeline in Bamboo.
>
> **[1:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=105)** Bamboo pipelines are called Plans.
>
> **[1:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=109)** I've configured the plan for our experimental pipeline using the web interface.
>
> **[1:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=114)** To get a better view, I'll select "Actions" and then "Configure plan".
>
> **[1:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=118)** Plans contain stages and jobs.
>
> **[2:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=123)** In this implementation, our experimental pipeline has one stage and one job.
>
> **[2:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=129)** The job contains seven tasks, with each task representing a section of our pipeline.
>
> **[2:16](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=136)** Each task performs a specific action; checking out code, running a script, or running a command.
>
> **[2:23](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=143)** Other types of tasks are available for pipelines that need more specific actions.
>
> **[2:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=150)** Let's run this plan by selecting "Run" and then "Run plan".
>
> **[2:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=156)** While the build is running, we get this nice progress bar right at the top of the page showing the overall progress of the build.
>
> **[2:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=166)** And we're also given easy access to any logs produced by the build so we can follow along.
>
> **[2:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=172)** Let's wait for this build to complete.
>
> **[2:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=177)** Bamboo has plenty of capabilities and can do even more when paired with other Atlassian products.
>
> **[3:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=185)** If you're working at a shop that uses Confluence or Jira, for example, Bamboo might be a good choice for your software integration needs.

> [!info]- Semantic Content
>
> **Tools:** jira (3), confluence (2), bitbucket (2)
> **Code Keywords:** let (3), interface (2), self (1)
> **Definitions:** is a  (3)
> **CLI Commands:** cd (2)
> **Env Vars:** yaml (2)
> **Documentation:** spec (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (1)

#### TeamCity
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=0)** TeamCity is an enterprise-grade CI/CD server produced by JetBrains, the company behind popular integrated development environments like IntelliJ and PyCharm.
>
> **[0:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=11)** TeamCity can be used directly from the IDEs developed by JetBrains.
>
> **[0:16](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=16)** Developers will benefit from being able to work with TeamCity while staying in their preferred coding environment.
>
> **[0:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=22)** They can trigger builds or analyze build results, all without ever having to leave their editor.
>
> **[0:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=28)** TeamCity also has integrations for other IDEs like Visual Studio.
>
> **[0:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=33)** TeamCity is a closed-source application but has free licensing available.
>
> **[0:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=39)** The free license includes full access to all product features, 100 build configurations, and support for three build agents.
>
> **[0:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=48)** Enterprise licenses are available for unlimited builds and additional agents.
>
> **[0:53](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=53)** Pricing is based on the number of build agents.
>
> **[0:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=57)** TeamCity provides capabilities for quickly configuring build plans based on a project's code.
>
> **[1:04](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=64)** For example, TeamCity can detect Maven or Ant build files in a Java-based project and suggest build plans for Java.
>
> **[1:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=73)** TeamCity can be configured from the web interface or with configuration files in XML or Kotlin formats.
>
> **[1:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=82)** XML provides a great deal of structure for describing a configuration, but it can be verbose and difficult for humans to process.
>
> **[1:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=91)** Kotlin is a general-purpose programming language that runs on the Java Virtual Machine.
>
> **[1:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=97)** It's no surprise that JetBrains would use Kotlin as a configuration format for TeamCity, since they're the ones that developed the language.
>
> **[1:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=106)** Compared to XML, Kotlin is a bit easier to read and can be familiar to programmers, even if they aren't familiar with the language.
>
> **[1:55](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=115)** It also lends itself to code reuse in the form of templates that can be parameterized and used across different pipelines.
>
> **[2:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=123)** Let's implement our experimental pipeline in TeamCity.
>
> **[2:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=128)** The exercise files for this lesson include a Kotlin-based settings file that can be imported to configure a TeamCity project.
>
> **[2:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=137)** The file includes definitions for the project parameters and steps for each section of our experimental pipeline.
>
> **[2:26](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=146)** I've created a project by importing the settings files.
>
> **[2:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=150)** To get to the configuration, I'll select the "Build job", then "Edit configuration", and then "Build steps".
>
> **[2:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=157)** In this view, we can clearly see the steps that make up each section of the pipeline.
>
> **[2:44](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=164)** Each step is configured by selecting a runner type.
>
> **[2:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=169)** I'm using a command line running type Rephrase.
>
> **[2:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=174)** Each step is configured by selecting a runner type.
>
> **[2:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=179)** I'm using a command line runner, but there are plenty of other options available for different technologies and actions.
>
> **[3:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=187)** For now, let's run the pipeline.
>
> **[3:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=191)** To see our pipeline in action, we need to go back to the home page, and click into the actively running build.
>
> **[3:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=201)** On this page, we get a summary of the build's status along with which step the build is currently running.
>
> **[3:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=208)** If we click "Build log", we can view the log in real-time.
>
> **[3:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=213)** Now let's wait for the build to complete.
>
> **[3:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=218)** Once the build is complete, we can review the output from specific steps by clicking the plus icon next to the step we want to see.
>
> **[3:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=228)** Out of the box, the capabilities and price of TeamCity make it a good fit for small and medium-sized teams.
>
> **[3:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=236)** If your team is already using JetBrains' IDEs like IntelliJ or PyCharm, you might get even more benefit by integrating TeamCity with those tools.

> [!info]- Semantic Content
>
> **Tools:** intellij (2), pycharm (2), command line (2), visual studio (1)
> **Code Keywords:** let (3), type. (2), interface (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), cd (1)
> **Env Vars:** xml (3)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### Comparing self-hosted tools
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=0)** Self-hosted CI/CD tools give us full control over the hardware and software, running tests, creating artifacts, and deploying applications.
>
> **[0:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=10)** However, that control comes with the responsibility of installing and maintaining the entire stack.
>
> **[0:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=17)** Jenkins is open-source, free, and supports thousands of plugins.
>
> **[0:23](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=23)** The Jenkins file format is also great for easily modeling pipeline stages.
>
> **[0:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=28)** Bamboo is known for tight integration with other Atlassian products and connects to a marketplace for plugins and extensions.
>
> **[0:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=37)** Bamboo also provides a web-based interface for creating pipelines.
>
> **[0:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=43)** TeamCity works seamlessly with JetBrains' IDEs and other editors like Visual Studio Code.
>
> **[0:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=50)** Project detection speeds up configuration, and Kotlin-based pipeline files are approachable for most developers using TeamCity.
>
> **[1:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=61)** Now, let's explore the next category, Software as a Service.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), interface (1), let (1)
> **CLI Commands:** cd (1)
> **Tools:** visual studio (1)


### 2. Software as a Service (SaaS)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Travis CI
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/travis-ci?u=76281980)

#### CircleCI
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=0)** CircleCI provides CI/CD workflow management, a variety of build environments, and capabilities that can support all types of projects.
>
> **[0:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=11)** CircleCI uses a variety of Docker containers or virtual machines to run your CI and CD build steps.
>
> **[0:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=19)** This gives developers access to Ubuntu, Windows, and MacOS environments.
>
> **[0:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=25)** In addition, projects that require more compute resources or specialized processors can use GPUs and ARM-based environments.
>
> **[0:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=34)** For mobile developers, CircleCI also provides support for building and testing applications for iOS and Android platforms.
>
> **[0:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=43)** Cost-wise, it's easy to get started on CircleCI.
>
> **[0:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=47)** Three tiers of pricing are available with support for individual developers, teams, and enterprises.
>
> **[0:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=54)** Each tier provides a generous amount of free build minutes each month, with additional minutes available for purchase as needed.
>
> **[1:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=62)** Pricing starts out at $0 per month and scales up from there, according to the number of concurrent jobs and the number of members contributing to projects in an account.
>
> **[1:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=74)** Be sure to check the CircleCI website for the most up-to-date pricing information.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=79)** CircleCI workflows and jobs are configured in a file named config.yml, located in a hidden directory named .circleci.
>
> **[1:29](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=89)** The config.yml file is used to define all jobs and workflows for the project.
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=95)** CircleCI also has a convention known as an orb, which defines packaged shareable configurations. Orb save time by allowing developers to reuse configurations.
>
> **[1:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=107)** CircleCI even provides an orb registry where you can find configurations for tools and third-party vendors.
>
> **[1:53](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=113)** There's also a handy CircleCI command line tool for testing configurations, debugging jobs on a local system, and more.
>
> **[2:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=121)** Now let's take a look at our experimental pipeline running on CircleCI.
>
> **[2:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=126)** I've modeled the experimental pipeline in CircleCI as four jobs.
>
> **[2:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=134)** Each job defines the steps needed to fulfill that stage of the pipeline.
>
> **[2:21](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=141)** We can start a new build by pushing code to the repo, or from here, I can use the "Rerun pipeline" button.
>
> **[2:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=151)** And from here, I'll select the actively running pipeline.
>
> **[2:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=158)** We can follow the pipeline progress by selecting actively running steps to see the commands and output.
>
> **[2:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=167)** Once the build is complete, we can see the status of each stage and the overall status of the pipeline.
>
> **[2:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=176)** Beyond running workflows, CircleCI also provides trends on how our builds have run over time.
>
> **[3:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=182)** This information can be found on the Insights page.
>
> **[3:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=186)** Insights provide our average runtime, when the last job was run, and a visual indicator for jobs that have failed or succeeded along with the success rate.
>
> **[3:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=198)** With an easy onboarding process and generous pricing options, CircleCI provides a capable and competitive CI/CD option for teams of all sizes.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), docker (1), find (1)
> **File Paths:** config.yml (2)
> **Code Keywords:** require (1), let (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** arm (1)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)
> **Definitions:** known as (1)

#### Comparing SaaS tools
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=0)** CI tools in the Software as a Service category offer the convenience of easy configuration and maintenance-free operations.
>
> **[0:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=8)** This is also one of the first categories where we can benefit from unbounded scale.
>
> **[0:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=14)** If there's a need for increased capacity for tests and deployments, more compute resources or build minutes can be added as needed.
>
> **[0:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=22)** Travis CI has long been a first choice for large open-source projects for integrating code and running tests.
>
> **[0:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=31)** It has close ties to projects hosted in GitHub, but also supports other code repositories.
>
> **[0:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=38)** And the YAML configuration is intuitive and elegant at the same time.
>
> **[0:44](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=44)** CircleCI is known for its speed and efficiency in testing and building applications.
>
> **[0:51](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=51)** It also provides orbs for creating reusable pipeline components.
>
> **[0:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=56)** And CircleCI Insights is another strong feature showing trends from a project's history.
>
> **[1:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=63)** Now let's get into the next category of CI tools, Cloud Service Providers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** yaml (1)
> **Tools:** github (1)


### 3. Cloud Service Providers

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Amazon Web Services (AWS) CodePipeline and CodeBuild
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=0)** When we're heavily invested in the cloud, it can make sense to keep our CI/CD tools on the same platform we use for servers, databases, and other resources.
>
> **[0:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=10)** Let's discuss tools in the cloud service provider category, starting with AWS CodePipeline and CodeBuild.
>
> **[0:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=18)** CodePipeline and CodeBuild are tools for implementing CI/CD in Amazon Web Services.
>
> **[0:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=27)** With CodePipeline, developers can model the stages of their pipeline and the actions that need to be taken in each stage.
>
> **[0:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=35)** CodeBuild provides an on-demand build service that can be used with CodePipeline to implement the steps needed to build, deliver, and deploy code.
>
> **[0:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=46)** CodePipeline takes input from several sources, including GitHub repositories, Amazon's hosted git repo service, CodeCommit, Amazon's Elastic Container Registry, also known as ECR, and Amazon Simple Storage Service, most commonly known as S3.
>
> **[1:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=65)** Depending on the input, CodePipeline collects additional information to help developers create stages in the pipeline for building, testing, and deploying the application.
>
> **[1:17](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=77)** Each stage calls on an action provider to do the work for that stage.
>
> **[1:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=82)** With so many services in AWS, there are plenty of action providers to choose from, including CloudFormation, Amazon Lambda, Amazon Elastic Container Service, and well, you get the idea.
>
> **[1:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=94)** You can even use actions from third parties or create custom actions to meet specific needs.
>
> **[1:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=100)** CodeBuild is one of the most common providers to use with CodePipeline.
>
> **[1:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=106)** When working with a repository-based project, CodeBuild is configured by a file named buildspec.yml, located in the root directory of the project.
>
> **[1:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=116)** The configuration defines the specific steps that CodeBuild will take and where to store any artifacts created by the process.
>
> **[2:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=125)** The configuration can also be parameterized, so CodeBuild workflows can be used with different projects.
>
> **[2:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=131)** CodeBuild uses Linux or Windows VMs that are created on demand for each build.
>
> **[2:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=138)** VMs can be sized according to the CPU and RAM needed to build or test the application.
>
> **[2:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=145)** Like other AWS services, there are no upfront costs for CodePipeline and CodeBuild.
>
> **[2:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=151)** You only pay for the resources that you use.
>
> **[2:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=154)** Pipelines are free for the first 30 days after they're created.
>
> **[2:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=158)** After that, each active pipeline costs $1 per month.
>
> **[2:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=163)** CodeBuild includes 100 build minutes for free each month.
>
> **[2:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=168)** This free limit continues even after the free tier expires.
>
> **[2:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=172)** If all free minutes are consumed, additional minutes are priced at fractions of a cent for small instances and just pennies more for larger instances.
>
> **[3:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=182)** Let's see how CodePipeline and CodeBuild handle our experimental pipeline.
>
> **[3:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=189)** The buildspec for our sample application is made up of sections called phases.
>
> **[3:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=195)** We have four phases represented; install, pre-build, build, and post-build.
>
> **[3:23](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=203)** In CodePipeline, we'll define steps that call CodeBuild and pass parameters to these phases for both environments of our sample application.
>
> **[3:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=214)** Here's a view of our experimental pipeline with three stages.
>
> **[3:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=219)** The first stage named source, receives webhooks from our GitHub repository.
>
> **[3:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=225)** Whenever there's a new change pushed to the repo, the source stage will pull the new code and kick off the next stage in the pipeline.
>
> **[3:54](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=234)** Deploy staging uses a CodeBuild action to run the steps defined in the buildspec file.
>
> **[4:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=242)** This stage is also parameterized to build, test, and deploy the staging environment before triggering the next stage.
>
> **[4:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=250)** Deploy production uses the same CodeBuild configuration as the previous stage, but is parameterized for the production environment.
>
> **[4:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=259)** To trigger the pipeline, I'll select "Release change".
>
> **[4:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=264)** We can follow the pipeline's progress from this view, or we can view the logs from each action.
>
> **[4:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=273)** Now let's wait for the pipeline to complete.
>
> **[4:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=279)** From the execution history view, we can see the status and details of past pipeline runs.
>
> **[4:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=287)** And we can get more detailed information for each stage in the build history view for CodeBuild.
>
> **[4:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=297)** We've only seen just a little bit of what AWS CodePipeline and CodeBuild can do in this overview.
>
> **[5:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=305)** There's plenty more that you can do with both of these tools and other AWS services.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), cd (2), make (1), git (1)
> **Env Vars:** aws (5), ecr (1), cpu (1), ram (1)
> **Code Keywords:** let (3), from, (1), lambda (1), pass (1)
> **Tools:** github (2)
> **Definitions:** known as (2)
> **File Paths:** buildspec.yml (1)
> **Prerequisites:** install (1)

#### Azure Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=0)** Azure Pipelines is part of the Azure DevOps product line.
>
> **[0:04](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=4)** Azure DevOps includes a complete set of hosted tools for application development, with pipelines as the main tool for building, testing, and deploying applications.
>
> **[0:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=15)** Pipelines can interact with virtual machines, Kubernetes clusters, or other resources running in Azure.
>
> **[0:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=22)** Jobs can also be configured to deploy to other clouds as well. Azure Pipelines allows developers to build projects on a variety of platforms including Ubuntu Linux, MacOS, and Windows, all hosted in the Azure Cloud.
>
> **[0:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=37)** Open-source projects using Azure Pipelines can benefit from unlimited build time and 10 jobs running in parallel.
>
> **[0:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=45)** Teams of five or less can use up to 1,800 build minutes per month on one hosted job.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=52)** Jobs are defined in Azure Pipelines using agents and tasks.
>
> **[0:57](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=57)** To increase feedback and contributions from the community, Microsoft has made the standard agents and tasks open-source and available for collaboration on GitHub.
>
> **[1:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=66)** Developers can use their own custom agents and tasks as well.
>
> **[1:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=70)** Each Azure Pipelines project is configured with a YAML file named azure-pipelines.yml, located in the root directory.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=79)** The file specifies the virtual machine image to use for builds, and any other project parameters needed to run tests or deploy applications.
>
> **[1:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=88)** Okay. Now let's go to the Azure Pipelines console.
>
> **[1:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=93)** The Azure Pipelines console provides a nice visualization of the experimental pipeline.
>
> **[1:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=99)** Each section of the pipeline contains the jobs and steps that will take place in that section.
>
> **[1:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=105)** I'll push a change to the repo and go to the actively running pipeline.
>
> **[1:51](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=111)** From this view, we'll be able to see each job and step as it's running along with status updates.
>
> **[1:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=118)** And if we select a running stage, we can follow along with each build step.
>
> **[2:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=126)** Now let's wait for the pipeline to complete.
>
> **[2:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=130)** Along with the functionality we've seen in this overview, Azure Pipelines includes release management, task groups, and more.
>
> **[2:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=139)** These features make Azure Pipelines a capable tool for managing CI for resources hosted in Azure and other clouds as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **UI Navigation:** go to (2)
> **File Paths:** azure-pipelines.yml (1)
> **CLI Commands:** make (1)
> **Env Vars:** yaml (1)
> **Tools:** github (1)

#### Google Cloud Platform (GCP) Cloud Build
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=0)** Cloud Build is an integration service from the Google Cloud Platform suite of tools.
>
> **[0:05](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=5)** It originally started as an image builder for containers.
>
> **[0:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=9)** Over time, it's grown into a tool that can be applied to CI/CD tasks as well.
>
> **[0:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=15)** The core functionality of Cloud Build is a workflow manager for building and testing applications before deploying them to other GCP services like App Engine, Kubernetes Engine, or even services running on other cloud platforms.
>
> **[0:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=30)** Cloud Build pricing is part of the GCP free tier.
>
> **[0:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=33)** Standard builds are given 2,500 minutes per month, and additional minutes start at just $0.003 per minute.
>
> **[0:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=43)** Please check the Cloud Build website for current pricing.
>
> **[0:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=47)** Cloud Build is initially configured by adding a trigger from Bitbucket, GitHub, or GCP's own cloud source repository.
>
> **[0:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=56)** Once a trigger is added, Cloud Build is activated when a new commit is pushed to the repo.
>
> **[1:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=61)** The trigger can be further configured to build on specific branches or tags.
>
> **[1:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=66)** For projects that only need a container image to be created, the repo just needs to contain a Docker file and any supporting files.
>
> **[1:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=75)** To do anything beyond creating an image like testing or deploying, a Cloud Build configuration file is required.
>
> **[1:23](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=83)** Build steps are defined in a file named cloudbuild.yml, or if you're more of a JSON fan, you can use the JSON format in a file named cloudbuild.json.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=96)** This file is usually located in the root directory of the project.
>
> **[1:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=101)** Let's take a look at the Cloud Build configuration for our experimental pipeline.
>
> **[1:47](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=107)** The cloudbuild.yml file has an easy-to-follow format.
>
> **[1:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=112)** At the top of the file, the steps keyword starts off the list of steps that will be included in the build.
>
> **[1:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=118)** For Cloud Build, I've modeled our experimental pipeline in nine steps.
>
> **[2:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=123)** Each step has a name, but is not the name of the step. It's actually the name of the container image that Cloud Build will use to run the step.
>
> **[2:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=132)** Each step is a command that gets passed to the containers runtime environment.
>
> **[2:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=138)** We can also include environment variables using the ENV directive.
>
> **[2:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=142)** This is key to passing in the credentials and project parameters needed to deploy our application to AWS.
>
> **[2:29](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=149)** Now that we know how our pipeline is laid out, let's kick off a build.
>
> **[2:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=155)** On the Cloud Build homepage, we can see the build history for all the pipelines in our project.
>
> **[2:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=161)** If I click into a build that ran successfully, I can rebuild it from this Build's homepage.
>
> **[2:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=170)** This gives us a great view of our build steps and a log where the output of each step is written.
>
> **[2:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=179)** One of the cool things about this log is this option here, "Show newest entries first".
>
> **[3:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=186)** Select that and Cloud Build will update the log backwards, so you can see the most recent output at the top of the log.
>
> **[3:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=194)** No more scrolling down to see the output.
>
> **[3:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=199)** Once the build completes, we can see the status for each stage.
>
> **[3:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=204)** If we need to see the output from a specific stage, we can open that stage log file right from this window and start debugging.
>
> **[3:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=213)** In summary, Cloud Build's straightforward configuration, and generous free tier make it a well-suited option for CI/CD.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (3), json (2), env (1), aws (1)
> **CLI Commands:** cd (2), docker (1), aws (1), make (1)
> **File Paths:** cloudbuild.yml (2), cloudbuild.json (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (2)
> **Tools:** bitbucket (1), github (1)
> **Versions:** 0.003 (1)

#### Comparing cloud service provider tools
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=0)** Cloud service providers offer CI/CD tools that are seamlessly integrated into their respective cloud ecosystems.
>
> **[0:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=7)** Building software in the cloud where it's intended to be deployed comes with the advantage of access management and other security controls.
>
> **[0:16](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=16)** Scale is also a benefit, with clouds providing access to essentially unlimited resources.
>
> **[0:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=24)** CodePipeline and CodeBuild are a dynamic duo for CI/CD projects hosted on AWS.
>
> **[0:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=32)** Each tool contributes to modeling pipelines with stages, actions, and reusable build components.
>
> **[0:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=40)** Azure Pipelines ties in nicely with the project management features of the Azure DevOps platform.
>
> **[0:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=46)** Azure Pipelines also includes features for release management.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=52)** GCP Cloud Build is known for its fast runtimes and simple configuration.
>
> **[0:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=58)** Projects based on containers can benefit from Cloud Build's native functionality for creating container images.
>
> **[1:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=66)** Up next, let's take a look at CI tools provided by platforms many developers use every day, Code Repositories.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), aws (1)
> **Env Vars:** aws (1), gcp (1)
> **Code Keywords:** let (1)


### 4. Code Repositories

> [[#Table of Contents|↑ Back to Table of Contents]]

#### GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=0)** Code repositories allow us to manage our code along with the CI/CD services, running our tests and deployments.
>
> **[0:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=7)** There are some really amazing tools in this category, including this one, GitHub Actions.
>
> **[0:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=13)** GitHub is one of the world's most popular code repositories, with millions of users, more than 100 million repositories, and a suite of tools for modern software development, including continuous integration.
>
> **[0:26](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=26)** GitHub provides Git-based source code management and is home to thousands of open-source projects.
>
> **[0:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=33)** Access to GitHub is free and includes unlimited public and private repositories.
>
> **[0:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=40)** In the GitHub Marketplace, developers can find third-party applications and tools to extend GitHub's native capabilities.
>
> **[0:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=48)** This includes tools for getting notifications, conducting code reviews, scanning code for security vulnerabilities, and much more.
>
> **[0:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=56)** GitHub also includes GitHub Actions, a workflow management tool for repositories hosted on GitHub.
>
> **[1:04](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=64)** Workflows are configured with YAML files stored in a hidden folder named .github/ workflows.
>
> **[1:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=71)** Repositories can have multiple workflows, with each one performing a specific task.
>
> **[1:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=78)** Workflows are triggered in response to activity in the repo, along with standard triggers like pushing updated code, workflows can be triggered by just about any other repo activity based on the GitHub API.
>
> **[1:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=92)** This includes activity that might not even involve code, like adding comments to pull requests, or when someone new joins a project.
>
> **[1:42](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=102)** GitHub actions provides compute environments for Windows, Linux, and macOS called runners.
>
> **[1:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=110)** You can also host your own runners for more flexibility.
>
> **[1:53](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=113)** The workflow files define which runners will be used, along with jobs, steps, and actions.
>
> **[2:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=120)** Jobs and steps can define pipeline stages, and actions are used for discrete tasks.
>
> **[2:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=127)** Thousands of predefined actions can be sourced from the GitHub Marketplace, or developers can create their own custom actions to share or use across multiple repos.
>
> **[2:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=138)** Let's use a GitHub Actions workflow to run our experimental pipeline.
>
> **[2:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=145)** For GitHub Actions, I've modeled the experimental pipeline using jobs to represent the stages of the pipeline.
>
> **[2:33](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=153)** This workflow run was triggered by a push to the repo.
>
> **[2:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=157)** I can also trigger the workflow manually by going to the workflows main page and selecting "Run workflow".
>
> **[2:46](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=166)** Now I'll select the active pipeline.
>
> **[2:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=169)** Right now our pipeline is queued and waiting to run.
>
> **[2:53](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=173)** Let's wait a few minutes for it to run and complete.
>
> **[2:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=178)** The big green checkmark on the left lets us know that our workflow completed successfully.
>
> **[3:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=183)** And beneath that, we can see a similar result for each job in the pipeline.
>
> **[3:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=188)** We're also provided with an interface where we can explore the status and output from each step of the workflow.
>
> **[3:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=195)** Along with keeping code and CI/CD in one location, GitHub and GitHub Actions provide plenty of capabilities for software development.

> [!info]- Semantic Content
>
> **Tools:** github (17)
> **Code Keywords:** let (2), public (1), private (1), interface (1)
> **CLI Commands:** cd (2), git (1), find (1)
> **Env Vars:** yaml (1), api (1)
> **Code Identifiers:** macos (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** source code (1)

#### GitLab CI
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=0)** [Gitlab.com](https://Gitlab.com) includes code management, project planning, and of course, continuous integration.
>
> **[0:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=9)** GitLab's core functionality is Git-based code management and collaboration.
>
> **[0:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=15)** Fans of open-source software will be happy to know that GitLab is an open-source product, with some portions licensed as source available.
>
> **[0:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=24)** All of the code is available on [gitlab.com](https://gitlab.com) and [github.com](https://github.com).
>
> **[0:29](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=29)** If you want to raise an issue with the development team or submit a pull request, you can start from either site.
>
> **[0:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=35)** [Gitlab.com](https://Gitlab.com) provides unlimited public and private repositories and unlimited collaborators for free.
>
> **[0:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=43)** GitLab CI is GitLab's continuous integration service.
>
> **[0:48](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=48)** Linux is the primary platform for hosted runners on GitLab.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=52)** At the time I'm recording this, beta support is available for hosted runners using Windows and macOS.
>
> **[0:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=58)** Using your own self-hosted runners is also an option.
>
> **[1:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=63)** GitLab's free tier includes 400 pipeline minutes per month.
>
> **[1:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=67)** Upgrading to a paid tier adds more pipeline minutes and access to other services and features.
>
> **[1:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=74)** GitLab CI pipelines are configured in a file named .gitlab-ci.yml, located in the root directory of the project.
>
> **[1:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=84)** The configuration defines each stage of a pipeline in order, followed by the jobs and scripts that belong to each stage.
>
> **[1:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=92)** Let's take a look at our experimental pipeline in GitLab CI.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=96)** For GitLab CI, I've modeled the pipeline stages using six jobs.
>
> **[1:42](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=102)** Pipelines are triggered by pushes to the repo, but we can also run a pipeline manually by selecting "Pipelines" and then "Run pipeline".
>
> **[1:56](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=116)** Once the pipeline finishes, we can review the logs from any stages that need attention.
>
> **[2:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=123)** We can also view pipeline metrics by selecting "Analyze" and then "CI/CD analytics".
>
> **[2:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=129)** From this view, we can see a variety of statistics from previous pipeline runs. Along with CI/CD, GitLab has many more features, making it a viable platform for software development, security auditing, and project management.

> [!info]- Semantic Content
>
> **Tools:** gitlab (14), github (1)
> **Code Keywords:** raise (1), public (1), private (1), this, (1), self (1)
> **URLs:** [gitlab.com](https://gitlab.com) (3), [github.com](https://github.com) (1)
> **CLI Commands:** cd (2), git (1)
> **File Paths:** gitlab-ci.yml (1)
> **Code Identifiers:** macos (1)
> **Definitions:** is an  (1)

#### Bitbucket Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=0)** Bitbucket pipelines is part of the Bitbucket Repository service offered by Atlassian, the same company that produces Jira, Confluence, and the self-hosted CI/CD system, Bamboo.
>
> **[0:12](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=12)** Bitbucket provides source code management for Git and Mercurial revision control systems.
>
> **[0:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=19)** The repo service also integrates well with other Atlassian products for tracking issues and project management.
>
> **[0:27](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=27)** Individual users can use Bitbucket for free.
>
> **[0:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=30)** For additional features and support, pricing for small teams and enterprises is reasonable.
>
> **[0:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=36)** Check the Bitbucket website for the current rates.
>
> **[0:40](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=40)** To configure Bitbucket pipelines, projects need to include a configuration file named bitbucket-pipeline.yml, located in the root folder of the repository.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=52)** Pipelines use containers to run the commands based on the configuration in the YAML file.
>
> **[0:58](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=58)** Individual developers and small teams using Bitbucket for free are given 50 minutes of build time per month.
>
> **[1:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=67)** So to keep within that free tier, you'll want to use pipelines for running quick tests and efficient deployments.
>
> **[1:13](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=73)** Let's see how our experimental pipeline is implemented in Bitbucket pipelines.
>
> **[1:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=79)** I've implemented the stages of our experimental pipeline using six steps.
>
> **[1:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=84)** The check and test steps are run in parallel to speed things up a bit.
>
> **[1:30](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=90)** Each step contains a script section that runs the commands implementing that stage of the pipeline.
>
> **[1:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=99)** I'll commit a change to this file to trigger the pipeline.
>
> **[1:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=105)** While the pipeline is running, we get an indicator showing the active step.
>
> **[1:53](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=113)** And if we select an active step, the logs are updated in real-time so we can follow along.
>
> **[2:02](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=122)** While the pipeline runs, let's look at the Deployments view.
>
> **[2:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=128)** The Deployments view gives us a neat way to see the flow of code through our pipeline.
>
> **[2:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=134)** We can use the build number and commit hashes to see which version of our code has been deployed to each environment.
>
> **[2:24](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=144)** Once the build is complete, we can see that all portions of the pipeline have processed the same version of code.
>
> **[2:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=151)** Bitbucket pipelines has some really nice features for showing you the flow of code through your pipeline.
>
> **[2:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=158)** This is great for knowing what's been deployed and what your pipeline is doing in each stage.

> [!info]- Semantic Content
>
> **Tools:** bitbucket (10), jira (1), confluence (1)
> **Code Keywords:** let (2), self (1)
> **CLI Commands:** cd (1), git (1)
> **File Paths:** bitbucket-pipeline.yml (1)
> **Env Vars:** yaml (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** configure (1)

#### Comparing code repository tools
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=0)** CI tools provided by code repositories have the unique advantage of being in the same place that developers store their code.
>
> **[0:08](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=8)** This comes with the productivity benefit of minimizing context switching from one tool to the next.
>
> **[0:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=15)** Tools in this category also benefit from advanced pipeline analytics, increased observability of code deployed to different environments, and the use of custom pipeline components.
>
> **[0:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=28)** Code repo CI tools also provide hosted runners for a variety of operating systems, along with the option for us to use our own self-hosted runners.
>
> **[0:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=39)** Projects using GitHub Actions can include multiple workflows managed in separate files, and these workflows can be triggered by a variety of different activities taking place in the GitHub repo.
>
> **[0:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=52)** GitHub Actions workflows also benefit from the GitHub Marketplace, which is home to thousands of actions that can be used to build pipelines.
>
> **[1:01](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=61)** GitLab CI leans into the YAML configuration format and provides pipeline functionality for the most complex projects.
>
> **[1:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=69)** GitLab CI also includes native tools for analyzing pipeline results and trends.
>
> **[1:15](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=75)** Bitbucket has strong features for observing pipeline execution and deployments to different environments.
>
> **[1:22](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=82)** It also provides integration with Atlassian project management applications.
>
> **[1:28](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=88)** As we wrap up this overview of CI tools, let's discuss how we can use what we've learned to select the right tool.

> [!info]- Semantic Content
>
> **Tools:** github (4), gitlab (2), bitbucket (1)
> **Code Keywords:** self (1), let (1)
> **Env Vars:** yaml (1)
> **Exercise Files:** github repo (1)


### 5. Selecting a CI Tool

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Selecting the right CI tool
> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=0)** We've covered a lot in this course.
>
> **[0:03](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=3)** Let's wind things down by figuring out how to pick the right tool for you and your CI/CD projects.
>
> **[0:10](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=10)** We separated tools into four categories: Self-hosted, Software as a Service, cloud service providers, and code repositories.
>
> **[0:19](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=19)** Self-hosted tools are going to require the most from you in terms of setting up the infrastructure, installing the software, and maintaining everything for as long as you're actively using CI/CD.
>
> **[0:31](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=31)** But they'll also provide the most flexibility in running pipelines that are unique to your requirements.
>
> **[0:38](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=38)** Tools in the Software as a Service category make it easy to get up to speed quickly, because the vendor providing the CI/CD service takes the responsibility of hosting the software for you.
>
> **[0:50](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=50)** Cloud service providers have an edge over other CI/CD vendors because they can offer integrations with cloud-based products and services.
>
> **[0:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=59)** With this option, you can easily have your CI/CD running on the same platform hosting your networks, servers, and databases.
>
> **[1:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=67)** And rounding out the pack are the code repositories that we rely on to store code that eventually becomes software. Using the same platform to manage CI/CD, along with managing our code, can simplify collaboration, issue tracking, and many other parts of the software development process.
>
> **[1:26](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=86)** So when it comes to you and your code, which tool category makes the most sense?
>
> **[1:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=92)** If you're an individual developer, you'll want to minimize the time and effort it takes to get started so you can focus on your code.
>
> **[1:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=99)** Consider using a tool from the Software as a Service or code repository categories.
>
> **[1:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=105)** If you're part of a small team, you'll need CI tools that can handle integration and deployments at scale, while also providing capabilities for project management.
>
> **[1:55](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=115)** Tools from a code repository category will likely be the best fit.
>
> **[1:59](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=119)** If you're trying to find the right CI tool for your business or enterprise, you're free to choose a tool from any of these categories.
>
> **[2:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=127)** However, tools from the self-hosted and cloud service provider categories will give you the most options for integrating CI tools with your business processes and security requirements.
>
> **[2:18](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=138)** You might be thinking all this information is helpful, but it doesn't answer the question, which tool should I pick?
>
> **[2:25](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=145)** Well, I can't answer that question for you, but I can tell you this, experiment and be open to change.
>
> **[2:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=152)** Pick the tool that works for you now and get started.
>
> **[2:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=156)** If it's not the right fit, you can always try another one.
>
> **[2:39](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=159)** As you research CI tools, come back to this course as needed.
>
> **[2:43](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=163)** Be sure to use the exercise files.
>
> **[2:45](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=165)** They have all the information you need for hands-on exploration.
>
> **[2:49](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=169)** Thanks for joining me for this course.
>
> **[2:52](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=172)** I wish you all the best on your journey with continuous integration tools.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (6), make (1), find (1)
> **Code Keywords:** self (3), let (1), require (1), this, (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/continuous-integration-tools-4490242)

## Skills Covered

- Continuous Integration (CI)

## Path Context

### In [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]
← [[DevOps Foundations- Continuous Delivery-Continuous Integration]] | **3 of 3**

## Appears In

- [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]

---

[↑ Back to top](#)