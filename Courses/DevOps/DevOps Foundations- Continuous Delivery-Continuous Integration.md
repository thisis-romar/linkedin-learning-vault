---
type: course
cssclasses:
  - lle-course
slug: devops-foundations-continuous-delivery-continuous-integration-14449917
url: "https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917"
duration_minutes: 114
duration: 1h 54m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFoucftXzxg0w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1640024951192?e=2147483647&amp;v=beta&amp;t=QTDoUDzbLAbWJp42HuYoRhMiG5nu5NRliPfBASTGslQ"
linkedin_topic: DevOps
learning_paths:
  - '[[DevOps Professional Certificate by PagerDuty and LinkedIn]]'
  - '[[Getting Started with DevOps]]'
  - '[[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]'
prev_courses:
  - '[[DevOps Foundations- Infrastructure as Code]]'
  - '[[Devops Foundations]]'
  - '[[Software Development Life Cycle (SDLC)]]'
next_courses:
  - null
  - '[[DevOps Foundations- Infrastructure as Code]]'
  - '[[Continuous Integration- Tools]]'
path_nav: '[{"path":"DevOps Professional Certificate by PagerDuty and LinkedIn","position":3,"total":3,"prev":"DevOps Foundations- Infrastructure as Code","next":null},{"path":"Getting Started with DevOps","position":2,"total":5,"prev":"Devops Foundations","next":"DevOps Foundations- Infrastructure as Code"},{"path":"Getting Started with Continuous Integration - Continuous Delivery (CI-CD)","position":2,"total":3,"prev":"Software Development Life Cycle (SDLC)","next":"Continuous Integration- Tools"}]'
path_count: 3
tags:
  - course
  - topic/devops
  - topic/software-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md)

![DevOps Foundations: Continuous Delivery/Continuous Integration](https://media.licdn.com/dms/image/v2/C560DAQFoucftXzxg0w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1640024951192?e=2147483647&amp;v=beta&amp;t=QTDoUDzbLAbWJp42HuYoRhMiG5nu5NRliPfBASTGslQ)

# DevOps Foundations: Continuous Delivery/Continuous Integration

> Continuous delivery is one of the major DevOps practice areas. By continuously building, testing, and delivering your code, you can reap huge stability, speed, and flexibility benefits. In this course, learn about continuous integration and continuous delivery (CI/CD), and see how these concepts work in practice by constructing your own build pipeline. Throughout this course, instructors James Wic

> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917) | 1h 54m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Continuous Integration and Continuous Delivery** (3 videos)
- **3. 2. Build Your Own Pipeline** (15 videos)
- **4. 3. Putting It All Together** (2 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### DevOps foundations: CD/CI
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=1)** - Are you troubled by strange ways that your organization delivers software?
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=5)** - Do you experience feelings of dread when preparing to work a long painful application release?
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=10)** - Have you or your coworkers experienced buggy, unstable services after a deployment?
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=15)** - Does it take days, weeks, or even months to build and release applications in your organization?
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=20)** - If the answer is yes, then don't wait another minute, fire up your browser and watch the professionals.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=25)** - [Together] We are ready to believe you.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=27)** - Howdy, I'm Ernest Mueller.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=29)** - And I'm James Wickett.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=30)** Welcome to our course on another DevOps fundamental, continuous delivery.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=34)** - James and I first met while implementing DevOps in a large enterprise.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=38)** We've run the DevOps Days Austin conference together for the last six years and blog together at [theagileadmin.com](https://theagileadmin.com).
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=45)** - We feel that continuous delivery is one of the fundamental practice areas of DevOps.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=49)** And it's central to a new view of application stability.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=52)** - In this course, we'll address both what developers and operations folks, consuming and supporting builds need to know.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=59)** First we'll cover the basics you'll need to succeed at continuous integration, delivery, and deployment, including how to construct your build pipeline.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=68)** - [James] Then we'll discuss elements of the pipeline and talk you through source control, build, testing, artifact management, and deployment.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=75)** - [Ernest] And finally, we'll explore concepts and demonstrate common tools and practices in each area.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=81)** Are you ready for this?
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=82)** - I am.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-foundations-cd-ci?u=76281980&t=83)** Let's get started.

> [!info]- Semantic Content
>
> **Speakers:** - are (1), - do (1), - have (1), - does (1), - if (1)
> **Code Keywords:** finally, (1), let (1)
> **URLs:** [theagileadmin.com](https://theagileadmin.com) (1)
> **Prerequisites:** you'll need (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=1)** - This course is designed to introduce you to the basic concepts of continuous integration and delivery.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=6)** - [Man With Glasses] To get the most out of this course, you may want to watch DevOps Foundations here in the library.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=11)** In it, James and I discuss the fundamentals of DevOps and how the three major practice areas: infrastructure automation, continuous delivery, and reliability engineering fit into it.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=23)** This course drills down into continuous delivery.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=26)** - [James] You only need to be familiar with the general idea of coded applications and the process of creating them and moving them into production to be delivered as a service.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=35)** Our intent is for this course to be accessible for anyone with even basic IT experience and benefit both developers and operations staff.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=43)** - [Man With Glasses] While we're making our source files available to you, this isn't meant to be a lab course where you follow along and perform the activities to learn a specific technology.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=53)** Instead, we'll be talking about concepts and using a wide variety of tools to illustrate them.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=59)** - So while you may see, for example, some Jenkins and be introduced to what it does, we won't be teaching you about Jenkins or any technology specifically.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=67)** Our goal is teaching the foundations of continuous delivery and familiarizing you with a wide variety of tools you might choose to implement for your preferred approach.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=76)** We want to arm you with principles, patterns, and a vocabulary to help you along the path for your DevOps transformation.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/what-you-should-know?u=76281980&t=82)** - Now let's get started with DevOps Foundations: Continuous Delivery.

> [!info]- Semantic Content
>
> **Speakers:** - [man (2), - this (1), - [james] (1), - so (1), - now (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)


### 2. 1. Continuous Integration and Continuous Delivery

#### DevOps core concept: CI/CD
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=1)** - You may have heard the terms, continuous integration, delivery, and deployment thrown around already.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=7)** So first let's talk about exactly what each term means.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=10)** - Yeah, let's start with continuous integration.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=12)** It's the practice of automatically building and unit testing an entire application frequently, ideally on every source code check-in, dozens of times a day, if necessary.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=21)** - And in CI, those check-ins are frequent.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=24)** You don't use long running parallel code branches that'll cause a large, messy merge effort the older they get, or if you do, you at least set up builds for them in the meantime to continually validate that they work.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=36)** - Right, yeah.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=37)** Ideally developers will build and test their application on their local desktop even before submitting to a shared build system.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=43)** It's all about shortening the feedback loop for every change.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=46)** - Continuous delivery is the additional practice of deploying every change to a production-like environment and performing automated integration and acceptance testing after it passes it's build and unit tests.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=59)** - This can involve small scale deployment on a single server using mock environments created with Docker containers or virtual machines to mimic a production environment so that you can run those integration tests.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=70)** Testing should generally end up with a deployment to a production-like environment.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=74)** - This allows us to validate the deployment process and to see what functionality and performance look like in a real deployment environment.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=82)** - Continuous deployment extends this concept to where every change goes through full automated testing and is deployed automatically to the production environment.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=89)** - Sounds scary, right?
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=91)** - I mean, it can feel terrifying.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=92)** - But large-scale web properties like Facebook, Etsy, and Wealthfront use continuous deployment as a key component behind their success.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=101)** Even at my work, we use continuous deployment for the microservices that backup our open thread exchange website.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=108)** - Now, once you're making one change at a time and you have trustworthy tests that can find issues in your application, then you can remove all the manual gates that get in the way of a continuous flow to production.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=118)** - Of course, there are build and release processes that aren't anything like this, giant releases of hundreds of changes piled up for months, products that won't even build without days spent cobbling together merge conflicts and manual workarounds.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=132)** - I've been there.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=134)** - You don't have to go all the way to continuous deployment.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=136)** It's not right for every product, and none of this is really a mandatory part of a DevOps implementation.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=142)** The first true DevOps team that Ernest and I worked on, we didn't go all the way to continuous delivery.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=147)** However, a bunch of teams that we've worked on since have seen huge benefits of using continuous delivery.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=152)** - In most situations, CI and CD is a huge improvement for products and teams of any sort.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/devops-core-concept-ci-cd?u=76281980&t=160)** In our next video, we'll go into the benefits of continuous delivery in depth.

> [!info]- Semantic Content
>
> **Speakers:** - you (2), - continuous (2), - this (2), - i (2), - yeah (1)
> **Code Keywords:** let (2), extends (1), this, (1)
> **CLI Commands:** docker (1), find (1), cd (1)
> **Cross-References:** next video (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Benefits of continuous delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=1)** - Doing continuous integration and continuous delivery, it takes some time and investment.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=5)** - Investment is the right word for it.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=7)** It's important to realize that the time spent setting up your pipeline is worth it.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=12)** Your CD pipeline will pay out benefits well into the future.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=16)** - For each organization and implementation, you'll find different benefits and probably several more than we give here.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=22)** However, we see five near universal benefits of implementing continuous delivery.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=27)** These apply no matter what language, platform, or system that you're running.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=31)** - For the first benefit, we're borrowing the phrase empowering teams from the "Continuous Delivery" book.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=37)** By nature, our pipeline is a self-service system that makes the process of software delivery transparent and understandable to the entire team.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=47)** - This is really a cultural change for many organizations.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=50)** Once the system is operational and trusted by the team, it changes how collaboration happens, it makes the team less reactive, and it reduces the strain between developers and operations, the QA folks, and security.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=63)** - It's hard to quantify this with a number, but if you ask anyone who does CD right, they'll report that their team culture changes significantly.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=71)** - Yeah. Our second benefit is that the total cycle time is decreased dramatically.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=76)** This is the time from code commit to running in production.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=79)** - [Ernest] Using older methods, this time was generally measured in weeks or months.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=84)** Now it's measured in hours or even minutes.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=87)** - The 2017 State of DevOps Report found that low performing organizations needed times ranging from one week to one month to make a change.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=95)** However, organizations that use continuous delivery, They can reduce their cycle times to that hour and minute range we were talking about earlier.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=101)** - Talk about being able to deliver market value quickly.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=104)** - Yeah, talk about synergy.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=105)** - Shut up, man. - Yeah, well.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=108)** - All right, the third benefit is security.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=110)** Now it might seem odd that security gets better if you're moving faster.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=113)** It's tempting to think that it's important to go slower to do security.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=117)** - Right, it's actually the inverse.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=118)** The research shows that high performers who continuously integrate security into their work spend 50% less time remediating security issues than low performers.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=128)** - Yeah, 50% that's a huge gain.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=130)** - And I can tell you from experience, it makes it a lot easier to go through compliance audits.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=135)** It happens the same time every time, it's all they want to hear.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=140)** - We're going to cover security testing more later in the course, but let's move on to the next benefit.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=145)** - When not using continuous delivery, we used to have big meetings where we'd gather all the stakeholders.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=151)** And at those meetings, we'd craft a plan to take the code and deploy it to production.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=157)** There were always steps that were untested and often we couldn't even practice them very well due to how the systems in production varied.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=164)** - Yeah, I remember those days.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=166)** But in continuous delivery, you're always practicing.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=169)** Each code commit results in a build of a release candidate that as long as it's functioning as expected, it gets released.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=175)** - The rhythm of continuous delivery removes stress from teams both in development and operations.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=181)** No longer are release dates a stressful event.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=184)** - That's right, the big release has now turned into just a regular Tuesday morning or a Thursday afternoon.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=189)** - The fifth and final benefit is to deliver more value, period.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=194)** - Yeah, this goes hand-in-hand with the ability to deliver value faster as we discussed earlier.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=199)** Organizations and teams doing continuous delivery find that they spend less time doing unplanned work or rework and more time adding new features.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=207)** Due to continuous delivery practices, there's a 29% growth in feature development that was previously spent on remediation.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=213)** - That makes sense, right?
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=215)** Less time reworking code due to integration issues translates into more developer time available to write new features, which adds more value.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=224)** What manager wouldn't love to have more work done without having to add more people to the team?
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=229)** - Well, this sums up most of the major benefits of continuous delivery.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=232)** Of course, for your team and organizations, you might see others.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=235)** However, from our experience, we see these as almost universal and very compelling.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/benefits-of-continuous-delivery?u=76281980&t=240)** - Now that we have you all convinced of the great benefits of continuous delivery, join us in the next video where we discuss continuous delivery in practice.

> [!info]- Semantic Content
>
> **Speakers:** - yeah (5), - the (3), - for (2), - that (2), - doing (1)
> **CLI Commands:** cd (2), find (2), make (1)
> **Cross-References:** later in (1), we discussed (1), in the next (1)
> **Code Keywords:** self (1), let (1)
> **Definitions:** is a  (1)

