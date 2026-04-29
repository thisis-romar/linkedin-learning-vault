---
type: course
cssclasses:
  - lle-course
slug: devsecops-automated-security-testing
url: "https://www.linkedin.com/learning/devsecops-automated-security-testing"
duration_minutes: 95
duration: 1h 35m
updated: 3/29/2018
learners: 15954
skills:
  - Application Security
  - DevSecOps
  - Security Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHuQ1tCymk6jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668353438?e=2147483647&amp;v=beta&amp;t=pLj_RB9ec21IHwebmGp5PaED-IgDNK_-BhCqo-Om85c"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Get Ahead in DevSecOps]]'
prev_courses:
  - '[[Devops Foundations Devsecops]]'
next_courses:
  - '[[DevSecOps- Building a Secure Continuous Delivery Pipeline]]'
path_nav: '[{"path":"Get Ahead in DevSecOps","position":2,"total":5,"prev":"Devops Foundations Devsecops","next":"DevSecOps- Building a Secure Continuous Delivery Pipeline"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/devops
  - skill/application-security
  - skill/devsecops
  - skill/security-testing
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/DevSecOps-%20Automated%20Security%20Testing.md)

![DevSecOps: Automated Security Testing](https://media.licdn.com/dms/image/v2/C4E0DAQHuQ1tCymk6jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668353438?e=2147483647&amp;v=beta&amp;t=pLj_RB9ec21IHwebmGp5PaED-IgDNK_-BhCqo-Om85c)

# DevSecOps: Automated Security Testing

> Security testing is a vital part of ensuring you deliver a complete, secure solution to your customers. Automating the process can ensure testing is always part of your software delivery workflow, and can help testing keep pace with continuous integration and delivery (CI/CD) pipelines. In this course, James Wickett introduces the core concepts behind application security testing, with hands-on de

> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing) | 1h 35m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Security Testing Basics]]** (4 videos)
- **[[#2. Security Automation: Getting Started]]** (5 videos)
- **[[#3. Application Security Automation]]** (7 videos)
- **[[#4. Security Testing in Software Delivery Pipelines]]** (2 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=0)** - [James] Hi, I'm James Wickett and I'm the Head of Research at Signal Sciences.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=4)** Are you in the field of IT security and feeling out of touch in the DevOps era?
>
> **[0:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=8)** Or maybe you're a developer wanting to apply security testing in your software delivery pipeline.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=13)** I help DevOps and cloud-first teams defend web applications, microservices, and APIs.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=18)** In this course you will see how security and DevOps fit together as well as some guidance on how to get started with automated security testing.
>
> **[0:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=26)** Next we'll move from guidance to practice.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=28)** You will set up an attack lab to create your very own security automation test.
>
> **[0:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=33)** When you complete the course you will have a reusable library of tests that can be put in place immediately in your organization.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=39)** Towards the end of the course we will cover how to do security testing in a continuous integration and continuous delivery pipeline.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=46)** There are a few tricks to getting this right.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=48)** Don't worry if you don't have a lot of experience with security tools or writing automated tests.
>
> **[0:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/welcome?u=76281980&t=53)** In this course you will be up and running in no time.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - [james] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] This course walks you through building automated attacks that fit in a continuous delivery pipeline.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980&t=5)** In the course we use Docker, Git, and work a lot on the command line.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980&t=9)** You don't have to be a pro at this, however, some familiarity with these concepts will be helpful for you.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980&t=15)** Also, as you watch the course and you feel lost in continuous integration or continuous delivery concepts, I recommend checking out the DevOps foundation course in the library on that topic.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/what-you-should-know?u=76281980&t=25)** Additionally, if you find the portions of the course covering web applications security vulnerabilities, too fast or may even not deep enough, I recommend checking out programming foundations web security, right here, available in the library.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), git (1), find (1)
> **Code Keywords:** this, (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Security Testing Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Security and DevOps history in short
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=0)** - [Instructor] There is something we need to address before getting into into all the technical content.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=4)** Security is an outsider in most organizations.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=6)** Or, said another way, security is usually a silo much like operations was at the start of the DevOps movement.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=12)** Now, you could pass over this statement and rush to implement solutions.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=16)** However, that would be a mistake.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=18)** Instead, let's take a brief moment and build some understanding that will help us do the security testing in the modern context of software development.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=27)** One of the reasons security worked itself into being a silo is that it was born out of the waterfall methodology for software development.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=35)** The waterfall methodology envisions a project as a linear series of tasks, starting with project formation, then writing specifications, then doing development, then at the very end of a months-long, sometimes year-long process, testing occurs.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=48)** Then security finally has a chance to review the project just before it goes to production.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=54)** Now, as you have may experienced, this never works out exactly as planned.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=58)** All too often, testing, not even to mention security testing, goes out the window in an effort to release on time.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=65)** Security in this scenario will often be asked to do a review in a very condensed timeline.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=69)** And any problems they find often get ignored and just added to the next release.
>
> **[1:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=74)** This not-so-virtuous cycle of ignoring security problems and then pushing them to later development cycles months or even years later causes an obvious tension.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=83)** Security finds themselves in a situation where they have to block releases and argue to have bugs fixed.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=89)** However, when you're a group trying to block releases, you're get labeled as the enemy.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=94)** At one job I held, I was told by a developer that "Security is only happy when the system is powered off and unplugged."
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=101)** In other words, security in the minds of most people is just a blocker.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=105)** The flip side of this, I've often heard a lot of security people casually refer to developers as "those stupid developers."
>
> **[1:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=112)** Now, I believed these views stem from organizational failures of waterfall.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=117)** In the mind of a developer, security just tries to slow things down.
>
> **[2:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=121)** In the mind of a security engineer, they see vulnerabilites being actively shipped out the door and no one willing to fix them.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=128)** It is my belief that the many years we have spent doing security in a waterfall pattern has led to these misunderstandings and fostered and grew security into a silo.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=139)** Another important aspect to the current role of security is compliance.
>
> **[2:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=143)** By compliance, I mean everything, from the credit card processing standard PCI to healthcare data with HIPAA, and more.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=149)** The industry has been inundated with more and more compliance work.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=154)** In many organizations, security engineers have been tasked with passing the compliance standard for the organization.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=160)** While this is important work to pass audit, it often takes away from the day-to-day responsibilities of security engineering work.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=167)** Compliance standards are hundreds of pages long and full of legalese and take months to complete.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=173)** This moves security away from providing actual security of the products and services the company provides, which is where the value is created.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=181)** Instead, security moves precious resources into passing audit and becoming lawyers.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=186)** Considering that most security teams are understaffed to begin with, this only makes the perception that security is a silo, that likes to slow things down, even worse, not better.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=197)** The final wrinkle with information security discipline as a whole is this: risk management.
>
> **[3:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=202)** Much like compliance, risk management sneaks in a fallacy in our approach to security.
>
> **[3:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=208)** I find this quote from Michal Zalewski in his book Tangled Web to be right on.
>
> **[3:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=212)** He says, "Risk assessment introduces a dangerous fallacy: that structured inadequacy is almost as good as adequacy and that underfunded security efforts plus risk management are about as good as properly funded security work."
>
> **[3:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=227)** Did you catch it?
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=228)** With compliance, we turn security engineers into an actuarial business.
>
> **[3:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=233)** Do you have a software vulnerability?
>
> **[3:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=234)** No need to fix it, just buy an insurance policy for it and you're good.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=238)** Needless to say, this doesn't actually make anything better.
>
> **[4:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=242)** Please don't misconstrue that I'm suggesting waterfall, compliance, or risk management are inherently bad in and of themselves.
>
> **[4:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=249)** However, I do believe that they've been applied to the industry over the years in ways that have led security away from solving the needs of the organization they are in.
>
> **[4:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=257)** So, where does security go from here?
>
> **[4:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=259)** One of the best things security can do is learn from the path of DevOps.
>
> **[4:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-history-in-short?u=76281980&t=263)** I mentioned earlier that I believe that security finds itself in a silo today much like operations was at the start of DevOps.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), let (1), this, (1), this: (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is an  (1), in other words (1), is a  (1)
> **Env Vars:** pci (1), hipaa (1)
> **Speakers:** - [instructor] (1)

#### Security and DevOps for the first time
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=0)** - [Instructor] Security and DevOps working together has a lot of names, DevSecOps, DevOpsSec, Rugged DevOps.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=8)** The important part is not the name.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=10)** Feel free to call it whatever you need in order to achieve the desired results, but the important part is adopting some new approaches to security.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=19)** I recommend three main approaches to security in the area of DevOps.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=23)** The first approach is to embrace the role of an enabler.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=27)** In your mind, juxtapose this with security being a blocker.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=30)** Instead of being the department or a team that blocks the release, be the department that helps everyone go faster and assert security quality at the same time.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=39)** In the end, the security team needs to understand this core principle.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=43)** If you're a blocker, you'll be routed around.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=46)** If you're an enabler then you add value.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=48)** Now that sounds good on paper, but it isn't as easy in practice.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=52)** One of the things I've seen work is to bring the security team together and ask, how can we help the overall software development pipeline go faster and be safer?
>
> **[1:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=62)** Once you have a list, find the lowest hanging fruit and use small projects to test out your ideas.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=69)** The next approach is to think about the software supply chain as a whole and look for places to add in security.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=75)** With the rise of a lot of the compliance frameworks, for many people security became more active.
>
> **[1:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=80)** You add in a certain control because compliance says you have to.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=84)** The new approach I'm recommending is to look from start to finish at your software supply chain and pinpoint areas where security can add value.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=92)** Shannon Lietz who is a good friend coined the term DevSecOps.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=97)** She has an excellent process for looking across your supply chain and asking questions to help identify areas to improve.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=103)** I have a slightly modified approach and think of a software supply chain as these six areas.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=108)** First design, what do you intend your software to do?
>
> **[1:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=112)** Can you make sensitive flows more secure?
>
> **[1:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=115)** The next is inherit, what software have you inherited such as libraries and dependencies?
>
> **[2:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=121)** What other layers of software are you inheriting from your OS or your service provider?
>
> **[2:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=127)** Can you create a software a bill of materials so when a new vulnerability comes out for a certain library, can you know whether you have that or not?
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=135)** The next is develop, as you develop, are you writing tests for security?
>
> **[2:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=140)** Ask if you're writing tests for auth for handling tokens and for the OAuth top 10.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=146)** Okay next is build, as you build your software, do you have security acceptance tests?
>
> **[2:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=153)** For the deploy stage, what happens to get software into production?
>
> **[2:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=157)** Are you securing config and secrets for the application and infrastructure?
>
> **[2:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=161)** Lastly operate, are you under active attack at this very moment?
>
> **[2:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=166)** Do you even know what is getting attacked?
>
> **[2:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=169)** This course is going to hone in on some of the middle sections of the pipeline in order to add automation to do security testing in a devops context.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=177)** However, I want to stress that it is important to think from design to operation when evaluating the software supply chain.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=184)** Okay, this leads us to our last approach.
>
> **[3:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=187)** Create feedback loops to automate your security improvement.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=191)** There are three main places I like to add feedback loops when getting started.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=195)** First is the Continuous Integration or Continuous Delivery system, CI or CD.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=200)** Sometimes it's referred to as the build system.
>
> **[3:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=203)** Popular CICD systems include Jenkins or Bamboo or SAS tools like Travis or CircleCI.
>
> **[3:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=209)** If you're unfamiliar with these, there is a class I recorded with Ernest Mueller here in the library under the title [[DevOps Foundations- Continuous Delivery-Continuous Integration]] where we cover CICID in depth.
>
> **[3:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=220)** Adding security testing to CI finds flaws in development and this is most often the best place to start with security automation.
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=228)** We will cover this in detail throughout the course and at the end of the course, we will put it all together with an example of adding security testing to a CI system.
>
> **[3:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=235)** Next I look for where deployment happens.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=238)** Generally there is a pre-prod or staging tier where changes get pushed before going to customers in a production capacity.
>
> **[4:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=244)** Sometimes deployment is handled by the CICD system itself, sometimes not.
>
> **[4:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=249)** The goal is to test against something that looks and acts exactly like production does.
>
> **[4:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=254)** This is a good place to run security attack tooling and anything that attempts to exercise several attack vectors in conjunction.
>
> **[4:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=261)** I also like to put longer running attacks here so as to not slow down the build, but more on that in future videos.
>
> **[4:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=268)** Lastly I look to production and try to monitor sensitive data flows against common attacks.
>
> **[4:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=273)** Most of my experience is in running large-scale web apps, but the idea is the same no matter the system.
>
> **[4:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=278)** Look for areas to instrument that allows you to have feedback to answer, am I under attack right now?
>
> **[4:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=284)** Using defensive tools like WAFTs or RASP for common web application security is a good start.
>
> **[4:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=290)** Adding instrumentation around authentication events like password resets and failed logins gives insight into account takeover attempts.
>
> **[4:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=298)** Really we can sum it up with our overall approach.
>
> **[5:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=301)** Our whole approach here could be summarized as first change culture by adopting the identity of an enabler.
>
> **[5:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=307)** Second, understand current state as you look across your software supply chain in order to remove blockers.
>
> **[5:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-and-devops-for-the-first-time?u=76281980&t=314)** And lastly, create positive change through exposing feedback loops throughout your system.

