---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: static-application-security-testing
url: "https://www.linkedin.com/learning/static-application-security-testing"
duration_minutes: 220
duration: 3h 40m
level: Intermediate
updated: 5/8/2023
learners: 19065
skills:
  - Software Development
  - Security Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHrzuHza_4cSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683244233790?e=2147483647&amp;v=beta&amp;t=ehl91Xm-3nQHiP6TLg6CldF4CQdb2jrAe-ZEEBH_yak"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
prev_courses:
  - '[[Dynamic Application Security Testing]]'
next_courses:
  - '[[Soft Skills for Information Security Professionals]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":6,"total":7,"prev":"Dynamic Application Security Testing","next":"Soft Skills for Information Security Professionals"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/software-development
  - skill/security-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Static%20Application%20Security%20Testing.md)

![Static Application Security Testing](https://media.licdn.com/dms/image/v2/D560DAQHrzuHza_4cSA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683244233790?e=2147483647&amp;v=beta&amp;t=ehl91Xm-3nQHiP6TLg6CldF4CQdb2jrAe-ZEEBH_yak)

# Static Application Security Testing

> Building security testing into the software development life cycle is the best way to protect your app and your end users. This course identifies tools and techniques that developers can use to minimize the cost and impact of security testing—while maximizing its impact and effectiveness. In this course, instructor Jerod Brennen focuses on offline testing activities: preparing test plans, policies

> [LinkedIn Learning](https://www.linkedin.com/learning/static-application-security-testing) | 3h 40m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The importance of static testing](#the-importance-of-static-testing)
  - [What you should know](#what-you-should-know)
- [**1. Leading Practices**](#1-leading-practices) (10 videos)
  - [Security in the SDLC](#security-in-the-sdlc)
  - [Development methodologies](#development-methodologies)
  - [Programming languages](#programming-languages)
  - [Security frameworks](#security-frameworks)
  - [The OWASP Top 10](#the-owasp-top-10)
  - [Other notable projects](#other-notable-projects)
  - [Top 25 software errors](#top-25-software-errors)
  - [BSIMM](#bsimm)
  - [Building your test lab](#building-your-test-lab)
  - [Preparing your checklist](#preparing-your-checklist)
- [**2. Security Documentation**](#2-security-documentation) (7 videos)
  - [Internal project plans](#internal-project-plans)
  - [Communication planning](#communication-planning)
  - [Change control policy](#change-control-policy)
  - [Security incident response policy](#security-incident-response-policy)
  - [Logging and monitoring policy](#logging-and-monitoring-policy)
  - [Third-party agreements](#third-party-agreements)
  - [OWASP ASVS](#owasp-asvs)
- [**3. Source Code Security Reviews**](#3-source-code-security-reviews) (9 videos)
  - [Challenges of assessing source code](#challenges-of-assessing-source-code)
  - [OWASP Code Review Guide](#owasp-code-review-guide)
  - [Static code analysis](#static-code-analysis)
  - [Code review models](#code-review-models)
  - [Application threat modeling: STRIDE](#application-threat-modeling-stride)
  - [Application threat modeling: DREAD](#application-threat-modeling-dread)
  - [Code review metrics](#code-review-metrics)
  - [Demo: Codacy](#demo-codacy)
  - [Demo: SonarQube](#demo-sonarqube)
- [**4. Static Testing for the OWASP Top 10 (2021)**](#4-static-testing-for-the-owasp-top-10-2021) (11 videos)
  - [The OWASP Top 10](#the-owasp-top-10)
  - [A1: Broken access controls](#a1-broken-access-controls)
  - [A2: Cryptographic failures](#a2-cryptographic-failures)
  - [A3: Injection](#a3-injection)
  - [A4: Insecure design](#a4-insecure-design)
  - [A5: Security misconfiguration](#a5-security-misconfiguration)
  - [A6: Vulnerable and outdated components](#a6-vulnerable-and-outdated-components)
  - [A7: Identification and authentication failures](#a7-identification-and-authentication-failures)
  - [A8: Software and data integrity failures](#a8-software-and-data-integrity-failures)
  - [A9: Security logging and monitoring failures](#a9-security-logging-and-monitoring-failures)
  - [A10: Server-Side Request Forgery](#a10-server-side-request-forgery)
- [**Conclusion**](#conclusion) (1 videos)
  - [Static application security testing next steps](#static-application-security-testing-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of static testing](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=0)** - When testing web applications for potential security vulnerabilities, those tests fall into two overarching categories, static tests and dynamic tests.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=11)** As a security professional, it's going to fall to you to select the right testing methodology and the right testing tools to perform security tests without interacting with deployed instances of in scope applications.
>
> **[0:25](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=25)** Hi, I'm Jerod Brennen and welcome to Static [[Application Security]] Testing.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=30)** I put this course together to help you learn the skills and the tools that you'll need in order to test information security controls in these applications without touching the deployed applications themselves.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=43)** And I want to share what I've learned over the years to help you begin applying that same knowledge today.
>
> **[0:48](https://www.linkedin.com/learning/static-application-security-testing/the-importance-of-static-testing?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)

#### [What you should know](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] I hope you're excited about this topic as I am.
>
> **[0:03](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=3)** This course is intended to be a broad introduction to static [[Application Security]] testing, and we're going to cover a lot of ideas, equipping you with the knowledge of both [[Manual Testing]] techniques and of tools that you can use to automate your testing efforts.
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=21)** If you've taken any of my other [[LinkedIn]] learning courses, chances are you've heard me say something along the lines of fundamentals will win the day.
>
> **[0:31](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=31)** Why? Because it's absolutely true.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=35)** If you don't get the basics right before you try to tackle more complicated security tasks, you're going to be building your house on an unsteady foundation.
>
> **[0:45](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=45)** When you've got a good handle on what you need to do, the next step is to learn how to do it.
>
> **[0:52](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=52)** As we cover these fundamentals throughout the course, we're going to be putting together a toolkit that you can use both during the course and in your day-to-day activities.
>
> **[1:02](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=62)** Normally, I prefer doing all my training and testing using a small collection of [[Virtual Machines]].
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=68)** I would encourage you to do the same following along with the demos in your own home lab environment.
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=74)** This course, however, is an exception to that rule.
>
> **[1:18](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=78)** All of the static testing tools that we'll be covering in this course have cloud offerings that are free for open source projects.
>
> **[1:26](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=86)** I want you to be able to apply this knowledge as quickly and easily as possible, so we'll be using those [[Cloud Services]] to help accelerate your learning.
>
> **[1:35](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=95)** That said, I'll be showing you enough information about on-premise alternatives that you could dig in deeper if you'd like once we finish this course.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=105)** The two tools that we'll focus on here are Codacy and SonarQube, although I'll be introducing other tools and resources along the way.
>
> **[1:55](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=115)** Both of these tools treat security as a function of quality, language which should definitely resonate with developers.
>
> **[2:04](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=124)** The more on that later.
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=126)** When the time comes that you're ready to try your hand at one or more of the demos, you can always jump right to that video and follow along.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=133)** In addition to learning the tools, we're going to cover everything from leading practices, to reviewing security documentation, to performing source code security reviews, to conducting specific static application security tests using the [[OWASP]] Top 10 as your source.
>
> **[2:33](https://www.linkedin.com/learning/static-application-security-testing/what-you-should-know?u=76281980&t=153)** I've also provided a handout with this course if you'd like to do more testing on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (2), [[Manual Testing]] (1), [[LinkedIn]] (1), [[Virtual Machines]] (1), [[Cloud Services]] (1)
> **Env Vars:** owasp (1)
> **Exercise Files:** source code (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Leading Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Security in the SDLC](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=0)** - [Instructor] In order to determine where and how to integrate your AppSec Testing activities, you need to think in terms of the [[Software Development]] lifecycle, or SDLC.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=11)** The SDLC is a big picture concept that you break down into three discrete activities.
>
> **[0:18](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=18)** Conceptualize your application, what do you want it to do?
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=22)** Develop the application, write the actual code, and release the application to the intended user population.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=30)** So let's consider the SDLC from a developer's point of view for a second.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=35)** Where exactly does security fit in?
>
> **[0:39](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=39)** In order to answer that question the best advice I can give you is something I picked up in Stephen Covey's book, "The 7 Habits of Highly Effective People", Seek first to understand, then to be understood.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=53)** Developers have a lot of competing priorities.
>
> **[0:57](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=57)** Imagine someone approaches you and says, "Hey, I need you to build me this thing.
>
> **[1:02](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=62)** I'm not exactly sure what it should look like, but I'll know it when I see it.
>
> **[1:06](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=66)** Here's a list of loosely defined features.
>
> **[1:09](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=69)** You don't have a lot of time or money to get this done, and I needed this done two weeks ago.
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=74)** Can you have it to me by Friday?"
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=77)** Now, imagine that person walks away and someone else immediately steps in and says, "Oh, yeah.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=83)** Can you make sure that thing that you build is secure?"
>
> **[1:27](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=87)** Stressful, right?
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=89)** You can help your developers understand how to integrate [[Security Testing]] into an already overwhelming development process if you break that security down into manageable chunks.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=101)** Think of that big nebulous thing that we call security as four distinct security touchpoints within the SDLC.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=110)** Review the related documentation for security language including contracts with third parties who are writing apps on your behalf.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=118)** Review the source code for security vulnerabilities.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=122)** Review the QA process to ensure that it includes security tests, and review the deployed applications for exploitable weaknesses.
>
> **[2:12](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=132)** Static testing focuses on the first two touchpoints in this list while bleeding a little bit into the third.
>
> **[2:20](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=140)** It's best to start with static testing for a few reasons.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=144)** First, it's much less expensive to address security issues before you deploy an application to production.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=152)** Second, security built-in at the beginning is often more effective than security bolted-on after the fact.
>
> **[2:40](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=160)** And third, static testing doesn't come with the risk of breaking a production application.
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=166)** These are all low-impact, high-value activities.
>
> **[2:51](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=171)** The key to building effective static test is balance.
>
> **[2:55](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=175)** Take time to understand the development process from the developer's point of view.
>
> **[3:00](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=180)** Analyze the market conditions that might impact your testing.
>
> **[3:04](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=184)** Things like accelerating schedules to release a competing application, or outsource development and hosting to keep internal costs down.
>
> **[3:14](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=194)** Take a look at the skills of both the developers and the security testers.
>
> **[3:19](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=199)** Figure out everyone's strengths and weaknesses.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=202)** Don't make assumptions about what your teams can do.
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=206)** Be mindful of all these things when designing your tests.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=210)** Find the right balance among them and your testing efforts are much more likely to yield positive results.
>
> **[3:37](https://www.linkedin.com/learning/static-application-security-testing/security-in-the-sdlc?u=76281980&t=217)** This approach will enable you to integrate security testing more effectively into the SDLC, reducing both the likelihood and the impact of potential security issues later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (2), [[Software Development]] (1)
> **Env Vars:** sdlc (5)
> **CLI Commands:** make (2), find (1)
> **Analogies:** imagine (2), picture (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Development methodologies](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=0)** - [Instructor] It's important that you understand the [[Application Development]] methodologies in play before you begin performing your static [[Application Security]] test.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=9)** Why is that?
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=11)** Application development methodologies are the frameworks that we use to plan how we're going to build and deploy applications.
>
> **[0:19](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=19)** While a developer might just sit down at their laptop and start writing code in an inspired frenzy, that approach doesn't work for large-scale teams where careful orchestration is critical to their success.
>
> **[0:34](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=34)** Developers are a creative bunch, and it should come as no surprise that they have multiple frameworks for designing and creating applications.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=43)** Determining the right development methodology for an organization depends on a number of factors, things like [[Organizational Culture]] and developer personal preference.
>
> **[0:54](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=54)** Good thing you spent time seeking to understand their point of view, isn't it?
>
> **[0:58](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=58)** I know of over a dozen different application development methodologies, but let's focus on four of the most popular, Waterfall, [[Agile Development|Agile]], Rapid, and [[DevOps]].
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=72)** The Waterfall methodology gained notoriety when the U.S. Department of Defense normalized that methodology in the mid 1980s.
>
> **[1:21](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=81)** Teams who follow the Waterfall methodology break the work down into phases that flow from one into the next.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=88)** Requirements, design, implementation, testing, integration, deployment, and maintenance.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=97)** Building security into this methodology is pretty straightforward.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=101)** Make sure security requirements are embedded in each phase and include checks between the phases to ensure that those security requirements were met.
>
> **[1:51](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=111)** Think of Agile as anti-Waterfall.
>
> **[1:55](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=115)** When the "Agile Manifesto" was published in 2001, it set forth four key values: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.
>
> **[2:20](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=140)** Instead of working in rigid phases, developers select an item from the backlog, they work together to create that item, and then they continue iterating and [[Prototyping]] until they get it right.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=152)** It's a lot tougher for security teams to test at the end of each phase when phases don't even really exist in Agile.
>
> **[2:42](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=162)** The Rapid application methodology sits somewhere between Waterfall and Agile.
>
> **[2:47](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=167)** Rapid relies on the same prototyping approach as Agile, but it relies on [[Data Modeling]] and business process modeling on the front end to determine the requirements for those prototypes.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=179)** Once the right models are in place, then the iterative development process can begin.
>
> **[3:05](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=185)** This approach can feel messy to people who are familiar with the Waterfall methodology, but like Agile, Rapid application development is a much faster and more flexible approach.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=198)** Without the rigid phases, it's more difficult to integrate [[Security Testing]] into this methodology.
>
> **[3:25](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=205)** You'll have more luck, though, focusing on things like code security reviews than you will in focusing on security documentation.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=214)** DevOps is a cross-functional approach that brings the development team and the IT operations team to the same table.
>
> **[3:42](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=222)** This methodology continues to gain traction, although the industry and academia don't formally agree on the definition.
>
> **[3:51](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=231)** DevOps focuses on ensuring that all the right teams are involved in development and deployment activities.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=237)** The goal is to continue to move quickly, not only during development, but also during the inevitable changes and fixes that take place over the lifetime of a deployed application.
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=249)** When the term DevOps was first coined in 2009, it was more widely publicized in the popular IT novel, "The Phoenix Project."
>
> **[4:19](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=259)** There's even a subset of DevOps practitioners who focus on [[DevSecOps]], an approach to DevOps where the security team is included in those conversations as well.
>
> **[4:30](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=270)** While the four methodologies we just discussed are widely used by developers around the world, there are several other methodologies that you may encounter.
>
> **[4:39](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=279)** I've included a list here of methodologies you might want to keep in the back of your mind, just in case you happen across a team using one of them in the wild.
>
> **[4:48](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=288)** Some of these methodologies can be considered variants of the methodologies I just described.
>
> **[4:54](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=294)** Extreme programming and [[Scrum]], for example, they're variants of Agile.
>
> **[5:00](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=300)** The most important takeaway, however, is that it's likely you'll encounter teams using different application development methodologies.
>
> **[5:08](https://www.linkedin.com/learning/static-application-security-testing/development-methodologies?u=76281980&t=308)** It's up to you to figure out how they develop applications so that you can help them figure out how to integrate security into their processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (8), [[DevOps]] (6), [[Application Development]] (5), [[Prototyping]] (2), [[Application Security]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Programming languages](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=0)** - [Narrator] Just like developers have a variety of development methodologies, they have a variety of programming languages they can turn to as well.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=9)** It reminds me of the Rosetta Stone, that find that fascinated both historians and linguists, for centuries.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=17)** The stone contained the exact same message, carved in three different ancient languages.
>
> **[0:24](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=24)** Fast forward around 200 years, swap out that stone for computer screens, and increase the number of possible languages from three to hundreds, if not thousands.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=35)** Now we're talking.
>
> **[0:37](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=37)** Why is this information important for static [[Application Security]] testing?
>
> **[0:42](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=42)** Because you're going to need to perform source code security reviews of applications written in those different languages, and different languages require different testing tools.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=53)** You don't have to be an expert in every programming language, in order to secure them, though.
>
> **[1:00](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=60)** Start with the most popular ones.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=63)** Chances are, those are the ones that you'll bump into anyway.
>
> **[1:06](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=66)** Stick with the 80/20 rule.
>
> **[1:09](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=69)** If the rule holds, 80% of the code you review will be written in 20% of the languages you encounter in the field.
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=77)** The trick is figuring out which languages are likely to comprise that 20%.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=83)** Fortunately, [[GitHub]] has already done the math for you.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=88)** GitHub is the largest online community of developers in the world, and they publish a list of the most popular programming languages each year, in their annual State of the Octoverse report.
>
> **[1:40](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=100)** Here's the list of the most popular programming languages from their latest report.
>
> **[1:46](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=106)** This list isn't based on guesswork.
>
> **[1:48](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=108)** It's based on cold, hard numbers, generated from the millions and millions of lines of code uploaded to their platform.
>
> **[1:57](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=117)** GitHub is a terrific resource for developer collaboration.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=122)** It's also a great place for you to find open source code that you can use, when practicing your [[Security Testing]] techniques.
>
> **[2:10](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=130)** You can check out GitHub at [github.com](https://github.com).
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=133)** And if you don't already have a GitHub account, I recommend that you create one today.
>
> **[2:18](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=138)** If you'd like to see the State of the Octoverse for yourself, it's available at octoverse.[github.com](https://github.com).
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=146)** As you're digging into the programming languages that you'll be testing, make sure you understand the distinctions between different languages.
>
> **[2:34](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=154)** There's no quicker way to mess up all of your tests while losing all credibility with developers, than confusing one language for another.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=163)** Don't believe me?
>
> **[2:45](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=165)** Ask a [[Java]] developer for a copy of their [[JavaScript]] source code.
>
> **[2:50](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=170)** I'm kidding. Don't do that.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=172)** I don't want them throwing their keyboards at you and screaming things that they'll be embarrassed about later.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=178)** It also helps to understand the evolution of programming languages by generation.
>
> **[3:03](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=183)** Earlier generations were designed to speak directly to the underlying [[Hardware]].
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=188)** With each subsequent generation, the code has become easier to read and easier to create.
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/programming-languages?u=76281980&t=196)** It can be a lot to take in, but it's key that you develop your own familiarity with the programming languages you'll be testing, before you dive into your testing activities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[Application Security]] (1), [[Security Testing]] (1), [[Java]] (1), [[JavaScript]] (1)
> **Tools:** github (7)
> **CLI Commands:** find (2), make (1)
> **Exercise Files:** source code (3)
> **URLs:** [github.com](https://github.com) (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### [Security frameworks](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=0)** - [Narrator] Sir Isaac Newton said it best.
>
> **[0:03](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=3)** "If I have seen further, it is by standing on the shoulders of giants."
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=9)** So much of the [[Security Testing]] knowledge that we rely on today was pioneered by those who came before us, people who recognize the risks inherent in relying on technology, especially when someone with malicious intent could make that technology act in a way that its creators never intended.
>
> **[0:28](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=28)** Security frameworks are excellent examples of that accumulated knowledge put to paper.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=35)** Static [[Application Security]] testing happens where development methodologies and security methodologies intersect.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=43)** Developers and security professionals both want the same thing.
>
> **[0:47](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=47)** We want applications to do what they were intended to do, but developers approach this from a functional standpoint.
>
> **[0:55](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=55)** Can we make the application do a thing?
>
> **[0:58](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=58)** Security professionals approach this from a defensive standpoint.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=63)** Can we prevent bad actors from interfering with the application while it does its thing?
>
> **[1:10](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=70)** When we identify where those two goals intersect, that's where we can be the most effective.
>
> **[1:16](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=76)** The best part is that nearly every security framework already includes application security requirements.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=83)** That means you don't have to start building your static application security test from scratch.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=88)** You can turn to these frameworks to determine where it makes the most sense for you to start testing.
>
> **[1:35](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=95)** While there are quite a few security frameworks to choose from, I recommend that you start with four of the most popular: the ISO/IEC 27000 series, the [[NIST]] [[Cybersecurity]] Framework Control, Control Objectives for IT or COBIT, and the CIS, Critical Security Controls.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=116)** The ISO/IEC 27000 series is actually a collection of over a dozen related standards from the International Organization for Standardization.
>
> **[2:07](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=127)** This series is designed to help you build a fairly robust [[Information Security Management]] system or ISMS.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=136)** When you mention ISO to a security professional, chances are that person's going to think of the 27001 standard.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=144)** Truth be told though, it's 27002 that I've always found the most useful.
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=151)** The 2022 edition of the 27002 standard contains 93 specific controls and these controls are divided into four groupings: organizational, people, physical, and technological.
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=168)** The NIST Cybersecurity Framework draws on multiple special publications from the US National Institute of Standards and Technology in order to provide an all-encompassing approach to cybersecurity and risk management.
>
> **[3:04](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=184)** Similar to ISO/IEC 27002, NIST has documented 108 unique security controls and then group those controls based on the function they serve: identify, protect, detect, respond, and recover.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=202)** COBIT, or the framework formally known as Control Objectives for IT, comes from the ISACA organization.
>
> **[3:31](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=211)** COBIT was designed with the broader topic of [[IT Governance]] in mind.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=216)** COBIT includes a handful of application security controls showing how those controls relate to other IT controls.
>
> **[3:44](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=224)** And finally, I recommend you take a look at the critical security controls from the Center for Internet Security.
>
> **[3:52](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=232)** The CIS supplies the maturity model when selecting controls, choosing those controls that are right for your organization based on resource availability and cybersecurity expertise.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=245)** The most interesting aspect of the Critical Security Controls is that the CIS prioritizes their controls, while other frameworks rely on organizations to choose control priority based on each organization's unique risk appetite.
>
> **[4:21](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=261)** You'll find tremendous value in reviewing these four frameworks in detail, focusing on the guidance that each one provides regarding application security.
>
> **[4:32](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=272)** But we haven't even touched on compliance standards yet.
>
> **[4:36](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=276)** Where security frameworks contain recommended guidance based on best practices, compliance standards contain specific rules that organizations have to follow in certain areas.
>
> **[4:49](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=289)** Failure to meet compliance standards can result in hefty financial penalties.
>
> **[4:54](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=294)** Publicly traded companies in the United States must comply with Sarbanes-Oxley, while financial services organizations must meet the requirements laid out in the Gramm-Leach-Bliley Act.
>
> **[5:07](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=307)** Healthcare organizations in the US are expected to protect healthcare information in accordance with the Health Insurance Portability and [[Accountability]] Act, and any organization that processes credit card information needs to know their obligations to the [[PCI DSS|Payment Card Industry Data Security Standard]].
>
> **[5:27](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=327)** Regarding [[Privacy]], the EU's General Data Protection Regulation, the US California Consumer Privacy Act, and Canada's Personal Information Protection and Electronic Documents Act all have a lot to say about protecting consumer and citizen information.
>
> **[5:47](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=347)** When it comes to compliance, this list is far from complete.
>
> **[5:52](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=352)** It does, however, give you a starting point for other resources you can turn to for guidance on relevant application security controls.
>
> **[6:02](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=362)** In other words, there's no shortage of guidance from security standards, regulations, and frameworks on what you should be testing when it comes to application security.
>
> **[6:13](https://www.linkedin.com/learning/static-application-security-testing/security-frameworks?u=76281980&t=373)** You should use these resources to build your foundation and then turn to [[OWASP]] for more specific tactical guidance on how to execute your tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (7), [[Cybersecurity]] (4), [[NIST]] (3), [[Privacy]] (2), [[Security Testing]] (1)
> **Env Vars:** iso (4), cobit (4), iec (3), nist (3), cis (3)
> **CLI Commands:** make (2), find (1)
> **Definitions:** in other words (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [The OWASP Top 10](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=0)** - [Narrator] [[OWASP]] is one of the most prolific influential organizations, when it comes to securing web applications.
>
> **[0:08](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=8)** The acronym stands for Open [[Web Application Security]] Project.
>
> **[0:12](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=12)** The OWASP Foundation is a not-for-profit organization dedicated to helping developers and security professionals around the world better understand how to secure applications.
>
> **[0:24](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=24)** In the two decades that OWASP has been around, the organization has published a staggering number of [[Application Security]] resources.
>
> **[0:34](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=34)** OWASP groups related resources in projects and they have three distinct project categories.
>
> **[0:41](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=41)** Flagship projects are the most mature, most strategic resources that OWASP has to offer.
>
> **[0:47](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=47)** Production projects is a relatively new project level.
>
> **[0:52](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=52)** This designation is reserved for production ready projects, although the list is still being developed.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=59)** Other projects are useful, but they're not quite ready for primetime.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=63)** This list includes projects that were formerly labeled as lab or incubator projects.
>
> **[1:10](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=70)** They include specific tools or documentation resources that have found a large population of interested users.
>
> **[1:18](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=78)** They also include playground projects where forward thinkers can test out new ideas and hopefully produce something that will ultimately be promoted to either production or flagship status.
>
> **[1:31](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=91)** The most well known flagship project from OWASP is the Top 10 Project.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=97)** The Top 10 represents a rotating list of the most critical web application security risks.
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=104)** OWASP published the very first Top 10 list back in 2003.
>
> **[1:49](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=109)** The following year, they locked in an official version controlled list that they committed to updating every three years going forward.
>
> **[1:59](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=119)** When the review cycle comes up, OWASP assembles a committee of professionals to evaluate the Top 10 against the current threat landscape.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=128)** They then update the list accordingly.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=131)** The best part is that their current Top 10 white paper is always freely available for anyone to download.
>
> **[2:18](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=138)** Although the Top 10 list itself is brief, the white paper contains a tremendous amount of guidance on why these risks are important and on what to do to identify and remediate the related vulnerabilities.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=152)** The Top 10 white paper also includes guidance on threat agents, the attack vectors they may try to exploit security weaknesses, the controls you can implement to mitigate these risks, and the potential technical and business impacts if those attacks are successful.
>
> **[2:50](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=170)** This [[Threat Modeling]] is one of the most crucial elements to come out of the Top 10.
>
> **[2:55](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=175)** It helps translate these risks from academic exercises to real world scenarios.
>
> **[3:02](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=182)** I wanted to introduce you to both OWASP and the Top 10 list now, so that you can continue to build out your application security testing knowledge.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10?u=76281980&t=191)** Later in the course, you're going to learn how to perform static testing for every item in the Top 10 list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (9), [[Web Application Security]] (2), [[Application Security]] (2), [[Threat Modeling]] (1)
> **Env Vars:** owasp (9)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [Other notable projects](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=0)** - [Instructor] Well, [[OWASP]] is best known for their top 10 list.
>
> **[0:04](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=4)** That particular project is just the tip of the iceberg.
>
> **[0:08](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=8)** OWASP has a lot more to offer [[Application Security]] testing professionals.
>
> **[0:13](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=13)** Let's take a look at a few other notable OWASP projects.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=17)** The OWASP Web [[Security Testing]] Guide is a 200 plus page PDF that provides extensive guidance on security tests that you should be performing.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=29)** It also includes instructions on the tools and techniques that you can use to execute those tests.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=36)** The guide groups these tests into 11 separate categories with just over 100 individual tests altogether.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=44)** When I perform [[Application Security Assessments]], I use this guide to help me build a basic security profile of the application.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=53)** After I complete these tests, I've got a great idea of where I could focus my [[Penetration Testing]] activities.
>
> **[1:01](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=61)** This guide is without a doubt, one of the most important tools you can add to your testing toolkit.
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=68)** When you ask your developers to perform a code security review, you're likely to get the response.
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=74)** "How exactly do we perform a code security review?"
>
> **[1:19](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=79)** That's where the OWASP [[Code Review]] Guide project comes in.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=84)** The code review guide contains 220 pages of guidance on why code security reviews are important and what to look for when performing a review.
>
> **[1:34](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=94)** The guide even includes specific code examples from each of the risks listed in the OWASP top 10.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=101)** Although the code review guide is classified as another project, the amount of knowledge contained within the guide is incredible.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=110)** ZAP, Short for Zed Attack Proxy is a combination web application proxy, web vulnerability scanner.
>
> **[1:59](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=119)** You can use ZAP to capture and manipulate requests between your testing machine and the application server.
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=126)** This is a great way to test whether your backend security controls are up to the task.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=133)** The automated vulnerability scanner baked into ZAP might not be as in depth as some of the commercial scanners available, but a vulnerability uncovered by ZAP is definitely a vulnerability you want to address.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=146)** The OWTF short for Offensive Web Testing Framework was designed to help penetration testers automate many of their [[Web Application Security]] tests.
>
> **[2:38](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=158)** OWTF combines information from the OWASP Testing Guide with guidance from the penetration testing execution standard or PTES.
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=168)** It also includes testing guidance from the National Institute of Standards and Technology or [[NIST]].
>
> **[2:55](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=175)** The goal of this tool is to automate the basic stuff when it comes to web application security testing enabling testers to focus on more intricate and challenging tests.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=188)** The OWASP SAMM project, applies a maturity model towards software assurance or the idea that these applications are going to do what we need them to do when we need them to do it.
>
> **[3:20](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=200)** The SAMM starts with five high level business functions, governance, design, implementation, verification, and operations, and then it defines three unique sets of security practices for each business function.
>
> **[3:38](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=218)** When using the SAMM, you apply a maturity level to each security practice within each business function.
>
> **[3:45](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=225)** The end result is a pretty clear picture of where you have gaps in your application security program.
>
> **[3:52](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=232)** Gaps that could ultimately result in security incidents.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=237)** When building out your static web application security test, you want to incorporate the testing guide, the code review guide, and the SAMM.
>
> **[4:07](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=247)** These three resources alone will provide you with terrific insights into the security of your applications before you even perform your first scan.
>
> **[4:16](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=256)** When it's time to dive into dynamic testing, you want to revisit the testing guide which straddles both static and dynamic testing and you want to use both ZAP and OWTF to automate your dynamic testing activities.
>
> **[4:32](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=272)** As web applications continue to extend into more and more areas of business and our personal lives, OWASP will continue publishing projects to help us secure those applications.
>
> **[4:45](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=285)** As an application security tester, you want to keep an eye on new and existing projects alike.
>
> **[4:52](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=292)** The OWASP Testing Guide and Cheat sheets alone provides significant value.
>
> **[4:56](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=296)** The fact that OWASP makes these resources available for free is all the more reason that you should be using them.
>
> **[5:03](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=303)** Better yet, get involved.
>
> **[5:06](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=306)** If you find an OWASP project useful in your static testing efforts, take what you learn along the way.
>
> **[5:13](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=313)** Contribute to a project, or share a project with your local information security groups.
>
> **[5:19](https://www.linkedin.com/learning/static-application-security-testing/other-notable-projects?u=76281980&t=319)** As the OWASP community continues to grow so will the value that community provides back to developers and security professionals who need to secure these applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (13), [[Code Review]] (4), [[Web Application Security]] (3), [[Security Testing]] (2), [[Application Security]] (2)
> **Env Vars:** owasp (13), zap (5), samm (4), owtf (3), pdf (1)
> **Definitions:** is a  (4), short for (2)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Top 25 software errors](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=0)** - [Instructor] While [[OWASP]] definitely has a lot to offer the applications security community, they aren't the only resource that you should explore.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=9)** The SANS Institute has been providing information security research and education services since 1989.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=17)** Over the years, they've grown their offerings to the point that they now offer hundreds of multi-day training courses in cities all around the world.
>
> **[0:27](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=27)** SANS is best known for their GIAC certification program.
>
> **[0:31](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=31)** They developed the GIAC certs to help practitioners gain a deeper understanding of the subject matter and to help employers validate that candidates have the skills necessary to step into an information security role.
>
> **[0:46](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=46)** The MITRE Corporation is a not-for-profit organization that runs multiple research and development centers funded by the US Federal Government.
>
> **[0:56](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=56)** Their focus is on creating a safer, more secure world.
>
> **[1:01](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=61)** And their work spans everything from defense and intelligence, to homeland security, to [[Cybersecurity]].
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=68)** MITRE maintains a community-developed list of software weaknesses types, known as the CWE, or Common Weakness Enumeration language.
>
> **[1:19](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=79)** The purpose behind this resource is to provide a common language for identifying and addressing software vulnerabilities.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=88)** In 2010, SANS and MITRE teamed up to identify the Top 25 most dangerous software errors, using MITRE CWE as a foundation for that activity.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=101)** By combining their research, they were able to create a more detailed, more robust, list than the OWASP Top 10, providing security testers with even deeper insights into applications security risks that they should consider.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=116)** While the Top 25 list may be more expansive than the OWASP Top 10, it's not maintained with the same due diligence.
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=125)** Stephen Dye, an applications security expert turned CISO, published a short book called "Secure [[Agile Development|Agile]] Development: 25 Security User Stories."
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=137)** In this book he combines the Top 25 most dangerous software errors with the Agile development methodology to create a security user's story for every single item in the Top 25 list.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=152)** Each story contains a description that Agile developers will be familiar with, as well as test steps and acceptance criteria necessary to address each story.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/top-25-software-errors?u=76281980&t=163)** It's a brilliant practical resource that you can use to introduce applications [[Security Testing]] to your developers in terms that they're already familiar with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Agile Development|Agile]] (3), [[Cybersecurity]] (1), [[Security Testing]] (1)
> **Env Vars:** mitre (4), owasp (3), sans (3), giac (2), cwe (2)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [BSIMM](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=0)** - [Instructor] Another resource to include in your static testing preparation is the Building Security in Maturity Model or BSIMM.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=9)** The BSIMM is similar to the [[OWASP]] SAMM project in that it applies to capability maturity model to ensuring that software is secure.
>
> **[0:19](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=19)** Over 100 organizations from a variety of industries came together to form the BSIMM.
>
> **[0:26](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=26)** While it's most heavily influenced by professionals from financial services organizations and independent software vendors, you can find benefit from this resource regardless of the industry you represent.
>
> **[0:38](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=38)** In addition to teaching courses here on [[LinkedIn]], I present on a pretty regular basis at professional meetings and conferences.
>
> **[0:46](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=46)** And if there's one message that creeps into every one of my presentations, it's that compliance does not equal security.
>
> **[0:55](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=55)** If you want real, effective, meaningful security, then you should focus on maturity instead.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=63)** Software vulnerabilities aren't the problem.
>
> **[1:06](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=66)** Software vulnerabilities are a symptom of the problem.
>
> **[1:11](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=71)** If you've ever worked on root cause analysis for a production incident or a security incident, you likely determine that the entire incident could have been avoided if only someone had addressed the root cause that resulted in the conditions which led to the incident.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=88)** This is absolutely true when it comes to [[Application Security]], and applying a maturity model helps you shift your focus from the symptoms to the root causes.
>
> **[1:39](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=99)** The BSIMM consists of 121 activities, with each activity representing a specific thing you should do to improve the maturity of your software security program.
>
> **[1:51](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=111)** Those activities are grouped into three levels, where level one represents the basic stuff and level three represents a more mature set of activities.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=122)** The activities are grouped into 12 practices as well.
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=125)** Practices that help you determine where to begin and which resources to rely on.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=131)** I know this all sounds confusing.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=133)** It threw me for a loop the first time I looked at it.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=136)** But I can promise you that when you start using it, it has a simple flow to it that ties everything together.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=144)** I recommend that you start using the BSIMM one domain at a time.
>
> **[2:28](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=148)** Those practices I just mentioned are grouped into four distinct domains, governance, intelligence, SSDL touchpoints and deployment.
>
> **[2:39](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=159)** The governance domain focuses on organizing, managing, and measuring software security.
>
> **[2:45](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=165)** Strategy and metrics helps you figure out roles and responsibilities as well as budget teams and metrics.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=172)** Compliance and policy looks at both internal documentation and external standards and regulations.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=179)** Things like HIPAA and the [[PCI DSS]] to make sure that what you're doing lines up with what you said you would do.
>
> **[3:07](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=187)** Training acknowledges that we're not born with some innate knowledge of software security and we need to take time to make sure everyone is on the same page that we're all using the same security language.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=201)** The intelligence domain focuses on creating artifacts of what you learn along the way.
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=206)** Artifacts that other people in the organization can also use.
>
> **[3:31](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=211)** Attack models helps you look at your applications from an attacker's point of view.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=216)** This really helps cut through the noise of all the things you could do so that you focus instead on the things that are going to make the biggest difference.
>
> **[3:45](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=225)** Security features and design is all about establishing patterns that simplify the security process and make it easier for other developers in the organization to secure apps that you haven't even tested yet.
>
> **[3:59](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=239)** Standards and requirements builds on the compliance and policy work from the governance domain, documenting your required controls in more precise technical detail.
>
> **[4:11](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=251)** The SSDL touchpoints domain is where hands-on static application security testing comes into play.
>
> **[4:18](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=258)** Architecture analysis involves reviewing any available architecture diagrams ensuring that the documentation exists that it's current and that it's sound.
>
> **[4:30](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=270)** [[Code Review]] combines tools, rules, and different roles to ensure that you've got multiple sets of eyes on the code and that each set of eyes is looking for something that could put the application at risk unless the code is fixed prior to deployment.
>
> **[4:47](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=287)** [[Security Testing]] is all about vulnerability analysis in a non-production setting.
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=293)** This is where the static testing activities bleed into dynamic testing.
>
> **[4:58](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=298)** Much of the dynamic testing design is informed by your work in the earlier domains, and a significant portion of your dynamic test will be based on what you uncovered during architecture analysis and code review.
>
> **[5:11](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=311)** Do you see how it's all starting to tie together?
>
> **[5:14](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=314)** The deployment domain is where [[Dynamic Application Security Testing]] hits its full force.
>
> **[5:20](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=320)** [[Penetration Testing]] has you attempt to break the security controls that you've spent so much time building.
>
> **[5:27](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=327)** If the controls can't withstand a simulated attack, then chances are they won't withstand an actual attack either.
>
> **[5:34](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=334)** Software environment focuses on everything surrounding the application, the operating system, the other defensive technologies like web application firewalls, and processes like change management and application monitoring.
>
> **[5:49](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=349)** Processes designed to ensure that everything continues to work in a secure and stable manner.
>
> **[5:56](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=356)** [[Configuration Management]] and vulnerability management focus on post-production security maintenance activities, things like application patches and updates, [[Version Control]], defect management, and incident management.
>
> **[6:11](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=371)** The BSIMM helps you tie together all of these activities, all the things you should consider when securing an application.
>
> **[6:19](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=379)** Everything from governance to design, to both static and dynamic testing.
>
> **[6:25](https://www.linkedin.com/learning/static-application-security-testing/bsimm?u=76281980&t=385)** By including this resource in your static testing planning, you significantly increase the likelihood that your static test will get the job done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (3), [[Code Review]] (2), [[OWASP]] (1), [[LinkedIn]] (1), [[PCI DSS]] (1)
> **Env Vars:** bsimm (6), ssdl (2), owasp (1), samm (1), hipaa (1)
> **CLI Commands:** make (4), find (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Building your test lab](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=0)** - [Narrator] Whether you're doing static or [[Dynamic [[Application Security]] Testing]], you're going to need a test lab.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=6)** Fortunately, my recommended lab for static testing is pretty lightweight.
>
> **[0:12](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=12)** I do a lot of my training and testing in [[Virtual Machines]].
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=15)** It's just as easy to spin up a new VM as it is to blow it away and restore it to its default settings.
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=22)** There are quite a few security VMs available for free, but you'll need a virtual machine player in order to use them.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=30)** VMware workstation player is one of, if not, the most popular option.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=35)** Although you will need to purchase a license if you intend to use it commercially.
>
> **[0:40](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=40)** VirtualBox from Oracle is entirely free.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=44)** The trade off is that you might need to do a little extra work to get your VM up and running in VirtualBox than you would if you were in VMware player.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=53)** I used to run into compatibility issues between the two, but those issues pop up less and less frequently as time goes on.
>
> **[1:00](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=60)** We'll touch on virtual machine players a bit in this course.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=64)** but you'll rely on VMs a lot more when performing dynamic testing.
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=68)** As you learn from our discussion around SAMM and BSIMM, much of your static [[Security Testing]] activity is going to revolve around documentation reviews.
>
> **[1:18](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=78)** However, you will need to roll up your sleeves and dive into the source code.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=83)** There are a lot of language specific code analyzers, but I want to start with two broader code security tools in your static testing toolkit, Codacy and SonarQube.
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=96)** With those two tools at your disposal combined with the IDE of your choice, your testing toolkit will be both simple and effective.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=105)** Codacy is a static code analyzer designed to help you identify a number of potential quality issues with your app with one of those quality issues being security.
>
> **[1:57](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=117)** What I dig about Codacy is that you can link the cloud version of the tool to your [[GitHub]] or [[Bitbucket]] account and automate that analysis on every commit and pull request.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=128)** We'll be using the cloud version of Codacy later in this course, but you're welcome to download a trial version of the enterprise version to continue testing internal applications.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=139)** SonarQube is very similar to Codacy, although it has a larger user base.
>
> **[2:25](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=145)** You can run SonarQube Community Addition for free locally although they have additional license options available for more advanced features.
>
> **[2:34](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=154)** Alternately, you could use SonarCloud to do your code inspection online.
>
> **[2:39](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=159)** We'll be using SonarCloud for the demos later in this course.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=163)** You'll also likely use IDEs in your ongoing testing efforts.
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=168)** IDE stands for Integrated Development Environment.
>
> **[2:53](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=173)** Essentially, it's a program that developers use to write, test, and debug their code.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=178)** The tricky thing about IDEs is that there are dozens of them available and the majority of them are language specific.
>
> **[3:06](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=186)** You'll find .NET developers using Visual Studio, while [[Java]] developers are more likely to spend their time in Eclipse.
>
> **[3:13](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=193)** As IDEs have evolved over the years, many of them have expanded their support to multiple languages.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=201)** As you're performing your static test you're likely to chance across IDE plugins that your developers can start using to secure the code on their own.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=210)** For that reason alone we're going to take a look at a few IDEs later on.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=216)** Now that you're equipped with knowledge of security frameworks, maturity models, and static testing tools, you're off to the races, right?
>
> **[3:44](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=224)** Ready to start testing?
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=227)** Almost.
>
> **[3:48](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=228)** The last thing I want to equip you with is a testing checklist.
>
> **[3:52](https://www.linkedin.com/learning/static-application-security-testing/building-your-test-lab?u=76281980&t=232)** Something to help you wrap all this knowledge in a consistent, repeatable process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Virtual Machines]] (1), [[Security Testing]] (1), [[GitHub]] (1), [[Bitbucket]] (1)
> **Env Vars:** ide (3), samm (1), bsimm (1), net (1)
> **Tools:** github (1), bitbucket (1), visual studio (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)

#### [Preparing your checklist](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=0)** - [Instructor] Performing a series of tests once will provide you with some excellent insights.
>
> **[0:05](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=5)** But if you want to stay ahead of changes in your apps and measure improvement, you're going to want to create a testing checklist.
>
> **[0:13](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=13)** I'm a huge advocate for documenting repeatable processes, especially when it comes to [[Security Testing]].
>
> **[0:20](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=20)** Seasoned [[Application Security]] testers know that these repeatable processes will help them ensure consistent results over time.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=29)** By documenting your testing checklist, you'll establish a repeatable testing regimen, and you'll be able to measure your results over time to determine whether your testing efforts are having the desired results.
>
> **[0:42](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=42)** And measuring your results should absolutely be a core consideration as you're designing your static application security testing activities.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=51)** Security shouldn't be self-serving.
>
> **[0:54](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=54)** You're not running these tests just to keep everyone busy, or to check a compliance check box.
>
> **[1:00](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=60)** You're performing these tests to ensure that confidential data is protected, that the integrity of the application can be trusted, and that the application will be there when the users need it to be.
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=72)** If you want to hit these three goals, then you need to measure your results and fine-tune your tests as you go.
>
> **[1:19](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=79)** We'll cover metrics in more detail later on in this course.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=83)** Your testing checklist shouldn't begin with the tests themselves.
>
> **[1:27](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=87)** Make sure it includes pre-engagement interactions.
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=92)** When I'm consulting, the amount of time I spend on pre-engagement activities has a huge impact on whether the engagement is successful.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=101)** Take time to understand, remember?
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=104)** Your checklist should include scope verification, what's in scope, what's out of scope.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=110)** It should also include testing time frames, which are often more flexible for static testing than for dynamic testing.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=118)** You should also document the tools and the techniques you'll be using to perform the test, that way you can review those with your developers and make sure that you're using the right tools for the job.
>
> **[2:10](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=130)** You may have heard the phrase, "Measure twice, cut once," when discussing home projects.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=136)** Jumping right into doing a thing without appropriately preparing increases the chances you might miss something or make a mistake.
>
> **[2:25](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=145)** The same holds true for static application security testing.
>
> **[2:29](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=149)** Think of your time spent on pre-engagement interactions as measuring twice.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=155)** Based on everything we've covered so far, you know that you'll need to answer these five questions before you begin testing: What development methodologies do we follow?
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=166)** What programming languages do we use?
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=168)** What risk or security frameworks do we follow?
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=172)** What third-party libraries do we use?
>
> **[2:55](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=175)** And what stages in the development process require approval from the security team?
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=181)** In addition to the pre-engagement interactions, you need to be able to answer these five questions before testing any application.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=191)** Now you're ready to start testing.
>
> **[3:13](https://www.linkedin.com/learning/static-application-security-testing/preparing-your-checklist?u=76281980&t=193)** We're going to continue building out this checklist together, but the information you have so far puts you well on your way to building out an effective comprehensive process for performing static application security testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (3), [[Security Testing]] (2)
> **CLI Commands:** make (3)
> **Prerequisites:** you'll need (1), before you begin (1)
> **Speakers:** - [instructor] (1)


### 2. Security Documentation

[↑ Back to Table of Contents](#table-of-contents)

#### [Internal project plans](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=0)** - [Instructor] Incorporating static [[Application Security]] testing into internal project plans is a terrific way to keep costs down while building security in.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=11)** With [[Application Development]] methodologies, expecting developers to move more and more quickly though, when does it make sense to develop a project plan at all?
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=21)** Project plans are pretty common in shops that use the waterfall methodology and they even have a home in [[Agile Development|agile]] environments.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=30)** [[DevOps]] is another animal entirely.
>
> **[0:33](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=33)** Regardless, there are two scenarios where you'll find value in project planning, even if it's just an academic exercise.
>
> **[0:42](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=42)** Brand new deployments and significant changes to existing apps.
>
> **[0:47](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=47)** Brand new deployments are easy to identify.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=51)** If it didn't exist yesterday, and it's going to exist tomorrow or next week or next month, then it's brand new.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=59)** Significant changes?
>
> **[1:01](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=61)** Yeah, that can be a little tricky.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=63)** When you want to determine whether a change is significant, keep focusing on what's new.
>
> **[1:09](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=69)** Are you adding entirely new functionality to the app?
>
> **[1:13](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=73)** Are you rewriting any part of the code in a new language?
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=77)** A yes to either of these questions is a good indicator that the change is significant.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=83)** In 2016, Forrester Research published multiple papers on application development and security.
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=92)** They found that the earlier you address application defects, the more money you save on remediation activity down the line.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=101)** More to the point, those costs will be anywhere from five to 15 times less.
>
> **[1:48](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=108)** But this wasn't news to US-CERT.
>
> **[1:51](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=111)** The United States Computer Emergency Readiness Team had been publishing guidance on how to attain software assurance for years on their build security and website.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=122)** Although that resource is no longer available online, you'll find that many of the principles that they set forth regarding the relationship between software assurance and project management still hold true today.
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=137)** So all that knowledge about [[Software Development]] methodologies that you picked up earlier in this course, here's where you begin to apply it.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=146)** Each methodology includes a means for collecting requirements.
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=151)** Create a task for security to ensure that security is engaged here.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=156)** Security requirements need to be documented so they can be balanced against functional requirements.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=163)** As analysts begin working with users to design the application, security should be assigned a task to participate as well.
>
> **[2:51](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=171)** The key difference though, is that security should look at the design from the standpoint of a malicious user.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=178)** This will provide them with the insight they need to propose security test cases for the dynamic [[Security Testing]] to be conducted later in the project.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=188)** Finally, you should document a task for someone to perform source code security reviews.
>
> **[3:14](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=194)** Automated reviews are ideal and they need to be performed before developers check code back into the code repository.
>
> **[3:23](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=203)** It's also a great idea to kick off an automated [[Code Review]] when the developer steps away to grab a coffee or an energy drink.
>
> **[3:32](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=212)** Let the code review tool do the heavy lifting while the giving their brain a much needed break.
>
> **[3:38](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=218)** I'm also a diehard fan of both clarity and [[Accountability]].
>
> **[3:43](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=223)** If you want to ensure that these tasks are executed correctly, you need to answer three important questions.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=230)** Number one, what is the task?
>
> **[3:53](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=233)** Make sure you've clearly defined exactly what needs to happen, manual or automated, as well as an expectation of the outcome.
>
> **[4:02](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=242)** Who was responsible?
>
> **[4:04](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=244)** Individual accountability is everything.
>
> **[4:07](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=247)** I don't care if you have a team of 50 developers and six project managers.
>
> **[4:12](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=252)** You need to make sure that one and only one person is ultimately responsible for the task.
>
> **[4:19](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=259)** And when is it due?
>
> **[4:21](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=261)** Whether your when is a specific due date or another project task that can't happen until this one is completed, you need to be clear about when the task needs to be done.
>
> **[4:33](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=273)** If you're the security tester, and not the project or product manager then I recommend you take the following actions.
>
> **[4:41](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=281)** First contact the project or product manager to identify security touchpoints.
>
> **[4:48](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=288)** Based on your current understanding of static security testing and your understanding of application development methodologies, you're ready to have that conversation.
>
> **[4:58](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=298)** During the conversation, focus on identifying static security tests that will help you build security in.
>
> **[5:06](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=306)** You and the PM have the same goal here: Software assurance.
>
> **[5:11](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=311)** Talk about the relationship between security and quality.
>
> **[5:15](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=315)** Steer the conversation toward tests that will return the maximum value with minimum effort.
>
> **[5:22](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=322)** Since you're focusing on static testing now, lean heavily on where you can inject source code security reviews into the process.
>
> **[5:31](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=331)** Remember, source code reviews are not the same as source code security reviews and while manual reviews are a good start, automated reviews are the ultimate goal.
>
> **[5:43](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=343)** We'll talk about source code security reviews in more detail later in this course.
>
> **[5:48](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=348)** For now, your goal is to ensure that application security is a consideration during the project planning process.
>
> **[5:56](https://www.linkedin.com/learning/static-application-security-testing/internal-project-plans?u=76281980&t=356)** If you're talking to project and product managers about how to build security in, then you've already met with some success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (3), [[Application Development]] (3), [[Code Review]] (2), [[Accountability]] (2), [[Agile Development|Agile]] (1)
> **CLI Commands:** make (3), find (2)
> **Exercise Files:** source code (5)
> **Definitions:** is a  (4)
> **Cross-References:** earlier in (1), later in (1)
> **Env Vars:** cert (1)
> **Speakers:** - [instructor] (1)

#### [Communication planning](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=0)** - [Instructor] Organizations implement change control policies to minimize the impact to the production systems and applications due to change-related activity.
>
> **[0:10](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=10)** If you need to fix any vulnerabilities you discovered during your static testing activities, it will help if you understand your organization's change control policy.
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=21)** As organizations mature, they come to understand that they will eventually need to make changes to their systems and applications.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=29)** Without a change control process, the likelihood of those changes resulting in some unforeseen impact goes through the roof.
>
> **[0:37](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=37)** By implementing a change control process, they can review and test those changes before promoting them to production.
>
> **[0:45](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=45)** This increases the likelihood that the change will have its intended effect without breaking anything.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=51)** As you can imagine, any change in an application comes with the risk that the change might break the security of the application.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=59)** Security impacting changes are often harder to detect.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=64)** If a change introduces a [[SQL]] injection flaw or an insecure data exposure weakness, the application will likely continue to operate normally.
>
> **[1:15](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=75)** In other words, your regular users aren't the ones who will notice the new security flaw.
>
> **[1:20](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=80)** It's the criminals that you need to worry about.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=83)** That's why it's critical that you test the security of your application as part of every scheduled change.
>
> **[1:30](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=90)** Integrating [[Security Testing]] into your change control process is easier once you understand who the stakeholders are.
>
> **[1:38](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=98)** The end users are definitely in that list since they're the ones who will experience the impact that change has on how they interact with the app.
>
> **[1:48](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=108)** The developers who wrote and maintain the app are also key stakeholders, since they're the ones who are going to be changing the code.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=116)** It's also a good idea to keep your IT infrastructure team informed, since apps rely on infrastructure components like servers, networks, and [[Databases]], and it's a good idea to keep an open line of communication with your [[IT Audit]] department.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=131)** They're likely to review changes throughout the year, ensuring that the change control process was indeed followed.
>
> **[2:18](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=138)** Hopefully, your organization has written down both a change control policy and related change control procedures.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=146)** If not, well, maybe they should.
>
> **[2:29](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=149)** It's really hard to get a group of developers and IT administrators to follow the rules if no one tells them what the rules are.
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=157)** The change control policy should be high level, while the change control procedures contain details about how to propose a change, how to review a change, and how to test a change both before and after it's been made.
>
> **[2:53](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=173)** You should also familiarize yourself with any related technical standards and guidelines related to the application you're testing.
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=181)** If you have a standard that requires two-factor authentication, for example, then a change that disables that snippet of code should never make it past the review stage.
>
> **[3:12](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=192)** [[ITIL]] has become the authoritative source for IT change control.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=198)** Short for information technology infrastructure library, ITIL provides detailed guidance on multiple types of changes, including emergency, standard, major, and normal.
>
> **[3:31](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=211)** These types are intended to help organizations appropriately schedule their changes as well as allocate the proper resources and require the appropriate level of analysis and testing.
>
> **[3:43](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=223)** ITIL also identifies the need for a CAB, or change advisory board.
>
> **[3:48](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=228)** This is a cross-functional, sometimes cross-departmental group of people responsible for reviewing changes to ensure that all potential impacts have been considered.
>
> **[3:59](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=239)** Ivanti has a great change management resource on the IT Jargon Explained section of their website.
>
> **[4:06](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=246)** CICD, which stands for [[Continuous Integration (CI)|continuous integration]]/continuous deployment runs counter to traditional ITIL change control models.
>
> **[4:16](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=256)** The CICD pipeline requires automation in many of your backend testing procedures, procedures like your source code security scans.
>
> **[4:26](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=266)** In an ideal setting, updated code is tested, compiled, and published without requiring a convoluted and time-consuming change control procedure.
>
> **[4:37](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=277)** This is where the continuous deployment model comes into play.
>
> **[4:41](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=281)** With enough planning and testing, the theory behind the CICD pipeline is that you can deploy changes much more quickly, constantly improving the application without requiring a lot of manual procedures and debate-heavy meetings behind the scenes.
>
> **[4:59](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=299)** As [[DevOps]] continues to grow in popularity, you should be adapting your static [[Application Security]] testing activities to be more closely aligned with frequent and rapid changes to the source code.
>
> **[5:12](https://www.linkedin.com/learning/static-application-security-testing/communication-planning?u=76281980&t=312)** By understanding how your organization promotes application changes to production, you can find the right security testing tools and techniques to align with that approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ITIL]] (4), [[Security Testing]] (2), [[SQL]] (1), [[Databases]] (1), [[IT Audit]] (1)
> **Env Vars:** itil (4), cicd (3), sql (1), cab (1)
> **Definitions:** in other words (1), short for (1), is a  (1), stands for (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** source code (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Change control policy](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=0)** - [Instructor] Building security into your project plans is a great first step, but you're only getting started.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=6)** You'll also need to develop an effective communication plan.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=11)** And when I put together my own communication plans, I don't go for anything fancy or complicated.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=17)** Your goals should be rock simple, keep everyone on the same page.
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=22)** You need to spend time on a communication plan for your static [[Application Security]] testing activities because they'll have some level of impact on everyone involved.
>
> **[0:32](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=32)** Testing can impact schedules and deadlines.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=36)** If flaws must be remediated before subsequent development can occur, then everyone impacted will need to know when one of these flaws is discovered and when it's going to be remediated.
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=50)** Testing also requires resources.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=53)** Whether it's a developer, an analyst or a security professional someone needs to run those tests, they need to interpret those results, and they need to provide guidance on how to address any findings.
>
> **[1:07](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=67)** Fortunately, static testing comes with a minimal risk of impacting a deployed production instance of an app.
>
> **[1:15](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=75)** If you're not poking or prodding production chances are you won't accidentally knock the app offline.
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=82)** There are two questions you should answer when preparing your own communication plan.
>
> **[1:27](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=87)** First, who is going to be impacted by your [[Security Testing]]?
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=92)** You need titles or roles at a minimum, but personally I'm a fan of names, email addresses and mobile phone numbers.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=101)** Second, how are they going to be impacted?
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=105)** A project manager just needs to know whether a task was successfully completed but the developer responsible for fixing a flaw needs to know how to fix it and when that fix is due, knowing how your audience is going to be impacted will help you better understand the depth of communication required.
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=125)** The more you communicate with development teams the easier it will be to find your flow.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=131)** There are a few things you'll want to consider ahead of time to make sure that communications around your testing activity flow smoothly.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=139)** First, who does the actual testing?
>
> **[2:23](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=143)** Know the names and roles of the people who will execute the test.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=146)** Second, how much time will the testing add?
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=150)** Hopefully, you're automating whatever possible to keep this time to a minimum.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=155)** Third, who reviews the results?
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=157)** In some organizations, it could be the original tester although it can help to have a second set of eyes on this activity.
>
> **[2:45](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=165)** Then finally, who signs off on moving forward?
>
> **[2:49](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=169)** Someone needs to give a thumbs up, thumbs down on whether the remediation was appropriate.
>
> **[2:55](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=175)** Good thing you've already got all this documented in your project plan, huh?
>
> **[3:00](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=180)** Another key consideration when developing your communication plan is how the people involved prefer to communicate.
>
> **[3:07](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=187)** Traditionally, teams would meet in a room or jump on a call for 30 to 60 minutes, at least once a week to cover everything that happened during the previous week and everything due in the coming week.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=201)** Project managers would often compliment these status meetings with emails sometimes daily tracking specific tasks in order to get ahead of any potential delays.
>
> **[3:32](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=212)** Today, you're more likely to run into standup meetings where everyone literally stands up the entire time.
>
> **[3:39](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=219)** Standup meetings usually occur at the beginning and or the end of the day and they only last as long as they need to so that everyone can get back to work quickly.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=230)** But for teams who prefer realtime communication, [[Slack]] has become the defacto standard.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=237)** Developers keep Slack up and running throughout the day and when someone has a question, they post it to the right channel and often get an answer within minutes.
>
> **[4:06](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=246)** Pretty effective for teams who like to communicate quickly.
>
> **[4:10](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=250)** If you want to effectively communicate during your static security testing, it's up to you to put that plan together.
>
> **[4:17](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=257)** Know your audience, know who does what and when, know how they prefer to communicate and come at this from their point of view.
>
> **[4:27](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=267)** Don't just fire an email into the ether and assume that everyone understood it let alone read it in the first place.
>
> **[4:34](https://www.linkedin.com/learning/static-application-security-testing/change-control-policy?u=76281980&t=274)** Clearly communicate both your expectations and how teams can acknowledge their understanding and completion of each task, and you're much more likely to end up with a secure application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (2), [[Slack]] (2), [[Application Security]] (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** slack (2)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Security incident response policy](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=0)** - [Instructor] Bad things are going to happen.
>
> **[0:02](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=2)** Whether accidental or intentional, there's just no way around it.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=7)** But you can plan ahead.
>
> **[0:08](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=8)** That's where [[Security Incident Response]] policies come into play.
>
> **[0:13](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=13)** I don't know how many times I've uttered the phrase, "Language is important throughout my career," and this is one of the main reasons why.
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=21)** Security events, security incidents, and security breaches are three very different, very distinct things.
>
> **[0:31](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=31)** The security event is a single activity, ideally one that you capture in a log, that could be either a success or a failure.
>
> **[0:40](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=40)** It could also be entirely benign or potentially malicious in nature.
>
> **[0:45](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=45)** An event is just a thing that happened.
>
> **[0:48](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=48)** When you analyze one or more events and detect an active threat, someone or something that intends to harm your organization unless you take action to stop them, that's a security incident.
>
> **[1:01](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=61)** A security breach is a specific type of security incident, one that often involves the loss of sensitive data.
>
> **[1:09](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=69)** A denial-of-service attack, for example, is clearly a security incident, although I wouldn't necessarily call it a breach, which brings us to the CIA triad.
>
> **[1:21](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=81)** The potential damage caused by a security incident almost always falls into one of these three categories.
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=89)** Failure to keep your secret data secret is an incident impacting confidentiality, failure to protect data from unauthorized changes is an incident impacting integrity, and failure to keep apps online when they need to be there is an incident impacting availability.
>
> **[1:49](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=109)** So what does all of this have to do with static [[Application Security]] testing?
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=113)** I'm glad you asked.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=116)** The entire point of performing static application security testing is to find and fix vulnerabilities before attackers can find and exploit them.
>
> **[2:07](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=127)** By reviewing your security incident response policy in any supporting documentation, you'll have a much more informed point of view regarding what you should be testing for in your applications.
>
> **[2:20](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=140)** You'll also be exposed to an entire population of stakeholders that you may not have realized existed, stakeholders who should absolutely be involved in your project planning and your communication planning efforts.
>
> **[2:33](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=153)** Your organization is likely to have a security incident response policy, a security incident response plan or a single document that represents a combination of the two.
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=166)** Regardless of what they call it, the purpose of this document is to determine the scope of your security incident response responsibilities, as well as the team responsible for taking action when an incident occurs.
>
> **[3:00](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=180)** Ideally, your company will also have one or more security incident response procedures or playbooks that contain a lot more detail than the policy or the plan.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=191)** Security incident response procedures and playbooks are meant to be step-by-step guides for sleep-deprived teams acting under pressure with too little information available.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=202)** As someone who has worked multiple security incidents throughout my career, I can attest firsthand to the unbelievable value of a well-thought-out security incident response procedure or playbook.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=216)** One of the best security incident response resources you can and should review, though, are tickets from actual incidents that your company has already experienced.
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=227)** If you find tickets where the initial attack vector was an application security weakness, then you've got a pretty solid lead on what to include in your testing activities.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=237)** It should come as no surprise that [[NIST]] has an extensive special publication devoted exclusively to security incident response handling.
>
> **[4:07](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=247)** Special Publication 800-61 Revision 2 covers everything from building a team, equipping that team, handling an incident, and coordinating how you'll share information both internally and externally after you contain an incident.
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=265)** Fun fact.
>
> **[4:26](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=266)** The [[Microsoft Word|word]] application appears 44 times throughout this document.
>
> **[4:31](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=271)** If you want to get a very quick sense of how your static application security testing activities are related to your organization's security incident response policy, do a quick search of that term and skim through your results.
>
> **[4:47](https://www.linkedin.com/learning/static-application-security-testing/security-incident-response-policy?u=76281980&t=287)** By understanding and reviewing security incident response documentation while preparing your static application security test, you're much more likely to design test, project plans, and communication plans that are useful and relevant to the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Incident Response]] (12), [[Application Security]] (5), [[NIST]] (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is an  (3), is a  (2)
> **CLI Commands:** find (3)
> **Env Vars:** cia (1), nist (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Logging and monitoring policy](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=0)** - [Jared] Have you ever heard the phrase, "Pictures or it didn't happen"?
>
> **[0:04](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=4)** That phrase is uncannily accurate when it comes to security events as well.
>
> **[0:10](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=10)** That's why you should round out your documentation review by taking a close look at your company's logging and monitoring policy.
>
> **[0:18](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=18)** I mentioned earlier that I've worked on a number of security incidents throughout my career.
>
> **[0:23](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=23)** I've worked multiple incidents where the impacted organization did not have a logging and monitoring policy.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=30)** More importantly, they didn't have the log data that I needed to determine exactly what happened, including whether sensitive, regulated data was stolen.
>
> **[0:41](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=41)** Logging and monitoring is no joke.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=43)** Weak and non-existent logging and monitoring controls can contribute to a business-ending event.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=51)** At a high level, log management is just generating and storing system and application logs so you can look at them later.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=59)** When it comes to [[Application Security]] testing, the application's ability to generate log data should definitely be part of your testing process.
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=68)** Your static tests should include the code responsible for generating and protecting those logs, especially since reviewing those logs is going to be part of the dynamic testing activity you perform later.
>
> **[1:21](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=81)** SIEM, often pronounced seam, stands for security information event management.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=88)** I think of the relationship between log management and security information and event management as two parts of the same pyramid.
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=96)** Log management is the foundation, while security information event management is the pinnacle.
>
> **[1:43](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=103)** Log management systems should focus on collecting all the data that you need for long-term storage.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=110)** Security information event management systems should analyze that data in near [[Real-Time]], looking for threat activity and either generating alerts or automating response activities.
>
> **[2:03](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=123)** As you prepare your static application security tests, there are four questions you'll want to consider about the applications logging capabilities.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=133)** Are the apps capable of generating logs?
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=136)** If the apps aren't generating any relevant security logs period, then you should seriously reconsider whether that app is ready for end user consumption.
>
> **[2:25](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=145)** Are logs compliant with internal and external requirements?
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=150)** Once you review your logging and monitoring policy, you should know what data needs to be captured in your app's logs.
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=157)** Are logs sufficient for near-term [[Incident Response]]?
>
> **[2:41](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=161)** If you've reviewed your [[Security Incident Response]] plan, then you have even more insight into what to look for in the app's logs.
>
> **[2:49](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=169)** And are logs sufficient for long-term forensics?
>
> **[2:53](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=173)** Look at your app's logging capabilities from a long-term perspective as well.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=178)** If you need to look at those logs a year from now, can you still extract useful information from them?
>
> **[3:05](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=185)** [[NIST]] to the rescue again.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=188)** Special Publication 800-92, Guide to Computer Security Log Management, contains extensive guidance on all things logging and monitoring, everything from the log management infrastructure to specific contents of log files.
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=206)** The section on Log Management Operational Processes will help you understand how application security logs might be used in a real-world setting.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=216)** And Figure 2-1, Security Software Log Entries, provide specific examples of what software logs might look like.
>
> **[3:45](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=225)** Great stuff all around.
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=227)** Here's a little trick I picked up along the way.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=230)** You want a shortcut to getting logging and monitoring right?
>
> **[3:54](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=234)** Take a look at Section 10 of the PCI [[Data Security]] Standard.
>
> **[3:59](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=239)** A lot of folks, outside of retail in particular, disregard this document as irrelevant.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=245)** "It doesn't apply to me," they say, "so why should I look at it?"
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=249)** Because section 10 of the [[PCI DSS]] is the simplest, most concise guidance on logging and monitoring that I have ever seen.
>
> **[4:19](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=259)** It tells you which events you should log plus the individual artifacts that each log should contain.
>
> **[4:26](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=266)** When a developer asks you for a logging and monitoring design guide, just copy and paste PCI Section 10.
>
> **[4:33](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=273)** Done.
>
> **[4:35](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=275)** "But Jared," you say, "I work in a government role and our requirements are much more comprehensive than a standard design for private organizations."
>
> **[4:44](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=284)** Don't worry, I've got you covered here, too.
>
> **[4:47](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=287)** Take a look at Intelligence Community Standard 500-27.
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=293)** This document was made public in June of 2016 in response to a Freedom of Information Act request.
>
> **[5:01](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=301)** Appendix B contains a much more comprehensive set of auditable events than the PCI Data Security Standard.
>
> **[5:09](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=309)** The Appendix also contains the elements that you should include in those logs, as well as attributable events that indicate an actual compromise.
>
> **[5:19](https://www.linkedin.com/learning/static-application-security-testing/logging-and-monitoring-policy?u=76281980&t=319)** ICS 500-27 might be a little daunting for some organizations, but between this document and PCI Section 10, you should have more than enough information to ensure that your static application security testing activity includes the application's logging and monitoring capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (4), [[Data Security]] (2), [[Real-Time]] (1), [[Incident Response]] (1), [[Security Incident Response]] (1)
> **Env Vars:** pci (5), siem (1), nist (1), dss (1), ics (1)
> **Definitions:** stands for (1)
> **Speakers:** - [jared] (1)

#### [Third-party agreements](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=0)** - [Instructor] Let's face it, [[Cloud Computing]] is the new normal.
>
> **[0:05](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=5)** When companies can solve a business problem with a software-as-a-service solution for a fraction of what it would cost to develop that same application in-house, the less expensive option is going to win out more often than not.
>
> **[0:19](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=19)** So, how does this impact our static [[Application Security]] testing activities?
>
> **[0:25](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=25)** Well, you may have the authority to test the security of internal applications.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=29)** It's unlikely that you'll be authorized to perform that same level of hands-on testing of third party applications.
>
> **[0:37](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=37)** That means that you're going to extend more than just your technology beyond the traditional perimeter.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=43)** You'll also extend your trust.
>
> **[0:46](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=46)** But that doesn't mean that you have to trust third parties blindly.
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=50)** It's okay to trust but verify.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=53)** Let me share a quick story from my own personal experience.
>
> **[0:57](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=57)** I performed a penetration test for a very large organization, one with an annual revenue in the billions.
>
> **[1:05](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=65)** During my intelligence gathering activities, I discovered a publicly available mobile application used by employees and customers alike.
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=74)** I took the application apart, and you know what I found?
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=77)** I found a web service call to a URL that did not belong to the organization.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=83)** Instead, it belonged to a third party hosting provider.
>
> **[1:27](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=87)** With a little more digging, I found that the domain belonged to a mobile application developer who, as it turns out, had been hired by the organization to write this very same mobile application.
>
> **[1:40](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=100)** In other words, the developer chose to link a key function within the mobile app to their own website instead of linking it to a website owned and operated by the organization.
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=113)** Let's think like a criminal for a second here.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=116)** Suppose you wanted to attack this organization and you discovered the exact same bit of information in the mobile app.
>
> **[2:03](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=123)** Who would you go after?
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=125)** Are you going to try hammering away at the organization directly hoping that they don't see you even though they're spending hundreds of thousands of dollars on security staff, on monitoring services, and on security technologies specifically designed to not just shut down your attacks but also to pinpoint who you are and where you're attacking from?
>
> **[2:28](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=148)** Or are you going to go after this independent developer who has no security and no monitoring, enabling you to compromise not only the web service you identified but also every user who relies on the mobile app that uses that exact same service?
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=166)** Kind of a no-brainer, right?
>
> **[2:49](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=169)** If you want to include third parties in your static testing activities, you need to identify those third parties first.
>
> **[2:56](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=176)** Start with your purchasing department.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=178)** If anyone is paying for any of these [[SaaS]] solutions then purchasing should have a record of it, assuming that is that the purchase went through your central purchasing department and not through some manager's corporate credit card.
>
> **[3:13](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=193)** This also holds true for a third party developer's writing apps on your behalf.
>
> **[3:19](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=199)** While you're at it, talk to your legal department.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=202)** You'll want to know if you have any documented contracts or agreements with these third parties.
>
> **[3:29](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=209)** You should also talk with your information security and risk management teams.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=214)** The security team likely has access to firewall logs that can show you every website users are accessing from inside the network or while connected to the VPN.
>
> **[3:44](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=224)** If you're lucky, the risk management team is already performing some sort of business viability assessment on these third parties so they could have a running list as well.
>
> **[3:55](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=235)** Finally, talk to your end users.
>
> **[3:58](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=238)** I have one question that I've had incredible success with, and that question is, "What websites do you log into in order to do your job?"
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=249)** Everyone from the CEO to the frontline employees can answer that question with ease.
>
> **[4:15](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=255)** When it comes to contracted third parties, you can work with your purchasing and legal departments to get your security requirements in writing.
>
> **[4:23](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=263)** One of the simplest, most common requirements to add to a contract is an expectation of compliance.
>
> **[4:31](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=271)** More to the point, you should consider contractually obligating your third parties to be able to provide you with evidence of their compliance with an industry security standard or a security framework.
>
> **[4:44](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=284)** While it's not always possible to require compliance with a specific framework, you can absolutely include examples of acceptable frameworks.
>
> **[4:54](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=294)** A trickier compliance requirement is compliance with internal security standards.
>
> **[5:00](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=300)** Adding that language to a contract means that you'll need to share your internal security documentation so your third parties can see exactly what it is they're expected to comply with.
>
> **[5:11](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=311)** It's also important to remember that this third party likely has multiple customers.
>
> **[5:16](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=316)** If every customer expects them to comply with their internal security standards, it's going to quickly become impossible for them to keep up.
>
> **[5:26](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=326)** Legal will also want a liability clause in the contract.
>
> **[5:29](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=329)** I really dig this much more than compliance requirements.
>
> **[5:34](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=334)** Ultimately, if something bad happens due to insecure code written by that third party, then the third party is responsible for financial damages.
>
> **[5:44](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=344)** This clause is much more likely than compliance expectations to result in real effective security.
>
> **[5:51](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=351)** If you'd like to see a story about how one third party, Dropbox, has been working to improve security language between vendors and customers, check out their blog, "Toward Better Vendor Security Assessments".
>
> **[6:05](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=365)** It's nice to get your security requirements in writing but what can you do about open-source libraries?
>
> **[6:13](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=373)** Chances are your developers are using some open-source code in your internally developed applications.
>
> **[6:19](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=379)** But when it comes to open-source, there's not really anyone to speak with about a contract or an agreement.
>
> **[6:25](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=385)** At the very least, you'll need to be able to identify which open-source libraries have made their way into your apps.
>
> **[6:33](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=393)** More importantly, you'll want to identify those open-source libraries with known security weaknesses.
>
> **[6:40](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=400)** Fortunately, there are a few tools to help you identify vulnerable open-source components within your applications.
>
> **[6:47](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=407)** Sonatype's OSS Index is an online search engine.
>
> **[6:52](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=412)** If your developers are using any of the components within the supported ecosystems, things like Go or RubyGems or Droople, then you can use the OSS Index to quickly find related vulnerabilities worth investigating.
>
> **[7:07](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=427)** [[OWASP]]'s Dependency-Check focuses on vulnerable application project dependencies.
>
> **[7:13](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=433)** While Dependency-Check was originally built to support [[Java]] and .NET, the project team has added experimental support for Ruby, [[Node.js]], and [[Python (Programming Language)|Python]].
>
> **[7:24](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=444)** If you're working in a Ruby shop then you might want to go straight to Bundler Audit instead.
>
> **[7:30](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=450)** The Ruby community has a handful of laser-focused tools for securing Ruby code.
>
> **[7:35](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=455)** And Bundler Audit was designed to perform patch level verification for Bundler.
>
> **[7:40](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=460)** Again, knowing the language in play is critical for securing that code.
>
> **[7:45](https://www.linkedin.com/learning/static-application-security-testing/third-party-agreements?u=76281980&t=465)** But it's reassuring to know that you have multiple options for securing open-source code as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (1), [[Application Security]] (1), [[SaaS]] (1), [[OWASP]] (1), [[Java]] (1)
> **CLI Commands:** ruby (4), find (1), node (1), python (1)
> **Env Vars:** oss (2), url (1), vpn (1), ceo (1), owasp (1)
> **Definitions:** means that (2), is an  (2), in other words (1)
> **Exercise Files:** source code (2)
> **Prerequisites:** you'll need (2)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)

#### [OWASP ASVS](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=0)** - [Narrator] At this point, I bet you're thinking, "Wow, there is a lot that goes into verifying whether an application is secure.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=9)** I really wish [[OWASP]] had a project that could help me out here."
>
> **[0:13](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=13)** Well, you're in luck.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=15)** OWASP maintains the [[Application Security]] Verification Standard project to help organizations manage their application security conversations with internal developers, external developers, and security testers.
>
> **[0:31](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=31)** You can use the ASVS to document and track metrics around how secure your applications really are in line with your organization's security maturity targets.
>
> **[0:42](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=42)** Metrics aside, the ASVS contains extensive guidance on the application security controls that you should consider testing.
>
> **[0:52](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=52)** And then there's the piece of the ASVS that I personally consider to be the most significant, procurement support.
>
> **[1:00](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=60)** If you're looking for a clear set of application security expectations that you can share with your vendors, you can simply choose the right level within the ASVS and let your vendors prove to you that any apps developed by them meet that same level.
>
> **[1:16](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=76)** What exactly do I mean by levels here?
>
> **[1:19](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=79)** The ASVS follows a capability maturity model approach in defining three distinct levels of application security, all based on your organization's security goals and capabilities.
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=92)** OWASP describes level 1 security as low assurance.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=97)** You might choose level 1 if your development team is just getting started in security, and if you're just focusing on the basics.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=105)** Level one goes after the simplest security controls, and it's usually reserved for applications that don't store or handle sensitive data.
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=113)** For apps that do handle sensitive data, you'll want to consider going for level 2 security.
>
> **[2:00](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=120)** Level 2 is intended to cover most of the apps in your portfolio, and anything regulated by external standards.
>
> **[2:07](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=127)** Things like HIPAA or PCI should definitely be vetted using the level 2 controls.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=133)** The ASVS reserves level 3 security for business critical apps.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=139)** These are often apps that need to be online 24/7, apps that the organization lives and dies by.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=146)** Level 3 requires the most effort to test, but if an app achieved level 3 certification, you can [[Representational State Transfer (REST)|rest]] assured that the app meets your organization's security needs.
>
> **[2:38](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=158)** The ASVS is structured using control objectives and requirements.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=163)** There are 14 control objectives in total, with each objective representing a category of application security controls.
>
> **[2:51](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=171)** Control objectives include things like authentication, session management, error handling, and so on.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=179)** Each control objective contains one or more requirements.
>
> **[3:03](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=183)** These are the specific security things that an app needs to do.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=188)** The stored [[Cryptography]] objective, for example, contains requirements around [[Data Classification]], around [[Algorithms]] and random values, and secrets management.
>
> **[3:19](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=199)** Each requirement is assigned one or more security levels.
>
> **[3:23](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=203)** The basic requirements are all flagged as level 1, but the more advanced requirements are flagged as level 2, and in some cases level 3, depending on how much additional security the requirement adds to the application.
>
> **[3:39](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=219)** Another thing I dig about the ASVS is that each requirement maps to the CWE, the same resource that SANS and MITRE used used when they put together that top 25 list.
>
> **[3:51](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=231)** When applied appropriately, the ASVS can provide you with a reasonable level of assurance that an application meets your security requirements, regardless of whether that app was developed internally or by a third party.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=245)** As a security tester, you can perform static tests, dynamic tests, or a combination of both for each requirement, depending on how you want to implement the ASVS within your organization.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/owasp-asvs?u=76281980&t=260)** This is an excellent resource that can help you put guardrails around your application security testing activities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (7), [[OWASP]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Cryptography]] (1), [[Data Classification]] (1)
> **Env Vars:** asvs (10), owasp (3), hipaa (1), pci (1), cwe (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [narrator] (1)


### 3. Source Code Security Reviews

[↑ Back to Table of Contents](#table-of-contents)

#### [Challenges of assessing source code](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=0)** - [Instructor] While documenting your application's security controls provides a solid foundation for your static testing efforts, performing source code security reviews is going to make up most of your testing activity once that documentation is in place.
>
> **[0:16](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=16)** The first thing a tester needs to understand is that code reviews and code security reviews are not the same thing.
>
> **[0:24](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=24)** A source [[Code Review]] focuses on functionality.
>
> **[0:27](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=27)** Does the application work?
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=29)** Does it do what it was designed to do?
>
> **[0:32](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=32)** A source code security review focuses on resilience.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=36)** Can an attacker break the application?
>
> **[0:39](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=39)** Can that attacker make the app do something the developers didn't design it to do?
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=44)** For apps targeting customers in the U.S., let's consider the ZIP Code field for a moment.
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=50)** If your application asks the user to enter a home address, then there is likely a field for ZIP Code.
>
> **[0:57](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=57)** From a developer's point of view, this is most likely a field that accepts user input, say, five numbers, and then compares that entry to a backend database that maps ZIP Codes to towns and cities that they represent.
>
> **[1:11](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=71)** When performing a code review of the ZIP Code function, a QA tester might enter the numbers 93013 and expect the application to return the value Carpinteria.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=83)** As long as the field accepts input and performs a valid lookup, the code does what it's supposed to do.
>
> **[1:30](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=90)** That test would be considered successful.
>
> **[1:33](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=93)** But then you, the security tester come along and instead of entering five numbers, you enter 20.
>
> **[1:40](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=100)** Maybe you enter 257.
>
> **[1:42](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=102)** Better yet, you don't enter any numbers at all.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=105)** You enter escape characters and [[SQL]] database query strings.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=110)** You enter anything but the expected five number input.
>
> **[1:55](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=115)** Is the application coded in a way that expects you to do the unexpected?
>
> **[2:00](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=120)** Does it fail gracefully or does it let you run commands directly against the database?
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=126)** A code review could very well miss this potential security flaw, but a code security review should find it almost right away.
>
> **[2:15](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=135)** "Big deal."
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=136)** Your developer tells you.
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=137)** "They're just ZIP Codes, so what if someone can dump the entire database?
>
> **[2:21](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=141)** It's public knowledge!"
>
> **[2:23](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=143)** Right, ZIP Codes are public knowledge, but what other database tables are behind that application?
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=151)** Do any of them contain customer private data, account numbers, healthcare details?
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=157)** If your developers are using insecure functions for your ZIP Code lookups, what are the chances that they're using the same code snippet to look up sensitive information?
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=168)** It's your job as a security tester to think like an attacker, and every snippet of code that you review can provide you insight into how the developers approached building this application.
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=181)** A few lines of insecure code linked to a low-risk function could give an attacker renewed focus into how to break into the application, doing harm both to your company and to your customers.
>
> **[3:15](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=195)** When it comes time to conduct a code security review, one of the first questions you'll need to answer is, "Are we going to perform manual reviews or automated reviews?"
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=206)** My answer, why not both?
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=210)** Automated reviews are essential if you want to quickly cover a lot of code in depth.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=216)** Let's face it, we all have deadlines.
>
> **[3:39](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=219)** The developers have their go-live dates and your testing needs to occur before then.
>
> **[3:44](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=224)** Automation is the only way to make that happen.
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=227)** But don't walk away from manual source code security reviews entirely.
>
> **[3:51](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=231)** There is tremendous value in keeping some aspect of source code security reviews in place for training and education purposes.
>
> **[4:01](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=241)** If manual reviews help the developers learn how to spot insecure code while they're writing it, then what are the chances they'll change their ways and start writing secure code the first time around?
>
> **[4:13](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=253)** Getting from where you are today to where you want to be will take time, and here are a few considerations to help you get there more quickly.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=260)** First, [[Application Security]] testing cannot be haphazard if it's going to have a positive long-term impact.
>
> **[4:29](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=269)** Be prepared to document well-defined processes along the way.
>
> **[4:33](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=273)** Prototype your testing, find what works and write that down.
>
> **[4:37](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=277)** Wash, rinse, repeat.
>
> **[4:40](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=280)** Finding internal resources with security experience and knowledge will be your second challenge.
>
> **[4:45](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=285)** You are taking this course to expand your knowledge in this space, and that's fantastic.
>
> **[4:50](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=290)** Can you say the same for the [[Representational State Transfer (REST)|rest]] of your security team?
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=293)** And what about your developers?
>
> **[4:56](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=296)** You are going to need tools to automate all of this and tools come with training, a learning curve, and often some cost.
>
> **[5:04](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=304)** I'm going to show you a couple of free and open source tools, but depending on your specific needs, you may need to budget for commercial tools at some point.
>
> **[5:13](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=313)** If project timelines don't already include [[Security Testing]] activities, you'll get some pushback regarding adding extra work.
>
> **[5:22](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=322)** Once you help the project team see the long-term value of this testing, then it becomes a matter of accounting for testing activities within those timelines.
>
> **[5:32](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=332)** And finally, you're going to need to carve out time for everyone involved to perform some training on this topic.
>
> **[5:39](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=339)** Everyone doesn't need the exact same training, but at a minimum, everyone does need to understand what you're doing and why you're doing it.
>
> **[5:49](https://www.linkedin.com/learning/static-application-security-testing/challenges-of-assessing-source-code?u=76281980&t=349)** Approaching every conversation about source code security reviews with these considerations in mind will help you key in to how you can effectively implement these reviews within your own organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (3), [[SQL]] (1), [[Application Security]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Security Testing]] (1)
> **Env Vars:** zip (7), sql (1)
> **Exercise Files:** source code (6)
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [OWASP Code Review Guide](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=0)** - [Instructor] If you are looking for a step-by-step guide to performing a source code security review, then the [[OWASP]] [[Code Review]] Guide is the first resource you should check out.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=11)** This guide begins with considerable information on what a code security review is, how to scope it, how to couple these reviews with [[Penetration Testing]], and a methodology for integrating these reviews into your SDLC.
>
> **[0:26](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=26)** OWASP built this guide to align with the top 10 [[Web Application Security]] risks.
>
> **[0:32](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=32)** For each item in the top 10, the code review guide includes specific code snippets, that demonstrate how those flaws might actually appear in source code.
>
> **[0:42](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=42)** More importantly, the guide shows you what to review and how to validate that the code is resistant to certain attacks.
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=50)** The guide also includes detailed references for further reading, using resources that are both internal to OWASP, and resources hosted on external sites like [mitre.org](https://mitre.org), [usenix.org](https://usenix.org), [[[PHP]].net](https://php.net), and [[[Microsoft]].com](https://microsoft.com) just to name a few.
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=68)** The OWASP Code Review Guide pairs perfectly with the OWASP Testing Guide.
>
> **[1:13](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=73)** The code review guide focuses on static [[Application Security]] testing activities, while the web [[Security Testing]] guide shifts that focus to dynamic testing.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=84)** Using both resources in tandem will have a huge positive impact on your application security testing activities.
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=92)** I cover the testing guide in detail in my [[Dynamic Application Security Testing]] course, but for now, know that you should consider both guides to be integral to your application security program.
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=104)** One of the reasons I think so highly of the code review guide is that it brings topics like maturity and risk into your application security conversations.
>
> **[1:54](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=114)** The project team understands the importance of applying risk-based intelligence to code security reviews in order to get the most out of your testing activities.
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=125)** Combining that intelligence with [[Threat Modeling]], you can build a core set of tests that are more likely to reflect actual attacks your application could experience once it goes live.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=136)** It's also critical for developers and security testers alike to understand how external business drivers might impact code security review activities.
>
> **[2:27](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=147)** The guide was written with three specific audiences in mind.
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=151)** It was written for management teams who won't be doing the actual testing, but still need to understand what testing will be performed and why it is important.
>
> **[2:41](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=161)** It was written for software leads who need to understand the relationship between code reviews and code security reviews.
>
> **[2:49](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=169)** And most importantly, it was written for the code security reviewer who's going to be doing most if not all of the hands-on work.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=178)** By writing this guide with all three audiences in mind, the project team created a resource that brings these groups together increasing the likelihood that the resulting processes will find adoption across the entire organization.
>
> **[3:13](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=193)** The guide goes into detail regarding several factors to consider when developing your internal code security review process.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=201)** The alignment with the top 10 risks is obviously core to the guide, but it also provides both purpose and context to help everyone involved develop a better understanding of why we're performing code security reviews in the first place.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=216)** OWASP urges testers to consider the number of lines of code in scope for your reviews as well.
>
> **[3:43](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=223)** Larger, more complex applications are more likely to be exposed to security flaws, and you'll need to determine how in depth your code security reviews can be.
>
> **[3:53](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=233)** If you don't have time or resources to perform the level of review that you feel is necessary, you'll likely want to compensate with additional scrutiny during your dynamic testing.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=245)** As we discussed earlier in this course, knowing which programming languages are in play is crucial, and the OWASP guide underscores that fact.
>
> **[4:13](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=253)** The guide also urges you to consider available resources, the time those resources can allocate to testing, and the deadlines that will influence your testing activities.
>
> **[4:24](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=264)** With respect to threat modeling, the Code Review Guide applies two separate models, STRIDE and DREAD.
>
> **[4:32](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=272)** If you've done any threat modeling in the past, chances are you're somewhat familiar with one or both of these models.
>
> **[4:39](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=279)** The STRIDE Threat Model was developed by a pair of Microsoft employees.
>
> **[4:43](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=283)** It focuses on six potential threats, spoofing a user's identity, tampering with the integrity of the application, repudiation, information disclosure, denial of service attacks, and elevation of privilege.
>
> **[5:00](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=300)** By considering these six threat types when assessing your source code, it helps testers focus their efforts on risk to confidentiality, integrity, availability, and the like.
>
> **[5:12](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=312)** The DREAD Threat Model also came from the Microsoft space.
>
> **[5:16](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=316)** This model relies on five threat categories to determine which threats represent the greatest risk to an application, damage, if an attack was successful, how bad would it really be?
>
> **[5:28](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=328)** Reproducibility, once a person figures out how to execute the attack, how hard would it be for them or others to repeat it?
>
> **[5:36](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=336)** Exploitability, how hard is it to actually execute this attack?
>
> **[5:42](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=342)** Affected users, how many people would be impacted by a successful attack?
>
> **[5:48](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=348)** And discoverability, how simple is it for an attacker to even find this threat?
>
> **[5:54](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=354)** OWASP suggests that testers might use this threat model to assign a more traditional score using the risk equals likelihood times impact equation.
>
> **[6:05](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=365)** We're going to cover both STRIDE and DREAD in more detail later in this course.
>
> **[6:09](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=369)** When building out a code security review process, you personally run the risk of being overwhelmed by the scope of the effort and by the imbalance between potential threats and available security resources.
>
> **[6:23](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=383)** The OWASP Code Review Guide can help simplify that process considerably, shifting your mindset from being overwhelmed to being empowered.
>
> **[6:33](https://www.linkedin.com/learning/static-application-security-testing/owasp-code-review-guide?u=76281980&t=393)** Download the guide, build it into your process, you'll be hard pressed to find a better resource for this purpose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (9), [[Code Review]] (7), [[Application Security]] (5), [[Microsoft]] (3), [[Threat Modeling]] (3)
> **Env Vars:** owasp (9), stride (3), dread (3), sdlc (1)
> **CLI Commands:** find (3), php (1)
> **URLs:** [mitre.org](https://mitre.org) (1), [usenix.org](https://usenix.org) (1), [php.net](https://php.net) (1), [microsoft.com](https://microsoft.com) (1)
> **Exercise Files:** source code (3), download the (1)
> **Cross-References:** we discussed (1), earlier in (1), later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Static code analysis](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=0)** - [Narrator] I've said it before and I'm going to keep saying it.
>
> **[0:03](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=3)** When it comes to [[Application Security]] testing, especially static code analysis, automation is where it's at.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=11)** The only way you're going to achieve the coverage you need to secure your source code, is by adding automated scanners to the mix.
>
> **[0:20](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=20)** But there are a lot, and I mean a lot of code security scanners to pick from.
>
> **[0:26](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=26)** How do you know which scanner to use?
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=29)** The best place to start is with the programming language that you'll be assessing, oh, sorry did I say language?
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=36)** I meant languages.
>
> **[0:38](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=38)** During the documentation review, you should have uncovered the languages that the development team or teams are using.
>
> **[0:46](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=46)** This information is essential when it comes to selecting the tool or tools that you'll use to perform automated static source code [[Security Testing]].
>
> **[0:56](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=56)** Take these three tools for example.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=59)** If you've ever tested [[Python (Programming Language)|Python]] apps for security flaws, then you may have heard of Bandit.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=64)** Bandit is a free Python security linter, specifically designed to find potential weaknesses in Python code.
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=72)** When it comes to performing static analysis of Ruby code, Brakeman is extremely popular.
>
> **[1:19](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=79)** Designed for testing Ruby owned rails applications, Brakeman has a large user community among Ruby developers and testers around the world.
>
> **[1:28](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=88)** And if you've worked with C# applications, then you may have taken advantage of the realtime scanning functionality offered by Puma Scan.
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=96)** This helps you identify and fix source code security issues, in real time.
>
> **[1:41](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=101)** But let me ask you this.
>
> **[1:42](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=102)** Have you ever tried scanning a C# app with Bandit?
>
> **[1:47](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=107)** Have you ever searched for security flaws in Python code, with Brakeman?
>
> **[1:52](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=112)** It's like trying to saw a piece of wood in half with a hammer.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=116)** You've got to use the right tool for the job, if you expect useful results.
>
> **[2:01](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=121)** In addition to knowing which languages you need to test, cost is a key factor for most organizations.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=128)** Unless you're working somewhere with an unlimited security budget, chances are you'll need to factor in cost as well, when selecting your source code analyzer.
>
> **[2:18](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=138)** Personally I love open source, but I know from firsthand experience that what you save in licensing cost, you might make up for in manual effort.
>
> **[2:28](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=148)** When something doesn't work as expected in an open source setting, you can't just pick up the phone and call support.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=155)** You need to do your own legwork.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=156)** You need to reach out to the community to see if anyone else has ideas on how to resolve that issue.
>
> **[2:42](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=162)** While commercial tools come with a cost, you also need to consider the complexity factor.
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=168)** In order to remain competitive, many vendors will add functionality to their solutions that you'll never use.
>
> **[2:56](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=176)** You run the risk of paying for an Aston Martin, when a Honda Civic will do.
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=181)** [[OWASP]] maintains a fairly extensive list of source code analysis tools, including tools from both the free and open source community, and commercial tools alike.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=191)** The list is offered without opinions on whether tool A is better than tool B, or vice versa.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=198)** But still, it's an excellent place to start.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=202)** Search for the programming language you need to test, follow the link to the tool site, and then do some additional research, to determine whether that specific tool is a good fit for your organization.
>
> **[3:35](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=215)** If you're looking for a more extensive list of application security testing tools, you might want to check out the tools page, originally created by the OWASP chapter in Phoenix, Arizona.
>
> **[3:46](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=226)** Be forewarned though, this list can be a little overwhelming the first time you see it.
>
> **[3:52](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=232)** This isn't just a short list of source code security review tools.
>
> **[3:56](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=236)** This is an enormous list of all things AppSec.
>
> **[4:00](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=240)** Everything from static code analyzers, to fuzzers, to [[SQL]] injection scanners, to you name it.
>
> **[4:08](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=248)** This list is on the archive section of the OWASP website.
>
> **[4:12](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=252)** It's not an actively maintained resource anymore, but it is a nice list to keep in your hip pocket, in case you want to dig a little deeper.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=260)** The good news, is that you have plenty of options to choose from, when it comes to source code security analyzers.
>
> **[4:27](https://www.linkedin.com/learning/static-application-security-testing/static-code-analysis?u=76281980&t=267)** Determine which languages you need to test, figure out your budget and your capabilities, and start testing out tools that look like they might be a good fit for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[OWASP]] (3), [[Application Security]] (2), [[Security Testing]] (1), [[SQL]] (1)
> **CLI Commands:** python (4), ruby (3), find (1), rails (1), make (1)
> **Exercise Files:** source code (7)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** owasp (3), sql (1)
> **Analogies:** for example (1), it's like (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** you'll need (1)

#### [Code review models](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=0)** - [Instructor] Regardless of whether the secure reviews of your source code are manual or fully automated, you should begin by selecting a model that's right for your organization.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=11)** You could begin with an over-the-shoulder approach, for example.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=15)** Literally, have a security tester look over the developer's shoulder as that developer provides a casual explanation of what the code does.
>
> **[0:25](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=25)** As your testing program matures, you can move to a pass-around model, one where multiple people take a look at that code and provide their recommendations on changes that could improve the application's eventual security posture.
>
> **[0:40](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=40)** If you're ready for formal, measurable testing, then a walkthrough model might be more to your liking.
>
> **[0:47](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=47)** Have a team gather together, walk through the code as a group, and define specific changes that need to be made before that code can move forward.
>
> **[0:57](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=57)** Full automation is really the pinnacle of this testing process where test cases and tools have been defined and implemented in a way that the only time a human is involved is when someone needs to review an exception that lives outside of the defined, acceptable security parameters.
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=77)** In order to select the right model for your organization, you should revisit the considerations we discussed earlier.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=84)** You remember those, right?
>
> **[1:26](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=86)** Processes, resources, tools, timelines, and training.
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=92)** Take your knowledge of where your organization stands today and what you think they're capable of tackling and apply that knowledge as you attempt to balance the cost of achieving an appropriate level of [[Application Security]].
>
> **[1:46](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=106)** With the risk appetite of your organization's leadership, you might not be willing to take certain risks that your C-level executives consider not just tolerable, but expected.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=118)** If you really want an enterprise-grade automated code scanner, but your CFO has that money reserve for opening a new [[Microsoft Office|office]] in Albuquerque, then you might need to settle for a formal walkthrough approach until your next budget cycle.
>
> **[2:12](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=132)** Regardless of the model you choose, you should keep the [[OWASP]] [[Code Review]] guide front and center when it comes to your day-to-day code security review activities.
>
> **[2:22](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=142)** The appendix of the testing guide contains a code review checklist that you can use as a sounding board for any code review model from light touch over-the-shoulder reviews to fully automated reviews.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=156)** The checklist includes three and a half pages of pass fail questions that you can ask your developers.
>
> **[2:42](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=162)** You can supplement these questions with follow-ups, like, does your code do this?
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=168)** How?
>
> **[2:49](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=169)** Do you reuse the same code for this specific activity each time the app needs to do the same thing?
>
> **[2:56](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=176)** Reviewing the entire checklist can be time-consuming, especially the first time you introduce it, but you could always introduce it in chunks.
>
> **[3:05](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=185)** Maybe you focus on [[Cryptography]] the first time around, and then session management the next time.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=191)** Cycle through each section to keep that checklist manageable.
>
> **[3:15](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=195)** You don't want to overwhelm your developers.
>
> **[3:17](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=197)** Give them as much info as they're ready for and share the next bit when they want to know more.
>
> **[3:24](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=204)** On that note, maybe this is a good time to mention a few best practices for code security reviews.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=210)** First and foremost, don't review too much at once.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=214)** Rome wasn't built in a day and neither was a completely secure [[E-Commerce]] application.
>
> **[3:40](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=220)** Limit the number of lines and functions that you review to an amount that both the reviewers and the original developers can focus on without getting too distracted.
>
> **[3:51](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=231)** The same goes for that checklist I just mentioned.
>
> **[3:54](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=234)** Bite-sized chunks.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=237)** It's also critical that you don't publicly shame anyone.
>
> **[4:01](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=241)** I studied education for years, and trust me when I say that positive reinforcement is much more effective than public shaming.
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=249)** The goal isn't to make anyone feel bad or to beat them into submission.
>
> **[4:15](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=255)** The goal is to educate everyone involved on how to write secure code.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=260)** Finally, make an effort to ensure that the code aligns with internal standards.
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=265)** If you want people to know what's expected of them, write it down.
>
> **[4:30](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=270)** Don't assume that everyone has the same background in or passion for application security that you do.
>
> **[4:38](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=278)** Translate your knowledge into standards on which everyone in the organization can agree.
>
> **[4:45](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=285)** Speaking of application security standards, you do have one, right?
>
> **[4:49](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=289)** I hate making assumptions about whether documents like these are already in place and I caution you against doing the same if you don't have one in place.
>
> **[4:59](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=299)** The good news is that we've already covered three spectacular resources that you can use to build those standards quickly.
>
> **[5:06](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=306)** If you want to keep it lightweight, use the OWASP top 10.
>
> **[5:10](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=310)** If you're looking for a little more detail, pick and choose from the checklist in the back of the OWASP code review guide.
>
> **[5:17](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=317)** And if you're ready to bring the capability maturity model to bear, dive right into the application security verification standard.
>
> **[5:26](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=326)** Even if you already have documented internal standards in place, you could always review and refresh those standards with a little copy paste magic using one or more of these documents.
>
> **[5:38](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=338)** I don't care how you put that standard together so long as you get it out of your head and into a document that everyone in your organization can reference.
>
> **[5:48](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=348)** Actually, I take that back.
>
> **[5:50](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=350)** I do care how you put that standard together.
>
> **[5:53](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=353)** I'm an advocate of building intentional relationships among policies, standards, guidelines, and procedures, and OWASP just so happens to have some additional guidance on applying policy frameworks to your application security program.
>
> **[6:10](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=370)** Their guidance focuses on COVID, ISO, and Sarbanes-Oxley as three key influencers of your application security policy.
>
> **[6:19](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=379)** They also provide some bullet point guidance that can help bring clarity to your work around selecting a development methodology around defining coding standards and implementing source code control.
>
> **[6:31](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=391)** Take a look at OWASP's archived policy framework site when you have a second.
>
> **[6:36](https://www.linkedin.com/learning/static-application-security-testing/code-review-models?u=76281980&t=396)** I think you'll find a quick review of this guidance well worth your time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (5), [[OWASP]] (5), [[Code Review]] (4), [[Microsoft Office|Office]] (1), [[Cryptography]] (1)
> **Env Vars:** owasp (5), cfo (1), covid (1), iso (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** source code (2)
> **Cross-References:** we discussed (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Application threat modeling: STRIDE](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=0)** - [Instructor] Earlier in this course, 2 I promised to go into [[Threat Modeling]] in more detail. 3 Here's where I make good on that promise. 4 Let's start our threat modeling conversation 5 by taking a closer look at STRIDE. 6 In 2009, Praerit Garg and Loren Kohnfelder from [[Microsoft]] 7 developed a model for considering threats 8 to the confidentiality, integrity, 9 and availability of applications, 10 and the data that those applications process. 11 Their intent was to help defenders identify the threats 12 to those applications so that those developers 13 and the security teams could take necessary steps 14 to mitigate those threats before something bad happened. 15 They chose the mnemonic, STRIDE, to make it easier 16 for those defenders to remember and to apply this model. 17
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=50)** The first letter, S, 18 represents the Spoofing threat category. 19 Threats of this nature involve hijacking 20 another user's identity. 21 An example of this would be logging into an application 22 with someone else's password. 23 Spoofing threats represent a risk 24 to the authenticity of transactions within the application. 25 If an attacker logs into your online [[Banking]] app 26 using your username and password, 27 what could they do with that access? 28 Empty your bank account, set up an autopay, 29 change your password and lock you out of your own account? 30 And when considering spoofing threats, 31 you should discuss how an attacker might compromise 32 a user's credentials, 33 as well as what the attacker could do 34 with those stolen credentials. 35
>
> **[1:39](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=99)** The second letter, T, 36 represents the tampering threat category. 37 Threats of this nature involve maliciously modifying data, 38 either at-[[Representational State Transfer (REST)|rest]] or in motion. 39 An example of this would be exploiting 40 a [[SQL]] injection flaw to make unauthorized changes 41 to the database. 42 Tampering threats represent a risk 43 to the integrity of the application data. 44 Could an attacker exploit an injection flaw 45 like the one I just mentioned? 46 What about compromising data in motion? 47 Could an attacker intercept a transaction 48 destined for that online banking app 49 and change the account numbers in flight, 50 moving money into their account 51 without ever logging into the application? 52 When considering tampering threats, 53 you should discuss how an attacker 54
>
> **[2:27](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=147)** might compromise data at rest and data in motion. 55 The third letter, R, 56 represents the Repudiation threat category. 57 It might be easier to think of this 58 in a physical sense first. 59 Suppose an Amazon delivery person shows up 60 and asks you to sign for a package. 61 You refuse, but that delivery person is in a hurry, 62 so they leave the package on your doorstep anyway. 63 You then go online, 64 insist that you never received your package 65 and demand a refund. 66 Without your signature to prove 67 that you acknowledge receipt of the package, 68 Amazon may have a hard time keeping your money. 69 Now, I know that you wouldn't do something like that, 70 you're the standup person. 71 But an attacker who targets your web application, 72 someone who finds a way to trigger transactions 73
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=196)** without leaving a trail that proves 74 who did what and when, 75 those are the folks we're worried about. 76 Repudiation threats represent a risk 77 to the non-reputability of transactions. 78 Does your application process transactions 79 that require non-repudiation? 80 If so, have you protected that flow 81 from threats like these? 82 When considering repudiation threats, 83 you should discuss how an attacker 84 might trigger transactions 85 without triggering the non-repudiation controls 86 tied to those transactions. 87 The fourth letter, I, 88 represents the Information Disclosure threat category. 89 Threats of this nature involve 90 unintentionally exposing information 91 to people who shouldn't see that information. 92 This could be anything 93
>
> **[4:04](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=244)** from another user's account information, 94 to application configuration files. 95 Information disclosure threats represent a risk 96 to the confidentiality of both the application data 97 and to the configuration data. 98 An attacker who can see someone else's medical records 99 might sell that information on the dark web, 100 an incident that is clearly a reportable data breach. 101 An attacker who can access configuration files though, 102 might be able to take over the entire application. 103 Think of information disclosure threats 104 as similar to tampering threats, 105 only potentially easier to act on. 106 Instead of needing the ability 107 to change data at rest or in motion, 108 the attacker would only need the ability to read that data. 109 The fifth letter, D, 110
>
> **[4:55](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=295)** represents the Denial of Service threat category. 111 Threats of this nature involve denying access or services 112 to authorized users. 113 An example of this would be exploiting 114 the account lockout feature, 115 intentionally submitting enough failed on attempts 116 to lock a user out of the application. 117 Denial-of-service threats represent a risk 118 to the availability of the application. 119 These threats could be realized 120 by exploiting security mechanisms 121 like the one I just mentioned, 122 or by taking advantage 123 of insufficient [[Hardware]] infrastructure 124 beneath the application itself. 125 I've worked on distributed denial service incidents 126 where attackers simply send more requests 127 than the application 128 and the application infrastructure is able to handle. 129 The end result was that anyone attempting to use 130
>
> **[5:45](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=345)** that application got a timeout screen instead. 131 When considering denial-of-service threats, 132 you should discuss how an attacker might compromise 133 both application and infrastructure weaknesses 134 to disrupt service availability to legitimate users. 135 The sixth letter, E, 136 represents the Elevation of Privilege threat category. 137 Threats of this nature involve abusing privileges 138 that shouldn't have been assigned 139 to the account used by the attacker. 140 When STRIDE was originally released, 141 they chose the term, elevation, 142 although today, it's more commonly referred to 143 as escalation of privilege. 144 Elevation of privilege threats 145 represent a risk to the authorization controls 146 within the application. 147
>
> **[6:32](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=392)** An individual user should be authorized 148 to change their password and their password only. 149 But an administrator should be authorized 150 to change anyone's password. 151 If an attacker were to compromise 152 the administrative account or privilege, 153 then the attacker could take control 154 of any user's account within the application. 155 When considering elevation of privilege threats, 156 you should discuss how an attacker might compromise 157 administrative accounts or interfaces, 158 as well as how an attacker might execute commands 159 using elevated privileges. 160 If you want to use the STRIDE threat model 161 at your own organization, 162 you might start by conducting a meeting 163 where you bring pizza and soda, 164 and open the floor for anyone and everyone 165 to pitch their ideas on how they would capitalize 166
>
> **[7:22](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=442)** on one or more of these threat categories. 167 When STRIDE was first proposed, 168 the goal was to attempt to identify 20 to 40 threats 169 in a two-hour meeting. 170 Given the actual attack data 171 that's been made public 172 since STRIDE was originally released, 173 I have a hunch that you could easily 174 top 40 relevant threats within that window. 175 The trick to successfully applying 176 a threat model like STRIDE 177 is to get the right people in the room. 178 If you don't have at least one person in the room 179 who thinks like an attacker, 180 it's going to be a very boring meeting 181 and no one wants that, trust me. 182 Start with a short meeting. 183 Let the people in the room know what your goals are 184 and let the conversation go where it needs to go. 185 In my opinion, it's entirely appropriate 186
>
> **[8:11](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-stride?u=76281980&t=491)** for people to have their phones out during this meeting. 187 Let them do a few searches on [[Google]] and DuckDuckGo. 188 Challenge them to identify a threat 189 that hasn't been discussed yet. 190 Encourage them to think like attackers. 191 The end result of the exercise 192 will be that much better for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Threat Modeling]] (2), [[Banking]] (2), [[Microsoft]] (1), [[SQL]] (1)
> **Env Vars:** stride (7), sql (1)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1)
> **UI Navigation:** open the (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Application threat modeling: DREAD](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=0)** - [Instructor] Similar to STRIDE, DREAD is another [[Threat Modeling]] approach included in the [[OWASP]] [[Code Review]] Guide.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=7)** DREAD also found its origins within [[Microsoft]] although they stopped using it internally by 2008.
>
> **[0:14](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=14)** Keep in mind though that the DREAD creators weren't pushing for an academically vetted international standard for quantifying and qualifying risks; they were just looking for a better way to manage discussions around risks and threats, and they kept DREAD deliberately simple in an effort to accomplish that goal.
>
> **[0:35](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=35)** Since IT and security professionals love our acronyms, they developed their own five-character mnemonic to make their threat modeling approach easier to remember.
>
> **[0:46](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=46)** The first D in DREAD represents the damage attribute.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=51)** If you're familiar with the [[NIST]] risk assessment model, this DREAD attribute maps directly to impact.
>
> **[0:58](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=58)** Its primary concern is how bad things would really be if an attacker was successful.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=64)** The OWASP Code Review guide suggests you ask three questions when considering this attribute: How big would the damage be if the attack succeeded?
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=74)** Can an attacker completely take over and manipulate the system?
>
> **[1:18](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=78)** And can an attacker crash the system?
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=82)** The R in DREAD represents the reproducibility attribute.
>
> **[1:27](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=87)** Your primary concern here is how easy it is for an attacker to be successful.
>
> **[1:33](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=93)** In this language, this attribute maps to likelihood.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=97)** The OWASP Code Review Guide suggests that you ask two questions when considering this attribute: How easy is it to reproduce an attack to work and can the exploit be automated?
>
> **[1:51](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=111)** The E in DREAD represents the exploitability attribute.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=116)** Your primary concern here is the effort required on the attacker's part.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=122)** Attackers often look for the path of least resistance and successfully exploiting a lower severity weakness might give them the foothold they need to launch more devastating attacks.
>
> **[2:15](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=135)** The OWASP Code Review Guide suggests that you ask two questions when considering this attribute: How much time, effort, and expertise is needed to exploit this threat?
>
> **[2:27](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=147)** And does the attacker need to be authenticated?
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=151)** The A in DREAD represents the affected user's attribute.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=156)** Your primary concern here is the audience that will be impacted by a successful attack.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=163)** An attack that compromises a user account would be bad but not nearly as bad as an attack that compromises an administrator account.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=172)** The OWASP Code Review Guide suggests that you ask two questions when considering this attribute: If a threat were exploited, what percentage of users would be affected?
>
> **[3:04](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=184)** And can an attacker gain administrative access to the system?
>
> **[3:10](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=190)** And the second D in DREAD represents the discoverability attribute.
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=196)** Your primary concern here is whether the attacker will even realize that this is a viable attack vector.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=202)** While security by obscurity is by no means a definitive solution, that obscurity could buy you the time you need to remediate a vulnerability before an attacker can exploit it.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=216)** The OWASP Code Review Guide suggests that you ask one question when considering this attribute: How easy is it for an attacker to discover this threat?
>
> **[3:46](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=226)** I'm not going to go into the detailed formula that the DREAD creators devised to accompany this threat model because it's just unnecessarily complex; that the better takeaway for you is that you could use DREAD in a quantifiable way to help you prioritize your remediation efforts.
>
> **[4:04](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=244)** For example, you could develop numerical scores for each attribute based on criteria unique to your company and then use that model to apply a specific score to an identified threat.
>
> **[4:18](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=258)** You can then use those scores to make decisions about how you're going to address those findings and when you intend to apply those fixes.
>
> **[4:27](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=267)** Because of the Microsoft connection, the original formula was intended to help developers determine when to wait for the next release to fix the flaw, when to issue a service pack, and when to release a high-priority bulletin.
>
> **[4:42](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=282)** The beauty of threat modeling tools like this one is that you can adapt it to your needs; keep the foundation in place, but adjust the details to match your organization.
>
> **[4:54](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=294)** As long as you're taking information you can use from these threat modeling resources and using them to improve the security of your source code, you're doing what you set out to do.
>
> **[5:05](https://www.linkedin.com/learning/static-application-security-testing/application-threat-modeling-dread?u=76281980&t=305)** You're one step closer to ensuring that you've built security into your applications from the very beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (6), [[Code Review]] (6), [[Threat Modeling]] (4), [[Microsoft]] (2), [[NIST]] (1)
> **Env Vars:** dread (12), owasp (6), stride (1), nist (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1), for example (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Code review metrics](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=0)** - [Narrator] I mentioned earlier in this course that you can't effectively manage your [[Application Security]] efforts without the right measurements.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=7)** This is where metrics come into play.
>
> **[0:11](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=11)** In order to determine the right metrics for your program, you need to start by identifying your audience.
>
> **[0:19](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=19)** Executives are expected to make strategic decisions about their area of the business and to ensure that the business is both healthy and growing under their leadership.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=29)** If you're sharing application security testing minutia with your execs, then I hate to break it to you, but you might be doing it wrong.
>
> **[0:38](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=38)** Executives want to know if the value from your application security testing activities exceeds the cost of that activity.
>
> **[0:47](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=47)** If you're getting your money's worth, great.
>
> **[0:50](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=50)** If not, then you need to reconsider your approach.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=53)** Metrics around cost and value will really resonate with executives.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=59)** Execs also want to know if you need them to make a decision.
>
> **[1:02](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=62)** Should you spend more money or less money on your testing activity?
>
> **[1:06](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=66)** Do you have enough people?
>
> **[1:08](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=68)** Do you have the right tools?
>
> **[1:10](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=70)** When presenting metrics to executives, you'd better be ready to address these questions.
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=77)** As you're developing application security metrics for your executives, look for opportunities to tie your work into your maturity efforts.
>
> **[1:26](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=86)** If the organization has decided on a higher level of security maturity, build a clear, concise mapping between your application security program and the organization's overall security maturity targets.
>
> **[1:43](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=103)** Managers spend their time translating strategic goals into tactical decisions.
>
> **[1:49](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=109)** It's their job to ensure that their teams are executing tasks in a way that's going to achieve the strategic goals laid out by the executive team.
>
> **[1:59](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=119)** When preparing metrics for a management audience, think in terms of resource allocation.
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=126)** Take some of your high-level metrics around cost, and break them down into more detail.
>
> **[2:12](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=132)** How do you know you need more people?
>
> **[2:14](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=134)** How many lines of code are you reviewing with your automated source code security analyzers?
>
> **[2:20](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=140)** Better yet, what percentage of an application's source code is left unchecked before that code is migrated to production?
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=150)** In addition to more details around resource management, managers also love metrics around compliance with policies and standards.
>
> **[2:39](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=159)** How many applications meet your logging and monitoring requirements?
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=163)** How many applications have two-factor authentication enabled?
>
> **[2:47](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=167)** You can roll up all of these individual metrics into a larger metric around how many applications are considered compliant with corporate standards.
>
> **[2:58](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=178)** Developers are more interested in ensuring that they've covered all the necessary requirements.
>
> **[3:05](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=185)** There's the coding stuff that they want to do and the security stuff that they need to do.
>
> **[3:11](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=191)** As long as the security stuff is covered, then they can turn their attention back to building and creating really cool apps.
>
> **[3:19](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=199)** Where a manager is going to be more interested in the percentage of compliant apps metric, a developer will be more interested in the low-level gaps beneath that umbrella metric.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=210)** Which apps don't have effective logging and monitoring controls?
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=214)** What's it going to take for us to close that gap for those applications?
>
> **[3:39](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=219)** For this reason, application security vulnerabilities are also a key metric that developers should be interested in.
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=227)** If, for example, an application code base is riddled with dozens of injection flaws, then someone on the development team needs to read the [[OWASP]] Injection Prevention Cheat Sheet.
>
> **[4:01](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=241)** OWASP launched a project to help organizations define and capture metrics around the security of the organization's applications.
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=249)** The OWASP Security Qualitative Metrics Project contains 230 unique application security metrics grouped into six categories, architecture, design, and implementation, technologies, environment, code generation, development methodologies, and business logic.
>
> **[4:33](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=273)** If you want to use this resource to accelerate the development of your own metrics, you could pick and choose the individual metrics that are most meaningful to your organization and to your intended audience.
>
> **[4:47](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=287)** OWASP also host an archived Application Security Guide for CISOs Project.
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=293)** This Lab project resulted in a 106-page PDF that provides extensive guidance to security executives from a governance, risk, and compliance perspective.
>
> **[5:06](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=306)** If you jump right to Part IV, you'll find there's a Metrics category that OWASP recommended CISOs focus on, including application security process metrics, application security risk metrics, and security in SDLC management metrics.
>
> **[5:24](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=324)** In my experience, there isn't one definitive list of application security metrics that's appropriate for everyone.
>
> **[5:32](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=332)** Your best bet is to tap into resources like those I've shared here and ideally combine them with the application security verification standard.
>
> **[5:42](https://www.linkedin.com/learning/static-application-security-testing/code-review-metrics?u=76281980&t=342)** As long as you think through the application security metrics that matter most to your target audiences, you'll be able to put together a metric set that helps those audiences effectively communicate their expectations and their efforts with one another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (13), [[OWASP]] (5)
> **Env Vars:** owasp (5), pdf (1), sdlc (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** source code (2)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Demo: Codacy](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=0)** - [Instructor] Codacy is a static code analyzer designed to improve your team's code quality in real time.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=7)** It enables you to automate almost all your manual disconnected static code security analysis test.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=15)** It also enables you to coordinate your testing and remediation activity with your developers directly, which is a huge benefit.
>
> **[0:23](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=23)** Codacy offers two options for gathering metrics, Codacy Quality and Codacy Pulse.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=29)** Quality enables you to gather code quality metrics.
>
> **[0:33](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=33)** You authenticate to either [[GitHub]], [[Bitbucket]], or GitLab.
>
> **[0:37](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=37)** You authorize Codacy to analyze your code repositories, and the product generates a report that captures a broad set of metrics.
>
> **[0:45](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=45)** If you choose to fully integrate the product into your CI/CD pipeline, Codacy can even enforce coding standards on each pull request.
>
> **[0:54](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=54)** Pulse enables you to capture engineering team metrics.
>
> **[0:58](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=58)** This tool tracks things like deployment frequency, lead time for changes, time to recover, and change failure rate.
>
> **[1:06](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=66)** We'll be focusing on Codacy quality for this demo.
>
> **[1:11](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=71)** Once you authorize Codacy to analyze your code, it's going to do all the heavy lifting for you.
>
> **[1:16](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=76)** It starts by cloning the repo in question, and then detecting the programming languages in use so it can select the right tools for the job.
>
> **[1:26](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=86)** Next, it calculates quality metrics using a combination of built-in metrics and thresholds that you can specify.
>
> **[1:33](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=93)** Then it runs code patterns looking for issues before finalizing its analysis of your code.
>
> **[1:40](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=100)** Once that analysis is complete, you can navigate to the Codacy dashboard and drill down on any security issues that you might have detected in your code.
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=110)** Let's take a minute and log into Codacy and see what the tool can do firsthand.
>
> **[1:57](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=117)** To log into Codacy, you'll navigate to [Codacy.com](https://Codacy.com) and look for the Log-in option in the menu bar at the top.
>
> **[2:07](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=127)** Now, once you click this option, it's going to ask you for the code repository location.
>
> **[2:12](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=132)** And what I've done is provided it with my GitHub credentials, so let's see what that login looks like.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=139)** Once Codacy logs into your repo, you explicitly grant the tool the ability to see specific public repositories.
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=150)** Now here you can see a handful of repos that I've already added.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=155)** We'll actually walk through the process of adding a repo, specifically the [[OWASP]] Vulnerable Web Application.
>
> **[2:44](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=164)** Now, this is important, here you can see that the OWASP repo is public, and, again, Codacy can only see public repos.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=172)** But you are not logged in as OWASP, ideally, you are logged in as you, so you'll come over here to create a fork of this repository.
>
> **[3:02](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=182)** And creating a fork simply makes a copy of that entire repo under your user account.
>
> **[3:10](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=190)** Now it does take a few seconds.
>
> **[3:12](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=192)** But once we have the repo forked, now you've got the ability to scan this public repository with Codacy.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=202)** Back in the Codacy tool, if you click Add Repository, you'll see all of the repos listed under your GitHub account flagged as public that you have not yet added to Codacy.
>
> **[3:37](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=217)** And right here is that Vulnerable-Web-Application repo that we just selected.
>
> **[3:43](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=223)** And when we click Add, the first thing Codacy is going to check for is an automated app that enables GitHub to send a copy of this code to Codacy for analysis.
>
> **[3:56](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=236)** When you click Install the App, you'll be prompted with the permissions that it requires.
>
> **[4:02](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=242)** And we don't want to grant it all repository access, principle of least privilege, only give this access to the repo you want to scan.
>
> **[4:10](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=250)** And we are going to select the Vulnerable-Web-Application repo that we just added.
>
> **[4:18](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=258)** So when you select that from the list and click Save, back in the Codacy tool, if we go back to the Repositories tab and click Refresh, you can see that it's in the process of adding that repo.
>
> **[4:37](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=277)** Let's click on the Add Repo button again, and under Vulnerable-Web-Application, now when you click Add, it's going to go right through the import process.
>
> **[4:48](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=288)** Now, again, in order for Codacy to work, it needs to make a copy of that code into the Codacy tool.
>
> **[4:55](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=295)** So what it's going to do is it's going to make a call out to GitHub, click Go to Repository, and it's going to first make a clone of that repo in Codacy.
>
> **[5:08](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=308)** Then it's going to go through that repo and determine all the languages that were used to write the code.
>
> **[5:15](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=315)** This is one of the reasons that identifying the programming languages in play is so important.
>
> **[5:20](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=320)** From there, it's going to start calculating the quality metrics.
>
> **[5:24](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=324)** In other words, it's going to look for security issues in the code.
>
> **[5:29](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=329)** It's going to look for code patterns, because, again, Codacy is not just a security tool, but it looks for a number of items.
>
> **[5:37](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=337)** And then, it's going to present that finalized analysis.
>
> **[5:43](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=343)** Once Codacy completes its analysis, it's going to take you to that analysis results page.
>
> **[5:51](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=351)** And you can see here for the OWASP Vulnerable Web Application, we've got a number of issues.
>
> **[5:58](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=358)** Codacy interprets it as 317%.
>
> **[6:03](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=363)** Let's scroll down and see what they're finding here.
>
> **[6:08](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=368)** All told, there are 531 code style issues, 272 security issues, and two issues that are flagged as error prone.
>
> **[6:20](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=380)** For the purpose of this demo, we're just going to focus on security.
>
> **[6:24](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=384)** So click on Security.
>
> **[6:28](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=388)** For the first vulnerability in the list, we can see the location of the vulnerability, this particular [[PHP]] file.
>
> **[6:35](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=395)** A description of the vulnerability, that the output should be run through an escaping function, and a criticality.
>
> **[6:43](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=403)** Here this one is flagged as critical versus the minor issue that appears next in the list.
>
> **[6:49](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=409)** So let's start with the critical issue.
>
> **[6:51](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=411)** Open this up, and the estimated time to fix this issue, five minutes.
>
> **[6:58](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=418)** Codacy points the developer to the specific line of code with the vulnerability, a brief explanation in the tool as to why this is an issue, and a link to more details on the Codacy website that can serve as [[Real-Time]] training for developers when issues like this are identified.
>
> **[7:18](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=438)** Now, as you can imagine, with over 500 security issues identified by this tool, it would fall to you, the security tester, to help prioritize the items that need fixed.
>
> **[7:31](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=451)** Don't just throw this over the wall to the developers and expect them to do everything all at once.
>
> **[7:37](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=457)** Start with the most critical issues.
>
> **[7:40](https://www.linkedin.com/learning/static-application-security-testing/demo-codacy?u=76281980&t=460)** Start setting owners, deliverables, and due dates for the items that need to be fixed, and then make yourself available as a resource to the developer to help them resolve the issue and secure the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[OWASP]] (4), [[Bitbucket]] (1), [[PHP]] (1), [[Real-Time]] (1)
> **UI Navigation:** navigate to (2), click on (2), select the (1), in the menu (1), go to (1)
> **Tools:** github (5), bitbucket (1), gitlab (1)
> **CLI Commands:** make (4), cd (1), php (1)
> **Env Vars:** owasp (4), php (1)
> **Definitions:** is a  (2), is an  (2), in other words (1)
> **URLs:** [codacy.com](https://codacy.com) (1)
> **Cross-References:** go back to (1)

#### [Demo: SonarQube](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=0)** - [Instructor] SonarQube is another code quality tool that includes [[Security Testing]] and analysis.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=6)** It supports over 30 different programming languages as well as multiple build systems and [[Continuous Integration (CI)|continuous integration]] systems.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=15)** You can learn more about SonarQube at [sonarqube.com](https://sonarqube.com).
>
> **[0:20](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=20)** SonarQube takes a governance based approach to managing your [[Application Security]] portfolio with a focus that goes above and beyond traditional security.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=30)** SonarQube also scores applications on things like releasability, reliability, and maintainability.
>
> **[0:38](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=38)** SonarQube maintains four distinct additions of their solution.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=43)** The Community Edition is free.
>
> **[0:45](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=45)** While the commercial editions Developer, Enterprise and Data Center are all scoped and priced based on your language support and high availability requirements.
>
> **[0:56](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=56)** The Community Edition price tag of free is a lot more palatable than the hefty price tag tied to the Data Center edition.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=64)** So I recommend you start with the Community Edition before deciding whether or not you need their commercial solution.
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=72)** If you don't want to install anything on your laptop or your internal network, you could use SonarCloud instead, their [[SaaS|software as a service]] offering.
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=82)** You can log into SonarCloud using your [[GitHub]], [[Bitbucket]], GitLab, or [[Microsoft Azure|Azure]] [[DevOps]] account.
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=89)** That Azure integration is one of the most notable differences between SonarCloud and Codacy.
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=96)** But just like Codacy, SonarCloud lets you scan open source projects for free, and that's exactly what we're going to do with this next demo.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=105)** Let's log into SonarCloud and see what it looks like when we analyze an open source project.
>
> **[1:52](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=112)** When you navigate to [sonarqube.com](https://sonarqube.com), it will redirect you to the Sonar Cube Marketing website, which ultimately gives you the opportunity to try out their [[SaaS]] product.
>
> **[2:05](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=125)** That brings you to the login page.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=128)** Now here you can see 1-Click Signup.
>
> **[2:10](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=130)** This is a way to help you connect whatever repo you're using to the SonarCloud environment.
>
> **[2:18](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=138)** As I mentioned, I'm using GitHub, and when you click on the GitHub link, you're prompted to authorize the SonarCloud app to have access to your repositories.
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=150)** Now, when you do this, you still have to explicitly add individual repositories.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=156)** You can see here [sonarcloud.io](https://sonarcloud.io), this is the application interface that I've added a couple of repos already, and if I wanted to add another one, the plus icon in the upper right hand corner, and then analyze new project, lets you add individual repos.
>
> **[2:54](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=174)** But let's take a look at this JavaVulnerableLab repo I'd already added.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=179)** This repo contains almost 3,000 lines of code and it's found 37 bugs, 24 vulnerabilities, a number of what it calls hotspots.
>
> **[3:12](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=192)** I'll talk about that in a moment.
>
> **[3:14](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=194)** And then code smells and duplications, because again, not just a security tool, this is meant to be a developer-centric tool for improving the quality of your code.
>
> **[3:27](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=207)** And when you click into the analyzed repo you get that same information presented in a different way.
>
> **[3:35](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=215)** But I want to draw your attention to this menu at the top, summary, issues, security hotspots, and so on.
>
> **[3:41](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=221)** If you click on issues, it's going to show you all of the bugs, vulnerabilities and code smells that were detected upon that initial analysis.
>
> **[3:54](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=234)** And when you click on vulnerability this is going to take you to things as a security tester that you're likely to be interested in.
>
> **[4:02](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=242)** Now, if we wanted to further filter this we could actually select specific severity levels.
>
> **[4:08](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=248)** But here in this repo, all of the issues identified the security vulnerabilities are considered minor.
>
> **[4:17](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=257)** And when we look over here on the right, we're seeing a lot of this following exception that could be thrown, following exception.
>
> **[4:26](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=266)** What's happened here is that the developers included an error processing function in the code but they didn't add enough information to avoid oversharing.
>
> **[4:41](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=281)** When you click on one of those items, for example, it takes you right to the line of code, line 89 says, processRequest(request, response).
>
> **[4:50](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=290)** Now, what should happen in a more security conscious shop is that you should have a try-catch statement in the [[Java]] code where it's going to try to do this action.
>
> **[5:02](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=302)** But if something fails, instead of just throwing all of the error messages on screen, you can have the application take a specific action, maybe redirect the the user to a specific page, maybe display a specific error message.
>
> **[5:19](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=319)** And so every one of these issues, these vulnerabilities that were flagged as minor, would actually in the [[OWASP]] Top 10 be considered information leakage or disclosure.
>
> **[5:32](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=332)** But if you go over to security hotspots, this is where you're more likely to find the more significant vulnerabilities.
>
> **[5:40](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=340)** For example, you can see that there are four references here to password detected.
>
> **[5:46](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=346)** Make sure this is not a hard coded credential.
>
> **[5:49](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=349)** What SonarCloud has found is that this application in users.xml actually contains hard coded passwords.
>
> **[6:00](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=360)** This is something that with secrets management, key vaults and password managers should not be happening anymore because if the attacker ever gets access to this code it means that the attacker would have access to credentials that they could use to target users or administrators in your environment.
>
> **[6:21](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=381)** So under security hotspots SonarQube is going to show you all of the vulnerabilities.
>
> **[6:27](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=387)** Again, it's going to prioritize them based on severity.
>
> **[6:31](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=391)** It's going to take you right to the line of code where that vulnerability occurs and then give developers an understanding of, well, why is this a risk?
>
> **[6:41](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=401)** How do I assess the risk to determine if it applies to us?
>
> **[6:45](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=405)** Most importantly, how do I fix it?
>
> **[6:49](https://www.linkedin.com/learning/static-application-security-testing/demo-sonarqube?u=76281980&t=409)** And I've worked with organizations who've implemented this tool into their workflows so that they're able to take these findings and send them directly to a bug tracking system like [[Jira]], enabling developers to quickly identify and remediate the more significant vulnerabilities that represent risk to your application and to your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Microsoft Azure|Azure]] (2), [[Security Testing]] (1), [[Continuous Integration (CI)|Continuous integration]] (1), [[Application Security]] (1)
> **Tools:** github (3), bitbucket (1), gitlab (1), jira (1)
> **UI Navigation:** click on (3), navigate to (1)
> **URLs:** [sonarqube.com](https://sonarqube.com) (2), [sonarcloud.io](https://sonarcloud.io) (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** find (1), make (1)
> **File Paths:** users.xml (1)


### 4. Static Testing for the OWASP Top 10 (2021)

[↑ Back to Table of Contents](#table-of-contents)

#### [The OWASP Top 10](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=0)** - [Narrator] It's easy to fall into a trap of using all the resources we've covered so far to build out a testing program so comprehensive that it will quickly overwhelm both the testers and the developers.
>
> **[0:14](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=14)** Your goal is to improve the security of your applications, right?
>
> **[0:18](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=18)** Then don't try to do too much at once.
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=21)** Walk, then run.
>
> **[0:23](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=23)** A great way to get your feet under you is by focusing on the [[OWASP]] Top 10.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=30)** The OWASP Top 10 project is hands down, the most mature, most popular project in the OWASP Project library.
>
> **[0:39](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=39)** Well, this began as a thought experiment in the early two 2000s.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=44)** This list of the 10 most critical web app security risks has become the cornerstone of the [[Application Security]] industry.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=53)** Updated every three years, the top 10 list is first released in English and then translated into multiple languages, making it accessible to developers and security professionals all around the world.
>
> **[1:07](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=67)** Given the increasing popularity of the list over the years, you can now find tests and reports based on the OWASP Top 10 built into a significant number of [[Web Application Security]] tools, both commercial and open source.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=84)** While the top 10 web application security risks works well as a standalone project, there are two related projects that you should consider as you're building out your foundational testing program.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=97)** The OWASP Mobile Application Security project came into being as mobile devices became more prevalent among consumers and enterprises alike.
>
> **[1:47](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=107)** Many of OWASPs' original projects were designed for web applications, but what about mobile apps?
>
> **[1:54](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=114)** The security risks that accompany mobile apps are noticeably different from the risks related to web applications.
>
> **[2:01](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=121)** OWASP identified a need to educate security professionals and developers on those differences and a top 10 list for mobile developers was a logical starting point.
>
> **[2:12](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=132)** But that top 10 list is only one piece of the puzzle.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=136)** The OWASP Mobile Application Security project also contains a mobile application security testing guide, a mobile application security verification standard, and a mobile application security checklist.
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=151)** OWASP also recognized that the top 10 lists were reactive.
>
> **[2:36](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=156)** They start with a vulnerability and then work their way back to the fix.
>
> **[2:41](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=161)** But what if you could start with security in mind and avoid the introduction of those vulnerabilities entirely?
>
> **[2:47](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=167)** That's the intent behind the OWASP Proactive Controls Project.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=172)** A developer-centric resource designed to help devs build security into their apps in the first place.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=179)** Keep these resources in your hip pocket for now.
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=181)** We'll cover them in more detail in another course.
>
> **[3:05](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=185)** Again, you don't want to overcomplicate things.
>
> **[3:09](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=189)** For now, you'll want to focus on simple and straightforward, get a few successes under your belt, and then build on those successes.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/the-owasp-top-10-22186228?u=76281980&t=198)** Let's look at how to perform static testing for each of the web application security risks listed in the OWASP top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (10), [[Application Security]] (6), [[Web Application Security]] (3)
> **Env Vars:** owasp (10)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [A1: Broken access controls](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=0)** - [Instructor] The most significant risks in the [[OWASP]] top 10 list are broken access control flaws.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=7)** You learned about broken authentication earlier on keeping unauthorized users out of the application but you also need to make sure the application enforces the right security on users after they successfully log in.
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=22)** An authenticated user should only have access to their individual account.
>
> **[0:27](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=27)** If access controls aren't properly enforced though, an attacker could potentially have access to functions and data that belong to another user.
>
> **[0:38](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=38)** While automated tools might be able to detect whether access controls are missing, you really need to rely on [[Manual Testing]] to make sure that the access controls are properly aligned with your business rules.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=51)** That lack of automated detection is one of the reasons it's so easy for broken access controls to slip into an application.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=59)** Automated scanners have no way of knowing whether Dan in accounting should have access to the self-service password reset page, or whether Tiffany in IT should have the ability to reset passwords for accounts other than hers.
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=74)** You might have business rules that say no one can reset their own passwords but configuring a scanner to check those rules, good luck.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=84)** You can hardly blame the developers for overlooking these business rules if they don't have an access management framework to follow.
>
> **[1:31](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=91)** Every organization is a little bit different and it can be really challenging to come up with who should have access to what without some internal framework to keep everyone on the same page.
>
> **[1:43](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=103)** The likelihood of flaws like these ending up in your app is pretty high.
>
> **[1:48](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=108)** The damage an attacker can inflict by exploiting broken access flaws can vary from annoying to very costly.
>
> **[1:57](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=117)** An authenticated attacker could potentially view sensitive files, they could make changes to restricted data, or give themselves privileges that should never have been assigned to their account.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=128)** I once conducted a penetration test against a publicly available web app that allowed users to self-register.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=136)** Every user account was identical in its permissions.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=139)** Users could see their own stuff, manage their own account, and that's it.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=144)** During my testing, I found that I could change my user identifier after I was logged in.
>
> **[2:31](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=151)** That allowed me to impersonate other users.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=155)** I kept changing that identifier until I found an administrative user account and I used those privileges to take over the entire application.
>
> **[2:44](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=164)** Remember, just because an automated scanner doesn't find any weaknesses like these, doesn't mean that those weaknesses aren't there.
>
> **[2:54](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=174)** For static testing, the best place to start is to review the design documentation.
>
> **[3:00](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=180)** You need to understand what access management considerations were baked into the app's design before planning any other test for these flaws.
>
> **[3:09](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=189)** It all comes back to that access management framework.
>
> **[3:12](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=192)** That framework will be the measuring stick that you use to determine whether user rights are appropriate throughout the application.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=201)** Role-based access controls go a long way toward helping you identify broken access controls.
>
> **[3:27](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=207)** Using your framework as a guide, you can get as detailed as you'd like regarding who has access to what.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=214)** A matrix that shows exactly which pages a role can access, and which [[Forms]] and buttons on that page a particular role can use would be truly magical.
>
> **[3:46](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=226)** These access rights are going to map back to either an internal access management engine or to an external directory.
>
> **[3:54](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=234)** Personally, I'm a fan of the latter.
>
> **[3:57](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=237)** Mapping to a directory has a broader positive identity and access management impact, but either one will work.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=245)** As the tester though, you need to know which one is in play for the app that you're testing.
>
> **[4:11](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=251)** Then don't forget about the APIs.
>
> **[4:13](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=253)** At a minimum, you should check to see how the application manages API access to http methods like PUTs, POSTs and DELETEs.
>
> **[4:26](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=266)** By approaching your application design with a default deny mindset, you're much more likely to prevent broken access control flaws from occurring.
>
> **[4:35](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=275)** You can compliment this by reusing existing access control mechanisms.
>
> **[4:40](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=280)** Again, role-based access controls are your friend.
>
> **[4:45](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=285)** Check to see if the web server has been configured to disabled directory listing.
>
> **[4:51](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=291)** This is on the web server administrator, not the developer, but you need to test for it regardless.
>
> **[4:58](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=298)** Have the developer and the security team discuss logging and monitoring in detail.
>
> **[5:03](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=303)** It's up to the developer to implement the right level of logging, but the security team is going to be monitoring those logs and taking appropriate action.
>
> **[5:13](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=313)** Not only does logging and monitoring have immediate security benefit, but there's a good chance you have compliance requirements around logging and monitoring that need to be addressed.
>
> **[5:23](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=323)** Regarding API access, turn on rate limiting.
>
> **[5:27](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=327)** If you want to get ahead of attacks from automated tools, rate limiting API and controller access is a great control.
>
> **[5:37](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=337)** The OWASP Proactive Controls projects includes a control dedicated to access management.
>
> **[5:43](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=343)** This control includes six access control design principles that you can use early on to reduce the risk of these vulnerabilities ending up in your source code.
>
> **[5:54](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=354)** And check out the OWASP Authorization Cheat Sheets.
>
> **[5:57](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=357)** This resource will serve as a crash course for your developers on how to build authorization controls into their apps.
>
> **[6:05](https://www.linkedin.com/learning/static-application-security-testing/a1-broken-access-controls?u=76281980&t=365)** It explains concepts like enforcing lease privilege, denying by default, and validating permissions on every request in simple, straightforward language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Manual Testing]] (1), [[Forms]] (1)
> **Env Vars:** owasp (3), api (3)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [A2: Cryptographic failures](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=0)** - [Narrator] The second set of risks in the [[OWASP]] top 10 list are cryptographic failures.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=6)** If an attacker is targeting your application, then chances are the attacker wants access to the data that you've hidden behind login screens and restricted authorized users.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=17)** If, however, you've left any gaps in your data protection controls, the attacker could potentially steal that data without exploiting injection flaws or broken access controls.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=30)** As an example, if your application doesn't encrypt data while it's traveling from the end user's client to the server then an attacker could potentially use an adversary in the middle attack to steal that data in transit.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=44)** If you've got things like passwords or financial account numbers or healthcare data stored in plain text on your servers, then an attacker who finds a way to navigate to those files can steal that data without much effort.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=59)** And even if you've encrypted data at [[Representational State Transfer (REST)|rest]] and data in motion, you should still consider the risk that an attacker could gain access to that encrypted data.
>
> **[1:09](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=69)** An attacker could potentially exploit weaknesses in your encryption implementation and get to the sensitive data that you are trying to protect, especially in light of the advances in [[Quantum Computing]].
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=82)** The easiest way for a sensitive data exposure flaw to end up in your web application is if encryption isn't listed as one of the requirements in the early design and planning discussions.
>
> **[1:34](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=94)** This includes encrypting data in transit while it travels between client and server, and encrypting data at rest, while it resides on disk.
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=104)** The second easiest way to introduce these flaws is to require encrypting without understanding how to properly implement encryption controls.
>
> **[1:54](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=114)** Encryption can be tricky and it's easy to implement it in a way that accidentally exposes the data to compromise.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=122)** Consider this question, what's the difference between encryption, hashing and encoding?
>
> **[2:09](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=129)** Encrypted data can be decrypted with the right key but hash data cannot be de hashed.
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=137)** It can only be compared to another value generated with the same hash function and encoded data whether ASCII or Hex or Base64 can be reverted to its original plain text value without any keys at all.
>
> **[2:34](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=154)** Each mechanism for protecting sensitive data comes with varying levels of overhead and security and your development team needs to consider these differences when determining which approach to use.
>
> **[2:47](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=167)** When considering sensitive data exposure flaws, the worst case scenario is often a data breach.
>
> **[2:54](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=174)** The entire reason developers spend time implementing encryption and hashing functions is because the data protected by those functions needs to be protected from people who aren't authorized to see it.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=188)** Aside from all the costs and negative publicity associated with the data breach, these flaws could also lead to compliance violations and fines.
>
> **[3:17](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=197)** [[Privacy]] laws like GDPR, CCPA and PIPEDA carry some hefty fines for organizations who leave personally identifiable information or PII exposed and the HIPAA laws in the US can decimate a business with fines following a data breach of electronic protected health information or EPHI.
>
> **[3:42](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=222)** From a static [[Application Security]] testing perspective, a data flow diagram will be invaluable here.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=230)** Ask the developers how sensitive data enters the application, how that data moves from system to system internally, including backups and how that data is transferred to other applications or [[Databases]], both internally and externally.
>
> **[4:08](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=248)** Once you have a graphical representation of that data flow, highlight all the areas where that data is unencrypted.
>
> **[4:15](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=255)** Either rest or in motion.
>
> **[4:17](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=257)** Look for unencrypted network protocols.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=260)** Does the app use HTTP or HTTPS?
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=265)** Does it use FTP or an encrypted alternative like FTPS or SFTP?
>
> **[4:32](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=272)** These are the first areas an attacker is likely to go after.
>
> **[4:36](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=276)** Next, look for calls to encryption, hashing and encoding functions during your source code security reviews, especially when it comes to storing data at rest.
>
> **[4:47](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=287)** How are passwords stored?
>
> **[4:50](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=290)** What about account numbers?
>
> **[4:52](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=292)** You need to compare your findings to your knowledge of mechanisms with known weaknesses.
>
> **[4:57](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=297)** A quick web search on weak encryption [[Algorithms]] will provide you with more up-to-date information on the subject than you could possibly use, and if a developer tells you "It's okay, I created my own encryption algorithm," automatically consider that a finding.
>
> **[5:15](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=315)** Until an algorithm has been publicly vetted, you have little to no assurance that it can't be broken.
>
> **[5:24](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=324)** If you are going to protect sensitive data appropriately, you need to define what the term sensitive means to your organization.
>
> **[5:32](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=332)** The best starting point for this discussion is your [[Data Classification]] policy.
>
> **[5:37](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=337)** That policy should define what you need to protect and you should have related standards and procedures that document exactly how your technical controls will comply with that policy.
>
> **[5:49](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=349)** If this documentation isn't in place today, write it.
>
> **[5:53](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=353)** One of the first data classification policies I ever used, and I'm not kidding, here, was one sentence.
>
> **[6:00](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=360)** Credit card data must be encrypted.
>
> **[6:03](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=363)** Now, that was far from perfect, but it was a start.
>
> **[6:08](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=368)** Another easy way to address this risk is to avoid any unnecessary storage or transmission of sensitive data.
>
> **[6:17](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=377)** If it isn't there for the attackers to go after then you've already hampered their plans.
>
> **[6:22](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=382)** For those areas where you do need to store and transmit sensitive data, encrypt everything.
>
> **[6:29](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=389)** Don't assume that just because data is on the internal network that it's safe.
>
> **[6:33](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=393)** I've worked on enough penetration tests to tell you that once an attacker is on the internal network they're like kids in a candy store.
>
> **[6:41](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=401)** They go after everything they can find.
>
> **[6:45](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=405)** Disable the caching of sensitive data to ensure that it can't be extracted from the cach either and use salted hashing functions when protecting passwords.
>
> **[6:55](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=415)** OWASP has multiple cheat sheets that you might be interested in here, including transport layer protection, user [[Privacy Protection]], password storage and cryptographic storage.
>
> **[7:08](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=428)** In control 8 of the OWASP Proactive Controls project, emphasizes the importance of classifying data and of encrypting data, both at rest and in transit.
>
> **[7:20](https://www.linkedin.com/learning/static-application-security-testing/a2-cryptographic-failures?u=76281980&t=440)** It also encourages defined processes around key lifecycle management and around application secrets management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (5), [[OWASP]] (3), [[Data Classification]] (2), [[Quantum Computing]] (1), [[Privacy]] (1)
> **Env Vars:** owasp (3), ascii (1), gdpr (1), ccpa (1), pipeda (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)

#### [A3: Injection](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=0)** - [Teacher] The third set of risks in the [[OWASP]] top 10 list are injection flaws.
>
> **[0:05](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=5)** When an attacker sends untrusted data to a backend interpreter, something like an OS command line interpreter or a database or an LDAP directory the interpreter has to decide what to do with that data.
>
> **[0:20](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=20)** The only problem is that interpreters can't decide that's not their job.
>
> **[0:26](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=26)** If they receive a command, they're going to act on it.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=30)** That's why it's so important for the developers to make sure that the only commands that make it to those interpreters are commands that the developers trust.
>
> **[0:39](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=39)** Attackers seeking to exploit injection flaws are going to go after any and every part of the application that looks like it interacts with an interpreter on the backend.
>
> **[0:51](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=51)** Common attack vectors include environment variables, application parameters, web services, and even the users themselves.
>
> **[1:01](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=61)** If an application allows users to enter data and let's face it, most of them do, then they're at risk.
>
> **[1:07](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=67)** Developers can only control so much.
>
> **[1:11](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=71)** As soon as they start letting users enter data into the application, all bets are off.
>
> **[1:16](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=76)** Applications that explicitly trust the user are the most likely to be compromised.
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=82)** If the app doesn't validate whether the data is what was expected, if it doesn't filter out unwanted characters and sanitize the data before sending it on to the interpreter, then that app is exposed.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=97)** When it comes to exploiting injection flaws, escape characters are an attacker's best friend.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=105)** Escape characters provide the attacker with a way to force the backend interpreter to see the command in a whole new light.
>
> **[1:52](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=112)** For example, an attacker could force a login screen to reinterpret the password as a conditional statement.
>
> **[2:02](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=122)** If the number one equals the number one, let me log in with the administrator account.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=128)** When an interpreter receives that condition, it's going to accept it as true.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=133)** Attackers can also include injection attacks in the data itself by adding extra parameters to things like search queries and [[JSON]] messages.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=144)** An attacker could trick an application into returning more data than it should, including the entire backend database.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=152)** Injection attacks are pretty awful, and they've been hovering around the top of the OWASP top 10 list from the very beginning.
>
> **[2:41](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=161)** Does the application require a login?
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=163)** Then the attacker's going to send commands to the LDAP directory or the [[SQL]] database that stores all the usernames and passwords.
>
> **[2:51](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=171)** Does the application write data to or read data from a backend database?
>
> **[2:57](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=177)** Once the attacker determines the type of database, you're going to start seeing specific database commands that the developers never intended for the application to process.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=188)** And if the application sends commands directly to the OS, commands designed to reuse existing services and utilities on the server, then an attacker can take over the entire server.
>
> **[3:20](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=200)** I know because I've done it but with my client's permission, of course.
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=206)** These technical impacts are just the starting point.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=210)** Just think of what the impact would be to your business if you experienced a data breach as a result of an injection attack or if an attacker exploited one of these flaws to take complete control of one of your servers.
>
> **[3:44](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=224)** According to OWASP, source code reviews are the best method for detecting injection flaws.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=230)** The first thing you should look for are SQL queries in source code.
>
> **[3:56](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=236)** Understanding what those queries do and how they're structured is the first step in determining whether or not an attacker could abuse them.
>
> **[4:04](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=244)** If the application you're testing is going to look for usernames, passwords and even permissions and an internal LDAP directory something like [[Active Directory]] or Open LDAP, then you want to find all of those LDAP queries and examine them as well.
>
> **[4:21](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=261)** It's also possible that the developers will be including operating system commands in the app.
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=265)** If you know the flavor of the underlying operating system then you can search the source code for command prompts and popular commands.
>
> **[4:35](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=275)** And don't overlook object relational mapping or ORM tools that your developers might be using.
>
> **[4:41](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=281)** Instead of writing out the full SQL query in the source code, the developers might take advantage of an ORM API call that automates the creation of those queries.
>
> **[4:54](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=294)** You can scour the source code and try to figure out on your own which tools, if any, the developers are using, but I recommend you save yourself some time and just ask the developers instead.
>
> **[5:05](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=305)** Remember, we're all on the same team here.
>
> **[5:08](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=308)** When it comes to preventing injection flaws, you've got multiple options.
>
> **[5:13](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=313)** Instead of requiring developers to build every query in command from scratch, safe APIs and trusted object relational mapping tools are terrific.
>
> **[5:26](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=326)** If someone has already figured out a way to securely handle these queries, reuse their work, you can also whitelist server-side input validation.
>
> **[5:35](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=335)** If your application is only expecting input that matches a finite list of options, postal codes, for example, then don't let the users submit whatever they want in that field, have them select from a known list of valid options instead.
>
> **[5:52](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=352)** Input validation can be tricky though, when your app needs to allow for a variety of input options.
>
> **[5:59](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=359)** As an example, I don't know that whitelisting values for first name or last name would be the most sustainable approach to ensure that users don't launch injection attacks against those two fields.
>
> **[6:14](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=374)** Now, if you send that input to an intermediary on the server the one that can encode those characters before sending them to the interpreter, you just might be able to mitigate that attack without making your app unusable.
>
> **[6:28](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=388)** If your developers insist on keeping their dynamic queries and source code, they can still use escape characters specific to that interpreter.
>
> **[6:37](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=397)** By building those escape characters into their queries, they can negate an attacker's attempt to do the same thing.
>
> **[6:43](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=403)** And it's also a good practice to use native controls to limit your exposure, things like the limit statement in SQL.
>
> **[6:52](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=412)** If your database contains hundreds of thousands of records but your legitimate users only need to see 10 records at a time, then you can use the limit statement to make sure an attacker can also only see 10 records at a time.
>
> **[7:09](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=429)** At some point you're going to need to get into the weeds as you're testing injection flaws.
>
> **[7:14](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=434)** More importantly, you're going to want specific code snippets that you can show your developers to explain what injection flaws look like and what changes they'll need to make to fix them.
>
> **[7:26](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=446)** The OWASP Injection Prevention Cheat Sheet contains both code examples and context related to identifying and preventing injection flaws.
>
> **[7:37](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=457)** Another site you should bookmark is, Bobby Tables, A guide to preventing sequel injection named after one of the funniest XKCD cartoons ever speaking as both a parent and an InfoSec nerd.
>
> **[7:52](https://www.linkedin.com/learning/static-application-security-testing/a3-injection?u=76281980&t=472)** This site contains an extensive set of language specific guides on preventing SQL injection attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[OWASP]] (4), [[JSON]] (1), [[Active Directory]] (1)
> **Env Vars:** ldap (5), sql (5), owasp (4), orm (2), json (1)
> **Exercise Files:** source code (6)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (2)
> **Tools:** command line (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [teacher] (1)

#### [A4: Insecure design](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=0)** - [Instructor] The fourth set of risks in the [[OWASP]] top 10 list are insecure design flaws.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=7)** Some years back, the US [[Cybersecurity]] and Infrastructure Security Agency, better known as CISA, provided resources to help software developers, architects, and security professionals build security into software from day one.
>
> **[0:24](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=24)** While that part of their website has been archived, those principles are still critical.
>
> **[0:28](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=28)** While all the top 10 risks are intended to drive security conversations early on in the development lifecycle, this particular risk is intended to pull those conversations even earlier before the developers write a single line of code.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=44)** For many organizations, conversations around insecure design risks may require a culture shift.
>
> **[0:52](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=52)** It's one thing to scan for and fix vulnerabilities related to the other top 10 risks, but asking the devs to design apps with security at the forefront is a heavier lift.
>
> **[1:04](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=64)** These risks can creep into the development life cycle, because of a misunderstanding of the business risk tied to the app.
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=72)** If an app contains personal information, for example, then failing to build in mechanisms to identify and remove that information on a person by person basis could result in financial fines from [[Privacy]] regulations like the EU's GDPR.
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=89)** Couple that misunderstanding with a lack of defined and documented development processes, or a documented [[Software Development]] life cycle.
>
> **[1:38](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=98)** And then you end up hoping that each developer on the team knows those business risks inside and out.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=105)** And as folks in security are fond of saying, "Hope is not a strategy."
>
> **[1:50](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=110)** Another indicator that this risk might be present is in the user stories themselves.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=116)** If the user stories are entirely focused on functionality, then they may be missing the security language that can help drive a more secure design.
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=126)** OWASP makes a distinction between design flaws and implementation flaws for one very important reason.
>
> **[2:14](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=134)** Secure design can counter implementation flaws, but secure implementation can't counter design flaws.
>
> **[2:23](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=143)** In other words, even if the implementation process overlooks the security setting, the application could have built in fail safes that account for that miss and protect the app regardless.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=155)** But if the app has an insecure design flaw, even a perfect implementation could still leave it exposed to attackers.
>
> **[2:43](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=163)** And if that's not enough to sway the sea level execs, let them know that insecure design flaws are more costly to remediate.
>
> **[2:52](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=172)** As it turns out, it's less expensive to build security in than it is to try to bolt it on after the app's been deployed.
>
> **[3:01](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=181)** To determine whether these flaws are present in the apps you're trying to protect, start by asking for documentation.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=188)** A quick review of the SDLC and any supporting docs will help you begin to understand where you might be exposed.
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=196)** You should also ask your dev team for a software bill of materials or SBOM.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=202)** The SBOM should contain a list of all the software libraries used by the app, and you can do some cross-checking to determine whether any of those libraries are inherently insecure.
>
> **[3:33](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=213)** And take a look at the test cases and the testing tool set.
>
> **[3:37](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=217)** While security is a function of quality, not every dev team has deployed [[Security Testing]] tools in their CI/CD pipeline to check for potential flaws.
>
> **[3:49](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=229)** If you want to address these risks, [[Threat Modeling]] can help ensure you're focusing on the right things.
>
> **[3:55](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=235)** Go through an exercise to determine how attackers might compromise or exploit an app that you're trying to build.
>
> **[4:03](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=243)** And then use those conversations to determine what you could build into the app that could thwart those attacks.
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=249)** Leverage reference architectures.
>
> **[4:12](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=252)** If someone has already figured out how to build a secure app, especially in [[Cloud Services]] like AWS, [[Microsoft Azure|Azure]], and [[Google Cloud Platform (GCP)|Google Cloud]], then their documentation can accelerate your efforts.
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=265)** Document secure [[Design Patterns]].
>
> **[4:28](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=268)** If you've decided that you should never put the user ID in the URL string, write that down, so that everyone on the team knows.
>
> **[4:36](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=276)** Define misuse and abuse cases.
>
> **[4:39](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=279)** Revisit your threat modeling conversations, and build test cases around them to make sure your secure design can stand up to simulated attacks.
>
> **[4:49](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=289)** And above all, use a software maturity model to help you understand how to measure your efforts, and how to improve them over time.
>
> **[4:58](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=298)** Regarding maturity models, the two that I recommend you put at the top of your list are the OWASP Software Assurance Maturity Model or SAMM, and the Synopsys Building Security in Maturity Model or BSIMM.
>
> **[5:13](https://www.linkedin.com/learning/static-application-security-testing/a4-insecure-design?u=76281980&t=313)** I covered both of these two models earlier in this course, and they are absolutely worth digging into in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Threat Modeling]] (2), [[Cybersecurity]] (1), [[Privacy]] (1), [[Software Development]] (1)
> **Env Vars:** owasp (3), sbom (2), cisa (1), gdpr (1), sdlc (1)
> **Definitions:** is a  (2), known as (1), in other words (1)
> **CLI Commands:** cd (1), aws (1), make (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [A5: Security misconfiguration](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=0)** - [Instructor] The fifth set of risks in the [[OWASP]] Top 10 list are security misconfiguration flaws.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=6)** Simply put, this category of web application risks is all about insecure or default configurations.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=15)** Securing a web app requires more than just knowing how to securely code that application.
>
> **[0:21](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=21)** It also requires knowledge about how to securely deploy and maintain both the application and the application infrastructure.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=29)** You've probably seen news stories on one of the multiple data breaches related to open [[Cloud Storage]] weaknesses.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=36)** Apps that are misconfigured to use cloud storage need to take into consideration how they're going to manage access to that storage.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=44)** While verbose error messages are great for troubleshooting, they're also great for attackers who are profiling your apps.
>
> **[0:52](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=52)** If an attacker can force an application to spit out an error message, one that contains a stack trace or details about a web server, the internal network, then the attacker now has an advantage when it comes to designing attacks against the app and both patch management and general IT hygiene are crucial to [[Application Security]].
>
> **[1:14](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=74)** You need to be sure that you're applying patches and upgrades that address publicly disclosed security flaws.
>
> **[1:21](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=81)** This applies to every component in your environment including operating systems, frameworks, and the libraries you've built into custom applications.
>
> **[1:31](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=91)** It also includes any commercial applications that are part of your application infrastructure.
>
> **[1:38](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=98)** Vulnerability research has increased significantly in recent years.
>
> **[1:43](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=103)** Bug bounty aggregators like Bug Crowd and Hacker One provide independent security researchers with a way to make money on responsible disclosure, and that same research extends into infrastructure as well.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=118)** Even if you were secured yesterday, a vulnerability might be disclosed tomorrow that draws attackers to your application, like blood in the water attracts sharks.
>
> **[2:09](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=129)** Another way that these flaws appear is through infrastructure changes.
>
> **[2:13](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=133)** If the admins upgrade and operating system, or if they deploy a new version of the web server software it's likely that they'll also be deploying new versions of configuration files.
>
> **[2:25](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=145)** It's also likely that some of the default installation artifacts, things like README files and status pages can be deployed as well.
>
> **[2:34](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=154)** You need to make sure that someone is watching out for these changes.
>
> **[2:38](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=158)** Likewise, changes to the application itself could result in new security misconfiguration exposures.
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=166)** If your development team builds a new library into the app or if they introduce an app build on a framework that's new to the organization, then those changes are also going to come with a need to review the corresponding security configurations.
>
> **[3:02](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=182)** The potential impact of security misconfigurations can vary from minor to major.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=188)** Yes, stack traces and web server information might give an attacker an advantage.
>
> **[3:13](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=193)** If you take a closer look at those findings, though, you might just realize that the advantage is insignificant.
>
> **[3:21](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=201)** You should be more concerned with directory permissions that allow an unauthorized outsider to browse unprotected directories on internal servers.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=210)** That's a misconfiguration that could lead to a data breach.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=214)** If you find an exposure that includes world readable config files that include database credentials, something like the dreaded [[PHP]] info page with [[MySQL]] database running on the backend, then you have a bigger issue.
>
> **[3:49](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=229)** This exposure of configuration files puts you at risk of complete system compromise.
>
> **[3:56](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=236)** Do you have documented hardening standards for every component in your application infrastructure stack?
>
> **[4:02](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=242)** Everything from the OS to the application itself?
>
> **[4:06](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=246)** If not, that's a great place to start.
>
> **[4:09](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=249)** These hardening standards are crucial if you want the people managing and deploying those components to understand what they should look for.
>
> **[4:17](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=257)** You should also look for unnecessary features or the servers running remote administration services that the admins aren't using.
>
> **[4:25](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=265)** Did the developers remove an old library when they move to the new one?
>
> **[4:30](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=270)** Features that users no longer rely on are likely to be overlooked in QA testing, but they will absolutely be targeted by attackers.
>
> **[4:39](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=279)** Verbose error handling is okay in internal, non-production instances of the app, but they should be restricted when you migrate to production, and just because configuration files are protected doesn't mean that you're out of the woods.
>
> **[4:55](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=295)** You need to go line by line through each config file to determine whether the values are reasonable and appropriate.
>
> **[5:02](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=302)** If someone configured the application to lock out an account after 10,000 failed logins, then sure, you have account lockouts enabled, but is that config really going to accomplish its intended purpose?
>
> **[5:16](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=316)** And most importantly, keep everything patched and up to date?
>
> **[5:20](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=320)** I have a friend who is seeing attacks against a newly disclosed vulnerability within one hour of that vulnerability being disclosed, one hour.
>
> **[5:30](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=330)** If you're not keeping every component of your application infrastructure current, you're walking around with a big target painted on your forehead.
>
> **[5:39](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=339)** Documented and repeatable hardening standards are a must.
>
> **[5:43](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=343)** You should refer to these procedures pre-deployment and you should make sure they're considered as part of your change control process.
>
> **[5:51](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=351)** I know I sound like a broken record here but it bears repeating.
>
> **[5:54](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=354)** If you want everyone in your organization to know what's expected of them, you need to write it down.
>
> **[6:02](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=362)** If there are unnecessary components enabled anywhere in your application infrastructure, get rid of them, turn them off, and you don't have to worry about anyone exploiting them.
>
> **[6:12](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=372)** Carefully review your cloud storage permissions.
>
> **[6:16](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=376)** Restrict who can read to and who can write from that storage either by source, IP address, or by user account.
>
> **[6:24](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=384)** Remember, deny all first and then start granting access.
>
> **[6:30](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=390)** From an overall architecture standpoint, seek out opportunities to implement segmentation and containerization.
>
> **[6:39](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=399)** If you take a offensive approach to building out your environment, you increase the likelihood of containing a threat before an attacker finds a security misconfiguration that may have slipped through the cracks.
>
> **[6:52](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=412)** The Center for Internet Security maintains a collection of hardening guides known as the CIS benchmarks.
>
> **[6:58](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=418)** If you have any questions about security hardening guidance for operating systems, [[Web Servers]], [[Cloud Services]] and the like, you can find the answers you're looking for in these benchmarks.
>
> **[7:11](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=431)** Regarding logging and monitoring controls, I want to share a non OSP cheat sheet with you, the one that I've been using for years.
>
> **[7:19](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=439)** Lenny Zeltser, a well-known information security professional maintains a critical log review checklist for security incidents cheat sheet on his website, [zeltser.com](https://zeltser.com).
>
> **[7:31](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=451)** If you're unsure of where to start with your logging and monitoring conversations this resource is incredibly helpful.
>
> **[7:38](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=458)** In the event of a security incident, your security team is going to need these logs.
>
> **[7:44](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=464)** Show this to everyone you speak with and ask, when the security team comes knocking, are we going to be able to produce these logs for them?
>
> **[7:54](https://www.linkedin.com/learning/static-application-security-testing/a5-security-misconfiguration?u=76281980&t=474)** When the answer is absolutely, then you know your app is good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (3), [[OWASP]] (1), [[Application Security]] (1), [[PHP]] (1), [[MySQL]] (1)
> **CLI Commands:** make (3), find (2), php (1), mysql (1)
> **Env Vars:** owasp (1), readme (1), php (1), cis (1), osp (1)
> **URLs:** [zeltser.com](https://zeltser.com) (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [A6: Vulnerable and outdated components](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=0)** - [Instructor] The sixth set of risks in the [[OWASP]] top 10 list are flaws related to vulnerable and outdated components.
>
> **[0:08](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=8)** This category of flaws is very closely related to security misconfigurations but with a twist.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=15)** While security misconfigurations focus on applying the right security settings in your app and your app infrastructure, no amount of configuration changes to a specific component will protect your app if that component has a known vulnerability.
>
> **[0:33](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=33)** Another differentiator is that security configurations map two business risk appetite.
>
> **[0:39](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=39)** You might choose to apply a weaker security configuration for the sake of user convenience, or because you're already using another technology that won't work if you apply that tighter security configuration.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=53)** Fixing a vulnerable component could require much more effort and come at a higher cost.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=59)** Applications can easily grow to become complex ecosystems of custom code intermingled with third-party libraries, modules, and frameworks.
>
> **[1:10](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=70)** As this complexity increases, it becomes more challenging to keep track of all those components.
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=77)** Without an inventory of those components, you're going to have a tough time determining whether your app is at risk.
>
> **[1:24](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=84)** One of the primary reasons that app developers integrate these third-party components is that they often provide a tried and true solution to a problem that the developers are trying to solve.
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=96)** What's better, they can implement that solution immediately instead of spending weeks trying to figure it out on their own.
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=104)** As a result, they might implement a component without an in-depth knowledge of how it was developed, how it was tested, or what vulnerabilities they might be introducing to the app.
>
> **[1:55](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=115)** Remember Drupalgeddon?
>
> **[1:57](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=117)** Back in 2014, a vulnerability in [[Drupal]] was publicly disclosed, one that immediately put thousands of web apps using that [[Content Management]] framework at risk of compromise.
>
> **[2:10](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=130)** Four years later, another Drupal vulnerability was disclosed, sending everyone back into fire drill mode.
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=137)** The original Drupalgeddon vulnerability was an example of a worst-case scenario.
>
> **[2:22](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=142)** Organizations couldn't just disable Drupal or replace it overnight.
>
> **[2:27](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=147)** Their web apps could not function without Drupal.
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=150)** So they had to ride out the storm.
>
> **[2:32](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=152)** And some fared better than others, but everyone learned how damaging a component with known vulnerabilities can be.
>
> **[2:40](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=160)** And neither Drupalgeddon, nor Drupalgeddon 2, hold a candle to Log4Shell.
>
> **[2:46](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=166)** The vulnerability in Apache's Log4j that enabled attackers to remotely execute their own code on internal networks all over the world.
>
> **[2:56](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=176)** It's also likely that there are thousands of components with minor vulnerabilities that haven't even been discovered yet.
>
> **[3:03](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=183)** Vulnerabilities that won't have a measurable impact on your web app.
>
> **[3:07](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=187)** The business impact of these vulnerabilities will vary based on both the technical severity and on the application's purpose.
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=196)** But it's important that you have all the information you need to make an informed decision about remediation recommendations.
>
> **[3:25](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=205)** Start asking around to see if anyone already has a list of all the components that have been built into your app.
>
> **[3:32](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=212)** Even a partial list is better than nothing.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=214)** This list is often referred to as a software bill of materials, or an SBOM.
>
> **[3:41](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=221)** You can use that list to start collecting version details for each of these components, details that you'll need when you're chasing down security bulletins to determine whether any of these components have critical, exploitable vulnerabilities.
>
> **[3:56](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=236)** Talk to your developers about their compatibility testing procedures.
>
> **[4:00](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=240)** Every time a new version of a particular library is released, every time a component is patched or updated, the development team should be checking to see whether or not that modified component is going to break existing app functionality.
>
> **[4:16](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=256)** If they tell you that they just don't upgrade because they don't want to risk breaking anything, then what they're telling you is the likelihood of vulnerable components in your app is pretty high.
>
> **[4:28](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=268)** And call back to the work you've done with them around security misconfigurations.
>
> **[4:33](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=273)** These third-party components are almost certain to come with config files or some mechanism for customizing them to your environment.
>
> **[4:41](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=281)** If someone took time to write down what a secure version of that config file looks like, then you can add that info to your testing activity.
>
> **[4:49](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=289)** The best way to protect your apps from these risks is to remove everything you don't need.
>
> **[4:55](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=295)** Delete it.
>
> **[4:56](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=296)** This streamlining activity comes with both security benefits and operational benefits.
>
> **[5:02](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=302)** It's a win-win situation.
>
> **[5:05](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=305)** When you've whittled that list down to the components that you absolutely need to keep in the app, then it's time to take inventory.
>
> **[5:12](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=312)** That's when you put together your SBOM.
>
> **[5:15](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=315)** At a minimum, you should document each component's name, use case, version, and where you found it.
>
> **[5:25](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=325)** You'll need these four bits of information as you shift into maintenance mode.
>
> **[5:29](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=329)** Make sure your developers are only using known and trusted components, ones from reliable sources.
>
> **[5:36](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=336)** If those components are digitally signed, even better.
>
> **[5:40](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=340)** That provides you with a higher level of assurance that the components are legit and not compromised.
>
> **[5:46](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=346)** Finally, put a process in place to monitor both development and support activity around these components.
>
> **[5:53](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=353)** If an open-source project goes dormant, if there are no active contributions to the project for a noticeable length of time, then the likelihood of security patches being developed for those components goes way down.
>
> **[6:07](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=367)** Two resources that can help you identify and track these risks are the OWASP Dependency-Check Tool and the Common Vulnerabilities and Exposures database.
>
> **[6:18](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=378)** Dependency-Check is a software composition analysis tool that scours both [[Java]] and .NET source code for components with known, publicly disclosed vulnerabilities.
>
> **[6:29](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=389)** This tool is available as a command-line utility, as an Ant task, plugin for Maven, for [[Gradle]], for [[Jenkins]].
>
> **[6:37](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=397)** It's even available as a Mac Homebrew install.
>
> **[6:40](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=400)** It can also be integrated into SonarQube, one of the source code quality tools that I covered earlier in this course.
>
> **[6:47](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=407)** The CVE database hosted by MITRE is an online searchable database of publicly disclosed vulnerabilities.
>
> **[6:55](https://www.linkedin.com/learning/static-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=415)** If you're not ready to automate your test using Dependency-Check, or if you're using a programming language other than Java or .NET, you can still access valuable information using the CVE search engine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (4), [[OWASP]] (2), [[Java]] (2), [[Content Management]] (1), [[Gradle]] (1)
> **Env Vars:** owasp (2), sbom (2), net (2), cve (2), mitre (1)
> **CLI Commands:** make (2), apache (1)
> **Prerequisites:** you'll need (2), install (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [A7: Identification and authentication failures](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=0)** - [Presenter] The seventh set of risks in the [[OWASP]] top 10 are identification and authentication failures.
>
> **[0:08](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=8)** If an attacker can find a way around the login screen and start interacting with the application or if you can't trust that the person using the app is the person they claim to be then the application is vulnerable to these flaws.
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=22)** With all the data breaches in recent years a lot of valid usernames and passwords have ended up on the dark web.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=30)** It doesn't take a lot of technical skill for an attacker to download one of these lists and log into your application with a valid user account that belongs to someone else.
>
> **[0:40](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=40)** Default passwords are even worse.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=43)** Don't believe me?
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=44)** Just [[Google]] for the admin guide for some of the older technology in your environment, tech with an administrative web interface, and see if there's a default admin password combo listed in that guide.
>
> **[0:57](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=57)** Even if an attacker doesn't have a valid set of credentials there are several brute force attack tools that will try different combinations until it gets one right.
>
> **[1:07](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=67)** And attackers who can identify and reuse unexpired session [[Tokens]] can often interact with an application just like a traditional authenticated user.
>
> **[1:17](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=77)** One of the reasons identification and authentication failures occur in web applications is that secure identity and access management controls weren't discussed at the beginning of the project.
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=89)** How strong do user passwords need to be?
>
> **[1:32](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=92)** Will the application use passwordless authentication?
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=96)** Do users need a multifactor authentication token to access the app?
>
> **[1:40](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=100)** Have you changed or better yet prohibited weaker default passwords from being used at all?
>
> **[1:47](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=107)** These are just a few questions you should be asking about identity and access management prior to building any web application.
>
> **[1:56](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=116)** Likewise, weak session management controls contribute to these same flaws.
>
> **[2:01](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=121)** Have you built in controls to disable an account if the user fails to log in too many times in a row?
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=128)** When does a user's session expire?
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=131)** Can users log in to the application at the same time from different devices?
>
> **[2:17](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=137)** Understanding what a normal user session looks like will help you understand where to place these guardrails.
>
> **[2:24](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=144)** Depending on what your application does, the impact of identification and authentication failures can vary from a minor nuisance to a major breach.
>
> **[2:34](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=154)** An application that lets you borrow library books online might expose a user's borrowing history or allow someone to check out books without that user's knowledge.
>
> **[2:45](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=165)** While that does violate the user's [[Privacy]], it might not be a publicly reportable data breach depending on where that library is located and which laws apply.
>
> **[2:57](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=177)** But an online commercial [[Banking]] application that lets an attacker log in with default credentials and wire millions of dollars to an offshore account, that's likely to cause a bigger disruption.
>
> **[3:09](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=189)** And when an application is used for infrastructure administration, then the compromise of that app could enable an attacker to either take over that infrastructure or knock it offline entirely.
>
> **[3:22](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=202)** If an application has a login screen, then someone decided that the data in that application was worth protecting.
>
> **[3:30](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=210)** By understanding the type of data stored within the application you can make a more informed decision about how strict the authentication controls really need to be.
>
> **[3:41](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=221)** When investigating identification and authentication failures, start with a review of the application's password policy.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=230)** Specifically, take a close look at the complexity requirements and whether the application prohibits the use of passwords known to be compromised.
>
> **[4:00](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=240)** Talk to your developers about how the application responds to brute force attacks.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=245)** By brute force I mean a series of consecutive failed logins.
>
> **[4:10](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=250)** To be fair, this control might be built into the application or the developers might hand this off to an upstream security device, something like a web application firewall.
>
> **[4:22](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=262)** Does the application include a self-service password reset tool?
>
> **[4:27](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=267)** If so, take a close look at that as well.
>
> **[4:31](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=271)** I've been able to compromise enterprise user accounts, again, with my client's permission, by answering password reset questions using a little open source intelligence gathering.
>
> **[4:43](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=283)** When it comes to backend password management I think the most crucial conversation you can have with your developers is around how those passwords are stored.
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=293)** The short answer, hashed is fantastic.
>
> **[4:57](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=297)** Encrypted is okay, and plain text is downright awful.
>
> **[5:03](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=303)** And finally, spend some time reviewing how the application generates, uses and expires session IDs.
>
> **[5:12](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=312)** If the session ID is just a parameter in the URL then it's right there for anyone to see, even if the data within the app is encrypted.
>
> **[5:21](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=321)** Multifactor authentication is one of the most effective ways to counter identification and authentication failures.
>
> **[5:29](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=329)** Even if the attacker has a valid username and password that information is useless without the second authentication factor.
>
> **[5:38](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=338)** Talk to your developers about how they prohibit weak, default and known compromised passwords.
>
> **[5:45](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=345)** There's a balance to be struck between a reasonable password and one that's going to be too complex for even your users to remember.
>
> **[5:53](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=353)** But permitting single character passwords, that's always a terrible idea.
>
> **[5:58](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=358)** And yes, that does happen.
>
> **[6:00](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=360)** I've seen it firsthand.
>
> **[6:02](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=362)** Make sure that you've implemented lockouts for failed logins, whether you do this at the account level within the app or at the source IP address level in a network firewall or a web app firewall.
>
> **[6:15](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=375)** Better yet, do both.
>
> **[6:17](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=377)** Use thoughtful password reset questions.
>
> **[6:21](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=381)** If you can find the answer to someone else's password reset questions with just a few web searches and some time on their social media profiles then you should not tie those questions to password resets.
>
> **[6:34](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=394)** And finally, focus on server-side session management controls.
>
> **[6:40](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=400)** Attackers can manipulate client-side controls with relative ease, but server-side controls are much, much harder to compromise.
>
> **[6:49](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=409)** OWASP maintains four cheat sheets that can help you address identification and authentication failures.
>
> **[6:56](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=416)** One for authentication, one for credential stuffing prevention, one for managing password resets, and another for session management best practices.
>
> **[7:07](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=427)** Item C6 in the OWASP Proactive Controls project outlines three authentication levels that align with [[NIST]] guidance.
>
> **[7:16](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=436)** Level one is passwords.
>
> **[7:19](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=439)** Level two is multifactor authentication.
>
> **[7:23](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=443)** And level three is cryptographic based authentication.
>
> **[7:27](https://www.linkedin.com/learning/static-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=447)** The OWASP breakdown is a much easier read than the NIST Special Publication and they present these levels in a manner that should simplify that conversation with your developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[NIST]] (2), [[Google]] (1), [[Tokens]] (1), [[Privacy]] (1)
> **Env Vars:** owasp (4), nist (2), url (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [presenter] (1)

#### [A8: Software and data integrity failures](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=0)** - The eighth set of risks in the [[OWASP]] top 10 list are software and [[Data Integrity]] failures.
>
> **[0:07](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=7)** The notion of software and data integrity is based on assumed trust.
>
> **[0:13](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=13)** The software trust that the data we input is what's expected, and we trust that all of the software components are going to do what they were designed to do.
>
> **[0:22](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=22)** When that trust is misplaced, we find ourselves facing a security incident or a data breach.
>
> **[0:29](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=29)** While conversations around software integrity often focus on the code, don't overlook the infrastructure.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=36)** If any component of the system can't be trusted, then the integrity of the entire system is at risk.
>
> **[0:44](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=44)** Even if your developers build and deploy a trusted instance of an application, the integrity of that app could be impacted by each and every update to the app, whether the update is applied automatically or manually.
>
> **[0:59](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=59)** This risk is an evolution of the insecure deserialization risk in the 2017 top 10 list.
>
> **[1:07](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=67)** Since vulnerable encoded or serialized objects and data are, at their core, software and data integrity flaws.
>
> **[1:15](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=75)** If your developers don't add integrity validation mechanisms to an app, then the likelihood increases that the app may be exposed to these risks.
>
> **[1:25](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=85)** When the application applies an update or pulls a new version of a library from an external repository, how do you know that the update or library that gets installed is trustworthy?
>
> **[1:38](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=98)** In August of 2022, a high school student uploaded ransomware to the [[Python (Programming Language)|Python]] PI PI library.
>
> **[1:45](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=105)** That malicious code was downloaded hundreds of times before anyone thought to check the integrity of the updated library.
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=113)** These same integrity controls apply to your internal C-I-C-D pipelines as well.
>
> **[1:59](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=119)** If you aren't restricting or auditing changes to that pipeline, how do you know that you can trust the code that's processed and deployed?
>
> **[2:07](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=127)** Although this risk is near the bottom of the top 10 list the severity of these flaws shouldn't be underestimated.
>
> **[2:14](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=134)** We've seen publicly disclosed security incidents and data breaches that have resulted from software and data integrity failures, failures that enabled attackers to run their own malicious code on systems all over the world.
>
> **[2:29](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=149)** One of the most public incidents to date was the SolarWinds attack of 2022.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=155)** In that attack, criminals were able to deploy malware to SolarWinds' Orion software.
>
> **[2:41](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=161)** Orion is used for IT monitoring and management by thousands of enterprises and government agencies.
>
> **[2:48](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=168)** In the end, over 30,000 organizations were breached, all because the attackers were able to convince targeted systems that they could trust the malicious update.
>
> **[2:59](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=179)** In order to find these flaws in your own code, start by focusing on where you're validating digital signatures.
>
> **[3:07](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=187)** If that validation isn't currently a part of your code, it should be.
>
> **[3:12](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=192)** But which signatures should you be validating?
>
> **[3:15](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=195)** That SBOM that I keep mentioning, the software bill of materials, contains a list of most of the components that could potentially be in scope for this validation.
>
> **[3:25](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=205)** Start there.
>
> **[3:26](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=206)** Also, take a look at your S-D-L-C documentation, paying attention to your [[Code Review]] procedures and your change control procedures in particular.
>
> **[3:36](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=216)** Code reviews enable you to detect potentially untrusted code elements, while change control procedures can help you prevent insecure software or infrastructure from being deployed to production.
>
> **[3:50](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=230)** And check your C-I-C-D pipeline controls, looking for access control weaknesses and [[Configuration Management]] weaknesses.
>
> **[3:59](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=239)** Again, if you haven't built digital signature checks into your code, now's the time to start.
>
> **[4:06](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=246)** Validating digital signatures, before assuming trust, is a quick and automated way to reduce your exposure to these risks.
>
> **[4:14](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=254)** You should also consider implementing a procedure for vetting third party libraries.
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=260)** If you've got an SBOM that lists all the libraries your developers depend on, you could pull down those libraries and check them for vulnerabilities or malicious code.
>
> **[4:30](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=270)** Assuming they pass with flying colors, you could then publish those libraries to a trusted internal repo, one that you control, and only let your devs pull from that internal repo.
>
> **[4:43](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=283)** And I can't stress enough the importance of good S-D-L-C documentation.
>
> **[4:48](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=288)** If you want the folks you're working with to know what's expected of them, you've got it.
>
> **[4:53](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=293)** You've got to write it down.
>
> **[4:56](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=296)** Two resources that can help you get ahead of software and data integrity failures, are "CycloneDX" and "Dependency-Check", both of which are OWASP projects.
>
> **[5:06](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=306)** CycloneDX is a bill of materials standard that provides guidance around building bills of materials for software, softwares as a service, operations and manufacturing.
>
> **[5:19](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=319)** It also outlines a security advisory format for publishing vulnerability and exploitability details and it includes a library of not quite 200 tools to help automate all the things.
>
> **[5:33](https://www.linkedin.com/learning/static-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=333)** "Dependency-Check" is a software composition analysis tool that automatically puts together a list of all your software libraries and then checks public vulnerability [[Databases]] to help you determine if those libraries are vulnerable to attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (5), [[OWASP]] (2), [[Python (Programming Language)|Python]] (1), [[Code Review]] (1), [[Configuration Management]] (1)
> **Env Vars:** owasp (2), sbom (2)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2), python (1)
> **Tools:** notion (1)
> **Speakers:** - the (1)