#### Build pipelines in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=0)** - A build pipeline is your sequence of operations and the tools that perform them between your source code and your deployed system.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=9)** How you compose your build pipeline and the flow between its elements is much more critical than which exact tool you use in any particular area.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=18)** Tool-wise, you start with the source code repository, like Git, Perforce, or Subversion.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=24)** This is where you keep all your source code, and I mean all of it, AppCode, deploy scripts, infrastructure definitions, everything.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=32)** Its job is to keep your code safe, version it, and provide facilities around handling multiple people committing code to the same items.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=41)** Then you have a build system which watches your repository and triggers whatever build is required when it changes.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=49)** Jenkins, Bamboo, and TeamCity are popular build systems.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=53)** There's also online services like CircleCI and Travis CI.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=58)** Even build scripts you cobbled together that run Make can qualify, but these lack the webhooks, off, plugins, and other features that'll help you optimize the process.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=69)** Its job is to build code and run unit tests, and, of course, to provide feedback and visibility into the build process.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=78)** Depending on what language you're using, you may have a variety of compilation and build orchestration tools.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=84)** If it's a compiled language you may need a C or Go compiler.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=88)** Interpreted languages may not have a compilation step and skip straight to packaging.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=94)** You might have a build definition file, like a Make file or a Docker file, or perhaps you use something like Maven, Ant, or Gradle as a command-line build orchestration tool.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=105)** This allows developers to build on their local machine and to keep as much code in source control and out of the build console configuration as possible.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=115)** You probably have a unit test harness, which may be a separate tool, but is invoked inside the build system.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=122)** Unit tests are basic tests designed to verify a piece of code is doing the job it was intended to do.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=129)** Unit tests don't have dependencies on external systems.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=133)** At most they mock or stub out anything outside their own code base.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=137)** They're your first line of defense in figuring out whether your build is going to work as expected.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=143)** The next step is packaging what you've built into an artifact.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=147)** Part of this is usually language dependent.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=149)** For example, Java code is usually put into JAR files and then those are combined up into a WAR or EAR file, but you may have a higher level packaging structure you prefer, like an RPM package or Docker image.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=163)** Once you've packaged the code, it goes into your artifact repository.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=168)** Some people just use a storage device or Amazon S3 for their artifacts, others use tools built for the job like Nexus or Artifactory, or there's technology-specific repos like Docker Registries or Puppet Forges.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=183)** In the old days a build engineer thought they were done here, but not so.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=188)** You have some bits on a drive somewhere, not a service delivering value to customers, so your job isn't done.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=195)** You need a deployment tool to bring up a working instance of your service.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=200)** You'll use the same tool to deploy both to your test and production environments.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=205)** Your deployment code is code, and, like any other code, you want to find any issues in the build and test cycle, not when you're deploying to production.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=215)** So you run your deployment tool on a test environment, sometimes also called the CI environment, to get your service up and running.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=222)** Next, you perform integration testing, which is designed to exercise a real running service in a real environment and ensure that it's working correctly.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=232)** Then you have an end-to-end acceptance testing stage.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=235)** This may include a manual testing component.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=238)** Manual tests can be mostly dispensed with once you reach CD process maturity, but will almost always predominate initially.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=247)** Then you use the same artifact that passed testing and the same deployment tool to deploy it to the production environment.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=255)** Ideally, you use some of the exact same acceptance tests to test it there as well.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=261)** There are many more types of tools you can layer onto your pipeline, test coverage measurement tools, Linters, security testing tools, performance testing tools, but these are the basics, and nailing the basics is the key to getting to continuous integration, and then, if you want, to continuous deployment.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/build-pipelines-in-practice?u=76281980&t=280)** In our next chapter, we're going to create a sample build pipeline and walk you through each part of it, explaining the decisions you need to make and the best practices to foster continuous delivery.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), docker (3), git (1), find (1), cd (1)
> **Env Vars:** jar (1), war (1), ear (1), rpm (1)
> **Exercise Files:** source code (3)
> **Cross-References:** next chapter (1)
> **Analogies:** for example (1)
> **Speakers:** - a (1)


### 3. 2. Build Your Own Pipeline

#### Introducing the delivery pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=1)** - All right, now that we've covered the basics, let's see how this might work in the real world.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=5)** - Over the rest of this chapter, we're going to build out a sample continuous delivery pipeline for a web application.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=11)** This pipeline will walk you through the core components you'll likely need to implement.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=15)** - Wait, wait, wait.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=16)** Before we get started, we should really add a quick note of caution here.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=19)** No one's pipeline looks the same.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=21)** - That's right.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=22)** This is just a sample pipeline.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=24)** We built it with open source technology to help deliver a sample web application written in Go.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=30)** - Yeah, now you may be using Java, Ruby or Node.js for your application.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=34)** - You may be using a mix of open source and commercial software.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=37)** - Yeah, you may be not delivering web software at all.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=40)** You might be delivering software in the form of a device driver or mobile games.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=43)** - But you can benefit from CI and CD no matter what you're building or what the unique details of your environment are.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=50)** - But each product and team, they're going to have to have their own unique challenges for in requirements.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=55)** - We plan to arm you with the core principles to determine what you need to do to build a pipeline from scratch, or to modify your existing pipeline to increase flow through your build system.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=67)** - Now, for this course, we're starting off covering version control and core practices for development teams when working in a continuous delivery environment.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=74)** For our pipeline, we're going to be using the popular version control system, Git, delivered through GitHub.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=80)** - [Instructor] Then we move into build systems and cover practices that are important for CI.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=85)** We'll put it all into practice using the open source build system, Jenkins.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=89)** - [Instructor] Next, we'll move right into handling artifacts, using Nexus for an artifact repository.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=94)** - [Instructor] We'll hit testing in four main areas, unit, integration, UI and security testing.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=101)** We try to stay away from specific Go testing details and concentrate on how to test your application, from the inside, from the outside and as a malicious user.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=112)** - [Instructor] Now, once we're sure our application is tested and ready to go, we'll deploy it via Chef.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=117)** - [Instructor] Of course, the path through a build system isn't always linear.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=121)** Each stage has a feedback loop that lets you incrementally improve each change before it gets released.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=127)** Along the way, we introduce each area with its goal, along with principles and practices we found to be important and work best in that phase.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=136)** - Yeah, and at the end of this course, you should gain a working knowledge of a pipeline and how you can use this as a roadmap for implementing your own continuous delivery pipeline.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=144)** - At the end of the course, we'll cover some tips and real-world advice for doing continuous delivery in large enterprises and less than perfect organizations.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=153)** - Yeah, and that's the really fun part.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=154)** That's where the rubber meets the road.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=156)** - For sure.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/introducing-the-delivery-pipeline?u=76281980&t=156)** So next up, we'll talk about version control.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (5), - yeah (4), - but (2), - all (1), - over (1)
> **CLI Commands:** ruby (1), node (1), cd (1), git (1)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Warnings:** caution (1)

#### Version control practices
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=1)** - One of the key differences between operation staff and developers has been their use of version control.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=7)** For years, developers have used version control, but for operations organizations, that simply wasn't common practice.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=14)** - Yeah, well, nowadays it's a must.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=16)** So let's see how version control fits into the flow of our pipeline.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=20)** - [Man 1] Version control, also referred to as source control or revision control contains all the source code for your project, and maintains the current and historical state of that code.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=30)** - [Man 2] Yeah, the goal is to use version control for operations, development, QA, security, and every other team needed to deliver the software.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=38)** - Let's dig into some best practices that we recommend for version control.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=42)** - [Man 2] All right, the first rule of virtual control is you always use version control.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=46)** - This means no project is too small not to use it.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=50)** Even build scripts or Cron jobs, everything gets put into source control.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=54)** - [Man 2] All right, this brings us to the second rule of version control.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=56)** You always use version control.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=59)** - In the first chapter of the continuous delivery book, one of the definitive resources on the topic, the authors remind us that it should be possible for a new team member to sit down at a brand new workstation, check out the projects revision control repository, and run a single command to build and deploy that application to any accessible environment, including their development workstation.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=81)** - Yeah, with that goal in mind, everything really means everything, from install and setup scripts to run-time provisioning and deployment.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=89)** - [Man 1] This leads to another important practice, commit often.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=93)** - Yeah, it's tempting to check in code in large batches, but it's better practice to commit smaller pieces of code.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=99)** Even uncompleted features can be committed if hidden behind a feature flag.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=104)** - This allows anyone seeing the commits to be able to understand what's happening in the code base.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=109)** Collaboration is one of the main goals behind version control.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=113)** - [Man 2] This is why our next practice is to use easy-to-understand commit messages.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=117)** These messages live alongside the code and give insight into what changes were made in a commit.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=122)** - Do your team and your future self a favor by using descriptive messages.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=127)** This is why we recommend committing often, as it's easier to craft a more meaningful commit message for smaller changes than a big batch of dozens of changes.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=136)** - [Man 2] Okay, that said our next practice is don't commit code that you know fails tests or won't build.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=142)** - [Man 1] That's right, leaving any part of the continuous delivery pipeline in a non-functioning state should be considered a bad practice in your team.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=149)** - All right, let's move on to a more controversial topic, branches.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=153)** Yeah, I was once on a team that wanted to use branches, but our CTO asked someone to google Git branching strategies.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=160)** Okay, some 85,000 results showed up, and he used this to say that branching is confusing.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=165)** No one does it the same and inhibits the team from understanding the current state of the system.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=170)** So instead we ended up sticking with a trunk based approach, also called a master branch approach.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=175)** - [Man 1] I use a master branch approach too.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=177)** The 2017 State of DevOps Report found that high performers have the shortest integration times and branch lifetimes, with branch life and integration typically lasting only hours.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=189)** Low performers on the other hand had branches lasting for days, weeks, or even months.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=195)** - [Man 2] Yeah, they found that developing off of trunk or master was highly correlated to high-performing teams, unlike the workflow that proposes a lot of branching and forking or pull requests where you send a change for review before it gets merged into the main branch.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=209)** - It's not that you shouldn't use branches at all or not use pull requests.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=213)** It's that the mechanisms to handle changes should be small and easy to understand.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=218)** In my shop, we use very short-lived branches, one ticket's worth, and issue a pull request to get them merged into master.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=226)** - [Man 2] Yeah, to make bigger changes yet in small bites, you branch in the code, the pattern you can use is called branch by abstraction.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=233)** This is where you use feature flags in the code to control cutting over to new areas of code.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=238)** - In this way, all the new and old code gets more eyes on it, goes through more builds, and allows you to incrementally make a large change in your code base.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=248)** - [Man 2] Now, one of the really cool things you can do is set up hooks to do things like run tests and development, before committing into version control.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=254)** Git allows you to do this, and I'll show you how to do it a little bit later.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=258)** - It's a good practice to put fast local tests like linters and formatters into a pre-commit hook to make sure they're always run before the commit step.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=267)** - Yeah, all tests should be run locally, but forcing some amount of pre-commit testing helps you keep the team from committing easy to catch mistakes and breaking the build.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=276)** - In my shop, we have pre-commit hooks that do things like ensure you have a ticket number in your commit message before you check in and run unit tests.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=285)** The test results even get put into the pull request.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=288)** - [Man 2] All right, the last practice is to be careful with secrets.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=291)** Source control history is able to be searched by everyone on the team, and depending on your project, any customer, or maybe even person on the internet.
>
> **[4:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=299)** - It's good practice to not submit access or secret keys, passwords, or crypto certs into source control.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=306)** Make sure you have tests in place to detect any attempts to submit these, and alert your team if they do make it into your revision control system.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-practices?u=76281980&t=313)** - All right, coming up, we're going to put all of these principles into practice using GitHub.

