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
  - '[[Get Ahead in DevSecOps]]'
prev_courses:
  - '[[DevSecOps- Automated Security Testing]]'
next_courses:
  - '[[Application Security in DevSecOps]]'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":3,"total":5,"prev":"DevSecOps- Automated Security Testing","next":"Application Security in DevSecOps"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/devsecops
  - skill/continuous-delivery-cd
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/DevSecOps-%20Building%20a%20Secure%20Continuous%20Delivery%20Pipeline.md)

![DevSecOps: Building a Secure Continuous Delivery Pipeline](https://media.licdn.com/dms/image/v2/C4E0DAQHRreYyiMwCMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669242306?e=2147483647&amp;v=beta&amp;t=gqBWb-8bD0XCnPS7WxUfT2TQ7Hdec59TcUVYUAY-7lA)

# DevSecOps: Building a Secure Continuous Delivery Pipeline

> Over the past several years, information security has struggled to keep up with the fast-paced DevOps movement. DevSecOps—an extension of DevOps—aims to remedy this by embracing security as an essential part of DevOps culture. This course examines this fresh take on DevOps, providing an overview of the practices and tools that can help you implement security across the entirety of the continuous i

> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline) | 1h 12m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. The DevSecOps Toolchain]]** (4 videos)
- **[[#2. Development Tools]]** (4 videos)
- **[[#3. Inherit Tools]]** (5 videos)
- **[[#4. Build Tools]]** (3 videos)
- **[[#5. Deploy Tools]]** (3 videos)
- **[[#6. Operation Tools]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Securing your CI/CD pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=0)** - [James] Do you want to continuously deliver software that's been tested for security vulnerabilities, is guaranteed to pass compliance audits, and is just overall more secure?
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=9)** If that sounds good to you, then this course is for you.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=13)** Hi, I'm James Wickett, and I'm the Head of Research at Signal Sciences.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=17)** I help software delivery teams defend web applications, microservices, and APIs in production from the real attacks they actually face.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=25)** The possibility of providing more secure software at a way faster rate than ever really excites me.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=32)** In this course, we survey the continuous delivery pipeline through the lens of security and break it up into five key stages, Develop, Inherit, Build, Deploy, and Operate.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=45)** In each of these stages, we'll look for practices and tools that can fit into a DevSecOps Toolchain approach and implement security across the entire breadth of the continuous delivery pipeline.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=56)** Don't worry if you don't have much experience as a developer or you feel you aren't enough of a security expert.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=62)** We'll show you what you need to know and give you the tools to get you started.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/securing-your-ci-cd-pipeline?u=76281980&t=66)** So, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), let (1)
> **Speakers:** - [james] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you'll want to have a basic understanding of how software is delivered in a DevOps or a DevSecOps context.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980&t=8)** In this course, we use Docker, Git, and work a lot on the command line.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980&t=12)** Since this course serves as an overview rather than a step-by-step walkthrough, you don't have to be a pro at this, however, some familiarity with these concepts will be helpful for you.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-you-should-know?u=76281980&t=22)** It would also help to be familiar with continuous integration and continuous delivery practices, but we'll cover the basics throughout this course.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), git (1)
> **Code Keywords:** this, (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. The DevSecOps Toolchain

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Traditional InfoSec is in crisis
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=0)** - [Instructor] To say that security has had a rocky relationship with developers, operations and really anyone else is an understatement.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=8)** To me, security's in crisis.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=11)** I say this because security has lost its identity and often doesn't seem relevant to the day-to-day business of an organization.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=18)** However, like many crisis situations, this can get better but before we dive into the remedy, DevSecOps, let's explore why security is at an inflection point in many organizations.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=32)** There are three major issues at play here.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=35)** The first issue is the 100:10:1 problem.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=39)** This represents the inequitable distribution of labor that has permeated IT for decades.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=45)** For every 100 developers in an organization, there are roughly 10 operations staff and usually just one security person.
>
> **[0:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=53)** Some organizations have a different ratio but you'll find this generally holds true.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=58)** This means that the crisis has precipitated by an orders of magnitude staffing problem.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=64)** Operations developers attempted to solve their part of this problem back in 2009 when DevOps was originally coined and the movement was realized but now it's security's turn.
>
> **[1:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=74)** Okay, the second issue is that security people are often seen as outsiders and not part of the teams delivering value.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=82)** This is in part due to the 100:10:1 problem but it's also due to different priorities.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=88)** Security follows more closely to PCI standards or security governance councils like ISC Squared CSSIP guidance rather than participate in their own company's goals.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=99)** If this sounds familiar to you, I'd recommend checking out the book The Phoenix Project.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=105)** The story follows a fictional company undergoing a DevOps transformation.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=109)** In it, one of the main characters is the head of IT security.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=114)** The story echoes the modern stereotype of security.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=117)** Security isn't part of the team or the business and security just sort of does their own thing.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=123)** The final issue is security's roots.
>
> **[2:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=126)** It was born out of the Waterfall methodology for software development.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=130)** Waterfall treats a project as a month's long series of linear tasks and security performs their tasks only at the very end.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=138)** And of course, they always find issues which leads to a tense and really expensive situation where the delivery date has to get pushed to fix security bugs.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=147)** To sum it all up, Steve Bellovin has a great quote in his book Thinking Security.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=152)** Companies are spending a great deal on security but we read of massive computer-related attacks.
>
> **[2:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=159)** Clearly something is wrong.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=161)** The root of the problem is twofold: we're protecting the wrong things and we're hurting productivity in the process.
>
> **[2:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=169)** This was written for security by one of our own and the problem is is that he's right.
>
> **[2:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=174)** So, what do we do?
>
> **[2:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=176)** Well, there's a better way and it's been rapidly adopted by companies of all sizes.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/traditional-infosec-is-in-crisis?u=76281980&t=181)** This approach is called DevSecOps.

