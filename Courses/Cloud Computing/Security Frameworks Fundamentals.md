---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: security-frameworks-fundamentals
url: "https://www.linkedin.com/learning/security-frameworks-fundamentals"
duration_minutes: 76
duration: 1h 16m
level: Beginner
updated: 3/24/2023
learners: 11723
skills:
  - Risk Frameworks
  - Governance, Risk Management, and Compliance (GRC)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFsAcFjG7saUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679520373754?e=2147483647&amp;v=beta&amp;t=XwPpIzq-QJxPi1KKk82DbBS-4zLbF1sZ9E3VU7Y51Fc"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cybersecurity Fundamentals]]'
prev_courses:
  - '[[Cybersecurity Foundations- Security Architecture]]'
next_courses:
  - '[[IT Security Foundations- Operating System Security]]'
path_nav: '[{"path":"Cybersecurity Fundamentals","position":6,"total":12,"prev":"Cybersecurity Foundations- Security Architecture","next":"IT Security Foundations- Operating System Security"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/risk-frameworks
  - skill/governance-risk-management-and-compliance-grc
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Security%20Frameworks%20Fundamentals.md)

![Security Frameworks Fundamentals](https://media.licdn.com/dms/image/v2/C560DAQFsAcFjG7saUA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679520373754?e=2147483647&amp;v=beta&amp;t=XwPpIzq-QJxPi1KKk82DbBS-4zLbF1sZ9E3VU7Y51Fc)

# Security Frameworks Fundamentals

> Security has become a topic of conversation in every company's boardroom, and security frameworks give you a common language and a standard set of best practices for these conversations. In this course, Mandy Huth, the vice president of cybersecurity at Kohler, Co., covers the four primary frameworks, how they map to each other, and how to optimize them based on their relevance for your organizati

> [LinkedIn Learning](https://www.linkedin.com/learning/security-frameworks-fundamentals) | 1h 16m | Beginner | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Security frameworks](#security-frameworks)
  - [Who uses security frameworks?](#who-uses-security-frameworks)
  - [Why are security frameworks important?](#why-are-security-frameworks-important)
  - [Definitions](#definitions)
- [**1. Frameworks, Regulation, and Risk**](#1-frameworks-regulation-and-risk) (6 videos)
  - [Major security frameworks](#major-security-frameworks)
  - [Domain-specific frameworks and guidance](#domain-specific-frameworks-and-guidance)
  - [Maturity frameworks](#maturity-frameworks)
  - [Privacy frameworks](#privacy-frameworks)
  - [Regulatory frameworks](#regulatory-frameworks)
  - [Risk assessment](#risk-assessment)
- [**2. Security Framework Deep Dive**](#2-security-framework-deep-dive) (4 videos)
  - [PCI DSS and credit card payments](#pci-dss-and-credit-card-payments)
  - [CIS security controls](#cis-security-controls)
  - [NIST 800-53: Guidance for (US) companies](#nist-800-53-guidance-for-us-companies)
  - [ISO 27001/2: A global approach with certification](#iso-270012-a-global-approach-with-certification)
- [**3. Framework Comparison**](#3-framework-comparison) (4 videos)
  - [How the frameworks compare](#how-the-frameworks-compare)
  - [Mapping the controls to one another](#mapping-the-controls-to-one-another)
  - [Resources available for mapping controls](#resources-available-for-mapping-controls)
  - [Choosing a framework that is relevant to your business](#choosing-a-framework-that-is-relevant-to-your-business)
- [**4. The Core Security Set**](#4-the-core-security-set) (5 videos)
  - [Understanding control families and domains](#understanding-control-families-and-domains)
  - [The measures](#the-measures)
  - [The assurances](#the-assurances)
  - [Enabling technologies](#enabling-technologies)
  - [Security mindset](#security-mindset)
- [**Conclusion**](#conclusion) (1 videos)
  - [How to get started](#how-to-get-started)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Security frameworks](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=0)** - Security is a topic of conversation in every company's boardroom.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=5)** Organizations need a way to talk to one another about their security programs.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=10)** Security framework provides security practitioners and just as importantly, their business partners with a common language and set of practices they can follow together and compare to peer organizations consistently.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=23)** Join me in my [[LinkedIn]] Learning course, where I'll review major frameworks referenced and used by security practitioners.
>
> **[0:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=31)** We'll dig into the top four security frameworks, what is included within them, and how they map to one another.
>
> **[0:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=39)** Additionally, I'll review how to apply best practices to your own organization.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=44)** Hi, I'm Mandy Huth, and I'm a senior leader in the information security industry.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-frameworks?u=76281980&t=50)** Come with me on this exciting journey through security frameworks and best practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - security (1)

#### [Who uses security frameworks?](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=0)** - [Narrator] Security permeates everything businesses do.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=5)** Both physical and digital assets have to be protected, as well as information.
>
> **[0:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=11)** Security frameworks are consistent tools that every industry can use to improve their security practices.
>
> **[0:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=18)** So the short answer is everyone should use security frameworks.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=23)** Each industry chooses frameworks for various reasons.
>
> **[0:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=27)** It could be for compliance to a regulation in a specific industry.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=32)** For some, it is about national welfare or public safety.
>
> **[0:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=37)** Some businesses leverage security as a product differentiator, showing that they protect their consumer's data from the beginning.
>
> **[0:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=45)** Finally, some organizations need frameworks to ensure they are protecting sensitive data, whether it be their own intellectual property or client data.
>
> **[0:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=54)** Whatever the reason, security frameworks provide standardization and guidance for how to protect your organization, with recommendations for how to educate your people, documenting and applying your organizational processes, and implementing and maintaining your technology.
>
> **[1:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/who-uses-security-frameworks?u=76281980&t=73)** Everyone in any industry can benefit from the consistent language and standard approach that security frameworks bring.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Why are security frameworks important?](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=0)** - [Instructor] Modern life involves using the internet all the time.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=5)** If you think about it, there are over 8 billion people in the world and over 4.5 billion of them are internet users.
>
> **[0:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=14)** That's over half, and that's a lot of people.
>
> **[0:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=18)** Every day, data flows between people and companies.
>
> **[0:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=22)** Whether you're doing business, perhaps you're going to the doctor, or maybe you're doing a bit of personal shopping on your own time, data is in every part of our lives.
>
> **[0:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=33)** There are over 300 billion emails sent every day and over 1 trillion megabytes of data used every day.
>
> **[0:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=42)** Why does it matter then?
>
> **[0:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=45)** It is vital that companies, from the very largest to the very smallest, have the security frameworks in place to protect the data they're using or collecting.
>
> **[0:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=55)** Interestingly, a recent survey states that 84% of companies use a security framework, with almost 50% using more than one.
>
> **[1:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=64)** How do the ones not using a framework determine where their security risks are, and how do the ones using multiple frameworks keep them aligned?
>
> **[1:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=73)** Frameworks guide the implementation and management of security controls within an organization.
>
> **[1:19](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=79)** They provide standards outlining best practices.
>
> **[1:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=83)** You take a grocery list to the store, don't you?
>
> **[1:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=86)** Similarly, security frameworks provide a checklist so you don't forget anything.
>
> **[1:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=92)** Frameworks provide a reference, a common language.
>
> **[1:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=96)** They use common measurements, and they use best practices and benchmarking of other industry peers.
>
> **[1:43](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=103)** Used appropriately, they can provide visibility into an organization's risks.
>
> **[1:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=109)** There are a variety of reasons why organizations choose to implement security frameworks.
>
> **[1:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=115)** Some of the top drivers include [[Legal Compliance]] or public safety.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=119)** Many companies think about their reputation and financial security in case of a security breach, and some companies think about how security can be a differentiator for them by providing confidence to their consumers that their data is secure.
>
> **[2:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=135)** The main benefits to any organization that leverages security frameworks include things like a solid baseline for measuring security effectiveness, including identifying gaps and risks.
>
> **[2:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=147)** This allows you to report in a consistent manner to your leadership what your baseline was and the improvements you are making.
>
> **[2:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=155)** There's compliance: making sure you can show your auditors that you're doing the things required by the law.
>
> **[2:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=161)** And perhaps the most important benefit is improved demonstrable maturity within your security program.
>
> **[2:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=169)** Just as there are benefits with a security program, no program comes without its own challenges.
>
> **[2:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=175)** Some of the top challenges include a lack of budget; the inability to buy the tools or resources needed to work through your program; another is trained staff - having the right capabilities on your security team is important.
>
> **[3:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=190)** Many organizations are looking for automated tools so they can stop doing manual processes that are not scalable for their organization.
>
> **[3:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=197)** Finally, many organizations see a lack of integration between tools so that everything seems to be a one-off that needs to be administered separately.
>
> **[3:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=207)** As we look at the top benefits and challenges, the benefits definitely outweigh the challenges.
>
> **[3:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=212)** where security is concerned.
>
> **[3:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=214)** It's not always easy, it's like eating an elephant; one bite at a time.
>
> **[3:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/why-are-security-frameworks-important?u=76281980&t=220)** These frameworks will raise the bar of your security program, inch by inch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Legal Compliance]] (1)
> **Versions:** 4.5 (1)
> **Analogies:** it's like (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Definitions](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=0)** - [Instructor] The security world is full of jargon.
>
> **[0:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=3)** Security frameworks are no exception.
>
> **[0:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=6)** There are some key terms to be aware of when discussing security frameworks.
>
> **[0:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=11)** We'll go through them now so you know what to expect, but don't worry.
>
> **[0:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=16)** We'll remind you of them as we come across them in the upcoming chapters.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=20)** Let's start with security frameworks.
>
> **[0:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=22)** These are a set of practices, policies, and processes that hold your organization accountable for its defenses.
>
> **[0:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=30)** It is a calculated approach to determining risk.
>
> **[0:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=33)** Setting strategy and obtaining resources.
>
> **[0:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=37)** Further, a security framework is measurable and repeatable.
>
> **[0:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=42)** PCI or the Payment Card Industry is an information security standard for organizations that accept payment cards, such as debit cards and credit cards.
>
> **[0:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=52)** This standard is mandated by the major card brands to help reduce credit card fraud.
>
> **[0:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=59)** CIS stands for the Center for Internet Security.
>
> **[1:02](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=62)** It is a nonprofit organization that was formed with the mission of making the connected world a safer place, leveraging industry experts and collaboration to build protections against security threats.
>
> **[1:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=77)** [[NIST]] or the National Institute of Standards, and Technology is a physical sciences laboratory, spanning science, technology, engineering, and information technology.
>
> **[1:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=90)** Their mission is to supply reference materials to end users, which can be used as calibration standards and quality control.
>
> **[1:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=99)** ISO is the International Organization for Standardization.
>
> **[1:43](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=103)** It is an internationally-recognized organization that creates standards for over 168 member countries.
>
> **[1:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=110)** It is an independent organization, and it is the world's largest developer of international standards used among nations.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=119)** A Standard Information Gathering, also known as a SIG, is a tool to help companies assess risk in a standard fashion.
>
> **[2:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=127)** It is created by the Shared Assessments Program and has been developing third-party risk management tools since 200.
>
> **[2:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=135)** in the form of a questionnaire.
>
> **[2:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=138)** We know the security world is full of jargon.
>
> **[2:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/definitions?u=76281980&t=141)** Recognizing the main security frameworks, can help your organization determine the most relevant controls to use for your program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1)
> **Definitions:** is a  (4), is an  (3), stands for (1), known as (1)
> **Env Vars:** pci (1), cis (1), nist (1), iso (1), sig (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 1. Frameworks, Regulation, and Risk

[↑ Back to Table of Contents](#table-of-contents)

#### [Major security frameworks](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=0)** - There are an overwhelming number of security resources available online.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=5)** Determining which ones to use in which scenario can seem daunting.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=10)** But if you break it down by your organization's needs, you are sure to find something that will help you improve your security program.
>
> **[0:19](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=19)** Some frameworks are more comprehensive, while others are industry or domain-specific.
>
> **[0:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=25)** While we aren't going to cover all of them, that would take a really long time, we will certainly touch on many.
>
> **[0:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=34)** In a recent industry survey, there were four clear leaders in terms of the most highly adopted security frameworks: PCI, the CIS security controls, ISO 27001, and the [[NIST]] 800-53 framework.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=50)** PCI is an industry-specific framework required for anyone accepting payment cards.
>
> **[0:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=55)** You got it, friends, all that plastic in your wallet?
>
> **[0:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=58)** It's covered by this framework.
>
> **[1:02](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=62)** The CIS security controls are based on high-level business discussions.
>
> **[1:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=66)** It covers security controls by grouping them into 18 critical factors to consider, using business-friendly terms.
>
> **[1:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=75)** ISO 27001, on the other hand, is a globally recognized organization with a comprehensive framework that covers all of the security controls found within an [[Information Security Management]] system.
>
> **[1:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=89)** Finally, there's NIST 800-53, a comprehensive set of controls, as you can see.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=97)** US federal agencies are required to follow this framework and any companies doing business with them are encouraged to do so as well.
>
> **[1:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=106)** Determining the best framework to adopt relies on many factors.
>
> **[1:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=111)** Choosing the right one means selecting the framework that fits your organization's unique security needs.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=119)** Pause this video right now and really think about this.
>
> **[2:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=123)** Write down a few notes about what's important for your organization.
>
> **[2:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=128)** As you consider, think about your organization's internal business objectives.
>
> **[2:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=134)** Perhaps it is a compliance requirement to a certain regulation, or if you've done a risk analysis, maybe it's around the results of that.
>
> **[2:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=144)** Determine if you require more policy-based controls or more technical controls for your organization.
>
> **[2:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=151)** Finally, looking at industry best practices and how to apply them can work for you as well.
>
> **[2:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=158)** Each framework has pros and cons.
>
> **[2:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=161)** They vary in their objectives and approaches, but rely on the same foundational principles.
>
> **[2:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=167)** We'll deep dive into each of them a bit later.
>
> **[2:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=171)** Organizations vary in size, complexity, and maturity.
>
> **[2:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=176)** Choosing the framework that matches your requirements is paramount to achieving a security posture your organization can support and thrive under.
>
> **[3:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=185)** Using a mixture of frameworks in a hybrid way is okay, too.
>
> **[3:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=189)** It adds flexibility.
>
> **[3:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=191)** Combining best practices from multiple frameworks can help meet specific functional requirements.
>
> **[3:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=200)** Don't forget to think about including stakeholders from other departments during this process as well.
>
> **[3:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/major-security-frameworks?u=76281980&t=206)** Determining the needs of your organization is a precursor to aligning to one or several frameworks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[Information Security Management]] (1)
> **Env Vars:** pci (2), cis (2), iso (2), nist (2)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** required to (1)
> **Speakers:** - there (1)

#### [Domain-specific frameworks and guidance](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=0)** - [Instructor] There are other frameworks that are used frequently, many of which are domain specific or even industry specific.
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=9)** Let's talk about four of the most common ones that can help many organizations.
>
> **[0:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=14)** First, there is [[OWASP]].
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=17)** OWASP stands for the Open [[Web Application Security]] Project.
>
> **[0:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=22)** It is a nonprofit foundation that works to improve software security.
>
> **[0:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=27)** Think about everything we do on the internet.
>
> **[0:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=30)** It all involves software.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=32)** OWASP regularly publishes a report outlining the top 10 security concerns for web applications.
>
> **[0:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=39)** It explains what the risks are, how they happen, and most importantly, how developers can avoid creating those vulnerabilities in their code.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=50)** I know I feel better knowing someone is trying to protect all the places I visit on the internet.
>
> **[0:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=57)** Second, the [[Cloud Security]] Alliance is a nonprofit organization committed to providing best practices within [[Cloud Computing]].
>
> **[1:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=66)** They have created a framework called the Cloud Controls Matrix, which has over 197 controls, across 17 domains, all specific to cloud technology.
>
> **[1:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=78)** The Matrix has guidance from implementation through execution across the cloud supply chain, which means you can use it for your organization as well as business partners and vendors that may be a part of your cloud ecosystem as well.
>
> **[1:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=95)** An area of growing concern are industrial control systems, or ICS systems.
>
> **[1:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=101)** Industrial control systems are supervisory systems that control dispersed assets.
>
> **[1:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=107)** They are highly interconnected, and if bad people gain control of them, they can be used to do significant harm across the large network.
>
> **[1:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=116)** To prevent that from happening, [[NIST]] published a special publication, 800-82, which expressly addresses ICS security controls as they often differ for more common types of assets, like a data center server or a virtual machine.
>
> **[2:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=134)** CIS also created a companion guide for ICS systems, outlining how to apply their standard security controls to those systems specifically.
>
> **[2:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=146)** Lastly, while many of the frameworks focus on controls to put into place to avoid vulnerabilities, the MITRE ATT&CK framework takes a different approach.
>
> **[2:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=158)** This knowledge base focuses on 14 tactic categories that adversaries use, as well as the technical objective of using them.
>
> **[2:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=169)** Think of it this way.
>
> **[2:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=171)** If you understand how an adversary is going to behave and what platforms they are likely to target, then you can model those behaviors to be relevant to your networks and put in specific security controls to ensure the adversary can't use those tactics against you.
>
> **[3:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=188)** I would certainly like to know how those hackers think.
>
> **[3:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=192)** We know that data is everywhere.
>
> **[3:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=195)** The security industry continues to evolve its controls to include those domains that need more specific guidance.
>
> **[3:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/domain-specific-frameworks-and-guidance?u=76281980&t=203)** Understanding domain or industry specific frameworks available to you will help you identify resources relevant to your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Web Application Security]] (1), [[Cloud Security]] (1), [[Cloud Computing]] (1), [[NIST]] (1)
> **Env Vars:** owasp (3), ics (3), nist (1), cis (1), mitre (1)
> **Definitions:** is a  (2), stands for (1)
> **Speakers:** - [instructor] (1)

#### [Maturity frameworks](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=0)** - [Narrator] Implementing security controls for your security program is critical to protecting your organization.
>
> **[0:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=7)** Just as important as having the actual controls in place is how well you have them implemented.
>
> **[0:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=13)** For example, I can probably update the electric in my house on my own, but it might not be up to code.
>
> **[0:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=21)** Seeking out someone with more capability to do it with quality is pretty important.
>
> **[0:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=28)** Let's discuss two fairly common models to determine how mature your program is.
>
> **[0:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=34)** The [[Cybersecurity]] Maturity Model Certification, or CMMC, is a framework that includes cyber protection standards and five levels of maturity.
>
> **[0:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=45)** It was originally created to document standards to safeguard sensitive national security information for companies doing business with the US Department of Defense.
>
> **[0:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=57)** The CMMC measures the maturity of processes across 17 domains.
>
> **[1:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=63)** The levels are designed to rate how well an organization is executing cybersecurity hygiene, from basic performance to documented and then managed, reviewed, and optimized or advanced.
>
> **[1:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=78)** The National Institute of Standards and Technology, or [[NIST]], also created a framework called the Cybersecurity Framework, or NIST CSF, to help companies of all sizes organize and improve their cybersecurity programs by rating their maturity across 21 domains.
>
> **[1:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=99)** For each of these categories, there are five elements in this framework, identify, protect, detect, respond, and recover.
>
> **[1:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=110)** Under each of these are 21 security domains or categories.
>
> **[1:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=116)** Your organization can rate yourself as being one of four maturity levels, partial, risk informed, repeatable, or adaptive.
>
> **[2:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=126)** While the NIST CSF shouldn't be taken as a maturity model in itself, it can be used, much like the CMMC, to self-assess your maturity and highlight your key strengths, as well as opportunities for improvement.
>
> **[2:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=142)** Check out their website to learn more.
>
> **[2:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=144)** There's a lot of good information there.
>
> **[2:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=147)** Maturity models allow you to outline how capable your organization is of executing and managing your security controls.
>
> **[2:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/maturity-frameworks?u=76281980&t=156)** Using these frameworks, you can determine what capability gaps exist and document a plan to improve them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[NIST]] (3)
> **Env Vars:** cmmc (3), nist (3), csf (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Privacy frameworks](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=0)** - [ Instructor] I don't know about you, but I really do appreciate using certain websites that know my preferences and can make recommendations for me.
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=9)** It is a convenience and I'm willing to share certain information about myself to make that available.
>
> **[0:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=15)** However, I don't want just any company using any information they have about me for any purpose they see fit.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=23)** There's a balance to how much [[Privacy]] I expect, depending on the circumstances.
>
> **[0:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=29)** As consumers, we have always expected businesses to take care of valuable information, such as credit cards and health information.
>
> **[0:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=37)** As the amount of data we collectively began to use has grown, a very real concern about how data is being used has not only surfaced, but become a very important topic in our world.
>
> **[0:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=49)** Privacy has become one of the most important topics that companies can discuss.
>
> **[0:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=54)** Let's talk about the pros and cons and how we address it.
>
> **[0:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=58)** Some of the benefits of privacy is that consumers, partners, and even associates can have trust that a company is protecting their sensitive information.
>
> **[1:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=68)** Also, it can create differentiation for companies that take privacy seriously.
>
> **[1:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=74)** I know I prefer to shop at companies that demonstrate respect for my privacy when I want it.
>
> **[1:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=80)** However, the downside of privacy is that it can limit a company's ability to offer consumers goods and services that might be valuable to them.
>
> **[1:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=89)** Or it may limit their ability to do quality analytics on data to improve the efficiency and effectiveness in their [[Microsoft Products|products]].
>
> **[1:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=99)** Navigating these pros and cons can be quite a challenge, especially for global companies that have to consider privacy regulations across multiple countries, each of which have different regulations.
>
> **[1:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=112)** Most of us are probably aware of the Global Data Protection Regulation, or GDPR, that outlines privacy requirements for citizens of the European Union.
>
> **[2:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=123)** But there are many other regulations that outline process and technology-based control requirements, such as the Personal Information Protection Law in China, the Personal Information Protection and Electronic Documents Act in Canada, and the General Data Protection Law in Brazil.
>
> **[2:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=141)** There's also the California Consumer Privacy Act out of the United States.
>
> **[2:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=147)** That's a lot to have to consider, remember, and navigate, and that isn't even all of them.
>
> **[2:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=154)** A few key terms to recognize in privacy are personally identifiable information, or PII, data controllers, and data processors who are accountable and responsible for processing data.
>
> **[2:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=168)** There are several really great courses in the [[LinkedIn]] library for privacy, if you want to go in-depth there.
>
> **[2:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=175)** Fortunately, there are resources to help organizations navigate privacy.
>
> **[3:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=180)** Whether it is a free resource or an industry specific forum, there are several places you can seek guidance.
>
> **[3:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=187)** You might remember from our definitions video, the National Institute of Standards and Technology, or [[NIST]], provides reference material.
>
> **[3:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=197)** Privacy is no exception.
>
> **[3:19](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=199)** The NIST privacy framework was built to increase collaboration between security and privacy teams, as privacy can't happen without security controls.
>
> **[3:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=210)** The NIST privacy framework is composed of three parts; core, profiles, and implementation tiers.
>
> **[3:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=220)** Additionally, the framework has five functions for managing privacy, identify, govern, control, communicate, and protect.
>
> **[3:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=233)** These functions focus on reducing the risk with collecting, processing, and storing data, which are the primary activities that organizations do with consumer data.
>
> **[4:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=244)** Another organization that addresses privacy is the International Standards Organization, or ISO, which creates international standards.
>
> **[4:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=253)** ISO had previously published standards for security.
>
> **[4:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=257)** ISO 27,001 is guidance on how to establish and maintain an [[Information Security Management]] system.
>
> **[4:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=265)** Following that, ISO 27,002 outlined the foundations of creating security controls, including frameworks and implementation guidance.
>
> **[4:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=275)** With growing privacy needs globally, ISO published ISO/IEC 27701:2019, which is an extension to ISO 27,001 and 27,002, and provides guidance for establishing and maintaining a privacy program.
>
> **[4:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=296)** One of the most well known privacy organizations is the International Association of Privacy Professionals or IAPP.
>
> **[5:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=305)** This organization is a global not-for-profit organization founded in 2000, that provides a forum for the privacy community.
>
> **[5:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=313)** They share best practices and standards as well as education.
>
> **[5:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=318)** There are some free resources and some paid offerings.
>
> **[5:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=322)** They also have global certifications for several privacy areas.
>
> **[5:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=327)** The certifications are called CIPP, CIPM, and CIPT, which demonstrate competency in regional privacy, operations, and technology.
>
> **[5:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/privacy-frameworks?u=76281980&t=342)** Understanding what it means to keep data private and protect consumers, as well as knowing resources available to you, will ensure you handle your company's data in a way that creates trust with consumers and benefits your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (26), [[NIST]] (3), [[Microsoft Products|Products]] (1), [[LinkedIn]] (1), [[Information Security Management]] (1)
> **Env Vars:** iso (7), nist (3), gdpr (1), pii (1), iec (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Ports:** :2019 (1)

#### [Regulatory frameworks](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=0)** - [Instructor] One of the primary driving factors for security in many organizations is the need for [[Regulatory Compliance]].
>
> **[0:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=8)** There are many laws and regulations that require certain security behaviors from businesses handling certain information and assets.
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=17)** Some regulations are international, some are country specific, and there are some regulations that vary between a federal and a state level.
>
> **[0:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=27)** Most often, these regulations are specific to certain industries that have higher risk and need specific governance to protect against those risks.
>
> **[0:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=36)** No matter where a company is located, if they do business within or with these countries or industries, they may be required to execute on certain security practices.
>
> **[0:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=47)** In the [[Healthcare Industry]], there is a regulation in the United States called HIPAA, or the Health Insurance Portability and [[Accountability]] Act of 1996.
>
> **[0:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=57)** HIPAA outlines specific controls to protect the Electronic Personal Health Information, or EPHI of healthcare patients.
>
> **[1:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=66)** And while HITRUST, or Health Information Trust Alliance, is a benchmark, it provides a standardized compliance framework for both assessment and certification that demonstrates compliance in this space.
>
> **[1:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=81)** In the finance industry, you'll find several regulations.
>
> **[1:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=86)** While there are several regulatory bodies that oversee banks in the United States, such as the Federal Reserve Board, there are specific regulations to outline compliance requirements.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=97)** Sarbanes-Oxley, or SOX, requires internal security controls for financial reporting systems in the United States.
>
> **[1:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=106)** Additionally, the Graham-Leach-Bliley Act requires financial institutions to secure the private information of clients and customers.
>
> **[1:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=116)** Because of these regulations, the financial industry created an industry specific consortium to reduce risk.
>
> **[2:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=123)** The Financial Services Information Sharing and Analysis Center, also called FS-ISAC, is an international organization that uses security information, peer information sharing, and controls to try to better mitigate [[Cybersecurity]] threats to the financial industry.
>
> **[2:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=143)** Also in the financial sector, although not a government regulation, is PCI DSS, or the Payment Card Industry [[Data Security]] Standard.
>
> **[2:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=153)** This regulation is designed to protect customer credit card information and reduce fraud.
>
> **[2:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=159)** It is required to participate in credit card use with the major credit banks.
>
> **[2:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=164)** In education, there is a US federal law called FERPA, or the Family Educational Rights and [[Privacy]] Act.
>
> **[2:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=171)** This law was designed to protect the privacy of student educational records.
>
> **[2:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=177)** In the energy industry, which is considered one of the 16 critical infrastructure sectors in the US, there is an international organization that provides standards to ensure resilience of energy for North America.
>
> **[3:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=190)** While not a law, the North American Electric Reliability Corporation, or NERC, provides standards, and most organizations that work in this sector know that they must test and assess their controls once a year.
>
> **[3:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=207)** The Federal [[Information Security Management]] Act of 2002, or FISMA, recognizes security as a matter of national security.
>
> **[3:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=216)** While it is specific to federal agencies, any business doing business with the federal government should follow these guidelines as well.
>
> **[3:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=225)** As you can see, there are numerous regulations that touch specific countries or industries.
>
> **[3:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=231)** It would take us all day to go over the many different regulations across the globe.
>
> **[3:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=236)** As we wrap up this overview, just remember that there are many industries that require security processes to be in place or those organizations could be held liable.
>
> **[4:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/regulatory-frameworks?u=76281980&t=247)** Make sure to check for regulations that may apply to your company.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Regulatory Compliance]] (1), [[Healthcare Industry]] (1), [[Accountability]] (1), [[Cybersecurity]] (1)
> **Env Vars:** hipaa (2), ephi (1), hitrust (1), sox (1), isac (1)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** required to (2)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Risk assessment](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=0)** - [Instructor] Risk assessment is a systematic process of evaluating the potential risks that may be involved in a projective activity or undertaking.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=10)** That can mean many things for an organization.
>
> **[0:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=13)** Using a standard risk assessment tool helps a team measure components in a consistent way across many different subject areas.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=23)** The standardized information gathering, or SIG, is a risk assessment tool that companies can use to review the different exposures for their organization and where they fall on the maturity scales.
>
> **[0:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=36)** The SIG began as an effort of the largest four consulting firms to standardize assessment of customer environments.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=44)** There is a cost to be a member of the shared assessments program but it isn't the only tool available.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=50)** There are many options available for free as well.
>
> **[0:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=53)** The Center for Internet Security has free assessment tools, as does the [[NIST]] website.
>
> **[0:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=58)** You can review your organization's needs and budget to make the best decision for your company.
>
> **[1:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=65)** This macro-enabled worksheet covers multiple risk domains including cyber security, IT, [[Privacy]], [[Data Security]] and business [[Resiliency]], to name a few.
>
> **[1:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=77)** You can see this tool isn't just an IT tool or an information security tool.
>
> **[1:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=83)** It can be used to assess and uncover risk areas across the entire business.
>
> **[1:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=89)** Examples include missing policies for acceptable use of social media, customer privacy, or onboarding of new employees.
>
> **[1:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=98)** These risk domains map to the same domain that the frameworks cover.
>
> **[1:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=104)** This is the main benefit of leveraging a security framework, common consistent language.
>
> **[1:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=111)** Another way to do a risk assessment is a framework called FAIR, which stands for Factor Analysis of Information Risk.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=119)** It is a way to quantify risk in financial terms and enables companies to make consistent comparisons between their various risks.
>
> **[2:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=128)** There are four factors that FAIE evaluates; the threat event frequency, threat capability, control strength, and vulnerability.
>
> **[2:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=138)** With these four factors in place, a company can compute the Loss Event Frequency.
>
> **[2:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=144)** With a loss event, a company can determine how severe a loss can be by estimating the probable loss magnitude, which can clearly outline risk.
>
> **[2:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=155)** FAIR can be very useful.
>
> **[2:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=157)** It does require a certain amount of estimating risk, so use it as a tool to enhance your other risk management frameworks.
>
> **[2:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=165)** While the Fair Institute is a nonprofit organization and does have good reference material, the FAIR is a methodology that has a cost associated with it.
>
> **[2:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=175)** Another framework used to assess risk is called COBIT, which stands for Control Objectives for Information and Related Technologies.
>
> **[3:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=183)** COBIT focuses on [[Regulatory Compliance]], ensuring companies have proper controls and processes in their organization to manage risk effectively.
>
> **[3:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=194)** COBIT is a framework created by international professional association ISACA for Information Technology Management and [[IT Governance]].
>
> **[3:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=204)** ISACA and its frameworks are focused on governance, risk, and compliance, including [[IT Audit]] and risk management.
>
> **[3:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=213)** ISACA is a membership organization.
>
> **[3:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=215)** There is user training and development on how to use the framework available to members.
>
> **[3:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=221)** Risk assessment is a critical component of understanding an organization's security exposures.
>
> **[3:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/risk-assessment?u=76281980&t=227)** Understanding what assessment tools are available and determining which is most relevant for their organization can help practitioners regularly assess their risk and outline mitigations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[NIST]] (1), [[Data Security]] (1), [[Resiliency]] (1), [[Regulatory Compliance]] (1)
> **Env Vars:** fair (3), cobit (3), isaca (3), sig (2), nist (1)
> **Definitions:** is a  (10), stands for (2), is called (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


### 2. Security Framework Deep Dive

[↑ Back to Table of Contents](#table-of-contents)

#### [PCI DSS and credit card payments](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=0)** - [Narrator] PCI DSS, or the Payment Card Industry [[Data Security]] Standard, is both a framework and a compliance standard.
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=9)** PCI is an information security standard for any organization that transacts credit cards.
>
> **[0:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=16)** It includes transmission and storage of credit card information.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=20)** Created in 2004, it is mandated by credit card companies and is overseen by the PCI Security Standards Council.
>
> **[0:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=27)** While not a regulation, it would be considered mandatory, based on previous court rulings.
>
> **[0:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=34)** The PCI standard was created to reduce credit card fraud.
>
> **[0:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=38)** Each of the major credit card companies had different programs in use, but the intent was the same, to ensure merchants were following security practices when they store, process, and transmit cardholder data.
>
> **[0:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=52)** There are 12 requirements for compliance as part of this standard, organized into six logical groups called control objectives.
>
> **[1:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=61)** The first is to create a secure network and systems.
>
> **[1:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=65)** Next, it discusses protecting cardholder data.
>
> **[1:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=69)** Third, PCI requires an organization to have a vulnerability management program.
>
> **[1:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=74)** Number four is to ensure controlled access to your systems.
>
> **[1:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=78)** Next, companies are required to ensure the network is monitored and tested.
>
> **[1:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=83)** And finally, each organization needs a security policy that is propagated to all of its employees.
>
> **[1:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=90)** Organizations must validate their compliance each year, either through an external assessor or an internal assessor.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=97)** Companies with very small volumes are permitted to do a self attestation.
>
> **[1:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=102)** Let's do an example.
>
> **[1:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=104)** Big Star Collectibles is a small company that has both a physical store and an online presence.
>
> **[1:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=111)** While the physical store could do a cash only business, although, how common is that in today's economy?
>
> **[1:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=118)** In order to do business online, Big Star Collectibles will need to accept credit card payments.
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=124)** There will be requirements on how to process and store data in the store.
>
> **[2:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=129)** There are also options, although these do come at a cost, to use systems called Point of Sale or POS systems, that effectively hide the actual credit card information from the store associates, creating mitigation for some of those process requirements.
>
> **[2:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=146)** Online, Big Star Collectibles will need to ensure that they check for vulnerabilities in the website and use a secure website.
>
> **[2:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=156)** Using encryption for cardholder data is a requirement.
>
> **[2:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=160)** The company also needs to make sure the checkout process is secured, which they can manage themselves or pay an external firm to manage.
>
> **[2:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/pci-dss-and-credit-card-payments?u=76281980&t=168)** Understanding the requirements for accepting, processing, and storing when applicable credit card information is an important standard that must be followed by companies choosing to accept payment cards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1)
> **Env Vars:** pci (5), dss (1), pos (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [CIS security controls](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=0)** - [Instructor] CIS stands for the Center for Internet Security.
>
> **[0:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=4)** CIS uses a prioritized set of actions to protect organizations from known threat vectors.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=10)** These actions are known as the Critical Security Controls.
>
> **[0:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=14)** The Critical Security Controls project began in 2008 when the [[Microsoft Office|Office]] of the Security of Defense asks the NSA to help prioritize the multitude of [[Cybersecurity]] controls that were available.
>
> **[0:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=26)** A consortium of public and private industry experts worked to prioritize the controls, including representatives from CIS and the SANS Institute.
>
> **[0:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=37)** The Security Controls are reviewed with members every six to 12 months to ensure it stays current with the evolving security and threat landscapes.
>
> **[0:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=46)** Now simply called the CIS Controls, there have been several iterations originally focused on who was responsible for the control, but then switched focus to ranking the controls in order of importance from high to low.
>
> **[1:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=60)** Today's version is based on activities with controls called safeguards.
>
> **[1:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=64)** What was originally 20 controls has resulted in a decrease of controls to 18 due to combining some of the controls.
>
> **[1:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=72)** Each control has three levels of safeguards, called implementation groups one, two, and three.
>
> **[1:19](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=79)** Implementation group one is foundational and should be applied to every organization.
>
> **[1:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=84)** Implementation group two builds on IG1 as organizations continue to mature, and implementation group three looks to maximize the security mitigations available to an organization.
>
> **[1:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=98)** The CIS Controls account for the primary areas of protection your organization will need to protect its ecosystem.
>
> **[1:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=105)** From inventory to access control, data protection and recovery, network, email and web protections, [[Application Security]], training, and [[Incident Response]].
>
> **[1:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=118)** You can confidently begin with these to know you have good security coverage, and even more good news is that it's resources are available free of charge.
>
> **[2:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=128)** Let's check how Red30 Tech can use the CIS Controls for their company.
>
> **[2:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=133)** Red30 Tech is a smaller company that doesn't necessarily have a large budget to spend on a lot of big names security software and services.
>
> **[2:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=143)** So their security program needs to be based on controls that they can implement or change on their own, either on the systems or in their processes.
>
> **[2:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=153)** Red30 Tech decides to focus on implementation group one for controls one and two, which are about inventory.
>
> **[2:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=160)** Control one for enterprise assets, which are things like servers, or laptops, recommends you have a detailed asset inventory, and that you have a process to address any unauthorized assets.
>
> **[2:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=173)** Control two for software, also recommends inventory and unauthorized software, and implementation group one also suggests ensuring all software is currently supported.
>
> **[3:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=187)** These controls don't require an investment other than a resource to own the inventory, and ensure it is managed and kept up to date.
>
> **[3:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=196)** And voila, Red30 Tech is already a few more steps ahead on its security journey.
>
> **[3:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=202)** Not all of the controls are that way, but many of them are.
>
> **[3:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=206)** So take a look at what is relevant to your organization, and that you can afford.
>
> **[3:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=211)** CIS as a framework reminds us that it isn't about checking all the boxes on a list.
>
> **[3:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=217)** It isn't a certification, nor is [[IT Compliance]]-focused.
>
> **[3:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=221)** It's simply used to help companies improve their security posture by considering their entire ecosystem, and implementing good security controls.
>
> **[3:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/cis-security-controls?u=76281980&t=232)** Knowing this framework can help you set about consistently implementing controls for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Cybersecurity]] (1), [[Application Security]] (1), [[Incident Response]] (1), [[IT Compliance]] (1)
> **Env Vars:** cis (7), nsa (1), sans (1), ig1 (1)
> **Definitions:** stands for (1), known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [NIST 800-53: Guidance for (US) companies](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=0)** - [Instructor] The [[NIST]] Special Publication 800-53 provides a catalog of security controls for all US federal information systems, except those related to national security.
>
> **[0:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=14)** It covers the [[Risk Management Framework (RMF)|risk management framework]], which addresses risks from worst case impact analysis.
>
> **[0:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=21)** NIST, or the National Institute of Standards and Technology, created this special publication to assist federal agencies in implementing the Federal [[Information Security Management]] Act of 2002, called FISMA, and to help create cost effective standardization.
>
> **[0:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=38)** It is updated regularly to stay current as technology and risk evolve.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=44)** While all federal agencies must use it and many state governments have adopted it, organizations wanting to do business with the federal government should use this framework to show similar security diligence.
>
> **[0:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=56)** Even if you don't do business with the US government, it can be adopted by any company anywhere looking to improve their security practices.
>
> **[1:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=65)** It is available to any organization that seeks to use it.
>
> **[1:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=70)** The structure of NIST 800-53 aligns with management, operational and technical safeguards prescribed to protect the confidentiality, integrity, and availability, or CIA, of systems, information and data.
>
> **[1:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=85)** There are 20 control families under the NIST framework.
>
> **[1:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=89)** Management security is the overall design of your controls.
>
> **[1:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=93)** They provide guidance for implementing your security controls.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=97)** Examples of this include doing assessments and having a process to acquire new systems or services.
>
> **[1:43](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=103)** Operational security is the effectiveness of your controls.
>
> **[1:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=107)** It includes things such as implementation and the security architecture after initial building of a system is complete.
>
> **[1:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=114)** These controls include guidance around how to configure your system, how to maintain it and ensure it's ongoing integrity, as well as training your employees.
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=124)** Technical security is the protection of systems at the [[Hardware]], software or firmware levels from threats that could impact the CIA of your systems or data.
>
> **[2:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=135)** These controls surround your system protections, such as access control, authentication and systems and communication protections.
>
> **[2:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=144)** While the most recent revision of the NIST 800-53 is quite comprehensive, I would be remiss if I didn't say that it is a lot.
>
> **[2:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=154)** There are over 1000 controls within the 20 control families.
>
> **[2:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=158)** There's a companion publication, 800-53B, which breaks controls down further by describing their impact as low, moderate or high.
>
> **[2:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=169)** It can still feel like a lot to navigate.
>
> **[2:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=172)** It is an outcomes-based approach, however, so don't worry too much.
>
> **[2:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=177)** You can focus on one area at a time to begin making security improvements.
>
> **[3:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=183)** In addition to the NIST 800-53 framework, NIST offers a Special Publication 800-30 which is a guide for conducting risk assessments.
>
> **[3:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=193)** It is a comprehensive overview of terminology, risk factors and weighting that you can use to educate your organization on risk exposures.
>
> **[3:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=202)** It is also available free of charge to anyone wishing to use it.
>
> **[3:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=207)** If you do need to do business with government agency, there is a certification called FedRAMP that requires sponsorship by a federal agency and an external audit to gain certification.
>
> **[3:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=219)** There is a cost associated with it but it can be valuable as it is like a pre-approval for doing business with the federal government.
>
> **[3:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=228)** An example always helps me so let's check in with the city of Orange Valley, who is beginning their implementation of the NIST 800-53 by focusing on the access control, or AC control family.
>
> **[4:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=241)** This may get a little bit technical.
>
> **[4:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=243)** Grab your local friendly IT person to explain any terms you may not know.
>
> **[4:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=249)** The AC control family focuses on who has access to what.
>
> **[4:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=254)** It has 25 controls, providing guidance on areas such as account management, separation of duties, least privilege, log on attempts, remote access and session termination.
>
> **[4:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=268)** In this case, the city of Orange Valley can begin by creating an access policy, setting up a minimum password requirement, locking users out after five unsuccessful logins, requiring a VPN to connect from home, timing their systems out after 15 minutes of inactivity or ensuring that approvals for privileged access has two unconnected people included in that process.
>
> **[4:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=295)** Voila, the city has taken its first steps towards compliance to NIST 800-53.
>
> **[5:02](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=302)** The NIST 800-53 publication is a thorough guide to outlining all the controls to bring comprehensive security to your organization.
>
> **[5:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/nist-800-53-guidance-for-us-companies?u=76281980&t=311)** Becoming familiar with its control families and applying the most critical of its 1000 controls to your organization can help you on your journey to increase security at your company in a consistent fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (10), [[Risk Management Framework (RMF)|Risk management framework]] (1), [[Security Management]] (1), [[Hardware]] (1)
> **Env Vars:** nist (10), cia (2), fisma (1), vpn (1)
> **Definitions:** is a  (6), is an  (1)
> **Analogies:** such as (3)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [ISO 27001/2: A global approach with certification](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=0)** - [Instructor] ISO 27001 is an information security standard that positions information security under management control and outlines specific requirements.
>
> **[0:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=12)** It specifically aims to put an [[Information Security Management]] system, or ISMS, in place to ensure comprehensive coverage of all assets and data.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=23)** That means it's not just IT.
>
> **[0:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=26)** Things such as paperwork and proprietary knowledge are included as well.
>
> **[0:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=31)** ISO 27002 is a supporting standard that outlines how controls in the ISMS can be implemented.
>
> **[0:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=39)** This standard is published jointly by ISO, or the International Organization for Standardization; and the IEC, or International Electrotechnical Commission.
>
> **[0:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=51)** ISO 27001 does not formally mandate specific controls.
>
> **[0:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=57)** It allows for flexibility.
>
> **[0:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=59)** Organizations can choose which ones are applicable controls by doing a comprehensive assessment of its risks.
>
> **[1:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=66)** Further, companies are not required to mitigate all risks.
>
> **[1:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=72)** All that is required is to do the analysis and choose an appropriate risk strategy to avoid, transfer, accept, or mitigate the risk.
>
> **[1:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=84)** There are 10 sections in this standard.
>
> **[1:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=87)** The first three outline generic requirements, references, and definitions.
>
> **[1:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=93)** Section 4 discusses interested parties or stakeholders.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=97)** Section 5 outlines that top management must commit to the ISMS.
>
> **[1:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=102)** Section 6 defines the process to identify, analyze, and plan to treat risks.
>
> **[1:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=108)** And Section 7 informs us that an organization must have competency, training, and documentation.
>
> **[1:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=114)** Section 8 details assessing and treating risk and managing change.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=119)** Section 9 discusses how to monitor and measure or audit your controls.
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=124)** And Section 10 outlines how to address the findings of your reviews to continually improve the ISMS.
>
> **[2:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=131)** Annex A is a list of those controls and their objectives.
>
> **[2:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=136)** Under ISO 27001, An ISMS can be certified as compliant by an accredited registrar.
>
> **[2:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=144)** There are three stages to the certification process.
>
> **[2:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=148)** Stage 1 is a preliminary informal review of an ISMS with an auditor.
>
> **[2:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=154)** Stage 2 is the formal comprehensive compliance audit.
>
> **[2:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=159)** And then, there are ongoing audits in Stage 3 to confirm an organization remains compliant with the standards by doing reassessment audits.
>
> **[2:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=168)** There is a fee associated with both the content, as well as the certification and costs to hire an external accreditor.
>
> **[2:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=177)** Of note, while certification is available for an additional fee from the content, it is not required to be able to use this framework content.
>
> **[3:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=188)** ISO 27002 is what I would consider the companion guide to the ISMS outlined in ISO 27001.
>
> **[3:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=196)** While ISO 27002 is not certifiable, if an organization implements and complies with its controls, it will be much closer to meeting the requirements for certification outlined in 27001.
>
> **[3:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=210)** ISO 27002's most recent version has 93 controls and 14 clauses.
>
> **[3:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=217)** These controls are categorized into four themes: organizational, people, physical and technological.
>
> **[3:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=226)** Also, the current version aligns with the industry standard of attributes for these controls: identify, protect, detect, respond, and recover, which is also used in the [[NIST]] CSF.
>
> **[4:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=240)** You can review that in the Chapter 1 video on Maturity.
>
> **[4:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=244)** There's a lot to cover here, but let's see how a large financial institution might handle this.
>
> **[4:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=250)** Let's do an example with Global Bank.
>
> **[4:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=253)** Global Bank knows it needs to cover the full range of information security controls, such as physical security, as well as the normal technical controls involved with connected [[Banking]] systems.
>
> **[4:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=265)** Further, it knows that with associates all over the world, it needs tight organizational controls to ensure consistent application of its policies.
>
> **[4:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=275)** Global Bank decides to implement ISO 27001 to have a full management system in place, using ISO 27002 as a guide on how to implement these items.
>
> **[4:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=286)** Global Bank knows that this process will take time, as it has to complete a risk assessment to determine its most critical risks in a form called the state of applicability, or SOA.
>
> **[4:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=298)** Then, it can identify which risks need to be dealt with in priority order called a risk treatment plan.
>
> **[5:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=306)** Remember, dealing with a risk does not always mean eliminating it.
>
> **[5:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=311)** Once it has completed the risk assessment, it can select which control should be implemented by leveraging ISO 27002 and begin applying them.
>
> **[5:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=320)** When ready, Global Bank can engage an auditor to do a preliminary and formal audit.
>
> **[5:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=327)** As long as the relevant scope is within parameters, Global Bank can then be listed as ISO 27001 Certified.
>
> **[5:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=336)** ISO 27001 and 27002 focus on implementing a comprehensive information security management system, not just security controls.
>
> **[5:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=347)** It is the world's best-known standard.
>
> **[5:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=350)** While it takes a lot of time and effort with a material amount of time for administration, it can be used to differentiate an organization with strong, certified controls.
>
> **[6:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/iso-27001-2-a-global-approach-with-certification?u=76281980&t=361)** Knowing what is involved in ISO 27001 Certification can be valuable to organizations that require external validation of their security posture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Information Security Management]] (2), [[NIST]] (1), [[Banking]] (1)
> **Env Vars:** iso (15), isms (7), iec (1), nist (1), csf (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** such as (2)
> **Prerequisites:** required to (2)
> **Speakers:** - [instructor] (1)


### 3. Framework Comparison

[↑ Back to Table of Contents](#table-of-contents)

#### [How the frameworks compare](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=0)** - [Instructor] The top four security frameworks each cover multiple security controls.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=5)** Although there are some differences, many of these controls overlap.
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=9)** Coming in at nearly 1,000 pages of documentation, it's hard to determine the best framework to adopt.
>
> **[0:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=16)** Comparing these frameworks is a great place to start.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=20)** PCI has 12 top-level requirements with approximately five to 20 controls under each of those requirements.
>
> **[0:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=28)** All the requirements surround the protection of credit card data during processing, transmission, and storage.
>
> **[0:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=35)** PCI compliance via an audit is required annually.
>
> **[0:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=40)** The CIS Controls have 18 high-level controls with a total of 153 safeguards underneath.
>
> **[0:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=47)** Each area is built around prioritized implementation groups.
>
> **[0:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=51)** All of the critical security controls are built around industry best practice.
>
> **[0:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=56)** There is no compliance or certification with the CIS Controls.
>
> **[1:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=61)** [[NIST]] 800-53 has 20 control families with over 1,000 controls, which can be broken down into baseline controls and enhanced controls.
>
> **[1:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=72)** This comprehensive control set is required to be followed by federal agencies.
>
> **[1:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=78)** However, anyone can use the NIST controls for best practice.
>
> **[1:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=82)** There is a certification called FedRAMP that can be used by organizations that want to do business with the federal government.
>
> **[1:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=89)** It is like a pre-approval to work with them, and it must be done annually.
>
> **[1:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=94)** The last framework we covered, ISO 27001, has 10 sections focused on management commitment and involvement in risk management.
>
> **[1:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=104)** There are 93 comprehensive controls for an organization to consider and analyze in terms of their risk exposure.
>
> **[1:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=112)** ISO 27002, while not a certification, is the companion to 27001, outlining how to implement the controls.
>
> **[2:02](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=122)** There is a fee to access the controls, and there is a certification of compliance available for an additional charge by an accredited registrar.
>
> **[2:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=131)** It's important to understand the top four frameworks.
>
> **[2:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=134)** They all cover similar foundational security controls but in different ways.
>
> **[2:19](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-the-frameworks-compare?u=76281980&t=139)** Consider the most relevant method of control when selecting a framework for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2)
> **Env Vars:** pci (2), cis (2), nist (2), iso (2)
> **Definitions:** is a  (4)
> **Best Practices:** best practice (2)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)