> [!info]- Semantic Content
>
> **Speakers:** - [man (13), - yeah (4), - in (3), - it (3), - this (2)
> **CLI Commands:** make (5), git (2)
> **Code Keywords:** let (3), self (1), this, (1)
> **Prerequisites:** install (1), setup (1), set up (1), make sure you have (1)
> **Best Practices:** good practice (2), bad practice (1)
> **Env Vars:** cto (1)
> **Cross-References:** coming up (1)
> **Tools:** github (1)

#### Version control in action with Git
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=0)** - [Lecturer] We spent some time talking about version control.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=3)** So let's see it in action with a popular version control system Git with GitHub as our server.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=8)** Now for developers coming in to CICD, this might be old hat, but my hope here is to show a common developer experience for those coming in to CICD and DevOps from infrastructure operations systems and other places in the organization.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=21)** For most of the demos in this course, I'll be working on a terminal on a Mac.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=25)** If you're on Windows, you can follow along using Bash on Ubuntu on windows.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=30)** If you need more information on installing and using it, you can check out this website.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=34)** Now, before we get started, you'll need to GitHub account with SSH keys and it's easy to get set up over at [github.com](https://github.com).
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=42)** But much like a cooking show, I've already got my GitHub key set up.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=45)** So now let's find out what's in the oven.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=48)** So the first thing we're going to do is we're going to clone the repository to our local host.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=52)** So here at the command line, I'll type, git clone git@[github.com](https://github.com):wickett, my username, /word-cloud-generator.git.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=63)** This brings down the entire repo on my local disc.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=65)** And it not only gives me the code at the current state, but all the history up to this point.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=71)** Okay, great, it cloned okay.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=73)** And now I'm changing directories into the repo.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=75)** Now that I'm in the repo, I can see the history of the repo by typing in git log, which shows us all the commits that have ever happened in the repo.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=82)** This is central to version control because it allows us to go back in time.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=87)** Let's take a look at the details of one of these.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=89)** I'm copying a git commit ID and I'll type git show and the commit ID.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=98)** This shows the description message of the commit and what changes were made in the red and the green here.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=103)** Okay, let me clear my screen and enough about the past.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=108)** Let's make a change that we can commit.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=110)** I'll just change the project description in the README.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=112)** I'll open vim and edit the README and I'll type in a new description.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=120)** You might've noticed that vim adds notifications to let me know what I've changed and what I haven't checked in.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=125)** But most IDEs have GitHub integrations just like this.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=129)** Okay, our changes ready.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=131)** I can check what git knows about my change by typing in git status.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=135)** If I had changed multiple files, everything would have shown up here and there isn't a lot of detail here really.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=140)** So often I'll use git diff to see exactly what changed.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=144)** Even with simple changes.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=146)** I'm in the habit of checking my work, just to make sure of what I think I changed and what I'm about to commit is what I actually changed.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=153)** Git diff saved me a lot of times when checking in the wrong code.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=156)** Okay, this looks good.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=157)** Now let me clear my screen here.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=159)** And before I commit this change, I want to set up some git pre commit hooks, which tell git how to take a certain action before proceeding.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=166)** Hooks are optional and we can't really trust that everyone on the team runs them.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=171)** They're not a valid security or testing control because of that.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=174)** But you can establish teams, standards and practices to get the most out of hooks.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=179)** One good practice I often see is where teams add their git hooks into the repo and then include an install script that everyone can run.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=186)** And that's what I've done here.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=188)** Let's look at our hook by typing cat ./hooks/git-pre-commit.hook.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=195)** This script runs before our commit is allowed and it runs unit tests, and then any goes specific formatters and linters and any issues that are found will stop git from committing.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=205)** To make it easy to set up for developers, I've added a helper and our make file.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=210)** Let's look at it by typing cat Makefile.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=214)** This code copies the pre-commit hook over to the location where git needs it to be.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=218)** So let's go ahead and git that set up with make git-hooks.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=225)** Okay, this should be all good to go.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=227)** Now let's see if it works.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=229)** Let me clear my screen.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=231)** I'm going to try to add some code that's going to violate some of the rules of go fmt or go vet.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=236)** In this case, I'm going to try to pass an integer into a string.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=241)** So I'm editing main.go to do this.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=260)** Once I try to add in this change, it should get blocked.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=263)** We do this by typing git add, and I can type in main.go.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=269)** Let's do a git status to look at it and sure enough, it's ready to go.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=274)** I'm doing a git commit message.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=278)** Once I hit Enter, the pre-commit hook should run and block the change, and sure enough, it failed the test.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=285)** I'm going to clear my screen here and back up my change.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=292)** Now let's try typing git status again.
>
> **[4:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=297)** I'm going to add in all the changes here and it should merge that properly.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=301)** And now I can see the only change I have is the README, which was the message I typed in earlier.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=305)** Let's go ahead and commit that.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=311)** Okay, so now it's committed, but I haven't actually pushed it up to the server.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=315)** Now I have to type in, git push to actually make the changes live on GitHub.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=321)** And now it's done that.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=322)** Let me clear my screen here.
>
> **[5:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=324)** Now let's leave the command line and head over to the repo in the browser.
>
> **[5:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=328)** Over at [github.com/wickett/word-cloud-generator](https://github.com/wickett/word-cloud-generator).
>
> **[5:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=333)** Okay, so now I'll click on the commit that I just made and I can see the change that I made.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=340)** GitHub provides a wickey and a way to handle issues.
>
> **[5:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=343)** Issues are an easy way to track bugs, code changes and new feature development.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=347)** I think we can close one of our issues.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=349)** Let's add a note on the command, which we could have done in the commit message as well to reference the issue.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=360)** Now let's head over to the issue and check it out.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=362)** I'll click on issues in the nav and then click on issue number 10.
>
> **[6:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=366)** Here we can continue the discussion or see the code that was automatically linked in from our comment earlier, or we can close the issue.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=373)** Now there are a ton more features and git and GitHub, but let's hit on something else that's really specific to CI and CD, webhooks.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=381)** I'll click on settings, webhooks, and you can see that I have one set up already.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=386)** Later, we'll use Jenkins, but here I've wired in CircleCI, which is a SAS based CI system.
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=392)** What's great about this is that every commit, branch and pull request gets tested by CI and the status gets integrated into GitHub.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=400)** Let's go back to the code and the commits.
>
> **[6:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=403)** There's a green check mark showing the build status for every commit, which I can select to see the status, this maps code commits to the build and makes it easy to see what code changes broke the build.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=415)** Of course, with our chat system, we can get notifications when the build runs and succeeds or fails.
>
> **[7:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=420)** All this can be done with webhooks.
>
> **[7:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=422)** This brings together the team to create the culture needed to do CI and CD.
>
> **[7:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=427)** If you're using an IDE to code, it'll perform most of these steps for you, but this is the UI for what we're doing under the covers.
>
> **[7:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/version-control-in-action-with-git?u=76281980&t=434)** Okay, next up, we'll dig into the continuous integration build systems themselves.

> [!info]- Semantic Content
>
> **CLI Commands:** git (25), make (6), cat (2), cd (2), ssh (1)
> **Code Keywords:** let (21), this. (2), type, (1), case, (1), pass (1)
> **Tools:** github (11), command line (2), vim (2), terminal (1), bash (1)
> **Env Vars:** readme (3), cicd (2), ssh (1), sas (1), ide (1)
> **Prerequisites:** set up (6), you'll need (1), install (1)
> **UI Navigation:** click on (4), go to (1)
> **URLs:** [github.com](https://github.com) (3)
> **Documentation:** the readme (3)

#### Continuous integration systems
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=1)** - Let's talk about continuous integration systems, and take a quick tour of options for CI.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=6)** Now there are three main categories we want to look at.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=9)** Let's start with open source.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=11)** There are others like GoCD, but the defacto standard of open source for CI is Jenkins.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=17)** You download the software, host it yourself either on-prem or in the cloud.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=21)** Now because Jenkins is so popular, in the next video, we're going to be looking further into Jenkins to build out our web application.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=28)** The second option is to use one of several commercial vendors that provide hosted CI systems or ones that run in your own infrastructure.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=35)** The third option is using a SAS for CI.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=37)** These popular offerings are a pay-per-use or pay-per-month CI solution.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=42)** Many of the popular ones, like CircleCI or Travis CI offer a free tier for public projects in GitHub or a single private repo.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=50)** Which system you implement will depend on your project, budget, and your organizational appetite for risk.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=56)** For anyone just getting started, I generally recommend going with the SAS based offering.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=61)** You can quickly start using CI without having to worry about setting up any infrastructure.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=66)** However, if you're in a large organization, the "which system should I use?", that decision may have already been made for you.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=72)** Don't worry; remember, CI is a practice, not a tool.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=75)** No matter what system you're using, it's about implementation.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=79)** Now, there are several important principles and practices to consider when using the CI system.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=84)** First, start with a clean environment.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=86)** Each build should be a blank slate.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=89)** CI systems generally put protections in place using the idea of workspaces or containers to maintain the segregation between builds.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=96)** It may seem like a good idea to maintain the state of a previous run on disk or write to a system environment variable, but you're going to want to resist this.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=104)** Every time I've seen this, it's eventually caused problems.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=108)** Another practice I recommend is build the pass the coffee test.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=112)** From CodeCommit to receiving results, the amount of time should be equivalent to the time it takes for a person to get a cup of coffee and come back to their desk.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=120)** This is why I always recommend you shoot for five minutes or less.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=123)** This is going to take a commitment from the team to spend time refining the tests and the builds whenever they get slower over time.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=130)** Speaking of teams, I found that there are a few good guidelines most teams need to agree on when using continuous integration.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=136)** You may have additional needs in your team, but these should start a good groundwork for you.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=141)** Before committing code, make sure you run all the tests locally.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=144)** It shouldn't be a surprise that your build pass when you committed some code.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=148)** The CI system isn't a replacement for doing local testing on your development machine.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=154)** Next, don't compound problems by committing code to an already broken build, unless you're fixing the problem.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=160)** Another team commitment is never leave the build broken.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=164)** This always applies, but it's even more important for distributed teams.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=167)** If you break the build, you fix it.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=170)** No lobbing code into the system before leaving for the weekend without making sure the build passes and you deploy it to production.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=176)** The corollary to this is don't remove failing tests.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=180)** Now this should go without saying, but I've seen it numerous times in where a build is broken, instead of fixing the problem, a test gets muted.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=186)** That's never okay.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=188)** If a test is no longer valid than it should be removed based on product functionality changes, not due to its failing or passing status.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=196)** Let's take a moment to talk about notifications.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=199)** Now when setting up CI, we like to put messages about the build in our chat tools and our monitoring systems.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=205)** At work, a notification in our chat tool Slack is generated for CodeCommit, build start, build completion, deploy to stage, and deploy to prod.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=215)** If code goes undeployed for more than an hour a notification is sent for that as well.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=220)** For most of these events, we also admit an event in our monitoring tool Datadog.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=224)** This way we can correlate errors to code changes.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=227)** Most of the CI systems integrate with major chat ops platforms and monitoring tools.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=232)** But if there's any reason to switch to a different tool, this might be the one.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-systems?u=76281980&t=236)** All right, coming up, we're going to take a look at the popular CIS system Jenkins.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), public (1), private (1), this. (1)
> **Env Vars:** sas (2), cis (1)
> **Cross-References:** in the next (1), coming up (1)
> **Tools:** github (1), slack (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Continuous integration in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=0)** - [Instructor] Now let's take a look at what a CI system looks like in practice.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=4)** For that, we're going to use Jenkins.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=6)** Jenkins is a free open-source tool.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=9)** Like most free open source tools, It's a little rough around the edges, but it's very popular and has a lot of community support.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=16)** Also it's written in Java so it runs on any platform from Linux to Windows to Mac.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=22)** For ease of use, I'm going to use the Jenkins Docker container that's publicly available on Docker Hub.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=28)** If you've installed Docker for Desktop, for Mac, for Windows or whatever suits your platform from [docker.com](https://docker.com), you can use our example files to get started without even needing to install software.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=40)** I'll run through it but this information is also in the read me in the course files.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=48)** I'll be doing this at the Mac command line, but it should work identically on Linux or Bash and the Windows 10 anniversary update.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=55)** And honestly, it's only a little bit different on the Windows command line.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=59)** The Docker commands will be the same except for paths.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=62)** Don't worry if you haven't used Docker before, it's easy and really we're just using it here in the course because it makes the settings and connections between the parts of the build very explicit, which will help you understand what's going on.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=75)** This course isn't a Docker or Jenkins tutorial, we're just illustrating build concepts, using real common technologies as a learning tool.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=84)** First I've made a slightly customized version of the Jenkins container image.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=89)** Let's take a look at its Docker file.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=91)** By default, the Docker image for Jenkins comes without make or anything like that installed.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=98)** And that's a little bit of a bummer.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=100)** So in this Docker file, I'm taking the stock, latest longterm support Jenkins image from Docker Hub, and I'm installing build essentials on top of it, which has make and those sorts of tools.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=111)** And also a couple of other tools for later in the course.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=114)** And then we're building this into a new container for us to use here.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=119)** Next, I'm going to run a Docker container using that image with this docker-compose file.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=126)** A docker-compose file just describes a set of containers that you're going to run.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=131)** The first part of it describes my Jenkins container.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=135)** You can see here that I'm going to be exposing ports 8080 and 50000.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=139)** And I'm mounting as a volume the Jenkins home that we've provided as part of our lab files.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=146)** You can start fresh if you want, but for purposes of this course, we're not going to go through all of the initial Jenkins configuration.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=154)** So here let's start it building and running.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=158)** Docker-compose up command.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=162)** Now I'm cheating a little bit.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=164)** I've built on this box before.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=166)** So many of these Docker layers are going to be cached.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=169)** The very first time you run this, it may take awhile depending on the speed of your internet connection and your desktop machine.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=176)** The most common problem that people have is the docker-compose not being able to find the data directories that were mounting as volumes.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=185)** Make sure you unzip the course files all into one big set of directories and run docker-compose from the directory where the compose file is.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=193)** So the relative paths all resolve right.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=196)** You may have to edit the compose file if you're moving pieces around.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=203)** Once it says it's done, we could run docker-compose ps and it'll show us the running containers that our docker-compose file have started up.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=214)** Now in our browser, we can go to local host port 8080, and wait a little bit for it to start.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=220)** Be patient, it's Java.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=222)** So it's a little slower than average.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=227)** And voila.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=229)** If you're using our pre-configured Jenkins home directory, you can log in with username, admin and password, theagileadmin.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=239)** Now you can see that we already have a build in here, for Word Cloud Generator, the sample app that James showed to you earlier.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=245)** We're going to go in and configure this build so that you can see the details.
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=250)** We do that by going into the build and clicking on the configure with the gear icon.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=257)** All right, our build is loaded.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=259)** So as you can see, I've set it up to look at GitHub at our Word Cloud generator, get repo here.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=267)** I've set up a build trigger so that every 15 minutes it's going to go pull that repository and see if there are any changes.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=274)** And if there have been changes, it triggers a build automatically.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=279)** And here you can see that I'm building it with Go version 1.16.6.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=284)** Then below that is the actual meat of the build.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=287)** And this is a little script that I've written to run the build.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=291)** It sets up the go path.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=293)** It parses in a version number from the build number into a file.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=298)** And then it builds and tests the application.
>
> **[5:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=302)** Now if any of the lines fail, the build will fail.
>
> **[5:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=305)** A failed build isn't a bad thing.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=307)** It tells you there's something wrong with your app and it either can't be built correctly or it's failing tests and you need to fix it.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=314)** Then I have some steps to zip up our resulting build artifact and get it ready to upload to Nexus.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=321)** I'll go over this in a later video.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=323)** Down at the bottom, you can see that you can add many more build steps of various sorts.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=329)** And then after a build is done with, you can also add post build steps like publishing test reports and doing email notifications.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=339)** To make all this work in Jenkins, we had to add a couple plugins.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=344)** We'll go to manage Jenkins to show you some of these.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=348)** Jenkins works on the concept of plugins, each individual programming language or things that you know you want in there.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=357)** They're all reflected as plugins.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=360)** And there are many plugins available.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=362)** Here we can look at the installed plugins.
>
> **[6:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=365)** Many of these come installed by default.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=368)** But for example, down here, you can see that I've installed the go plugin so that we can do go language builds.
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=377)** And then also farther down the Nexus plugin that we're going to use as our artifact repository.
>
> **[6:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=385)** So let's go take a look at how we've configured the go plugin.
>
> **[6:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=391)** We go back to manage Jenkins and under global tool configuration is where you configure the plugins that require a little bit more love.
>
> **[6:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=402)** So here in global tool configuration, we'll go down and we'll look at go.
>
> **[6:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=407)** And clicking the go installations button, you can see that I've already installed one go installation called go 1.16.6.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=415)** This is set up to automatically install that same version from [golang.org](https://golang.org).
>
> **[7:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=421)** Now some people like to just install things like this on the system that Jenkins runs on.
>
> **[7:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=427)** We could have added go to the Docker file that we configured earlier, but then you're constrained to one version, the version that's on kind of the base system.
>
> **[7:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=437)** I prefer not to do that.
>
> **[7:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=439)** I prefer my build system to be able to build with different technologies, have different versions.
>
> **[7:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=444)** If you configure it this way, then builds run with specific configurations that you can see and control through the build system.
>
> **[7:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=452)** There's a plugins index on [jenkins.io](https://jenkins.io) that exposes loads of plugins for many different technologies.
>
> **[7:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=459)** You could also write your own pretty easily.
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=461)** Don't go plugin crazy though.
>
> **[7:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=463)** As you could see earlier, when we went into the plugin section of the management console, it's always demanding that you update plugins, including the bunch that you didn't explicitly install.
>
> **[7:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=473)** So it can become a management burden.
>
> **[7:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=476)** So let's go back in and run our build.
>
> **[8:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=480)** And do that just by clicking this little run now button next to the build.
>
> **[8:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=486)** Well you can see here already that a new build has popped into the build queue.
>
> **[8:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=491)** We're going to go ahead and click in and take a look at the details of the build.
>
> **[8:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=498)** So you can see here that there have been no code changes in this build, but it's going ahead and building it right now for us.
>
> **[8:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=507)** We'll just wait a second for the build to complete.
>
> **[8:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=510)** And there we go.
>
> **[8:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=511)** The build is completed and it's successful as you can see by the green check mark.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=516)** We're going to go in and look at the console output to see exactly what the build did.
>
> **[8:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=521)** So as you can see here, initially the build checks out our source code from Git.
>
> **[8:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=529)** Then it builds and tests it.
>
> **[8:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=533)** And then it zips it up and sends it over to our Nexus artifact repository.
>
> **[8:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=539)** From here, you can add more and more complexity as you need it.
>
> **[9:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=542)** For example, you could add a plugin to notify your Slack chat about build breaks.
>
> **[9:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=548)** Once you're comfortable with how Jenkins works, you can start to use the Jenkins pipeline feature that lets you define your builds as code instead of clicking around in a UI.
>
> **[9:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=557)** I've been doing that for purposes of this demo, but it leaves me feeling dirty.
>
> **[9:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=561)** Ideally we'd have a build for our Jenkins container itself in Jenkins.
>
> **[9:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=564)** And all of our builds would be defined as code checked into source control.
>
> **[9:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=570)** So you may have noticed Jenkins isn't all that magical.
>
> **[9:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=573)** It's providing a basic framework to install required software, pull your source code repository to look for new versions, and then it just runs build scripts on it.
>
> **[9:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=583)** The technology isn't the key here.
>
> **[9:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=585)** It's the process that you implement with it.
>
> **[9:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=588)** Build and test in as small batches as possible and get feedbacks on issues as quickly as possible so that you can fix it while it's still fast and easy to do.
>
> **[9:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=598)** And automate as much of this flow as possible because automation is fast and testable.
>
> **[10:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-integration-in-action?u=76281980&t=604)** Next up, we'll talk about packaging and artifact repositories.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (21), make (4), find (1), unzip (1), git (1)
> **Prerequisites:** install (5), configure (4), set up (2)
> **Code Keywords:** let (5), default, (1), this, (1), default. (1), require (1)
> **Tools:** command line (2), bash (1), github (1), slack (1)
> **Versions:** 16.6 (2), version 1 (1), go 1 (1)
> **URLs:** [docker.com](https://docker.com) (1), [golang.org](https://golang.org) (1), [jenkins.io](https://jenkins.io) (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), defined as (1)

#### Building artifacts
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=0)** - Now that we've seen our CI system in action, let's talk about packaging and artifact management.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=7)** If you make packaged software or use a compiled language, then you just assume you're building artifacts.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=13)** But if you're one of those kids nowadays with a Python or PHP-based website, you might wonder what's wrong with just Git pulling your code to your production server.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=23)** Building and distributing your code as packaged artifacts provides reliability, composability, security, and shareability.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=34)** Probably the most important reason to generate artifacts is to ensure what you've tested is exactly what's going to production.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=42)** As much of the preparation work as you can do in a controlled environment, compilation, preprocessing, packaging, the less there is to go wrong in each subsequent stage in the CD pipeline and in each deployment.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=55)** If you build your application with specific language versions, specific library versions, specific compilers or interpreters, then your testing is invalidated if you change any of those things.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=67)** A common anti-pattern I see is to build and test, and then build in some different mode for production and assume that the testing you performed on that previous build is still valid, it's not.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=80)** Build it, test it, and package it, and package any other dependencies like interpreter versions along with it, and deploy that.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=88)** Also, most apps nowadays are composed of more than one piece.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=92)** Packaging can provide dependency management between your code and its dependencies and between it and other pieces of software.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=101)** This is a good reason to use a common packaging format that supports dependency definition like debs or RPMs.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=108)** In many cases, you don't just have one kind of technology, so consider wrapping up different technologies in a common packaging format.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=117)** For example, at work, we package our Java JARs, puppet code, rules files, infrastructure definitions, et cetera, all into Debian packages so that we can manage them in the same way and define version dependencies among both them and the third party packages we consume as part of our built systems.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=137)** In some cases, we publish internally to a native format like a Python package repo or NPM repo for Node apps as that's easier for other developers to natively reuse in their code, but we do a final packaging to debs before deployment to a server.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=154)** You can also have multiple layers of artifacting.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=157)** We produce JARs that we bundle into debs, and then we use HashiCorp's packer to create VMware images from the debs and the VMware images are the artifact that we actually ship to customers.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=170)** We use Maven and its jdeb plugin, which basically lets you just say, "Hey, turn those files and directories "into a Debian package."
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=177)** But there's another great tool called fpm that lets you package up arbitrary files into debs, RPMs and many other package formats from any system.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=188)** Also, you really don't want to expose everything in your source code repos to your production servers for security reasons.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=195)** When you package up an artifact, you have fine grain control of what's going into the package and what's not.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=202)** It's also good to control how code can get pushed to production by gating who can write to the artifact repository.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=209)** A best practice is to only let production deployments come from the artifact repository and only allow your CI system to write to the artifact repository.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=219)** This way you can maintain a high level of compliance, because there's not a way for someone to sneak code into production without it going through the controlled CI process.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=229)** You can also curate external packages with your artifact repo, so that when they disappear or change, you have a reproducible build and you don't have deployments fail because cosmic rays are making one of the mini public internet software repos have a bad day.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=245)** By clearly curating the packages that go into your build, you have a secure and auditable supply chain.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=251)** It's very important for you to know exactly what went into your build and that you can reproduce it exactly.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=257)** A build that's run with no code changes should never produce a different result.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=262)** And finally, an artifact repository provides a central place for multiple teams to look at and consume components provided by other teams.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=271)** By publishing to the artifact repo, you can say this is ready to use and with these versions.
>
> **[4:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=277)** Nobody likes just being pointed at your source code repo and having to figure out how to install it themselves.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=283)** Artifact packaging provides a well understood construct for consuming your code.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=289)** So before you get started, put some thought into how you want to manage your artifacts, what formats do you want to package to both intermediate and final for deployment, how do you want to manage dependencies, and what do you want to use for the actual repository?
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=304)** Luckily, setting up an artifact repository is super easy and there's free open source ones we can use to get started.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/building-artifacts?u=76281980&t=310)** In our next video, we'll use a Nexus artifact repository to publish our sample application out of Jenkins.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1), php (1), git (1), cd (1)
> **Code Keywords:** let (2), public (1), finally, (1), super (1)
> **Env Vars:** php (1), npm (1)
> **Exercise Files:** source code (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)