> [!info]- Semantic Content
>
> **Env Vars:** pci (1), isc (1), cssip (1)
> **Definitions:** is an  (1), means that (1), is called (1)
> **CLI Commands:** find (2)
> **Ports:** :10 (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Introducing DevSecOps
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=0)** - [Instructor] Information security, as we know it, is struggling considerably to keep up with today's fast-paced DevOps world.
>
> **[0:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=7)** DevSecOps is the way to approach that problem differently, and bring security to the DevOps party.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=13)** To start, let's lay out a definition of DevSecOps.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=17)** DevSecOps is the extension of DevOps culture for the inclusion of security.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=22)** This has two major implications.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=25)** First, DevOps has seen a decade of growth and success in many software organizations.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=30)** So to really understand DevSecOps, it's important to understand DevOps.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=37)** If you're a student of software development, and haven't watched the DevOps Foundations courses here available in the library, then I recommend you do that.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=46)** In those courses, Ernest Mueller and I break down DevOps and its main areas of practice.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=51)** The second implication is that security must leave behind the old ways of thinking and embrace a new culture.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=59)** This means that instead of functioning as a blocker to innovation, or being an outsider, security has to adapt to being an integral part of software delivery efforts throughout the entire process, rather than just at the very end.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=73)** In fact, Sec is right there in the middle DevSecOps.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=78)** It's an appropriate representation of security's new role.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=82)** This new role functions as the role of enabler.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=86)** Security helps the development and delivery pipeline move faster, and enables overall throughput to the system, but in a manner that's safer.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=95)** A longtime SySo friend recently asked me for advice on how do I deal with DevOps?
>
> **[1:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=100)** And I told him one thing, never say no.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=104)** Find creative ways to say yes.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=107)** Security has to enable DevOps adoption and not impede it.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=111)** Now, the realist in you might have the same question I've been dealing with, how do I do that?
>
> **[1:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=118)** The primary way security changes is through the same path that operations forged when it moved into DevOps culture, by providing automation and instrumentation as much as possible to the development team.
>
> **[2:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=131)** Security can really take a page out of the DevOps playbook and automate compliance standards and audit tasks.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=138)** Many of the code scanners, penetration testing tools, and security tools can be automated.
>
> **[2:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=143)** Throughout the course, we'll show you how to do this across the entire pipeline.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=147)** Likewise, new tooling around monitoring and instrumentation can be added to a software delivery pipeline, especially in some of the often forgotten stages.
>
> **[2:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=157)** As we go throughout the course, I'll show you examples of how to do just this.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/introducing-devsecops?u=76281980&t=162)** In fact, the major goal of the course is to evaluate tools for a DevSecOps tool chain, which can be used inside a continuous delivery pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### The continuous delivery pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=0)** - [Instructor] Before we jump straight in to adding security into our pipeline, let's review the pipeline stages.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=6)** You'll hear people refer to this also as CI, continuous integration, or CD, continuous delivery, or sometimes jammed altogether as CICD pipeline.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=17)** These can all mean separate things, but we're conflating them all here, just as you'll probably experience in the industry.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=24)** If you're interested in a deeper look into the differences of these terms, as well as a deeper dive into the topics of continuous delivery and continuous integration, then I suggest checking out the course at DevOps Foundations: Continuous Delivery Continuous Integration.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=39)** It's available right here in the library.
>
> **[0:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=41)** In that course Ernest Mueller and I break down the topic with lots of hands-on examples.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=46)** For this course, we're going to split up the pipeline into five stages.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=51)** At your organization, a couple of these stages might be lumped into a single stage.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=55)** But for security tooling, it's particularly helpful to analyze these five stages separately.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=62)** These stages are develop, inherit, build, deploy and operate.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=69)** Let's take a moment to define each of these.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=72)** The develop stage is where the design and development of an application and its features happens.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=78)** This includes all the development practices like version control, sprint planning and unit testing.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=85)** Inherit is an often overlooked stage because it's the most invisible.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=89)** It's the stage where software dependencies get bundled and inherited in our own code and upstream.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=96)** The build stage is where the CI build system runs all the build steps, and does acceptance testing.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=103)** In this stage, all previous testing done on developer machines is verified here.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=108)** It's the source of truth, spelling out what tests have or haven't been performed.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=114)** The deploy stage takes the artifact from the build stage and moves our software from testing to where customers are able to use it for the first time.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=123)** Last, the operate stage is where the application is up and running in production.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=128)** Some might call this the runtime state of the application.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=132)** And this is the place where users interact with or consume the application.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=137)** Throughout each of these five stages, we'll take a look at security considerations and tools that can be implemented in our pipeline.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=144)** Once we put all of these tools together, we will have our toolchain.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/the-continuous-delivery-pipeline?u=76281980&t=148)** But before we get into the first stage of our pipeline, let's talk briefly about toolchains.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** cd (1)
> **Env Vars:** cicd (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Goals for a DevSecOps toolchain approach
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=0)** - [Instructor] This course is meant to help you build out a security toolchain that can work in a CI/CD pipeline.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=6)** We dealt this as a DevSecOps Toolchain approach.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=10)** Now one quick note.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=12)** There's an issue that you're going to run into.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=14)** The issue is that no two organizations are likely to have to have the same CI/CD maturity.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=20)** And virtually no organization is doing anything, much less CI/CD, the same way.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=25)** This means that as we talk through each stage of the pipeline, you'll need to evaluate whether the tools we're discussing would fit in to your specific pipeline.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=34)** Whatever toolchain you end up using within your organization, it's going to be unique.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=38)** That's okay, and really, that's to be expected.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=42)** It's also important to note that in some organizations, there is no pipeline.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=46)** And the security team is leading the charge for CI/CD.
>
> **[0:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=49)** And that's okay too.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=52)** You don't need a pipeline already established to use this course, but if that's your situation, try to find discrete steps and tools that you can fit together as you assemble the pipeline.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=62)** And check out that DevOps Foundation CI/CD course I mentioned earlier.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=66)** So, what are the goals as we evaluate building a DevSecOps toolchain?
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=71)** One goal to keep in mind is that a toolchain is a chain made up of individual tools.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=77)** You decide what tools you want in your toolchain, then you build it, modify it, and live with it.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=83)** Feel free to adjust as you go, it's your toolchain.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=87)** The real power of using a software toolchain is being able to change and meet demands at a moment's notice.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=93)** Sometimes, you pick tools based on how they function together, rather than just picking the best of class.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=98)** With commercial tools in particular, you might be more apt to using a companion tool in a subsequent stage.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=104)** And, that's totally normal.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=106)** Also, if you're unhappy with one tool, it's okay to just find something else and replace it, or augment it.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=113)** On the topic of open source and commercial tools, it's important to know that we'll be referring to tools in both categories.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=120)** Some organizations only use open source, some only use commercial.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=125)** Many use a combination of both.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=127)** I've tried to treat this course as a chance to show tools in both categories, and give recommendations for the tools that I like to use.
>
> **[2:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=134)** In addition to making recommendations, in this course we'll get hands-on with a few tools.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=139)** Since this course spans the entire CI/CD pipeline, we only get hands on with one or two tools per pipeline stage.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=146)** Most will be open source, but some will be commercial.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=149)** Now, fair warning, I work at Signal Sciences, which is a commercial security company.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=154)** And we provide a tool in the operate stage.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=156)** For that section in particular, I'll give a full disclaimer and be sure to mention other options.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=162)** But we'll get hands on with that tool, because I think it's the best option.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=165)** Of course, I wouldn't work there if I didn't think so.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/goals-for-a-devsecops-toolchain-approach?u=76281980&t=168)** Well, now let's move into the first stage of the CI/CD pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (7), find (2), apt (1)
> **Code Keywords:** function (1), class. (1), let (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** note that (1), keep in mind (1), warning (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. Development Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Secure development practices
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=0)** - [Instructor] Let's talk secure development.
>
> **[0:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=2)** This is a really big topic as the develop stage encapsulates all the efforts from design to code commit.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=8)** In some organizations and products, this stage might consist of hundreds of developers working with a multitude of tools to complete this stage.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=15)** For others, it might just be one or two people.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=18)** For our purposes, we're going to look at three key security practices in this stage of the pipeline.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=23)** They are threat modeling, development standards, and static code analysis.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=28)** We'll discuss these now and then we'll look at some tooling to address each one of these in following videos.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=34)** First up is threat modeling.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=36)** Threat modeling models an application or system and looks for vulnerabilities.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=40)** This is often done by taking a data flow diagram and then mapping the elements using Stride.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=46)** Stride is a pneumonic developed by Microsoft.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=50)** In the process of threat modeling, you might ask, can this element or flow be spoofed?
>
> **[0:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=56)** Could it be tampered?
>
> **[0:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=57)** Are we open to repudiation, which is where a user denies their actions, such as a purchase or other transaction?
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=64)** Is there a chance of information disclosure or a data leak?
>
> **[1:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=67)** Could we be under a denial of service scenario?
>
> **[1:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=70)** Or can a user elevate privileges in this process?
>
> **[1:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=74)** Threat modeling can be an excellent practice for developers.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=77)** But it's a slow process that works best when the underlying model of the system doesn't change much.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=82)** This is definitely a problem in the modern landscape of [[Agile Software Development]] where everything changes all the time.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=88)** To address this, there's been a rise in threat modeling that works with agile development.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=93)** There are a few approaches I recommend, the OWASP App Threat Modeling Cheat Sheet, the OWASP App Sec Verification Standard, and the Mozilla Rapid Risk Assessment.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=104)** To see this in action, we'll take a deeper look at the Mozilla Rapid Risk Assessment in a later video.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=110)** For now, let's move on to our second secure development practice, development standards.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=116)** Many development organizations have team coding standards.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=120)** For example, the standards might look something like, 80% of the code will have unit tests.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=125)** Or a particular list of functions are banned.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=127)** At work, we enforce limiting and formatting, as well, so that everyone on the team is writing code that is readable and understandable by everyone else.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=136)** Security can fit in here too by specifying tools that look for secrets that have been accidentally put into the code.
>
> **[2:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=142)** Two great options are git-secrets and git-hound.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=146)** We'll look at how to use git-secrets in an upcoming video.
>
> **[2:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=150)** One final key practice we haven't talked about yet is static code analysis.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/secure-development-practices?u=76281980&t=154)** Let's dive into that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (2), this, (1), else. (1)
> **CLI Commands:** git (3)
> **Env Vars:** owasp (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Static code analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=0)** - [Instructor] The last secure development practice is static code analysis.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=5)** This is where you analyze code for vulnerabilities.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=8)** This is commonly done using a [[Static Application Security Testing]] tool, or SAST.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=13)** The tools are able to do testing without actually running the code, which is why it's called static code analysis.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=20)** SAST tools use data flow models, control flow graphs, and taint analysis to determine whether there's a vulnerability in the code or not.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=29)** There are a lot of options for static code analysis, but your choice of tool generally depends on the languages you're using.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=37)** If you're looking for an open-source option for Ruby, there's be Brakeman.
>
> **[0:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=41)** For PHP, there's Phan.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=43)** For Java Web Apps, there's Find Security Bugs.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=46)** Node has NodeJsScan.
>
> **[0:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=49)** And Golang or Go has GoSec.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=52)** I've included this resource in the course handout to help you find the right tool for your usage.
>
> **[0:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=57)** There are also commercial options which span multiple languages and are more Enterprise friendly.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=63)** A few to look at ar Veracode, Checkmarx, and Synopsis.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=67)** But depending on your language, you will need to find out which one is best suited for your environment.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=73)** Some of the tools in both open-source and commercial are able to hook into the developer's IDE.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=79)** This is great and I expect to see more options moving to this approach in the future.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=84)** Depending on the size of the code base and how tight the scan is, these tools sometimes take a long time.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=90)** I find it sometimes works better to run these on a nightly cadence rather than on every build or run a fast scan on every build and a deep scan on a nightly cadence.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=99)** The problem with all of these tools is that you're going to get false positives, which means notices of issues or vulnerabilities that aren't really real.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=108)** This means you'll need to tune the tool and review the results before dropping them into your tool chain.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=113)** I recommend that people find the tool they want to use and tune it to be as fast and loose as possible and to then over time tighten it up.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=123)** There isn't an easy button for this part of the pipeline, but working together with developers is the best way to start.
>
> **[2:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=129)** Also, if you're doing greenfield development, implementing a SAST option into your pipeline early on will pay off later.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=136)** Most of the pain felt when dealing with SAST is taking a code base that is several years old and running a SAST tool for the very first time.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=144)** If you can instead run when the code base is just starting, you will find a much easier time.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/static-code-analysis?u=76281980&t=149)** In the next video, let's take a look at other tool options that we can add into our tool chain.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), ruby (1), php (1), node (1)
> **Env Vars:** sast (5), php (1), ide (1)
> **Code Keywords:** static (4), let (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Tool: Keeping secrets with git-secrets
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=0)** - [Instructor] One of the most common vectors for attackers to gain access to systems, are misconfigurations.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=6)** One of these misconfigurations is credential leakage.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=9)** Did a Junior Developer put the password in the application, or did they put the AWS Access Keys in version control?
>
> **[0:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=16)** You know, for testing?
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=18)** Well, this sort of thing happens, but we can check for it with ease in a CICD pipeline.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=24)** To do this, we'll use Git Secrets.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=28)** First let's fire up a browser, and head over to Git Secrets page at [Github.com/awslabs/git-secrets](https://Github.com/awslabs/git-secrets) Down in the read-me, we can see some example usage, as well as how to install it for Linux, Mac, and Windows.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=44)** I've already installed this on my machine, but if you want to follow along, follow the installation instructions found here.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=51)** You will also need Git installed.
>
> **[0:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=53)** So now we need something to test.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=55)** I wrote a Small web application in golang for this CICD course that Ernice Muller and I recorded.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=61)** Let's run Git Secrets on it.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=63)** First we need to clone the repo so we can work with the local copy.
>
> **[1:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=68)** So here I am in a terminal, and I'm typing git clone https colon, slash, slash [github.com](https://github.com) slash wickett slash word dash cloud dash generator dot git.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=88)** Okay great.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=90)** Now I'm changing directories into the repo.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=93)** Next I need to set up the repository with hooks for git secrets and tell it that I specifically want it to check for AWS key patterns.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=101)** I do this by typing git secrets dash dash install and then git secrets dash dash register dash AWS.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=109)** Okay, we're ready to go.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=111)** Now we just need something to test.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=113)** Let me clear my screen here.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=116)** Now let's open up the read-me with vim.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=118)** And if I scroll to the bottom you'll notice some sample keys.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=123)** Git secrets knows to ignore these because they are well known dummy keys.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=127)** However if I modified them just a bit, git secrets is going to trigger an error because it'll think it's a real key at that point.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=135)** Okay I just changed it a little bit, now let's save it and run git secrets.
>
> **[2:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=140)** I'll simply type git secrets dash dash scan.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=144)** And now I get an error.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=147)** It found what it thinks is a key, and shows the line where it's found the issue.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=152)** Not only does this emit an error message, but it also exits with a non zero exit code.
>
> **[2:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=158)** We can see that by typing echo dollar question mark.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=161)** Which returns the exit code of the last process.
>
> **[2:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=164)** Because of this, git secrets is perfect for Jenkins, or a CI system as most of those systems will stop a build on a non zero exit code.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=172)** Okay, let's scrap all this and remove all these keys from our read-me.
>
> **[2:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=176)** I'm opening back up the read-me with vim, and just removing the bottom lines there.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=181)** Now that the keys are zapped, Let's check it all again.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=184)** Okay so now I'm back to the command line, and I'm just typing git secrets dash dash scan again.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=191)** Okay great that worked, we're all set.
>
> **[3:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=194)** Now there's one thing I want to show you.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=197)** It's also very common to commit some keys to version control, and then realizing the problem, remove them, just like we did.
>
> **[3:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=204)** But does this really remove the keys?
>
> **[3:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=207)** No it doesn't, that's the purpose of version control.
>
> **[3:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=211)** To let you go back in time to any state of the repo.
>
> **[3:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=214)** So you'll have to remove the keys from the history as well.
>
> **[3:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=217)** The good news is that we can use git secrets to check my git history for any credentials hanging around.
>
> **[3:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=223)** To do this I'll type git secrets dash dash scan dash history.
>
> **[3:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=229)** It found some real looking AWS keys that I committed to the repo a few weeks ago.
>
> **[3:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=234)** Even though I removed them from the repo, they're still there in my version control history.
>
> **[4:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=240)** Just waiting to be found and used by attackers.
>
> **[4:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=243)** This has been a quick tour of git secrets.
>
> **[4:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-keeping-secrets-with-git-secrets?u=76281980&t=245)** It's pretty well documented, pretty popular, and it fits nicely in a CIDC pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** git (20), aws (4)
> **Code Keywords:** let (8), this, (2)
> **Env Vars:** aws (4), cicd (2), cidc (1)
> **Tools:** github (2), vim (2), terminal (1), command line (1)
> **Prerequisites:** install (2), set up (1)
> **URLs:** [github.com](https://github.com) (2)
> **Exercise Files:** clone the repo (1)
> **Definitions:** is a  (1)

#### Tool: Rapid Risk Assessment
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=0)** - [Instructor] Threat modeling is a great practice, and I've had success with it in the past.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=5)** But generally threat modeling works well with established software or services.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=9)** So what do you do when the app or service is under active development?
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=13)** What if you're making changes weekly, or daily?
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=17)** Enter Rapid Risk Assessment.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=19)** Mozilla has a creative commons license process, called Rapid Risk Assessment.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=25)** Let's open up the browser and head over to, infosec.[mozilla.org/guidelines/risk/rapid_risk_assessment](https://mozilla.org/guidelines/risk/rapid_risk_assessment).
>
> **[0:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=36)** This is a great tool because it's quick.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=38)** You'll keep the total assessment to about 30 minutes.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=42)** It's also high-level.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=43)** The goal is to provide a fast assessment, but as you repeat the process, you can build out a full threat model.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=50)** It's also easy to update.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=51)** It serves as a guide that's fluid and moves with the practice of software development.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=56)** Really, this could probably be dubbed, agile threat modeling and not be too far off the mark.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=62)** The goal here is within about 30 minutes, to answer questions like is there anything obvious we should really look at fixing, right now?
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=71)** Or, where should we focus our efforts to significantly increase the security of the service?
>
> **[1:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=77)** While we can't walkthrough the whole process here, you can find instructions on running the Rapid Risk Assessment under the subhead, Guided process for risk analysts: Running your RRA in about 30 minutes.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=89)** Let's take a look at the template to help guide you through the assessment.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=93)** I'm scrolling down to, create a copy of the template.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=96)** When I click that it opens up a template for an RRA in Google Docs.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=101)** It's written as if you were a Mozilla employee, so you might want to adjust that.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=105)** But notice that there's some metadata about the service up at the top.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=109)** Next we have the data dictionary.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=111)** So all the stakeholders can identify what we are protecting here.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=115)** The first time you do this, you may need a little more time.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=118)** But after a few times through, you should be able to spend just five minutes max here.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=122)** Then the threat scenario sections is where you can spend five to 10 minutes discussing impact around attack scenarios.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=130)** I love that the scenarios hinge around the long-standing security triad of confidentiality, integrity and availability.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=138)** Let's move back to the guidance and see what impact levels look like.
>
> **[2:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=143)** For example, let's look at reputation issues.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=146)** We ask the questions, do we get in the mainstream news?
>
> **[2:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=149)** If so that's maximum impact.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=152)** Do we get in the technical news?
>
> **[2:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=153)** That's high impact.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=155)** Do we receive emails, bugs twitter messages, et cetera?
>
> **[2:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=158)** Now that's medium impact or maybe not much at all, well that would be low impact.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=163)** Last we wrap up the Rapid Risk Assessment with recommendations.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=167)** There's some great steps and ideas here on how to wrap up the assessment.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=172)** Remember, the whole assessment should take about 30 minutes.
>
> **[2:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=175)** If you can keep the meetings brief, then people will be okay with doing them every sprint or every other sprint.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=181)** It allows the teams to care about security and prioritize the right level of effort.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=186)** It also helps build out a more complete threat model, while the service is being developed.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tool-rapid-risk-assessment?u=76281980&t=191)** This process works great for agile teams and while it isn't a software tool, this is definitely something you'll want to add to your DevSecOps tool shed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1)
> **Exercise Files:** template (3)
> **Env Vars:** rra (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** rapid_risk_assessment (1)
> **URLs:** [mozilla.org](https://mozilla.org) (1)
> **Analogies:** for example (1)


### 3. Inherit Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What's in your app?
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=0)** - [Narrator] The inherit stage is a tricky one as it's often not a stage of a CI/CD pipeline that many people really talk about.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=8)** I refer to this as the invisible phase because this is where software dependencies get bundled into the application and inherited into our code.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=17)** This is a real problem.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=19)** In the 2018 DevSecOps Community Survey, 31% of respondents suspect or have verified a breach related to an open source component in the last 12 months.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=31)** Many headline grabbing breaches within the last three years are related because many of them were due to inherited components.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=38)** Outdated libraries, dependencies, frameworks, or even OS packages are often to blame.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=44)** Sometimes it's easy to think of my app as just a couple hundred lines of code or LOC, it's simple right?
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=52)** But when we stack up all the libraries needed to run our application, add in the frameworks, and all of the server components, we arrive at our real LOC number, this is all the code that makes your application work.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=66)** One way to understand exactly what your app is made of is to publish a BOM or a bill of materials.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=73)** The BOM is a record of all the components, libraries, and dependencies you have.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=78)** That same DevSecOps Community Survey mentioned earlier also found that only 38% of respondents had a software bill of materials which as a problem.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=88)** This is just common sense.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=89)** If a library is found to be vulnerable, you need to know if you're using it.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=93)** By publishing a BOM, you have a quick reference for what libraries and versions are shipping with a particular application.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=101)** At Signal Sciences, we are a go dev shop and we have a jenkins job that runs a daily BOM and reports back on the libraries we are rendering and how out of date each one is.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=110)** This gets pumped into our slack channel for the engineering team to keep an eye on and it keeps creates a positive feedback loop.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=117)** Now I know that not everyone is a go shop and these tools are very language specific.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=123)** Some languages like Ruby have this as part of the culture with bundler and bundler audit, but in many languages this is less common.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=130)** The goal here is to find a tool that you can put into your CI/CD pipeline that checks for dependencies that make you vulnerable.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=136)** The tools themselves need to be up to date and have access to current Vul databases with the most recent Common Vulnerability Exposures or CVE's in them.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=146)** Instead of doing goling examples, I'd like to look at two tools for other languages in the upcoming videos.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=152)** First, we'll look at a popular job option, OWASP Dependency Check.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=156)** And next we'll look at a javascript option called Retire.js.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/what-s-in-your-app?u=76281980&t=160)** Both run in CI environments easily, so let's take them for a spin.