> [!info]- Semantic Content
>
> **Env Vars:** cicd (2), sas (1), cicid (1), rasp (1)
> **Definitions:** is a  (5)
> **CLI Commands:** find (1), make (1), cd (1)
> **Code Keywords:** assert (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Automated security testing basics
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=0)** - [Narrator] There is a parallel between Operations at the rise of DevOps and Security where it is today.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=6)** When DevOps when first was starting there was some thinking that operations was going to go away as a discipline as developers took all the responsibility away from the operations team.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=16)** Infamously, it was coined as "NoOps".
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=19)** Now nothing could've been farther from the truth.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=22)** Yes, the role of operations changed through DevOps and Ernest Mueller and I chronical this in our DevOps foundation course right here in the library.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=30)** However, operations is now more important than ever.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=34)** Security finds itself very much at the same crossroads.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=37)** When we automate security in the software delivery pipeline we are changing the role of what security has traditionally done in the past.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=45)** We're not really eliminating it.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=48)** Let's take a look at the role of the Penetration Tester.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=51)** A good penetration tester follows the methodology that follows these four stages: reconnaissance, mapping, discovery and exploitation.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=59)** In this class, we're going to take off the shelf attack tooling and instrument it into the development and build phases.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=66)** These tools cover a portion of Recon and Discovery however they're really just tools and only able to catch a piece of the overall vulnerabilities in an application.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=76)** For example, they may catch a cross-eyed scripting flaw but they won't be able to explain how that attack can be used to put critical business assets at risk.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=85)** By instrumenting your pipeline with attack tools you remove some of the low hanging fruit.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=89)** Security's role now shifts to bring value by adding this automation and then adding their expertise on top of it.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=97)** So what are the types of tools we can automate?
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=101)** There are two main classes of tooling that we can automate: Dynamic and Static.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=106)** In the industry there's a bunch of acronyms that describe tools like these; like SAST and DAST and IAST but for simplicity's sakes we're just going to think of them in these two broad buckets.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=118)** Static testing or Static Code Analysis refers to running tools that attempt to find vulnerabilities within source code without actually executing the source code.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=128)** This can be accomplished simply through looking for band functions via Grep or using full-blown static code analysis tools like Open-Source Brakeman and FindBugs or commercial variants like VeraCode or Fortify.
>
> **[2:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=140)** Ideally, these tools would run on every code command, however they can take a long time to run and require a bit of tuning to avoid all the false positives.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=149)** In my experience these are not the best candidates to putting in the hands of developers without security working side-by-side on tuning as they're just too slow and full of false positives.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=160)** Another class of Static testing is Mapping and Inventory Assessment.
>
> **[2:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=164)** These tools are excellent for development pipelines as they are fast and accurate.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=168)** I really like using Retire dot js in any web project that I work on.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=173)** It's simple to add and through my CI system it alerts me when I'm using a vulnerable version of JQuery or any other JavaScript library I might have bundled into my product.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=181)** Now, there are several large commercial providers like: Sonatype, Black Duck, and Jfrog that plug in easily to source control and CI systems.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=191)** Okay, let's talk Dynamic.
>
> **[3:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=193)** Dynamic tools actually interact with the running version of your application and attempt to find flaws and vulnerabilities at runtime.
>
> **[3:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=199)** Unlike static testing, these have a lower false positive rate.
>
> **[3:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=202)** However, they still aren't perfect.
>
> **[3:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=205)** Dynamic tools are the same tools run by real attackers, attacking your application to find weaknesses.
>
> **[3:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=212)** We can take these tools and harness them for our own testing.
>
> **[3:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=215)** If the attackers are able to use them, well hey, why shouldn't we?
>
> **[3:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=218)** Now there is a gotcha here, most of the dynamic tools can be slow and I mean painfully slow.
>
> **[3:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=224)** I've had many times where I turn one on come back hours later only to see there's 15 percent done.
>
> **[3:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=230)** Other times they run so long they end up crashing my laptop.
>
> **[3:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=233)** This is because most of them attempt to do all the phases of the penetration testing methodology.
>
> **[3:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=239)** They do Recon, Mapping, Discovery and Exploitation.
>
> **[4:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=244)** Dynamic tools can be run as a service through providers like Qualys or WhiteHat but I find them to be most useful when using open source attack tools and have them run on every code commit and every deploy.
>
> **[4:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=254)** Some open source tools to consider in this base, Arachni, Nikto and ZAP.
>
> **[4:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=259)** We'll be using Arachni and others throughout this course.
>
> **[4:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/automated-security-testing-basics?u=76281980&t=263)** We will cover how to tune these tools so they can run fast and target specific areas of your application with the right types of attack payloads.

