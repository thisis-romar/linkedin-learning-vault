---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: dynamic-application-security-testing
url: "https://www.linkedin.com/learning/dynamic-application-security-testing"
duration_minutes: 204
duration: 3h 24m
level: Intermediate
updated: 2/22/2023
learners: 177777
skills:
  - Application Security Assessments
  - Security Testing
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHy23Sv6I1VRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1676672978750?e=2147483647&amp;v=beta&amp;t=vdWfR_6bLWzADGPi_gBI5VBGmM188ih3tfkOFrHaUAM"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
prev_courses:
  - '[[Security Testing Essential Training (2022)]]'
next_courses:
  - '[[Static Application Security Testing]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":5,"total":7,"prev":"Security Testing Essential Training (2022)","next":"Static Application Security Testing"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/application-security-assessments
  - skill/security-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Dynamic%20Application%20Security%20Testing.md)

![Dynamic Application Security Testing](https://media.licdn.com/dms/image/v2/C560DAQHy23Sv6I1VRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1676672978750?e=2147483647&amp;v=beta&amp;t=vdWfR_6bLWzADGPi_gBI5VBGmM188ih3tfkOFrHaUAM)

# Dynamic Application Security Testing

> Building security testing into the software development lifecycle is the best way to protect your app and your end users. This course identifies tools and techniques that developers can use to minimize the cost and impact of security testing—while maximizing its impact and effectiveness. Instructor Jerod Brennen focuses on dynamic application security testing, using security scanning, penetration 

> [LinkedIn Learning](https://www.linkedin.com/learning/dynamic-application-security-testing) | 3h 24m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The importance of dynamic testing](#the-importance-of-dynamic-testing)
  - [What you should know](#what-you-should-know)
- [**1. Security Testing in QA**](#1-security-testing-in-qa) (6 videos)
  - [Software quality assurance process](#software-quality-assurance-process)
  - [Positive testing](#positive-testing)
  - [Negative testing](#negative-testing)
  - [SQA metrics](#sqa-metrics)
  - [OWASP Testing Guide](#owasp-testing-guide)
  - [Demo: OWASP ZAP](#demo-owasp-zap)
- [**2. Assessing Deployed Apps**](#2-assessing-deployed-apps) (8 videos)
  - [Manual vs. automated testing](#manual-vs-automated-testing)
  - [Scanning vs. pen testing](#scanning-vs-pen-testing)
  - [Testing in non-production](#testing-in-non-production)
  - [Testing in production](#testing-in-production)
  - [OSINT gathering](#osint-gathering)
  - [Web app proxies](#web-app-proxies)
  - [DevSecOps](#devsecops)
  - [Demo: Burp Suite](#demo-burp-suite)
- [**3. Web App Pen Testing**](#3-web-app-pen-testing) (8 videos)
  - [Scoping a web app pen test](#scoping-a-web-app-pen-test)
  - [Avoiding production impacts](#avoiding-production-impacts)
  - [Penetration testing execution standard](#penetration-testing-execution-standard)
  - [Types of pen tests](#types-of-pen-tests)
  - [Web application firewalls](#web-application-firewalls)
  - [SIEMs](#siems)
  - [Purple teaming](#purple-teaming)
  - [Demo: Kali Linux](#demo-kali-linux)
- [**4. Testing for the OWASP Top Ten (2021)**](#4-testing-for-the-owasp-top-ten-2021) (11 videos)
  - [The OWASP Top Ten](#the-owasp-top-ten)
  - [A1: Broken access control](#a1-broken-access-control)
  - [A2: Cryptographic failures](#a2-cryptographic-failures)
  - [A3: Injection](#a3-injection)
  - [A4: Insecure design](#a4-insecure-design)
  - [A5: Security misconfiguration](#a5-security-misconfiguration)
  - [A6: Vulnerable and outdated components](#a6-vulnerable-and-outdated-components)
  - [A7: Identification and authentication failures](#a7-identification-and-authentication-failures)
  - [A8: Software and data integrity failures](#a8-software-and-data-integrity-failures)
  - [A9: Security Logging and monitoring failures](#a9-security-logging-and-monitoring-failures)
  - [A10: Server-side request forgery (SSRF)](#a10-server-side-request-forgery-ssrf)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of dynamic testing](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=0)** - [Jerod] Hi, I'm Jerod Brennen and welcome to Dynamic [[Application Security]] Testing Essentials.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=6)** I put this course together to help you learn the skills and the tools that you'll need in order to dynamically test [[Cybersecurity]] controls in web applications.
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=18)** I've been working in cybersecurity long enough to have earned every gray hair in my beard and I want to share what I've learned over the years to help you begin applying that same knowledge today.
>
> **[0:30](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=30)** When testing web applications for potential security vulnerabilities, those tests fall into two overarching categories: static tests and dynamic tests.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=41)** The primary goal of this course is to help you learn how to select the right testing methodology and the right testing tools to perform security tests of deployed applications.
>
> **[0:53](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=53)** Are you ready to learn how to conduct dynamic application security testing?
>
> **[0:57](https://www.linkedin.com/learning/dynamic-application-security-testing/the-importance-of-dynamic-testing?u=76281980&t=57)** Good. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (2), [[Cybersecurity]] (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [jerod] (1)

#### [What you should know](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is intended to be a broad introduction to dynamic [[Application Security]] testing.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=7)** We're going to be covering a lot of tools and techniques, equipping you with the knowledge of both [[Manual Testing]] techniques and tools that you can use to automate your testing activities.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=19)** If you've taken any of my other [[LinkedIn]] Learning courses, chances are you've heard me say something along the lines of fundamentals will win the day.
>
> **[0:28](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=28)** That's because it's absolutely true.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=32)** If you don't get the basics right before you try to tackle more complicated security tasks, you're going to be building your house on an unsteady foundation.
>
> **[0:42](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=42)** When you've got a good handle on what you need to do, the next step is to learn how to do it.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=49)** As we cover these fundamentals throughout the course, we're going to be putting together a toolkit that you can use both during the course and in your day-to-day testing activities.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=61)** Normally, I prefer doing all of my training and testing using a small collection of [[Virtual Machines]].
>
> **[1:07](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=67)** I'd encourage you to do the same, following along with demos in your own home lab environment.
>
> **[1:13](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=73)** When the time comes that you're ready to try your hand at one or more of the demos, you can always jump right to that video and follow along.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=82)** In addition to learning the tools, we're going to cover everything from [[Security Testing]] in QA to assessing deployed apps to performing a web application penetration test.
>
> **[1:34](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=94)** You'll also learn about specific dynamic tests you can perform against the [[OWASP]] Top 10.
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/what-you-should-know?u=76281980&t=101)** You'll also have access to a handout I prepared for this course full of notes and resources for when you're ready to do more testing on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Manual Testing]] (1), [[LinkedIn]] (1), [[Virtual Machines]] (1), [[Security Testing]] (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [narrator] (1)


### 1. Security Testing in QA

[↑ Back to Table of Contents](#table-of-contents)

#### [Software quality assurance process](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=0)** - [Instructor] When the time comes that you're ready to try your hand at one or more of the demos you can always jump right to that video and follow along.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=9)** If you want to ensure that security is baked into your application you'll want to test the security of your application as part of your [[Quality Assurance]] efforts.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=19)** This is an excellent way to embed security into your SDLC.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=24)** Then what's the SDLC again?
>
> **[0:27](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=27)** SDLC stands for [[Software Development]] Life Cycle.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=32)** The SDLC encompasses every stage or phase that you go through when building or modifying an application.
>
> **[0:40](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=40)** The SDLC is a process that defines the steps necessary to take your software from an idea to a deployed functional solution.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=49)** Once you understand what an app needs to do and you capture those requirements you can design a functional version of the app and move through coding and testing to ensure that it actually works as intended.
>
> **[1:02](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=62)** After an app is deployed to production something is going to change.
>
> **[1:07](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=67)** Whether it's new use cases, new technologies, or a narrowed focus, the evolution of your app will feed information back into the planning and requirements phases, and the cycle will begin again.
>
> **[1:20](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=80)** So how do you embed security into this life cycle?
>
> **[1:24](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=84)** My recommendation is that you treat security as a function of quality Apps need to meet the quality standards set forth by your company before those apps can be deployed and presented to your users.
>
> **[1:38](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=98)** If an app fails to meet those quality standards then it's back to the drawing board to determine how to correct any flaws and when it comes to fixing the security flaws that you find you'll get the most traction by treating security defects like bugs in the code.
>
> **[1:57](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=117)** In traditional developer language, a bug is any defect in the code that causes it to either fail or act unexpectedly.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=126)** The unfortunate history of software security is that for years it was treated as an add-on.
>
> **[2:13](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=133)** If security was discussed at all, it was usually a brief conversation about logins and passwords.
>
> **[2:19](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=139)** As attacks have increased in complexity and effectiveness, so has the need for developers to improve the quality of their security controls.
>
> **[2:29](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=149)** By considering security flaws as bugs, those flaws end up in the queue to get fixed along with the [[Representational State Transfer (REST)|rest]] of the issues.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=157)** The process for identifying and fixing bugs and applications is known as [[Software Quality Assurance]], or QA.
>
> **[2:45](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=165)** QA includes a number of activities in order to ensure the quality of an application can be assured.
>
> **[2:52](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=172)** Activities like performing technical reviews to identify flaws, documenting and testing strategy to ensure repeatable processes with reliable results, documenting and enforcing standards so that developers and testers understand what's expected of them, implementing change control procedures to maintain the integrity of the application and its supporting infrastructure and determining which metrics and measurements you'll rely on to validate that the quality standards have been met.
>
> **[3:25](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=205)** You may have an uphill battle ahead of you though.
>
> **[3:28](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=208)** Security hasn't always been considered a component of software quality.
>
> **[3:33](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=213)** Portability, reliability, testability, flexibility, efficiency, and usability.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=219)** All of these terms are likely to be part of every developer's vocabulary.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=224)** When you begin pressing them to discuss security though, you may find that their understanding of security as a function of quality is limited, and that's okay.
>
> **[3:55](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=235)** It just means that you have an opportunity to share what you've learned to ensure that everyone's on the same page.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=242)** Remember, we're all on the same team here.
>
> **[4:05](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=245)** We all want the apps to do what they're supposed to do and to minimize the risk that an attacker could break our apps or make them do something they're not supposed to do.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/software-quality-assurance-process?u=76281980&t=255)** By treating security as a function of quality, you'll be one step closer to accomplishing that goal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Quality Assurance]] (1), [[Software Development]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Software Quality Assurance]] (1)
> **Env Vars:** sdlc (5)
> **Definitions:** is an  (1), stands for (1), is a  (1), known as (1), means that (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Positive testing](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=0)** - [Presenter] During the QA process, you'll be designing and maybe even executing test cases.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=6)** Many of those test cases will focus on positive testing.
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=11)** What do I mean by that?
>
> **[0:13](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=13)** Positive testing involves providing applications with input to verify that the actual output matches the expected output.
>
> **[0:23](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=23)** In other words, does the app do what it's supposed to do?
>
> **[0:28](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=28)** Consider the ZIP code example that I share in the [[Static [[Application Security]] Testing]] class.
>
> **[0:34](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=34)** If you're designing an application that requires a user's mailing address, chances are that you'll ask them for a postal code or a ZIP code.
>
> **[0:43](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=43)** In the US, a ZIP code is traditionally five numbers.
>
> **[0:47](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=47)** If a user enters the number 87104 in the ZIP code field, your application might check that number against a database of ZIP codes and automatically populate the city field as Albuquerque and the state as New Mexico.
>
> **[1:03](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=63)** When a positive test returns the expected results, that's an indicator that the app is on the right track to meet the organization's quality standards.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=74)** The development team likely has a lengthy list of functional test cases that fit into the positive testing category.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=82)** By spending a little time with the requirements document, you can quickly identify a number of positive tests that will make or break an application.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=92)** If you build an [[E-Commerce]] app that doesn't allow visitors to buy anything, for example, then I seriously doubt your app is ready to go live.
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=101)** But when it comes to positive security test cases, well, that's on you to put that list together.
>
> **[1:48](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=108)** So what are some good examples of positive security test cases?
>
> **[1:53](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=113)** From a [[Security Testing]] standpoint, positive security test cases should focus on those security controls designed to limit who can access application data.
>
> **[2:05](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=125)** Start by testing basic access controls.
>
> **[2:08](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=128)** Does the application require a login?
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=131)** When you log in, can you access information about your profile?
>
> **[2:16](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=136)** Move on to testing authorization controls.
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=140)** Can you see all the pages and [[Forms]] and data that your test account should be able to see?
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=146)** You should also consider testing password management controls, On the front end, can you set and reset your password?
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=155)** On the back end, are passwords stored as salted hashes?
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=160)** Regarding session management, build a series of tests around establishing and ending a session.
>
> **[2:47](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=167)** Make sure that sessions are created and destroyed as expected, and make sure that all traffic is encrypted in transit.
>
> **[2:55](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=175)** And yes, I did say all traffic.
>
> **[2:59](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=179)** If you're not sure where to begin, you can always refer to the [[OWASP]] Web Security Testing Guide.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=185)** Just search for the category that lines up with the security test case you're building, and then read up on how you can go about executing that test case.
>
> **[3:15](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=195)** Once you build out a series of positive security test cases that align with your application's functional requirements, you're one step away from automating those tests.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=206)** And when you bring automation into play, you can ensure that those controls are tested and validated with every subsequent version of the app.
>
> **[3:35](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=215)** The end result is an app that aligns with a core set of basic security requirements.
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/positive-testing?u=76281980&t=221)** Look, you've already helped improve the security of your apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (2), [[Application Security]] (1), [[E-Commerce]] (1), [[Forms]] (1), [[OWASP]] (1)
> **Env Vars:** zip (5), owasp (1)
> **CLI Commands:** make (3)
> **Definitions:** in other words (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Negative testing](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=0)** - [Instructor] Positive testing is great for making sure the app works like it's supposed to.
>
> **[0:05](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=5)** But what happens when an attacker attempts to break an application?
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=10)** How do you test whether or not the app can withstand or deflect an actual attack?
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=15)** This is where negative testing comes into play.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=19)** Negative testing involves sending unexpected input to an application in order to observe how the application reacts.
>
> **[0:28](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=28)** When that happens does the app do anything it's not supposed to do?
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=33)** Back to the zip code lookup one last time.
>
> **[0:36](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=36)** Behind the scenes, your application might accept data from a user and assign it to a variable.
>
> **[0:43](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=43)** Let's call that variable zip code.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=45)** Keep it simple.
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=46)** If you wanted to test for whether the application is vulnerable to [[SQL]] injection, you could start by considering how an attacker might exploit that weakness.
>
> **[0:57](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=57)** Using an escape character the attacker could send additional commands to the database.
>
> **[1:03](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=63)** The attacker might want to see every username in the user's table.
>
> **[1:08](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=68)** Better yet, what if the developers stored the passwords as plain text values in a table named passwords?
>
> **[1:16](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=76)** That would be useful info.
>
> **[1:17](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=77)** Now, wouldn't it?
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=78)** And if the attacker wasn't interested in stealing data, but just wanted to make sure you're having a really bad day, maybe the attacker would try to drop the user's table entirely.
>
> **[1:31](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=91)** You obviously don't want to damage the database during testing, but a simple select statement would make for a great negative test.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=100)** Try to extract data from a known table.
>
> **[1:43](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=103)** If it works then you've found a way to make the app do something it's not supposed to do.
>
> **[1:49](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=109)** Positive testing is, in my opinion easier to scope and manage.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=114)** You'll identify a reasonable finite number of positive tests, deriving them from documented functional requirements, and you can build out use cases that demonstrate what you can expect a user to do while interacting with the app.
>
> **[2:10](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=130)** With negative testing, you can probably already see that that's a lot trickier.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=135)** There are a potentially infinite number of input combinations and permutations that represent what an attacker might attempt to do to abuse your application.
>
> **[2:27](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=147)** You may get lucky and be able to derive some of your negative tests from the functional requirements documentation, but it's more likely that you'll need to turn to internal and external security standards to make sure that you've given your negative testing activity the attention it deserves.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=166)** Once you've got a set of misuse cases that represent these threats you're most concerned with, then you're good to go.
>
> **[2:55](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=175)** If you are not sure where to start when it comes to identifying relevant threats, you can take a broader approach and turn to the [[OWASP]] top 10 list.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=185)** Each item in the top 10 list represents a category of negative tests that you should consider building into your QA processes.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=194)** If you build a handful of automated negative tests for each item in the OWASP top 10 then you'll significantly reduce the likelihood of your app being compromised by someone with malicious intent.
>
> **[3:28](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=208)** Once you've gotten negative test cases in place for the top 10, you should take a look at the OWASP cheat sheet series next.
>
> **[3:37](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=217)** This series has grown to the point where there are now 78 unique cheat sheets, each one full of code snippets that your developers can use to defensively code against a variety of attacks.
>
> **[3:51](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=231)** This list contains guidance on protecting everything from [[AJAX]] to XML.
>
> **[3:57](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=237)** Since these cheat sheets were designed to teach defensive coding it's going to take a little creativity on your part to build out relevant negative tests.
>
> **[4:07](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=247)** The cheat sheets won't show you exactly how to construct your tests, but rather the collection serves as a representation of security knowledge that your developers have at their disposal.
>
> **[4:20](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=260)** By building negative tests that validate whether these cheat sheets are being used, you not only increase the security of your apps, but you also ensure that your developers have a deeper understanding of [[Secure Coding]].
>
> **[4:35](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=275)** Building negative [[Security Testing]] into your QA processes will take some work on your part.
>
> **[4:41](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=281)** When your app successfully makes it through QA after passing those tests though you should celebrate with your DEV team.
>
> **[4:50](https://www.linkedin.com/learning/dynamic-application-security-testing/negative-testing?u=76281980&t=290)** After all, you've just successfully integrated security into your QA process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[SQL]] (1), [[AJAX]] (1), [[Secure Coding]] (1), [[Security Testing]] (1)
> **Env Vars:** owasp (3), sql (1), ajax (1), xml (1), dev (1)
> **CLI Commands:** make (4)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [SQA metrics](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=0)** - [Instructor] Following a successful round of QA test, you might be tempted to kick back and relax.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=6)** Your app is finally secure, right?
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=9)** Well, that depends on how well the app fared during those tests.
>
> **[0:14](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=14)** It also depends on how well the app fairs during future tests.
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=18)** That's why you need to define some QA metrics.
>
> **[0:22](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=22)** Measuring the results of your [[Software Quality Assurance]] security tests over time can lead to better security and better testing techniques.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=31)** Depending on the security maturity of your development team, your early rounds of security QA testing might not produce the results you expect.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=41)** That's okay.
>
> **[0:43](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=43)** As a matter of fact, that's pretty normal.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=45)** You can't improve the security of your app unless you know the current security strengths and weaknesses.
>
> **[0:53](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=53)** In addition to improving security, identifying and tracking these metrics helps you to improve the testing processes themselves.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=61)** You might find that you can combine certain tests and eliminate others, cutting down on testing time without sacrificing quality.
>
> **[1:10](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=70)** You might also find that you have gaps in your testing processes.
>
> **[1:15](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=75)** As you fine-tune your current test, you should consider exploring additional security tests that might also be beneficial to your app.
>
> **[1:24](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=84)** In the information security space, it's commonly held that this thing we call security is actually a combination of confidentiality, integrity, and availability.
>
> **[1:36](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=96)** We even have a special name for the concept, the CIA triad.
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=101)** The three elements of this triad aren't necessarily equal though.
>
> **[1:46](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=106)** I worked for a public utility where integrity was pretty important.
>
> **[1:50](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=110)** If someone could make unauthorized changes to the industrial control systems that kept a nuclear power plant running smoothly, that could potentially end in a loss of life scenario.
>
> **[2:03](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=123)** On the other end of the spectrum, I worked for a retailer with multiple [[E-Commerce]] applications.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=129)** If any application went offline for more than a few seconds, everyone had to drop what they were doing and fix the problem.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=137)** An offline e-com site meant lost sales and sales were everything to that organization.
>
> **[2:24](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=144)** In an environment like that, availability is key.
>
> **[2:29](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=149)** When building out your [[Quality Assurance]] metrics, you need to understand the priority of the CIA triad in your organization.
>
> **[2:39](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=159)** ISO, the International Organization for Standardization, maintains ISO/IEC 25010 to provide detailed guidance on software product quality.
>
> **[2:52](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=172)** The goal of this document is to provide you with a comprehensive quality model for software developers to rely on.
>
> **[3:01](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=181)** For years, this standard centered around operational characteristics, focusing on things like functionality, reliability, and maintainability.
>
> **[3:12](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=192)** When the standard was updated in 2011, security moved from being a minor component of functionality to being a unique characteristic itself.
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=203)** This new security characteristic includes five sub characteristics: confidentiality, or keeping secret secret, integrity, preventing unauthorized changes, non-repudiation, proving that events occurred, [[Accountability]], assigning activity to an owner and authenticity, proving the identity of a person or resource.
>
> **[3:51](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=231)** While the CIA triad provides a good foundation for building out your QA metrics, ISO 25010 provides an even better foundation.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=242)** In the [[OWASP]] Developer Guide Project, you'll find a section dedicated to software quality assurance.
>
> **[4:10](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=250)** This specific guidance focuses on confidentiality and integrity of data, both at [[Representational State Transfer (REST)|rest]] and in motion.
>
> **[4:18](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=258)** It provides you with the best practices for building out your QA metrics while going into a bit of detail around not just metrics, but the process and testing activities as well.
>
> **[4:30](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=270)** One of the metrics that will likely bubble to the top of your list is security bugs detected, versus security bugs remediated.
>
> **[4:39](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=279)** Personally, I think this QA metric should be tracked in every development shop.
>
> **[4:44](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=284)** Every one.
>
> **[4:46](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=286)** You can feed the list of known security bugs to the security team, so they can explore useful compensating controls.
>
> **[4:54](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=294)** You can also track this trend over time to see if the gap between known bugs and fixed bugs is growing or shrinking.
>
> **[5:05](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=305)** OWASP also provides guidance on two distinct types of [[Application Security]] metrics you should consider tracking.
>
> **[5:13](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=313)** Direct metrics are the ones that you can measure within the software.
>
> **[5:18](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=318)** These include items like lines of code, languages and security mechanisms used, and configuration files associated with the application.
>
> **[5:29](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=329)** Indirect metrics are the ones that live outside of the software.
>
> **[5:33](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=333)** These include items like accurate and complete security documentation, security training provided to the developers, and a documented process for reporting security flaws.
>
> **[5:46](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=346)** If you are looking for a quick list of application security metrics to try your hand at, head over to this URL and give the complete list a once over.
>
> **[5:56](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=356)** Although this link points to an older version of the OWASP website, the information on this page is still incredibly useful.
>
> **[6:05](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=365)** And if OWASP isn't your jam, you can always turn to [[NIST]].
>
> **[6:10](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=370)** NIST maintains the Software Assurance Metrics and Tool Evaluation project or SAMTE.
>
> **[6:18](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=378)** True in its form, this project contains extensive technical detail on ways to measure and track security bugs in software.
>
> **[6:28](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=388)** The Bugs Framework tracks multiple classes of software vulnerabilities, ranging from authentication and authorization bugs, to pseudo random number and true random number bugs.
>
> **[6:41](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=401)** This framework consumes information from multiple sources, including the Common Weakness Enumeration list from MITRE, taking those sources apart and putting them back together in a way that helps developers find bugs, fix bugs, and prevent those bugs from creeping back into their applications.
>
> **[7:02](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=422)** SAMATE also includes two collections of test cases, the Juliet Test Suites, as well as a Software Assurance Reference Dataset that contains literally thousands of test programs that you can use to help build out your own test cases.
>
> **[7:20](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=440)** These resources aren't updated as frequently as the OWASP projects, but don't let that hinder you from seeing the value that you can extract from these resources on the very first day that you download them.
>
> **[7:35](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=455)** With so many resources at your disposal, it's not a matter of figuring out where to start.
>
> **[7:42](https://www.linkedin.com/learning/dynamic-application-security-testing/sqa-metrics?u=76281980&t=462)** It's more a matter of figuring out where to stop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (5), [[Software Quality Assurance]] (2), [[Application Security]] (2), [[NIST]] (2), [[E-Commerce]] (1)
> **Env Vars:** owasp (5), cia (3), iso (3), nist (2), iec (1)
> **CLI Commands:** find (4), make (1)
> **Speakers:** - [instructor] (1)

#### [OWASP Testing Guide](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=0)** - [Instructor] I referenced the [[OWASP]] Web [[Security Testing]] Guide multiple times throughout both this course and the [[Static [[Application Security]] Testing]] course.
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=10)** Why?
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=11)** Because it's that good.
>
> **[0:13](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=13)** That's why.
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=15)** I've worked as a web application pen tester for years.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=19)** When I started out, I was on the hunt for a way to organize and conduct my test in a way that ensured I was covering as much as I could within the timeframe allotted to each engagement.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=32)** Enter the OWASP Web Security Testing Guide.
>
> **[0:36](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=36)** One look at this guide, and I had 80% of what I needed.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=41)** I cannot convey how much time this saved in my research, or how much value this brought to each engagement.
>
> **[0:50](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=50)** The best part, the test that a pen tester is likely to conduct are the same security tests that you should be building into your QA process.
>
> **[1:00](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=60)** Two birds, one stone.
>
> **[1:03](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=63)** As I mentioned in my [[Static Application Security Testing]] class, OWASP group's related resources in projects and they have three distinct project categories.
>
> **[1:15](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=75)** Flagship projects are the most mature, most strategic resources OWASP has to offer.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=82)** Production projects is a relatively new project level.
>
> **[1:27](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=87)** This designation is reserved for production-ready projects.
>
> **[1:31](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=91)** Although that list is still being developed.
>
> **[1:34](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=94)** Other projects are useful, but they're not quite ready for primetime.
>
> **[1:39](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=99)** This list includes projects that were formerly labeled as lab or incubator projects.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=105)** They include specific tools or documentation resources that have found a large population of interested users.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=114)** They also include Playground projects, where forward thinkers can test out new ideas and hopefully produce something that will ultimately be promoted to either production or flagship status.
>
> **[2:07](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=127)** The testing guide falls squarely in the flagship category.
>
> **[2:12](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=132)** In section two of the guide, the introduction, OWASP goes into detail regarding how you can apply this guide when performing source code reviews, [[Penetration Testing]], and QA testing.
>
> **[2:27](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=147)** As you're adding security tests to your QA workflow, you can learn a tremendous amount from sections 2.9, 2.10, and 2.11, in particular.
>
> **[2:38](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=158)** Section 2.9 covers security test requirements.
>
> **[2:43](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=163)** It emphasizes a need for identifying your testing objectives first, as well as aligning your testing activities with threat and countermeasure taxonomies.
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=173)** This section clarifies the difference between functional security requirements and risk-driven security requirements, before showing you how to create use and misuse cases.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=186)** Section 2.10 covers integrating these tests into your testing workflows.
>
> **[3:12](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=192)** It explains which unit test you should consider handing over to your developers and which functional tests, both integrated system test and operation tests, should be conducted by your testing engineers.
>
> **[3:27](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=207)** And section 2.11 helps you understand how to take all of the results from your test and make sense of them, building out metrics and measurements to track your progress over time.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=219)** The guide links all these tests back to business use cases, to close the loop and ensure that you've met testing objectives that have value to the organization.
>
> **[3:52](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=232)** While the 200 plus pages that make up the testing guide are chock full of useful information, it's not exactly efficient to move through the guide page by page while you're executing your tests.
>
> **[4:07](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=247)** But when you transcribe the high points into a testing checklist, then you've got something you can use day-to-day.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=255)** When I originally started using the guide to my own testing, I put together an [[Microsoft Excel|Excel]] spreadsheet that contained the name of each test, a description of what I was testing, a column for my favorite testing tools and techniques, and a column where I could track the results.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=273)** It comes as no surprise that I wasn't the only one to do this.
>
> **[4:37](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=277)** Sometime back, I chance to cross the [[GitHub]] project listed here where another tester built an even better tracking tool, adding a tab for summary findings and another that contained a risk assessment calculator.
>
> **[4:51](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=291)** As you are starting out, you should either take a look at this tool or build your own.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=297)** Use this tool to track your initial test, then refer to it as a requirement, stock of sorts as you start automating each test.
>
> **[5:08](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=308)** By using the OWASP Testing Guide to build out your QA testing checklist, you can be confident that you're performing a comprehensive set of application security tests.
>
> **[5:20](https://www.linkedin.com/learning/dynamic-application-security-testing/owasp-testing-guide?u=76281980&t=320)** The end result will likely be an app that will meet your user's needs while relentlessly frustrating attackers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (6), [[Application Security]] (3), [[Security Testing]] (2), [[Penetration Testing]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** owasp (6)
> **Versions:** 2.9 (2), 2.10 (2), 2.11 (2)
> **CLI Commands:** make (2)
> **Tools:** github (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo: OWASP ZAP](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=0)** - [Instructor] In order to use OWA ZAP, you're going to have to download a copy to your local machine and you can do so from [zaproxy.org](https://zaproxy.org).
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=9)** If you scroll down to the Download Now section, you'll see there are plenty of options available depending on your operating system and your test lab environment.
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=18)** But we're also going to need a web application to test, which is where we're going to turn to the [[OWASP]] Vulnerable Web Applications directory.
>
> **[0:27](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=27)** If you go to this resource, you've got a number of apps deliberately vulnerable by design that are built and maintained for testers like you and me.
>
> **[0:37](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=37)** We've got mobile apps, offline apps, but you're more interested in the Online application.
>
> **[0:42](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=42)** We're going to point ZAP to an online vulnerable web app to see what we can find.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=49)** And the one that I'd like you to start with is the OWASP Juice Shop.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=54)** This is an app that OWASP has built and maintains here to do exactly what we're doing today.
>
> **[1:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=60)** Go through testing a tool like OWASP ZAP.
>
> **[1:04](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=64)** When you open OWASP ZAP, you're going to be given three options about persisting the session.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=72)** Do you want to persist it with name based on current timestamp?
>
> **[1:15](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=75)** Do you want to persist it, but specify the name and location, or do we not want to worry about persistence at all.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=82)** For a test like this one, let's go with the default, No, I don't want to persist, but during an actual test, if you're using this to collect results over time, then you may want to persist the session as you leave the app and come back.
>
> **[1:35](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=95)** But for now, we'll say, No, I don't want to persist.
>
> **[1:39](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=99)** And at its simplest, ZAP gives you the opportunity to point and click scan a vulnerable web application.
>
> **[1:48](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=108)** Here on the main screen, we're going to go to Automated Scan and all we need to enter is the URL to attack.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=116)** So if you want to put in [https://preview.owasp-juice.shop](https://preview.owasp-juice.shop),
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=126)** I've also got the /#/ at the end, but that's optional.
>
> **[2:10](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=130)** If you've got that in the URL to attack field, then you can jump right down to this lightning bolt attack button, click on it, and at the bottom you'll see this Spider tab pop up.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=146)** So what ZAP is doing now is analyzing that website to find URLs to attack and then it jumps right into Active Scan.
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=155)** It's using the vulnerability database built into the tool to look at all of the available URLs that the spider was able to identify and try to determine whether or not there are vulnerabilities in those URLs.
>
> **[2:49](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=169)** If you click on the Alerts button, you can see in real time, prioritized vulnerabilities.
>
> **[2:57](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=177)** We've got a few CSP vulnerabilities that are medium severity, which is this orange flag.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=185)** They're a handful of lower severity vulnerabilities which is the yellow flag, and a handful of blue findings which are really more informational, not vulnerabilities at all.
>
> **[3:18](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=198)** And within each vulnerability, they identify the type of vulnerability.
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=203)** Here, it's a content security policy has not been set.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=206)** And then they provide a description of what does this mean.
>
> **[3:31](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=211)** And for some vulnerabilities, you can even have information about how do you fix it.
>
> **[3:36](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=216)** Are there OWASP resources that can help you address that finding?
>
> **[3:40](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=220)** Now this scan is already 100% complete and it didn't find a whole lot because we didn't authenticate to the Juice Shop application.
>
> **[3:52](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=232)** As I mentioned in the earlier video, unauthenticated scans show you the outsider's perspective, but if you want to understand what vulnerabilities, all of the application might be exposed to, all of those internal URLs hidden behind a login page, then you're going to need to tell a tool like ZAP how to log into your application.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=255)** And you can do that by going to File, Session Properties.
>
> **[4:21](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=261)** And then looking at the Context.
>
> **[4:23](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=263)** Now I'm going to blow this up here.
>
> **[4:27](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=267)** Context are those things that are unique about the scan that you're trying to run right now.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=273)** Like for example, what user accounts am I interested in using to run these scans?
>
> **[4:41](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=281)** Are there more than one, or am I just going to have a single user account that I'm going to test?
>
> **[4:45](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=285)** And when a user wants to log into the application, how do they authenticate?
>
> **[4:52](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=292)** Now, as an example, you might come to authentication and say, I have a login form.
>
> **[4:58](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=298)** That login form is located at this URL, and I'll just put something in here and the username and password that I want to use are going to be extracted from the URL that you put into the application.
>
> **[5:16](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=316)** Now, once you've got the type of authentication set, then you can go into Users and say, I want to add a user named admin.
>
> **[5:29](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=329)** And then the details, that admin at the top is just a reference identifier, but the username and password parameters that we're entering right here are what will actually be sent to the application.
>
> **[5:43](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=343)** And when you configure the authentication parameters in this context and the users that are relevant to your application, then you can go back to the application, to the OWASP ZAP app, go to Quick Start, kick off another attack, and that scan will run considerably longer.
>
> **[6:07](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=367)** So try it out.
>
> **[6:08](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=368)** Look at the OWASP Juice Shop website, look at some of the documentation that OWASP has about the project.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=374)** Here's a little hint.
>
> **[6:15](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=375)** The username and password for the application are in the documentation.
>
> **[6:20](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=380)** And then use that to configure OWASP ZAP on your own.
>
> **[6:23](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-owasp-zap?u=76281980&t=383)** Try it out and see what you can find using this tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (11)
> **Env Vars:** owasp (10), zap (9), url (4), owa (1), csp (1)
> **UI Navigation:** go to (3), click on (2), scroll down (1)
> **CLI Commands:** find (4)
> **URLs:** [zaproxy.org](https://zaproxy.org) (1), [https://preview.owasp-juice.shop](https://preview.owasp-juice.shop) (1)
> **Documentation:** the documentation (2)
> **Prerequisites:** configure (2)
> **Definitions:** is an  (1)


### 2. Assessing Deployed Apps

[↑ Back to Table of Contents](#table-of-contents)

#### [Manual vs. automated testing](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=0)** - [Instructor] [[Application Security]] testing procedures should involve a combination of manual hands-on tests and automated scans.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=9)** It's up to you, though, to strike the right balance between the two.
>
> **[0:14](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=14)** Far too often we jump right into automated scans to figure out where our apps might be exposed.
>
> **[0:21](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=21)** In my experience, this approach is severely limiting.
>
> **[0:26](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=26)** If you want to find the right balance between manual and automated dynamic tests, you should start by conducting static application security tests.
>
> **[0:36](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=36)** Review all the available documentation on both the app and the organization's security requirements.
>
> **[0:42](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=42)** Review the results of the latest source code security reviews.
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=46)** Review the outcome of the static test conducted to measure the code against the [[OWASP]] top 10.
>
> **[0:53](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=53)** Use all that information to build a foundational understanding of the app.
>
> **[0:58](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=58)** If you do, you'll be able to identify relevant tools and techniques for dynamic testing much more quickly Take OWASP ZAP, for example.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=69)** In the options menu one of the settings you can modify is the list of globally excluded URLs.
>
> **[1:17](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=77)** These are the URLs that you don't want the scanner to interact with.
>
> **[1:21](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=81)** If you spend time reviewing the documentation on your application's administrative features, then you could fine tune your scan to avoid breaking the app on its first run.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=93)** Likewise, you could upload a list of known URLs in the forced browse option to ensure that you're scanning the entire application and that you're not missing any URLs that aren't immediately apparent to an end user.
>
> **[1:47](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=107)** And these are just a couple of quick wins in ZAP.
>
> **[1:50](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=110)** If your source code security reviews revealed that your developers are struggling to defensively code against [[SQL]] injection attacks, then you might use a tool like [[SQLmap]] in your online testing activities in addition to using ZAP.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=126)** That way you're able to spend your dynamic testing time wisely, focusing on risks that came to light as a result of your static testing efforts.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=137)** With dynamic testing, it doesn't need to be either manual or automated.
>
> **[2:23](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=143)** In fact, your best results will come from performing both types of tests.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=148)** After you review the results from your static testing the next thing you should do is run a series of automated dynamic scans.
>
> **[2:36](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=156)** A tool like OWASP ZAP can find potentially exploitable flaws in just a few minutes.
>
> **[2:43](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=163)** Flaws that might take you weeks to find otherwise, if you're able to find them at all.
>
> **[2:48](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=168)** What's even better is that the scan results often include instructions on how to fix the flaws, which can be a huge time saver.
>
> **[2:57](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=177)** With your automated scan results in hand, then you're ready to dive into [[Manual Testing]].
>
> **[3:03](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=183)** You can use the output of the automated scans to pinpoint areas of the application, separating the false positives from the actual vulnerabilities.
>
> **[3:13](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=193)** You can also start testing business logic flaws, something automated scanners aren't capable of effectively testing, and you can chain together lower severity vulnerabilities to identify ways that an attacker might actually break your application.
>
> **[3:30](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=210)** If you're not doing both manual testing and automated testing, you're only seeing a fraction of the larger picture.
>
> **[3:38](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=218)** George Box, the British statistician, hit the nail on the head when he said "All models are wrong.
>
> **[3:45](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=225)** Some are useful."
>
> **[3:47](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=227)** While he originally made this observation in his professional field, it holds true when discussing application security testing techniques.
>
> **[3:56](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=236)** There's not a perfect model for you to follow when it comes to finding the right balance between automated and manual testing, or between static and dynamic testing.
>
> **[4:06](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=246)** The right mix is going to depend on your organization's level of security maturity.
>
> **[4:12](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=252)** You're not alone in your struggle to balance limited resources in competing priorities with your application security testing efforts.
>
> **[4:20](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=260)** Fortunately, you've got a pair of maturity models available to you to help you manage those priorities effectively.
>
> **[4:28](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=268)** The software assurance maturity model from OWASP ties security practices to five key business functions: governance, design, implementation, verification, and operations.
>
> **[4:44](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=284)** You select the level that you think you're capable of given the resources that you're working with and the SAMM will provide you with insights regarding the activities you should be focusing on.
>
> **[4:55](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=295)** Guidance regarding [[Security Testing]] can be found under verification.
>
> **[5:00](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=300)** The building security in maturity model from Synopsys is similar to the SAMM, although it's organized differently.
>
> **[5:08](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=308)** The BSIMM is grouped into four domains: governance, intelligence, SDLC touchpoints, and deployment.
>
> **[5:17](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=317)** Each domain contains multiple practices, and it's in these practice details that you'll find guidance on how to improve your overall application security maturity.
>
> **[5:28](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=328)** In this resource security testing is part of the SDLC touchpoints domain.
>
> **[5:35](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=335)** The SAMM and the BSIMM include guidance beyond just QA testing, but you've got to start somewhere, right?
>
> **[5:42](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=342)** OWASP even maintains a BSIMM to SAMM mapping just in case you want the best of both worlds.
>
> **[5:50](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=350)** Remember, any testing you do is better than doing nothing at all.
>
> **[5:55](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=355)** If you want your application security testing program to be the best it can be, you start by putting something in place and improving over time.
>
> **[6:04](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=364)** Don't be afraid to prototype or iterate.
>
> **[6:07](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=367)** Pick what works for you and build on it.
>
> **[6:11](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=371)** Take the stuff that doesn't work and throw it away.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/manual-vs-automated-testing?u=76281980&t=374)** Over time, you'll find the right balance of automated and manual testing activities to help you accomplish the real goal, securing your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (6), [[OWASP]] (5), [[Manual Testing]] (4), [[Security Testing]] (2), [[SQL]] (1)
> **Env Vars:** owasp (5), zap (4), samm (4), bsimm (3), sdlc (2)
> **CLI Commands:** find (6)
> **Analogies:** for example (1), picture (1), similar to (1)
> **Exercise Files:** source code (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Scanning vs. pen testing](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=0)** - [Instructor] Scanning an application with a tool is not the same as performing an application penetration test.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=7)** Unfortunately, far too many companies still run automated tools and pass the results off as a pen test.
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=15)** I don't want you to fall into that trap.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=17)** First and foremost, you should scan everything in your web application infrastructure, and I mean everything.
>
> **[0:25](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=25)** You should scan not just the applications, but the host systems that are serving up the applications.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=32)** You should scan the backend [[Databases]] that the applications are talking to, and you should scan the network appliances that the application traffic travels through.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=41)** Scans are, at their core, automated collections of useful information about the targets combined with some basic analysis of those scan results.
>
> **[0:52](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=52)** That analysis should yield a list of prioritized results based on the risk that each finding represents to the targeting question.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=61)** When it comes to web app scanners, they often simulate actual user activity, browsing to each page and submitting some form of input.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=72)** The behavior of the application in response to that input is analyzed as part of your heuristic process, which is just a fancy way of saying trial and error.
>
> **[1:24](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=84)** This is different from the signature-based technique, also used by scanners, where they look for things like version information or missing patches in order to identify potential weaknesses.
>
> **[1:36](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=96)** Scans don't attempt to break things, which is a key differentiator between a scan and a penetration test.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=105)** One of the techniques that scanners use when applying heuristics is fuzzing.
>
> **[1:50](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=110)** In the [[Application Security]] world, fuzzing refers to a testing method where a tool sends either malformed or semi-malformed data to an application in an effort to uncover vulnerabilities.
>
> **[2:03](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=123)** In the zip code example that I love so much, a scanner employing this technique might send special characters or unprintable characters to the application to see how the app reacts.
>
> **[2:16](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=136)** That same scanner might send extremely large numbers or negative numbers in that same field and then record the scanner's response.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=146)** Fuzzers can send a ridiculous number of requests to an application in a very short time, with each request designed to elicit a response that an attacker might be able to use to their advantage.
>
> **[2:39](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=159)** An automated scan is likely to use fuzzing to find vulnerabilities that a penetration tester will attempt to exploit.
>
> **[2:48](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=168)** Penetration tests are much more complex and creative than automated scans.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=174)** They require some level of human interaction, often using the scanner results as input in order to try to manipulate the application to accomplish some specific goal.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=186)** That goal might be to gain access to restricted data, for example, data the tester normally would have no rights to view or modify, or that goal could be to take control of the administrator's account.
>
> **[3:18](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=198)** Regardless of the goal, it's that extra step, that extra effort that sets pen tests apart from automated scans.
>
> **[3:27](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=207)** A good penetration tester will apply unconventional thinking toward the process, seeking to compromise the application using techniques that no automated scanner could conceive of, let alone execute.
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=221)** Penetration testers also go beyond signatures and heuristics, testing entire workflows within the target application.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=230)** By testing the application's logic handling capabilities, pen testers can often uncover flaws that would otherwise go unnoticed.
>
> **[3:59](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=239)** As [[Artificial Intelligence (AI)|artificial intelligence]], or AI, gets better and better at mimicking human behavior, than maybe, maybe we'll be able to conduct pen tests without human interaction, but I just don't think we're quite there yet.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=255)** While this course is focused on application security testing, it's important for you to know about some of the related tools that you can use to scan the supporting infrastructure.
>
> **[4:26](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=266)** [[Nmap]] is a great utility for finding open ports on target systems.
>
> **[4:32](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=272)** When scanning [[Web Servers]] and application servers, Nmap often turns up administrative web services listing on non-standard ports.
>
> **[4:40](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=280)** And the best part, Nmap is entirely free.
>
> **[4:44](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=284)** But Nmap is not a vulnerability scanner.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=288)** If you want to identify potential exploitable vulnerabilities on the host, then you should consider using tools like Nessus from Tenable, Nexpose from Rapid7, or Qualys Cloud Platform from Qualys.
>
> **[5:02](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=302)** Both Nessus and Nexspos have community editions available that you can download for free to practice with on your home network.
>
> **[5:11](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=311)** For this course, it's important that you know that these tools are available.
>
> **[5:16](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=316)** I cover them in more detail on my [[Security Testing]] Essential Training course here on [[LinkedIn]] Learning.
>
> **[5:23](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=323)** When it comes to application security scanners, there are way, way too many for me to list here.
>
> **[5:30](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=330)** And choosing the right scanner for your environment depends on a number of factors, including your budget and the programming languages used by your developers.
>
> **[5:40](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=340)** [[OWASP]] has collected a list of some of the most popular web-application testing tools, commercial, free, and open source, on the Vulnerability Scanning Tools section of their site.
>
> **[5:52](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=352)** But please be aware that OWASP isn't endorsing any of these tools.
>
> **[5:57](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=357)** And neither am I.
>
> **[5:58](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=358)** This list is here to help you more quickly find a tool that you might want to consider.
>
> **[6:05](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=365)** In Appendix A of the OWASP Web Security Testing Guide, you'll find a more robust list of specialized scanning tools, organized by their specific function.
>
> **[6:17](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=377)** This list focuses heavily on open-source tools, targeting specific vulnerabilities like cross-site scripting, [[SQL]] injection, and buffer overflows.
>
> **[6:29](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=389)** It even includes a dedicated section on fuzzers.
>
> **[6:32](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=392)** Another resource you might want to consider is the list of application security tools assembled by the Phoenix chapter of OWASP.
>
> **[6:41](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=401)** Now the link I'm sharing here is buried in an earlier version of the OWASP website.
>
> **[6:47](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=407)** And while it's not being actively maintained or updated, it is a hidden gem.
>
> **[6:52](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=412)** This group got together on their own and identified dozens of tools that their members relied on for application security testing.
>
> **[7:01](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=421)** Once they had that list together, they published it on their chapter website.
>
> **[7:06](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=426)** This isn't a formal OWASP project by any means.
>
> **[7:10](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=430)** It's just a pretty cool indicator of what can happen when local groups come together and decide they want to solve a problem.
>
> **[7:17](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=437)** One last note on fuzzers, although the OWASP Web Security Testing Guide has an entire section of Appendix A dedicated to fuzzers, the only tool in their list is Wfuzz.
>
> **[7:31](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=451)** If you're looking for a more current and comprehensive list of fuzzing tools, you can find that list embedded in the fuzzing article in the community section of the OWASP website.
>
> **[7:43](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=463)** The [[Burp Suite]], from PortSwigger, includes a fuzzer named Burp Intruder.
>
> **[7:48](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=468)** Intruder is considered an advanced manual tool by the vendor, and as such, it isn't included for free in the community edition.
>
> **[7:58](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=478)** Burp is an incredibly popular tool in the [[Web Application Security]] testing space, and if you're going to be using it for both QA testing and [[Penetration Testing]], you may want to talk to your boss about purchasing a copy.
>
> **[8:13](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=493)** Remember, scan first and scan often.
>
> **[8:17](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=497)** Use the tools at your disposal to gather as much information as you can about the target application and the related infrastructure.
>
> **[8:26](https://www.linkedin.com/learning/dynamic-application-security-testing/scanning-vs-pen-testing?u=76281980&t=506)** And when you've got enough information to work from, then you're ready to begin pen testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (8), [[Application Security]] (5), [[Nmap]] (4), [[Security Testing]] (3), [[Databases]] (1)
> **Env Vars:** owasp (8), sql (1)
> **Definitions:** is a  (3), refers to (1), is an  (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Testing in non-production](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=0)** - [Announcer] In order to perform your [[Security Testing]] without impacting production, you should perform some but not all of your testing in a non-production environment.
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=11)** Performing your dynamic [[Application Security]] test in a non-production environment comes with a slew of benefits.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=19)** When you think of non-prod, think of it as gloves off, no holds barred.
>
> **[0:25](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=25)** You could run each and every test in your arsenal even if you think those tests might break something.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=31)** Why? Because you're allowed to break things in non-production.
>
> **[0:35](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=35)** That's the whole point.
>
> **[0:37](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=37)** When you're testing in an environment dedicated to testing, you can work out the bugs before making your app available to end users.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=45)** You also get a chance to run tests that you'd never be allowed to run against the production application, just in case those tests might cause a slowdown or corrupt the database.
>
> **[0:57](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=57)** It's important that you run these tests in non-prod because guess what?
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=61)** The criminals who are going to target your application are not bound by your internal rules and policies.
>
> **[1:08](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=68)** They're going to run the destructive tests against production, like it or not.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=74)** You can also use your non-production environment to refine the tests that you want to run in the future.
>
> **[1:20](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=80)** Work out the bugs in your tests as well as the bugs in the app itself.
>
> **[1:25](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=85)** Hopefully, your organization already has some sort of change control policy or procedures in place.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=93)** Simply put, change control is an established approach to validating changes in a non-production environment before making those same changes in production.
>
> **[1:44](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=104)** This approach reduces unplanned outages and unanticipated impacts to the production environment.
>
> **[1:51](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=111)** Impacts that could hurt your organization's ability to do what they exist to do.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=116)** By ensuring that application security testing is part of your change control program, you'll have the support of upper management when it comes to taking the necessary steps to secure your production applications.
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=131)** A few things you should consider when testing in a non-production environment.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=135)** First, all tests should be considered in scope with some caveats, of course.
>
> **[2:21](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=141)** You should approach the non-production instance of your web app like a criminal.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=146)** Do you think you can exploit or denial the service vulnerability?
>
> **[2:29](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=149)** Do it.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=150)** How about that [[SQL]] injection exploit that enables you to drop entire database tables, run it.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=157)** Be as devious as you can possibly be when it comes to testing this environment.
>
> **[2:43](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=163)** Any test that you leave out is a test that a criminal can run against the production instance of your app and if you don't find out how the app will [[React.js|react]] during your non-prod testing, you're going to learn the hard way when a criminal executes that attack in production.
>
> **[2:58](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=178)** One of my caveats here is that you need to be respectful of other testers using the same environment.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=185)** They have goals and deadlines too and if your tests have a negative impact on the work that they're trying to accomplish, then you're going to lose a lot of friends.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=194)** Make sure you're communicating your testing activity with the right people and that you coordinate your work with theirs.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=202)** My other caveat is that backups are absolutely crucial as well as a process to quickly and efficiently restore the non-prod application, if you do break something.
>
> **[3:34](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=214)** You can make your point running that SQL injection exploit, but do you have time to manually recreate any drop tables from scratch?
>
> **[3:43](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=223)** Finally, you should remember that non-production isn't going to be 100% identical to production.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=230)** The code base should be the same but the infrastructure it's running on is likely to be different.
>
> **[3:57](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=237)** Comb through your testing results and call out those vulnerabilities that will be migrated to production unless somebody fixes them first.
>
> **[4:06](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=246)** If you don't have a non-production instance of your application, get one.
>
> **[4:11](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=251)** Even if it's just a local copy that you run on your laptop, it's better than foregoing testing for the sake of saving a little bit of time and money.
>
> **[4:21](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-non-production?u=76281980&t=261)** Taking shortcuts in the short term will likely cost you dearly in the long term.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (2), [[SQL]] (2), [[Security Testing]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** sql (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** think of it as (1)
> **Warnings:** caveat (1)
> **Speakers:** - [announcer] (1)

#### [Testing in production](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=0)** - [Jared] While testing in a non-production environment is fairly comprehensive, you're likely to find value by performing additional security tests in production.
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=10)** When it comes to testing production systems, though, you'll want to be very careful.
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=15)** Time to put the kiddie gloves back on.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=17)** You may be thinking, "Well, wait a minute.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=19)** Did I hear Jared right?
>
> **[0:20](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=20)** Did he say test production systems?"
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=24)** Yes. Yes I did.
>
> **[0:27](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=27)** "But I've always been told we never test in production."
>
> **[0:30](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=30)** Well, that's true.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=31)** Mostly true, anyway.
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=33)** But when it comes to [[Security Testing]], you get a lot of value from testing in prod that you just don't get when testing in non-prod.
>
> **[0:42](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=42)** For starters, you eliminate any inaccuracies that might result from subtle differences between production and non-production.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=51)** Don't believe me?
>
> **[0:52](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=52)** Compare the architecture diagrams from your non-prod environment with your prod environment.
>
> **[0:58](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=58)** If you have the same network devices, the same security controls, and the same patch levels across the board, then you, my friend, are the exception and not the rule.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=69)** When you perform security tests in production, you'll find the stuff that attackers can actually use.
>
> **[1:17](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=77)** That command injection vulnerability might be a critical risk when you find it in non-prod, but if your web app firewall in production can detect and shut down injection attacks, then maybe you don't need to rush to fix that vulnerability right away.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=93)** Maybe you can give your developers enough time to plan and implement a coordinated change in a controlled manner, avoiding potential mistakes that happen when we bypass process and procedure.
>
> **[1:46](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=106)** Your production environment also has publicly available information that will be different from your non-production environment.
>
> **[1:53](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=113)** Things like DNS entries, and IP addresses, and TLS certificates.
>
> **[1:59](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=119)** There is an entire discipline of collecting publicly available information that you'll learn about in the next module.
>
> **[2:07](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=127)** Testing and production does come with a handful of limitations, though.
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=131)** That is if you want to be a responsible tester.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=135)** For starters, I recommend that you do not run authenticated scans of production web applications.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=142)** Save your authenticated scans for non-prod only.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=146)** An authenticated scan could make unauthorized changes to production data.
>
> **[2:31](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=151)** Changes that put you in a room with your chief legal counsel trying to explain your actions.
>
> **[2:36](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=156)** Trust me on that one.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=157)** I'm speaking from firsthand experience.
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=160)** More on that later.
>
> **[2:42](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=162)** Your communication plan for testing production will be stricter than your non-prod testing.
>
> **[2:48](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=168)** You need to figure out who should be notified, how to get ahold of them, how often to contact them about your testing.
>
> **[2:56](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=176)** I recommend a week before the day before, the day of, and at the beginning and end of your actual test that you send out notifications.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=186)** When performing security tests in production, too much communication, in my opinion, is a very good thing.
>
> **[3:13](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=193)** Your first test will likely need to go through your change control procedures since it represents a change in your normal operating conditions.
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=203)** The key benefit is that you'll have an opportunity to communicate with anyone who might be impacted if your testing produces unexpected results.
>
> **[3:32](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=212)** Plan on running this first test during an overnight approved change window.
>
> **[3:38](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=218)** Which tools should you use when testing production?
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=221)** The same tools that you use to run those same tests in non-production.
>
> **[3:47](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=227)** One of the reasons you ran those tests in non-prod was to figure out how the app would [[React.js|react]], remember?
>
> **[3:53](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=233)** It would be a bad idea to run a new tool against prod before first vetting it against the non-prod instance of the app.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=242)** The key difference is that the settings you use in prod should be less intrusive than the settings you use in non-prod.
>
> **[4:09](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=249)** Kiddie gloves.
>
> **[4:11](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=251)** Running security tests against production apps can be stressful, but it doesn't have to be.
>
> **[4:17](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=257)** Take time to build out your tests in non-production.
>
> **[4:21](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=261)** Document your tool set in the appropriate settings.
>
> **[4:24](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=264)** Document your communication plan.
>
> **[4:27](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=267)** Loop in your change advisory board.
>
> **[4:29](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=269)** The more you can plan, the better.
>
> **[4:32](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=272)** Just don't shy away from vetting the security of your production apps.
>
> **[4:37](https://www.linkedin.com/learning/dynamic-application-security-testing/testing-in-production?u=76281980&t=277)** Don't give criminals an unfair advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1), [[React.js|React]] (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** dns (1), tls (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [jared] (1)

#### [OSINT gathering](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=0)** - [Instructor] If you've already deployed to production, chances are attackers can gather information about your application using open source intelligence or OSINT gathering techniques.
>
> **[0:12](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=12)** But what exactly can they do with that information?
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=15)** In order to answer that question, it helps to understand what OSINT actually is.
>
> **[0:22](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=22)** Open source intelligence, or OSINT gathering, has its roots in the government space, particularly the military.
>
> **[0:29](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=29)** Military organizations look for each and every advantage they can have over their opponents and the advantage of intelligence can help win battles against superior forces.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=41)** When it comes to protecting your web applications, you should absolutely spend time collecting OSINT on those apps in order to better understand what information is available to a potential attacker.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=54)** If your non-production systems live inside your network or your cloud environment, then there shouldn't be much OSINT available on them.
>
> **[1:02](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=62)** But when it comes to production, they have to broadcast public information in order to be accessible to your end users.
>
> **[1:10](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=70)** That includes DNS entries, IP addresses, encryption certificates, login pages, password reset [[Forms]].
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=78)** The list goes on and on and on.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=82)** OSINT gathering can provide attackers with multiple advantages when it comes to targeting your web applications.
>
> **[1:29](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=89)** The key advantage being stealth.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=92)** Because OSINT gathering involves collecting publicly available information, attackers can collect much of that information without ever touching your application.
>
> **[1:43](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=103)** This enables them to jump straight from reconnaissance activity to exploit attempts.
>
> **[1:49](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=109)** No noisy scans that might alert you of their presence or their intent to attack, just the attack itself.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=116)** The impact to your defenders is significant.
>
> **[2:00](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=120)** Instead of shutting down the attack before it happens, they find themselves in reactive mode.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=126)** Do you want a taste of OSINT you can gather on your publicly-available web applications?
>
> **[2:12](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=132)** Then start by analyzing their SSL and TLS certificates.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=137)** You can learn a lot about an organization based on the information in these certs.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=142)** For starters, you can tell whether an organization understands how to properly secure data in transit by examining the encryption key strength, the [[Algorithms]] they use, whether or not their encryption implementation is vulnerable to known weaknesses.
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=160)** SSL Labs from Qualys will tell you all of this and more in seconds.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=166)** Mozilla's Observatory tools go above and beyond, though.
>
> **[2:51](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=171)** In addition to examining these certs, Observatory also examines HTTP headers, SSH security settings, and multiple reports from third party tools on things like content security settings and whether the app enforces HTTP Strict Transport Security or HSTS.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=194)** What if you wanted to identify all of your publicly-available web applications without running a scan?
>
> **[3:20](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=200)** You've got a couple of ways you can do this.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=202)** Personally, my favorite resource is DNSdumpster.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=206)** This web app returns each host individually with a set of links you can use to collect OSINT from each host.
>
> **[3:34](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=214)** Things like online port scan results, and HTTP header information.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=219)** The Subdomain Finder from [pentesttools.com](https://pentesttools.com) takes a bit longer to run a scan, but that could be because it explores multiple avenues to find as many sub-domains as possible.
>
> **[3:53](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=233)** You can run a light scan for free, which performs DNS enumeration and checks DNS records, or you could log in and run a full scan, which also analyzes [[HTML]] links, SSL and TLS certs, external APIs, and even checks both [[Google]] and Bing for possible hits.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=255)** It's important to note that even though these scans aren't running from your local system, they could still trigger an alert on the [[Microsoft Defender|defender]]'s side.
>
> **[4:24](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=264)** If you want to forego the risk of tripping any alerts, then head on over to Shodan.
>
> **[4:29](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=269)** Once hailed as the most dangerous search engine on the internet, Shodan already contains detailed information about publicly available host and applications, including host names, IP addresses, open ports, and banner information from listening services.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=288)** Shodan can even tell which operating system is running on each host, as well as the type of web server that your application relies on.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=297)** Censys is similar to Shodan, with a noticeably stronger focus on web applications.
>
> **[5:05](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=305)** Censys returns much of the same information as Shodan, things like host names, IP addresses, and available ports, but the real strength of Censys lies in the certificate search feature.
>
> **[5:17](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=317)** By drilling down into the certs associated with each in-scope web application, you'll find the names of other hosts that use the same cert.
>
> **[5:27](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=327)** Censys is also a great place for finding web-enabled administrator portals.
>
> **[5:32](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=332)** You may have noticed that I tend to share two tools for each OSINT gathering function that you might want to perform.
>
> **[5:38](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=338)** There's a reason for this.
>
> **[5:40](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=340)** One of the disadvantages of OSINT is that it might be incorrect, incomplete, or outdated.
>
> **[5:47](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=347)** That's the trade-off you make for wanting to be sneaky.
>
> **[5:51](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=351)** By pulling OSINT from multiple sources, you can compare the results from those different tools to get a better understanding of which data you can rely on, versus which data you can't.
>
> **[6:04](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=364)** I teach entire workshops and courses on OSINT gathering and one of the things I emphasize in those courses is the importance of automating OSINT gathering.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=374)** You can automate many of these intelligence gathering tasks in the same way you can automate much of your [[Security Testing]] in QA.
>
> **[6:23](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=383)** A tool that I highly recommend you check out is the Trace Labs OSINT Virtual Machine.
>
> **[6:29](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=389)** This VM was designed specifically for OSINT gathering, and it already has a terrific library of OSINT tools pre-installed.
>
> **[6:38](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=398)** The Trace Labs team took their inspiration for this resource from Buscador, the virtual machine from IntelTechniques.
>
> **[6:46](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=406)** While Buscador is no longer an actively maintained project, the Trace Labs OSINT VM was built using many of those same tools.
>
> **[6:55](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=415)** You can use the Trace Labs VM to collect OSINT on a lot more than just web applications.
>
> **[7:02](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=422)** But even if you only use two of the pre-installed tools, Maltego and Recon-ng, you'll have saved yourself considerable time on performing OSINT gathering to support your [[Web Application Security]] testing efforts.
>
> **[7:18](https://www.linkedin.com/learning/dynamic-application-security-testing/osint-gathering?u=76281980&t=438)** You may think you've done a good job of limiting the amount of publicly-available information about your production web applications, but by sprinkling a little OSINT gathering into your dynamic [[Application Security]] testing activities, you may just find there's room for improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Algorithms]] (1), [[HTML]] (1), [[Google]] (1), [[Microsoft Defender|Defender]] (1)
> **Env Vars:** osint (21), dns (3), ssl (3), http (3), tls (2)
> **CLI Commands:** find (4), ssh (1), make (1)
> **URLs:** [pentesttools.com](https://pentesttools.com) (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Web app proxies](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=0)** - [Instructor] By intercepting traffic between the client and the web application servers, you can evaluate the effectiveness of your backend server side controls.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=9)** This is where web application proxies come into play.
>
> **[0:13](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=13)** A proxy is some component, usually a piece of software, that sits between your client system and any of the web applications that client talks to.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=24)** All requests sent from the client to the app and all the responses sent back from the app to the client are there in the proxy for you to inspect and manipulate as part of your [[Security Testing]].
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=39)** A web application proxy has been essential to every, and I mean every [[Web Application Security]] assessment that I've ever worked on.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=49)** I have a hunch you've heard the term, man in the middle attack or adversary in the middle attack at some point in your career.
>
> **[0:57](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=57)** Proxies are a core component in this scenario.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=61)** An attacker might use a proxy to spy on traffic, looking for sensitive data like passwords or session [[Tokens]] without preventing the traffic from ever reaching its intended destination.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=74)** If the attacker wants to manipulate that traffic, though, the proxy could allow the attacker to redirect the traffic to a different destination or to make unauthorized changes to the traffic before reaching the original destination.
>
> **[1:28](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=88)** As a web application security tester, you can use these same techniques to test your applications, ensuring that they can't be compromised by this type of attack.
>
> **[1:39](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=99)** The easiest thing you can do to prevent your web traffic from being exposed to proxies is to encrypt the data in transit.
>
> **[1:48](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=108)** This means installing an SSL or a TLS certificate and then configuring HTTP strict transport security on your web server.
>
> **[1:58](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=118)** The certificate provides the app with a way to encrypt data, and the HSTS setting forces the app to use that cert.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=126)** A great way to tell if HSTS is already enabled is to browse to a page within your app and then manually delete the S in the HTTPS part of the URL field.
>
> **[2:18](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=138)** If you can access that same page over unencrypted HTTP, so can your users, even if you have the strongest TLS cert installed.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=150)** One quick comment on proxies, though, not all proxies are created equal.
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=155)** When selecting a proxy to use during your testing, a web proxy might get the job done.
>
> **[2:42](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=162)** I relied on a Firefox browser plugin for years that only proxied HTTP and HTTPS traffic.
>
> **[2:51](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=171)** That was enough for most of my testing needs, but what if you need to proxy non-web protocols?
>
> **[2:58](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=178)** If that's the case, then you want to make sure you're using a TCP proxy, a tool capable of proxying any and all types of TCP traffic, which includes HTTP and HTTPS.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=191)** If you'd like to try out a couple of web proxy browser extensions, you could try Tamper Dev for Chrome or Tampa Data for Firefox Quantum.
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=203)** Both tools will allow you to see every request that passes from your endpoint to any web resource it interacts with.
>
> **[3:30](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=210)** What's really cool though, is that these tools enable you to manipulate both requests and responses, sending virtually any data you can imagine to the backend web server.
>
> **[3:42](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=222)** In all three editions of [[Burp Suite]], Enterprise, Professional, and Community, you'll have access to the Burp Proxy tool.
>
> **[3:51](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=231)** You kind of have to, since the [[Representational State Transfer (REST)|rest]] of the suite's functionality hinges on whether or not the proxy is up and running.
>
> **[3:57](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=237)** I'll show you how to configure and use the Burt Proxy in just a bit.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=242)** [[OWASP]] ZAP and Fiddler are two other proxies I keep in my toolbox for testing web applications.
>
> **[4:09](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=249)** Both have served me well over the years, and I'm sure you'll find value in using one or both as you build out your own dynamic [[Application Security]] testing procedures.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=259)** A web application proxy is an invaluable tool in every application security tester's toolbox.
>
> **[4:27](https://www.linkedin.com/learning/dynamic-application-security-testing/web-app-proxies?u=76281980&t=267)** You should try out a few proxies, find one or two that are well suited for your testing needs, and then build them into your own security testing methodology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (3), [[Web Application Security]] (2), [[Tokens]] (1), [[Burp Suite]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (4), https (3), tls (2), hsts (2), tcp (2)
> **CLI Commands:** make (2), find (2)
> **Tools:** firefox (2)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [DevSecOps](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=0)** - [Instructor] One of the most interesting changes in the dev space in recent years has been a shift from traditional development models to ones that move much, much more quickly.
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=11)** Where companies with monolithic software offerings used to release updates a few times a year, now they're releasing those software updates multiple times per week.
>
> **[0:22](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=22)** As a result, operations and security teams have had to adjust their own practices to fit this new model.
>
> **[0:29](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=29)** Most folks you speak with are likely to refer to this model as [[DevOps]].
>
> **[0:34](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=34)** In short, the development teams and the IT operations or ops teams now share practices and tools to work together more efficiently.
>
> **[0:44](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=44)** I'm in the camp that uses a term [[DevSecOps]], since a modern security team isn't really part of development or part of IT.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=54)** Security is evolving into a practice that blends [[Business Acumen]] with technical security knowledge, focusing on how risk reduction can reduce potential business disruptions.
>
> **[1:06](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=66)** And if you don't have security ingrained in your DevSecOps practice, then the likelihood of a potential security incident increases dramatically.
>
> **[1:16](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=76)** At the core of DevOps is the concept of a CI/CD pipeline.
>
> **[1:21](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=81)** CI stands for [[Continuous Integration (CI)|continuous integration]], while CD stands for [[Continuous Delivery (CD)|continuous delivery]].
>
> **[1:28](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=88)** You might also hear some folks explain CD as continuous deployment.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=93)** Previous development models used terms like waterfall method and phase gates to describe a linear development model.
>
> **[1:42](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=102)** But a CI/CD pipeline isn't linear.
>
> **[1:46](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=106)** A CI/CD pipeline is most often represented using the infinity symbol.
>
> **[1:51](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=111)** It doesn't have a beginning or an end, but instead is constantly moving, constantly in motion.
>
> **[1:58](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=118)** The challenge that you'll have as a security professional is finding ways to interject security practices and tools into this pipeline, especially if security didn't have a seat at the table when the organization decided that DevOps was the way they wanted to go.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=135)** The good news is [[OWASP]] has you covered.
>
> **[2:19](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=139)** OWASP maintains a DevSecOps guideline project, where they cover a number of security practices to help you transform your DevOps pipeline into a DevSecOps pipeline.
>
> **[2:32](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=152)** Secret scanning looks for hard coded credentials, while software composition analysis looks for weaknesses in third party libraries or dependencies.
>
> **[2:41](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=161)** I've got an entire course on [[Static [[Application Security]] Testing]], which primarily focuses on weaknesses in source code.
>
> **[2:49](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=169)** Infrastructure is code scanning and container scanning focus on potential weaknesses in apps developed and deployed in cloud environments, while Dynamic Application Security Testing, this course, evaluates apps once they've been compiled and deployed.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=186)** Infrastructure scanning looks at the app infrastructure, all the systems and components the app relies on to operate, and a compliance check is a catchall that covers additional testing required based on your organization's internal and external compliance requirements.
>
> **[3:25](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=205)** You can read more about this OWASP project at this url.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=209)** And if your organization is leveraging one or more of the three major infrastructures as service providers, it's possible that your dev team is using the pipeline tools native to each environment.
>
> **[3:42](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=222)** In AWS, they call it CodePipeline.
>
> **[3:45](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=225)** [[Microsoft]] calls it [[Microsoft Azure|Azure]] pipelines, and [[Google]] refers to it as Cloud Build.
>
> **[3:51](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=231)** My recommendation is that you embrace the idea of DevSecOps, and that you educate your internal teams on where security plays a role in their DevOps model.
>
> **[4:03](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=243)** If you try to force [[Security Testing]] onto these teams in a way that disrupts their CI/CD pipeline, you're going to have a tough time ahead of you, and it's likely to be an unsuccessful effort.
>
> **[4:15](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=255)** Meet them where they are.
>
> **[4:18](https://www.linkedin.com/learning/dynamic-application-security-testing/devsecops?u=76281980&t=258)** Look for opportunities to automate your security test within their existing pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DevOps]] (5), [[DevSecOps]] (5), [[OWASP]] (3), [[Application Security]] (2), [[Business Acumen]] (1)
> **CLI Commands:** cd (6), aws (1)
> **Env Vars:** owasp (3), aws (1)
> **Definitions:** stands for (2), is a  (1), refers to (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Burp Suite](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=0)** - [Narrator] For the [[Burp Suite]] demo, we're going to use the Community Edition.
>
> **[0:04](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=4)** While Community Edition doesn't contain the paid vulnerability scanner, it does contain the free proxy tool.
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=11)** When you go to downloads, you'll be prompted to download the latest edition based on your operating system.
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=18)** Again, for a web application to test, we're going to turn to the [[OWASP]] Vulnerable Web Applications Directory, pulling from the list of online applications.
>
> **[0:29](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=29)** For this demo, the OWASP Juice Shop will work perfectly.
>
> **[0:35](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=35)** When you open Burp, you'll be prompted whether you want a temporary project, one that will go away when you close the tool, whether you want to create a new project on disk, which is great for actual penetration tests, or open an existing project that you've already started on.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=51)** So let's use Temporary Project and we're going to use the Burp defaults.
>
> **[0:56](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=56)** No need to customize for the demo that we're doing now.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=61)** When you click Start Burp and the application loads, I want you to go to the Proxy tab at the top.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=69)** There are four sub items beneath Proxy.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=72)** Intercept will capture every request and every response between your client and the server, the application that you're talking to.
>
> **[1:21](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=81)** The two history tabs, HTTP, and [[WebSocket|WebSockets]] are going to keep a log of every URL that you access, and Options allows you to fine tune the configuration, but again we are just fine with the defaults.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=100)** Now here Intercept is the part of the Burp tool that allows you to capture a request and make changes to it before you send it to the server.
>
> **[1:51](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=111)** When you turn this on, every bit of traffic between you and the web server is going to wait for your explicit approval.
>
> **[1:59](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=119)** For now, I want to keep Intercept off, and I want to go over here to where it says Open Browser.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=126)** Within Burp, there is a built-in Chromium browser that already has the SSL certificate and the proxy configuration preconfigured.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=137)** It's going to look and act just like a Chrome browser, but when we try to go to a URL like Juice Shop, the experience we have in the browser may look identical to what we did when we were in Chrome earlier, but go back into Burp.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=157)** If you go to HTTP History, you are going to see dozens of URLs that have been accessed by your laptop when you went to that one website.
>
> **[2:52](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=172)** This is what a lot of folks don't realize about web application traffic.
>
> **[2:56](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=176)** Every time you go to a URL, every item on the page, every resource, every third party that the application talks to, all of that traffic happens behind the scenes, and while the user might not see it, Burp does.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=191)** Now if we go back into the Chromium browser, I want you to click on Account and click on Login.
>
> **[3:19](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=199)** Here we're taken to a username / password screen.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=202)** So let's type admin@juice-sh.op,
>
> **[3:30](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=210)** and then for the password, all lowercase, admin123, and click Login.
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=221)** Now within the application, you'll see we are now logged in with an administrator account.
>
> **[3:46](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=226)** This is the default admin account for this application.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=230)** Go back to Burp.
>
> **[3:53](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=233)** If you scroll down to the very bottom, I want to point out that we're seeing a combination here of GETs and POSTs.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=242)** A GET is any request that you send to a server to say, "Give me something," and a POST is anything you send to a server to say, "Here, I have this for you."
>
> **[4:13](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=253)** When we login to applications, especially when that login is a form, we are almost always using a POST to send the username and password to the application.
>
> **[4:26](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=266)** If you scroll up a bit, you'll find that there's a POST for /[[Representational State Transfer (REST)|rest]]/user/login, and when you click on that, you can see the original POST, the data that was sent to the application including the [[JSON]] message that has the username and password in plain text.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=288)** Now this is only in plain text, because the Burp proxy is running on the same computer that I'm using to access the application.
>
> **[5:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=300)** If I were executing an adversary in the middle attack in a coffee shop and I happen to be on the same network as someone, but not the same computer, I would not be able to see that information in plain text if the login and password were encrypted.
>
> **[5:17](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=317)** They're unencrypted here, because I'm capturing them before the encryption happens, but if I'm only on the same network, if I'm one step removed from the client machine, no luck.
>
> **[5:27](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=327)** That's why encryption is so important.
>
> **[5:30](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=330)** Now within Burp, if you find any interesting URL that you want to resend to the application, you can right click on that in the HTTP history and send it to Repeater.
>
> **[5:45](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=345)** When you send to Repeater, you'll notice that Repeater changes colors in the very top menu here.
>
> **[5:51](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=351)** So let's click on that.
>
> **[5:53](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=353)** What they've done is they've copied that exact POST command over to this screen so that you can manipulate anything that you want.
>
> **[6:03](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=363)** You could change the content type.
>
> **[6:05](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=365)** You could change the user agent.
>
> **[6:08](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=368)** You can alter anything that you would have sent from the web browser and had no idea what was being sent behind the scenes, because the proxy gives you that much visibility, it gives you that much control.
>
> **[6:23](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=383)** And if you wanted to try a [[SQL]] injection attack, you could come down here to the password and say, "I want the password to be admin123," or, "I want to check and see if the number one is equal to the number one."
>
> **[6:40](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=400)** Now when I try to send this updated data directly to the application, it's going to look to the application like I want to login.
>
> **[6:49](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=409)** It's going to look like I'm trying to log in as the admin, but for the password, it's actually going to check two conditions, not one.
>
> **[6:58](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=418)** It's going to check whether or not the password is admin123, or it's going to check whether the number one equals the number one.
>
> **[7:08](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=428)** Well, even if I changed that first password and I know I have a bad password, I'm asking the application, "Is the password for admin ASDF?"
>
> **[7:21](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=441)** The application's going to check the password database and say, "Nope, you're out of here," but it's going to say, "Wait a minute, it wants me to check whether or not the number one equals the number one."
>
> **[7:32](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=452)** Well, of course it does.
>
> **[7:33](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=453)** That's math.
>
> **[7:34](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=454)** So when we add this extra data in a SQL injection attack, we're forcing that backend interpreter to do something it wasn't planning on doing, all because we're able to capture that data using a proxy.
>
> **[7:48](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=468)** Now when I click Send, you'll see that it fails, because it's not interpreting that database command.
>
> **[7:56](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=476)** It's assuming that my entire password is that string of characters.
>
> **[8:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=480)** So good on OWASP for building that control in, but that doesn't mean the application is impervious to SQL injection.
>
> **[8:07](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=487)** What I want you to do on your own is to try using the Burp tool to capture more traffic in Juice Shop.
>
> **[8:16](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=496)** I want you to navigate the application.
>
> **[8:18](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=498)** I want you to come back to Burp.
>
> **[8:20](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=500)** I want you to send some additional commands to Repeater.
>
> **[8:23](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=503)** Manipulate some of the other data fields and see how the application reacts.
>
> **[8:28](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-burp-suite?u=76281980&t=508)** A proxy tool by itself is rock simple, but the capability it gives you as an [[Application Security]] tester is immense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[SQL]] (3), [[Burp Suite]] (1), [[WebSocket|Websockets]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** post (5), url (4), owasp (3), http (3), sql (3)
> **UI Navigation:** go to (5), click on (5), scroll down (1), scroll up (1)
> **API Endpoints:** post  (2), post
 (2), get  (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)


### 3. Web App Pen Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Scoping a web app pen test](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=0)** - [Instructor] In order to conduct an effective [[Web Application Security]] test, you first need to determine what's in scope and what's out of scope for that test.
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=10)** Otherwise, you've run the risk of spending entirely too much time on the wrong things.
>
> **[0:16](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=16)** The best place to start when scoping a pen test is to review the ultimate goal of that test.
>
> **[0:23](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=23)** One of the most common goals is to compromise restricted or sensitive data, data that the tester is not authorized to access.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=31)** Standards like the Payment Card Industry [[Data Security]] Standard and regulations like HIPAA in the US are two perfect examples of external forces that require companies to conduct a data-centric pen test.
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=46)** But your pen test could also be account-centric.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=49)** Instead of stealing data, what if you could log in as someone else and manipulate that person's account?
>
> **[0:56](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=56)** Better yet, what if you could log in as an administrator?
>
> **[0:59](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=59)** How much damage could you do then?
>
> **[1:02](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=62)** Take time to discuss the end goal of the web app pen test at the onset of your scoping discussion.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=69)** With the goal identified, now you're ready to start discussing the scope in detail.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=74)** Don't accept a generic answer that everything's in scope.
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=78)** Spend some time clarifying what's explicitly in for the test and what's explicitly out.
>
> **[1:25](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=85)** Ask for a list of URLs that are to be tested.
>
> **[1:28](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=88)** These should represent the apps themselves.
>
> **[1:31](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=91)** An app could be accessible via a subdomain or via a subdirectory on a domain that hosts multiple applications.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=100)** Confirm both the entry point for the application, as well as any specific URLs that might need to be excluded.
>
> **[1:48](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=108)** Admin pages and password reset pages often end up in that excluded list.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=114)** Go one step further and ask about specific IP addresses or net blocks that may be a part of your test.
>
> **[2:01](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=121)** Even though the developer intended for users to access their apps via subdomains and subdirectories, there are many cases where you can access those same apps using the IP address instead.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=135)** This works even if DNS entries haven't been created for those hosts.
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=140)** This is a good way to find publicly available apps, by the way, that companies mistakenly thought they disabled or decommissioned.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=148)** If specific user or administrator accounts are out of scope, verify that before you begin testing.
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=155)** Depending on the type of pen test that you're running, you may be provided with valid user accounts specifically created for testing purposes.
>
> **[2:44](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=164)** Finally, make sure you identify testing [[Windows]] that are either approved or forbidden.
>
> **[2:51](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=171)** The last thing you want to do is cause a production impact to an [[E-Commerce]] application during their peak sales time.
>
> **[2:58](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=178)** If you do, chances are you won't be invited back to test that app again in the future.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=185)** Where possible, try to ensure that nonproduction instances of your applications are in scope for your pen tests.
>
> **[3:13](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=193)** Why?
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=194)** In real-world pen test scenarios, you can only plan so much.
>
> **[3:19](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=199)** There are times where you have a high level of confidence that an exploit might work, but you're not 100% certain whether the exploit will have a negative impact.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=209)** If you can run that exploit against a nonproduction instance of the app, you can confirm both the positive and negative results of that action.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=219)** In some cases, proving an exploit in a nonproduction environment and reviewing the organization's change control procedures may be enough to indicate that the same exploit would work in production.
>
> **[3:52](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=232)** This approach yields the same security value while minimizing some of the risks encountered during the pen test.
>
> **[4:00](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=240)** A few quick notes on the importance of selecting the right time frame for your testing activity.
>
> **[4:05](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=245)** Because pen tests could have a potentially noticeable impact on the target web application, you'll want to take extra precautions to minimize the severity or even the visibility of that impact.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=259)** Someone in the organization should already know the peak times when users are most likely to be accessing the application.
>
> **[4:26](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=266)** Testing outside of these peak times will automatically reduce your risk.
>
> **[4:31](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=271)** There are also larger business drivers at play that you need to consider.
>
> **[4:35](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=275)** Depending on the organization's industry, there may be times of the year or a month where testing is off limits.
>
> **[4:43](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=283)** Retailers for example often implement a code freeze before, during, and after holiday seasons.
>
> **[4:51](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=291)** During this freeze, nothing is allowed to take place, nothing that might impact those production e-commerce apps.
>
> **[5:00](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=300)** Emergency break fixes only.
>
> **[5:03](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=303)** One other consideration when determining in-scope and out-of-scope times is the monitoring and response capability of the operations and the security teams.
>
> **[5:14](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=314)** Your testing activity could very well set off alerts, and those alerts could be misinterpreted as an actual attack depending on who's on call at the time.
>
> **[5:24](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=324)** Talk through all of this with those teams, and the time frame you ultimately select will be the best choice for everyone.
>
> **[5:31](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=331)** Don't assume any of this information when scoping your test.
>
> **[5:36](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=336)** Get it in writing.
>
> **[5:38](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=338)** Your scope will be directly impacted by your hosting provider requirements if your in-scope apps live on their infrastructure.
>
> **[5:47](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=347)** [[Amazon Web Services (AWS)|Amazon Web Services]] has a well-defined policy regarding what you're allowed to test and what you're not.
>
> **[5:53](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=353)** If you're hosting any of your in-scope applications with AWS, make sure your testing scope aligns with their requirements.
>
> **[6:02](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=362)** And while [[Microsoft]] doesn't require you to notify them before performing penetration tests against [[Microsoft Azure|Azure]] resources, they do require you to comply with their unified [[Penetration Testing]] rules of engagement.
>
> **[6:15](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=375)** Their site details standard tests that you're permitted to perform, tests that are explicitly prohibited, and the penetration testing rules of engagement that apply to their shared environment.
>
> **[6:27](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=387)** And if you're hosting apps in [[Google Cloud Platform (GCP)|Google Cloud]], you need to be familiar with how your scope aligns with their acceptable use policy and their terms of service.
>
> **[6:36](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=396)** They don't require you to notify them ahead of time, but they do require you to abide by the rules outlined in these two agreements.
>
> **[6:43](https://www.linkedin.com/learning/dynamic-application-security-testing/scoping-a-web-app-pen-test?u=76281980&t=403)** For any hosting provider you're using that I haven't listed here, please check with them beforehand when scoping your web app pen test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (2), [[Penetration Testing]] (2), [[Web Application Security]] (1), [[Data Security]] (1), [[Windows]] (1)
> **CLI Commands:** make (2), find (1), aws (1)
> **Env Vars:** hipaa (1), dns (1), aws (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** before you begin (1)
> **Speakers:** - [instructor] (1)

#### [Avoiding production impacts](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=0)** - [Jared] [[Penetration Testing]] involves testing the effectiveness of controls in a production environment.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=6)** As the tester, it's your responsibility to know how to conduct these tests in a manner that avoids negatively impacting that environment.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=17)** The last thing you want to happen during your penetration test is to cause a problem in production.
>
> **[0:23](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=23)** Whether that's a noticeable slowdown, a corrupted database, or crashing the entire app, you can end up doing more harm than good.
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=33)** You can end up causing some of the very same problems your penetration test was designed to prevent.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=39)** And if you've worked in security for any length of time you probably already know that it's an uphill battle.
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=46)** If you break a production app during a pen test, you're going to have a very hard time living that down.
>
> **[0:52](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=52)** And I'm speaking from firsthand experience here.
>
> **[0:56](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=56)** In one of my enterprise roles I hired a third party to conduct a web application penetration test.
>
> **[1:04](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=64)** Before the test I gave the company explicit instructions to include one specific form from testing.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=72)** And while my account manager got that message, the junior level pen tester they assigned to the engagement didn't.
>
> **[1:20](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=80)** On the morning of the test one of our developers came running, literally running down the hallway, shouting at the top of his lungs that we were under attack.
>
> **[1:31](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=91)** It turns out that that junior level tester ran an automated scan against the one form I told them to avoid which caught everyone's attention.
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=101)** Because that form was part of an HR job application site.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=105)** And the tool the tester used just so happened to select a minority race on the job application form.
>
> **[1:53](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=113)** Since this was a production instance of that app, over 10,000 applications from minorities were submitted to HR and rejected out of hand once we figured out what happened.
>
> **[2:07](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=127)** Only it doesn't end there.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=129)** I found myself in a meeting with our CIO, our head of [[Human Resources (HR)|human resources]], our chief legal counsel, and our chief diversity officer.
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=140)** Our company took great strides to encourage diversity and inclusiveness in hiring.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=146)** And they wanted to know what I did to cause so many job applications for minority applicants to be rejected.
>
> **[2:34](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=154)** Now we were able to clear up the confusion in the end, but even though that happened years ago, the people involved still recall that story to this very day.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=166)** Now the company that performed the test, they stood their ground.
>
> **[2:49](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=169)** They said Jared, without testing that form, this test would've been incomplete.
>
> **[2:55](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=175)** We would've delivered a report to you that didn't accurately reflect the risk to your organization.
>
> **[3:00](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=180)** And you know what?
>
> **[3:01](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=181)** They were right.
>
> **[3:03](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=183)** Scoping your penetration test is a delicate balancing act.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=187)** And you should weigh the pros and cons against one another.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=191)** If you choose to test everything, it's going to take more time.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=194)** Which translates to more money since security testers don't work for free.
>
> **[3:20](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=200)** The more inclusive scope means that you run a higher risk of accidentally breaking something during your test.
>
> **[3:27](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=207)** However, the end result is going to be a more comprehensive report.
>
> **[3:32](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=212)** The more you limit your scope, the quicker and easier your web app pen test becomes.
>
> **[3:38](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=218)** Now you're much less likely to accidentally break stuff, but the finished report will be full of holes and blind spots leaving management with a false sense of security.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=230)** You can significantly reduce the risk of impacting production web applications with a simple five step process.
>
> **[3:58](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=238)** First, talk to each and every stakeholder.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=242)** Explain what your test entails.
>
> **[4:05](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=245)** Tell them, or better yet show them, the tools that you plan to use.
>
> **[4:09](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=249)** Be upfront about the risks and about the benefits of using these tools to perform your pen test.
>
> **[4:16](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=256)** Don't shy away from these conversations.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=259)** Next, document the risks and your conversations in either the project plan or the statement of work.
>
> **[4:26](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=266)** Don't assume that everyone walked away from those conversations with the same understanding.
>
> **[4:31](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=271)** Write it down for everyone to review.
>
> **[4:35](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=275)** And while you're writing stuff down, make sure to mention the relationship between the scoping requirements and their potential impact on the anticipated findings.
>
> **[4:45](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=285)** If a particular form has been flagged as out of scope, it's important to document that the form will not be tested.
>
> **[4:53](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=293)** And that [[Forms]] are a likely vector for attacks like [[SQL]] injection and command injection.
>
> **[4:59](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=299)** Once everything has been documented, go over it one last time with your stakeholders and get their approval to run the test you've identified.
>
> **[5:09](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=309)** And lastly, whether it's before or during the actual test, run your tools against a non-production instance of the application.
>
> **[5:18](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=318)** Gauge the impact to that app and adjust accordingly before testing production.
>
> **[5:25](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=325)** Web application penetration tests come with their own risks, but you can manage and mitigate those risks with a little foresight, conversation, and documentation.
>
> **[5:37](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=337)** Don't be like the young, inexperienced Jared.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=341)** Be like the older, wiser, graybeard Jared.
>
> **[5:45](https://www.linkedin.com/learning/dynamic-application-security-testing/avoiding-production-impacts?u=76281980&t=345)** We all make mistakes, but maybe you can learn from mine so yours won't be as embarrassing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1), [[Human Resources (HR)|Human resources]] (1), [[Forms]] (1), [[SQL]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** cio (1), sql (1)
> **Definitions:** is a  (1), means that (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [jared] (1)

#### [Penetration testing execution standard](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=0)** - [Instructor] The [[Penetration Testing]] Execution Standard or PTES provides expert guidance on how to conduct a penetration test from pre-engagement to reporting.
>
> **[0:11](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=11)** By using the PTES as a model for planning your own [[Application Security]] test it's like you're standing on the shoulders of giants.
>
> **[0:21](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=21)** The PTES outlines seven phases that you should consider when planning any penetration test.
>
> **[0:27](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=27)** Pre-engagement interactions, intelligence gathering, [[Threat Modeling]], vulnerability analysis, exploitation, post-exploitation, and reporting.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=41)** Think of the PTES as a funnel, with the earlier phases at the top of the funnel and the later phases at the bottom.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=49)** This is how pen testers allot their time during an engagement.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=54)** Intelligence gathering occurs at the top of the funnel and it's where you're likely to spend most of your time during a pen test.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=61)** As you move from one phase to the next, your testing activities will be more and more focused.
>
> **[1:07](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=67)** In actuality, you're taking all the possible attack vectors and narrowing down that list to those vectors that you're most likely to be able to exploit.
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=78)** Once you hit the reporting phase at the very bottom of the funnel, you should have completed and documented enough testing activity to tell a clear story of whether you were successful in compromising the target application.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=93)** Let's take a closer look at what each of these phases might look like during a web app pen test.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=100)** The first phase of a pen test is pre-engagement interactions.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=105)** This is where you apply your knowledge of scoping a web app pen test in order to lock down what you'll be including in, and excluding from your testing activity.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=116)** During the pre-engagement phase, you'll want to communicate with any third parties who might be impacted by your testing.
>
> **[2:04](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=124)** You learned about hosting provider requirements in the scoping module of this course, but don't stop there.
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=131)** Do you have any third-party managed security service providers, MSSPs?
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=137)** You should communicate your plans to them as well.
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=140)** Speaking of communication, what's your plan for keeping everyone informed during the pen test?
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=146)** Do you have current contact information for all those people?
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=150)** Take time to update your communication plan during this phase, You should also hammer out the rules of engagement.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=157)** When does the test begin?
>
> **[2:39](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=159)** When does it end?
>
> **[2:41](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=161)** What do you do if a security control detects or prevents you from running your test?
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=166)** Think through all of this during the pre-engagement phase and get the answers you need before moving on.
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=173)** The second phase of a pen test is intelligence gathering.
>
> **[2:57](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=177)** This is where you spend as much time as you're able gathering information about the target application and its underlying infrastructure.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=186)** But be careful not to go down a rabbit hole here.
>
> **[3:09](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=189)** It's easy to spend all of your available time on information gathering, especially if you haven't set limits for yourself.
>
> **[3:16](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=196)** The PTES identifies three levels of information gathering to help you identify those boundaries.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=202)** Review these levels to help keep yourself on the right track.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=206)** You also need to consider the balance between active intelligence gathering and passive intelligence gathering.
>
> **[3:34](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=214)** If one of the goals of the test is to elude detection, then passive is the way to go.
>
> **[3:40](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=220)** If you eluding detection isn't a concern then the active path will be quicker and more comprehensive.
>
> **[3:47](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=227)** The PTES provides you with extensive guidance on OSINT gathering and on footprinting your targets.
>
> **[3:54](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=234)** Two activities that will likely consume most of your time during this phase.
>
> **[3:59](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=239)** Read up on the tools and techniques that the PTES recommends and then update that list with things you've learned throughout this course.
>
> **[4:07](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=247)** The third phase of a pen test is threat modeling.
>
> **[4:11](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=251)** This is where you identify the real-world threat actors that are likely to go after the production application so you can emulate their methods.
>
> **[4:20](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=260)** In order to understand those threat actors it will help you to analyze the business assets and business processes tied to the application in question.
>
> **[4:31](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=271)** Know what the attackers might compromise and you're that much closer to understanding those attackers.
>
> **[4:37](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=277)** If you've not done threat modeling in the past I cover two popular threat models, STRIDE and DREAD, in detail in my [[Static Application Security Testing]] course.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=288)** The PTES presents one way of considering threat agents and their capabilities, and incorporating those external threat models into your test will help you build out more in-depth, more realistic threat models.
>
> **[5:04](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=304)** The fourth phase of a pen test is vulnerability analysis.
>
> **[5:07](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=307)** When you get to this phase, you are finally, finally ready to run your web application vulnerability scans.
>
> **[5:15](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=315)** This is where tools like [[Burp Suite]] and [[OWASP]] ZAP come in handy.
>
> **[5:20](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=320)** Don't forget to include APIs and web services in your vulnerability analysis.
>
> **[5:26](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=326)** Just because they're not intended to be user facing doesn't mean that you should ignore them.
>
> **[5:31](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=331)** If they're part of the attack surface then you need to give them the attention they deserve.
>
> **[5:36](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=336)** The question of active scanning versus passive scanning comes up here as well.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=341)** Personally, I don't think it needs to be an either/or conversation.
>
> **[5:45](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=345)** Do both.
>
> **[5:47](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=347)** Run active vulnerability scans to see what you can find and then do some additional research on publicly available sites like the CVE database on [mitre.org](https://mitre.org) to see what other potential vulnerabilities you might be able to turn up.
>
> **[6:03](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=363)** The fifth phase of a pen test is exploitation.
>
> **[6:06](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=366)** Now you're ready to start attacking the application.
>
> **[6:11](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=371)** You should have considerable information about the app and the infrastructure from your information gathering efforts.
>
> **[6:17](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=377)** Your threat models have helped you prepare these attacks and your vulnerability analysis has provided you with avenues to explore where your attacks are most likely to succeed.
>
> **[6:28](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=388)** Take time to plan for potential countermeasures before launching your attacks.
>
> **[6:34](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=394)** If there's a web application firewall in play then the chances of a successful injection attack, for example, are going to go way down.
>
> **[6:42](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=402)** Likewise, any [[Security Operations]] center employees monitoring alerts you might trigger are likely to recognize you as an attacker and they may even black hole your IP address.
>
> **[6:54](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=414)** You might have hit on some false positives in your previous phases.
>
> **[6:59](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=419)** Maybe your OSINT gathering turned up URLs that no longer exist.
>
> **[7:03](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=423)** Maybe your vulnerability scanner misidentified a possible weakness.
>
> **[7:08](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=428)** Use the exploitation phase to separate those false positives from actual exploitable vulnerabilities.
>
> **[7:16](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=436)** The sixth phase of a pen test is post-exploitation.
>
> **[7:21](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=441)** Assuming you were successful during the exploit phase you'll be faced with an important question.
>
> **[7:27](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=447)** Now what do I do?
>
> **[7:29](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=449)** In the pen testing world the post-exploitation phase is all about four key activities.
>
> **[7:35](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=455)** The first is persistence.
>
> **[7:37](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=457)** If you lose your connection with a web app you want to make sure that you don't have to start all over.
>
> **[7:43](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=463)** Building a back door into that infrastructure is usually a great starting point.
>
> **[7:48](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=468)** Once you've established persistence, you'll enter the cycle of privilege escalation and lateral movement.
>
> **[7:55](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=475)** You'll want to take over administrator accounts or create your own.
>
> **[8:00](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=480)** You'll also want to jump to other apps and other systems where that compromised admin account also has privilege.
>
> **[8:07](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=487)** The more of the environment you control the more successful your test is going to be.
>
> **[8:13](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=493)** At this point, you're ready for data exfiltration.
>
> **[8:17](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=497)** If the goal of the test is to compromise sensitive or restricted data, see if you can export that data from the environment.
>
> **[8:25](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=505)** And finally make sure to clean up after yourself.
>
> **[8:29](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=509)** Don't leave any artifacts or back doors that an attacker could find and abuse and actually steal data from your organization.
>
> **[8:39](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=519)** The seventh and final phase of a pen test is reporting.
>
> **[8:43](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=523)** It might not be the most entertaining but it's definitely the most important.
>
> **[8:48](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=528)** There's a subtle art to taking all of the technical details from your test, all the tools and techniques that you used and translating that information into something that makes sense to the people who are going to read the final report.
>
> **[9:04](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=544)** Remember, a lot of these folks aren't likely to be pen testers and they didn't sit with you and shoulder surf during the actual test.
>
> **[9:12](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=552)** Your report needs an executive summary that focuses on the business impact of your results.
>
> **[9:19](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=559)** Stay away from acronyms in this section.
>
> **[9:21](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=561)** Keep it high level.
>
> **[9:23](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=563)** Put all the testing details in the technical section of the report.
>
> **[9:28](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=568)** Here I think you should share as much information as you possibly can.
>
> **[9:33](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=573)** Include the names of the tools.
>
> **[9:35](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=575)** Talk about the techniques you used in detail explaining them in a step-by-step format where possible.
>
> **[9:42](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=582)** If the people who read the report can execute some of those same tests and get the same results that you saw, then they're much more likely to follow your remediation recommendations.
>
> **[9:55](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=595)** The PTES is worthy of an entire course or series of courses unto itself.
>
> **[10:00](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=600)** You now know enough to help you get started but there's a lot more information on the PTES website that you'll find useful when building your own plans and running your own web application pen test.
>
> **[10:13](https://www.linkedin.com/learning/dynamic-application-security-testing/penetration-testing-execution-standard?u=76281980&t=613)** Visit this site, take notes, and take full advantage of the decades of experience that went into creating the PTES.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3), [[Application Security]] (2), [[Penetration Testing]] (1), [[Burp Suite]] (1), [[OWASP]] (1)
> **Env Vars:** ptes (11), osint (2), stride (1), dread (1), owasp (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** it's like (1), for example (1)
> **Best Practices:** don't forget (1), make sure to (1)
> **URLs:** [mitre.org](https://mitre.org) (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Types of pen tests](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=0)** - [Teacher] The scope and rules of engagement for each web application penetration test often dictate the tools and techniques that you'll use to conduct that test.
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=10)** Understanding the three different types of pen test, black box, gray box, and white box is essential to helping you prepare appropriately.
>
> **[0:19](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=19)** In a black box penetration test, the pen tester is treated as an unauthorized outsider.
>
> **[0:26](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=26)** The tester has no knowledge of the web application or of the security controls behind it.
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=33)** The tester's goal is to compromise the app from the perspective of an actual attacker with the same restrictions.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=41)** While this approach might be more representative of real world attacks, it does increase the likelihood that a tester might overlook a weakness that could have and maybe should have been tested.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=51)** White box [[Penetration Testing]] refers to an engagement where the customer provides the tester with a considerable amount of internal information about the target application.
>
> **[1:03](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=63)** This often includes reports from other assessments, authenticated web app vulnerability scan reports, infrastructure diagrams, and even valid credentials.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=74)** The intent is to make the best use of the pen tester's time allowing the tester to focus on the controls most likely to be compromised.
>
> **[1:23](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=83)** In my experience though, most web app penetration tests tend to be conducted as gray box tests.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=92)** This approach provides the pen tester with some internal knowledge enough to know where to focus their testing efforts while still preserving as much of that unauthorized outsider perspective as possible.
>
> **[1:46](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=106)** The amount of information shared with the tester is often negotiated during the pre-engagement stage.
>
> **[1:52](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=112)** The type of web app pen test that you conduct is going to be influenced by multiple factors.
>
> **[1:59](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=119)** First and foremost is time.
>
> **[2:01](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=121)** Penetration tests take time and time costs money.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=126)** I've worked on web app pen test where I was limited to just a few days of testing and I've worked on other tests that lasted weeks.
>
> **[2:16](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=136)** The timeframe allotted to each test will have a heavy influence on the testing activities that you're able to perform.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=142)** A related factor is whether the tester is an employee or a consultant.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=148)** Larger, more mature organizations have begun building their own internal red teams.
>
> **[2:34](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=154)** These teams are responsible for performing penetration tests all year round, with staff already on the payroll, staff whose full-time job it is to conduct these types of tests.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=166)** You're likely to be able to spend more time testing a particular app than you would if you are paying an external consultant by the hour.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=174)** The goal of the pen test is also likely to influence the type of test you conduct.
>
> **[3:00](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=180)** Organizations who are only testing their web apps at the level to meet a compliance requirement might settle for a gray or black box test.
>
> **[3:09](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=189)** While organizations committed to long-term security of their applications tend to perform a combination of all three, bringing the final report from each test into the pre-engagement discussions for the next test.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=202)** When it comes to which type of test to perform and when, I recommend that you consider the following.
>
> **[3:30](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=210)** First, commit to do all three types of web app pen tests even if you can only do each one once.
>
> **[3:38](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=218)** The perspective you gain from conducting all three is invaluable.
>
> **[3:43](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=223)** Start by conducting a black box test.
>
> **[3:46](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=226)** This will provide you with a perspective of how your app looks to a real world attacker.
>
> **[3:52](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=232)** Next, conduct a gray box test.
>
> **[3:55](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=235)** Share a little bit of inside information to help fill the gaps but don't share everything just yet.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=242)** See what the testers can accomplish with that little bit of additional information.
>
> **[4:07](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=247)** Finally, settle into a rhythm where you conduct white box test on a recurring basis.
>
> **[4:13](https://www.linkedin.com/learning/dynamic-application-security-testing/types-of-pen-tests?u=76281980&t=253)** Combine the perspective you gained from the previous test with all the internal knowledge at your disposal and continually validate that the app can deflect or withstand the attacks that you are most concerned with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1)
> **Definitions:** refers to (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [teacher] (1)

#### [Web application firewalls](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=0)** - [Instructor] Web application firewalls are defensive technologies that are designed to detect and block potentially malicious application traffic.
>
> **[0:10](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=10)** As an [[Application Security]] tester, you need to know how to identify, and in some cases, circumvent these web application firewalls.
>
> **[0:20](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=20)** Keep in mind, a web application firewall is not the same thing as a network firewall.
>
> **[0:26](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=26)** A network firewall is often a physical or virtual device that sits between a client system and a server network, filtering out network traffic that isn't allowed to pass between those two networks.
>
> **[0:40](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=40)** This filtering is primarily done on network protocols, port numbers, or IP addresses.
>
> **[0:48](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=48)** A web application firewall performs a similar filtering function, but it can see much, much deeper into the data.
>
> **[0:56](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=56)** Web application firewalls inspect all HTTP and HTTPS traffic, looking for potentially malicious strings of text in URLs and in HTTP headers.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=69)** By inspecting this web content and comparing it to known attack patterns, web application firewalls can detect and prevent things like [[SQL]] injection and cross-site scripting attacks without blocking legitimate web traffic.
>
> **[1:25](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=85)** What's even better, defenders can enable custom rules in a web application firewall to virtually patch an application between the time a vulnerability is discovered and the time the development team can create, test and deploy a code fix to production.
>
> **[1:44](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=104)** If you'd like to try out some web application firewalls firsthand, there are several open source options available.
>
> **[1:52](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=112)** ModSecurity is perhaps the best known web application firewall.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=116)** It was originally built to be a module within the Apache web server, but it's grown over the years to become the gold standard in open source WAFs.
>
> **[2:07](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=127)** ModSecurity is so popular that [[OWASP]] launched the ModSecurity Core Rule Set project to build and maintain useful rule sets within that tool.
>
> **[2:18](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=138)** Other open source options include NAXSI, short for Nginx Anti Cross Site Scripting and SQL Injection, WebKnight, an open source WAF for IAS, Shadow Daemon, and OWASP Coraza.
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=155)** You can download and begin testing a WAF in your home lab in a matter of minutes, but deploying a WAF in production requires a lot of planning.
>
> **[2:45](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=165)** You should always, always, always deploy a web application firewall in listen-only mode first.
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=173)** If you plan on tuning it, so that it only blocks bad traffic and not legitimate traffic, then you need to collect enough data to identify what that normal, legitimate traffic looks like.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=186)** After you've collected enough data to profile your app, then you should start to turn on some alerts.
>
> **[3:12](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=192)** Start with a few items from the OWASP Top 10, focus on things like injection attacks and cross-site scripting attacks.
>
> **[3:21](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=201)** Your goal here is to see whether normal traffic generates any false positives.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=206)** Next, perform some web app vulnerability scans and maybe a couple of penetration tests.
>
> **[3:32](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=212)** With alerting enabled, you'll be able to see which activities are detected and which ones aren't.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=219)** Then and only then are you ready to start blocking known attack patterns.
>
> **[3:45](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=225)** Don't enable everything at once.
>
> **[3:47](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=227)** Turn on a few rules at a time, monitor for potential production impacts, and then repeat that pattern.
>
> **[3:55](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=235)** In order to evade a WAF, it helps to know which WAF is protecting the target application.
>
> **[4:01](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=241)** By manually browsing the site, you can get the WAF to generate artifacts that might give away the information you need.
>
> **[4:08](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=248)** Those artifacts include cookies, values in the HTTP headers, and even in some cases, error messages in the browser itself.
>
> **[4:18](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=258)** If you want to automate this activity, then you could turn to the [[Nmap]] script, http-waf-detect, or the Wafw00f [[Python (Programming Language)|Python]] script in [[Kali Linux]].
>
> **[4:31](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=271)** Once you know which WAF you're up against, then you can try a few different evasion techniques.
>
> **[4:37](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=277)** In a white box web app pen test, the best place to start is a web app firewall rule set review.
>
> **[4:44](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=284)** Look at what the WAF is expecting and then throw a curve ball its way.
>
> **[4:49](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=289)** By toying around with the characters in your request, you might find a combination that the WAF assumes is safe.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/web-application-firewalls?u=76281980&t=297)** Regarding automation, the WAFNinja script from khalilbijjou on [[GitHub]] has some great ideas for attacking WAFs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[SQL]] (2), [[Application Security]] (1), [[Nmap]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** waf (9), http (3), owasp (3), sql (2), https (1)
> **CLI Commands:** apache (1), nginx (1), python (1), find (1)
> **Definitions:** short for (1), is a  (1)
> **Tools:** github (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [SIEMs](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=0)** - [Instructor] Security information event management systems, which I pronounce SIEMs, are designed to detect and report on potential attacks.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=9)** Before embarking on your next web app pen test, you should spend some time learning ways to evade SIEMs.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=17)** Security information event management systems are actually a combination of two separate technologies, security information management systems and security event management systems.
>
> **[0:30](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=30)** Security information management systems were designed to collect and analyze log data, extracting security events from those logs.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=39)** One of the goals of a SIM is to automate security log management.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=45)** Security event management systems perform threat analysis on that data, helping you automate your [[Security Incident Response]] activities.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=54)** By combining these technologies into a security information event management system, you get the best of both worlds- log management and [[Incident Response]] automation.
>
> **[1:07](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=67)** SIEMs have many capabilities, but four in particular stand out.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=72)** They aggregate logs, collecting them from multiple disparate systems and organizing them in a way that enables you to search across all those logs from a single interface.
>
> **[1:23](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=83)** They correlate the events in those logs, identifying relationships and patterns that might indicate malicious activity.
>
> **[1:31](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=91)** They enable you to log in and analyze those logs for yourself, looking for patterns that go above and beyond the automatic correlation rules.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=100)** And they alert on potential security incidents, using all the logs and logic and intelligence at their disposal to let you know in near [[Real-Time]] when an attack is underway.
>
> **[1:52](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=112)** Having a finely-tuned SIEM in your environment can be like having a full-time security professional watching your systems and applications like a hawk.
>
> **[2:03](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=123)** As you prepare for your [[Web Application Security]] penetration test, it will help you immensely to understand what your testing activities look like to a SIEM.
>
> **[2:13](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=133)** That's why you should stand up an open-source SIEM in your home lab.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=137)** The ELK Stack is arguably the most popular open-source SIEM.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=142)** It takes its name from the three underlying tools, [[Elasticsearch]], Logstash, and Kibana.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=150)** OSSEC+ is, at its core, a host-based [[Intrusion Detection]] system for servers, but with the right configuration, you can also use it as a SIEM.
>
> **[2:41](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=161)** OSSIM, from AlienVault, literally stands for open-source SIEM.
>
> **[2:47](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=167)** Think of it as a pared-down version of some of their commercial offerings.
>
> **[2:52](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=172)** Snort is similar to OSSEC in that it's an intrusion detection and intrusion prevention system, although it was designed to collect data at the network level, not just the server level.
>
> **[3:03](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=183)** And Splunk deserves an honorable mention with this list.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=187)** While it's not open source, it is ridiculously popular.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=191)** The free version of Splunk is limited in the amount of data it can process each day, but that limitation shouldn't be too much of an issue in your home lab.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=202)** As organizations have moved to the cloud, infrastructure-as-a-service providers, like Amazon, [[Microsoft]], and [[Google]], have developed cloud-native SIEMs for their customers.
>
> **[3:33](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=213)** If your app is hosted in AWS, chances are that the [[DevOps]] team has considered Control Tower as their SIEM.
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=221)** [[Microsoft Azure|Azure]] customers might rely on Microsoft Sentinel, while Google customers could leverage Chronicle.
>
> **[3:48](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=228)** Whether or not those teams have enabled these SIEMs often depends on budget.
>
> **[3:53](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=233)** Almost every cloud service you subscribe to comes with a cost.
>
> **[3:56](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=236)** And if a SIEM isn't included in your organization's cloud budget, then you might be able to execute your dynamic [[Application Security]] testing without being detected.
>
> **[4:08](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=248)** The way your SIEM will [[React.js|react]] during a web app pen test depends largely on what log data you're feeding it.
>
> **[4:14](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=254)** In short, if you don't send it enough logs, it can't do its job.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=259)** Feeding application logs to the SIEM should be step one.
>
> **[4:23](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=263)** An attacker is going to try to make the app do things it's not supposed to do.
>
> **[4:27](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=267)** So configure your SIEM to look for any app activity that isn't normal.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=273)** In order to get the most from your SIEM, make sure that you're feeding it log data from every component within the application infrastructure.
>
> **[4:41](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=281)** This includes: web server logs, like Apache or IAS, NetFlow logs, host server logs that include events from operating systems, and database logs.
>
> **[4:53](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=293)** If you have a web application firewall in place, send those logs to the SIEM as well.
>
> **[4:59](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=299)** The more log data the SIEM has to aggregate, correlate, and analyze, the more likely it is that the SIEM will detect and alert on actual attack activity.
>
> **[5:11](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=311)** Since SIEMs aren't internet-facing, don't count on identifying them during your web application penetration test.
>
> **[5:19](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=319)** Instead, focus on how you can obfuscate your attack activity so that it's less likely to trigger any alerts.
>
> **[5:27](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=327)** For starters, open-source intelligence gathering is a great way to evade a scene.
>
> **[5:33](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=333)** Why?
>
> **[5:34](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=334)** Because most of your OSINT gathering will come from publicly-available resources that don't sit on the target network.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=341)** If you're not touching any of the systems tied to the SIEM, you're not generating any events in their security logs.
>
> **[5:49](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=349)** You should also mix up your attack patterns, favoring low and slow over brute force.
>
> **[5:55](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=355)** In order to tune out noise and false positives in a SIEM, administrators set thresholds that represent likely indicators of an attack.
>
> **[6:05](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=365)** One failed login per minute could just be a user who forgot their password, but 60 failed logins per minute?
>
> **[6:13](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=373)** Come on, that's got to be an attack.
>
> **[6:16](https://www.linkedin.com/learning/dynamic-application-security-testing/siems?u=76281980&t=376)** Adjust your attack patterns to fly under the radar, and you're less likely to trigger alerts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (2), [[Microsoft]] (2), [[Google]] (2), [[Security Incident Response]] (1), [[Incident Response]] (1)
> **Env Vars:** siem (17), ossec (2), sim (1), elk (1), ossim (1)
> **CLI Commands:** make (2), aws (1), apache (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** think of it as (1), similar to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Purple teaming](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=0)** - [Instructor] As a web application penetration tester.
>
> **[0:03](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=3)** you'll often find yourself in a red versus blue scenario.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=7)** You're on the Red Team attacking the application while the defenders on the Blue Team try to detect your attacks and shut them down.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=17)** Now, this traditional model of pen testing is okay, but there's a much, much better way to go about it.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=24)** Instead of making it a red versus blue scenario, have the attackers work side-by-side with the defenders during a web app pen test, sharing all their tips and tricks with one another.
>
> **[0:37](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=37)** This approach is known as purple teaming.
>
> **[0:40](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=40)** In order to have a successful purple team engagement though, you need to make sure you've got the right skills represented.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=49)** Red Teamers are your breakers.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=51)** They're the folks who look at a web app and wonder how they can bypass the controls, how they can make it do something it's not supposed to do.
>
> **[1:00](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=60)** Red Teamers aren't just willing to break security controls though.
>
> **[1:04](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=64)** They're often willing to break the rules.
>
> **[1:07](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=67)** That outside of the box thinking is critical when it comes to identifying techniques that actual criminals will use when targeting your web apps.
>
> **[1:16](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=76)** You want that same thinking in-house.
>
> **[1:19](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=79)** You want someone on your team who can conceive of those attacks before the criminals execute them.
>
> **[1:26](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=86)** A favorite book of Red Teamers is the "Red Team Field Manual."
>
> **[1:30](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=90)** It's a short, technical guide that contains both commands that Red Teamers use frequently as well as use cases to more easily identify scenarios where they might use those commands during an actual pen test.
>
> **[1:43](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=103)** Look around your organization for people who think like this.
>
> **[1:47](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=107)** Get them a copy of the "RTFM," and ask them to join the Red Team for your next web app pen test.
>
> **[1:55](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=115)** Your Blue Teamers are your builders, your defenders.
>
> **[1:59](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=119)** These are the folks who look at a web app and wonder whether the right controls have been implemented at every layer of the app and the app infrastructure.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=129)** Yes, Blue Teamers understand attack patterns, but they're more interested in putting the right combination of controls in place to prevent, detect, and respond quickly to any and all attempts to break an application.
>
> **[2:24](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=144)** Their thinking tends to run more along the lines of defense in depth.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=148)** Does the app enforce complex passwords?
>
> **[2:31](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=151)** Does it require [[Multi-factor Authentication]]?
>
> **[2:34](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=154)** Are we logging everything we need to log?
>
> **[2:36](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=156)** Are the servers patched?
>
> **[2:38](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=158)** When you sit down with a Blue Teamer to discuss the security of your web application, you're likely to be assaulted with questions like these as their mind's race to identify any control that might shut down an attacker before the attacker can do any harm.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=174)** A nice alternative to the "RTFM" for Blue Teamers is the "Blue Team Field Manual."
>
> **[3:00](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=180)** This book focuses on [[Cybersecurity Incident Response]], using the [[NIST]] [[Cybersecurity]] framework as its guide.
>
> **[3:08](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=188)** Look around your organization for people who think like this.
>
> **[3:12](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=192)** Get them a copy of the "BTFM," and ask them to join your Blue Team for your next web app pen test.
>
> **[3:21](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=201)** By bringing your Red Team and your Blue Team together during your web application penetration test, you'll get so much more value out of everyone's time.
>
> **[3:31](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=211)** The Red Teamers will show the Blue Teamers how they can circumvent those existing controls, and the Blue Teamers can modify their controls to counter those new attack techniques.
>
> **[3:42](https://www.linkedin.com/learning/dynamic-application-security-testing/purple-teaming?u=76281980&t=222)** This constant exchange of knowledge between the two teams will significantly increase the resilience of your production web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multi-factor Authentication]] (1), [[Cybersecurity Incident Response]] (1), [[NIST]] (1), [[Cybersecurity]] (1)
> **Env Vars:** rtfm (2), nist (1), btfm (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Demo: Kali Linux](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=0)** - [Instructor] [[Kali Linux]] is a [[Linux]] server, preloaded with [[Penetration Testing]] tools.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=6)** If you go to [kali.org](https://kali.org) and click on Download, you'll have multiple options for how you can download that server.
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=15)** I want to use a virtual machine, specifically, a virtual machine for Oracle Virtual Box.
>
> **[0:22](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=22)** Now, when we get into Kali, I'm going to show you how the penetration testing execution standard aligns with all the tools that are built into this machine.
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=33)** Once you log into Kali, I want you to go to the upper left-hand corner, click on the application icon and open up the menu of tools available to you.
>
> **[0:44](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=44)** You'll see that the tools are organized sequentially based on how you would work through a penetration test.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=51)** You'll go to Information Gathering to learn about your targets, and within these tools, I'd recommend DNS Analysis, using a tool to identify all of the host that you might be trying to scan with your web app scanners.
>
> **[1:08](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=68)** I'd also recommend going to Network and Port Scanners, maybe running an [[Nmap]] scan to identify available services.
>
> **[1:16](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=76)** And I'd also recommend doing some SSL analysis, maybe using a tool like SSLScan, to identify how the application is encrypting data.
>
> **[1:27](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=87)** Once you develop that understanding of your targets, you could go to Vulnerability Analysis and use a tool like [[Nikto]] to identify potential weaknesses on the system hosting the web application.
>
> **[1:43](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=103)** But when we get into the web application analysis itself, Kali's got a number of tools to get very deep and very specific.
>
> **[1:51](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=111)** So if, for example, you find a [[WordPress]] site running on one of the servers that is in scope for the pen test, there's a tool built into Kali, WPScan, which is exclusively built for identifying security vulnerabilities in WordPress.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=129)** We could also use the web app proxy built into [[Burp Suite]].
>
> **[2:14](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=134)** Instead of installing it separately, it's already built into Kali.
>
> **[2:18](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=138)** Or you could use the web crawlers, use a tool like Directory Buster to identify all of the directories that are world readable, often using brute force, wordless-based attacks.
>
> **[2:32](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=152)** And from a vulnerability scanner standpoint, Kali has multiple tools built in to help you quickly identify vulnerabilities in these web applications.
>
> **[2:43](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=163)** If you identify a way to launch a [[SQL]] injection attack against an in-scope application, [[SQLmap]] is a terrific tool for SQL injection.
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=173)** If you wanted to do a brute force, online password attack, you might try a tool like [[Hydra]] to try to log in with known usernames or passwords.
>
> **[3:04](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=184)** And once you get down to exploitation and post exploitation, now you're on the internal network using the vulnerabilities you've identified for privilege escalation and lateral movement.
>
> **[3:17](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=197)** Kali even has reporting tools built in to help streamline the [[Data Collection]] and reporting process, as you wrap up the pen test and prepare to present the findings to your stakeholders.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=209)** All of this functionality is built into Kali by default.
>
> **[3:34](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=214)** Now, the challenging part for you is to learn how each of these tools work and how these tools would apply to your unique web application penetration test.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/demo-kali-linux?u=76281980&t=224)** If Kali wasn't already in your web application testing toolbox, highly recommend that you add it today and that you start exploring the individual tools in details to find the ones that are most appropriate for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2), [[WordPress]] (2), [[SQL]] (2), [[Kali Linux]] (1), [[Linux]] (1)
> **UI Navigation:** go to (3), click on (2)
> **Env Vars:** sql (2), dns (1), ssl (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **URLs:** [kali.org](https://kali.org) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Testing for the OWASP Top Ten (2021)

[↑ Back to Table of Contents](#table-of-contents)

#### [The OWASP Top Ten](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=0)** - [Instructor] It's easy to fall into the trap of using all the resources we've covered so far to build out a testing program so comprehensive that it will quickly overwhelm both the testers and the developers.
>
> **[0:14](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=14)** Your goal is to improve the security of your applications, right?
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=18)** Then don't try to do too much at once.
>
> **[0:21](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=21)** Walk, then run.
>
> **[0:23](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=23)** A great way to get your feet under you is by focusing on the [[OWASP]] Top 10.
>
> **[0:30](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=30)** The OWASP Top 10 Project is hands down the most mature, most popular project in the OWASP Project Library.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=39)** While it began as a thought experiment in the early 2000s, this list of the 10 most critical [[Web Application Security]] risks has become the cornerstone of the [[Application Security]] industry.
>
> **[0:52](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=52)** Updated every three years, the top 10 list is first released in English and then translated into multiple languages, making it accessible to developers and security professionals all around the world.
>
> **[1:06](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=66)** You can now find tests and reports based on the OWASP Top 10, built into a significant number of web application security tools, both commercial and open source.
>
> **[1:19](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=79)** While the top 10 web application security risks works well as a standalone project, there are two related projects that you should consider as you're building out your foundational testing program.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=92)** The OWASP Mobile Application Security Project came into being as mobile devices became more prevalent among consumers and enterprises alike.
>
> **[1:42](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=102)** Many of OWASP's original projects were designed for web applications, but what about mobile applications?
>
> **[1:50](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=110)** The security risks that accompany mobile apps are noticeably different from the risks related to web applications.
>
> **[1:57](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=117)** OWASP identified a need to educate security professionals and developers on those differences, and the top 10 list for mobile developers was a logical starting point.
>
> **[2:08](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=128)** But that top 10 list is only one piece of the puzzle.
>
> **[2:12](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=132)** The OWASP Mobile Application Security Project also contains a Mobile Application Security Testing Guide, a Mobile Application Security Verification Standard, and a Mobile Application Security Checklist.
>
> **[2:27](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=147)** OWASP also recognized that the top 10 lists were reactive.
>
> **[2:31](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=151)** They start with the vulnerability and then work their way back to the fix.
>
> **[2:35](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=155)** But what if you could start with security in mind and avoid the introduction of those vulnerabilities entirely?
>
> **[2:42](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=162)** That's the intent behind the OWASP Proactive Controls Project, a developer-centric resource designed to help devs build security into their apps in the first place.
>
> **[2:55](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=175)** Again, you don't want to overcomplicate things.
>
> **[2:58](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=178)** For now, you want to focus on simple and straightforward.
>
> **[3:02](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=182)** Get a few successes under your belt and then build on those successes.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/the-owasp-top-ten?u=76281980&t=186)** Let's look at how to perform dynamic application security testing for each of the web application security risks listed in the OWASP Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (11), [[Application Security]] (7), [[Web Application Security]] (3)
> **Env Vars:** owasp (11)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [A1: Broken access control](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=0)** - [Teacher] The most significant risks in the [[OWASP]] top 10 list are broken access control flaws.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=7)** You learned about broken authentication earlier, about keeping unauthorized users out of your application but you also need to make sure that the application enforces the right security on users after they successfully log in.
>
> **[0:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=21)** An authenticated user should only have access to their account.
>
> **[0:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=27)** If access controls aren't properly enforced though, an attacker could potentially have access to functions and data that belong to another user's account.
>
> **[0:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=36)** While automated tools might be able to detect whether access controls are missing, you really need to rely on [[Manual Testing]] to make sure that the access controls are properly aligned with your business rules.
>
> **[0:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=50)** That lack of automated detection is one of the reasons it's so easy for broken access controls to slip into an application.
>
> **[0:59](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=59)** Automated scanners have no way of knowing whether Dan in accounting should have access to the self-service password reset page, or whether Tiffany in IT should have the ability to reset passwords for accounts that aren't hers.
>
> **[1:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=73)** You might have business rules that say, "No one can reset their own passwords."
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=78)** But configuring a scanner to check those rules?
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=82)** Good luck.
>
> **[1:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=83)** You can hardly blame the developers for overlooking these business rules if they don't have an access management framework to follow.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=92)** Every organization is a little bit different and it can really be challenging to keep up with who should have access to what.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=100)** Without some internal framework to keep everyone on the same page, the likelihood of flaws like these ending up in your app is pretty high.
>
> **[1:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=109)** The damage and attacker can inflict by exploiting broken access control flaws, can vary from annoying to very costly.
>
> **[1:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=118)** An authenticated attacker could potentially view sensitive files, make changes to restricted data or give themselves privileges that should never be assigned to their account.
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=131)** I once conducted a penetration test against a publicly available web app that allowed users to self-register.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=137)** Every user account was identical in its permissions.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=142)** Users could see their own stuff, managed their own account but that's it.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=146)** During my testing, I found that I could change my user identifier after I was logged in, which allowed me to impersonate other users.
>
> **[2:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=156)** I kept changing that identifier until I found an administrative user account and I used those privileges to take over the entire application.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=166)** Remember, just because an automated scanner doesn't find a weakness like this, doesn't mean that these weaknesses aren't in there.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=174)** Spend some time digging into how the application provisions user accounts, whether that's through self-registration or through a manual request process.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=185)** If you can compromise either of those processes, then you may be able to bypass the target applications access controls with an apparently legitimate user account.
>
> **[3:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=197)** Unprotected directories are an area of concern here.
>
> **[3:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=200)** If a directory should be restricted to certain users but you can access it with your own less privileged account or without authenticating at all, then that's an indicator that the access controls aren't as strong as they need to be.
>
> **[3:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=216)** And anywhere that you can escalate to privileges assigned to your account without going through the proper channels and approvals first, represents a broken access control weakness.
>
> **[3:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=228)** In the OWASP Web [[Security Testing]] Guide, you'll find five tests in section 4.3 identity management and four tests in section 4.5 authorization testing.
>
> **[3:59](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=239)** By approaching your application design with a default deny mindset, you're much more likely to prevent broken access control flaws from occurring.
>
> **[4:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=251)** You can compliment this by reusing existing access control mechanisms.
>
> **[4:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=256)** Again, role-based access controls are your friend.
>
> **[4:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=260)** Check to see if the web server has been configured to disabled directory listing.
>
> **[4:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=266)** This is on the web server administrator, not the developer but you need to test for it regardless.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=273)** Have the developers and the security team discuss logging and monitoring in detail.
>
> **[4:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=278)** It's up to the developers to implement the right level of logging, but the security team is going to be monitoring the logs and taking appropriate action.
>
> **[4:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=287)** Not only does logging and monitoring have immediate security benefit but there's a good chance you have compliance requirements around logging and monitoring that also need to be addressed.
>
> **[5:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=300)** Regarding a access turn on rate limiting.
>
> **[5:02](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=302)** If you want to get ahead of attack from automated tools rate limiting your API and controller access is a great control.
>
> **[5:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=312)** The OWASP Web Security Testing Guide includes four tests designed to validate authorization controls.
>
> **[5:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=319)** Keep these handy when you're having those designed discussions with your developers.
>
> **[5:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=325)** By bringing these tests to the table during the design phase, you're giving the development team the knowledge they need to give these controls the attention they deserve.
>
> **[5:35](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=335)** And check out the OWASP Authorization Cheat Sheet.
>
> **[5:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a1-broken-access-control?u=76281980&t=339)** This resource can serve as a crash course for your developers on how to build authorization controls into their apps, explaining concepts like enforcing lease privilege, denying by default, and validating permissions on every request in simple, straightforward language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Security Testing]] (2), [[Manual Testing]] (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** owasp (4), api (1)
> **Versions:** 4.3 (1), 4.5 (1)
> **Definitions:** is a  (2)
> **Speakers:** - [teacher] (1)

#### [A2: Cryptographic failures](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=0)** - [Instructor] The second set of risks in the [[OWASP]] Top 10 list are cryptographic failures.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=6)** If an attacker is targeting your application, then chances are the attacker wants access to the data that you've hidden behind the login screens and restricted to authorized users.
>
> **[0:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=18)** If, however, you've left any gaps in your data protection controls, the attacker could potentially steal that data without exploiting injection flaws or broken access controls.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=31)** For example, if your application doesn't encrypt data while it's traveling from end user's client to the server, then an attacker could potentially use an adversary-in-the-middle attack to steal that data in transit.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=45)** If you've got things like passwords or financial account numbers or healthcare data stored in plain text files on your servers, then an attacker who finds a way to navigate directly to those files can steal that data without much effort.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=61)** Even if you've encrypted data at [[Representational State Transfer (REST)|rest]] or data in motion, you should still consider the risk of an attacker gaining access to that encrypted data.
>
> **[1:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=70)** An attacker could potentially exploit weaknesses in the encryption implementation and get to the plain text-sensitive data that you were trying to protect.
>
> **[1:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=80)** The easiest way for a cryptographic flaw to end up in a web application is if encryption isn't listed as one of the requirements in the early design and planning discussions.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=93)** This includes encrypting data in transit while it travels between client and server and encrypting data at rest while it resides on disk.
>
> **[1:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=102)** The second easiest way to introduce these flaws is to require encryption without understanding how to properly implement these controls.
>
> **[1:53](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=113)** Encryption is tricky, and it's easy to implement it in a way that accidentally exposes the data to compromise.
>
> **[2:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=121)** Consider this question: What's the difference between encryption, hashing, and encoding?
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=129)** Encrypted data can be decrypted with the right key, but hash data can't be de-hashed.
>
> **[2:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=136)** It can only be compared to another value generated with the same hash function.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=142)** And encoded data, whether ASCII or hex or Base64, can be reverted to its original plain text value without any keys at all.
>
> **[2:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=153)** Each mechanism for protecting sensitive data comes with varying levels of overhead and security, and your development team needs to consider these differences when determining which approach to use.
>
> **[2:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=167)** When considering cryptographic flaws, the worst-case scenario is often a data breach.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=174)** The entire reason developers spend time implementing encryption and hashing functions is because the data protected by those functions needs to be protected from people who aren't authorized to see it.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=187)** Aside from all the costs and negative publicity associated with a data breach, these flaws could also lead to compliance regulations and fines.
>
> **[3:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=197)** [[Privacy]] laws, like GDPR, CCPA, and PIPEDA, carries some hefty fines for organizations who leave personally identifiable information exposed.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=209)** And the HIPAA laws in the US can cripple a business with fines following a data breach of electronic protected health information.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=219)** Application functions that use unencrypted network protocols are a prime example of cryptographic failures.
>
> **[3:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=227)** An attacker performing an adversary-in-the-middle attack could easily steal sensitive data in transit ff the data isn't encrypted, but encryption isn't enough.
>
> **[3:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=238)** The data needs to be properly encrypted.
>
> **[4:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=241)** If the app is using encryption mechanisms with known weaknesses, then an attacker might be able to downgrade the online encryption or convert that encrypted data back to plain text via an offline brute force attack.
>
> **[4:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=256)** The OWASP Web [[Security Testing]] Guide Section 4.9 contains four tests for weak [[Cryptography]].
>
> **[4:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=264)** Of course, if sensitive data can be accessed by browsing directly to that resource, who cares about encryption?
>
> **[4:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=272)** World-writable directories and directories that aren't restricted to the right users only amplify the value of strong cryptographic controls.
>
> **[4:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=282)** If you're going to protect sensitive data appropriately, you need to define what the term "sensitive" means to your organization.
>
> **[4:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=290)** The best starting point for this discussion is your [[Data Classification]] policy.
>
> **[4:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=295)** That policy should define what you need to protect, and you should have related standards and procedures that document exactly how your technical controls will comply with that policy.
>
> **[5:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=307)** If this documentation isn't in place today, write it!
>
> **[5:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=311)** One of the first data classification policies I ever used was one sentence: "Credit card data must be encrypted."
>
> **[5:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=320)** Now, it was far from perfect as policies go, but it was a start.
>
> **[5:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=325)** Another easy way to address this risk is to avoid any unnecessary storage or transmission of sensitive data.
>
> **[5:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=333)** If it isn't there for attackers to go after, then you've already hampered their plans.
>
> **[5:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=339)** For those areas where you do need to store and transmit sensitive data, encrypt everything.
>
> **[5:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=345)** Don't assume that just because the data is on an internal network that it's safe.
>
> **[5:51](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=351)** I've worked on enough penetration tests to tell you that once an attacker is on that same internal network, they're like kids in a candy store- They'll go after everything they can find.
>
> **[6:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=363)** Disable the caching of sensitive data to ensure that it can't be extracted from that cache, and use salted hashing functions when protecting your passwords.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=374)** OWASP has multiple cheat sheets that you might be interested in here, including Transport Layer Protection, User [[Privacy Protection]], Password Storage, and Cryptographic Storage.
>
> **[6:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a2-cryptographic-failures?u=76281980&t=388)** And Control 8 of the OWASP Proactive Controls emphasizes the importance of classifying data and of encrypting data both at rest and in transit, while also encouraging defined processes around key lifecycle management and around application secrets management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Representational State Transfer (REST)|Rest]] (3), [[Data Classification]] (2), [[Privacy]] (1), [[Security Testing]] (1)
> **Env Vars:** owasp (4), ascii (1), gdpr (1), ccpa (1), pipeda (1)
> **CLI Commands:** find (1)
> **Versions:** 4.9 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [A3: Injection](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=0)** - [Instructor] The third set of risks in the [[OWASP]] Top 10 are injection flaws.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=6)** When an attacker sends untrusted data to a backend interpreter, something like an OS command line interpreter, or a database or an LDAP directory, the interpreter has to decide what to do with that data.
>
> **[0:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=20)** The only problem is that interpreters can't decide.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=24)** That's not their job.
>
> **[0:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=25)** If they receive a command, they're going to act on it.
>
> **[0:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=29)** That's why it's so important for the developers to make sure that the only commands that make it to those interpreters are commands that the developers trust.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=39)** Attackers seeking to exploit injection flaws are going to go after any and every part of the application that looks like it interacts with an interpreter on the backend.
>
> **[0:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=50)** Common attack vectors include environment variables, application parameters, web services, and even the users themselves.
>
> **[1:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=61)** If an application allows users to enter data, and let's face it, most of the apps do, then they're at risk.
>
> **[1:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=68)** Developers can only control so much.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=72)** As soon as they start letting users enter data into the application, all bets are off.
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=78)** Applications that explicitly trust the user are the most likely to be compromised.
>
> **[1:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=85)** If the app doesn't validate whether the data is what was expected, if it doesn't filter out unwanted characters, or sanitize the data before sending it on to the interpreter, then the app is exposed.
>
> **[1:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=98)** When it comes to exploiting injection flaws, escape characters are an attacker's best friend.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=105)** Escape characters provide the attacker with a way to force the backend interpreter to see the command in a whole new light.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=114)** For example, an attacker could force a login screen to reinterpret the password as a conditional statement.
>
> **[2:02](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=122)** If the number one equals the number one, let me log in with the administrator account.
>
> **[2:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=127)** That's a common [[SQL]] injection attack.
>
> **[2:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=130)** Attackers can also include injection attacks in the data itself.
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=135)** By adding extra parameters to things like search queries or [[JSON]] messages, an attacker could trick an application into returning more data than it should, including the entire backend database.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=150)** Injection attacks are pretty awful, and they've been hovering around the top of the OWASP Top 10 from the very beginning.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=157)** Does the application require a login?
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=160)** Then the attacker's going to send commands to the LDAP directory, or the SQL database that stores all the usernames and passwords.
>
> **[2:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=168)** Does the application write data to or read data from a backend database?
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=173)** Once the attacker determines the type of database, you're going to start seeing specific database commands that the developers never intended for the application to process.
>
> **[3:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=185)** And if the application sends commands directly to the OS, commands designed to reuse existing services and utilities on the server, then an attacker can take over the entire server.
>
> **[3:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=197)** I know because I've done it, with my client's permission, of course.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=202)** These technical impacts are just the starting point.
>
> **[3:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=206)** Just think of what the impact would be to your business if you experienced a data breach as a result of an injection attack, or if an attacker exploited one of these flaws to take complete control of one of your servers.
>
> **[3:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=220)** From a dynamic [[Application Security]] testing perspective, two things you should look out for are form fields and URL parameters.
>
> **[3:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=229)** When an app developer wants to construct a SQL query, or run a local command of the user's choosing, that developer needs to provide the user with a way of submitting input to the application.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=242)** That input is often going to be submitted through a form field.
>
> **[4:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=246)** Once it's submitted, the app may keep track of certain input values in the URL.
>
> **[4:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=253)** If you hone in on form fields and URL parameters during your testing, you are going to find two of the most common targets for injection attacks.
>
> **[4:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=264)** Section 4.7 of the OWASP testing guide contains extensive information on testing for multiple types of injection attacks.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=273)** Including SQL, [[NoSQL]], LDAP, ORM, XML, SSI, XPath, IMAP, SMTP, code and command injection.
>
> **[4:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=286)** That's quite a list.
>
> **[4:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=289)** When it comes to preventing injection flaws, you've got multiple options.
>
> **[4:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=294)** Instead of requiring developers to build every query and command from scratch, safe APIs and trusted object relational mapping, ORM tools, are fantastic.
>
> **[5:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=306)** If someone has already figured out a way to securely handle these queries, you can reuse their work.
>
> **[5:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=314)** You can also whitelist server-side input validation.
>
> **[5:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=318)** If your application is only expecting input that matches a finite list of options, postal codes, for example, then don't let the users submit whatever they want in that field.
>
> **[5:31](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=331)** Have them select from a known list of valid options instead.
>
> **[5:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=336)** Input validation can be tricky though, when your app needs to allow for a variety of input options.
>
> **[5:43](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=343)** As an example, I don't know that whitelisting values for first name or last name would be the most sustainable approach to ensure that users don't launch injection attacks using those two fields.
>
> **[5:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=357)** Now, if you send that input to an intermediary on the server, one that can encode those characters before sending them to the interpreter, you just might be able to mitigate that attack without making your app unusable.
>
> **[6:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=372)** If your developers insist on keeping their dynamic queries in the source code, they can still use escape characters specific to that interpreter.
>
> **[6:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=382)** By building those escape characters into the queries, they can negate an attacker's attempt to do the same.
>
> **[6:30](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=390)** And it's also good practice to use native controls to limit your exposure.
>
> **[6:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=394)** Things like the limit statement in SQL.
>
> **[6:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=398)** If your database contains hundreds of thousands of records, but your legitimate users only need to see 10 records at a time, then you can set the limit statement to make sure an attacker can only see 10 records at a time as well.
>
> **[6:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=414)** At some point, you're going to need to get into the weeds as you test for injection flaws.
>
> **[7:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=421)** More importantly, you're going to want specific code snippets that show you what injection flaws look like, and what changes you need to make to fix them.
>
> **[7:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=431)** The OWASP Injection Prevention Cheat Sheet contains both code examples and context related to identifying and preventing injection flaws.
>
> **[7:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=442)** Another site you should bookmark is Bobby Tables, a guide to preventing sequel injection.
>
> **[7:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a3-injection?u=76281980&t=448)** Named after one of the funniest XKCD cartoons ever, speaking as both parent and an InfoSec nerd, this site contains an extensive set of language-specific guides on preventing SQL injection attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[OWASP]] (4), [[JSON]] (1), [[Application Security]] (1), [[NoSQL]] (1)
> **Env Vars:** sql (6), owasp (4), ldap (3), url (3), orm (2)
> **CLI Commands:** make (4), find (1)
> **Analogies:** for example (2)
> **Versions:** 4.7 (1)
> **Tools:** command line (1)
> **Exercise Files:** source code (1)
> **Best Practices:** good practice (1)

