---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: application-security-in-devsecops-25151529
url: "https://www.linkedin.com/learning/application-security-in-devsecops-25151529"
duration_minutes: 97
duration: 1h 37m
level: Intermediate
updated: 1/27/2025
learners: 2850
skills:
  - Application Security
  - DevSecOps
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQF37BYmtSlFBA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370992396?e=2147483647&amp;v=beta&amp;t=CjGpKT_f8zYrYyZcLPNaIMhrlof7c1-_AgLvfRvC2OQ"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Get Ahead in DevSecOps]]'
prev_courses:
  - '[[DevSecOps- Building a Secure Continuous Delivery Pipeline]]'
next_courses:
  - '[[DevSecOps- Tips for Success]]'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":4,"total":5,"prev":"DevSecOps- Building a Secure Continuous Delivery Pipeline","next":"DevSecOps- Tips for Success"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/application-security
  - skill/devsecops
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Application%20Security%20in%20DevSecOps.md)

![Application Security in DevSecOps](https://media.licdn.com/dms/image/v2/D4E0DAQF37BYmtSlFBA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736370992396?e=2147483647&amp;v=beta&amp;t=CjGpKT_f8zYrYyZcLPNaIMhrlof7c1-_AgLvfRvC2OQ)

# Application Security in DevSecOps

> With DevOps continuing to grow in prominence, modern businesses expect applications to be built with greater speed and efficiency than ever before. Even so, the importance of application security cannot be downplayed for the sake of a pressing deadline. In this course, learn how to build a continuous application security process that meshes with the faster-paced world of DevOps. Instructor Tim Cha

> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529) | 1h 37m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. DevSecOps Basics** (4 videos)
- **3. 2. Continuous Application Security** (9 videos)
- **4. 3. Practicing Continuous Application Security** (5 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Introduction to application security in DevSecOps
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=0)** - [Tim] In today's fast-paced software development landscape, DevOps teams are constantly pressured to build applications quickly and maintain agility.
>
> **[0:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=9)** Security teams face the critical challenge of integrating robust security practices without compromising development speed.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=16)** DevSecOps bridges the gap by embedding security directly into the development process.
>
> **[0:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=22)** This course provides a comprehensive framework for building a continuous application security strategy that aligns seamlessly with DevOps methodologies.
>
> **[0:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=31)** Throughout this training, we'll explore the core principles of DevSecOps, the strategic role of application security in modern development, practical integration of security tools like TruffleHog and DefectDojo, and techniques for embedding security seamlessly into DevOps workflows.
>
> **[0:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/introduction-to-application-security-in-devsecops?u=76281980&t=48)** I'm Tim Chase, and I'll guide you through transforming security from a potential bottleneck into a collaborative, integrated component of your software development lifecycle.

> [!info]- Semantic Content
>
> **Speakers:** - [tim] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=1)** - [Instructor] Let's take some time to understand some of the concepts that we should be familiar with before starting this course, and then some of the software that we can install before beginning this course that will make the exercises go more smoothly.
>
> **[0:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=15)** First, you should have a high-level DevOps understanding.
>
> **[0:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=18)** We will talk a little bit about DevOps in this course and the CI/CD process, but it will really help if you have a general high-level understanding of what DevOps is and how it's integrated into an SDLC process.
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=32)** You should also have some general information security experience.
>
> **[0:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=36)** We're going to be talking about some concepts related to application security and DevSecOps where a background in information security would really be helpful.
>
> **[0:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=46)** And finally, we're going to be running some commands from the terminal, so being able to understand how to bring up a terminal in Windows or Linux would really be advantageous.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=57)** Before starting the course, you can also set up some of the tools that we'll be using.
>
> **[1:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=62)** The first tool is Semgrep.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=64)** If you go to [semgrep.dev](https://semgrep.dev), you can set up an account.
>
> **[1:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=68)** You can set it up at no cost.
>
> **[1:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=70)** That way, when we go through the exercise, you'll be ready to go.
>
> **[1:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=73)** The second tool is TruffleHog.
>
> **[1:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=75)** If you go to [github.com/trufflesecurity/trufflehog](https://github.com/trufflesecurity/trufflehog), there are instructions on how you can install this for your particular operating system.
>
> **[1:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=87)** We'll be writing and executing a Python script in this course, so it will help if you go ahead and have this installed.
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=95)** We'll be using Contrast Security for our IAS section.
>
> **[1:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=99)** You can set up a free account through their community edition.
>
> **[1:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=105)** You should also have a GitHub account already set up.
>
> **[1:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=108)** And when you do, go to [github.com/webco/webco](https://github.com/webco/webco),
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=117)** and fork this into the GitHub repository that you just created.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=122)** You can just hit create a new fork and that will fork it into your GitHub account.
>
> **[2:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=127)** And finally, we will be using Visual Studio or VS Code.
>
> **[2:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-you-should-know?u=76281980&t=131)** It's free, so go ahead and download this at code.[visualstudio.com/download](https://visualstudio.com/download), and download the installation appropriate for your operating system.

> [!info]- Semantic Content
>
> **Tools:** github (5), terminal (2), visual studio (1), vs code (1)
> **Prerequisites:** set up (4), install (2)
> **URLs:** [github.com](https://github.com) (2), [semgrep.dev](https://semgrep.dev) (1), [visualstudio.com](https://visualstudio.com) (1)
> **CLI Commands:** make (1), cd (1), python (1)
> **Code Keywords:** finally, (2), let (1)
> **UI Navigation:** go to (3)
> **Env Vars:** sdlc (1), ias (1)
> **Exercise Files:** download the (1)


### 2. 1. DevSecOps Basics

#### What is DevSecOps?
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=1)** - [Instructor] DevOps and security don't always seem to play well together, so it's important to see how we can make them work with each other.
>
> **[0:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=11)** Let's start by talking about the problems of security in the DevOps world.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=16)** Some of the core principles of DevOps may seem to be at odds with the traditional security practices.
>
> **[0:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=23)** Security has historically lagged behind the rapid pace of development in many organizations.
>
> **[0:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=29)** As application release cycles continue to accelerate, security cannot be the bottleneck.
>
> **[0:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=36)** We must find ways to adapt security practices to keep up without compromising quality or increasing risk.
>
> **[0:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=45)** The core challenge is balancing speed and agility with robust security testing.
>
> **[0:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=51)** False positive and false negative rates must remain low even as processes become more efficient.
>
> **[0:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=58)** Security cannot be an afterthought in the DevOps transformation.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=61)** It must be seamlessly integrated.
>
> **[1:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=65)** There are a few key considerations for aligning security with DevOps.
>
> **[1:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=70)** Staffing.
>
> **[1:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=71)** Should security be embedded within each DevOps team or provided as a shared service across teams?
>
> **[1:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=80)** Automation.
>
> **[1:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=81)** How can security testing and controls be automated to keep pace with frequent releases?
>
> **[1:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=88)** Visibility.
>
> **[1:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=89)** How can security gain full visibility into the application pipeline to identify and address vulnerabilities early?
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=97)** The goal should be to make security a true enabler of DevOps, not a roadblock.
>
> **[1:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=103)** With the right approach, security can become more responsive, efficient, and effective in the new delivery model.
>
> **[1:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=112)** DevSecOps integrates security practices directly into the DevOps lifecycle.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=117)** The core idea is to apply the same DevOps principles of collaboration, automation, and continuous improvement to security.
>
> **[2:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=125)** Rather than security being a separate siloed function, DevSecOps embeds security seamlessly into the application delivery process.
>
> **[2:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=133)** This allows security to scale alongside DevOps teams rather than falling behind.
>
> **[2:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=139)** The goal of DevSecOps is to make security an integral, transparent part of the DevOps workflow, not an afterthought or a roadblock.
>
> **[2:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=148)** By automating security testing and controls, security can keep pace with the rapid continuous delivery.
>
> **[2:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=156)** DevSecOps offers several key benefits when implemented effectively.
>
> **[2:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=160)** Scalability.
>
> **[2:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=162)** Security can scale alongside DevOps teams, adapting to changes in process, tools, and sprint cadence.
>
> **[2:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=170)** Responsiveness.
>
> **[2:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=172)** DevSecOps allows security to be more agile, addressing defects, changes, and new feature requests in lockstep with development.
>
> **[3:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=181)** Collaboration.
>
> **[3:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=183)** By blending security responsibilities into DevOps teams, DevSecOps fosters tighter cross-functional collaboration.
>
> **[3:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=191)** Ultimately, the goal of DevSecOps is to make security a seamless enabler of the DevOps lifecycle, not a separate gating function.
>
> **[3:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=201)** When done well, it can unlock significant improvements in speed, quality, and risk management.
>
> **[3:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=209)** The three most important principles of DevSecOps are speed.
>
> **[3:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=213)** Security must keep pace with accelerating development and release cycles.
>
> **[3:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=218)** Automation is key to achieving this.
>
> **[3:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=221)** Quality.
>
> **[3:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=222)** Improved speed cannot come at the expense of security effectiveness.
>
> **[3:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=226)** False positive and false negative rates must be maintained or improved.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=232)** Empowerment.
>
> **[3:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=233)** Security teams must shift from a gatekeeper role to an advisory auditing role, empowering DevOps teams with more security ownership and responsibility.
>
> **[4:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=243)** The overarching goal is to make security a collaborative, embedded partner in the DevOps process, not a separate silo or bottleneck.
>
> **[4:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-devsecops?u=76281980&t=252)** This requires rethinking security's role, tools, and processes to work in harmony with.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** function (2), let (1), continue (1), this. (1)
> **Speakers:** - [instructor] (1)