> [!info]- Semantic Content
>
> **Code Keywords:** static (6), let (2), class, (1), require (1)
> **CLI Commands:** find (4), grep (1)
> **Env Vars:** sast (1), dast (1), iast (1), zap (1)
> **Definitions:** is a  (2), refers to (1)
> **Exercise Files:** source code (2)
> **Analogies:** for example (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [narrator] (1)

#### Tips for security automation for DevOps
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=0)** - [Instructor] Before we start writing tests, I want to cover four guiding principles that can help avoid a lot of the problems that can occur when doing security in a DevOps or Agile context.
>
> **[0:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=9)** Let's get to them.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=11)** Up first, don't slow down the build.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=14)** The build is the lifeblood of the development team.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=16)** When it is slowed down or breaks, the team can't get work done or software released.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=22)** One of your key tasks is to instrument security testing without adding too much time to the build.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=29)** How much time is too much?
>
> **[0:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=31)** Well, that depends on your shop, but I'm a believer in the Coffee Test.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=35)** If the build takes more time to run than it takes to go get a cup of coffee, then you have a problem.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=40)** For that reason, I recommend keeping your overall build time, including all the security tests, to less than five minutes.
>
> **[0:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=48)** If you find yourself in a situation where security testing is taking too long, then you might want to split tests into fast tests and slow tests.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=56)** Keep the fast tests in the main build job, and move the slow tests to the side by having them run in a parallel build.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=63)** Most build systems can handle this.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=66)** If you have really slow tests, you can run these on a nightly cadence, but use that as a last resort as you want to tie security testing to code commits as much as you possibly can.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=77)** If you're having problem with build times, try to find developers or QA people in your organization that do stress testing and performance testing.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=85)** They have the same sort of problems of long-running tests, and they can be a good source of ideas to overcome this in your organization.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=92)** The next piece of advice is this.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=94)** Don't block the build or the release.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=98)** Say your test identified a security vulnerability problem.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=102)** Be careful not to outright block the build.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=105)** This may seem antithetical to our purpose for the whole course, but security testing is tough to get right, and you need to be really sure it is a real vulnerability and not a false positive.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=115)** Because of that, I recommend being transparent and giving feedback to the developers and security team when problems are found, but not breaking the build like a normal test failure would.
>
> **[2:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=126)** Okay, so every rule is made to be broken.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=128)** There are some security tests you might want to block the build for, like credential exposure in the clear.
>
> **[2:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=134)** This is where a culture of working together to decide what tests are the most critical and most worth blocking for.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=141)** This brings up the next point.
>
> **[2:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=143)** Expose as much security information as you can.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=147)** The ChatOps movement brought operational information from monitoring systems all the way to developers, via chat interfaces and Slack and HipChat or IRC.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=156)** Look for ways to expose discovered problems in your automated testing into the development communication platform of choice.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=163)** All the popular platforms have webhooks and integrations that are easy to report with.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=168)** If you end up using a CI system with security testing, then most of the setup work will be pretty easy.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=173)** Okay, on to the last word of advice.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=177)** Have you ever had to fight with a library in Ruby?
>
> **[2:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=179)** You know what I'm talking about you, Nokogiri.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=181)** Well the next advice is born from lots of messing with dependencies and doing clean testing.
>
> **[3:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=187)** The advice is to use containers for all attack automation and security testing.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=192)** This eliminates problems from security tools requiring conflicting libraries themselves.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=197)** Also sometimes these tools save states from the run and commit a large result files and more problems.
>
> **[3:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=203)** You're basically taking this off-the-shelf attack tooling and putting them inside of your testing environment.
>
> **[3:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=209)** It only makes sense to block these off from the rest of the system.
>
> **[3:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/tips-for-security-automation-for-devops?u=76281980&t=213)** With these tips, you can avoid a good portion of the common pitfalls that come with doing automated security testing.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), for, (1), for. (1)
> **CLI Commands:** find (2), ruby (1)
> **Prerequisites:** before we start (1), setup (1)
> **Env Vars:** irc (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Security Automation: Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Setting up the demo environment
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=0)** - [Narrator] Let's get our lab set up so we can start writing tests to be mean to our code.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=5)** First you'll need to install docker.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=8)** For the course I'm using a Mac with Docker Community Edition on it.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=11)** Also called docker for Mac.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=13)** If you have a Window's machine you can install Docker for Window's.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=16)** If you're running Linux then the docker community edition is what you want.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=19)** And just follow the instructions for your distro.
>
> **[0:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=22)** Installation instructions and help are already available online at [docker.com](https://docker.com).
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=28)** This is a course on security testing and not on getting docker running.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=31)** We will continue on assuming you have docker installed already.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=34)** The commands I run throughout this course in the terminal are using bash on a Mac.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=38)** To work with Window's I recommend using the Window's 10 anniversary edition.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=43)** You can install the Linux Bash shell.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=46)** In this video, we're going to set up our vulnerable web application Gruyere.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=51)** Gruyere is written in Python and is simple to get launched.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=55)** In a browser I'm heading over to google-gruyere.[appspot.com](https://appspot.com).
>
> **[1:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=62)** One of the neat thing about gruyere is that you can run it for free online with no setup needed.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=67)** For our needs, we will be running it inside a docker container inside our system.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=72)** However, it's good to know that this is available.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=75)** Now let's click continue at the bottom of this page.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=79)** And you'll notice that if you go to googe-gruyere.[appspot.com/start](https://appspot.com/start) you will get your own version of gruyere running in Google appenger.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=89)** This starts a new instance with your own unique ID for you to discover application security vulernabilites inside of gruyere.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=96)** Let's head over to the next page by clicking continue at the bottom of this one.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=103)** This takes us to part two, or our google-gruyere.[appspot.com/part2](https://appspot.com/part2).
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=108)** And you'll see that inside here are the labs for gruyere that give hints for what you can find inside the application along with exploitation code and advise for fixing them.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=117)** In this class we won't be walking through this application but instead focus on creating automated security tests.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=123)** Our course has a main repo and you can access a zipped up version of it in the exercise files, or you can pull directly from the public git hub repo.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=132)** You can see it at [github.com/wicket/security-testing-class](https://github.com/wicket/security-testing-class).
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=139)** I have git setup with by github keys and I'm switching to the terminal, and I'm just going to pull it down using git clone.
>
> **[2:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=145)** I'm typing git clone git@[github.com](https://github.com):wickett/security-testing-class.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=156)** Once I move into that directory I can see all the files for the course.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=160)** I'm typing cd ./security-testing-class.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=165)** Let's list them all out.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=167)** I'm typing ls -la.
>
> **[2:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=170)** Let's look at the Makefile.
>
> **[2:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=171)** I'm typing cat Makefile.
>
> **[2:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=175)** I pull this up because in this video we'll be using Make as it parses a Makefile for just a few helpers.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=181)** To help make all the docker commands a little bit easier for us to remember.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=186)** As I mention, we will be using gruyere but in a local container much like if we were developing a web application on our own.
>
> **[3:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=193)** To do this we will pull a docker container from Karthequian, another instructor in the library.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=197)** It has gruyere already running in it.
>
> **[3:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=201)** It is just docker pull user name and the docker that we're looking for.
>
> **[3:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=207)** I've added a helper to our Makefile for this course and that'll help us get gruyere up and running.
>
> **[3:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=211)** I'm typing make get-gruyere.
>
> **[3:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=218)** This fetches the latest edition from docker hub and it makes available locally on our laptop.
>
> **[3:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=225)** Alright good, we got it.
>
> **[3:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=227)** Now I've included two other helpers in our Makefile for working with gruyere.
>
> **[3:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=230)** They are make gruyere start and make gruyere kill.
>
> **[3:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=234)** Let's start it up.
>
> **[3:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=235)** I'm typing make gruyere-start.
>
> **[4:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=240)** Alright, it says that gruyere is ready to go on port 8008.
>
> **[4:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=244)** In a web browser I can check that the application is running by visiting localhost:8008 in my browser.
>
> **[4:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=251)** Let's do that now.
>
> **[4:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=253)** Alright sure enough it's there.
>
> **[4:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=255)** Now this site has lots of vulnerabilities built into it, and that makes it a great way to learn about different application security issues.
>
> **[4:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=262)** I can also head back to the command line and run docker ps.
>
> **[4:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=265)** This shows me my container and what port it's listening on.
>
> **[4:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=269)** As we go through the course you will start and stop gruyere.
>
> **[4:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=273)** Let's go ahead and stop it.
>
> **[4:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=275)** Now here we're using docker kill because every time we run it, we want it to be fresh.
>
> **[4:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=279)** I'm typing make gruyere-kill.
>
> **[4:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=285)** Once that finishes I can run another docker ps and sure enough it's gone.
>
> **[4:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=291)** And this works just like we're hoping.
>
> **[4:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=293)** Alright now before we forget, let's go ahead and start it back up with a make gruyere start.
>
> **[4:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=298)** Let me clear my screen here.
>
> **[5:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/setting-up-the-demo-environment?u=76281980&t=301)** With these few commands you should be able to work with the rest of the labs.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (17), make (8), git (5), python (1), find (1)
> **Code Keywords:** let (10), continue (3), class. (3), public (1), for. (1)
> **Tools:** github (3), terminal (2), bash (2), command line (1)
> **Prerequisites:** install (3), set up (2), setup (2), you'll need (1)
> **URLs:** [appspot.com](https://appspot.com) (3), [github.com](https://github.com) (2), [docker.com](https://docker.com) (1), [localhost:8008](https://localhost:8008) (1)
> **Ports:** port 8008 (1), :8008 (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### Web application security quick tour
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=0)** - [Narrator] Make sure Gruyere is up and running by typing make Gruyere start.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=6)** Now let's head over to localhost:8008 in a browser.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=11)** When we are at the main page for Gruyere, the first thing I notice is that there is a user sign in and a sign up action.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=17)** First thing we can do is go and head over and create an account.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=20)** I'm clicking on sign up and using test for the user name and test for the password.
>
> **[0:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=26)** Alright, my account's created.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=27)** Now this gets me logged in.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=29)** Now when I go back to the home I notice there's some new items in my menu.
>
> **[0:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=33)** There's My Snippets, New Snippets, Upload.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=37)** Hmm, those all look very promising.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=39)** I also see my username oddly reflected back to me in kind of a weird way.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=42)** It might be worth looking into later.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=44)** But uploading files kind of sounds like a good place for command execution or directory traversal.
>
> **[0:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=49)** And that whole adding Snippets or New Snippets thing looks like a good place to take some user input.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=54)** Maybe where data won't get validated.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=56)** Well, why don't we just ahead and start there, we'll check that out.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=59)** I'm clicking New Snippet.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=61)** The site says it allows some HTML tags.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=65)** Hmm, this kind of looks like a good place to inject something if these Snippets get reflected back to the user.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=70)** Maybe we can bypass the filtering they have and insert a little JavaScript to get cross-site scripting working.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=76)** First, I'm just going to put in some plain HTML to see if that works.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=79)** I'm typing the HTML bold tag and the word test and we're just going to close that out.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=84)** And we're going to see if this Snippet gets uploaded.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=87)** Okay, that worked and it did make it bold, so there is some HTML passing through.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=92)** I wonder if we could do something like add a link.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=95)** And now I'm going to try to do that.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=97)** I'm opening up an HTML link.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=104)** And we'll call this test two, and we'll close down our link here.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=108)** Let's see if that works.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=110)** Alright, sure enough, the link gets made and it definitely looks like it's working.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=114)** Well, that worked out well, so I might try just adding the HTML script tag, but that actually gets blocked.
>
> **[2:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=120)** So I figured maybe we needed some way to let our script tag still get through.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=125)** Since links work, maybe we could do a little something with that. In fact, as you interact with it, you might realize that some events like onmouseover are allowed.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=135)** Let's add a third test here and see if we can get some cross-site scripting working.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=139)** So I've opened up a link tab.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=141)** I'm added the onmouseover.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=146)** I'm seeing if I can fire a JavaScript alert from here.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=149)** We'll just call it alert one, and we'll just anchor it to itself, and we'll call this the ever-clever test three.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=160)** Let me close out the HTML tag.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=162)** Alright, now we have this, alert one.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=165)** This is JavaScript, and so if this can get executed, then we have valid cross-site scripting.
>
> **[2:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=170)** Okay now, it looks like it added okay.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=173)** When I mouse over that Snippet, my JavaScript alert gets triggered.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=177)** Since other users in the system can see each other's Snippets, we now have a working example of a successfully stored cross-site scripting vulnerability.
>
> **[3:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=186)** Now, if cross-site scripting is new to you, don't worry.
>
> **[3:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=189)** Later in the course, we have several videos later explaining how cross-site scripting works and how to set up automated scanners to test for it.
>
> **[3:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=198)** As you browse around the set, you see there is a Profile.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=200)** I'm clicking Profile in the menu.
>
> **[3:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=203)** I'm sure this is another good place for us to look for more vulnerabilities.
>
> **[3:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=206)** And you can have lots of fun with this.
>
> **[3:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=208)** Our goal here was to look at Gruyere, and look at places where we could find vulnerabilities.
>
> **[3:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=212)** In fact, here we only looked at one vector for cross-site scripting.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=216)** There's several other areas on this site that have cross-site scripting.
>
> **[3:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=219)** Inside Gruyere, there is also a command execution, information disclosure, privilege escalation, and much more.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=226)** I recommend spending some time working through some of the Codelab on Gruyere over at google-gruyere.[appspot.com](https://appspot.com).
>
> **[3:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=233)** There's a complete guide with hints and solutions for finding all the vulnerabilities in Gruyere.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/web-application-security-quick-tour?u=76281980&t=238)** But now since our test site is up, let's go ahead and start looking some automated attack tools.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1), this. (1)
> **Env Vars:** html (7)
> **CLI Commands:** make (3), find (1)
> **URLs:** [localhost:8008](https://localhost:8008) (1), [appspot.com](https://appspot.com) (1)
> **Cross-References:** go back to (1), later in (1)
> **Ports:** :8008 (1)
> **UI Navigation:** in the menu (1)
> **Definitions:** is a  (1)

#### Application security attack tools
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=0)** - [Instructor] Let's get hands on with the popular web application scanner Arachni.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=4)** Scanners attempt to attack applications and find problems from cross-site scripting, or command execution, or other vulnerabilities.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=12)** For our lab environment we're going to use a Docker container with the attack tools and Gauntlt already built into it.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=17)** One of those tools is Arachni.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=20)** In a browser I've headed over to www.[arachni-scanner.com](https://arachni-scanner.com).
>
> **[0:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=26)** Arachni is an open source web scanner with a command line and UI component.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=32)** We will be working with the command line portion only throughout this course.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=36)** Out of the box Arachni is a first class web application scanner.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=42)** It covers cross-site scripting, SQL injection, command execution, and more.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=47)** Let's take a look at it on the command line but to do this we need to get our Docket container built and ready to use.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=54)** Let's head over to [github.com](https://github.com) and look at the Gauntlt Docker repo.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=58)** I'm typing [github.com/gauntlt/gauntlt-docker](https://github.com/gauntlt/gauntlt-docker) into my browser.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=64)** Now I'm selecting the Docker file inside the repo.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=69)** Let's look at this Docker file.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=72)** Our Docker image uses Ubuntu.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=73)** It installs Ruby, and a bunch of other OS packages.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=78)** And then later you'll notice it installs Gauntlt and then other attack tools like Arachni.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=85)** If we look at the way Arachni's installed you can see the source is downloaded and then is added to our operating system path inside of the container.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=92)** Now if you need to add new or different attack tools this is where you would add them.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=96)** Now let's go ahead and clone the Gauntlt Docker repo on our local machine.
>
> **[1:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=100)** I'm heading back to [github.com/gauntlt/gauntlt-docker](https://github.com/gauntlt/gauntlt-docker) and selecting to clone the repo.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=111)** I'll copy this statement here and head over to the command line.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=116)** Okay I'm typing git clone and then I'm pasting the line that I just copied.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=122)** Now that that's pulled down I'm ready to build my container.
>
> **[2:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=126)** Let's change directories into gauntlt-docker and now I can build my container using our make file shortcut.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=133)** I'm typing make build.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=135)** Now this step takes a bit so we're just going to speed it up here.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=148)** Okay great.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=148)** Once that's finished now I have a container ready to go.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=152)** It has Gauntlt and a bunch of other attack tool built into it.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=155)** I added a few helpers to the gauntlt-docker project to work with the container.
>
> **[2:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=159)** Let's run make space help to see what our options are.
>
> **[2:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=164)** One of our options is make interactive which gives us a shell inside the container we just built.
>
> **[2:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=170)** We will use this a few times throughout the course.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=173)** Let's go ahead and run make interactive.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=177)** I'm going to go ahead and clear my screen.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=179)** This starts up our container and it gets me inside the container in an interactive shell.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=184)** Now that I'm inside the container let's give running Arachni a try.
>
> **[3:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=188)** Let's just run Arachni with the dash dash version flag.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=192)** Alright everything looks good to go.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=195)** This shows us we're running the latest version of Arachni.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=197)** Now let's run a full scan using Arachni against our site gruyay.
>
> **[3:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=201)** I'm typing arachni and then [http://docker.for.mac.localhost:8008](http://docker.for.mac.localhost:8008).
>
> **[3:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=213)** This scan executes all of Arachni's attacks or what Arachni refers to as checks.
>
> **[3:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=217)** I'm targeting docker.for.mac.localhost because I'm inside the actual Docker container and Docker makes this handy little hostname available so that it can talk out to localhost.
>
> **[3:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=229)** In fact I have another container gruyay running on 8008 also exported to localhost so they're able to talk across each other.
>
> **[3:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=236)** If you're using Windows there's a similar extension for Windows.
>
> **[3:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=239)** It's docker.for.win.localhost.
>
> **[4:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=244)** Scanners like Arachni have a built in spider that enumerates all the pages on a site.
>
> **[4:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=248)** They build an index through crawling the site with all the links that it finds.
>
> **[4:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=252)** The index also looks for fields and parameters on the pages to test.
>
> **[4:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=256)** Some scanners will even try to predict unlinked pages for like slash admin and other pages and more.
>
> **[4:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=262)** A scanner like Arachni has thousands of payloads it uses to test and it tests out each of these pages and fields.
>
> **[4:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=268)** As you can guess all this takes a lot of time and a lot of requests.
>
> **[4:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=272)** So we're going to speed up this scan here with a little bit of movie magic.
>
> **[4:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=278)** The scan took over six minutes and it found a bunch of problems in our sample application.
>
> **[4:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=284)** Not all of these are actionable nor should you treat them the same.
>
> **[4:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=287)** This is where the tester's experience and knowledge of the application really comes into play.
>
> **[4:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=291)** For example you may just want to ignore the http only cookie whereas cross-site scripting vulnerabilities should be considered high priority.
>
> **[4:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=299)** In upcoming videos we will dissect this output further to make it a lot faster and a lot more actionable.
>
> **[5:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=305)** Hopefully you see that for us to fulfill the goals we set out earlier of not slowing down the build and passing the coffee test we can't just set and forget these attack tools.
>
> **[5:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-attack-tools?u=76281980&t=314)** There's a better way to run these tools in an automated testing fashion.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), make (6), find (1), ruby (1), git (1)
> **Code Keywords:** let (11), for. (3), try. (1)
> **Tools:** command line (4), github (3)
> **URLs:** [github.com](https://github.com) (3), [arachni-scanner.com](https://arachni-scanner.com) (1), [http://docker.for.mac.localhost:8008](http://docker.for.mac.localhost:8008) (1)
> **Definitions:** is an  (1), is a  (1), refers to (1)
> **Ports:** :8008 (1)
> **Env Vars:** sql (1)
> **Exercise Files:** clone the repo (1)

#### Security test automation with Gauntlt
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=0)** - [Narrator] Let's take a look at a way to harness these attack tools we've been looking at.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=4)** The tool we'll be using for this is Gauntlt.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=6)** I'm a core developer behind Gauntlt and I'm really excited to introduce this project to you.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=10)** Gauntlt is written in Ruby and runs using Cucumber, the very popular behavior driven development tool for Ruby.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=17)** Now, don't worry.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=18)** You don't have to know Ruby to use it.
>
> **[0:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=21)** Gauntlt is open-source under the very flexible MIT license.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=24)** Let's head over to the project's home over at [Gauntlt.org](https://Gauntlt.org).
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=28)** Gauntlt provides hooks to a variety of security tools and puts them within reach of security, development, and operations teams to collaborate to build rugged software.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=38)** Gauntlt works by wrapping attack tools and checking their output using plain text files that end in a .atk extension.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=45)** To do this, Gauntlt uses Gherkin syntax which takes a plain English approach to testing.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=51)** The key behind Gherkin are three words you, as an English speaker, already know how to use everyday.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=58)** Those three words are: given, when, and then.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=62)** These words function as the basis for Gherkin and also for Gauntlt.
>
> **[1:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=67)** Let's break them down in turn.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=70)** First given.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=72)** The given step should always encompass the assumptions you have about your test.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=76)** Given I have this dependency installed.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=78)** Given the test server is located at a certain address.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=82)** Given the user name and password is.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=84)** Basically all the stuff you expect to be true going into the test.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=89)** Next, when.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=90)** The when step could be summarized as the action step.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=93)** When I perform an action.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=95)** When I run this attack.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=97)** When I try to access a file.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=99)** These are the actions that you're performing and this is generally the heart of the test.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=104)** Next, then.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=106)** Then steps take a look at the output from the when steps and asks does this meet all my expectations?
>
> **[1:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=113)** Then the output should contain a certain value or then the output should not match.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=119)** You can think of then steps as the result parsing steps.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=123)** Now that's the basics of Gherkin and Gauntlt.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=125)** Given, when, then.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=128)** There are a few more other terms we'll discuss but this is the heart of it.
>
> **[2:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=131)** Those other terms are: Feature, background, and scenario.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=136)** Each Gauntlt attack file has a core purpose.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=138)** We call this the feature.
>
> **[2:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=140)** I like to split up my attack files into logical groupings around the purpose of the application and the types of security testing being worked on.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=147)** A good feature in an attack file might read something like this feature.
>
> **[2:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=151)** Look for cross-site scripting, or XXS, using Arachni against a URL.
>
> **[2:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=158)** This goes right at the top and it lets the reader know exactly what this attack is trying to do.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=163)** Next let's talk about scenarios.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=165)** Each scenario runs independently of each other.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=168)** You can share data across steps but not across scenarios.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=172)** Since they are isolated, you can put multiple scenarios in an attack file under one feature.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=177)** Now there may be some scenarios that have the same given steps.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=181)** This is pretty common.
>
> **[3:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=183)** In that case, we use background.
>
> **[3:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=185)** Background stanzas as run before each scenario.
>
> **[3:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=188)** Let's put this all together and look at a sample attack file.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=192)** For this example, we're just going to read through this.
>
> **[3:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=194)** The feature says, this attack's purpose is to make sure the right ports are open on the server.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=200)** Even though there is one scenario, there is a background stanza.
>
> **[3:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=204)** This is good practice as it makes it easy to add new scenarios later.
>
> **[3:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=209)** The stanza makes sure that the nmap is installed and it sets up a host variable.
>
> **[3:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=214)** Next, the scenario runs and it has a descriptor.
>
> **[3:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=217)** It says that it wants to find open ports.
>
> **[3:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=219)** In this scenario there is a when and a then step.
>
> **[3:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=223)** Notice how when is the execution and then is the output checking step.
>
> **[3:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=227)** This gets you started on how to write Gauntlt attack files and what they look like.
>
> **[3:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-test-automation-with-gauntlt?u=76281980&t=231)** Next let's write and run our own attack file from scratch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1), function (1), match. (1), case, (1)
> **CLI Commands:** ruby (3), make (1), find (1)
> **Env Vars:** mit (1), xxs (1), url (1)
> **Definitions:** is a  (2), we call this (1)
> **URLs:** [gauntlt.org](https://gauntlt.org) (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [narrator] (1)

#### Running your first automated attack
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=0)** - [Narrator] Before we get to writing our attacks, we need to make it so that our development laptop can use Gauntlt.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=6)** Since we have our nifty Gauntlt docker container, we can just call Gauntlt inside the container and pass our local attacks to it.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=14)** You can also install Gauntlt as a Ruby gem if you want.
>
> **[0:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=17)** But for this course we are just going to use the docker version.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=20)** Throughout the rest of this course, you will see me call this as gauntlt-docker.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=25)** And if you installed via Ruby gems, just use it as gauntlt instead.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=28)** To get gauntlt-docker in your path, there's a helper in the bin directory in the gauntlt docker repo from the one that we cloned earlier.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=36)** Let's copy that into our path now.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=38)** I'm typing cd to change directory into the gauntlt-docker repo.
>
> **[0:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=42)** Now I'm typing cp, which is copy, bin/gauntlt-docker into user local bin.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=50)** I can now run gauntlt-docker --help and it should just work.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=56)** Alright, looks good.
>
> **[0:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=57)** I'm going to clear my screen here.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=59)** Let's write and run our first attack.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=62)** The finished solution is in the exercise files under attacks/helloworld.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=66)** I'm moving into the course main repo with the change directory to security-testing-class.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=73)** In my text editor vim, which is what I prefer to use you can use anything, I'm opening up hello-world.attack.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=87)** Gauntlt looks exclusively for the .attack extension.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=90)** The first thing I need to do is write what this attack is supposed to do.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=94)** So here I'll type up the feature.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=96)** Hello world with gauntlt using the generic command line attack.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=104)** Okay, well now the test has a purpose.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=106)** Maybe not a very compelling one, but a purpose nonetheless.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=110)** Now we need to add a scenario.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=115)** I'm typing this scenario.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=116)** Inside the gauntlt-docker container evaluate the user accounts.
>
> **[2:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=124)** Okay so now we have a feature and a scenario.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=127)** Let's add our first step.
>
> **[2:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=129)** In this example I'm going to skip the given step and just start with a when step.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=133)** For other attacks we'll have given steps and background stanzas but for this one, since it's our first one, let's just get into it.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=139)** Gauntlt has a generic command line adaptor and that's the one I'm going to use.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=144)** I'm typing when I launch a generic attack with, and them I'm adding some triple quotes and saying cat etc password.
>
> **[2:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=151)** The triple quotes here just create a string that gauntlt can then execute later.
>
> **[2:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=157)** Now this is just looking at the etc password file inside the docker container.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=161)** Nothing too special here.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=162)** But let's go ahead and save this and try to run it.
>
> **[2:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=166)** I'm clearing my screen here.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=167)** I'm typing gauntlt-docker and then attacks, hello_world, hello-word.attack.
>
> **[2:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=176)** Now we can see we have one scenario with one step and it passed.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=181)** It's sort of uneventful so let's make it a little more exciting.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=184)** Let's add another step, but let's start with it failing first.
>
> **[3:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=188)** I'm opening up our hello-world.attack using vim, my text editor.
>
> **[3:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=194)** I'm adding a new step to parse the output of the previous step.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=197)** I'm typing then the output should contain, and I'm going to pass another string here.
>
> **[3:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=205)** For our string, let's use the words Bill Gates.
>
> **[3:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=208)** Of course there is Bill Gates here on the system.
>
> **[3:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=210)** I'm wanting to actually invoke a failure here.
>
> **[3:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=213)** Let's run it again.
>
> **[3:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=214)** Let's save.
>
> **[3:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=217)** I'm going to clear my screen and I'm going to run gauntlt-docker.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=221)** And I'm going to pass in the pack to hello-world.attack.
>
> **[3:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=224)** Alright, it failed.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=226)** There is no Bill Gates on the system.
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=228)** So notice here we had one scenario with two steps.
>
> **[3:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=232)** One passed which was our cat etc password, the when step.
>
> **[3:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=235)** And then the then step failed.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=238)** If we want to get this to pass let's just check for a user we know should be on the system.
>
> **[4:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=243)** Like the root user.
>
> **[4:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=245)** I'm editing the last step and I'm changing it to then the output should contain root.
>
> **[4:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=254)** Alright that looks good.
>
> **[4:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=256)** Now this should work.
>
> **[4:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=257)** Once I save this and run gauntlt-docker again, it passes.
>
> **[4:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=262)** Again I'm running gauntlt-docker and then passing in the hello-world.attack.
>
> **[4:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=266)** Okay that's great.
>
> **[4:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=267)** That's it four our first attack.
>
> **[4:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=269)** These attack files are the way we run security tests and different attack tooling in development and throughout our entire software delivery pipeline.
>
> **[4:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/running-your-first-automated-attack?u=76281980&t=277)** Gauntlt encapsulates the tool and provides a plain English way for users to interact with security.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (14), make (2), ruby (2), cat (2), cd (1)
> **Code Keywords:** let (12), pass (4), class. (1)
> **Tools:** vim (2), command line (2)
> **Code Identifiers:** hello_world (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 3. Application Security Automation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Application security vector: XSS
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=0)** - Cross-Site Scripting, shortened as XSS, is the perennial top vulnerability on the web-application security vulnerabilities list.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=8)** Well, what is it?
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=10)** OWASP provides this definition: Cross-Site Scripting attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted web sites.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=20)** But what does that mean in practice?
>
> **[0:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=22)** It means that since the browser executes JavaScript, the attacker is trying to get their own JavaScript to run with the execution of the rest of the page.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=30)** The most simple XSS payloads is like this one here.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=34)** It opens inline script html tags, and fires an alert.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=38)** When the attacker sees the alert return on their screen, they realize they have found a website that is vulnerable to Cross-Site Scripting.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=45)** Cross-Site Scripting is a favorite of attackers because it is widespread and flexible.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=50)** It works in all types of places where user input is accepted, and JavaScript is running.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=54)** Which is basically every site on the internet.
>
> **[0:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=57)** You can break up Cross-Site Scripting attacks into two classes: stored or reflected.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=63)** For stored Cross-Site Scripting, you might be able to leave Cross-Site Scripting in comments or through changing your profile to contain the malicious script.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=71)** These get stored in the database and live on for other users to discover later.
>
> **[1:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=76)** For reflected, they can be generated back to the user through search results or error messages.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=82)** Attackers will use links that reflect the malicious script back to their target, and this is a common approach for phishing campaigns through email.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=90)** But you may be thinking, "Isn't this just JavaScript, and not really that big of a deal?"
>
> **[1:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=95)** Well think about all the things JavaScript has access to.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=99)** The DOM, cookies, and a whole lot more.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=103)** Let's look at this example.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=104)** If we can leave this as stored Cross-Site Scripting in say, a comment on a webpage, then we can get this code to run in other people's browsers.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=113)** When they visit the page, then the current, valid cookie gets sent over to evilsite.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=119)** Now the attacker has a valid user session that they can use.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=122)** They don't even need a user name and password.
>
> **[2:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=125)** Now there's a lot more you can do with Cross-Site Scripting.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=128)** Enter BeEF.
>
> **[2:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=129)** The BeEF project contains a JavaScript payload that turns browsers into command and control servers.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=135)** BeEF hooks one or more web browsers, and uses them as beachheads for launching directed command modules and further attacks against the system from within the browser context.
>
> **[2:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=145)** I've used BeEF to hook browsers, and then do internal scans of intranets or pull down browser history from the hooked browsers.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=152)** There's a lot you can do here.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=154)** Since Cross-Site Scripting is so common, and can be very detrimental to our application's security, it is one of the best things to test for early in development.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=163)** This is because even though it is widespread and a common target, it is pretty easy to fix through sanitizing user inputs and encoding any output from the application.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=172)** If you need resources for fixing Cross-Site Scripting, [OWASP.org](https://OWASP.org) has plenty of resources.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/application-security-vector-xss?u=76281980&t=179)** Okay let's get an attack tool like Arachni, and set it to test for Cross-Site Scripting using gauntlet.

