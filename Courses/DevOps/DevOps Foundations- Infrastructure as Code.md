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
  - '[DevOps Professional Certificate by PagerDuty and LinkedIn](../../Paths/DevOps/Professional%20Certificates/DevOps%20Professional%20Certificate%20by%20PagerDuty%20and%20LinkedIn.md)'
  - '[Infrastructure as Code with Terraform](../../Paths/Database%20Management/Learning%20Paths/Infrastructure%20as%20Code%20with%20Terraform.md)'
  - '[Getting Started with DevOps](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20DevOps.md)'
prev_courses:
  - '[Devops Foundations](Devops%20Foundations.md)'
  - null
  - '[DevOps Foundations- Continuous Delivery-Continuous Integration](DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md)'
next_courses:
  - '[DevOps Foundations- Continuous Delivery-Continuous Integration](DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md)'
  - '[Learning Terraform](../Database%20Management/Learning%20Terraform.md)'
  - '[DevOps Foundations- Monitoring and Observability](DevOps%20Foundations-%20Monitoring%20and%20Observability.md)'
path_nav: '[{"path":"DevOps Professional Certificate by PagerDuty and LinkedIn","position":2,"total":3,"prev":"Devops Foundations","next":"DevOps Foundations- Continuous Delivery-Continuous Integration"},{"path":"Infrastructure as Code with Terraform","position":1,"total":3,"prev":null,"next":"Learning Terraform"},{"path":"Getting Started with DevOps","position":3,"total":5,"prev":"DevOps Foundations- Continuous Delivery-Continuous Integration","next":"DevOps Foundations- Monitoring and Observability"}]'
path_count: 3
tags:
  - course
  - topic/devops
  - topic/database-management
status: not-started
created: 2026-05-03
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

#### [Make your systems better with infrastructure as code](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=0)** - If you work in tech, you've probably either spent hours building systems by hand
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=5)** - Or waited weeks for someone else to build those systems for you.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=8)** - Slow and unreliable. What could be better?
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=11)** - Well, today's systems demand a modern solution. What you need is
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=15)** - [Together] [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md).
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=17)** - Howdy, I'm Ernest Mueller.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=19)** - And I'm James Wickett.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=20)** - We first met while implementing [DevOps](../../Topics/DevOps.md) at a large enterprise.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=23)** - And we've been friends ever since. We both feel that infrastructure as code is one of the fundamental practice areas of DevOps and one of the most revolutionary.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=32)** - With IAC, as the kids call it, you can generate high quality systems that you can reliably test, consistently reproduce, and change quickly and safely.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=42)** - Our course will teach you all the tools, tips and techniques that we've learned over the years to get infrastructure as code right.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/make-your-systems-better-with-infrastructure-as-code?u=76281980&t=48)** - So let's start automating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [DevOps](../../Topics/DevOps.md) (2)
> **Speakers:** - and (2), - if (1), - or (1), - slow (1), - well (1)
> **Env Vars:** iac (1)

#### [What you need to know](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-you-need-to-know?u=76281980&t=0)** - This course is designed to introduce you to the basic concepts of [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) [DevOps](../../Topics/DevOps.md) style, that means hot and sassy. To get the most out of this course, you may want to watch the course DevOps Fundamentals here in the library for context. In that course, James and I discussed the foundations of DevOps and how the three major practice areas, infrastructure as code, [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), and site reliability engineering fit into it. This course drills down into infrastructure as code specifically to discuss it in depth. To get the most from this course, you should be familiar with system admin basics, be able to use the command line and SSH, and be familiar with some sort of programming or scripting. We'll be using the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) Command Line on the AWS Cloud and an Akaunting [GitHub](../../Skills/Software%20Development/GitHub.md) for our demos. You should be able to reproduce it from your desktop client of choice. Our intent is for this course to be accessible for anyone with even a basic IT experience. While we're making our source files available to you, this isn't meant to be a lab course where you follow along and perform the activities to learn a specific technology. Instead, we'll be talking about infrastructure as code concepts, why you would use them, and then illustrating how to implement them in a variety of tools. So don't expect detailed instructions on how to install and configure those tools here, but there are entire courses here in the library on each one of them when you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [DevOps](../../Topics/DevOps.md) (3), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** command line (2), github (1)
> **CLI Commands:** ssh (1), aws (1)
> **Env Vars:** ssh (1), aws (1)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - this (1)


### 1. The Wide World of Infrastructure

[↑ Back to Table of Contents](#table-of-contents)

#### [It's all about the cloud](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=0)** - Before we talk about the code part of [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), we want to start out with this chapter talking about modern infrastructure and how it lends itself to automation. In this video, we're going to talk about one of my favorite subjects, [Cloud Computing](../../Topics/Cloud%20Computing.md). If you're familiar with using the cloud, this may just be a refresher for you, but we wanted to do some explanation for folks that haven't gotten to work with the cloud yet and may have only heard about it. So what is the cloud, besides the place your photos go to die? While arguing about what is cloud was popular for a few years, most agree that the definition that the US National Institute of Standards and Technology put out in 2011 is sufficiently definitive. Cloud is characterized by on demand, self-service provisioning, broad network access, resource pooling, rapid elasticity, and measured service. And there are three general cloud service models. [Software as a service](../../Glossary/Concept/SaaS.md), or [SaaS](../../Glossary/Concept/SaaS.md), is where an entire application is provided for you live from the internet. Salesforce, TurboTax, and [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365 are examples of SaaS. [Platform as a service](../../Glossary/Concept/PaaS.md), or [PaaS](../../Glossary/Concept/PaaS.md), is where you can deploy custom applications to the cloud platform without managing the underlying systems yourself. [Google](../../Glossary/Service/Google.md) App Engine, [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) App Service, and Pivotal Web Services or examples of public PaaSes. [Infrastructure as a service](../../Glossary/Concept/IaaS.md), pronounced I-A-A-S for obvious reasons,
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=94)** is where you get operating system level access to discrete systems in the cloud. These are usually VMs and not bare metal. Google Compute Engine, Microsoft Azure [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), and [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) [EC2](../../Skills/DevOps/Amazon%20EC2.md) showcase [IaaS](../../Glossary/Concept/IaaS.md) offerings. Of course, in the last decade plus cloud offerings have gotten more sophisticated and are part of practically everything. Your Nest home thermostat, cell phone, Alexa, and so on all use [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). But this mysterious force that rules your life is really just servers in real world data centers. Cloud providers like Amazon Web Services make servers, storage, and more available to use at a click. You can go sign up for an AWS account using their free tier or with a credit card, go into their EC2 Elastic Compute service, click to choose the size of the server you want, what operating system you want. In about five minutes, you can have a [Windows](../../Glossary/Service/Windows.md) or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) server of just about any size with as much storage as you want, even with GPUs and other high performance add-ons. You can open it up to the whole internet to host a web server on, or keep it locked down for just your use. But you can reach it from anywhere in the world that you can jack into cyberspace, as the kids say nowadays, The cloud providers can do this, because they have [Big Data](../../Skills/Data%20Science/Big%20Data.md) centers full of servers and storage around the world and they're just assigning one of them to you when you ask for it. That's a big difference from the old days of fighting with a system admin team for six weeks to get three more servers into the data center.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/it-s-all-about-the-cloud?u=76281980&t=190)** Anyway, this means if you need two or a hundred servers instead of just one, you can easily ask for that many and scale right up in minutes. Amazon can rent that capacity out to somebody else when you're not using it, so they just charge you by the minute. Like we used to pay per minute for long distance phone calls. If you need to just use a computer for four hours, you pay for four hours. You're not buying a physical server that you have to pay full price for upfront and then keep around whether you're using it or not or whether it breaks or not. And that's the cloud in a nutshell. Instead of buying your own [Hardware](../../Topics/Hardware.md), waiting for it to get put into a data center and loaded up, and then depreciating it over time while you get sadder and sadder about its performance every year, you could just reach out, grab a resource of the size you want, get it right now, just pay for it while you use it. And maybe most importantly, to use the cloud, sure, you can use their UI or command line tools, but all the clouds have a fully featured API that you can integrate with your own tools or code. In our next video, we'll talk about when you might use the cloud and when you might want to use your own data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SaaS](../../Glossary/Concept/SaaS.md) (2), [Google](../../Glossary/Service/Google.md) (2), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2)
> **Env Vars:** ec2 (2), aws (1), api (1)
> **CLI Commands:** make (1), aws (1)
> **Cross-References:** in the last (1), next video (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - before (1)

#### [Bare metal vs. cloud](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=0)** - The cloud is great because you can get the infrastructure you need pretty much immediately when you need it.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=6)** - Okay, you're starting to sound like a commercial. Do you work for Amazon now?
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=11)** - [Announcer] Bare metal versus cloud, fight.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=15)** - You can't beat the cloud's agility. Instead of waiting to buy [Hardware](../../Topics/Hardware.md), get it put into a data center, and whatever annoying process your IT department ladles on top of that, you can get the servers you need with a click of a button, bit of typing at a command line or a brief lick of an API or whatever it is you do to an API.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=33)** - Okay, first of all, that's oddly disturbing. Second of all, those servers aren't cheap Ernest you can buy a good Dell server for what, about $5,000 but a cloud server of the same spec can cost you like a $1.50 an hour. Okay, when you put all that together by my calculations, that's $13,000 in a year.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=51)** - For sure, one to one, the cloud can be more expensive, but first of all if you're really running that server all the time, you can get a savings plan that'll cut 30% off the top. You're also saving on administration and facility costs. You're not just not buying that server you're paying for the data center, power, cooling, networking, and system admins needed to make it work. But maybe most importantly cloud savings isn't about running servers one to one. It's about right sizing your servers and fleet dynamically. Think of a data center as a shipping container full of liter containers of water. The water's the work you're getting done but many of the containers aren't full and you're paying for the containers you have and no matter how much water's in them. In the cloud, it's like you can resize the shipping container and the liter containers to match the workload and then you can save on all the excess.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=105)** - Are you done? I mean, that's nice to put in the old cloud, to rain, to drinking water analogy, but come on since it's easy to just click and get more servers aren't my employees just going to run rampant and you know get a bunch of servers like there's no tomorrow without a certified system administrator or someone you know, watching and enforcing, you know through compliance and audit?
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=127)** - Well, sure, that can happen. With great power comes great responsibility as my Uncle Ben once said. But it's easy to put governance and quotas in place, and instead of having one big organization be the giant cost center, you can delegate out budget to the orgs using it, which improves behavior around cost and benefit organizationally.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=146)** - Okay, but isn't the cloud really complicated? I mean, you hear comedians all the time saying things like no one understands the cloud, and it's all this newfangled and scary thing.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=156)** - Remember, we're comparing this to on-premise system and [Network Administration](../../Skills/Network%20and%20System%20Administration/Network%20Administration.md). Pretty sure those standup comedians would be even more puzzled by InfiniBand networking.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=164)** - Okay, okay, that's fair.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=167)** - While it is new, and those of us like me who came from a traditional system admin background needed to learn some new things in order to use the cloud it's not any more complicated than an on-prem data center. And frankly, since it's more standard you don't get the weird old special snowflakes boxes in the corner with a do not touch sign on them.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=186)** - Okay, but what if we need specialized hardware? You can't get that in the cloud.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=192)** - Well, you'd be surprised, they have GPUs FPGAs, [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md), [5G](../../Skills/Software%20Development/5G.md) edge compute and a lot of very diverse hardware in the cloud. But yeah, if you have a lot of super custom hardware needs you'll still need to roll your own. Or if the cost instability of your use case really means it's financially appropriate to build out your own hardware, but even then you probably want to use cloud for all your other use cases that don't fit that description. And in my experience, less than 10% do.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=222)** - Okay, Ernest, I'm convinced. Like the kids say today, I'm down to cloud.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=229)** - Never say that again.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=231)** - No? How about make it rain servers?
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=235)** - That's another entry on the do not say list.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/bare-metal-vs-cloud?u=76281980&t=238)** - Okay, well, that was our completely objective debate on using real hardware versus using the cloud. We hope you enjoyed it and learned from it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (6), [Network Administration](../../Skills/Network%20and%20System%20Administration/Network%20Administration.md) (1), [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md) (1), [5G](../../Skills/Software%20Development/5G.md) (1)
> **Speakers:** - okay (7), - well (2), - the (1), - [announcer] (1), - you (1)
> **CLI Commands:** make (2)
> **Env Vars:** api (2)
> **Versions:** 1.50 (1)
> **Documentation:** spec (1)
> **Tools:** command line (1)
> **Analogies:** it's like (1)

#### [Not your mother's cloud](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=0)** - The cloud means different things to different people but most expect network, compute, and storage. Now at the dawn of cloud, that was enough but today the cloud is way more. Let's take a look at [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)'s cloud offerings. As you can see, the choices are numerous. Besides the basic services there's a long list of managed services. You can get managed [Databases](../../Skills/Software%20Development/Databases.md) of any flavor from managed [MySQL](../../Skills/Software%20Development/MySQL.md) databases, to map reduce, to DNS, and CDNs, but it doesn't stop there. The options also include observability and security offerings. And this isn't limited to [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). Every major cloud provider, AWS, GCP, OCI, they all have a huge set of managed services that go beyond simple infrastructure. The goal here is to provide specific functionality in a service that doesn't require the user to configure the lower level servers and other components in order to get their desire workload performed. Here's a list of past services that [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) recommends you use instead of building and configuring them manually, as you would in an on-premise data center. And they can be used to form sophisticated systems all by themselves. So here's a Microsoft example architecture for a social media analytics solution. It's completely composed of managed services. Azure Synapse Analytics is used to ingest the data and place it into [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) pools. It enriches that data using Azure Cognitive Services Translator to translate text and Azure Maps to link data to geographical coordinates.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/not-your-mother-s-cloud?u=76281980&t=98)** It stores the data in a serverless [SQL](../../Skills/Data%20Science/SQL.md) pool inside Azure Synapse Analytics, and then makes it available to users via [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) [Dashboards](../../Skills/Data%20Science/Dashboards.md). While this solution certainly uses servers and databases under the hood, you aren't interacting with them directly. You're only interacting with the managed services at a more functional level. Store the data, translate this string, geolocate this address, visualize the data, that's what managed services are. Next, we'll examine why you should always use them and never use infrastructure ever again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** dns (1), aws (1), gcp (1), oci (1), sql (1)
> **CLI Commands:** mysql (1), aws (1), apache (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)

