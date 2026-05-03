---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: continuous-delivery-for-cloud-native-java-apps
url: "https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps"
duration_minutes: 201
duration: 3h 21m
level: Intermediate
updated: 1/20/2022
learners: 128720
skills:
  - Cloud-Native Applications
  - Continuous Delivery (CD)
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/continuous-delivery-cloud-native-java-apps-2423655"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGrdDQ5bO2vug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642536526853?e=2147483647&amp;v=beta&amp;t=A4-RNm5DdHN2LseGJhPN2L2JfEhHQ4lDyVxZUItJmhg"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Building Your Java Skills]]'
prev_courses:
  - '[[Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural]]'
next_courses:
  - '[[Nail Your Java Interview]]'
path_nav: '[{"path":"Building Your Java Skills","position":5,"total":6,"prev":"Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural","next":"Nail Your Java Interview"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/cloud-native-applications
  - skill/continuous-delivery-cd
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Continuous%20Delivery%20for%20Cloud%20Native%20Java%20Apps.md)

![Continuous Delivery for Cloud Native Java Apps](https://media.licdn.com/dms/image/v2/C560DAQGrdDQ5bO2vug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1642536526853?e=2147483647&amp;v=beta&amp;t=A4-RNm5DdHN2LseGJhPN2L2JfEhHQ4lDyVxZUItJmhg)

# Continuous Delivery for Cloud Native Java Apps

> Throughout its history, Java has continuously evolved to embrace and adapt to new innovations, from cloud to containers to microservices. This transformation has changed the way teams build and deliver Java applications, and in this course, Kevin Bowersox explains how to establish a continuous delivery pipeline to automate the release process for your applications. Kevin shows how to integrate pop

> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps) | 3h 21m | Intermediate | 129K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Delivering modern Java applications](#delivering-modern-java-applications)
  - [What you should know](#what-you-should-know)
  - [Lab setup](#lab-setup)
- [**1. Foundations of Continuous Delivery**](#1-foundations-of-continuous-delivery) (5 videos)
  - [What is continuous delivery?](#what-is-continuous-delivery)
  - [Principles of continuous delivery](#principles-of-continuous-delivery)
  - [Continuous integration, delivery, and deployment](#continuous-integration-delivery-and-deployment)
  - [Delivery pipelines](#delivery-pipelines)
  - [Modern Java applications](#modern-java-applications)
- [**2. Developing Modern Java Apps**](#2-developing-modern-java-apps) (5 videos)
  - [Developer workflow](#developer-workflow)
  - [Course project overview](#course-project-overview)
  - [Local workstation setup](#local-workstation-setup)
  - [Monorepo vs. polyrepo](#monorepo-vs-polyrepo)
  - [Creating polyrepos in GitHub](#creating-polyrepos-in-github)
- [**3. Building Applications with Gradle**](#3-building-applications-with-gradle) (8 videos)
  - [Build tools](#build-tools)
  - [Getting started with Gradle](#getting-started-with-gradle)
  - [Gradle build structure](#gradle-build-structure)
  - [Gradle Wrapper](#gradle-wrapper)
  - [Gradle tasks and plug-ins](#gradle-tasks-and-plug-ins)
  - [Gradle task graph](#gradle-task-graph)
  - [Managing dependencies with Gradle](#managing-dependencies-with-gradle)
  - [Building Spring Boot applications with Gradle](#building-spring-boot-applications-with-gradle)
- [**4. Packaging Applications with Maven**](#4-packaging-applications-with-maven) (6 videos)
  - [Getting started with Maven](#getting-started-with-maven)
  - [Maven Java configuration](#maven-java-configuration)
  - [Maven plug-ins](#maven-plug-ins)
  - [Maven life cycle and phases](#maven-life-cycle-and-phases)
  - [Adding dependencies with Maven](#adding-dependencies-with-maven)
  - [Building Spring Boot applications with Maven](#building-spring-boot-applications-with-maven)
- [**5. Continuous Integration with Jenkins**](#5-continuous-integration-with-jenkins) (11 videos)
  - [Continuous integration overview](#continuous-integration-overview)
  - [Getting started with Jenkins](#getting-started-with-jenkins)
  - [Creating a Jenkins pipeline](#creating-a-jenkins-pipeline)
  - [Pipeline stages](#pipeline-stages)
  - [Environment variables](#environment-variables)
  - [Jenkins projects](#jenkins-projects)
  - [Maven builds in Jenkins](#maven-builds-in-jenkins)
  - [Containers](#containers)
  - [Creating a Dockerfile](#creating-a-dockerfile)
  - [Building container images in Jenkins](#building-container-images-in-jenkins)
  - [Publishing container images to GitHub packages](#publishing-container-images-to-github-packages)
- [**6. Continuous Delivery with Argo CD**](#6-continuous-delivery-with-argo-cd) (10 videos)
  - [Continuous delivery overview](#continuous-delivery-overview)
  - [Container orchestration](#container-orchestration)
  - [Managing Kubernetes resources with Kustomize](#managing-kubernetes-resources-with-kustomize)
  - [Creating a CD pipeline](#creating-a-cd-pipeline)
  - [Triggering the CD pipeline](#triggering-the-cd-pipeline)
  - [Automated deployment](#automated-deployment)
  - [Configuring Kubernetes security](#configuring-kubernetes-security)
  - [Deploying microservices with Argo CD](#deploying-microservices-with-argo-cd)
  - [Continuous delivery with Argo CD](#continuous-delivery-with-argo-cd)
  - [Continuous deployment with Argo CD](#continuous-deployment-with-argo-cd)
- [**Course Wrap-Up**](#course-wrap-up) (1 videos)
  - [Course wrap-up](#course-wrap-up)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Delivering modern Java applications](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivering-modern-java-applications?u=76281980&t=0)** - [Instructor] The evolution of [[Java]] applications over the past 25 years is extraordinary. The language and its surrounding technologies have adapted to embrace new innovations like cloud, containers and [[Microservices]]. If you haven't followed every twist and turn in this journey, it can be overwhelming when you start to explore these new tools and techniques for delivering software. Hi, I'm Kevin Bowersox. Using [[Continuous Delivery (CD)|continuous delivery]] practices, I've automated the release processes for many applications that run inside containers on [[Kubernetes]]. In this course, I'll show you how tools like Maven, [[Jenkins]] and Docker work together to build and package modern Java apps. You'll also learn how emerging tools like Kustomize and [[Argo CD]] are used to automate their deployments. After watching this course, you'll have a new toolset that will accelerate your team's release cadence without sacrificing the stability of your application. So if you're ready, join me on my [[LinkedIn]] Learning course to learn how continuous delivery can help you deliver cloud native Java applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (2), [[Microservices]] (1), [[Kubernetes]] (1), [[Jenkins]] (1)
> **CLI Commands:** docker (1), cd (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we take a closer look at how to build and deliver [[Java]] apps, let's talk a bit about who this course is for and what you should know ahead of time. The course is designed for Java developers and operations engineers that are responsible for delivering changes to Java applications. It explores the techniques, platforms, and tools used to create an automated delivery process for modern Java apps. The course focuses on the mechanics of an automated pipeline and while we'll discuss testing and verification, the hands-on lessons do leave this part out just to keep things concise. That's because there's a lot of technologies packed into the course that stack on top of each other. And that brings me to my next point. If you're just beginning to learn Java, or you're not familiar with tools like [[Git]], there might be better courses for you at this point. To help us work with these technologies. I've created a lab environment within an [[Ubuntu]] virtual machine. To run the lab you'll need Virtual Box, Vagrant, and the Vagrant virtual box plugin installed on your workstation. The lab has quite a bit of software installed for us to practice delivering modern applications. You'll get hands-on experience with each of these technologies if you follow along with the lessons. If you do intend to complete the hands-on lessons, you'll need a workstation with a bit of horsepower. At a minimum, I would recommend allocating eight gigabytes of RAM and three CPUs to the virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-you-should-know?u=76281980&t=97)** If your machine doesn't meet these requirements, there's still quite a bit you can learn from just watching the course. So that's what you need to know. Let's dive into the lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Git]] (1), [[Ubuntu]] (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** git (1)
> **Env Vars:** ram (1)
> **Speakers:** - [instructor] (1)

#### [Lab setup](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=0)** - [Instructor] If you'd like to follow along, with the hands-on lessons in the course, you'll need to set up the lab environment. To do that, we'll need two pieces of software. The first one is VirtualBox. We'll use it to launch our [[Ubuntu]] virtual machine, that contains the lab. To get started with the VirtualBox install, just click on the downloads link, on the VirtualBox homepage. And then from there, you'll scroll down, until you find this link, for VirtualBox older builds. Here, you'll want to select VirtualBox 6.1 and then you'll find the download links, for various operating systems. Go ahead and select the right operating system for you. I'm going to choose [[Windows]], and that will start to download the software. While that's downloading, let's take a look at our next piece of software. Which is Vagrant. The lab is packaged as a Vagrant box. And we'll use Vagrant to spin it up. So to get started with Vagrant, click on the download button on the homepage, and then scroll down until you find this drop-down. Here you'll want to select, Vagrant 2.2.18 and then select the link, for your operating system. I'll go ahead and choose Windows once again. Now I'm not going to walk you through, the installation for both of these pieces of software. They both have installers, and it's fairly straightforward, to get up and running. Just select all the default options. Once you've done that installation, you can navigate into the exercise files for the course. Now let's talk about these files some.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=93)** Here you'll see the source code, for each of the [[Microservices]], within our course project. Now one thing that you need to know, is that the lab environment contains, the initial copy of these exercise files. But you won't be able to go through, and switch the branches for the different lessons, within the lab. You'll have to do that, on your local workstation, and then copy the changes for a specific lesson, over into the lab. Okay now that we walk through that, let's talk about how we can spin up the lab. Inside of the exercise files, you'll find the lab setup directory. Let's go ahead, and we can open that in a terminal. I'm going to use get bash. Once you've opened the directory, inside the terminal, go ahead and take a look at the Vagrant file. It's what's going to tell Vagrant, how to spin up our lab environment. Now you can leave everything as is, but you may need to adjust some of the memory settings here, for your machine. You can see that I'm running with 16 gigs of Ram, and six CPUs. But you can scale this down, to eight gigs of Ram and four CPUs. (keyboard clicking) Now before we launched the lab, we'll need to install a Vagrant plugin. That plugin, is the Vagrant-vbguest plugin. It's going to help Vagrant work with VirtualBox. So let's go ahead. We can install the plugin. Okay it looks like the plugin has installed. And now we can just go ahead,
>
> **[3:05](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/lab-setup?u=76281980&t=185)** and use Vagrant to launch the VirtualBox, by issuing the Vagrant up command. Now once we execute this command, Vagrant will start to launch, our virtual machine, containing the lab environment. It can take anywhere between 10 and 45 minutes, depending upon the speed of your network connection. So you'll want to keep an eye on it, in case there's a dialogue where you'll have to click okay. While we wait for the lab to spin up, let's go ahead, and we can get started on some of our lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Ubuntu]] (1), [[Microservices]] (1)
> **UI Navigation:** click on (2), scroll down (2), select the (2)
> **Prerequisites:** install (3), you'll need (1), set up (1), setup (1)
> **Exercise Files:** exercise files (3), download the (1), source code (1)
> **CLI Commands:** find (4)
> **Tools:** terminal (2), bash (1)
> **Versions:** 6.1 (1), 2.2.18 (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of Continuous Delivery

[↑ Back to Table of Contents](#table-of-contents)

#### [What is continuous delivery?](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=0)** - [Instructor] Before diving into the techniques and technologies used to deliver [[Java]] applications, let's discuss the big picture of what we're trying to achieve by practicing [[Continuous Delivery (CD)|continuous delivery]]. Continuous delivery is a bit of a mindset shift from what you might've learned about delivering software early in your career. In my college coursework, I was taught the five sequential phases of the [[Software Development]] lifecycle. The first three phases focused on building the entire product and then the final two phases would test and deploy everything that was built. This approach worked in the past, but in today's fast-paced environment, it has some drawbacks. First, towards the end of the development phase, all the code was merged together in one big integration effort. This could take weeks or months until you actually had a working piece of software. Second, most of the feedback on the product came later in the process during the testing phase where it takes longer and costs more to fix an issue with the code. Continuous delivery challenges this idea that software should be developed, tested and delivered sequentially in large chunks. It introduces a set of practices that teams use to evolve their software gradually through the frequent delivery of small incremental changes. That means you'll be performing releases more often, which can sound a bit scary,
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=93)** but automation can help you safely repeat the practice. All of these changes are routinely delivered using an automated pipeline that builds, tests and deploys each new version of the software. That part about testing is important because it validates every change we make to the software. This helps ensure that the pipeline only delivers working software that's ready for release. When teams follow these practices, it changes their delivery cadence. Here, you see a typical quarterly cadence, which has some drawbacks. The cycle time is extended, so we're tempted to cram a bunch of changes into the iteration and release them all at once. This increases the [[Probability]] that something will go wrong at deployment time. Also, the feedback that we receive about the software from acceptance testers and users is limited because the changes only become visible towards the end of the cycle right before we release everything. With continuous delivery, teams fall into a cadence where releasing software changes becomes a frequent part of their routine. It's not this big event that everybody gets stressed over. Each change can be released independently or as part of a small batch. This helps reduce the potential for things to go wrong when we deploy the software. The shorter cycle times and introduction of automation creates tremendous benefits
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/what-is-continuous-delivery?u=76281980&t=187)** for teams and businesses. It increases the speed at which we deliver software and allows new features to come to market faster. It also improves quality because automated testing and increased visibility of the software creates feedback loops that provide information we can use to improve the product constantly. By automating deployment procedures and exercising them more frequently, teams become comfortable performing releases. This helps increase the overall stability of the system. When applied carefully, continuous delivery is an approach for delivering software that will help your team more quickly and safely provide value to your business. Adopting the approach starts with shifting your mindset. So in our next lesson, we'll explore the underlying principles of continuous delivery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (6), [[Java]] (1), [[Software Development]] (1), [[Probability]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Principles of continuous delivery](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=0)** - [Presenter] There are several principles that a successful [[Continuous Delivery (CD)|continuous delivery]] approach is built upon. Let's explore them to learn how they influence the practices teams use to deliver software. The first principle requires that a repeatable process has been engineered for how we develop, build and release our software. So each time we develop and release a new feature, the same set of steps are repeated without any variation. This establishes consistency within our release procedures that allows the steps to be translated into code. So repetitive tasks like builds, tests and deployments are codified so they can be executed by automated processes running on computers. This takes the burden of executing them off of people, but it doesn't mean the people will be replaced. It just frees them up to focus on more valuable work. That takes us to [[Version Control]], which is the single source of truth for project artifacts like source code, scripts and configuration files. Placing these artifacts in diversion control allows the team and automation to collaborate better because everything related to the project is in one managed location that is accessible to everyone. It's also the point where developers commit many small changes, and that event of committing triggers their delivery through the automated pipeline. Keeping changes small in size and numbers does two important things.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=95)** First, releases become more frequent, stable and less stressful because we exercise the practice more often. Second, risk actually decreases because we're not releasing multiple large change sets all at once. This means there's a lot less that can go wrong with a release. If a problem does arise, it's easier to restore the system because we can easily identify the problem amongst the smaller batch and resolve it. This leads us to our final three principles, which help us avoid those types of problems in the first place. To do this, we engineer quality into the delivery process to verify each change that flows through it is production-worthy. This is achieved by shifting practices like linting and automated testing to the front of the process, where we can identify and fix problems earlier. So we'll no longer discover a bunch of issues in the final days before release, when it's too late to actually fix them. Continuous delivery also focuses on the quality of the team's delivery processes, which are constantly re-engineered and improved upon. If something does go wrong within the process, the situation is evaluated, and ideas from across the organization are collected to introduce better practices that fix the problem in the long term and prevent it from ever happening again. The release process is constantly evolving to optimize its stability
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/principles-of-continuous-delivery?u=76281980&t=189)** and ultimately the quality of the software it delivers. That doesn't happen in a vacuum. It requires collaboration from everyone involved with developing, testing and releasing the software. So regardless of whether you work on a development, testing or operations team, in continuous delivery, you have a common goal to release higher quality software faster and more reliably.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Version Control]] (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### [Continuous integration, delivery, and deployment](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=0)** - [Presenter] [[Continuous Delivery (CD)|Continuous delivery]] is closely related to the practices of [[Continuous Integration (CI)|continuous integration]] and continuous deployment. These three concepts commonly fall under the umbrella of the term CICD. It gets a little bit confusing because continuous delivery and continuous deployment are often used interchangeably and have the same acronym. So let's first unpack these terms then we'll talk about the different ways that people use them. When teams practice continuous integration, they develop small changes that are frequently merged into a shared branch in their code repository. The goal is for developers to commit to this branch at least once per day, but ideally they're checking in multiple times each day. Each of these small commits triggers the automated pipeline, which pulls the source code from the repository onto a separate server where it's compiled and tested. If an issue is detected by the automated tests or the automated build breaks, the developer is notified immediately by the pipeline. At this point, getting the code base back to a working state becomes the top priority and they stop everything they're working on to fix it. If the test pass, the software's packaged into an artifact and placed into a repository. After the CI process builds this artifact, continuous delivery and continuous deployment enter the picture. However, these practices
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=92)** are a little bit less straightforward. In general, both concepts relate to the automated steps within a pipeline that deliver the packaged artifact produced by the CI process into the production environment. The difference between the two is how much automation is built into the pipeline. Teams practicing continuous delivery will automate everything but the last step in the process that deploys the artifact into production. With continuous delivery, this step must be manually triggered, typically by pushing a button or merging a branch, which causes the release of the new version into production. Continuous deployment is very similar. However, that last step which deploys the software into production, it's fully automated. One way to picture it is to think of each practice taking the automation further or extending it further into the delivery process. There's a lot of ways we can think about it and often there's a bit of confusion between continuous delivery and continuous deployment, because the two terms are used in a variety of different ways. Sometimes you'll hear continuous integration, delivery and deployment referred to as separate steps or processes that execute sequentially, one after the other. Other times, you'll hear continuous delivery and deployment referred to as interchangeable processes where we can select one or the other to perform after continuous integration. To add to the confusion,
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-delivery-and-deployment?u=76281980&t=187)** continuous delivery is sometimes referred to as an overarching process where continuous integration and deployment are executed as sub-processes within it. In discussions regarding CICD, it's important to be flexible with the terminology, because these processes have unique meanings for different teams and organizations. It's tempting to look for one official CICD pattern that applies in every scenario, but it's just a path that leads to frustration because it doesn't exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (8), [[Continuous Integration (CI)|Continuous integration]] (5)
> **Env Vars:** cicd (3)
> **Analogies:** picture (2)
> **Exercise Files:** source code (1)
> **Speakers:** - [presenter] (1)

#### [Delivery pipelines](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=0)** - [Instructor] Without automation, the end to end process for releasing a new feature can be drawn out and cumbersome, which can get pretty frustrating for everybody involved. Within a large enterprise, it typically includes multiple handoffs between the development, testing, security and operations teams, which each have a step to complete in the process. These handoffs can spill over into lengthy email chains about who's on vacation or when a particular task will be completed. This tedious process prolongs the delivery of new features, and it becomes a scramble to make the release state. In [[Continuous Delivery (CD)|continuous delivery]], a pipeline is used to accelerate and remove waste from the process that takes new code from [[Version Control]] and makes it available as a new feature for end users. The pipeline models each step in the delivery process and automates them to create a rapid, repeatable and reliable mechanism for releasing changes to software. It's designed to identify quality issues and fail quickly once they're discovered. This gives us more confidence in the software that's delivered by the pipeline. It's important to point out that every organization's pipeline will look different because it will be tailored for their organizational processes. So let's take a look at a very basic delivery process and examine where the pipeline fits in. In this process, we have three phases. One for the developer workflow, another for [[Continuous Integration (CI)|continuous integration]], and finally, one for continuous delivery or deployment.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/delivery-pipelines?u=76281980&t=96)** A change enters the pipeline after a developer has written and committed the code for a new feature into the source code repository. From there, the pipeline advances to the new version of the source code through the steps in the continuous integration process, which outputs an artifact that packages the new version of the software. Next, the pipeline progresses through the steps in the continuous delivery or deployment stage. This makes the new software available to end users. If a step anywhere in the pipeline fails, the change stops advancing through it, and feedback is delivered to the developer regarding the issue with their new feature. These feedback mechanisms are built in throughout the pipeline, so developers quickly get information about the quality of their software. As we complete each step in the process, more confidence in the artifact builds as we get closer to releasing it to production. So that's the pipeline at a high level. Basically, it models the end-to-end process for releasing a software change and facilitates its execution through a heavy dose of automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Continuous Integration (CI)|Continuous integration]] (2), [[Version Control]] (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Modern Java applications](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=0)** - [Instructor] Since the inception of [[Java]], a number of shifts in technology have influenced the way that we build, deliver, and operate modern Java applications. These shifts are best summarized by the term "cloud native", which is used to describe software that is highly distributed, modular, and resilient. Let's quickly walk through the changes that caused Java applications to evolve towards this approach. As we've briefly discussed, a waterfall methodology was once the standard used to deliver an app. This approach was painful, especially towards the end of the project when all of the code needed to be integrated together in one big messy merge. If the project actually survived that phase, major problems would then occur when the software was thrown over the wall to the testing and operations teams. It also wasn't very flexible. If the customer's needs changed in the middle of a project, you just kept on building what you agreed to a few quarters ago. So at the end of the project you ran the risk of delivering the wrong product. This led teams to adopt new ways of delivering software like [[Agile Development|Agile]] and [[DevOps]]. Agile complements [[Continuous Delivery (CD)|continuous delivery]] very well because the idea is to develop in iterations where work is broken down into smaller pieces. So it naturally produces the small changes that we want to deliver through a CI/CD pipeline. DevOps also emerged slightly after Agile.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=94)** It advocated for best practices like early collaboration between development, [[Quality Assurance]], and operations teams. In fact, one of the key practices in a DevOps approach is to automate common testing and operations tasks into a CI/CD pipeline so you can deliver faster. One of the historical barriers to delivering faster was the amount of time it took to provision or change infrastructure in a corporate data center. Getting a new virtual machine or changing a network firewall could easily delay a project schedule for weeks or months until the changes were approved and manually performed. The emergence of cloud platforms changed this equation. Now [[Virtual Machines]] can be provisioned in seconds and easily scaled up if they require more resources. The cloud also made many capabilities like networking and security available as easy to use services that operate at a global scale. New technologies also emerged that changed how applications were packaged and deployed. Traditionally, Java applications in the enterprise were deployed to application servers that were bundled within bloated middleware platforms that were expensive proprietary technologies. Often these platforms were not configured the same in different environments and the one-off configurations could cause a release to fail. The introduction of container-based technologies like Docker and [[Kubernetes]]
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/modern-java-applications?u=76281980&t=188)** changed how we package Java applications. Using containers, we can package applications and their environments together, which simplifies how we deploy and run them. This made it more feasible to build distributed systems and engineers now had another option besides the traditional monolith. Monoliths are still a valid architecture in many scenarios, but their bulkiness doesn't promote the rapid delivery of changes that we hope to achieve with continuous delivery. Highly de-coupled [[Microservices]] have emerged as the best approach for teams that want to deploy small portions of their system frequently. Microservice architectures consists of small services that can be developed and deployed independently of one another, which allows our systems to be changed more easily. These evolutions, which we'll refer to as the cloud native approach, have caused fundamental changes for how we build and deliver modern Java applications. As we walk through the different phases in the delivery process throughout our course project, I'll highlight where the cloud native approach has influenced delivery practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Agile Development|Agile]] (3), [[DevOps]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (2), [[Quality Assurance]] (1)
> **CLI Commands:** cd (2), docker (1)
> **Speakers:** - [instructor] (1)


### 2. Developing Modern Java Apps

[↑ Back to Table of Contents](#table-of-contents)

#### [Developer workflow](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=0)** - [Instructor] Let's walk through the steps in the development workflow to better understand how it fits into an end-to-end delivery process. To do this, we'll return back to the basic delivery process that we explored in the last lesson. Although it's technically not part of the pipeline, a developer's workflow plays an important role in the delivery process because within it, we can build in some practices that improve the quality of code before it ever enters the pipeline. The changes a developer introduces into the pipeline start off as small stories for new features, which are planned with [[Agile Development|Agile]] project management tools like [[Jira]] or Version One. After being assigned a story, a developer begins writing the code for it in an IDE like Eclipse or IntelliJ. IDEs make writing code more efficient by providing features like auto-complete and tools for refactoring. At this point in the process, developers are frequently compiling and running the application locally as they perform their work with the help of build tools like [[Gradle]] or Maven. Here, the [[Dependency Management]] features within these build tools are used to pull in other libraries through their integration with the IDE. Within their IDE, developers can also add plugins to analyze their source code as it's being written. These tools can enforce style guidelines or detect common programming errors, which help improve code quality. Most [[Java]] IDEs will also provide support for [[JUnit]],
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/developer-workflow?u=76281980&t=95)** which is a [[Unit Testing]] framework that developers can use to ensure their new code functions properly. Before checking into source control, developers should scan their code and run the unit test suite to prevent any problems from making their way into the repository. After validating their changes, developers should submit a pull request so that it can be reviewed by their team before it's merged into a shared branch in the repository. When practicing [[Continuous Delivery (CD)|continuous delivery]], developers are cycling through this workflow multiple times per day to deliver small changes to the code base, which helps avoid complicated merges towards the end of a project. By following these best practices in their workflow, developers can improve the quality of their code before it ever enters the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1), [[Jira]] (1), [[Gradle]] (1), [[Dependency Management]] (1), [[Java]] (1)
> **Env Vars:** ide (3)
> **Tools:** jira (1), intellij (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Course project overview](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=0)** - [Instructor] Throughout the course, we'll be taking a small application for the Landon Hotel through the end-to-end [[Continuous Delivery (CD)|continuous delivery]] process. Landon Hotel is a fictional hotel, and the application will be used by the hotel to view bookings that guests make for rooms. The application is designed with several features used in modern [[Java]] applications that you should be aware of when working with it. First, it's a distributed system built with a microservice architecture. And to be honest, it's a little bit overboard for this app, but it will allow us to focus on the mechanics of the delivery process for this style of application. Microservice architectures break systems down into small services that run in separate processes, but they're able to communicate with each other through API calls over a network. This network of loosely coupled services [[Forms]] the larger system. Since the services run independently, we can develop and release them separately from each other, which is very helpful for decoupling delivery times. So here's kind of what our app would look like as a monolith. And then you can see it in a microservice architecture. The big thing to keep in mind here is that each of our services is a separate code base that is built and released independently from the others. Here's another view of the architecture that shows the communication between the services. There's a small web application that serves as a front-end,
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=92)** and it makes calls to three services for information about guests, rooms, and bookings. Between these services, there's a little bit of east-west traffic because the booking API fetches some information about rooms, and guess from those other services. Each microservice is a separate [[Spring Boot]] project that uses either Spring's web [[Flux]] or web framework to build a restful API. Spring Boot makes it much easier to include Spring projects and their dependencies within an application by using starter dependencies. These help pull all of the libraries that you'll need through build tools like Maven or [[Gradle]]. Spring Boot also automatically configures different spring components for you right out of the box. But if you need to overwrite that configuration, you can't. By default, Spring Boot packages applications into an executable jar, and for web applications, it automatically includes support for embedded servers like Tomcat or Jetty. Let's talk about executable jars in a little bit more detail because it's how we package modern Java applications. In the past, Java web applications were packaged within a WAR file that contained resources like Servlets, JSPs, and other configuration that was necessary to run the app. Once an application was packaged into a WAR file, it could be deployed, and run on a Servlet Container or a full-blown Java EE Application Server.
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=186)** This server was installed as a separate piece of software on the host. For years it was common to package, deploy, and run Java applications this way, but then things shifted, and it became more common to use an embedded web server or Servlet Container instead of running everything on a standalone application server. An embedded server makes a Servlet Container like Tomcat or a web server like Neti another part of the application because it's packaged as a jar within the app. Using the servers programmatic API allows you to start it up right within your source code. These changes required a new way of packaging, Java web applications, the executable jar. An executable jar also known as a fat jar, allows an application to package libraries like Spring in the same package as the applications classes. The embedded web server can also be included in this package, which gives the jar everything it needs to run the web application on its own. Running an executable jar is a simple one-line command, which makes it easy to start, scale and deploy, especially when it's packaged in a Docker container. By default, Spring Boot will package applications as an executable jar. It does this through a plugin that you include in either your Maven or Gradle build. We'll cover Maven and Gradle in separate chapters so I won't go into the details now, but they will be an important part
>
> **[4:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-project-overview?u=76281980&t=280)** of our local workflow as we develop the application for the course project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Spring Boot]] (5), [[Gradle]] (3), [[Forms]] (1), [[Flux]] (1)
> **Env Vars:** api (4), war (2)
> **Definitions:** is a  (4), known as (1)
> **CLI Commands:** make (1), docker (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Local workstation setup](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=0)** - [Instructor] Let's set up our labs so that we can do some development on the Landon Hotel app. We'll be doing all of our work within the virtual machine that we provisioned with Vagrant. To log in, just click on the Vagrant user and then, use the password Vagrant. Inside of the lab, you'll find that the exercise files for the course have been placed on the desktop. This directory contains the source code for each of the [[Microservices]] that we'll use within the Landon Hotel app. Let's go ahead and import these projects into Eclipse, which is also included on the desktop. Just double-click on the Eclipse folder, and then, click on this icon to launch the IDE. Once Eclipse launches, you can import the projects by going to File, then Import, and scrolling down within this dialog where you'll find the Import existing Maven projects option. Select that and hit Next. This will open another dialogue where we can navigate to our exercise files directory. So click on Browse, and then, locate the exercise files directory. You'll notice it already took me there. Once you've found it, just go ahead and click on Open, and then, you'll notice that Eclipse pulls in our different Maven projects that it found within this directory. That includes the booking service and the hotel web app. You'll see that the guest service and the room service are missing. That's because they're works in progress that we'll build and deliver throughout the course.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=94)** So for now, just go ahead and click on Finish to import these two projects. If we look at the structure of these two projects, we can tell that they're built with Maven. That's because they have a pom.xml file right within their root directory. Let's take a peek at their configuration and open up the POM. The first thing I'll point out about the project is that it uses Spring, and I can tell that by the [[Spring Boot]] starter parent POM, which is used by Spring Boot to quickly get us up and running with the [[Spring Framework]]. If we navigate to the dependency hierarchy, we can see some of the other Spring projects that are included in this project. So there you see [[Spring Data]] and Spring Webflux. You'll also notice that an embedded Tomcat servlet container is included. We'll use this to run our web application. Now I want to call your attention to one more important dependency. That's the Spring Boot auto configure dependency. It's used by Spring Boot to automatically provide some default configuration for the projects that it detects on our class path. If we want to see a little bit more about how this works, let's click on the Overview tab, and from here, we can see the Spring Boot starter parent POM by clicking on this button. You'll notice that the Spring Boot starter parent POM includes its own parent POM.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=189)** And if we want to see the full configuration of both POMs, we can click on the Effective POM tab. Now, as we scroll down in this file, you'll start to notice all these different versions for different libraries that we might include within a Spring project. Let's talk a little bit about what this does for us. So let's say that you wanted to use Spring Data. By default, Spring Boot is going to provide the version that is compatible with the other libraries that it specifies. So you don't have to worry exactly about what version of Hibernate to include in your project. Spring Boot resolves those compatibility issues between the versions for you. By default, Spring Boot packages our applications into an executable JAR that uses an embedded server. If we take a look at our hotel web app application class, located in the com.[[LinkedIn]].javacd package, we can see a little bit about how this works. You'll notice the Spring Boot application annotation on this class. This indicates the Spring Boot. It's where the main method is located that will launch our application. And this spins up the web server. It's just a plain old [[Java]] class, so we can right click on it, go to Run as, and then, Java application to start it. This will cause Eclipse to start to launch the app.
>
> **[4:48](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=288)** Now the application will have a problem initially. It's going to attempt to bind to Port 8080, and something else on the virtual machine is already bound there, so we have a port conflict. Within Spring Boot, we can use a local profile to resolve this problem. So inside of the source main resources directory, you'll notice these two files, application.properties and application-local.properties. The application.properties file is where we specify different configuration properties for our app. If we want to add a different configuration profile, we just add a suffix and here it's dash local. Let's open that up. Inside of this file you'll see that I've provided a different port configuration for our local profile. If we want to apply this profile when we run the app, we can go into the run configurations for Eclipse. Just click on Run, then go to Run configurations, and this dialog will open. Here we see the run configuration for the application. We can adjust the profile it uses by clicking on the Arguments tab. Here I'm going to provide a VM argument. To do this, we specified dash D then the name of the argument, which is going to be spring.profiles.active, then just use the equal sign and provide the name of the profile, which in this case is local. Once you have that in place,
>
> **[6:20](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/local-workstation-setup?u=76281980&t=380)** go ahead and run the application. There we see the app spinning up, and I'm going to start to open up a browser so that we can hit it once it's launched. Inside the browser, just specify the local host in the URL bar and hit it on Port 8884. There we see the web application. Okay, let's go ahead and we'll run the booking service. So I'll just navigate into the directory. And then, within the com.linkedin.javacd package, I'm going to go ahead and run this application as a Java app. This will build the initial run configuration, and then, I'll need to adjust it. Okay, here we can see we got the problem. Now let's go to the Run configurations. Then, I'm going to select the Booking service application run configuration, click on the Arguments tab, and then, provide the argument to specify our profile. Okay, that should do it. Let's go ahead and run the app. Now the service is spinning up, and if we refresh the application within the browser, we start to see information come in from the booking service. So it was much easier to get this app up and running compared to how we might have done it 10 years ago. The key ingredients that made our developer workflow such a nice experience were Spring Boot and Maven.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (13), [[Java]] (3), [[Spring Data]] (2), [[LinkedIn]] (2), [[Microservices]] (1)
> **UI Navigation:** click on (10), go to (3), navigate to (2), double-click (1), scroll down (1)
> **Env Vars:** pom (6), ide (1), jar (1), url (1)
> **Exercise Files:** exercise files (3), source code (1)
> **CLI Commands:** find (2)
> **Ports:** port 8080 (1), port 8884 (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** pom.xml (1)

#### [Monorepo vs. polyrepo](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=0)** - [Instructor] The source code repository is a key component within our [[Continuous Delivery (CD)|continuous delivery]] process because it's where team members integrate code that the pipeline retrieves when it kicks off the build. To function well in a pipeline, the code repository must be hosted in a central location that provides other features like security, pull requests, and code reviews. These features are commonly found in hosting platforms like [[GitHub]], which we'll be using to manage our course project. Since we're using a microservice architecture, we now have four separate code bases, one for each of the services. So the choice isn't as straightforward as storing the code for a monolith, which by default would be stored in a single repository that contains the entire code base. Instead, we'll need to choose between storing our service code in a monorepo or a polyrepo. Let's talk about these two options, starting with the monorepo. A monorepo stores the code for every service in the system in one large repository. This helps make the code base more accessible to the entire development team, since it's easy to pull all the code at once. Developers can easily review the code in other services, and if there's shared code, they can change it directly inside the code base. There are drawbacks to a monorepo. Changing shared code in the repository can impact multiple services and trigger large refactoring efforts across the code. Also, depending upon the CI platform you use,
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/monorepo-vs-polyrepo?u=76281980&t=96)** it may need a special plugin or customization to handle the monorepo. The alternative to a monorepo is a polyrepo, which stores each service in its own repository. Having a separate repository for each service enforces decoupling between them. It also helps keep the services independent and can eliminate some of the problems caused by sharing code. Unfortunately, when using multirepos, it becomes harder to access and evaluate the entire code base. That's because it's stored across many repositories, which might require permissions to access. In our project, we'll be using the multirepo approach because it's more straightforward to work with our CI tool, [[Jenkins]]. So let's dive into our next lesson to set up our repos for each service inside of GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Jenkins]] (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating polyrepos in GitHub](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=0)** - [Instructor] Let's set up our poly repo within [[GitHub]] to store the source code for each of our [[Microservices]]. To help with that, we're going to use a GitHub organization, which will have a repository for each service. To create an organization within GitHub, just click on your profile, and then come down to your organizations and click here. If you don't see this option, you'll need to set up your first organization using the instructions found at the link below. Next, we'll click on the new organization button to get the process started. The first thing we'll need to do is select the type of organization that we'd like to create. I'm going to use a free organization, so I'll click on this button. Next, we'll need to provide a name for our new organization. I'm going to name mine hotel-landon-kb just to make the name unique. Then I'll go ahead and provide my email, and then indicate that I'm using a personal account. Next, I'll need to solve a quick puzzle, and then I can click on the next button to create the organization. All right, it looks like it created. Now let's move on and set up the security configuration within GitHub that some of our tools in the pipeline will need. The first piece of configuration we'll need is a personal access token. So click on your profile, and then come down to Settings, and within the settings menu, click on developer settings.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=95)** Here you'll find the option on the sidebar to start building a personal access token. Click on that and then click generate new token. Here I'm just going to name my token lab and then I'll specify that it will expire in 90 days. The next thing I'll need to do is select some scopes to give the token different permissions that our tools will need. The first one will be the repo scope, then write:packages, then admin:org, admin:public_key and finally, user. Once you've selected those, just click on generate token here at the bottom of the screen. This will create our new personal access token, and we can copy it by clicking on this button. Now, we'll want to put this somewhere convenient where we can access it because we'll need it several times throughout the course. So I'm just going to go ahead and write my token into a file named pat within my home directory. And there we can see it. Okay, the next thing we'll need to do is set up an SSH key that some of our tools can use to authenticate with GitHub. To do that, I'm going to open a console within the exercise files directory. If we take a look within this directory, you'll notice the setup_ssh script. This script can help us generate our SSH key. Let's go ahead and we can execute the script. Okay, it looks like it executed,
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=190)** and it placed our SSH key, which is going to be an RSA token inside of our .ssh folder, and then for convenience, it also wrote it to our home directory where we have our public and private keys for the RSA token. We're going to need the value of the public key in order to place it within GitHub. So I'm going to go ahead and print it to the console. And then I'll copy the key to my clipboard and we'll navigate back to GitHub. And within the settings again, I'm going to go down to the SSH and GPG keys. Here I can click on the new SSH key in order to add the public key into this form. All right, and then I just need to give the key a name. I'll call it lab once again. Then I just need to click on the add SSH key button, and there we can see it's registered with GitHub. Now that the key is registered, we can start to build out each of the repositories for our microservices. To help us with that, I've created another script, setup_repos. Let's just take a look at what this script does. The first thing I'll point out is that the script accepts three parameters. The first is going to be our email. The second will be our username, and then the third will be the name of our GitHub organization.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=283)** It's used to adjust some YAML files and also it's used in this line that creates a new repository within our GitHub organization. Now, to do that, it uses the GitHub [[CLI]]. This is a tool that we can use to work with GitHub from the command line. You can do a lot of things, like create pull requests or even create repositories like we're going to do. The script is going to iterate through each directory within our exercise files and create a new repository for it. And that's how we're going to get each repository in our organization for our microservices. Now, to use the script, we'll need to log in with the GitHub client. To do that, you'll use the GitHub client's auth command, and then you'll specify that you want to log in. Next, you'll select [GitHub.com](https://GitHub.com). Then SSH. Then select the RSA key. And then finally, we'll use an authentication token to log in. That's going to be the personal access token we created earlier. So let's go ahead and print that to the console. And then I'm just going to copy it to my clipboard. And then I'll paste it here in the console so we can authenticate with GitHub. Excellent, it looks like we're authenticated. Okay, let's go ahead and run the script to set up our repositories. First, I'll provide my email address,
>
> **[6:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-polyrepos-in-github?u=76281980&t=377)** then my username, and then finally, I'll specify the name of my organization within GitHub. Okay, I'll go ahead and execute the script and it will begin to create repositories and check in the source code files for each of our microservices. Okay, it looks like the script is finished setting up our poly repos. Let's navigate back over to GitHub and we can check out the organization to see them. So just click on your profile, then your organizations, and then click on the new organization that you created. There's all of the repositories for our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (18), [[Microservices]] (4), [[CLI]] (1)
> **Tools:** github (18), command line (1)
> **UI Navigation:** click on (12), select the (2)
> **Env Vars:** ssh (7), rsa (3), gpg (1), yaml (1), cli (1)
> **CLI Commands:** ssh (8), make (1), find (1)
> **Prerequisites:** set up (5), you'll need (1)
> **Exercise Files:** source code (2), exercise files (2)
> **Code Identifiers:** public_key (1), setup_ssh (1), setup_repos (1)


### 3. Building Applications with Gradle

[↑ Back to Table of Contents](#table-of-contents)

#### [Build tools](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=0)** - [Narrator] In the next two chapters of the course, we're going to explore Maven and [[Gradle]], which are two popular build tools used with [[Java]]. Before diving in to those specific technologies, let's take a high-level look at what we can expect from a build tool and how they're used. At a high level, build tools allow us to define how our software project is converted into an artifact that we can distribute and run on other platforms. It makes this process repeatable by allowing us to define a configuration file or a build script that contains information about our project and the tasks necessary to turn its source code into an artifact. Using the configuration file, the build tool can then automate the execution of those tasks to ensure that every time we perform a build, it's executed consistently. Most build tools have an ecosystem of plugins that can be included within our configuration file to easily perform different actions during our build lifecycle. Another great feature of some build tools, like Gradle and Maven, is their [[Dependency Management]] systems. These make it much easier to include external libraries within our projects. Here's how dependency management works at a high level. Imagine that we wanted to use [[Selenium]] for some testing within our project. We would just add its dependency information within the configuration file for our build tool. Selenium itself might have a dependency on another library, let's say, the Selenium IE driver,
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=97)** which in turn might use another library, like Guava. When one module depends on another like this, it's known as a transitive dependency. All of these libraries need to find their way onto the class path when we run our application, and it can be painful to manually manage this graph, especially to get all the versions lined up just right. A build tool makes that easy. It walks the dependency graph for you and automatically pulls in the transitive dependencies based on [[Metadata]] each dependency declares in its own configuration. So at a high level, it kind of looks like this. We define a configuration file for the build tool that describes our project, things like what dependencies the project needs, what tasks to complete when building the source, and what plugins we use in those tasks. The build tool takes this configuration file and all of the resources within our project and starts executing the build. If it needs dependencies, it reaches out to an artifact repository and pulls them in during the build process. Once the build is complete, it produces an artifact that packages our compiled software. There are two primary ways a build tool is used. First, developers typically use them during the development workflow to build and assemble their software locally. This is normally performed via integration with their IDE, and they might not even be fully aware
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/build-tools?u=76281980&t=191)** they're using a build tool in the background. Build tools also play an important role in the CI process, where they compile and package our source code for each check-in on an isolated server. This is typically triggered by an automation server, like [[Jenkins]]. The isolated server provides us a clean environment to build the software without any influence from one-off configurations that might exist on a developer workstation. These high-level concepts will apply to our work with both Maven and Gradle, so keep them in mind during the upcoming lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (3), [[Selenium]] (3), [[Dependency Management]] (2), [[Java]] (1), [[Metadata]] (1)
> **CLI Commands:** make (1), find (1)
> **Exercise Files:** source code (2)
> **Env Vars:** ide (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Getting started with Gradle](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=0)** - [Instructor] One of the most popular build tools used with [[Java]] is [[Gradle]]. I find the best way to get started with Gradle is to just dive right in. So let's start by installing the software and setting up a simple project. To begin our installation, we'll start on the Gradle homepage and just click on the install Gradle button. Here we'll find the instructions to install Gradle on several different operating systems. If you are installing Gradle on [[Windows]], you would select the link to install manually and then follow those instructions. But since our lab is using [[Linux]], we can click on the option to install with a package manager. You'll notice that within the instructions, it recommends installing Gradle using SDKMAN!. So let's navigate over to the SDKMAN! homepage, and we can click on the install button in the menu in order to get started. Here we'll find a script that will install SDKMAN! on our Linux workstation. Let's just go ahead and copy that, and then we'll navigate over to a terminal where I'll paste the script and then just hit enter to execute it. Okay, it looks like SDKMAN! has installed. In order to use it in our current terminal, we'll need to execute this command. So let's go ahead and copy that, then I'll clear my terminal, paste the script, and execute it. Okay, now we should have SDKMAN! available within this terminal. If we return to the Gradle installation documentation,
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=94)** you'll see our next step is to use SDKMAN! to install Gradle 7.2. So I'm going to copy this command, and then I'll return to the terminal and paste it where I can execute it. It looks like Gradle is starting to install. Okay, it looks like the Gradle installation finished. Let's just go ahead and we can verify that by running the gradle dash dash version command. Okay, we can see that Gradle 7.2 is installed on our workstation. Now let's move on to creating a simple project. To do that, we're going to work within our exercise files directory. That's where we'll create our new project. The project is going to be named Sandbox, so I'm going to go ahead and create a directory named Sandbox inside the exercise files directory. Then we can just navigate into the Sandbox directory, and here's where we'll start to use Gradle to build the new project. To help with that, we can use the gradle init command. It's going to walk us through an interactive menu where we can set up the different configuration for our project. Let's get started with that. The first thing we'll need to specify is the type of Gradle project that we want to create. And this is going to determine the directory structure that Gradle uses when it initializes our project. Now we're only interested in an application, so I'm going to select the second option. Then we'll need to specify what language
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=188)** our project is going to be using. Since this is a Java course, I'm going to select option three for Java. Then we'll need to determine whether or not we would like sub projects within our Gradle build. We're only going to have one application within this Gradle build, so I'll select the first option. Then it's going to ask us the DSL that we'd like to use for our build scripts. A DSL is a domain specific language which, in this case, is a small language built specifically for using Gradle. Gradle has a DSL for both Groovy and [[Kotlin]]. Let's go ahead and we'll use the Groovy DSL for our project, so I'll select option one. Next, it's going to ask us to identify our testing framework. I'm going to use [[JUnit]] Jupiter, which is option four. Then it will need the name of our project. We're just going to call this Sandbox, so I'm going to go with the default option by hitting enter. Finally, it's going to ask us the package name where our source code will be placed. For that, I'm going to use com.[[LinkedIn]].javacd. Once I've entered that value, I'll hit enter, and Gradle builds out our new project. Let's take a look. So if we look inside the Sandbox directory, we see some files related to our Gradle build. We'll get into those later. For now, let's run our first Gradle build. Just type Gradle, and then build, and hit enter,
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-gradle?u=76281980&t=283)** and you'll see that Gradle will begin to compile our source code and build our project. There it looks like it completed successfully. So now we're up and running with Gradle, and we just completed our first build. Let's dive into the details of how that build works over the upcoming lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (27), [[Java]] (3), [[Linux]] (2), [[Windows]] (1), [[Kotlin]] (1)
> **Env Vars:** sdkman (6), dsl (4)
> **Prerequisites:** install (8), set up (1)
> **UI Navigation:** click on (3), select the (3), in the menu (1)
> **Tools:** terminal (5)
> **Exercise Files:** exercise files (2), source code (2)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)

#### [Gradle build structure](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=0)** - Let's take a closer look at the structure and key files within our new [[Gradle]] build. When we configured our build with Gradle's init plugin, it created a multi-project build, and here we can see its layout. This project type is what Gradle recommends for most builds. Within the root of this build we'll find the settings dot Gradle file. It defines the configuration and layout of our multi project build. Let's take a closer look at how this configuration works. Within this file, we can define other sub projects within the build. Those sub projects are added by using the include statement that we see here. Currently within our build, we only have a single sub project named app, but we could include others by adding another include statement, if we needed to. If we return to the root of our project and inspect it, you'll notice it contains the app directory, which corresponds with the sub project in the settings dot Gradle file. Let's take a closer look at the layout and contents of the sub project. This directory contains the sub projects build script and a directory that holds all of the source files for the project. The build script is located inside the root of the sub
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=94)** project within a file named build dot gradle. Let's open that up and take a quick look at it. You'll recall that when we initialized our project, we selected the groovy DSL. Here you can get a feel for how it's used to define resources like dependencies, plugins, and tasks that are necessary to build our sub project. When you're using Gradle, the build script is very important and we'll spend quite a bit of time working with it. For now, let's return to our project and take a closer look at the structure of our app sub project. The Gradle [[Java]] plugins define a default structure for where the different source files are located within this directory. They expect us to place the source code and configuration files for the application and its tests within the source directory. By default, your application source code is placed inside of the source main Java directory and then a separate directory, source test Java, is where the source code for the tests are placed. Inside of both of these directories is a resources directory, where we can provide things like configuration files for the application or the tests. If you need to, you can override these directories by configuring custom locations, known as source sets. However, for most cases it's best to stick with this layout. These standard directory conventions allow Gradle to find files it needs for specific tasks,
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-build-structure?u=76281980&t=189)** like compiling our source code. Now that we've seen the structure of a Gradle build, and some of its conventions, let's move on to the next lesson to learn another way that we can perform a build with Gradle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (11), [[Java]] (3)
> **Exercise Files:** source code (4)
> **CLI Commands:** find (2)
> **Env Vars:** dsl (1)
> **Definitions:** known as (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - let (1)

#### [Gradle Wrapper](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=0)** - When executing builds with [[Gradle]], there are two options to choose from. One option is to use the Gradle build command, like we've already seen. This uses the Gradle distribution that we installed manually on our workstation. The other option is to use the Gradle Wrapper. The Gradle Wrapper is a script that downloads a specific version of Gradle which is then used to execute builds and other tasks. It's a way to package the Gradle software, right alongside your source code. You can see the script for the Gradle Wrapper here, right within the root of our project. There's also a batch script, if you're working with [[Windows]]. These scripts were placed inside the project by default, when we created it with the Gradle in it task. The task also creates the Gradle Wrapper directory and inside of it we find two files. One is a properties file, which specifies the version of Gradle that we would like to download and install with the Wrapper. And the other's a jar file that actually does the download for us. It's recommended to include the Wrapper in your projects because it allows developers to skip the manual Gradle installation that we performed. It also ensures the same version of Gradle is used every time the build is executed for the project. Let's go ahead and kick off a build with the Gradle Wrapper. To do that, we just use the Wrapper script, and then we pass it a task to execute.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=95)** Now, in this case, it's going to be the build task, but we can pass the Wrapper any tasks that we would perform using a normal Gradle installation. So I'm just going to go ahead and kick off that task and we can see our build start to execute and there it's finished. Now you might be wondering what actually happened. Well let's take a closer look. Inside of our sub-project app. You'll notice a new directory named build. This directory contains all of the artifacts that were produced when we executed our Gradle build. Let's take a look inside this directory to see what was produced. Now here, I'm just going to spotlight a few important things. First, you'll notice that the classes for our Application source code were placed within the app build classes directory. So here's the main class for the app. And then you'll also notice that the tests were compiled that's because they were ran as part of the build. And if we navigate down within the directory, you'll actually see that a report was generated about our testing from the build. So here you can see that report. It's within the index study [[HTML]] file. I'm going to go ahead and that up on Firefox. So here you see the test report that was generated by Gradle. Now, right now we only have one test,
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-wrapper?u=76281980&t=187)** but hey, at least it passed. We'd like to see more of those. But the main point here is that Gradle is giving us feedback about the quality of our software. Okay, let's return to our build directory. And I want to highlight one more very important thing. You'll notice the app.jar file within the libs directory. This is the main artifact produced from our build. It contains our packaged application. So this is really the whole point of conducting the build. By default, the jar file is not executable. We'll handle that part later. But for now we can launch the application using the Gradle Wrapper. Let me show you how, once again we'll use the Gradle Wrapper script and we're just going to pass it another test this time named run. I'll go ahead and execute that task. And there you can see our application was launched and it printed a bit of console output to our terminal. Okay, so that wraps things up. We saw another way to execute Gradle builds and tasks. And that was the Gradle Wrapper. Because it's the preferred approach, We're going to be using it going forward in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (22), [[Windows]] (1), [[HTML]] (1)
> **Tools:** firefox (1), terminal (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### [Gradle tasks and plug-ins](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=0)** - [Instructor] Now that we've explored the structure of a [[Gradle]] project and the Gradle wrapper, let's focus on the build script. To help us with that, I'm going to import our project into Eclipse. So I'll go to file, then import. And then within the Gradle folder, I'll select Existing Gradle Project and hit next. Then I'll need to navigate to our app sub project, which is located within the sandbox project inside of the exercise files. So once you're there, go ahead and hit open, and then click on finish to import the project into Eclipse. Inside the structure of our sub project, we'll find the build.gradle file. Let's go ahead and open that so we can see how the Gradle DSL helps us establish our build. A Gradle build script defines a set of tasks that need to be run as part of our build for a project. Most tasks come from plugins that we include within the build script, like the application plugin that you see here. By default, this plugin adds the [[Java]] plugin into the build, which provides tasks that help with things like compilation, testing, and packaging of our Java application. This functionality comes right out of the box with the plugin, so it's kind of hard to see all of the tasks just by looking at our build script. Let's head over to the terminal to help us with that. Here, I'll use the Gradle wrapper and the task task to see all of the tasks that are available within our build.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=97)** Okay, so you can see it's quite the list. Let's scroll up and check out a few of these. There's the run task, which we're familiar with. We've also used the build task some as well. Now if we scroll down, we'll start to see the tasks that are provided by the Java plugin. Here's two that compile our Java source code and the test for the project. If we'd like to see every plugin in our build, we can use a bit of Groovy to access them. So I'm going to use the project object. And on it, we'll find the plugins property. Here, I can iterate through each of them. And then inside of a closure, I'll print out each plugin to the console. Okay, let's go ahead and we'll save that, and then we'll head back to the terminal where I'll use the Gradle wrapper in order to kick off our build. And there you can see it prints all the plugins that are available to our build. Let's talk about a few of these. The base plugin is extended by every other plugin. There you see the Java plugin we talked about and the application plugin as well. These plugins are the core plugins that are provided by Gradle. That allows us to access them using a short name. So instead of using the fully qualified name for the application plugin, if we look in our Gradle build script, you'll notice we can use the short name, application. We can include third-party plugins in our build as well.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-tasks-and-plug-ins?u=76281980&t=193)** To find those, we use the Gradle plugin portal. All you need to do is type the name of the plugin that you'd like to find. In this case, I'm going to look for the taskinfo plugin. It provides us some additional information about the tasks within our Gradle project. So I'll go ahead and search for it, and there you can see it. Let's navigate into the information for the plugin, and here you can see we get the fully qualified plugin ID. All we need to do is copy this and then take it over to our build script. Within the build script, we'll place it within the plugins closure, then we'll save our build.gradle file. And now if we navigate back to the terminal, we can execute the task task again. Now you'll notice that three additional tasks from the plugin have been included and made available for our build. When setting up a Gradle build, it's common to add third-party plugins into our build script. That way, we can access additional tasks within our build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (15), [[Java]] (5)
> **UI Navigation:** go to (1), navigate to (1), click on (1), scroll up (1), scroll down (1)
> **CLI Commands:** find (4)
> **Tools:** terminal (3)
> **File Paths:** build.gradle (2)
> **Exercise Files:** exercise files (1), source code (1)
> **Env Vars:** dsl (1)
> **Cross-References:** we talked about (1)

#### [Gradle task graph](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=0)** - [Instructor] There's a little bit more that you need to understand about how the tasks in a [[Gradle]] build work. I'll use our new task info plugin to help explain it. The plug-in contains the TI tree task. When we execute it, we provide it another task like build. Then it evaluates the relationships between all the tasks that will be executed by Gradle when we perform the build task. Here, let me show you how it works. So here's the output from the plugin. This is known as the task graph. At the base of the task graph, we have the build task that we asked the plugin to analyze. The build task is a standard life cycle task within Gradle. Standard life cycle tasks, like build, assemble and check, don't really do any work within our builds. Instead, they rely upon tasks provided by plugins to do the actual work inside of the build. That doesn't mean they're not important because we can still link the plugin task to them to help determine when they will be executed in the build. This process of linking the task together and determining the sequence they'll be run in is performed by Gradle in the early stages of the build process when it's creating the task graph. This all occurs behind the scenes, and it's really hard to see just by adding a plugin
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=94)** to our build script. So let's create our own task to see how it works. To do that, we're going to register a task on the task property. So once we call register, we provide the name of our task and then it will be created within our project. Now, the task property is actually found on the project object. Typically we don't specify it, it's normally implicit, but here I'm going to be really verbose and put it in place so you can see how it works. All right, now that we have our task, let's go ahead and within the closure, we're going to add some actions to it. The first action we'll add is do first. Inside of this action, I'm going to go ahead and print out some console output. Here, I'll just say hello [[LinkedIn]] learning. Then I'm going to go ahead and copy this action and then I'll just paste it right below the first one. And our next action, we're going to name do last. And within the output, I'm just going to say hello learner. Okay, there we go. So let's go ahead. We'll save the build.gradle file and then we'll head over to the terminal where we can use the Gradle wrapper to execute the new task we just created. There we can see the task is executed and the output we specified
>
> **[3:06](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/gradle-task-graph?u=76281980&t=186)** was printed to our terminal. Okay, now that we have our new task, let's return to Eclipse, and I'm going to do one more thing that's going to change up our task graph. So inside of our build script, I'm going to make the build task depend on our new task. So there I'll just say build.depends on simple task, and that's going to change up our task graph. Let me show you. We'll go over to the terminal and then we'll execute the TI tree task again. And here you'll see that our new task has been added to the task graph and that's because the build task depends on it. That means if we were to execute a build using the Gradle wrapper, it's going to include the execution of our new task, and there we can see the output printed to the console from the task we created. Most often, we'll use tasks that come from plugins, but understanding how the task graph is assembled will be a big help when you're working with Gradle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (8), [[LinkedIn]] (1)
> **Tools:** terminal (3)
> **Definitions:** known as (1), is a  (1)
> **File Paths:** build.gradle (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Managing dependencies with Gradle](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=0)** - [Tutor] Modern [[Java]] applications are frequently developed with the help of third-party libraries like the [[Spring Framework]] or Hibernate. Build tools like [[Gradle]] provide [[Dependency Management]] features that can help us include these libraries and their dependencies within our projects. If we scroll down inside of our build script, you'll notice that we already have a few dependencies declared within the dependencies section of the build. Let's first talk about the Guava dependency. You'll notice that we define the ID for the Guava dependency by first specifying its group ID, then its artifact ID, followed by its version. You'll also notice that the dependency is declared with a scope of implementation. This indicates that Guava is a compile time and a runtime dependency for our project. On the other hand, you'll notice that the [[JUnit]] dependency is declared with a scope of test implementation. This tells Gradle that it's only used for compiling and running the source code for the project's test. The build script also specifies where these dependencies are pulled from by including a repositories section. The repositories block is configured to pull dependencies from the Maven repository. So when a build needs these dependencies, that's where they're going to be downloaded from the first time. Then after that first run, these dependencies will be stored locally
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=93)** within Gradle's cache. So then the next time Gradle needs them, they can be fetched locally, and we won't need to download them from Maven Central. Let's head out to Maven Central to find a dependency we can include within our project. I'm just going to use the Hibernate Core as our example. So I'll go ahead and search for it. And then I'm going to click on the first item in the list. On this page, we'll see some information about the dependency. You'll notice that it's currently set up to pull a beta version. Let's switch that up and get something more reliable. So I'm going to switch to 5.5.8.final. On the right side of the page you'll notice that we get a groovy DSL snippet that we can use to include the dependency within our build script. So let's go ahead and we'll copy that. And then we'll head back over to Eclipse and we'll paste it inside the dependencies section of our build. I'm going to go ahead and save that file. And then I'm going to navigate to a terminal window so we can inspect the dependencies within our build. To do that I'm going to use my local Gradle installation to execute the dependencies task. This will give us more information about the dependencies within our project and where they come into play on the different class pass. Now that we've executed the task, let's scroll up to see its output. Let's start here with the compile time class path.
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-dependencies-with-gradle?u=76281980&t=188)** You'll notice that the Guava dependency and the Hibernate Core dependency were included on the compile time class path. Now, you'll also notice that all of their transitive dependencies were pulled for us. So that's work we didn't have to do. If we continue to scroll down, you'll see that these dependencies were also included on the runtime class path, but notice what's missing, it's Junit. And that's because J unit was only included on the compile time class path for our test. If we scroll down a little bit within this section, there you'll see that it's added. So those are some of the basics of managing dependencies with Gradle And you can see how easy it makes it to pull external libraries into our projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (6), [[JUnit]] (2), [[Java]] (1), [[Spring Framework]] (1), [[Dependency Management]] (1)
> **UI Navigation:** scroll down (3), click on (1), switch to (1), navigate to (1), scroll up (1)
> **CLI Commands:** find (1)
> **Env Vars:** dsl (1)
> **Versions:** 5.5.8 (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### [Building Spring Boot applications with Gradle](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=0)** - [Instructor] Now that we've covered some of the main concepts behind [[Gradle]], let's use it to build the room service project in our land and hotel application. We currently have the source code for the project, but it's not set up to build with a tool like Gradle. To help us with that, we can use the Spring Initializer found at start.[spring.io](https://spring.io). It's a web-based tool that can help us quickly launch a new spring project that builds with Gradle or Maven. All we need to do is provide a bit of information about our project. So I'm going to indicate that we'll be using Gradle to build our project. And then I'm going to provide a group ID of com.[[LinkedIn]].javacd. Next, for the artifact ID, I'm going to type room-service, and then I'm going to go down here and adjust the package name to remove the room service suffix, so it will just be com.linkedin.javacd. Next, let's add some dependencies that our project will require. So, just click on this button and then type Spring Web, that's our first dependency we'll need. We'll also need the actuator, which will provide us some metrics about our project. And then we can include [[Spring Data]] JPA. And then finally, the H2 embedded database. Once you've provided this information to the Spring Initializer, click on this button to download a zip file that contains all the files
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=95)** for the project. So I'll just go ahead, click on OK, and then I'm going to navigate to our downloads directory where I'll find that zip file. Here I'm just going to extract it and then I'll copy the room service folder. Now I'm going to navigate back to our exercise files directory, where I'm going to overlay the folder on top of the existing room service directory. So here I'll merge in the new files, then I'm going to overwrite the get ignore file. And then finally, I'm going to skip overriding the source directory because we already have the code for the microservice within our project. Okay, let's head over to the terminal and take a peek at our project now. You'll notice that inside the project, there's the Gradle wrapper, so we can use that to build. Spring also provided the build script. We see the build.gradle file there. Let's take a peak at the build script they provided. You'll notice that the build script includes a few plugins. The first is the [[Spring Boot]] plugin, which will provide some tasks for packaging our spring application. The [[Dependency Management]] plugin will help us get the right versions of our library so we can keep them all aligned. And then finally, the [[Java]] plugin is going to help us with things like compiling our source code for the project.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=190)** Within the dependency section, you'll also notice that some starter dependencies were added that aligned to those we entered on the Spring Initializer. These will help us quickly add the new projects into our application and provide some default configurations that get us up and running quickly. Let's take a look at this another way by using the task, task. This is going to show us some of the tasks that were added into our project by the spring boot plugin. If we scroll up, you can see a few of them. There they are. The most important of these tasks is the bootJar task. It's what's going to help build the executable jar that contains the embedded web server. So it's going to package everything into that one archive that we can use to launch our application. Okay, let's go ahead and we'll use the Gradle wrapper to build our project. There we can see Gradle pulling down the dependencies required for our build. Looks like it's starting to do some compilation, and there we can see the build completed successfully. Let's take a look at what was built. So I'm going to write out the structure of our build folder. And there you see our executable jar was placed inside the libs directory. The executable jar contains everything we need
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-gradle?u=76281980&t=283)** to launch the application. So if we navigate into that directory, we can just go ahead and use plain old Java to launch the application. So I'll type java -jar, then I'm going to set our spring profile to the local profile, and then we just need to provide the name of the jar file. There's our executable jar. All right, let's go ahead, we'll kick off this command and that will launch our microservice. There we can see it's up and running and accepting traffic. So now we've seen how to build an executable jar for a spring boot application with Gradle. You'll notice how easy it is to get up and running when we package our modern Java applications in this format. So let's move on to the next chapter to see how it's done with Maven.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gradle]] (9), [[Java]] (4), [[Spring Boot]] (3), [[LinkedIn]] (2), [[Spring Data]] (1)
> **UI Navigation:** click on (3), navigate to (1), scroll up (1)
> **Exercise Files:** source code (2), zip file (2), exercise files (1)
> **File Paths:** build.gradle (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** bootjar (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Env Vars:** jpa (1)


### 4. Packaging Applications with Maven

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Maven](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=0)** - [Instructor] Cradle isn't the only choice for building [[Java]] applications. Many Java developers prefer to use Maven instead. Both tools are great choices, and you'll actually find many similarities between them, but there are some differences. So let's take a closer look at Maven. [[Ubuntu]] makes it very simple to install Maven on a [[Linux]] workstation through the package manager. Just type the command sudo apt install, then Maven. Now, if this were a Maven installation on [[Windows]], we would need to follow the instructions at the link below. Once we execute the command, it will begin to download and install Maven on our workstations. There, it looks like it finished. Let's go ahead and verify the installation by typing mvn - - version. And there we can see Maven 3.6.3's installed. Anytime we want to execute a command with Maven, we would just type mvn. Eclipse also has great support for Maven, and by default Eclipse ships with m2e plugin. We can use it to create a Maven project inside of eclipse. To do that, just go to file then new and then select Maven project. Here, we'll want to check the box to create a simple project. This will allow us to create a bare bones Maven project. Once you've checked that, go ahead and hit next. And then here we'll need to provide some information
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=94)** about our project. The first thing we'll need to specify is the group ID. So I'm going to use com.[[LinkedIn]].javacd. Then for the artifact ID, I'm just going to call our project "Playground," and we'll leave the version as is. Now these three fields, the group ID, the artifact ID and the version, make up the Maven coordinates. Maven coordinates are used to identify exactly which project we're working on at which point in its history. It's important to understand the Maven coordinates because they're used for other purposes like identifying dependencies and plugins. With the information for our project in place, Let's go ahead and hit the finish button to create it. There you can see that Eclipse builds out our new project, and we can expand it to see its structure. Here you'll see some directories that probably look familiar. Directories like src/main/java, src/main/resources, src/test/java, and so on. We saw these in [[Gradle]], and actually this is something Gradle borrowed from Maven. By default, Maven defines these directories as the conventional locations where it expects to find things like our tests or our source code or different configuration files. So then when Maven's performing a build, it knows it can just look in these directories, and there, it will find the resources that it expects. Now within the root of our project.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=189)** You'll also notice the pom.xml file. It's where we specify all of the information and configuration for our Maven project. Like Gradle, Maven also has a wrapper, which is provided through a popular third-party plugin. It's supposed to be included in Maven four once it's released. So in the future, if you are using Maven four, the installation we're about to walk through wouldn't be necessary. Here's the [[GitHub]] page for that plugin. If we scroll down on it, we'll find the command that we can use to install the wrapper within our Maven project. Let's go ahead and we'll copy that command. And then we'll navigate to a terminal and inside of the terminal, I'm just going to head into our new playground project. And here, I'm going to go ahead and execute the command. This will begin to install the rapper in our project. Let's take a look here. There you'll see the Maven wrapper. The script is named mvnw. So anytime that we want to execute a goal or a phase with Maven, we can use the rapper to do that. Let's try it out. So using the wrapper within the project, I'm going to execute the package phase within Maven. This is going to build our software and package it into an archive. There we can see that our project was placed into a jar, and that our build completed successfully. So now we're up and running with Maven,
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-maven?u=76281980&t=284)** and we've performed our first build. However, it didn't really do too much. Let's fix that over the next few lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[Gradle]] (3), [[Ubuntu]] (1), [[Linux]] (1), [[Windows]] (1)
> **CLI Commands:** find (4), mvn (2), sudo (1), apt (1), make (1)
> **Prerequisites:** install (5)
> **Tools:** terminal (2), github (1)
> **UI Navigation:** go to (1), scroll down (1), navigate to (1)
> **File Paths:** pom.xml (1)
> **Versions:** 3.6.3 (1)
> **Exercise Files:** source code (1)

#### [Maven Java configuration](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=0)** - If we take a closer look at our Maven project, you'll notice one big problem. By default, the project is configured to use [[Java]] five. That's not what I'd recommend for a modern Java application. At a minimum, we should be using a more recent version like Java eight. To make that adjustment, we need to add some configuration into our Palm.XML file to adjust some properties used by the Maven compiler plugin. So inside of the Palm, I'm going to add the properties tag and then within it, we'll add two other tags that adjust the configuration of the Maven compiler. The tag will be named maven.compile.source and then for the value, we're going to specify 1.8, which corresponds with Java eight. Now there's one more tag we need to add in here. So let's just go ahead and we'll copy this tag, and then we'll paste it, and switch over from maven.compiler.source to maven.compiler.target Okay. So that's the configuration we need to switch to Java eight. Once you have that in place, just right click on the Palm, go to Maven and then click on update project. Here within this dialog, hit okay to proceed with the changes. Then you'll notice that our project gets updated to use Java 1.8. Now this is still a little bit less than ideal. Really we want to be using something like Java 11, which is one of the more recent long-term support versions
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=96)** of Java. That change is a little bit harder because we'll need to adjust one of the plugins within our Palm. Like [[Gradle]], Maven also uses plugins. Some of them like the compiler or the jar plugin are included in a project by default. If we want to see those, we can click on the effective Palm tag and here I'm just going to go ahead and search for the compiler plugin. There you can see it. It's defined within this plugin tag. Now currently, we're using version 3.1 of the plugin. If we want to use Java 11, this version of the plugin needs to at least be version 3.8 and we need to be running on Maven 3.5 or higher. So let's go ahead and we'll copy the plugin tag, and then we'll take that XML over to our Palm.XML files source. Here I'm going to add another tag build, and then inside of that, I'm going to add the plugins tag where we can add different plugins for our build. Then we'll just paste in the XML inside that tag. Okay. So we won't need these executions. So I'm just going to go ahead and remove those and then we'll need to complete the Maven coordinates for this plugin. So I'm going to add a group ID within the plugin tag. Here the group ID is going to be org.apache.maven.plug-ins. Okay. Now we can go ahead and make the switch
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-java-configuration?u=76281980&t=191)** over to version 3.8.1. So we're up to the standard we need to run Java 11 in our Maven project. Now let's just go up to our properties and we can simplify some of this configuration. Instead of having two properties, we now only need a single property. It's going to be maven.compiler.release. So let's go ahead and we'll switch the tag. And then instead of using 1.8, we can just say 11 for Java 11. Okay. Now that we have those changes saved to our Palm, let's go ahead and update the Maven project once again. So just right click, go to Maven, then update project and hit okay. There we go. That's much better. Now we're using Java 11.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (12), [[Gradle]] (1)
> **Versions:** java 11 (5), version 3 (3), 1.8 (2), java 1 (1), 3.5 (1)
> **UI Navigation:** click on (3), go to (2), switch to (1)
> **Env Vars:** xml (4)
> **CLI Commands:** make (2), apache (1)
> **File Paths:** palm.xml (2)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### [Maven plug-ins](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=0)** - [Narrator] In Maven, there are core plugins like the Compiler plugin, but there's also a large ecosystem of third party plugins that we can use in our projects build. Let's add one more plugin to our build, this time from a third party. The plugin we'll add is named Dependency Check. It scans our application for known security vulnerabilities when we execute a build. Here on Maven central, which is the repository where Maven will [[Fetch]] the plugin from, you can see information about the plugin. Now, when we use a third party plugin, typically we'll need to do a little bit of research about how to use it. So let's navigate to the source code for the plugin on [[GitHub]]. Inside of the source code, we'll find the read me file. It links to the documentation for the plugin. Let's head over to this GitHub page. On the page, we see some examples of how we can use the plugin within our project. This first example performs a security analysis as part of our build. If we scroll down, you'll notice that the plugin can also fail our build if it finds a vulnerability that's severe enough. Let's go ahead and we'll copy this configuration so that we can include it within our Maven project. Once I've copied the XML, I'm going to return to Eclipse and then inside of the plugins tag, I'm going to go ahead and paste it. Okay, so now the plugin is part of our Maven project.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=95)** Let's head over to the terminal where we can learn more about the plugin. To do that, we're going to use another Maven plugin, the Help plugin. On the Help plugin is the describe goal. It can tell us more about the different plugins that are included within our Maven project. All we need to do is pass it the plugin flag and then provide the name of our plugin. So first I'll write the group ID or .[[OWASP]] and then I'll need to provide the name of the plugin, dependency-check-maven. All right, let's go ahead and we'll execute this command and there we can see that information about the Dependency Check plugin has been provided. You'll notice, information about the plugins goals has been provided. A goal is like an action the plugin can perform. It's very similar to a task in [[Gradle]]. In my mind, I think of it like a method on a class. When we run a Maven build, it's executing a set of goals that are found on the plugins in our project. On our Dependency Check plugin, the check goal is what will perform the actual security analysis of our project. Let's go ahead and we can execute this goal. In Maven, there are several ways the goals on a plugin can be executed. We're going to execute a single goal directly on the plugin using the command line. So we'll use the Maven wrapper,
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-plug-ins?u=76281980&t=187)** then we'll provide the name of our plugin and then we just need to specify the goal that we want to execute. All right, let's go ahead and we'll kick off the goal to start the security scan. There we can see that the scan has completed. You'll notice it created a report that we can access. So I'm going to go ahead and copy the path to the report. Then I'll open another tab and here I'll use Firefox to open the report. If we take a look at the report, you'll see that no vulnerabilities were found in our project. That's good. The goals provided by plugins are important when working with Maven because they allow us to add other steps into our build. We saw how to directly execute a goal on a plugin, but goals can also be bound to different phases in our build life cycle. We'll learn more about this in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Fetch]] (1), [[OWASP]] (1), [[Gradle]] (1)
> **Tools:** github (2), terminal (1), command line (1), firefox (1)
> **UI Navigation:** navigate to (1), scroll down (1), open the (1)
> **Exercise Files:** source code (2)
> **Analogies:** similar to (1), think of it like (1)
> **CLI Commands:** find (1)
> **Env Vars:** xml (1)
> **Documentation:** the documentation (1)

#### [Maven life cycle and phases](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=0)** - [Tutor] When Maven runs a build, it executes a sequence of phases known as a lifecycle. Maven has three built-in life cycles: clean, site, and the default life cycle. The default life cycle has the most phases. And it's normally what we use to build a project. If we want to see the phases in the default life cycle, we can describe them using the Help plugin. All we need to do is pass the name of the command to the plugin as an argument. So I'm going to use the deploy phase here. It's the last phase in the default lifecycle. And that's going to allow us to see all the phases that proceed it, there they are. In total, there are 23 phases in the default life cycle that we can execute using Maven or the Maven Wrapper. You'll notice that some of these phases like compile have a plugin goal next to them. This is known as a binding. Basically, it's a mapping between a phase and a goal on a plugin. If a goal is bound to a phase, it will be executed when we reach that phase in the life cycle. Here's how it works. Let's imagine that we executed the package phase. That's not where Maven starts. First, it's going to begin with the validate phase and look to see if it has a plugin binding. It doesn't. So it's going to proceed then to the next phase and look for a binding as well.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=92)** It's going to continue this until it finds a face that does have a binding. So here we see that the resources goal is bound to the process-resources phase. That will cause the resources goal to execute. And then the same thing will happen for the compile phase. It will execute the compile goal on the Maven Compiler plugin. This process is going to continue until we reach and execute our package phase within the life cycle, then Maven will stop. Let's just go ahead and see this in action by executing the package phase with the Maven Wrapper. There we can see a bit of output. And just like we talked about, you can see the different goals that were bound to the different phases being executed. There's resources, there's compile. And then ultimately, we wound up running the jar goal to package our application into an archive. Now, we're not limited to running one phase at a time. If we would like, we can go ahead and run a phase from another life cycle. So here I'm using the clean phase from the clean life cycle. And then I'll go ahead once again and execute the package phase from the default life cycle. Now, watch what happens as both phases execute from both life cycles. Now, you'll notice that another goal was executed. So there we see the clean goal being executed. And that's because there was a plugin binding for that goal
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-life-cycle-and-phases?u=76281980&t=189)** within the clean phase of the clean life cycle. Then we continued to execute all of the plugin goals that were bound to different phases within the default life cycle. There is a really helpful plugin that we can use to see what goals are bound to what phases within the lifecycle. The buildplan-maven-plugin shows us exactly that. So let's go ahead, we'll execute the plugins list goal. And then we can take a look at the output for our build. So this makes it much easier to understand the life cycle. Here you can see the different phases within the lifecycle. Then it shows you the plugin goal that's bound to it. And it gives you the name of the plugin. I highly recommend using this plugin to help better understand Maven's life cycles. The life cycle phases and plugin bindings are very important because they determine the actions our build takes to produce an artifact for our project.

> [!info]- Semantic Content
>
> **Definitions:** known as (2), is a  (1)
> **Analogies:** imagine (1), just like (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [tutor] (1)

#### [Adding dependencies with Maven](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=0)** - [Instructor] The [[Dependency Management]] system is one of Mavens, most powerful features. By default, it pulls dependencies from Maven Central. So it's a great place to look when you need to include a library in your project, like Apache Commons. Let's go ahead and we'll add that dependency into our Maven project. To do that, we can copy this snippet of XML. Now let's first talk about it. You'll notice it starts with the dependency tag and then it includes the Maven coordinates within it. This is how Maven identifies the dependency it needs to pull from Maven Central. So let's go ahead, we'll copy that XML. And then we'll navigate over to Eclipse. Now, before we just drop that XML inside of our palm, we need to add a dependencies tag and then inside the dependencies tag, we can add the dependencies for our Maven project. Okay, now our project will include Apache Commons. Let's talk about one common scenario. Often an organization will set up their own artifact repository, so you'll need to configure your project to pull dependencies from it. And here's how that's done. You add a repositories tag and then inside of that, you add a repository. Then you'll need to give an ID for the repository. Let's say something like corporate. Then you'll need to provide a URL that points to your organization's internal artifact repository.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=97)** Now we're going to stick with Maven Central. So I'm going to go ahead and remove this XML from our palm. And then I'll just go ahead and save it. Okay, so now we got the dependency within our project and if we expand the Maven dependencies within the package Explorer, you'll notice there's the jar file, that includes the code. Let's go ahead and we'll create a class that uses some of the code found within Apache Commons. So here in the new class dialogue, I'm going to package the class within the com.[[LinkedIn]].JavaCD package. And then I'll just keep it simple and name it application. All right, so there's our new class. I can go ahead, add a main method. And then inside of that main method, I'm going to print some output to the console and to do that, I'm going to use the string utils class from Apache Commons. It has a capitalized method that we can use to capitalize a string. So here I'll just say hello learner, okay. And that should be capitalized when our application runs. So now let's head over to the terminal and here I'll use the Maven wrapper to package the application. And there we can see the jar file that our build produced. You'll notice it's placed in this directory target. Let's go take a look at that. The target directory is where by default Maven places, all of the output from our build.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/adding-dependencies-with-maven?u=76281980&t=192)** So there, you can see the compiled application class, and then down here in the root of the target directory, we have our jar file that was created. Let's just hop into the target directory and we can run our application. So to do this, we're going to have to specify the class path and I've already prepared that so we can run quite easily. It's a really long command. Let's go ahead, we'll execute that. And there we can see hello learner. And the H in hello is capitalized. So Mavens dependency management system made it fairly easy to pull in an external library. However, just packaging our code in a regular jar made running an application very tricky because we needed all of this to handle the classpath. [[Spring Boot]] can help us by packaging those application dependencies inside of an executable jar. Let's move on to our next lesson and I'll show you how with Maven.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Management]] (2), [[LinkedIn]] (1), [[Spring Boot]] (1)
> **Env Vars:** xml (4), url (1)
> **Prerequisites:** you'll need (3), set up (1), configure (1)
> **CLI Commands:** apache (4)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Building Spring Boot applications with Maven](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=0)** - [Instructor] Now, that we've explored how Maven builds work, let's package our guest service for the land and hotel application into a Maven project. At the moment the source code for the project is placed inside the Maven standard directories, but it's missing some key ingredients like a POM and the Maven Wrapper. Let's use the Spring Initializer to get those things in place. So, on the Maven Initializer, I'm going to indicate that we're using a Maven project, then we'll need to provide a package name, which will once again, become .[[LinkedIn]].javacd. Then for the name of the artifact, I'm going to use guest dash service. And we can come down here once again and remove that suffix from our package name. Okay, now let's go ahead, we'll add the dependencies in. We need Spring Web, we also need [[Spring Data]] JPA. Then we're going to include the actuator and then finally H2. Okay, once all that's in place just go ahead and click on this button to download the zip file with the Maven project. From there, we can navigate over to our download directory where we'll find the zip file. I'm just going to extract it here and then I'll copy the extracted folder named guest service. Then I'm going to take that over to our exercise files directory and I'm going to overlay our existing guest service folder. So, here I'll merge so that we get the new files,
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=94)** then I'll overwrite our [[Git]] ignore file, and then I'll skip overriding the source since we already have it. Okay, let's head to the terminal and we can see what's within that directory. There's the Maven Wrapper that Spring provided. And you'll also notice a pom.xml that was provided by Spring. Let's take a look at that POM. If you look closely at this POM, you'll recall that it's very similar to what we saw earlier in the course. There's the [[Spring Boot]] Starter parent POM, there's some of the Starter dependencies we talked about for quickly getting up and running with Spring projects. And here at the bottom you'll see the Spring Boot Maven plugin. So it's going to provide some additional goals that we can include within our build. Let's go ahead and we'll use the build plan plugin to take a look at some of those. So, here we can see how our build will execute in all the plugin bindings. It looks very similar to when we packaged a jar. But you will notice one difference, within the package phase we're going to execute the repackage goal on the Spring Boot Maven plugin. And this is what's going to build that executable jar that includes all of our different dependencies in our embedded server. So let's go ahead and we'll package the application into that executable jar.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-spring-boot-applications-with-maven?u=76281980&t=192)** Okay, there we can see that the jar was placed within our target directory. I'm going to go ahead and I'll navigate into the target directory. And from here, we're going to launch our executable jar using plain old [[Java]]. So I'll use the Java jar command, then I'll add the profile for Spring. That's going to be our local profile and then I just need to provide the name of the jar, there it is. Okay, let's go ahead, we can launch the application. And there we see that the service is up and accepting traffic. If we'd like we can go ahead and open a browser and hit that service. It's running on local host at port 8,882. And then the end point is API forward slash guest dash service and then guest. All right, so, there we see some Jason served up by our microservice. So, that's the last build that we needed to establish for the services in our land and hotel application. This time we use Maven. So, at this point we should probably standardize on a single build tool for all the [[Microservices]] within our application. So, let's go forward using Maven throughout the [[Representational State Transfer (REST)|rest]] of the course. If you would like go back and try to switch over the room service from [[Gradle]] to Maven, or you can just pick up with the exercise files in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (3), [[Java]] (2), [[LinkedIn]] (1), [[Spring Data]] (1), [[Git]] (1)
> **Env Vars:** pom (4), jpa (1), api (1)
> **Exercise Files:** zip file (2), exercise files (2), source code (1)
> **CLI Commands:** find (1), git (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **File Paths:** pom.xml (1)
> **Ports:** port 8 (1)
> **Tools:** terminal (1)


### 5. Continuous Integration with Jenkins

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuous integration overview](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=0)** - [Instructor] [[Continuous Integration (CI)|Continuous integration]] or CI, helps teams increase the quality of their code and keeps their code base in a working state that's always deployable. Within our [[Continuous Delivery (CD)|continuous delivery]] process, the CI phase is triggered each time code is merged into the repository. For teams experienced with the practice, this might occur many times per day or several times each hour. By merging their code this frequently, teams avoid the integration of large change sets towards the end of the project. That's because they're always integrating their code. So they never encounter this situation. The continuous integration process is often modeled as a separate pipeline that has the goal of producing an artifact. For modern [[Java]] applications, this is a container image that gets stored within a registry where it can be retrieved for deployment. The CI pipeline is executed by a platform known as a continuous integration server, but sometimes you'll hear it referred to as a build server or an automation server. In our course, we'll be using [[Jenkins]]. It automates and orchestrates the execution of a pipeline script that declares the tasks necessary to build, verify, and package our software. These tasks often use third-party plugins to perform their work. So, you'll typically find plugins that integrate build tools like Maven or that perform specialized tasks like checking that code coverage meets certain standards.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-integration-overview?u=76281980&t=95)** Let's take a look at some steps you might find declared in a simple CI pipeline. When a CI server detects a code change, it pulls an exact copy of the repository code onto a clean environment. Here, a build tool like Maven compiles and packages the software. There's two really important points to highlight here. The source code used to perform the build matches exactly what's in the code repository and the build is performed on a clean server. Since the build occurs on a neutral server, it can detect any problems that might not appear on a local workstation. So if you forget to check a file into [[Git]], it's going to break your build. After the code is built, automated tests are executed against the binaries to ensure they function as expected. If those tests pass, the code is then analyzed using static analysis tools like SonarQube. It can provide reports that help us measure and enforce code quality. If the software meets the quality standards, it's then packaged into a container image, which is stored in a container registry where it waits deployment to an environment. Through automation, the CI pipeline standardizes the repeatable process which builds, verifies, and packages our software. This is what enables the software team to perform so many frequent builds and keeps the flow of changes to our software constant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Java]] (1), [[Jenkins]] (1), [[Git]] (1)
> **CLI Commands:** find (2), git (1)
> **Definitions:** is a  (1), known as (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Getting started with Jenkins](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=0)** - [Narrator] Within the lab environment, there's a [[Jenkins]] server that we can use to automate the [[Continuous Integration (CI)|continuous integration]] process for our [[Microservices]]. To access Jenkins, click this link on the bookmarks bar. It will navigate to local host on port 8080, where Jenkins is served. Once you land on this page, go ahead and click this option to log into Jenkins. Here we'll use the credentials admin, admin to log in. Once you've entered those just hit the sign in button, and that will take you into Jenkins. Now, inside of this Jenkins installation, there are several plugins pre-installed that will help us build out our pipeline. Let's go take a look at those. So come over here and click on manage Jenkins. And then we can click on this option to manage the plugins. On this tab, we can see all the plugins that are installed within the Jenkins server. Here I'm just going to filter things down to pipeline, and then we can start talking about some of these plugins. The first I'll call your attention to is the Docker Pipeline plugin. This will allow us to run different steps of our pipeline within a Docker container, which can help make our builds more efficient. If we scroll down on the page, we'll also find the Pipeline Plugin. This plugin allows us to script Jenkins builds as code inside of a Jenkins file. This is an alternative to building out Jenkins jobs, using the [[Forms]] on the user interface.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=97)** Next we're going to scroll up and I'll highlight the [[GitHub]] Branch Source plugin. This is a plugin that we'll use heavily throughout the course. It can automate the creation of pipelines based on Jenkins files that it finds in the repositories inside of a GitHub Organization. So you create a GitHub Organization and then this plugin scans it to find those Jenkins files. And when it does, it builds a pipeline in Jenkins. The last plugin that we'll discuss is the Credentials plugin. We can use it to store credentials like our GitHub Personal Access Token or our SSH keys. This is important because Jenkins will need to securely connect to all the other tolling within our pipeline. Let's go ahead and we can set up some credentials within Jenkins. So navigate back to manage Jenkins and then head into the managed credentials section, here you'll click on Jenkins, then you'll navigate into the global credentials and then here's the option to add credentials. Within the section, we're going to create two new credentials. One is going to be for our GitHub Personal Access Token and the other for our SSH key. When setting up our personal access token, the first thing we'll need to do is provide our GitHub username, and then we'll need to [[Fetch]] our personal access token. You'll recall that earlier in the course, I placed mine within a PAT file in my home directory.
>
> **[3:12](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=192)** So I'm just going to write that out to the console, copy the value, and then I'll return to Jenkins and paste it as the password. Next we'll need to provide an ID for this credential. I'm going to call it, github-pat. And then if we'd like, we can go ahead and we can add a little description about this credential. Okay, let's go ahead and we'll set up our GitHub Personal Access Token. All right, we're going to make one more credential and that's going to be our SSH key. So click on add credentials, and then here you'll want to select SSH username with private key. This will change the form up a bit. First, we're going to provide the name of our credential, which is going to be github-SSH-key. Then for the username, we'll specify our GitHub username. And then finally we'll need to enter the private key that we created earlier in the course. So I'm going to navigate back to my home directory, where I've also placed the private key. I'll just echo that out to the terminal and then I'll go ahead and carefully copy its value. Okay looks like I got it there. Now let's return back to Jenkins and here I'll click this add button, which allows me to paste in the private key inside of the form. All right.
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/getting-started-with-jenkins?u=76281980&t=284)** Once that's in place, I'll go ahead and hit, okay. To create the credential. And now you'll see that we have two credentials stored within Jenkins that it can use to connect to GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (21), [[GitHub]] (11), [[Continuous Integration (CI)|Continuous integration]] (1), [[Microservices]] (1), [[Forms]] (1)
> **Tools:** github (11), terminal (1)
> **CLI Commands:** ssh (5), docker (2), make (2), find (2)
> **UI Navigation:** click on (4), navigate to (1), scroll down (1), scroll up (1)
> **Env Vars:** ssh (5), pat (1)
> **Cross-References:** earlier in (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (2)

#### [Creating a Jenkins pipeline](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=0)** - [Instructor] Let's start building our first [[Jenkins]] pipeline. We'll create it within the room service project, which you'll notice I've switched over to use Maven. When working with Jenkins, the pipeline is written within a Jenkins file that's normally placed in the root directory of a project. Let's go ahead and we can create this file with Eclipse. Just right click on the project, then go to new and then come down here and click file. Then just name the file Jenkins file. Now, one thing to really look out for here, make sure the F is lowercase. If you have the name correct, go ahead and hit finish and that will create our new Jenkins file inside of Eclipse. Eventually we'll need to create a Jenkins file for each microservice, but for now let's work in this project and we'll make the script generic enough that later we can just drop it into the other projects. Inside of this Jenkins file is where we'll define our pipeline. The code in the file uses a DSL that has a declarative syntax which is very similar to Groovy. Within eclipse, I've already installed the Jenkins editor plugin, it provides some code completion and syntax highlighting that'll help us write our pipeline. To start out, we'll need to add a pipeline block in the Jenkins file. It holds all of the stages and steps that we want to include within our pipeline. It's really where we define all the actions in the build. After declaring our pipeline,
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=94)** we need to specify what agent the pipeline will run on. Here, I'm going to go ahead and set this to any, this will cause a new workspace to be created for the pipeline and an executer to be allocated for it. The workspace is like a folder where the pipeline stores all of its files and the executer will run the pipeline on one of Jenkins nodes. Let's save our file and then we'll head over to the Jenkins configuration and I'll show you what I mean. Once you're in Jenkins, go ahead and click on the manage Jenkins option on the sidebar and then click on manage nodes. Here, you'll see the master node for our Jenkins server. Let's click on that. And then we're going to go ahead and click on its configuration. So in Jenkins, a node is a system that builds can be sent to by the central Jenkins controller. This allows the work performed by Jenkins like our builds to be distributed and scaled across a number of hosts. In a typical corporate environment, you'll find many nodes connected to Jenkins, but in our lab, we're just going to be running the Jenkins controller and builds on the same system. Now, if you're running part of your build in a container, it's important these nodes have Docker installed on them, and we do have Docker in the lab. Now at the moment we have two executor's on our node, but I'm going to go ahead and increase this to five that way we can run more builds at the same time. Once you've upped the number of executor's
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-jenkins-pipeline?u=76281980&t=187)** just go ahead and hit save, that way those changes are applied to our master node. So now we have a Jenkins file, a skeleton for a pipeline and a few more executor's. In our next lesson, we'll expand upon this pipeline to establish the stages in our CI process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (20)
> **CLI Commands:** node (4), make (2), docker (2), find (1)
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** dsl (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Pipeline stages](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=0)** - [Instructor] Within our [[Jenkins]] pipeline, we'll need to define the different stages and steps that will execute the CI process. This starts by adding a stages block inside the pipeline section of the script. Inside of this block, we can add individual stages that we'll execute as part of the pipeline. So let's go ahead and we'll add a stage that builds our application. You just provide the name of the stage here. This stage will compile our application source code and then package the application into an archive like a jar. A stage is like a group of commands. And in the pipeline, those commands are known as steps. So let's add a steps block inside of our stage. And then the first step we'll execute is the sh step. It allows us to execute shell commands inside of our pipeline. Now, eventually, we'll be building the application withMaven here. But for now, let's just echo some output to the console so that we can watch our pipeline execute. So here, I'll say Performing Maven Build. Okay, now we have our first stage. Let's go ahead and we'll copy this. And then we'll build out some of the other stages within our CI process. After the application's built, we'll need to create a container image that we'll use to run the application. So here, I'm just going to update the name of the stage to Build Container Image,
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/pipeline-stages?u=76281980&t=92)** and then we'll change the output to the console to reflect that. Okay, now we have the stage that builds our container image. After that, we'll need to publish the image to a container registry. So let's add a final stage into our pipeline and we'll update the name to indicate that we're publishing the image. And then once again, we'll change the output so that we can see that information as our pipeline executes. So now, our pipeline starting to shape up, we have three stages that correspond with the work we'll perform in CI process. But right now, our pipeline isn't generic enough to build each of our services. Let's pick up there in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (1)
> **Code Identifiers:** withmaven (1)
> **Exercise Files:** source code (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Environment variables](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=0)** - [Instructor] Within our pipeline. We can use environment variables to make our scripts more flexible and reusable. Environment variables are declared inside of an environment block within our pipeline. Here we can define and assign variables that are accessible by all the pipeline stages. So let's start out by creating a variable that will store our [[GitHub]] organization name. We first declare the variable name, and then we assign it a value. I'm going to use single quotes for our first variable. This is like creating a string literal in [[Java]]. So inside of the single quotes, I'm just going to type the name of my GitHub organization. Here you'll want to be careful to use your GitHub organization name and not mine. Now let's create another variable that will store the name of our container registry. Here I'm going to use double quotes because that allows us to use string interpolation. That means we can reference another variable inside of this string. To do that we need to create a placeholder. That's done by typing a dollar sign, an opening curly brace, and then a closing curly brace, and then inside of the curly braces, we just place the name of another variable that we would like to include within this string. This will get evaluated as an expression and the value for this variable will be placed inside the string. Now here we'll also need to include the domain
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=94)** for our container registry, which is the GitHub container registry. It's found at [ghcr.io](https://ghcr.io), then we'll place a forward slash, and then we'll end the string with a forward slash as well. Now let's create another variable that will store the artifactId from our POM.xml file. Within [[Jenkins]] we can use a pipeline utility step to retrieve that information from the POM. So here we'll just say, "read Maven POM", and then we'll invoke the getArtifactId method on that utility method. This will retrieve the artifactId from our POM and store it inside of our artifactId variable. Now let's go ahead and we can use that in another variable, the JAR name. So here we'll store the name of the JAR that we'd like to create through our Maven build. First, I'm going to reference the artifactId variable, using a placeholder. Then I'm going to specify a dash and then I'm going to use another placeholder to obtain the build number. Now the build number is another environment variable that Jenkins makes available by default for our pipeline. There's a number of these variables that Jenkins will make available to us. You can consult the documentation to see them all. Here we're using the build number as sort of a version ID for our JAR. All right, let's create one final variable,
>
> **[3:08](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=188)** which will be the image name. So here I'll use double quotes once again, then I'm going to include the container registry variable through interpolation, and following that will include the artifactId. And this will help build the name of our container image. Okay, now that we've declared these variables, let's go ahead and we can use them inside of our pipeline stages. So here where we're building the application, I'm going to say "Performing Maven Build" and then I'll include the name of the artifactId. Now you might be wondering why we can use single quotes here, and that's because this is actually part of the Shell Command that we're executing. So it will be referenced through that command as opposed to interpolation. All right, let's move on to our next stage where we're building the container image. And here I'm just going to add the image name into this step. And then we'll come down here to where we're publishing the container image. And I'm going to switch this up a little bit. I'll say where we're publishing the container image to, and here we can use our container registry variable. Okay, so now we're making use of these variables inside our pipeline stages, and this helps us avoid hard coding values that we might need for each specific microservice. And that's going to make our pipeline generic enough that we can reuse it across multiple [[Microservices]]
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/environment-variables?u=76281980&t=284)** in our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Jenkins]] (3), [[Java]] (1), [[Microservices]] (1)
> **Code Identifiers:** artifactid (6), getartifactid (1)
> **Env Vars:** pom (4), jar (3)
> **Tools:** github (4)
> **CLI Commands:** make (3)
> **File Paths:** pom.xml (1)
> **URLs:** [ghcr.io](https://ghcr.io) (1)
> **Documentation:** the documentation (1)

#### [Jenkins projects](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=0)** - [Instructor] Now that we have a basic pipeline script, let's see how it gets executed within [[Jenkins]]. In Jenkins, we have the option to create a [[GitHub]] organization project thanks to the Branch Source plugin that we talked about earlier. This project type will scan the repositories in our GitHub organization and create a new pipeline job for each branch within the repository where it finds a Jenkins file. It's a perfect fit for when your [[Microservices]] are stored in a poly repo, but there's a bit of configuration first. So let's go put that in place. So just navigate back to the Dashboard, and then, click on this option to manage Jenkins. From there, we'll want to go into the system settings. So click on Configure system. And then, if we scroll down within this page, we'll find the GitHub Enterprise Server section. There it is. So go ahead and click on Add, and then here we'll need to provide the end point of our GitHub instance. In this case, we're using the public GitHub API and that's located at [https://api.github.com](https://api.github.com). Okay, then we just need to provide a name for this enterprise server. I'll just call it GitHub. Now that we have that in place, let's go ahead and we'll save our configuration. And then, on the Dashboard, we can begin to set up our GitHub organization project.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=94)** To do that, just click on New item, and then, we'll need to provide a name for the project. I'm going to call it Landon dash hotel dash application. All right, once that name is in place, go ahead and click on the Organization folder, and then, hit Okay to create it. This will bring up a form where we can begin to configure the project. The first thing that we'll need to do is connect it to our GitHub organization. So here under Repository sources, click on the Add drop down and select GitHub organization. Then, you'll want to select your GitHub credentials. There's our personal access token, let's select that. Next, we'll need to provide a value for the owner field. This is the name of your GitHub organization. Mine is hotel dash landing dash KB. Now make sure you enter your organization name here. Next, we're going to scroll down and adjust some of the scanning behaviors of this project. So the first thing I'm going to do is just remove this option to Discover poll requests from forks. And then, I'm going to get ahead a little bit on setting up our automated deployment. So here I'm going to click on the Add button, and then, if we scroll down you'll see within Repository and here we'll want to select Filter by name with wild cards. You'll see this option where we can Exclude different branches. I'm going to tell our pipeline to ignore the release branch.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=190)** So if it finds a branch named Release, it's going to ignore any Jenkins files that it finds within it. Okay, with that in place, let's scroll down a little bit more, and there's some other configuration we'll need to put in place. Here within this section, Scan organization folder triggers, we're going to adjust how frequently our project polls the organization to discover new Jenkins files. It's currently set up for one day, which isn't going to be very great for our lab. I'm just going to reduce this down to one minute to speed things up. Now in an enterprise environment, you might want to scale this back just a tad. Okay, with that in place, let's keep scrolling down and here, you'll see the Child scan triggers. We're going to adjust this polling frequency as well to one minute, and this will determine how frequently the project polls the individual repositories that it discovers. So these are going to be the repositories containing our microservices and the actual source code. Okay, with that configuration in place, let's go ahead and we'll click on Save in order to create the project. Now you'll notice that instantly it begins scanning our GitHub organization, but it's not finding any Jenkins files within our projects. So let's change that. We can go ahead and push our Jenkins file for the room service to the GitHub organization. So I'm going to hop over to the terminal,
>
> **[4:45](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=285)** and within the Room service folder, I'm just going to perform a commit and then, we're going to push these changes over to GitHub. So first I'll set up my commit, I'll just say we're pushing the Jenkins file, and then, we'll go ahead and push the changes. Okay, they should be over in GitHub, and if we navigate back to Jenkins, we should see it pick up the changes to the repository. So there we see our GitHub organization project, and pretty soon we should see a build queue up. There we can see the scan of the GitHub organization taking place. Let's go back to our project. There you can see it picked up the room service and the Jenkins file within the main branch, and now it's starting to perform a build. Okay, it looks like our build was successful. Let's go ahead and we'll click on the build, and then, inside of it, we can see all the output that was written to the console when our build was performed. So there we start to see some of the steps that we included within the stages of our pipeline. There's the output for our step to build the application. Here's the output for when we want to create the container image. And then, finally, the output from the stage that publishes the container image. Excellent, so we executed our first pipeline, but we will need to do some more work
>
> **[6:19](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/jenkins-projects?u=76281980&t=379)** to actually build the application as part of our [[Continuous Integration (CI)|continuous integration]] process, and to get those containers built and published.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (18), [[Jenkins]] (11), [[Microservices]] (2), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Tools:** github (18), terminal (1)
> **UI Navigation:** click on (9), scroll down (4)
> **Prerequisites:** set up (3), configure (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we talked about (1), go back to (1)
> **URLs:** [https://api.github.com](https://api.github.com) (1)
> **Env Vars:** api (1)

#### [Maven builds in Jenkins](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=0)** - [Instructor] One of the best practices for [[Continuous Integration (CI)|continuous integration]] is to build your software on a neutral server. So we're going to update our Jenkinsfile to include a Maven build, kind of like what we did on our local workstation, except this time it's going to be automated, and performed on a cleaned server. To build our [[Java]] application with Maven inside of our Pipeline, we're going to add a new step into the Build Application stage. So inside the steps block, I'm going to add a new shell step, and here I'll use the Maven Wrapper to execute the clean and verify phases of the Maven lifecycle. Now, you might be asking, where did the Maven Wrapper come from? Well, when [[Jenkins]] executes a Pipeline, it pulls all the source code from the repository containing the Jenkinsfile. And you'll remember that we added the Maven Wrapper to our room-service project. So that makes it available to our Pipeline to execute Maven commands. Now, the next thing we'll do, we'll make our Pipeline generic enough so we can reuse it across different [[Microservices]]. The change starts in the pom.xml file. So inside the file, I'm going to scroll down to the build section. Here, I'm going to add the final name tag. This tag allows us to specify the name of the jar that Maven will produce when we build our app. Now, I'm not just going to hard-code any old jar name here.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=95)** I'm going to use an argument. To add an argument inside of a pom, we just use a dollar sign, then a set of curly braces, and then the name of our argument. In this case, it's going to be jarName. This allows the argument to be passed into the pom when we execute a Maven build. Let me go ahead, I'll copy the name of our argument, and then I'll show you how we pass it. Back in our Jenkinsfile, where we use the Maven Wrapper to execute the clean and verify phases, we can just add a -D, then the argument name, then an equal sign. And here we provide the value for the argument. Now, you'll remember, we already have a jar name environment variable that stores the name of our jar. Let's go ahead, we'll copy that, and then we'll add a placeholder here for the value of the argument. Okay, now our Pipeline is set up to build an executable jar with Maven. Let's do one more thing though. We're going to use the Docker Pipeline plugin to execute this stage inside of a Docker container. If we do a lot of builds, this can help increase the efficiency of our Pipeline. To run this stage inside of a Docker container, we need to override the configuration of the agent used to execute it. So I'm going to go ahead and add an agent block inside of the stage, and then inside of that, we're going to add a Docker block.
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=189)** And here we can use the Docker Pipeline plugin to set up the Docker container that will run the stage. The first thing we do is provide an image parameter, and this is the name of the container image that we would like to use to run the stage. Now, we're going to need a JDK. So I'm going to use the open jdk:11 image here. Then we're going to add one more parameter. It's going to be the reuseNode parameter, and I'm going to set it to true. Now what this does, it makes the workspace that's used in this stage available for later stages in the Pipeline. So, since we're going to be building our executable jar, we'll need that in later stages when we do something like build a container image. With this configuration in place, our Pipeline will execute this stage on a Docker container. So that means the node we run it on has to have a container runtime installed. Now, (indistinct) Lab already has Docker, so we're set up there. Okay, let's go ahead, we'll save all of our changes, then we'll head over to the terminal, and we can start to push these over to [[GitHub]]. So first, I'll add the changes to the stage, then we'll go ahead and we'll create a new commit, here, I'll say adding Maven and Docker, and then we'll push these changes over to GitHub, to trigger Jenkins to start executing our Pipeline. Now that they're pushed, let's go to Jenkins,
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/maven-builds-in-jenkins?u=76281980&t=286)** and we can watch this Pipeline execute. So I'll navigate inside of our room-service Pipeline into the main branch, and then we'll wait for the Pipeline. And right there we see the build queuing up, there it's starting to execute. Let's go check out the console output. Okay, it looks like the Pipeline was successful. We can also see we performed a successful Maven build. So let's scroll up a little bit further, and here we can check out the stage that ran inside of a Docker container. There we see the container image that we ran the stage with, and here you can actually see the Docker run command that executed the stage. Now our Pipeline is able to build the application with Maven and package it inside of an executable jar. That's great, but there's a little bit more work to do from here to run the application inside of a container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (3), [[GitHub]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Java]] (1), [[Microservices]] (1)
> **CLI Commands:** docker (11), make (1), node (1)
> **Tools:** github (2), terminal (1)
> **UI Navigation:** scroll down (1), go to (1), scroll up (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** jarname (1), reusenode (1)
> **File Paths:** pom.xml (1)
> **Ports:** :11 (1)

#### [Containers](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=0)** - [Instructor] Packaging modern [[Java]] applications within containers has become a popular practice because it's a consistent and portable way to run your software. Let's take a closer look at containers and how they impact the way we build and run modern Java applications. Containers allow us to easily package our application with its entire dependency stack into a single executable unit known as a container image. When building container images, we first need to package our Java application into an executable jar that includes an embedded server. Then we add other dependencies to run the application to the image. So inside of the container, we might place some configuration files necessary to run the app. But we don't stop there. We'll also include the JVM inside the image and a separate file system that mirrors the host operating system. So you wind up with the single artifact, the container image that contains not only the application, but its environment as well. Once we've built a container image, we can install a container runtime on any host and deploy the image there to run. Containers make our applications very portable. We can deploy the same container image to multiple environments and expect the same results. So if you deploy an image to the staging environment and then deploy it to production, you don't have to worry about a mismatch between the environments.
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/containers?u=76281980&t=92)** That's because the environment is packaged inside the container along with the application. Within the CI pipeline for a containerized app, the last step is responsible for building the container image and storing it within a container registry. Once stored in a registry, the image can be retrieved and deployed to an environment where it will run. To achieve this, our pipeline will integrate with two additional platforms that are essential for working with containers. The first is Docker, which includes build kit for building our container images and container D as the runtime that will run the image as a container. The next platform we'll use is [[GitHub]] Packages. It's a container registry within GitHub where we'll store the container images that we build. GitHub Packages is automatically included when you create a GitHub organization. So it's already available for us to use. So we have everything we need to build, store and run our Java applications as containers. Let's move onto the next lesson to see exactly how it's done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[GitHub]] (4)
> **Tools:** github (4)
> **CLI Commands:** make (1), docker (1)
> **Env Vars:** jvm (1)
> **Definitions:** known as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating a Dockerfile](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=0)** - [Instructor] To package our application within a container that runs on Docker, we'll first need to create a Docker file. A Docker file contains all of the commands necessary to assemble the container image that we'll package our [[Java]] application into. Within Eclipse, we can begin to create the file by right clicking on our project, going to new, and then coming down here to file. Within this dialog, we'll just type the name Docker file. Make sure that the F is lowercase. Once you have the name in place, then just go ahead and hit finish and the Docker file will get added to our project. All right, now we can add some commands into the Docker file. The first line in a Docker file indicates the base image that we'll be creating our image from. To specify the base image, just type the instruction from, and then provide the tag of an image that we would like to base our new image on. So here I'm going to use an open JDK version 11 image. It's going to contain a JDK that we can use to run our application inside the container. Next we'll set the work directory. It's going to cause all of the instructions after this point to be executed within the directory that we specify. Here it's going to be the app directory inside the root of the containers file system. After that, we're going to add an argument named JAR_FILE to the container. This is a variable that we can provide the value of when we execute our Docker build command.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-dockerfile?u=76281980&t=94)** This helps to make our container image more flexible and we'll be able to reuse this Docker file for all of the services in our application. We're going to use this argument to copy our JAR_FILE into the container. So we'll use the copy instruction and then we'll point to the jar file argument and then we'll copy that jar file that's provided to the Docker build into the app.jar file located within the container. So this is going to be our executable jar. Then we're going to expose port 8080 on the container. So this is where the container will listen for TCP traffic. And you'll remember that our apps are set up to be bound to port 8080. So all the traffic will be forwarded into the app. Finally, we'll add an entry point. This specifies the command that will be run when the container starts up. We just need to place each segment of the command within square brackets. The command we'll use for our entry point is going to launch the application with Java. So first I'll type Java, then I'll put a comma and then the next segment of the command, which is -jar and then we just need to provide the path to our application. So it's located in the app directory. And then the file we want to launch is app.jar. Okay, that's everything we need for the Docker file, which will be used to build our container image that runs our [[Microservices]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Microservices]] (1)
> **CLI Commands:** docker (11), make (2)
> **Env Vars:** jdk (2), jar_file (2), tcp (1)
> **Ports:** port 8080 (2)
> **Versions:** version 11 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Building container images in Jenkins](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=0)** - [Tutor] Now that we have a Docker file, let's build our container image and adjust our Pipeline to perform the task as well. So to get started, we're first going to package our application using the Maven wrapper. So I'll provide the argument for our jar name that's required by the build, and I'm just going to name the jar service. And then I'll tell Maven to execute the package phase. Okay. This will build and package our executable jar. Okay, now that we've built the jar, we can start working on creating our container image. To do that, we'll use the Docker build command. When we execute the build, we'll need to pass in the build argument that we specified in our Docker file. You'll recall it was named jar file and here we need to provide the location of the jar. And we know that within Maven it places the jar in the target directory, and then I name the jar service. All right, now that we have that set up, let's go ahead and we'll provide a tag for this image. I'm just going to call it room service local, and then we'll tell Docker to find our Docker file in this directory. Okay, we can go ahead and start performing the build. And there, it looks like our container image was built. Let's go ahead and we can take a look at our images inside of Docker. Yep, right there it is. Now that we know our container image builds, let's update our Pipeline
>
> **[1:32](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=92)** so we can build the container image using [[Jenkins]]. So I'm going to go ahead and start out by copying the command that we use to build the container. Then I'm going to head over to eclipse and inside of our Pipeline, I'm going to come down here to our build container image stage. Here, I'm going to add a shell step, and then I'll just paste the instructions that we executed to build our container image. Now, we're going to make some changes here to make our Pipeline more flexible. So instead of passing in this jar file location, let's make that a variable. So I'll go ahead and add a placeholder for the jar location, and then we're going to do the same thing for the name of the tag. I'll just create a new placeholder named image tag. Okay, now with the command in place, we can go ahead and create those environment variables that it will require to build our container image. That means we'll have to come up here to the environment section. The first environment variable that we'll create is the jar location variable. So here, we're going to specify the target directory, which is where Maven will place our executable jar. And then we're just going to use our jar name variable. And then after that, we're going add the extension dot jar. Okay, next we need to create our image tag. The image tag is going to rely upon the image name,
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/building-container-images-in-jenkins?u=76281980&t=189)** which we already have declared as a variable. So I can go ahead and add a placeholder. Then we'll add a colon, and then we're going to suffix it with our build number in order to create a version for that image. Okay, that should be everything we need to build our container image within our Jenkins Pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (2)
> **CLI Commands:** docker (6), make (3), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [tutor] (1)

#### [Publishing container images to GitHub packages](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=0)** - [Instructor] The final step in our [[Continuous Integration (CI)|continuous integration]] pipeline, we'll publish the container image to the organization's container registry on [[GitHub]]. To get started, we'll need to add another environment variable into our pipeline. This variable is going to store the URL of our container registry. So here I'll start with the protocol, and then I'm going to use a placeholder to refer to the container registry variable that we created earlier in the course. Now I'm going to go ahead and copy this variable because we'll use it within the final stage of our pipeline that publishes the container image. Inside of the steps block for this stage, I'm going to add a script block. This will allow us to include some groovy code that works with the Docker pipeline plugin. The Docker pipeline plugin allows us to configure our pipeline to use a custom container registry. That way, if we have steps in the pipeline that work with Docker, they don't use the default registry, which is Docker hub. To use a custom registry with the plugin, we wrap our pipeline steps within the withRegistry method. This method requires two parameters. The first parameter that we'll need to provide is the URL of our container registry. So here, I'm just going to add a placeholder for our container registry URL variable that we just created.
>
> **[1:34](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=94)** The second parameter that's required are the credentials that we'll use to authenticate with the container registry. Now you'll recall that earlier in the course, we created a [[Jenkins]] credential named github-pat, that stored our personal access token. We're going to provide that here. So Docker can authenticate with GitHub. Then we're going to go ahead and add a block for this method. Inside of the block, we're going to add a shell step that will execute the Docker push command, which will push our container image to the registry. Now, here we need to provide an image tag. So I'm going to add a placeholder that refers to the image tag variable we created within the environment block of our pipeline. Okay, now our pipelines all set up to publish our container image. Let's head over to the terminal and within the room service directory, I'm going to go ahead and stage these changes, and then I'm going to commit them. We'll say that we're publishing our container image. And then once we've created the commit, we can push it over to GitHub. This will trigger Jenkins to start initiating the build. So let's do that. And then we'll head over to Jenkins where we can wait for our build to start executing. There we see the build, enter the queue, let's step into the pipeline and watch it execute. There it's starting to enter the final stage
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/publishing-container-images-to-github-packages?u=76281980&t=191)** that pushes the container image. And it appears that our Jenkins build was successful. Let's head over to GitHub, and we can verify that the package was pushed to our organization. All we need to do is click on the packages tab within our organization, and there we can see the new container image. Let's go ahead and click on it. Excellent, there's our container image, and you can see the image tag that was assigned to it. So that wraps things up for the continuous integration phase of our delivery process. We're going to move on now to the next chapter where we'll take a look at [[Continuous Delivery (CD)|continuous delivery]] and continuous deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Jenkins]] (4), [[Continuous Integration (CI)|Continuous integration]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **CLI Commands:** docker (6)
> **Tools:** github (5), terminal (1)
> **Env Vars:** url (3)
> **Cross-References:** earlier in (2), next chapter (1)
> **UI Navigation:** click on (2)
> **Prerequisites:** configure (1), set up (1)
> **Code Identifiers:** withregistry (1)


### 6. Continuous Delivery with Argo CD

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuous delivery overview](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=0)** - [Instructor] [[Continuous Delivery (CD)|Continuous delivery]] and continuous deployment are the last pieces of the end-to-end delivery process. At a basic level, these are a set of automated steps that takes packaged software from an artifact repository, deploys it for testing, and then releases it to the environment where it runs live for end-users to access. Continuous deployment pipelines vary widely across different organizations and are influenced by many factors. For example, how far you decide to take the automation will determine whether you're practicing continuous delivery or continuous deployment. In our process, initially, we'll manually trigger deployments to the production environment. So when I refer to the CD pipeline over the next few lessons, just know that I'm talking about continuous delivery. The technology stack will also heavily influence the tools and steps within a CD pipeline. For modern [[Java]] applications like ours, our pipeline will leverage specialized tools for working with [[Kubernetes]]. That's the platform where we'll run our containers. Execution of the pipeline is triggered when a new container image has been built and published. In our process, we'll trigger the pipeline by including some code in the CI pipeline that is executed after it publishes a new image. Once triggered, the CD pipeline will automatically deploy the container image into a non-production environment,
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-overview?u=76281980&t=95)** which in our case is a Kubernetes cluster. To automate deployments into both the non-production and production environments, we'll be using two tools, [[Argo CD]] and Customize. Once the container is running in the non-production environment, additional tests can be ran against the deployed container. These tests are typically more expensive to create and to perform. That's why we run them later in our delivery process. This might include tests like manual acceptance testing, performance testing, or end to end tests. If everything passes this round of tests, the pipeline waits for someone to approve the production deployment. The approval is usually given by a business or operations team member who approves a poll request or clicks a button that allows the software to be deployed. Now, once again, here, we're talking about continuous delivery. In continuous deployment, this would be automatic and we would move right to the next step. This step deploys the container image into the production environment. For continuous delivery, it's going to be based upon receiving that manual approval, but ultimately for both practices, the deployment will release the changes for the end users to access. So that's a high level look at the basic steps that might be found within a simple CD pipeline. However, they can get much more complex. For our purposes, we'll keep it simple by sticking to a pipeline that uses [[Jenkins]], Customize, Argo CD, and a little bit of Bash.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (5), [[Kubernetes]] (2), [[Argo CD]] (2), [[Java]] (1), [[Jenkins]] (1)
> **CLI Commands:** cd (6)
> **Cross-References:** later in (1)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Container orchestration](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=0)** - [Instructor] Large organizations may run hundreds or even thousands of containers. This is a scale that's impossible to manage without the help of a container orchestration platform like [[Kubernetes]]. A container orchestration platform manages a group of hosts known as nodes that form a cluster. When we want to run a container on the cluster, we wrap them inside of a pod. Then the orchestrator deploys them as a workload to one of the available nodes within the cluster where a container runtime is installed. The container runtime is then used to spin up and run our container. Let's talk a little bit about how an orchestrator, like Kubernetes, works at a high level. In Kubernetes, the control plane acts as the manager of the cluster. When we want to run a containerized application on Kubernetes, we send a call to its API using a command line tool named Kube CTL. We might tell it that we want to run four copies of a pod that contains a specific container image on the cluster. Once the API receives the request, it determines which nodes in the cluster should run the pods. Then it issues the command to deploy the containers to them through the Kubelet that runs on each node. The pods are then deployed on the node and the control plane constantly monitors their state to ensure that we always have our four copies
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/container-orchestration?u=76281980&t=93)** known as replicas running inside the cluster. Pods are just one of the resources that run on a Kubernetes cluster. We normally specify them within the configuration of another resource known as a deployment. Other objects like services and ingresses can be created using the Kubernetes API to deploy them as part of our application's architecture running on the cluster. Kubernetes resources are declaratively described within a YAML file, referred to as a manifest. Just think of the manifest as a configuration file that describes a resource that we want to run on the cluster. Managing these YAML resource definitions can become quite the task when you consider how many [[Microservices]] an application might have, and then add on top of that, the different environments you might want to deploy to. In our next lesson, I'll show you how Kustomize can help us manage this complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (7), [[Microservices]] (1)
> **Env Vars:** api (3), yaml (2), ctl (1)
> **Definitions:** known as (3), is a  (1)
> **CLI Commands:** node (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Managing Kubernetes resources with Kustomize](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=0)** - We'll be using Kustomize to manage the YAML configuration files for the [[Kubernetes]] resources in our application. Those manifests are located inside the deploy project within our exercise files. These files are also stored in the deploy repository over on [[GitHub]]. Let's open up this directory inside a terminal to explore Kustomize. When working with Kubernetes, there's often slight variations between the resources we need to deploy on the different clusters for each environment. For example, in this manifest, which defines Ingress routes that direct traffic coming into the cluster, we need to use different values for the host property for staging and production. The staging cluster we'll use staging.landon.[linkedin.io](https://linkedin.io), and the production cluster, we'll use the value that we see here, landon.[linkedin.io](https://linkedin.io). Kustomize allows us to use the same YAML configuration files for these environments. However we can apply small kustomizations where they differ. Let's take a look at the structure of our Kustomize directory to see how this works. Inside of the directory we have the base folder. It defines all of the resources that we need to include in both environments. So here we'll find things like deployments or services. You'll also notice this kustomization.yaml file. Let's go ahead and we'll take a look at that.
>
> **[1:37](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=97)** Inside of the kustomization.yaml file, we define all of the resources that we'll need to run our application. So here you see all those YAML files that we defined in the base. Now if we go back and take another look at our Kustomize directory, you'll see these overlays, one for production and one for staging. And then each overlay has its own kustomization.yaml file that it uses to apply small variations for the environment. Let's take a look at the kustomization for our staging overlay. Within it you'll notice that it indicates it uses all of the resources that we saw in the base, but it does provide its own kustomization for the app-ingress.yaml file. Let's take a look at that. If we scroll up within the file, you'll notice that the staging overlay provides its own value for the host property. So here's the kustomization we'll make for the staging overlay. When we build this overlay, it's going to lay this configuration on top of what we saw in the base. Here, let me show you how it works. We'll go ahead and use Kustomize to build our staging overlay, and let's watch what happens here. First you'll notice that a configuration was generated that contained all of the manifests we found within the base. Now if we scroll down here to take a look at the Ingress,
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=193)** you'll see that the kustomization for the staging overlay was applied, there we see staging.landon.[linkedin.io](https://linkedin.io). So you can use Kustomize to apply these kustomizations for each environment, but Kustomize can also be used to update the versions of container images that are set within our resources. Let me show you how this works. If we scroll up a little bit, here we're going to find a deployment for a room service. Within this deployment, we specify a container image that's going to run inside of a pod, and you'll notice we set the version of that image to one. Using Kustomize, we can update this container image version. Let's go ahead and I'll copy the name of our fully qualified container image and then I'll show you how this works. So I'm going to first navigate into the base directory, and then here we can use Kustomize to update the container image version. To do that we use the edit set image command, then we provide the name of our image followed by an equal sign, then the name of the image we would like, followed by the version we would like. Now here I'm going to use 22 to make it obvious. Now let's go ahead and we'll update the container image, and now let's take a look at what happened. If we look at the kustomization.yaml file in our base, you'll notice it now includes a kustomization we applied to update the container image,
>
> **[4:47](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/managing-kubernetes-resources-with-kustomize?u=76281980&t=287)** there it sets it to 22. Now let's go ahead and we'll use Kustomize to build our base. If we take a look at the generated YAML, you'll notice that our container image has been updated to 22 for our room [[Service Deployment]]. It's much easier to manage all these resource configuration files for our different environments using Kustomize. And as an added bonus, [[Argo CD]] works with it right out of the box. We'll be using it as part of our CD pipeline to help manage the container images that are defined within our YAML configuration files for each cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Kubernetes]] (2), [[GitHub]] (1), [[Service Deployment]] (1), [[Argo CD]] (1)
> **CLI Commands:** find (2), make (2), cd (2)
> **File Paths:** kustomization.yaml (4), app-ingress.yaml (1)
> **Env Vars:** yaml (5)
> **URLs:** [linkedin.io](https://linkedin.io) (3)
> **UI Navigation:** scroll up (2), scroll down (1)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** exercise files (1)

#### [Creating a CD pipeline](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=0)** - [Narrator] To deploy the correct versions of our [[Microservices]] onto our [[Kubernetes]] cluster. We'll need to update our resource manifests with the latest container images built by the CI pipeline. To automate this, we'll use another [[Jenkins]] pipeline that's found within the deploy project, inside the exercise files for this lesson. This pipeline will be shared by each of the microservices inside of our application and used to deploy them. Let's walk through each part of this script to learn exactly what it does. The script includes an options block that configure some unique behaviors for this pipeline. The first option, disable concurrent builds prevents the pipeline from executing more than one run at a time. This is important because it prevents conflicts between our deployments. The next option override index triggers, prevents the pipeline from executing when a new commit is made to the deploy repository. This is necessary because the pipeline itself, will commit changes to the manifests in the repository. And we can't have those commits triggering another build. It will create a loop. The pipeline is also configured to accept parameters that are passed to it by the CI pipelines for each microservice. These parameters are used to update the manifests with the latest container image. The parameters received by the pipeline include, the [[GitHub]] organization name,
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=93)** the image name, and its version. These are all provided by the jobs that trigger the pipeline. The pipeline also declares one environment variable that holds the SSH URL to our deploy repository within GitHub. To keep things flexible, we use the GitHub org parameter that's passed into the pipeline to construct this URL. Now let's talk about the work that this pipeline performs within its stage. The first step in the stage uses the get plugin to pull the main branch from the deploy repository where all of our manifests are found. The [[Git]] plugin requires us to provide the URL of the deploy repository and an SSH key that's used to authenticate with GitHub when all the files are pulled from the repo. After we've pulled the manifests from the repository, we then configure git to identify the pipeline as the committer. That's done in these two commands. That's necessary because in later stages, the pipeline's going to perform a commit. The changes that the pipeline will commit are made here, where we use customized to update the container image found within our manifests. To do this, we use the customized edit set image command. This command leverages our image name, parameter and our version parameter to update the version for the container image.
>
> **[3:10](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=190)** Once we've updated that version inside of our manifests, we commit those changes to our local repository. Then we use the SSH agent plugin and an SSH key in order to authenticate with GitHub when we push those changes to the main branch of our repository. Once those changes are pushed, our deployed repository in GitHub, will contain the latest container image that was built by the CI pipeline. Now that we've talked through the pipeline, let's go ahead and we'll push the Jenkinsfile over to GitHub. To do that, I'm going to head to a terminal and I'll stage our changes. Then I'll go ahead and create a new commit and for the message, I'll just say adding the new pipeline. Once I've created the commit, I can go ahead and push those changes over to GitHub. Now this will cause Jenkins to pick up the pipeline when it scans our organization and then all tempt to execute it. Now I'm going to warn you. It's going to fail, but let's go ahead and we'll do the push anyway, and then we'll head over to Jenkins. Soon we should see the organization folder scan, pick up the new pipeline. Okay. There it went. Let's go ahead and we'll refresh our page. There we see the new pipeline. Let's navigate into it and we can see it has failed, but let's check it out.
>
> **[4:43](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/creating-a-cd-pipeline?u=76281980&t=283)** So I'll click on the main branch and then go into our first build. And then within the console output, you can see that the pipeline failed because we haven't passed any parameters to it. We'll need to create the trigger within the CI pipeline to pass those parameters. Let's pick it up there in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Jenkins]] (3), [[Microservices]] (2), [[Git]] (2), [[Kubernetes]] (1)
> **Tools:** github (8), terminal (1)
> **Env Vars:** ssh (4), url (3)
> **CLI Commands:** ssh (4), git (2)
> **Prerequisites:** configure (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Triggering the CD pipeline](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=0)** - [Instructor] After the [[Continuous Integration (CI)|continuous integration]] pipeline creates a new container image, we'll need to trigger our CD pipeline so that it can update our [[Kubernetes]] manifest with the new container image. To do this, we'll add another stage at the end of our CI pipeline. So I'm going to go ahead and open the Jenkinsfile for our room service. At the end of this pipeline, we're going to add another stage that will perform the trigger. So I'll add the stage and then I'll update its name to trigger CD pipeline. Inside of the stage, we'll go ahead and add a steps block. Inside of this block, we'll use the build step plugin to execute our deployment pipeline. The plugin takes two parameters; first is the name of the job, and then second are the parameters that we'd like to pass to it. You'll notice the parameters are passed as an array. The easiest way to find the name of the job you'd like to execute is to just go into [[Jenkins]] itself. So here on the page for our deployment pipeline, you can find the name of the job right here. So I'm going to go ahead and copy that, and then I'll return back to Eclipse, here I'll add a forward slash and then paste the name of our job. Now let's work on adding the parameters. There's a trick we can use to add those too. If we navigate over to our deployment pipeline, let's copy the parameters that it accepts.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=95)** Then we can go back to the Jenkinsfile for our room service and paste in those parameters. The syntax is very similar for how you pass and accept a parameter. I just need to do a little bit of formatting now that we've pasted those. Okay, so now we have the parameters we're going to provide, but we need to add a value property. So here I'll go ahead and add that property, and then for the first property we'll add a placeholder to our [[GitHub]] org environment variable. Now let's go ahead and we'll copy this syntax and we'll paste it in for each of the other parameters. And then I'm going to go ahead and adjust the placeholders. For the image name, we can use the image name environment variable, and then for the version we're going to use the build number. So that's everything we need within our CI pipeline to trigger our deployment pipeline. Now we have this and the Dockerfile in place for our room service, but we need to add that to the other services because we haven't already. Now, because we've made these pipelines in Dockerfiles so generic and parameterized, we can just copy and paste them into the other projects. So let's go ahead and we can do that right inside of Eclipse. I'll just select the Dockerfile and the Jenkinsfile, and then we'll copy those, and then I can go into the other projects
>
> **[3:09](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=189)** and just paste them. Okay, there we have them for the web app, let's now add them to the guest service, and then finally we'll add them into the booking service. Okay, so now these files are in the projects locally. We need to push these over to the repositories in GitHub. So let's head over to the terminal and here I'm going to cheat just a little bit. You'll notice that within the exercise files, there's the update repost script. This script is going to navigate into each project, stage the changes, commit them and then push them over to GitHub. It's a quick way to commit all the changes to our projects. Now you can use this, but make sure you have a little bit of horsepower on your machine because it's going to trigger a lot of builds very rapidly. Let's go ahead, we'll run the script and that's going to start pushing our changes over to GitHub. I'm going to head over to Jenkins at this point, and we can watch for the new pipelines to get picked up. Okay, there, we can see some coming in. Let's go ahead and we'll refresh our GitHub organization project, and there we can see the pipelines have been picked up. And if we navigate to the deploy pipeline, we can watch as they trigger it. There you can see the continuous integration pipelines running for several of the [[Microservices]]. Let's head into our main folder and here we'll start to see the CD pipeline get triggered.
>
> **[4:46](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/triggering-the-cd-pipeline?u=76281980&t=286)** All right, there was the first successful execution. Excellent. It looks like each of our microservices was built into a container image, and then we were able to execute the deployment pipeline for them. To verify that, let's head over to our GitHub organization. Inside of the packages tab, we can see the different containers that were placed in the registry. Now let's go back and we can take a look at the deploy repo. Inside of the deploy repo we'll navigate into the base directory, and here we can take a look at the customization. You'll notice that the customization includes the updated images. Now that our CD pipeline is stood up and our resource configurations are updated, we're now ready to automate deployment of the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Continuous Integration (CI)|Continuous integration]] (2), [[Jenkins]] (2), [[Microservices]] (2), [[Kubernetes]] (1)
> **CLI Commands:** cd (4), find (2), make (1)
> **Tools:** github (6), terminal (1)
> **UI Navigation:** open the (1), select the (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Automated deployment](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=0)** - [Narrator] To automate deployments to our [[Kubernetes]] cluster, we're going to use [[Argo CD]]. It's a continuous deployment tool built for Kubernetes that uses a GitOps approach. To perform deployments, Argo CD places a controller inside the cluster. The controller continuously monitors a set of Kubernetes manifests stored inside of a [[Git]] repository. So, in a manifest, inside of Git, we might identify a container image that contains our microservice inside the specification for a pod. The controller reads that information and then communicates any new resources that need to be created inside the cluster to the control plane. The control plane sends those instructions to the nodes in the cluster so they can apply the resources. This causes any images specified in the resources to be pulled from the registry and spun up as containers on the worker nodes. In a nutshell, that's how Argo CD can automate the deployment of our containerized applications to Kubernetes. Within our lab environment, we have two Kubernetes clusters running with Argo CD installed. One for staging and one for production. We'll configure Argo CD to monitor the deploy repository that was created earlier in the course when we established our [[GitHub]] organization. During the setup for Argo CD, we'll configure it to monitor specific Git branches and the respect of customize overlay for each cluster.
>
> **[1:36](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/automated-deployment?u=76281980&t=96)** The staging cluster will monitor the main branch and the production cluster will monitor a branch named release. When we build a new container image, our deployment pipeline is configured to update the base customization in the main branch with the new container version. This will cause Argo CD to deploy it to the staging cluster. To deploy and promote new container images to production, we'll then merge the main branch into the release branch. We can manually perform this merge using a poll request or the pipeline can do the merge for us and automate the production deployment. Either way, Argo CD will detect the changes and release them to the production cluster. As you've probably noticed, running [[Microservices]] within containers introduces quite a bit of complexity into our [[Continuous Delivery (CD)|continuous delivery]] process. There certainly a lot of work upfront, but once you've established your pipeline, it significantly increases the velocity at which you can deliver changes to your modern [[Java]] applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Argo CD]] (8), [[Kubernetes]] (5), [[Git]] (3), [[GitHub]] (1), [[Microservices]] (1)
> **CLI Commands:** cd (8), git (3)
> **Prerequisites:** configure (2), setup (1)
> **Cross-References:** earlier in (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)

#### [Configuring Kubernetes security](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=0)** - [Instructor] To automate the deployment of our [[Microservices]] on the [[Kubernetes]] cluster, we'll need to set up the security configuration that allows the cluster to pull images from the container registry. To see how this works, let's take a closer look at one of our deployments. Inside of the deployment, we defined the spec for a pod. It indicates the container image that will run inside of our pod. And you'll notice that the container image is found on the [[GitHub]] Container registry. So in order for the cluster to pull that image, it will need to authenticate with GitHub. Now to do that, we've configured an imagePullSecret. The PullSecret's name is regcred. It's going to be a secret that we'll create inside the cluster that holds our personal access token, and that's what the cluster will use to authenticate with GitHub. Now, if we come back up to the top of our deployment, you'll notice that it's created within the landon-hotel namespace. So that's where we'll need to create our secret inside the cluster. Let's head over to the terminal, and we can start to set all this up. So first, I'm going to use kubectl to create our landon-hotel namespace. All right. There, we created the namespace. Now let's go ahead and we'll create our secret. So here's the command that creates the secret. You can see that we use kubectl, and then we create a secret for our Docker registry, named regcred.
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/configuring-kubernetes-security?u=76281980&t=95)** To create this secret, we need to provide the domain of our container registry, our GitHub username, along with our email, and then we'll provide our personal access token, which are the credentials that will be used by the cluster to authenticate. Then we need to tell the cluster what namespace to create the secret within. So here, we specified landon-hotel. All right, let's go ahead and we'll create our secret. And there, you can see the cluster's indicated it's been created. All right, so that configured our staging cluster, but we'll need to switch our kubectl context over to the production cluster and run the same commands. So first, let's get the name of our contexts. There, you can see the staging context, which we're currently on, and here's the production context. Let's go ahead. We'll copy that name. And then we'll switch our kubectl configuration over to use the production context. All right, now we're connected to the production cluster, and we can go ahead and run those commands one more time. All right, so there we created the namespace, and there, we created the secret. Okay. So the security's all set up on our cluster. Let's move on to the next lesson and start to set up our GoCD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Microservices]] (1), [[Kubernetes]] (1)
> **CLI Commands:** kubectl (4), docker (1)
> **Tools:** github (4), terminal (1)
> **Prerequisites:** set up (3)
> **Code Identifiers:** imagepullsecret (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [Deploying microservices with Argo CD](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=0)** - [Instructor] Inside of our lab, [[Argo CD|ArgoCD]] is already running on our staging and production clusters. However, there's a little bit of configuration we'll need to do in order to get Argo to deploy our application on those clusters. To access either instance of ArgoCD, you can use these links in the bookmarks bar. There's one for staging and one for production. Let's start in the staging environment. Here you can provide the credentials admin, admin in order to log into the ArgoCD instance. Now, once we're in ArgoCD, let's click on this gear to set up a repository. This is going to define ArgoCD's connection to the repository that holds our manifest, which tell it what to run on our cluster. So let's go ahead and we'll click on this button, and then we'll need to select the type of connection we'll establish. I'm going to select this option, which uses SSH. Then we'll need to provide a name for the connection. I'm just going to call it landon-hotel. And then here we'll need to provide a link to the repository that holds our manifest. So let's head over to [[GitHub]] into our deploy repository. And here I'm going to go ahead and copy the SSH URL to the repo. Now, you'll recall this repository holds our manifests and our customizations. So now let's go back to Argo, and we'll paste in that link.
>
> **[1:33](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=93)** Then we'll need to provide the private key of our SSH key that we created earlier in the course. So I'm going to head over to the terminal and you'll remember that we placed the private.key within our home directory for convenience. So I'll print that out to the terminal and then I'll carefully copy it from there. All right, once I've copied it, I'll go back to ArgoCD, and I can paste it right here in this text box. Okay, that's everything we need for a connection. Let's go ahead and we'll hit connect. And then you'll notice that the connection was successful. So now we can click on these ellipses and create an application. So here we're going to configure the application that ArgoCD will deploy onto the cluster. First, we'll need to give the application a name. I'm going to call it landon-hotel-staging. Then just go ahead and select the default project. And then we'll need to configure the sync policy. So I'm going to select automatic here, and this will allow ArgoCD to automatically apply the configuration that it reads from our [[Git]] repository on the cluster. If we selected manual, we'd have to click a button for it to sync. Then I'm going to click on these two options. And these allow ArgoCD to remove resources from the cluster if they're not found in Git. All right, if we scroll down further, here we can adjust the resources
>
> **[3:07](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=187)** that ArgoCD will pull from the repository. So first, I'm going to change our staging instance to pull the resources from the main branch in the repo. Then we can select the staging overlay. So this will cause ArgoCD to use customize to apply the staging overlay when it's determining what needs to run on the cluster. All right, now if we scroll down here, we'll just select this option for our cluster URL, and then we need to provide the namespace where we want these resources to be applied. So you'll recall that we're using the landon-hotel namespace. That's where we created our secret. And then if we scroll down, you can see that ArgoCD recognizes that our repository is using customize. Now, we don't have to adjust anything here. So let's just go ahead and we can create our application. Okay, so while ArgoCD is deploying those resources on our staging cluster, let's head over to our production cluster. And we can start to configure the production environment. Once again, the credentials are admin, admin. And then we're just going to walk through the same process. So I'm going to go pretty quickly here. We'll click on this option, then we'll select the repositories, and then we'll select the SSH option. We'll go ahead, give this a name.
>
> **[4:40](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=280)** Then we'll need grab our URL once again. We'll just paste that in there. Then we'll go back to the terminal. And we'll copy our private key. Then we can paste that in to the text box and create our connection. All right, it looks like it's successful. Now let's create the app. And here we'll name this landon-hotel-prod. Once again, we'll select the default project, the automatic sync policy. We'll allow it to prune and self-heal. Then we'll scroll down. Now, this next part's important. We only want production to pull the manifest from the release branch. So let's go ahead, we'll enter the name release for the branch. And then we'll go back to GitHub and we can create that branch. All we need to do is click on this dropdown and then type the [[Microsoft Word|word]] release. And then we can click on this option to create the release branch. Okay, now we have the branch. Let's go back to ArgoCD and we can continue our configuration. Now, for the path, I'm going to go ahead and enter overlays/production. This will cause the production overlay to be applied by ArgoCD when it determines what resources need to run on the cluster. All right, now let's scroll down. We can select this option for our cluster URL. Once again, our namespace is landon-hotel.
>
> **[6:17](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/deploying-microservices-with-argo-cd?u=76281980&t=377)** And that should complete our application configuration for the production instance of ArgoCD. All right, let's go ahead and we'll click on the button to create the app. There you can see ArgoCD is starting to sync the resources from the Git repository onto the cluster. Right now it looks like it's pulling the different container images. Now we're starting to see a few of the pods come online, and it looks like our app is up. All right, now to hit the app, let's go back to the application section and then here, we can click on this first link. It might take a second though for the app to spin up. Let's just give it a minute and then we'll refresh. All right, excellent. We have our application up and running and we're in production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Argo CD|Argocd]] (17), [[Git]] (3), [[GitHub]] (2), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (9), select the (6), scroll down (5), dropdown (1)
> **Env Vars:** ssh (4), url (4)
> **CLI Commands:** ssh (4), git (3)
> **Cross-References:** go back to (6), earlier in (1)
> **Tools:** terminal (3), github (2)
> **Prerequisites:** configure (3), set up (1)
> **Speakers:** - [instructor] (1)

#### [Continuous delivery with Argo CD](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=0)** - [Instructor] Now that we've established an end-to-end delivery pipeline, let's use it to deliver a change to our application. We're going to make a pretty small change to start out. We're just going to update this bookings header to say recent bookings. So let's head over to Eclipse, and within the hotel web app project, we can open the booking.[[HTML]] file. And here's where we can make the change. So inside of the file, if we scroll down, we'll find our header. And here we can go ahead and update it to say recent bookings. Now, with that change in place, let's go over to the terminal and inside the hotel web app directory, I'm going to stage the changes, then I'll go ahead and add a commit, we'll say, updating the header. And then we'll go ahead and push this over to [[GitHub]]. That push is going to kick off our [[Continuous Delivery (CD)|continuous delivery]] pipeline. So once we issue the command, let's go over to [[Jenkins]], and we can start to watch it execute. Okay, Jenkins just picked up the change, and that's going to kick off our [[Continuous Integration (CI)|continuous integration]] pipeline for the web app. Let's go check it out. There we can see it's already running. Now we've built our executable jar and we're starting to create our container image and publish it to GitHub container registry. Okay, we're about ready to kick off our deployment pipeline. Let's go navigate into it to watch it execute.
>
> **[1:39](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=99)** There it's starting to execute, and this is going to update our manifests within GitHub using customize. All right, it looks like the changes are in place. Now let's go over to [[Argo CD]]. Then we'll head into our application and we can wait for it to pick up the change. Okay, Argo CD just realized it's out of sync and now it's reading our manifests and applying those changes to our [[Kubernetes]] cluster. All right, it's all synced up, and our new container image is deployed and running on Kubernetes. Let's go back to our staging application and here I'm going to refresh the page, and there we can see the changes applied. Now because we're only practicing continuous delivery, we stopped the automated deployments at the staging environment. To promote these changes to production, we'll need to manually trigger the deployment. So let's head over to our GitHub organization, and here we can navigate into the deploy repository. Then I'm going to click on the Pull request tab, and we can click on this button to start creating our pull request. To set up the pull request, we'll merge the main branch into the release branch. The main branch contains the changes in our staging cluster, and by merging them into release, we're going to promote them to our production cluster. Now, if we scroll down, we can see the changes to our customization.eml file.
>
> **[3:13](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-delivery-with-argo-cd?u=76281980&t=193)** It simply updates the container image for the hotel web app. When Argo CD builds the customization for the production overlay, it's going to cause this new container image to be in that manifest, which will be applied to the production cluster. All right, that looks good to me, so I'll go ahead and start building the pull request. There we can see we have a simple title that'll work, I'll click on the pull request button. Once the pull request is created, I can then go ahead and merge it after I confirm. And this will cause the changes to be released over to our production cluster. Let's head into our Argo CD production instance to watch the changes be applied. So here I'll go ahead and log into Argo CD, and then we'll navigate into our application. There Argo CD just realized the production cluster was out of sync, and now it's applying the changes in our manifests, and we see it spinning up a new pod. All right, it looks like everything is synced, let's go hit the production application. Okay, and there we can see the changes were released to the production cluster. So you can start to see how the automation in our continuous delivery process allows teams to increase the velocity at which they deliver changes. But we can take it a step further by adopting the practice of continuous deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Argo CD]] (6), [[GitHub]] (4), [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Jenkins]] (2), [[Kubernetes]] (2)
> **CLI Commands:** cd (6), make (2), find (1)
> **UI Navigation:** click on (3), scroll down (2), open the (1)
> **Tools:** github (4), terminal (1)
> **File Paths:** booking.html (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### [Continuous deployment with Argo CD](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=0)** - [Instructor] Once you become comfortable with [[Continuous Delivery (CD)|continuous delivery]], you might decide to automate production deployments. To switch to continuous deployment, we'll need to extend the automation a bit in the script for our deployment pipeline. So let's get started. The first thing that we'll need to do, is copy the stage that deploys our application to the staging environment. I'm going to go ahead and I'll place it here, as the last stage within our pipeline. Once it's in place, I'm going to then switch its name over to, Deploy to Production. All right. Now it's just going to take a few tweaks to automate our production deployments. In this first step, which uses [[Git]] to pull the manifests from the main branch into the workspace, we'll need to change the branch that it pulls from. Instead, we're going to pull from the release branch and those are the manifests that will get applied on our production cluster. Now you'll recall, when we promoted our changes to production manually, all we did was merge the main branch into the release branch, and that's all we need to do here. We're just going to automate it. So let's go ahead, and we'll remove this step that uses customize. And then we're going to switch this command, which performs a commit over to perform a merge. So we'll say, git merge main. And this will cause the changes in the main branch, which are currently applied to the staging environment,
>
> **[1:35](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=95)** to be merged into the release branch where [[Argo CD]] will build the production overlay and apply the changes to the production cluster. Okay. There's one last thing. Here, you can see that we're pushing the changes to the main branch to [[GitHub]]. Instead, we need to push the changes in the release branch to GitHub. Okay. Now everything's in place to automate our production deployments. I have to point out one more thing here though. Before we would push to production, we should do a lot of testing, and verification of these changes to make sure they're production worthy. But we're focused on the mechanics of the pipeline, so we're going to head over to the terminal, and here, I'm going to go ahead and stage these changes inside the deploy repo. Then I'll make a commit. We can say that we're adding continuous deployment. Then we'll push those changes over to GitHub. And that will cause [[Jenkins]] to pick them up. And our deployment pipeline will have the final stage within it that automates the deployment to production. All right. Now that that's being put in place, let's go make a change to our application so that we can run it through our pipeline. So back in Eclipse, you'll notice I have three other files open. These are part of the hotel-webapp project, and we've seen the bookings.[[HTML]] file before, but there's also two other pages, guests and rooms.
>
> **[3:11](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=191)** And these provide information about the different guests staying at the hotel and the rooms that are available. We're going to update our bookings.html page to add links to these pages within its menu. You can see that here. Let's just go ahead and we'll add in the links. And then these pages will be available within the web application. Now that we've made the updates to our app, let's head over to the terminal, and we can commit them to the hotel-webapp repository. Once again, I'll stage our changes, then I'll create the commit. I'll say we're updating the nav links. We'll go ahead and push these changes over to GitHub, to trigger our pipeline. All right. Now let's navigate to Jenkins, so that we can watch the pipeline execute. Okay. Jenkins is queuing up the build. So let's head into the hotel-webapp pipeline. And we can see it's already executing. And it's getting ready to trigger the deploy pipeline. Let's head over there, and we can watch the automated deployments. Okay. It just triggered the production deployments. Let's wait a few minutes, and then we'll check the status of our apps. All right. Let's see if the changes were deployed to the staging environment. Okay.
>
> **[4:44](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/continuous-deployment-with-argo-cd?u=76281980&t=284)** There, we can see the links to the new pages and we can hit them, which we'll call back to the different [[Microservices]] that provide the information displayed on the page. Now, let's see, how the automated deployment to production is doing There we see the links, and it looks like the release has been performed to production. So now we've built an end-to-end delivery pipeline for a modern [[Java]] application that is architected to use microservices. The mechanics of our delivery process are now automated, and we can consistently and safely repeat them. When developing software this is a game changer that will accelerate the pace and tempo of your project, your team, and your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Jenkins]] (3), [[Git]] (2), [[HTML]] (2), [[Microservices]] (2)
> **CLI Commands:** make (3), git (2), cd (1)
> **Tools:** github (4), terminal (2)
> **File Paths:** bookings.html (2)
> **UI Navigation:** switch to (1), navigate to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Course Wrap-Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Course wrap-up](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-delivery-for-cloud-native-java-apps/course-wrap-up?u=76281980&t=0)** - [Kevin] Before we conclude the course, I want to highlight some other topics you might explore and provide you with information about my other courses. Now that you've seen the power of [[Continuous Delivery (CD)|continuous delivery]], I would recommend checking out some of the [[Quality Assurance]] tools that can be included in the pipeline. We focus mainly on the mechanics of how the pipeline can deliver changes, but there's a huge ecosystem of tools that it can use to test and verify our software. You might also want to check out progressive delivery. It introduces some advanced techniques for how we continuously deploy our applications. If you like my teaching style, I have a few other courses on the [[LinkedIn]] Learning platform that might interest you. I can teach you about other topics like [[Microservices]], APIs, [[Java]] Collections, Spring, or [[Git]]. If you found the GitOps approach we used in the course interesting, I also have an entire course on that as well. If you want to, tag me when you post your course certificate. I always like to interact with learners taking my courses and enjoy hearing your feedback. Nothing makes my day brighter than when I hear from someone who enjoyed a course. So that's it for now. Congratulations on finishing the course, and thank you for taking it. Now go apply what you learned and automate your delivery process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Quality Assurance]] (1), [[LinkedIn]] (1), [[Microservices]] (1), [[Java]] (1)
> **CLI Commands:** git (1)
> **Speakers:** - [kevin] (1)


## Instructor

- [[Kevin Bowersox]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/continuous-delivery-cloud-native-java-apps-2423655)

## Skills Covered

- Cloud-Native Applications
- Continuous Delivery (CD)
- Java

## Path Context

### In [[Building Your Java Skills]]
← [[Complete Guide to Java Design Patterns- Creational, Behavioral, and Structural]] | **5 of 6** | [[Nail Your Java Interview]] →

## Appears In

- [[Building Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Cloud-Native Applications

---

[↑ Back to top](#)