#### Artifact repositories in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=0)** - [Instructor] Hello and welcome back.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=2)** If you're not experienced with builds, you may be wondering, but what exactly is an artifact repository and how do you use it?
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=10)** In this video, I'll demonstrate a common open source artifact repository called Nexus Repository Manager 3.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=17)** It has a commercial pro version, but we'll just be using the free version in this course.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=23)** There are other options that support a variety of formats.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=27)** Artifactory is a popular commercial product available in both on premise and hosted versions.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=32)** And Apache Archiva is another open source alternative.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=36)** Of course, if you just need one artifact format supported setting up your own or using someone else's Debian repository, Docker registry, et cetera, is always an option.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=46)** I like being able to store a variety of artifacts in one place though.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=52)** Let's start our build system up again by running it's Docker compose file.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=58)** So here you can see that I also have a Nexus container that's being started as part of it.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=63)** I'm just pulling the stock Nexus three image and I'm opening up port 8081, for the server to become available on.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=74)** Now let's run it with our Docker compose up command.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=82)** Now Nexus can be very slow to build, update itself and start up, so be patient.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=89)** You can always run Docker compose logs to make sure something's still happening.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=97)** Here we'll run Docker compose logs and you can see that there are messages still coming through from first Jenkins and then Nexus as they start.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=106)** In fact we're going to cheat a little bit and put you on pause until Nexus becomes available.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=114)** All right, we've been waiting about five minutes, but you can see here in the logs that it's finally started Nexus.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=121)** So we're going to go to port 8081 in our browser.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=127)** And sure enough there's Nexus.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=131)** So we're going to go log in with our same username and password we're using for everything.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=137)** Username admin, password the agile admin.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=145)** And we're into Nexus.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=148)** Let's browse what's in here.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=150)** So you can view by assets or by components.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=154)** Component is an installerable unit that can consist of one or more assets, files in other words.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=161)** Here you can see we have an asset group for our class called CD class and a component called word cloud generator.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=170)** If we look in there, if you ran the word cloud generator in the previous lab, you can see that we have our compiled application file and MD5 and SHA1 hashes to validate the file's integrity.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=183)** Previously I came in and created these by going to set up repositories and created a new repository.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=192)** I used type raw because I wasn't using one of the other specialty types that Nexus supports.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=199)** As you could see, there's a lot of setup to do in a real installation from user authentication to operational hardening.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=207)** So Nexus is pretty simple at its core.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=210)** It's a browsable repository of packages and files like a big library for your artifacts and for third-party artifacts you want to store yourself.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=218)** Let's go look at how we integrate Jenkins with it.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=221)** It's logged in still admin, the agile admin as well.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=226)** So to integrate Nexus with Jenkins, we installed the Nexus plugin.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=235)** We can look at it by going to manage plugins and over to installed plugins, and it will filter down on Nexus.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=248)** And here you can see the Nexus artifact uploader plugin.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=252)** Let's go look at our build where we actually use it.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=256)** So in the word cloud generator build, build job, we'll configure.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=264)** Now down in our build, it appears as an option, when we add a build step.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=269)** If we scroll down here past the actual build job, you can see that I've already added a Nexus artifact uploader step.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=276)** Now I've configured it with the URL of the Nexus server, credentials and the name of the component that we're going to use.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=285)** Pro tip, for decades people have worried about version numbers.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=289)** Should this be version 3.3 or maybe X.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=293)** In continuous deployment version numbers are for marketing releases.
>
> **[4:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=297)** For internal use, it's more clear and easy to just use two parts, a major version number, which you change if you're making backing compatible changes and the build number, which will increment with every build.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=309)** In Jenkins you can use the build number variable to do just that.
>
> **[5:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=313)** Now you're not ever wondering where a specific artifact came from, it came from the identically numbered build.
>
> **[5:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=319)** If you want to add in a minor version number or get crazy and use semantic versioning, you can.
>
> **[5:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=324)** But to be honest, I have yet to see that be worth the hassle in any continuous deployment shop I've worked in.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=331)** Anyway, assuming any two builds are the same, just because the code and the application repo is the same is a rookie mistake, build configs can change.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=340)** Versions of built software can change, other undeclared things above, below or around your code can change, and they change the output.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=349)** A new build is a new version, period.
>
> **[5:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=354)** You need to build an artifact and then test exact artifact and then deploy that exact artifact or you're asking for trouble.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=362)** You probably also want to tag the code you use to create that artifact with that version number in your source repo.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=368)** This kind of traceability is key to an effective build pipeline.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=373)** So let's run this build and see a new version appear in Nexus.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=381)** And as you saw, we have version 1.1 in Nexus already, and once our build number two finishes, we'll be able to go over, and if all went well, there'll be a version 1.2.
>
> **[6:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=393)** All right, our build finished, let's go over to Nexus.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=400)** Go browse our repositories, we'll go into word cloud generator.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=405)** And what do you know?
>
> **[6:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=407)** There's a version 1.2.
>
> **[6:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=410)** So now let's try this out and make sure it works.
>
> **[6:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=413)** All right, so to you use that artifact it's available via the next API.
>
> **[6:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=418)** So we're going to go into our test fixture.
>
> **[7:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=423)** The password to that of course is the agile admin.
>
> **[7:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=427)** And so since it's available via the API, we can just get it via curl or wget or whatnot.
>
> **[7:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=434)** I'm going to post this big, long curl command, and it's pulled me down my word cloud generator zip file.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=442)** So let me show you a nice little trick that you can use to verify the integrity of your files.
>
> **[7:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=448)** We're going to do an MD5 sum of our word cloud generator.
>
> **[7:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=454)** And you can take this sum, it's checksum and go back to Nexus and you can actually search on that checksum.
>
> **[7:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=465)** And sure enough, you'll find that that matches version 1.1.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=470)** That's a neat little trick because sometimes you may find a file laying around on your file system, and you're not exactly sure what version it is.
>
> **[7:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=477)** Here are the version numbers and the file name, but you can't trust that.
>
> **[8:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=481)** So you can get it's checksum and go search in Nexus and make sure and find what it is.
>
> **[8:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=487)** So now let's unzip this.
>
> **[8:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=492)** Let's make this executable and we're going to run it to start up our word cloud generator.
>
> **[8:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=501)** All right, now we're going to go over to our browser.
>
> **[8:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=505)** We're going to go check out port 8888 and see if it's working.
>
> **[8:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=510)** And there's our word cloud generator.
>
> **[8:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=515)** Sure enough.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=516)** Now, if it doesn't work, we know what build to go into and look for errors, and we know what code that build pulled.
>
> **[8:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=525)** We can set up limited permission so that there's only read only users that can pull specific artifacts and deploy them.
>
> **[8:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=532)** We can always go back and check out an older artifact, roll back to if there's a problem.
>
> **[8:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=537)** And here you can just Control + C out at the command line to stop the app.
>
> **[9:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=542)** And that's an artifact repository, it's deceptively simple.
>
> **[9:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=546)** And while the integrated functionality, some of these tools provide is cool.
>
> **[9:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=550)** Like scanning your code for components, bearing software licenses you shouldn't be using or looking for security flaws.
>
> **[9:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=557)** Some people with simple needs, we'll just use a S3 folder or a file server to hold their artifacts.
>
> **[9:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=564)** It's the semantics that you put around your artifacts and their flow through your software supply chain, that's the important part.
>
> **[9:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/artifact-repositories-in-action?u=76281980&t=571)** Next up, we'll talk about adding testing into our pipeline to make it a little less YOLO.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5), make (5), find (3), curl (2), apache (1)
> **Code Keywords:** let (11), from, (1), this. (1)
> **Env Vars:** md5 (2), api (2), sha1 (1), url (1), yolo (1)
> **Definitions:** is a  (3), is an  (2), in other words (1)
> **Versions:** version 1 (4), version 3 (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **Ports:** port 8081 (2), port 8888 (1)
> **Cross-References:** as you saw (1), go back to (1)

#### Testing and continuous delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=0)** - Do you want to know the trick to continuous integration and continuous delivery?
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=4)** - I do.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=4)** - It's (chuckles) all about the testing.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=6)** - [Ernest] To perform continuous integration, you need to be performing continuous testing.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=10)** And that means automated tests that you trust.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=14)** - What do we want out of our tests?
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=15)** Well, to find bugs, right?
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=17)** Well, it's a little bit more subtle than that.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=19)** Testing is a means of providing feedback to the developer.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=23)** - [Ernest] We want testing to be fast, we want it to be reliable, and we want it to isolate failures so that we're shortening and amplifying these feedback loops.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=32)** Depending on the kind of app we're working on, missing a bug may or may not be more important than cycle time.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=39)** - Yeah,, remember that tests are code.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=41)** That means all the best practices apply to code, they apply to them.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=45)** Keep them in source control, build them into artifacts, and so on.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=49)** - There are many different kinds of testing and the terminology often gets mixed up together.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=54)** Each kind of testing has many variations and tools you can use to perform it.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=59)** We'll have separate videos about unit, integration, UI, and security testing that go into more depth and demos for each of them.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=68)** - [James] But in short, unit testing is performed at build time on a single unit of code and or artifact without the use of external dependencies or deployment.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=77)** You unit test a module or a library using something like JUnit, XUnit, Rspec.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=82)** Those are some of the tools you'd probably use for this.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=85)** - [Ernest] Integration testing is performed as you bring together pieces of your application, and as it needs to use external dependencies like databases to actually do its thing.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=95)** You integration test a full application or an API or a running server.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=101)** For this you might use RAML test runner or Serverspec.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=106)** - [James] End-to-end testing, often implemented as UI testing, is when you test more of your application in a way that the end user actually uses it.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=113)** This kind of testing might be done with things like Selenium or Protractor.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=118)** - [Ernest] And of course, security testing looks for flaws in your code and the runtime to prevent compromises and leaking of data in production.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=126)** Some common tools for this include FindBugs, Fortify, and Gauntlt.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=131)** - All right, we won't be able to cover performance testing here as that's a whole art form unto itself, like soak tests, spike, test, step tests.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=138)** - And people like to cite a bunch of other kinds of tests, system tests, acceptance tests, validation tests that we're lumping into our larger categories for simplicity.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=149)** - There's some other concepts we need to understand.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=151)** Here's a quick list of important testing terminology.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=155)** - [Ernest] Shift left is a term that's become popular for moving testing as much to the beginning, the front in a normal left to right software build pipeline flow diagram as possible.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=167)** Developers should be able to run the full app and run every one of these kinds of tests on their desktop before inflicting a change on trunk and the CI server.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=176)** - Yeah, obviously getting feedback before checking is faster than waiting for a system, or worse, maybe a person to perform some tests minutes, hours, or days later.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=185)** - [Ernest] Test fixtures are a set of objects used to run a test in a well-known environment.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=191)** A dataset you load into the database before you run the tests is a test fixture.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=197)** So is Linux server with a known configuration for your app to operate on if it needs one.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=203)** Test fixtures are artifacts and should be built and managed like artifacts.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=207)** - Okay, the System under test or the SUT, that's QA lingo for the thing that you're testing.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=213)** So let's say you're testing a Rails app deployed in Heroku, that would be your SUT.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=218)** - [Ernest] Your cycle time is how long it takes from when someone starts working on an item to its production deployment.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=225)** This is different from lead time, which is the time from when something's requested all the way to when it's done.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=232)** - [James] Mocking and stubbing.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=234)** In unit tests you write mocks of classes that you can simulate using external libraries instead of really using them.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=240)** Kind of the classic example here is that you're unit testing code that sends an email.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=244)** You'd write a mock class that is used instead of the real email sending class.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=248)** - There are variations on mocking: stubs, dummies, etc.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=253)** These are subtly different and linked to what kind of test philosophy you're following.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=257)** - Okay, well that should be enough to get going.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-and-continuous-delivery?u=76281980&t=259)** In our next video, we'll briefly talk about test philosophy.