#### How is application security different
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=0)** - [Instructor] In this course, we'll explore how application security can be seamlessly integrated into the DevOps lifecycle through DevSecOps practices.
>
> **[0:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=9)** While there is no single silver bullet, we'll cover a range of tools and processes to help bridge the gap between security and agile delivery.
>
> **[0:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=18)** We'll start by examining traditional application security approaches and how they differ from a DevSecOps model.
>
> **[0:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=26)** Understanding the limitations of legacy security practices is key to driving the necessary cultural and process changes.
>
> **[0:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=35)** In a traditional setup, security is often siloed as a separate team or function.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=41)** When development teams are ready to test their code, they'll typically pass it off to the security team for review and vulnerability scanning.
>
> **[0:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=49)** This handoff based approach introduces several challenges.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=53)** It's a manual, document-heavy process with security teams providing lengthy reports for developers to interpret.
>
> **[1:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=60)** It's inherently slow and cumbersome, out of sync with the pace of agile development.
>
> **[1:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=65)** It creates an us versus them dynamic with security and development teams at odds over risk tolerance and false positive rates.
>
> **[1:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=74)** Fundamentally, this legacy security model is incompatible with the core principles of DevOps: automation, collaboration, and continuous improvement.
>
> **[1:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=85)** As you can see, this traditional workflow is long, complex, and ill suited for today's rapid release cycles.
>
> **[1:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=92)** It introduces significant delays and friction between the teams.
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=97)** The key issues with the old security approach are: Lack of integration.
>
> **[1:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=102)** Security is a completely separate function, disconnected from the development lifecycle.
>
> **[1:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=108)** Manual processes.
>
> **[1:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=110)** Security testing and reporting is a slow, document-driven exercise.
>
> **[1:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=116)** Misaligned incentives.
>
> **[1:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=118)** Security and development teams often find themselves at odds over risk tolerance.
>
> **[2:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=123)** And fourth, inability to scale.
>
> **[2:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=126)** The manual model cannot keep pace with accelerating release timelines.
>
> **[2:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=131)** All of these limitations run counter to the core principles of DevOps: automation, collaboration, and continuous improvement.
>
> **[2:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=139)** A new security model is needed to enable DevOps success.
>
> **[2:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=145)** The solution is to apply DevOps principles directly to application security to DevSecOps.
>
> **[2:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=152)** This means automating security testing and controls into the build and development pipeline, integrating security seamlessly into the development workflow, and providing security results directly to the DevOps teams in their existing tools and processes.
>
> **[2:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=168)** By making security an embedded automated part of DevOps, we can achieve the speed, quality, and scalability required in a modern delivery model.
>
> **[2:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=179)** The key aspects of this DevSecOps workflow are: Security testing is triggered automatically with each build, running in parallel with other development activities.
>
> **[3:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=191)** Test results are fed directly into the DevOps team's existing issue tracking system, like Jira or Slack, for immediate visibility and remediation.
>
> **[3:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=201)** Security thresholds can be set to automatically pass/fail builds based on predefined risk tolerances.
>
> **[3:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=210)** And the security testing process is standardized and repeatable regardless of frequency, daily, weekly, et cetera.
>
> **[3:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/how-is-application-security-different?u=76281980&t=218)** This integrated automated approach is essential for aligning security with the speed and agility of DevOps.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), pass (2)
> **Tools:** jira (1), slack (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### The key to DevSecOps is continuous
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=0)** - [Instructor] The core principles of both DevOps and DevSecOps center around the idea of continuous everything: testing, integration, delivery and monitoring.
>
> **[0:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=12)** Maintaining this continuous flow is essential for achieving the desired speed and agility.
>
> **[0:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=20)** The two main goals of DevOps are speed, the ability to quickly respond to changing business needs, priorities and defect fixes through rapid, frequent releases and constant feedback, implementing processes that provide real time visibility into the health of the application and development pipeline.
>
> **[0:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=42)** To achieve these goals, DevOps relies on two key practices: continuous integration, CI, and continuous delivery, CD.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=53)** Continuous integration is a fundamental DevOps practice that involves regularly merging code changes into a shared repository, triggering automated build and testing processes.
>
> **[1:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=65)** Instead of infrequent, big bang integration efforts, CI promotes frequent small code check-ins multiple times a day, automated build unit testing, and static analysis and earlier detection of issues and defects.
>
> **[1:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=83)** This continuous integration approach allows development teams to identify problems quickly and integrate changes smoothly.
>
> **[1:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=92)** Building on the foundation of CI, continuous delivery automates the release process.
>
> **[1:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=98)** Once code changes past the CI pipeline, they can be automatically deployed to staging or production environments.
>
> **[1:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=106)** CD enables automated provisioning and deployment of application artifacts, the ability to release new features and updates on demand and consistent, repeatable release processes.
>
> **[2:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=120)** CD brings the continuous mindset all the way through to customer facing environments, shortening the feedback loop.
>
> **[2:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=129)** For organizations with mature CI/CD practices, continuous deployment takes a concept even further.
>
> **[2:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=136)** In this model, successful completion of the automated testing pipeline triggers an immediate deployment to production.
>
> **[2:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=143)** Continuous deployment requires exceptional development, testing and release controls to work effectively.
>
> **[2:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=151)** It represents the pinnacle of DevOps maturity, radically accelerating time to market.
>
> **[2:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=158)** As this diagram illustrates, the core of DevOps is this continuous feedback driven lifecycle.
>
> **[2:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=165)** Changes are frequently integrated, automatically tested, and continuously delivered or deployed, creating an ever improving accelerating process.
>
> **[2:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=175)** To make this continuous DevOps model work, application security must be seamlessly integrated as well.
>
> **[3:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=182)** In the upcoming sections, we'll explore how to embed security testing and controls directly into the CI/CD pipeline, empowering DevOps teams to own and manage the security process.
>
> **[3:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=195)** The key is to make security testing an automated, continuous part of the development workflow, not a separate manual function.
>
> **[3:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/the-key-to-decsecops-is-continuous?u=76281980&t=204)** By handing security tools and processes over to the DevOps team, we can achieve the speed and agility required without sacrificing security, quality or effectiveness.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (5), make (2)
> **Code Keywords:** static (1), function (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### What is a DevOps pipeline?
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=1)** - [Presenter] The modern development environment is a dynamic interconnected ecosystem characterized by frequent releases.
>
> **[0:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=9)** Gone are the days of months long deployment cycles, today we're talking about continuous delivery, pushing updates daily, sometimes even hourly.
>
> **[0:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=17)** This rapid iteration allows businesses to respond quickly to market demands and user feedback.
>
> **[0:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=25)** Also, comprehensive automation, from code commit to production deployment, every step is automated.
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=32)** This eliminates human error, reduces manual overhead, and ensures consistent repeatable process across the entire software development lifecycle.
>
> **[0:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=42)** In collaborative multi-team approach, breaking down traditional silos between development, operations and security teams, we're creating a culture of shared responsibility where communication and collaboration are key to delivering high quality software efficiently.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=61)** A DevOps pipeline is much more than a technical workflow, it's a strategic approach to software delivery.
>
> **[1:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=68)** It's a set of automated processes and tools designed to transform development and operations professionals collaborate.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=76)** Imagine a seamless end-to-end process where code moves from a developer's imagination to a production environment with speed, reliability, and precision, that's the power of a DevOps pipeline.
>
> **[1:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=88)** It bridges gaps, reduces friction, and creates a unified path from concept to customer.
>
> **[1:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=96)** What separates a good pipeline from a great one?
>
> **[1:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=99)** Here are three critical characteristics.
>
> **[1:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=101)** Speed of development, in today's competitive landscape, velocity is vital, a good pipeline dramatically reduces the time from code commit to production deployment, allowing organizations to innovate and respond to market changes rapidly.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=117)** Comprehensive automation, beyond simple build and deployment process, we're talking about end-to-end automation.
>
> **[2:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=125)** This includes code validation, security scanning, performance testing and deployment, all happening automatically and consistently.
>
> **[2:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=134)** And then immediate actionable feedback, real-time insights are crucial, a superior pipeline provides instant feedback to developers, enabling quick corrections and maintaining high code quality throughout the development process.
>
> **[2:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=148)** And DevSecOps represents the next evolution of the DevOps pipeline, integrating security directly into the development process.
>
> **[2:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=156)** Strategic security automation, instead of treating security as a final point, we're embedding security tools and checks throughout the pipeline.
>
> **[2:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=164)** Automated vulnerability scanning, compliance checks and risk assessments happen continuously.
>
> **[2:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=170)** A balanced approach, we're achieving the perfect blend of speed and security, no more choosing between rapid development and robust protection, DevSecOps ensures both can coexist.
>
> **[3:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/what-is-a-devops-pipeline?u=76281980&t=182)** And shared security responsibility, developers are no longer passive recipients of security recommendations, they become active participants in the security process, understanding and addressing potential risks as an integral part of their development.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)


### 3. 2. Continuous Application Security

#### Continuous static scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=0)** - [Instructor] Now we'll dive into the practical application of security testing tools and how to integrate them into the DevOps pipeline.
>
> **[0:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=8)** We'll cover several key types of application security testing, discussing what they are, how they can be automated, and walking through live demos.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=16)** We'll start with static security analysis, which has been a foundational application security practice for many years.
>
> **[0:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=25)** Static security testing involves analyzing the application source code to identify potential vulnerabilities without executing the code.
>
> **[0:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=34)** The key advantages are it's an early shift-left security check in the development lifecycle, and it can catch certain classes of vulnerabilities that are difficult to find through dynamic testing.
>
> **[0:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=47)** It's language-specific, so you have to use tools tailored to the languages in the code base.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=53)** The potential downsides are that some static analysis tools can generate a high volume of false positives, requiring careful tuning and configuration.
>
> **[1:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=62)** Maintaining an effective static testing process is critical for DevSecOps.
>
> **[1:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=68)** When selecting and integrating a static security testing tool, there are several key qualities to look for.
>
> **[1:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=74)** Speed.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=76)** The tool must be able to analyze code bases quickly, keeping pace with frequent CI/CD cycles.
>
> **[1:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=82)** Accuracy.
>
> **[1:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=83)** Configurability and tuning options can help minimize false positives.
>
> **[1:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=89)** API/CLI support.
>
> **[1:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=91)** Automated headless execution is essential for DevOps integration.
>
> **[1:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=96)** Bug tracker integration.
>
> **[1:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=98)** Seamless handoff of results to the development team's issue tracking system.
>
> **[1:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=103)** Automating the static testing process and directly feeding results into the developer workflow is crucial for DevSecOps success.
>
> **[1:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=112)** Here's an example of how static security analysis can be integrated into a continuous delivery pipeline.
>
> **[1:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=118)** Developer commits code changes to the shared repository.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=122)** The CI system triggers an automated build, including a static code scan.
>
> **[2:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=128)** The static analysis tool examines the source code and reports any findings.
>
> **[2:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=133)** The results are automatically pushed into the team's bug tracking system, like Jira, GitHub, issues.
>
> **[2:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=139)** And finally, developers receive immediate feedback on security issues into their existing workflows.
>
> **[2:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=147)** This tight integration ensures that security testing is a repeatable, continuous part of the development process, not a separate manual gating function.
>
> **[2:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=158)** Now it's time for a demo.
>
> **[2:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=159)** In this demo, we'll walk through automating a static security scan using a popular web-based tool.
>
> **[2:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=166)** You'll see how the tool can be executed from the UI and how the findings are reported back into a defect tracking system.
>
> **[2:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=173)** This represents just one piece of the overall DevSecOps puzzle.
>
> **[2:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=178)** In upcoming videos, we'll explore other application security testing techniques and how to weave them seamlessly into the CI/CD pipeline.
>
> **[3:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=186)** Let's go over to our browser.
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=189)** You can see here I am in GitHub, and I'm looking at the fork that I created from WebGoat.
>
> **[3:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=198)** One of the precursors to starting the course was that you go to WebGoat and you create your own fork and your GitHub repository for WebGoat, and that's what you're looking at here.
>
> **[3:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=208)** Next, we're going to go over to a tool called Semgrep.
>
> **[3:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=211)** It's [semgrep.dev](https://semgrep.dev), as you can see here.
>
> **[3:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=220)** Go ahead and sign up.
>
> **[3:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=221)** It's going to have you enter your username, a password.
>
> **[3:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=226)** It'll create an organization.
>
> **[3:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=228)** But what we're going to be doing here today is free.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=232)** For more complicated things, you can pay for Semgrep, but what I'm going to show you here today is free.
>
> **[3:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=239)** And if you remember, one of the keys that we want to talk about is we really want to integrate our testing tools in with our code base or our pipeline.
>
> **[4:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=248)** And you can do this here in Semgrep, so let's walk through it.
>
> **[4:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=254)** Inside of Projects, okay, we're going to go to Scan a New Project.
>
> **[4:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=261)** Okay.
>
> **[4:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=262)** I'm going to go to CI/CD, GitHub, and I'm going to select WebGoat.
>
> **[4:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=278)** I'm going to hit Add CI Jobs.
>
> **[4:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=281)** From here, you can review the YAML file that's going to be committed to your GitHub repository.
>
> **[4:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=288)** As a part of this, when I set this up, there may be a few more screens that you have to go through to give permissions for Semgrep to integrate with your GitHub repository.
>
> **[4:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=296)** Go ahead and give those permissions.
>
> **[4:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=298)** I went ahead and allowed Semgrep to access all of my repos, since I really just use it for tests.
>
> **[5:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=303)** But you may want to limit which repositories you give them access to.
>
> **[5:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=306)** You can review the config here if you'd like.
>
> **[5:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=309)** I'm going to go ahead and commit the file.
>
> **[5:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=315)** Okay.
>
> **[5:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=316)** And now you can see here that it is starting a scan against WebGoat.
>
> **[5:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=322)** This was a previous one that I did, and this last scan was 14 hours ago.
>
> **[5:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=326)** The advantage of using these CI/CD scans is that anytime there are code changes, there's a GitHub action on the backend that's automatically going to trigger a Semgrep scan.
>
> **[5:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=340)** So this is going to take a little bit to scan.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=341)** And one of the things that I want to show you, as well, if you go to Settings and Integrations, you can set up an integration.
>
> **[5:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=349)** And this goes back to meeting the developers where they're at.
>
> **[5:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=352)** When you find issues inside of Semgrep, you can have them automatically sent to a Slack channel.
>
> **[5:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=359)** You can have them sent to Jira if that's what they use for task tracking.
>
> **[6:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=363)** Or if they have a different tool, there's a webhook that you can use to call to send in the results that way, as well.
>
> **[6:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=370)** So this is an important part of the static security testing and doing it continuously.
>
> **[6:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=377)** Let's go back to our projects.
>
> **[6:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=378)** And this scan is still in progress, and this may take just a little bit of time.
>
> **[6:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=384)** Okay, now you can see that our scan is finished.
>
> **[6:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=388)** So let's go look at the code findings.
>
> **[6:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=391)** And you can see here we have 247 matching findings.
>
> **[6:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=395)** And so you can go through here and look at all the different findings and go line by line through the different static analysis.
>
> **[6:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=403)** But the idea is that you take the results from the scan and send them to Jira or send them to Slack or something like that, that developers can work in.
>
> **[6:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=414)** One thing to keep in mind is we may not want to send all of the issues straight to Jira or Slack.
>
> **[7:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=421)** You can start with the criticals or with the highs.
>
> **[7:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-static-scanning?u=76281980&t=423)** Send a few at a time so that they don't get overwhelmed.

