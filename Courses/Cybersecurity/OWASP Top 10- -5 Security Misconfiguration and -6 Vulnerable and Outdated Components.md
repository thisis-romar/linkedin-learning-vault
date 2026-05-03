---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components
url: "https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components"
duration_minutes: 33
duration: 33m
level: Intermediate
updated: 11/7/2022
learners: 177777
skills:
  - Vulnerability Assessment
  - Application Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHRz3NOlM6iZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667500810529?e=2147483647&amp;v=beta&amp;t=5GXoFbreevSEBAItn2KSqxi_LUF855UJ-5AqMiJoyhE"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Master the OWASP Top 10]]'
prev_courses:
  - '[[OWASP Top 10- -3 Injection and -4 Insecure Design]]'
next_courses:
  - '[[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]]'
path_nav: '[{"path":"Master the OWASP Top 10","position":4,"total":6,"prev":"OWASP Top 10- -3 Injection and -4 Insecure Design","next":"OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/vulnerability-assessment
  - skill/application-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-5%20Security%20Misconfiguration%20and%20-6%20Vulnerable%20and%20Outdated%20Components.md)

![OWASP Top 10: #5 Security Misconfiguration and #6 Vulnerable and Outdated Components](https://media.licdn.com/dms/image/v2/D560DAQHRz3NOlM6iZw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667500810529?e=2147483647&amp;v=beta&amp;t=5GXoFbreevSEBAItn2KSqxi_LUF855UJ-5AqMiJoyhE)

# OWASP Top 10: #5 Security Misconfiguration and #6 Vulnerable and Outdated Components

> Security vulnerabilities should be top of mind when it comes to safely accessing web applications within an organization. There’s always something that can go wrong if you’re not careful, but how do you prepare for a possible attack? In this course, instructor and application security expert Caroline Wong gives you an overview of two of the most common vulnerabilities listed on the 2021 Open Web A

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components) | 33m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [2021 OWASP Top 10](#2021-owasp-top-10)
  - [OWASP Top 10 series](#owasp-top-10-series)
- [**1. Security Misconfiguration**](#1-security-misconfiguration) (6 videos)
  - [What is security misconfiguration?](#what-is-security-misconfiguration)
  - [Example #1: 2020 SolarWinds data breach](#example-1-2020-solarwinds-data-breach)
  - [Example #2: State of Pentesting Report](#example-2-state-of-pentesting-report)
  - [Prevention technique #1: Repeatable hardening](#prevention-technique-1-repeatable-hardening)
  - [Prevention technique #2: Minimal platform](#prevention-technique-2-minimal-platform)
  - [Prevention technique #3: Configuration review](#prevention-technique-3-configuration-review)
- [**2. Insecure Design**](#2-insecure-design) (6 videos)
  - [What are vulnerable and outdated components?](#what-are-vulnerable-and-outdated-components)
  - [Real-world example #1: Equifax breach 2017](#real-world-example-1-equifax-breach-2017)
  - [Real-world example #2: Target breach 2013](#real-world-example-2-target-breach-2013)
  - [Prevention technique #1: Remove unnecessary features](#prevention-technique-1-remove-unnecessary-features)
  - [Prevention technique #2: Continuous inventory management](#prevention-technique-2-continuous-inventory-management)
  - [Prevention technique #3: Leverage virtual patching](#prevention-technique-3-leverage-virtual-patching)
- [**Conclusion**](#conclusion) (1 videos)
  - [Explore more of the OWASP Top 10](#explore-more-of-the-owasp-top-10)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [2021 OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=0)** - [Caroline] We use web applications every day in both our personal and our professional lives. We want them to be safe and secure. The best way to secure web applications is to find and fix security vulnerabilities. [[OWASP]] stands for Open Web Applications Security Project and the top 10 list is a resource for any and everyone who is involved in building web applications. It helps us to understand the most common types of security vulnerabilities. This course covers the fifth and sixth categories in the 2021 OWASP top 10, security misconfiguration and vulnerable and outdated components. I'm Caroline Wong, Chief Strategy Officer at Cobalt. I've worked in the [[Cybersecurity]] field since 2005. I've seen firsthand how security vulnerabilities get introduced into web applications. I've also learned how to identify and address them. Come and join me. Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Cybersecurity]] (1)
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [caroline] (1)

#### [OWASP Top 10 series](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=1)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course. First, this course covers the fifth and sixth categories in the 2021 [[OWASP]] Top 10. I recommend watching my previous courses that cover the first few categories. You may also want to watch my OWASP Basics course which provides a high level overview of all of the items in the 2021 Top 10. This course is designed for anyone who is involved in building web applications and wants to make them secure. This includes software developers, architects, product and project managers, and of course, security professionals. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2)
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. Security Misconfiguration

[↑ Back to Table of Contents](#table-of-contents)

#### [What is security misconfiguration?](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=0)** - [Instructor] In order to understand the concept of security misconfiguration, it is helpful to first discuss the definition of the term configuration. A dictionary definition is as follows, an arrangement of elements in a particular form, figure or combination. Developing web applications is fundamentally an exercise of organizing building blocks in a particular way to achieve a specific outcome. Sometimes I like to think of software engineering as a massive Lego project. This vulnerability category is about the idea that some configurations for web applications are more secure than others, and we as technology professionals should intentionally choose and support secure configurations while decreasing our use of insecure configurations. Does your smartphone require a passcode or biometric like facial recognition or your fingerprint in order to use it? If it does, that's a secure configuration. If it does not, pause this video and set one up right now. I'm serious. It's that important. (theatrical music) Do you have your phone set to automatically back up your data on a regular basis? Are you notified when software updates are available? Just like our phones, web applications have dozens and dozens of different settings. Each and every single one is an opportunity
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=95)** to choose a configuration and some configurations are more secure than others. It's important to recognize that even configurations which you do not consciously choose, also known as default settings or the settings which are chosen by default when you first open up your new smartphone and take it out of the box, are still configuration choices that have a definitive impact on your risk profile. 80% of the breaches described in the Basic Web Application Attacks section of the 2022 Verizon Data Breach Investigations Report have to do with stolen credentials. You know what are some of the easiest credentials to steal? Default credentials that never get changed, like when the password to access an admin account is the [[Microsoft Word|word]] admin. Another really easy way to steal credentials is to find them just laying around for anyone who can access the public-facing internet to take. An [[Amazon Web Services (AWS)|Amazon Web Services]] AWS S3 bucket is kind of like a file folder that's stored in the cloud on the internet. If credentials are stored in an S3 bucket and that S3 bucket is not protected by proper authentication, then they're available for anyone to access, view, and compromise. These are just a couple of common examples of security misconfigurations. In order to prevent these vulnerabilities from being exploited in an attack, someone has to make the intentional decision to change the configuration from an insecure setting
>
> **[3:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=190)** to a more secure one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **CLI Commands:** find (1), aws (1), make (1)
> **Definitions:** is an  (1), known as (1)
> **Analogies:** just like (1), kind of like (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (theatrical music) (1)

#### [Example #1: 2020 SolarWinds data breach](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=0)** - [Narrator] The Solar Winds Breach of 2020 was described by ABC News as the biggest digital espionage campaign ever uncovered. 18,000 global organizations had downloaded the malicious software update, including government agencies, hospitals, universities, and major companies, including Cisco, Intel, Deloitte, and [[Microsoft]]. While the exact number of actively breached organizations is not known, it is estimated to have been in the hundreds. What exactly is solar winds and why would hackers want to attack them? Solar winds makes IT management software, very popular IT management software. Their corporate website says that their clients include 498 of the Fortune 500 firms. The software that was breached in 2020 was monitoring software called Orion. You can think of it as being somewhat similar to a security system for a personal home. Keeping track of cameras and locks and alarms but for a company's IT networking infrastructure. Imagine what kind of information a hacker could access if they had full control of your home security system. Somewhat ironically, security systems are often highly trusted and have a lot of access to critical information. This means that if they are compromised, the attacker can gain a lot of access too. You may have heard a lot of different terms used
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=94)** to describe the Solar Winds attack. Software supply chain attack, advanced persistent threat, APT, and so on. The thing about malicious hacking attacks that lead to big breaches is that they don't happen all in one step. They happen across multiple different steps over time. This is sometimes called a chained exploit. So which part of the Solar Winds attack had to do with security misconfiguration? One of the very first steps. In order to get access to Solar Winds in the first place, hackers exploited a not very secure password, which was not protected by multifactor authentication. This was unfortunately, a simple security misconfiguration. Solar Winds had used the password, solar winds 123 to quote unquote protect the company's update server. It's no wonder malicious threat actors took advantage and planted some malware. The software was compromised long before anyone at Solar Winds found out about it. This was actually discovered and reported by a Solar Winds customer, Fire Eye, when they began to notice early indications of the malware infected version of Orion. It took a long time for the breach to be discovered and this is why it's known as an advanced persistent threat or APT. Solar Winds was also the first step in a multiple phase attack. The hackers wanted to compromise Orion in order to gain access to all of the Solar Winds customers
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=189)** with Orion installed on their networking systems. Because Solar Wins was a software vendor for the primary target of the attack, their customers. This is why it is known as a supply chain attack. For the purpose of learning about this (indistinct) vulnerability category, our key takeaway is that the very first step of the Solar Winds attack took advantage of a simple security misconfiguration. If this vulnerability had been identified and fixed or prevented in the first place, the [[Representational State Transfer (REST)|rest]] of the breach might have been impossible for the attackers to carry out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** apt (2), abc (1)
> **CLI Commands:** apt (2)
> **Definitions:** means that (1), known as (1)
> **Analogies:** think of it as (1), imagine (1)
> **Speakers:** - [narrator] (1)

#### [Example #2: State of Pentesting Report](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=0)** - [Instructor] I am the Chief Strategy Officer at Cobalt, a Pentest as a Service company. Every year we publish a data driven research report that is based on the thousands of pentests that are performed in the previous year. The 2022 State of Pentesting Report provides insights from 2,380 pentests conducted in 2021. This report contains some interesting findings with regards to typical vulnerability categories for web applications. What was the top vulnerability category reported in 2022? Security misconfiguration, 38% of all vulnerability findings. What was the top vulnerability category reported in 2021? Security misconfiguration, 28% of all vulnerability findings. How about in 2020? What about 2019? 2018? You guessed it. The top vulnerability category was security misconfiguration. The data driven State of Pentesting Report wasn't published before 2018 but I think it's fair to assume that security misconfiguration has been a top vulnerability category for even longer than the past five years. The 2019 State of Pentesting Report dives deep into more specific types of security misconfigurations. That year, 30.1% of security misconfigurations were security headers.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=93)** 28% were application settings. 12% were encryption settings 11% were server configurations. 9% were mobile settings 4% were cloud settings. and 2% were improper security controls. This report also has pointers to strong resources for mitigating security misconfiguration including SANS White Papers on building an application vulnerability management program and [[Web Application Design]]. [[OWASP]] projects on mobile security, secure headers, insecure [[Configuration Management]], secure deployment, and blocking brute force attacks, and others. All Cobalt State of Pentesting Research Reports are available for download at no cost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Application Design]] (1), [[OWASP]] (1), [[Configuration Management]] (1)
> **Env Vars:** sans (1), owasp (1)
> **Versions:** 30.1 (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #1: Repeatable hardening](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=0)** - [Instructor What does the [[Microsoft Word|word]] Hardening mean when it comes to [[Application Security]]? Hardening a web application means identifying all of the various components and adjusting the configurations of those components to a more secure setting. A hardening standard is a document that provides instructions on how to do this for a particular type of technology. Hardening standards exist for browsers, operating systems, server software, visualization platforms, Cloud providers, mobile devices, network devices, desktop software, and even multi-function print devices. CIS, the Center for Internet Security, provides dozens of these standards, which they call benchmarks. These are developed by a community of tens of thousands of volunteer [[Cybersecurity]] professionals with experience in academia, government, and industry. It's a truly amazing project. Let's take a look at the CIS Benchmark for [[Amazon Web Services (AWS)|Amazon Web Services]]. First of all, it's 215 pages long. There's a lot of custom configuration and setting changes that need to take place in order to harden an AWS implementation. It is not secure out of the box. The recommendations cover topics like identity and access management, ensure security questions are registered in the AWS account, logging, ensure CloudTrail is enabled, ensure the S3 bucket used to store CloudTrails logs is not publicly accessible, and many more.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=95)** Back in the day, security professionals collaborated with Ops professionals to go through various technology settings one-by-one. In one of my first roles as a security policy and compliance engineer at an electronic commerce company, I remember meeting with Ops folks and talking through the latest CIS benchmarks at that time. It was pretty onerous. Today, some things are easier thanks to [[Virtual Machines]]. In addition to the hardening benchmarks themselves, CIS also provides a set of virtual machine, VM, images, which are pre-hardened according to the benchmark recommendations. These are also available for several common platforms, like AWS, [[Microsoft Azure|Azure]], [[Google Cloud Platform (GCP)|Google Cloud]], and Oracle Cloud. Today, organizations can simply use the already hardened virtual images provided by CIS. Conveniently, these are recognized as secure configurations by [[PCI DSS]], the [[PCI DSS|Payment Card Industry Data Security Standard]], HIPAA, the Health Insurance Portability and [[Accountability]] Act, FISMA, the US Federal [[Information Security Management]] Act, FedRAMP, the US Federal Risk and Authorization Management Program, and [[NIST]], the US National Institute of Standards and Technology. These already hardened virtual images are one of the great benefits and convenience of the Cloud for reducing cybersecurity risk. If you can spin up a virtual environment in the Cloud quickly,
>
> **[3:08](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=188)** it also means you have the opportunity to spin up a hardened virtual environment in the Cloud just as quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2), [[Microsoft Word|Word]] (1), [[Application Security]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Virtual Machines]] (1)
> **Env Vars:** cis (5), aws (3), pci (1), dss (1), hipaa (1)
> **CLI Commands:** aws (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor (1)

#### [Prevention technique #2: Minimal platform](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=1)** - [Presenter] Security misconfiguration can happen anywhere in a web application stack. Simply put, if you build and operate your application with fewer components and features, then there's less that you need to harden and configure securely. This use only what you need and eliminate the [[Representational State Transfer (REST)|rest]] approach to managing risk associated with security misconfiguration is called minimal platform. I like to think about minimal platform kind of like having a capsule wardrobe, or applying the Marie Condo tidying up methodology from her book, tier web app stack. Consider each port service page, account and privilege, do you need it, are you using it, is it bringing you joy? If not, eliminate it. What are the absolute minimum features, components, documentation, and samples required to build and operate your web app? Use those and discard the rest. It sounds straightforward, but the reality of modern [[Software Development]] is that it's easier to leave things on, or fail to remove extraneous documentation as developers and operations folks respond to the high pressure of building new features and bringing them to market as fast as possible. As with most security controls, the trade-off has to do with where you choose to invest your energy and your time. It's also a mindset shift. If I allow trash to build up over time in my home and in my backyard, it's going to take a concerted effort, significant resources
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=96)** and a lot of time to get it all cleaned up. If I routinely go through my day and pick up trash as it's created, or when I see it at, the end of the day, things will be cleaner and it'll feel like a relatively small effort. In order to effectively prevent security misconfiguration it's critical that developers and ops folks keep the concept of minimal platform top of mind all the time. When a new feature, or framework is being implemented that's the time to make sure anything unnecessary is removed. It's also the right time during testing and during operation. I want to acknowledge a nuanced reality of actual software development. The reason that sometimes things that aren't being used don't get eliminated is because developers and ops folks work in groups. And software gets developed iteratively over time. It may actually be impossible to know if a particular feature is being used or not, this is not easy. The best way to start is to eliminate all of the things that are blatantly obvious. Take the CIS Docker Benchmark, for example. Item five point 12 says, "Ensure that "the container's root system is mounted as read only." Item 5.30 says, "Ensure that the host's "user namespaces are not shared." These are just two instances of ensuring that privilege and access are restricted to only what is absolutely necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Software Development]] (2)
> **CLI Commands:** make (1), docker (1)
> **Analogies:** kind of like (1), for example (1)
> **Env Vars:** cis (1)
> **Versions:** 5.30 (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [presenter] (1)

#### [Prevention technique #3: Configuration review](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=0)** - [Presenter] Perhaps the most important technique for preventing security misconfiguration is configuration review. This simply means check your settings and ensure they are as secure as you intend for them to be. It's all well and good to reduce your web app tech stack down to a minimal platform and to harden new instances. These techniques will help to prevent security misconfiguration in the future. But what about security misconfigurations that already exist in your already deployed software right now? All active software should undergo periodic configuration review in order to identify misconfigurations and fix them. Depending on exactly what components are in your tech stack, there are likely tools that exist that can help you to perform some of this configuration review. One example is the CIS Controls Self Assessment Tool, or CSAT, which is available from the Center for Internet Security. Keep in mind that like any defect discovery method, configuration review requires both automated and manual means in order for it to be truly effective. Tools can help to identify problem areas, but the most challenging part is typically once the problems are identified and need to be fixed. Even if security folks are the ones who found the problems, they're often not in the roles that have the access to be able to fix the issues. This next step involves partnering
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=93)** with critically important stakeholders to collaborate and ensure that the insecure configurations can be changed to secure settings. Realistically, in order to get this done, there's also a significant amount of detailed tracking that is required to support this effort. Consider a web app tech stack with 10 different components. Each of those components has 100 secure configurations. Simple math tells us that's 1,000 individual items to review, track and monitor over time. Security misconfigurations themselves can be extremely problematic, like in the case where an S3 bucket is left available to access by the public on the internet. Others, like leaving too much information in error messages, can seem less scary at first, but can be combined with other security vulnerabilities to build chained exploits. These often lead to the most damaging security attacks and breaches. A great way to manage security misconfiguration review in any type of web app security practice is to engage with a pen test as a service provider who provides on-demand manual [[Security Testing]], as well as a platform to help you track findings and remediation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1)
> **Env Vars:** cis (1), csat (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [presenter] (1)


### 2. Insecure Design

[↑ Back to Table of Contents](#table-of-contents)

#### [What are vulnerable and outdated components?](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=0)** - [Narrator] Building web applications is not like receiving a brand new Lego kit in the mail with perfect pieces nicely organized and clear instructions. It's also not like sitting down at your laptop with a blank document editor to begin writing a novel. More often in real life, building a web app is a little bit more like starting with the frame of a car that was new 20 or 50 years ago, rummaging around in a junkyard to find parts, buying some new parts and putting it all together to try and get the car to run. I remember learning computer science when I was in college in the early 2000s. Each of my projects started with a blank slate and I single-handedly designed and developed each program from start to finish. This style of [[Software Development]] is sometimes called Greenfield. This is not how web applications are built in real life. More often than not, new code must integrate with and play nicely with existing software components known as legacy software. The thing about legacy software is that sometimes it's vulnerable and sometimes it's outdated. When you're working on a quote unquote new application or when you update an existing application and you are using vulnerable or outdated components, there's risk involved. Managing vulnerable and outdated components is a completely normal, everyday type of activity when you're working on a team and building web applications.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=94)** When you know how to mitigate these types of risk, you're better positioned to build more secure software and protect the data of your clients and colleagues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Real-world example #1: Equifax breach 2017](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=1)** - [Narrator] Equifax is an American credit monitoring company. It uses sensitive financial and personal information to calculate credit scores, which are then used by individuals trying to obtain a loan. In the 2017 Equifax breach, nearly 150 million records were stolen. Compromised information included social security number, date of birth, address, and credit report information. Additionally, more than 200,000 credit card numbers were also breached in the attack. This type of information is pretty much exactly what a bad actor needs to commit identity theft. How did this happen? Unfortunately, Equifax was using vulnerable and outdated software components. And these were exploited by malicious hackers. The specific vulnerable software component involved in the breach is an open source component called Apache Struts. This particular vulnerability could be leveraged to perform RCE, or remote code execution. Remote code execution is a particularly severe type of attack. Basically, the hacker can execute their own code remotely on the victim's software. You can think of it like a remote control car. The hacker controls the remote to the car. It's not good. There are a few different theories as to the timeline of how the Equifax breach occurred. In March, 2017,
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=93)** the vulnerability was published to the public. This information became available both to the folks at Equifax managing the software containing the now outdated and vulnerable component, as well as malicious hackers looking to exploit that same vulnerability. In May, information was stolen from Equifax servers but this wasn't discovered until July. Individuals who were affected by the breach and the public were notified in September.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** apache (1)
> **Env Vars:** rce (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [narrator] (1)

#### [Real-world example #2: Target breach 2013](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=0)** - [Instructor] The 2013 Target breach was called the biggest retail hack in history. It remains one of the biggest retail shopping breaches of all time. 40 million credit and debit card numbers were impacted and personal information for up to 70 million customers was compromised. In the months following the breach, Target had to respond to nearly 100 lawsuits. How did the breach occur? Target's digital infrastructure, like so many companies, is highly interconnected. This means that the security, or lack thereof, of one software component can affect the risk profile of all the other connected digital assets. In this case, malicious attackers were able to install malware on one part of Target's corporate network which then led to compromise of information throughout the [[Representational State Transfer (REST)|rest]] of the network. In November of 2013, hackers installed malware on one of Target's third-party vendors, a refrigeration contractor. An employee at the refrigeration contractor clicked on a [[Phishing]] email sent by the attackers and the malware collected login credentials for several internal Target software portals. It's likely that the attackers had been performing recon activities to learn as much as they could about the interconnections of Target's network. Several internal [[Windows]] servers were then compromised and the malware spread to Target's POS, point of sale systems.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=92)** This is where the credit and debit card data was stolen. Target found out about the attack about a month after the systems were compromised and disclosed the breach to the public. They took several actions to prevent similar attacks from being successful in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Phishing]] (1), [[Windows]] (1)
> **Env Vars:** pos (1)
> **Definitions:** means that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #1: Remove unnecessary features](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=0)** - A good friend and former manager of mine often says, if you're in a situation where a toddler is holding a pair of scissors, don't try to secure that situation. Change the situation completely by removing the scissors. In this analogy, the toddler is your web application and the scissors are unnecessary features and components, which could potentially be vulnerable and/or outdated. It's normal when developing web applications to use dependencies at one point in time that aren't used in a later version of the software. It's best practice to remove these, which can help optimize performance, and reduce maintenance activities. There's also an added security benefit. When you remove something from a web application that is not necessary for it to work, whether that be a feature component, file, documentation, or dependency, then you also don't have to worry about keeping track of or managing risk for that unnecessary thing going forward. A couple of tools that can be used to check for unused dependencies include Depcheck and [[npm]]-check. Depcheck is described on [npmjs.com](https://npmjs.com) as a tool for analyzing the dependencies in a project to see how each dependency is used, which dependencies are useless, and which dependencies are missing. Npm-check checks to see if your packages are up-to-date and in use. You may want to check-in with your security
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=95)** and development teams, to ask which tools they are using to check for unused dependencies and what process is being followed to remove unnecessary features and components. If you don't find anything, use it as an opportunity to collaborate with your colleagues and put something in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **CLI Commands:** npm (2), find (1)
> **URLs:** [npmjs.com](https://npmjs.com) (1)
> **Best Practices:** best practice (1)
> **Speakers:** - a (1)

#### [Prevention technique #2: Continuous inventory management](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=1)** - [Instructor] Let's talk about the silliest [[Cybersecurity]] term I know, SBOM. SBOM sounds scary, doesn't it? Literally, it has the [[Microsoft Word|word]] bomb in it. The funny thing is that SBOMs are actually not scary at all. They're actually quite boring. SBOM stands for software bill of materials. Basically, it's the ingredient list for a web application. If I'm allergic to a certain ingredient, then I want to know if it's in the food that I'm about to eat. Similarly, if a software component in my web application is risky or insecure then I want to know about it. It's impossible for me to manage the risk involved in various components of my web applications if I don't have a process to continually track and update my web app ingredient list. SBOM, software bill of materials. If you do have an up-to-date SBOM and a process to make sure it stays that way, then you can build a patching and vulnerability management process that takes each ingredient into consideration and allows you to keep an eye out for patches and updates that need to be applied urgently. The other day I received an email notification from a local store where we shop frequently about a problem with some peanut butter that we had purchased. The peanut butter had been found to have something wrong with it, and we were advised not to eat it. This notification helped me to protect me and my family, and the critical part is that
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=93)** the purchased food in my pantry was being tracked somewhere. We need to do this for our web applications, too. There is software that can help us manage our build of materials, but ultimately making this work is a governance activity requiring engineering teams to choose to have the discipline to either stay within a top-down list of already approved technologies or to update stakeholders as needed when new technologies are put into use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sbom (5)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique #3: Leverage virtual patching](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=1)** - [Narrator] Fundamentally managing vulnerable and outdated components is about being able to do the following. Number one, track the components. Number two, identify vulnerabilities. Number three, fix the vulnerabilities, usually by installing an update or patch. There are cases, however, in which it's not that easy to install an update or patch. If the vulnerability is found in third party software, the customer using that software may be completely dependent on that vendor's timeframe for deploying a patch. If the software organization that built the software is no longer active or has decided not to make patches available for old software that is still in use, you won't be able to patch. For organizations that completely outsource [[Software Development]], fixing vulnerabilities often comes with additional cost and time that might not have been included in an original project plan or budget. Even if your organization has a patch or update in-hand and complete control to deploy new code, installing a patch can take a lot of time, sometimes days, weeks, or months. This is typically attributed to getting buy-ins from different stakeholders, prioritizing the patch for an upcoming sprint, and doing testing for the patch before it's applied. In other cases, installing a patch may be deemed to be prohibitively expensive. So what exactly do you do if you have an outdated or vulnerable component, but you can't install a patch? Use a virtual patch, also commonly referred to
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=95)** as an external patch or a just-in-time patch. There are a few different types of tools that can help with virtual patching. Number one, intrusion prevention system, IPS. Number two, web application firewall, WAF. Number three, web server plugin. Number four, application layer filter. Fundamentally, the way that each of these operates is to inspect and analyze input flowing into a web application. This involves specific complex operations, and it's not a silver bullet. As with any other automated security detection system, the ideal setup minimizes both false positives and false negatives. You don't want to block legitimate input and you don't want to miss identification of malicious input. If you'd like to dive deeper into this topic, I recommend checking out the latest [[OWASP]] best practice guides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[OWASP]] (1)
> **Env Vars:** ips (1), waf (1), owasp (1)
> **Prerequisites:** install (2), setup (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore more of the OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=1)** - [Instructor] And there you have it. Items number five and six in the [[OWASP]] Top 10. Security misconfiguration and vulnerable and outdated components have been key information security concepts for decades now. The problems that lead to data breaches are known and we must continue to find, fix, and prevent these security vulnerabilities. We have an opportunity to build more secure web applications in the future. I hope you'll join me in my next course that covers the seventh and eighth vulnerability categories, identification and authentication failures and software and [[Data Integrity]] failures. Similar to this course, we'll learn about each vulnerability category, dive into real life examples, and discuss prevention techniques. Let's keep learning together. There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Data Integrity]] (1)
> **Env Vars:** owasp (2)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Caroline Wong]]

## Skills Covered

- Vulnerability Assessment
- Application Security

## Path Context

### In [[Master the OWASP Top 10]]
← [[OWASP Top 10- -3 Injection and -4 Insecure Design]] | **4 of 6** | [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] →

## Appears In

- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Node Js Security]] — Application Security
- [[Microservices- Security]] — Application Security
- [[Artificial Intelligence and Application Security]] — Application Security

---

[↑ Back to top](#)