> [!info]- Semantic Content
>
> **Speakers:** - [ernest] (7), - there (3), - [james] (3), - yeah (2), - okay (2)
> **Code Keywords:** module (1), this. (1), let (1), class. (1)
> **Env Vars:** sut (2), api (1), raml (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), rails (1)
> **Cross-References:** next video (1)

#### Testing philosophy
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=0)** - "Test philosophies?" you ask. Indeed.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=3)** Tools are great, but it's how you use them that will make you succeed.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=7)** - Here's a quick rundown of some of the approaches to testing people have found helpful.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=12)** - TDD, or test-driven development, is the practice of writing a failing test first, then writing the code that causes the test to pass, and then refactoring to make it cleaner.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=23)** This has the benefit of always writing a test and of thinking about what your code should do before just jumping right into it.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=31)** - All right, BDD, also known as behavior-driven development.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=35)** It's a refinement of TDD that focuses on simple sentence driven testing.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=39)** Tools like Cucumber allows specifying user behavior tests in a simpler way than writing app code, which allows less technical users to participate in test definition and understand the test results.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=50)** - ATDD, or acceptance test driven development, extends this to where the project team decides on a set of BDD acceptance tests before development even begins.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=63)** - Each of these has its pros and cons, but all have proven to have strong advantages in making continuous delivery work.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=69)** - But what of all this stuff do you need to do?
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=72)** Well, your end goal in a company is to deliver as much value as you can in an efficient as way as possible.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=79)** This means minimizing cycle time, while keeping bugs down to a business acceptable level.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=85)** Software doesn't have to be perfect, but junkie software doesn't get released or purchased.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=90)** - The important metrics to track our cycle time, velocity, and customer satisfaction.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=95)** Deep dive QA metrics like test coverage, they're not useful in and of themselves, they're only a means to an end.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=101)** Focus on how much you're delivering, how you manage velocity, and how many issues customers have from your support tickets or whatever your equivalent is.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=110)** Those should be your top level drivers.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=113)** - You maximize these by being strict about always writing a test as part of your code, testing early in the life cycle, and investing appropriately in each level of testing.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=125)** - Faster cycle time produces better quality.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=127)** So just adding on as much testing as you can isn't always the answer.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=131)** - That's right, at Google they're testing experts recommend a 70, 20, 10% split between unit, integration, and end-to-end testing, because the latter is slower and happen later in the process.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=145)** Also smaller tests are less complex and unreliable themselves, and more modular tests are more easily maintained in the face of code change.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=153)** - Okay, let's go from philosophy to practice.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/testing-philosophy?u=76281980&t=156)** In the next video, I'll show you how to write unit tests.

> [!info]- Semantic Content
>
> **Speakers:** - here (1), - tdd (1), - all (1), - atdd (1), - each (1)
> **Env Vars:** tdd (2), bdd (2), atdd (1)
> **Code Keywords:** pass (1), extends (1), let (1)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** known as (1)

#### Unit testing in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=0)** - [Instructor] With good Unit Testing practices, a safety net is built up around your code.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=5)** Unit Tests build confidence in the development team to be able to deliver faster.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=10)** For reminder, you can find the code for our sample application at [github.com/wicked/word-cloud-generator](https://github.com/wicked/word-cloud-generator).
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=19)** Now, I know everyone watching is not a developer and even fewer people are Go Developers but the approaches we discuss here can be taken for almost any language or framework out there today.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=31)** Actually, in the DevOps Foundation's infrastructure automation course here in the library, we even show how Unit Testing can work for infrastructure.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=40)** Let's look at our application.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=42)** I'm going to open up the wordyapi./api.go.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=45)** In particular, we're going to look at the ParseText function.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=49)** Our Word Cloud Generator takes a string of words and counts the number of occurrences of each word.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=54)** It returns this as Json and the JavaScript renders this into a nice little Word Cloud.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=60)** Well, one thing I want to do is write a test to make sure that if I pass a string filled with the same word, I get an accurate count.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=68)** Let's head over and look at our test for that function.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=71)** I'm opening up wordyapi, api_test.go.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=79)** Let's walk through our test here.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=81)** First, you can see we're loading in the Go Testing library, and we have the function that uses the same name as the function we want to test.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=88)** So this is TestParseText.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=92)** Next. I have a string set up here and I've two words set up here, where it says "test test".
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=98)** That's our sample string that we're going to hand over for our test.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=102)** Next here on line 13, we call ParseText and we hand over that string and then we get our output.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=110)** The next bit is getting the result of that Json, into a variable that I can work with.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=115)** The last bit here is where I let the test know I expected two occurrences of the word 'Test', and if I receive anything other than that, it will kick up an error.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=124)** Let's see if we can get this test to fail.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=127)** I'm going to add a third word 'Test' to our string here and I'm going to save that out.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=133)** Now, I'm going to leave the number of occurrences at two.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=136)** So now we should have a mismatch because we're sending in three, but we're saying we expect two.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=143)** I've saved that off and let's run, make test, from our repo and make sure that we get our failure letting us know what we expected and what we actually got.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=153)** So we got a failure.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=155)** So as a developer adds new code in or new expectations, we get alerts for these tests.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=161)** This is really important for modern development.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=164)** Good Unit Testing is really a must.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=166)** Let's go back in and let's change our expectation to three.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=178)** I set it as three and let's go ahead and save that off and let's run 'make test' again to make sure we're now passing.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=188)** All right. Great.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=189)** We passed our one function in our Unit Test.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=192)** I'm going to clear my screen here.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=194)** One thing to think about is if you have a large code base, sometimes can be kind of hard to figure out where all your tests are and how they're passing and sometimes you need a helpful way to visualize it.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=204)** Well, I have Go Convey installed here, so let's pop it up and see our test passing.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=209)** I have a helper in our make file.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=210)** I'll type in 'make goconvey'.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=216)** So this is a nice way to visualize your tests.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=218)** You can see under wordyapi, we have our TestParseText and it's passing so we can feel good about that.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=225)** Tools, just like go convey exist for almost all languages and you can have it watch the repo.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=231)** So anytime there's changes, it can automatically run this and pick this up.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=236)** Since Unit Test was so fast to run, we recommend adding them to your Git pre-commit hooks and run them alongside your linters and formatters.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=243)** No matter what language you're using, there's a Unit Testing framework for it and it's really worth time as a team to come up with goals for test coverage and spend time each sprint or development cycle keeping aligned to those goals.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=257)** Of course, as this is a CI/CD course Unit Tests also get run by your CI server every time it runs a build.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/unit-testing-in-action?u=76281980&t=263)** Unit Tests are an important part of having confidence in your ability to ship code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (5), pass (1)
> **CLI Commands:** make (7), find (1), git (1), cd (1)
> **File Paths:** wordyapi./api.go (1), api_test.go (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** api_test (1)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)