> [!info]- Semantic Content
>
> **Code Keywords:** static (12), let (4), for. (1), finally, (1), function (1)
> **Tools:** github (7), jira (4), slack (3)
> **CLI Commands:** cd (4), find (2)
> **UI Navigation:** go to (4)
> **Env Vars:** api (1), cli (1), yaml (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [semgrep.dev](https://semgrep.dev) (1)

#### Continuous dynamic scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=0)** - [Instructor] The next type of application security testing we will cover is dynamic analysis.
>
> **[0:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=6)** This is the second most common security testing approach utilized by development teams, security professionals, and penetration testers alike.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=16)** Dynamic testing is akin to an automated penetration test.
>
> **[0:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=19)** It involves scanning a running web application to discover its pages, forms, links, and other attack surface areas.
>
> **[0:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=28)** The tool then systematically attempts to identify vulnerabilities by interacting with the application.
>
> **[0:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=34)** Unlike static analysis, which examines the source code, dynamic testing is largely language-agnostic.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=41)** As long as the application has a web interface, the testing can be performed.
>
> **[0:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=46)** From a security tester's perspective, dynamic testing is considered a black box approach, as the tester doesn't need to understand the inner workings of the application.
>
> **[0:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=56)** One key consideration when integrating dynamic testing into a CI/CD pipeline is to run it asynchronously.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=64)** Since these scans can be time-consuming, it's best to kick them off in the background and allow the build process to complete rather than holding up the entire pipeline.
>
> **[1:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=75)** When selecting a [[Dynamic Application Security Testing]] tool for DevSecOps, look at the following qualities.
>
> **[1:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=82)** Speed.
>
> **[1:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=83)** The tool must be able to complete scans quickly, keeping pace with frequent builds and releases.
>
> **[1:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=89)** Accuracy.
>
> **[1:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=90)** The tool should have strong detection capabilities for the technologies and languages used in your application.
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=97)** API/CLI support.
>
> **[1:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=99)** Automated headless execution is essential for seamless DevOps integration.
>
> **[1:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=105)** Bug tracker integration, the ability to directly feed findings into the development team's issue tracking system.
>
> **[1:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=113)** Tools like OWASP ZAP and Burp Suite are popular open source options that meet many of these criteria.
>
> **[2:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=120)** Integrating [[Dynamic Application Security Testing]] into a CI/CD pipeline follows a similar pattern to static analysis.
>
> **[2:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=127)** The CI/CD process triggers a dynamic scan of the running application, typically after a successful build.
>
> **[2:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=135)** The DAST tool crawls the application, identifies vulnerabilities, and reports the findings.
>
> **[2:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=142)** The results are automatically pushed into the team's bug tracking system for developer remediation.
>
> **[2:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=149)** The key difference is running the dynamic scan asynchronously, allowing the build process to complete without being blocked by the potentially lengthy testing process.
>
> **[2:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=160)** In this demo, we'll walk through automating a dynamic application security scan using an online tool.
>
> **[2:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=167)** You'll see how the tool can be executed from the UI, how it interacts with the running application, and how we can report the findings back into the development workflow.
>
> **[2:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=177)** This represents another important piece of the DevSecOps puzzle.
>
> **[3:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=181)** In the next section, we'll explore additional security testing techniques and how to weave them seamlessly into the CI/CD pipeline.
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=189)** Let's go over to our tool.
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=190)** We're going to use a tool called Aikido.
>
> **[3:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=193)** So if you go to app.[aikido.dev](https://aikido.dev), you'll have to sign onto it, create an account.
>
> **[3:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=200)** This particular tool has a free option, but it also has a.
>
> **[3:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=205)** The paid option can be used if you have more projects that you want to scan.
>
> **[3:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=209)** But for our purposes, I'm using the free plan.
>
> **[3:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=213)** If you come here, when you first come in, and we go look at the feed, it's going to give you information on all of the applications that it's scanning.
>
> **[3:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=223)** One of the things that you notice is I personally signed in with my GitHub account.
>
> **[3:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=229)** It took in a lot of the GitHub repos that I have, and it performed a static analysis tool on them as well.
>
> **[3:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=236)** So this particular tool has SAST, and it has dynamic, which I think is an interesting combination.
>
> **[4:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=244)** What we're going to do is we're going to set up a dynamic scan inside of this tool.
>
> **[4:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=248)** So let's go down here to Domain.
>
> **[4:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=250)** Remember, with dynamic scans, we're going to point something at a URL.
>
> **[4:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=253)** It's not a code-based scan.
>
> **[4:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=256)** So let's go over here to google-gruyere, which is one of my favorite online applications that's meant to be vulnerable.
>
> **[4:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=265)** If you come here, if you go to go to google-gruyere.[appspot.com](https://appspot.com), hit Continue, now it's going to tell you a little bit about what this is about, how to use it, so on and so forth.
>
> **[4:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=286)** We're going to click this link right here, which is to start.
>
> **[4:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=289)** Okay.
>
> **[4:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=291)** It's telling you, "Hey, this is not secure.
>
> **[4:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=293)** Don't put any real data in here.
>
> **[4:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=294)** This is just for test."
>
> **[4:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=296)** We understand, so let's hit Resume, and now we're in the application.
>
> **[5:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=301)** What I'm really interested in is this URL, so take this URL, which is going to be unique to you.
>
> **[5:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=307)** Go back over to Aikido Security, hit Add Domain.
>
> **[5:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=316)** Go ahead and type in the domain.
>
> **[5:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=319)** For the Application Type, I'm going to use Front-End.
>
> **[5:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=323)** It's a CSP, safe cookie.
>
> **[5:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=327)** It's not really hosted third-party software.
>
> **[5:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=329)** So we're going to keep that, and then we're going to hit.
>
> **[5:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=332)** And right here, you could also link a domain to a repository.
>
> **[5:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=335)** So if this particular domain were associated with a repo that we were looking at earlier, you could link those together, but we're not going to do that.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=341)** And we'll hit Finish, and now the scan is going to happen.
>
> **[5:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=346)** So on the background, it's utilizing Zap to scan Google Gruyere's website that we just set up.
>
> **[5:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=354)** So we'll give it just a couple of minutes to finish the scan.
>
> **[5:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=359)** Now the scan is finished.
>
> **[6:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=361)** I'm going to click on Open, and you can see that it has found some potential issues.
>
> **[6:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=368)** This one, and it's even given you a potential fix time, how long it will take to fix, which is pretty cool.
>
> **[6:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=373)** But you can see here, this was from the dynamic scan.
>
> **[6:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=375)** This was not from the code.
>
> **[6:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=377)** And so you can go through here, and you can review these.
>
> **[6:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=381)** So once you have these, obviously, we don't want to send this webpage necessarily to our developers, so let's look at the integrations.
>
> **[6:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=388)** Okay, a couple that are of interest if you scroll down.
>
> **[6:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=392)** It really matters where your developers work.
>
> **[6:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=395)** If they work in Slack, you could take these results, and you can put them over to Slack.
>
> **[6:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=399)** If they work in Jira, once again, you could send these results over to Jira and add them as tasks that your developers can work through.
>
> **[6:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=410)** Another one that I like is the GitHub, the CircleCI sort of integrations.
>
> **[6:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=416)** Obviously, with GitHub, you can set it up so that if a particular PR has a security issue, it will stop the code from being merged.
>
> **[7:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=425)** Also with Jenkins and CircleCI, I like these two because you can also kick off scans or have the integrations between those so that if a particular vulnerability or number of vulnerabilities are reached, you could always stop the build from happening.
>
> **[7:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dynamic-scanning?u=76281980&t=441)** So those are a couple of plugins that I really like, but this is overall a great tool that you can use for dynamic testing, but you could also look at it for your SAST testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), static (3), interface (1), continue (1), type, (1)
> **Env Vars:** url (3), sast (2), api (1), cli (1), owasp (1)
> **Tools:** github (4), slack (2), jira (2)
> **UI Navigation:** go to (3), click on (1), scroll down (1)
> **CLI Commands:** cd (4)
> **URLs:** [aikido.dev](https://aikido.dev) (1), [appspot.com](https://appspot.com) (1)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)

#### Interactive application security scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=1)** - [Instructor] The next type of application security testing we'll explore is interactive application security testing, otherwise known as IAST.
>
> **[0:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=10)** This emerging technique is gaining significant traction as it aligns perfectly with the continuous principles of DevSecOps.
>
> **[0:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=18)** What is IAST?
>
> **[0:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=20)** IAST represents the newest evolution in application security testing.
>
> **[0:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=24)** Unlike static and dynamic scanning, which examine the code or running application from the outside, IAST works by instrumenting the application itself during runtime.
>
> **[0:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=36)** IAST tools achieve this by integrating directly with the application's execution environment.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=41)** For example, hooking into the Java Virtual Machine, JVM, for Java applications.
>
> **[0:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=47)** This allows the IAST agent to observe the application's behavior and data flows in real time, identifying security vulnerabilities as they occur.
>
> **[0:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=56)** The key benefits of this approach are continuous real-time monitoring during normal application usage, highly accurate vulnerability detection by observing actual data flows, and reduced false positives compared to static and dynamic analysis.
>
> **[1:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=73)** When selecting an IAST tool for your DevSecOps pipeline, key factors to consider are language support.
>
> **[1:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=80)** Ensure the tool integrates with the runtime environments used in your application stack.
>
> **[1:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=85)** Accuracy.
>
> **[1:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=87)** Look for low false positive rates and comprehensive vulnerability detection.
>
> **[1:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=92)** Overhead.
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=93)** Verify the IAST agent has minimal performance impact on the running application.
>
> **[1:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=98)** For this demo, we'll be using the community edition of a leading commercial IAST product.
>
> **[1:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=103)** You'll see how the tool instruments the application, the types of vulnerabilities it can detect, and how the results are surfaced back to the development workflow.
>
> **[1:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=112)** IAST represents a powerful addition to the DevSecOps security testing arsenal.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=117)** By embedding security testing directly into the application itself, it enables continuous, accurate vulnerability detection without introducing significant performance overhead.
>
> **[2:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=128)** The tool that we're going to use is Contrast Security.
>
> **[2:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=132)** At the moment they have a community edition that we can use for free.
>
> **[2:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=137)** I know at some point they may change this over to a trial-based edition of Contrast, but the setup will work the same.
>
> **[2:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=144)** It's been this way for years.
>
> **[2:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=146)** So for our purposes, we're going to use the community edition.
>
> **[2:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=151)** Go ahead and click it and you'll see I was automatically logged in because I was signed in.
>
> **[2:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=157)** If you have to create an account, go ahead and do so.
>
> **[2:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=162)** For the purposes of this demo, we are going to use the WebGoat source code.
>
> **[2:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=169)** If you go to this website, you can Google Contrast Security and WebGoat and this will come up.
>
> **[3:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=180)** But it will help you quickly set up the Java agent on WebGoat.
>
> **[3:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=185)** But let's walk through what we're going to do 'cause we're going to do things just a little bit differently here.
>
> **[3:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=193)** The first thing that we're going to do, we're going to bypass this setup.
>
> **[3:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=199)** And we're going to, the two things that you need to get from Contrast to work are a YAML file, which describes the properties, and you need to download the Contrast JAR.
>
> **[3:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=210)** Okay?
>
> **[3:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=212)** You can download the JAR by going into the Contrast documents, going into the installation part for agents, and you should see an install the Java agent.
>
> **[3:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=227)** Inside of here, if you scroll down, you can go to Maven Central.
>
> **[3:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=236)** And then there's a link in here to just download the JAR file directly, which is what I did.
>
> **[4:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=247)** Now you also need the YAML file.
>
> **[4:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=250)** So let's take a look at this YAML file.
>
> **[4:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=253)** I'm going to put a sample YAML file inside of the files for this course.
>
> **[4:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=258)** From there, you can edit it to work with your configuration.
>
> **[4:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=263)** You can see here I have it open in VS Studio and we're just going to modify a few things and I'll show you where to get this data.
>
> **[4:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=269)** We're going to need the URL that you use.
>
> **[4:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=272)** So just pay attention to the URL for contrast.
>
> **[4:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=276)** If you look back here, by default, it uses a production URL, but since we're using the community edition, just to make sure that we've got this set up for ce.[contrastsecurity.com](https://contrastsecurity.com).
>
> **[4:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=288)** You can see I have that here.
>
> **[4:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=290)** And then we're going to get the API key, the service key, and then your username.
>
> **[4:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=294)** Your username is just going to be your email address that you used.
>
> **[4:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=297)** So let's look at where we can get these API keys and these service.
>
> **[5:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=301)** Inside of here, you can go to your user settings and that's where you'll get the information that you need.
>
> **[5:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=309)** So you can take the API key and your service key and you can put that directly inside of the YAML file phrase.
>
> **[5:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=316)** So now you've downloaded the Contrast JAR file and you've downloaded the YAML file and got that set up.
>
> **[5:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=326)** If you go to the page on how to set up Contrast with WebGoat, there's a link on downloading WebGoat from GitHub.
>
> **[5:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=335)** So feel free to click that link and just download the source code and extract it is all that you have to do.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=341)** It will be a JAR file itself.
>
> **[5:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=345)** And if you scroll down, now we're going to focus on the command line.
>
> **[5:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=351)** So make sure that you, just for the simplicity sake, put the JAR file for WebGoat, the JAR file for Contrast, and the YAML file all in the same pack.
>
> **[6:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=362)** So now we have our JAR file downloaded, we have our YAML file configured, and we have our source code for WebGoat downloaded.
>
> **[6:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=371)** So now let's focus on executing this command from a terminal.
>
> **[6:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=375)** For the sake of simplicity, I put all of those things inside of the same directory.
>
> **[6:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=382)** That way you don't have to worry about navigating to different paths inside of your command line.
>
> **[6:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=386)** So let's type this out.
>
> **[6:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=387)** And this is what something, what it will look like.
>
> **[6:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=391)** Java, and then Java agent.
>
> **[6:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=393)** This is where you're going to point it to the name of your JAR.
>
> **[6:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=396)** Pay attention to the name of your JAR here and the version number.
>
> **[6:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=404)** Then contrast config.
>
> **[6:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=406)** So you're going to point it to the YAML file.
>
> **[6:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=408)** I called it WebGoat.YAML.
>
> **[6:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=411)** And then slash JAR.
>
> **[6:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=414)** So this is going to point to your WebGoat JAR that you downloaded.
>
> **[7:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=421)** And then this right here, this --server, this argument is going to just have it run on port 8082, just to avoid any conflicts that may happen to be running on your computer.
>
> **[7:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=433)** So let's, so let's run this.
>
> **[7:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=439)** You can see it started, it's got some Contrast stuff going on.
>
> **[7:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=445)** And when it looks to be up and running, which will just take a second, it doesn't take very long, we will head over and we will look at WebGoat.
>
> **[7:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=458)** Okay?
>
> **[7:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=459)** And just start using it.
>
> **[7:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=460)** Register a user.
>
> **[7:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=471)** Agree, this is all test.
>
> **[7:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=474)** And then just start looking through here, right?
>
> **[8:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=480)** And just start looking through here and clicking it.
>
> **[8:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=482)** 'Cause if you remember, IAST depends on the application being exercised to test.
>
> **[8:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=489)** So once you do that, and actually just once you bring up WebGoat and you can see that it's working, if you come over to Contrast and just go to applications, you'll see that it's running and you'll see that you've got one server, which is the machine that I'm running it on, and it's got 138 libraries with 27 of them vulnerable.
>
> **[8:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=513)** And you can just click through and look at the vulnerabilities here.
>
> **[8:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=525)** So this is how interactive application security testing works.
>
> **[8:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=529)** You didn't point it to the source code, you didn't run a scan, per se, but as you're using the application, as it's running, it's automatically testing.
>
> **[8:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/interactive-application-security-scannning?u=76281980&t=537)** And then, obviously, once you get kind of, once you want to get it connected, you can connect this to Slack, you can connect it to Jira, and you can really kind of get that continuous flow.