#### [Managed services vs. bare cloud](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=0)** - Managed services are great because we don't have to do all the care and feeding of infrastructure and can focus on delivering value.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=7)** - Okay now you're starting to sound like a commercial. Do you work for Amazon now?
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=12)** - [Narrator] Managed services versus Bare Cloud fight.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=16)** - But managed services get you so much more than basic services do, you know, for example let's say you want to try out a new database. Previously you would've hired consultants to get it up and running or found expert staff but neither of them are cheap.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=31)** - Yeah but is that database really fully managed? You still need database expertise for your schema and your tuning, even though you may not have to manage the servers the database is still largely up to you to configure.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=44)** - Okay yeah, you still have some things to do but not nearly as many. Instead, you can now make a few API calls and have a full database ready to go managed by your provider and ready to scale instead of waiting for a month or two for your DBAs to get around to doing something.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=59)** - But that abstraction layer is preventing you from tuning and doing like the deep down details you need to do for super demanding workloads, isn't it?
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=68)** - Okay, sure, if you're one of the FAANG companies, you can worry about that, but 90% of the companies out there they don't really need that level of customization and no one really needs it for the majority of their services, just the key ones. Okay so in the case of [Kubernetes](../../Skills/DevOps/Kubernetes.md) would you rather run your own cluster and manage it and all the ins and outs of Kubernetes or would you rather use EKS from Amazon and get all the benefits without having to hire all the new staff Ernest?
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=94)** - It's great if you want to use what the man wants you to use, what if they don't have the version or functionality or whatever you need? For example, the managed Kubernetes services are always lagging behind the newest releases and so you miss out on a lot of the cutting edge features and you can't customize as much as you can when you're running it directly.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=114)** - Okay yeah, sure, yeah you may be a bit behind the bleeding edge of a particular technology, but that may be seen as a positive in many organizations, for small teams or the scrappy startup looking to build out services the friction and cost has really been significantly reduced.
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=131)** - But from the startup point of view they're also more expensive. You pay for all that management they put on top of it. In one shop I used [MongoDB](../../Skills/Software%20Development/MongoDB.md) Atlas, their managed database service, and it was cool that I could upgrade versions or server sizes with the click of a button, but then they charged me out the nose for backups.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=150)** - Okay, definitely, but what could your engineering effort that you save do to accelerate the actual startup, you know and the success of it, and it's often worth money to get back all that engineering time. Managed services aren't just for startups either. Many of the companies that we've both worked at in the last decade, including mid-size enterprises have migrated completely to public cloud hosting for their computing needs, and this includes using more than just compute and network and storage.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=177)** - Well, but that brings up another challenge with managed services. They're not portable across clouds or to your data center. If you're using one cloud service it's often not compatible at all with another's.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=190)** - Okay well but isn't that great from a buyer's perspective? You know, competition between all the major cloud providers and all the options we get to use, we never thought we would've had those in the pre-cloud era.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=203)** - I mean, it is, except for the harm it often does to those open source ecosystems. The cloud providers have sometimes been fairly predatory in taking open source [products](../../Skills/Software%20Development/Microsoft%20Products.md) and forking and monetizing them to the detriment of those communities health.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=217)** - Okay all right, out of everything you've said, you do have a point there, but as for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your points about customizability and multi-cloud what percentage of the shops that you've worked at in the last 20 years, where they've really needed any of that, instead of just moving more quickly to market?
>
> **[3:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=234)** - Well maybe 10%.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/managed-services-vs-bare-cloud?u=76281980&t=237)** - Okay I rest my case. (banging)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Speakers:** - okay (8), - but (3), - well (2), - managed (1), - [narrator] (1)
> **Env Vars:** api (1), faang (1), eks (1)
> **Cross-References:** in the last (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)

#### [Containers galore](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=0)** - Now I know what you're saying. Cloud is so early-2000s. Containers are all the buzz right now, and they're a fundamental empowering technology for [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). So what is a container, you may ask? It's a lightweight, executable unit of software that packs up a system environment, application code, and dependencies such as binaries, libraries, and configuration files for easy deployment across different computing environments. In other words, it's basically a way to run segmented mini systems on your [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or [Windows](../../Glossary/Service/Windows.md) host system. I know, I know that sounds like a virtual machine, but containers only virtualize down to the level above the core operating system , while VMs virtualize all the way down to the hypervisor. Because containers share the system's kernel, they boot fast and are more lightweight than a traditional virtual machine, but they do provide isolation so you can install packages and do [System Configuration](../../Skills/Network%20and%20System%20Administration/System%20Configuration.md) restricted to the container. In other words, they look like separate systems, for most purposes, from inside them. In fact, you don't need an operating system in your container. Since it uses the underlying POSIX OS of the server, a container can just have, say, a Golang or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) interpreter as its base layer and be very slim. Docker's the most popular container technology, but there are others like CoreOS rkt, containerd, and Red Hat CRI-O. You create the container images that they use in a code-like way.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/containers-galore?u=76281980&t=94)** Docker uses a build file called a Dockerfile. Here is an example. You just docker build this, and it starts by taking the latest [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) base container off Docker Hub, which is a central Docker image repository with community contributed images. Then it downloads, installs, and runs the NGINX web server on it and opens up port 80 to the outside network. The result is a Docker image you can run at will, and every run of it generates a new container running a web server. You can then upload the image to a container image repository to be pulled down and used by developers and by production systems. The popular open source system, [Kubernetes](../../Skills/DevOps/Kubernetes.md), orchestrates containers en masse across multiple servers to form a whole networked architecture of many small services cooperating to form applications. Here's an example: complex Kubernetes system with relatively small pieces of code, also called [Microservices](../../Skills/Software%20Development/Microservices.md), running in a variety of containers and pods across a set of nodes. Kubernetes handles running the containers and moving them around on nodes for resilience and scaling. And it also handles the network connectivity between services and from outside the system. Because containers can be built quickly and easily from description files and carry their own environment along with them so that they can be run in development and production environments identically, they've become a popular base for [Application Development](../../Skills/Software%20Development/Application%20Development.md), and they lend themselves very well to infrastructure as code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [System Configuration](../../Skills/Network%20and%20System%20Administration/System%20Configuration.md) (1)
> **CLI Commands:** docker (6), python (1), nginx (1)
> **Definitions:** is a  (3), in other words (2), is an  (1)
> **Env Vars:** posix (1), cri (1), nginx (1)
> **Ports:** port 80 (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - now (1)

#### [VMs vs. containers](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=0)** - I don't get the big deal about containers. They're just slightly lighter Vms, right? The cloud already lets us spin up all the VMs we want dynamically.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=8)** - Well, actually, that's true, but--
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=11)** - [Speaker] VMs versus containers, fight.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=14)** - Do you mind? Anyway, that's true. But servers, even cloud Vms, only come in fixed sizes, and are slow to build and provision. Containers build and run much more quickly, and use less overhead when they do.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=28)** - Right, but that doesn't sound like that big of a deal. I only build my servers once, and then they're done. Who cares if it takes 10 minutes or one minute?
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=37)** - That's what I thought when I first had Docker explained to me, too. The operational benefits are there, but they're not super compelling when compared one to one with a VM. But it's not about one to one. Like with moving to cloud from data centers, it's the ability to use greater ephemerality that really makes the difference.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=56)** - Okay, now hold on there, Mr. Big Words. I'm from Texas. What do you mean, ephemerality?
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=62)** - Well, the old model is that you carefully construct servers in order to run a bunch of applications on them. And then you have a whole world of hurt from conflicting configurations, maintenance schedules, and so on. Containers separate that out, so each application has just the environment it needs. So you avoid version conflicts with things like [Java](../../Skills/Software%20Development/Java.md), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) run times, and other dependencies.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=84)** - Okay, but if you have a thousand containers instead of a hundred servers, isn't that just 10 times the maintenance burden?
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=92)** - No, because container architectures pressure you to run them for a short time, like one piece of a workload, and then kill them. They're intended to be read only, no updates or SSHing into them or anything. You can think of them as much as thick processes than thin servers. In the [DevOps](../../Topics/DevOps.md) world, we often refer to the move to standardized servers as cattle, not pets. Using that same analogy, you can think of a container as a specific packaged steak. Hmm, steak.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=122)** - Hmm, okay, steak. Now, now, now you're talking Texan. So what you're saying is there's less of an opportunity to drift, but you still need to update them for security patches and all that stuff, right?
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=134)** - Sure, but because the beauty of Docker is that each container is intended to be one service, one or a very small number of processes. With a minimal system environment customized to itself, they're often not running an entire traditional operating system in the container.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=149)** - Okay, so there's less surface area.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=152)** - Right, and since they build quickly, Docker-based build pipelines integrate the base container build with the application build in the same pipeline. Individual container images are immutable, and not intended to be changed, just new versions built whenever you need a patch system or application.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=171)** - Okay, but doesn't that expose the sanctity of my operating [System Configuration](../../Skills/Network%20and%20System%20Administration/System%20Configuration.md) to the, I hate to say it, developers? I mean, my inner sys admin says that's a bad thing.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=181)** - Yes, but it's really a good thing. Traditional [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) relied on one set of people carefully configuring the systems, and another the applications. 'Cause one day, somebody heard the phrase, separation of duties, skipped reading the definition, and decided that was the way to do it.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=198)** - Oh, snap.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=201)** - But the real power of containers is that they greatly accelerate the feedback loop for developers. Developers can run the identical container easily on their desktop, on test systems, and on production systems. This finds integration problems early, and speeds up the whole development cycle.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=218)** - Okay, of course, separation of duties doesn't mean one person does systems, and another does apps. But it does mean that no single person should have full control over something that's important. And so doesn't this violate that?
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=231)** - Well, the great thing about container-based development workflows, spoiler alert for later in the course, is they can leverage the safeguards of a well-designed build pipeline. That means peer reviews to ensure separation of duties, as well as automated testing, functional security and so on, in a single integrated, not siloed way.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/vms-vs-containers?u=76281980&t=251)** - Okay, that sounds good. But what if I said there was something even better than containers For that? You'll have to join me in my next video to find out what it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [DevOps](../../Topics/DevOps.md) (1), [System Configuration](../../Skills/Network%20and%20System%20Administration/System%20Configuration.md) (1), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1)
> **Speakers:** - okay (6), - well (3), - right (2), - i (1), - [speaker] (1)
> **CLI Commands:** docker (3), python (1), snap (1), find (1)
> **Cross-References:** later in (1), next video (1)

#### [Where'd my server go?](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=0)** - Let's move one layer past containers to serverless. [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) is something you may have heard about but haven't tried out. In this session, we're going to demystify the term serverless and dive into how it works. The term serverless, it doesn't mean that there's not a server in there somewhere. It just means that you don't have to interact with it yourself. Some managed services bill themselves as serverless once they get to the level where you don't need to configure system parameters or stuff like that yourself. Some cloud [Databases](../../Skills/Software%20Development/Databases.md) and data pipeline services are frequently billed as serverless, but the real heart of serverless computing is functions as a service or FaaS. Some examples of public cloud FaaS offerings are Amazon Lambda, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Functions, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Functions. There are also open-source serverless platforms that you have to install and do some of the server part yourself like Apache OpenWhisk, OpenFaaS, and Knative. These usually work on top of [Kubernetes](../../Skills/DevOps/Kubernetes.md) or other container platforms. Well, let's explain this with an example architecture. On the left is a traditional web application architecture. A client talks literally to the web stack, and the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) are running any number of services on them. On the right is a serverless architecture. You decompose the services into functions with no central web server to speak of as all of its roles and duties are now distributed. Under the hood,
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=94)** these functions are containers that get spun up in milliseconds on a read-only file system when they're requested. They execute the event that is given to them, and then they just disappear. So you don't have persistently running servers, you just have zero to many running invocations of your function. I find it helps to think about serverless like this. Serverless encourages functions as deploy units coupled with third-party services that allow running end-to-end applications without worrying about any of the system operation. Since the functions are backed by come-and-go containers, this begs the question of how do serverless functions get instantiated or triggered? And that's a good question. You know, when serverless first came out, it was often just being used to do event handling. So you would upload a file, for example, and that would trigger a function to process it. So early Lambdas often did simple operations like compressing a file or converting a file format. But it wasn't too long before all that changed due to the fact that these functions were ready in milliseconds and the fact that HTTP traffic is just a series of small events, the industry started creating web applications using a serverless architecture. So here's an example of a serverless application composed of serverless functions in AWS. It's based on a real insurance underwriting application that Ernest worked on that was completely serverless. Web requests fired from a front end [react](../../Skills/Web%20Development/React.js.md) application, and they came in through an API gateway
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-d-my-server-go?u=76281980&t=187)** to trigger specific functions like log in, generating new contract, viewing existing contracts and so on. Individual dedicated chunks of code, perform operations like saving information, generating a price quote, creating a pdf, and emailing the potential client. It breaks down every API into a set of serverless functions and calls out to external services like an accounting system and a database. In this way, you can build large complex systems without having to build or manage servers. That sounds too good to be true, doesn't it? Well, in the next video we'll talk about that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Serverless Computing](../../Skills/Software%20Development/Serverless%20Computing.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** api (2), http (1), aws (1)
> **CLI Commands:** apache (1), find (1), aws (1)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** configure (1), install (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)

#### [Serverless vs. servers](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=0)** - I've seen the future, and it doesn't have servers.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=3)** - I declare shenanigans! Serverless still has servers under the hood. - Okay, okay, professor.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=8)** - [Speaker] Serverless versus servers fight.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=11)** - Okay, let's jump into it. Let's start by discussing the benefits of serverless.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=17)** - Okay, fair enough. But where did you get that ridiculous hat?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=21)** - Oh, yeah, this, this old thing? You like it?
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=24)** - No.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=25)** - Serverless has three key benefits. First, scaling is handled by the provider. Second, it's pay for play. If your app isn't running, it isn't costing you anything. Third, you're no longer dealing with [Package Management](../../Skills/Web%20Development/Package%20Management.md) or OS updates. It's really a beautiful thing.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=42)** - Okay, that's all true, but you're ignoring some of the downsides of serverless. I'll match you three for three. Each cloud vendor's platform works a little differently, but I'm not even going to count that as a downside. The big story is that each of them has the same three fundamental limitations that make some workloads just not suitable for serverless. First, big apps have long initial cold start times, which cause delays when calling infrequently used services. Second, functions have a runtime limit set by the cloud provider, like 15 minutes for AWS Lambda. So long running jobs don't work. And there's also some not well advertised limits like the number of parallel Lambda executions you can have in an AWS account. And then third, serverless invocations are relatively pretty expensive. If you're running a lot of executions, it can turn out to cost a lot more than running a dedicated service yourself.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=97)** - Well, I think you're at least partially right about the cost. Unless you're running your own serverless platform like K Native on top of [Kubernetes](../../Skills/DevOps/Kubernetes.md), but then you're doing all the work to running yourself. So, you know.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=109)** - Okay, so it's settled.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=111)** - Well, not so fast there, Ernest. I'll give you that. But your other points about restrictions and limitations are just facts of computing. Not every workload fits on every platform, but there's often ways to get more mileage out of serverless in these cases. You know, very large apps may not be best for serverless web services, but caching and asynchronous responses can often improve cold start experiences. Long running apps may be decomposed into steps, using step functions, and apps that have many concurrent executions may not be the best cost model, but it takes you quite a while to get there. So you can defer the cost of a more complex solution til the time comes that you really need it.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=152)** - Okay, well, since you seem so sure of handling the downsides of serverless, why don't you tell us more about why it's so great?
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=160)** - Yeah, sure. Well, let's start with how people are using it. In fact, in the last video, I showed how you had built out an entire application through linking a series of serverless functions and [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md), and that was pretty cool.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=174)** - Thanks. I mean, that must be some other Earnest.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=177)** - There's only room for one Earnest in my life. I often advise that before people undertake a full serverless approach, they could transition just one part of their application or stack to serverless by looking for places where they're handling events or processing queues or using admin scripts, creating an API, or maybe even using HTTP traffic like single page web applications.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=201)** - That makes sense. I learned that you can do a lot with serverless. Oh wait, whose side am I on? That's right, don't take my server.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=207)** - Okay, Ernest, here is something for you to consider. When you have a server, whether it be a cloud VM or actual real [Hardware](../../Topics/Hardware.md), or even a Kubernetes pod or node, what is it doing most of the time?
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=219)** - Well, most of the time, it's running my application, well, and a bunch of other stuff.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=224)** - Bingo. One of the best reasons to use serverless is that you have more direct visibility of what resources your app actually uses, not mixed in with a bunch of other plumbing. And an underappreciated aspect to this is that for the first time in our industry, performance improvements and enhancements, they can be directly tied to cost, without having to use an interpretive model. With you being a longtime web performance expert, I think you'd have to love that.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=252)** - Well, he got me with that one. Where's my hat?
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=261)** - You know, it looks really good on you.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless-vs-servers?u=76281980&t=263)** - Join us in the next section, where we discuss how to take all this infrastructure we've been talking about and codify it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Package Management](../../Skills/Web%20Development/Package%20Management.md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Speakers:** - okay (6), - well (4), - i (2), - [speaker] (1), - oh (1)
> **CLI Commands:** aws (2), make (1), node (1)
> **Env Vars:** aws (2), api (1), http (1)
> **Cross-References:** in the last (1), in the next (1)