#### [A9: Security logging and monitoring failures](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=0)** - [Instructor] The ninth set of risks in the [[OWASP]] top 10 list are security logging and monitoring failures.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=6)** As developers are building out these applications, their initial focus is on just getting everything to work as expected by the go-live date.
>
> **[0:15](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=15)** If you are fortunate enough to be working with a dev team who is considering the long-term support and operation of the app, then chances are they've built in some basic logging functionality to help them troubleshoot the app after it goes live.
>
> **[0:30](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=30)** But what about security logs?
>
> **[0:32](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=32)** If your developers don't have security training and if security logging requirements aren't built into the project, then chances are the security logging and monitoring controls will be deficient at best and entirely absent otherwise.
>
> **[0:48](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=48)** As OWASP points out, this is exactly what attackers are hoping for.
>
> **[0:53](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=53)** If they can poke and prod at your apps without setting off any alarms, then they're more likely to be able to find a security hole and eventually compromise the app.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=63)** With proper monitoring and alerting controls in place, you significantly increase your chances of catching attackers in the act.
>
> **[1:12](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=72)** One of the reasons flaws like these end up in web applications is that developers may not be receiving the training they need in order to understand these risks.
>
> **[1:22](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=82)** You are taking this course so that you can get ahead of these risks so that you can improve security throughout the entire SDLC but how many other people at your organization do you wish were also taking this same course?
>
> **[1:36](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=96)** That lack of training leads to a lack of awareness, a lack of context, a lack of understanding.
>
> **[1:43](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=103)** Without someone raising the warning flag and insisting that these controls be built in from day one, it's unreasonable to expect that it will happen organically.
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=113)** The lack of security documentation only makes things worse.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=118)** If you don't have a logging and monitoring policy along with supporting standards, then you're putting your developers at a disadvantage.
>
> **[2:06](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=126)** The severity of this risk is going to vary, based on the criticality of your app, as well as whether it processes restricted or sensitive data.
>
> **[2:16](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=136)** But consider a different perspective on this risk.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=139)** Ask yourself about the effect of logging and monitoring controls during the different phases of an actual attack.
>
> **[2:26](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=146)** When someone with malicious intent targets one of your web apps, that person is going to start with reconnaissance activity.
>
> **[2:35](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=155)** They're going to launch some lightweight scans and perform some non-intrusive testing to determine what your app does and what technologies you have in play.
>
> **[2:45](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=165)** If you can catch them in this phase, then the impact to your organization is negligible.
>
> **[2:51](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=171)** If the attacker eludes your detection during the recon phase and starts trying to bypass the app security controls, then the potential impact goes up.
>
> **[3:02](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=182)** An injection attack might corrupt your backend database.
>
> **[3:06](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=186)** A brute force attack might cause performance issues.
>
> **[3:10](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=190)** If you catch them in this phase, then some damage might be done but you can contain the worst of it.
>
> **[3:16](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=196)** If you are logging and monitoring controls fail and an attacker goes from recon to exploitation to full-on compromise, now things are bad.
>
> **[3:27](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=207)** You could be looking at a data breach, at a system takeover or at a production down incident.
>
> **[3:34](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=214)** Very costly and very disruptive to your end users.
>
> **[3:38](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=218)** It's up to you to choose the level of logging and monitoring that's right for your app but the better those controls, the better your chances of avoiding an incident entirely.
>
> **[3:49](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=229)** As you dig into your apps' logging and monitoring controls, think of your work like building a pyramid from the foundation up.
>
> **[3:58](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=238)** Start with that foundation.
>
> **[4:00](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=240)** Are you logging auditable events at all?
>
> **[4:03](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=243)** If not, then you know where you need to start.
>
> **[4:06](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=246)** Then look at the contents of the logs.
>
> **[4:10](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=250)** Do the logs contain enough information for people and systems to understand exactly what happened?
>
> **[4:16](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=256)** Speaking of which, who's watching these logs?
>
> **[4:20](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=260)** If no one's monitoring them or if you're not generating alerts based on suspicious activity, then you're missing out on the value that these logs bring.
>
> **[4:29](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=269)** Ideally, those alerts should be generated in near real time.
>
> **[4:34](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=274)** The sooner you can notify either a person or a system that they need to take defensive action, the better.
>
> **[4:42](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=282)** And finally, ask the devs where those logs are being stored.
>
> **[4:46](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=286)** If an attacker compromises an app or any of the app infrastructure components, you better believe they're going to try to erase any evidence of their crime.
>
> **[4:57](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=297)** By storing logs locally, you are providing them with an opportunity to do just that.
>
> **[5:02](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=302)** To address these risks, work with your developers to enable logging and monitoring where it makes the most sense.
>
> **[5:10](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=310)** High value targets include login activity, both successes and failures, as well as access control failures and input validation failures.
>
> **[5:20](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=320)** Any of these could be an indicator of threat activity.
>
> **[5:24](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=324)** Centralize your application log data to an internal server.
>
> **[5:29](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=329)** Not only does this help prevent an attacker from modifying these logs, but it also gives your security team even more data for correlation purposes.
>
> **[5:38](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=338)** Make sure you're enforcing some of the integrity controls on the log data as well.
>
> **[5:43](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=343)** That way you can determine if someone was able to skirt your preventative controls and make changes to the logs.
>
> **[5:50](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=350)** Changes like removing log entries, or disabling logging mechanisms, and work with your security team to determine whether logs and alerts are being reviewed and acted upon in a reasonable amount of time.
>
> **[6:05](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=365)** Having all this log data means nothing unless you actually use it.
>
> **[6:09](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=369)** I already shared Lenny Seltzer's cheat sheet in the security misconfiguration module.
>
> **[6:15](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=375)** But those cheat sheets are worth revisiting when you start addressing logging and monitoring risks.
>
> **[6:21](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=381)** That said, there are a couple of additional resources you'll also want to use.
>
> **[6:25](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=385)** [[NIST]] Special publication 800-61 Rev. 2, their computer security incident handling guide covers security incident handling in detail.
>
> **[6:37](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=397)** And when you're ready for the big leagues, check out the Intelligence Community Standard 500-27 which covers the collection and sharing of audit data.
>
> **[6:48](https://www.linkedin.com/learning/static-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=408)** If you need more specific guidance than this standard has to offer, I'd be really surprised.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[NIST]] (1)
> **Env Vars:** owasp (2), sdlc (1), nist (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** troubleshoot (1), warning (1)
> **Speakers:** - [instructor] (1)

#### [A10: Server-Side Request Forgery](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=0)** - [Instructor] The final set of risks in the [[OWASP]] top 10 list are server-side request forgery, or SSRF, flaws.
>
> **[0:09](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=9)** These flaws enable attackers to convince internal infrastructure to access or abuse resources that were never meant to be available externally.
>
> **[0:20](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=20)** SSRF flaws differ slightly from command injection attacks.
>
> **[0:24](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=24)** When exploiting a command injection flaw, an attacker tries to trick an internal system to perform an action on their behalf, something like listing the contents of a directory or adding a local user account.
>
> **[0:37](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=37)** When exploiting an SSRF flaw, the attacker tries to gain access to an internal resource or to glean information about the target based on how that request is handled.
>
> **[0:49](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=49)** If an application assumes that every URL it processes is to be trusted, then the likelihood of an SSRF flaw goes up.
>
> **[0:58](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=58)** This brings us back to the concept of misuse and abuse cases.
>
> **[1:02](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=62)** An attacker can type anything they want into the URL field, and as long as the developers aren't testing for unexpected or potentially malicious content in those URLs, attackers can attempt to discover and exploit SSRF vulnerabilities to their heart's content.
>
> **[1:21](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=81)** It's not unheard of for attackers to modify a URL string to browse directly to sensitive files on the server.
>
> **[1:29](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=89)** If your app is running on a [[Linux]] server, for example, then an attacker might attempt to access the Etsy password file.
>
> **[1:37](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=97)** That's the one with all the local user accounts in it, by putting the path to that file right into the URL, but extracting local files is nothing compared to remotely triggering a system command.
>
> **[1:51](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=111)** Again, this isn't command injection.
>
> **[1:52](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=112)** It's a little sneakier.
>
> **[1:54](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=114)** An attacker might exploit an SSRF vulnerability to map the internal network, collecting host names, IP addresses and even a list of open ports, or they might tell an internal server to access a URL controlled by the attacker.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=131)** If successful, then attackers could potentially run their own malicious code on the internal server as a result, or they might even cause a denial of service condition on that box.
>
> **[2:23](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=143)** The big thing to look for when testing for SSRF flaws is URL validation.
>
> **[2:30](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=150)** Again, apps should not assume that every URL is to be trusted as is.
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=157)** You should also take a look at the app architecture to determine whether segmentation has been implemented.
>
> **[2:44](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=164)** If an SSRF flaw slips through the cracks, you can proactively minimize the exposure and the damage by limiting the internal network traffic to only those ports and services that are required for business use, and with the ever-increasing adoption of [[Cloud Services]], the presence of defined and enforced [[Cloud Security]] configuration standards is a pretty big deal.
>
> **[3:08](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=188)** An oversight that leaves a [[Cloud Storage]] bucket overexposed results in an SSRF vulnerability that's exceedingly simple to exploit.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=198)** Unfortunately, we've seen some prominent data breaches in recent years for this very reason.
>
> **[3:24](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=204)** Input sanitization and validation is at the top of the remediation list for SSRF vulnerabilities.
>
> **[3:31](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=211)** As long as the app doesn't assume it can trust user-supplied URLs, attackers are going to have a much harder time finding and exploiting these vulnerabilities.
>
> **[3:41](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=221)** You should also consider disabling or limiting HTTP redirects.
>
> **[3:47](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=227)** Those redirects might be a convenient way to route users to the right location, but they can also be exploited by attackers to force one of your servers to access a malicious URL that the attacker controls.
>
> **[4:01](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=241)** One other control you should consider are allow lists.
>
> **[4:05](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=245)** If you know what normal app traffic looks like, you can put rules in place that say anything outside of known good should fail.
>
> **[4:14](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=254)** OWASP strongly encourages allow lists over deny lists, since attackers have multiple ways to circumvent deny list controls.
>
> **[4:24](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=264)** The OWASP server-side request forgery prevention cheat sheet is a terrific resource to build into your developer's security training.
>
> **[4:34](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=274)** It provides some clear examples of these types of attacks, including a reminder that protocols other than HTTP are just as vulnerable.
>
> **[4:43](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=283)** For a more detailed analysis of SSRF attack prevention, you could jump straight to the SSRF bible from the Wallarm research team.
>
> **[4:52](https://www.linkedin.com/learning/static-application-security-testing/a10-server-side-request-forgery?u=76281980&t=292)** This 23-page PDF reads like an expanded version of the OWASP cheat sheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Linux]] (1), [[Cloud Services]] (1), [[Cloud Security]] (1), [[Cloud Storage]] (1)
> **Env Vars:** ssrf (12), url (8), owasp (4), http (2), pdf (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Static application security testing next steps](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=0)** - [Jerod] Thanks so much for taking the time to learn about static [[Application Security]] testing with me.
>
> **[0:06](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=6)** If I've done a decent job as your instructor, you should be able to begin applying what you've learned in this course right away, but there's only so much I can cover in the time allotted for a course like this one.
>
> **[0:17](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=17)** And I wouldn't be doing right by you unless I shared additional resources that might help you along after you wrap up here.
>
> **[0:23](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=23)** Make sure to check out the resource handout that accompanies this course.
>
> **[0:28](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=28)** Now that you're equipped with all this application security testing knowledge, what's next?
>
> **[0:33](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=33)** You should put it into practice, that's what.
>
> **[0:36](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=36)** I can't emphasize enough, how important it is that you build out and maintain your lab environment.
>
> **[0:43](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=43)** Whether it's a series of [[Virtual Machines]] on your laptop, a collection of VMs on a dedicated segment at your [[Microsoft Office|office]] or a cloud tenant that you use specifically for training and testing, it's crucial that you have somewhere to go to keep your skills sharp, and if you don't have a lab, build one.
>
> **[1:03](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=63)** The lab doesn't have to be complicated.
>
> **[1:05](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=65)** The lab for this course consists of two [[SaaS|software as a service]] applications and maybe, maybe a virtual machine; that's it.
>
> **[1:13](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=73)** Dig deeper into what you can do with the tools we covered in this course.
>
> **[1:18](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=78)** Better yet, download similar tools in this space so you can compare and contrast.
>
> **[1:23](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=83)** Sign up for trials of enterprise class tools so you can evaluate their full functionality against the free and open source tools installed in your lab.
>
> **[1:34](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=94)** As you get more hands-on experience performing application security testing, chances are you'll find that there's some parts you love while others, not so much.
>
> **[1:44](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=104)** That's okay, the important thing is that you recognize which areas of application security really captivate you.
>
> **[1:53](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=113)** When that happens, don't shy away from it, run toward it.
>
> **[1:58](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=118)** We have a critical need in this industry for professionals who possess both the interest and the aptitude to do the work that needs to be done.
>
> **[2:08](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=128)** And if that's you, embrace it, go after it.
>
> **[2:11](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=131)** If you already work in a corporate environment, the best way for you to apply this knowledge is to help with existing projects.
>
> **[2:19](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=139)** Ask around for opportunities that line up with the key static application security testing activities that we covered in this course.
>
> **[2:29](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=149)** If another group or team is already performing static application security testing internally, ask if you can shadow them.
>
> **[2:37](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=157)** If any of these tests are being overlooked, volunteer to do the first one.
>
> **[2:42](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=162)** Take your notes from this course, build your action plan and dive in.
>
> **[2:47](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=167)** If you're a student, internships are definitely one way to go and mentorships are another.
>
> **[2:54](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=174)** Approach your academic advisor and communicate your interest.
>
> **[2:57](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=177)** Set up a profile on [[LinkedIn]] and begin networking with local application security professionals.
>
> **[3:04](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=184)** If you ask enough people whether they might be interested in mentoring you, you may just be surprised at how many times you receive an, "Absolutely," in reply.
>
> **[3:14](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=194)** And most importantly, don't stop learning.
>
> **[3:18](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=198)** Keep practicing, keep studying.
>
> **[3:20](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=200)** Keep at it until you're doing what makes you happy.
>
> **[3:24](https://www.linkedin.com/learning/static-application-security-testing/static-application-security-testing-next-steps?u=76281980&t=204)** Thanks again for your time, and good luck with your next round of static application security tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (8), [[Virtual Machines]] (1), [[Microsoft Office|Office]] (1), [[SaaS|Software as a service]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we covered (2)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [jerod] (1)


## Instructor

- [[Jerod Brennen]]

## Resources

- Exercise files available

## Skills Covered

- Software Development
- Security Testing

## Path Context

### In [[Explore a Career in Application Security]]
← [[Dynamic Application Security Testing]] | **6 of 7** | [[Soft Skills for Information Security Professionals]] →

## Appears In

- [[Explore a Career in Application Security]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Software Development
- [[International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep]] — Software Development
- [[Leveraging AI for Security Testing]] — Security Testing
- [[Building with Google Gemini Advanced and Ultra]] — Software Development
- [[DevSecOps- Automated Security Testing]] — Security Testing

---

[↑ Back to top](#)