> [!info]- Semantic Content
>
> **Env Vars:** bom (4), loc (2), cve (1), owasp (1)
> **CLI Commands:** cd (2), ruby (1), find (1), make (1)
> **Definitions:** is a  (4)
> **File Paths:** retire.js (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the last (1)
> **Tools:** slack (1)
> **Speakers:** - [narrator] (1)

#### OWASP Dependency Check in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=0)** - [Instructor] Let's take a look at OWASP Dependency Check.
>
> **[0:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=3)** This is a software composition analysis tool.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=6)** It determines what an application is composed of, not just the code you wrote, but all the libraries and dependencies that make up the application.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=14)** The tool is evidence based, which means it evaluates software and looks at dependencies, and evaluates the file name, manifest, project object model, package names, and more.
>
> **[0:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=26)** In OWASP Dependency Check this is all cataloged as evidence.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=31)** Evidence found by the tool is then grouped into collections, by vendor, product, and version.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=36)** Next OWASP Dependency Check compares what it finds to the National Vulnerability Database, which is maintained by [nist.gov](https://nist.gov).
>
> **[0:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=45)** It uses a Lucene index and fuzzy matching to determine if the evidence it found matches against the NVD.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=52)** There are a lot of options to get started with OWASP Dependency Check, but we're going to use it on the command line to get a feel for how it works.
>
> **[1:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=60)** To install the command line or CLI plugin, there are instructions for any operating system at jeremylong.[gethub.io/dependencycheck](https://gethub.io/dependencycheck)/, dependency-check-cli/index.html.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=75)** When you install and run it for the first time, it takes a little while for it to download a local copy of the NVD.
>
> **[1:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=81)** However, subsequent runs are much faster, as it only has to download updates to stay current.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=88)** I already have it installed here, so let's get a Java app and use OWASP Dependency Check, to evaluate it.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=94)** I'm just going to download an old version of an Apache http client from a Maven Artifact Repository, to use as a sample app.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=103)** In the browser, I'm going to head over to the link shown at the bottom of your screen.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=107)** When I'm here, I'm just going to download the JAR file.
>
> **[1:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=112)** Okay, got it.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=114)** Now, let's run that JAR file through the OWASP Dependency Check.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=118)** I'm moving over to the command line.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=120)** Now let's run that through the OWASP Dependency Check.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=123)** And I'm already in the Downloads directory.
>
> **[2:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=126)** To run Dependency Check, I'm typing dependency check --project and I have to give it a project name here.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=136)** Here I'm just going to call it demo, but you can call it whatever you want.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=139)** Next I'm typing --scan and giving it the path to the http client, the JAR file that we just downloaded.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=146)** And lastly, I need to tell Dependency Check what to do with the output.
>
> **[2:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=150)** So I'm telling it to print it out to dep-check-out.html.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=156)** Okay, let's go ahead and run this.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=160)** All right, it looks like it finished its analysis.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=163)** Now let's open up the html it generated in our browser.
>
> **[2:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=166)** It found two CVs, one from 2011 and one from 2014.
>
> **[2:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=174)** And it tells us how much evidence it found to support the report here.
>
> **[2:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=178)** Because this uses fuzzy matching, there are sometimes false positives and tuning is required.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=184)** You can choose to suppress certain findings right here and it'll give you some config to put with your project.
>
> **[3:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=190)** Once you tune it for one application, you can then set it up in Jenkins to scan on each build and get very accurate results.
>
> **[3:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=198)** There is much more to this tool, but this gives you the basics.
>
> **[3:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=202)** It has an extensive list of integrations and plugins, so it's worth your time to do the initial setup and get this into your pipeline.
>
> **[3:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/owasp-dependency-check-in-practice?u=76281980&t=208)** In our next video, let's turn to the front end and work with a tool that can help you reign in all the JavaScript dependencies.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (7), jar (3), nvd (2), cli (1)
> **Code Keywords:** let (7), this. (1)
> **Tools:** command line (3)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** dependency-check-cli/index.html (1), dep-check-out.html (1)
> **CLI Commands:** make (1), apache (1)
> **URLs:** [nist.gov](https://nist.gov) (1), [gethub.io](https://gethub.io) (1)
> **Cross-References:** next video (1)

#### JavaScript security with Retire.js: Installation
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=0)** - [Instructor] Now let's look at software composition analysis and inheritance security for JavaScript.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=5)** This means that if your using a vulnerable version of jQuery, then our tool will throw an error code that will stop the continuous delivery pipeline.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=13)** The tool we'll be using is Retire.js and it's made just for this purpose.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=18)** Let's use Retire.js in a Docker container.
>
> **[0:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=21)** We use Docker here, because it's a portable way to integrate security testing for CI systems like Jenkins.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=27)** Let's head over to the command line.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=29)** I have a forked repo of a Dockerized version of Retire.js.
>
> **[0:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=33)** I'm going to clone this by typing git space clone and the project repo URL, [github.com/wickett/docker-retire.js.git](https://github.com/wickett/docker-retire.js.git).
>
> **[0:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=48)** Let's move into the repo, and then type cat Dockerfile.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=52)** You can see that we're using a Node container, and the most current version of Retire.js.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=58)** This sets up the entry point to the container as Retire, so when we call it, we can just pass arguments to it, and they'll be handled by Retire.js inside the container.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=67)** Okay, great, now we just need to build the container.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=70)** I'm going to clean my screen here.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=72)** I'll type docker space build space .
>
> **[1:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=76)** and then another space and a -t=retire.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=79)** This tags it with the retire tag.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=84)** Great, this did a Docker build, and it tagged it as retire, so I can reuse that container.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-installation?u=76281980&t=89)** Now let's run it against a local code base I already have on my machine.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5), git (2), cat (1), node (1)
> **Code Keywords:** let (5), throw (1), pass (1)
> **File Paths:** retire.js (5), github.com/wickett/docker-retire.js (1)
> **Tools:** command line (1), github (1)
> **Code Identifiers:** jquery (1)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** url (1)
> **Definitions:** means that (1)