### 2. Adventures in Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Building the boxes and lines](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=0)** - Welcome back. We've been talking a lot about the infrastructure itself, but you may be wondering, in the words of the great sainted Clara Peller, "Where's the beef?" Well, now we'll move on into the second phase of explaining [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) with infrastructure automation. You can split automation frameworks into two general camps, historically: ones that configure the overall systems environment, creating networks and servers and such; and then, tools that configure the operating system on the boxes. Some tools do both, but most have their roots firmly in one world and just dabble in the other. This is why we started by going over cloud containers and serverless. With traditional [Hardware](../../Topics/Hardware.md), you pretty much need to set it all up manually. There are some tools to configure the boxes themselves and the network a bit, but the box and lines level of the system diagram is slow and physical. With these newer infrastructure technologies, while they may have graphical interfaces to click on to set things up manually, they also have programmatic APIs that can be exercised by tools or code to build your network out on the fly. This means we can use tools or code to create our infrastructure from a defined description. Each of the cloud providers has their own way to do this. For example, AWS's CloudFormation is a way to describe a complete network of systems using [JSON](../../Skills/Web%20Development/JSON.md) or YAML templates. You then use a command line tool or an API to feed that description into the cloud,
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=92)** and it makes it for you. Here's an example CloudFormation file that describes creating a single [EC2](../../Skills/DevOps/Amazon%20EC2.md) virtual server, with variables for the machine image, instant size and such, and some quick commands to update the OS and start NGINX and boot. You just feed it in, and, bam, about five minutes later, you have a full running system in the cloud, just like you went and clicked in the EC2 console, but better because it's repeatable and you can do it 100 times simultaneously if you want. And you can build as large and as complicated as system as you can model. To update it, you just change the model file and resubmit. Now, you do have options beyond the cloud provider-specific tooling. There are similar tools that try to provide a cloud agnostic solution. Probably the most popular is HashiCorp's [Terraform](../../Skills/DevOps/Terraform.md). It has integration with most major cloud providers and a large library of pre-existing modules to make standard constructs like AWS EC2 instances. And you can write your own. You can buy it as a cloud service from them if you want, but the tool itself is open-source. Those tools are all declarative. In other words, you write a description file and the tool reads it and creates the system that you've described. There are also plenty of code libraries you can use to build and manipulate cloud resources in various programming languages. AWS provides the CDK, or [Cloud Development](../../Skills/Software%20Development/Cloud%20Development.md) Kit, which supports several languages. A common solution here is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s Boto library.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/building-the-boxes-and-lines?u=76281980&t=187)** Here's an example of the code to spin up an EC2 instance from within Python. Here, you don't have a single description of the system. You just add and change items organically from within your code. In case you were wondering, yes, you can use these tools or similar ones to create the base systems environment for [Kubernetes](../../Skills/DevOps/Kubernetes.md) clusters and serverless architectures. We'll talk about the up and downsides of these approaches in our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1), [Hardware](../../Topics/Hardware.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** ec2 (4), aws (3), json (1), yaml (1), api (1)
> **CLI Commands:** aws (3), python (2), nginx (1), terraform (1), make (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (1), just like (1)
> **Cross-References:** next video (1)
> **Tools:** command line (1)

#### [Everything vs. Terraform](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=0)** - There are many ways to create your network infrastructure from code.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=4)** - But there's only one right one, [Terraform](../../Skills/DevOps/Terraform.md).
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=7)** - [Narrator] Everything versus Terraform. Fight.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=11)** - Ah, come on Ernest. We know that there's never one silver bullet in tech.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=16)** - Well, I'm not hunting werewolves, until this weekend at least. I'm building infrastructure and Terraform's the way to do it. It works across all the major cloud providers.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=25)** - But what about the cloud provider specific solutions? Isn't AWS cloud formation optimized for AWS and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Arm templates optimized for [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or at least they support all their new features?
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=39)** - So, not really. Besides those solutions being cloud provider specific, they're made by different teams inside those large organizations and they lag their own feature releases too. Since all cloud features are API driven a third party module can get put together as quickly as an in-house one in practice. There's a huge Terraform community contributing to the public Terraform registry. So I'd venture to say Terraform support for each cloud is as good as the cloud providers itself.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=68)** - Okay, well, but what about doing it imperatively in code instead of using a tool like Bodo or using AWS's own CDK?
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=77)** - I don't know, man. I've never been a big fan of that. Not only do you need to rewrite a bunch of code that an infrastructures code framework already has, you're biting off a lot of complexity and error prone fiddling. Driving infrastructure from app code has its place. For example, starting per user workstations or something where you really need fine and instant control. That's definitely not your core network. You want your base infrastructure to be well defined and repeatable.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=105)** - I've heard that you have to think about how to store your infrastructure state in Terraform, though. You don't want to just keep that on an operator's desktop.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=112)** - True. Well, cloud solutions use their own API fabric as state storage. In Terraform, you need to choose where to store your state but it's easy to store it in any database or an encrypted inversion controlled S3 bucket.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=126)** - But aren't you being all cloud-centric here? What about on-prem [Hardware](../../Topics/Hardware.md)?
>
> **[2:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=131)** - So that's a fair point. You can't easily do base infrastructure using pure Terraform on bare metal. There's some experimentation in that direction but I personally would absolutely use something like digital rebar that handles pixie booting instead.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=146)** - So, I gotcha.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=148)** - You would have if Rob Hirschfeld and the smart folks at RackN hadn't then made a digital rebar provisioner for Terraform. Checkmate.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=158)** - Ah, snap. Okay, I guess you're right. It's a good thing that using Terraform at scale doesn't result in a hell of core Terraform and module version dependencies.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=170)** - Who told you that? Who told you that?
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=172)** - You did.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=174)** - Okay. Well that that's true. Complex infrastructures make for complex Terraform. You need to compensate by breaking it up. I've tried various packaging dependencies and containerizing schemes. Terraform can be too much for a simple job.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=189)** - I do see why you recommend Terraform. You know, for so many cases it seems to have become the most popular choice out there. It has a lot of community and commercial support but I have to admit, I still miss the provisioning framework that we built together back in the day. It built [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), but also did app deployment and rationalized runtime service dependencies.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=211)** - Well, I agree, and the one drawback I find in Terraform is the common flaw in all the available solutions, really. There's a sharp separation between infrastructure provisioning and application deployment and runtime orchestration tools largely based on historical ops team versus dev team responsibilities. And that's not very [DevOps](../../Topics/DevOps.md).
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-terraform?u=76281980&t=233)** - Double snap.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (16), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **CLI Commands:** terraform (16), aws (3), snap (2), make (1), find (1)
> **Speakers:** - but (3), - so (3), - i (3), - ah (2), - well (2)
> **Env Vars:** aws (3), api (2), cdk (1)
> **Analogies:** for example (1)
> **Warnings:** gotcha (1)

#### [What's in the box?](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=0)** - Alright, let's get down into the details a bit more about what each box in our system is, how it gets created, and how it stays up to date. By box, we mean the individual running system, whether it's [Hardware](../../Topics/Hardware.md), a virtual machine, a cloud instance, or a container. First, we'll start with defining a few key terms to help us think about our boxes and our system, and how they're configured to run both initially and over time. This process is generally known as [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md). Provisioning is the process of making a server or node ready for operation, including installing the OS, system services, and establishing network connectivity. Deployment is the process of deploying and upgrading applications on a server. Now, these two terms are mainly different for historical reasons. You know, like a developer, they might only think about deploying an application and its APIs, and an operations engineer is, you know, worried about provisioning the OS and the network components. But consider if you're using version code for your infrastructure, and version infrastructure for your applications, you can use many of the same tools to roll out both. Configuration management tools like Chef and Puppet can make both operating system-level changes and deploy applications using the same semantics. You can even drive both of them out of the same build system. Here's an example of a chef recipe to install a standard OS package for the Apache 2 web server. It's smart enough to understand which package to use on RPM-based systems and which to use on Yum-based systems.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=97)** You just have Chef run on a node and it'll check to see if the package exists and, if not, it'll install it. And then here's a Chef recipe to install an application. In this case, the golang cloud generator that we wrote. It downloads a zip file from the application from our Nexus artifact repository, unzips it, and runs it. In this way, you can use code to do all the OS, network, and security, application configuration, everything that you need for a base operating system to get all the way to a fully configured and working server without all the manual steps. Infrastructure and services need to be managed after their initial creation, of course. Initial provisioning and deployment is great, but being able to control and upgrade a running system, that's also critical. This includes detecting whether the system is really working in the state you desired, or if it's broken from a manual change, a runtime error or something in the cloud provider, and you want to be able to roll out new versions and changes the same way you initially provisioned your system. This brings us to another important concept: orchestration. Orchestration is the act of performing coordinated operations across multiple systems. Once a system is running, it can be disruptive to update it while it's in use. An orchestration system keeps a registry of the systems you're running and allows you to coordinate deployments. For example, by draining web connections and then taking a server out of a load balancer while you upgrade its application version and then putting it back into service,
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-s-in-the-box?u=76281980&t=191)** then you can repeat the process with the other servers. The point is that the orchestration system needs to give you ability to roll out changes of any type while minimizing downtime and customer disruption. Tools like [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) and Rundeck let you construct workflows to operate on your system in an orchestrated manner. And newer tools like [Kubernetes](../../Skills/DevOps/Kubernetes.md) promote different models of orchestrated deployments with containers. Now these are the building blocks of configuration management using [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md). But you may already be wondering how exactly to use them. You know, which tools to use, when to use them, and if you should think of your system as long-running boxes where changes are applied in place or replace the boxes for each deployment. Now, this is a great question, and there are reasons why you would choose one approach over the other, and we'll cover that in detail in the next two videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (3), [Hardware](../../Topics/Hardware.md) (1), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1)
> **CLI Commands:** node (2), make (1), apache (1), yum (1), ansible (1)
> **Prerequisites:** install (3)
> **Definitions:** known as (1), is a  (1)
> **Env Vars:** rpm (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** zip file (1)
> **Analogies:** for example (1)

#### [Declarative vs. imperative](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980)

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
> **[0:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=14)** - There are two main options for how a [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) system works: declarative and imperative. In a declarative approach, developers specify the desired state and let configuration management determine how best to achieve it. "Chef" and "Puppet" are declarative tools. You say, I want this package installed and the recipes are written in a way where they'll check if the system is already configured, and, if not, it'll change it. And it'll keep on running to try to get it that way if it doesn't take the first time. That's called being convergent. As, over time, the tool works on converging the system to the desired state. The developer is less concerned with how it actually happens and usually has only to be concerned with the desired state at the end.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=57)** - Okay, so let's compare that with the imperative model. In the imperative approach, developers specify the order of actions to be taken to achieve the desired result. The imperative tools are more expressive and allow the developer to perform complex, conditional logic in the system. Think of this as something like [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), Salt, Rundeck or even Shell script. They're a lot more explicit about the resources they manage and they give the developer full control over how the system changes are applied.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=87)** - [Instructor 1] The declarative model specifies the desired in-state of the system; it specifies the "what" we want to happen.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=94)** - [Ernest] Whereas the imperative model specifies "how" the end-state is achieved.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=99)** - The declarative model is easier, because it allows configuration management to deal with all the details.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=104)** - You lie, I like having control.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=107)** - No, no, no. Hear me out, Ernest. Declarative tools are simpler and less error prone. Things like Shell scripts don't really do a good job of checking to see if they needed to make a change in the first place, or testing to see if they made the change successfully.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=121)** - Well, that's the theory. Declarative tools arose in the early days of [DevOps](../../Topics/DevOps.md) to make configuration management less bespoke and more standard. And they work well in desktop or lab environments where you don't really need control, you just want all the boxes to upgrade themselves at some point. But how we use systems has changed and it makes declarative tools less suitable, now.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=143)** - What does that mean?
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=145)** - I'd say most of the large scale systems I've worked on in the last 10 years have been running applications that need more careful orchestration of their upgrades and changes. Those declarative tools tend to have a convergent model of employment that says, "Well I'll try to upgrade these a hundred servers at no particular time, and if they fail, I'll just keep trying to get them into the declarative state, no hurry." If those applications are coordinated with a database change or serving trafficked customers that shouldn't be getting random old and new answers, that's a problem. You need the the control of an imperative system, because they're easier to orchestrate.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=183)** - But if you do imperative provisioning, you're assuming those systems will always stay in your desired in-state. You know, systems are complex and they change over time. The actual state of the system will diverge from what the developer knows to be true, whether through the resource provider or even the OS package level. You just can't know everything in your system, resulting in the developer's mental model about the system not matching the actual system state.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=207)** - You're right, it leaves the problem of drift detection to you.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=210)** - Okay, so you're on my side now.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=213)** - Well, maybe. The thing is, with the rise of VMs and containers, individual systems are less complex, now. Instead of let's put a bunch of applications on one server, like we used to.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=224)** - Ah, yes. The good old days. I remember our app server cluster well with 30 [Java](../../Skills/Software%20Development/Java.md) applications on it.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=231)** - Yeah. I thought the pages would never end, but anyway, we have much less complex individual systems. Often we'll maybe add a couple packages and then one app service, and then go. With containers and serverless, often there's not even a need for any OS provisioning. For these, a simpler imperative approach is way more understandable and testable.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=254)** - But what about your overall network? It's so easy to lose track of things if you're just making a single imperative change.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=262)** - True. The good thing about [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) is that it has a single standard A-P-I to use to control it. And then it's more of a solved problem to instantiate a declarative model. For anything that has controlled APIs for deployment, orchestration and runtime, then yeah, it makes sense to go with a declarative approach. However, if you're needing more control inside the box or system, for OS level packages, I find it better to think about that as an imperative model.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=291)** - Right on. That makes sense to me as a good delineator, for those thinking about which direction to go. That's what I see people doing, too. A declarative tool like [Terraform](../../Skills/DevOps/Terraform.md) is the current favorite for infrastructure provisioning and then for systems, an imperative tool like Ansible, or even just a couple lines of Shell, if it's a container, it seems to be the lead option there.
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/declarative-vs-imperative?u=76281980&t=312)** - It still seems like there could be a better solution, though. Running the same installs on a thousand servers is just asking for some of them to break and it seems wasteful. What if we could just build the entire system and then roll it out? Then the the systems themselves could be immutable and not need to change over time.
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
> **Frameworks & Libraries:** [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (4), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2), [DevOps](../../Topics/DevOps.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **Speakers:** - ah (4), - it (3), - i (2), - okay (2), - you (2)
> **CLI Commands:** ansible (2), make (2), find (2), terraform (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)

#### [Everything vs. immutable](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=0)** - Well, I know we just learned in the last video that imperative provisioning is best.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=6)** - I think you mean declarative.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=8)** - But there's an even better approach. Immutable provisioning. Everything versus immutable, fight.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=16)** - What do you mean, immutable?
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=18)** - Well, immutable deployments mean that pieces of your infrastructure aren't intended to be changed after deployment. But instead are destroyed and recreated to affect changes.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=29)** - Well, that doesn't make any sense. You have to change what's on your servers.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=34)** - Or do you?
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=36)** - Yes.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=38)** - Well, but remember all our new infrastructure options. You can throw away an old server and create a new one in minutes. At Netflix, for example, they popularized an architecture where you bake new Amazon images for every code change, and put whole squads of them into service to conduct a rollout.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=55)** - Yeah, but isn't that kind of course grained, replacing whole servers just to make a code change, or a security patch?
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=63)** - We've all had just a security patch brick systems. This approach lets you build, test, and roll out your infrastructure change in a reasoned way. Truly identical to a code change. It also lets you perform more sophisticated rollout strategies, like blue green deployments and canarying, with your infrastructure, not just with your applications.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=83)** - I don't know, it seems like a lot of work to do all that creation and destruction. Isn't it kind of, you know, wasteful and risky?
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=92)** - Most modern systems scale up and down as part of normal operation anyway, so it's largely the same mechanism which adds to reliability. And having a CM tool try to make the same, complex software change across a hundred servers is a lot more work. And the chance that it'll go wrong on one or more of them is, it's there. If you do the install once, to immutable artifact and deploy that, you're actually doing a lot less work.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=118)** - Okay, I seem to remember a classic [DevOps](../../Topics/DevOps.md) article by Luke Kanies, called Golden Image or Foil Ball. That showed how hard it was to manage images and that you should use CM tools, though. You don't want to cross Luke, do you?
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=135)** - Not me. But with respect, it was true at the time. But that was 2009, and most imaging was slow and not scalable. I used Ghost to clone hard drives in the '90s too.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=147)** - Well, snap.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=149)** - But now tools like Packer let you stamp out version VM images, and Docker lets you stamp out version Docker images. And the tools to manage them exist now. Furthermore, like we've been talking about, the move to [Microservices](../../Skills/Software%20Development/Microservices.md) and modern scaling tend to putting a limited load out on each given system, so that they're very specific in their role. If you can track the compiled artifacts of your code you can track the compiled artifacts of your infrastructure.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=177)** - Okay, I see your point. But, you can't just throw away your database, can you? What about things that need to be persistent?
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=185)** - True enough. Although that just means you can't throw away your storage. Plenty of people run redundant sets of database servers that you can roll. [MongoDB](../../Skills/Software%20Development/MongoDB.md) is great for this. Or database engines in a container, that mount their storage on a separate drive.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=201)** - Okay, if your production environment is really immutable, how do you log in and make changes to fix production problems?
>
> **[3:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=209)** - You're right, it takes a different approach. Plenty of observability, so that you can figure out what's wrong, and then you fix the code and deploy a new version. So you tend to be tied to your deploy pipeline. It needs to be really fast and reliable to make this work.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=225)** - But where does it stop though? I mean, do you make your entire network one big thing that you just throw away? Or just the servers, or the containers on the servers? Where does it all end, Ernest?
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=238)** - That's a good question. And it does depend on what you're doing. If you try to deploy a very complex system, you've gotten yourself back into the problem that immutable building blocks has gotten you out of. Netflix works at a giant scale, so they can just swing in a whole new VPC full of mostly identical systems. Most people don't immutably deploy things like their base VPC network, but do use baked system images and containers and orchestrate from there. [Kubernetes](../../Skills/DevOps/Kubernetes.md) is kind of the poster child for this. You have a core node image and containers. And then it handles deployment, scale up and down, replacement, and so on.
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=278)** - Okay, I see where you're coming from. It's just such a big change from what we all used to do in [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md).
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=285)** - I feel you. In the end, we're just moving up one level of abstraction. In the old times, even single processes weren't always immutable. But we quickly learned that for 99% of use cases you want processes that act just like each other. And not to mess with them, expecting to spawn and kill them. Now, changes to running processes is generally just a tell of a security compromise.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=309)** - Right, you know I always used to compile Apache myself on every server. And when suddenly you could just install a pre-compiled Apache from a package, I wasn't sure what to think of it. But it ended up saving me time and let me worry about higher level abstractions.
>
> **[5:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=325)** - And to be fair, you still have your same declarative or imperative choice. It's just that action is taking place in the build stage, and you're just running the resulting immutable artifacts in production.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=337)** - Hornswaggled again, Ernest.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/everything-vs-immutable?u=76281980&t=338)** - And that's immutable deployment. It's not the right thing for every case, but it has compelling advantages in a lot. I might dare say the majority of cases. Now stay with us. We're done talking smack and we're going to hit the code. And show you how to use real tools to implement all these concepts in our provisioning lab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1)
> **Speakers:** - well (5), - okay (4), - i (3), - but (3), - and (2)
> **CLI Commands:** make (6), docker (2), apache (2), snap (1), node (1)
> **Env Vars:** vpc (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)


