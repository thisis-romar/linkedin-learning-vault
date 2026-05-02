---
type: course
cssclasses:
  - lle-course
slug: devops-foundations-infrastructure-as-code-18965758
url: "https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758"
duration_minutes: 150
duration: 2h 30m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFmY9NJZYpOwA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684264315878?e=2147483647&amp;v=beta&amp;t=4qCLR83v3x6q-68w1xWs8zjnjhKrw6WqL_Ink-ijQ10"
linkedin_topic: DevOps
learning_paths:
  - '[[DevOps Professional Certificate by PagerDuty and LinkedIn]]'
  - '[[Infrastructure as Code with Terraform]]'
  - '[[Getting Started with DevOps]]'
prev_courses:
  - '[[Devops Foundations]]'
  - null
  - '[[DevOps Foundations- Continuous Delivery-Continuous Integration]]'
next_courses:
  - '[[DevOps Foundations- Continuous Delivery-Continuous Integration]]'
  - '[[Learning Terraform]]'
  - '[[DevOps Foundations- Monitoring and Observability]]'
path_nav: '[{"path":"DevOps Professional Certificate by PagerDuty and LinkedIn","position":2,"total":3,"prev":"Devops Foundations","next":"DevOps Foundations- Continuous Delivery-Continuous Integration"},{"path":"Infrastructure as Code with Terraform","position":1,"total":3,"prev":null,"next":"Learning Terraform"},{"path":"Getting Started with DevOps","position":3,"total":5,"prev":"DevOps Foundations- Continuous Delivery-Continuous Integration","next":"DevOps Foundations- Monitoring and Observability"}]'
path_count: 3
tags:
  - course
  - topic/devops
  - topic/database-management
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/DevOps%20Foundations-%20Infrastructure%20as%20Code.md)

![DevOps Foundations: Infrastructure as Code](https://media.licdn.com/dms/image/v2/D4D0DAQFmY9NJZYpOwA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1684264315878?e=2147483647&amp;v=beta&amp;t=4qCLR83v3x6q-68w1xWs8zjnjhKrw6WqL_Ink-ijQ10)

# DevOps Foundations: Infrastructure as Code

> Infrastructure automation—transitioning an organization's system administration from hardware into code—is one of the major DevOps practice areas. By automating configuration management, you can make your systems more reliable, processes more repeatable, and server provisioning more efficient. In this course, learn the basics of infrastructure as code (IaC), including how to keep your configuratio

> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758) | 2h 30m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Make your systems better with infrastructure as code](#make-your-systems-better-with-infrastructure-as-code)
  - [What you need to know](#what-you-need-to-know)
- [**1. The Wide World of Infrastructure**](#1-the-wide-world-of-infrastructure) (8 videos)
  - [It's all about the cloud](#its-all-about-the-cloud)
  - [Bare metal vs. cloud](#bare-metal-vs-cloud)
  - [Not your mother's cloud](#not-your-mothers-cloud)
  - [Managed services vs. bare cloud](#managed-services-vs-bare-cloud)
  - [Containers galore](#containers-galore)
  - [VMs vs. containers](#vms-vs-containers)
  - [Where'd my server go?](#whered-my-server-go)
  - [Serverless vs. servers](#serverless-vs-servers)
- [**2. Adventures in Automation**](#2-adventures-in-automation) (5 videos)
  - [Building the boxes and lines](#building-the-boxes-and-lines)
  - [Everything vs. Terraform](#everything-vs-terraform)
  - [What's in the box?](#whats-in-the-box)
  - [Declarative vs. imperative](#declarative-vs-imperative)
  - [Everything vs. immutable](#everything-vs-immutable)
- [**3. Bringing It All Together**](#3-bringing-it-all-together) (7 videos)
  - [Provisioning lab overview](#provisioning-lab-overview)
  - [AWS](#aws)
  - [Terraform](#terraform)
  - [Ansible](#ansible)
  - [Docker](#docker)
  - [Helm charts](#helm-charts)
  - [Serverless](#serverless)
- [**4. With Great Power Comes Great Responsibility**](#4-with-great-power-comes-great-responsibility) (10 videos)
  - [What is infrastructure as code?](#what-is-infrastructure-as-code)
  - [Continuous integration for infrastructure](#continuous-integration-for-infrastructure)
  - [Testing infrastructure](#testing-infrastructure)
  - [Works on my machine](#works-on-my-machine)
  - [You write it, you run it](#you-write-it-you-run-it)
  - [Automate all the things](#automate-all-the-things)
  - [CI for my IaC](#ci-for-my-iac)
  - [The GitOps model](#the-gitops-model)
  - [Security and compliance as code](#security-and-compliance-as-code)
  - [Using AI to create your IaC](#using-ai-to-create-your-iac)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go from here](#where-to-go-from-here)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Make your systems better with infrastructure as code
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=0)** - If you work in tech, you've probably either spent hours building systems by hand
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=5)** - Or waited weeks for someone else to build those systems for you.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=8)** - Slow and unreliable.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=9)** What could be better?
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=11)** - Well, today's systems demand a modern solution.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=13)** What you need is
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=15)** - [Together] infrastructure as code.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=17)** - Howdy, I'm Ernest Mueller.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=19)** - And I'm James Wickett.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=20)** - We first met while implementing DevOps at a large enterprise.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=23)** - And we've been friends ever since.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=25)** We both feel that infrastructure as code is one of the fundamental practice areas of DevOps and one of the most revolutionary.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=32)** - With IAC, as the kids call it, you can generate high quality systems that you can reliably test, consistently reproduce, and change quickly and safely.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=42)** - Our course will teach you all the tools, tips and techniques that we've learned over the years to get infrastructure as code right.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=48)** - So let's start automating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[DevOps]] (2)
> **Speakers:** - and (2), - if (1), - or (1), - slow (1), - well (1)
> **Env Vars:** iac (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=0)** - This course is designed to introduce you to the basic concepts of infrastructure as code DevOps style, that means hot and sassy.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=9)** To get the most out of this course, you may want to watch the course DevOps Fundamentals here in the library for context.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=15)** In that course, James and I discussed the foundations of DevOps and how the three major practice areas, infrastructure as code, continuous delivery, and site reliability engineering fit into it.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=27)** This course drills down into infrastructure as code specifically to discuss it in depth.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=33)** To get the most from this course, you should be familiar with system admin basics, be able to use the command line and SSH, and be familiar with some sort of programming or scripting.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=44)** We'll be using the Linux Command Line on the AWS Cloud and an Akaunting GitHub for our demos.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=49)** You should be able to reproduce it from your desktop client of choice.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=53)** Our intent is for this course to be accessible for anyone with even a basic IT experience.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=59)** While we're making our source files available to you, this isn't meant to be a lab course where you follow along and perform the activities to learn a specific technology.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=68)** Instead, we'll be talking about infrastructure as code concepts, why you would use them, and then illustrating how to implement them in a variety of tools.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=77)** So don't expect detailed instructions on how to install and configure those tools here, but there are entire courses here in the library on each one of them when you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[DevOps]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Engineering]] (1), [[Programming]] (1)
> **Tools:** command line (2), github (1)
> **CLI Commands:** ssh (1), aws (1)
> **Env Vars:** ssh (1), aws (1)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - this (1)


### 1. The Wide World of Infrastructure

[↑ Back to Table of Contents](#table-of-contents)

#### It's all about the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=0)** - Before we talk about the code part of infrastructure as code, we want to start out with this chapter talking about modern infrastructure and how it lends itself to automation.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=10)** In this video, we're going to talk about one of my favorite subjects, cloud computing.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=16)** If you're familiar with using the cloud, this may just be a refresher for you, but we wanted to do some explanation for folks that haven't gotten to work with the cloud yet and may have only heard about it.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=27)** So what is the cloud, besides the place your photos go to die?
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=32)** While arguing about what is cloud was popular for a few years, most agree that the definition that the US National Institute of Standards and Technology put out in 2011 is sufficiently definitive.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=44)** Cloud is characterized by on demand, self-service provisioning, broad network access, resource pooling, rapid elasticity, and measured service.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=56)** And there are three general cloud service models.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=60)** Software as a service, or SaaS, is where an entire application is provided for you live from the internet.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=67)** Salesforce, TurboTax, and Office 365 are examples of SaaS.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=72)** Platform as a service, or PaaS, is where you can deploy custom applications to the cloud platform without managing the underlying systems yourself.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=82)** Google App Engine, Microsoft Azure App Service, and Pivotal Web Services or examples of public PaaSes.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=89)** Infrastructure as a service, pronounced I-A-A-S for obvious reasons, is where you get operating system level access to discrete systems in the cloud.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=99)** These are usually VMs and not bare metal.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=102)** Google Compute Engine, Microsoft Azure Virtual Machines, and Amazon Web Services EC2 showcase IaaS offerings.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=111)** Of course, in the last decade plus cloud offerings have gotten more sophisticated and are part of practically everything.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=118)** Your Nest home thermostat, cell phone, Alexa, and so on all use cloud services.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=124)** But this mysterious force that rules your life is really just servers in real world data centers.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=131)** Cloud providers like Amazon Web Services make servers, storage, and more available to use at a click.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=139)** You can go sign up for an AWS account using their free tier or with a credit card, go into their EC2 Elastic Compute service, click to choose the size of the server you want, what operating system you want.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=151)** In about five minutes, you can have a Windows or Linux server of just about any size with as much storage as you want, even with GPUs and other high performance add-ons.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=161)** You can open it up to the whole internet to host a web server on, or keep it locked down for just your use.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=167)** But you can reach it from anywhere in the world that you can jack into cyberspace, as the kids say nowadays, The cloud providers can do this, because they have big data centers full of servers and storage around the world and they're just assigning one of them to you when you ask for it.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=182)** That's a big difference from the old days of fighting with a system admin team for six weeks to get three more servers into the data center.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=190)** Anyway, this means if you need two or a hundred servers instead of just one, you can easily ask for that many and scale right up in minutes.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=199)** Amazon can rent that capacity out to somebody else when you're not using it, so they just charge you by the minute.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=204)** Like we used to pay per minute for long distance phone calls.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=208)** If you need to just use a computer for four hours, you pay for four hours.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=212)** You're not buying a physical server that you have to pay full price for upfront and then keep around whether you're using it or not or whether it breaks or not.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=221)** And that's the cloud in a nutshell.
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=223)** Instead of buying your own hardware, waiting for it to get put into a data center and loaded up, and then depreciating it over time while you get sadder and sadder about its performance every year, you could just reach out, grab a resource of the size you want, get it right now, just pay for it while you use it.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=240)** And maybe most importantly, to use the cloud, sure, you can use their UI or command line tools, but all the clouds have a fully featured API that you can integrate with your own tools or code.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=253)** In our next video, we'll talk about when you might use the cloud and when you might want to use your own data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (16), data (4), [[SaaS]] (2), [[Google]] (2), [[Microsoft Azure]] (2)
> **Env Vars:** ec2 (2), aws (1), api (1)
> **CLI Commands:** make (1), aws (1)
> **Cross-References:** in the last (1), next video (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - before (1)

#### Bare metal vs. cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=0)** - The cloud is great because you can get the infrastructure you need pretty much immediately when you need it.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=6)** - Okay, you're starting to sound like a commercial.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=9)** Do you work for Amazon now?
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=11)** - [Announcer] Bare metal versus cloud, fight.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=15)** - You can't beat the cloud's agility.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=17)** Instead of waiting to buy hardware, get it put into a data center, and whatever annoying process your IT department ladles on top of that, you can get the servers you need with a click of a button, bit of typing at a command line or a brief lick of an API or whatever it is you do to an API.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=33)** - Okay, first of all, that's oddly disturbing.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=36)** Second of all, those servers aren't cheap Ernest you can buy a good Dell server for what, about $5,000 but a cloud server of the same spec can cost you like a $1.50 an hour.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=45)** Okay, when you put all that together by my calculations, that's $13,000 in a year.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=51)** - For sure, one to one, the cloud can be more expensive, but first of all if you're really running that server all the time, you can get a savings plan that'll cut 30% off the top.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=61)** You're also saving on administration and facility costs.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=64)** You're not just not buying that server you're paying for the data center, power, cooling, networking, and system admins needed to make it work.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=74)** But maybe most importantly cloud savings isn't about running servers one to one.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=78)** It's about right sizing your servers and fleet dynamically.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=83)** Think of a data center as a shipping container full of liter containers of water.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=88)** The water's the work you're getting done but many of the containers aren't full and you're paying for the containers you have and no matter how much water's in them.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=96)** In the cloud, it's like you can resize the shipping container and the liter containers to match the workload and then you can save on all the excess.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=105)** - Are you done?
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=107)** I mean, that's nice to put in the old cloud, to rain, to drinking water analogy, but come on since it's easy to just click and get more servers aren't my employees just going to run rampant and you know get a bunch of servers like there's no tomorrow without a certified system administrator or someone you know, watching and enforcing, you know through compliance and audit?
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=127)** - Well, sure, that can happen.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=128)** With great power comes great responsibility as my Uncle Ben once said.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=133)** But it's easy to put governance and quotas in place, and instead of having one big organization be the giant cost center, you can delegate out budget to the orgs using it, which improves behavior around cost and benefit organizationally.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=146)** - Okay, but isn't the cloud really complicated?
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=149)** I mean, you hear comedians all the time saying things like no one understands the cloud, and it's all this newfangled and scary thing.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=156)** - Remember, we're comparing this to on-premise system and network administration.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=161)** Pretty sure those standup comedians would be even more puzzled by InfiniBand networking.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=164)** - Okay, okay, that's fair.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=167)** - While it is new, and those of us like me who came from a traditional system admin background needed to learn some new things in order to use the cloud it's not any more complicated than an on-prem data center.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=178)** And frankly, since it's more standard you don't get the weird old special snowflakes boxes in the corner with a do not touch sign on them.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=186)** - Okay, but what if we need specialized hardware?
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=190)** You can't get that in the cloud.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=192)** - Well, you'd be surprised, they have GPUs FPGAs, quantum computing, 5G edge compute and a lot of very diverse hardware in the cloud.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=201)** But yeah, if you have a lot of super custom hardware needs you'll still need to roll your own.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=206)** Or if the cost instability of your use case really means it's financially appropriate to build out your own hardware, but even then you probably want to use cloud for all your other use cases that don't fit that description.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=219)** And in my experience, less than 10% do.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=222)** - Okay, Ernest, I'm convinced.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=225)** Like the kids say today, I'm down to cloud.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=229)** - Never say that again.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=231)** - No?
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=232)** How about make it rain servers?
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=235)** - That's another entry on the do not say list.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=238)** - Okay, well, that was our completely objective debate on using real hardware versus using the cloud.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=244)** We hope you enjoyed it and learned from it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (16), [[Hardware]] (6), data (4), api (2), power (2)
> **Speakers:** - okay (7), - well (2), - the (1), - [announcer] (1), - you (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Versions:** 1.50 (1)
> **Documentation:** spec (1)
> **Tools:** command line (1)
> **Analogies:** it's like (1)

#### Not your mother's cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=0)** - The cloud means different things to different people but most expect network, compute, and storage.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=7)** Now at the dawn of cloud, that was enough but today the cloud is way more.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=13)** Let's take a look at Azure's cloud offerings.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=15)** As you can see, the choices are numerous.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=18)** Besides the basic services there's a long list of managed services.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=23)** You can get managed databases of any flavor from managed MySQL databases, to map reduce, to DNS, and CDNs, but it doesn't stop there.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=33)** The options also include observability and security offerings.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=37)** And this isn't limited to Microsoft.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=39)** Every major cloud provider, AWS, GCP, OCI, they all have a huge set of managed services that go beyond simple infrastructure.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=49)** The goal here is to provide specific functionality in a service that doesn't require the user to configure the lower level servers and other components in order to get their desire workload performed.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=60)** Here's a list of past services that Microsoft Azure recommends you use instead of building and configuring them manually, as you would in an on-premise data center.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=69)** And they can be used to form sophisticated systems all by themselves.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=73)** So here's a Microsoft example architecture for a social media analytics solution.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=78)** It's completely composed of managed services.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=81)** Azure Synapse Analytics is used to ingest the data and place it into Apache Spark pools.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=88)** It enriches that data using Azure Cognitive Services Translator to translate text and Azure Maps to link data to geographical coordinates.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=98)** It stores the data in a serverless SQL pool inside Azure Synapse Analytics, and then makes it available to users via Power BI dashboards.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=108)** While this solution certainly uses servers and databases under the hood, you aren't interacting with them directly.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=116)** You're only interacting with the managed services at a more functional level.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=120)** Store the data, translate this string, geolocate this address, visualize the data, that's what managed services are.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=129)** Next, we'll examine why you should always use them and never use infrastructure ever again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), cloud (5), [[Microsoft Azure|Azure]] (5), [[Databases]] (3), [[Analytics]] (3)
> **Env Vars:** dns (1), aws (1), gcp (1), oci (1), sql (1)
> **CLI Commands:** mysql (1), aws (1), apache (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)

#### Managed services vs. bare cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=0)** - Managed services are great because we don't have to do all the care and feeding of infrastructure and can focus on delivering value.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=7)** - Okay now you're starting to sound like a commercial.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=10)** Do you work for Amazon now?
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=12)** - [Narrator] Managed services versus Bare Cloud fight.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=16)** - But managed services get you so much more than basic services do, you know, for example let's say you want to try out a new database.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=24)** Previously you would've hired consultants to get it up and running or found expert staff but neither of them are cheap.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=31)** - Yeah but is that database really fully managed?
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=34)** You still need database expertise for your schema and your tuning, even though you may not have to manage the servers the database is still largely up to you to configure.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=44)** - Okay yeah, you still have some things to do but not nearly as many.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=48)** Instead, you can now make a few API calls and have a full database ready to go managed by your provider and ready to scale instead of waiting for a month or two for your DBAs to get around to doing something.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=59)** - But that abstraction layer is preventing you from tuning and doing like the deep down details you need to do for super demanding workloads, isn't it?
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=68)** - Okay, sure, if you're one of the FAANG companies, you can worry about that, but 90% of the companies out there they don't really need that level of customization and no one really needs it for the majority of their services, just the key ones.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=81)** Okay so in the case of Kubernetes would you rather run your own cluster and manage it and all the ins and outs of Kubernetes or would you rather use EKS from Amazon and get all the benefits without having to hire all the new staff Ernest?
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=94)** - It's great if you want to use what the man wants you to use, what if they don't have the version or functionality or whatever you need?
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=102)** For example, the managed Kubernetes services are always lagging behind the newest releases and so you miss out on a lot of the cutting edge features and you can't customize as much as you can when you're running it directly.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=114)** - Okay yeah, sure, yeah you may be a bit behind the bleeding edge of a particular technology, but that may be seen as a positive in many organizations, for small teams or the scrappy startup looking to build out services the friction and cost has really been significantly reduced.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=131)** - But from the startup point of view they're also more expensive.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=135)** You pay for all that management they put on top of it.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=138)** In one shop I used MongoDB Atlas, their managed database service, and it was cool that I could upgrade versions or server sizes with the click of a button, but then they charged me out the nose for backups.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=150)** - Okay, definitely, but what could your engineering effort that you save do to accelerate the actual startup, you know and the success of it, and it's often worth money to get back all that engineering time.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=162)** Managed services aren't just for startups either.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=164)** Many of the companies that we've both worked at in the last decade, including mid-size enterprises have migrated completely to public cloud hosting for their computing needs, and this includes using more than just compute and network and storage.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=177)** - Well, but that brings up another challenge with managed services.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=181)** They're not portable across clouds or to your data center.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=185)** If you're using one cloud service it's often not compatible at all with another's.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=190)** - Okay well but isn't that great from a buyer's perspective?
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=194)** You know, competition between all the major cloud providers and all the options we get to use, we never thought we would've had those in the pre-cloud era.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=203)** - I mean, it is, except for the harm it often does to those open source ecosystems.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=208)** The cloud providers have sometimes been fairly predatory in taking open source products and forking and monetizing them to the detriment of those communities health.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=217)** - Okay all right, out of everything you've said, you do have a point there, but as for the rest of your points about customizability and multi-cloud what percentage of the shops that you've worked at in the last 20 years, where they've really needed any of that, instead of just moving more quickly to market?
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=234)** - Well maybe 10%.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=237)** - Okay I rest my case.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=239)** (banging)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (7), database (6), [[Kubernetes]] (3), [[Engineering]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Speakers:** - okay (8), - but (3), - well (2), - managed (1), - [narrator] (1)
> **Env Vars:** api (1), faang (1), eks (1)
> **Cross-References:** in the last (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)

#### Containers galore
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=0)** - Now I know what you're saying.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=2)** Cloud is so early-2000s.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=4)** Containers are all the buzz right now, and they're a fundamental empowering technology for infrastructure as code.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=11)** So what is a container, you may ask?
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=14)** It's a lightweight, executable unit of software that packs up a system environment, application code, and dependencies such as binaries, libraries, and configuration files for easy deployment across different computing environments.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=29)** In other words, it's basically a way to run segmented mini systems on your Linux or Windows host system.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=36)** I know, I know that sounds like a virtual machine, but containers only virtualize down to the level above the core operating system , while VMs virtualize all the way down to the hypervisor.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=48)** Because containers share the system's kernel, they boot fast and are more lightweight than a traditional virtual machine, but they do provide isolation so you can install packages and do system configuration restricted to the container.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=62)** In other words, they look like separate systems, for most purposes, from inside them.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=67)** In fact, you don't need an operating system in your container.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=70)** Since it uses the underlying POSIX OS of the server, a container can just have, say, a Golang or Python interpreter as its base layer and be very slim.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=80)** Docker's the most popular container technology, but there are others like CoreOS rkt, containerd, and Red Hat CRI-O.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=90)** You create the container images that they use in a code-like way.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=94)** Docker uses a build file called a Dockerfile.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=97)** Here is an example.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=98)** You just docker build this, and it starts by taking the latest Ubuntu base container off Docker Hub, which is a central Docker image repository with community contributed images.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=110)** Then it downloads, installs, and runs the NGINX web server on it and opens up port 80 to the outside network.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=118)** The result is a Docker image you can run at will, and every run of it generates a new container running a web server.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=124)** You can then upload the image to a container image repository to be pulled down and used by developers and by production systems.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=133)** The popular open source system, Kubernetes, orchestrates containers en masse across multiple servers to form a whole networked architecture of many small services cooperating to form applications.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=145)** Here's an example: complex Kubernetes system with relatively small pieces of code, also called microservices, running in a variety of containers and pods across a set of nodes.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=157)** Kubernetes handles running the containers and moving them around on nodes for resilience and scaling.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=163)** And it also handles the network connectivity between services and from outside the system.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=169)** Because containers can be built quickly and easily from description files and carry their own environment along with them so that they can be run in development and production environments identically, they've become a popular base for application development, and they lend themselves very well to infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), web (2), cloud (1), application (1)
> **CLI Commands:** docker (6), python (1), nginx (1)
> **Definitions:** is a  (3), in other words (2), is an  (1)
> **Env Vars:** posix (1), cri (1), nginx (1)
> **Ports:** port 80 (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - now (1)

#### VMs vs. containers
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=0)** - I don't get the big deal about containers.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=2)** They're just slightly lighter Vms, right?
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=5)** The cloud already lets us spin up all the VMs we want dynamically.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=8)** - Well, actually, that's true, but--
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=11)** - [Speaker] VMs versus containers, fight.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=14)** - Do you mind?
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=16)** Anyway, that's true.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=17)** But servers, even cloud Vms, only come in fixed sizes, and are slow to build and provision.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=24)** Containers build and run much more quickly, and use less overhead when they do.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=28)** - Right, but that doesn't sound like that big of a deal.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=31)** I only build my servers once, and then they're done.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=35)** Who cares if it takes 10 minutes or one minute?
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=37)** - That's what I thought when I first had Docker explained to me, too.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=41)** The operational benefits are there, but they're not super compelling when compared one to one with a VM.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=46)** But it's not about one to one.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=48)** Like with moving to cloud from data centers, it's the ability to use greater ephemerality that really makes the difference.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=56)** - Okay, now hold on there, Mr. Big Words.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=59)** I'm from Texas.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=60)** What do you mean, ephemerality?
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=62)** - Well, the old model is that you carefully construct servers in order to run a bunch of applications on them.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=69)** And then you have a whole world of hurt from conflicting configurations, maintenance schedules, and so on.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=74)** Containers separate that out, so each application has just the environment it needs.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=79)** So you avoid version conflicts with things like Java, Python run times, and other dependencies.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=84)** - Okay, but if you have a thousand containers instead of a hundred servers, isn't that just 10 times the maintenance burden?
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=92)** - No, because container architectures pressure you to run them for a short time, like one piece of a workload, and then kill them.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=99)** They're intended to be read only, no updates or SSHing into them or anything.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=104)** You can think of them as much as thick processes than thin servers.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=108)** In the DevOps world, we often refer to the move to standardized servers as cattle, not pets.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=115)** Using that same analogy, you can think of a container as a specific packaged steak.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=120)** Hmm, steak.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=122)** - Hmm, okay, steak.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=124)** Now, now, now you're talking Texan.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=127)** So what you're saying is there's less of an opportunity to drift, but you still need to update them for security patches and all that stuff, right?
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=134)** - Sure, but because the beauty of Docker is that each container is intended to be one service, one or a very small number of processes.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=141)** With a minimal system environment customized to itself, they're often not running an entire traditional operating system in the container.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=149)** - Okay, so there's less surface area.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=152)** - Right, and since they build quickly, Docker-based build pipelines integrate the base container build with the application build in the same pipeline.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=162)** Individual container images are immutable, and not intended to be changed, just new versions built whenever you need a patch system or application.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=171)** - Okay, but doesn't that expose the sanctity of my operating system configuration to the, I hate to say it, developers?
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=177)** I mean, my inner sys admin says that's a bad thing.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=181)** - Yes, but it's really a good thing.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=183)** Traditional system administration relied on one set of people carefully configuring the systems, and another the applications.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=191)** 'Cause one day, somebody heard the phrase, separation of duties, skipped reading the definition, and decided that was the way to do it.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=198)** - Oh, snap.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=201)** - But the real power of containers is that they greatly accelerate the feedback loop for developers.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=206)** Developers can run the identical container easily on their desktop, on test systems, and on production systems.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=213)** This finds integration problems early, and speeds up the whole development cycle.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=218)** - Okay, of course, separation of duties doesn't mean one person does systems, and another does apps.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=224)** But it does mean that no single person should have full control over something that's important.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=229)** And so doesn't this violate that?
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=231)** - Well, the great thing about container-based development workflows, spoiler alert for later in the course, is they can leverage the safeguards of a well-designed build pipeline.
>
> **[4:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=241)** That means peer reviews to ensure separation of duties, as well as automated testing, functional security and so on, in a single integrated, not siloed way.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=251)** - Okay, that sounds good.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=252)** But what if I said there was something even better than containers For that?
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=257)** You'll have to join me in my next video to find out what it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (3), application (3), [[Security]] (2), data (1), [[Java]] (1)
> **Speakers:** - okay (6), - well (3), - right (2), - i (1), - [speaker] (1)
> **CLI Commands:** docker (3), python (1), snap (1), find (1)
> **Cross-References:** later in (1), next video (1)