> [!info]- Semantic Content
>
> **Env Vars:** xss (2), owasp (2), dom (1)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Speakers:** - cross (1)

#### XSS attack automation
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=0)** - [Instructor] Security testing automation is a lot of fun, and now let's work with our first real automation test.
>
> **[0:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=6)** Here we'll use one of our scanners to test for cross-site scripting on our test site, Gruyere.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=11)** You want to make sure Gruyere is up and running.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=13)** To do this, let's go to the main repository.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=16)** I'm changing directories to security-testing-class.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=24)** Now that I'm in here, I'm going to use make gruyere-start.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=29)** Alright, this has Gruyere up and running on localhost port 8008.
>
> **[0:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=33)** We can do a docker ps to check and make sure this looks good, and there it is.
>
> **[0:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=39)** Now, let's also open a browser and head to localhost:8008 to make sure everything is running.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=44)** Alright, there it is, looks ready to test.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=47)** Let's get to writing an attack.
>
> **[0:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=50)** I'll clear my screen here and let's get started.
>
> **[0:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=53)** I'm going to open up a new attack file, which I'll call xss.attack, and I'll put it into its own directory so we can logically group attacks together.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=63)** The final version of this attack can be found in the exercise files.
>
> **[1:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=66)** First thing, from the main security testing directory, I'm going to type mkdir and then ./attacks/xss.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=75)** Let's open up xss.attack inside there.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=78)** I'm using vim, my IDE, for this.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=82)** Now, I want to start with a feature and I'll type this one: Look for cross-site scripting using arachni against our site.
>
> **[1:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=95)** Okay, that looks good, pretty simple.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=97)** It tells us what we are testing and what tool we are using.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=101)** Now features can have one or many scenarios.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=104)** So let's create a scenario right now.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=108)** I'm typing do a quick check for cross-site scripting and verify no issues are found on the login page.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=119)** Remember, the scenario needs to give the reader an idea for what is going on in the test.
>
> **[2:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=124)** Try to use as plain English as you can.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=127)** This scenario is clear on what we are testing for, what we expect to find, and where we are testing.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=133)** Next, we need to get started running our tests.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=136)** Let's make sure the tool we want to use is installed.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=138)** This best fits into a given step.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=141)** Let's add our given step.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=144)** I'm going to say given arachni is installed, simple enough.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=152)** This is telling Gauntlet to look in the path for tools it needs to run.
>
> **[2:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=156)** In this case, it checks the path for arachni.
>
> **[2:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=159)** Since we are using Gauntlet docker, it has arachni already loaded in the path available inside the container.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=165)** I really prefer this approach to put the Gauntlet and all the tools that I want to use all in one container.
>
> **[2:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=171)** This makes it easy for Gauntlet to access everything it needs and adds isolation of these attack tools to the rest of our development system.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=179)** Okay, remember, the given step is all the assumptions for our test.
>
> **[3:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=183)** Right now, our assumptions are incomplete since we have information about the attack tool arachni but nothing about the target, so let's add that.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=191)** I'm typing and the following profile and giving a couple of values here.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=197)** Gauntlet lets you add profiles with this simple statement to set up a name and a value, that makes a map here.
>
> **[3:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=204)** Here I'm adding a variable called url that I can later use in other steps in this scenario.
>
> **[3:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=210)** You probably noticed I'm using a long host name here, docker.for.mac.localhost.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=216)** This is a special helper that docker provides so that we can talk to the host machine.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=221)** And in this case we are talking to another docker container that is running the Gruyere application on port 8008 exposed on that host machine.
>
> **[3:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=229)** If you are using Windows, you would replace this with the host name docker.for.win.localhost.
>
> **[3:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=236)** You might have also noticed that I'm using some pipes here and I've got this table layout and I added some extra spacing and padding there.
>
> **[4:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=243)** None of the spaces really matter, you could do that, I just did this for visualization.
>
> **[4:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=247)** But the way it's laid out here with the name and value is important.
>
> **[4:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=250)** So you always have to have the first row start out with name value and then you can put whatever values in below.
>
> **[4:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=256)** Now our given step is all set up.
>
> **[4:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=258)** Let's write our when step.
>
> **[4:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=259)** I'm typing when I launch an arachni attach with and then I'm using some triple quotes here.
>
> **[4:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=265)** Gauntlet uses these triple quotes to separate out what commands it's going to run.
>
> **[4:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=270)** Even though this is several lines long, it is all one step.
>
> **[4:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=273)** Let's fill in between the triple quotes right now.
>
> **[4:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=275)** For the actual arachni execution, I'm typing arachni and then I'm adding some flags here.
>
> **[4:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=281)** I'm saying xss checks, scope page limit of one, and then I'm passing in url.
>
> **[4:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=287)** This runs arachni and the basic xss check and it only tests one page.
>
> **[4:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=294)** Notice we are using the less than and greater than brackets to reference our url variable, which we set in the profile.
>
> **[5:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=300)** Doing this is not required, but using this style helps you reuse these tests without hunting down hard-coded values.
>
> **[5:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=306)** I could have easily just put in the value up above in the actual attack.
>
> **[5:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=312)** Okay, this all looks good; the last thing we need to add is what we expect the result to be.
>
> **[5:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=317)** For this, we will use a then step.
>
> **[5:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=319)** I'm adding then the output should contain zero issues were detected.
>
> **[5:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=327)** When arachni exits without any problem, it emits this message of zero issues were detected.
>
> **[5:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=332)** We're just telling Gauntlet to look for this.
>
> **[5:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=337)** Okay, let's run it and see if it goes.
>
> **[5:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=339)** I'm typing gauntlet-docker and then I'm passing in the xss attack.
>
> **[5:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=347)** Oh no, this failed.
>
> **[5:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=349)** Now, don't get too worried; I was actually expecting this.
>
> **[5:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=351)** This error says that it timed out because it took longer than three seconds to run.
>
> **[5:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=356)** Well, we can fix this by marking this test as a slow test.
>
> **[6:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=366)** I'm typing the @ sign and slow at the very top of the attack and saving it.
>
> **[6:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=371)** By adding the slow tag to the top of the attack file, we're telling Gauntlet to let each scenario run for 30 seconds.
>
> **[6:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=378)** Let's save it and run it again.
>
> **[6:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=381)** Okay, now we see no errors and it runs okay.
>
> **[6:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=384)** This got us running the xss payload in arachni and writing a check against the login page.
>
> **[6:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation?u=76281980&t=389)** We can extend this even further.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this. (3), this, (2), for. (2), class. (1)
> **CLI Commands:** docker (7), make (5), mkdir (1), find (1)
> **Ports:** port 8008 (2), :8008 (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **URLs:** [localhost:8008](https://localhost:8008) (1)
> **Env Vars:** ide (1)
> **Tools:** vim (1)

#### XSS attack automation refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=0)** - [Instructor] Arachni ships with a lot of other checks.
>
> **[0:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=3)** In our previous scenario, we were just using the basic cross side scripting check and only on our login page and it didn't find anything wrong with the site.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=12)** However, as you know, GreeA is a vulnerable application and it does indeed have cross side scripting inside it.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=18)** Let's set up a second scenario to do a more thorough job of testing the login page.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=24)** We will still be using the same attack file.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=27)** Let's reopen attacks slash XSS slash XSS dot attack.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=32)** I'm opening opening up in vim my ID.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=35)** Now, I don't want to change our previous scenario.
>
> **[0:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=37)** However, let's add a second scenario.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=40)** I've just copied my original scenario and pasting it below.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=45)** Since this is a new scenario, let's rename the scenario to this.
>
> **[0:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=49)** Do a full XSS check and verify no issues are found against the login page.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=55)** Okay, let's rename our scenario to this.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=58)** Do a full check for cross side scripting and verify no issues are found in the login page.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=64)** It's still mostly the same but here we're implying that we're doing a full or a broader scope of checks.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=70)** Notice how in each scenario I'm repeating my given margin.
>
> **[1:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=73)** This might look a lot cleaner if we moved all these given steps to a background stanza since they're exactly the same.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=79)** I'm going to just move these lines to the top of the file and let gauntlet know that these are background steps.
>
> **[1:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=86)** The background executes before each scenario.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=89)** Okay, this looks a lot cleaner now.
>
> **[1:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=91)** Now, we still haven't changed our second scenario.
>
> **[1:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=94)** In arachni, there are over 60 checks and attack payload groups.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=98)** Out of these 60 plus checks, seven of them are cross side scripting related.
>
> **[1:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=102)** Previously we were just running the basic XSS check.
>
> **[1:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=105)** Let's see what else is available to us.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=107)** I'm going to my guantlet repo and typing make interactive to get a shell inside the gauntlet docker container.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=115)** Let me clear my screen here.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=117)** Okay, now I'm in the container.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=118)** Now, let's see what arachni has available for other checks.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=122)** I do this by typing arachni dash dash checks dash lists.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=128)** Alright, that's quite a bit of text.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=130)** As you can see, there's a lot of checks involved here.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=135)** Let's make this a bit more readable and do an alphabetic sort as well.
>
> **[2:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=142)** Here, I'm grepping out the name of the checks and I'm sorting them.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=147)** Okay, that's a little easier for us to look at.
>
> **[2:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=150)** Notice, there are all these other cross side scripting checks.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=155)** Arachni lets you execute multiple checks with a wild card operator.
>
> **[2:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=158)** Before we adjust our gauntlet attack file, let's test out how arachni works.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=163)** Let's run arachni with all the cross side scripting checks against GreeA and we do this by typing arachni dash dash checks equals xss star.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=173)** Again, I'll type it and then I'll resay it.
>
> **[2:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=175)** Arachni checks... Alright, I'm typing arachni and then I'm passing in the checks.
>
> **[3:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=184)** I'm using the wild card operator with XSS there.
>
> **[3:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=187)** I'm still limited to just look at the login page with a page limit of one and I've given it specifically our docker for mac local host at 4008 at slash login.
>
> **[3:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=197)** Alright, let's run this.
>
> **[3:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=201)** Now, arachni is showing that it found cross side scripting and it looks like it found it in the URL path.
>
> **[3:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=207)** Notice that the output no longer says zero issues were detected and now says with issues, two.
>
> **[3:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=213)** We can validate this in a web browser ourself.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=216)** I'll open up a web browser heading over to localhost colon 8008 slash login.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=221)** Now arachni says the problem is in the URL pack.
>
> **[3:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=225)** Let's add a simple XSS attack to the URL.
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=228)** I'm typing script alert one script and hitting enter.
>
> **[3:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=232)** Okay, looks good.
>
> **[3:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=235)** Alright, now I get a JavaScript alert message showing that yes, indeed we found cross side scripting.
>
> **[4:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=241)** Now that we've used arachni and verified that it's a real cross side scripting problem, let's make sure to add this to our gauntlet attack.
>
> **[4:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=249)** Let's exit out of the container.
>
> **[4:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=252)** Let me clear my screen.
>
> **[4:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=253)** And we'll go back to our security testing class repo.
>
> **[4:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=257)** And I'm going to open up attacks, xss, xss.attack.
>
> **[4:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=262)** Now I'm just editing our statement for arachni to run all the cross side scripting payloads using the wild card operator after XSS.
>
> **[4:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=272)** Alright, that'll get them all.
>
> **[4:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=274)** Okay, this looks good.
>
> **[4:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=275)** Let's go ahead and run it.
>
> **[4:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=277)** This time, when we run gauntlet, we should see this error out as it will detect the cross side scripting problem.
>
> **[4:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=283)** Let's test it out.
>
> **[4:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=284)** I'm typing gauntlet dash docker and then I'm feeding in the attack file.
>
> **[4:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=290)** Our first scenario still passes but yup.
>
> **[4:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=292)** Our second one fails.
>
> **[4:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=294)** If we scroll up a bit, we see that we found the same errors we saw when we tested manually.
>
> **[4:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=299)** This style of testing where we run the attack tools and then set them up in repeatable test.
>
> **[5:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=304)** This is exactly the type of testing we want to accomplish.
>
> **[5:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=307)** Now imagine handing this attack file off to a developer or other security engineer.
>
> **[5:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=312)** This file can easily be extended to test other portions of the site or adjusted to completely different target.
>
> **[5:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/xss-attack-automation-refactoring?u=76281980&t=317)** We have democratized security testing by putting plain English around these attack tools.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), this. (3)
> **Env Vars:** xss (7), url (3)
> **CLI Commands:** make (3), docker (3), find (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** vim (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** imagine (1)

#### SQLi attack automation
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=0)** - [Instructor] SQL injection, often abbreviated SQLi, and pronounced as SQLeye, is a common web application vulnerability, that is probably not unknown to you.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=10)** It occurs when a user is able to add or inject their own SQL into the application.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=15)** This means an attacker could read the database, or modify data in the database, or even use it to get access to the administration operations on the database.
>
> **[0:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=24)** When you see news articles with thousands or millions of records being dumped, SQLi is probably the attack vector behind the scenes.
>
> **[0:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=31)** [OWASP.org](https://OWASP.org) has several examples, but this is probably the easiest to look at, to get an idea for SQL injection.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=38)** Here we're seeing select everything from the items table, with a specific owner and a certain item name, and it's taking fields in from a form.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=46)** When all of the items get selected, instead of just the intended one, this is because the single quote closed out with the SQL, and the rest devaluates to a true statement.
>
> **[0:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=55)** This could logically be represented as select everything from the items table.
>
> **[0:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=59)** You can see where this is bad.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=61)** Defensive measures for SQL injection can be accomplished through parameterized queries, using stored procedures, whitelisting, and managing database privileges, to name a few.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=71)** If you're looking for more info on how to defend against SQL injection, I suggest checking out OWASP's SQL injection prevention cheat sheet.
>
> **[1:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=78)** There's a link to it in the course handout.
>
> **[1:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=81)** This brings us to testing for SQL injection.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=83)** There is a tool that is a favorite of security engineers, penetration testers and hackers alike, sqlmap.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=90)** Sqlmap is an open source tool written in Python, that automates looking for SQL injection flaws and taking over of database servers.
>
> **[1:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=98)** We can spend days talking about sqlmap with the number of options it has.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=101)** This is sort of a Swiss army knife of SQL injection.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=104)** For our purposes, we're just going to narrow down the scope of the tool.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=108)** Now, okay Gruyere does take user input, but it doesn't actually use SQL behind the scenes, so it's not actually vulnerable to SQL injection.
>
> **[1:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=115)** But, we can still use Gruyere as a way to test for SQL injection.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=118)** I will show you how to write an attack that tests our login page for SQL injection.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=123)** This will give you a starting point for working with gauntlt and sqlmap in your own environment.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=128)** For this, I'm going to our attacks directory, and looking for SQLi form.attack.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=133)** I've already started this attack file.
>
> **[2:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=135)** You will notice that at the top, we've added a new tag of really slow.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=139)** This lets gauntlt run for 10 minutes per scenario, whereas the slow tag only allows for 30 seconds.
>
> **[2:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=145)** Like I said, sqlmap is pretty big.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=147)** Next, you can see our feature.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=148)** The feature says, run sqlmap against our target and test any web forms found on the page.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=154)** And our scenario includes a given step, it says, given sqlmap is installed.
>
> **[2:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=160)** For sqlmap, specifically it checks that Python is there, and that there is an environment variable of sqlmap_path.
>
> **[2:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=167)** That has to exist, and it automatically provides this as a lower-case variable to use in later steps.
>
> **[2:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=173)** This is some behind the scenes magic that gauntlt is doing.
>
> **[2:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=176)** You could make it a little more clear, by adding this as a variable under your target URL in the profile.
>
> **[3:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=182)** Even though this happens automatically with gauntlt, and it isn't exactly clear when you're writing a test, if you were to run this step without all of gauntlt's expectations being met, it would provide some help text in the error message it returns to you.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=195)** Alright so, let's add our when step, the actual execution of sqlmap.
>
> **[3:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=198)** I'm typing, when I launch a sqlmap attack with, and then I have my triple quotes, and now I'm going to add in my sqlmap statement.
>
> **[3:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=215)** Here I'm calling sqlmap, using the sqlmap path variable, and giving it our target URL.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=221)** Then I'm adding a verbosity of one, which is the default, then I'm telling it to run in batch mode, so it doesn't try to prompt for user input while it runs.
>
> **[3:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=230)** Next, you can see we're testing for a login form.
>
> **[3:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=233)** I give it the --forms flag, to tell it to parse forms on the page.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=238)** After that, you see the dbms SQLite here.
>
> **[4:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=241)** Here I'm telling it to not waste any time trying to numerate or guess what the DB is.
>
> **[4:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=246)** If I'm the developer, I already know what it is.
>
> **[4:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=249)** Next, I give it the fields that I know that are on the form page that I want tested.
>
> **[4:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=255)** Like I said, there can be a lot of options.
>
> **[4:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=258)** Well let's go ahead and try to parse the output here.
>
> **[4:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=260)** Alright, let's add our then step.
>
> **[4:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=263)** I'm typing, then the output should contain, I'm going to add my triple quotes again, and say, all tested parameters do not appear to be vulnerable.
>
> **[4:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=272)** This is the message that shows up when sqlmap doesn't think that our form has SQL injection.
>
> **[4:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=286)** Alright, let's save this and run it, and I'm feeding in the attack we just made into gauntlt docker.
>
> **[4:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=299)** Alright great, that passed.
>
> **[5:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=300)** Now, it did take a while, it actually took 33 seconds.
>
> **[5:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=303)** Now you might be asking, why are we tuning this attack so much?
>
> **[5:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=306)** Well, we want it to be fast, because sqlmap is like ARACHNE.
>
> **[5:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=309)** It will try to scan and enumerate everything.
>
> **[5:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=312)** That can take a lot of time.
>
> **[5:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=314)** As the developer, you already know where the forms on your side are.
>
> **[5:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=317)** You already know what database you're using.
>
> **[5:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=319)** You already know what form fields are being accepted.
>
> **[5:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=322)** You have the home field advantage here.
>
> **[5:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=324)** So it's important to use that knowledge in advantage to tune these scanners to test faster, and more acutely, for your specific situation.
>
> **[5:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=331)** Okay great, that finished.
>
> **[5:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=333)** Everything looks good, and it did take over 30 seconds here, so that was really important we added the really slow tag to it.
>
> **[5:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/sqli-attack-automation?u=76281980&t=339)** Running sqlmap like this, lets you put it inside of your delivery pipeline.