### 3. Bringing It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Provisioning lab overview](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=0)** - In this chapter, we're going to walk through a lab environment built with a variety of infrastructure automation tools, working together to create a complete working environment. This lab is not an end-to-end walkthrough of how to install and configure each of these tools and how to write [Terraform](../../Skills/DevOps/Terraform.md) code, [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) playbooks, and so on. There are entire courses here in the library that'll walk you through setting up and learning these tools. Instead, our goal is to illustrate the concepts we've talked about in the previous chapters and let you see what [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) looks like and how it works in practice. Now, having said that, if you want to try to follow along, we have a detailed guide on exactly how we set up our lab environment included in the class materials. You'll need a Mac or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) desktop system or a [Windows](../../Glossary/Service/Windows.md) system running Windows subsystem for Linux, or WSL2, installed. But all you really need to do from your local system is generate an SSH key and SSH into a cloud server you create. You'll also need an [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) account with a credit card attached as we'll be spinning up a couple dollars an hour worth of infrastructure. We're going to use an open source project called kubespray available on [GitHub](../../Skills/Software%20Development/GitHub.md) to create an AWS [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) using Terraform. Then we'll install [Kubernetes](../../Skills/DevOps/Kubernetes.md) on it using Ansible, getting it ready for us to install our own application. I'll walk through the infrastructure setup and then James will walk through the application deployment options. And we're not just making a play infrastructure.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/provisioning-lab-overview?u=76281980&t=93)** We'll be creating a redundant infrastructure with appropriate [Network Security](../../Skills/Cybersecurity/Network%20Security.md) in the cloud. We'll take it step by step, though. We'll do a separate video covering each layer. Remember, the goal here isn't to become an expert in AWS or Ansible. It's to understand the ways you can automate each layer of system set up and prepare to take proper advantage of infrastructure as code. I'll see you back here to introduce you to the cloud, in this case, Amazon Web Services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [Terraform](../../Skills/DevOps/Terraform.md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows](../../Glossary/Service/Windows.md) (2)
> **CLI Commands:** ansible (3), terraform (2), ssh (2), aws (2)
> **Prerequisites:** install (3), set up (2), configure (1), you'll need (1), setup (1)
> **Env Vars:** ssh (2), aws (2), wsl2 (1)
> **Tools:** github (1)
> **Speakers:** - in (1)

#### [AWS](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=0)** - [Instructor] Welcome to "The Provisioning Lab." If you already know how to use [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), you can skip to the next video, but I wanted to make sure that everyone's following along when we make our infrastructure in [Terraform](../../Skills/DevOps/Terraform.md) and go into AWS to inspect it. Here, we're at the Amazon Web Services homepage, aws.[amazon.com](https://amazon.com). If you haven't created an AWS account yet, this orange button in the top right will offer you a "Create a new AWS account" option. In my case, my Alexa's been listening to my every [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) and knows that I already have one, so it just tells me to log onto the console. That's just a little joke, Alexa. Please don't hurt me. So now, we're in the AWS console. Most things you can do in here you can also do via the AWS Command Line Interface tool or the API, but it's easier to illustrate visually here, so we'll leave the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) and API for later. Remember, this lab isn't a full walkthrough of AWS, but if you've just signed up for an AWS account and you're logged in as the root account, you're going to want to go into Security Credentials, set up multifactor authentication on that account, create a new IAM admin account, I've made one called "emueller" that I've given administrative rights, and then log out as the root account, log in as your new IM admin account, set up multifactor authentication on that, and then you can set up the access keys that you're going to use to programmatically access your account
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=93)** over the course of the lab, but using the root account is the number one [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) in AWS. You're going to want to lock that one away in a box for a rainy day. The number two security risk is not having multifactor authentication set up on your accounts. So, make sure and do those two things before we get started. Here's the massive list of services available in AWS. Everything from compute and storage and online [Databases](../../Skills/Software%20Development/Databases.md), to fancier things like machine learning services, [Game Development](../../Skills/Software%20Development/Game%20Development.md), all sorts of things, but what we're going to go look at is under Compute. [EC2](../../Skills/DevOps/Amazon%20EC2.md), which stands for Elastic Compute Cloud, this is where you go to run virtual servers in the cloud. So, there's only so easy that Amazon can make running a server, so you'll see here in the sidebar all sorts of options for manipulating images, storage, networking, security, and so on, but you can get started with just saying defaults. So, I'm going to show you how easy it is to start a virtual server in the cloud. First, go to this pop down in the top right and pick a geographic region that you want to run your server in and switch to that region in the console. I'm going to choose Oregon because I hear that the data centers there are outstanding in their field. (Instructor snickering) Okay, back to the console. So, the Instances section is where you see
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=188)** any servers that you have running. We don't have any right now. So, I'm going to go up to "Launch Instances," which is going to open up our little wizard that they have for you to run a new server. First thing, we're going to name it. I'll just call it "Test Server." Next, you pick an image to start it from. There are all of the common operating systems represented, thousands of community-contributed images, and you can even create your own. I'm going to pick [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) 22.04. Then, you pick an instance type. This is essentially the [Hardware](../../Topics/Hardware.md) size of the virtual server you're going to make. This can be anything from a tiny micro instance on through a bunch of larger options and then all the way down to giant, bare-metal instances with 48 CPUs and 384 gigs of memory. This is running on my credit card, so we're going to go for the small one. So next, I'm going to pick an SSH key pair to use to connect to the instance. Now, I'm cheating a little bit because you have to create this locally and then import it, but instructions for that are in the lab materials. Then, you set up any other options like [Network Security](../../Skills/Cybersecurity/Network%20Security.md). I'm going to let us SSH in from anywhere to make it easy to connect, and then you have a bunch of other options, how much storage, advanced details, but I'm just going to take the defaults,
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=280)** and then we go over here and we say "Launch Instance," and it says it has started to launch it. You can see it's impending state. When you click on it, you can go in and see all sorts of other details, especially the public IP address that it's going to be available at. Go check. Sure enough, it made an eight-gigabyte disc for the storage. You can look at your other security and networking settings, and look, it's already in running state. That is super quick, and to prove it, let's connect to it. I'm going to connect to it from the console. We could do it via SSH, but this is quick and easy. So, we'll connect in. It's going to load up a virtual terminal here in the web browser, and here we are. We are at the command line of our very own brand new Ubuntu server. That's faster than it'd take you to look up Dell's phone number to order one. Alright, so are you done with it? Well, that's easy enough. We'll go back here to the EC2 console, and you can stop and start the instance, which is like powering it down and booting it back up again. While it's powered down, it's not incurring the charges for the actual virtual server, although there are still some charges
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/aws?u=76281980&t=373)** for keeping the disc alive, but we're going to terminate it, completely destroy it. So, it's going to warn us and say, hey, whatever you have on that disc drive is going to go away, and we say, that's fine. It goes into shutting down mode, and then, in less than a minute, it will go in to terminate it and it'll be gone. So, that's the cloud, and that's how quickly you can get compute resources, just as much as you need for just as long as you need it, which is perfect for automation. So next video, we're going to build some infrastructure at scale with Terraform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Terraform](../../Skills/DevOps/Terraform.md) (2), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2)
> **CLI Commands:** aws (10), make (6), ssh (3), terraform (2)
> **Env Vars:** aws (9), ssh (3), api (2), ec2 (2), cli (1)
> **UI Navigation:** go to (2), in the sidebar (1), switch to (1), click on (1)
> **Tools:** command line (2), aws console (1), terminal (1)
> **Prerequisites:** set up (4)
> **Cross-References:** next video (2)
> **URLs:** [amazon.com](https://amazon.com) (1)

#### [Terraform](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=0)** - [Instructor] Time for some fun using [Terraform](../../Skills/DevOps/Terraform.md) for infrastructure provisioning. First, let's look in our Amazon console. Oh, look, under [EC2](../../Skills/DevOps/Amazon%20EC2.md), I've got a bunch of running servers prepared to become part of a [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster. So, you've got some running cloud servers. "So what?" you ask. We did that in the previous lab. Well, the spiffy thing here is that these are all generated from [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) using Terraform. Let's go look at that Terraform code. I've forked an open-source project called Cube Spray to do this, and down in its contrib/terraform/aws directory, it has the Terraform code to make an entire Kubernetes cluster in Amazon. So the first key item here is the terraform.tfvars file, and this holds common configuration parameters that you might want to tweak in a normal Kubernetes installation. Note here that we've got 3 workers running. Then the primary Terraform code is in create-infrastructure.tf. As you can see, it details the parts of the infrastructure to create the VPC, the load balancer, starts getting into the servers. Now, you'll note here that it's pulling in variables from our tfvars file, and then finally, we get to the piece that creates our workers. It also refers to specific modules that hold more Terraform code.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=93)** So as you could see down here in the modules directory, there are little submodules of Terraform to do specific things. This one creates the VPC, and so it has all of the little bitty details that are required to set up the networking in AWS. This may seem daunting at first, but there are a great many preexisting Terraform modules out in the public Terraform registry, including ones to perform basic building blocks like this. Now, spinning all this up takes a little while, so I've already run this Terraform. Let's go back and see what it created again in the AWS console. As you can see, there's a set of servers, a bastion, 3 master nodes, 3 worker nodes, along with all of the associated networking and security configuration. Now, let's go to the system that I downloaded this code to and ran it on. There, you can see the code that I showed you in the previous bit. Now, the one difference here is that since I've already run the Terraform, it has something called a tfstate file. The state file contains all of the details of what it actually created. So every single asset that it made, it has all of the AWS details of what it did and what it believes are running. You can also store this state remotely
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=186)** in [Databases](../../Skills/Software%20Development/Databases.md) or [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). You always want to do that for a production system, but for this, I'm just saving it here in our code directory. So, let's change something and run some Terraform. Right now, we have 3 Kubernetes workers that are all medium-sized instances, as defined in our tfvars file, but I need more power, so I'm going to add another server to increase the cluster to 4 worker nodes. So all we have to do is edit this tfvars file, change the number of workers to 4, and we're going to save it. Now, the first thing that we're going to do is run terraform validate. That is going to look at the code and make sure it all looks well formed and we didn't make any terrible mistakes. It tells us the configuration is valid. So then we're going to run terraform plan. Terraform plan goes out and actually dry runs this code and comes back and tells you exactly what it thinks it's going to change. So here, you can see that the previous servers, it's not going to touch. It's going to create a new server, Kubernetes worker 3, and then it's going to change the inventory file
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=279)** that it uses to keep track of things. So this is how you verify that it's going to make the change you want, and it's not going to go affect anything that you don't want it to. So all we have to do is run terraform apply, so, prepares to make the change, then it's going to show me the plan again and ask me if I am sure, and I say yes. And away it goes. Back over here in the AWS console, you can see that worker 3 has already started and is initializing, so we have a newly larger Kubernetes cluster. Now, back at the command line, let's run terraform plan again. It says our infrastructure matches the configuration, so our specification and reality line up. So let's check in the tfstate file.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/terraform?u=76281980&t=347)** Sure enough, there is worker number 3, with all of the details about how it got set up inside of AWS. And that's the real power of infrastructure as code. You can spec out exactly what you want, have others review it, run it in a development environment, and then run it in your production environment with no room for manual error, both to create your infrastructure in the first place, but then also to precisely change it over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (19), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (6), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** terraform (19), aws (6), make (5)
> **Env Vars:** aws (5), vpc (2), ec2 (1)
> **Tools:** aws console (2), command line (1)
> **Prerequisites:** set up (2), required to (1)
> **Documentation:** specification (1), spec (1)
> **UI Navigation:** go to (1)
> **Definitions:** refers to (1)