#### [A4: Insecure design](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=0)** - [Instructor] The fourth set of risks in the [[OWASP]] top 10 list are insecure design flaws.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=7)** Some years back, the U.S. [[Cybersecurity]] and Infrastructure Security Agency, better known as CISA, provided resources to help software developers, architectures, and security professionals build security into their software from day one.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=24)** While that part of their website has been archived, that principle is still critical.
>
> **[0:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=29)** While all of the top 10 risks are intended to drive security conversations early on in the development life cycle, this particular risk is intended to pull those conversations even earlier, before the developers write a single line of code.
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=46)** For many organizations, conversations around insecure design risks may require a culture shift.
>
> **[0:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=54)** It's one thing to scan for and fix vulnerabilities related to the other top 10 risks, but asking the developers to design apps with security at the forefront is a heavier lift.
>
> **[1:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=66)** These risks can creep into the development lifecycle because of a misunderstanding of the business risk tied to the application.
>
> **[1:15](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=75)** If an app contains personal information, for example, then failing to build in mechanisms to identify and remove that information on a person-by-person basis could result in financial fines from [[Privacy]] regulations like the EU's GDPR.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=93)** Couple that misunderstanding with a lack of defined and documented development processes or a documented [[Software Development]] life cycle, and then you end up hoping that each developer on the team knows those business risks inside and out.
>
> **[1:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=109)** And as folks in security are fond of saying, "Hope is not a strategy."
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=114)** Another indicator that this risk might be present is in the user stories themselves.
>
> **[2:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=120)** If the user stories are entirely focused on functionality, then they may be missing the security language that can help drive a more secure design.
>
> **[2:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=131)** OWASP makes a distinction between design flaws and implementation flaws for one very important reason.
>
> **[2:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=139)** Secure design can counter implementation flaws, but secure implementation can't counter design flaws.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=148)** In other words, even if the implementation process overlooks a security setting, the application could have built-in fail-safes that account for that miss and protect the app regardless.
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=160)** But if an app has an insecure design flaw, even a perfect implementation could still leave it exposed to attackers.
>
> **[2:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=168)** And if that's not enough to sway the C-level execs, let them know that insecure design flaws are more costly to remediate.
>
> **[2:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=177)** As it turns out, it's less expensive to build security in than it is to try to bolt it on after the app's been deployed.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=187)** To determine whether these flaws are present in the apps you're trying to protect, start by asking for documentation.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=194)** A quick review of the SDLC and any supporting docs will help you begin to understand where you might be exposed.
>
> **[3:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=202)** You should also ask your dev team for a software bill of materials or SBOM.
>
> **[3:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=208)** The SBOM should contain a list of all the software libraries used by the app.
>
> **[3:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=213)** And you can do some crosschecking to determine whether any of those libraries are, in themselves, insecure.
>
> **[3:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=220)** And take a look at test cases and the testing tool set.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=224)** While security is a function of quality, not every dev team has deployed [[Security Testing]] tools in their CICD pipeline to check for potential flaws.
>
> **[3:56](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=236)** If you want to address these risks, [[Threat Modeling]] can help you ensure that you're focusing on the right things.
>
> **[4:02](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=242)** Go through an exercise to determine how attackers might compromise or exploit an application that you're trying to build, and then use those conversations to determine what you could build into the app that can thwart those attacks.
>
> **[4:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=257)** Leverage reference architectures.
>
> **[4:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=260)** If someone has already figured out how to build a secure app, especially in cloud-native services like AWS, [[Microsoft Azure|Azure]], and [[Google Cloud Platform (GCP)|Google Cloud]], then use their documentation to accelerate your efforts.
>
> **[4:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=273)** Document secure [[Design Patterns]].
>
> **[4:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=276)** If you've decided that you should never put the user ID in the URL string, write it down so that everyone on the team knows.
>
> **[4:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=284)** Define misuse and abuse cases, revisit your threat modeling conversations, and build test cases around them to make sure that your secure design can stand up to simulated attacks.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=297)** And above all, use a software maturity model to help you understand how to measure your efforts and improve them over time.
>
> **[5:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=307)** Regarding maturity models, the two that I recommend you put at the top of your list are the OWASP Software Assurance Maturity Model, or SAMM, and the Synopsis Building Security In Maturity Model, or BSIMM.
>
> **[5:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a4-insecure-design?u=76281980&t=321)** I covered these two models in the video on manual versus automated testing, and they're definitely worth digging into if you haven't done so already.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Threat Modeling]] (2), [[Cybersecurity]] (1), [[Privacy]] (1), [[Software Development]] (1)
> **Env Vars:** owasp (3), sbom (2), cisa (1), gdpr (1), sdlc (1)
> **Definitions:** is a  (2), known as (1), in other words (1)
> **CLI Commands:** aws (1), make (1)
> **Analogies:** for example (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [A5: Security misconfiguration](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=0)** - [Instructor] The fifth set of risks in the [[OWASP]] top 10 are security misconfiguration flaws.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=7)** Simply put, this category of web application risks is all about insecure or default configurations.
>
> **[0:15](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=15)** Securing a web app requires much more than just knowing how to securely code that application.
>
> **[0:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=21)** It also requires knowledge of how to securely deploy and maintain both the application and the application infrastructure.
>
> **[0:30](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=30)** You've probably seen news stories on one of the multiple data breaches related to open [[Cloud Storage]] weaknesses.
>
> **[0:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=38)** Apps that are configured to use cloud storage need to take into consideration how they're going to manage access to that storage.
>
> **[0:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=47)** While verbose error messages are great for troubleshooting, they're also great for attackers who are profiling your apps.
>
> **[0:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=55)** If an attacker can force an application to spit out an error message that contains a stack trace, or details about a web server in the internal network, then the attacker now has an advantage when it comes to designing attacks against that app, and both patch management and general IT hygiene are crucial to [[Application Security]].
>
> **[1:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=78)** You need to be sure that you're applying patches and upgrades that address publicly disclosed security flaws.
>
> **[1:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=85)** This applies to every component, including the operating system, frameworks and libraries that you've built into custom applications, as well as any commercial applications that are part of your application portfolio.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=100)** Vulnerability research has increased significantly in recent years.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=105)** Bug bounty aggregators like Bugcrowd and HackerOne provide independent security researchers with a way to make a little extra money from responsible disclosure, and that same research extends into infrastructure as well.
>
> **[2:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=121)** Even if you were secure yesterday, a vulnerability might be disclosed tomorrow that draws attackers to your application like blood in the water attracts sharks.
>
> **[2:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=132)** Another way these flaws appear is through infrastructure changes.
>
> **[2:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=137)** If the admins upgrade the operating system or if they deploy a new version of the web server software, it's likely they'll also be deploying new versions of configuration files.
>
> **[2:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=149)** It's also likely that some of the default installation artifacts, things like README files and status pages will be deployed as well.
>
> **[2:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=158)** You need to make sure someone is watching out for those changes.
>
> **[2:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=162)** Likewise, changes to the application itself could result in new security misconfiguration exposures.
>
> **[2:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=170)** If your development team builds a new library into the app or if they introduce an app built on a framework that's new to the organization, then those changes are going to come with a need to review the corresponding security configurations.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=187)** The potential impact of security misconfigurations can vary from minor to major.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=194)** Yes, stack traces and web server information might give an attacker in advantage.
>
> **[3:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=200)** If you look closer at those findings though, you might just realize that the advantage is relatively insignificant.
>
> **[3:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=207)** You should be more concerned with directory permissions that allow an unauthorized outsider to browse unprotected directories on internal servers.
>
> **[3:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=217)** That's a misconfiguration that could lead to a data breach.
>
> **[3:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=221)** If you find an exposure that includes world readable config files that include database credentials, something like the dreaded [[PHP]] info page with a [[MySQL]] database running on the backend, then you have a much bigger issue.
>
> **[3:56](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=236)** This exposure of configuration files puts you at risk of a complete system compromise.
>
> **[4:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=243)** You can use web application vulnerability scanners to discover most of the vulnerabilities in the OWASP top 10 list, but it's been my experience that scanners really shine when it comes to identifying security misconfigurations.
>
> **[4:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=258)** That's because these types of vulnerabilities tend to be signature based, and not heuristics based.
>
> **[4:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=265)** The presence of a critical security patch is a binary question, yes or no, true or false, you don't have to test hundreds of possible input combinations to determine whether a patch is missing or whether a particular component is multiple versions behind.
>
> **[4:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=282)** You just need to do one check, one.
>
> **[4:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=286)** In addition to running your scans, this is one area of your dynamic testing where you should intentionally try to trigger errors.
>
> **[4:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=295)** If you can get the app to respond with an HTTP 500 error, for example, then you'll be able to determine right away if the app's logging features are appropriately configured.
>
> **[5:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=306)** Verbose error handling is okay in internal, non-production instances of your app, but they should be restricted when you migrate to production.
>
> **[5:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=316)** Documented and repeatable hardening procedures are a must.
>
> **[5:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=320)** You should refer to these procedures pre-deployment and you should make sure they're considered as part of your change control process.
>
> **[5:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=328)** I know I sound like a broken record here, but it bears repeating, if you want everyone in the organization to know what they're expected to do, you need to write it down.
>
> **[5:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=339)** If there are unnecessary components enabled anywhere in your application infrastructure, get rid of them.
>
> **[5:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=345)** Turn them off, and you don't need to worry about anyone exploiting them.
>
> **[5:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=350)** Carefully review your cloud storage permissions.
>
> **[5:53](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=353)** Restrict who can read to and write from that storage, either by source IP or by user account, and remember, denial all first and then start granting access.
>
> **[6:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=366)** From an overall architecture standpoint, seek out opportunities to implement segmentation and containerization.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=374)** If you take a defensive approach to building out your environment, you increase the likelihood of containing a threat before an attacker finds a security misconfiguration that slipped through the cracks.
>
> **[6:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=387)** In section 4.2 of the OWASP Web [[Security Testing]] Guide, you'll find 11 tests designed to help you identify security misconfiguration weaknesses.
>
> **[6:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=398)** You should start here.
>
> **[6:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=400)** Regarding logging and monitoring controls, I wanted to share a non-OWASP cheat sheet with you, one that I've been using for years.
>
> **[6:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=408)** Lenny Zeltser, a well-known information security professional maintains a critical log review checklist for security incidents cheat sheet on his website, [zeltser.com](https://zeltser.com).
>
> **[7:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=420)** If you're unsure of where to start with your logging and monitoring conversations, this resource is a goldmine.
>
> **[7:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=428)** In the event of a security incident, your security team is going to need these logs.
>
> **[7:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=433)** Show them to everyone you speak with and ask when the security team comes knocking, "Are we going to be able to produce these logs for them?"
>
> **[7:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a5-security-misconfiguration?u=76281980&t=441)** When the answer is, "Absolutely," then you know you're ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Cloud Storage]] (3), [[Application Security]] (1), [[PHP]] (1), [[MySQL]] (1)
> **CLI Commands:** make (3), find (2), php (1), mysql (1)
> **Env Vars:** owasp (4), readme (1), php (1), http (1)
> **Definitions:** is a  (2)
> **URLs:** [zeltser.com](https://zeltser.com) (1)
> **Versions:** 4.2 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [A6: Vulnerable and outdated components](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=0)** - [Instructor] The six set of risks in the [[OWASP]] top 10 list are flaws related to using components with known vulnerabilities.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=9)** This category of flaws is very closely related to security misconfigurations, but with a twist.
>
> **[0:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=16)** While security misconfigurations focus on applying the right security settings in your app and the app infrastructure, no amount of configuration changes to a specific component will protect your app if that component has a known vulnerability.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=31)** Another differentiator is that security configurations map to business risk appetite.
>
> **[0:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=38)** You might choose to apply a weaker security configuration for the sake of user convenience or because you're using another technology that won't work if you apply the tighter security configuration.
>
> **[0:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=50)** Fixing a vulnerable component could require much more effort and come at a higher cost.
>
> **[0:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=57)** Applications can easily grow to become complex ecosystems of custom code, intermingled with third-party libraries, modules, and frameworks.
>
> **[1:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=68)** As this complexity increases, it becomes more and more challenging to keep track of those components.
>
> **[1:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=76)** Without an inventory, you're going to have a tough time determining whether your app is at risk.
>
> **[1:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=81)** One of the primary reasons that app developers integrate these third-party components is that it often provides a tried and true solution to a problem they've been trying to solve.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=93)** What's better, they can implement that solution immediately instead of spending weeks trying to figure it out on their own.
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=101)** As a result, they might implement a component without an in-depth knowledge of how it was developed, how it was tested, or what vulnerabilities they might be introducing to their own app.
>
> **[1:53](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=113)** Remember Drupalgeddon?
>
> **[1:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=115)** Back in 2014, a vulnerability in [[Drupal]] was publicly disclosed, one that immediately put thousands of web apps using that [[Content Management]] framework at risk of compromise.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=129)** Four years later, another Drupal vulnerability was disclosed, sending everyone back into fire-drill mode.
>
> **[2:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=136)** The original Drupalgeddon vulnerability was an example of a worst-case scenario.
>
> **[2:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=141)** Organizations couldn't just disable Drupal and replace it overnight.
>
> **[2:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=146)** Their web apps could not function without Drupal, so they had to ride out the storm.
>
> **[2:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=152)** Some fared better than others, but everyone learned just how damaging a component with a known vulnerability could be.
>
> **[2:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=159)** And neither Drupalgeddon nor Drupalgeddon2 hold a candle to Log4Shell, the vulnerability in Apache Log4j that enabled attackers to remotely execute their own code on internal networks all over the world.
>
> **[2:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=175)** It's also likely that there are thousands of components with minor vulnerabilities that haven't even been discovered yet, vulnerabilities that will not have a measurable impact on your app.
>
> **[3:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=186)** The business impact of these vulnerabilities will vary based on both the technical severity and the application's purpose.
>
> **[3:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=194)** But it's important that you have all the information you need to make an informed decision about remediation recommendations.
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=203)** Similar to testing for security misconfigurations, testing for vulnerable and outdated components is a piece of cake for automated vulnerability scanners.
>
> **[3:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=213)** If your web app is using an older version of Log4j, for example, a version that's vulnerable to Log4Shell, then your vulnerability scanner is going to light up as soon as it finds that version flag.
>
> **[3:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=225)** Be careful, though, scanners can get tripped up with customized banners.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=230)** If you're using a scanner that's looking for a specific number in a specific banner, and your dev team manually updated that banner to hide that version information, then it's possible your scanner will miss the fact that you're using a vulnerable component.
>
> **[4:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=246)** Best-case scenario, your scanner will flag that finding as a potential vulnerability, instructing you to manually confirm the finding since there isn't enough detail for the automated scan to be 100% certain.
>
> **[4:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=261)** If you're relying on OSINT instead of automated scans, you can use a web proxy to capture all your HTTP traffic while you browse that site.
>
> **[4:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=272)** Then you can crosscheck any component version information you find with publicly available security bulletins for that same technology.
>
> **[4:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=282)** The best way to protect your apps from these risks is to remove everything you don't need.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=288)** This streamlining activity comes with both security benefits and operational benefits, it's a win-win solution.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=297)** When you've whittled that list down to the components that you absolutely need to keep in your app, then it's time to take inventory.
>
> **[5:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=305)** We call that inventory, these software bill of materials, the SBOM.
>
> **[5:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=310)** At a minimum, you should document each component's name, use case, version, and where you found it.
>
> **[5:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=319)** You'll need these four bits of information as you shift into maintenance mode.
>
> **[5:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=323)** Make sure your developers are only using known and trusted components, ones from reliable sources.
>
> **[5:31](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=331)** If those components are digitally signed, even better.
>
> **[5:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=334)** That provides you with a higher level of assurance that the components are legitimate and not compromised.
>
> **[5:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=342)** Finally, put a process in place to monitor both development and support activity around these components.
>
> **[5:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=349)** If an open-source project goes dormant, if there are no active contributors to the project for a noticeable length of time, then the likelihood of security patches being developed for those components goes way down.
>
> **[6:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=363)** Two resources you can use to help you identify and track these risks are the OWASP Dependency-Check tool and the Common Vulnerabilities and Exposures database.
>
> **[6:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=374)** Dependency-Check is a software composition analysis tool.
>
> **[6:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=378)** This scours both [[Java]] and .NET source code for components with known, publicly disclosed vulnerability.
>
> **[6:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=385)** This tool is available as a command line utility, as an Ant task, a plugin for Maven, [[Gradle]], [[Jenkins]].
>
> **[6:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=393)** It's even available as a Mac Homebrew install.
>
> **[6:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=397)** It can also be integrated into SonarQube, a source code quality tool that I covered in my [[Static [[Application Security]] Testing]] course.
>
> **[6:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=406)** The CVE database hosted by MITRE is an online searchable database of publicly disclosed vulnerabilities.
>
> **[6:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a6-vulnerable-and-outdated-components?u=76281980&t=414)** If you're not ready to automate your test using Dependency-Check, or if you're using a programming language other than Java or .Net, you can still access that information using the CVE search engine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Drupal]] (4), [[OWASP]] (2), [[Java]] (2), [[Content Management]] (1), [[Gradle]] (1)
> **Env Vars:** owasp (2), cve (2), osint (1), http (1), sbom (1)
> **CLI Commands:** make (2), apache (1), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** source code (2)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** you'll need (1), install (1)
> **Tools:** command line (1)