#### [Mapping the controls to one another](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=0)** - [Instructor] Now that we have covered the primary security frameworks and begun to compare them, let's take some time to understand the overlap of the controls across the frameworks.
>
> **[0:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=11)** The ability to align controls between frameworks is most commonly done by cross-referencing the objectives to the equivalent control in another framework.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=20)** The first example we'll use is [[Incident Response]].
>
> **[0:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=25)** Under PCI, incident response is found under Requirement 12.
>
> **[0:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=30)** It calls for an organization to have a documented incident response plan and escalation procedures, as well as roles and responsibilities and other preparation information.
>
> **[0:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=40)** Additionally, it requires an organization to do incident response testing annually and to evolve the plan from lessons learned and industry best practice.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=50)** In the Critical Security Controls, incident responses Control Number 17.
>
> **[0:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=55)** It details in 10 different components that you should have, including an incident response procedure, assigned duties, incident reporting, and routine practice or walkthroughs.
>
> **[1:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=68)** Under [[NIST]] 800-53, incident response has its very own control family called IR.
>
> **[1:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=75)** It details out nine controls, including to have a policy, to do training and testing, to have a documented plan covering the four phases of security incidents, to have a reporting mechanism, to have an identified team, and a prepared response or notification to work from.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=97)** With ISO 27001, incident response is listed under Section 16.1, Information Security Incident Management.
>
> **[1:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=106)** This section outlines that there should be responsibilities and procedures to manage, report and assess information security events and weaknesses consistently and effectively, and to collect forensic evidence, in addition to learning from incidents and making improvements.
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=124)** As you can see, all four frameworks include incident response in their controls.
>
> **[2:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=131)** Incident response was a process control.
>
> **[2:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=134)** The framework controls also overlap in the technical world.
>
> **[2:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=138)** Let's explore antivirus and antimalware.
>
> **[2:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=143)** Under PCI, antivirus and anti-malware controls are found under Requirement Five.
>
> **[2:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=149)** It calls for an organization to deploy antivirus software on all systems commonly affected by malicious software, especially workstations and those systems facing the internet.
>
> **[2:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=162)** Additionally, the antivirus programs used must be kept current and actively running.
>
> **[2:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=168)** In the CIS security controls, antivirus and anti-malware are discussed in Control Number 10.
>
> **[2:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=175)** It details out in seven controls that an organization must have centrally-managed antimalware software that is kept current, configured for scanning and logging is turned on, and ensure they have disabled autorun and autoplay services to run content automatically without scanning.
>
> **[3:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=195)** Under NIST 800-53, antivirus and anti-malware controls are found under the System and Information Integrity Family called SI.
>
> **[3:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=206)** SI-2 discusses flaw remediation, which requires up-to-date antivirus signatures.
>
> **[3:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=213)** SI-3 reviews malicious code protection, requiring protections at entry and exit points to detect and eradicate malicious code, to maintain and update the program consistently, and to scan, block, and/or quarantine suspicious code.
>
> **[3:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=231)** With ISO 27001, antimalware is discussed in Section 12.2 under Operation Security.
>
> **[4:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=240)** It calls for protection from malware and also outlines user awareness.
>
> **[4:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=245)** Even if you don't know all the technical terms here, you can see that the frameworks address similar concepts.
>
> **[4:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/mapping-the-controls-to-one-another?u=76281980&t=252)** As you can see in both incident response and antivirus, each of the control frameworks include the foundational controls needed to mature your information security program and secure your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Incident Response]] (10), [[NIST]] (2)
> **Env Vars:** pci (2), nist (2), iso (2), cis (1)
> **Versions:** 16.1 (1), 12.2 (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Resources available for mapping controls](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=0)** - [Instructor] The top four security frameworks cover many of the same security controls, as we saw by the simple control mappings we did in the previous chapter.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=10)** However, trying to map every control between the different frameworks would take quite a bit of time, right?
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=17)** What if I told you someone had already done that for you?
>
> **[0:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=21)** That's great news.
>
> **[0:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=23)** To assist organizations in mapping the controls between different frameworks, there are numerous tools available that provide free mappings.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=32)** One of the most comprehensive mapping tools is called the Secure Controls Framework, or SCF.
>
> **[0:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=39)** The Secure Controls Framework is a comprehensive catalog of controls that helps company build a relevant control set for their organization.
>
> **[0:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=49)** It is a free resource and includes some guidance for available tools as well.
>
> **[0:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=53)** It includes analysis from over 100 frameworks, and it allows you to build one control to address multiple requirements.
>
> **[1:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=61)** This meta framework attempts to build security and [[Privacy]] by design, which means it is part of the process, not an afterthought at the end.
>
> **[1:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=71)** There is also the CIS Benchmarks mapping tool called the CIS Controls Navigator, which maps controls from the CIS Controls to other frameworks such as [[NIST]] and ISO.
>
> **[1:23](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=83)** The mapping tool allows users to select a target framework, and then it maps the CIS Controls to that defined target.
>
> **[1:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=91)** The output is a report that shows the mapping, highlighting any gaps or areas where additional controls may be needed.
>
> **[1:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=99)** NIST has a tool called the NIST Control Mapping Tool which maps controls from NIST 800-53 to NIST's [[Cybersecurity]] framework, discussed in chapter one, which is a risk-based maturity model.
>
> **[1:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=113)** It is a solid tool to map the NIST functions of identify, protect, detect, respond, and recover to the different control families.
>
> **[2:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=123)** While this is useful within the NIST umbrella, it is missing the mapping to other major industry frameworks.
>
> **[2:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=130)** A few other tools that merit a quick mention here are the SIG, which maps its risk assessment domains to the ISO 27001 controls, and the control-mapping tool by ISACA, which maps controls from COBIT to the major frameworks as well as SOC 2.
>
> **[2:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/resources-available-for-mapping-controls?u=76281980&t=149)** Knowing that there are tools that can map the controls of different frameworks can save your organization lots of time by allowing you to compare the controls and even take a hybrid approach in choosing which controls are most relevant to your company's needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (7), [[Privacy]] (1), [[Cybersecurity]] (1)
> **Env Vars:** nist (7), cis (4), iso (2), scf (1), sig (1)
> **Definitions:** is a  (5), is called (1)
> **Cross-References:** as we saw (1), previous chapter (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Choosing a framework that is relevant to your business](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=0)** - Beginning to understand the different approaches each framework takes, will help an organization select the most appropriate controls for their specific business needs.
>
> **[0:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=10)** Let's outline some key decision points to help you decide.
>
> **[0:15](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=15)** First, do you have any regulatory or compliance requirements?
>
> **[0:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=21)** Next, what is your organization's risk management approach?
>
> **[0:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=26)** Does it need a risk management program as well?
>
> **[0:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=30)** Are there any industry specific requirements that apply to your organization?
>
> **[0:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=35)** What is the current status of your security controls and practices?
>
> **[0:40](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=40)** Depending on your current controls, you may want to try to align to a similar framework.
>
> **[0:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=46)** What resources and budget does your company have?
>
> **[0:49](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=49)** You may be looking for something comprehensive or more cost effective.
>
> **[0:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=54)** Finally, what are your organization's goals and objectives for its security program?
>
> **[1:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=60)** When deciding which security framework to use with these considerations in mind, it is important to consider the approach each framework takes.
>
> **[1:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=69)** Some frameworks focus on risk management, others focus on compliance to adhere to regulatory requirements, while yet others focus on identifying and mitigating the most common cyberthreats.
>
> **[1:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=82)** An important note, don't forget to consider other functions in your organization that may be impacted by implementing the controls.
>
> **[1:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=90)** There are controls for personnel background checks and acceptable use policies that HR will need to review.
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=97)** There are application-based controls for secure [[Software Development]] to run by engineering and product teams, and there are contingency planning components for disaster recovery that will need input from infrastructure and operations as well as facilities.
>
> **[1:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=115)** Take a look beyond the control summary to the specific control language to identify who your stakeholders may be.
>
> **[2:03](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=123)** Keep in mind that in choosing a framework, it would be impossible to account for every scenario, so choose a starting point and begin implementing, you can always iterate as you progress.
>
> **[2:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=136)** Each of the frameworks is direct in its approach, although the intent of each is a bit different.
>
> **[2:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=142)** But remember, they address the same foundational principles.
>
> **[2:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=146)** Find one that aligns with your business needs.
>
> **[2:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=149)** Once you have compared the different frameworks and selected one or a mixture of them that best aligns with your needs, it makes sense to then build out that knowledge and capability within the security team to help guide the organization.
>
> **[2:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/choosing-a-framework-that-is-relevant-to-your-business?u=76281980&t=164)** Now you are ready to begin building out a core security set, measures, and assurances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1)
> **Warnings:** important note (1), keep in mind (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - beginning (1)


### 4. The Core Security Set

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding control families and domains](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=0)** - Security frameworks share many foundational security components.
>
> **[0:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=5)** You don't necessarily have to choose one framework or the other although there will be some differences in their controls.
>
> **[0:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=12)** Therefore, you need to outline your own process by determining your core security set.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=20)** Much like ISO 27001, your core security set is where you can approach your controls like a menu; deciding which control families you are going to adopt within your organization.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=32)** First, you can choose high, medium, or low-level controls.
>
> **[0:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=38)** Then you can decide who will be the owners or stakeholders of those controls.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=44)** Next, you can choose to add many or a few controls under a given family.
>
> **[0:50](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=50)** Finally, you can choose to incorporate additional guidance under specific controls, and voila, you have a four-course meal; that is unless your organization is seeking certification such as ISO, PCI, or FedRAMP, in which case you will need to consider the specific requirements for each of those.
>
> **[1:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=73)** Security controls are safeguards or countermeasures to avoid, detect, counteract, or minimize security risks.
>
> **[1:22](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=82)** Common controls are security controls that can support multiple information systems efficiently and effectively as a common capability.
>
> **[1:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=92)** I highly recommend you choose those as your first priority.
>
> **[1:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=96)** Then you should review the results of your risk assessment; identifying the control families needed to cover your highest risk exposures.
>
> **[1:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=105)** Finally, gather feedback from your stakeholders.
>
> **[1:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=108)** What do they think is important to your security posture as a business?
>
> **[1:53](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=113)** This is an opportunity to create relationships with those people and discuss why security is important and how they think it should be approached based on their business processes.
>
> **[2:06](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=126)** Identify allies and help influence those that are unsure.
>
> **[2:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/understanding-control-families-and-domains?u=76281980&t=131)** Remember, you don't have to comprehensively do all the controls in a given control family at first, that will come with time, but identify your largest exposures and make sure to include those in your core security set.