#### [Ansible](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=0)** - [Instructor] We've provisioned some infrastructure, but what about [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) for the software? We made servers, but [Kubernetes](../../Skills/DevOps/Kubernetes.md) isn't just automatically running on them. So now we're going to use the other part of kube spray, the [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) playbooks, that actually install Kubernetes. Let's take a look at one of the simplest playbooks included, the one that checks the Ansible version. As you can see this playbook, it checks the Ansible version. It does a couple other things like checking the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and Jinja versions to make sure that, you know, it can run on this system. So let's run it. We run it with the Ansible Playbook command and we just feed it the playbook. So it takes it, it runs it, and it performs all those commands. And as you can see here, it's checked the Ansible and Python and Jinja versions, and they all pass. So, it's good. Now let's look at the main playbook, cluster dot yml. You can see at the top, the first thing that does is include that Ansible version playbook that we just ran. Then it goes on to set up the different kinds of hosts in our system. And as you can see, the primary thing that it does is apply roles to them. Each role, in turn, is defined by one or more playbooks. Let's go take a look at the Bootstrap OS role that it's putting on most of these servers.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=100)** So here, down in the tasks directory, is where most of the code actually is. Let's take a look at the Bootstrap Debian file because we've been setting up Debian servers for our Kubernetes. All right, so in here it goes through all of the little things that it does to get each server ready and you know it's low level stuff, installing Python, adding other packages to it, doing a apt get update. At the bottom level, there are either commands that Ansible knows how to perform, like package here is a Ansible keyword that says, okay, I know how to install a package on this operating system. Go ahead and do it. And then there are ones called raw which in the end says, execute this command line, right? So for something that doesn't fit neatly into one of the existing keywords, you just say raw and say what you want it to do. All right, so let's talk about running Ansible on remote servers. So first, let's look at the inventory file that our [Terraform](../../Skills/DevOps/Terraform.md) made. If you'll recall, when we ran the Terraform, each time it would output this inventory file that has the host names and IP addresses of all the components. This is so that Ansible can go and find them to do what it needs to do. They're broken up into roles so that it understands which, you know, which servers have the control plane running on them versus being workers. It should come as no big surprise
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=193)** to you by now that I'm a big old cheater. So I already ran cluster dot yml to install Kubernetes across all the servers. It takes a gruesomely long time. So let's run kubectl, get nodes, and it shows that we've got three control plane nodes already set up with Kubernetes and three worker nodes. But you may have noticed that in the last lab we used Terraform to add a fourth worker and we see it listed in the inventory file. Right? We've got four kube nodes here but we don't see it in Kubernetes. Well, that's because we haven't actually installed the Kubernetes software on it. So let's use a playbook that they use specifically for scaling up a cluster. It's called scale dot yml. So it's like cluster dot yml, but it doesn't have to do all the core cluster work. So goes through, installs some things. Notice how it's having to do a couple different iterations on the servers to get it working. So it has to go install some prerequisites, then go install another batch of things, and install a third batch of things. And then at the end, we should have working Kubernetes on that remaining system. So let's check out this Ansible command line that we're going to use. So first we're saying use the inventory hosts file to figure out where all the servers are, use the scale dot yml
>
> **[4:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=289)** playbook and then we have a number of parameters around how to connect to the other system. So, let's run this command and have Ansible automatically go determine that one of the listed server nodes does not have the software on it and then install all the Kubernetes goodies. So this is going to take about 15 minutes end to end. So I'm going to press the turbo button on my computer to skip to the end. Alright, finally, we're back after 13 minutes and 35 seconds of installing. Now that seems like a long time, but we installed literally hundreds of software packages, docker containers, and configuration items. So let's take a look at Kubernetes. And there is our fourth worker node ready to go. And all of the default control plane and cubelets and all of that are set up and running and this Kubernetes cluster is ready to use. So, that's Ansible. You construct nested playbooks to build up all the software you need, and then you can execute them either locally or on remote machines. You can even orchestrate complex workflows, like cube spray includes an upgrade cluster playbook that can perform graceful software upgrades on your cluster by coordinating and draining individual nodes and then doing an installation in a rolling manner,
>
> **[6:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ansible?u=76281980&t=384)** to do it without any application disruption. By automating and testing your operations in this manner, you can perform identical operations across large numbers of servers with a high degree of safety.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (13), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (11), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Terraform](../../Skills/DevOps/Terraform.md) (3), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1)
> **CLI Commands:** ansible (13), python (3), terraform (3), make (1), apt (1)
> **Prerequisites:** install (7), set up (3)
> **Tools:** command line (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Docker](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=0)** - [Narrator] Now it's time to look at Docker. As we've talked about, Docker containers can be thought of as Micro VMs and they package all the software and application needs to run and nothing else, or at least that's the promise of it. Well, let's start with a look at Docker Desktop. Notice on the left hand side, we have containers, images, and volumes. I'm clicking into images first and we don't have any images available at the moment. We need an image to be able to run a container from that image. So let's leave the desktop view and head on over to the command line and make our image. Now I'm in the [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md)-cloud generator [GitHub](../../Skills/Software%20Development/GitHub.md) repository which is a GitHub repo and features a Go Lang web application I wrote for the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning classes. It takes text and turns it into, you guessed it, a word-cloud. In a few minutes, we'll take a look at that, but for this video, we're putting word-cloud generator into a docker container and then when the container gets run, it will execute the application. Before we build our image, let's look at how a Docker container gets built. I'm opening up the project's MakeFile in Vim. I'm typing Vim MakeFile. There's an entry named Docker-Build. In it, it has Build, Docker-build-Mac, and Docker-build-amd. The one system dependency you have to remember is the underlying architecture of the box, like Intel or ARM and so on. I'm building on an M2 Mac which uses an ARM 64 architecture but most servers are Intel or AMD based, which is AMD 64. So we can use this Docker container in Earnest [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=93)** In the next video, we'll use the Buildx Cross Architecture build tool to build it for AMD64 as well. So let's get back to the build, it first runs build before doing any Docker steps. It runs for [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), [Windows](../../Glossary/Service/Windows.md), and Mac. Once we have our artifact for the word-cloud generator app, now we have to put it inside of a container. For this, we'll be using Docker-build-Mac. Docker-Build tells it which Docker file to look for. It gives it a few tags and then it looks in the local directory. So let's open up that Docker file and understand what it's doing. I'm typing vim Dockerfile. It starts with an Alpine Linux container, which is a very lightweight Docker container, which is roughly five megabytes in size. That's awesome for us. Next, it copies in our application artifact, the word-cloud generator app and it puts it in the op directory. Next, it exposes a port and then it has this command here entry point. The entry point command specifies what is run after the container is initiated. This format is pretty standard for a containerized application with a single purpose. Okay, so let's just build it and I'm going to run make Docker-Build. Okay, that built my app and made a new Docker image and put it inside of it. Let's go back to Docker Desktop and we can see our images that were created. Notice there's only 12 megabytes in size. Okay, so that's everything we need.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=187)** It's got the OS, the app. That's everything we need to run in that small container. It's pretty cool and it's very lightweight. Now, I could run it right from the desktop but let's go back to the command line again. In my make file, I have Make-Docker-Run. I'm going to call that right now. Okay, so notice what it did here. It started Docker and it put it on port 8888 and it mapped that port externally for that. We can go see that in Docker Desktop again. Okay, look, there's our container. We can see it running. It's running on port 8888. Let's check it out. Okay, we're on local hosts, port 8888 and I'm going to go ahead and paste in a few hundred words from the Lorem Ipsum text generator and let Word-cloud generator just do its thing. Okay, great, it's all working. Now we have our application. It's in a container, it's running locally, everything's good, but we want to share our image with other people. So let's go back to the command line and let's do just that. I have another entry in my make file called Docker Push. That puts the image that we made into Docker Hub, which is a public docker registry that people can use to share images. As we mentioned earlier, we'll push both the Mac and the Intel based images so we can use them in multiple architectures. So I'm going to type in make Docker-push. Okay, great, got all the Docker containers pushed up there. Let's go take a look at Docker Hub. So I'm on Docker Hub and I can see all the containers that just got pushed up.
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/docker?u=76281980&t=280)** And this is the admin interface since I own it and we can see what it looks like to the public. And here are the containers that would look like for someone that wanted to download it. So let's recap. We have our web application bundled in a very small Linux container that is invoked on startup and runs. We then told Docker to run that image and bind it to a high port and then we ran against it and saw it in the browser, but it's ephemeral and we could have just run a script or a task and then asked it to exit. Well, we forced it to stick around and wait until we were done with it because we're using it as a web application. Then we shared our container with the world on Docker Hub. Okay, that's a quick tour of what you can do with Docker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (6), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** docker (31), make (6)
> **Tools:** docker desktop (3), command line (3), vim (3), github (2)
> **Env Vars:** arm (2), amd (2), amd64 (1)
> **Cross-References:** go back to (3), in the next (1), we mentioned (1)
> **Ports:** port 8888 (3)
> **Definitions:** is a  (3)
> **Exercise Files:** github repo (1)

#### [Helm charts](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=1)** - [Instructor] Now that James has told you about Docker containers let's get an application deployed onto our [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster. It's sitting here empty except for all the default services. Very lonely. So we could do this by hand, but we're not animals, right? This is an [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) course. So we're going to use IAC to deploy our applications as well. In the cloud native ecosystem, [Helm](../../Glossary/Tool/Helm.md) charts are a popular way of deploying applications. This is the Helm homepage, helm.sh. Here you will find a lot of documentation and resources to help you along your Helm journey. I've already installed Helm on this server, but the instructions to do that are in the course materials. Now, there are a lot of Helm repositories out there with ready to use charts already. Here. I've added the Bitnami repository to our local. And then we can search this repository to see what all it has in it that we can use. And as you can see, there are a lot of Helm charts in here for open source projects. Everything from Airflow and Apache, down to [WordPress](../../Skills/Web%20Development/WordPress.md) and Zookeeper. So let's download one and take a look at it. Let's say the Nginx web server. We can do that with helm pull, and then the name of the Helm chart. All right, so it downloads it as a TAR zipped file, so we will unpack it.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=100)** So now if we go into our Helm chart directory you could see a number of files. So the values.yaml is very similar to the [Terraform](../../Skills/DevOps/Terraform.md).tfvars file in that this has a bunch of top-level settings to describe how you want to configure your Nginx server. It has a whole bunch of them because even a simple thing like a web server, you can set a lot of different things. Then inside the templates, here you have a file for each kind of Kubernetes component that has to be generated to deploy Nginx. So it has here the configuration to make a deployment and to make a service and to make a ingress controller, all that good sort of thing. So let's look at deployment.yaml. All right, as you can see this, it looks like a normal Kubernetes deployment but it's full of all sorts of both including variables and doing conditional logic on variables. But you're probably feeling froggy by this point. Who wants to deploy something pre-existing again? So let's forget Nginx, and let's make our own Helm chart. And we'll use it to deploy James'
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=194)** [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) cloud generator application. So Helm can create a stub chart for us. Let's ask it to create one called wordcloud.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=210)** All right, we go into the wordcloud Helm chart directory and it looks like a stripped down version of the Nginx one, which is actually exactly what it is. So doesn't have all the bells and whistles but it's essentially just deploying a Nginx web server with all the components required to do that. So let's change this to do what we want it to do. So instead of installing Nginx, we're going to change that to get James' word cloud generator.
>
> **[4:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=252)** And let's see, let's go ahead and change the replica count to three so that we can have three of these running instead of just one. And then to make sure that we can expose it to the internet we're going to go down here to the service and we're going to change it to a load balancer. And you may recall that James' container listened on port 8888. So that's what we'll go ahead and set. And then you know how James mentioned the different architectures? So he uploaded a couple different versions of this word cloud generator. And so we're going to pull the tag for latest-amd64 so that we make sure and get the AMD architecture version of it. All right, we're done with that. So first we're going to ask Helm to check our syntax, make sure we didn't mess anything up. My typing isn't what it used to be. And it says it's fine. It recommends us setting an icon somewhere but we can ignore that. And now we're going to essentially dry run this, have Helm exercise it and see what it thinks it's going to do. So for that we're going to use helm template --validate --debug wordcloud.
>
> **[5:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=346)** So it's going to parse the Helm chart and say these are the different things that I'm planning on creating based on what you said. You know, this deployment, this pod. And it all looks pretty good to me. So we're going to tell Helm to go ahead and do this. So with that, we use helm install. We're going to call our application wordcloud. We want it to pull the Helm chart from our little wordcloud directory that we have here. and we're going to specify the file to get the values from which is of course, inward cloud, it's our values.yaml. Then we run that. And so it's going and installing the Helm chart on our Kubernetes cluster and then creating all of those different assets. So now if we do a helm list, it says hey I have an application called wordcloud that the revision 1 has been deployed. So let's take a look. All right, we have three running pods. We have a load balancer. And we have a deployment and a replica set. So that seems good. Let's check it out. So this is the name of the Amazon Elastic Load Balancer that it created. This should be accessible from the internet. So first, let's quick check it from local. We're going to curl just the headers.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=442)** And don't forget, we need the port 8888. Ah, and we're getting a response. That's nice. So now let's get fancy and try running this in a browser.
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=461)** All right, so I'm using [Google](../../Glossary/Service/Google.md) Chrome. We're going to put in that ELB address with port 8888. And it looks like we've got his word cloud app.
>
> **[8:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/helm-charts?u=76281980&t=484)** A word cloud. Outstanding. And there we go. A working application live on the internet set up with resilience in a Kubernetes cluster. And we built each layer using infrastructure as code. One parting note, you've seen how much the community is already created out there in [GitHub](../../Skills/Software%20Development/GitHub.md), Docker Hub, the Terraform Registry of Modules, Helm repositories, all great learning resources. Don't just copy and use things blindly, but don't be afraid of reusing and eventually contributing to these high quality community assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Helm](../../Glossary/Tool/Helm.md) (23), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (5), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Terraform](../../Skills/DevOps/Terraform.md) (2)
> **CLI Commands:** nginx (7), make (7), docker (2), terraform (2), find (1)
> **File Paths:** values.yaml (2), helm.sh (1), deployment.yaml (1)
> **Env Vars:** iac (1), tar (1), amd (1), elb (1)
> **Prerequisites:** configure (1), required to (1), install (1), set up (1)
> **Ports:** port 8888 (3)
> **Tools:** github (1)
> **Exercise Files:** template (1)