#### Where'd my server go?
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=0)** - Let's move one layer past containers to serverless.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=5)** Serverless computing is something you may have heard about but haven't tried out.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=10)** In this session, we're going to demystify the term serverless and dive into how it works.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=16)** The term serverless, it doesn't mean that there's not a server in there somewhere.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=21)** It just means that you don't have to interact with it yourself.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=24)** Some managed services bill themselves as serverless once they get to the level where you don't need to configure system parameters or stuff like that yourself.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=33)** Some cloud databases and data pipeline services are frequently billed as serverless, but the real heart of serverless computing is functions as a service or FaaS.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=45)** Some examples of public cloud FaaS offerings are Amazon Lambda, Google Cloud Functions, and Azure Functions.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=53)** There are also open-source serverless platforms that you have to install and do some of the server part yourself like Apache OpenWhisk, OpenFaaS, and Knative.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=63)** These usually work on top of Kubernetes or other container platforms.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=68)** Well, let's explain this with an example architecture.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=71)** On the left is a traditional web application architecture.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=75)** A client talks literally to the web stack, and the web servers are running any number of services on them.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=81)** On the right is a serverless architecture.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=84)** You decompose the services into functions with no central web server to speak of as all of its roles and duties are now distributed.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=93)** Under the hood, these functions are containers that get spun up in milliseconds on a read-only file system when they're requested.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=101)** They execute the event that is given to them, and then they just disappear.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=105)** So you don't have persistently running servers, you just have zero to many running invocations of your function.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=113)** I find it helps to think about serverless like this.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=116)** Serverless encourages functions as deploy units coupled with third-party services that allow running end-to-end applications without worrying about any of the system operation.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=127)** Since the functions are backed by come-and-go containers, this begs the question of how do serverless functions get instantiated or triggered?
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=135)** And that's a good question.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=137)** You know, when serverless first came out, it was often just being used to do event handling.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=142)** So you would upload a file, for example, and that would trigger a function to process it.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=147)** So early Lambdas often did simple operations like compressing a file or converting a file format.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=154)** But it wasn't too long before all that changed due to the fact that these functions were ready in milliseconds and the fact that HTTP traffic is just a series of small events, the industry started creating web applications using a serverless architecture.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=170)** So here's an example of a serverless application composed of serverless functions in AWS.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=176)** It's based on a real insurance underwriting application that Ernest worked on that was completely serverless.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=182)** Web requests fired from a front end react application, and they came in through an API gateway to trigger specific functions like log in, generating new contract, viewing existing contracts and so on.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=195)** Individual dedicated chunks of code, perform operations like saving information, generating a price quote, creating a pdf, and emailing the potential client.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=207)** It breaks down every API into a set of serverless functions and calls out to external services like an accounting system and a database.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=215)** In this way, you can build large complex systems without having to build or manage servers.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=221)** That sounds too good to be true, doesn't it?
>
> **[3:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=223)** Well, in the next video we'll talk about that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (5), application (3), [[Serverless Computing]] (2), cloud (2), api (2)
> **Env Vars:** api (2), http (1), aws (1)
> **CLI Commands:** apache (1), find (1), aws (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** configure (1), install (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### Serverless vs. servers
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=0)** - I've seen the future, and it doesn't have servers.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=3)** - I declare shenanigans!
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=4)** Serverless still has servers under the hood. - Okay, okay, professor.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=8)** - [Speaker] Serverless versus servers fight.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=11)** - Okay, let's jump into it.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=14)** Let's start by discussing the benefits of serverless.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=17)** - Okay, fair enough.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=18)** But where did you get that ridiculous hat?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=21)** - Oh, yeah, this, this old thing?
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=23)** You like it?
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=24)** - No.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=25)** - Serverless has three key benefits.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=28)** First, scaling is handled by the provider.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=31)** Second, it's pay for play.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=33)** If your app isn't running, it isn't costing you anything.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=36)** Third, you're no longer dealing with package management or OS updates.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=40)** It's really a beautiful thing.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=42)** - Okay, that's all true, but you're ignoring some of the downsides of serverless.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=46)** I'll match you three for three.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=49)** Each cloud vendor's platform works a little differently, but I'm not even going to count that as a downside.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=54)** The big story is that each of them has the same three fundamental limitations that make some workloads just not suitable for serverless.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=62)** First, big apps have long initial cold start times, which cause delays when calling infrequently used services.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=69)** Second, functions have a runtime limit set by the cloud provider, like 15 minutes for AWS Lambda.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=76)** So long running jobs don't work.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=78)** And there's also some not well advertised limits like the number of parallel Lambda executions you can have in an AWS account.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=85)** And then third, serverless invocations are relatively pretty expensive.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=91)** If you're running a lot of executions, it can turn out to cost a lot more than running a dedicated service yourself.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=97)** - Well, I think you're at least partially right about the cost.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=100)** Unless you're running your own serverless platform like K Native on top of Kubernetes, but then you're doing all the work to running yourself.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=108)** So, you know.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=109)** - Okay, so it's settled.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=111)** - Well, not so fast there, Ernest.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=113)** I'll give you that.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=114)** But your other points about restrictions and limitations are just facts of computing.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=119)** Not every workload fits on every platform, but there's often ways to get more mileage out of serverless in these cases.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=125)** You know, very large apps may not be best for serverless web services, but caching and asynchronous responses can often improve cold start experiences.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=135)** Long running apps may be decomposed into steps, using step functions, and apps that have many concurrent executions may not be the best cost model, but it takes you quite a while to get there.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=147)** So you can defer the cost of a more complex solution til the time comes that you really need it.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=152)** - Okay, well, since you seem so sure of handling the downsides of serverless, why don't you tell us more about why it's so great?
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=160)** - Yeah, sure.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=161)** Well, let's start with how people are using it.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=163)** In fact, in the last video, I showed how you had built out an entire application through linking a series of serverless functions and cloud services, and that was pretty cool.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=174)** - Thanks.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=175)** I mean, that must be some other Earnest.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=177)** - There's only room for one Earnest in my life.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=180)** I often advise that before people undertake a full serverless approach, they could transition just one part of their application or stack to serverless by looking for places where they're handling events or processing queues or using admin scripts, creating an API, or maybe even using HTTP traffic like single page web applications.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=201)** - That makes sense.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=202)** I learned that you can do a lot with serverless.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=205)** Oh wait, whose side am I on?
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=206)** That's right, don't take my server.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=207)** - Okay, Ernest, here is something for you to consider.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=211)** When you have a server, whether it be a cloud VM or actual real hardware, or even a Kubernetes pod or node, what is it doing most of the time?
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=219)** - Well, most of the time, it's running my application, well, and a bunch of other stuff.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=224)** - Bingo.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=225)** One of the best reasons to use serverless is that you have more direct visibility of what resources your app actually uses, not mixed in with a bunch of other plumbing.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=236)** And an underappreciated aspect to this is that for the first time in our industry, performance improvements and enhancements, they can be directly tied to cost, without having to use an interpretive model.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=247)** With you being a longtime web performance expert, I think you'd have to love that.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=252)** - Well, he got me with that one.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=255)** Where's my hat?
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=261)** - You know, it looks really good on you.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=263)** - Join us in the next section, where we discuss how to take all this infrastructure we've been talking about and codify it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (4), web (3), application (3), aws (2), [[Kubernetes]] (2)
> **Speakers:** - okay (6), - well (4), - i (2), - [speaker] (1), - oh (1)
> **CLI Commands:** aws (2), make (1), node (1)
> **Env Vars:** aws (2), api (1), http (1)
> **Cross-References:** in the last (1), in the next (1)