#### Application deploy and release
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=1)** - Once you've built and tested an artifact, the next thing you need is self-service deployment of that artifact to a working system so that you can run more tests.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=10)** Once you have a self-service deployment, then making it continuous, in other words, automatically promoted, is purely a policy decision to hook one stage to another instead of pushing a button.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=22)** You might deploy locally on a build server first to run integration tests, then to a testing environment to run more integration and acceptance tests, and then deploy to a production environment.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=34)** The trick to good deployment is to always make sure things are the same.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=38)** Deploy the same artifact you built and tested.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=41)** Don't build it again or use a different artifact.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=44)** Deploy to each environment using the same deployment code in process.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=49)** Using one mechanism for test and another for production guarantees you'll have production deployment issues.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=56)** Deploy to similar environments.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=58)** They don't have to be identical in terms of system resources, but they should be identical in all functional ways.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=65)** You can bring your app up on the build server or similar for a first run of the integration tests, but your test results aren't good enough for release unless you've tested on the target platform.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=76)** At work, we have one build that gets targeted to a lot of platforms.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=80)** We make AWS AMIs, VMware images, Hyper-V and Azure images, and so on.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=86)** We bring the software up on our build server to run the integration tests.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=90)** But when that passes, we deploy it to all of those target platforms and retest there.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=96)** And finally, run smoke tests that verify that the application is up and working at the end of every deployment, whether internal or production.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=105)** Deployments should always self-validate their state at the end.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=110)** A product I work on uses the Robot Framework for its UI acceptance tests.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=115)** I encouraged the developers to tag tests with the tag #smoke if they were safe to run in production and wouldn't mess up any data.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=123)** So we use the exact same test runner and test suites for each layer of deployment and just cut out tests that aren't appropriate for that layer.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=133)** There's a couple other tricks to continuous deployment.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=136)** The first is to deploy small batches, of course, the same as with continuous integration.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=142)** Smaller batches mean less change.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=144)** In Gene Kim's research for his book "Visible Ops" determined that 80% of production outages were caused by someone making a change.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=153)** If you deployed a very small set of changes, there's less to go wrong, less to troubleshoot when it does go wrong, and a much shorter path to fix.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=163)** Also, keep your changes loosely coupled to each other as much as possible.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=169)** Requiring two changes to go out at the same time is an anti-pattern.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=173)** The developer should spend the time to make the code do the right thing when faced with either path.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=179)** Basic API versioning, data schema versioning, et cetera, enable code to smoothly handle set of database data migrations or the like.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=189)** Remember, you're releasing small batches quickly, so, on day one, you can add a new column to the database.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=195)** On day two, have the code start to populate it.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=198)** On day three, run a full data migration for historical data.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=202)** And on day four, start serving it back out from the new column.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=206)** Releasing all that at once can leave you in an intractable position if any one step goes bad.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=213)** Also, deployment and release don't have to be the same thing.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=217)** For example, you can do what's called a blue/green deployment by maintaining two sets of production servers.
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=223)** Deploying the one set while it's out of service, testing it, and then swapping it in with the old ones ready to go back in at a moment's notice.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=233)** Or you can use feature flags, or toggles, which allow you to turn features or versions of features on or off, either totally or on a per customer or group basis.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=244)** So you can deploy that new sidebar full of enriched data, turn it on, and then turn it off again if there's a problem.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=252)** Web companies like Twitter and Facebook make extensive use of this scheme, turning off non-critical screen widgets if they have problems or even if they're having overall performance issues.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=263)** This extends the branching by abstraction pattern into the operational environment.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=269)** There are a lot of deployment pattern variants you can use.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=272)** Canary deployments where you bring one newly deployed server up into traffic to see how it does, like the proverbial canary in the coal mine.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=281)** You can build on more detailed control to show new code to a ramping up percentage of your users if you want.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=289)** As for deployment tools, I wish I had better news for you.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=293)** Since how you deploy has a lot to do with what you choose as an artifact and your type of system, there's not a set of clear leading options here.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=303)** You have your basic SSH tunneling pulled directly out of your source control tools like Capistrano.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=310)** This is old but still used a lot, even though exposing your version control system to your production environment is a little questionable.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=318)** If you're packaging your apps as OS packages, using a CM tool like Chef or Puppet is popular.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=325)** But if you want more control, you might use orchestration system like Rundeck or Ansible, or you can just build deployment into your build system.
>
> **[5:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=335)** Or if you're using Docker or serverless technologies, there are ways to do it for those that are totally different.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=341)** And, of course, there's a bunch of commercial options.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=344)** None of these are mutually exclusive.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=346)** You might use a couple in combination.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=349)** And many folks still roll their own deployment code.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=352)** James wrote a custom in-house deployment dashboard for Signal Sciences, similar to Etsy's open source Deployinator dashboard.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=360)** People do this a lot because most of the options I mentioned have terrible visibility in dashboarding around releases.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=367)** In my shop, I use our build system Bamboo to perform deployments for one of our products.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=373)** Having the deployments the same UI as the build's is compelling, and my deployments end up just exercising Amazon Cloud APIs so it fits our use case.
>
> **[6:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=383)** But for our more complicated product that has on-prem customers needing to consume updates, we build the Debians, push those to an update server, and then initiate Puppet-based installation using Rundeck orchestration server on our systems.
>
> **[6:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=399)** Use a deployment system that is as simple and reliable as possible and only add stages and complexity when the requirements necessitate it.
>
> **[6:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/application-deploy-and-release?u=76281980&t=410)** Next up, I'll deploy our sample app using Chef and show you how that works.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), aws (1), ssh (1), ansible (1), docker (1)
> **Code Keywords:** self (3), finally, (1), extends (1), case. (1)
> **Env Vars:** aws (1), api (1), ssh (1)
> **Definitions:** in other words (1), is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Best Practices:** always make sure (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - once (1)

#### Deployment in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=0)** - [Instructor] All right, let's add some deployment to our build pipeline.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=4)** Deployment is probably the most variable part of the build pipeline, but we're going to show a deploy using Ansible just to have something to hang our hat on.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=14)** Ansible is a free open source automation tool that can be used to set up and apply changes to your systems.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=21)** You can learn it from courses right here in the library or plunge into the copious documentation.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=27)** Let's go back into our course files and the Docker Compose setup that we're using.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=33)** Here I've set up a test_fixture Docker container.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=36)** It's a Ubuntu 20 container with SSH installed and configured in the Docker file.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=42)** Usually wouldn't you run SSH in a Docker container, but we're specifically using it here to emulate a running remote system for testing purposes, so it's crucial.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=53)** You could of course do this with virtual machines, or Amazon instances, or real remote machines, but these little containers are fast, configurable, and perfect for our demo environment.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=65)** So back to our Docker Compose File.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=68)** When we run Docker compose up, we get our Jenkins container, the Nexus container, and our test fixture container with a bunch of preloaded files, all able to talk to one another.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=79)** The Ansible playbooks to deploy this app are going to be executed right out of our Jenkins CII system.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=85)** Test fixture container is playing the role of a production server that you might want to deploy your application to.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=94)** Here in the build, we want to really exercise the deployment code that we're going to be using in production, build code and deploy code or all code, and it needs testing just as much as the App Code does.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=108)** So we're going to go ahead and start it now so that it's ready when we need it later.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=114)** I've done a couple of things to make this all work.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=116)** First, as we've mentioned, Jenkins works off of plugins.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=120)** Here's the page for the Ansible plugin that I've installed in this Jenkins instance.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=125)** Then in the Jenkins container build, I installed Ansible and also utility called sshpass.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=131)** So I can use passworded ssh instead of setting up certificates for quick lab purposes.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=139)** The actual Ansible playbooks, are in the provided Jenkins home directory that the container mounts.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=149)** These are written in YAML and they follow a specific structure.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=153)** Here in my top level app.yml I define one role called word-cloud-generator.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=159)** You can define an install and operate a whole system of many parts in a playbook, but this is a minimum functional set for our demo.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=168)** Now let's look at our tasks.yml down in our playbook definition.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=178)** So at a high level, we make a directory, we download our artifact from Nexus, we unzip it, we make it executable, we make a symbolic link for convenience, and we run it.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=192)** Let's dig into some of the details though.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=194)** First of all, we're inserting a lot of variables from our Jenkins spilled using mustache templates.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=201)** So-called because they start and end with two curly braces that look like a moustache. And we all know that a mustache, is an unmistakable sign of wit and power.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=211)** So I've used a lot of them for the version number and the Nexus password.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=216)** Also Ansible's a little tricky.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=218)** Some commands are item potent and will ensure a state like this file command will make the opt cd class directory in the test fixture if it doesn't already exist and if it does it won't do anything.
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=230)** Some commands however, you have to drop out of supplied keywords to shell commands.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=234)** And in those cases, it's on you, down here at the bottom to get the app to run.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=239)** Normally I'd make a system D service, but in their infinite wisdom, the people making Docker, Ubuntu images want to encourage people to run one service per container and so they don't run system D.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=252)** So instead to make it run, i install a package called daemonize and kill all and then i kill any running instance of the word cloud generator and I start a new one, a well behaved Ansible command would do that all in one.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=268)** So let's run a deploy and make the magic happen.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=272)** As in the previous slabs, we'll go to our adult running Docker compose stack, and log into Jenkins on port 8080 with username admin and password, the agile admin.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=288)** Now let's look at our Jenkins Deployment Build, word-cloud-generator-deploy lets view its configuration.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=300)** All right, as you can see, here in this build, the primary step is called Invoke Ansible Playbook.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=311)** And it's set up to run our playbook that you saw before by SSH into the test fixture and running it there.
>
> **[5:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=324)** All right, let's run this.
>
> **[5:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=328)** So when we run it, it's going to ask what version we want it to deploy our latest version from build number two is version 1.2 so let's use that.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=341)** It'll run and you can go watch it do its magic.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=350)** All right and it's done and happy.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=352)** Let's verify that by going and logging into our test fixture, just as root@localhost with of course password, the agile admin.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=367)** So let's see if it put it into our ops CD class directory.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=373)** Oh, it looks like it did.
>
> **[6:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=375)** And is it running?
>
> **[6:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=378)** It appears to be.
>
> **[6:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=382)** All right, so we'll go to local host port 8888, and our application is there and working.
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=392)** Also added a version endpoint it will tell us what version is running and look it's version 1.2
>
> **[6:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=406)** If we want to downgrade or upgrade just to run the build and specify a new version number.
>
> **[6:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=413)** So let's downgrade to version 1.1
>
> **[7:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=428)** All right, it's finished running the Build.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=431)** So let's go reload our version end point and Voila! are rolled back to version 1.1 That's getting the job done using Ansible, but there are many options for how to run deployments.
>
> **[7:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=443)** In the DevOps fundamentals infrastructure as code course here in the library.
>
> **[7:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=448)** We go over orchestration, tooling and approaches in depth.
>
> **[7:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=452)** Once you're ready for continuous deployment, you can trigger deployment straight out of your build if you want run the build, run some tests, and then if they pass automatically run the deploy, then probably test some more.
>
> **[7:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=464)** Or you might stop at deploying to a staging environment and wait for someone to pull the trigger on a production deploy after some other approval step.
>
> **[7:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=473)** Over the next few videos, we'll run our full integration and UI test suites on this deployment as well.
>
> **[8:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=480)** And that's a super basic deployment strategy that shows how you can have a decoupled deployment that consumes your artifact from your Artifact Repo with no necessary dependency on your version control system or build system.
>
> **[8:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=493)** For best results and to pass security and compliance checks, you want your build system to pull from your source control and drop an artifact into your artifact repository.
>
> **[8:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=505)** And then you want to keep your deployment tool separate and inside your production environment, knowingly having read access to that artifact repository, where it can pull them and deploy them to your environment.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=516)** I also wanted to show you here, the importance of passing your artifact version through the delivery pipeline.
>
> **[8:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/deployment-in-action?u=76281980&t=521)** It can sometimes be tempting to have your deploy systems, just run with latest version, but asserting an explicit version all the way through is the key to troubleshooting problems.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (10), docker (8), make (8), ssh (4), cd (2)
> **Code Keywords:** let (12), pass (2), this. (1), super (1)
> **Prerequisites:** set up (3), install (2), setup (1)
> **Env Vars:** ssh (3), cii (1), yaml (1)
> **Versions:** version 1 (4)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **File Paths:** app.yml (1), tasks.yml (1)
> **Ports:** port 8080 (1), port 8888 (1)