#### [Serverless](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=0)** - [Instructor] Now let's talk Serverless. We don't have to mess with setting up all the infrastructure in boxes, and we can just get our code up and running. For this, let's use the Serverless Framework, which is free to use for open-source projects, but it does have a subscription model for organizations. Your provider might also offer one as well. So like for AWS, check out the Serverless Application Model, or AWS SAM. So I've logged into my account on Serverless, and I'm going to create a new application. I'm just clicking Create App. Now, there's a lot to choose from here, from taking an existing application into the Serverless Framework or starting a sample application from scratch. I'm selecting to create a Node Express API application. But as you can see, there are a lot of options for setting up the data stack as well. All the components you need to run your application can be configured with the framework much like Ernest showed with [Terraform](../../Skills/DevOps/Terraform.md). Now let's give our Serverless app a name. I'm going to type in "infra-as-code-demo" and I'm going to go ahead and click Create, and that gives us a command that we need to run. So I'm going to take this and head on over to the command line and I'm going to run that command. Notice it's getting everything set up and then it says, "Do you want to deploy now?" Let's go ahead and do that. Now it starts building out the cloud formation stack so it can set up all the services that it needs to connect to. Once it's all done at the end, it's going to give us a URL. Let's go test it out.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=97)** So in my browser, I just sent an HTTP GET request and this is what I get back. "Hello from root!" So kind of a default message here. Let's head back to the command line and look at the code for the application. So I'm moving into the infra-as-code-demo and we can see the serverless.yml. Let's take a look at that. In here, we can see that the handler that gets called is the index.handler. And let's go ahead and open up the the index here. So I'm inside of the index.js and we can see the response that we just saw in the browser. It says "Hello from root!" Let's move over to AWS. I've logged into the admin console and now we have an application in the AWS Lambda Section here that says "infra-as-code-demo-dev-api." Once I click into it, I can see that I have my API Gateway, which is the thing that receives the HTTP traffic, and then it's sending it over to my infra-as-code-demo Lambda function. That's the really cool thing about using the Serverless Framework. It sets up the gateway and it connects it automatically using the CloudFormation templates. Pretty cool, right? In here, we can monitor our function. We can see different metrics for how things are going with our Lambdas. We can look at log events and we can see our recent request that we just made. And remember, Serverless is billed in time that it's in use. This is usage-based billing. That's great because you're only paying
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/serverless?u=76281980&t=190)** for that execution time. And if you have an infrequently used application, you aren't paying to keep a box up and running or multiple boxes up and running all the time. Okay, now I'm going to switch back to the command line and let's change what our app does and give it a new message for that HTTP GET. So I'm just going to say, "hi [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning!" And we're going to write that. And now we're just going to say "serverless deploy." And we use a little video magic there to speed that up. And now let's go back to our URL. And now we get our message "Hi LinkedIn Learning!" So to recap, we use the Serverless Framework, which configured and deployed a Lambda and an API Gateway. There are templates for much more, as you saw. We had a running app in just a few lines of code and it had ability to scale horizontally to handle hundreds, if not a thousand requests at the same time. Big bursts of traffic can be handled this way. And we did all this without creating [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or [Kubernetes](../../Skills/DevOps/Kubernetes.md) pods or any infrastructure. We tapped into our provider's services and we get usage-based billing on top. This means you have fewer things to maintain, fewer things to have security vulnerabilities, and, at medium to low volume, you usually have lower costs. So I hope you enjoyed this quick look into Serverless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Terraform](../../Skills/DevOps/Terraform.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** aws (4), api (3), http (3), url (2), sam (1)
> **CLI Commands:** aws (4), node (1), terraform (1)
> **Tools:** command line (3)
> **File Paths:** serverless.yml (1), index.js (1)
> **Cross-References:** go back to (1), as you saw (1)
> **Prerequisites:** set up (2)
> **API Endpoints:** get  (1)


### 4. With Great Power Comes Great Responsibility

[↑ Back to Table of Contents](#table-of-contents)

#### [What is infrastructure as code?](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=0)** - By now in the course, you've seen how our ability to use [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) is influenced by the kind of systems we're automating, whether cloud or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or containers or serverless.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=12)** - We've also walked through some examples using technologies like Docker, AWS, [Kubernetes](../../Skills/DevOps/Kubernetes.md), and [Terraform](../../Skills/DevOps/Terraform.md). But we really haven't addressed the implications of infrastructure as code.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=24)** - What is this tangled web you weave, James?
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=26)** - No, no, hear me out, Ernest. Yes, we've seen our infrastructure in code but there are a set of principles and practices that result from treating our infrastructure as code.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=36)** - Okay, I'll allow it.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=38)** - In the next few videos, we'll cover how treating infrastructure as code means we can do all the things that we can do for application code, but for our infrastructure.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=47)** - In the "Infrastructure as Code" book by Keif Morris, he defines infrastructure as code as an approach to infrastructure automation based on practices from [Software Development](../../Topics/Software%20Development.md). The emphasis is on consistent repeatable code for provisioning and changing systems and their configuration.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=66)** - So far, we've shown you how everything in your infrastructure can be controlled by code and represented in code. But what does it mean to be treated as code?
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=75)** - We have a saying in [DevOps](../../Topics/DevOps.md), servers should be cattle, not pets. You don't handcraft them and cater to their unique needs. You mass produce them using a standard mechanism, kill them and get more. Leave the cool customizations for the back of your laptop.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=92)** - So infrastructure as code is about adopting a development approach to your infrastructure and it's a cultural change more than a technical one.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=101)** - It's hard to wean yourself from the tendency to log into the server and change it but you'll have to. Like fixing a code bug, you'll change the code, build it, test it, and deploy it.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=113)** - When Ernest and I first worked together.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=115)** - At the dawn of computing.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=117)** - Yeah. It was on a web team without any build automation. Creating new systems was a 100-item manual checklist. System changes and app deploys were done manually during releases and documented in one of those write-only change management systems that, you know, enterprises love.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=135)** - So after a while, the configuration of any given box was totally unreproducible. Boxes that should have been identical weren't and troubleshooting the many production issues was a time consuming and difficult job.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=148)** - Some weeks of on-call rotation, I would get like hundreds of alerts and pages of all these problems in a really complex environment.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=156)** - Yeah, we lost at least one pager from an on-call pager rage incident for sure.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=161)** - That wasn't me, you know, but so later when we formed a new team that we were building cloud-based [SaaS](../../Glossary/Concept/SaaS.md) [products](../../Skills/Software%20Development/Microsoft%20Products.md), we agreed that our first priority had to be the implementation of a model-driven system that we would use to create and operate our systems and applications. Even though, you know, we knew it was going to take more time to get going.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=181)** - We built a tool that would simply take models that devs and ops collaborated on in source control, instantiate them in the Amazon and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Clouds, deploy code and dynamically hook up services to each other in a pre-production environment first for testing naturally.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=197)** - The difference was amazing. Suddenly operations became a nine to five job and even our time at work was, you know, focused more on design and implementation rather than in firefighting and doing manual changes.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=211)** - In treating our infrastructure like it was code was the secret sauce that made it work.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/what-is-infrastructure-as-code?u=76281980&t=216)** - Now, over the next few videos, we discuss how that works in practice as we touch on [Version Control](../../Skills/Web%20Development/Version%20Control.md), artifacts, testing, using CI/CD and organizing our teams around the patterns and principles that developers use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (7), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1), [Software Development](../../Topics/Software%20Development.md) (1)
> **Speakers:** - we (3), - in (3), - so (3), - yeah (2), - by (1)
> **CLI Commands:** docker (1), aws (1), terraform (1), cd (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)

#### [Continuous integration for infrastructure](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=0)** - In this video, we'll talk about the pipeline you'll set up for your systems to take them from code to artifacts to running system. Here's an illustration of a [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) flow where code gets checked in, built, goes through successive levels of testing and finally gets released to your production environment. But why do you want to do this? Well, this process does a couple of things. First of all, it isolates changes. If you check in small batches of changes and build and test each one, you know when something goes wrong. It also lets you trace back a specific deployment to a specific build, to a specific code change as opposed to having to make any changes in the environment by hand. The day of live code changes on production servers is mostly over and so it should be with infrastructure. So how do you do this? First, you'll want to use source control. If you're not experienced with it, it's easy. We'll use [Git](../../Skills/Software%20Development/Git.md) in this course, and there's courses in the library to show you the basics of Git. Every time you check in code, a trigger fires and the build system goes to test and build and test it some more. Like application code, you'll want to have tests for your infrastructure code and the actual running infrastructure. It's such an important topic itself that we'll cover it in depth in the next video. And then the build. Code usually gets compiled, parsed or even bundled up into what we call artifacts. Artifacts are versioned, unchanging sets of code that get tested and deployed.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=94)** For infrastructure artifacts, you usually see ZIP files, Debs, RPMs, Docker images, AMIs, or VMs. There are some very cool new options worth checking out though, like the Nix package manager that's designed to let you make declarative reproducible packages and web assembly or WASim, a format for a stack-based virtual machine that's a portable compilation target for all kinds of languages. One of the co-founders of Docker says they wouldn't have needed to create Docker if WASim had existed back then. There's no single right answer. They all have advantages or are necessary for different scenarios, but deciding what your artifacts are and how to manage and version them is very important. Here's a reference architecture of a [DevOps](../../Topics/DevOps.md) service delivery platform showing the flow from source repo to build and then to artifact repo, and then out into production. You may have multiple layers of artifacts, and that's okay. For example, one team might build everything into OS packages for their [Java](../../Skills/Software%20Development/Java.md) and [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) applications and leverage built-in [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md). Then as a second layer, they might build VM images and AMIs using Packer and build Docker images directly with Dockerfiles containing applications deployed from that first tier of artifacts. And this is usually controlled through a build system like [Jenkins](../../Skills/DevOps/Jenkins.md) or Bamboo or something similar. To store artifacts, it's common to use Artifactory or Nexus or a container registry
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/continuous-integration-for-infrastructure?u=76281980&t=188)** but I've seen it all with some people just keeping it simple and using a [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) bucket. The last step is deployment. Here's an example of that previous artifact flow with a specific tooling that Ernest used over at AlienVault for their [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) pipeline. AppCode and Java and Bash, infrastructure code and CloudFormation and Puppet all checked in to [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) source control, and using Maven and the Bamboo CI product. Artifacts such as AMIs, VMware images and Debian packages go into Artifactory. And then a continuous deployment job in Bamboo runs the Rundeck orchestration system to deploy production via Puppet and [Terraform](../../Skills/DevOps/Terraform.md). All together, that formed a comprehensive app and infrastructure service delivery solution. And that's the basics of continuous integration for [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (2), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **CLI Commands:** docker (4), make (2), git (2), python (1), terraform (1)
> **Tools:** bash (1), bitbucket (1)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** zip (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Testing infrastructure](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=0)** You can test more of your code without having to use or make real infrastructure by using mocks, which is a testing term for code used to replicate the behavior of an external system so that you can safely run unit tests without affecting your real one. [Terraform](../../Skills/DevOps/Terraform.md) version 1.6 introduced a standard Terraform test framework, and then version 1.7 introduced a mocking framework. Using it, for example, you can ask Terraform to substitute a mock Amazon Cloud provider for the real provider. Then when you run Terraform test, it runs your code using the mock. So it doesn't need real AWS credentials or access to the cloud. Instead, Terraform pretends to make the requested resources and you can validate that your code, at least logically, works the way you want it to. This is faster and safer, but less comprehensive than using Terraform plan, which does need real AWS credentials and reaches out to the cloud to evaluate what it intends to do, although without actually creating anything. Terraform test also supports running Terraform plan and defining assertions to test that the plan output looks the way you expect. This is a stronger test, but slower and requires real credentials. If you're using Terraform version 1.6 or newer, you can use the new official Terraform test framework I mentioned previously. In a test file, which uses the same syntax as normal Terraform code, you can specify whether you want Terraform
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/testing-infrastructure-28197329?u=76281980&t=93)** test to just run Terraform plan or actually run Terraform apply and make real infrastructure in a test environment. Let's say you've written a Terraform module that can make an S3 storage bucket in the Amazon cloud. Here's an example of a test file that exercises that code, spins up a real bucket with Terraform Apply, and runs an assertion to test whether there's a real bucket with that name in AWS. Terraform Test will then destroy the test infrastructure at the end of the test run. That's a very thorough test, but it takes time and expense to perform. Other IAC tools and languages have different testing specifics, but the concept's the same. First, validate code logic as much as you can without touching real infrastructure in unit tests, and then create real infrastructure in a test environment and validate it in integration tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (17)
> **CLI Commands:** terraform (17), make (4), aws (3)
> **Env Vars:** aws (3), iac (1)
> **Versions:** version 1 (2), version
1 (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)