#### JavaScript security with Retire.js: Testing
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=1)** - For testing, I'm just going to use the word cloud generator app that we used in an earlier movie, but really, any project with JavaScript in it will do.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=9)** Okay, let me move into the directory.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=12)** Let's run retire against the app by typing docker space run, and I'm giving it that dash dash rm flag to let it know to remove the container when it's done, and then I'm also mounting a volume, the present working directory using dollar pwd colon slash app, so I'm giving it the app directory inside the container.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=29)** And then I'm telling it to call the retire container, and I'm asking it to be verbose when it does it.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=35)** This runs the container we just made, and mounts the local path, the present working directory, to the container, under the app directory.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=43)** Then it runs retire dot js inside of it.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=47)** I passed the dash v for verbosity.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=50)** Okay, great, it ran and it didn't find any problems.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=54)** We can tell by running echo dollar question mark, which gives the exit status, zero is good here.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=59)** Okay, let me clear my screen.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=61)** Let's say, one day I get a wild idea to move to jquery one dot four dot zero, so I download that to my application's static directory.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=70)** To simulate that, I'll type wget, https, then code dot jquery dot com slash jquery dash one dot four dot min dot js.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=83)** Okay, once I have that, I'm going to move it into my static directory where I keep all my JavaScript.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=88)** Unbeknownst to me, a developer who's working with the application, this older version of jquery has several vulnerabilities inside of it.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=96)** And I shouldn't use it.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=98)** Well once retired dot js sees it, it'll throw an error.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=102)** Let's run our check again, and this time, it should error out.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=108)** Okay, great, we see the exit code.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=110)** And most build systems, or CI build systems, are set up to fail whenever they see a non zero exit code.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=115)** Because of this, retire dot js is perfect for your CI-CD pipeline.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=119)** And it fits nicely into a CI buildsystem like Jenkins or Travis.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=123)** But that's not all.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=125)** In the browser, there are retire dot js integrations for Chrome and Firefox, as well as plug-ins for things Zap and Burp, two popular dynamic scanners.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=135)** Okay, this closes out our section on retire dot js.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=138)** And I hope you found this fun and useful.
>
> **[2:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/javascript-security-with-retire-js-testing?u=76281980&t=140)** Definitely check out this really neat open source project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), static (2), throw (1), this, (1)
> **CLI Commands:** docker (1), rm (1), find (1), wget (1), cd (1)
> **Tools:** firefox (1)
> **Prerequisites:** set up (1)
> **Speakers:** - for (1)