> [!info]- Semantic Content
>
> **Env Vars:** iso (2), pci (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - security (1)

#### [The measures](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=0)** - [Narrator] A measure is a plan or course of action taken to achieve a particular purpose.
>
> **[0:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=7)** A security measure, specifically, is a precaution taken against threats such as theft, espionage, or sabotage.
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=17)** Once you have decided which control families to include in your core security set, you then have to outline how to measure success.
>
> **[0:25](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=25)** These measures can come from the frameworks you have chosen to leverage, looking at their controls and how they recommend measuring them.
>
> **[0:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=34)** Let me walk you through an example.
>
> **[0:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=36)** If I look at personnel security as a control family, I need to determine how I'll measure effective procedures for the personnel lifecycle, from hire through to separation.
>
> **[0:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=48)** There are countless measures you could implement.
>
> **[0:52](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=52)** You could require that all new hires complete a background check prior to beginning work, and document the process to ensure that all access is removed at the end of that individual's employment.
>
> **[1:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=64)** You might outline a process for employees who transfer departments, including management approvals and access reviews.
>
> **[1:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=71)** Finally, you might have a policy around the personnel sanctions when a policy is violated.
>
> **[1:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=77)** Knowing what actions an organization will take helps to prepare for those situations.
>
> **[1:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=84)** It's critical to make sure you have a way to measure success.
>
> **[1:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=88)** If you did a background check, is the goal to have 100% of employees that will complete them?
>
> **[1:35](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=95)** If you remove access at separation, is it within one business day or within 24 hours?
>
> **[1:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=102)** Knowing the answers to these questions will help you do successful measurement.
>
> **[1:47](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=107)** Your measurement should be quantifiable if possible, with a numeric way to determine if they have been completed.
>
> **[1:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=114)** If it isn't a number that grows or improves it could be a more simple binary number like one or zero, for a yes or no measure.
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-measures?u=76281980&t=124)** Ensuring you have a way to measure the effectiveness of your controls will help you be able to report on the security improvements you are making.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [narrator] (1)