#### Integration testing in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=0)** - [Instructor] Now that we have a deployed app, let's talk integration testing.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=4)** While unit testing just operates on the application code integration testing is any kind of testing you do on the assembled program, or anything that exercises the dependencies, such as the database, the network, the file system, the web server, anything like that.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=19)** Depending on the kind of application, this could just be exercising it at the command line, or exercising its API, often you'll have layers of integration testing as you assemble more parts together.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=31)** Let's take a look at our sample application, the word cloud generator.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=35)** I'm going to start it up here with a make run and it's set up to serve on port 8888.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=40)** In a browser, I'll go to local host 8888.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=44)** And let's give it a few words to make a word cloud.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=48)** Here, I've pasted in, "Integration testing "is a really, really, really good way to do testing."
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=55)** Once I submit that, I get my word cloud.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=57)** Now, since the front end of the application is just calling a rest API, we can mimic this test on the command line without using a browser.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=65)** On the command line, I'm going to use curl to send in my text to the API.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=69)** So, let's paste in our same sentence here.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=71)** And our curl command that says, "integration testing "is a really, really, really good way to do testing."
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=78)** When I hit Enter here, I get my results back from curl.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=81)** Now that I have my return JSON, it matches and it looks good, it has the number of occurrences correctly put for each word in the sentence.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=90)** This is great, however, it still means I have to run something on the command line, and I still have to start on my application.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=95)** What I'd really like to do is create an integration test that mocks the HTTP and lets me send HTTP requests in code without starting and running the application.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=105)** That way, developers can run it without breaking context to move to the browser or to the command line.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=110)** Now, I've already set this up in the repo in the test file called main_tests.go.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=116)** Let's use vim to look at it.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=118)** Since the application is a Go application and it includes its own web server, it would be good to test that.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=125)** So, I need to mock out a server and send a request to it.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=129)** At the bottom of this file, there is a test fixture that sets up an HTTP request and response, and a handler to serve that HTTP.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=137)** With all this in place, we can now send HTTP requests without starting up the application.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=143)** Let's scroll up here and look at TestSimpleSentence.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=147)** Here, we're sending a mix of capitalization with our wording in our sentence here, "TEST this is only a test."
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=154)** We expect to get back this JSON with a number of occurrences for each word.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=160)** The next test below is called TestLongPunc.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=164)** It sends lorem ipsum text with punctuation and a really large paragraph of it.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=170)** So, this all looks good.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=172)** I'm going to close this down and we're going to run make test to see our integration test run.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=178)** Okay great, you can see that they've passed.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=181)** Both TestSimpleSentence and TestLongPunc, both passed and they all look good.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=186)** We discussed, at the beginning, how integration testing should be a layered approach to testing.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/integration-testing-in-action?u=76281980&t=191)** Our testing here showed a couple of approaches, but depending on your application and its dependencies, you'll want to find an integration testing approach that gives you the most coverage without slowing down development.

> [!info]- Semantic Content
>
> **Env Vars:** http (5), api (3), json (2), test (1)
> **CLI Commands:** make (3), curl (3), find (1)
> **Code Keywords:** let (6)
> **Tools:** command line (5), vim (1)
> **Definitions:** is a  (4), is called (1)
> **UI Navigation:** go to (1), scroll up (1)
> **File Paths:** main_tests.go (1)
> **Code Identifiers:** main_tests (1)

#### UI testing in action
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=0)** - [Instructor] Well, we've done our unit and integration testing, so now let's test our UI.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=5)** UI testing has its advantages and disadvantages.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=8)** On the one hand, it totally simulates the user experience using a UI application.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=14)** Levels of testing below it aren't complete.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=17)** But on the other hand, it's slow and usually pretty touchy.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=20)** UI tests require a lot of maintenance in the face of app changes.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=25)** You can use UI testing to perform regression testing, ensuring the app still works the way it should.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=30)** Most regression should be covered by unit and integration tests, but in the end, exercising the finished deployed app the way a user does is how you know for sure it's working.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=41)** UI testing is also great for acceptance testing, validating that new functionality works.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=47)** This is the remaining place That manual QA really makes sense, but if you can provide new feature specs as an actual testable UI language, you can get to a completely automated set of tests.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=59)** You can do UI testing of individual components in your pipeline, but here we're doing what's called an end-to-end test.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=66)** In other words, exercising an actual deployed and running application from end to end.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=71)** Nothing artificial here, it should be a pretty accurate look at what the app behaves like after it's fully built and deployed onto a system by our CI/CD pipeline.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=82)** There are a bunch of UI testing frameworks, but one of the most popular for web UIs is called Selenium, specifically the component called WebDriver.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=91)** You use it to driver a browser, and then you write a bunch of code to do the actual work.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=98)** But there's a tool I like to use to abstract a lot of that out.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=101)** It's called Robot Framework.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=103)** It's a test runner that uses a BDD type language, Gherkin, the same language that the Ruby tool Cucumber supports.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=111)** It has a bunch of plugins, but one of the most interesting is the SeleniumLibrary plugin that lets you drive a browser from it.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=119)** It also supports the PageObject pattern, which is important for maintainability.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=124)** What this pattern means is that you define the specific HTML pages and elements of your application in an encapsulated resource model.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=133)** And then your test code just refers to that model so that if you change the login button, for example, instead of having to go find the specific way you've referred to that button in a hundred different tests, there's one canonical place to go change it.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=147)** So let's test our app in Robot Framework.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=150)** Back to the command line.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=152)** We're going to do something a little different this time.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=154)** We could run our robot tests headless in a browser as part of our CI system, but then you won't get to see what the browser is actually doing.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=162)** So, let's first go look at a robot test definition and run it locally.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=167)** You should just need Python 3 and the Chrome browser installed to do this yourself.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=172)** In our source bundles robot-tests directory, we have a Python virtual environment already installed, which contains Robot Framework and the SeleniumLibrary.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=181)** You instantiate it by running source venv/bin/activate, and it puts you into that virtual environment.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=190)** Now you should be able to run a robot just by typing it.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=196)** Now you'll need to install a browser driver.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=198)** While the rest of this lab is portable across systems, so we've provided in the course files, those drivers are specific.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=205)** Luckily there's a Python utility that I've pre-installed that will download the right one for you called webdrivermanager.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=217)** So we're going to have it install Chrome, and link it right here into our bin directory so that we can use it.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=228)** Now let's look at our test files.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=232)** I've made a resources file that has our basic setup and page object definitions.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=237)** Attributes of the actual pages are kept in here.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=240)** You can see that I've defined some base functions, including the home page and the version end point.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=249)** Now here's the actual test file.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=251)** It uses the resources from the resource file.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=254)** Look how understandable this test is.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=256)** It's something you can let product managers or other semi-technical folks write tests in.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=261)** This word cloud test is going to open the homepage, enter text for a word cloud, submit it, and make sure that it's got a representative word in the response.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=273)** The version end point test will do the same thing, just looking for the string version and the version end point.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=279)** All right, let's run them.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=280)** Robot has a zillion command line options, but the only mandatory one is the directory to find the tests in.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=287)** So we just run robot .
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=290)** I've artificially slowed this test down with a little delay so you can see what happens.
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=295)** So you saw it open the browser there and check the version end point.
>
> **[4:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=299)** Now it closes, it's going to open it again, go to our word cloud generator app, put in some text, look at the response and then finish out.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=311)** And then it's going to tell us that we passed.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=315)** It also generates a detailed test report and log so that you can see exactly what happened.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=322)** They'll even make screenshots if it failed steps.
>
> **[5:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=326)** You can stick this into a Docker container using something like Xvfb to run headless and add it to your build.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=332)** We do this at my place of work where I've written a wrapper to handle parallel runs, running cross browser tests using Sauce Labs' SaaS service, do system under test set up and tear down and more.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=346)** One last brain teaser.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=348)** You know how on that version end point I'm just checking for the string version, because how would the tests know what the current version is, right?
>
> **[5:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=356)** Well, all these tools and tests should also have a build and their own artifacts.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=360)** If these tests were in the app source repo and got the real version number injected to them in during the build just like the app does, then you'd have a test artifact version linked to the app that can run and even make sure that it's running against the right version of the app that it was coded for.
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=377)** All right, i know that was a whirlwind tour of the different types of testing.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=380)** Our goal here isn't to teach you any of these tools, but just to introduce you to these concepts and show you a real world example of how each might be performed.
>
> **[6:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ui-testing-in-action?u=76281980&t=390)** Next, we'll bring it all together and talk best practices.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (3), find (2), cd (1), ruby (1)
> **Code Keywords:** let (6), require (1), abstract (1), for. (1)
> **Prerequisites:** install (2), you'll need (1), setup (1), set up (1)
> **UI Navigation:** open the (2), go to (1)
> **Definitions:** in other words (1), is called (1), refers to (1)
> **Env Vars:** bdd (1), html (1)
> **Tools:** command line (2)
> **Analogies:** for example (1), just like (1)