### 2. Adventures in Automation

[↑ Back to Table of Contents](#table-of-contents)

#### Building the boxes and lines
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=1)** We've been talking a lot about the infrastructure itself, but you may be wondering, in the words of the great sainted Clara Peller, "Where's the beef?"
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=10)** Well, now we'll move on into the second phase of explaining infrastructure as code with infrastructure automation.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=17)** You can split automation frameworks into two general camps, historically: ones that configure the overall systems environment, creating networks and servers and such; and then, tools that configure the operating system on the boxes.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=31)** Some tools do both, but most have their roots firmly in one world and just dabble in the other.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=37)** This is why we started by going over cloud containers and serverless.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=41)** With traditional hardware, you pretty much need to set it all up manually.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=46)** There are some tools to configure the boxes themselves and the network a bit, but the box and lines level of the system diagram is slow and physical.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=55)** With these newer infrastructure technologies, while they may have graphical interfaces to click on to set things up manually, they also have programmatic APIs that can be exercised by tools or code to build your network out on the fly.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=69)** This means we can use tools or code to create our infrastructure from a defined description.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=76)** Each of the cloud providers has their own way to do this.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=79)** For example, AWS's CloudFormation is a way to describe a complete network of systems using JSON or YAML templates.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=88)** You then use a command line tool or an API to feed that description into the cloud, and it makes it for you.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=94)** Here's an example CloudFormation file that describes creating a single EC2 virtual server, with variables for the machine image, instant size and such, and some quick commands to update the OS and start NGINX and boot.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=109)** You just feed it in, and, bam, about five minutes later, you have a full running system in the cloud, just like you went and clicked in the EC2 console, but better because it's repeatable and you can do it 100 times simultaneously if you want.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=123)** And you can build as large and as complicated as system as you can model.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=128)** To update it, you just change the model file and resubmit.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=133)** Now, you do have options beyond the cloud provider-specific tooling.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=137)** There are similar tools that try to provide a cloud agnostic solution.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=141)** Probably the most popular is HashiCorp's Terraform.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=145)** It has integration with most major cloud providers and a large library of pre-existing modules to make standard constructs like AWS EC2 instances.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=154)** And you can write your own.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=156)** You can buy it as a cloud service from them if you want, but the tool itself is open-source.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=162)** Those tools are all declarative.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=164)** In other words, you write a description file and the tool reads it and creates the system that you've described.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=170)** There are also plenty of code libraries you can use to build and manipulate cloud resources in various programming languages.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=178)** AWS provides the CDK, or Cloud Development Kit, which supports several languages.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=184)** A common solution here is Python's Boto library.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=187)** Here's an example of the code to spin up an EC2 instance from within Python.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=193)** Here, you don't have a single description of the system.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=196)** You just add and change items organically from within your code.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=201)** In case you were wondering, yes, you can use these tools or similar ones to create the base systems environment for Kubernetes clusters and serverless architectures.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=212)** We'll talk about the up and downsides of these approaches in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (9), [[Amazon EC2|Ec2]] (4), aws (3), [[Automation]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** ec2 (4), aws (3), json (1), yaml (1), api (1)
> **CLI Commands:** aws (3), python (2), nginx (1), terraform (1), make (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (1), just like (1)
> **Cross-References:** next video (1)
> **Tools:** command line (1)

#### Everything vs. Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=0)** - There are many ways to create your network infrastructure from code.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=4)** - But there's only one right one, Terraform.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=7)** - [Narrator] Everything versus Terraform.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=9)** Fight.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=11)** - Ah, come on Ernest.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=12)** We know that there's never one silver bullet in tech.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=16)** - Well, I'm not hunting werewolves, until this weekend at least.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=19)** I'm building infrastructure and Terraform's the way to do it.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=23)** It works across all the major cloud providers.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=25)** - But what about the cloud provider specific solutions?
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=28)** Isn't AWS cloud formation optimized for AWS and Microsoft Arm templates optimized for Azure or at least they support all their new features?
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=39)** - So, not really.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=41)** Besides those solutions being cloud provider specific, they're made by different teams inside those large organizations and they lag their own feature releases too.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=50)** Since all cloud features are API driven a third party module can get put together as quickly as an in-house one in practice.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=57)** There's a huge Terraform community contributing to the public Terraform registry.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=62)** So I'd venture to say Terraform support for each cloud is as good as the cloud providers itself.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=68)** - Okay, well, but what about doing it imperatively in code instead of using a tool like Bodo or using AWS's own CDK?
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=77)** - I don't know, man.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=78)** I've never been a big fan of that.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=80)** Not only do you need to rewrite a bunch of code that an infrastructures code framework already has, you're biting off a lot of complexity and error prone fiddling.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=89)** Driving infrastructure from app code has its place.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=92)** For example, starting per user workstations or something where you really need fine and instant control.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=99)** That's definitely not your core network.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=100)** You want your base infrastructure to be well defined and repeatable.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=105)** - I've heard that you have to think about how to store your infrastructure state in Terraform, though.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=109)** You don't want to just keep that on an operator's desktop.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=112)** - True. Well, cloud solutions use their own API fabric as state storage.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=117)** In Terraform, you need to choose where to store your state but it's easy to store it in any database or an encrypted inversion controlled S3 bucket.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=126)** - But aren't you being all cloud-centric here?
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=129)** What about on-prem hardware?
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=131)** - So that's a fair point.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=133)** You can't easily do base infrastructure using pure Terraform on bare metal.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=138)** There's some experimentation in that direction but I personally would absolutely use something like digital rebar that handles pixie booting instead.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=146)** - So, I gotcha.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=148)** - You would have if Rob Hirschfeld and the smart folks at RackN hadn't then made a digital rebar provisioner for Terraform.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=157)** Checkmate.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=158)** - Ah, snap.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=159)** Okay, I guess you're right.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=161)** It's a good thing that using Terraform at scale doesn't result in a hell of core Terraform and module version dependencies.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=170)** - Who told you that? Who told you that?
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=172)** - You did.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=174)** - Okay. Well that that's true.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=176)** Complex infrastructures make for complex Terraform.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=179)** You need to compensate by breaking it up.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=181)** I've tried various packaging dependencies and containerizing schemes.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=186)** Terraform can be too much for a simple job.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=189)** - I do see why you recommend Terraform.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=192)** You know, for so many cases it seems to have become the most popular choice out there.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=196)** It has a lot of community and commercial support but I have to admit, I still miss the provisioning framework that we built together back in the day.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=204)** It built cloud infrastructure, but also did app deployment and rationalized runtime service dependencies.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=211)** - Well, I agree, and the one drawback I find in Terraform is the common flaw in all the available solutions, really.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=218)** There's a sharp separation between infrastructure provisioning and application deployment and runtime orchestration tools largely based on historical ops team versus dev team responsibilities.
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=230)** And that's not very DevOps.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=233)** - Double snap.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (16), cloud (9), aws (3), api (2), [[Microsoft]] (1)
> **CLI Commands:** terraform (16), aws (3), snap (2), make (1), find (1)
> **Speakers:** - but (3), - so (3), - i (3), - ah (2), - well (2)
> **Env Vars:** aws (3), api (2), cdk (1)
> **Analogies:** for example (1)
> **Warnings:** gotcha (1)

#### What's in the box?
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=0)** - Alright, let's get down into the details a bit more about what each box in our system is, how it gets created, and how it stays up to date.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=9)** By box, we mean the individual running system, whether it's hardware, a virtual machine, a cloud instance, or a container.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=18)** First, we'll start with defining a few key terms to help us think about our boxes and our system, and how they're configured to run both initially and over time.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=27)** This process is generally known as configuration management.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=31)** Provisioning is the process of making a server or node ready for operation, including installing the OS, system services, and establishing network connectivity.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=41)** Deployment is the process of deploying and upgrading applications on a server.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=46)** Now, these two terms are mainly different for historical reasons.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=51)** You know, like a developer, they might only think about deploying an application and its APIs, and an operations engineer is, you know, worried about provisioning the OS and the network components.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=60)** But consider if you're using version code for your infrastructure, and version infrastructure for your applications, you can use many of the same tools to roll out both.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=71)** Configuration management tools like Chef and Puppet can make both operating system-level changes and deploy applications using the same semantics.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=81)** You can even drive both of them out of the same build system.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=84)** Here's an example of a chef recipe to install a standard OS package for the Apache 2 web server.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=90)** It's smart enough to understand which package to use on RPM-based systems and which to use on Yum-based systems.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=97)** You just have Chef run on a node and it'll check to see if the package exists and, if not, it'll install it.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=104)** And then here's a Chef recipe to install an application.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=107)** In this case, the golang cloud generator that we wrote.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=111)** It downloads a zip file from the application from our Nexus artifact repository, unzips it, and runs it.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=118)** In this way, you can use code to do all the OS, network, and security, application configuration, everything that you need for a base operating system to get all the way to a fully configured and working server without all the manual steps.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=133)** Infrastructure and services need to be managed after their initial creation, of course.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=138)** Initial provisioning and deployment is great, but being able to control and upgrade a running system, that's also critical.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=145)** This includes detecting whether the system is really working in the state you desired, or if it's broken from a manual change, a runtime error or something in the cloud provider, and you want to be able to roll out new versions and changes the same way you initially provisioned your system.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=161)** This brings us to another important concept: orchestration.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=166)** Orchestration is the act of performing coordinated operations across multiple systems.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=172)** Once a system is running, it can be disruptive to update it while it's in use.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=176)** An orchestration system keeps a registry of the systems you're running and allows you to coordinate deployments.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=182)** For example, by draining web connections and then taking a server out of a load balancer while you upgrade its application version and then putting it back into service, then you can repeat the process with the other servers.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=194)** The point is that the orchestration system needs to give you ability to roll out changes of any type while minimizing downtime and customer disruption.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=203)** Tools like Ansible and Rundeck let you construct workflows to operate on your system in an orchestrated manner.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=210)** And newer tools like Kubernetes promote different models of orchestrated deployments with containers.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=215)** Now these are the building blocks of configuration management using infrastructure as code.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=221)** But you may already be wondering how exactly to use them.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=225)** You know, which tools to use, when to use them, and if you should think of your system as long-running boxes where changes are applied in place or replace the boxes for each deployment.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=237)** Now, this is a great question, and there are reasons why you would choose one approach over the other, and we'll cover that in detail in the next two videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), [[Orchestration]] (4), cloud (3), [[Configuration Management]] (3), node (2)
> **CLI Commands:** node (2), make (1), apache (1), yum (1), ansible (1)
> **Prerequisites:** install (3)
> **Definitions:** known as (1), is a  (1)
> **Env Vars:** rpm (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)

#### Declarative vs. imperative
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=0)** - I declare that the system should exist.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=3)** - It doesn't work that way.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=4)** - Ah, but I declared it!
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=6)** - It's imperative we stopped messing around.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=9)** - Ah, I see what you did there.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=11)** - [Announcer] Declarative versus Imperative, fight!
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=14)** - There are two main options for how a configuration management system works: declarative and imperative.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=20)** In a declarative approach, developers specify the desired state and let configuration management determine how best to achieve it.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=28)** "Chef" and "Puppet" are declarative tools.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=30)** You say, I want this package installed and the recipes are written in a way where they'll check if the system is already configured, and, if not, it'll change it.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=38)** And it'll keep on running to try to get it that way if it doesn't take the first time.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=42)** That's called being convergent.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=44)** As, over time, the tool works on converging the system to the desired state.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=49)** The developer is less concerned with how it actually happens and usually has only to be concerned with the desired state at the end.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=57)** - Okay, so let's compare that with the imperative model.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=60)** In the imperative approach, developers specify the order of actions to be taken to achieve the desired result.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=67)** The imperative tools are more expressive and allow the developer to perform complex, conditional logic in the system.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=74)** Think of this as something like Ansible, Salt, Rundeck or even Shell script.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=79)** They're a lot more explicit about the resources they manage and they give the developer full control over how the system changes are applied.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=87)** - [Instructor 1] The declarative model specifies the desired in-state of the system; it specifies the "what" we want to happen.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=94)** - [Ernest] Whereas the imperative model specifies "how" the end-state is achieved.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=99)** - The declarative model is easier, because it allows configuration management to deal with all the details.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=104)** - You lie, I like having control.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=107)** - No, no, no.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=108)** Hear me out, Ernest.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=109)** Declarative tools are simpler and less error prone.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=112)** Things like Shell scripts don't really do a good job of checking to see if they needed to make a change in the first place, or testing to see if they made the change successfully.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=121)** - Well, that's the theory.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=122)** Declarative tools arose in the early days of DevOps to make configuration management less bespoke and more standard.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=129)** And they work well in desktop or lab environments where you don't really need control, you just want all the boxes to upgrade themselves at some point.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=138)** But how we use systems has changed and it makes declarative tools less suitable, now.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=143)** - What does that mean?
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=145)** - I'd say most of the large scale systems I've worked on in the last 10 years have been running applications that need more careful orchestration of their upgrades and changes.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=154)** Those declarative tools tend to have a convergent model of employment that says, "Well I'll try to upgrade these a hundred servers at no particular time, and if they fail, I'll just keep trying to get them into the declarative state, no hurry."
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=168)** If those applications are coordinated with a database change or serving trafficked customers that shouldn't be getting random old and new answers, that's a problem.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=178)** You need the the control of an imperative system, because they're easier to orchestrate.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=183)** - But if you do imperative provisioning, you're assuming those systems will always stay in your desired in-state.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=189)** You know, systems are complex and they change over time.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=192)** The actual state of the system will diverge from what the developer knows to be true, whether through the resource provider or even the OS package level.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=199)** You just can't know everything in your system, resulting in the developer's mental model about the system not matching the actual system state.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=207)** - You're right, it leaves the problem of drift detection to you.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=210)** - Okay, so you're on my side now.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=213)** - Well, maybe. The thing is, with the rise of VMs and containers, individual systems are less complex, now.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=220)** Instead of let's put a bunch of applications on one server, like we used to.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=224)** - Ah, yes.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=225)** The good old days.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=226)** I remember our app server cluster well with 30 Java applications on it.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=231)** - Yeah. I thought the pages would never end, but anyway, we have much less complex individual systems.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=238)** Often we'll maybe add a couple packages and then one app service, and then go.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=243)** With containers and serverless, often there's not even a need for any OS provisioning.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=248)** For these, a simpler imperative approach is way more understandable and testable.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=254)** - But what about your overall network?
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=256)** It's so easy to lose track of things if you're just making a single imperative change.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=262)** - True. The good thing about cloud infrastructure is that it has a single standard A-P-I to use to control it.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=268)** And then it's more of a solved problem to instantiate a declarative model.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=273)** For anything that has controlled APIs for deployment, orchestration and runtime, then yeah, it makes sense to go with a declarative approach.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=282)** However, if you're needing more control inside the box or system, for OS level packages, I find it better to think about that as an imperative model.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=291)** - Right on.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=292)** That makes sense to me as a good delineator, for those thinking about which direction to go.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=296)** That's what I see people doing, too.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=298)** A declarative tool like Terraform is the current favorite for infrastructure provisioning and then for systems, an imperative tool like Ansible, or even just a couple lines of Shell, if it's a container, it seems to be the lead option there.
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=312)** - It still seems like there could be a better solution, though.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=314)** Running the same installs on a thousand servers is just asking for some of them to break and it seems wasteful.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=322)** What if we could just build the entire system and then roll it out?
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=325)** Then the the systems themselves could be immutable and not need to change over time.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=329)** - Ah, the old tinfoil versus golden image debate is back.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=334)** - Did you say tinfoil hat?
>
> **[5:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=336)** - No, I wasn't saying tin foil hat, I was,
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=338)** - Join us in the next video to find out if immutable deployment is a better approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Configuration Management]] (4), [[Ansible]] (2), [[Orchestration]] (2), [[DevOps]] (1), database (1)
> **Speakers:** - ah (4), - it (3), - i (2), - okay (2), - you (2)
> **CLI Commands:** ansible (2), make (2), find (2), terraform (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)