#### Options for software composition analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=0)** - [Instructor] Okay, we've covered two tools so far, OWASP dependency check and Retire.js.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=5)** Both of these are great tools, but there are several others that are worth considering.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=10)** If you're doing Ruby development, then bundler-audit's worth taking a look.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=14)** It checks for vulnerable gems and insecure gem sources.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=18)** It also allows overrides if your using a gem that you need, and have worked around the vulnerability.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=23)** What's great is, that it doesn't require a network connection, which means that it's really fast to run.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=28)** Another open source option to look at is PHP Security Checker.
>
> **[0:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=33)** Like the others, it looks for common libraries that you're using, but shouldn't be.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=37)** Of course we should mention, there are a lot of commercial option.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=40)** A few to consider are Sonatype, Black Duck, Veracode, and WhiteSource.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=45)** I really do like Sonatype Nexus.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=48)** They have a ton of data from running the central repository for Maven for all of these years.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=52)** This experience parlays into their Nexus pro offering.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=56)** So far, we've been mostly focusing on app level dependencies, but it's very common to deliver apps in containers these days.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=64)** This means you need a tool to scan the container, and any upstream containers for OS and framework inheritance vulnerabilities.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=70)** One open source option is Clair.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=73)** It came from the Core OS team, and it's built for the purpose of checking what is getting built into the container.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=79)** Specifically looking for any upstream containers with vulnerabilities.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=84)** There are two commercial Docker options I recommend to folks looking into this space, Aqua, and Twistlock.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=90)** Both of these commercial offerings are more for doing full container life cycle security.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=95)** So they might be overweight for what you're trying to do.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=98)** However, you should give them a look if you're all in on containers, Kubernetes, or serverless.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=103)** In this section, we covered a few other option for tools to find out what you're software is really made of.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/options-for-software-composition-analysis?u=76281980&t=109)** And the hope is, that this gives you some places to discover new options for tooling to test for inheritance vulnerabilities by doing software composition analysis in your continuous delivery pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** ruby (1), php (1), docker (1), find (1)
> **Env Vars:** owasp (1), php (1)
> **File Paths:** retire.js (1)
> **Code Keywords:** require (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


### 4. Build Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Security testing in the build stage
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=0)** - [Man] The build stage is what most developers and operations folks think of when they think of continuous integration.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=6)** This is where all the previous stages we talked about gets verified.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=9)** But also additional acceptance testing happens.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=13)** In this stage, the build is run, tested, and artifacts get prepared for being deployed, which is our next phase.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=19)** Now, some developers and security engineers may have a different idea of what this stage entails.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=25)** If you come from a development language where binaries are compiled or built, you may be thinking of compilers, linkers, and the like.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=32)** But here, build is more than just compiled languages.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=35)** This stage applies to any software that is getting prepared for the deploy stage.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=39)** Yes, this includes combined binaries, but also zipped-up artifacts, images, HTML, JavaScript, infrastructure code, and even your cloud config.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=50)** If you're struggling with this concept, check out the DevOps Foundations: Continuous Integration/Continuous Delivery course here in the library where we dive into the topic in much more depth.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=59)** Let's move on to the security considerations for the build stage.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=63)** First, let's talk outside-in security testing.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=67)** This is testing that interacts with the software from the outside.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=71)** In other words, you test from the attacker point of view.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=73)** For example, instead of looking at code for vulnerable libraries, in this type of testing, you automate actions that a malicious user would take against your software.
>
> **[1:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=81)** We borrowed this approach from the development testing methodology called BDD or behavior-driven development.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=87)** In BDD, you emulate user interactions with your software.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=92)** But we now look for ways to emulate actions of attackers with your software.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=97)** One category of tools that we put into the build phase for this purpose is [[Dynamic Application Security Testing]] or DAST tools.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=105)** These are commercial and open source scanners that try to attack your applications.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=111)** Okay, next up, infrastructure testing.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=113)** Does the server have the right SSH config?
>
> **[1:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=116)** Does the firewall or security group have only the desired ports open?
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=120)** You can ask questions like these and you can test for this in this phase.
>
> **[2:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=124)** This moves on to our next consideration: compliance testing.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=128)** What if you can check for adherence to hardening guidelines on every single build or make sure that root login is always disabled?
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=136)** Since infrastructure is code, we can check for these types of things much earlier in the delivery pipeline.
>
> **[2:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=142)** As you approach this stage of the pipeline, there are three questions I suggest people to ask: Have I validated the previous two phases of testing in a secure build environment?
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=152)** This is a trust but verify setting.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=154)** You want audible logs of all the unit tests, linting, software composition analysis, and all the previous tests that ran locally on the developer's machine.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=163)** Next question: Am I testing for security issues that are easy to catch where I can use automation of tools?
>
> **[2:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=170)** We're shifting left as much testing as we can.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=172)** Automation is great for automating testing for things like root privileges or SSH settings or other hardening benchmark standards.
>
> **[3:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=180)** Moving this testing earlier alleviates security resource constraints later on.
>
> **[3:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=185)** And lastly, am I arming my pipeline with attack tools to test my application?
>
> **[3:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=190)** If real attackers and adversaries are running attack tools against you in production, and they are, then shouldn't you be running them yourself?
>
> **[3:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-testing-in-the-build-stage?u=76281980&t=198)** Of course you should, and in the next video, we show you how to get started.

> [!info]- Semantic Content
>
> **Env Vars:** bdd (2), ssh (2), html (1), dast (1)
> **CLI Commands:** ssh (2), make (1)
> **Cross-References:** we talked about (1), earlier in (1), in the next (1)
> **Code Keywords:** let (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [man] (1)

#### AppSec scanning with DAST tools
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=0)** - Application security is a class of security problems that has withstood the test of time.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=6)** Over 15 years ago the open web application security project known as OWASP was started to address this space.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=13)** However even today application security is still going strong.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=18)** One example of application security is cross-site scripting.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=22)** Normally shortened to XXS, OWASP provides this definition.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=27)** Cross-Site Scripting attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=35)** Now that is just one form of application security.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=38)** Every few years OWASP releases the OWASP top 10 which catalog the top 10 risks that the organization sees out in the wild.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=48)** Check out [owasp.org](https://owasp.org) for more info.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=51)** Many of these are application security vulnerabilities and they hinge on injection of user data to take control of the app or the user's browser.
>
> **[1:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=60)** So in the case of cross-site scripting, you can inject a bit of JavaScript like this one here.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=65)** It gets access to the user's session token and admits it to an evil site that only the attacker controls.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=71)** If you're an attacker this is great because you can assume the user's session without knowing the username or password.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=78)** We could work our way through the whole list of OWASP top 10 but instead lets talk about how to test for these types of issues.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=85)** We have already talked about two major approaches for APSEC defense.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=89)** Software application security testing SAST and software composition analysis, sometimes abbreviated SCA.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=97)** But there is also one other way to approach detecting application security vulnerabilities, and that is through [[Dynamic Application Security Testing]] tools or DAST.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=106)** DAST tools are also the same tool that attackers are using against your site.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=111)** Some are open source, some are commercial and paid for.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=114)** There are a few tools that I really like to use and I think are on most peoples short list when they talk about DAST tools.
>
> **[2:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=121)** I won't go through an exhaustive list here, but I am going to mention a few per category.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=127)** First lets talk General-Purpose Scanners.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=130)** They do all sorts of things from cross-site scripting to command execution and they even have fingerprinting and spidering built in.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=137)** Open source options like Arachni, Nikto, and Zap are great.
>
> **[2:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=142)** Zap is the most fully featured, it has roots at Mozilla and OWASP and has an API that makes it possible to integrate into CI systems.
>
> **[2:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=150)** A commercial, though low cost, favorite of mini is Burp.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=155)** There's a free version that has rate limiting, but the license won't set you back too much.
>
> **[2:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=159)** It has an API and can be scripted as well, out of all the tools I recommend for DAST I would say Burp is the most well loved and full featured.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=168)** Next sequel injection shortened as SQLi, is a vector of attack where attackers try to pass valid sequel through a web application or API and get a response from the database.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=179)** There's only one tool to recommend here that's the Swiss Army knife of SQLi, Sqlmap.
>
> **[3:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=185)** Its open source, constantly updated, and really powerful.
>
> **[3:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=190)** Last there are two SSL checkers we should throw in here, SSL or TLS is how we encrypt http, this is the s in https.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=200)** The major headline grabbing TLS vulnerability from recent history is Heartbleed and it makes sense to add a SSL scanner to the tool chain mix.
>
> **[3:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=208)** There are two I recommend, SSLScan and SSLyze, with SSLyze being the one that I run the most.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/appsec-scanning-with-dast-tools?u=76281980&t=216)** Okay join us in the next video were we automate one of these tools.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (6), dast (4), api (3), ssl (3), tls (2)
> **Code Keywords:** for. (1), pass (1), throw (1)
> **Definitions:** is a  (2), known as (1)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - application (1)