> [!info]- Semantic Content
>
> **Env Vars:** sql (15), owasp (2), url (2), arachne (1)
> **Code Keywords:** let (4), this, (2), default, (1), while, (1)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** python (2), make (1), docker (1)
> **Code Identifiers:** sqlmap_path (1)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Speakers:** - [instructor] (1)

#### Automating a fuzzer
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=0)** - [Instructor] One of the ways penetration testers and security engineers gain access to places they shouldn't be is just by guessing values for paths, or users, or whatever.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=10)** This guessing is called fuzzing, and of course security testers don't generally do this manually, but instead they outsource this task to automated fuzzers.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=19)** This can lead to all sorts of goodness, such as finding hidden admin pages, or finding temporary files with config information in them, sometimes it leads to finding test servers or test versions of the applications.
>
> **[0:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=32)** In rare, but particularly damaging situations, entire backups of the database get discovered.
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=38)** Fuzzers can also be used to attempt to overload the system by entering in a bunch of junk, or unexpected input, to crash the application.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=46)** This can lead to error messages that disclose sensitive information or invoke a denial of service situation.
>
> **[0:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=52)** These are just a few scenarios of how fuzzers are used.
>
> **[0:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=58)** In this course, we are going to use the open source tool DIRB.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=61)** DIRB is a fast, lightweight web fuzzer written in C.
>
> **[1:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=65)** It uses dictionaries and lists to enumerate a web application's contents.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=69)** Now, unlike our other scanners, DIRB doesn't do anything with its findings, meaning, it doesn't attempt to exploit it, or exercise anything it finds, it just reports what it finds.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=79)** This is perfect for putting in a gauntlt attack.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=82)** Let's take a look at DIRB before we automate it.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=84)** I'm heading over to the gauntlt docker repo we cloned.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=88)** I'm typing in change directory, cd, to gauntlt docker.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=92)** And now I'm using the make file to interactive access to the shell, so I'm going to type make interactive.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=99)** Alright, I'm logged into my container, let me clear my screen.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=103)** Since DIRB is loaded in our path already, we can just run DIRB with no arguments.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=108)** That will actually pull up the help menu for DIRB, so I'm just typing DIRB.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=113)** There are several options for the tool that might be helpful for you.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=116)** I find I use the -w flag when using it with gauntlt so it doesn't pause at warning messages.
>
> **[2:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=122)** I also use the -f flag, which helps DIRB handle 404 pages a little more gracefully.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=127)** The other two most common flags I use are the -capital x, to add an extension for the application I'm testing, for example like a php extension, and there's also a -n flag, which you can use to say ignore certain HTTP codes, like 301s, or 500s.
>
> **[2:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=142)** At the bottom of this help output, there are a few examples for your reference.
>
> **[2:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=147)** DIRB works using a simple format of DIRB, then the URL to test, then the wordlist to use, and any options.
>
> **[2:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=154)** In case you need more info on DIRB, in the course handout I've included a link to a short tutorial for using it.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=161)** Let's move on, since fuzzing hinges on the payloads, let's do a quick list of what dictionary lists come with DIRB right out of the box.
>
> **[2:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=168)** I'm moving into the wordlist directory, by typing cd ./dirb222/wordlists.
>
> **[2:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=176)** Let's look at the contents of this directory.
>
> **[2:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=178)** I'm typing ls -la.
>
> **[3:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=181)** There are several lists and files and dictionaries in here.
>
> **[3:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=185)** Let's look at the common.txt.
>
> **[3:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=191)** In common.txt, there's over 4500 entries.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=195)** When I look at common.txt, I see all sorts of entries in the dictionary here.
>
> **[3:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=201)** Being that it's over 4500 entries just in the small common.txt, this is fine if you're able to do this manually, and you want to do some further testing, but when automating with gauntlt, I prefer to use the smaller list for speed, and for tuning of our actual attack.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=216)** Now I'm typing ls -la ./vulns.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=221)** Inside this wordlist directory here, there are lists that are tuned for app servers or languages.
>
> **[3:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=227)** Do you have IIS?
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=228)** Or maybe you're using Apache or Tomcat.
>
> **[3:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=231)** These are a must use, if you're using any of these servers, as they find example pages and configuration information that all too often gets exposed.
>
> **[4:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=240)** One list I always like to use with gauntlt, especially in a CI/CD pipeline is test.txt.
>
> **[4:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=247)** Let's take a look at it.
>
> **[4:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=248)** I'm typing cat and then ./vulns/test.txt.
>
> **[4:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=252)** This is a very short list, with variations of the word test, testing, and demo in English as well as in Spanish.
>
> **[4:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=260)** Now, I like this, because most organizations have a test portion of their application, or test data.
>
> **[4:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=265)** These are generally meant to be used in a pre-production environment, but shouldn't be released in production.
>
> **[4:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=271)** Let's add a gauntlt attack to check and make sure we don't accidentally expose anything like this on production.
>
> **[4:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=276)** I've partially started an attack for this.
>
> **[4:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=279)** You can find the completed version in our attacks folder under webfuzzer/dirb.attack.
>
> **[4:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=284)** Let's go ahead and open it.
>
> **[4:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=291)** I'm clearing my screen here and logging out of the container, and I'm opening it up with my text editor, Vim.
>
> **[4:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=298)** This should look pretty familiar to you by now.
>
> **[5:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=300)** We are adding our slow tag to give us 30 seconds for each scenario.
>
> **[5:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=303)** If you need more time, use the really slow tag.
>
> **[5:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=306)** Our featuring scenario here tell us about the test, and next we see our profile.
>
> **[5:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=311)** There are two variables we set.
>
> **[5:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=313)** DIRB_wordlist_path, and wordlist.
>
> **[5:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=317)** Notice for DIRB_wordlist_path, we are listing it here, but letting the user know that it is actually being overwritten by the environment variable called DIRB_wordlist.
>
> **[5:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=329)** This is good practice to be explicit, since gauntlt's use of environment variables isn't apparent to someone using it for the first time.
>
> **[5:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=340)** Okay, now let's add our DIRB attack.
>
> **[5:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=341)** I'm typing DIRB, and then I'm using the hostname variable, and then the DIRB wordlist path, and the wordlist I actually want to test.
>
> **[5:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=350)** The wordlist I'm using is vuln/text.txt.
>
> **[5:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=354)** This uses all of our variables from the profile, and then we add the -w and -f flags.
>
> **[6:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=360)** That helps us tune for error pages, and continue on past warnings, like we talked about earlier.
>
> **[6:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=369)** Next, let's parse our output.
>
> **[6:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=371)** I'm typing then the output should contain, and then saying found:0.
>
> **[6:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=377)** Now this is the output that DIRB automatically puts out, and we're telling gauntlt that none of the words in the test.txt dictionary were able to be found in Gruyere.
>
> **[6:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=388)** Okay, let's save this and run it.
>
> **[6:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=391)** Now, before you run this, make sure Gruyere is running.
>
> **[6:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=394)** You can do that by typing make space Gruyere -start from the main security testing class repo.
>
> **[6:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=399)** I already have it running for me, so let's just go ahead and run the attack.
>
> **[6:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=402)** I'm typing gauntlt docker and then I'm feeding in the attack of DIRB.attack.
>
> **[6:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=408)** Alright, my attack ran, and since it is running locally, it was pretty fast.
>
> **[6:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/automating-a-fuzzer?u=76281980&t=413)** This wraps up testing with with our web fuzzer DIRB, and hopefully gives you a taste of what you can do with it.