#### Everything vs. immutable
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=0)** - Well, I know we just learned in the last video that imperative provisioning is best.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=6)** - I think you mean declarative.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=8)** - But there's an even better approach.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=10)** Immutable provisioning.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=12)** Everything versus immutable, fight.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=16)** - What do you mean, immutable?
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=18)** - Well, immutable deployments mean that pieces of your infrastructure aren't intended to be changed after deployment.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=25)** But instead are destroyed and recreated to affect changes.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=29)** - Well, that doesn't make any sense.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=31)** You have to change what's on your servers.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=34)** - Or do you?
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=36)** - Yes.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=38)** - Well, but remember all our new infrastructure options.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=41)** You can throw away an old server and create a new one in minutes.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=45)** At Netflix, for example, they popularized an architecture where you bake new Amazon images for every code change, and put whole squads of them into service to conduct a rollout.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=55)** - Yeah, but isn't that kind of course grained, replacing whole servers just to make a code change, or a security patch?
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=63)** - We've all had just a security patch brick systems.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=66)** This approach lets you build, test, and roll out your infrastructure change in a reasoned way.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=72)** Truly identical to a code change.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=74)** It also lets you perform more sophisticated rollout strategies, like blue green deployments and canarying, with your infrastructure, not just with your applications.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=83)** - I don't know, it seems like a lot of work to do all that creation and destruction.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=89)** Isn't it kind of, you know, wasteful and risky?
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=92)** - Most modern systems scale up and down as part of normal operation anyway, so it's largely the same mechanism which adds to reliability.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=100)** And having a CM tool try to make the same, complex software change across a hundred servers is a lot more work.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=108)** And the chance that it'll go wrong on one or more of them is, it's there.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=112)** If you do the install once, to immutable artifact and deploy that, you're actually doing a lot less work.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=118)** - Okay, I seem to remember a classic DevOps article by Luke Kanies, called Golden Image or Foil Ball.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=127)** That showed how hard it was to manage images and that you should use CM tools, though.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=133)** You don't want to cross Luke, do you?
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=135)** - Not me.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=136)** But with respect, it was true at the time.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=139)** But that was 2009, and most imaging was slow and not scalable.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=144)** I used Ghost to clone hard drives in the '90s too.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=147)** - Well, snap.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=149)** - But now tools like Packer let you stamp out version VM images, and Docker lets you stamp out version Docker images.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=156)** And the tools to manage them exist now.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=159)** Furthermore, like we've been talking about, the move to microservices and modern scaling tend to putting a limited load out on each given system, so that they're very specific in their role.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=171)** If you can track the compiled artifacts of your code you can track the compiled artifacts of your infrastructure.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=177)** - Okay, I see your point.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=179)** But, you can't just throw away your database, can you?
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=183)** What about things that need to be persistent?
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=185)** - True enough.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=186)** Although that just means you can't throw away your storage.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=190)** Plenty of people run redundant sets of database servers that you can roll.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=194)** MongoDB is great for this.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=196)** Or database engines in a container, that mount their storage on a separate drive.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=201)** - Okay, if your production environment is really immutable, how do you log in and make changes to fix production problems?
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=209)** - You're right, it takes a different approach.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=211)** Plenty of observability, so that you can figure out what's wrong, and then you fix the code and deploy a new version.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=218)** So you tend to be tied to your deploy pipeline.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=221)** It needs to be really fast and reliable to make this work.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=225)** - But where does it stop though?
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=226)** I mean, do you make your entire network one big thing that you just throw away?
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=231)** Or just the servers, or the containers on the servers?
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=235)** Where does it all end, Ernest?
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=238)** - That's a good question.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=240)** And it does depend on what you're doing.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=242)** If you try to deploy a very complex system, you've gotten yourself back into the problem that immutable building blocks has gotten you out of.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=251)** Netflix works at a giant scale, so they can just swing in a whole new VPC full of mostly identical systems.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=257)** Most people don't immutably deploy things like their base VPC network, but do use baked system images and containers and orchestrate from there.
>
> **[4:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=267)** Kubernetes is kind of the poster child for this.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=270)** You have a core node image and containers.
>
> **[4:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=273)** And then it handles deployment, scale up and down, replacement, and so on.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=278)** - Okay, I see where you're coming from.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=280)** It's just such a big change from what we all used to do in system administration.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=285)** - I feel you.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=286)** In the end, we're just moving up one level of abstraction.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=290)** In the old times, even single processes weren't always immutable.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=294)** But we quickly learned that for 99% of use cases you want processes that act just like each other.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=300)** And not to mess with them, expecting to spawn and kill them.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=304)** Now, changes to running processes is generally just a tell of a security compromise.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=309)** - Right, you know I always used to compile Apache myself on every server.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=314)** And when suddenly you could just install a pre-compiled Apache from a package, I wasn't sure what to think of it.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=320)** But it ended up saving me time and let me worry about higher level abstractions.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=325)** - And to be fair, you still have your same declarative or imperative choice.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=329)** It's just that action is taking place in the build stage, and you're just running the resulting immutable artifacts in production.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=337)** - Hornswaggled again, Ernest.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=338)** - And that's immutable deployment.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=341)** It's not the right thing for every case, but it has compelling advantages in a lot.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=346)** I might dare say the majority of cases.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=349)** Now stay with us.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=350)** We're done talking smack and we're going to hit the code.
>
> **[5:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=353)** And show you how to use real tools to implement all these concepts in our provisioning lab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (3), database (3), [[DevOps]] (1), [[Microservices]] (1), [[MongoDB]] (1)
> **Speakers:** - well (5), - okay (4), - i (3), - but (3), - and (2)
> **CLI Commands:** make (6), docker (2), apache (2), snap (1), node (1)
> **Env Vars:** vpc (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)


### 3. Bringing It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### Provisioning lab overview
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=0)** - In this chapter, we're going to walk through a lab environment built with a variety of infrastructure automation tools, working together to create a complete working environment.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=10)** This lab is not an end-to-end walkthrough of how to install and configure each of these tools and how to write Terraform code, Ansible playbooks, and so on.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=19)** There are entire courses here in the library that'll walk you through setting up and learning these tools.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=25)** Instead, our goal is to illustrate the concepts we've talked about in the previous chapters and let you see what infrastructure as code looks like and how it works in practice.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=35)** Now, having said that, if you want to try to follow along, we have a detailed guide on exactly how we set up our lab environment included in the class materials.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=45)** You'll need a Mac or Linux desktop system or a Windows system running Windows subsystem for Linux, or WSL2, installed.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=53)** But all you really need to do from your local system is generate an SSH key and SSH into a cloud server you create.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=61)** You'll also need an Amazon Web Services account with a credit card attached as we'll be spinning up a couple dollars an hour worth of infrastructure.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=69)** We're going to use an open source project called kubespray available on GitHub to create an AWS cloud infrastructure using Terraform.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=78)** Then we'll install Kubernetes on it using Ansible, getting it ready for us to install our own application.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=85)** I'll walk through the infrastructure setup and then James will walk through the application deployment options.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=90)** And we're not just making a play infrastructure.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=93)** We'll be creating a redundant infrastructure with appropriate network security in the cloud.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=98)** We'll take it step by step, though.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=100)** We'll do a separate video covering each layer.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=103)** Remember, the goal here isn't to become an expert in AWS or Ansible.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=107)** It's to understand the ways you can automate each layer of system set up and prepare to take proper advantage of infrastructure as code.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=116)** I'll see you back here to introduce you to the cloud, in this case, Amazon Web Services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (3), cloud (3), [[Terraform]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[Linux]] (2)
> **CLI Commands:** ansible (3), terraform (2), ssh (2), aws (2)
> **Prerequisites:** install (3), set up (2), configure (1), you'll need (1), setup (1)
> **Env Vars:** ssh (2), aws (2), wsl2 (1)
> **Tools:** github (1)
> **Speakers:** - in (1)

#### AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=0)** - [Instructor] Welcome to "The Provisioning Lab."
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=2)** If you already know how to use Amazon Web Services, you can skip to the next video, but I wanted to make sure that everyone's following along when we make our infrastructure in Terraform and go into AWS to inspect it.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=14)** Here, we're at the Amazon Web Services homepage, aws.[amazon.com](https://amazon.com).
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=20)** If you haven't created an AWS account yet, this orange button in the top right will offer you a "Create a new AWS account" option.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=28)** In my case, my Alexa's been listening to my every word and knows that I already have one, so it just tells me to log onto the console.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=36)** That's just a little joke, Alexa. Please don't hurt me.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=39)** So now, we're in the AWS console.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=42)** Most things you can do in here you can also do via the AWS Command Line Interface tool or the API, but it's easier to illustrate visually here, so we'll leave the CLI and API for later.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=54)** Remember, this lab isn't a full walkthrough of AWS, but if you've just signed up for an AWS account and you're logged in as the root account, you're going to want to go into Security Credentials, set up multifactor authentication on that account, create a new IAM admin account, I've made one called "emueller" that I've given administrative rights, and then log out as the root account, log in as your new IM admin account, set up multifactor authentication on that, and then you can set up the access keys that you're going to use to programmatically access your account over the course of the lab, but using the root account is the number one security risk in AWS.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=99)** You're going to want to lock that one away in a box for a rainy day.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=102)** The number two security risk is not having multifactor authentication set up on your accounts.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=107)** So, make sure and do those two things before we get started.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=111)** Here's the massive list of services available in AWS.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=115)** Everything from compute and storage and online databases, to fancier things like machine learning services, game development, all sorts of things, but what we're going to go look at is under Compute.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=133)** EC2, which stands for Elastic Compute Cloud, this is where you go to run virtual servers in the cloud.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=140)** So, there's only so easy that Amazon can make running a server, so you'll see here in the sidebar all sorts of options for manipulating images, storage, networking, security, and so on, but you can get started with just saying defaults.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=158)** So, I'm going to show you how easy it is to start a virtual server in the cloud.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=163)** First, go to this pop down in the top right and pick a geographic region that you want to run your server in and switch to that region in the console.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=173)** I'm going to choose Oregon because I hear that the data centers there are outstanding in their field.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=180)** (Instructor snickering) Okay, back to the console.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=185)** So, the Instances section is where you see any servers that you have running.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=190)** We don't have any right now.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=192)** So, I'm going to go up to "Launch Instances," which is going to open up our little wizard that they have for you to run a new server.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=202)** First thing, we're going to name it.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=204)** I'll just call it "Test Server."
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=207)** Next, you pick an image to start it from.
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=209)** There are all of the common operating systems represented, thousands of community-contributed images, and you can even create your own.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=219)** I'm going to pick Ubuntu 22.04.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=222)** Then, you pick an instance type.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=224)** This is essentially the hardware size of the virtual server you're going to make.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=229)** This can be anything from a tiny micro instance on through a bunch of larger options and then all the way down to giant, bare-metal instances with 48 CPUs and 384 gigs of memory.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=246)** This is running on my credit card, so we're going to go for the small one.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=251)** So next, I'm going to pick an SSH key pair to use to connect to the instance.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=256)** Now, I'm cheating a little bit because you have to create this locally and then import it, but instructions for that are in the lab materials.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=265)** Then, you set up any other options like network security.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=269)** I'm going to let us SSH in from anywhere to make it easy to connect, and then you have a bunch of other options, how much storage, advanced details, but I'm just going to take the defaults, and then we go over here and we say "Launch Instance," and it says it has started to launch it.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=290)** You can see it's impending state.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=293)** When you click on it, you can go in and see all sorts of other details, especially the public IP address that it's going to be available at.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=303)** Go check.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=303)** Sure enough, it made an eight-gigabyte disc for the storage.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=308)** You can look at your other security and networking settings, and look, it's already in running state.
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=316)** That is super quick, and to prove it, let's connect to it.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=320)** I'm going to connect to it from the console.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=323)** We could do it via SSH, but this is quick and easy.
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=330)** So, we'll connect in.
>
> **[5:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=331)** It's going to load up a virtual terminal here in the web browser, and here we are.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=338)** We are at the command line of our very own brand new Ubuntu server.
>
> **[5:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=345)** That's faster than it'd take you to look up Dell's phone number to order one.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=349)** Alright, so are you done with it?
>
> **[5:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=351)** Well, that's easy enough.
>
> **[5:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=352)** We'll go back here to the EC2 console, and you can stop and start the instance, which is like powering it down and booting it back up again.
>
> **[6:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=366)** While it's powered down, it's not incurring the charges for the actual virtual server, although there are still some charges for keeping the disc alive, but we're going to terminate it, completely destroy it.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=380)** So, it's going to warn us and say, hey, whatever you have on that disc drive is going to go away, and we say, that's fine.
>
> **[6:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=389)** It goes into shutting down mode, and then, in less than a minute, it will go in to terminate it and it'll be gone.
>
> **[6:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=397)** So, that's the cloud, and that's how quickly you can get compute resources, just as much as you need for just as long as you need it, which is perfect for automation.
>
> **[6:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=406)** So next video, we're going to build some infrastructure at scale with Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (10), [[Security]] (5), next (4), cloud (4), [[Amazon Web Services (AWS)|Amazon web services]] (2)
> **CLI Commands:** aws (10), make (6), ssh (3), terraform (2)
> **Env Vars:** aws (9), ssh (3), api (2), ec2 (2), cli (1)
> **UI Navigation:** go to (2), in the sidebar (1), switch to (1), click on (1)
> **Tools:** command line (2), aws console (1), terminal (1)
> **Prerequisites:** set up (4)
> **Cross-References:** next video (2)
> **URLs:** [amazon.com](https://amazon.com) (1)

#### Terraform
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=0)** - [Instructor] Time for some fun using Terraform for infrastructure provisioning.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=4)** First, let's look in our Amazon console.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=7)** Oh, look, under EC2, I've got a bunch of running servers prepared to become part of a Kubernetes cluster.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=13)** So, you've got some running cloud servers.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=15)** "So what?" you ask. We did that in the previous lab.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=19)** Well, the spiffy thing here is that these are all generated from infrastructure as code using Terraform.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=25)** Let's go look at that Terraform code.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=27)** I've forked an open-source project called Cube Spray to do this, and down in its contrib/terraform/aws directory, it has the Terraform code to make an entire Kubernetes cluster in Amazon.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=40)** So the first key item here is the terraform.tfvars file, and this holds common configuration parameters that you might want to tweak in a normal Kubernetes installation.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=51)** Note here that we've got 3 workers running.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=57)** Then the primary Terraform code is in create-infrastructure.tf.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=63)** As you can see, it details the parts of the infrastructure to create the VPC, the load balancer, starts getting into the servers.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=74)** Now, you'll note here that it's pulling in variables from our tfvars file, and then finally, we get to the piece that creates our workers.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=88)** It also refers to specific modules that hold more Terraform code.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=93)** So as you could see down here in the modules directory, there are little submodules of Terraform to do specific things.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=101)** This one creates the VPC, and so it has all of the little bitty details that are required to set up the networking in AWS.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=113)** This may seem daunting at first, but there are a great many preexisting Terraform modules out in the public Terraform registry, including ones to perform basic building blocks like this.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=128)** Now, spinning all this up takes a little while, so I've already run this Terraform.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=133)** Let's go back and see what it created again in the AWS console.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=137)** As you can see, there's a set of servers, a bastion, 3 master nodes, 3 worker nodes, along with all of the associated networking and security configuration.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=149)** Now, let's go to the system that I downloaded this code to and ran it on.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=155)** There, you can see the code that I showed you in the previous bit.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=159)** Now, the one difference here is that since I've already run the Terraform, it has something called a tfstate file.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=169)** The state file contains all of the details of what it actually created.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=175)** So every single asset that it made, it has all of the AWS details of what it did and what it believes are running.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=184)** You can also store this state remotely in databases or cloud storage.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=188)** You always want to do that for a production system, but for this, I'm just saving it here in our code directory.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=195)** So, let's change something and run some Terraform.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=199)** Right now, we have 3 Kubernetes workers that are all medium-sized instances, as defined in our tfvars file, but I need more power, so I'm going to add another server to increase the cluster to 4 worker nodes.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=216)** So all we have to do is edit this tfvars file, change the number of workers to 4, and we're going to save it.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=225)** Now, the first thing that we're going to do is run terraform validate.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=231)** That is going to look at the code and make sure it all looks well formed and we didn't make any terrible mistakes.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=237)** It tells us the configuration is valid.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=240)** So then we're going to run terraform plan.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=245)** Terraform plan goes out and actually dry runs this code and comes back and tells you exactly what it thinks it's going to change.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=256)** So here, you can see that the previous servers, it's not going to touch.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=270)** It's going to create a new server, Kubernetes worker 3, and then it's going to change the inventory file that it uses to keep track of things.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=281)** So this is how you verify that it's going to make the change you want, and it's not going to go affect anything that you don't want it to.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=289)** So all we have to do is run terraform apply, so, prepares to make the change, then it's going to show me the plan again and ask me if I am sure, and I say yes.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=304)** And away it goes.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=307)** Back over here in the AWS console, you can see that worker 3 has already started and is initializing, so we have a newly larger Kubernetes cluster.
>
> **[5:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=320)** Now, back at the command line, let's run terraform plan again.
>
> **[5:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=330)** It says our infrastructure matches the configuration, so our specification and reality line up.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=337)** So let's check in the tfstate file.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=347)** Sure enough, there is worker number 3, with all of the details about how it got set up inside of AWS.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=357)** And that's the real power of infrastructure as code.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=360)** You can spec out exactly what you want, have others review it, run it in a development environment, and then run it in your production environment with no room for manual error, both to create your infrastructure in the first place, but then also to precisely change it over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (19), [[Kubernetes]] (6), aws (6), cloud (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2)
> **CLI Commands:** terraform (19), aws (6), make (5)
> **Env Vars:** aws (5), vpc (2), ec2 (1)
> **Tools:** aws console (2), command line (1)
> **Prerequisites:** set up (2), required to (1)
> **Documentation:** specification (1), spec (1)
> **UI Navigation:** go to (1)
> **Definitions:** refers to (1)

#### Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=0)** - [Instructor] We've provisioned some infrastructure, but what about configuration management for the software?
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=5)** We made servers, but Kubernetes isn't just automatically running on them.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=10)** So now we're going to use the other part of kube spray, the Ansible playbooks, that actually install Kubernetes.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=17)** Let's take a look at one of the simplest playbooks included, the one that checks the Ansible version.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=24)** As you can see this playbook, it checks the Ansible version.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=27)** It does a couple other things like checking the Python and Jinja versions to make sure that, you know, it can run on this system.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=35)** So let's run it.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=37)** We run it with the Ansible Playbook command and we just feed it the playbook.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=47)** So it takes it, it runs it, and it performs all those commands.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=51)** And as you can see here, it's checked the Ansible and Python and Jinja versions, and they all pass.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=56)** So, it's good.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=57)** Now let's look at the main playbook, cluster dot yml.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=64)** You can see at the top, the first thing that does is include that Ansible version playbook that we just ran.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=71)** Then it goes on to set up the different kinds of hosts in our system.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=76)** And as you can see, the primary thing that it does is apply roles to them.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=83)** Each role, in turn, is defined by one or more playbooks.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=89)** Let's go take a look at the Bootstrap OS role that it's putting on most of these servers.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=100)** So here, down in the tasks directory, is where most of the code actually is.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=107)** Let's take a look at the Bootstrap Debian file because we've been setting up Debian servers for our Kubernetes.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=114)** All right, so in here it goes through all of the little things that it does to get each server ready and you know it's low level stuff, installing Python, adding other packages to it, doing a apt get update.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=131)** At the bottom level, there are either commands that Ansible knows how to perform, like package here is a Ansible keyword that says, okay, I know how to install a package on this operating system.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=144)** Go ahead and do it.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=145)** And then there are ones called raw which in the end says, execute this command line, right?
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=150)** So for something that doesn't fit neatly into one of the existing keywords, you just say raw and say what you want it to do.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=158)** All right, so let's talk about running Ansible on remote servers.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=162)** So first, let's look at the inventory file that our Terraform made.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=167)** If you'll recall, when we ran the Terraform, each time it would output this inventory file that has the host names and IP addresses of all the components.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=178)** This is so that Ansible can go and find them to do what it needs to do.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=183)** They're broken up into roles so that it understands which, you know, which servers have the control plane running on them versus being workers.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=191)** It should come as no big surprise to you by now that I'm a big old cheater.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=196)** So I already ran cluster dot yml to install Kubernetes across all the servers.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=202)** It takes a gruesomely long time.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=205)** So let's run kubectl, get nodes, and it shows that we've got three control plane nodes already set up with Kubernetes and three worker nodes.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=217)** But you may have noticed that in the last lab we used Terraform to add a fourth worker and we see it listed in the inventory file.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=229)** Right?
>
> **[3:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=230)** We've got four kube nodes here but we don't see it in Kubernetes.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=235)** Well, that's because we haven't actually installed the Kubernetes software on it.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=240)** So let's use a playbook that they use specifically for scaling up a cluster.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=245)** It's called scale dot yml.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=249)** So it's like cluster dot yml, but it doesn't have to do all the core cluster work.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=254)** So goes through, installs some things.
>
> **[4:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=257)** Notice how it's having to do a couple different iterations on the servers to get it working.
>
> **[4:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=264)** So it has to go install some prerequisites, then go install another batch of things, and install a third batch of things.
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=270)** And then at the end, we should have working Kubernetes on that remaining system.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=276)** So let's check out this Ansible command line that we're going to use.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=280)** So first we're saying use the inventory hosts file to figure out where all the servers are, use the scale dot yml playbook and then we have a number of parameters around how to connect to the other system.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=298)** So, let's run this command and have Ansible automatically go determine that one of the listed server nodes does not have the software on it and then install all the Kubernetes goodies.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=311)** So this is going to take about 15 minutes end to end.
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=316)** So I'm going to press the turbo button on my computer to skip to the end.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=321)** Alright, finally, we're back after 13 minutes and 35 seconds of installing.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=327)** Now that seems like a long time, but we installed literally hundreds of software packages, docker containers, and configuration items.
>
> **[5:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=336)** So let's take a look at Kubernetes.
>
> **[5:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=342)** And there is our fourth worker node ready to go.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=350)** And all of the default control plane and cubelets and all of that are set up and running and this Kubernetes cluster is ready to use.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=360)** So, that's Ansible.
>
> **[6:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=361)** You construct nested playbooks to build up all the software you need, and then you can execute them either locally or on remote machines.
>
> **[6:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=369)** You can even orchestrate complex workflows, like cube spray includes an upgrade cluster playbook that can perform graceful software upgrades on your cluster by coordinating and draining individual nodes and then doing an installation in a rolling manner, to do it without any application disruption.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=386)** By automating and testing your operations in this manner, you can perform identical operations across large numbers of servers with a high degree of safety.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (13), [[Kubernetes]] (11), [[Python (Programming Language)|Python]] (3), [[Terraform]] (3), [[Configuration Management]] (1)
> **CLI Commands:** ansible (13), python (3), terraform (3), make (1), apt (1)
> **Prerequisites:** install (7), set up (3)
> **Tools:** command line (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=0)** - [Narrator] Now it's time to look at Docker.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=2)** As we've talked about, Docker containers can be thought of as Micro VMs and they package all the software and application needs to run and nothing else, or at least that's the promise of it.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=13)** Well, let's start with a look at Docker Desktop.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=16)** Notice on the left hand side, we have containers, images, and volumes.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=19)** I'm clicking into images first and we don't have any images available at the moment.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=24)** We need an image to be able to run a container from that image.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=27)** So let's leave the desktop view and head on over to the command line and make our image.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=32)** Now I'm in the Word-cloud generator GitHub repository which is a GitHub repo and features a Go Lang web application I wrote for the LinkedIn Learning classes.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=41)** It takes text and turns it into, you guessed it, a word-cloud.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=45)** In a few minutes, we'll take a look at that, but for this video, we're putting word-cloud generator into a docker container and then when the container gets run, it will execute the application.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=55)** Before we build our image, let's look at how a Docker container gets built.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=59)** I'm opening up the project's MakeFile in Vim.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=62)** I'm typing Vim MakeFile.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=67)** There's an entry named Docker-Build.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=69)** In it, it has Build, Docker-build-Mac, and Docker-build-amd.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=74)** The one system dependency you have to remember is the underlying architecture of the box, like Intel or ARM and so on.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=81)** I'm building on an M2 Mac which uses an ARM 64 architecture but most servers are Intel or AMD based, which is AMD 64.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=90)** So we can use this Docker container in Earnest Kubernetes cluster.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=93)** In the next video, we'll use the Buildx Cross Architecture build tool to build it for AMD64 as well.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=101)** So let's get back to the build, it first runs build before doing any Docker steps.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=105)** It runs for Linux, Windows, and Mac.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=110)** Once we have our artifact for the word-cloud generator app, now we have to put it inside of a container.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=116)** For this, we'll be using Docker-build-Mac.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=118)** Docker-Build tells it which Docker file to look for.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=122)** It gives it a few tags and then it looks in the local directory.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=126)** So let's open up that Docker file and understand what it's doing.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=131)** I'm typing vim Dockerfile.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=135)** It starts with an Alpine Linux container, which is a very lightweight Docker container, which is roughly five megabytes in size.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=142)** That's awesome for us.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=144)** Next, it copies in our application artifact, the word-cloud generator app and it puts it in the op directory.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=151)** Next, it exposes a port and then it has this command here entry point.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=157)** The entry point command specifies what is run after the container is initiated.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=161)** This format is pretty standard for a containerized application with a single purpose.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=165)** Okay, so let's just build it and I'm going to run make Docker-Build.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=173)** Okay, that built my app and made a new Docker image and put it inside of it.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=178)** Let's go back to Docker Desktop and we can see our images that were created.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=182)** Notice there's only 12 megabytes in size.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=185)** Okay, so that's everything we need.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=187)** It's got the OS, the app.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=188)** That's everything we need to run in that small container.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=191)** It's pretty cool and it's very lightweight.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=194)** Now, I could run it right from the desktop but let's go back to the command line again.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=198)** In my make file, I have Make-Docker-Run.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=200)** I'm going to call that right now.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=204)** Okay, so notice what it did here.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=206)** It started Docker and it put it on port 8888 and it mapped that port externally for that.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=211)** We can go see that in Docker Desktop again.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=214)** Okay, look, there's our container.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=216)** We can see it running.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=217)** It's running on port 8888.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=218)** Let's check it out.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=221)** Okay, we're on local hosts, port 8888 and I'm going to go ahead and paste in a few hundred words from the Lorem Ipsum text generator and let Word-cloud generator just do its thing.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=237)** Okay, great, it's all working.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=238)** Now we have our application.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=239)** It's in a container, it's running locally, everything's good, but we want to share our image with other people.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=245)** So let's go back to the command line and let's do just that.
>
> **[4:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=250)** I have another entry in my make file called Docker Push.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=252)** That puts the image that we made into Docker Hub, which is a public docker registry that people can use to share images.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=258)** As we mentioned earlier, we'll push both the Mac and the Intel based images so we can use them in multiple architectures.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=265)** So I'm going to type in make Docker-push.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=272)** Okay, great, got all the Docker containers pushed up there.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=274)** Let's go take a look at Docker Hub.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=276)** So I'm on Docker Hub and I can see all the containers that just got pushed up.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=280)** And this is the admin interface since I own it and we can see what it looks like to the public.
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=289)** And here are the containers that would look like for someone that wanted to download it.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=294)** So let's recap.
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=295)** We have our web application bundled in a very small Linux container that is invoked on startup and runs.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=301)** We then told Docker to run that image and bind it to a high port and then we ran against it and saw it in the browser, but it's ephemeral and we could have just run a script or a task and then asked it to exit.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=311)** Well, we forced it to stick around and wait until we were done with it because we're using it as a web application.
>
> **[5:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=317)** Then we shared our container with the world on Docker Hub.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=321)** Okay, that's a quick tour of what you can do with Docker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), cloud (6), application (5), web application (3), next (3)
> **CLI Commands:** docker (31), make (6)
> **Tools:** docker desktop (3), command line (3), vim (3), github (2)
> **Env Vars:** arm (2), amd (2), amd64 (1)
> **Cross-References:** go back to (3), in the next (1), we mentioned (1)
> **Ports:** port 8888 (3)
> **Definitions:** is a  (3)
> **Exercise Files:** github repo (1)

#### Helm charts
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=1)** - [Instructor] Now that James has told you about Docker containers let's get an application deployed onto our Kubernetes cluster.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=7)** It's sitting here empty except for all the default services.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=12)** Very lonely.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=13)** So we could do this by hand, but we're not animals, right?
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=16)** This is an infrastructure as code course.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=18)** So we're going to use IAC to deploy our applications as well.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=22)** In the cloud native ecosystem, Helm charts are a popular way of deploying applications.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=28)** This is the Helm homepage, helm.sh.
>
> **[0:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=30)** Here you will find a lot of documentation and resources to help you along your Helm journey.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=36)** I've already installed Helm on this server, but the instructions to do that are in the course materials.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=44)** Now, there are a lot of Helm repositories out there with ready to use charts already.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=49)** Here. I've added the Bitnami repository to our local.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=55)** And then we can search this repository to see what all it has in it that we can use.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=62)** And as you can see, there are a lot of Helm charts in here for open source projects.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=67)** Everything from Airflow and Apache, down to WordPress and Zookeeper.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=73)** So let's download one and take a look at it.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=76)** Let's say the Nginx web server.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=79)** We can do that with helm pull, and then the name of the Helm chart.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=90)** All right, so it downloads it as a TAR zipped file, so we will unpack it.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=100)** So now if we go into our Helm chart directory you could see a number of files.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=107)** So the values.yaml is very similar to the terraform.tfvars file in that this has a bunch of top-level settings to describe how you want to configure your Nginx server.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=127)** It has a whole bunch of them because even a simple thing like a web server, you can set a lot of different things.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=137)** Then inside the templates, here you have a file for each kind of Kubernetes component that has to be generated to deploy Nginx.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=150)** So it has here the configuration to make a deployment and to make a service and to make a ingress controller, all that good sort of thing.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=161)** So let's look at deployment.yaml.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=167)** All right, as you can see this, it looks like a normal Kubernetes deployment but it's full of all sorts of both including variables and doing conditional logic on variables.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=181)** But you're probably feeling froggy by this point.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=184)** Who wants to deploy something pre-existing again?
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=187)** So let's forget Nginx, and let's make our own Helm chart.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=192)** And we'll use it to deploy James' word cloud generator application.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=197)** So Helm can create a stub chart for us.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=201)** Let's ask it to create one called wordcloud.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=210)** All right, we go into the wordcloud Helm chart directory and it looks like a stripped down version of the Nginx one, which is actually exactly what it is.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=222)** So doesn't have all the bells and whistles but it's essentially just deploying a Nginx web server with all the components required to do that.
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=234)** So let's change this to do what we want it to do.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=239)** So instead of installing Nginx, we're going to change that to get James' word cloud generator.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=252)** And let's see, let's go ahead and change the replica count to three so that we can have three of these running instead of just one.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=263)** And then to make sure that we can expose it to the internet we're going to go down here to the service and we're going to change it to a load balancer.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=276)** And you may recall that James' container listened on port 8888.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=283)** So that's what we'll go ahead and set.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=287)** And then you know how James mentioned the different architectures?
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=291)** So he uploaded a couple different versions of this word cloud generator.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=298)** And so we're going to pull the tag for latest-amd64 so that we make sure and get the AMD architecture version of it.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=309)** All right, we're done with that.
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=312)** So first we're going to ask Helm to check our syntax, make sure we didn't mess anything up.
>
> **[5:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=318)** My typing isn't what it used to be.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=321)** And it says it's fine.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=322)** It recommends us setting an icon somewhere but we can ignore that.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=327)** And now we're going to essentially dry run this, have Helm exercise it and see what it thinks it's going to do.
>
> **[5:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=335)** So for that we're going to use helm template --validate --debug wordcloud.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=346)** So it's going to parse the Helm chart and say these are the different things that I'm planning on creating based on what you said.
>
> **[5:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=353)** You know, this deployment, this pod.
>
> **[5:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=358)** And it all looks pretty good to me.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=360)** So we're going to tell Helm to go ahead and do this.
>
> **[6:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=364)** So with that, we use helm install.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=367)** We're going to call our application wordcloud.
>
> **[6:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=371)** We want it to pull the Helm chart from our little wordcloud directory that we have here.
>
> **[6:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=376)** and we're going to specify the file to get the values from which is of course, inward cloud, it's our values.yaml.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=386)** Then we run that.
>
> **[6:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=388)** And so it's going and installing the Helm chart on our Kubernetes cluster and then creating all of those different assets.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=396)** So now if we do a helm list, it says hey I have an application called wordcloud that the revision 1 has been deployed.
>
> **[6:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=406)** So let's take a look.
>
> **[6:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=411)** All right, we have three running pods.
>
> **[6:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=414)** We have a load balancer.
>
> **[6:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=417)** And we have a deployment and a replica set.
>
> **[6:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=419)** So that seems good.
>
> **[7:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=421)** Let's check it out.
>
> **[7:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=423)** So this is the name of the Amazon Elastic Load Balancer that it created.
>
> **[7:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=428)** This should be accessible from the internet.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=431)** So first, let's quick check it from local.
>
> **[7:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=436)** We're going to curl just the headers.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=442)** And don't forget, we need the port 8888.
>
> **[7:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=448)** Ah, and we're getting a response.
>
> **[7:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=450)** That's nice.
>
> **[7:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=452)** So now let's get fancy and try running this in a browser.
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=461)** All right, so I'm using Google Chrome.
>
> **[7:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=465)** We're going to put in that ELB address with port 8888.
>
> **[7:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=471)** And it looks like we've got his word cloud app.
>
> **[8:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=484)** A word cloud.
>
> **[8:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=486)** Outstanding.
>
> **[8:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=488)** And there we go.
>
> **[8:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=489)** A working application live on the internet set up with resilience in a Kubernetes cluster.
>
> **[8:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=494)** And we built each layer using infrastructure as code.
>
> **[8:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=499)** One parting note, you've seen how much the community is already created out there in GitHub, Docker Hub, the Terraform Registry of Modules, Helm repositories, all great learning resources.
>
> **[8:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=511)** Don't just copy and use things blindly, but don't be afraid of reusing and eventually contributing to these high quality community assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Helm]] (23), cloud (7), application (5), [[Kubernetes]] (5), [[Microsoft Word|Word]] (5)
> **CLI Commands:** nginx (7), make (7), docker (2), terraform (2), find (1)
> **File Paths:** values.yaml (2), helm.sh (1), deployment.yaml (1)
> **Env Vars:** iac (1), tar (1), amd (1), elb (1)
> **Prerequisites:** configure (1), required to (1), install (1), set up (1)
> **Ports:** port 8888 (3)
> **Tools:** github (1)
> **Exercise Files:** template (1)