#### Gauntlt in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=0)** - [Instructor] DAST tools are great.
>
> **[0:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=2)** But they can be slow and clunky for fitting into CICD pipeline.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=6)** I'd like to introduce an open source tool that I helped create to address the shortcomings of DAST tools.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=12)** The tool I'm talking about is Gauntlt.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=15)** I've got a whole course on this in the library called [[DevSecOps- Automated Security Testing]].
>
> **[0:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=21)** This video will just be a quick look at the tool, but if you want a full hands-on experience, be sure to check out that other course.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=28)** Okay, let's head over to the projects home over at [gauntlt.org](https://gauntlt.org).
>
> **[0:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=32)** Gauntlt provides hooks to a variety of security tools and puts them within reach of security, development and operations teams so that they can collaborate to build rugged software.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=42)** Gauntlt works by wrapping attack tools and checking their output using the plain text files that end in the .attack extension.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=50)** Let's use Gauntlt to run the popular DAST tool, Arachni, to do a quick scan for cross site scripting.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=56)** I'm going over to the command line now.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=59)** First, let's download the docker image which is on docker hub.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=62)** In it, there's Gauntlt, Arachni and a few other tools.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=67)** I'm just typing, docker pull gauntlt/gauntlt.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=72)** Okay, great.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=73)** Now that I have the container, let's look at an attack file.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=77)** I'm opening in my ID, in this case vim, to look at xss.attack.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=82)** The same file is available in the exercise files.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=85)** First, we describe what we are testing.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=87)** So in this case it's our feature.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=89)** We're looking for cross site scripting, using Arachni and we're going to go against [example.com](https://example.com).
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=95)** Next, we have some background steps where we make sure Arachni is installed and we setup what URL we want to test.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=101)** This is how Gauntlt sets up variables for scenarios to use later on.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=105)** Next, we see our scenario.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=108)** Here we give it a description of, Do a quick check for cross site scripting and verify that no issues are found.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=114)** This queues our tester into what is going to be tested and it does so in plain English.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=119)** Next, we have the Arachni execution step and we pass in some parameters that scope the check to test just for xss or cross site scripting payloads.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=127)** And to do it only on one page.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=130)** Finally, we say we want the output to contain zero issues detected.
>
> **[2:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=134)** We say that here with the vim statement.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=137)** Since DAST tools sometimes will spider and run every payload they have against a site, we have to make sure that we create .attack files that have three properties.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=147)** First, they need to be explicit in meaning, so that anyone reading it can understand what is happening.
>
> **[2:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=153)** Second, they should be specific in tuning, so that they scope the tool to test what matches the scenario purpose.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=160)** Third, and most importantly, they should be fast.
>
> **[2:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=164)** Okay. I'm going to run this attack file.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=167)** I'm exiting vim and I'm typing docker run -t--rm=true -v $
>
> **[3:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=180)** and the present working directory resolve there, doing the pwd:/working.
>
> **[3:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=185)** Then we give it a -w/working and then the name of the container gauntlt/gauntlt.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=192)** Then we feed in the attack file, which just sits on our local disk.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=195)** If you are unfamiliar with docker, don't get too thrown off with the special docker flags here.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=200)** In fact, in the other course I mentioned, we set up a wrapper to do all of this for us.
>
> **[3:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=205)** What we are doing here is running our Gauntlt docker container and passing in the attack file we just made.
>
> **[3:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=210)** That container has Guantlt and Arachni already set up on it.
>
> **[3:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=214)** So, it will just happily run our attack.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=216)** Okay. Now let's run it.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=221)** Now we can see from this output, that gauntlt used Arachni to scan [example.com](https://example.com) for cross site scripting and didn't find any problems.
>
> **[3:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=229)** Gauntlt exits cleanly from this.
>
> **[3:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=231)** In fact, Gauntlt handles Unix exit codes just like you would expect for any testing tool.
>
> **[3:56](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=236)** We can see this by typing echo$?.
>
> **[4:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=240)** This is powerful because once you write attack files for one app in your organization, you now have security tests as code and they can be shared.
>
> **[4:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=249)** A good friend of mine told me that he used Gauntlt as the primary way to jump start the DevSecOps movement at a large healthcare company he works for.
>
> **[4:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/gauntlt-in-practice?u=76281980&t=257)** By codifying security, everyone wins, except maybe the bad guys.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7), make (2), rm (1), find (1)
> **Code Keywords:** let (5), pass (1), finally, (1), this. (1), for. (1)
> **Env Vars:** dast (4), cicd (1), url (1)
> **Tools:** vim (3), command line (1)
> **URLs:** [example.com](https://example.com) (2), [gauntlt.org](https://gauntlt.org) (1)
> **Prerequisites:** set up (2), setup (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** just like (1)


### 5. Deploy Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Security in the deploy phase
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=0)** - [Instructor] The deploy phase is where software moves from testing to where the customers area able to operate it for the very first time.
>
> **[0:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=7)** When we're doing full continuous delivery this might happen several times a day.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=12)** At my company we move code to production 10 to 15 times a day on average.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=17)** The speed at which we move new features to production is a radical departure from where the industry was a decade ago, with mostly waterfall being used for software delivery lifecycle.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=27)** There's a need to do security at the same speed as all these deploys.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=31)** There are two major categories of security issues faced at the deploy phase.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=36)** First, securing the actual deployment.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=39)** By that I mean accountability and audit ability of the deployment.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=44)** Knowing what code went out, who wrote it, who authorized it and logging for all of that, which needs to be tamper proof.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=52)** The second category is compliance.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=55)** Often compliance will try to put road blocks in place for continuous delivery.
>
> **[1:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=60)** It's important to bring them along for the journey.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=63)** In a following video I'll discuss what we can do for dealing with compliance and auditors.
>
> **[1:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=68)** So let's talk about the types of questions to ask for this phase.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=71)** The first question to consider is, what secrets are needed to move my application from development to production.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=78)** This also has the underlying questions of privilege and authorization for systems and users.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=83)** At work we set up our deployment tool to be the only user who has any access to make changes to production.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=90)** Engineers only have access to auth to that tool and initiate changes that way.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=95)** Next ask the question, am I testing for compliance on each and every deploy, or maybe, am I testing for it nightly.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=102)** In a Dev seq ops approach we want to automate as many compliance checks as possible so that we are assuring compliance daily or better.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=110)** Remember waterfall is gone, this is Agile security.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=114)** The last question to ask is, is there a repeatable mechanism to push changes to production.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=119)** We trust the deployment tool to make the changes so that each deploy becomes a routine process that's repeatable, auditable and never done by an individual.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=128)** This follows the guidance in the Agile Application Security book.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=132)** That deploys can be treated as standard or routine changes that have been preapproved by management and that don't require a heavyweight change review meeting.
>
> **[2:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/security-in-the-deploy-phase?u=76281980&t=140)** Okay, now that we know the questions we want to answer let's look at some tools that will help us to this end.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Rundeck for deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=0)** - [Instructor] Deploy means a lot of things to different organizations, but put simply, it's a set of steps that have to happen to get the software running in production.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=8)** Since the steps get run for every deploy, it only makes sense to automate them.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=13)** The tool that I recommend for automating deploy workflows and processes is Rundeck.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=19)** Rundeck started as an open-source project from Damon Edwards and the DTO Solutions team.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=23)** DTO is the first true DevOps consultant practice and helped DevOps grow in the early years.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=29)** They found themselves going to client after client, building the same workflow automation tooling.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=34)** Let's open up [rundeck.org](https://rundeck.org).
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=37)** There is the free, open-source version that I have here, and then there's also the pro version.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=42)** If you're in an enterprise shop where auditing and encrypting keys is important, I recommend going with the pro version.
>
> **[0:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=49)** The tool functions in three ways that are really helpful for security.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=52)** First, it codifies standard operating procedures, sometimes called runbooks, which is where Rundeck gets its name.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=59)** That means that if you want to automate a task like remove a user from the system, then instead of writing up a set of instructions or a script, you write a Rundeck job that can perform this set of steps.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=70)** This is way less error-prone and way more audit-friendly.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=73)** Next is that it automates deployment tasks.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=76)** Deployment is different for every application and system, so in Rundeck, you make a job that is fit for that specific app and give access to the engineers that are allowed to make the deployment happen.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=86)** You can also assure that the artifacts that came out of Jenkins are the artifacts that are being deployed to production, with the Jenkins plugin for it.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=93)** Lastly, we can create self-service workflows.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=96)** Does a team need a test environment to use?
>
> **[1:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=98)** No problem, they can just click a button and one will be made.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=102)** But as many in security know, these environments have a way of becoming long-lived things that are out of sync with everything else.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=110)** Often, languished test systems are an attack factor.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=113)** Sounds like a great place for a workflow to expire environments or fire alerts after a certain period of time.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=119)** All that is possible with workflow automation.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=122)** Here we have been mostly concerned with how this tool can help with deployment, but there is also a SANS research paper, written by John Becker, and he cites improved collaboration across security and DevOps because of Rundeck.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=135)** He also goes on to say that as Rundeck is adopted across the enterprise, it becomes more valuable to more teams.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=141)** And he calls out auditors and incident responders as the ones who would benefit the most from it.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/rundeck-for-deployments?u=76281980&t=146)** Speaking of auditors, now is probably a good time to talk about how to integrate audit and compliance in your DevSecOps toolchain, since they're part of the software delivery pipeline, if you like it or not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), else. (1)
> **Env Vars:** dto (2), sans (1)
> **CLI Commands:** make (2)
> **URLs:** [rundeck.org](https://rundeck.org) (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Tricks for making compliance happy
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=0)** - When I talk to people about the benefits of devops and devsecops, there's always one major pushback that I get, you guessed it.
>
> **[0:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=7)** Compliance.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=8)** Often I here this from engineers and security professionals who have suffered through a PCI audit or some other long regulatory process.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=16)** To them, compliance is the enemy.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=18)** But I started to wonder, is compliance the real roadblock?
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=22)** Whenever I speak with auditors, they seem hesitant at first but after explaining how a software delivery pipeline works, they actually get excited.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=30)** In a sense by doing CI and CD, you are expressing a version of what Itil and Waterfall always promised.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=37)** That is, you get change control along with all the auto ability and login that goes along with it.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=43)** Most auditors are really concerned with establishing a policy and making sure processes and procedure are followed in regard to that policy.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=50)** They collect evidence to verify that all looks good and the audit is a success.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=55)** CI/CD actually fits great with this and provides an abundance of evidence for them.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=59)** This isn't to say you won't have auditors who aren't skeptical of devsecops.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=64)** To that end, there are two resources I would like to recommend.
>
> **[1:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=68)** First the DevOps Audit Defense Toolkit.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=71)** This a 20 page pdf which addresses head on the problem of developer's pushing their own code.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=76)** It include steps and advice for how auditors can fulfill all their testing and evidence gathering in the continuous delivery pipeline.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=83)** We've provided them with the exercise files here for the course.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=88)** The second resource is the [dearauditor.org](https://dearauditor.org) I was on the team that helped to create Dear Auditor.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=93)** Which is an open love letter to auditors from the devops community.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=97)** Besides being a promise to bring auditors along the journey of devops.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=102)** The project has a devops risk control matrix that speaks the language of both groups simultaneously.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=108)** The team behind this effort included representatives from Capital One, Microsoft, CB Labs and more.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=115)** All with either security and devops backgrounds or audit and compliance backgrounds.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=120)** It was a really fun project.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=122)** And be sure to check it out and send us a poll request if you have anything to add.
>
> **[2:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=126)** But what about a tool to help with the process?
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=130)** Let's talk about InSpec.
>
> **[2:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=131)** InSpec is created by the folks over at Chef.
>
> **[2:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=134)** And they dubbed it as compliance as code.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=137)** The idea is that you write code to express desired compliance.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=141)** You can see here that you set a control, its impact and then describe what to test for.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=146)** In this InSpec example, it is asserting that ssh daemon config should match version 2.
>
> **[2:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=153)** The great part about compliance's code, is that you save auditor time.
>
> **[2:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=157)** As you can just apply it to all system that need auditing.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=160)** I recommend setting this up to run nightly through a CI system or depending on your system, maybe even on every build.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=167)** When auditors can see that the IT policy to not use old versions of ssh, is not only adhere to and config through infrastructures code practices like Chef and Puppet, but also they're able to see and inspect test that run on regular cadence.
>
> **[3:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=182)** Passing an audit, will be a breeze.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=186)** Now let's move away from audit and talk about our last stage.
>
> **[3:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=189)** Operate.
>
> **[3:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/tricks-for-making-compliance-happy?u=76281980&t=190)** There we will see how to defend your production software or application.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), ssh (2)
> **Code Keywords:** let (2), for. (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [dearauditor.org](https://dearauditor.org) (1)
> **Env Vars:** pci (1)
> **Versions:** version 2 (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - when (1)


### 6. Operation Tools

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Keeping security in operate
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=0)** - [Instructor] The runtime state of the application is where users interact with, or consume the application.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=6)** This is where we operate our application or service or, put simply, runtime is our application in production.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=13)** Runtime is often the most forgotten place of the pipeline, and in DevSecOps in general.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=19)** This is because most people think about putting security testing in place closer to development, which makes a ton of sense, and we even have a handy mantra to describe the process.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=28)** We call it Shift left.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=30)** However, in continuous delivery, we can't just stop with deployment.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=34)** We also have to see our application in use in order to inform our next development cycle.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=40)** So instead of just shifting left, security has to also make the shift right.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=45)** This means putting instrumentation into our runtime or production, and this turns out to be really valuable because this is where you're actually getting attacked.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=54)** You might be thinking, "haven't we been focusing" "on security and production for ages?"
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=59)** "Haven't we spent decades on implementing" "firewalls and IDS's and WAF's?"
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=64)** Well, of course, yes but all of those technologies are based on creating a perimeter, or the idea of building a border on the network so the application can't be compromised.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=73)** What we mean for Shift right, is that we actually use instrumentation to provide not just defense, but also feedback to everyone involved with the development and operation of the application.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=83)** What we are suggesting with a DevSecOps approach is that instrumentation should have four key ingredients.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=89)** Let's take them one by one.
>
> **[1:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=91)** First, metrics based.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=93)** You can also think of this as a way to gauge security at any point in time.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=97)** It allows us to answer questions like, "am I under attack right now?"
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=101)** or, "are we seeing leading indicators" "of an account takeover attack" "with maybe abnormally high number" "of log-in failures or password resets?"
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=110)** Having key measurements about your runtime security posture allows the team to make meaningful decisions.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=117)** Next, instrumentation should provide API's.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=120)** Throughout the course, we've been talking about exit codes and integration into a CICD pipeline.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=125)** These status codes clue in parent processes about what happened.
>
> **[2:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=129)** Well, for runtime, it gets a little messy, and chaining software together is done primarily by the API's that they provide.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=136)** Most of the major open source and commercial solutions provide API's, but this is something you want to be cognizant about when choosing a solution.
>
> **[2:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=143)** I like to think of each piece of software in my pipeline as a component that can be switched in and out as needed.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=148)** API's enable that type of thinking and flexibility.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=152)** Another ingredient of DevSecOps instrumentation in the operate stage, is that it promotes learning back to the subsequent pipeline stages.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=160)** This instrumentation can key you in on weaknesses, or can also show you what's abnormal.
>
> **[2:46](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=166)** An easy way to start with this is to integrate with Slack or other chat ops applications, and emit relevant security information to the developers who support an application.
>
> **[2:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=175)** The last ingredient is being attacker driven.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=177)** This means we don't live in theory.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=179)** We either are watching what real attackers are doing, or in some cases, we ask attackers to come and try to hack us.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=186)** This approach is also very pragmatic.
>
> **[3:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=189)** Don't tell developers about all the possible vulnerabilities.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=192)** Tell them about the real ones.
>
> **[3:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=194)** Don't focus on application abuse and misuse scenarios that we created on a white board.
>
> **[3:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=199)** Instead, deal with ones that are actually happening against your organization today.
>
> **[3:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/keeping-security-in-operate?u=76281980&t=203)** Well next up, let's talk about a few modern approaches to application security that are changing the game.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), ids (1), waf (1), cicd (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### Modern application security
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=0)** - [Instructor] If the attackers are going to try and hack us anyway, why not offer them a prize and some money to find vulnerabilities and report back to us?
>
> **[0:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=7)** The logic may sound weird but this is the backbone of the idea of bug bounties.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=12)** Bug bounties reward any submissions for vulnerabilities found in production for a website or any piece of software.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=18)** Security researchers sign up, then submit their findings to the organization hosting the bug bounty.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=24)** If their findings are valid vulnerabilities, then they receive a prize and often money.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=29)** Not surprisingly Google and Mozilla do them but also the federal government does them too.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=35)** Running a bug bounty can be a little tricky.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=37)** It involves coordinating legal and security to set up the program and review the results as they come in.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=43)** You then have to find participants so it turns into a bit of marketing work as well.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=48)** All in all this is not something to undertake lightly.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=51)** Because of this there are a few commercial services that run bug bounties.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=55)** There are two companies that I generally recommend.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=58)** Bugcrowd and HackerOne.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=62)** Both of these are well known and well regarded.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=65)** They also have a roster of skilled testers and hackers.
>
> **[1:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=68)** Now, to say that running a bug bounty always goes well is not really the case.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=73)** There have been notable cases from Facebook, Uber and others where a bug bounty participant attempts to hold their findings ransom to get a bigger payout.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=82)** Using a service can help mitigate some of this risk.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=86)** Well, okay, let's switch gears to defending applications.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=89)** One area that has become a hot topic lately is RASP or runtime application self-protection.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=95)** You can logically add in next-gen WAF if you hear that term tossed around as well.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=101)** This is instrumentation of the web application for many of the same threats that traditional WAF solved for.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=107)** But this new breed of tools are considerably less false positive prone and way more effective overall.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=113)** These products solve for OWASP injection attacks but the reason why this area is growing is that they offer the ability to instrument other parts of your application.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=122)** Want to stop application abuse or account takeovers or ATOs it's over called?
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=127)** Or stop bots and scrapers?
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=130)** These tools are positioned at the application layer to actively take defensive measures.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=135)** Presently there's not a great open source offering for this but you can get pretty far with ModSecurity + ELK + StatsD but most solutions that I've seen are home grown and the industry really could use a good open source option here.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=149)** There are some commercial options as well.
>
> **[2:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=151)** Full disclaimer here, I work at Signal Sciences, so I'm obviously biased about which I prefer.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=156)** I wouldn't work there if I didn't.
>
> **[2:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=158)** However, any of these tools is better than having none of them.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=161)** Most of these are limited to Java and .NET, notably Waratek and Contrast.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=165)** Prevoty and tCell have more language support adding in PHP, Python and Ruby and Signal Sciences takes a different architectural approach that allows it to be a little more platform and language agnostic.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=177)** In the next video, we'll take a look at what types of instrumentation these provide and why they are such great tools for runtime defense.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/modern-application-security?u=76281980&t=184)** To sample the space, we'll take a quick look at the one I'm most familiar with, Signal Sciences.