> [!info]- Semantic Content
>
> **Env Vars:** dirb (19), http (1), url (1), iis (1)
> **CLI Commands:** make (5), docker (3), cd (3), find (3), ls (2)
> **Code Keywords:** let (13), this, (2), this. (1), continue (1)
> **File Paths:** common.txt (4), test.txt (2), vulns/test.txt (1), vuln/text.txt (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** we talked about (1)
> **Tools:** vim (1)

#### Network testing on the fly
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=0)** - [Instructor] Ever leave the development or admin port open on production?
>
> **[0:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=3)** Ever have admins or developers make changes to the network without approval?
>
> **[0:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=7)** An easy way to make sure you don't have regressions or new ports being opened up is through network validation.
>
> **[0:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=12)** Network validation is simple, and fun, with Nmap, an open source tool, which is short for Network mapper.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=19)** Nmap is incredibly flexible, and able to do much more than check ports.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=23)** It can also identify operating systems, and can fingerprint loads of things, from a MySQL database to a WordPress instance.
>
> **[0:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=30)** It does this through the Nmap Scripting Engine, referred to as the NSE.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=34)** There are hundreds of NSE scripts available on [nmap.org](https://nmap.org).
>
> **[0:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=38)** Since Nmap is a much beloved tool of network engineers and security testers alike, let's get on with automating it.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=45)** I'm opening attacks/network/port.attack in my text editor, Vim.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=54)** By now, this is old hat for you.
>
> **[0:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=56)** In this attack, we have our standard feature and scenario, and we make sure Nmap is installed.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=61)** Additionally, we set up our profile.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=69)** Okay, this attack is missing the when and then steps.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=72)** So let's start by writing our when step.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=75)** I'm typing "When I launch an 'nmap' attack with:" And then saying nmap -F, which is the fast flag, and then giving the host variable from above.
>
> **[1:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=84)** In this case, this is our docker.for.mac.localhost, which we've used several times throughout the course.
>
> **[1:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=90)** Next, let's check our output.
>
> **[1:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=92)** To do that, I'm typing "Then the output should match:" And then triple quotes.
>
> **[1:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=97)** 8008/tcp open.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=101)** This is Nmap's normal output.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=103)** Let's save it and run it.
>
> **[1:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=108)** All right, great.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=109)** This checks to make sure that the right port is open.
>
> **[1:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=111)** And for us, this is port 8008.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=114)** This match works under this scenario.
>
> **[1:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=116)** However, sometimes Nmap has the output with extra spaces, and it can lead to failing tests, or flaky tests.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=123)** Gauntlt needs to be smart enough to handle variations in output and still keep running.
>
> **[2:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=128)** Until now, we've been happily looking at our output using one-to-one matches.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=132)** But Gauntlt actually uses regex for any parsing step that has the word "match" in it.
>
> **[2:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=138)** Let's change our output to regex.
>
> **[2:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=141)** I'm opening up the file again, and I'm changing our line to remove the space and add a \s+.
>
> **[2:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=149)** The \s+ operator is a regular expression that will match one or more spaces between the word tcp and the word open.
>
> **[2:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=157)** Let's make sure it still works, and lets run it again.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=163)** Okay, we can see that regex worked.
>
> **[2:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=165)** Now, knowing we have the power of regex, let's look at one more attack using Nmap.
>
> **[2:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=171)** This attack is already all done for us, and it's in the attack/network directory.
>
> **[2:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=175)** I'm going to show it here using Cat.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=177)** So I'm typing cat attacks/network/simple-regex.attack.
>
> **[3:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=189)** In this file, we're verifying that the server is not available on standard web ports, which are the port 80 and port 443.
>
> **[3:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=198)** To do this, we're telling Nmap to do a simple two port check.
>
> **[3:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=206)** Notice the output parsing in our then statement.
>
> **[3:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=209)** We have two options here.
>
> **[3:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=210)** One is an inline matcher that is delineated by using forward slashes.
>
> **[3:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=215)** Now since Nmap has forward slashes in its output, we just swap the forward slash for the regex wild card, the dot operator.
>
> **[3:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=222)** Also notice we're telling Gauntlt it should not be this output.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=226)** For all of the output parsing we've done so far, we can do the negative match, as well, by specifying not.
>
> **[3:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=233)** Just like our next line.
>
> **[3:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=235)** "And the output should not match:" And then we have port 443 here.
>
> **[4:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=240)** The triple quotes here also let us do multi-line matches if we wanted or needed to.
>
> **[4:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=245)** Because the triple quotes are the delineator here, we don't need to use the wild card dot operator from regex.
>
> **[4:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=251)** We can just go back to using the forward slash.
>
> **[4:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=253)** Okay, let's run this.
>
> **[4:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=255)** But let me show you another little Gauntlt trick.
>
> **[4:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=257)** I'm changing directories, and typing cd attacks/network.
>
> **[4:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=264)** I'm going to clear my screen here.
>
> **[4:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=266)** When you run Gauntlt, it looks in any subdirectories and finds any files ending in .attack, and tries to run them.
>
> **[4:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=272)** In here, we have our two attacks that we just looked at.
>
> **[4:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=275)** Now I can run gauntlt-docker with no arguments, and it's going to find these files and execute them.
>
> **[4:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=285)** So having no arguments, it runs both attack files that we just worked on, since they're in the same subdirectory where we ran Gauntlt from.
>
> **[4:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=292)** So it looks like our network checks are working.
>
> **[4:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=294)** And if you are looking for more network parsing, you might be interested in using Nmap's XML output format and Gauntlt's XML parser.
>
> **[5:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=302)** Check out the course handout for an example of working with the XML parsing.
>
> **[5:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=307)** Of course there's a lot more to Nmap than just port checking.
>
> **[5:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/network-testing-on-the-fly?u=76281980&t=310)** Also in the course handout, I've included a link to the freely available Nmap book, to give you some more ideas on how to use Nmap in your Gauntlt attacks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), match: (2), case, (1), for. (1), this, (1)
> **CLI Commands:** make (5), docker (2), cat (2), mysql (1), cd (1)
> **Env Vars:** xml (3), nse (2)
> **Ports:** port 443 (2), port 8008 (1), port 80 (1)
> **Definitions:** is a  (2), short for (1), is an  (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Cross-References:** go back to (1)
> **Tools:** vim (1)

#### "Be mean to your code" in practice
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=0)** - [Instructor] So far, we've created automation to run attacks against our site.
>
> **[0:05](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=5)** These attacks have been through the use of tools like the network tester Nmap, and the application vulnerability scanner, Arachni.
>
> **[0:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=13)** We have automated a web fuzzer, and looked at several application vulnerability classes like cross edge scripting and SQL injection.
>
> **[0:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=20)** Along with all this, we've used Gauntlt to wrap these testing tools so they fit better in a testing workflow.
>
> **[0:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=27)** Gauntlt promotes the idea of "be mean to your code."
>
> **[0:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=31)** This harnesses application attack tooling inside of the software development life cycle.
>
> **[0:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=36)** In the recently released book, Agile Application Security, there's a dedicated chapter on this topic, and they cover Gauntlt.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=43)** Though not as in-depth as we've gotten here.
>
> **[0:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=47)** In the book, the authors share my sentiment on how to do security testing.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=51)** They write, "The goal should be to come up with "a set of automated tests that probe and check "security configurations and runtime system behavior "for security features that will execute "every time the system is built "and every time it is deployed."
>
> **[1:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=67)** Okay, that's great.
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=69)** But you might be wondering, where do I go from here?
>
> **[1:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=71)** How do I take what I've learned here and put it in practice in my organization or my team?
>
> **[1:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=76)** First let's take a look at how to extend Gauntlt's functionality for doing more testing.
>
> **[1:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=81)** Let's start with Gauntlt syntax.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=83)** Gauntlt uses Gherkin keywords.
>
> **[1:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=85)** In the course handout, there is a Gauntlt cheat sheet.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=88)** You will find these Gherkin keywords there for reference.
>
> **[1:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=91)** These should look familiar, because all along, we've been happily working with Gauntlt, using given, when, then.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=96)** Also, as we went, we discussed features, scenarios, and backgrounds.
>
> **[1:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=100)** These aren't completely new, but I'm putting them here so you have a reference.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=104)** We also have been using the Gherkin operators.
>
> **[1:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=106)** The triple quote to create a string, pipes for table declaration, and the @ sign for tags and # for comments.
>
> **[1:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=113)** One note here on tags is that Gauntlt looks for specific tags of @slow and @reallyslow, which we've talked about.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=119)** However, you can use whatever tags you want to create logical groupings of attacks.
>
> **[2:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=124)** I often will tag attack files for classification using tags like @web or @network to group similar types of attacks.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=133)** Once tagged, you can run Gauntlt to execute only those tags by adding the -t flag, or you can also use --tags, and specify your desired tags, or tags you want run.
>
> **[2:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=144)** Now, what about writing steps, or figuring out what other attack tools you can use?
>
> **[2:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=150)** Let's move over to the command line, and type gauntlt-docker --help.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=155)** The help menu shows you how to use Gauntlt, and since there aren't too many options here, let's go through a few of them.
>
> **[2:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=161)** Let's start with the allsteps flag.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=163)** I'm typing gauntlt-docker --allsteps.
>
> **[2:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=171)** This shows all the steps that are available for us to use in any Gauntlt attack file.
>
> **[2:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=176)** There are two portions.
>
> **[2:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=177)** At the top of this output, there are all the steps that Gauntlt uses for file and output parsing.
>
> **[3:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=182)** Gauntlt loads these from the Aruba library, which is part of Cucumber.
>
> **[3:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=187)** They are under the heading "File and output parsing steps."
>
> **[3:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=191)** These are worth reading through to be familiar with.
>
> **[3:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=193)** Below that section, there's the heading "Gauntlt attack steps."
>
> **[3:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=198)** These are all the attack steps we've been working with.
>
> **[3:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=200)** You probably notice the Gherkin keywords of given, when, and then aren't here.
>
> **[3:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=205)** That's because these words are English words that are helpful for us, but Gherkin treats them functionally equal.
>
> **[3:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=211)** You can use given, or when, or then, with any of these steps.
>
> **[3:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=215)** I've taken some of the most common steps here and put them in the Gauntlt cheat sheet with the course handout.
>
> **[3:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=223)** Another option to look at is the --format option.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=226)** You can use this to emit formatted output.
>
> **[3:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=229)** Let's try it out and generate some HTML output.
>
> **[3:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=234)** I'm going to call my hello_world attack here.
>
> **[3:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=239)** And I'm going to add the --format.
>
> **[4:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=243)** We're going to set it to HTML.
>
> **[4:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=246)** I'm going to save it out to out.html.
>
> **[4:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=250)** Now I have the output from the run on disk in the out.html file.
>
> **[4:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=254)** I am now opening that up in a browser, and we can now see our output.
>
> **[4:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=258)** If any of the steps had failed, it would've been colored red.
>
> **[4:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=262)** This is really useful for reporting.
>
> **[4:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=264)** This should get you ready to write more Gauntlt attacks.
>
> **[4:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=267)** However, you may be wondering what security tests you should look to next.
>
> **[4:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=270)** I recommend going back to some of the tools we've already looked at, like Arachni, and looking at all the other checks we didn't use.
>
> **[4:38](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=278)** Another good way to get ideas for tools to use is to ask Gauntlt what attack adapters it provides.
>
> **[4:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=284)** To do this, let's look at --list.
>
> **[4:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=289)** This shows all the attack adapters that are available.
>
> **[4:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=292)** Don't misconstrue that Gauntlt somehow installs these.
>
> **[4:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=295)** Instead, it has helpers built in to handle them.
>
> **[4:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=298)** However, in our Gauntlt docker image that we've been using, we've installed a few of these tools already.
>
> **[5:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=304)** Notice here that there's a generic attack adapter.
>
> **[5:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=307)** This adapter allows you to execute anything you can run on the command line.
>
> **[5:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=311)** If Gauntlt doesn't already provide an attack adapter for your tool, just use the generic attack adapter.
>
> **[5:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=318)** The exercise files included with this course are one way to get started.
>
> **[5:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=322)** However, you can find more examples of attack files on github in two places.
>
> **[5:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=326)** The Gauntlt main repo, and the Gauntlt demo repo.
>
> **[5:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=330)** These are linked in the course handout, as well.
>
> **[5:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=332)** You will find some of the tools we've already covered, but there are also attack files using SSLyze, Curl, custom Python scripts, and more.
>
> **[5:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/be-mean-to-your-code-in-practice?u=76281980&t=339)** Taking these and adding them to your own library is a good next step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), new, (1)
> **CLI Commands:** find (3), docker (3), curl (1), python (1)
> **Env Vars:** html (2), sql (1)
> **Tools:** command line (2), github (1)
> **File Paths:** out.html (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** hello_world (1)
> **Cross-References:** we discussed (1)


### 4. Security Testing in Software Delivery Pipelines

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Shift left and the DevOps way
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=0)** - [Instructor] Continuous delivery has made a huge impact on business today.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=4)** It seems everyone is working on delivering software faster.
>
> **[0:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=7)** Even though continuous delivery hit the scene after DevOps, it soon came to be one of the hallmarks of doing DevOps.
>
> **[0:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=14)** At Signal Sciences, where I work, we deploy 10 to 15 times per day.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=18)** We like to measure deploys and total cycle time.
>
> **[0:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=21)** That is the time from code commit, to running and production.
>
> **[0:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=25)** Generally our total cycle time is around five minutes, with three or so minutes going to the build, one minute or so for testing, and 45 seconds to a minute for deploys.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=35)** Signal Sciences is a SAS based security company that defends web applications, micro services, and APIs in real time for some of the largest web scale companies.
>
> **[0:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=44)** Our ability to deploy changes rapidly means we can get new features out to our customers as soon as our team has them ready.
>
> **[0:51](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=51)** But since we're a security company, how embarrassing would it be if we shipped something like cross site scripting out the door?
>
> **[0:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=57)** Security testing on every code commit and deploy is critical for us.
>
> **[1:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=62)** I helped build the deployment pipeline at Signal Sciences, and in it we have Gauntlt in a Docker container to run test just like the ones we've build in this course.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=70)** This is shifting left.
>
> **[1:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=72)** In a waterfall software development life cycle, all the testing gets done at the far right.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=77)** Moving tests closer to when the code is being written is the shift left.
>
> **[1:22](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=82)** Now, the test we've been writing throughout this class can all be applied to a CICD pipeline.
>
> **[1:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=87)** There is one issue here.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=89)** You might have noticed in each test we set up a profile and then added our special host name available from Docker, that's the Docker.for.mac.localhost, or if you're Windows it would be .win in there.
>
> **[1:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=100)** That's fine for local development and testing, and working on my host machine.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=104)** However, your CICD system is probably a Linux system, so what do you do?
>
> **[1:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=110)** Gauntlt has environment variables that you can set in the config.
>
> **[1:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=114)** They work like environment variables in Cucumber, if you're familiar with those.
>
> **[1:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=118)** You drop them into a config directory in a file called cucumber.yml.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=123)** The contents of cucumber.yml look something like this.
>
> **[2:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=127)** Here, TARGET_HOST would be usable as a variable inside your Gauntlt attacks.
>
> **[2:13](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=133)** Consider this background stanza.
>
> **[2:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=136)** It uses an approach similar to regular profiles, but instead of the name value row at the top, it is changed to name, and environment variable name.
>
> **[2:26](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=146)** This loads cucumber.yml and looks for the environment variables there.
>
> **[2:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=150)** It is important that you have the config directory where the cucumber.yml is stored is the same location as where you're invoking Gauntlt.
>
> **[2:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=157)** If you need more help with this, there's an entry in the Gauntlt wiki on this topic, and the link is in the course handout.
>
> **[2:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/shift-left-and-the-devops-way?u=76281980&t=163)** With this in mind, let's set up a CI system.