#### Serverless
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=0)** - [Instructor] Now let's talk Serverless.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=3)** We don't have to mess with setting up all the infrastructure in boxes, and we can just get our code up and running.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=9)** For this, let's use the Serverless Framework, which is free to use for open-source projects, but it does have a subscription model for organizations.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=17)** Your provider might also offer one as well.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=20)** So like for AWS, check out the Serverless Application Model, or AWS SAM.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=25)** So I've logged into my account on Serverless, and I'm going to create a new application.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=29)** I'm just clicking Create App.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=32)** Now, there's a lot to choose from here, from taking an existing application into the Serverless Framework or starting a sample application from scratch.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=41)** I'm selecting to create a Node Express API application.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=44)** But as you can see, there are a lot of options for setting up the data stack as well.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=48)** All the components you need to run your application can be configured with the framework much like Ernest showed with Terraform.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=59)** Now let's give our Serverless app a name.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=61)** I'm going to type in "infra-as-code-demo" and I'm going to go ahead and click Create, and that gives us a command that we need to run.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=71)** So I'm going to take this and head on over to the command line and I'm going to run that command.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=78)** Notice it's getting everything set up and then it says, "Do you want to deploy now?"
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=81)** Let's go ahead and do that.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=83)** Now it starts building out the cloud formation stack so it can set up all the services that it needs to connect to.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=90)** Once it's all done at the end, it's going to give us a URL.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=93)** Let's go test it out.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=97)** So in my browser, I just sent an HTTP GET request and this is what I get back.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=102)** "Hello from root!" So kind of a default message here.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=105)** Let's head back to the command line and look at the code for the application.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=108)** So I'm moving into the infra-as-code-demo and we can see the serverless.yml.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=114)** Let's take a look at that.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=118)** In here, we can see that the handler that gets called is the index.handler.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=122)** And let's go ahead and open up the the index here.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=126)** So I'm inside of the index.js and we can see the response that we just saw in the browser.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=131)** It says "Hello from root!"
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=134)** Let's move over to AWS.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=136)** I've logged into the admin console and now we have an application in the AWS Lambda Section here that says "infra-as-code-demo-dev-api."
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=147)** Once I click into it, I can see that I have my API Gateway, which is the thing that receives the HTTP traffic, and then it's sending it over to my infra-as-code-demo Lambda function.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=160)** That's the really cool thing about using the Serverless Framework.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=163)** It sets up the gateway and it connects it automatically using the CloudFormation templates.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=167)** Pretty cool, right?
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=169)** In here, we can monitor our function.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=172)** We can see different metrics for how things are going with our Lambdas.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=176)** We can look at log events and we can see our recent request that we just made.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=182)** And remember, Serverless is billed in time that it's in use.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=186)** This is usage-based billing.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=189)** That's great because you're only paying for that execution time.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=192)** And if you have an infrequently used application, you aren't paying to keep a box up and running or multiple boxes up and running all the time.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=199)** Okay, now I'm going to switch back to the command line and let's change what our app does and give it a new message for that HTTP GET.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=206)** So I'm just going to say, "hi LinkedIn Learning!"
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=211)** And we're going to write that.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=212)** And now we're just going to say "serverless deploy."
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=217)** And we use a little video magic there to speed that up.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=220)** And now let's go back to our URL.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=225)** And now we get our message "Hi LinkedIn Learning!"
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=228)** So to recap, we use the Serverless Framework, which configured and deployed a Lambda and an API Gateway.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=235)** There are templates for much more, as you saw.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=238)** We had a running app in just a few lines of code and it had ability to scale horizontally to handle hundreds, if not a thousand requests at the same time.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=246)** Big bursts of traffic can be handled this way.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=249)** And we did all this without creating virtual machines or Kubernetes pods or any infrastructure.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=254)** We tapped into our provider's services and we get usage-based billing on top.
>
> **[4:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=259)** This means you have fewer things to maintain, fewer things to have security vulnerabilities, and, at medium to low volume, you usually have lower costs.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=269)** So I hope you enjoyed this quick look into Serverless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), aws (4), api (4), traffic (2), [[LinkedIn]] (2)
> **Env Vars:** aws (4), api (3), http (3), url (2), sam (1)
> **CLI Commands:** aws (4), node (1), terraform (1)
> **Tools:** command line (3)
> **File Paths:** serverless.yml (1), index.js (1)
> **Cross-References:** go back to (1), as you saw (1)
> **Prerequisites:** set up (2)
> **API Endpoints:** get  (1)


### 4. With Great Power Comes Great Responsibility

[↑ Back to Table of Contents](#table-of-contents)

#### What is infrastructure as code?
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=0)** - By now in the course, you've seen how our ability to use infrastructure as code is influenced by the kind of systems we're automating, whether cloud or virtual machines or containers or serverless.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=12)** - We've also walked through some examples using technologies like Docker, AWS, Kubernetes, and Terraform.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=19)** But we really haven't addressed the implications of infrastructure as code.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=24)** - What is this tangled web you weave, James?
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=26)** - No, no, hear me out, Ernest.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=28)** Yes, we've seen our infrastructure in code but there are a set of principles and practices that result from treating our infrastructure as code.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=36)** - Okay, I'll allow it.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=38)** - In the next few videos, we'll cover how treating infrastructure as code means we can do all the things that we can do for application code, but for our infrastructure.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=47)** - In the "Infrastructure as Code" book by Keif Morris, he defines infrastructure as code as an approach to infrastructure automation based on practices from software development.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=58)** The emphasis is on consistent repeatable code for provisioning and changing systems and their configuration.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=66)** - So far, we've shown you how everything in your infrastructure can be controlled by code and represented in code.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=72)** But what does it mean to be treated as code?
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=75)** - We have a saying in DevOps, servers should be cattle, not pets.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=80)** You don't handcraft them and cater to their unique needs.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=84)** You mass produce them using a standard mechanism, kill them and get more.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=89)** Leave the cool customizations for the back of your laptop.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=92)** - So infrastructure as code is about adopting a development approach to your infrastructure and it's a cultural change more than a technical one.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=101)** - It's hard to wean yourself from the tendency to log into the server and change it but you'll have to.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=108)** Like fixing a code bug, you'll change the code, build it, test it, and deploy it.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=113)** - When Ernest and I first worked together.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=115)** - At the dawn of computing.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=117)** - Yeah.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=118)** It was on a web team without any build automation.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=122)** Creating new systems was a 100-item manual checklist.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=126)** System changes and app deploys were done manually during releases and documented in one of those write-only change management systems that, you know, enterprises love.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=135)** - So after a while, the configuration of any given box was totally unreproducible.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=141)** Boxes that should have been identical weren't and troubleshooting the many production issues was a time consuming and difficult job.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=148)** - Some weeks of on-call rotation, I would get like hundreds of alerts and pages of all these problems in a really complex environment.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=156)** - Yeah, we lost at least one pager from an on-call pager rage incident for sure.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=161)** - That wasn't me, you know, but so later when we formed a new team that we were building cloud-based SaaS products, we agreed that our first priority had to be the implementation of a model-driven system that we would use to create and operate our systems and applications.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=177)** Even though, you know, we knew it was going to take more time to get going.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=181)** - We built a tool that would simply take models that devs and ops collaborated on in source control, instantiate them in the Amazon and Azure Clouds, deploy code and dynamically hook up services to each other in a pre-production environment first for testing naturally.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=197)** - The difference was amazing.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=199)** Suddenly operations became a nine to five job and even our time at work was, you know, focused more on design and implementation rather than in firefighting and doing manual changes.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=211)** - In treating our infrastructure like it was code was the secret sauce that made it work.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=216)** - Now, over the next few videos, we discuss how that works in practice as we touch on version control, artifacts, testing, using CI/CD and organizing our teams around the patterns and principles that developers use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Infrastructure as code (IaC)|Infrastructure as code]] (7), cloud (2), web (2), next (2), [[Automation]] (2)
> **Speakers:** - we (3), - in (3), - so (3), - yeah (2), - by (1)
> **CLI Commands:** docker (1), aws (1), terraform (1), cd (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)