> [!info]- Semantic Content
>
> **Env Vars:** waf (2), rasp (1), owasp (1), elk (1), net (1)
> **CLI Commands:** find (2), php (1), python (1), ruby (1)
> **Code Keywords:** case. (1), let (1), switch (1), self (1), for. (1)
> **Code Identifiers:** tcell (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Signal Sciences in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=0)** - [Narrator] The ideas behind RASP and next-gen WAF sound good, but what do they look like in practice?
>
> **[0:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=7)** Let's take a look at what they offer for modern web applications in APIs.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=11)** As I mentioned, all the options in this space at the time of recording are commercial.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=15)** The product we are going to look at is Signal Sciences.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=18)** And since I work there, I'm going to try and stay neutral here, and avoid marketing hype.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=22)** I'm skipping all the setup steps and moving straight to the product.
>
> **[0:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=26)** We have a demo environment set up that is constantly being attacked, so that's where I'm heading.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=31)** In a browser, lets head over to Signal Sciences.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=34)** You can see that, right up front, OWASP injection attacks are being detected.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=38)** We can take a quick look at what is happening, and see the requests that are triggering these events.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=43)** Lots of cross-site scripting and command execution in here.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=47)** But with all of these new-breed tools, OWASP coverage is pretty good.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=52)** And this is not too unlike WAFs from a decade ago, in terms of this type of coverage.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=58)** What's new is the ability to instrument any flow in an application, and tie that together with other detected attack types.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=65)** One example of these are account takeovers.
>
> **[1:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=68)** Here, login attempt, failure, and success are instrumented, as well as registration actions in the application.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=76)** Many people choose to instrument password reset flows, as well.
>
> **[1:20](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=80)** You can see we have mostly successful logins, but a spike in failures or registrations is now actionable.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=86)** You can either set the product to handle blocking, or alert your team to look into the issue further.
>
> **[1:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=91)** Previously, inspection of something like Auth, meant new code that the developers would have to write.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=96)** Now you can set your tools to monitor anything in the HTTP request.
>
> **[1:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=100)** Tag it, graph it, alert on it or block it.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=104)** I'll go back to the homepage, and click on configure, and then templated rules.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=109)** You can see that for a login attempt, it's easy to set up what constitutes a login attempt, and then let the tool decide what to do with it.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=117)** There is also a full-fledged rules engine, which can inspect any part of the HTTP traffic, to make it as specific as needed on an application-by-application basis.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=127)** These new tools are also less false-positive prone.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=130)** Once the tool detects enough badness going on, then it blocks it.
>
> **[2:14](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=134)** In Signal Sciences parlance, these are events, and we can see what these look like.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=139)** I'm headed to the main page, and viewing one of our flagged bad actors.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=144)** Here we see a timeline of when the bad actor was detected, when it was stopped, and even a sample of the types of requests that were flagged.
>
> **[2:31](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=151)** If we were interested, we could drill down deeper into any of these items and see more details.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=156)** These tools also integrate across your DevSecOps Toolchain.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=160)** I'm going to manage, and then look in at Integrations.
>
> **[2:44](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=164)** And we can see Slack, PagerDuty and a lot of other options in here.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=168)** These integrations promote the involvement of others in your organization.
>
> **[2:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=171)** It means that they can still participate with security, without being forced to log in to a new system.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=177)** They provide feedback for the tools they already use.
>
> **[3:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=180)** To wrap up, this is an exciting space, and I think it is only getting better.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/signal-sciences-in-practice?u=76281980&t=184)** Moving application security and defense out of CDNs and proxies and closer to the application is definitely going to be the new way to secure applications.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2), http (2), rasp (1), waf (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **Code Keywords:** let (2)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** slack (1)
> **UI Navigation:** click on (1)

#### Cloud security monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=1)** - [Instructor] Have you ever had the frustrating moment where you couldn't figure out how to get the Amazon S3 bucket permission set right for your application to have access to it?
>
> **[0:08](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=8)** What did you do?
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=9)** Just give up?
>
> **[0:10](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=10)** Well, if you're like me, you probably opened up the permissions for the bucket as much as you possibly could.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=16)** Of course, you promised yourself once you got it working, you'd go back and set it back to normal, which of course there's probably only a 50-50 chance there that that would ever happen.
>
> **[0:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=26)** With developers sharing access to the cloud infrastructure, this story plays out at company after company and has created a new breed of offerings around this space that we will call cloud security monitoring.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=37)** These tools check for configuration in the cloud to make sure that it hasn't changed from its last known good state.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=42)** They also assess whether you are in or out of compliance across your entire cloud infrastructure.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=47)** Some products call this as compliance's codes since you assert your standards for your cloud infrastructure in code.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=54)** Audit is the next piece which is similar to compliance, but this is the auditability and the ability to know what happened in the past.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=61)** This includes all past changes to your cloud infrastructure.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=64)** Many of the products out there also offer hardening recommendations and can alert if you're setting configuration that is not aligned with current best practices for hardening for whatever cloud provider you're using.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=76)** There are several software as a service offerings for this product category such as Threat Stack, AlienVault, and [Evident.io](https://Evident.io).
>
> **[1:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=89)** If you're doing a multi-cloud infrastructure, then these are often the best bets for you.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=94)** I generally tend to favor Threat Stack.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=96)** But if you're using their other products, AlienVault makes a pretty compelling offering for the whole solution.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=102)** However, if you're all in one cloud provider like Amazon Web Services, then you can get pretty far with the services AWS provides.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=110)** These include the not so excitingly named but very powerful AWS Config along with CloudTrail, Inspector, and GuardDuty.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=120)** Amazon says that AWS Config was built to automate assessment of your resource configurations, your resources changes, and provide the ability to ensure continuous compliance across your Amazon infrastructure.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=132)** And many people swear by it as the best way to get this feature set to secure their cloud infrastructure.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/cloud-security-monitoring?u=76281980&t=137)** No matter what option you go with here, be sure to put one of these solutions in your DevSecOps tool chain.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3)
> **Analogies:** similar to (1), such as (1)
> **Code Keywords:** assert (1)
> **URLs:** [evident.io](https://evident.io) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=0)** - [James] Now that we've reached the end of the course, I'd like to remind you what the task is before us.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=5)** Specifically, I'd like to speak to security's new role.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=9)** It's a role of empathy and enablement, seeking to help others in the organization succeed in their job with as little undue burden from security as possible.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=18)** Next, security needs to be fast and non-blocking.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=22)** We are a culture of yes, not a culture of no.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=25)** Next, we choose not to slow delivery of software down.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=29)** We consciously make decisions that help us go faster and safer.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=34)** Of course, we now look for opportunities to automate as much as possible.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=38)** All of this comes together in what I see as our big test.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=42)** It's that security provides value to the organization by making security normal or just on by default.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=51)** Security just becomes part of the way we ship software, not some separate team that operates outside of the rest of the software engineering team.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=59)** This is DevSecOps.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=61)** It is fun, exciting, and to be honest, a little daunting.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=65)** Finishing this course, you may be thinking you now have to implement a new tool or three at every stage of the pipeline.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=72)** While that is admirable, my advice to you is the same advice that Charles Nwatu, the director of security at Stitch Fix, told me he gives to all of his new team members, and that's this.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=83)** Do less, better.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=86)** This means that in the coming weeks, take time to implement just one tool or practice from the course.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=92)** Start with an easy win, maybe by adding OWASP dependency check or maybe Gauntlet to your build system.
>
> **[1:40](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=100)** As you work your way through the pipeline, you might want to also check out a book that I've found pretty useful, Agile Application Security.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=107)** It can serve as a resource for you, and I found the sections on audit and compliance to be particularly helpful.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=113)** As I have mentioned throughout the course, there are other courses in the library on automating security testing, and the entire DevOps Foundations series, which can serve as a great refresher on DevOps.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-building-a-secure-continuous-delivery-pipeline/next-steps?u=76281980&t=123)** Well, thank you for watching this course and I wish you luck in your DevSecOps journey.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (1), this. (1)
> **CLI Commands:** make (1)
> **Env Vars:** owasp (1)
> **Definitions:** means that (1)
> **Speakers:** - [james] (1)


## Instructor

- [[James Wickett]]

## Resources

- Exercise files available

## Skills Covered

- DevSecOps
- Continuous Delivery (CD)

## Path Context

### In [[Get Ahead in DevSecOps]]
← [[DevSecOps- Automated Security Testing]] | **3 of 5** | [[Application Security in DevSecOps]] →

## Appears In

- [[Get Ahead in DevSecOps]]

## Related Courses

_Courses sharing skills:_

- [[Continuous Delivery for Cloud Native Java Apps]] — Continuous Delivery (CD)
- [[DevSecOps- Tips for Success]] — DevSecOps
- [[Application Security in DevSecOps]] — DevSecOps
- [[DevSecOps- Automated Security Testing]] — DevSecOps
- [[Devops Foundations Devsecops]] — DevSecOps

---

[↑ Back to top](#)