#### [Works on my machine](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=0)** - Hey, Ernest, your newest code change ended up crashing Docker in production.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=5)** - Well, it worked on my machine.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=7)** - Ah, you say that like that's a legitimate excuse. It's all right. You know, believe it or not, deployment is a necessary step in your work, bringing actual value to users.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=18)** - It's the D in CI/CD.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=21)** - And in an infrastructures code world, it's code two and it needs testing.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=26)** - What you really want is reproducible infrastructure that works across all your environments with repeatable results from dev to test to production. This assures you that behavior will be the same as you expect during your development.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=40)** - Yeah, that's right. If you can have repeatable deployments then you can do rollbacks, you can do roll forwards with your infrastructure and not just your application code. Because as much as we like to think they're independent, they're not.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=52)** - And then you can reproduce environments for troubleshooting and experimentation.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=57)** - Okay, but how do you do it? Environmental differences have always been a sad fact of life for decades. Everyone knows that they're supposed to have identical tests in production environments but usually they're just somewhat similar at best which leaves room for new bugs to show up.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=72)** - Three steps, step one, versioned artifacts for your code and your infrastructure code.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=78)** - And step two, use that code to make a production-like environment in each phase of the dev cycle.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=84)** - And step three, have a mechanism to deploy it in an identical manner in each of those environments.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=90)** - Okay, let's talk about artifacts. This just means you package up and version your code like every library that's out there.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=98)** - It can be an actual bundle like an RPM or Debian package, or even just a [Git](../../Skills/Software%20Development/Git.md) revision. But the key thing is it can't ever change. It needs to be constant once generated and then used in each environment. James talked to you about artifact generation just a couple videos ago.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=114)** - Ah, you remembered.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=116)** - Oh, I wouldn't forget it, bro.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=117)** - Ah, thanks. Well, next identical environments. If you're generating your environments from this disc code, most sources of difference are from people making compromises.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=127)** - While you often do have to compromise on scale a lot of the schemes I see to try to save money on dev and test environments end up being penny wise and pound foolish. Yes, it can be more expensive to spin up servers in the same cloud providers, your production environment, you might need to buy that Oracle license or pay for that Datadog monitoring, but the fact that you're paying for that stuff in the first place means the business thinks your app is worth it. So behaving in a way that's guaranteed to make it slower, riskier and buggier to change that app, usually not a great idea.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=162)** - Yeah, of course, being perfectly identical can be hard. You know, scale and traffic differs at least but your code shouldn't. Externalize things like URLs to configuration so you can configure your different environments in a way where they should at least behave the same. Even the developer's desktop can get close. There's a lot of tools like Vagrant, Docker, [Compose](../../Glossary/Framework/Jetpack%20Compose.md) and Minikube that improve alignment even before you hit an external environment.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=188)** - And finally, the deployment. Deployment is code just like all the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this. So however you deploy your app in production is how it should be deployed in pre-production. This will prove to you both that your deployment code works and that the application and infrastructure components behave correctly when deployed. If you have stable versioned artifacts, generate your own identical environments and deploy with the same code in each place, you've gotten to a pretty darn good situation.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/works-on-my-machine?u=76281980&t=219)** - Yeah, well, you know, back when Ernest and I were working at National Instruments, we did a lot of manual deployments of [Java](../../Skills/Software%20Development/Java.md) apps across a cluster of app servers. It was slow and it relied on manual instructions from developers. A lot of the time the instructions weren't right and even if they were then we'd sometimes make a mistake on one of the servers. We wrote a simple deployment script that they had to use in the dev and test environments before we used it in production. And suddenly speed of deployment shot up and post-deployment bugs shot down.
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
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Speakers:** - and (6), - ah (3), - yeah (3), - okay (3), - well (2)
> **CLI Commands:** make (3), docker (2), cd (1), git (1)
> **Env Vars:** rpm (1), git (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### [You write it, you run it](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=0)** - Now that we're doing our [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), this ends up having more implications on how we work.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=6)** - That's right. You're now developing both your app code and your infrastructure code and testing and deploying it identically.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=13)** - But what does that imply about how we support it in production?
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=17)** - This may not be a surprise if you've taken our [DevOps](../../Topics/DevOps.md) foundations course or it's follow up DevOps Foundation site Reliability Engineering. But it's a shared responsibility.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=27)** - Yeah. We always think our code is going to work right in production, whether that's app code or infrastructure code, but even if it does upfront things change. You get more users. They start using your app in different ways.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=40)** - Someone needs to handle the problems and figure out what's going wrong. And the best person for that job is you.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=47)** - Yeah. As the person who wrote the code you're the one most able to support it and change it. Throwing it over the wall to someone else tends to make both someone less familiar with the code figure out the problems which they're naturally less positioned to do and it hides the problems from you, the person who can actually fix the problems at their core.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=67)** - Avoid passing the responsibility to someone else. By handling your own production environment, you're making the most effective feedback loop possible from problem to fix. Note that [Google](../../Glossary/Service/Google.md)'s SRE model for taking all over our operations from a product team, it's only used for apps with very large user bases that have proven themselves stable and have monitoring and tools in place sufficient for the SRE team to agree to take it on. Short of that, it's best practice to run it if you wrote it.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=98)** - So how do you do that? Well, first you want to take a team approach with however many other teams are contributing code to that environment.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=106)** - [Host] Put together good observability to monitor the system and discern what's going wrong.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=111)** - [Host 2] Have a practiced incident management process that makes handling problems routine and less stressful.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=117)** - When there's a problem prioritize coding and testing a real fix. Don't just keep putting out the fires each time they happen. I mentioned that AT&T [Cybersecurity](../../Topics/Cybersecurity.md) [SaaS](../../Glossary/Concept/SaaS.md) product that I worked on. We had a complete CICD pipeline. They rolled out infrastructure code and app code. We had loads of monitoring and could route issues to the right team pretty reliably.
>
> **[2:19](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=139)** - Now, what did you do for problems where it wasn't clear what was wrong?
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=143)** - In most places I'd worked up until then operations was always the first line of response for production issues. But in this case, the majority of them were being caused by our app code. So we put the developers on call first and let them escalate to an operations engineer if they needed one. That reduced overall off hours time spent, and it meant that very actionable improvements could get put into the product backlog.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=167)** - But didn't your product people object to that work interrupting their precious future development time?
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=172)** - Not at all. The product people wanted the product to work right as much as anyone and were happy for us to prioritize reliability work, especially when we had such direct data to prove the results it would have generated by people knowledgeable with the code. We called it eating our own dog food.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=190)** - Ah, some people like to say, drinking your own champagne.
>
> **[3:13](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=193)** - That's 1% or nonsense. I work for a living.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/you-write-it-you-run-it?u=76281980&t=196)** - Okay, Ernest. All right. All right. Look, there, there. Let's get you a nice nap and then we'll be back for a video on running the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your operations as code two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (1), [Google](../../Glossary/Service/Google.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1)
> **Speakers:** - now (2), - that (2), - but (2), - yeah (2), - this (1)
> **Env Vars:** sre (2), cicd (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### [Automate all the things](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=0)** - Okay, so we're done now. Our infrastructure is code, and so thank you for joining us in this course.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=6)** - Well, hold on, so it depends what you mean. There's your applications and your infrastructure, but people may be forgetting about some other pieces. What about your monitoring, your runbooks, your documentation, your API definitions, your [SaaS](../../Glossary/Concept/SaaS.md) integrations?
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=21)** - Well, you know, I thought I'd just, you know, click around and set all that stuff up manually.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=26)** - Have you learned nothing?
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=28)** - Well, you know, seriously, now that you have big parts of your system as code, look to see what else you can codify.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=35)** - All these things are part of your system, and they're all in scope in terms of reliability, performance, and security.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=41)** - The application boundary isn't just the code anymore. All the benefits you get out of [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), the testability and repeatability, you want all that in all the other pieces of your system.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=52)** - The great thing is infrastructure as code has been made possible by the rise of APIs, so you can program to them to create your infrastructure. Well, the majority of your SaaS providers and tools also have APIs nowadays.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=65)** - [James] Yeah, for example, instead of setting up monitoring [Dashboards](../../Skills/Data%20Science/Dashboards.md) by hand, you can define them in code and then load them into tools, like Grafana or DataDog.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=74)** - [Ernest] Same with your support runbooks. Version them and then deploy them from an artifact.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=80)** - There's plenty of tooling nowadays to help you generate documentation from your code as well as information on what can be monitored or manipulated. Yeah, these are all, at their heart, version code as well.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=91)** - Then apply all the same principles we've talked about here to them. Deploy your monitoring setup via API in your pre-production environments as well as your production environments. This makes sure your monitoring runbooks and so on are always linked to the right version of the apps and infrastructure they were designed for, and it lets you test them as well.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=111)** - Yeah, I wish I could say I've never seen monitoring cause a production outage, but I have.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=116)** - That's right. The pattern of define, build, test, deploy is a best practice for anything you can apply it to. Challenge yourself when you're doing manual work. Is there a way to do this as code instead?
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=130)** - Many of the tools in this space have started building ways to express these extra components as code. Take [Terraform](../../Skills/DevOps/Terraform.md), for example, we have a big library of providers that let you manage, you know, Salesforce users, DataDog dashboards, Splunk logging, even passwords in 1Password, CDNs, DNS, and much more.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=148)** - I had a team that wrote Bash shell scripts using the Rerun framework and built them into artifacts for the Rundeck Runbook automation system to use. We then used those scripts in Rundeck to orchestrate all our production operations, and changes to them were coded, versioned, tested, deployed in test, and then used in production in a controlled and auditable manner.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=170)** - Ah, you know, it's a big difference from back in the day when it was controversial for CIS Admins to even use source control.
>
> **[2:56](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/automate-all-the-things?u=76281980&t=176)** - We've come a long way, baby.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SaaS](../../Glossary/Concept/SaaS.md) (2), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (2), [Terraform](../../Skills/DevOps/Terraform.md) (1)
> **Speakers:** - well (3), - the (2), - okay (1), - have (1), - all (1)
> **Env Vars:** api (2), dns (1), cis (1)
> **Analogies:** for example (2)
> **CLI Commands:** terraform (1)
> **Tools:** bash (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** setup (1)

#### [CI for my IaC](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=1)** - [Instructor] In the video on Docker, we published a Docker image to Docker Hub that Ernest then used in the [Kubernetes](../../Skills/DevOps/Kubernetes.md) video. Now, that was great, but the astute observer might have realized that we skipped a little step there. Instead of submitting code to a CI system, I just ran the build from my laptop and then uploaded that directly. That's a big no-no if you work on a team with more than one person. What we want is a pipeline that builds our infrastructure instead of engineers doing this on their laptops. So, let's build a Docker container and then deploy it to the container registry that we're using, Docker Hub. So for this video, we're going to be using [GitHub](../../Skills/Software%20Development/GitHub.md) Actions. And I'm at the documentation site for GitHub Actions right now. GitHub Actions are really great because we can do all sorts of things, from publishing a container to a registry, like we'll do in this video, or issuing an alert to [Slack](../../Skills/Software%20Development/Slack.md), or even SSHing into a bastion box and running [Terraform](../../Skills/DevOps/Terraform.md) commands. Just take some time to look through the GitHub marketplace and see what you can mix and match together here. We'll be using the build and push Docker Images action. Instead of creating our action in the command line, I'm going to just do everything in the code editor right in GitHub. So, let's move over to my repo and take a look at my workflow. Right now, I'm in my action, build and publish, but right now it doesn't really build and publish. It just builds. You can see we just have the build job here. We need to make a new job for our action. And since I'm chaining it to this one, I'm going to add it below. But first, I need a way to transfer my application binary from this one job at the top here to the new job that we're going to create.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=95)** I'm adding a bit of code here to upload an artifact. Nothing too special here other than I'm setting the name for my artifact. Now I can reference it in my Docker build and my push job as [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md)-cloud-generator. Okay, so now I'm going to do a little bit of cooking show set up here and paste in my job for build-docker. All right, so now you can look at this next job that I have here. There's a keyword here up at the very top that says, "Needs: build." This tells the job that the build job before it must run, and then it can run. This is setting a dependency inside of our workflow here. This next section of code fetches our binary, word-cloud-generator, and then it sets up some Docker [Metadata](../../Skills/Web%20Development/Metadata.md), like setting up our tags, making sure we're able to lock to whatever sha that we're using inside of GitHub. And then you'll probably notice that we're dealing with secrets here. These are secrets that are inside of our GitHub Action, and they let us log into Docker Hub. Now, I had to do this out of band as an admin on the repo, so you'll have to do that separately if you're following along on your own repo. And then lastly, we run the build and publish. This puts it all together as our metadata and uploads it up to Docker. So, this is all good. Let's go ahead and save this. I'm going to run a commit. I'm going to say, "Adding publish for the container." I'm going to go ahead and commit changes here. Okay, now we can see that's running.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=190)** Let's go over to our actions. And we can see that we're adding publish for the container. Now, we see that we have two jobs, build and then build-docker. Let's see if we can update here to get our status. And we see the build is starting to run. So, we're going to speed all this up with a little bit of movie magic here. Okay, so we can see output from each stage. So, build and then build-docker. I really am very creative at naming these things. Maybe I need to try a little harder here. Okay, so let's move over to Docker Hub, and we can now see our images that we just pushed up here. So just a few seconds ago, we have our latest tag and then we have it with the sha as well. So, that's it. Now we have our container here getting built, tested, deployed to our registry. But before we call it a day, let's go back and make a change to our container. Let's say we want to make an OS version change. So, I'm going back into word-cloud-generator, and I'm going into my Docker file. And so instead of using alpine:3.16, let's bump the version to 3.17. And I'm going to say, update Docker file, "Bumping to alpine:3.17." So, we're just making an OS version change. I'm going to commit changes there. So, now we should have a new GitHub Action that's taking that in. And again, we'll use a little bit movie magic here.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/ci-for-my-iac?u=76281980&t=284)** Okay, so that's it. We changed OS versions in our container and we're able to build and deploy that as well. The great thing about actions is that we can now stack actions together to trigger our environment to update and use the new container, as well as alert our team that a new version has been published. You know, CI is not just for applications anymore, but it's a key part to [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **CLI Commands:** docker (16), make (3), terraform (1)
> **Tools:** github (8), slack (1), command line (1)
> **Versions:** 3.17 (2), 3.16 (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The GitOps model](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=0)** - Okay. Sweet demo. Are we done?
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=3)** - No, it's time for a
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=6)** - [Both] Bonus video! (horn blares)
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=9)** - Well, what else have we got? What's newfangled and hot in the infrastructures code space?
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=15)** - GitOps.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=16)** - Oh yeah. The kids nowadays love their GitOps with their iPads and their short pants. GitOps is a way to do [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), which aims to make the deployment process more reliable, faster, and developer-friendly by using [Git](../../Skills/Software%20Development/Git.md) as a single source of truth for declarative infrastructure and applications.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=36)** - Absolutely, GitOps has been growing in popularity as declarative orchestration frameworks like [Kubernetes](../../Skills/DevOps/Kubernetes.md) have risen also in prominence.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=44)** - OpenGitOps is a set of open source standards, best practices, and community-focused education to help organizations adopt a structured approach to implementing GitOps.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=55)** - Yeah, so let's review the definition of GitOps as defined by OpenGitOps. GitOps needs to exhibit these four characteristics. Ernest, are you ready?
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=63)** - Born ready? First, it's declarative. A system managed by GitOps must have its desired state expressed declaratively.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=72)** - [James] Secondly, it's versioned and immutable. Desired state is stored in a way that enforces immutability, versioning, and retains a complete version history.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=81)** - [Ernest] Third, it's pulled automatically. Software agents automatically pull the desired state declarations from the source repo.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=89)** - [James] And lastly, continuously reconciled. Software agents continuously observe actual system state and attempt to apply the desired state.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=98)** - So what does this all mean? Basically, you're skipping over a separate artifact layer and you're just pulling a specific version of everything out of Git revision control when you're deploying. It does illustrate some of what we've already covered in the course, and it can work really well for driving declarative frameworks, like Kubernetes, that are just waiting for a new YAML configuration file to tell them what all to load up.
>
> **[2:02](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=122)** - Right, and you know, GitOps is a great option for treating [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), but we don't think that GitOps is the only way to achieve infrastructure as code.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=130)** - No, that's right. Because as great and well intentioned as GitOps is, there are some drawbacks.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=137)** - [James] Yeah, right, for for one thing, GitOps can be complex to set up and maintain, especially if you have a large preexisting system you want to transition to a GitOps flow.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=147)** - GitOps relies on storing the desired state of the system in Git, which depends on the system being able to interpret that fully and correctly. You could see how there could be a desired state that the system can't achieve. For example, a new feature in a cloud service hasn't been added to [Terraform](../../Skills/DevOps/Terraform.md) yet, and it doesn't do any of the [Dependency Management](../../Skills/Software%20Development/Dependency%20Management.md) things that Docker, Nix or Wasm can give you.
>
> **[2:52](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=172)** - Yeah, and lastly, let's not forget about visibility because, you know, GitOps takes desired state and then applies changes. You need a way to have [Real-Time](../../Skills/Database%20Management/Real-Time.md) visibility into the current state of the system so you can troubleshoot problems.
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=185)** - GitOps can be a powerful tool for managing the deployment of applications to production environments, but it isn't the only way to treat your infrastructure as code. I'd say you probably want to build most of your pieces into artifacts and then only use GitOps to move out the declarative recipes of what you want running in production.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=205)** - Yeah, that makes sense to me. And GitOps is also not the only way to fit [Version Control](../../Skills/Web%20Development/Version%20Control.md) into your infrastructure as code implementation. Hm, you can map artifacts to Git revisions just using something like tagging.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/the-gitops-model?u=76281980&t=218)** - GitOps, it's all the rage and it's good in some situations. So just make sure that your infrastructure code gets treated with the same care as all the other code in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1), [Terraform](../../Skills/DevOps/Terraform.md) (1)
> **Speakers:** - gitops (4), - yeah (3), - [james] (3), - no (2), - okay (1)
> **CLI Commands:** git (4), make (2), terraform (1), docker (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** ipads (1)
> **Env Vars:** yaml (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)

#### [Security and compliance as code](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=0)** [Infrastructure as Code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) changes how we build our infrastructure, but it also changes how we break things. With Infrastructure as Code, a single bad pattern can spread through your infra code like wildfire. The good news is that with IAC, security and compliance can be evaluated at the code level, and not just by scanning production infrastructure after the fact. Let's discuss creating security policies as code, so we get safer delivery that doesn't slow teams down. One thing relevant to security is context. For example, a public S3 storage bucket in a sandbox environment is probably not a big deal. But a public bucket in production containing sensitive data is a very big issue. Now, how can you tell the difference? Infrastructure as code is where much of that context is explicitly spelled out. The code itself tells us the intended environment, [Data Classification](../../Skills/Data%20Science/Data%20Classification.md), and exposure. Tools that understand these relationships can raise only the issues that are real problems. When we talk about enforcing policy as code, for infrastructure as code, we're deciding where in the lifecycle to test, whether our infrastructure meets security, compliance, and governance standards. Just like with functional testing, you can perform security and compliance testing in each level of the testing pyramid, in the unit integration and end-to-end stages. The first stage of our policy pyramid happens early in development, when engineers are writing IAC templates. Here, policies can run automatically to
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=94)** check for risky patterns like open network ports, missing encryption, or weak identity configurations. This early enforcement prevents problems before they even make it into [Version Control](../../Skills/Web%20Development/Version%20Control.md), giving fast feedback and saving costly rework later. An example of this is a developer writing a [Terraform](../../Skills/DevOps/Terraform.md) module to deploy an S3 bucket. Before the code is even committed, A check runs locally in the IDE. It flags that the bucket is missing the server side encryption configuration block. The developer fixes it right then and there. If you're looking for tools, there are a lot of options here, just like [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) tools. But two you're likely to run into are TFSEC and Chekov. Catching misconfigurations at authoring time shortens the feedback loop and reduces risk before it ever hits version control. The next key enforcement stage is during [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md). At this point, policies are evaluated as part of pull requests or build pipelines. This ensures that every change to the infrastructure is tested against organizational rules before being approved or deployed. Teams can decide whether to enforce policies as heart gates, where they are blocking a merge until violations are fixed, or as soft feedback, allowing flexibility while still promoting awareness and [Accountability](../../Skills/Data%20Science/Accountability.md). An example of integration time policy as code is detecting a Terraform rule that opens SSH to the world on a production VPC. This is an example of using context to know this configuration
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=186)** shouldn't be allowed in this case. I'm the founder of Dry Run Security, one of the new tools you can use to find security problems in your code. And we had a customer with a very similar situation where they had their DNS config as code. This was their Terraform code that expected a host IP to get passed in. And if not, it just resolves to blank. Not good. It's one errant call away from DNS returning a malformed response or an incorrect placeholder like 0.0.0.0, possibly causing a service outage. The change looked innocuous enough and passed their other testing. But when Dry Run analyzed in context of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code, it was identified as dangerous. the team was able to detect the problem and get it fixed before it got sent over to production. So for tool recommendations, I'd put in dry run and check off as two options to consider for this phase. Finally, you can test your running infrastructure at the end of your integration test phase, and use the same tools to continue enforcement after deployment at runtime. Continuous policy checking in runtime environments help identify changes that break compliance or introduce risk. Say an on-call engineer makes a manual change to a production security group allowing logins from anywhere on the internet. If you are running a continuous policy check-in tool, then within minutes a cloud policy fires. It flags the rule, auto-remediates by restoring the approved network configuration, posts
>
> **[4:40](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=280)** about its change to the team chat, and opens a [Jira](../../Skills/DevOps/Jira.md) ticket with the link to the event in the logs. A common way to do this kind of check-in as code is with the Open Policy Agent or OPA, which lets you write all kinds of policy rules in its Rego language and will validate those rules against your current Terraform state. To guard against allowing logins from anywhere, this is an example of an OPA policy that looks for the Open Login Port, TCP 22, being open to any network address. Even if your infrastructure code didn't introduce that vulnerability, you can set up a policy code to watch for it. There are many tools that perform runtime policy enforcement and drift detection. Many teams start with Cloud-native tools like AWS Config or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Policy because they integrate tightly with each platform and can automatically roll back risky changes. AWS Config's restricted SSH rule, for instance, can detect and fix a public SSH port within seconds. In [Kubernetes](../../Skills/DevOps/Kubernetes.md), Kiverno or OPA Gatekeeper enforce live cluster policies while Falco monitors for [Real-Time](../../Skills/Database%20Management/Real-Time.md) activities such as unexpected SSH sessions inside pods. Also, a tool like Cloud Custodian lets you express runtime policies as code and auto-remediate or open a pull request whenever drift occurs, keeping environments aligned with intended configurations. That's the big picture. Infrastructure as code gives us speed, scale, and repeatability, and policy as code gives us control and confidence without losing
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/security-and-compliance-as-code?u=76281980&t=374)** all that momentum. By enforcing policies early, testing them in CI and continuously checking them at runtime, we build a immune system for our infrastructure. Security doesn't have to slow anyone down if we make every commit, every merge, and every deployment a little safer than the one before it. May the source be with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (5), [Terraform](../../Skills/DevOps/Terraform.md) (4), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Env Vars:** ssh (4), opa (3), iac (2), dns (2), aws (2)
> **CLI Commands:** terraform (4), ssh (4), make (2), aws (2), find (1)
> **Analogies:** just like (2), for example (1), for instance (1), such as (1), picture (1)
> **Definitions:** is a  (2), is an  (2)
> **Versions:** 0.0.0 (1)
> **Tools:** jira (1)
> **Prerequisites:** set up (1)