#### [The assurances](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=0)** - [Narrator] Now that you have decided on your core security set and how to measure it, it is time to prove that you have done what you said you would do.
>
> **[0:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=11)** An assurance is a positive declaration intended to give confidence.
>
> **[0:16](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=16)** Evidence is anything presented in support of an assertion.
>
> **[0:20](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=20)** It is the available body of facts indicating whether a proposition is valid.
>
> **[0:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=26)** If I'm implementing [[Configuration Management]], I'd need to determine how to prove I have executed on the measures I outlined for the controls.
>
> **[0:36](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=36)** Evidence is a great way to provide assurance.
>
> **[0:39](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=39)** If you have to measure for baseline configurations, the evidence could be a documented baseline that aligns to the CIS benchmarks, or if you have a measure for configuration change control, the evidence might be documented change tickets that show an approval process and segregation of duties.
>
> **[0:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=59)** Finally, if you have a measure for periodic review of least functionality, the proof might be a service desk ticket showing a summary of a review meeting and any findings as well as their mitigations.
>
> **[1:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=74)** Providing evidence for each measure demonstrates reliability to stakeholders, leadership, and for some organizations, the auditor during an assessment or an audit.
>
> **[1:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=86)** The ability to show a delineated story from core security set controls onto measures, to assurances, provides confidence a security organization is running in a standard, measurable and repeatable fashion.
>
> **[1:42](https://www.linkedin.com/learning/security-frameworks-fundamentals/the-assurances?u=76281980&t=102)** Well done, onward and upward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Configuration Management]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** cis (1)
> **Speakers:** - [narrator] (1)

#### [Enabling technologies](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=0)** - [Instructor] Although there are a lot of commonalities to map across frameworks, there are still a lot of controls.
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=9)** Tracking and measuring these controls can be difficult through a spreadsheet, and spreadsheets don't have out-of-the-box reports to share with business leaders.
>
> **[0:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=18)** This is where a governance risk and compliance tool, or GRC tool, can help ease some of the burden.
>
> **[0:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=26)** GRC solutions are intended to manage IT and security risks while reducing the complexity that often comes with compliance.
>
> **[0:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=34)** Being able to correlate information with the context or organizational business processes can improve meaningful reporting.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=44)** There are a multitude of GRC vendors to choose from.
>
> **[0:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=48)** They span the spectrum from lightweight basic tools, to mid-range foundational tools, to high-end comprehensive tools.
>
> **[0:58](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=58)** Selecting the right vendors depends on the capabilities you have within your IT and security departments, as well as your organization's ability to map your processes to the control.
>
> **[1:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=68)** And let's not forget about your budget.
>
> **[1:11](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=71)** Let's talk about some items to consider.
>
> **[1:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=74)** Will the tool support the way I do business?
>
> **[1:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=77)** How easy is implementation, such as, is it outta-the-box ready, or is it highly configurable and will require professional services?
>
> **[1:26](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=86)** How easy is it to maintain, and how hard to change workflows as my business processes evolve?
>
> **[1:33](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=93)** Does the vendor's customer service receive consistently high scores?
>
> **[1:37](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=97)** How does the vendor manage upgrades and releases?
>
> **[1:41](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=101)** Do they stay current and do they have secure code development practices?
>
> **[1:45](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=105)** In that vein, does the vendor stay up-to-date with changes to the most popular frameworks?
>
> **[1:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=111)** This should be a non-negotiable component for any tool that claims to be a GRC tool.
>
> **[1:57](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=117)** Is my own staff capable of learning and administering the tool, or does it require specialized knowledge?
>
> **[2:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=124)** I always say people, process and technology in that order.
>
> **[2:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=130)** However, in the case of a GRC tool, this technology can actually assist you in making your people and processes better.
>
> **[2:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=138)** You will still need to ensure you have the right people capabilities and that you ensure you have quality processes to ensure that the technology is enabling your business.
>
> **[2:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/enabling-technologies?u=76281980&t=149)** Good luck on your search.