#### [A7: Identification and authentication failures](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=0)** - [Instructor] The seventh set of risks in the [[OWASP]] top 10 list are identification and authentication failures.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=7)** If an attacker can find a way around the login screen and start interacting with the application, or if you can't trust that the person using the app is the person they claim to be, then the application is vulnerable to these flaws.
>
> **[0:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=23)** With all the data breaches in recent years, a lot of valid usernames and passwords have ended up on the dark web.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=31)** It doesn't take a lot of technical skill for an attacker to download one of these lists and start logging into your application with valid user accounts that belong to somebody else.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=41)** Default passwords are even worse.
>
> **[0:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=45)** You don't believe me?
>
> **[0:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=46)** [[Google]] for the admin guide for some of the older technology on your network, tech with an administrative web interface, and see if there's a default admin password combo listed in that guide.
>
> **[1:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=60)** Even if the attacker doesn't have a valid set of credentials, there are several brute-force attack tools that will try different combinations until they get one right.
>
> **[1:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=70)** And attackers who can identify and reuse unexpired session [[Tokens]] can often interact with an application just like a traditional authenticated user.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=82)** One of the reasons identification and authentication failures occur in web applications, is that secure identity and access management controls weren't discussed at the beginning of the project.
>
> **[1:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=94)** How strong do user passwords need to be?
>
> **[1:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=97)** Will the application use password-less authentication?
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=101)** Do users need a multifactor authentication token to access the app?
>
> **[1:46](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=106)** Have you prohibited weak or default passwords from being used at all?
>
> **[1:51](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=111)** These are just a few questions you should be asking about identity and access management prior to building your web application.
>
> **[2:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=120)** Likewise, weak session management controls contribute to these same flaws.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=126)** Have you built in controls to disable an account if the user fails to log in too many times in a row?
>
> **[2:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=132)** What about when a user's session expires?
>
> **[2:15](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=135)** Can users log into the application at the same time from different devices?
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=140)** Understanding what a normal user session looks like will help you understand where to place these guardrails.
>
> **[2:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=148)** Depending on what your application does, the impact of identification and authentication failures can vary from a minor nuisance to a major breach.
>
> **[2:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=159)** An application that lets you borrow library books online, might expose a user's borrowing history or allow someone to check out books without that user's knowledge.
>
> **[2:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=169)** While that does violate the user's [[Privacy]], it might not be a publicly-reportable data breach, depending on where the library is and what laws apply to that location.
>
> **[3:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=180)** But an online commercial-[[Banking]] application, one that lets an attacker log in with default credentials and wire millions of dollars to offshore accounts, that's going to cause a bigger disruption.
>
> **[3:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=193)** And when an application is used for infrastructure administration, then a compromise of that app could enable an attacker to take over that infrastructure or knock it offline.
>
> **[3:25](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=205)** If an application has a login screen, then someone decided the data in that application was worth protecting.
>
> **[3:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=212)** By understanding the type of data stored within the application you can make a more informed decision about how strict the authentication controls need to be.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=224)** Session management is a key consideration when it comes to validating identification and authentication controls.
>
> **[3:52](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=232)** In order to test session management controls, you need to be able to establish a session in the first place.
>
> **[3:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=238)** Start by pinpointing how you log in to the target application and how you log out.
>
> **[4:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=245)** Once you log into an application, you can examine the cookies created on your test machine.
>
> **[4:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=251)** If manually editing your cookies gives you the ability to steal another user's session, then you've got a finding on your hands.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=259)** You should also look for session variables within the URL.
>
> **[4:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=263)** If the session number is predictable or if the current session value can be reused, then an attacker could potentially steal that variable via an adversary in the middle attack in order to hijack the session belonging to an authenticated user.
>
> **[4:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=279)** In the OWASP Web [[Security Testing]] Guide, section 4.6 provides nine unique session management tests that you should perform.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=288)** Multifactor authentication is one of the most effective ways to counter identification and authentication failures.
>
> **[4:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=295)** Even if an attacker has a valid username and password, that information is useless without that additional authentication factor.
>
> **[5:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=305)** Talk to your developers about how they prohibit weak, default, and known-compromised passwords.
>
> **[5:12](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=312)** There's a balance to be struck between a reasonable password and one that's going to be too complex for your users to remember, but permitting single character passwords is a terrible, terrible idea.
>
> **[5:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=326)** And yes, this does happen.
>
> **[5:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=328)** I've seen it.
>
> **[5:30](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=330)** Make sure that you've implemented lockouts for failed logins, whether you do this at the account level within the app, or at the source IP level in an upstream web-application firewall.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=341)** Better yet, do both.
>
> **[5:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=344)** Use thoughtful password reset questions.
>
> **[5:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=347)** In short, if you can find the answer to someone else's question with a few web searches and some time on their social media profiles, then you shouldn't tie those questions to password resets.
>
> **[6:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=360)** Finally, focus on server-side session management controls.
>
> **[6:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=365)** Attackers can manipulate client-side session controls with relative ease, but server-side controls are much, much harder to compromise.
>
> **[6:16](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=376)** OWASP maintains four cheat sheets that can help you address identification and authentication failures.
>
> **[6:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=382)** One for authentication, one for credential stuffing prevention, one for managing password resets, and another for session management best practices.
>
> **[6:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=394)** With the OWASP Web Security Testing Guide, there are two sections that include tests for identification and authentication failures.
>
> **[6:43](https://www.linkedin.com/learning/dynamic-application-security-testing/a7-identification-and-authentication-failures?u=76281980&t=403)** In addition to the session management test I mentioned earlier, section 4.3 contains five items for testing identity management controls, where section 4.4 contains 10 items for testing authentication controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Security Testing]] (2), [[Google]] (1), [[Tokens]] (1), [[Privacy]] (1)
> **Env Vars:** owasp (4), url (1)
> **CLI Commands:** find (2), make (2)
> **Versions:** 4.6 (1), 4.3 (1), 4.4 (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [A8: Software and data integrity failures](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=0)** - [Instructor] The eighth set of risks in the [[OWASP]] Top 10 List are software and [[Data Integrity]] failures.
>
> **[0:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=8)** The notion of software and data integrity is based on assumed trust.
>
> **[0:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=14)** The software trust that the data we input is what's expected, and we trust that all of the software components are going to do what they were designed to do.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=24)** When that trust is misplaced, we find ourselves facing a security incident or even a data breach.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=32)** While conversations around software integrity often focus on the code, don't overlook the infrastructure.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=39)** If any component of the system can't be trusted, then the integrity of the entire system is at risk.
>
> **[0:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=47)** Even if your developers build and deploy a trusted instance of an application, the integrity of that app could be impacted by each and every update to the app, whether the update is applied automatically or manually.
>
> **[1:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=63)** This risk is an evolution of the insecure deserialization risk of the 2017 Top 10 List.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=69)** Since vulnerable, encoded, or serialized objects and data are, at their core, software and data integrity flaws.
>
> **[1:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=79)** If your developers don't add integrity validation mechanisms to an app, then the likelihood increases that the app may be exposed to these risks.
>
> **[1:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=89)** When the application applies an update or pulls a new version of a library from an external repository, how do you know that the update or library that gets installed is trustworthy?
>
> **[1:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=101)** In August of 2022, a high school student uploaded ransomware to the [[Python (Programming Language)|Python]] PyPI library.
>
> **[1:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=109)** That malicious code was downloaded hundreds of times before anyone thought to check the integrity of the updated library.
>
> **[1:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=118)** The same integrity controls apply to your internal CI/CD pipelines as well.
>
> **[2:04](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=124)** If you aren't restricting or auditing changes to that pipeline, how do you know if you can trust the code that's processed and deployed?
>
> **[2:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=133)** Although this risk is near the bottom of the Top 10 List, the severity of these flaws should not be underestimated.
>
> **[2:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=140)** We've seen publicly disclosed security incidents and data breaches that have resulted from software and data integrity failures, failures that enabled attackers to run their own malicious code on systems all around the world.
>
> **[2:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=154)** One of the most public incidents to date was the SolarWinds attack of 2022.
>
> **[2:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=160)** In that attack, criminals were able to deploy malware to SolarWinds Orion software.
>
> **[2:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=167)** Orion is used for IT monitoring and management by thousands of enterprises and government agencies.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=174)** In the end, over 30,000 organizations were breached, all because the attackers were able to convince targeted systems that they could trust this malicious update.
>
> **[3:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=188)** In order to find these flaws in your own code, start by focusing on where you're validating digital signatures.
>
> **[3:15](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=195)** If that validation isn't currently part of your code, it should be.
>
> **[3:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=200)** But which signatures should you be validating?
>
> **[3:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=203)** That SBOM that I keep mentioning, the software bill of materials, contains a list of most of the components that could potentially be in scope for this validation.
>
> **[3:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=213)** Start there.
>
> **[3:35](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=215)** Also, take a look at your SDLC documentation, paying attention to your [[Code Review]] procedures and your change control procedures in particular.
>
> **[3:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=225)** Code reviews enable you to detect potentially untrusted code elements, while change control procedures can help you prevent insecure software or infrastructure from being deployed to production.
>
> **[3:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=238)** And check your CI/CD pipeline controls.
>
> **[4:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=241)** Look for access control weaknesses and [[Configuration Management]] weaknesses.
>
> **[4:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=246)** Again, if you haven't built digital signature checks into your code, now's the time to start.
>
> **[4:13](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=253)** Validating digital signatures before assuming trust is a quick and automated way to reduce your exposure to these risks.
>
> **[4:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=262)** You should also consider implementing a procedure for vetting third party libraries.
>
> **[4:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=267)** If you've got an SBOM that lists all the libraries your developers depend on, you could pull down those libraries and check them for vulnerabilities or malicious code.
>
> **[4:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=277)** Assuming they pass with flying colors, you could then publish those libraries to a trusted internal repo, one that you control, and only let your devs pull from that repo.
>
> **[4:49](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=289)** Then I can't stress enough the importance of good SDLC documentation.
>
> **[4:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=295)** If you want the folks you're working with to know what's expected of them, you've got it.
>
> **[5:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=301)** You've got to write it down.
>
> **[5:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=303)** Two resources that can help you get ahead of software and data integrity failures are CycloneDX and Dependency-Check, both of which are OWASP projects.
>
> **[5:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=314)** CycloneDX is a bill of materials standard that provides guidance around building bills of material for software, for [[SaaS|software as a service]], for operations, and for manufacturing.
>
> **[5:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=327)** It also outlines a security advisory format for publishing vulnerability and exploitability details, and it includes a library of not quite 200 tools to help automate all of this activity.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a8-software-and-data-integrity-failures?u=76281980&t=341)** Dependency Check is a software composition analysis tool that automatically puts together a list of all your software libraries, and then checks public vulnerability [[Databases]] to help you determine if those libraries are vulnerable to attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (5), [[OWASP]] (2), [[Python (Programming Language)|Python]] (1), [[Code Review]] (1), [[Configuration Management]] (1)
> **Env Vars:** owasp (2), sbom (2), sdlc (2)
> **CLI Commands:** find (2), cd (2), python (1)
> **Definitions:** is a  (3), is an  (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [A9: Security Logging and monitoring failures](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=0)** - [Instructor] The ninth set of risks in the [[OWASP]] top 10 list are Security Logging and Monitoring Failures.
>
> **[0:07](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=7)** As developers are building out their applications, their initial focus is on just getting everything to work as expected by the go live date.
>
> **[0:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=17)** If you are fortunate enough to be working with the dev team who is considering the long-term support and operation of the app, then chances are they've built in some basic logging functionality to help them troubleshoot the app after it goes live.
>
> **[0:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=32)** But what about security logs?
>
> **[0:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=34)** If your developers don't have security training and if security logging requirements aren't built into the project, then chances are the security logging and monitoring controls will be deficient at best and entirely absent at worst.
>
> **[0:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=50)** As OWASP points out, this is exactly what attackers are hoping for.
>
> **[0:55](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=55)** If they can poke and prod at your apps without setting off any alarms, then they're more likely to be able to find a security hole and eventually compromise the app.
>
> **[1:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=65)** With proper monitoring and alerting controls in place, you significantly increase your chances of catching attackers in the act.
>
> **[1:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=74)** One of the reasons flaws like these end up in web applications is that developers may not be receiving the training they need in order to understand these risks.
>
> **[1:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=84)** You are taking this course so that you can get ahead of these risks, so that you can improve security throughout the entire SDLC.
>
> **[1:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=92)** But how many other people at your organization do you wish were also taking this same course?
>
> **[1:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=98)** That lack of training leads to a lack of awareness, a lack of context, and a lack of understanding.
>
> **[1:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=105)** Without someone raising the warning flag and insisting that these controls be built in from day one, it's unreasonable to expect that it will happen organically.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=116)** The lack of security documentation only makes things worse.
>
> **[2:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=121)** If you don't have a logging and monitoring policy along with supporting standards, then you're putting your developers at a disadvantage.
>
> **[2:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=130)** The severity of this risk is going to vary based on the criticality of your app as well as whether it processes restricted data.
>
> **[2:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=138)** But consider a different perspective on this risk.
>
> **[2:22](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=142)** Ask yourself about the effect of logging and monitoring controls during the different phases of an actual attack.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=150)** When someone with malicious intent targets one of your web apps, that person is going to start with reconnaissance activity.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=157)** They're going to launch some lightweight scans and perform some non-intrusive testing to determine what your app does and what technologies you have in play.
>
> **[2:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=167)** If you can catch them in this phase, then the impact to your organization is negligible.
>
> **[2:53](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=173)** If the attacker eludes your detection during the recon phase and starts trying to bypass the app security controls, then the potential impact goes up.
>
> **[3:04](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=184)** An injection attack might corrupt your backend database.
>
> **[3:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=188)** A brute force attack might cause performance issues.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=191)** If you catch them in this phase then some damage might be done but you can contain the worst of it.
>
> **[3:18](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=198)** If you're logging and monitoring controls fail, and an attacker goes from recon to exploitation to full long compromise, now things are bad.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=209)** You could be looking at a data breach, at a system takeover, or at a production down incident very costly and very disruptive to your end users.
>
> **[3:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=219)** It's up to you to choose the level of logging and monitoring that's right for your app.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=224)** But the better these controls, the better your chances of avoiding an incident entirely.
>
> **[3:50](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=230)** Security logging and monitoring failures are difficult to detect in black box testing scenarios.
>
> **[3:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=237)** By the very nature of this weakness, you need internal knowledge regarding which events are being logged and which ones aren't in order to confirm whether this is a concern for your web application.
>
> **[4:10](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=250)** That's why you'll want to conduct either a white box test or a gray box test, looping in the team that manages the logging and monitoring system.
>
> **[4:19](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=259)** Ideally, you'll conduct this test as a purple team, where your red team attackers inform your blue team defenders when each test begins, when it ends, and what it entails.
>
> **[4:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=272)** Once each test is complete, the blue team should be able to confirm or deny that the logging and monitoring controls detected the attack activity.
>
> **[4:42](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=282)** More importantly, the blue team needs to compare the logs generated to any internal logging and monitoring standards and confirm that the logs were not only generated, but that they also contain everything that they're supposed to contain.
>
> **[4:58](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=298)** In order to address these risks, work with your developers to enable logging and monitoring where it makes the most sense.
>
> **[5:06](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=306)** High value targets include login activity, both successes and failures, as well as access control failures, and input validation failures.
>
> **[5:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=317)** Any one of these could be an indicator of threat activity.
>
> **[5:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=321)** Centralize your application log data to an internal server.
>
> **[5:26](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=326)** Not only does this help prevent an attacker from modifying those logs, but it also gives your security team even more data for correlation purposes.
>
> **[5:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=336)** Make sure you're enforcing some sort of integrity controls on that log data as well.
>
> **[5:41](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=341)** That way you can determine if someone was able to skirt your preventative controls and make changes to the logs, changes like removing log entries or disabling logging mechanisms.
>
> **[5:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=354)** And work with your security team to determine whether logs and alerts are being reviewed and acted upon in a reasonable amount of time.
>
> **[6:03](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=363)** Having all this log data means nothing unless you actually use it.
>
> **[6:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=369)** I already shared Lenny Zeltser's cheat sheets in the Security Misconfiguration module, but those cheat sheets are worth revisiting when you start addressing logging and monitoring risks.
>
> **[6:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=380)** That said, there are a couple of additional resources you'll also want to use.
>
> **[6:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=384)** [[NIST]] Special Publication 800-61 Revision 2, their Computer Security Incident Handling Guide covers security incident handling in detail.
>
> **[6:36](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=396)** And when you're ready for the big leagues, check out the Intelligence Community Standard 500-27 which covers the collection and sharing of audit data.
>
> **[6:47](https://www.linkedin.com/learning/dynamic-application-security-testing/a9-security-logging-and-monitoring-failures?u=76281980&t=407)** If you need more specific guidance than this standard has to offer, I'd be really surprised.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[NIST]] (1)
> **Env Vars:** owasp (2), sdlc (1), nist (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** troubleshoot (1), warning (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [A10: Server-side request forgery (SSRF)](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=0)** - [Teacher] The final set of risks in the [[OWASP]] top 10 are server side request forgery or SSRF flaws.
>
> **[0:09](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=9)** These flaws enable attackers to convince internal infrastructure to access or abuse resources that they were never meant to expose externally.
>
> **[0:20](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=20)** SSRF flaws differ slightly from command injection attacks.
>
> **[0:24](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=24)** When exploiting a command injection flaw, an attacker tries to trick an internal system to perform an action on their behalf.
>
> **[0:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=33)** Something like listing the contents of a directory or adding a local user account.
>
> **[0:39](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=39)** When exploiting an SSRF flaw, the attacker tries to gain access to internal resources or to glean information about the target based on how that request is handled.
>
> **[0:51](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=51)** If an application assumes that every URL that processes can be trusted, then the likelihood of an SSRF flaw goes way up.
>
> **[1:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=60)** This brings us back to the concept of misuse and abuse cases.
>
> **[1:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=65)** An attacker can type anything they want into the URL field and as long as the developers aren't testing for unexpected or potentially malicious content in those URLs, attackers can attempt to discover and exploit SSRF vulnerabilities to their hearts content.
>
> **[1:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=83)** It's not unheard of for attackers to modify a URL string to browse directly to sensitive files on the server.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=93)** If your app is running on a [[Linux]] server, for example, then an attacker might attempt to access the Etsy password file.
>
> **[1:40](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=100)** That's the one with all the local user accounts in it.
>
> **[1:43](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=103)** They do that by putting the path to that file right in the URL, but extracting local files is nothing compared to remotely triggering a system command.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=114)** Again, this isn't command injection, it's a little sneakier.
>
> **[1:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=117)** An attacker might exploit an SSRF vulnerability to map the internal network collecting host names, IP addresses, and even a list of open ports.
>
> **[2:08](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=128)** Or they might tell an internal server to access a URL controlled by the attacker.
>
> **[2:14](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=134)** If successful, then attackers could possibly run their own malicious code on that internal server as a result, or they could even cause a denial of service condition on that box.
>
> **[2:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=147)** The big thing to look for when testing for SSRF flaws is URL validation.
>
> **[2:32](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=152)** Again, apps should not assume that every URL can be trusted as is.
>
> **[2:37](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=157)** You should also take a look at the app architecture to determine whether segmentation has been implemented.
>
> **[2:45](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=165)** If an SSRF flaw slips through the cracks, you can proactively minimize the exposure and the damage by limiting the internal network traffic to only those ports and services that are required for business use.
>
> **[3:00](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=180)** And with the ever-increasing adoption of [[Cloud Services]] the presence of defined and enforced [[Cloud Security]] configuration standards is a pretty big deal.
>
> **[3:11](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=191)** An oversight that leaves a [[Cloud Storage]] bucket overexposed results in an SSRF vulnerability that's exceedingly simple to exploit.
>
> **[3:21](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=201)** Unfortunately, we've seen some prominent data breaches in recent years for this very reason.
>
> **[3:27](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=207)** Input sanitation and validation are at the top of the remediation list for SSRF vulnerabilities.
>
> **[3:34](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=214)** As long as the app doesn't assume it can trust user supplied URLs, attackers are going to have a much harder time finding and exploiting SSRF vulnerabilities.
>
> **[3:44](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=224)** You should also consider disabling HTTP redirects.
>
> **[3:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=228)** Those redirects might be a convenient way to route users to the right location, but they can also be exploited by attackers to force one of your servers to access a malicious URL that the attacker controls.
>
> **[4:01](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=241)** One other control you should consider is allow lists.
>
> **[4:05](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=245)** If you know what normal app traffic looks like, you could put rules in place that say, anything outside of that known good pattern should fail.
>
> **[4:17](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=257)** OWASP strongly encourages a allow list over deny list.
>
> **[4:23](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=263)** Since attackers have multiple ways to circumvent deny list controls.
>
> **[4:28](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=268)** The OWASP Server Side Request Forgery Prevention Cheat Sheet is a terrific resource to build into your developer security training.
>
> **[4:38](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=278)** It provides some clear examples of these types of attacks including a reminder that protocols other than HTTP are just as vulnerable.
>
> **[4:48](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=288)** For a more detailed analysis of SSRF attack prevention you could jump straight to the SSRF Bible from the Wallarm research team.
>
> **[4:57](https://www.linkedin.com/learning/dynamic-application-security-testing/a10-server-side-request-forgery-ssrf?u=76281980&t=297)** This 23 page PDF reads like an expanded version of that OWASP cheat sheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Linux]] (1), [[Cloud Services]] (1), [[Cloud Security]] (1), [[Cloud Storage]] (1)
> **Env Vars:** ssrf (13), url (8), owasp (4), http (2), pdf (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [teacher] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=0)** - [Instructor] Thanks so much for taking the time to learn about dynamic [[Application Security]] testing.
>
> **[0:06](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=6)** If I've done a decent job as your instructor, you should be able to begin applying what you've learned in this course right away.
>
> **[0:13](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=13)** There's only so much I can cover in the time allocated for a course like this one, but I wouldn't be doing right by you unless I shared additional resources that might help you out after we wrap up here.
>
> **[0:26](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=26)** Make sure to check out the resource handout that accompanies this course.
>
> **[0:31](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=31)** Now that you're equipped with all of this application security testing knowledge, what's next?
>
> **[0:37](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=37)** You should put it into practice, that's what.
>
> **[0:41](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=41)** I cannot emphasize enough how important it is that you build out and maintain your lab environment.
>
> **[0:49](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=49)** Whether it's a series of [[Virtual Machines]] on your laptop, a collection of VMs on a dedicated segment in your [[Microsoft Office|office]], or a cloud tenant that you use specifically for training and testing, it's crucial that you have somewhere you can go to keep your skills sharp.
>
> **[1:06](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=66)** If you don't have a lab, build one.
>
> **[1:09](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=69)** The lab doesn't have to be complicated.
>
> **[1:12](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=72)** The lab for this course consists of a couple of [[SaaS|software as a service]] applications and maybe, maybe one virtual machine.
>
> **[1:20](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=80)** That's it.
>
> **[1:22](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=82)** Dig deeper into what you can do with the tools we covered in this course.
>
> **[1:27](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=87)** Better yet, download similar tools in this space so you can compare and contrast.
>
> **[1:33](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=93)** Sign up for trials of enterprise class tools so you can evaluate their functionality against the free and open-source tools installed in your lab.
>
> **[1:44](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=104)** As you get more hands-on experience performing application security testing, chances are that you'll find there are some parts you love while others not so much.
>
> **[1:54](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=114)** That's okay.
>
> **[1:56](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=116)** The important thing is that you recognize which areas of application security really captivate you.
>
> **[2:03](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=123)** When that happens, don't shy away from it.
>
> **[2:06](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=126)** Run toward it instead.
>
> **[2:09](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=129)** We have a critical need in this industry for professionals who possess both the interest and the aptitude to do the work that needs to be done, and if that's you, embrace it.
>
> **[2:21](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=141)** Go after it.
>
> **[2:23](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=143)** If you already work in a corporate environment, the best way for you to apply this knowledge is to help with existing projects.
>
> **[2:30](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=150)** Ask around for opportunities that line up with the key testing activities we covered during this course.
>
> **[2:38](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=158)** If another group or team is already performing dynamic application security testing internally, ask if you can shadow them.
>
> **[2:46](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=166)** If any of these tests are being overlooked, volunteer to do the first one.
>
> **[2:52](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=172)** Take your notes from this course.
>
> **[2:54](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=174)** Build your action plan and execute.
>
> **[2:58](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=178)** If you're a student, internships are one way to go and mentorships are another.
>
> **[3:03](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=183)** Approach your academic advisor and communicate your interest.
>
> **[3:07](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=187)** Set up a profile on [[LinkedIn]] and begin networking with local application security professionals.
>
> **[3:13](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=193)** If you ask enough people whether they might be interested in mentoring you, you may just be surprised at how many times you receive an absolutely in reply.
>
> **[3:25](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=205)** Most importantly, don't stop learning.
>
> **[3:29](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=209)** Keep practicing, keep studying, keep at it until you're doing what makes you happy.
>
> **[3:35](https://www.linkedin.com/learning/dynamic-application-security-testing/next-steps?u=76281980&t=215)** Thanks again for your time and good luck with your next round of dynamic application security tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (7), [[Virtual Machines]] (1), [[Microsoft Office|Office]] (1), [[SaaS|Software as a service]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we covered (2)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jerod Brennen]]

## Skills Covered

- Application Security Assessments
- Security Testing

## Path Context

### In [[Explore a Career in Application Security]]
← [[Security Testing Essential Training (2022)]] | **5 of 7** | [[Static Application Security Testing]] →

## Appears In

- [[Explore a Career in Application Security]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging AI for Security Testing]] — Security Testing
- [[DevSecOps- Automated Security Testing]] — Security Testing
- [[Static Application Security Testing]] — Security Testing
- [[Security Testing Essential Training (2022)]] — Security Testing
- [[AI Product Security- Testing, Validation, and Maintenance]] — Security Testing

---

[↑ Back to top](#)