#### [Using AI to create your IaC](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=0)** AI is giving [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) a real boost. Instead of wrestling with providers, modules, and syntax, we can lean on tools that understand patterns, surface mistakes early, and help us spend less time fighting configuration and more time delivering actual value. For this lesson, we're going to build up an application that will deploy into AWS. Like we spent much of of the manual lab work earlier on in this course, but this time we're using a simple tool chain that will use AI to do most of the work for us. VS Code is our editor, [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) is our AI pair programmer, Docker runs the [Terraform](../../Skills/DevOps/Terraform.md) MCP server, and Dry Run Security checks our code policies. Together, they create an environment where AI can understand the structure of your infrastructure's code instead of guessing. MCP stands for Model Context Protocol. Think of it as a translator that gives AI structured, accurate knowledge about your tools or code so it can reason instead of guess. In this case, the Terraform MCP server exposes Terraform's schemas and commands so AI can suggest code that actually fits Terraform's rules. AI tooling isn't perfect, and you need to be very careful about validating what it comes up with to make sure it's fit for production use. So for this demo, I've also already set up a dry run security natural language code policy that watches for newly introduced APIs and
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=93)** marks them as higher risk, especially if they're missing authorization or authentication. Security teams care about this because new APIs create fresh unvetted attack surfaces and flagging them ensures anything novel gets the extra review it needs during code reviews. So issues don't slip up while you're doing rapid development or as we say, [Vibe Coding](../../Skills/Software%20Development/Vibe%20Coding.md). We'll see it in action in a little bit. I'm going to start right here in VS Code and talk to copilot like a teammate. In this case, I'm going to describe the whole mini project in plain English. I've already prepared all this up, so what I'm asking for is to make a new app that sets up a Docker container to respond to an API call to hello slash some name. And it says, make a new application that sets up a Docker container to respond to an API call to hello name. So you'll get a greeting for your name. And the greeting will be hello, name, from [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning in a [JSON](../../Skills/Web%20Development/JSON.md) response object. So we could use it for other parts of our application. I tell it also here to include Terraform so it can be added and deployed to AWS. And I wanna add helpers for me to run and test locally. So like add a make file and instructions for building and running in the README and have the service listen on port 8989 for my local Docker testing. And I want to call this service Hello API. I'm using the GPT-5 model here, and I'm going to hit go. Now, the cool thing is, is that this isn't code, right?
>
> **[3:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=185)** It's just a clear description of what I want. You'll also see some helpers show up to make local testing easy, such as simple scripts or commands to run the container, and you'll be able to hit the Hello endpoint right here in our web browser. Now, this is where AI really helps with speed. Instead of handwriting boilerplate and writing every piece from scratch, I can get a working Hello API in just a few prompts, and then spend my time on correctness, security, and polish rather than all the repetitive setup. Looks like it got stuck there a little bit, so I just had to tell it to keep on going and keep building so it's back to working. All right, we'll allow this, let it keep building. Okay. So now it finished, it made over 20 files, 21 files have been changed, had 453 new lines of code. As you can see here, it completed all of its to-dos. It also looks like it had ways for me to deploy it, has ways for me to run it locally. Let's go ahead and take a look at our README file. In here, it looks like it left us the same README file we had before. Let's go ahead and ask it to update the README with more information on how to run and use the local testing. I'm going to ask it to go ahead and update
>
> **[4:38](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=278)** the README with more information on how to run and use the local testing environment. It looks like our README has been updated. Let's go ahead and go see if we can get this spun up and then maybe fire up our local Docker environment to test it out. Whenever I go to the README, I can see that there's a lot of different ways to do testing here. I might want to clean that up later. It looks like you can go ahead and just say, make Docker build and make Docker run. Let's go ahead and do that. Docker build and looks like our containers
>
> **[5:21](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=321)** are getting all built up here and we'll do Docker run. One of the benefits of using AI for infrastructure as code and application setup is it doesn't just write all the code, it writes all the instructions on how to use it. We just saw the README here, but I can also look and see here's all the components for Terraform that it gets set up and for ECS and more. There's a lot of different components that we could once we try to get that spun up in the Amazon Cloud. Here we have the steps for setting up Docker and looks like we have it all up and running. Now let's go ahead and test it. I'm going to open a browser and I'm going to go to my address here locally, 000-8989 or localhost, and let's take a look at that. Localhost 8989, and I'm saying hello, James. I can also say hello, Ernest, and looks like our API is working here, and we're getting our JSON block returned locally from our local Docker container. I think this is really cool because this is the moment where we see the whole pipeline working together. the API code, the container setup, all the local test helpers here. Now that VS Code and Copilot here has helped us build out the project, let's get this into CICD. Now, I could make the branch and then the pull request myself, but again, I'm going to just let Copilot handle
>
> **[6:54](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=414)** it. This is another place where AI helps us move faster with less friction. I'll just describe what I want. I'm going to say here, let's create a new branch, commit the changes, and open a pull request. copilot fills in all the details, writes the messages, and gets everything staged so that it can review it before pushing. I still get to approve the work, but this is a lot less busy work.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=442)** Let's push it in. Now we have our pull request here, so let's go check that out. Let's copy that. As I mentioned at the top here, dry run security is going to also do some evaluation here and take a look at everything for the pull request as it's getting merged to make sure it's production safe. Looks like all the checks have run and we're waiting for dry run security to do a full report here. Now I'm in [GitHub](../../Skills/Software%20Development/GitHub.md) and I've looked at our pull request and I'm looking at the code policy results here. Now, you can see our code policy flag. This is a new endpoint that doesn't have authorization. It tells us where we have set this up, and it goes and explains like this is not okay, it doesn't have authorization. So this would definitely flag and it would flag your security team to check out. Try Run has also called out a lot of Terraform issues that it sees in here. Some things like mutable ECR image tags, It doesn't like this ingress rule, and a number of other problems, even like command injection in the makefile. Now, some of these things you may not really care about. We did push a whole bunch of code, all system and infrastructure's code at the same time. But we did introduce a new endpoint. It did get marked for extra security review, and we didn't want to expand our attack surface here. Then we also have all this infrastructure's code stuff to take a look at.
>
> **[8:55](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/using-ai-to-create-your-iac?u=76281980&t=535)** This is really a great example of AI helping us move fast, but also keeping us within our company policy or production policy for our code. While AI generated code isn't perfect, it's fast. AI is pretty good at generating code and documentation, translating between tools and frameworks, managing deployments and scaling, and enhancing security and efficiency. The point of infrastructure as code is to not manually craft every server, but to choose tools that let you define it in code, so you can get efficiency through reuse and improve quality iteratively. In the same way, with AI, you don't have to manually craft every line of infrastructure as code, so we can iterate even faster toward a great working system. Awesome. But just remember, you need to test it even more than code you write yourself. you never know when a Terminator is going to try and slip in there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Terraform](../../Skills/DevOps/Terraform.md) (7), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (5), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Vibe Coding](../../Skills/Software%20Development/Vibe%20Coding.md) (1)
> **CLI Commands:** docker (11), make (9), terraform (7), aws (2)
> **Env Vars:** readme (8), api (6), mcp (3), aws (2), json (2)
> **Documentation:** the readme (5)
> **Prerequisites:** setup (3), set up (2)
> **Tools:** vs code (3), github (1)
> **Definitions:** is a  (2), stands for (1)
> **UI Navigation:** go to (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Where to go from here](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=0)** - Okay, so now we're actually at the end of the course but how do you get started?
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=5)** - There are plenty of tool courses here in the library but what do you do first? When I first got into [DevOps](../../Topics/DevOps.md) and infrastructures code I came from more of a CIS admin background.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=15)** - Me too.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=16)** - Yeah, and one thing I did that really helped me was to learn Ruby. Chef, Puppet, Serverspec and Cucumber. They're all written in Ruby. And learning a new language helped me to get up to speed faster.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=27)** - Maybe you come from a dev background in which case you already understand the approach but if you come from an operations background you might consider taking some coding courses. It doesn't matter what language but [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) can be helpful in the DevOps world. Really just learning the process of development will help you understand how to perform infrastructure automation. It's not just using the tools it's following a development process.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=53)** - The culture change required to get yourself and your colleagues to embrace this process is key. Making changes through automation and writing tests first for any infrastructure code are basic techniques that you have to do all the time every time to be successful.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=69)** - The other culture challenge is finding ways to collaborate more tightly between the devs and ops. Resist the urge towards local optimization and choosing tools or processes that are best just for you or your team instead of what's best for the overall chain of teams that have to work together to deliver the end product.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=88)** - But let's say you're willing to start. How do you introduce this into an existing environment?
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=93)** - One way to introduce new tools and techniques is to choose an upcoming new project and develop that project in the new way. This is called a Greenfield Project.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=103)** - You know, our first pure implementation of infrastructure automation was in a Greenfield Project like this. It's easier to get it done when there's fewer legacy dependencies, and then you can show the benefits to everyone else in a real project.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=117)** - But sometimes you're stuck with needing to change a legacy system. What's charmingly referred to as Brownfield Development.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=124)** - And that brown isn't dirt.
>
> **[2:05](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=125)** - So true. In this situation, look for a single process to start with and automate it. Ideally something that's a major pain point.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=134)** - When Ernest and I first worked together, we inherited a large legacy web system that had no automation. We had to find a place to start. So we identified the one piece to start with.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=144)** - We selected our [Java](../../Skills/Software%20Development/Java.md) application deployments like I mentioned in an earlier video. We chose a tool to use, in this case was just a Perl script. It was a long time ago. So all these fancy tools didn't exist yet. We defined the state we wanted to create using code, tested it, and set up production monitoring and unleashed it on the developers.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=165)** - We now know that was right because that's what [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) says to do.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=169)** - True story, bro.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=171)** - And then we used what was called the strangler pattern to proceed. We implemented a new piece of automation for a piece of our stack, deprecate the old process, and then eventually the new automated infrastructure would strangle out all the old manual stuff.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=186)** - That worked well, but it wasn't as successful as our second implementation when we realized how important both test first and integrating our infrastructure automation with our continuous deployment pipeline was.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=198)** - Yeah, there's no single answer, but we hope that this will give you some ideas on how you can begin to incorporate infrastructure automation into your own systems.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-infrastructure-as-code-18965758/where-to-go-from-here?u=76281980&t=206)** - We wish you the best of luck in automating your own infrastructure. We know that the benefits you'll see will change how you work for the better. Thanks for joining us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Speakers:** - we (3), - yeah (2), - the (2), - but (2), - and (2)
> **CLI Commands:** ruby (2), python (1), find (1)
> **Prerequisites:** required to (1), set up (1)
> **Env Vars:** cis (1)
> **Definitions:** is called (1)


## Instructor

- [Ernest Mueller](../../Instructors/DevOps/Ernest%20Mueller.md)
- [James Wickett](../../Instructors/DevOps/James%20Wickett.md)

## Path Context

### In [DevOps Professional Certificate by PagerDuty and LinkedIn](../../Paths/DevOps/Professional%20Certificates/DevOps%20Professional%20Certificate%20by%20PagerDuty%20and%20LinkedIn.md)
← [Devops Foundations](Devops%20Foundations.md) | **2 of 3** | [DevOps Foundations- Continuous Delivery-Continuous Integration](DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md) →

### In [Infrastructure as Code with Terraform](../../Paths/Database%20Management/Learning%20Paths/Infrastructure%20as%20Code%20with%20Terraform.md)
**1 of 3** | [Learning Terraform](../Database%20Management/Learning%20Terraform.md) →

### In [Getting Started with DevOps](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20DevOps.md)
← [DevOps Foundations- Continuous Delivery-Continuous Integration](DevOps%20Foundations-%20Continuous%20Delivery-Continuous%20Integration.md) | **3 of 5** | [DevOps Foundations- Monitoring and Observability](DevOps%20Foundations-%20Monitoring%20and%20Observability.md) →

## Part of

- [DevOps Professional Certificate by PagerDuty and LinkedIn](../../Paths/DevOps/Professional%20Certificates/DevOps%20Professional%20Certificate%20by%20PagerDuty%20and%20LinkedIn.md)

## Appears In

- [DevOps Professional Certificate by PagerDuty and LinkedIn](../../Paths/DevOps/Professional%20Certificates/DevOps%20Professional%20Certificate%20by%20PagerDuty%20and%20LinkedIn.md)
- [Infrastructure as Code with Terraform](../../Paths/Database%20Management/Learning%20Paths/Infrastructure%20as%20Code%20with%20Terraform.md)
- [Getting Started with DevOps](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20DevOps.md)

---

[↑ Back to top](#)