> [!info]- Semantic Content
>
> **Env Vars:** jar (12), iast (11), yaml (10), url (3), api (3)
> **Code Keywords:** let (7), static (2), default, (1), this. (1)
> **Exercise Files:** source code (4), download the (4)
> **UI Navigation:** go to (5), scroll down (2)
> **Prerequisites:** set up (4), setup (2), install (1)
> **Tools:** command line (2), github (1), terminal (1), slack (1), jira (1)
> **CLI Commands:** make (2)
> **File Paths:** webgoat.yaml (1)

#### Continuous secret scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=0)** - [Instructor] In today's cloud-first world, protecting our secrets has become more challenging than ever.
>
> **[0:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=6)** This isn't just about traditional cloud providers like AWS and Azure, it extends to our entire development ecosystem, including code repositories like Bitbucket and GitHub.
>
> **[0:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=17)** Today, we'll explore how to proactively scan our code for secrets before they make it to production.
>
> **[0:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=24)** Secret scanning is your first line of defense against accidentally exposed credentials in your code base.
>
> **[0:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=31)** Here's what you need to know.
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=32)** Common exposures include AWS keys, passwords, and API tokens.
>
> **[0:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=39)** Infrastructure as code files are particularly vulnerable.
>
> **[0:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=43)** Best practice is to implement pre-commit hooks to catch secrets before they're committed.
>
> **[0:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=49)** Failed scans should block the commit process.
>
> **[0:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=54)** When selecting a secret scanning solution, consider these key factors.
>
> **[0:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=58)** Accuracy is paramount.
>
> **[1:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=60)** Look for tools with sophisticated entropy detection.
>
> **[1:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=65)** Avoid solutions that rely solely on simple regex patterns.
>
> **[1:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=69)** Speed matters. Balance thoroughness with performance.
>
> **[1:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=74)** Expect some tuning.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=76)** Initial setup may require multiple iterations to reduce false positives.
>
> **[1:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=81)** The process follows a pretty straightforward flow for scanning for secrets.
>
> **[1:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=85)** The developer initiates the code commit, an automated secret scanning job is triggered, and then the tool analyzes code on the source server, and the results determine whether the code proceeds.
>
> **[1:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=98)** Now let's see secret scanning in action with an open source tool that embodies these principles.
>
> **[1:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=104)** Real-time scan of a sample code base, demonstration of detection capabilities, and then review of the scanning results and remediation steps.
>
> **[1:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=112)** We're going to look at a couple of tools to perform our secret scanning.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=117)** We've already looked at Aikido before, but I want to take another look.
>
> **[2:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=123)** I'm looking at my Feed, I'm logged back into our Aikido queue, and Aikido takes your repositories from GitHub and automatically scans them.
>
> **[2:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=131)** So based on adding WebGoat, you should have a scan for WebGoat.
>
> **[2:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=138)** But let's take a look at some of the code bases that I have.
>
> **[2:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=142)** If you come in here to All types, you can see Exposed Secrets.
>
> **[2:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=150)** Now you can see here that we have a generic password field inside of this terragoat repo.
>
> **[2:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=159)** Inside of my bWAPP demo, I have two exposed secrets.
>
> **[2:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=164)** I mean, you can click over here and you can see the secret that is exposed.
>
> **[2:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=171)** A lot of modern static analysis-type tools have secret scanning built into them, because they're already looking at the code base, they can already scan for secrets fairly easily by just using some regex patterns, or utilizing some open source software inside of their product.
>
> **[3:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=191)** But if you want to do this separately, one of my favorite tools that I've used for years is called TruffleHog, and you can find it on GitHub under trufflesecurity/trufflehog.
>
> **[3:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=204)** Truffle Security actually has an enterprise version of this as well that makes it really easy to connect in with your repositories to do the automated secret scanning as a part of the CI/CD process.
>
> **[3:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=219)** We are going to use the open source one and run it from the command line here.
>
> **[3:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=226)** If you scroll down, there's several different ways to do the install.
>
> **[3:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=233)** You can run the Docker image.
>
> **[3:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=235)** I'm running a Mac, so I'm going to use the simplest one, which is brew install trufflehog.
>
> **[4:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=242)** If you haven't done that, go ahead and do that.
>
> **[4:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=244)** That'll just take maybe 30 seconds or a minute.
>
> **[4:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=248)** Let's look at some examples.
>
> **[4:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=250)** I'm going to use an easy one.
>
> **[4:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=253)** You can scan S3 buckets, you can scan GitHub repos.
>
> **[4:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=257)** I'm going to go to one that scans a Docker image.
>
> **[4:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=260)** Truffle Secrets has one called secrets that is pre-populated.
>
> **[4:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=265)** I'm just going to hit Copy, and that's copied, and then I'm going to switch over to my command line.
>
> **[4:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=273)** And you can see here, I've already got it.
>
> **[4:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=275)** Ready to go.
>
> **[4:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=276)** Trufflehog command line, we're going to scan a Docker image.
>
> **[4:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=279)** The image name is trufflesecrity/secrets.
>
> **[4:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=281)** It'll only scan for verified secrets.
>
> **[4:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=285)** It will run.
>
> **[4:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=285)** It runs fairly quickly.
>
> **[4:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=287)** The speed of this really does depend on the size of what it's scanning.
>
> **[4:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=290)** For larger code bases, this can take quite a long time.
>
> **[4:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=293)** So there are some entropy-type of configurations that you can choose to really narrow down the scope of your secret scanning.
>
> **[5:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=303)** And you can see here, oh look, I have an AWS key that it found, okay?
>
> **[5:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=308)** And so it's going to tell you, "Hey, you probably want to fix this."
>
> **[5:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=314)** So you can see, that's fairly straightforward secret scanning.
>
> **[5:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=318)** You can actually scan in the CI here as well.
>
> **[5:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=322)** There's a Circle CI plugin, and there's a Travis CI plugin that you can use.
>
> **[5:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-secret-scanning?u=76281980&t=328)** And the idea here, by calling this from the command line, would be that you can fail it on commit if there are secrets that are found, which is ultimately what you want to do.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), docker (3), make (1), find (1), cd (1)
> **Tools:** github (4), command line (4), bitbucket (1)
> **Code Keywords:** let (3), extends (1), require (1), static (1), switch (1)
> **Env Vars:** aws (3), api (1)
> **Prerequisites:** install (2), setup (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Code Identifiers:** bwapp (1)
> **Exercise Files:** sample code (1)

#### Continuous dependency scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=0)** - [Instructor] Modern applications rely heavily on open source libraries to accelerate development and avoid reinventing the wheel.
>
> **[0:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=8)** While these libraries provide tremendous value, they also introduce security risks since their development and maintenance occur outside of our direct control.
>
> **[0:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=19)** Understanding and managing these risks is a critical component of any DevSecOps program.
>
> **[0:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=25)** Open source security has become a major focus in application security for several reasons.
>
> **[0:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=31)** Widespread usage.
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=32)** Nearly every modern application incorporates open source components.
>
> **[0:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=38)** High-profile vulnerabilities.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=41)** Critical vulnerabilities in popular libraries, for example, Apache Struts, have led to major security incidents.
>
> **[0:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=48)** OWASP recognition.
>
> **[0:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=50)** Using components with known vulnerabilities is now a part of the OWASP Top 10.
>
> **[0:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=55)** And developer priorities.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=57)** Updating libraries often competes with feature development for developer retention.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=64)** For some best practice, implement automated build failures for critical vulnerabilities to ensure timely remediation.
>
> **[1:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=71)** This creates the necessary urgency around addressing open source security issues.
>
> **[1:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=78)** When choosing a tool for open source security scanning, key considerations include speed, the tool should quickly identify vulnerable dependencies, accuracy, results should be reliable, with minimal false positives, language support, the tool must support your application's technology stack, integration capabilities, easy integration with build systems and bug trackers.
>
> **[1:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=105)** Most tools work by comparing your applications dependencies against known vulnerability databases, CVEs, making this a relatively straightforward but crucial security check.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=117)** The workflow for continuous open source security testing follows a similar pattern.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=122)** Developer commits code with updated dependencies, build process triggers automated library security scan, tool analyzes dependencies against known vulnerability databases, builds can be automatically failed based on configured vulnerability thresholds, results are reported back to development teams for remediation.
>
> **[2:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=145)** This automated approach ensures consistent enforcement of open source security policies without manual intervention.
>
> **[2:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=152)** Now let's take a look at a demo.
>
> **[2:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=155)** In this demo, we'll walk through setting up an automated dependency scanning and how we can integrate that with bug tracking systems.
>
> **[2:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=162)** Managing open source security is essential for modern application security.
>
> **[2:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=167)** By incorporating automated dependency scanning into your CI/CD pipeline, you can ensure that vulnerable components are identified and addressed before they make it to production.
>
> **[2:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=178)** Let's head back over to Akido.
>
> **[3:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=183)** One of the good things about modern tools is that a lot of times they combine multiple features.
>
> **[3:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=189)** Back when I first started doing security testing, there would be static analysis tools and dynamic analysis tools and open source scanning tools.
>
> **[3:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=197)** But a lot of times, you can combine these tools together.
>
> **[3:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=200)** An example here is Akido, and you can actually look at the open source vulnerabilities in the same place that you can look at your static code vulnerabilities.
>
> **[3:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=212)** So let's go over here to our Feed, and this is based on what we've done previously, where we have set up Akido, we've already logged in, set up our repositories, all of that.
>
> **[3:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=225)** So on the Feed, you're going to filter for open source dependencies.
>
> **[3:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=234)** And you can see here, let's take the look at this first one.
>
> **[3:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=237)** All of these are open source in a particular project.
>
> **[4:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=244)** I have a shiftleft-java-demo project here, and if I click on it, you can see, in this particular library, it's affected by three different vulnerabilities.
>
> **[4:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=260)** So how do you fix it?
>
> **[4:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=261)** It suggests that you update to 1.13.12.
>
> **[4:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=268)** From here, once again, you could take this, and all of these, you could look at your integration and you could send these straight on to Jira, you could send them to Slack, to have that whole automated process built out.
>
> **[4:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-dependency-scanning?u=76281980&t=284)** And if you go down here to CircleCI, you can also look to stop your build based on certain open source criteria that have been found.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (2), this, (1)
> **CLI Commands:** apache (1), cd (1), make (1)
> **Env Vars:** owasp (2)
> **Tools:** jira (1), slack (1)
> **Prerequisites:** set up (2)
> **Versions:** 1.13.12 (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Continuous container security
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=0)** - [Instructor] Containers have become increasingly popular in modern application development and deployment, introducing new security considerations that DevSecOps teams must address.
>
> **[0:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=11)** In this section, we'll discuss what containers are, the key areas of container security, and how to incorporate continuous container security testing into your DevOps processes.
>
> **[0:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=22)** In a traditional application architecture, the application components are deployed across multiple virtual machines, each with its own operating system, libraries and configurations.
>
> **[0:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=35)** This setup can be complex to manage and prone to environment-related issues and inconsistencies.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=41)** Containers simplify this by providing a standardized, portable packaging model.
>
> **[0:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=46)** Each container incorporates the application code, dependencies and runtime environment, allowing for consistent deployment across different environments.
>
> **[0:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=55)** This containerized approach offers significant benefits in terms of deployment simplicity and consistency.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=61)** However, it also introduces new security challenges that must be addressed.
>
> **[1:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=66)** When securing containerized applications, there are three main areas of focus.
>
> **[1:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=72)** Vulnerabilities: identifying known vulnerabilities in the container's base image and installed libraries and dependencies.
>
> **[1:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=80)** Policy enforcement: ensuring containers are built and configured according to security best practices, like the CIS Benchmarks.
>
> **[1:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=89)** And runtime protection: monitoring runtime containers for suspicious activity and preventing container breakouts.
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=97)** For the purposes of this course, we'll primarily concentrate on the vulnerability management aspect of container security.
>
> **[1:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=103)** An ideal container security solution would address all three key security areas: vulnerabilities, policies, and runtime; integrate seamlessly with your build and deployment processes, provide clear, actionable feedback on security issues; offer bug tracker integration for efficient remediation.
>
> **[2:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=124)** While it's acceptable to start with a more narrow focus on vulnerabilities, the goal should be to build out a comprehensive container security strategy over time.
>
> **[2:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=134)** Incorporating container security testing into a continuous integration and delivery pipeline is crucial.
>
> **[2:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=140)** The container image is scanned for vulnerabilities during the build process.
>
> **[2:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=144)** If any high-severity issues are detected, the build can automatically be rejected.
>
> **[2:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=149)** Detailed vulnerability reports are sent to the development team for remediation.
>
> **[2:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=155)** Only containers that pass the security checks are deployed to production.
>
> **[2:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=160)** This continuous, automated approach to container security ensures that security is consistently enforced without introducing delays or friction in the delivery process.
>
> **[2:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=172)** In this demo, we'll walk through the process of integrating a container security tool.
>
> **[2:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=177)** You'll see how the tool can be used to identify vulnerabilities in container images, and how findings can be reported to the development team.
>
> **[3:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=185)** Securing containerized applications is a critical aspect of DevSecOps.
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=190)** By embedding security testing directly into the container build and deployment workflow, you can ensure that security remains a seamless, consistent part of your application delivery lifecycle.
>
> **[3:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=203)** Now, let's come over to Aikido.
>
> **[3:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=207)** I'm going to use this same tool to look at our container security.
>
> **[3:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=211)** You can use other tools, like Anchore, A-N-C-H-O-R-E, to look at your container security, but I like to try and find tools that are easy to use, have the ability to have a UI or a CLI.
>
> **[3:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=224)** That way, we can test as many things as possible and keep our lives simple.
>
> **[3:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=230)** So come to Containers.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=232)** And we're going to, there's a couple of different ways you can do it.
>
> **[3:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=235)** If you have a container registry where you have all of your containers, you can connect the registry here.
>
> **[4:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=241)** If you have a public Docker image that you want to scan and maintain, you can add it here, which is what we're going to do.
>
> **[4:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=249)** Here's your registry location.
>
> **[4:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=251)** We're going to use Docker Hub.
>
> **[4:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=253)** And we're going to come here to WebGoat.
>
> **[4:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=255)** Let's just keep on using our good ol' WebGoat, 'cause we know it's insecure.
>
> **[4:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=261)** And we're going to enter the image identifier, which is webgoat/webgoat.
>
> **[4:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=266)** And we'll just do Latest and we'll hit Save.
>
> **[4:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=271)** Okay.
>
> **[4:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=273)** Now, this will eventually scan, and we can look at the vulnerabilities that are associated with this particular Docker image.
>
> **[4:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=282)** And you can see that it's scanning right now.
>
> **[4:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=285)** Now, if we want to set this up to integrate with our CLI, this is easy to do.
>
> **[4:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=291)** Right now, this is going to run every night, but maybe we want to run it on demand, maybe we want to run it multiple times a day after every change, and you can do that.
>
> **[5:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=301)** So if you look at the documentation here, here's a command that you can use to run from the CLI.
>
> **[5:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=310)** Aikido, local scanner, image scan, the image name and the API key.
>
> **[5:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=314)** This will allow you to do the scan from your local desktop or from CircleCI or Jenkins, right?
>
> **[5:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=323)** And if you want to be able to take the callback on it so you can fail your build, you can do that here using this switch, the fail on critical.
>
> **[5:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=337)** Now, let's go back here to look and see if we have finished scanning.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=341)** Ah, we have, so let's click on it.
>
> **[5:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=344)** And now you'll see that it has scanned WebGoat container for vulnerabilities.
>
> **[5:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=351)** So this is all part of the process.
>
> **[5:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=353)** We connect our image repository.
>
> **[5:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=354)** We can connect it to our Jenkins or our CI, so that we can automatically scan it on build.
>
> **[5:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continous-container-security?u=76281980&t=359)** And once again, from an integration perspective, you can connect this to Jira, connect it to Slack, so you have this continuous container scanning pipeline built and set up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1), public (1), switch (1)
> **Env Vars:** cli (3), cis (1), api (1)
> **CLI Commands:** docker (3), find (1)
> **Tools:** jira (1), slack (1)
> **Prerequisites:** setup (1), set up (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Continuous infrastructure as code scanning
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=0)** - [Instructor] Infrastructure as code security is about building security from the ground up.
>
> **[0:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=4)** Let's talk more about it.
>
> **[0:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=7)** Infrastructure as code revolutionizes how we deploy our systems.
>
> **[0:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=11)** Think of it as writing a recipe for your entire infrastructure.
>
> **[0:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=15)** Instead of clicking through countless setup screens, we define everything in code.
>
> **[0:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=20)** Why does this matter?
>
> **[0:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=22)** Every deployment is identical.
>
> **[0:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=24)** No more, "It works on my environment."
>
> **[0:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=28)** Teams can spin up entire environments with a single command, and DevOps teams can focus on innovation rather than repetitive tasks.
>
> **[0:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=38)** But with great power comes great responsibility.
>
> **[0:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=40)** When we write infrastructure as code, a single misconfiguration can be replicated across all environments.
>
> **[0:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=47)** The good news, we can catch these issues before they ever reach production.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=53)** Security checks become a part of the development process.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=57)** Problems are caught when they are cheapest to fix, during development.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=61)** Your IaC tool should feel like a natural part of your development workflow.
>
> **[1:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=66)** Seamless IDE integration means developers get instant feedback.
>
> **[1:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=71)** Language support ensures no blind spots in your infrastructure code.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=76)** Bug tracker integration keeps security findings in your existing workflow.
>
> **[1:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=80)** Let's look at how IaC security scanning works in practice.
>
> **[1:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=84)** Developer writes infrastructure code.
>
> **[1:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=86)** Code goes to the build server for initial processing.
>
> **[1:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=91)** IaC scanner analyzes the code for security issues, and results flow two ways.
>
> **[1:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=97)** Source code analyzes identified potential vulnerabilities and then the findings are automatically triggered in your bug tracking system.
>
> **[1:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=105)** This creates a continuous feedback loop that catches security issues early and often.
>
> **[1:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=113)** By implementing IaC security scanning, we're not just checking boxes.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=117)** We're building security directly into the infrastructure from day one.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=122)** Now let's look at a demo of an IaC scanning tool.
>
> **[2:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=126)** We'll look at one from a UI, but we'll also look at one from the CLI, where you can use it to integrate with Jenkins or Travis CI or CircleCI.
>
> **[2:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=137)** Let's start by looking at TerraGoat.
>
> **[2:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=141)** One of the prerequisites for the course was taking your GitHub repo and cloning TerraGoat into it.
>
> **[2:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=148)** And so you can see that here.
>
> **[2:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=150)** If you come into a Akido Security, which we've used before, come to your feed, and under All Types, look at Infrastructure as Code.
>
> **[2:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=165)** TerraGoat is a purposely misconfigured IaC code base.
>
> **[2:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=174)** So what we're going to see from Akido are a lot of high, medium, low severity issues that result from misconfigured IaC.
>
> **[3:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=186)** We're going to click on the first one that says S3 buckets should have block public access globally.
>
> **[3:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=194)** So you can see here, S3 bucket should have a default public access block enabled, and here's the code for that particular Terraform item, and you can see that it does not have the default block public access enabled.
>
> **[3:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=214)** Now this helps from the UI, and once again you can take this, you can integrate Akido with your bug management suite.
>
> **[3:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=220)** You can integrate it with CircleCI and Jenkins.
>
> **[3:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=224)** But let's also take a look at another tool that's an open source tool.
>
> **[3:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=228)** It's called Checkov.
>
> **[3:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=229)** It is made by Bridge Crew, which was purchased by Palo Alto, but checkoff is still available as an open source product.
>
> **[3:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=237)** We'll go down through here and it will give you some different screenshots describing what it can do, but let's first look at how to install it.
>
> **[4:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=246)** I'm on a Mac, so I just did brew install checkov.
>
> **[4:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=252)** You can also use pip to install it if you are on a different Linux operating system.
>
> **[4:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=257)** So I installed it and now what I did was I downloaded TerraGoat to my local machine.
>
> **[4:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=264)** So if you come here, go to this green button, and hit Download ZIP, I did that and I saved it to my directory.
>
> **[4:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=278)** And then what we're going to do is we're just going to do a pretty quick scan from the CLI.
>
> **[4:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=284)** So I'm in my directory right now.
>
> **[4:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=286)** You can see I've got this AppSec for DevSecOps directory here on my MacBook.
>
> **[4:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=291)** And this is what we're going to do.
>
> **[4:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=292)** We're going to do checkov, and you can point it to a file or directory, and it's called terragoat-master, so I'll hit that and it will run a scan.
>
> **[5:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=306)** And it's going to run, and it's going to tell you that there are several misconfigurations.
>
> **[5:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=312)** So if you look through here, suspicious use of netcat with IP address, found artifact build without evidence of cosign sbom attestation in pipeline.
>
> **[5:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=323)** So you can see that it's got several issues that it scanned from the source code that we downloaded.
>
> **[5:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=329)** So this is an easy way to run it from the CLI, and you can take this, and with different configuration options, you can plug this into your pipeline to be able to pass or fail.
>
> **[5:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=341)** And you can see a screenshot here where it integrates with Jenkins, and these are the tests that fail.
>
> **[5:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-infrastructure-as-code-scanning?u=76281980&t=355)** So it's fairly easy to run from the command line or run it from your build server, your Circle CI server, where you can pass or fail based on the misconfigurations that come back, whether they're critical or whether they're high.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (3), this, (2), pass (2)
> **Env Vars:** cli (3), ide (1), zip (1)
> **Prerequisites:** install (3), setup (1)
> **CLI Commands:** terraform (1), brew (1), pip (1)
> **Exercise Files:** source code (2), github repo (1)
> **Tools:** github (1), command line (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1), is an  (1)