> [!info]- Semantic Content
>
> **Env Vars:** grc (5)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Security mindset](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=0)** - Being security minded is not a one and done-type project.
>
> **[0:04](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=4)** It is an ongoing journey that requires a security mindset to be successful, but it doesn't have to be hard.
>
> **[0:12](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=12)** As they say, how do you eat an elephant?
>
> **[0:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=14)** One bite at a time.
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=17)** Remember back when we started talking about security frameworks and I suggested you pause and take a note about your business needs?
>
> **[0:24](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=24)** Pull that notepad out as we think about this.
>
> **[0:29](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=29)** First, pick a control family to focus on.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=32)** I recommend you begin with your organization's largest exposure risk area, or if that feels overly complex, choose something simple or low-hanging fruit so that you can show a few quick wins and demonstrate that security can be approachable for your business.
>
> **[0:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=48)** Remember, your intent is not to have perfect security but to raise the bar high enough to make your organization an unattractive target to adversaries, which means making it too hard for an attack to be worth it.
>
> **[1:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=61)** Next, define three measures and do them.
>
> **[1:05](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=65)** Each control family will have many recommendations under them to choose.
>
> **[1:10](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=70)** Find three that you can begin to build capability and reliability with.
>
> **[1:14](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=74)** For example, if you choose [[Incident Response]], you can create a lightweight plan to respond to security events, or you could create a mechanism such as an email distribution list to report and then do a quick lunch and learn training for your employees.
>
> **[1:30](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=90)** People love to gather, especially if you include team.
>
> **[1:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=94)** Then measure the impact and gather feedback.
>
> **[1:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=98)** See how you can iterate on your incident response plan or measure how many events month over month you are receiving.
>
> **[1:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=106)** Perhaps you can add a template to give users a format to respond to outlining the information they need to provide.
>
> **[1:54](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=114)** Last step, repeat.
>
> **[1:56](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=116)** Pick three more and start again.
>
> **[1:59](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=119)** Rinse, repeat, rinse, repeat, and after a few cycles, you'll be on your way to mature security posture.
>
> **[2:08](https://www.linkedin.com/learning/security-frameworks-fundamentals/security-mindset?u=76281980&t=128)** Ta-da!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Incident Response]] (2)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (1), such as (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - being (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [How to get started](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=0)** - [Mandy] Who knew there were so many resources to help you identify a security framework for your organization.
>
> **[0:07](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=7)** You did it!
>
> **[0:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=9)** We have spent time reviewing major frameworks, domain specific and regulatory ones.
>
> **[0:17](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=17)** We looked at four of the primary frameworks and learned how to map them and what the next level down meant for your security program.
>
> **[0:27](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=27)** We've only scratched the surface of what security frameworks can do for your organization.
>
> **[0:32](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=32)** I encourage you to learn more about security controls by watching [[LinkedIn]] courses on [[Privacy]], [[OWASP]], Mitre, [[NIST]] and ISO to name just a few.
>
> **[0:44](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=44)** All of these courses can help you on your road to a mature security posture.
>
> **[0:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=48)** You've spent time with me today.
>
> **[0:51](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=51)** Why not put a calendar reminder to do another course next week?
>
> **[0:55](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=55)** If your organization does not use a security framework, consider adopting one.
>
> **[1:01](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=61)** Using the principles we described in this course, you can go back to your organization today and do these four things.
>
> **[1:09](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=69)** Number one, determine what frameworks are applicable to your company.
>
> **[1:13](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=73)** Next, consider privacy and regulatory needs.
>
> **[1:18](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=78)** Third, choose a framework.
>
> **[1:21](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=81)** And finally, start implementing control families based on your organization's risk profile.
>
> **[1:28](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=88)** Don't forget about measures and assurances.
>
> **[1:31](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=91)** Security is a constant effort.
>
> **[1:34](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=94)** It's not just a project, it's a journey.
>
> **[1:38](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=98)** Use the tools at your disposal to navigate the road towards security mindedness.
>
> **[1:43](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=103)** You're going to rock it.
>
> **[1:46](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=106)** Again, my name is Mandy Huth.
>
> **[1:48](https://www.linkedin.com/learning/security-frameworks-fundamentals/how-to-get-started?u=76281980&t=108)** Thank you for spending time with me learning security frameworks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[LinkedIn]] (1), [[OWASP]] (1), [[NIST]] (1)
> **Env Vars:** owasp (1), nist (1), iso (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [mandy] (1)


## Instructor

- [[Mandy Huth]]

## Skills Covered

- Risk Frameworks
- Governance, Risk Management, and Compliance (GRC)

## Path Context

### In [[Cybersecurity Fundamentals]]
← [[Cybersecurity Foundations- Security Architecture]] | **6 of 12** | [[IT Security Foundations- Operating System Security]] →

## Appears In

- [[Cybersecurity Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[AI in Action- Global Case Studies from Public Institutions]] — Governance,  Risk Management,  and Compliance (GRC)
- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Governance,  Risk Management,  and Compliance (GRC)
- [[Microsoft Security Essentials Concepts Solutions And Ai Powered Protection]] — Governance,  Risk Management,  and Compliance (GRC)
- [[Cybersecurity for Executives]] — Governance,  Risk Management,  and Compliance (GRC)
- [[Building a Privacy Program in the Age of GenAI]] — Governance,  Risk Management,  and Compliance (GRC)

---

[↑ Back to top](#)