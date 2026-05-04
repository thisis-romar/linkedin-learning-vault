---
type: course
cssclasses:
  - lle-course
slug: devsecops-building-a-secure-continuous-delivery-pipeline
url: "https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline"
duration_minutes: 72
duration: 1h 12m
updated: 10/29/2018
learners: 15954
skills:
  - DevSecOps
  - Continuous Delivery (CD)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHRreYyiMwCMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669242306?e=2147483647&amp;v=beta&amp;t=gqBWb-8bD0XCnPS7WxUfT2TQ7Hdec59TcUVYUAY-7lA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Get Ahead in DevSecOps](../../Paths/Cybersecurity/Learning%20Paths/Get%20Ahead%20in%20DevSecOps.md)'
prev_courses:
  - '[DevSecOps- Automated Security Testing](DevSecOps-%20Automated%20Security%20Testing.md)'
next_courses:
  - '[Application Security in DevSecOps](Application%20Security%20in%20DevSecOps.md)'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":3,"total":5,"prev":"DevSecOps- Automated Security Testing","next":"Application Security in DevSecOps"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/devsecops
  - skill/continuous-delivery-cd
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/DevSecOps-%20Building%20a%20Secure%20Continuous%20Delivery%20Pipeline.md)

![DevSecOps: Building a Secure Continuous Delivery Pipeline](https://media.licdn.com/dms/image/v2/C4E0DAQHRreYyiMwCMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669242306?e=2147483647&amp;v=beta&amp;t=gqBWb-8bD0XCnPS7WxUfT2TQ7Hdec59TcUVYUAY-7lA)

# DevSecOps: Building a Secure Continuous Delivery Pipeline

> Over the past several years, information security has struggled to keep up with the fast-paced DevOps movement. DevSecOps—an extension of DevOps—aims to remedy this by embracing security as an essential part of DevOps culture. This course examines this fresh take on DevOps, providing an overview of the practices and tools that can help you implement security across the entirety of the continuous i

> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline) | 1h 12m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing your CI/CD pipeline](#securing-your-cicd-pipeline)
  - [What you should know](#what-you-should-know)
- [**1. The DevSecOps Toolchain**](#1-the-devsecops-toolchain) (4 videos)
  - [Traditional InfoSec is in crisis](#traditional-infosec-is-in-crisis)
  - [Introducing DevSecOps](#introducing-devsecops)
  - [The continuous delivery pipeline](#the-continuous-delivery-pipeline)
  - [Goals for a DevSecOps toolchain approach](#goals-for-a-devsecops-toolchain-approach)
- [**2. Development Tools**](#2-development-tools) (4 videos)
  - [Secure development practices](#secure-development-practices)
  - [Static code analysis](#static-code-analysis)
  - [Tool: Keeping secrets with git-secrets](#tool-keeping-secrets-with-git-secrets)
  - [Tool: Rapid Risk Assessment](#tool-rapid-risk-assessment)
- [**3. Inherit Tools**](#3-inherit-tools) (5 videos)
  - [What's in your app?](#whats-in-your-app)
  - [OWASP Dependency Check in practice](#owasp-dependency-check-in-practice)
  - [JavaScript security with Retire.js: Installation](#javascript-security-with-retirejs-installation)
  - [JavaScript security with Retire.js: Testing](#javascript-security-with-retirejs-testing)
  - [Options for software composition analysis](#options-for-software-composition-analysis)
- [**4. Build Tools**](#4-build-tools) (3 videos)
  - [Security testing in the build stage](#security-testing-in-the-build-stage)
  - [AppSec scanning with DAST tools](#appsec-scanning-with-dast-tools)
  - [Gauntlt in practice](#gauntlt-in-practice)
- [**5. Deploy Tools**](#5-deploy-tools) (3 videos)
  - [Security in the deploy phase](#security-in-the-deploy-phase)
  - [Rundeck for deployments](#rundeck-for-deployments)
  - [Tricks for making compliance happy](#tricks-for-making-compliance-happy)
- [**6. Operation Tools**](#6-operation-tools) (4 videos)
  - [Keeping security in operate](#keeping-security-in-operate)
  - [Modern application security](#modern-application-security)
  - [Signal Sciences in practice](#signal-sciences-in-practice)
  - [Cloud security monitoring](#cloud-security-monitoring)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing your CI/CD pipeline](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=0)** - [James] Do you want to continuously deliver software that's been tested for security vulnerabilities, is guaranteed to pass compliance audits, and is just overall more secure? If that sounds good to you, then this course is for you. Hi, I'm James Wickett, and I'm the Head of Research at Signal Sciences. I help software delivery teams defend web applications, [Microservices](../../Skills/Software%20Development/Microservices.md), and APIs in production from the real attacks they actually face. The possibility of providing more secure software at a way faster rate than ever really excites me. In this course, we survey the [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline through the lens of security and break it up into five key stages, Develop, Inherit, Build, Deploy, and Operate. In each of these stages, we'll look for practices and tools that can fit into a [DevSecOps](../../Skills/DevOps/DevSecOps.md) Toolchain approach and implement security across the entire breadth of the continuous delivery pipeline. Don't worry if you don't have much experience as a developer or you feel you aren't enough of a security expert. We'll show you what you need to know and give you the tools to get you started. So, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1)
> **Speakers:** - [james] (1)

#### [What you should know](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you'll want to have a basic understanding of how software is delivered in a [DevOps](../../Topics/DevOps.md) or a [DevSecOps](../../Skills/DevOps/DevSecOps.md) context. In this course, we use Docker, [Git](../../Skills/Software%20Development/Git.md), and work a lot on the command line. Since this course serves as an overview rather than a step-by-step walkthrough, you don't have to be a pro at this, however, some familiarity with these concepts will be helpful for you. It would also help to be familiar with [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) practices, but we'll cover the basics throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (1), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **CLI Commands:** docker (1), git (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. The DevSecOps Toolchain

[↑ Back to Table of Contents](#table-of-contents)

#### [Traditional InfoSec is in crisis](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=0)** - [Instructor] To say that security has had a rocky relationship with developers, operations and really anyone else is an understatement. To me, security's in crisis. I say this because security has lost its identity and often doesn't seem relevant to the day-to-day business of an organization. However, like many crisis situations, this can get better but before we dive into the remedy, [DevSecOps](../../Skills/DevOps/DevSecOps.md), let's explore why security is at an inflection point in many organizations. There are three major issues at play here. The first issue is the 100:10:1 problem. This represents the inequitable distribution of labor that has permeated IT for decades. For every 100 developers in an organization, there are roughly 10 operations staff and usually just one security person. Some organizations have a different ratio but you'll find this generally holds true. This means that the crisis has precipitated by an orders of magnitude staffing problem. Operations developers attempted to solve their part of this problem back in 2009 when [DevOps](../../Topics/DevOps.md) was originally coined and the movement was realized but now it's security's turn. Okay, the second issue is that security people are often seen as outsiders and not part of the teams delivering value. This is in part due to the 100:10:1 problem but it's also due to different priorities. Security follows more closely to PCI standards or security governance councils
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=93)** like ISC Squared CSSIP guidance rather than participate in their own company's goals. If this sounds familiar to you, I'd recommend checking out the book The Phoenix Project. The story follows a fictional company undergoing a DevOps transformation. In it, one of the main characters is the head of IT security. The story echoes the modern stereotype of security. Security isn't part of the team or the business and security just sort of does their own thing. The final issue is security's roots. It was born out of the Waterfall methodology for [Software Development](../../Topics/Software%20Development.md). Waterfall treats a project as a month's long series of linear tasks and security performs their tasks only at the very end. And of course, they always find issues which leads to a tense and really expensive situation where the delivery date has to get pushed to fix security bugs. To sum it all up, Steve Bellovin has a great quote in his book Thinking Security. Companies are spending a great deal on security but we read of massive computer-related attacks. Clearly something is wrong. The root of the problem is twofold: we're protecting the wrong things and we're hurting productivity in the process. This was written for security by one of our own and the problem is is that he's right. So, what do we do? Well, there's a better way and it's been rapidly adopted by companies of all sizes. This approach is called DevSecOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [DevOps](../../Topics/DevOps.md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** pci (1), isc (1), cssip (1)
> **Definitions:** is an  (1), means that (1), is called (1)
> **CLI Commands:** find (2)
> **Ports:** :10 (2)
> **Speakers:** - [instructor] (1)

#### [Introducing DevSecOps](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=0)** - [Instructor] Information security, as we know it, is struggling considerably to keep up with today's fast-paced [DevOps](../../Topics/DevOps.md) world. [DevSecOps](../../Skills/DevOps/DevSecOps.md) is the way to approach that problem differently, and bring security to the DevOps party. To start, let's lay out a definition of DevSecOps. DevSecOps is the extension of DevOps culture for the inclusion of security. This has two major implications. First, DevOps has seen a decade of growth and success in many software organizations. So to really understand DevSecOps, it's important to understand DevOps. If you're a student of [Software Development](../../Topics/Software%20Development.md), and haven't watched the DevOps Foundations courses here available in the library, then I recommend you do that. In those courses, Ernest Mueller and I break down DevOps and its main areas of practice. The second implication is that security must leave behind the old ways of thinking and embrace a new culture. This means that instead of functioning as a blocker to innovation, or being an outsider, security has to adapt to being an integral part of software delivery efforts throughout the entire process, rather than just at the very end. In fact, Sec is right there in the middle DevSecOps. It's an appropriate representation of security's new role. This new role functions as the role of enabler. Security helps the development and delivery pipeline move faster, and enables overall throughput to the system, but in a manner that's safer.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=95)** A longtime SySo friend recently asked me for advice on how do I deal with DevOps? And I told him one thing, never say no. Find creative ways to say yes. Security has to enable DevOps adoption and not impede it. Now, the realist in you might have the same question I've been dealing with, how do I do that? The primary way security changes is through the same path that operations forged when it moved into DevOps culture, by providing automation and instrumentation as much as possible to the development team. Security can really take a page out of the DevOps playbook and automate compliance standards and audit tasks. Many of the code scanners, [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) tools, and security tools can be automated. Throughout the course, we'll show you how to do this across the entire pipeline. Likewise, new tooling around monitoring and instrumentation can be added to a software delivery pipeline, especially in some of the often forgotten stages. As we go throughout the course, I'll show you examples of how to do just this. In fact, the major goal of the course is to evaluate tools for a DevSecOps tool chain, which can be used inside a [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (11), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (6), [Software Development](../../Topics/Software%20Development.md) (1), [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [The continuous delivery pipeline](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=0)** - [Instructor] Before we jump straight in to adding security into our pipeline, let's review the pipeline stages. You'll hear people refer to this also as CI, [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md), or CD, [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), or sometimes jammed altogether as CICD pipeline. These can all mean separate things, but we're conflating them all here, just as you'll probably experience in the industry. If you're interested in a deeper look into the differences of these terms, as well as a deeper dive into the topics of continuous delivery and continuous integration, then I suggest checking out the course at [DevOps](../../Topics/DevOps.md) Foundations: Continuous Delivery Continuous Integration. It's available right here in the library. In that course Ernest Mueller and I break down the topic with lots of hands-on examples. For this course, we're going to split up the pipeline into five stages. At your organization, a couple of these stages might be lumped into a single stage. But for security tooling, it's particularly helpful to analyze these five stages separately. These stages are develop, inherit, build, deploy and operate. Let's take a moment to define each of these. The develop stage is where the design and development of an application and its features happens. This includes all the development practices like [Version Control](../../Skills/Web%20Development/Version%20Control.md), sprint planning and [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md). Inherit is an often overlooked stage because it's the most invisible. It's the stage where software dependencies get bundled and inherited in our own code and upstream.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=96)** The build stage is where the CI build system runs all the build steps, and does acceptance testing. In this stage, all previous testing done on developer machines is verified here. It's the source of truth, spelling out what tests have or haven't been performed. The deploy stage takes the artifact from the build stage and moves our software from testing to where customers are able to use it for the first time. Last, the operate stage is where the application is up and running in production. Some might call this the runtime state of the application. And this is the place where users interact with or consume the application. Throughout each of these five stages, we'll take a look at security considerations and tools that can be implemented in our pipeline. Once we put all of these tools together, we will have our toolchain. But before we get into the first stage of our pipeline, let's talk briefly about toolchains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (3), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (3), [DevOps](../../Topics/DevOps.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
> **CLI Commands:** cd (1)
> **Env Vars:** cicd (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Goals for a DevSecOps toolchain approach](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=0)** - [Instructor] This course is meant to help you build out a security toolchain that can work in a CI/CD pipeline. We dealt this as a [DevSecOps](../../Skills/DevOps/DevSecOps.md) Toolchain approach. Now one quick note. There's an issue that you're going to run into. The issue is that no two organizations are likely to have to have the same CI/CD maturity. And virtually no organization is doing anything, much less CI/CD, the same way. This means that as we talk through each stage of the pipeline, you'll need to evaluate whether the tools we're discussing would fit in to your specific pipeline. Whatever toolchain you end up using within your organization, it's going to be unique. That's okay, and really, that's to be expected. It's also important to note that in some organizations, there is no pipeline. And the security team is leading the charge for CI/CD. And that's okay too. You don't need a pipeline already established to use this course, but if that's your situation, try to find discrete steps and tools that you can fit together as you assemble the pipeline. And check out that [DevOps](../../Topics/DevOps.md) Foundation CI/CD course I mentioned earlier. So, what are the goals as we evaluate building a DevSecOps toolchain? One goal to keep in mind is that a toolchain is a chain made up of individual tools. You decide what tools you want in your toolchain, then you build it, modify it, and live with it. Feel free to adjust as you go, it's your toolchain. The real power of using a software toolchain is being able to change and meet demands at a moment's notice.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=93)** Sometimes, you pick tools based on how they function together, rather than just picking the best of class. With commercial tools in particular, you might be more apt to using a companion tool in a subsequent stage. And, that's totally normal. Also, if you're unhappy with one tool, it's okay to just find something else and replace it, or augment it. On the topic of open source and commercial tools, it's important to know that we'll be referring to tools in both categories. Some organizations only use open source, some only use commercial. Many use a combination of both. I've tried to treat this course as a chance to show tools in both categories, and give recommendations for the tools that I like to use. In addition to making recommendations, in this course we'll get hands-on with a few tools. Since this course spans the entire CI/CD pipeline, we only get hands on with one or two tools per pipeline stage. Most will be open source, but some will be commercial. Now, fair warning, I work at Signal Sciences, which is a commercial security company. And we provide a tool in the operate stage. For that section in particular, I'll give a full disclaimer and be sure to mention other options. But we'll get hands on with that tool, because I think it's the best option. Of course, I wouldn't work there if I didn't think so. Well, now let's move into the first stage of the CI/CD pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [DevOps](../../Topics/DevOps.md) (1)
> **CLI Commands:** cd (7), find (2), apt (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** note that (1), keep in mind (1), warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. Development Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure development practices](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=0)** - [Instructor] Let's talk secure development. This is a really big topic as the develop stage encapsulates all the efforts from design to code commit. In some organizations and [products](../../Skills/Software%20Development/Microsoft%20Products.md), this stage might consist of hundreds of developers working with a multitude of tools to complete this stage. For others, it might just be one or two people. For our purposes, we're going to look at three key security practices in this stage of the pipeline. They are [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md), development standards, and static code analysis. We'll discuss these now and then we'll look at some tooling to address each one of these in following videos. First up is threat modeling. Threat modeling models an application or system and looks for vulnerabilities. This is often done by taking a data flow diagram and then mapping the elements using Stride. Stride is a pneumonic developed by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). In the process of threat modeling, you might ask, can this element or flow be spoofed? Could it be tampered? Are we open to repudiation, which is where a user denies their actions, such as a purchase or other transaction? Is there a chance of information disclosure or a data leak? Could we be under a denial of service scenario? Or can a user elevate privileges in this process? Threat modeling can be an excellent practice for developers. But it's a slow process that works best when the underlying model of the system doesn't change much. This is definitely a problem in the modern landscape of [Agile Software Development](../../Skills/DevOps/Agile%20Software%20Development.md) where everything changes all the time. To address this, there's been a rise in threat modeling that works with [agile](../../Skills/DevOps/Agile%20Development.md) development.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=93)** There are a few approaches I recommend, the [OWASP](../../Skills/Cybersecurity/OWASP.md) App Threat Modeling Cheat Sheet, the OWASP App Sec Verification Standard, and the Mozilla Rapid Risk Assessment. To see this in action, we'll take a deeper look at the Mozilla Rapid Risk Assessment in a later video. For now, let's move on to our second secure development practice, development standards. Many development organizations have team coding standards. For example, the standards might look something like, 80% of the code will have unit tests. Or a particular list of functions are banned. At work, we enforce limiting and formatting, as well, so that everyone on the team is writing code that is readable and understandable by everyone else. Security can fit in here too by specifying tools that look for secrets that have been accidentally put into the code. Two great options are [Git](../../Skills/Software%20Development/Git.md)-secrets and git-hound. We'll look at how to use git-secrets in an upcoming video. One final key practice we haven't talked about yet is static code analysis. Let's dive into that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (7), [Git](../../Skills/Software%20Development/Git.md) (3), [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** git (3)
> **Env Vars:** owasp (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Static code analysis](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=0)** - [Instructor] The last secure development practice is static code analysis. This is where you analyze code for vulnerabilities. This is commonly done using a [Static Application Security Testing](Static%20Application%20Security%20Testing.md) tool, or SAST. The tools are able to do testing without actually running the code, which is why it's called static code analysis. SAST tools use data flow models, [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) graphs, and taint analysis to determine whether there's a vulnerability in the code or not. There are a lot of options for static code analysis, but your choice of tool generally depends on the languages you're using. If you're looking for an open-source option for Ruby, there's be Brakeman. For [PHP](../../Skills/Software%20Development/PHP.md), there's Phan. For [Java](../../Skills/Software%20Development/Java.md) Web Apps, there's Find Security Bugs. Node has NodeJsScan. And Golang or Go has GoSec. I've included this resource in the course handout to help you find the right tool for your usage. There are also commercial options which span multiple languages and are more Enterprise friendly. A few to look at ar Veracode, Checkmarx, and Synopsis. But depending on your language, you will need to find out which one is best suited for your environment. Some of the tools in both open-source and commercial are able to hook into the developer's IDE. This is great and I expect to see more options moving to this approach in the future. Depending on the size of the code base and how tight the scan is, these tools sometimes take a long time. I find it sometimes works better to run these on a nightly cadence
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=93)** rather than on every build or run a fast scan on every build and a deep scan on a nightly cadence. The problem with all of these tools is that you're going to get false positives, which means notices of issues or vulnerabilities that aren't really real. This means you'll need to tune the tool and review the results before dropping them into your tool chain. I recommend that people find the tool they want to use and tune it to be as fast and loose as possible and to then over time tighten it up. There isn't an easy button for this part of the pipeline, but working together with developers is the best way to start. Also, if you're doing greenfield development, implementing a SAST option into your pipeline early on will pay off later. Most of the pain felt when dealing with SAST is taking a code base that is several years old and running a SAST tool for the very first time. If you can instead run when the code base is just starting, you will find a much easier time. In the next video, let's take a look at other tool options that we can add into our tool chain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1), [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **CLI Commands:** find (6), ruby (1), php (1), node (1)
> **Env Vars:** sast (5), php (1), ide (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Tool: Keeping secrets with git-secrets](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=0)** - [Instructor] One of the most common vectors for attackers to gain access to systems, are misconfigurations. One of these misconfigurations is credential leakage. Did a Junior Developer put the password in the application, or did they put the AWS Access Keys in [Version Control](../../Skills/Web%20Development/Version%20Control.md)? You know, for testing? Well, this sort of thing happens, but we can check for it with ease in a CICD pipeline. To do this, we'll use [Git](../../Skills/Software%20Development/Git.md) Secrets. First let's fire up a browser, and head over to Git Secrets page at [Github.com/awslabs/git-secrets](https://Github.com/awslabs/git-secrets) Down in the read-me, we can see some example usage, as well as how to install it for [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Mac, and [Windows](../../Glossary/Service/Windows.md). I've already installed this on my machine, but if you want to follow along, follow the installation instructions found here. You will also need Git installed. So now we need something to test. I wrote a Small web application in golang for this CICD course that Ernice Muller and I recorded. Let's run Git Secrets on it. First we need to clone the repo so we can work with the local copy. So here I am in a terminal, and I'm typing git clone https colon, slash, slash [github.com](https://github.com) slash wickett slash [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) dash cloud dash generator dot git. Okay great. Now I'm changing directories into the repo. Next I need to set up the repository
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=95)** with hooks for git secrets and tell it that I specifically want it to check for AWS key patterns. I do this by typing git secrets dash dash install and then git secrets dash dash register dash AWS. Okay, we're ready to go. Now we just need something to test. Let me clear my screen here. Now let's open up the read-me with vim. And if I scroll to the bottom you'll notice some sample keys. Git secrets knows to ignore these because they are well known dummy keys. However if I modified them just a bit, git secrets is going to trigger an error because it'll think it's a real key at that point. Okay I just changed it a little bit, now let's save it and run git secrets. I'll simply type git secrets dash dash scan. And now I get an error. It found what it thinks is a key, and shows the line where it's found the issue. Not only does this emit an error message, but it also exits with a non zero exit code. We can see that by typing echo dollar question mark. Which returns the exit code of the last process. Because of this, git secrets is perfect for [Jenkins](../../Skills/DevOps/Jenkins.md), or a CI system as most of those systems will stop a build on a non zero exit code. Okay, let's scrap all this and remove all these keys from our read-me. I'm opening back up the read-me with vim, and just removing the bottom lines there. Now that the keys are zapped, Let's check it all again. Okay so now I'm back to the command line, and I'm just typing git secrets dash dash scan again.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=191)** Okay great that worked, we're all set. Now there's one thing I want to show you. It's also very common to commit some keys to version control, and then realizing the problem, remove them, just like we did. But does this really remove the keys? No it doesn't, that's the purpose of version control. To let you go back in time to any state of the repo. So you'll have to remove the keys from the history as well. The good news is that we can use git secrets to check my git history for any credentials hanging around. To do this I'll type git secrets dash dash scan dash history. It found some real looking AWS keys that I committed to the repo a few weeks ago. Even though I removed them from the repo, they're still there in my version control history. Just waiting to be found and used by attackers. This has been a quick tour of git secrets. It's pretty well documented, pretty popular, and it fits nicely in a CIDC pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (20), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** git (20), aws (4)
> **Env Vars:** aws (4), cicd (2), cidc (1)
> **Tools:** github (2), vim (2), terminal (1), command line (1)
> **Prerequisites:** install (2), set up (1)
> **URLs:** [github.com](https://github.com) (2)
> **Exercise Files:** clone the repo (1)
> **Definitions:** is a  (1)

#### [Tool: Rapid Risk Assessment](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=0)** - [Instructor] [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) is a great practice, and I've had success with it in the past. But generally threat modeling works well with established software or services. So what do you do when the app or service is under active development? What if you're making changes weekly, or daily? Enter Rapid Risk Assessment. Mozilla has a creative commons license process, called Rapid Risk Assessment. Let's open up the browser and head over to, infosec.[mozilla.org/guidelines/risk/rapid_risk_assessment](https://mozilla.org/guidelines/risk/rapid_risk_assessment).
>
> **[0:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=36)** This is a great tool because it's quick. You'll keep the total assessment to about 30 minutes. It's also high-level. The goal is to provide a fast assessment, but as you repeat the process, you can build out a full threat model. It's also easy to update. It serves as a guide that's fluid and moves with the practice of [Software Development](../../Topics/Software%20Development.md). Really, this could probably be dubbed, [agile](../../Skills/DevOps/Agile%20Development.md) threat modeling and not be too far off the mark. The goal here is within about 30 minutes, to answer questions like is there anything obvious we should really look at fixing, right now? Or, where should we focus our efforts to significantly increase the security of the service? While we can't walkthrough the whole process here, you can find instructions on running the Rapid Risk Assessment under the subhead, Guided process for risk analysts: Running your RRA in about 30 minutes. Let's take a look at the template to help guide you through the assessment. I'm scrolling down to, create a copy of the template. When I click that it opens up a template for an RRA in [Google](../../Glossary/Service/Google.md) Docs. It's written as if you were a Mozilla employee, so you might want to adjust that. But notice that there's some [Metadata](../../Skills/Web%20Development/Metadata.md) about the service up at the top. Next we have the data dictionary. So all the stakeholders can identify what we are protecting here. The first time you do this, you may need a little more time. But after a few times through, you should be able to spend just five minutes max here. Then the threat scenario sections is where you can spend five to 10 minutes discussing impact around attack scenarios.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=130)** I love that the scenarios hinge around the long-standing security triad of confidentiality, integrity and availability. Let's move back to the guidance and see what impact levels look like. For example, let's look at reputation issues. We ask the questions, do we get in the mainstream news? If so that's maximum impact. Do we get in the technical news? That's high impact. Do we receive emails, bugs twitter messages, et cetera? Now that's medium impact or maybe not much at all, well that would be low impact. Last we wrap up the Rapid Risk Assessment with recommendations. There's some great steps and ideas here on how to wrap up the assessment. Remember, the whole assessment should take about 30 minutes. If you can keep the meetings brief, then people will be okay with doing them every sprint or every other sprint. It allows the teams to care about security and prioritize the right level of effort. It also helps build out a more complete threat model, while the service is being developed. This process works great for agile teams and while it isn't a software tool, this is definitely something you'll want to add to your [DevSecOps](../../Skills/DevOps/DevSecOps.md) tool shed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (3), [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Exercise Files:** template (3)
> **Env Vars:** rra (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** rapid_risk_assessment (1)
> **URLs:** [mozilla.org](https://mozilla.org) (1)
> **Analogies:** for example (1)


### 3. Inherit Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [What's in your app?](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=0)** - [Narrator] The inherit stage is a tricky one as it's often not a stage of a CI/CD pipeline that many people really talk about. I refer to this as the invisible phase because this is where software dependencies get bundled into the application and inherited into our code. This is a real problem. In the 2018 [DevSecOps](../../Skills/DevOps/DevSecOps.md) Community Survey, 31% of respondents suspect or have verified a breach related to an open source component in the last 12 months. Many headline grabbing breaches within the last three years are related because many of them were due to inherited components. Outdated libraries, dependencies, frameworks, or even OS packages are often to blame. Sometimes it's easy to think of my app as just a couple hundred lines of code or LOC, it's simple right? But when we stack up all the libraries needed to run our application, add in the frameworks, and all of the server components, we arrive at our real LOC number, this is all the code that makes your application work. One way to understand exactly what your app is made of is to publish a BOM or a bill of materials. The BOM is a record of all the components, libraries, and dependencies you have. That same DevSecOps Community Survey mentioned earlier also found that only 38% of respondents had a software bill of materials which as a problem. This is just common sense. If a library is found to be vulnerable, you need to know if you're using it.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=93)** By publishing a BOM, you have a quick reference for what libraries and versions are shipping with a particular application. At Signal Sciences, we are a go dev shop and we have a [Jenkins](../../Skills/DevOps/Jenkins.md) job that runs a daily BOM and reports back on the libraries we are rendering and how out of date each one is. This gets pumped into our [Slack](../../Skills/Software%20Development/Slack.md) channel for the engineering team to keep an eye on and it keeps creates a positive feedback loop. Now I know that not everyone is a go shop and these tools are very language specific. Some languages like Ruby have this as part of the culture with bundler and bundler audit, but in many languages this is less common. The goal here is to find a tool that you can put into your CI/CD pipeline that checks for dependencies that make you vulnerable. The tools themselves need to be up to date and have access to current Vul [Databases](../../Skills/Software%20Development/Databases.md) with the most recent Common Vulnerability Exposures or CVE's in them. Instead of doing goling examples, I'd like to look at two tools for other languages in the upcoming videos. First, we'll look at a popular job option, [OWASP](../../Skills/Cybersecurity/OWASP.md) Dependency Check. And next we'll look at a [JavaScript](../../Skills/Software%20Development/JavaScript.md) option called Retire.js. Both run in CI environments easily, so let's take them for a spin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **Env Vars:** bom (4), loc (2), cve (1), owasp (1)
> **CLI Commands:** cd (2), ruby (1), find (1), make (1)
> **Definitions:** is a  (4)
> **File Paths:** retire.js (1)
> **Cross-References:** in the last (1)
> **Tools:** slack (1)
> **Speakers:** - [narrator] (1)

#### [OWASP Dependency Check in practice](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=0)** - [Instructor] Let's take a look at [OWASP](../../Skills/Cybersecurity/OWASP.md) Dependency Check. This is a software composition analysis tool. It determines what an application is composed of, not just the code you wrote, but all the libraries and dependencies that make up the application. The tool is evidence based, which means it evaluates software and looks at dependencies, and evaluates the file name, manifest, project object model, package names, and more. In OWASP Dependency Check this is all cataloged as evidence. Evidence found by the tool is then grouped into collections, by vendor, product, and version. Next OWASP Dependency Check compares what it finds to the National Vulnerability Database, which is maintained by [nist.gov](https://nist.gov). It uses a Lucene index and fuzzy matching to determine if the evidence it found matches against the NVD. There are a lot of options to get started with OWASP Dependency Check, but we're going to use it on the command line to get a feel for how it works. To install the command line or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) plugin, there are instructions for any operating system at jeremylong.[gethub.io/dependencycheck](https://gethub.io/dependencycheck)/, dependency-check-cli/index.[HTML](../../Skills/Web%20Development/HTML.md). When you install and run it for the first time, it takes a little while for it to download a local copy of the NVD. However, subsequent runs are much faster, as it only has to download updates to stay current. I already have it installed here, so let's get a [Java](../../Skills/Software%20Development/Java.md) app and use OWASP Dependency Check, to evaluate it.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=94)** I'm just going to download an old version of an Apache http client from a Maven Artifact Repository, to use as a sample app. In the browser, I'm going to head over to the link shown at the bottom of your screen. When I'm here, I'm just going to download the JAR file. Okay, got it. Now, let's run that JAR file through the OWASP Dependency Check. I'm moving over to the command line. Now let's run that through the OWASP Dependency Check. And I'm already in the Downloads directory. To run Dependency Check, I'm typing dependency check --project and I have to give it a project name here. Here I'm just going to call it demo, but you can call it whatever you want. Next I'm typing --scan and giving it the path to the http client, the JAR file that we just downloaded. And lastly, I need to tell Dependency Check what to do with the output. So I'm telling it to print it out to dep-check-out.html. Okay, let's go ahead and run this. All right, it looks like it finished its analysis. Now let's open up the html it generated in our browser. It found two CVs, one from 2011 and one from 2014. And it tells us how much evidence it found to support the report here. Because this uses fuzzy matching, there are sometimes false positives and tuning is required. You can choose to suppress certain findings right here and it'll give you some config to put with your project.
>
> **[3:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=190)** Once you tune it for one application, you can then set it up in [Jenkins](../../Skills/DevOps/Jenkins.md) to scan on each build and get very accurate results. There is much more to this tool, but this gives you the basics. It has an extensive list of integrations and plugins, so it's worth your time to do the initial setup and get this into your pipeline. In our next video, let's turn to the front end and work with a tool that can help you reign in all the [JavaScript](../../Skills/Software%20Development/JavaScript.md) dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (7), [HTML](../../Skills/Web%20Development/HTML.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** owasp (7), jar (3), nvd (2), cli (1)
> **Tools:** command line (3)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** dependency-check-cli/index.html (1), dep-check-out.html (1)
> **CLI Commands:** make (1), apache (1)
> **URLs:** [nist.gov](https://nist.gov) (1), [gethub.io](https://gethub.io) (1)
> **Cross-References:** next video (1)

#### [JavaScript security with Retire.js: Installation](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=0)** - [Instructor] Now let's look at software composition analysis and inheritance security for [JavaScript](../../Skills/Software%20Development/JavaScript.md). This means that if your using a vulnerable version of jQuery, then our tool will throw an error code that will stop the [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline. The tool we'll be using is Retire.js and it's made just for this purpose. Let's use Retire.js in a Docker container. We use Docker here, because it's a portable way to integrate [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) for CI systems like [Jenkins](../../Skills/DevOps/Jenkins.md). Let's head over to the command line. I have a forked repo of a Dockerized version of Retire.js. I'm going to clone this by typing [Git](../../Skills/Software%20Development/Git.md) space clone and the project repo URL, [github.com/wickett/docker-retire.js.git](https://github.com/wickett/docker-retire.js.git).
>
> **[0:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=48)** Let's move into the repo, and then type cat Dockerfile. You can see that we're using a Node container, and the most current version of Retire.js. This sets up the entry point to the container as Retire, so when we call it, we can just pass arguments to it, and they'll be handled by Retire.js inside the container. Okay, great, now we just need to build the container. I'm going to clean my screen here. I'll type docker space build space . and then another space and a -t=retire. This tags it with the retire tag. Great, this did a Docker build, and it tagged it as retire, so I can reuse that container. Now let's run it against a local code base I already have on my machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **CLI Commands:** docker (5), git (2), cat (1), node (1)
> **File Paths:** retire.js (5), github.com/wickett/docker-retire.js (1)
> **Tools:** command line (1), github (1)
> **Code Identifiers:** jquery (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** url (1)
> **Definitions:** means that (1)

#### [JavaScript security with Retire.js: Testing](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=1)** - For testing, I'm just going to use the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) cloud generator app that we used in an earlier movie, but really, any project with [JavaScript](../../Skills/Software%20Development/JavaScript.md) in it will do. Okay, let me move into the directory. Let's run retire against the app by typing docker space run, and I'm giving it that dash dash rm flag to let it know to remove the container when it's done, and then I'm also mounting a volume, the present working directory using dollar pwd colon slash app, so I'm giving it the app directory inside the container. And then I'm telling it to call the retire container, and I'm asking it to be verbose when it does it. This runs the container we just made, and mounts the local path, the present working directory, to the container, under the app directory. Then it runs retire dot js inside of it. I passed the dash v for verbosity. Okay, great, it ran and it didn't find any problems. We can tell by running echo dollar question mark, which gives the exit status, zero is good here. Okay, let me clear my screen. Let's say, one day I get a wild idea to move to jquery one dot four dot zero, so I download that to my application's static directory. To simulate that, I'll type wget, https, then code dot jquery dot com slash jquery dash one dot four dot min dot js. Okay, once I have that, I'm going to move it into my static directory where I keep all my JavaScript. Unbeknownst to me, a developer who's working with the application, this older version of jquery
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=94)** has several vulnerabilities inside of it. And I shouldn't use it. Well once retired dot js sees it, it'll throw an error. Let's run our check again, and this time, it should error out. Okay, great, we see the exit code. And most build systems, or CI build systems, are set up to fail whenever they see a non zero exit code. Because of this, retire dot js is perfect for your CI-CD pipeline. And it fits nicely into a CI buildsystem like [Jenkins](../../Skills/DevOps/Jenkins.md) or Travis. But that's not all. In the browser, there are retire dot js integrations for Chrome and Firefox, as well as plug-ins for things Zap and Burp, two popular dynamic scanners. Okay, this closes out our section on retire dot js. And I hope you found this fun and useful. Definitely check out this really neat open source project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **CLI Commands:** docker (1), rm (1), find (1), wget (1), cd (1)
> **Tools:** firefox (1)
> **Prerequisites:** set up (1)
> **Speakers:** - for (1)

#### [Options for software composition analysis](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=0)** - [Instructor] Okay, we've covered two tools so far, [OWASP](../../Skills/Cybersecurity/OWASP.md) dependency check and Retire.js. Both of these are great tools, but there are several others that are worth considering. If you're doing Ruby development, then bundler-audit's worth taking a look. It checks for vulnerable gems and insecure gem sources. It also allows overrides if your using a gem that you need, and have worked around the vulnerability. What's great is, that it doesn't require a network connection, which means that it's really fast to run. Another open source option to look at is [PHP](../../Skills/Software%20Development/PHP.md) Security Checker. Like the others, it looks for common libraries that you're using, but shouldn't be. Of course we should mention, there are a lot of commercial option. A few to consider are Sonatype, Black Duck, Veracode, and WhiteSource. I really do like Sonatype Nexus. They have a ton of data from running the central repository for Maven for all of these years. This experience parlays into their Nexus pro offering. So far, we've been mostly focusing on app level dependencies, but it's very common to deliver apps in containers these days. This means you need a tool to scan the container, and any upstream containers for OS and framework inheritance vulnerabilities. One open source option is Clair. It came from the Core OS team, and it's built for the purpose of checking what is getting built into the container. Specifically looking for any upstream containers with vulnerabilities. There are two commercial Docker options I recommend to folks looking into this space, Aqua, and Twistlock. Both of these commercial offerings are more
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=93)** for doing full container life cycle security. So they might be overweight for what you're trying to do. However, you should give them a look if you're all in on containers, [Kubernetes](../../Skills/DevOps/Kubernetes.md), or serverless. In this section, we covered a few other option for tools to find out what you're software is really made of. And the hope is, that this gives you some places to discover new options for tooling to test for inheritance vulnerabilities by doing software composition analysis in your [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **CLI Commands:** ruby (1), php (1), docker (1), find (1)
> **Env Vars:** owasp (1), php (1)
> **File Paths:** retire.js (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


### 4. Build Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Security testing in the build stage](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=0)** - [Man] The build stage is what most developers and operations folks think of when they think of [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md). This is where all the previous stages we talked about gets verified. But also additional acceptance testing happens. In this stage, the build is run, tested, and artifacts get prepared for being deployed, which is our next phase. Now, some developers and security engineers may have a different idea of what this stage entails. If you come from a development language where binaries are compiled or built, you may be thinking of compilers, linkers, and the like. But here, build is more than just compiled languages. This stage applies to any software that is getting prepared for the deploy stage. Yes, this includes combined binaries, but also zipped-up artifacts, images, [HTML](../../Skills/Web%20Development/HTML.md), [JavaScript](../../Skills/Software%20Development/JavaScript.md), infrastructure code, and even your cloud config. If you're struggling with this concept, check out the [DevOps](../../Topics/DevOps.md) Foundations: Continuous Integration/[Continuous Delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) course here in the library where we dive into the topic in much more depth. Let's move on to the security considerations for the build stage. First, let's talk outside-in [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md). This is testing that interacts with the software from the outside. In other words, you test from the attacker point of view. For example, instead of looking at code for vulnerable libraries, in this type of testing, you automate actions that a malicious user would take against your software. We borrowed this approach from the development testing methodology called BDD or behavior-driven development. In BDD, you emulate user interactions with your software. But we now look for ways to emulate actions
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=94)** of attackers with your software. One category of tools that we put into the build phase for this purpose is [Dynamic Application Security Testing](Dynamic%20Application%20Security%20Testing.md) or DAST tools. These are commercial and open source scanners that try to attack your applications. Okay, next up, infrastructure testing. Does the server have the right SSH config? Does the firewall or security group have only the desired ports open? You can ask questions like these and you can test for this in this phase. This moves on to our next consideration: compliance testing. What if you can check for adherence to hardening guidelines on every single build or make sure that root login is always disabled? Since infrastructure is code, we can check for these types of things much earlier in the delivery pipeline. As you approach this stage of the pipeline, there are three questions I suggest people to ask: Have I validated the previous two phases of testing in a secure build environment? This is a trust but verify setting. You want audible logs of all the unit tests, linting, software composition analysis, and all the previous tests that ran locally on the developer's machine. Next question: Am I testing for security issues that are easy to catch where I can use automation of tools? We're shifting left as much testing as we can. Automation is great for automating testing for things like root privileges or SSH settings or other hardening benchmark standards. Moving this testing earlier alleviates security resource constraints later on. And lastly, am I arming my pipeline with attack tools
>
> **[3:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=189)** to test my application? If real attackers and adversaries are running attack tools against you in production, and they are, then shouldn't you be running them yourself? Of course you should, and in the next video, we show you how to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1)
> **Env Vars:** bdd (2), ssh (2), html (1), dast (1)
> **CLI Commands:** ssh (2), make (1)
> **Cross-References:** we talked about (1), earlier in (1), in the next (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [man] (1)

#### [AppSec scanning with DAST tools](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=0)** - [Application Security](../../Skills/Cybersecurity/Application%20Security.md) is a class of security problems that has withstood the test of time. Over 15 years ago the open [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) project known as [OWASP](../../Skills/Cybersecurity/OWASP.md) was started to address this space. However even today application security is still going strong. One example of application security is cross-site scripting. Normally shortened to XXS, OWASP provides this definition. Cross-Site Scripting attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites. Now that is just one form of application security. Every few years OWASP releases the OWASP top 10 which catalog the top 10 risks that the organization sees out in the wild. Check out [owasp.org](https://owasp.org) for more info. Many of these are application security vulnerabilities and they hinge on injection of user data to take control of the app or the user's browser. So in the case of cross-site scripting, you can inject a bit of [JavaScript](../../Skills/Software%20Development/JavaScript.md) like this one here. It gets access to the user's session token and admits it to an evil site that only the attacker controls. If you're an attacker this is great because you can assume the user's session without knowing the username or password. We could work our way through the whole list of OWASP top 10 but instead lets talk about how to test for these types of issues. We have already talked about two major approaches for APSEC defense. Software application security testing SAST and software composition analysis, sometimes abbreviated SCA.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=97)** But there is also one other way to approach detecting application security vulnerabilities, and that is through [Dynamic Application Security Testing](Dynamic%20Application%20Security%20Testing.md) tools or DAST. DAST tools are also the same tool that attackers are using against your site. Some are open source, some are commercial and paid for. There are a few tools that I really like to use and I think are on most peoples short list when they talk about DAST tools. I won't go through an exhaustive list here, but I am going to mention a few per category. First lets talk General-Purpose Scanners. They do all sorts of things from cross-site scripting to command execution and they even have fingerprinting and spidering built in. Open source options like Arachni, [Nikto](../../Glossary/Tool/Nikto.md), and Zap are great. Zap is the most fully featured, it has roots at Mozilla and OWASP and has an API that makes it possible to integrate into CI systems. A commercial, though low cost, favorite of mini is Burp. There's a free version that has rate limiting, but the license won't set you back too much. It has an API and can be scripted as well, out of all the tools I recommend for DAST I would say Burp is the most well loved and full featured. Next sequel injection shortened as SQLi, is a vector of attack where attackers try to pass valid sequel through a web application or API and get a response from the database. There's only one tool to recommend here that's the Swiss Army knife of SQLi, [SQLmap](../../Glossary/Tool/SQLmap.md). Its open source, constantly updated, and really powerful. Last there are two SSL checkers we should throw in here,
>
> **[3:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=194)** SSL or TLS is how we encrypt http, this is the s in https. The major headline grabbing TLS vulnerability from recent history is Heartbleed and it makes sense to add a SSL scanner to the tool chain mix. There are two I recommend, SSLScan and SSLyze, with SSLyze being the one that I run the most. Okay join us in the next video were we automate one of these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (8), [OWASP](../../Skills/Cybersecurity/OWASP.md) (7), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Nikto](../../Glossary/Tool/Nikto.md) (1)
> **Env Vars:** owasp (6), dast (4), api (3), ssl (3), tls (2)
> **Definitions:** is a  (2), known as (1)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - application (1)

#### [Gauntlt in practice](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=0)** - [Instructor] DAST tools are great. But they can be slow and clunky for fitting into CICD pipeline. I'd like to introduce an open source tool that I helped create to address the shortcomings of DAST tools. The tool I'm talking about is Gauntlt. I've got a whole course on this in the library called [DevSecOps- Automated Security Testing](DevSecOps-%20Automated%20Security%20Testing.md). This video will just be a quick look at the tool, but if you want a full hands-on experience, be sure to check out that other course. Okay, let's head over to the projects home over at [gauntlt.org](https://gauntlt.org). Gauntlt provides hooks to a variety of security tools and puts them within reach of security, development and operations teams so that they can collaborate to build rugged software. Gauntlt works by wrapping attack tools and checking their output using the plain text files that end in the .attack extension. Let's use Gauntlt to run the popular DAST tool, Arachni, to do a quick scan for cross site scripting. I'm going over to the command line now. First, let's download the docker image which is on docker hub. In it, there's Gauntlt, Arachni and a few other tools. I'm just typing, docker pull gauntlt/gauntlt. Okay, great. Now that I have the container, let's look at an attack file. I'm opening in my ID, in this case vim, to look at xss.attack. The same file is available in the exercise files. First, we describe what we are testing. So in this case it's our feature. We're looking for cross site scripting, using Arachni and we're going to go against [example.com](https://example.com).
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=95)** Next, we have some background steps where we make sure Arachni is installed and we setup what URL we want to test. This is how Gauntlt sets up variables for scenarios to use later on. Next, we see our scenario. Here we give it a description of, Do a quick check for cross site scripting and verify that no issues are found. This queues our tester into what is going to be tested and it does so in plain English. Next, we have the Arachni execution step and we pass in some parameters that scope the check to test just for xss or cross site scripting payloads. And to do it only on one page. Finally, we say we want the output to contain zero issues detected. We say that here with the vim statement. Since DAST tools sometimes will spider and run every payload they have against a site, we have to make sure that we create .attack files that have three properties. First, they need to be explicit in meaning, so that anyone reading it can understand what is happening. Second, they should be specific in tuning, so that they scope the tool to test what matches the scenario purpose. Third, and most importantly, they should be fast. Okay. I'm going to run this attack file. I'm exiting vim and I'm typing docker run -t--rm=true -v $
>
> **[3:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=180)** and the present working directory resolve there, doing the pwd:/working. Then we give it a -w/working and then the name of the container gauntlt/gauntlt. Then we feed in the attack file, which just sits on our local disk. If you are unfamiliar with docker, don't get too thrown off with the special docker flags here. In fact, in the other course I mentioned, we set up a wrapper to do all of this for us. What we are doing here is running our Gauntlt docker container and passing in the attack file we just made. That container has Guantlt and Arachni already set up on it. So, it will just happily run our attack. Okay. Now let's run it. Now we can see from this output, that gauntlt used Arachni to scan [example.com](https://example.com) for cross site scripting and didn't find any problems. Gauntlt exits cleanly from this. In fact, Gauntlt handles Unix exit codes just like you would expect for any testing tool. We can see this by typing echo$?. This is powerful because once you write attack files for one app in your organization, you now have security tests as code and they can be shared. A good friend of mine told me that he used Gauntlt as the primary way to jump start the [DevSecOps](../../Skills/DevOps/DevSecOps.md) movement at a large healthcare company he works for. By codifying security, everyone wins, except maybe the bad guys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1)
> **CLI Commands:** docker (7), make (2), rm (1), find (1)
> **Env Vars:** dast (4), cicd (1), url (1)
> **Tools:** vim (3), command line (1)
> **URLs:** [example.com](https://example.com) (2), [gauntlt.org](https://gauntlt.org) (1)
> **Prerequisites:** set up (2), setup (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** just like (1)


### 5. Deploy Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Security in the deploy phase](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=0)** - [Instructor] The deploy phase is where software moves from testing to where the customers area able to operate it for the very first time. When we're doing full [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) this might happen several times a day. At my company we move code to production 10 to 15 times a day on average. The speed at which we move new features to production is a radical departure from where the industry was a decade ago, with mostly waterfall being used for software delivery lifecycle. There's a need to do security at the same speed as all these deploys. There are two major categories of security issues faced at the deploy phase. First, securing the actual deployment. By that I mean [Accountability](../../Skills/Data%20Science/Accountability.md) and audit ability of the deployment. Knowing what code went out, who wrote it, who authorized it and logging for all of that, which needs to be tamper proof. The second category is compliance. Often compliance will try to put road blocks in place for continuous delivery. It's important to bring them along for the journey. In a following video I'll discuss what we can do for dealing with compliance and auditors. So let's talk about the types of questions to ask for this phase. The first question to consider is, what secrets are needed to move my application from development to production. This also has the underlying questions of privilege and authorization for systems and users. At work we set up our deployment tool to be the only user who has any access to make changes to production. Engineers only have access to auth to that tool and initiate changes that way.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=95)** Next ask the question, am I testing for compliance on each and every deploy, or maybe, am I testing for it nightly. In a Dev seq ops approach we want to automate as many compliance checks as possible so that we are assuring compliance daily or better. Remember waterfall is gone, this is [Agile](../../Skills/DevOps/Agile%20Development.md) security. The last question to ask is, is there a repeatable mechanism to push changes to production. We trust the deployment tool to make the changes so that each deploy becomes a routine process that's repeatable, auditable and never done by an individual. This follows the guidance in the Agile [Application Security](../../Skills/Cybersecurity/Application%20Security.md) book. That deploys can be treated as standard or routine changes that have been preapproved by management and that don't require a heavyweight change review meeting. Okay, now that we know the questions we want to answer let's look at some tools that will help us to this end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (2), [Agile](../../Skills/DevOps/Agile%20Development.md) (2), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Rundeck for deployments](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=0)** - [Instructor] Deploy means a lot of things to different organizations, but put simply, it's a set of steps that have to happen to get the software running in production. Since the steps get run for every deploy, it only makes sense to automate them. The tool that I recommend for automating deploy workflows and processes is Rundeck. Rundeck started as an open-source project from Damon Edwards and the DTO Solutions team. DTO is the first true [DevOps](../../Topics/DevOps.md) consultant practice and helped DevOps grow in the early years. They found themselves going to client after client, building the same workflow automation tooling. Let's open up [rundeck.org](https://rundeck.org). There is the free, open-source version that I have here, and then there's also the pro version. If you're in an enterprise shop where auditing and encrypting keys is important, I recommend going with the pro version. The tool functions in three ways that are really helpful for security. First, it codifies standard operating procedures, sometimes called runbooks, which is where Rundeck gets its name. That means that if you want to automate a task like remove a user from the system, then instead of writing up a set of instructions or a script, you write a Rundeck job that can perform this set of steps. This is way less error-prone and way more audit-friendly. Next is that it automates deployment tasks. Deployment is different for every application and system, so in Rundeck, you make a job that is fit for that specific app and give access to the engineers that are allowed to make the deployment happen. You can also assure that the artifacts that came out of [Jenkins](../../Skills/DevOps/Jenkins.md) are the artifacts that are being deployed to production, with the Jenkins plugin for it.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=93)** Lastly, we can create self-service workflows. Does a team need a test environment to use? No problem, they can just click a button and one will be made. But as many in security know, these environments have a way of becoming long-lived things that are out of sync with everything else. Often, languished test systems are an attack factor. Sounds like a great place for a workflow to expire environments or fire alerts after a certain period of time. All that is possible with workflow automation. Here we have been mostly concerned with how this tool can help with deployment, but there is also a SANS research paper, written by [John](../../Glossary/Tool/John%20the%20Ripper.md) Becker, and he cites improved collaboration across security and DevOps because of Rundeck. He also goes on to say that as Rundeck is adopted across the enterprise, it becomes more valuable to more teams. And he calls out auditors and incident responders as the ones who would benefit the most from it. Speaking of auditors, now is probably a good time to talk about how to integrate audit and compliance in your [DevSecOps](../../Skills/DevOps/DevSecOps.md) toolchain, since they're part of the software delivery pipeline, if you like it or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (1), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1)
> **Env Vars:** dto (2), sans (1)
> **CLI Commands:** make (2)
> **URLs:** [rundeck.org](https://rundeck.org) (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Tricks for making compliance happy](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=0)** - When I talk to people about the benefits of [DevOps](../../Topics/DevOps.md) and [DevSecOps](../../Skills/DevOps/DevSecOps.md), there's always one major pushback that I get, you guessed it. Compliance. Often I here this from engineers and security professionals who have suffered through a PCI audit or some other long regulatory process. To them, compliance is the enemy. But I started to wonder, is compliance the real roadblock? Whenever I speak with auditors, they seem hesitant at first but after explaining how a software delivery pipeline works, they actually get excited. In a sense by doing CI and CD, you are expressing a version of what [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) and Waterfall always promised. That is, you get change control along with all the auto ability and login that goes along with it. Most auditors are really concerned with establishing a policy and making sure processes and procedure are followed in regard to that policy. They collect evidence to verify that all looks good and the audit is a success. CI/CD actually fits great with this and provides an abundance of evidence for them. This isn't to say you won't have auditors who aren't skeptical of devsecops. To that end, there are two resources I would like to recommend. First the DevOps Audit Defense Toolkit. This a 20 page pdf which addresses head on the problem of developer's pushing their own code. It include steps and advice for how auditors can fulfill all their testing and evidence gathering in the [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline. We've provided them with the exercise files here for the course. The second resource is the [dearauditor.org](https://dearauditor.org) I was on the team that helped to create Dear Auditor.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=93)** Which is an open love letter to auditors from the devops community. Besides being a promise to bring auditors along the journey of devops. The project has a devops risk control matrix that speaks the language of both groups simultaneously. The team behind this effort included representatives from Capital One, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), CB Labs and more. All with either security and devops backgrounds or audit and compliance backgrounds. It was a really fun project. And be sure to check it out and send us a poll request if you have anything to add. But what about a tool to help with the process? Let's talk about InSpec. InSpec is created by the folks over at Chef. And they dubbed it as compliance as code. The idea is that you write code to express desired compliance. You can see here that you set a control, its impact and then describe what to test for. In this InSpec example, it is asserting that ssh daemon config should match version 2. The great part about compliance's code, is that you save auditor time. As you can just apply it to all system that need auditing. I recommend setting this up to run nightly through a CI system or depending on your system, maybe even on every build. When auditors can see that the IT policy to not use old versions of ssh, is not only adhere to and config through infrastructures code practices like Chef and Puppet, but also they're able to see and inspect test that run on regular cadence. Passing an audit, will be a breeze. Now let's move away from audit and talk about
>
> **[3:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=187)** our last stage. Operate. There we will see how to defend your production software or application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (6), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [ITIL](../../Skills/Network%20and%20System%20Administration/ITIL.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** cd (2), ssh (2)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [dearauditor.org](https://dearauditor.org) (1)
> **Env Vars:** pci (1)
> **Versions:** version 2 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - when (1)


### 6. Operation Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Keeping security in operate](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=0)** - [Instructor] The runtime state of the application is where users interact with, or consume the application. This is where we operate our application or service or, put simply, runtime is our application in production. Runtime is often the most forgotten place of the pipeline, and in [DevSecOps](../../Skills/DevOps/DevSecOps.md) in general. This is because most people think about putting [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) in place closer to development, which makes a ton of sense, and we even have a handy mantra to describe the process. We call it Shift left. However, in [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), we can't just stop with deployment. We also have to see our application in use in order to inform our next development cycle. So instead of just shifting left, security has to also make the shift right. This means putting instrumentation into our runtime or production, and this turns out to be really valuable because this is where you're actually getting attacked. You might be thinking, "haven't we been focusing" "on security and production for ages?" "Haven't we spent decades on implementing" "firewalls and IDS's and WAF's?" Well, of course, yes but all of those technologies are based on creating a perimeter, or the idea of building a border on the network so the application can't be compromised. What we mean for Shift right, is that we actually use instrumentation to provide not just defense, but also feedback to everyone involved with the development and operation of the application. What we are suggesting with a DevSecOps approach is that instrumentation should have four key ingredients. Let's take them one by one. First, metrics based.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=93)** You can also think of this as a way to gauge security at any point in time. It allows us to answer questions like, "am I under attack right now?" or, "are we seeing leading indicators" "of an account takeover attack" "with maybe abnormally high number" "of log-in failures or password resets?" Having key measurements about your runtime security posture allows the team to make meaningful decisions. Next, instrumentation should provide API's. Throughout the course, we've been talking about exit codes and integration into a CICD pipeline. These status codes clue in parent processes about what happened. Well, for runtime, it gets a little messy, and chaining software together is done primarily by the API's that they provide. Most of the major open source and commercial solutions provide API's, but this is something you want to be cognizant about when choosing a solution. I like to think of each piece of software in my pipeline as a component that can be switched in and out as needed. API's enable that type of thinking and flexibility. Another ingredient of DevSecOps instrumentation in the operate stage, is that it promotes learning back to the subsequent pipeline stages. This instrumentation can key you in on weaknesses, or can also show you what's abnormal. An easy way to start with this is to integrate with [Slack](../../Skills/Software%20Development/Slack.md) or other chat ops applications, and emit relevant security information to the developers who support an application. The last ingredient is being attacker driven. This means we don't live in theory. We either are watching what real attackers are doing, or in some cases, we ask attackers to come and try to hack us.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=186)** This approach is also very pragmatic. Don't tell developers about all the possible vulnerabilities. Tell them about the real ones. Don't focus on application abuse and misuse scenarios that we created on a white board. Instead, deal with ones that are actually happening against your organization today. Well next up, let's talk about a few modern approaches to [Application Security](../../Skills/Cybersecurity/Application%20Security.md) that are changing the game.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (3), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1)
> **Env Vars:** api (4), ids (1), waf (1), cicd (1)
> **CLI Commands:** make (2)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [Modern application security](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=0)** - [Instructor] If the attackers are going to try and hack us anyway, why not offer them a prize and some money to find vulnerabilities and report back to us? The logic may sound weird but this is the backbone of the idea of bug bounties. Bug bounties reward any submissions for vulnerabilities found in production for a website or any piece of software. Security researchers sign up, then submit their findings to the organization hosting the bug bounty. If their findings are valid vulnerabilities, then they receive a prize and often money. Not surprisingly [Google](../../Glossary/Service/Google.md) and Mozilla do them but also the federal government does them too. Running a bug bounty can be a little tricky. It involves coordinating legal and security to set up the program and review the results as they come in. You then have to find participants so it turns into a bit of marketing work as well. All in all this is not something to undertake lightly. Because of this there are a few commercial services that run bug bounties. There are two companies that I generally recommend. Bugcrowd and HackerOne. Both of these are well known and well regarded. They also have a roster of skilled testers and hackers. Now, to say that running a bug bounty always goes well is not really the case. There have been notable cases from [Facebook](../../Glossary/Service/Facebook.md), Uber and others where a bug bounty participant attempts to hold their findings ransom to get a bigger payout. Using a service can help mitigate some of this risk. Well, okay, let's switch gears to defending applications. One area that has become a hot topic lately is RASP or runtime application self-protection.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=95)** You can logically add in next-gen WAF if you hear that term tossed around as well. This is instrumentation of the web application for many of the same threats that traditional WAF solved for. But this new breed of tools are considerably less false positive prone and way more effective overall. These [products](../../Skills/Software%20Development/Microsoft%20Products.md) solve for [OWASP](../../Skills/Cybersecurity/OWASP.md) injection attacks but the reason why this area is growing is that they offer the ability to instrument other parts of your application. Want to stop application abuse or account takeovers or ATOs it's over called? Or stop bots and scrapers? These tools are positioned at the application layer to actively take defensive measures. Presently there's not a great open source offering for this but you can get pretty far with ModSecurity + ELK + StatsD but most solutions that I've seen are home grown and the industry really could use a good open source option here. There are some commercial options as well. Full disclaimer here, I work at Signal Sciences, so I'm obviously biased about which I prefer. I wouldn't work there if I didn't. However, any of these tools is better than having none of them. Most of these are limited to [Java](../../Skills/Software%20Development/Java.md) and .NET, notably Waratek and Contrast. Prevoty and tCell have more language support adding in [PHP](../../Skills/Software%20Development/PHP.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and Ruby and Signal Sciences takes a different architectural approach that allows it to be a little more platform and language agnostic. In the next video, we'll take a look at what types of instrumentation these provide and why they are such great tools for runtime defense. To sample the space, we'll take a quick look at the one I'm most familiar with, Signal Sciences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** waf (2), rasp (1), owasp (1), elk (1), net (1)
> **CLI Commands:** find (2), php (1), python (1), ruby (1)
> **Code Identifiers:** tcell (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Signal Sciences in practice](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=0)** - [Narrator] The ideas behind RASP and next-gen WAF sound good, but what do they look like in practice? Let's take a look at what they offer for modern web applications in APIs. As I mentioned, all the options in this space at the time of recording are commercial. The product we are going to look at is Signal Sciences. And since I work there, I'm going to try and stay neutral here, and avoid marketing hype. I'm skipping all the setup steps and moving straight to the product. We have a demo environment set up that is constantly being attacked, so that's where I'm heading. In a browser, lets head over to Signal Sciences. You can see that, right up front, [OWASP](../../Skills/Cybersecurity/OWASP.md) injection attacks are being detected. We can take a quick look at what is happening, and see the requests that are triggering these events. Lots of cross-site scripting and command execution in here. But with all of these new-breed tools, OWASP coverage is pretty good. And this is not too unlike WAFs from a decade ago, in terms of this type of coverage. What's new is the ability to instrument any flow in an application, and tie that together with other detected attack types. One example of these are account takeovers. Here, login attempt, failure, and success are instrumented, as well as registration actions in the application. Many people choose to instrument password reset flows, as well. You can see we have mostly successful logins, but a spike in failures or registrations is now actionable. You can either set the product to handle blocking, or alert your team to look into the issue further. Previously, inspection of something like Auth,
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=93)** meant new code that the developers would have to write. Now you can set your tools to monitor anything in the HTTP request. Tag it, graph it, alert on it or block it. I'll go back to the homepage, and click on configure, and then templated rules. You can see that for a login attempt, it's easy to set up what constitutes a login attempt, and then let the tool decide what to do with it. There is also a full-fledged rules engine, which can inspect any part of the HTTP traffic, to make it as specific as needed on an application-by-application basis. These new tools are also less false-positive prone. Once the tool detects enough badness going on, then it blocks it. In Signal Sciences parlance, these are events, and we can see what these look like. I'm headed to the main page, and viewing one of our flagged bad actors. Here we see a timeline of when the bad actor was detected, when it was stopped, and even a sample of the types of requests that were flagged. If we were interested, we could drill down deeper into any of these items and see more details. These tools also integrate across your [DevSecOps](../../Skills/DevOps/DevSecOps.md) Toolchain. I'm going to manage, and then look in at Integrations. And we can see [Slack](../../Skills/Software%20Development/Slack.md), PagerDuty and a lot of other options in here. These integrations promote the involvement of others in your organization. It means that they can still participate with security, without being forced to log in to a new system. They provide feedback for the tools they already use. To wrap up, this is an exciting space, and I think it is only getting better. Moving [Application Security](../../Skills/Cybersecurity/Application%20Security.md) and defense
>
> **[3:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=186)** out of CDNs and proxies and closer to the application is definitely going to be the new way to secure applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1)
> **Env Vars:** owasp (2), http (2), rasp (1), waf (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** slack (1)
> **UI Navigation:** click on (1)

#### [Cloud security monitoring](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=1)** - [Instructor] Have you ever had the frustrating moment where you couldn't figure out how to get the Amazon S3 bucket permission set right for your application to have access to it? What did you do? Just give up? Well, if you're like me, you probably opened up the permissions for the bucket as much as you possibly could. Of course, you promised yourself once you got it working, you'd go back and set it back to normal, which of course there's probably only a 50-50 chance there that that would ever happen. With developers sharing access to the [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), this story plays out at company after company and has created a new breed of offerings around this space that we will call [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) monitoring. These tools check for configuration in the cloud to make sure that it hasn't changed from its last known good state. They also assess whether you are in or out of compliance across your entire cloud infrastructure. Some [products](../../Skills/Software%20Development/Microsoft%20Products.md) call this as compliance's codes since you assert your standards for your cloud infrastructure in code. Audit is the next piece which is similar to compliance, but this is the auditability and the ability to know what happened in the past. This includes all past changes to your cloud infrastructure. Many of the products out there also offer hardening recommendations and can alert if you're setting configuration that is not aligned with current best practices for hardening for whatever cloud provider you're using. There are several [software as a service](../../Glossary/Concept/SaaS.md) offerings for this product category such as Threat Stack, AlienVault, and [Evident.io](https://Evident.io). If you're doing a multi-cloud infrastructure, then these are often the best bets for you.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=94)** I generally tend to favor Threat Stack. But if you're using their other products, AlienVault makes a pretty compelling offering for the whole solution. However, if you're all in one cloud provider like [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), then you can get pretty far with the services AWS provides. These include the not so excitingly named but very powerful AWS Config along with CloudTrail, Inspector, and GuardDuty. Amazon says that AWS Config was built to automate assessment of your resource configurations, your resources changes, and provide the ability to ensure continuous compliance across your Amazon infrastructure. And many people swear by it as the best way to get this feature set to secure their cloud infrastructure. No matter what option you go with here, be sure to put one of these solutions in your [DevSecOps](../../Skills/DevOps/DevSecOps.md) tool chain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (6), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1)
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3)
> **Analogies:** similar to (1), such as (1)
> **URLs:** [evident.io](https://evident.io) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=0)** - [James] Now that we've reached the end of the course, I'd like to remind you what the task is before us. Specifically, I'd like to speak to security's new role. It's a role of empathy and enablement, seeking to help others in the organization succeed in their job with as little undue burden from security as possible. Next, security needs to be fast and non-blocking. We are a culture of yes, not a culture of no. Next, we choose not to slow delivery of software down. We consciously make decisions that help us go faster and safer. Of course, we now look for opportunities to automate as much as possible. All of this comes together in what I see as our big test. It's that security provides value to the organization by making security normal or just on by default. Security just becomes part of the way we ship software, not some separate team that operates outside of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the software engineering team. This is [DevSecOps](../../Skills/DevOps/DevSecOps.md). It is fun, exciting, and to be honest, a little daunting. Finishing this course, you may be thinking you now have to implement a new tool or three at every stage of the pipeline. While that is admirable, my advice to you is the same advice that Charles Nwatu, the director of security at Stitch Fix, told me he gives to all of his new team members, and that's this. Do less, better. This means that in the coming weeks, take time to implement just one tool or practice from the course. Start with an easy win,
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=94)** maybe by adding [OWASP](../../Skills/Cybersecurity/OWASP.md) dependency check or maybe Gauntlet to your build system. As you work your way through the pipeline, you might want to also check out a book that I've found pretty useful, [Agile](../../Skills/DevOps/Agile%20Development.md) [Application Security](../../Skills/Cybersecurity/Application%20Security.md). It can serve as a resource for you, and I found the sections on audit and compliance to be particularly helpful. As I have mentioned throughout the course, there are other courses in the library on automating [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md), and the entire [DevOps](../../Topics/DevOps.md) Foundations series, which can serve as a great refresher on DevOps. Well, thank you for watching this course and I wish you luck in your DevSecOps journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevSecOps](../../Skills/DevOps/DevSecOps.md) (2), [DevOps](../../Topics/DevOps.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** owasp (1)
> **Definitions:** means that (1)
> **Speakers:** - [james] (1)


## Instructor

- [James Wickett](../../Instructors/DevOps/James%20Wickett.md)

## Resources

- Exercise files available

## Skills Covered

- DevSecOps
- Continuous Delivery (CD)

## Path Context

### In [Get Ahead in DevSecOps](../../Paths/Cybersecurity/Learning%20Paths/Get%20Ahead%20in%20DevSecOps.md)
← [DevSecOps- Automated Security Testing](DevSecOps-%20Automated%20Security%20Testing.md) | **3 of 5** | [Application Security in DevSecOps](Application%20Security%20in%20DevSecOps.md) →

## Appears In

- [Get Ahead in DevSecOps](../../Paths/Cybersecurity/Learning%20Paths/Get%20Ahead%20in%20DevSecOps.md)

## Related Courses

_Courses sharing skills:_

- [Continuous Delivery for Cloud Native Java Apps](../Cloud%20Computing/Continuous%20Delivery%20for%20Cloud%20Native%20Java%20Apps.md) — Continuous Delivery (CD)
- [DevSecOps- Tips for Success](DevSecOps-%20Tips%20for%20Success.md) — DevSecOps
- [Application Security in DevSecOps](Application%20Security%20in%20DevSecOps.md) — DevSecOps
- [DevSecOps- Automated Security Testing](DevSecOps-%20Automated%20Security%20Testing.md) — DevSecOps
- [Devops Foundations Devsecops](Devops%20Foundations%20Devsecops.md) — DevSecOps

---

[↑ Back to top](#)