> [!info]- Semantic Content
>
> **File Paths:** cucumber.yml (4)
> **Code Keywords:** for. (1), this. (1), this, (1), let (1)
> **Env Vars:** cicd (2), sas (1), target_host (1)
> **CLI Commands:** docker (3)
> **Analogies:** just like (1), similar to (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Security testing in CI/CD
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=0)** - [Instructor] For continuous integration for the course, I decided to go with Travis CI.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=4)** Travis CI was the first to turn continuous integration into a software as a service offering, and I've used it for many years.
>
> **[0:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=11)** I really like Travis CI as they're a software as a service offering, but they're free for open-source projects to use.
>
> **[0:18](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=18)** At Signal Sciences, we use a similar setup that I'm going to show here, but we do it all in Jenkins.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=23)** The actual CI system is not that important as long as it supports using Docker containers.
>
> **[0:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=29)** I am opening my browser to [travis-ci.org/wickett/security-testing-class](https://travis-ci.org/wickett/security-testing-class).
>
> **[0:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=36)** I can see the latest build and the results.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=40)** Travis shows me red or green, whether I passed or failed, and how long the whole thing took.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=45)** There is a badge that you can insert into a webpage that shows your current status.
>
> **[0:53](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=53)** Now we'll click Build History, and I can see the status of all the past jobs that I've run.
>
> **[0:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=57)** This all looks great, but how is it all set up?
>
> **[1:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=60)** Let's head over to our security testing class repo in GitHub.
>
> **[1:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=64)** This is at [github.com/wickett/securitytestingclass](https://github.com/wickett/securitytestingclass).
>
> **[1:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=69)** In here is a file called travis.yml.
>
> **[1:11](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=71)** This is the config that Travis uses as instructions for the build.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=75)** Let's check it out.
>
> **[1:20](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=80)** The first few lines are letting Travis CI know what kind of instance to put on the job and tell Travis CI to use Docker.
>
> **[1:29](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=89)** Next, we have a stanza of before_install.
>
> **[1:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=96)** In here, we have taken some of the shortcuts from our make file and added them here.
>
> **[1:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=101)** Since our demo uses two Docker containers, I've made sure to pull both of them here.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=107)** Travis CI works just like our development environment.
>
> **[1:49](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=109)** It will run gruyere as a daemon on port 8008, and then we'll use our second container, gauntlt-docker, to execute attack files.
>
> **[1:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=117)** This is just like what we've been doing, only now it is our CI system that is doing the heavy lifting.
>
> **[2:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=123)** There's a line in here that says ./scripts/travis-config.sh.
>
> **[2:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=130)** Let's take a look at this.
>
> **[2:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=132)** I'm moving up a level, and then opening the scripts directory and clicking on travis-config.sh.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=139)** This script finds the IP address of the host, and then sets the environment variable in the config/cucumber.yml.
>
> **[2:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=148)** It sets this up as a TARGET_HOSTNAME environment variable.
>
> **[2:32](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=152)** This isn't a permanent change.
>
> **[2:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=153)** It's just for the build.
>
> **[2:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=155)** Let's go back to our main config over at the root of the project in .travis.yml.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=162)** In this script portion, the long statement here is just telling Travis to use gauntlt in a Docker container, much like we've been doing throughout the course in our helper script gauntlt Docker that we put in our path at the start of the course.
>
> **[2:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=174)** Notice what attacks we're running here, hello-world and our environment variables attack.
>
> **[2:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=179)** I also took the cross-site scripting attack and made some changes.
>
> **[3:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=183)** Let's open up attacks/ci/xss.attack.
>
> **[3:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=188)** This is in the exercise files of course, but let's just view it in GitHub.
>
> **[3:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=195)** Notice how it is using our environment variable approach.
>
> **[3:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=201)** Also, at the bottom, I've changed it so that even though it detects two cross-site scripting issues, it will still pass.
>
> **[3:27](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=207)** You obviously don't want to do this in real life, but this is just for the demo.
>
> **[3:31](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=211)** Now that we've worked our way through the configuration of Travis, let's fire a build and check the results.
>
> **[3:37](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=217)** Any change, no matter how small, will invoke the build to run.
>
> **[3:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=221)** So instead of heading back to the command line, let's just stay in the browser, and let's do all of our edits from here.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=226)** I'm opening up the readme and making a small change to the readme, which will kick off a build.
>
> **[3:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=234)** Add a little message in here.
>
> **[3:56](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=236)** It says, "Thanks for watching, and be sure to star this repo if you like the course."
>
> **[4:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=256)** Now I've committed this change, and this launches a Travis CI run.
>
> **[4:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=261)** Let's head back over to Travis CI and watch the build run.
>
> **[4:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=264)** Since this takes a little time, we will speed it up.
>
> **[4:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=280)** The build looks good.
>
> **[4:41](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=281)** We can see that our Docker containers got downloaded and then our attacks got run.
>
> **[4:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=286)** This puts security testing alongside other tests, and this approach can work for almost any CI system you're working with.
>
> **[4:55](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=295)** Like I said, even though we did this in Travis, at work, we use Jenkins in the same fashion.
>
> **[5:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=300)** We've run over 10,000 deploys through it in the last two years.
>
> **[5:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/security-testing-in-ci-cd?u=76281980&t=303)** Security has to be part of delivering value, and we move security tests to where the code is being written as much as we can.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), class. (1), this. (1), pass (1)
> **CLI Commands:** docker (7), make (1)
> **File Paths:** travis.yml (2), scripts/travis-config.sh (1), travis-config.sh (1), config/cucumber.yml (1)
> **Tools:** github (3), command line (1)
> **URLs:** [travis-ci.org](https://travis-ci.org) (1), [github.com](https://github.com) (1)
> **Cross-References:** go back to (1), in the last (1)
> **Documentation:** the readme (2)
> **Definitions:** is a  (2)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Start automating security testing
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=0)** - Now you have the basics down, where do you go from here?
>
> **[0:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=3)** If security testing and automation was just about using a new fangled tool, then this would be easy.
>
> **[0:08](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=8)** However, this effort is a cultural shift, and requires engaging the teams responsible for building, and delivering your application.
>
> **[0:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=15)** When starting out automating security testing, I recommend that people start slow, it's important to realize that security testing is a process.
>
> **[0:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=23)** Like any cultural change, there needs to be an environment of shared understanding, created between those involved.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=28)** Knowing that security is not trying to be a blocker, but is instead trying to be an enabler, goes towards that goal.
>
> **[0:35](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=35)** This builds up a mutual respect between the groups, where there is traditionally been finger pointing, and blame between development and security groups.
>
> **[0:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=43)** This all comes together with focusing on collaboration.
>
> **[0:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=46)** Development, security and operations collaborate together on adding security to the software development life cycle, and delivery pipeline.
>
> **[0:54](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=54)** I find that most people doing the form of testing that I've recommended in this course, end up building a suite of tests inside their organization.
>
> **[1:01](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=61)** These tests are often reusable between teams because the projects share development languages, data back-ins, and are deployed on the same cloud infrastructure.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=70)** Often, these are even being employed by the same people as agile and dev-ops principles move developers to the work.
>
> **[1:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=77)** All of this lends itself favorably to a reusable suite of security tests.
>
> **[1:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=83)** When making these tests, you may feel that you want a 100% coverage of an application.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=88)** However, I recommend starting small, and be willing to start with even 20% coverage.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=93)** Automated security testing has moved earlier in the life-cycle, and is trying to find even the low-hanging fruit.
>
> **[1:39](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=99)** So even 20% now is better than leaving it all to the end of the project.
>
> **[1:44](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=104)** Lastly, we've talked about this many times throughout the course, but make sure security testing is fast, and not on blocking.
>
> **[1:50](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=110)** Otherwise, it won't be adopted.
>
> **[1:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=112)** But what about the people making security testing a reality in your organization?
>
> **[1:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=117)** The first step is to involve security engineers.
>
> **[1:59](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=119)** I find it useful to ask, "What manual security testing "tools do you use most frequently?"
>
> **[2:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=124)** I also like to ask, "What are the most common "security problems you find in this organization or team?"
>
> **[2:09](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=129)** Once you find out their normal tooling and their biggest concerns, you have common ground to start working together to create automation around that.
>
> **[2:17](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=137)** Next, make sure you involve operations.
>
> **[2:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=139)** I love to ask operations teams, "What security "issues are you most worried about?"
>
> **[2:24](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=144)** I also ask, "What is getting most attacked right now?"
>
> **[2:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=148)** And, "What kind of attacks are they?"
>
> **[2:30](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=150)** I generally find operations teams are worried about SSL or server security issues, you know in light of heart bleed and shell shock, and the struts two vulnerabilities of recent years, I mean, who can blame them.
>
> **[2:42](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=162)** However, I don't often get a great answer to what types of attacks are we getting right now.
>
> **[2:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=166)** As this generally takes additional operational instrumentation, that most places really just don't have.
>
> **[2:52](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=172)** But if you do get an answer, then you easily have a priority for automation, but if not, that's okay, just punching down the o-wasp top 10, that's probably a really good place to start.
>
> **[3:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=182)** Lastly, I like to ask developers, "What parts "of the application "are you most worried about getting attacked?"
>
> **[3:07](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=187)** I get the best answers from developers, usually revolving around authentication or sessions.
>
> **[3:12](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=192)** These are excellent places to collaborate on.
>
> **[3:14](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=194)** Developers are really familiar with the concept of regressions like past software bugs occurring again, because of this asking, "Have we had "security problems in the past with this application?"
>
> **[3:23](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=203)** That's another great place to start.
>
> **[3:25](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=205)** I mean, why not write up a script to attempt to invoke an old problem, to assure that it won't come back and get us in the future.
>
> **[3:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=213)** That's an excellent place to start with developers.
>
> **[3:36](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=216)** Okay, I'll close out with this on how you work with third-party security consultants.
>
> **[3:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=220)** Now, don't worry, the company I work for, Signal Sciences, we provide a security defense product, but not consulting.
>
> **[3:46](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=226)** So I'm not going to give you a pitch or anything here.
>
> **[3:48](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=228)** What I am going to recommend is when you work with auditors, penetration testers, and other security consultants, ask them to deliver a test that you can put in to your automation suite.
>
> **[3:58](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=238)** I call this my policy of deliver tests, not PDF's.
>
> **[4:02](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=242)** If they refuse, then hey, you know it's time to find a new consultant.
>
> **[4:06](https://www.linkedin.com/learning/devsecops-automated-security-testing/start-automating-security-testing?u=76281980&t=246)** No matter where you find yourself, whether as a security professional, or a developer, or an operations engineer, the best time to start is today.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), make (2)
> **Env Vars:** ssl (1), pdf (1)
> **Definitions:** is a  (2)
> **Code Keywords:** for, (1)
> **Cross-References:** earlier in (1)
> **Best Practices:** recommended (1)
> **Speakers:** - now (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=0)** - [Instructor] As we wrap up the course I want to leave you with some next steps.
>
> **[0:04](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=4)** I'm reminded of Steven Bellovin's comment in the opening of his recent book, Thinking Security.
>
> **[0:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=10)** Companies are spending a great deal on security, but we read of massive computer-related attacks.
>
> **[0:16](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=16)** Clearly something is wrong.
>
> **[0:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=19)** The root of the problem is twofold.
>
> **[0:21](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=21)** We're protecting the wrong things, and we're hurting productivity in the process.
>
> **[0:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=28)** Through this course I hope you're able to turn this trend around inside your team or organization.
>
> **[0:34](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=34)** You're now armed with the tools and practices that will get you protecting the right things and increasing overall productivity.
>
> **[0:40](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=40)** My friend Shannon Lietz is fond of saying, safer software sooner.
>
> **[0:45](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=45)** Throughout the course, we have built up some automated security testing, and through the exercise files and the course handout you have resources available to dig deeper into many of the topics we've covered here.
>
> **[0:57](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=57)** One of the best ways to get automating is to spend time using the tools we worked with in the course but in new ways.
>
> **[1:03](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=63)** Using more of their features or scoping them to pinpoint issues that are relevant to your technology stack.
>
> **[1:10](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=70)** If you're new to DevOps I encourage you to look here in the library for some other resources.
>
> **[1:15](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=75)** Ernest Mueller and I have recorded several other courses on the subject of DevOps.
>
> **[1:19](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=79)** If you find yourself needing more help with CI/CD efforts, I encourage you to look at the course DevOps Foundations Continuous Delivery and Continuous Integration.
>
> **[1:28](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=88)** If you need more of a primer on DevOps then be sure to check out DevOps Foundations.
>
> **[1:33](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=93)** Since Ernest and I both have a background in security, and we believe in joining the security tribe to the DevOps tribe, each of these courses has a section dedicated to security.
>
> **[1:43](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=103)** Thanks for joining me on this journey together, and I hope you enjoyed the course.
>
> **[1:47](https://www.linkedin.com/learning/devsecops-automated-security-testing/next-steps?u=76281980&t=107)** Good luck, and I hope you have fun as you get started with security testing.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), cd (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[James Wickett]]

## Resources

- Exercise files available

## Skills Covered

- Application Security
- DevSecOps
- Security Testing

## Path Context

### In [[Get Ahead in DevSecOps]]
← [[Devops Foundations Devsecops]] | **2 of 5** | [[DevSecOps- Building a Secure Continuous Delivery Pipeline]] →

## Appears In

- [[Get Ahead in DevSecOps]]

## Related Courses

_Courses sharing skills:_

- [[Application Security in DevSecOps]] — Application Security, DevSecOps
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -5 Security Misconfiguration and -6 Vulnerable and Outdated Components]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Node Js Security]] — Application Security

---

[↑ Back to top](#)