#### AI application security
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=1)** - [Instructor] Now we're going to explore how generative AI is reshaping the landscape of application security, both the opportunities and the challenges.
>
> **[0:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=10)** Let's start with a striking statistic from Checkmarx's recent AppSec report.
>
> **[0:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=15)** 80% of the security professionals are worried about security threats stemming from AI code generation.
>
> **[0:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=22)** This isn't surprising, is it?
>
> **[0:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=23)** When developers can generate entire functions with a simple script, we have to ask, "Who's validating this code?
>
> **[0:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=30)** Are we introducing new vulnerabilities?
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=32)** How do we maintain control over our code?"
>
> **[0:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=36)** But here's the flip side, and it's significant.
>
> **[0:39](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=39)** The same report tells us that 31% of the security professionals believe AI will help both security teams and developers remediate issues faster.
>
> **[0:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=50)** Think about that contrast for a moment, we're simultaneously concerned and optimistic, and for good reason.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=57)** AI is like any powerful tool, its impact depends entirely on how we use it.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=64)** Let's look at how we're currently seeing generative AI being used in security.
>
> **[1:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=70)** Chatbots have become our instant security consultants, available 24/7 for immediate guidance.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=76)** They can process and explain complex security concepts and help teams understand security best practices.
>
> **[1:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=83)** They're also revolutionizing how we handle data, analyzing security logs in real time, identifying patterns in threat data, and generating actionable insights from security incidents.
>
> **[1:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=95)** And yes, code generation, but with proper guardrails in place.
>
> **[1:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=101)** Now let's get specific about AppSec applications.
>
> **[1:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=105)** Security vulnerability analysis has been transformed.
>
> **[1:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=107)** We can now have detailed conversations about specific vulnerabilities.
>
> **[1:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=112)** AI helps explain complex attack vectors in simple terms.
>
> **[1:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=116)** Teams can better understand the impact and urgency of issues.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=122)** Code remediation is becoming more efficient.
>
> **[2:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=126)** AI can suggest secure code alternative.
>
> **[2:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=129)** It can explain why certain patterns are vulnerable, and it helps developers learn while they fix.
>
> **[2:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=135)** And false positive reduction is a game changer.
>
> **[2:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=138)** AI can analyze content more effectively than traditional tools.
>
> **[2:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=143)** It helps prioritize which findings need immediate attention, and it saves precious time for both security teams and developers.
>
> **[2:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=153)** While we must remain vigilant about AI-generated security risks, we can't ignore its potential to strengthen our security posture.
>
> **[2:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=160)** The key is implementing it thoughtfully with proper oversight and op.
>
> **[2:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=166)** The future of AppSec isn't about choosing between human expertise and AI, it's about leveraging both to create more secure applications than ever before.
>
> **[2:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=175)** Now, let's look at a demo where we can use gen AI to analyze application security in real time.
>
> **[3:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=183)** Let's flip over to VS Code.
>
> **[3:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=188)** In a previous exercise, we have downloaded the source code for Terra, which if you remember is the vulnerable IaC codebase.
>
> **[3:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=200)** Go ahead and just add it.
>
> **[3:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=201)** If you haven't done that before.
>
> **[3:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=202)** If you do Open Folder, open the folder where you have the source.
>
> **[3:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=213)** Now, as part of the prerequisites, you should have installed the AWS add in for VS Code.
>
> **[3:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=220)** So what works?
>
> **[3:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=221)** If you haven't done that, go ahead and pause it and go and Google VS Code AWS plugin, download it and install it.
>
> **[3:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=229)** It's pretty easy.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=232)** And so here we are.
>
> **[3:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=233)** And what I'm going to do is down here, I'm going to click on Q at the bottom of my screen here, and then I'm going to hit Run Project Scan, and it's going to scan the project for security issues.
>
> **[4:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=249)** It is going to use the native AWS CodeWhisperer or Amazon Q product to scan the source code for security issues like static scanning, but also for IaC configuration issues.
>
> **[4:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=265)** Now you can see here, here's an example, Enabled RDS public access.
>
> **[4:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=273)** So now you can bring up Q and ask it questions.
>
> **[4:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=299)** So here you go.
>
> **[5:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=300)** So I just asked it, "How can I fix this vulnerability for enabled RDS public access?"
>
> **[5:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=305)** And it says, Based on the file pass shown and the Terraform snippet, I can help you secure your RDS instance by disabling public access.
>
> **[5:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=312)** It's a critical security best practice.
>
> **[5:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=314)** Here's how to fix it."
>
> **[5:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=315)** And it gives you the code to fix it, right?
>
> **[5:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=318)** And then it goes in to tell you what security improvements this code made, and then here's some other security recommendations.
>
> **[5:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=328)** That's pretty cool.
>
> **[5:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=329)** And it lets you copy, copy, copy so that you can go ahead and do this.
>
> **[5:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=333)** It doesn't automatically do it for you.
>
> **[5:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=334)** Once again, if you remember, this is really an enabler.
>
> **[5:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=338)** It's a tool to help.
>
> **[5:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=340)** We're not looking for it at the moment to have it automatically generate code or replace your code.
>
> **[5:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=346)** We really want it to look at it, see if we agree with it, and then you can copy and paste and be done with it.
>
> **[5:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=352)** And you can see here also we're as far left as we can get, right?
>
> **[5:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/ai-application-security?u=76281980&t=355)** So that's the great part about this particular AI is that it's doing this in our development environment, and the developers can do this in real time while they're.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (3), static (1), pass (1), this. (1)
> **Env Vars:** aws (3), rds (3)
> **CLI Commands:** aws (3), terraform (1)
> **Tools:** vs code (3)
> **UI Navigation:** open the (1), click on (1)
> **Exercise Files:** source code (2)
> **Best Practices:** the key is (1), best practice (1)
> **Definitions:** is a  (1)