#### Continuous integration for infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=0)** - In this video, we'll talk about the pipeline you'll set up for your systems to take them from code to artifacts to running system.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=8)** Here's an illustration of a continuous delivery flow where code gets checked in, built, goes through successive levels of testing and finally gets released to your production environment.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=19)** But why do you want to do this?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=21)** Well, this process does a couple of things.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=24)** First of all, it isolates changes.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=27)** If you check in small batches of changes and build and test each one, you know when something goes wrong.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=33)** It also lets you trace back a specific deployment to a specific build, to a specific code change as opposed to having to make any changes in the environment by hand.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=44)** The day of live code changes on production servers is mostly over and so it should be with infrastructure.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=51)** So how do you do this?
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=54)** First, you'll want to use source control.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=56)** If you're not experienced with it, it's easy.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=59)** We'll use Git in this course, and there's courses in the library to show you the basics of Git.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=64)** Every time you check in code, a trigger fires and the build system goes to test and build and test it some more.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=72)** Like application code, you'll want to have tests for your infrastructure code and the actual running infrastructure.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=78)** It's such an important topic itself that we'll cover it in depth in the next video.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=82)** And then the build.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=84)** Code usually gets compiled, parsed or even bundled up into what we call artifacts.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=89)** Artifacts are versioned, unchanging sets of code that get tested and deployed.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=94)** For infrastructure artifacts, you usually see ZIP files, Debs, RPMs, Docker images, AMIs, or VMs.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=102)** There are some very cool new options worth checking out though, like the Nix package manager that's designed to let you make declarative reproducible packages and web assembly or WASim, a format for a stack-based virtual machine that's a portable compilation target for all kinds of languages.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=121)** One of the co-founders of Docker says they wouldn't have needed to create Docker if WASim had existed back then.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=127)** There's no single right answer.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=129)** They all have advantages or are necessary for different scenarios, but deciding what your artifacts are and how to manage and version them is very important.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=140)** Here's a reference architecture of a DevOps service delivery platform showing the flow from source repo to build and then to artifact repo, and then out into production.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=151)** You may have multiple layers of artifacts, and that's okay.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=154)** For example, one team might build everything into OS packages for their Java and Python applications and leverage built-in dependency management.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=162)** Then as a second layer, they might build VM images and AMIs using Packer and build Docker images directly with Dockerfiles containing applications deployed from that first tier of artifacts.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=174)** And this is usually controlled through a build system like Jenkins or Bamboo or something similar.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=181)** To store artifacts, it's common to use Artifactory or Nexus or a container registry but I've seen it all with some people just keeping it simple and using a cloud storage bucket.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=193)** The last step is deployment.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=195)** Here's an example of that previous artifact flow with a specific tooling that Ernest used over at AlienVault for their continuous integration pipeline.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=203)** AppCode and Java and Bash, infrastructure code and CloudFormation and Puppet all checked in to Bitbucket source control, and using Maven and the Bamboo CI product.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=215)** Artifacts such as AMIs, VMware images and Debian packages go into Artifactory.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=222)** And then a continuous deployment job in Bamboo runs the Rundeck orchestration system to deploy production via Puppet and Terraform.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=231)** All together, that formed a comprehensive app and infrastructure service delivery solution.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=236)** And that's the basics of continuous integration for infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Java]] (2), [[Continuous Integration (CI)|Continuous integration]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1), application (1)
> **CLI Commands:** docker (4), make (2), git (2), python (1), terraform (1)
> **Tools:** bash (1), bitbucket (1)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** zip (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### Testing infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=0)** You can test more of your code without having to use or make real infrastructure by using mocks, which is a testing term for code used to replicate the behavior of an external system so that you can safely run unit tests without affecting your real one.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=15)** Terraform version 1.6 introduced a standard Terraform test framework, and then version 1.7 introduced a mocking framework.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=24)** Using it, for example, you can ask Terraform to substitute a mock Amazon Cloud provider for the real provider.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=31)** Then when you run Terraform test, it runs your code using the mock.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=35)** So it doesn't need real AWS credentials or access to the cloud.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=40)** Instead, Terraform pretends to make the requested resources and you can validate that your code, at least logically, works the way you want it to.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=50)** This is faster and safer, but less comprehensive than using Terraform plan, which does need real AWS credentials and reaches out to the cloud to evaluate what it intends to do, although without actually creating anything.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=64)** Terraform test also supports running Terraform plan and defining assertions to test that the plan output looks the way you expect.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=72)** This is a stronger test, but slower and requires real credentials.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=78)** If you're using Terraform version 1.6 or newer, you can use the new official Terraform test framework I mentioned previously.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=86)** In a test file, which uses the same syntax as normal Terraform code, you can specify whether you want Terraform test to just run Terraform plan or actually run Terraform apply and make real infrastructure in a test environment.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=103)** Let's say you've written a Terraform module that can make an S3 storage bucket in the Amazon cloud.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=109)** Here's an example of a test file that exercises that code, spins up a real bucket with Terraform Apply, and runs an assertion to test whether there's a real bucket with that name in AWS.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=122)** Terraform Test will then destroy the test infrastructure at the end of the test run.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=127)** That's a very thorough test, but it takes time and expense to perform.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=132)** Other IAC tools and languages have different testing specifics, but the concept's the same.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=138)** First, validate code logic as much as you can without touching real infrastructure in unit tests, and then create real infrastructure in a test environment and validate it in integration tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Terraform]] (17), cloud (4), aws (3)
> **CLI Commands:** terraform (17), make (4), aws (3)
> **Env Vars:** aws (3), iac (1)
> **Versions:** version 1 (2), version
1 (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)

#### Works on my machine
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=0)** - Hey, Ernest, your newest code change ended up crashing Docker in production.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=5)** - Well, it worked on my machine.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=7)** - Ah, you say that like that's a legitimate excuse.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=12)** It's all right.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=13)** You know, believe it or not, deployment is a necessary step in your work, bringing actual value to users.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=18)** - It's the D in CI/CD.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=21)** - And in an infrastructures code world, it's code two and it needs testing.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=26)** - What you really want is reproducible infrastructure that works across all your environments with repeatable results from dev to test to production.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=35)** This assures you that behavior will be the same as you expect during your development.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=40)** - Yeah, that's right.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=41)** If you can have repeatable deployments then you can do rollbacks, you can do roll forwards with your infrastructure and not just your application code.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=49)** Because as much as we like to think they're independent, they're not.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=52)** - And then you can reproduce environments for troubleshooting and experimentation.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=57)** - Okay, but how do you do it?
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=59)** Environmental differences have always been a sad fact of life for decades.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=62)** Everyone knows that they're supposed to have identical tests in production environments but usually they're just somewhat similar at best which leaves room for new bugs to show up.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=72)** - Three steps, step one, versioned artifacts for your code and your infrastructure code.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=78)** - And step two, use that code to make a production-like environment in each phase of the dev cycle.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=84)** - And step three, have a mechanism to deploy it in an identical manner in each of those environments.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=90)** - Okay, let's talk about artifacts.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=92)** This just means you package up and version your code like every library that's out there.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=98)** - It can be an actual bundle like an RPM or Debian package, or even just a GIT revision.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=104)** But the key thing is it can't ever change.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=106)** It needs to be constant once generated and then used in each environment.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=110)** James talked to you about artifact generation just a couple videos ago.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=114)** - Ah, you remembered.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=116)** - Oh, I wouldn't forget it, bro.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=117)** - Ah, thanks.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=118)** Well, next identical environments.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=121)** If you're generating your environments from this disc code, most sources of difference are from people making compromises.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=127)** - While you often do have to compromise on scale a lot of the schemes I see to try to save money on dev and test environments end up being penny wise and pound foolish.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=138)** Yes, it can be more expensive to spin up servers in the same cloud providers, your production environment, you might need to buy that Oracle license or pay for that Datadog monitoring, but the fact that you're paying for that stuff in the first place means the business thinks your app is worth it.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=154)** So behaving in a way that's guaranteed to make it slower, riskier and buggier to change that app, usually not a great idea.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=162)** - Yeah, of course, being perfectly identical can be hard.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=165)** You know, scale and traffic differs at least but your code shouldn't.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=169)** Externalize things like URLs to configuration so you can configure your different environments in a way where they should at least behave the same.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=178)** Even the developer's desktop can get close.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=180)** There's a lot of tools like Vagrant, Docker, Compose and Minikube that improve alignment even before you hit an external environment.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=188)** - And finally, the deployment.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=190)** Deployment is code just like all the rest of this.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=194)** So however you deploy your app in production is how it should be deployed in pre-production.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=199)** This will prove to you both that your deployment code works and that the application and infrastructure components behave correctly when deployed.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=208)** If you have stable versioned artifacts, generate your own identical environments and deploy with the same code in each place, you've gotten to a pretty darn good situation.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=219)** - Yeah, well, you know, back when Ernest and I were working at National Instruments, we did a lot of manual deployments of Java apps across a cluster of app servers.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=228)** It was slow and it relied on manual instructions from developers.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=231)** A lot of the time the instructions weren't right and even if they were then we'd sometimes make a mistake on one of the servers.
>
> **[3:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=239)** We wrote a simple deployment script that they had to use in the dev and test environments before we used it in production.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=245)** And suddenly speed of deployment shot up and post-deployment bugs shot down.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=251)** - And that let us get to step four, profit.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=254)** - Profit?
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=255)** - Well, or at least we had to do less off hours work.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=258)** - Okay, I'll call that profit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), ci (1), cd (1), [[Troubleshooting]] (1), [[Git]] (1)
> **Speakers:** - and (6), - ah (3), - yeah (3), - okay (3), - well (2)
> **CLI Commands:** make (3), docker (2), cd (1), git (1)
> **Env Vars:** rpm (1), git (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### You write it, you run it
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=0)** - Now that we're doing our infrastructure as code, this ends up having more implications on how we work.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=6)** - That's right.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=7)** You're now developing both your app code and your infrastructure code and testing and deploying it identically.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=13)** - But what does that imply about how we support it in production?
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=17)** - This may not be a surprise if you've taken our DevOps foundations course or it's follow up DevOps Foundation site Reliability Engineering.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=25)** But it's a shared responsibility.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=27)** - Yeah. We always think our code is going to work right in production, whether that's app code or infrastructure code, but even if it does upfront things change.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=36)** You get more users.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=37)** They start using your app in different ways.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=40)** - Someone needs to handle the problems and figure out what's going wrong.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=44)** And the best person for that job is you.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=47)** - Yeah. As the person who wrote the code you're the one most able to support it and change it.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=53)** Throwing it over the wall to someone else tends to make both someone less familiar with the code figure out the problems which they're naturally less positioned to do and it hides the problems from you, the person who can actually fix the problems at their core.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=67)** - Avoid passing the responsibility to someone else.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=70)** By handling your own production environment, you're making the most effective feedback loop possible from problem to fix.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=77)** Note that Google's SRE model for taking all over our operations from a product team, it's only used for apps with very large user bases that have proven themselves stable and have monitoring and tools in place sufficient for the SRE team to agree to take it on.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=93)** Short of that, it's best practice to run it if you wrote it.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=98)** - So how do you do that?
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=99)** Well, first you want to take a team approach with however many other teams are contributing code to that environment.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=106)** - [Host] Put together good observability to monitor the system and discern what's going wrong.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=111)** - [Host 2] Have a practiced incident management process that makes handling problems routine and less stressful.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=117)** - When there's a problem prioritize coding and testing a real fix.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=121)** Don't just keep putting out the fires each time they happen.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=125)** I mentioned that AT&T Cybersecurity SaaS product that I worked on.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=129)** We had a complete CICD pipeline.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=131)** They rolled out infrastructure code and app code.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=134)** We had loads of monitoring and could route issues to the right team pretty reliably.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=139)** - Now, what did you do for problems where it wasn't clear what was wrong?
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=143)** - In most places I'd worked up until then operations was always the first line of response for production issues.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=149)** But in this case, the majority of them were being caused by our app code.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=154)** So we put the developers on call first and let them escalate to an operations engineer if they needed one.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=160)** That reduced overall off hours time spent, and it meant that very actionable improvements could get put into the product backlog.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=167)** - But didn't your product people object to that work interrupting their precious future development time?
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=172)** - Not at all.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=173)** The product people wanted the product to work right as much as anyone and were happy for us to prioritize reliability work, especially when we had such direct data to prove the results it would have generated by people knowledgeable with the code.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=187)** We called it eating our own dog food.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=190)** - Ah, some people like to say, drinking your own champagne.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=193)** - That's 1% or nonsense.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=195)** I work for a living.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=196)** - Okay, Ernest.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=197)** All right.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=198)** All right. Look, there, there.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=200)** Let's get you a nice nap and then we'll be back for a video on running the rest of your operations as code two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (6), [[DevOps]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (1), [[Engineering]] (1), [[Google]] (1)
> **Speakers:** - now (2), - that (2), - but (2), - yeah (2), - this (1)
> **Env Vars:** sre (2), cicd (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### Automate all the things
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=0)** - Okay, so we're done now.
>
> **[0:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=2)** Our infrastructure is code, and so thank you for joining us in this course.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=6)** - Well, hold on, so it depends what you mean.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=9)** There's your applications and your infrastructure, but people may be forgetting about some other pieces.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=15)** What about your monitoring, your runbooks, your documentation, your API definitions, your SaaS integrations?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=21)** - Well, you know, I thought I'd just, you know, click around and set all that stuff up manually.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=26)** - Have you learned nothing?
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=28)** - Well, you know, seriously, now that you have big parts of your system as code, look to see what else you can codify.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=35)** - All these things are part of your system, and they're all in scope in terms of reliability, performance, and security.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=41)** - The application boundary isn't just the code anymore.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=44)** All the benefits you get out of infrastructure as code, the testability and repeatability, you want all that in all the other pieces of your system.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=52)** - The great thing is infrastructure as code has been made possible by the rise of APIs, so you can program to them to create your infrastructure.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=60)** Well, the majority of your SaaS providers and tools also have APIs nowadays.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=65)** - [James] Yeah, for example, instead of setting up monitoring dashboards by hand, you can define them in code and then load them into tools, like Grafana or DataDog.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=74)** - [Ernest] Same with your support runbooks.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=76)** Version them and then deploy them from an artifact.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=80)** - There's plenty of tooling nowadays to help you generate documentation from your code as well as information on what can be monitored or manipulated.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=87)** Yeah, these are all, at their heart, version code as well.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=91)** - Then apply all the same principles we've talked about here to them.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=95)** Deploy your monitoring setup via API in your pre-production environments as well as your production environments.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=101)** This makes sure your monitoring runbooks and so on are always linked to the right version of the apps and infrastructure they were designed for, and it lets you test them as well.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=111)** - Yeah, I wish I could say I've never seen monitoring cause a production outage, but I have.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=116)** - That's right.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=117)** The pattern of define, build, test, deploy is a best practice for anything you can apply it to.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=124)** Challenge yourself when you're doing manual work.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=127)** Is there a way to do this as code instead?
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=130)** - Many of the tools in this space have started building ways to express these extra components as code.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=135)** Take Terraform, for example, we have a big library of providers that let you manage, you know, Salesforce users, DataDog dashboards, Splunk logging, even passwords in 1Password, CDNs, DNS, and much more.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=148)** - I had a team that wrote Bash shell scripts using the Rerun framework and built them into artifacts for the Rundeck Runbook automation system to use.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=157)** We then used those scripts in Rundeck to orchestrate all our production operations, and changes to them were coded, versioned, tested, deployed in test, and then used in production in a controlled and auditable manner.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=170)** - Ah, you know, it's a big difference from back in the day when it was controversial for CIS Admins to even use source control.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=176)** - We've come a long way, baby.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (2), [[SaaS]] (2), [[Infrastructure as code (IaC)|Infrastructure as code]] (2), [[Dashboards]] (2), [[Security]] (1)
> **Speakers:** - well (3), - the (2), - okay (1), - have (1), - all (1)
> **Env Vars:** api (2), dns (1), cis (1)
> **Analogies:** for example (2)
> **CLI Commands:** terraform (1)
> **Tools:** bash (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** setup (1)

#### CI for my IaC
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=1)** - [Instructor] In the video on Docker, we published a Docker image to Docker Hub that Ernest then used in the Kubernetes video.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=6)** Now, that was great, but the astute observer might have realized that we skipped a little step there.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=12)** Instead of submitting code to a CI system, I just ran the build from my laptop and then uploaded that directly.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=18)** That's a big no-no if you work on a team with more than one person.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=22)** What we want is a pipeline that builds our infrastructure instead of engineers doing this on their laptops.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=27)** So, let's build a Docker container and then deploy it to the container registry that we're using, Docker Hub.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=34)** So for this video, we're going to be using GitHub Actions.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=36)** And I'm at the documentation site for GitHub Actions right now.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=40)** GitHub Actions are really great because we can do all sorts of things, from publishing a container to a registry, like we'll do in this video, or issuing an alert to Slack, or even SSHing into a bastion box and running Terraform commands.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=52)** Just take some time to look through the GitHub marketplace and see what you can mix and match together here.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=58)** We'll be using the build and push Docker Images action.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=63)** Instead of creating our action in the command line, I'm going to just do everything in the code editor right in GitHub.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=68)** So, let's move over to my repo and take a look at my workflow.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=72)** Right now, I'm in my action, build and publish, but right now it doesn't really build and publish.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=76)** It just builds.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=78)** You can see we just have the build job here.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=81)** We need to make a new job for our action.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=83)** And since I'm chaining it to this one, I'm going to add it below.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=87)** But first, I need a way to transfer my application binary from this one job at the top here to the new job that we're going to create.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=95)** I'm adding a bit of code here to upload an artifact.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=98)** Nothing too special here other than I'm setting the name for my artifact.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=102)** Now I can reference it in my Docker build and my push job as word-cloud-generator.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=109)** Okay, so now I'm going to do a little bit of cooking show set up here and paste in my job for build-docker.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=117)** All right, so now you can look at this next job that I have here.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=120)** There's a keyword here up at the very top that says, "Needs: build."
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=124)** This tells the job that the build job before it must run, and then it can run.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=128)** This is setting a dependency inside of our workflow here.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=132)** This next section of code fetches our binary, word-cloud-generator, and then it sets up some Docker metadata, like setting up our tags, making sure we're able to lock to whatever sha that we're using inside of GitHub.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=146)** And then you'll probably notice that we're dealing with secrets here.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=150)** These are secrets that are inside of our GitHub Action, and they let us log into Docker Hub.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=154)** Now, I had to do this out of band as an admin on the repo, so you'll have to do that separately if you're following along on your own repo.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=162)** And then lastly, we run the build and publish.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=165)** This puts it all together as our metadata and uploads it up to Docker.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=169)** So, this is all good.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=172)** Let's go ahead and save this.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=174)** I'm going to run a commit.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=176)** I'm going to say, "Adding publish for the container."
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=184)** I'm going to go ahead and commit changes here.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=188)** Okay, now we can see that's running.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=190)** Let's go over to our actions.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=192)** And we can see that we're adding publish for the container.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=197)** Now, we see that we have two jobs, build and then build-docker.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=201)** Let's see if we can update here to get our status.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=203)** And we see the build is starting to run.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=207)** So, we're going to speed all this up with a little bit of movie magic here.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=210)** Okay, so we can see output from each stage.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=212)** So, build and then build-docker.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=215)** I really am very creative at naming these things.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=217)** Maybe I need to try a little harder here.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=220)** Okay, so let's move over to Docker Hub, and we can now see our images that we just pushed up here.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=227)** So just a few seconds ago, we have our latest tag and then we have it with the sha as well.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=232)** So, that's it.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=233)** Now we have our container here getting built, tested, deployed to our registry.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=238)** But before we call it a day, let's go back and make a change to our container.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=242)** Let's say we want to make an OS version change.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=246)** So, I'm going back into word-cloud-generator, and I'm going into my Docker file.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=251)** And so instead of using alpine:3.16, let's bump the version to 3.17.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=261)** And I'm going to say, update Docker file, "Bumping to alpine:3.17."
>
> **[4:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=270)** So, we're just making an OS version change.
>
> **[4:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=272)** I'm going to commit changes there.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=275)** So, now we should have a new GitHub Action that's taking that in.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=280)** And again, we'll use a little bit movie magic here.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=284)** Okay, so that's it.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=285)** We changed OS versions in our container and we're able to build and deploy that as well.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=291)** The great thing about actions is that we can now stack actions together to trigger our environment to update and use the new container, as well as alert our team that a new version has been published.
>
> **[5:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=302)** You know, CI is not just for applications anymore, but it's a key part to infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Microsoft Word|Word]] (3), cloud (3), ci (2), next (2)
> **CLI Commands:** docker (16), make (3), terraform (1)
> **Tools:** github (8), slack (1), command line (1)
> **Versions:** 3.17 (2), 3.16 (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The GitOps model
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=0)** - Okay. Sweet demo.
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=1)** Are we done?
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=3)** - No, it's time for a
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=6)** - [Both] Bonus video!
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=6)** (horn blares)
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=9)** - Well, what else have we got?
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=11)** What's newfangled and hot in the infrastructures code space?
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=15)** - GitOps.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=16)** - Oh yeah.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=17)** The kids nowadays love their GitOps with their iPads and their short pants.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=22)** GitOps is a way to do continuous delivery, which aims to make the deployment process more reliable, faster, and developer-friendly by using Git as a single source of truth for declarative infrastructure and applications.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=36)** - Absolutely, GitOps has been growing in popularity as declarative orchestration frameworks like Kubernetes have risen also in prominence.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=44)** - OpenGitOps is a set of open source standards, best practices, and community-focused education to help organizations adopt a structured approach to implementing GitOps.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=55)** - Yeah, so let's review the definition of GitOps as defined by OpenGitOps.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=60)** GitOps needs to exhibit these four characteristics.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=62)** Ernest, are you ready?
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=63)** - Born ready?
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=65)** First, it's declarative.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=67)** A system managed by GitOps must have its desired state expressed declaratively.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=72)** - [James] Secondly, it's versioned and immutable.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=74)** Desired state is stored in a way that enforces immutability, versioning, and retains a complete version history.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=81)** - [Ernest] Third, it's pulled automatically.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=83)** Software agents automatically pull the desired state declarations from the source repo.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=89)** - [James] And lastly, continuously reconciled.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=91)** Software agents continuously observe actual system state and attempt to apply the desired state.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=98)** - So what does this all mean?
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=99)** Basically, you're skipping over a separate artifact layer and you're just pulling a specific version of everything out of Git revision control when you're deploying.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=109)** It does illustrate some of what we've already covered in the course, and it can work really well for driving declarative frameworks, like Kubernetes, that are just waiting for a new YAML configuration file to tell them what all to load up.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=122)** - Right, and you know, GitOps is a great option for treating infrastructure as code, but we don't think that GitOps is the only way to achieve infrastructure as code.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=130)** - No, that's right.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=132)** Because as great and well intentioned as GitOps is, there are some drawbacks.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=137)** - [James] Yeah, right, for for one thing, GitOps can be complex to set up and maintain, especially if you have a large preexisting system you want to transition to a GitOps flow.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=147)** - GitOps relies on storing the desired state of the system in Git, which depends on the system being able to interpret that fully and correctly.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=155)** You could see how there could be a desired state that the system can't achieve.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=160)** For example, a new feature in a cloud service hasn't been added to Terraform yet, and it doesn't do any of the dependency management things that Docker, Nix or Wasm can give you.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=172)** - Yeah, and lastly, let's not forget about visibility because, you know, GitOps takes desired state and then applies changes.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=179)** You need a way to have real-time visibility into the current state of the system so you can troubleshoot problems.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=185)** - GitOps can be a powerful tool for managing the deployment of applications to production environments, but it isn't the only way to treat your infrastructure as code.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=195)** I'd say you probably want to build most of your pieces into artifacts and then only use GitOps to move out the declarative recipes of what you want running in production.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=205)** - Yeah, that makes sense to me.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=207)** And GitOps is also not the only way to fit version control into your infrastructure as code implementation.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=213)** Hm, you can map artifacts to Git revisions just using something like tagging.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=218)** - GitOps, it's all the rage and it's good in some situations.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=222)** So just make sure that your infrastructure code gets treated with the same care as all the other code in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (4), [[Infrastructure as code (IaC)|Infrastructure as code]] (3), [[Kubernetes]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Orchestration]] (1)
> **Speakers:** - gitops (4), - yeah (3), - [james] (3), - no (2), - okay (1)
> **CLI Commands:** git (4), make (2), terraform (1), docker (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** ipads (1)
> **Env Vars:** yaml (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)

#### Security and compliance as code
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=0)** Infrastructure as Code changes how we build our infrastructure, but it also changes how we break things.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=7)** With Infrastructure as Code, a single bad pattern can spread through your infra code like wildfire.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=13)** The good news is that with IAC, security and compliance can be evaluated at the code level, and not just by scanning production infrastructure after the fact.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=23)** Let's discuss creating security policies as code, so we get safer delivery that doesn't slow teams down.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=29)** One thing relevant to security is context.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=32)** For example, a public S3 storage bucket in a sandbox environment is probably not a big deal.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=37)** But a public bucket in production containing sensitive data is a very big issue.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=43)** Now, how can you tell the difference?
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=46)** Infrastructure as code is where much of that context is explicitly spelled out.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=50)** The code itself tells us the intended environment, data classification, and exposure.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=57)** Tools that understand these relationships can raise only the issues that are real problems.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=62)** When we talk about enforcing policy as code, for infrastructure as code, we're deciding where in the lifecycle to test, whether our infrastructure meets security, compliance, and governance standards.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=75)** Just like with functional testing, you can perform security and compliance testing in each level of the testing pyramid, in the unit integration and end-to-end stages.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=85)** The first stage of our policy pyramid happens early in development, when engineers are writing IAC templates.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=91)** Here, policies can run automatically to check for risky patterns like open network ports, missing encryption, or weak identity configurations.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=101)** This early enforcement prevents problems before they even make it into version control, giving fast feedback and saving costly rework later.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=109)** An example of this is a developer writing a Terraform module to deploy an S3 bucket.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=114)** Before the code is even committed, A check runs locally in the IDE.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=119)** It flags that the bucket is missing the server side encryption configuration block.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=124)** The developer fixes it right then and there.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=128)** If you're looking for tools, there are a lot of options here, just like unit testing tools.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=132)** But two you're likely to run into are TFSEC and Chekov.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=137)** Catching misconfigurations at authoring time shortens the feedback loop and reduces risk before it ever hits version control.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=145)** The next key enforcement stage is during continuous integration.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=148)** At this point, policies are evaluated as part of pull requests or build pipelines.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=153)** This ensures that every change to the infrastructure is tested against organizational rules before being approved or deployed.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=161)** Teams can decide whether to enforce policies as heart gates, where they are blocking a merge until violations are fixed, or as soft feedback, allowing flexibility while still promoting awareness and accountability.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=174)** An example of integration time policy as code is detecting a Terraform rule that opens SSH to the world on a production VPC.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=182)** This is an example of using context to know this configuration shouldn't be allowed in this case.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=189)** I'm the founder of Dry Run Security, one of the new tools you can use to find security problems in your code.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=196)** And we had a customer with a very similar situation where they had their DNS config as code.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=202)** This was their Terraform code that expected a host IP to get passed in.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=206)** And if not, it just resolves to blank.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=208)** Not good.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=210)** It's one errant call away from DNS returning a malformed response or an incorrect placeholder like 0.0.0.0, possibly causing a service outage.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=221)** The change looked innocuous enough and passed their other testing.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=225)** But when Dry Run analyzed in context of the rest of the code, it was identified as dangerous.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=231)** the team was able to detect the problem and get it fixed before it got sent over to production.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=237)** So for tool recommendations, I'd put in dry run and check off as two options to consider for this phase.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=244)** Finally, you can test your running infrastructure at the end of your integration test phase, and use the same tools to continue enforcement after deployment at runtime.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=254)** Continuous policy checking in runtime environments help identify changes that break compliance or introduce risk.
>
> **[4:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=260)** Say an on-call engineer makes a manual change to a production security group allowing logins from anywhere on the internet.
>
> **[4:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=268)** If you are running a continuous policy check-in tool, then within minutes a cloud policy fires.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=274)** It flags the rule, auto-remediates by restoring the approved network configuration, posts about its change to the team chat, and opens a JIRA ticket with the link to the event in the logs.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=285)** A common way to do this kind of check-in as code is with the Open Policy Agent or OPA, which lets you write all kinds of policy rules in its Rego language and will validate those rules against your current Terraform state.
>
> **[4:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=299)** To guard against allowing logins from anywhere, this is an example of an OPA policy that looks for the Open Login Port, TCP 22, being open to any network address.
>
> **[5:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=310)** Even if your infrastructure code didn't introduce that vulnerability, you can set up a policy code to watch for it.
>
> **[5:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=316)** There are many tools that perform runtime policy enforcement and drift detection.
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=321)** Many teams start with Cloud-native tools like AWS Config or Azure Policy because they integrate tightly with each platform and can automatically roll back risky changes.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=332)** AWS Config's restricted SSH rule, for instance, can detect and fix a public SSH port within seconds.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=339)** In Kubernetes, Kiverno or OPA Gatekeeper enforce live cluster policies while Falco monitors for real-time activities such as unexpected SSH sessions inside pods.
>
> **[5:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=350)** Also, a tool like Cloud Custodian lets you express runtime policies as code and auto-remediate or open a pull request whenever drift occurs, keeping environments aligned with intended configurations.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=363)** That's the big picture.
>
> **[6:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=365)** Infrastructure as code gives us speed, scale, and repeatability, and policy as code gives us control and confidence without losing all that momentum.
>
> **[6:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=376)** By enforcing policies early, testing them in CI and continuously checking them at runtime, we build a immune system for our infrastructure.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=386)** Security doesn't have to slow anyone down if we make every commit, every merge, and every deployment a little safer than the one before it.
>
> **[6:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=393)** May the source be with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (9), [[Infrastructure as code (IaC)|Infrastructure as code]] (5), [[Terraform]] (4), teams (3), cloud (3)
> **Env Vars:** ssh (4), opa (3), iac (2), dns (2), aws (2)
> **CLI Commands:** terraform (4), ssh (4), make (2), aws (2), find (1)
> **Analogies:** just like (2), for example (1), for instance (1), such as (1), picture (1)
> **Definitions:** is a  (2), is an  (2)
> **Versions:** 0.0.0 (1)
> **Tools:** jira (1)
> **Prerequisites:** set up (1)