#### Security testing in action with Gauntlt
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=0)** - [Instructor] Let's talk about a really fun part of continuous delivery, security testing.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=4)** I love this topic, but it's often overlooked.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=7)** There are a bunch of ways you can get started with this, but let's start by discussing how security fits into the overall picture.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=13)** There are two main categories of security testing that work well for delivery pipeline.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=18)** The security industry is full of acronyms and lots of fun ones like SAST and DAST, to describe how this concept works and even runtime variations like RASP and IS but let's just break this down into two categories, static and dynamic.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=32)** We're going to look at a dynamic security approach and then a static testing approach.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=37)** Dynamic security testing differs from our other testing in that you run it against a deployed and running application.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=43)** Let's look at some of the pros and cons here.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=46)** In dynamic testing, you don't really assert anything other than statements like this form should not contain cross-site scripting or Inmap, it should find no extra open ports.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=56)** Because you are testing actual payloads and actual security attack tools, you're asserting not just what you expect as you do in unit testing, but you assert that the tool itself should not find any problems, which in the end is actually pretty cool.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=71)** Dynamic testing is a good collaboration opportunity between a group of developers and security engineers and operations.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=77)** It gets these different groups together, sharing, testing goals and outcomes.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=82)** There are some gotchas though.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=83)** Dynamic testing requires the system under test to be running and sometimes they can be slow.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=89)** So you might end up running them in parallel, depending on your constraints.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=92)** Let's take a look at a dynamic tool and run it.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=96)** I'm one of the core developers on Gauntlt, which is an open source tool for dynamic security testing.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=101)** For this course, I want to discuss how you can integrate these types of tests into your delivery pipeline.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=106)** Gauntlt helps automate any attack tooling to run against your infrastructure.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=111)** Ideally as part of your CI pipeline, it uses a plain English style approach and all tests follow a given when then convention.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=119)** In this example, you can see the three commands in action.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=123)** First, you can see the what, what we're testing.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=125)** Then the given step.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=127)** This is all the setup of the target and the tool.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=130)** Next is the when step.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=132)** This is the actual execution of the attack.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=135)** And last is that then step, which is asserting the outcome that I want to see.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=140)** If any of these steps fail along the way, the test exits and the build fails accordingly.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=145)** There's plenty of getting started information on [gauntlt.org](https://gauntlt.org).
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=148)** For this demo, we're going to simplify it and use Gauntlt running in a Docker container.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=153)** Let's head over to [github.com/gauntlt/gauntlt-docker](https://github.com/gauntlt/gauntlt-docker).
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=158)** This gives you everything you need to get started and includes the attack tool, Arachni.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=162)** You want to clone the repo, do a make build, and a make install, and make sure it's set up in your path to get it working.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=170)** I'm moving over to my word cloud generator application, and I'm heading to the Gauntlt directory, and I'm going to look at the cross-site scripting attack.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=179)** In this attack file, we're testing for cross-site scripting by harnessing and attack tool, in this case, Arachni.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=185)** Notice that I'm running against docker.for.mac.local host port 8888.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=192)** Now this lets Docker connect to my local host.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=195)** If you're on Windows, you would just change the Mac to Win.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=199)** As you'll notice this scenario follows the same given, then when and then, saying that at the end, we should have zero issues detected.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=210)** Okay, let's close this down and let's give it a run.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=215)** I'll just type in gauntlt-docker, and since it's loaded in our path, it's going to run and it's going to look across the entire sub-directory for any files and in .attack.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=224)** It found XSS.attack and it executes each step along the way.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=229)** Now we limited Arachni here to run just the cross-site scripting attacks rather than running all of them.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=234)** This is key since security tools often run spiders or crawling steps that can take a really long time.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=239)** For your application, you're the developer.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=241)** You know right where the login page is or the any place where users would give input.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=246)** Gauntlt helps you isolate those tests all in one spot.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=249)** We can attach this to our build pipeline or CI system or wherever we put other test runners.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=256)** Okay, now let's turn our attention to static testing.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=259)** Let's take a look at retire.js which looks at all the versions of JavaScript libraries that you're using and checks to see if it has any vulnerabilities.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=268)** Let me clear my screen here.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=271)** So all you have to do to get retire running is use NPM to install it.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=274)** I already have Retire installed, but I would like to load in a vulnerable jQuery library than old version that is going to trigger some of the retire.js alerts and checks.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=286)** So I'm going into our static directory of our application, and you can see, I have CSS and JavaScript and other things like that in here for Word Cloud Generator.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=298)** And I'm going to download jQuery 1.4.1 which has some known vulnerabilities in it.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=306)** Okay, we have it inside of our application.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=309)** Now let's run retire-j to have it do some static analysis to see if we have anything that breaks its rules.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=318)** Okay, well it found my vulnerable version of jQuery, version 1.4.1, and it gives us a severity warning here.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=325)** This is very useful to make sure your team hasn't added in some sort of vulnerable library that they didn't know about.
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=330)** In this case, this static checker inside of a CI system would have said, "Hey, you can't use jQuery 1.4.1 it has known vulnerabilities in it.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=339)** For whatever language or framework you're using, there are options to test for this.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=344)** I hope this gives you some new ideas on how to add static and dynamic testing into your CICD pipeline.
>
> **[5:51](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/security-testing-in-action-with-gauntlt?u=76281980&t=351)** Well, that wraps up security testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), static (7), assert (2), case, (2), this, (1)
> **CLI Commands:** docker (5), make (4), find (2), npm (1)
> **Env Vars:** sast (1), dast (1), rasp (1), xss (1), npm (1)
> **Prerequisites:** install (2), setup (1), getting started (1), set up (1)
> **Code Identifiers:** jquery (4)
> **Versions:** 1.4.1 (2), version 1 (1), 4.1 (1)
> **File Paths:** retire.js (2)
> **URLs:** [gauntlt.org](https://gauntlt.org) (1), [github.com](https://github.com) (1)


### 4. 3. Putting It All Together

#### CI/CD best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=1)** - All right, now you've seen a sample pipeline, and we've talked about best practices: keep everything in version control, use artifacts, minimize branching, commit frequently, shift testing left, and so on.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=13)** - But there's some best practices for your overall pipeline you should keep in mind.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=18)** - [Man On Right] The key is that each developer has to understand that the successful build and deployment of their check-ins is their responsibility.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=26)** Not a build engineer, not a QA engineer, not an ops engineer, theirs.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=31)** - Yeah, even if other people are involved in that chain, your change is not done until it's successfully deployed in production.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=38)** - [Man On Right] Small changes and build quality in.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=41)** This is the lean mantra that should always guide your decisions around your pipeline.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=45)** - That's right.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=46)** You know, the more changes you make at once and the longer you delay testing, the more bugs you have, and the harder it is to find them and fix them.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=53)** - That's right. Let's talk broken builds.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=56)** - [Man On Left] While broken builds aren't bad, per se, you don't want them to linger because it blocks the team and it tempts people to pile on more changes that don't get tested.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=64)** - [Man On Right] Other engineers shouldn't check in or merge to master when the build's broken.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=69)** If they're in a hurry, they should help fix the problem.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=72)** You should always watch to make sure your build succeeds and never leave a broken build behind.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=78)** - [Man On Left] When your commit breaks the build, the build pipeline should stop and you should immediately fix the problem, usually by reverting to a prior version and working on the fix at your leisure.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=86)** Attempts to push forward and fix the build in place shouldn't be allowed to really take too much time.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=92)** - [Man On Right] Of course, good testing discipline facilitates success.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=96)** High quality testing, automated testing is crucial to continuous delivery.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=102)** - [Man On Left] All right, developers should always run the tests locally before check-in, or have a branch that builds and runs them before merging into master.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=109)** - [Man On Right] And don't allow flaky tests, and don't just comment them out or ignore them.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=113)** This degrades confidence in your pipeline.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=116)** Tests are code, log a bug and fix 'em, STAT.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=120)** Don't say you don't have time, what you don't have time for is delivering big bags of buggy code like you used to.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=127)** - Yeah, keeping the build clean and test passing, that's your first priority, and you'll be able to rely on your build in that case.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=134)** - I'm not going to say that you should have no manual QA.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=137)** But that QA should be focused on very high value activity and finding things that are impossible to find with automation, not doing work a computer should be doing.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=147)** - Yeah, use QA as expert consultants on how to construct good tests to build maintainable UI tests, valid performance tests, and doing resilience testing.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=156)** - [Man On Right] The same basic concepts apply to the deployment stage.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=160)** Automate your deployments and use that automation at every phase, from on the dev desktop to CI deploys to production deploys.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=169)** - Every piece of your environment is code that should be continuously built and validated.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=172)** And when your environment creation is automated, then each one is nearly identical, and one of the largest sources of surprise bugs is eliminated.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=181)** - Now some advanced topics.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=183)** Keep the build and deploy fast.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=185)** When anything starts taking more than a couple minutes, you should start looking into why.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=190)** Make component builds and test runs parallel, tune timeouts, and build system parameters.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=197)** - [Man On Left] Remember the 70% unit testing, 20% integration testing, and 10% end-to-end testing rule from our Testing Philosophy video.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=205)** This flow where the build, test, and deploy is, not only does it affect your cycle time, but it becomes hard for the developers to pay proper attention to the build.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=213)** - Dan Bodar did a great presentation back in 2012 called "Crazy Fast Build Times, or when 10 seconds starts to make you nervous," where he presents a lot of ideas to really dig deep into removing time waste from a build cycle.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=228)** The more you stick to these practices, the better your continuous delivery will work.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=233)** I work on one system that's pure continuous delivery.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=236)** Every piece of infrastructure build, all the tests, all the app code, even the monitoring configuration, it's all in source control, it has a build, it becomes an artifact, it's deployed across our environments, and it's tested at multiple points.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=251)** Developers can check in code, and minutes later, it's in production.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=255)** It's become routine.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=257)** All it takes is the discipline to say we don't do things manually or without tests.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=263)** - All right, that all sounds great.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/ci-cd-best-practices?u=76281980&t=264)** In our next video, we'll talk about the challenges you're going to face doing continuous delivery in the real world.

> [!info]- Semantic Content
>
> **Speakers:** - [man (10), - yeah (3), - all (2), - that (2), - but (1)
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** let (1), case. (1)
> **Best Practices:** the key is (1), you should always (1)
> **Env Vars:** stat (1)
> **Cross-References:** next video (1)
> **Warnings:** keep in mind (1)

#### Continuous delivery in real life
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=0)** - Theory is all well and good, but the real world is full of pointy haired bosses, and other perils.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=5)** - There are also technical hurdles that come up like long running tests or complicated build matrices.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=12)** - My best advice is to create a desire in your team for doing continuous delivery.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=16)** There's a famous quote that says, "If you want to teach people to build a ship, "don't overload them with a bunch of tasks, "but instead teach them to desire the endless sea."
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=25)** This is our goal in real life.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=26)** Have our team imagine a pipeline where they can go from CodeCommit to deployed in just a matter of minutes.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=32)** And they're going to see how much that can change their lives for the better.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=36)** - The real world isn't perfect.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=38)** So there's not a single perfect continuous delivery pipeline.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=41)** It's more of a changing process that looks different based on your specific needs.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=46)** - The most important thing to watch is total cycle time.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=49)** We sometimes have a myopic focus for optimizing one part of the build, but it's the overall rate of flow that matters.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=56)** - You'll need to balance the benefits of fast feedback with the speed of a single build.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=62)** If you run the integration tests on the dev desktop, on their branch before it's merged to master, on master on the build server, and then again, when it's been deployed to a real CI environment, that's four runs of the same test, is that good or bad?
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=77)** - Yeah, Ernest that's right.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=78)** I mean, well, it kind of depends on your situation.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=81)** If you're getting a lot of bugs in your builds and a lot of builds break, well, then stopping the build earlier and getting faster feedback to the developer, that results in the lowest time from the start of work to actually shipping your code.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=92)** - But if most builds are successful, then running the tests multiple times prior to the true validation run adds to build time and increases your overall cycle time.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=102)** - Yeah, you'll constantly need to experiment with the right mix that gives you the best overall cycle time.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=107)** In my office, our total cycle time is around five minutes with about four minutes for the build and all the testing with that, and then 45 seconds for deploys.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=115)** Now that may sound like crazy to you.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=116)** And when you hear us talk about total cycle time of just a few minutes, that may seem unobtainable in your current environment.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=122)** You'd probably just like to get it down to weeks or, you know, just a single week.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=126)** - Fear not, when I started at Bazaarvoice, we worked to get a product from a six week release cycle down to one week.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=133)** It took a while to do it, and that's where we ended up stopping.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=136)** We had continuous integration for the builds, but on the business side, support, marketing, and product, one week deployment cycle was as fast as they could handle.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=146)** And that's okay.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=147)** You don't have to go all the way down the continuous deployment rabbit hole.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=151)** - Well, we've noticed that there are three areas where continuous delivery efforts often fall short.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=157)** - [Ernest] The first problem we've seen is that builds are not reliable.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=160)** This is usually due to tests being flaky and causing builds to fail sporadically.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=166)** - Yeah, at one place we worked, the builds had some 4,000 tests and any number of them would fail and you'd have to consult a build engineer to find out if any of the really important test are the ones that failed.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=175)** I mean, that's a build that you cannot trust.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=179)** - Builds should ideally let it run in less than five minutes, and shouldn't sporadically fail.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=184)** - [James] If you start to notice more bugs, more performance problems, or other quality problems, it's time to pump the brakes and evaluate your testing strategies.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=192)** - Testing is at the heart of continuous delivery and you can't test just one part.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=198)** - It's important to evaluate testing across the total system.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=201)** - [Ernest] The last problem area that we've run into is long deploys.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=206)** Sure, the build takes a few minutes, but to deploy to all the servers can take an hour or more.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=211)** - Yeah, you know, this has a psychological effect where people begin to actually deploy less frequently, and then you run back into the old pattern of infrequent delivery of a larger and larger number of changes.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=222)** - We suggest asking questions as a team on how to unite configuration management and deployment to make sure your deploy time stay low.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=232)** - [James] They're going to be trade-offs that we just can't predict or enumerate here.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=235)** Use the principles behind continuous deployment to figure out what's the best thing to do when they arise.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=241)** - And finally, just do it.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=244)** Most organizations fail at continuous integration or deployment strictly for lack of trying.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=249)** It's not technical hurdles, it's personal discipline.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=253)** - In the end, most of the work is just taking responsibility for your build and making sure there's a test with each check-in.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=259)** - If you do it, you'll be successful.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=261)** If you don't, you won't.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=263)** All you need, as we say down in Texas, is a little bit of gumption.
>
> **[4:26](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=266)** - Some gumption.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=267)** Well, despite the challenges, I can say positively that when you get continuous delivery working in your organization, it changes everyone's life for the better.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=276)** - No uncertain deploy windows for operations.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=279)** - Yeah, and you get to see your code in customers' hands before going home each day.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=282)** I mean, that's incredibly rewarding in itself.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/continuous-delivery-in-real-life?u=76281980&t=285)** - I guess we can sum this up as, even though it's hard, CD in the real world is worth it.

> [!info]- Semantic Content
>
> **Speakers:** - yeah (5), - the (2), - [ernest] (2), - [james] (2), - theory (1)
> **CLI Commands:** find (1), make (1), cd (1)
> **Code Keywords:** break, (1), let (1), finally, (1)
> **Analogies:** imagine (1), just like (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=0)** - And that's our course on continuous delivery.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=3)** - Together, we defined continuous delivery, identified key practices, and built a working delivery pipeline for a Go application.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=11)** - Yeah, along the way we gave pointers and tips for each stage of your pipeline.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=14)** However, at this point you may be wondering, "Where do I go from here?"
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=18)** - Well, if you haven't watched some of the other DevOps courses, we recommend going to our DevOps fundamentals course.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=25)** - In that course, Ernest and I cover the whole span of DevOps at a high level and explained the main practice areas, one of which is continuous delivery.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=32)** - Going back to that course to make sure you're aligned with where delivery pipelines fit into the larger scope of DevOps would be a good step.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=40)** - Yeah, and if you're an assist admin or you're in operations, I would really recommend watching DevOps Fundamentals: Infrastructure Automation, also available here in the library.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=49)** That course is designed to fit with this one.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=50)** And if you're delivering infrastructure as code, that one's for you.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=54)** - [Ernest] Of course, we'd be remiss if we didn't mention the excellent book on "Continuous Delivery" by Jez Humble and David Farley.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=61)** Most of what we know about CD, we learned from that book.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=64)** - When I started working on building pipelines, I read that book and it really served as a roadmap for me.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=69)** - I can't say enough good things about that book.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=71)** It's the standard reference on continuous integration and deployment, and it covers the topic in much more detail than we can do here.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=79)** - [James] Also, the Google Testing Blog at testing.[googleblog.com](https://googleblog.com) is an excellent source of best practices.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=84)** - [Ernest] Besides mastering these techniques, they've recast the role of QA as being focused on engineering productivity and have a lot of great ideas that they've proven out in one of the world's largest development shops.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=97)** - All right, well that wraps it up.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=99)** Find us on [theagileadmin.com](https://theagileadmin.com) or on Twitter.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917/next-steps?u=76281980&t=102)** - Thanks for watching, and we hope to see you soon.

> [!info]- Semantic Content
>
> **Speakers:** - yeah (2), - [ernest] (2), - and (1), - together (1), - well (1)
> **CLI Commands:** make (1), cd (1), find (1)
> **URLs:** [googleblog.com](https://googleblog.com) (1), [theagileadmin.com](https://theagileadmin.com) (1)
> **Definitions:** is an  (1)


## Instructor

- [[Ernest Mueller]]
- [[James Wickett]]

## Path Context

### In [[DevOps Professional Certificate by PagerDuty and LinkedIn]]
← [[DevOps Foundations- Infrastructure as Code]] | **3 of 3**

### In [[Getting Started with DevOps]]
← [[Devops Foundations]] | **2 of 5** | [[DevOps Foundations- Infrastructure as Code]] →

### In [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]
← [[Software Development Life Cycle (SDLC)]] | **2 of 3** | [[Continuous Integration- Tools]] →

## Part of

- [[DevOps Professional Certificate by PagerDuty and LinkedIn]]

## Appears In

- [[DevOps Professional Certificate by PagerDuty and LinkedIn]]
- [[Getting Started with DevOps]]
- [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]

---

[↑ Back to top](#)