#### Continuous application runtime monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=0)** - [Instructor] In this video, we're discussing why continuous security monitoring is essential in today's threat landscape.
>
> **[0:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=7)** New vulnerabilities are released often.
>
> **[0:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=10)** Security threats emerge daily.
>
> **[0:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=13)** We can't rely on periodic scans.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=16)** Traditional security reviews don't catch zero-day vulnerabilities.
>
> **[0:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=20)** Runtime monitoring helps detect emerging threats in real time.
>
> **[0:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=26)** Things do slip through the cracks, mo security review is perfect.
>
> **[0:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=31)** Common misses are misconfigured services, unpatched dependencies, shadow IT.
>
> **[0:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=37)** Runtime monitoring catches what initial scans miss.
>
> **[0:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=41)** So you've got to watch for bad guys doing bad things, detect suspicious activity in real time.
>
> **[0:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=48)** Unusual processes, unexpected connections, unauthorized changes, those are examples of suspicious activities that you should be monitoring for.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=57)** And this enables rapid incident response.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=61)** Continuous monitoring is your persistent guardian, catching new threats, overlooked issues, and malicious activities, before they become breaches.
>
> **[1:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=70)** Let's look at key features to consider when choosing a runtime monitoring solution.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=76)** It must support your existing infrastructure, cloud containers, legacy systems.
>
> **[1:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=81)** And look for native integration with your development and deployment tools.
>
> **[1:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=86)** And avoid solutions that require major architectural changes.
>
> **[1:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=90)** Use ML or AI for behavioral analysis.
>
> **[1:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=94)** Smart detection of unusual patterns without manual rule creation reduces false positives through behavioral learning, and it adapts your environment's normal operations.
>
> **[1:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=107)** And SIM alert integration should be seamless connection to your existing security tools, alerts should flow into your current incident response workflow, no separate console to monitor.
>
> **[1:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=118)** The right tool should feel like it belongs in your environment, not like another piece of security overhead.
>
> **[2:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=126)** This is an example of runtime monitoring and what it can look like from an architectural perspective, really focusing on some AWS services.
>
> **[2:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=134)** And when you see here, the user input comes in and is first distributed through the load balancer.
>
> **[2:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=141)** Traffic is split between multiple EC2 instances for redundancy and scale, and then they go to Aurora for database usage.
>
> **[2:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=152)** Two key monitoring components are in place.
>
> **[2:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=155)** Amazon Aurora logs that monitors database activity, they're sent to GuardDuty.
>
> **[2:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=161)** And also, the EC2 logs are sent to GuardDuty for monitoring.
>
> **[2:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=167)** This works for a few reasons.
>
> **[2:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=170)** GuardDuty is used to continuously monitor for things like suspicious API calls, potentially compromise EC2 instances, malicious database behavior, it takes everything inside of your AWS environment, and it can monitor for these behavioral abnormalities.
>
> **[3:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=188)** This architecture gives us a visibility from the front door all the way through the data layer with AWS's native security tools working together to monitor the runtime.
>
> **[3:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=201)** Now let's have a look at the demo.
>
> **[3:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=203)** We're going to focus on AWS GuardDuty to understand what it does and the value that it can provide to us.
>
> **[3:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=209)** There are other tools out there, like different sims, there's not going to be a lot of open source tools necessarily in this space, but GuardDuty is going to be the closest because a lot of people already use AWS.
>
> **[3:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=222)** We'll focus on AWS, but each cloud provider will have their own options.
>
> **[3:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=227)** Google will have Security Command Center, Microsoft has Sentinel, and Azure has GuardDuty, but we're going to really focus in on GuardDuty for the purposes of this demo.
>
> **[3:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=236)** If you come over here, you can get to GuardDuty by just logging into your console, typing in GuardDuty, and this is what it will show you.
>
> **[4:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=250)** You're going to have to enable it if you've never enabled it before, but there's just a couple of things that you can do here to get it to show you some findings.
>
> **[4:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=257)** An easy one that you can do is, you can create an S3 instance.
>
> **[4:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=268)** And you can make sure that the instance is available to the public.
>
> **[4:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=272)** This particular S3 bucket has public access enabled, which is going to send a flag here to GuardDuty, so you can see that GuardDuty is monitoring your production environment, and looking for the things that are going to cause you issues, or malicious behavior that has already happened, 'cause guard duty does have the ability to do malware scans as well.
>
> **[4:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=294)** I'm going to flip over to a different region where it's got a little bit more data.
>
> **[4:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=298)** And you can see here that in this particular instance, it has a lot more information, you can click through here.
>
> **[5:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=305)** This particular Kubernetes policy has admin access set to default for this service account.
>
> **[5:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=310)** So you can see that this is really monitoring the runtime of your environment.
>
> **[5:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=315)** This instance has a suspicious shell created on it, so that would be something that you would want to look at.
>
> **[5:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/continuous-application-runtime-monitoring?u=76281980&t=322)** GuardDuty is pretty good at taking everything across all of your different cloud environments and putting them in one place, and monitoring at runtime for things like misconfigurations, suspicious activity and malware.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), ec2 (3), sim (1), api (1)
> **CLI Commands:** aws (6), make (1)
> **Code Keywords:** let (2), public (2), for. (1), require (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Practicing Continuous Application Security

#### Tying it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=0)** - [Instructor] We've explored various testing tools at the command line level.
>
> **[0:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=4)** Now it's time to understand how these tools work together seamlessly in a modern development workflow.
>
> **[0:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=11)** Just as we aim to move beyond manual UI testing, we want to automate our security testing process.
>
> **[0:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=18)** Continuous application security should be a smooth, uninterrupted journey.
>
> **[0:24](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=24)** Gone are the days of stopping and starting tests, manual reporting, and endless debates about security vulnerabilities.
>
> **[0:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=32)** Instead, we want a process that flows seamlessly from build to defect reporting, continuously cycles and improves, integrates security directly into the development lifecycle.
>
> **[0:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=46)** While tools are important, the DevSecOps process and team integration are paramount.
>
> **[0:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=52)** Two critical tools in the continuous DevSecOps process are Jenkins and CircleCI.
>
> **[0:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=57)** These platforms are fundamental to modern DevOps, enabling task management, process automation, and streamlined workflow control.
>
> **[1:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=69)** These tools are the backbone of a continuous workflow, control the flow of development jobs, manage build check-ins, execute unit tests and security scans, provide pass-fail feedback, and then stop builds that don't meet security standards.
>
> **[1:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=85)** The result, a consistent, flexible process that delivers more accurate and repeatable results.
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=93)** While we've examined individual tool flows, this slide showcases how Jenkins and CircleCI orchestrate multiple security tools.
>
> **[1:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=101)** They integrate numerous security scanning tools and allow each tool to contribute to build acceptance criteria, and they create a comprehensive security validation process.
>
> **[1:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=113)** Achieving this level of integration is a significant milestone in continuous application security.
>
> **[2:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=120)** Digging into the CircleCI and Jenkins world and setting up pipelines is a little bit outside the scope of this course.
>
> **[2:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=126)** There are other courses on LinkedIn where you can really get in depth on how to set these up, how to create pipelines and tasks, and the automation associated with those.
>
> **[2:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=135)** So I would suggest looking to those courses for more detailed explanation of how to set up your pipeline.
>
> **[2:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/tying-it-all-together?u=76281980&t=141)** But next, we'll explore how the security team can gain comprehensive insights into the entire testing and validation process, ensuring transparency and continuous improvement.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** pass (1)
> **Tools:** command line (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Managing the results
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=0)** - [Instructor] This presentation will cover a strategic approach to managing the results generated by our diverse toolset.
>
> **[0:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=7)** We'll explore how to centralize and automate this process to support our DevSecOps principles.
>
> **[0:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=13)** Each tool in our arsenal produces results unique to its purpose.
>
> **[0:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=17)** However, the key insight is that most tools can export their findings to a common interchangeable format.
>
> **[0:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=25)** This allows us to consolidate the output from various tools into a central repository.
>
> **[0:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=33)** By establishing a single organized location to store all tool results, we can eliminate the scattered result files, enable cross tool analysis, improve team collaboration, and maintain a comprehensive audit trail.
>
> **[0:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=52)** The benefits include quick access to historical data, simplified reporting, and reduced risk of losing critical information.
>
> **[1:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=63)** To streamline this process, we'll use APIs to automatically feed the results from our tools into a central tracking system like DefectDojo.
>
> **[1:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=73)** This eliminates the need for manual entry and ensures timely notifications when new results are available.
>
> **[1:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=81)** Centralizing our results supports the DevSecOps philosophy by allowing security auditors to review findings in one place, providing developers with visibility into potential issues earlier in the development lifecycle, and enabling more efficient collaboration between teams.
>
> **[1:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=101)** To implement this workflow you have to create a script to run your tests.
>
> **[1:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=106)** And then inside that script you'll push the results to DefectDojo and then manage the scripting and testing inside of Jenkins.
>
> **[1:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=115)** Inside of our demo, we will create a script and we'll push the results to DefectDojo, but we won't manage the script testing in Jenkins because that really is outside the scope of this course.
>
> **[2:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=128)** And by implementing this strategic approach to results management, we transform our raw data into a valuable centralized asset that supports our DevSecOps initiatives.
>
> **[2:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=139)** Let's go over to a tool called DefectDojo.
>
> **[2:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=143)** You can actually download this and you can run it yourself inside of your cloud or inside of your local computer if you want your own instance of DefectDojo.
>
> **[2:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=155)** There is a commercially available version that has a lot more features, but they also maintain the open source version so that they can give back to the open source community.
>
> **[2:46](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=166)** Obviously, if you're going to do this for real, don't use the demo version of DefectDojo.
>
> **[2:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=171)** You'll want to maintain your own separate and secure version.
>
> **[2:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=174)** But for this demo, we are going to utilize the free version that's online.
>
> **[3:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=181)** If you go to demo.[defectdojo.org](https://defectdojo.org), you can log in.
>
> **[3:06](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=186)** Their password is on the GitHub page for DefectDojo.
>
> **[3:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=190)** It may change from time to time.
>
> **[3:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=192)** But once you log in, the first thing that you'll look at is to look at all the products.
>
> **[3:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=199)** This is kind of what DefectDojo hinges on is creating a product.
>
> **[3:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=205)** I created one called LinkedIn Learning, so I'm going to click on that.
>
> **[3:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=208)** Once you're in here, you can create engagements.
>
> **[3:34](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=214)** The engagements are like testing activities of some sort.
>
> **[3:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=218)** You can do an interactive engagement or a CI/CD engagement.
>
> **[3:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=221)** I did a new CI/CD engagement and I hit view engagements.
>
> **[3:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=232)** You can see one I named LinkedIn Learning here.
>
> **[3:55](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=235)** And this is where you can have all of your results from your testing from these engagements.
>
> **[4:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=241)** And from there it will feed into the findings.
>
> **[4:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=244)** So let's switch over to a script.
>
> **[4:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=249)** This script is inside of your exercise files that you can download.
>
> **[4:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=253)** Let's walk through this.
>
> **[4:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=255)** In a previous video, we ran TruffleHog from the command line.
>
> **[4:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=261)** We're going to do the same thing inside of this script.
>
> **[4:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=267)** We're going to take our command, we're going to do TruffleHog docker image, truffle security secrets, and we're going to export it to a JSON file called Results.JSON.
>
> **[4:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=282)** Then what we're going to do is we're going to build an API inside of this Python script.
>
> **[4:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=289)** What we're going to need are a few things.
>
> **[4:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=294)** This is the scan date that we want our TruffleHog scan to report on.
>
> **[4:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=299)** So today is fine.
>
> **[5:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=300)** We're going to name it TruffleHog Scan.
>
> **[5:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=304)** The only thing that you should have to modify inside of this file is this engagement ID.
>
> **[5:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=310)** So when you come back here, go ahead and create a new engagement inside of your project.
>
> **[5:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=320)** And when you do that, click on your engagement.
>
> **[5:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=325)** Oops.
>
> **[5:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=328)** And you should see an engagement ID.
>
> **[5:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=330)** And the easiest place to see that is up here for 15.
>
> **[5:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=336)** So I entered 15 right here, and then it's going to build the rest of your API call for you.
>
> **[5:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=345)** So up here you ran TruffleHog, you exported it to JSON.
>
> **[5:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=350)** Right here, you're going to take those JSON results and you're going to push them on your API call inside of this file parameter and then it will post it down here.
>
> **[6:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=362)** Here is the username and password for DefectDojo.
>
> **[6:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=371)** Once you are finished here, this is in VS code.
>
> **[6:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=376)** I'm just going to hit run.
>
> **[6:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=378)** And you should see some things populate down here.
>
> **[6:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=380)** It's running TruffleHog.
>
> **[6:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=382)** And then once you start to see all of these things with the engagement ID, the product ID, that means that this is the result back from your API call.
>
> **[6:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=389)** So it worked.
>
> **[6:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=390)** And if we go back over, we should have a new scan here.
>
> **[6:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=395)** and we do.
>
> **[6:38](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=398)** So let's just look at a scan result.
>
> **[6:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=401)** When you click it, DefectDojo can parse scans from a lot of different tools, and so it understands that in the TruffleHog, the results were a hard coded, AWS secret and AWS.
>
> **[6:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=417)** You can click for more information.
>
> **[6:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=419)** You could do the same thing with other tools like SEMgraph.
>
> **[7:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/managing-the-results?u=76281980&t=423)** With SEMgraph, the API usage is actually a part of the commercial set, so we didn't use that one in this example, but most places you can download a JSON or something similar and upload it to DefectDojo just like we did here.

> [!info]- Semantic Content
>
> **Env Vars:** json (5), api (5), aws (2)
> **CLI Commands:** cd (2), aws (2), docker (1), python (1)
> **Code Keywords:** let (4), switch (1), this. (1)
> **Tools:** github (1), command line (1), vs code (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** earlier in (1), previous video (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** results.json (1)

#### Metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=1)** - [Instructor] In the world of application security, metrics are our compass.
>
> **[0:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=5)** They guide our strategy, validate our efforts, and communicate our progress.
>
> **[0:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=12)** Metrics serve three critical purposes in our application security program.
>
> **[0:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=17)** They help define the success of our program.
>
> **[0:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=21)** It's hard to understand where we're failing and where we're succeeding if we don't have a way to measure the success.
>
> **[0:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=30)** And for every tool that we use, there has to be a metric.
>
> **[0:35](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=35)** We should have a quantitative measure for every tool and process that we use.
>
> **[0:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=42)** Remember, part of DevOps is that we're always evaluating.
>
> **[0:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=45)** We're always continuously improving, and so that should include the tools and the processes that we use.
>
> **[0:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=52)** And finally, we should enable meaningful executive reporting with our metrics.
>
> **[0:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=58)** It's how executives understand the value of our program.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=64)** It has to be through metrics that they can understand so that they understand that the money and the resources they're giving us are being used wisely.
>
> **[1:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=76)** Let's talk about some metrics that we should use.
>
> **[1:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=80)** When tracking operational application security, these are three metrics that I tend to focus on.
>
> **[1:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=85)** The first one is flow time.
>
> **[1:27](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=87)** How quickly we move from detection to resolution.
>
> **[1:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=91)** How long does it take from the time that a vulnerability is detected until it goes all the way through the process of being found, fixed, released, deployed, retested.
>
> **[1:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=104)** The second one is time to resolve vulnerabilities.
>
> **[1:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=107)** How long does it take us just to fix a vulnerability?
>
> **[1:50](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=110)** That's a good measurement of how effective our engineers can be or how quickly we can go from seeing a vulnerability to fixing it.
>
> **[1:58](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=118)** And finally, vulnerability density.
>
> **[2:02](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=122)** The concentration of security risks in our applications.
>
> **[2:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=125)** Are there specific parts of our application that have more defects than others?
>
> **[2:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=129)** That could indicate a problem with a certain development team.
>
> **[2:13](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=133)** It could show that there's a specific part of our application that is maybe more complex and subject to vulnerabilities.
>
> **[2:19](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=139)** So vulnerability density helps us understand areas where we should really focus and double down on our testing.
>
> **[2:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=146)** For vulnerability tracking, these are some metrics that we can use.
>
> **[2:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=149)** The number of critical vulnerabilities.
>
> **[2:31](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=151)** Are we seeing more critical vulnerabilities over time?
>
> **[2:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=156)** Are there certain parts of our application that are seeing more critical vulnerabilities than others?
>
> **[2:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=161)** Time required to fix identified issues.
>
> **[2:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=164)** How long does it take us to fix?
>
> **[2:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=165)** Are some teams fixing more quickly than others?
>
> **[2:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=168)** Are there certain parts of our application that require longer fixes?
>
> **[2:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=172)** And finally, vulnerabilities by type.
>
> **[2:56](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=176)** I've talked about security champions before in some of my other trainings, but this is a good metric to understand maybe where we can dig deep on a specific type of security test.
>
> **[3:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=187)** If we have a certain type of security defect that we're seeing a lot of, like cross-site scripting or SQL injection, maybe we can do a deep dive to the different teams explaining why we're seeing these issues and how they can fix them.
>
> **[3:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=203)** Now, let's talk about some additional thoughts on metrics.
>
> **[3:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=206)** There are some metrics you shouldn't use because they have an inverse result.
>
> **[3:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=213)** Don't expect anything to go to zero.
>
> **[3:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=216)** Never measure defects expecting that we will fix everything in an application.
>
> **[3:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=220)** We will never be at zero, and trying to achieve that is a zero-sum game that will just frustrate everybody.
>
> **[3:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=227)** Don't just count new vulnerabilities as a blanket metric.
>
> **[3:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=231)** It's okay if it's an established part of your application and all of a sudden we see an uptick in the number of vulnerabilities.
>
> **[3:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=237)** But keep in mind, if it's a new part of your application, and if there has been substantial changes, then we should expect a higher number of vulnerabilities.
>
> **[4:07](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=247)** So just keep that in mind.
>
> **[4:10](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=250)** And encourage good behavior with metrics, right?
>
> **[4:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/metrics?u=76281980&t=255)** Design metrics that promote positive security behaviors and continuous.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (2), require (1), type. (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Building a continuous AppSec toolkit
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=0)** - [Instructor] Now let's take a lot of what we've learned in the previous movies and focus on a challenge.
>
> **[0:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=12)** Let's create an application security pipeline.
>
> **[0:16](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=16)** Let's go from a GitHub source code repository to a static scanner, and then into a vulnerability management system.
>
> **[0:25](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=25)** Get all of these things to talk and be interconnected.
>
> **[0:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=28)** That is the point of a continuous application security pipeline.
>
> **[0:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=33)** If you'd like, you can use bWAPP, which is in an intentionally vulnerable application.
>
> **[0:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=37)** You can find the link here on GitHub, LinkedIn Learning, under Building Your First DevSecOps Pipeline.
>
> **[0:45](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=45)** You can also use Jira for the vulnerability management system.
>
> **[0:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=49)** They allow you to set up a free account that you can use for this purpose.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/challenge-building-a-continuous-appsec-toolkit?u=76281980&t=53)** This challenge should take you about 30 minutes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (1)
> **Tools:** github (2), jira (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** bwapp (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Building a continuous AppSec toolkit
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=0)** - [Instructor] Here you can see the BWAP application that is on the LinkedIn GitHub repository.
>
> **[0:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=12)** The first thing that we'll want to do is go ahead and fork this.
>
> **[0:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=18)** I'll just leave the default name and we'll just copy the main branch.
>
> **[0:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=29)** Okay, that is forked into my own repository.
>
> **[0:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=33)** The next step is to create a Jira workspace.
>
> **[0:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=37)** All you have to do is sign up for an account, create a default workspace, and you should be good to go.
>
> **[0:43](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=43)** I'm going to use semgrep for my static analysis tool.
>
> **[0:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=47)** First, let's go and set up the Jira integration.
>
> **[0:51](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=51)** I'm going to use semgrep for my static analysis tool.
>
> **[0:54](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=54)** The first thing you'll want to do is go in and set up your Jira integration.
>
> **[1:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=61)** Set up first integration, and then we're going to select Jira.
>
> **[1:12](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=72)** We have to give permission for semgrep and Jira to talk.
>
> **[1:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=75)** So I'm going to hit accept.
>
> **[1:18](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=78)** If you want, you can review what this is going to do in the privacy policy.
>
> **[1:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=86)** Now we have to connect the projects.
>
> **[1:28](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=88)** So my domain inside of Jira is continuous security.
>
> **[1:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=93)** Default project is going to be Scrum and I'd like my issues to go over as bugs.
>
> **[1:41](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=101)** You can also customize the ticket creation, automatically create tickets for high severity and high confidence findings.
>
> **[1:47](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=107)** These are the mappings.
>
> **[1:49](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=109)** Says you can go from the Jira fields to the semgrep fields, I'm going to leave these as default, but if you wanted to be more specific, you could do that as well.
>
> **[1:57](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=117)** Hit save.
>
> **[2:03](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=123)** Now let's connect the source code repository to semgrep.
>
> **[2:08](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=128)** So if you come here, we're going to go to not scanning, since it's a new repo.
>
> **[2:14](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=134)** Select the code base that you brought over.
>
> **[2:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=137)** In my case, it's building-first-devsecops-pipeline.
>
> **[2:20](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=140)** I'm going to hit enable scans.
>
> **[2:23](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=143)** I'm going to do a managed scan.
>
> **[2:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=146)** Enable.
>
> **[2:29](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=149)** All right, now we're going to wait.
>
> **[2:32](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=152)** It is going to take just a few minutes to run for the first time.
>
> **[2:37](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=157)** We now have a lot of different items that automatically came over.
>
> **[2:42](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=162)** If you remember when we set up the connection here, we said to automatically send any new findings to Jira.
>
> **[2:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=168)** And that's exactly what it did when it did the first scan, is sent them over.
>
> **[2:52](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=172)** So just to recap, you forked a code base over, this is the code base that you're testing.
>
> **[2:59](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=179)** You connected a static scanner to that code base, and then you set up automatic integration between Jira and your static scanner so that when you scan for issues, they are automatically sent over to Jira for management.
>
> **[3:21](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/solution-building-a-continuous-appsec-toolkit?u=76281980&t=201)** You could also do this with Slack or other integrations, but this really is the idea of a continuous application security.

> [!info]- Semantic Content
>
> **Tools:** jira (10), github (1), slack (1)
> **Code Keywords:** static (4), let (2), this. (1), default, (1), case, (1)
> **Prerequisites:** set up (5)
> **UI Navigation:** go to (1), select the (1)
> **Env Vars:** bwap (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=1)** - [Instructor] Success in application security means integration from end to end.
>
> **[0:05](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=5)** Let's be clear, no tool is perfect and that's okay.
>
> **[0:09](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=9)** In fact, multiple tools with some vulnerability overlap can be a strength, not a weakness.
>
> **[0:15](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=15)** Think of security tools like a team of detectives; each brings a unique perspective, and when they compare notes, they create a more comprehensive understanding.
>
> **[0:26](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=26)** Some tools might catch vulnerabilities that others miss, providing a layered defense approach.
>
> **[0:33](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=33)** Now, how do we turn these insights into action?
>
> **[0:36](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=36)** First, try the process out. Don't just listen to theory.
>
> **[0:40](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=40)** Put these strategies into practice in your environment.
>
> **[0:44](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=44)** Start small and add complexity later.
>
> **[0:48](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=48)** You don't need to implement a perfect full-scale security program overnight.
>
> **[0:53](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=53)** Begin with core principles, learn, adapt, and gradually expand your approach.
>
> **[1:00](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=60)** Be flexible with both your process and your teams.
>
> **[1:04](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=64)** Application security isn't about rigid rules, but about creating a collaborative, adaptive security culture.
>
> **[1:11](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=71)** Encourage communication, continuous learning, and iterative improvement.
>
> **[1:17](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=77)** Your security strategy should be a living, breathing ecosystem that evolves with your technology and threats.
>
> **[1:22](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=82)** It's not about achieving perfection, but about continuous enhancement and proactive risk management.
>
> **[1:30](https://www.linkedin.com/learning/application-security-in-devsecops-25151529/next-steps?u=76281980&t=90)** Remember, every step you take toward a more integrated, comprehensive application security approach is a step towards protecting your organization's most critical assets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Tim Chase]]

## Resources

- Exercise files available

## Skills Covered

- Application Security
- DevSecOps

## Path Context

### In [[Get Ahead in DevSecOps]]
← [[DevSecOps- Building a Secure Continuous Delivery Pipeline]] | **4 of 5** | [[DevSecOps- Tips for Success]] →

## Appears In

- [[Get Ahead in DevSecOps]]

## Related Courses

_Courses sharing skills:_

- [[DevSecOps- Automated Security Testing]] — Application Security, DevSecOps
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Node Js Security]] — Application Security

---

[↑ Back to top](#)