#### Using AI to create your IaC
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=0)** AI is giving infrastructure as code a real boost.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=4)** Instead of wrestling with providers, modules, and syntax, we can lean on tools that understand patterns, surface mistakes early, and help us spend less time fighting configuration and more time delivering actual value.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=19)** For this lesson, we're going to build up an application that will deploy into AWS.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=25)** Like we spent much of of the manual lab work earlier on in this course, but this time we're using a simple tool chain that will use AI to do most of the work for us.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=37)** VS Code is our editor, Copilot is our AI pair programmer, Docker runs the Terraform MCP server, and Dry Run Security checks our code policies.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=48)** Together, they create an environment where AI can understand the structure of your infrastructure's code instead of guessing.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=55)** MCP stands for Model Context Protocol.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=58)** Think of it as a translator that gives AI structured, accurate knowledge about your tools or code so it can reason instead of guess.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=67)** In this case, the Terraform MCP server exposes Terraform's schemas and commands so AI can suggest code that actually fits Terraform's rules.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=76)** AI tooling isn't perfect, and you need to be very careful about validating what it comes up with to make sure it's fit for production use.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=85)** So for this demo, I've also already set up a dry run security natural language code policy that watches for newly introduced APIs and marks them as higher risk, especially if they're missing authorization or authentication.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=99)** Security teams care about this because new APIs create fresh unvetted attack surfaces and flagging them ensures anything novel gets the extra review it needs during code reviews.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=110)** So issues don't slip up while you're doing rapid development or as we say, vibe coding.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=116)** We'll see it in action in a little bit.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=119)** I'm going to start right here in VS Code and talk to copilot like a teammate.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=123)** In this case, I'm going to describe the whole mini project in plain English.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=128)** I've already prepared all this up, so what I'm asking for is to make a new app that sets up a Docker container to respond to an API call to hello slash some name.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=137)** And it says, make a new application that sets up a Docker container to respond to an API call to hello name.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=143)** So you'll get a greeting for your name.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=145)** And the greeting will be hello, name, from LinkedIn Learning in a JSON response object.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=152)** So we could use it for other parts of our application.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=154)** I tell it also here to include Terraform so it can be added and deployed to AWS.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=160)** And I wanna add helpers for me to run and test locally.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=163)** So like add a make file and instructions for building and running in the README and have the service listen on port 8989 for my local Docker testing.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=173)** And I want to call this service Hello API.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=176)** I'm using the GPT-5 model here, and I'm going to hit go.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=181)** Now, the cool thing is, is that this isn't code, right?
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=185)** It's just a clear description of what I want.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=187)** You'll also see some helpers show up to make local testing easy, such as simple scripts or commands to run the container, and you'll be able to hit the Hello endpoint right here in our web browser.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=198)** Now, this is where AI really helps with speed.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=200)** Instead of handwriting boilerplate and writing every piece from scratch, I can get a working Hello API in just a few prompts, and then spend my time on correctness, security, and polish rather than all the repetitive setup.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=221)** Looks like it got stuck there a little bit, so I just had to tell it to keep on going and keep building so it's back to working.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=229)** All right, we'll allow this, let it keep building.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=235)** Okay.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=235)** So now it finished, it made over 20 files, 21 files have been changed, had 453 new lines of code.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=242)** As you can see here, it completed all of its to-dos.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=246)** It also looks like it had ways for me to deploy it, has ways for me to run it locally.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=252)** Let's go ahead and take a look at our README file.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=256)** In here, it looks like it left us the same README file we had before.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=261)** Let's go ahead and ask it to update the README with more information on how to run and use the local testing.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=276)** I'm going to ask it to go ahead and update the README with more information on how to run and use the local testing environment.
>
> **[4:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=286)** It looks like our README has been updated.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=288)** Let's go ahead and go see if we can get this spun up and then maybe fire up our local Docker environment to test it out.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=294)** Whenever I go to the README, I can see that there's a lot of different ways to do testing here.
>
> **[4:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=298)** I might want to clean that up later.
>
> **[5:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=300)** It looks like you can go ahead and just say, make Docker build and make Docker run.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=306)** Let's go ahead and do that.
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=312)** Docker build and looks like our containers
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=321)** are getting all built up here and we'll do Docker run.
>
> **[5:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=333)** One of the benefits of using AI for infrastructure as code and application setup is it doesn't just write all the code, it writes all the instructions on how to use it.
>
> **[5:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=341)** We just saw the README here, but I can also look and see here's all the components for Terraform that it gets set up and for ECS and more.
>
> **[5:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=351)** There's a lot of different components that we could once we try to get that spun up in the Amazon Cloud.
>
> **[5:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=357)** Here we have the steps for setting up Docker and looks like we have it all up and running.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=362)** Now let's go ahead and test it.
>
> **[6:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=364)** I'm going to open a browser and I'm going to go to my address here locally, 000-8989 or localhost, and let's take a look at that.
>
> **[6:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=375)** Localhost 8989, and I'm saying hello, James.
>
> **[6:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=379)** I can also say hello, Ernest, and looks like our API is working here, and we're getting our JSON block returned locally from our local Docker container.
>
> **[6:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=391)** I think this is really cool because this is the moment where we see the whole pipeline working together.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=396)** the API code, the container setup, all the local test helpers here.
>
> **[6:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=402)** Now that VS Code and Copilot here has helped us build out the project, let's get this into CICD.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=408)** Now, I could make the branch and then the pull request myself, but again, I'm going to just let Copilot handle it.
>
> **[6:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=415)** This is another place where AI helps us move faster with less friction.
>
> **[6:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=418)** I'll just describe what I want.
>
> **[7:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=420)** I'm going to say here, let's create a new branch, commit the changes, and open a pull request.
>
> **[7:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=426)** copilot fills in all the details, writes the messages, and gets everything staged so that it can review it before pushing.
>
> **[7:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=431)** I still get to approve the work, but this is a lot less busy work.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=442)** Let's push it in.
>
> **[7:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=447)** Now we have our pull request here, so let's go check that out.
>
> **[7:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=452)** Let's copy that.
>
> **[7:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=457)** As I mentioned at the top here, dry run security is going to also do some evaluation here and take a look at everything for the pull request as it's getting merged to make sure it's production safe.
>
> **[7:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=470)** Looks like all the checks have run and we're waiting for dry run security to do a full report here.
>
> **[7:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=478)** Now I'm in GitHub and I've looked at our pull request and I'm looking at the code policy results here.
>
> **[8:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=483)** Now, you can see our code policy flag.
>
> **[8:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=485)** This is a new endpoint that doesn't have authorization.
>
> **[8:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=488)** It tells us where we have set this up, and it goes and explains like this is not okay, it doesn't have authorization.
>
> **[8:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=495)** So this would definitely flag and it would flag your security team to check out.
>
> **[8:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=499)** Try Run has also called out a lot of Terraform issues that it sees in here.
>
> **[8:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=504)** Some things like mutable ECR image tags, It doesn't like this ingress rule, and a number of other problems, even like command injection in the makefile.
>
> **[8:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=514)** Now, some of these things you may not really care about.
>
> **[8:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=517)** We did push a whole bunch of code, all system and infrastructure's code at the same time.
>
> **[8:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=522)** But we did introduce a new endpoint.
>
> **[8:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=525)** It did get marked for extra security review, and we didn't want to expand our attack surface here.
>
> **[8:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=531)** Then we also have all this infrastructure's code stuff to take a look at.
>
> **[8:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=535)** This is really a great example of AI helping us move fast, but also keeping us within our company policy or production policy for our code.
>
> **[9:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=545)** While AI generated code isn't perfect, it's fast.
>
> **[9:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=550)** AI is pretty good at generating code and documentation, translating between tools and frameworks, managing deployments and scaling, and enhancing security and efficiency.
>
> **[9:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=560)** The point of infrastructure as code is to not manually craft every server, but to choose tools that let you define it in code, so you can get efficiency through reuse and improve quality iteratively.
>
> **[9:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=575)** In the same way, with AI, you don't have to manually craft every line of infrastructure as code, so we can iterate even faster toward a great working system.
>
> **[9:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=588)** Awesome.
>
> **[9:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=588)** But just remember, you need to test it even more than code you write yourself.
>
> **[9:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=593)** you never know when a Terminator is going to try and slip in there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (14), [[Security]] (9), [[Terraform]] (7), api (6), [[Microsoft Copilot|Copilot]] (5)
> **CLI Commands:** docker (11), make (9), terraform (7), aws (2)
> **Env Vars:** readme (8), api (6), mcp (3), aws (2), json (2)
> **Documentation:** the readme (5)
> **Prerequisites:** setup (3), set up (2)
> **Tools:** vs code (3), github (1)
> **Definitions:** is a  (2), stands for (1)
> **UI Navigation:** go to (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Where to go from here
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=0)** - Okay, so now we're actually at the end of the course but how do you get started?
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=5)** - There are plenty of tool courses here in the library but what do you do first?
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=9)** When I first got into DevOps and infrastructures code I came from more of a CIS admin background.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=15)** - Me too.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=16)** - Yeah, and one thing I did that really helped me was to learn Ruby.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=20)** Chef, Puppet, Serverspec and Cucumber.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=23)** They're all written in Ruby.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=24)** And learning a new language helped me to get up to speed faster.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=27)** - Maybe you come from a dev background in which case you already understand the approach but if you come from an operations background you might consider taking some coding courses.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=37)** It doesn't matter what language but Python can be helpful in the DevOps world.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=42)** Really just learning the process of development will help you understand how to perform infrastructure automation.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=48)** It's not just using the tools it's following a development process.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=53)** - The culture change required to get yourself and your colleagues to embrace this process is key.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=59)** Making changes through automation and writing tests first for any infrastructure code are basic techniques that you have to do all the time every time to be successful.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=69)** - The other culture challenge is finding ways to collaborate more tightly between the devs and ops.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=74)** Resist the urge towards local optimization and choosing tools or processes that are best just for you or your team instead of what's best for the overall chain of teams that have to work together to deliver the end product.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=88)** - But let's say you're willing to start.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=90)** How do you introduce this into an existing environment?
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=93)** - One way to introduce new tools and techniques is to choose an upcoming new project and develop that project in the new way.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=101)** This is called a Greenfield Project.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=103)** - You know, our first pure implementation of infrastructure automation was in a Greenfield Project like this.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=110)** It's easier to get it done when there's fewer legacy dependencies, and then you can show the benefits to everyone else in a real project.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=117)** - But sometimes you're stuck with needing to change a legacy system.
>
> **[2:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=120)** What's charmingly referred to as Brownfield Development.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=124)** - And that brown isn't dirt.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=125)** - So true.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=127)** In this situation, look for a single process to start with and automate it.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=132)** Ideally something that's a major pain point.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=134)** - When Ernest and I first worked together, we inherited a large legacy web system that had no automation.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=140)** We had to find a place to start.
>
> **[2:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=141)** So we identified the one piece to start with.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=144)** - We selected our Java application deployments like I mentioned in an earlier video.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=149)** We chose a tool to use, in this case was just a Perl script.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=153)** It was a long time ago.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=154)** So all these fancy tools didn't exist yet.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=157)** We defined the state we wanted to create using code, tested it, and set up production monitoring and unleashed it on the developers.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=165)** - We now know that was right because that's what ChatGPT says to do.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=169)** - True story, bro.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=171)** - And then we used what was called the strangler pattern to proceed.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=175)** We implemented a new piece of automation for a piece of our stack, deprecate the old process, and then eventually the new automated infrastructure would strangle out all the old manual stuff.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=186)** - That worked well, but it wasn't as successful as our second implementation when we realized how important both test first and integrating our infrastructure automation with our continuous deployment pipeline was.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=198)** - Yeah, there's no single answer, but we hope that this will give you some ideas on how you can begin to incorporate infrastructure automation into your own systems.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=206)** - We wish you the best of luck in automating your own infrastructure.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=210)** We know that the benefits you'll see will change how you work for the better.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=214)** Thanks for joining us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (7), [[DevOps]] (2), [[Python (Programming Language)|Python]] (1), teams (1), product (1)
> **Speakers:** - we (3), - yeah (2), - the (2), - but (2), - and (2)
> **CLI Commands:** ruby (2), python (1), find (1)
> **Prerequisites:** required to (1), set up (1)
> **Env Vars:** cis (1)
> **Definitions:** is called (1)


## Instructor

- [[Ernest Mueller]]
- [[James Wickett]]

## Path Context

### In [[DevOps Professional Certificate by PagerDuty and LinkedIn]]
← [[Devops Foundations]] | **2 of 3** | [[DevOps Foundations- Continuous Delivery-Continuous Integration]] →

### In [[Infrastructure as Code with Terraform]]
**1 of 3** | [[Learning Terraform]] →

### In [[Getting Started with DevOps]]
← [[DevOps Foundations- Continuous Delivery-Continuous Integration]] | **3 of 5** | [[DevOps Foundations- Monitoring and Observability]] →

## Part of

- [[DevOps Professional Certificate by PagerDuty and LinkedIn]]

## Appears In

- [[DevOps Professional Certificate by PagerDuty and LinkedIn]]
- [[Infrastructure as Code with Terraform]]
- [[Getting Started with DevOps]]

---

[↑ Back to top](#)